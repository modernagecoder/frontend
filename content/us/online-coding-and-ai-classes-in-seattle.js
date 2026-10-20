'use strict';
// Seattle (cg- metro page, US cluster Phase 5, row 124). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: live online coding and AI for Seattle students, with a project that joins two City of Seattle open-data tables
// (park addresses and park features) on the PMAID key. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-seattle/):
//  - Seattle Open Data, "Seattle Parks And Recreation Park Addresses" (v5tj-kqhc), licence Public Domain, attribution City
//    of Seattle, rows updated 30 May 2024: 412 rows, 412 distinct PMAIDs, 26 ZIP codes.
//  - Seattle Open Data, "Park Features By PMAID" (xrnu-8eiq), licence Public Domain, rows updated 1 July 2026: "a list of
//    features for each park PMAID"; 1,044 rows on 282 PMAIDs; 26 feature types; Play Area 142, Drinking fountains 132,
//    Views 98, Restrooms 89. OUR join: 266 PMAIDs in both; 1,011 feature rows match an address row, 33 rows (16 PMAIDs) do
//    not; 146 parks in the address table have no feature rows; most features on one park: Warren G. Magnuson Park, 16.
//  - Seattle Parks and Recreation, About Us: "manages a 6,441-acre park system of over 489 parks"; "about 12% of the
//    city's land area"; "25 community centers", "eight indoor swimming pools"; "38 parks with reservable picnic shelters";
//    "200+ sport fields", "59 lighted fields".
//  - Seattle City Council: Districts 1 to 7 plus Positions 8 and 9 (citywide); "The nine Council members".
//  - ospi.k12.wa.us returned 403 (not retried). Washington rule read instead in the state code, RCW 28A.230.300
//    (app.leg.wa.gov): "Beginning no later than the 2022-23 school year, each school district that operates a high school
//    must, at a minimum, provide an opportunity to access an elective computer science course"; a CS course may substitute
//    for a third year of math or science once per student, with counselor notice and agreement.
//  - Code.org (2025), State of AI + CS Education, Most Recent Access Data: WA 2024-2025, 396 of 774 (51.2%), State
//    Education Agency. Access tab only.
//  - IANA tzdb northamerica: America/Los_Angeles, US DST rule.
// Lesson family: joining two tables on a key (inner vs left join, orphan rows).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SEATTLE', label: 'Seattle', blurb: 'Live online coding and AI for Seattle students, with a project joining two City of Seattle parks tables.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-seattle',
  code: 'as',
  accent: '#495280',
  accentRationale: 'Seattle: a muted Puget Sound slate #495280 from the allocation table, contrast 7.07 on the paper and 6.08 on the deepest tint',
  pageType: 'city',
  place: {
    name: 'Seattle',
    eyebrow: 'Seattle, Washington',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Washington' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Seattle',
  title: 'Online Coding and AI Classes in Seattle | Live Teachers',
  description: 'Live online coding and AI classes for Seattle students, from Scratch to machine learning, with a Python project that joins two City of Seattle parks tables.',
  ogDescription: 'Seattle students learn to join real city data tables in Python, then build AI on top. Live online, grades K to 12, in Pacific Time, batches or one to one.',
  twitterDescription: 'Coding and AI for Seattle students, live online, built on city open data.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Seattle Students',
    description: 'Scratch, Python, data science, web development and machine learning for Seattle students from elementary to high school, taught live online in level-matched batches or one to one.'
  },

  h1: 'Online coding and AI classes in Seattle',
  capsuleQ: 'Where can a Seattle student take live online coding and AI classes?',
  capsule: 'Modern Age Coders teaches Seattle students live online: Scratch for six-year-olds, then Python, data science and, by high school, machine learning, in groups of fifteen to twenty at one level or one to one, scheduled in Pacific Time. A signature project joins two City of Seattle parks datasets on a shared key.',
  lead: 'Seattle students grow up around software, and many of them want to understand how it is actually made. Real programming work is less about clever algorithms than about getting data from two places to line up. This page shows that skill on two public datasets from the City of Seattle, one listing park addresses and one listing park features, and what happens when you join them. It also explains what Washington state law says about high school computer science, how class times work on Pacific Time, and what our classes cost.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Seattle.',

  picks: {
    eyebrow: 'Courses for Seattle students',
    h2: 'Four places to begin',
    intro: 'Matched to age and goal, then confirmed in a free first lesson with a teacher.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 3', note: 'Visual blocks, stories and puzzles that build sequencing and logic before any typing.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 12', note: 'Python from scratch to dictionaries, files and data, enough to run the parks join below.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'pandas, joins, charts and honest conclusions from public datasets.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning built on data the student has joined and cleaned, then tested properly.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Joining two Seattle parks tables, and finding what falls out',
      intro: 'The City of Seattle publishes park addresses and park features as two separate public-domain tables on its open data portal. Both carry a park ID called PMAID. We downloaded both on 18 October 2026 and joined them.',
      body: [
        { kind: 'table', caption: 'What the join shows (our counts from two Seattle Open Data tables, 18 October 2026)', head: ['Measure', 'Count', 'What it tells a student'], rows: [
          ['Rows in Park Addresses', '412', 'One row per park, one PMAID each'],
          ['Rows in Park Features By PMAID', '1,044', 'Many rows per park, one per feature'],
          ['PMAIDs that appear in the features table', '282', 'Not every park has listed features'],
          ['PMAIDs found in both tables', '266', 'The size of an inner join, counted in parks'],
          ['Feature rows with no matching address', '33, on 16 PMAIDs', 'Orphans: a join silently drops them'],
          ['Parks with no feature rows at all', '146', 'Missing from an inner join, kept by a left join']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Inner join', p: 'Keep only parks in both tables. It looks clean, but 146 parks vanish without warning, and so do the 33 orphan feature rows.' },
          { h3: 'Left join', p: 'Keep every park from the address table and attach features where they exist. Now the 146 parks show up with blanks, which is honest.' },
          { h3: 'Anti-join', p: 'Ask the reverse question: which feature rows point at a PMAID with no address? Those 16 IDs are the ones to report or investigate.' }
        ] },
        { kind: 'p', text: 'In pandas the whole lesson is three lines: <code>pd.merge(addr, feat, on=&quot;pmaid&quot;, how=&quot;inner&quot;)</code>, the same with <code>how=&quot;left&quot;</code>, and an <code>indicator=True</code> merge to label which side each row came from. Comparing the row counts after each one teaches more about data than any single chart.' },
        { kind: 'table', mt: true, caption: 'The most common park features (our count from Park Features By PMAID)', head: ['Feature', 'Rows'], rows: [
          ['Play Area', '142'],
          ['Drinking fountains', '132'],
          ['Views', '98'],
          ['Restrooms', '89']
        ] },
        { kind: 'callout', h3: 'Ours, not the city&rsquo;s', p: 'Every count here is our own, from downloads on 18 October 2026. The two tables were last updated at different times (the address table in May 2024, the features table in July 2026), which may explain some orphans. We say &ldquo;may&rdquo; because the city has not told us; guessing a cause and calling it a fact is the mistake this project is designed to prevent.' }
      ]
    },
    {
      id: 'seattle', tint: 'deep', eyebrow: 'Seattle facts we used',
      h2: 'Seattle&rsquo;s parks and council, as the city describes them',
      intro: 'Official City of Seattle figures, read on 18 October 2026, set beside the open data.',
      body: [
        { kind: 'table', caption: 'What the City of Seattle publishes', head: ['Topic', 'Official figure', 'Source'], rows: [
          ['Park system', 'a 6,441-acre park system of over 489 parks', 'Seattle Parks and Recreation, About Us'],
          ['Share of the city', 'about 12% of the city&rsquo;s land area', 'Seattle Parks and Recreation, About Us'],
          ['Community centers', '25 community centers', 'Seattle Parks and Recreation, About Us'],
          ['Swimming', 'eight indoor swimming pools', 'Seattle Parks and Recreation, About Us'],
          ['Picnic shelters', '38 parks with reservable picnic shelters', 'Seattle Parks and Recreation'],
          ['Sports fields', '200+ sport fields, 59 lighted fields', 'Seattle Parks and Recreation'],
          ['City Council', 'Nine members: seven districts and two citywide positions', 'Seattle City Council']
        ] },
        { kind: 'p', text: 'Put the official &ldquo;over 489 parks&rdquo; next to the 412 rows in the address table and a student has a real research question: which parks are not in the file, and why? It is a good example of why a dataset is a view of reality, not reality itself. The park with the most listed features in our join is Warren G. Magnuson Park, with 16.' }
      ]
    },
    {
      id: 'washington', tint: 'tint', eyebrow: 'Washington state',
      h2: 'Computer science at school in Washington, briefly',
      intro: 'The state rule in a sentence, then what it means for a Seattle family choosing classes.',
      body: [
        { kind: 'p', text: 'In short: Washington&rsquo;s school code asks every district that runs a high school to give its students the chance to take a computer science elective, which is an access rule rather than a course every student must pass. We read it in the Revised Code of Washington on 18 October 2026, because the state education agency&rsquo;s page refused our request that day. By Code.org&rsquo;s count, 51.2% of Washington high schools listed computer science in 2024 to 2025 (Code.org (2025). 2025 State of AI + CS Education).' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'If your school offers it', p: 'A Seattle student can take the school elective and use our classes for depth: bigger projects, data work like the parks join, or AP preparation.' },
          { h3: 'If the timetable is full', p: 'Many students cannot fit an elective around languages, music and sport. A weekly online class keeps coding going without a timetable clash.' },
          { h3: 'Credit questions', p: 'Any question about school credit belongs with the school counselor. Our classes do not award Washington credit, and school assignments stay the student&rsquo;s own.' }
        ] }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Pacific Time, and the widest gap to India in the lower 48',
      intro: 'Seattle runs on America/Los_Angeles in the IANA time zone database, the furthest US mainland zone from India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Choose your times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The arithmetic', p: 'The gap to India is twelve and a half hours while Seattle is on daylight time and thirteen and a half in winter, so a Seattle afternoon is the next India morning.' },
          { h3: 'Changeover days', p: 'Seattle changes clocks on November 1, 2026 (back) and March 14, 2027 (forward); every class is confirmed in Pacific Time.' }
        ] },
        { kind: 'spec', title: 'A date-line puzzle', p: 'Because the gap passes twelve hours, a Monday 5 p.m. class in Seattle starts on Tuesday in India. Teen students write a Python check with zoneinfo that prints both dates, a neat test of whether they understand time zones as data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks to joined data and AI',
    intro: 'Grades are a guide; the free lesson finds the right rung.',
    cols: [
      { band: 'Grades K to 3', h3: 'Logic with blocks', p: 'Sequences, events and loops in visual code.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 7', h3: 'First real programs', p: 'Python basics and small games, with simple lists and counting.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 8 to 10', h3: 'Data and the web', p: 'pandas joins like the parks project, and full web pages.', courses: ['data-science-course-for-teens-python-data', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Grades 10 to 12', h3: 'AI and AP', p: 'Machine learning and AP Computer Science A.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will AI make joining data and writing code unnecessary?',
    intro: 'AI can write the merge line. Deciding which join is right is still a human call.',
    p1: 'Ask an AI assistant to combine the two Seattle tables and it will most likely produce an inner join, report a tidy result and say nothing about the 146 parks that disappeared. Nothing in the output warns you; you have to know to ask.',
    p2: 'That is why our students write joins by hand before they rely on tools. Once they know what each join keeps and drops, an assistant becomes a fast typist rather than an authority. The same habit carries into machine learning, where the training data decides what a model can ever know.',
    closer: 'Our AI courses for teens begin with exactly this: the data, the join and the gaps, and only then the model.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Ballard to Beacon Hill, the same live class',
    intro: 'Hills, bridges and traffic make cross-city classes slow. Online, every neighborhood is the same distance away.',
    cells: [
      { h3: 'Learn from home', p: 'Students join from their own room anywhere in Seattle, with no bus or bridge to cross after school.' },
      { h3: 'Washington school year', p: 'Lessons follow US grades and Seattle&rsquo;s school terms, and a teacher never completes assessed work for a student.' },
      { h3: 'Begin with a free class', p: 'A genuine coding task with a teacher; at the end, a suggested course, level and slot, and no request for payment details.' },
      { h3: 'Grouped by stage', p: 'Batches of fifteen to twenty students at the same point, from Seattle and across the country.' },
      { h3: 'Private option', p: 'A teacher for one student, for those who want speed, AP preparation or a quieter setting.' },
      { h3: 'Slots in Pacific Time', p: 'Weekdays or weekends, decided by you, confirmed in Pacific Time.' }
    ],
    spec: { title: 'No local office', p: 'We have no Seattle center and claim none. Classes are live online, taught from India, and need a laptop or desktop with sound and a reliable connection.' }
  },

  fees: {
    h2: 'Class fees for Seattle families',
    intro: 'Three items cover it.',
    first: 'A free first class with a teacher, ending in a suggested course and level.',
    group: 'A monthly fee for a level-matched batch of fifteen to twenty students.',
    private: 'A monthly fee for one-to-one teaching.',
    closer: 'Seattle families pay in US dollars, the same single rate used nationwide. Charges begin only after the free class and once you accept the course and time; holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'Reviews from our families',

  book: {
    h2: 'Request a free first class',
    intro: 'Tell us the student&rsquo;s grade and interests. Beginners get a short Python or Scratch task; a teen with some Python can try the Seattle parks join.',
    success: 'Thank you. The team will be in touch shortly about a class in Seattle.'
  },

  faq: {
    h2: 'Seattle coding and AI questions',
    intro: 'What Seattle families ask before starting.',
    items: [
      { q: 'What ages do you teach in Seattle?', a: 'From age 6 with visual blocks, through Python and web development in middle school, to data science, AP Computer Science and machine learning in high school.' },
      { q: 'What is the Seattle parks join project?', a: 'Students download the City of Seattle Park Addresses and Park Features tables, join them on the PMAID key, and compare inner, left and anti-joins to see which parks and rows drop out.' },
      { q: 'Are the parks counts official?', a: 'No. They are our own counts from downloads on 18 October 2026. Official figures, such as over 489 parks, come from Seattle Parks and Recreation.' },
      { q: 'Must every Washington student take computer science?', a: 'No. The state code asks districts that run a high school to offer access to a computer science elective; taking it is the student\'s choice.' },
      { q: 'Do your classes count for school credit?', a: 'No. We do not grant Washington credit. Our classes add skills and projects alongside school.' },
      { q: 'When are classes for Seattle students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every slot is given in Pacific Time.' },
      { q: 'Why does the class date look different in India?', a: 'India is 12 hours 30 minutes or more ahead of Seattle, so an afternoon class in Seattle starts the next morning in India. We handle that and confirm the Seattle time.' },
      { q: 'Do you have a Seattle location?', a: 'No. We teach live online from India only.' },
      { q: 'What do classes cost?', a: 'The fees block lists a free first class and two monthly plans, group or one to one. Nothing is charged until after the free class.' }
    ]
  },

  next: {
    eyebrow: 'Read next',
    h2: 'More for Seattle students',
    html: 'Teens interested in data and AI can read <a class="cg-inline-link" href="/machine-learning-competitions-for-high-school-students">machine learning competitions</a> and <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>. For tools, see <a class="cg-inline-link" href="/vs-code-setup-for-students">VS Code setup for students</a>; competitive coders can look at <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Seattle and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
    { href: '/ai-courses-for-high-school-students', label: 'AI for high schoolers' },
    { href: '/coding-classes-in-washington', label: 'Washington State' }
  ],

  personalityCss: `
.cg-root.cg-as .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-as .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-as .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-as .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-as .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-as .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-as .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Washington, read raw on 18 October 2026: ospi.k12.wa.us returned 403; the Revised Code of Washington, computer science section (districts operating a high school must provide access to an elective CS course), summarized in one sentence only; Code.org (2025) State of AI + CS Education, Most Recent Access Data: WA 2024-2025, 396 of 774 (51.2%); IANA America/Los_Angeles and the US DST rule.',
    localProject: 'Seattle Open Data Park Addresses (v5tj-kqhc, 412 rows) and Park Features By PMAID (xrnu-8eiq, 1,044 rows on 282 PMAIDs), both public domain, downloaded 18 October 2026; our join: 266 PMAIDs in both, 33 orphan feature rows on 16 PMAIDs, 146 parks with no features; Play Area 142, Drinking fountains 132; Warren G. Magnuson Park 16 features. Lesson family: joining tables on a key.',
    requiredMentions: [
      'PMAID',
      '1,044',
      '33, on 16 PMAIDs',
      '146',
      'a 6,441-acre park system of over 489 parks',
      'about 12% of the city',
      'eight indoor swimming pools',
      '59 lighted fields',
      '25 community centers',
      'Warren G. Magnuson Park'
    ],
    sources: [
      { claim: 'Seattle Open Data: Seattle Parks And Recreation Park Addresses (public domain).', url: 'https://data.seattle.gov/resource/v5tj-kqhc.json' },
      { claim: 'Seattle Open Data: Park Features By PMAID (public domain).', url: 'https://data.seattle.gov/resource/xrnu-8eiq.json' },
      { claim: 'Seattle Parks and Recreation: About Us (acreage, parks, community centers, pools, fields).', url: 'https://www.seattle.gov/parks/about-us' },
      { claim: 'Seattle City Council: seven districts and two citywide positions.', url: 'https://www.seattle.gov/council' },
      { claim: 'Washington State Legislature: RCW 28A.230.300 Computer science.', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.230.300' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Washington access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Los_Angeles and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'OSPI guidance on computer science: ospi.k12.wa.us returned 403 on 18 October 2026, not retried; the statute is quoted instead.',
      'The cause of the orphan feature rows: not stated by the city, so only a possible reason is offered.',
      'Council member names and park addresses: not printed; counts only.',
      'That our classes earn Washington credit or meet the substitution rule: refused.',
      'Any affiliation with the City of Seattle, OSPI or Code.org.'
    ]
  }
};
