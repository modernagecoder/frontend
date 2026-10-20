'use strict';
// Delaware (cg- state page, US cluster Phase 4, row 69). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Delaware wrote computer science into its Code in one short section, 14 Del. C. 4139: a course in every public
// high school by 2020 to 2021, a math credit option from 2018 to 2019, and a waiver route. The published access numbers
// for a state with 57 high schools swing hard, and its two Code.org tabs disagree. So the lesson is percentages and
// rounding, run on the state park program list.
// Sources read raw on 17 to 19 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-delaware/):
//  - education.delaware.gov: sitemap.xml returned 403 Cloudflare "Attention Required" on 17 October 2026; not retried.
//  - Delaware Code, Title 14, Chapter 41 (delcode.delaware.gov), section 4139 "Computer science": (a) "By the 2020-2021
//    school year, all public high schools, including charter schools, shall offer at least 1 computer science course";
//    the Department "is directed to develop standards for computer science and seek approval of the State Board of
//    Education of such standards no later than December 31, 2017"; (b) "Beginning with the 2018-2019 school year", an
//    "advanced placement, honors, college prep or integrated computer science course, meeting the computer science and
//    mathematics standards" may "satisfy a mathematics graduation credit requirement with the exception of algebra I,
//    geometry, algebra II, or the equivalent courses"; (c) waiver if "a burden either financially or programmatically",
//    decided by "the Secretary of Education or designee"; source note "81 Del. Laws, c. 185".
//  - Delaware Code, Title 14, Chapter 1, section 122(b)(3): rules "Governing the issuance of certificates and diplomas"
//    are "proposed by the Secretary subject to approval by the State Board of Education".
//  - Code.org (2025), raw sheet (Access and Participation tabs only): DE access 65% (2018-19), 68%, 55%, 40% (2021-22),
//    blank 2022-23, 61.4% (2023-24), 61% (2024-25, trend tab); Most Recent Access 36 of 57, 2024-2025, source "School
//    Course Catalogs and Teacher Surveys" (36/57 = 63.2%, our division; the tabs disagree). Participation 4.0%
//    (2020-21), 4.9% (2021-22), no later values; no Most Recent participation figure.
//  - College Board, School Report of AP Exams by State 2023-24: Delaware 69 (2023), 69 (2024); public 45, 48; non-public 24.
//  - IANA tzdb northamerica: "Connecticut, Delaware, District of Columbia, most of Florida," under US eastern time.
//  - data.delaware.gov (Socrata) "State Park Programs" (pu7t-3gai), attribution "Department of Natural Resources and
//    Environmental Control, Division of Parks and Recreation", licence Public Domain; count query 4,077; downloaded
//    17 October 2026, 4,077 rows. Our results: 26 distinct park values; Trap Pond 460 (11.3%), Fort Miles 426 (10.4%),
//    Delaware Seashore 334 (8.2%), First State Heritage Park 329 (8.1%), Auburn Valley 324 (7.9%); top five 1,873 of
//    4,077 (45.9%); whole-number shares sum to 98, one-decimal shares to 99.7; five park values are fragments with 1 or 2
//    rows (Brandywine 2, Delaware 1, Cape 1, a doubled First State Heritage Park name 1, First State Heritage 1);
//    889 distinct program titles; start dates mostly 2022 to 2024, with 2 rows dated year 0203, 5 in 2001, 1 in 2028.
//    Program prices and phone numbers in the description text are not printed.
// Lesson family: percentages and rounding, and why rounded shares need not add up to 100.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'DELAWARE', label: 'Delaware', blurb: 'Coding and AI for Delaware students under 14 Del. C. 4139, with a rounding project on 4,077 state park programs.' },
  market: US,
  slug: 'coding-and-ai-classes-in-delaware',
  code: 'ad',
  accent: '#236142',
  accentRationale: 'Delaware: #236142, a muted salt-marsh green, allocated in alloc.tsv row 69 and distinct from the other US accents; above 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Delaware',
    eyebrow: 'Delaware, United States',
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
  routeLabel: 'Delaware',
  title: 'Coding and AI Classes in Delaware | Live Online Lessons',
  description: 'Coding and AI classes for Delaware students, live online: what 14 Del. C. 4139 requires, the CS-for-math credit, the access counts, and a state parks data project.',
  ogDescription: 'Delaware law puts a computer science course in every public high school and lets it count as a math credit. The rule, the numbers, and live online classes.',
  twitterDescription: 'Delaware coding and AI classes, live online, built around the state\'s computer science law.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '19 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Delaware Students',
    description: 'Level-matched online block coding, Python, AI projects and AP Computer Science for Delaware students from elementary to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in Delaware',
  capsuleQ: 'What does Delaware law say about computer science in high school?',
  capsule: 'Title 14, section 4139 of the Delaware Code says that by the 2020-2021 school year all public high schools, including charter schools, shall offer at least 1 computer science course, and from 2018-2019 a qualifying course may count as a math credit beyond Algebra I, Geometry and Algebra II. Modern Age Coders adds live online classes for Delaware students, in batches or 1-on-1.',
  lead: 'Delaware settled its computer science policy in a single section of state law, and it is short enough to read in a minute. It sets a course-offering duty with a deadline, lets the right kind of computer science course replace one of the required math credits other than Algebra I, Geometry and Algebra II, and allows a school to ask for a waiver. Because the state has only a few dozen high schools, its published access percentages jump around, and its two Code.org figures for the same year do not agree. That makes Delaware the perfect place to teach percentages carefully, which is what the state parks project on this page does.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Delaware.',

  picks: {
    eyebrow: 'Course picks for Delaware',
    h2: 'Courses that sit well beside Delaware school options',
    intro: 'One for each stage, from first blocks to the kind of course section 4139 lets count toward math. A teacher checks the level in a no-cost trial.',
    items: [
      { course: 'block-coding-app-development-masterclass', band: 'Grades 2 to 6', note: 'Apps built with blocks, so a young student sees code turn into something they can tap and share.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Grades 7 to 12', note: 'Python and web projects with AI assistants used carefully, including checks on every number the code prints.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science A, the type of advanced placement course the law names for the math credit option.' },
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', band: 'Grades 9 to 12', note: 'Plan, build and present a project under time pressure, for students who like to make things fast.' }
    ]
  },

  sections: [
    {
      id: 'statute', tint: '', eyebrow: 'The law',
      h2: 'Section 4139, Delaware\'s computer science law, in three parts',
      intro: 'Quoted from the Delaware Code, Title 14, Chapter 41, read on the state\'s official Code site on 17 October 2026. The Department of Education\'s own site blocked our requests, so the statute is the primary source here.',
      body: [
        { kind: 'table', caption: '14 Del. C. 4139, Computer science (enacted by 81 Del. Laws, c. 185)', head: ['Subsection', 'What it says'], rows: [
          ['(a) Offering', 'By the 2020-2021 school year, all public high schools, including charter schools, shall offer at least 1 computer science course'],
          ['(a) Standards', 'The Department of Education was directed to develop computer science standards and seek State Board approval no later than December 31, 2017'],
          ['(b) Math credit', 'From the 2018-2019 school year, an advanced placement, honors, college prep or integrated computer science course meeting the computer science and mathematics standards may satisfy a mathematics graduation credit'],
          ['(b) The exceptions', 'It cannot replace Algebra I, Geometry, Algebra II or the equivalent courses'],
          ['(c) Waiver', 'A high school may ask for a waiver of the offering duty if it would be a burden financially or programmatically; the Secretary of Education or designee decides']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Who sets diploma rules', p: 'Under section 122(b)(3) of the same title, rules on certificates and diplomas are proposed by the Secretary and approved by the State Board, so the detailed credit list lives in regulation, not in section 4139.' },
          { h3: 'Four course types count', p: 'The math option is limited to advanced placement, honors, college prep or integrated computer science courses that meet both sets of standards. An introductory elective alone does not qualify under the text.' },
          { h3: 'A waiver is possible', p: 'Because subsection (c) allows waivers, "every high school offers a course" is the rule rather than a guarantee. A family should confirm what their own school runs this year.' }
        ] },
        { kind: 'p', text: 'What we could not read: the state standards the Department was told to develop, and any list of waivers granted. Both would be on education.delaware.gov, which returned a security block. So this page does not print a standards adoption date or say how many schools hold waivers.' }
      ]
    },
    {
      id: 'tabs', tint: 'tint', eyebrow: 'The published counts',
      h2: 'Two Code.org figures for one Delaware year, and why they differ',
      intro: 'Delaware values from the Code.org (2025) State of AI + CS Education sheet, Access and Participation tabs, and the College Board AP school report.',
      body: [
        { kind: 'table', caption: 'Delaware high school computer science access, Code.org (2025) trend tab, with the Most Recent tab shown separately', head: ['School year', 'Trend tab value', 'Note'], rows: [
          ['2018 to 2019', '65%', ''],
          ['2019 to 2020', '68%', ''],
          ['2020 to 2021', '55%', ''],
          ['2021 to 2022', '40%', 'The low point'],
          ['2022 to 2023', 'Blank', 'No value published'],
          ['2023 to 2024', '61.4%', 'Equal to 35 of 57, by our arithmetic'],
          ['2024 to 2025', '61%', 'The Most Recent tab instead gives 36 of 57 high schools, which is 63.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'They disagree', p: 'For 2024 to 2025 the trend tab says 61% while the Most Recent tab says 36 of 57. Dividing 36 by 57 gives 63.2%. One school separates them, and the sheet does not explain which is current.' },
          { h3: 'A survey, not a register', p: 'The Most Recent tab names its Delaware basis as "School Course Catalogs and Teacher Surveys", so it depends on what catalogs list and teachers report.' },
          { h3: 'Enrollment stops in 2022', p: 'Participation values are 4.0% for 2020 to 2021 and 4.9% for 2021 to 2022, with nothing published after that, so current enrollment is unknown from this source.' }
        ] },
        { kind: 'p', text: 'With 57 high schools in the count, each school is worth 1.75 percentage points, by our arithmetic. That is why Delaware\'s line jumps from 68% to 40% and back to the low sixties: a handful of schools adding or dropping a listed course moves the share a lot. The College Board shows a steadier picture of advanced courses, with 69 Delaware schools giving AP exams in both 2023 and 2024 and the public share rising from 45 to 48. Cite access as Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Shares of Delaware state park programs, and the missing two percent',
      intro: 'The Division of Parks and Recreation publishes every public program in Delaware State Parks as public-domain open data. Students turn program counts into percentages and discover that rounding has rules of its own.',
      body: [
        { kind: 'table', caption: 'Programs by park, five largest values (our counts from the State Park Programs dataset, 4,077 rows, downloaded 17 October 2026)', head: ['Park value in the data', 'Programs', 'Our share, one decimal'], rows: [
          ['Trap Pond', '460', '11.3%'],
          ['Fort Miles', '426', '10.4%'],
          ['Delaware Seashore', '334', '8.2%'],
          ['First State Heritage Park', '329', '8.1%'],
          ['Auburn Valley', '324', '7.9%'],
          ['These five together', '1,873', '45.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count and divide', p: 'The dataset reports 4,077 rows and the download holds 4,077. Students count programs per park, divide each count by the total, and multiply by 100.' },
          { h3: '2. Round, then add', p: 'Round each of the 26 shares to a whole number and they sum to 98. Round to one decimal and they sum to 99.7. Nothing is wrong with the data; small remainders were dropped 26 times.' },
          { h3: '3. Fix it honestly', p: 'The largest remainder method hands the missing points to the parks with the biggest fractional parts, so the rounded shares total exactly 100. Students code it and compare.' }
        ] },
        { kind: 'callout', h3: 'Our percentages, public-domain data', p: 'Every count and share here is ours, from one download of a public-domain dataset. The table describes programs listed in the data over its whole span, not attendance and not a current calendar, and it is not a Division of Parks and Recreation statistic.' },
        { kind: 'p', text: 'Two data checks come before any chart. Five of the 26 park values are fragments with one or two rows each, such as "Cape", "Delaware" and a park name typed twice in a row, which belong to larger parks and need cleaning. And while most program start dates fall from 2022 to 2024, two rows say the year 0203, five say 2001 and one says 2028. A student who finds those before publishing a percentage has learned the habit that matters most.' }
      ]
    },
    {
      id: 'eastern', tint: 'tint', eyebrow: 'Class times',
      h2: 'Eastern Time, from Wilmington to the beaches',
      intro: 'The IANA time zone database lists Delaware with US eastern time, alongside its neighbors.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone', p: 'All of Delaware keeps Eastern Time with daylight saving. Every class slot for a Delaware family is confirmed in Eastern Time, so there is nothing to convert at home.' },
          { h3: 'India, by our sums', p: 'From March to November a Delaware afternoon is nine and a half hours behind the teacher in India; in winter the gap is ten and a half. A 4 pm class in Dover is a late evening lesson there.' },
          { h3: 'Flexible slots', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
        ] },
        { kind: 'spec', title: 'Percentages hide in timetables too', p: 'Ask what share of a week\'s classes fall after 5 pm and the rounding problem returns: seven slots out of nine is 77.8%, and the other two are 22.2%, which happen to make exactly 100 here. Split the week into three or more groups and students can watch the rounded total drift away from 100 again.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From block apps to the courses Delaware counts toward math',
    intro: 'Bands are a starting estimate; a teacher confirms the real level in the free trial lesson.',
    cols: [
      { band: 'Grades K to 3', h3: 'Sequences in blocks', p: 'Step-by-step block programs and simple animations that make loops and events concrete.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 3 to 6', h3: 'Apps and AI ideas', p: 'Block-built apps, then the first questions about how AI tools make predictions from examples.', courses: ['block-coding-app-development-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 7 to 9', h3: 'Python with real numbers', p: 'Python on public data, percentages and charts done properly, plus small web projects.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Grades 10 to 12', h3: 'AP and advanced work', p: 'AP Computer Science A or Principles, the kind of course section 4139 lets count as math.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Will an AI notice that its percentages add up to 98?',
    intro: 'Usually not unless asked. Noticing is a skill students build by doing the arithmetic themselves.',
    p1: 'An assistant asked for "the share of programs at each park" will round each value and return a tidy table. It will rarely mention that the column totals 98, or that five of the park names are fragments of others. Both problems are invisible unless someone adds the column and reads the labels.',
    p2: 'Students who have written the rounding code know to total every percentage column, to say how values were rounded, and to clean labels before grouping. With those habits, AI tools speed them up instead of slipping errors past them.',
    closer: 'Delaware made computer science count toward math for good reason: done well, it is careful quantitative reasoning.',
    blogAnchor: 'whether coding is worth learning when AI can code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'New Castle, Kent or Sussex County, one live classroom',
    intro: 'A small state still has long school-day commutes; online lessons skip them.',
    cells: [
      { h3: 'Groups that match', p: 'Each batch is fifteen to twenty students who are at roughly the same point, from Delaware and other states, with a teacher leading live.' },
      { h3: 'A teacher to yourself', p: 'The 1-on-1 route suits AP students, hackathon builders, or anyone whose week does not fit a fixed group time.' },
      { h3: 'Respecting school work', p: 'Our teachers know US grade levels and AP formats. Anything a school grades stays entirely the student\'s own work.' },
      { h3: 'Free to try', p: 'The trial lesson is a real coding session, not a sales call. It ends with an honest recommendation, and no card details are taken.' },
      { h3: 'Equipment', p: 'A laptop or desktop with a keyboard, a headset or speakers, and home internet steady enough for video.' },
      { h3: 'Confirmed times', p: 'Every slot is confirmed in Eastern Time by message before the first class, and again before each clock change.' }
    ],
    spec: { title: 'Online from India only', p: 'Modern Age Coders teaches live over video from India. We have no Delaware premises and claim none, and we are not connected with the Delaware Department of Education, DNREC or any district.' }
  },

  fees: {
    h2: 'What Delaware families pay',
    intro: 'Three amounts, each in US dollars.',
    first: 'A trial lesson at no cost, ending with a level and course recommendation.',
    group: 'A month of lessons in a level-matched batch of fifteen to twenty.',
    private: 'A month of lessons with one teacher for one student.',
    closer: 'The rate in US dollars is identical in Newark and Rehoboth Beach. You pay nothing until the trial is done and you have chosen a course and time; holidays and missed sessions are covered on our pricing page.'
  },

  reviewsH2: 'Google reviews from parents and learners',

  book: {
    h2: 'Ask for a free lesson for a Delaware student',
    intro: 'Tell us the grade and what they enjoy. A third grader might build a first block app, an eighth grader might fix a percentage table in Python, and a junior might start AP Computer Science A practice.',
    success: 'Thank you. We will contact you shortly to arrange a class for your Delaware student.'
  },

  faq: {
    h2: 'Delaware questions, answered',
    intro: 'What Delaware parents and students ask most.',
    items: [
      { q: 'Must every Delaware public high school offer computer science?', a: 'Section 4139 of Title 14 says that by the 2020-2021 school year all public high schools, including charter schools, shall offer at least 1 computer science course, though a school can request a waiver.' },
      { q: 'Can computer science count as a math credit in Delaware?', a: 'Yes. From 2018-2019, an AP, honors, college prep or integrated computer science course meeting the standards may satisfy a math credit, except Algebra I, Geometry or Algebra II.' },
      { q: 'Who decides a Delaware waiver request?', a: 'The Secretary of Education or a designee, after the school shows that offering the course would be a financial or programmatic burden.' },
      { q: 'What share of Delaware high schools offer computer science?', a: 'The 2025 Code.org sheet gives 36 of 57 high schools for 2024 to 2025 on one tab and 61% on another; the two do not match.' },
      { q: 'How many Delaware students take computer science?', a: 'The latest published Code.org value is 4.9% of high school students for 2021 to 2022. Nothing newer appears in the sheet.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Will your classes count toward a Delaware diploma?', a: 'No. Diploma credits come from school courses under state rules. Our lessons add depth, projects and AP practice alongside them.' },
      { q: 'Are AI tools used with younger students?', a: 'Only age-appropriate tools, and only after children understand how a computer follows instructions. Older students learn to check AI output line by line.' },
      { q: 'Can we meet a teacher in person in Delaware?', a: 'No. Teaching is live online from India, and we have no Delaware office or classroom.' },
      { q: 'Where are the fees shown?', a: 'Scroll up to the fees block. It lists the no-cost trial and the two monthly options, group or private, priced in US dollars and charged only once the trial is over.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Delaware learners',
    html: 'Juniors weighing the math-credit route can read about <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Builders can compare <a class="cg-inline-link" href="/coding-competitions-for-high-school-students">coding competitions for high school students</a> and the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>, and younger students can try <a class="cg-inline-link" href="/javascript-for-kids">JavaScript for kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Delaware and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'US overview' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
    { href: '/javascript-for-kids', label: 'JavaScript for kids' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-ad .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.3rem); }
.cg-root.cg-ad .cg-hero h1 { font-weight: 730; letter-spacing: -0.017em; line-height: 1.07; }
.cg-root.cg-ad .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ad .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ad .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-ad .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.7rem); }
.cg-root.cg-ad .cg-table caption { font-weight: 700; text-align: left; font-style: italic; }
.cg-root.cg-ad .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ad .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ad .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Delaware, read raw 17 to 19 October 2026. education.delaware.gov blocked (403 Cloudflare). 14 Del. C. 4139 (a) one CS course in all public high schools incl. charters by 2020-2021; standards to the State Board by December 31, 2017; (b) from 2018-2019 an AP, honors, college prep or integrated CS course may satisfy a math credit except Algebra I, Geometry, Algebra II; (c) waiver for financial or programmatic burden, decided by the Secretary of Education or designee; 81 Del. Laws, c. 185. 14 Del. C. 122(b)(3) diploma rules. Code.org (2025): 65%, 68%, 55%, 40%, blank, 61.4%, 61% vs Most Recent 36 of 57 (School Course Catalogs and Teacher Surveys); participation 4.0%, 4.9%. College Board 69, 69 (public 45, 48). IANA: Delaware under US eastern time.',
    localProject: 'data.delaware.gov State Park Programs (pu7t-3gai, DNREC Division of Parks and Recreation, Public Domain), count 4,077, downloaded 17 October 2026: 26 park values; Trap Pond 460, Fort Miles 426, Delaware Seashore 334, First State Heritage Park 329, Auburn Valley 324 (top five 1,873, 45.9%); whole-number shares sum to 98, one-decimal to 99.7; five fragment park values; odd start years 0203 (2), 2001 (5), 2028 (1). Lesson family: percentages and rounding.',
    requiredMentions: [
      '81 Del. Laws, c. 185',
      'December 31, 2017',
      'college prep or integrated computer science course',
      'financially or programmatically',
      '36 of 57',
      'Trap Pond',
      '1,873',
      'sum to 99.7',
      'the year 0203',
      'largest remainder method'
    ],
    sources: [
      { claim: 'Delaware Code, Title 14, Chapter 41: section 4139, Computer science.', url: 'https://delcode.delaware.gov/title14/c041/sc01/index.html' },
      { claim: 'Delaware Code, Title 14, Chapter 1: section 122, rules on diplomas.', url: 'https://delcode.delaware.gov/title14/c001/sc02/index.html' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Delaware access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'data.delaware.gov: State Park Programs (DNREC Division of Parks and Recreation).', url: 'https://data.delaware.gov/d/pu7t-3gai' },
      { claim: 'IANA tzdb northamerica: Delaware on US eastern time.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Delaware CS standards adoption date, graduation credit list and waiver counts: education.delaware.gov returned a 403 Cloudflare block on 17 October 2026; not retried around.',
      'A single reconciled 2024-25 Delaware access figure: the trend tab (61%) and Most Recent tab (36 of 57, 63.2%) disagree; both are shown with the disagreement stated, none is chosen as true.',
      'Code.org gender, race, geography and graduation figures and the Code.org Delaware summary text: not used.',
      'Program prices and phone numbers in the park program descriptions: not printed.',
      'Park program attendance or current schedules: not in the data; only listed programs are counted, as ours.',
      'Any affiliation with the Delaware Department of Education, DNREC, Code.org or the College Board.'
    ]
  }
};
