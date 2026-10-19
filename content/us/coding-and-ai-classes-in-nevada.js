'use strict';
// Nevada (cg- state page, US cluster Phase 4, row 88). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Nevada already makes every graduate take a half credit that is at least half computer science, so what
// does that course contain, what do the 2019 standards ask for, and what do the published access numbers show?
// Sources read raw 17 to 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-nevada/):
//  - Nevada Department of Education (NDE), Guidance Memorandum #18-18, November 5, 2018, "Half-Credit Graduation
//    Requirement for Computer Education and Technology": "Senate Bill 200, passed in the 79th Nevada Legislative
//    Session (2017)"; "Regulation R078-18 amends NAC 389.450"; "at least 50% dedicated to computer science and
//    computational thinking"; "passed the State Board on August 30, 2018 and was codified into law by the Legislative
//    Commission on September 27, 2018"; "Many districts call this course Computer Science and Applications"; "The
//    graduating Class of 2023 will be the first required to have this updated course on their transcripts"; "Some
//    districts and charter schools meet this regulation in middle school"; revised course only "beginning with the
//    2019-2020 school year"; SB 200 wording "logic, coding, robotics, and cyber security".
//  - NDE diploma brochures (Classes of 2025-2028; 2029 and beyond): "Computer Education & Technology 0.5"; for the
//    Advanced and CCR Diplomas "a Computer Science course that is designated as Advanced Placement, CTE, or an
//    approved higher education course may count as a fourth Mathematics credit or a third Science credit, but not both".
//  - NDE High School Diplomas and Graduation page: CCR and Advanced Diplomas 24 credit units, Standard 23; seals incl.
//    "State Seal of STEM" and "State Seal of STEAM".
//  - NDE Computer Science page: content standards "Computer Science and Integrated Technology" in English, Spanish,
//    Chinese, Vietnamese; resources incl. "Nevada's Stellar Pathway to AI Teaching and Learning" (title only quoted).
//  - 2019 Nevada Academic Content Standards for Computer Science and Integrated Technology: approved by the Nevada
//    Board of Education "August 29, 2019"; CS standards ratified by the Legislative Commission "June 26, 2018"; writing
//    teams "represented ten of Nevada's seventeen counties"; "five core concepts"; "seven practices"; grade-by-grade
//    standards K to 5, then "Grades 6-8" and "Grades 9-12".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet: NV 2023-2024, 143 of 146 high schools offer CS
//    (97.9%), source "State Education Agency"; access 57% (2018-19), 77%, 83%, 83%, 96%, 97.9% (2023-24); no 2024-25
//    value; participation tabs have no Nevada values ("-").
//  - College Board, School Report of AP Exams by State 2023-24: Nevada schools with AP exams 147 (2023), 149 (2024).
//  - IANA tzdb northamerica: Pacific zone comment "Nevada (except West Wendover)"; West Wendover "officially switched
//    from Pacific to mountain time on 1999-10-31", no separate entry needed; mountain comment names the "Nevada border
//    (Jackpot, Owyhee, and Mountain City)". US rule Sun>=8 March, Sun>=1 November.
//  - City of Las Vegas, CLV_Parks feature layer (item 0c14322f989e4448b2018539eb82f0af, City of Las Vegas no-warranty
//    licence text saved), attributes downloaded 18 October 2026. Our checks: 89 records; STATUS Existing Park 84,
//    Existing Plaza 2, Construction 1, Proposed Park 1, Former Park 1; TYPE_2 a single blank space in 74 records, null
//    in 2, Dog Park 12, Community Garden 1; SQ_MILES empty in 3; ACRES never empty, median 7.35, mean 20.22, largest
//    696.13; 10 records above the 1.5 x IQR fence of 35.16 acres; every record with both values satisfies
//    ACRES / 640 = SQ_MILES; Existing Park only: 84 records, median 7.61, mean 21.22, mean 13.09 without the largest.
// Lesson family: data validation (missing values, two kinds of blank, outliers, unit cross-checks).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NEVADA', label: 'Nevada', blurb: 'Coding and AI for Nevada students, built around the half-credit computer science rule, with a Las Vegas park data check.' },
  market: US,
  slug: 'coding-and-ai-classes-in-nevada',
  code: 'ain',
  accent: '#146150',
  accentRationale: 'Nevada: #146150, a deep sagebrush teal from the allocation table, dark enough to pass 4.5:1 on every paper and clear of the North Carolina pine green #276910',
  pageType: 'city',
  place: {
    name: 'Nevada',
    eyebrow: 'Nevada, United States',
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
  routeLabel: 'Nevada',
  title: 'Coding and AI Classes in Nevada | Live Online for Students',
  description: 'Live online coding and AI classes for Nevada students: the half-credit computer science rule, the 2019 state standards, and a data project on Las Vegas parks.',
  ogDescription: 'Every Nevada graduate needs a half credit that is at least 50% computer science. What that course holds, what the 2019 standards ask, and live classes that go further.',
  twitterDescription: 'Nevada coding and AI classes, live online, from the half-credit rule to AP and data projects.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Nevada Students',
    description: 'Live online Scratch, Python, data science, cybersecurity and AP Computer Science for Nevada students from elementary school to twelfth grade, matched to level after a free lesson.'
  },

  h1: 'Coding and AI classes in Nevada',
  capsuleQ: 'Do Nevada students need computer science to graduate?',
  capsule: 'Yes, in part. Nevada requires a half credit of Computer Education and Technology, and since Regulation R078-18 at least 50% of that course must be computer science and computational thinking; the Class of 2023 was the first to need the updated course. Modern Age Coders teaches Nevada students live online, with a first Scratch game for young children and AP Computer Science A for juniors and seniors.',
  lead: 'Nevada settled its computer science question earlier than most states, and it did so quietly, by rewriting an existing course rather than adding a new one. The old half credit called Use of Computers became Computer Education and Technology, and a regulation fixed how much of it must be real computer science. Below we set out what the Nevada Department of Education says about that course, how the 2019 state standards are organized from kindergarten to twelfth grade, how far access has grown in Code.org&rsquo;s count of Nevada high schools, and how our live online classes give a Reno or Henderson student far more than a single half credit can hold.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a student in Nevada.',

  picks: {
    eyebrow: 'Course picks for Nevada',
    h2: 'Four starting points for Nevada students',
    intro: 'Matched to grade and ambition, then fine-tuned by the teacher in a free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Events, loops and variables through games a child designs, the grade-by-grade start of the Nevada standards.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python with real tables: cleaning, checking and charting data, as in the Las Vegas parks project below.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and the AP exam; in Nevada an AP computer science course can count as a fourth math credit on two diplomas.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 9 to 12', note: 'Defensive security and safe habits, one of the topics Senate Bill 200 lists for the required course.' }
    ]
  },

  sections: [
    {
      id: 'rule', tint: '', eyebrow: 'The half-credit rule',
      h2: 'Nevada&rsquo;s required half credit, and how much of it is computer science',
      intro: 'From the Nevada Department of Education&rsquo;s Guidance Memorandum #18-18 of November 5, 2018 and its current diploma brochures.',
      body: [
        { kind: 'table', caption: 'Computer Education and Technology, the Nevada graduation course, as NDE describes it', head: ['Point', 'NDE wording, summarized'], rows: [
          ['The law behind it', 'Senate Bill 200, passed in the 79th Nevada Legislative Session in 2017, tied the course to computer science and computational thinking'],
          ['Topics the bill names', 'Logic, coding, robotics and cyber security, as possible content for that instructional time'],
          ['The regulation', 'R078-18 amended NAC 389.450, renaming Use of Computers as Computer Education and Technology'],
          ['How much must be CS', 'At least 50% of instructional time dedicated to computer science and computational thinking'],
          ['Approval dates', 'Passed by the State Board on August 30, 2018; codified by the Legislative Commission on September 27, 2018'],
          ['First graduates affected', 'The Class of 2023, the first required to show the updated course on their transcripts'],
          ['Credit value', '0.5 of a credit, listed as Computer Education and Technology on the 2029 and beyond brochure']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Often taken before ninth grade', p: 'The memo says some districts and charter schools meet the regulation in middle school, which may continue. From 2019 to 2020 onward, only the revised course could be offered.' },
          { h3: 'A name you may see', p: 'Many districts call the half credit Computer Science and Applications, so a transcript may show that title rather than the one in the regulation.' },
          { h3: 'A route into math or science', p: 'For the Advanced and College and Career Ready diplomas, a computer science course designated AP, CTE or approved higher education may count as a fourth math credit or a third science credit, but not both.' }
        ] },
        { kind: 'p', text: 'Put plainly: every Nevada graduate has met some computer science, but a half credit split with technology skills is a taste, not a training. The fourth-credit option is where it gets interesting for ambitious students, because an AP Computer Science course can then do double duty on an Advanced or CCR diploma, which each require 24 credit units and a 3.25 minimum GPA.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'The 2019 standards',
      h2: 'How Nevada&rsquo;s computer science standards are built',
      intro: 'The Nevada Academic Content Standards for Computer Science and Integrated Technology combine two sets of standards in one document, approved by the Nevada Board of Education on August 29, 2019.',
      body: [
        { kind: 'table', caption: 'Structure of the Nevada K-12 computer science standards (right-hand column is our own mapping)', head: ['Element', 'What the standards document says', 'How our classes use it'], rows: [
          ['Grade levels', 'A separate set for kindergarten and each of grades 1 to 5, then one band for grades 6-8 and one for 9-12', 'We place elementary students by grade, then by skill from sixth grade on'],
          ['Core concepts', 'Five: Algorithms and Programming, Computing Systems, Data and Analysis, Impacts of Computing, Networks and the Internet', 'Each course names the concept a project practises'],
          ['Practices', 'Seven practices that students grow into by the end of high school', 'Projects end with a short talk-through, which builds the communication practice'],
          ['Integrated Technology', 'A second strand of K-12 technology standards in the same document, revised in 2019', 'Typing, files and safe accounts are taught as they come up, not as a separate unit'],
          ['Languages', 'NDE posts the document in English, Spanish, Chinese and Vietnamese', 'Families can read the original in their home language before a lesson']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Written by Nevadans', p: 'The computer science writing teams drafted the standards over three days in August 2017 and represented ten of Nevada&rsquo;s seventeen counties, with the remaining counties invited to review.' },
          { h3: 'Ratified in 2018', p: 'After a 30-day public review that began on November 1, 2017, the computer science standards went to the Legislative Commission for final ratification on June 26, 2018.' },
          { h3: 'AI on the radar', p: 'The department&rsquo;s computer science page now lists a resource titled Nevada&rsquo;s Stellar Pathway to AI Teaching and Learning alongside the standards and endorsement documents.' }
        ] },
        { kind: 'callout', h3: 'Why grade-by-grade matters', p: 'Many states group elementary standards into bands. Nevada writes a separate set for each year from kindergarten to fifth grade, which makes it easy for a parent to see what a second grader is meant to manage, and for a teacher to pitch a first lesson precisely.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Published figures',
      h2: 'Nearly every Nevada high school now offers computer science',
      intro: 'Access figures from the Code.org 2025 data, with the College Board count of AP schools for scale.',
      body: [
        { kind: 'table', caption: 'Share of Nevada high schools offering computer science, as published by Code.org (2025)', head: ['School year', 'Share of high schools'], rows: [
          ['2018 to 2019', '57%'],
          ['2019 to 2020', '77%'],
          ['2020 to 2021', '83%'],
          ['2021 to 2022', '83%'],
          ['2022 to 2023', '96%'],
          ['2023 to 2024', '97.9%, or 143 of 146 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Other Nevada figures, quoted as published', head: ['Measure', 'Nevada', 'Source'], rows: [
          ['AP schools counted for 2023', '147', 'College Board state AP report, 2023 to 2024 edition'],
          ['AP schools counted for 2024', '149', 'The same College Board report'],
          ['Students taking a CS course', 'No Nevada value in the sheet', 'Code.org (2025), participation tabs']
        ] },
        { kind: 'p', text: 'The climb from 57% to 97.9% in five school years is one of the steepest in the sheet, and it fits a state where a CS-heavy half credit is compulsory. The missing participation figure matters just as much: without it nobody can say how many Nevada students go beyond the required course, so we do not guess. The latest access year for Nevada in the sheet is 2023 to 2024; there is no 2024 to 2025 value yet.' },
        { kind: 'callout', h3: 'Citation', p: 'Access figures: Code.org (2025). 2025 State of AI + CS Education. Individual Nevada values are quoted from its published data sheet, which lists the state education agency as the source; the dataset itself is not republished here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can you trust a spreadsheet? Checking Las Vegas park data before using it',
      intro: 'The City of Las Vegas publishes a layer of its parks with acreage, status and type. Before a student draws any chart, they test the data the way a professional would.',
      body: [
        { kind: 'table', caption: 'What our validation checks found in the City of Las Vegas parks layer (our results, download of 18 October 2026)', head: ['Check', 'What we found'], rows: [
          ['Row count', '89 records in the layer'],
          ['Is every row a park today?', 'No: 84 are Existing Park, 2 Existing Plaza, and one each Construction, Proposed Park and Former Park'],
          ['Two kinds of blank', 'The second type field holds a single space in 74 records and a true null in 2'],
          ['Missing numbers', 'Square miles is empty for 3 records; acreage is filled in for all 89'],
          ['Unit cross-check', 'Wherever both are present, acres divided by 640 matches square miles'],
          ['Outliers', 'Largest park 696.13 acres; 10 records sit above the 1.5 times IQR fence of 35.16 acres'],
          ['Mean against median', 'Mean 20.22 acres against a median of 7.35 for all 89 rows']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Filter first', p: 'A count of &ldquo;parks&rdquo; that includes a former park and a proposed one is wrong before any math happens, so students learn to read the status column before anything else.' },
          { h3: '2. Hunt the blanks', p: 'A cell holding one space looks empty but is not, so a naive missing-value count reports 2 when the honest answer is 76. Python&rsquo;s strip() fixes it in one line.' },
          { h3: '3. Question the giant', p: 'Floyd Lamb Park at Tule Springs is about ninety-five times the median. Dropping it from the 84 existing parks moves the mean from 21.22 to 13.09 acres while the median barely moves.' }
        ] },
        { kind: 'callout', h3: 'These are our numbers, not the city&rsquo;s', p: 'Every figure in this section is our own calculation from one download. The city states that it makes no warranty about the maps or information, and the layer is updated only when new parks are announced, so a later download may differ.' },
        { kind: 'p', text: 'The deeper lesson is that an outlier is not an error. The 696-acre park is real; it simply does not belong in an average meant to describe a typical neighborhood park. Deciding when to report the median, when to exclude a record and how to say so in a sentence is the Data and Analysis concept from the Nevada standards practised on the student&rsquo;s own state.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Clocks and class times',
      h2: 'Pacific Time for most of Nevada, Mountain Time at the border',
      intro: 'Nevada is one of the few states where the IANA time zone database records an exception by name, so we check which clock a family keeps.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Most of the state', p: 'The tz database lists Nevada, except West Wendover, under US Pacific time, America/Los_Angeles. That covers Las Vegas, Henderson, Reno, Sparks and Carson City.' },
          { h3: 'The exceptions', p: 'West Wendover moved officially to Mountain Time on October 31, 1999, and the database comments also place the Nevada border communities of Jackpot, Owyhee and Mountain City in mountain time.' },
          { h3: 'India and Pacific', p: 'Our teachers work in India, which is 12 hours 30 minutes ahead of Pacific Daylight Time and 13 hours 30 minutes ahead of Pacific Standard Time; the next two switches fall on November 1, 2026 and March 14, 2027.' }
        ] },
        { kind: 'spec', title: 'A bug worth teaching', p: 'A reminder app that assumes all of Nevada shares one offset will be an hour wrong in West Wendover. Students who model the state with two IANA zones instead of one number learn why programmers never hard-code a time offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From kindergarten blocks to a fourth math credit',
    intro: 'A guide only: the free lesson decides where a student actually starts.',
    cols: [
      { band: 'Grades K to 5', h3: 'One grade at a time', p: 'Sequencing, loops and simple events, matched to the year-by-year Nevada elementary standards.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'Beyond the half credit', p: 'Where many districts place the required course; we add typed code and longer projects.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Grades 9 to 10', h3: 'Depth and safety', p: 'Python fluency, data handling and defensive security, the parts a short course can only touch.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 11 to 12', h3: 'AP and real data', p: 'AP Computer Science A, which can count toward a diploma, and data science on public datasets.', courses: ['ap-computer-science-a-java-exam-prep-course', 'data-science-course-for-teens-python-data'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Nevada students will use AI. Will they check its work?',
    intro: 'Validation is the skill AI does not hand you, and it is the heart of our data projects.',
    p1: 'Ask an AI assistant for the average size of a Las Vegas park and it may cheerfully divide total acres by 89. It will not notice the former park, the proposed park or the 696-acre giant unless someone has taught it, or the student, to look.',
    p2: 'That is why our classes have students write the checks themselves: count the blanks, cross-check the units, flag the outliers, then decide. Once they can do that by hand, an AI tool becomes a fast assistant they supervise rather than an answer they copy.',
    closer: 'Nevada&rsquo;s standards include Data and Analysis and Impacts of Computing for exactly this reason: a number is only as good as the questions asked of it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Las Vegas to Elko, the same live classroom',
    intro: 'Nevada is large and its students are spread far apart, which is where a live online class helps most.',
    cells: [
      { h3: 'No drive across the valley', p: 'A student in Summerlin and one in Pahrump can join the same lesson from home, without a commute through Las Vegas traffic after school.' },
      { h3: 'Rural Nevada too', p: 'Families in Ely, Winnemucca or Tonopah get the same teacher and the same projects as families in Reno; a reliable connection is the only requirement.' },
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batches by level', p: 'Groups of fifteen to twenty students at the same stage, so a sixth grader who already knows Scratch is not repeating it.' },
      { h3: 'Or a teacher of your own', p: 'One-to-one lessons for students aiming at AP Computer Science A or a portfolio, paced to them.' },
      { h3: 'School work stays theirs', p: 'We teach the concepts behind the half-credit course and AP; graded assignments are always the student&rsquo;s own work.' }
    ],
    spec: { title: 'Where we are', p: 'Modern Age Coders has no office or center in Nevada; every class is taught live online from India. A laptop or desktop, a headset and a steady connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for Nevada families',
    intro: 'Three options, shown below as published.',
    first: 'A free first lesson with a teacher, ending in a clear recommendation for level and course.',
    group: 'Monthly classes in a matched batch of fifteen to twenty students.',
    private: 'Monthly one-to-one classes with a single teacher for a single student.',
    closer: 'Nevada families pay in US dollars at one rate, whether they live in Carson City or North Las Vegas. Nothing is charged until after the free lesson, and the pricing page covers breaks and missed classes.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Book a free lesson for a Nevada student',
    intro: 'Tell us the grade and the goal. A fourth grader might start with a Scratch maze, a ninth grader with a first Python script, and a junior with the Las Vegas parks validation project.',
    success: 'Thank you. Our team will contact you soon about a lesson for your Nevada student.'
  },

  faq: {
    h2: 'Questions Nevada families ask',
    intro: 'Short answers drawn from Nevada Department of Education documents and the published figures.',
    items: [
      { q: 'Does Nevada require computer science to graduate?', a: 'Nevada requires a half credit of Computer Education and Technology. Under Regulation R078-18, at least 50% of that course must be computer science and computational thinking, and the Class of 2023 was the first required to have it.' },
      { q: 'When did the half-credit rule take effect?', a: 'The State Board passed R078-18 on August 30, 2018 and the Legislative Commission codified it on September 27, 2018. Districts had the 2018 to 2019 school year to update the course, which was offered only in revised form from 2019 to 2020.' },
      { q: 'Can a middle schooler take the required course?', a: 'Yes. NDE Guidance Memorandum #18-18 says some districts and charter schools meet the regulation in middle school and may continue to do so.' },
      { q: 'Can computer science count as a math or science credit in Nevada?', a: 'For the Advanced and College and Career Ready diplomas, a computer science course designated AP, CTE or approved higher education may count as a fourth math credit or a third science credit, but not both.' },
      { q: 'What do the Nevada computer science standards cover?', a: 'The 2019 standards set out five core concepts and seven practices, with separate standards for kindergarten through fifth grade and bands for grades 6-8 and 9-12. They share a document with the Integrated Technology standards.' },
      { q: 'How many Nevada high schools offer computer science?', a: 'Code.org (2025) reports 143 of 146 Nevada high schools, or 97.9%, offering computer science in 2023 to 2024, up from 57% in 2018 to 2019.' },
      { q: 'How many Nevada students take computer science?', a: 'The Code.org 2025 sheet has no Nevada participation figure, so we do not estimate one. Access counts schools that offer a course, not students in it.' },
      { q: 'What time are classes for Nevada students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are confirmed in Pacific Time, or Mountain Time for families in West Wendover.' },
      { q: 'Do your classes count toward the Nevada half credit?', a: 'No. The requirement is met through a school course. Our classes add depth and projects alongside it, and AP preparation for students taking an AP course at school.' },
      { q: 'Does Nevada have a STEM seal on the diploma?', a: 'NDE lists a State Seal of STEM and a State Seal of STEAM among its diploma seals, with the criteria on its Nevada Seal Programs page. The department sets and judges those criteria, not us.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Nevada students',
    html: 'High schoolers weighing the fourth-credit route can compare <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> with <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Students who want something to show colleges can look at <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>, and families comparing states can read how <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a> handles its newer requirement.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Nevada and beyond',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'All United States' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' }
  ],

  personalityCss: `
.cg-root.cg-ain .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-ain .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-ain .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ain .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-ain .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-ain .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-ain .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-ain .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ain .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ain .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Nevada, read raw 17 to 18 October 2026: NDE Guidance Memorandum #18-18 (November 5, 2018): Senate Bill 200 (2017), R078-18 amends NAC 389.450, at least 50% CS and computational thinking, State Board August 30, 2018, Legislative Commission September 27, 2018, Class of 2023 first, middle school delivery allowed, revised course only from 2019-2020, Computer Science and Applications name; NDE diploma brochures (Computer Education & Technology 0.5; AP/CTE/higher-ed CS as fourth math or third science on Advanced and CCR, not both; 24 credits, 3.25 GPA); NDE graduation page (State Seal of STEM, STEAM); NDE CS page (standards in four languages; Stellar Pathway to AI title); 2019 NVACS CS and Integrated Technology (Board approval August 29, 2019; ratification June 26, 2018; ten of seventeen counties; five core concepts; seven practices; K-5 by grade, 6-8, 9-12); Code.org (2025) 143 of 146, 97.9%, trend from 57%, no participation; College Board 147 (2023), 149 (2024); IANA America/Los_Angeles with West Wendover and border-town exceptions.',
    localProject: 'City of Las Vegas CLV_Parks feature layer (City of Las Vegas no-warranty licence text), attributes downloaded 18 October 2026: our validation checks on 89 records (status mix 84/2/1/1/1; 74 single-space blanks and 2 nulls in TYPE_2; 3 empty SQ_MILES; acres/640 equals square miles where both present; largest 696.13 acres; 10 above the IQR fence of 35.16; mean 20.22 against median 7.35; existing parks mean 21.22, 13.09 without the largest), all labelled ours. Lesson family: data validation, missing values and outliers.',
    requiredMentions: [
      'Senate Bill 200',
      'R078-18',
      'NAC 389.450',
      'At least 50% of instructional time',
      'Class of 2023',
      'September 27, 2018',
      'August 29, 2019',
      'ten of Nevada&rsquo;s seventeen counties',
      '143 of 146',
      'West Wendover',
      '696.13',
      '89 records'
    ],
    sources: [
      { claim: 'NDE Guidance Memorandum #18-18: half-credit graduation requirement, SB 200, R078-18, 50%, dates, Class of 2023.', url: 'https://webapp-strapi-paas-prod-nde-001.azurewebsites.net/uploads/GM_1818_Half_Credit_Graduation_Req_Computer_Edand_Tech_6ed06944a4.pdf' },
      { claim: 'NDE Classes of 2029 and beyond diploma brochure: 0.5 credit, CS as fourth math or third science.', url: 'https://webapp-strapi-paas-prod-nde-001.azurewebsites.net/uploads/2029_and_beyond_diploma_brochure_f58ffa54df.pdf' },
      { claim: 'NDE Computer Science page: standards documents and resources.', url: 'https://doe.nv.gov/offices/office-of-teaching-and-learning/computer-science/' },
      { claim: '2019 Nevada Academic Content Standards for Computer Science and Integrated Technology.', url: 'https://webapp-strapi-paas-prod-nde-001.azurewebsites.net/uploads/Nevada_Academic_Content_Standards_forrev_adf847c3ac.pdf' },
      { claim: 'NDE High School Diplomas and Graduation page: diploma types and State Seals.', url: 'https://doe.nv.gov/offices/office-of-teaching-and-learning/high-school-graduation' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Nevada access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Las Vegas: CLV_Parks feature service.', url: 'https://services1.arcgis.com/F1v0ufATbBQScMtY/arcgis/rest/services/CLV_Parks/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Pacific zone comment, West Wendover, mountain border towns, US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Nevada CS participation (students enrolled): the Code.org sheet has no Nevada value, so none is printed or estimated.',
      'The content of Nevada&rsquo;s Stellar Pathway to AI Teaching and Learning: only its title, as listed on the NDE CS page, is quoted; the document was not read.',
      'City of Henderson trail data: its GIS server returned 403, so it was not used.',
      'City of Las Vegas tree inventory: no licence text and it carries tree-failure risk fields, so not used.',
      'A total acreage for Las Vegas parks: not printed, because the layer mixes former and proposed parks and is not an official total.',
      'That our classes satisfy the half-credit requirement or a State Seal: refused; only school courses and NDE criteria do.',
      'Any affiliation with NDE, the City of Las Vegas, Code.org or the College Board.'
    ]
  }
};
