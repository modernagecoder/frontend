'use strict';
// MIT App Inventor for kids (ag- subject door; US cluster Phase 2, row 32).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_us.tsv): app inventor / app inventor mit / app inventor 2 / app inventor login /
// app inventor code login / app inventor emulator / app inventor companion; app development for kids / free.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/app-inventor-for-kids/):
//  - appinventor.mit.edu/FAQ: "a free, web-based platform for creating, testing, and sharing mobile apps"; "Over 24
//    million people code their own apps with App Inventor"; 2025 User Survey "over 11,000 schools globally in over 200
//    countries/regions and over 900 US schools in 50 states"; "84.9% students, 7.3% teachers, and 7.8% outside the
//    education field"; "ages 4 to 84"; Google account not required: code.appinventor.mit.edu, "Continue Without An
//    Account", "revisit code"; projects missing = a different Google account; Companion book icon saves an app
//    offline; Android .apk; Apple "requires a paid developer account"; phone-ban options (Chromebook, iPad, Android
//    tablet, emulator, Mac with Apple Silicon); "AP board certified Mobile CSP"; supports "Chrome, Firefox, and Safari".
//  - appinventor.mit.edu/explore/ai2/setup: four options; the emulator is "Under Revision: Not Recommended"; USB is
//    "Android only". setup-device-wifi: "the SAME Wi-Fi network"; Connect, AI Companion; a code of "six characters".
//  - appinventor.mit.edu/ios_tips: "App Inventor has worked with iPhones and iPads since March 2021"; packaging .ipa
//    files is "currently in a closed beta"; features not yet on iOS (Bluetooth, Charts, extensions...).
//  - appinventor.mit.edu home: "free and runs right in your browser on a Mac, Windows computer, or Chromebook".
//  - appinventor.mit.edu/about/termsofservice (effective July 1, 2020): Google account sign-in; "Your projects on the
//    Site are private unless you share them."; "Young people, especially, should be careful about placing personal
//    information on the Site."; the PII-free classroom version at code.appinventor.mit.edu.
//  - support.google.com/accounts/answer/1350409: "For all countries not listed below, 13 is the minimum age to manage
//    your own Google Account."; Family Link for younger children; Workspace for Education caveat. The United States is
//    not on the exception list, so 13 for US families is our reading, labelled as ours.
//  - Component reference (ai2.appinventor.mit.edu/reference): AccelerometerSensor Shaking() and MinimumInterval;
//    zAccel "-9.8"; TinyDB "a persistent data store"; Companion apps share one TinyDB during development;
//    TextToSpeech Speak(message); math "random integer" "inclusive"; text "join"; Screen Initialize "only run once".
// Not printed: the System Requirements page (it still lists Windows XP and Firefox 3.6, so it is out of date); the
// About page's different learner totals (FAQ figures used instead, never combined).
// Our own material, labelled: the dice app blocks, the 60 / 6 = 10 expectation, the three-app plan and the stages.
// Lesson family: events and state (an event handler that changes a value the app remembers).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DICE = `// Shake-to-roll dice (ours)
// Components: LabelRoll, AccelerometerSensor1, TextToSpeech1
initialize global roll to 0

when AccelerometerSensor1.Shaking
  set global roll to random integer from 1 to 6
  set LabelRoll.Text to get global roll
  call TextToSpeech1.Speak
       message: join "You rolled a " get global roll`;

const MEMORY = `// Remember how many times the dice was rolled (ours)
// Extra component: TinyDB1
initialize global rolls to 0

when Screen1.Initialize
  set global rolls to call TinyDB1.GetValue
       tag: "rolls"   valueIfTagNotThere: 0

when AccelerometerSensor1.Shaking
  set global rolls to get global rolls + 1
  call TinyDB1.StoreValue
       tag: "rolls"   valueToStore: get global rolls
  set LabelCount.Text to join "Rolls so far: " get global rolls`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'APP INVENTOR', blurb: 'MIT App Inventor for kids: how to sign in under 13, test on an iPhone or Chromebook, and build a first app with real blocks.' },
  slug: 'app-inventor-for-kids',
  code: 'aik',
  accent: '#464370',
  accentRationale: 'MIT App Inventor for kids, US: a muted indigo #464370 from the US allocation sheet (row 32), distinct from the blue of the Scratch help page and the pilot accents',
  pageType: 'market',
  market: US,
  routeLabel: 'App Inventor for kids',
  title: 'MIT App Inventor for Kids: Sign-In, Setup and a First App',
  description: 'MIT App Inventor for kids: signing in without a Google account, testing on iPhone, Android or a Chromebook, and a shake-to-roll dice app built from real blocks.',
  ogDescription: 'MIT App Inventor is free and runs in a browser. How US kids sign in (with or without Google), connect a phone over Wi-Fi, and build a dice app that remembers.',
  twitterDescription: 'MIT App Inventor for kids: sign-in options, phone setup and a first app in real blocks.',
  pageName: 'MIT App Inventor for Kids',
  webPageDescription: 'A guide for US parents and children to MIT App Inventor: account options for under-13s, the four ways to test an app, and a first app built with documented blocks.',
  courseDescription: 'Live online app-making classes for US children, in MIT App Inventor blocks first and typed code later, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'App Inventor for kids',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#signin', label: 'Signing in' },
    { href: '#testing', label: 'Testing' },
    { href: '#first-app', label: 'First app' },
    { href: '#school', label: 'At school' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 8 to 14 &middot; MIT App Inventor',
  h1: 'MIT App Inventor for kids',
  lede: 'App Inventor projects tend to start with a specific idea: a quiz for a younger brother, a soccer score keeper, a button that makes the family dog bark. MIT App Inventor lets them build it with blocks that snap together, then run it on a real iPhone or Android phone the same afternoon. This guide covers what parents ask before starting: how a child under 13 signs in, which devices can test an app, why the phone sometimes refuses to connect, and what a first proper app looks like, with a dice game written in App Inventor blocks that you can build yourself.',
  secondaryCta: { href: '#first-app', label: 'See the dice app' },
  wa: 'Hello Modern Age Coders, my child in the US wants to make phone apps with MIT App Inventor. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Apps on iPhone and Android',
  spec: [
    ['For', 'Ages 8 to 14'],
    ['Tool', 'MIT App Inventor, free'],
    ['Runs in', 'Chrome, Firefox or Safari'],
    ['Tests on', 'iPhone, Android, Chromebook'],
    ['Sign-in', 'Google, or a revisit code'],
    ['Format', 'Batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'MIT App Inventor is a free, web-based tool from MIT for building phone apps with blocks. Kids design screens in the Designer, add behavior in the Blocks Editor, and test live on an iPhone, Android phone or Chromebook through the free Companion app. It works with a Google account, or without one through code.appinventor.mit.edu and a revisit code.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for young app makers',
    lede: 'Every class is live, and every project is an app the child chose to build.',
    items: [
      { course: 'block-coding-app-development-masterclass', code: 'AIK / 01', title: 'App making for kids', note: 'Ages 8 to 12. App Inventor blocks, real phones, finished apps.' },
      { course: 'kids-coding-blocks-masterclass', code: 'AIK / 02', title: 'Coding for kids with blocks', note: 'Ages 6 to 12. A wider blocks course, for younger siblings too.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'AIK / 03', title: 'App development for teens', note: 'Ages 13 to 18. From blocks to typed code and app stores.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What MIT App Inventor is, and who uses it',
      lede: 'App Inventor comes from a small team at the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL). Its own FAQ describes it as a free, web-based platform for creating, testing, and sharing mobile apps.',
      body: [
        { kind: 'table', caption: 'MIT App Inventor in numbers, from its FAQ and 2025 User Survey (read 17 October 2026)', head: ['Point', 'What App Inventor says'], rows: [
          ['People who code apps with it', '"Over 24 million people code their own apps with App Inventor"'],
          ['Schools in one month of 2025', 'Over 11,000 schools globally, in over 200 countries and regions'],
          ['US schools in that month', '"over 900 US schools in 50 states"'],
          ['Who the users are', '84.9% students, 7.3% teachers, 7.8% outside education'],
          ['Ages', '"ages 4 to 84 (and more)" use it every month'],
          ['Cost', 'Free; supported by grants, collaborations and donations']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two windows, one app',
          left: [
            'Every App Inventor project has two halves. The Designer is where a child drags components onto a phone-shaped screen: buttons, labels, images, and invisible ones such as a sound player or a motion sensor. The Blocks Editor is where they decide what happens when someone taps, shakes or types.',
            'MIT&rsquo;s own first tutorial calls components the ingredients in a recipe. We find that comparison works well with eight-year-olds: the Designer is the shopping list, the blocks are the method.'
          ],
          rightH3: 'Is it real coding?',
          right: [
            'The FAQ asks this question itself and answers it with who uses the tool: engineers and research scientists who normally work in Java, Python and Swift use App Inventor to build working apps quickly.',
            'Our view, from teaching it: the blocks hide spelling and punctuation, not thinking. Events, variables, conditions, loops and lists are all there, and a child who builds three App Inventor apps arrives at typed code already knowing what an event handler is for.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://appinventor.mit.edu/FAQ" rel="noopener" target="_blank">MIT App Inventor FAQ</a> and the <a class="ag-inline-link" href="https://appinventor.mit.edu/explore/ai2/hellopurr" rel="noopener" target="_blank">HelloPurr tutorial</a>, read 17 October 2026. The FAQ&rsquo;s figures are App Inventor&rsquo;s own; we have not added them up or checked them. We are not connected with MIT.' }
      ]
    },
    {
      id: 'signin', tint: 'deep', eyebrow: 'Accounts',
      h2: 'How a child under 13 signs in to App Inventor',
      lede: 'This is where many American families get stuck, because the usual sign-in is a Google account and children have their own rules on Google. There are three routes.',
      body: [
        { kind: 'table', caption: 'Three ways in (from the App Inventor FAQ and terms, and Google&rsquo;s age page, read 17 October 2026)', head: ['Route', 'Who it suits', 'What to know'], rows: [
          ['A personal Google account', 'Teens of 13 and over', 'Google says 13 is the minimum age to manage your own account in every country not on its exception list; the United States is not on that list (our reading)'],
          ['A Google account managed with Family Link', 'Children under 13', 'Google says parents can help create and manage a younger child&rsquo;s account with Family Link'],
          ['A school Google account', 'Students whose district uses Google', 'Google notes its consumer age rules may not apply to Workspace for Education accounts; the school sets the rules'],
          ['No account, at code.appinventor.mit.edu', 'Anyone, including classes', 'Choose "Continue Without An Account" and keep the random revisit code; without it the project cannot be found again']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The revisit code, explained',
          left: [
            'The no-account route gives each user a randomly generated code. App Inventor says that if the user wants to return to the project later, they must copy that code and keep it somewhere safe, because otherwise projects cannot be retrieved after logging out.',
            'Our tip for families: write the code on paper and put it in a phone note as well. Without that code, the project cannot be found again.'
          ],
          rightH3: 'What App Inventor keeps',
          right: [
            'The FAQ says App Inventor does not keep personally identifiable information and keeps Google account details only so that project files can be saved. Its terms add that projects stay private unless you share them, and that young people especially should be careful about putting personal information on the site.',
            'For schools, the terms describe the code.appinventor.mit.edu version as one that does not collect or keep personally identifiable information, which is why many US teachers use it.'
          ] },
        { kind: 'p', mt: true, html: 'Signed in and the projects have vanished? The FAQ says this is almost always because you are logged in to a different Google account from the one that created them. Check the address shown at the top right before anything else.' }
      ]
    },
    {
      id: 'testing', tint: 'tint', eyebrow: 'Testing on a device',
      h2: 'Four ways to test an app, and the one MIT recommends',
      lede: 'Building happens in the browser on a Mac, Windows computer or Chromebook. Testing happens on a device, live, while the child is still changing blocks. MIT&rsquo;s setup page lists four options.',
      body: [
        { kind: 'table', caption: 'Test options, from the App Inventor setup pages (read 17 October 2026)', head: ['Option', 'What you need', 'MIT&rsquo;s note'], rows: [
          ['1. Phone or tablet over Wi-Fi', 'An iPhone, Android phone, iPad or Android tablet, plus the free Companion app', 'Recommended; the easiest way'],
          ['2. Chromebook', 'A Chromebook that can run Android apps', 'Build, test and run on the same device'],
          ['3. Emulator on the computer', 'Emulator software installed on a Mac or PC', 'Under Revision: Not Recommended'],
          ['4. USB cable', 'An Android device and a cable', 'Android only; for networks that block the Wi-Fi link']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Install the Companion once.</b> Get the MIT App Inventor Companion from the App Store or Google Play. It stays on the phone for every future project.',
          '<b>Put both devices on the same Wi-Fi.</b> App Inventor shows the app on the phone only when the computer and the phone are on the SAME network, in MIT&rsquo;s capitals.',
          '<b>Connect from the project.</b> In the browser, choose Connect, then AI Companion. A QR code and a code of six characters appear.',
          '<b>Scan or type.</b> In the Companion, scan the QR code, or type the six characters and press the orange Connect with code button, without pressing Enter.',
          '<b>Watch it update.</b> Within a few seconds the app appears on the phone and changes as blocks change. MIT calls this live testing.',
          '<b>If nothing appears,</b> update the Companion first, since an outdated version is the first problem MIT lists, then check that both devices really are on the same network.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'iPhone and iPad',
          left: [
            'App Inventor has worked with iPhones and iPads since March 2021, and MIT says almost all apps in its tutorial list work in the iOS Companion. A few features are still missing on iOS, among them Bluetooth, the Charts and Spreadsheets components and Android extensions.',
            'Turning an app into a permanent iPhone app file is harder, because Apple requires a paid developer account and signing; MIT says that packaging process is currently in a closed beta.'
          ],
          rightH3: 'Keeping an app on the phone',
          right: [
            'The simplest way to keep a finished app works on both iPhone and Android: while it runs in the Companion, tap the book icon at the top right. It is then saved in the Companion&rsquo;s library and opens offline, with nothing to install.',
            'On Android you can also build an installable .apk file that runs on its own. Building still needs the internet, because App Inventor itself runs in the browser.'
          ] }
      ]
    },
    {
      id: 'first-app', tint: 'deep', eyebrow: 'A first real app',
      h2: 'Build a shake-to-roll dice app in App Inventor blocks',
      lede: 'HelloPurr, MIT&rsquo;s classic first app, plays a meow when you tap a kitten. Our next step for students is a dice that rolls when the phone is shaken, speaks the result and remembers how many rolls there have been. The blocks are ours, written with components from the App Inventor reference; build them and shake your own phone.',
      body: [
        { kind: 'code', label: 'App 1 &middot; shake to roll', lang: 'app inventor blocks', code: DICE, note: 'The random integer block returns a whole number between the two values, inclusive, so 1 and 6 can both appear. TextToSpeech speaks the joined text aloud.' },
        { kind: 'code', label: 'App 2 &middot; a dice that remembers', lang: 'app inventor blocks', code: MEMORY, note: 'Apps forget their variables every time they close. TinyDB is App Inventor&rsquo;s persistent store, so the count survives. Screen1.Initialize runs once when the screen starts, which is the moment to load the saved number.' },
        { kind: 'two', mt: true,
          leftH3: 'The idea underneath: events change state',
          left: [
            'Nothing in App 1 runs until the phone is shaken. Shaking is the event; the blocks inside it are the handler; the global roll is the state that the handler changes. That pattern runs nearly every app on a phone.',
            'App 2 adds the harder idea: state that outlives the app. Children who understand why the count resets in App 1 and survives in App 2 have understood what a database is for.'
          ],
          rightH3: 'Two things that surprise students',
          right: [
            'One hard shake can count as several. The AccelerometerSensor has a MinimumInterval property, in milliseconds, that ignores further Shaking events until the time has passed; raising it is the fix.',
            'While testing, every app run in the same Companion shares one TinyDB, so a count from yesterday&rsquo;s project can appear in today&rsquo;s. The reference says this sharing disappears once apps are packaged, and suggests clearing the Companion&rsquo;s data when starting a new app.'
          ] },
        { kind: 'p', mt: true, html: 'A quick check with arithmetic, ours: a fair dice shows a 6 one time in six on average, so in 60 shakes you would expect about 60 / 6 = 10 sixes. Ask your child to shake sixty times, count, and explain why the answer is rarely exactly 10. That is probability, taught by their own app.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'At school',
      h2: 'App Inventor in US classrooms, including phone-free schools',
      lede: 'With over 900 US schools in all 50 states using it in a single month, according to App Inventor&rsquo;s 2025 survey, many children meet it in class first. Two school questions come up most.',
      body: [
        { kind: 'two',
          leftH3: 'When phones are banned',
          left: [
            'The App Inventor FAQ answers the phone-ban case directly. Students can test on a Chromebook in a second window, on an iPad, on an Android tablet shared by a team of two to four, on the free emulator (which cannot reach some sensors and Bluetooth), or on a Mac with Apple Silicon that runs the Companion on the desktop.',
            'Coding on a touchscreen alone is possible on an iPad or Android tablet, but MIT warns it can be tricky and suggests trying it before a class depends on it.'
          ],
          rightH3: 'App Inventor and AP CSP',
          right: [
            'For high schools, the FAQ points teachers who want App Inventor as an official course to the "AP board certified Mobile CSP", an AP Computer Science Principles course built on it.',
            'If your teen is heading toward AP CSP, our page on <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> covers the exam itself, and App Inventor apps make good practice for the course&rsquo;s programming work.'
          ] },
        { kind: 'table', mt: true, caption: 'If the school network blocks the Companion (from the App Inventor FAQ and setup pages)', head: ['Symptom', 'What MIT suggests'], rows: [
          ['The QR code connects at home but not at school', 'Some school firewalls block the kind of Wi-Fi connection App Inventor needs; try USB on Android'],
          ['Nothing loads at all on the network', 'The FAQ points IT staff to its letter for IT professionals in schools about blocked ports'],
          ['The browser is the problem', 'App Inventor supports Chrome, Firefox and Safari on most laptops and desktops']
        ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'Three apps in a first term, and the idea each one teaches',
      lede: 'Our plan for children of about 9 to 12 who are new to App Inventor. Younger children take longer on each app; that is fine.',
      body: [
        { kind: 'table', caption: 'A three-app first term (ours)', head: ['Weeks', 'The app', 'The coding idea'], rows: [
          ['1 to 3', 'A talking button app of the child&rsquo;s choosing', 'Components, properties and one event'],
          ['4 to 7', 'The shake-to-roll dice above, then a coin flip', 'Variables, random numbers, joining text'],
          ['8 to 12', 'A quiz with a score that is saved', 'Conditions, lists and TinyDB storage']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 8 to 9', p: 'Design-heavy apps with one or two events, plenty of sound and color, and a parent nearby for the Wi-Fi setup.' },
          { h3: 'Ages 10 to 12', p: 'The full three apps, with their own idea by week 8, often something for a sibling, a team or a class.' },
          { h3: 'Ages 13 and up', p: 'Faster through blocks, then the move to typed code in our teen app course, where the same events reappear.' }
        ] },
        { kind: 'p', mt: true, html: 'A teen with an app worth showing can also aim at a US audience: our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> explains that competition from its official rules.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From idea to app',
    h2: 'Four stages of a young app inventor',
    lede: 'The stages our App Inventor lessons move a child through.',
    table: { caption: 'Stages of a young app maker (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Arranger', 'Places buttons and pictures in the Designer; no blocks yet'],
      ['2. Responder', 'Writes one event per button, like HelloPurr'],
      ['3. Rememberer', 'Uses variables and TinyDB so the app keeps track of things'],
      ['4. Designer', 'Plans screens on paper first, tests with real users, fixes what confuses them']
    ] },
    left: { h3: 'For parents', ps: [
      'The Wi-Fi connection step is where younger children need an adult. After that, testing is something a child can learn to do alone.',
      'Ask to use the app. A child who watches someone else get confused by their screen learns more about design than any lesson.'
    ] },
    right: { h3: 'For kids', ps: [
      'Make the app small and finished before you make it big. A dice that works beats a game that almost works.',
      'Name your components. LabelRoll is easier to find in the blocks than Label7.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine courses for kids who like making things',
    lede: 'Taught live online by the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Apps and blocks', sub: 'Ages 6 to 12', courses: [
        { code: 'AIK / APP / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'App Inventor, start to finish.' },
        { code: 'AIK / APP / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding with blocks', blurb: 'Scratch, apps, then AI.' },
        { code: 'AIK / APP / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories in blocks.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 12', courses: [
        { code: 'AIK / TYP / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language.' },
        { code: 'AIK / TYP / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Websites with HTML, CSS, JavaScript.' },
        { code: 'AIK / TYP / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'From blocks to game engines.' }
      ] },
      { num: 'III', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'AIK / TEN / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Real app code and publishing.' },
        { code: 'AIK / TEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive sites and games.' },
        { code: 'AIK / TEN / 03', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP preparation', blurb: 'The College Board course and exam.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'App lessons at a time your family chooses',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches across the US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings for families who prefer them.' },
      { time: '1-on-1', l: 'A private plan, at the hours you choose.' }
    ],
    cells: [
      { h3: 'A phone on the desk', p: 'Kids test every change on their own device.' },
      { h3: 'Their idea first', p: 'The app is one they want to use.' },
      { h3: 'The same teacher', p: 'Week after week, term after term.' },
      { h3: 'Blocks, then text', p: 'The step to typed code when ready.' },
      { h3: 'From home', p: 'Any state, any time zone.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or just your child.' }
    ]
  },

  projectsH2: 'Apps and projects made by our students',
  projectsLede: 'A few things learners built after their first App Inventor term. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'From Google, as parents wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'App Inventor and the Companion are free. Our lessons are billed one month at a time in US dollars; there is no term contract, and you can stop at the end of any month.',
    free: ['A free first lesson', 'Bring an app idea', 'No card details'],
    group: ['Fifteen to twenty per batch', 'A regular teacher', 'Batch times to choose from', 'Paid monthly'],
    one: ['Private lessons', 'At your convenience', 'An app plan of their own']
  },

  faq: {
    eyebrow: 'Questions parents ask',
    h2: 'MIT App Inventor for kids: questions',
    items: [
      { q: 'What is MIT App Inventor?', a: 'A free, web-based tool from MIT for building phone apps with blocks. You design the screen in the Designer, add behavior in the Blocks Editor, and test on a real phone through the Companion app.' },
      { q: 'Is MIT App Inventor free?', a: 'Yes. App Inventor and its Companion app are free. MIT says the site is supported through grants, collaborations with educational organizations and donations.' },
      { q: 'What age is App Inventor for?', a: 'MIT says people from ages 4 to 84 use it every month. We teach it from about 8, when children can read the blocks comfortably; in our experience it suits ages 9 to 14 especially well.' },
      { q: 'Does my child need a Google account?', a: 'No. App Inventor can be used without one at code.appinventor.mit.edu by choosing Continue Without An Account. Keep the revisit code it gives you, because without it the project cannot be found again after logging out.' },
      { q: 'Can a child under 13 use a Google account for App Inventor?', a: 'Google says 13 is the minimum age to manage your own Google Account in countries not on its list of exceptions, and the US is not on that list. A parent can create and manage a younger child\'s account with Family Link, or the child can use a school account or the no-account route.' },
      { q: 'Does App Inventor work on iPhone?', a: 'Yes. MIT says App Inventor has worked with iPhones and iPads since March 2021. Kids test live with the iOS Companion app. Packaging a permanent iPhone app is harder because Apple requires a paid developer account.' },
      { q: 'Can you use App Inventor on a Chromebook?', a: 'Yes. App Inventor runs in the browser on a Chromebook, and many Chromebooks can also run the Android Companion, so a child can build and test on the same machine.' },
      { q: 'Why won\'t my phone connect to App Inventor?', a: 'Check that the computer and phone are on the same Wi-Fi network and that the Companion app is up to date. Some school networks block the connection; on Android a USB cable is the fallback.' },
      { q: 'Where did my App Inventor projects go?', a: 'Usually you are signed in with a different Google account from the one that made them, since projects are attached to that account\'s email address. With the no-account route, you need the revisit code.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are app-making classes?', a: 'The first lesson is free. After that, families pay for teaching one month at a time, and the fees section shows the monthly figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'For US families with a child who builds things.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A US competition for student apps.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'For teens taking the course.' },
      { href: '/blog/app-idea-to-app-store-60-days-teen-developer-roadmap', label: 'From app idea to app store', p: 'A roadmap for older teens.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes', p: 'Blocks for younger children.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'What a 10-year-old can learn.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the app your child keeps talking about. In the first lesson the teacher helps them sketch its screen and make the first button work.',
    readFirst: 'To see a lesson before you book, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is on our <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Our teachers are based in India and teach entirely online, so a child in any US state can join from the kitchen table. WhatsApp gets the quickest reply.',
    formNote: 'The first lesson is free and we never take card details for it.'
  },

  footer: {
    cols: [
      { h4: 'Apps and blocks', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/blog/app-idea-to-app-store-60-days-teen-developer-roadmap', label: 'App idea to app store' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-9-year-olds', label: 'Coding for 9 year olds' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' }
      ] }
    ],
    bottomRight: 'An event, a handler, and a value that lasts'
  },

  personalityCss: `
.ag-root.ag-aik .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-aik .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-aik .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aik .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-aik .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-aik .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'MIT App Inventor FAQ, setup pages, iOS tips, terms of service and component reference, read raw on 17 October 2026; Google account age page. Facts: free web-based platform; over 24 million people; 2025 survey: over 11,000 schools, over 900 US schools in 50 states, 84.9% students; ages 4 to 84; code.appinventor.mit.edu, Continue Without An Account, revisit code; four test options, emulator Under Revision: Not Recommended, USB Android only; same Wi-Fi, six-character code; iOS since March 2021, .ipa packaging in closed beta; Companion book icon; Mobile CSP; AccelerometerSensor MinimumInterval; TinyDB persistent and shared in the Companion; Google minimum age 13 outside listed countries.',
    localProject: 'Two App Inventor block programs (ours, using components named in the App Inventor reference): a shake-to-roll dice that speaks the result, and a version that remembers the roll count with TinyDB. Probability check 60 / 6 = 10. A three-app first-term plan. Lesson family: events and state.',
    requiredMentions: ['Over 24 million people code their own apps with App Inventor', 'over 900 US schools in 50 states', '84.9% students', 'code.appinventor.mit.edu', 'revisit code', 'Under Revision: Not Recommended', 'since March 2021', 'MinimumInterval', 'AccelerometerSensor1.Shaking', 'TinyDB1.StoreValue', '60 / 6 = 10', 'Family Link'],
    sources: [
      { claim: 'What App Inventor is, user numbers, ages, accounts, revisit codes, saving apps, iPhone packaging, phone-free classrooms, Mobile CSP.', url: 'https://appinventor.mit.edu/FAQ' },
      { claim: 'The four test options and their status.', url: 'https://appinventor.mit.edu/explore/ai2/setup' },
      { claim: 'Companion setup over Wi-Fi, same network, six-character code.', url: 'https://appinventor.mit.edu/explore/ai2/setup-device-wifi' },
      { claim: 'iPhone and iPad support since March 2021 and missing iOS features.', url: 'https://appinventor.mit.edu/ios_tips' },
      { claim: 'Google sign-in, private projects, personal information, the PII-free classroom version.', url: 'https://appinventor.mit.edu/about/termsofservice' },
      { claim: 'Minimum age 13 to manage a Google Account outside listed countries; Family Link; Workspace for Education.', url: 'https://support.google.com/accounts/answer/1350409?hl=en' },
      { claim: 'AccelerometerSensor, TinyDB, TextToSpeech and Screen Initialize.', url: 'http://ai2.appinventor.mit.edu/reference/components/sensors.html' }
    ],
    rejectedClaims: [
      'The App Inventor System Requirements page (Windows XP, Firefox 3.6): out of date, so not printed as current.',
      'The About page learner and app totals: they differ from the FAQ, so only the FAQ figures are used and nothing is added together.',
      'That a US child under 13 can hold a personal Google account: Google sets 13 outside its listed countries; the US reading is ours and stated as such.',
      'That we ran the two block programs on this page: they use documented components and the reader builds them.',
      'Named student teams and individuals from MIT pages: not used, under the cluster rule on naming people.',
      'Any affiliation with MIT: none, and the page says so.'
    ]
  }
};
