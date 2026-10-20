'use strict';
// How to make a Roblox game (ag- how-to door; US cluster Phase 1 pilot, row 1).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw as Markdown on 17 October 2026
// (create.roblox.com/docs/<path>.md; raw copies in keyword-research-2026-09/us/src-pilots/roblox/):
//  - studio/setup: Studio is "a free application available on Windows and Mac"; minimum "Windows 10" / "macOS 10.14",
//    recommended "Windows 11" / "macOS 14+"; RAM "3 GB" minimum, "8 GB" recommended; "1600×900 or higher";
//    "RobloxStudio.exe" / "RobloxStudio.dmg"; "every game runs on the latest version of the Roblox engine".
//  - education/resources/frequently-asked-questions-education: "Roblox Studio cannot run on Chromebooks or mobile
//    devices such as smartphones." and "Roblox is also playable on a Chromebook, tablet, or mobile device."
//  - production/publishing/publish-games-and-places: "By default, new games are only accessible to you as the creator,
//    users with Edit access, and group members"; "File > Publish"; "Roblox supports places up to 100 MB (104,857,600
//    bytes)."; "You can invite up to 10 similar-aged friends to preview your game"; "Any age, but under 9 needs parent
//    approval".
//  - tutorials/use-case-tutorials/scripting/basic-scripting/score-points: the "leaderstats" Folder pattern.
//  - tutorials/fundamentals/coding-3/give-points: Players:GetPlayerFromCharacter(otherPart.Parent).
//  - assistant/guide: "Assistant is an AI helper that helps you build games faster by answering questions, generating
//    content, and performing actions directly in Studio."; "50 procedural models within a 24-hour rolling window".
//  - ai/build-with-assistant: "Plan mode".
// Not readable (HTTP 403, not circumvented): en.help.roblox.com, www.roblox.com/info/terms. So the page makes no claim
// about account age rules beyond the preview table in the docs.
// Our own material, labelled on the page: the three scripts (written only with APIs named in the docs above; tested
// by the reader in Studio, not by us on this page), the stage table, the 12-session plan and the timing arithmetic
// (a coin that respawns after 5 seconds can be collected at most 12 times a minute: 60 / 5 = 12).
// Lesson family: event-driven programming (an event, a handler, and a guard flag).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LEADERBOARD = `-- ServerScriptService > Leaderboard (ours)
local Players = game:GetService("Players")

local function onPlayerAdded(player)
  local leaderstats = Instance.new("Folder")
  -- this exact name shows a leaderboard
  leaderstats.Name = "leaderstats"
  leaderstats.Parent = player

  local coins = Instance.new("IntValue")
  coins.Name = "Coins"
  coins.Value = 0
  coins.Parent = leaderstats
end

Players.PlayerAdded:Connect(onPlayerAdded)`;

const COIN = `-- Script inside a Part named Coin (ours)
local Players = game:GetService("Players")
local coin = script.Parent
local collected = false  -- the guard flag

local function onTouched(otherPart)
  if collected then return end
  local player = Players:GetPlayerFromCharacter(otherPart.Parent)
  -- not a player (a ball, a wall)? ignore it
  if not player then return end

  collected = true
  player.leaderstats.Coins.Value += 1
  coin.Transparency = 1  -- hide the coin
  task.wait(5)  -- respawn after 5 seconds
  coin.Transparency = 0
  collected = false
end

coin.Touched:Connect(onTouched)`;

const RESET = `-- Script in a red Part, ResetBrick (ours)
local brick = script.Parent

brick.Touched:Connect(function(otherPart)
  local humanoid = otherPart.Parent:FindFirstChildOfClass("Humanoid")
  if humanoid then
    -- respawn at a SpawnLocation
    humanoid.Health = 0
  end
end)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'ROBLOX HOW-TO', blurb: 'How to make a Roblox game from install to publish: the devices that run Roblox Studio, three real Luau scripts, and how AI fits in.' },
  slug: 'how-to-make-a-roblox-game',
  code: 'rbx',
  accent: '#80473B',
  accentRationale: 'Roblox how-to, US: a muted brick red chosen with the accent picker (hue 10, s .54, v .50), 89+ RGB units from the other US pilot accents and 8 from every other site colour, contrast 5.91 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'How to make a Roblox game',
  title: 'How to Make a Roblox Game: Studio, Luau and Publishing',
  description: 'How to make a Roblox game step by step: which devices run Roblox Studio, three real Luau scripts for coins, a leaderboard and an obby, and how to publish safely.',
  ogDescription: 'Roblox Studio runs on Windows and Mac, not Chromebooks or phones. A step-by-step guide with three real Luau scripts, a 12-session plan and safe publishing settings.',
  twitterDescription: 'Make a Roblox game step by step: devices, three Luau scripts, and safe publishing.',
  pageName: 'How to Make a Roblox Game',
  webPageDescription: 'A step-by-step guide for US kids and parents to building a first Roblox game in Roblox Studio, with three Luau scripts and the publishing rules from the Roblox Creator docs.',
  courseDescription: 'Live online Roblox game coding classes in Luau for kids and teens in the United States, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'How to make a Roblox game',
  navLinks: [
    { href: '#devices', label: 'Devices' },
    { href: '#steps', label: 'Steps' },
    { href: '#scripts', label: 'Three scripts' },
    { href: '#ai', label: 'Using AI' },
    { href: '#publish', label: 'Publishing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 8 to 18 &middot; Roblox Studio and Luau',
  h1: 'How to make a Roblox game',
  lede: 'Plenty of American kids play Roblox, and a lot of them ask the same question sooner or later: how do people actually make these games? The honest answer is that every Roblox game is built in Roblox Studio, a free program, and brought to life with Luau, a real programming language. This guide walks through the whole route: the computer you need (and the ones that will not work), the first hour in Studio, three short scripts that turn a flat world into a game with coins, a leaderboard and an obstacle course, how Roblox&rsquo;s own AI helper fits in, and the settings that keep a first game private until you are ready.',
  secondaryCta: { href: '#scripts', label: 'See the three scripts' },
  wa: 'Hello Modern Age Coders, my child in the US wants to learn to make Roblox games in Luau. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Roblox Studio on Windows or Mac',
  spec: [
    ['For', 'Ages 8 to 18'],
    ['Tool', 'Roblox Studio, free'],
    ['Language', 'Luau'],
    ['Computer', 'Windows or Mac'],
    ['Not for building', 'Chromebook, iPad, phone'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'To make a Roblox game, install Roblox Studio (free, on a Windows or Mac computer), start from a template such as Baseplate, add parts, then write Luau scripts that react to events, for example a coin that adds a point when a player touches it. Publish with File &gt; Publish; a new game stays private to you until you release it.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that take a Roblox fan to real game code',
    lede: 'Each one is taught live, and each one starts from what your child has already built.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RBX / 01', title: 'Roblox game coding in Luau', note: 'Ages 8 to 14. Studio, events, leaderboards and a published game.' },
      { course: 'game-development-masterclass-for-kids', code: 'RBX / 02', title: 'Game development for kids', note: 'Ages 8 to 12. Scratch, Roblox and Minecraft, one plan.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'RBX / 03', title: 'Game development for teens', note: 'Ages 13 to 18. The step from Luau to Unity and C#.' }
    ]
  },

  sections: [
    {
      id: 'devices', tint: 'tint', eyebrow: 'Before you start',
      h2: 'Which devices can build a Roblox game, and which only play one',
      lede: 'This is the question families ask first, usually after a Chromebook or an iPad has refused to install anything. Roblox answers it plainly in its own documentation.',
      body: [
        { kind: 'table', caption: 'Building versus playing, from the Roblox Creator documentation (read 17 October 2026)', head: ['Device', 'Play Roblox games?', 'Build in Roblox Studio?'], rows: [
          ['Windows PC', 'Yes', 'Yes: minimum Windows 10, recommended Windows 11'],
          ['Mac', 'Yes', 'Yes: minimum macOS 10.14, recommended macOS 14+'],
          ['Chromebook', 'Yes', 'No: "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones."'],
          ['iPad or tablet', 'Yes', 'No: Studio is listed for Windows and Mac only'],
          ['Phone', 'Yes', 'No']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the computer needs',
          left: [
            'Roblox lists 3 GB of memory as the minimum and 8 GB as the recommended amount, with a screen resolution of 1600×900 or higher. A school laptop that meets those numbers and runs Windows or macOS is usually fine.',
            'The installer is RobloxStudio.exe on Windows and RobloxStudio.dmg on a Mac. After installing, you sign in with a Roblox account, the same kind of account used to play.'
          ],
          rightH3: 'If the only computer is a Chromebook',
          right: [
            'Your child can still play and test ideas on a Chromebook, but building needs a Windows or Mac computer, so a shared family laptop or a library computer is the usual answer.',
            'In the meantime, the thinking behind Roblox games (events, loops, scores) can be practised in Scratch in a browser, which is how many of our younger students start.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/setup" rel="noopener" target="_blank">Roblox Studio setup</a> and the <a class="ag-inline-link" href="https://create.roblox.com/docs/education/resources/frequently-asked-questions-education" rel="noopener" target="_blank">Roblox education FAQ</a>. Roblox says every game runs on the latest version of the Roblox engine, so keep Studio updated. We are not connected with Roblox Corporation.' }
      ]
    },
    {
      id: 'steps', tint: 'deep', eyebrow: 'Step by step',
      h2: 'From an empty Baseplate to a game your friends can play',
      lede: 'This is the order we teach in, and the order that keeps a first game small enough to finish. Each step names the Studio window you will use.',
      body: [
        { kind: 'ol', items: [
          '<b>Install and sign in.</b> Download Studio from the Roblox Creator Hub, run the installer, and sign in with a Roblox account.',
          '<b>Open a template.</b> Choose Baseplate for an empty world, or Obby if you want platforms already placed. Templates save an hour of setup.',
          '<b>Learn three windows.</b> The Explorer lists everything in the game, the Properties window changes one selected object, and the Output window shows messages and errors from your scripts.',
          '<b>Build with parts.</b> Insert a Part, then move, scale and color it. Anchor platforms so they do not fall when the game starts.',
          '<b>Add the first script.</b> Put a Script in ServerScriptService for game-wide rules, such as the leaderboard below.',
          '<b>Make objects react.</b> Put a Script inside a part when the part itself should do something, such as a coin that counts or a brick that resets a player.',
          '<b>Playtest often.</b> Press Play, try to break your game, read the Output window, fix one thing, and test again.',
          '<b>Publish privately.</b> Use File &gt; Publish. Roblox keeps a new game private to you and your collaborators until you choose to release it.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why so many small steps',
          left: [
            'Most first games that never get finished fail in the same way: a child designs a huge world, writes no code for a week, and loses heart. Eight small steps each end with something that works.',
            'The playtest step matters most. Professional game developers test constantly, and children who learn to read the Output window early fix their own bugs instead of waiting for help.'
          ],
          rightH3: 'How long it takes',
          right: [
            'Our twelve-class plan puts steps 1 to 5 in the first two classes and the coin and leaderboard in classes 3 and 4, a pace we set for children aged 10 to 12 and adjust for each child.',
            'Teenagers with some coding behind them often go faster, then spend their time on what makes a game fun: level design, difficulty and feedback.'
          ] }
      ]
    },
    {
      id: 'scripts', tint: 'tint', eyebrow: 'Three real scripts',
      h2: 'The three scripts that turn a world into a game',
      lede: 'These are the first three Luau scripts our students write. We wrote them using only the parts of Roblox that its documentation describes: the Players service, Instance.new, the Touched event and GetPlayerFromCharacter. Paste them into Studio, press Play, and test them yourself.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; a leaderboard', lang: 'luau', code: LEADERBOARD, note: 'Roblox shows a leaderboard for any player who has a Folder named exactly leaderstats. Each value inside it, here Coins, becomes a column.' },
        { kind: 'code', label: 'Script 2 &middot; a coin that counts', lang: 'luau', code: COIN, note: 'Our timing arithmetic: a coin that respawns after 5 seconds can be collected at most 12 times a minute (60 / 5 = 12), whatever the player does.' },
        { kind: 'code', label: 'Script 3 &middot; an obby reset brick', lang: 'luau', code: RESET, note: 'Roblox&rsquo;s own templates call these kill bricks. We call it a reset brick because that is what it does: the player respawns at a spawn point, which is their latest checkpoint when the checkpoints are SpawnLocations.' },
        { kind: 'two', mt: true,
          leftH3: 'The idea behind all three: events',
          left: [
            'Roblox games are event-driven. Nothing in Script 2 runs until something touches the coin; the Touched event then calls the onTouched function, which we call the handler.',
            'That one pattern, an event and a handler, is the same idea behind buttons on websites, clicks in apps and messages in chat programs. Children who understand it here have learned something they will use in every language that follows.'
          ],
          rightH3: 'Why Script 2 needs a guard flag',
          right: [
            'A player&rsquo;s character is made of several parts, so one jump onto a coin can fire Touched several times in a split second. Without the collected flag, one coin would add three or four points.',
            'Spotting that bug, and fixing it with a single true or false value, is the moment most of our students stop copying code and start reasoning about it.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Using AI',
      h2: 'Roblox Assistant: what the AI can do, and how we use it with kids',
      lede: 'Studio now includes Roblox&rsquo;s own AI helper. Families searching for how to make a Roblox game with AI are usually asking about this, so here is what Roblox says it does.',
      body: [
        { kind: 'table', caption: 'Roblox Assistant, as described in the Roblox Creator documentation (read 17 October 2026)', head: ['Point', 'From the documentation'], rows: [
          ['What it is', '"Assistant is an AI helper that helps you build games faster by answering questions, generating content, and performing actions directly in Studio."'],
          ['What it can touch', 'Objects and scripts in your place, assets from the Creator Store, and code you select in the Script Editor'],
          ['Planning', 'A Plan mode that breaks a game idea into smaller tasks before building'],
          ['A limit', '"50 procedural models within a 24-hour rolling window"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we use it in class',
          left: [
            'Where Roblox makes Assistant available on a student&rsquo;s account, we ask them to write a script first, then use Assistant to explain an error or suggest an improvement, and to say in their own words what changed. The AI becomes a second explanation, not a replacement for thinking.',
            'Plan mode is genuinely useful for teaching: a child describes a game, reads the plan, and decides which tasks they will code themselves.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We never let a student publish a game they cannot explain. If Assistant wrote a script, the student must be able to say what each line does before it stays in the game.',
            'Outside Studio, we keep under-18 students away from general AI chatbots whose terms are for adults. Assistant runs inside Studio under the student&rsquo;s own Roblox account, and what it offers can depend on that account, so check it with your child.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://create.roblox.com/docs/assistant/guide" rel="noopener" target="_blank">Assistant for Studio</a> and <a class="ag-inline-link" href="https://create.roblox.com/docs/ai/build-with-assistant" rel="noopener" target="_blank">Build your first game with Assistant</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'publish', tint: 'tint', eyebrow: 'Publishing safely',
      h2: 'Publishing a first game without making it public by accident',
      lede: 'Parents often worry that pressing Publish puts a child&rsquo;s game in front of the whole internet. By default it does not.',
      body: [
        { kind: 'table', caption: 'What publishing does, from the Roblox Creator documentation (read 17 October 2026)', head: ['Point', 'What Roblox says'], rows: [
          ['Who can see a new game', '"By default, new games are only accessible to you as the creator, users with Edit access, and group members"'],
          ['How to publish', 'File &gt; Publish, then add a name, description, icon and thumbnail'],
          ['Size limit', '"Roblox supports places up to 100 MB (104,857,600 bytes)."'],
          ['Early testers', '"You can invite up to 10 similar-aged friends to preview your game"'],
          ['Who a child can invite', 'By the creator&rsquo;s age: under 9, none listed (N/A); 9 to 12, friends aged 9 to 15, plus under-9 friends with parent approval; 13 to 15, friends aged 9 to 17'],
          ['After release', 'A game with no age-restricted content gets a Content May Vary label and "releases only to age-checked Roblox users ages 16+"; reaching younger players takes further steps in the Creator Hub']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A checklist for parents',
          left: [
            'Publish privately first. A creator aged 9 or older can invite a few real-life friends to preview it; for a creator under 9, Roblox&rsquo;s table lists no preview invites, so a parent tests the game with the child instead.',
            'Releasing is a separate step, and Roblox first releases a new game only to age-checked users aged 16 and over, so a child&rsquo;s first release is quieter than many parents fear. Read the game description together before that step.',
            'Sit with your child the first time they fill in the game details. A clear one-sentence summary is a writing exercise as much as a coding one.'
          ],
          rightH3: 'What we teach about releasing',
          right: [
            'Students learn that releasing a game is a decision, not a button. They write down what the game is, who it is for, and what they will fix next before anyone outside the family plays it.',
            'For anything about Roblox accounts, parental controls and age settings, check Roblox&rsquo;s own help and settings pages, which change over time.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'What a child can build in twelve classes',
      lede: 'Our plan for a first term of Roblox game coding, for children around ages 9 to 13. Teenagers move through it faster.',
      body: [
        { kind: 'table', caption: 'A 12-class plan for a first Roblox game (ours)', head: ['Classes', 'What gets built', 'The coding idea'], rows: [
          ['1 to 2', 'Install, templates, parts, the three windows', 'Objects and properties'],
          ['3 to 4', 'Leaderboard and coins', 'Events, handlers, variables'],
          ['5 to 6', 'An obby with checkpoints and reset bricks', 'Conditions: if something is true'],
          ['7 to 8', 'Moving platforms and timers', 'Loops and waiting'],
          ['9 to 10', 'A shop that spends coins', 'Comparing numbers, functions'],
          ['11 to 12', 'Testing, the game page, private release', 'Debugging and explaining your code']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 8 to 10', p: 'Shorter scripts, more building, lots of playtesting. Roblox typically recommends Studio from 10, so many start in Scratch first.' },
          { h3: 'Ages 11 to 13', p: 'The full twelve classes, with their own shop or level idea by class 10.' },
          { h3: 'Ages 14 to 18', p: 'Faster, then on to tables, module scripts and the step towards Unity and C#.' }
        ] }
      ]
    },
    {
      id: 'next', tint: '', eyebrow: 'After the first game',
      h2: 'Where Roblox coding leads',
      lede: 'Luau is a real language, and the habits it builds carry straight into the next one.',
      body: [
        { kind: 'table', caption: 'From Roblox to the next language', head: ['If your child loved', 'A good next step', 'Why'], rows: [
          ['Writing scripts', 'Python', 'The same ideas (variables, functions, events) in the language schools use most'],
          ['Building worlds', 'Unity and C#', 'Full 3D game engines used by professional studios'],
          ['Making it look right', 'Web development', 'Design, layout and code that friends can open in a browser'],
          ['Competing', 'Coding competitions', 'Puzzles that reward the reasoning a guard flag teaches']
        ] },
        { kind: 'p', mt: true, html: 'For more on choosing, see <a class="ag-inline-link" href="/blog/minecraft-vs-roblox-which-teaches-kids-to-code">Minecraft vs Roblox for learning to code</a>, our <a class="ag-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes</a> and the <a class="ag-inline-link" href="/best-age-to-start-coding">best age to start coding</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From player to builder',
    h2: 'Four stages from playing Roblox to making games',
    lede: 'Where most children are, and what comes next.',
    table: { caption: 'Stages of a young Roblox creator (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Player', 'Knows many games and has opinions about what makes them fun'],
      ['2. Builder', 'Places parts and uses templates in Studio, no scripts yet'],
      ['3. Scripter', 'Writes events and handlers like the three scripts above'],
      ['4. Designer', 'Plans levels, tests with friends, explains every line']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is not wasted time. Children who can say why a game is fun already think like designers.',
      'The jump from 2 to 3 is where a teacher helps most, because the first bugs are the hardest to read.'
    ] },
    right: { h3: 'For kids', ps: [
      'Start small: one coin, one score, one obby. Finished small games teach more than unfinished big ones.',
      'Read the Output window. It tells you which line broke and usually why.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young game makers',
    lede: 'All taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'RBX / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games in blocks, before Studio.' },
        { code: 'RBX / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks first, then real scripts.' },
        { code: 'RBX / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Typed code, games and turtle art.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'RBX / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Real projects, real code.' },
        { code: 'RBX / TEN / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Fast code and real games.' },
        { code: 'RBX / TEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Browser games and websites.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'RBX / PRO / 01', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Unity, C# and Unreal.' },
        { code: 'RBX / PRO / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI, explained.' },
        { code: 'RBX / PRO / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Ship a game in a weekend with a team.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes, at a time that suits your family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Choose a batch at a time that works across US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings suit many families.' },
      { time: '1-on-1', l: 'Very personalised, at your convenience.' }
    ],
    cells: [
      { h3: 'Regular teacher', p: 'The same teacher each week.' },
      { h3: 'Studio on screen', p: 'Your child shares their screen and builds.' },
      { h3: 'A plan per learner', p: 'The twelve-class plan, adjusted.' },
      { h3: 'Their game, their ideas', p: 'We build on what they already made.' },
      { h3: 'Live, online', p: 'At home, any state.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Games and apps built by our students',
  projectsLede: 'Projects from learners who started where your child is now. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Studio itself costs nothing to install. What families pay for is the teaching: one month at a time, shown in US dollars, nothing to sign for a whole semester, and you can end it whenever a month finishes.',
    free: ['A free first lesson', 'Bring a game you started', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Times at your convenience', 'Your own game']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Making a Roblox game: common questions',
    items: [
      { q: 'How do you make a Roblox game?', a: 'You install Roblox Studio on a Windows or Mac computer, start from a template, add parts, write Luau scripts that react to events, test with Play, and publish from the File menu. A new game stays private to you until you release it.' },
      { q: 'Can you make a Roblox game on a Chromebook?', a: 'No. Roblox says Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones. Chromebooks can play Roblox games, but building needs a Windows or Mac computer.' },
      { q: 'Can you make a Roblox game on an iPad or phone?', a: 'Not with Roblox Studio, which Roblox lists for Windows and Mac. An iPad or phone can play and test games, but not build them in Studio.' },
      { q: 'Is Roblox Studio free?', a: 'Yes. Roblox describes Roblox Studio as a free application available on Windows and Mac.' },
      { q: 'What coding language does Roblox use?', a: 'Luau, a language derived from Lua. Scripts in Studio are written in Luau, and the ideas carry over well to Python and JavaScript.' },
      { q: 'What computer do you need for Roblox Studio?', a: 'Roblox lists Windows 10 or macOS 10.14 as the minimum, with 3 GB of memory, and recommends Windows 11 or macOS 14+, 8 GB of memory and a screen of 1600×900 or higher.' },
      { q: 'Can you make a Roblox game with AI?', a: 'Studio includes Roblox Assistant, an AI helper that can answer questions, generate content and act in Studio. We teach children to write code first and use Assistant to explain and improve it.' },
      { q: 'Is a child\'s game public as soon as they publish it?', a: 'Not at first. Roblox says new games are only accessible to the creator, people with Edit access and group members until the creator releases the game to the public.' },
      { q: 'What age can kids start making Roblox games?', a: 'Roblox says its team typically recommends Studio for ages 10 and up, although some students may start younger, with younger ones focusing on building environments. We follow that: scripts from about 10, and Scratch first for younger children, which teaches the same event ideas.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Roblox coding classes cost?', a: 'Your first lesson costs nothing. After it, families pay for one month of teaching at a time, and the fees section on this page shows the monthly figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a young game maker.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All of our pages for US families.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Our live Roblox classes.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'For kids who prefer blocks to obbies.' },
      { href: '/blog/minecraft-vs-roblox-which-teaches-kids-to-code', label: 'Minecraft vs Roblox', p: 'Which teaches more coding.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'Every track, ages 6 to 14.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in each live class.' },
      { href: '/lua-for-kids', label: 'Lua for kids', p: 'Lua for kids: what it is, how Luau differs, and three programs to run today.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.' },
      { href: '/how-to-make-a-video-game-for-kids', label: 'How to make a video game for kids', p: 'How to make a video game as a kid: free tools, seven steps and a real game to copy.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what your child has played and built so far. The teacher starts from there, so the first lesson builds on their own game ideas.',
    readFirst: 'Want to see our method before you book? The page on <a class="ag-inline-link" href="/how-we-teach">our teaching</a> walks through a class, and <a class="ag-inline-link" href="/courses">every course</a> has its full syllabus online.',
    note: 'Our teachers work from India and every class happens on video, so there is no office in your town to visit. Message us on WhatsApp for the quickest reply to a US family.',
    formNote: 'A free first lesson; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Game coding', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/python-for-10-year-olds', label: 'Python for 10 year olds' }
      ] }
    ],
    bottomRight: 'An event, a handler, and a guard flag'
  },

  personalityCss: `
.ag-root.ag-rbx .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-rbx .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-rbx .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-rbx .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-rbx .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-rbx .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Creator documentation, read raw as Markdown on 17 October 2026: Studio "a free application available on Windows and Mac"; minimum Windows 10 / macOS 10.14, recommended Windows 11 / macOS 14+, 3 GB / 8 GB RAM, 1600×900; "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones."; new games private by default; File > Publish; 100 MB place limit; up to 10 preview testers; leaderstats pattern; Assistant description, Plan mode, 50 procedural models per 24 hours.',
    localProject: 'Three Luau scripts (ours, written only with APIs named in the Roblox docs): a leaderstats leaderboard, a coin with a guard flag and a 5-second respawn (at most 60 / 5 = 12 collections a minute), and an obby reset brick. A 12-class first-term plan. Lesson family: event-driven programming (event, handler, guard flag).',
    requiredMentions: ['Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones', 'RobloxStudio.dmg', 'macOS 10.14', '1600×900', 'leaderstats', 'GetPlayerFromCharacter', 'guard flag', '104,857,600 bytes', 'up to 10 similar-aged friends', '50 procedural models within a 24-hour rolling window', '60 / 5 = 12'],
    sources: [
      { claim: 'Studio is free on Windows and Mac; system requirements; installer names; latest engine for every game.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones; Roblox is playable on them.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' },
      { claim: 'New games private by default; File > Publish; 100 MB place limit; preview invites and the age table.', url: 'https://create.roblox.com/docs/production/publishing/publish-games-and-places' },
      { claim: 'The leaderstats leaderboard pattern.', url: 'https://create.roblox.com/docs/tutorials/use-case-tutorials/scripting/basic-scripting/score-points' },
      { claim: 'GetPlayerFromCharacter on a touched part.', url: 'https://create.roblox.com/docs/tutorials/fundamentals/coding-3/give-points' },
      { claim: 'Assistant: what it is, Plan mode, procedural model limit.', url: 'https://create.roblox.com/docs/assistant/guide' }
    ],
    rejectedClaims: [
      'Roblox account minimum age and parental-control details: help.roblox.com and roblox.com/info/terms returned HTTP 403, so nothing about account age is printed beyond the preview table in the Creator docs.',
      'An age requirement for Roblox Assistant: not stated in the documentation read, so not claimed.',
      'That we ran the three scripts on this page: they are written to the documented APIs and the reader tests them in Studio.',
      'Earnings from Roblox games: not discussed; no money promises to children.',
      'Any affiliation with Roblox Corporation: none, and the page says so.'
    ]
  }
};
