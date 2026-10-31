'use strict';
// BTEC IT programming unit help (ag- exam door, England, Wales and Northern Ireland; UK and US exams cluster Phase 2,
// row UK041). Sources, read raw on 31 October 2026 (qualifications.pearson.com via curl; PDF text through the scratchpad
// pdftext helper; raw copies in keyword-research-2026-09/uk-us-gap/src/btec-it-programming-unit-help/):
//  - Pearson, BTEC Nationals Information Technology (2016) qualification page: "First teaching: June 2016"; "Performance
//    tables: Applied Generals (2021 to 2026)"; "Funding approval end date - 31/07/2025"; "Last registration: England (DfE
//    funded) - 31 Jul 2025; England (private/apprenticeship funded) - 31 Dec 2026; Northern Ireland - 31 Jul 2029; Wales
//    - 31 Jul 2029"; five sizes, Certificate to Extended Diploma.
//  - Pearson BTEC Level 3 National Extended Diploma in Information Technology, Specification, Issue 6, April 2021.
//    Sizes: Certificate 180 GLH, Extended Certificate 360, Foundation Diploma 510, Diploma 720, Extended Diploma 1080
//    GLH ("equivalent in size to three A Levels"); structure table "4 Programming 90   M M M" (mandatory in the
//    Foundation Diploma, Diploma and Extended Diploma). Unit 4: "Level: 3"; "Unit type: Internal"; "Guided learning
//    hours: 90"; "Learners study the underpinning concepts and implications of programming languages to design, develop
//    and test computer programs."; learning aims A "Examine the computational thinking skills and principles of computer
//    programming", B "Design a software solution to meet client requirements", C "Develop a software solution to meet
//    client requirements"; "There is a maximum number of two summative assignments for this unit."; content: procedural
//    "C, Perl®, PythonTM", object-orientated "C++, C#®, Java®", event-driven "Visual Basic®"; "Test plan with test data
//    to include typical, extreme and erroneous data."; robustness "extreme and erroneous data can be processed without
//    causing the program to crash"; criteria A.P1 to A.D1, B.P4, B.P5, B.M2, C.P6, C.P7, C.M3 "Optimise the computer
//    program to meet client requirements.", BC.D2 "Evaluate the design and optimised computer program against client
//    requirements.", BC.D3 "Demonstrate individual responsibility, creativity and effective self-management".
//    Authenticity: "Once an assessment has begun, learners must not be given feedback on progress towards fulfilling the
//    targeted criteria."; "An assessor must assess only learner work that is authentic, i.e. learners' own independent
//    work."; "Learners must authenticate the evidence that they provide for assessment through signing a declaration
//    stating that it is their own work."; "the learner has clearly referenced any sources used in the work"; resubmission
//    "within 15 working days in the same academic year"; "A resubmission opportunity must not be provided where learners
//    ... have submitted work that is not authentic."; "The retake may only be achieved at a pass."; "Pearson does not
//    tolerate actions (or attempted actions) of malpractice by learners, centre staff or centres in connection with
//    Pearson qualifications."
// Our own: the "teach before the assignment opens" framing, the practice brief (a club attendance logger), the Python
// code, the test plan, the optimisation example, the criteria plain-English column and the we-do/we-never table.
// Spine: Unit 4 is internally assessed and Pearson's authenticity rules close the door once the assignment starts, so
// all legitimate help happens before it, on practice work. Lesson family: a vocational coursework-unit door, distinct
// from the T Level digital page (placement and specialism) and the A level NEA page (AQA and OCR projects).

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const CODE = `# Practice brief (ours, not a Pearson assignment): log club attendance.
def read_attendance(prompt):
    """Return a whole number of members from 0 to 40, re-asking until valid."""
    while True:
        raw = input(prompt).strip()
        if not raw.isdigit():
            print("Please type a whole number, for example 12.")
            continue
        value = int(raw)
        if 0 <= value <= 40:
            return value
        print("Attendance must be between 0 and 40.")

sessions = [read_attendance(f"Session {n}: ") for n in range(1, 5)]
print("Average attendance:", round(sum(sessions) / len(sessions), 1))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'BTEC IT UNIT 4', blurb: 'Unit 4 Programming is internally assessed. Pearson\'s authenticity rules mean real help happens before the assignment opens, not during it.' },
  slug: 'btec-it-programming-unit-help',
  code: 'bip',
  accent: '#665381',
  accentRationale: 'BTEC IT programming: a dusky violet (#665381, 6.35:1 on #FBF8F2), greyer than the A level Computer Science purples and far from the Scottish greens in this group',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'BTEC IT programming unit help',
  title: 'BTEC IT Programming Unit Help | Unit 4, Level 3 Nationals',
  description: 'BTEC IT programming unit help for Level 3 Nationals Unit 4: the learning aims, what Pass to Distinction ask, Pearson\'s authenticity rules, and live Python teaching.',
  ogDescription: 'BTEC IT Unit 4 Programming is internally assessed, and Pearson\'s rules close the door once the assignment starts. How to build the skills honestly, before it does.',
  twitterDescription: 'BTEC Level 3 IT Unit 4 Programming: computational thinking, design, testing with typical, extreme and erroneous data, and live lessons that never touch assessed work.',
  pageName: 'BTEC IT Programming Unit Help',
  webPageDescription: 'Live online programming teaching for students on the Pearson BTEC Level 3 Nationals in Information Technology, built from the 2016 specification for Unit 4 Programming and Pearson\'s rules on authentic work.',
  courseDescription: 'Live online Python and programming for BTEC IT students: computational thinking, data types and constructs, design documents, validation, test plans with typical, extreme and erroneous data, and optimisation, taught on practice briefs and never on assessed work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'BTEC IT programming help',
  navLinks: [
    { href: '#unit', label: 'Unit 4' },
    { href: '#criteria', label: 'Pass to Distinction' },
    { href: '#rules', label: 'Authentic work' },
    { href: '#practice', label: 'Practice brief' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England, Wales and Northern Ireland &middot; Pearson BTEC Level 3 Nationals &middot; Information Technology',
  h1: 'BTEC IT programming unit help',
  lede: 'Students on the BTEC Level 3 Nationals in Information Technology usually come looking for help at the worst possible moment: the assignment brief for Unit 4 Programming has been handed out, the program has to be designed and built for a client, and the deadline is close. By then, Pearson\'s rules limit what anyone can do. Once an assessment has begun, even the student\'s own teacher may not give feedback on meeting the criteria, and the student signs a declaration that the work is their own. The honest window for help is before the brief arrives, and it is wide: computational thinking, the constructs of a real language, design documents, test plans and optimisation can all be learned properly on practice work. This page explains the unit, the criteria, Pearson\'s authenticity rules in its own words, and how we teach within them.',
  secondaryCta: { href: '#rules', label: 'What help is allowed' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson in programming for my BTEC IT course.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from Pearson\'s Unit 4 specification and authenticity rules',
  spec: [
    ['Qualification', 'BTEC Level 3 Nationals in IT (2016)'],
    ['Unit', '4: Programming'],
    ['Assessment', 'Internal, up to two assignments'],
    ['Guided learning hours', '90'],
    ['Mandatory in', 'Foundation Diploma, Diploma, Extended Diploma'],
    ['Our help', 'Teaching on practice work only'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'BTEC IT Unit 4 Programming is a mandatory, internally assessed unit of 90 guided learning hours in the Pearson BTEC Level 3 National Foundation Diploma, Diploma and Extended Diploma in Information Technology (2016). Students examine computational thinking, then design and develop a program for a client, graded Pass, Merit or Distinction. Pearson requires the work to be the learner\'s "own independent work". Modern Age Coders gives BTEC IT programming unit help live online, in a group of 15 to 20 or 1-on-1, through its Python for Teens course, teaching the skills on our own practice briefs and never on assessed work. The first lesson is free; we are not connected with Pearson or any college.',

  picks: {
    eyebrow: 'Courses for BTEC IT students',
    h2: 'Three courses for the programming unit',
    lede: 'Python for Teens is the core: the procedural language the specification names first. Data Structures adds the depth a Distinction evaluation draws on, and Java covers the object-orientated side.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'BIP / 01', title: 'Python for Teens', note: 'Variables, selection, iteration, functions, files and validation, built up to small client-style programs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BIP / 02', title: 'Data Structures and Algorithms', note: 'Arrays, searching, sorting and efficiency, the vocabulary of optimisation and quality.' },
      { course: 'java-programming-masterclass-for-teens', code: 'BIP / 03', title: 'Java Programming', note: 'Classes and objects, for students comparing paradigms in learning aim A.' }
    ]
  },

  sections: [
    {
      id: 'unit', tint: 'tint', eyebrow: 'Unit 4',
      h2: 'What is in BTEC IT Unit 4 Programming?',
      lede: 'Three learning aims: examine computational thinking and programming principles, design a software solution for a client, then develop it. Pearson\'s unit summary puts it in one line: "Learners study the underpinning concepts and implications of programming languages to design, develop and test computer programs."',
      body: [
        { kind: 'table', caption: 'Unit 4: Programming, from the 2016 specification (Issue 6, April 2021)', head: ['Learning aim', 'Content areas', 'Evidence Pearson suggests'], rows: [
          ['A: Examine the computational thinking skills and principles of computer programming', 'Decomposition, pattern recognition, abstraction; types of language; constructs; logic; software quality', 'A report evaluating computational thinking and how design principles produce high-quality software'],
          ['B: Design a software solution to meet client requirements', 'The software development life cycle; problem definition, algorithms, data structures, validation, a test plan', 'A project brief, design documentation, user feedback and design refinement'],
          ['C: Develop a software solution to meet client requirements', 'Development, testing, improvement and optimisation, review, skills and behaviours', 'The program with development and testing logs, meeting notes and an evaluative report']
        ] },
        { kind: 'p', html: 'Learning aims B and C are normally assessed together in one assignment, and the specification allows "a maximum number of two summative assignments for this unit". The language is not fixed. The content lists procedural languages such as C, Perl and Python, object-orientated ones such as C++, C# and Java, event-driven Visual Basic, machine code and mark-up such as HTML, and asks students to compare them by performance, development time and ease of development. Most centres teach the build in one language; we teach Python, the first procedural example named.' },
        { kind: 'table', mt: true, caption: 'Where Unit 4 sits in the five sizes of the qualification (2016 specification)', head: ['Size', 'Guided learning hours', 'Unit 4'], rows: [
          ['Certificate', '180', 'Not included'],
          ['Extended Certificate', '360', 'Not included'],
          ['Foundation Diploma', '510', 'Mandatory'],
          ['Diploma', '720', 'Mandatory'],
          ['Extended Diploma', '1080, equivalent in size to three A levels', 'Mandatory']
        ] },
        { kind: 'source', html: 'Source: Pearson, <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/btec-nationals/information-technology-2016.html" rel="noopener" target="_blank">BTEC Nationals Information Technology (2016)</a> and its Extended Diploma specification, Issue 6, read on 31 October 2026. Students on the smaller sizes may meet programming in optional units such as Mobile Apps Development or Computer Games Development instead.' }
      ]
    },
    {
      id: 'criteria', tint: 'deep', eyebrow: 'Pass to Distinction',
      h2: 'What do you need for a Distinction in BTEC IT Unit 4?',
      lede: 'Every Pass and Merit criterion, plus the three Distinction criteria: an evaluation of how computational thinking affects software quality, an evaluation of the optimised program against the client\'s requirements, and evidence of individual responsibility, creativity and self-management throughout.',
      body: [
        { kind: 'table', caption: 'Unit 4 criteria, with our plain-English reading (criteria from the specification)', head: ['Criterion', 'Pearson\'s wording, shortened', 'What it asks of the student (ours)'], rows: [
          ['A.P1 to A.P3', 'Explain computational thinking, programming principles in different languages, and design principles for quality', 'Explain, with real code examples, how problems are broken down and why language features matter'],
          ['A.M1', 'Analyse how computational thinking can impact software design and quality', 'Go beyond describing: show cause and effect'],
          ['A.D1', 'Evaluate how computational thinking can impact design and quality', 'Weigh strengths and limits and reach a judgement'],
          ['B.P4, B.P5', 'Produce a design to meet client requirements; review it with others', 'A design someone else could build from, improved after feedback'],
          ['B.M2', 'Justify design decisions', 'Say why each choice suits this client'],
          ['C.P6, C.P7', 'Produce a program that meets the requirements; review how far it does', 'Working, tested code and an honest review'],
          ['C.M3', '"Optimise the computer program to meet client requirements."', 'Make it better, measurably, and record how'],
          ['BC.D2', 'Evaluate the design and optimised program against client requirements', 'Judge the whole solution, not only the code'],
          ['BC.D3', '"Demonstrate individual responsibility, creativity and effective self-management"', 'Evidence that the student ran the project themselves']
        ] },
        { kind: 'p', html: 'BC.D3 deserves a second look. It asks for individual responsibility in "the design, development and review of the computer program". A student who has been steered step by step by someone outside college is, by definition, not showing it. That is one more reason the useful help is skill-building in advance rather than guidance during the assignment.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Robustness is in the content', p: 'The specification defines robustness as coding and testing so that "extreme and erroneous data can be processed without causing the program to crash". Validation is not optional polish.' },
          { h3: 'Test data has three kinds', p: 'A design needs a "Test plan with test data to include typical, extreme and erroneous data". We practise all three on every exercise.' },
          { h3: 'Optimisation needs evidence', p: 'C.M3 is easier to show when the first version was measured. We teach students to keep before-and-after notes on their own practice code.' }
        ] }
      ]
    },
    {
      id: 'rules', tint: '', eyebrow: 'Authentic work',
      h2: 'Can a tutor help with a BTEC IT assignment?',
      lede: 'A tutor can teach programming, and can help with practice tasks before an assignment begins. Once an assessment has begun, Pearson\'s rules say learners must not be given feedback on progress towards the criteria, the work must be the learner\'s own, and the learner signs a declaration saying so. We work entirely on the first side of that line.',
      body: [
        { kind: 'p', html: 'Pearson\'s specification is direct. "Once an assessment has begun, learners must not be given feedback on progress towards fulfilling the targeted criteria." "An assessor must assess only learner work that is authentic, i.e. learners\' own independent work." "Learners must authenticate the evidence that they provide for assessment through signing a declaration stating that it is their own work." Assessors in turn declare that the learner "has clearly referenced any sources used in the work". On malpractice, Pearson says it "does not tolerate actions (or attempted actions) of malpractice by learners, centre staff or centres in connection with Pearson qualifications", and may impose penalties where it is proven.' },
        { kind: 'table', mt: true, caption: 'Our line, drawn from Pearson\'s rules', head: ['We do', 'We never do'], rows: [
          ['Teach Python, design methods, testing and optimisation in lessons', 'Write, edit, debug or improve any code that will be submitted'],
          ['Set our own practice briefs, unlike the college\'s, with full feedback', 'Look at, comment on or suggest changes to an assignment brief once it is live'],
          ['Explain the meaning of words such as analyse, justify and evaluate', 'Draft, rewrite or check any report, log or evaluation for submission'],
          ['Teach how to reference sources properly', 'Supply code snippets, designs or text intended for the assignment'],
          ['Pause topic teaching that overlaps a live assignment if the college asks', 'Work around a college\'s instructions on outside help']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Resubmission is not a second draft',
          left: [
            'Pearson allows one resubmission only if the Lead Internal Verifier approves it, with a deadline "within 15 working days in the same academic year", and the learner must be able to improve "without further guidance".',
            'It is never offered where work "is not authentic". A retake, if allowed at all, "may only be achieved at a pass".'
          ],
          rightH3: 'What to tell the college',
          right: [
            'If a student has outside lessons, it is wise to tell the unit teacher. A short note saying that lessons cover general programming on separate practice tasks protects everyone.',
            'If the college has its own rule about tutoring during an assignment, that rule comes first, and we follow it.'
          ] },
        { kind: 'source', html: 'Source: Pearson BTEC Level 3 National Extended Diploma in Information Technology specification, Issue 6, section on making valid assessment decisions and dealing with malpractice, read on 31 October 2026. Pearson\'s fuller centre guidance on malpractice is on its website.' }
      ]
    },
    {
      id: 'status', tint: 'tint', eyebrow: 'Still running?',
      h2: 'Is the BTEC IT Level 3 qualification still running in 2026?',
      lede: 'Yes, for students already on it, with dates that differ by nation. Pearson\'s qualification page gives the last registration date for DfE-funded students in England as 31 July 2025, and 31 July 2029 for Northern Ireland and Wales.',
      body: [
        { kind: 'table', caption: 'BTEC Nationals Information Technology (2016): dates on Pearson\'s qualification page, read 31 October 2026', head: ['Item', 'As Pearson lists it'], rows: [
          ['First teaching', 'June 2016'],
          ['Performance tables', 'Applied Generals (2021 to 2026)'],
          ['Funding approval end date, England', '31 July 2025'],
          ['Last registration, England, DfE funded', '31 July 2025'],
          ['Last registration, England, private or apprenticeship funded', '31 December 2026'],
          ['Last registration, Northern Ireland', '31 July 2029'],
          ['Last registration, Wales', '31 July 2029']
        ] },
        { kind: 'p', html: 'In practice, a student in England on a two-year funded programme who registered before the end of July 2025 is still working through the units, including Unit 4, in 2026 to 2027. In Wales and Northern Ireland new cohorts can continue to register for several more years. If you are unsure which version or size your college offers, the unit list on the assignment briefs, or a quick question to the course leader, will tell you.' },
        { kind: 'p', html: 'Students choosing between routes after GCSE may also find <a class="ag-inline-link" href="/t-level-digital-coding-help">the T Level digital page</a> and <a class="ag-inline-link" href="/a-level-computer-science-tutor-online-uk">A level Computer Science tuition</a> useful, since the three qualifications teach programming in very different ways.' }
      ]
    },
    {
      id: 'practice', tint: '', eyebrow: 'Practice brief',
      h2: 'A worked practice brief: design, code, test, optimise',
      lede: 'Here is the kind of exercise we use in lessons. The brief is ours and deliberately unlike any Pearson assignment. It shows the full cycle on a small scale, so that the habits are automatic before the real brief arrives.',
      body: [
        { kind: 'p', html: '<strong>Practice brief (ours).</strong> A youth club wants a tiny program to record attendance at four sessions and report the average. Attendance is a whole number from 0 to 40, the hall\'s capacity. The program must not crash on bad input.' },
        { kind: 'ol', items: [
          '<strong>Decompose.</strong> Read one valid number; repeat four times; calculate and print the average. Three steps, one of them reusable.',
          '<strong>Abstract.</strong> Inputs: four attendance figures. Constant: the capacity of 40. Output: the average to one decimal place. Everything else about the club is irrelevant.',
          '<strong>Design the validation.</strong> Reject anything that is not a whole number, and anything outside 0 to 40, with a message that says what is wanted.',
          '<strong>Plan the tests before coding.</strong> Typical, extreme and erroneous data, as the specification asks.'
        ] },
        { kind: 'code', label: 'Our practice solution', lang: 'Python', code: CODE, note: 'One function does the validation and is reused four times. Written by us for teaching; it is not, and should never be used as, assignment code.' },
        { kind: 'table', mt: true, caption: 'Our test plan for the practice brief', head: ['Test', 'Type', 'Input', 'Expected result'], rows: [
          ['1', 'Typical', '12', 'Accepted'],
          ['2', 'Extreme', '0', 'Accepted, the lowest valid value'],
          ['3', 'Extreme', '40', 'Accepted, the highest valid value'],
          ['4', 'Erroneous', '41', 'Rejected with the range message, asked again'],
          ['5', 'Erroneous', 'twelve', 'Rejected with the whole-number message'],
          ['6', 'Erroneous', '-3', 'Rejected, because "-3".isdigit() is False'],
          ['7', 'Erroneous', '7.5', 'Rejected, not a whole number']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Optimise, and show it',
          left: [
            'A first version might repeat the input and checking code four times. Moving it into one function shortens the program, removes four chances for an inconsistent check, and makes a change to the capacity a one-line edit.',
            'That is maintainability, one of the quality factors the specification lists, and it can be shown with a before-and-after line count.'
          ],
          rightH3: 'Review against the brief',
          right: [
            'Does it reject bad data? Tests 4 to 7 say yes. Does it report the average? Yes, to one decimal place.',
            'What would the club want next? Perhaps names, dates or saving to a file, each a sensible extension to discuss, which is the habit an evaluation needs.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Try these yourself (ours).</strong> (1) Change the program so the capacity is a named constant. (2) Add a fifth session without copying any line. (3) Make it print the highest attendance as well. (4) Write two more erroneous tests the plan above misses. <strong>Hints:</strong> (1) CAPACITY = 40 at the top; (2) change range(1, 5) to range(1, 6); (3) max(sessions); (4) an empty input, or a number with spaces inside such as "1 2".' }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our lessons',
      h2: 'How do your BTEC IT programming lessons work?',
      lede: 'They follow the unit content, not your assignment. Students learn the language, the methods and the vocabulary on our own briefs, so that when the college assignment arrives they can do it independently.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first lesson.</strong> A short programming task and a conversation about where you are in the course, including whether any assignment is live.',
          '<strong>Timing around assignments.</strong> Ideally we start before Unit 4 begins. If an assignment is already live, lessons stay on general skills and separate practice tasks only.',
          '<strong>Learning aim A skills.</strong> Computational thinking, paradigms and constructs, explained with code we write in lessons, so the vocabulary is understood rather than memorised.',
          '<strong>Learning aims B and C skills.</strong> Design documents, flowcharts and pseudocode, validation, test plans and optimisation, all on practice briefs.',
          '<strong>Command words.</strong> What explain, analyse, justify and evaluate mean in practice, taught on our own examples.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1?',
          left: [
            'A group of 15 to 20 students suits steady skill building in Python across a term.',
            '1-on-1 suits a student who has fallen behind on the basics, or wants to move quickly before Unit 4 starts.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'Any grade. Grades are decided by college assessors and Pearson\'s quality assurance, on the student\'s own work.',
            'Any link with Pearson or any college. We are an independent online school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs before the Unit 4 brief',
    lede: 'Skills a student should have under their own control before the assignment starts.',
    table: { caption: 'Our progression for BTEC IT programming', head: ['Rung', 'When', 'What the student can do alone'], rows: [
      ['1. Core Python', 'First term', 'Variables, data types, selection, loops, functions and lists'],
      ['2. Robust programs', 'Second term', 'Validation, error handling, files, typical, extreme and erroneous testing'],
      ['3. Design and documentation', 'Before Unit 4', 'Problem definitions, flowcharts, pseudocode, test plans and logs'],
      ['4. Quality and evaluation', 'Before Unit 4', 'Optimising code, judging it against a brief, using the command words']
    ] },
    left: { h3: 'Rung two is the gap', ps: [
      'Many students can make code work on good input. Far fewer can make it survive bad input.',
      'Students wanting a wider view may like <a class="ag-inline-link" href="/coding-roadmap">the coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is where grades rise', ps: [
      'Merit and Distinction criteria ask for justification and evaluation. Both can be practised early.',
      'During live assignments we keep to general practice only.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for BTEC IT students',
    lede: 'Programming first, then the units that sit beside it.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'For Unit 4', courses: [
        { code: 'UK / BI1 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most Unit 4 students use.' },
        { code: 'UK / BI1 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Data structures and algorithms', blurb: 'Efficiency and the words to discuss it.' },
        { code: 'UK / BI1 / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java', blurb: 'An object-orientated language to compare.' }
      ] },
      { num: 'II', h3: 'Neighbouring units', sub: 'Web, apps and games', courses: [
        { code: 'UK / BI2 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development', blurb: 'HTML, CSS and JavaScript for the website unit.' },
        { code: 'UK / BI2 / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Building mobile apps step by step.' },
        { code: 'UK / BI2 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Event-driven programming through games.' }
      ] },
      { num: 'III', h3: 'Data and next steps', sub: 'Beyond the BTEC', courses: [
        { code: 'UK / BI3 / 01', slug: 'mysql-mastery-for-teens', title: 'SQL and databases', blurb: 'Data modelling and queries.' },
        { code: 'UK / BI3 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python taken into real models.' },
        { code: 'UK / BI3 / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version control, useful for development logs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'When BTEC programming lessons run',
    lede: T + ' Our teachers work from India, and every time offered to a UK student is stated in UK time.',
    slots: [
      { time: 'After college', l: 'The usual slot for sixth-form and college students.' },
      { time: 'Evening', l: 'Around part-time work.' },
      { time: 'Weekend', l: 'Longer sessions for a full practice brief.' }
    ],
    cells: [
      { h3: 'Unit content', p: 'Taught from the specification, not from your assignment.' },
      { h3: 'Our own briefs', p: 'Practice tasks unlike any college assignment, with full feedback.' },
      { h3: 'Three kinds of test data', p: 'Typical, extreme and erroneous in every exercise.' },
      { h3: 'Command words', p: 'Explain, analyse, justify and evaluate, practised on our examples.' },
      { h3: 'Assignment-safe', p: 'General practice only while a college assignment is live.' },
      { h3: 'Batch or 1-on-1', p: '15 to 20 students, or one student with one teacher.' }
    ]
  },

  projectsH2: 'What our teenage students have built',
  projectsLede: 'Projects from our own lessons, none of them submitted for any qualification. See <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents\' and students\' Google reviews, left exactly as posted.',

  fees: {
    h2: 'Fees for BTEC IT programming lessons',
    lede: 'Your first lesson is free. After that, a monthly fee applies, lower for a group place and higher for 1-on-1, and only once a course and weekly time are agreed. No contract ties you in.',
    free: ['A short programming task', 'A clear plan around your college timetable', 'Booked with a phone number'],
    group: ['15 to 20 students', 'The same teacher through the term', 'Practice briefs with feedback', 'Testing and validation every week'],
    one: ['One teacher, one student', 'A plan timed before Unit 4', 'Suits a student catching up on basics']
  },

  faq: {
    eyebrow: 'BTEC IT questions',
    h2: 'What BTEC IT students ask about the programming unit',
    items: [
      { q: 'What is BTEC IT Unit 4?', a: 'Unit 4: Programming is a Level 3, internally assessed unit of 90 guided learning hours in the BTEC Nationals in Information Technology (2016). Students examine computational thinking, then design and develop a program for a client.' },
      { q: 'Is Unit 4 Programming mandatory?', a: 'It is mandatory in the Foundation Diploma, Diploma and Extended Diploma, according to Pearson\'s specification. It is not part of the Certificate or Extended Certificate.' },
      { q: 'Which programming language should I use for BTEC IT?', a: 'Pearson does not fix one. The specification gives Python, C and Perl as procedural examples, C++, C# and Java as object-orientated ones and Visual Basic as event-driven, and your college chooses. We teach Python, with Java for comparison.' },
      { q: 'How do I get a Distinction in Unit 4?', a: 'You need every Pass and Merit criterion plus A.D1, BC.D2 and BC.D3: evaluating computational thinking, evaluating your optimised program against the client\'s needs, and showing individual responsibility and creativity. All three depend on your own independent work.' },
      { q: 'Can a tutor help me with my BTEC assignment?', a: 'A tutor can teach programming and help with practice work. Once an assessment has begun, Pearson says learners must not be given feedback on progress towards the criteria, and you sign a declaration that the work is your own, so we never help with live assessed work.' },
      { q: 'What happens if work is not authentic?', a: 'Pearson treats it as malpractice and may impose penalties. Its specification also says no resubmission is offered where work is not authentic.' },
      { q: 'Can I resubmit a BTEC assignment?', a: 'Only once, if the Lead Internal Verifier approves it, with a deadline within 15 working days in the same academic year, and only where you can improve without further guidance.' },
      { q: 'Is BTEC IT being scrapped?', a: 'Pearson lists 31 July 2025 as the last registration date for DfE-funded students in England, and 31 July 2029 for Northern Ireland and Wales. Students already registered continue their course.' },
      { q: 'When are lessons?', a: T + ' All times are given in UK time.' },
      { q: 'Are you connected with Pearson or my college?', a: 'No. Modern Age Coders is an independent online school, not linked to Pearson or any school or college.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related routes',
    h2: 'Other pages for 16 to 19 programmers',
    lede: 'Other post-16 qualifications that involve programming, and where they differ.',
    items: [
      { href: '/t-level-digital-coding-help', label: 'T Level digital help', p: 'The technical route with an employer placement.' },
      { href: '/a-level-computer-science-tutor-online-uk', label: 'A level Computer Science', p: 'The academic route, with its own exam papers.' },
      { href: '/a-level-computer-science-nea-help', label: 'A level Computer Science project', p: 'Coursework at AQA and OCR, and the line around it.' },
      { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA Software Systems Development', p: 'Northern Ireland\'s programming A level.' },
      { href: '/ai-agents-course-for-students-uk', label: 'AI agents course for students', p: 'Building with AI once the basics are secure.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free programming lesson',
    lede: 'Leave a number and we will call at a UK time that suits. The lesson is a short coding task and a plan built around your college timetable and any live assignment.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python for Teens syllabus</a> lists what we teach, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons.',
    note: 'WhatsApp works well and is free from a UK mobile. We reply from India, so the number begins +91.',
    formNote: 'No fee and no obligation; you get one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Post-16 computing', links: [
        { href: '/t-level-digital-coding-help', label: 'T Level digital' },
        { href: '/a-level-computer-science-tutor-online-uk', label: 'A level Computer Science' },
        { href: '/a-level-computer-science-nea-help', label: 'A level CS project' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR H446' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'BTEC IT programming skills, live in UK time'
  },

  personalityCss: `
.ag-root.ag-bip .ag-hero h1 { letter-spacing: -0.02em; font-weight: 700; }
.ag-root.ag-bip .ag-capsule { border-left-width: 5px; border-right: 1px solid var(--ag-accent); }
.ag-root.ag-bip .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bip .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-bip .ag-table td:first-child { font-weight: 640; white-space: nowrap; }
.ag-root.ag-bip .ag-code pre { font-size: 0.86rem; }
`,

  dossier: {
    curriculumAuthority: 'Pearson BTEC Level 3 Nationals in Information Technology (2016), Extended Diploma specification Issue 6 April 2021: sizes 180 to 1080 GLH; Unit 4 Programming, Level 3, internal, 90 GLH, mandatory in Foundation Diploma, Diploma and Extended Diploma; learning aims A, B and C; maximum two summative assignments; languages listed by paradigm; test data typical, extreme and erroneous; robustness definition; criteria A.P1 to A.D1, B.P4, B.P5, B.M2, C.P6, C.P7, C.M3, BC.D2, BC.D3. Authenticity: no feedback on criteria once assessment has begun; own independent work; learner declaration; assessor declaration on referenced sources; resubmission once, within 15 working days, not for inauthentic work; retake at pass only; Pearson does not tolerate malpractice. Qualification page: first teaching June 2016; Applied Generals performance tables 2021 to 2026; England funding and DfE-funded last registration 31 July 2025; England private 31 December 2026; NI and Wales 31 July 2029.',
    localProject: 'Unit 4 is internally assessed and Pearson\'s authenticity rules close the door once the assignment starts, so all legitimate help happens before it, on practice work. A BTEC IT programming door: the unit\'s learning aims and evidence, its place in the five sizes, the Pass to Distinction criteria with a plain-English column, Pearson\'s authenticity, resubmission and malpractice wording quoted, a we-do and we-never table, the qualification\'s registration dates by nation, and an original practice brief (a youth club attendance logger) with decomposition, Python code, a seven-row test plan using typical, extreme and erroneous data, an optimisation note and extension tasks. Lesson family: a vocational coursework-unit door.',
    requiredMentions: [
      'Once an assessment has begun, learners must not be given feedback on progress towards fulfilling the targeted criteria.',
      'An assessor must assess only learner work that is authentic, i.e. learners\' own independent work.',
      'Learners must authenticate the evidence that they provide for assessment through signing a declaration stating that it is their own work.',
      'does not tolerate actions (or attempted actions) of malpractice by learners, centre staff or centres in connection with Pearson qualifications',
      'Learners study the underpinning concepts and implications of programming languages to design, develop and test computer programs.',
      'a maximum number of two summative assignments for this unit',
      'Test plan with test data to include typical, extreme and erroneous data',
      'Optimise the computer program to meet client requirements.',
      'A youth club wants a tiny program'
    ],
    sources: [
      { claim: 'Pearson, BTEC Nationals Information Technology (2016) qualification page: first teaching, performance tables, funding and last registration dates by nation.', url: 'https://qualifications.pearson.com/en/qualifications/btec-nationals/information-technology-2016.html' },
      { claim: 'Pearson BTEC Level 3 National Extended Diploma in IT specification, Issue 6: sizes, Unit 4 content and criteria, authenticity, resubmission, malpractice.', url: 'https://qualifications.pearson.com/content/dam/pdf/BTEC-Nationals/Information-Technology/2016/specification-and-sample-assessments/specification-pearson-btec-level-3-national-extended-diploma-in-information-technology.pdf' },
      { claim: 'Pearson BTEC Nationals Information Technology (2016) specification list for the other four sizes.', url: 'https://qualifications.pearson.com/content/dam/pdf/BTEC-Nationals/Information-Technology/2016/specification-and-sample-assessments/specification-pearson-btec-level-3-national-diploma-in-information-technology.pdf' }
    ],
    rejectedClaims: [
      'Any help with live assessed work, code review of submissions or report checking: refused, under Pearson\'s authenticity rules.',
      'Reasons behind England\'s funding end date: not stated on the Pearson page read, so the page gives the dates only.',
      'Any newer replacement qualification: not checked against a Pearson page for this build, so not named.',
      'Pass rates or grade distributions for Unit 4: not found in the documents read.',
      'Any promise of a Merit or Distinction: declined.'
    ]
  }
};
