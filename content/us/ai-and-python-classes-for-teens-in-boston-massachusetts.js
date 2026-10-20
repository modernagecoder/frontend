'use strict';
// Boston, Massachusetts (cg- metro page, US cluster Phase 5, row 125). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Not to be confused with the UK page for Boston, Lincolnshire, which this page never links.
// Spine: Python and AI for Boston teens, built on a top-N ranking of Bluebike stations from Analyze Boston, the city's
// open data portal. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-boston-massachusetts/):
//  - Analyze Boston (data.boston.gov), "Blue Bike Stations", licence Open Data Commons Public Domain Dedication and License
//    (PDDL): "Bluebike stations, updated nightly and shared to Analyze Boston." Datastore download 18 October 2026, OUR
//    counts: 572 stations in 13 municipalities (Boston 324, Cambridge 92, Somerville 38, Salem 18 ...); Public_ Yes on all
//    572; Total_docks stored as text; whole network min 9 (2 stations, both Salem), max 53 (Cambridge); in Boston: total
//    5,945 docks (ours), median 19; 106 stations with 15 docks, 100 with 19; top by docks: South Station 47, Forest Hills
//    40, then 37, 35, 35, 33, 33, 32, 32, 32 (tenth place 32, three-way tie), next 31; one site appears twice, the second
//    record tagged [Extension].
//  - City of Boston, City Council: "The 13 councilors create, pass, and amend local laws, as well as approve the City's
//    budget every year"; "four at-large councilors ... and nine district councilors"; "elected every two years".
//  - City of Boston, Parks and Recreation: "more than 2,200 acres of park land"; "We maintain 31 urban wilds, 4 high school
//    athletic fields, and operate 2 public golf courses"; "more than 45,000 public street trees".
//  - City of Boston, BCYF: "our 36 facilities across Boston".
//  - Massachusetts DESE (raw copies in src/coding-and-ai-classes-in-massachusetts/): the DLCS Course Taking Dashboard
//    "displays data about K-12 students completing at least one Digital Literacy or Computer Science (DLCS) course in a
//    given school or district"; DESE's curriculum review marks curricula core or supplemental per grade span. The state
//    page covers the strands and graduation rules, so they are not repeated here.
//  - Code.org (2025), State of AI + CS Education, Most Recent Access Data: MA 2023-2024, 81.25% (Access tab only).
//  - IANA tzdb northamerica: America/New_York, US DST rule.
// Lesson family: top-N ranking (sorting text vs numbers, ties at the cut-off, duplicate records).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'BOSTON, MA', label: 'Boston, Massachusetts', blurb: 'Python and AI for Boston teens, with a top-N ranking of Bluebike stations from Analyze Boston.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-boston-massachusetts',
  code: 'aptb',
  accent: '#52429E',
  accentRationale: 'Boston, Massachusetts: a muted harbour violet #52429E from the allocation table, contrast 7.53 on the paper and 6.48 on the deepest tint',
  pageType: 'city',
  place: {
    name: 'Boston',
    eyebrow: 'Boston, Massachusetts',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Massachusetts' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Boston, Massachusetts',
  title: 'AI and Python Classes for Teens in Boston, Massachusetts',
  description: 'Live online Python and AI classes for teens in Boston, Massachusetts: rank 572 Bluebike stations in Python, learn why sorting text fails, then build real models.',
  ogDescription: 'Boston teens learn Python and machine learning live online, starting with a top-N ranking of Bluebike stations from Analyze Boston. Grades 7 to 12.',
  twitterDescription: 'Python and AI for Boston teens, live online, built on Analyze Boston data.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Boston Teens',
    description: 'Python, data analysis, machine learning and AP Computer Science for teens in Boston, Massachusetts, in grades 7 to 12, taught live online in level-matched batches or one to one.'
  },

  h1: 'AI and Python classes for teens in Boston, Massachusetts',
  capsuleQ: 'Where can a Boston teenager learn Python and AI with a live teacher?',
  capsule: 'Modern Age Coders teaches teens in Boston, Massachusetts live online: Python first, then data analysis and machine learning, in groups of fifteen to twenty at one level or one to one, on Eastern Time. Students begin with real city data, such as ranking the 324 Bluebike stations inside Boston by dock count.',
  lead: 'Boston teenagers live among universities, hospitals and tech companies, and plenty of them want to build AI rather than only talk to it. The skill underneath every AI system is careful handling of data, and the simplest test of it is a ranking: what are the top ten of something? This page shows how a ranking of Boston&rsquo;s Bluebike stations goes wrong in three different ways before it goes right, using data from Analyze Boston, the city&rsquo;s open data portal. It also notes what Massachusetts publishes about computer science in schools, and how our live classes fit around a Boston school week.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Boston, Massachusetts.',

  picks: {
    eyebrow: 'Courses for Boston teens',
    h2: 'Four courses for a teen who wants to build AI',
    intro: 'Start where the student is. A free lesson with a teacher confirms the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from scratch: lists, sorting, functions and files, everything the Bluebike ranking needs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'pandas, rankings, grouping and charts on public data, with conclusions the student can defend.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning models built, tested and compared, never treated as black boxes.' },
      { course: 'competitive-programming-for-teens-course', band: 'Grades 9 to 12', note: 'Sorting, searching and efficient algorithms for teens who enjoy hard problems and contests.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Top ten Bluebike stations in Boston: three ways to get it wrong',
      intro: 'Analyze Boston publishes the Bluebike station list under a public domain dedication, updated nightly. We downloaded it on 18 October 2026: 572 stations across 13 municipalities, 324 of them in Boston itself.',
      body: [
        { kind: 'table', caption: 'Boston stations with the most docks (our ranking of the Analyze Boston Blue Bike Stations data, District = Boston, 18 October 2026)', head: ['Rank', 'Station', 'Docks'], rows: [
          ['1', 'South Station', '47'],
          ['2', 'Forest Hills', '40'],
          ['3', 'A station on Nashua Street', '37'],
          ['4 and 5 (tied)', 'Two stations', '35'],
          ['6 and 7 (tied)', 'Two stations, one at Copley Square', '33'],
          ['8 to 10 (tied)', 'Three stations, including a second Nashua Street record tagged Extension', '32'],
          ['Next', 'Three more stations', '31']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Mistake 1: sorting text', p: 'The dock column is stored as text. Sort all 572 stations as strings and the top two are both Salem stations with 9 docks, because the character 9 beats the character 5 in 53. Converting to integers first fixes it.' },
          { h3: 'Mistake 2: ignoring ties', p: 'Ten places end exactly on a three-way tie at 32 docks. Ask for the top eight instead and you must cut a tie in half; the honest answer lists all three or says how the tie was broken.' },
          { h3: 'Mistake 3: duplicate places', p: 'One location shows up twice, the second record tagged [Extension]. Is that one big station or two? The ranking changes depending on the answer, so a student has to decide and say so.' }
        ] },
        { kind: 'p', text: 'In pandas the correct version is short: <code>df[&quot;Total_docks&quot;].astype(int)</code>, a filter to <code>District == &quot;Boston&quot;</code>, then <code>nlargest(10, &quot;Total_docks&quot;, keep=&quot;all&quot;)</code> so ties are kept rather than dropped. Students then explain in writing why their list has the length it does.' },
        { kind: 'table', mt: true, caption: 'The shape of the Boston dock counts (our figures)', head: ['Measure', 'Value'], rows: [
          ['Stations in Boston', '324'],
          ['Docks across those stations (our sum)', '5,945'],
          ['Median docks per station', '19'],
          ['Stations with exactly 15 docks', '106'],
          ['Stations with exactly 19 docks', '100']
        ] },
        { kind: 'callout', h3: 'Our ranking, the city&rsquo;s data', p: 'The ranks, sums and medians here are our own, from one download on 18 October 2026. Dock counts change as stations are added or resized, and the data does not say how many bikes are present at any moment. A top ten is only as true as the day it was taken, which is why we print the date with it.' }
      ]
    },
    {
      id: 'model', tint: 'deep', eyebrow: 'Ranking to AI',
      h2: 'Why a ranking is the first lesson in machine learning',
      intro: 'Recommendation systems, search engines and model leaderboards are all top-N lists underneath.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Search and feeds', p: 'Every feed a teen scrolls is a ranked list. Knowing how ties, duplicates and sort order work shows how fragile those rankings can be.' },
          { h3: 'Model scores', p: 'When students compare models, they rank them by a score. A gap of one point can be noise, just as two stations with 33 docks are equal.' },
          { h3: 'Fair comparison', p: 'Ranking Boston stations against Cambridge ones mixes two cities with different layouts. Choosing the right comparison group comes before any algorithm.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our project sequence for Boston teens', head: ['Week', 'Task', 'Skill'], rows: [
          ['1', 'Load the station list, count rows per municipality', 'Reading data, grouping'],
          ['2', 'Build the Boston top ten correctly, with ties', 'Type conversion, sorting'],
          ['3', 'Decide what to do with duplicate locations', 'Data judgment, documentation'],
          ['4', 'Predict a station&rsquo;s dock count from its neighbours', 'A first regression model and its error']
        ] },
        { kind: 'p', text: 'The fourth week is where AI begins. A student trains a simple model, then discovers it predicts 15 or 19 most of the time, because those values dominate the data. That is a lesson in class imbalance that no tutorial video teaches as well as one surprising result.' }
      ]
    },
    {
      id: 'boston', tint: 'tint', eyebrow: 'Boston facts we used',
      h2: 'Boston, Massachusetts, in the city&rsquo;s own figures',
      intro: 'Official City of Boston pages, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'What the City of Boston publishes', head: ['Topic', 'Figure', 'Source'], rows: [
          ['City Council', 'The 13 councilors: four at-large and nine district councilors, elected every two years', 'City of Boston, City Council'],
          ['Park land', 'more than 2,200 acres of park land', 'Boston Parks and Recreation'],
          ['Urban wilds', '31 urban wilds', 'Boston Parks and Recreation'],
          ['Golf', '2 public golf courses', 'Boston Parks and Recreation'],
          ['Street trees', 'more than 45,000 public street trees', 'Boston Parks and Recreation'],
          ['Community centers and pools', '36 facilities across Boston', 'Boston Centers for Youth and Families (BCYF)'],
          ['Bike share', '324 Bluebike stations within Boston (our count)', 'Analyze Boston, Blue Bike Stations']
        ] },
        { kind: 'p', text: 'All 572 stations in the file are marked public, and Boston has more than three times as many as Cambridge, the next municipality on the list with 92. Counting by municipality before ranking is the habit that stops a teen from comparing the wrong things.' }
      ]
    },
    {
      id: 'massachusetts', tint: '', eyebrow: 'Massachusetts schools',
      h2: 'Finding computer science course data for a Boston school',
      intro: 'One practical pointer from the state, not a summary of the rules.',
      body: [
        { kind: 'p', text: 'The Massachusetts Department of Elementary and Secondary Education (DESE) publishes a Digital Literacy and Computer Science Course Taking Dashboard that, in DESE&rsquo;s words, &ldquo;displays data about K-12 students completing at least one Digital Literacy or Computer Science (DLCS) course in a given school or district.&rdquo; A Boston family can use it to see how computer science is taken in their own district. DESE has also reviewed curricula against its DLCS framework and marks each as core or supplemental for a grade span. Statewide, Code.org&rsquo;s 2025 data places Massachusetts high schools offering computer science at 81.25% in 2023 to 2024 (Code.org (2025). 2025 State of AI + CS Education).' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Reading the dashboard', p: 'The dashboard is itself a dataset. A teen who can filter it to one district and compare years is practising the same skills as the Bluebike project.' },
          { h3: 'School first', p: 'If a Boston school offers computer science, take it. Our classes work alongside it with projects, AP preparation and AI depth.' },
          { h3: 'Graded work', p: 'We teach concepts and methods. Anything a school grades is written by the student alone.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Eastern Time and a Boston school week',
      intro: 'Boston keeps America/New_York in the IANA time zone database. Our teachers are in India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'You set the slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The India gap', p: 'India runs 9 hours 30 minutes ahead of Boston in summer and 10 hours 30 minutes ahead in winter, so a Boston evening class is an early India morning.' },
          { h3: 'Two dates this year', p: 'Standard time returns on November 1, 2026 and daylight time on March 14, 2027. Our confirmations always give the Boston time.' }
        ] },
        { kind: 'spec', title: 'Sorting times is sorting text too', p: 'A teen who stored class times as strings like 9:00 and 10:00 finds that 10:00 sorts first. It is Mistake 1 from the Bluebike project again, in a new costume, and the fix is the same: convert before you sort.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Python basics to models that hold up',
    intro: 'Grades are a guide; the first lesson decides the start.',
    cols: [
      { band: 'Grades 7 to 8', h3: 'Python core', p: 'Lists, sorting and functions, with small rankings.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Data and algorithms', p: 'pandas projects like the Bluebike ranking, and sorting algorithms by hand.', courses: ['data-science-course-for-teens-python-data', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Grades 10 to 12', h3: 'Machine learning', p: 'Regression, classification and honest evaluation.', courses: ['ai-ml-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Grades 11 to 12', h3: 'AP and portfolio', p: 'AP Computer Science A or Principles and a public project portfolio.', courses: ['ap-computer-science-a-java-exam-prep-course', 'git-github-version-control-course-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Building AI',
    h2: 'Can a Boston teen skip Python and go straight to AI tools?',
    intro: 'They can use tools without Python. They cannot judge them.',
    p1: 'Ask an AI assistant for Boston&rsquo;s top ten Bluebike stations and it may sort the text column, drop a tied station or count the Extension record twice, and present the result with total confidence. A teen who has made those mistakes by hand will spot them at once.',
    p2: 'We teach the code first because it gives students a way to check. Once they can, AI assistants speed up their work instead of replacing their thinking. Teens also learn to respect the minimum ages AI providers set in their own terms.',
    closer: 'Our AI courses start with rankings, tables and mistakes, and move to models only when a student can explain every step behind the score.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Dorchester to Brighton, the same live class',
    intro: 'Boston neighborhoods are close on a map and slow in traffic. An online class is no distance at all.',
    cells: [
      { h3: 'Join from home', p: 'A teen logs in from their own room anywhere in Boston, so winter weather and the commute never cancel a lesson.' },
      { h3: 'Planned in US grades', p: 'Lessons follow US grade levels and the Massachusetts school year, with extra support before AP exams.' },
      { h3: 'Free trial class', p: 'A real Python task with a teacher, then a suggested course, level and time. Card details are never requested at this stage.' },
      { h3: 'Same-stage batches', p: 'A group of fifteen to twenty teens who are all at one point in the course, from Boston and the rest of the US.' },
      { h3: 'Private teaching', p: 'One teen with one teacher, for AP preparation or a faster pace in AI.' },
      { h3: 'Eastern Time', p: 'Weekdays or weekends as you choose, confirmed in Eastern Time.' }
    ],
    spec: { title: 'Online, not local', p: 'We have no Boston office and claim none. Teaching is live online from India, and we are not connected with the City of Boston, Bluebikes, DESE or Code.org.' }
  },

  fees: {
    h2: 'What classes cost for Boston families',
    intro: 'All three prices in one place.',
    first: 'A free trial class with a teacher, ending with a course and level recommendation.',
    group: 'A monthly fee for a level-matched batch of fifteen to twenty teens.',
    private: 'A monthly fee for one teen with a dedicated teacher.',
    closer: 'Boston families are billed in US dollars, at one rate for the whole country. No payment is taken before the trial class and your agreement on course and time; the pricing page explains holidays and missed sessions.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free Python or AI class',
    intro: 'Tell us your teen&rsquo;s grade and goals. A beginner gets a first Python task; a teen with some Python can start on the Bluebike ranking.',
    success: 'Thank you. We will be in touch shortly about a class for your teen in Boston.'
  },

  faq: {
    h2: 'Boston teen Python and AI questions',
    intro: 'Short answers for families in Boston, Massachusetts.',
    items: [
      { q: 'Is this page for Boston, Massachusetts?', a: 'Yes. It is written for families in Boston, Massachusetts, uses data from Analyze Boston, and schedules classes in Eastern Time.' },
      { q: 'What is the Bluebike ranking project?', a: 'Teens download the Blue Bike Stations list from Analyze Boston, convert the dock column to numbers, rank the Boston stations, and handle ties and a duplicate record correctly.' },
      { q: 'Why does sorting the dock column go wrong?', a: 'The column is stored as text, so 9 sorts above 53. Converting the values to integers before sorting gives the right order.' },
      { q: 'Are the station rankings official?', a: 'No. They are our own ranking from a download on 18 October 2026, and dock counts change over time.' },
      { q: 'Does my teen need Python before AI?', a: 'Yes. Python and data handling come first, because judging any AI result depends on being able to check the data and code behind it.' },
      { q: 'How can I see computer science course data for my Boston school district?', a: 'DESE publishes a Digital Literacy and Computer Science Course Taking Dashboard showing K-12 students completing at least one such course by school or district.' },
      { q: 'When are classes for Boston teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time.' },
      { q: 'How big are the groups?', a: 'Fifteen to twenty teens at the same level, or a private class with one teacher.' },
      { q: 'Do you have a Boston location?', a: 'No. Every class is live and online, taught from India.' },
      { q: 'Where can I find the prices?', a: 'In the fees block on this page: a free trial class, then a monthly group plan or a monthly private plan. You pay nothing before the trial.' }
    ]
  },

  next: {
    eyebrow: 'More for teens',
    h2: 'Next reads for Boston students',
    html: 'Teens aiming at AI can read <a class="cg-inline-link" href="/ai-research-programs-for-high-school-students">AI research programs for high school students</a> and <a class="cg-inline-link" href="/machine-learning-competitions-for-high-school-students">machine learning competitions</a>. Competitive coders can try <a class="cg-inline-link" href="/acsl-competition-preparation">ACSL preparation</a>, and security fans <a class="cg-inline-link" href="/picoctf-for-beginners">picoCTF for beginners</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Boston, Massachusetts and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/cybersecurity-classes-for-teens', label: 'Cybersecurity for teens' }
  ],

  personalityCss: `
.cg-root.cg-aptb .cg-hero h1 { font-weight: 740; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-aptb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-aptb .cg-section-head h2 { max-width: 29ch; }
.cg-root.cg-aptb .cg-eyebrow { letter-spacing: 0.14em; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-aptb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptb .cg-table th { text-align: left; font-weight: 700; }
.cg-root.cg-aptb .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Massachusetts, read raw on 18 October 2026 (copies from the state page research): DESE DLCS Course Taking Dashboard (K-12 students completing at least one DLCS course by school or district); DESE curriculum review marking curricula core or supplemental by grade span; Code.org (2025) State of AI + CS Education, Most Recent Access Data: MA 2023-2024, 81.25%; IANA America/New_York and the US DST rule.',
    localProject: 'Analyze Boston Blue Bike Stations (PDDL, updated nightly), downloaded 18 October 2026: 572 stations in 13 municipalities, 324 in Boston; Total_docks stored as text (text sort puts two Salem 9-dock stations first); our Boston ranking South Station 47, Forest Hills 40, tenth place a three-way tie at 32; duplicate [Extension] record; our Boston sum 5,945 docks, median 19; 106 stations at 15 docks, 100 at 19. Lesson family: top-N ranking.',
    requiredMentions: [
      'Analyze Boston',
      '572 stations across 13 municipalities',
      '324',
      '5,945',
      'three-way tie at 32',
      '[Extension]',
      'The 13 councilors',
      '31 urban wilds',
      'more than 45,000 public street trees',
      'Course Taking Dashboard'
    ],
    sources: [
      { claim: 'Analyze Boston: Blue Bike Stations (PDDL), used for the ranking.', url: 'https://data.boston.gov/dataset/blue-bike-stations' },
      { claim: 'City of Boston: City Council, 13 councilors, four at-large and nine district, two-year terms.', url: 'https://www.boston.gov/departments/city-council' },
      { claim: 'City of Boston: Parks and Recreation (2,200 acres, 31 urban wilds, 2 golf courses, 45,000 street trees).', url: 'https://www.boston.gov/departments/parks-and-recreation' },
      { claim: 'City of Boston: Boston Centers for Youth and Families, 36 facilities.', url: 'https://www.boston.gov/departments/boston-centers-youth-families' },
      { claim: 'Massachusetts DESE: Digital Literacy and Computer Science (DLCS), course taking dashboard and curriculum review.', url: 'https://www.doe.mass.edu/stem/dlcs/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Massachusetts access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Boston library branches and MBTA stops: used by the Massachusetts state page, not repeated here.',
      'The DLCS strands and Massachusetts graduation rules: covered on the state page, not repeated.',
      'Live bike availability: the station list gives docks only, so no bike counts are claimed.',
      'Station street addresses and names of people in station names: not printed beyond major hubs.',
      'Any connection with the UK town of Boston, Lincolnshire, or its page: none; never linked.',
      'Any affiliation with the City of Boston, Bluebikes, DESE or Code.org.'
    ]
  }
};
