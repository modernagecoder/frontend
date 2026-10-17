'use strict';
// CodeHS help for students (ag- school-tools door; US cluster Phase T, row 139).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: official docs only; never answer keys or graded solutions). The autocomplete family is dominated by
// "codehs answers", "codehs answer key", "codehs unit N answers"; this page says plainly that we give none.
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "codehs help", "codehs not working", "why is my
// codehs not working", "codehs error", "codehs syntax error", "codehs how to reset assignment", "apcsa codehs".
// Sources, read raw with curl on 17 October 2026 from help.codehs.com/en/articles/... (copies in
// keyword-research-2026-09/us/src/codehs-help-for-students/):
//  - 4454472 tips on debugging: Docs tab; History tab "under More"; "view every previous version of your program";
//    Speed Slider; "Next and Last buttons"; comment out code; red Test Code button; progress bar of tests passed.
//  - 4454484 code that crashes the browser: "it means that the code contains an infinite loop"; "If you notice your
//    "check code" button is not working, you may have an error in your code or an infinite loop!"; questions to ask.
//  - 2708287 resetting code: More > History, "Reset Code to restore the item to its starter code"; "available for both
//    teachers and students"; then "save the changes using the Save button".
//  - 5142494 step debugger: "available for Python 3, Python 3 Graphics (tkinter), and Java(main) programs"; gear icon,
//    toggle Debug Mode; five functions Run, Step, Next, Continue, Stop.
//  - 4836907 Scratchpad and Unit Tests: the Unit Test file "is graded" and "can not Run or print to the console"; the
//    Scratchpad "is not graded" and "can Run and print"; "A Unit Test requires a return statement and does not ask for
//    user input."; freezing after Check Code: no user input unless asked, "Make sure the function returns a value."
//  - 5118034 language versions: More > About; Python 3.8, 3.11 and 3.12, Python 3 types use 3.11; "Most core CodeHS
//    courses currently use Java 8 (1.8)"; Java 21.05 in "AP Computer Science A (Cortado)", new courses and new Sandbox
//    programs; JShell.
//  - 7996203 Karel autograder messages: "Style: You are missing a semicolon on the following lines:"; "Style: It looks
//    like your indentation is off on line ___"; "Style: Some of your functions (FunctionName) do not start with a
//    lowercase letter."; "Style: You should not redefine turnRight()/turnAround() because SuperKarel already knows it.";
//    "Functionality: World _______" compares the ending world with each Result World.
//  - 4456742 login: school-issued email; teacher can update the password; Log in with Google; Clever; Canvas; Forgot
//    Password; incognito "Control + Shift + N"; some schools disable incognito.
//  - 5678174 Chromebook cursor: non-monospace browser font; Fixed-width Font setting; language "English (United States)".
//  - 4454503 questions to the teacher: More tab > Conversation. 8059484 blocked video: CodeHS-hosted version, slides.
//  - 14422583 "No CodeHS.me Site Here": "Removed by admin"; "Do your links and filenames match?"
//  - 1108168 copy and paste prevention (CodeHS Pro teacher setting): students "can no longer Copy, Paste, or Cut".
//  - apcentral.collegeboard.org/courses/ap-computer-science-a/exam: "This is a fully digital exam."; Bluebook.
// Our own material, labelled on the page: add_tax() in a printing and a returning version and the while-loop example,
// run with Python 3.13.6 outside CodeHS (ours-python-runs.txt); the symptom table, the order of checks and the
// before-you-message-your-teacher list.
// Lesson family: return values and testing (a function hands back a value; a test checks it).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PRINTS = `# Scratchpad (ours): prints the answer, returns nothing
def add_tax(price):
    print(price * 1.08)

result = add_tax(50)
print("result is", result)

# output
54.0
result is None`;

const RETURNS = `# Scratchpad (ours): returns the answer instead
def add_tax(price):
    return round(price * 1.08, 2)

print(add_tax(50))
print(add_tax(0))
print(add_tax(19.99))

# output
54.0
0.0
21.59`;

const LOOP = `# ours: why the Run button seems dead
count = 0
while count < 3:
    print("checking", count)
    # count never changes, so count < 3 stays true

# the fix: change the variable the condition tests
count = 0
while count < 3:
    print("checking", count)
    count += 1
print("done")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CODEHS HELP', blurb: 'CodeHS help for students from the official CodeHS help center: debugging tools, resetting an assignment, unit tests, autograder messages, login and Chromebook fixes. No answer keys.' },
  slug: 'codehs-help-for-students',
  code: 'cox',
  accent: '#7A4025',
  accentRationale: 'CodeHS help, US: a burnt umber (#7A4025) from the US allocation table, apart from the plum, claret and indigo Phase T pages, contrast 7.66 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'CodeHS help for students',
  title: 'CodeHS Help for Students: Errors, Resets and Debugging',
  description: 'CodeHS help for students: how to reset an assignment, use the debugger and Scratchpad, read autograder messages, and fix login, freezing and Chromebook issues.',
  ogDescription: 'Stuck on CodeHS? The official fixes for resetting code, frozen Check Code buttons, unit tests that will not pass, Karel style messages and login trouble, plus live help.',
  twitterDescription: 'CodeHS help: resets, debugger, unit tests, autograder messages and login fixes.',
  pageName: 'CodeHS help for students',
  webPageDescription: 'A guide for US middle and high school students to the tools and fixes in the CodeHS help center, with original examples. It explains concepts and gives no assignment answers.',
  courseDescription: 'Live online coding classes for US students who use CodeHS at school, in Java, Python and JavaScript, including AP Computer Science A and Principles, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CodeHS help',
  navLinks: [
    { href: '#symptoms', label: 'Symptoms' },
    { href: '#tools', label: 'Debug tools' },
    { href: '#tests', label: 'Unit tests' },
    { href: '#karel', label: 'Karel messages' },
    { href: '#access', label: 'Login and devices' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Middle and high school &middot; CodeHS',
  h1: 'CodeHS help for students',
  lede: 'CodeHS is a browser-based coding platform used in school computer science classes from Karel the Dog all the way to AP Computer Science A. When it goes wrong, it tends to go wrong in the same handful of ways: the Check Code button stops responding, a unit test fails even though the code looks right, the autograder complains about style, or the login sends you to the wrong account. CodeHS documents every one of these in its own help center. This page collects those fixes in one place, adds small examples of our own, and is clear about one thing from the start: we explain how things work, and we do not hand out answers to assignments.',
  secondaryCta: { href: '#symptoms', label: 'Find your problem' },
  wa: 'Hello Modern Age Coders, my child in the US uses CodeHS at school and is stuck. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java, Python and JavaScript',
  spec: [
    ['For', 'Grades 6 to 12'],
    ['Tool', 'CodeHS, in the browser'],
    ['Languages', 'Karel, Python, Java, JavaScript'],
    ['Exam link', 'AP CSA and AP CSP'],
    ['Answers', 'Never; we teach the idea'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most CodeHS problems have documented fixes. A frozen Check Code button usually means an infinite loop. To start an exercise over, open More, then History, choose Reset Code and press Save. In unit-test exercises, write and run your function in the Scratchpad, and make it return a value. For login trouble, use your school email or your class&rsquo;s Google, Clever or Canvas sign-in.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for students who meet CodeHS at school',
    lede: 'Live lessons that teach the ideas behind the exercises, so the CodeHS work makes sense.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'COX / 01', title: 'AP Computer Science A', note: 'Java for the AP exam, unit by unit, alongside your school course.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'COX / 02', title: 'AP Computer Science Principles', note: 'The big ideas, the exam and planning a Create task of your own.' },
      { course: 'python-complete-masterclass-teens', code: 'COX / 03', title: 'Python for teens', note: 'Ages 13 to 18. Functions, loops and testing, from first principles.' }
    ]
  },

  sections: [
    {
      id: 'symptoms', tint: 'tint', eyebrow: 'Find your problem',
      h2: 'What is going wrong, and where CodeHS explains the fix',
      lede: 'Each row is a problem CodeHS documents in its help center, with the fix it gives. Start with the row that matches your screen.',
      body: [
        { kind: 'table', caption: 'Common CodeHS problems and the documented fixes, from help.codehs.com (read 17 October 2026)', head: ['What you see', 'What CodeHS says it usually means', 'What to try'], rows: [
          ['The browser freezes or crashes after Run or Check Code', 'The code contains an infinite loop', 'Comment out loops one at a time to find it, then make sure its condition can become false'],
          ['The Check Code button does nothing', 'An error in your code, or an infinite loop', 'Run the program first and read any error message'],
          ['You want to start an exercise again', 'Reset Code restores the starter code', 'More, then History, then Reset Code, then Save'],
          ['A unit test freezes after Check Code', 'User input inside a unit-test function, or no return value', 'Remove input the instructions did not ask for; make the function return'],
          ['A Karel exercise fails on style', 'The general Karel autograder checks syntax, indentation and naming', 'Read the exact Style message; it names the line or function'],
          ['Your HTML page shows No CodeHS.me Site Here', 'The program was blocked, or a link does not match a filename', 'Check whether your links and filenames match exactly'],
          ['The cursor is misaligned on a Chromebook', 'The browser font is not monospace', 'Set Chrome&rsquo;s fixed-width font to one with Mono in its name'],
          ['A lesson video will not play', 'The video host is blocked on the school network', 'Use the CodeHS-hosted version of the video, or the lesson slides']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reset Code, carefully',
          left: [
            'CodeHS says Reset Code is available for both teachers and students, and that after clicking it you must save the change with the Save button. It returns the exercise to its starter code, so anything you wrote is replaced.',
            'Before resetting, look through the History tab. CodeHS describes it as a list of every previous version of your program, which often lets you recover the last version that worked instead of starting from nothing.'
          ],
          rightH3: 'Ask your teacher inside CodeHS',
          right: [
            'CodeHS has a built-in way to message your teacher about a specific exercise: open the More tab in the code editor and choose Conversation. Replies appear in your Inbox, under the bell icon.',
            'Asking there, with the exercise open, is usually faster than an email, because your teacher can see the exact code you mean.'
          ] },
        { kind: 'source', html: 'Sources: CodeHS help center articles on <a class="ag-inline-link" href="https://help.codehs.com/en/articles/4454484-for-students-fixing-code-that-crashes-the-browser" rel="noopener" target="_blank">code that crashes the browser</a>, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/2708287-resetting-your-code" rel="noopener" target="_blank">resetting your code</a> and <a class="ag-inline-link" href="https://help.codehs.com/en/articles/4454503-for-students-sending-questions-to-your-teacher" rel="noopener" target="_blank">sending questions to your teacher</a>, read 17 October 2026. We are not connected with CodeHS.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'Debugging tools',
      h2: 'The debugging tools already inside the CodeHS editor',
      lede: 'CodeHS lists five tools for students in its debugging article, plus a separate step debugger for some program types. Most students use one or two of them. All of them help.',
      body: [
        { kind: 'table', caption: 'CodeHS editor tools for finding bugs, from the CodeHS help center (read 17 October 2026)', head: ['Tool', 'Where it is', 'What it is good for'], rows: [
          ['Docs tab', 'In the code editor', 'Examples and syntax of the concepts your course has covered so far'],
          ['History tab', 'Under More', 'Every earlier version of your program, to see what changed since it last worked'],
          ['Speed slider', 'In the editor', 'Running code slowly to see where it goes off track'],
          ['Next and Last buttons', 'Top of the editor', 'Running one line at a time to find the exact line at fault'],
          ['Test Code button', 'Red button in the editor', 'Seeing which autograder tests pass; a progress bar counts them'],
          ['Step debugger', 'Gear icon, then Debug Mode', 'Pausing a Python 3, Python 3 Graphics (tkinter) or Java (main) program and stepping through it']
        ] },
        { kind: 'code', mt: true, label: 'The loop that freezes the page, and its fix', lang: 'python', code: LOOP, note: 'Ours, run with Python 3.13.6 outside CodeHS. The first loop printed checking 0 without end until we stopped it; the second printed checking 0, 1 and 2, then done. CodeHS&rsquo;s own questions apply: in a while loop, will the condition ever become false?' },
        { kind: 'two', mt: true,
          leftH3: 'The step debugger, in five buttons',
          left: [
            'CodeHS describes five debugger functions: Run, which runs normally; Step, which moves to the next command even inside another file or library; Next, which moves to the next command in the current file; Continue, which runs until the end or a crash; and Stop.',
            'Most students only need Next. Press it, watch which line lights up, and check whether the variables hold what you expected at that moment.'
          ],
          rightH3: 'Commenting out, the low-tech tool',
          right: [
            'CodeHS recommends commenting out sections and re-running, so the skipped code tells you by elimination where an error lives. For infinite loops, it suggests testing sections with for or while loops first, then if and else statements, then the rest.',
            'It is a slow method, but it never fails, and it works in every language and every editor you will ever use.'
          ] },
        { kind: 'source', html: 'Sources: CodeHS help center, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/4454472-for-students-tips-on-debugging-code" rel="noopener" target="_blank">tips on debugging code</a> and <a class="ag-inline-link" href="https://help.codehs.com/en/articles/5142494-using-the-step-debugger" rel="noopener" target="_blank">using the step debugger</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'Unit tests and the Scratchpad',
      h2: 'Why a unit test fails when your code looks right',
      lede: 'Many CodeHS exercises in Python, JavaScript and Java are graded by unit tests. CodeHS explains how they differ from a normal program, and the difference trips up a lot of students.',
      body: [
        { kind: 'table', caption: 'The two files in a CodeHS unit-test exercise, from the CodeHS help center (read 17 October 2026)', head: ['', 'Unit Test file', 'Scratchpad file'], rows: [
          ['Graded?', 'Yes', 'No'],
          ['Can you Run it and print?', 'No: it can not Run or print to the console', 'Yes: it can Run and print to the console'],
          ['What belongs in it', 'A fully working function that works as expected', 'Experiments: different inputs, print statements, mistakes'],
          ['What CodeHS requires', 'A Unit Test requires a return statement and does not ask for user input', 'Anything that helps you test the function']
        ] },
        { kind: 'code', mt: true, label: 'A function that prints instead of returning', lang: 'python', code: PRINTS, note: 'Ours, a made-up example, not a CodeHS exercise. It looks right because 54.0 appears on screen, but the function hands nothing back, so result is None. A unit test checks what the function returns, and would see None.' },
        { kind: 'code', mt: true, label: 'The same function, returning its value', lang: 'python', code: RETURNS, note: 'Ours, run with Python 3.13.6. Testing 50, 0 and 19.99 in the Scratchpad is exactly the habit CodeHS recommends: try zero, try a value that is not a round number, then copy the working function into the Unit Test file.' },
        { kind: 'two', mt: true,
          leftH3: 'The CodeHS routine, step by step',
          left: [
            'CodeHS gives four steps: copy the starter code from the Unit Test into the Scratchpad; write and test your function in the Scratchpad, where you can run it; copy the working function back into the Unit Test file; and when it passes all the checks, submit it.',
            'If the program will not run, CodeHS points out that the green Run button only runs the Scratchpad, not the Unit Test file, and that you need to both define and call the function to see anything.'
          ],
          rightH3: 'Why the test does not show you the answer',
          right: [
            'Students sometimes ask why CodeHS will not just show what the test expected. The test is there to check your function, and the exercise is there to teach you to write it. That is the same reason we teach the idea of returning a value rather than supplying the function.',
            'A good question to ask yourself instead: if someone called my function with a value I did not try, what would it give back?'
          ] },
        { kind: 'source', html: 'Source: CodeHS help center, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/4836907-for-students-using-the-scratchpad-and-unit-test-files" rel="noopener" target="_blank">using the Scratchpad and Unit Test files</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'karel', tint: 'deep', eyebrow: 'Karel autograder messages',
      h2: 'What the Karel autograder is telling you',
      lede: 'Karel exercises use a general autograder that applies a set of tests to each program, from the final world to the way functions are named. CodeHS publishes the common messages. Here is what each one asks you to check.',
      body: [
        { kind: 'table', caption: 'Common Karel autograder messages, quoted from the CodeHS help center (read 17 October 2026)', head: ['Message', 'What it checks', 'What to look at'], rows: [
          ['Functionality: World _______', 'Karel&rsquo;s location, ball count and square colors at the end, against each Result World', 'Run it and compare your final world with the expected one'],
          ['Style: You are missing a semicolon on the following lines:', 'That every command ends with a semicolon', 'The line numbers listed'],
          ['Style: It looks like your indentation is off on line ___', 'Indentation', 'Code inside a function or loop should be indented one level'],
          ['Style: Some of your functions (FunctionName) do not start with a lowercase letter.', 'Function naming', 'Names like turnRight, not TurnRight'],
          ['Style: You have a function function1 nested inside another function function2.', 'Functions defined inside other functions', 'Define functions one after the other'],
          ['Style: You should not redefine turnRight()/turnAround() because SuperKarel already knows it.', 'Unneeded definitions in SuperKarel and UltraKarel', 'Delete your own turnRight or turnAround']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Functionality first, then style',
          left: [
            'A program can make Karel finish in the right place and still fail on style, and the other way round. Fix the Functionality test first, because changing what the program does may change which style messages appear.',
            'Then work through the Style messages in order. Each one quotes the exact name or line, so there is no guessing involved.'
          ],
          rightH3: 'Why style is graded at all',
          right: [
            'Naming functions in lowercase camelCase and indenting consistently are conventions every programmer follows, because code is read far more often than it is written. Karel is where CodeHS starts teaching that habit.',
            'Students who build it early find their later Java and Python code much easier to debug, because they can see the structure at a glance.'
          ] },
        { kind: 'source', html: 'Source: CodeHS help center, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/7996203-for-students-karel-autograder-messages" rel="noopener" target="_blank">Karel autograder messages</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'access', tint: 'tint', eyebrow: 'Login, devices and versions',
      h2: 'Login trouble, Chromebooks and which version of Java or Python you are on',
      lede: 'Some CodeHS problems have nothing to do with code. These are the ones CodeHS documents for signing in, school devices and language versions.',
      body: [
        { kind: 'ol', items: [
          '<b>Check the email address.</b> CodeHS&rsquo;s first tip is to make sure you are using your school-issued email, not a personal one.',
          '<b>Use your class&rsquo;s sign-in route.</b> If your class uses Google Classroom, use Log in with Google; if it uses Clever or Canvas, launch CodeHS from there instead of typing a password.',
          '<b>Wrong Google account?</b> Chrome may sign you in automatically with another account. Sign out at myaccount.google.com, or open an incognito window with Control + Shift + N on Windows or Command + Shift + N on a Mac (some schools disable incognito).',
          '<b>Still locked out?</b> Use Forgot Password, or ask your teacher, who can update your password.',
          '<b>Cursor not lining up with your text on a Chromebook?</b> In Chrome settings, under Appearance and Customize fonts, choose a fixed-width font with Mono in its name, and check the browser language is English (United States).',
          '<b>Not sure which language version you are on?</b> In any exercise or Sandbox program, open More, then About.'
        ] },
        { kind: 'table', mt: true, caption: 'Language versions on CodeHS, from the CodeHS help center (read 17 October 2026)', head: ['Language', 'What CodeHS says'], rows: [
          ['Python', 'Python 3.8, 3.11 and 3.12 are provided; Python 3, Python 3 Graphics (tkinter) and Pygame programs use 3.11'],
          ['Java', 'Most core courses currently use Java 8 (1.8); Java 21.05 is used in AP Computer Science A (Cortado), all new courses and all new Sandbox programs'],
          ['JavaScript', 'ES6, the version all browsers use'],
          ['Java, interactive', 'JShell, a Java read-eval-print loop, is supported']
        ] },
        { kind: 'p', mt: true, html: 'Versions matter when code from a textbook, a website or a home computer behaves differently on CodeHS. A newer Java feature will not compile in a course still on Java 8. Sources: CodeHS help center, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/4456742-for-students-resetting-your-passwords-and-login-troubleshooting" rel="noopener" target="_blank">login troubleshooting</a>, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/5678174-fixing-cursor-or-typing-bugs-in-the-ide-on-chromebooks" rel="noopener" target="_blank">Chromebook cursor fixes</a> and <a class="ag-inline-link" href="https://help.codehs.com/en/articles/5118034-versions-of-programming-languages-on-codehs" rel="noopener" target="_blank">language versions</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'About answers',
      h2: 'Why we do not give CodeHS answers, and what helps instead',
      lede: 'Search for CodeHS and the suggestions fill up with answer keys for every unit. We understand why: it is late, the test will not pass, and the deadline is tomorrow. Here is why we will not supply them, and what we do instead.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The work is graded', p: 'CodeHS exercises are graded by your teacher and the autograder. Copying an answer means handing in work that is not yours, and we will not take part in that.' },
          { h3: 'Schools set rules for this', p: 'CodeHS gives teachers settings such as copy and paste prevention, which in CodeHS Pro stops students in a section from pasting into the editor. Schools take this seriously.' },
          { h3: 'The next unit needs this one', p: 'CodeHS courses build step by step. An answer copied in unit 3 leaves a gap that the unit 5 exercise will find, usually at a worse moment.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a lesson with us looks like instead',
          left: [
            'The student shares their screen with the CodeHS exercise open. The teacher asks what the exercise wants, what the code does now, and what the autograder message says, and then teaches the idea that is missing, using a different example of our own.',
            'The student then goes back to their exercise and writes the code themselves. It takes longer than copying, and it is the only version that helps on the next exercise and on the test.'
          ],
          rightH3: 'AP students on CodeHS',
          right: [
            'CodeHS says its AP Computer Science A course (Cortado) runs Java 21.05. The AP exam itself is, in College Board&rsquo;s words, a fully digital exam taken in the Bluebook app, so CodeHS is where you practice, not where you sit the test.',
            'For exam-focused help alongside your school course, see our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> or <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CSP coaching</a>.'
          ] },
        { kind: 'source', html: 'Sources: CodeHS help center, <a class="ag-inline-link" href="https://help.codehs.com/en/articles/1108168-enabling-copy-paste-prevention" rel="noopener" target="_blank">copy and paste prevention</a>; College Board, <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">AP Computer Science A Exam</a>. Both read 17 October 2026. AP is a trademark of College Board, which is not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting unstuck',
    h2: 'Four stages of a CodeHS student',
    lede: 'Where students usually are when they first search for CodeHS help, and where they can get to.',
    table: { caption: 'Stages of working through CodeHS (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Stuck', 'Presses Check Code again and again, hoping for a different result'],
      ['2. Reading', 'Reads the autograder and error messages and goes to the line they name'],
      ['3. Testing', 'Uses the Scratchpad, the History tab and the debugger to check ideas'],
      ['4. Independent', 'Finishes exercises without help and can explain how the code works']
    ] },
    left: { h3: 'For parents', ps: [
      'A child who is stuck on CodeHS at 10 pm needs to understand one idea, not to be given one answer.',
      'Asking them to read the autograder message aloud is a surprisingly good first step, even if you do not code.'
    ] },
    right: { h3: 'For students', ps: [
      'Run before you check. The Run output often shows the problem the autograder is hinting at.',
      'Use History before Reset. Your last working version is usually still there.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that match what CodeHS students learn at school',
    lede: 'Live teaching with a regular teacher, as a batch or one to one, in the same languages CodeHS uses.',
    bands: [
      { num: 'I', h3: 'AP and exam courses', sub: 'High school', courses: [
        { code: 'COX / AP / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The Java AP course, live.' },
        { code: 'COX / AP / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'Exam topics and the Create task process.' },
        { code: 'COX / AP / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Java before or beside AP CSA.' }
      ] },
      { num: 'II', h3: 'Languages CodeHS teaches', sub: 'Teens', courses: [
        { code: 'COX / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Functions, lists and testing.' },
        { code: 'COX / LANG / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games.' },
        { code: 'COX / LANG / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'The web design units, in depth.' }
      ] },
      { num: 'III', h3: 'Younger coders', sub: 'Ages 6 to 12', courses: [
        { code: 'COX / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Events and loops in blocks.' },
        { code: 'COX / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Typed code with turtle art and games.' },
        { code: 'COX / KID / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to first real apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live help that fits around the school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoons and evenings in US time zones.' },
      { time: 'Weekends', l: 'A weekly slot away from the school rush.' },
      { time: '1-on-1', l: 'Booked around unit tests and deadlines.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same teacher, week after week.' },
      { h3: 'CodeHS on screen', p: 'Share the exercise; we teach the idea.' },
      { h3: 'Our own examples', p: 'Different problems that teach the same concept.' },
      { h3: 'No answer keys', p: 'Your CodeHS work stays yours.' },
      { h3: 'All fifty states', p: 'Live and online, wherever you are.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Projects from students who once worked through the same exercises. Browse more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Word-for-word reviews that families posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'CodeHS is provided by your school; our classes are separate. You pay for live teaching one month at a time, in US dollars, with nothing to sign for the semester and no cost for stopping at the end of any month.',
    free: ['A free first lesson', 'Bring the exercise you are stuck on', 'No card needed'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Choose your batch', 'Monthly payment'],
    one: ['A private teacher', 'At times that suit you', 'Built around your school course']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'CodeHS help: common questions',
    items: [
      { q: 'Why is my CodeHS not working?', a: 'CodeHS says that if the browser freezes or the Check Code button stops responding, the code may contain an error or an infinite loop. Run the program first, read any message, and check that every loop has a condition that can become false.' },
      { q: 'How do I reset a CodeHS assignment?', a: 'Open More, then History, in the editor and click Reset Code, which restores the starter code. CodeHS says to save afterwards with the Save button. Look through History first, because an earlier working version may still be there.' },
      { q: 'Why does my CodeHS unit test fail when my code prints the right answer?', a: 'A unit test checks what your function returns, not what it prints. CodeHS says a unit test requires a return statement and does not ask for user input. Test the function in the Scratchpad, then copy it back.' },
      { q: 'What is the CodeHS Scratchpad for?', a: 'It is an ungraded file in unit-test exercises where you can run code, print and try different inputs. The Unit Test file is the graded one and cannot be run or print to the console.' },
      { q: 'What does You are missing a semicolon mean in Karel?', a: 'It is a Karel autograder style message. CodeHS says the test checks that every command ends with a semicolon, and the message lists the lines where one is missing.' },
      { q: 'How do I use the CodeHS debugger?', a: 'Click the gear icon in the editor and turn on Debug Mode. CodeHS says the step debugger works for Python 3, Python 3 Graphics (tkinter) and Java programs with a main method, with Run, Step, Next, Continue and Stop.' },
      { q: 'I cannot log in to CodeHS. What should I do?', a: 'Use your school-issued email, not a personal one. If your class uses Google, Clever or Canvas, sign in through that. You can also use Forgot Password, or ask your teacher, who can update your password.' },
      { q: 'Which version of Java does CodeHS use?', a: 'CodeHS says most core courses use Java 8, while its AP Computer Science A course (Cortado), all new courses and new Sandbox programs use Java 21.05. You can check any exercise under More, then About.' },
      { q: 'Can you give me the CodeHS answers?', a: 'No. We do not provide CodeHS answers, answer keys or solutions to any graded assignment. We teach the concept with our own examples so you can solve the exercise yourself and explain your code.' },
      { q: 'When are your live classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do the classes cost?', a: 'The first lesson is free. After that, classes are paid one month at a time, and the fees section of this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who code at school.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A step-by-step method for any bug.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Live AP CSA preparation.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'Live AP CSP preparation.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first?', p: 'Choosing an order for the two courses.' },
      { href: '/blog/python-for-beginners', label: 'Python for beginners', p: 'The basics behind the Python units.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which CodeHS course you are taking and which idea keeps tripping you up. The teacher plans the first lesson around that concept, with examples of our own.',
    readFirst: 'If you would like to see a lesson first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through one; the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'We teach live over video, and our teachers are based in India, so there is no local branch to visit. WhatsApp is the fastest way for a US family to reach us.',
    formNote: 'A free first lesson. No payment details needed.'
  },

  footer: {
    cols: [
      { h4: 'School coding help', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/blog/python-for-beginners', label: 'Python for beginners' },
        { href: '/blog/javascript-basics', label: 'JavaScript basics' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'Return the value, then let the test check it'
  },

  personalityCss: `
.ag-root.ag-cox .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-cox .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-cox .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cox .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-cox .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-cox .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'CodeHS help center articles read raw on 17 October 2026: debugging tools (Docs, History under More, speed slider, Next and Last, Test Code); infinite loops crash the browser and stop Check Code; Reset Code under More, History, then Save; step debugger for Python 3, Python 3 Graphics (tkinter) and Java (main) with five functions; Unit Test versus Scratchpad, return value required, no user input; Karel autograder messages; login fixes incl. Control + Shift + N; Chromebook fixed-width font; language versions (Python 3.11, Java 8 and Java 21.05 in AP CSA Cortado); No CodeHS.me Site Here; copy and paste prevention. College Board: AP CSA fully digital in Bluebook.',
    localProject: 'add_tax() written two ways (printing returns None; returning gives 54.0, 0.0 and 21.59 for 50, 0 and 19.99) and a while loop that never ends next to its fix, all run with Python 3.13.6 outside CodeHS on 17 October 2026. Plus the symptom table, the CodeHS tool table and the answers policy. Lesson family: return values and testing.',
    requiredMentions: ['Reset Code', 'Python 3 Graphics (tkinter)', 'A Unit Test requires a return statement and does not ask for user input', 'Style: You are missing a semicolon on the following lines:', 'Style: You should not redefine turnRight()/turnAround() because SuperKarel already knows it.', 'No CodeHS.me Site Here', 'Control + Shift + N', 'AP Computer Science A (Cortado)', 'Java 21.05', 'Java 8 (1.8)', 'result is None', '21.59', 'English (United States)'],
    sources: [
      { claim: 'Debugging tools in the editor.', url: 'https://help.codehs.com/en/articles/4454472-for-students-tips-on-debugging-code' },
      { claim: 'Infinite loops crash the browser; Check Code not working.', url: 'https://help.codehs.com/en/articles/4454484-for-students-fixing-code-that-crashes-the-browser' },
      { claim: 'Reset Code under More, History; save afterwards.', url: 'https://help.codehs.com/en/articles/2708287-resetting-your-code' },
      { claim: 'Step debugger program types and functions.', url: 'https://help.codehs.com/en/articles/5142494-using-the-step-debugger' },
      { claim: 'Unit Test and Scratchpad files.', url: 'https://help.codehs.com/en/articles/4836907-for-students-using-the-scratchpad-and-unit-test-files' },
      { claim: 'Karel autograder messages.', url: 'https://help.codehs.com/en/articles/7996203-for-students-karel-autograder-messages' },
      { claim: 'Login troubleshooting.', url: 'https://help.codehs.com/en/articles/4456742-for-students-resetting-your-passwords-and-login-troubleshooting' },
      { claim: 'Language versions on CodeHS.', url: 'https://help.codehs.com/en/articles/5118034-versions-of-programming-languages-on-codehs' },
      { claim: 'No CodeHS.me Site Here error.', url: 'https://help.codehs.com/en/articles/14422583-troubleshooting-the-no-codehs-me-site-here-error' },
      { claim: 'Copy and paste prevention.', url: 'https://help.codehs.com/en/articles/1108168-enabling-copy-paste-prevention' }
    ],
    rejectedClaims: [
      'Any CodeHS exercise solution, unit answer or answer key: never printed; the examples are our own made-up functions.',
      'That teachers can see a student\'s History tab or detect copying: not stated in the articles read, so the page names only the documented copy and paste prevention setting.',
      'CodeHS pricing, the free versus Pro split for students, or how many schools use CodeHS: not taken from a primary source read for this page, not printed.',
      'That our Python examples ran inside CodeHS: they ran in Python 3.13.6 on our machine; CodeHS uses 3.11 for Python 3 programs.',
      'Any affiliation with CodeHS or College Board: none, and the page says so.'
    ]
  }
};
