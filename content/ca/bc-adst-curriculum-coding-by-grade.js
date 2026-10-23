'use strict';
// BC ADST curriculum, coding by grade (ag- curriculum door; Canada cluster Plan 2, row 21).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl by this writer on 23 October 2026, one request at a time, all HTTP 200 (copies and .txt extractions
// in keyword-research-2026-09/ca/src-pilots/bc-adst-curriculum-coding-by-grade/adst-{k,1..9}-core.*):
//  - curriculum.gov.bc.ca/curriculum/adst/k/core and /1, /2, /3 (identical standards): "Students are expected to use the learning
//    standards for Curricular Competencies from Applied Design, Skills, and Technologies K-3 in combination with grade-level content
//    from other areas of learning in cross-curricular activities to develop foundational mindsets and skills in design thinking and
//    making."; big ideas "Designs grow out of natural curiosity.", "Skills can be developed through play.", "Technologies are tools that
//    extend human capabilities."; competencies "Use trial and error to make changes, solve problems, or incorporate new ideas from self
//    or others", "Use materials, tools, and technologies in a safe manner in both physical and digital environments".
//  - /adst/4/core and /5/core (identical): the same sentence for "Applied Design, Skills, and Technologies 4-5"; big ideas "Designs can
//    be improved with prototyping and testing.", "Skills are developed through practice, effort, and action.", "The choice of technology
//    and tools depends on the task."; competencies "Make changes and test again, repeating until satisfied with the product",
//    "Demonstrate a willingness to learn new technologies as needed".
//  - /adst/6/core and /7/core (Computational Thinking identical): "Students will experience a minimum of three modules of Applied
//    Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."; "Locally developed modules can be offered in addition to, or
//    instead of, the modules in the provincial curriculum."; "for sorting, searching, sequence, selection, and repetition; specific
//    statements to complete a simple task; cryptography and code breaking (e.g., cyphers)"; "graphs, charts, network diagrams, info
//    graphics, flow charts, lists, tables, or arrays"; "historical perspectives, evolution (e.g., Ada Lovelace, punch cards, Hollerith,
//    Grace Hopper, Alan Turing, Enigma, cyphers)"; "for example, Kodu, Scratch"; Robotics "a robot is a machine capable of carrying out
//    a complex series of actions automatically"; sensors, control systems, effectors; "programming and logic for robotics components";
//    "for example, VEX IQ, LEGO Mindstorms/NXT, Cubelets".
//  - /adst/8/core: "Schools are required to provide students with the equivalent of a full-year "course" in Applied Design, Skills, and
//    Technologies." (curly quotes in source); "software programs as specific and sequential instructions with algorithms that can be
//    reliably repeated by others"; "debugging algorithms and programs by breaking problems down into a series of sub-problems"; "binary
//    number system (1s and 0s) to represent data"; "for example, Scratch, Alice, Greenfoot, BlueJ"; "text-based programming"; "for
//    example, HTML"; "programming modular components"; "for example, Arduino, LEGO Mindstorms"; Robotics "bump, motion, sound, light,
//    infrared"; "user and autonomous control systems"; "program flow".
//  - /adst/9/core: "There are more Content learning standards for Grade 9, as schools often offer these as full courses."; ICT
//    "text-based coding", "HTML, CSS, JavaScript"; "binary representation of various data types, including text, sound, pictures,
//    video"; "drag-and-drop mobile development"; "for example, Arduino, Raspberry Pi, LEGO Mindstorms"; "cloud-based environment",
//    "for example, Cloud 9, GitHub"; Electronics and Robotics "for example, G-code, C++, Sketch"; "for example, VEX, VEX IQ, LEGO
//    Mindstorms/NXT, Arduino, EasyC, RobotC, Scratch for Arduino".
//  - curriculum.gov.bc.ca/curriculum/adst (research copy 22 October 2026; facts row 68): Computer Studies 10, Web Development 10,
//    Computer Programming 11 and 12, Computer Information Systems 11 and 12, Robotics 11 and 12.
//  - Time: facts-geo.md section 3 (BC UTC-7 permanent after 8 March 2026; East Kootenay and Golden UTC-6).
// Our own material, labelled on the page: the grid-robot unplugged activity, the shift cypher and its brute-force code breaker in
// Python 3.13 ("MEET AT THE LIBRARY AT NOON", key 3, "PHHW DW WKH OLEUDUB DW QRRQ"), the binary converter (0, 5, 13, 26, 255 all
// round-trip), ten practice questions with checked answers, the parent question list, the by-grade activity column. Lesson family:
// precise instructions, then test them.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CYPHER_PY = `# A shift cypher, then breaking it by trying every key (ours)
ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def shift(message, key):
    out = ""
    for ch in message.upper():
        if ch in ALPHABET:
            out += ALPHABET[(ALPHABET.index(ch) + key) % 26]
        else:
            out += ch                      # spaces and punctuation pass through
    return out

secret = shift("MEET AT THE LIBRARY AT NOON", 3)
print("encoded:", secret)
print("decoded:", shift(secret, -3))

# Code breaking: try all 25 keys and keep the ones that contain a common word
for key in range(1, 26):
    guess = shift(secret, -key)
    if " THE " in guess:
        print("key", key, "->", guess)`;

const CYPHER_OUT = `encoded: PHHW DW WKH OLEUDUB DW QRRQ
decoded: MEET AT THE LIBRARY AT NOON
key 3 -> MEET AT THE LIBRARY AT NOON`;

const BIN_PY = `# Whole number to binary, one sub-problem at a time (ours)
def to_binary(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits    # the remainder is the next bit, right to left
        n = n // 2
    return bits

for n in [0, 5, 13, 26, 255]:
    print(n, "->", to_binary(n), "check:", int(to_binary(n), 2))`;

const BIN_OUT = `0 -> 0 check: 0
5 -> 101 check: 5
13 -> 1101 check: 13
26 -> 11010 check: 26
255 -> 11111111 check: 255`;

const SRC_ADST = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC Applied Design, Skills, and Technologies curriculum</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'BC ADST BY GRADE', blurb: 'Where coding sits in BC\'s ADST curriculum from Kindergarten to Grade 9, grade by grade from the curriculum pages, with a cypher and a binary program to try at home.' },
  slug: 'bc-adst-curriculum-coding-by-grade',
  code: 'bacb',
  accent: '#595D94',
  accentRationale: 'BC ADST coding by grade: a muted periwinkle slate, #595D94, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 5.80 on the paper #FBF8F2, 5.45 on #F5F1E8 and 4.99 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'BC ADST curriculum, coding by grade',
  title: 'BC ADST Curriculum: Coding by Grade, Kindergarten to Grade 9',
  description: 'The BC ADST curriculum by grade: what Kindergarten to Grade 9 says about coding, computational thinking and robotics, quoted from the curriculum, with activities.',
  ogDescription: 'Grade by grade, where coding appears in BC\'s Applied Design, Skills, and Technologies curriculum, from cross-curricular design in K to 3 to HTML, CSS and JavaScript in Grade 9.',
  twitterDescription: 'BC ADST coding content from Kindergarten to Grade 9, quoted from the curriculum, with activities to try.',
  pageName: 'BC ADST Curriculum: Coding by Grade',
  webPageDescription: 'A guide for British Columbia parents and students to the coding, computational thinking and robotics content of the ADST curriculum from Kindergarten to Grade 9, built from the curriculum pages fetched on 23 October 2026.',
  courseDescription: 'Live online coding classes for BC children and teens that build on the ADST curriculum, from block coding to Python, in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'ADST coding by grade',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#grades', label: 'By grade' },
    { href: '#g67', label: 'Grades 6 and 7' },
    { href: '#g8', label: 'Grade 8' },
    { href: '#g9', label: 'Grade 9' },
    { href: '#cypher', label: 'Try it' }
  ],
  eyebrow: 'British Columbia &middot; Kindergarten to Grade 9 &middot; ADST',
  h1: 'BC ADST curriculum: where coding appears, grade by grade',
  lede: 'In British Columbia, coding at school lives mostly inside Applied Design, Skills, and Technologies, usually shortened to ADST. The curriculum changes shape as children grow: in the early grades it is design thinking woven through other subjects, in Grades 6 and 7 it comes as short modules, and in Grades 8 and 9 it becomes the equivalent of a full-year course, with programming named outright. This page sets out what each grade&rsquo;s curriculum page actually says about coding, quoted from curriculum.gov.bc.ca, with an activity of ours for each stage and two short programs to try at home.',
  secondaryCta: { href: '#grades', label: 'See the grade table' },
  wa: 'Hello Modern Age Coders, my child is in a BC school and I would like to build on the ADST coding they meet. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; from block code to Python',
  spec: [
    ['Covers', 'Kindergarten to Grade 9, then 10 to 12'],
    ['Subject', 'Applied Design, Skills, and Technologies'],
    ['K to 5', 'Design thinking across subjects'],
    ['6 and 7', 'At least three modules a year'],
    ['8 and 9', 'A full-year course equivalent'],
    ['Our classes', 'Block coding to Python, live online'],
    ['Format', 'A batch, or one to one'],
    ['Clock', 'Pacific time, UTC-7 all year']
  ],
  capsuleQ: 'In short',
  capsule: 'BC&rsquo;s ADST curriculum teaches coding in stages: design thinking across subjects in Kindergarten to Grade 5, modules such as Computational Thinking and Robotics in Grades 6 and 7, then visual and text-based programming in Grade 8 and HTML, CSS and JavaScript in Grade 9. Modern Age Coders builds on it live online, in a batch or one to one, through Coding for Kids and Python and AI for kids.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that build on ADST coding',
    lede: 'Matched to the stages below: block coding for the younger grades, typed Python for the middle years, and web code for Grade 9 and up.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BACB / 01', title: 'Coding for Kids', note: 'Ages 6 to 10. Sequences, loops and events in block code, the visual programming the Grade 6 and 7 modules name.' },
      { course: 'python-ai-kids-masterclass', code: 'BACB / 02', title: 'Python and AI for kids', note: 'Ages 9 to 13. The step from blocks to typed code that Grade 8&rsquo;s text-based programming points towards.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'BACB / 03', title: 'JavaScript for teens', note: 'Ages 13 to 18. HTML, CSS and JavaScript, the three the Grade 9 ICT content lists.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: 'tint', eyebrow: 'The curriculum, grade by grade',
      h2: 'Coding in BC&rsquo;s ADST curriculum, Kindergarten to Grade 9',
      lede: 'Each grade has its own ADST page on curriculum.gov.bc.ca. The table below quotes how each page says ADST is delivered and what it lists that relates to coding. The last column is ours: an activity at the right level for that stage.',
      body: [
        { kind: 'table', caption: 'Coding-related ADST content by grade, quoted from the BC curriculum pages (fetched 23 October 2026)', head: ['Grades', 'How ADST is delivered', 'Coding-related content listed', 'An activity at this level (ours)'], rows: [
          ['K to 3', 'Competencies used &ldquo;in combination with grade-level content from other areas of learning in cross-curricular activities&rdquo;', 'No coding content listed; big idea &ldquo;Skills can be developed through play.&rdquo;', 'Give a friend step-by-step directions across a grid, then fix the steps that go wrong'],
          ['4 and 5', 'The same cross-curricular approach, for ADST 4-5', 'No coding content listed; big idea &ldquo;Designs can be improved with prototyping and testing.&rdquo;', 'Build a simple game in block code, test it with a sibling, change one rule'],
          ['6 and 7', '&ldquo;a minimum of three modules&rdquo; each year, chosen by the school', 'Computational Thinking: simple algorithms, cyphers, visual programming &ldquo;for example, Kodu, Scratch&rdquo;; Robotics: &ldquo;programming and logic for robotics components&rdquo;', 'Encode a message with a shift cypher by hand, then break a friend&rsquo;s'],
          ['8', 'The equivalent of a full-year &ldquo;course&rdquo;, made of one or more modules', '&ldquo;binary number system (1s and 0s) to represent data&rdquo;; visual and &ldquo;text-based programming&rdquo;; &ldquo;programming modular components&rdquo;', 'Write a binary converter in Python and check it against the built-in one'],
          ['9', 'A full-year course equivalent; &ldquo;schools often offer these as full courses&rdquo;', 'ICT: &ldquo;text-based coding&rdquo; in &ldquo;HTML, CSS, JavaScript&rdquo;; Electronics and Robotics: coding &ldquo;for example, G-code, C++, Sketch&rdquo;', 'Build a one-page website with a button that changes text']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table means for a family',
          left: [
            'Coding is not a separate subject in BC elementary schools. Before Grade 6, the ADST pages list no content at all, only big ideas and curricular competencies to be used with other subjects. Whether a Grade 3 class meets block coding depends on the teacher&rsquo;s choices, not on a provincial requirement to code.',
            'From Grade 6 the picture sharpens. The curriculum lists Computational Thinking and Robotics among its modules, and by Grade 8 programming is named content. Even then, the school chooses which modules to run.'
          ],
          rightH3: 'Why the same grade can look different',
          right: [
            'The Grade 6 and 7 page says schools &ldquo;may choose from among the modules listed below or develop new modules&rdquo;, and that &ldquo;Locally developed modules can be offered in addition to, or instead of, the modules in the provincial curriculum.&rdquo; The Grade 8 and 9 pages say the same of their modules.',
            'So two Grade 7 students in BC can have very different ADST years, both fully within the curriculum. The useful question for the school is which modules your child&rsquo;s class is taking this year.'
          ] },
        { kind: 'source', html: 'Source: the Kindergarten to Grade 9 core pages of the ' + SRC_ADST + ', each fetched raw on 23 October 2026. The K, 1, 2 and 3 pages carry identical standards, as do the Grade 4 and 5 pages. Neither BC&rsquo;s education ministry nor any district is connected with our classes.' }
      ]
    },
    {
      id: 'k5', tint: 'deep', eyebrow: 'Kindergarten to Grade 5',
      h2: 'Kindergarten to Grade 5: design thinking, not coding lessons',
      lede: 'The early ADST pages are short. They give big ideas and curricular competencies, and they say plainly that these are to be used with content from other subjects.',
      body: [
        { kind: 'table', caption: 'ADST big ideas and two competencies for each early band, quoted from the BC curriculum (fetched 23 October 2026)', head: ['Band', 'Big ideas', 'Two competencies that apply to coding'], rows: [
          ['K to 3', '&ldquo;Designs grow out of natural curiosity.&rdquo; &ldquo;Skills can be developed through play.&rdquo; &ldquo;Technologies are tools that extend human capabilities.&rdquo;', '&ldquo;Use trial and error to make changes, solve problems, or incorporate new ideas from self or others&rdquo;; &ldquo;Use materials, tools, and technologies in a safe manner in both physical and digital environments&rdquo;'],
          ['4 and 5', '&ldquo;Designs can be improved with prototyping and testing.&rdquo; &ldquo;Skills are developed through practice, effort, and action.&rdquo; &ldquo;The choice of technology and tools depends on the task.&rdquo;', '&ldquo;Make changes and test again, repeating until satisfied with the product&rdquo;; &ldquo;Demonstrate a willingness to learn new technologies as needed&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Coding fits these competencies well',
          left: [
            'Trial and error, testing and changing, choosing a tool for the task: these are exactly the habits a young coder builds. A Grade 2 child who programs a character to walk across a screen, sees it stop short, and adds one more step is doing what the K to 3 competencies describe.',
            'A teacher may bring block coding or floor robots into another subject, a math lesson on counting steps or a story told through animation. The curriculum makes room for that without requiring it.'
          ],
          rightH3: 'Our unplugged grid activity (K to 3)',
          right: [
            'Draw a 4 by 4 grid and place a toy in the bottom-left square, facing up. Two commands only: F moves one square forward, R turns right a quarter turn. The program F F R F F moves the toy two squares up, turns it to face right, and moves it two squares right.',
            'Now let your child write a program to reach a target square, run it with the toy, and fix it when it misses. That is sequencing and debugging with no screen at all, and the questions in our practice set start here.'
          ] }
      ]
    },
    {
      id: 'g67', tint: 'tint', eyebrow: 'Grades 6 and 7',
      h2: 'Grades 6 and 7: modules, including Computational Thinking and Robotics',
      lede: 'The Grade 6 and 7 pages are where coding is first named. The rule for delivery is clear: &ldquo;Students will experience a minimum of three modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7.&rdquo; Two of the listed modules are about computing.',
      body: [
        { kind: 'table', caption: 'Computing content in the Grade 6 and 7 modules, quoted from the BC curriculum (fetched 23 October 2026; identical on both pages)', head: ['Module', 'Content item', 'The curriculum&rsquo;s elaboration'], rows: [
          ['Computational Thinking', 'Simple algorithms that reflect computational thinking', '&ldquo;for sorting, searching, sequence, selection, and repetition; specific statements to complete a simple task; cryptography and code breaking (e.g., cyphers)&rdquo;'],
          ['Computational Thinking', 'Visual representations of problems and data', '&ldquo;graphs, charts, network diagrams, info graphics, flow charts, lists, tables, or arrays&rdquo;'],
          ['Computational Thinking', 'Evolution of programming languages', '&ldquo;historical perspectives, evolution (e.g., Ada Lovelace, punch cards, Hollerith, Grace Hopper, Alan Turing, Enigma, cyphers)&rdquo;'],
          ['Computational Thinking', 'Visual programming', '&ldquo;for example, Kodu, Scratch&rdquo;'],
          ['Robotics', 'What a robot is', '&ldquo;a robot is a machine capable of carrying out a complex series of actions automatically&rdquo;'],
          ['Robotics', 'Main components', 'Sensors (&ldquo;sense&rdquo;), control systems (&ldquo;think&rdquo;) and effectors (&ldquo;act&rdquo;)'],
          ['Robotics', 'Programming and platforms', '&ldquo;programming and logic for robotics components&rdquo;; platforms &ldquo;for example, VEX IQ, LEGO Mindstorms/NXT, Cubelets&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three ideas worth practising at home',
          left: [
            'Sequence, selection and repetition are named together, and they are the three building blocks of every program: do this, then this; if something is true, do this; repeat this. A child who can spot all three in a short block script is ready for the Grade 8 content.',
            'Cryptography appears twice, as an algorithm topic and in the history list beside Enigma and Alan Turing. That makes a shift cypher an ideal home project: it is an algorithm, it has a history, and breaking one teaches searching. Our worked example below does exactly that.'
          ],
          rightH3: 'Not every Grade 6 or 7 class meets these modules',
          right: [
            'Three modules a year is the minimum, and the list also includes drafting, food studies, media arts, metalwork, textiles, woodwork and more. A school may run Computational Thinking one year and not the next, or develop its own module.',
            'If your child&rsquo;s modules this year are woodwork and textiles, they are getting a proper ADST year with no coding in it. Home practice or a class outside school is the way to keep coding going in that case.'
          ] }
      ]
    },
    {
      id: 'g8', tint: 'deep', eyebrow: 'Grade 8',
      h2: 'Grade 8: a full-year course equivalent, and programming named',
      lede: 'Grade 8 changes the delivery rule: &ldquo;Schools are required to provide students with the equivalent of a full-year &ldquo;course&rdquo; in Applied Design, Skills, and Technologies.&rdquo; That course can be one module or several. The Computational Thinking module now reads like a first programming course.',
      body: [
        { kind: 'table', caption: 'Grade 8 Computational Thinking and Robotics content, quoted from the BC curriculum (fetched 23 October 2026)', head: ['Content item', 'As the Grade 8 page puts it', 'What it looks like (ours)'], rows: [
          ['What software is', '&ldquo;software programs as specific and sequential instructions with algorithms that can be reliably repeated by others&rdquo;', 'Instructions precise enough that anyone running them gets the same result'],
          ['Debugging', '&ldquo;debugging algorithms and programs by breaking problems down into a series of sub-problems&rdquo;', 'Test each part alone to find the broken one'],
          ['Data', '&ldquo;binary number system (1s and 0s) to represent data&rdquo;', 'Convert numbers to binary and back'],
          ['Languages', 'Visual programming &ldquo;for example, Scratch, Alice, Greenfoot, BlueJ&rdquo;, in relation to &ldquo;text-based programming&rdquo; &ldquo;for example, HTML&rdquo;', 'The same idea built in blocks, then typed'],
          ['Hardware', '&ldquo;programming modular components&rdquo; &ldquo;for example, Arduino, LEGO Mindstorms&rdquo;', 'Code that makes a light blink or a motor turn'],
          ['Robotics', 'Sensors &ldquo;bump, motion, sound, light, infrared&rdquo;; &ldquo;user and autonomous control systems&rdquo;; &ldquo;program flow&rdquo;', 'A robot that stops when a sensor reading crosses a limit']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Debugging by sub-problems',
          left: [
            'The Grade 8 debugging item is one of the most useful lines in the whole ADST curriculum. Breaking a broken program into parts, and testing each part on its own, is how professional programmers find faults too.',
            'Our binary converter below shows the method. It has two sub-problems, find the next bit and build the answer in the right order, and practice question 9 has a bug in the second one that a sub-problem test finds immediately.'
          ],
          rightH3: 'Artificial intelligence appears too',
          right: [
            'The Grade 8 Digital Literacy content lists the ethical and legal implications of current and future technologies, with examples that include automation and artificial intelligence. So Grade 8 is the first ADST page that names AI.',
            'For children under 18, tool choice matters: many AI chat tools set age limits in their own terms, and ChatGPT asks for a parent&rsquo;s permission for users under 18. Our classes teach how AI systems work before students use them.'
          ] }
      ]
    },
    {
      id: 'g9', tint: 'tint', eyebrow: 'Grade 9',
      h2: 'Grade 9: web code, hardware and the start of real courses',
      lede: 'The Grade 9 page notes that &ldquo;There are more Content learning standards for Grade 9, as schools often offer these as full courses.&rdquo; Two modules carry the coding: Information and Communications Technologies, and Electronics and Robotics.',
      body: [
        { kind: 'table', caption: 'Grade 9 coding content, quoted from the BC curriculum (fetched 23 October 2026)', head: ['Module', 'Content', 'Examples the curriculum gives'], rows: [
          ['Information and Communications Technologies', '&ldquo;text-based coding&rdquo;', '&ldquo;HTML, CSS, JavaScript&rdquo;'],
          ['Information and Communications Technologies', 'Data', '&ldquo;binary representation of various data types, including text, sound, pictures, video&rdquo;'],
          ['Information and Communications Technologies', 'Mobile apps', '&ldquo;drag-and-drop mobile development&rdquo;'],
          ['Information and Communications Technologies', 'Programming modular components', '&ldquo;for example, Arduino, Raspberry Pi, LEGO Mindstorms&rdquo;'],
          ['Information and Communications Technologies', 'Collaboration in a &ldquo;cloud-based environment&rdquo;', '&ldquo;for example, Cloud 9, GitHub&rdquo;'],
          ['Electronics and Robotics', 'Coding for robotics', '&ldquo;for example, G-code, C++, Sketch&rdquo;'],
          ['Electronics and Robotics', 'Platforms for robotics programming', '&ldquo;for example, VEX, VEX IQ, LEGO Mindstorms/NXT, Arduino, EasyC, RobotC, Scratch for Arduino&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A big step from Grade 8',
          left: [
            'Grade 8 names text-based programming with HTML as its example. Grade 9 names three web languages, C++ for robotics, binary representation of sound and pictures, and collaboration through GitHub. For a student who takes these modules, Grade 9 is a serious introduction to computing.',
            'For a student who does not, the gap to Grade 10 courses such as Web Development 10 can be large. A year of steady practice outside school closes it.'
          ],
          rightH3: 'Then Grades 10 to 12',
          right: [
            'After Grade 9 the ADST modules give way to named courses. In the computing family the provincial list starts with Computer Studies 10 and Web Development 10 and runs up to the Grade 11 and 12 programming, information systems and robotics courses. Two more computing courses, Computer Science 11 and 12, sit in the Mathematics list instead.',
            'Our <a class="ag-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 guide</a> reads those senior courses from the curriculum in the same way this page reads Kindergarten to Grade 9.'
          ] }
      ]
    },
    {
      id: 'cypher', tint: 'deep', eyebrow: 'Try it, ours',
      h2: 'A cypher for Grades 6 and 7, then the code to break it',
      lede: 'This example is ours. It starts with the Grade 6 and 7 idea of &ldquo;cryptography and code breaking&rdquo; done on paper, then turns it into a Python program that a Grade 8 or 9 student can read and change.',
      body: [
        { kind: 'ol', items: [
          '<b>On paper first.</b> Write the alphabet in a row. To encode with key 3, replace each letter with the one three places later: A becomes D, B becomes E, and X, Y, Z wrap round to A, B, C.',
          '<b>Encode a message.</b> MEET AT THE LIBRARY AT NOON becomes PHHW DW WKH OLEUDUB DW QRRQ. Spaces stay as they are.',
          '<b>Decode by shifting back.</b> Move each letter three places earlier. Anyone who knows the key can read the message.',
          '<b>Break it without the key.</b> There are only 25 useful keys. Try each one and look for real words. That is a search, one of the simple algorithms the curriculum lists.',
          '<b>Let the computer search.</b> The program below encodes, decodes, then tries all 25 keys and keeps any guess containing the word THE.'
        ] },
        { kind: 'code', label: 'Python &middot; shift cypher and code breaker (ours)', lang: 'python', code: CYPHER_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: CYPHER_OUT, note: 'Only key 3 produces a message with THE in it, so the search finds the key on its own.' },
        { kind: 'two', mt: true,
          leftH3: 'What each part teaches',
          left: [
            'The shift function uses all three building blocks the Grade 6 and 7 page names: a sequence of steps, a selection (is this character a letter?) and repetition (do it for every character). The <code>% 26</code> handles the wrap-around from Z back to A.',
            'The code breaker is a search: try every possibility, test each one, keep the matches. It works because the key space is tiny, which is exactly why this cypher is not safe for real secrets.'
          ],
          rightH3: 'Extensions by age',
          right: [
            'Grade 6 or 7: do the paper version, then build it in Scratch with a list of letters. Grade 8: type the Python, change the key, and make the breaker look for a different common word. Grade 9: count which letters appear most often in a long encoded message, and use that to guess the key without trying all 25.',
            'The history list on the same curriculum page names Enigma and Alan Turing. The story of how wartime codes were broken is a natural next read.'
          ] }
      ]
    },
    {
      id: 'binary', tint: 'tint', eyebrow: 'Try it, ours',
      h2: 'Binary for Grade 8, written as sub-problems',
      lede: 'Grade 8 lists the &ldquo;binary number system (1s and 0s) to represent data&rdquo;. This short program of ours converts whole numbers to binary and checks every answer against Python&rsquo;s own converter.',
      body: [
        { kind: 'ol', items: [
          '<b>Sub-problem 1: find the next bit.</b> The remainder when a number is divided by 2 is its last binary digit. 13 divided by 2 is 6 remainder 1, so 13 ends in 1.',
          '<b>Sub-problem 2: build the answer in order.</b> Each new remainder goes in front of the bits found so far, because remainders come out right to left.',
          '<b>Repeat until nothing is left.</b> 13 gives remainders 1, 0, 1, 1, so 13 is 1101 in binary.',
          '<b>Handle the edge case.</b> Zero would give an empty answer, so the function returns 0 straight away.',
          '<b>Check every answer.</b> Python&rsquo;s <code>int(text, 2)</code> reads binary back, so each result can be tested automatically.'
        ] },
        { kind: 'code', label: 'Python &middot; binary converter (ours)', lang: 'python', code: BIN_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: BIN_OUT },
        { kind: 'p', mt: true, html: 'Every number comes back unchanged, so both sub-problems work. If one did not, testing each sub-problem alone, as the Grade 8 debugging content describes, would find it. For a gentler introduction, our post on <a class="ag-inline-link" href="/blog/binary-numbers-explained">binary numbers explained</a> starts from counting on fingers.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Ten practice questions, from Kindergarten level to Grade 9',
      lede: 'We wrote these questions for this page, two for each stage. Younger children can do the first ones aloud with a parent; teens can go straight to the end.',
      body: [
        { kind: 'ol', items: [
          '<b>K to 3.</b> On the 4 by 4 grid, the toy starts bottom-left facing up. Where does it end after F F F R F, and which way does it face?',
          '<b>K to 3.</b> Run F R F R F R F from the same start. Where does the toy finish?',
          '<b>4 and 5.</b> What shape does &ldquo;repeat 4 times: F, R&rdquo; trace, and where does the toy end up?',
          '<b>4 and 5.</b> A block game should give a point each time the cat touches a fish, but the score never goes up. Name two things you would test, one at a time.',
          '<b>6 and 7.</b> Encode CODE with a shift of 1.',
          '<b>6 and 7.</b> One pass of bubble sort compares neighbours left to right and swaps any pair in the wrong order. What is the list 4, 2, 3, 1 after one pass?',
          '<b>8.</b> Write 19 in binary.',
          '<b>8.</b> What number is the binary 10110?',
          '<b>8 and 9.</b> A student changed one line of the converter to <code>bits = bits + str(n % 2)</code>. What does it now return for 13, and which sub-problem broke?',
          '<b>9.</b> A robot reads distances 50, 35, 22, 18, 30 cm and must stop at the first reading under 20. At which reading does it stop? Write the rule in one line of pseudocode.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers',
      lede: 'Short answers with the reason, checked by running the programs where there is code.',
      body: [
        { kind: 'ol', items: [
          '<b>Top row, second square from the left, facing right.</b> F F F climbs three squares to the top row, R turns it to face right, and one F moves it one square along.',
          '<b>Back at the start, facing left.</b> It walks a small square path: up, right, down, left, and three right turns leave it facing left.',
          '<b>A square, ending where it started and facing up.</b> Four forward moves and four quarter turns bring it all the way round.',
          '<b>For example:</b> does the touch check ever become true (make the cat touch the fish and watch), and does the score block run when it does (add a sound to that block)? Testing one thing at a time tells you which part is broken.',
          '<b>DPEF.</b> Each letter moves one place along: C to D, O to P, D to E, E to F.',
          '<b>2, 3, 1, 4.</b> 4 and 2 swap, then 4 and 3, then 4 and 1. The largest number has bubbled to the end; more passes sort the rest.',
          '<b>10011.</b> 16 + 2 + 1 = 19.',
          '<b>22.</b> 16 + 4 + 2 = 22.',
          '<b>It returns 1011, the bits in reverse.</b> Sub-problem 2 broke: new bits now go on the end instead of the front. Sub-problem 1 still finds the right remainders.',
          '<b>The fourth reading, 18 cm.</b> Pseudocode: for each reading, if reading &lt; 20 then stop. The rule uses selection inside repetition, like the cypher.'
        ] }
      ]
    },
    {
      id: 'parents', tint: 'deep', eyebrow: 'For parents, ours',
      h2: 'Five questions to ask about ADST this year',
      lede: 'Because schools choose their ADST modules, the curriculum alone cannot tell you what your child will meet. These questions, ours, get a precise answer from the school.',
      body: [
        { kind: 'ol', items: [
          '<b>Which ADST modules is my child&rsquo;s class taking this year?</b> In Grades 6 and 7 there are at least three; ask for their names.',
          '<b>Is Computational Thinking, Robotics or ICT among them?</b> Those are the modules with coding content listed.',
          '<b>Which tools will they use?</b> The curriculum names examples such as Scratch, Kodu, Arduino and LEGO Mindstorms; schools pick their own.',
          '<b>In Grade 8 or 9, how is the full-year ADST course made up?</b> One long module or several short ones changes how much coding there is.',
          '<b>Is there a coding club or a later course my child can aim for?</b> Web Development 10 and Computer Programming 11 are on the provincial list; ask which ones the school runs.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If coding is not on this year&rsquo;s list',
          left: [
            'That is common and not a failing: ADST covers many fields, and a year of woodwork or food studies is still a full ADST year. Children who love coding can keep going at home or in a class outside school.',
            'Our <a class="ag-inline-link" href="/coding-classes-in-british-columbia">British Columbia classes page</a> lists courses for every age. Families who home-educate will find a weekly plan on our <a class="ag-inline-link" href="/homeschool-coding-and-math-bc">BC homeschool coding and math guide</a>.'
          ],
          rightH3: 'Class times from BC',
          right: [
            'Since BC fixed its clock at UTC-7 in March 2026, a class booked for a Pacific afternoon never drifts with the seasons. The East Kootenay region and Golden run one hour later, on UTC-6. India, where our teachers are, sits 12 hours 30 minutes ahead of Vancouver.',
            'Weekend mornings in BC suit most younger children; after-school weekday slots suit many teens. The <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> has the full picture.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Your child&rsquo;s stage',
    h2: 'Four stages from first instructions to real code',
    lede: 'Our stages, matched loosely to the ADST bands above.',
    table: { caption: 'From giving directions to writing programs (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Direction-giver', 'Gives step-by-step instructions to a person or toy and fixes them when they go wrong'],
      ['2. Block-builder', 'Builds a block program with a loop and an if, and tests it with someone else'],
      ['3. Algorithm-writer', 'Explains a search or sort in plain steps before building it'],
      ['4. Text coder', 'Types and debugs a short Python or JavaScript program, one part at a time']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to give you exact directions to the kitchen, then follow them literally. The laughter teaches more about programming than a worksheet.',
      'A child at stage 2 by Grade 5 is well placed for the Grade 6 and 7 modules, whichever ones the school runs.'
    ] },
    right: { h3: 'For students', ps: [
      'When something breaks, test one part at a time. It is the fastest way to find the problem.',
      'Before you run a program, say out loud what you expect it to do.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine further classes for young BC coders',
    lede: 'Same live format for all nine: one regular teacher, either a group batch or private lessons.',
    bands: [
      { num: 'I', h3: 'Early grades', sub: 'Ages 6 to 10', courses: [
        { code: 'BACB / EAR / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'The visual programming Grades 6 and 7 name.' },
        { code: 'BACB / EAR / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'Patterns, steps and logic before code.' },
        { code: 'BACB / EAR / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Drag-and-drop apps, as Grade 9 lists.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 9 to 13', courses: [
        { code: 'BACB / MID / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Design, build, test, improve.' },
        { code: 'BACB / MID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks towards typed code.' },
        { code: 'BACB / MID / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'First pages in HTML and CSS.' }
      ] },
      { num: 'III', h3: 'Grade 8 and up', sub: 'Teens', courses: [
        { code: 'BACB / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Text-based code with real projects.' },
        { code: 'BACB / TEN / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'The language Grade 9 robotics names.' },
        { code: 'BACB / TEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Cloud collaboration, as Grade 9 lists.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live coding classes for BC children',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After BC school hours, in the batch you choose.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings in Pacific time.' },
      { time: '1-on-1', l: 'At a time that fits your child&rsquo;s week.' }
    ],
    cells: [
      { h3: 'Same teacher weekly', p: 'Who knows your child&rsquo;s projects.' },
      { h3: 'Blocks, then text', p: 'Typed code when they are ready.' },
      { h3: 'Build and test', p: 'Every class ends with something running.' },
      { h3: 'Debug, do not copy', p: 'Children find their own mistakes.' },
      { h3: 'Parents kept informed', p: 'What was built and what is next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Games, apps and websites by young coders taught live online; more of them are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Try a first class at no charge. After that, eight live classes are billed together each month, priced in your own currency, with no term contract; leave at any month end.',
    free: ['A free trial class', 'Bring something your child made', 'No card required'],
    group: ['Fifteen to twenty children', 'One regular teacher', 'Batch time of your choice', 'Paid monthly'],
    one: ['Your child and one teacher', 'Paced to their level', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'BC ADST and coding: common questions',
    items: [
      { q: 'What is ADST in BC?', a: 'ADST stands for Applied Design, Skills, and Technologies, a subject area in the BC curriculum from Kindergarten to Grade 12. It covers design thinking and making across fields such as computing, robotics, drafting, media, food studies, textiles and woodwork.' },
      { q: 'Is coding taught in BC elementary schools?', a: 'Not as a required subject. The ADST pages for Kindergarten to Grade 5 list big ideas and competencies to be used with content from other subjects, with no coding content listed. A teacher may still bring in block coding or floor robots, so it varies from class to class.' },
      { q: 'What coding is in the Grade 6 and 7 ADST curriculum?', a: 'Students take at least three ADST modules a year. One listed module, Computational Thinking, includes simple algorithms for sorting, searching, sequence, selection and repetition, cyphers, and visual programming such as Kodu or Scratch. A Robotics module covers programming and logic for robot components.' },
      { q: 'What is in BC ADST Grade 8?', a: 'Schools must provide the equivalent of a full-year ADST course in Grade 8. Its Computational Thinking content includes algorithms as precise repeatable instructions, debugging by sub-problems, the binary number system, visual and text-based programming, and programming components such as Arduino or LEGO Mindstorms.' },
      { q: 'What coding is in Grade 9 ADST?', a: 'The Grade 9 Information and Communications Technologies module lists text-based coding in HTML, CSS and JavaScript, binary representation of data, drag-and-drop mobile development, programmable components and cloud collaboration such as GitHub. Electronics and Robotics lists coding such as G-code, C++ and Sketch.' },
      { q: 'Does every BC school teach the Computational Thinking module?', a: 'No. Schools choose which modules to offer and may develop their own, which can be offered in addition to or instead of the provincial modules. Ask the school which ADST modules your child\'s class is taking this year.' },
      { q: 'What comes after ADST 9?', a: 'Grade 10 is where ADST turns into separate, named courses. On the computing side that means Computer Studies 10 or Web Development 10 first, with programming, information systems and robotics courses for Grades 11 and 12. Mathematics adds its own Computer Science 11 and 12.' },
      { q: 'How can my child practise ADST coding at home?', a: 'For younger children, give and fix step-by-step directions or build small block games and test them. In Grades 6 and 7, try cyphers and simple sorting by hand. From Grade 8, type short Python programs such as a binary converter, and test each part separately when something breaks.' },
      { q: 'When are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The BC clock has not changed since March 2026, so the class keeps its slot through the winter.' },
      { q: 'How much do coding classes cost?', a: 'Nothing for the first class. Ongoing classes are eight live sessions a month for one monthly fee, with no term contract; you can stop when a month ends. Current amounts are in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC families and students.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Courses for BC children, teens and adults.' },
      { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12', p: 'The senior ADST courses, read the same way.' },
      { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding and math, BC', p: 'Coding at home for registered learners.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'How BC compares with other provinces.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'The block language the modules name.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python first?', p: 'Choosing a first language by age.' },
      { href: '/blog/robotics-coding-stem-kits-build-logical-thinking', label: 'Robotics kits and logic', p: 'Home robotics for the Robotics module.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'All our Canada pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and what they have built so far, in school or at home. The first class starts at their level.',
    readFirst: 'Reading first? See <a class="ag-inline-link" href="/how-we-teach">how a live class runs</a>, or open the <a class="ag-inline-link" href="/courses/kids-coding-blocks-masterclass">Coding for Kids syllabus</a>.',
    note: 'Classes are live video lessons led from India. Nothing to drive to in BC, no home visits, and a WhatsApp message is the quickest way to reach us.',
    formNote: 'We never ask for a card to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Kids and teens', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for Kids' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Classes in BC' },
        { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
        { href: '/homeschool-coding-and-math-bc', label: 'Homeschool in BC' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' }
      ] }
    ],
    bottomRight: 'Exact steps, then test them'
  },

  personalityCss: `
.ag-root.ag-bacb .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-bacb .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-bacb .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-bacb .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-bacb .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca ADST core pages for Kindergarten and Grades 1 to 9, fetched raw one at a time on 23 October 2026 (all HTTP 200): K to 3 and 4 to 5 cross-curricular delivery sentences, big ideas and competencies; Grade 6 and 7 three-module minimum, local module rule, Computational Thinking and Robotics content; Grade 8 full-year course rule, Computational Thinking and Robotics content; Grade 9 full-course note, ICT and Electronics and Robotics content. ADST course list for Grades 10 to 12 (research copy 22 October 2026). BC permanent UTC-7 (facts-geo.md).',
    localProject: 'Our grid-robot activity for K to 3 (F and R commands on a 4 by 4 grid); our shift cypher and brute-force breaker in Python ("MEET AT THE LIBRARY AT NOON" with key 3 becomes "PHHW DW WKH OLEUDUB DW QRRQ", and only key 3 yields THE); our binary converter written as two sub-problems with every result round-tripped (13 to 1101, 255 to 11111111); ten practice questions across the grade bands with checked answers, including a reversed-bits bug and a sensor stop rule; five questions for parents to ask the school. Lesson family: precise instructions, then test them.',
    requiredMentions: ['in combination with grade-level content from other areas of learning in cross-curricular activities', 'Designs can be improved with prototyping and testing.', 'user and autonomous control systems', 'software programs as specific and sequential instructions with algorithms that can be reliably repeated by others', 'debugging algorithms and programs by breaking problems down into a series of sub-problems', 'There are more Content learning standards for Grade 9, as schools often offer these as full courses.', 'binary representation of various data types, including text, sound, pictures, video', 'PHHW DW WKH OLEUDUB DW QRRQ', '11111111 check: 255', 'Exact steps, then test them'],
    sources: [
      { claim: 'Kindergarten to Grade 3 ADST delivery, big ideas and competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/k/core' },
      { claim: 'Grade 4 and 5 ADST delivery, big ideas and competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/5/core' },
      { claim: 'Grade 6 and 7 modules, Computational Thinking and Robotics content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/7/core' },
      { claim: 'Grade 8 full-year course equivalent and Computational Thinking content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/8/core' },
      { claim: 'Grade 9 ICT and Electronics and Robotics coding content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/9/core' },
      { claim: 'ADST course list for Grades 10 to 12.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC permanent UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'That coding is required in BC Kindergarten to Grade 5: the pages list no coding content; stated as such.',
      'That every school runs Computational Thinking, Robotics or ICT modules: schools choose and may develop their own; stated as such.',
      'Any count of schools offering a module: no source; none printed.',
      'Specific AI tool age limits beyond the ChatGPT parental-permission rule in the brief: not verified; stated generally.',
      'Indigenous cultural content from the ADST pages: not used in examples, to avoid appropriating it.',
      'Named BC schools or districts: none named.',
      'Any affiliation with the BC Ministry of Education and Child Care: none, and the page says so.'
    ]
  }
};
