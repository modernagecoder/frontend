'use strict';
// Coventry (cg- city page, UK cluster Phase 4). Spine: a threshold that chains. NaPTAN, the Department for
// Transport's national register of public transport access points, read through its API for administrative
// area 430 (West Midlands) on 21 September 2026 and filtered to stops whose locality or parent locality is
// Coventry (scratchpad cov/uf.py): 1,570 active bus stops (1,539 on-street, 31 bus station bays) across 60
// localities, with 834 distinct stop names, of which 578 appear exactly twice (the usual pair on opposite
// sides of a road), 206 once and 50 three times or more. Union-find on easting and northing, joining any two
// stops within d metres: 1,390 clusters at 20 m, 1,005 at 60 m, 774 at 100 m, 314 at 200 m (largest 85), then
// 60 at 300 m with one cluster of 1,154 stops, and 19 at 400 m with one of 1,519. Stops a few hundred metres
// apart along every road chain into a single blob: single-linkage clustering has no brake. Lesson family:
// union-find (disjoint sets) and the chaining effect of a distance threshold. Screened free site-wide on
// 21 September 2026 (union-find, disjoint set, single linkage, linkage threshold, NaPTAN: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 (345,325 usual residents; 332,606 in
// households; 12,719 in communal establishments), TS007A (31,584 aged 20 to 24, 9.1%; England 6.0%; band
// total one below TS001, never summed), TS068 (89,083 schoolchildren and full-time students of 324,882
// residents aged 5 and over, 27.4%; England 20.4%); Coventry Transport Museum about page (Millennium Place,
// Hales Street, CV1 1JD; 14 fully accessible galleries; Thrust SSC and Thrust 2; its own description of the
// largest publicly owned collection of British vehicles). coventry.ac.uk returned 400 and the cathedral's
// history page 404; neither is used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'COVENTRY', blurb: 'The city of the Transport Museum, with a project that groups 1,570 bus stops and watches them chain into one.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-coventry',
  code: 'cov',
  accent: '#3E381E',
  accentRationale: 'Coventry: a dark engine-oil olive from the solver (9.53:1 on every paper tint, dE 8.0 from the nearest used accent), a nod to the city\'s motoring history',
  pageType: 'city',
  place: {
    name: 'Coventry',
    eyebrow: 'Coventry, West Midlands, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Coventry, England',
  title: 'Best Coding Classes in Coventry | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Coventry learners aged 6 to 67, from Earlsdon to Holbrooks, with a real teacher each week. First lesson free.',
  ogDescription: 'Coding and AI classes for Coventry, on a page where 1,570 bus stops are grouped into places, until one step too far turns them into one.',
  twitterDescription: 'Coventry coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Coventry Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Coventry, taught live in English.'
  },

  h1: 'Coding classes in Coventry',
  capsuleQ: 'What are the best coding classes in Coventry?',
  capsule: 'Coventry is a city of 345,325 people, according to the 2021 Census, and a young one. People in their early twenties made up 9.1% of the city (England: 6.0%), and 89,083 residents aged five or older were in school or full-time study, a rate of 27.4% where England recorded 20.4%. It is also a city built around transport, from the collection at the Coventry Transport Museum to the 1,570 active bus stops the national register lists here. Our classes take Coventry learners from six years old to sixty-seven, taught live over the internet by teachers based in India, either in a group of five to ten matched by ability or on their own, always at a fixed hour on the UK clock. You pay nothing for the opening lesson, and from then on USD 100 a month buys a group seat while USD 150 a month buys a private teacher.',
  lead: 'The Department for Transport keeps a register of every bus stop in the country, and Coventry has 1,570 active ones. Most come in pairs, one on each side of the road, sharing a name: 578 names appear exactly twice. So a sensible question is how many actual places those stops represent. The standard tool for grouping things that are close together is union-find: join any two stops within a set distance and see how many groups are left. At 60 metres the answer is 1,005. At 200 metres it is 314, and the largest group has 85 stops. Push the distance to 300 metres and something alarming happens: one group swallows 1,154 stops, most of the city, because stops a few hundred metres apart along every road link hand to hand into a single chain. Working out why that happens, and what to do about it, is the lesson Coventry\'s own bus network teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Coventry.',

  picks: {
    eyebrow: 'Course picks for Coventry',
    h2: 'Four courses for a city built on transport',
    intro: 'Pick by what the learner wants to make, not by age alone. Each starts with a free, live lesson and no card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from first games to simple apps, including a bus that only stops where two stops are close enough to share a shelter.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Object-oriented Java, including a small disjoint-set class that groups the city\'s stops and reports its biggest group.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Union-find, grids and thresholds: the data structures behind grouping 1,570 points without comparing every pair.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning and grouping location data in spreadsheets, SQL and Python, with the threshold written down.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Coventry today',
      h2: 'A young city, counted in the 2021 Census',
      intro: 'Figures for the Coventry local authority area from the Office for National Statistics, read through Nomis.',
      body: [
        { kind: 'table', caption: 'What the 2021 Census recorded for Coventry (ONS figures, retrieved from Nomis)', head: ['What was counted', 'Coventry', 'England'], rows: [
          ['Usual residents', '345,325', 'Not compared'],
          ['Living in households', '332,606', 'Not compared'],
          ['Living in communal establishments', '12,719', 'Not compared'],
          ['People in their early twenties (20 to 24)', '31,584, a 9.1% share', 'A 6.0% share'],
          ['In school or full-time study, among the 324,882 aged five or older', '89,083, a 27.4% rate', 'A 20.4% rate']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Study everywhere', p: 'On Census day the rate of school or full-time study among Coventry residents aged five or older stood at 27.4%. England\'s rate was 20.4%.' },
          { h3: 'A bulge at twenty', p: 'The 20 to 24 age band is 9.1% of Coventry\'s residents; the national band is 6.0%, so the city leans noticeably young.' },
          { h3: 'Counted carefully', p: 'The age table totals one fewer person than the headline count, because each census table is adjusted separately. This page quotes the headline and never adds bands together.' }
        ] },
        { kind: 'p', text: 'Numbers like these shape what families here ask for. A city with this many students asks for help at every stage, from a first Scratch project to university programming, and a live online class can serve all of them from the same timetable.' }
      ]
    },
    {
      id: 'network', tint: 'tint', eyebrow: 'The stop register',
      h2: '1,570 stops, 834 names and 60 localities',
      intro: 'NaPTAN, the national register of public transport access points, published by the Department for Transport. We read it on 21 September 2026 and kept the active Coventry bus stops.',
      body: [
        { kind: 'table', caption: 'Active bus stops in Coventry, from NaPTAN', head: ['Measure', 'Figure'], rows: [
          ['Active bus stops', '1,570: 1,539 on the street and 31 bus station bays'],
          ['Localities they sit in', '60'],
          ['Most stops in one locality', 'Coventry itself 95, then Cheylesmore 68, Whitmore Park 54 and Binley 54'],
          ['Distinct stop names', '834'],
          ['Names used exactly twice', '578, the usual pair across a road'],
          ['Names used three times or more', '50']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pairs are the rule', p: 'Most stop names appear twice, because a route runs both ways and each direction has its own pole. The register keeps them as separate records with their own codes.' },
          { h3: 'Names are not places', p: 'A name used three or more times might be a busy junction, or the same name reused in two parts of the city. The name alone cannot tell you which.' },
          { h3: 'Inactive stops', p: 'The register also keeps stops that are no longer in use. We counted only the active ones, and the page says so, because the answer changes otherwise.' }
        ] },
        { kind: 'p', text: 'We are not connected to the Department for Transport, Coventry City Council or any bus operator, and nothing here implies otherwise. The register is published for anyone to use, which is exactly why it makes such good practice material.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many places are 1,570 bus stops?',
      intro: 'Union-find groups points that are close together without comparing every pair twice. Run it at different distances and watch the answer change.',
      body: [
        { kind: 'table', caption: 'Groups of Coventry bus stops at each joining distance, our measurements', head: ['Join stops within', 'Groups left', 'Largest group'], rows: [
          ['20 metres', '1,390', '8 stops'],
          ['60 metres', '1,005', '22 stops'],
          ['100 metres', '774', '36 stops'],
          ['200 metres', '314', '85 stops'],
          ['300 metres', '60', '1,154 stops'],
          ['400 metres', '19', '1,519 stops']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Group the pairs', p: 'At around 60 metres most across-the-road pairs join up, and 1,570 stops become 1,005 groups. That is close to what a person would call separate places.' },
          { h3: '2. Watch it grow', p: 'Double the distance and groups start merging along streets. At 200 metres the biggest has 85 stops, already more than one place.' },
          { h3: '3. See it chain', p: 'At 300 metres one group holds 1,154 stops. No two of them need to be close; each only needs a neighbour within reach, and the chain runs across the city.' }
        ] },
        { kind: 'callout', h3: 'Why the jump is so sudden', p: 'Union-find joins two groups the moment any member of one is close to any member of the other. That rule, called single linkage, has no sense of how big or how long a group has become. Coventry\'s stops sit a few hundred metres apart along almost every road, so once the joining distance passes that spacing, groups link end to end: the largest goes from 85 stops at 200 metres to 1,154 at 300. The fix is not a better threshold but a better rule: limit a group\'s size, require several close neighbours, or use the register\'s own stop areas.' },
        { kind: 'p', text: 'There is a computing lesson inside the statistics one. Comparing every stop with every other means over a million pairs. Dropping the stops into a grid of squares the size of the joining distance means each stop is checked only against its own square and the eight around it, which is why union-find on a grid runs in a blink. Learners build both versions and time them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Grouping without chaining',
      h2: 'Five habits for clustering locations',
      intro: 'Learned on bus stops, used afterwards on delivery addresses, sensor sites, shop locations and any list of points someone wants grouped.',
      body: [
        { kind: 'table', caption: 'How to group points without one group swallowing the rest', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Scan the threshold', 'Run the grouping at several distances and plot the number of groups', 'Choosing a distance that happens to sit on a cliff edge'],
          ['Watch the largest group', 'Track the size of the biggest cluster, not just the count', 'Missing a chain that has swallowed most points'],
          ['Use a grid', 'Bucket points by position so each is compared only with nearby buckets', 'A million pair comparisons for a few thousand points'],
          ['Filter the status', 'Decide whether inactive records belong before grouping', 'Counting stops that no bus serves'],
          ['State the rule', 'Write down whether you used single linkage or a stricter rule', 'A result nobody can reproduce']
        ] },
        { kind: 'p', text: 'The second habit is the one most beginners skip. A count of 60 groups at 300 metres looks like a neat, reasonable answer until you notice that one of the 60 contains 1,154 stops and the other 59 share the remaining few hundred. Averages and counts hide chains; the size of the biggest group reveals them.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Holding hands in a playground: if everyone links to anyone within reach, how quickly does the whole class become one line?' },
          { h3: 'Teenagers', p: 'The real register in Python: union-find on a grid, a threshold scan, and a written explanation of the chain at 300 metres.' },
          { h3: 'Adults', p: 'Grouping location data at work with a stated rule and a check on the biggest group before anything is reported.' }
        ] }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'Two record-breaking cars on Hales Street',
      intro: 'Coventry tells its own story through transport, and its museum is the clearest place to see it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Transport Museum', p: 'Coventry Transport Museum sits at Millennium Place, Hales Street, CV1 1JD, and describes its collection as the largest publicly owned collection of British vehicles on the planet.' },
          { h3: 'Fourteen galleries', p: 'The museum has 14 fully accessible galleries, holding motor cars, commercial vehicles, cycles and motorcycles, with archives kept at the Coventry Archives.' },
          { h3: 'The fastest cars', p: 'It is home to Thrust SSC and Thrust 2, which the museum describes as the two fastest cars in the world.' }
        ] },
        { kind: 'spec', title: 'Transport as data', p: 'A city whose museum celebrates vehicles also publishes where every bus stops. Both are records of how people move, and learning to question one kind of record is practice for the other.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From holding hands to a clustering rule that holds',
    intro: 'The bands are indicative. The first free lesson decides where a learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Grouping things', p: 'Sorting objects into groups by rules, and noticing when a rule makes everything one group.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Points on a map', p: 'Reading coordinates from a file and measuring the distance between two points.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Union-find and grids', p: 'Disjoint sets, spatial buckets, threshold scans and a clear account of chaining.', courses: ['problem-solving-dsa-masterclass-teens', 'java-programming-masterclass-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Clustering at work', p: 'Grouping real location data with a stated rule, a size check and reproducible code.', courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will cluster Coventry\'s bus stops in seconds. Why should a Coventry teenager learn how?',
    intro: 'Because at 300 metres the neat answer is sixty places, and one of them is most of the city.',
    p1: 'Ask an AI tool to group the city\'s bus stops into places and it will pick a method and a distance and hand back a tidy count. If it chooses single linkage and a generous distance, the count will look sensible while one group quietly contains more than a thousand stops. The tool is not wrong about the arithmetic; the rule it used simply does not match what anyone means by a place.',
    p2: 'Seeing that requires two things a learner can build here: the habit of checking the biggest group rather than the count, and an understanding of how union-find joins groups. With both, the same learner will spot the chain in a customer list that merges two towns, a delivery plan that treats a whole motorway as one stop, or an AI summary that groups unrelated complaints because each resembles the next.',
    closer: 'A Coventry teenager who has watched the biggest group leap from 85 stops to 1,154 with one small change of distance has learned something no assistant hands over by default: every grouping method carries a rule, and the rule decides the answer. That, more than any particular language, is why learning to program still pays in 2026.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Earlsdon, Tile Hill or Holbrooks, one lesson at one time',
    intro: 'Coventry\'s stops spread across 60 localities, and an online lesson reaches every one of them without a bus.',
    cells: [
      { h3: 'No bus to catch', p: 'A learner in Binley and one in Whitmore Park can join the same lesson from home, and the journey is the walk to a desk.' },
      { h3: 'English stages by name', p: 'Reception, Key Stages, Year 9 options, GCSEs and A levels are called what Coventry schools call them, and lessons are in English.' },
      { h3: 'A proper first lesson', p: 'Real teaching on a real task, then a straight recommendation of level, course and hour. No card details are asked for.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners working at the same level, drawn from Coventry, the rest of the UK and other countries so each level finds an hour.' },
      { h3: 'Twice a week, most weeks', p: 'Roughly eight sessions in a month, same time each week, and the family and teacher decide together when to stop for school breaks or revision.' },
      { h3: 'A clock that stays put', p: 'Our teaching team works in India, where the clocks never go forward or back. Against Coventry that gap is four and a half hours in British Summer Time and five and a half in winter, and either way a Coventry afternoon or evening falls inside the working day there.' }
    ],
    spec: { title: 'A city of students asks for evenings', p: 'With 27.4% of residents aged five and over in education, requests here split between after-school slots for children and later evenings for university students, and both fit our teachers\' day.' }
  },

  fees: {
    h2: 'What classes cost in Coventry',
    intro: 'Three prices, and nothing underneath them.',
    first: 'A complete lesson for free, ending with a level, a course and a suggested weekly time.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners of the same ability.',
    private: 'The same pattern of around eight lessons a month, with a teacher for one learner.',
    closer: 'Fees are in US dollars, the one rate charged outside India, so a family in Earlsdon pays exactly what a family in Holbrooks pays, and sterling prices are never quoted. Billing begins only after the trial lesson has fixed which course and which weekly slot, and our pricing page explains how breaks, missed sessions and switching format work.'
  },

  reviewsH2: 'What families wrote on Google, six reviews unchanged',

  book: {
    h2: 'Book the trial lesson for a Coventry learner',
    intro: 'The first task fits the learner: a grouping game in Scratch for a younger child, a script that reads coordinates, or the stop register and a threshold scan for a teenager who likes a puzzle.',
    success: 'Thank you. We will be in touch soon about a Coventry class.'
  },

  faq: {
    h2: 'Coventry coding class questions',
    intro: 'What Coventry families ask us most often.',
    items: [
      { q: 'How many people live in Coventry?', a: 'Census 2021 counted 345,325 usual residents in the Coventry local authority area, 332,606 of them in households and 12,719 in communal establishments.' },
      { q: 'Is Coventry a student city?', a: 'The 2021 Census put the rate of school or full-time study at 27.4% for Coventry residents aged five or older, where England\'s was 20.4%, and people aged 20 to 24 made up 9.1% of the city.' },
      { q: 'What is the bus stop project?', a: 'Learners take the 1,570 active Coventry bus stops from the national NaPTAN register and group them with union-find at different distances. At 60 metres there are 1,005 groups; at 300 metres one group swallows 1,154 stops.' },
      { q: 'Why does one group swallow the city?', a: 'Because union-find with a distance rule joins groups whenever any two members are close, so stops a few hundred metres apart link end to end along every road. The method, called single linkage, has no limit on how long a chain can grow.' },
      { q: 'What is Coventry Transport Museum?', a: 'A museum at Millennium Place, Hales Street, CV1 1JD, with 14 fully accessible galleries and Thrust SSC and Thrust 2 among its vehicles. We are not connected with it.' },
      { q: 'When do Coventry lessons run?', a: 'Late afternoons once school is out, weeknight evenings, or Saturday and Sunday, with the exact slot written down in UK time at the trial lesson. India sits four and a half hours ahead of Coventry in summer and five and a half ahead in winter.' },
      { q: 'Can lessons stop during GCSE or A level season?', a: 'Yes. Plenty of families pause for revision and the exams themselves, and for school breaks; you settle the dates with the teacher ahead of time.' },
      { q: 'Do you have a building in Coventry?', a: 'We have no premises in Coventry or anywhere in the UK. Every lesson happens live online, so the kit needed is a laptop or desktop with sound and a reliable connection. Our phone number is Indian, and we say so.', boiler: true },
      { q: 'How much do Coventry lessons cost?', a: 'Nothing for the first one. A place in a group of five to ten is then USD 100 a month, covering two live lessons a week, around eight a month; one-to-one teaching on that rhythm is USD 150 a month. You agree the course, format and slot before paying anything.', boiler: true },
      { q: 'How are groups put together?', a: 'By level first: five to ten learners who work at a similar pace towards similar goals, whatever their age or postcode. When no group at the right level meets at a time that suits, we suggest one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Nearby cities and the national pages',
    html: 'The nearest cities with pages of their own are <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a>, and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> teaches a different lesson from its river. Families weighing up the English school system can start with <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">coding and AI classes in England</a>, which sets out what each stage expects. Everything in the UK is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Coventry and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-classes-in-leicester', label: 'Leicester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-cov .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-cov .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.09; }
.cg-root.cg-cov .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-cov .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cov .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.009em; }
.cg-root.cg-cov .cg-grid-3 { gap: clamp(1.15rem, 2.7vw, 2.2rem); }
.cg-root.cg-cov .cg-table caption { letter-spacing: 0.018em; font-weight: 700; }
.cg-root.cg-cov .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cov .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-cov .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Coventry, Census 2021 via Nomis: TS001 Coventry local authority (E08000026) 345,325 usual residents, 332,606 in households, 12,719 in communal establishments; TS007A 31,584 aged 20 to 24, 9.1 percent, against 6.0 percent in England (band total 345,324, never summed on the page); TS068 89,083 schoolchildren and full-time students of 324,882 residents aged 5 and over, 27.4 percent, against 20.4 percent in England. Coventry Transport Museum about page: Millennium Place, Hales Street, Coventry CV1 1JD; "the largest publicly owned collection of British vehicles on the planet" (its own description); 14 fully accessible galleries; motor cars, commercial vehicles, cycles and motorcycles, with archive material at the Coventry Archives; home to Thrust SSC and Thrust 2, described as the two fastest cars in the world.',
    localProject: 'A threshold that chains. NaPTAN via the DfT API, administrative area 430, read 21 September 2026, filtered to locality or parent locality Coventry: 1,570 active bus stops (1,539 BCT on-street, 31 BCS bus station bays) in 60 localities, most in Coventry itself 95, Cheylesmore 68, Whitmore Park 54, Binley 54, Tile Hill North 52, Holbrooks 51; 834 distinct CommonName values, 578 used exactly twice, 206 once, 50 three or more times. Union-find on British National Grid easting and northing with a grid of cells the size of the threshold: 20 m 1,390 clusters (largest 8), 40 m 1,143 (22), 60 m 1,005 (22), 100 m 774 (36), 150 m 517 (37), 200 m 314 (85), 300 m 60 (largest 1,154), 400 m 19 (largest 1,519). Lesson family: union-find (disjoint sets) and single-linkage chaining; distinct from shortest paths (Diemen, Rathfarnham), set similarity (Terenure), point-in-polygon (Brainport) and bin width.',
    requiredMentions: [
      '345,325',
      '332,606',
      '31,584',
      '89,083',
      '324,882',
      '1,570',
      '1,154',
      '1,519',
      'Cheylesmore',
      'CV1 1JD',
      'Thrust SSC',
      'Millennium Place'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Coventry: 345,325 usual residents; 332,606 in households; 12,719 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000026&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Coventry 31,584 aged 20 to 24 (9.1 percent); England 6.0 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000026,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Coventry 89,083 students of 324,882 aged 5 and over (27.4 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000026,E92000001' },
      { claim: 'Department for Transport, NaPTAN access nodes API, administrative area 430: Coventry stops, types, status, localities, names and coordinates.', url: 'https://naptan.api.dft.gov.uk/v1/access-nodes?dataFormat=csv&atcoAreaCodes=430' },
      { claim: 'Coventry Transport Museum about page: address, collection description, galleries, Thrust SSC and Thrust 2.', url: 'https://www.transport-museum.com/about' }
    ],
    rejectedClaims: [
      'Coventry University facts: its about page returned 400, so none are used.',
      'Coventry Cathedral history: the page returned 404, so nothing is claimed.',
      'University of Warwick location claims: its about page does not state the campus location, so none is made.',
      'Passenger numbers at any stop: NaPTAN does not contain them.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Transport, Coventry City Council, any bus operator or the Transport Museum.'
    ]
  }
};
