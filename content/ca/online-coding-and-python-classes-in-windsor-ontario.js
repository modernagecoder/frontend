'use strict';
// Windsor, Ontario (cg- city page, Canada cluster Wave 2, row 134). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: one live debugging moment, step by step, as the teacher reads a Windsor student's shared code; a Python path
// told as the kinds of error a student learns to fix, tied to Ontario computer studies wording; the City of Windsor
// playground file, whose size and accessibility sit inside a key=value text column, parsed into dictionaries; the CCC
// Senior to CCO route; Eastern time.
// Sources (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md with saved raw files in
// ca/src/; geography from ca/facts-geo.md; the playground file, item record, licence and our scripts in
// ca/src-pilots/online-coding-and-python-classes-in-windsor-ontario/):
//  - Ontario DCP API: MTH1W overall C2 "apply coding skills to represent mathematical concepts and relationships
//    dynamically, and to solve problems, in algebra and across the other strands"; ICD2O (2023) description "Students will
//    learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence,
//    cybersecurity, and other emerging digital technologies"; ICD2O "investigate current and emerging innovations in
//    digital technology, including automation and artificial intelligence, and assess their benefits and limitations";
//    ICS4C "Students will learn object-oriented programming concepts, create object-oriented software solutions, and
//    design graphical user interfaces". 2008 computer studies PDF: in each Grade 11 and 12 course the first strand is
//    "Programming Concepts and Skills" and the second "Software Development"; "Each of the courses listed above is worth
//    one credit."
//  - CEMC CCC: "Wednesday, February 17, 2027"; Senior Q1-2 "(e.g. sorting, searching)", Q3-4 "(e.g. careful counting, more
//    advanced mathematical reasoning)", Q5 "IOI level question"; "Approximately 20 of the top official CCC Senior
//    participants from schools in Canada are invited to the CCO at the University of Waterloo each spring."; "CCO
//    participants must use C++."; "it may not always be possible to achieve a perfect score with a particular language
//    choice (for example, Python or Java)"; "all students must participate through their school".
//  - Skills Ontario: "2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre"; "Coding (S/PS)";
//    registration only "through your institution's contact person".
//  - facts-geo.md: Windsor CMA; SW Ontario overlay 226/382/519/548; Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March
//    2027 (IANA tzdb 2026e).
//  - City of Windsor open data, "playground" (ArcGIS item c3b0dfb6b09b450a952b5198d5de3989, saved item.json): snippet
//    "Contains park playground asset information for the City of Windsor."; licenseInfo points to the City of Windsor's
//    Open Data Terms of Use. Hub CSV downloaded with curl on 22 October 2026 (playground.csv, 26,432 bytes, 131 rows).
//  - Open Government Licence - The Corporation of the City of Windsor (licence.pdf saved): "The Information Provider grants
//    you a worldwide, royalty-free, perpetual, non-exclusive licence to use the Information, including for commercial
//    purposes"; attribution "Contains information licensed under the Open Government Licence - The Corporation of the City
//    of Windsor."; non-endorsement.
// Our own calculations (windsor_play.py, windsor_bug.py and checks, python -I, outputs saved): 131 rows, all asset_type play
// and IN-SERVICE; asset_description blank in 14 rows; SIZE x ACCESSIBLE: LARGE NO 9, LARGE YES 28, MEDIUM NO 33, MEDIUM YES
// 13, SMALL NO 23, SMALL YES 10, no SIZE but ACCESSIBLE YES 1, neither 14; playgrounds per ward / ACCESSIBLE=YES: Ward 1
// 16/8, Ward 2 15/6, Ward 3 9/6, Ward 4 12/4, Ward 5 14/4, Ward 6 11/7, Ward 7 19/3, Ward 8 9/3, Ward 9 12/6, Ward 10 14/5;
// 27 rows carry a THEME, 24 distinct themes (Forest 3, Pirate Ship 2, Automotive 1, Aviation 1 ...); 7 park_id values with a
// trailing space; first blank description on line 3 of the file (Seneca); windsor_bug.py stops with "ValueError: not
// enough values to unpack (expected 2, got 1)".
// Lesson family: parsing key=value text into dictionaries, guarding against blank input, and cross-tabulating with Counter.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  'from collections import Counter',
  '',
  'def parse(description):',
  '    info = {}',
  '    for part in description.split(","):',
  '        if "=" in part:',
  '            key, value = part.split("=")',
  '            info[key.strip()] = value.strip()',
  '    return info',
  '',
  'sizes = Counter()',
  'accessible_by_ward = Counter()',
  'with open("playground.csv", encoding="utf-8-sig", newline="") as f:',
  '    for row in csv.DictReader(f):',
  '        info = parse(row["asset_description"])',
  '        sizes[(info.get("SIZE", "not given"), info.get("ACCESSIBLE", "not given"))] += 1',
  '        if info.get("ACCESSIBLE") == "YES":',
  '            accessible_by_ward[row["political_ward"]] += 1',
  '',
  'for (size, access), n in sorted(sizes.items()):',
  '    print(size, access, n)',
  'print(accessible_by_ward.most_common())'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'WINDSOR', label: 'Windsor', blurb: 'Live online coding and Python for Windsor, Ontario: one real debugging moment in class, a Python path told through errors, and a City of Windsor playground data project.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-windsor-ontario',
  code: 'pwo',
  accent: '#7A4625',
  accentRationale: 'Windsor: a muted river-clay brown, #7A4625, allocated for this row; contrast 7.26 on the paper #FBF8F2 (6.82 and 6.24 on the darker tints), clear of the retired purple and cyan band',
  pageType: 'city',
  place: {
    name: 'Windsor',
    eyebrow: 'Windsor, Ontario',
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
  routeLabel: 'Windsor',
  title: 'Online Coding and Python Classes in Windsor, Ontario',
  description: 'Live online coding and Python for Windsor, Ontario students from age 6 to adult: a real debugging moment in class, a Python path and a city playground data project.',
  ogDescription: 'Watch one debugging moment in a live online Python class for a Windsor student, then follow the same skill into a project on the City of Windsor playground file.',
  twitterDescription: 'Windsor, Ontario coding and Python classes, live online with a teacher.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Windsor, Ontario',
    description: 'Live online coding and Python for Windsor students from Grade 1 to adult, in a group of fifteen to twenty or one to one, including data projects, CCC preparation and an ICS3U and ICS4U companion.'
  },

  h1: 'Online coding and Python classes in Windsor, Ontario',
  capsuleQ: 'Does anyone teach coding and Python live online to Windsor students?',
  capsule: 'Modern Age Coders does. Windsor, Ontario students from age 6 to adult learn coding and Python in live online classes where the teacher reads their shared code and helps them find their own bugs, one to one or in a group of fifteen to twenty. Python and AI for Kids and Python for Teens are where most begin, after a free first class.',
  lead: 'The clearest way to show what a live online coding class is, is to show one minute of it. So this page starts with a single debugging moment: a Windsor student\'s program crashes on a City of Windsor data file, and the teacher, reading the student\'s shared code, does not fix it. What happens instead is the actual teaching. After that comes our Python path, described not as a list of topics but as the kinds of error a student learns to handle, from a missing bracket to a file that is not as tidy as it looks. Then the full project on the playground file, and the contest and school facts a Windsor student should know for 2026 to 2027.',
  wa: 'Hello Modern Age Coders, I would like a free live coding or Python class for a student in Windsor, Ontario.',

  picks: {
    eyebrow: 'Python picks for Windsor',
    h2: 'Four courses Windsor students take',
    intro: 'Each runs live, with a teacher reading the student\'s own code. The free first class picks the starting course.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Children write real Python, meet their first error messages and learn to read them, through games and drawings.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'From the first program to files, dictionaries and data, the skills behind the playground project on this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for Windsor adults starting from zero, aimed at automating tasks and working with real data files.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Practice beside a school ICS3U or ICS4U course, in Python and Java. We do not grant Ontario credits; the school grants them.' }
    ]
  },

  sections: [
    {
      id: 'debug', tint: '', eyebrow: 'One live moment',
      h2: 'A Windsor student\'s program crashes. Here is what the teacher does',
      intro: 'This is a reconstruction, written by us, of a moment that happens in some form in most of our Python classes. The code and the error are real: we ran them on the City of Windsor playground file on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'One debugging moment in a live online class, in order (our reconstruction; the error text is Python\'s own)', head: ['Moment', 'On the shared screen', 'What the teacher says or does'], rows: [
          ['1. The crash', 'The student\'s parse() function stops with ValueError: not enough values to unpack (expected 2, got 1)', 'Nothing yet. The teacher waits for the student to read the message aloud'],
          ['2. Reading it', 'The student reads the last line, then the line number it points to', '&ldquo;Expected 2, got 1. Two of what?&rdquo;'],
          ['3. A guess', 'The student says key, value = part.split("=") wanted two pieces but got one', '&ldquo;Good. Which row gave it one piece? How could you find out?&rdquo;'],
          ['4. Looking', 'The student prints each description before parsing it and sees a blank one on line 3 of the file', '&ldquo;What does split give you for an empty string?&rdquo;'],
          ['5. The fix', 'The student adds if "=" in part: and runs the program again over all 131 rows', 'Asks how many rows had nothing to parse. The answer is 14'],
          ['6. The habit', 'The student writes one comment explaining the guard', '&ldquo;Next time a file crashes your program, what will you do first?&rdquo;']
        ] },
        { kind: 'p', text: 'Six short steps, and the teacher never typed. That is the difference between a live class and a recorded one: the recording would have shown a tidy program that never crashed, and the student would have copied it. In our classes the error is the lesson, and the student leaves knowing how to read the next one without help.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'In a group class', p: 'With fifteen to twenty students at one stage, the teacher puts one student\'s crash on the shared screen and the whole group reasons through it. Often several of them have the same bug.' },
          { h3: 'In a one to one class', p: 'The same six steps, at the student\'s own pace. One to one suits students working on an ICS4U project or preparing for the CCC.' },
          { h3: 'The setup', p: 'A laptop or desktop, a microphone and Python installed with the teacher in the first lesson. The student shares their editor; the teacher never takes the keyboard.' }
        ] }
      ]
    },
    {
      id: 'errors', tint: 'tint', eyebrow: 'The Python path',
      h2: 'Learning Python as the errors you learn to fix',
      intro: 'Our path is ordered by the kind of mistake a student can diagnose alone. The right-hand column links each stage to Ontario curriculum wording, read from the ministry\'s curriculum service and its 2008 computer studies document on 22 October 2026. The stages are ours.',
      body: [
        { kind: 'table', caption: 'Our Python stages by the errors a student learns to handle, with related Ontario wording (ministry text in quotation marks; stages ours)', head: ['Stage (ours)', 'Errors the student can fix alone', 'Ontario link'], rows: [
          ['1. First programs', 'SyntaxError: a missing bracket, quote or colon', 'Grades 11 and 12 courses open with the strand &ldquo;Programming Concepts and Skills&rdquo; (2008 document)'],
          ['2. Variables and types', 'NameError and TypeError: a misspelled name, text added to a number', 'MTH1W C2: &ldquo;apply coding skills to represent mathematical concepts and relationships dynamically&rdquo;'],
          ['3. Loops and logic', 'No error at all, but a wrong answer: a loop that stops one step early', 'ICD2O (2023): students &ldquo;learn and apply coding concepts and skills to build hands-on projects&rdquo;'],
          ['4. Real input', 'ValueError and KeyError from files that are messier than expected', 'The second strand of each Grade 11 and 12 course, &ldquo;Software Development&rdquo; (2008 document)'],
          ['5. Larger programs', 'Bugs that live between functions or classes, found with tests', 'ICS4C: students &ldquo;create object-oriented software solutions&rdquo;']
        ] },
        { kind: 'p', text: 'Stage 3 is the turning point. Up to stage 2, Python tells the student something is wrong. From stage 3 on, the program runs and the answer is simply incorrect, and only a student who predicted the answer first will notice. That is why every class asks for a prediction before the run, from a child\'s first loop to a teen\'s data project.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 10: ICD2O', p: 'The 2023 Grade 10 course asks students to investigate innovations including automation and artificial intelligence and to assess their benefits and limitations, as well as to build hands-on coding projects.' },
          { h3: 'Grades 11 and 12', p: 'ICS3U and ICS3C need no prerequisite; ICS4U and ICS4C follow them. The 2008 document says each of the courses listed is worth one credit, earned at school.' },
          { h3: 'Skills Ontario', p: 'Skills Ontario lists a secondary and post-secondary Coding contest at its 2027 competition, 3 and 4 May 2027 in Toronto. Entry is only through the student\'s institution.' }
        ] }
      ]
    },
    {
      id: 'playgrounds', tint: 'deep', eyebrow: 'Windsor data project',
      h2: 'How many Windsor playgrounds does the city file mark as accessible, ward by ward?',
      intro: 'The City of Windsor publishes a playground layer as open data, 131 rows on our download of 22 October 2026. Size and accessibility are not separate columns; they are packed into one text field such as SIZE=MEDIUM, ACCESSIBLE=YES, so a program has to parse them. All figures below are our own output.',
      body: [
        { kind: 'table', caption: 'Our count from the City of Windsor playground file (131 rows, downloaded 22 October 2026): rows per political_ward and rows whose description contains ACCESSIBLE=YES', head: ['Ward', 'Playground rows', 'Marked ACCESSIBLE=YES'], rows: [
          ['Ward 1', '16', '8'],
          ['Ward 2', '15', '6'],
          ['Ward 3', '9', '6'],
          ['Ward 4', '12', '4'],
          ['Ward 5', '14', '4'],
          ['Ward 6', '11', '7'],
          ['Ward 7', '19', '3'],
          ['Ward 8', '9', '3'],
          ['Ward 9', '12', '6'],
          ['Ward 10', '14', '5']
        ] },
        { kind: 'p', text: 'This is the corrected program from the debugging moment above, with the guard in place. It reads the CSV with the standard csv module, turns each description into a small dictionary, and counts with Counter:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Size against access', p: 'Parsed, the descriptions give LARGE with ACCESSIBLE=YES on 28 rows and LARGE with NO on 9; MEDIUM YES 13, MEDIUM NO 33; SMALL YES 10, SMALL NO 23. One row gives accessibility without a size, and 14 give neither.' },
          { h3: 'Themes', p: 'Twenty-seven rows also carry a THEME, with 24 different values: Forest appears three times and Pirate Ship twice, and single rows include Automotive, Aviation, Dinosaur and Space Ship.' },
          { h3: 'Ward 7', p: 'Ward 7 has the most playground rows, 19, and only 3 of them are marked ACCESSIBLE=YES. Ward 3 has 9 rows and 6 marked YES. The next question is why, and the file alone cannot answer it.' }
        ] },
        { kind: 'callout', h3: 'What ACCESSIBLE=YES does and does not tell you', p: 'It records a label in the City\'s asset description, not an inspection a student has made, and 14 rows have no description at all, so a missing YES is not a NO. Seven park_id values also end in a stray space, which would split one park into two if a student grouped by park. Reporting the counts with those caveats is the finished project.' },
        { kind: 'p', text: 'The playground file is used under the City of Windsor\'s open data licence. Contains information licensed under the Open Government Licence - The Corporation of the City of Windsor (<a class="cg-inline-link" href="https://opendata.citywindsor.ca/Documents/OpenDataTermsofUse.pdf">licence</a>, <a class="cg-inline-link" href="https://open-data-portal-citywindsor.hub.arcgis.com/">City of Windsor open data</a>). No endorsement by the City of Windsor is implied.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and time',
      h2: 'From the CCC Senior to the CCO, and Windsor class times',
      intro: 'CCC and CCO facts are from CEMC at the University of Waterloo, read 22 October 2026; time offsets are from IANA tzdb 2026e.',
      body: [
        { kind: 'table', caption: 'The CCC Senior question ladder and what follows it, as CEMC describes them (read 22 October 2026)', head: ['Step', 'What CEMC says'], rows: [
          ['Senior questions 1 and 2', 'For example sorting and searching'],
          ['Senior questions 3 and 4', 'For example careful counting and more advanced mathematical reasoning'],
          ['Senior question 5', 'An IOI-level question'],
          ['After the CCC', 'About 20 top official Senior participants from schools in Canada are invited to the CCO at Waterloo each spring'],
          ['Language at the CCO', 'C++ only']
        ] },
        { kind: 'p', text: 'This matters to a Python student. CEMC lists the 2027 CCC for Wednesday 17 February 2027 and accepts Python, but it also cautions that a full score is not always reachable in Python or Java, and the invitation-only CCO requires C++. So our Senior students who aim beyond the CCC learn C++ alongside Python. Entry is always through a school; there is no individual registration. We are not connected with CEMC or the University of Waterloo, and our <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> goes further.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eastern time', p: 'Windsor is on UTC-4 until 1 November 2026, UTC-5 from then to 14 March 2027, and UTC-4 again afterwards, according to IANA tzdb 2026e.' },
          { h3: 'The teacher\'s clock', p: 'Our teachers are in India. A Monday 4:00 pm Windsor class in February is 2:30 am Tuesday in India; we carry that, and every time we confirm is in Eastern time.' },
          { h3: 'Windsor numbers', p: 'Numbers with the 226, 382, 519 and 548 area codes work in the booking form. Type the ten digits without the 1.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Usual starting points in Windsor',
    intro: 'Age is a starting guess only; the code written in the free class sets the level.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences and repeats in blocks, where a bug is a block in the wrong place and easy to see.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 12', h3: 'Stages 1 and 2', p: 'Typed Python, first error messages read aloud, games and drawings that work by the end of class.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 18', h3: 'Stages 3 to 5', p: 'Logic errors, messy files like the playground data, and CCC Junior or Senior for students who want it.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Adults', h3: 'Python for real files', p: 'The same stages for adults, aimed at the spreadsheets and exports they meet at work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'Can a Windsor student let AI fix the bugs instead?',
    intro: 'It can fix this bug. It cannot teach the student to find the next one.',
    p1: 'Paste the ValueError into an AI assistant and it will suggest the same guard our student wrote. What it will not do is make the student look at line 3 of the file, count the 14 blank descriptions, or notice the stray spaces in park_id. The fix arrives; the understanding does not.',
    p2: 'We teach the reasoning first: read the error, form a guess, test it, then fix. Older students use AI tools later within the age rules we follow, as a second opinion to check, never as the place answers come from.',
    closer: 'A Windsor student who can explain why a missing ACCESSIBLE=YES is not the same as a NO has learned the part of coding that stays human.',
    blogAnchor: 'what students still need to learn about code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online lessons for Windsor and Essex County',
    intro: 'Lessons are online, so a student in South Walkerville and another in LaSalle share a teacher without crossing the city.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Nearby towns', p: 'Students in LaSalle, Tecumseh, Amherstburg and Lakeshore join the same classes, all on Eastern time like Windsor.' },
      { h3: 'Ontario course codes', p: 'Teachers know ICD2O, ICS3U, ICS3C, ICS4U and ICS4C, so a parent never has to explain the school course. Marked school work stays the student\'s own.' },
      { h3: 'Group or one to one', p: 'A group of fifteen to twenty at one stage, or a student with a teacher to themselves. The course is the same in both.' },
      { h3: 'Code you keep', p: 'Each program a student writes, bugs and fixes included, stays in their own files, so progress is visible at home.' },
      { h3: 'Free first lesson', p: 'A real lesson with real code. It ends with a suggested course and level, and no card is requested.' }
    ],
    spec: { title: 'No Windsor office', p: 'Modern Age Coders has no office or classroom in Windsor and claims none. Classes are live online, taught from India.' }
  },

  fees: {
    h2: 'Fees for Windsor families',
    intro: 'Each fee appears in your own currency, its code beside the figure.',
    first: 'Your student\'s first live lesson costs nothing and finishes with a course and level we recommend.',
    group: 'The monthly fee for a group of fifteen to twenty students at one stage.',
    private: 'The monthly fee for one to one lessons with a single teacher.',
    closer: 'Windsor families pay the same as families in any other Canadian city. Nothing is billed until after the free lesson, when the course and time are settled; the pricing page sets out missed classes and holidays.'
  },

  reviewsH2: 'Google reviews from families and learners',

  book: {
    h2: 'Book a free class for a Windsor student',
    intro: 'Tell us the grade or age. A Grade 2 child might fix a block that runs in the wrong order, a Grade 6 student a first Python error, and a teen or adult the playground file crash.',
    success: 'Thank you. The team will contact you shortly about a class for Windsor.'
  },

  faq: {
    h2: 'Windsor coding and Python questions',
    intro: 'What Windsor families ask before the first lesson.',
    items: [
      { q: 'What makes an online coding class live rather than recorded?', a: 'A teacher at a set time who can see the student\'s own code and responds to it. When the program crashes, the teacher asks questions until the student finds the cause.' },
      { q: 'Do you have a coding school in Windsor?', a: 'No. There is no Windsor classroom. All lessons are live online, so students in LaSalle, Tecumseh or South Walkerville join from home.' },
      { q: 'How many students are in each group?', a: 'Fifteen to twenty at the same stage. A one to one class is one student with one teacher, following the same course.' },
      { q: 'What is a good age to start Python?', a: 'About 9 for most children. From age 6 we use blocks, then move to typed Python when reading and typing are comfortable.' },
      { q: 'Will this help with ICD2O in Grade 10?', a: 'Yes. ICD2O asks students to apply coding concepts in hands-on projects and to look at AI and automation critically. Our Python stages give the coding a firmer base.' },
      { q: 'Can a Windsor student go from the CCC to the CCO in Python?', a: 'The CCC accepts Python, but CEMC says the CCO requires C++. Students who aim that high learn C++ as well. Entry is through a school.' },
      { q: 'Do you award Ontario credits for ICS3U or ICS4U?', a: 'No. We do not grant Ontario credits. The school awards ICS3U and ICS4U credits; our companion course adds practice beside them.' },
      { q: 'What time are classes for Windsor students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm every time in Eastern time.' },
      { q: 'Do adults in Windsor learn Python with you?', a: 'Yes. Adults start from zero if they need to and work towards automating tasks or handling data files, in a group or one to one.' },
      { q: 'Do 519 and 226 numbers work in the form?', a: 'Yes, and 382 and 548 as well. Enter the ten digits; the +1 is already shown.' },
      { q: 'How do I see the fees?', a: 'The fees section shows the free first lesson, the monthly group fee and the monthly one to one fee in your own currency. You pay nothing before the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Windsor and Ontario students',
    html: 'For the province, see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Grade 10 families can read <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explained</a>, and contest students <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>. The rest of Canada is on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Windsor and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/icd2o-digital-technology-course-explained', label: 'ICD2O explained' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/coding-classes-for-adults-in-canada', label: 'Adult coding in Canada' }
  ],

  personalityCss: `
.cg-root.cg-pwo .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-pwo .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-pwo .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-pwo .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-pwo .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-pwo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pwo #playgrounds code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.95rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pwo #debug .cg-table td { font-size: 0.92rem; }
.cg-root.cg-pwo .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and the 2008 computer studies PDF, saved raw: MTH1W (2021) overall expectation C2; ICD2O (2023) description and its automation and AI expectation; ICS4C description; Grade 11 and 12 strands Programming Concepts and Skills and Software Development; one credit per course; ICS3U and ICS3C without prerequisite. CEMC: CCC 2027 date, Senior question ladder, CCO invitation and C++ rule, Python caveat, through-a-school rule. Skills Ontario 2027 coding contest and registration through an institution. Windsor CMA, SW Ontario area codes and Eastern time offsets from facts-geo.md (IANA tzdb 2026e).',
    localProject: 'City of Windsor open data, playground layer (Open Government Licence - The Corporation of the City of Windsor), hub CSV downloaded with curl on 22 October 2026 (131 rows) and parsed with our script windsor_play.py (python -I): key=value asset descriptions turned into dictionaries; SIZE x ACCESSIBLE counts (LARGE YES 28 to SMALL NO 23, 14 blank); rows and ACCESSIBLE=YES per ward (Ward 7 19/3, Ward 3 9/6); 27 themed rows, 24 themes; 7 park_id values with a trailing space; the unguarded version raises ValueError on the blank description on line 3. Labelled as ours. Lesson family: parsing key=value text into dictionaries and guarding blank input.',
    requiredMentions: [
      'not enough values to unpack (expected 2, got 1)',
      'MEDIUM YES 13, MEDIUM NO 33',
      'Ward 7 has the most playground rows, 19',
      'Seven park_id values also end in a stray space',
      'Forest appears three times and Pirate Ship twice',
      'single rows include Automotive, Aviation, Dinosaur and Space Ship',
      'A Monday 4:00 pm Windsor class in February',
      'LaSalle, Tecumseh, Amherstburg and Lakeshore',
      'South Walkerville and another in LaSalle'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: MTH1W strands, ICD2O course and strands, ICS course descriptions.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=ICD2O&depth=0' },
      { claim: 'Ontario Computer Studies, Grades 10 to 12 (2008): strands and one credit per course.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'CEMC: CCC 2027 date, Senior question ladder, CCO invitation and language rule, Python caveat.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC: how contests work (through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Skills Ontario Competition 2027: dates, Coding contest, registration through an institution.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'City of Windsor open data: playground item (snippet, licence pointer).', url: 'https://www.arcgis.com/home/item.html?id=c3b0dfb6b09b450a952b5198d5de3989' },
      { claim: 'City of Windsor open data hub: playground CSV download.', url: 'https://open-data-portal-citywindsor.hub.arcgis.com/datasets/c3b0dfb6b09b450a952b5198d5de3989_35' },
      { claim: 'City of Windsor: Open Government Licence - The Corporation of the City of Windsor (PDF).', url: 'https://opendata.citywindsor.ca/Documents/OpenDataTermsofUse.pdf' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Windsor or Windsor CMA population: StatCan was not reachable live.',
      'That a playground without ACCESSIBLE=YES is inaccessible: refused; 14 rows have no description.',
      'Any judgment of a ward or the City from the accessibility counts: refused; the file cannot explain them.',
      'That our classes earn or count toward an Ontario credit: refused.',
      'CEMC and Skills Ontario fees: left out (currency-neutral page).',
      'Names of Windsor schools or private people: not used.',
      'Any affiliation with the City of Windsor, the Ontario Ministry of Education, CEMC, the University of Waterloo or Skills Ontario.'
    ]
  }
};
