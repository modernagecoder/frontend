'use strict';
// Forest Lake, Brisbane (cg- district page, Australia cluster Phase 8, row 297). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL31064, City of Brisbane) under Brisbane and Queensland.
// Spine: for each of Forest Lake's 78 council parks, any(metres(park, s) <= 400 for s in stops) stops at the first close stop;
// all(...) over parks stops at the first park without one. Counting distance calculations shows the short-circuit:
// 1,731 of 3,354 for any(), and all() answers False after 3 parks.
// Data: BCC Park Locations (CC BY 4.0) + Translink GTFS stop records inside the boundary (43). Our calculation,
// scratchpad au/b12. Lesson family: any()/all() short-circuit evaluation; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'FOREST LAKE',
    label: 'Forest Lake, Brisbane',
    blurb: 'Online coding and Python classes for Forest Lake, where any() and all() check 78 parks against 43 bus stops and stop working the moment they know the answer.'
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
  slug: 'online-coding-and-python-classes-in-forest-lake-brisbane',
  code: 'frlk',
  accent: '#12733B',
  accentRationale: 'Forest Lake: a lakeside green (hue 145.4), 4.81:1 on #EDE7DA; 35.4 RGB from the nearest Queensland accent, 13.6 from any other Australian accent and 7.9 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Forest Lake',
    eyebrow: 'Forest Lake, City of Brisbane, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Forest Lake' },
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
  routeLabel: 'Forest Lake, Brisbane',
  title: 'Online Coding and Python Classes in Forest Lake, Brisbane',
  description: 'Live online coding and Python classes for Forest Lake learners from age six to adult, with projects on real Brisbane parks and bus data, in groups or one to one.',
  ogDescription: 'Forest Lake Python project: 78 parks, 43 bus stops, and how any() and all() skip half the distance checks by stopping at the first decisive answer.',
  twitterDescription: 'Online Python and coding for Forest Lake, live with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Forest Lake',
    description: 'Level-matched online Python and coding lessons for children, teenagers and adults in Forest Lake, Brisbane, taught live in English.'
  },
  h1: 'Online coding and Python classes in Forest Lake',
  capsuleQ: 'What do Forest Lake learners take from online Python classes?',
  capsule: 'Python that reads clearly and does no more work than it must, built through projects on public data and taught live in small groups or one to one. Young children begin with Scratch at six. Forest Lake was home to 22,676 people at the 2021 Census.',
  lead: 'Forest Lake has 78 parks in Brisbane City Council\'s register and 43 bus stop records inside its boundary. Checking every park against every stop takes 3,354 distance calculations. Python\'s any() and all() get the same answers with far fewer, because they stop the moment the answer is settled.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python class for a learner in Forest Lake.',
  picks: {
    eyebrow: 'Course picks for Forest Lake',
    h2: 'Courses that write lean, readable Python',
    intro: 'The parks project uses generators, built-in functions and a distance formula. These courses teach each one; the trial lesson decides the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Core Python with built-ins like any() and all() used on real data.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from the beginning to efficient, tested programs.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Early typed Python with yes-or-no questions answered in code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Maps, distances and summaries from public datasets.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Forest Lake in the Census',
      h2: 'Family houses around the lake',
      intro: 'Highlights from the 2021 Census QuickStats for the suburb of Forest Lake (ABS code SAL31064), with Queensland figures for comparison.',
      body: [
        {
          kind: 'table',
          caption: 'Forest Lake by the numbers, 2021',
          head: ['Measure', 'Forest Lake'],
          rows: [
            ['Residents', '22,676'],
            ['Median age', '37'],
            ['Families', '6,325'],
            ['Private dwellings', '8,199'],
            ['People per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Forest Lake against the Queensland figure',
          head: ['Indicator', 'Forest Lake', 'Queensland'],
          rows: [
            ['Separate houses', '94.9% (7,337)', '74.8%'],
            ['Workers who drove to work', '60.1% (6,836)', '59.5%'],
            ['Workers who went by train', '2.0% (229)', '1.1%'],
            ['Adults with a bachelor degree or higher', '24.9% (4,503)', '21.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'School ages', p: 'Forest Lake counted 1,554 residents aged 5 to 9, 1,663 aged 10 to 14 and 1,700 aged 15 to 19.' },
            { h3: 'Home workers', p: 'On Census day 1,760 employed residents, 15.5%, worked from home, against 14.1% across Queensland.' },
            { h3: 'Footprint', p: 'The ABS boundary takes in close to 9.8 square kilometres in Brisbane\'s south-west.' }
          ]
        },
        { kind: 'p', text: 'Census tables include small deliberate perturbations for privacy, so we quote them as issued and never total them ourselves.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Stop as soon as you know',
      intro: 'For each park, any(metres(park, s) <= 400 for s in stops) asks "is there at least one stop within 400 metres?" It stops at the first stop that qualifies. Across parks, all(...) asks "does every park have one?" and stops at the first park that does not.',
      body: [
        {
          kind: 'table',
          caption: 'Distance calculations needed (our calculation)',
          head: ['Question', 'Answer', 'Calculations'],
          rows: [
            ['Every pair, no shortcuts', 'All distances known', '3,354'],
            ['Which parks have a stop within 400 m? (any per park)', '59 of 78', '1,731'],
            ['Does every park have a stop within 400 m? (all)', 'No, the 3rd park fails', '79'],
            ['Does every park have a stop within 800 m? (all)', 'No, the 75th park fails', '913']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'any() halves the work',
              p: 'Counting parks near a stop needed 1,731 distance checks instead of 3,354, because each park stopped at its first close stop.'
            },
            {
              h3: 'all() can be instant',
              p: 'The 400-metre question was settled after 79 calculations: the third park in the council file has no stop that close, so nothing more needed checking.'
            },
            {
              h3: 'Or nearly full length',
              p: 'At 800 metres, 75 of 78 parks pass, and all() ran until the 75th park in file order before answering False. Short-circuiting saves most when the answer comes early.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The subtle part',
          p: 'Write any([metres(park, s) <= 400 for s in stops]) with square brackets and Python builds the whole list first, so every distance is calculated anyway. The generator form, with no square brackets and the distance call inside it, is what lets any() and all() stop early. Same answer, very different work: on our data, 3,354 calculations against 1,731.'
        },
        {
          kind: 'p',
          text: 'Park points are from Brisbane City Council open data and stops from the Translink feed. Only the 43 stop records that fall within the Forest Lake boundary were used, so a park on the edge could have a nearer stop over the line; every distance is measured as the crow flies, not along footpaths. The median park\'s nearest stop was 257 metres away and the furthest 1,172 metres. All counts are our calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python built-ins',
      h2: 'any(), all() and the empty case',
      intro: 'Two short functions with two rules worth learning by heart, and one edge case that catches people out.',
      body: [
        {
          kind: 'table',
          caption: 'How the two built-ins behave',
          head: ['Function', 'Stops early when it sees', 'On an empty input'],
          rows: [
            ['any(items)', 'The first True value', 'Returns False'],
            ['all(items)', 'The first False value', 'Returns True'],
            ['any(list comprehension)', 'Never: the list is built first', 'Same answers, all the work'],
            ['any(generator)', 'The first True value', 'Same answers, less work']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Play "is anyone wearing red?" and stop asking as soon as someone says yes.' },
            { h3: 'Secondary learners', p: 'Count distance calls with a counter, compare list and generator versions, and explain the gap.' },
            { h3: 'Adults', p: 'Use the same idea in data checks at work: stop scanning once a rule is known to fail.' }
          ]
        },
        {
          kind: 'p',
          text: 'The empty case matters in real code: all() of an empty list is True. If a filtering bug left the list of parks empty, all() would report that every park has a stop nearby, having checked none. Checking that the list is not empty first is a habit worth building early.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Forest Lake',
      h2: 'Six routes and a busy shopping stop',
      intro: 'Details particular to Forest Lake, taken from bus timetables and the state school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'A Wednesday of buses',
              p: 'Our count for Wednesday 21 October 2026: the 43 stop records inside Forest Lake had 3,775 scheduled bus visits on just 6 routes.'
            },
            {
              h3: 'Forest Lake Shops',
              p: 'The stop record named Forest Lake Shops was the busiest, with 306 scheduled visits; the first bus that day left at 4:45am.'
            },
            { h3: 'Easter break, 2027', p: 'Queensland state school Term 1 of 2027 ends on Thursday 25 March, and Term 2 begins on Monday 12 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Forest Lake counts only',
          p: 'The figures on this page are for Forest Lake alone. Doolandella, Ellen Grove, Heathwood, Inala, Pallara, Richlands and Wacol share its borders, and their own numbers are kept apart from these.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From yes-or-no games to efficient code',
    intro: 'Ages are only indicative; the trial lesson sets the start.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch logic',
        p: 'If-then blocks, loops and simple questions answered by code.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python first steps',
        p: 'Variables, loops and true-or-false tests.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python and data',
        p: 'Generators, built-ins and analysis of public data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Professional Python',
        p: 'Efficient, tested Python and automation for work.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes working Python. Is working enough?',
    intro: 'Not always. AI tools often produce code that is correct but does needless work.',
    p1: 'Ask an assistant to find parks near a bus stop and you may get any([...]) with square brackets: correct, readable and doing every calculation. On 78 parks nobody notices. On a whole city, or inside a loop that runs thousands of times, the cost adds up.',
    p2: 'Learners who have counted the calls themselves recognise the pattern and ask for a generator instead. They also know the empty-list trap in all(). Those small judgements are what turn AI-written code into good code.',
    closer: 'In Forest Lake, the learner who knows when code can stop early writes Python that scales.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Forest Lake learners attend',
    intro: 'Each lesson runs live over video, so nobody needs to leave home.',
    cells: [
      { h3: 'Hands-on coding', p: 'The learner writes the code; the teacher follows every keystroke on the shared screen.' },
      { h3: 'In step with school', p: 'Lessons follow Queensland terms and break for holidays.' },
      { h3: 'Free opening lesson', p: 'A genuine first class with a clear suggestion at the end.' },
      { h3: 'Groups or one to one', p: 'Fifteen to twenty learners matched by level, or a private teacher.' },
      { h3: 'Two lessons weekly', p: 'Regular times, about eight lessons each month.' },
      { h3: 'Time in India', p: 'Our teachers are in India: a 4pm Forest Lake lesson is 11:30am India time, every week.' }
    ],
    spec: {
      title: 'Brisbane time, always',
      p: 'Queensland has used no daylight saving since March 1992 (IANA time zone database), and India uses none, so class times never drift.'
    }
  },
  fees: {
    h2: 'Forest Lake lesson fees',
    intro: 'Three prices, set the same for all.',
    first: 'There is no charge for the first lesson, which ends with a written plan.',
    group: 'Group study: roughly eight lessons a month, with fifteen to twenty learners.',
    private: 'Private study: roughly eight lessons a month, one learner per teacher.',
    closer: 'Forest Lake families pay in US dollars and only once the trial has fixed a course and time. Holiday pauses, missed lessons and format changes are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from parents and learners',
  book: {
    h2: 'Book a free Forest Lake lesson',
    intro: 'Tell us the learner\'s age and interests. A teenager might start by counting distance checks with any(); a child might start with a Scratch yes-or-no game.',
    success: 'Thank you. We will contact you soon about a Forest Lake lesson.'
  },
  faq: {
    h2: 'Forest Lake coding and Python questions',
    intro: 'Questions Forest Lake families and adult learners raise most often.',
    items: [
      {
        q: 'What is the population of Forest Lake?',
        a: 'The 2021 Census QuickStats count 22,676 people in the suburb of Forest Lake, with 6,325 families and a median age of 37.'
      },
      {
        q: 'What is short-circuit evaluation in Python?',
        a: 'Stopping a calculation as soon as its result is certain. The or and and operators, and the built-ins any() and all(), skip the remaining items once one decides the answer.'
      },
      {
        q: 'What is the difference between any() and all()?',
        a: 'any() returns True if at least one item is true and stops at the first; all() returns True only if every item is true and stops at the first false one. On an empty input, any() gives False and all() gives True.'
      },
      {
        q: 'How close are Forest Lake parks to bus stops?',
        a: 'Measured in straight lines, 59 of the 78 parks in the council register lie within 400 metres of a Translink stop record inside the suburb, and 75 lie within 800 metres.'
      },
      { q: 'When can children start Python?', a: 'Most start typed Python between eight and ten, after Scratch. The trial lesson checks readiness.' },
      { q: 'Can teenagers use Claude-based courses?', a: 'No. Claude-based courses are limited to learners aged 18 and above; teenagers use other AI tools.' },
      {
        q: 'Is there a classroom in Forest Lake?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Forest Lake learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Is Copilot Studio taught in Forest Lake groups?',
        a: 'No. Copilot Studio lessons are private, one learner with one teacher; in groups, agents are written in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Brisbane and Queensland',
    h2: 'More for Forest Lake learners',
    html: 'Read <a class="cg-inline-link" href="/best-coding-classes-in-brisbane">the Brisbane guide</a> or <a class="cg-inline-link" href="/coding-classes-for-kids-brisbane">coding for Brisbane children</a>. To the west, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-ipswich-qld">Ipswich</a> has a page of its own, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">the Queensland guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Forest Lake and Brisbane',
  footerPlaces: [
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/vibe-coding-and-ai-agents-classes-in-ipswich-qld', label: 'Ipswich' },
    { href: '/coding-classes-for-kids-brisbane', label: 'Kids in Brisbane' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' }
  ],
  personalityCss: `
.cg-root.cg-frlk .cg-hero-grid { align-items: end; gap: clamp(0.95rem, 3.05vw, 2.35rem); }
.cg-root.cg-frlk .cg-hero h1 { font-weight: 655; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-frlk .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.58rem 0 0.58rem 1rem; }
.cg-root.cg-frlk .cg-eyebrow { letter-spacing: 0.135em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-frlk .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.012em; }
.cg-root.cg-frlk .cg-grid-3 { gap: clamp(0.8rem, 2.25vw, 1.7rem); }
.cg-root.cg-frlk .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-frlk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-frlk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-frlk .cg-callout { border-left-width: 4px; border-radius: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Forest Lake (SAL31064), ABS Census 2021 QuickStats (read 12 October 2026): 22,676 people; median age 37; 6,325 families; 8,199 private dwellings; 2.8 per household; separate houses 7,337 (94.9%, Qld 74.8%); drove 6,836 (60.1%, Qld 59.5%); train 229 (2.0%, Qld 1.1%); bachelor or higher 4,503 (24.9%, Qld 21.9%); aged 5-9 1,554; 10-14 1,663; 15-19 1,700. Worked at home 1,760 (15.5%, Qld 14.1%). ABS SAL area 9.8224 sq km. Translink GTFS Wednesday 21 October 2026: 43 stop records with service inside the SAL polygon (our check); 3775 scheduled bus visits; 6 routes (100, 101, 118, 460, 463, 534); busiest Forest Lake Shops (306); first departure 04:45. BCC Park Locations: 78 parks. BCC adjacency: Doolandella, Ellen Grove, Heathwood, Inala, Pallara, Richlands, Wacol. Qld 2027: Term 1 ends Thursday 25 March, Term 2 starts Monday 12 April. Brisbane no daylight saving since March 1992 (IANA).',
    localProject: 'any()/all() short-circuit. 78 BCC parks with suburb FOREST LAKE (lat/long field) x 43 Translink stop records inside SAL31064 (our point-in-polygon; stops outside the boundary excluded). Haversine. Full pairs 3,354. any(d <= 400) per park: 59 parks true, 1,731 distance evaluations. all(any(d <= 400)) over parks in file order: False at park 3, 79 evaluations. all(any(d <= 800)): False at park 75, 913 evaluations; 75 of 78 within 800 m. Max nearest-stop distance 1,172 m; median 257 m.',
    requiredMentions: ['Ellen Grove', '7,337', '1,700', 'Forest Lake Shops', '3,354', '1,731', 'short-circuit', '1,172 metres', '59 of 78'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Forest Lake suburb and locality (SAL31064), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL31064'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities boundary service, used for our point-in-boundary checks and suburb areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Brisbane City Council open data, Park Locations (Creative Commons Attribution 4.0), dataset last modified 30 September 2026.',
        url: 'https://data.brisbane.qld.gov.au/explore/dataset/park-locations/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026, downloaded October 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Python documentation, Built-in Functions: any() and all(), including their equivalent code that returns at the first deciding item.',
        url: 'https://docs.python.org/3/builtins/functions.html#any'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Queensland state school term dates.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Walking distance or access to parks: not claimed; distances are straight-line to stops inside the boundary only.',
      'That parks without a near stop are poorly served: not claimed; stops just outside the suburb were not counted.',
      'Passenger numbers at Forest Lake stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with Brisbane City Council or Translink.'
    ]
  }
};
