'use strict';
// New Jersey (cg- state page, US cluster Phase 4, row 90). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: New Jersey has required every public high school to offer a computer science course since 2018 to 2019,
// lets AP computer science count toward math credit, and teaches computer science AND design thinking from
// kindergarten under the 2020 standards, yet lists no computer science credit among its 120 graduation credits.
// Sources read raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-new-jersey/):
//  - NJDOE, Computer Science & Design Thinking (nj.gov/education/standards/compsci/, "Page Last Updated: 04/13/2026"):
//    "All students receive computer science and design thinking instruction from Kindergarten through grade 12.";
//    N.J.S.A. 18A:7C-1.1: "No later than the beginning of the 2018-2019 school year, each public school enrolling
//    students in grades nine through 12, other than a county vocational school district, shall offer a course in
//    computer science." with the required content list (computational thinking, computer programming, the appropriate
//    use of the Internet and development of Internet web pages, data security and the prevention of data breaches,
//    ethical matters in computer science, the global impact of advancements in computer science); the K-12 Computer
//    Science Framework "informed the development of the NJSLS".
//  - NJDOE, 2020 NJSLS-CS&DT PDF (footer "New Jersey Department of Education June 2020"): Standard 8.1 Computer
//    Science, Standard 8.2 Design Thinking; bands "By the end of grade 2 / 5 / 8 / 12"; code example "8.1.2.NI.1";
//    five CS concepts (CS, NI, IC, DA, AP) and five design thinking concepts (ED, ITH, NT, ETW, EC); seven practices;
//    8.1.2.CS.1 ... 8.1.2.DA.1 "Collect and present data, including climate change data, in various visual formats.";
//    8.1.2.AP.3 "Create programs with sequences and simple loops to accomplish tasks."; 8.1.2.NI.3 password standard;
//    N.J.S.A. 18A:7C-2.1: "Beginning with the 2016-2017 grade nine class" AP computer science may satisfy "a part of
//    the total credit requirement in mathematics", student "concurrently enrolled in or have successfully completed
//    algebra 1 and geometry or the content equivalent"; N.J.S.A. 18A:26-2.26 computer science education endorsement.
//  - NJDOE, State Minimum Graduation Requirements docx (121525_GradRequirements.docx): "120 credits (N.J.A.C. 6A:8-5.1)";
//    ELA 20, Mathematics 15, Science 15, Social Studies 15, Financial literacy 2.5, Health/PE 15, VPA 5, World
//    Languages 5, 21st Century Life and Careers 5, Technology "Integrated throughout all courses"; no computer science
//    line; "School districts may establish course and/or credit requirements which exceed the State minimums."
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): NJ access 67%
//    (2018-19), 68%, 67%, 82%, 85.9%, 86.3% (2023-24); most recent 2023-2024, 377 of 437 high schools, source "State
//    Education Agency"; participation 9.8% (2020-21), 7.7%, 8.77%, 8.79% (2023-24); 35,941 of 408,963 high school
//    students (denominator NCES Digest Table 203.04, Fall 2022, per the tab header).
//  - College Board, School Report of AP Exams by State 2023-24: NJ total AP schools 575 (2023), 584 (2024); public
//    436, 454; non-public 139, 130.
//  - IANA tzdb northamerica: New Jersey listed under US eastern time (America/New_York); US rule Mar Sun>=8, Nov
//    Sun>=1, so November 1, 2026 and March 14, 2027.
//  - NJ Passenger Rail Stations (NJ Department of Community Affairs, NJOGIS), FeatureServer, attributes downloaded
//    17 October 2026: 234 records, fields STATION, RAIL_LINE, MUNI, COUNTY, AMTRAK; includes stations "within 0.5
//    mile of the New Jersey border"; 17 COUNTY values incl. "Rockland, NY"; 21 RAIL_LINE values; 227 distinct STATION
//    names; 6 AMTRAK = Yes. Licence: not survey data, acknowledgement of NJDCA LPS and NJOGIS "would be
//    appreciated", provided "as is". OUR cross-tab (mode grouping ours): Essex 40 (22 commuter, 17 light, 1 rapid),
//    Hudson 33 (3, 24, 6), Bergen 31 (31, 0, 0), Camden 20 (4, 7, 9), Morris 19, Union 16, Monmouth 14, Burlington 11
//    (0, 11, 0), Somerset 11, Middlesex 10; totals commuter 156, light 62, rapid 16.
// Lesson family: pivot table / cross-tab by county, and why records are not the same thing as stations.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NEW JERSEY', label: 'New Jersey', blurb: 'Coding and AI for New Jersey students: the high school course law, the computer science and design thinking standards, and a county-by-county rail data project.' },
  market: US,
  slug: 'coding-classes-in-new-jersey',
  code: 'anj',
  accent: '#2E3399',
  accentRationale: 'New Jersey: #2E3399, a deep indigo allocated for row 90 in alloc.tsv, kept clear of the North Carolina green and the other state accents, and dark enough for AA text contrast on every paper tone',
  pageType: 'city',
  place: {
    name: 'New Jersey',
    eyebrow: 'New Jersey, United States',
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
  routeLabel: 'New Jersey',
  title: 'Coding and AI Classes in New Jersey | Live Online',
  description: 'Live online coding and AI classes for New Jersey students, with the high school computer science law, the NJSLS design thinking standards and AP credit rules.',
  ogDescription: 'Every New Jersey public high school must offer computer science. What the statute lists, how the 2020 standards work, the published access data, and live classes.',
  twitterDescription: 'New Jersey coding and AI classes, live online, mapped to the NJSLS computer science standards.',
  ogImageCourse: 'ap-computer-science-a-java-exam-prep-course',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for New Jersey Students',
    description: 'Computational thinking, Python, Java for AP Computer Science A, data science and AI for New Jersey students in kindergarten through grade 12, taught live online in English.'
  },

  h1: 'Coding and AI classes in New Jersey',
  capsuleQ: 'Do New Jersey high schools have to teach computer science?',
  capsule: 'They have to offer it. N.J.S.A. 18A:7C-1.1 says that from the 2018 to 2019 school year every public school enrolling grades nine through 12, other than a county vocational school district, shall offer a course in computer science. Taking it is not on the state&rsquo;s list of 120 graduation credits. Modern Age Coders teaches the same content live online, from first programs in grade 2 to AP Computer Science A.',
  lead: 'New Jersey handles computer science in three layers, and families often hear about only one of them. A statute obliges high schools to put a computer science course on the timetable. A second statute lets an AP computer science course carry part of a student&rsquo;s math credit. And the 2020 New Jersey Student Learning Standards pair computer science with design thinking, with the department stating that all students receive that instruction from kindergarten through grade 12. This page sets out each layer in the department&rsquo;s own words, shows what the published access and enrollment figures say for the Garden State, walks through a Python project built on the state&rsquo;s own passenger rail data, and explains where our live online classes sit beside school, from a second grader writing a first loop to a junior preparing for the AP exam in May.',
  wa: 'Hello Modern Age Coders, we are in New Jersey and would like a free coding or AI lesson for our student.',

  picks: {
    eyebrow: 'Course picks for New Jersey',
    h2: 'Four starting points mapped to the New Jersey standards',
    intro: 'Each card lines up with a band of the NJSLS computer science standard. The free lesson confirms the level before anything is booked.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades K to 5', note: 'Algorithms, patterns and debugging through puzzles and small programs, the skills named in the grade 2 and grade 5 bands.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 12', note: 'Typed Python from variables to files and data, ready for the rail station cross-tab project on New Jersey open data.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java for AP Computer Science A, the course New Jersey law lets count toward part of the math credit requirement.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Pivot tables, charts and first models, built on the Data and Analysis concept of the state standards.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'The offering law',
      h2: 'What the New Jersey statute requires high schools to offer',
      intro: 'The New Jersey Department of Education (NJDOE) prints the statute on its Computer Science and Design Thinking page, last updated April 13, 2026. We read it on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'N.J.S.A. 18A:7C-1.1, High School Computer Science Course, as printed by NJDOE', head: ['Element', 'What the statute says'], rows: [
          ['Deadline', 'No later than the beginning of the 2018-2019 school year'],
          ['Which schools', 'Each public school enrolling students in grades nine through 12'],
          ['The one exception', 'A county vocational school district is not covered by the offering duty'],
          ['The duty', 'Shall offer a course in computer science'],
          ['Content, part 1', 'Computational thinking and computer programming'],
          ['Content, part 2', 'The appropriate use of the Internet and the development of Internet web pages'],
          ['Content, part 3', 'Data security and the prevention of data breaches'],
          ['Content, part 4', 'Ethical matters in computer science, and the global impact of advancements in computer science']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Offer, not take', p: 'The wording places the obligation on the school, not on the student. A New Jersey teenager can graduate without ever enrolling in the course their high school is required to run.' },
          { h3: 'A floor, not a ceiling', p: 'The statute says the course shall include its six topics but need not be limited to them, so districts are free to add robotics, game design or AP courses on top.' },
          { h3: 'Who may teach it', p: 'A separate law, N.J.S.A. 18A:26-2.26, tells the State Board to authorize a computer science education endorsement on the instructional certificate for teachers of the subject.' }
        ] },
        { kind: 'p', text: 'Read closely, the content list is broader than programming. Web pages, data breaches and ethics sit alongside code, which is why a course that only teaches syntax would not cover what the legislature wrote down. Our teen classes are planned the same way: every project includes a security check and a short written reflection on who the program affects.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'The 2020 standards',
      h2: 'Computer science and design thinking, the two halves of Standard 8',
      intro: 'The 2020 NJSLS for Computer Science and Design Thinking (NJSLS-CS&DT), dated June 2020 by NJDOE, split the subject into Standard 8.1 Computer Science and Standard 8.2 Design Thinking.',
      body: [
        { kind: 'table', caption: 'Disciplinary concepts of the 2020 NJSLS-CS&DT, with the code letters NJDOE uses', head: ['Standard 8.1 Computer Science', 'Standard 8.2 Design Thinking'], rows: [
          ['Computing Systems (CS)', 'Engineering Design (ED)'],
          ['Networks and the Internet (NI)', 'Interaction of Technology and Humans (ITH)'],
          ['Impacts of Computing (IC)', 'Nature of Technology (NT)'],
          ['Data &amp; Analysis (DA)', 'Effects of Technology on the Natural World (ETW)'],
          ['Algorithms &amp; Programming (AP)', 'Ethics &amp; Culture (EC)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four checkpoints', p: 'Expectations are written for the end of grade 2, grade 5, grade 8 and grade 12, so a fourth grader is working toward the grade 5 set rather than a separate fourth grade list.' },
          { h3: 'Reading a code', p: 'In 8.1.2.NI.1, the 8.1 is the standard, the 2 is the end-of-grade checkpoint, NI is the concept and the final 1 is the performance expectation number.' },
          { h3: 'Seven practices', p: 'Alongside the concepts sit seven practices, from fostering an inclusive computing culture to testing and refining computational artifacts and communicating about computing.' }
        ] },
        { kind: 'table', mt: true, caption: 'Three grade 2 expectations quoted from the standard, and how a lesson of ours would meet each (right column ours)', head: ['Code', 'NJDOE wording', 'What it looks like in a class'], rows: [
          ['8.1.2.AP.3', 'Create programs with sequences and simple loops to accomplish tasks.', 'A character crosses a maze; the child replaces ten repeated moves with one loop'],
          ['8.1.2.DA.1', 'Collect and present data, including climate change data, in various visual formats.', 'A week of classroom temperature readings becomes a picture chart'],
          ['8.1.2.NI.3', 'Create a password that secures access to a device.', 'A game where weak and strong passwords are sorted, then explained aloud']
        ] },
        { kind: 'callout', h3: 'Where the framework came from', p: 'NJDOE says the K-12 Computer Science Framework, led by the Association for Computing Machinery, Code.org, the Computer Science Teachers Association, the Cyber Innovation Center and the National Math and Science Initiative, informed the development of the standards. Computational thinking used to be a strand inside the 2014 technology standard; in 2020 it became a standard of its own.' }
      ]
    },
    {
      id: 'credits', tint: '', eyebrow: 'Graduation and AP credit',
      h2: 'Where computer science fits in the 120-credit diploma',
      intro: 'NJDOE publishes the state minimum graduation requirements under N.J.A.C. 6A:8-5.1. We read the department&rsquo;s current chart on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'New Jersey State Minimum Graduation Requirements by content area, 120 credits (NJDOE)', head: ['Content area', 'State minimum'], rows: [
          ['English Language Arts', '20 credits'],
          ['Mathematics', '15 credits, including Algebra I, Geometry and a third year that builds on them'],
          ['Science', 'At least 15 credits in evidence-based science courses'],
          ['Social Studies', '15 credits, including 5 credits in world history'],
          ['Financial, Economic, Business and Entrepreneurial Literacy', '2.5 credits'],
          ['Health, Safety and Physical Education', '15 credits over four years'],
          ['Visual and Performing Arts', '5 credits'],
          ['World Languages', '5 credits'],
          ['21st Century Life and Careers', '5 credits'],
          ['Technology', 'Integrated throughout all courses']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No computer science line', p: 'The chart has no separate computer science credit. Technology is described as integrated throughout all courses, and districts may set requirements above the state minimums.' },
          { h3: 'The AP math route', p: 'Under N.J.S.A. 18A:7C-2.1, beginning with the 2016-2017 grade nine class, local graduation requirements must let an AP computer science course satisfy part of the total credit requirement in mathematics.' },
          { h3: 'The condition attached', p: 'To use that route, the student must be concurrently enrolled in, or have successfully completed, algebra 1 and geometry or the content equivalent. Ask the school counselor how the district applies it.' }
        ] },
        { kind: 'p', text: 'For a New Jersey sophomore this matters when planning the schedule. A student who has finished algebra 1 and geometry can take AP Computer Science A in junior year knowing the law points it toward math credit, and use the senior year for a further course. Our AP class follows the College Board course framework; the credit decision belongs to the district, never to us.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published numbers',
      h2: 'Since the 2018 deadline: access and enrollment in New Jersey',
      intro: 'Access and enrollment from the Code.org State of AI + CS Education data, and AP school counts from the College Board, each quoted as published.',
      body: [
        { kind: 'table', caption: 'Share of New Jersey high schools with a computer science course, year by year, as Code.org (2025) publishes it', head: ['School year', 'Share offering CS'], rows: [
          ['2018 to 2019', '67%'],
          ['2019 to 2020', '68%'],
          ['2020 to 2021', '67%'],
          ['2021 to 2022', '82%'],
          ['2022 to 2023', '85.9%'],
          ['2023 to 2024', '86.3%, 377 of 437 high schools'],
          ['2024 to 2025', 'No value published for New Jersey']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP, New Jersey', head: ['Measure', 'Value', 'Source'], rows: [
          ['High school students enrolled in CS, latest year', '35,941 of 408,963, or 8.79%', 'Code.org (2025); student total from NCES, Fall 2022'],
          ['Enrollment share, 2020 to 2021', '9.8%', 'Code.org (2025)'],
          ['Enrollment share, 2022 to 2023', '8.77%', 'Code.org (2025)'],
          ['Schools with AP exams, 2023', '575 (436 public, 139 non-public)', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '584 (454 public, 130 non-public)', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'The statute set its deadline for 2018 to 2019, yet the published share sat at 67% that year and only passed 80% in 2021 to 2022. Even at 86.3%, roughly one high school in seven in the count was not offering a course. Enrollment tells a quieter story: under one New Jersey high schooler in eleven was in a computer science class in the latest year, a share that has hardly moved since 2020 to 2021.' },
        { kind: 'p', text: 'Why would a school covered by the law not appear as offering a course? The data cannot say. Counting rules, county vocational districts and schools that list a course nobody enrolled in could all play a part, so we read the figures as a measure of what students can find on a timetable rather than as a compliance audit.' },
        { kind: 'callout', h3: 'How to cite these figures', p: 'Access and enrollment values: Code.org (2025). 2025 State of AI + CS Education. We quote single New Jersey values from its data tabs and do not republish the dataset. AP school counts: College Board, School Report of AP Exams by State, 2023-24.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which New Jersey counties have the most rail stations? A pivot table on state open data',
      intro: 'The NJ Department of Community Affairs and the NJ Office of GIS publish the NJ Passenger Rail Stations layer. Students pull its attribute table into Python and turn a flat list into a county by mode cross-tab.',
      body: [
        { kind: 'table', caption: 'Station records by county and mode, ten largest counties (our cross-tab of NJ Passenger Rail Stations, downloaded 17 October 2026; the mode grouping is ours)', head: ['County', 'Records', 'Commuter rail', 'Light rail', 'PATH or PATCO'], rows: [
          ['Essex', '40', '22', '17', '1'],
          ['Hudson', '33', '3', '24', '6'],
          ['Bergen', '31', '31', '0', '0'],
          ['Camden', '20', '4', '7', '9'],
          ['Morris', '19', '19', '0', '0'],
          ['Union', '16', '16', '0', '0'],
          ['Monmouth', '14', '14', '0', '0'],
          ['Burlington', '11', '0', '11', '0'],
          ['Somerset', '11', '11', '0', '0'],
          ['Middlesex', '10', '10', '0', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Group the lines', p: 'The layer has 21 different RAIL_LINE labels. Students write a small function that sorts them into three modes, light rail for the Hudson-Bergen, Newark and River lines, PATH and PATCO as rapid transit, everything else as commuter rail.' },
          { h3: '2. Pivot', p: 'One pandas pivot_table call, COUNTY down the side and mode across the top, turns 234 records into the grid above. Done by hand with dictionaries first, it teaches what the library is doing.' },
          { h3: '3. Read the grid', p: 'Bergen and Morris are all commuter rail, Burlington is all light rail, and Camden is the only county where PATCO is the largest single mode. Each pattern is a question to research, not a conclusion.' }
        ] },
        { kind: 'callout', h3: 'Records are not stations', p: 'The layer holds 234 records but only 227 distinct station names, because interchanges such as Hoboken Terminal and Newark Penn Station appear once per line or mode. It also includes stations within 0.5 mile of the border, which is why Rockland, NY turns up as a county value. Our counts are records in one download, not an official station total, and the state says the data is provided as is.' },
        { kind: 'p', text: 'A second exercise uses the AMTRAK column: six records are marked Yes, and students check which counties hold them before mapping the result. Both tasks practise the Data &amp; Analysis concept from Standard 8.1 on a dataset that a New Jersey student may ride every day, and both end with the same discipline: write one sentence saying exactly what each number counts.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time classes around a New Jersey school day',
      intro: 'All of New Jersey keeps Eastern Time; the IANA time zone database lists the state under America/New_York. Our teachers work from India.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The India gap', p: 'India runs 9 hours 30 minutes ahead of New Jersey in summer and 10 hours 30 minutes ahead in winter, since India keeps one clock all year.' },
          { h3: 'Switch dates', p: 'New Jersey falls back on November 1, 2026 and springs forward on March 14, 2027, so a class confirmed in Eastern Time never moves for the family.' },
          { h3: 'Around the schedule', p: 'Times are set around the end of the school day, sports and homework, then confirmed in writing in Eastern Time before the first class.' }
        ] },
        { kind: 'spec', title: 'A bug worth meeting early', p: 'A reminder script that adds a fixed minus five hours will be wrong for most of the year. Students who build one with the America/New_York zone from the IANA database, and test it across November 1, 2026, learn why programmers never hard-code a time offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the grade 2 checkpoint to the AP exam',
    intro: 'Bands follow the four NJSLS checkpoints; the free lesson decides where a student actually starts.',
    cols: [
      { band: 'By the end of grade 2', h3: 'Sequences and loops', p: 'Block programs with loops, simple data pictures and safe passwords, the first checkpoint of Standard 8.1.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'By the end of grade 5', h3: 'Programs that decide', p: 'Conditions, variables and small games, with design thinking projects that start from a user need.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'By the end of grade 8', h3: 'Typed code and data', p: 'Python or JavaScript, files and lists, and web pages that meet the statute&rsquo;s Internet topics.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'By the end of grade 12', h3: 'AP and applied AI', p: 'AP Computer Science A in Java, data science and machine learning tested on real data.', courses: ['ap-computer-science-a-java-exam-prep-course', 'data-science-course-for-teens-python-data'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ethics is in New Jersey&rsquo;s law, and AI makes it urgent',
    intro: 'The statute lists ethical matters in computer science as required course content. AI tools give that line its sharpest test.',
    p1: 'Ask a chatbot to count New Jersey rail stations by county and it will answer with confidence. It will not tell you that the layer double-counts interchanges or reaches across the Hudson into New York. A student who has built the pivot table knows to ask, because they saw the duplicate names in their own output.',
    p2: 'That habit is what the Ethics &amp; Culture and Impacts of Computing concepts are after. Students who write code themselves can check an AI answer against the data, explain where it went wrong, and decide whether to trust it, which is a different skill from typing a prompt.',
    closer: 'New Jersey asks every high school to teach the ethics of computing; the students who gain most are those who practise it on output they produced themselves.',
    blogAnchor: 'why coding still matters with AI around'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Sussex County to Cape May, the same live classroom',
    intro: 'New Jersey is small on the map and dense with schools, and a live online class removes the commute entirely.',
    cells: [
      { h3: 'No drive after school', p: 'A student in Newark and one in Toms River can sit in the same class from their own desks, with no Turnpike traffic in between.' },
      { h3: 'Built on NJSLS', p: 'Teachers know the grade 2, 5, 8 and 12 checkpoints and the statute&rsquo;s six course topics. Anything a school will grade stays the student&rsquo;s own work.' },
      { h3: 'Free first lesson', p: 'One full lesson with a teacher, then a written suggestion of level, course and class time. No payment details are asked for at this point.' },
      { h3: 'Small level-matched batches', p: 'Groups of fifteen to twenty students at the same stage, from New Jersey and other US states.' },
      { h3: 'Private option', p: 'One student, one teacher, for AP preparation or a student who wants to move quickly through the standards.' },
      { h3: 'Your timetable', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Fully online, by design', p: 'Teaching is live over video from India. Modern Age Coders has no New Jersey office or classroom and does not claim one. A computer with a keyboard, a headset and a steady connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for New Jersey families',
    intro: 'The free lesson comes first, then one of two monthly options.',
    first: 'One complete lesson at no cost, ending with a level, a course and a suggested class time.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty.',
    private: 'A month of one-to-one classes with a single teacher.',
    closer: 'Billing is in US dollars at one rate for every US state, so families in Hoboken and in Vineland see the same figures. Nothing is charged until after the free lesson and your agreement to a course and time; the pricing page covers missed classes and holidays.'
  },

  reviewsH2: 'Reviews left on Google by parents and students',

  book: {
    h2: 'Book a free lesson for a New Jersey student',
    intro: 'Tell us the grade and the goal. A second grader might start with a loop puzzle, an eighth grader with a first Python file, and a junior with the rail station pivot table.',
    success: 'Thank you. Our team will contact you soon to arrange a class for your New Jersey student.'
  },

  faq: {
    h2: 'New Jersey coding and AI questions',
    intro: 'Questions New Jersey families ask us most often.',
    items: [
      { q: 'Must New Jersey high schools offer computer science?', a: 'Yes. N.J.S.A. 18A:7C-1.1 required each public school enrolling grades nine through 12, other than a county vocational school district, to offer a computer science course by the start of the 2018 to 2019 school year.' },
      { q: 'Is computer science required to graduate in New Jersey?', a: 'Not as a separate credit. The NJDOE chart of state minimums lists 120 credits with no computer science line, though districts may set requirements above the state minimums.' },
      { q: 'Can AP Computer Science count toward math credit?', a: 'Under N.J.S.A. 18A:7C-2.1, from the 2016 to 2017 grade nine class, an AP computer science course may satisfy part of the math credit requirement if the student has taken or is taking algebra 1 and geometry or the equivalent.' },
      { q: 'What must the high school course cover?', a: 'The statute lists computational thinking, programming, appropriate Internet use and web page development, data security and preventing data breaches, ethics in computer science, and the global impact of computing advances.' },
      { q: 'What are the NJSLS computer science standards?', a: 'The 2020 NJSLS-CS&DT has Standard 8.1 Computer Science and Standard 8.2 Design Thinking, with expectations for the end of grades 2, 5, 8 and 12, coded like 8.1.2.NI.1.' },
      { q: 'How many New Jersey high schools offer computer science?', a: 'Code.org (2025) reports 377 of 437 New Jersey high schools, or 86.3%, offering computer science in 2023 to 2024, with 35,941 high school students enrolled in it.' },
      { q: 'Do your classes count for New Jersey school credit?', a: 'No. Credit comes from district-approved courses and AP exams. Our classes add practice and depth beside them, and any graded school work remains the student\'s own.' },
      { q: 'When do classes run for New Jersey families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time, which all of New Jersey keeps.' },
      { q: 'Can elementary students in New Jersey start coding?', a: 'Yes. NJDOE says all students receive computer science and design thinking instruction from kindergarten, and our youngest classes match the grade 2 and grade 5 checkpoints with block coding and puzzles.' },
      { q: 'Is the rail data project suitable for middle school?', a: 'A simpler version is. Eighth graders count stations per county with a dictionary; high schoolers build the full county by mode pivot table from the 234 records in the state layer.' }
    ]
  },

  next: {
    eyebrow: 'More for US students',
    h2: 'Where New Jersey students go next',
    html: 'For the exam, see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and the post on <a class="cg-inline-link" href="/blog/how-to-get-a-5-in-ap-computer-science-a">how to get a 5 in AP Computer Science A</a>. Students building outside class can read the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> or <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>, and families comparing states can read about <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina&rsquo;s graduation requirement</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'New Jersey and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
    { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-anj .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-anj .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.02; }
.cg-root.cg-anj .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-anj .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-anj .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.015em; }
.cg-root.cg-anj .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-anj .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-anj .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anj .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-anj .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'New Jersey, read raw on 17 October 2026: NJDOE Computer Science & Design Thinking page (updated 04/13/2026; K-12 instruction statement; N.J.S.A. 18A:7C-1.1 offering duty from 2018-2019, county vocational school district exception, six content topics; K-12 CS Framework informed the standards); 2020 NJSLS-CS&DT PDF (June 2020; Standard 8.1 and 8.2; checkpoints grades 2, 5, 8, 12; code 8.1.2.NI.1; ten disciplinary concepts; seven practices; 8.1.2.AP.3, 8.1.2.DA.1, 8.1.2.NI.3; N.J.S.A. 18A:7C-2.1 AP CS math credit from the 2016-2017 grade nine class with algebra 1 and geometry; N.J.S.A. 18A:26-2.26 endorsement); NJDOE State Minimum Graduation Requirements (120 credits, N.J.A.C. 6A:8-5.1, no CS line, technology integrated); Code.org (2025) access trend 67% to 86.3%, 377 of 437 (2023-24), participation 35,941 of 408,963 (8.79%), 9.8% (2020-21), 8.77% (2022-23); College Board AP schools 575 (2023), 584 (2024); IANA America/New_York.',
    localProject: 'NJ Passenger Rail Stations (NJDCA Office of Local Planning Services and NJOGIS), attributes downloaded 17 October 2026: 234 records, 227 distinct station names, 21 RAIL_LINE values, 17 COUNTY values including Rockland, NY (stations within 0.5 mile of the border), 6 Amtrak records; our county by mode cross-tab (Essex 40, Hudson 33, Bergen 31, Camden 20, Morris 19, Union 16, Monmouth 14, Burlington 11, Somerset 11, Middlesex 10; commuter 156, light 62, rapid 16), labelled as ours. Lesson family: pivot table / cross-tab by county, and records versus distinct stations.',
    requiredMentions: [
      'N.J.S.A. 18A:7C-1.1',
      'N.J.S.A. 18A:7C-2.1',
      'county vocational school district',
      '8.1.2.NI.1',
      'June 2020',
      '120 credits',
      'algebra 1 and geometry',
      '377 of 437',
      '35,941 of 408,963',
      '234 records',
      'Rockland, NY'],
    sources: [
      { claim: 'NJDOE: Computer Science & Design Thinking page, K-12 statement and N.J.S.A. 18A:7C-1.1.', url: 'https://www.nj.gov/education/standards/compsci/' },
      { claim: 'NJDOE: 2020 NJSLS Computer Science and Design Thinking, concepts, checkpoints, codes, N.J.S.A. 18A:7C-2.1 and 18A:26-2.26.', url: 'https://www.nj.gov/education/standards/compsci/Docs/2020%20NJSLS-CSDT.pdf' },
      { claim: 'NJDOE: New Jersey State Minimum Graduation Requirements, 120 credits.', url: 'https://www.nj.gov/education/standards/docs/121525_GradRequirements.docx' },
      { claim: 'Code.org (2025), State of AI + CS Education data: New Jersey access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'NJDCA and NJOGIS: NJ Passenger Rail Stations feature service.', url: 'https://services.arcgis.com/Aur8tCo478N3VovT/arcgis/rest/services/NJ_Passenger_Rail_Stations/FeatureServer' },
      { claim: 'IANA tzdb northamerica: New Jersey on US eastern time and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'A New Jersey computer science graduation requirement: refused; the NJDOE minimum chart has no CS credit line.',
      'Code.org size, urban, suburban, rural, gender and ethnicity figures for New Jersey: not used (outside the Access and Participation tabs).',
      'A 2024 to 2025 New Jersey access figure: none is published in the sheet, so none is printed.',
      'That the schools not counted as offering CS are breaking the law: refused; the data cannot show why.',
      'An official count of New Jersey rail stations: not read; only our record counts from one download, labelled as ours.',
      'That our classes earn New Jersey school or AP credit: refused; only district courses and College Board exams do.',
      'Names of individual New Jersey schools: not needed; counts only.',
      'Any affiliation with NJDOE, NJDCA, NJOGIS, NJ Transit, Code.org or the College Board.'
    ]
  }
};
