'use strict';
// Oregon (cg- state page, US cluster Phase 4, row 95). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: the Oregon Diploma credit table has no computer science line, but its math requirement names Data Reasoning
// standards and Oregon credit rules allow several kinds of evidence. Where does coding fit, and what do the figures
// say? Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-oregon/):
//  - Oregon Department of Education, Oregon Diploma page: "To earn a diploma, students need to successfully complete
//    the following: Demonstrate proficiency in the Essential Skills, Complete personalized learning requirements, and
//    Earn credit requirements"; credit table Language Arts 4, Mathematics 3 ("Must be Algebra I and above. Courses
//    aligned to the adopted Algebra, Geometry, and Data Reasoning standards meet this requirement."), Science 3,
//    Social Sciences 3, World Languages / Arts / Career and Technical Education 3 ("Credits may come from any of these
//    content areas."), Health 1, Physical Education 1, Personal Financial Education 0.5, Higher Education and Career
//    Path Skills 0.5, Electives 5, "Total 24 credits"; no computer science line; Senate Bill 3: "students graduating on
//    or after January 1, 2027"; Essential Skills assessment "suspended ... through the 2027-28 school year"; "Districts
//    may have additional requirements beyond the state minimum requirements".
//  - ODE, Options for Awarding Credit: four approved sources of evidence (evidence generated in courses, stand-alone
//    assessments, collections of evidence, prior mastery, e.g. "certification of training, letters, diplomas,
//    awards"); "The options for awarding credit are established in OAR 581-022-2025".
//  - ODE: no computer science standards page found from the standards index, site map or guessed URLs (all 404);
//    oregonlegislature.gov did not connect. No Oregon CS standards claim is printed.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): OR access 54%
//    (2018-19), "-" (2019-20), 63%, 64%, 60.2% (2022-23), 56.2% (2023-24), "-" (2024-25); most recent 195 of 347
//    (2023-2024, "State Education Agency"); participation 8.1% (2020-21), 6.7%, 6.94% (2022-23), then "-"; most recent
//    12,717 of 183,221, matched to 2022-23; denominator NCES fall 2022. National: participation 6.4% (2022-23),
//    access 60% (2023-24).
//  - College Board, School Report of AP Exams by State 2023-24: Oregon 194 (2023), 196 (2024); public 160, 161;
//    non-public 34, 35.
//  - IANA tzdb: Pacific list "Oregon (except the northern ¾ of Malheur county)"; America/Boise comment "eastern Oregon
//    (most of Malheur County)"; zone1970.tab America/Boise "Mountain - ID (south), OR (east)"; America/Los_Angeles
//    "Pacific"; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
//  - State Library of Oregon, Oregon Public Library Statistics, data.oregon.gov 8zw7-zgjw (Oregon's Open Data Portal;
//    no licence field set, provenance "official", attribution State Library of Oregon), fetched 18 October 2026:
//    collected under "Oregon Revised Statue 357.520" (spelling as published); "Reporting periods are identified as the
//    year the report was submitted (i.e., FY2009-2010 data is identified as 2010 in the Year column)"; 2,183 rows,
//    years 2010 to 2025, 133 to 144 libraries a year. Our medians per library: teen (ages 12 to 18) programs 4 (2010),
//    9 (2015), 12 (2019), 2 (2021), 15 (2023), 18 (2024), 16 (2025); public computers 9 in most years; circebook filled
//    only in 2025 (133 rows), median 4,722.
// Lesson family: dates and time series (fiscal-year labels, start and end dates, and a field that appears late).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'OREGON', label: 'Oregon', blurb: 'Coding and AI for Oregon students, where the diploma names Data Reasoning in math, with a State Library time series project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-oregon',
  code: 'aior',
  accent: '#287050',
  accentRationale: 'Oregon: #287050, a deep Douglas fir green, allocated in alloc.tsv row 95 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Oregon',
    eyebrow: 'Oregon, United States',
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
  routeLabel: 'Oregon',
  title: 'Coding and AI Classes in Oregon | Live Online, Pacific Time',
  description: 'Live online coding and AI classes for Oregon students: where coding fits the 24-credit Oregon Diploma, the published CS figures, and a State Library data project.',
  ogDescription: 'The Oregon Diploma has no computer science line, but its math credits name Data Reasoning. Where coding fits, what the figures show, and live online classes.',
  twitterDescription: 'Oregon coding and AI classes, live online in Pacific Time.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Oregon Students',
    description: 'AI-assisted game making, Python, data science and AP Statistics for Oregon students from third grade to twelfth, taught live online in English and scheduled in Pacific or Mountain Time.'
  },

  h1: 'Coding and AI classes in Oregon',
  capsuleQ: 'Do Oregon students need computer science to graduate?',
  capsule: 'No separate computer science credit appears in the Oregon Department of Education&rsquo;s 24-credit Oregon Diploma table, though its three math credits may come from courses aligned to Algebra, Geometry and Data Reasoning standards. In 2023 to 2024, 195 of 347 Oregon high schools offered computer science, according to Code.org (2025). We teach Oregon students live online, from game making to Python, data science and AP Statistics.',
  lead: 'Oregon&rsquo;s diploma is built around credits, Essential Skills and personalized learning requirements, and computer science is not one of the named credit areas. That does not make coding irrelevant to an Oregon transcript. The math requirement names Data Reasoning alongside Algebra and Geometry, and the department lists several kinds of evidence a school can accept when it awards credit. This page lays out the diploma as ODE publishes it, the access and participation figures for Oregon high schools, the two time zones inside the state, and a project on fifteen years of State Library data that teaches students how dates in a dataset can quietly mislead.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Oregon.',

  picks: {
    eyebrow: 'Course picks for Oregon',
    h2: 'Four courses with Oregon&rsquo;s data focus in mind',
    intro: 'Selected for the way Oregon frames math around data. The free first lesson confirms the right level for each student.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Grades 3 to 6', note: 'Games built in Scratch with an AI helper, where the child still designs the rules and fixes what the helper gets wrong.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'First typed Python with small AI experiments, a calm bridge from blocks to real code before high school.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python and real public tables: time series, medians and charts, the method behind the library project on this page.' },
      { course: 'ap-statistics-maths-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Statistics with code alongside: sampling, distributions and inference, close kin to Oregon&rsquo;s Data Reasoning strand.' }
    ]
  },

  sections: [
    {
      id: 'diploma', tint: '', eyebrow: 'The Oregon Diploma',
      h2: 'Twenty-four credits, and none labelled computer science',
      intro: 'The credit table as the Oregon Department of Education publishes it on its Oregon Diploma page, read on 18 October 2026. The total of 24 is the department&rsquo;s own figure.',
      body: [
        { kind: 'table', caption: 'Oregon Diploma credit requirements, as listed by ODE', head: ['Subject area', 'Credits', 'ODE note, in brief'], rows: [
          ['Language Arts', '4', 'Renamed from English Language Arts in 2021'],
          ['Mathematics', '3', 'Algebra I and above; courses aligned to the Algebra, Geometry and Data Reasoning standards count'],
          ['Science', '3', 'Includes Scientific Inquiry and lab experiences'],
          ['Social Sciences', '3', 'Includes at least 0.5 credit of Civics'],
          ['World Languages, Arts or Career and Technical Education', '3', 'Credits may come from any of these areas'],
          ['Health and Physical Education', '1 each', ''],
          ['Personal Financial Education; Higher Education and Career Path Skills', '0.5 each', 'For students graduating on or after January 1, 2027, under Senate Bill 3'],
          ['Electives', '5', 'Six before 2027'],
          ['Total', '24', 'The department&rsquo;s stated minimum']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three parts to a diploma', p: 'ODE lists three things a student must do: demonstrate proficiency in the Essential Skills, complete personalized learning requirements, and earn the credits above. The State Board has suspended the Essential Skills assessment as a diploma requirement through the 2027 to 2028 school year.' },
          { h3: 'Districts can add more', p: 'The department notes that districts may set requirements beyond the state minimum, so a family&rsquo;s own district website is the place to check for anything extra, computer science included.' },
          { h3: 'Where coding can sit', p: 'With no computer science line, a coding course usually appears as an elective or within one of the grouped areas, depending on how the district codes it. We do not assume which; the counselor knows.' }
        ] },
        { kind: 'p', text: 'We looked for an Oregon computer science standards page from the ODE standards index and site map and did not find one on 18 October 2026, so this page makes no claim about Oregon computer science standards. What the diploma page does say plainly is that Data Reasoning is one of the standards families behind the math credits, which is a natural home for programming with data.' }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'How credit is awarded',
      h2: 'Four kinds of evidence Oregon schools may use',
      intro: 'ODE&rsquo;s Options for Awarding Credit page says credit may be awarded when a student meets defined levels of proficiency, and lists approved sources of evidence, established in OAR 581-022-2025.',
      body: [
        { kind: 'table', caption: 'Approved sources of evidence for awarding credit, as ODE lists them', head: ['Source of evidence', 'What ODE describes'], rows: [
          ['Evidence generated in courses', 'Student work, teacher-student contacts and class sessions, judged by the teacher'],
          ['Stand-alone assessments', 'Summative assessments designed to certify the defined level of proficiency'],
          ['Collections of evidence', 'A student-created collection of evidence scored against rubrics'],
          ['Prior mastery', 'Documentation such as certification of training, letters, diplomas or awards']
        ] },
        { kind: 'p', text: 'This is the department describing what schools may accept, not a promise that any particular outside class earns credit. We make no such claim. A student who builds real projects outside school does, however, end up with exactly the kind of work that can be shown, explained and assessed if a school chooses to look at it, and the decision rests entirely with the school and district.' },
        { kind: 'callout', h3: 'A portfolio habit worth starting early', p: 'Students in our classes keep every finished project, with a short note on what it does and what they learned. Whether or not it is ever used for credit, a folder of working code is the clearest answer to the question of what a student can actually do.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published figures',
      h2: 'Fewer Oregon high schools offering CS than in 2021 to 2022',
      intro: 'Oregon values from the Access and Participation tabs of Code.org&rsquo;s 2025 data, and the College Board AP school counts. Years Oregon did not report are shown as such, and the latest participation year is 2022 to 2023.',
      body: [
        { kind: 'table', caption: 'Oregon: high schools offering CS and students enrolled in CS, by year (Code.org, 2025)', head: ['Year', 'High schools offering CS', 'Students enrolled in CS'], rows: [
          ['2018 to 2019', '54%', 'Not in the sheet'],
          ['2019 to 2020', 'Not reported', 'Not in the sheet'],
          ['2020 to 2021', '63%', '8.1%'],
          ['2021 to 2022', '64%', '6.7%'],
          ['2022 to 2023', '60.2%', '6.94%, or 12,717 of 183,221'],
          ['2023 to 2024', '56.2%, or 195 of 347', 'Not reported'],
          ['2024 to 2025', 'Not reported', 'Not reported']
        ] },
        { kind: 'table', mt: true, caption: 'Oregon AP schools (College Board) and the national comparison points', head: ['Measure', 'Oregon', 'Comparison or split'], rows: [
          ['Students enrolled in CS, 2022 to 2023', '6.94%', '6.4% nationally'],
          ['High schools offering CS, 2023 to 2024', '56.2%', '60% nationally'],
          ['Schools with AP exams, 2023', '194', '160 public, 34 non-public'],
          ['Schools with AP exams, 2024', '196', '161 public, 35 non-public']
        ] },
        { kind: 'p', text: 'Oregon is unusual in this data. Its enrolled share in 2022 to 2023 was a little above the national figure, while the share of schools offering computer science has fallen two years running since 2021 to 2022. The sheet reports the values and the source, the state education agency, but not reasons, and we add none. The enrollment percentage divides by an NCES fall 2022 student count.' },
        { kind: 'p', text: 'Please cite the access and participation values as Code.org (2025). 2025 State of AI + CS Education. Only Oregon&rsquo;s cells are repeated here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Fifteen years of Oregon libraries, and the trap in the Year column',
      intro: 'The State Library of Oregon publishes annual statistics for every public library on Oregon&rsquo;s Open Data Portal, collected under the state&rsquo;s annual report statute. Students build a time series and meet a classic date problem on the first line.',
      body: [
        { kind: 'table', caption: 'Median teen (ages 12 to 18) programs per Oregon public library, by report year (our medians from the State Library data, 18 October 2026)', head: ['Year column', 'Fiscal year it covers', 'Libraries reporting', 'Median teen programs'], rows: [
          ['2010', 'July 1, 2009 to June 30, 2010', '133', '4'],
          ['2015', 'July 1, 2014 to June 30, 2015', '137', '9'],
          ['2019', 'July 1, 2018 to June 30, 2019', '136', '12'],
          ['2021', 'July 1, 2020 to June 30, 2021', '141', '2'],
          ['2023', 'July 1, 2022 to June 30, 2023', '136', '15'],
          ['2024', 'July 1, 2023 to June 30, 2024', '136', '18'],
          ['2025', 'July 1, 2024 to June 30, 2025', '136', '16']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The label is not the year', p: 'The dataset says reporting periods are identified by the year the report was submitted, so FY2009-2010 is stored as 2010. A student who plots Year without reading that note shifts every point by months.' },
          { h3: 'Use the real dates', p: 'Each row also carries a start date and an end date, July 1 to June 30. Students parse those into proper dates and plot against the fiscal-year end, which makes the series honest on a calendar axis.' },
          { h3: 'Fields arrive late', p: 'The e-book circulation field is filled only in the 2025 rows, for 133 libraries, with a median of 4,722. Fifteen years of zeros would be wrong; the honest chart starts where the data does.' }
        ] },
        { kind: 'p', text: 'The working code is short: <code>df["fy_end"] = pd.to_datetime(df["enddate"])</code>, then <code>df.groupby(df["fy_end"].dt.year)["programsya12_18"].median()</code>. Students use the median rather than a sum because library sizes vary enormously, and because adding up every library would produce a state total the State Library may report differently. The table has 2,183 rows across sixteen report years, with between 133 and 144 libraries in each. The data records what each library reported, not why a year rose or fell, and we draw no conclusions about the changes.' },
        { kind: 'callout', h3: 'Every median here is ours', p: 'The medians are our calculation from one download of the State Library of Oregon dataset, which sets no licence field and credits the State Library. They are teaching results, not official statistics, and a student rerunning the code after the next annual update will get slightly different numbers.' }
      ]
    },
    {
      id: 'zones', tint: '', eyebrow: 'Class times',
      h2: 'Pacific Time for most of Oregon, Mountain for most of Malheur County',
      intro: 'In the IANA time zone database, Oregon is on Pacific Time except the northern three quarters of Malheur County, which keeps Mountain Time under the America/Boise zone, described as Mountain for south Idaho and east Oregon.',
      body: [
        { kind: 'table', caption: 'One example lesson in both Oregon zones and in India (our worked example)', head: ['Clock', 'Before November 1, 2026', 'After November 1, 2026'], rows: [
          ['Pacific Time, most of Oregon', '4:30 p.m.', '4:30 p.m.'],
          ['Mountain Time, most of Malheur County', '5:30 p.m.', '5:30 p.m.'],
          ['India time', '5:00 a.m. the next day', '6:00 a.m. the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Tell us your zone', p: 'Families in the Mountain Time part of the state simply tell us so, and every time we send is written in their own zone rather than Portland&rsquo;s.' },
          { h3: 'The changeover dates', p: 'Both zones follow the US rule: clocks fall back on November 1, 2026 and spring forward on March 14, 2027, the first Sunday of November and the second of March.' },
          { h3: 'Why India moves', p: 'India stays on one offset all year, so the teacher&rsquo;s hour shifts when Oregon&rsquo;s clocks do, while the Oregon class time stays fixed.' }
        ] },
        { kind: 'spec', title: 'Two zones, one bug to avoid', p: 'A scheduler that assumes all of Oregon is Pacific sends Malheur County families the wrong hour. Students who look up a zone by place, America/Los_Angeles or America/Boise, before formatting a time have learned to check an assumption that most code never questions.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From AI-assisted games to AP Statistics',
    intro: 'A usual route by grade. The free placement lesson decides each student&rsquo;s first rung.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Logic through play', p: 'Block puzzles and simple programs that build the habit of thinking in steps.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 3 to 6', h3: 'Games with an AI helper', p: 'Scratch games designed by the child, with AI as an assistant, never the author.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Grades 7 to 10', h3: 'Python and data', p: 'Typed code, tables, dates and charts, the practical side of Data Reasoning.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 10 to 12', h3: 'Statistics and AI', p: 'AP Statistics with code, or machine learning projects tested on real data.', courses: ['ap-statistics-maths-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI notice that 2010 means the 2009 to 2010 fiscal year?',
    intro: 'Only if someone points it to the dataset note, which is exactly the habit we teach.',
    p1: 'Ask an AI assistant to chart the Oregon library series and it will happily plot the Year column as calendar years. The chart will look fine. It will also be shifted, because the State Library labels each fiscal year by the year the report was submitted. Nothing in the numbers themselves reveals that.',
    p2: 'Students who have read the description and parsed the start and end dates know what to tell the assistant, and they check its chart against their own. That is the working pattern we want for every student: use AI to move faster, and keep the responsibility for what the result means.',
    closer: 'Oregon&rsquo;s math credits already name Data Reasoning; reading the small print on a dataset is where that reasoning starts.',
    blogAnchor: 'why learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Astoria to Ontario, the same live lesson',
    intro: 'Oregon spans coast, valley, mountains and high desert. A browser tab makes the distance irrelevant.',
    cells: [
      { h3: 'Classes at home', p: 'Students in Portland, Salem, Eugene, Bend, Medford or a ranch town join from their own computer.' },
      { h3: 'American grades', p: 'Teachers plan in US grade levels and around the Oregon school year. Anything a school will grade remains the student&rsquo;s own work.' },
      { h3: 'Free first lesson', p: 'A short real task shows the right starting level. There is no charge and no payment detail is requested.' },
      { h3: 'Small level groups', p: 'Fifteen to twenty students at a similar stage, from Oregon and other US states.' },
      { h3: 'Private teaching', p: 'One-to-one lessons for AP Statistics, a faster pace or a particular project.' },
      { h3: 'Class times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Taught online from India', p: 'Every lesson is live online from India. There is no Modern Age Coders office or classroom in Oregon, and none is claimed. A computer, audio and a reliable connection are all that is needed.' }
  },

  fees: {
    h2: 'Fees for Oregon families',
    intro: 'Shown in US dollars, identical across the state.',
    first: 'A complete first lesson at no charge, finishing with a recommended course, level and time.',
    group: 'A month of live lessons in a batch of fifteen to twenty students at one level.',
    private: 'A month of live lessons with a teacher working with just your student.',
    closer: 'Oregon families pay a single US dollar rate in either time zone. No payment is taken before the free lesson and an agreed plan, and holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Reviews left by families on Google',

  book: {
    h2: 'Book a free lesson for an Oregon student',
    intro: 'Tell us the grade, your time zone if you are in eastern Oregon, and what the student enjoys. A fourth grader might build a first AI-assisted game; a high schooler might start the library time series.',
    success: 'Thank you. We will contact you shortly to set a lesson time in your Oregon time zone.'
  },

  faq: {
    h2: 'Oregon coding and AI questions',
    intro: 'Short answers from ODE, the published data and how our classes run.',
    items: [
      { q: 'Is computer science required to graduate in Oregon?', a: 'Not as a separate credit. The Oregon Diploma table on the ODE website lists 24 credits and includes no computer science line, though districts may add their own requirements.' },
      { q: 'How many credits does the Oregon Diploma require?', a: 'ODE lists a total of 24 credits, including 4 in Language Arts, 3 in Mathematics, 3 in Science and 3 in Social Sciences.' },
      { q: 'What changes for students graduating in 2027?', a: 'Under Senate Bill 3, students graduating on or after January 1, 2027 need 0.5 credit in Personal Financial Education and 0.5 credit in Higher Education and Career Path Skills.' },
      { q: 'What counts as Oregon math credit?', a: 'ODE says math credits must be Algebra I and above, and that courses aligned to the adopted Algebra, Geometry and Data Reasoning standards meet the requirement.' },
      { q: 'How many Oregon high schools offer computer science?', a: 'Code.org (2025) reports 195 of 347 Oregon high schools, or 56.2%, offering computer science in 2023 to 2024.' },
      { q: 'How many Oregon students take computer science?', a: 'The latest Oregon figure in the same data is 12,717 of 183,221 high school students, or 6.94%, in 2022 to 2023.' },
      { q: 'Can your classes earn Oregon credit?', a: 'We make no such claim. ODE lists the evidence schools may accept, but credit decisions belong to each school and district.' },
      { q: 'What time zone are Oregon classes in?', a: 'Pacific Time for most of the state, and Mountain Time for families in the part of Malheur County that uses it. We write every time in your own zone.' },
      { q: 'When can classes be booked?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there an Oregon office?', a: 'No. All lessons are live online from India, and no Oregon premises exist or are claimed.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further pages for Oregon families',
    html: 'Students drawn to statistics and data can look at <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, and younger learners can start with <a class="cg-inline-link" href="/coding-classes-for-elementary-students">coding classes for elementary students</a>. For summer plans there is a guide to <a class="cg-inline-link" href="/free-coding-programs-for-high-school-students">free coding programs for high school students</a>, and the <a class="cg-inline-link" href="/coding-milestones-by-age">coding milestones by age</a> page helps set expectations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oregon and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
    { href: '/free-coding-programs-for-high-school-students', label: 'Free coding programs' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aior .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-aior .cg-hero h1 { font-weight: 730; letter-spacing: -0.016em; line-height: 1.09; }
.cg-root.cg-aior .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-aior .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aior .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-aior .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aior .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aior .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-aior .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Oregon, read raw on 18 October 2026: ODE Oregon Diploma page (24 credits; math Algebra I and above, Algebra, Geometry and Data Reasoning standards; no CS line; SB 3 from January 1, 2027; Essential Skills assessment suspended through 2027-28; districts may add requirements); ODE Options for Awarding Credit (four sources of evidence; OAR 581-022-2025); no ODE CS standards page found; Code.org (2025) data (access 54%, 63%, 64%, 60.2%, 56.2%; 195 of 347 in 2023-24; participation 8.1%, 6.7%, 6.94%; 12,717 of 183,221 in 2022-23; national 6.4% and 60%); College Board AP 194/196, public 160/161, non-public 34/35; IANA Pacific except northern three quarters of Malheur County, America/Boise.',
    localProject: 'State Library of Oregon, Oregon Public Library Statistics (data.oregon.gov 8zw7-zgjw; no licence field, attribution State Library), fetched 18 October 2026: 2,183 rows, report years 2010 to 2025 labelled by submission year, 133 to 144 libraries a year; our median teen programs per library 4 (2010), 9 (2015), 12 (2019), 2 (2021), 15 (2023), 18 (2024), 16 (2025); circebook only in 2025 (133 rows, median 4,722). All ours. Lesson family: dates and time series.',
    requiredMentions: [
      'Data Reasoning',
      'Total',
      'January 1, 2027',
      'OAR 581-022-2025',
      '12,717 of 183,221',
      '56.2%',
      'Malheur County',
      '2,183 rows',
      '4,722'
    ],
    sources: [
      { claim: 'ODE: Oregon Diploma, credit requirements, SB 3, Essential Skills.', url: 'https://www.oregon.gov/ode/students-and-family/OregonDiploma/Pages/default.aspx' },
      { claim: 'ODE: Options for Awarding Credit, OAR 581-022-2025.', url: 'https://www.oregon.gov/ode/students-and-family/OregonDiploma/Pages/Credit-Options.aspx' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Oregon and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'State Library of Oregon: Oregon Public Library Statistics on data.oregon.gov.', url: 'https://data.oregon.gov/d/8zw7-zgjw' },
      { claim: 'IANA tzdb northamerica: Oregon Pacific except Malheur County, America/Boise.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Oregon computer science standards adoption year or content: no ODE CS standards page was found on 18 October 2026, and oregonlegislature.gov did not connect.',
      'That a coding course counts as math, CTE or any specific credit area: ODE does not say so; left to districts.',
      'Any reason for the fall in Oregon access since 2021 to 2022 or for the library series changes (including 2021): not stated by the sources.',
      'A statewide library total: our page prints medians only, labelled ours.',
      'Portland open data (portlandmaps.com) and the Oregon State Parks service: unreachable or returned 502, not used.',
      'Library names, addresses, salaries, revenue and fines fields: not used.',
      'That our classes earn Oregon credit, and any affiliation with ODE, the State Library of Oregon, Code.org or the College Board.'
    ]
  }
};
