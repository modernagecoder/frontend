'use strict';
// Vaughan (cg- city page, Canada cluster Wave 2, row 130). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: what one live online class actually contains, step by step, for a Vaughan student; a Python path from a first
// print() to a data project, each step tied to an Ontario expectation it extends; a York Region bike path file (rows
// supplied by Vaughan) summed by facility class in Python; CEMC contests through a school; Eastern time and the
// 1 November 2026 change.
// Sources (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md, each with its saved raw
// file in ca/src/; geography from ca/facts-geo.md; the bike path files, licence and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-vaughan/):
//  - Ontario DCP API, Elementary Mathematics (2020): Grade 1 C3.2 "read and alter existing code, including code that
//    involves sequential events, and describe how changes to the code affect the outcomes"; Grade 6 C3.2 "describe how
//    changes to the code affect the outcomes and the efficiency of the code"; Grade 7 C3.1 "events influenced by a defined
//    count and/or subprogram and other control structures"; Grade 8 C3.1 "the analysis of data in order to inform and
//    communicate decisions".
//  - Ontario DCP API, MTH1W (2021): C2.2 "create code by decomposing situations into computational steps in order to
//    represent mathematical concepts and relationships". ICD2O (2023) C2 "use fundamental programming concepts to write
//    simple programs". ICS4U "Students will use modular design principles to create complex and fully documented
//    programs, according to industry standards"; ICS3U no prerequisite.
//  - EQAO: Grade 9 math "January 12 - February 5, 2027" (en dash in source); results "to be included as part of a
//    student's final course mark".
//  - CEMC: CCC "Wednesday, February 17, 2027"; "CCC participants may use C, C++, Python 2, Python 3, or Java."; Python
//    caveat "it may not always be possible to achieve a perfect score with a particular language choice (for example,
//    Python or Java)"; "all students must participate through their school"; BCC "Monday, November 9, 2026 to Friday,
//    November 20, 2026"; Gauss "Monday, May 10, 2027 to Friday, May 21, 2027"; CS Circles "[Python Programming Tutorials]".
//  - facts-geo.md: Vaughan is in the Toronto CMA (with Richmond Hill, Markham, Brampton); 905 belt overlay 289/365/742/905;
//    Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e); India time conversions ours.
//  - York Region Open Data, Bike Path (item c1c2100c9f22435f982af79c7385eb1a; portal record on insights-york saved as
//    bikepath-portal-record.json, org "The Regional Municipality of York"). Item description: "The data is a line network
//    representing existing bike facilities within York Region." Layer OpenData/Society/MapServer/0, NAD83 UTM zone 17N
//    (wkid 26917, metres). Query SOURCE = 'Vaughan' returned 238 rows, downloaded with curl on 22 October 2026
//    (bike-path-source-vaughan.json). vaughan.ca returned 403, so the City's own portal was not used.
//  - York Region Open Data Licence (PDF item 78cc02388af248c0b7a30eda6adfade0, owner YorkMunicipalGovt, saved):
//    "Use the Information commercially"; credit statement "Contains public sector information made available under The
//    Regional Municipality of York's Open Data Licence"; non-endorsement ("suggests any official status").
// Our own calculations (vaughan_paths.py and vaughan_checks.py, run with python -I, outputs saved as .out.txt): 238 rows;
// geometry length by class: Shared Pathway (in-boulevard) 36.0 km, Off-Road Multi-Use Trail 26.7, Cycle Track 20.6,
// Paved Shoulder 10.1, Cycle Track (Region Maintained) 8.0, Bike Lane 7.8, Off-Road Hiking Trail 3.8, Shared Roadway
// (signed route) 0.9, Painted Bike Lane (Region) 0.4, Connection 0.1; total 114.2 km of line rows (our sum of rows, not a
// published figure); OWNER: none 112, CITY OF VAUGHAN 88, York Region 21 + YORK REGION 1, UNC 12, Vaughan 4; ACTUAL_LENGTH
// blank in 6 rows and more than 0.5 m from the geometry length in 20; SURFACE blank 178, "Ashpalt" 2; longest row 5,738 m
// (Cycle Track).
// Lesson family: summing a numeric column per group (defaultdict), unit conversion, normalising labels with strip() and
// upper(), and knowing which differences a program must not merge on its own.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  'from collections import defaultdict',
  '',
  'with open("bike-path-source-vaughan.json", encoding="utf-8") as f:',
  '    rows = [feat["attributes"] for feat in json.load(f)["features"]]',
  '',
  'km_by_class = defaultdict(float)',
  'owners = defaultdict(int)',
  'for row in rows:',
  '    km_by_class[row["BIKE_FACILITY_CLASS"]] += row["SHAPE.STLength()"] / 1000',
  '    owner = (row["OWNER"] or "no owner listed").strip().upper()',
  '    owners[owner] += 1',
  '',
  'print(len(rows), "rows")',
  'for name, km in sorted(km_by_class.items(), key=lambda p: p[1], reverse=True):',
  '    print(f"{name}: {km:.1f} km")',
  'print(dict(owners))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'VAUGHAN', label: 'Vaughan', blurb: 'Live online coding and Python for Vaughan students: what happens inside one class, a Python path tied to Ontario expectations, and a York Region bike path data project.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-vaughan',
  code: 'pv',
  accent: '#1C6648',
  accentRationale: 'Vaughan: a muted conifer green, #1C6648, allocated for this row; contrast 6.51 on the paper #FBF8F2 (6.12 and 5.60 on the two darker tints), clear of the retired purple and cyan band',
  pageType: 'city',
  place: {
    name: 'Vaughan',
    eyebrow: 'Vaughan, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Vaughan',
  title: 'Online Coding and Python Classes in Vaughan | Live Teacher',
  description: 'Live online coding and Python classes for Vaughan students aged 6 to adult: how a class runs, a Python path tied to Ontario math, and York Region cycling data.',
  ogDescription: 'What a live online coding class really involves for a Vaughan student, a Python route from first program to real data, and the CEMC contest dates for 2026 to 2027.',
  twitterDescription: 'Vaughan coding and Python classes, taught live online by a real teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Vaughan Students',
    description: 'Live online coding and Python for Vaughan students from Grade 1 to adult, in a batch of fifteen to twenty or one to one: blocks, Python, data projects, CCC preparation and an ICS3U and ICS4U companion.'
  },

  h1: 'Online coding and Python classes in Vaughan',
  capsuleQ: 'Are there live online coding and Python classes for Vaughan students?',
  capsule: 'Yes. Modern Age Coders teaches coding and Python live online to Vaughan students from age 6 to adult: a teacher on screen, code typed and checked while the class is running, in a group of fifteen to twenty students or with a private teacher. Children start with Python and AI for Kids, teens with Python for Teens. The first class is free.',
  lead: '"Online" covers a lot of things that are not teaching: a video playlist, a worksheet emailed on Mondays, a chatbot that answers questions at midnight. A live class is narrower and harder to fake. There is a teacher, there is a time, and there is a student whose code is on the shared screen being read line by line. This page explains, step by step, what that looks like for a Vaughan student, then lays out a Python route from the first line of code to a project on real data. The data comes from York Region, which publishes the cycling routes that Vaughan supplied, and we use it to show how a beginner\'s loop turns into a measured answer that still needs checking.',
  wa: 'Hello Modern Age Coders, I would like a free live online coding or Python class for a student in Vaughan.',

  picks: {
    eyebrow: 'Python picks for Vaughan',
    h2: 'Four courses Vaughan students are placed into most',
    intro: 'Each one is taught live. The free first class decides which, by what the student can already write.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for children: turtle drawings, guessing games and small AI projects, with the teacher watching every program run.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'The full route from print() to files, functions and data, which is the course behind the York Region bike path project on this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults in Vaughan who want automation, data or a career change, on evenings or weekend mornings.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Extra practice and projects beside a school ICS3U or ICS4U course. We do not grant Ontario credits; the school does.' }
    ]
  },

  sections: [
    {
      id: 'live', tint: '', eyebrow: 'Inside one class',
      h2: 'What actually happens in a live online Python class',
      intro: 'Below is the order of one of our teens\' Python lessons, written as an example plan. Lengths vary by course and level, but the order holds: the student types more than the teacher talks.',
      body: [
        { kind: 'table', caption: 'One live lesson for a Grade 9 Python student in Vaughan, in order (an example plan written by us)', head: ['Step', 'What the teacher does', 'What the student does'], rows: [
          ['1. Warm-up', 'Puts last week\'s program on the shared screen with one line broken', 'Finds the broken line and says why it fails before touching the keyboard'],
          ['2. New idea', 'Shows one new construct, for example a dictionary that counts', 'Predicts the output of a four-line example, then runs it'],
          ['3. Build', 'Watches the student\'s own editor and stays quiet unless the student is stuck for long', 'Writes a small program that uses the new idea on a fresh problem'],
          ['4. Break it', 'Changes one input so the program gives a wrong answer', 'Traces the values by hand and fixes the logic, not just the symptom'],
          ['5. Explain', 'Asks the student to talk through the finished code', 'Explains each block in plain words, as if to a classmate'],
          ['6. Next step', 'Sets one short task and notes what to revisit', 'Writes the task down and asks anything left unclear']
        ] },
        { kind: 'p', text: 'Steps 4 and 5 are where a live class earns its time. A recorded video cannot change the input on a student\'s program, and a chatbot will happily fix the code for them. Our teachers do neither the typing nor the thinking for the student; they ask the next question.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Code on a shared screen', p: 'The student writes in their own editor and shares it, so the teacher reads the real code, typos included. Nothing is pasted in from a finished answer.' },
          { h3: 'A batch of fifteen to twenty', p: 'Everyone in the batch is at the same stage. The teacher calls on students by name, and code from two or three of them is read aloud each class.' },
          { h3: 'One to one', p: 'One teacher, one student, a pace set by that student. Families pick it for faster progress, for ICS4U project work or for CCC practice.' }
        ] }
      ]
    },
    {
      id: 'path', tint: 'tint', eyebrow: 'A Python path',
      h2: 'From a first print() to a real project, step by step',
      intro: 'Vaughan students already meet code in Ontario math class. Each step below is ours; the right-hand column quotes the Ontario expectation it builds on, read from the ministry curriculum service on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Our Python path for Vaughan students, matched to Ontario expectations (expectation wording quoted from Ontario\'s curriculum service; the steps are ours)', head: ['Our step', 'What the student can do after it', 'Ontario expectation it extends'], rows: [
          ['1. Run and change', 'Run a short program, change one value, explain the new output', 'Grade 1 C3.2: &ldquo;read and alter existing code&rdquo; and describe how changes affect the outcomes'],
          ['2. Loops and choices', 'Write for loops and if statements without copying an example', 'Grade 6 C3.2: changes to &ldquo;the outcomes and the efficiency of the code&rdquo;'],
          ['3. Functions', 'Split a problem into named functions with inputs and a return value', 'Grade 7 C3.1: events influenced by &ldquo;a defined count and/or subprogram&rdquo;'],
          ['4. Algebra in code', 'Model a rule with variables, then test it against values', 'MTH1W C2.2: &ldquo;create code by decomposing situations into computational steps&rdquo;'],
          ['5. Data', 'Read a file, count and sum by group, and state what the result leaves out', 'Grade 8 C3.1: code that analyses data so students can &ldquo;communicate decisions&rdquo;'],
          ['6. A project', 'Plan, build, test and document a program of several hundred lines', 'ICS4U: &ldquo;modular design principles to create complex and fully documented programs&rdquo;']
        ] },
        { kind: 'p', text: 'The numbering is a sequence, not a calendar. A Grade 5 child may spend months on steps 1 and 2 with games and turtle drawings; an adult with spreadsheet experience may reach step 5 within weeks. What we never do is skip step 1. A student who cannot predict what a changed line will print is not ready for a project, whatever their age.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9 and the EQAO window', p: 'EQAO lists the Grade 9 Assessment of Mathematics for 12 January to 5 February 2027 and says the results are to be included in the student\'s final course mark. Step 4 is where our classes overlap most with MTH1W.' },
          { h3: 'Grade 10: ICD2O', p: 'The Ontario curriculum service lists ICD2O (2023), whose programming strand asks students to &ldquo;use fundamental programming concepts to write simple programs&rdquo;. Steps 1 to 3 cover that ground in Python.' },
          { h3: 'Grades 11 and 12', p: 'ICS3U has no prerequisite and ICS4U follows it. Our companion course runs alongside both with practice and projects; the credit is earned at school.' }
        ] }
      ]
    },
    {
      id: 'bike', tint: 'deep', eyebrow: 'Vaughan data project',
      h2: 'How many kilometres of cycling routes did Vaughan supply to the regional file?',
      intro: 'York Region publishes a Bike Path layer for the whole region. Each line records who supplied it, so a student can pull out the lines whose SOURCE is Vaughan and measure them. Every number below is our own count of that download.',
      body: [
        { kind: 'table', caption: 'Our sum of line lengths in the York Region Bike Path layer, rows with SOURCE = Vaughan (238 rows, downloaded 22 October 2026). Lengths come from each line\'s geometry in metres, converted to km', head: ['Facility class in the file', 'Kilometres of line'], rows: [
          ['Shared Pathway (in-boulevard)', '36.0'],
          ['Off-Road Multi-Use Trail', '26.7'],
          ['Cycle Track', '20.6'],
          ['Paved Shoulder', '10.1'],
          ['Cycle Track (Region Maintained)', '8.0'],
          ['Bike Lane', '7.8'],
          ['Off-Road Hiking Trail', '3.8'],
          ['Shared Roadway (signed route)', '0.9'],
          ['Painted Bike Lane (Region)', '0.4'],
          ['Connection', '0.1']
        ] },
        { kind: 'p', text: 'The script below printed every figure in the table. It needs nothing beyond Python\'s built-in modules and reads the JSON file saved from the York Region map service:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why a defaultdict', p: 'A defaultdict(float) starts every new facility class at 0.0, so the loop can add a length without first checking whether the class exists. It is the same counting idea as a tally chart, with decimals.' },
          { h3: 'Two length columns', p: 'The file has ACTUAL_LENGTH and a geometry length. ACTUAL_LENGTH is blank in 6 of the 238 rows and differs from the geometry by more than half a metre in 20, so our script sums the geometry, which every row has.' },
          { h3: 'Labels that almost match', p: 'The OWNER column holds &ldquo;CITY OF VAUGHAN&rdquo; on 88 rows and &ldquo;Vaughan&rdquo; on 4. Calling upper() merges York Region with YORK REGION, but the two Vaughan labels stay apart, and 112 rows list no owner at all.' }
        ] },
        { kind: 'callout', h3: 'What the 114.2 km does and does not say', p: 'Adding the rows gives 114.2 km of line that Vaughan supplied to the regional file. That is our sum, not a figure York Region or the City publishes, and it is not the length of every route in Vaughan: lines supplied by others are excluded, and two lines can describe the same stretch. A student who writes that sentence has understood the data.' },
        { kind: 'p', text: 'A sensible next task is a judgment call, not more code: should &ldquo;CITY OF VAUGHAN&rdquo; and &ldquo;Vaughan&rdquo; be merged, and what should a program do with 112 blank owners? Students write the rule down before writing the line that applies it. The data is used under the York Region Open Data Licence: contains public sector information made available under The Regional Municipality of York\'s Open Data Licence (<a class="cg-inline-link" href="https://insights-york.opendata.arcgis.com/">York Region open data</a>). Nothing here is endorsed by York Region.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and clocks',
      h2: 'Contests a Vaughan student can enter, and the time difference to India',
      intro: 'Contest dates are the North and South America dates posted by CEMC, the contest centre at the University of Waterloo, as read on 22 October 2026. Clock offsets follow IANA tzdb release 2026e.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'CCC in Python', p: 'CEMC lists the 2027 Canadian Computing Competition for Wednesday 17 February 2027 and allows C, C++, Python 2, Python 3 or Java. CEMC also warns that a perfect score may not always be possible in Python or Java, which is why our Senior students learn to time their code.' },
          { h3: 'Through a school only', p: 'CEMC does not take entries from individuals; a school registers its own students. A Vaughan student whose school does not run a contest can ask another local school to include them.' },
          { h3: 'Younger students', p: 'The Beaver Computing Challenge runs 9 to 20 November 2026 and needs no coding experience. Gauss, for Grades 7 and 8, runs 10 to 21 May 2027.' }
        ] },
        { kind: 'table', mt: true, caption: 'Two sample Vaughan class times converted for our teachers in India across this school year (tzdb 2026e offsets; the arithmetic is ours)', head: ['Period', 'Vaughan offset', 'Tuesday 6:30 pm in Vaughan is', 'Saturday 10:00 am in Vaughan is'], rows: [
          ['Until 1 November 2026', 'UTC-4', '4:00 am Wednesday, India time', '7:30 pm Saturday, India time'],
          ['From 1 November 2026 until 14 March 2027', 'UTC-5', '5:00 am Wednesday, India time', '8:30 pm Saturday, India time'],
          ['From 14 March 2027', 'UTC-4', '4:00 am Wednesday, India time', '7:30 pm Saturday, India time']
        ] },
        { kind: 'p', text: 'Our teachers work in India, so a Vaughan after-school class falls in their early morning. That is the teacher\'s problem to solve, not the family\'s: each confirmation we send gives Eastern time before anything else, and we re-confirm the timetable before the clocks change on 1 November 2026 and again on 14 March 2027. CEMC also runs Computer Science Circles, free <a class="cg-inline-link" href="https://cscircles.cemc.uwaterloo.ca/">Python tutorials</a> that make good homework between classes. CEMC and the University of Waterloo have no link with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Where a Vaughan student usually starts',
    intro: 'Age is only a first guess. The code a student actually writes in the free class settles the level.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks first', p: 'Sequences, loops and short puzzles in blocks, explained aloud, before any typing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Typed Python', p: 'Steps 1 to 3 of the path: running, changing and writing small programs and games.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Python and data', p: 'Steps 3 to 6, a data project like the bike path file, and CCC Junior for those who want it.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Python for work', p: 'The same path at an adult pace, aimed at automation, data and the jobs that use them.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'If AI can write Python, what is a Vaughan student learning?',
    intro: 'How to tell whether the Python an AI tool writes is right, which is a skill only writing it yourself builds.',
    p1: 'An AI assistant asked for the kilometres of Vaughan cycling routes would sum something and print a confident number. It would not stop to ask which length column to trust, whether two owner labels mean the same city, or whether the lines Vaughan supplied are the whole network. Those questions decided every figure on this page.',
    p2: 'So we teach thinking before tools. Students solve the problem, write the code and question the output; later, older students use AI assistants under the age rules we follow, as a second opinion they must check, never as a way to copy an answer.',
    closer: 'A student who can explain why 114.2 km is not the length of every route in Vaughan has learned the part of programming that does not get automated.',
    blogAnchor: 'our essay on learning to code beside AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Vaughan, from Woodbridge to Maple',
    intro: 'Lessons are online, so Concord, Kleinburg, Thornhill and Woodbridge students join the same teacher without driving anywhere.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Nearby cities', p: 'Richmond Hill, Markham, Brampton and Toronto students sit in the same groups, all keeping Eastern time like Vaughan.' },
      { h3: 'What the student needs', p: 'A laptop or desktop with a keyboard, a microphone, and Python installed with our help in the first class. Tablets are fine for blocks, not for Python.' },
      { h3: 'School vocabulary', p: 'Our teachers think in Ontario grades and course codes, so a parent can say Grade 8 or MTH1W and be understood at once. Marked school work stays the student\'s own.' },
      { h3: 'Group or private', p: 'Groups hold fifteen to twenty students working at one stage; private lessons pair one teacher with one student. Both follow the same syllabus.' },
      { h3: 'First class free', p: 'A real lesson, not a sales call. It ends with a suggested course, a level and a time, and no card is asked for.' }
    ],
    spec: { title: 'No Vaughan centre', p: 'Modern Age Coders has no office or classroom in Vaughan and claims none. Every class is live online, taught from India, and needs a steady connection.' }
  },

  fees: {
    h2: 'Fees for Vaughan families',
    intro: 'Each line shows the fee in your own currency, with its code printed beside it.',
    first: 'A free live first lesson that ends with a recommended course and level for the student.',
    group: 'The monthly fee for a batch of fifteen to twenty students at the same stage.',
    private: 'The monthly fee for one teacher with one student, at agreed times.',
    closer: 'Living in Vaughan does not change the fee: it matches the rest of Canada. Billing begins only once a course and a time are agreed after the free lesson; missed classes and holidays are set out on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Book a free live class for a Vaughan student',
    intro: 'Tell us the grade or age. A Grade 3 child gets a looping animation, a Grade 7 student a Python quiz game, and a teen or adult who wants data can start on the bike path file.',
    success: 'Thank you. The team will contact you shortly about a class for Vaughan.'
  },

  faq: {
    h2: 'Vaughan online coding and Python questions',
    intro: 'What Vaughan parents and students ask us before the first class.',
    items: [
      { q: 'What does a live online coding class mean in practice?', a: 'A teacher on video at a fixed time, the student sharing their own editor, and code written and checked during the class. It is not a recorded course or a chatbot.' },
      { q: 'Are your Python classes for Vaughan students in person?', a: 'No. Modern Age Coders has no Vaughan centre. Every class is live online, so students in Woodbridge, Maple, Concord, Kleinburg or Thornhill join from home.' },
      { q: 'How many students are in a Vaughan class?', a: 'A batch has fifteen to twenty students at the same stage. A one to one class has one student with one teacher. The course content is the same in both.' },
      { q: 'At what age can my child start Python?', a: 'Most children are ready for typed Python at about 9 or 10. Younger children, from age 6, start with blocks. The free class checks readiness rather than going by age alone.' },
      { q: 'Does Python help with Grade 9 math in Ontario?', a: 'Yes, in a specific way. MTH1W includes coding expectations in its algebra strand, and EQAO says the Grade 9 math assessment counts in the final course mark. Writing algebra as code is part of our path.' },
      { q: 'Can a Vaughan teen write the CCC in Python?', a: 'Yes. CEMC allows Python 3 for the CCC on Wednesday 17 February 2027. Entry goes through the school; our preparation uses problems we write ourselves.' },
      { q: 'Do your classes count as an Ontario credit?', a: 'No, and we do not grant Ontario credits. Credits come only from a school; our ICS3U and ICS4U companion adds practice alongside the school course.' },
      { q: 'When are online classes held for Vaughan?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Do adults in Vaughan take these classes?', a: 'Yes. Adults follow the same Python path at their own pace, often towards data work or automation, in a batch or one to one.' },
      { q: 'Will a 905 or 289 phone number work in the form?', a: 'Yes. Vaughan numbers in the 289, 365, 742 or 905 area codes work. Enter all ten digits; the country code +1 is set for you.' },
      { q: 'How much do the classes cost?', a: 'Scroll to the fees section: it shows the free first lesson, then a monthly group fee and a monthly private fee in your own currency. You pay nothing before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Vaughan and Ontario students',
    html: 'Read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> for the province, or <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a> next door. Contest students can use <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>, and school course help is on <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U computer science help</a>. All of Canada is on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Vaughan and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/ics3u-computer-science-help', label: 'ICS3U help' }
  ],

  personalityCss: `
.cg-root.cg-pv .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-pv .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-pv .cg-eyebrow { letter-spacing: 0.08em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-pv .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-pv .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-pv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pv #bike code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.85rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-pv .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-pv .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 1 C3.2, Grade 6 C3.2, Grade 7 C3.1, Grade 8 C3.1; MTH1W (2021) C2.2; ICD2O (2023) C2; ICS3U no prerequisite; ICS4U modular design; EQAO Grade 9 window 12 January to 5 February 2027, counts in the course mark. CEMC 2026-27: CCC Wednesday 17 February 2027 with its language list and Python caveat, through-a-school rule, BCC 9 to 20 November 2026, Gauss 10 to 21 May 2027, CS Circles. Vaughan in the Toronto CMA, 905 belt area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'York Region Open Data, Bike Path layer (York Region Open Data Licence), the 238 rows with SOURCE = Vaughan downloaded with curl on 22 October 2026 and summed with our script vaughan_paths.py (python -I): geometry length by facility class, Shared Pathway (in-boulevard) 36.0 km to Connection 0.1 km, 114.2 km in all (our sum); OWNER labels CITY OF VAUGHAN 88, Vaughan 4, York Region 22 after upper(), UNC 12, blank 112; ACTUAL_LENGTH blank in 6 rows and off by more than 0.5 m in 20. Labelled as ours. Lesson family: per-group sums with defaultdict, unit conversion and label normalisation.',
    requiredMentions: [
      'Cycle Track (Region Maintained)',
      'Painted Bike Lane (Region)',
      '114.2 km',
      'blank in 6 of the 238 rows',
      'starts every new facility class at 0.0',
      'Shared Roadway (signed route)',
      'Tuesday 6:30 pm in Vaughan',
      'Concord, Kleinburg, Thornhill and Woodbridge',
      '289, 365, 742 or 905'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: elementary math C3 coding expectations (Grades 1, 6, 7, 8), MTH1W C2.2, ICD2O C2 and ICS course descriptions.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_7___strands?depth=4' },
      { claim: 'Ontario curriculum site, Elementary Mathematics.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: 2026-27 assessment windows; Grade 9 results in the final course mark.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: CCC 2027 date, languages and Python caveat.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CEMC: contest dates for 2026/27 (BCC, Gauss).', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'York Region Open Data: Bike Path item (description, line network of existing bike facilities).', url: 'https://www.arcgis.com/home/item.html?id=c1c2100c9f22435f982af79c7385eb1a' },
      { claim: 'York Region: Bike Path map service layer queried for SOURCE = Vaughan.', url: 'https://ww8.yorkmaps.ca/arcgis/rest/services/OpenData/Society/MapServer/0' },
      { claim: 'York Region Open Data Licence (commercial use, credit statement, non-endorsement), saved PDF.', url: 'https://www.arcgis.com/home/item.html?id=78cc02388af248c0b7a30eda6adfade0' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Vaughan or York Region population: StatCan was not reachable live.',
      'That 114.2 km is the length of Vaughan\'s cycling network: refused; it is our sum of the rows Vaughan supplied to the regional file.',
      'Use of the City of Vaughan open data portal: vaughan.ca returned 403 and was not retried around.',
      'A fixed class length in minutes: not published in brand facts, so the class walk-through gives order, not minutes.',
      'That our classes earn or count toward an Ontario credit: refused.',
      'CEMC contest fees: left out (currency-neutral page).',
      'Names of Vaughan schools or private people: not used.',
      'Any affiliation with York Region, the City of Vaughan, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
