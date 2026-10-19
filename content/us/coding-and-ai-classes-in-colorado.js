'use strict';
// Colorado (cg- state page, US cluster Phase 4, row 67). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Colorado's computer science standards are voluntary, unlike every other subject's, yet the 2024 revision
// added artificial intelligence from second grade and cybersecurity throughout. What do the standards ask, what does
// local control mean for graduation, and how should a student draw a fair histogram of state park trails?
// Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-colorado/):
//  - CDE, Colorado Academic Standards: Computer Science page: "(adopted 2024)" and "(adopted 2018)" versions.
//  - CDE, CAS Computer Science 2024 PDF: "adopted by the Colorado State Board of Education in May 2024"; "organized into
//    six content area strands": Computational Thinking, Computing Systems and Networks, Computer Programming,
//    Cybersecurity, Artificial Intelligence (AI), Digital Citizenship; grade levels Kindergarten, First to Fifth Grade,
//    Middle School, High School; Standard 5 (AI) first appears in Second Grade (CS.2.5.1), evidence outcome
//    "Demonstrate how to train a computer to recognize something."; Statute: "House Bill 16-1198 requires the State Board
//    of Education to adopt secondary computer science standards", courses "that qualify as a graduation requirement in
//    either mathematics or science"; "Local education providers may choose to implement the standards adopted. The
//    voluntary nature of the computer science standards is different from all other academic standards that are
//    required to be implemented."
//  - CDE, Computer Science page: standards emphasize "computational thinking, systems and networking, programming,
//    cybersecurity, AI, and digital citizenship"; Resource Bank "Authorized by the legislature in 2017"; "Computer Science
//    Grants Program (2017-2025)".
//  - CDE, Computer Science Grants for Teachers: 2024-2025 grantees approved by the State Board (12 listed; names not
//    printed); funds "must be expended by June 30, 2025"; purpose postsecondary education of teachers who teach or wish
//    to teach CS. (Dollar amounts not printed.)
//  - CDE, Graduation Guidelines: "Menu of Options - embedded in each school district's graduation requirements",
//    "at least one measure in Reading, Writing, and Communicating, and one measure in Mathematics"; full implementation
//    "for students graduating in the 2021-22 school year and beyond".
//  - Code.org (2025), raw sheet (Access and Participation tabs only): CO access 57% (2020-21), 54%, 59.0%, 66.3%
//    (2023-24), 2018-19, 2019-20 and 2024-25 blank; Most Recent 344 of 519, 2023-2024, "State Education Agency and School
//    Catalogs". Participation: no value in any year.
//  - College Board, School Report of AP Exams by State 2023-24: Colorado 353 (2023), 364 (2024); public 297, 318.
//  - IANA tzdb: "US mountain time, represented by Denver", Colorado listed first; zone1970.tab America/Denver.
//  - Colorado Parks and Wildlife, CPWAdminData FeatureServer layer 2 "CPW Trail Segments" (item owner rsaccoCPW; licence
//    text: "product and property of the Colorado Parks and Wildlife", data "AS IS"). Count query 1,211, downloaded
//    18 October 2026 in one request. Our figures from length_mi_: 156 records at 0, nonzero min 0.01, max 8.1, median 0.4,
//    mean 0.727; unequal bins 0 to under 0.25: 371, 0.25 to 0.5: 191, 0.5 to 1: 250, 1 to 2: 152, 2 to 4: 69, 4 and over:
//    22; half-mile bins 562, 250, 106, 46, 31, 20, 9, 9, then 22 at 4 and over; one-mile bins 812, 152, 51, 18, 14, 8;
//    1,146 segments on State Park properties; 54 property names; longest Voodoo Loop 8.1 (Lake Pueblo State Park).
// Lesson family: binning values into a histogram, and how bin choice changes the picture.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'COLORADO', label: 'Colorado', blurb: 'Coding and AI for Colorado students under the 2024 voluntary CS standards, with a histogram project on 1,211 state park trail segments.' },
  market: US,
  slug: 'coding-and-ai-classes-in-colorado',
  code: 'ac',
  accent: '#265C21',
  accentRationale: 'Colorado: #265C21, a muted high-country spruce green, allocated in alloc.tsv row 67 and distinct from the other US accents; over 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Colorado',
    eyebrow: 'Colorado, United States',
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
  routeLabel: 'Colorado',
  title: 'Coding and AI Classes in Colorado | Live Online, K to 12',
  description: 'Live online coding and AI classes for Colorado students: the 2024 CS standards with AI from second grade, local graduation rules, and a state park trails project.',
  ogDescription: 'Colorado\'s 2024 computer science standards add AI and cybersecurity, and they are voluntary for districts. What they say, what access looks like, and live online classes.',
  twitterDescription: 'Colorado coding and AI classes, live online, built around the 2024 CS standards.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Colorado Students',
    description: 'Level-matched online AI literacy, Python, cybersecurity and machine learning for Colorado students from second grade to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in Colorado',
  capsuleQ: 'What do Colorado\'s computer science standards cover, and do schools have to teach them?',
  capsule: 'The 2024 Colorado Academic Standards for Computer Science, adopted by the State Board in May 2024, run from kindergarten to high school in six strands, including AI from second grade and cybersecurity. Districts may choose whether to adopt them. Modern Age Coders teaches those same skills live online for Colorado students, in level-matched batches or 1-on-1.',
  lead: 'Colorado did something unusual with computer science. Its standards are the only ones in the state that districts are free to skip: the law that created them made them voluntary. Yet the 2024 revision reaches far, with an artificial intelligence strand that starts in second grade and a full cybersecurity strand. This page sets out what the Colorado Department of Education publishes about those standards and about graduation, the access figures as reported, a state park trails project that teaches students to draw an honest histogram, and how classes fit around Mountain Time.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Colorado.',

  picks: {
    eyebrow: 'Course picks for Colorado',
    h2: 'Courses mapped to Colorado\'s six strands',
    intro: 'Each covers at least one strand of the 2024 standards. A teacher confirms the right one in a first lesson that costs nothing.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Grades 2 to 5', note: 'How computers learn from examples, the heart of the second grade AI expectations, taught with hands-on activities.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 10', note: 'Typed code for the Computer Programming strand, ending in data projects such as the trails histogram.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Defensive security, passwords, threats and recovery, the territory of the Cybersecurity strand.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Train and test real models in Python, with the limits of AI discussed as seriously as its uses.' }
    ]
  },

  sections: [
    {
      id: 'standards', tint: '', eyebrow: 'The 2024 standards',
      h2: 'Six strands, kindergarten to twelfth grade, adopted May 2024',
      intro: 'From the Colorado Academic Standards for Computer Science (adopted 2024), published by the Colorado Department of Education (CDE) and read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'The six strands of the 2024 Colorado computer science standards, as CDE describes them', head: ['Strand', 'What CDE says it covers'], rows: [
          ['1. Computational Thinking', 'Using algorithms and data in different ways to generate new knowledge and articulate solutions to real problems'],
          ['2. Computing Systems and Networks', 'How software and hardware communicate, and systems thinking around data protection and recovery'],
          ['3. Computer Programming', 'Designing algorithms, writing programs, testing and debugging, and working collaboratively'],
          ['4. Cybersecurity', 'Protecting personal information, recognizing threats, finding vulnerabilities and recovering from breaches'],
          ['5. Artificial Intelligence (AI)', 'How computers can be trained to recognize patterns, make decisions and learn from data, with their capabilities and limitations'],
          ['6. Digital Citizenship', 'Responsible use of technology, digital footprints, ethical behavior and respectful online communities']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'AI starts in second grade', p: 'The AI strand does not appear in the kindergarten or first grade standards. In second grade (CS.2.5.1), one evidence outcome reads: "Demonstrate how to train a computer to recognize something."' },
          { h3: 'Every grade, then bands', p: 'The document sets expectations for kindergarten and each of first to fifth grade, then for middle school and high school as bands, with the most detail at the high school level.' },
          { h3: 'Two versions online', p: 'CDE keeps both the 2018 standards and the 2024 revision on its standards page, so schools and families can see what changed between them.' }
        ] },
        { kind: 'p', text: 'The second grade AI outcomes are worth reading in full because they set the tone. Besides training a computer to recognize something, children are expected to describe how people learn and how computers learn, describe what an intelligent assistant can and cannot do, and identify devices in daily life that use AI. That is AI literacy as understanding, not as tool use, and it is exactly the right order.' }
      ]
    },
    {
      id: 'voluntary', tint: 'tint', eyebrow: 'Voluntary standards and local diplomas',
      h2: 'Why a Colorado district can choose not to use these standards',
      intro: 'The answer is in the statute the standards document quotes, and in how Colorado leaves graduation rules to districts.',
      body: [
        { kind: 'table', caption: 'Computer science in Colorado law and graduation policy, from CDE pages read 17 October 2026', head: ['Topic', 'What CDE publishes'], rows: [
          ['House Bill 16-1198', 'Told the State Board to adopt secondary-level computer science standards, coding included, aimed at courses that can satisfy a math or a science requirement for graduation'],
          ['Voluntary use', 'Local education providers may choose to implement the standards; CDE notes this differs from all other academic standards, which are required'],
          ['Resource Bank', 'An online computer science resource bank for teachers, authorized by the legislature in 2017'],
          ['Teacher grants', 'A Computer Science Grants Program ran from 2017 to 2025; 12 local providers received 2024 to 2025 awards, to be spent by June 30, 2025'],
          ['Graduation Guidelines', 'Districts set their own requirements, with a Menu of Options requiring at least one measure in Reading, Writing, and Communicating and one in Mathematics'],
          ['Full implementation', 'The Menu of Options applies to students graduating in the 2021-22 school year and beyond']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No statewide CS course rule', p: 'In what we read, Colorado sets no single statewide computer science graduation requirement. The state menu names reading, writing and communicating, and mathematics; computer science is not among them.' },
          { h3: 'But it can count', p: 'The 1198 law was written for courses that qualify toward a math or science requirement, so a district may let computer science fill one of those slots. Check your district\'s own rules.' },
          { h3: 'Teachers were the bottleneck', p: 'The grant program existed to pay for postsecondary coursework and training for teachers who teach, or want to teach, computer science, including AP and concurrent enrollment courses.' }
        ] }
      ]
    },
    {
      id: 'access', tint: '', eyebrow: 'The published counts',
      h2: 'Two in three Colorado high schools offer computer science',
      intro: 'Code.org (2025) access values and College Board AP school counts for Colorado, as published.',
      body: [
        { kind: 'table', caption: 'Colorado access by year where the 2025 Code.org trend tab has a value; the first two years and the latest are blank', head: ['Year', 'High schools with CS'], rows: [
          ['Fall 2020 school year', '57%'],
          ['Fall 2021 school year', '54%'],
          ['Fall 2022 school year', '59.0%'],
          ['Fall 2023 school year (2023 to 2024)', '66.3%, or 344 of 519 high schools']
        ] },
        { kind: 'p', text: 'For the 2023 to 2024 count, the sheet names its Colorado basis as "State Education Agency and School Catalogs", a blend of an official file and school course lists. It holds no Colorado enrollment figure for any year, so how many Colorado students take computer science is not known from this source. College Board counts 353 Colorado schools giving AP exams in 2023 and 364 in 2024, of which 297 and 318 were public. Suggested citation for access: Code.org (2025). 2025 State of AI + CS Education; only single values are quoted.' }
      ]
    },
    {
      id: 'histogram', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Drawing an honest histogram of Colorado state park trails',
      intro: 'Colorado Parks and Wildlife publishes the designated trail segments on its properties, each with a length in miles. Students bin those lengths three ways and watch the story change.',
      body: [
        { kind: 'table', caption: 'CPW trail segments by length (our bins on the length_mi_ field of the CPW Trail Segments layer, 1,211 records, downloaded 18 October 2026)', head: ['Length in miles', 'Our count of segments'], rows: [
          ['Recorded as 0', '156'],
          ['More than 0, under 0.25', '371'],
          ['0.25 to under 0.5', '191'],
          ['0.5 to under 1', '250'],
          ['1 to under 2', '152'],
          ['2 to under 4', '69'],
          ['4 or more', '22']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Equal bins first', p: 'With half-mile bins, the nonzero segments fall 562, 250, 106, 46, 31, 20, 9 and 9, then 22 at four miles and over. The shape is a steep slide: most segments are short connectors.' },
          { h3: '2. Then wider bins', p: 'With one-mile bins the first bar swallows 812 segments and everything else looks tiny: 152, 51, 18, 14 and 8. Same data, a different impression. Students learn to state their bin width in every caption.' },
          { h3: '3. Handle the zeros', p: 'The 156 zeros are not trails of no length. They are values rounded or never measured, so they get their own row rather than being hidden in the first bin, where they would inflate it.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The bins and counts are ours, from one download. CPW describes the layer as its product and property and provides it "as is", so these are teaching figures, not official trail statistics. The longest single segment in the file is Voodoo Loop at Lake Pueblo State Park, recorded at 8.1 miles; the median nonzero segment is 0.4 miles.' },
        { kind: 'p', text: 'A strong follow-up compares the mean, 0.727 miles, with the median, 0.4. When a few long segments pull the mean up, the median describes a typical segment better, and the histogram shows why at a glance. This is the Computational Thinking strand\'s use of data to generate new knowledge, on data from the student\'s own state, with the honesty about method that the AI strand asks for when it talks about limitations.' }
      ]
    },
    {
      id: 'mountain', tint: 'tint', eyebrow: 'Class times',
      h2: 'Mountain Time, the reference zone for the whole region',
      intro: 'In the IANA database, US mountain time is "represented by Denver", and Colorado is the first state the entry lists.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone statewide', p: 'All of Colorado uses America/Denver, which observes daylight saving. Class times are confirmed in Mountain Time, so families never convert anything themselves.' },
          { h3: 'India time, our sums', p: 'By our arithmetic, India is 11 hours 30 minutes ahead of Mountain Daylight Time and 12 hours 30 minutes ahead of Mountain Standard Time. The clocks change on November 1, 2026 and March 14, 2027.' },
          { h3: 'A neighbor without daylight saving', p: 'Arizona, next door, mostly stays on standard time all year. A Colorado student who builds a meeting planner for both learns why zone names beat fixed offsets.' }
        ] },
        { kind: 'spec', title: 'A cybersecurity habit hiding in time stamps', p: 'Log files from different machines only line up if every time stamp carries its zone. Students who record events in UTC and display them in America/Denver are practising the Computing Systems and Networks strand, and avoiding a classic incident-response mistake from the Cybersecurity strand.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Following the strands from second grade to senior year',
    intro: 'These bands are a sketch only. One free session with a teacher shows where a student should really begin.',
    cols: [
      { band: 'Grades K to 2', h3: 'Algorithms and patterns', p: 'Step-by-step instructions, patterns in data and the first questions about how a computer can learn.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 3 to 5', h3: 'Programs and AI ideas', p: 'Block games, then simple Python, with the AI strand\'s questions about what machines can and cannot do.', courses: ['scratch-programming-complete-course', 'python-ai-kids-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'Code, data, security', p: 'Typed Python, data charts like the trails histogram, and safe habits online.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 9 to 12', h3: 'Machine learning and AP', p: 'Models trained and evaluated by the student, or AP Computer Science Principles alongside school.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Colorado asks second graders how computers learn. Older students should build one.',
    intro: 'The standards treat AI as something to understand, including its limits. Building a model is the fastest way to see those limits.',
    p1: 'A student who trains a small classifier sees immediately that it only knows what its examples taught it. Show it a picture unlike anything in the training set and it guesses with confidence. No lecture about bias lands as hard as watching your own model get it wrong.',
    p2: 'That experience changes how students use AI assistants too. They stop asking whether a tool is smart and start asking what it was trained on and how its answer could be checked, which is the habit the AI strand describes when it pairs capabilities with limitations.',
    closer: 'Voluntary standards mean some Colorado schools will teach this deeply and others barely at all; a student who learns it either way is ready for both.',
    blogAnchor: 'why coding still pays off alongside AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Denver, the Western Slope or the plains, one live class',
    intro: 'Mountain passes and long drives stop mattering when the classroom is online.',
    cells: [
      { h3: 'Flexible timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Grouped by level', p: 'Batches of fifteen to twenty students at the same stage, from Colorado and across the US, with a live teacher each session.' },
      { h3: 'Private option', p: 'One teacher for one student, useful for advanced AI projects, AP preparation or a student whose district offers little computer science.' },
      { h3: 'School work stays theirs', p: 'Teachers use US grade levels and can connect lessons to a school course, but anything graded at school is always the student\'s own.' },
      { h3: 'A free start', p: 'The first lesson is free and ends with a recommendation for level, course and time. We do not ask for card details.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, working audio and an internet connection that handles video calls.' }
    ],
    spec: { title: 'Online, from India', p: 'Modern Age Coders has no Colorado office or classroom and claims none. Teachers work live from India, and we are not connected with CDE, CPW or any Colorado district.' }
  },

  fees: {
    h2: 'What Colorado families pay',
    intro: 'Three amounts, in US dollars, and no others.',
    first: 'An introductory lesson at no charge, closing with a level and course suggestion.',
    group: 'A month of batch lessons with fifteen to twenty students at a matching level.',
    private: 'A month of one-to-one lessons on the same schedule.',
    closer: 'Boulder and Grand Junction pay the same US rate, in US dollars. You are billed only after the free lesson, once a course and time are agreed; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Parent and student reviews on Google',

  book: {
    h2: 'Request a free lesson for a Colorado student',
    intro: 'Tell us the grade and the interest: a second grader curious about how a computer recognizes pictures, a middle schooler ready for Python, or a high schooler who wants to train a model.',
    success: 'Thank you. Our team will contact you soon about a class for your Colorado student.'
  },

  faq: {
    h2: 'Colorado questions, answered',
    intro: 'What Colorado families ask before they start.',
    items: [
      { q: 'When were the current Colorado computer science standards adopted?', a: 'The State Board of Education adopted the current version in May 2024. CDE also keeps the earlier 2018 standards online for comparison.' },
      { q: 'Do Colorado schools have to follow the computer science standards?', a: 'No. Each local education provider decides whether to use them. CDE points out that this optional status is unique among the state\'s subject standards.' },
      { q: 'When does AI appear in the Colorado standards?', a: 'In second grade. The first AI expectations include training a computer to recognize something and describing what an intelligent assistant can and cannot do.' },
      { q: 'Is computer science required to graduate in Colorado?', a: 'Not statewide in what we read. Districts set their own graduation requirements, and the state menu names reading, writing and communicating, and mathematics measures.' },
      { q: 'Can computer science count as math or science in Colorado?', a: 'House Bill 16-1198 tied the standards to courses that qualify toward a math or science graduation requirement, so some districts allow it. Ask your district.' },
      { q: 'What share of Colorado high schools have a computer science course?', a: 'The 2025 Code.org sheet puts it at 344 of 519, or 66.3%, for 2023 to 2024, combining state agency data with school catalogs.' },
      { q: 'What time are Colorado classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Mountain Time.' },
      { q: 'Are your AI classes suitable for elementary students?', a: 'Yes, with age-appropriate tools and no accounts that require an older age. Young students learn how machines learn from examples before using any assistant.' },
      { q: 'Do you have a Denver location?', a: 'No. Our teachers are in India and every lesson is live online; no Colorado premises or district partnership is claimed.' },
      { q: 'Where are the fees listed?', a: 'In the fees section above: a free first lesson, then monthly batch or 1-on-1 plans in US dollars, with billing only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Colorado families',
    html: 'Parents of younger children can read <a class="cg-inline-link" href="/ai-literacy-for-elementary-students">AI literacy for elementary students</a>. Teens can compare <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a> and <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a>, and ambitious builders can read our <a class="cg-inline-link" href="/presidential-ai-challenge-guide">Presidential AI Challenge guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Colorado and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'US state and city pages' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ai-literacy-for-elementary-students', label: 'Elementary AI literacy' },
    { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge' }
  ],

  personalityCss: `
.cg-root.cg-ac .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-ac .cg-hero h1 { font-weight: 780; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-ac .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ac .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-ac .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-ac .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.6rem); }
.cg-root.cg-ac .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-ac .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ac .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-ac .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Colorado, read raw 17 and 18 October 2026. CDE CAS Computer Science (adopted 2024 and 2018 versions); 2024 PDF: adopted May 2024, six strands, K and grades 1 to 5, MS, HS; AI from second grade (CS.2.5.1, "Demonstrate how to train a computer to recognize something."); HB 16-1198, voluntary implementation. CDE CS page: Resource Bank authorized 2017, Grants Program 2017-2025. CDE CS grants: 12 2024-25 grantees, spend by June 30, 2025. CDE Graduation Guidelines: Menu of Options, Reading, Writing, and Communicating and Mathematics measures, 2021-22 and beyond. Code.org (2025): 57%, 54%, 59.0%, 66.3% (344 of 519, State Education Agency and School Catalogs); no participation values. College Board 353, 364. IANA America/Denver.',
    localProject: 'Colorado Parks and Wildlife CPW Trail Segments layer (CPWAdminData FeatureServer 2, "as is"), count 1,211, downloaded 18 October 2026: our bins zero 156, under 0.25: 371, 0.25 to 0.5: 191, 0.5 to 1: 250, 1 to 2: 152, 2 to 4: 69, 4 and over: 22; half-mile bins 562, 250, 106, 46, 31, 20, 9, 9, 22; one-mile bins 812, 152, 51, 18, 14, 8; median 0.4, mean 0.727, longest 8.1. Lesson family: histogram binning.',
    requiredMentions: [
      'May 2024',
      'The 156 zeros',
      'Demonstrate how to train a computer to recognize something.',
      'CS.2.5.1',
      'Menu of Options',
      'Lake Pueblo State Park',
      'Digital Citizenship',
      '364 in 2024',
      '1,211 records',
      '562, 250, 106, 46, 31, 20, 9 and 9',
      'Voodoo Loop'
    ],
    sources: [
      { claim: 'CDE: Colorado Academic Standards, Computer Science (2024 and 2018 versions).', url: 'https://ed.cde.state.co.us/computerscience/standards' },
      { claim: 'CDE: Computer Science page, Resource Bank and Grants Program.', url: 'https://ed.cde.state.co.us/computerscience' },
      { claim: 'CDE: Computer Science Grants for Teachers Program, 2024-2025.', url: 'https://ed.cde.state.co.us/computerscience/csed-grant' },
      { claim: 'CDE: Graduation Guidelines.', url: 'https://ed.cde.state.co.us/postsecondary/graduationguidelines' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Colorado access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Colorado Parks and Wildlife: CPWAdminData CPW Trail Segments layer.', url: 'https://services5.arcgis.com/ttNGmDvKQA7oeDQ3/ArcGIS/rest/services/CPWAdminData/FeatureServer/2' },
      { claim: 'IANA tzdb northamerica: US mountain time represented by Denver.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'City of Boulder tree inventory (CC0): gis.bouldercolorado.gov returned a Cloudflare challenge on 18 October 2026, so it was not used and not retried around.',
      'Grant dollar amounts and the names of the 12 grantee districts: not printed.',
      'Names of standards committee members, board members and CDE staff: not printed.',
      'Job-market claims in the standards introduction: not used.',
      'Code.org gender, race, geography and graduation figures and the Code.org Colorado summary text: not used.',
      'A Colorado CS enrollment figure: the sheet has none, so none is printed or estimated.',
      'Official CPW trail mileage totals: not read; only our bins of the layer field are printed, labelled as ours. Wildlife and hunting layers in the same service were not used.',
      'Any affiliation with CDE, Colorado Parks and Wildlife, Code.org or the College Board.'
    ]
  }
};
