'use strict';
// App development classes for teens in Germany (ag- English door, Germany cluster P2 row DE042), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Audience: teens 13 to 18 (younger teens may start with blocks).
// Spine: a real app is data plus a screen worked out from it; publishing has adult rules, building does not.
// Sources (read raw 3 Nov 2026; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/app-development-classes-for-teens-germany/):
//  - Apple Developer Program License Agreement 3.1: "You are of the legal age of majority in the jurisdiction in which You
//    reside (at least 18 years of age in many countries or regions)".
//  - Apple Developer Program, enroll page: "If you're under the age of majority in your region, your parent/guardian can
//    enroll with their Apple Account and share their account with you."; organisations "must have a D-U-N-S Number".
//  - React Native docs (intro-react-native-components): "React Native is an open source framework for building Android and
//    iOS applications using React and the app platform's native capabilities. With React Native, you use JavaScript to
//    access your platform's APIs".
//  - Expo docs, set up your environment: "Expo Go is a playground for students and learners to try Expo quickly"; options
//    "Android device iOS device Android Emulator iOS Simulator".
//  - MIT App Inventor, about us: "With over 24 million learners from 195 countries collectively creating over 100 million
//    apps".
//  - GitHub Terms of Service: "A User must be at least 13 years of age."
//  - GI Informatik-Monitor 2026/27 (FACTS 92): six Länder without Informatik compulsory for all (Berlin, Brandenburg,
//    Bremen, Hessen, Rheinland-Pfalz, Sachsen-Anhalt).
//  - Not found in raw HTML: Google Play Console age rule (help page renders by script; Developer Distribution Agreement
//    raw text has no age clause we could grep). Not stated.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own examples (scratchpad de/w/G7/adt/planner.js, undo.js, node): planner prints "{ open: [ '2026-11-02 Informatik:
// loop task', '2026-11-05 Mathe: Aufgabe 4' ], late: 1 }" (shown on the page as the two printed lines below); undo
// prints "doneShortcut -> after undo, task done? true" and "doneCopy -> after undo, task done? false".
// Lesson family: never change state in place; copy it, and the screen and undo stay right.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '// The heart of a homework-planner app: every change to the data goes through one function (our own example)',
  'function reducer(state, action) {',
  '  switch (action.type) {',
  '    case \'add\':',
  '      return { ...state, tasks: [...state.tasks, { id: state.nextId, subject: action.subject, due: action.due, done: false }], nextId: state.nextId + 1 };',
  '    case \'done\':',
  '      return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, done: true } : t) };',
  '    case \'remove\':',
  '      return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };',
  '    default:',
  '      return state;',
  '  }',
  '}',
  '',
  '// What the screen shows is worked out from the state, never stored separately',
  'function screen(state, today) {',
  '  const open = state.tasks.filter(t => !t.done).sort((a, b) => a.due.localeCompare(b.due));',
  '  const late = open.filter(t => t.due < today).length;',
  '  return { open: open.map(t => t.due + \' \' + t.subject), late };',
  '}',
  '',
  'let state = { tasks: [], nextId: 1 };',
  'const actions = [',
  '  { type: \'add\', subject: \'Mathe: Aufgabe 4\', due: \'2026-11-05\' },',
  '  { type: \'add\', subject: \'Englisch: essay\', due: \'2026-11-04\' },',
  '  { type: \'add\', subject: \'Informatik: loop task\', due: \'2026-11-02\' },',
  '  { type: \'done\', id: 2 },',
  '  { type: \'remove\', id: 99 },',
  '];',
  'for (const a of actions) state = reducer(state, a);',
  'console.log(screen(state, \'2026-11-03\'));'
].join('\n');

const V2 = [
  '// Undo keeps every earlier state. A shortcut that edits a task in place breaks it (our own example)',
  'function doneShortcut(state, id) {',
  '  const task = state.tasks.find(t => t.id === id);',
  '  task.done = true;               // changes the old state too',
  '  return { ...state };',
  '}',
  'function doneCopy(state, id) {',
  '  return { ...state, tasks: state.tasks.map(t => t.id === id ? { ...t, done: true } : t) };',
  '}',
  '',
  'for (const done of [doneShortcut, doneCopy]) {',
  '  const start = { tasks: [{ id: 1, subject: \'Mathe: Aufgabe 4\', done: false }] };',
  '  const history = [start, done(start, 1)];',
  '  const undone = history[0];       // the user presses undo',
  '  console.log(done.name, \'-> after undo, task done?\', undone.tasks[0].done);',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'App development classes for teens' },
  slug: 'app-development-classes-for-teens-germany',
  code: 'adt',
  accent: '#3D5A21',
  accentRationale: 'App development for teens in Germany: a moss green #3D5A21, yellower than the Roblox and hub greens and far from the olive of the vibe coding page; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'App development classes for teens in Germany',
  title: 'App Development Classes for Teens in Germany, in English',
  description: 'Live online app development classes in English for teens in Germany: React Native and JavaScript, apps on a real phone, and Apple rules for publishing under 18.',
  ogDescription: 'Teenagers in Germany build real phone apps in JavaScript and React Native, taught live in English, and learn the idea that keeps every app correct: change the data in one place only.',
  twitterDescription: 'App development for teens in Germany, live in English: React Native, JavaScript and apps on a real phone.',
  pageName: 'App Development Classes for Teens in Germany',
  webPageDescription: 'A guide for teenagers in Germany and their parents on learning to build phone apps: what tools a teen can use, what Apple\'s own terms say about publishing under 18, how React Native and Expo work, and an original homework-planner example in JavaScript.',
  courseDescription: 'Live online app development classes in English for teens in Germany aged 13 to 18: JavaScript, React Native and Expo, apps tested on a real phone, from first screen to a finished project, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'App development for teens',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#tools', label: 'Tools' },
    { href: '#publish', label: 'Publishing' },
    { href: '#planner', label: 'Project' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; App development &middot; Ages 13 to 18',
  h1: 'App development classes for teens in Germany',
  lede: 'Almost every teenager has an idea for an app: a better homework planner, a club timetable, a game for the bus. Turning the idea into something that runs on a real phone is more achievable than most think, and it teaches a surprising amount of computer science along the way. This page explains which tools a teen in Germany can start with, what the app stores\' owners say about publishing before 18, and the single idea that keeps an app from falling apart.',
  secondaryCta: { href: '#planner', label: 'See the planner app' },
  wa: 'Hello Modern Age Coders, I am a teenager in Germany (or a parent of one) and would like a free first class in app development, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; apps that run on the learner\'s own phone',
  spec: [
    ['Ages', '13 to 18'],
    ['Language of code', 'JavaScript'],
    ['Framework', 'React Native with Expo'],
    ['Teaching', 'Live, in English'],
    ['Format', 'Group or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'What this is',
  capsule: 'App development classes for teens in Germany at Modern Age Coders teach teenagers aged 13 to 18 to build real phone apps, live online in English. Teens write JavaScript, build screens with React Native and test every app on their own phone through Expo, from a first button to a finished project. One mentor keeps to each teen\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Choose a start',
    h2: 'Which app course should a teenager start with?',
    lede: 'Most teens start with the first course. Younger teens new to coding may start with blocks; those who want the web as well as phones can begin with JavaScript.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'ADT / 01', title: 'App Development for Teens', note: 'The main course. React Native and JavaScript, from first screen to an app with data, navigation and a polished design.' },
      { course: 'block-coding-app-development-masterclass', code: 'ADT / 02', title: 'App Making with Blocks', note: 'For a younger teen with no coding yet. Real apps built from blocks, to learn events and data before typing code.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'ADT / 03', title: 'JavaScript for Teens', note: 'The language under React Native, learnt on interactive websites and browser games first.' }
    ]
  },

  sections: [
    {
      id: 'tools',
      eyebrow: 'The tools',
      h2: 'How do teenagers build a real phone app?',
      lede: 'With the same tools many professional teams use, set up so that a phone the teen already owns becomes the test device.',
      body: [
        { kind: 'two',
          leftH3: 'React Native and JavaScript',
          left: [
            'The React Native documentation describes it as an open source framework for building Android and iOS applications using React and the platform\'s native capabilities, with JavaScript used to reach the phone\'s features and describe the screens.',
            'One codebase, two kinds of phone. For a teen, that means the app runs on their own phone and a friend\'s, whichever system each one has.'
          ],
          rightH3: 'Expo and Expo Go',
          right: [
            'Expo is a set of tools around React Native. Its documentation calls Expo Go a playground for students and learners to try Expo quickly, and lists four ways to run an app while building it: an Android device, an iOS device, an Android emulator or the iOS simulator.',
            'In practice the teen scans a code with their phone and sees their app appear, then changes a line and sees it update. That moment is usually when app development stops being abstract.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Three ways into app building and who each one suits (our summary)', head: ['Route', 'How apps are made', 'Suits'], rows: [
          ['Blocks, for example MIT App Inventor', 'Drag-and-drop blocks for screens and logic', 'Younger teens new to coding'],
          ['React Native with Expo', 'JavaScript code, one app for Android and iOS', 'Most teens from about 13'],
          ['Swift or Kotlin', 'The native language of one platform', 'Older learners aiming at one kind of phone']
        ] },
        { kind: 'source', html: 'Sources: React Native documentation (core components and native components); Expo documentation (set up your environment); MIT App Inventor, about us, which reports over 24 million learners from 195 countries creating over 100 million apps. Read on 3 November 2026. The table itself is our own.' }
      ]
    },
    {
      id: 'publish',
      tint: 'tint',
      eyebrow: 'Publishing',
      h2: 'Can a teenager publish an app on the App Store?',
      lede: 'Building an app has no age limit. Publishing one under your own name is a contract with Apple or Google, and that is where age matters.',
      body: [
        { kind: 'table', numCols: [], caption: 'What Apple\'s own pages say about age and publishing', head: ['Apple page', 'What it says'], rows: [
          ['Apple Developer Program License Agreement, section 3.1', 'The developer certifies that they are of the legal age of majority where they live, at least 18 in many countries or regions'],
          ['Apple Developer Program, enrolment page', 'Under the age of majority, a parent or guardian can enrol with their own Apple Account and share it with the young developer'],
          ['Apple Developer Program, enrolment page', 'An organisation that enrols needs a D-U-N-S Number to verify its identity']
        ] },
        { kind: 'source', html: 'Sources: Apple Developer Program License Agreement and developer.apple.com/programs/enroll, read on 3 November 2026. We could not read Google Play\'s own age rule in the raw text of its pages, so we state none; check the Play Console help before planning an Android release.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means in our classes',
          left: [
            'Teens build, run and share their apps on their own and their family\'s phones through Expo throughout the course. No developer account is needed for that.',
            'Publishing in a store is optional and is the family\'s decision. Where a teen wants to, the mentor explains the steps, and Apple\'s own route for under-18s goes through a parent\'s account.'
          ],
          rightH3: 'Code hosting',
          right: [
            'Many teens like to keep their code on GitHub. GitHub\'s terms say a user must be at least 13 years of age, so from 13 a teen can have an account of their own there.',
            'We never create accounts for learners. Accounts and contracts stay with the teen and their parents, under each provider\'s rules.'
          ] }
      ]
    },
    {
      id: 'planner',
      eyebrow: 'Worked example, ours',
      h2: 'What is the one idea that keeps an app working?',
      lede: 'Keep the data in one place, change it only through one function, and work out the screen from the data every time. Here it is in a homework planner, in plain JavaScript that runs without a phone.',
      body: [
        { kind: 'two',
          leftH3: 'The app',
          left: [
            'A planner holds tasks: a subject, a due date and whether it is done. The user adds tasks, ticks them off and deletes them. The screen shows what is still open, in date order, and how many tasks are late.',
            'React Native apps are often built exactly like this: the data is called state, and each change is an action handled by a function called a reducer.'
          ],
          rightH3: 'Why one function',
          right: [
            'If every button changes the data in its own way, bugs hide in the gaps: a task ticked off in one list but not in another, a counter that drifts. If every change goes through one function, there is one place to read, test and fix.',
            'The screen is never stored. It is calculated from the data, so it can never disagree with it.'
          ] },
        { kind: 'code', label: 'Version 1: the planner\'s reducer and screen, run with Node.js', lang: 'JavaScript', code: V1, note: 'It prints the open tasks <code>\'2026-11-02 Informatik: loop task\', \'2026-11-05 Mathe: Aufgabe 4\'</code> and <code>late: 1</code>.' },
        { kind: 'p', mt: true, html: 'Read the actions against the result. Three tasks were added. The English essay, task 2, was ticked off, so it disappears from the open list. The request to remove task 99 does nothing, because there is no task 99, and the app does not crash. The Informatik task was due on 2 November 2026, before the test date of 3 November, so it is counted as late and sorted to the top. All of that was checked without a phone, a simulator or a single tap. That is the second gift of this design: logic you can test in a second.' },
        { kind: 'code', label: 'Version 2: an undo button, a shortcut, and why the shortcut fails', lang: 'JavaScript', code: V2, note: 'It prints <code>doneShortcut -> after undo, task done? true</code> and <code>doneCopy -> after undo, task done? false</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Two ways to tick off a task, tested with undo (our example, Node.js, 3 November 2026)', head: ['Function', 'How it marks the task done', 'After pressing undo'], rows: [
          ['doneShortcut', 'Changes the existing task object in place', 'Still shows the task as done: undo is broken'],
          ['doneCopy', 'Makes a new list with a new, updated task', 'Shows the task as open again: undo works']
        ] },
        { kind: 'p', mt: true, html: 'The shortcut looks harmless and saves a line. But the old state in the history and the new state share the same task object, so changing one changes both, and undo has nothing to go back to. In a real app the same mistake shows up as a screen that fails to refresh, because React compares old and new state and sees no difference. Teens who understand this one example understand why React Native code is written the way it is, rather than copying patterns they cannot explain.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running Version 1, write down which tasks will be open and how many will be late.',
          '<strong>Add an action.</strong> Write an "undone" action that sets a task back to open, and test it.',
          '<strong>Break it on purpose.</strong> Rewrite "done" in Version 1 as a shortcut and add an undo test that catches it.',
          '<strong>On the phone.</strong> Build the planner screen in React Native with Expo, using the same reducer unchanged.'
        ] }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'School in Germany',
      h2: 'Do German schools teach app development?',
      lede: 'Rarely as a course of its own. Informatik is where it could happen, and Informatik is not the same everywhere.',
      body: [
        { kind: 'p', html: 'The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that six Länder have no Informatik that is compulsory for every pupil: Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt. Where Informatik is taught, it covers algorithms, data and how computers work, which is exactly what app development needs, but there is seldom time to build and finish an app of one\'s own. That is the gap our course fills, alongside school, never instead of it. The school course is the one that counts for grades.' },
        { kind: 'table', mt: true, numCols: [], caption: 'How building an app connects to school subjects (our map)', head: ['In the app', 'The idea', 'Where it appears at school'], rows: [
          ['Tasks sorted by date', 'Sorting and comparison', 'Informatik: algorithms'],
          ['Counting late tasks', 'Filtering data', 'Informatik and maths: data'],
          ['One reducer for all changes', 'State and functions', 'Informatik: modelling and programming'],
          ['A screen readable by everyone', 'Design and accessibility', 'Art, design and German or English: clear writing'],
          ['Keeping code on GitHub', 'Versions and teamwork', 'Project work in any subject']
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do app development classes run in German time?',
      lede: 'After school or at the weekend. The mentors teach from India, which is ahead of Germany by a few hours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample class times in Germany with the time in India', head: ['Germany', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 12:45', '17:15', '16:15'],
          ['Sunday 14:15', '18:45', '17:45']
        ] },
        { kind: 'source', html: 'German clocks show MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as the Einheitenzeitgesetz provides; this winter began on 25 October 2026 and next summer time starts on 28 March 2027. India does not change from UTC+5:30. These rows illustrate possible times; none is a fixed group.' },
        { kind: 'p', mt: true, html: 'The first class is booked in your own device\'s time. A teen with exams or a sports season can move one-to-one lessons with the mentor\'s agreement.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From the first screen to a finished app',
    lede: 'Our own milestones for app learners, used to place each teen and to report progress to parents.',
    table: { caption: 'App development milestones for teens (ours)', head: ['Step', 'Usually by', 'The teen can'], rows: [
      ['1. JavaScript basics', 'Month 1', 'Write functions, arrays and objects with confidence'],
      ['2. First screens', 'Month 2', 'Build screens with buttons, text and lists that run on their phone'],
      ['3. State', 'Months 3 to 4', 'Keep data in state, change it through a reducer and test it'],
      ['4. Real features', 'Months 5 to 6', 'Add navigation, storage and data from the internet'],
      ['5. Own app', 'Month 7 onwards', 'Design, build, test and present an app of their own']
    ] },
    left: { h3: 'For teens', ps: [
      'If a bug only happens after three taps, write the three taps as actions and test them without the phone.',
      'Never change state in place. Copy it, and both the screen and undo will thank you.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask to see the app on your own phone. Then ask what happens if you press a button twice.',
      'Publishing in a store is a separate step with adult rules. You decide whether and when.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for teens who build',
    lede: 'Live in English with a regular mentor, in a group or one to one. The last three are adult courses, a next step at 18.',
    bands: [
      { num: 'I', h3: 'Front end', sub: 'Ages 13 to 18', courses: [
        { code: 'ADT / FRONT / 01', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'The library React Native is built on.' },
        { code: 'ADT / FRONT / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for teens', blurb: 'Layouts and design that people enjoy.' },
        { code: 'ADT / FRONT / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saving every version of an app.' }
      ] },
      { num: 'II', h3: 'Behind the app', sub: 'Ages 14 to 18', courses: [
        { code: 'ADT / BACK / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Servers and APIs an app talks to.' },
        { code: 'ADT / BACK / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases for real app data.' },
        { code: 'ADT / BACK / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'React and Node.js together.' }
      ] },
      { num: 'III', h3: 'Native apps', sub: 'Ages 18 and up', courses: [
        { code: 'ADT / NATIVE / 01', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter', blurb: 'Dart and cross-platform apps.' },
        { code: 'ADT / NATIVE / 02', slug: 'complete-swift-programming-masterclass-college', title: 'Swift and iOS', blurb: 'SwiftUI apps for iPhone.' },
        { code: 'ADT / NATIVE / 03', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin and Android', blurb: 'Native Android apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live app development classes work for teens in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'From about a quarter past three, German time.' },
      { time: 'Weekends', l: 'Midday and early afternoon on Saturday and Sunday.' },
      { time: 'One to one', l: 'A slot agreed with the mentor, moved around exams.' }
    ],
    cells: [
      { h3: 'On their own phone', p: 'Every app runs on a real device.' },
      { h3: 'Code they understand', p: 'Patterns explained, never just copied.' },
      { h3: 'Easy-paced English', p: 'Spoken clearly, explained again gladly.' },
      { h3: 'One mentor', p: 'Someone who knows the teen\'s app.' },
      { h3: 'Accounts stay yours', p: 'Families keep every account and contract.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty teens, or one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Apps and other projects by our students worldwide; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews by teens and parents, exactly as posted.',

  fees: {
    h2: 'Fees for app development classes in Germany',
    lede: 'Eight live classes a month for one fee. We quote it in euro, converted at the European Central Bank reference rate, but take payment in US dollars; your bank does the conversion, so the euro total it shows may differ by a little.',
    free: ['A free first class', 'A first screen running on your phone', 'No card required'],
    group: ['Fifteen to twenty teens of a similar level', 'One regular mentor', 'Two live classes a week', 'Monthly, stop whenever you need'],
    one: ['A teen and a mentor, one to one', 'The teen\'s own app idea', 'Times planned around school']
  },

  faq: {
    eyebrow: 'Teens and parents in Germany ask',
    h2: 'App development classes for teens in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and taught in English only, by mentors based in India who match each teen\'s pace and accent. JavaScript and app tools are in English anyway, so the language of class and code is the same.' },
      { q: 'What age is right to start?', a: 'Most teens start the React Native course at 13 or older. A younger teen with no coding experience may begin with block-based app making.' },
      { q: 'Do we need a Mac or an iPhone?', a: 'No. Expo lists Android devices, iOS devices, the Android emulator and the iOS simulator as ways to run an app while building it, so a teen can start with the phone and computer they already have.' },
      { q: 'Can my teen publish an app on the App Store?', a: 'Apple\'s licence agreement requires the developer to be of the legal age of majority, at least 18 in many countries. Its enrolment page says a parent or guardian can enrol with their own Apple Account and share it. Publishing is optional and the family\'s decision.' },
      { q: 'Does my teen need a developer account to take the course?', a: 'No. Apps run on the teen\'s own phone through Expo during the course, without any store account.' },
      { q: 'Which programming language will they learn?', a: 'JavaScript, with React Native for the screens. React Native is an open source framework for building Android and iOS apps, according to its own documentation.' },
      { q: 'Does German school teach this?', a: 'Rarely as its own course. The Informatik-Monitor 2026/27 lists six Länder without Informatik compulsory for all pupils. Our course runs alongside school and does not replace it.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teens in Germany usually choose after school or the weekend.' },
      { q: 'How are fees charged?', a: 'The fee appears in euro at the European Central Bank reference rate and is charged in US dollars, which your bank converts, so your statement can differ slightly. The first class is free.' },
      { q: 'Will my teen finish with a real app?', a: 'Yes, that is the aim: an app of their own design that runs on their phone, with code they can explain, and usually several smaller apps on the way.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'Other pages for teens in Germany and for app builders.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for Germany.' },
      { href: '/app-development-course-netherlands', label: 'App development in the Netherlands', p: 'The same subject for Dutch learners.' },
      { href: '/app-development-classes-for-teens-canada', label: 'App development for teens in Canada', p: 'For teens in Canada.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Add a model to your app.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Help with school Informatik, in German.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first app development class',
    lede: 'In the free class the teen gets a first screen running on their own phone, and the mentor sees which course fits. Everything happens in English, at the teen\'s pace.',
    readFirst: 'Before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">the whole course list</a>.',
    note: 'Classes take place live online, in English, with mentors based in India. Send us a WhatsApp message in English for the quickest reply.',
    formNote: 'The first class is free, with no card needed.'
  },

  footer: {
    cols: [
      { h4: 'App building', links: [
        { href: '/app-development-course-netherlands', label: 'Apps, Netherlands' },
        { href: '/app-development-classes-for-teens-canada', label: 'Apps for teens, Canada' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Copy the state, never change it'
  },

  personalityCss: `
.ag-root.ag-adt .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-adt .ag-capsule { border-left-width: 6px; }
.ag-root.ag-adt .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-adt .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-adt .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Apple Developer Program License Agreement (section 3.1) and enrolment page; React Native documentation; Expo documentation; MIT App Inventor about page; GitHub Terms of Service; GI Informatik-Monitor 2026/27; Einheitenzeitgesetz. Read 3 November 2026.',
    localProject: 'Copy the state: an original JavaScript homework planner in which every change goes through one reducer and the screen is computed from state (open tasks 2026-11-02 Informatik and 2026-11-05 Mathe, late: 1), plus an undo test in which an in-place shortcut leaves the task done after undo (true) and the copying version restores it (false). Lesson family: never change state in place.',
    requiredMentions: ['doneShortcut -> after undo, task done? true', 'doneCopy -> after undo, task done? false', '2026-11-02 Informatik: loop task', 'Expo Go a playground for students and learners', 'at least 18 in many countries or regions', 'over 24 million learners from 195 countries', 'Copy the state, never change it', 'needs a D-U-N-S Number'],
    sources: [
      { claim: 'Apple developers must be of the legal age of majority (at least 18 in many countries).', url: 'https://developer.apple.com/support/terms/apple-developer-program-license-agreement/' },
      { claim: 'Under the age of majority a parent or guardian can enrol and share the account; organisations need a D-U-N-S Number.', url: 'https://developer.apple.com/programs/enroll/' },
      { claim: 'React Native is an open source framework for Android and iOS apps using JavaScript.', url: 'https://reactnative.dev/docs/intro-react-native-components' },
      { claim: 'Expo Go is a playground for students and learners; four ways to run apps.', url: 'https://docs.expo.dev/get-started/set-up-your-environment/' },
      { claim: 'MIT App Inventor learner and app counts.', url: 'https://appinventor.mit.edu/about-us' },
      { claim: 'GitHub users must be at least 13.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' }
    ],
    rejectedClaims: [
      'Google Play Console minimum age: not present in the raw HTML we could read; not stated.',
      'Any claim that a teen can publish under their own Apple account before the age of majority: contradicted by Apple\'s agreement; not made.',
      'Any affiliation with Apple, Google, Meta, Expo or MIT: none.',
      'App store revenue or job promises: none made.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
