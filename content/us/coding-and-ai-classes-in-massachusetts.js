'use strict';
// Massachusetts (cg- state page, US cluster Phase 4, row 81). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Massachusetts has no statewide computer science graduation course, but it has a 2016 DLCS framework, a
// recommended program (MassCore) that lets an approved CS course stand in for maths or lab science, and its own
// course-taking figures. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-massachusetts/):
//  - DESE, Graduation Requirements and Related Guidance (dese-graduation.txt): "To earn a Massachusetts diploma, a
//    student must meet the Competency Determination ( CD ) standard and meet local graduation requirements."; "G.L. c.
//    69, � 1D"; "In November 2024, Massachusetts voters approved a ballot question"; "In May 2025, the Board of
//    Elementary and Secondary Education voted to amend the Competency Determination CD regulations, 603 CMR 30.00";
//    class of 2027 and beyond coursework list: two years ELA; Algebra I and Geometry (or Integrated Math I and II);
//    one year of Biology, Physics, Chemistry, or Technology/Engineering; a one-year U.S. history course. No CS.
//  - DESE, MassCore (dese-masscore.txt): "Adopted by the Board of Elementary and Secondary Education in 2007 and
//    amended in 2018, MassCore is a state-recommended program of study"; four units English, four maths, three lab
//    science, three history, two same world language, one arts, five additional "core"; "A computer science course
//    that includes rigorous mathematical or scientific concepts and aligns with the 2016 Digital Literacy and Computer
//    Science Framework can substitute for either a mathematics course or a laboratory science course."
//  - DESE, DLCS Administrator and Parent resources (dlcs-admin-resources.txt, dlcs-pg-resources.txt): approved
//    substitutes "#10011 Computer Science Principles #10012 Exploring Computer Science #10019 Advanced Placement(R)
//    Computer Science Principles #10090 Computational Thinking and Problem Solving"; MTEL "for the MA 5-12 DLCS
//    Teacher License"; dese-stem.txt: "The DLCS PreK-6 License is now available!"
//  - DESE, DLCS Implementation Resources (dlcs-implement-process.txt, last updated August 1, 2025): "In Massachusetts,
//    82% of public high schools offer computer science, however, only 5.9% of our public high school students take a
//    foundational computer science course."; frameworks "released in 2016", grade spans K-2, 3-5, 6-8, 9-12; "2025
//    Massachusetts Curriculum Guide" reviewed by STEM Learning Design.
//  - DESE, 2016 DLCS Curriculum Framework PDF (dese-dlcs-fw.txt): commissioner's letter "October 2016"; four strands
//    "Computing and Society, Digital Tools and Collaboration, Computing Systems, and Computational Thinking"; it
//    "reframes" 2008 Technological Literacy "as Digital Literacy, and adds expectations for Computer Science".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (codeorg-cb-extract.txt): MA access 75% (2018-19),
//    82%, 78%, 83%, no 2022-23 value, 81.25% (2023-24, 325 of 400, source State Education Agency), no 2024-25 value;
//    participation 23,127 of 292,428 (7.91%). Geography, gender and race tabs not used.
//  - College Board, School Report of AP Exams by State 2023-24: MA schools with AP exams 464 (2023), 463 (2024).
//  - IANA tzdb northamerica + zone.tab: America/New_York "Eastern (most areas)"; Rule US 2007 max Mar Sun>=8, Nov
//    Sun>=1, so November 1, 2026 and March 14, 2027.
//  - Project: City of Cambridge LANDMARK_PublicLibraries (7 points; licence "Public Domain Dedication and License
//    v1.0") and MassGIS MBTA Rapid Transit stops (170 records, 157 distinct station names; "This GIS web service is a
//    public resource and may be used by anyone"), downloaded 17 October 2026. Our haversine nearest station per
//    library (straight line, R = 6371.0088 km): Central Square Branch to Central 0.17 km; Cambridge Public Library to
//    Harvard 0.66 km; O'Neill Branch to Davis 0.69 km; O'Connell Branch to Lechmere 0.70 km; Valente Branch to Union
//    Square 0.71 km; Boudreau Branch to Porter 1.24 km; Collins Branch to Alewife 2.17 km. Stops by LINE: GREEN 66,
//    SILVER 45, RED 27, ORANGE 16, BLUE 10, plus 6 shared-line records.
// Lesson family: nearest neighbour with the haversine formula (and why straight-line distance is not a walk).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MASSACHUSETTS', label: 'Massachusetts', blurb: 'Coding and AI for Massachusetts students under the DLCS framework and MassCore, with a Cambridge library and T station distance project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-massachusetts',
  code: 'aima',
  accent: '#15388A',
  accentRationale: 'Massachusetts: #15388A, a deep harbor blue from the allocation table, kept clear of the North Carolina green and the other US accents and dark enough for body-text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Massachusetts',
    eyebrow: 'Massachusetts, United States',
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
  routeLabel: 'Massachusetts',
  title: 'Coding and AI Classes in Massachusetts | Live Online',
  description: 'Live online coding and AI classes for Massachusetts students: the DLCS standards, how a CS course counts in MassCore, DESE figures, and a Cambridge data project.',
  ogDescription: 'Massachusetts has no statewide CS graduation course, but MassCore lets one replace a maths or lab science unit. The rules, the figures and live classes for Bay State students.',
  twitterDescription: 'Massachusetts coding and AI classes, live online, mapped to the DLCS framework and MassCore.',
  ogImageCourse: 'ap-computer-science-principles-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Massachusetts Students',
    description: 'Python, Java, AP Computer Science Principles and A, data science and AI for Massachusetts students in elementary, middle and high school, taught live online in small level-matched groups or one to one.'
  },

  h1: 'Coding and AI classes in Massachusetts',
  capsuleQ: 'Is computer science required to graduate in Massachusetts?',
  capsule: 'No statewide course is required. A Massachusetts diploma rests on the Competency Determination plus local district rules, and the class of 2027 coursework list names English, maths, science and U.S. history only. But MassCore, the state-recommended program, lets an approved computer science course replace a maths or lab science unit. Modern Age Coders teaches those courses live online, from first Scratch projects to AP Computer Science Principles.',
  lead: 'Massachusetts took a different road from the states that legislated a computer science course for every graduate. Its Department of Elementary and Secondary Education (DESE) wrote one of the earlier standalone K to 12 frameworks, the Digital Literacy and Computer Science (DLCS) framework of 2016, and then built incentives around it rather than a mandate: a teacher license, a reviewed curriculum guide, and a rule inside MassCore that treats a rigorous computer science course as a maths or science unit. DESE is also unusually candid about the gap that remains. Its own resource page says 82% of public high schools offer computer science while only 5.9% of public high school students take a foundational course. This page sets out those rules and numbers as DESE publishes them, adds the Code.org and College Board figures for the state, and finishes with a small Python project on Cambridge open data that any Bay State teenager can run.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Massachusetts.',

  picks: {
    eyebrow: 'Course picks for Massachusetts',
    h2: 'Four starting points mapped to the DLCS strands',
    intro: 'Each pick lines up with a strand of the 2016 framework or a MassCore course; the free first lesson confirms the level.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades 2 to 6', note: 'The Computational Thinking strand made concrete: decomposition, patterns and step-by-step plans before any syntax.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Typed Python from zero, then the Cambridge distance project and other work on Massachusetts open data.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, course code 10019 on the MassCore substitute list, with the Create task and exam practice.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Cleaning, joining and charting real public datasets, then a first model, with every number explained.' }
    ]
  },

  sections: [
    {
      id: 'diploma', tint: '', eyebrow: 'What a diploma requires',
      h2: 'Massachusetts graduation rules, and where computer science fits',
      intro: 'The state sets a floor, the Competency Determination, and each district adds its own requirements. Read from DESE on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Massachusetts diploma requirements as DESE describes them', head: ['Rule', 'What DESE says'], rows: [
          ['The two parts', 'Meet the Competency Determination (CD) standard and meet local graduation requirements'],
          ['Legal basis', 'The Massachusetts Education Reform Law of 1993, G.L. c. 69, section 1D, established the CD requirement'],
          ['Recent change', 'Voters approved a ballot question amending the CD in November 2024; the Board amended the CD regulations, 603 CMR 30.00, in May 2025'],
          ['Class of 2027 and beyond', 'Full credit in two years of English language arts, Algebra I and Geometry (or Integrated Math I and II), one year of Biology, Physics, Chemistry or Technology/Engineering, and one year of U.S. history'],
          ['Computer science', 'Not on the state coursework list; a district may add it locally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'MassCore, the recommended path', p: 'The Board adopted MassCore in 2007 and amended it in 2018. It asks for four units of English, four of maths, three of lab science, three of history, two of one world language, one of the arts and five more core courses.' },
          { h3: 'The substitution rule', p: 'DESE says a computer science course with rigorous mathematical or scientific content, aligned to the 2016 framework, can stand in for either a maths course or a laboratory science course within MassCore.' },
          { h3: 'Four approved course codes', p: 'The DLCS pages list 10011 Computer Science Principles, 10012 Exploring Computer Science, 10019 AP Computer Science Principles and 10090 Computational Thinking and Problem Solving.' }
        ] },
        { kind: 'p', text: 'So the honest summary for a Massachusetts family is this: a student can graduate without computer science, but a student who takes an approved course can count it toward MassCore without giving up anything else. Whether a particular high school offers one of the four listed courses, and how the district records it, is a question for the school counselor; we do not issue school credit, and our classes sit alongside the school program rather than inside it.' }
      ]
    },
    {
      id: 'framework', tint: 'deep', eyebrow: 'The 2016 DLCS framework',
      h2: 'Four strands, four grade spans: the Massachusetts DLCS standards',
      intro: 'The framework went out with a commissioner&rsquo;s letter dated October 2016. It folded the 2008 Technological Literacy standards into Digital Literacy and added Computer Science alongside them.',
      body: [
        { kind: 'table', caption: 'The four DLCS strands, and the place each takes in our teaching (the right-hand column is ours)', head: ['Strand', 'What the strand covers', 'How our classes meet it'], rows: [
          ['Computing and Society', 'Safety, ethics, law and the social impact of technology', 'Every project ends with a short discussion of who the program serves and what data it touches'],
          ['Digital Tools and Collaboration', 'Choosing and using tools, research, and working with others online', 'Shared code, version control with Git for teens, and peer review in class'],
          ['Computing Systems', 'Devices, hardware, software, networks and troubleshooting', 'Students install, run and debug on their own machine, not only in a browser sandbox'],
          ['Computational Thinking', 'Abstraction, algorithms, data, modeling and programming', 'The core of each course, from block puzzles at age eight to Java at sixteen']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'K-2 and 3-5', p: 'DESE publishes quick reference guides by span. The early spans lean on digital citizenship and simple algorithms, and DESE adds suggested standards for each elementary grade.' },
          { h3: '6-8', p: 'Middle school is where DESE expects students to move into real programming and data. A separate suggested-standards document maps the span onto grades 6, 7 and 8.' },
          { h3: '9-12', p: 'High school standards are written as one span. DESE&rsquo;s example course sequence runs from Exploring Computer Science through Computer Science Principles to more advanced work.' }
        ] },
        { kind: 'callout', h3: 'Who teaches it in school', p: 'Massachusetts licenses DLCS teachers for grades 5 to 12 through the MTEL test, and DESE&rsquo;s computer science page announces that a DLCS PreK-6 License is now available. A 2025 Massachusetts Curriculum Guide, reviewed for DESE by STEM Learning Design, sorts curricula into core and supplemental options for each grade span.' }
      ]
    },
    {
      id: 'figures', tint: 'tint', eyebrow: 'The published figures',
      h2: 'How many Massachusetts high schools teach computer science, and who takes it',
      intro: 'Three sources, three slightly different counts. Each is printed with its owner and year, because the definitions differ.',
      body: [
        { kind: 'table', caption: 'Massachusetts high schools offering computer science by school year, Code.org (2025) raw data', head: ['School year', 'Share offering CS'], rows: [
          ['2018 to 2019', '75%'],
          ['2019 to 2020', '82%'],
          ['2020 to 2021', '78%'],
          ['2021 to 2022', '83%'],
          ['2022 to 2023', 'No value published'],
          ['2023 to 2024', '81.25%, which is 325 of 400 high schools'],
          ['2024 to 2025', 'No value published']
        ] },
        { kind: 'table', mt: true, caption: 'Participation, DESE&rsquo;s own figure and AP schools', head: ['Measure', 'Massachusetts', 'Published by'], rows: [
          ['High school students enrolled in CS', '23,127 of 292,428, or 7.91%', 'Code.org (2025), most recent participation tab'],
          ['Public high schools offering CS', '82%', 'DESE, DLCS Implementation Resources'],
          ['Public high school students in a foundational CS course', '5.9%', 'DESE, DLCS Implementation Resources'],
          ['Schools with AP exams, 2023', '464', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '463', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'Why do 7.91% and 5.9% both appear? They measure different things. DESE counts students in a foundational computer science course; the Code.org participation tab counts high school students enrolled in computer science against a national enrollment total from NCES. Neither is wrong, and we do not average them or pick a favourite. What both agree on is the shape of the problem: four in five high schools have a course on offer, and well under one student in ten is sitting in it.' },
        { kind: 'callout', h3: 'Citing these numbers', p: 'Access and participation values come from Code.org (2025). 2025 State of AI + CS Education, read from its published data sheet; we quote the Massachusetts rows and do not republish the dataset. The 2023 to 2024 access figure is the latest Massachusetts year in that sheet.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which T station is closest to each Cambridge library? Nearest neighbour in Python',
      intro: 'Two public datasets, one formula. Students load Cambridge&rsquo;s library points and the MassGIS rapid transit stops, then find the nearest station to every branch.',
      body: [
        { kind: 'table', caption: 'Nearest MBTA rapid transit stop to each Cambridge public library, straight-line distance (our calculation, data downloaded 17 October 2026)', head: ['Library', 'Nearest stop (line)', 'Our distance'], rows: [
          ['Central Square Branch Library', 'Central (Red)', '0.17 km, about 0.11 mi'],
          ['Cambridge Public Library', 'Harvard (Red)', '0.66 km, about 0.41 mi'],
          ['O&rsquo;Neill Branch Library', 'Davis (Red)', '0.69 km, about 0.43 mi'],
          ['O&rsquo;Connell Branch Library', 'Lechmere (Green)', '0.70 km, about 0.43 mi'],
          ['Valente Branch Library', 'Union Square (Green)', '0.71 km, about 0.44 mi'],
          ['Boudreau Branch Library', 'Porter (Red)', '1.24 km, about 0.77 mi'],
          ['Collins Branch Library', 'Alewife (Red)', '2.17 km, about 1.35 mi']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Two layers', p: 'The library layer holds 7 points with a site name and address. The stops layer holds 170 records across Green, Silver, Red, Orange and Blue, with 157 distinct station names because a few stations appear once per line.' },
          { h3: '2. The haversine formula', p: 'Latitude and longitude are angles on a sphere, so students cannot subtract them like grid coordinates. They write a haversine function, test it on two known points, then loop over every library and keep the minimum.' },
          { h3: '3. Read it critically', p: 'Collins Branch sits more than 2 km from its nearest stop, and two of the seven answers are Green Line stations rather than Red. A straight line is also not a walking route: the river, rail yards and one-way streets all lengthen the real trip.' }
        ] },
        { kind: 'spec', title: 'A line count worth checking', p: 'Grouping the 170 stop records by LINE gives Green 66, Silver 45, Red 27, Orange 16 and Blue 10, plus six records that carry two lines, such as GREEN/ORANGE. A student who sums the single-line counts and gets 164 has found the shared records; deciding how to count them is the real exercise.' },
        { kind: 'callout', h3: 'Our numbers, their data', p: 'The distances and counts above are ours, computed from one download on 17 October 2026. The City of Cambridge publishes its library layer under the Open Data Commons Public Domain Dedication and License v1.0; MassGIS describes its MBTA service as a public resource that anyone may use, and accepts no liability for errors. Neither agency checked our results, and the stop list can change.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time in every corner of the Commonwealth',
      intro: 'From the Berkshires to the Cape, Massachusetts keeps one zone, America/New_York in the IANA database. Our teachers work from India, so the gap matters.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The offset', p: 'India runs 9 hours 30 minutes ahead of Massachusetts in summer and 10 hours 30 minutes ahead in winter, since India keeps a single fixed offset all year.' },
          { h3: 'Two dates to note', p: 'Clocks in Boston fall back on November 1, 2026 and spring forward on March 14, 2027. A family whose class sits at 5 pm Eastern keeps 5 pm; we move on our side.' },
          { h3: 'After school, not during', p: 'Sessions are arranged outside the school day, in late afternoon, evening or weekend slots that you pick, and every confirmation is written in Eastern Time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first algorithm to AP Computer Science A',
    intro: 'Grade bands are rough guides; a student&rsquo;s first lesson sets the real starting rung.',
    cols: [
      { band: 'Grades K to 5', h3: 'Patterns and blocks', p: 'Sequencing, loops and events in Scratch, plus plain-language AI literacy for curious younger students.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Typed code arrives', p: 'Python with turtle graphics and small games, or a first website, matching the 6-8 DLCS span.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 9 to 10', h3: 'Real projects, real tools', p: 'Java or Python at depth, Git for collaboration, and data work on public Massachusetts layers.', courses: ['java-programming-masterclass-for-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java, and models trained and tested on data the student understands.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn the haversine formula when an AI tool can find the nearest station?',
    intro: 'Because the tool can be confidently wrong, and only someone who understands the method can tell.',
    p1: 'Ask a chatbot for the closest T stop to a Cambridge branch library and it may answer in a second. It may also measure from the wrong address, ignore a station on another line, or treat degrees of longitude as if they were miles. A student who has written the distance function, and checked it against a known pair of points, can spot each of those errors.',
    p2: 'This is what the Computing and Society and Computational Thinking strands ask for together: understand the algorithm, then judge the tool that runs it. Students who can do both use AI assistants to move faster on the parts they already understand, and slow down on the parts they do not.',
    closer: 'Massachusetts left computer science as a choice; the students who choose it well are the ones who can question an answer as easily as they can produce one.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Pittsfield to Provincetown, the same live classroom',
    intro: 'Massachusetts students spread from the Berkshire hills to the outer Cape; an online class reaches all of them without a commute.',
    cells: [
      { h3: 'Live, never recorded', p: 'Each session is taught in real time by a teacher who sees the student&rsquo;s screen and code, so a stuck loop gets fixed in the moment, not in a forum thread.' },
      { h3: 'MassCore-aware planning', p: 'Teachers know the four approved course codes and can pace a high schooler alongside a school CS Principles or Exploring Computer Science class. School assignments stay the student&rsquo;s own work.' },
      { h3: 'Batches by stage', p: 'Groups of fifteen to twenty students at a similar level, drawn from Massachusetts and other US states, so a ninth grader is not placed with beginners or experts by default.' },
      { h3: 'One to one when it suits', p: 'A private teacher for students aiming at AP Computer Science A, a competition, or a project that does not fit a group syllabus.' },
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'A free first class', p: 'One complete lesson on a real task, then a written suggestion of level, course and time. Nothing to pay and no card requested at that stage.' }
    ],
    spec: { title: 'Taught from India, online only', p: 'Modern Age Coders has no office or classroom in Massachusetts and does not claim one. Students join from home on a laptop or desktop with a microphone, speakers or headphones and a steady internet connection.' }
  },

  fees: {
    h2: 'Fees for Massachusetts families',
    intro: 'Three lines, all shown before you commit.',
    first: 'One full live lesson at no cost, ending with a recommended level, course and time slot.',
    group: 'A monthly fee for classes in a level-matched batch of fifteen to twenty students.',
    private: 'A monthly fee for the same number of classes taught one to one.',
    closer: 'Every US family is billed the same rate in US dollars, whether the student lives in Worcester or on Nantucket. Nothing is charged until after the free lesson, once you have agreed the course and the schedule; the pricing page covers breaks and missed sessions.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Book a free lesson for a Massachusetts student',
    intro: 'Tell us the grade and the goal. A fourth grader might start with a block puzzle, a ninth grader with a first Python function, a junior with the Cambridge library distance project.',
    success: 'Thank you. Our team will contact you shortly to arrange a class for your Massachusetts student.'
  },

  faq: {
    h2: 'Massachusetts coding and AI questions',
    intro: 'Answers drawn from DESE, College Board and Code.org pages, read in October 2026.',
    items: [
      { q: 'Does Massachusetts require computer science to graduate?', a: 'No statewide course. DESE says a diploma requires the Competency Determination plus local graduation requirements, and the class of 2027 coursework list covers English, maths, science and U.S. history only. A district can add its own rules.' },
      { q: 'Can a computer science course count toward MassCore?', a: 'Yes. DESE says a computer science course with rigorous mathematical or scientific concepts, aligned to the 2016 DLCS framework, can substitute for either a mathematics course or a laboratory science course in MassCore.' },
      { q: 'Which courses are on the MassCore substitute list?', a: 'DESE lists 10011 Computer Science Principles, 10012 Exploring Computer Science, 10019 AP Computer Science Principles and 10090 Computational Thinking and Problem Solving.' },
      { q: 'What are the Massachusetts DLCS standards?', a: 'The Digital Literacy and Computer Science framework of 2016, organised in four strands (Computing and Society, Digital Tools and Collaboration, Computing Systems, Computational Thinking) across the spans K-2, 3-5, 6-8 and 9-12.' },
      { q: 'How many Massachusetts high schools offer computer science?', a: 'DESE puts it at 82% of public high schools. The Code.org 2025 data shows 325 of 400 high schools, or 81.25%, for 2023 to 2024, the latest Massachusetts year in that sheet.' },
      { q: 'How many students actually take it?', a: 'DESE reports 5.9% of public high school students in a foundational course. Code.org counts 23,127 of 292,428 high school students, or 7.91%, using a different definition and denominator.' },
      { q: 'Do your classes give Massachusetts school credit?', a: 'No. Credit and MassCore substitutions are decided by the school district. Our classes add depth and project work alongside a school course, and anything a school grades stays the student\'s own work.' },
      { q: 'What time are classes for Massachusetts students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are quoted in Eastern Time, which in the IANA database is America/New_York.' },
      { q: 'When do clocks change for Massachusetts this school year?', a: 'US clocks fall back on November 1, 2026 and spring forward on March 14, 2027. India does not change, so the gap moves from 9 hours 30 minutes to 10 hours 30 minutes and back.' },
      { q: 'Is there a Modern Age Coders classroom in Boston?', a: 'No. We have no premises anywhere in Massachusetts; every class is live online, taught from India, and a student joins from home with a computer and a reliable connection.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Massachusetts students',
    html: 'For the MassCore-listed AP course, see <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>, and for the Java exam, <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Students building a profile outside school can browse <a class="cg-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a> or train for <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO</a>. To compare states, start at the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Massachusetts and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
    { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aima .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aima .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-aima .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aima .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aima .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-aima .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-aima .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-aima .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aima .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aima .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Massachusetts DESE, read raw 17 and 18 October 2026: Graduation Requirements (CD plus local requirements; G.L. c. 69, section 1D; November 2024 ballot question; May 2025 amendment of 603 CMR 30.00; class of 2027 coursework list with no CS); MassCore (adopted 2007, amended 2018; unit list; CS substitution for maths or lab science); DLCS admin and parent pages (course codes 10011, 10012, 10019, 10090; MTEL 5-12 DLCS license); DLCS page (PreK-6 license); DLCS Implementation Resources (82% offer, 5.9% take a foundational course; 2016 release; 2025 Curriculum Guide by STEM Learning Design); 2016 DLCS framework PDF (October 2016 letter; four strands). Code.org (2025) access trend and 325 of 400 (2023-24), participation 23,127 of 292,428; College Board AP schools 464 and 463; IANA America/New_York and US DST rule.',
    localProject: 'City of Cambridge LANDMARK_PublicLibraries (7 points, ODC PDDL v1.0) and MassGIS MBTA Rapid Transit stops (170 records, 157 distinct names, public resource), downloaded 17 October 2026. Our haversine nearest stop per library: Central Square Branch to Central 0.17 km, Cambridge Public Library to Harvard 0.66 km, O\'Neill to Davis 0.69 km, O\'Connell to Lechmere 0.70 km, Valente to Union Square 0.71 km, Boudreau to Porter 1.24 km, Collins to Alewife 2.17 km; stops by line Green 66, Silver 45, Red 27, Orange 16, Blue 10, six shared. Lesson family: nearest neighbour with haversine, and straight line versus walking route.',
    requiredMentions: [
      'G.L. c. 69, section 1D',
      '603 CMR 30.00',
      'adopted MassCore in 2007',
      '10090 Computational Thinking and Problem Solving',
      'DLCS PreK-6 License',
      'only 5.9% of public high school students',
      '325 of 400',
      '23,127 of 292,428',
      'Collins Branch Library',
      '157 distinct station names'],
    sources: [
      { claim: 'DESE: Graduation Requirements and Related Guidance, CD, G.L. c. 69 section 1D, 2024 ballot, 603 CMR 30.00, class of 2027 coursework.', url: 'https://www.doe.mass.edu/ccte/graduation/default.html' },
      { claim: 'DESE: MassCore, adopted 2007, amended 2018, CS substitution.', url: 'https://www.doe.mass.edu/ccte/courses-learning/masscore/default.html' },
      { claim: 'DESE: Digital Literacy and Computer Science pages, implementation resources (82%, 5.9%), course codes, licenses.', url: 'https://www.doe.mass.edu/stem/dlcs/' },
      { claim: 'DESE: 2016 Digital Literacy and Computer Science Curriculum Framework.', url: 'https://www.doe.mass.edu/frameworks/dlcs.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Massachusetts access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Cambridge: Public Libraries layer (PDDL v1.0).', url: 'https://www.arcgis.com/home/item.html?id=c24455ea463c4a76a74386ece4852772' },
      { claim: 'MassGIS: MBTA Rapid Transit feature service.', url: 'https://arcgisserver.digital.mass.gov/arcgisserver/rest/services/AGOL/MBTA_Rapid_Transit/FeatureServer' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'A statewide CS graduation requirement in Massachusetts: refused; DESE lists none for the class of 2027 and beyond.',
      'Blending DESE 5.9% and Code.org 7.91% participation into one figure: refused; definitions and denominators differ, both printed with owners.',
      'Code.org access values for 2022-23 and 2024-25: none published for Massachusetts, left blank, not interpolated.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'Names of the two Commonwealth Virtual Schools and any individual school: not printed; counts only.',
      'Official walking distances or MBTA ridership: not read; only our straight-line distances, labelled as ours.',
      'That our classes earn school credit or a MassCore substitution: refused; districts decide.',
      'Any affiliation with DESE, the City of Cambridge, MassGIS, the MBTA, Code.org or the College Board.'
    ]
  }
};
