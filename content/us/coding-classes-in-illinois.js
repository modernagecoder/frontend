'use strict';
// Illinois (cg- state page, US cluster Phase 4, row 73). Replaces the older page at /coding-classes-in-illinois (slug
// kept on coordinator instruction). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Illinois does not ask for a computer science course; it asks for a year of "computer literacy" that may live
// inside English or social science, lets AP computer science count as a math year, and requires computer literacy
// skills at every grade. What does that mean for a student who wants real programming?
// Sources read raw on 17 and 18 October 2026. Raw copies in keyword-research-2026-09/us/src/coding-classes-in-illinois/
// (duplicate of src/coding-and-ai-classes-in-illinois/). www.isbe.net did not resolve on our local DNS; the address was
// looked up through dns.google and fetched normally (no block was involved).
//  - ISBE, "Illinois graduation requirements 105 ILCS 5/27-22, 27-22.05, 27-22.10", March 2025 (grad_require.pdf):
//    Computer Literacy row, "One year of a course that includes intensive instruction in computer literacy, which may
//    be English, social science, or any other subject and which may be counted toward the fulfillment of other
//    graduation requirements. (PA 101-0654)", check marks in the columns for students entering 9th grade in SY
//    2022-2023 and later (positions read from the PDF, grad_require_p1.png); Mathematics, "Advanced Placement (AP)
//    computer science is eligible", Section 27-22 (f-5) of the School Code; "at least 16 units in Grades 9-12";
//    two years of laboratory science for pupils entering ninth grade in 2024-25; two years of world language from
//    2028-29.
//  - ISBE, Illinois Instructional Mandates, 2025-26 School Year, Last Updated December 2025: Computer Literacy,
//    "Required at each grade level K-12", "developmentally appropriate opportunities to gain computer literacy skills
//    embedded in the district's curriculum at each grade level. 105 ILCS 5/10-20.79; 10-20.74"; the "Computer Literacy
//    Knowledge and Skill Development Continuum" (non-regulatory).
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): Most Recent Access
//    Data 2023-2024, 418 of 721 high schools (57.98%), State Education Agency; Access Percent over the Years 45%
//    (2018-19), 43%, 44%, 54%, 59.7% (2022-23), 58.0% (2023-24), no 2024-25 value; Most Recent Participation 35,902
//    of 595,765 (6.03%), matching the 2023-24 value 0.0603; denominator NCES Digest Table 203.04, Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Illinois schools with AP exams 691 (2023), 715 (2024).
//  - IANA tzdb northamerica: "US central time, represented by Chicago" lists Illinois; America/Chicago zone lines show
//    EST from 1936 Mar 1 to 1936 Nov 15; "In 1869 the Chicago Astronomical Society contracted with the city to keep
//    time." India offsets are ours.
//  - City of Chicago Data Portal, Bike Routes (hvv9-38ut), City of Chicago Data Terms of Use (as-is, no warranty),
//    count 1008, all 1,008 rows downloaded 18 October 2026. Our calculations (our-calcs-summary.txt): 2,016 endpoint
//    values, 583 distinct raw spellings, 578 after case and spaces, 486 after dropping the direction letter, 435 after
//    dropping the suffix (over-merges different streets); street 266 vs st_name 239 distinct, 22 names with 2+ street
//    values; route types Bike Lane 285, Neighborhood Greenway 258, Buffered 184, Protected 174, Marked Shared Lane 107.
// Lesson family: string normalization and de-duplication (and knowing when to stop).
// No ISBE computer science standards page was found in the ISBE sitemap or by URL; no Illinois CS standards claim is made.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ILLINOIS', label: 'Illinois', blurb: 'Coding and AI for Illinois students: the computer literacy year, AP computer science as a math credit, and a Chicago bike route cleaning project.' },
  market: US,
  slug: 'coding-classes-in-illinois',
  code: 'aiil',
  accent: '#941638',
  accentRationale: 'Illinois: #941638, a muted cardinal red allocated for row 73, kept clear of the neighbouring reds and well above 4.5:1 contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Illinois',
    eyebrow: 'Illinois, United States',
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
  routeLabel: 'Illinois',
  title: 'Coding Classes in Illinois | Live Online Coding and AI',
  description: 'Live online coding and AI classes for Illinois students: the computer literacy graduation year, AP computer science as a math credit, and a Chicago data project.',
  ogDescription: 'Illinois asks every student for a year of computer literacy and lets AP computer science count toward math. What the rules say, and live online coding classes for Illinois.',
  twitterDescription: 'Illinois coding and AI classes, live online, read against the state graduation chart.',
  ogImageCourse: 'ap-computer-science-a-java-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Illinois Students',
    description: 'Teacher-led online Scratch, Java, Python, data science and AP Computer Science for Illinois students from second grade through high school, placed by level after a free first lesson.'
  },

  h1: 'Coding classes in Illinois',
  capsuleQ: 'Does Illinois require computer science to graduate from high school?',
  capsule: 'Not as a named course. The Illinois State Board of Education chart asks for one year of a course with intensive instruction in computer literacy (PA 101-0654), which may be English, social science or another subject, and lets AP computer science count toward the three math years. Modern Age Coders adds live online coding and AI classes for grades 2 to 12.',
  lead: 'Illinois takes an unusual route. Instead of a stand-alone computer science course, its graduation chart asks for a year of computer literacy that a school can fold into an English or social science class, and it treats AP computer science as a mathematics course. Separately, districts must give students computer literacy practice at every grade from kindergarten up. That leaves a lot of room: one school may teach real programming, another may meet the rule with spreadsheets and research skills. This page lays out what the State Board actually publishes, what the access figures show about which students get a programming course, and a Chicago open data project that teaches one of the most practical skills in code: cleaning up names that are written five different ways.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a student in Illinois.',

  picks: {
    eyebrow: 'Course picks for Illinois',
    h2: 'Courses that turn computer literacy into real programming',
    intro: 'Pick by grade, then let a free first lesson confirm the level. Group batch or one-to-one, both taught live.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Events, loops and variables in Scratch, finished as playable games: computer literacy with something to show for it.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Grades 8 to 11', note: 'Classes, methods and arrays in Java, the language AP Computer Science A is written in.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Full AP Computer Science A preparation, the kind of course Illinois lets count toward a math year.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Python and pandas on messy public data, including the Chicago bike route cleanup below.' }
    ]
  },

  sections: [
    {
      id: 'chart', tint: '', eyebrow: 'The graduation chart',
      h2: 'Where computers appear in Illinois graduation requirements',
      intro: 'From the Illinois State Board of Education (ISBE) document &ldquo;Illinois graduation requirements 105 ILCS 5/27-22, 27-22.05, 27-22.10&rdquo;, dated March 2025, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Computer-related lines in the ISBE graduation chart, by the year a student enters ninth grade', head: ['Requirement', 'What ISBE says', 'Applies to'], rows: [
          ['Computer literacy', 'One year of a course that includes intensive instruction in computer literacy, which may be English, social science, or any other subject, and which may count toward other requirements (PA 101-0654)', 'Students entering ninth grade in 2022 to 2023 and later, as marked on the chart'],
          ['Mathematics, 3 years', 'Algebra I, a course with geometry content, and a third year; Advanced Placement (AP) computer science is eligible', 'Every entering class shown on the chart'],
          ['Laboratory science', 'Two years of laboratory science (IEP students exempt)', 'Pupils entering ninth grade in 2024 to 2025 and later'],
          ['World language', 'Two years of world language, which may include American Sign Language (IEP students exempt)', 'Pupils entering ninth grade in 2028 to 2029 and later']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Literacy, not a named course', p: 'Because the computer literacy year may be English, social science or any other subject, and may double up with other requirements, it does not guarantee that a student ever writes a program. What it teaches depends on the district.' },
          { h3: 'AP computer science as math', p: 'Under Section 27-22 (f-5) of the School Code, the course description for AP computer science must say it is equivalent to a high school mathematics course, so it counts toward the three math years.' },
          { h3: 'The bigger frame', p: 'ISBE also says each student must have at least 16 units in grades 9 to 12 from a four-year school, and lists the U.S. and Illinois Constitution examination among the conditions for a diploma.' }
        ] },
        { kind: 'p', text: 'For a student who wants programming on the transcript, the most direct route under these rules is AP Computer Science A or Principles, which can satisfy a math year while teaching real code. Whether your school offers it, and how it codes the computer literacy year, is a question for your counselor; local districts often add their own requirements on top of the state chart.' }
      ]
    },
    {
      id: 'every-grade', tint: 'deep', eyebrow: 'Kindergarten to twelfth grade',
      h2: 'A computer literacy mandate at every grade level',
      intro: 'ISBE&rsquo;s Illinois Instructional Mandates for the 2025 to 2026 school year, last updated December 2025, list computer literacy as required at each grade level K-12.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What the law asks', p: 'All school districts shall ensure that students receive developmentally appropriate opportunities to gain computer literacy skills embedded in the district&rsquo;s curriculum at each grade level, citing 105 ILCS 5/10-20.79 and 10-20.74.' },
          { h3: 'Embedded, not separate', p: 'The wording is &ldquo;embedded in the district&rsquo;s curriculum&rdquo;. A third grader might meet it through typing and file skills inside reading class rather than through a coding lesson.' },
          { h3: 'A guide, not a rule', p: 'ISBE points districts to its Computer Literacy Knowledge and Skill Development Continuum, which it describes as non-regulatory, plus outside materials such as Code.org and Computer Science Unplugged.' }
        ] },
        { kind: 'table', mt: true, caption: 'How a family can read the Illinois rules by stage (the right-hand column is our suggestion, not ISBE&rsquo;s)', head: ['Stage', 'What the state requires', 'What we suggest adding'], rows: [
          ['Grades K to 5', 'Computer literacy skills embedded at each grade', 'Block coding, so literacy includes making things, not only using them'],
          ['Grades 6 to 8', 'Computer literacy skills embedded at each grade', 'A first typed language and a small data project'],
          ['Grades 9 to 12', 'One computer literacy year; AP computer science may count as math', 'AP Computer Science A or Principles, plus a project portfolio'],
          ['Any grade', 'Nothing beyond the above', 'An AI unit that explains how a model learns and where it goes wrong']
        ] },
        { kind: 'p', text: 'We did not find a separate computer science standards page on the ISBE website when we checked its sitemap on 18 October 2026, so this page makes no claim about Illinois computer science standards. The mandates and the graduation chart are the two ISBE documents quoted here.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Five spellings of one street: cleaning Chicago&rsquo;s bike route data',
      intro: 'The City of Chicago publishes every bike route segment on its data portal as dataset hvv9-38ut. Each segment names the street it runs from and the street it runs to, and those names are not written consistently.',
      body: [
        { kind: 'table', caption: 'How many different cross-street names are in the Chicago Bike Routes data? Our counts after each cleaning step (1,008 segments, downloaded 18 October 2026)', head: ['Cleaning step', 'Distinct names left'], rows: [
          ['Raw values, exactly as published (2,016 endpoints)', '583'],
          ['Upper case, and runs of spaces collapsed to one', '578'],
          ['Leading direction letter removed (N, S, E or W)', '486'],
          ['Street type removed as well (AVE, ST, BLVD and so on)', '435']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Spot the noise', p: 'Most names are in capitals, but six are not, such as W Cermak Rd, and one has a double space inside N DAMEN AVE. Python sees each of those as a brand new street until the student fixes it.' },
          { h3: '2. Clean in small steps', p: 'Students write one function per rule, strip, upper, collapse spaces, then count distinct names after each step. Watching 583 fall to 578, then 486, shows exactly what each rule did.' },
          { h3: '3. Know when to stop', p: 'The last step goes too far. Dropping the suffix merges WASHINGTON BLVD with WASHINGTON ST, two different streets. The dataset&rsquo;s own fields show it: 266 distinct street values but only 239 bare names.' }
        ] },
        { kind: 'callout', h3: 'Our counts, the city&rsquo;s data', p: 'All the counts above are our own, from one download. The City of Chicago provides its data as is and makes no warranty about accuracy or completeness. A cleaning rule is a decision a programmer makes, so a good project records each rule and the count it produced.' },
        { kind: 'p', text: 'The same file carries a route type for every segment: 285 Bike Lane, 258 Neighborhood Greenway, 184 Buffered Bike Lane, 174 Protected Bike Lane and 107 Marked Shared Lane, by our count. Older students can chart those totals, then check whether type labels need cleaning too. They do not, which is its own useful finding.' }
      ]
    },
    {
      id: 'numbers', tint: '', eyebrow: 'Published figures',
      h2: 'Fewer than six in ten Illinois high schools offered computer science',
      intro: 'Illinois values from two national sources: Code.org for high schools teaching the subject, the College Board for schools with AP exams.',
      body: [
        { kind: 'table', caption: 'Share of Illinois high schools with a foundational CS course, year by year (Code.org 2025 sheet, trend tab plus its newest-count tab)', head: ['School year', 'Share of high schools'], rows: [
          ['2018 to 2019', '45%'],
          ['2019 to 2020', '43%'],
          ['2020 to 2021', '44%'],
          ['2021 to 2022', '54%'],
          ['2022 to 2023', '59.7%'],
          ['2023 to 2024', '58.0%, or 418 of 721 high schools, from state education agency data']
        ] },
        { kind: 'table', mt: true, caption: 'Students and AP schools in Illinois', head: ['Measure', 'Value', 'Notes'], rows: [
          ['High school students in a CS course', '35,902 of 595,765, or 6.03%', 'Code.org (2025); the rate equals its 2023 to 2024 value, with fall 2022 NCES enrollment as the base'],
          ['Illinois schools with AP exams in 2023', '691', 'College Board, AP exams by state report, 2023-24'],
          ['Illinois schools with AP exams in 2024', '715', 'Same report']
        ] },
        { kind: 'p', text: 'Code.org lists no Illinois access figure for 2024 to 2025, so the newest value is from 2023 to 2024. Across six school years the share climbed from 45% to a peak of 59.7% before easing to 58.0%. About six in every hundred high school students took computer science. Since AP computer science can count toward math, the 715 schools giving AP exams in 2024 are worth asking about, although the College Board figure counts all AP subjects, not computer science alone.' },
        { kind: 'p', text: 'Citation for the access and enrollment values: Code.org (2025). 2025 State of AI + CS Education. We quote Illinois rows only and do not reproduce the sheet.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Chicago time, which the city once kept by contract',
      intro: 'All of Illinois is on US Central time, and the IANA database uses Chicago as the reference for that zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone statewide', p: 'The time zone database names Illinois in its list for &ldquo;US central time, represented by Chicago&rdquo;. From Rockford to Carbondale, one clock: America/Chicago.' },
          { h3: 'India and Central', p: 'Our arithmetic: India is 10 hours 30 minutes ahead of Central Daylight Time and 11 hours 30 minutes ahead of Central Standard Time. US clocks fall back on November 1, 2026.' },
          { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Central time.' }
        ] },
        { kind: 'spec', title: 'History inside the data', p: 'The database notes that in 1869 the Chicago Astronomical Society contracted with the city to keep time, and its America/Chicago entry shows the city on Eastern Standard Time from March 1 to November 15, 1936. Students who ask a time library for a 1936 Chicago timestamp can watch it apply that rule, a neat proof that zones are data, not constants.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'From block games to AP Computer Science A',
    intro: 'Grades are rough guides; the first lesson finds the right starting point.',
    cols: [
      { band: 'Grades 2 to 5', h3: 'Make, do not just use', p: 'Blocks, sprites and small games, turning everyday computer literacy into creation.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'Pages and scripts', p: 'HTML, CSS and early JavaScript, with real websites a student can share.', courses: ['html-css-course-for-beginners-build-real-websites', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'A real language', p: 'Java or Python fundamentals, version control, and the habit of testing code.', courses: ['java-programming-masterclass-for-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP on the transcript', p: 'AP Computer Science A or Principles, the routes Illinois lets count as math.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Computer literacy in Illinois should now include knowing how AI is made',
    intro: 'Using a chatbot is a literacy skill; checking one is a programming skill.',
    p1: 'Hand the Chicago bike route file to an AI model and ask how many streets it mentions. It may count 583, or 435, or something else, and it will rarely say which cleaning rules it chose. A student who has built the steps by hand knows the question has no single answer until the rules are written down.',
    p2: 'That is the gap a literacy course leaves open. Knowing which buttons to press is useful; knowing how data is cleaned, how a model is trained on it and how its output can mislead is what lets a student use AI tools with confidence instead of blind trust.',
    closer: 'Illinois guarantees every student a year of computer literacy; real coding practice is what makes that literacy hold up against AI.',
    blogAnchor: 'why coding is still worth learning beside AI tools'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From the Loop to downstate, one live online class',
    intro: 'Illinois families are spread across a big city and a long rural state. Online teaching treats them all the same.',
    cells: [
      { h3: 'No commute', p: 'A student in Naperville and one in Peoria can join the same session from home, with no evening drive across the suburbs.' },
      { h3: 'Fits Illinois school', p: 'Teachers plan in US grade levels and can connect projects to AP computer science or a computer literacy course. Homework and tests set by a school remain the student&rsquo;s work, never ours.' },
      { h3: 'A free first lesson', p: 'The teacher sets a short task, sees how the student works, and recommends a course, level and time. No payment details are asked for.' },
      { h3: 'Small batches', p: 'Fifteen to twenty students at the same level, from Illinois and other states.' },
      { h3: 'Private lessons', p: 'One teacher, one student, for anyone who wants a faster pace or focused AP preparation.' },
      { h3: 'Central time', p: 'Every lesson time is confirmed on Chicago time, whatever part of Illinois you live in.' }
    ],
    spec: { title: 'Fully online', p: 'Modern Age Coders has no center in Illinois. Lessons are taught live by teachers in India, and a student needs a computer, a working microphone and a steady connection.' }
  },

  fees: {
    h2: 'What lessons cost for Illinois families',
    intro: 'A free start, then a choice of two monthly plans.',
    first: 'A full trial lesson at no charge, with a suggested course, level and time at the end.',
    group: 'Monthly lessons in a batch of fifteen to twenty students working at the same stage.',
    private: 'Monthly lessons with a teacher who works with your student alone.',
    closer: 'Outside India every family pays the same rate in US dollars, so Chicago and Champaign are billed alike. Payment begins only after the trial and only once a course and time are agreed; see the pricing page for holidays and missed lessons.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Ask for a free lesson for an Illinois student',
    intro: 'Tell us the grade and what your student enjoys. A second grader could start with a Scratch game, a seventh grader with a first web page, and a high schooler with the Chicago street-name cleanup.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your Illinois student.'
  },

  faq: {
    h2: 'Questions Illinois families ask',
    intro: 'Where a rule is involved, the answer points to the ISBE document it comes from.',
    items: [
      { q: 'Is computer science required for an Illinois diploma?', a: 'Not as a named course. The ISBE chart requires one year of a course with intensive instruction in computer literacy (PA 101-0654), which may be English, social science or another subject.' },
      { q: 'Which students need the computer literacy year?', a: 'On the March 2025 ISBE chart, the computer literacy requirement is marked for students entering ninth grade in 2022 to 2023 and later.' },
      { q: 'Can AP computer science count as a math class in Illinois?', a: 'Yes. ISBE says AP computer science is eligible toward the three years of mathematics, under Section 27-22 (f-5) of the School Code.' },
      { q: 'Do Illinois elementary schools have to teach computer skills?', a: 'Yes. ISBE lists computer literacy as required at each grade level K-12, embedded in the district\'s curriculum, citing 105 ILCS 5/10-20.79 and 10-20.74.' },
      { q: 'How many Illinois high schools teach computer science?', a: 'Code.org (2025) reports 418 of 721 Illinois high schools, about 58%, in 2023 to 2024, from state education agency data.' },
      { q: 'Will your classes count as Illinois school credit?', a: 'No. Credit comes from courses your school offers. Our lessons add skills and projects alongside school, and anything a school grades stays the student\'s own work.' },
      { q: 'What days and times are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are lesson times given in Central time?', a: 'Yes. All of Illinois is on Central time, so we confirm every lesson in Central time.' },
      { q: 'Can my child join from anywhere in Illinois?', a: 'Yes. Lessons are live online, so a student in Chicago, the suburbs or downstate joins the same way. We have no Illinois building.' },
      { q: 'Where are the fees listed?', a: 'In the fees section of this page: a free trial lesson, a monthly batch plan and a monthly one-to-one plan. Nothing is billed before the trial.' }
    ]
  },

  next: {
    eyebrow: 'Further reading',
    h2: 'More for Illinois students and families',
    html: 'See how Illinois compares in <a class="cg-inline-link" href="/computer-science-graduation-requirements-by-state">computer science graduation requirements by state</a> and <a class="cg-inline-link" href="/high-school-computer-science-access-by-state">high school computer science access by state</a>. Students weighing AP can read <a class="cg-inline-link" href="/does-ap-computer-science-give-college-credit">does AP computer science give college credit</a> and try our <a class="cg-inline-link" href="/ap-computer-science-a-practice-questions">AP Computer Science A practice questions</a>. For a state that made CS a full graduation course, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Illinois and other US guides',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States overview' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-practice-questions', label: 'AP CS A practice' },
    { href: '/high-school-computer-science-access-by-state', label: 'CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiil .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-aiil .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-aiil .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-aiil .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aiil .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-aiil .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-aiil .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aiil .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiil .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-aiil .cg-spec { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Illinois, read raw on 17 and 18 October 2026: ISBE "Illinois graduation requirements 105 ILCS 5/27-22, 27-22.05, 27-22.10" (March 2025; computer literacy year, PA 101-0654, may be English, social science or any other subject, marked for students entering 9th grade 2022-23 onward; AP computer science eligible for math, Section 27-22 (f-5); at least 16 units in grades 9-12; lab science from 2024-25 entrants; world language from 2028-29 entrants); ISBE Illinois Instructional Mandates 2025-26 (computer literacy required at each grade level K-12, 105 ILCS 5/10-20.79; 10-20.74; non-regulatory Continuum); Code.org (2025) access 418 of 721 (2023-24), trend 45% to 58.0%, participation 35,902 of 595,765 (6.03%, 2023-24, NCES Fall 2022 denominator); College Board AP schools 691 (2023), 715 (2024); IANA America/Chicago (Illinois in the Central list, EST in 1936, Chicago Astronomical Society 1869).',
    localProject: 'City of Chicago Data Portal, Bike Routes (hvv9-38ut), City of Chicago Data Terms of Use, 1,008 segments (count query matched), downloaded 18 October 2026. Our counts: 2,016 endpoint values, 583 distinct raw names, 578 after case and spaces, 486 after removing the direction letter, 435 after removing the suffix (over-merges, e.g. WASHINGTON BLVD and WASHINGTON ST); 266 street vs 239 st_name values; route types 285, 258, 184, 174, 107. Lesson family: string normalization and de-duplication.',
    requiredMentions: [
      'PA 101-0654',
      'Section 27-22 (f-5)',
      '105 ILCS 5/10-20.79',
      'at least 16 units',
      'Computer Literacy Knowledge and Skill Development Continuum',
      '35,902 of 595,765',
      'Chicago Astronomical Society',
      'hvv9-38ut',
      '583',
      'WASHINGTON BLVD'
    ],
    sources: [
      { claim: 'ISBE: Illinois graduation requirements (March 2025), computer literacy year, AP computer science as math, 16 units.', url: 'https://www.isbe.net/Documents/grad_require.pdf' },
      { claim: 'ISBE: Illinois Instructional Mandates 2025-26, computer literacy at each grade level K-12.', url: 'https://www.isbe.net/Documents/IL-Mandated-Units-of-Study.pdf' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Illinois access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Chicago Data Portal: Bike Routes.', url: 'https://data.cityofchicago.org/d/hvv9-38ut' },
      { claim: 'City of Chicago: Data Terms of Use.', url: 'https://www.chicago.gov/city/en/narr/foia/data_disclaimer.html' },
      { claim: 'IANA tzdb northamerica: US central time represented by Chicago; America/Chicago zone lines.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Illinois K-12 computer science standards: no ISBE page found in the ISBE sitemap (first 1,000 URLs) or at likely addresses on 18 October 2026, so no standards claim is made.',
      'That Illinois requires a computer science course to graduate: refused; the chart asks for a computer literacy year that may be any subject.',
      'Code.org Illinois access for 2024-25: the sheet has no value, so the 2023-24 figure is printed and labelled.',
      'The Code.org graduating-senior, gender and race figures: not from the Access or Participation tabs, not used.',
      'An official length of the Chicago bike network: not printed; our sum of segment miles is not used on the page.',
      'Names of individual Illinois schools: not used; counts only.',
      'That our classes earn Illinois credit: refused.',
      'Any affiliation with ISBE, Code.org, the College Board or the City of Chicago.'
    ]
  }
};
