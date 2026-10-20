'use strict';
// Virginia (cg- state page, US cluster Phase 4, row 103). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Virginia writes computer science into the law that defines its Standards of Learning, and lets a computer
// science credit count as mathematics, science or career and technical education. What does that mean for a diploma,
// and how many high schools actually offer CS? Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-classes-in-virginia/):
//  - doe.virginia.gov (Virginia Department of Education) returned 403 on 17 October 2026: not retried, nothing from it.
//    Statute and regulation text from the General Assembly's Legislative Information System used instead, labelled as law.
//  - Code of Virginia § 22.1-253.13:1 (Standard 1): the Standards of Learning shall include "computer science and
//    computational thinking, including computer coding"; local school boards' K-12 program of instruction shall emphasize
//    "computer science and computational thinking, including computer coding".
//  - Code of Virginia § 22.1-253.13:4 (Standard 4), subsection D: item 14 "Consider all computer science course credits
//    earned by students to be science course credits, mathematics course credits, or career and technical education
//    credits. The Board shall develop guidelines addressing how computer science courses can satisfy graduation
//    requirements."; item 19 English language learner may "substitute computer coding course credit for any foreign
//    language course credit" (with an AP/IB/SAT II language score; not where the advanced studies provider requires it);
//    item 20 advanced studies diploma student with an IEP world-language accommodation may "substitute two standard
//    units of credit in computer science for two standard units of credit in a world language", counselor notice required.
//  - 8VAC20-132-51 (students entering ninth grade in 2018 to 2019 and later), derived from Virginia Register Volume 41,
//    Issue 1, eff. September 25, 2024: Standard Diploma total 22 standard units, 5 verified credits (English 4, Mathematics 3,
//    Laboratory Science 3, History and Social Science 3, Health and PE 2, World Language/Fine Arts/CTE 2, Economics and
//    Personal Finance 1, Electives 4); Advanced Studies total 26 (Mathematics 4, Laboratory Science 4, History 4, World
//    Language 3, Health and PE 2, Fine Arts or CTE 1, EPF 1, Electives 3); footnotes "Per the Standards of Quality, a
//    computer science course credit earned by students may be considered a mathematics course credit." (and science, CTE).
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): VA access 73%
//    (2018-19), 73%, no figure 2020-21, 75%, 74%, 68.4% (2023-24, 229 of 335, "State Education Agency"); the 2024-25 cell
//    repeats 2023-24 exactly and is treated as carried forward, not printed. Participation 6.5% (2020-21), 5.7%, 4.94%
//    (2022-23: 19,801 of 400,497; denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: VA schools with AP exams 455 (2023), 453 (2024); public
//    325 and 324; non-public 130 and 129.
//  - IANA tzdb: America/New_York, "Eastern (most areas)"; US rule Mar Sun>=8 and Nov Sun>=1, so November 1, 2026 and
//    March 14, 2027.
//  - Fairfax County GIS, Existing Bicycle and Pedestrian Network feature service (Fairfax County GIS disclaimer: "makes no
//    warranties"), 7,237 records downloaded 18 October 2026 in four pages (returnCountOnly 7,237 = rows fetched). Raw
//    counts by TREATMENT_TYPE: Trail 2,571, ShareRoad 2,335, UnmarkedCross 560, BikeLane 555, Sidewalk 401, MarkedCross 344,
//    Path 169, Sharrow 136, ClimbLane 96, BBikeLane 45, blank 15. CONDITION blank for 7,045 of 7,237 after our cleanup;
//    raw spellings 'Poor' 3 and 'POOR' 2, 'Excellent' 2 and 'EXCELLENT' 1; MAINTENANCE 'Unknown' 1,246 and 'UNKNOWN' 56.
//    74 records list two supervisor districts. Ours (Shape__Length in US feet, layer in Virginia State Plane North / 5,280):
//    Trail 533.6 miles, ShareRoad 574.9, BikeLane 145.8; named trails: Fairfax County Parkway Trail 20.26 (43 segments),
//    Cross County Trail 20.24 (35), Cross Country Trail 14.70 (18), Ox Rd Trail E 11.22, Mount Vernon Trail 9.50;
//    "Unnamed Trail" 691 segments.
// Lesson family: cleaning inconsistent category labels, then filter-and-rank (and why two spellings are a question, not a merge).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'VIRGINIA', label: 'Virginia', blurb: 'Coding and AI for Virginia students, where a computer science credit can count toward math, science or CTE, with a Fairfax County trails project.' },
  market: US,
  slug: 'coding-classes-in-virginia',
  code: 'aiv',
  accent: '#18309E',
  accentRationale: 'Virginia: a deep Chesapeake blue, #18309E, allocated in alloc.tsv for row 103 and kept muted so it reads as ink on the paper rather than as a bright link colour',
  pageType: 'city',
  place: {
    name: 'Virginia',
    eyebrow: 'Commonwealth of Virginia, United States',
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
  routeLabel: 'Virginia',
  title: 'Coding and AI Classes in Virginia | Live Online, Grades K to 12',
  description: 'Live online coding and AI classes for Virginia students: how a CS credit counts toward a diploma under state law, the access figures, and a Fairfax trails project.',
  ogDescription: 'Virginia law puts computer coding in the Standards of Learning and lets CS credits count as math, science or CTE. The rules, the numbers, and live classes.',
  twitterDescription: 'Virginia coding and AI classes, live online, built around how CS counts toward a diploma.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Virginia Students',
    description: 'Live online Python, Java for AP Computer Science A, data science and AI for Virginia students from kindergarten to twelfth grade, matched to level in a free first lesson.'
  },

  h1: 'Coding and AI classes in Virginia',
  capsuleQ: 'Does computer science count toward a Virginia high school diploma?',
  capsule: 'It can. Code of Virginia &sect; 22.1-253.13:4 tells the Board of Education to treat every computer science credit as a science, mathematics or career and technical education credit, and the Standards of Learning must include computer science and computational thinking, including computer coding. Modern Age Coders teaches that same ground live online, from Scratch in kindergarten to AP Computer Science A in Java.',
  lead: 'Virginia took an unusual route. Rather than adding a separate computer science course to the list every student must pass, the General Assembly wrote coding into the law that defines what public schools teach, then let a CS credit stand in for credits a student already needs. That makes the subject flexible, and it also makes it easy to miss: a ninth grader can reach a diploma without ever choosing it. Below, the statute and the diploma regulation as the Legislative Information System publishes them, how many Virginia high schools offered computer science in the most recent year with data, and a data project built on Fairfax County&rsquo;s own trail and bike lane records.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Virginia.',

  picks: {
    eyebrow: 'Course picks for Virginia',
    h2: 'Four courses Virginia families ask about first',
    intro: 'Each card is a full course with its own syllabus. The free first lesson decides which one fits, so nobody has to guess.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades K to 5', note: 'Computational thinking in blocks: events, loops and a finished game that a young student can explain line by line.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 10', note: 'Typed Python from the first print statement to programs that read real files, such as the Fairfax trail records below.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java, object-oriented design and the free-response style of the AP Computer Science A exam.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Cleaning, charting and questioning public data with pandas, the skill the Fairfax project practises.' }
    ]
  },

  sections: [
    {
      id: 'statute', tint: '', eyebrow: 'What the law says',
      h2: 'Three lines of the Code of Virginia every CS student should know',
      intro: 'The Virginia Department of Education site refused our request on 17 October 2026, so this section quotes the law itself, from the General Assembly&rsquo;s Legislative Information System, read the same week.',
      body: [
        { kind: 'table', caption: 'Computer science in the Standards of Quality, Code of Virginia, Title 22.1, Chapter 13.2 (quoted from the statute)', head: ['Section', 'What the statute says', 'What it means for a student (our reading)'], rows: [
          ['&sect; 22.1-253.13:1, Standard 1', 'The Standards of Learning shall include computer science and computational thinking, including computer coding', 'Coding is part of the content every public school is expected to teach, not an optional extra'],
          ['&sect; 22.1-253.13:1, subsection C', 'Local school boards shall emphasize the same subject in a program of instruction for grades K through 12', 'The expectation runs from kindergarten, not only in high school'],
          ['&sect; 22.1-253.13:4, D 14', 'The Board shall consider all computer science course credits to be science, mathematics, or career and technical education credits, and develop guidelines on how they satisfy graduation requirements', 'A CS class can fill a slot a student must fill anyway'],
          ['&sect; 22.1-253.13:4, D 19', 'An English language learner with a qualifying AP, IB or SAT II foreign language score may substitute computer coding course credit for a foreign language credit, except where an advanced studies provider requires the language credit', 'A narrow route, for students who have already shown a second language'],
          ['&sect; 22.1-253.13:4, D 20', 'A student pursuing an advanced studies diploma whose IEP specifies a world language credit accommodation may substitute two standard units in computer science for two in a world language, with notice from the school counselor about college entrance', 'Another narrow route, with a warning attached']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No stand-alone CS course on the list', p: 'Virginia does not add computer science as its own line in the diploma table. It folds the subject into the Standards of Learning and lets the credit travel, so whether a student takes CS depends on the choices made in eighth and ninth grade.' },
          { h3: 'A counselor conversation matters', p: 'The law itself requires a counselor to warn families about possible college entrance effects before a CS credit replaces a world language credit. That is a good habit for every substitution, not only the ones the statute names.' },
          { h3: 'Guidelines sit with the Board', p: 'Item 14 hands the details to the Board of Education, which publishes them on the department site we could not reach. Ask your school which approved courses count as a mathematics or science credit in your division.' }
        ] }
      ]
    },
    {
      id: 'diploma', tint: 'deep', eyebrow: 'The diploma table',
      h2: 'Where a CS credit can land in the 22 and 26 credit diplomas',
      intro: 'Regulation 8VAC20-132-51 applies to students who entered ninth grade in 2018 to 2019 or later. Its current text took effect on September 25, 2024, according to the Virginia Register note on the section.',
      body: [
        { kind: 'table', caption: 'Standard units of credit required, 8VAC20-132-51 (the right-hand column is ours, based on the regulation&rsquo;s own footnotes)', head: ['Discipline area', 'Standard Diploma', 'Advanced Studies Diploma', 'Can a CS credit count here?'], rows: [
          ['English (reading and writing)', '4', '4', 'No'],
          ['Mathematics', '3', '4', 'Yes, per the footnote citing the Standards of Quality'],
          ['Laboratory Science', '3', '4', 'Yes, per the footnote'],
          ['History and Social Science', '3', '4', 'No'],
          ['World Language', 'Shared slot below', '3', 'Only through the IEP accommodation route'],
          ['World Language, Fine Arts, or Career and Technical Education', '2', 'Fine Arts or CTE: 1', 'Yes, as a CTE credit'],
          ['Health and Physical Education', '2', '2', 'No'],
          ['Economics and Personal Finance', '1', '1', 'No'],
          ['Electives', '4', '3', 'Any CS course can be an elective'],
          ['Total', '22 standard units, 5 verified credits', '26 standard units, 5 verified credits', '']
        ] },
        { kind: 'p', text: 'Read the footnotes slowly. Each says a computer science credit &ldquo;may be considered&rdquo; a mathematics, science or CTE credit, and each points back to the Standards of Quality. The regulation also says the board approves the courses that satisfy each requirement, so the practical answer for any one class lives in your school division&rsquo;s program of studies. Our column is a reading of the published text, not legal advice and not a ruling for any particular course.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A seventh grader planning ahead', p: 'If a student already loves coding, the question for the middle school counselor is which high school CS course counts as a mathematics or laboratory science credit in your division, and in which grade it can be taken.' },
          { h3: 'A ninth grader on the advanced track', p: 'With four mathematics and four laboratory science credits to earn for an advanced studies diploma, an approved CS course in one of those slots can make room in a crowded timetable.' },
          { h3: 'A junior heading for AP', p: 'AP Computer Science A or Principles adds college-level work. Whether the school counts it as mathematics, science, CTE or an elective is the division&rsquo;s decision under the Board&rsquo;s guidelines.' }
        ] }
      ]
    },
    {
      id: 'access', tint: 'tint', eyebrow: 'The published figures',
      h2: 'How many Virginia high schools offer computer science, and how many students enroll',
      intro: 'Virginia figures from the Code.org (2025) State of AI + CS Education data and from the College Board, as published.',
      body: [
        { kind: 'table', caption: 'Share of Virginia public high schools offering foundational computer science (Code.org, 2025)', head: ['School year', 'Share offering CS', 'Note'], rows: [
          ['2018 to 2019', '73%', ''],
          ['2019 to 2020', '73%', ''],
          ['2020 to 2021', 'No figure published', 'The sheet shows a dash'],
          ['2021 to 2022', '75%', ''],
          ['2022 to 2023', '74%', ''],
          ['2023 to 2024', '68.4%', '229 of 335 high schools, reported by the State Education Agency']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Virginia, as published', head: ['Measure', 'Virginia', 'Source'], rows: [
          ['High school students enrolled in CS, 2022 to 2023', '19,801 of 400,497, or 4.94%', 'Code.org (2025); student total from NCES, fall 2022'],
          ['CS enrollment share, 2020 to 2021 and 2021 to 2022', '6.5% and 5.7%', 'Code.org (2025)'],
          ['Schools with AP exams, 2023 and 2024', '455 in 2023, 453 in 2024', 'College Board, School Report of AP Exams by State 2023-24'],
          ['Of those, public schools', '325 in 2023, 324 in 2024', 'College Board'],
          ['Of those, non-public schools', '130 in 2023, 129 in 2024', 'College Board']
        ] },
        { kind: 'p', text: 'Three things stand out, and none of them needs a guess about causes. First, Virginia&rsquo;s access share was in the low to mid seventies for four reported years, then 68.4% in 2023 to 2024. Second, the enrollment share fell in each of the three years published, from 6.5% to 4.94%. Third, the two measures are years apart: the newest enrollment figure is 2022 to 2023, the newest access figure 2023 to 2024, so do not divide one by the other. We report the pattern; the data alone does not say why it moved.' },
        { kind: 'p', text: 'Suggested citation for the access and enrollment figures: Code.org (2025). 2025 State of AI + CS Education. We quote individual Virginia values from the raw sheet&rsquo;s access and participation tabs and do not republish the dataset.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Cleaning Fairfax County&rsquo;s trail and bike lane records before ranking them',
      intro: 'Fairfax County publishes its Existing Bicycle and Pedestrian Network as open GIS data. We downloaded every record on 18 October 2026. Before a student can rank anything, the labels have to be made consistent.',
      body: [
        { kind: 'table', caption: 'Records by TREATMENT_TYPE, and our mileage from the Shape__Length field (our calculation, not county figures)', head: ['Treatment type in the data', 'Records', 'Our miles'], rows: [
          ['ShareRoad', '2,335', '574.9'],
          ['Trail', '2,571', '533.6'],
          ['BikeLane', '555', '145.8'],
          ['Path', '169', '64.4'],
          ['Sidewalk', '401', '50.8'],
          ['Sharrow', '136', '28.1'],
          ['UnmarkedCross and MarkedCross', '560 and 344', '7.1 and 6.1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Step 1: count before you trust', p: 'The service reported 7,237 records and allowed 2,000 per request, so the download took four pages. Students check that the rows they hold equal the count the server reports before calculating anything. Ours matched exactly.' },
          { h3: 'Step 2: make the labels agree', p: 'The CONDITION field holds both &ldquo;Poor&rdquo; and &ldquo;POOR&rdquo;, both &ldquo;Excellent&rdquo; and &ldquo;EXCELLENT&rdquo;, and dozens of entries that are a single space. MAINTENANCE has &ldquo;Unknown&rdquo; 1,246 times and &ldquo;UNKNOWN&rdquo; 56 times. Stripping spaces and upper-casing fixes the counting.' },
          { h3: 'Step 3: filter, then rank', p: 'Keep only Trail records, total the length for each FACILITY_NAME, sort from longest to shortest. The layer stores lengths in US feet, so dividing by 5,280 gives miles. Fairfax County Parkway Trail comes first in our run, at 20.26 miles across 43 segments.' }
        ] },
        { kind: 'table', mt: true, caption: 'Top named trails after filtering to TREATMENT_TYPE = Trail (our sums of Shape__Length, labelled ours)', head: ['FACILITY_NAME', 'Segments', 'Our miles'], rows: [
          ['Fairfax County Parkway Trail', '43', '20.26'],
          ['Cross County Trail', '35', '20.24'],
          ['Cross Country Trail', '18', '14.70'],
          ['Ox Rd Trail E', '22', '11.22'],
          ['Mount Vernon Trail', '14', '9.50']
        ] },
        { kind: 'callout', h3: 'One trail or two?', p: 'Look at rows two and three. &ldquo;Cross County Trail&rdquo; and &ldquo;Cross Country Trail&rdquo; might be one trail entered with two spellings, or two different things. Merging them would make it the longest trail in our table; leaving them apart keeps it second. The data cannot settle that, so a careful analyst writes the question down instead of quietly merging. That habit is worth more than the ranking itself.' },
        { kind: 'p', text: 'There is more to question. The largest single name in the Trail rows is not a name at all: &ldquo;Unnamed Trail&rdquo; covers 691 segments, and 74 records list two supervisor districts separated by a semicolon, which breaks any simple count by district. Fairfax County says it makes no warranties about the accuracy or completeness of its GIS data, so every mile above is our arithmetic on one download, never an official trail length. A student who can explain each of those caveats has learned more about data than any ranking can show.' },
        { kind: 'p', text: 'In class, the cleanup step is one line of pandas, <code>df["CONDITION"].fillna("")<wbr>.str.strip()<wbr>.str.upper()</code>, followed by a <code>value_counts()</code> before and after so the student can see exactly which labels collapsed together. The ranking is a filter with <code>df[df.TREATMENT_TYPE == "Trail"]</code>, a <code>groupby</code> on the name and a sort. Short code, but every line carries a decision the student must defend.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time from Chincoteague to Cumberland Gap',
      intro: 'The whole Commonwealth uses the IANA zone America/New_York, which the time zone database describes as &ldquo;Eastern (most areas)&rdquo;.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone, one schedule', p: 'Arlington, Richmond, Roanoke and Norfolk all keep the same clock, so a mixed batch of Virginia students never has to translate times between themselves.' },
          { h3: 'The teachers&rsquo; side', p: 'Our teachers work on India time, which has no daylight saving. The gap to Virginia therefore widens by an hour in winter, and we always write class times in Eastern Time so parents do not have to do the arithmetic.' },
          { h3: 'This school year&rsquo;s changes', p: 'The IANA rule for the United States moves clocks back on the first Sunday in November and forward on the second Sunday in March: November 1, 2026 and March 14, 2027 for this school year.' }
        ] },
        { kind: 'spec', title: 'A bug to write on purpose', p: 'Students who store a class time as a fixed offset from India time watch it drift by an hour across November 1, 2026. Rewriting the reminder with the America/New_York zone teaches why programmers never hard-code an offset.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A Virginia path from kindergarten blocks to AP Java',
    intro: 'Grade bands are a rough guide; the free first lesson places each student by what they can already do.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and stories', p: 'Sequencing, loops and events in Scratch, then small games that make computational thinking visible.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'Typed code', p: 'Python and simple web pages, chosen so a high school CS course feels familiar on day one.', courses: ['python-ai-kids-masterclass', 'html-css-course-for-beginners-build-real-websites'] },
      { band: 'Grades 9 to 10', h3: 'Real data and bigger programs', p: 'Python with files and pandas, and projects built on public data like the Fairfax trails layer.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java, or AI models trained and checked on data the student understands.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Could a chatbot have cleaned the Fairfax data for you?',
    intro: 'It could write the code. It could not tell you which choices the code was making.',
    p1: 'Ask an AI assistant to rank Fairfax trails and it will happily produce a script. It may or may not upper-case the labels, it will not notice that two trail names differ by one letter, and it will not warn you that 691 segments have no name. Each of those silent choices changes the answer, and a student who has never cleaned data by hand has no way to spot them.',
    p2: 'That is why Virginia&rsquo;s law speaks of computational thinking alongside computer coding. Thinking means knowing what a step does to the data before running it. In our AI units students use assistants openly, then audit what they produced line by line, the same way they audit their own code.',
    closer: 'Assistants make typing faster; judging the output is still the student&rsquo;s job, and it is the part schools and colleges actually assess.',
    blogAnchor: 'why coding still matters when AI writes code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Northern Virginia to Hampton Roads, the same live classroom',
    intro: 'Distance from a coding center stops mattering when the class comes to the kitchen table.',
    cells: [
      { h3: 'Learn from home', p: 'A student in Loudoun and one in Danville can sit in the same live session, each at their own computer, with no commute after school or practice.' },
      { h3: 'Virginia school calendar', p: 'Teachers work in US grade levels and plan around semesters, SOL testing windows and AP exam season. Graded school assignments always remain the student&rsquo;s own work.' },
      { h3: 'Free first lesson', p: 'A real coding task with a teacher, then a recommendation for level, course and time. No payment details are requested at this point.' },
      { h3: 'Matched batches', p: 'Groups of fifteen to twenty students at the same stage, drawn from Virginia and other states.' },
      { h3: 'One to one', p: 'A dedicated teacher for students preparing for AP, catching up after a missed unit, or simply moving faster than any group.' },
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online only', p: 'Every Modern Age Coders class is taught live over video from India. We have no office or classroom in Virginia and do not claim one. A laptop or desktop, headphones and a steady connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for Virginia families',
    intro: 'The figures below are the whole price list.',
    first: 'One full lesson at no charge, ending with a recommended course, level and class time.',
    group: 'A month of live classes in a group of fifteen to twenty students at a similar level.',
    private: 'A month of live classes with a teacher working with one student only.',
    closer: 'Families in the United States pay in US dollars, and a student in Fairfax pays what a student in Abingdon pays. Nothing is billed until after the free lesson, once course and time are agreed; the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Book a free first lesson for your Virginia student',
    intro: 'Tell us the grade and what the student enjoys. A second grader might start with a Scratch animation, an eighth grader with a first Python program, and a junior with the Fairfax trail data.',
    success: 'Thank you. A member of the team will contact you soon about a class for your Virginia student.'
  },

  faq: {
    h2: 'Virginia computer science questions from parents',
    intro: 'Short answers, each tied to the source named on this page.',
    items: [
      { q: 'Is computer science required to graduate in Virginia?', a: 'Not as a separate course in the diploma table of 8VAC20-132-51. Instead, Code of Virginia section 22.1-253.13:4 says computer science credits are to be considered science, mathematics or career and technical education credits.' },
      { q: 'Can a CS class count as a math credit in Virginia?', a: 'The diploma regulation says a computer science course credit may be considered a mathematics credit, citing the Standards of Quality. Which specific courses count is set by the Board and your school division, so confirm with the school counselor.' },
      { q: 'Do Virginia schools have to teach coding?', a: 'The Standards of Learning must include computer science and computational thinking, including computer coding, under section 22.1-253.13:1, and local school boards must emphasize it in a K through 12 program of instruction.' },
      { q: 'How many credits does a Virginia diploma need?', a: 'Under 8VAC20-132-51, a Standard Diploma needs 22 standard units of credit and an Advanced Studies Diploma 26 standard units, each with 5 verified credits.' },
      { q: 'Can computer science replace a world language credit?', a: 'Only in two narrow cases in the statute: certain English language learners with a qualifying language exam score, and advanced studies students whose IEP specifies a world language accommodation. A counselor must explain possible college entrance effects.' },
      { q: 'How many Virginia high schools offer computer science?', a: 'Code.org reports 229 of 335 Virginia high schools, or 68.4%, offering foundational computer science in 2023 to 2024, with 4.94% of high school students enrolled in 2022 to 2023.' },
      { q: 'Will your classes give my child a school credit?', a: 'No. Credits come only from courses approved by the Board and the school division. Our classes build skill, projects and AP readiness alongside school, and graded school work stays the student\'s own.' },
      { q: 'When do classes run for Virginia students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Eastern Time.', boiler: true },
      { q: 'Do you have a location in Virginia?', a: 'No. There is no Virginia office or classroom, and none is claimed. Every class is live online with a teacher in India.', boiler: true },
      { q: 'Where are the prices?', a: 'They are in the fees section of this page: a free first lesson, then a monthly group option and a monthly one-to-one option, with billing only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Where Virginia students go from here',
    html: 'Juniors aiming at the Java exam can read about <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and students choosing between the two AP courses can start with <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. High schoolers planning a portfolio can browse <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a> and the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>. For another state&rsquo;s approach, see <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>, or return to the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Virginia and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiv .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-aiv .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-aiv .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-aiv .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-aiv .cg-table caption { font-weight: 650; text-align: left; font-size: 0.95rem; }
.cg-root.cg-aiv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiv .cg-table th { text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.78rem; }
.cg-root.cg-aiv .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-aiv .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-aiv .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Virginia, read raw 17 and 18 October 2026. doe.virginia.gov returned 403 (not retried). Statute and regulation from the General Assembly LIS: Code of Virginia 22.1-253.13:1 (SOL include computer science and computational thinking, including computer coding; K-12 program of instruction); 22.1-253.13:4 D 14 (CS credits considered science, mathematics or CTE credits; Board guidelines), D 19 (ELL computer coding for foreign language), D 20 (advanced studies IEP, two CS units for two world language units, counselor notice); 8VAC20-132-51 (entering ninth grade 2018-2019 and later; eff. September 25, 2024; Standard 22 units, Advanced Studies 26 units, 5 verified credits; CS footnotes). Code.org (2025) access 73%, 73%, dash, 75%, 74%, 68.4% (229 of 335, 2023-24); participation 6.5%, 5.7%, 4.94% (19,801 of 400,497, 2022-23). College Board AP schools 455 and 453; public 325 and 324; non-public 130 and 129. IANA America/New_York, Eastern (most areas); US rule.',
    localProject: 'Fairfax County GIS Existing Bicycle and Pedestrian Network (county GIS disclaimer, no warranties), 7,237 records downloaded 18 October 2026 in four pages, count verified. Raw TREATMENT_TYPE counts (Trail 2,571, ShareRoad 2,335, BikeLane 555, Sidewalk 401, Path 169, Sharrow 136, crossings 560 and 344); label inconsistencies (Poor/POOR, Excellent/EXCELLENT, Unknown 1,246/UNKNOWN 56); 74 two-district records; Unnamed Trail 691 segments. Our miles from Shape__Length in US feet: Trail 533.6, ShareRoad 574.9, BikeLane 145.8; Fairfax County Parkway Trail 20.26, Cross County Trail 20.24, Cross Country Trail 14.70, Ox Rd Trail E 11.22, Mount Vernon Trail 9.50, labelled ours. Lesson family: cleaning inconsistent labels, then filter-and-rank.',
    requiredMentions: [
      '22.1-253.13:4',
      'including computer coding',
      '8VAC20-132-51',
      'September 25, 2024',
      '22 standard units',
      '26 standard units',
      '229 of 335',
      '19,801 of 400,497',
      '455 in 2023, 453 in 2024',
      '7,237 records',
      'Cross Country Trail',
      '20.26 miles across 43 segments'
    ],
    sources: [
      { claim: 'Code of Virginia 22.1-253.13:1, Standard 1: Standards of Learning include computer science and computational thinking, including computer coding.', url: 'https://law.lis.virginia.gov/vacode/title22.1/chapter13.2/section22.1-253.13:1/' },
      { claim: 'Code of Virginia 22.1-253.13:4, Standard 4, subsection D items 14, 19 and 20.', url: 'https://law.lis.virginia.gov/vacode/title22.1/chapter13.2/section22.1-253.13:4/' },
      { claim: '8VAC20-132-51, graduation requirements for students entering ninth grade in 2018-2019 and later.', url: 'https://law.lis.virginia.gov/admincode/title8/agency20/chapter132/section51/' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Virginia access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Fairfax County GIS: Existing Bicycle and Pedestrian Network feature service.', url: 'https://services1.arcgis.com/ioennV6PpG5Xodq0/arcgis/rest/services/Existing_Bicycle_and_Pedestrian_Network/FeatureServer' },
      { claim: 'Fairfax County GIS disclaimer.', url: 'https://www.fairfaxcounty.gov/maps/disclaimer' },
      { claim: 'IANA tzdb northamerica and zone1970.tab: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Anything from the Virginia Department of Education site (doe.virginia.gov returned 403 on 17 October 2026): no CS Standards of Learning adoption year, course lists or Board guidelines are printed.',
      'A 2024 to 2025 access figure for Virginia: the Code.org trend cell repeats the 2023 to 2024 value exactly and the most recent tab dates 229 of 335 to 2023 to 2024, so it is treated as carried forward and not printed.',
      'Any cause for the fall in access or enrollment: the sources give figures, not reasons.',
      'That Cross County Trail and Cross Country Trail are the same trail: not established; posed as a question only.',
      'Official Fairfax trail lengths: not read; all miles are our sums of one download.',
      'Code.org geography, school size, gender or race figures and the Code.org state narrative page: not used.',
      'That our classes earn a Virginia credit: refused; only Board and division approved courses do.',
      'Any affiliation with the Virginia Department of Education, Fairfax County, Code.org or the College Board.'
    ]
  }
};
