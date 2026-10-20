'use strict';
// Los Angeles (cg- metro page, US cluster Phase 5, row 115). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: live online coding and AI classes for Los Angeles students, built around a geometry-and-statistics project on
// the City's own park boundary polygons: compute each park's area from its coordinates, then see why the mean park and
// the median park are wildly different. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-los-angeles/):
//  - Los Angeles Open Data (data.lacity.org), "Parks" (4jt3-efvk), metadata /api/views/4jt3-efvk.json: "The Department of
//    Recreation and Parks' GIS map of park boundaries in the City of Los Angeles."; attribution "Department of Recreation
//    and Parks"; licence "Creative Commons 1.0 Universal (Public Domain Dedication)"; refresh rate "Quarterly"; fields
//    the_geom (multipolygon), address, name. 566 records (SoQL count).
//  - Our calculation (ours, not official acreage): shoelace formula on every polygon ring (holes subtracted), coordinates
//    taken as US feet in the California State Plane grid the values imply (the metadata does not state the projection),
//    divided by 43,560: total 19,113.4, mean 33.77, median 3.46 acres; 166 polygons under one acre, 31 over 100; largest
//    GRIFFITH PARK 4,574.4, SEPULVEDA BASIN RECREATION AREA 1,538.6, HANSEN DAM RECREATION AREA 1,449.5.
//  - Los Angeles Open Data, "Department of Recreation and Parks' Facility and Park Information" (ax8j-dhzm, CC0, last
//    updated 2015): 986 records; by locationtype Parks 387, Recreation Centers 156, Public Computer Centers 76, Skate
//    Parks 23, Dog Parks 9 (SoQL group-by, ours).
//  - Los Angeles Public Library (City department), /branches: "We have 73 locations throughout the City of Los Angeles."
//  - laparks.org returned 403 and was not retried. cde.ca.gov redirected every request to a WAF alert page (Radware) and
//    leginfo.legislature.ca.gov returned 403; neither was retried, so no California rule is quoted from them.
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data: CA 1,325 of 2,282 high schools, source
//    "School Course Catalogs and Teacher Surveys". The Most Recent tab labels it 2023-2024 while the over-the-years tab
//    puts the same 58.06% under 2024-2025, so no school year is printed with it.
//  - IANA tzdb zone.tab "America/Los_Angeles Pacific"; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
// Lesson family: computing area from polygon coordinates, then mean versus median on a skewed distribution.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'LOS ANGELES', label: 'Los Angeles', blurb: 'Live online coding and AI classes for Los Angeles students, with a park-area project on the City&rsquo;s own open data.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-los-angeles',
  code: 'ala',
  accent: '#9E4834',
  accentRationale: 'Los Angeles: #9E4834, the allocated terracotta of Spanish revival roof tiles, warm and muted, far from the New York and Philadelphia reds in hue and contrast-safe on every paper',
  pageType: 'city',
  place: {
    name: 'Los Angeles',
    eyebrow: 'Los Angeles, California',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'California' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-united-states', name: 'United States' },
    { slug: 'coding-classes-in-california', name: 'California' }
  ],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'California', href: '/coding-classes-in-california' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Los Angeles',
  title: 'Online Coding and AI Classes in Los Angeles | Live Teacher',
  description: 'Live online coding and AI classes for Los Angeles kids and teens: Python, AI and data science, plus a project measuring 566 city parks from their open map data.',
  ogDescription: 'Python, AI and data science taught live online to Los Angeles students, on Pacific Time, with a project that measures every City park from its boundary coordinates.',
  twitterDescription: 'Live online coding and AI for LA students, with a City parks data project.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Los Angeles Students',
    description: 'Python, artificial intelligence, data science and game coding for Los Angeles students from elementary school to twelfth grade, taught live online in level-matched batches or one to one.'
  },

  h1: 'Online coding and AI classes for Los Angeles students',
  capsuleQ: 'Where can a Los Angeles student take live coding and AI classes online?',
  capsule: 'Modern Age Coders teaches Los Angeles students live online on Pacific Time: Python for kids from about age 9, then AI, machine learning and data science for teens, in batches of fifteen to twenty or one to one. No freeway, no parking. The first class is free, and the signature project measures the City&rsquo;s parks from their own map coordinates.',
  lead: 'Los Angeles is a city where the distance between home and an after-school class is measured in minutes of traffic, not miles. An online class removes that problem; it does not remove the need for a real teacher. This page shows what our students build, using a dataset the City itself publishes, the 566 park boundaries mapped by the Department of Recreation and Parks. It also covers how classes line up with Pacific Time and where California&rsquo;s computer science figures stand.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Los Angeles.',

  picks: {
    eyebrow: 'Course picks for LA students',
    h2: 'From a first Python program to real machine learning',
    intro: 'Placement is by what a student can already do. The free class sets the starting point.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for younger students: drawings, small games and a gentle first look at how AI guesses.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'The full Python foundation, from variables to files and functions, used on the park polygons below.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Cleaning, summarising and charting real data, with the mean and median question at its heart.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning models built in Python, trained, tested and questioned on data a student can inspect.' }
    ]
  },

  sections: [
    {
      id: 'parks', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How big is a typical Los Angeles park? Measuring 566 parks from their coordinates',
      intro: 'The City publishes every park boundary as a polygon of map coordinates, with no acreage column. Students calculate the area themselves, then discover that &ldquo;typical&rdquo; depends on which average they pick.',
      body: [
        { kind: 'table', caption: 'Park areas computed from the City&rsquo;s Parks polygons, dataset 4jt3-efvk, downloaded 18 October 2026 (our calculation, approximate, not official acreage)', head: ['Measure', 'Our result'], rows: [
          ['Park polygons in the dataset', '566'],
          ['Mean area', '33.77 acres'],
          ['Median area', '3.46 acres'],
          ['Polygons under one acre', '166'],
          ['Polygons over 100 acres', '31'],
          ['Largest: Griffith Park', 'about 4,574 acres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'From points to area', p: 'Each park arrives as a list of corner points. The shoelace formula multiplies neighboring coordinates crosswise and halves the total, which gives the area inside the outline. Holes, such as a lake inside a park, are subtracted.' },
          { h3: 'From feet to acres', p: 'The coordinates are large numbers that behave like feet on a state plane grid. Dividing square feet by 43,560 gives acres. Students check the method by running it on a square they draw themselves first.' },
          { h3: 'Mean or median?', p: 'Our mean lands near 34 acres, the median near three and a half. One average says a typical park is a sizeable green space; the other says it is closer to a large lot. Both are calculated correctly.' }
        ] },
        { kind: 'p', text: 'Why the gap? A handful of giants pull the mean upward. By our calculation Griffith Park alone covers about 4,574 acres, followed by the Sepulveda Basin Recreation Area at about 1,539 and the Hansen Dam Recreation Area at about 1,450. Remove those three and the mean drops sharply, while the median barely moves. That is the whole lesson in one sentence: when a few values are huge, the median describes the middle and the mean describes the total spread thin.' },
        { kind: 'p', text: 'A second dataset on the same portal adds context. The Department of Recreation and Parks&rsquo; facility list, last updated in 2015, holds 986 entries, among them 387 parks, 156 recreation centers and 76 public computer centers. Students who join the two lists by name meet the next real problem, that the same place is spelled differently in two files.' },
        { kind: 'callout', h3: 'Read these numbers carefully', p: 'Every area here is ours. The dataset has no acreage field and its metadata does not state the projection, so our acres assume the coordinates are in feet and will differ from the City&rsquo;s official figures. The data is released under a public domain dedication and refreshed quarterly, so a later download may change the results.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'California context',
      h2: 'Computer science in California schools, in brief',
      intro: 'One published figure, and a pointer to the statewide detail.',
      body: [
        { kind: 'p', text: 'The latest California access figure in Code.org (2025). 2025 State of AI + CS Education counts 1,325 of 2,282 high schools offering computer science, roughly 58%. Its listed source is school course catalogs and teacher surveys rather than a state agency report, and the sheet labels the school year inconsistently between two tabs, so we quote the count without a year. We could not read the California Department of Education pages directly on 18 October 2026, so this page quotes no state rule from them; the <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> covers the statewide picture.' },
        { kind: 'p', text: 'For a Los Angeles family the practical point is narrower. Whether a given campus offers computer science, and at what level, is a local matter, so a student who wants Python, AI or AP preparation in a particular year often needs to find it outside school hours.' }
      ]
    },
    {
      id: 'pacific', tint: '', eyebrow: 'Class times',
      h2: 'Pacific Time classes, taught from the other side of the world',
      intro: 'Our teachers are in India, which means LA evenings and weekend mornings line up with their working day.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Fits around school', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Twelve and a half hours', p: 'India is twelve and a half hours ahead of Los Angeles in summer and thirteen and a half in winter. A 5 p.m. class in LA is early morning the next day for the teacher.' },
          { h3: 'Mark the dates', p: 'The 2026 change back to standard time lands on November 1, 2026; daylight time returns on March 14, 2027. After each switch we restate every class in Pacific Time.' }
        ] },
        { kind: 'spec', title: 'America/Los_Angeles', p: 'The IANA time zone database names the Pacific zone after this city: America/Los_Angeles. Teens who write scheduling code learn to use that identifier, because a hard-coded offset breaks on the two dates above.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From elementary blocks to AI in twelfth grade',
    intro: 'Each rung lists two courses; the teacher recommends one after the free class.',
    cols: [
      { band: 'Grades 2 to 4', h3: 'Logic with blocks', p: 'Sequences, loops and simple games, built and shown by the child.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 7', h3: 'Typed Python', p: 'Variables, functions and small projects, the step that makes later work possible.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 8 to 10', h3: 'Data and the web', p: 'The parks project, charts, and first websites that use real data.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AI and AP', p: 'Machine learning from scratch and AP Computer Science preparation alongside school.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding in the AI era',
    h2: 'Why learn to code in LA when AI writes the code?',
    intro: 'Because someone still has to know whether the answer is right.',
    p1: 'Ask an AI assistant for the average size of a Los Angeles park and it may produce one number with great confidence. Which average? Measured how? A student who has computed 566 areas and seen a mean of about 34 acres beside a median of about three and a half knows that the honest answer starts with a question.',
    p2: 'Our AI courses keep that habit. Students write the code, check it against a case they can work out by hand, and only then use AI tools, within each provider&rsquo;s age rules, to go faster. The skill being taught is judgment, and judgment does not come from the tool.',
    closer: 'An AI that writes a shoelace function in seconds is useful only to someone who can tell when it got the units wrong.',
    blogAnchor: 'is learning to code still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Valley to San Pedro, the same live class',
    intro: 'Los Angeles is spread out; a class on a laptop is equally close to every neighborhood.',
    cells: [
      { h3: 'No drive, no parking', p: 'A student in Van Nuys and one in San Pedro can join the same session, each from home, without anyone sitting on the 405.' },
      { h3: 'Teacher sees the screen', p: 'Screens are shared, so the teacher can follow a student&rsquo;s code line by line and ask about the part that is not working.' },
      { h3: 'A free placement class', p: 'A real task, then a suggested course, level and time. Payment details are not part of the free class.' },
      { h3: 'Batches by level', p: 'Fifteen to twenty students at the same stage, from Los Angeles and across the US.' },
      { h3: 'Or one to one', p: 'A teacher for one student, at hours the family chooses, for AP preparation or a faster pace.' },
      { h3: 'School-aware', p: 'Teachers plan around the US school year and grade levels, and graded school work always stays the student&rsquo;s own.' }
    ],
    spec: { title: 'Online only, by design', p: 'There is no Modern Age Coders site in Los Angeles and none is claimed. Classes run live online from India; students need a computer, a headset and a reliable connection.' }
  },

  fees: {
    h2: 'What classes cost for Los Angeles families',
    intro: 'Three numbers, the same across the city.',
    first: 'A full first class with a teacher, free, ending with a recommended course and schedule.',
    group: 'Monthly classes in a level-matched batch of fifteen to twenty students.',
    private: 'Monthly classes with one teacher for one student, at times you pick.',
    closer: 'All US families pay in US dollars at one rate, whether they live in Silver Lake or Sylmar. Billing starts after the free class, once the course and time are settled; the pricing page explains holidays and missed sessions.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Book a free class for a Los Angeles student',
    intro: 'Tell us the student&rsquo;s grade and goal. A fourth grader gets a block game; a tenth grader might start measuring park polygons.',
    success: 'Thank you. We will contact you shortly to set up a free class for your Los Angeles student.'
  },

  faq: {
    h2: 'Questions from Los Angeles families',
    intro: 'What LA parents and students ask before starting.',
    items: [
      { q: 'Do you have a classroom in Los Angeles?', a: 'No. Every class is live online with a teacher, so a student joins from home anywhere in the city.' },
      { q: 'What age can my child start?', a: 'Block coding works from about six. Typed Python usually starts around nine to eleven, and AI and data science courses are for teens.' },
      { q: 'What time are classes in Pacific Time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Every time is confirmed in Pacific Time.' },
      { q: 'What is the Los Angeles parks project?', a: 'Students download the park boundary polygons the City publishes, compute the area of each park with the shoelace formula, and compare the mean and median park size.' },
      { q: 'Are the park areas on this page official?', a: 'No. They are our own calculations from the polygon coordinates, approximate, and will differ from the City acreage figures.' },
      { q: 'Does California require computer science to graduate?', a: 'We could not read the state education department pages directly when we checked, so we do not answer that here. Our California page covers the statewide rules.' },
      { q: 'Can a teen use AI tools in your classes?', a: 'Yes, once they can write and check the code themselves, and only tools whose own age rules allow it. AI comes after understanding, not instead of it.' },
      { q: 'How big are the batches?', a: 'Fifteen to twenty students at the same level. One-to-one classes are available for students who want a teacher to themselves.' },
      { q: 'Do you help with AP Computer Science?', a: 'Yes. We run AP Computer Science A and AP Computer Science Principles preparation alongside a school course. School assignments always remain the work of the student.' },
      { q: 'Are you connected with the City of Los Angeles?', a: 'No. We use open data the City publishes, but we are not connected with the City, its Department of Recreation and Parks, the library or any school district.' }
    ]
  },

  next: {
    eyebrow: 'More reading',
    h2: 'Next steps for Los Angeles students',
    html: 'For statewide context, see <a class="cg-inline-link" href="/coding-classes-in-california">coding classes in California</a>. Teens weighing AI can read <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-usa">AI and machine learning classes in the USA</a>, and AP students can go straight to <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Los Angeles and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-california', label: 'California' },
    { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI classes in the USA' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' }
  ],

  personalityCss: `
.cg-root.cg-ala .cg-hero h1 { font-weight: 780; letter-spacing: -0.03em; line-height: 1.04; max-width: 19ch; }
.cg-root.cg-ala .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding-left: 1rem; padding-bottom: 0.8rem; }
.cg-root.cg-ala .cg-eyebrow { letter-spacing: 0.2em; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ala .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-ala .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-ala .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ala .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.2rem); }
.cg-root.cg-ala .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-ala .cg-spec-title { text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'California, 18 October 2026: cde.ca.gov redirected to a WAF alert page and leginfo.legislature.ca.gov returned 403, so no state rule is quoted; Code.org (2025) Most Recent Access Data CA 1,325 of 2,282 high schools, source School Course Catalogs and Teacher Surveys, year label inconsistent between tabs so no year printed. IANA America/Los_Angeles and the US DST rule.',
    localProject: 'Los Angeles Open Data, Parks (4jt3-efvk, Department of Recreation and Parks, CC0, quarterly), 566 polygons downloaded 18 October 2026; our shoelace areas in acres assuming state plane feet: mean 33.77, median 3.46, 166 under one acre, 31 over 100, Griffith Park about 4,574, Sepulveda Basin about 1,539, Hansen Dam about 1,450. Facility and Park Information (ax8j-dhzm, 2015): 986 entries, 387 parks, 156 recreation centers, 76 public computer centers. LAPL: 73 locations. All computed values ours. Lesson family: area from polygon coordinates, then mean versus median on skewed data.',
    requiredMentions: [
      '566 park boundaries',
      '33.77 acres',
      '3.46 acres',
      'about 4,574 acres',
      'Sepulveda Basin Recreation Area',
      '76 public computer centers',
      '986 entries',
      'Dividing square feet by 43,560',
      'Hansen Dam Recreation Area',
    ],
    sources: [
      { claim: 'Los Angeles Open Data: Parks (4jt3-efvk) metadata, licence, refresh rate, and records.', url: 'https://data.lacity.org/api/views/4jt3-efvk.json' },
      { claim: 'Los Angeles Open Data: Department of Recreation and Parks Facility and Park Information (ax8j-dhzm).', url: 'https://data.lacity.org/api/views/ax8j-dhzm.json' },
      { claim: 'Los Angeles Public Library: 73 locations.', url: 'https://www.lapl.org/branches' },
      { claim: 'Code.org (2025), State of AI + CS Education data: California high school access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/Los_Angeles and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'California state CS rules: cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) could not be read; not retried, nothing quoted.',
      'A school year for the California Code.org figure: the two tabs disagree, so none is printed.',
      'Official park acreage: not read (laparks.org returned 403); only our computed areas are printed, labelled approximate.',
      'Park polygons whose names refer to school joint-use sites: not named on the page.',
      'Any affiliation with the City of Los Angeles, its Department of Recreation and Parks, LAPL or Code.org.'
    ]
  }
};
