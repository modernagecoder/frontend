'use strict';
// Dandenong, Melbourne (cg- district page, Australia cluster Phase 8, row 251). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL20707, Dandenong (Vic.), City of Greater Dandenong) under
// Melbourne and Victoria.
// Spine: Dandenong is where the Pakenham and Cranbourne lines part. Longest common subsequence (dynamic programming)
// of the two stopping patterns from the metro train GTFS feed (downloaded 10 Oct 2026, service day Wed 28 Oct 2026).
// Pakenham all-stops 24 stops, Pakenham pattern without Yarraman 23, Cranbourne 19. LCS(Pakenham, Cranbourne) 16
// (Town Hall to Dandenong), 456 table cells; LCS(Pakenham without Yarraman, Cranbourne) 15, longest unbroken shared run
// 14, 437 cells; Pakenham down vs up: same 24 stations, LCS 1. 2^23 = 8,388,608 subsequences for brute force.
// 306 trips call at Dandenong that day; 26 pass Yarraman without stopping. Script: scratchpad au/b7/dndg.py.
// Station entries (DTP, CC BY 4.0, rounded to 50): FY18-19 2,165,200; FY23-24 2,073,300; FY24-25 1,970,750.
// Lesson family: longest common subsequence; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'DANDENONG',
    label: 'Dandenong, Melbourne',
    blurb: 'Coding and AI classes for Dandenong, with a dynamic programming project on where the Pakenham and Cranbourne trains part company.'
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
  slug: 'best-coding-and-ai-classes-in-dandenong-melbourne',
  code: 'dndg',
  accent: '#263289',
  accentRationale: 'Dandenong: a deep signal blue (hue 233), picked by search at least 10 RGB units from all 1,485 accent declarations in content, the shared stylesheets and the claims log; 8.97:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Dandenong',
    eyebrow: 'Dandenong, City of Greater Dandenong, Melbourne, Victoria',
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
  routeLabel: 'Dandenong, Melbourne',
  title: 'Best Coding and AI Classes in Dandenong, Melbourne',
  description: 'Live online coding and AI classes for Dandenong children, teenagers and adults, from Scratch and Python to algorithms and AI, in small groups or one to one.',
  ogDescription: 'Coding classes for Dandenong with a train project: a dynamic programming table of 437 cells finds what a brute force search would need 8,388,608 tries for.',
  twitterDescription: 'Dandenong coding and AI classes, live online, first class free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Dandenong',
    description: 'Level-matched online lessons in Scratch, Python, algorithms and AI for learners in Dandenong, taught live in English.'
  },
  h1: 'Coding and AI classes in Dandenong',
  capsuleQ: 'Where can Dandenong learners find the best coding and AI classes?',
  capsule: 'Online, in live small groups where the teacher watches every line being written. Dandenong is a young, busy suburb: the 2021 Census counted 30,127 residents with a median age of 33, and 39.0% of homes were townhouses, terraces or semi-detached houses, close to three times the Victorian share.',
  lead: 'Two train lines share the tracks from the city to Dandenong, then split. A Pakenham train and a Cranbourne train stop at the same stations for most of the way, but not all of them, and some Pakenham trains run straight past Yarraman. Working out exactly how much two stopping patterns share is a classic problem in computer science, and the neat way to solve it is a small table filled in one cell at a time.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Dandenong.',
  picks: {
    eyebrow: 'Course picks for Dandenong',
    h2: 'Courses that teach algorithms properly',
    intro: 'Each course below spends real time on algorithms like the one in the train project. The free first class settles where a learner begins.',
    items: [
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Recursion, tables of partial answers and the habit of counting how much work a program does.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Lists, loops and nested lists, enough to build the stopping-pattern table yourself.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Dynamic programming from first principles, then the interview problems built on it.'
      },
      {
        course: 'competitive-programming-for-teens-course',
        band: 'Ages 13 to 17',
        note: 'Timed contest problems where choosing the right algorithm decides the score.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Dandenong in the Census',
      h2: 'Townhouses, young children and the bus',
      intro: 'Figures for the Dandenong suburb (ABS code SAL20707, listed as Dandenong (Vic.)) from the 2021 Census QuickStats, with the Victorian share beside each one.',
      body: [
        {
          kind: 'table',
          caption: 'Dandenong suburb, 2021 Census headline counts',
          head: ['Headline', 'Dandenong'],
          rows: [
            ['Residents', '30,127'],
            ['Median age', '33'],
            ['Families', '6,771'],
            ['Private dwellings', '11,744'],
            ['Average people per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Dandenong next to Victoria',
          head: ['Measure', 'Dandenong', 'Victoria'],
          rows: [
            ['Semi-detached, row or terrace houses and townhouses', '39.0%', '13.9%'],
            ['Separate houses', '41.4% (4,058)', '73.4%'],
            ['Children aged 0 to 4', '7.1% (2,132)', '5.8%'],
            ['Workers who went to work by bus', '3.0% (342)', '0.6%'],
            ['Workers who drove to work', '61.1% (7,003)', '49.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'A small suburb', p: 'The bureau measures Dandenong at 11.38 square kilometres, a compact area for 30,127 people.' },
            { h3: 'By train', p: 'On Census day 315 employed residents, 2.7%, took the train to work, against 1.6% across Victoria.' },
            {
              h3: 'Lockdown caveat',
              p: 'The Census fell during the August 2021 lockdown, so the 1,234 residents who worked from home that day, 10.8%, reflect that week.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'QuickStats adjusts small cells for privacy, so rows need not add up to their totals. We quote each figure as the bureau publishes it and never build a total from parts.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Where do the Pakenham and Cranbourne trains part?',
      intro: 'We took the state timetable feed, picked a normal Wednesday, 28 October 2026, and pulled out the stopping pattern of every train calling at Dandenong. Then we asked one question: how many stops, in order, do two patterns share?',
      body: [
        {
          kind: 'table',
          caption: 'Stopping patterns towards Dandenong and beyond (our calculation from the GTFS Schedule feed)',
          head: ['Pattern', 'Stops', 'Where it ends'],
          rows: [
            ['Pakenham line, all stations', '24', 'East Pakenham'],
            ['Pakenham line, running past Yarraman', '23', 'East Pakenham'],
            ['Cranbourne line, all stations', '19', 'Cranbourne']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Longest common subsequence of each pair (our calculation)',
          head: ['Pair compared', 'Shared stops in order', 'Table cells filled'],
          rows: [
            ['Pakenham all stations and Cranbourne', '16, Town Hall to Dandenong', '456'],
            ['Pakenham past Yarraman and Cranbourne', '15', '437'],
            ['Pakenham outbound and Pakenham inbound', '1', '576']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Order matters',
              p: 'The outbound and inbound Pakenham patterns visit the same 24 stations, yet share only one stop in order, because one list runs backwards.'
            },
            {
              h3: 'A gap in the run',
              p: 'Skip Yarraman and the longest unbroken shared run drops to 14 stops, Town Hall to Noble Park, while the subsequence still finds 15 by stepping over the gap.'
            },
            {
              h3: 'Where they split',
              p: 'After Dandenong, eight stops belong only to Pakenham trains, from Hallam to East Pakenham, and three only to Cranbourne trains: Lynbrook, Merinda Park and Cranbourne.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'When the simple answer wins',
          p: 'For two trains heading the same way, a plain set intersection, counting the stations both lists contain, gave exactly the same 16 and 15 as the dynamic programming table, with far less code. The table only earned its place when direction changed: the set method said 24, the true ordered answer is 1. Use the simple method until order starts to matter.'
        },
        {
          kind: 'p',
          text: 'The trips, patterns and every count on this page come from our own script on the feed downloaded on 10 October 2026; a later timetable could change them. That Wednesday, 306 trips called at Dandenong, and 26 of them ran between Noble Park and Dandenong without stopping at Yarraman.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'The algorithm',
      h2: 'A table that remembers its own answers',
      intro: 'Dynamic programming solves a big problem by solving smaller versions first and writing each answer down, so nothing is ever worked out twice.',
      body: [
        {
          kind: 'table',
          caption: 'Three ways to compare two stopping patterns',
          head: ['Method', 'Work for 23 and 19 stops', 'Respects order?'],
          rows: [
            ['Try every subsequence of one list', '8,388,608 candidates', 'Yes'],
            ['Dynamic programming table', '437 cells', 'Yes'],
            ['Set intersection', 'One pass over each list', 'No']
          ]
        },
        {
          kind: 'p',
          text: 'Each cell of the table holds the answer for the first few stops of one pattern against the first few of the other. If the two stops match, the cell is one more than its diagonal neighbour; if not, it copies the larger of the cell above and the cell to the left. Reading back along the matches recovers the shared stations themselves, which is how we listed the stops that belong to only one line.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Line up two strips of station cards and find the longest set of matches without crossing any strings.' },
            { h3: 'Secondary students', p: 'Fill the table in Python, then test it against the brute force answer on patterns of five or six stops.' },
            { h3: 'Adults', p: 'Meet the same idea inside file comparison tools, which use a common subsequence to show which lines changed.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Dandenong',
      h2: 'A station, nine schools and a new year',
      intro: 'A few more figures from the station and school files.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Station entries',
              p: 'Dandenong station recorded 1,970,750 entries in FY24-25, down from 2,073,300 the year before and 2,165,200 in FY18-19, the last year before the pandemic.'
            },
            {
              h3: 'Schools',
              p: 'The 2025 school locations file places nine open schools inside the suburb: six primary, two secondary and one specialist, including Dandenong High School and Dandenong Primary School.'
            },
            {
              h3: 'Early trains',
              p: 'In the feed, the first city-bound train left Dandenong at 4:12am that Wednesday and the last at 11:41pm, 153 departures in all.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 2, 2027',
          p: 'Victorian government schools start Term 2 on Monday 12 April 2027 and finish it on Friday 25 June, a good window for a learner to start a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From matching cards to dynamic programming',
    intro: 'The ages are a guide only; the free first class shows where a learner fits.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Patterns in Scratch',
        p: 'Sequences, repeats and simple comparisons, built from blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'First Python',
        p: 'Lists of stations, loops over them and small puzzles about order.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Algorithms',
        p: 'Tables of partial answers, recursion and timing two methods against each other.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Interview depth',
        p: 'Dynamic programming, graphs and the reasoning employers test for.',
        courses: ['data-structures-algorithms-masterclass-college', 'competitive-programming-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the table in seconds, so why should a Dandenong learner fill it in by hand?',
    intro: 'Because only someone who knows how the table works can tell whether the code an AI hands back is solving the right problem.',
    p1: 'Ask an assistant for the longest common subsequence and it will usually produce working code. Ask it how much two train lines share and it may just as happily produce a set intersection, which looks right on outbound trains and fails without warning on a reversed list. Nothing in the output tells you which one you got.',
    p2: 'A learner who has filled in a few dozen cells, checked them against brute force and seen the inbound and outbound answer collapse from 24 to 1 knows which question to ask the AI next. That judgement is the part no assistant supplies.',
    closer: 'The Dandenong learner who understands the table is the one who can trust, or correct, the AI that writes it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Dandenong lessons run',
    intro: 'All teaching is live on screen, so a learner near the station and one in a quiet court further out join the same lesson.',
    cells: [
      { h3: 'One link', p: 'The learner opens a link at lesson time, shares a screen and starts writing code with the teacher.' },
      { h3: 'School terms', p: 'Lesson plans follow the Victorian term calendar and pause during state school holidays.' },
      { h3: 'Trial lesson', p: 'The free first class is a full lesson; afterwards we suggest a course and a regular time.' },
      { h3: 'Small groups', p: 'Groups hold five to ten learners at the same level, gathered from across Australia.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons each week, about eight a month, with breaks agreed in advance.' },
      {
        h3: 'Teachers in India',
        p: 'Our teachers are based in India, so a Dandenong lesson at 4:30pm during daylight saving is 11am India time, and noon once Melbourne clocks go back.'
      }
    ],
    spec: {
      title: 'Clock changes',
      p: 'Melbourne moved to daylight saving on Sunday 4 October 2026 and returns to standard time on Sunday 4 April 2027. India keeps one time all year, so we always confirm lesson times in Melbourne time.'
    }
  },
  fees: {
    h2: 'Fees for Dandenong learners',
    intro: 'Three prices, nothing hidden.',
    first: 'Lesson one is free and ends with an honest suggestion about what to study next.',
    group: 'One month of group lessons, usually eight, with five to ten learners working at the same level.',
    private: 'Around eight lessons a month with a teacher working only with your learner.',
    closer: 'Families outside India are billed in US dollars, so Dandenong pays the same as anywhere else. Nothing is charged until the trial has settled the course and time; holidays, missed lessons and changing format are set out on the pricing page.'
  },
  reviewsH2: 'What families write about us on Google',
  book: {
    h2: 'Book a free Dandenong class',
    intro: 'Tell us the learner\'s age and one thing they like. A seven-year-old might begin by matching patterns in Scratch; a Year 11 student might begin with the train table in Python.',
    success: 'Thank you. Our team will be in touch shortly about a Dandenong class.'
  },
  faq: {
    h2: 'Dandenong coding class questions',
    intro: 'Questions Dandenong families and adult learners ask before a first lesson.',
    items: [
      {
        q: 'How many people live in Dandenong?',
        a: 'The 2021 Census QuickStats for the Dandenong suburb count 30,127 residents in 6,771 families, with a median age of 33.'
      },
      {
        q: 'What is a longest common subsequence?',
        a: 'It is the longest list of items that appears in two sequences in the same order, though not necessarily side by side. For the Pakenham and Cranbourne trains it is the 16 stations from Town Hall to Dandenong.'
      },
      {
        q: 'What is dynamic programming?',
        a: 'A way of solving a problem by answering smaller versions of it first and storing each answer in a table, so the program never repeats work.'
      },
      {
        q: 'Why not just count the stations both lines share?',
        a: 'For trains going the same way that gives the same answer and is quicker to write. It breaks when order matters: the inbound and outbound Pakenham patterns share all 24 stations but only one in order.'
      },
      {
        q: 'Is dynamic programming too hard for a teenager?',
        a: 'Not when it is built up slowly. Most of our teenage learners meet it after a term or two of Python, starting with tables small enough to fill in on paper.'
      },
      {
        q: 'What can younger children in Dandenong start with?',
        a: 'Children from six start with Scratch, building games and animations that teach sequence, repetition and comparison before any typed code.'
      },
      {
        q: 'Do you run classes in a Dandenong centre?',
        a: 'No. Every lesson is live online, we have no Australian premises, and the phone number we display is Indian.',
        boiler: true
      },
      {
        q: 'What do coding classes cost for Dandenong learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. You agree the course, format and time before paying.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Five to ten learners, put together by level, pace and goals. Private lessons are an option if no group time fits.',
        boiler: true
      },
      {
        q: 'Can adults learn algorithms with you?',
        a: 'Yes. Adults study in their own groups or privately, often preparing for technical interviews where dynamic programming questions are common.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Dandenong learners',
    html: 'Parents of younger children can read <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">coding classes for kids in Melbourne</a>. The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a> covers the wider city, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> explains state schooling and the VCE.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Dandenong and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-dndg .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.1vw, 2.5rem); }
.cg-root.cg-dndg .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-dndg .cg-capsule { border-top: 3px solid var(--cg-accent); padding: 0.8rem 0 0.2rem; }
.cg-root.cg-dndg .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-dndg .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.012em; }
.cg-root.cg-dndg .cg-grid-3 { gap: clamp(0.8rem, 2.1vw, 1.6rem); }
.cg-root.cg-dndg .cg-table caption { font-weight: 650; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-dndg .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-dndg .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-dndg .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Dandenong, ABS Census 2021 QuickStats, Dandenong (Vic.) suburb SAL20707 (read 10 October 2026): 30,127 people; median age 33; 6,771 families; 11,744 private dwellings; 2.8 people per household; separate house 41.4% (4,058; Victoria 73.4%); semi-detached, row or terrace house, townhouse 39.0% (Victoria 13.9%); aged 0-4 7.1% (2,132; Victoria 5.8%); bus to work 3.0% (342; Victoria 0.6%); train 2.7% (315; Victoria 1.6%); car as driver 61.1% (7,003; Victoria 49.9%); worked at home 10.8% (1,234, lockdown Census day). ABS SAL area 11.3813 square kilometres. Dandenong station is the only metropolitan station inside the boundary. Victorian School Locations 2025: 9 open schools inside the boundary (6 primary, 2 secondary, 1 specialist; 6 government, 3 Catholic), including Dandenong High School and Dandenong Primary School. Victorian 2027 Term 2: Monday 12 April to Friday 25 June. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Longest common subsequence by dynamic programming on stopping patterns. Metro train GTFS Schedule (downloaded 10 October 2026), service day Wednesday 28 October 2026. Pakenham line outbound all stops 24 (Town Hall to East Pakenham, 62 trips), outbound pattern without Yarraman 23 (11 trips), Cranbourne outbound 19 (70 trips). LCS(Pakenham 24, Cranbourne 19) = 16 (Town Hall to Dandenong), 456 cells; LCS(Pakenham 23, Cranbourne 19) = 15, longest contiguous common run 14 (Town Hall to Noble Park), 437 cells; Pakenham outbound vs inbound: set intersection 24, LCS 1. Set intersection equals LCS for the two same-direction pairs (16 and 15). Brute force over a 23-stop pattern: 2^23 = 8,388,608 subsequences. Pakenham-only after Dandenong: Hallam, Narre Warren, Berwick, Beaconsfield, Officer, Cardinia Road, Pakenham, East Pakenham; Cranbourne-only: Lynbrook, Merinda Park, Cranbourne. 306 trips call at Dandenong (Pakenham 81 out, 80 in; Cranbourne 72 out, 73 in); 26 run Noble Park to Dandenong without stopping at Yarraman; 153 city-bound departures from Dandenong, first 04:12, last 23:41. Station entries FY18-19 2,165,200; FY23-24 2,073,300; FY24-25 1,970,750. Script: scratchpad au/b7/dndg.py.',
    requiredMentions: ['30,127', '6,771', '11,744', '1,970,750', '2,165,200', '8,388,608', 'Yarraman', 'Lynbrook', 'Dandenong High School', '11.38 square kilometres'],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Dandenong (Vic.) suburb (SAL20707).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20707' },
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
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20707 polygon and area).',
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
      'Any statement about a timetable after the downloaded feed: not claimed; trip counts are for Wednesday 28 October 2026 in the feed downloaded 10 October 2026.',
      'Reasons for the fall in Dandenong station entries since FY18-19: not claimed.',
      'Names of Catholic, independent or specialist schools: not used; counted only.',
      'A total for Dandenong, Dandenong North and Dandenong South: not computed; published parts are never summed.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Greater Dandenong, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
