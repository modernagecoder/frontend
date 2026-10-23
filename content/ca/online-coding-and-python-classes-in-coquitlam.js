'use strict';
// Coquitlam (cg- city page, Canada cluster Wave 2, row 132). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: group class against private class for a Coquitlam family, laid out on BC time (UTC-7 all year, no change on
// 1 November 2026); the BC curriculum route into Python (ADST 6-7, Computer Programming 11 and 12, Computer Science 11
// and 12); a City of Coquitlam walking routes file where distances are text, turned into numbers and filtered by a
// function with parameters; CEMC contests through a school.
// Sources (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md with saved raw files in
// ca/src/; geography and time from ca/facts-geo.md; the routes file, item record, licence and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-coquitlam/):
//  - BC curriculum (curriculum.gov.bc.ca): ADST 6-7 "Students will experience a minimum of three modules of Applied
//    Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."; ADST 6 computational thinking "simple algorithms",
//    "visual programming" "for example, Kodu, Scratch"; Computer Programming 11 "programming language constructs to
//    support input/output, logic, decision structure, and loops" and "Key components are decomposition, patterns and
//    generalizations, abstraction, and algorithmic thinking."; Computer Programming 12 "higher-level structures, such as
//    functions, methods, or classes, that help improve the organization of source code"; Computer Science 11 and 12 listed
//    under Mathematics; Computer Science 11 "dividing complex problems into parts that are easier to conceive,
//    understand, and program". BC graduation requirements were BLOCKED and are not used.
//  - BC Gov News 2026AG0013-000209 (via facts-geo.md): "B.C. will adopt permanent, year-round daylight saving time after
//    clocks shift forward an hour on Sunday, March 8, 2026"; "Pacific time will be set seven hours behind co-ordinated
//    universal time (UTC-7)". Ontario UTC-5 from 1 November 2026 and UTC-4 from 14 March 2027 (tzdb 2026e).
//  - CEMC: CCC "Wednesday, February 17, 2027"; "Junior level - any participant with beginner to intermediate programming
//    skills."; "all students must participate through their school"; BCC "only require familiarity with concepts covered
//    in the mathematics curriculum across all Canadian provinces", "Monday, November 9, 2026 to Friday, November 20, 2026".
//  - facts-geo.md: Coquitlam is in the Vancouver CMA; BC area codes 236/257/604/672/778; America/Vancouver UTC-7 all year.
//  - City of Coquitlam open data, Parks, Recreation and Culture (ArcGIS item 00ff485accf74cb586bd3320b9a09af8, saved
//    prc-item.json, licenseInfo "Open Government Licence ... The City of Coquitlam has adopted version 2.0 of the Open
//    Government Licence - British Columbia", en dash in source), layer 17 "Walking Jogging and Hiking Routes", 12 features
//    downloaded with curl on 22 October 2026 (walking-routes.json).
//  - Open Government Licence - Coquitlam (coquitlam.ca/894, saved licence.html): "The City of Coquitlam grants you a
//    worldwide, royalty-free, perpetual, non-exclusive licence to use the Information, including for commercial
//    purposes"; attribution "Contains information licensed under the Open Government Licence - Coquitlam."; non-endorsement.
// Our own calculations (coquitlam_walks.py, python -I, output coquitlam_walks.out.txt; checks in coquitlam_checks.out.txt):
// 12 routes; DISTANCE stored as text, 6 written "4.1km" style and 6 "5.7 km" style; sorted km 0.6, 1.0, 1.15, 1.2, 1.2,
// 2.1, 2.7, 2.8, 4.0, 4.1, 5.6, 5.7; GRADE Flat 5, Flat / Minor Grade Change 6, "Steep " (trailing space) 1; WASHROOMS Yes
// 8, No 4; Town Centre Park 4 routes, Mundy Park 3; pick_walks(routes, 2.0, need_washroom=True) -> Stadium Loop, Lakeside
// Loop, Como Lake Loop Trail, Complex Loop, Mundy Lake Loop Trail; pick_walks(routes, 5.0, flat_only=True) -> DeBoville
// Slough Dike Trail, Lakeside Loop, Como Lake Loop Trail, Mundy Park Perimeter Trail, Mundy Lake Loop Trail.
// Lesson family: turning text into numbers (lower, replace, strip, float) and a filter function with default parameters.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'def km(text):',
  '    return float(text.lower().replace("km", "").strip())',
  '',
  'def pick_walks(routes, max_km, need_washroom=False, flat_only=False):',
  '    chosen = []',
  '    for r in routes:',
  '        if km(r["DISTANCE"]) > max_km:',
  '            continue',
  '        if need_washroom and r["WASHROOMS"] != "Yes":',
  '            continue',
  '        if flat_only and r["GRADE"].strip() != "Flat":',
  '            continue',
  '        chosen.append(r["NAME"])',
  '    return chosen',
  '',
  'with open("walking-routes.json", encoding="utf-8") as f:',
  '    routes = [item["attributes"] for item in json.load(f)["features"]]',
  '',
  'print(sorted(km(r["DISTANCE"]) for r in routes))',
  'print(pick_walks(routes, 2.0, need_washroom=True))',
  'print(pick_walks(routes, 5.0, flat_only=True))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'COQUITLAM', label: 'Coquitlam', blurb: 'Live online coding and Python for Coquitlam on BC time: group or private classes, the BC curriculum route into Python, and a project on the City walking routes file.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-coquitlam',
  code: 'pyt',
  accent: '#211C85',
  accentRationale: 'Coquitlam: a deep muted indigo, #211C85, allocated for this row; contrast 12.62 on the paper #FBF8F2 (11.87 and 10.86 on the darker tints), darker and less saturated than the retired purple band',
  pageType: 'city',
  place: {
    name: 'Coquitlam',
    eyebrow: 'Coquitlam, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Coquitlam',
  title: 'Online Coding and Python Classes in Coquitlam | BC Time',
  description: 'Live online coding and Python classes for Coquitlam students aged 6 to adult, on BC time all year: group or private, the BC route into Python and a trails project.',
  ogDescription: 'Coquitlam families choosing between a group and a private online Python class, laid out on BC time, plus a Python project on the City walking routes file.',
  twitterDescription: 'Coquitlam coding and Python classes, live online on Pacific time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Coquitlam Students',
    description: 'Live online coding and Python for Coquitlam students from Grade 1 to adult, in groups of fifteen to twenty or private lessons, planned around the BC curriculum and Pacific time.'
  },

  h1: 'Online coding and Python classes in Coquitlam',
  capsuleQ: 'Where can a Coquitlam student learn Python live online?',
  capsule: 'Coquitlam students from age 6 to adult can learn coding and Python with Modern Age Coders in live online classes on BC time. Each class has a real teacher reading the student\'s code as it is typed, in a group of fifteen to twenty or a private lesson. Python and AI for Kids and Python for Teens are the usual first courses, and the first class is free.',
  lead: 'British Columbia changed its clocks for the last time in March 2026. Since then Pacific time has stayed seven hours behind UTC, so a Coquitlam family no longer has to re-learn its class times every November. That makes this a good moment to explain plainly how a live online class is arranged from Coquitlam: what a group class and a private class each give you, when they can run, and how either fits beside what BC schools teach in Applied Design, Skills, and Technologies and in Computer Programming 11 and 12. The page ends with a small Python project on a City of Coquitlam file, chosen because its distances are written as text, which is exactly the kind of mess a beginner has to learn to clean.',
  wa: 'Hello Modern Age Coders, I would like a free live coding or Python class for a student in Coquitlam.',

  picks: {
    eyebrow: 'Python picks for Coquitlam',
    h2: 'Four courses Coquitlam students begin with',
    intro: 'Every course runs live, in a group or privately. The free first class decides the starting course.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python for children who are ready to leave blocks: games, drawings and small AI ideas, run and explained in class.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first program to functions, files and data, a natural partner to Computer Programming 11 and 12 at school.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Teens', note: 'For teens who enjoyed the walking routes project: cleaning data, charts and first models in Python, on files they can open.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for Coquitlam adults, on weekday evenings or weekend mornings Pacific time, aimed at practical work.' }
    ]
  },

  sections: [
    {
      id: 'choose', tint: '', eyebrow: 'Group or private',
      h2: 'Group class or private class, on Coquitlam time',
      intro: 'Both formats are live with a teacher and follow the same syllabus. They differ in who sets the pace and the hour. Times below are examples in Pacific time; the India column is our arithmetic.',
      body: [
        { kind: 'table', caption: 'How the two live formats compare for a Coquitlam student (our description; India time from BC UTC-7 and India UTC+5:30, so India is 12 hours 30 minutes ahead all year)', head: ['', 'Group class', 'Private class'], rows: [
          ['Students', 'Fifteen to twenty at the same stage', 'One student, one teacher'],
          ['Who sets the time', 'The group runs at a fixed slot you choose from those offered', 'Agreed with you, weekday or weekend'],
          ['Example slot in Coquitlam', 'Wednesday 4:30 pm Pacific time', 'Sunday 9:00 am Pacific time'],
          ['Same slot for the teacher in India', '5:00 am Thursday', '9:30 pm Sunday'],
          ['Pace', 'Set for the group, with extra tasks for quick students', 'Set entirely by the student'],
          ['Good for', 'Steady progress, learning from classmates\' code', 'Faster progress, school projects, contest practice']
        ] },
        { kind: 'p', text: 'Because BC now stays on UTC-7, those India times do not move on 1 November 2026 or on 14 March 2027. What does move is the gap to Ontario. Under IANA tzdb 2026e, Toronto goes to UTC-5 on 1 November 2026, so from then until 14 March 2027 Coquitlam is two hours behind Toronto, and from 14 March 2027 it is three hours behind again. A class shared by Coquitlam and Ontario students therefore shifts by an hour on one side or the other on those dates.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What is on screen', p: 'The teacher on camera and the student\'s own editor, shared. The teacher reads the code as it is typed and asks about it; the student keeps the keyboard throughout.' },
          { h3: 'In a group', p: 'Students are called on by name, and two or three of them share their code each class so everyone learns from real mistakes, not tidy examples.' },
          { h3: 'In a private lesson', p: 'The whole lesson follows one student: a stuck bug can take twenty minutes if it needs to, and a quick learner moves on the same day.' }
        ] }
      ]
    },
    {
      id: 'bc', tint: 'tint', eyebrow: 'Coding at school in BC',
      h2: 'Where Python fits beside what Coquitlam schools teach',
      intro: 'Coquitlam schools follow the BC curriculum. The wording in quotation marks comes from course pages on curriculum.gov.bc.ca, read on 22 October 2026, and the right-hand column is our own plan.',
      body: [
        { kind: 'table', caption: 'BC curriculum coding content and the Python step we pair with it (BC curriculum wording in quotation marks; the pairing is ours)', head: ['BC course', 'What the curriculum says', 'Our Python step beside it'], rows: [
          ['ADST 6 and 7', 'At least three ADST modules in each of Grades 6 and 7; the computational thinking module lists &ldquo;simple algorithms&rdquo; and &ldquo;visual programming&rdquo;, for example Kodu or Scratch', 'Move from blocks to typed Python: loops, conditions and a first game'],
          ['Computer Programming 11', 'Constructs for &ldquo;input/output, logic, decision structure, and loops&rdquo;', 'Write programs that read input, decide and repeat, without copying an example'],
          ['Computer Programming 11', 'Computational thinking: &ldquo;decomposition, patterns and generalizations, abstraction, and algorithmic thinking&rdquo;', 'Break a problem into functions before typing any code'],
          ['Computer Programming 12', '&ldquo;Higher-level structures, such as functions, methods, or classes&rdquo; that organise source code', 'Functions with parameters, then classes, in a project of several files'],
          ['Computer Science 11 (Mathematics)', 'Decomposition: &ldquo;dividing complex problems into parts that are easier to conceive, understand, and program&rdquo;', 'Contest-style problems and data projects such as the walking routes file']
        ] },
        { kind: 'p', text: 'BC lists its computing courses in two places: Computer Programming 11 and 12 sit under Applied Design, Skills, and Technologies, while Computer Science 11 and 12 sit under Mathematics. A Coquitlam teen may take either family, or both. We teach alongside them and never replace them: the course, the mark and the credit stay with the school. For the detail of the two families, see our page on <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 in BC</a>.' },
        { kind: 'callout', h3: 'Beside school, not instead of it', p: 'We do not grant BC credits and are not connected with the BC education ministry or any school district. Marked school work always stays the student\'s own; we teach the thinking that makes it easier.' }
      ]
    },
    {
      id: 'walks', tint: 'deep', eyebrow: 'Coquitlam data project',
      h2: 'Which Coquitlam walks are under 2 km and have washrooms? Let Python choose',
      intro: 'The City of Coquitlam publishes a layer called Walking Jogging and Hiking Routes. It holds 12 routes, and its distances are stored as text, so a program has to turn them into numbers first. The results below are our own run on the file downloaded 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The 12 routes in the City of Coquitlam Walking Jogging and Hiking Routes layer, as the file records them (downloaded 22 October 2026), shortest first', head: ['Route (NAME)', 'DISTANCE as written', 'GRADE', 'WASHROOMS'], rows: [
          ['Mundy Lake Loop Trail', '0.6km', 'Flat', 'Yes'],
          ['Como Lake Loop Trail', '1.0km', 'Flat', 'Yes'],
          ['Complex Loop', '1.15 km', 'Flat / Minor Grade Change', 'Yes'],
          ['Stadium Loop', '1.2km', 'Flat / Minor Grade Change', 'Yes'],
          ['Lakeside Loop', '1.2 km', 'Flat', 'Yes'],
          ['Coquitlam Crunch Trail', '2.1km', 'Steep', 'No'],
          ['Town Centre Perimetre Trail', '2.7 km', 'Flat / Minor Grade Change', 'Yes'],
          ['Hoy Creek Linear Park Trail', '2.8 km', 'Flat / Minor Grade Change', 'No'],
          ['Mundy Park Perimeter Trail', '4.0km', 'Flat', 'Yes'],
          ['DeBoville Slough Dike Trail', '4.1km', 'Flat', 'No'],
          ['Mundy Park Community Trail', '5.6 km', 'Flat / Minor Grade Change', 'Yes'],
          ['Coquitlam River Trail Loop', '5.7 km', 'Flat / Minor Grade Change', 'No']
        ] },
        { kind: 'p', text: 'Look at the DISTANCE column: half the values are written like 0.6km and half like 1.15 km, with a space. Python cannot compare either with 2.0 until it is cleaned. Our program does that in a two-line function, then answers questions with a second function whose options have default values:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Text to number', p: 'km() lowers the text, removes &ldquo;km&rdquo;, strips spaces and calls float(). Run on all 12 rows it prints 0.6, 1.0, 1.15, 1.2, 1.2, 2.1, 2.7, 2.8, 4.0, 4.1, 5.6 and 5.7.' },
          { h3: 'Under 2 km with washrooms', p: 'pick_walks(routes, 2.0, need_washroom=True) returns Stadium Loop, Lakeside Loop, Como Lake Loop Trail, Complex Loop and Mundy Lake Loop Trail: five routes, in the order the file stores them.' },
          { h3: 'Flat and up to 5 km', p: 'pick_walks(routes, 5.0, flat_only=True) returns five routes too, including the DeBoville Slough Dike Trail at 4.1 km. It leaves out every route marked Flat / Minor Grade Change, because the test asks for exactly Flat.' }
        ] },
        { kind: 'callout', h3: 'The trailing space', p: 'The Coquitlam Crunch Trail\'s GRADE is stored as Steep followed by a space. Without .strip(), a test for the word Steep would miss it. Students find that bug by printing repr() of the value, which shows hidden spaces, and it teaches them to distrust a match that silently fails.' },
        { kind: 'p', text: 'The extension task is a judgment, not code: should flat_only accept Flat / Minor Grade Change, and who decides? Students write the rule in a comment before they change the test. The file is used under the Open Government Licence - Coquitlam. Contains information licensed under the Open Government Licence - Coquitlam (<a class="cg-inline-link" href="https://www.coquitlam.ca/894/Open-Government-Licence">licence</a>, <a class="cg-inline-link" href="https://data.coquitlam.ca/">City of Coquitlam open data</a>). The City does not endorse this page or our classes, and the list is not advice on trail conditions.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests in BC',
      h2: 'Waterloo contests are open to Coquitlam students too',
      intro: 'The contest centre at the University of Waterloo, CEMC, serves schools in every province, BC included. Dates are its North and South America dates, read 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Beaver Computing Challenge', p: 'Runs 9 to 20 November 2026. CEMC says it needs only the mathematics taught across all Canadian provinces, so a Coquitlam student in Grade 5 to 10 needs no coding background.' },
          { h3: 'Canadian Computing Competition', p: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027. The Junior level is for beginner to intermediate programmers, and Python is allowed.' },
          { h3: 'Entered at school', p: 'CEMC requires students to take part through a school. A Coquitlam student whose school does not offer a contest can ask another local school to host them.' }
        ] },
        { kind: 'p', text: 'Our contest practice is built from problems of our own, and students are pointed to CEMC\'s free archive of past contests rather than copying from it. Our pages on <a class="cg-inline-link" href="/beaver-computing-challenge-guide">the Beaver Computing Challenge</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> go further. We have no tie to CEMC or the University of Waterloo. One practical note on phones: Coquitlam numbers use the 236, 257, 604, 672 and 778 area codes, and all of them work in the booking form below.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Typical starting points in Coquitlam',
    intro: 'Matched loosely to BC grades. The free class looks at what the student can actually do.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences, repeats and simple events in blocks, said out loud by the child as they build.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 7', h3: 'From ADST to Python', p: 'The visual programming of ADST taken into typed Python, with games and drawings.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 8 to 12', h3: 'Programming 11 and 12', p: 'Functions, files, classes and data, beside Computer Programming or Computer Science at school.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'Python for work', p: 'The same foundations at an adult pace, then automation and data handling.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Does a Coquitlam student still need to write Python by hand?',
    intro: 'Yes, because the walking routes file shows what goes wrong when nobody reads the data.',
    p1: 'Ask an AI tool for the Coquitlam walks under 2 km and it will write a filter in seconds. Whether that filter handles 0.6km and 1.15 km alike, notices the space after Steep, or treats Flat / Minor Grade Change as flat is a coin toss, and the tool will sound sure either way.',
    p2: 'We teach students to do the thinking first: read the data, write the function, test it on a value they can check by eye. Older students then use AI assistants under the age rules we follow, as a second reader to question, never as a source of answers to hand in.',
    closer: 'A student who can explain why pick_walks returned five routes, and not six, owns the reasoning that a code generator cannot supply.',
    blogAnchor: 'why reading code still matters with AI around'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Coquitlam, Port Coquitlam and Port Moody',
    intro: 'Classes happen online, so a student near Burke Mountain and one near Como Lake share a teacher with no drive up the hill.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Tri-Cities and beyond', p: 'Students from Port Coquitlam, Port Moody, Burnaby and Vancouver join the same Pacific time groups.' },
      { h3: 'BC grades and courses', p: 'Teachers use BC grades and course names, so ADST or Computer Programming 11 needs no translation. Graded school work stays the student\'s own.' },
      { h3: 'One clock all year', p: 'BC no longer changes its clocks, so a Coquitlam class time stays put through November and March.' },
      { h3: 'Equipment', p: 'A laptop or desktop, a microphone and a steady connection. We help install Python in the first lesson.' },
      { h3: 'First class free', p: 'A live lesson with real code, ending in a suggested course and level. No payment card is asked for.' }
    ],
    spec: { title: 'No Coquitlam office', p: 'Modern Age Coders has no centre in Coquitlam and claims none. Every class is live and online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Coquitlam families',
    intro: 'Shown in your own currency, with the currency code next to each figure.',
    first: 'The first live lesson is free, with a recommended course and level at the end.',
    group: 'The monthly fee for a group of fifteen to twenty students at one stage.',
    private: 'The monthly fee for one-to-one lessons with a single teacher.',
    closer: 'Coquitlam families pay what families pay anywhere in Canada. Nothing is charged until after the free lesson, when course and time are settled; the pricing page explains missed classes and holidays.'
  },

  reviewsH2: 'Google reviews from our families and students',

  book: {
    h2: 'Request a free class for a Coquitlam student',
    intro: 'Tell us the grade or age and whether a group or a private class suits you. A Grade 3 child might build a looping animation, a Grade 7 student a Python quiz, and a teen or adult the walking routes filter.',
    success: 'Thank you. The team will reach you soon about a class for Coquitlam.'
  },

  faq: {
    h2: 'Coquitlam coding and Python questions',
    intro: 'Asked by Coquitlam families before booking.',
    items: [
      { q: 'Should my Coquitlam child take a group class or a private class?', a: 'A group of fifteen to twenty suits steady progress and learning from classmates. A private class suits faster progress, school projects or contest work. The syllabus is the same.' },
      { q: 'Do your class times change when the clocks change in BC?', a: 'No. BC has stayed on UTC-7 since March 2026, so a Coquitlam class keeps its local time all year.' },
      { q: 'Are classes held in a Coquitlam centre?', a: 'No. There is no centre in Coquitlam. All lessons are live online, so families in Port Coquitlam and Port Moody join from home too.' },
      { q: 'When can a child begin typed Python?', a: 'Most children can at about 9. From age 6 we teach blocks first. The free class checks reading and typing readiness rather than age alone.' },
      { q: 'How does this fit Computer Programming 11 at school?', a: 'It runs beside it. BC Computer Programming 11 covers input and output, decisions and loops; we give extra practice and projects in Python. The course and credit stay with the school.' },
      { q: 'Can Coquitlam students enter Waterloo contests?', a: 'Yes, through a school. CEMC lists the CCC for Wednesday 17 February 2027 and the Beaver Computing Challenge for 9 to 20 November 2026.' },
      { q: 'What times are classes for Coquitlam?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Pacific time.' },
      { q: 'Is there a Python course for adults in Coquitlam?', a: 'Yes. Adults start from zero if needed, in a group or privately, and often aim at automation or data work.' },
      { q: 'Will a 604 or 778 number work in the form?', a: 'Yes, and so will 236, 257 and 672. Enter the ten-digit number; the +1 is filled in for you.' },
      { q: 'How are fees shown?', a: 'The fees section lists the free first lesson, a monthly group fee and a monthly private fee, each in your own currency. You are charged only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for British Columbia',
    h2: 'Other pages for Coquitlam and BC students',
    html: 'The province is on <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, and school course detail on <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 in BC</a>. For clocks across the country, see <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones for online classes</a>, and for everything else, <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Coquitlam and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-pyt .cg-hero h1 { font-weight: 640; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-pyt .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-pyt .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-pyt .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-pyt .cg-table caption { text-align: left; font-weight: 600; line-height: 1.4; }
.cg-root.cg-pyt .cg-table th { text-align: left; }
.cg-root.cg-pyt #walks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pyt .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-pyt .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca and saved raw: ADST 6-7 three-module minimum and the ADST 6 computational thinking content (simple algorithms, visual programming, Kodu, Scratch); Computer Programming 11 constructs and computational thinking components; Computer Programming 12 higher-level structures; Computer Science 11 and 12 listed under Mathematics, Computer Science 11 decomposition. BC permanent UTC-7 from the BC Gov News release 2026AG0013-000209; Ontario offsets from IANA tzdb 2026e. CEMC 2026-27: BCC dates and no-coding note, CCC date and Junior level, through-a-school rule. Coquitlam in the Vancouver CMA and BC area codes from facts-geo.md.',
    localProject: 'City of Coquitlam open data, Parks, Recreation and Culture layer 17 Walking Jogging and Hiking Routes (Open Government Licence - Coquitlam), 12 features downloaded with curl on 22 October 2026 and analysed with our script coquitlam_walks.py (python -I): DISTANCE text in two styles cleaned to 0.6 to 5.7 km; GRADE with a trailing space on Steep; pick_walks(routes, 2.0, need_washroom=True) and pick_walks(routes, 5.0, flat_only=True) each return five named routes. Labelled as ours. Lesson family: text-to-number cleaning and a filter function with default parameters.',
    requiredMentions: [
      'DeBoville Slough Dike Trail at 4.1 km',
      'Town Centre Perimetre Trail',
      'pick_walks(routes, 2.0, need_washroom=True)',
      'printing repr() of the value',
      'Coquitlam is two hours behind Toronto',
      'Wednesday 4:30 pm Pacific time',
      'km() lowers the text',
      'Port Coquitlam, Port Moody, Burnaby and Vancouver',
      '236, 257, 604, 672 and 778'
    ],
    sources: [
      { claim: 'BC curriculum: ADST 6 core (module minimum, computational thinking content).', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC curriculum: Computer Programming 11 content and computational thinking definition.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BC curriculum: Computer Programming 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/12/computer-programming' },
      { claim: 'BC curriculum: Computer Science 11 under Mathematics.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'BC Gov News: permanent year-round daylight saving time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC: contest dates 2026/27, BCC and CCC.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Coquitlam: Parks, Recreation and Culture item (licence pointer).', url: 'https://www.arcgis.com/home/item.html?id=00ff485accf74cb586bd3320b9a09af8' },
      { claim: 'City of Coquitlam: Walking Jogging and Hiking Routes layer.', url: 'https://services2.arcgis.com/Q6Lq3evZUGfPrN7o/arcgis/rest/services/Parks%20Recreation%20and%20Culture/FeatureServer/17' },
      { claim: 'City of Coquitlam: Open Government Licence - Coquitlam.', url: 'https://www.coquitlam.ca/894/Open-Government-Licence' },
      { claim: 'IANA tzdb northamerica: America/Vancouver and America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Coquitlam population: StatCan was not reachable live.',
      'BC graduation requirements (credits, numeracy and literacy assessments): the source was blocked, so nothing is stated.',
      'That trails are open or in good condition: not claimed; the file is a list of routes.',
      'Use of the City of Coquitlam Maintained Trails layer: its TOTAL_LENGTH repeats across segments, so it was not used.',
      'That our classes earn BC credits: refused.',
      'CEMC contest fees: left out (currency-neutral page).',
      'Names of Coquitlam schools, school districts or private people: not used.',
      'Any affiliation with the City of Coquitlam, the BC education ministry, CEMC or the University of Waterloo.'
    ]
  }
};
