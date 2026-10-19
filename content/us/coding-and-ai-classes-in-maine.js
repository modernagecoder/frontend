'use strict';
// Maine (cg- state page, US cluster Phase 4, row 79). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Maine does not treat computer science as a separate required course; its diploma statute lists five subject
// areas, and its Department of Education pushes an interdisciplinary, project-based approach (MOOSE modules, a pilot
// PD grant, an annual showcase). Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-maine/):
//  - www.maine.gov/doe returned 403 (CloudFront) for its CS page, sitemap and diploma page; mainedoenews.net (the
//    department's newsroom, posts "by Maine Department of Education") returned 429 on the 4th request (doe-403.txt).
//    Neither retried. The three newsroom posts read before the 429 are used.
//  - Maine Legislature, Title 20-A section 4722, High school diploma standards (statute-20A-4722.txt): program of "at
//    least 4 years"; "Students may demonstrate achievement of the standards through multiple pathways"; minimums:
//    "English--4 years", "Social studies and history, including American history, government, civics and personal
//    finance--2 years", "Mathematics--2 years", "Science, including at least one year of laboratory study--2 years",
//    "Fine arts, which may include art, music, forensics or drama--one year", each "or the equivalent in standards
//    achievement"; amendments PL 2019, c. 202 and PL 2021, c. 571. No computer science line.
//  - Maine DOE newsroom, 14 July 2022, Computer Science Education Showcase media release: "Instead of computer science
//    being a separate course only some students take or an "add on", Maine provides the support and resources to
//    encourage all schools to provide interdisciplinary, project-based computer science learning experiences"; held at
//    the Roux Institute; Commissioner Pender Makin: "Computer science is about approaching a problem with optimism,
//    logic, critical thinking, design thinking, creativity and vision."
//  - Maine DOE newsroom, 30 August 2022: "Maine's 130th legislature ... created a pilot grant program to provide funding
//    for high-quality, teacher-developed or teacher-led professional development for PK-12 computer science pedagogy and
//    content"; application window opened "Thursday September 1, 2022"; "no limit to the grant amount awarded per
//    applicant". (The sponsor's name and the priority list's demographic clauses are not used.)
//  - Maine DOE newsroom, 16 November 2022: "The MOOSE modules are interdisciplinary, project-based modules designed by
//    Maine teachers that introduce students to computational thinking, programming, and data science."
//  - Code.org (2025) raw sheet: ME access no 2018-19 value, 56% (2019-20), 60%, 66% (2021-22), no 2022-23 value, 61.7%
//    (2023-24), 58.5% (2024-25: 72 of 123, source "State Education Agency and School Catalogs"); no participation values.
//  - College Board, School Report of AP Exams by State 2023-24: ME schools with AP exams 126 (2023), 126 (2024); public
//    97 then 100, non-public 29 then 26.
//  - IANA zone.tab: America/New_York; Rule US 2007: November 1, 2026 and March 14, 2027.
//  - Project: Maine GeoLibrary, Maine_Lighthouses_GeoLibrary (FeatureServer layer 5, copyright Maine Office of GIS;
//    item licence "Not to be used for navigational purposes"), downloaded 18 October 2026: 63 records; Status active 54,
//    inactive 7, demolished 1, unknown 1; County Knox 15, Hancock 13, Washington 11, Lincoln 6, Cumberland 6, York 5,
//    Sagadahoc 4, Waldo 2, blank 1; our filter active and Knox: 13; names containing "(historical)": 6, of which 2 have
//    Status active; names with "Light Station" 29, with "Lighthouse" 10.
// Lesson family: filter and count with combined conditions (and fields that contradict each other).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MAINE', label: 'Maine', blurb: 'Coding and AI for Maine students, where computer science is taught across subjects, with a Maine lighthouse data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-maine',
  code: 'am',
  accent: '#275C55',
  accentRationale: 'Maine: #275C55, a muted spruce-and-sea teal from the allocation table, clear of the North Carolina green and the US blues, with good text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Maine',
    eyebrow: 'Maine, United States',
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
  routeLabel: 'Maine',
  title: 'Coding and AI Classes in Maine | Live Online',
  description: 'Live online coding and AI classes for Maine students: the diploma statute, the interdisciplinary approach to CS, state figures, and a lighthouse data project.',
  ogDescription: 'Maine teaches computer science across subjects instead of as one required course. What the diploma law says, what the numbers show, and live classes for Maine students.',
  twitterDescription: 'Maine coding and AI classes, live online, with a Python project on Maine lighthouse data.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Maine Students',
    description: 'Block coding, Python, web, AP Computer Science and AI for Maine students from elementary to high school, taught live online in level-matched groups or one to one.'
  },

  h1: 'Coding and AI classes in Maine',
  capsuleQ: 'Do Maine students have to take computer science?',
  capsule: 'No. Maine&rsquo;s diploma statute, Title 20-A section 4722, sets minimums in English, social studies and history, mathematics, science and fine arts, and names no computer science course. The Maine Department of Education instead encourages computer science woven into other subjects through project work. Modern Age Coders adds focused, live online coding and AI classes for Maine students, from block games to AP Computer Science.',
  lead: 'Maine has taken a quieter route to computer science than states that legislated a course. Its diploma law has stayed with five subject areas, and the Department of Education has said plainly that it does not want computer science to be a separate course only some students take or an add-on. It wants it inside everything else: teacher-designed MOOSE modules that bring programming and data science into ordinary lessons, a pilot grant for teacher training, and an annual showcase of student work. That approach has a strength and a weakness. Every subject can carry some computing, but a student who wants sustained, sequenced programming may find only a few hours of it in a year. This page sets out the statute, the department&rsquo;s own words, the published figures for Maine, and a small project on Maine&rsquo;s lighthouses that teaches filtering and counting in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Maine.',

  picks: {
    eyebrow: 'Course picks for Maine',
    h2: 'Four courses that give Maine students a full sequence',
    intro: 'Where school weaves computing into other subjects, these add the step-by-step depth. The free first class sets the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Blocks to finished games and apps, a full sequence of programming ideas rather than one-off activities.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first line to data projects, including the Maine lighthouse filter on this page.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles with the Create task, for students whose school has no standalone course.' },
      { course: 'kids-ai-web-development-course', band: 'Grades 4 to 8', note: 'Real websites built by hand, so younger students see how the pages they use every day are made.' }
    ]
  },

  sections: [
    {
      id: 'diploma', tint: '', eyebrow: 'The diploma statute',
      h2: 'What Maine law requires for a high school diploma',
      intro: 'Title 20-A, section 4722, as published by the Maine Legislature and read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Minimum diploma requirements in Title 20-A section 4722, subsection 2', head: ['Subject area', 'Minimum in the statute'], rows: [
          ['English', '4 years or the equivalent in standards achievement'],
          ['Social studies and history, including American history, government, civics and personal finance', '2 years or the equivalent'],
          ['Mathematics', '2 years or the equivalent'],
          ['Science, including at least one year of laboratory study', '2 years or the equivalent'],
          ['Fine arts, which may include art, music, forensics or drama', 'One year or the equivalent'],
          ['Computer science', 'Not listed in the statute']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'At least four years', p: 'The instructional program leading to a diploma must last at least four years and meet any further requirements set by the commissioner and the local school board.' },
          { h3: 'Multiple pathways', p: 'The statute lets students show they meet the standards through multiple pathways, with evidence from examinations, portfolios, performances, exhibitions, projects and community service.' },
          { h3: 'Local boards add more', p: 'Because local boards can set further requirements, a particular Maine district may ask for more than the statute. A school counselor can confirm whether computing counts anywhere locally.' }
        ] },
        { kind: 'p', text: 'The maine.gov pages for the Department of Education&rsquo;s computer science and diploma guidance refused our requests, so this page does not state the adoption year or content of any Maine computer science standards. What we can say from the statute is that computer science is not one of the five named diploma areas, and from the department&rsquo;s newsroom that it is meant to live inside them.' }
      ]
    },
    {
      id: 'approach', tint: 'deep', eyebrow: 'The Maine approach',
      h2: 'Computer science inside other subjects: what the Maine DOE says it is doing',
      intro: 'Three posts from the Maine Department of Education newsroom, from 2022, quoted as published.',
      body: [
        { kind: 'table', caption: 'Maine Department of Education computer science initiatives named in its newsroom', head: ['Date posted', 'Initiative', 'What the department said'], rows: [
          ['July 14, 2022', 'Computer Science Education Showcase', 'Held at the Roux Institute; Maine encourages all schools to provide interdisciplinary, project-based computer science at all grade levels and across subjects'],
          ['August 30, 2022', 'Pilot professional development grant', 'Created by the 130th Legislature for teacher-developed or teacher-led PK-12 computer science training; applications opened September 1, 2022'],
          ['November 16, 2022', 'Computer Science MOOSE modules', 'Interdisciplinary, project-based modules designed by Maine teachers that introduce computational thinking, programming and data science']
        ] },
        { kind: 'callout', h3: 'In the commissioner&rsquo;s words', p: 'At the 2022 showcase, Education Commissioner Pender Makin said: &ldquo;Computer science is about approaching a problem with optimism, logic, critical thinking, design thinking, creativity and vision.&rdquo; The department added that it wants computer science to be meaningful for every educator and every student, not only an elite group.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The strength', p: 'A science class that models data and an art class that codes a pattern both teach computing in context, which is how many students first see why it matters.' },
          { h3: 'The gap', p: 'Woven-in lessons rarely build a long chain of skills, from variables to functions to data structures, in order. That sequence is what an AP exam or a first internship expects.' },
          { h3: 'Where we fit', p: 'Our classes supply the sequence: weekly, cumulative programming with one teacher, so the interdisciplinary projects at school have a solid technical base under them.' }
        ] }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published figures',
      h2: 'Close to six in ten Maine high schools list a computer science course',
      intro: 'Two years in the Code.org series carry no Maine number at all; they stay empty below rather than being guessed.',
      body: [
        { kind: 'table', caption: 'Maine high schools with a computer science course, Code.org (2025) access trend', head: ['Year', 'Maine share'], rows: [
          ['2018 to 2019', 'Blank in the sheet'],
          ['2019 to 2020', '56%'],
          ['2020 to 2021', '60%'],
          ['2021 to 2022', '66%'],
          ['2022 to 2023', 'Blank in the sheet'],
          ['2023 to 2024', '61.7%'],
          ['2024 to 2025', '58.5%, which is 72 of 123 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Other Maine figures', head: ['Measure', 'Maine', 'Where it comes from'], rows: [
          ['Primary source for the 2024 to 2025 count', 'State Education Agency and School Catalogs', 'Code.org (2025), latest access tab'],
          ['Students enrolled in CS', 'No Maine value published', 'Code.org (2025), participation tabs'],
          ['Schools with AP exams, 2023', '126 (97 public, 29 non-public)', 'College Board AP report by state'],
          ['Schools with AP exams, 2024', '126 (100 public, 26 non-public)', 'College Board AP report by state']
        ] },
        { kind: 'p', text: 'Maine&rsquo;s access line rose to 66% in 2021 to 2022, then read 61.7% and 58.5% in the two latest years. With a gap year in the middle and only 123 high schools in the count, a change of a few schools moves the percentage by several points, so we would not read much into the dip. More useful is the absence of any participation figure: with computing spread across subjects, counting how many students study computer science is genuinely hard, and the sheet does not try for Maine.' },
        { kind: 'callout', h3: 'Citation', p: 'Access figures: Code.org (2025). 2025 State of AI + CS Education, published data sheet, Maine rows. AP school counts: College Board, School Report of AP Exams by State, 2023 to 2024. Values quoted, datasets not republished.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many Maine lighthouses are still active? Filtering and counting in Python',
      intro: 'The Maine GeoLibrary publishes a lighthouse layer with a name, a county and a status for each light. Students load it and answer questions with filters.',
      body: [
        { kind: 'table', caption: 'Maine GeoLibrary lighthouse records by county, with the active ones counted (our counts, downloaded 18 October 2026)', head: ['County', 'All records', 'Status active'], rows: [
          ['Knox', '15', '13'],
          ['Hancock', '13', '10'],
          ['Washington', '11', '7'],
          ['Lincoln', '6', '6'],
          ['Cumberland', '6', '6'],
          ['York', '5', '5'],
          ['Sagadahoc', '4', '4'],
          ['Waldo', '2', '2'],
          ['County left blank', '1', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. One condition', p: 'Our download contained 63 records. Filtering on Status gives 54 active, 7 inactive, 1 demolished and 1 marked unknown. Students check that the four counts add back to 63.' },
          { h3: '2. Two conditions', p: 'Active and in Knox County gives 13, the largest group. Combining conditions with and, or and not is the core skill, and a wrong operator is the classic bug.' },
          { h3: '3. Fields that disagree', p: 'Six names contain the word historical in brackets, yet two of those six have Status active. One field says the light is history, another says it is working. Which do you trust?' }
        ] },
        { kind: 'spec', title: 'Text filters are a second exercise', p: 'Searching the names finds 29 containing Light Station and 10 containing Lighthouse. Students learn that a text search depends on exact wording and capital letters, and that a name is a poor substitute for a proper category field.' },
        { kind: 'callout', h3: 'Our counts, their layer', p: 'Every count above is ours, from one download of the Maine GeoLibrary layer, which credits the Maine Office of GIS. The publisher&rsquo;s only stated condition is that the data is not to be used for navigational purposes, and nothing here is navigation advice. The publisher has not checked our results.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time, from Kittery to Fort Kent',
      intro: 'All of Maine keeps Eastern Time, the IANA zone America/New_York. Our teachers keep India time, so the conversion is done for you.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'India is ahead', p: 'By 9 hours 30 minutes while Maine is on daylight saving time, and by 10 hours 30 minutes in the winter months, because India never changes its clocks.' },
          { h3: 'This year&rsquo;s switch', p: 'The US rule moves Maine clocks back an hour on November 1, 2026 and forward an hour on March 14, 2027; a class booked for 4 pm Eastern stays at 4 pm Eastern.' },
          { h3: 'Confirmed in Eastern', p: 'Bookings and reminders always quote Eastern Time, so a family in Bangor or Presque Isle has nothing to work out.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A sequence from first blocks to AP',
    intro: 'Grades are only a starting point; the free lesson places your student.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and play', p: 'Scratch games and puzzles, then gentle lessons on what AI tools can and cannot do.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Typed code', p: 'Python with games and drawings, or Minecraft as a route into real code for keen players.', courses: ['python-ai-kids-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Grades 9 to 10', h3: 'Sustained projects', p: 'Python or JavaScript at depth, with data work on public Maine layers.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java, and machine learning built on data the student can question.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI writes the filter, who notices the historical light marked active?',
    intro: 'A person who understands the data. That is why Maine students still benefit from learning to code.',
    p1: 'Ask an AI tool how many Maine lighthouses are active and it may answer 54 from this same layer, and stop there. It probably will not mention that two lights it just counted are named as historical, or that one record has no county. Those details surface only when a student looks at the rows behind the number.',
    p2: 'The Maine commissioner described computer science as approaching a problem with logic, critical thinking and design thinking. That is exactly the skill an AI tool does not replace: deciding what a count should include, checking the edge cases, and saying clearly what the answer does and does not mean.',
    closer: 'A Maine student who can filter a dataset and then question it is ready to use AI tools well, rather than simply believe them.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the coast to the County, one live class',
    intro: 'Maine is large and rural, and distance is part of school life. An online class removes the drive entirely.',
    cells: [
      { h3: 'Distance does not matter', p: 'An island teenager and a Lewiston teenager can be classmates here; neither needs a ferry ticket or a long winter drive to get to the lesson.' },
      { h3: 'Complements school', p: 'Teachers use US grades and can connect lessons to interdisciplinary projects a Maine student is doing at school. Assessed school work always stays the student&rsquo;s own.' },
      { h3: 'Groups by level', p: 'Each batch has fifteen to twenty students at a similar stage, from Maine and across the US.' },
      { h3: 'Private teaching', p: 'One-to-one classes for AP preparation, competitions, or a student who wants to go further and faster.' },
      { h3: 'When it happens', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Start with a free class', p: 'A complete lesson with a real teacher, then a recommended level, course and time. No card details are taken for it.' }
    ],
    spec: { title: 'Online, taught from India', p: 'Modern Age Coders has no location in Maine and does not claim one. Classes are live online from India; a student needs a computer with sound and an internet connection that can hold a video call.' }
  },

  fees: {
    h2: 'Fees for Maine families',
    intro: 'The three choices, priced in the cards.',
    first: 'A full free lesson, finishing with a suggested level, course and slot.',
    group: 'A month of classes in a batch of fifteen to twenty at the same level.',
    private: 'A month of classes with one teacher for one student.',
    closer: 'All US families pay the same rate in US dollars, whether in Portland or in Aroostook County. Nothing is charged until after the free lesson and your agreement on course and time; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free class for a Maine student',
    intro: 'Tell us the grade and interests: a block game for a second grader, a first website for a sixth grader, or the lighthouse filter for a high schooler.',
    success: 'Thank you. We will be in touch soon about a class for your Maine student.'
  },

  faq: {
    h2: 'Maine coding and AI questions',
    intro: 'Short answers with the source named, read in October 2026.',
    items: [
      { q: 'Is computer science a graduation requirement in Maine?', a: 'No. Title 20-A section 4722 lists English, social studies and history, mathematics, science and fine arts as the diploma minimums, with no computer science course. Local boards may add requirements.' },
      { q: 'How many years of maths does Maine require?', a: 'The statute sets 2 years of mathematics or the equivalent in standards achievement, alongside 4 years of English and 2 of science including one year of laboratory study.' },
      { q: 'How does Maine teach computer science?', a: 'The Maine Department of Education says it encourages all schools to provide interdisciplinary, project-based computer science at all grade levels and across subjects, rather than as a separate course only some students take.' },
      { q: 'What are the Maine MOOSE computer science modules?', a: 'The department describes them as interdisciplinary, project-based modules designed by Maine teachers that introduce students to computational thinking, programming and data science.' },
      { q: 'How many Maine high schools offer computer science?', a: 'The Code.org 2025 data counts 72 of 123 Maine high schools, or 58.5%, in 2024 to 2025, based on state education agency data and school catalogs.' },
      { q: 'How many Maine students take computer science?', a: 'The Code.org 2025 sheet publishes no participation figure for Maine, so that number is not available from this source.' },
      { q: 'What time are classes for Maine students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are confirmed in Eastern Time, America/New_York.' },
      { q: 'Do your classes count for Maine school credit?', a: 'No. Credit and diploma requirements are decided by the school and district. Our classes add a full programming sequence alongside school, and graded school work stays the student\'s own.' },
      { q: 'What does the lighthouse project teach?', a: 'Filtering and counting. In our download of the Maine GeoLibrary layer, 54 of 63 lighthouse records have Status active, and two lights named as historical are still marked active.' },
      { q: 'Is there a Modern Age Coders center in Maine?', a: 'No. We have no premises in Maine; every class is live online from India.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Maine students',
    html: 'Students without a standalone school course can prepare through <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Families who homeschool can read our <a class="cg-inline-link" href="/homeschool-coding-curriculum">homeschool coding curriculum</a>, and game-minded students can try <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>. Every state links from the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Maine and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
    { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' }
  ],

  personalityCss: `
.cg-root.cg-am .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-am .cg-hero h1 { font-weight: 690; letter-spacing: -0.012em; line-height: 1.1; }
.cg-root.cg-am .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-am .cg-eyebrow { letter-spacing: 0.16em; font-weight: 640; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-am .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.008em; }
.cg-root.cg-am .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-am .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-am .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-am .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-am .cg-callout { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Maine, read raw 17 and 18 October 2026: maine.gov/doe returned 403 and mainedoenews.net 429 (neither retried). Maine Legislature Title 20-A section 4722 (four-year program; multiple pathways; English 4, social studies and history 2, mathematics 2, science 2 with one lab year, fine arts 1; no CS). Maine DOE newsroom: 14 July 2022 showcase release (interdisciplinary, project-based; Roux Institute; Commissioner Pender Makin quote); 30 August 2022 pilot PD grant from the 130th Legislature, applications from September 1, 2022; 16 November 2022 MOOSE modules. Code.org (2025): access 56%, 60%, 66%, 61.7%, 58.5% (72 of 123, 2024-25), source State Education Agency and School Catalogs; no participation. College Board AP schools 126 and 126. IANA America/New_York and US DST rule.',
    localProject: 'Maine GeoLibrary Maine_Lighthouses_GeoLibrary (Maine Office of GIS; not for navigational purposes), downloaded 18 October 2026: 63 records; active 54, inactive 7, demolished 1, unknown 1; Knox 15 (13 active), Hancock 13 (10), Washington 11 (7), Lincoln 6, Cumberland 6, York 5, Sagadahoc 4, Waldo 2, blank 1; 6 historical names, 2 of them active; Light Station 29, Lighthouse 10. Lesson family: filter and count with combined conditions.',
    requiredMentions: [
      'Title 20-A section 4722',
      'at least one year of laboratory study',
      'forensics or drama',
      'MOOSE modules',
      '130th Legislature',
      'September 1, 2022',
      'Roux Institute',
      '72 of 123',
      '126 (100 public, 26 non-public)',
      '54 active',
      'not to be used for navigational purposes'
    ],
    sources: [
      { claim: 'Maine Legislature: Title 20-A section 4722, High school diploma standards.', url: 'https://legislature.maine.gov/statutes/20-A/title20-Asec4722.html' },
      { claim: 'Maine DOE newsroom, 14 July 2022: Computer Science Education Showcase media release.', url: 'https://mainedoenews.net/2022/07/14/computer-science-education-showcase-highlights-maines-interdisciplinary-project-based-approach-to-computer-science/' },
      { claim: 'Maine DOE newsroom, 30 August 2022: Computer Science Professional Development Grant.', url: 'https://mainedoenews.net/2022/08/30/computer-science-professional-development-grant-application-4/' },
      { claim: 'Maine DOE newsroom, 16 November 2022: Computer Science MOOSE modules webinars.', url: 'https://mainedoenews.net/2022/11/16/webinars-using-computer-science-moose-modules-csedweek-maineteachescs/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Maine access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Maine GeoLibrary: Maine Lighthouses layer.', url: 'https://services1.arcgis.com/RbMX0mRVOFNTdLzd/ArcGIS/rest/services/Maine_GeoLibrary_Structure/FeatureServer/5' },
      { claim: 'IANA tzdb: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Maine CS standards adoption year or content: not printed; maine.gov/doe returned 403 and was not retried.',
      'Later Maine DOE newsroom posts (third annual showcase): not read; mainedoenews.net returned 429 and was not retried.',
      'The grant bill sponsor\'s name and the grant priority list\'s demographic clauses: not used.',
      'A falling access trend: not claimed; a gap year and a small school count.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'Lighthouse history or navigation status beyond the layer fields: not claimed; only our counts, labelled as ours.',
      'That our classes earn Maine school credit: refused.',
      'Any affiliation with the Maine DOE, the Maine Office of GIS, Code.org or the College Board.'
    ]
  }
};
