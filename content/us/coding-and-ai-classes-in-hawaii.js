'use strict';
// Hawaii (cg- state page, US cluster Phase 4, row 71). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Hawaii is the state where computer science access has been falling in the published numbers, enrollment is
// among the thinnest, and the clock never changes. What does the Board of Education's diploma rule ask for, what do the
// counts say, and how does a student sort the state library network by island using coordinates alone?
// Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-hawaii/):
//  - hawaiipublicschools.org (HIDOE): Cloudflare 403 on home, search and CS pages; capitol.hawaii.gov (HRS): Cloudflare
//    403; governor.hawaii.gov: Cloudflare challenge. Stopped for each host; nothing quoted from them.
//  - Hawaii State Board of Education, Policy 102-15 "High School Graduation Requirements and Commencement" (file dated
//    2026-02-12; "amended: 02/12/2026"): "Total 24.0 credits"; English 4.0, Social Studies 4.0, Mathematics 3.0
//    "including Algebra 1 (1 credit), Geometry (1 credit)", Science 3.0 "including Biology", World Language, Fine Arts or
//    Career and Technical Education 2.0, Physical Education 1.0, Health 0.5, Personal/Transition Plan 0.5, "Electives 6.0
//    credits". Computer science is not named among the course areas.
//  - Code.org (2025), raw sheet (Access and Participation tabs only): HI access 57% (2018-19), 62%, 72%, 77% (2021-22),
//    72%, 71.6%, 66.7% (2024-25); Most Recent 46 of 69, 2024-2025, "State Education Agency and School Catalogs";
//    participation 4.4% (2020-21), 4.3%, 3.0%, 3.55%, 2.53% (2024-25); 1,317 of 51,961 (NCES Fall 2022 total).
//  - College Board, School Report of AP Exams by State 2023-24: Hawaii 76 (2023), 75 (2024); public 47, 47.
//  - IANA tzdb: zone1970.tab "Pacific/Honolulu Hawaii"; northamerica Zone Pacific/Honolulu: -10:30 HST from 1896, a
//    brief HDT in 1933 (Apr 30 to May 21), -10:30 US rules to "1947 Jun 8", then "-10:00 - HST" with no rules since.
//  - Hawaii Statewide GIS Program (Office of Planning and Sustainable Development), "Public Libraries in the State of
//    Hawaii" (geodata.hawaii.gov Infrastructure MapServer 28; item owner HawaiiStateGIS); terms: "The contents of this web
//    page are public domain"; description: the Hawaii State Public Library System "manages 51 branch locations on six of
//    the main Hawaiian Islands". Count query 51, downloaded 18 October 2026 with outSR 4326. Our results: island field
//    Oahu 25, Hawaii 12, Kauai 6, Maui 6, Lanai 1, Molokai 1; our six latitude and longitude boxes agree with the island
//    field for 51 of 51; latitudes 19.06 to 22.21, longitudes -159.67 to -154.94; listed as open Saturday 28, Sunday 3;
//    cmptrclass "Y" 20 (Oahu 11, Hawaii 4, Kauai 2, Maui 2, Molokai 1); wifi "Y" 51. Addresses and phones not printed.
// Lesson family: filtering coordinates with bounding boxes, and testing a box against a label.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'HAWAII', label: 'Hawaii', blurb: 'Coding and AI for Hawaii students on any island, with a project sorting the 51 state public libraries by island from coordinates.' },
  market: US,
  slug: 'coding-and-ai-classes-in-hawaii',
  code: 'ah',
  accent: '#0F2866',
  accentRationale: 'Hawaii: #0F2866, a deep muted Pacific navy, allocated in alloc.tsv row 71 and distinct from the other US accents; far above 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Hawaii',
    eyebrow: 'Hawaii, United States',
    schemaType: 'State',
    chain: [
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hawaii',
  title: 'Coding and AI Classes in Hawaii | Live Online, Any Island',
  description: 'Live online coding and AI classes for Hawaii students on every island: the 24-credit diploma rule, falling CS access figures, and a project on state libraries.',
  ogDescription: 'Two in three Hawaii high schools offered computer science in 2024 to 2025, down from 77%. The diploma rule, the numbers, and live online classes on Hawaii time.',
  twitterDescription: 'Hawaii coding and AI classes, live online, for students on Oahu and every neighbor island.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hawaii Students',
    description: 'Level-matched online Scratch, Python, web, AI and AP Computer Science for Hawaii students from elementary to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in Hawaii',
  capsuleQ: 'Is computer science part of a Hawaii high school diploma?',
  capsule: 'Not as a named requirement. Hawaii Board of Education Policy 102-15 sets a 24.0-credit diploma in English, social studies, math, science, languages, arts or CTE, PE, health and a transition plan, with 6.0 elective credits where computer science can fit. Modern Age Coders teaches coding, AI and AP Computer Science live online for Hawaii students on any island, in batches or 1-on-1.',
  lead: 'Hawaii\'s published computer science numbers tell an uncomfortable story. The share of high schools offering a course rose to 77% in 2021 to 2022 and has fallen in each year since, to 66.7% in 2024 to 2025, while the share of high school students enrolled dropped to 2.53%. Distance between islands, small schools and teacher supply all plausibly play a part, though the data alone cannot say which. This page sets out the Board of Education\'s diploma rule as written, the access and enrollment figures, a data project on the state library network that only needs coordinates, and why Hawaii class times are the easiest in the country to plan.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Hawaii.',

  picks: {
    eyebrow: 'Course picks for Hawaii',
    h2: 'Four courses for students on every island',
    intro: 'All four run live online, so a student on Molokai has the same teacher and syllabus as one in Honolulu. A free trial lesson sets the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades K to 5', note: 'Block coding through finished games, a strong first step where elementary computer science is limited.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 12', note: 'Python from first lines to data projects, including the island bounding-box exercise on this page.' },
      { course: 'html-css-course-for-beginners-build-real-websites', band: 'Grades 7 to 12', note: 'Real websites by hand, a useful elective-style skill for a student whose school has no web course.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP CSP for students whose high school does not offer it, with the Create task and exam practice.' }
    ]
  },

  sections: [
    {
      id: 'diploma', tint: '', eyebrow: 'The diploma rule',
      h2: 'What Board Policy 102-15 requires for a Hawaii diploma',
      intro: 'From the Hawaii State Board of Education\'s Policy 102-15, High School Graduation Requirements and Commencement, last amended on 02/12/2026 and read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Minimum course and credit requirements for the Hawaii High School Diploma (Board Policy 102-15)', head: ['Area', 'Credits'], rows: [
          ['English', '4.0'],
          ['Social Studies', '4.0'],
          ['Mathematics, including Algebra 1 and Geometry', '3.0'],
          ['Science, including Biology', '3.0'],
          ['World Language, Fine Arts or Career and Technical Education', '2.0'],
          ['Physical Education', '1.0'],
          ['Health, and Personal/Transition Plan', '0.5 each'],
          ['Electives', '6.0'],
          ['Total', '24.0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where computer science fits', p: 'Computer science is not named in the policy\'s course areas. A school computer science course would normally count as an elective, or within the Career and Technical Education option, depending on how the course is authorized.' },
          { h3: 'Proficiency counts', p: 'The policy lets students meet requirements through proficiency based equivalents, under a process the Department of Education sets up, alongside traditional courses.' },
          { h3: 'Same rule for every student', p: 'Policy 102-15 states that the graduation requirement for students with disabilities is the same as for students without disabilities.' }
        ] },
        { kind: 'p', text: 'We tried to read the Hawaii Department of Education\'s own computer science pages and the Hawaii Revised Statutes on the legislature\'s site, but both returned security blocks to our requests in October 2026. So this page does not describe Hawaii\'s computer science standards, any law on course offerings, or department guidance; it relies on the Board policy above, which we could read in full.' }
      ]
    },
    {
      id: 'decline', tint: 'tint', eyebrow: 'The published counts',
      h2: 'Hawaii computer science access peaked in 2021 to 2022',
      intro: 'Access and participation for Hawaii from the Code.org (2025) data sheet, with College Board AP school counts, as published.',
      body: [
        { kind: 'table', caption: 'Seven years of Hawaii figures as the 2025 Code.org sheet lists them', head: ['Year', 'Schools with a course', 'Share of students taking one'], rows: [
          ['2018 to 2019', '57%', 'No value'],
          ['2019 to 2020', '62%', 'No value'],
          ['2020 to 2021', '72%', '4.4%'],
          ['2021 to 2022', '77%', '4.3%'],
          ['2022 to 2023', '72%', '3.0%'],
          ['2023 to 2024', '71.6%', '3.55%'],
          ['2024 to 2025', '66.7%, or 46 of 69', '2.53%, or 1,317 of 51,961']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A small denominator', p: 'With 69 high schools in the count, a single school dropping its course moves the share by about 1.4 points, by our arithmetic. Small totals swing; read the trend, not one year.' },
          { h3: 'Two sources blended', p: 'The sheet names the Hawaii basis as "State Education Agency and School Catalogs", combining an official file with course listings.' },
          { h3: 'AP held steady', p: 'The College Board counts 76 Hawaii schools giving AP exams in 2023 and 75 in 2024, with 47 public schools in both years.' }
        ] },
        { kind: 'p', text: 'The enrollment figure divides 1,317 students by an NCES count of 51,961 high school students for fall 2022, so it is Code.org\'s approximation rather than a census of 2024 to 2025 classrooms. Even so, about one high schooler in forty taking computer science is low, and it is the main reason families on the neighbor islands look for classes outside school. Cite as: Code.org (2025). 2025 State of AI + CS Education. Hawaii values are quoted singly.' }
      ]
    },
    {
      id: 'islands', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which island is each library on? Sorting points with bounding boxes',
      intro: 'The Hawaii Statewide GIS Program publishes the 51 branches of the Hawaii State Public Library System as public-domain open data, each with latitude, longitude and an island label. Students ignore the label, place every point with coordinates alone, then check themselves against it.',
      body: [
        { kind: 'table', caption: 'State public libraries by island (our counts from the Statewide GIS layer, downloaded 18 October 2026)', head: ['Island', 'Branches', 'Listed with computer classes'], rows: [
          ['Oahu', '25', '11'],
          ['Hawaii Island', '12', '4'],
          ['Kauai', '6', '2'],
          ['Maui', '6', '2'],
          ['Molokai', '1', '1'],
          ['Lanai', '1', '0'],
          ['All islands', '51', '20']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Draw six boxes', p: 'For each island, students choose a minimum and maximum latitude and longitude, our own rough rectangles, then test every library with four comparisons: inside if lat_min <= y <= lat_max and lon_min <= x <= lon_max.' },
          { h3: '2. Check against the label', p: 'Our six boxes put all 51 branches on the island the layer names, 51 of 51. That agreement is the evidence the boxes work, and a student should report it before trusting any box-based count.' },
          { h3: '3. Find the weak spots', p: 'Rectangles are crude. Maui, Molokai and Lanai sit close together, so a careless box catches the wrong coast; students tighten edges and learn why real tools use polygon outlines instead.' }
        ] },
        { kind: 'callout', h3: 'Ours, from public-domain data', p: 'The boxes and counts are our teaching results from one download. The state publishes the layer as public domain with no warranty of accuracy, and opening hours change, so the 28 branches listed as open on Saturday and the 3 open on Sunday are the layer\'s values on that day, not a current timetable.' },
        { kind: 'p', text: 'The coordinates span latitudes 19.06 to 22.21 and longitudes -159.67 to -154.94, which is the first sanity check: any point outside that frame is a data error. A strong extension measures how far each library is from the next nearest one on the same island, which turns a filtering exercise into a distance one and says something real about access on the neighbor islands.' }
      ]
    },
    {
      id: 'hst', tint: 'tint', eyebrow: 'Class times',
      h2: 'Hawaii Standard Time, unchanged since 1947',
      intro: 'Hawaii keeps one clock all year with no daylight saving, which makes scheduling with India unusually simple.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No clock changes', p: 'In the IANA database, Hawaii\'s zone has been plain HST, UTC minus 10, since June 8, 1947, with no daylight saving rule attached. Your class time never moves.' },
          { h3: 'A fixed gap to India', p: 'By our arithmetic India is always 15 hours 30 minutes ahead of Hawaii, so a 4 pm class in Honolulu is 7:30 the next morning for the teacher, all year.' },
          { h3: 'The mainland moves instead', p: 'Each fall and spring, when the mainland moves its clocks (next on the first Sunday of November 2026 and the second Sunday of March 2027), Hawaii stays still. Your gap to the West Coast shifts by an hour, but your class time stays put.' }
        ] },
        { kind: 'spec', title: 'History in the database', p: 'Before 1947 the islands kept a half-hour offset, UTC minus 10:30, and the database records a brief stretch of daylight time in 1933, from April 30 to May 21. Students who convert old Hawaii time stamps learn why historical data needs the zone name, not a fixed offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A route from kindergarten blocks to AP, island to island',
    intro: 'Bands are approximate; the teacher in the free first session decides where to start.',
    cols: [
      { band: 'Grades K to 3', h3: 'Blocks and stories', p: 'Animated stories and simple games in blocks, with sequencing and loops at the center.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 6', h3: 'First Python', p: 'Turtle drawings, small games and an early look at how AI tools learn from examples.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 9', h3: 'Code and the web', p: 'Python with real data and websites built by hand, the skills behind the libraries project.', courses: ['python-complete-masterclass-teens', 'html-css-course-for-beginners-build-real-websites'] },
      { band: 'Grades 10 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles, or machine learning with models the student trains and tests.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI which island a coordinate is on, then check it',
    intro: 'A language model can guess an island from a latitude and longitude. A student with a bounding box can prove it.',
    p1: 'AI assistants are often right about well-known places and quietly wrong about edge cases, such as a point near the channel between Maui and Molokai. A guess delivered fluently is still a guess, and there is no way to tell from the answer alone.',
    p2: 'The bounding-box project gives students a method they can verify: four comparisons, a check against a labeled list, and a count of disagreements. Once they can do that, an AI tool becomes something to test rather than something to trust.',
    closer: 'With fewer Hawaii students taking computer science each year in the published data, the ones who learn to verify an answer stand out.',
    blogAnchor: 'our view on learning to code with AI around'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Hilo to Hanalei, no inter-island flight required',
    intro: 'For neighbor-island families, a live online class removes the biggest barrier: distance.',
    cells: [
      { h3: 'Flexible scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Small live groups', p: 'A batch brings together fifteen to twenty learners of similar ability from Hawaii and the mainland, all with the same live teacher.' },
      { h3: 'One-to-one', p: 'A private teacher for AP preparation, a larger project or a student whose school offers no computer science course.' },
      { h3: 'Alongside school', p: 'Teachers work with US grade levels and can connect lessons to school courses, while graded school work remains the student\'s own.' },
      { h3: 'Try it free', p: 'Your student spends one whole session coding with a teacher. At the end you get honest advice on level and course, and nothing is charged or stored.' },
      { h3: 'Home setup', p: 'Any laptop or desktop will do, plus headphones or speakers. A steady home broadband line matters more than a fast computer.' }
    ],
    spec: { title: 'No Hawaii office', p: 'Teachers work live from India. Modern Age Coders has no premises in Hawaii and claims none, and we are not connected with the Hawaii State Department of Education, the Board of Education or the public library system.' }
  },

  fees: {
    h2: 'What classes cost in Hawaii',
    intro: 'The same three amounts as everywhere in the US, in US dollars.',
    first: 'A free introductory lesson that ends with a level and course suggestion.',
    group: 'A month of live batch lessons with fifteen to twenty students at your level.',
    private: 'A month of private lessons with a single teacher, on a regular weekly schedule.',
    closer: 'Kauai, Maui or Honolulu, the monthly figure in US dollars is identical and there is no neighbor-island extra. Nothing is due before the trial lesson, and our pricing page sets out how holidays and missed sessions are handled.'
  },

  reviewsH2: 'Reviews from families, on Google',

  book: {
    h2: 'Book a free lesson for a Hawaii student',
    intro: 'Tell us the grade and what interests them, whether that is a first Scratch game, Python for a middle schooler, or AP Computer Science Principles for a junior whose school does not teach it.',
    success: 'Thank you. We will be in touch soon to arrange a class for your Hawaii student.'
  },

  faq: {
    h2: 'Hawaii families ask',
    intro: 'Common questions from parents and students across the islands.',
    items: [
      { q: 'How many credits does a Hawaii diploma need?', a: 'Board of Education Policy 102-15 sets a minimum of 24.0 credits, including 4.0 English, 4.0 social studies, 3.0 mathematics, 3.0 science and 6.0 electives.' },
      { q: 'Is computer science required to graduate in Hawaii?', a: 'Policy 102-15 does not name computer science among its course areas. A school computer science course would usually count as an elective or within the CTE option.' },
      { q: 'How many Hawaii high schools offer computer science?', a: 'The 2025 Code.org sheet reports 46 of 69, or 66.7%, for 2024 to 2025, down from 77% in 2021 to 2022.' },
      { q: 'How many Hawaii students take computer science?', a: 'For 2024 to 2025 the sheet reports 1,317 of 51,961 high school students, or 2.53%, using an NCES fall 2022 student total.' },
      { q: 'Do class times change in Hawaii when the mainland changes clocks?', a: 'No. Hawaii stays on HST all year, so your class time is fixed; only the gap to mainland time zones changes.' },
      { q: 'What timing options are there?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can students on Molokai or Lanai join?', a: 'Yes. Any island works if the home connection supports a video call; audio and screen sharing matter most for coding lessons.' },
      { q: 'Why does this page not describe Hawaii\'s CS standards?', a: 'The Department of Education and legislature sites blocked our automated requests in October 2026, and we only print rules we have read at the source.' },
      { q: 'Are lessons taught in Hawaii?', a: 'No. All lessons are live online with teachers based in India, and we do not claim any Hawaii location.' },
      { q: 'Where can I see the fees?', a: 'In the fees section on this page: a free first lesson, then a monthly batch or 1-on-1 plan in US dollars, billed only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More reading for Hawaii students',
    html: 'Middle schoolers can browse <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a> and <a class="cg-inline-link" href="/python-games-for-kids">Python games for kids</a>. High schoolers can read about <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> and <a class="cg-inline-link" href="/coding-competitions-for-high-school-students">coding competitions for high school students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hawaii and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States index' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/python-games-for-kids', label: 'Python games' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' }
  ],

  personalityCss: `
.cg-root.cg-ah .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.5vw, 2.7rem); }
.cg-root.cg-ah .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-ah .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-ah .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-ah .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-ah .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.9rem); }
.cg-root.cg-ah .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ah .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ah .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-ah .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Hawaii, read raw 18 October 2026. HIDOE (hawaiipublicschools.org), capitol.hawaii.gov and governor.hawaii.gov returned Cloudflare blocks; nothing quoted from them. Board of Education Policy 102-15 (amended 02/12/2026): 24.0 credits total, area credits as listed, Algebra 1 and Geometry, Biology, 6.0 electives, proficiency based equivalents, same requirement for students with disabilities; computer science not named. Code.org (2025): access 57% to 77% (2021-22) to 66.7% (46 of 69, State Education Agency and School Catalogs); participation 4.4% to 2.53% (1,317 of 51,961). College Board 76, 75 (47 public). IANA Pacific/Honolulu: -10:30 to 1947 Jun 8, HDT 1933 Apr 30 to May 21, HST since.',
    localProject: 'Hawaii Statewide GIS Program, Public Libraries in the State of Hawaii (geodata.hawaii.gov Infrastructure MapServer 28; public domain terms), count 51, downloaded 18 October 2026: island field Oahu 25, Hawaii 12, Kauai 6, Maui 6, Lanai 1, Molokai 1; our bounding boxes agree for 51 of 51; latitudes 19.06 to 22.21, longitudes -159.67 to -154.94; Saturday open 28, Sunday 3; computer classes listed 20. Lesson family: bounding-box filtering.',
    requiredMentions: [
      'Policy 102-15',
      '02/12/2026',
      '6.0 elective credits',
      '46 of 69',
      '1,317 of 51,961',
      'June 8, 1947',
      'April 30 to May 21',
      '51 of 51',
      'lon_min <= x <= lon_max',
      '-159.67 to -154.94',
      '15 hours 30 minutes'
    ],
    sources: [
      { claim: 'Hawaii State Board of Education: Policy 102-15, High School Graduation Requirements and Commencement.', url: 'https://boe.hawaii.gov/wp-content/uploads/policy_102-15_20260212.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Hawaii access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Hawaii Statewide GIS Program: Public Libraries in the State of Hawaii.', url: 'https://geodata.hawaii.gov/arcgis/rest/services/Infrastructure/MapServer/28' },
      { claim: 'IANA tzdb northamerica: Pacific/Honolulu zone history.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Hawaii CS standards, any statute on CS course offerings and HIDOE guidance: hawaiipublicschools.org, capitol.hawaii.gov and governor.hawaii.gov returned Cloudflare blocks on 18 October 2026; not retried around.',
      'Causes of the access decline: not claimed; possible factors are named as possibilities only.',
      'Code.org gender, race, geography and graduation figures and the Code.org Hawaii summary text: not used.',
      'Library addresses, phone numbers, parking fees and building costs from the layer: not printed.',
      'Current library opening hours: the layer values are reported as of the download, not as a timetable.',
      'Any affiliation with HIDOE, the Board of Education, the Hawaii State Public Library System, the Statewide GIS Program, Code.org or the College Board.'
    ]
  }
};
