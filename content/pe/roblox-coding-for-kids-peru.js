// SHIP: market | Roblox coding for kids in Peru, in English: account types, Luau, Studio at home, a course plan | 3D distance in a coin pickup: a per-axis box check against Pythagoras, then squared distance
'use strict';
// Roblox coding for kids in Peru (ag- English door, Peru cluster row PE068, hubGroup subjects; alloc rck, #006949).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Search: "roblox coding classes for kids peru", English twin of "clases de programacion para niños roblox" (KEYWORDS.md
// section 2: Roblox beats Minecraft in Peru). The Spanish sibling (programacion-roblox-para-ninos-en-ingles, not live yet) walks
// through Studio, the parents page and debounce; this page takes its own spine: which Roblox account a child of each age has
// (Roblox's own Safety Center, 2026), what kind of language Luau is and how it differs from Python, what a Peruvian home needs to
// run Studio, a six-month plan, and a lesson on distance in three dimensions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/roblox-coding-for-kids-peru/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - Roblox Safety Center (corp.roblox.com/safety, safety.html): "Our users range in age from 5 to over 25+ years old.";
//    "Roblox Kids (5-8 year olds in most regions) and Roblox Select (9-15 year olds in most regions)"; "Please be aware that
//    Roblox accounts, settings, and controls vary by region."; "Only games with our lowest maturity ratings are available in
//    Roblox Kids accounts."; "Chat is turned off in Roblox Kids accounts."; "Games in Roblox Select accounts can have maturity
//    ratings up to Moderate."; "Voice Chat is not available for users ages 9-12."; "Users ages 9-12 can only use the Chat tab
//    with trusted friends."; "Video Chat is not available in any region."
//  - Roblox parents page (corp.roblox.com/parents, copied from the sibling's raw folder): "Parents can choose the maximum rating
//    for games their child can play."; "Parents can set monthly spending limits"; "Screen time limits allow you to restrict the
//    amount of time that your child is permitted to spend on Roblox each day."
//  - Creator Hub, Scripting (create.roblox.com/docs/scripting, scripts.html): "Roblox scripts use the Luau programming language,
//    which is derived from Lua 5.1"; "Luau is gradually typed"; "Arrays are one-based rather than zero-based, so the first item is
//    [1]"; "it's almost always better to declare variables and functions locally with the local keyword".
//  - Creator Hub, Luau (create.roblox.com/docs/luau): "Luau is the scripting language creators use in Roblox Studio."
//  - Creator Hub, Studio setup (create.roblox.com/docs/studio/setup): "a free application available on Windows and Mac";
//    minimum "Windows 10 macOS 10.14", "Memory (RAM) 3 GB 8 GB", "Resolution 1600×900 or higher".
//  - Creator Hub, Vector3 (create.roblox.com/docs/reference/engine/datatypes/Vector3): property "Magnitude : number".
//  - Creator Hub, Roblox Education (create.roblox.com/docs/education): "We offer free software and curriculum to teach students
//    of all ages computer science".
//  - BLOCKED (not retried): www.roblox.com/info/terms and en.help.roblox.com returned 403 to a sibling writer on 9 November 2026;
//    so no platform minimum age from the terms is printed. Roblox's own age bands come from the Safety Center page above.
//  - INEI, TIC en los Hogares II Trimestre 2026 (MARKET 1.4): "el 36,4% de los hogares del país disponía de al menos una
//    computadora"; Cuadro 2.1 row 12 a 18 años "89,7 91,4 90,7 92,5".
//  - MINEDU Edades normativas (FACTS 13, 14): age on 31 March; 3° primaria 8, 6° primaria 11, 1° secundaria 12, 3° 14.
//  - CNEB (FACTS 32, 33): competency 28 "Crea objetos virtuales en diversos formatos", transversal.
//  - EF EPI 2025 Peru page (MARKET 1.3): Lima 555 (high band from 550).
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv): India 10 h 30 min ahead all year.
// Our own example (coins.py in the src-pages folder, run with python3 -I, Python 3.14): the box check prints coins A, B, C and D
// "collected"; the distance check prints "coin A: 10.00 studs, collected", "coin B: 12.73 studs, too far", "coin C: 8.31 studs,
// collected", "coin D: 7.00 studs, collected"; the squared check prints "coin B: 162 <= 100 is False".
// Lesson family: 3D distance. A pickup written as three separate axis checks (a box) collects a corner coin that is 12.73 studs
// away; Pythagoras in three dimensions fixes it; comparing squared distance with the squared radius gives the same answers
// without a square root. In Luau the same check is (coin.Position - root.Position).Magnitude <= 10.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const BOX = [
  'player = (0, 3, 0)',
  'coins = {"A": (6, 3, 8), "B": (9, 3, 9), "C": (2, 10, 4), "D": (-7, 3, 0)}',
  'RADIUS = 10',
  '',
  'print("Box check, one axis at a time:")',
  'for name, (x, y, z) in coins.items():',
  '    dx, dy, dz = x - player[0], y - player[1], z - player[2]',
  '    if abs(dx) <= RADIUS and abs(dy) <= RADIUS and abs(dz) <= RADIUS:',
  '        print("  coin", name, "collected")'
].join('\n');

const BOX_OUT = [
  'Box check, one axis at a time:',
  '  coin A collected',
  '  coin B collected',
  '  coin C collected',
  '  coin D collected'
].join('\n');

const DIST = [
  'import math',
  '',
  'print("Distance check, Pythagoras in 3D:")',
  'for name, (x, y, z) in coins.items():',
  '    dx, dy, dz = x - player[0], y - player[1], z - player[2]',
  '    distance = math.sqrt(dx * dx + dy * dy + dz * dz)',
  '    verdict = "collected" if distance <= RADIUS else "too far"',
  '    print(f"  coin {name}: {distance:.2f} studs, {verdict}")'
].join('\n');

const DIST_OUT = [
  'Distance check, Pythagoras in 3D:',
  '  coin A: 10.00 studs, collected',
  '  coin B: 12.73 studs, too far',
  '  coin C: 8.31 studs, collected',
  '  coin D: 7.00 studs, collected'
].join('\n');

const LUAU = [
  '-- the same rule inside Roblox Studio, in Luau',
  'local RADIUS = 10',
  'local function canCollect(coin, root)',
  '\treturn (coin.Position - root.Position).Magnitude <= RADIUS',
  'end'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Roblox coding for kids' },
  slug: 'roblox-coding-for-kids-peru',
  code: 'rck',
  accent: '#006949',
  accentRationale: 'Roblox coding for kids in Peru: a deep jungle green #006949, the colour of the selva on the eastern slopes, dark enough to carry white text and calm beside the bright colours of Roblox screenshots; contrast is above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Roblox coding for kids in Peru',
  title: 'Roblox Coding for Kids in Peru: Live Classes in English',
  description: 'Roblox coding for kids in Peru: live Roblox Studio and Luau classes taught in English, ages 8 to 14, in a group or one to one, at any hour that suits Peru time.',
  ogDescription: 'Which Roblox account a child of each age has, what Luau is, what a Peruvian home needs to run Roblox Studio, a six-month plan and a lesson on distance in three dimensions.',
  twitterDescription: 'Live Roblox Studio and Luau classes for children in Peru, taught in English, in a group or one to one, at flexible hours.',
  pageName: 'Roblox Coding for Kids in Peru',
  webPageDescription: 'A guide for families in Peru whose children want to build Roblox games rather than only play them, built from the Roblox Safety Center and Creator Hub pages, INEI household technology data for 2026, MINEDU normative ages, the CNEB and the tz database, with an original lesson on distance in three dimensions.',
  courseDescription: 'Live online Roblox coding classes for children aged 8 to 14 in Peru, taught in English by mentors based in India: Roblox Studio, Luau scripting, events, scores, shops and a published game, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Roblox coding for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#accounts', label: 'Accounts by age' },
    { href: '#luau', label: 'Luau' },
    { href: '#home', label: 'At home' },
    { href: '#lesson', label: 'Coin lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 8 to 14 &middot; Roblox Studio and Luau, live in English',
  h1: 'Roblox coding for kids in Peru',
  lede: 'Most children in Peru who love Roblox have spent hundreds of hours inside other people\'s games. Very few have opened Roblox Studio and made one of their own. This page is for families who want that second thing: a child who scripts the door, the coin and the countdown rather than waiting for someone else to. It explains the Roblox accounts children have at each age, the language they will write, what your computer needs, and how a real lesson runs.',
  secondaryCta: { href: '#lesson', label: 'See the coin lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and our child would like to learn Roblox coding in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 4.9 from about 547 Google reviews &middot; every script typed by the child, never pasted',
  spec: [
    ['Ages', '8 to 14'],
    ['Tools', 'Roblox Studio and Luau'],
    ['Length', 'About six months'],
    ['Format', 'Live video, in English'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Robux needed', 'None, at any stage']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Children in Peru aged 8 to 14 can learn Roblox coding with Modern Age Coders in live online classes, in English. A mentor in India follows the shared screen as the child builds in Roblox Studio and scripts in Luau, the language that runs every Roblox game. In roughly six months the child goes from placing a first part to scripted doors, scoreboards, a shop and a finished game published on Roblox. Lessons run in groups of fifteen to twenty or one to one, at any hour your family picks on the Peru clock; the opening lesson costs nothing.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for children who want to build in Roblox',
    lede: 'The first is the Roblox course itself. The other two suit a child who is younger or who has not yet chosen a favourite game world.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RCK / 01', title: 'Roblox Game Coding in Luau', note: 'Ages 8 to 14, about six months. Studio skills first, then Luau from zero, then events, leaderboards, a shop and timed rounds, ending in a game the child publishes and presents.' },
      { course: 'game-development-masterclass-for-kids', code: 'RCK / 02', title: 'Game Development: Scratch, Roblox, Minecraft', note: 'Ages 8 to 12. A tour of three game worlds for the child who is not sure yet where they want to build; Roblox arrives once the logic is in place.' },
      { course: 'kids-coding-blocks-masterclass', code: 'RCK / 03', title: 'Coding for Kids with Blocks', note: 'Ages 6 to 12. For a seven or eight year old who still reads slowly: sequence, loops and conditions with blocks, the same ideas Luau will ask for a few months later.' }
    ]
  },

  sections: [
    {
      id: 'build',
      eyebrow: 'Playing or building',
      h2: 'Can kids really learn to code with Roblox?',
      lede: 'Yes, once they move from the Roblox app into Roblox Studio. The app is for playing; Studio is the free editor in which every Roblox game is made, and the code inside it is real code.',
      body: [
        { kind: 'two',
          leftH3: 'What changes when a child opens Studio',
          left: [
            'In the game, a lava floor simply hurts you. In Studio, your child places the floor, names it, and writes the few lines that decide what happens when a player touches it. The question stops being "how do I win?" and becomes "what should happen, and how do I tell the computer?"',
            'That second question is programming. Roblox describes scripts as files that "add custom, dynamic behavior" to games: responding to player input, saving data, building leaderboards. A child who has played for years already knows what those things should feel like, which is a large head start.'
          ],
          rightH3: 'What it does not do on its own',
          right: [
            'Studio does not teach. A child alone with it tends to copy scripts from videos, paste them in, and feel stuck the first time one breaks. Nothing in that loop builds the habit of reading an error or predicting what a line will do.',
            'A live mentor supplies the missing piece. They ask the child to say what the script should do before running it, and when it fails, to read the Output window aloud and guess why. Roblox itself offers "free software and curriculum to teach students of all ages computer science"; our job is to turn that material into steady thinking, week after week.'
          ] },
        { kind: 'p', mt: true, html: 'Families comparing Roblox with other first steps can read our guide to <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>, which covers how to judge any live class for a child of 6 to 12.' }
      ]
    },
    {
      id: 'accounts',
      tint: 'tint',
      eyebrow: 'Accounts by age',
      h2: 'Is Roblox safe for kids, and which account does my child have?',
      lede: 'Roblox now gives younger users separate, more controlled accounts, and what a child can do depends on that account. Here is how Roblox describes the two youngest tiers on its own Safety Center page.',
      body: [
        { kind: 'table', numCols: [], caption: 'Roblox Kids and Roblox Select accounts, as described by Roblox (2026)', head: ['Setting', 'Roblox Kids', 'Roblox Select'], rows: [
          ['Ages, in most regions', 'From 5 up to 8', '9 to 15'],
          ['Games available', 'Only the lowest maturity ratings (Minimal and Mild)', 'Ratings up to Moderate; parents of 9 to 12 year olds can lower it'],
          ['Chat in games', 'Off unless a parent turns it on', 'On with age-appropriate users and trusted friends'],
          ['Chat tab', 'Off outside games', 'Ages 9 to 12: trusted friends only'],
          ['Voice chat', 'No voice setting described', 'Not available at 9 to 12; off at 13 to 15 unless a parent turns it on'],
          ['Parental controls', 'All settings, through a linked parent account', 'Parents see all settings and manage direct chat']
        ] },
        { kind: 'source', html: 'Source: Roblox Corporation, Roblox Safety Center, corp.roblox.com/safety, read on 9 November 2026. Roblox notes that "accounts, settings, and controls vary by region", so check the settings on your child\'s own account in Peru.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a coding class',
          left: [
            'Roblox says its users "range in age from 5 to over 25+ years old", which is why it built these tiers. For our classes the account matters less than you might expect: building happens in Studio, on the child\'s own private copy of a game, and nobody from outside joins a lesson.',
            'We ask that a parent creates or checks the account before the first class and keeps the login. Roblox\'s parents page also lets a parent "choose the maximum rating for games their child can play", set monthly spending limits and set screen time limits for each day.'
          ],
          rightH3: 'What we never ask for',
          right: [
            'No Robux, no paid membership and no purchases at any point in the course. Every part, script and test place a child needs is free.',
            'No chat with strangers. Testing a game happens inside Studio, alone or with the mentor watching the shared screen. When a child publishes the final game, the parent decides who may see it.'
          ] }
      ]
    },
    {
      id: 'luau',
      eyebrow: 'The language',
      h2: 'What language is Roblox coded in, and is it a real one?',
      lede: 'Roblox games run on Luau. Roblox calls it "the scripting language creators use in Roblox Studio", derived from Lua 5.1, and everything a child learns in it carries over to other languages later.',
      body: [
        { kind: 'two',
          leftH3: 'Luau in plain terms',
          left: [
            'Lua is a small, fast language that has been built into games and programs for decades. Luau is Roblox\'s own version of it, extended with features such as an optional typing system. Roblox describes it as "gradually typed": a beginner can write <code>local score = 0</code> without naming a type, and an older student can add types later to catch mistakes earlier.',
            'Roblox\'s own advice is that "it\'s almost always better to declare variables and functions locally with the local keyword". We teach that from the first script, so children learn early that where a name lives in a program matters.'
          ],
          rightH3: 'Luau beside Python',
          right: [
            'Children who later move to Python find most ideas familiar: variables, if, loops, functions, lists. One difference catches almost everyone. In Luau, Roblox writes, arrays "are one-based rather than zero-based, so the first item is [1]". In Python the first item is <code>[0]</code>.',
            'We point that out on purpose rather than letting it surprise a child later. Knowing that two languages count differently, and why, is exactly the kind of understanding that separates a coder from someone who memorised one tool.'
          ] },
        { kind: 'p', mt: true, html: 'Because Roblox Studio, its menus, its documentation and its error messages are all in English, a child who learns Roblox in English never has to translate between the lesson and the tool. For a family in Peru that is also daily listening practice with a purpose, since a script built on a misheard instruction simply does nothing.' }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'At home in Peru',
      h2: 'What does my child need at home to code in Roblox?',
      lede: 'A Windows or Mac computer. Roblox Studio does not run on phones or tablets, and most Chromebooks cannot run it either, so a family planning Roblox classes should check the computer first.',
      body: [
        { kind: 'two',
          leftH3: 'Roblox\'s own minimum',
          left: [
            'Roblox lists Studio as "a free application available on Windows and Mac". The minimum it publishes is Windows 10 or macOS 10.14 with 3 GB of memory, and it recommends 8 GB. The screen should be at least 1600 by 900 pixels.',
            'That screen size matters more than it sounds. Studio shows the game world, the Explorer, the Properties panel and the script all at once, and in class the video call needs room too. On a small laptop screen a child spends half the lesson moving windows.'
          ],
          rightH3: 'The Peruvian picture',
          right: [
            'In the second quarter of 2026, INEI counted a computer of any kind in just 36.4% of homes across Peru. Many families with keen Roblox players therefore have a phone and a tablet but no machine that can run Studio, and it is better to know that before booking.',
            'If your computer is shared, pick a class hour when it is free; flexible timing makes that easy. A headset with a microphone helps more than any other accessory, because the child can hear the mentor clearly over a busy house.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check the computer.</strong> Windows 10 or later, or macOS 10.14 or later, with 8 GB of memory if possible.',
          '<strong>Install Roblox Studio</strong> from Roblox\'s own site and sign in with the child\'s account.',
          '<strong>Check the account settings</strong> together: maturity rating, chat and spending limits.',
          '<strong>Book the free class</strong> at an hour when the computer and a quiet corner are both free.',
          '<strong>In the first lesson</strong> the mentor checks that Studio opens, the Output window is visible and the shared screen works.'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Six months',
      h2: 'What does a Roblox coding course for kids cover?',
      lede: 'Our Roblox course runs for about six months, in three phases. Each phase ends with something the child has built and can show at home.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Months 1 and 2: Studio and first scripts', p: 'Parts and properties, building a small world, then Luau from zero: variables, decisions, loops and functions. The first script makes a part change colour; by the end of month two the child writes short functions alone.' },
          { h3: 'Months 3 and 4: events and score', p: 'The Touched event, doors and buttons, then leaderboards, collectible coins, checkpoints and simple on-screen interfaces. This is where the coin lesson below lives, and where a scripted obstacle course becomes a real game.' },
          { h3: 'Months 5 and 6: mechanics and publishing', p: 'A shop, timers and rounds, sound and light, then a capstone the child designs, builds in two sprints, tests, tunes and publishes. The last lesson is a short presentation in English to the mentor and family.' }
        ] },
        { kind: 'p', mt: true, html: 'Every phase uses the same routine: the child says what the script should do, writes it, runs it, and explains the difference between the plan and the result. By month six most children can read an error message in the Output window and find the line it points to without help. That is the skill we care about most, because it outlasts Roblox.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A lesson from month four',
      h2: 'How does a Roblox lesson teach real maths?',
      lede: 'Through problems the game creates. Here is one from the collectibles week: a player should pick up any coin within 10 studs, Roblox\'s unit of distance. Most children\'s first solution works nearly all the time, and the interesting part is the coin it gets wrong.',
      body: [
        { kind: 'two',
          leftH3: 'The first idea',
          left: [
            'Children usually reason one direction at a time: the coin is close enough if it is within 10 studs left or right, within 10 up or down, and within 10 forwards or back. In code, that is three comparisons joined by <code>and</code>.',
            'We rebuild the idea in Python first, outside Roblox, with four coins at positions we chose. The player stands at (0, 3, 0). It is quicker to test there, and the maths is identical.'
          ],
          rightH3: 'The question the mentor asks',
          right: [
            'Before running anything, the mentor asks: "Which coins do you think are inside 10 studs?" Then the child runs the box check and sees all four collected, including coin B at (9, 3, 9).',
            'Next question: "Is B really 10 studs away or less?" The child walks it out on paper. B is 9 studs along one way and 9 along the other, so it sits on the diagonal of a square. The diagonal is longer than either side.'
          ] },
        { kind: 'code', label: 'Version 1: three separate checks (a box)', lang: 'Python', code: BOX },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: BOX_OUT, note: 'Exact output of our run with Python 3. All four coins pass, because a box of side 20 includes its corners.' },
        { kind: 'code', label: 'Version 2: real distance, Pythagoras in three dimensions', lang: 'Python', code: DIST },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: DIST_OUT, note: 'Exact output of our run. Coin B is 12.73 studs away and is now refused; coin A sits exactly on the edge at 10.00 and still counts, because we wrote &lt;= and not &lt;.' },
        { kind: 'p', mt: true, html: 'The box check was wrong only near the corners, which is why nobody noticed it in testing. The mentor asks the child to name the rule in their own words: <strong>a pickup radius is a sphere, and only Pythagoras measures a sphere</strong>. Older students then meet a trick game programmers use: compare the squared distance with the squared radius and skip the square root. For coin B, <code>162 &lt;= 100</code> is False, the same answer with less work.' },
        { kind: 'code', label: 'Back in Roblox Studio: the same rule in Luau', lang: 'Luau', code: LUAU, note: 'Roblox\'s Vector3 type has a Magnitude property, the length of a vector, which is this Pythagoras calculation done for you. A child who has worked through the Python version knows what Magnitude means instead of trusting it blindly.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 and 9.</strong> On squared paper, mark a player and three coins. Use a ruler to check which are within 10 squares, and see that the corner coin fails.',
          '<strong>Ages 10 and 11.</strong> Run Version 1 and Version 2. Move coin B to (7, 3, 7) and predict both results before running.',
          '<strong>Ages 12 to 14.</strong> Add a fifth coin that the box check refuses but the distance check accepts. Then explain why that is impossible.'
        ] }
      ]
    },
    {
      id: 'age',
      eyebrow: 'The right age',
      h2: 'What age is right for Roblox coding, and when should Python come in?',
      lede: 'Eight is a comfortable start for Roblox Studio, with fourteen as our upper age for the kids\' course. In Peruvian school terms that runs from about 3rd grade of primaria to 3rd of secundaria.',
      body: [
        { kind: 'two',
          leftH3: 'Ages and grades',
          left: [
            'MINEDU places children by their age on 31 March of each school year. On its normative-age table a child of 8 is in 3rd grade of primaria, a child of 11 in 6th grade and a child of 12 in 1st of secundaria. We place children by age and starting level, not by grade, but the table helps parents picture the step.',
            'Below eight, reading speed is usually the limit: Studio\'s menus and Luau\'s error messages are text. Younger children do better starting with blocks and arriving at Roblox later with the logic already in place.'
          ],
          rightH3: 'Roblox and Python together',
          right: [
            'Roblox is not a dead end. Children aged about 11 and up often run Roblox and Python side by side: the same loop or condition written twice, in two languages, makes the idea clearer than either alone. The coin lesson above is built that way.',
            'Our page on <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a> sets out a first year of typed Python by grade, and the Spanish-language guide for <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">12 year olds in 1st of secundaria</a> shows how Python and Luau sit together at that age.'
          ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking first',
      h2: 'Will my child just copy Roblox scripts from videos or AI?',
      lede: 'Not in our classes. Every line is typed by the child after they have said what it should do, and pasted code is the first thing a mentor notices on a shared screen.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict, then run', p: 'Before pressing Play the child says what the script will do. When the result differs, that difference is the lesson, as with coin B above.' },
          { h3: 'Tools that fit the age', p: 'No child here signs in to an adult AI service. Anthropic sets 18 as the minimum age for Claude, and OpenAI wants a parent to agree before anyone younger uses ChatGPT.' },
          { h3: 'One standard everywhere', p: 'A child in Lima, Trujillo or Iquitos gets the same mentors, the same course and the same patience. In Peru, where you live changes only the hour on the clock.' }
        ] },
        { kind: 'p', mt: true, html: 'Roblox Studio is adding AI features of its own. Older students learn what such tools do and why their output must be read and tested, but only after they can write the script themselves. A child who can explain every line of their game owns it; a child who pasted it cannot fix it when it breaks.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'What time are Roblox classes in Peru?',
      lede: 'Whenever suits your family. Peru stays five hours behind UTC all year and India five and a half hours ahead, so the mentor\'s clock reads ten and a half hours later than yours on every day of the year. The table only converts hours; it is not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Some Peru hours shown in India time (conversions, not class slots)', head: ['Peru time', 'India time', 'When it often suits'], rows: [
          ['09:00', '19:30', 'Summer-break mornings'],
          ['12:30', '23:00', 'A Saturday before lunch'],
          ['16:00', '02:30, next day', 'Straight after school'],
          ['18:00', '04:30, next day', 'Before the evening meal'],
          ['19:30', '06:00, next day', 'Older children after homework']
        ] },
        { kind: 'source', html: 'Clock rules from the IANA time zone database: America/Lima has kept UTC minus 5 with no summer time since 1994, and Asia/Kolkata keeps UTC plus 5:30. We did the conversions.' },
        { kind: 'p', mt: true, html: 'Booking happens in Peru time; the mentor sees it translated automatically. Lima families can also read about <a class="ag-inline-link" href="/english-medium-coding-classes-lima">coding taught in English for Lima\'s bilingual schools</a>, and the full list of our Peru guides sits on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru coding and AI hub</a>. Bilingual families who prefer to read in Spanish can start from <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do I know my child is becoming a Roblox developer?',
    lede: 'Look at what they build and listen to how they explain it. We wrote these six stages ourselves and use them to place each new child.',
    table: { numCols: [], caption: 'Our Roblox stages for children of 8 to 14', head: ['Stage', 'On screen', 'In their own words'], rows: [
      ['1. Builder', 'Places, sizes and colours parts; groups them into a small world', '"I anchored it so it does not fall."'],
      ['2. First scripts', 'Changes a property from a script; uses a variable and an if', '"When the value is 0, the door opens."'],
      ['3. Events', 'Makes the game react to a touch, a click or a player joining', '"This runs every time someone touches the pad."'],
      ['4. Game state', 'Keeps score, saves checkpoints, shows a timer on screen', '"The leaderboard reads the score from here."'],
      ['5. Mechanics', 'Builds a shop or timed rounds that work for every player', '"I tested it with two players and found the bug."'],
      ['6. Publisher', 'Designs, tests and publishes a complete game', '"Here is my game, how it works and what I would add next."']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to open Studio and show you one script. If they can tell you what each line does, the class is working.',
      'Stage 4 is where most children start inviting family members to test their game. That is a good sign: they want feedback.'
    ] },
    right: { h3: 'For young developers', ps: [
      'Read the red text in the Output window before asking for help. It usually tells you the line number.',
      'When a script works, try to break it on purpose. That is how real game testers find problems before players do.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond Roblox',
    h2: 'Nine more courses for young game makers',
    lede: 'All live, in English, with the same mentor each week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before Roblox', sub: 'Ages 6 to 10', courses: [
        { code: 'RCK / PRE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Blocks, sprites and first games for children not yet ready to type.' },
        { code: 'RCK / PRE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a game idea into steps a computer can follow.' },
        { code: 'RCK / PRE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds inside Minecraft, a gentle route to scripting.' }
      ] },
      { num: 'II', h3: 'Beside Roblox', sub: 'Ages 9 to 14', courses: [
        { code: 'RCK / WITH / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, turtle drawings and child-safe AI projects.' },
        { code: 'RCK / WITH / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Distance, angles and patterns like the coin lesson, in Python.' },
        { code: 'RCK / WITH / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A second game engine with its own language, GDScript.' }
      ] },
      { num: 'III', h3: 'After Roblox', sub: 'Ages 12 and up', courses: [
        { code: 'RCK / NEXT / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, the tools of professional studios.' },
        { code: 'RCK / NEXT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first scripts to real projects, at secundaria pace.' },
        { code: 'RCK / NEXT / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Browser games and interactive pages anyone can open.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A week of Roblox classes from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'During the school year', l: 'Late afternoon in Peru is the usual choice, once the school day and homework are over.' },
      { time: 'January to March', l: 'Summer-break mornings are free for many families; name the hour and we find a mentor.' },
      { time: 'One to one', l: 'A single child and mentor, booked around the family\'s week.' }
    ],
    cells: [
      { h3: 'Studio open, camera on', p: 'The child shares their Studio screen; the mentor sees every click.' },
      { h3: 'Same mentor', p: 'One teacher for the course, who knows the child\'s game by heart.' },
      { h3: 'English kept simple', p: 'Short spoken instructions, repeated on screen in writing.' },
      { h3: 'A build every week', p: 'Each class ends with something new working in the game.' },
      { h3: 'Notes for parents', p: 'A short message after class: the new feature, the stubborn bug.' },
      { h3: 'Group or private', p: 'Fifteen to twenty of a similar age, or one to one.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'Children who keep coding into their teens move from Roblox games to apps, websites and AI projects. Some examples are below, and many more are on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from parents and students, as written on Google.',

  fees: {
    h2: 'Fees for Roblox classes from Peru',
    lede: 'Our prices are fixed in US dollars and charged to a card. Whatever rate your bank applies that day decides the amount in soles, which is why statements differ slightly between months.',
    free: ['A free first class in Roblox Studio', 'Your child scripts something that moves', 'No card details needed'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor throughout the course', 'Two live classes every week', 'Paid month by month, stop any time'],
    one: ['Your child and one mentor only', 'The course shaped around your child\'s own game idea', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Roblox coding for kids: questions from Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach only in English, live and online. The mentor talks at an unhurried pace, tunes in to how your child speaks and how fast they work, and points to each Studio button on screen while naming it. Since Roblox Studio is in English too, lesson and tool share one vocabulary. Some of our Peru pages are written in Spanish for parents, yet no class is ever taught in Spanish.' },
      { q: 'What age can a child start Roblox coding?', a: 'Our Roblox course takes children from 8 to 14. At 8 a child usually reads well enough to follow Studio\'s menus and short error messages. Younger children start with blocks and come to Roblox later, already knowing what a loop and a condition are.' },
      { q: 'What programming language does Roblox use?', a: 'Luau. Roblox describes it as the scripting language creators use in Roblox Studio, derived from Lua 5.1 and gradually typed. It is a real language: variables, conditions, loops, functions and tables all work as they do elsewhere, which is why children move on to Python or JavaScript without starting again.' },
      { q: 'Does my child need Robux or a paid membership?', a: 'No. Roblox Studio is free, and nothing in our course needs Robux, a membership or any purchase. Roblox lets parents set monthly spending limits on the account, and we suggest setting them to zero if you prefer.' },
      { q: 'Can my child do Roblox coding on a tablet or phone?', a: 'No. Roblox Studio runs on Windows and Mac computers only; Roblox lists Windows 10 or macOS 10.14 as the minimum, with 8 GB of memory recommended and a screen of at least 1600 by 900. Most Chromebooks cannot run it either.' },
      { q: 'Is Roblox safe for an 8 year old?', a: 'Roblox gives children aged from 5 up to 8, in most regions, a Roblox Kids account with chat off and only the lowest-rated games, and children of 9 to 15 a Roblox Select account with more limits than an adult one. In our classes building happens in Studio on the child\'s own copy of a game, so no stranger joins the lesson. A parent should set up and keep the account.' },
      { q: 'When are the classes on Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 16:00 in Lima is 02:30 the next morning for the mentor, who works those hours on purpose.' },
      { q: 'Group classes or one to one for Roblox?', a: 'A group of fifteen to twenty players of a similar age suits those who like showing off a level and testing friends\' games. Private lessons fit the quiet child, the child still finding their English, the child far ahead, or the one who turns up with a huge game plan already sketched.' },
      { q: 'Will my child use AI to write Roblox scripts?', a: 'Not to write them. Children type every line after saying what it should do. Older students study what AI coding tools do and how to check them, but never through adult accounts: Claude requires users to be 18, and ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'Are you connected with Roblox, MINEDU or a school?', a: 'No. Modern Age Coders is an independent private online school, not linked with Roblox Corporation, MINEDU or any school in Peru. We give no Peruvian grades or qualifications; a child who finishes the course receives a completion certificate issued by us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Roblox families',
    lede: 'Pages that answer the next question.',
    items: [
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Our main Roblox course page, for every country.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'The steps from an idea to a published game.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors', p: 'Common error messages and what they mean.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Which AI tools allow children, and from what age.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why our children predict before they run.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from the first minute to the last.' }
    ]
  },

  start: {
    h2: 'Book a free Roblox class',
    lede: 'During the trial your child opens Studio beside a mentor, builds a small platform and scripts it to react to a touch. From that half hour the mentor learns how your child reasons and how much spoken English lands, and afterwards recommends a group or private lessons plus a time slot.',
    readFirst: 'Curious about the detail? Every week of the <a class="ag-inline-link" href="/courses/roblox-game-coding-for-kids-lua-course">Roblox course</a> is listed on its page, and <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> walks through a lesson.',
    note: 'Mentors teach from India over live video, always in English. WhatsApp, written in English, gets the fastest answer.',
    formNote: 'Free, no card, nothing to install before we talk.'
  },

  footer: {
    cols: [
      { h4: 'Roblox', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/roblox-studio-errors-fixed', label: 'Studio errors' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Coding for kids, Peru' },
        { href: '/python-for-kids-peru', label: 'Python for kids, Peru' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'A pickup radius is a sphere'
  },

  personalityCss: `
.ag-root.ag-rck .ag-hero h1 { max-width: 16ch; letter-spacing: -0.02em; }
.ag-root.ag-rck .ag-capsule { border-left-width: 6px; }
.ag-root.ag-rck .ag-table td { line-height: 1.55; }
.ag-root.ag-rck .ag-code pre { line-height: 1.5; }
.ag-root.ag-rck .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Safety Center and parents page; Roblox Creator Hub pages on Scripting, Luau, Studio setup, Vector3 and Roblox Education; INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026; MINEDU Edades normativas; CNEB; vendor terms for ChatGPT and Claude (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original month-four lesson: four coins around a player at (0, 3, 0); a pickup written as three separate axis checks collects all four, Pythagoras in three dimensions shows coin B is 12.73 studs away and refuses it, coin A at exactly 10.00 still counts because of <=, and comparing 162 with 100 gives the same answer without a square root; then the same rule in Luau with Vector3 Magnitude. Lesson family: 3D distance (box check versus sphere).',
    requiredMentions: ['coin B: 12.73 studs, too far', 'a pickup radius is a sphere, and only Pythagoras measures a sphere', 'Roblox Kids and Roblox Select accounts, as described by Roblox (2026)', 'range in age from 5 to over 25+ years old', 'are one-based rather than zero-based, so the first item is [1]', 'a computer of any kind in just 36.4% of homes across Peru', 'Windows 10 or macOS 10.14 with 3 GB of memory', 'free software and curriculum to teach students of all ages computer science', 'A pickup radius is a sphere'],
    sources: [
      { claim: 'Roblox Kids (from 5 up to 8) and Roblox Select (9 to 15) accounts in most regions; chat, voice and rating settings; users range in age from 5 to over 25+; settings vary by region.', url: 'https://corp.roblox.com/safety' },
      { claim: 'Parents can choose the maximum rating, set monthly spending limits and daily screen time limits.', url: 'https://corp.roblox.com/parents' },
      { claim: 'Roblox scripts use Luau, derived from Lua 5.1, gradually typed; arrays are one-based; declare locals with local.', url: 'https://create.roblox.com/docs/scripting' },
      { claim: 'Luau is the scripting language creators use in Roblox Studio.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Studio is free on Windows and Mac; minimum Windows 10 or macOS 10.14, 3 GB RAM (8 GB recommended), 1600x900 screen.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Vector3 has a Magnitude property.', url: 'https://create.roblox.com/docs/reference/engine/datatypes/Vector3' },
      { claim: 'Roblox offers free software and curriculum to teach computer science.', url: 'https://create.roblox.com/docs/education' },
      { claim: '36.4% of Peruvian households had at least one computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age measured on 31 March; grade by age table.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A Roblox minimum age taken from the Roblox terms: www.roblox.com/info/terms and en.help.roblox.com returned 403 to a sibling writer on 9 November 2026 and were not retried; the page uses only the Safety Center age bands, with Roblox\'s note that they vary by region.',
      'Roblox user numbers for Peru: no primary source; not given.',
      'Robux or any purchase as part of the course: refused; the course needs none.',
      'That Roblox coding improves school marks: no source; not claimed.',
      'Any link with Roblox Corporation, MINEDU or a school: none, and the page says so.'
    ]
  }
};
