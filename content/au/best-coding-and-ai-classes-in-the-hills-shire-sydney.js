'use strict';
// The Hills Shire, Sydney (cg- district page, Australia cluster Phase 8, row 207). Keyword slug in the
// rotation (best-coding-and-ai-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: if every primary school in The Hills is paired with a "buddy" school within 3.5 km, does pairing
// the closest schools first give the most pairs, and how do augmenting paths find more?
// Data: NSW Department of Education master dataset (data.nsw.gov.au, CC BY), read 10 October 2026,
// Date_extracted 2026-10-02. Rows with LGA "The Hills": 31 (Primary 22, Secondary 7, SSP 1, EEC 1).
// Our run (scratchpad au/b1/thls_match2.py and thls_detail.py, networkx max_weight_matching with
// maxcardinality=True, haversine distances on the file's coordinates): 22 primary schools, 41 pairs within
// 3,500 m; 4 schools with no partner in range (Hillside, Maroota, Wisemans Ferry and Box Hill Public
// Schools). Greedy closest-pair-first: 7 pairs, leaving Castle Hill, Kenthurst, Annangrove and Jasper Road
// Public Schools unpaired although each has a partner in range. Maximum matching: 9 pairs, all 18 schools
// with a partner in range paired. Closest pair Beaumont Hills and North Kellyville Public Schools 1,129 m
// (kept by greedy; the maximum matching pairs Beaumont Hills with Annangrove, 3,439 m). Augmenting path:
// Castle Hill - Samuel Gilbert (2,017 m) = Sherwood Ridge (1,681 m) - Glenhaven (2,608 m) = Dural
// (2,723 m) - Kenthurst (3,041 m). At 3,000 m greedy 7 against maximum 8; at 2,000 m 6 against 7.
// Lesson family: maximum-cardinality matching (augmenting paths) vs greedy shortest-pair-first; screened.
// Place facts: ABS Census 2021 QuickStats, The Hills Shire LGA (LGA17420); earliest first teachers
// Wisemans Ferry Public School 1865, Dural Public School 1869, Kellyville Public School 1873; newest
// North Kellyville Public School 2019, Box Hill Public School 2025, Box Hill High School 2026. Transport
// for NSW station usage (CC BY): Castle Hill Station, Metro, Entry, August 2026, 221,078.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'THE HILLS',
    label: 'The Hills Shire, Sydney',
    blurb: 'Coding and AI for The Hills Shire, with a project that pairs 22 primary schools and shows why closest-first pairing falls short.'
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
  slug: 'best-coding-and-ai-classes-in-the-hills-shire-sydney',
  code: 'thls',
  accent: '#2A5610',
  accentRationale: 'The Hills Shire: a deep paddock green (hue 98), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 8.6:1 on white and 7.0:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'The Hills Shire',
    eyebrow: 'The Hills Shire, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'The Hills Shire, Sydney',
  title: 'Best Coding and AI Classes in The Hills Shire, Sydney',
  description: 'Live online coding, AI and Python classes for The Hills Shire children, teenagers and adults, with real teachers in small groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for The Hills Shire, with a matching project in which pairing the closest schools first finds 7 buddy pairs and augmenting paths find 9.',
  twitterDescription: 'The Hills Shire coding and AI classes, live online for ages 6 to 67, first lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for The Hills Shire',
    description: 'Level-matched online coding, Python, algorithms and AI for children, teenagers and adults in The Hills Shire council area, taught live in English.'
  },
  h1: 'Coding and AI classes in The Hills Shire',
  capsuleQ: 'What are the best coding and AI classes for The Hills Shire?',
  capsule: 'Live online classes where a teacher codes alongside each learner in The Hills Shire, from Scratch for young children to algorithms, Python and AI for teenagers and adults, built around real public data. The 2021 Census counted 191,876 people in the council area, where 81.2% of occupied homes are separate houses. Lessons run one to one or in small groups at one level, and the first is free.',
  lead: 'Suppose every primary school in The Hills Shire wants a buddy school within three and a half kilometres for shared events. The obvious method is to pair the two closest schools, then the next closest pair still free, and so on. On the 22 government primary schools in the department\'s file that method stops at 7 pairs and strands four schools that each had a partner in range. A smarter method, which hunts for chains of swaps called augmenting paths, finds 9 pairs and leaves nobody out who could have been paired. Our Hills project builds both in Python and shows exactly which swaps make the difference.',
  wa: 'Hello Modern Age Coders, we would like a free coding or AI lesson for a learner in The Hills Shire.',
  picks: {
    eyebrow: 'Course picks for The Hills Shire',
    h2: 'Where a Hills learner might start',
    intro: 'Each course ties back to the matching project. The free first lesson confirms the choice, and no card details are requested.',
    items: [
      {
        course: 'problem-solving-and-computational-thinking-for-kids',
        band: 'Ages 7 to 12',
        note: 'Puzzles about pairing, sharing and fair choices, worked out on paper and in Scratch.'
      },
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 16',
        note: 'Python from the beginning, using real coordinates and distances from open data.'
      },
      {
        course: 'problem-solving-dsa-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Graphs, greedy methods and their limits, and algorithms that fix them.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        band: 'University and adult',
        note: 'Matching, flows and graph algorithms used in scheduling and allocation at work.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'The Hills Shire in the Census',
      h2: 'Big households, separate houses and plenty of children',
      intro: 'What the 2021 QuickStats report for The Hills Shire local government area, against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'The Hills Shire at the 2021 Census',
          head: ['Count', 'The Hills Shire'],
          rows: [
            ['Usual residents', '191,876'],
            ['Families', '54,291'],
            ['Private dwellings', '64,041'],
            ['Average people per household', '3.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The Hills Shire set beside the state and Australia',
          head: ['Indicator', 'The Hills', 'NSW', 'Australia'],
          rows: [
            ['Median age', '38', '39', '38'],
            ['Separate houses, share of occupied homes', '81.2% (48,537)', '65.6%', '72.3%'],
            ['Flats or apartments, share of occupied homes', '9.8% (5,836)', '21.7%', '14.2%'],
            ['Bachelor degree or higher, aged 15 and over', '40.5% (61,188)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Children in every age band',
              p: 'The Census recorded 14,738 children aged 5 to 9 and 14,852 aged 10 to 14, each 7.7% of residents against 6.2% statewide.'
            },
            { h3: 'Teenagers', p: 'A further 13,071 residents were aged 15 to 19, or 6.8% of the shire.' },
            { h3: 'Work', p: '31,402 employed residents worked as professionals in 2021, 32.5% of the shire\'s workers.' }
          ]
        },
        {
          kind: 'p',
          text: 'Each Census cell has been randomly nudged by a small amount to protect privacy, so the bureau\'s rows and totals may not reconcile. The figures here are copied as published; none of them is a sum we made.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Buddy schools: closest-first pairing against maximum matching',
      intro: 'We took the 22 government primary schools in The Hills from the NSW Department of Education\'s file and allowed a pairing wherever two schools are within 3,500 metres of each other in a straight line.',
      body: [
        {
          kind: 'table',
          caption: 'Pairs found by each method (our calculation from the department\'s coordinates)',
          head: ['Distance allowed', 'Possible pairings', 'Closest pair first', 'Maximum matching'],
          rows: [
            ['2,000 m', '15', '6 pairs', '7 pairs'],
            ['3,000 m', '29', '7 pairs', '8 pairs'],
            ['3,500 m', '41', '7 pairs', '9 pairs']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'The swap chain that turns two greedy pairs into three (3,500 m, our calculation)',
          head: ['Step', 'Link', 'Distance', 'In the greedy pairing?'],
          rows: [
            ['1', 'Castle Hill Public School to Samuel Gilbert Public School', '2,017 m', 'No'],
            ['2', 'Samuel Gilbert Public School to Sherwood Ridge Public School', '1,681 m', 'Yes'],
            ['3', 'Sherwood Ridge Public School to Glenhaven Public School', '2,608 m', 'No'],
            ['4', 'Glenhaven Public School to Dural Public School', '2,723 m', 'Yes'],
            ['5', 'Dural Public School to Kenthurst Public School', '3,041 m', 'No']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Greedy grabs the shortest',
              p: 'The closest pair, Beaumont Hills and North Kellyville Public Schools at 1,129 m, is taken first. Each early choice removes two schools, and four schools that could have been paired end up with every partner already taken.'
            },
            {
              h3: 'Augmenting paths',
              p: 'Start at an unpaired school, follow a link not in the pairing, then one in it, alternately, until reaching another unpaired school. Flipping every link on the path adds one pair, as the five steps above show.'
            },
            {
              h3: 'The maximum',
              p: 'When no augmenting path remains, the pairing is as large as possible. At 3,500 m that means 9 pairs covering all 18 schools with a partner in range; only the 4 schools with nobody nearby stay single.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A good first move can shrink the total',
          p: 'Keeping the closest pair feels obviously right, yet the maximum matching gives Beaumont Hills a partner 3,439 m away so that more schools overall are paired. Greedy choices are fast and often decent; knowing when they fall short, and what to do about it, is a core skill in algorithms and in AI planning.'
        },
        {
          kind: 'p',
          text: 'All distances are straight lines between the coordinates the department publishes, calculated by our code; travel by road would differ. The buddy idea is our teaching scenario, not a real program, and nothing here comments on any school\'s quality, enrolment or results.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Matching everywhere',
      h2: 'Where the same algorithm turns up',
      intro: 'Pairing schools is a small example of a problem that appears in timetables, rosters, ride sharing and machine learning.',
      body: [
        {
          kind: 'table',
          caption: 'Matching problems a learner can try next',
          head: ['Problem', 'What is being paired', 'What changes'],
          rows: [
            ['Study buddies in a class', 'Students who share a free period', 'Edges come from a timetable, not distance'],
            ['Tutors and learners', 'Two different groups of people', 'A bipartite graph, solved by a simpler version'],
            ['Shortest total distance', 'Same schools, same range', 'Weights matter, not just the count of pairs'],
            [
              'Pairing images in AI training',
              'Matching objects across two video frames',
              'Large scale and speed become the challenge'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'The trap is the same each time: a rule that takes the most attractive option first and never looks back. Learners who have seen it strand four Hills schools recognise it quickly in schedules, games and planning code written by people or by AI.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'Pair classmates on paper with simple rules, then find a better pairing by swapping, before any code.' },
            { h3: 'Teenagers', p: 'Build the greedy pairing in Python, find an augmenting path by hand, then confirm the maximum with networkx.' },
            { h3: 'Adults', p: 'Allocation problems at work, from rosters to resource booking, solved with matching and flow algorithms.' }
          ]
        },
        {
          kind: 'p',
          text: 'We have no association with the NSW Department of Education, The Hills Shire Council, Transport for NSW or the statistics bureau; their data is open, and the pairings, distances and swap chains come from our own programs.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around The Hills',
      h2: 'Schools from 1865 to 2026, and metro stations',
      intro: 'More detail from the same open data and the NSW calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Old and brand new',
              p: 'Wisemans Ferry Public School records its first teacher in 1865, Dural Public School in 1869 and Kellyville Public School in 1873. At the other end, Box Hill Public School opened in 2025 and Box Hill High School in 2026.'
            },
            {
              h3: 'Castle Hill metro station',
              p: 'Transport for NSW counted 221,078 Opal entries at Castle Hill metro station in August 2026, fortieth among all stations in the monthly file.'
            },
            {
              h3: 'The 2027 calendar',
              p: 'Term 2 for NSW Eastern division schools runs from Thursday 29 April to Friday 2 July 2027, and Term 3 from Tuesday 20 July to Friday 24 September.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'A second question from the same file',
          p: 'Four schools had no partner within 3,500 m. How far would the limit need to stretch before every primary school can be paired? Answering it means sorting distances and rerunning the matching, a good exercise in turning a question into a loop.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From pairing puzzles to graph algorithms',
    intro: 'The ages are a starting guide; the trial lesson decides the actual level.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Thinking in pairs',
        p: 'Scratch projects and puzzles about sharing, pairing and fairness.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'Python with maps',
        p: 'Coordinates, distances and lists of places handled in Python.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Graphs and greedy methods',
        p: 'Graphs, matchings and the moments when greedy rules fail.',
        courses: ['problem-solving-dsa-masterclass-teens', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Allocation at scale',
        p: 'Matching and flow algorithms for scheduling and planning work.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI can plan pairings, why should a Hills learner write the algorithm?',
    intro: 'Because an AI asked for a pairing will often give a sensible-looking greedy answer and stop there.',
    p1: 'Ask a chatbot to pair schools within a distance and it may well pair the closest ones first, list seven neat pairs and present them confidently. It is unlikely to notice that four schools were stranded unnecessarily, because the answer looks tidy and every pair it lists is genuinely close.',
    p2: 'A learner who has found an augmenting path through Castle Hill, Samuel Gilbert, Sherwood Ridge, Glenhaven, Dural and Kenthurst knows to ask whether a plan is merely reasonable or actually as good as it can be. They check how many items were left out, try a swap, and reach for a proper algorithm when the stakes justify it.',
    closer: 'In 2026 AI can plan in seconds, and the Hills learner who knows what a maximum looks like is the one who spots the plan that left people out.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Wisemans Ferry to Baulkham Hills, one live lesson',
    intro: 'The schools in the department\'s file for The Hills range from Wisemans Ferry Public School to Baulkham Hills North Public School, and an online class serves families at either end without any driving.',
    cells: [
      {
        h3: 'No long drives',
        p: 'Learners from every part of the shire join the same lesson from home, so distance makes no difference to who can take part.'
      },
      { h3: 'NSW-aligned', p: 'Plans follow the NSW stages and terms, stop for state school holidays and can support senior computing and maths subjects.' },
      { h3: 'A free real lesson', p: 'The trial teaches genuine content. At the end the teacher proposes a course, level and time, and no payment is taken.' },
      { h3: 'Five to ten per group', p: 'Groups are formed by level and pace, combining Hills learners with others, so nobody is held back or rushed.' },
      { h3: 'Regular lessons', p: 'Two lessons a week at a set time, about eight a month, with breaks for holidays arranged in advance.' },
      { h3: 'Teachers in India', p: 'A 4:30pm lesson in The Hills during daylight saving starts at 11am India time; in winter it starts at noon there.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'New South Wales begins daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027, while India stays on one time all year. Lesson times are given in Sydney time, so families never need to convert.'
    }
  },
  fees: {
    h2: 'What The Hills Shire learners pay',
    intro: 'No hidden extras, just three figures.',
    first: 'A first lesson free of charge, with a suggested course and time to follow.',
    group: 'A month of group lessons, generally eight, alongside five to ten learners at one level.',
    private: 'About eight one-to-one lessons a month.',
    closer: 'We bill in US dollars outside India, so the price is identical across the shire and there is no Hills price list. Charges begin after the trial has agreed a course and a time; the pricing page explains holidays, missed lessons and changing between group and private lessons.'
  },
  reviewsH2: 'What families say on Google',
  book: {
    h2: 'Start with a free Hills lesson',
    intro: 'Send an age and an interest. A Year 4 child might begin with a pairing puzzle in Scratch; a teenager might build the greedy pairing in Python in the first session.',
    success: 'Thank you. We will contact you shortly about a lesson for The Hills Shire.'
  },
  faq: {
    h2: 'The Hills Shire coding and AI questions',
    intro: 'Common questions from families and adult learners in The Hills.',
    items: [
      {
        q: 'How many people live in The Hills Shire?',
        a: '191,876 at the 2021 Census, according to the QuickStats for The Hills Shire local government area, with a median age of 38.'
      },
      {
        q: 'What is a maximum matching?',
        a: 'A matching pairs items so that no item is in two pairs. A maximum matching has the largest possible number of pairs, and it can be found by repeatedly looking for augmenting paths until none remain.'
      },
      {
        q: 'What is The Hills buddy school project?',
        a: 'Learners pair the 22 government primary schools in The Hills wherever two are within 3,500 m. Pairing the closest schools first gives 7 pairs; a maximum matching gives 9, pairing every school that has a partner in range.'
      },
      {
        q: 'Is the buddy program real?',
        a: 'No. It is a teaching scenario built on the published school coordinates. The page makes no claim about any school\'s activities, results or enrolment.'
      },
      {
        q: 'Do you teach algorithms for school competitions?',
        a: 'Yes. Students preparing for informatics competitions learn graphs, greedy methods and matching. We teach the ideas and practise on original problems, never on unreleased competition questions.'
      },
      {
        q: 'Can adults learn algorithms with you?',
        a: 'Yes. Adults study data structures and algorithms for interviews, work projects or interest, using the same kind of real data.'
      },
      { q: 'From what age can children start?', a: 'From age six, with Scratch and simple puzzles. The matching project on this page suits older students.' },
      {
        q: 'Is there a centre in The Hills Shire?',
        a: 'No. Classes are live and online only, and we run no premises anywhere in Australia. A learner needs a computer with sound and a reliable connection; our listed number is Indian.',
        boiler: true
      },
      {
        q: 'How much do coding classes cost in The Hills?',
        a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for one-to-one lessons on the same schedule. Course, format and time are settled before any payment.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'Groups have five to ten learners matched by level, pace and goals rather than age or location. If no group fits, one-to-one lessons are available.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Hills learners',
    html: 'The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the city as a whole, and <a class="cg-inline-link" href="/australian-informatics-olympiad-preparation">Australian Informatics Olympiad preparation</a> suits students keen on algorithms. Younger children can start at <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'The Hills and Sydney',
  footerPlaces: [
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/vibe-coding-and-ai-agents-classes-in-blacktown-sydney', label: 'Blacktown' },
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-thls .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.6vw, 2.8rem); }
.cg-root.cg-thls .cg-hero h1 { font-weight: 790; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-thls .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1.15rem; }
.cg-root.cg-thls .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-thls .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-thls .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.95rem); }
.cg-root.cg-thls .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-thls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-thls .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-thls .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'The Hills Shire, ABS Census 2021 QuickStats, The Hills Shire local government area LGA17420 (read 10 October 2026): 191,876 people; median age 38 (NSW 39, Australia 38); 54,291 families; 64,041 private dwellings; average 3.1 people per household; separate house 48,537 (81.2 percent; NSW 65.6; Australia 72.3); flat or apartment 5,836 (9.8 percent); Professionals 31,402 (32.5 percent); Bachelor Degree level and above 61,188 (40.5 percent; NSW 27.8); age 5 to 9 14,738 (7.7 percent); age 10 to 14 14,852 (7.7 percent; NSW 6.2); age 15 to 19 13,071 (6.8 percent). NSW 2027 term dates, Eastern division: Term 2 Thursday 29 April to Friday 2 July; Term 3 Tuesday 20 July to Friday 24 September. IANA tz Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027. Transport for NSW monthly station usage (CC BY): Castle Hill Station, Metro, Entry, August 2026, 221,078, fortieth of the entry rows.',
    localProject: 'Maximum-cardinality matching vs greedy closest-pair-first. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA = The Hills: 31 schools (Primary 22, Secondary 7, SSP 1, EEC 1). Haversine distances between the 22 primary schools; networkx max_weight_matching(maxcardinality=True). Limit 3,500 m: 41 edges; isolated Hillside, Maroota, Wisemans Ferry, Box Hill Public Schools; greedy 7 pairs (Beaumont Hills-North Kellyville 1,129; Crestwood-Matthew Pearce 1,284; Rouse Hill-Ironbark Ridge 1,453; Excelsior-Baulkham Hills North 1,552; Samuel Gilbert-Sherwood Ridge 1,681; Kellyville-Bella Vista 1,745; Dural-Glenhaven 2,723) leaving Castle Hill, Kenthurst, Annangrove, Jasper Road unpaired; maximum 9 pairs. Augmenting path Castle Hill-Samuel Gilbert 2,017, Samuel Gilbert=Sherwood Ridge 1,681, Sherwood Ridge-Glenhaven 2,608, Glenhaven=Dural 2,723, Dural-Kenthurst 3,041. Limit 3,000 m: 29 edges, greedy 7, maximum 8. Limit 2,000 m: 15 edges, greedy 6, maximum 7. Earliest first teachers Wisemans Ferry Public School 1865-02-01, Dural Public School 1869-01-01, Kellyville Public School 1873-11-01; newest North Kellyville Public School 2019-01-29, Box Hill Public School 2025-01-31, Box Hill High School 2026-01-27.',
    requiredMentions: [
      '191,876',
      '54,291',
      '64,041',
      '48,537',
      '61,188',
      'Wisemans Ferry Public School',
      'Box Hill High School',
      '221,078',
      'Castle Hill Public School'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, The Hills Shire local government area (LGA17420).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA17420'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      { claim: 'NSW Department of Education, 2027 term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any real buddy-school program in The Hills: none claimed; the scenario is ours.',
      'Which council area each metro station lies in: not verified, so Castle Hill is named only as a station.',
      'Road distances between schools: not computed; all distances are straight lines.',
      'Suburb lists for the shire: not printed, as suburb boundaries were not checked against the LGA.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, The Hills Shire Council, Transport for NSW or the ABS.'
    ]
  }
};
