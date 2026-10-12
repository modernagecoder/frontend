'use strict';
// Ellenbrook, Perth (cg- district page, Australia cluster Phase 8, row 309). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL50482, City of Swan) under Perth and Western Australia.
// Spine: remove the 14 station records (12 bus stands and 2 rail platforms) from Ellenbrook's list of 129 stop names
// with list.remove() inside a for loop over the same list. Each removal shifts the list, the loop skips the next item,
// and 7 station records survive (122 left instead of 115). Copy, comprehension or a backwards loop all give 115.
// Data: PTA-001 Stops (CC BY 4.0). Our run, scratchpad au/b14. Lesson family: removing items while iterating; claimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'ELLENBROOK',
    label: 'Ellenbrook, Perth',
    blurb: 'Online coding and Python classes for Ellenbrook, where deleting station stops from a list inside a loop quietly leaves every second one behind.'
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
  slug: 'online-coding-and-python-classes-in-ellenbrook-perth',
  code: 'elbk',
  accent: '#436E41',
  accentRationale: 'Ellenbrook: a eucalyptus green (hue 117.3), 4.81:1 on #EDE7DA; 35.6 RGB from the nearest Western Australian accent, 15.2 from any other Australian accent and 8.6 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Ellenbrook',
    eyebrow: 'Ellenbrook, City of Swan, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Ellenbrook' },
      { type: 'AdministrativeArea', name: 'City of Swan' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Ellenbrook, Perth',
  title: 'Online Coding and Python Classes in Ellenbrook, Perth',
  description: 'Live online coding and Python classes for Ellenbrook children, teenagers and adults, built around real Western Australian data, in small groups or one to one.',
  ogDescription: 'Ellenbrook Python project: 129 stop names, 14 station records to delete, and a for loop that leaves 7 of them behind without a single error.',
  twitterDescription: 'Online Python for Ellenbrook learners, live with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ellenbrook',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Ellenbrook, Perth, taught live in English.'
  },
  h1: 'Online coding and Python classes in Ellenbrook',
  capsuleQ: 'What do Ellenbrook learners gain from online Python classes?',
  capsule: 'Python they can trust, because they learn why code that runs without errors can still give the wrong answer, and how to test it. Children start with Scratch at six; teenagers and adults work with real public data. Ellenbrook counted 24,668 residents in the 2021 Census.',
  lead: 'Ellenbrook\'s station precinct shows up in the state stops file as twelve bus stands and two rail platforms, all in a row. Ask Python to delete them from a list of the suburb\'s 129 stop names with the obvious loop, and half of them stay. No error, no warning, just the wrong list.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Ellenbrook.',
  picks: {
    eyebrow: 'Course picks for Ellenbrook',
    h2: 'Courses that make Python predictable',
    intro: 'The station-stops project is about lists, loops and testing what code really did. These courses teach those foundations; the trial class finds the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, loops and the traps between them, practised on real data.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python, with small programs children can check by eye.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from zero to tested, readable programs.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Filtering and summarising public datasets correctly.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Ellenbrook in the Census',
      h2: 'A young suburb full of school-age children',
      intro: 'Headline 2021 Census QuickStats for the suburb of Ellenbrook (ABS code SAL50482), compared with Western Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Ellenbrook in numbers, 2021',
          head: ['Measure', 'Ellenbrook'],
          rows: [
            ['Residents', '24,668'],
            ['Median age', '32'],
            ['Families', '6,477'],
            ['Private dwellings', '8,901'],
            ['People per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Ellenbrook and the state',
          head: ['Indicator', 'Ellenbrook', 'Western Australia'],
          rows: [
            ['Separate houses', '89.3% (7,198)', '79.7%'],
            ['Workers who drove to work', '67.9% (7,968)', '62.1%'],
            ['Employed residents working from home', '5.0% (589)', '7.5%'],
            ['Adults with a bachelor degree or higher', '13.3% (2,428)', '23.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary-age children', p: 'Residents aged 5 to 9 numbered 2,355, the largest five-year band among children here.' },
            { h3: 'Teenagers', p: 'Another 2,131 were aged 10 to 14 and 1,737 were 15 to 19.' },
            { h3: 'Area', p: 'The suburb boundary covers about 12.9 square kilometres in Perth\'s north-east.' }
          ]
        },
        { kind: 'p', text: 'Small Census cells are adjusted slightly by the bureau to protect privacy. We report the published values and leave them unadded.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Delete fourteen, lose seven',
      intro: 'The list: 129 stop names inside Ellenbrook, in the order the state file stores them. The aim: remove every name containing "Stn", which marks the 12 bus stands and 2 rail platforms at Ellenbrook station. The first attempt loops over the list and calls names.remove(n) whenever a station name appears.',
      body: [
        {
          kind: 'table',
          caption: 'Four ways to remove the station records (our run in Python)',
          head: ['Method', 'Names left', 'Correct?'],
          rows: [
            ['for n in names: names.remove(n)', '122', 'No, 7 station names survive'],
            ['for n in names[:]: names.remove(n)', '115', 'Yes'],
            ['[n for n in names if "Stn" not in n]', '115', 'Yes'],
            ['Loop backwards, deleting by index', '115', 'Yes']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Which station records the first loop missed',
          head: ['Survived', 'Why'],
          rows: [
            ['Stands 2, 4, 6, 8, 10 and 12', 'Each followed a removed stand and was skipped'],
            ['Platform 2', 'Followed Platform 1, which was removed']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What happens',
              p: 'The loop keeps a position counter. Removing Stand 1 at position 99 slides Stand 2 into that slot, and the loop moves on to position 100, which now holds Stand 3.'
            },
            { h3: 'Why it is quiet', p: 'Python raises no error for changing a list during a for loop. The program finishes and prints 122, a believable number.' },
            {
              h3: 'Why Ellenbrook shows it',
              p: 'The 14 station records sit side by side in the file, so every second one is skipped. Scattered records would hide the bug far better.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A test that catches it',
          p: 'After filtering, assert that no remaining name contains "Stn". The first version fails that check at once, with 7 survivors, while all three corrected versions pass. One line of checking turns a silent bug into a visible one.'
        },
        {
          kind: 'p',
          text: 'Stop names come from the Public Transport Authority of Western Australia open data file. Membership of Ellenbrook is our point-in-boundary check; the list order and every count above come from our own Python run.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Lists in Python',
      h2: 'Changing a list safely',
      intro: 'The rule is simple once learned: never shrink the list you are walking through. Build a new one, or walk a copy.',
      body: [
        {
          kind: 'table',
          caption: 'Safe patterns and when to use them',
          head: ['Pattern', 'Good for', 'Cost'],
          rows: [
            ['List comprehension', 'Most filtering jobs', 'A new list in memory'],
            ['Loop over a copy, names[:]', 'When you must call remove()', 'A copy, plus slow removes'],
            ['Backwards index loop', 'Deleting in place', 'Harder to read'],
            ['filter() with a function', 'Reusing a test function', 'Returns an iterator']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Line up cards, take away every red one while stepping along, and see which red cards get skipped.' },
            { h3: 'Secondary learners', p: 'Reproduce the Ellenbrook bug, print the position counter each step, and fix it three ways.' },
            { h3: 'Adults', p: 'Review scripts that delete rows inside loops, in Python or in spreadsheet macros, for the same skipping fault.' }
          ]
        },
        {
          kind: 'p',
          text: 'Dictionaries and sets are stricter: changing their size during a loop raises a RuntimeError. Lists are the quiet case, which is exactly why they deserve a test.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Ellenbrook',
      h2: 'A station precinct and Banrock Drive',
      intro: 'Local markers from the state stops file and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop records', p: 'Our boundary check places 129 stop records in Ellenbrook: 126 standard, 2 rail platforms and 1 school stop.' },
            { h3: 'Labels', p: 'Of those, 127 carry the suburb label Ellenbrook and 2 say Aveley. Banrock Drive has the most records, 12.' },
            { h3: 'Term 3, 2027', p: 'WA public schools run Term 3 of 2027 from Monday 19 July to Friday 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Just Ellenbrook',
          p: 'Counts here are for the suburb of Ellenbrook. Aveley, The Vines, Henley Brook, Bullsbrook, Lexia, Melaleuca and Whiteman border it and keep their own figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From card games to clean Python',
    intro: 'Use these ages loosely; the trial class settles where to begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks',
        p: 'Scratch projects that build sequencing and checking habits.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Lists, loops and small puzzles in real code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Filtering and testing real datasets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python for work',
        p: 'Automation and data scripts with tests.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes loops too. Who notices when one skips?',
    intro: 'Someone who knows how lists move underneath. AI assistants usually avoid this bug, but not always, and the faulty version looks perfectly reasonable.',
    p1: 'Ask for code that removes station stops from a list and you will often get a clean list comprehension. Ask in a slightly different way, or edit the result by hand, and the remove-inside-a-loop pattern can creep in. It runs, prints 122 and looks finished.',
    p2: 'Learners who have watched the position counter slide past Stand 2 recognise the pattern on sight and add the one-line assertion that proves the result. That habit is what makes AI-assisted code dependable.',
    closer: 'In Ellenbrook, the learner who tests the output catches the bug the program never reports.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Ellenbrook classes from home',
    intro: 'All teaching is live over video; there is no venue to reach.',
    cells: [
      { h3: 'Learner drives', p: 'The student types and runs the code; the teacher follows along and prompts.' },
      { h3: 'School-term rhythm', p: 'Lessons pause for Western Australian school holidays.' },
      { h3: 'No charge to try', p: 'The opening lesson is a proper class, finished with a recommendation.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners together, or private teaching.' },
      { h3: 'Twice weekly', p: 'Set weekly slots, roughly eight lessons a month.' },
      { h3: 'India time', p: 'Our teachers work from India: a 4:30pm Ellenbrook lesson is 2pm India time.' }
    ],
    spec: {
      title: 'No seasonal clock change',
      p: 'Western Australia stopped daylight saving after a trial that ended in March 2009 (IANA time zone database), and India keeps a single time, so classes never move.'
    }
  },
  fees: {
    h2: 'Ellenbrook class fees',
    intro: 'The same three prices for all families.',
    first: 'There is no charge for lesson one, which comes with written advice.',
    group: 'About eight group lessons a month, five to ten learners each.',
    private: 'About eight private lessons a month with a single teacher.',
    closer: 'Families in Ellenbrook pay in US dollars after the trial, when a course and time are agreed. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Parents and students on Google',
  book: {
    h2: 'Book a free Ellenbrook lesson',
    intro: 'Give us the learner\'s age and interests. An older student might begin by reproducing the skipping loop; a young child might begin with a Scratch card game.',
    success: 'Thank you. We will reach out soon about an Ellenbrook lesson.'
  },
  faq: {
    h2: 'Ellenbrook Python questions',
    intro: 'Questions Ellenbrook parents and adult learners raise most.',
    items: [
      {
        q: 'How many people live in Ellenbrook?',
        a: 'The 2021 Census QuickStats count 24,668 people in the suburb of Ellenbrook, with a median age of 32 and 6,477 families.'
      },
      {
        q: 'Why does removing items in a for loop skip elements?',
        a: 'The loop walks the list by position. Removing an item shifts everything after it one place left, so the item that slides into the current position is never visited.'
      },
      {
        q: 'How do you remove items from a list safely in Python?',
        a: 'Build a new list with a comprehension, loop over a copy such as names[:], or delete by index while looping backwards.'
      },
      {
        q: 'What did the Ellenbrook loop test show?',
        a: 'Of 14 station records among 129 Ellenbrook stop names, the remove-in-a-loop version deleted only 7, leaving 122 names; all three safe versions left the correct 115.'
      },
      {
        q: 'When is a child ready for Python?',
        a: 'Usually between eight and ten, once Scratch feels easy and typing is comfortable. The trial lesson checks.'
      },
      { q: 'Are Claude courses open to school students?', a: 'No. Claude-based courses take learners of 18 and over; school-age students use other AI tools.' },
      {
        q: 'Is there a classroom in Ellenbrook?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Ellenbrook learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can Ellenbrook group learners study Copilot Studio?', a: 'No. Copilot Studio is offered one to one; in groups, agents are coded in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Ellenbrook learners',
    html: 'The <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth page</a> covers the whole city and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a> suits younger learners. Further afield, <a class="cg-inline-link" href="/best-coding-classes-in-geraldton">Geraldton</a> has a page of its own, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">the state guide</a> covers all of Western Australia.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Ellenbrook and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/best-coding-classes-in-geraldton', label: 'Geraldton' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-elbk .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3vw, 2.45rem); }
.cg-root.cg-elbk .cg-hero h1 { font-weight: 660; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-elbk .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.64rem 0 0.64rem 0.98rem; }
.cg-root.cg-elbk .cg-eyebrow { letter-spacing: 0.125em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-elbk .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.01em; }
.cg-root.cg-elbk .cg-grid-3 { gap: clamp(0.82rem, 2.2vw, 1.68rem); }
.cg-root.cg-elbk .cg-table caption { font-weight: 655; text-align: left; letter-spacing: 0.012em; }
.cg-root.cg-elbk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-elbk .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-elbk .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Ellenbrook (SAL50482), City of Swan. ABS Census 2021 QuickStats (read 12 October 2026): 24,668 people; median age 32; 6,477 families; 8,901 private dwellings; 2.9 per household; separate houses 7,198 (89.3%, WA 79.7%); drove 7,968 (67.9%, WA 62.1%); worked at home 589 (5.0%, WA 7.5%); bachelor or higher 2,428 (13.3%, WA 23.8%); aged 5-9 2,355; 10-14 2,131; 15-19 1,737. ABS SAL area 12.9216 sq km; council verified by ABS LGA point query (Swan). PTA-001: 129 records inside the SAL polygon (Standard 126, Rail 2, School 1); labels ELLENBROOK 127, AVELEY 2; Ellenbrook Stn Stand 1-12 and Platform 1-2; Banrock Dr 12. Neighbours (ABS touches): Aveley, Bullsbrook, Henley Brook, Lexia, Melaleuca, The Vines, Whiteman. WA 2027 Term 3: Monday 19 July to Friday 24 September. Perth no daylight saving since March 2009 (IANA).',
    localProject: 'Removing items while iterating. 129 Ellenbrook stop names sorted by objectid (file order); station records (name contains Stn) at positions 99-110 (Stand 1-12) and 127-128 (Platform 1-2). for n in names: names.remove(n) -> 122 left, survivors Stand 2,4,6,8,10,12 and Platform 2. names[:] copy -> 115; comprehension -> 115; backwards index delete -> 115. Python 3.13.6.',
    requiredMentions: ['8,901', '7,198', '2,355', 'Banrock Drive', 'Aveley', 'Stand 2', '122', 'Platform 2', 'names[:]'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Ellenbrook suburb and locality (SAL50482), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL50482'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'Python documentation, The Python Tutorial, section 4.2 for Statements: code that modifies a collection while iterating over it can be tricky; loop over a copy or create a new collection.',
        url: 'https://docs.python.org/3/tutorial/controlflow.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'When the Ellenbrook rail line opened: not claimed.',
      'Passenger or service numbers at Ellenbrook stops: not claimed.',
      'That AI assistants usually write this bug: not claimed; the page says they usually avoid it.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Swan, the Public Transport Authority or the WA Department of Education.'
    ]
  }
};
