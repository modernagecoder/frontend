'use strict';
// South Dakota (cg- state page, US cluster Phase 4, row 99). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: South Dakota adopted its first K-8 computer science standards in April 2025 and lets an approved advanced CS
// course stand in for a science elective. What do the new standards cover, how does the substitution work, and what
// can a student learn by binning five years of Sioux Falls recreation programs? The state spans two time zones.
// Sources read raw 17 to 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-south-dakota/):
//  - SD DOE, South Dakota Computer Science Standards PDF (sd-cs-standards-2025.pdf): "Adopted April 14, 2025"; "In the
//    spring of 2024, the Department of Education created the Computer Science Standards Committee to compile and
//    recommend K-8 computer science standards"; bands Grades K-2, 3-5, 6-8; "Although 11 state standards were
//    referenced, most adaptations came from Montana's, Idaho's, and North Dakota's state standards"; built on the 2017
//    CSTA standards and the 2016 K-12 CS Framework; "One goal of the standards is to explicitly indicate where
//    artificial intelligence (AI) is referenced"; CS standards overlap slightly with the SD Technology Standards, which
//    "focus more on using computers appropriately and safely"; districts have flexibility.
//  - SD DOE, Content Standards: "Computer Science-Adopted 2025"; "Educational Technology Standards - Adopted 2021";
//    standards "are reviewed every five to seven years" and "do not mandate a specific curriculum".
//  - SD DOE, High School Graduation Requirements: "passed by the Board of Education Standards on July 16, 2018",
//    "South Dakota Administrative Rule 24:43:11", a base of required coursework plus endorsements.
//  - SD DOE, Advanced Computer Science page and Guidelines PDF: a state-approved advanced CS course "may be substituted
//    for one unit of a science elective in the High School Diploma and Advanced Career Endorsement. It may not replace
//    Biology. It may not count for the Advanced and Advanced Honors Endorsements."; eligible high school courses:
//    Networking Technologies, Computer Programming I & II, PLTW Computer Science Principles, PLTW Computer Science A/AP
//    Computer Science A, PLTW Cybersecurity, AP Computer Science Principles; Robotics reviewed case by case. Staff names
//    and named colleges in the dual-credit list are not printed.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): SD access 38%
//    (2019-20), 39%, 42%, 51.4% (2022-23), 55% (2023-24), no 2018-19 or 2024-25 value; most recent 97 of 178 high
//    schools (54.5%), 2023-24, "State Education Agency and School Catalogs"; participation: no value in any year.
//  - College Board, School Report of AP Exams by State 2023-24: SD 51 (2023), 67 (2024); public 43 and 57;
//    non-public 8 and 10.
//  - IANA tzdb northamerica: "eastern South Dakota" in the US central list (America/Chicago) and "western South
//    Dakota" in the US mountain list (America/Denver); US DST rule. No county is named on the page.
//  - City of Sioux Falls, Parks and Recreation Activity Points (RecreationActivitiesPubMap, CC BY 4.0), fetched
//    18 October 2026: returnCountOnly 1,801 = 1,801 unique records over two pages. Our results: years 2018 352,
//    2019 357, 2020 221, 2021 412, 2022 459; Frequency bins 0: 3, 1: 1,380, 2-4: 286, 5-9: 81, 10-19: 32, 20+: 19;
//    median 1, mean 2.11, max 65; 126 blank categories; 100 locations; 7 records spelled "Weeday Morning".
//    The city's Trees service (gis.siouxfalls.gov) refused connection twice and was not used.
// Lesson family: binning a numeric field, skew (mean against median) and labels that need cleaning.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SOUTH DAKOTA', label: 'South Dakota', blurb: 'Coding and AI for South Dakota students under the new 2025 K-8 CS standards, with a Sioux Falls recreation data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-south-dakota',
  code: 'asd',
  accent: '#6B1021',
  accentRationale: 'South Dakota: #6B1021, a deep Badlands oxblood allocated for row 99 in alloc.tsv, well above text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'South Dakota',
    eyebrow: 'South Dakota, United States',
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
  routeLabel: 'South Dakota',
  title: 'Coding and AI Classes in South Dakota | Live Online',
  description: 'Live online coding and AI classes for South Dakota students: the 2025 K-8 CS standards, CS in place of a science elective, and a Sioux Falls data project.',
  ogDescription: 'South Dakota adopted K-8 computer science standards in April 2025. What they cover, how advanced CS can replace a science elective, and live classes for SD students.',
  twitterDescription: 'South Dakota coding and AI classes, live online, on Central or Mountain time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for South Dakota Students',
    description: 'Computational thinking, AI literacy, game coding, Python and AP Computer Science Principles for South Dakota students from kindergarten to twelfth grade, taught live online in English.'
  },

  h1: 'Coding and AI classes in South Dakota',
  capsuleQ: 'Does South Dakota have computer science standards, and does CS count toward graduation?',
  capsule: 'Yes to both, with limits. South Dakota adopted K-8 computer science standards on April 14, 2025, and a state-approved advanced CS course such as AP Computer Science Principles may replace one science elective, though never Biology. Modern Age Coders teaches South Dakota students live online, ages 6 to 18, on Central or Mountain time.',
  lead: 'South Dakota is new to formal computer science standards, and the timing shows in what they ask for. Written by a committee the Department of Education formed in the spring of 2024, the K-8 standards say outright that one of their goals is to mark where artificial intelligence comes in. At high school, the state already gives computer science a foothold in the diploma: an approved advanced course can take the place of a science elective. Access is still uneven, with a little over half of high schools offering CS in the latest count, and families in the east and the west of the state live on two different clocks. This page covers the standards, the substitution rule, the numbers, a binning project on Sioux Falls recreation data and how our live classes work across both time zones.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in South Dakota.',

  picks: {
    eyebrow: 'Course picks for South Dakota',
    h2: 'Courses that line up with the new SD standards',
    intro: 'Matched to the K-2, 3-5 and 6-8 bands and to the high school substitution rule. The free first lesson confirms the level.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades K to 3', note: 'Patterns, sequences and decomposition, much of it unplugged at first, the way the early grade bands begin.' },
      { course: 'ai-literacy-for-kids-course', band: 'Grades 3 to 6', note: 'What AI is, how it learns from examples and where it goes wrong, matching the standards&rsquo; explicit focus on AI.' },
      { course: 'game-development-masterclass-for-kids', band: 'Grades 5 to 8', note: 'Games designed, coded and debugged by the student, the algorithms and programming work of the 6-8 band.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'Support for AP Computer Science Principles, one of the courses South Dakota lists as able to replace a science elective.' }
    ]
  },

  sections: [
    {
      id: 'standards', tint: '', eyebrow: 'New in 2025',
      h2: 'South Dakota&rsquo;s first K-8 computer science standards',
      intro: 'From the standards document published by the South Dakota Department of Education (SD DOE), adopted April 14, 2025, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'South Dakota Computer Science Standards at a glance, as SD DOE describes them', head: ['Feature', 'What the document says'], rows: [
          ['Adoption', 'The document is dated Adopted April 14, 2025'],
          ['Who wrote them', 'A Computer Science Standards Committee the department created in the spring of 2024'],
          ['Grades covered', 'Kindergarten to grade 8, in bands K-2, 3-5 and 6-8'],
          ['What they drew on', 'The 2017 CSTA K-12 standards and the 2016 K-12 Computer Science Framework; 11 state standards were referenced, with most adaptations from Montana, Idaho and North Dakota'],
          ['Artificial intelligence', 'One goal is to explicitly indicate where AI is referenced or where skills build toward an understanding of it'],
          ['Relationship to technology standards', 'Overlap slightly with the Educational Technology Standards adopted in 2021, which focus more on using computers appropriately and safely']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Not a curriculum', p: 'SD DOE says content standards do not mandate a specific curriculum and are reviewed every five to seven years. Districts decide how to teach them.' },
          { h3: 'Concepts and practices', p: 'Following CSTA, each standard pairs a concept, such as algorithms and programming or data and analysis, with a practice, such as computational thinking.' },
          { h3: 'From unplugged to code', p: 'The document describes kindergarten work as simple sequencing, often without a device, rising by eighth grade to designing algorithms and beginning to write code.' }
        ] }
      ]
    },
    {
      id: 'diploma', tint: 'deep', eyebrow: 'High school',
      h2: 'Swapping a science elective for advanced computer science',
      intro: 'South Dakota&rsquo;s graduation requirements were passed by the Board of Education Standards on July 16, 2018, under South Dakota Administrative Rule 24:43:11. They include one specific route for computer science.',
      body: [
        { kind: 'table', caption: 'State-approved advanced computer science courses that may replace a science elective (SD DOE guidelines; high school courses only)', head: ['Course code', 'Course title'], rows: [
          ['10101', 'Networking Technologies'],
          ['10152', 'Computer Programming I and II'],
          ['10015', 'PLTW Computer Science Principles'],
          ['10157', 'PLTW Computer Science A or AP Computer Science A'],
          ['10016', 'PLTW Cybersecurity'],
          ['10019', 'AP Computer Science Principles']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What it replaces', p: 'One unit of a science elective, for the base High School Diploma and the Advanced Career Endorsement.' },
          { h3: 'What it cannot replace', p: 'Biology. The substitution also does not count for the Advanced or Advanced Honors Endorsements.' },
          { h3: 'Robotics', p: 'Robotics is reviewed case by case, on an application from the school, to decide whether it qualifies.' }
        ] },
        { kind: 'callout', h3: 'Where outside classes fit', p: 'Only the school&rsquo;s own approved course earns the substitution. A student who has already built projects in Python or studied for AP outside school simply walks into that course better prepared.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Binning five years of Sioux Falls recreation programs',
      intro: 'The City of Sioux Falls publishes its Parks and Recreation activity points under a Creative Commons Attribution 4.0 licence. Each record is a program, from toddler sports to the municipal band, with a season, a year and a number in a field called Frequency.',
      body: [
        { kind: 'table', caption: 'Our bins of the Frequency field across 1,801 Sioux Falls recreation records, 2018 to 2022 (download of 18 October 2026)', head: ['Frequency value', 'Records (our count)'], rows: [
          ['0', '3'],
          ['1', '1,380'],
          ['2 to 4', '286'],
          ['5 to 9', '81'],
          ['10 to 19', '32'],
          ['20 or more', '19']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Choose the bins', p: 'Students pick bin edges, count records in each, and draw a histogram. Then they try other edges and see how the picture changes, which is the whole art of binning.' },
          { h3: '2. Mean against median', p: 'The median Frequency is 1 but the mean is 2.11, because a walking program reaches 65. One long tail drags the average, a lesson that applies to every skewed dataset a student will meet.' },
          { h3: '3. Clean the labels', p: 'Seven records say Weeday Morning, and 126 have a blank category. Students fix the typo, decide what to do with blanks, and record each choice.' }
        ] },
        { kind: 'table', mt: true, caption: 'Records per year in the same download (our count)', head: ['Year', 'Records'], rows: [
          ['2018', '352'],
          ['2019', '357'],
          ['2020', '221'],
          ['2021', '412'],
          ['2022', '459']
        ] },
        { kind: 'callout', h3: 'Our counts, and what we do not know', p: 'All figures here are our own, from one download. The city does not define the Frequency field in the published layer, so students describe it only as a count and list what they would need to know before calling it anything more. The year totals show more records in some years than others; the data does not say why, and neither do we.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'Published figures',
      h2: 'How many South Dakota high schools offer CS',
      intro: 'Code.org and College Board values for South Dakota, quoted as published. Where the source has no value, nothing is printed.',
      body: [
        { kind: 'table', caption: 'South Dakota high schools offering foundational CS, by year (Code.org, 2025)', head: ['Year', 'South Dakota'], rows: [
          ['2018 to 2019', 'No value'],
          ['2019 to 2020', '38%'],
          ['2020 to 2021', '39%'],
          ['2021 to 2022', '42%'],
          ['2022 to 2023', '51.4%'],
          ['2023 to 2024', '55% in the trend tab; 97 of 178 high schools in the latest count'],
          ['2024 to 2025', 'No value']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Enrollment', p: 'The Code.org sheet publishes no South Dakota figure for how many high school students take computer science, in any year. We do not estimate one.' },
          { h3: 'AP schools', p: 'The College Board counts South Dakota schools with any AP exam at 51 in 2023 and 67 in 2024: public schools 43 then 57, non-public 8 then 10.' },
          { h3: 'The trend', p: 'Access rose in every year with data, from 38% to roughly 55%, so a little over half of high schools offered CS in 2023 to 2024.' }
        ] },
        { kind: 'p', text: 'Source line for the access figures: Code.org (2025). 2025 State of AI + CS Education. The AP counts cover every AP subject, not computer science alone. Both sets of figures predate the first school year taught under the 2025 K-8 standards.' }
      ]
    },
    {
      id: 'zones', tint: '', eyebrow: 'Two time zones',
      h2: 'Central or Mountain: which clock your class uses',
      intro: 'The IANA time zone database lists eastern South Dakota under US central time (America/Chicago) and western South Dakota under US mountain time (America/Denver).',
      body: [
        { kind: 'table', caption: 'India time ahead of each South Dakota zone, 2026 to 2027 (our arithmetic from the IANA rules)', head: ['Period', 'Central (east)', 'Mountain (west)'], rows: [
          ['To November 1, 2026', '10 hours 30 minutes', '11 hours 30 minutes'],
          ['November 1, 2026 to March 14, 2027', '11 hours 30 minutes', '12 hours 30 minutes'],
          ['From March 14, 2027', '10 hours 30 minutes', '11 hours 30 minutes']
        ] },
        { kind: 'p', text: 'When you book, tell us whether your town keeps Central or Mountain time and we confirm every lesson in that zone. A batch that suits an after-school slot on Central time starts an hour earlier on the Mountain clock, so a family in the west may prefer a different batch.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Step by step',
    h2: 'Following the K-2, 3-5 and 6-8 bands, then high school',
    intro: 'Bands are a guide only; placement after the free lesson sets the level.',
    cols: [
      { band: 'Grades K to 2', h3: 'Sequence and pattern', p: 'Unplugged puzzles, then blocks: instructions in order and simple loops.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 3 to 5', h3: 'Build and meet AI', p: 'Block games, first ideas about how AI learns, and debugging habits.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Real code', p: 'Typed Python and game projects, the step from blocks to text the 6-8 band describes.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 9 to 12', h3: 'Advanced CS', p: 'Python in depth and AP Computer Science Principles, ready for the science-elective route.', courses: ['python-complete-masterclass-teens', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'South Dakota wrote AI into its CS standards. Here is why that needs coding.',
    intro: 'The standards say AI leverages core computer science ideas such as algorithms and data structures. Understanding those ideas is what lets a student judge an AI answer.',
    p1: 'Ask an AI tool for the typical number of sessions in a Sioux Falls recreation program and it may answer with the mean, 2.11, which describes almost no actual program. The median is 1. A student who binned the data knows which number to trust and can explain why.',
    p2: 'That is the habit we build: compute it yourself first, then use AI to speed up work you understand and can check. Students under 18 use only AI tools whose terms allow their age, and school work is always their own.',
    closer: 'Standards that name AI from kindergarten up are a signal that judgment, not just tool use, is the skill that lasts.',
    blogAnchor: 'why coding is still worth it'
  },

  delivery: {
    eyebrow: 'Online, live',
    h2: 'One class for prairie towns and Black Hills towns alike',
    intro: 'South Dakota&rsquo;s distances make a weekly drive to a coding class hard for many families. A live online class needs only a connection.',
    cells: [
      { h3: 'Live with a teacher', p: 'Students code while a teacher watches, asks and corrects in the moment, rather than following a recording alone.' },
      { h3: 'Fits SD school life', p: 'We work in US grade levels and the school calendar, and can align projects with the new K-8 bands. Anything graded at school stays the student&rsquo;s own work.' },
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Level groups', p: 'Batches of fifteen to twenty learners placed by skill, including students from both South Dakota time zones and other states.' },
      { h3: 'Private option', p: 'One teacher, one student, for faster progress, AP preparation or a self-chosen project.' },
      { h3: 'Free placement', p: 'A full first lesson at no charge, ending with a recommended course and time. We do not ask for payment details.' }
    ],
    spec: { title: 'No South Dakota building', p: 'Modern Age Coders has no center anywhere in South Dakota and claims none. Teaching is live online from India; a laptop or desktop, sound and a steady connection are enough.' }
  },

  fees: {
    h2: 'Fees for South Dakota families',
    intro: 'The same three figures, east river or west river.',
    first: 'An entire first lesson free, ending with a suggested level, course and time slot.',
    group: 'One month of live lessons in a batch of fifteen to twenty students placed by level.',
    private: 'One month on the same pattern with a teacher working with one student.',
    closer: 'South Dakota families pay a single rate in US dollars. We start billing only after the free lesson, once you have agreed the course and time, and the pricing page explains how holidays and missed lessons work.'
  },

  reviewsH2: 'Reviews on Google from families and learners',

  book: {
    h2: 'Book a free lesson in South Dakota',
    intro: 'Tell us the grade, the goal and your time zone. A first grader might start with pattern puzzles, a seventh grader with a game, and a junior with the Sioux Falls recreation data.',
    success: 'Thank you. We will contact you shortly to arrange a class for your South Dakota student.'
  },

  faq: {
    h2: 'South Dakota coding and AI questions',
    intro: 'Answers from SD DOE, Code.org and the College Board. Our own suggestions say so.',
    items: [
      { q: 'Does South Dakota have computer science standards?', a: 'Yes. SD DOE published K-8 computer science standards adopted April 14, 2025, in bands for grades K-2, 3-5 and 6-8.' },
      { q: 'Can computer science count toward a South Dakota diploma?', a: 'Yes, in one way. A state-approved advanced computer science course may replace one unit of a science elective for the base diploma and the Advanced Career Endorsement. It may not replace Biology.' },
      { q: 'Which courses can replace a science elective?', a: 'SD DOE lists Networking Technologies, Computer Programming I and II, PLTW Computer Science Principles, PLTW Computer Science A or AP Computer Science A, PLTW Cybersecurity, and AP Computer Science Principles. Robotics is reviewed case by case.' },
      { q: 'Does the substitution count for the Advanced Honors Endorsement?', a: 'No. SD DOE says the advanced CS substitution may not count for the Advanced or Advanced Honors Endorsements.' },
      { q: 'Do the SD standards mention AI?', a: 'Yes. The 2025 standards document says one goal is to explicitly indicate where artificial intelligence is referenced or where skills build toward understanding it.' },
      { q: 'How many South Dakota high schools offer computer science?', a: 'Code.org (2025) reports 97 of 178 South Dakota high schools, about 54.5%, offering foundational CS in 2023 to 2024.' },
      { q: 'Which time zone are South Dakota classes in?', a: 'Whichever your town keeps. IANA places eastern South Dakota on Central time and western South Dakota on Mountain time, and we confirm lessons in your zone.' },
      { q: 'When can South Dakota students take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there a South Dakota center?', a: 'No. There is no Modern Age Coders center in South Dakota. Every lesson is live and online, taught from India.', boiler: true },
      { q: 'Do your classes earn the science-elective substitution?', a: 'No. Only a state-approved school course does. Our classes build the skills and projects that make that course easier, and graded school work stays the student\'s own.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'Next for South Dakota learners',
    html: 'Students on the AP route can see <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Younger builders can start with <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>, and parents comparing states can read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a>, where a CS course is now required.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Dakota and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/coding-milestones-by-age', label: 'Coding milestones by age' }
  ],

  personalityCss: `
.cg-root.cg-asd .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-asd .cg-hero h1 { font-weight: 780; letter-spacing: -0.03em; line-height: 1; }
.cg-root.cg-asd .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-asd .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-asd .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.015em; }
.cg-root.cg-asd .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-asd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'South Dakota, read raw 17 to 18 October 2026: SD DOE Computer Science Standards PDF (adopted April 14, 2025; committee created spring 2024; K-8 bands K-2, 3-5, 6-8; 2017 CSTA and 2016 K-12 CS Framework; 11 state standards referenced, most from Montana, Idaho and North Dakota; explicit AI goal; overlap with technology standards); SD DOE Content Standards (Educational Technology Standards adopted 2021; reviewed every five to seven years; no mandated curriculum); SD DOE Graduation Requirements (July 16, 2018; ARSD 24:43:11); SD DOE Advanced CS page and guidelines (replace one science elective, not Biology, not Advanced or Advanced Honors; six listed courses; Robotics case by case); Code.org (2025) access 38%, 39%, 42%, 51.4%, 55%, 97 of 178 in 2023-24, no participation data; College Board AP schools 51 and 67 (public 43 and 57, non-public 8 and 10); IANA America/Chicago (eastern SD) and America/Denver (western SD).',
    localProject: 'City of Sioux Falls Parks and Recreation Activity Points (CC BY 4.0), fetched 18 October 2026: 1,801 records (count matched over two pages), 2018 to 2022; our Frequency bins 0: 3, 1: 1,380, 2 to 4: 286, 5 to 9: 81, 10 to 19: 32, 20 or more: 19; median 1, mean 2.11, max 65; years 352, 357, 221, 412, 459; 126 blank categories; 7 records spelled Weeday Morning. Lesson family: binning, skew, label cleaning.',
    requiredMentions: [
      'April 14, 2025',
      'spring of 2024',
      'Montana, Idaho and North Dakota',
      'July 16, 2018',
      '24:43:11',
      'It may not replace Biology',
      'one unit of a science elective',
      '97 of 178',
      '51 in 2023 and 67 in 2024',
      'mean is 2.11',
      'western South Dakota under US mountain time',
      '1,801 Sioux Falls recreation records'
    ],
    sources: [
      { claim: 'SD DOE: South Dakota Computer Science Standards, adopted April 14, 2025.', url: 'https://doe.sd.gov/ContentStandards/documents/Adopted-ComputerScience-0425.pdf' },
      { claim: 'SD DOE: Content Standards page, adoption years and review cycle.', url: 'https://doe.sd.gov/ContentStandards/' },
      { claim: 'SD DOE: High School Graduation Requirements, July 16, 2018, ARSD 24:43:11.', url: 'https://doe.sd.gov/gradrequirements/' },
      { claim: 'SD DOE: Advanced Computer Science replacing a science elective.', url: 'https://doe.sd.gov/gradrequirements/advancedcomputerscience.aspx' },
      { claim: 'SD DOE: Guidelines for Replacing Science Electives with Advanced Computer Science Courses.', url: 'https://doe.sd.gov/gradrequirements/documents/Guidelines.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: SD access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Sioux Falls: Parks and Recreation Activity Points (CC BY 4.0).', url: 'https://services.arcgis.com/YpECgwASS4iMvgsA/arcgis/rest/services/RecreationActivitiesPubMap/FeatureServer' },
      { claim: 'IANA tzdb northamerica: central and mountain lists, America/Chicago and America/Denver.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'South Dakota CS participation: the Code.org sheet has no value in any year, so no enrollment figure is printed or estimated.',
      'Which South Dakota counties keep Mountain time: only the IANA wording (eastern and western South Dakota) is used; no county is named.',
      'Staff names and named colleges in the SD DOE dual-credit and contact lists: not printed.',
      'The meaning of the Frequency field: not documented in the layer, so it is described only as a count.',
      'A reason for the lower 2020 record count in the recreation data: none given by the source, none offered.',
      'City of Sioux Falls Trees layer: gis.siouxfalls.gov refused connection twice, so it was not used.',
      'That our classes earn the science-elective substitution: refused; only state-approved school courses do.',
      'Any affiliation with SD DOE, the City of Sioux Falls, Code.org or the College Board.'
    ]
  }
};
