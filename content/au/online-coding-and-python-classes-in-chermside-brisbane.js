'use strict';
// Chermside, Brisbane (cg- district page, Australia cluster Phase 8, row 285). Keyword slug online-coding-and-python-classes-in-*,
// suburb page (ABS SAL30593, City of Brisbane) under Brisbane and Queensland.
// Spine: a stop-search box over the 60 distinct Chermside stop names. Simulated typing of "Gympie Rd at Chermside"
// (22 keystrokes, 150 ms per letter, 450 ms pause after spaces): no debounce 22 queries, 200 or 300 ms debounce 4, 500 ms 1.
// Script: scratchpad au/b11/p3_chm.py. Lesson family: debouncing an autocomplete search; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CHERMSIDE',
    label: 'Chermside, Brisbane',
    blurb: 'Online coding and Python classes for Chermside, with a project on making a stop-search box wait for the typist.'
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
  slug: 'online-coding-and-python-classes-in-chermside-brisbane',
  code: 'chmd',
  accent: '#50140C',
  accentRationale: 'Chermside: a deep oxide red chosen by hand, at least 20 RGB units from every Queensland page accent and 10 from every Australian page accent',
  pageType: 'city',
  place: {
    name: 'Chermside',
    eyebrow: 'Chermside, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Chermside' },
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
  routeLabel: 'Chermside, Brisbane',
  title: 'Online Coding and Python Classes in Chermside, Brisbane',
  description: 'Live online coding and Python classes for Chermside children, teenagers and adults, with a real Brisbane stop-search project that teaches debouncing in Python.',
  ogDescription: 'A Chermside Python project: typing one stop name sends 22 searches, and a short wait cuts it to four.',
  twitterDescription: 'Chermside online coding and Python classes, taught live, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Chermside',
    description: 'Level-matched coding and Python lessons for Chermside, Brisbane learners from age 6 to adult, taught live online in English.'
  },
  h1: 'Online coding and Python classes in Chermside',
  capsuleQ: 'What will a Chermside learner build in Python?',
  capsule: 'A search box that does not shout. Typing "Gympie Rd at Chermside" one letter at a time sends 22 searches over the local stop list if every key fires. Wait 300 milliseconds for a pause first and only four go out, and the last one still finds the same two stops.',
  lead: 'Chermside is a bus suburb. The Translink timetable for Wednesday 21 October 2026 lists 4,038 stop visits inside the suburb outline, every one of them by bus, on 23 routes. With 72 stop records to choose from, a learner building a stop finder quickly meets the question every search box faces: when should it actually search?',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Chermside.',
  picks: {
    eyebrow: 'Course picks for Chermside',
    h2: 'Python and coding courses to start with',
    intro: 'Each course is taught live in small groups or one to one. The trial lesson settles which fits.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first loop to small apps with search and files.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'A full Python path, including timing and responsive programs.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Friendly Python with games, drawings and simple AI.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Blocks, events and timers before typed code.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Chermside in the 2021 Census',
      h2: 'Small households, mostly apartments',
      intro: 'Figures for the Chermside suburb (ABS SAL30593) from its 2021 Census QuickStats, read on 12 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Chermside headline counts',
          head: ['Measure', 'Chermside'],
          rows: [
            ['People', '11,426'],
            ['Median age', '35'],
            ['Families', '2,752'],
            ['Private dwellings', '6,083'],
            ['People per household', '1.9'],
            ['Motor vehicles per dwelling', '1.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Chermside dwelling types beside Queensland',
          head: ['Dwelling type', 'Chermside', 'Queensland'],
          rows: [
            ['Flat or apartment', '58.7% (3,164)', '12.5%'],
            ['Townhouse, terrace or semi-detached', '19.8% (1,068)', '11.7%'],
            ['Separate house', '21.4% (1,153)', '74.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger residents', p: 'The Census counted 432 residents aged 5 to 9, which is 3.8% of the suburb against 6.4% statewide.' },
            { h3: 'Getting to work', p: 'Car as driver was the trip to work for 48.7% of employed residents, under the Queensland share of 59.5%.' },
            { h3: 'A pandemic snapshot', p: 'Census night fell in August 2021, during the pandemic, so travel answers from that week are treated with care.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds percentages and slightly adjusts small cells to protect privacy. We print each figure as published and never add the rows to form a new total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Twenty-two searches or four',
      intro: 'Learners load the stop names from the Translink feed: 72 records, 60 distinct names once repeats on opposite sides of a road are merged. Then they replay a typist entering one name and count how many searches each version of the box would send.',
      body: [
        {
          kind: 'table',
          caption: 'Searches sent while typing "Gympie Rd at Chermside" (our simulation)',
          head: ['Wait after the last key', 'Searches sent', 'Which prefixes'],
          rows: [
            ['None (search on every key)', '22', 'G, Gy, Gym and so on'],
            ['200 ms', '4', 'after each space, then the full name'],
            ['300 ms', '4', 'the same four'],
            ['500 ms', '1', 'the full name only']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'The typist', p: 'Our simulated person types a letter every 150 ms and pauses 450 ms after each space. The 22 keystrokes span 4,050 ms.' },
            {
              h3: 'The pauses decide',
              p: 'A 200 or 300 ms wait fires only when the typist pauses at a space, so the box searches "Gympie ", "Gympie Rd ", "Gympie Rd at " and the full name.'
            },
            {
              h3: 'Too patient',
              p: 'At 500 ms the box waits out every pause and searches once. Fewer requests, but no suggestions appear until the person stops typing.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What the results show',
          p: 'Nine stop names begin with "Gympie", and two begin with the full phrase. Every debounced version reaches those same two answers; it just skips the 18 searches nobody needed to see.'
        },
        {
          kind: 'p',
          text: 'The stop names are real Translink records inside the ABS outline of Chermside. The typing speed and the pauses are our own simulation, chosen to look like a person, not measured from anyone.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Debouncing in Python',
      h2: 'A timer that restarts on every key',
      intro: 'A debounce keeps one pending timer. Each new keystroke cancels it and starts a fresh one; the search runs only if the timer finishes untouched.',
      body: [
        {
          kind: 'table',
          caption: 'How the lesson runs',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Read stop names from the feed file and remove duplicates.'],
            ['2', 'Write a prefix search and test it on "Gympie".'],
            ['3', 'Replay the keystroke times and log each search.'],
            ['4', 'Add a debounce wait and chart searches against the wait.']
          ]
        },
        {
          kind: 'p',
          text: 'Debounce is often confused with throttle. Throttle runs at most once per interval while keys keep coming; debounce waits for quiet. A stop finder wants quiet, while a live map that follows a dragged finger usually wants a throttle.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'In Scratch, a sprite answers only after the keyboard has been still for a second.' },
            { h3: 'Teenagers', p: 'Python replay of the typing, with a chart of searches for waits from 0 to 600 ms.' },
            { h3: 'Adults', p: 'The same idea in a web form, plus a look at how browsers and libraries handle it.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Chermside',
      h2: 'Interchange letters and the 2027 terms',
      intro: 'Translink counts for Wednesday 21 October 2026, and the 2027 calendar published by the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'One bus station',
              p: 'The feed groups the Chermside interchange and lettered Chermside Shopping Centre interchange stops under Chermside bus station.'
            },
            { h3: 'No railway', p: 'No train stop falls inside the suburb outline; all 4,038 Wednesday visits are buses on 23 routes.' },
            { h3: 'Term 1, 2027', p: 'Queensland state schools open on Wednesday 27 January 2027 and Term 1 runs to Thursday 25 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Stops are placed in Chermside by our own point-in-polygon test against the ABS suburb outline, about 3.98 square kilometres. A stop just across a boundary road counts for the neighbouring suburb.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From key events to responsive apps',
    intro: 'A rough guide by age; the free lesson decides the real starting rung.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Events and timers',
        p: 'Scratch scripts that react when a key is pressed.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First Python',
        p: 'Short programs that ask, wait and answer.',
        courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Real data',
        p: 'Files, search and timing on public data sets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Software that feels quick',
        p: 'Responsive tools, testing and clean structure.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will an AI assistant debounce for you?',
    intro: 'Sometimes, if you know to ask.',
    p1: 'Ask an AI assistant for "a search box that suggests stop names" and the first draft often searches on every keystroke. It works on a laptop with a short list, so nothing looks wrong.',
    p2: 'A learner who has counted 22 searches for one name spots the missing wait at once, and can tell the assistant exactly what to change and why. Knowing what good behaviour looks like is the part AI cannot supply.',
    closer: 'Chermside learners use AI tools as helpers and keep the judgement for themselves.',
    blogAnchor: 'why learning Python still matters when AI writes code'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes from home in Chermside',
    intro: 'Every lesson is a live video call; nobody needs to travel to Gympie Road for it.',
    cells: [
      { h3: 'Live, not recorded', p: 'A real teacher works through the code with the learner in each session.' },
      { h3: 'School calendar', p: 'Lessons follow Queensland school terms and pause in the holidays.' },
      { h3: 'Trial first', p: 'The first lesson is free and ends with a written course suggestion.' },
      { h3: 'Group size', p: 'Fifteen to twenty learners at one level, or private one-to-one lessons.' },
      { h3: 'Rhythm', p: 'Two lessons a week, about eight a month.' },
      { h3: 'Time difference', p: 'A 5pm Chermside lesson is 12:30pm for our teachers in India, all year round.' }
    ],
    spec: {
      title: 'No clock changes',
      p: 'The IANA time zone database records that Queensland\'s last daylight saving period ended in March 1992, so Chermside class times never shift twice a year.'
    }
  },
  fees: {
    h2: 'Chermside class fees',
    intro: 'One price list for every learner.',
    first: 'The trial lesson is free, with a plan at the end.',
    group: 'Group classes: about eight lessons a month in groups of fifteen to twenty.',
    private: 'Private classes: about eight lessons a month, one learner and one teacher.',
    closer: 'Chermside fees are charged in US dollars, only after the trial has fixed a course and weekly slot. The pricing page explains holidays and missed sessions.'
  },
  reviewsH2: 'What families say in Google reviews',
  book: {
    h2: 'Book a free Chermside lesson',
    intro: 'Share the learner\'s age and interests. A younger child might start with Scratch key events; an older one might debounce the Chermside stop finder.',
    success: 'Thank you. We will contact you soon about a Chermside lesson.'
  },
  faq: {
    h2: 'Chermside coding and Python questions',
    intro: 'Questions Chermside families and adult learners often ask.',
    items: [
      {
        q: 'How many people live in Chermside?',
        a: 'The 2021 Census counted 11,426 people in the Chermside suburb, with a median age of 35 and 1.9 people per household.'
      },
      {
        q: 'What does debouncing mean?',
        a: 'Debouncing means waiting until input has stopped for a short time before acting on it, so a burst of keystrokes leads to one action instead of many.'
      },
      {
        q: 'Is Python a good first typed language?',
        a: 'For most learners from about age 10, yes. It reads close to English and is used in data, automation and AI work.'
      },
      {
        q: 'Can a 6-year-old learn coding online?',
        a: 'Yes, with block-based tools such as Scratch, short lessons and a parent nearby for the first few weeks.'
      },
      { q: 'Do adults join Python classes?', a: 'Yes. Adults study in their own groups or one to one, often for work tasks such as reports and automation.' },
      {
        q: 'Is there a train station in Chermside?',
        a: 'No railway stop sits inside the suburb outline. The Translink feed shows only buses there on Wednesday 21 October 2026.'
      },
      {
        q: 'Do you have a centre in Chermside?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Chermside classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'How many bus routes serve Chermside?', a: 'On Wednesday 21 October 2026 the Translink timetable shows 23 routes stopping inside the suburb.' }
    ]
  },
  next: {
    eyebrow: 'More for Brisbane learners',
    h2: 'Keep exploring',
    html: 'Read the <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">Brisbane page</a> for the wider city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> for state context, and <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">kids coding in Brisbane</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Chermside and Brisbane',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-chmd .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-chmd .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-chmd .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-chmd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; font-size: 0.76rem; }
.cg-root.cg-chmd .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-chmd .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.6rem); }
.cg-root.cg-chmd .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-chmd .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-chmd .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-chmd .cg-callout { border-radius: 0; }
`,
  dossier: {
    curriculumAuthority: 'Chermside (SAL30593), ABS Census 2021 QuickStats (read 12 October 2026): 11,426 people; median age 35; 2,752 families; 6,083 private dwellings; 1.9 people per household; 1.2 vehicles per dwelling; aged 5-9 432 (3.8%, Queensland 6.4%); flats 3,164 (58.7%, Queensland 12.5%); semi-detached/townhouse 1,068 (19.8%, Queensland 11.7%); separate houses 1,153 (21.4%, Queensland 74.8%); car as driver 2,860 (48.7%, Queensland 59.5%). ABS SAL area 3.9837 square kilometres. Translink SEQ GTFS, Wednesday 21 October 2026: 72 stop records in the SAL polygon (60 distinct names); 4,038 stop visits, all bus; 23 routes; Chermside bus station (place_intche) grouping Chermside interchange and Chermside Shopping Centre interchange A-H; no train stops. Queensland 2027 Term 1: Wednesday 27 January to Thursday 25 March. Brisbane: no daylight saving since March 1992 (IANA 2026e).',
    localProject: 'Prefix search over the 60 distinct Chermside stop names. Simulated typing of "Gympie Rd at Chermside": 22 keystrokes, 150 ms per letter, 450 ms after each space, last key at 4,050 ms. Searches sent: no debounce 22; 200 ms 4; 300 ms 4 (prefixes "Gympie " 9 matches, "Gympie Rd " 9, "Gympie Rd at " 7, full name 2); 500 ms 1. Script: scratchpad au/b11/p3_chm.py.',
    requiredMentions: ['11,426', '6,083', '58.7% (3,164)', '19.8% (1,068)', '4,038', '23 routes', 'Chermside bus station', '4,050 ms'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Chermside suburb and locality (SAL30593), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30593'
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
      'Typing speeds of real users: not claimed; the keystroke timing is our simulation.',
      'Rider numbers at Chermside stops: not claimed; the feed gives scheduled stop visits only.',
      'Naming schools or the shopping centre owner: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Totals built by adding Census rows: not computed.',
      'Any link with Brisbane City Council, Translink or the Queensland Department of Education.'
    ]
  }
};
