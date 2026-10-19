'use strict';
// Mississippi (cg- state page, US cluster Phase 4, row 84). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Mississippi wrote computer science into law for every school, phased in year by year from 2022 to 2023,
// so what does the 2021 act require, what do the published access numbers show, and where do live classes fit?
// Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-mississippi/):
//  - mdek12.org (Mississippi Department of Education) returned 403 (Azure Application Gateway) for /ese/computer-science
//    and its site search; not retried. Department pages are therefore not quoted; the law itself is.
//  - Mississippi Legislature, HB 633, 2021 Regular Session (As Sent to Governor), raw HTML: "Mississippi Computer Science
//    and Cyber Education Equality Act"; finding "More than half of high schools in Mississippi do not teach a computer
//    science course"; curriculum "based on the 2018 Mississippi College and Career-Readiness Standards for computer
//    science" incl. "Artificial intelligence and machine learning"; work with the "Center for Cyber Education at
//    Mississippi State University"; "Beginning in the 2022-2023 school year": all middle schools offer foundations of CS,
//    50% of elementary schools a "minimum of one (1) hour of instruction in computer science each week", charter schools
//    offer CS; 2023-2024: "at least fifty percent (50%) of the high schools" offer a course, all elementary schools one hour
//    of exploratory CS each week; "Beginning in the 2024-2025 school year ... all schools in its school system offer
//    instruction in computer science"; "offer" includes a virtual teacher "with a proctor onsite"; the plan identifies
//    approved CS courses that may fulfill "at least four (4) units of academic credit for high school graduation"; a
//    report "by December 31 of each year through 2025". Bill status XML: "03/24 Approved by Governor", effective "July 1, 2021".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): MS access 47%
//    (2018-19), 48%, 65%, 60%, 78%, 84.9% (2023-24), 87.2% (2024-25); most recent 204 of 234 high schools, 2024-2025,
//    source "State Education Agency"; national 60% (2024-25). Participation trend 6.2% (2020-21), 7.7%, 11.1%, 11.1%
//    (2023-24); count tab 14,211 of 130,037 (10.9%), denominator NCES Fall 2022 per the tab header.
//  - College Board, School Report of AP Exams by State 2023-24: MS AP schools 185 (2023), 191 (2024); public 159, 165.
//  - IANA tzdb northamerica: Mississippi listed under "US central time, represented by Chicago"; US rule Sun>=8 Mar,
//    Sun>=1 Nov, so November 1, 2026 and March 14, 2027.
//  - MARIS (IHL MARIS Technical Center) CENSUS Incorporated Cities 2010 and 2020 layers (copyright "US Census Bureau,
//    MARIS"; MARIS: "Geospatial data is FREE"; legal policy: no warranties, no liability), attributes queried 18 October
//    2026. Ours: 2020 = 299 places (112 city, 168 town, 19 village); 2010 = 298 (110, 169, 19); matched on GEOID 298;
//    only in 2020: Diamondhead city; label changed: Florence town to Florence city; matching full labels gives 297
//    common and a union of 300, matching cleaned names or GEOID gives 299; names with punctuation: Bay St. Louis,
//    D'Iberville, D'Lo; Jackson largest land area, our conversion of ALAND20 about 111.7 square miles.
// Lesson family: name cleaning and deduplication (matching two lists of the same places across a decade).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MISSISSIPPI', label: 'Mississippi', blurb: 'Coding and AI for Mississippi students under the 2021 computer science act, with a census place-name cleaning project on MARIS data.' },
  market: US,
  slug: 'coding-and-ai-classes-in-mississippi',
  code: 'aiaa',
  accent: '#6B4340',
  accentRationale: 'Mississippi: #6B4340, a muted magnolia-bark brown-red, as allocated in alloc.tsv for row 84, dark enough to clear 4.5:1 on every paper',
  pageType: 'city',
  place: {
    name: 'Mississippi',
    eyebrow: 'Mississippi, United States',
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
  routeLabel: 'Mississippi',
  title: 'Coding and AI Classes in Mississippi | Live Online',
  description: 'Live online coding and AI classes for Mississippi students: the 2021 Computer Science and Cyber Education Equality Act explained, access data and a MARIS project.',
  ogDescription: 'Mississippi law now asks every school to offer computer science. What HB 633 requires, how access climbed to 204 of 234 high schools, and live classes to go further.',
  twitterDescription: 'Mississippi coding and AI classes, live online, built around the 2021 computer science act.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Mississippi Students',
    description: 'Computational thinking, Python, cybersecurity, data science and AP Computer Science for Mississippi students from elementary school to twelfth grade, taught live online in English.'
  },

  h1: 'Coding and AI classes in Mississippi',
  capsuleQ: 'Does Mississippi require schools to teach computer science?',
  capsule: 'Yes, by law. The Mississippi Computer Science and Cyber Education Equality Act (HB 633, approved in 2021) phased computer science into every public school: middle schools from 2022 to 2023, half of high schools from 2023 to 2024, and all schools from 2024 to 2025. Modern Age Coders adds live online classes on top, from block coding in second grade to Python, cybersecurity and AP.',
  lead: 'Mississippi took an unusual route. Instead of starting with a single graduation course, the legislature told every district to build computer science into elementary, middle and high school at once, on a three-year clock. In 2021 lawmakers wrote, as a finding of fact, that &ldquo;More than half of high schools in Mississippi do not teach a computer science course.&rdquo; By the 2024 to 2025 school year the published count had moved to 204 of 234 high schools. This page reads the act line by line, sets out what the access and participation figures say and do not say, and shows how a family can add depth with live teaching: a Python project on the state&rsquo;s own census place list, cybersecurity for teens, and AP preparation timed to the College Board calendar.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Mississippi.',

  picks: {
    eyebrow: 'Course picks for Mississippi',
    h2: 'Four starting points that match the act&rsquo;s topics',
    intro: 'The law lists computational thinking, programming, cyber security, data science and AI. These four courses cover that ground for different ages; the free class decides the level.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades 2 to 5', note: 'Puzzles, patterns and first programs: the computational thinking and problem solving strands the act names for younger children.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'Typed Python with games and small AI experiments, a natural follow-on to the foundations course in a Mississippi middle school.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Defensive, ethical security skills for teens, matching the cyber half of the act&rsquo;s name.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Cleaning, joining and charting real data in Python, starting with the MARIS census place project on this page.' }
    ]
  },

  sections: [
    {
      id: 'act', tint: '', eyebrow: 'The 2021 act',
      h2: 'What the Computer Science and Cyber Education Equality Act requires',
      intro: 'Read from the enrolled text of House Bill 633, 2021 Regular Session, on the Mississippi Legislature&rsquo;s bill status site on 18 October 2026. The Department of Education site refused our request with a 403 error, so its own guidance is not quoted here.',
      body: [
        { kind: 'table', caption: 'The HB 633 phase-in, school year by school year (Mississippi Legislature)', head: ['From', 'What each district or charter school must provide'], rows: [
          ['2022 to 2023', 'All middle schools offer instruction in foundations of computer science; half of elementary schools give at least one hour of computer science a week; charter schools serving middle or high school offer a course'],
          ['2023 to 2024', 'At least fifty percent (50%) of the high schools in each district offer a computer science course; every elementary school gives one hour of exploratory computer science each week'],
          ['2024 to 2025', 'All schools in every district offer instruction in computer science']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Topics written into law', p: 'The curriculum rests on the 2018 Mississippi College and Career-Readiness Standards for computer science and lists computational thinking, problem solving, programming, cyber security, data science, robotics, and artificial intelligence and machine learning.' },
          { h3: 'What counts as offering', p: 'A course counts if the teacher is in the building, or teaches virtually with a proctor onsite at the school. That clause is how small and rural districts were expected to meet the deadlines.' },
          { h3: 'A university partner', p: 'The act names the Center for Cyber Education at Mississippi State University as the department&rsquo;s partner for curriculum, delivery options and teacher training.' }
        ] },
        { kind: 'p', text: 'Two further clauses matter to high school families. The department&rsquo;s strategic plan had to identify approved computer science courses that may fulfill at least four (4) units of academic credit for high school graduation, which is about how courses count, not a requirement that every student take one. And the department must report by December 31 of each year through 2025 with a list of the schools in each district teaching computer science. The bill status record shows the governor approved the act on March 24, 2021, with an effective date of July 1, 2021.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Access, year by year',
      h2: 'From under half to 204 of 234: Mississippi&rsquo;s published access curve',
      intro: 'Percentages of Mississippi public high schools offering foundational computer science, from the Code.org State of AI + CS Education data, quoted cell by cell.',
      body: [
        { kind: 'table', caption: 'Mississippi high schools offering computer science (Code.org, 2025)', head: ['School year', 'Share offering CS', 'Note'], rows: [
          ['2018 to 2019', '47%', 'Three years before the act'],
          ['2019 to 2020', '48%', ''],
          ['2020 to 2021', '65%', 'The year HB 633 passed'],
          ['2021 to 2022', '60%', 'A dip, as published'],
          ['2022 to 2023', '78%', 'First phase-in year'],
          ['2023 to 2024', '84.9%', 'The 50% high school rule begins'],
          ['2024 to 2025', '87.2%, 204 of 234 high schools', 'Source given as the State Education Agency']
        ] },
        { kind: 'table', mt: true, caption: 'Participation and AP schools in Mississippi, as published', head: ['Measure', 'Value', 'Source'], rows: [
          ['High school students enrolled in CS (count tab)', '14,211 of 130,037, about 10.9%', 'Code.org (2025); denominator from NCES Fall 2022'],
          ['Participation trend, 2020 to 2021 and 2023 to 2024', '6.2%, then 11.1%', 'Code.org (2025), participation tab'],
          ['National share of high schools offering CS, 2024 to 2025', '60%', 'Code.org (2025), national row'],
          ['Schools with AP exams, 2023 and 2024', '185, then 191 (public: 159, then 165)', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'Read the curve with care. A school counts as offering computer science once one course is on its books, so 87.2% says nothing about how many seats there are or who fills them. The enrollment figure of about one high schooler in nine is the better guide to depth, and it predates the last phase of the act. The participation tab and the count tab also round differently (11.1% against 10.9%), so we print both as published and treat neither as a precise current rate.' },
        { kind: 'callout', h3: 'How to cite these figures', p: 'Code.org (2025). 2025 State of AI + CS Education. We quote single Mississippi values from its data download and do not republish the dataset; the College Board figures come from its School Report of AP Exams by State, 2023 to 2024.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is Florence one town or two? Cleaning Mississippi&rsquo;s place names in Python',
      intro: 'MARIS, the state&rsquo;s geographic information center, publishes the Census Bureau&rsquo;s incorporated places for 2010 and 2020. Merging the two lists sounds trivial. It is a first-class lesson in cleaning and deduplication.',
      body: [
        { kind: 'table', caption: 'Mississippi incorporated places by census label (our counts from the MARIS layers, queried 18 October 2026)', head: ['Label', '2010 layer', '2020 layer'], rows: [
          ['city', '110', '112'],
          ['town', '169', '168'],
          ['village', '19', '19'],
          ['Total rows', '298', '299']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The naive merge', p: 'Students join the decades on the full label, such as &ldquo;Jackson city&rdquo;. Only 297 labels match, and the combined list claims 300 places, because Florence appears once as a town in 2010 and again as a city in 2020.' },
          { h3: '2. Clean, then compare', p: 'Stripping the trailing word city, town or village leaves a bare name. Now Florence matches itself, and the only true newcomer is Diamondhead, a city in the 2020 file with no 2010 row. The deduplicated list holds 299 places.' },
          { h3: '3. Prove it with an ID', p: 'Each row also carries a census GEOID. Matching on that code gives the same 298 shared places, which is how students learn to trust an identifier over text that people type and retype.' }
        ] },
        { kind: 'p', text: 'Punctuation makes a second exercise. Bay St. Louis, D&rsquo;Iberville and D&rsquo;Lo all contain characters that break careless code: a student who lowercases names and deletes every apostrophe and full stop must then check that no two places collapse into one. In this file none do, and proving that, rather than assuming it, is the point. A stretch task converts the ALAND20 field from square meters: by our arithmetic Jackson has the largest land area, about 111.7 square miles.' },
        { kind: 'callout', h3: 'What these numbers are, and are not', p: 'Every count above is ours, from attribute tables downloaded on one day. MARIS describes the layers as extracted from Census TIGER data and states that it makes no warranties about accuracy or completeness. They are a teaching dataset, not an official tally of Mississippi municipalities.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Scheduling on Central Time from Biloxi to Tupelo',
      intro: 'The IANA time zone database lists Mississippi under US central time, represented by America/Chicago. Our teachers work from India, which keeps one clock all year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The gap in summer', p: 'From March to November, with Mississippi on Central Daylight Time, the teacher in India is 10 hours 30 minutes later in the day than a student in Hattiesburg, which is why the teacher, not the family, adjusts to the gap.' },
          { h3: 'The gap in winter', p: 'On Central Standard Time the difference grows to 11 hours 30 minutes. Families do not need to track this: every booking is confirmed in Central Time.' },
          { h3: 'Two dates to note', p: 'This school year the switch happens on November 1, 2026 (back one hour) and March 14, 2027 (forward one hour), dates the tzdb derives from its Sun>=1 and Sun>=8 rule lines.' }
        ] },
        { kind: 'spec', title: 'A bug worth making once', p: 'Ask a student to write a reminder that fires at 4 p.m. Central every Tuesday, using a fixed offset of minus five hours. In November it fires an hour late. Rewriting it with the America/Chicago zone is a five-minute fix that teaches why real software never hard-codes an offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Elementary hour to AP exam, step by step',
    intro: 'Grade bands are a rough guide; the free class places each student.',
    cols: [
      { band: 'Grades K to 4', h3: 'The weekly hour, extended', p: 'Blocks, sequences and loops, building on the exploratory hour Mississippi elementary schools now give.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Foundations and beyond', p: 'Typed code and a first look at how AI systems work, alongside the middle school foundations course.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 to 10', h3: 'Security and data', p: 'Defensive cybersecurity, competitions and Python data work with real Mississippi files.', courses: ['picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science Principles or A, and models trained and tested with honest evaluation.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The act lists AI by name. Why learn to code by hand as well?',
    intro: 'Because the hard part of the Florence problem is noticing it, and no tool notices for you.',
    p1: 'Give an AI assistant the two census files and ask for a merged list, and it may well return 300 rows without comment. The code is fine; the question was wrong. Only a student who has looked at the labels knows that a town can become a city and still be the same place.',
    p2: 'Mississippi&rsquo;s law groups artificial intelligence and machine learning with data science and cyber security for a reason: each depends on judging inputs. Students who write the cleaning step themselves can then use AI tools to go faster without handing over their judgment.',
    closer: 'A school course can introduce these ideas; regular practice on messy, local data is what makes them stick.',
    blogAnchor: 'our case for learning to code while AI writes code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live classroom for the Delta, the Pine Belt and the Gulf Coast',
    intro: 'The act allows a virtual teacher with a proctor in the room; our classes are virtual too, with a parent or the student at home instead.',
    cells: [
      { h3: 'No drive to a center', p: 'Students in Greenville, Meridian or Gulfport join from home on a laptop, with no evening drive to a club or campus on the far side of the county.' },
      { h3: 'American grades and terms', p: 'Teachers plan around US grade levels, the Mississippi school year and the May AP window. Homework a school will grade is always done by the student, not by us.' },
      { h3: 'A free first class', p: 'One real lesson, then a written suggestion for the level, course and slot. No card details are taken at that stage.' },
      { h3: 'Group batches', p: 'Batches run with fifteen to twenty learners who share a level, drawn from Mississippi and across the US.' },
      { h3: 'One to one', p: 'A dedicated teacher for a student preparing for AP, a competition, or a faster pace than any batch allows.' },
      { h3: 'Choosing a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Taught online, from India', p: 'Modern Age Coders has no Mississippi campus and claims none. A student needs a laptop or desktop, a headset or speakers, and a steady internet connection.' }
  },

  fees: {
    h2: 'Fees for Mississippi families',
    intro: 'The whole picture, in three lines.',
    first: 'One complete class at no charge, followed by a recommended level, course and time.',
    group: 'Monthly classes in a level-matched batch of fifteen to twenty students.',
    private: 'Monthly classes with a teacher working with one student only.',
    closer: 'Every family in the US is billed in US dollars at the same rate, whether they live in Oxford or Pascagoula. Nothing is charged before the free class, and the pricing page sets out how holidays and missed sessions work.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Tell us about your Mississippi student',
    intro: 'We shape the free class around the student: a pattern puzzle for a second grader, a Python game for a sixth grader, or the census name-cleaning task for a high schooler.',
    success: 'Thank you. Our team will contact you soon about a class for your Mississippi student.'
  },

  faq: {
    h2: 'Mississippi coding and AI questions',
    intro: 'Answers drawn from the 2021 act and the published data.',
    items: [
      { q: 'Does Mississippi law require computer science in schools?', a: 'Yes. HB 633, the Mississippi Computer Science and Cyber Education Equality Act, was approved on March 24, 2021 and took effect on July 1, 2021. From the 2024 to 2025 school year every school in every district must offer computer science instruction.' },
      { q: 'Is computer science a graduation requirement in Mississippi?', a: 'The act requires schools to offer computer science, not every student to pass a course. It asked the department to identify approved courses that may fulfill at least four units of academic credit toward graduation. Ask your high school how those courses are counted.' },
      { q: 'What did the law require of middle schools?', a: 'From 2022 to 2023, each district had to provide that all of its middle schools offer instruction in foundations of computer science, and charter schools serving middle or high school students had to offer a course.' },
      { q: 'What about elementary schools?', a: 'Half of elementary schools had to give at least one hour of computer science a week from 2022 to 2023, and every elementary school one hour of exploratory computer science a week from 2023 to 2024.' },
      { q: 'Which standards does Mississippi teach from?', a: 'The act bases the curriculum on the 2018 Mississippi College and Career-Readiness Standards for computer science, including programming, cyber security, data science, robotics, and artificial intelligence and machine learning.' },
      { q: 'How many Mississippi high schools offer computer science?', a: 'Code.org reports 204 of 234 Mississippi high schools, or 87.2%, offering computer science in 2024 to 2025, up from 47% in 2018 to 2019. Its count tab shows 14,211 high school students enrolled in CS.' },
      { q: 'Can online classes count toward the Mississippi requirement?', a: 'Not ours. The act lets a school use a virtual teacher with a proctor onsite, but that covers approved school courses. Our live classes sit alongside school work for extra depth and AP preparation.' },
      { q: 'When are classes held for families in Mississippi?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Mississippi is on Central Time, and that is the zone every booking is confirmed in.' },
      { q: 'Is there a Modern Age Coders location in Jackson or on the coast?', a: 'No. Every class is taught live online from India, so a student anywhere in Mississippi joins in the same way with a computer and a steady connection.' },
      { q: 'What is the census place-name project?', a: 'Students merge the 2010 and 2020 lists of Mississippi incorporated places published by MARIS, find why a naive merge counts 300 places instead of 299, and fix it by cleaning names and matching on census IDs.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Where Mississippi students can go next',
    html: 'Teens drawn to the cyber side of the act can read about <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a>; those weighing AP can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. To see how other states handle the same question, start at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> or read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a>, where computer science became a graduation requirement.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Mississippi and the wider US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/cybersecurity-classes-for-teens', label: 'Cybersecurity for teens' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' }
  ],

  personalityCss: `
.cg-root.cg-aiaa .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aiaa .cg-hero h1 { font-weight: 720; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-aiaa .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aiaa .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-aiaa .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-aiaa .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-aiaa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiaa .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aiaa .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
`,

  dossier: {
    curriculumAuthority: 'Mississippi, read raw 17 and 18 October 2026: mdek12.org returned 403, not quoted. Mississippi Legislature HB 633 (2021), the Mississippi Computer Science and Cyber Education Equality Act: finding that more than half of high schools do not teach CS; 2018 Mississippi College and Career-Readiness Standards; topics incl. AI and ML; Center for Cyber Education at Mississippi State University; phase-in 2022-23 (middle schools, 50% elementary one hour weekly, charters), 2023-24 (50% of high schools, all elementary one hour), 2024-25 (all schools); virtual teacher with proctor onsite; approved courses for at least four units of credit; annual report by December 31 through 2025; approved March 24, 2021, effective July 1, 2021. Code.org (2025): 204 of 234 (87.2%) 2024-25, trend from 47%; 14,211 of 130,037; national 60%. College Board AP schools 185 and 191. IANA: Mississippi in US central time (America/Chicago).',
    localProject: 'MARIS CENSUS Incorporated Cities 2010 and 2020 (US Census Bureau, MARIS; MARIS legal policy, no warranties), attributes queried 18 October 2026. Our counts: 2010 298 places (110 city, 169 town, 19 village), 2020 299 (112, 168, 19); full-label match 297 common, union 300; GEOID or cleaned-name match 298 common, 299 distinct; Diamondhead new in 2020; Florence town to city; Bay St. Louis, D\'Iberville, D\'Lo punctuation; Jackson largest land area, about 111.7 square miles by our conversion. Lesson family: name cleaning and deduplication.',
    requiredMentions: [
      'Mississippi Computer Science and Cyber Education Equality Act',
      'More than half of high schools in Mississippi do not teach a computer science course',
      '2018 Mississippi College and Career-Readiness Standards',
      'Center for Cyber Education at Mississippi State University',
      'with a proctor onsite',
      'at least four (4) units of academic credit',
      '204 of 234',
      '14,211 of 130,037',
      '185, then 191',
      'Diamondhead'],
    sources: [
      { claim: 'Mississippi Legislature: HB 633 (2021 Regular Session) As Sent to Governor, full text.', url: 'http://billstatus.ls.state.ms.us/documents/2021/html/HB/0600-0699/HB0633SG.htm' },
      { claim: 'Mississippi Legislature: HB 633 bill status history (approved by Governor 03/24, effective July 1, 2021).', url: 'http://billstatus.ls.state.ms.us/2021/pdf/history/HB/HB0633.xml' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Mississippi access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'MARIS: CENSUS Incorporated Cities 2020 map service.', url: 'https://gis.mississippi.edu/server/rest/services/Administrative/MS_CensusIncorporatedCities_2020/MapServer' },
      { claim: 'MARIS: CENSUS Incorporated Cities 2010 map service.', url: 'https://gis.mississippi.edu/server/rest/services/Administrative/MS_CensusIncorporatedCities_2010/MapServer' },
      { claim: 'IANA tzdb northamerica: Mississippi under US central time (America/Chicago) and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Mississippi Department of Education guidance and course lists: mdek12.org returned 403 on 17 October 2026, so nothing from the department is quoted.',
      'That Mississippi requires every student to pass a computer science course to graduate: the act requires schools to offer CS; only the credit clause is quoted.',
      'An exact current participation rate: the Code.org participation tab (11.1%) and count tab (10.9%) differ, so both are quoted as published, with the NCES Fall 2022 denominator noted.',
      'Code.org geography, school size, gender and race tabs and the Code.org state advocacy page: not used.',
      'MARIS libraries, state parks and registry layers: MARIS flags them as Homeland Security Information Network data, so they were not used.',
      'Population and housing fields in the census layer: not used; the project uses names, labels, IDs and land area only.',
      'Names of individual Mississippi schools or districts: not needed; counts only.',
      'That our classes satisfy the act or any school credit: refused.',
      'Any affiliation with the Mississippi Legislature, the Department of Education, Mississippi State University, MARIS, Code.org or the College Board.'
    ]
  }
};
