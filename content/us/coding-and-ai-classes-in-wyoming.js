'use strict';
// Wyoming (cg- state page, US cluster Phase 4, row 107). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Wyoming law puts computer science in every district's common core of knowledge and lets one year of computer
// science stand in for one of the three science years needed to graduate. How does that work, what do the figures say,
// and what can a student do with real Wyoming data? Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-wyoming/):
//  - Wyoming Department of Education (edu.wyoming.gov): HTTP 403 on 17 October 2026, host treated as blocked
//    (dept-blocked.txt). Statute used instead: Wyoming Statutes Title 21, wyoleg.gov/statutes/compress/title21.pdf.
//  - W.S. 21-2-304 (duties of the state board): graduation standards "shall require the successful completion of the
//    following components, as evidenced by passing grades or by the successful performance on competency-based
//    equivalency examinations: (A) Four (4) school years of English; (B) Three (3) school years of mathematics; (C)
//    Three (3) school years of science, one (1) year of which may be satisfied by one (1) year of computer science; and
//    (D) Three (3) school years of social studies".
//  - W.S. 21-9-101(b): each district provides programs to meet standards in a "Common core of knowledge" whose list
//    includes "(O) Computer science"; "Common core of skills" includes "(C) Computational thinking and computer
//    applications"; "For grades one (1) through eight (8), reading, writing and mathematics shall be emphasized".
//  - W.S. 21-16-1307 (success curriculum for "honor or performance scholarship eligibility", students graduating in
//    "the 2019-2020 school year and each school year thereafter"): math four years incl. "(D) An additional math or
//    computer science course taken in grades nine (9) through twelve (12)"; science four years from a list including
//    "(H) Computer science I"; "A computer science course shall not satisfy a requirement of this paragraph if the
//    computer science course is used to satisfy one (1) year of science". No award amounts printed.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): WY access 36%
//    (2018-19), 41%, 50%, 55%, 63%, 74.5% (2023-24), 64.1% (2024-25); most recent 59 of 92 (2024-2025, "State Education
//    Agency"); participation 6.6% (2020-21), 4.0%, "-" (2022-23), 8.6% (2023-24), 6.65% (2024-25); most recent 1,938 of
//    29,151, matched to 2024-25; denominator NCES fall 2022. National 2024-25: 60% and 6.1%.
//  - College Board, School Report of AP Exams by State 2023-24: Wyoming 35 (2023), 41 (2024); public 31, 38;
//    non-public 4, 3.
//  - IANA tzdb: Mountain list "... Utah, Wyoming"; America/Denver "Mountain (most areas)"; Rule US 2007 max.
//  - City of Green River, Wyoming, GreenRiverTrees view layer (public ArcGIS Online item of the city; no licence text on
//    the layer; the city's public maps state "no warranty of fitness is implied"), fetched 18 October 2026: 2,121
//    records; Archived No 2,045, Yes 76; DBH_Range most common "6-12in" (709 records); Genus Picea 406 records (all).
//    Our statistics on the 2,029 non-archived records with a DBH value: mean 10.47, median 8; without the largest 5%
//    the mean is 9.28; 63 at 30 or more. By genus (non-archived): Populus 164 trees, mean 15.3, median 10, max 52;
//    Ulmus 135, mean 19.9, median 20; Malus 348, mean 6.7, median 6.0; Picea 369, mean 15.3, median 16.
// Lesson family: mean versus median, skew and outliers.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'WYOMING', label: 'Wyoming', blurb: 'Coding and AI for Wyoming students, where computer science sits in the common core and can count as a science year, with a Green River trees project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-wyoming',
  code: 'aiw',
  accent: '#29458A',
  accentRationale: 'Wyoming: #29458A, a high-plains sky blue, allocated in alloc.tsv row 107 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Wyoming',
    eyebrow: 'Wyoming, United States',
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
  routeLabel: 'Wyoming',
  title: 'Coding and AI Classes in Wyoming | Live Online, Mountain Time',
  description: 'Live online coding and AI classes for Wyoming students: computer science in the state common core, a CS year counting as science, the figures, and a trees project.',
  ogDescription: 'Wyoming law lists computer science in the common core of knowledge and lets a CS year replace one science year. The statute, the numbers, and live online classes.',
  twitterDescription: 'Wyoming coding and AI classes, live online in Mountain Time.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wyoming Students',
    description: 'Scratch, Python, data science and AP Computer Science A for Wyoming students from first grade to twelfth, taught live online in English and scheduled in Mountain Time.'
  },

  h1: 'Coding and AI classes in Wyoming',
  capsuleQ: 'Does computer science count toward graduation in Wyoming?',
  capsule: 'Yes, as science. Wyoming Statute 21-2-304 requires three school years of science to graduate, one of which may be satisfied by one year of computer science, and W.S. 21-9-101 lists computer science in every district&rsquo;s common core of knowledge. In 2024 to 2025, 59 of 92 Wyoming high schools offered computer science, according to Code.org (2025). We teach Wyoming students live online in Mountain Time.',
  lead: 'Wyoming has the smallest school system of any state on this list, and its law on computer science is short and specific. Computer science appears by name in the common core of knowledge every district must teach toward, computational thinking appears in the common core of skills, and a year of computer science can stand in for a year of science on the way to a diploma. Below are those statutes in the Legislature&rsquo;s wording, the Wyoming access and enrollment series, and a project on the City of Green River&rsquo;s own tree inventory that teaches one of the most useful ideas in statistics: why the average is often not the typical value.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Wyoming.',

  picks: {
    eyebrow: 'Course picks for Wyoming',
    h2: 'Four courses for Wyoming students, wherever they live',
    intro: 'In a state of long distances, a live online class can be the only realistic route to a particular course. The free first lesson sets the right level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 1 to 4', note: 'Scratch stories and games that build computational thinking, the skill Wyoming law lists in its common core of skills.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'Typed Python with small AI projects, so typed code is familiar well before a high school computer science year.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python with real data: averages, medians, charts and outliers, the method behind the Green River trees project.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java for AP Computer Science A, for students whose school schedule cannot fit the course they want.' }
    ]
  },

  sections: [
    {
      id: 'statute', tint: '', eyebrow: 'The statute',
      h2: 'Computer science in Wyoming law, in three places',
      intro: 'We could not read the Wyoming Department of Education website, which returned an access error, so this section quotes Title 21 of the Wyoming Statutes as published by the Wyoming Legislature, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Where computer science appears in Title 21 of the Wyoming Statutes', head: ['Section', 'What it says'], rows: [
          ['W.S. 21-2-304, graduation standards', 'Four school years of English, three of mathematics, three of science and three of social studies; one of the science years may be satisfied by one year of computer science'],
          ['W.S. 21-2-304, evidence', 'Completion shown by passing grades or by successful performance on competency-based equivalency examinations'],
          ['W.S. 21-9-101(b)(i), common core of knowledge', 'Districts provide programs to meet standards in a list of areas that includes, as item (O), Computer science'],
          ['W.S. 21-9-101(b)(iii), common core of skills', 'The skills list includes computational thinking and computer applications, beside problem solving and critical thinking'],
          ['W.S. 21-9-101(b)(ii), grades one to eight', 'Reading, writing and mathematics are to be emphasized within the common core in grades one through eight']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A substitution, not an addition', p: 'The graduation rule does not add a fourth subject. It allows one of the three science years to be a computer science year, so a student who takes it still meets the science count.' },
          { h3: 'Every district, every level', p: 'Because computer science sits in the common core of knowledge, every Wyoming district has to provide programs that meet state standards in it, not only districts with large high schools.' },
          { h3: 'Skills as well as content', p: 'Listing computational thinking among the core skills means the idea is meant to appear across subjects, from a math word problem to a science investigation.' }
        ] },
        { kind: 'p', text: 'We quote the statute text only. How the state board&rsquo;s rules and each district&rsquo;s course catalog apply it is a question for the school counselor, and we do not describe any specific Wyoming course list on this page.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How big is a typical Green River tree? Mean versus median',
      intro: 'The City of Green River publishes its tree inventory as a public map layer, with a trunk diameter for almost every tree. Students compute an average two ways and discover that the answers disagree for a good reason.',
      body: [
        { kind: 'table', caption: 'Trunk diameter (the DBH field) in the Green River tree inventory, non-archived records (our statistics, 18 October 2026)', head: ['Measure', 'Value'], rows: [
          ['Records in the layer', '2,121'],
          ['Marked Archived: No, and kept', '2,045'],
          ['Kept records with a DBH value', '2,029'],
          ['Mean DBH', '10.47'],
          ['Median DBH', '8'],
          ['Mean after dropping the largest 5%', '9.28'],
          ['Trees at 30 or more', '63']
        ] },
        { kind: 'table', mt: true, caption: 'Mean and median DBH by genus, non-archived records (our statistics)', head: ['Genus', 'Trees', 'Mean', 'Median', 'Largest'], rows: [
          ['Malus', '348', '6.7', '6.0', '19'],
          ['Picea', '369', '15.3', '16', '35'],
          ['Populus', '164', '15.3', '10', '52'],
          ['Ulmus', '135', '19.9', '20', '48']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the mean is higher', p: 'A handful of very large trunks pull the mean up, while the median only asks which value sits in the middle. Across all kept trees the mean is 10.47 and the median 8, a sign of a long right tail.' },
          { h3: 'The Populus lesson', p: 'Picea and Populus share a mean of 15.3, yet their medians are 16 and 10. The largest Populus trunk measures 52. Same average, very different typical tree: the median exposes it.' },
          { h3: 'Read the labels too', p: 'The layer also carries a text band, DBH_Range, whose commonest value is 6-12in with 709 records. Comparing the band with the number is a quick check that the two fields agree.' }
        ] },
        { kind: 'p', text: 'In Python the comparison is two lines, <code>statistics.mean(dbh)</code> and <code>statistics.median(dbh)</code>, after filtering to rows where Archived is No and DBH is not empty. Students then plot a histogram and mark both values on it, which makes the skew visible at a glance. Removing the largest 5% drops the mean from 10.47 to 9.28 while the median barely moves, the clearest demonstration that a median resists outliers.' },
        { kind: 'callout', h3: 'Our statistics, a public layer', p: 'All values in this section are our calculations from one download of the city&rsquo;s public layer, which carries no licence text; the city&rsquo;s related public maps state that no warranty of fitness is implied. These are teaching results, not an official urban forest report, and we print no addresses or tree locations.' }
      ]
    },
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The success curriculum',
      h2: 'Computer science in the curriculum for state scholarship eligibility',
      intro: 'Wyoming law sets a separate success curriculum that students follow to qualify for honor or performance scholarship eligibility, in W.S. 21-16-1307, for students graduating from the 2019 to 2020 school year onward.',
      body: [
        { kind: 'table', caption: 'Where computer science appears in the W.S. 21-16-1307 success curriculum', head: ['Area', 'What the statute allows'], rows: [
          ['Math, four years', 'Algebra I, Algebra II, Geometry, and an additional math or computer science course taken in grades nine through twelve'],
          ['Science, four years', 'Courses from a list that includes Computer science I, alongside physics, chemistry, biology and geology'],
          ['No double counting', 'A computer science course cannot satisfy the math requirement if it is used to satisfy one year of science']
        ] },
        { kind: 'p', text: 'For a student who enjoys computer science, these rules mean a computer science course can earn its place in either the math or the science column, but not both at once. We quote the curriculum rules only; scholarship amounts and eligibility decisions belong to the state and the school, and we make no promise about either.' },
        { kind: 'callout', h3: 'Planning the four years', p: 'Our suggestion, and only that: decide early which column a computer science year will fill, then plan the rest of the math and science sequence around it with the counselor, so that no year is wasted on a course that cannot count twice.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'Wyoming&rsquo;s computer science figures, year by year',
      intro: 'From the Access and Participation tabs of Code.org&rsquo;s 2025 spreadsheet, with the College Board AP school count beside them. A dash in the source stays an empty year here.',
      body: [
        { kind: 'table', caption: 'Seven years of Wyoming figures from the Code.org 2025 sheet', head: ['Year', 'Share of Wyoming high schools', 'Share of Wyoming students'], rows: [
          ['2018 to 2019', '36%', 'Not yet tracked'],
          ['2019 to 2020', '41%', 'Not yet tracked'],
          ['2020 to 2021', '50%', '6.6%'],
          ['2021 to 2022', '55%', '4.0%'],
          ['2022 to 2023', '63%', 'Not reported'],
          ['2023 to 2024', '74.5%', '8.6%'],
          ['2024 to 2025', '64.1%, or 59 of 92', '6.65%, or 1,938 of 29,151']
        ] },
        { kind: 'table', mt: true, caption: 'Wyoming beside the national 2024 to 2025 row, and AP schools (College Board)', head: ['Measure', 'Wyoming', 'Comparison or split'], rows: [
          ['High schools offering CS, 2024 to 2025', '64.1%', '60% nationally'],
          ['Students enrolled in CS, 2024 to 2025', '6.65%', '6.1% nationally'],
          ['Schools with AP exams, 2023', '35', '31 public, 4 non-public'],
          ['Schools with AP exams, 2024', '41', '38 public, 3 non-public']
        ] },
        { kind: 'p', text: 'Small numbers move fast. With 92 high schools in the count, a change of a few schools shifts the percentage by several points, which is one reason Wyoming&rsquo;s series rises steeply to 74.5% and then reads 64.1% a year later. The sheet does not say why, and we do not guess. The enrollment share divides by an NCES fall 2022 student total, as the sheet notes.' },
        { kind: 'p', text: 'Citation: Code.org (2025). 2025 State of AI + CS Education. We repeat only the Wyoming cells.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Mountain Time across Wyoming',
      intro: 'The IANA time zone database places Wyoming in its US Mountain list, kept under the America/Denver zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'After school in Cheyenne', p: 'A 3:30 p.m. class in Cheyenne begins at 3:00 a.m. the next day in India during daylight saving, and at 4:00 a.m. after the clocks fall back.' },
          { h3: 'Hours apart', p: 'India keeps UTC plus 5:30 all year. Wyoming moves between UTC minus 6 and minus 7, so India is 11 hours 30 minutes or 12 hours 30 minutes ahead.' },
          { h3: 'This year&rsquo;s dates', p: 'Wyoming clocks change on Sunday, November 1, 2026 and Sunday, March 14, 2027, under the US rule in the IANA data. We confirm times in Mountain Time before both.' }
        ] },
        { kind: 'spec', title: 'An outlier in the calendar', p: 'The day the clocks fall back has 25 hours, an outlier in any table of daily totals. Students who compute hours per day with the America/Denver zone see it appear in their own output, and learn why time-aware code matters.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Four rungs for a Wyoming learner',
    intro: 'Grade bands are only a guide. After the free lesson we place each student on the rung that fits.',
    cols: [
      { band: 'Grades 1 to 4', h3: 'Computational thinking', p: 'Scratch stories, patterns and simple games, built and explained by the child.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Typed code', p: 'Python basics, small AI experiments and first projects with data.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 9 to 10', h3: 'Data and statistics', p: 'Means, medians, charts and the habit of checking what an average hides.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science A in Java, or machine learning tested on real data.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI for the average Green River tree. Which average will it give?',
    intro: 'Usually the mean, and usually without a word about the skew.',
    p1: 'An AI assistant asked for the typical trunk size in the Green River data will most likely compute the mean, 10.47, and present it as the answer. It will not necessarily mention that the median is 8, or that a few giant cottonwoods and elms pull the mean up. The number is correct; the description of it may not be.',
    p2: 'Students who have computed both by hand know to ask which average was used and why. That is how we teach AI in every class: let the tool do the arithmetic quickly, and keep the judgement about what the arithmetic means firmly with the student.',
    closer: 'Wyoming already counts computational thinking among its core skills; asking what an average hides is that skill in action.',
    blogAnchor: 'why coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Jackson to Sheridan, a class without the drive',
    intro: 'In Wyoming, the nearest specialist class can be hours away. Online, it is a link.',
    cells: [
      { h3: 'From any town', p: 'Students in Cheyenne, Casper, Laramie, Gillette, Rock Springs or a ranch far from any of them join from their own computer.' },
      { h3: 'American grades', p: 'Teachers use US grade levels and plan around the Wyoming school year. Graded school work remains the student&rsquo;s own.' },
      { h3: 'A free start', p: 'The first lesson is a real coding task that sets the level. No payment details are needed for it.' },
      { h3: 'Batches by stage', p: 'Fifteen to twenty students at a similar level, from Wyoming and across the country.' },
      { h3: 'Private lessons', p: 'Students far from any school offering a course they want can book a teacher of their own, one to one.' },
      { h3: 'When', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online only', p: 'All lessons are live online from India. Modern Age Coders has no Wyoming premises and does not claim any. A computer, audio and a steady connection, even a rural one, are enough.' }
  },

  fees: {
    h2: 'Fees for Wyoming families',
    intro: 'Three prices, in US dollars, statewide.',
    first: 'A full first lesson for free, ending with a recommended course, level and time.',
    group: 'A month of live classes in a batch of fifteen to twenty students at the same stage.',
    private: 'A month of live classes with a single teacher for a single student.',
    closer: 'Wyoming families pay one US dollar rate, whether they live in a city or on a ranch. Nothing is charged before the free lesson and an agreed plan; see the pricing page for holidays and missed classes.'
  },

  reviewsH2: 'Reviews on Google from families we teach',

  book: {
    h2: 'Ask for a free lesson for a Wyoming student',
    intro: 'Tell us the grade and what the student enjoys. A second grader begins with Scratch, a seventh grader with Python, and a junior with the Green River mean and median.',
    success: 'Thank you. We will contact you shortly to set a time in Mountain Time.'
  },

  faq: {
    h2: 'Wyoming coding and AI questions',
    intro: 'Answers from Wyoming statute, the published data and how our classes run.',
    items: [
      { q: 'Can computer science count toward graduation in Wyoming?', a: 'Yes. W.S. 21-2-304 requires three school years of science, and one of those years may be satisfied by one year of computer science.' },
      { q: 'Is computer science part of the Wyoming common core?', a: 'Yes. W.S. 21-9-101 lists computer science in the common core of knowledge and computational thinking and computer applications in the common core of skills.' },
      { q: 'How many years of each subject does Wyoming require to graduate?', a: 'The statute lists four school years of English, three of mathematics, three of science and three of social studies.' },
      { q: 'Does computer science count in the scholarship success curriculum?', a: 'W.S. 21-16-1307 allows an additional math or computer science course in the math years and lists Computer science I among science courses, but one course cannot count for both.' },
      { q: 'How many Wyoming high schools offer computer science?', a: 'Code.org (2025) reports 59 of 92 Wyoming high schools, or 64.1%, offering computer science in 2024 to 2025.' },
      { q: 'How many Wyoming students take computer science?', a: 'The same data reports 1,938 of 29,151 high school students, or 6.65%, enrolled in 2024 to 2025, against 6.1% nationally.' },
      { q: 'Do your classes count as the Wyoming computer science year?', a: 'We make no such claim. Schools and districts decide credit. What we add is practice and projects outside the school day.' },
      { q: 'What does the Green River project teach?', a: 'Mean versus median. Students find a mean trunk diameter of 10.47 and a median of 8 among 2,029 trees, then show how outliers pull the mean.' },
      { q: 'What time zone are Wyoming classes in?', a: 'Mountain Time. We confirm every time in Mountain Time around November 1, 2026 and March 14, 2027.' },
      { q: 'When do classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Do you have a Wyoming center?', a: 'No. Every class is live online from India, with no Wyoming premises, and none is claimed.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next pages for Wyoming students',
    html: 'Homeschooling families can read about <a class="cg-inline-link" href="/homeschool-computer-science-high-school-credit">homeschool computer science for high school credit</a> and the <a class="cg-inline-link" href="/homeschool-coding-curriculum">homeschool coding curriculum</a>. AP students can look at <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and contest-minded students at the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wyoming and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A' }
  ],

  personalityCss: `
.cg-root.cg-aiw .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.9vw, 2.4rem); }
.cg-root.cg-aiw .cg-hero h1 { font-weight: 760; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-aiw .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aiw .cg-eyebrow { letter-spacing: 0.115em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-aiw .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-aiw .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aiw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiw .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-aiw .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Wyoming, read raw on 18 October 2026: Wyoming Department of Education 403 (blocked), so Wyoming Statutes Title 21 from wyoleg.gov: W.S. 21-2-304 (4 English, 3 math, 3 science with one year satisfiable by computer science, 3 social studies; passing grades or competency-based equivalency examinations); W.S. 21-9-101 (computer science in the common core of knowledge; computational thinking and computer applications in the common core of skills; grades one to eight emphasis); W.S. 21-16-1307 success curriculum (additional math or computer science course; Computer science I; no double counting; graduates from 2019-2020); Code.org (2025) (access 36% to 74.5% to 64.1%, 59 of 92; participation 6.6%, 4.0%, 8.6%, 6.65%, 1,938 of 29,151; national 60% and 6.1%); College Board AP 35/41, public 31/38, non-public 4/3; IANA Mountain list.',
    localProject: 'City of Green River GreenRiverTrees public layer (no licence text; city maps: no warranty of fitness implied), fetched 18 October 2026: 2,121 records; 2,045 not archived; 2,029 with DBH: mean 10.47, median 8, mean 9.28 without the largest 5%, 63 at 30 or more; Populus mean 15.3 median 10 max 52; Ulmus 19.9 and 20; Malus 6.7 and 6.0; Picea 15.3 and 16; DBH_Range 6-12in 709. All ours. Lesson family: mean versus median, skew, outliers.',
    requiredMentions: [
      'W.S. 21-2-304',
      'W.S. 21-9-101',
      'W.S. 21-16-1307',
      'one of the science years may be satisfied by one year of computer science',
      'Computer science I',
      '59 of 92',
      '1,938 of 29,151',
      '2,121',
      '10.47',
      '9.28',
      'Populus'
    ],
    sources: [
      { claim: 'Wyoming Statutes Title 21: W.S. 21-2-304, 21-9-101, 21-16-1307 (Wyoming Legislature).', url: 'https://wyoleg.gov/statutes/compress/title21.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Wyoming and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Green River: GreenRiverTrees public layer.', url: 'https://services7.arcgis.com/KuLOZPy3lKDA07LB/arcgis/rest/services/GreenRiverTrees_ViewLayer_NonEditable/FeatureServer/0' },
      { claim: 'IANA tzdb northamerica: Wyoming in the Mountain list, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Wyoming Department of Education pages (standards adoption year, course lists): edu.wyoming.gov returned 403; only statute text is used.',
      'Scholarship names, award amounts and eligibility outcomes: money content, not printed; only the curriculum rules are quoted.',
      'Any cause for the fall from 74.5% to 64.1% access: not stated by the source; only the small-denominator arithmetic is noted.',
      'City of Casper parks data: maps.casperwy.gov returned a geo-IP block page, not retried, not used.',
      'Tree condition, damage and inventory-status fields, addresses and locations: not used; counts and diameters only.',
      'An official Green River urban forest figure: the layer carries no licence or warranty; only our labelled statistics appear.',
      'That our classes earn Wyoming credit, and any affiliation with the Wyoming Department of Education, the Legislature, the City of Green River, Code.org or the College Board.'
    ]
  }
};
