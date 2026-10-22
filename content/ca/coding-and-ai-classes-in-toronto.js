'use strict';
// Toronto (cg- city page, Canada cluster Phase 1 pilot, row 3). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: what a Toronto student already codes at school under the Ontario curriculum, a City of Toronto open data
// project that turns that school coding into real data work, and the CEMC contests open to Toronto students.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md,
// each with its saved raw file in ca/src/; geography from ca/facts-geo.md; the parks file and licence in ca/src-pilots/toronto/):
//  - Ontario DCP API, Elementary Mathematics (2020), C3 coding: Grade 1 C3.1 "by writing and executing code, including code
//    that involves sequential events"; Grade 5 "including code that involves conditional statements and other control
//    structures"; Grade 6 adds "efficient"; Grade 8 "including code that involves the analysis of data in order to inform
//    and communicate decisions". Grades 2, 3, 4, 7 described in our own words from the same rows.
//  - Ontario DCP API, MTH1W (2021, de-streamed): C2.1 "use coding to demonstrate an understanding of algebraic concepts
//    including variables, parameters, equations, and inequalities"; C2.3 "read code to predict its outcome".
//  - Ontario DCP API, computer studies: ICS3U, ICS3C, ICS4U, ICS4C (2008), ICD2O (2023, Open); ICS3U "Students will design
//    software independently and as part of a team"; ICS4U "Students will use modular design principles to create complex
//    and fully documented programs"; ICS4U prerequisite is ICS3U; ICS3U has no prerequisite; "Each of the courses listed
//    above is worth one credit." (2008 PDF).
//  - EQAO: Grade 3 and Grade 6 "May 4 - June 8, 2027" (en dash in source); Grade 9 math "January 12 - February 5, 2027";
//    OSSLT "November 3 - 30, 2026"; Grade 9 results "to be included as part of a student's final course mark".
//  - PPM 128: effective "September 1, 2024"; Grades 7 to 12 devices "stored out of view" during instructional time.
//  - CEMC: CCC "Wednesday, February 17, 2027"; BCC "Monday, November 9, 2026 to Friday, November 20, 2026"; Gauss "Monday,
//    May 10, 2027 to Friday, May 21, 2027"; Pascal/Cayley/Fermat "Tuesday, February 23, 2027 and Wednesday, February 24,
//    2027"; Fryer/Galois/Hypatia "Wednesday, April 7, 2027"; Euclid "Tuesday, April 6, 2027"; "all students must
//    participate through their school"; "students can look for another local school that will allow them to join as a
//    participant"; BCC "only require familiarity with concepts covered in the mathematics curriculum"; CCC levels chosen
//    "regardless of their grade"; CCC languages C, C++, Python 2, Python 3, Java; CEMC past contests free.
//  - Skills Ontario: "2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre"; contests include
//    Coding and a team Robotics contest; registration only "through your institution's contact person".
//  - facts-geo.md: Toronto city area codes 416/437/647/942 (CNAC files via the Internet Archive); Ontario on UTC-5 from
//    1 November 2026 and UTC-4 from 14 March 2027 (IANA tzdb 2026e); India time conversions from section 3.
//    Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville are in the Toronto CMA. No populations used.
//  - City of Toronto Open Data, Parks and Recreation Facilities, parks-and-recreation-facilities-4326.csv, downloaded with
//    curl on 22 October 2026 (523,202 bytes, sha256 419b606e...21e3), licence page open.toronto.ca/open-data-licence/
//    (Open Government Licence - Toronto; attribution statement "Contains information licensed under the Open Government
//    Licence - Toronto", en dash in source; non-endorsement clause).
// Our own calculations (ca/src-pilots/toronto/count_facilities.py, run with python -I, output count_facilities.out.txt;
// checks in analysis.py / analysis.out.txt): 1,802 rows; TYPE Park 1,519, Community Centre 277, Civic Centre 6; amenity
// rows Playground 844, Ball Diamond 231, Washroom 219, Sports Field 174, Tennis Court 169, Wi-Fi 136, Basketball Court 121,
// Pickleball Court 105; 19 amenity labels; 667 rows list no amenity; 1,800 distinct LOCATIONID; one row is an exact copy
// of another apart from _id (LOCATIONID 3891); LOCATIONID 883 is both a Park row and a Community Centre row; 841 of the
// 844 Playground rows are Park rows. Amenity tags are never summed into a total.
// Lesson family: counting categories in a delimited text column (split, strip, dictionary counts) and auditing duplicates.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'type_counts = {}',
  'amenity_counts = {}',
  '',
  'with open("parks-and-recreation-facilities-4326.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        kind = row["TYPE"]',
  '        type_counts[kind] = type_counts.get(kind, 0) + 1',
  '        if row["AMENITIES"] != "None":',
  '            for amenity in row["AMENITIES"].split(","):',
  '                amenity = amenity.strip()',
  '                amenity_counts[amenity] = amenity_counts.get(amenity, 0) + 1',
  '',
  'print(type_counts)',
  'top = sorted(amenity_counts.items(), key=lambda pair: pair[1], reverse=True)',
  'for name, count in top[:8]:',
  '    print(name, count)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'TORONTO', label: 'Toronto', blurb: 'Coding and AI for Toronto students, built on the Ontario curriculum, with a City of Toronto parks data project and the CEMC contest calendar.' },
  market: CA,
  slug: 'coding-and-ai-classes-in-toronto',
  code: 'tor',
  accent: '#75544C',
  accentRationale: 'Toronto: a muted brick-clay brown, #75544C (hsv 12, .35, .46), at least 11 RGB units from every accent on the site and clear of the retired purple and cyan band; contrast 6.33 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Toronto',
    eyebrow: 'Toronto, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Toronto',
  title: 'Coding and AI Classes in Toronto | Live Online, Ages 6 to Adult',
  description: 'Live online coding, Python and AI classes for Toronto students: what Ontario schools teach, CCC and Waterloo contest dates, and a Toronto parks data project.',
  ogDescription: 'Toronto students already code in Ontario math class. Here is what the curriculum asks for, the CEMC contest dates, and live online classes that go further.',
  twitterDescription: 'Toronto coding, Python and AI classes, live online, built on the Ontario curriculum.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and AI Classes for Toronto Students',
    description: 'Level-matched live online coding for Toronto students from Grade 1 to adult: blocks, Python, AI and machine learning, CCC preparation and an ICS3U and ICS4U companion course, taught in English.'
  },

  h1: 'Coding and AI classes in Toronto',
  capsuleQ: 'Where can a Toronto student learn coding and AI with a real teacher?',
  capsule: 'Modern Age Coders teaches coding and AI live online to Toronto students from age 6 to adult, in a batch of fifteen to twenty or one to one. Most begin with Python for Teens or Python and AI for Kids, then AI and machine learning or our ICS3U and ICS4U companion. Classes run on Toronto time, and the first is free.',
  lead: 'A Toronto child meets code long before high school. Since the 2020 Ontario math curriculum, writing and reading code has been part of the Algebra strand from Grade 1, and the de-streamed Grade 9 course, MTH1W, asks students to use it again. What school rarely has room for is depth: time to build something large, break it, find the bug and explain the fix. This page sets out what the curriculum actually asks of a Toronto student at each stage, quoting the ministry where it matters. It also lays out a data project we built on a City of Toronto file, the CEMC contests a Toronto student can enter in 2026 to 2027, and how our live classes sit beside school without pretending to replace it.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Toronto.',

  picks: {
    eyebrow: 'Course picks for Toronto',
    h2: 'Four courses Toronto families ask about most',
    intro: 'Picked to match the stages of the Ontario curriculum, then checked against the student in a free first lesson before any booking.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'Typed Python for children who have outgrown blocks: loops, conditions and small games, the same ideas Ontario math asks for from Grade 3 onward, taken further.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from first program to files, functions and data, the foundation behind the Toronto parks project on this page and behind the CCC.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning built in Python on data the student can open and check, so a model is something to question rather than trust.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Runs alongside a school ICS3U or ICS4U course with extra practice and projects. It does not grant an Ontario credit; the school course does.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: '', eyebrow: 'Coding at school in Toronto',
      h2: 'What the Ontario curriculum asks of a Toronto student, grade by grade',
      intro: 'Every Toronto public school follows the Ontario curriculum. We read the expectations from the ministry&rsquo;s own curriculum service on 22 October 2026; quoted words are the ministry&rsquo;s, the rest is our summary.',
      body: [
        { kind: 'table', caption: 'Coding expectation C3.1 in Ontario elementary math (2020), by grade. Quotes from the Ontario Ministry of Education curriculum; plain summaries are ours', head: ['Grade', 'What C3.1 adds that year'], rows: [
          ['Grade 1', 'Solving problems &ldquo;by writing and executing code, including code that involves sequential events&rdquo;: instructions that run one after another'],
          ['Grades 2 to 4', 'Our summary: concurrent events in Grade 2, repeating events in Grade 3 and nested events in Grade 4, so loops inside loops by about age nine'],
          ['Grade 5', 'Code &ldquo;that involves conditional statements and other control structures&rdquo;: the first if and else'],
          ['Grade 6', 'The same structures, with the new word &ldquo;efficient&rdquo;: students now judge how well code runs, not only whether it runs'],
          ['Grade 7', 'Our summary: code driven by a defined count or a subprogram, which is a function by another name'],
          ['Grade 8', 'Code &ldquo;that involves the analysis of data in order to inform and communicate decisions&rdquo;']
        ] },
        { kind: 'p', text: 'The ladder is steeper than many parents expect. A Toronto student who reaches Grade 8 is expected, on paper, to have written code with loops, conditions, subprograms and data. In a busy classroom where coding is one strand among many, the time each child spends actually typing and debugging is small, which is where a live class with a teacher watching the screen earns its place.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9: MTH1W', p: 'The de-streamed Grade 9 math course (2021) keeps coding in. Expectation C2.1 asks students to &ldquo;use coding to demonstrate an understanding of algebraic concepts including variables, parameters, equations, and inequalities&rdquo;, and C2.3 has them read code to predict its outcome.' },
          { h3: 'Grades 11 and 12: ICS3U and ICS4U', p: 'ICS3U, Introduction to Computer Science, has no prerequisite; the ministry says students &ldquo;will design software independently and as part of a team&rdquo;. ICS4U follows it and asks for complex, fully documented programs built with modular design. Each is worth one credit.' },
          { h3: 'Grade 10: ICD2O', p: 'The ministry&rsquo;s current list adds ICD2O (2023), an open Grade 10 course on coding, artificial intelligence and cybersecurity. The 2008 document still describes the older ICS2O, which the current list no longer shows.' }
        ] },
        { kind: 'table', mt: true, caption: 'EQAO provincial assessment windows for 2026 to 2027, as published by EQAO (read 22 October 2026)', head: ['Assessment', 'Who writes it', 'Window'], rows: [
          ['Grade 3 Reading, Writing and Mathematics', 'Grade 3 students', '4 May to 8 June 2027'],
          ['Grade 6 Reading, Writing and Mathematics', 'Grade 6 students', '4 May to 8 June 2027'],
          ['Grade 9 Assessment of Mathematics', 'Students in Grade 9 math', '12 January to 5 February 2027'],
          ['OSSLT (literacy test)', 'From Grade 10', '3 to 30 November 2026']
        ] },
        { kind: 'p', text: 'EQAO says Grade 9 math results are to be included as part of a student&rsquo;s final course mark, so the January to February 2027 window matters to a Toronto Grade 9 student in a way the elementary assessments do not. Our classes do not prepare students for EQAO by drilling the format; they build the algebra and coding that MTH1W expects, and the assessment follows from that.' },
        { kind: 'callout', h3: 'What we are, and what we are not', p: 'We teach alongside a student&rsquo;s school courses and we do not grant Ontario credits. ICS3U, ICS4U and every other credit are earned at school. We are not connected with the Ontario Ministry of Education, EQAO or the Toronto school boards.' }
      ]
    },
    {
      id: 'parks', tint: 'deep', eyebrow: 'Toronto data project',
      h2: 'How many Toronto parks list a playground? A project on the city&rsquo;s own file',
      intro: 'The City of Toronto publishes its Parks and Recreation Facilities list as open data. Our students download it, count it in Python and then work out what the count does not say. The figures below are ours, not the city&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our count of the City of Toronto file, downloaded 22 October 2026 (Parks and Recreation Facilities, 1,802 rows). Counts are rows, and a row can list several amenities', head: ['Label in the file (column)', 'Rows'], rows: [
          ['Park (TYPE)', '1,519'],
          ['Community Centre (TYPE)', '277'],
          ['Civic Centre (TYPE)', '6'],
          ['Playground (AMENITIES)', '844'],
          ['Ball Diamond (AMENITIES)', '231'],
          ['Washroom (AMENITIES)', '219'],
          ['Sports Field (AMENITIES)', '174'],
          ['Tennis Court (AMENITIES)', '169'],
          ['Wi-Fi (AMENITIES)', '136'],
          ['Basketball Court (AMENITIES)', '121'],
          ['Pickleball Court (AMENITIES)', '105']
        ] },
        { kind: 'p', text: 'This is the beginner Python that prints every number in the table. It uses only the standard library, so it runs on any computer with Python 3, in the same folder as the downloaded file:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Fetch the file', p: 'Students open the dataset page on the City of Toronto Open Data portal and download the CSV named parks-and-recreation-facilities-4326.csv. On our download it had ten columns, among them TYPE, AMENITIES and ADDRESS.' },
          { h3: '2. Count by category', p: 'The TYPE column holds one label per row, so a dictionary count is enough. AMENITIES holds a comma-separated list, so each row is split, each piece is stripped of spaces, and every label is counted where it appears.' },
          { h3: '3. Audit the rows', p: 'Then they check their own data. Of the 1,802 rows, 1,800 have distinct LOCATIONID values: LOCATIONID 3891 appears twice with every column identical except _id, and LOCATIONID 883 is listed once as a Park and once as a Community Centre.' }
        ] },
        { kind: 'callout', h3: 'What the counts cannot tell you', p: 'The file says whether a park lists a playground, not how many play structures it has, how large they are, or what condition they are in. And 667 rows list no amenity at all, which means none is recorded in this file, not that the park is empty. A student who writes that sentence correctly has learned more than one who only prints 844.' },
        { kind: 'p', text: 'A good second step is the Grade 8 expectation in action: compare the 841 Park rows that list a playground with the 3 Community Centre rows that do, and decide what a fair chart would show. The file is used under the Open Government Licence - Toronto. Contains information licensed under the Open Government Licence - Toronto (<a class="cg-inline-link" href="https://open.toronto.ca/open-data-licence/">licence</a>, <a class="cg-inline-link" href="https://open.toronto.ca/dataset/parks-and-recreation-facilities/">dataset page</a>). The City does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Toronto students',
      h2: 'The CEMC contests a Toronto student can write in 2026 to 2027',
      intro: 'The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo runs the contests most Toronto schools use. Dates below are CEMC&rsquo;s North and South America dates, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC computing and math contests by grade, 2026 to 2027 (dates as listed by CEMC)', head: ['If the student is in', 'Contest', 'CEMC date'], rows: [
          ['Grade 10 or below', 'Beaver Computing Challenge, levels 5/6, 7/8 and 9/10; no coding experience needed', '9 to 20 November 2026'],
          ['Grades 7 and 8', 'Gauss math contest', '10 to 21 May 2027'],
          ['Grades 9, 10, 11', 'Pascal, Cayley and Fermat math contests', '23 and 24 February 2027'],
          ['Grades 9, 10, 11', 'Fryer, Galois and Hypatia math contests', '7 April 2027'],
          ['Final year of high school', 'Euclid math contest', '6 April 2027'],
          ['Any grade, by skill', 'Canadian Computing Competition (CCC), Junior or Senior', 'Wednesday 17 February 2027']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Through a school', p: 'CEMC says &ldquo;all students must participate through their school&rdquo;, and a student cannot register alone. Where a Toronto school does not take part, CEMC suggests students &ldquo;look for another local school that will allow them to join as a participant&rdquo;.' },
          { h3: 'The CCC in 2027', p: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027. Students pick Junior or Senior by programming skill, regardless of grade, and may write in C, C++, Python or Java. It is written at school, online and individually.' },
          { h3: 'Free past papers', p: 'CEMC keeps ten years of past contests free online, with no registration. We point students to <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">the CEMC archive</a> and teach with original problems of our own, never by copying CEMC&rsquo;s.' }
        ] },
        { kind: 'p', text: 'For CCC work in Python, the Toronto parks project above is closer to a contest than it looks: read input, split a string, count with a dictionary, sort by value. We teach that pattern early, then show students where it becomes too slow for a Senior problem. Our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers the Junior and Senior tracks, and the <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> covers Gauss to Euclid. We are not connected with CEMC or the University of Waterloo.' },
        { kind: 'p', text: 'One Toronto event outside CEMC: Skills Ontario lists its 2027 competition for 3 and 4 May 2027 at the Toronto Congress Centre, with a Coding contest and a team Robotics contest among others. Skills Ontario says students cannot register directly; entry goes through the school&rsquo;s contact person.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Toronto clocks, India clocks, and the November 2026 change',
      intro: 'Toronto keeps Eastern time, which shifts twice a year; India, where our teachers are, never shifts. The table lines the two up across the 2026 to 2027 school year.',
      body: [
        { kind: 'table', caption: 'Toronto and India time, 2026 to 2027 (offsets from the IANA time zone database, 2026e; conversions ours)', head: ['Period in Toronto', 'Toronto offset', 'India is ahead by', '4 to 7 pm weekday in Toronto is, in India', '9 am to noon Saturday in Toronto is, in India'], rows: [
          ['22 October to 1 November 2026', 'UTC-4', '9 hours 30 minutes', '1:30 to 4:30 am the next day', '6:30 to 9:30 pm'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '10 hours 30 minutes', '2:30 to 5:30 am the next day', '7:30 to 10:30 pm'],
          ['From 14 March 2027', 'UTC-4', '9 hours 30 minutes', '1:30 to 4:30 am the next day', '6:30 to 9:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'We confirm in Toronto time', p: 'Every class time we send is written in Eastern time first. Before clocks go back on 1 November 2026 and forward on 14 March 2027, we re-confirm each class in Toronto time, so nobody has to do the arithmetic.' },
          { h3: 'Toronto phone numbers', p: 'Numbers with the 416, 437, 647 and 942 area codes work in the form on this page. Type the ten digits; the +1 is already there.' },
          { h3: 'A bug worth making', p: 'Students who write a reminder script with a fixed UTC-4 offset watch it go wrong on 1 November 2026. Fixing it with the America/Toronto zone teaches more about dates than any worksheet.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the first sequence in Grade 1 to ICS4U and beyond',
    intro: 'Grades are a rough guide; the free class places each student by what they can already do.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Sequences and loops', p: 'Blocks, short programs and puzzles the child explains aloud, matching the sequential and repeating events of C3.1.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Into typed code', p: 'Python by Grade 5 or 6 for most, with conditions, functions and a first data set before Grade 8 asks for one.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 and 10', h3: 'MTH1W and contests', p: 'Python taken properly, algebra through code, and a first CCC Junior attempt for students who want one.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 11 and 12', h3: 'ICS3U, ICS4U and AI', p: 'Support beside the school computer science courses, and machine learning for students heading to university programs.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in Toronto when AI writes code?',
    intro: 'Because someone still has to know whether the code, and the number it prints, is right.',
    p1: 'Ask an AI assistant to count playgrounds in the Toronto file and it will hand back a script in seconds. It may not notice the duplicated row, the park that is also a community centre, or that a blank amenity list means unrecorded rather than absent. Those are judgments, and they come from having written the loop yourself.',
    p2: 'That is the habit we teach: think through the problem, write the code, then question the output before believing it. Students use AI tools as they grow older, under age rules we follow, but they use them the way an editor uses a spell checker, not the way a student copies an answer key.',
    closer: 'Ontario put coding in the math curriculum so that students learn to reason in steps; that reasoning is exactly what an AI tool cannot do on the student&rsquo;s behalf.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live class for Toronto and the rest of the GTA',
    intro: 'Classes are online, so a student in Scarborough and one in Etobicoke share the same teacher without crossing the city.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Around the GTA', p: 'Families in Mississauga, Brampton, Markham, Vaughan, Richmond Hill and Oakville join the same classes as Toronto students, on the same Eastern time clock.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty students at one level, or a teacher to yourself for faster progress or for ICS4U and CCC work.' },
      { h3: 'Ontario grades', p: 'Teachers plan in Ontario grades, not ages or years, and know where C3.1, MTH1W and ICS3U sit in the school year. Marked school work always stays the student&rsquo;s own.' },
      { h3: 'Phones away', p: 'Ontario&rsquo;s PPM 128 has had Grade 7 to 12 phones stored out of view in class time since 1 September 2024. Our classes run on a laptop or desktop, at home, after school.' },
      { h3: 'Start free', p: 'The first class is a real lesson that ends with a suggested level and course. No card is asked for.' }
    ],
    spec: { title: 'No Toronto office', p: 'Modern Age Coders has no centre in Toronto and claims none. Every class is live and online, taught from India, and a student needs a computer with sound and a steady connection.' }
  },

  fees: {
    h2: 'What classes cost for Toronto families',
    intro: 'Three lines, each with the currency code printed beside the fee.',
    first: 'One full live lesson at no charge, finishing with a recommended level, course and time.',
    group: 'The monthly fee for a batch of fifteen to twenty students working at the same stage.',
    private: 'The monthly fee for one teacher and one student, at times you choose.',
    closer: 'Toronto families pay the same monthly fee as families anywhere else in Canada. Nothing is billed until after the free lesson, once the course and the time are agreed; the pricing page sets out missed classes and holidays.'
  },

  reviewsH2: 'What families and students have written about us on Google',

  book: {
    h2: 'Tell us about your Toronto student',
    intro: 'We set the first task by level: a looping animation for a Grade 2 child, a Python guessing game for a Grade 6 student, or the parks file for a high school student who wants real data.',
    success: 'Thank you. The team will be in touch soon about a class for Toronto.'
  },

  faq: {
    h2: 'Toronto coding and AI questions',
    intro: 'The questions Toronto parents and students send us most often.',
    items: [
      { q: 'Do you have coding classes in Toronto?', a: 'Yes, live and online. Modern Age Coders has no Toronto centre; students join from home with a real teacher, in a batch of fifteen to twenty or one to one.' },
      { q: 'What age can a child start coding for kids classes in Toronto?', a: 'From age 6, which lines up with Grade 1, the year Ontario math first asks children to write and run code. Adults are welcome too.' },
      { q: 'Do Toronto schools already teach coding?', a: 'Yes. The 2020 Ontario math curriculum includes coding expectations from Grade 1 to Grade 8, and the Grade 9 course MTH1W asks students to use coding for algebra. ICS3U and ICS4U are optional high school computer science courses.' },
      { q: 'Will your classes give my teen an Ontario credit?', a: 'No. We do not grant Ontario credits. Credits such as ICS3U and ICS4U are earned at school; our companion course runs alongside them with extra practice and projects.' },
      { q: 'Do you teach robotics classes in Toronto?', a: 'Not robot hardware. We teach the coding and AI side: Python, logic and data, which is the programming a robotics team needs. Families who want to build physical robots should look at a school or local robotics club, and our classes pair well with one.' },
      { q: 'Are there Python classes for Toronto teens?', a: 'Yes. Python for Teens takes a student from a first program to files, functions and data, and it is the base for our AI, machine learning and CCC courses.' },
      { q: 'What is the best first course for a Toronto beginner?', a: 'It depends on age, not on a ranking. Under about 9, blocks and Scratch; from about 9 to 12, Python and AI for Kids; from 13, Python for Teens. The free class confirms the right one.' },
      { q: 'Can you help a Toronto student prepare for the CCC?', a: 'Yes. CEMC lists the 2027 CCC for Wednesday 17 February 2027. Students write it through their school, and we prepare them with original problems in Python, C++ or Java.' },
      { q: 'What time are classes for Toronto families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Eastern time.' },
      { q: 'Will my Toronto phone number work in the form?', a: 'Yes. Toronto numbers with the 416, 437, 647 or 942 area codes work; enter the ten digits without the leading 1.' },
      { q: 'Do you teach students outside Toronto in the GTA?', a: 'Yes. Students in Mississauga, Brampton, Markham, Vaughan, Richmond Hill and Oakville take the same online classes on the same Eastern time schedule.' },
      { q: 'How do I see the fees?', a: 'The fees section on this page shows the free first class, the monthly batch fee and the monthly one-to-one fee, with the currency code beside each figure. Billing starts only after the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Toronto and Ontario students',
    html: 'For the wider province, read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, or start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Contest students can go to <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> and <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a>, and math help is on <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Toronto and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-tor .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.2rem); }
.cg-root.cg-tor .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-tor .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-tor .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-tor .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-tor .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-tor .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tor #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.82rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-tor .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-tor .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) C3.1 coding by grade (Grade 1 sequential events; Grade 5 conditional statements; Grade 6 efficient code; Grade 8 analysis of data); MTH1W (2021, de-streamed) C2.1 and C2.3; computer studies list ICS3U, ICS3C, ICS4U, ICS4C (2008) and ICD2O (2023, Open), ICS3U no prerequisite, ICS4U after ICS3U, one credit each; EQAO 2026-27 windows (Grades 3 and 6 4 May to 8 June 2027; Grade 9 math 12 January to 5 February 2027, counts in the course mark; OSSLT 3 to 30 November 2026); PPM 128 from 1 September 2024. CEMC 2026-27 dates (BCC, Gauss, PCF, FGH, Euclid, CCC) and the through-a-school rule; Skills Ontario 2027 at the Toronto Congress Centre; Toronto area codes and Eastern time offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'City of Toronto Open Data, Parks and Recreation Facilities (Open Government Licence - Toronto), CSV downloaded with curl on 22 October 2026 and counted with our script count_facilities.py (python -I): 1,802 rows; TYPE Park 1,519, Community Centre 277, Civic Centre 6; amenity rows Playground 844, Ball Diamond 231, Washroom 219, Sports Field 174, Tennis Court 169, Wi-Fi 136, Basketball Court 121, Pickleball Court 105; 667 rows list no amenity; 1,800 distinct LOCATIONID, LOCATIONID 3891 duplicated, LOCATIONID 883 both park and community centre. Labelled as ours. Lesson family: counting categories in a delimited column and auditing duplicates.',
    requiredMentions: [
      'Pickleball Court',
      'LOCATIONID 3891',
      'Open Government Licence - Toronto',
      'Toronto Congress Centre',
      '416, 437, 647 and 942',
      'algebraic concepts including variables',
      'analysis of data in order to inform',
      '12 January to 5 February 2027',
      '841 Park rows',
      '667 rows list no amenity'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 1 to 8 math strands (C3.1 coding), MTH1W course and strands (C2.1, C2.3), computer studies course list and ICS descriptions.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_8___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics (human-readable home of the API content).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Ontario Computer Studies, Grades 10 to 12 (2008): ICS2O strands, one credit per course.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'EQAO: 2026-27 assessment windows; Grade 9 results in the final course mark.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Ontario PPM 128: personal mobile devices in schools, effective 1 September 2024.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-128' },
      { claim: 'CEMC: 2026-27 contest dates, through-a-school rule, CCC levels and languages, free past contests.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Skills Ontario Competition 2027: dates, Toronto Congress Centre, contest list, registration through an institution.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'City of Toronto Open Data: Parks and Recreation Facilities dataset page.', url: 'https://open.toronto.ca/dataset/parks-and-recreation-facilities/' },
      { claim: 'City of Toronto: Open Government Licence - Toronto (attribution statement, non-endorsement).', url: 'https://open.toronto.ca/open-data-licence/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Toronto or GTA population figure: StatCan was not reachable live, so no population is printed.',
      'That ICD2O replaced ICS2O: no saved source says so; the two listings are shown side by side.',
      'That our classes earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'That we run robotics hardware classes: refused; we teach the programming side only.',
      'A total of amenities in the parks file: not computed, since one row lists several amenities.',
      'That the parks file is refreshed on a schedule: not quoted, not read in a raw source.',
      'CEMC and Skills Ontario fees: left out of the copy on purpose (currency-neutral page).',
      'Names of Toronto schools, school boards results or private people: not used.',
      'Any affiliation with the City of Toronto, the Ontario Ministry of Education, EQAO, CEMC, the University of Waterloo or Skills Ontario.'
    ]
  }
};
