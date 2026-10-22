'use strict';
// Computer Programming 11 and 12, and Computer Science 11 and 12, in British Columbia (ag- school course door; Canada cluster
// Plan 2, row 22). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources. The BC curriculum pages below are the research copies fetched raw with curl earlier on 22 October 2026 (manifest
// ca/src/MANIFEST-schools-contests.tsv, each HTTP 200), copied into keyword-research-2026-09/ca/src/computer-programming-11-and-12-bc/.
// A re-fetch by this writer the same day failed for every curriculum.gov.bc.ca URL (curl exit 7, could not connect to port 443;
// FAILED-curriculum.gov.bc.ca.txt in that folder), so Computer Science 12 content was never read and is not quoted.
//  - curriculum.gov.bc.ca/curriculum/adst/11/computer-programming (adst-11-computer-programming.txt): big ideas "is an ongoing
//    reflective process."; "Personal design choices require self-exploration, collaboration, and evaluation and refinement of skills.";
//    "Tools and technologies can be adapted for specific purposes."; content "subdivide a problem into manageable, self-contained
//    tasks"; "hand tracing code, guess and test (experimentation)"; pair programming "two programmers work together at one
//    workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed
//    in. The two programmers switch roles frequently."; "programming language constructs to support input/output, logic, decision
//    structure, and loops"; "a complete set of requirements that will support the rest of the software development cycle without the
//    need to revisit the problem statement in the future"; "pseudocode, iterative refinement, flowcharts, UML, other design entities";
//    "external libraries for graphical user interfaces or gaming, sensor libraries for hardware such as coding devices";
//    "interpretation of library documentation/application programming interface (API)"; "inline commenting to document source code";
//    "running test cases to compare expected versus actual output and printing the value of variables to aid in the debugging
//    process"; "to detect logical or semantic errors"; computational thinking "formulating problems and their solutions so they are
//    represented in a form that can be solved through an algorithmic process".
//  - curriculum.gov.bc.ca/curriculum/adst/12/computer-programming (adst-12-computer-programming.txt): "documenting source code with
//    industry standard tools"; "writing source code in such a way that makes inline comments seem unnecessary"; "online tools to
//    facilitate pair and collaborative programming"; advanced pair programming, the observer on the "strategic" direction, the driver on
//    the "tactical" aspects, "using the observer as a safety net and guide"; "The goal of user interface design is to make the user's
//    interaction as simple and efficient as possible"; error handling "anticipation, detection and resolution of application errors,
//    programming errors or communication errors"; "use of a debugger that is capable of stepping through code and monitoring
//    variables"; "a project whose scale requires multiple source files or functions"; "the data structures that are provided (e.g.,
//    from a standard library)"; "bug reports and feature requests from users"; "necessary to work effectively within the IT sector".
//  - curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science (math-cs-11.txt): big ideas "helps us solve difficult problems by
//    managing complexity."; "sets of rules or instructions that precisely define a sequence of operations"; "are essential in solving
//    problems computationally."; "is a creative process."; content "strings, integers, characters, floating point"; "number systems
//    (e.g., binary, hexadecimal)"; "variables, constants, mathematical operations, input/output, generating random numbers"; "local
//    versus global"; "logical operators (AND, OR, NOT)"; "logical equivalences (e.g., De Morgan's laws), simplification of logical
//    statements, truth tables" (curly apostrophe in source); "loops (e.g., for, while, nested loops)"; "step-wise refinement, pseudocode
//    or flowcharts, translating between pseudocode and code and vice versa"; "append, remove, insert, delete"; "searching algorithms
//    (e.g., linear and binary searches)"; "use of methods/functions to reduce complexity, reuse code, and use function parameters";
//    "estimate theoretical probability through simulation"; "compute greatest common factor/least common multiples"; competencies
//    "understanding that different algorithms can be used to solve the same problem"; "designing algorithms that solve a class of
//    problems rather than a single problem"; "visual code comparison tools to view code differences (e.g., Meld)"; mistakes "include
//    syntax, semantic, run-time, and logic errors".
//  - curriculum.gov.bc.ca/curriculum/adst/10/computer-studies (adst-10-computer-studies.txt): "distinguishing between syntax, logic, and
//    run-time errors"; "simple programs, including games"; "using decision structure for two or more choices".
//  - curriculum.gov.bc.ca/curriculum/adst and /mathematics (adst-home.txt, math-home.txt): ADST lists Computer Studies 10, Web
//    Development 10, Computer Information Systems 11, Computer Programming 11, Computer Programming 12 under Information and
//    Communications Technology; Mathematics lists Computer Science 11 and Computer Science 12 (facts-schools-contests.md rows 68, 72).
//  - you.ubc.ca requirements tool, Science, Vancouver, British Columbia applicants (ubc-ajax-science-686.json, saved raw by the UBC
//    writer on 22 October 2026 from the site's public admin-ajax endpoint; copy in this row's folder): Grade 12 "English Studies 12 or
//    English First Peoples 12", "Pre-Calculus 12", "Anatomy and Physiology 12, or Chemistry 12, or Physics 12"; Grade 11 "Chemistry 11",
//    "Physics 11"; related subject categories "Language Arts", "Mathematics and Computation", "Sciences".
//  - CEMC (facts-schools-contests.md rows 112, 113, 115, 117, 119, 122; how-contests-work copy in this row's folder): "It is not
//    possible for students to individually register for a contest"; "students can look for another local school that will allow
//    them to join as a participant"; "5 questions." / "3 hours" (catalogue blurb); CCC "North and
//    South America: Wednesday, February 17, 2027"; Junior/Senior skill levels; "CCC participants may use C, C++, Python 2, Python 3, or
//    Java."
//  - Time: facts-geo.md section 3: BC release 2026AG0013-000209, "Pacific time will be set seven hours behind co-ordinated universal
//    time (UTC-7)", permanent after 8 March 2026; East Kootenay and Golden UTC-6 all year; India UTC+5:30, 12 h 30 min ahead of UTC-7.
// Our own material, labelled on the page: the dice simulation (Python 3.13, seed 11: exact 6 of 36 = 0.1667; 100 trials 0.1200,
// 1000 0.1610, 10000 0.1663, 100000 0.1681), the Pacific-to-India clock converter with error handling and its nine-row test table
// (every row run), the ten practice questions with run-checked answers, the CP-or-CS chooser table, the study plan and countdown, the
// four-stage ladder. Lesson family: test against what you can prove (exact answer, expected output).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SIM_PY = `# Two dice, sum of at least 10: simulation against the exact answer (ours)
import random

def exact_chance(target):
    """Count the 36 equally likely (die1, die2) pairs whose sum is at least target."""
    hits = 0
    for a in range(1, 7):
        for b in range(1, 7):
            if a + b >= target:
                hits += 1
    return hits, 36

def simulate(trials, target, seed):
    rng = random.Random(seed)      # a fixed seed makes the run repeatable
    hits = 0
    for _ in range(trials):
        if rng.randint(1, 6) + rng.randint(1, 6) >= target:
            hits += 1
    return hits / trials

hits, outcomes = exact_chance(10)
print("Exact:", hits, "of", outcomes, "=", round(hits / outcomes, 4))
for n in [100, 1000, 10000, 100000]:
    est = simulate(n, 10, seed=11)
    print(f"{n:>6} trials: {est:.4f}  (off by {abs(est - hits / outcomes):.4f})")`;

const SIM_OUT = `Exact: 6 of 36 = 0.1667
   100 trials: 0.1200  (off by 0.0467)
  1000 trials: 0.1610  (off by 0.0057)
 10000 trials: 0.1663  (off by 0.0004)
100000 trials: 0.1681  (off by 0.0015)`;

const TZ_PY = `# Pacific time to India time, with error handling (ours)
# BC is UTC-7 all year from 8 March 2026; India is UTC+5:30, so India is 12 h 30 min ahead.
GAP_MINUTES = 12 * 60 + 30

def parse_clock(text):
    """Turn 'HH:MM' (24-hour) into minutes after midnight, or raise ValueError."""
    parts = text.strip().split(":")
    if len(parts) != 2 or len(parts[1]) != 2:
        raise ValueError("use the form HH:MM, for example 16:30")
    hours, minutes = int(parts[0]), int(parts[1])   # int() raises ValueError on letters
    if not (0 <= hours <= 23 and 0 <= minutes <= 59):
        raise ValueError("hours run 0 to 23 and minutes 0 to 59")
    return hours * 60 + minutes

def to_india(text):
    total = parse_clock(text) + GAP_MINUTES
    day = "next day" if total >= 24 * 60 else "same day"
    total %= 24 * 60
    return f"{total // 60:02d}:{total % 60:02d} ({day})"

for entry in ["16:30", "09:00", "11:29", "11:30", "23:59", "24:00", "7:5", "ab:30", "four"]:
    try:
        print(entry, "->", to_india(entry))
    except ValueError as err:
        print(entry, "-> rejected:", err)`;

const Q1 = `print(bin(13), int("1011", 2), hex(255))`;

const Q2 = `count = 5

def bump():
    count = 1
    count += 1
    return count

print(bump(), count)`;

const Q4 = `total = 0
for i in range(1, 4):
    for j in range(i):
        total += j
print(total)`;

const Q6 = `def gcf(a, b):
    while b != 0:
        a = b
        b = a % b
    return a

print(gcf(48, 18))`;

const Q7 = `temps = [4, -2, -5, 7, -1]
for t in temps:
    if t < 0:
        temps.remove(t)
print(temps)`;

const A6_FIX = `def gcf(a, b):
    while b != 0:
        a, b = b, a % b      # both new values come from the old pair
    return a

def lcm(a, b):
    return a // gcf(a, b) * b   # divide first so the product stays small

print(gcf(48, 18), lcm(4, 6), lcm(21, 6))   # 6 12 42`;

const A9 = `def is_postal_code(text):
    """True for letter digit letter, space, digit letter digit, e.g. V6B 1A1."""
    if len(text) != 7 or text[3] != " ":
        return False
    pattern = "LDL DLD"
    for ch, kind in zip(text, pattern):
        if kind == "L" and not (ch.isalpha() and ch.isupper()):
            return False
        if kind == "D" and not ch.isdigit():
            return False
    return True`;

const SRC_CP11 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming" rel="noopener" target="_blank">Computer Programming 11</a>';
const SRC_CP12 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/12/computer-programming" rel="noopener" target="_blank">Computer Programming 12</a>';
const SRC_CS11 = '<a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science" rel="noopener" target="_blank">Computer Science 11</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'BC COMPUTER SCIENCE', blurb: 'BC Computer Programming 11 and 12 and Computer Science 11 read from the provincial curriculum, with a simulation, a tested clock converter and ten practice questions.' },
  slug: 'computer-programming-11-and-12-bc',
  code: 'cop',
  accent: '#47368A',
  accentRationale: 'BC Computer Programming 11 and 12: a muted deep violet, #47368A, allocated to this row in the Plan 2 group list (at least 6 RGB units from every site accent and 14 from other Canada accents), contrast 9.16 on the paper #FBF8F2, 8.61 on #F5F1E8 and 7.88 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Computer Programming 11 and 12 BC',
  title: 'BC Computer Programming 11 and 12, Computer Science 11 Help',
  description: 'BC Computer Programming 11 and 12 and Computer Science 11 from the curriculum: what each covers, two worked problems in Python, ten practice questions, a plan.',
  ogDescription: 'BC teaches programming in two places: ADST (Computer Programming 11 and 12) and Mathematics (Computer Science 11 and 12). What each covers, quoted from curriculum.gov.bc.ca, with original problems.',
  twitterDescription: 'BC Computer Programming 11 and 12 and Computer Science 11, read from the curriculum, with practice in Python.',
  pageName: 'Computer Programming 11 and 12 in BC',
  webPageDescription: 'A guide for British Columbia students and parents to Computer Programming 11 and 12 (ADST) and Computer Science 11 and 12 (Mathematics), built from the provincial curriculum pages, with two worked problems, ten practice questions and a study plan.',
  courseDescription: 'Live online help for BC Computer Programming 11 and 12 and Computer Science 11 and 12, in Python or Java, taught alongside the school course in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'Computer Programming 11 and 12',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#routes', label: 'Two routes' },
    { href: '#cp11', label: 'CP 11 and 12' },
    { href: '#cs11', label: 'CS 11' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'British Columbia &middot; Grades 11 and 12 &middot; ADST and Mathematics',
  h1: 'Computer Programming 11 and 12 in BC, and Computer Science 11',
  lede: 'A BC student who wants a senior coding course can find it under two different subjects. Applied Design, Skills, and Technologies offers Computer Programming 11 and 12, built around the design cycle, pair programming and real projects. Mathematics offers Computer Science 11 and 12, built around logic, algorithms and modelling. This page reads both from the provincial curriculum, solves two problems of our own in Python, and gives ten practice questions with answers. We teach alongside the student&rsquo;s school course and we do not grant provincial credits; the credit comes from the school that teaches and assesses the course.',
  secondaryCta: { href: '#practice', label: 'Go to the practice set' },
  wa: 'Hello Modern Age Coders, my teen in BC is taking Computer Programming 11 (or Computer Science 11) and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Python or Java, matched to the school',
  spec: [
    ['For', 'Grades 11 and 12 in BC'],
    ['Courses', 'CP 11, CP 12, CS 11, CS 12'],
    ['Language', 'Python or Java, as the class uses'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Pacific time, UTC-7 all year'],
    ['Credit', 'None granted: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'British Columbia teaches senior programming in two subjects: Computer Programming 11 and 12 under Applied Design, Skills, and Technologies, and Computer Science 11 and 12 under Mathematics. Both use variables, decisions, loops and functions; CP leans on design and teamwork, CS on logic and algorithms. Modern Age Coders helps live online, in a batch or one to one, through Python for Teens or Java for Teens.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a BC senior programming student',
    lede: 'Pick the language the school class uses. The third course is for students who want the algorithms side, which Computer Science 11 leans on, in more depth.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'COP / 01', title: 'Python for teens', note: 'Ages 13 to 18. The language many BC senior classes use, from input and loops to functions, files and small projects.' },
      { course: 'java-programming-masterclass-for-teens', code: 'COP / 02', title: 'Java for teens', note: 'Ages 13 to 18. For classes taught in Java: declared types, methods, arrays, then classes and objects for Computer Programming 12.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'COP / 03', title: 'Problem solving for teens', note: 'Searching, sorting, recursion and the habit of proving an algorithm right before trusting it.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: 'tint', eyebrow: 'Two subject areas',
      h2: 'Where programming sits in the BC curriculum',
      lede: 'The BC curriculum website files its computing courses in two places. Under Applied Design, Skills, and Technologies, the Information and Communications Technology courses include Computer Studies 10, Web Development 10, Computer Information Systems 11, Computer Programming 11 and Computer Programming 12. Under Mathematics, the course list includes Computer Science 11 and Computer Science 12. Same keyboard, different starting point.',
      body: [
        { kind: 'table', caption: 'BC senior computing courses and what each curriculum page leads with (curriculum.gov.bc.ca, research copies of 22 October 2026)', head: ['Course', 'Subject area', 'What the page leads with', 'Our one-line reading'], rows: [
          ['Computer Studies 10', 'ADST', 'Content includes &ldquo;distinguishing between syntax, logic, and run-time errors&rdquo; and &ldquo;simple programs, including games&rdquo;', 'A broad Grade 10 course: hardware, networks and safety, with a first programming unit'],
          ['Computer Programming 11', 'ADST', 'Big idea: personal design choices &ldquo;require self-exploration, collaboration, and evaluation and refinement of skills&rdquo;', 'Programming as a design craft: requirements, pair work, libraries, testing'],
          ['Computer Programming 12', 'ADST', 'Content includes &ldquo;bug reports and feature requests from users&rdquo; and code written to be &ldquo;self-documenting&rdquo;', 'Larger projects, real users, debuggers and error handling'],
          ['Computer Science 11', 'Mathematics', 'Big idea: algorithms, &ldquo;sets of rules or instructions that precisely define a sequence of operations&rdquo;, &ldquo;are essential in solving problems computationally.&rdquo;', 'Programming as applied mathematics: logic, searching, simulation, number systems'],
          ['Computer Science 12', 'Mathematics', 'Listed on the Mathematics course list', 'We could not read its content page on the day; see the note below']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the subject area matters',
          left: [
            'The subject area changes the flavour of the course more than the code does. Computer Programming 11 sits beside Woodwork, Drafting and Media Design, and like them it is organized around the ADST design cycle: understand users, define, ideate, prototype, test, make and share. Its curricular competencies are the same design-thinking headings the other ADST courses carry.',
            'Computer Science 11 sits beside Pre-calculus and Statistics, and its curricular competencies are the mathematics ones: reasoning and modelling, understanding and solving, communicating and representing, connecting and reflecting. The same while loop shows up in both. In CP it serves a product; in CS it serves a proof or a model.'
          ],
          rightH3: 'What a school actually offers',
          right: [
            'The curriculum lists what may be taught, not what every school runs. Any one school may run the ADST pair, the Mathematics pair, the two together, or none of the four in a particular year. The course planning guide from your teen&rsquo;s school is the only reliable list.',
            'Names also drift in conversation. Students say &ldquo;comp sci 11&rdquo; for either course, and a school might label a section &ldquo;Computer Science&rdquo; when the course code behind it is Computer Programming. Before planning help, we ask families which curriculum page the teacher&rsquo;s outline follows.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC Applied Design, Skills, and Technologies</a> and <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics" rel="noopener" target="_blank">BC Mathematics</a> course lists, and the course pages linked below, in copies fetched raw on 22 October 2026. A second visit that day could not connect to the curriculum site, so the Computer Science 12 content page was never read and nothing on this page describes it. Neither the ministry nor any school district has a connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'cp11', tint: 'deep', eyebrow: 'ADST, Grade 11',
      h2: 'Computer Programming 11, in the curriculum&rsquo;s own words',
      lede: 'The Computer Programming 11 page lists its content as short phrases, each with an elaboration that explains it. The elaborations are where the detail lives, so the table quotes them.',
      body: [
        { kind: 'table', caption: 'Computer Programming 11 content items, quoted from curriculum.gov.bc.ca (research copy of 22 October 2026)', head: ['Content item', 'The curriculum&rsquo;s elaboration', 'In a lesson (our reading)'], rows: [
          ['Problem decomposition', '&ldquo;subdivide a problem into manageable, self-contained tasks&rdquo;', 'One function per job, each testable alone'],
          ['Strategies to predict effects of code modification', '&ldquo;hand tracing code, guess and test (experimentation)&rdquo;', 'Change one value, predict the output, then run it'],
          ['Pair programming', '&ldquo;two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.&rdquo;', 'Roles swapped on a timer, both names on the work'],
          ['Language constructs', '&ldquo;programming language constructs to support input/output, logic, decision structure, and loops&rdquo;', 'The core toolkit: input, print, if, while, for'],
          ['Requirements of a problem statement', '&ldquo;a complete set of requirements that will support the rest of the software development cycle without the need to revisit the problem statement in the future&rdquo;', 'A written list of what the program must do, agreed before coding'],
          ['Ways to transform requirements into algorithms', '&ldquo;pseudocode, iterative refinement, flowcharts, UML, other design entities&rdquo;', 'Plan on paper first; the code follows the plan'],
          ['Pre-built libraries', '&ldquo;external libraries for graphical user interfaces or gaming, sensor libraries for hardware such as coding devices&rdquo;', 'Using someone else&rsquo;s tested code instead of rewriting it'],
          ['Documentation', '&ldquo;interpretation of library documentation/application programming interface (API)&rdquo; and &ldquo;inline commenting to document source code&rdquo;', 'Reading the docs for a library function before guessing how it works'],
          ['Use of test cases', '&ldquo;running test cases to compare expected versus actual output and printing the value of variables to aid in the debugging process&rdquo;, &ldquo;to detect logical or semantic errors&rdquo;', 'A test table with the expected column filled in first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Computational thinking, defined',
          left: [
            'The page defines computational thinking as &ldquo;formulating problems and their solutions so they are represented in a form that can be solved through an algorithmic process.&rdquo; That is a useful sentence for a student to keep. It says the hard part happens before the code: turning a messy situation into something precise enough for a machine.',
            'Its big ideas say the design cycle &ldquo;is an ongoing reflective process&rdquo; and that &ldquo;Tools and technologies can be adapted for specific purposes.&rdquo; In practice, a CP 11 student is marked on how they plan, test and improve a program, not only on whether the final version runs.'
          ],
          rightH3: 'Pair programming is assessed work, not a shortcut',
          right: [
            'Parents sometimes worry when they hear that their teen codes with a partner. The curriculum names pair programming as content, with clear roles: the driver types, the navigator reviews each line as it appears, and they swap often. Done well, it catches mistakes early and makes both students explain their thinking aloud.',
            'We practise it on screen. The student drives while the teacher navigates, then they swap, so the student learns to review code as carefully as they write it. That second skill is the one most teenagers have never been asked to use.'
          ] }
      ]
    },
    {
      id: 'cp12', tint: 'tint', eyebrow: 'ADST, Grade 12',
      h2: 'What Computer Programming 12 adds',
      lede: 'Computer Programming 12 keeps the same big ideas as Grade 11 and raises the scale. Its content reads like the first year of a junior developer&rsquo;s job: bigger codebases, real users, and tools for finding faults.',
      body: [
        { kind: 'table', caption: 'Computer Programming 12 content items beyond Grade 11, quoted from curriculum.gov.bc.ca (research copy of 22 October 2026)', head: ['Content item', 'In the curriculum&rsquo;s words'], rows: [
          ['Documentation', '&ldquo;documenting source code with industry standard tools&rdquo;'],
          ['Self-documenting code', '&ldquo;writing source code in such a way that makes inline comments seem unnecessary&rdquo;'],
          ['Collaboration tools', '&ldquo;online tools to facilitate pair and collaborative programming&rdquo;'],
          ['Advanced pair programming', 'The observer considers the &ldquo;strategic&rdquo; direction of the work; the driver focuses on the &ldquo;tactical&rdquo; aspects, &ldquo;using the observer as a safety net and guide&rdquo;'],
          ['User interface design', '&ldquo;The goal of user interface design is to make the user\'s interaction as simple and efficient as possible&rdquo;'],
          ['Error handling', 'A process of &ldquo;anticipation, detection and resolution of application errors, programming errors or communication errors&rdquo;'],
          ['Debugging tools', '&ldquo;use of a debugger that is capable of stepping through code and monitoring variables&rdquo;'],
          ['Management of complexity', 'For example, &ldquo;a project whose scale requires multiple source files or functions&rdquo;'],
          ['Pre-built data structures', '&ldquo;the data structures that are provided (e.g., from a standard library)&rdquo;'],
          ['Working with users', '&ldquo;bug reports and feature requests from users&rdquo;'],
          ['Interpersonal skills', 'People skills, communication and record keeping &ldquo;necessary to work effectively within the IT sector&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The jump students feel',
          left: [
            'Grade 11 programs usually fit in one file and one sitting. Grade 12 projects do not. Once a program spreads across several files, a student needs a way to find which file holds the fault, and the curriculum&rsquo;s answer is a real debugger: step through, watch the variables, find the line where reality parts from the plan.',
            'Many students have never opened one. We teach the debugger in the first weeks of Grade 12 help, on the student&rsquo;s own project, because a debugger learned on someone else&rsquo;s toy example rarely sticks.'
          ],
          rightH3: 'Error handling, the CP 12 way',
          right: [
            'The curriculum breaks error handling into anticipation, detection and resolution. Anticipation means asking what a user could type that would break the program. Detection means the program notices. Resolution means it recovers with a clear message instead of a crash.',
            'Our second worked problem below follows those three steps exactly, on a small program a BC family might actually use: converting a Pacific time into India time, with every bad input caught and named.'
          ] },
        { kind: 'source', html: 'Sources: ' + SRC_CP11 + ' and ' + SRC_CP12 + ' on curriculum.gov.bc.ca, research copies fetched raw on 22 October 2026. The Grade 12 page repeats the three big ideas of Grade 11 word for word.' }
      ]
    },
    {
      id: 'cs11', tint: 'deep', eyebrow: 'Mathematics, Grade 11',
      h2: 'Computer Science 11: programming as mathematics',
      lede: 'Computer Science 11 is a Mathematics course, and it reads like one. Its four big ideas are about decomposition, algorithms, computational thinking and problem solving, and its content list mixes programming basics with logic and mathematical modelling.',
      body: [
        { kind: 'table', caption: 'Computer Science 11 big ideas and content, quoted from curriculum.gov.bc.ca (research copy of 22 October 2026)', head: ['Area', 'In the curriculum&rsquo;s words'], rows: [
          ['Big idea: decomposition', 'Decomposition &ldquo;helps us solve difficult problems by managing complexity.&rdquo;'],
          ['Big idea: algorithms', 'Algorithms &ldquo;are essential in solving problems computationally.&rdquo;'],
          ['Big idea: problem solving', 'Solving problems &ldquo;is a creative process.&rdquo;'],
          ['Data types', '&ldquo;strings, integers, characters, floating point&rdquo;, and &ldquo;number systems (e.g., binary, hexadecimal)&rdquo;'],
          ['Basic concepts', '&ldquo;variables, constants, mathematical operations, input/output, generating random numbers&rdquo;'],
          ['Variable scope', '&ldquo;local versus global&rdquo;'],
          ['Logic', '&ldquo;logical operators (AND, OR, NOT)&rdquo;; &ldquo;logical equivalences (e.g., De Morgan&rsquo;s laws), simplification of logical statements, truth tables&rdquo;'],
          ['Control flow', 'Decision structures and &ldquo;loops (e.g., for, while, nested loops)&rdquo;'],
          ['Developing algorithms', '&ldquo;step-wise refinement, pseudocode or flowcharts, translating between pseudocode and code and vice versa&rdquo;'],
          ['Arrays and lists', 'Operations &ldquo;append, remove, insert, delete&rdquo; and &ldquo;searching algorithms (e.g., linear and binary searches)&rdquo;'],
          ['Modularity', '&ldquo;use of methods/functions to reduce complexity, reuse code, and use function parameters&rdquo;'],
          ['Modelling mathematical problems', 'Including to &ldquo;estimate theoretical probability through simulation&rdquo; and to &ldquo;compute greatest common factor/least common multiples&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Competencies worth reading twice',
          left: [
            'Two curricular competencies describe the habits a strong CS 11 student shows. One is flexible thinking: &ldquo;understanding that different algorithms can be used to solve the same problem&rdquo;. The other asks for &ldquo;designing algorithms that solve a class of problems rather than a single problem&rdquo;, which is the difference between a program that works for the example and one that works.',
            'The competencies also name tools: integrated development environments, third-party libraries and &ldquo;visual code comparison tools to view code differences (e.g., Meld)&rdquo;, and they point students to code visualization websites. Mistakes are listed too: they &ldquo;include syntax, semantic, run-time, and logic errors&rdquo;, treated as opportunities to learn.'
          ],
          rightH3: 'What we could not read: Computer Science 12',
          right: [
            'Computer Science 12 appears on the BC Mathematics course list, so it exists as a provincial course. Its content page did not load when we went back for it on 22 October 2026: the curriculum site refused the connection. We will not describe its content from memory or from someone else&rsquo;s summary.',
            'If your teen is in CS 12, bring the teacher&rsquo;s outline to the first class. We plan from the outline itself, which is the more reliable map in any case, because the curriculum leaves teachers room to choose order and examples.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_CS11 + ' on curriculum.gov.bc.ca, research copy fetched raw on 22 October 2026. The curly apostrophe in De Morgan&rsquo;s is the curriculum&rsquo;s own.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'CP or CS',
      h2: 'Computer Programming 11 or Computer Science 11: which one fits',
      lede: 'Both are real programming courses, and a student who takes either will write loops, decisions and functions all year. The difference is what the code is for. This comparison is ours, built from the two curriculum pages above.',
      body: [
        { kind: 'table', caption: 'Computer Programming 11 and Computer Science 11 side by side (our comparison, from the curriculum pages read 22 October 2026)', head: ['', 'Computer Programming 11 (ADST)', 'Computer Science 11 (Mathematics)'], rows: [
          ['The code serves', 'A product for a user', 'A problem, a model or a proof'],
          ['Planning tools named', 'Pseudocode, iterative refinement, flowcharts, UML', 'Step-wise refinement, pseudocode or flowcharts'],
          ['Teamwork named', 'Pair programming, with driver and navigator roles', 'Partner talks and small-group discussion'],
          ['Testing named', 'Test cases comparing expected and actual output', 'Analysing errors: syntax, semantic, run-time, logic'],
          ['Mathematics inside', 'Light; as the project needs', 'Logic, number systems, probability by simulation, factors and multiples'],
          ['Outside code named', 'Pre-built libraries and their API documentation', 'IDEs, third-party libraries, code comparison tools'],
          ['Suits a student who', 'Wants to build things people use, and likes design', 'Likes puzzles, proofs and the math behind the program']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your teen can take both',
          left: [
            'Taking both is not repetition. A student who does CS 11 learns why binary search halves the work and how to prove two logical expressions equal; the same student in CP 11 learns to write requirements, read library documentation and work in a pair.',
            'Order matters less than people think. If the timetable forces a choice, choose the course whose teacher&rsquo;s outline excites the student. Motivation decides more marks in a project-heavy course than any prerequisite does.'
          ],
          rightH3: 'If the school offers neither',
          right: [
            'Some BC schools run no senior programming course in a given year. A student can still learn the same material outside school, with the honest understanding that outside lessons do not produce a school credit. If the credit itself matters, the school counsellor is the person to ask about other ways to take the course.',
            'For a student aiming at university computer science, mathematics matters at least as much as a programming credit. The admission section below shows what UBC actually lists for BC applicants to Science.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problem 1, ours',
      h2: 'Estimating a probability by simulation, then checking it exactly',
      lede: 'Computer Science 11 lists &ldquo;estimate theoretical probability through simulation&rdquo; as content. This problem is ours. It does the simulation and then does something students often skip: it works out the exact answer by counting, so the simulation can be judged against the truth.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> Roll two fair six-sided dice. What is the probability that the sum is at least 10? Estimate it by simulating 100, 1,000, 10,000 and 100,000 rolls, then compute the exact value and compare.' },
        { kind: 'ol', items: [
          '<b>Count before you code.</b> Two dice give 6 &times; 6 = 36 equally likely ordered pairs. Sums of 10, 11 and 12 come from (4, 6), (5, 5), (6, 4), (5, 6), (6, 5) and (6, 6): six pairs. So the exact probability is 6 out of 36, one sixth, about 0.1667. The program checks this count with a nested loop instead of trusting our list.',
          '<b>Separate the jobs.</b> One function counts exactly; another simulates. Each can be tested alone, the decomposition the curriculum describes.',
          '<b>Fix the seed.</b> A random number generator started with the same seed gives the same sequence, so a teacher, a partner and the student all see identical output. Without it, nobody can check anybody else&rsquo;s run.',
          '<b>Measure the error, not just the estimate.</b> Print how far each estimate is from the exact answer. The interesting result is in that column.'
        ] },
        { kind: 'code', label: 'Python &middot; dice simulation (ours)', lang: 'python', code: SIM_PY },
        { kind: 'code', label: 'Output, Python 3.13', lang: 'text', code: SIM_OUT, note: 'Same seed, same output on any machine running Python 3. Change the seed and the estimates change; the exact line never does.' },
        { kind: 'two', mt: true,
          leftH3: 'What the output teaches',
          left: [
            'One hundred rolls gave 0.12, a long way from 0.1667. A student who stopped there would believe the chance is about one in eight. A thousand rolls came within 0.006, and ten thousand within 0.0004.',
            'Then the surprise: 100,000 rolls landed 0.0015 away, further than 10,000 did. That is not a bug. A simulation&rsquo;s error tends to shrink as trials grow, but any single run can wobble. This is the &ldquo;connection between theoretical and experimental probability&rdquo; the curriculum&rsquo;s competencies mention, seen in four lines of output.'
          ],
          rightH3: 'Where students go wrong',
          right: [
            'The common mistake is <code>random.randint(2, 12)</code> for the sum of two dice. It picks each sum from 2 to 12 equally, which is wrong: a 7 can happen six ways and a 12 only one. The simulation then reports about 3 in 11, roughly 0.27, and a student without the exact count never notices.',
            'The second mistake is counting only six of the 36 outcomes by hand and forgetting that (4, 6) and (6, 4) are different rolls. The nested loop removes that risk, which is why it is worth writing even when the answer seems obvious.'
          ] }
      ]
    },
    {
      id: 'worked2', tint: 'tint', eyebrow: 'Worked problem 2, ours',
      h2: 'A Pacific-to-India clock converter that refuses bad input',
      lede: 'This one is in the Computer Programming spirit: a small tool for a real user, with requirements, error handling and a test table. It is ours, and it solves a question BC families ask us: if a class is at 4:30 in the afternoon in Vancouver, what time is it for the teacher?',
      body: [
        { kind: 'ol', items: [
          '<b>Write the requirements first.</b> Input: a 24-hour time as HH:MM in BC. Output: the time in India and whether it is the same day or the next. BC has been on UTC-7 all year since March 2026 and India is on UTC+5:30, so the gap is 12 hours 30 minutes, always.',
          '<b>Anticipate.</b> List what a user could type wrongly: a missing colon, single-digit minutes, letters, an hour of 24, minutes of 60.',
          '<b>Detect.</b> Check the shape of the input, then the ranges. Let Python&rsquo;s own <code>int()</code> detect letters, because it already raises an error for them.',
          '<b>Resolve.</b> Catch each error where the program is used and print a message that tells the user how to fix it, instead of a traceback.',
          '<b>Fill in the expected column before running.</b> Then run every case and compare.'
        ] },
        { kind: 'code', label: 'Python &middot; clock converter (ours)', lang: 'python', code: TZ_PY },
        { kind: 'table', mt: true, caption: 'Test plan for the converter: expected written first, actual from the run (ours; all nine rows match)', head: ['Input', 'Expected and actual output', 'What the case tests'], rows: [
          ['16:30', '05:00 (next day)', 'A typical after-school time crosses midnight in India'],
          ['09:00', '21:30 (same day)', 'A weekend morning in BC is the evening in India'],
          ['11:29', '23:59 (same day)', 'The last minute before the day changes'],
          ['11:30', '00:00 (next day)', 'Exactly midnight counts as the next day'],
          ['23:59', '12:29 (next day)', 'The largest valid input'],
          ['24:00', 'rejected: hours run 0 to 23 and minutes 0 to 59', 'An hour that does not exist'],
          ['7:5', 'rejected: use the form HH:MM, for example 16:30', 'Single-digit minutes are ambiguous'],
          ['ab:30', 'rejected: invalid literal for int() with base 10: &#39;ab&#39;', 'Letters, caught by int() itself'],
          ['four', 'rejected: use the form HH:MM, for example 16:30', 'No colon at all']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the boundaries matter',
          left: [
            'Rows three and four differ by one minute and give different days. A converter written with <code>&gt;</code> instead of <code>&gt;=</code> in the next-day check passes almost every test and fails at 11:30. Boundary cases exist to catch exactly that, and the curriculum&rsquo;s test-case content asks students to compare expected with actual output for this reason.',
            'The <code>ab:30</code> row shows a judgement call. Python&rsquo;s message is accurate but unfriendly. A CP 12 student might wrap it in a clearer sentence; a CS 11 student might leave it, since the program still refuses the input. Both choices can be defended, and defending the choice is part of the work.'
          ],
          rightH3: 'One fixed gap, one exception',
          right: [
            'The program can use a single fixed gap because BC no longer changes its clocks. Before 2026 the same code would have needed two gaps, one for summer and one for winter. That is a nice discussion question in itself: what assumption is built into a constant, and what would break if it changed?',
            'The fixed gap is also not true everywhere in BC. East Kootenay and Golden keep UTC-6 all year, one hour ahead of Vancouver, so a family there needs a gap of 11 hours 30 minutes. A good requirements list would say which region the tool is for.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Ten practice questions for CP 11 and CS 11',
      lede: 'These questions are ours, written for this page in Python and not taken from any school, district or exam. They follow the content lists above: number systems, scope, logic, loops, searching, factors and multiples, list operations, validation and planning. Answer on paper before you scroll down.',
      body: [
        { kind: 'code', label: 'Question 1 &middot; number systems', lang: 'python', code: Q1, note: 'What exactly does this print? Explain each of the three values.' },
        { kind: 'code', label: 'Question 2 &middot; scope', lang: 'python', code: Q2, note: 'What does this print, and why is the second number not 2?' },
        { kind: 'p', mt: true, html: '<b>Question 3 &middot; logic.</b> Build a four-row truth table for <code>not (a and b)</code> and for <code>(not a) or (not b)</code>. What do you notice, and what is the name of the rule? Then simplify <code>not (raining or windy)</code> into an expression with no brackets.' },
        { kind: 'code', label: 'Question 4 &middot; nested loops', lang: 'python', code: Q4, note: 'Trace it with a table of i, j and total. What is printed?' },
        { kind: 'p', mt: true, html: '<b>Question 5 &middot; binary search.</b> The sorted list is 3, 8, 12, 19, 25, 31, 40 (indexes 0 to 6). Using <code>mid = (lo + hi) // 2</code>, list the indexes a binary search checks when looking for 31, and then for 10. How many checks would a linear search need to find 31?' },
        { kind: 'code', label: 'Question 6 &middot; debug the greatest common factor', lang: 'python', code: Q6, note: 'It should print 6. What does it print, and which line is wrong? Fix it, then use it to write a least common multiple function.' },
        { kind: 'code', label: 'Question 7 &middot; debug a list operation', lang: 'python', code: Q7, note: 'The plan was to remove every negative reading. What prints, and why is one negative left behind?' },
        { kind: 'p', mt: true, html: '<b>Question 8 &middot; write a function.</b> Write <code>lcm(a, b)</code> using your fixed <code>gcf</code>. What are <code>lcm(4, 6)</code> and <code>lcm(21, 6)</code>? Why is it better to divide before multiplying?' },
        { kind: 'p', html: '<b>Question 9 &middot; validate input.</b> A Canadian postal code has the shape letter, digit, letter, space, digit, letter, digit, as in V6B 1A1. Write <code>is_postal_code(text)</code> that returns True only for that shape in capital letters. List six test inputs, with the expected result for each, before you run anything.' },
        { kind: 'p', html: '<b>Question 10 &middot; requirements and pairs.</b> A school club wants a program that records which members attended each meeting and reports anyone who missed three in a row. Write four requirements precise enough that nobody needs to ask the club again, then say how you would split the first hour of work between a driver and a navigator.' }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Answers, with the reasoning',
      lede: 'Each program here was run in Python 3.13 to confirm the output. The reasoning is the part to learn; the number at the start is only the check.',
      body: [
        { kind: 'ol', items: [
          '<b>0b1101 11 0xff</b>. Thirteen is 8 + 4 + 1, so binary 1101, and Python prefixes binary with 0b. The string 1011 read in base 2 is 8 + 2 + 1 = 11. Two hundred fifty-five is 15 &times; 16 + 15, so hexadecimal ff, prefixed 0x.',
          '<b>2 5</b>. The <code>count</code> inside <code>bump</code> is a local variable, created by the assignment on its first line. It starts at 1, becomes 2 and is returned. The global <code>count</code> outside was never touched, so it is still 5: local versus global, exactly as the CS 11 content names it.',
          '<b>The two columns are identical</b>: True, True, True, False for the rows FF, FT, TF, TT. That is one of De Morgan&rsquo;s laws: not (a and b) equals (not a) or (not b). The other law gives <code>not (raining or windy)</code> = <code>(not raining) and (not windy)</code>.',
          '<b>4</b>. When i is 1, j takes only 0. When i is 2, j takes 0 and 1, adding 1. When i is 3, j takes 0, 1 and 2, adding 3. The total is 0 + 1 + 3 = 4. The inner loop runs i times, because <code>range(i)</code> stops before i.',
          '<b>For 31: indexes 3, then 5.</b> The first middle is (0 + 6) // 2 = 3, holding 19, which is too small, so lo becomes 4; the next middle is (4 + 6) // 2 = 5, holding 31. <b>For 10: indexes 3, 1, 2</b>, then lo passes hi and the search reports not found. A linear search checks 3, 8, 12, 19, 25 and 31: six checks to find 31.',
          '<b>It prints 18.</b> The line <code>a = b</code> overwrites a before the remainder is taken, so <code>a % b</code> becomes 18 % 18 = 0 and the loop ends at once. Both new values must come from the old pair: <code>a, b = b, a % b</code>. Then 48, 18 becomes 18, 12, then 12, 6, then 6, 0, and the answer is 6. That is Euclid&rsquo;s algorithm.',
          '<b>It prints [4, -5, 7]</b>. Removing an item while looping over the same list shifts everything after it one place left, so the loop skips the item that slid into the removed one&rsquo;s place. After -2 is removed, -5 slides into its index and is never examined. Build a new list instead: <code>[t for t in temps if t &gt;= 0]</code>.',
          '<b>12 and 42</b> (see the code below). The least common multiple is a &times; b divided by the greatest common factor. Dividing first keeps the intermediate number small, which matters little in Python but prevents overflow in Java with large ints.',
          '<b>See the code below.</b> Our six tests and results: <code>V6B 1A1</code> True; <code>K1A 0B1</code> True; <code>v6b 1a1</code> False (lower case); <code>V6B1A1</code> False (no space); <code>V6B 1AA</code> False (letter where a digit belongs); the empty string False. The length check comes first so that a short string never reaches the loop.',
          '<b>One good set:</b> (1) store member names and meeting dates; (2) for each meeting, record present or absent for every member; (3) a member is reported when they are absent at three meetings in a row, in date order; (4) the report lists each such member once, with the dates missed. For the hour: the driver codes the data entry while the navigator writes the test table for requirement 3, then they swap. Writing requirement 3 precisely (is &ldquo;three in a row&rdquo; three meetings or three weeks?) is the real lesson.'
        ] },
        { kind: 'code', label: 'Answers 6 and 8 &middot; Python', lang: 'python', code: A6_FIX },
        { kind: 'code', label: 'Answer 9 &middot; Python', lang: 'python', code: A9, note: 'Run against the six inputs above, it returns True, True, False, False, False, False in that order. A regular expression can do the same in one line; for a CS 11 test, the loop shows the reasoning a marker wants to see.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Assessment plan, ours',
      h2: 'A study plan for tests and project deadlines',
      lede: 'BC senior programming courses are assessed in different ways by different teachers: tests, coding tasks done in class, and projects with a written process. This plan is ours. It covers both kinds of assessment; drop the half that your teen&rsquo;s course does not use.',
      body: [
        { kind: 'ol', items: [
          '<b>Get the assessment list from the teacher.</b> Which pieces are tests, which are in-class coding tasks, which are projects, and what does each project hand in besides code: a plan, a test table, a reflection?',
          '<b>Keep a vocabulary page.</b> Variable, constant, scope, parameter, return value, decision structure, nested loop, syntax error, semantic error, run-time error, logic error. One line of definition and two lines of example each.',
          '<b>For tests, trace on paper daily.</b> Two short programs a day with a written trace table. Questions 2, 4 and 5 above are the shape to practise.',
          '<b>For CS 11, drill the logic and number topics.</b> Convert five numbers between decimal, binary and hexadecimal each week, and prove one logical equivalence with a truth table.',
          '<b>Rebuild the standard algorithms from a blank file.</b> Linear search, binary search, greatest common factor, a running total and a count. No notes; then compare with class versions.',
          '<b>For projects, write requirements before code.</b> A numbered list, agreed with the teacher if possible. Every later decision gets checked against it.',
          '<b>Keep a test table from day one.</b> Expected results written before running, boundary cases included, like the converter table above.',
          '<b>Save a working version at every milestone.</b> A project that worked on Tuesday and is broken on Thursday should never be a disaster. Version control is the grown-up answer; a dated copy of the folder is the minimum.',
          '<b>Practise with a partner.</b> If the course uses pair programming, rehearse both roles. Navigating well, catching a mistake as it is typed, is a skill that improves only with practice.',
          '<b>Finish early, then improve.</b> Stop adding features a week before a deadline. Use that week for testing, documentation and the written reflection.'
        ] },
        { kind: 'table', mt: true, caption: 'A four-week run-up to a unit test or project deadline (ours)', head: ['Weeks to go', 'For a test', 'For a project'], numCols: [0], rows: [
          ['4', 'Vocabulary page complete; topics marked solid or shaky', 'Requirements written and agreed; plan drawn'],
          ['3', 'Daily tracing; standard algorithms rebuilt', 'Core features working; test table started'],
          ['2', 'Timed practice on shaky topics', 'All requirements met in a saved version'],
          ['1', 'One full timed practice and a mistakes log', 'Testing, documentation and reflection only']
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'tint', eyebrow: 'After Grade 12',
      h2: 'Senior programming and university computer science from BC',
      lede: 'A family planning ahead usually asks whether Computer Programming 12 or Computer Science 12 is needed for a computer science degree. For UBC Vancouver&rsquo;s Faculty of Science, one of the routes into computer science there, the answer on UBC&rsquo;s own requirements tool is more about mathematics than programming.',
      body: [
        { kind: 'table', caption: 'UBC Vancouver, Science: requirements shown for British Columbia applicants (you.ubc.ca requirements tool, response saved raw on 22 October 2026)', head: ['Level', 'What UBC lists'], rows: [
          ['Grade 12', '&ldquo;English Studies 12 or English First Peoples 12&rdquo;; &ldquo;Pre-Calculus 12&rdquo;; &ldquo;Anatomy and Physiology 12, or Chemistry 12, or Physics 12&rdquo;'],
          ['Grade 11', '&ldquo;Chemistry 11&rdquo; and &ldquo;Physics 11&rdquo;'],
          ['Related subject categories', '&ldquo;Language Arts&rdquo;, &ldquo;Mathematics and Computation&rdquo;, &ldquo;Sciences&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'No programming course appears among the required ones. Pre-Calculus 12 does. A related category called Mathematics and Computation is listed as particularly relevant, which is where a senior computing course can show interest and preparation without being a requirement.',
            'So the plan for a BC teen aiming at computer science starts with the math sequence through Pre-calculus 12, with Calculus 12 as a strong addition. Our <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Western Canada Grade 12 Math course</a> teaches Pre-calculus 12 alongside school. Requirements change between admission years, so check UBC&rsquo;s tool in the year your teen applies.'
          ],
          rightH3: 'Contests as a second bridge',
          right: [
            'Waterloo&rsquo;s Centre for Education in Mathematics and Computing organizes the Canadian Computing Competition, and CEMC lists the 2027 CCC for North and South America on Wednesday 17 February 2027. CEMC is direct about entry: &ldquo;It is not possible for students to individually register for a contest&rdquo;. If a teen&rsquo;s own school does not take part, CEMC suggests that &ldquo;students can look for another local school that will allow them to join as a participant&rdquo;.',
            'CEMC states that &ldquo;CCC participants may use C, C++, Python 2, Python 3, or Java.&rdquo;, so a BC student who has done CP 11 or CS 11 in Python or Java already has a contest language. Our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> explains the levels and format.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://you.ubc.ca/programs/computer-science-vancouver-bsc/" rel="noopener" target="_blank">UBC Computer Science (Vancouver) program page</a> and UBC&rsquo;s requirements tool (Science, applicants from British Columbia), its response kept as a raw file on 22 October 2026; CEMC&rsquo;s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CCC page</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>, read 22 October 2026. We are not connected with UBC or CEMC.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'The credit, and the clock',
      h2: 'We teach the course; the school grants the credit',
      lede: 'Families sometimes search for Computer Programming 11 online because they want the credit itself. That is a school matter, and it is clearer to say so at the start.',
      body: [
        { kind: 'two',
          leftH3: 'Where the credit comes from',
          left: [
            'In BC, a credit for Computer Programming 11 or Computer Science 11 is earned at a school: your teen&rsquo;s own, a district summer session, or an online learning school that delivers and marks the course. We are a tutoring service, so we do not grant high school credits. We teach next to the school course, using its outline and its assignments.',
            'Questions about the diploma, such as how many credits a student needs and where a computing course counts, belong with the school counsellor. The provincial page on graduation would not load for us when we researched this guide, and we will not guess at its contents.'
          ],
          rightH3: 'Where we fit',
          right: [
            'Students come to us when the course is moving faster than they are: a project with no plan, a debugger they have never used, a binary search that loops forever, a CS 11 test on truth tables next week. We work from what the teacher set, explain it, and have the student do the work.',
            'A few families book a handful of summer lessons before Grade 11, so loops and functions feel familiar on day one. More arrive in Grade 12, once projects span several files and an outside reviewer earns their keep.'
          ] },
        { kind: 'table', mt: true, caption: 'Programming class times across BC, 2026 to 2027 (provincial release on permanent time; tz database 2026e; India is on UTC+5:30, the clock our teachers keep)', head: ['Where in BC', 'UTC offset', 'India time is ahead by', 'Changes in 2026 to 2027?'], rows: [
          ['Most of BC, including Vancouver and Victoria', 'UTC-7', '12 hours 30 minutes', 'No: permanent since 8 March 2026'],
          ['East Kootenay and Golden', 'UTC-6', '11 hours 30 minutes', 'No']
        ] },
        { kind: 'p', mt: true, html: 'After the spring change on 8 March 2026, BC stopped moving its clocks. In the government&rsquo;s words, &ldquo;Pacific time will be set seven hours behind co-ordinated universal time (UTC-7)&rdquo;, so a lesson booked for a BC afternoon keeps its slot through November and beyond. Ontario and Quebec still change their clocks, which matters only if your teen also takes a class with someone in the east. Our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> lays out every province.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages of a BC senior programmer',
    lede: 'How we see BC teens grow through these courses, in four steps we use for placement.',
    table: { caption: 'Stages from first loop to Grade 12 projects (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Follower', 'Types in the class example and gets it running, but changing it breaks it'],
      ['2. Predictor', 'Says what a short program will print before running it, and checks'],
      ['3. Tester', 'Writes requirements and an expected-output table before the code'],
      ['4. Maintainer', 'Finds a fault in a multi-file project with a debugger, and explains the fix']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to show you the test table for their latest program. If there is not one, that is the most useful thing to add this month.',
      'A teen stuck at stage 1 is not behind in talent. They have usually been shown answers instead of being asked to predict them.'
    ] },
    right: { h3: 'For students', ps: [
      'Before running anything, write one line: what you expect to see. Over a term, those lines become the best revision notes you own.',
      'When a partner navigates for you, let them finish the sentence before you change the code. Half the bugs get found that way.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for BC senior students',
    lede: 'Each runs live, with the same teacher every week, either as a group or for one student.',
    bands: [
      { num: 'I', h3: 'Beside the school course', sub: 'Grades 10, 11 and 12', courses: [
        { code: 'COP / SCH / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Commit history for CP 12 team projects.' },
        { code: 'COP / SCH / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interfaces and browser projects after Web Development 10.' },
        { code: 'COP / SCH / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A fast, strict language for contest-minded students.' }
      ] },
      { num: 'II', h3: 'Contests and team builds', sub: 'Grades 9 to 12', courses: [
        { code: 'COP / CON / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'Five problems, three hours, as CEMC sets it.' },
        { code: 'COP / CON / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Harder sets once the CCC feels comfortable.' },
        { code: 'COP / CON / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'A weekend build with a demo at the end.' }
      ] },
      { num: 'III', h3: 'Math and data alongside code', sub: 'Teens', courses: [
        { code: 'COP / MTH / 01', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Western Canada Grade 12 Math', blurb: 'Pre-calculus 12, the course UBC Science lists.' },
        { code: 'COP / MTH / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The theory behind every simulation.' },
        { code: 'COP / MTH / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Clean, chart and question real data in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes set to the BC school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Pacific time, agreed when you choose a batch.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings in BC, evening for the teacher.' },
      { time: '1-on-1', l: 'Planned around project deadlines and unit tests.' }
    ],
    cells: [
      { h3: 'Same teacher each week', p: 'Someone who knows the project history.' },
      { h3: 'The class language', p: 'Python or Java, whichever the school set.' },
      { h3: 'Pair work on screen', p: 'Driver and navigator, roles swapped.' },
      { h3: 'Assignments explained', p: 'Your teen writes every line.' },
      { h3: 'Tests and tables', p: 'Expected output before every run.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or your teen alone.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Programs and projects by our students, many started in the same courses BC teens take now. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. Then a monthly fee covers eight live classes a month, shown in your own currency on this page, with no term contract: stop at the end of any month.',
    free: ['A free first class', 'Bring the current project', 'No card details asked'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'Choose the batch time', 'Billed month by month'],
    one: ['Your teen and one teacher', 'Times set around deadlines', 'Built on their own outline']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Computer Programming 11 and 12: common questions',
    items: [
      { q: 'What is Computer Programming 11 in BC?', a: 'Computer Programming 11 is a BC Applied Design, Skills, and Technologies course. Its content includes problem decomposition, pair programming, programming constructs for input and output, logic, decisions and loops, turning requirements into algorithms, pre-built libraries and their documentation, and test cases that compare expected and actual output.' },
      { q: 'Is Computer Science 11 the same as Computer Programming 11?', a: 'No. Computer Science 11 is a Mathematics course and Computer Programming 11 is an ADST course. Both teach programming, but Computer Science 11 adds logic such as truth tables and De Morgan\'s laws, number systems, searching algorithms and modelling mathematical problems, while Computer Programming 11 centres on design, pair work and testing.' },
      { q: 'Do you grant Computer Programming 11 or 12 credit?', a: 'No. We teach alongside the student\'s school course and we do not grant provincial credits. The credit comes from the school that teaches and assesses the course, such as the student\'s own school, a district summer school or an online learning school.' },
      { q: 'What does Computer Programming 12 add?', a: 'Bigger, longer projects. Code gets organized into functions, methods or classes, and the list adds documentation with industry standard tools, self-documenting code, user interface design, error handling, a debugger that steps through code, projects with multiple source files, pre-built data structures, and bug reports and feature requests from users.' },
      { q: 'Which language do BC computer courses use?', a: 'The curriculum pages we read do not fix a language, so it depends on the teacher; ask which one the class uses. We teach in whichever language that is, most often Python or Java, and the practice set on this page is in Python.' },
      { q: 'What is in Computer Science 12?', a: 'Computer Science 12 is on the BC Mathematics course list. Its content page did not load when we returned to the curriculum site on 22 October 2026, so we do not describe it here. Bring the teacher\'s outline to the first class and we plan from that.' },
      { q: 'Do I need Computer Programming 12 for computer science at UBC?', a: 'Not according to UBC\'s own list. For BC applicants to Science at UBC Vancouver, the requirements tool we read on 22 October 2026 asked for a Grade 12 English, Pre-Calculus 12, one Grade 12 science, and Chemistry 11 and Physics 11. It named no programming course.' },
      { q: 'Is pair programming allowed, or is it cheating?', a: 'It is part of the course. Computer Programming 11 names pair programming as content: one student, the driver, types while the other, the navigator, reviews each line, and they switch roles often. Copying another pair\'s work is a different matter, and teachers treat it as such.' },
      { q: 'How should my teen prepare for a Computer Science 11 test?', a: 'Keep a vocabulary page, trace two short programs on paper each day, practise binary and hexadecimal conversions and truth tables, and rebuild linear search, binary search and the greatest common factor from a blank file. A timed practice in the last week shows what still needs work.' },
      { q: 'What times work for families in BC?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. BC has stayed on UTC-7 all year since March 2026, so a class time agreed in Pacific time does not shift in November.' },
      { q: 'How much does help with these courses cost?', a: 'Nothing for the first class. Then you pay month by month for eight live classes, with no contract for the term; leaving at a month end is fine. See the fees section above for the present group and private amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for BC students and families.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Our BC hub, with courses from age 6.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'The national index of our Canada guides.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'How each province files its computing courses.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math across Canada', p: 'Pre-calculus 12 beside the other provinces&rsquo; courses.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The Waterloo contest for school programmers.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A calm method for finding the faulty line.' },
      { href: '/blog/binary-numbers-explained', label: 'Binary numbers explained', p: 'Base 2 from the beginning, for question 1.' },
      { href: '/blog/logic-gates-for-beginners', label: 'Logic gates for beginners', p: 'AND, OR and NOT drawn as circuits.' },
      { href: '/blog/probability-for-beginners', label: 'Probability for beginners', p: 'The counting behind the dice problem.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which course it is (CP or CS, 11 or 12), the class language and the next deadline. The first class starts with the student&rsquo;s current assignment.',
    readFirst: 'Want to look around first? Read <a class="ag-inline-link" href="/how-we-teach">how a class with us runs</a>, or compare the <a class="ag-inline-link" href="/courses/python-complete-masterclass-teens">Python for Teens syllabus</a> with your teen&rsquo;s outline.',
    note: 'All classes are live video lessons with teachers based in India. Nobody comes to your home and there is nowhere in BC to drive to; WhatsApp is the fastest way to reach us.',
    formNote: 'Booking the free class never needs a card.'
  },

  footer: {
    cols: [
      { h4: 'Senior programming', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Problem solving for teens' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'British Columbia', links: [
        { href: '/coding-classes-in-british-columbia', label: 'Coding classes in BC' },
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
      ] }
    ],
    bottomRight: 'Expect, run, compare, then improve'
  },

  personalityCss: `
.ag-root.ag-cop .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-cop .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-cop .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cop .ag-table caption { text-align: left; font-style: normal; font-size: 0.92rem; }
.ag-root.ag-cop .ag-code-head span { letter-spacing: 0.04em; }
.ag-root.ag-cop .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca research copies fetched raw 22 October 2026: ADST and Mathematics course lists; Computer Programming 11 big ideas and content elaborations (problem decomposition, hand tracing, pair programming, language constructs, requirements, design entities, pre-built libraries, API documentation, inline commenting, test cases, computational thinking definition); Computer Programming 12 content (documentation tools, self-documenting code, collaboration tools, advanced pair programming, UI design, error handling, debugger, complexity, pre-built data structures, bug reports, interpersonal skills); Computer Science 11 big ideas, content and competencies; Computer Studies 10 programming items. Re-fetch failed (curl exit 7) so Computer Science 12 content is not quoted. you.ubc.ca requirements tool, Science, BC applicants. CEMC CCC facts. BC permanent UTC-7 (facts-geo.md).',
    localProject: 'Our dice simulation in Python (seed 11) estimating P(sum of two dice at least 10) at 100, 1,000, 10,000 and 100,000 trials against the exact 6 of 36, with the output printed and the 100,000-trial wobble explained; our Pacific-to-India clock converter (fixed 12 h 30 min gap since BC went to permanent UTC-7) with anticipation, detection and resolution of bad input and a nine-row expected-versus-actual test table; ten original practice questions (number systems, scope, De Morgan truth table, nested loops, binary search, Euclid debug, list removal bug, lcm, postal code validation, requirements and pair roles) with run-checked answers; a CP-or-CS chooser; a ten-step study plan and four-week run-up. Lesson family: test against what you can prove.',
    requiredMentions: ['the observer or navigator, reviews each line of code as it is typed in', 'a complete set of requirements that will support the rest of the software development cycle', 'writing source code in such a way that makes inline comments seem unnecessary', 'anticipation, detection and resolution of application errors', 'estimate theoretical probability through simulation', 'compute greatest common factor/least common multiples', 'interpretation of library documentation/application programming interface (API)','visual code comparison tools to view code differences (e.g., Meld)', '100000 trials: 0.1681', 'GAP_MINUTES = 12 * 60 + 30', 'rejected: invalid literal for int() with base 10', 'is_postal_code', 'Expect, run, compare, then improve'],
    sources: [
      { claim: 'Computer Programming 11 big ideas and content elaborations.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'Computer Programming 12 content elaborations.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/12/computer-programming' },
      { claim: 'Computer Science 11 big ideas, content and curricular competencies.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'ADST course list (Computer Studies 10, Web Development 10, Computer Information Systems 11, Computer Programming 11 and 12) and Computer Studies 10 programming items.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'Mathematics course list including Computer Science 11 and 12.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics' },
      { claim: 'UBC Vancouver Science requirements for BC applicants.', url: 'https://you.ubc.ca/programs/computer-science-vancouver-bsc/' },
      { claim: 'CCC date, school participation rule and contest languages.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'BC permanent UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' }
    ],
    rejectedClaims: [
      'Computer Science 12 content: the content page could not be fetched (curl exit 7 on 22 October 2026); only its place on the Mathematics course list is stated.',
      'Credit values of BC courses and the graduation numeracy and literacy requirements: www2.gov.bc.ca was unreachable for the research and curriculum.gov.bc.ca on re-fetch; none printed.',
      'That any language is required by the BC curriculum: the pages read name none for these courses.',
      'That Computer Programming 11 or 12 or Computer Science 11 or 12 is required for UBC Computer Science: the requirements tool lists none; stated as read.',
      'That every BC school offers these courses: the curriculum lists courses, schools choose; stated as such.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'Named BC schools, districts or online learning schools: none named.',
      'Any affiliation with the BC Ministry of Education and Child Care, UBC or CEMC: none, and the page says so.'
    ]
  }
};
