'use strict';
// Hamilton, Ontario (cg- city page, Canada cluster Wave 2, row 131). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: what a Hamilton student actually sees on screen in a live online class (teacher camera, shared editor, the
// student's own code); five programs that mark a Python route, tied to Ontario expectations; the City of Hamilton
// waterfalls file sorted and summarised with small functions; the CCC format for Python writers; Eastern time.
// Sources (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md with saved raw files in
// ca/src/; geography from ca/facts-geo.md; the waterfall file, item record, licence and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-hamilton-ontario/):
//  - Ontario DCP API: Grade 3 C3.1 "including code that involves sequential, concurrent, and repeating events"; Grade 5
//    C3.1 "including code that involves conditional statements and other control structures"; Science and Technology
//    (2022) Grade 6 A2.1 "write and execute code in investigations and when modelling concepts, with a focus on obtaining
//    input in different ways"; MTH1W C2.3 "read code to predict its outcome, and alter code to adjust constraints,
//    parameters, and outcomes"; ICS3U "Students will design software independently and as part of a team, using
//    industry-standard programming tools and applying the software development life-cycle model".
//  - CEMC CCC: "Wednesday, February 17, 2027"; "5 questions." / "Time allowed for completion is 3 hours." / "Score out of
//    75."; Junior Q1-2 "(e.g. basic loops and conditions)"; "regardless of their grade"; "Written in school, participants
//    write online, individually."; "participants can create a free practice account and access previous contests";
//    "all students must participate through their school".
//  - facts-geo.md: Hamilton CMA includes Burlington; 905 belt area codes 289/365/742/905; Ontario UTC-5 from 1 November 2026,
//    UTC-4 from 14 March 2027 (IANA tzdb 2026e).
//  - City of Hamilton open data, City Waterfalls (ArcGIS item 359c66af76404326beb86059a48df24c, owner OpenHamilton, saved
//    item.json): snippet "Publicly accessible waterfalls in Hamilton, on both public and private property."; description
//    "Only waterfalls on private property which have been granted limited access by the landowner are included.";
//    licenseInfo links to the City's Open Data Licence Terms and Conditions. FeatureServer layer 16 queried with curl on
//    22 October 2026 (waterfalls.json, 103 features).
//  - City of Hamilton Open Data Licence (licence.html saved): "The City of Hamilton grants you a worldwide, royalty-free,
//    perpetual, non-exclusive licence to use the Data, including for commercial purposes"; attribution "Contains public
//    sector Data made available under the City of Hamilton's Open Data Licence"; no endorsement clause.
// Our own calculations (hamilton_falls.py and hamilton_checks.py, python -I, outputs saved): 103 rows, 103 distinct SNO;
// tallest five by HEIGHT_IN_M: Tew's Falls 41 m (Flamborough), Lower Princess Falls 39.5 m (Hamilton), Devil's Punchbowl
// Falls 37 m (Stoney Creek), Ferguson Falls 30 m (Flamborough), Snake Falls 25 m (COMMUNITY Burlington); TYPE Waterfall 47
// rows mean 12.5 m, Cascade 56 rows mean 8.1 m; by COMMUNITY count/mean/max: Ancaster 15/8.0/21, Burlington 1/25.0/25,
// Dundas 6/5.4/9, Flamborough 23/9.9/41, Hamilton 41/10.8/39.5, Stoney Creek 17/11.1/37; median height 7 m; 11 rows at the
// minimum 3 m; RANKING C 49, B 36, A 18; OWNERSHIP public 59, public-I 28, private 16; widest Webster's Falls 30 m wide;
// 9 rows over 20 m; 21 cluster areas.
// Lesson family: sorting records with a key function, writing small reusable functions (load, mean), grouping into lists
// with setdefault, and reporting mean against median.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json',
  '',
  'def load_falls(path):',
  '    with open(path, encoding="utf-8") as f:',
  '        return [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'def mean(values):',
  '    return sum(values) / len(values)',
  '',
  'falls = load_falls("waterfalls.json")',
  'tallest = sorted(falls, key=lambda fall: fall["HEIGHT_IN_M"], reverse=True)',
  'for fall in tallest[:5]:',
  '    print(fall["NAME"], fall["HEIGHT_IN_M"], "m", fall["COMMUNITY"])',
  '',
  'for kind in ("Waterfall", "Cascade"):',
  '    heights = [fall["HEIGHT_IN_M"] for fall in falls if fall["TYPE"] == kind]',
  '    print(kind, len(heights), round(mean(heights), 1))',
  '',
  'by_community = {}',
  'for fall in falls:',
  '    by_community.setdefault(fall["COMMUNITY"], []).append(fall["HEIGHT_IN_M"])',
  'for place, heights in sorted(by_community.items()):',
  '    print(place, len(heights), round(mean(heights), 1), max(heights))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'HAMILTON', label: 'Hamilton', blurb: 'Live online coding and Python for Hamilton, Ontario: what is on the screen in a real class, five programs on a Python route, and a project on the city waterfalls file.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-hamilton-ontario',
  code: 'pho',
  accent: '#294B8A',
  accentRationale: 'Hamilton: a muted escarpment-shadow blue, #294B8A, allocated for this row; contrast 8.03 on the paper #FBF8F2 (7.55 and 6.91 on the darker tints), well away from the retired purple and cyan band',
  pageType: 'city',
  place: {
    name: 'Hamilton',
    eyebrow: 'Hamilton, Ontario',
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
  routeLabel: 'Hamilton',
  title: 'Online Coding and Python Classes in Hamilton, Ontario',
  description: 'Live online coding and Python for Hamilton, Ontario students from age 6 to adult: what the screen shows in class, a Python route, and a city waterfalls data project.',
  ogDescription: 'Hamilton has 103 waterfalls in its open data file. Here is how a live online Python class turns that file into a real program, and what a class actually looks like.',
  twitterDescription: 'Hamilton, Ontario coding and Python classes, live online with a real teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hamilton, Ontario',
    description: 'Live online coding and Python for Hamilton students from Grade 1 to adult, in groups of fifteen to twenty or private lessons: blocks, Python, data projects, CCC preparation and an ICS3U and ICS4U companion.'
  },

  h1: 'Online coding and Python classes in Hamilton, Ontario',
  capsuleQ: 'Can a Hamilton student take coding and Python classes live online?',
  capsule: 'Yes. Modern Age Coders runs live online coding and Python classes for Hamilton, Ontario students aged 6 to adult. A teacher sees the student\'s own code on a shared screen while it is written, in a group of fifteen to twenty or a private class. Children begin with Python and AI for Kids, teens with Python for Teens, and the first class is free.',
  lead: 'Hamilton\'s open data includes a waterfall inventory: the City lists 103 of them, from cascades a few metres high to drops of forty metres. We use that file on this page the way we use real data in class, as something a student loads, sorts and questions in Python. Before that, the page answers the practical question parents ask first, which is what a live online class actually looks like on the screen in front of their child, and what separates it from a video course. Then comes the route we follow in Python, from short programs to a finished project, and the school and contest facts a Hamilton student should know for 2026 to 2027.',
  wa: 'Hello Modern Age Coders, I would like a free live coding or Python class for a student in Hamilton, Ontario.',

  picks: {
    eyebrow: 'Python picks for Hamilton',
    h2: 'Four courses Hamilton students start in',
    intro: 'All four are taught live with a teacher reading the student\'s code. The free first class sets the starting point.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Children type real Python from the first week: drawings, games and quizzes, each one run and explained on the shared screen.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'From variables and loops to functions, files and data, the skills the waterfalls project on this page is built from.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'A full Python course for Hamilton adults starting from nothing, aimed at scripting, data handling and work projects.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Practice and projects that run beside a school ICS3U or ICS4U course. We do not grant Ontario credits; schools do.' }
    ]
  },

  sections: [
    {
      id: 'screen', tint: '', eyebrow: 'On the screen',
      h2: 'What a Hamilton student sees during a live Python class',
      intro: 'Parents often picture a lecture on video. The screen in our classes is mostly the student\'s own code. This is how it is laid out and who controls each part.',
      body: [
        { kind: 'table', caption: 'The parts of a live online class and who controls each (our description of how we teach)', head: ['On screen', 'Who controls it', 'Why it is there'], rows: [
          ['The teacher\'s camera and voice', 'The teacher', 'So the student is taught by a person who can be asked anything, at the moment it matters'],
          ['The student\'s editor, shared', 'The student', 'The teacher reads the real program as it is typed, including the mistakes'],
          ['A short example from the teacher', 'The teacher, for a few minutes only', 'To show one new idea before the student uses it on a different problem'],
          ['The output window', 'The student', 'Every program is run and its output read aloud, never assumed'],
          ['Chat', 'Everyone', 'For questions in a group class without stopping the person who is speaking'],
          ['Other students\' code (group class)', 'Each student in turn', 'Two or three programs are read each class so students learn from each other\'s errors']
        ] },
        { kind: 'p', text: 'The student keeps the keyboard. When a program fails, the teacher does not take control and fix it; they ask the student to read the error message out loud, point to the line it names, and say what they expected that line to do. That habit, slowing down at the error rather than guessing, is most of what makes a programmer.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A group of fifteen to twenty', p: 'Every student in a group works at the same stage. Students are named and asked to share, so nobody spends a class hidden behind a muted microphone.' },
          { h3: 'Private lessons', p: 'One teacher for one student. The whole screen is that student\'s code, and the pace follows them, which suits ICS4U projects and CCC practice.' },
          { h3: 'Equipment', p: 'A laptop or desktop, a headset or microphone, and Python installed in the first class with the teacher\'s help. A tablet works for blocks, not for typed Python.' }
        ] }
      ]
    },
    {
      id: 'route', tint: 'tint', eyebrow: 'The Python route',
      h2: 'Five programs that mark the way from beginner to project',
      intro: 'Each milestone is a program the student writes alone; the third column is the Ontario expectation it carries further, quoted from the curriculum service on 22 October 2026. The milestones are ours.',
      body: [
        { kind: 'table', caption: 'Five milestone programs on our Python route, with the Ontario expectation each one extends (ministry wording in quotation marks; milestones ours)', head: ['Milestone program', 'What it proves the student can do', 'Ontario expectation behind it'], rows: [
          ['A times-table printer', 'Use a loop and a variable to produce output that would take a page to write by hand', 'Grade 3 C3.1: code with &ldquo;sequential, concurrent, and repeating events&rdquo;'],
          ['A number-guessing game', 'Read input, compare it, and branch with if, elif and else', 'Grade 5 C3.1: &ldquo;conditional statements and other control structures&rdquo;'],
          ['A quiz that reads its questions from a file', 'Get input from somewhere other than the keyboard', 'Grade 6 science A2.1: code &ldquo;with a focus on obtaining input in different ways&rdquo;'],
          ['A slope and intercept checker', 'Predict what code prints, then change a parameter and predict again', 'MTH1W C2.3: &ldquo;read code to predict its outcome&rdquo; and alter its parameters'],
          ['A data report on a city file', 'Load records, sort them, group them and write what the numbers do not show', 'ICS3U: students &ldquo;design software independently and as part of a team&rdquo;']
        ] },
        { kind: 'p', text: 'The milestones are checkpoints, not lesson titles. Between any two of them sit many smaller programs, and some students need longer on the guessing game than on everything after it. A child of 9 might take a school year to reach the third program; a teen or an adult who already thinks in steps can get there far sooner. The free class tells us which milestone a student has really reached, which is often not the one they expect.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Coding in Grade 6 science too', p: 'Ontario\'s 2022 Science and Technology curriculum asks Grade 6 students to use coding in investigations and when modelling concepts, so a Hamilton student meets code outside math class as well.' },
          { h3: 'Grade 9 math', p: 'MTH1W, the de-streamed Grade 9 course from 2021, expects students to read code, predict its result and change its parameters. The fourth milestone is practice for exactly that.' },
          { h3: 'Credits stay at school', p: 'ICS3U has no prerequisite and leads to ICS4U. Our companion course adds practice beside them; the Ontario credit itself is only ever earned at the student\'s school.' }
        ] }
      ]
    },
    {
      id: 'falls', tint: 'deep', eyebrow: 'Hamilton data project',
      h2: 'Which are the tallest falls in Hamilton\'s open data, and what does a mean hide?',
      intro: 'The City of Hamilton publishes City Waterfalls, a file it describes as publicly accessible waterfalls in Hamilton, on both public and private property. We downloaded it on 22 October 2026 and analysed it with the program below. The figures are our counts, not the City\'s.',
      body: [
        { kind: 'table', caption: 'Our summary of the City of Hamilton City Waterfalls file (103 rows, downloaded 22 October 2026), by the COMMUNITY column', head: ['COMMUNITY in the file', 'Rows', 'Mean height (m)', 'Tallest (m)'], rows: [
          ['Hamilton', '41', '10.8', '39.5'],
          ['Flamborough', '23', '9.9', '41'],
          ['Stoney Creek', '17', '11.1', '37'],
          ['Ancaster', '15', '8.0', '21'],
          ['Dundas', '6', '5.4', '9'],
          ['Burlington', '1', '25.0', '25']
        ] },
        { kind: 'p', text: 'Two small functions do most of the work: one loads the file, one takes a mean. The sort uses a key function, which tells sorted() to order whole records by a single field. This program, run on the saved file, printed every number on this page:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The five tallest', p: 'Sorted by HEIGHT_IN_M, the file puts Tew\'s Falls first at 41 m, then Lower Princess Falls at 39.5 m, Devil\'s Punchbowl Falls at 37 m, Ferguson Falls at 30 m and Snake Falls at 25 m.' },
          { h3: 'Waterfall or cascade', p: 'The TYPE column splits the rows into 47 waterfalls with a mean height of 12.5 m and 56 cascades with a mean of 8.1 m. Students then ask whether the tallest few are pulling the waterfall mean up.' },
          { h3: 'A one-row community', p: 'Snake Falls is the only row whose COMMUNITY is Burlington, so Burlington\'s mean of 25.0 m rests on a single record. A student who prints that mean without the count of 1 beside it has made a misleading table.' }
        ] },
        { kind: 'callout', h3: 'Mean against median', p: 'Across all 103 rows the median height is 7 m and 11 rows sit at the minimum of 3 m, while every community mean in the table is higher than 7 m except Dundas. A few tall drops lift a mean; the median shows the typical row. Writing both, with the counts, is the honest report.' },
        { kind: 'p', text: 'Some columns are not explained in the file itself. RANKING holds A on 18 rows, B on 36 and C on 49, and OWNERSHIP includes a value written public-I on 28 rows. We teach students to say they do not know what a code means rather than invent a meaning, and to look for the publisher\'s documentation first. The data is used under the City of Hamilton Open Data Licence: contains public sector Data made available under the City of Hamilton\'s Open Data Licence (<a class="cg-inline-link" href="https://www.hamilton.ca/city-initiatives/strategies-actions/open-data-licence-terms-and-conditions">licence</a>). The City does not endorse this page or these classes, and a file of accessible falls is not advice about visiting them.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and time',
      h2: 'The CCC for Python writers, and Hamilton class times',
      intro: 'Contest facts are as CEMC, the University of Waterloo centre that runs the Canadian Computing Competition, publishes them for 2026 to 2027, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The 2027 CCC at a glance, as CEMC lists it (read 22 October 2026)', head: ['Feature', 'What CEMC says'], rows: [
          ['Date', 'Wednesday 17 February 2027 (North and South America)'],
          ['Length and questions', '5 questions in 3 hours, scored out of 75'],
          ['Levels', 'Junior or Senior, chosen by programming skill regardless of grade'],
          ['First Junior questions', 'Basic loops and conditions, in CEMC\'s own example'],
          ['How it is written', 'At school, online, individually'],
          ['Practice', 'A free practice account with previous contests']
        ] },
        { kind: 'p', text: 'A Hamilton student who has written the guessing game and the file-reading quiz from our route already has the tools for the first Junior questions. Entry is through the school, since CEMC accepts no individual registrations; a student whose school does not take part can ask another local school. Our practice uses problems we write ourselves, and CEMC\'s free archive of past contests is there for anyone. We have no connection with CEMC or the University of Waterloo, and our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers both levels.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eastern time, twice a year', p: 'Hamilton keeps Eastern time: UTC-4 until 1 November 2026, UTC-5 from then until 14 March 2027, and UTC-4 again after that, according to IANA tzdb 2026e.' },
          { h3: 'India is ahead', p: 'Our teachers are in India, 9 hours 30 minutes ahead of Hamilton in summer and 10 hours 30 minutes in winter. A Thursday 5:00 pm class in Hamilton in December is 3:30 am Friday for the teacher; that is our arrangement to manage.' },
          { h3: 'Area codes', p: 'Hamilton numbers in the 905 belt, with the 289, 365, 742 and 905 codes, work in the booking form. Burlington, in the same metropolitan area, shares them.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Starting points for Hamilton students',
    intro: 'A rough map by age. The program a student writes in the free class decides the real starting point.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks and stories', p: 'Sequences and repeats in blocks, with the child explaining each step, ahead of any typing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'The first milestones', p: 'The times-table printer and the guessing game, then small games and drawings in Python.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Ages 13 to 18', h3: 'Files, data, contests', p: 'The quiz, the checker and a city data report, with CCC Junior or Senior for students who want it.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Python that does a job', p: 'The same milestones at an adult pace, pointed at automation and data at work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Why write Python yourself when an AI will write it for you?',
    intro: 'Because the hard part of the waterfalls project was never the typing.',
    p1: 'An AI assistant will produce a script that sorts the Hamilton file in seconds. It will not stop to notice that one community has a single row, that a mean of 25.0 m is built on it, or that RANKING has no published meaning in the file. A student who has written the sort and the mean by hand notices all three.',
    p2: 'We therefore teach the reasoning first: understand the problem, write the code, read the output critically. Older students later use AI tools within the age rules we follow, and they treat the answer as a draft to test, not a solution to hand in.',
    closer: 'A Hamilton student who can explain why the median says more than the mean about these falls has learned something no code generator does for them.',
    blogAnchor: 'why we still teach students to write the loop'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One online classroom for Hamilton, Dundas, Ancaster and Stoney Creek',
    intro: 'Because lessons are live online, a student on the Mountain and one in Waterdown share a teacher without a trip across the escarpment.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Around the region', p: 'Students from Burlington, Grimsby and the rest of the area join the same groups, all on Eastern time.' },
      { h3: 'Ontario terms', p: 'Teachers talk in Ontario grades and course codes, so MTH1W or ICS3U needs no explaining. School assignments always remain the student\'s own work.' },
      { h3: 'Group or private', p: 'A group of fifteen to twenty at one level, or a private class with one teacher. The syllabus is identical; the pace is not.' },
      { h3: 'Progress you can see', p: 'Each milestone program is saved, so a parent can open the student\'s own files and see what they built that month.' },
      { h3: 'Free first class', p: 'A live lesson with real code that ends with a recommended course and level. No card details are requested.' }
    ],
    spec: { title: 'No Hamilton office', p: 'Modern Age Coders has no classroom or office in Hamilton and claims none. Classes are live online, taught from India, over a stable connection.' }
  },

  fees: {
    h2: 'Fees for Hamilton families',
    intro: 'Three lines, each shown in your own currency with its code beside it.',
    first: 'A first live lesson at no charge, after which we suggest a course and level.',
    group: 'The monthly fee for a group of fifteen to twenty students at one stage.',
    private: 'The monthly fee for private lessons with one teacher, at times you choose.',
    closer: 'A Hamilton address changes nothing about the fee; it is the same across Canada. No payment is taken until after the free lesson, once course and time are agreed, and the pricing page covers missed classes and holidays.'
  },

  reviewsH2: 'What families and students have said on Google',

  book: {
    h2: 'Ask for a free class for a Hamilton student',
    intro: 'Give us a grade or an age. A Grade 2 child might animate a looping story, a Grade 6 student build the guessing game, and a teen or adult open the waterfalls file in the first lesson.',
    success: 'Thank you. The team will get in touch soon about a class in Hamilton.'
  },

  faq: {
    h2: 'Questions from Hamilton families',
    intro: 'Asked by Hamilton parents and students before the first lesson.',
    items: [
      { q: 'How is a live online class different from a coding video course?', a: 'A teacher is present at a fixed time, reads the student\'s own code on a shared screen and asks questions while it is written. A video cannot see the student\'s mistakes.' },
      { q: 'Do you teach coding in person in Hamilton?', a: 'No. There is no Hamilton classroom. Every lesson is live online, so students in Dundas, Ancaster, Stoney Creek, Waterdown or on the Mountain join from home.' },
      { q: 'How large are the groups?', a: 'Fifteen to twenty students at the same stage. Families who want one teacher for one student choose private lessons instead, with the same syllabus.' },
      { q: 'What age should a child start Python in Hamilton?', a: 'Usually about 9. From age 6 we start with blocks, then move to typed Python once the child can read and type comfortably.' },
      { q: 'Does Ontario school already teach coding?', a: 'Yes. Ontario math includes coding from Grade 1, Grade 6 science uses it in investigations, and MTH1W in Grade 9 asks students to read and change code. Our classes go deeper.' },
      { q: 'Can Hamilton students write the CCC in Python?', a: 'Yes. CEMC accepts Python 3 for the CCC on Wednesday 17 February 2027, entered through a school. We prepare students with original practice problems.' },
      { q: 'Will these classes give my teen an Ontario credit?', a: 'No. We do not grant Ontario credits. Credits such as ICS3U and ICS4U come only from the school; our companion course is extra practice beside them.' },
      { q: 'What times do Hamilton classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm in Eastern time.' },
      { q: 'Is there a Python course for adults in Hamilton?', a: 'Yes. Adults start from zero if they need to and follow the same milestones at their own pace, in a group or privately.' },
      { q: 'Do 905 and 289 numbers work for booking?', a: 'They do, along with 365 and 742. Key in the ten-digit number; the +1 for Canada is already set.' },
      { q: 'Where are the prices?', a: 'In the fees section of this page: the free first lesson, the monthly group fee and the monthly private fee, each in your own currency. You pay only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Hamilton and Ontario students',
    html: 'The province is covered on <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, and the country on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. For contests see <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contest preparation</a> and <a class="cg-inline-link" href="/ccc-junior-guide">the CCC Junior guide</a>; for math help, <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hamilton and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
  ],

  personalityCss: `
.cg-root.cg-pho .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-pho .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-pho .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-pho .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-pho .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-pho .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pho #falls code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-pho .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-pho .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 3 and Grade 5 C3.1; Science and Technology (2022) Grade 6 A2.1; MTH1W (2021) C2.3; ICS3U description and no prerequisite. CEMC 2026-27: CCC date, format (5 questions, 3 hours, out of 75), Junior question ladder, level by skill, written at school online, free practice account, through-a-school rule. Hamilton CMA membership, 905 belt area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Hamilton open data, City Waterfalls (City of Hamilton Open Data Licence), 103 features downloaded with curl on 22 October 2026 and analysed with our script hamilton_falls.py (python -I): five tallest by HEIGHT_IN_M (41, 39.5, 37, 30, 25 m); Waterfall 47 rows mean 12.5 m, Cascade 56 rows mean 8.1 m; by COMMUNITY rows/mean/max from Hamilton 41/10.8/39.5 to Burlington 1/25.0/25; median 7 m, 11 rows at 3 m; RANKING A 18, B 36, C 49 and OWNERSHIP public-I 28 left unexplained. Labelled as ours. Lesson family: key-function sorting, small functions and grouping with setdefault, mean against median.',
    requiredMentions: [
      'Lower Princess Falls at 39.5 m',
      'Ferguson Falls at 30 m',
      '56 cascades with a mean of 8.1 m',
      'mean of 25.0 m rests on a single record',
      'median height is 7 m',
      'a value written public-I on 28 rows',
      'A quiz that reads its questions from a file',
      'A Thursday 5:00 pm class in Hamilton',
      'Dundas, Ancaster and Stoney Creek'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: elementary math C3.1 (Grades 3 and 5), MTH1W C2.3 and ICS course descriptions.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_5___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Science and Technology Grade 6 A2 and A2.1 coding.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'CEMC: CCC 2027 date, format, levels, Junior question ladder, delivery and practice.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Hamilton open data: City Waterfalls item (snippet and description).', url: 'https://www.arcgis.com/home/item.html?id=359c66af76404326beb86059a48df24c' },
      { claim: 'City of Hamilton: City Waterfalls feature service layer queried for all records.', url: 'https://services.arcgis.com/rYz782eMbySr2srL/arcgis/rest/services/City_Waterfalls/FeatureServer/16' },
      { claim: 'City of Hamilton Open Data Licence (commercial use, attribution statement, no endorsement).', url: 'https://www.hamilton.ca/city-initiatives/strategies-actions/open-data-licence-terms-and-conditions' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Hamilton population: StatCan was not reachable live.',
      'A meaning for the RANKING letters or the public-I ownership value: not defined in the saved item, so not invented.',
      'Any advice about visiting or the safety of waterfalls: out of scope; the file lists accessible falls only.',
      'Reuse of the City of Hamilton Spray Pads file: already used by another page on the site.',
      'That our classes earn or count toward an Ontario credit: refused.',
      'CEMC contest fees: left out (currency-neutral page).',
      'Names of Hamilton schools or private people: not used.',
      'Any affiliation with the City of Hamilton, the Ontario Ministry of Education, CEMC or the University of Waterloo.'
    ]
  }
};
