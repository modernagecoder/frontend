'use strict';
// Idaho (cg- state page, US cluster Phase 4, row 72). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Idaho has added a one-credit Digital Literacy course to the diploma, so what must that course teach, which
// courses count, and how does it sit beside the state's computer science standards and access figures?
// Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-idaho/):
//  - Idaho Department of Education, Digital Literacy Course Guidance Document (UPDATE 02/20/2026, dl-guidance.pdf):
//    changes to IDAPA 08.02.03.105 accepted "during the 2025 legislative session"; credit in "IDAPA 08.02.03.105.01.j";
//    "pertains to all students in grades 9 through 12"; "one-credit, stand-alone course"; "required for any student
//    graduating after January 1, 2028"; "cannot be delivered over a series of courses or pathways"; "eight stand-alone
//    course options"; "ISEE Code 10019: AP Computer Science Principles", full year, one portion coded 10011; no
//    prerequisite; free Code.org and CodeHS courses and an IDLA course built with the Idaho STEM Action Center; course
//    designs such as "Building Gaming Apps Digital Literacy"; essential standards incl. 9-12.CS.3.8, 9-12.CS.5.2,
//    9-12.ICT.2.1. (The IDLA fee in the document is not printed: no prices on the page.)
//  - Idaho DOE, Digital Literacy page: "One Digital Literacy credit is required for students graduating in 2028."
//  - Idaho DOE, High School Graduation Requirements: "Take a minimum of 46 high school credits, which include 30
//    credits in core subjects"; six math, six science, nine Language Arts/Communications, five Social Studies, two Fine
//    Arts and World Languages, one Health/Wellness, "one (1) credit of Digital Literacy"; Future Readiness project;
//    Civics Exam; at least one advanced opportunity; STEM Diploma, Idaho Statute 33-532.
//  - Idaho DOE, Computer Science page: aligned with CSTA and ISTE; "AI is not a separate discipline."; K-5 CodeHop by
//    CodeHS and Launch Pad by Skill Struck; Learning Blade, "20-hour course", grades 5 to 9.
//  - Idaho DOE, 9-12 Computer Science Standards PDF, "CREATED 05/01/24": five strands; 9-12.CS.3.7 "Understand and
//    define artificial intelligence."; 9-12.CS.2.8 binary, decimal, octal and hexadecimal.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): Most Recent Access
//    Data 2024-2025, 117 of 266 high schools (43.98%), source State Education Agency; Access Percent over the Years
//    38% (2019-20), 40%, 38%, 38%, 45.8% (2023-24), 44.0% (2024-25); Most Recent Participation 1,751 of 99,336 (1.76%),
//    matching the 2024-25 participation value 0.0176; denominator from NCES Digest Table 203.04, Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Idaho schools with AP exams 105 (2023), 104 (2024).
//  - IANA tzdb northamerica (iana-lines.txt): northern Idaho counties (Benewah, Bonner, Boundary, Clearwater, Kootenai,
//    Latah, Lewis, Nez Perce, Shoshone, Idaho county north of the Salmon River) on US Pacific time (America/Los_Angeles);
//    southern Idaho on America/Boise, "Mountain - ID (south), OR (east)" in zone1970.tab. India offsets are ours.
//  - City of Boise open data, Parks and Recreation Managed Park and Reserves (polygon), feature service
//    Boise_Parks_and_Reserves_Poly layer 0 (City of Boise data disclaimer, no warranty), returnCountOnly 116, 116
//    records downloaded 17 October 2026. Our calculations (our-calcs-summary.txt): mean Acreage 64.45, median 7.76;
//    16 of 116 above the mean; Stack Rock Reserve 2,172.96; without it mean 46.12, median 7.67; Open Space 22 records,
//    mean 274.30, median 69.09; Neighborhood 38 records, mean 6.64, median 7.15.
// Lesson family: median versus mean on a skewed column (and which "typical" a reader is being shown).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'IDAHO', label: 'Idaho', blurb: 'Coding and AI for Idaho students as the new Digital Literacy credit arrives, with a Boise parks median-versus-mean project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-idaho',
  code: 'aii',
  accent: '#423C99',
  accentRationale: 'Idaho: #423C99, a muted huckleberry violet allocated for row 72, distinct from the greens and reds of neighbouring state pages and well above 4.5:1 contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Idaho',
    eyebrow: 'Idaho, United States',
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
  routeLabel: 'Idaho',
  title: 'Coding and AI Classes in Idaho | Digital Literacy and Beyond',
  description: 'Live online coding and AI classes for Idaho students: the new Digital Literacy credit for 2028 graduates, the 9-12 CS standards, and a Boise parks data project.',
  ogDescription: 'Idaho graduates after January 1, 2028 need a Digital Literacy credit. What it must teach, which eight courses count, and live online coding and AI classes for Idaho.',
  twitterDescription: 'Idaho coding and AI classes, live online, built around the new Digital Literacy credit.',
  ogImageCourse: 'ap-computer-science-principles-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Idaho Students',
    description: 'Teacher-led online coding, AI literacy, cybersecurity and AP Computer Science Principles for Idaho students from elementary grades to twelfth grade, matched to level in a free first lesson.'
  },

  h1: 'Coding and AI classes in Idaho',
  capsuleQ: 'What is the new Idaho Digital Literacy graduation credit?',
  capsule: 'It is a one-credit, stand-alone high school course, set in IDAPA 08.02.03.105.01.j and required for any Idaho student graduating after January 1, 2028. Only eight approved course options count, one of them AP Computer Science Principles. Modern Age Coders teaches the programming, AI and data skills behind it in live online classes for grades K to 12.',
  lead: 'For years an Idaho diploma asked for math, science, English and social studies, and computer skills were left to whichever electives a district happened to offer. The 2025 legislative session changed that. Idaho now lists one credit of Digital Literacy among the state minimums, and the Idaho Department of Education has published exactly what that credit must contain: writing a program with input and output, designing algorithms with selection and iteration, weighing the effects of artificial intelligence, and managing a digital identity. This page sets out the rule as the department words it, the standards behind it, the published figures on how many Idaho high schools teach computer science, and a data project built on Boise&rsquo;s own park inventory, where the average park turns out to be nothing like the typical one.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a student in Idaho.',

  picks: {
    eyebrow: 'Courses for Idaho students',
    h2: 'Four courses that line up with what Idaho now asks for',
    intro: 'Each course runs as a group batch or one-to-one. A free trial lesson decides the level before anyone commits to anything.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 14', note: 'What AI is, how it learns from data and where it fails, years before the high school standard asks students to define it.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Programs with real input and output, loops and decisions, then the Boise acreage project on actual city data.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'The one AP course on the Idaho list of eight, with the Create performance task and the May exam.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Passwords, privacy, digital footprints and defensive thinking, the citizenship strand of the essential standards.' }
    ]
  },

  sections: [
    {
      id: 'credit', tint: '', eyebrow: 'The new diploma credit',
      h2: 'Idaho&rsquo;s Digital Literacy credit, as the Department of Education defines it',
      intro: 'From the department&rsquo;s Digital Literacy Course Guidance Document, updated February 20, 2026, and its graduation requirements page, both read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'The Digital Literacy requirement in IDAPA 08.02.03.105.01.j, summarized from the Idaho Department of Education', head: ['Question', 'What the department says'], rows: [
          ['Where the rule lives', 'Changes to IDAPA 08.02.03.105 were accepted by the legislature during the 2025 legislative session; the credit itself is IDAPA 08.02.03.105.01.j'],
          ['Who must take it', 'The requirement pertains to all students in grades 9 through 12 and is required for any student graduating after January 1, 2028'],
          ['Size and shape', 'A one-credit, stand-alone course; it cannot be delivered over a series of courses or pathways'],
          ['Which courses count', 'Only eight stand-alone course options, from Digital Literacy (ISEE Code 10011) to Introduction to Cybersecurity and Digital Citizenship and AP Computer Science Principles'],
          ['Prerequisites', 'None are allowed, including when AP Computer Science Principles is the course used'],
          ['On the transcript', 'Taken for high school credit, transcribed, and assigned the matching ISEE code']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The AP route', p: 'ISEE Code 10019, AP Computer Science Principles, can meet the credit only when taken for the full year. One semester or trimester is coded 10011 for Digital Literacy and the other counts as AP credit.' },
          { h3: 'Many course designs', p: 'The guidance allows titles such as Computer Science Digital Literacy, Website Design Digital Literacy or Building Gaming Apps Digital Literacy, as long as each one teaches every essential standard.' },
          { h3: 'Free online versions', p: 'For districts without a course of their own, the department and the Idaho STEM Action Center point to free courses on Code.org and CodeHS and a course run by the Idaho Digital Learning Alliance (IDLA).' }
        ] },
        { kind: 'table', mt: true, caption: 'Where Digital Literacy sits in the Idaho state minimums (Idaho Department of Education, High School Graduation Requirements)', head: ['Area', 'State minimum'], rows: [
          ['Total', 'A minimum of 46 high school credits, which include 30 credits in core subjects'],
          ['Mathematics and science', 'Six credits of each'],
          ['Language Arts and Communications', 'Nine credits'],
          ['Social Studies', 'Five credits'],
          ['Fine Arts and World Languages', 'Two credits'],
          ['Health and Wellness', 'One credit'],
          ['Digital Literacy', 'One credit'],
          ['Beyond credits', 'A Future Readiness project and a Civics Exam']
        ] },
        { kind: 'p', text: 'The department adds that local districts may set graduation requirements above the state minimum, and that districts must offer at least one advanced opportunity such as concurrent credit, Advanced Placement or tech prep. Students who want a heavier technical record can also look at the STEM Diploma under Idaho Statute 33-532. Your school counselor has the final word on how any of this applies to one student.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'What the course must teach',
      h2: 'The essential standards, and how a live class practises each one',
      intro: 'The guidance lists the standards that are to be explicitly taught and assessed more than once. Here are six of them, quoted by code, with our own note on where they appear in our classes.',
      body: [
        { kind: 'align', rows: [
          { code: '9-12.CS.1.4', req: 'Create or modify a program that uses different forms of input and output.', ours: 'Ours: the first Python unit reads keyboard input and a CSV file, then writes results back to the screen and to a new file.' },
          { code: '9-12.CS.5.2', req: 'Design algorithms using sequence, selection, iteration and recursion (recursion is left to an upper course).', ours: 'Ours: students plan an algorithm on paper before typing it, then trace it line by line with a teacher.' },
          { code: '9-12.CS.3.8', req: 'Research and explain the social, moral, ethical, and legal impacts of artificial intelligence systems.', ours: 'Ours: every AI unit ends with a short written case: who a model serves, who it misreads, and who is accountable.' },
          { code: '9-12.CS.2.6', req: 'Compare viewpoints on cybersecurity from security experts, privacy advocates and the government.', ours: 'Ours: the teen cybersecurity course runs a structured debate on one real policy question per term.' },
          { code: '9-12.ICT.2.1', req: 'Develop and manage a digital identity and understand the permanence of digital actions.', ours: 'Ours: younger students audit a pretend profile; teens review what their own public projects say about them.' },
          { code: '9-12.CS.1.6', req: 'Create a model of how embedded systems sense, process, and interact in a given environment.', ours: 'Ours: a simulated thermostat or traffic light in code, before any hardware is involved.' }
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The wider 9-12 standards', p: 'Idaho&rsquo;s 9-12 Computer Science Standards document is marked as created on May 1, 2024, and is organized in five strands: Computing Systems, Data and Analysis, Impacts of Computing, Networks and the Internet, and Algorithms and Programming.' },
          { h3: 'AI written into the standards', p: 'Standard 9-12.CS.3.7 reads, in full, &ldquo;Understand and define artificial intelligence.&rdquo; The department&rsquo;s computer science page goes further: &ldquo;AI is not a separate discipline.&rdquo; It treats AI as an extension of computer science.' },
          { h3: 'Number systems too', p: 'Standard 9-12.CS.2.8 asks students to convert between binary, decimal, octal and hexadecimal. It is a short, concrete skill and a good early win in our high school classes.' }
        ] },
        { kind: 'p', text: 'Below high school, the department lists free classroom programs rather than a required course: CodeHop by CodeHS and Launch Pad by Skill Struck for kindergarten to fifth grade, both described as aligned with Idaho&rsquo;s K-5 Computer Science Standards, and Learning Blade, a 20-hour introduction for grades 5 to 9 that ends with students programming robots. We are not connected with any of these providers or with the department.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'How big is a typical Boise park? Mean and median from the city&rsquo;s own files',
      intro: 'The City of Boise publishes the parks and reserves it manages as an open feature service. Students download the Acreage column and discover that one word, average, can describe two very different parks.',
      body: [
        { kind: 'table', caption: 'Boise managed parks and reserves, Acreage field (our calculations from the city&rsquo;s polygon layer, 116 records, downloaded 17 October 2026)', head: ['Measure', 'Our result'], rows: [
          ['Records (the service&rsquo;s own count matched our download)', '116'],
          ['Mean acreage', '64.45 acres'],
          ['Median acreage', '7.76 acres'],
          ['Records larger than the mean', '16 of 116'],
          ['Largest single record', 'Stack Rock Reserve, 2,172.96 acres'],
          ['Mean and median with Stack Rock Reserve removed', '46.12 and 7.67 acres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Two answers to one question', p: 'The mean says a Boise park covers about 64 acres. The median says under 8. Only 16 of the 116 records are bigger than the mean, so the mean describes almost no real park.' },
          { h3: '2. Find what pulls the mean', p: 'Sorting by acreage shows the foothills reserves at the top: Stack Rock Reserve, Military Reserve, Noble Reserve. Removing the single biggest one drops the mean by about 18 acres and barely moves the median.' },
          { h3: '3. Split, then summarize', p: 'Grouped by Park_Type, the 22 Open Space records have a mean of 274.30 and a median of 69.09, while the 38 Neighborhood parks sit at 6.64 and 7.15. Inside a group the two measures finally agree.' }
        ] },
        { kind: 'callout', h3: 'These are our numbers, not the city&rsquo;s', p: 'Every figure above is our own arithmetic on one download of the Acreage field. The City of Boise says it makes no warranty about the data and that it changes over time, and a mapped polygon area is not the same thing as an official park size. Saying what a statistic measures, and what it leaves out, is the skill this project is really about.' },
        { kind: 'p', text: 'The project fits the Data and Analysis strand of the Idaho standards and takes about three sessions: one to fetch and inspect the data, one to compute and compare the two measures with plain Python before checking against the statistics module, and one to write a short paragraph explaining which number a parks brochure should print and why.' }
      ]
    },
    {
      id: 'numbers', tint: '', eyebrow: 'Published figures',
      h2: 'How many Idaho high schools teach computer science today',
      intro: 'Two outside sources measure Idaho from different angles: Code.org counts high schools that teach the subject, and the College Board counts schools giving AP exams. We read both on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Idaho public high schools offering foundational computer science (Code.org, 2025, Access Percent over the Years and Most Recent Access Data)', head: ['School year', 'Share offering CS'], rows: [
          ['2019 to 2020', '38%'],
          ['2020 to 2021', '40%'],
          ['2021 to 2022', '38%'],
          ['2022 to 2023', '38%'],
          ['2023 to 2024', '45.8%'],
          ['2024 to 2025', '44.0%, which is 117 of 266 high schools (state education agency data)']
        ] },
        { kind: 'table', mt: true, caption: 'Students and AP in Idaho', head: ['Measure', 'Idaho', 'Where it comes from'], rows: [
          ['High school students enrolled in CS', '1,751 of 99,336, or 1.76%', 'Code.org (2025), Most Recent Participation Data; the share matches its 2024 to 2025 value, and the student total is the NCES Fall 2022 count'],
          ['Idaho schools giving any AP exam in 2023', '105', 'College Board state-by-state AP school report for 2023-24'],
          ['The same count one year later, 2024', '104', 'Same College Board report']
        ] },
        { kind: 'p', text: 'Read together, the figures show why the new credit matters. Fewer than half of Idaho&rsquo;s high schools offered a foundational computer science course in 2024 to 2025, and fewer than two in every hundred high school students were enrolled in one. A required Digital Literacy course will put every student in front of programming and AI concepts at least once; students who want to go further than one credit will usually need a second route, whether an elective, AP or classes outside school.' },
        { kind: 'p', text: 'Cite the high school and enrollment figures as Code.org (2025). 2025 State of AI + CS Education. Only single Idaho values are quoted here; the full sheet stays with Code.org.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'One state, two clocks: Mountain in the south, Pacific in the panhandle',
      intro: 'Idaho is split between two time zones, and the IANA time zone database names exactly where the line falls.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Southern Idaho', p: 'Boise, Idaho Falls and the rest of the south use America/Boise, listed in the database as Mountain time for southern Idaho and eastern Oregon. By our arithmetic India is 11 hours 30 minutes ahead in summer and 12 hours 30 minutes ahead in winter.' },
          { h3: 'The northern counties', p: 'Benewah, Bonner, Boundary, Clearwater, Kootenai, Latah, Lewis, Nez Perce and Shoshone counties, and Idaho County north of the Salmon River, follow US Pacific time with America/Los_Angeles, one hour behind Boise.' },
          { h3: 'Choosing a time', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We always confirm a class in your own zone, Mountain or Pacific.' }
        ] },
        { kind: 'spec', title: 'A bug worth finding on purpose', p: 'A reminder app that assumes all of Idaho shares one clock will be an hour wrong in Coeur d&rsquo;Alene. Students who store America/Boise and America/Los_Angeles as named zones, rather than fixed offsets, see the problem vanish, including across the clock change on November 1, 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A path through school',
    h2: 'From early puzzles to the Digital Literacy credit and AP',
    intro: 'Grade bands are a starting guess; the trial lesson places each student properly.',
    cols: [
      { band: 'Grades K to 5', h3: 'Thinking in steps', p: 'Puzzles, patterns and block code, close to what the K-5 programs on the department&rsquo;s list cover.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 8', h3: 'Typed code and AI basics', p: 'First Python and a clear picture of what AI tools do, the age band Learning Blade aims at.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 to 10', h3: 'The credit year', p: 'Input and output, algorithms, cybersecurity viewpoints and digital identity, alongside the school course.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 11 to 12', h3: 'AP and data', p: 'AP Computer Science Principles, then data science projects like the Boise acreage study.', courses: ['ap-computer-science-principles-exam-prep-course', 'data-science-course-for-teens-python-data'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Idaho calls AI part of computer science. Here is why that is right',
    intro: 'A tool can produce an answer; judging the answer still takes someone who understands how it was made.',
    p1: 'Ask an AI assistant for the average size of a Boise park and it may well hand back 64 acres, correctly computed and quite misleading. The arithmetic is not the hard part. Knowing that a few huge foothills reserves drag the mean upward, and that a median would serve a reader better, is.',
    p2: 'That is why the department&rsquo;s view that AI is an extension of computer science, rather than a separate subject, makes sense for students. Writing the calculation by hand once teaches what to check when a model does it next time, and it turns standard 9-12.CS.3.8 from a discussion topic into a habit.',
    closer: 'A Digital Literacy credit gives every Idaho student the vocabulary; practice with real data gives them the judgment.',
    blogAnchor: 'why learning to code still matters when a model can write it'
  },

  delivery: {
    eyebrow: 'How classes run',
    h2: 'Coeur d&rsquo;Alene to Pocatello, the same live classroom',
    intro: 'Idaho is big and rural in places; a class on a screen does not care how far the nearest town is.',
    cells: [
      { h3: 'At the kitchen table', p: 'Students in Sandpoint, Twin Falls and Meridian can sit in the same session without anyone driving to a center after school.' },
      { h3: 'Built around Idaho school', p: 'Teachers plan in US grades and the Idaho calendar, and can tie projects to the Digital Literacy course or AP. Anything a school grades is done by the student alone.' },
      { h3: 'A trial lesson first', p: 'A teacher sets a real task, watches how the student approaches it, then suggests a course and a level. No card details are taken.' },
      { h3: 'Group batches', p: 'Fifteen to twenty students working at the same level, drawn from across the United States.' },
      { h3: 'One-to-one', p: 'A single teacher for a single student, for anyone racing ahead, catching up, or preparing for the AP exam.' },
      { h3: 'Two zones handled', p: 'Every time is confirmed in Mountain or Pacific time, whichever your part of Idaho uses.' }
    ],
    spec: { title: 'Online only, said plainly', p: 'Modern Age Coders has no office or classroom in Idaho. Teachers work live from India, and a student needs a computer, a microphone and headphones, and a steady internet connection.' }
  },

  fees: {
    h2: 'Fees for Idaho families',
    intro: 'The trial is free; after that there are two monthly options.',
    first: 'One complete trial lesson with a teacher, ending in a recommended course, level and class time.',
    group: 'A monthly place in a batch of fifteen to twenty students at a similar stage.',
    private: 'A monthly plan with one teacher working only with your student.',
    closer: 'Every family outside India is billed in US dollars at one rate, whether you live in Boise or Bonners Ferry. Nothing is charged until after the trial lesson and only once you have agreed a course and time; the pricing page covers breaks, holidays and missed sessions.'
  },

  reviewsH2: 'Reviews from families, as posted on Google',

  book: {
    h2: 'Book a free trial lesson for an Idaho student',
    intro: 'Tell us the grade and the goal. A fourth grader might start with a pattern puzzle, an eighth grader with a first Python program, and a junior with the Boise park statistics.',
    success: 'Thank you. Our team will contact you soon about a trial lesson for your Idaho student.'
  },

  faq: {
    h2: 'Idaho questions from parents and students',
    intro: 'Short answers, each tied to the department&rsquo;s own pages where a rule is involved.',
    items: [
      { q: 'Which Idaho students need the Digital Literacy credit?', a: 'The Idaho Department of Education says the credit is required for any student graduating after January 1, 2028, and that the requirement pertains to all students in grades 9 through 12.' },
      { q: 'Can a district split the credit across two courses?', a: 'No. The guidance calls it a one-credit, stand-alone course and says it cannot be delivered over a series of courses or pathways.' },
      { q: 'Does AP Computer Science Principles count?', a: 'It can, when taken for the full year. One portion is coded 10011 for Digital Literacy and the other portion counts as AP Computer Science Principles, and the course may not have a prerequisite.' },
      { q: 'How many credits does an Idaho diploma need?', a: 'The state minimum is 46 high school credits, 30 of them in core subjects, plus a Future Readiness project and a Civics Exam. Districts may require more.' },
      { q: 'Does Idaho mention AI in its computer science standards?', a: 'Yes. Standard 9-12.CS.3.7 asks students to understand and define artificial intelligence, and 9-12.CS.3.8 covers its social, moral, ethical and legal impacts.' },
      { q: 'What share of Idaho high schools offered computer science in 2024 to 2025?', a: 'Code.org (2025) reports 117 of 266 Idaho high schools, or about 44%, using state education agency data.' },
      { q: 'Can a class with you replace the school course?', a: 'No. Only the eight approved course options, taught for high school credit, meet the requirement. Our lessons add practice and depth alongside school, and graded work stays the student\'s own.' },
      { q: 'When can my child have lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'We live in north Idaho. Which time will you use?', a: 'Northern counties such as Kootenai and Bonner run on Pacific time, so we confirm the lesson in Pacific time; southern Idaho families get Mountain time.' },
      { q: 'Do you teach in person anywhere in Idaho?', a: 'No. Every lesson is live online with a teacher in India, and we have no Idaho office or classroom.' }
    ]
  },

  next: {
    eyebrow: 'Keep reading',
    h2: 'More guides for Idaho students and parents',
    html: 'Compare Idaho with other states in our <a class="cg-inline-link" href="/computer-science-graduation-requirements-by-state">computer science graduation requirements by state</a>. Students taking the AP route to the credit can use the <a class="cg-inline-link" href="/ap-csp-create-performance-task-guide">AP CSP Create task guide</a>, and families with younger children can start from <a class="cg-inline-link" href="/ai-literacy-for-elementary-students">AI literacy for elementary students</a>. North Carolina&rsquo;s approach is set out on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Idaho and the wider US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'All US pages' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-csp-create-performance-task-guide', label: 'AP CSP Create task' },
    { href: '/cybersecurity-classes-for-teens', label: 'Cybersecurity for teens' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aii .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aii .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.07; }
.cg-root.cg-aii .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aii .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aii .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-aii .cg-align-code { font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
.cg-root.cg-aii .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aii .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-aii .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aii .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Idaho, read raw on 17 and 18 October 2026: Idaho Department of Education Digital Literacy Course Guidance Document (UPDATE 02/20/2026; IDAPA 08.02.03.105.01.j; 2025 legislative session; grades 9 through 12; graduating after January 1, 2028; one-credit stand-alone; not over a series of courses; eight course options incl. ISEE Code 10019 AP CSP; no prerequisite; free Code.org and CodeHS courses and IDLA with the Idaho STEM Action Center; essential standards); Digital Literacy page; High School Graduation Requirements (46 credits, 30 core, one credit of Digital Literacy, Future Readiness project, Civics Exam, advanced opportunity, STEM Diploma 33-532); Computer Science page ("AI is not a separate discipline."; CodeHop, Launch Pad, Learning Blade 20-hour, grades 5 to 9); 9-12 CS Standards (created 05/01/24; five strands; 9-12.CS.3.7; 9-12.CS.2.8); Code.org (2025) access 117 of 266 (2024-25), trend 38% to 44.0%, participation 1,751 of 99,336 (1.76%, 2024-25, NCES Fall 2022 denominator); College Board AP schools 105 (2023), 104 (2024); IANA America/Boise and America/Los_Angeles with the northern county list.',
    localProject: 'City of Boise open data, Parks and Recreation Managed Park and Reserves (polygon), Boise_Parks_and_Reserves_Poly layer 0, City of Boise data disclaimer (no warranty), 116 records (returnCountOnly matched), downloaded 17 October 2026. Our calculations: mean Acreage 64.45, median 7.76; 16 of 116 above the mean; Stack Rock Reserve 2,172.96; without it mean 46.12, median 7.67; Open Space 22 records mean 274.30 median 69.09; Neighborhood 38 records mean 6.64 median 7.15. Lesson family: median versus mean on a skewed column.',
    requiredMentions: [
      'IDAPA 08.02.03.105.01.j',
      'January 1, 2028',
      'eight stand-alone course options',
      'ISEE Code 10019',
      'minimum of 46 high school credits',
      'AI is not a separate discipline.',
      'Understand and define artificial intelligence.',
      '117 of 266',
      '1,751 of 99,336',
      'Nez Perce',
      'Stack Rock Reserve',
      '7.76'
    ],
    sources: [
      { claim: 'Idaho DOE: Digital Literacy Course Guidance Document (UPDATE 02/20/2026), rule, scope, eight course options, AP CSP coding, essential standards.', url: 'https://www.sde.idaho.gov/wp-content/uploads/2026/02/2025-Digital-Literacy-Guidance-Document.pdf' },
      { claim: 'Idaho DOE: Digital Literacy page, credit required for 2028 graduates.', url: 'https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/computer-science/digital-literacy/' },
      { claim: 'Idaho DOE: High School Graduation Requirements, 46 credits and the state minimums.', url: 'https://www.sde.idaho.gov/high-school-graduation-requirements/' },
      { claim: 'Idaho DOE: Computer Science page, AI as part of CS, K-5 and middle school programs.', url: 'https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/computer-science/' },
      { claim: 'Idaho DOE: 9-12 Computer Science Standards, created 05/01/24.', url: 'https://www.sde.idaho.gov/wp-content/uploads/2025/08/ICS-Computer-Science-Standards.pdf' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Idaho access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Boise: Parks and Reserves (polygons) feature service.', url: 'https://services1.arcgis.com/WHM6qC35aMtyAAlN/arcgis/rest/services/Boise_Parks_and_Reserves_Poly/FeatureServer' },
      { claim: 'IANA tzdb northamerica and zone1970.tab: America/Boise, America/Los_Angeles, northern Idaho counties.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'The IDLA per-student course fee in the guidance document: not printed (no prices on US pages beyond our own fee block).',
      'The Code.org graduating-senior, gender and race figures for Idaho: not from the Access or Participation tabs, not used.',
      'That Idaho requires a computer science course to graduate: not claimed; the state requires a Digital Literacy credit, one of whose eight options is AP Computer Science Principles.',
      'Official Boise park sizes: not read; only our arithmetic on the Acreage field is printed, labelled as ours.',
      'Names of individual Idaho schools (the guidance links a sample handbook from one high school): not used; counts only.',
      'That our classes satisfy the Digital Literacy requirement: refused; only the approved courses taken for high school credit do.',
      'Any affiliation with the Idaho Department of Education, the Idaho STEM Action Center, IDLA, Code.org, CodeHS, Skill Struck, Learning Blade, the College Board or the City of Boise.'
    ]
  }
};
