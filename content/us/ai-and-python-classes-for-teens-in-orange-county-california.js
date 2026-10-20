'use strict';
// Orange County, California (cg- metro page, US cluster Phase 5, row 119). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: AI and Python for Orange County teens, with a spatial-join project on OC Public Works map layers: put each of
// the county's 60 mapped libraries inside a city boundary with a point-in-polygon test, and compare the answer with the
// city written in each library's address. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-orange-county-california/):
//  - OC Public Works ArcGIS organization (services.arcgis.com/UXmFoWC7yDHcDN5Q), "Libraries" FeatureServer, service
//    description "Public libraries in orange county", layer librarylocs, lastEditDate 1596571422983 (August 4, 2020):
//    60 records; USER_TYPE County Library 32, City Library 27, Law Library 1; USER_CITY Anaheim 8, Huntington Beach 5.
//    No licence text is published on the service or its item; we print only counts and our own derived results.
//  - Same organization, "CityBoundaries_Dissolve" (field JURISDICTI): 35 features, the 34 cities plus "Unincorporated".
//    No licence text published. The County portal's CC0 "City Boundaries" layer is hosted on ocgis.com, which did not
//    respond (curl code 000); not retried.
//  - Our point-in-polygon join (ray casting, holes respected), 18 October 2026 (ours): 55 of 60 libraries fall inside the
//    city named in their address; 5 differ: Foothill Ranch to Lake Forest, Ladera Ranch and Silverado to Unincorporated,
//    Corona del Mar and Balboa to Newport Beach; Newport Beach rises from 2 to 4; Los Alamitos has no library in the layer.
//  - OC Public Libraries (County of Orange), /about: "OC Public Libraries is a vibrant network of 29 branches, and a
//    satellite location at the Orangewood Children and Family Center".
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data: CA 1,325 of 2,282, Primary Data Source
//    "School Course Catalogs and Teacher Surveys" (most other states: "State Education Agency"); year withheld (tabs
//    disagree).
//  - cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) could not be read; not retried.
//  - IANA tzdb: America/Los_Angeles; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
// Lesson family: spatial join with a point-in-polygon test, and checking a derived field against a typed one.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ORANGE COUNTY', label: 'Orange County, California', blurb: 'AI and Python classes for Orange County teens, with a point-in-polygon project on county library and city boundary maps.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-orange-county-california',
  code: 'apto',
  accent: '#523231',
  accentRationale: 'Orange County, California: #523231, the allocated dark walnut brown, earthy and low-key, distinct in hue and lightness from the Los Angeles and San Diego reds, contrast-safe on every paper',
  pageType: 'city',
  place: {
    name: 'Orange County',
    eyebrow: 'Orange County, California',
    schemaType: 'AdministrativeArea',
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
  routeLabel: 'Orange County',
  title: 'AI and Python Classes for Teens in Orange County, CA | Live',
  description: 'Live online AI and Python classes for Orange County teens: Python, machine learning and a spatial project placing 60 county libraries inside 34 city boundaries.',
  ogDescription: 'Orange County teens learn Python and AI live online, then run a point-in-polygon test on county map data and find five libraries whose address city is not their city.',
  twitterDescription: 'AI and Python for Orange County teens, live online, with a county map data project.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online AI and Python Classes for Orange County Teens',
    description: 'Python, machine learning, data science and web development for teenagers in Orange County, California, taught live online in level-matched groups or one to one.'
  },

  h1: 'AI and Python classes for Orange County teens',
  capsuleQ: 'Where can an Orange County teen learn Python and AI with a live teacher?',
  capsule: 'Modern Age Coders teaches Orange County teens live online on Pacific Time: Python first, then data science, machine learning and AI projects they build themselves, in groups of fifteen to twenty at one level or privately, starting with a free trial. Our OC project uses county map layers to test whether each library really sits in the city its address names.',
  lead: 'Orange County has 34 cities packed edge to edge, plus pockets of unincorporated land, and that patchwork is the starting point for our project here. A teen who wants to work in AI needs more than a model; they need to know how to join one dataset to another and how to tell when the join quietly lies. This page shows that project on public County data, how our teen courses lead from Python to machine learning, and how lessons fit around an OC school day.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teen in Orange County.',

  picks: {
    eyebrow: 'Courses for OC teens',
    h2: 'Python first, then AI that a teen actually builds',
    intro: 'The free class checks where a teen is now and suggests one of these to begin.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from scratch to confident: loops, functions, files and the geometry the library project needs.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning in Python, from a first classifier to honest evaluation on held-out data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Joining, grouping and charting public data, with pandas and plain Python side by side.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Grades 9 to 12', note: 'Building web and AI projects with AI coding tools, after the student can read and check the code.' }
    ]
  },

  sections: [
    {
      id: 'join', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Orange County city is each library really in? A point-in-polygon project',
      intro: 'OC Public Works publishes map layers for the county&rsquo;s libraries and its city boundaries. Teens place every library inside a boundary with their own code, then compare with the city typed in each address.',
      body: [
        { kind: 'table', caption: 'Five libraries whose address city differs from the boundary they fall inside (our spatial join on OC Public Works layers, downloaded 18 October 2026)', head: ['Library (as named in the layer)', 'City in the address', 'Boundary it falls inside'], rows: [
          ['Foothill Ranch Library', 'Foothill Ranch', 'Lake Forest'],
          ['Ladera Ranch Library', 'Ladera Ranch', 'Unincorporated'],
          ['Library of the Canyons', 'Silverado', 'Unincorporated'],
          ['Corona del Mar Library', 'Corona del Mar', 'Newport Beach'],
          ['Balboa Branch Library', 'Balboa', 'Newport Beach']
        ] },
        { kind: 'table', mt: true, caption: 'The two layers at a glance (our counts)', head: ['Layer', 'What we found'], rows: [
          ['Libraries', '60 records: 32 county, 27 city, 1 law library'],
          ['City boundaries', '35 shapes: 34 cities and one Unincorporated area'],
          ['Libraries matching their address city', '55 of 60'],
          ['Newport Beach libraries', '2 by address, 4 by boundary'],
          ['Cities with no library in the layer', 'Los Alamitos']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Cast a ray', p: 'To test whether a point is inside a shape, draw an imaginary line from it to the right and count how many edges it crosses. An odd number means inside. Teens write this in about ten lines of Python and test it on a square first.' },
          { h3: 'Mind the holes', p: 'Some city shapes have islands of other land inside them. A point inside a hole is outside the city, so the code checks the outer ring and then every inner ring before it decides.' },
          { h3: 'Join and compare', p: 'Each library gets the name of the boundary that contains it. Placing that column beside the typed address city exposes five disagreements, and each one turns out to have a reason.' }
        ] },
        { kind: 'p', text: 'The reasons are the real lesson. Corona del Mar and Balboa are neighborhoods of Newport Beach that people write as their own place names; Foothill Ranch sits inside Lake Forest; Ladera Ranch and Silverado are unincorporated communities governed by the County rather than a city. A mailing address answers &ldquo;what do people call this place&rdquo;, while a boundary answers &ldquo;which government is responsible&rdquo;. Neither column is wrong. They answer different questions, and an analyst has to say which one a report uses.' },
        { kind: 'p', text: 'There is a second lesson about age. The library layer was last edited on August 4, 2020 and lists 32 county libraries, while OC Public Libraries now describes itself as a network of 29 branches, and a satellite location at the Orangewood Children and Family Center. A dataset that was right when it was made can drift from the present. Teens write both numbers into their report with their dates, rather than picking one.' },
        { kind: 'callout', h3: 'Whose results these are', p: 'The join, the counts and the five mismatches are ours, from one download on 18 October 2026. Neither OC Public Works layer publishes a licence statement, so we reproduce no data beyond library names and counts, and we credit the County as the source.' }
      ]
    },
    {
      id: 'ca', tint: 'tint', eyebrow: 'California data',
      h2: 'Reading California&rsquo;s computer science figure like an analyst',
      intro: 'Where a number comes from matters as much as the number.',
      body: [
        { kind: 'p', text: 'Code.org (2025). 2025 State of AI + CS Education reports 1,325 of 2,282 California high schools offering computer science. Look at the source column, though: for most states it reads State Education Agency, but for California it reads School Course Catalogs and Teacher Surveys, a gentler kind of evidence that can miss courses or count ones that never ran. The sheet also files the figure under different school years on two tabs, so we print none. California&rsquo;s own education department site blocked our direct reading on 18 October 2026, which is why no state rule appears here; our <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> covers the statewide picture.' },
        { kind: 'p', text: 'For an OC teen, the useful reading is that statewide access says little about one campus in one year. If the course a student wants is full or not offered, an outside class keeps them moving.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Scheduling',
      h2: 'Lessons on Pacific Time around an OC school day',
      intro: 'Teachers work from India; an OC teen only ever deals with Pacific Time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Your timetable', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Teacher&rsquo;s clock', p: 'An evening lesson in Irvine is a morning lesson in India. The gap is twelve and a half hours for most of the year and thirteen and a half from November to March.' },
          { h3: 'Switch dates', p: 'This school year standard time begins November 1, 2026 and daylight time returns March 14, 2027. Lesson times are reconfirmed in Pacific Time both weeks.' }
        ] },
        { kind: 'spec', title: 'Another spatial question', p: 'Time zones are polygons too. The IANA database assigns all of Orange County to America/Los_Angeles, and a teen who extends the library project to zones quickly sees why software looks up a named zone rather than storing an offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Teen pathway',
    h2: 'From a first Python script to machine learning',
    intro: 'A guide, not a rule. Teens move on when their projects show they are ready.',
    cols: [
      { band: 'Grades 7 to 8', h3: 'Python basics', p: 'Variables, loops, functions and small programs that read data files.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Data skills', p: 'Joins, grouping and charts, including the library project.', courses: ['data-science-course-for-teens-python-data', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 10 to 11', h3: 'Algorithms and AP', p: 'Problem solving, data structures and AP Computer Science A.', courses: ['problem-solving-dsa-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] },
      { band: 'Grades 11 to 12', h3: 'Machine learning', p: 'Models trained, tested and explained, plus AI projects built with care.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI that a teen can trust',
    h2: 'Why an OC teen should learn the code under the AI',
    intro: 'Joins are where data goes wrong without anyone noticing.',
    p1: 'Ask an AI tool to count libraries per Orange County city and it will probably group by the address city, giving Newport Beach two. Ask it to use the boundaries and, if it gets the geometry right, Newport Beach has four. Both answers look tidy. Only a teen who has written the point-in-polygon test knows that they answer different questions.',
    p2: 'That is the habit our AI course builds before any model is trained: know what each column means and how it was made. Teens use AI coding tools later, within the providers&rsquo; age rules, and they are expected to check the output the way they checked their own join.',
    closer: 'A model trained on a careless join learns the carelessness; the fix is a person who looks.',
    blogAnchor: 'whether learning to code is still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Anaheim to San Clemente, the same live class',
    intro: 'The county is long and the 405 is slow. The class is on the laptop.',
    cells: [
      { h3: 'County-wide', p: 'A teen in Anaheim and another in San Clemente can share a group, each at their own desk.' },
      { h3: 'Teacher in the code', p: 'Students share their screens, so the teacher reads the actual code and asks about the line that misbehaves.' },
      { h3: 'Free trial class', p: 'A real task, a recommendation and a suggested time. We do not ask for card details for the trial.' },
      { h3: 'Groups by stage', p: 'Each group holds fifteen to twenty teens whose skills match, drawn from Orange County and other US regions.' },
      { h3: 'One to one', p: 'One teacher for one teen, for AP, competitions or a faster pace.' },
      { h3: 'Schoolwork stays theirs', p: 'Our job is ideas and projects. Homework that gets graded, and every exam, is done by the teen alone.' }
    ],
    spec: { title: 'Taught from India, live', p: 'There is no Modern Age Coders site in Orange County, and none is claimed. Lessons are live online; a teen needs a laptop or desktop, a headset and a steady connection.' }
  },

  fees: {
    h2: 'Fees for Orange County families',
    intro: 'A free trial, then group or private.',
    first: 'A full trial class with a teacher, free, ending with a recommended course and time.',
    group: 'A month of live classes in a group of fifteen to twenty teens at one level.',
    private: 'A month of one-to-one classes, scheduled around school and activities.',
    closer: 'Families in Orange County pay in US dollars, the same rate as every other family in the United States. Billing starts only after the trial and an agreed plan; holiday and missed-class rules are on the pricing page.'
  },

  reviewsH2: 'Reviews from students and families on Google',

  book: {
    h2: 'Book a free trial class for an OC teen',
    intro: 'Tell us what the teen has done so far. A beginner gets a first Python task; a teen who already codes might start the library join.',
    success: 'Thank you. We will be in touch shortly about a free class for your Orange County teen.'
  },

  faq: {
    h2: 'Questions from Orange County families',
    intro: 'What OC parents and teens ask before they start.',
    items: [
      { q: 'Are classes held anywhere in Orange County?', a: 'No. Lessons happen over live video, reachable from any OC city or unincorporated community.' },
      { q: 'Must a teen know Python before starting machine learning?', a: 'Some Python is needed. Complete beginners take the Python course first and switch over when the teacher sees solid, working projects.' },
      { q: 'What time are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Every time is stated in Pacific Time.' },
      { q: 'What is the library boundary project?', a: 'Teens place 60 county-mapped libraries inside city boundaries with a point-in-polygon test, then compare the result with the city in each address and explain the five differences.' },
      { q: 'Why do the address city and the boundary disagree?', a: 'Addresses use place names people know, such as Corona del Mar or Ladera Ranch, while boundaries show which city, or the County, is responsible for the land.' },
      { q: 'Does California require computer science to graduate?', a: 'We do not state a rule here, because the state education department site blocked our direct reading on 18 October 2026. Our California page covers the statewide rules.' },
      { q: 'Can teens use AI coding tools in class?', a: 'Yes, once they can read and check the code, and only tools whose own age rules allow them. Understanding comes first.' },
      { q: 'How large are the groups?', a: 'Fifteen to twenty teens at the same level. One-to-one lessons are available as an alternative.' },
      { q: 'Can OC teens get help with AP CS courses?', a: 'They can. We coach both AP Computer Science courses while the student takes the class at school, and graded work is always left to the student.' },
      { q: 'Are you connected with the County of Orange or its libraries?', a: 'No. We teach with map layers OC Public Works publishes, but we are not connected with the County, OC Public Libraries or any school district.' }
    ]
  },

  next: {
    eyebrow: 'Keep going',
    h2: 'More for Orange County teens',
    html: 'Teens building toward AI can read <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a> and <a class="cg-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>. AP students can see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and the <a class="cg-inline-link" href="/coding-classes-in-california">California page</a> has the state view.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Orange County and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-california', label: 'California' },
    { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' }
  ],

  personalityCss: `
.cg-root.cg-apto .cg-hero h1 { font-weight: 690; letter-spacing: -0.016em; line-height: 1.09; max-width: 23ch; }
.cg-root.cg-apto .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; padding-top: 0.2rem; }
.cg-root.cg-apto .cg-eyebrow { letter-spacing: 0.15em; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-apto .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.008em; }
.cg-root.cg-apto .cg-table caption { text-align: left; font-weight: 700; }
.cg-root.cg-apto .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apto .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-apto .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-apto .cg-spec-title { font-weight: 700; font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'California, 18 October 2026: cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) unreadable, so no state rule is quoted; Code.org (2025) Most Recent Access Data CA 1,325 of 2,282 with Primary Data Source School Course Catalogs and Teacher Surveys, year withheld because the tabs disagree. IANA America/Los_Angeles and the US DST rule.',
    localProject: 'OC Public Works ArcGIS layers, downloaded 18 October 2026: Libraries (60 records; County Library 32, City Library 27, Law Library 1; last edited August 4, 2020) and CityBoundaries_Dissolve (34 cities plus Unincorporated); no licence statement on either. Our ray-casting point-in-polygon join: 55 of 60 match the address city; Foothill Ranch to Lake Forest, Ladera Ranch and Silverado to Unincorporated, Corona del Mar and Balboa to Newport Beach (2 to 4); Los Alamitos has none. OC Public Libraries: 29 branches and a satellite location. Results ours. Lesson family: spatial join with point-in-polygon, checking a derived field against a typed one.',
    requiredMentions: [
      '60 records: 32 county, 27 city, 1 law library',
      '34 cities and one Unincorporated area',
      '55 of 60',
      'Foothill Ranch Library',
      'Library of the Canyons',
      '2 by address, 4 by boundary',
      'Los Alamitos',
      'August 4, 2020',
      'a network of 29 branches',
      'Orangewood Children and Family Center'
    ],
    sources: [
      { claim: 'OC Public Works ArcGIS: Libraries feature service (description, fields, last edit date).', url: 'https://services.arcgis.com/UXmFoWC7yDHcDN5Q/arcgis/rest/services/Libraries/FeatureServer/0' },
      { claim: 'OC Public Works ArcGIS: CityBoundaries_Dissolve feature service (34 cities and Unincorporated).', url: 'https://services.arcgis.com/UXmFoWC7yDHcDN5Q/arcgis/rest/services/CityBoundaries_Dissolve/FeatureServer/0' },
      { claim: 'OC Public Libraries: About OCPL, 29 branches and a satellite location.', url: 'https://www.ocpl.org/about' },
      { claim: 'Code.org (2025), State of AI + CS Education data: California access and source label.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/Los_Angeles and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'California state CS rules: cde.ca.gov and leginfo.legislature.ca.gov could not be read; not retried, nothing quoted.',
      'A licence for the two OC Public Works layers: none is published; only counts, library names and our own results are printed.',
      'The CC0 City Boundaries layer on ocgis.com: host did not respond; not retried.',
      'That the 2020 layer reflects today&rsquo;s library network: refused; OCPL&rsquo;s current 29 branches are printed beside it with dates.',
      'Census or demographic layers in the same organization: not used.',
      'Any affiliation with the County of Orange, OC Public Works, OC Public Libraries or Code.org.'
    ]
  }
};
