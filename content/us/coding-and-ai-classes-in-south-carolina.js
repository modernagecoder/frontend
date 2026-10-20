'use strict';
// South Carolina (cg- state page, US cluster Phase 4, row 98). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: South Carolina lists one unit of computer science among the twenty-four units for a high school diploma.
// What does the regulation say, what do the published figures show, and how does a student go beyond one unit?
// Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-south-carolina/):
//  - SC Department of Education (ed.sc.gov): DNS resolves but the connection timed out on 17 October and once more
//    on 18 October 2026 (60 s); recorded as unreachable (dept-unreachable.txt). Department pages not used.
//  - SC Code of Regulations, Chapter 43, State Board of Education, published by the SC Legislature
//    (scstatehouse.gov/coderegs/Chapter 43.pdf), regulation text: "43–234. Defined Program, Grades 9–12 and
//    Graduation Requirements"; "The student must earn a total of twenty-four units of credit as follows"; the unit
//    table lists "computer science 1.0"; "A student who has earned the one-half credit in Keyboarding by the 2017–18
//    school year will be awarded one-half unit of credit for Computer Science."; one unit for "a minimum of 120 hours
//    of instruction", one-half for 60; "Schools whose organizational structure includes grades eleven and twelve must
//    offer Advanced Placement courses."; Virtual SC courses "if available, must be offered by the district" when a
//    school's courses do not meet a student's needs.
//  - SC Code of Laws, Title 59 Chapter 39, Section 59-39-100 (scstatehouse.gov): "Beginning with students entering
//    the ninth grade in School Year 1997-1998, the number of units required for a high school diploma was increased
//    to twenty-four units."; "To support the Profile of the Graduate, for students entering the ninth grade beginning
//    with the 2018-2019 School Year".
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): SC access 69%
//    (2018-19), 80%, 90%, 93%, 94%, 91.7% (2023-24), 92% (2024-25); most recent 276 of 300 (2024-2025, "State Education
//    Agency"); participation 21.8% (2020-21), 27.5% (2021-22), "-" (2022-23), 25.67% (2023-24); most recent 61,733 of
//    240,463, matched to 2023-24; denominator NCES fall 2022. National 2023-24 participation 6.4%; access 60%.
//  - College Board, School Report of AP Exams by State 2023-24: South Carolina 378 (2023), 380 (2024); public 246, 305;
//    non-public 132, 75.
//  - IANA tzdb northamerica: Eastern list "Pennsylvania, Rhode Island, South Carolina, eastern Tennessee,"; Rule US
//    2007 max Mar Sun>=8, Nov Sun>=1.
//  - City of Charleston Open Data hub, Parks (item 109c6c5688f040908a11a7dee3a04b29, licence text: the City "makes no
//    warranty" and "explicity disclaims" warranties), fetched 18 October 2026: 132 records, 131 distinct
//    FACILITYSITEID; FAC-848 appears twice, the two rows differing in URL scheme (https vs http) and in RESTROOM,
//    DOGPARK and ULTIMATEGOLF; FACUSE PARKFAC 115, RECFAC 17; REGION Peninsula 70, West Ashley 29, James Island 19,
//    Johns Island 8, Daniel Island 5, Cainhoy 1; PLAYGROUND YES 43, BASKETBALL YES 21, TENNIS YES 15, DOGPARK YES 11,
//    PICNICAREA YES 27 / null 55 / empty 50; 1,640 of 1,848 amenity cells blank, empty or null (our count).
// Lesson family: deduplication (choosing a key, near-duplicates, and three kinds of missing value).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SOUTH CAROLINA', label: 'South Carolina', blurb: 'Coding and AI for South Carolina students, where one computer science unit is part of the diploma, with a Charleston parks deduplication project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-south-carolina',
  code: 'asc',
  accent: '#443C85',
  accentRationale: 'South Carolina: #443C85, a muted indigo close to the state flag blue, allocated in alloc.tsv row 98 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'South Carolina',
    eyebrow: 'South Carolina, United States',
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
  routeLabel: 'South Carolina',
  title: 'Coding and AI Classes in South Carolina | Live Online',
  description: 'Coding and AI classes for South Carolina students, live online: the one-unit computer science diploma rule, the published figures, and a Charleston parks project.',
  ogDescription: 'South Carolina lists one unit of computer science among its twenty-four diploma units. The rule, the numbers behind it, and live online classes that go further.',
  twitterDescription: 'South Carolina coding and AI classes, live online, beyond the one CS unit.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for South Carolina Students',
    description: 'Block coding, Minecraft coding, Python data projects and AP Computer Science Principles for South Carolina students from kindergarten to twelfth grade, taught live online in English.'
  },

  h1: 'Coding and AI classes in South Carolina',
  capsuleQ: 'Is computer science required to graduate in South Carolina?',
  capsule: 'Yes. State Board of Education Regulation 43-234 lists computer science 1.0 among the twenty-four units of credit a student must earn for a South Carolina high school diploma. In 2024 to 2025, 276 of 300 South Carolina high schools offered computer science, according to Code.org (2025). We teach South Carolina students live online, from first block programs to Python and AP Computer Science Principles.',
  lead: 'In South Carolina, computer science is not an optional extra on the diploma: it has its own line in the State Board of Education&rsquo;s unit table, alongside English, mathematics and science. That changes the family question. It is no longer whether a student will meet computer science, but whether one unit is enough for what they want to do next. This page quotes the regulation as the Legislature publishes it, sets out the access and participation figures, shows a Charleston open data project built around a deceptively simple task, removing duplicates, and explains how our live classes add depth from the Upstate to the Lowcountry.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in South Carolina.',

  picks: {
    eyebrow: 'Course picks for South Carolina',
    h2: 'Four courses that build past the required unit',
    intro: 'Choose by grade, then let the free lesson confirm the level. A student who has finished the school unit early can start further up.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Kindergarten to grade 4', note: 'Block coding with characters, music and simple games, so sequencing and repetition feel natural long before high school.' },
      { course: 'minecraft-coding-for-kids-course', band: 'Grades 3 to 6', note: 'Code inside a world children already know, with loops that build structures and conditions that change the game.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python for real tables: loading, cleaning, deduplicating and charting, as in the Charleston parks project below.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, its Create performance task and the exam, for students who want more than one unit.' }
    ]
  },

  sections: [
    {
      id: 'unit', tint: '', eyebrow: 'The diploma rule',
      h2: 'One unit of computer science, written into Regulation 43-234',
      intro: 'South Carolina&rsquo;s graduation requirements sit in the State Board of Education regulations, which the South Carolina Legislature publishes in its Code of Regulations, Chapter 43. We read the regulation there on 18 October 2026, because the Department of Education website did not respond.',
      body: [
        { kind: 'table', caption: 'What Regulation 43-234, Defined Program, Grades 9 to 12 and Graduation Requirements, says about computer science and credit', head: ['Topic', 'The regulation text'], rows: [
          ['Total units', 'The student must earn a total of twenty-four units of credit, set out in a table of subjects'],
          ['Computer science', 'The unit table lists computer science 1.0'],
          ['Keyboarding', 'A student who earned the one-half credit in Keyboarding by the 2017 to 2018 school year is awarded one-half unit of credit for Computer Science'],
          ['What a unit means', 'One unit for an academic standards-based course of at least 120 hours of instruction; one-half unit for at least 60 hours'],
          ['Advanced Placement', 'Schools whose structure includes grades eleven and twelve must offer Advanced Placement courses'],
          ['Virtual courses', 'Where a school&rsquo;s courses do not meet a student&rsquo;s needs, Virtual SC courses, if available, must be offered by the district']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Since 1997 to 1998', p: 'State law, Section 59-39-100 of the South Carolina Code, records that the diploma rose to twenty-four units for students entering ninth grade in the 1997 to 1998 school year.' },
          { h3: 'The Profile of the Graduate', p: 'The same section says that for students entering ninth grade from the 2018 to 2019 school year, the twenty-four units are prescribed in that section and in State Board regulation, to support the Profile of the Graduate.' },
          { h3: 'What 120 hours buys', p: 'A full unit is a substantial course, but it is still one course. It can cover the basics well; it cannot also cover a second language, AP preparation and a portfolio of projects.' }
        ] },
        { kind: 'p', text: 'We quote the regulation and statute as published and add no interpretation of how individual districts schedule the unit. Families with a question about a particular course should ask their school counselor, who works from the district&rsquo;s course coding manual.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'Nine in ten high schools offer it; about a quarter of students were enrolled',
      intro: 'South Carolina values from two spreadsheets: Code.org&rsquo;s 2025 report data (Access and Participation tabs) and the College Board count of schools giving AP exams. Where the Code.org sheet has a dash, we leave the year empty.',
      body: [
        { kind: 'table', caption: 'South Carolina high schools offering CS, and students enrolled in CS (Code.org, 2025)', head: ['Year', 'Schools offering CS', 'Students enrolled in CS'], rows: [
          ['2018 to 2019', '69%', 'Not in the sheet'],
          ['2019 to 2020', '80%', 'Not in the sheet'],
          ['2020 to 2021', '90%', '21.8%'],
          ['2021 to 2022', '93%', '27.5%'],
          ['2022 to 2023', '94%', 'Not reported'],
          ['2023 to 2024', '91.7%', '25.67%, or 61,733 of 240,463'],
          ['2024 to 2025', '92%, or 276 of 300', 'Not reported']
        ] },
        { kind: 'table', mt: true, caption: 'AP schools in South Carolina, from the College Board School Report of AP Exams by State', head: ['Year', 'All schools with AP exams', 'Public', 'Non-public'], rows: [
          ['2023', '378', '246', '132'],
          ['2024', '380', '305', '75']
        ] },
        { kind: 'p', text: 'Against the national line these are high numbers. The Code.org national row shows 60% of high schools offering computer science and 6.4% of students enrolled in 2023 to 2024, so South Carolina&rsquo;s 25.67% was about four times the national share that year. The sheet does not say which courses South Carolina counted, so we print the figure as published and do not link it to the diploma rule ourselves. The student total behind the percentage is the NCES fall 2022 count.' },
        { kind: 'p', text: 'The AP table carries its own puzzle for a careful reader: the total barely moved from 2023 to 2024, while the public and non-public columns moved sharply in opposite directions. The College Board file gives no reason, so we do not suggest one. Citation for the access and participation values: Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'How many Charleston parks are there? A lesson in duplicates',
      intro: 'The City of Charleston Open Data hub publishes a Parks layer with one row per park or recreation facility. Counting rows gives one answer. Counting parks properly gives another, and the gap teaches more than any tutorial.',
      body: [
        { kind: 'table', caption: 'What the Charleston Parks layer contains (our counts from the download of 18 October 2026)', head: ['Check', 'Result'], rows: [
          ['Rows in the layer', '132'],
          ['Distinct FACILITYSITEID values', '131'],
          ['Site ID that appears twice', 'FAC-848'],
          ['Rows marked PARKFAC and RECFAC', '115 and 17'],
          ['Amenity cells that are a space, empty or null', '1,640 of 1,848']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pick the key', p: 'Park names look like a key, and here they nearly are, but the robust choice is the facility site ID. Grouping by it shows 131 sites in 132 rows, so exactly one site is listed twice.' },
          { h3: 'Near, not exact', p: 'The two FAC-848 rows are not identical copies. One link begins https and the other http, and they disagree on RESTROOM, DOGPARK and ULTIMATEGOLF. Deleting either row silently changes the amenity counts.' },
          { h3: 'Three ways to say nothing', p: 'An amenity can be YES, NO, a single space, an empty string or null. PICNICAREA alone has 27 YES, 50 empty strings and 55 nulls. Students map all three blanks to one value before counting.' }
        ] },
        { kind: 'table', mt: true, caption: 'Amenities marked YES across all 132 rows, before deduplication (our counts)', head: ['Amenity field', 'Rows marked YES'], rows: [
          ['PLAYGROUND', '43'],
          ['PICNICAREA', '27'],
          ['BASKETBALL', '21'],
          ['TENNIS', '15'],
          ['DOGPARK', '11']
        ] },
        { kind: 'p', text: 'The project ends with a decision rather than a formula. Students write a rule, for example keep the row with the https link, document it in a comment, and rerun the counts: the dog park total then becomes 10 instead of 11. In pandas the check is <code>df.duplicated(subset=["FACILITYSITEID"], keep=False)</code>, which returns both FAC-848 rows so they can be compared side by side. The regions in the data, from the Peninsula with 70 rows to Cainhoy with 1, make a second exercise in grouping once the duplicate is resolved.' },
        { kind: 'callout', h3: 'Ours, and provisional', p: 'Every count here is our own, from one download. The City of Charleston states that it makes no warranty about the data and disclaims any guarantee of accuracy or completeness, and the city publishes no park total in this form. A student who can explain exactly why their total is 131 has learned the lesson.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'Beyond one unit',
      h2: 'Using the four high school years well',
      intro: 'Our suggested plan for a South Carolina student who wants computer science to be more than a box ticked. It is advice, not a requirement, and it never replaces the school unit.',
      body: [
        { kind: 'table', caption: 'A four-year computer science plan alongside the required unit (our plan)', head: ['Grade', 'At school', 'With us'], rows: [
          ['9', 'The computer science unit, if the school schedules it early', 'Python foundations so the school course feels comfortable'],
          ['10', 'Other required units', 'Data projects like the Charleston parks cleanup, and a first web page'],
          ['11', 'Advanced Placement courses where offered', 'AP Computer Science Principles content and the Create task, or Java for AP CS A'],
          ['12', 'Electives and any remaining units', 'A larger independent project, machine learning or a competition entry']
        ] },
        { kind: 'p', text: 'Younger students follow the same idea at a gentler pace: block coding from kindergarten, Minecraft or game coding in upper elementary, and typed Python in middle school. By ninth grade the required unit becomes a chance to shine rather than a first encounter.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Eastern Time for the whole state',
      intro: 'In the IANA time zone database, South Carolina appears in the list of states on US Eastern Time, kept under America/New_York.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A worked example', p: 'A 6:00 p.m. lesson in Columbia begins at 3:30 a.m. in India while daylight saving lasts, and at 4:30 a.m. once standard time returns. The South Carolina time never moves; only the teacher&rsquo;s does.' },
          { h3: 'Two changes a year', p: 'The IANA rule for the United States moves clocks on the first Sunday in November and the second Sunday in March. This school year that means November 1, 2026 and March 14, 2027.' },
          { h3: 'Confirmed in writing', p: 'Every class time we send is written in Eastern Time, and we resend it in the week of each clock change so that nobody misses a lesson.' }
        ] },
        { kind: 'spec', title: 'Clocks inside code', p: 'Students who build a simple class reminder learn to store times with a named zone such as America/New_York, not a fixed offset, so that the reminder survives the November change without a fix.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From block coding to AP Computer Science Principles',
    intro: 'Typical starting points by grade; the placement lesson decides the actual rung.',
    cols: [
      { band: 'Grades K to 2', h3: 'First programs', p: 'Short block programs, patterns and puzzles that build the habit of thinking in steps.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 3 to 6', h3: 'Worlds and games', p: 'Minecraft and game projects where loops and conditions have visible results.', courses: ['minecraft-coding-for-kids-course', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 7 to 9', h3: 'Python and the web', p: 'Typed code, simple data work and pages a student can share, ready for the school unit.', courses: ['python-ai-kids-masterclass', 'html-css-course-for-beginners-build-real-websites'] },
      { band: 'Grades 10 to 12', h3: 'AP and data science', p: 'AP Computer Science Principles, and Python projects on real public data.', courses: ['ap-computer-science-principles-exam-prep-course', 'data-science-course-for-teens-python-data'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI how many parks Charleston has, and it will count rows',
    intro: 'The tool is quick. The judgement about what counts as one park is still the student&rsquo;s.',
    p1: 'Hand a chatbot the Charleston file and ask for the number of parks, and the likely reply is 132. Ask it to remove duplicates and it may delete one FAC-848 row without mentioning that the two rows disagree about a restroom and a dog park. The answer looks tidy and hides a choice nobody made on purpose.',
    p2: 'Students who have done the deduplication by hand know to ask which key was used and which copy was kept. That is how we teach AI in every course: use it to save typing, never to skip the decision, and always read what it changed.',
    closer: 'South Carolina already gives every student a unit of computer science; the habit of checking a result is what turns that unit into a skill.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Greenville to Beaufort, the classroom is a browser tab',
    intro: 'No commute, no center, and the same lesson whether a student lives in a city or a small town.',
    cells: [
      { h3: 'Learn from home', p: 'Students join from their own computer in Charleston, Columbia, Greenville, Myrtle Beach or anywhere else in the state.' },
      { h3: 'Built around US school', p: 'Teachers use US grades and plan around the school calendar. Graded school work, including anything for the required unit, stays the student&rsquo;s own.' },
      { h3: 'Start free', p: 'One free lesson with a real task shows the right starting level. We ask for no card or payment details for it.' },
      { h3: 'Groups by stage', p: 'Fifteen to twenty students at a similar coding level, from South Carolina and across the United States.' },
      { h3: 'Individual tuition', p: 'One student and one teacher, for AP work, a faster pace or a particular project.' },
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online, from India', p: 'Every lesson is live online and taught from India. Modern Age Coders has no South Carolina office or classroom and does not claim one. A computer, sound and a dependable connection are enough.' }
  },

  fees: {
    h2: 'Fees for South Carolina families',
    intro: 'Three prices, in US dollars, with nothing added later.',
    first: 'A first lesson at no cost, ending with a suggested course, level and time.',
    group: 'A month of live classes in a batch of fifteen to twenty at the same stage.',
    private: 'A month of live classes with one teacher for one student.',
    closer: 'Families anywhere in South Carolina pay the same US dollar rate. We bill only after the free lesson, once course and time are agreed; the pricing page sets out holidays and missed lessons.'
  },

  reviewsH2: 'Parents and students reviewing us on Google',

  book: {
    h2: 'Arrange a free lesson for a South Carolina student',
    intro: 'Tell us the grade and what the student has tried so far. A kindergartner gets a block puzzle, a fifth grader a Minecraft build, and a high schooler the Charleston duplicate hunt.',
    success: 'Thank you. We will contact you soon about a lesson for your South Carolina student.'
  },

  faq: {
    h2: 'South Carolina coding and AI questions',
    intro: 'Answers from the regulation, the published figures and how our classes run.',
    items: [
      { q: 'Is computer science a graduation requirement in South Carolina?', a: 'Yes. State Board of Education Regulation 43-234 lists computer science 1.0 among the twenty-four units of credit required for a South Carolina high school diploma.' },
      { q: 'Does keyboarding count toward the computer science unit?', a: 'Partly. The regulation says a student who earned the one-half credit in Keyboarding by the 2017 to 2018 school year is awarded one-half unit of credit for Computer Science.' },
      { q: 'How many hours is one unit of credit?', a: 'Regulation 43-234 allows one unit for an academic standards-based course of at least 120 hours of instruction, and one-half unit for at least 60 hours.' },
      { q: 'How many South Carolina high schools offer computer science?', a: 'Code.org (2025) reports 276 of 300 South Carolina high schools, or 92%, offering computer science in 2024 to 2025.' },
      { q: 'How many students take computer science in South Carolina?', a: 'The same data reports 61,733 of 240,463 high school students, or 25.67%, enrolled in 2023 to 2024, against 6.4% nationally.' },
      { q: 'Do South Carolina high schools have to offer AP?', a: 'Regulation 43-234 says schools whose structure includes grades eleven and twelve must offer Advanced Placement courses. The College Board lists 380 schools with AP exams in 2024.' },
      { q: 'Can a class with you count as the computer science unit?', a: 'We make no such claim. Units are awarded by schools and districts under the regulation. Our classes add depth and projects alongside the school course.' },
      { q: 'What does the Charleston parks project teach?', a: 'Deduplication. Students find that 132 rows describe 131 park sites, compare the two rows for one site, choose a rule for which to keep and recount, labelling every result as their own.' },
      { q: 'What time zone are South Carolina classes in?', a: 'Eastern Time. We confirm every time in Eastern and resend it around the changes on November 1, 2026 and March 14, 2027.' },
      { q: 'When can classes be scheduled?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Do you have a South Carolina center?', a: 'No. All classes are live online from India, and no South Carolina premises exist or are claimed.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Other pages South Carolina families read',
    html: 'For AP planning, compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> and <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Younger builders can try <a class="cg-inline-link" href="/minecraft-coding-classes-for-kids">Minecraft coding classes</a>, and summer planners can look at <a class="cg-inline-link" href="/computer-science-summer-programs-for-high-school-students">computer science summer programs for high school students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Carolina and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-asc .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3vw, 2.5rem); }
.cg-root.cg-asc .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-asc .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 6px; padding: 0.9rem 1rem; }
.cg-root.cg-asc .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-asc .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-asc .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-asc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asc .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-asc .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'South Carolina, read raw on 18 October 2026: ed.sc.gov unreachable (connection timeout twice); SC Code of Regulations Chapter 43 (Legislature): Reg. 43-234, twenty-four units, computer science 1.0, keyboarding half unit by 2017-18, 120 and 60 hours, AP offering in schools with grades 11 and 12, Virtual SC; SC Code 59-39-100 (twenty-four units from 1997-1998 ninth graders; Profile of the Graduate from 2018-2019); Code.org (2025) data (access 69% to 92%, 276 of 300 in 2024-25; participation 21.8%, 27.5%, 25.67%, 61,733 of 240,463 in 2023-24; national 60% and 6.4%); College Board AP schools 378/380, public 246/305, non-public 132/75; IANA Eastern list and US DST rule.',
    localProject: 'City of Charleston Open Data, Parks (no-warranty licence text), fetched 18 October 2026: 132 rows, 131 FACILITYSITEID, FAC-848 twice (rows differ in URL scheme, RESTROOM, DOGPARK, ULTIMATEGOLF); PARKFAC 115, RECFAC 17; regions Peninsula 70 to Cainhoy 1; YES counts PLAYGROUND 43, PICNICAREA 27, BASKETBALL 21, TENNIS 15, DOGPARK 11 (10 if the https row is kept); PICNICAREA 50 empty, 55 null; 1,640 of 1,848 amenity cells blank. All ours. Lesson family: deduplication and missing values.',
    requiredMentions: [
      'Regulation 43-234',
      'computer science 1.0',
      'twenty-four units',
      '120 hours of instruction',
      '1997 to 1998',
      '276 of 300',
      '61,733 of 240,463',
      '25.67%',
      'FAC-848',
      '1,640 of 1,848'
    ],
    sources: [
      { claim: 'SC Code of Regulations, Chapter 43, State Board of Education: Reg. 43-234 graduation requirements.', url: 'https://www.scstatehouse.gov/coderegs/Chapter%2043.pdf' },
      { claim: 'SC Code of Laws, Title 59 Chapter 39, Section 59-39-100.', url: 'https://www.scstatehouse.gov/code/t59c039.php' },
      { claim: 'Code.org (2025), State of AI + CS Education data: South Carolina and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Charleston Open Data: Parks feature service.', url: 'https://services2.arcgis.com/tQaXW7Zb1Vphzvgd/arcgis/rest/services/Parks/FeatureServer/0' },
      { claim: 'IANA tzdb northamerica: South Carolina in the Eastern list, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'SC Department of Education pages (standards, course lists, guidance): ed.sc.gov did not respond, so nothing from them is printed.',
      'That the high participation figure is caused by the diploma rule: not stated by any source, not claimed.',
      'Any reason for the shift between public and non-public AP school counts: none given by the College Board.',
      'The Code.org 2022 to 2023 and 2024 to 2025 participation values: dashes, left empty.',
      'Park names beyond the duplicated site ID, addresses and the wheelchair field of the CARTA stops layer (considered, not used): counts only.',
      'An official Charleston park total: not published in this form.',
      'That our classes satisfy the computer science unit, and any affiliation with the SC Department of Education, the State Board, the City of Charleston, Code.org or the College Board.'
    ]
  }
};
