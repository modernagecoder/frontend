'use strict';
// Tennessee (cg- state page, US cluster Phase 4, row 100). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Tennessee's published computer science figures jumped in 2024 to 2025, and the state runs on two clocks.
// How should a family read the jump, and how does a class fit across Eastern and Central Tennessee? Sources read raw
// on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-tennessee/):
//  - Tennessee Department of Education (tn.gov/education): HTTP 403, host treated as blocked. The earlier saved
//    tn-faq.pdf turned out to be a 403 HTML page, not a document, so it is unusable. The legislature hosts
//    (wapp.capitol.tn.gov, capitol.tn.gov) timed out and publications.tnsosfiles.com returned 403. No Tennessee
//    rule is printed (dept-blocked.txt).
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): TN access
//    2018-19 "-", 50% (2019-20), 54%, 60%, 64%, 60.8% (2023-24, 0.6082), 82.8% (2024-25, 0.8276); most recent 384
//    of 464 (2024-2025, "State Education Agency"); participation 5.3% (2020-21), 4.7%, 5.35%, 5.96%, 13.23%
//    (2024-25); most recent 39,819 of 300,911, denominator NCES fall 2022. National row 2024-25: 60% access, 6.1%.
//  - College Board, School Report of AP Exams by State 2023-24: Tennessee 438 (2023), 449 (2024); public 349, 358;
//    non-public 89, 91.
//  - IANA tzdb northamerica: Eastern list "... South Carolina, eastern Tennessee,"; Central list "western Tennessee,
//    most of Texas, Wisconsin"; Rule US 2007 max Mar Sun>=8 2:00, Nov Sun>=1 2:00.
//  - Metro Nashville open data, Library Facilities feature service (portal governed by "Metro's Open Data Executive
//    Order"), 21 records, fetched 18 October 2026. Layer metadata: preferredTimeReference "America/Chicago",
//    dateFieldsTimeReference "Etc/UTC". Our counts: 294 open/close cells, 54 empty, 25 written with a space before
//    AM or PM, 215 without; weekly hours (ours) 39 for 12 branches, 58 for 5, 56 for 3, 32 for 1; 958 in total; open on
//    Friday 8 of 21, Saturday 20, Sunday 8; latest closing 8:00 PM; PublicComputers "Yes" 21 of 21; StudioNPL "Yes" 7.
// Lesson family: parsing messy time strings and converting between time zones (datetime handling).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'TENNESSEE', label: 'Tennessee', blurb: 'Coding and AI for Tennessee students across two time zones, with the 2024 to 2025 jump in published CS figures and a Nashville library hours project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-tennessee',
  code: 'at',
  accent: '#66361F',
  accentRationale: 'Tennessee: #66361F, a deep river-clay brown, allocated in alloc.tsv row 100 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Tennessee',
    eyebrow: 'Tennessee, United States',
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
  routeLabel: 'Tennessee',
  title: 'Coding and AI Classes in Tennessee | Live Online, ET and CT',
  description: 'Live online coding and AI classes for Tennessee students in Eastern and Central Time, the 2024 to 2025 jump in CS figures, and a Nashville library hours project.',
  ogDescription: 'In 2024 to 2025, 384 of 464 Tennessee high schools offered computer science. What the jump means, how classes work across two time zones, and a Python project.',
  twitterDescription: 'Tennessee coding and AI classes, live online in Eastern or Central Time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Tennessee Students',
    description: 'Game coding, JavaScript, Python, AP Computer Science Principles and AI for Tennessee students in elementary, middle and high school, taught live online in English and scheduled in Eastern or Central Time.'
  },

  h1: 'Coding and AI classes in Tennessee',
  capsuleQ: 'How many Tennessee high schools offer computer science?',
  capsule: 'In 2024 to 2025, 384 of 464 Tennessee high schools (82.8%) offered computer science and 39,819 high school students took a CS course, Code.org (2025) reports, up from 60.8% of schools a year earlier. Modern Age Coders teaches Tennessee students live online, from game coding in elementary school to Python and AP Computer Science Principles, in Eastern or Central Time.',
  lead: 'Two things make Tennessee unusual for an online class. The first is in the data: between 2023 to 2024 and 2024 to 2025, the published share of Tennessee high schools offering computer science rose by twenty-two points, a far larger move than in the years before. The second is on the clock: the state is split between Eastern and Central Time, so a single class can start at different local hours for two students in the same state. This page covers both, then shows the Nashville library project our students use to learn how software handles time.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Tennessee.',

  picks: {
    eyebrow: 'Course picks for Tennessee',
    h2: 'Four courses Tennessee families ask about first',
    intro: 'Pick by grade to begin with. The free lesson then checks the level, so a seventh grader who already writes JavaScript can skip ahead.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Grades 3 to 6', note: 'Games built step by step, with scoring, levels and characters, so loops and conditions arrive as tools for fun rather than as theory.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 7 to 9', note: 'Interactive web pages that respond to clicks and keys, a quick route to something a friend can open on their own phone.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from first principles to files, dates and data, the toolkit behind the Nashville library hours project.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'The AP Computer Science Principles framework, the Create performance task and exam practice, taught alongside school.' }
    ]
  },

  sections: [
    {
      id: 'jump', tint: '', eyebrow: 'The published figures',
      h2: 'A twenty-two point rise in one school year',
      intro: 'Every Tennessee value below is copied from two spreadsheets: the Access and Participation tabs of the Code.org 2025 report data, and the College Board count of schools giving AP exams. Blank years stay blank.',
      body: [
        { kind: 'table', caption: 'Tennessee: share of high schools offering CS, and share of high school students enrolled in it', head: ['Year', 'Schools offering CS', 'Students enrolled'], rows: [
          ['2018 to 2019', 'Not reported', 'Not in the sheet'],
          ['2019 to 2020', '50%', 'Not in the sheet'],
          ['2020 to 2021', '54%', '5.3%'],
          ['2021 to 2022', '60%', '4.7%'],
          ['2022 to 2023', '64%', '5.35%'],
          ['2023 to 2024', '60.8%', '5.96%'],
          ['2024 to 2025', '82.8%, or 384 of 464', '13.23%, or 39,819 of 300,911']
        ] },
        { kind: 'table', mt: true, caption: 'Tennessee beside the 2024 to 2025 national row, and AP schools from the College Board', head: ['Measure', 'Tennessee', 'For comparison'], rows: [
          ['High schools offering CS, 2024 to 2025', '82.8%', '60% nationally'],
          ['Students enrolled in CS, 2024 to 2025', '13.23%', '6.1% nationally'],
          ['Schools with AP exams, 2023', '438 (349 public, 89 non-public)', 'College Board count'],
          ['Schools with AP exams, 2024', '449 (358 public, 91 non-public)', 'College Board count']
        ] },
        { kind: 'p', text: 'On these figures, Tennessee moved from just above the national access line to well above it in a single year, and the enrolled share more than doubled. The sheet records the source for 2024 to 2025 as the state education agency. It does not say why the numbers moved, and we could not read the Tennessee Department of Education site to check, so we do not offer a reason.' },
        { kind: 'p', text: 'Citation for every access and participation value here: Code.org (2025). 2025 State of AI + CS Education. We quote single Tennessee values and do not republish the dataset.' }
      ]
    },
    {
      id: 'reading', tint: 'deep', eyebrow: 'Reading a big change',
      h2: 'Three questions to ask whenever a statistic leaps',
      intro: 'A sudden jump in a published series is good news to check, not to repeat blindly. These questions are the same ones we teach students to ask of any dataset, applied to Tennessee&rsquo;s own figures.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Is the denominator the same?', p: 'The Code.org sheet notes that its total of high school students comes from the NCES count for fall 2022. So 13.23% compares a 2024 to 2025 enrollment with a fall 2022 student total: a fair estimate, but not a same-year census.' },
          { h3: 'Was it measured the same way?', p: 'A change in what counts as a computer science course, or in how schools report, can move a percentage as much as a change in classrooms can. The sheet alone cannot tell the two apart, and neither can we.' },
          { h3: 'What does it mean for one student?', p: 'Even at 82.8%, about one Tennessee high school in six did not report a computer science offering. A family still needs to ask their own school what runs, in which grade and at what level.' }
        ] },
        { kind: 'p', text: 'This habit has a name in our classes: say what the number is before saying what it means. Students who learn it on state statistics carry it into their own code, where the cost of a misread number is a wrong answer handed in with confidence.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'When is a Nashville library open? Teaching code to read the clock',
      intro: 'Metro Nashville publishes its 21 public library locations as open data, with opening and closing times for every day of the week. The times are typed as text, which makes them a perfect first lesson in datetime handling.',
      body: [
        { kind: 'table', caption: 'What the raw hours look like before cleaning (our counts from Metro Nashville Library Facilities, fetched 18 October 2026)', head: ['What we checked', 'Count'], rows: [
          ['Library records', '21'],
          ['Opening and closing cells (21 records, 7 days, 2 times each)', '294'],
          ['Empty cells, meaning closed that day', '54'],
          ['Times written with a space before AM or PM, such as 5:00 PM', '25'],
          ['Times written without one, such as 5:00PM', '215']
        ] },
        { kind: 'table', mt: true, caption: 'Weekly opening hours per library after parsing (our calculation)', head: ['Hours open per week', 'Libraries'], rows: [
          ['58', '5'],
          ['56', '3'],
          ['39', '12'],
          ['32', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Normalize the text', p: 'Two spellings of the same time break a naive parser. Students strip the stray space, then parse each value with one format string, and count how many cells needed fixing before trusting the rest.' },
          { h3: '2. Subtract times', p: 'Closing minus opening gives hours per day, summed over the week: 958 library hours across all 21 records. Only 8 libraries list Friday hours and only 8 list Sunday hours, while 20 open on Saturday.' },
          { h3: '3. Attach a time zone', p: 'The service metadata gives a preferred time reference of America/Chicago, while its date fields are stored as Etc/UTC. A time with no zone is ambiguous; students attach the right one before converting.' }
        ] },
        { kind: 'p', text: 'The conversion step is where Tennessee earns its place in the lesson. The latest closing time anywhere in the data is 8:00 PM in Nashville, which is 9:00 PM on an Eastern Time clock across eastern Tennessee and early the next morning in India. In Python the key line is <code>close = datetime(2026, 10, 19, 20, 0, tzinfo=ZoneInfo("America/Chicago"))</code>, then <code>close.astimezone(<wbr>ZoneInfo(<wbr>"America/New_York"))</code>. Students also notice that all 21 records answer Yes in the PublicComputers field, and 7 in a field called StudioNPL, and learn to report a field&rsquo;s values without guessing what the library means by it.' },
        { kind: 'callout', h3: 'Our numbers, labelled as ours', p: 'Every count and total in this section comes from our own parsing of one download. Metro Nashville publishes the hours, not these sums, and libraries change their hours, so a student who reruns the code next season may get different answers. That is the point: the method is the product.' }
      ]
    },
    {
      id: 'zones', tint: '', eyebrow: 'Two time zones',
      h2: 'One class time, three local clocks',
      intro: 'The IANA time zone database places eastern Tennessee in the Eastern list and western Tennessee in the Central list. We schedule each family in their own zone and say which zone every time is in.',
      body: [
        { kind: 'table', caption: 'One example class, shown in each zone (our worked example, before and after the November 1, 2026 change)', head: ['Clock', 'Until October 31, 2026', 'From November 1, 2026'], rows: [
          ['Eastern Time, eastern Tennessee', '7:00 p.m.', '7:00 p.m.'],
          ['Central Time, western Tennessee', '6:00 p.m.', '6:00 p.m.'],
          ['India time, where the teacher is', '4:30 a.m. the next day', '5:30 a.m. the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why India shifts', p: 'Both US zones move their clocks together, so Eastern and Central stay one hour apart all year. India does not move, so the teacher&rsquo;s hour changes when Tennessee&rsquo;s does.' },
          { h3: 'The dates in the rule', p: 'The US rule in the IANA data changes clocks at 2 a.m. local time on the first Sunday in November and the second Sunday in March: November 1, 2026 and March 14, 2027.' },
          { h3: 'Mixed batches', p: 'A batch can hold students from both halves of the state. We always print the time in each student&rsquo;s zone, so no one joins an hour early or late.' }
        ] },
        { kind: 'spec', title: 'Booking across the line', p: 'If a parent works in one zone and the student studies in the other, tell us which clock the student lives by, and every reminder is sent in that zone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first game to AP Computer Science Principles',
    intro: 'A guide to typical starting points. The placement lesson decides the real one.',
    cols: [
      { band: 'Grades K to 3', h3: 'Blocks and stories', p: 'Drag-and-drop programs, simple animations and the idea that a computer follows steps exactly.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 6', h3: 'Games with rules', p: 'Scores, levels and enemies that move on their own: logic practised through play.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Grades 7 to 9', h3: 'Typed code for the web', p: 'JavaScript and Python side by side, with pages and small tools a student can share.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'python-complete-masterclass-teens'] },
      { band: 'Grades 10 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles and machine learning projects tested on real data.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will convert a time for you. Will it pick the right zone?',
    intro: 'Only if somebody tells it which zone the time was in to begin with.',
    p1: 'Paste the Nashville hours into a chatbot and ask when the libraries close on Eastern Time, and it may well get it right. Ask without saying the hours are local Nashville times, and it has to guess. A plain string such as 8:00PM carries no zone at all, which is exactly why the service publishes a preferred time reference.',
    p2: 'Students who have parsed the strings themselves know the guess is there, so they supply the missing context or check the result. That is the working relationship with AI we teach: the student sets up the problem precisely, the tool helps with the routine part, and the student verifies the answer against something they trust.',
    closer: 'In a state with two clocks, knowing which one a number belongs to is not trivia; it is the difference between a program that works and one that is an hour wrong.',
    blogAnchor: 'the case for still learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Memphis to the Smokies, the same live lesson',
    intro: 'A class online means no drive across a long state, and no difference between a city student and a rural one.',
    cells: [
      { h3: 'At home, on any computer', p: 'Students log in from a laptop or desktop at home. Families in Memphis, Nashville, Chattanooga and Knoxville join exactly the same lessons.' },
      { h3: 'Grades, not years', p: 'Teachers work in US grade levels and around the Tennessee school calendar. Graded school assignments stay the student&rsquo;s own work.' },
      { h3: 'A free first lesson', p: 'A short real task tells the teacher where to start. No card or payment details are asked for at this stage.' },
      { h3: 'Small, matched groups', p: 'Batches of fifteen to twenty who share a level, gathered from Tennessee and other states.' },
      { h3: 'Private lessons', p: 'A teacher and one student, for a faster pace, AP preparation or a specific project.' },
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Nothing to visit', p: 'Lessons are live online, taught from India. Modern Age Coders has no premises in Tennessee and claims none. Working sound, a camera if possible and a reliable connection are the only equipment.' }
  },

  fees: {
    h2: 'Fees for Tennessee families',
    intro: 'Printed in US dollars, the same everywhere in the state.',
    first: 'A full first lesson with a teacher, free, ending with a suggested level, course and time.',
    group: 'A month of classes in a level-matched batch of fifteen to twenty.',
    private: 'A month of one-to-one classes with a single teacher.',
    closer: 'Families in Tennessee pay one rate in US dollars wherever they live and whichever zone they are in. Nothing is charged before the free lesson and an agreed plan; holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'What families have written about us on Google',

  book: {
    h2: 'Ask for a free lesson in your Tennessee time zone',
    intro: 'Give us the student&rsquo;s grade and tell us whether you are on Eastern or Central Time. The first task fits the student: a small game for a fourth grader, a web page for an eighth grader, or the library hours parser for a junior.',
    success: 'Thank you. We will be in touch soon to set a time in your Tennessee time zone.'
  },

  faq: {
    h2: 'Tennessee coding and AI questions',
    intro: 'Short answers on the figures, the clocks and the classes.',
    items: [
      { q: 'How many Tennessee high schools offer computer science?', a: 'Code.org (2025) reports 384 of 464 Tennessee high schools, or 82.8%, offering computer science in 2024 to 2025, against 60% nationally.' },
      { q: 'How many Tennessee students take computer science?', a: 'The same data reports 39,819 high school students enrolled in 2024 to 2025, or 13.23% of a fall 2022 total of 300,911, against 6.1% nationally.' },
      { q: 'Why did the Tennessee numbers jump in 2024 to 2025?', a: 'The source does not say, and the Tennessee Department of Education site refused our request when we checked, so we give no reason. Access rose from 60.8% to 82.8% in one year.' },
      { q: 'Does Tennessee require computer science to graduate?', a: 'We print no Tennessee rule on this page because we could not read the department or legislature sites on 17 and 18 October 2026. Please check with your school counselor.' },
      { q: 'How many Tennessee schools give AP exams?', a: 'The College Board lists 438 Tennessee schools with AP exams in 2023 and 449 in 2024, public and non-public together.' },
      { q: 'Which time zone will my class be in?', a: 'Your own. The IANA database puts eastern Tennessee on Eastern Time and western Tennessee on Central Time, and we schedule and remind in whichever applies to your family.' },
      { q: 'What does the Nashville library project teach?', a: 'Parsing times typed as text, adding up weekly hours and converting between zones. Students parse 294 opening and closing cells for 21 libraries and label every total as their own.' },
      { q: 'Do your classes count for school credit in Tennessee?', a: 'We do not claim that. Credit is the school district\'s decision. Our classes add skills, projects and exam preparation alongside school.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there a Tennessee location?', a: 'No. Teaching is entirely live online from India, and no Tennessee office or classroom exists or is claimed.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Tennessee students',
    html: 'Students taking AP can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> with <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A</a>. Middle schoolers often start with <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>, and anyone who wants a summer goal can read about <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tennessee and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' }
  ],

  personalityCss: `
.cg-root.cg-at .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-at .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-at .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-at .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-at .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-at .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-at .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-at .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-at .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Tennessee, read raw on 17 and 18 October 2026: Tennessee Department of Education 403 (blocked; saved tn-faq.pdf was a 403 page), legislature hosts unreachable, so no Tennessee rule is printed; Code.org (2025) State of AI + CS Education data (access 50%, 54%, 60%, 64%, 60.8%, 82.8%; 384 of 464 in 2024-25; participation 5.3%, 4.7%, 5.35%, 5.96%, 13.23%; 39,819 of 300,911; national 60% and 6.1%); College Board AP schools 438 (2023), 449 (2024), public 349/358, non-public 89/91; IANA eastern Tennessee in Eastern, western Tennessee in Central, US DST rule.',
    localProject: 'Metro Nashville Library Facilities (Metro Open Data Executive Order), 21 records fetched 18 October 2026: 294 open/close cells, 54 empty, 25 with a space before AM/PM, 215 without; our weekly hours 58 (5 libraries), 56 (3), 39 (12), 32 (1), 958 total; Friday 8, Saturday 20, Sunday 8 open; latest close 8:00 PM; PublicComputers Yes 21, StudioNPL Yes 7; metadata preferredTimeReference America/Chicago, date fields Etc/UTC. All counts ours. Lesson family: parsing time strings and time zone conversion.',
    requiredMentions: [
      '384 of 464',
      '39,819 of 300,911',
      '82.8%',
      '13.23%',
      '438 (349 public, 89 non-public)',
      'eastern Tennessee',
      'western Tennessee',
      '958 library hours',
      'stored as Etc/UTC',
      'a field called StudioNPL'
    ],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Tennessee and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Metro Nashville: Library Facilities feature service and its time reference metadata.', url: 'https://services2.arcgis.com/HdTo6HJqh92wn4D8/arcgis/rest/services/Library_Facilities/FeatureServer/0' },
      { claim: 'Metro Nashville open data portal (Open Data Executive Order).', url: 'https://data.nashville.gov/' },
      { claim: 'IANA tzdb northamerica: eastern and western Tennessee, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Tennessee graduation requirement, standards year or required offering: tn.gov returned 403, the saved tn-faq.pdf was itself a 403 page, and the legislature sites were unreachable, so none is printed.',
      'Any cause for the 2024 to 2025 jump in access and participation: no readable source states one.',
      'Which counties or cities are in each zone, beyond Nashville (from the Metro service metadata): the IANA text says only eastern and western Tennessee.',
      'What StudioNPL means: the field is reported as published, not interpreted.',
      'Library names and addresses: counts only.',
      'Code.org state narrative, geography, size, gender and race figures: not used.',
      'That our classes earn Tennessee credit, and any affiliation with the Tennessee Department of Education, Metro Nashville, Code.org or the College Board.'
    ]
  }
};
