'use strict';
// Roblox coding classes in Germany (ag- English door, Germany cluster P2 row DE033), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: building games, not playing them, and the first rule of multiplayer code: the server decides. Age and account
// rules only from Roblox's own pages.
// Sources (read raw 3 Nov 2026; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/roblox-coding-classes-germany/):
//  - corp.roblox.com/safety: "Our users range in age from 5 to over 25+ years old"; "Roblox Kids (5-8 year olds in most
//    regions) and Roblox Select (9-15 year olds in most regions)"; Kids: "Only games with our lowest maturity ratings are
//    available in Roblox Kids accounts", "Chat is turned off in Roblox Kids accounts", if a parent allows chat "users with
//    Roblox Kids accounts (ages 5-8) are able to chat with other users who are ages 5-12"; Select: "Games in Roblox Select
//    accounts can have maturity ratings up to Moderate", "Users ages 9-12 can only use the Chat tab with trusted friends",
//    "Users ages 13-15 can use the Chat tab with trusted friends and friends who are in a similar age group", "Parents can
//    choose to turn Chat off for users under 13 years old", "One-on-one chat in games ( Direct Chat ) is off for Roblox
//    Select users."
//  - corp.roblox.com/parents: "verify your age using a government-issued ID or credit card"; "Parents can manage screen
//    time limits for their child under 13"; "Parents can set monthly spending limits"; "Restricted experiences are only
//    available to 18+ verified users".
//  - create.roblox.com/docs/studio/setup: "Roblox Studio , a free application available on Windows and Mac"; minimum
//    "Windows 10 macOS 10.14", recommended "Windows 11 macOS 14+", memory "3 GB 8 GB", "Resolution 1600×900 or higher".
//  - create.roblox.com/docs/luau: "Luau is the scripting language creators use in Roblox Studio. It is a fast, small, safe,
//    gradually typed embeddable scripting language derived from Lua 5.1".
//  - github.com/luau-lang/luau: "A small, fast, and embeddable programming language based on Lua with a gradual type
//    system"; "MIT".
//  - Blocked, not retried: en.help.roblox.com (HTTP 403) and www.roblox.com/info/terms (Cloudflare "Just a moment").
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own example (scratchpad de/w/G7/rco/twin.py, python3 -I): the Luau server script is shown for Roblox Studio; its
// checks are mirrored in a Python twin that we ran. Output: "If the server believes every request: {'Mia': 3, 'Cheat':
// 6}", "With server checks: {'Mia': 3, 'Cheat': 1}", "Rejected: {'too far away': 1, 'already taken': 2, 'no such coin':
// 1, 'too fast': 1}". The Luau script was not executed by us (no Luau runtime here); the page says so.
// Lesson family: never trust the client; the server checks every request.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const LUAU = [
  '-- ServerScriptService > CoinServer (a Script, so it runs on the server)',
  'local ReplicatedStorage = game:GetService("ReplicatedStorage")',
  'local Players = game:GetService("Players")',
  'local collect = ReplicatedStorage:WaitForChild("CollectCoin")',
  '',
  'local MAX_DISTANCE = 8   -- studs',
  'local COOLDOWN = 0.5     -- seconds',
  'local lastPickup = {}',
  '',
  'local function onCollect(player, coin)',
  '\tif typeof(coin) ~= "Instance" or not coin:IsDescendantOf(workspace.Coins) then return end',
  '\tlocal root = player.Character and player.Character:FindFirstChild("HumanoidRootPart")',
  '\tif not root then return end',
  '\tif (root.Position - coin.Position).Magnitude > MAX_DISTANCE then return end',
  '\tlocal now = os.clock()',
  '\tif lastPickup[player] and now - lastPickup[player] < COOLDOWN then return end',
  '\tlastPickup[player] = now',
  '\tcoin:Destroy()   -- gone for everyone, so it cannot be taken twice',
  '\tplayer.leaderstats.Coins.Value += 1',
  'end',
  '',
  'collect.OnServerEvent:Connect(onCollect)',
  'Players.PlayerRemoving:Connect(function(player) lastPickup[player] = nil end)'
].join('\n');

const TWIN = [
  'import math',
  '',
  'MAX_DISTANCE = 8   # studs',
  'COOLDOWN = 0.5     # seconds',
  '',
  'coins = {"c1": (10, 0), "c2": (30, 0), "c3": (50, 0), "c4": (200, 0), "c5": (204, 0)}',
  '',
  '# requests the server receives: (time, player, coin, where the player really stands)',
  'requests = [',
  '    (1.0, "Mia", "c1", (12, 0)),',
  '    (3.0, "Mia", "c2", (29, 0)),',
  '    (5.0, "Mia", "c3", (55, 0)),',
  '    (1.1, "Cheat", "c4", (0, 0)),     # claims a coin 200 studs away',
  '    (1.2, "Cheat", "c1", (10, 0)),    # coin already taken',
  '    (2.0, "Cheat", "c9", (0, 0)),     # a coin that does not exist',
  '    (6.0, "Cheat", "c4", (199, 0)),',
  '    (6.1, "Cheat", "c4", (199, 0)),   # same coin twice',
  '    (6.2, "Cheat", "c5", (200, 0)),   # next coin a fifth of a second later',
  ']',
  '',
  'trusting = {}',
  'for t, player, coin, pos in requests:',
  '    trusting[player] = trusting.get(player, 0) + 1',
  'print("If the server believes every request:", trusting)',
  '',
  'taken, last, score = set(), {}, {}',
  'reasons = {}',
  '',
  'def check(t, player, coin, pos):',
  '    if coin not in coins: return "no such coin"',
  '    if coin in taken: return "already taken"',
  '    if math.dist(pos, coins[coin]) > MAX_DISTANCE: return "too far away"',
  '    if player in last and t - last[player] < COOLDOWN: return "too fast"',
  '    return None',
  '',
  'for t, player, coin, pos in sorted(requests):',
  '    why = check(t, player, coin, pos)',
  '    if why:',
  '        reasons[why] = reasons.get(why, 0) + 1',
  '        continue',
  '    taken.add(coin)',
  '    last[player] = t',
  '    score[player] = score.get(player, 0) + 1',
  '',
  'print("With server checks:", score)',
  'print("Rejected:", reasons)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Roblox coding classes' },
  slug: 'roblox-coding-classes-germany',
  code: 'rco',
  accent: '#0A5F38',
  accentRationale: 'Roblox game building in Germany: a deep baseplate green #0A5F38, darker and bluer than the Germany hub fir green and far from the plum and brown of the AI pages; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Roblox coding classes in Germany',
  title: 'Roblox Coding Classes in Germany, Live in English',
  description: 'Live online Roblox coding classes in English for children and teens in Germany: Roblox Studio, Luau scripts, Roblox\'s age rules and cheat-proof multiplayer code.',
  ogDescription: 'Children in Germany who love Roblox learn to build their own games in Roblox Studio, taught live in English, starting with the rule every multiplayer game depends on: the server decides.',
  twitterDescription: 'Roblox game coding for children and teens in Germany, live in English, with real Luau scripts.',
  pageName: 'Roblox Coding Classes in Germany',
  webPageDescription: 'A guide for parents in Germany whose child wants to make Roblox games: what Roblox Studio and Luau are, what a computer needs, Roblox\'s own account and chat rules by age, and an original server script that stops cheating.',
  courseDescription: 'Live online Roblox game coding classes in English for children and teens in Germany: Roblox Studio, Luau scripting, game design and safe multiplayer code, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Roblox coding',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#studio', label: 'Studio' },
    { href: '#accounts', label: 'Ages' },
    { href: '#script', label: 'Script' },
    { href: '#path', label: 'Path' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Roblox game coding &middot; Ages 8 to 16',
  h1: 'Roblox coding classes in Germany',
  lede: 'Plenty of children in Germany spend their afternoons in other people\'s Roblox games. A smaller number open Roblox Studio and make one of their own, and they discover very quickly that a game is a program: doors that open, coins that count, a scoreboard that cannot be faked. This page explains what that involves, which rules Roblox itself sets for younger players, and shows the first piece of real game code our students write about fairness.',
  secondaryCta: { href: '#script', label: 'See the server script' },
  wa: 'Hello Modern Age Coders, my child lives in Germany and would like a free first Roblox coding class, taught in English.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; games built in Studio, line by line',
  spec: [
    ['Ages', '8 to 16'],
    ['Tool', 'Roblox Studio, free'],
    ['Language', 'Luau, a typed form of Lua'],
    ['Teaching', 'Live, in English'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Roblox coding classes for children and teens in Germany at Modern Age Coders are live online lessons in English, for ages 8 to 16. Learners build their own games in Roblox Studio and write real Luau scripts, from a door that opens to a multiplayer scoreboard that cannot be cheated. One regular mentor matches each child\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Choosing a course',
    h2: 'Which Roblox course fits your child?',
    lede: 'Most children aged 8 to 12 start with the Roblox course. A younger child may begin in Scratch, and an older teen may move on to a full game engine.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RCO / 01', title: 'Roblox Game Coding in Luau', note: 'The main course. Obstacle courses, tools, coins and scoreboards, all scripted in Luau by the child, with the mentor watching each line.' },
      { course: 'scratch-programming-complete-course', code: 'RCO / 02', title: 'Scratch first', note: 'For children of 6 to 8 who cannot yet type fluently. Loops, events and variables in blocks, ready for Luau later.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'RCO / 03', title: 'Godot game development', note: 'For teens who want to make games outside Roblox, in a free engine whose games run anywhere.' }
    ]
  },

  sections: [
    {
      id: 'studio',
      eyebrow: 'The tools',
      h2: 'What is Roblox Studio, and what is Luau?',
      lede: 'Playing Roblox and building on Roblox use two different programs. The building one is free, and the language inside it is a real programming language with a public specification.',
      body: [
        { kind: 'two',
          leftH3: 'Roblox Studio',
          left: [
            'Roblox describes Studio on its Creator Hub as a free application available on Windows and Mac. It is where a game is built: the world, the parts, the lighting, and the scripts that make anything happen.',
            'Roblox lists only Windows and Mac for Studio, and its setup page tells new users to sign in to Studio with their Roblox account. A child who only plays on a tablet will need a laptop or desktop computer for these classes.'
          ],
          rightH3: 'Luau',
          right: [
            'Roblox calls Luau the scripting language creators use in Roblox Studio, and describes it as fast, small, safe and gradually typed, derived from Lua 5.1. Its source code is public on GitHub under the MIT licence.',
            'Luau is typed text, not blocks. Children learn the same ideas found in Python or JavaScript: variables, conditions, loops, functions and events.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What a computer needs to run Roblox Studio, from Roblox\'s own setup page', head: ['', 'Minimum', 'Recommended'], rows: [
          ['Operating system', 'Windows 10 or macOS 10.14', 'Windows 11 or macOS 14 and later'],
          ['Memory', '3 GB', '8 GB'],
          ['Screen', '1600 by 900 or higher', '1600 by 900 or higher']
        ] },
        { kind: 'source', html: 'Source: Roblox Creator Hub, Roblox Studio setup, and the Luau reference page; github.com/luau-lang/luau for the licence. Read on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'In our lessons the mentor shares a screen and so does the child. A second screen helps but is not needed. What does matter is a mouse: building in Studio with a laptop trackpad is slow, and children get frustrated by it far more than by the code.' }
      ]
    },
    {
      id: 'accounts',
      tint: 'tint',
      eyebrow: 'Roblox\'s own rules',
      h2: 'What age rules does Roblox set for children?',
      lede: 'Roblox now runs separate account types for younger users. These are its rules, from its own safety page, not ours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Roblox Kids and Roblox Select accounts, as Roblox describes them', head: ['', 'Roblox Kids', 'Roblox Select'], rows: [
          ['Ages, in most regions', '5-8 year olds', '9-15 year olds'],
          ['Games available', 'Only the lowest maturity ratings, Minimal and Mild', 'Ratings up to Moderate'],
          ['Chat in games', 'Off unless a parent turns it on; then with users aged 5 to 12 and trusted friends', 'On with age-appropriate users and trusted friends in the same game'],
          ['Chat tab outside games', 'Off', 'Ages 9 to 12 with trusted friends only; ages 13 to 15 also with friends of a similar age'],
          ['One-to-one chat in games', 'Off unless a parent allows it', 'Off unless a parent allows it']
        ] },
        { kind: 'source', html: 'Source: Roblox Safety Center, corp.roblox.com/safety, and Parental Controls, corp.roblox.com/parents. Read on 3 November 2026. Roblox says its users range in age from 5 to over 25.' },
        { kind: 'two', mt: true,
          leftH3: 'What parents can control',
          left: [
            'Roblox\'s parents\' page says a parent account can manage most settings of a child\'s Roblox Kids or Roblox Select account from the parent\'s own device. It lists screen time limits for children under 13, monthly spending limits, the maximum game rating, and turning chat off for users under 13.',
            'To link a parent account, Roblox asks the parent to verify their age with a government-issued ID or a credit card. It also says that Restricted experiences are only available to verified users aged 18 and over.'
          ],
          rightH3: 'How our classes fit in',
          right: [
            'Our lessons happen in Studio, on the child\'s own game, with the mentor on a video call. Nothing in the course needs chat with strangers, and nothing needs Robux.',
            'We do not set up or manage a child\'s Roblox account. That stays with the family and with Roblox\'s settings above. Where a child wants to publish a game, the mentor explains what publishing means and the family decides.'
          ] }
      ]
    },
    {
      id: 'script',
      eyebrow: 'Our first fairness lesson',
      h2: 'How do you stop players cheating in a Roblox game?',
      lede: 'In a multiplayer game every player\'s computer can be tampered with. So the game\'s real rules live on the server, which checks every request a player sends. This is the first script about fairness our students write.',
      body: [
        { kind: 'two',
          leftH3: 'The game',
          left: [
            'Coins lie around a map. When a player touches one, their computer, the client, sends a message to the server: I collected this coin. The server adds one to the player\'s score.',
            'A cheating player can send that message for a coin on the other side of the map, for a coin someone else already took, or a hundred times a second.'
          ],
          rightH3: 'The rule',
          right: [
            'The server believes nothing. It checks that the coin exists, that the player is standing next to it, and that the player is not collecting faster than a person could. Only then does it destroy the coin and add the point.',
            'Every serious online game works this way. It is also one of the first ideas in computer security.'
          ] },
        { kind: 'code', label: 'The Luau server script, for Roblox Studio', lang: 'Luau', code: LUAU, note: 'Put a RemoteEvent called CollectCoin in ReplicatedStorage, a folder called Coins in the workspace and a leaderstats folder with a Coins value on each player. We have not run this script outside Studio; the checks are mirrored in the Python twin below, which we did run.' },
        { kind: 'p', mt: true, html: 'Children often ask why the coin does not simply count itself when touched. It could, in a game for one player. The moment two players share a world, someone has to be the referee, and it cannot be the player who wants the points. To show the difference without opening Studio, we model the same server in plain Python: one honest player, Mia, and one player sending fake requests.' },
        { kind: 'code', label: 'The same checks as a Python twin', lang: 'Python', code: TWIN, note: 'It prints <code>If the server believes every request: {\'Mia\': 3, \'Cheat\': 6}</code>, then <code>With server checks: {\'Mia\': 3, \'Cheat\': 1}</code> and <code>Rejected: {\'too far away\': 1, \'already taken\': 2, \'no such coin\': 1, \'too fast\': 1}</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'What the server checks change (our example, eight requests from the cheating player\'s side and three from Mia)', head: ['Player', 'Score if the server trusts everyone', 'Score with checks'], rows: [
          ['Mia, playing honestly', '3', '3'],
          ['Cheat, sending fake requests', '6', '1']
        ] },
        { kind: 'source', html: 'The game, the requests and both programs are our own teaching example, run with Python 3 on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Look at the one coin the cheating player keeps. At six seconds they really were standing next to coin c4, so the server accepts it, as it should: checks must stop cheating without punishing fair play. Then the same coin arrives again and is refused as already taken, and coin c5 two tenths of a second later is refused as too fast. Honest Mia never notices any of this. That balance, strict for cheaters and invisible for everyone else, is what children learn to design.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Guess first.</strong> Before running the twin, predict each player\'s score with and without checks.',
          '<strong>Tune it.</strong> Change MAX_DISTANCE to 3. Does Mia lose a coin she fairly collected? What is a fair value, and why?',
          '<strong>Find a new cheat.</strong> Add a request that passes every check but should not. Then add a check that stops it.',
          '<strong>In Studio.</strong> Build the coin map, add the script and test it with a second player in a local test inside Studio.'
        ] }
      ]
    },
    {
      id: 'path',
      tint: 'tint',
      eyebrow: 'Beyond the game',
      h2: 'Does Roblox coding lead to real programming?',
      lede: 'Yes, if it is taught as programming. The ideas carry straight over to the languages children meet later at school or at work.',
      body: [
        { kind: 'table', numCols: [], caption: 'From a Roblox project to the wider idea (our course map)', head: ['In a Roblox game', 'The programming idea', 'Where it appears again'], rows: [
          ['A door that opens when touched', 'Events and handlers', 'Every app and website'],
          ['A coin counter', 'Variables and state', 'Any program that remembers something'],
          ['An obstacle course with levels', 'Loops and tables', 'Lists and arrays in Python or Java'],
          ['The server checking a coin', 'Validation and trust', 'Web servers and computer security'],
          ['Typed Luau', 'Types', 'Java, C# and TypeScript']
        ] },
        { kind: 'p', mt: true, html: 'In Germany, Informatik is not taught everywhere at the same age or in the same amount, and Roblox is not part of any school course. That is why we teach it as a door into programming rather than an end in itself. Children who have scripted a working game in Luau usually move to Python or JavaScript without fuss, because they have already met every idea in the table. A child who wants a free first contest can try the Informatik-Biber, which BWINF runs free for pupils from Klasse 3 to 13 and which asks for no prior knowledge.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do Roblox classes run in German time?',
      lede: 'Children usually come after school or at the weekend. The mentors are in India, a few hours ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample class times in Germany and India', head: ['Germany', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany is one hour ahead of UTC in winter and two hours ahead in summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India keeps UTC+5:30 all year. These rows are examples only.' },
        { kind: 'p', mt: true, html: 'The free first class is booked in the time shown on your own phone or computer. A one-to-one child can agree a regular time with the mentor that fits around football, music or homework.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From the first part in Studio to a published game',
    lede: 'Our own milestones for Roblox learners, used to place children and report to parents.',
    table: { caption: 'Roblox coding milestones (ours)', head: ['Stage', 'Usually reached', 'The child can'], rows: [
      ['1. Builder', 'First weeks', 'Place, size and anchor parts and test a simple obby'],
      ['2. First scripts', 'Month 1 to 2', 'Write a script that reacts to a touch or a click'],
      ['3. Game logic', 'Months 3 to 4', 'Keep score, run a timer and change levels'],
      ['4. Client and server', 'Months 5 to 6', 'Use RemoteEvents and check every request on the server'],
      ['5. Own game', 'Month 7 onwards', 'Plan, build, test with others and explain a complete game']
    ] },
    left: { h3: 'For children', ps: [
      'Test your game as a cheater would. If you can break it, someone else will.',
      'Read the error in the Output window out loud before you ask for help. Half the time it tells you the answer.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask to play your child\'s game, then ask how one part of it works. The explanation shows the learning.',
      'Hours in Studio and hours playing Roblox look the same from the doorway. They are not.'
    ] }
  },

  catalogue: {
    eyebrow: 'More game and coding courses',
    h2: 'Nine more courses for young game makers',
    lede: 'All taught live in English by a regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 10', courses: [
        { code: 'RCO / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding from games to small apps.' },
        { code: 'RCO / YOUNG / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI in games can and cannot do.' },
        { code: 'RCO / YOUNG / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds inside Minecraft.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 14', courses: [
        { code: 'RCO / CODE / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'A website to show off the games.' },
        { code: 'RCO / CODE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and games in a fast language.' },
        { code: 'RCO / CODE / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Browser games anyone can open.' }
      ] },
      { num: 'III', h3: 'Teen game makers', sub: 'Ages 13 to 18', courses: [
        { code: 'RCO / TEEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, from idea to finished game.' },
        { code: 'RCO / TEEN / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'The defending side of cheating, properly.' },
        { code: 'RCO / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saving and sharing code like a team does.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live Roblox classes work for children in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday slots from about a quarter to four, German time.' },
      { time: 'Weekend', l: 'Saturday and Sunday mornings or around midday.' },
      { time: 'One to one', l: 'A fixed weekly time chosen with the mentor.' }
    ],
    cells: [
      { h3: 'Building in Studio', p: 'The child builds and scripts every part.' },
      { h3: 'Real Luau', p: 'Typed code, not drag and drop.' },
      { h3: 'English made easy', p: 'Slow, clear and patient explanations.' },
      { h3: 'The same mentor', p: 'Someone who knows your child\'s game.' },
      { h3: 'No strangers', p: 'Lessons need no in-game chat at all.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children, or one.' }
    ]
  },

  projectsH2: 'Games and projects by our students',
  projectsLede: 'A selection of work by our students worldwide; there is more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families and students, as they were written.',

  fees: {
    h2: 'Fees for Roblox coding classes in Germany',
    lede: 'One monthly fee covers eight live classes. It is displayed in euro using the European Central Bank reference rate, while the payment itself goes through in US dollars, so your bank does the conversion and may show a slightly different figure.',
    free: ['A free first class in Studio', 'A first look at your child\'s level', 'No card details needed'],
    group: ['Fifteen to twenty children at a similar stage', 'One mentor throughout', 'Two live classes a week', 'Monthly, cancel when you wish'],
    one: ['Your child and one mentor', 'Their own game and pace', 'A time that suits your family']
  },

  faq: {
    eyebrow: 'Parents in Germany ask',
    h2: 'Roblox coding classes in Germany: questions from parents',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by a mentor based in India who matches your child\'s pace and accent. Luau code itself is written with English words, so children practise both at once.' },
      { q: 'What age can my child start?', a: 'Children of about 8 and over, who can read and type simple words, start with the Roblox course. Children of 6 to 8 usually begin in Scratch and move to Luau later.' },
      { q: 'Does my child need a Roblox account?', a: 'Roblox\'s setup page says to sign in to Studio with a Roblox account. Roblox runs Roblox Kids accounts for 5-8 year olds and Roblox Select accounts for 9-15 year olds in most regions, managed through a parent account. The account stays with your family; we do not create or manage it.' },
      { q: 'Will my child chat with strangers in class?', a: 'No. Lessons happen in Studio on the child\'s own game, with the mentor on a video call. Nothing in the course needs Roblox chat, and Roblox lets parents turn chat off for children under 13.' },
      { q: 'Do we have to buy Robux?', a: 'No. Roblox Studio is free, and nothing in our course needs Robux or any purchase on Roblox.' },
      { q: 'What computer do we need?', a: 'A Windows or Mac computer. Roblox lists Windows 10 or macOS 10.14 and 3 GB of memory as the minimum, and recommends 8 GB. Studio is offered for Windows and Mac only, and a mouse helps a lot.' },
      { q: 'Is Roblox coding real programming?', a: 'Yes. Luau is a typed programming language derived from Lua 5.1, and children learn variables, conditions, loops, functions, events and client-server logic that carry over to Python, JavaScript or Java.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children in Germany come after school or on weekend mornings.' },
      { q: 'How do we pay?', a: 'The fee is shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement may differ a little. The first class is free.' },
      { q: 'Can my child publish a game?', a: 'Children build games that can be published, and the mentor explains what publishing involves. Whether to publish is the family\'s decision, under Roblox\'s own settings.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More reading',
    h2: 'Related pages',
    lede: 'Other pages for families in Germany and for young Roblox builders.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our full set of pages for Germany.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'A first game, explained step by step.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Common error messages and what they mean.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For families in the capital.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Coding Minecraft mods', p: 'The other big game children build in.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first Roblox class',
    lede: 'Your child opens Studio with the mentor, builds something small and writes a first script, while the mentor sees where they are and suggests the right course. In English, at your child\'s pace.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Lessons are live online and in English, taught by mentors who are based in India. For a quick question, message us on WhatsApp in English.',
    formNote: 'No payment is taken for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Game coding', links: [
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/roblox-studio-errors-fixed', label: 'Studio errors fixed' },
        { href: '/learn-to-code-minecraft-mods', label: 'Minecraft mods' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'The server decides'
  },

  personalityCss: `
.ag-root.ag-rco .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-rco .ag-capsule { border-left-width: 6px; }
.ag-root.ag-rco .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-rco .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-rco .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Safety Center (corp.roblox.com/safety) and Parental Controls (corp.roblox.com/parents); Roblox Creator Hub, Studio setup and Luau reference; github.com/luau-lang/luau; Einheitenzeitgesetz. Read 3 November 2026. en.help.roblox.com and www.roblox.com/info/terms were blocked and not used.',
    localProject: 'The server decides: an original Luau server script for a coin game that checks existence, distance (8 studs), double collection and a 0.5 second cooldown, mirrored in a Python twin we ran: trusting server Mia 3, Cheat 6; checking server Mia 3, Cheat 1, with 5 rejections. Lesson family: never trust the client.',
    requiredMentions: ['With server checks: {\'Mia\': 3, \'Cheat\': 1}', 'If the server believes every request: {\'Mia\': 3, \'Cheat\': 6}', 'collect.OnServerEvent:Connect(onCollect)', 'Roblox Select', 'derived from Lua 5.1', 'Windows 10 or macOS 10.14', 'The server decides', 'Restricted experiences are only available to verified users aged 18 and over'],
    sources: [
      { claim: 'Roblox Kids (5-8) and Roblox Select (9-15) accounts, ratings and chat rules.', url: 'https://corp.roblox.com/safety' },
      { claim: 'Parent accounts, verification, screen time, spending limits, Restricted experiences 18+.', url: 'https://corp.roblox.com/parents' },
      { claim: 'Roblox Studio is free on Windows and Mac; system requirements.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Luau derived from Lua 5.1, gradually typed.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Luau open source under MIT.', url: 'https://github.com/luau-lang/luau' }
    ],
    rejectedClaims: [
      'Roblox Terms of Use text: en.help.roblox.com returned HTTP 403 and www.roblox.com a Cloudflare challenge; not retried, no quote used.',
      'Any claim that the Luau script was executed by us: it was not; only the Python twin was run, and the page says so.',
      'Any affiliation with Roblox Corporation: none.',
      'Any USK rating for Roblox: not fetched, not stated.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
