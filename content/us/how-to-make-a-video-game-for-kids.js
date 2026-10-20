'use strict';
// How to make a video game for kids (ag- how-to door; US cluster Phase 2, row 5). Search evidence: "how to make a video
// game for kids", "... easy", "... free", "how to make a video game when your a kid", "how can kids make a video game",
// "how to make a 3d video game for kids", "how to make a computer game for kids", "learn to code video games for kids",
// "video game coding for kids" (keyword-research-2026-09/us/rows.tsv, autocomplete_us.tsv).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/how-to-make-a-video-game-for-kids/):
//  - scratch.mit.edu/about (served from scratchfoundation.org/home): "Scratch is free for everyone."; "a simple,
//    block-based coding interface that they can drag and snap together: no tricky syntax required"; "a safe, moderated
//    online community"; "Scratch was developed at the MIT Media Lab in 2007"; "In 2019, Scratch was transferred from MIT to
//    the Scratch Foundation". The founder is not named on the page (house rule on individuals).
//  - arcade.makecode.com/about: "MakeCode Arcade is a code editor to build Retro Arcade games for the browser and handheld
//    consoles."; /faq: "Projects are kept in the browser's local indexed data store."; "When you clear browsing data, all
//    of the saved projects and files that support MakeCode working offline are removed."; "Anyone can see your project if
//    they have its shared URL."; offline: "a cached version of MakeCode is stored automatically".
//  - MakeCode Arcade reference: sprites.create (default kinds "like Player, Enemy, Food"), image.create and fill (destroy
//    example), controller.moveSprite, sprites.onOverlap, info.changeScoreBy, info.startCountdown ("When the game time
//    finishes, a game over notification happens"), on-countdown-end ("the game will automatically end"), randint ("from
//    min (inclusive) up to and including max (inclusive)"), Math.randomRange marked "Deprecated", scene.screenWidth and
//    screenHeight, sprite setPosition.
//  - Roblox (pilot dossier, create.roblox.com .md): Studio "a free application available on Windows and Mac"; "Roblox
//    Studio cannot run on Chromebooks or mobile devices such as smartphones."; "Our team typically recommends it for ages
//    10 and up"; new games private by default.
//  - Godot docs: first_2d_game/index ("we recommend starting with 2D games ... before tackling 3D games, which tend to be
//    more complicated."); system_requirements (web editor RAM "8 GB"); using_the_android_editor ("Chromebooks supporting
//    Android apps"); godotengine.org/license (MIT).
//  - Unity terms of service (13 in the US), used only to say Unity is a teen tool.
// Our own material, labelled on the page: the seven steps, the MakeCode script (written only with the reference pages
// above), the level-up challenges, the fun questions, the sharing table summary, the 26-week overview of our kids course,
// and the arithmetic 30 / 2 = 15 (a snack every 2 seconds for a 30-second countdown).
// Lesson family: the game loop (input, rules, score, an ending).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SNACK = `// MakeCode Arcade, JavaScript view (ours):
// catch as many snacks as you can in 30 seconds
let heroImg = image.create(16, 16)
heroImg.fill(9)
let hero = sprites.create(heroImg, SpriteKind.Player)
controller.moveSprite(hero, 100, 100)

let snackImg = image.create(8, 8)
snackImg.fill(5)
let snack = sprites.create(snackImg, SpriteKind.Food)

function moveSnack() {
    snack.setPosition(
        randint(10, scene.screenWidth() - 10),
        randint(10, scene.screenHeight() - 10))
}
moveSnack()

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    moveSnack()
})

info.startCountdown(30)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'VIDEO GAMES HOW-TO', blurb: 'How kids can make a video game for free: tools by age and computer, seven steps, a real MakeCode Arcade game, safe sharing and when 3D makes sense.' },
  slug: 'how-to-make-a-video-game-for-kids',
  code: 'hmvg',
  accent: '#573D0D',
  accentRationale: 'Video game how-to for kids, US: the allocated walnut brown #573D0D (alloc.tsv row 5), warmer and more yellow than the oxblood Lua page, dark enough for links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'How to make a video game for kids',
  title: 'How to Make a Video Game for Kids: Free Tools and Steps',
  description: 'How to make a video game as a kid, free: tools by age and computer, seven steps, a real MakeCode Arcade game to copy, safe sharing, and when to try 3D.',
  ogDescription: 'Kids can make a real video game for free in a browser. Tools by age and device, seven steps, a 20-line MakeCode Arcade game, and what to know before sharing it.',
  twitterDescription: 'How to make a video game as a kid: free tools, seven steps and a real game to copy.',
  pageName: 'How to Make a Video Game for Kids',
  webPageDescription: 'A step-by-step guide for US children and parents to making a first video game with free tools: Scratch, MakeCode Arcade, Roblox Studio and Godot, a working MakeCode game, sharing settings and a first-course plan.',
  courseDescription: 'Live online game-making classes for children aged 6 to 12 in the United States, in Scratch, Roblox and Minecraft, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'How to make a video game for kids',
  navLinks: [
    { href: '#tools', label: 'Free tools' },
    { href: '#steps', label: 'Seven steps' },
    { href: '#game', label: 'A real game' },
    { href: '#sharing', label: 'Sharing safely' },
    { href: '#three-d', label: '3D games' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 12 &middot; Scratch, MakeCode Arcade, Roblox',
  h1: 'How to make a video game when you are a kid',
  lede: 'Making a video game as a kid is easier than it sounds, and it can cost nothing. Children can build a working game in a web browser in an afternoon, on the same Chromebook they use for school. What makes it go well is choosing a tool that fits the child&rsquo;s age and computer, starting with an idea small enough to finish, and testing it on someone else. This guide covers all three, then gives your child a complete twenty-line game to type in, explains what happens when they press Share, and answers the question every young player asks next: can I make it 3D?',
  secondaryCta: { href: '#game', label: 'Copy the game' },
  wa: 'Hello Modern Age Coders, my child in the US wants to make video games. Could we book a free first lesson?',
  heroNote: 'Teaching children since 2020 &middot; 10,000+ students &middot; Games in a browser, no download needed',
  spec: [
    ['For', 'Ages 6 to 12'],
    ['First tools', 'Scratch, MakeCode Arcade'],
    ['Later', 'Roblox Studio, Minecraft'],
    ['Cost of tools', 'Free'],
    ['Computer', 'A Chromebook is fine to start'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'To make a video game, a kid picks a free tool that suits their age and computer, such as Scratch or MakeCode Arcade in a browser, or Roblox Studio on Windows or Mac, plans one small idea, builds it, and tests it on family. Modern Age Coders teaches children aged 6 to 12 live online, in a batch or one to one, through our Scratch and Game Development for Kids courses.',

  picks: {
    eyebrow: 'Make games with a teacher',
    h2: 'Three courses where children finish real games',
    lede: 'Live and small enough that every child shares a screen, and every class ends with something playable.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'HMVG / 01', title: 'Game development for kids', note: 'For 8 to 12 year olds, about six months: Scratch games, then Roblox Studio and coded Minecraft.' },
      { course: 'scratch-programming-complete-course', code: 'HMVG / 02', title: 'Scratch coding', note: 'From age 6. The friendliest way to build a first game, in blocks.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'HMVG / 03', title: 'Roblox game coding', note: 'Ages 8 to 14 with a Windows or Mac computer. Typed Luau scripts.' }
    ]
  },

  sections: [
    {
      id: 'tools', tint: 'tint', eyebrow: 'Pick a tool',
      h2: 'Free tools a kid can make a game with, by age and computer',
      lede: 'There is no single right tool. There is a right first tool for your child&rsquo;s age, reading level and the computer in the house. Each row below uses what the tool&rsquo;s own makers say.',
      body: [
        { kind: 'table', caption: 'Four free game-making tools, from each maker&rsquo;s own pages (read 17 October 2026)', head: ['Tool', 'How kids code in it', 'What it runs on', 'Good first choice for'], rows: [
          ['Scratch', 'Blocks that drag and snap together; the Scratch Foundation says no tricky syntax is required', 'A web browser', 'Ages 6 to 10, and any child who has never coded'],
          ['MakeCode Arcade', 'Blocks, with JavaScript and Python views of the same program', 'A web browser; Microsoft calls it a code editor for Retro Arcade games', 'Ages 8 to 12 who want a game that looks like a classic console game'],
          ['Roblox Studio', 'Typed Luau scripts', 'Windows or Mac only; Roblox says Studio cannot run on Chromebooks or phones', 'Ages 10 and up, the age Roblox&rsquo;s education team typically suggests'],
          ['Godot', 'GDScript, a typed language', 'Windows, Mac, Linux, a web editor, and an Android editor for Chromebooks supporting Android apps', 'Confident readers of about 11 and up who want a full engine']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your child is 6 to 8',
          left: [
            'Start in Scratch. Its blocks only fit together in ways that make sense, so children spend their time on ideas instead of typing errors. The Scratch Foundation says Scratch is free for everyone and was developed at the MIT Media Lab in 2007.',
            'A first Scratch game can be one cat chasing one mouse with a score. That counts. The core ideas behind professional games, events, loops and conditions, are already there.'
          ],
          rightH3: 'If your child is 9 to 12',
          right: [
            'MakeCode Arcade is a strong second step because the same program can be viewed as blocks or as JavaScript. Children see typed code that matches blocks they already understand.',
            'If the family has a Windows or Mac computer and the child loves Roblox, Roblox Studio is the next door. Unity is a teen tool: its terms set the minimum account age in the US at 13.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the <a class="ag-inline-link" href="https://www.scratchfoundation.org/home" rel="noopener" target="_blank">Scratch Foundation</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/about" rel="noopener" target="_blank">About MakeCode Arcade</a>, the Roblox Creator documentation, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html" rel="noopener" target="_blank">Godot&rsquo;s Android editor page</a> and the Unity Terms of Service. The age suggestions in the last column are ours. We are not connected with any of these organizations.' }
      ]
    },
    {
      id: 'steps', tint: 'deep', eyebrow: 'Step by step',
      h2: 'Seven steps from idea to a game someone else has played',
      lede: 'Written for kids, with a note for parents at the end. The steps are the same whichever tool you choose.',
      body: [
        { kind: 'ol', items: [
          '<b>Think of one thing the player does.</b> Jump, catch, dodge, steer, match. Just one. A game about everything never gets made.',
          '<b>Say how you win and how you lose.</b> Catch ten apples to win. Get hit three times and you lose. Write it on paper.',
          '<b>Draw it.</b> A box for the screen, your player, the thing to catch or avoid. Five minutes with a pencil saves an hour of building.',
          '<b>Build the moving part first.</b> Make your player move with the arrow keys before anything else. Nothing is more fun to test.',
          '<b>Add the rule.</b> When the player touches the apple, add a point. When the clock runs out, the game ends.',
          '<b>Let someone else play.</b> A parent, a brother, a friend. Do not tell them how. Watch where they get stuck.',
          '<b>Fix one thing, then share.</b> Change the thing that confused them most, play again, and only then show it off.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why one thing',
          left: [
            'It is tempting to start with a whole world in your head: twenty levels, a boss, a shop, a story. Then the first afternoon ends with a menu screen and nothing to play. One verb, one rule and one ending gives them a finished game on day one, and finished games are what keep children making more.',
            'Big ideas are not wasted. We ask children to keep an ideas notebook, so the boss and the shop wait their turn instead of crowding out game number one.'
          ],
          rightH3: 'A note for parents',
          right: [
            'The most helpful thing a parent can do is be the playtester in step 6, and stay quiet. If you get stuck, say so: that is real information for the young designer.',
            'Praise the decisions, not just the result. "You made the apples faster when I got good, that was clever" teaches more than "great game".'
          ] }
      ]
    },
    {
      id: 'game', tint: 'tint', eyebrow: 'A real game to copy',
      h2: 'A complete MakeCode Arcade game in about twenty lines',
      lede: 'A good first typed game, which we wrote for this page. Open MakeCode Arcade in a browser, start a new project, switch to the JavaScript view, and type it in. We wrote it using only blocks and functions described in the MakeCode Arcade reference.',
      body: [
        { kind: 'code', label: 'MakeCode Arcade &middot; Snack Dash', lang: 'javascript', code: SNACK, note: 'Switch back to Blocks and the same program appears as blocks. Our arithmetic: a player who grabs a snack every 2 seconds scores 15 before the 30-second countdown ends (30 / 2 = 15).' },
        { kind: 'table', mt: true, caption: 'What each part of Snack Dash does, using the MakeCode Arcade reference (read 17 October 2026)', head: ['Code', 'What the reference says it does'], rows: [
          ['image.create and fill', 'Makes a blank picture and colors it in, here a 16 by 16 square for the hero and an 8 by 8 one for the snack'],
          ['sprites.create', 'Creates a sprite from a picture; kinds such as Player, Enemy and Food already exist'],
          ['controller.moveSprite', 'Moves a sprite with the direction buttons at the speeds you choose'],
          ['randint', 'Gives a random whole number from the smallest to the largest, both included'],
          ['sprites.onOverlap', 'Runs code when a sprite of one kind overlaps a sprite of another kind'],
          ['info.changeScoreBy', 'Adds to the score, or takes away if the number is negative'],
          ['info.startCountdown', 'Sets the game time in seconds; when it finishes, the game ends']
        ] },
        { kind: 'table', mt: true, caption: 'Level-up challenges for Snack Dash (ours)', head: ['Challenge', 'What to change', 'What it teaches'], rows: [
          ['Faster hero', 'The two 100s in moveSprite', 'Numbers control how a game feels'],
          ['A tricky snack', 'Give the snack its own speed so it drifts', 'Movement without the player'],
          ['An enemy', 'A second sprite of kind Enemy that costs a point on overlap', 'Two rules at once'],
          ['A bonus round', 'Start a longer countdown after 10 points', 'Conditions and state'],
          ['Your own art', 'Draw the hero in the image editor instead of a square', 'Games need artists too']
        ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the MakeCode Arcade reference pages for <a class="ag-inline-link" href="https://arcade.makecode.com/reference/sprites/create" rel="noopener" target="_blank">sprites.create</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/reference/controller/move-sprite" rel="noopener" target="_blank">controller.moveSprite</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/reference/sprites/on-overlap" rel="noopener" target="_blank">sprites.onOverlap</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/reference/info/start-countdown" rel="noopener" target="_blank">info.startCountdown</a> and <a class="ag-inline-link" href="https://arcade.makecode.com/reference/math/randint" rel="noopener" target="_blank">randint</a>. MakeCode marks the older Math.randomRange as deprecated, which is why the game uses randint.' }
      ]
    },
    {
      id: 'fun', tint: 'deep', eyebrow: 'Making it fun',
      h2: 'Three questions that turn a working game into a fun one',
      lede: 'A game that runs is not yet a game people want to play again. After the first playtest, we ask children three questions, in this order.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Is it too easy or too hard?', p: 'Watch the playtester. Bored means too easy; giving up means too hard. Change one number, such as speed or time, and test again.' },
          { h3: 'Does the player know what to do?', p: 'If they wander, add a hint: a title that says "Catch the snacks!" or an arrow. Good games teach without a manual.' },
          { h3: 'Does winning feel good?', p: 'A sound, a flash, a message. Small rewards make players smile, and a smile is the clearest sign a game is working.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changing one number teaches',
          left: [
            'In Snack Dash, a countdown of 10 seconds feels frantic and 60 feels sleepy. Somewhere between is right for each player. Children who try three values and pick one have done what game designers call tuning, without needing the word.',
            'It is also quiet maths: comparing values, predicting results, and checking a guess against what really happened.'
          ],
          rightH3: 'Ideas for a second game',
          right: [
            'A maze with a timer. A pong game for two players on one keyboard. A dodge game where things fall from the top. A quiz where each right answer makes your character jump higher.',
            'Each one reuses the same parts as Snack Dash, a moving player, a rule and an ending, arranged differently.'
          ] }
      ]
    },
    {
      id: 'sharing', tint: 'tint', eyebrow: 'Saving and sharing',
      h2: 'Where a child&rsquo;s game is saved, and who can see it',
      lede: 'Parents ask this as soon as a child says "can I show my friends?". The answer is different in each tool, so here is what each maker says.',
      body: [
        { kind: 'table', caption: 'Saving and sharing, from each tool&rsquo;s own pages (read 17 October 2026)', head: ['Tool', 'Where projects are saved', 'What sharing does'], rows: [
          ['MakeCode Arcade', 'In the browser&rsquo;s local storage; MakeCode warns that clearing browsing data removes saved projects', 'A shared project goes to MakeCode&rsquo;s public cloud, and anyone can see your project if they have its shared URL'],
          ['Scratch', 'Not covered here, because Scratch&rsquo;s help pages could not be read as plain text', 'Shared projects appear in what the Scratch Foundation calls a safe, moderated online community'],
          ['Roblox Studio', 'Published to Roblox with File, Publish, under the creator&rsquo;s account', 'By default, a new game is only open to the creator, people with edit access and group members until it is released']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our three rules for young sharers',
          left: [
            'Save a copy to a file before clearing the browser, or sign in so projects are kept online. Losing a first game to a cleared cache is a sad and common afternoon.',
            'Share links only with people you know, by message or email, until a parent has looked at the game.',
            'Use a nickname in the game, never a full name, school or town.'
          ],
          rightH3: 'Accounts and age',
          right: [
            'Each tool has its own account rules, and they change. Check the sign-up page together with your child before creating an account, especially for children under 13.',
            'For a younger child, a parent can set up and manage any account, and keep sharing switched off until the game is ready to show.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the <a class="ag-inline-link" href="https://arcade.makecode.com/faq" rel="noopener" target="_blank">MakeCode Arcade FAQ</a>, the Scratch Foundation home page and the Roblox Creator documentation on publishing.' }
      ]
    },
    {
      id: 'three-d', tint: 'deep', eyebrow: 'Going 3D',
      h2: 'Can a kid make a 3D video game?',
      lede: 'Yes, but it is the second game, not the first. Even the Godot engine&rsquo;s own tutorial says that if you are new to game development, it recommends starting with 2D games before tackling 3D games, which tend to be more complicated.',
      body: [
        { kind: 'table', caption: 'Ways a child can make a 3D game (from each maker&rsquo;s docs; ages ours)', head: ['Route', 'Needs', 'Typical age to start'], rows: [
          ['Roblox Studio', 'A Windows or Mac computer; Luau scripts', 'About 10 and up'],
          ['Coded Minecraft worlds', 'Minecraft, coded in class as part of our kids course', 'About 8 and up'],
          ['Godot 3D', 'A computer able to run the 3D renderers in Godot&rsquo;s system requirements', 'About 12 and up'],
          ['Unity', 'A Windows, Mac or Linux computer and an account', '13 and up, from Unity&rsquo;s terms']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why 2D first',
          left: [
            'In 2D there are two directions, left-right and up-down. In 3D a third appears, and with it cameras, lighting and depth. Every one of those is a new thing that can go wrong.',
            'A child who has finished two or three 2D games already knows how to plan, test and fix. They bring those habits to 3D and the extra difficulty becomes interesting instead of overwhelming.'
          ],
          rightH3: 'How our kids course handles it',
          right: [
            'Our Game Development for Kids course spends its first two months on game logic in Scratch, the next two on 2D polish and bigger builds, and saves 3D worlds in Roblox Studio and coded Minecraft for months five and six.',
            'Roblox fans can continue with our <a class="ag-inline-link" href="/how-to-make-a-roblox-game">Roblox game walkthrough</a>, which deals with which computers work, three starter scripts and keeping a first game private.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a game maker',
    h2: 'Four stages of a young game maker',
    lede: 'Four stages a young game maker moves through, each at their own speed.',
    table: { caption: 'Stages of a young game maker (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Remixer', 'Changes someone else&rsquo;s game: new colors, faster enemies'],
      ['2. Copier with ideas', 'Types a game like Snack Dash, then adds one rule of their own'],
      ['3. Maker', 'Plans a small game on paper and builds it from a blank project'],
      ['4. Designer', 'Tests on other people and changes the game because of what they saw']
    ] },
    left: { h3: 'For parents', ps: [
      'Remixing is a real first step, not cheating. It shows a child what each part of a game does.',
      'Ask your child to explain one rule in their game. Explaining is the clearest sign of real understanding.'
    ] },
    right: { h3: 'For kids', ps: [
      'Small and finished beats big and unfinished, every time.',
      'If your game breaks, change one thing and test again. That is what real game developers do all day.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Nine courses for kids who want to make games',
    lede: 'Live online, with the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'First games', sub: 'Ages 6 to 12', courses: [
        { code: 'HMVG / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'First games in blocks.' },
        { code: 'HMVG / KID / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, then 3D worlds.' },
        { code: 'HMVG / KID / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that shapes a blocky world.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 8 and up', courses: [
        { code: 'HMVG / TXT / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts for real Roblox games.' },
        { code: 'HMVG / TXT / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Text games, turtle art, first AI.' },
        { code: 'HMVG / TXT / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For older brothers and sisters.' }
      ] },
      { num: 'III', h3: 'When they turn 13', sub: 'Ages 13 to 18', courses: [
        { code: 'HMVG / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, 2D then 3D.' },
        { code: 'HMVG / TEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Browser games to share by link.' },
        { code: 'HMVG / TEN / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language under many engines.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times',
    h2: 'Game-making classes that fit around school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'A batch at an hour that fits your family, wherever you are in the US.' },
      { time: 'Weekends', l: 'Morning sessions that leave the day open.' },
      { time: '1-on-1', l: 'Whatever time your child learns well.' }
    ],
    cells: [
      { h3: 'A teacher who stays', p: 'The same face each week.' },
      { h3: 'Building, not watching', p: 'Children share their screen and make.' },
      { h3: 'A game every few weeks', p: 'Finished, not half done.' },
      { h3: 'Family playtests', p: 'Homework is letting you play.' },
      { h3: 'Online', p: 'From home, anywhere in the US.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or just your child.' }
    ]
  },

  projectsH2: 'Games our students have made',
  projectsLede: 'Built by children who started exactly where yours is. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Word for word, what parents posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Scratch, MakeCode Arcade and Roblox Studio are all free, so the only cost is the teaching. Families pay for it monthly, in US dollars, and can leave whenever a month ends.',
    free: ['A first class on us', 'Your child makes a game in it', 'No card asked for'],
    group: ['Fifteen to twenty kids', 'The same teacher', 'A batch time you pick', 'Billed monthly'],
    one: ['Private lessons', 'Times that suit you', 'Your child&rsquo;s own game ideas']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Making a video game as a kid: questions',
    items: [
      { q: 'How can a kid make a video game?', a: 'Pick a free tool that fits their age and computer, such as Scratch or MakeCode Arcade in a browser. Choose one thing the player does and one way to win, build the moving part first, then add the rule, and let someone else play it.' },
      { q: 'What is the easiest way for a kid to make a game?', a: 'Scratch, for a child new to coding. Its blocks snap together so there are no typing errors, and the Scratch Foundation says Scratch is free for everyone. A first Scratch game can be finished in one afternoon.' },
      { q: 'Can kids make a video game for free?', a: 'Yes. Scratch, MakeCode Arcade, Roblox Studio and Godot are all free to use. Roblox Studio needs a Windows or Mac computer; the others work in a browser or on more kinds of computer.' },
      { q: 'Can my child make a game on a Chromebook?', a: 'Yes. Scratch and MakeCode Arcade run in the browser, and Godot has an Android editor that supports Chromebooks supporting Android apps. Roblox Studio is the exception: Roblox says it cannot run on Chromebooks.' },
      { q: 'What age can a child start making video games?', a: 'Around 6 with Scratch, if they can read simple words. From about 8 many are ready for MakeCode Arcade, and Roblox says its team typically recommends Roblox Studio for ages 10 and up.' },
      { q: 'How do you make a 3D game as a kid?', a: 'Start with one or two 2D games, then move to Roblox Studio on Windows or Mac, or coded Minecraft. Godot\'s own tutorial recommends 2D before 3D, which it says tends to be more complicated.' },
      { q: 'Where are MakeCode Arcade games saved?', a: 'MakeCode says projects are kept in the browser\'s local storage, and clearing browsing data removes them. Save a copy to a file, or sign in, before clearing the browser.' },
      { q: 'Is it safe for kids to share their games?', a: 'It depends on the tool. MakeCode says anyone with a shared link can see the project. Roblox keeps a new game private to the creator and collaborators until it is released. Share links only with people you know until a parent has checked the game.' },
      { q: 'Can kids use Unity?', a: 'Unity\'s terms set the minimum age for an account at the age of consent to data processing, given as 13 in the US. For a child under 13 we suggest Scratch, MakeCode Arcade or Roblox Studio for their own projects.' },
      { q: 'Do the classes run on weekdays or weekends?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do game-making classes cost?', a: 'The first class is free. Then you pay for one month of teaching at a time, and this page\'s Fees section shows the monthly price in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a young game maker.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for American families.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'The next step for Roblox fans.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'Our live Scratch classes.' },
      { href: '/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced', label: 'Scratch project ideas', p: 'Thirty-plus games and stories to try.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Coding inside Minecraft.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'Where a ten-year-old can start.' },
      { href: '/video-game-coding-classes-for-kids', label: 'Video game coding classes for kids', p: 'Video game coding classes for kids: tools by age, what classes teach, how to choose.' },
      { href: '/how-to-make-a-3d-game-for-kids', label: 'How to make a 3D game for kids', p: 'How kids make a 3D game: tools by device, x, y and z, and real code.' },
      { href: '/godot-for-kids-and-teens', label: 'Godot for kids and teens', p: 'Godot for kids and teens: cost, devices, two GDScript scripts and the errors beginners hit.' }
    ]
  },

  start: {
    h2: 'Book a free game-making class',
    lede: 'Tell us your child&rsquo;s age, the games they love and the computer at home. In the first class the teacher helps them build a small game of their own, so they finish with something to show you.',
    readFirst: 'To see what a class looks like first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">our full course list</a>.',
    note: 'Our teachers live in India and teach every class live on video, which is how a family in any US state can join. WhatsApp gets the quickest reply.',
    formNote: 'Free first class, and no card details.'
  },

  footer: {
    cols: [
      { h4: 'Making games', links: [
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/blog/top-coding-games-platforms-make-learning-fun-kids', label: 'Coding games for kids' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/best-age-to-start-coding', label: 'When to start coding' }
      ] }
    ],
    bottomRight: 'Input, a rule, a score and an ending'
  },

  personalityCss: `
.ag-root.ag-hmvg .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-hmvg .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-hmvg .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hmvg .ag-table caption { text-align: left; }
.ag-root.ag-hmvg .ag-grid-3 { gap: 1.4rem; }
.ag-root.ag-hmvg .ag-band-head h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation home page (served for scratch.mit.edu/about); MakeCode Arcade about, FAQ and reference pages; Roblox Creator documentation (setup, education FAQ, publishing); Godot docs (first 2D game, system requirements, Android editor) and licence; Unity Terms of Service; all read raw on 17 October 2026.',
    localProject: 'Snack Dash, a complete MakeCode Arcade game in JavaScript (ours, written only with functions in the MakeCode reference: image.create, fill, sprites.create, controller.moveSprite, randint, scene.screenWidth, sprites.onOverlap, info.changeScoreBy, info.startCountdown), with a level-up challenge table and the arithmetic 30 / 2 = 15. Lesson family: the game loop.',
    requiredMentions: ['no tricky syntax is required', 'developed at the MIT Media Lab in 2007', 'Retro Arcade games', 'anyone can see your project if they have its shared URL', 'clearing browsing data removes saved projects', 'SpriteKind.Food', 'info.startCountdown(30)', '30 / 2 = 15', 'Chromebooks supporting Android apps', 'before tackling 3D games, which tend to be more complicated', 'Math.randomRange as deprecated', 'given as 13 in the US'],
    sources: [
      { claim: 'Scratch is free for everyone; block-based with no tricky syntax; moderated community; MIT Media Lab 2007; Scratch Foundation since 2019.', url: 'https://www.scratchfoundation.org/home' },
      { claim: 'MakeCode Arcade is a code editor for Retro Arcade games in the browser.', url: 'https://arcade.makecode.com/about' },
      { claim: 'Browser storage, clearing data removes projects, shared URLs are public.', url: 'https://arcade.makecode.com/faq' },
      { claim: 'sprites.create, default kinds, overlaps, score, countdown, randint, deprecated randomRange.', url: 'https://arcade.makecode.com/reference/sprites/create' },
      { claim: 'Roblox Studio on Windows and Mac only, not Chromebooks; typically recommended for ages 10 and up.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' },
      { claim: 'Godot recommends 2D before 3D.', url: 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html' },
      { claim: 'Godot Android editor supports Chromebooks supporting Android apps.', url: 'https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html' },
      { claim: 'Unity minimum account age, 13 in the US.', url: 'https://unity.com/legal/terms-of-service' }
    ],
    rejectedClaims: [
      'An official Scratch age range: the Scratch FAQ and parents pages load by JavaScript and the text was not readable raw, so no official range is printed; the age column is labelled ours.',
      'Scratch account rules and the Scratch founder\'s name: not printed (not read; house rule on naming individuals).',
      'MakeCode Arcade screen size in pixels: not read, so the game uses scene.screenWidth() and scene.screenHeight() instead of numbers.',
      'That Snack Dash was run by us on this page: it is written to the reference, and the reader runs it.',
      'Any affiliation with the Scratch Foundation, Microsoft, Roblox, Godot or Unity: none, stated on the page.'
    ]
  }
};
