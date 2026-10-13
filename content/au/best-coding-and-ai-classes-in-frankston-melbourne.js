'use strict';
// Frankston, Melbourne (cg- district page, Australia cluster Phase 8, row 255). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL20947, Frankston (Vic.), City of Frankston) under Melbourne
// and Victoria.
// Spine: exponential (galloping) search from the last position for a run of increasing queries on a sorted
// timetable. Metro train GTFS (downloaded 10 Oct 2026), Wed 28 Oct 2026: 106 Frankston line departures from
// Frankston towards the city, 04:13 to 23:06, gaps 4 to 20 minutes. Queries "next train after t" from 05:00 to 23:00:
// every minute 1,081 queries, linear 65,454 comparisons, binary 7,357, gallop 1,187; every 3 min 21,848 / 2,461 / 467;
// every 10 min 6,612 / 741 / 215; all three agree. Three far-apart queries: gallop 30, binary 21.
// Script: scratchpad au/b7/frkn.py.
// Lesson family: exponential (galloping) search; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'FRANKSTON',
    label: 'Frankston, Melbourne',
    blurb: 'Coding and AI classes for Frankston, with a search project on finding the next train out of Frankston in about one comparison.'
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
  slug: 'best-coding-and-ai-classes-in-frankston-melbourne',
  code: 'frkn',
  accent: '#554C8F',
  accentRationale: 'Frankston: a muted bay violet (hue 248), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 6.05:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Frankston',
    eyebrow: 'Frankston, City of Frankston, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Frankston, Melbourne',
  title: 'Best Coding and AI Classes in Frankston, Melbourne',
  description: 'Live online coding and AI classes for Frankston children, teenagers and adults, from Scratch and Python to search algorithms and AI, in small groups or one to one.',
  ogDescription: 'Coding classes for Frankston with a timetable project: finding the next train took 60.5 comparisons by scanning, 6.81 by binary search and 1.10 by galloping.',
  twitterDescription: 'Frankston coding and AI classes, live online, first class free.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Frankston',
    description: 'Level-matched online lessons in Scratch, Python, search algorithms and AI for learners in Frankston, taught live in English.'
  },
  h1: 'Coding and AI classes in Frankston',
  capsuleQ: 'Where do Frankston learners find the best coding and AI classes?',
  capsule: 'In live online groups where a teacher watches the code being written and asks why it works. Frankston is a bayside suburb of smaller households: the 2021 Census counted 37,331 residents in 17,419 private dwellings, an average of 2.2 people per home.',
  lead: 'A Frankston line train leaves Frankston for the city on average every ten minutes or so through the day. A journey planner asked "when is the next train after 5:47pm?" has to search that list. Asked again a minute later, it can search from scratch, or it can remember where it stopped last time and look a little further on. The second approach has a name: galloping search.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Frankston.',
  picks: {
    eyebrow: 'Course picks for Frankston',
    h2: 'Courses where algorithms are taught by doing',
    intro: 'The courses below all teach searching and counting the work a program does, the core of the timetable project. The free first class sets the starting point.',
    items: [
      {
        course: 'competitive-programming-for-teens-course',
        band: 'Ages 13 to 17',
        note: 'Contest problems where the choice of search decides whether a program finishes in time.'
      },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Binary search, sorting and the reasoning behind them, step by step.' },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Searching and sorting in depth, with the analysis interviewers expect.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python from scratch to the standard library tools, including bisect.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Frankston in the Census',
      h2: 'Small households by the bay',
      intro: 'Figures for the Frankston suburb (ABS code SAL20947, listed as Frankston (Vic.)) from the 2021 Census QuickStats, beside the Victorian share.',
      body: [
        {
          kind: 'table',
          caption: 'Frankston suburb, 2021 Census headline counts',
          head: ['Headline', 'Frankston'],
          rows: [
            ['Residents', '37,331'],
            ['Median age', '39'],
            ['Families', '9,611'],
            ['Private dwellings', '17,419'],
            ['Average people per household', '2.2']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Frankston and Victoria side by side',
          head: ['Measure', 'Frankston', 'Victoria'],
          rows: [
            ['Separate houses', '73.4% (11,159)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '20.3% (3,082)', '13.9%'],
            ['Flats or apartments', '6.1% (928)', '12.1%'],
            ['Workers who drove to work', '56.5% (9,763)', '49.9%'],
            ['Workers who took the train', '0.9% (154)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Exactly average', p: 'Separate houses make up 73.4% of Frankston homes, the same share, to one decimal place, as Victoria as a whole.' },
            { h3: 'Area', p: 'The bureau measures the suburb at 19.78 square kilometres, the centre of the City of Frankston.' },
            { h3: 'Lockdown day', p: 'The Census was taken in the August 2021 lockdown, when 3,299 employed residents, 19.1%, worked from home.' }
          ]
        },
        {
          kind: 'p',
          text: 'Small Census counts are adjusted for privacy, so parts need not add up to totals. We report each figure exactly as the bureau publishes it and never combine parts into a total.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Finding the next train in about one step',
      intro: 'From the state timetable feed we took every Frankston line train leaving Frankston for the city on Wednesday 28 October 2026: 106 departures, the first at 4:13am and the last at 11:06pm. Then we asked "what is the next train after this time?" for every minute from 5am to 11pm, and counted the comparisons each search made.',
      body: [
        {
          kind: 'table',
          caption: 'Comparisons needed to answer every query (our calculation)',
          head: ['Queries', 'Scan from the start', 'Binary search', 'Galloping search'],
          rows: [
            ['Every minute, 1,081 queries', '65,454', '7,357', '1,187'],
            ['Every 3 minutes, 361 queries', '21,848', '2,461', '467'],
            ['Every 10 minutes, 109 queries', '6,612', '741', '215']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Per query', p: 'With a query every minute, scanning took 60.5 comparisons on average, binary search 6.81 and galloping 1.10.' },
            { h3: 'Same answers', p: 'All three methods returned the same next train for every one of the 1,081 queries, which we checked in the script.' },
            { h3: 'The timetable', p: 'Gaps between departures ran from 4 to 20 minutes, so consecutive queries usually land on the same train or the next one.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'When binary search is better',
          p: 'Galloping only pays when each query is close to the last. For three queries far apart, 5am, noon and 10pm, it needed 30 comparisons while plain binary search needed 21. And with only 106 departures, any of the three is fast enough; the difference matters for timetables with millions of rows.'
        },
        {
          kind: 'p',
          text: 'The departures come from the feed downloaded on 10 October 2026, so a later timetable may differ. The queries, the three searches and every count are ours, from our own script.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The algorithm',
      h2: 'Gallop, then halve',
      intro: 'Galloping search starts at the last answer and jumps ahead 1, 2, 4, 8 places until it overshoots, then binary searches the small gap it has trapped.',
      body: [
        {
          kind: 'table',
          caption: 'Three searches on a sorted list of n departures',
          head: ['Method', 'Work per query', 'Suits'],
          rows: [
            ['Scan from the start', 'Up to n comparisons', 'The list is tiny or unsorted'],
            ['Binary search', 'About log2 n comparisons', 'Queries arrive in any order'],
            ['Galloping search', 'About log2 of the distance moved', 'Each query is just after the last']
          ]
        },
        {
          kind: 'p',
          text: 'Python already includes binary search in its bisect module, and a galloping step is a few extra lines on top. The same trick appears in merging sorted lists and in the sorting routine Python itself uses, where runs of data often continue where the last comparison left off.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Play a guessing game with numbered cards, first one by one, then by halves, and count the guesses.' },
            { h3: 'Secondary students', p: 'Write all three searches in Python and test that they agree on every minute of the day.' },
            { h3: 'Adults', p: 'Spot the same pattern in log files and sorted exports, where each lookup follows the last.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Frankston',
      h2: 'Two stations and fifteen schools',
      intro: 'More from the station and school files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Frankston station', p: 'Frankston recorded 1,035,450 entries in FY24-25, 31st of 222 metropolitan stations, against 1,296,500 in FY18-19.' },
            { h3: 'Leawarra', p: 'The suburb also holds Leawarra station, with 5,500 entries in FY24-25, the fourth quietest station in the metropolitan file.' },
            {
              h3: 'Schools',
              p: 'The 2025 file places 15 open schools in Frankston: ten primary, two secondary and three specialist, including Frankston Primary School and McClelland Secondary College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing games to galloping search',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch games',
        p: 'Guess-the-number games that teach searching by halves.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python start',
        p: 'Lists, loops and the first sorted list to search.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Algorithms and contests',
        p: 'Binary search, galloping and timing one method against another.',
        courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Algorithms for work',
        p: 'Search, sorting and analysis for interviews and real systems.',
        courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can write a search in one line, why should a Frankston learner study three?',
    intro: 'Because choosing the right search depends on how the questions arrive, and an AI only knows that if someone tells it.',
    p1: 'Ask an assistant for "the next train after a time" and it will usually reach for a scan or binary search, both correct. Neither is wrong, so no test fails. Only someone who knows the queries come one after another will think to ask for a search that starts where the last one finished.',
    p2: 'A learner who has counted 65,454 comparisons fall to 1,187, and then seen galloping lose on three scattered queries, can tell an AI exactly what to build and check that it did. That is the skill that grows in value as the code gets cheaper.',
    closer: 'The Frankston learner who knows when to gallop and when to halve is the one who can steer the AI, not just accept its first answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for Frankston',
    intro: 'Lessons are live on screen, so learners join from home anywhere in the suburb.',
    cells: [
      { h3: 'Click and code', p: 'The learner opens the lesson link, shares a screen and codes while the teacher follows along.' },
      { h3: 'Term-based', p: 'Courses run through the Victorian school terms and stop for the state holidays.' },
      { h3: 'Trial first', p: 'The free lesson is a real class; once it ends, the teacher proposes a course and a weekly slot that fits.' },
      { h3: 'Level-matched groups', p: 'Each group seats between five and ten learners working at a similar stage.' },
      { h3: 'Two lessons weekly', p: 'Two set lessons a week, roughly eight a month, with breaks planned ahead.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers work from India, so a 4pm Frankston lesson during daylight saving is 10:30am India time, and 11:30am in Melbourne\'s winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India does not move its clocks, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Frankston class fees',
    intro: 'Three figures, no surprises.',
    first: 'Lesson one is free and ends with a plain recommendation.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at the same level.',
    private: 'Approximately eight private lessons a month with one teacher.',
    closer: 'Outside India we bill in US dollars, so Frankston families pay what every other family abroad pays. We charge nothing before the trial settles which course and which slot; the pricing page explains holidays, missed lessons and moving between formats.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Frankston class',
    intro: 'Send us an age and one thing the learner loves. A six-year-old might start with a guessing game in Scratch; a Year 12 student might start by racing three searches on the Frankston timetable.',
    success: 'Thank you. Our team will be in touch soon about a Frankston class.'
  },
  faq: {
    h2: 'Frankston coding class questions',
    intro: 'Questions we hear from Frankston households and adult learners.',
    items: [
      {
        q: 'How many people live in Frankston?',
        a: 'The 2021 Census QuickStats for the Frankston suburb count 37,331 residents in 9,611 families, with a median age of 39.'
      },
      {
        q: 'What is galloping search?',
        a: 'A search that starts from a known position and jumps ahead in doubling steps until it passes the target, then uses binary search on the small range it has found. It is also called exponential search.'
      },
      {
        q: 'What is binary search?',
        a: 'A way of finding an item in a sorted list by checking the middle, discarding the half that cannot contain it and repeating. For 106 items it needs about seven checks.'
      },
      {
        q: 'What did the Frankston timetable project show?',
        a: 'For a query every minute, galloping needed 1,187 comparisons in total against 7,357 for binary search and 65,454 for scanning; for three scattered queries, binary search did better.'
      },
      {
        q: 'Are algorithms too hard for school students?',
        a: 'Not when taught with real examples. Binary search makes sense to most children as a guessing game, and teenagers can code it after a term of Python.'
      },
      {
        q: 'What do younger Frankston children start with?',
        a: 'Children from six begin with Scratch, building games that use counting, comparing and simple searching.'
      },
      {
        q: 'Do you have a Frankston venue?',
        a: 'No. All classes are live online, we have no premises in Australia, and the phone number we show is Indian.',
        boiler: true
      },
      {
        q: 'How much do coding classes cost for Frankston learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. Course, format and time are agreed before you pay.',
        boiler: true
      },
      {
        q: 'What size is each group?',
        a: 'Between five and ten learners, grouped on level, pace and goals, with private lessons when no group time suits.',
        boiler: true
      },
      {
        q: 'Is there anything for adult learners?',
        a: 'Plenty. Grown-up learners get their own groups or private lessons, and many come to prepare for coding interviews or to make slow work scripts faster.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Frankston learners',
    html: 'Starting with a primary-school child? Our guide to <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes across Melbourne</a> explains the first steps. For the wider picture, the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> cover the city and the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Frankston and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-frkn .cg-hero-grid { align-items: stretch; gap: clamp(1.15rem, 3.3vw, 2.65rem); }
.cg-root.cg-frkn .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-frkn .cg-capsule { border-left: 2px solid var(--cg-accent); padding: 0.65rem 0 0.65rem 1.35rem; }
.cg-root.cg-frkn .cg-eyebrow { letter-spacing: 0.17em; font-weight: 640; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-frkn .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.015em; }
.cg-root.cg-frkn .cg-grid-3 { gap: clamp(0.75rem, 2.2vw, 1.75rem); }
.cg-root.cg-frkn .cg-table caption { font-weight: 620; text-align: left; text-transform: none; }
.cg-root.cg-frkn .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums slashed-zero; }
.cg-root.cg-frkn .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-frkn .cg-callout { border-left-width: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Frankston, ABS Census 2021 QuickStats, Frankston (Vic.) suburb SAL20947 (read 10 October 2026): 37,331 people; median age 39; 9,611 families; 17,419 private dwellings; 2.2 people per household; separate house 73.4% (11,159; Victoria 73.4%); semi-detached, row or terrace house, townhouse 20.3% (3,082; Victoria 13.9%); flat or apartment 6.1% (928; Victoria 12.1%); car as driver 56.5% (9,763; Victoria 49.9%); train 0.9% (154; Victoria 1.6%); worked at home 19.1% (3,299, lockdown Census day). ABS SAL area 19.779 square kilometres. Metropolitan stations inside the boundary: Frankston (1,035,450 FY24-25, rank 31 of 222; FY18-19 1,296,500) and Leawarra (5,500 FY24-25, fourth lowest of 222). Victorian School Locations 2025: 15 open schools inside the boundary (Primary 10, Secondary 2, Special 3; Government 11, Catholic 3, Independent 1), including Frankston Primary School and McClelland Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Exponential (galloping) search. Metro train GTFS Schedule (downloaded 10 October 2026), Wednesday 28 October 2026: 106 Frankston line (FKN) trips departing Frankston towards the city, first 04:13, last 23:06, gaps 4 to 20 minutes. Next-departure queries from 05:00 to 23:00. Every minute: 1,081 queries, linear 65,454 comparisons (60.5 per query), binary 7,357 (6.81), gallop from last position 1,187 (1.10). Every 3 minutes: 361 queries, 21,848 / 2,461 / 467. Every 10 minutes: 109 queries, 6,612 / 741 / 215. All methods agree on every query. Three far-apart queries (05:00, 12:00, 22:00): gallop 30, binary 21. Script: scratchpad au/b7/frkn.py.',
    requiredMentions: ['37,331', '9,611', '17,419', '1,035,450', '1,296,500', 'Leawarra', '65,454', '7,357', 'McClelland Secondary College', '19.78 square kilometres'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Frankston (Vic.) suburb (SAL20947).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20947' },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan train feed downloaded 10 October 2026, calendar 9 October to 31 December 2026.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20947 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'Python documentation, bisect module (array bisection algorithm).', url: 'https://docs.python.org/3/library/bisect.html' },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Timings in milliseconds: not measured; only comparisons were counted.',
      'Stony Point line departures from Frankston: not included; Frankston line trips only.',
      'Reasons for the fall in Frankston station entries since FY18-19: not claimed.',
      'Names of Catholic, independent or specialist schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Frankston City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
