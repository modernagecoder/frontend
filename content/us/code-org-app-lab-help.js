'use strict';
// Code.org App Lab help (ag- school-tools door; US cluster Phase T, row 140).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: official docs only; never answer keys or graded solutions; the AP CSP Create task is the student's).
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "code.org app lab", "code org app lab tutorial",
// "code org app lab documentation", "what language is code.org app lab", "how to use code org app lab", "how to add
// sound in code org app lab", "code org lesson 1 intro to app lab", "code.org error", "code.org not working".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/code-org-app-lab-help/):
//  - code.org/en-US/tools/app-lab: "App Lab is a programming environment where you can make simple apps right in the
//    browser. Design an app, code in JavaScript with either blocks or text, then share your app in seconds."; Ages 13 to
//    18; Level Beginner; Devices "Laptop, Chromebook, Tablet"; "All modern browsers"; Languages supported English;
//    curriculum: Intro to App Lab (Grades 8-12), Computer Science Principles (Grades 9-12, "Free year-long
//    curriculum"). Footer: "© CodeAI, 2026." and '"Code.org" is a former trademark of CodeAI.'
//  - studio.code.org/docs/ide/applab (rendered for any device): "App Lab works best on a desktop or laptop computer with
//    a mouse and keyboard."
//  - studio.code.org/docs/ide/applab/expressions/<name> (JSON embedded in each page): onEvent (event types click,
//    change, input, keydown...; "The UI element must be defined in your code before the matching onEvent() event
//    handler."; ignore the warning "event is defined but not called in your program"); element ids "Must begin with a
//    letter, contain no spaces, and may contain letters, digits, - and _."; setText; getText (returns a string);
//    getNumber ("getText() can also read textInput screen elements, but a number will be converted to a string and
//    arithmetic will not be possible with the result."); console.log ("The user of your app will not see the
//    console.log() messages."; "5" + "3" displays "53"); setScreen (default "screen1"); playSound ("The sound URL
//    requires the full http:// prefix.", or upload a file with Choose...); createRecord / readRecords (callbacks
//    asynchronous; "Do not put functions inside a loop that contain asynchronous code"; property names must match
//    column names, case sensitive; "Data is only accessible to the app that created the table."); timedLoop /
//    stopTimedLoop; setTimeout.
//  - studio.code.org/docs/concepts: patterns/debugging-variable-scope-functions ("Use var only once."; global versus
//    local; "it actually has two variables, one local, and one global, and they're both named count"); patterns/
//    counter-patterns-with-event; patterns/update-screen-pattern; javascript/naming-variables ("Labels cannot include
//    spaces", "cannot begin with a number", case-sensitive); app-lab/multi-screen-apps ("Only one screen can be visible
//    at a time").
//  - apcentral.collegeboard.org/courses/ap-computer-science-principles/exam: Create performance task submission
//    deadline "Fri, Apr 30, 2027" "11:59 PM ET"; end-of-course exam "Fri, May 14, 2027"; Section I "70 multiple-choice
//    questions | 120 minutes | 70% of score"; Section II "30% of score", "9 hours in-class"; Written Response 2(b)
//    "Errors and Testing" with "CRD-2.I.a: Identify the error." and "CRD-2.I.b: Correct the error."
//  - AP CSP Course and Exam Description (PDF linked from AP Central), Guidelines for Completing the Performance Task:
//    plagiarism "will receive a score of 0 on the Create performance task"; generative AI permitted "as supplementary
//    resources for understanding coding principles, assisting in code development, and debugging"; AI-generated code
//    must be acknowledged.
// Blocked: support.code.org returned HTTP 403 (not circumvented), so no help-desk article is quoted.
// Our own material, labelled on the page: the counter, text-versus-number and console examples, checked for logic in
// Node 22.16.0 with stand-in functions that mimic the documented behaviour (not App Lab itself), saved as
// ours-node-simulation.txt; the symptom table and the eight-step debugging routine.
// Lesson family: events and state (a handler runs on each event; state that must survive lives outside it).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RESETS = `// ours: a score that never climbs past 1
onEvent("addButton", "click", function() {
  var score = 0;            // a new local score, every click
  score = score + 1;
  setText("scoreLabel", score);
});

// our check, with stand-in functions in Node:
// click 1: scoreLabel shows 1
// click 2: scoreLabel shows 1
// click 3: scoreLabel shows 1`;

const COUNTS = `// ours: the counter pattern, variable created once
var score = 0;              // global: created once, at the top

onEvent("addButton", "click", function() {
  score = score + 1;        // no var here
  setText("scoreLabel", score);
});

// click 1: 1   click 2: 2   click 3: 3`;

const TEXTNUM = `// ours: the user types 10 into priceInput
var a = getText("priceInput") + 5;     // "10" + 5
console.log(a);                        // 105

var b = getNumber("priceInput") + 5;   // 10 + 5
console.log(b);                        // 15`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'APP LAB HELP', blurb: 'Code.org App Lab help from the official App Lab documentation: why buttons do nothing, why scores reset, text versus numbers, screens, sound and data, and what AP CSP students must do themselves.' },
  slug: 'code-org-app-lab-help',
  code: 'coal',
  accent: '#144785',
  accentRationale: 'Code.org App Lab help, US: a steady app-builder blue (#144785) from the US allocation table, apart from the indigo Java page, contrast 8.73 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Code.org App Lab help',
  title: 'Code.org App Lab Help: Fix Events, Variables and Screens',
  description: 'Code.org App Lab help from the official docs: why a button does nothing, why a score resets, getText versus getNumber, screens, sounds and data, and AP CSP rules.',
  ogDescription: 'App Lab help built from the official documentation: the onEvent rules, the var-inside-a-handler bug, text versus numbers, multi-screen apps, sound and data storage.',
  twitterDescription: 'App Lab help: events, variables, screens, sound and data, from the official docs.',
  pageName: 'Code.org App Lab help',
  webPageDescription: 'A guide for US middle and high school students to fixing common Code.org App Lab problems, built from the App Lab documentation, with original examples and the AP CSP Create task rules.',
  courseDescription: 'Live online JavaScript and AP Computer Science Principles classes for US students who build apps in App Lab, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Code.org App Lab help',
  navLinks: [
    { href: '#basics', label: 'What App Lab is' },
    { href: '#symptoms', label: 'Symptoms' },
    { href: '#variables', label: 'Variables' },
    { href: '#steps', label: 'Debugging' },
    { href: '#apcsp', label: 'AP CSP' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 8 to 12 &middot; Code.org App Lab',
  h1: 'Code.org App Lab help: fixing events, variables and screens',
  lede: 'App Lab is where a lot of American students build their first real app: a quiz, a pet poll, a game with a timer, often as part of AP Computer Science Principles. It is friendly, it runs in the browser, and it lets you switch between blocks and JavaScript text. It also has a few rules that are easy to miss, and when one is broken the app does not crash with a clear message. A button simply does nothing, a score stays stuck at 1, or a total of 10 plus 5 comes out as 105. Every one of these has an explanation in the official App Lab documentation, and this page walks through them with small examples of our own.',
  secondaryCta: { href: '#symptoms', label: 'Find your symptom' },
  wa: 'Hello Modern Age Coders, my student in the US builds apps in Code.org App Lab and is stuck. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; JavaScript and AP CSP',
  spec: [
    ['For', 'Grades 8 to 12'],
    ['Tool', 'App Lab, in the browser'],
    ['Language', 'JavaScript, blocks or text'],
    ['Docs read', '17 October 2026'],
    ['Exam link', 'AP Computer Science Principles'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most App Lab bugs break one of four documented rules: an onEvent must come after the element it listens to, with an id typed exactly; variables that must keep their value are created once with var at the top, never inside onEvent; getText returns text, so use getNumber for arithmetic; and data callbacks finish later, so never put them in a loop.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for students building apps in App Lab',
    lede: 'Each is taught live, starting from the app your student already has open.',
    items: [
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'COAL / 01', title: 'AP Computer Science Principles', note: 'The exam, the big ideas and how to plan a Create task that is your own.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'COAL / 02', title: 'JavaScript for teens', note: 'The language under App Lab&rsquo;s blocks, for real websites and games.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'COAL / 03', title: 'App development for teens', note: 'The next step after App Lab: apps for real phones.' }
    ]
  },

  sections: [
    {
      id: 'basics', tint: 'tint', eyebrow: 'What App Lab is',
      h2: 'App Lab at a glance, from its own pages',
      lede: 'Before fixing anything, it helps to know what App Lab is designed for and what it expects of the device you use. This is what its makers publish.',
      body: [
        { kind: 'table', caption: 'App Lab facts, from code.org/en-US/tools/app-lab and the App Lab documentation (read 17 October 2026)', head: ['Point', 'What the page says'], rows: [
          ['What it is', 'App Lab &ldquo;is a programming environment where you can make simple apps right in the browser.&rdquo;'],
          ['Language', 'JavaScript, written &ldquo;with either blocks or text&rdquo;'],
          ['Ages listed', '13 to 18, level Beginner'],
          ['Devices listed', 'Laptop, Chromebook, Tablet; all modern browsers'],
          ['Device advice in the editor', '&ldquo;App Lab works best on a desktop or laptop computer with a mouse and keyboard.&rdquo;'],
          ['Courses that use it', 'Intro to App Lab (grades 8 to 12) and Computer Science Principles (grades 9 to 12)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Code.org or CodeAI?',
          left: [
            'If the site looks different from what your teacher showed you, that is not your imagination. The footer of the App Lab page, read on 17 October 2026, says the organization is now CodeAI and that "Code.org" is a former trademark of CodeAI.',
            'App Lab itself still lives at studio.code.org, your projects are where they were, and the documentation pages still carry the familiar function names. We use the name Code.org here because that is what students search for.'
          ],
          rightH3: 'What language is App Lab?',
          right: [
            'It is JavaScript. The blocks are a visual way of writing the same JavaScript, and you can switch between the two views. That is why the skills transfer: an onEvent block is the same idea as an event listener on any website.',
            'It also explains some surprises. JavaScript happily adds text and numbers together by joining them, which is the cause of one of the commonest App Lab bugs, covered below.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://code.org/en-US/tools/app-lab" rel="noopener" target="_blank">App Lab tool page</a> and <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab" rel="noopener" target="_blank">App Lab documentation</a>, read 17 October 2026. Code.org&rsquo;s support site returned an access error to our request, so no help-desk article is quoted here. We are not connected with Code.org or CodeAI.' }
      ]
    },
    {
      id: 'symptoms', tint: 'deep', eyebrow: 'Find your symptom',
      h2: 'What your app is doing, and the documented reason',
      lede: 'App Lab rarely stops with a red error for these bugs. It just behaves strangely. Match the behavior to a row, then read the rule behind it.',
      body: [
        { kind: 'table', caption: 'App Lab symptoms and the rule behind each, from the App Lab documentation (read 17 October 2026)', head: ['What you see', 'The rule the docs give', 'What to check'], rows: [
          ['Clicking a button does nothing', 'The UI element must be defined in your code before the matching onEvent() event handler', 'The element exists first, and the id in onEvent matches it exactly'],
          ['An id is rejected or never matches', 'An id must begin with a letter, contain no spaces, and may contain letters, digits, - and _', 'Rename ids like my button or 2ndScreen'],
          ['A score or counter stays at 1', 'Create variables once, at the top, outside any function or onEvent', 'Remove var from inside the handler'],
          ['10 plus 5 shows 105', 'getText returns a string; with a number, arithmetic will not be possible', 'Use getNumber for numeric input'],
          ['A screen&rsquo;s buttons do nothing after switching screens', 'Only one screen can be visible at a time, and each has its own elements', 'Call setScreen with the right screen id; the default is screen1'],
          ['A sound will not play', 'The sound URL requires the full http:// prefix', 'Use a complete URL, or upload the file and pick it with Choose'],
          ['Data from a table arrives late or out of order', 'createRecord and readRecords have callbacks and will not finish immediately', 'Use the data inside the callback; never put these calls in a loop'],
          ['A warning that event is defined but not called', 'The documentation says you can ignore it', 'Nothing to fix']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where things go in the code',
          left: [
            'The onEvent documentation suggests an order for every program: screen elements at the top, event handlers in the middle, other code and functions at the end. Following it prevents the first two rows of the table almost by itself.',
            'If you build the screen in Design Mode, the elements already exist when the code runs, and the id dropdown in the onEvent block lists them, which removes typing mistakes.'
          ],
          rightH3: 'Tables are per app',
          right: [
            'The createRecord documentation adds a detail that confuses students sharing projects: data is only accessible to the app that created the table. A second app, even one you made yourself, cannot read it. To look at what your app has stored, the docs point to the View data button.',
            'Column names matter too. The docs say the object property names must match the table&rsquo;s column names, and that both are case sensitive, so score and Score are different columns.'
          ] },
        { kind: 'source', html: 'Sources: App Lab documentation for <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/onEvent" rel="noopener" target="_blank">onEvent</a>, <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/getNumber" rel="noopener" target="_blank">getNumber</a>, <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/setScreen" rel="noopener" target="_blank">setScreen</a>, <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/playSound" rel="noopener" target="_blank">playSound</a> and <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/createRecord" rel="noopener" target="_blank">createRecord</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'variables', tint: 'tint', eyebrow: 'Variables and events',
      h2: 'Why your score keeps resetting: var inside onEvent',
      lede: 'This is the App Lab bug teachers see most, and the documentation has a page devoted to it. Here is the bug in a few lines, then the fix.',
      body: [
        { kind: 'code', label: 'The bug: a new variable on every click', lang: 'javascript', code: RESETS, note: 'Ours. We checked the logic in Node 22 with stand-in versions of onEvent and setText that behave as the documentation describes; this was not a run inside App Lab. Each click creates a brand-new local score set to 0, adds 1, and throws it away.' },
        { kind: 'code', mt: true, label: 'The fix: create it once, outside', lang: 'javascript', code: COUNTS, note: 'Ours, same check. This is the shape the documentation calls the counter pattern with an event: the variable gets its first value once, and each event updates it.' },
        { kind: 'two', mt: true,
          leftH3: 'What the documentation says',
          left: [
            'The App Lab concept page on variable scope gives three rules: use var only once, create your variables at the top of your program, and create them outside any function or onEvent block.',
            'It describes the broken version exactly: although it looks like one variable, there are actually two, one local and one global, both named count, and changing one has no effect on the other.'
          ],
          rightH3: 'The habit that prevents it',
          right: [
            'The documentation&rsquo;s updateScreen pattern helps here too: keep the app&rsquo;s state in global variables, have every event handler change those variables, then call one function, updateScreen, that redraws everything from them.',
            'Students who adopt that shape write handlers that are three lines long and almost never have this bug again.'
          ] },
        { kind: 'code', mt: true, label: 'Text that looks like a number', lang: 'javascript', code: TEXTNUM, note: 'Ours, same check in Node. The getNumber documentation warns that getText can read a text input too, but a number will be converted to a string and arithmetic will not be possible with the result. The console.log page gives the same lesson: &quot;5&quot; + &quot;3&quot; displays 53.' },
        { kind: 'source', html: 'Sources: App Lab concepts, <a class="ag-inline-link" href="https://studio.code.org/docs/concepts/patterns/debugging-variable-scope-functions/" rel="noopener" target="_blank">Debugging Variable Scope: Functions</a>, <a class="ag-inline-link" href="https://studio.code.org/docs/concepts/patterns/counter-patterns-with-event/" rel="noopener" target="_blank">Counter Patterns with Event</a> and <a class="ag-inline-link" href="https://studio.code.org/docs/concepts/patterns/update-screen-pattern/" rel="noopener" target="_blank">The updateScreen() Pattern</a>; <a class="ag-inline-link" href="https://studio.code.org/docs/ide/applab/expressions/console.log" rel="noopener" target="_blank">console.log</a>. All read 17 October 2026.' }
      ]
    },
    {
      id: 'steps', tint: 'deep', eyebrow: 'Debugging routine',
      h2: 'An eight-step routine for an App Lab app that misbehaves',
      lede: 'Our order, built on the documentation&rsquo;s rules. It moves from the cheapest checks to the ones that take longer.',
      body: [
        { kind: 'ol', items: [
          '<b>Say what should happen.</b> One sentence: &ldquo;When I click Next, the question should change.&rdquo; If you cannot say it, the bug may be in the plan, not the code.',
          '<b>Check the ids.</b> Compare the id in Design Mode with the one in your code, letter by letter. The docs say ids are a letter first, no spaces, then letters, digits, hyphens or underscores.',
          '<b>Check the order.</b> Every element must exist before its onEvent. Elements at the top, handlers in the middle, functions at the end.',
          '<b>Add console.log lines.</b> The documentation calls console.log a debugging tool, and notes the user of your app will not see its messages. Log a short message when each handler runs.',
          '<b>Print the variables you care about.</b> Log the value right after you change it. A value that is always the same points at var inside a handler.',
          '<b>Check the type.</b> If a sum looks like two numbers stuck together, you used getText where you needed getNumber.',
          '<b>Check the screen.</b> If buttons stop working after a screen change, confirm setScreen used the right id and that the element belongs to the screen now showing.',
          '<b>Check the timing.</b> For data and timers, move the code that uses the result inside the callback. The docs warn that a loop will not wait for a callback, or for a timer, to finish.'
        ] },
        { kind: 'table', mt: true, caption: 'App Lab variable naming rules, from the documentation (read 17 October 2026)', head: ['Rule', 'Breaks it', 'Follows it'], rows: [
          ['Labels cannot include spaces', 'width of rectangle', 'widthOfRectangle'],
          ['Labels cannot begin with a number', '2morrow', 'tomorrow2'],
          ['Labels are case-sensitive', 'size and Size used as one variable', 'size used everywhere'],
          ['Be consistent', 'Mixing camelCase and underscores', 'One style throughout']
        ] },
        { kind: 'p', mt: true, html: 'The same routine works in any language with events, which is why it is the first thing we teach in <a class="ag-inline-link" href="/blog/javascript-basics">JavaScript basics</a>. For a wider method that also covers languages without events, see <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>.' }
      ]
    },
    {
      id: 'apcsp', tint: 'tint', eyebrow: 'AP Computer Science Principles',
      h2: 'App Lab and the AP CSP Create performance task',
      lede: 'Many AP Computer Science Principles classes build the Create performance task in App Lab. College Board&rsquo;s rules for that task are strict, and every App Lab student in an AP class should know them.',
      body: [
        { kind: 'table', caption: 'AP CSP exam and Create task facts, from AP Central and the AP CSP Course and Exam Description (read 17 October 2026)', head: ['Point', 'What College Board says'], rows: [
          ['Create task deadline', 'Fri, Apr 30, 2027, 11:59 PM ET, submitted as final in the AP Digital Portfolio'],
          ['End-of-course exam', 'Fri, May 14, 2027, in the Bluebook app'],
          ['Section I', '70 multiple-choice questions, 120 minutes, 70% of score'],
          ['Section II', 'The Create task and two written responses, 30% of score; 9 hours of in-class time for the task'],
          ['Errors on the exam', 'Written Response 2(b), Errors and Testing, includes CRD-2.I.a: Identify the error, and CRD-2.I.b: Correct the error'],
          ['Plagiarism', 'Using code or media created by someone else or with generative AI tools, without acknowledgment, scores 0 on the Create task, including the written responses'],
          ['Generative AI', 'Permitted as supplementary resources for understanding coding principles, assisting in code development, and debugging; the student must review, understand and be able to explain any such code']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why debugging your own App Lab code matters for the exam',
          left: [
            'On exam day, students answer written questions about the code in their own Personalized Project Reference, including identifying and correcting an error. A student who fixed their own App Lab bugs during the 9 hours can answer those from experience.',
            'A student whose code was fixed by someone else has nothing to draw on. That is the practical reason, beyond the rules, to do your own debugging.'
          ],
          rightH3: 'What we will and will not do',
          right: [
            'We never write, fix or review a student&rsquo;s Create task code, and we do not provide answers to any graded App Lab assignment. In class we teach the concepts with separate examples of our own, like the ones on this page, so the work stays the student&rsquo;s.',
            'We also do not point under-18 students to general AI chatbots whose terms are for adults. If a school allows AI help under College Board&rsquo;s policy, that is between the student, the teacher and the tool&rsquo;s own age rules.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam" rel="noopener" target="_blank">AP Computer Science Principles Exam</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-computer-science-principles-course-and-exam-description.pdf" rel="noopener" target="_blank">AP CSP Course and Exam Description</a> (Guidelines for Completing the Performance Task), read 17 October 2026. AP is a trademark of College Board, which is not connected with us. For course choices, see <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP or AP CSA first</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From blocks to builder',
    h2: 'Four stages of an App Lab student',
    lede: 'Where students usually are when they first get stuck, and where they can head next.',
    table: { caption: 'Stages of building in App Lab (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Designing', 'Places buttons and labels in Design Mode, little code yet'],
      ['2. Reacting', 'Writes onEvent handlers that change text on screen'],
      ['3. Remembering', 'Keeps state in global variables and updates the screen from them'],
      ['4. Structuring', 'Uses functions, lists and stored data, and debugs with console.log']
    ] },
    left: { h3: 'For parents', ps: [
      'An app that misbehaves without an error message is genuinely harder to fix than one that crashes. Being stuck here is normal.',
      'Ask your child what the app should do and what it does instead. That gap is where the bug is.'
    ] },
    right: { h3: 'For students', ps: [
      'Put var at the top, once. It fixes more App Lab bugs than anything else.',
      'Log first, guess later. One console.log line beats ten minutes of staring.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who like making apps',
    lede: 'Live, with one regular teacher, and in a group or one to one: whichever suits the student.',
    bands: [
      { num: 'I', h3: 'Web and apps', sub: 'Teens', courses: [
        { code: 'COAL / WEB / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The language beneath App Lab.' },
        { code: 'COAL / WEB / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Real phone apps with React Native.' },
        { code: 'COAL / WEB / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Pages that look the way you designed.' }
      ] },
      { num: 'II', h3: 'AP and beyond', sub: 'High school', courses: [
        { code: 'COAL / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The course App Lab often belongs to.' },
        { code: 'COAL / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The Java AP course that follows.' },
        { code: 'COAL / AP / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second text language.' }
      ] },
      { num: 'III', h3: 'Starting younger', sub: 'Ages 6 to 12', courses: [
        { code: 'COAL / KID / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Apps from blocks, before text.' },
        { code: 'COAL / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Events and variables in games.' },
        { code: 'COAL / KID / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'First websites, step by step.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons around a US school schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school slots across Eastern to Pacific time.' },
      { time: 'Weekends', l: 'For students who prefer a quiet weekly hour.' },
      { time: '1-on-1', l: 'Planned around project and exam dates.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'One person who knows your progress.' },
      { h3: 'Screen sharing', p: 'Your App Lab project, seen live.' },
      { h3: 'Concepts first', p: 'We teach with examples of our own.' },
      { h3: 'Create task stays yours', p: 'We never touch graded code.' },
      { h3: 'Online, any state', p: 'From home, wherever you live.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or just one student.' }
    ]
  },

  projectsH2: 'Apps and games by our students',
  projectsLede: 'Built by learners who began with buttons and events too. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Families in their own words, exactly as posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'App Lab is free to use, and our lessons are a separate choice. Teaching is paid one month at a time, with the fee shown in US dollars, no term contract, and nothing to pay for stopping once a month is done.',
    free: ['A free first lesson', 'Show us the app you are building', 'No card details'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Choose your batch', 'Month by month'],
    one: ['Private lessons', 'At times you pick', 'Shaped around your class']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'App Lab help: common questions',
    items: [
      { q: 'Why does my App Lab button not do anything?', a: 'The App Lab documentation says the UI element must be defined in your code before its onEvent handler, and the id must match exactly. Check the id letter by letter against Design Mode, and make sure the handler comes after the element.' },
      { q: 'Why does my App Lab score stay at 1?', a: 'Usually because var score = 0 is inside the onEvent handler, which creates a new variable on every click. The App Lab documentation says to use var only once, at the top of the program, outside any function or onEvent.' },
      { q: 'Why does App Lab add 10 and 5 to get 105?', a: 'getText returns text, so the plus sign joins the two values together. The documentation says arithmetic is not possible with that result. Use getNumber to read numbers from a text input or slider.' },
      { q: 'What language does Code.org App Lab use?', a: 'JavaScript. App Lab lets you write it with either blocks or text and switch between them, according to the App Lab tool page.' },
      { q: 'How do I add sound in App Lab?', a: 'Use playSound with the address of an MP3 file. The documentation says the sound URL needs the full http:// prefix, or you can upload your own file and choose it, in which case the file name is enough.' },
      { q: 'How do I switch screens in App Lab?', a: 'Use setScreen with the id of the screen you want. The documentation says the default screen id is screen1, and that only one screen can be visible at a time.' },
      { q: 'Does App Lab work on a Chromebook or tablet?', a: 'The App Lab tool page lists laptop, Chromebook and tablet. The editor itself recommends a desktop or laptop computer with a mouse and keyboard for building apps.' },
      { q: 'Is Code.org now called CodeAI?', a: 'The footer of the App Lab page, read on 17 October 2026, says the organization is CodeAI and that Code.org is a former trademark of CodeAI. App Lab is still at studio.code.org.' },
      { q: 'Can you help me with my AP CSP Create task in App Lab?', a: 'We teach the concepts the task needs with our own examples, but we never write, fix or review Create task code. College Board says plagiarism, including unacknowledged AI-generated code, scores 0 on the Create task.' },
      { q: 'When are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do the classes cost?', a: 'The first lesson is free. After that, lessons are paid month by month, and the fees section on this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who build apps at school.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All of our pages for American students.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'Live preparation for AP Computer Science Principles.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first?', p: 'Which AP course to take first.' },
      { href: '/blog/javascript-basics', label: 'JavaScript basics', p: 'The language App Lab is built on.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A general method for any bug.' },
      { href: '/blog/html-css-javascript-project-ideas', label: 'Web project ideas', p: 'What to build after App Lab.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what your app should do and what it does instead. The teacher picks the idea behind the gap and teaches it with an example, so you can go back and fix your own app.',
    readFirst: 'To find out what a lesson is like, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; you can also browse <a class="ag-inline-link" href="/courses">every course</a> with its syllabus.',
    note: 'We are an online school with teachers in India, so every lesson is a live video class rather than a visit to a local center. WhatsApp is how US families usually reach us fastest.',
    formNote: 'The first lesson is free; we do not take card details.'
  },

  footer: {
    cols: [
      { h4: 'App building', links: [
        { href: '/blog/javascript-basics', label: 'JavaScript basics' },
        { href: '/blog/html-css-javascript-project-ideas', label: 'Web project ideas' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'The handler runs on each click; the state lives outside it'
  },

  personalityCss: `
.ag-root.ag-coal .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-coal .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-coal .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-coal .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-coal .ag-band-head h3 { letter-spacing: -0.003em; }
.ag-root.ag-coal .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'App Lab tool page and documentation read raw on 17 October 2026: definition, JavaScript with blocks or text, ages 13 to 18, devices, desktop advice; onEvent ordering rule and event types; id rules; getText versus getNumber; console.log not visible to users and "5" + "3"; setScreen default screen1; playSound http:// prefix; createRecord and readRecords asynchronous, no loops, case-sensitive columns, data per app; variable scope concept page (use var only once); counter and updateScreen patterns; naming rules. Footer: Code.org a former trademark of CodeAI. College Board: AP CSP Create task deadline Apr 30, 2027 11:59 PM ET, exam May 14, 2027, 70 questions 120 minutes 70%, Create 30% and 9 hours, Written Response 2(b), CED plagiarism and generative AI policy.',
    localProject: 'Three App Lab code examples of our own (var inside onEvent shows 1, 1, 1; the counter pattern shows 1, 2, 3; getText + 5 gives 105 while getNumber + 5 gives 15), checked for logic in Node 22.16.0 with stand-in functions, not inside App Lab; an eight-row symptom table, an eight-step debugging routine and a naming-rules table. Lesson family: events and state.',
    requiredMentions: ['is a programming environment where you can make simple apps right in the browser.', 'App Lab works best on a desktop or laptop computer with a mouse and keyboard.', 'is a former trademark of CodeAI', 'The UI element must be defined in your code before the matching onEvent() event handler', 'must begin with a letter, contain no spaces, and may contain letters, digits, - and _', 'use var only once', 'screen1', 'The sound URL requires the full http:// prefix', 'Fri, Apr 30, 2027, 11:59 PM ET', 'CRD-2.I.a: Identify the error', 'scores 0 on the Create task', 'getNumber'],
    sources: [
      { claim: 'What App Lab is, ages, devices, curriculum; CodeAI footer.', url: 'https://code.org/en-US/tools/app-lab' },
      { claim: 'App Lab works best on a desktop or laptop computer.', url: 'https://studio.code.org/docs/ide/applab' },
      { claim: 'onEvent ordering rule, event types, warning to ignore, id rules.', url: 'https://studio.code.org/docs/ide/applab/expressions/onEvent' },
      { claim: 'getText versus getNumber.', url: 'https://studio.code.org/docs/ide/applab/expressions/getNumber' },
      { claim: 'Variable scope: use var only once, global versus local.', url: 'https://studio.code.org/docs/concepts/patterns/debugging-variable-scope-functions/' },
      { claim: 'Create task deadline, exam date and format, Written Response 2(b).', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam' },
      { claim: 'Create task plagiarism and generative AI policy.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-principles-course-and-exam-description.pdf' }
    ],
    rejectedClaims: [
      'Any Code.org support-site article: support.code.org returned HTTP 403 and was not circumvented.',
      'That our examples ran inside App Lab: they were checked for logic in Node with stand-in functions, and the page says so.',
      'Any Create task code, answers to Code.org lessons, or unit answers: none written; examples are our own.',
      'Recommending any generative AI tool to under-18 students: not done; the page reports College Board\'s policy only.',
      'Reasons for the CodeAI name change: not stated in the pages read, so not explained.',
      'Any affiliation with Code.org, CodeAI or College Board: none, and the page says so.'
    ]
  }
};
