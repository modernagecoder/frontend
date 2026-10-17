'use strict';
// JavaScript for kids (ag- subject door; US cluster Phase 2, row 31).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_us.tsv): javascript for kids / online / free / book / pdf / reddit; coding for kids
// javascript; javascript coding classes for kids; learn to code html css and javascript.
// Sources, read raw with curl on 17 October 2026 from developer.mozilla.org (copies in
// keyword-research-2026-09/us/src/javascript-for-kids/):
//  - Web/JavaScript: "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language";
//    "Do not confuse JavaScript with the Java programming language"; standards ECMA-262 and ECMA-402.
//  - Learn: What is JavaScript?: "the third layer of the layer cake of standard web technologies" (HTML, CSS, JS).
//  - JavaScript technologies overview: standardized "by the ECMA TC39 committee"; editions "approved and published as a
//    standard by the ECMA General Assembly on a yearly basis"; "ES6 is synonymous with ES2015".
//  - What are browser developer tools: "Windows: Ctrl + Shift + I or F12"; "macOS: ⌘ + ⌥ + I"; the Console "reports the
//    errors encountered".
//  - Math.random: "greater than or equal to 0 and less than 1"; "does not provide cryptographically secure random
//    numbers". Math.floor: "always rounds down". let: "re-assignable, block-scoped local variables".
//  - document.querySelector: returns the first match, "If no matches are found, null is returned."
//  - EventTarget.addEventListener: "sets up a function that will be called whenever the specified event is delivered".
//  - keydown "fired when a key is pressed"; keyup "fired when a key is released"; KeyboardEvent.key values ArrowLeft,
//    ArrowRight. Node.textContent.
//  - apstudents.collegeboard.org AP CS A: "a subset of the Java programming language" (for the Not Java note).
//  - Canvas basic usage: without width and height a canvas is "300 pixels wide and 150 pixels high"; getContext("2d").
//    fillRect draws a filled rectangle; clearRect erases pixels.
//  - requestAnimationFrame: calls "will generally match the display refresh rate. The most common refresh rate is 60hz",
//    "though 75hz, 120hz, and 144hz are also widely used"; the callback must call requestAnimationFrame() again.
// MDN's own beginner tutorial is a number guessing game; our programs are deliberately different.
// Our own material, labelled: the three programs (documented APIs only, tested by the reader), the age table, the
// 12-week plan and the arithmetic (3 x 60 = 180 pixels a second; 300 - 20 = 280; 280 / 180 = about 1.6 seconds;
// 3 x 120 = 360 at 120 Hz).
// Lesson family: the game loop (read input, update state, draw, repeat).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CONSOLE = `// Paste these lines into the browser Console (ours)
let name = "Sam";
console.log("Hi " + name + "!");

let roll = Math.floor(Math.random() * 6) + 1;   // 1 to 6
console.log("You rolled a " + roll);`;

const CLAP = `<!-- clap.html: a button that counts (ours) -->
<button id="clap">Clap</button>
<p id="count">Claps: 0</p>

<script>
  let claps = 0;
  const button = document.querySelector("#clap");
  const label = document.querySelector("#count");

  button.addEventListener("click", function () {
    claps = claps + 1;
    label.textContent = "Claps: " + claps;
  });
</script>`;

const STEER = `<!-- steer.html: move a square with the arrow keys (ours) -->
<canvas id="game" width="300" height="150"></canvas>

<script>
  const canvas = document.querySelector("#game");
  const ctx = canvas.getContext("2d");
  let x = 140;     // left edge of the square
  let speed = 0;   // pixels per frame

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") speed = 3;
    if (event.key === "ArrowLeft") speed = -3;
  });
  document.addEventListener("keyup", function () {
    speed = 0;
  });

  function frame() {
    x = x + speed;
    if (x < 0) x = 0;
    if (x > 280) x = 280;  // 300 minus the 20 px square
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 65, 20, 20);
    requestAnimationFrame(frame);  // ask for the next frame
  }
  requestAnimationFrame(frame);
</script>`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'JAVASCRIPT FOR KIDS', blurb: 'JavaScript for kids: what it is, the right age to start, the browser Console, and three small programs that end in a moving game.' },
  slug: 'javascript-for-kids',
  code: 'jk',
  accent: '#3E5294',
  accentRationale: 'JavaScript for kids, US: a periwinkle-leaning blue #3E5294 from the US allocation sheet (row 31), softer than the C++ steel blue and separate from the App Inventor indigo',
  pageType: 'market',
  market: US,
  routeLabel: 'JavaScript for kids',
  title: 'JavaScript for Kids: Where to Start, With Three Real Programs',
  description: 'JavaScript for kids: what it is, the right age to start, how to open the browser Console, and three short programs, from a dice roll to a square you can steer.',
  ogDescription: 'Every web browser already runs JavaScript. An age guide for US parents, the Console in two keystrokes, and three tiny programs that grow into a real game loop.',
  twitterDescription: 'JavaScript for kids: an age guide, the Console, and three real programs to try today.',
  pageName: 'JavaScript for Kids',
  webPageDescription: 'A guide for US parents and children to starting JavaScript: how it fits with HTML and CSS, when a child is ready, and three programs that use only documented browser features.',
  courseDescription: 'Live online web and JavaScript classes for US children and teens, from first web pages to browser games, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'JavaScript for kids',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#age', label: 'Right age' },
    { href: '#console', label: 'The Console' },
    { href: '#programs', label: 'Three programs' },
    { href: '#loop', label: 'The game loop' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 10 to 18 &middot; JavaScript',
  h1: 'JavaScript for kids: a real start',
  lede: 'JavaScript is the language already running inside every web page your child visits. That makes it unusual among first languages: there is nothing to install, the results show up in a browser tab, and a finished project can be sent to a grandparent as a link. It also means the language is huge, and a child who jumps in without a plan can drown in frameworks and copied snippets. This page shows a calmer route for American families: what JavaScript is, at what age it tends to click, how to open the tool every browser hides, and three short programs that build toward a game your child can steer.',
  secondaryCta: { href: '#programs', label: 'See the three programs' },
  wa: 'Hello Modern Age Coders, my child in the US would like to learn JavaScript. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Nothing to install',
  spec: [
    ['For', 'Ages 10 to 18'],
    ['Language', 'JavaScript (ECMAScript)'],
    ['Needs', 'Any modern browser'],
    ['Works on', 'Windows, Mac, Chromebook'],
    ['Goes with', 'HTML and CSS'],
    ['Format', 'Batch or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'JavaScript is the programming language of web pages, and kids can start it in any browser with nothing to install. In our experience children are often ready around 10 to 12, after a little HTML and CSS; teens can start directly. Open the browser&rsquo;s Console (Ctrl + Shift + I or F12 on Windows) and type a first line of code today.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that teach JavaScript properly',
    lede: 'Each is live, and each ends with something your child can open in a browser and share.',
    items: [
      { course: 'kids-ai-web-development-course', code: 'JK / 01', title: 'Web development for kids', note: 'Ages 9 to 12. HTML and CSS first, then JavaScript sparks.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'JK / 02', title: 'JavaScript for teens', note: 'Ages 13 to 18. Interactive sites, canvas games, real APIs.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'JK / 03', title: 'HTML and CSS for beginners', note: 'Ages 10 and up. The two layers JavaScript sits on.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What JavaScript is, in a sentence a 10-year-old can repeat',
      lede: 'MDN, the web documentation run by Mozilla, calls JavaScript the third layer of the layer cake of standard web technologies. The other two layers are HTML and CSS.',
      body: [
        { kind: 'table', caption: 'The three layers of a web page, as MDN describes them (read 17 October 2026)', head: ['Layer', 'What it does', 'A button, in each layer'], rows: [
          ['HTML', 'Structure and meaning: headings, paragraphs, images', 'The button exists and has a label'],
          ['CSS', 'Style rules: colors, fonts, layout', 'The button is rounded and blue'],
          ['JavaScript', 'Behavior: updating content, animation, reacting to the user', 'Clicking the button does something']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Not Java',
          left: [
            'MDN is blunt on this point: do not confuse JavaScript with the Java programming language. The two have very different syntax and uses. American students often meet Java later in AP Computer Science A, so it helps to know early that the names are a coincidence of history, not a family tie.',
            'MDN describes JavaScript as a lightweight interpreted (or just-in-time compiled) language. For a child, that means you write a line and the browser runs it immediately.'
          ],
          rightH3: 'Who keeps it up to date',
          right: [
            'The core language is standardized by the ECMA TC39 committee under the name ECMAScript, and MDN says new editions are approved and published every year. ES6 and ES2015 are two names for the same edition.',
            'For learners, the yearly cycle matters less than the basics underneath it. Variables, events, functions and loops look the same in every recent edition, and those are what a child spends the first year on.'
          ] },
        { kind: 'source', html: 'Sources: MDN pages <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript" rel="noopener" target="_blank">What is JavaScript?</a>, <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener" target="_blank">JavaScript</a> and the JavaScript technologies overview, read 17 October 2026. We are not connected with Mozilla or Ecma International.' }
      ]
    },
    {
      id: 'age', tint: 'deep', eyebrow: 'The right age',
      h2: 'When is a child ready for JavaScript?',
      lede: 'Parents searching for JavaScript for kids are often choosing between it, Scratch and Python. The answer depends on age and on what the child wants to make. This is the guide we use.',
      body: [
        { kind: 'table', caption: 'Where children usually begin, by age (our guide from classes we teach)', head: ['Age', 'Usual start', 'Where JavaScript fits'], rows: [
          ['6 to 9', 'Scratch or other block coding', 'Later; typing and punctuation slow young children down'],
          ['10 to 12', 'HTML and CSS, then JavaScript', 'A good fit for a child who wants their own website or browser game'],
          ['13 to 15', 'JavaScript or Python', 'Either works; JavaScript if the goal is the web or games in a browser'],
          ['16 to 18', 'JavaScript alongside a second language', 'The base for web apps, hackathons and portfolio projects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'JavaScript or Python first?',
          left: [
            'Python reads more like plain English and has fewer symbols, which is why many children start there. JavaScript has more brackets and braces, but its results are immediately visual: a page changes color, a square moves.',
            'Our rule of thumb: a child who keeps asking how a website or online game works should start with JavaScript; a child more curious about puzzles, data or AI should start with Python. Our post on <a class="ag-inline-link" href="/blog/python-vs-javascript-which-to-learn-first">Python or JavaScript first</a> covers this in more depth.'
          ],
          rightH3: 'Books, PDFs and free tutorials',
          right: [
            'Many families search for a JavaScript for kids book or a free PDF. Books suit a reader who likes working alone; the hard moment is the first bug a child cannot explain, because a book cannot answer back.',
            'Free documentation is excellent once a child can read it. MDN&rsquo;s own beginner course assumes an understanding of HTML and the fundamentals of CSS, which is why we teach those two first.'
          ] }
      ]
    },
    {
      id: 'console', tint: 'tint', eyebrow: 'The hidden tool',
      h2: 'Open the Console: the place to type your first JavaScript',
      lede: 'Every desktop browser includes developer tools, and inside them is the JavaScript Console, which MDN calls an incredibly useful tool for debugging. It runs lines of code against the open page and reports errors.',
      body: [
        { kind: 'table', caption: 'Opening developer tools, from MDN (read 17 October 2026)', head: ['Computer', 'Keys', 'Then'], rows: [
          ['Windows', 'Ctrl + Shift + I, or F12', 'Choose the Console tab'],
          ['Mac', 'Cmd + Option + I', 'Choose the Console tab'],
          ['Any', 'Right-click the page, choose Inspect', 'Then the Console tab']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Open a blank tab</b> so that no website&rsquo;s own code gets in the way.',
          '<b>Open the Console</b> with the keys above and click inside it.',
          '<b>Type 2 + 2</b> and press Enter. The answer appears underneath. That is JavaScript running.',
          '<b>Paste the first program below</b> and press Enter. Run it a few times to see the dice change.',
          '<b>Make a mistake on purpose.</b> Leave off a closing quote and read the red error. Learning to read that message calmly is the most useful skill in the first month.'
        ] },
        { kind: 'p', mt: true, html: 'On a school-managed Chromebook, some tools may be restricted by the district. If the Console will not open, a home computer works the same way, and the HTML programs below also run in a free online editor.' }
      ]
    },
    {
      id: 'programs', tint: 'deep', eyebrow: 'Real code',
      h2: 'Three JavaScript programs, from one line to a moving square',
      lede: 'These are the first three programs in our beginner plan. We wrote them using only features documented on MDN. The first runs in the Console; save the other two as .html files and open them in a browser.',
      body: [
        { kind: 'code', label: 'Program 1 &middot; a greeting and a dice roll', lang: 'javascript', code: CONSOLE, note: 'MDN says Math.random returns a number greater than or equal to 0 and less than 1. Multiplying by 6 and rounding down with Math.floor gives 0 to 5; adding 1 gives 1 to 6.' },
        { kind: 'code', label: 'Program 2 &middot; a button that counts', lang: 'html', code: CLAP, note: 'querySelector finds the button and the paragraph; addEventListener sets up a function that runs on every click; textContent replaces the paragraph&rsquo;s text. If querySelector finds nothing, it returns null, the usual cause of a beginner&rsquo;s first big red error.' },
        { kind: 'code', label: 'Program 3 &middot; steer a square', lang: 'html', code: STEER, note: 'keydown fires when a key is pressed and keyup when it is released; event.key tells you which key, such as ArrowRight. The frame function moves, clears, draws and then asks for the next frame.' },
        { kind: 'two', mt: true,
          leftH3: 'What each program adds',
          left: [
            'Program 1 is variables and arithmetic. Program 2 adds events: code that waits for the user. Program 3 adds a loop that never stops, which is how every browser game works.',
            'Children who build these three in order understand the shape of an interactive program before they ever meet a framework. Frameworks then make sense instead of feeling like magic.'
          ],
          rightH3: 'One thing Math.random is not for',
          right: [
            'MDN warns that Math.random does not provide cryptographically secure random numbers and should not be used for anything related to security. For a dice game that is fine.',
            'We mention it in class on purpose. It is a child&rsquo;s first glimpse that the same tool can be safe in one job and wrong in another, a lesson that matters later in cybersecurity and in life.'
          ] }
      ]
    },
    {
      id: 'loop', tint: 'tint', eyebrow: 'The game loop',
      h2: 'Why the square moves faster on some screens',
      lede: 'Program 3 contains a real bug that professional game programmers know well. Finding it is a good test of whether a student understands the loop.',
      body: [
        { kind: 'table', caption: 'How far the square moves (our arithmetic, using MDN&rsquo;s refresh rates)', head: ['Screen refresh rate', 'Frames per second', 'Pixels per second at 3 per frame', 'Time to cross 280 pixels'], numCols: [1, 2], rows: [
          ['60 Hz, the most common', '60', '3 x 60 = 180', '280 / 180 = about 1.6 seconds'],
          ['120 Hz', '120', '3 x 120 = 360', 'about 0.8 seconds'],
          ['144 Hz', '144', '3 x 144 = 432', 'about 0.65 seconds']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The cause',
          left: [
            'MDN explains that requestAnimationFrame calls the frame function at a rate that generally matches the display refresh rate. It names 60 Hz as the most common and says 75, 120 and 144 Hz are also widely used.',
            'Our program moves 3 pixels per frame, not per second, so a faster screen means a faster square. On a 120 Hz screen it moves twice as fast as on a 60 Hz one.'
          ],
          rightH3: 'The fix, in the next lesson',
          right: [
            'The fix is to measure time instead of counting frames: move by speed multiplied by the time since the last frame. MDN documents a timestamp passed to the callback, which makes that measurement easy.',
            'We let students discover the bug before we explain it. A teen who watches their own game misbehave on a friend&rsquo;s laptop sees for themselves why time matters in animation.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'Twelve weeks from first line to first browser game',
      lede: 'Our plan for a 10 to 13 year old who already knows a little HTML. Teenagers in our JavaScript course cover it faster and go further.',
      body: [
        { kind: 'table', caption: 'A 12-week first JavaScript term (ours)', head: ['Weeks', 'What gets built', 'The idea'], rows: [
          ['1 to 2', 'Console experiments, a dice and a coin', 'Values, variables, Math'],
          ['3 to 4', 'A clap counter, then a color switcher', 'Events and changing the page'],
          ['5 to 6', 'A quiz with a score', 'Conditions, arrays, functions'],
          ['7 to 8', 'A drawing app on a canvas', 'Coordinates and shapes'],
          ['9 to 10', 'The steerable square, then walls and a goal', 'The game loop and collisions'],
          ['11 to 12', 'A finished mini game, shared as a link', 'Fixing the frame-rate bug, testing on other devices']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 9 to 12', p: 'Our kids web course: HTML and CSS for the first months, then JavaScript once a child can build a page by hand.' },
          { h3: 'Ages 13 to 15', p: 'Straight into JavaScript in our teen course, with HTML and CSS taught alongside rather than before.' },
          { h3: 'Ages 16 to 18', p: 'The same course at a faster pace, aiming at a portfolio project, a hackathon entry or the Congressional App Challenge.' }
        ] },
        { kind: 'p', mt: true, html: 'For project ideas after the first term, see <a class="ag-inline-link" href="/blog/html-css-javascript-project-ideas">HTML, CSS and JavaScript project ideas</a>; high school students can read our guide to <a class="ag-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a> or the <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From pages to programs',
    h2: 'Four stages of a young JavaScript programmer',
    lede: 'The stages our lessons move through, and what moves a learner on.',
    table: { caption: 'Stages of a JavaScript learner (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Page builder', 'Writes HTML and CSS; copies small scripts without changing them'],
      ['2. Tinkerer', 'Changes numbers and text in a script to see what happens'],
      ['3. Programmer', 'Writes events and loops from an idea, like the three programs above'],
      ['4. Debugger', 'Uses the Console to find a bug and explains why it happened']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to send you the link to something they made. Sharing is half the motivation with JavaScript.',
      'Be wary of tutorials that start with a framework. A child who cannot yet write a click handler by hand is not ready for one.'
    ] },
    right: { h3: 'For kids', ps: [
      'Keep the Console open while you code. Red messages are clues, not failures.',
      'Change one number at a time and predict what will happen before you run it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine courses for kids who want to build for the web',
    lede: 'Taught live, with a teacher who knows your child&rsquo;s projects, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First web skills', sub: 'Ages 8 to 12', courses: [
        { code: 'JK / WEB / 01', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Pages by hand, then scripts.' },
        { code: 'JK / WEB / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Structure and style.' },
        { code: 'JK / WEB / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic before syntax.' }
      ] },
      { num: 'II', h3: 'Teen developers', sub: 'Ages 13 to 18', courses: [
        { code: 'JK / TEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive sites and games.' },
        { code: 'JK / TEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack for teens', blurb: 'Front end and back end.' },
        { code: 'JK / TEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The second language.' }
      ] },
      { num: 'III', h3: 'Projects and events', sub: 'Teens', courses: [
        { code: 'JK / PRJ / 01', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build fast, in a team.' },
        { code: 'JK / PRJ / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI help, understood.' },
        { code: 'JK / PRJ / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'From web to phone.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'JavaScript classes on your family&rsquo;s timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Eastern, Central, Mountain or Pacific time.' },
      { time: 'Weekends', l: 'Weekend mornings, if weekdays are full.' },
      { time: '1-on-1', l: 'Your child&rsquo;s own plan, at hours you pick.' }
    ],
    cells: [
      { h3: 'A browser and nothing else', p: 'No installs, even on a Chromebook.' },
      { h3: 'Code written, not pasted', p: 'Students type and explain every line.' },
      { h3: 'Console on screen', p: 'Errors read together, then fixed.' },
      { h3: 'A steady teacher', p: 'The same person through the term.' },
      { h3: 'Projects to share', p: 'Each month ends with a link to send.' },
      { h3: 'Two formats', p: 'A batch of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Web projects our students have built',
  projectsLede: 'Sites and games from learners who started with programs like these. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parent reviews from Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'JavaScript and every browser are free. The teaching is charged monthly in US dollars; nothing is signed for a whole school year, and you may stop after any month.',
    free: ['A free first lesson', 'Bring a page they made', 'No card required'],
    group: ['Fifteen to twenty learners', 'A teacher who stays', 'Choose a batch time', 'Month by month'],
    one: ['Just your child and a teacher', 'Hours that suit you', 'Their own project plan']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'JavaScript for kids: questions',
    items: [
      { q: 'Can kids learn JavaScript?', a: 'Yes. In our experience children are often ready around 10 to 12, especially after a little HTML and CSS, and teenagers can start directly. Younger children usually do better with Scratch first.' },
      { q: 'What age should a child start JavaScript?', a: 'In our experience, around 10 to 12 for a child who reads and types comfortably. From 13, JavaScript works well as a first language, particularly for a teen interested in websites or browser games.' },
      { q: 'Is JavaScript the same as Java?', a: 'No. MDN says plainly that JavaScript should not be confused with the Java programming language; the two have very different syntax and uses. American students often meet Java later in AP Computer Science A.' },
      { q: 'Does my child need to install anything to learn JavaScript?', a: 'No. Every modern browser runs JavaScript. A child can type code into the browser Console, or save a simple .html file and open it in the browser.' },
      { q: 'How do you open the JavaScript Console?', a: 'On Windows press Ctrl + Shift + I or F12; on a Mac press Cmd + Option + I. Then choose the Console tab. You can also right-click the page and choose Inspect.' },
      { q: 'Should my child learn Python or JavaScript first?', a: 'JavaScript if they are drawn to websites and browser games, Python if they are drawn to puzzles, data or AI. Both are good first typed languages, and many of our students learn both.' },
      { q: 'Can kids make games with JavaScript?', a: 'Yes. With the canvas element and requestAnimationFrame, a child can build browser games that run on any computer and can be shared as a link. The third program on this page is the start of one.' },
      { q: 'Is JavaScript for kids free to learn?', a: 'The language, the browser and MDN\'s documentation are free. Families pay only if they want a teacher; our first lesson is free too.' },
      { q: 'Is HTML and CSS needed before JavaScript?', a: 'It helps. MDN\'s beginner JavaScript course assumes an understanding of HTML and the fundamentals of CSS, because JavaScript mostly works by changing a web page those two describe.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are JavaScript classes?', a: 'The first lesson is free. After that you pay for one month of teaching at a time, and the fees section of this page shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'More for US families with a budding web developer.',
    items: [
      { href: '/blog/python-vs-javascript-which-to-learn-first', label: 'Python or JavaScript first?', p: 'A longer comparison.' },
      { href: '/blog/javascript-basics', label: 'JavaScript basics', p: 'Our blog primer for beginners.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The index of our US pages.' },
      { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds', p: 'What fits at this age.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Where teen web projects get tested.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Habits for reading errors.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us whether your child has made a web page before. The teacher opens a blank page with them and has something moving on screen before the lesson ends.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> before booking, and the full JavaScript syllabus is on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Every class is live online with teachers who work from India, which is why families in any US state can join. WhatsApp is the quickest way to ask us anything.',
    formNote: 'The first lesson is free; no card details are collected.'
  },

  footer: {
    cols: [
      { h4: 'Web and JavaScript', links: [
        { href: '/blog/javascript-basics', label: 'JavaScript basics' },
        { href: '/blog/html-css-javascript-project-ideas', label: 'Web project ideas' },
        { href: '/blog/python-vs-javascript-which-to-learn-first', label: 'Python or JavaScript' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' }
      ] }
    ],
    bottomRight: 'Read input, update, draw, repeat'
  },

  personalityCss: `
.ag-root.ag-jk .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-jk .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-jk .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-jk .ag-table caption { text-align: left; }
.ag-root.ag-jk .ag-steps li { line-height: 1.55; }
.ag-root.ag-jk .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  dossier: {
    curriculumAuthority: 'MDN Web Docs (developer.mozilla.org), read raw on 17 October 2026: JavaScript overview, What is JavaScript, JavaScript technologies overview, browser developer tools, Math.random, Math.floor, let, querySelector, addEventListener, keydown, keyup, KeyboardEvent.key, textContent, canvas basic usage, fillRect, clearRect and requestAnimationFrame. Facts: third layer after HTML and CSS; not Java; ECMA TC39, yearly editions, ES6 = ES2015; Ctrl + Shift + I or F12, Cmd + Option + I; Math.random from 0 up to but not including 1, not cryptographically secure; querySelector returns null on no match; canvas default 300 by 150 pixels; requestAnimationFrame follows the refresh rate, 60 Hz most common, 120 and 144 Hz widely used.',
    localProject: 'Three JavaScript programs (ours, documented APIs only): a Console greeting and dice roll, a click counter with querySelector and addEventListener, and a canvas square steered with arrow keys in a requestAnimationFrame loop. Frame-rate arithmetic: 3 x 60 = 180 px per second, 280 / 180 = about 1.6 seconds, 3 x 120 = 360. An age table and a 12-week plan. Lesson family: the game loop.',
    requiredMentions: ['third layer of the layer cake', 'ECMA TC39 committee', 'ES6 and ES2015', 'Ctrl + Shift + I, or F12', 'Cmd + Option + I', 'does not provide cryptographically secure random numbers', 'Math.floor(Math.random() * 6) + 1', 'requestAnimationFrame(frame)', '3 x 60 = 180', '280 / 180 = about 1.6 seconds', 'returns null', 'ArrowRight'],
    sources: [
      { claim: 'JavaScript definition, not Java, ECMA-262.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { claim: 'Third layer of HTML, CSS and JavaScript; beginner prerequisites.', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript' },
      { claim: 'TC39, yearly editions, ES6 = ES2015.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview' },
      { claim: 'Developer tools shortcuts and the Console.', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools' },
      { claim: 'Math.random range and security warning.', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random' },
      { claim: 'requestAnimationFrame and refresh rates.', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame' },
      { claim: 'Canvas default size and the 2D context.', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage' },
      { claim: 'querySelector returns null when nothing matches.', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector' },
      { claim: 'AP Computer Science A uses a subset of the Java programming language.', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a' }
    ],
    rejectedClaims: [
      'Named authors of JavaScript books for children: not named, under the cluster rule on naming people.',
      'That school Chromebooks block developer tools: varies by district and has no single source, so the page only says some tools may be restricted.',
      'That we ran the three programs on this page: they use documented MDN features and the reader runs them.',
      'Any affiliation with Mozilla or Ecma International: none, and the page says so.'
    ]
  }
};
