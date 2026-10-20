'use strict';
// Arizona (cg- state page, US cluster Phase 4, row 65). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Arizona law lets a rigorous computer science course stand in for a math course toward graduation, and the
// state keeps the same clock all year. What does the statute actually allow, what do the access numbers show, and what
// can a student filter out of Tucson's park data? Sources read raw on 17 and 18 October 2026
// (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-arizona/):
//  - azed.gov home 403 and azsbe.az.gov 403 on 17 October 2026 (curl -A Mozilla/5.0): stopped; nothing quoted.
//  - Arizona Revised Statutes (azleg.gov), 15-701.01: the governing board "may approve a rigorous computer science course
//    that would fulfill a mathematics course required for graduation from high school", only if it "includes significant
//    mathematics content" and the school "has sufficient capacity, infrastructure and qualified staff, including competent
//    teachers of computer science"; the state board prescribes graduation competency requirements "incorporating the
//    academic standards in at least the areas of reading, writing, mathematics, science and social studies".
//  - ARS 15-249.12: "computer science professional development program fund"; grants "on a first-come, first-served
//    basis" to "public schools that do not currently provide high school computer science courses"; training must address
//    "academic standards for computer science, as adopted by the state board of education"; priority includes rural
//    schools (15-249.13); up to "two percent" for administration; school reports by June 30, department report by
//    November 15. ARS 15-249.13: "rural" county tests (ten percent of state population; ten miles; fifty thousand).
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): AZ access 38%
//    (2019-20), 36% (2020-21), 43.2% (2023-24), other years blank; Most Recent Access 278 of 643, 2023-2024, "State
//    Education Agency". Participation 2.3% (2020-21), 3.84% (2023-24); Most Recent 14,180 of 368,829 (NCES Fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: Arizona 277 (2023), 293 (2024); public 232, 257.
//  - IANA tzdb: zone1970.tab America/Phoenix "MST - AZ (most areas), Creston BC"; northamerica Zone America/Phoenix ends
//    "-7:00 - MST" after "1968 Mar 21"; comment: "Presently, only the Navajo Nation participates in the Daylight Saving
//    Time policy" (1987 quote) and "See America/Denver for a zone appropriate for the Navajo Nation."
//  - City of Tucson, Park Properties layer (tucsondata_cotgis, "Property owned by the Tucson Parks and Recreation
//    Department"), licence: data provided "as is", not guaranteed. Downloaded 17 October 2026, count query 217.
//    Our filters: WATER contains Reclaimed 47 (Neighborhood 14, Community 10, Metro 9, School Park 6, Regional 3, Mini 2,
//    Maintenance Responsibility 2, Golf Course 1); WATER Potable only 107; "--" 62; Acreage at least 100: 11 (Regional 5,
//    Metro 5, Golf Course 1), 6 of them also reclaimed; Neighborhood Park 65; Mini Park 34, all under 1 acre; 1 record
//    without acreage. Individual school names in NAME are never printed.
// Lesson family: filtering records with conditions (and, or, contains) and testing a filter.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ARIZONA', label: 'Arizona', blurb: 'Coding and AI for Arizona students, where a rigorous CS course can count as a math credit, with a Tucson reclaimed-water parks project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-arizona',
  code: 'aiar',
  accent: '#8A5721',
  accentRationale: 'Arizona: #8A5721, a muted canyon sandstone brown, allocated in alloc.tsv row 65 and separate from the other US accents; above 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Arizona',
    eyebrow: 'Arizona, United States',
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
  routeLabel: 'Arizona',
  title: 'Coding and AI Classes in Arizona | Live Online, MST',
  description: 'Coding and AI classes for Arizona students, live online on Mountain Standard Time: the CS-for-math credit law, published access counts, and a Tucson parks project.',
  ogDescription: 'Arizona lets a rigorous computer science course count toward a math credit. What the statute says, what access looks like, and live online classes on Arizona time.',
  twitterDescription: 'Arizona coding and AI classes, live online, built around the state\'s CS-as-math rule.',
  ogImageCourse: 'ap-computer-science-a-java-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Arizona Students',
    description: 'Level-matched online Scratch, Java, JavaScript, Python and AP Computer Science A for Arizona students from elementary to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in Arizona',
  capsuleQ: 'Can computer science count as a math credit in Arizona?',
  capsule: 'Yes, where the district agrees. Section 15-701.01 of the state\'s statutes allows a local board to treat a demanding computer science class as one of the math courses a diploma needs, provided it carries significant mathematics content and the school can staff it. Modern Age Coders teaches coding, AI and AP Computer Science A live online for Arizona students in grades K to 12, in batches or 1-on-1.',
  lead: 'Arizona does not require every student to take computer science, but its law opens an unusual door: a demanding computer science course, approved locally, can take the place of one of the math courses a diploma needs. The same statutes set up a grant fund for schools that have no high school computer science yet. This page reads those sections as the legislature publishes them, sets out the access and enrollment counts from the 2025 Code.org data, explains why an Arizona class time never shifts in March, and turns Tucson\'s park list into a lesson on filtering data correctly.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Arizona.',

  picks: {
    eyebrow: 'Course picks for Arizona',
    h2: 'Four routes for Arizona learners',
    intro: 'Two of them carry real math weight, which matters if a student\'s district counts computer science toward the math requirement.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades K to 5', note: 'Real games in Scratch, building the logic and coordinate sense that later math and code rely on.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 6 to 9', note: 'Interactive web pages and browser games, with conditions and loops used on every page.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Grades 8 to 12', note: 'Object-oriented Java with algorithm practice, groundwork for a math-heavy school CS course.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science A: Java, free-response practice and the exam format, beside a school section.' }
    ]
  },

  sections: [
    {
      id: 'statute', tint: '', eyebrow: 'What the law says',
      h2: 'When a computer science course can stand in for math',
      intro: 'Arizona\'s Department of Education and State Board of Education sites returned errors to our requests, so this section quotes the Arizona Revised Statutes directly, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Computer science in the Arizona Revised Statutes, Title 15', head: ['Section', 'What it provides'], rows: [
          ['15-701.01', 'Diploma competencies are set by the state board and must draw on the standards for, at a minimum, reading, writing, math, science and social studies'],
          ['15-701.01', 'A local board is allowed to let one rigorous computer science class stand in for a required high school math course'],
          ['15-701.01, the conditions', 'Two tests: the class carries significant mathematics content, and the board judges that the school has the room, equipment and trained computer science teachers to run it'],
          ['15-249.12', 'A computer science professional development program fund, run by the Department of Education, gives grants first-come, first-served to public schools that do not currently provide high school computer science courses'],
          ['15-249.12, the training', 'Grant-funded teacher training must address the academic standards for computer science, as adopted by the state board of education'],
          ['15-249.13', 'Defines a rural school for these purposes, using county population and distance from a municipality of more than fifty thousand people']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '"May", not "must"', p: 'The statute says a governing board may approve such a course. Whether a given district has done so, and which courses qualify, is a local decision, so families should ask the school before counting on it.' },
          { h3: 'Math content is the test', p: 'A course earns the swap only with significant mathematics in it. Expect logic, algorithms, functions and data work, not a keyboarding or app-tour class.' },
          { h3: 'Teachers before courses', p: 'The grant fund pays for training teachers at schools with no high school computer science, with rural schools among the priorities, and each grantee reports its outcomes by June 30.' }
        ] },
        { kind: 'p', text: 'The fund\'s rules are specific: the department may keep up to two percent of deposits for administration, and it reports to the governor and legislative leaders by November 15 each year on how much was awarded and what it achieved. We have not read those reports, so we do not quote any grant totals. We also do not print a date for Arizona\'s computer science standards; the statute confirms the state board adopted them, but the board\'s own pages were not reachable.' }
      ]
    },
    {
      id: 'access', tint: 'tint', eyebrow: 'The numbers',
      h2: 'Computer science reaches 43.2% of Arizona high schools in the latest count',
      intro: 'Figures from the Code.org (2025) data sheet and the College Board for Arizona, quoted as published.',
      body: [
        { kind: 'table', caption: 'Arizona high schools offering computer science, years with a published value (Code.org, 2025, trend tab)', head: ['School year', 'Percent with CS'], rows: [
          ['2019 to 2020', '38%'],
          ['2020 to 2021', '36%'],
          ['2023 to 2024', '43.2%, given on the Most Recent Access Data tab as 278 of 643 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP schools in Arizona', head: ['Measure', 'Value', 'Source'], rows: [
          ['High school students in a CS course, 2023 to 2024', '14,180 of 368,829, or 3.84%', 'Code.org (2025); the student total is NCES, Fall 2022'],
          ['Same measure, 2020 to 2021', '2.3%', 'Code.org (2025), participation trend tab'],
          ['Schools giving AP exams, 2023', '277, of which 232 public', 'College Board, AP exams by state report, 2023-24'],
          ['Schools giving AP exams, 2024', '293, of which 257 public', 'College Board, same report']
        ] },
        { kind: 'p', text: 'Arizona\'s series has gaps: four of the seven school years in the trend tab are blank for Arizona, including the newest one, so 2023 to 2024 is as current as this data gets. The two numbers worth holding side by side are 43.2% of high schools offering the subject and 3.84% of high school students taking it. That is roughly one student in twenty-six, by our arithmetic, even counting only the latest year.' },
        { kind: 'p', text: 'Twenty-five more public schools gave AP exams in 2024 than in 2023. AP Computer Science A is a math-heavy course by design, which is why it is often the first candidate a district considers for the computer-science-for-math option. Suggested citation for the access and enrollment figures: Code.org (2025). 2025 State of AI + CS Education. We cite single Arizona values only.' }
      ]
    },
    {
      id: 'tucson', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Tucson parks are watered with reclaimed water? Filtering open data',
      intro: 'The City of Tucson publishes its Parks and Recreation property list as open data, with a field for each property\'s water source. In a desert city, that one column makes a good first lesson in filters.',
      body: [
        { kind: 'table', caption: 'Tucson park properties whose WATER field mentions Reclaimed, by TYPE (our filter on the city\'s Park Properties layer, downloaded 17 October 2026)', head: ['Property type', 'Our count'], rows: [
          ['Neighborhood Park', '14'],
          ['Community Park', '10'],
          ['Metro Park', '9'],
          ['School Park', '6'],
          ['Regional Park', '3'],
          ['Mini Park, Maintenance Responsibility', '2 each'],
          ['Golf Course', '1'],
          ['All types', '47 of 217 properties']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One condition', p: 'Exact matching misses things. WATER == "Reclaimed" finds just 1 property, because 46 more say "Potable and Reclaimed". A "contains" test finds all 47, and students see why the wording of a filter matters.' },
          { h3: 'Two conditions', p: 'Adding Acreage of at least 100 narrows the 217 properties to 11, and requiring reclaimed water as well leaves 6. Students write the and version, then the or version, and predict each count before running it.' },
          { h3: 'Test the filter', p: 'Every one of the 34 Mini Parks is under 1 acre, a quick sanity check that the acreage column behaves. One property has no acreage at all, so a careless numeric filter can crash or quietly skip it.' }
        ] },
        { kind: 'callout', h3: 'What "--" means is not ours to guess', p: 'Sixty-two records hold "--" in the water field and 107 say Potable alone. A dash might mean no irrigation, unknown, or not applicable. Students record the count and leave the meaning open; inventing a meaning would put words in the city\'s mouth.' },
        { kind: 'p', text: 'The City of Tucson provides the layer "as is" and says it is not guaranteed to be accurate, correct or complete, so every count above is ours, from one download, and not an official statement about Tucson\'s water use. The layer includes parks attached to school sites; we report those as a count by type and do not name any school.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Mountain Standard Time all year, except on the Navajo Nation',
      intro: 'Arizona is the state where the spring and fall clock changes mostly do not happen, and that makes scheduling simpler.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No clock change', p: 'In the IANA database, America/Phoenix covers most of Arizona and has stayed on MST, UTC minus 7, without daylight saving since 1968. A class at 5 pm in January is still 5 pm in July.' },
          { h3: 'The Navajo Nation', p: 'The database notes that the Navajo Nation does observe daylight saving, and points to America/Denver as the right zone there. Families on the Navajo Nation should tell us so we confirm times on their clock.' },
          { h3: 'India time, our sums', p: 'By our own subtraction, the gap between India and most of Arizona is a constant twelve and a half hours. On the Navajo Nation it narrows by an hour while daylight saving is in force.' }
        ] },
        { kind: 'spec', title: 'Why Arizona breaks naive code', p: 'Code that assumes "Mountain time means daylight saving in summer" puts a Phoenix student an hour off for the whole stretch between the March and November changes. Students compare America/Phoenix and America/Denver for the same instant and watch the one-hour gap appear and disappear, which teaches more about time handling than any rule of thumb.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Scratch in kindergarten to Java in senior year',
    intro: 'The bands below are rough; a student\'s first lesson sets the real pace.',
    cols: [
      { band: 'Grades K to 3', h3: 'Coordinates and sequences', p: 'Sprites that move on an x and y grid, loops and simple conditions, all in blocks.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 4 to 7', h3: 'Games with rules', p: 'Python and block games where if-statements decide what happens, the same logic as a data filter.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 8 to 10', h3: 'Web and Java basics', p: 'JavaScript on real pages, then Java classes and methods with plenty of algorithm practice.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'java-programming-masterclass-for-teens'] },
      { band: 'Grades 11 and 12', h3: 'AP and applied AI', p: 'AP Computer Science A, or machine learning in Python with careful testing of every model.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for "parks with reclaimed water" and count what comes back',
    intro: 'The Tucson filter is a neat test of whether a student, or a model, reads data carefully.',
    p1: 'A model asked to filter the Tucson list might match "Reclaimed" exactly and report 1 property, or match loosely and return 47. Both answers look confident. Only someone who has looked at the actual values in the WATER column can say which one answers the question that was asked.',
    p2: 'That is why Arizona\'s law asks for significant math content before computer science replaces a math course: the subject is about precise reasoning. Students who learn to state a condition exactly can then use AI tools to write the code faster, without handing over the thinking.',
    closer: 'A computer science credit is worth most to the student who can explain, line by line, why their filter returns the number it does.',
    blogAnchor: 'why learning to code still matters when AI can code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Phoenix, Tucson, Flagstaff or Yuma, the same live lesson',
    intro: 'An online class removes the long drives between Arizona\'s cities and its rural and tribal communities.',
    cells: [
      { h3: 'Pick your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Groups by level', p: 'A batch holds fifteen to twenty students at a similar stage, from Arizona and the rest of the US, with one teacher present live.' },
      { h3: '1-on-1 for depth', p: 'A private teacher suits students aiming at AP Computer Science A or a math-heavy district course, and anyone who wants a faster pace.' },
      { h3: 'Fits the school plan', p: 'Teachers use US grade levels and can align practice with a school course, but anything graded at school remains the student\'s own work.' },
      { h3: 'Start free', p: 'The first lesson costs nothing and ends with a recommended course and level. We ask for no payment details at that point.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, sound, and an internet connection steady enough for a video call is all a student needs.' }
    ],
    spec: { title: 'No Arizona campus', p: 'All teaching is live online from India. Modern Age Coders has no center in Arizona and claims none, and we are not connected with the Arizona Department of Education, the State Board of Education or any district.' }
  },

  fees: {
    h2: 'What lessons cost Arizona families',
    intro: 'Three clear amounts in US dollars.',
    first: 'A full trial lesson with no charge, ending with a recommended level and plan.',
    group: 'A month of batch classes with fifteen to twenty students at the same stage.',
    private: 'A month of private lessons on the same schedule, one teacher for one student.',
    closer: 'Arizona families pay the single US rate in US dollars, Flagstaff or Sierra Vista alike. No charge applies until the trial lesson is finished and a plan agreed; see the pricing page for holiday breaks and missed lessons.'
  },

  reviewsH2: 'What families say on Google',

  book: {
    h2: 'Request a free lesson for an Arizona student',
    intro: 'Let us know the grade and the goal, whether that is a first Scratch game, help deciding on a math-heavy CS course, or AP Computer Science A practice.',
    success: 'Thank you. We will reach out shortly about a class for your Arizona student.'
  },

  faq: {
    h2: 'Arizona coding questions',
    intro: 'What Arizona parents and students ask us before starting.',
    items: [
      { q: 'Does Arizona require computer science to graduate?', a: 'The statute lists graduation standards in at least reading, writing, mathematics, science and social studies; computer science is not among them. A rigorous CS course may instead count toward math.' },
      { q: 'Can computer science replace a math course in Arizona?', a: 'It can, by local approval. The statute lets a district board count a demanding CS class as a required math course when the class is math-heavy and properly staffed.' },
      { q: 'Does every Arizona district allow that swap?', a: 'Not necessarily. The law says a board may approve it, so the decision is local. Ask your high school which courses, if any, count toward the math requirement.' },
      { q: 'How many Arizona high schools offer computer science?', a: 'Code.org\'s 2025 data puts the 2023 to 2024 share at 43.2% of Arizona high schools, a figure it draws from the state education agency.' },
      { q: 'What share of Arizona students take computer science?', a: 'For 2023 to 2024 the sheet reports 14,180 of 368,829 high school students, or 3.84%, using an NCES fall 2022 student total.' },
      { q: 'Do Arizona class times change in March and November?', a: 'Not for most families. America/Phoenix stays on MST all year. Families on the Navajo Nation, which observes daylight saving, should tell us so we can confirm their times.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Will your course count as school credit?', a: 'No. Credit comes only from courses your district approves. Our classes add depth and AP preparation alongside them, and graded school work stays the student\'s own.' },
      { q: 'Is there a Modern Age Coders office in Phoenix or Tucson?', a: 'No. Our teachers work from India and teach over video, and we claim no Arizona premises or school partnership.' },
      { q: 'Where can I see prices?', a: 'In the fees section of this page: a free trial lesson, then a monthly batch or monthly 1-on-1 plan, in US dollars, with billing only after the trial.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Arizona families',
    html: 'A student deciding on the AP route might start with our page on <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Middle schoolers starting on the web can try <a class="cg-inline-link" href="/javascript-for-kids">JavaScript for kids</a>, high schoolers can compare <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a>, and future security specialists can look at <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Arizona and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States overview' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/javascript-for-kids', label: 'JavaScript for kids' },
    { href: '/cybersecurity-classes-for-teens', label: 'Teen cybersecurity' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiar .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.6vw, 2.8rem); }
.cg-root.cg-aiar .cg-hero h1 { font-weight: 690; letter-spacing: -0.012em; line-height: 1.1; }
.cg-root.cg-aiar .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aiar .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-aiar .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.008em; }
.cg-root.cg-aiar .cg-grid-3 { gap: clamp(1.1rem, 2.4vw, 2rem); }
.cg-root.cg-aiar .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-aiar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiar .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aiar .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Arizona, read raw 17 October 2026. azed.gov and azsbe.az.gov 403; nothing quoted from them. ARS 15-701.01 (graduation standards areas; a rigorous CS course may fulfill a math course; significant mathematics content; capacity, infrastructure, qualified staff). ARS 15-249.12 (CS professional development program fund; first-come, first-served grants to schools without HS CS; standards adopted by the state board; two percent administration; June 30 and November 15 reports). ARS 15-249.13 (rural definition). Code.org (2025): 38%, 36%, 43.2% (278 of 643, 2023-24); 14,180 of 368,829, 3.84%. College Board AP schools 277 (2023), 293 (2024). IANA America/Phoenix MST since 1968, Navajo Nation DST, America/Denver.',
    localProject: 'City of Tucson Park Properties layer (tucsondata_cotgis; provided "as is"), downloaded 17 October 2026, count 217: our filters WATER contains Reclaimed 47 (14 Neighborhood, 10 Community, 9 Metro, 6 School Park, 3 Regional, 2 Mini, 2 Maintenance Responsibility, 1 Golf Course), exact Reclaimed 1, Potable only 107, "--" 62, Acreage at least 100: 11, of which reclaimed 6; Mini Park 34 all under 1 acre; 1 without acreage. Lesson family: filtering with conditions.',
    requiredMentions: [
      '15-701.01',
      'significant mathematics content',
      'first-come, first-served',
      '15-249.13',
      'one student in twenty-six',
      '14,180 of 368,829',
      '293, of which 257 public',
      '34 Mini Parks',
      'Navajo Nation',
      '47 of 217 properties',
      'Potable and Reclaimed'
    ],
    sources: [
      { claim: 'ARS 15-701.01: graduation requirements and the computer science course that may fulfill a math course.', url: 'https://www.azleg.gov/ars/15/00701-01.htm' },
      { claim: 'ARS 15-249.12: computer science professional development program fund.', url: 'https://www.azleg.gov/ars/15/00249-12.htm' },
      { claim: 'ARS 15-249.13: definition of rural.', url: 'https://www.azleg.gov/ars/15/00249-13.htm' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Arizona access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Tucson: Park Properties feature layer.', url: 'https://services3.arcgis.com/9coHY2fvuFjG9HQX/arcgis/rest/services/TPRD_PROPERTIES_OMS_AGOVW/FeatureServer' },
      { claim: 'IANA tzdb: America/Phoenix, the Navajo Nation note and America/Denver.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Arizona CS standards adoption date and any Department of Education guidance: azed.gov and azsbe.az.gov returned 403 on 17 October 2026, not retried around.',
      'Which Arizona districts have approved a CS-for-math course: not published in what we read; families are told to ask locally.',
      'Grant totals from the CS professional development fund: the annual reports were not read, so no amount is printed.',
      'The free and reduced-price lunch priority in 15-249.12: not used (no income or identity content).',
      'Code.org gender, race, geography and graduation figures and the Code.org Arizona summary text: not used.',
      'Names of schools attached to Tucson school parks: not printed; counts by type only.',
      'Any meaning for the "--" water value: not inferred.',
      'Any affiliation with the Arizona Department of Education, the State Board, the City of Tucson, Code.org or the College Board.'
    ]
  }
};
