'use strict';
// Washington, DC (cg- state-level page, US cluster Phase 4, row 108). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: data-led. How many high schools in the District offer computer science, what is happening to DC's graduation
// requirements, and where does CS sit in that rewrite? Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-washington-dc/):
//  - osse.dc.gov (Office of the State Superintendent of Education): its search path returned 403 on 17 October 2026;
//    the host was treated as blocked from then on and nothing from it is used (BLOCKED-osse.txt).
//  - DC State Board of Education (sboe.dc.gov), letter to OSSE dated May 29, 2026: the State Board "advises the Office
//    of the State Superintendent of Education (OSSE) on state regulations and approves high school graduation requirements
//    recommended by OSSE" (footnote D.C. Code 38-2652(a)); OSSE shared draft revisions at the State Board's working
//    session on September 30, 2025; supports "adding a required 0.5 credits of financial literacy"; supports "maintaining
//    required mathematics credits at 4.0" with Integrated Math III as the equivalent to Algebra II; "does not support
//    reducing required science credits to 3.0"; "supports a proposal to allow students to earn elective credit through
//    out-of-school-time programs approved by OSSE"; intends to vote "at the public meeting on August 19, 2026".
//    The words "computer" and "computing" do not appear in the letter (grep count 0).
//  - SBOE High School Graduation Requirements Task Force final report, 2026-05-05: "The task force met from October 2025
//    through April 2026"; "met eight times"; "three public engagement sessions and conducted a survey with 157
//    respondents"; competency-based elective credit through OSSE-approved out-of-school-time programs: "eight votes in
//    favor, six votes against, and one abstention". "computer" grep count 0.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access tabs only; DC has no participation data):
//    20% (2018-19), 41%, 37%, 45%, no figure 2022-23, 53.5% (2023-24), 60% (2024-25: 27 of 45, source "School Course
//    Catalogs and Teacher Surveys").
//  - College Board, School Report of AP Exams by State 2023-24: District of Columbia schools with AP exams 53 (2023), 56
//    (2024); public 33 and 38; non-public 20 and 18.
//  - IANA tzdb: America/New_York "Eastern (most areas)"; US rule, November 1, 2026 and March 14, 2027.
//  - DC GIS, Capital Bikeshare Locations (opendata.dc.gov, Creative Commons Attribution 4.0 International), 868 rows,
//    count verified, downloaded 18 October 2026 (GIS_LAST_MOD 2026-10-18 01:37 UTC). REGION_NAME: Washington, DC 397,
//    Arlington, VA 111, Fairfax, VA 106, Alexandria, VA 71, Montgomery County, MD (South) 56, DCA-CABI 56, Prince George's
//    County 38, Montgomery County, MD (North) 23, Falls Church, VA 10. Ours for the 397 'Washington, DC' rows: CAPACITY sum
//    8,054 docks, mean 20.3, median 19, most common 19 (112 stations); largest Columbus Circle / Union Station 55;
//    HAS_KIOSK NO 116; snapshot at download: 3,353 bikes available, 21 stations with none.
// Lesson family: filter on a label, then describe a distribution (mean, median, mode), and tell a snapshot from a fixed attribute.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'WASHINGTON, DC', label: 'Washington, DC', blurb: 'Coding and AI for students in the District, with the published CS access figures, the graduation rewrite and a Capital Bikeshare data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-washington-dc',
  code: 'awd',
  accent: '#382A6B',
  accentRationale: 'Washington, DC: a muted dusk violet, #382A6B, allocated in alloc.tsv for row 108, dark enough to hold text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Washington, DC',
    eyebrow: 'District of Columbia, United States',
    schemaType: 'AdministrativeArea',
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
  routeLabel: 'Washington, DC',
  title: 'Coding and AI Classes in Washington, DC | Live Online',
  description: 'Live online coding and AI classes for students in Washington, DC: how many District high schools offer CS, the graduation rewrite, and a Capital Bikeshare project.',
  ogDescription: 'Sixty percent of District high schools offered computer science in 2024 to 2025. The figures, the graduation rewrite and live online classes for DC students.',
  twitterDescription: 'Washington, DC coding and AI classes, live online, with a Capital Bikeshare data project.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Washington, DC Students',
    description: 'Live online Scratch, Python, web development, AP Computer Science and AI for students in the District of Columbia, from elementary school to twelfth grade.'
  },

  h1: 'Coding and AI classes in Washington, DC',
  capsuleQ: 'How many high schools in Washington, DC offer computer science?',
  capsule: 'In 2024 to 2025 the answer was 27 of 45, or 60%. Code.org&rsquo;s 2025 sheet builds the District figure from school course catalogs and teacher surveys. That is up from 20% in 2018 to 2019. Modern Age Coders adds live online classes for DC students, from Scratch in elementary school to AP Computer Science and AI in high school.',
  lead: 'The District is small enough that every high school fits in a short list, which makes its computer science figures unusually easy to read: one school more or less moves the share by about two points. In six years the reported share tripled. At the same time, the District is rewriting its high school graduation requirements, and the State Board of Education documents we read in October 2026 discuss financial literacy, mathematics, science and career preparation, but never computer science. This page sets out both, then shows a data project that students can run on the District&rsquo;s own Capital Bikeshare records.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Washington, DC.',

  picks: {
    eyebrow: 'Course picks for DC',
    h2: 'Four places a District student can begin',
    intro: 'A short list to start a conversation. The free first lesson tests the level and settles the choice.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades 1 to 5', note: 'Drag-and-drop programs that turn into small games, so a young student learns loops and events by playing with them.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'A first typed language with small AI experiments, sized for middle school attention spans.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 9 to 12', note: 'The Create performance task and the multiple-choice exam, for students whose school does not run AP CSP or wants extra support.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Public data, pandas and charts, starting from a dataset like the bikeshare stations below.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'Access in the District',
      h2: 'From one in five high schools to three in five',
      intro: 'The District&rsquo;s computer science access figures, as published in Code.org (2025), 2025 State of AI + CS Education. For DC the primary source is school course catalogs and teacher surveys, not a state education agency feed.',
      body: [
        { kind: 'table', caption: 'Share of District of Columbia high schools offering foundational computer science, by school year (Code.org, 2025)', head: ['School year', 'Reported share'], rows: [
          ['2018 to 2019', '20%'],
          ['2019 to 2020', '41%'],
          ['2020 to 2021', '37%'],
          ['2021 to 2022', '45%'],
          ['2022 to 2023', 'No figure in the sheet'],
          ['2023 to 2024', '53.5%'],
          ['2024 to 2025', '60%, which is 27 of 45 high schools']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Small numbers move fast', p: 'With 45 high schools in the count, each one is worth about 2.2 percentage points. A dip such as 41% to 37% can be two schools, so read the trend across several years rather than one step.' },
          { h3: 'A different kind of source', p: 'Most states in the sheet report through their education agency. The District&rsquo;s figures come from course catalogs and teacher surveys, which is worth knowing before comparing DC with a state.' },
          { h3: 'No enrollment figure', p: 'The participation tabs show a dash for the District in every year, so we cannot say how many DC students actually took computer science. We print no estimate in its place.' }
        ] },
        { kind: 'table', mt: true, caption: 'District schools where students sat AP exams, from the College Board&rsquo;s 2023-24 state-by-state school report', head: ['Exam year', 'Total', 'Public', 'Non-public'], rows: [
          ['2023', '53', '33', '20'],
          ['2024', '56', '38', '18']
        ] },
        { kind: 'p', text: 'To cite the access figures, use Code.org (2025). 2025 State of AI + CS Education. The District values above were read from its raw sheet, which this page quotes but does not reproduce.' }
      ]
    },
    {
      id: 'rewrite', tint: 'deep', eyebrow: 'The graduation rewrite',
      h2: 'DC is redesigning its diploma, and computer science is not in the draft we read',
      intro: 'In the District, OSSE recommends high school graduation requirements and the State Board of Education approves them. We could not read OSSE&rsquo;s site (its search returned an error on 17 October 2026), so this section uses the State Board&rsquo;s own published documents.',
      body: [
        { kind: 'table', caption: 'The State Board&rsquo;s May 29, 2026 letter to OSSE on the draft revisions (quoted and summarized from the letter)', head: ['Topic', 'State Board position'], rows: [
          ['Who decides', 'The State Board advises OSSE and approves high school graduation requirements recommended by OSSE, citing D.C. Code &sect; 38-2652(a)'],
          ['Starting point', 'OSSE shared the draft revisions at the State Board&rsquo;s working session on September 30, 2025'],
          ['Mathematics', 'Keep 4.0 required credits, and allow Integrated Math III as the equivalent to Algebra II'],
          ['Science', 'Does not support reducing required science credits to 3.0'],
          ['Financial literacy', 'Supports adding a required 0.5 credits of financial literacy'],
          ['Credit outside school', 'Supports a proposal to allow elective credit through out-of-school-time programs approved by OSSE'],
          ['Next step', 'The letter says the Board looked forward to voting at the public meeting on August 19, 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How the advice was built', p: 'The State Board&rsquo;s task force met eight times between October 2025 and April 2026, ran three public engagement sessions and surveyed 157 respondents before sending its final report in May 2026.' },
          { h3: 'A close vote on outside credit', p: 'The proposal to let students earn elective credit in OSSE-approved programs outside school passed the task force with eight votes in favor, six against and one abstention. Narrow support, not a done deal.' },
          { h3: 'What we could not confirm', p: 'Neither document mentions computer science. We did not read the outcome of the August 2026 vote, so check the State Board and OSSE for the requirements that finally apply to your student&rsquo;s class year.' }
        ] },
        { kind: 'callout', h3: 'Would our classes count for credit?', p: 'No, and we do not claim they would. The out-of-school credit proposal covers programs approved by OSSE, and Modern Age Coders is not one. Families should treat our classes as extra depth, projects and AP preparation, alongside the courses their school offers.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'What is a typical Capital Bikeshare station in the District? Mean, median and a mystery label',
      intro: 'DC GIS publishes every Capital Bikeshare station in the region as open data under a Creative Commons Attribution 4.0 licence. We downloaded all 868 rows on 18 October 2026 and asked a question that sounds simple.',
      body: [
        { kind: 'table', caption: 'Stations by REGION_NAME in the DC GIS layer (counts from the download)', head: ['REGION_NAME', 'Stations'], rows: [
          ['Washington, DC', '397'],
          ['Arlington, VA', '111'],
          ['Fairfax, VA', '106'],
          ['Alexandria, VA', '71'],
          ['Montgomery County, MD (South)', '56'],
          ['DCA-CABI', '56'],
          ['Prince George&rsquo;s County', '38'],
          ['Montgomery County, MD (North)', '23'],
          ['Falls Church, VA', '10']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Filter first', p: 'A District dataset is not the same as District stations. More than half the rows carry a Virginia or Maryland region name, so a student who averages everything is answering the wrong question. Filtering to the 397 rows labelled Washington, DC is step one.' },
          { h3: 'Then describe', p: 'Across those 397 stations our CAPACITY sum is 8,054 docks. The mean is 20.3 docks, the median 19, and the most common size, 19 docks, appears at 112 stations. Three different answers to &ldquo;typical&rdquo;, each defensible.' },
          { h3: 'Then find the outlier', p: 'The largest station in our filtered rows is Columbus Circle / Union Station with 55 docks, nearly three times the median. A single big value pulls the mean up, which is why the median sits lower.' }
        ] },
        { kind: 'p', text: 'Now the mystery. Fifty-six rows have the region name DCA-CABI, and the layer does not explain it. The letters might point to a place, a program or an internal code, and a careful analyst does not guess: the station names and coordinates are there to investigate, and until the student has evidence, those rows stay out of the District count rather than being quietly folded in.' },
        { kind: 'p', text: 'The layer also mixes two kinds of field. CAPACITY is a fixed attribute of a station. NUM_BIKES_AVAILABLE is a live snapshot: in our download, 3,353 bikes were available at District stations and 21 stations had none. Download again an hour later and those numbers change, while capacity does not. Students learn to label which numbers describe a moment and which describe the system. All figures in this section are our own calculations from one download, not Capital Bikeshare or DC government statistics.' },
        { kind: 'spec', title: 'A time zone hiding in the data', p: 'The layer&rsquo;s modification stamp reads 01:37 UTC on October 18, 2026, which was 9:37 pm on October 17 in the District. Converting it correctly with the America/New_York zone is the first bug most students meet in this project.' }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'Grade by grade',
      h2: 'A computer science plan for a DC student, elementary to senior year',
      intro: 'Our suggestions, built around what the District publishes and what it does not.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Elementary', p: 'Blocks, puzzles and short animations. The aim is a child who can explain why their program runs in the order it does, which matters more at seven than any particular language.' },
          { h3: 'Middle school', p: 'A first typed language, usually Python, and a first look at data. Students who arrive in ninth grade already comfortable with variables and loops get much more from any high school course.' },
          { h3: 'High school', p: 'With access at 60% of high schools, some DC students will find a CS course on their timetable and some will not. AP Computer Science Principles or A can be prepared alongside school either way; ask the school counselor how AP exams are arranged where your student studies.' }
        ] },
        { kind: 'p', text: 'Because the District&rsquo;s graduation requirements were still being revised when we read the documents, plan computer science as an addition to the required program, not as a replacement for any part of it. Our teachers ask each family about the school&rsquo;s offerings in the free first lesson and fit the course to what the student already has.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Classes on District time, written in Eastern Time',
      intro: 'The District follows the IANA zone America/New_York, labelled &ldquo;Eastern (most areas)&rdquo; in the time zone database.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Clocks in the region', p: 'Students across the District, Arlington and Montgomery County share one clock, which makes mixed regional batches easy to schedule.' },
          { h3: 'Our teachers', p: 'Teachers work from India, where clocks never change, so the gap to Eastern Time shifts by an hour twice a year. Every confirmation we send names the Eastern time to avoid confusion.' },
          { h3: 'Two dates to note', p: 'Under the US rule in the tz database, clocks fall back on November 1, 2026 and spring forward on March 14, 2027. Class times stay fixed in Eastern Time across both.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A route from first blocks to AP for District students',
    intro: 'Grades are a starting guide; placement comes from the free first lesson.',
    cols: [
      { band: 'Grades 1 to 5', h3: 'Play with logic', p: 'Block coding and small games that build sequencing and loops.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 8', h3: 'First real code', p: 'Python with small AI projects and simple web pages.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 9 to 10', h3: 'Data and the web', p: 'Python with files, JavaScript, and projects built on DC open data.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles or A, then machine learning with honest evaluation.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for the average bikeshare station and see what you get',
    intro: 'The answer depends on choices the question never mentioned.',
    p1: 'A chatbot asked for the average size of a District bikeshare station will probably average all 868 rows, Virginia and Maryland included, and report a mean without saying a median exists. It will not ask what DCA-CABI means. The arithmetic is correct and the answer is still wrong for the question.',
    p2: 'Students who have filtered, described and questioned the data themselves can read an AI answer critically: which rows did it use, which measure did it pick, which labels did it ignore? That is the skill our AI units build, with assistants used openly and every output checked.',
    closer: 'An AI tool can compute anything quickly; deciding what should be computed is still a human job, and it starts with writing code yourself.',
    blogAnchor: 'whether coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Anacostia to Tenleytown, one live online class',
    intro: 'No commute across town and no parking: the class runs at home.',
    cells: [
      { h3: 'At home in the District', p: 'A student in Anacostia and one in Tenleytown can share a session, each at their own desk, with a live teacher and classmates at the same level.' },
      { h3: 'DC school year', p: 'Teachers plan in US grades and around the school calendar and AP season. School assignments and assessed tasks always stay the student&rsquo;s own work.' },
      { h3: 'Free first lesson', p: 'A real task with a teacher, a level check, and a suggested course and time. We do not ask for payment details at this step.' },
      { h3: 'Level-matched batches', p: 'Fifteen to twenty students at a similar stage, from the District and across the US.' },
      { h3: 'Private lessons', p: 'One teacher, one student, for AP preparation, catching up or moving ahead quickly.' },
      { h3: 'Flexible timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'No DC office', p: 'Classes are taught live online from India. Modern Age Coders has no office, center or classroom in the District and claims none. A computer, a headset and a reliable connection are enough.' }
  },

  fees: {
    h2: 'Fees for families in the District',
    intro: 'Three numbers, the same for every family in the US.',
    first: 'A full first lesson without charge, ending with a level, a course and a time.',
    group: 'A month of live classes in a level-matched group of fifteen to twenty.',
    private: 'A month of live classes with a teacher for one student.',
    closer: 'Fees are charged in US dollars, and a family in Ward 3 pays what a family in Ward 8 pays. Billing begins only after the free lesson and once course and time are agreed; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'What families have written about us on Google',

  book: {
    h2: 'Request a free first lesson for a DC student',
    intro: 'Share the grade and interests. A fourth grader might build a block game, a seventh grader a first Python script, and a high schooler the bikeshare analysis.',
    success: 'Thank you. The team will contact you shortly about a class for your student in the District.'
  },

  faq: {
    h2: 'Questions DC families ask about coding and AI',
    intro: 'Each answer points to a source named above.',
    items: [
      { q: 'How many DC high schools offer computer science?', a: 'Code.org reports 27 of 45 District high schools, or 60%, offering foundational computer science in 2024 to 2025, based on school course catalogs and teacher surveys.' },
      { q: 'How has computer science access changed in DC?', a: 'The reported share rose from 20% in 2018 to 2019 to 60% in 2024 to 2025, with a dip from 41% to 37% along the way and no figure for 2022 to 2023.' },
      { q: 'How many DC students take computer science?', a: 'The 2025 Code.org data has no participation figure for the District in any year, so no reliable count is available from that source.' },
      { q: 'Is computer science a graduation requirement in DC?', a: 'The State Board documents we read in October 2026, a May 2026 letter and a task force report on the graduation rewrite, do not mention computer science. Check OSSE and the State Board for the final requirements.' },
      { q: 'Who sets graduation requirements in the District?', a: 'OSSE recommends them and the DC State Board of Education approves them, according to the State Board\'s May 29, 2026 letter, which cites D.C. Code 38-2652(a).' },
      { q: 'Can out-of-school classes earn credit in DC?', a: 'The State Board supported a proposal for elective credit through out-of-school-time programs approved by OSSE. Modern Age Coders is not an approved program, so our classes do not earn DC credit.' },
      { q: 'How many DC schools offer AP exams?', a: 'The College Board lists 53 District schools with AP exams in 2023 and 56 in 2024, of which 33 and 38 were public schools.' },
      { q: 'What time are classes for DC students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always confirmed in Eastern Time.', boiler: true },
      { q: 'Is there a Modern Age Coders site in Washington, DC?', a: 'No. Every class is live online with a teacher in India, and no DC office or classroom is claimed.', boiler: true },
      { q: 'Where can I see what classes cost?', a: 'The fees section on this page lists the free first lesson, the monthly group option and the monthly one-to-one option. Nothing is billed before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for students in the District',
    html: 'Students weighing AP can read about <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> or <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Summer planners can browse <a class="cg-inline-link" href="/computer-science-summer-programs-for-high-school-students">computer science summer programs for high school students</a>, and builders can enter the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge</a>. For a state that made CS a graduation requirement, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>, or go back to the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Washington, DC and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/computer-science-summer-programs-for-high-school-students', label: 'CS summer programs' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' }
  ],

  personalityCss: `
.cg-root.cg-awd .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-awd .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-awd .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-awd .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-awd .cg-table caption { font-weight: 700; text-align: left; font-style: italic; }
.cg-root.cg-awd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-awd .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-awd .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-awd .cg-callout { border-left-width: 3px; }
.cg-root.cg-awd .cg-faq-item h3 { font-weight: 650; }
`,

  dossier: {
    curriculumAuthority: 'District of Columbia, read raw 17 and 18 October 2026. osse.dc.gov treated as blocked after a 403 on its search path; nothing from it used. DC State Board of Education letter to OSSE, May 29, 2026 (Board approves requirements recommended by OSSE, D.C. Code 38-2652(a); draft shared September 30, 2025; mathematics 4.0 with Integrated Math III; science not reduced to 3.0; 0.5 credits financial literacy; elective credit through OSSE-approved out-of-school-time programs; vote planned August 19, 2026; no mention of computer science). SBOE task force final report, May 2026 (met October 2025 through April 2026, eight meetings, three engagement sessions, survey of 157; out-of-school elective credit 8 for, 6 against, 1 abstention; no mention of computer science). Code.org (2025) access 20%, 41%, 37%, 45%, dash, 53.5%, 60% (27 of 45, catalogs and teacher surveys); no participation data. College Board AP schools 53 and 56; public 33 and 38; non-public 20 and 18. IANA America/New_York.',
    localProject: 'DC GIS Capital Bikeshare Locations (CC BY 4.0), 868 rows downloaded 18 October 2026, count verified. REGION_NAME counts (Washington, DC 397; Arlington 111; Fairfax 106; Alexandria 71; Montgomery South 56; DCA-CABI 56; Prince George\'s 38; Montgomery North 23; Falls Church 10). Ours for the 397 DC rows: 8,054 docks, mean 20.3, median 19, mode 19 at 112 stations, largest Columbus Circle / Union Station 55; snapshot 3,353 bikes available and 21 empty stations; modification stamp 01:37 UTC October 18, 2026. Lesson family: filter on a label, describe a distribution, tell a snapshot from a fixed attribute.',
    requiredMentions: [
      '27 of 45',
      'school course catalogs and teacher surveys',
      '53.5%',
      'September 30, 2025',
      '0.5 credits of financial literacy',
      'eight votes in favor, six against and one abstention',
      '157 respondents',
      'August 19, 2026',
      '868 rows',
      '8,054 docks',
      'DCA-CABI'
    ],
    sources: [
      { claim: 'DC State Board of Education: letter to OSSE on draft revisions to high school graduation requirements, May 29, 2026.', url: 'https://sboe.dc.gov/release/sboe-shares-letter-osse-proposed-revisions-high-school-graduation-requirements' },
      { claim: 'DC State Board of Education: High School Graduation Requirements Task Force final report, May 2026.', url: 'https://sboe.dc.gov/sites/default/files/dc/sites/sboe/documents/2026-05-05_GraduationTaskForceRecommendations_FINALREPORT2.pdf' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: District of Columbia access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'DC GIS: Capital Bikeshare Locations layer, CC BY 4.0.', url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Transportation_Bikes_Trails_WebMercator/MapServer/5' },
      { claim: 'IANA tzdb northamerica and zone1970.tab: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Anything from osse.dc.gov: a 403 on its search path on 17 October 2026 ended requests to that host; no OSSE standards, course or requirement pages are quoted.',
      'That DC has no CS graduation requirement: not asserted; only that the two State Board documents read do not mention computer science.',
      'The outcome of the August 19, 2026 State Board vote: not read; not reported.',
      'The task force report sentence dating its meetings to "April 2025": a typo against its own "October 2025 through April 2026"; the latter is used.',
      'Any DC participation figure: the sheet shows a dash in every year; no estimate printed.',
      'The meaning of the DCA-CABI region label: unknown; posed as a question.',
      'That our classes earn credit under the out-of-school proposal: refused; we are not an OSSE-approved program.',
      'Code.org geography, size, gender or race tabs and the Code.org state narrative: not used.',
      'Any affiliation with OSSE, the DC State Board of Education, DC GIS, Capital Bikeshare, Code.org or the College Board.'
    ]
  }
};
