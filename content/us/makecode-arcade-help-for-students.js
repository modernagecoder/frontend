'use strict';
// MakeCode Arcade help for students (ag- school-tools door; US cluster Phase T, row 151).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, read raw as Markdown on 17 October 2026 through arcade.makecode.com/api/md/arcade/<path> (the editor's own
// documentation service; raw copies in keyword-research-2026-09/us/src/makecode-arcade-help-for-students/):
//  - about: "MakeCode Arcade is a code editor to build Retro Arcade games for the browser and handheld consoles."
//  - reference/sprites/sprite/ay: "vertical acceleration for a sprite in pixels per second, per second"; "A positive value
//    causes the sprite's speed in the `bottom` direction to increase."; the 0 to 2 to 4 pixels-per-second example.
//  - reference/sprites/sprite/vy: "setting the speed to a positive value makes the sprite move to the bottom".
//  - reference/controller/move-sprite: controller.moveSprite(sprite, vx, vy).
//  - reference/sprites/sprite/is-hitting-tile: "The sprite must be in motion (a velocity of ``vx`` or ``vy`` that isn't
//    `0`) before the checking for a tile hit. Otherwise, `false` is returned even though the sprite is touching the wall
//    tile."
//  - reference/scene/set-tilemap: "Tilemaps aren't coded by the user but are created using a tilemap editor."; a game
//    "can have more than one tilemap"; tiles.setTilemap(tilemap`level1`).
//  - reference/scene/on-overlap-tile, place-on-random-tile, set-wall-at, camera-follow-sprite, set-stay-in-screen,
//    game/over, controller/button/on-event (pressed, released, repeated).
//  - save: projects kept in "the browser's indexed data store"; four files main.ts, main.blocks, README.md, pxt.json.
//  - faq: "When you clear browsing data, all of the saved projects and files that support MakeCode working offline are
//    removed."; shared projects go to "the public cloud"; History "View commits"; the unblock list (literal domains only:
//    https://makecode.com, https://cdn.makecode.com, https://api.github.com,
//    https://immersivereaderprod.<wbr>cognitiveservices.<wbr>azure.com; the editor and trg- hosts are template placeholders, not printed).
//  - offline: offline app "which you can install on a Windows or Mac OS Computer"; web app cached on first load.
//  - publishing-games: the Save icon "will download a PNG that also encodes your game!"
//  - javascript / python: "uses JavaScript along with the Static TypeScript language"; "uses Python along with the
//    JavaScript language". courses: "AP endorsed introductory class for High School students"; "A full academic year
//    course"; Code a Carnival "for students in grades 5-12".
// Our own material, labelled on the page: both programs (documented APIs only; the reader tests them), the
// troubleshooting table wording, and the jump arithmetic: with vy = -150 and ay = 350, time to the top 150 / 350 = 0.43 s,
// height 150 x 150 / (2 x 350) = 22,500 / 700 = about 32 pixels, two 16-pixel tiles (16 x 16 is the tile size in the
// docs' own examples). Practice set ours.
// Lesson family: motion as numbers (velocity, acceleration, and a condition that guards an action).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JUMP = `// A hero who runs and jumps (ours, JavaScript view)
let box = image.create(16, 16)
box.fill(5)
let hero = sprites.create(box, SpriteKind.Player)
tiles.setTilemap(tilemap\`level1\`)

controller.moveSprite(hero, 80, 0) // left, right
hero.ay = 350 // gravity, pulling down
scene.cameraFollowSprite(hero)

controller.A.onEvent(
    ControllerButtonEvent.Pressed,
    function () {
        // jump only from the floor
        if (hero.isHittingTile(CollisionDirection.Bottom)) {
            hero.vy = -150
        }
    })`;

const LEVELS = `// Two levels and a goal tile (ours)
let level = 1
scene.onOverlapTile(
    SpriteKind.Player,
    assets.tile\`goal\`,
    function (sprite, location) {
        if (level == 1) {
            level = 2
            tiles.setTilemap(tilemap\`level2\`)
            tiles.placeOnRandomTile(sprite,
                assets.tile\`start\`)
        } else {
            game.over(true)
        }
    })`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MAKECODE HELP', blurb: 'MakeCode Arcade help from Microsoft’s own docs: how to jump, add gravity, build levels with tilemaps, and get back a lost project.' },
  slug: 'makecode-arcade-help-for-students',
  code: 'ma',
  accent: '#27598F',
  accentRationale: 'MakeCode Arcade help, US: the allocated steel blue #27598F, a calm screen colour for a page about pixels, contrast 6.80, 6.40 and 5.85 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'MakeCode Arcade help',
  title: 'MakeCode Arcade Help: Jump, Gravity, Levels and Saving',
  description: 'MakeCode Arcade help for students: how to make a sprite jump, add gravity, build levels with tilemaps, fix a jump that never fires, and find a project you lost.',
  ogDescription: 'Stuck in MakeCode Arcade? The jump and gravity numbers, tilemap levels, the jump bug the docs warn about, and where your projects are really saved, from Microsoft’s own docs.',
  twitterDescription: 'MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.',
  pageName: 'MakeCode Arcade Help for Students',
  webPageDescription: 'A help page for US students using Microsoft MakeCode Arcade at school or at home, built from the MakeCode Arcade documentation, with two small programs and a worked jump calculation.',
  courseDescription: 'Live online game coding classes for US kids and teens who started in MakeCode Arcade or Scratch, moving from blocks to JavaScript and Python, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'MakeCode Arcade help',
  navLinks: [
    { href: '#jump', label: 'Jump and gravity' },
    { href: '#levels', label: 'Levels' },
    { href: '#stuck', label: 'Common problems' },
    { href: '#saved', label: 'Lost projects' },
    { href: '#school', label: 'At school' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 4 to 12 &middot; Microsoft MakeCode Arcade',
  h1: 'MakeCode Arcade help for students',
  lede: 'MakeCode Arcade is the free Microsoft editor that turns up in US computer science classes: drag blocks, press play, and a little retro game runs in the browser. Then the questions start. How do I make my character jump? Why does it fall off the screen? How do I add a second level? Where did my project go? Each answer below comes from the MakeCode Arcade documentation itself, turned into steps a student can follow, with two short programs and the arithmetic behind a good jump.',
  secondaryCta: { href: '#jump', label: 'Make a sprite jump' },
  wa: 'Hello Modern Age Coders, my child in the US uses MakeCode Arcade at school and wants to go further with game coding. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From blocks to typed code',
  spec: [
    ['For', 'Grades 4 to 12'],
    ['Tool', 'MakeCode Arcade'],
    ['Views', 'Blocks, JavaScript, Python'],
    ['Runs in', 'A web browser'],
    ['Covers', 'Jump, gravity, levels, saving'],
    ['Lessons', 'Batch or one to one'],
    ['Days', 'Any weekday or weekend'],
    ['Trial', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'To make a MakeCode Arcade sprite jump, move it left and right only, set its ay (vertical acceleration) to a positive number for gravity, and on the A button set vy to a negative number if isHittingTile(Bottom) is true. Levels are tilemaps drawn in the editor and loaded with setTilemap. Modern Age Coders teaches game coding live, ages 8 to 18.',

  picks: {
    eyebrow: 'Keep going with a teacher',
    h2: 'Three courses for students who outgrow the school unit',
    lede: 'Each starts from the game the student has already made, blocks or typed code.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'MCA / 01', title: 'Game development for kids', note: 'Kids 8 to 12 build platformers, scores and levels, then Roblox and Minecraft.' },
      { course: 'kids-coding-blocks-masterclass', code: 'MCA / 02', title: 'Coding for kids', note: 'Kids 6 to 12 go from blocks to games, apps and AI.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'MCA / 03', title: 'JavaScript for teens', note: 'Teens 13 to 18 learn the language behind Arcade&rsquo;s JavaScript view.' }
    ]
  },

  sections: [
    {
      id: 'jump', tint: 'tint', eyebrow: 'The number one question',
      h2: 'How to make a sprite jump and add gravity in MakeCode Arcade',
      lede: 'A jump is two numbers working together: an upward speed that starts the jump and a steady pull that ends it. MakeCode Arcade gives every sprite properties for both.',
      body: [
        { kind: 'table', caption: 'Sprite motion properties, from the MakeCode Arcade reference (read 17 October 2026)', head: ['Property', 'What it controls', 'Unit', 'Direction'], rows: [
          ['vx', 'Horizontal speed', 'Pixels per second', 'Positive moves right'],
          ['vy', 'Vertical speed', 'Pixels per second', 'Positive moves toward the bottom'],
          ['ax', 'Horizontal acceleration', 'Pixels per second, per second', 'Changes vx over time'],
          ['ay', 'Vertical acceleration', 'Pixels per second, per second', 'Positive speeds the sprite toward the bottom']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Stop the up and down buttons from moving the hero.</b> Use move sprite with a horizontal speed and a vertical speed of 0, so up and down no longer fight gravity.',
          '<b>Add gravity.</b> Set the hero&rsquo;s ay to a positive number, such as 350. The docs explain that a positive value increases the speed toward the bottom, which is exactly what gravity does.',
          '<b>Give it a floor.</b> Draw a tilemap and mark the ground tiles as walls, so the hero lands instead of falling through.',
          '<b>Jump on a button.</b> In an on A button pressed event, set vy to a negative number, such as -150. Negative vy moves the sprite toward the top.',
          '<b>Jump only from the floor.</b> Wrap the jump in an if that checks is hitting tile, bottom. Without it, a student can press A in mid air and fly.'
        ] },
        { kind: 'code', label: 'Program 1 &middot; run and jump', lang: 'typescript', code: JUMP, note: 'Paste this into the JavaScript view; the editor can also show JavaScript as blocks, so try switching views. It needs a tilemap named level1 with wall tiles for a floor, drawn in the tilemap editor, because tilemaps are not written in code.' },
        { kind: 'two', mt: true,
          leftH3: 'The jump, worked out (our calculation)',
          left: [
            'The docs give the rule for acceleration: a sprite at speed 0 with an acceleration of 2 is moving at 2 pixels per second after one second, and 4 after two. Our jump starts at 150 pixels per second upward, and gravity of 350 takes that away each second.',
            'So the hero reaches the top after 150 / 350 = 0.43 seconds. The height of the jump is 150 x 150 / (2 x 350) = 22,500 / 700, about 32 pixels: two tiles of 16 pixels, the tile size the documentation&rsquo;s own examples use.'
          ],
          rightH3: 'Tuning it',
          right: [
            'A floaty jump has gravity too weak for its speed. A jump that barely leaves the ground has speed too low for its gravity. Change one number at a time and press play.',
            'A useful classroom target is a jump that clears exactly the gap or wall in your level. Work out the height first, then test it, and the numbers stop being guesses.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Practice 1 (ours)', p: 'Keep ay at 350 and jump with vy = -200. About how high does the hero go? (Answer: 40,000 / 700, about 57 pixels.)' },
          { h3: 'Practice 2 (ours)', p: 'You want a jump of 48 pixels, three tiles, with ay = 350. Which speed works? (Try vy = -183: 183 x 183 / 700 is about 48.)' },
          { h3: 'Practice 3 (ours)', p: 'Double ay to 700 and keep vy at -150. What happens to the height? (It halves, to about 16 pixels.)' }
        ] }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels',
      h2: 'How to make levels in MakeCode Arcade with tilemaps',
      lede: 'In MakeCode Arcade a level is a tilemap: a grid of tiles drawn in the editor and stored in the project&rsquo;s assets. The docs say a game can have more than one tilemap, and changing the tilemap changes the level.',
      body: [
        { kind: 'table', caption: 'Tilemap tools, from the MakeCode Arcade reference (read 17 October 2026)', head: ['Block or function', 'What the documentation says it does'], rows: [
          ['set tilemap', 'Sets a tilemap as the current tilemap for the game scene'],
          ['set wall at', 'Makes a tile a barrier, so sprites cannot pass through it, or turns it back'],
          ['on overlap tile', 'Runs code when a sprite of a chosen kind overlaps a tile'],
          ['place on random tile', 'Moves a sprite to a random tile of a chosen type; with only one such tile, always that one'],
          ['camera follow sprite', 'Moves the scene so a sprite stays in view in a scene bigger than the screen'],
          ['game over', 'Stops the game and shows the current and highest scores; win can be true or false']
        ] },
        { kind: 'code', label: 'Program 2 &middot; a goal tile that loads level 2', lang: 'typescript', code: LEVELS, note: 'It assumes two tilemaps named level1 and level2, a tile named goal at the end of each level, and a tile named start where level 2 begins. Draw them in the editor first; the names in the code must match the names in the assets.' },
        { kind: 'two', mt: true,
          leftH3: 'Why a level variable',
          left: [
            'Without the level variable, touching the goal on level 2 would load level 2 again forever. One number that remembers where the player is turns a loop into a sequence.',
            'This is the same idea as a save slot in a big game: the program keeps a little state and decides what happens next from it.'
          ],
          rightH3: 'Designing a level that works',
          right: [
            'Draw the floor first and mark it as walls, then place the start and the goal, then add hazards. A level that cannot be finished is a classic bug, and it is a design bug, not a code bug.',
            'Play your own level start to finish after every change. If you need to jump a gap, use the jump height from the section above to size it.'
          ] }
      ]
    },
    {
      id: 'stuck', tint: 'tint', eyebrow: 'Common problems',
      h2: 'Why your MakeCode Arcade game is not doing what you expected',
      lede: 'These are classic MakeCode Arcade problems. Each cause comes from a documented rule, so the fix is not a guess.',
      body: [
        { kind: 'table', caption: 'Symptoms and fixes (our table, each rule from the MakeCode Arcade reference)', head: ['What happens', 'The documented rule behind it', 'Fix'], rows: [
          ['The jump button does nothing', 'is hitting tile returns false unless the sprite is moving', 'Make sure gravity (ay) is set so the hero keeps pressing on the floor'],
          ['The hero flies with each press', 'Nothing stops a jump in mid air', 'Wrap the jump in the is hitting tile, bottom check'],
          ['The hero walks off the screen', 'A moving sprite leaves the screen unless something stops it', 'Use camera follow sprite, or set stay in screen'],
          ['The hero falls through the floor', 'Wall tiles are what create a barrier for sprites', 'Mark floor tiles as walls in the tilemap editor'],
          ['Up and down fight gravity', 'move sprite sets vertical speed from the buttons', 'Set the vy value in move sprite to 0 in a platformer'],
          ['An event runs again and again', 'A button event can be pressed, released or repeated', 'Choose pressed, not repeated, for a single jump']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule behind a classic jump bug',
          left: [
            'The docs put it plainly: the sprite must be in motion, with a vx or vy that is not 0, before the check for a tile hit; otherwise false is returned even though the sprite is touching the wall tile.',
            'Our reading of that rule: with no gravity, a hero standing still has a vy of 0, so the check fails and the jump never fires. Gravity keeps a little downward motion going, and the check works.'
          ],
          rightH3: 'How to find a bug yourself',
          right: [
            'Make the sprite tell you what it knows. A say block showing vy, or whether is hitting tile is true, turns an invisible number into something you can watch while you play.',
            'Then change one thing, play again, and note what changed. That habit is what our teachers practise with students in every class, whatever the tool.'
          ] }
      ]
    },
    {
      id: 'saved', tint: 'deep', eyebrow: 'Lost work',
      h2: 'Where MakeCode Arcade saves your projects, and how to keep them',
      lede: 'The most painful MakeCode question is the one asked after a project disappears. The documentation explains exactly where projects live, which also explains how they get lost.',
      body: [
        { kind: 'table', caption: 'Saving and sharing, from the MakeCode documentation (read 17 October 2026)', head: ['Question', 'What the documentation says'], rows: [
          ['Where is my project?', 'In the browser&rsquo;s local indexed data store, named or as an Untitled project'],
          ['What is in a project?', 'Four files: main.ts, main.blocks, README.md and pxt.json'],
          ['What deletes it?', 'Clearing browsing data removes all saved projects and the offline files'],
          ['What survives?', 'A project you shared to the public cloud is still there'],
          ['Who can see a shared project?', 'Anyone who has its shared URL'],
          ['Can I go back a version?', 'Yes, with GitHub: History, then View commits'],
          ['How do I keep a copy?', 'The Save icon downloads a PNG that also encodes your game']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why school projects vanish',
          left: [
            'Because projects live inside one browser on one computer, a project made on a school laptop is not on the home computer, and a laptop that clears its browsing data at the end of the day takes the project with it.',
            'Signing in to a different browser profile has the same effect. The project is not deleted; it is in a browser you are not using.'
          ],
          rightH3: 'A habit that prevents it',
          right: [
            'At the end of every session, download the project file with the Save icon and keep it in your school drive or email it to yourself. Opening that file later brings the whole game back.',
            'For work you share with a teacher, use the Share button. Remember that anyone with the link can see it, so share it only with the people it is meant for.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://arcade.makecode.com/save" rel="noopener" target="_blank">Saving projects</a>, the <a class="ag-inline-link" href="https://arcade.makecode.com/faq" rel="noopener" target="_blank">MakeCode Arcade FAQ</a> and <a class="ag-inline-link" href="https://arcade.makecode.com/publishing-games" rel="noopener" target="_blank">Publishing games</a>. We are not connected with Microsoft.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'At school',
      h2: 'MakeCode Arcade at school: blocked sites, offline use and the three views',
      lede: 'MakeCode Arcade appears in US high school courses that Microsoft lists on its own courses page, including an AP Computer Science Principles course and a full-year introduction to computer science, plus activities for grades 5 to 12.',
      body: [
        { kind: 'two',
          leftH3: 'If the editor will not load at school',
          left: [
            'School networks sometimes block the sites MakeCode needs. The FAQ lists domains to unblock, among them https://makecode.com, https://cdn.makecode.com, https://api.github.com and https://immersivereaderprod.<wbr>cognitiveservices.<wbr>azure.com, alongside the editor&rsquo;s own address.',
            'A student cannot change a school network. Show that list to the teacher or the school&rsquo;s technology staff, who can.'
          ],
          rightH3: 'Working without internet',
          right: [
            'The docs describe two routes. The web editor is cached in the browser the first time it loads, so it can keep working offline; adding a new extension needs a connection again.',
            'There is also an offline app that installs on a Windows or Mac computer and works the same way as the web editor.'
          ] },
        { kind: 'table', mt: true, caption: 'The three ways to write an Arcade game (from the MakeCode docs; the last column is our advice)', head: ['View', 'What the docs say', 'Who it suits'], rows: [
          ['Blocks', 'Blocks snap into each other; the on start event runs first', 'Beginners, and anyone planning a game'],
          ['JavaScript', 'JavaScript along with the Static TypeScript language', 'Students ready to type, and AP CSP students'],
          ['Python', 'Python along with the JavaScript language', 'Students who already use Python in class']
        ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://arcade.makecode.com/courses" rel="noopener" target="_blank">MakeCode Arcade courses</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/offline" rel="noopener" target="_blank">Using MakeCode offline</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/javascript" rel="noopener" target="_blank">JavaScript</a> and <a class="ag-inline-link" href="https://arcade.makecode.com/python" rel="noopener" target="_blank">Python</a>.' }
      ]
    },
    {
      id: 'help', tint: 'deep', eyebrow: 'Class assignments',
      h2: 'Help with a MakeCode class project, without doing it for you',
      lede: 'Some students come to us in the middle of a graded MakeCode unit. Here is how we handle that.',
      body: [
        { kind: 'two',
          leftH3: 'What we teach',
          left: [
            'We teach the idea the assignment is testing: events, variables, velocity and acceleration, conditions, tilemaps. Students practise it on a different small game, then go back and solve their own assignment.',
            'That way the grade reflects what the student can do, and the next unit is easier rather than harder.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not write or finish graded assignments, and we do not provide answer keys. If a student asks for the answer, the teacher asks the question that leads to it.',
            'If your class has rules about outside help, follow them, and tell your teacher you are learning with a tutor.'
          ] },
        { kind: 'p', mt: true, html: 'Ready for more after Arcade? Our <a class="ag-inline-link" href="/scratch-coding-classes-for-kids">Scratch coding classes</a> suit younger students, the <a class="ag-inline-link" href="/blog/top-coding-games-platforms-make-learning-fun-kids">guide to coding games and platforms</a> compares the options, and <a class="ag-inline-link" href="/minecraft-coding-classes-for-kids">Minecraft coding classes</a> use a MakeCode editor too.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From blocks to typed code',
    h2: 'Four stages of an Arcade game maker',
    lede: 'Where a student might be after a school unit, and what comes next.',
    table: { caption: 'Stages of a young MakeCode Arcade coder (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Follower', 'Finishes the built-in tutorials step by step'],
      ['2. Tinkerer', 'Changes speeds and images to see what happens'],
      ['3. Designer', 'Plans a level, sets jump numbers on purpose, adds a second level'],
      ['4. Typist', 'Switches to JavaScript or Python view and writes code directly']
    ] },
    left: { h3: 'For parents', ps: [
      'Arcade is a real foundation. Velocity, events and conditions are the same ideas used in professional game engines.',
      'The step from stage 3 to stage 4 is where a teacher helps most, because typed code brings typing errors with it.'
    ] },
    right: { h3: 'For students', ps: [
      'Switch to JavaScript view now and then, even if you write in blocks. Reading your own program as text is the fastest way to stage 4.',
      'Finish small games. A one-level game that works teaches more than a ten-level plan.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses after MakeCode Arcade',
    lede: 'Every one is live, with a regular teacher, in a group batch or private lessons.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'MCA / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'More blocks, bigger games.' },
        { code: 'MCA / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'MakeCode blocks in a 3D world.' },
        { code: 'MCA / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'From Arcade&rsquo;s Python view to real Python.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'MCA / TEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Browser games written by hand.' },
        { code: 'MCA / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Games, data and AI projects.' },
        { code: 'MCA / TEN / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'From 2D sprites to Unity.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'MCA / PRO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Luau', blurb: 'The jump to 3D and real players.' },
        { code: 'MCA / PRO / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of game engines.' },
        { code: 'MCA / PRO / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI, carefully.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that start from your own game',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'A batch after school, in your own time zone.' },
      { time: 'Weekends', l: 'Weekend mornings for longer building sessions.' },
      { time: '1-on-1', l: 'Times you choose, around school.' }
    ],
    cells: [
      { h3: 'Open your project', p: 'Arcade runs in the browser, so class starts there.' },
      { h3: 'Blocks or text', p: 'We work in whichever view you use.' },
      { h3: 'Same teacher', p: 'Week after week, one person.' },
      { h3: 'Concepts, not answers', p: 'You solve your own assignments.' },
      { h3: 'All fifty states', p: 'Online, from any US time zone.' },
      { h3: 'Batch or private', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students went on to build',
  projectsLede: 'A few finished projects by our students. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parent reviews from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'MakeCode Arcade costs nothing, and the first lesson is free too. Regular classes are paid for a month at a time, in US dollars, and you can stop after any month.',
    free: ['A free first lesson', 'Bring your Arcade game', 'No card asked for'],
    group: ['Fifteen to twenty in a batch', 'A regular teacher', 'You choose the batch', 'Billed monthly'],
    one: ['Private lessons', 'Scheduled around school', 'Built on your project']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'MakeCode Arcade: common questions',
    items: [
      { q: 'How do you make a sprite jump in MakeCode Arcade?', a: 'Set a positive ay on the sprite for gravity, then in an on A button pressed event set vy to a negative number, such as -150, but only if is hitting tile, bottom is true, so the sprite jumps from the floor.' },
      { q: 'How do you add gravity in MakeCode Arcade?', a: 'Set the sprite\'s ay property, its vertical acceleration in pixels per second per second. A positive value speeds the sprite toward the bottom of the screen, which works as gravity.' },
      { q: 'Why does my jump not work in MakeCode Arcade?', a: 'The docs say is hitting tile returns false unless the sprite is moving, even when it touches a wall tile. Set gravity so the sprite keeps pressing on the floor, and make sure the floor tiles are walls.' },
      { q: 'How do you make levels in MakeCode Arcade?', a: 'Draw each level as a tilemap in the tilemap editor, then load it with set tilemap. A game can have several tilemaps, and setting a different one changes the level, for example when the player touches a goal tile.' },
      { q: 'Where are my MakeCode Arcade projects saved?', a: 'In your browser\'s local data store on that computer. Clearing browsing data removes them, so download a copy with the Save icon or share the project before you leave a school computer.' },
      { q: 'Can I get a deleted MakeCode project back?', a: 'If the browser data was cleared, only a copy saved elsewhere can bring it back: a downloaded project file, a shared link, or a GitHub repository with its commit history.' },
      { q: 'Can MakeCode Arcade work offline?', a: 'Yes. The web editor is cached the first time it loads, and Microsoft also offers an offline app for Windows and Mac computers. Adding a new extension needs an internet connection.' },
      { q: 'Does MakeCode Arcade use real code?', a: 'Yes. Besides blocks, it has a JavaScript view, using JavaScript with Static TypeScript, and a Python view. Students can switch views and see the same program as text.' },
      { q: 'Can you do my MakeCode assignment?', a: 'No. We never write graded work or give answer keys. We teach the concept behind the assignment, such as velocity or tilemaps, so the student can complete it on their own.' },
      { q: 'When are classes for US students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do game coding classes cost?', a: 'The first lesson is free. After that, classes are paid monthly, and the fees part of this page states that monthly price in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who like making games.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'Block coding for younger game makers.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Another MakeCode editor, in 3D.' },
      { href: '/blog/top-coding-games-platforms-make-learning-fun-kids', label: 'Coding games and platforms', p: 'How the popular tools compare.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our full set of pages for US families.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'What fits at that age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside a live class.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.' },
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live classes', p: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.' },
      { href: '/codehs-help-for-students', label: 'CodeHS help for students', p: 'CodeHS help: resets, debugger, unit tests, autograder messages and login fixes.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send us the share link to your Arcade game, or just describe it. The teacher plays it before the lesson and plans the next step from there.',
    readFirst: 'Want to know what a lesson is like first? Read <a class="ag-inline-link" href="/how-we-teach">how our classes run</a>, or open any syllabus on <a class="ag-inline-link" href="/courses">our course list</a>.',
    note: 'Our teaching team works from India, entirely over live video, so families in every US state join the same way. WhatsApp is the quickest channel for questions.',
    formNote: 'Booking the trial lesson needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Game coding', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/python-for-9-year-olds', label: 'Python for 9 year olds' }
      ] }
    ],
    bottomRight: 'Speed, acceleration, and a check before you jump'
  },

  personalityCss: `
.ag-root.ag-ma .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ma .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-ma .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ma .ag-table caption { text-align: left; }
.ag-root.ag-ma .ag-steps { gap: 0.8rem; }
.ag-root.ag-ma .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'MakeCode Arcade documentation read raw on 17 October 2026 through arcade.makecode.com/api/md/arcade: sprite vx, vy and ay definitions and units; move sprite; is hitting tile and its motion caveat; set tilemap and the tilemap editor; on overlap tile, place on random tile, set wall at, camera follow sprite, game over; saving (indexed data store, four project files), FAQ (clearing browsing data, public cloud sharing, unblock domains, View commits), offline app and cached web app, publishing (Save downloads a PNG), JavaScript and Python views, the courses page (AP CSP, full-year intro CS, grades 5 to 12).',
    localProject: 'Two MakeCode Arcade programs (ours, documented APIs only): a run-and-jump hero with ay = 350 and a floor-guarded jump of vy = -150, and a goal tile that loads level 2 then ends the game. Our jump arithmetic: 150 / 350 = 0.43 s to the top, 22,500 / 700 = about 32 pixels high, two 16-pixel tiles; a three-item practice set. Lesson family: motion as numbers.',
    requiredMentions: ['Pixels per second, per second', 'must be in motion', 'isHittingTile(CollisionDirection.Bottom)', 'tiles.setTilemap', 'main.blocks', 'pxt.json', 'Clearing browsing data removes all saved projects', 'https://cdn.makecode.com', 'Static TypeScript', 'grades 5 to 12', '22,500 / 700', '150 / 350 = 0.43 seconds'],
    sources: [
      { claim: 'ay is vertical acceleration in pixels per second per second; positive speeds the sprite toward the bottom.', url: 'https://arcade.makecode.com/reference/sprites/sprite/ay' },
      { claim: 'is hitting tile returns false unless the sprite is moving.', url: 'https://arcade.makecode.com/reference/sprites/sprite/is-hitting-tile' },
      { claim: 'Tilemaps are made in the tilemap editor; a game can have several; setTilemap changes the level.', url: 'https://arcade.makecode.com/reference/scene/set-tilemap' },
      { claim: 'Projects are saved in the browser data store as four files.', url: 'https://arcade.makecode.com/save' },
      { claim: 'Clearing browsing data removes projects; sharing; unblock list; View commits.', url: 'https://arcade.makecode.com/faq' },
      { claim: 'Offline app for Windows and Mac; cached web app.', url: 'https://arcade.makecode.com/offline' },
      { claim: 'Courses for AP CSP, a full-year intro course, and grades 5 to 12.', url: 'https://arcade.makecode.com/courses' }
    ],
    rejectedClaims: [
      'A fixed screen size in pixels: the docs mention 160 and 120 only as hypothetical examples, so the page uses scene.screenWidth() wording and states no size.',
      'The editor and trg- domains in the unblock list: the FAQ shows them as template placeholders, so only the literal domains are printed.',
      'That we ran the two programs on this page: they use documented APIs and the reader tests them in the editor.',
      'Answer keys or finished graded assignments: never provided; the page says we teach the concept.',
      'Any affiliation with Microsoft: none, and the page says so.'
    ]
  }
};
