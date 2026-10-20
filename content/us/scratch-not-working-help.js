'use strict';
// Scratch not working: help for kids, parents and US teachers (ag- tools door; US cluster Phase T, row 154).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_tools.tsv): scratch not working / on chrome / not loading / not loading projects /
// not showing projects; scratch help / help center; scratch error loading backpack.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/scratch-not-working-help/).
// scratch.mit.edu/faq now redirects to /contact-us, which points to the official Scratch Help Center at
// mitscratch.freshdesk.com. Every quote below is from a Help Center article, grepped in the raw text:
//  - 4000156845 system requirements (modified 11 Sep): "Scratch runs on most modern web browsers on desktops, laptops,
//    and tablets."; "Scratch does not currently support creating or editing projects on phones"; browsers "released
//    within the last 30 months (2.5 years)"; "Windows 10 version 1709 or higher", "macOS 10.13 or higher", "iOS version
//    10 or higher (Tablets only)", "Android 8.0 or higher (Tablets only)"; app: "macOS 12 and higher", "Windows 10 and
//    higher", "Android 8.0 and higher, on tablets and Chromebooks"; "If you encounter a WebGL error, try a different
//    browser."; "On tablets, there is currently no way to use "key pressed" blocks or right-click context menus."
//  - 4000155650 why can't I save: "Projects are auto-saved every two minutes"; maximum asset size "(10MB)"; pop-up
//    "Project Failed to Save."; "Copy to New"; "project.json which has its own file size limit of 5MB"; "Save to your
//    computer"; "Load from my computer"; changes to another Scratcher's project "are not actually saved"; network outage.
//  - 4000156781 project size: "There is no limit to the total project size."; assets 10 MB; project.json 5 MB; .sb3 to
//    .zip check; downloaded app has no explicit limits.
//  - 4000156767 signed out (more than one computer, second account in the same browser, cookies disabled);
//    4000161508 cookies; 4000156784 cannot log in ("you can't log in using your email address as a username";
//    student accounts: "Ask your teacher"); 4000156800 sharing needs a confirmed email, ".edu" student addresses;
//    4000156902 cloud variables: "New Scratchers" cannot use them.
//  - 4000156775 domains to allow (*.scratch.mit.edu, *.recaptcha.net, *.gstatic.com, *.wistia.com, *.wistia.net,
//    *.akamaihd.net); 4000156774 CDN shared IP, "Server Name Indication or "SNI"".
//  - 4000156776 phones: "You can play (but not create) Scratch projects on most smartphones"; Chromebook or Android
//    tablet app on Google Play. 4000156846 the Scratch app works offline (formerly "Scratch Offline Editor" or "Scratch
//    Desktop"). 4000156770 double-clicking a file does not open it; open the app, then File > Load from your computer.
//  - 4000158124 decimals: "floating-point error"; try the "round" blocks. 4000156762 and 4000156792 bug reports and the
//    Help with Scripts and Bugs and Glitches forums. 4000208829 search delay, /users/USERNAME.
// Not used: strings that sit only in the site's translation bundles (some are years out of date), the 2020 browser list
// (superseded by the September article), and any meaning for HTTP error numbers (no Scratch source gives one).
// Our own material, labelled on the page: the triage table, the tablet button fix and the rounding fix (written with
// standard Scratch blocks, tested by the reader), the arithmetic 24 / 10 = 2.4, so 3 pieces, and 2 x 60 = 120 seconds.
// Lesson family: debugging by isolating one cause at a time (reproduce, change one thing, test again).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TABLET_BROKEN = `// Cat sprite: works on a laptop, silent on a tablet
when [right arrow v] key pressed
change x by (10)

when [left arrow v] key pressed
change x by (-10)`;

const TABLET_FIXED = `// New sprite "Right button" (ours)
when this sprite clicked
broadcast [go right v]

// New sprite "Left button" (ours)
when this sprite clicked
broadcast [go left v]

// Cat sprite: keep the key scripts, add these
when I receive [go right v]
change x by (10)

when I receive [go left v]
change x by (-10)`;

const ROUNDING = `// Score uses decimals and shows a long tail (ours)
set [price v] to ((0.1) + (0.2))

// Round to two decimal places before showing it
set [shown v] to ((round ((price) * (100))) / (100))
say (shown) for (2) seconds`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'SCRATCH HELP', blurb: 'Scratch not working: the fixes the Scratch Help Center gives for saving, signing in, school networks and tablets, in one place.' },
  slug: 'scratch-not-working-help',
  code: 'snw',
  accent: '#2B5D9E',
  accentRationale: 'Scratch help, US: a steady mid blue #2B5D9E from the US allocation sheet (row 154), calm rather than alarming for a page people reach when something is broken, clear of the pilot accents',
  pageType: 'market',
  market: US,
  routeLabel: 'Scratch not working',
  title: 'Scratch Not Working? Fixes for Saving, Sign-In and Loading',
  description: 'Scratch not working? The official fixes for projects that will not save or load, sudden sign-outs, blocked school networks and tablets, plus two block fixes.',
  ogDescription: 'Projects that will not save, sudden sign-outs, blocked school Chromebooks, key blocks that ignore a tablet: what the Scratch Help Center says, step by step.',
  twitterDescription: 'Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.',
  pageName: 'Scratch Not Working: Help and Fixes',
  webPageDescription: 'A troubleshooting guide for US students, parents and teachers whose Scratch projects will not save, load or share, built from the official Scratch Help Center articles.',
  courseDescription: 'Live online Scratch classes for US children, where a regular teacher helps them plan, build and debug their own projects, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Scratch not working',
  navLinks: [
    { href: '#triage', label: 'What broke' },
    { href: '#devices', label: 'Devices' },
    { href: '#saving', label: 'Saving' },
    { href: '#signin', label: 'Signing in' },
    { href: '#school', label: 'School networks' },
    { href: '#blocks', label: 'Block fixes' }
  ],
  eyebrow: 'United States &middot; Scratch help &middot; Grades 1 to 8',
  h1: 'Scratch not working? How to fix it',
  lede: 'It is 8:40 on a school night, the project is due tomorrow, and Scratch has just said the project failed to save. Or the cat moves on the family laptop but sits still on the school iPad. Or the district Chromebook will not load scratch.mit.edu at all. These problems have known causes, and the Scratch Team explains most of them in its own Help Center. This page gathers those answers in the order you need them: first work out which kind of problem you have, then follow the fix for it. Where Scratch itself is fine and the code is the problem, two worked block fixes show how to think it through.',
  secondaryCta: { href: '#triage', label: 'Find your problem' },
  wa: 'Hello Modern Age Coders, my child in the US keeps getting stuck in Scratch. Could a teacher help them in a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; We teach the idea, the student writes the code',
  spec: [
    ['For', 'Students, parents, teachers'],
    ['Tool', 'Scratch 3, free'],
    ['Covers', 'Saving, sign-in, loading'],
    ['Also', 'School filters, tablets'],
    ['Source', 'Scratch Help Center'],
    ['Classes', 'Ages 6 to 12'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'When Scratch is not working, the usual causes are a browser or device Scratch does not support, a sound or image over 10 MB (or project data over 5 MB) that stops saving, an account signed in on two computers, cookies switched off, or a school filter blocking Scratch domains. Save a copy with File, then Save to your computer, before trying anything else.',

  picks: {
    eyebrow: 'Help with a live teacher',
    h2: 'Three courses for a child who wants to get better at Scratch',
    lede: 'Each class is live, and the teacher works on the child&rsquo;s own project rather than a worksheet.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'SNW / 01', title: 'Scratch coding for kids', note: 'Grades 3 to 8. Games, animation and debugging habits.' },
      { course: 'kids-coding-blocks-masterclass', code: 'SNW / 02', title: 'Coding for kids with blocks', note: 'Ages 6 to 12. Scratch first, then apps and AI.' },
      { course: 'python-ai-kids-masterclass', code: 'SNW / 03', title: 'Python and AI for kids', note: 'The step from Scratch blocks to typed code.' }
    ]
  },

  sections: [
    {
      id: 'triage', tint: 'tint', eyebrow: 'Start here',
      h2: 'Which kind of Scratch problem do you have?',
      lede: 'The Help Center articles behind this page cover six broad groups of problems. Find the row that matches what you see, then jump to that part of the page. Our table, built from the Scratch Help Center articles named below it.',
      body: [
        { kind: 'table', caption: 'Symptom, likely cause and first thing to try (ours, from the Scratch Help Center, read 17 October 2026)', head: ['What you see', 'Most likely cause', 'Try this first'], rows: [
          ['"Project Failed to Save."', 'A sound or image over 10 MB, or project data over 5 MB', 'Save to your computer, then shrink the largest sound'],
          ['Signed out in the middle of work', 'Account open on a second computer, a second account in the same browser, or cookies off', 'Sign out everywhere else, allow cookies for scratch.mit.edu'],
          ['The site will not load at school', 'A network filter blocking a Scratch domain', 'Ask school IT to allow the domains listed further down'],
          ['A WebGL error', 'The browser or its graphics settings', 'Try a different browser, as the Help Center suggests'],
          ['Arrow keys do nothing on an iPad', 'Tablets cannot use "key pressed" blocks', 'Add on-screen buttons (worked fix below)'],
          ['Cannot share, or cloud games will not run', 'Email not confirmed, or a New Scratcher account', 'Confirm the email in Account Settings']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Before you change anything',
          left: [
            'Save a copy on the computer first. In the editor, open File and choose Save to your computer. Whatever goes wrong next, the work is safe in an .sb3 file you can load back with File, then Load from your computer.',
            'Then write down exactly what happened: the message on screen, the browser, the device and whether it happened at home or at school. Those four facts point to the cause faster than any guess.'
          ],
          rightH3: 'Change one thing at a time',
          right: [
            'If you clear cookies, switch browser and delete a sound all at once, you will never know which one fixed it, and the problem may come back next week.',
            'Change one thing, test, and only then try the next. It is the same habit programmers use on their own code, and it is the habit our Scratch classes build from the first month.'
          ] },
        { kind: 'source', html: 'Built from the official <a class="ag-inline-link" href="https://mitscratch.freshdesk.com/en/support/home" rel="noopener" target="_blank">Scratch Help Center</a>, read 17 October 2026; scratch.mit.edu/faq now points there. We are not connected with the Scratch Foundation or MIT.' }
      ]
    },
    {
      id: 'devices', tint: 'deep', eyebrow: 'Devices and browsers',
      h2: 'Will Scratch run on this computer, Chromebook, iPad or phone?',
      lede: 'American classrooms run on a mix of district Chromebooks, iPads and older Windows laptops, so this is often the real answer. The Scratch Team updated its requirements article in September.',
      body: [
        { kind: 'table', caption: 'Where Scratch runs, from the Scratch Help Center article on system requirements (modified September, read 17 October 2026)', head: ['Device', 'Scratch in a browser', 'The downloadable Scratch app'], rows: [
          ['Windows laptop or desktop', 'Windows 10 version 1709 or higher', 'Windows 10 and higher'],
          ['Mac', 'macOS 10.13 or higher', 'macOS 12 and higher'],
          ['Chromebook', 'Recent Chrome', 'The Android and ChromeOS app, Android 8.0 and higher'],
          ['iPad', 'iOS version 10 or higher (Tablets only)', 'Not listed'],
          ['Android tablet', 'Android 8.0 or higher (Tablets only)', 'Android 8.0 and higher'],
          ['Phone', 'Play and comment only', 'No phone app']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The browser rule',
          left: [
            'Scratch develops its features against the Baseline Widely Available web standard, and they are supported on versions of Chrome, Edge, Firefox and Safari released within the last 30 months (2.5 years), on any operating system those browsers support. Other browsers may work but are not officially supported.',
            'In practice that means a browser that has not updated in three years is the first suspect. On a district device, updates are controlled by school IT, so a student cannot always fix this alone.'
          ],
          rightH3: 'Tablets and phones',
          right: [
            'Scratch says it runs on most modern browsers on desktops, laptops and tablets, but it does not currently support creating or editing projects on phones. On a phone you can play most projects and leave comments.',
            'Tablets have two limits worth knowing before a child builds a whole game on one: there is currently no way to use "key pressed" blocks or right-click menus. A game built on a laptop with arrow keys will not respond on an iPad until it has on-screen buttons.'
          ] },
        { kind: 'p', mt: true, html: 'If a project loads but the stage stays blank or shows a WebGL error, the Help Center advice is short: try a different browser.' }
      ]
    },
    {
      id: 'saving', tint: 'tint', eyebrow: 'Saving',
      h2: 'When a Scratch project will not save',
      lede: 'Scratch auto-saves projects every two minutes, and the browser usually warns you before you leave a page with unsaved changes. When saving still fails, the Help Center lists a small number of causes.',
      body: [
        { kind: 'table', caption: 'Size limits on the Scratch website, from the Scratch Help Center (read 17 October 2026)', head: ['Item', 'Limit', 'What happens over it'], rows: [
          ['Whole project', '"There is no limit to the total project size."', 'Nothing by itself'],
          ['One sound or image', '10 MB', 'The project will not save; a "Project Failed to Save." message appears'],
          ['project.json (code and sprite data)', '5 MB', 'A large project with many sprites and scripts may not save'],
          ['The downloaded Scratch app', 'No explicit limit', 'Bounded only by memory and disk space']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Make a backup.</b> File, then Save to your computer. Do this before every other step.',
          '<b>Check the internet.</b> A project may not save if the connection drops while saving. If the whole Scratch site is slow, export the project and try again later; the export is your backup.',
          '<b>Check you are still signed in.</b> If you were signed out, the project cannot save to your account. Sign in again on this computer only.',
          '<b>Check whose project it is.</b> If you opened someone else&rsquo;s project with See inside and started changing it, those changes are not saved. Use Remix to make your own copy first.',
          '<b>Find the big sound.</b> Long music files are the usual problem. In the Sounds tab, select part of the sound, press Copy to New, and repeat until the whole song is in pieces, then play them one after another with play sound until done blocks.',
          '<b>Slim the code.</b> If the project has dozens of near-identical sprites, replace them with one sprite and clones, and turn repeated scripts into a block of your own with Make a Block.',
          '<b>Sign out and back in.</b> After a very long session, the Help Center suggests signing out and in again, once your work is saved to the device.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How many pieces a long song needs',
          left: [
            'Our arithmetic, for planning: a sound file of 24 MB is over the 10 MB limit, and 24 / 10 = 2.4, so it needs at least 3 pieces. In practice we cut one or two more, because each piece must sit comfortably under the limit.',
            'Auto-save every two minutes also means the most a sudden crash usually costs is about two minutes of work, or 2 x 60 = 120 seconds of clicking. Saving manually before a big change costs nothing.'
          ],
          rightH3: 'Checking the size yourself',
          right: [
            'The Help Center describes a check for anyone comfortable with zip files: download the project (it ends in .sb3), rename the ending from .sb3 to .zip, unzip it, and look at the size of each image, sound and the project.json file inside.',
            'The fixes it suggests are simple ones: shorten long lists, remove duplicate sprites and use clones instead, swap images for lower-resolution versions, and cut sounds so none is over the limit.'
          ] }
      ]
    },
    {
      id: 'signin', tint: 'deep', eyebrow: 'Accounts',
      h2: 'Signed out, cannot log in, cannot share',
      lede: 'Account trouble is common in families where a child uses Scratch at school and at home, or where siblings share one laptop.',
      body: [
        { kind: 'table', caption: 'Account problems and the Help Center fix (read 17 October 2026)', head: ['Problem', 'Why it happens', 'Fix'], rows: [
          ['Signed out without warning', 'Signed in on more than one computer, or a second account opened in the same browser', 'Sign out of computers you are done with; one account per browser at a time'],
          ['Signed out right after signing in', 'Cookies are blocked', 'Allow cookies for scratch.mit.edu in the browser settings'],
          ['Password does not work', 'Often the username is typed differently', 'Request a reset at scratch.mit.edu/accounts/password_reset and type the username exactly as the email shows it'],
          ['Tried to log in with an email address', 'Scratch logs in by username', 'Use the username; the Help Center says you cannot log in with your email address'],
          ['Profile says "Student of..."', 'A class account made by a teacher', 'Ask the teacher to reset the password'],
          ['Share button does nothing', 'The email address is not confirmed yet', 'Account Settings, Email tab, resend the confirmation'],
          ['A cloud game will not work', 'Not signed in, or the account is still a New Scratcher', 'Sign in; cloud variables open up once the account becomes a Scratcher']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'School email addresses',
          left: [
            'Many US students sign up with a school address, and many of those end in .edu or block outside mail. The Help Center warns that a student email may not receive messages from Scratch; the Scratch Team can confirm the address if you send them a message, though not for large numbers of accounts.',
            'A password reset email can go astray the same way. If it has not arrived an hour after asking, the Help Center suggests checking the spam folder (in Gmail, the Promotions tab), then using the Contact Us form with the email address and date of birth on the account.'
          ],
          rightH3: 'Shared family computers',
          right: [
            'The Help Center is clear that sharing one account between people is not recommended, because it is a common cause of sign-outs and lost saves. Each child gets their own account.',
            'On a shared computer, sign out at the end of every session. It takes five seconds and prevents the next person from accidentally working inside the wrong account.'
          ] }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'School and district networks',
      h2: 'Scratch blocked on a school Chromebook or network',
      lede: 'District web filters are the reason Scratch loads at home but not in the computer lab. This part is for the teacher or the school IT team, who can change the filter.',
      body: [
        { kind: 'table', caption: 'Domains Scratch needs, from the Scratch Help Center article on domains to allow (modified May 2025, read 17 October 2026)', head: ['If the filter accepts wildcards', 'What it is for (our note)'], rows: [
          ['*.scratch.mit.edu', 'The site, projects, assets, cloud data and downloads'],
          ['*.recaptcha.net and *.gstatic.com', 'Sign-up checks and fonts'],
          ['*.wistia.com, *.wistia.net and *.akamaihd.net', 'Tutorial videos']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Without wildcards',
          left: [
            'The Help Center also lists every subdomain one by one for filters that cannot take wildcards, including api.scratch.mit.edu, projects.scratch.mit.edu, assets.scratch.mit.edu, cdn2.scratch.mit.edu, clouddata.scratch.mit.edu and uploads.scratch.mit.edu. It warns that new subdomains are added often, so the list can go out of date.',
            'If uploads or cloud games fail but the home page loads, a missing subdomain on that list is the likely cause.'
          ],
          rightH3: 'Blocked by a shared address',
          right: [
            'Scratch uses a content delivery network, and its servers can share an IP address with a site the school has blocked. If the filter blocks by IP address and caches the result, Scratch can be blocked by accident.',
            'The Scratch Team recommends filtering by domain name rather than IP address, checking that the filter supports Server Name Indication (SNI), and then clearing the network cache.'
          ] },
        { kind: 'p', mt: true, html: 'Working offline is another route. The free Scratch app creates projects without an internet connection; it used to be called the Scratch Offline Editor or Scratch Desktop. One surprise: double-clicking an .sb3 file does not open it. Open the app first, then choose File, then Load from your computer.' }
      ]
    },
    {
      id: 'blocks', tint: 'deep', eyebrow: 'When Scratch is fine and the code is not',
      h2: 'Two block fixes: tablet controls and long decimals',
      lede: 'Sometimes Scratch works perfectly and the project still misbehaves. We teach these two fixes early because the problems behind them are easy to hit. Both scripts are ours, written with standard Scratch 3 blocks; build them yourself to see the fix work.',
      body: [
        { kind: 'code', label: 'Problem &middot; the cat ignores a tablet', lang: 'scratch blocks', code: TABLET_BROKEN, note: 'Nothing is wrong with these blocks. The Help Center explains that tablets currently have no way to use key pressed blocks, so on an iPad the scripts never start.' },
        { kind: 'code', label: 'Fix &middot; on-screen buttons that broadcast', lang: 'scratch blocks', code: TABLET_FIXED, note: 'Two small arrow sprites send a message when tapped, and the cat moves when it receives the message. The keyboard scripts stay, so the game works on a laptop and a tablet.' },
        { kind: 'code', label: 'Fix &middot; rounding before you show a number', lang: 'scratch blocks', code: ROUNDING, note: 'The Help Center calls the long tail of digits a floating-point error and suggests the round block. Multiplying by 100, rounding, then dividing by 100 keeps two decimal places.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the broadcast fix teaches more than it fixes',
          left: [
            'Broadcasting separates what happens from what caused it. The cat no longer cares whether the signal came from a key or a finger; it only listens for go right.',
            'That idea, one message and many possible senders, is how real apps handle a click, a tap and a voice command with the same code. Children who meet it in Scratch recognize it later in JavaScript and Python.'
          ],
          rightH3: 'Why computers struggle with 0.1',
          right: [
            'The Help Center gives the reason in one line: it is very hard to represent .1 in binary. Computers store most decimals as approximations, so adding them can leave a tiny error at the end.',
            'This is not a Scratch bug, and every language has it. Rounding at the moment you display a number, not while you calculate, is the habit to keep.'
          ] }
      ]
    },
    {
      id: 'report', tint: '', eyebrow: 'Still stuck',
      h2: 'Where to get help, and how to report a real bug',
      lede: 'If none of the fixes above work, the Scratch community and the Scratch Team can help, as long as the request is specific.',
      body: [
        { kind: 'ol', items: [
          '<b>Search first.</b> The Bugs and Glitches forum may already have your problem and a fix. The Help with Scripts forum is the place for project code that does not behave.',
          '<b>Share a small example.</b> The Help Center suggests sharing the project, even unfinished, and putting your question in the Project Notes so others can see it.',
          '<b>Describe the bug fully.</b> Include what went wrong, the steps to make it happen again, the project, your browser and its version, your operating system and its version, your Scratch username and any error you saw.',
          '<b>Check the console if you are comfortable.</b> The Help Center invites people to open the JavaScript console and include any errors shown there.',
          '<b>Wait for search.</b> A newly shared project can take a little time to appear in search. Typing scratch.mit.edu/users/ followed by the username opens the profile straight away.'
        ] },
        { kind: 'p', mt: true, html: 'For more on fixing your own code, read our guide on <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>, or see <a class="ag-inline-link" href="/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced">Scratch project ideas</a> when the current project is finally working.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From stuck to independent',
    h2: 'Four stages of fixing your own Scratch problems',
    lede: 'Our description of the troubleshooting stages we teach toward, one stage at a time.',
    table: { caption: 'Stages of a young Scratch troubleshooter (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Panics', 'Sees an error and calls for an adult straight away'],
      ['2. Saves first', 'Exports a copy before trying anything, then asks for help'],
      ['3. Tests one change', 'Changes a single thing, runs the project, and notes the result'],
      ['4. Explains the cause', 'Can say why it broke, and posts a clear question when stuck']
    ] },
    left: { h3: 'For parents', ps: [
      'You do not need to know Scratch to help at stage 1. Ask your child to read the message out loud and find it in the table at the top of this page.',
      'Praise stage 2 loudly. A child who saves a copy before experimenting has learned the most important habit in all software work.'
    ] },
    right: { h3: 'For students', ps: [
      'If the code is graded homework, ask your teacher before you post it online; your teacher may want the work to stay yours.',
      'Keep a short bug diary: what broke, what fixed it. You will be surprised how often the same three problems return.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine courses for children who started in Scratch',
    lede: 'Live and online, with the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Ages 6 to 12', courses: [
        { code: 'SNW / BLK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games, stories and clean scripts.' },
        { code: 'SNW / BLK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding with blocks', blurb: 'Scratch, then apps.' },
        { code: 'SNW / BLK / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Phone apps from blocks.' }
      ] },
      { num: 'II', h3: 'Next steps', sub: 'Ages 8 to 12', courses: [
        { code: 'SNW / NXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' },
        { code: 'SNW / NXT / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Bigger games, better design.' },
        { code: 'SNW / NXT / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites, by hand.' }
      ] },
      { num: 'III', h3: 'Thinking skills', sub: 'Ages 6 to 14', courses: [
        { code: 'SNW / THK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Break a problem into steps.' },
        { code: 'SNW / THK / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Luau', blurb: 'Events in a 3D world.' },
        { code: 'SNW / THK / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks inside a game they know.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times',
    h2: 'A teacher who helps your child get unstuck, live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches that fit Eastern, Central, Mountain and Pacific time.' },
      { time: 'Weekends', l: 'Weekend mornings are a popular choice for younger children.' },
      { time: '1-on-1', l: 'One child, one teacher, a time you pick.' }
    ],
    cells: [
      { h3: 'Their project on screen', p: 'Children share the editor and fix it themselves.' },
      { h3: 'Concepts, not answers', p: 'Graded work stays the student&rsquo;s own.' },
      { h3: 'Debugging every week', p: 'Save, test one change, explain the cause.' },
      { h3: 'One teacher all term', p: 'Someone who knows your child&rsquo;s projects.' },
      { h3: 'Any US state', p: 'All you need is a browser and a quiet room.' },
      { h3: 'Group or private', p: 'Batches of fifteen to twenty, or a teacher to themselves.' }
    ]
  },

  projectsH2: 'What our students made after getting unstuck',
  projectsLede: 'Finished work from learners who once had the same Scratch troubles. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents in their own words, copied from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Scratch is free and so is this page. If your child wants a teacher beside them, you pay month by month in US dollars, with no long contract, and you can stop after any month.',
    free: ['A free first lesson', 'Bring the broken project', 'No card needed'],
    group: ['Fifteen to twenty in a batch', 'The same teacher each week', 'Pick your batch time', 'Billed monthly'],
    one: ['One child, one teacher', 'Times that suit you', 'Built around their projects']
  },

  faq: {
    eyebrow: 'Common questions',
    h2: 'Scratch not working: questions families ask',
    items: [
      { q: 'Why is Scratch not working?', a: 'The common causes are an unsupported or out-of-date browser, a project that is too large to save, being signed out because the account is open on another computer, cookies switched off, or a school filter blocking Scratch domains. Save a copy to the computer first, then check each cause one at a time.' },
      { q: 'Why won\'t my Scratch project save?', a: 'Scratch will not save a project with a sound or image over 10 MB, and project.json has a 5 MB limit. Saving also fails if the internet drops, if you were signed out, or if you are editing someone else\'s project without remixing it first.' },
      { q: 'Why does Scratch keep signing me out?', a: 'The Help Center lists three reasons: the account is signed in on more than one computer, a second account is signed in on the same browser, or cookies are disabled. Sign out of other computers and allow cookies for scratch.mit.edu.' },
      { q: 'Does Scratch work on a Chromebook?', a: 'Yes. Scratch runs in recent versions of Chrome, and the Scratch app for Android and ChromeOS supports Android 8.0 and higher on Chromebooks. On a school Chromebook, the district filter may still need to allow the Scratch domains.' },
      { q: 'Can you use Scratch on an iPad or a phone?', a: 'On a tablet, yes, with two limits: key pressed blocks and right-click menus do not work. On a phone you can play projects and comment, but Scratch does not currently support creating or editing projects on phones.' },
      { q: 'Why is Scratch blocked at school?', a: 'Usually the school network filter is blocking one of the Scratch domains, or blocking an IP address that Scratch shares through its content delivery network. The Help Center lists the domains to allow; school IT can add them.' },
      { q: 'Can I use Scratch without the internet?', a: 'Yes. The free Scratch app lets you create projects offline. To open a saved project, start the app first and choose File, then Load from your computer, because double-clicking the file does not open it.' },
      { q: 'Why can\'t I share my Scratch project?', a: 'You need to confirm your email address before you can share. Resend the confirmation from Account Settings, Email tab. Some school email addresses do not receive Scratch messages, and the Scratch Team can confirm them if you contact it.' },
      { q: 'Will you do my Scratch homework for me?', a: 'No. We never write graded assignments for students. A teacher explains the idea behind the problem, for example broadcasts or rounding, so the student can solve their own project and explain it.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Scratch classes cost?', a: 'The first lesson is free. After that, teaching is paid one month at a time, and the fees section of this page shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Pages for US families once Scratch is behaving again.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'How our live Scratch lessons run.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The index of our US pages.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python?', p: 'When a child is ready to type code.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'The same habits, for any language.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'Every course for ages 6 to 14.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Where many Scratch fans go next.' },
      { href: '/makecode-arcade-help-for-students', label: 'MakeCode Arcade help', p: 'MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.' },
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live classes', p: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what your child was building when Scratch let them down. The teacher opens that project in the first lesson and works through it with them.',
    readFirst: 'Curious how a lesson actually goes? Our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through one, and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus in full.',
    note: 'Lessons are taught live over video by teachers based in India, so families in every US state join from home. WhatsApp is the fastest way to reach us.',
    formNote: 'Free first lesson. We will not ask for payment details.'
  },

  footer: {
    cols: [
      { h4: 'Scratch and blocks', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced', label: 'Scratch project ideas' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' }
      ] }
    ],
    bottomRight: 'Save a copy, change one thing, test again'
  },

  personalityCss: `
.ag-root.ag-snw .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-snw .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-snw .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-snw .ag-table caption { text-align: left; }
.ag-root.ag-snw .ag-steps li { line-height: 1.6; }
.ag-root.ag-snw .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Help Center (mitscratch.freshdesk.com, linked from scratch.mit.edu/contact-us), read raw on 17 October 2026: system requirements (browsers released within the last 30 months, OS minimums, app minimums, WebGL, tablet key pressed limit); save failures (auto-save every two minutes, 10 MB asset, 5 MB project.json, signed out, outage, editing another project); size check; sign-out causes; cookies; log in by username; sharing needs a confirmed email; New Scratchers and cloud variables; domains to allow; CDN and SNI; offline app; floating-point error; bug report checklist.',
    localProject: 'A triage table (ours) mapping six symptoms to causes and first fixes; a tablet-controls fix with broadcast buttons and a two-decimal rounding fix, both ours in standard Scratch 3 blocks; arithmetic 24 / 10 = 2.4 so 3 pieces, and 2 x 60 = 120 seconds. Lesson family: debugging by isolating one cause at a time.',
    requiredMentions: ['released within the last 30 months (2.5 years)', 'Windows 10 version 1709 or higher', 'macOS 10.13 or higher', 'There is no limit to the total project size.', 'project.json', 'auto-saves projects every two minutes', '*.recaptcha.net', 'Server Name Indication (SNI)', 'cannot log in with your email address', 'broadcast [go right v]', '24 / 10 = 2.4', 'New Scratcher'],
    sources: [
      { claim: 'Browsers, operating systems, app requirements, WebGL, tablet limits, phones.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156845-what-are-the-system-requirements-for-scratch-' },
      { claim: 'Why a project will not save: auto-save, 10 MB assets, 5 MB project.json, sign-outs, outages, editing others.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000155650-why-can-t-i-save-my-project-' },
      { claim: 'Size limits and the .sb3 to .zip check.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156781-how-do-i-reduce-or-check-my-project-s-size-' },
      { claim: 'Domains a school network must allow.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156775-what-domains-do-i-need-to-allow-to-access-scratch-' },
      { claim: 'CDN shared IP addresses and SNI.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156774-why-does-scratch-appear-to-be-associated-with-a-different-site-which-our-content-filter-has-blocked-' },
      { claim: 'Sign-out causes and cookies.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156767-why-did-i-get-signed-out-' },
      { claim: 'Password resets, usernames and student accounts.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000156784-what-do-i-do-if-i-can-t-log-in-with-my-password-' },
      { claim: 'Floating-point results and the round block.', url: 'https://mitscratch.freshdesk.com/en/support/solutions/articles/4000158124-how-come-math-with-decimals-gives-me-results-with-too-many-digits-' }
    ],
    rejectedClaims: [
      'Meanings for Scratch error 403, 429 or 500 (searched): no Scratch source explains them, so none are printed.',
      'The older browser list (Chrome 63+, Edge 15+ and so on) from a 2020 article: superseded by the September system requirements article.',
      'Strings found only in scratch.mit.edu translation bundles, such as an old promise of a Chromebook desktop app: some are years out of date and may not be shown on any page.',
      'A Windows direct-download status for the Scratch app: only seen in a bundle string, not confirmed on a page.',
      'That we tested the block scripts on this page: they use standard Scratch 3 blocks and the reader builds them.',
      'Any affiliation with the Scratch Foundation or MIT: none, and the page says so.'
    ]
  }
};
