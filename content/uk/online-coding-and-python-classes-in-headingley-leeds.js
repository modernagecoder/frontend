'use strict';
// Headingley, Leeds (cg- district page, UK cluster Phase 9, row 459). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you process a file that is too big to hold in
// memory? (Python generators and lazy evaluation against building a full list first).
// Data (read 30 September 2026): Ordnance Survey Code-Point Open, dataset version 2026.3.0 (RM update 17 July 2026, OGL):
// 120 CSV files inside the zip, 1,749,109 postcode rows for Great Britain. Column 10 is the admin ward code.
// Our run (scratchpad hdl/gen.py, CPython on our machine, tracemalloc): list approach (read every row into a list, then
// filter): peak 1,113.6 MB, 33.2 s. Generator pipeline (yield one row at a time, count as you go): peak 0.1 MB, 24.4 s.
// Both give the same answers: 885 postcodes in LS6; 491 in Headingley & Hyde Park ward (E05011397), 490 of them in LS6 and
// 1 in LS2.
// Lesson family: generators / lazy evaluation / streaming (memory against convenience). Screened: "generator expression",
// "lazy evaluation" 0 hits in content/uk, nl, ie; claimed in claims.txt. Corby used the same OS file for sorting and
// Southampton for hash tables; Leeds city page = reservoir sampling on footfall (a different streaming idea).
// Place facts: Census 2021 TS001 (Nomis): Headingley & Hyde Park ward (E05011397) 31,175 usual residents. postcodes.io
// places (Leeds, LS6) suburban areas: Headingley, Far Headingley, Headingley Hill, Hyde Park. LS6 also lists wards
// Kirkstall, Weetwood, Chapel Allerton, Moortown, Little London & Woodhouse.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HEADINGLEY', label: 'Headingley, Leeds', blurb: 'Online coding and Python classes for Headingley in Leeds, with a project that reads 1.7 million postcodes without running out of memory.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-headingley-leeds',
  code: 'hdl',
  accent: '#1F5F7A',
  accentRationale: 'Headingley: a deep petrol blue (hand-picked for hue distance from other Phase 9 pages, contrast above 6:1)',
  pageType: 'city',
  place: {
    name: 'Headingley',
    eyebrow: 'Headingley, Leeds, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Leeds' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-leeds', name: 'Leeds' }],
  nav: [
    { label: 'Leeds', href: '/best-coding-class-in-leeds' },
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Headingley, Leeds',
  title: 'Online Coding and Python Classes in Headingley, Leeds | 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Headingley, Far Headingley and Hyde Park learners in Leeds LS6, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Headingley, Leeds, with a project that streams 1.7 million postcodes through a Python generator.',
  twitterDescription: 'Headingley, Leeds: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Headingley, Leeds',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Headingley, Hyde Park and the rest of LS6, taught live with reasoning first.'
  },

  h1: 'Online coding and Python classes in Headingley',
  capsuleQ: 'Which are the best online coding and Python classes in Headingley?',
  capsule: 'Headingley and Hyde Park ward in Leeds had 31,175 usual residents at the 2021 census. Headingley, Far Headingley, Headingley Hill and Hyde Park are the suburban areas recorded there, all in the LS6 postcode district. From six-year-olds to adults of 67, learners join our India-based tutors on live video for coding, Python, AI, vibe coding and maths, taught one-to-one or in a class of five to ten at the same stage. We teach how to reason about a program before how to prompt for one, so learners can tell when code works by luck. Lesson one is free and ends with a suggested course. The Headingley project opens the Ordnance Survey\'s national postcode file, 1,749,109 rows, and finds the LS6 postcodes two ways: one needs over a gigabyte of memory, the other almost none. Ongoing lessons are USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'The first version of most data programs reads the whole file into a list and then works on the list. It is simple, and it works until the file is bigger than the computer\'s memory. Python has a quieter tool for that day: the generator, a function that hands over one item at a time and remembers where it stopped. Chain a few together and data flows through like water through pipes, never all in the building at once. This project measures the difference on a real file. Ordnance Survey\'s Code-Point Open lists every postcode in Great Britain, and the task is to pull out the ones for Headingley.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Headingley, Leeds?',

  picks: {
    eyebrow: 'Headingley course picks',
    h2: 'Python, thinking and AI courses for Headingley',
    intro: 'Four courses, chosen by age. The first class on any of them is live and free, and we take no card to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: doing a big job one piece at a time, and keeping only what you need.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then hunt for what it got wrong.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to files, generators and real datasets such as the postcode file.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data work, memory-aware code and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Headingley and LS6',
      h2: 'Headingley, Far Headingley, Headingley Hill and Hyde Park',
      intro: 'The census count for the ward, and the places recorded in its postcode district.',
      body: [
        { kind: 'table', caption: 'Headingley in the 2021 census (ONS table TS001, via Nomis)', head: ['Area', 'Usual residents'], rows: [
          ['Headingley and Hyde Park ward', '31,175']
        ] },
        { kind: 'p', text: 'That figure is for the council ward, which is the smallest area with Headingley in its name that the census publishes. Postcodes.io records Headingley, Far Headingley, Headingley Hill and Hyde Park as suburban areas of Leeds in LS6. Leeds schools follow England\'s national curriculum; once we know your term dates, lessons keep clear of the holidays.' },
        { kind: 'callout', h3: 'Leeds, West Yorkshire and how we teach', p: 'The city-wide page is <a class="cg-inline-link" href="/best-coding-class-in-leeds">coding classes in Leeds</a>, and the county page is <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. Why we start with reasoning is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Headingley project',
      h2: 'Python generators on 1.7 million postcodes: load it all, or let it flow?',
      intro: 'One national file, one question about LS6, and two programs with very different appetites.',
      body: [
        { kind: 'p', text: 'Code-Point Open arrives as a zip of 120 CSV files holding 1,749,109 postcodes. Each row carries the postcode, a grid reference and the codes of the areas it sits in, including its council ward. The learner writes the same search twice. Version one reads every row into a Python list and then filters the list. Version two is a generator: a function that opens each file in turn and yields a single row, so the filter sees one postcode, decides, and lets it go before the next arrives. Python\'s tracemalloc module records the peak memory of each.' },
        { kind: 'table', caption: 'Finding Headingley\'s postcodes in OS Code-Point Open, our run on one machine', head: ['Approach', 'Peak memory', 'Time', 'LS6 postcodes found'], rows: [
          ['Read everything into a list, then filter', '1,113.6 MB', '33.2 s', '885'],
          ['Generator pipeline, one row at a time', '0.1 MB', '24.4 s', '885']
        ] },
        { kind: 'p', text: 'Both versions find the same 885 postcodes in LS6, and the same 491 whose ward code is Headingley and Hyde Park: 490 of those are in LS6 and one is in LS2, a reminder that postcode districts and wards do not line up. The difference is in the cost. The list version peaked at more than a gigabyte, roughly ten thousand times the generator\'s peak, and on our machine it was also slower, because building and later discarding 1.7 million row objects takes time. The times will differ on another computer; the shape of the result will not.' },
        { kind: 'p', text: 'Generators are not free. You get one pass: once a row has gone by, it is gone, so anything that needs the data twice, such as sorting, must store it after all. Choosing between the two is a design decision, and the honest way to make it is to measure.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Count red cars passing a window without writing every car down: what do you actually need to remember?' },
          { h3: 'Ages 11 to 15', p: 'Write a generator that yields LS6 postcodes one by one and count them with a loop.' },
          { h3: 'Ages 15 and up', p: 'Build both versions, measure peak memory with tracemalloc and explain when each is the right tool.' }
        ] },
        { kind: 'callout', h3: 'OS data, our measurements', p: 'Postcodes are from Ordnance Survey Code-Point Open: contains OS data, Crown copyright and database right, Open Government Licence. The two programs and every memory and timing figure are ours, from a single machine.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Memory and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Code that works on a sample can fall over on the real file.',
      body: [
        { kind: 'table', caption: 'From the postcode file to AI-written code', head: ['In the Headingley project', 'When an AI writes data code for you'], rows: [
          ['The list version needed 1,113.6 MB', 'Ask what the code does at full scale'],
          ['The generator needed 0.1 MB', 'A small change of design can remove the problem'],
          ['Both returned 885 postcodes', 'Correct answers can hide very different costs'],
          ['One ward postcode sat in LS2', 'Real categories rarely line up neatly'],
          ['Timings came from one machine', 'Say where a measurement was taken']
        ] },
        { kind: 'p', text: 'An AI assistant asked to "read the CSV and find the LS6 rows" will very often load the whole file first, because that is what most examples it learned from do. When our Headingley learners vibe code, putting the task into words for an AI to implement, they follow up with a question about scale and then measure the answer themselves. Agents that process files unattended make the same default choice, and nobody is watching when memory runs out, so the instruction has to say how big the data is. We introduce agent building after a learner writes Python comfortably alone, which for most is sixteen or older, and teach Copilot Studio agents only in private lessons. The route is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>; the principle is <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Ordnance Survey, the Office for National Statistics, Nomis and postcodes.io have no connection with us. They publish the open data; the programs and any mistakes are Modern Age Coders\'.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counting cars to streaming data',
    intro: 'School year gives us a first guess at level, and the trial lesson corrects it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'One thing at a time, and remembering only what matters.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps described to an AI and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and files', p: 'Loops, generators and real datasets next to GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data work and agents', p: 'Efficient Python, data pipelines and AI agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and memory',
    h2: 'What is a generator in Python, and when should you use one?',
    intro: 'A generator is a function that yields one value at a time and pauses between them, so you should use one when the data is too large, or too slow to arrive, to hold in memory all at once.',
    p1: 'Searching 1,749,109 postcodes for Headingley\'s, a list-based program peaked at 1,113.6 MB of memory while a generator pipeline peaked at 0.1 MB and returned the same 885 LS6 postcodes.',
    p2: 'Learners who have measured that ask of any AI-written data script: does it load everything first, and what happens when the file grows?',
    closer: 'A Headingley teenager who thinks about scale before running code will catch what a chatbot\'s tidy example leaves out, and Python is where that instinct is built.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons for LS6, on video',
    intro: 'You need a computer with a camera, and an internet line that holds a video call.',
    cells: [
      { h3: 'The learner types', p: 'Every line is written and run by the student, with the tutor watching the shared screen and asking what they expect to see.' },
      { h3: 'Trial first', p: 'The free session shows us the level, and we note the exam board if there is one.' },
      { h3: 'No charge to start', p: 'Lesson one is free and ends with the course we would pick.' },
      { h3: 'Classes by level', p: 'Groups hold five to ten learners at one stage, from anywhere in the UK.' },
      { h3: 'Twice a week', p: 'Term time only.' },
      { h3: 'Fixed slot', p: 'Our tutors move with the UK clock changes, so your lesson stays at the same local time.' }
    ],
    spec: { title: 'Why online suits Headingley', p: 'Five learners at one level, all free on the same evening, are unlikely to live on the same few streets. A video class gathers them from wherever they are.' }
  },

  fees: {
    h2: 'Headingley fees',
    intro: 'Leeds learners pay the international rate we use everywhere outside India.',
    first: 'A whole lesson for nothing, then our recommendation.',
    group: 'About eight live group lessons in a month.',
    private: 'About eight live one-to-one lessons in a month.',
    closer: 'We bill in US dollars and have no sterling price list. The first invoice waits until the trial has settled a course and a weekly time, and the pricing page covers holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Leeds families and learners across Britain, reviewing us on Google',

  book: {
    h2: 'Book a free Headingley lesson',
    intro: 'Tell us the learner\'s age or school year and one thing they enjoy. The trial might be a counting puzzle, a Scratch game built with an AI, a first Python loop, or a dip into the postcode file.',
    success: 'Thanks. Your Headingley request has reached us.'
  },

  faq: {
    h2: 'Headingley questions',
    intro: 'Generators, the postcode project, vibe coding and how lessons are arranged.',
    items: [
      { q: 'How many people live in Headingley?', a: 'The 2021 census counted 31,175 usual residents in Headingley and Hyde Park ward, the smallest published area carrying the name.' },
      { q: 'Are there online Python classes for Headingley learners?', a: 'Yes. Every lesson is a live video call, open to ages 6 to 67 in Headingley, Far Headingley, Hyde Park and the rest of Leeds.' },
      { q: 'What does yield do in Python?', a: 'It hands one value back to the caller and pauses the function, keeping its place, so the next request carries on from there. A function that uses yield is a generator.' },
      { q: 'What is lazy evaluation?', a: 'Working a value out only at the moment it is needed instead of in advance. Generators are lazy, which is why our pipeline over 1.7 million rows peaked at 0.1 MB.' },
      { q: 'What is the Headingley project?', a: 'Finding the 885 LS6 postcodes in the national Code-Point Open file twice, once by loading everything and once with a generator, and measuring the memory each needs.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age: the learner explains the program, the AI drafts it, and the learner tests and corrects it.' },
      { q: 'When can a learner start building AI agents?', a: 'Once they can write Python on their own, usually from about sixteen; Copilot Studio agents are private lessons only.' },
      { q: 'Do you help with GCSE and A level computer science?', a: 'Yes, and with maths. We teach for understanding and do not promise grades.' },
      { q: 'What do lessons cost?', a: 'The trial is free. After it, USD 100 a month buys group lessons and USD 150 a month buys one-to-one lessons.' },
      { q: 'Do lessons run in school holidays?', a: 'No. Send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Leeds and West Yorkshire pages',
    html: 'Other pages, each with its own experiment: <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> (sampling a stream you cannot store), <a class="cg-inline-link" href="/ai-and-programming-classes-in-roundhay-leeds">Roundhay</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-horsforth-leeds">Horsforth</a> and <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. Everything else starts from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Headingley and Leeds',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hdl .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hdl .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hdl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hdl .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hdl .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-hdl .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hdl .cg-table td { font-variant-numeric: tabular-nums; font-family: var(--font-mono, monospace); font-size: 0.92rem; }
.cg-root.cg-hdl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hdl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hdl .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Leeds (E08000035). Census 2021 TS001: Headingley & Hyde Park ward (E05011397) 31,175 usual residents. postcodes.io places (Leeds, LS6): Headingley, Far Headingley, Headingley Hill, Hyde Park (suburban areas). England national curriculum, GCSE and A level.',
    localProject: 'OS Code-Point Open 2026.3.0 (RM update 17 July 2026): 120 CSV files, 1,749,109 rows. List then filter: tracemalloc peak 1,113.6 MB, 33.2 s. Generator pipeline: peak 0.1 MB, 24.4 s. LS6 postcodes 885; ward E05011397 postcodes 491 (490 LS6, 1 LS2). Lesson family: generators, lazy evaluation, streaming.',
    requiredMentions: [
      '31,175',
      '1,749,109',
      '1,113.6 MB',
      'Far Headingley',
      'Headingley Hill',
      'Hyde Park',
      'LS6',
      'lazy evaluation',
      'tracemalloc'
    ],
    sources: [
      { claim: 'Ordnance Survey Code-Point Open, dataset version 2026.3.0, Open Government Licence.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and outcode LS6: suburban areas and wards in Leeds.', url: 'https://api.postcodes.io/outcodes/LS6' }
    ],
    rejectedClaims: [
      'A population for Headingley itself: not published; only the ward figure is given and labelled as the ward.',
      'Cricket ground, stadium, university or student-area claims: not read from a source; not made.',
      'Timings as general truths: stated as one machine only.',
      'That LS6 equals Headingley: not claimed; LS6 covers several wards.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
