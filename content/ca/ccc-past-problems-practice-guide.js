'use strict';
// CCC past problems practice guide (ag- contest door; Canada cluster Plan 2, row 40).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/cemc/, src-pilots/ccc-junior-guide/,
// src-pilots/ccc-past-problems-practice-guide/ and src-pilots/how-to-register-for-waterloo-contests/):
//  - cemc.uwaterloo.ca/resources/past-contests (past-contests.txt): "Problems, solutions and results from previous
//    years can be found in the table below."; "These resources can be used by students to review and attempt past
//    contests to gain a better understanding of the contest format and level of difficulty."; "Below you will find
//    resources from the last 10 years."; year filter 2016 to 2026; contest filter includes CCC and CCO.
//  - cemc.uwaterloo.ca/online-ordering-terms-and-conditions: "Resources are available on the CEMC website at no
//    cost."; materials "licensed under a Creative Commons Attribution-NonCommercial 4.0 International".
//  - cemc.uwaterloo.ca/contests/ccc (ccc.txt): the grader is "where participants can create a free practice account
//    and access previous contests"; example programs "illustrating input and output"; "We strongly recommend that
//    every participant attempt the Practice Contest."
//  - cccgrader.com (cccgrader-home.html): "It also provides access to practice problems and previous contests."
//  - cccgrader.com/register.php (cccgrader-register.html): "You will need your school's CEMC "school number", which
//    is what was used to register your school for the CCC: your math or computer science teacher will have that
//    number. After this, your teacher will need to authenticate you as a student."
//  - cccgrader.com/directions.pdf (cccgrader-directions.txt): submission steps ("Enter" a contest, select "Problem",
//    "Language", "Browse", "Submit"); verdicts including "skipped test (e.g., within one test batch, you have failed
//    one of the tests, and thus the remainder of the tests within that batch have been skipped)"; "Register/Start
//    timer"; "the system will generate an automatic logout after approximately 10 minutes of inactivity"; pitfalls:
//    filenames "only alphanumeric, underscore", "Python 2 programs and Python 3 programs are not interchangeable",
//    Java "Main.java", "Use at most one such input object to read from System.in.", "fast input",
//    "sys.setrecursionlimit(limit)"; teachers' "school account" can submit solutions.
//  - cccgrader.com/rules.pdf (ccc-rules.txt): "Feedback is always provided for the sample test cases."; "Submitted
//    programs must not read or write to files."; "All other Internet use is forbidden. This includes email, chat, web
//    search, code forums, and generative AI".
// Our own material, labelled on the page: the six-step method for one past problem; the local checker judge.py and
// the Cold Days example (our problem), run on 22 October 2026 under CPython 3.13 (parses as Python 3.8): three
// "correct" lines for cold_days.py and three "wrong answer" lines for the version with a prompt; the order for
// working through the archive; the arithmetic 11 years x 5 problems = up to 55 problems per level (the filter
// lists 2016 to 2026, although the page text says 10 years).
// Lesson family: deliberate practice with feedback (attempt, test, compare, re-solve).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JUDGE = "# Our local checker: runs a program on every .in file in a folder and\n# compares its output with the matching .out file, exactly, like a grader.\n# Usage: python judge.py tests python cold_days.py\nimport subprocess\nimport sys\nimport time\nfrom pathlib import Path\n\nLIMIT = 3.0  # seconds per test, the CCC default\n\ndef verdict(cmd, test_in, test_out):\n    start = time.time()\n    try:\n        run = subprocess.run(cmd, stdin=open(test_in), capture_output=True,\n                             text=True, timeout=LIMIT)\n    except subprocess.TimeoutExpired:\n        return \"time-limit exceeded\"\n    if run.returncode != 0:\n        return \"run-time error\"\n    got = run.stdout.rstrip(\"\\n\").split(\"\\n\")\n    want = test_out.read_text().rstrip(\"\\n\").split(\"\\n\")\n    if got != want:  # strict on purpose: even a trailing space fails\n        return \"wrong answer\"\n    return \"correct (%.2f s)\" % (time.time() - start)\n\nfolder, cmd = Path(sys.argv[1]), sys.argv[2:]\nfor test_in in sorted(folder.glob(\"*.in\")):\n    print(test_in.name, verdict(cmd, test_in, test_in.with_suffix(\".out\")))";

const COLD = "# Our practice problem: Cold Days (not a CEMC problem)\nn = int(input())\ntemps = list(map(int, input().split()))\nprint(sum(1 for t in temps if t < 0))";

const COLDP = "# The same program with a friendly prompt: the grader marks it wrong\nn = int(input(\"How many days? \"))\ntemps = list(map(int, input().split()))\nprint(sum(1 for t in temps if t < 0))";

const RUNOK = "$ python judge.py tests python cold_days.py\n01.in correct (0.03 s)\n02.in correct (0.03 s)\n03.in correct (0.03 s)";

const RUNBAD = "$ python judge.py tests python cold_days_prompt.py\n01.in wrong answer\n02.in wrong answer\n03.in wrong answer";

const T1 = "tests/01.in\n5\n-3 2 0 -11 4\n\ntests/01.out\n2";

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'How to practise with CCC past papers: where CEMC keeps them, how the CCC Grader judges a submission, and a method and local checker of our own.' },
  slug: 'ccc-past-problems-practice-guide',
  code: 'cppp',
  accent: '#254B70',
  accentRationale: 'CCC past problems practice guide, Canada: a slate blue #254B70, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 8.54 on the paper #FBF8F2 and above 7.3 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CCC past problems practice guide',
  title: 'CCC Past Papers: How to Practise with CEMC\'s Archive',
  description: 'Where to find Canadian Computing Competition past papers, how the CCC Grader judges a submission, and a six-step method and local checker for practice.',
  ogDescription: 'CEMC publishes CCC past problems, solutions and results free. This guide shows how to use them well: the archive, the grader\'s verdicts and pitfalls, our practice method, and a checker you can run at home.',
  twitterDescription: 'Practising with CCC past papers: the archive, the grader, and a method that makes each problem count.',
  pageName: 'CCC Past Problems Practice Guide',
  webPageDescription: 'A practice guide for Canadian students using the Canadian Computing Competition archive published by CEMC and the CCC Online Grader, with an original practice method and a local output checker.',
  courseDescription: 'Live online CCC preparation built around timed practice with past papers, for Junior and Senior writers across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CCC past problems practice',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#archive', label: 'The archive' },
    { href: '#grader', label: 'The grader' },
    { href: '#method', label: 'Method' },
    { href: '#checker', label: 'Local checker' },
    { href: '#order', label: 'Order of work' }
  ],
  eyebrow: 'Canada &middot; Canadian Computing Competition &middot; Past papers',
  h1: 'How to practise with CCC past papers',
  lede: 'Every CCC writer is told to "do past papers", and most do them badly: a quick read, a peek at the solution, and on to the next. The Centre for Education in Mathematics and Computing (CEMC) gives Canadian students an unusually good archive, free, and the same online grader the real contest uses. This guide shows where the past papers live, how the CCC Online Grader judges a submission, the pitfalls its own instructions warn about, a six-step method that makes one past problem worth an evening, and a small checker we wrote so students can test their programs exactly the way a grader does. We never reproduce CEMC\'s problems here; we point to them.',
  secondaryCta: { href: '#method', label: 'See the six-step method' },
  wa: 'Hello Modern Age Coders, my child in Canada is practising CCC past papers. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; we link to CEMC\'s papers and never copy them',
  spec: [
    ['Archive', 'CEMC past contests, free'],
    ['Years', 'Filter runs 2016 to 2026'],
    ['Practice system', 'CCC Online Grader'],
    ['Account needs', 'The school\'s CEMC number'],
    ['Problems per paper', '5, Junior or Senior'],
    ['2027 contest', '17 February 2027'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CCC past papers, with solutions and results, are free on CEMC\'s past contests page, and the CCC Online Grader lets students submit old problems and get the real verdicts. They pay off when used slowly: attempt, test, compare, re-solve. Modern Age Coders runs this practice live online, batch or one to one, in its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses built on past-paper practice',
    lede: 'Past papers are free; what a teacher adds is the review afterwards. These are the courses where that happens.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CPP / 01', title: 'CCC Junior and Senior Preparation', note: 'Past papers worked weekly with a teacher, then timed three-hour sittings from January 2027.' },
      { course: 'competitive-programming-for-teens-course', code: 'CPP / 02', title: 'Competitive programming for teens', note: 'For students who have exhausted the easy past problems and need the algorithms for the hard ones.' },
      { course: 'python-complete-masterclass-teens', code: 'CPP / 03', title: 'Python for teens', note: 'For a student whose past-paper attempts stall on the language, not the problem.' }
    ]
  },

  sections: [
    {
      id: 'archive', tint: 'tint', eyebrow: 'Where the papers are',
      h2: 'Where CEMC keeps CCC past papers, solutions and results',
      lede: 'Two CEMC systems hold the past CCC material, and they do different jobs. One is a library to read; the other is a judge to submit to. Every description below is from CEMC\'s own pages, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The CCC practice material CEMC publishes (read 22 October 2026)', head: ['Where', 'What CEMC says it holds', 'Use it for'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests, solutions and results</a>', '"Problems, solutions and results from previous years can be found in the table below." The text says "resources from the last 10 years"; the year filter lists 2016 to 2026.', 'Reading problems, official solutions and results booklets'],
          ['<a class="ag-inline-link" href="https://cccgrader.com/" rel="noopener" target="_blank">CCC Online Grader</a>', '"It also provides access to practice problems and previous contests." CEMC calls it the place "where participants can create a free practice account and access previous contests".', 'Submitting your own program and getting real verdicts'],
          ['<a class="ag-inline-link" href="https://cccgrader.com/sample_soln.pdf" rel="noopener" target="_blank">Sample programs document</a>', 'CEMC\'s example programs "illustrating input and output", one per language, with each compiler version', 'Checking how input should be read in your language'],
          ['Practice Contest on the grader', 'CEMC: "We strongly recommend that every participant attempt the Practice Contest."', 'One rehearsal of the contest system before February 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What CEMC intends the archive for',
          left: [
            'CEMC states the purpose plainly: "These resources can be used by students to review and attempt past contests to gain a better understanding of the contest format and level of difficulty." It describes the archive as free, and its ordering terms add that "Resources are available on the CEMC website at no cost."',
            'Notice the order in that sentence: attempt, then understand. The archive is built to be tried, not just read.'
          ],
          rightH3: 'Why we never copy the problems',
          right: [
            'CEMC\'s terms say its materials are licensed under a Creative Commons Attribution-NonCommercial 4.0 International licence. We teach for a fee, so we treat CEMC\'s problems as theirs: we link to them, we discuss them in class with the original open on screen, and we write our own problems for anything we publish.',
            'For families this has a useful side effect. A student who practises from CEMC\'s own archive is reading the real wording, formatting and constraints, not someone\'s retelling of them.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">CEMC past contests</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC CCC page</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/online-ordering-terms-and-conditions" rel="noopener" target="_blank">CEMC terms and conditions</a> and the CCC Online Grader home page, read 22 October 2026. We are not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'account', tint: 'deep', eyebrow: 'Getting in',
      h2: 'Setting up a CCC Online Grader account for practice',
      lede: 'The grader account a student practises with is the same one used on contest day, so it is worth setting up early in the school year. The steps follow the grader\'s registration page and its instructions document.',
      body: [
        { kind: 'ol', items: [
          '<b>Get the school number from a teacher.</b> The registration page says: "You will need your school\'s CEMC "school number", which is what was used to register your school for the CCC: your math or computer science teacher will have that number." CEMC\'s CCC page tells teachers to hand students the school number but never the school\'s password, which a student does not need.',
          '<b>Register on the grader.</b> Fill in name, date of birth, the school number, email and a password on cccgrader.com/register.php.',
          '<b>Wait for the teacher.</b> "After this, your teacher will need to authenticate you as a student." The teacher approves the account from the grader\'s teachers\' page.',
          '<b>Watch for the email.</b> The instructions say the student then receives a message that the account in the CCC Contest System has been created, with the username.',
          '<b>Log in and enter a past contest.</b> From the main page, "Enter" a contest, choose a "Problem", choose a "Language", upload the file with "Browse" and press "Submit".',
          '<b>Read the submission page.</b> It shows the score and the result of each test case as the program runs; refreshing updates it.'
        ] },
        { kind: 'p', mt: true, html: 'A student whose school does not take part in the CCC has no school number to register with. The grader\'s instructions also mention that each school has its own "school account" that teachers can use to submit solutions, so a teacher who supports a student\'s practice can try problems that way. For how entry to the contest itself works, CEMC\'s rules on the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> page apply.' }
      ]
    },
    {
      id: 'grader', tint: 'tint', eyebrow: 'The verdicts',
      h2: 'How the grader judges a submission, verdict by verdict',
      lede: 'Every past problem submitted to the grader comes back with one of six verdicts per test. Learning to read them is half of what past-paper practice is for. The verdict names and their examples are quoted from the grader\'s instructions; the right-hand column is our advice.',
      body: [
        { kind: 'table', caption: 'CCC Grader verdicts, from the grader\'s instructions document (read 22 October 2026), with our advice', head: ['Verdict', 'The grader\'s example', 'What to do next (ours)'], rows: [
          ['correct', '"your output matches the expected output exactly"', 'Move on, or try the problem again a week later from a blank file'],
          ['wrong answer', '"your program gave incorrect output"', 'Re-read the output section; then test the smallest and largest inputs by hand'],
          ['time-limit exceeded', '"your program took too long to find an answer"', 'Estimate the steps for the largest input; the method, not the code, usually needs to change'],
          ['run-time error', '"segmentation fault in your program"', 'Look for an index past the end of a list, a division by zero, or recursion that runs too deep'],
          ['compilation error', '"your program did not compile"', 'Check the language chosen in the menu, and for Java the class name'],
          ['skipped test', '"within one test batch, you have failed one of the tests, and thus the remainder of the tests within that batch have been skipped"', 'Fix the first failure in the batch; the skipped tests say nothing yet']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Feedback on the samples is guaranteed',
          left: [
            'The CCC rules say "Feedback is always provided for the sample test cases." A program that fails the sample on the grader but passed it at home is almost always reading input differently from the way the grader supplies it.',
            'The rules also fix the shape of input and output: standard input and standard output only, and "Submitted programs must not read or write to files."'
          ],
          rightH3: 'Why exact matters',
          right: [
            'The grader compares output with the expected answer exactly. That one fact explains most of the wrong answers we see from students who are sure their logic is right: an extra word, a missing line, a label in front of the number.',
            'The checker in a later section is built to be just as strict, so those mistakes surface at home, before the grader sees them.'
          ] }
      ]
    },
    {
      id: 'pitfalls', tint: 'deep', eyebrow: 'Pitfalls',
      h2: 'The pitfalls the grader\'s own instructions warn about',
      lede: 'The grader\'s instructions end with a short list headed "How to avoid common pitfalls". Each one is a mark lost by someone. The quotes are the instructions\' own words; the fixes are ours.',
      body: [
        { kind: 'table', caption: 'Common pitfalls, quoted from the CCC Grader instructions (read 22 October 2026), with our fixes', head: ['The instructions say', 'Our fix'], rows: [
          ['Filenames should contain "only alphanumeric, underscore" or dash characters', 'Name files like j3.py or s2_v2.cpp; no spaces, no accents'],
          ['"Python 2 programs and Python 3 programs are not interchangeable."', 'Always pick Python 3 in the menu unless you truly wrote Python 2'],
          ['Java programs must be in a file called Main.java, with public class Main', 'Start every Java practice file from that line'],
          ['"Use at most one such input object to read from System.in."', 'One Scanner or one BufferedReader per Java program, created once'],
          ['To get a perfect score, "fast input" is sometimes required', 'In C++, scanf or a faster cin setup; in Python, read sys.stdin.buffer once'],
          ['Python\'s recursion depth can be raised with "sys.setrecursionlimit(limit)"', 'Raise it at the top of any recursive Python solution, or rewrite the recursion as a loop']
        ] },
        { kind: 'p', mt: true, html: 'The instructions add a warning about live contests that is worth practising for: "the system will generate an automatic logout after approximately 10 minutes of inactivity." The timer keeps running, and the student can log in again and carry on while time remains. In a mock paper at home, a student who thinks for long stretches should expect to log in again, and not be thrown by it.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Method',
      h2: 'A six-step method for one past problem',
      lede: 'This is the method our teachers use for every past CCC problem a student attempts. It is ours, and it is slow on purpose: one problem done this way teaches more than five read through.',
      body: [
        { kind: 'ol', items: [
          '<b>Read it twice, then restate it.</b> Open the problem from CEMC\'s archive. After two readings, write the input, the output and the rule in three plain sentences of your own.',
          '<b>Do the sample by hand.</b> Work the sample input on paper until you get the sample output. If you cannot, the statement is not yet understood, and no code will help.',
          '<b>Write the simplest correct program.</b> Ignore speed. Make it right for small inputs, and check it on the sample with the local checker in the next section.',
          '<b>Make your own tests.</b> Add at least two: a tiny input and an awkward one, such as all values equal or a single item. Predict the output before running.',
          '<b>Submit, and read the verdicts.</b> On the grader, note which tests pass. A time-limit verdict on the later tests means step 3 was right but too slow; now think about a faster method.',
          '<b>Only then, read CEMC\'s solution.</b> We ask for at least twenty-five minutes of honest effort first. Afterwards, close it and re-solve the problem from a blank file a week later.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why step 6 waits',
          left: [
            'A solution read too early feels like understanding and fades within days. A solution read after a real struggle answers a question the student has already asked, and it stays.',
            'The re-solve a week later is the real test. If the student can write it again without looking, the idea has moved from CEMC\'s page into the student\'s head.'
          ],
          rightH3: 'What to keep in a notebook',
          right: [
            'For every past problem: the year and number, the verdicts on each submission, the cause of each failure in one line, and the key idea of the solution in one sentence.',
            'By February 2027, that notebook is a personal list of the mistakes most likely to cost marks on contest day, which is worth more than any list of tips.'
          ] }
      ]
    },
    {
      id: 'checker', tint: 'deep', eyebrow: 'A tool of ours',
      h2: 'A local checker that judges like a grader',
      lede: 'Students test at home by eye, and eyes forgive small differences. A grader does not. We wrote this short Python program for our students: it runs a solution on every test file in a folder and compares the output exactly, reporting verdicts in the grader\'s own words. It is ours, not CEMC\'s.',
      body: [
        { kind: 'code', label: 'judge.py &middot; our local checker (Python)', lang: 'python', code: JUDGE, note: 'Put each test in a folder as a pair of files, 01.in with the input and 01.out with the expected output. The checker gives each test three seconds, the CCC\'s default, and treats any difference, even a trailing space, as a wrong answer.' },
        { kind: 'p', mt: true, html: '<b>Our practice problem: Cold Days.</b> Given N daily temperatures in degrees Celsius, print how many of them are below zero. <b>Input:</b> N on the first line, then N whole numbers on one line. <b>Output:</b> one integer. It is deliberately easy, because the point here is the checking, not the problem.' },
        { kind: 'code', label: 'One test pair for Cold Days', lang: 'text', code: T1 },
        { kind: 'code', label: 'cold_days.py &middot; our solution', lang: 'python', code: COLD },
        { kind: 'code', label: 'cold_days_prompt.py &middot; the same logic with a friendly prompt', lang: 'python', code: COLDP },
        { kind: 'code', label: 'What our checker printed on 22 October 2026', lang: 'text', code: RUNOK + '\n\n' + RUNBAD, note: 'Both programs count correctly. The second fails every test because the words "How many days? " are printed to standard output in front of the answer. The CCC rules forbid exactly this: output must match the problem\'s format, with no prompts. Times will differ on your computer.' },
        { kind: 'two', mt: true,
          leftH3: 'How to use it with a past problem',
          left: [
            'Copy the sample input and output from the CEMC problem into 01.in and 01.out. Add your own tests from step 4 of the method as 02, 03 and so on. Run the checker after every change.',
            'When everything says correct at home, submit to the grader. If the grader disagrees, you have learnt something specific about the hidden tests, which is the most useful thing a wrong answer can teach.'
          ],
          rightH3: 'What it does not do',
          right: [
            'It does not know CEMC\'s hidden tests, measure memory, or reproduce the grader\'s exact speed. A program that is fast here may still time out on the grader\'s largest inputs.',
            'It is a habit-builder: run, compare exactly, read the verdict. Students who use it stop losing marks to output formatting within a few weeks.'
          ] }
      ]
    },
    {
      id: 'order', tint: 'tint', eyebrow: 'Order of work',
      h2: 'Which past problems to do, and in what order',
      lede: 'With a full paper of five problems for each level in each year, the archive is large: our arithmetic gives up to 55 Junior and 55 Senior problems across the eleven years in the filter (11 x 5). Nobody needs all of them. This order is ours.',
      body: [
        { kind: 'table', caption: 'Working through the CCC archive (our plan)', head: ['Phase', 'Which problems', 'How many', 'Goal'], rows: [
          ['1. Across the years', 'Problem 1 from several recent Junior papers, then problem 2', 'About 10', 'Fluent input and output; every one correct on the first or second submission'],
          ['2. Middle of the paper', 'Junior problems 3 and 4 from recent years', 'About 10', 'Counting, simulation and strings with careful reading'],
          ['3. The top of Junior', 'Junior problem 5, subtasks first', 'About 5', 'Taking partial marks with a simple method'],
          ['4. Senior entry', 'Senior problems 1 and 2', 'About 10', 'Sorting, searching and efficient methods'],
          ['5. Full papers', 'Two or three whole papers at the chosen level, timed', '2 to 3 papers', 'Three hours of decisions, from January 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Across first, then down',
          left: [
            'Doing the same question number across several years first lets a student meet one level of difficulty many times. Once problem 1 is reliably correct, problem 2, and so on. Whole papers come last, when the student can already handle each part.',
            'Keep the two most recent years untouched until the end. They are the closest match to the next contest, and are worth saving for timed practice.'
          ],
          rightH3: 'Honesty in practice',
          right: [
            'The contest bans outside help, and practice should copy that. The rules spell it out: "All other Internet use is forbidden. This includes email, chat, web search, code forums, and generative AI".',
            'We ask students to practise with only the official language documentation open. A problem solved with a search engine open has not been solved by the student.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages of past-paper practice',
    lede: 'How our teachers see a student\'s practice change over a season. The stages are ours.',
    table: { caption: 'From reading past papers to learning from them (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Reading', 'Reads problems and solutions; submits rarely'],
      ['2. Submitting', 'Submits often, but fixes by trial and error'],
      ['3. Testing', 'Tests locally with own cases before each submission'],
      ['4. Re-solving', 'Re-solves old problems from memory and keeps a mistakes notebook']
    ] },
    left: { h3: 'For parents', ps: [
      'Count submissions, not problems read. A week with three problems submitted and understood beats a week with ten skimmed.',
      'Ask to see the mistakes notebook. Its length is a good sign, not a bad one.'
    ] },
    right: { h3: 'For students', ps: [
      'Never open a solution before you have something to compare it with.',
      'When the grader says wrong answer, believe it. Look for the case you did not test.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students using the CCC archive',
    lede: 'Taught live online by one regular teacher, as a batch or one to one, wherever in Canada the student lives.',
    bands: [
      { num: 'I', h3: 'Language first', sub: 'Before the archive', courses: [
        { code: 'CPP / LANG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'For Grades 5 to 8, before Junior.' },
        { code: 'CPP / LANG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools that teach Java.' },
        { code: 'CPP / LANG / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'For Senior and the CCO.' }
      ] },
      { num: 'II', h3: 'Contest practice', sub: 'Grades 9 to 12', courses: [
        { code: 'CPP / PRAC / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Methods for the middle problems.' },
        { code: 'CPP / PRAC / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'For counting and reasoning questions.' },
        { code: 'CPP / PRAC / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java with exam discipline.' }
      ] },
      { num: 'III', h3: 'Further', sub: 'University level', courses: [
        { code: 'CPP / FUR / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'Beyond school contests.' },
        { code: 'CPP / FUR / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For ages 18 and up.' },
        { code: 'CPP / FUR / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Deeper Python, ages 18 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live past-paper sessions on a Canadian timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short after-school sessions for one problem at a time.' },
      { time: 'Weekends', l: 'Weekend mornings for full timed papers.' },
      { time: '1-on-1', l: 'A review of the student\'s own submissions, line by line.' }
    ],
    cells: [
      { h3: 'CEMC\'s archive', p: 'Original problems opened from CEMC, never copied.' },
      { h3: 'Exact testing', p: 'Every solution checked the way the grader checks it.' },
      { h3: 'Verdict reading', p: 'Each failed test turned into a lesson.' },
      { h3: 'Re-solves', p: 'Old problems revisited from a blank file.' },
      { h3: 'Every province', p: 'Students join from coast to coast.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or one student.' }
    ]
  },

  projectsH2: 'Our students\' projects',
  projectsLede: 'Between contest problems, our students build things. A selection follows; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews parents left on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'CEMC\'s past papers are free, and stay free in our classes. What we charge is a monthly fee for live teaching and review, with no contract, so a family can stop whenever the season ends.',
    free: ['A free first class', 'One past problem worked with the six-step method', 'No card needed'],
    group: ['Fifteen to twenty students in a batch', 'The same teacher every week', 'A batch time that works for you', 'Paid each month'],
    one: ['One student, one teacher', 'Your own submissions reviewed', 'Paced to 17 February 2027']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'CCC past problems: common questions',
    items: [
      { q: 'Where can I find Canadian Computing Competition past papers?', a: 'On CEMC\'s past contests, solutions and results page, which is free. Its year filter runs from 2016 to 2026. Past problems can also be opened and submitted on the CCC Online Grader.' },
      { q: 'Are CCC solutions available?', a: 'Yes. CEMC publishes solutions alongside past problems and results in its archive. We suggest reading a solution only after at least twenty-five minutes of real effort, then re-solving the problem a week later.' },
      { q: 'Can my child submit past CCC problems for grading?', a: 'Yes. The CCC Online Grader offers previous contests and practice problems, and gives the same verdicts as on contest day: correct, wrong answer, time-limit exceeded, run-time error, compilation error, or a skipped test.' },
      { q: 'Does a student need a school number for a CCC Grader account?', a: 'Yes. The grader\'s registration page asks for the school\'s CEMC school number, which the math or computer science teacher has, and the teacher then authenticates the student. The school\'s password is never needed.' },
      { q: 'How many CCC past problems are there?', a: 'Each level has five problems a year. With the archive\'s filter covering 2016 to 2026, our count is up to 55 Junior and 55 Senior problems. Ten well-understood problems are worth more than fifty skimmed.' },
      { q: 'Which CCC Junior problems should a beginner start with?', a: 'Problem 1 from several recent years, then problem 2. Doing the same question number across years builds reliability before a student faces full papers.' },
      { q: 'Why does my program pass at home but fail on the grader?', a: 'Most often the output is not exactly what the problem asks for, such as an input prompt or an extra word. Next most common are the wrong Python version in the menu, or input read in a different way from the grader\'s.' },
      { q: 'Can students use AI tools while practising?', a: 'We advise against it, because the CCC rules forbid generative AI and web search during the contest, and practice should match the real conditions. Outside the contest, ChatGPT also needs a parent\'s permission for anyone under 18.' },
      { q: 'Do you copy CCC problems into your course?', a: 'No. CEMC licenses its materials for non-commercial use, so we open CEMC\'s problems from its own site in class and write our own problems for anything we publish.' },
      { q: 'When are your CCC practice classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The time is set in Eastern time and given to you in your province\'s time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students working through past contest problems.',
    items: [
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Our CCC coaching, Junior and Senior.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The 2027 Junior paper, with original problems.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for families in Canada.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'What to do after a wrong-answer verdict.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Reading an official solution properly.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors', p: 'A common first run-time surprise.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring a past CCC problem your child got stuck on, or let us choose one. The teacher works through the six-step method with the student live, and you see exactly how a past paper should be used.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class in full, and the <a class="ag-inline-link" href="/courses">course list</a> holds the syllabi.',
    note: 'Lessons happen over live video with teachers based in India; there is no centre to visit in Canada. WhatsApp is the quickest way to reach us.',
    formNote: 'The first class costs nothing, and no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Attempt, test, compare, re-solve'
  },

  personalityCss: `
.ag-root.ag-cppp .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-cppp .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-cppp .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cppp .ag-table caption { text-align: left; font-style: italic; font-weight: 500; }
.ag-root.ag-cppp .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-cppp .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) past contests page, CCC page and ordering terms; the CCC Online Grader home, registration page, instructions document (directions.pdf), rules and sample-programs documents, all read raw on 22 October 2026: archive of problems, solutions and results (text says last 10 years; filter 2016 to 2026); purpose of the archive; no-cost resources; CC BY-NC 4.0 licence; free practice account and previous contests; account needs the school number and teacher authentication; submission steps; six verdicts including skipped test; pitfalls list; 10-minute inactivity logout; samples always get feedback; no file input or output; internet and AI ban.',
    localProject: 'A six-step method for one past problem; judge.py, our local checker that compares output exactly with a 3-second limit, shown running on our Cold Days problem with a correct solution and a prompt-printing one (three correct, three wrong answer); a five-phase order through the archive with our count of up to 55 problems per level. Lesson family: deliberate practice with feedback.',
    requiredMentions: ['Problems, solutions and results from previous years can be found in the table below', 'Creative Commons Attribution-NonCommercial 4.0 International', 'skipped test', 'automatic logout after approximately 10 minutes of inactivity', 'only alphanumeric, underscore', 'Use at most one such input object to read from System.in', 'Feedback is always provided for the sample test cases', 'judge.py', 'Cold Days', 'up to 55 Junior and 55 Senior problems'],
    sources: [
      { claim: 'Past problems, solutions and results; purpose of the archive; last 10 years; filter 2016 to 2026.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' },
      { claim: 'Free practice account and previous contests on the grader; example programs; Practice Contest recommended.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Grader registration needs the school number and teacher authentication.', url: 'https://cccgrader.com/register.php' },
      { claim: 'Submission steps, verdicts including skipped test, pitfalls, inactivity logout, school account.', url: 'https://cccgrader.com/directions.pdf' },
      { claim: 'Sample feedback, no file input or output, internet and AI rules.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'Resources at no cost; Creative Commons Attribution-NonCommercial 4.0 International licence.', url: 'https://cemc.uwaterloo.ca/online-ordering-terms-and-conditions' }
    ],
    rejectedClaims: [
      'Any CEMC past problem, sample or solution text: never reproduced; the page links to CEMC and uses an original problem.',
      'An exact count of problems in the archive: CEMC prints none; our figure is labelled as an upper bound from the filter.',
      'A way to register on the grader without a school number: not offered on the registration page, so not suggested.',
      'Machine timings as a promise of grader speed: our checker output is shown as run on our computer, with the caveat.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
