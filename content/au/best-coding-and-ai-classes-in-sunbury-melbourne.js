'use strict';
// Sunbury, Melbourne (cg- district page, Australia cluster Phase 8, row 279). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL22391, Sunbury, City of Hume) under Melbourne and Victoria.
// The Hume council page carries council-wide figures; this page uses Sunbury suburb figures only.
// Spine: binary lifting and lowest common ancestor on the metropolitan train network as a tree. Metro train GTFS
// (downloaded 10 Oct 2026), Wednesday 28 Oct 2026: 225 stations, 263 station-to-station links from 2,742 trips
// (replacement buses excluded). Fewest-stop (breadth-first) tree rooted at Town Hall: 224 edges, deepest Stony Point
// at 24. Sunbury depth 13 via Diggers Rest, Watergardens, Keilor Plains, St Albans, Ginifer, Albion, Sunshine,
// West Footscray, Footscray, Arden, Parkville, State Library. Binary lifting table LOG 5; all 25,200 ordered pairs:
// naive climb 373,890 steps (14.84 per query), lifting 155,643 (6.18), all answers agree. LCA of Sunbury with the
// other 224: Town Hall 164, Footscray 48. Tree vs true hops from Sunbury: Flinders Street 18 vs 12, Southern Cross 19
// vs 11, Footscray 9 vs 9, Craigieburn 21 vs 21, Werribee 15 vs 15, Pakenham 34 vs 33, Frankston 28 vs 27.
// Script: scratchpad au/b10/sbry.py, sbry2.py.
// Lesson family: binary lifting + LCA; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SUNBURY',
    label: 'Sunbury, Melbourne',
    blurb: 'Coding and AI classes for Sunbury, with a tree algorithm project on where a Sunbury train journey meets the rest of the network.'
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
  slug: 'best-coding-and-ai-classes-in-sunbury-melbourne',
  code: 'sbry',
  accent: '#96522B',
  accentRationale: 'Sunbury: a burnt clay orange (hue 22), picked by a full search of the muted range: 42.4 RGB units from every Victorian page accent, 19.0 from every other Australian accent and 6.1 from every other colour in content, the stylesheets and the claims logs; 4.82:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Sunbury',
    eyebrow: 'Sunbury, City of Hume, Melbourne, Victoria',
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
  routeLabel: 'Sunbury, Melbourne',
  title: 'Best Coding and AI Classes in Sunbury, Melbourne',
  description: 'Live online coding and AI classes for Sunbury children, teenagers and adults: Scratch, Python, tree algorithms and AI, in small groups or one to one.',
  ogDescription: 'Sunbury coding classes with a train network project: binary lifting answered 25,200 meeting-point questions in 155,643 steps instead of 373,890.',
  twitterDescription: 'Sunbury coding and AI classes, live online, first class free.',
  ogImageCourse: 'competitive-programming-for-teens-course',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Sunbury',
    description: 'Level-matched online lessons in Scratch, Python, tree and graph algorithms and AI for learners in Sunbury, taught live in English.'
  },
  h1: 'Coding and AI classes in Sunbury',
  capsuleQ: 'Where can Sunbury learners find the best coding and AI classes?',
  capsule: 'In live online classes small enough for a teacher to read every learner\'s code as it is written. Sunbury is a large outer suburb of family houses: the 2021 Census counted 38,851 residents across 132.22 square kilometres, and 88.5% of homes are separate houses.',
  lead: 'A Sunbury train heads into the city through the Metro Tunnel. A Craigieburn train comes in on a different line. Where do their routes first share a station? On a network drawn as a tree, that question has a name, the lowest common ancestor, and a neat trick called binary lifting answers it in a handful of jumps instead of a long walk.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Sunbury.',
  picks: {
    eyebrow: 'Course picks for Sunbury',
    h2: 'Courses for learners who like hard problems',
    intro: 'Trees, graphs and precomputed tables run through all four courses, as they do through the train network project. The free first class fixes the level.',
    items: [
      {
        course: 'competitive-programming-for-teens-course',
        band: 'Ages 13 to 17',
        note: 'Olympiad-style problems where lowest common ancestor is a standard tool.'
      },
      { course: 'cpp-programming-masterclass-for-teens', band: 'Ages 13 to 17', note: 'C++ and the STL, the usual language for fast tree algorithms.' },
      {
        course: 'competitive-programming-masterclass-college',
        band: 'University and adult',
        note: 'Contest preparation from Codeforces to ICPC, trees included.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Trees, graphs and preprocessing explained for interviews and work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Sunbury in the Census',
      h2: 'A big outer suburb of houses',
      intro: 'Figures for the Sunbury suburb (ABS code SAL22391) from the 2021 Census QuickStats, with the Victorian figure beside them. The City of Hume page covers the council area.',
      body: [
        {
          kind: 'table',
          caption: 'Sunbury suburb, 2021 Census headline counts',
          head: ['Headline', 'Sunbury'],
          rows: [
            ['Residents', '38,851'],
            ['Median age', '38'],
            ['Families', '10,948'],
            ['Private dwellings', '15,311'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Sunbury next to Victoria',
          head: ['Measure', 'Sunbury', 'Victoria'],
          rows: [
            ['Separate houses', '88.5% (12,496)', '73.4%'],
            ['Flats or apartments', '7.3% (1,033)', '12.1%'],
            ['Workers who drove to work', '55.8% (11,129)', '49.9%'],
            ['Workers who took the train', '1.6% (315)', '1.6%'],
            ['Employed residents who worked at home', '21.7% (4,324)', '25.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Room around it',
              p: 'At 132.22 square kilometres, the Sunbury boundary is more than eight times the area of Mount Waverley in the east of the city.'
            },
            { h3: 'Level on rail', p: 'The share of workers who went by train, 1.6%, matched the Victorian share exactly.' },
            {
              h3: 'A lockdown count',
              p: 'Census night in August 2021 fell during a Victorian lockdown, so travel and home-working figures describe that week only.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau randomly adjusts small counts for confidentiality, so the parts of a QuickStats table need not reach its total. We quote each number as published and never add them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Where two train journeys meet',
      intro: 'From the state train timetable feed for Wednesday 28 October 2026 we linked each pair of stations that a train runs between without stopping in between: 225 stations and 263 links from 2,742 trips. A network with loops is not a tree, so we built one: from Town Hall, each station keeps only its first link on a fewest-stops path. Then we asked for the lowest common ancestor of every ordered pair of stations.',
      body: [
        {
          kind: 'table',
          caption: 'Answering all 25,200 meeting-point queries (our calculation)',
          head: ['Method', 'Steps in total', 'Per query'],
          rows: [
            ['Climb one parent at a time', '373,890', '14.84'],
            ['Binary lifting, jumps of 16, 8, 4, 2, 1', '155,643', '6.18']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Sunbury in the tree',
              p: 'Sunbury sits 13 links below Town Hall, through Diggers Rest, Watergardens, Sunshine, Footscray, Arden, Parkville and State Library among others. The deepest station is Stony Point, at 24.'
            },
            {
              h3: 'Two meeting points',
              p: 'For 164 of the other 224 stations, a Sunbury journey and theirs first meet at Town Hall in this tree. For another 48, including the Craigieburn and Werribee lines, they meet at Footscray.'
            },
            {
              h3: 'Same answers',
              p: 'Both methods returned the same ancestor for all 25,200 pairs. The lifting table needed five levels, since 2 to the 5th, 32, is more than the deepest depth of 24.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A tree is not the network',
          p: 'Cutting 39 links to make a tree changes distances. From Sunbury the tree says Flinders Street is 18 stops away, but trains reach it in 12; Southern Cross is 19 in the tree and 11 on the real network. Footscray, Craigieburn and Werribee match exactly. The tree answers "where do these paths join in this tree", not "what is the shortest trip".'
        },
        {
          kind: 'p',
          text: 'With only 225 stations, the plain one-step climb is already fast, and we would happily use it here. Binary lifting earns its place on trees with millions of nodes, such as file systems, family trees and the call trees inside programs. The station links reflect the timetable feed fetched on 10 October 2026; we built the tree, posed the queries and made every count ourselves.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The algorithm',
      h2: 'Jump in powers of two',
      intro: 'Binary lifting stores, for every station, its parent, its grandparent, the ancestor four up, eight up and sixteen up. Any climb of k steps then splits into the binary digits of k: a climb of 13 is one jump of 8, one of 4 and one of 1.',
      body: [
        {
          kind: 'table',
          caption: 'The two phases of a lowest common ancestor query',
          head: ['Phase', 'What happens', 'Steps'],
          rows: [
            ['Even up', 'Lift the deeper station until both are at the same depth', 'At most 5 jumps here'],
            ['Climb together', 'From the largest jump down, jump both only if they would still differ', 'At most 5 more jumps'],
            ['Finish', 'The parent of either station is the answer', 'One lookup']
          ]
        },
        {
          kind: 'p',
          text: 'The table costs 225 times 5 entries, built once in a single pass, and every query afterwards is logarithmic in the depth. The same doubling trick appears in sparse tables for range minimums, in fast exponentiation and in jump pointers inside version control histories.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Draw a family tree and find where two cousins\' lines meet, first by walking up, then by jumping.' },
            { h3: 'Secondary students', p: 'Build the station tree from the feed in Python and code both methods, counting steps.' },
            { h3: 'Adults', p: 'Apply the same idea to an organisation chart or a folder tree with thousands of entries.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Sunbury',
      h2: 'One station and fourteen schools',
      intro: 'Drawn from station entries, the Wednesday train timetable and the state list of school sites for 2025.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Sunbury station', p: 'Entries reached 691,050 in FY24-25, 57th of 222 metropolitan stations, against 803,350 in FY18-19.' },
            { h3: 'Departures', p: 'On the Wednesday we studied, 73 metropolitan trains left Sunbury, the first at 4:14am and the last at 11:26pm.' },
            {
              h3: 'Schools',
              p: 'The 2025 file lists 14 open schools in Sunbury, nine of them government, including Goonawarra Primary School, Sunbury College and Sunbury Downs Secondary College.'
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
    h2: 'From family trees to binary lifting',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Puzzles and games that build step-by-step thinking.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python start',
        p: 'Lists, dictionaries and the first trees drawn in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms',
        p: 'Trees, breadth-first search and precomputed tables for contests.',
        courses: ['competitive-programming-for-teens-course', 'cpp-programming-masterclass-for-teens']
      },
      {
        band: 'University and adult',
        h3: 'Advanced structures',
        p: 'Tree queries, sparse tables and their use in real systems.',
        courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI write binary lifting for a Sunbury student?',
    intro: 'It can, and usually correctly. Knowing whether the question deserved it is another matter.',
    p1: 'Ask an assistant for the lowest common ancestor of two stations and it may produce a polished binary lifting solution. It will rarely point out that the train network is not a tree, or that the tree it quietly built says Flinders Street is 18 stops from Sunbury when the real answer is 12.',
    p2: 'A learner who has built the tree, counted 373,890 steps against 155,643 and compared tree distance with real distance knows which questions the code answers and which it only appears to answer.',
    closer: 'That judgement, about what a model of the world leaves out, is what a Sunbury student brings that an AI does not.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online classes for Sunbury',
    intro: 'Lessons happen live on a video call, so Sunbury\'s distance from the city does not matter.',
    cells: [
      { h3: 'Shared screen, own code', p: 'Each learner codes on their own computer while the teacher follows the shared screen and asks questions.' },
      { h3: 'Terms and holidays', p: 'Courses run through the Victorian terms and stop for school holidays.' },
      { h3: 'Start with a free lesson', p: 'The trial is a real class; afterwards the teacher suggests a course and a time that suits.' },
      { h3: 'Small level groups', p: 'Fifteen to twenty learners at the same stage work together.' },
      { h3: 'Steady pace', p: 'Two set lessons each week, about eight a month, with holiday breaks planned ahead.' },
      {
        h3: 'Teachers in India',
        p: 'Teachers are in India, so a 4pm Sunbury lesson in daylight saving is 10:30am India time, and 11:30am in Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Sunbury class fees',
    intro: 'A free start, then two monthly options.',
    first: 'Lesson one is free and closes with a straight recommendation.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at one level.',
    private: 'Close to eight one-to-one lessons a month with a single teacher.',
    closer: 'Fees outside India are in US dollars, the same for Sunbury as for any family abroad. Nothing is charged before the trial has decided the course and the time; the pricing page explains holidays, missed classes and changing format.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Sunbury class',
    intro: 'Let us know how old the learner is and what grabs their attention. Seven-year-olds often open with a Scratch logic puzzle; senior students sometimes open by locating where two train lines join, using binary lifting.',
    success: 'Thank you. Our team will contact you shortly about a Sunbury class.'
  },
  faq: {
    h2: 'Sunbury coding class questions',
    intro: 'Questions Sunbury families and adult learners ask us.',
    items: [
      {
        q: 'How many people live in Sunbury?',
        a: 'The 2021 Census QuickStats for the Sunbury suburb record 38,851 residents, 10,948 families and 15,311 private dwellings, with a median age of 38.'
      },
      {
        q: 'What is a lowest common ancestor?',
        a: 'In a tree, the lowest common ancestor of two nodes is the deepest node that has both of them below it. In a family tree it is the most recent shared ancestor of two people.'
      },
      {
        q: 'What is binary lifting?',
        a: 'A technique that precomputes each node\'s ancestors at distances 1, 2, 4, 8 and so on, so that any climb up the tree takes a number of jumps equal to the binary digits of the distance rather than one step per level.'
      },
      {
        q: 'What did the Sunbury train project find?',
        a: 'For all 25,200 ordered pairs of 225 stations, binary lifting found the meeting point in 155,643 steps against 373,890 for climbing one station at a time, with identical answers.'
      },
      {
        q: 'Is this too advanced for school students?',
        a: 'For most beginners, yes at first. It is a typical topic for strong secondary students preparing for olympiads, after a year or so of programming and some practice with trees.'
      },
      { q: 'What do younger Sunbury children start with?', a: 'From six, children start with Scratch, making games and puzzles that build logical thinking.' },
      {
        q: 'Do you run classes in Sunbury?',
        a: 'No physical classes. All teaching is live online, we have no Australian premises, and the number we list is an Indian phone number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Sunbury learners?',
        a: 'The first lesson is free. After that, group classes are USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, and one-to-one classes are USD 150 a month. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How big is each group?',
        a: 'Fifteen to twenty learners, grouped on level, pace and goals, with one-to-one lessons if no group time works.',
        boiler: true
      },
      {
        q: 'Can adults join coding classes?',
        a: 'Yes. Adults learn in separate groups or one to one, often to prepare for technical interviews or to sharpen problem solving.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Sunbury learners',
    html: 'The <a class="cg-inline-link" href="/ai-and-programming-classes-in-hume-melbourne">City of Hume page</a> covers the council area that includes Sunbury, and the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-craigieburn-melbourne">Craigieburn page</a> another Hume suburb. For a first-time coder in primary school, our <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">Melbourne kids coding guide</a> is the gentler entry point, while the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victorian overview</a> lists pages across the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Sunbury and Melbourne',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-hume-melbourne', label: 'City of Hume' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-sbry .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 3.2vw, 2.5rem); }
.cg-root.cg-sbry .cg-hero h1 { font-weight: 720; letter-spacing: -0.026em; line-height: 1.02; }
.cg-root.cg-sbry .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.3rem; }
.cg-root.cg-sbry .cg-eyebrow { letter-spacing: 0.21em; font-weight: 630; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-sbry .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.017em; }
.cg-root.cg-sbry .cg-grid-3 { gap: clamp(0.8rem, 2.3vw, 1.8rem); }
.cg-root.cg-sbry .cg-table caption { font-weight: 610; text-align: left; text-transform: none; }
.cg-root.cg-sbry .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; font-weight: 520; }
.cg-root.cg-sbry .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-sbry .cg-callout { border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Sunbury, ABS Census 2021 QuickStats, Sunbury suburb SAL22391 (read 11 October 2026): 38,851 people; median age 38; 10,948 families; 15,311 private dwellings; 2.6 people per household; separate house 88.5% (12,496; Victoria 73.4%); flat or apartment 7.3% (1,033; Victoria 12.1%); car as driver 55.8% (11,129; Victoria 49.9%); train 1.6% (315; Victoria 1.6%); worked at home 21.7% (4,324; Victoria 25.7%; lockdown Census). ABS SAL area 132.22 square kilometres, City of Hume. Sunbury station 691,050 entries FY24-25 (rank 57 of 222; FY18-19 803,350). Metro train GTFS Wed 28 Oct 2026: 73 departures from Sunbury, first 04:14, last 23:26. Victorian School Locations 2025: 14 open schools (Government 9, Catholic 4, Independent 1), including Goonawarra Primary School, Sunbury College and Sunbury Downs Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Binary lifting and lowest common ancestor. Metro train GTFS Schedule (downloaded 10 October 2026), Wednesday 28 October 2026: 225 stations, 263 undirected consecutive-stop links from 2,742 trips (replacement buses excluded). Breadth-first (fewest-stop) spanning tree rooted at Town Hall: 224 edges, max depth 24 (Stony Point). Sunbury depth 13 (Diggers Rest, Watergardens, Keilor Plains, St Albans, Ginifer, Albion, Sunshine, West Footscray, Footscray, Arden, Parkville, State Library, Town Hall). LOG 5. All 25,200 ordered pairs: naive 373,890 steps (14.84 per query), lifting 155,643 (6.18); answers agree on all. LCA(Sunbury, x): Town Hall 164, Footscray 48, others 12 on the Sunbury path. Tree vs true hops from Sunbury: Flinders Street 18/12, Southern Cross 19/11, Footscray 9/9, Craigieburn 21/21, Werribee 15/15, Pakenham 34/33, Frankston 28/27. Script: scratchpad au/b10/sbry.py, sbry2.py.',
    requiredMentions: [
      '38,851',
      '10,948',
      '15,311',
      '132.22 square kilometres',
      '691,050',
      '803,350',
      '373,890',
      '155,643',
      'Goonawarra Primary School',
      'Sunbury Downs Secondary College'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Sunbury suburb (SAL22391).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL22391' },
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
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL22391 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
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
      'Shortest journey times or real interchange advice: not given; the tree is a fewest-stop construction rooted at Town Hall and overstates some distances.',
      'Running times in milliseconds: not measured; only steps were counted.',
      'Reasons for the fall in Sunbury station entries since FY18-19: not claimed.',
      'Names of Catholic, independent or specialist schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Hume City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
