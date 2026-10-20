'use strict';
// Minnesota (cg- state page, US cluster Phase 4, row 83). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Minnesota answered low computer science access with a 2023 law (Minn. Stat. 120B.241) that builds capacity
// rather than requiring a course: a state CS supervisor, a working group and strategic plan, teacher preparation from
// July 1, 2027, and mandatory high school reporting. Sources read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-minnesota/):
//  - education.mn.gov served a Radware bot challenge for /MDE/dse/stds/compsci/, /MDE/dse/stds/ and /MDE/fam/grad/
//    (mde-blocked.txt). Treated as blocked, not circumvented. No MDE page wording is printed.
//  - Minnesota Revisor of Statutes, 2025 Minnesota Statutes section 120B.241 (revisor-120B.241.txt): "COMPUTER
//    SCIENCE EDUCATION ADVANCEMENT PROGRAM"; history "2023 c 55 art 2 s 61"; definition "the study of computers and
//    algorithmic processes, including their principles, their hardware and software designs, their implementation,
//    and their impact on society"; "The Department of Education must employ a computer science supervisor"; working
//    group members appointed "by October 1, 2023"; plan published for feedback "By February 29, 2024" and presented "By
//    March 22, 2024"; plan to support expansion "in every public school and public charter school in the state within
//    five years"; recommendations include "expansion of a high school credit equivalency for computer science" and
//    "the development of standalone kindergarten through grade 12 standards for computer science"; Subd. 5 "On and after
//    July 1, 2027, any program of teacher preparation leading to professional certification shall include ... instruction
//    in computer science"; Subd. 6 "The Department of Education shall require all high schools to report data and
//    information about computer science course offerings and enrollment." (The statute's demographic clauses are not used.)
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (codeorg-cb-extract.txt): MN access 19% (2018-19), 24%,
//    21%, 28%, 36.3% (2022-23), 34.4% (2023-24: 275 of 799, source "State Education Agency and School Catalogs"), no
//    2024-25 value; participation 2.5% (2022-23), 1.83% (2023-24: 5,152 of 280,848).
//  - College Board, School Report of AP Exams by State 2023-24: MN schools with AP exams 263 (2023), 271 (2024).
//  - IANA zone.tab: America/Chicago "Central (most areas)"; Rule US 2007: November 1, 2026 and March 14, 2027.
//  - City of Minneapolis Parks feature service, downloaded 17 October 2026; licence: "the City of Minneapolis has
//    waived all copyright and related or neighboring rights to Open Data", reference use, no warranty. 193 records, 185
//    with ACRES, 8 null. Our statistics: mean 25.27, median 4.77 acres; without the largest record (THEODORE WIRTH,
//    657.30) mean 21.84, median 4.65; without the 5 largest mean 17.64, median 4.49; 148 records below the mean; 37
//    under 1 acre; 13 over 100 acres.
// Lesson family: mean versus median, and how one large value moves an average.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MINNESOTA', label: 'Minnesota', blurb: 'Coding and AI for Minnesota students under the 2023 computer science advancement law, with a Minneapolis parks mean-versus-median project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-minnesota',
  code: 'amim',
  accent: '#4C0B25',
  accentRationale: 'Minnesota: #4C0B25, a dark cranberry from the allocation table, set well apart from the North Carolina green and the blues of neighbouring US pages, with strong contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Minnesota',
    eyebrow: 'Minnesota, United States',
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
  routeLabel: 'Minnesota',
  title: 'Coding and AI Classes in Minnesota | Live Online',
  description: 'Live online coding and AI classes for Minnesota students: what the 2023 CS law does, published access and enrollment data, and a Minneapolis parks project.',
  ogDescription: 'Minnesota passed a computer science advancement law in 2023 without adding a graduation course. What it requires, what the numbers show, and live classes for Minnesota students.',
  twitterDescription: 'Minnesota coding and AI classes, live online, with a Minneapolis parks statistics project.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Minnesota Students',
    description: 'Scratch, Python, data science, AP Computer Science and AI for Minnesota students from elementary to high school, taught live online in level-matched groups or one to one.'
  },

  h1: 'Coding and AI classes in Minnesota',
  capsuleQ: 'What does Minnesota law say about computer science in schools?',
  capsule: 'Minnesota Statutes section 120B.241, enacted in 2023, created a Computer Science Education Advancement Program: a state computer science supervisor, a strategic plan, required reporting of high school CS offerings and enrollment, and CS in teacher preparation from July 1, 2027. It adds no graduation course. Modern Age Coders teaches Minnesota students live online, from Scratch to AP Computer Science A.',
  lead: 'Minnesota&rsquo;s numbers explain its law. In the latest Code.org count, 275 of 799 Minnesota high schools offered computer science, about a third, and 1.83% of high school students were enrolled in it. In 2023 the legislature responded not with a mandate for students but with a program for the system: someone at the Department of Education whose job is computer science, a working group that had to deliver a strategic plan to a deadline, a rule that future teachers learn computer science, and an obligation on every high school to report what it offers and who enrolls. This page reads that statute as the Revisor publishes it, sets out the access and enrollment figures, and closes with a statistics project on Minneapolis park data that shows why a single average can mislead.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Minnesota.',

  picks: {
    eyebrow: 'Course picks for Minnesota',
    h2: 'Where Minnesota students usually start',
    intro: 'Four courses across the grades. The free first class decides which one, and at what level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Blocks first, then games and small apps, so the logic is secure before any typing begins.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Real Python for teens, including the Minneapolis parks statistics project from this page.' },
      { course: 'ap-statistics-maths-exam-prep-course', band: 'Grades 10 to 12', note: 'For students who enjoyed mean versus median: AP Statistics with the investigative task, taught live.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles for students whose school has no computer science course on the timetable.' }
    ]
  },

  sections: [
    {
      id: 'statute', tint: '', eyebrow: 'The 2023 law',
      h2: 'Minnesota Statutes 120B.241, the Computer Science Education Advancement Program',
      intro: 'Read in the 2025 Minnesota Statutes on the Revisor of Statutes site, 17 October 2026. The section dates from 2023, chapter 55.',
      body: [
        { kind: 'table', caption: 'What section 120B.241 requires, in the statute&rsquo;s own order', head: ['Subdivision', 'What it does'], rows: [
          ['1. Definitions', 'Defines computer science as the study of computers and algorithmic processes, including their principles, hardware and software designs, implementation and impact on society'],
          ['2. Supervisor', 'The Department of Education must employ a computer science supervisor to implement the section and the strategic plan and to support districts'],
          ['3. Working group', 'Members appointed by October 1, 2023; proposed plan published for feedback by February 29, 2024; adopted plan presented to the legislature by March 22, 2024'],
          ['4. Educator training', 'Grants or contracts for teacher recruitment and training, at no out-of-pocket cost to educators, across the bands K-2, 3-5, 6-8 and 9-12'],
          ['5. Teacher preparation', 'On and after July 1, 2027, teacher preparation programs leading to certification must include computer science instruction'],
          ['6. Data collection', 'The Department must require all high schools to report computer science course offerings and enrollment'],
          ['7. Rules', 'The Department and the licensing board may adopt rules, including flexible routes to license computer science teachers']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five years, every school', p: 'The strategic plan must describe how the state will support computer science opportunities in every public and public charter school within five years, with a focus on equitable access.' },
          { h3: 'Credit equivalency', p: 'Among the long-term recommendations the statute asks for is an expansion of high school credit equivalency for computer science, meaning a CS course counting in place of another subject.' },
          { h3: 'Standalone standards', p: 'The statute also lists the development of standalone K-12 computer science standards as a recommendation, which tells a reader those standards were still a goal in the 2023 text.' }
        ] },
        { kind: 'p', text: 'Notice what is not in the section: no course every student must pass to graduate. Minnesota chose to build teachers, data and a plan first. For a family, that means access depends heavily on the district and the individual high school for now, and outside classes are the most direct way for a student to study computer science where the school timetable has none.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'About a third of Minnesota high schools, and fewer than two students in a hundred',
      intro: 'Minnesota values from the Code.org 2025 data sheet and the College Board, with the year attached to each.',
      body: [
        { kind: 'table', caption: 'Code.org (2025) access trend for Minnesota: the percentage of high schools with a CS course', head: ['Year', 'Minnesota high schools with CS'], rows: [
          ['2018 to 2019', '19%'],
          ['2019 to 2020', '24%'],
          ['2020 to 2021', '21%'],
          ['2021 to 2022', '28%'],
          ['2022 to 2023', '36.3%'],
          ['2023 to 2024', '34.4%, or 275 of 799 high schools'],
          ['2024 to 2025', 'No value published']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Minnesota', head: ['Measure', 'Minnesota', 'Source'], rows: [
          ['High school students enrolled in CS, 2022 to 2023', '2.5%', 'Code.org (2025), participation trend'],
          ['High school students enrolled in CS, 2023 to 2024', '5,152 of 280,848, or 1.83%', 'Code.org (2025), most recent participation'],
          ['Schools with AP exams, 2023', '263', 'College Board, AP exams by state report'],
          ['Schools with AP exams, 2024', '271', 'College Board, AP exams by state report']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Access almost doubled', p: 'From 19% of high schools in 2018 to 2019 to 34.4% in 2023 to 2024. That is real growth, starting from a low base.' },
          { h3: 'Enrollment went the other way', p: 'Participation fell from 2.5% to 1.83% across the two years with values. Two points are too few to call a trend, but they do not show the rise that access does.' },
          { h3: 'Why reporting matters', p: 'Code.org lists its Minnesota source as the state education agency plus school catalogs. Subdivision 6 of the 2023 law, which makes every high school report offerings and enrollment, should make future counts firmer.' }
        ] },
        { kind: 'callout', h3: 'Where these numbers come from', p: 'Cite as Code.org (2025). 2025 State of AI + CS Education, published data sheet; we quote the Minnesota rows only. The enrollment denominator in that tab is a national NCES enrollment figure, so treat the percentage as an estimate rather than a census.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'What is a typical Minneapolis park? Mean, median and one very large outlier',
      intro: 'The City of Minneapolis publishes its parks layer as open data with an acreage field. Students compute the average park size two ways and find out why they disagree.',
      body: [
        { kind: 'table', caption: 'Minneapolis park acreage summarized (our calculations from the city&rsquo;s Parks layer, downloaded 17 October 2026)', head: ['Which records', 'Our mean, acres', 'Our median, acres'], rows: [
          ['All 185 records with an acreage value', '25.27', '4.77'],
          ['Without the largest record', '21.84', '4.65'],
          ['Without the five largest records', '17.64', '4.49']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Load and check', p: 'The layer has 193 records; 8 have no acreage, so the first decision is what to do with blanks. Students drop them, note that they did, and keep 185.' },
          { h3: '2. Two kinds of average', p: 'The mean comes out at 25.27 acres and the median at 4.77. Of the 185 parks, 148 are smaller than the mean, which is not what most people expect an average to mean.' },
          { h3: '3. Find the reason', p: 'Sort descending and the cause appears: the record named THEODORE WIRTH carries 657.30 acres. Removing that one record moves the mean by more than three acres and the median by about a tenth of one.' }
        ] },
        { kind: 'spec', title: 'The shape of the data', p: 'Thirty-seven records are under one acre and thirteen are over one hundred. A histogram with a log scale shows the long right tail at a glance, and gives students a reason to learn what a log scale is for.' },
        { kind: 'callout', h3: 'Ours, not the city&rsquo;s', p: 'Every mean, median and count above is our calculation from one download of the layer&rsquo;s ACRES field, not the Minneapolis Park and Recreation Board&rsquo;s official park sizes. The City of Minneapolis has waived copyright in its open data and says its GIS data is for reference only, without any guarantee of completeness or accuracy.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Central Time for the whole state',
      intro: 'Minnesota sits in the IANA zone America/Chicago, Central Time. Our teachers are in India, so here is the arithmetic once.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer and winter gaps', p: 'India is 10 hours 30 minutes ahead of Minnesota while daylight saving is on, and 11 hours 30 minutes ahead after the clocks go back.' },
          { h3: 'This year&rsquo;s changes', p: 'Under the US rule in the IANA database, Minnesota leaves daylight saving time on November 1, 2026 and returns to it on March 14, 2027. Your class keeps its Central Time slot.' },
          { h3: 'Written in Central', p: 'Every booking, reminder and reschedule is confirmed in Central Time, so a family in Duluth or Rochester never has to convert anything.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A route from elementary blocks to AP',
    intro: 'Bands are only a guide; the free class sets the starting point.',
    cols: [
      { band: 'Grades K to 5', h3: 'Logic through play', p: 'Scratch games and simple puzzles, then a first look at how AI tools make predictions.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'First real syntax', p: 'Python with drawings and games, or a first website built line by line.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 9 to 10', h3: 'Data and depth', p: 'Python at depth and a first data science course using public Minnesota data.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'Exams and models', p: 'AP Computer Science A in Java, and machine learning trained on data the student can explain.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will give you the average park size. Will it tell you which average?',
    intro: 'Choosing the right summary is a human judgement, and coding is how students learn to make it.',
    p1: 'Ask an assistant for the average size of a Minneapolis park and it may reply with a mean of about twenty-five acres. That figure is correct and close to useless as a picture of a neighbourhood park, which is far more likely to be under five acres. A student who has computed both statistics, and removed the outlier to see what happens, knows to ask which one is meant.',
    p2: 'Minnesota&rsquo;s own statute defines computer science as including the impact of computing on society. Knowing when a number misleads is part of that impact. Students who write their own analysis can then use AI tools to save time, while keeping the decisions that matter.',
    closer: 'The goal is not a student who can produce an average, but one who can say which average fits the question and why.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Iron Range to the Twin Cities, the same class',
    intro: 'Minnesota covers a lot of ground, and in winter a lot of snow. A live online class reaches every corner without a drive.',
    cells: [
      { h3: 'No winter commute', p: 'A student in Bemidji and one in Bloomington can share a batch from their own desks, whatever the weather is doing outside.' },
      { h3: 'Built around school', p: 'Teachers use US grade levels and plan around the Minnesota school year. Work a school will grade always stays the student&rsquo;s own.' },
      { h3: 'Level-matched batches', p: 'Fifteen to twenty students at the same stage, drawn from Minnesota and the rest of the country.' },
      { h3: 'A teacher of your own', p: 'One-to-one classes for students preparing for an AP exam or a competition, or who want to move at their own speed.' },
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Try it free first', p: 'A full lesson with a teacher, then a written recommendation of level, course and slot. No card is needed to book it.' }
    ],
    spec: { title: 'Taught online from India', p: 'Modern Age Coders has no office, center or classroom in Minnesota and claims none. Each student joins from home on a computer with sound and a reliable connection.' }
  },

  fees: {
    h2: 'What Minnesota families pay',
    intro: 'The three options, priced in the cards below.',
    first: 'A complete free lesson, ending with a level, course and time recommendation.',
    group: 'A month of classes in a batch of fifteen to twenty students at one level.',
    private: 'A month of classes with one teacher for one student.',
    closer: 'Minnesota families pay one US rate in US dollars, the same in Saint Paul as in Moorhead. Nothing is billed until after the free lesson, when course and schedule are agreed; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Ask for a free class for your Minnesota student',
    intro: 'Share the grade and interests. A second grader might start with a block game, a seventh grader with Python drawing, a junior with the Minneapolis parks statistics.',
    success: 'Thank you. We will contact you soon about a class for your Minnesota student.'
  },

  faq: {
    h2: 'Minnesota coding and AI questions',
    intro: 'Answers based on the Minnesota Statutes, Code.org and the College Board, read in October 2026.',
    items: [
      { q: 'Is computer science required to graduate in Minnesota?', a: 'Section 120B.241, the 2023 computer science law, adds no graduation course. We could not read the Department of Education graduation page, which served a bot challenge, so check current district rules with your school.' },
      { q: 'What is the Minnesota Computer Science Education Advancement Program?', a: 'It is Minnesota Statutes 120B.241, enacted in 2023. It requires a state CS supervisor, a strategic plan, teacher training grants, CS in teacher preparation and reporting of high school CS offerings and enrollment.' },
      { q: 'When does computer science enter Minnesota teacher preparation?', a: 'On and after July 1, 2027, the statute says every teacher preparation program leading to certification must include instruction in computer science as applied to student learning.' },
      { q: 'Does Minnesota have standalone K-12 computer science standards?', a: 'The 2023 statute lists developing standalone K-12 computer science standards as a recommendation for the strategic plan. We could not read the current MDE standards page, so we make no claim beyond that text.' },
      { q: 'How many Minnesota high schools offer computer science?', a: 'The Code.org 2025 data counts 275 of 799 Minnesota high schools, or 34.4%, in 2023 to 2024, up from 19% in 2018 to 2019.' },
      { q: 'How many Minnesota students take computer science?', a: 'Code.org reports 5,152 of 280,848 high school students, or 1.83%, enrolled in computer science in 2023 to 2024.' },
      { q: 'What time zone are classes in?', a: 'Central Time, the IANA zone America/Chicago. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience.' },
      { q: 'Do your classes count for Minnesota school credit?', a: 'No. Credit is decided by the school district. Our classes add depth and projects alongside school, and anything a school grades stays the student\'s own.' },
      { q: 'What does the Minneapolis parks project teach?', a: 'Mean versus median. Using 185 park records from the city layer, the mean is 25.27 acres and the median 4.77 in our calculation, because one park record is far larger than the rest.' },
      { q: 'Is there a Modern Age Coders location in Minnesota?', a: 'No. We have no premises in Minnesota; every class is live online from India.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next steps for Minnesota students',
    html: 'Students without a school CS course can prepare through <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> or <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Those who liked the statistics can look at <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, and families comparing states can begin at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Minnesota and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-amim .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-amim .cg-hero h1 { font-weight: 740; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-amim .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-amim .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-amim .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-amim .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-amim .cg-table caption { font-weight: 680; text-align: left; }
.cg-root.cg-amim .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-amim .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-amim .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Minnesota, read raw 17 October 2026: education.mn.gov served a Radware bot challenge for the CS standards, standards and graduation pages (treated as blocked). Minnesota Revisor of Statutes, section 120B.241 (2023 c 55 art 2 s 61): definition; CS supervisor; working group by October 1, 2023, plan by February 29, 2024 and March 22, 2024; five years, every school; credit equivalency and standalone standards as recommendations; teacher preparation from July 1, 2027; all high schools report CS offerings and enrollment. Code.org (2025): access 19% to 34.4% (275 of 799, 2023-24); participation 2.5% then 1.83% (5,152 of 280,848). College Board AP schools 263 and 271. IANA America/Chicago and US DST rule.',
    localProject: 'City of Minneapolis Parks layer (copyright waived for open data, reference use), downloaded 17 October 2026: 193 records, 185 with ACRES, 8 null; our mean 25.27 and median 4.77 acres; without THEODORE WIRTH (657.30) mean 21.84, median 4.65; without five largest 17.64 and 4.49; 148 below mean; 37 under 1 acre; 13 over 100. Lesson family: mean versus median and outliers.',
    requiredMentions: [
      'section 120B.241',
      'July 1, 2027',
      'February 29, 2024',
      'March 22, 2024',
      'all high schools to report', 
      '5,152 of 280,848', 
      'THEODORE WIRTH',
      '25.27',
      '4.77'
    ],
    sources: [
      { claim: 'Minnesota Revisor of Statutes: 2025 Minnesota Statutes 120B.241, Computer Science Education Advancement Program.', url: 'https://www.revisor.mn.gov/statutes/cite/120B.241' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Minnesota access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Minneapolis: Parks feature service (open data, copyright waived).', url: 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Parks/FeatureServer' },
      { claim: 'IANA tzdb: America/Chicago and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' },
      { claim: 'Minnesota Department of Education CS standards page (bot challenge on 17 October 2026, recorded, not used).', url: 'https://education.mn.gov/MDE/dse/stds/compsci/' }
    ],
    rejectedClaims: [
      'Any MDE wording on graduation requirements or CS standards: not printed; education.mn.gov served a Radware bot challenge and was not circumvented.',
      'That Minnesota has adopted standalone CS standards: not claimed; only the 2023 statute text listing them as a recommendation is quoted.',
      'The statute subdivisions on working group demographics and disaggregated data: not used (identity content).',
      'A falling participation trend: not claimed from two data points.',
      'Official Minneapolis park sizes: not read; only our statistics from the ACRES field, labelled as ours.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'That our classes earn Minnesota school credit: refused.',
      'Any affiliation with the Minnesota Department of Education, the City of Minneapolis, the Park Board, Code.org or the College Board.'
    ]
  }
};
