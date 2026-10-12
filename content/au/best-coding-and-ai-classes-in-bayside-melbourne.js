'use strict';
// Bayside, Melbourne (cg- district page, Australia cluster Phase 8, row 267). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page (ABS LGA20910, City of Bayside) under Melbourne and Victoria.
// Spine: which train station is closest to each of the 28 schools the state lists in Bayside, and how does a
// kd-tree answer that without measuring every school against all 222 stations?
// Data: Victorian School Locations 2025 and FY24-25 metropolitan station coordinates (both CC BY 4.0). Our
// measurements (scratchpad au/b9/bysd.py): brute force 6,216 distance checks, kd-tree 433 (8 to 30 per school,
// average 15.5), identical answers; median nearest distance 786.5 m; 11 of 28 nearest stations lie outside Bayside;
// a kd-tree built on raw degrees picks a different station for 2 schools.
// Lesson family: kd-tree nearest-neighbour search; 0 location-page hits, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BAYSIDE',
    label: 'Bayside, Melbourne',
    blurb: 'Coding and AI classes for Bayside, with a kd-tree project that finds the nearest train station to every school the state lists in the council area.'
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
  slug: 'best-coding-and-ai-classes-in-bayside-melbourne',
  code: 'bysd',
  accent: '#664E30',
  accentRationale: 'Bayside: a warm sandstone brown (hue 33), chosen by hand at least 20 RGB units from every other Australian page accent and clear of the excluded violet band',
  pageType: 'city',
  place: {
    name: 'Bayside',
    eyebrow: 'City of Bayside, Melbourne, Victoria',
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
  routeLabel: 'Bayside, Melbourne',
  title: 'Best Coding and AI Classes in Bayside, Melbourne',
  description: 'Live online coding and AI classes for Bayside families, from Scratch for young children to Python, algorithms and AI projects, in small groups or one to one.',
  ogDescription: 'Coding and AI classes for Bayside, with a kd-tree project: 433 distance checks instead of 6,216 to find the station nearest each listed school.',
  twitterDescription: 'Bayside coding and AI classes, taught live online, with a free first lesson.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bayside',
    description: 'Level-matched online coding, algorithms and AI lessons for children, teenagers and adults in the City of Bayside, taught live in English.'
  },
  h1: 'Coding and AI classes in Bayside',
  capsuleQ: 'Where do Bayside learners find the best coding and AI classes?',
  capsule: 'In live online lessons where a teacher writes, runs and questions real code with the learner, from Scratch at six to Python, algorithms and AI for teenagers and adults. The City of Bayside counted 101,306 residents in the 2021 Census, a median age of 45, and 36,775 adults holding a bachelor degree or higher.',
  lead: 'Victoria publishes the location of every school and every metropolitan train station. Ask "which station is closest to each Bayside school?" and the obvious method measures every school against every station. A kd-tree, a way of splitting a map into halves again and again, gets the same answers while measuring a small fraction of the pairs.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Bayside.',
  picks: {
    eyebrow: 'Course picks for Bayside',
    h2: 'Courses where searching and sorting become real tools',
    intro: 'The station project uses trees, distance and careful checking. Each course below teaches part of that, and the free trial lesson places the learner at the right step.',
    items: [
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Trees, recursion and search, built and timed on real data like the school and station files.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python foundations, from reading a CSV file to writing recursive functions.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Spatial indexes, complexity and the trade-offs behind fast lookups.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python with maps, coordinates and small games that search.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Bayside in the Census',
      h2: 'An older bayside council with many degree holders',
      intro: 'Headline figures for the City of Bayside (ABS code LGA20910) from the 2021 Census QuickStats, with Victoria alongside.',
      body: [
        {
          kind: 'table',
          caption: 'City of Bayside, 2021 Census headline counts',
          head: ['Headline', 'Bayside'],
          rows: [
            ['Residents', '101,306'],
            ['Median age', '45'],
            ['Families', '27,964'],
            ['Private dwellings', '43,058'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Bayside compared with Victoria',
          head: ['Measure', 'Bayside', 'Victoria'],
          rows: [
            ['Adults with a bachelor degree or higher', '44.0% (36,775)', '29.2%'],
            ['Workers employed as professionals', '33.6% (16,991)', '25.0%'],
            ['Homes that are separate houses', '62.5% (23,722)', '73.4%'],
            ['Homes that are semi-detached or townhouses', '22.7% (8,612)', '13.9%'],
            ['Workers who drove to work', '35.6% (18,002)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children in school', p: 'The Census counted 5,913 residents aged 5 to 9 and 7,315 aged 10 to 14.' },
            { h3: 'Working from home', p: 'On Census day, during the August 2021 lockdown, 43.0% of employed residents, 21,709 people, worked at home.' },
            { h3: 'Thirty-seven square kilometres', p: 'The ABS boundary for the council covers about 37.2 square kilometres along Port Phillip Bay.' }
          ]
        },
        {
          kind: 'p',
          text: 'Census cells are adjusted slightly by the bureau to protect privacy, so each figure here is printed as published and we never add separate rows into totals of our own.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Which station is nearest to each Bayside school?',
      intro: 'The 2025 school locations file lists 28 schools with a Bayside council address: 18 primary, 4 secondary, 4 combined primary and secondary, and 2 special schools. The FY24-25 station file gives coordinates for 222 metropolitan stations. We found the nearest station to each school two ways and counted the distance checks.',
      body: [
        {
          kind: 'table',
          caption: 'Same answers, very different amounts of work (our measurement)',
          head: ['Method', 'Distance checks for 28 schools', 'Per school'],
          rows: [
            ['Measure every school against every station', '6,216', '222'],
            ['Search a kd-tree built from the stations', '433', '8 to 30, average 15.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'A few of the results, straight-line distance in metres',
          head: ['School', 'Nearest station', 'Distance'],
          rows: [
            ['Cheltenham Primary School', 'Cheltenham', '217'],
            ['Hampton Primary School', 'Hampton', '537'],
            ['Brighton Secondary College', 'Patterson', '1,539'],
            ['Black Rock Primary School', 'Sandringham', '2,630']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Split, then split again',
              p: 'The tree divides the stations east and west of a middle one, then north and south inside each half, and so on until every station has its own branch.'
            },
            {
              h3: 'Skip whole halves',
              p: 'If the line between two halves is further away than the closest station found so far, nothing on the far side can win, so the search never looks there.'
            },
            {
              h3: 'Check the answers',
              p: 'For all 28 schools the tree returned exactly the station that the slow, exhaustive method returned. Speed only counts once that agreement is shown.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Degrees are not metres',
          p: 'Our first tree split on raw longitude and latitude. In Melbourne a degree east is about 88 kilometres but a degree north is about 111, so the tree measured the wrong distances and chose a different nearest station for 2 of the 28 schools, including Beaumaris Primary School. Converting to metres first fixed both.'
        },
        {
          kind: 'p',
          text: 'The median school sits 786.5 metres from its nearest station by straight line. For 11 of the 28 schools that station is outside Bayside, at places such as Cheltenham, Mentone and Moorabbin, which is why the search covers the whole network rather than only the seven stations inside the council boundary. Station and school positions are published by the state; the tree, distances and counts are our own calculations.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The idea in code',
      h2: 'Thirty lines that skip most of the map',
      intro: 'A kd-tree is short to write and easy to get subtly wrong. These are the parts learners write, test and break on purpose.',
      body: [
        {
          kind: 'table',
          caption: 'Pieces of the program and what each one teaches',
          head: ['Piece', 'What it does', 'Common slip'],
          rows: [
            [
              'build(points, depth)',
              'Sorts on x or y in turn and puts the middle point at the branch',
              'Forgetting to alternate the axis'
            ],
            [
              'nearest(node, target)',
              'Walks the near side first, then the far side only if needed',
              'Pruning before checking the far side properly'
            ],
            ['to_metres(lon, lat)', 'Scales degrees into metres before any distance', 'Mixing degrees and metres in one tree'],
            ['brute_force(target)', 'Checks every station, slowly but certainly', 'Skipping the check that both methods agree']
          ]
        },
        {
          kind: 'p',
          text: 'With 222 stations the slow way is still quick on a laptop. The lesson is the growth: double the stations and brute force doubles its work, while the tree adds roughly one more level.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Fold a paper map in half again and again, and race a friend to the nearest landmark without measuring everything.' },
            { h3: 'Secondary students', p: 'Build the tree in Python, count the checks for each school, and find the one that makes the search work hardest.' },
            { h3: 'Adults', p: 'Compare the hand-written tree with a library version and see where the time actually goes.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Bayside',
      h2: 'Seven stations and twenty-eight listed schools',
      intro: 'From the state school file, the station entry file and the Victorian calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Stations inside the boundary',
              p: 'By our point-in-boundary check, seven stations sit inside Bayside: Highett, Sandringham, Hampton, Brighton Beach, Middle Brighton, North Brighton and Gardenvale. Sandringham recorded 710,850 entries in FY24-25, rounded by the publisher.'
            },
            {
              h3: 'Government secondaries',
              p: 'Beaumaris Secondary College, Brighton Secondary College and Sandringham College are the government secondary schools in the list.'
            },
            { h3: 'Term 1, 2027', p: 'The first Victorian school term of 2027 opens on Thursday 28 January and closes on Thursday 25 March for government schools.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council figures, not suburb figures',
          p: 'Census numbers on this page describe the whole City of Bayside, which takes in Brighton, Hampton, Sandringham, Beaumaris and neighbouring suburbs; each suburb has its own, smaller figures.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From folding maps to spatial indexes',
    intro: 'Ages are a starting guide; the free trial decides the real step.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and grids',
        p: 'Sprites that move across a grid and games that search for the closest target.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python with coordinates',
        p: 'Lists, loops and distances, with a teacher reading every line aloud.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Trees and recursion',
        p: 'Build search structures and prove they agree with the slow method.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Algorithms for work',
        p: 'Indexes, complexity and choosing the right structure for real datasets.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can write a kd-tree. Why should a Bayside student still build one?',
    intro: 'Because the version an assistant produces can return a confident answer that is wrong for a few points, and only a learner who understands the tree will notice.',
    p1: 'Asked for a nearest-station search, an assistant will often produce a tidy kd-tree that works on longitude and latitude directly. On our Bayside data that gave the wrong station for two schools, with no error message. The code ran, the output looked sensible, and the mistake only showed when we compared it with the slow method.',
    p2: 'Students who have built the tree themselves know to ask what units the distances are in and to test against a brute-force answer. Those two habits carry over to any algorithm an AI drafts, from route planners to recommendation systems.',
    closer: 'In Bayside, as anywhere, the learner who can check an AI\'s algorithm is the one who can trust it at work.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons at a Bayside kitchen table',
    intro: 'Classes run live on screen, so a learner in Beaumaris joins in exactly the same way as one in Brighton.',
    cells: [
      { h3: 'Start writing straight away', p: 'The teacher and learner share a screen and work in the same code from the first minute.' },
      { h3: 'Built around Victorian terms', p: 'Plans follow the state school terms and stop for the holidays.' },
      { h3: 'A genuine trial lesson', p: 'The free first class teaches real material and ends with a suggested course and time.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same level, sometimes from several suburbs or states.' },
      { h3: 'Two lessons a week', p: 'About eight a month at fixed times, with any breaks agreed in advance.' },
      { h3: 'Teachers based in India', p: 'A 4:30pm Bayside lesson under daylight saving starts at 11am India time; from April it starts at noon there.' }
    ],
    spec: {
      title: 'Melbourne and India clocks',
      p: 'Melbourne switches to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027; India does not change its clocks. Lesson times are always given in Melbourne time.'
    }
  },
  fees: {
    h2: 'Bayside class fees',
    intro: 'Three prices, set out in full before anything is paid.',
    first: 'The first lesson costs nothing and finishes with an honest recommendation.',
    group: 'A month of group lessons, usually eight, with five to ten learners working at one level.',
    private: 'About eight one-to-one lessons a month with a single teacher.',
    closer: 'Families outside India pay in US dollars at one rate for everyone. Billing begins only after the trial, once the course and time are agreed; the pricing page covers holidays, missed lessons and moving between formats.'
  },
  reviewsH2: 'What families and learners say on Google',
  book: {
    h2: 'Book a first Bayside lesson',
    intro: 'Share the learner\'s age and what they enjoy. An eight-year-old might start with a Scratch game that hunts for the nearest treasure; a teenager might start by plotting Bayside\'s stations in Python.',
    success: 'Thank you. Our team will contact you soon about a Bayside lesson.'
  },
  faq: {
    h2: 'Bayside coding and AI questions',
    intro: 'What Bayside parents and adult learners usually ask first.',
    items: [
      {
        q: 'How many people live in the City of Bayside?',
        a: 'The 2021 Census QuickStats for the City of Bayside record 101,306 residents, a median age of 45 and 27,964 families.'
      },
      {
        q: 'What is a kd-tree?',
        a: 'A kd-tree stores points by splitting them on one coordinate, then the next, at each level. It lets a program find the nearest point without measuring every point, because whole branches can be ruled out.'
      },
      {
        q: 'What did the Bayside station project find?',
        a: 'For the 28 schools in the state list, a kd-tree found every nearest station with 433 distance checks, compared with 6,216 for checking every school against all 222 stations, and the answers matched exactly.'
      },
      {
        q: 'Why did the degree-based tree go wrong?',
        a: 'A degree of longitude near Melbourne is shorter on the ground than a degree of latitude, so distances measured in raw degrees are distorted. The tree picked a different station for 2 schools until we converted to metres.'
      },
      {
        q: 'At what age do children start?',
        a: 'Live classes start at six with Scratch. Python usually follows between nine and twelve, depending on reading and typing.'
      },
      {
        q: 'Are Copilot Studio agents taught in groups?',
        a: 'No. Microsoft Copilot Studio is offered only as private lessons; in group classes, learners write their agents in Python.'
      },
      {
        q: 'Is there a Bayside office or classroom?',
        a: 'No. Every lesson is live online, we have no premises in Australia, and the phone number shown is an Indian number.',
        boiler: true
      },
      {
        q: 'How much do coding classes cost for Bayside learners?',
        a: 'The first lesson is free. Group lessons then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Between five and ten learners, matched on level, pace and goal. When no group suits the learner\'s time, one-to-one lessons are offered instead.',
        boiler: true
      },
      {
        q: 'Can adults join?',
        a: 'Yes. Grown-up learners have adult-only groups or private lessons, and many bring a spreadsheet or report they want to automate.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Bayside learners',
    html: 'Just inland, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne">Glen Eira</a> gets a page of its own, while Bayside parents of younger children may like <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding for Melbourne kids</a>. For the bigger view, read about <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">classes across Melbourne</a> or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">statewide guide to Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Bayside and Melbourne',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne', label: 'Glen Eira' },
    { href: '/online-coding-and-python-classes-in-stonnington-melbourne', label: 'Stonnington' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' }
  ],
  personalityCss: `
.cg-root.cg-bysd .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-bysd .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-bysd .cg-capsule { border-left: 3px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.1rem; }
.cg-root.cg-bysd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bysd .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.01em; }
.cg-root.cg-bysd .cg-grid-3 { gap: clamp(0.8rem, 2.2vw, 1.6rem); }
.cg-root.cg-bysd .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bysd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bysd .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-bysd .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'City of Bayside, ABS Census 2021 QuickStats, Bayside (Vic.) LGA20910 (read 11 October 2026): 101,306 people; median age 45; 27,964 families; 43,058 private dwellings; 2.5 people per household; bachelor degree or higher 44.0% (36,775; Victoria 29.2%); professionals 33.6% (16,991; Victoria 25.0%); separate houses 62.5% (23,722); semi-detached 22.7% (8,612); drove to work 35.6% (18,002; Victoria 49.9%); worked at home 43.0% (21,709, lockdown Census day); aged 5-9 5,913; aged 10-14 7,315. ABS area 37.2111 sq km. Victorian School Locations 2025: 28 schools with LGA_Name Bayside (C): 18 primary, 4 secondary, 4 Pri/Sec, 2 special; government secondaries Beaumaris Secondary College, Brighton Secondary College, Sandringham College. Stations inside the LGA boundary by our point-in-polygon check: Highett, Sandringham, Hampton, Brighton Beach, Middle Brighton, North Brighton, Gardenvale; Sandringham FY24-25 entries 710,850. Victorian 2027 Term 1 starts Thursday 28 January, ends Thursday 25 March. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'kd-tree nearest-neighbour search. 222 FY24-25 metropolitan station coordinates, converted to metres with an equirectangular projection at latitude -37.9; 28 Bayside schools from School Locations 2025. Brute force 28 x 222 = 6,216 distance checks; kd-tree 433 (min 8, max 30, mean 15.46); every answer identical. Median nearest straight-line distance 786.5 m; Cheltenham Primary School 217 m (Cheltenham); Hampton Primary School 537 m (Hampton); Brighton Secondary College 1,539 m (Patterson); Black Rock Primary School 2,630 m (Sandringham). 11 of 28 nearest stations outside Bayside (Cheltenham 4, Moorabbin 2, Bentleigh, Elsternwick, Mentone, Patterson, Ormond 1 each). Tree on raw degrees: different nearest station for 2 schools (Beaumaris Primary School: Cheltenham instead of Mentone, and one non-government school). Script: scratchpad au/b9/bysd.py.',
    requiredMentions: ['101,306', '27,964', '36,775', '7,315', '6,216', '433 distance checks', '2,630', 'Sandringham College', 'Beaumaris Secondary College'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Bayside (Vic.) local government area (LGA20910).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA20910'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) LGA boundary LGA20910, geo.abs.gov.au map service, used for our point-in-boundary checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Bentley, J. L. (1975). Multidimensional binary search trees used for associative searching. Communications of the ACM 18(9), 509-517.',
        url: 'https://doi.org/10.1145/361002.361007'
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
      'Walking or travel distances to stations: not computed; every distance is straight-line and labelled so.',
      'That any school is or is not well served by trains: not claimed.',
      'Non-government school names: two appear only in our working notes and are counted, not named; special schools are counted only.',
      'Sector breakdowns, enrolments and school results: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Bayside City Council, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
