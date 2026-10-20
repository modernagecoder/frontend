'use strict';
// Godot for kids and teens (ag- topic door; US cluster Phase 2, row 6). Search evidence: "godot for kids", "godot course
// for kids", "godot coding for kids", "godot engine for kids", "godot programming for kids", "godot tutorial for kids",
// "learn godot for kids", "godot book for kids", "learn to code from zero with godot", "learn to code with godot",
// "learn to code in godot" (keyword-research-2026-09/us/rows.tsv, autocomplete_us.tsv). AI-answer prompt U04 ("Is Godot
// good for kids learning game development? Any live classes?").
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/godot-for-kids-and-teens/), docs.godotengine.org/en/stable (Godot 4.7):
//  - about/introduction: "the free and open source community-driven 2D and 3D game engine"; "Godot is completely free and
//    open source under the permissive MIT license. No strings attached, no royalties, nothing. Users' games are theirs,
//    down to the last line of engine code."; export to "Linux, macOS, Windows", "Android, iOS", "Web-based platforms and
//    consoles"; "supported by the Godot Foundation not-for-profit".
//  - getting_started/introduction/learn_to_code_with_gdscript: "If you are new to programming, we recommend starting with
//    GDScript because we designed it to be simpler than all-purpose languages like C#."; the app "Learn GDScript From
//    Zero", "a complete beginner course with interactive practices you can do right in your browser"; open source.
//  - step_by_step/scripting_languages: "Godot offers four gameplay programming languages: GDScript, C#, and, via its
//    GDExtension technology, C and C++."; "For C#, you will need an external code editor like VSCode or Visual Studio."
//  - tutorials/scripting/gdscript/gdscript_basics: "It uses an indentation-based syntax similar to languages like
//    Python."; "GDScript is entirely independent from Python and is not based on it."
//  - about/system_requirements: native editor RAM "4 GB", web editor "8 GB"; storage "200 MB"; export templates "1.3 GB";
//    "Windows 10, macOS 10.13 (Compatibility) or macOS 10.15 (Forward+/Mobile), Linux distribution released after 2018";
//    Android native editor "Android 7.0 (Compatibility) or Android 9.0 (Forward+/Mobile)", RAM "3 GB"; "iOS: Cannot run
//    the editor". (The Android editor page says Android 5; the system requirements page is used.)
//  - tutorials/editor/using_the_android_editor: "In 2023, we added an Android port of the editor"; supports "Chromebooks
//    supporting Android apps"; "No C#/Mono support."
//  - tutorials/editor/using_the_web_editor: "The web editor is in a preliminary stage. While its feature set may be
//    sufficient for educational purposes, it is currently not recommended for production work."; "No C#/Mono support.";
//    "No project exporting."; "The editor won't warn you when closing the tab with unsaved changes."
//  - tutorials/export/exporting_for_web: "Projects written in C# using Godot 4 currently cannot be exported to the web."
//  - getting_started/first_2d_game (index, 03, 05, 06): "Dodge the Creeps!"; "It assumes that you have some programming
//    experience already."; the player script (Area2D, Input.is_action_pressed, normalized, clamp, signal hit, body_entered,
//    set_deferred); "if you hold right and down at the same time, the resulting velocity vector will be (1, 1)"; the error
//    "Attempt to call function 'play' in base 'null instance' on a null instance"; "Node names are case-sensitive";
//    ScoreTimer wait time 1; "score += 1"; "$ScoreLabel.text = str(score)".
//  - classes/class_input: get_vector "has its length limited to 1".
//  - step_by_step/signals: "timer.timeout.connect(_on_timer_timeout)".
//  - godotengine.org: latest "4.7.2", "Maintenance release: Godot 4.7.2", 18 August 2026; godotengine.org/license.
//  - Unity terms (13 in the US) and Roblox docs (Windows and Mac only) for the comparison table.
// Our own material, labelled on the page: both scripts (adapted from, and using only, the documented APIs), the
// arithmetic for diagonal speed (the length of (1, 1) is about 1.41, so 400 x 1.41 = about 566 pixels a second without
// normalizing, about 41 percent faster), the troubleshooting table wording, the twelve-class plan and the age advice.
// Course: Godot Game Development for Kids and Teens (godot-game-development-course-for-kids-and-teens, ages 10 to 17), in a batch or one to one.
// Lesson family: signals and events (a node announces, another node reacts).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MOVE = `# player.gd on an Area2D (ours: the Dodge the Creeps!
# player, shortened with Input.get_vector)
extends Area2D

signal hit

@export var speed = 400  # pixels per second
var screen_size

func _ready():
    screen_size = get_viewport_rect().size

func _process(delta):
    var direction = Input.get_vector("move_left", "move_right", "move_up", "move_down")
    position += direction * speed * delta
    position = position.clamp(Vector2.ZERO, screen_size)

func _on_body_entered(_body):
    hide()
    hit.emit()
    $CollisionShape2D.set_deferred("disabled", true)`;

const SCORE = `# main.gd on a Node with two children: a Timer
# and a Label named ScoreLabel (ours)
extends Node

var score = 0

func _ready():
    var timer = get_node("Timer")
    timer.timeout.connect(_on_timer_timeout)
    timer.start()

func _on_timer_timeout():
    score += 1
    $ScoreLabel.text = str(score)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GODOT', blurb: 'Godot for kids and teens from the official docs: what it costs, which computers run it (Chromebooks included), two GDScript scripts, common errors, and a plan.' },
  slug: 'godot-for-kids-and-teens',
  code: 'gkt',
  accent: '#546B1D',
  accentRationale: 'Godot for kids and teens, US: the allocated olive #546B1D (alloc.tsv row 6), yellower than the forest green of the game design page and far from the red and brown game pages, readable on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Godot for kids and teens',
  title: 'Godot for Kids and Teens: Free Engine, GDScript, Real Code',
  description: 'Godot for kids and teens from the official docs: free under MIT, runs on Chromebooks through its Android editor, two GDScript scripts, common errors, and classes.',
  ogDescription: 'Is Godot good for kids? What the Godot docs say about cost, computers, Chromebooks and iPads, two real GDScript scripts, the errors beginners hit, and a twelve-class plan.',
  twitterDescription: 'Godot for kids and teens: cost, devices, two GDScript scripts and the errors beginners hit.',
  pageName: 'Godot for Kids and Teens',
  webPageDescription: 'A guide for US parents, kids and teens to learning game development with the Godot engine: licence, languages, system requirements, the Android and web editors, two GDScript scripts, troubleshooting and a twelve-class plan.',
  courseDescription: 'Live online Godot and GDScript classes for children and teenagers in the United States, in a batch or one to one, from a first scene to a finished game.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Godot for kids and teens',
  navLinks: [
    { href: '#facts', label: 'About Godot' },
    { href: '#computers', label: 'Computers' },
    { href: '#scripts', label: 'Two scripts' },
    { href: '#errors', label: 'Errors' },
    { href: '#compare', label: 'Compared' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 11 to 18 &middot; Godot Engine and GDScript',
  h1: 'Godot for kids and teens',
  lede: 'Godot comes up quickly when a family searches for a free, serious way for a child to make games, and it deserves the attention. It costs nothing, has no royalties, runs on modest computers, and is one of very few full game engines with an editor that works on a Chromebook. It also asks more of a young learner than Scratch or Roblox. This page uses Godot&rsquo;s own documentation to explain what the engine is, which computers can run it, two short GDScript scripts with the reasoning behind every line, the errors beginners meet most, and how Godot compares with Roblox Studio and Unity.',
  secondaryCta: { href: '#scripts', label: 'Read the two scripts' },
  wa: 'Hello Modern Age Coders, my child in the US wants to learn Godot and GDScript. Could we book a free first lesson?',
  heroNote: 'Live since 2020 &middot; 10,000+ students &middot; Godot in a batch or one to one, any US time zone',
  spec: [
    ['For', 'Ages 11 to 18'],
    ['Engine', 'Godot 4, free'],
    ['Language', 'GDScript'],
    ['Computer', 'Windows, Mac, Linux, Chromebook'],
    ['Not on', 'iPad or iPhone'],
    ['Format', 'One to one for Godot'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'Is Godot good for kids?',
  capsule: 'Yes, for kids from about 11 and for teens. Godot is free and open source under the MIT license, and its own docs recommend beginners start with GDScript, which they say was designed to be simpler than C#. Modern Age Coders teaches it live online in our Godot Game Development course for ages 10 to 17, in a batch or one to one.',

  picks: {
    eyebrow: 'Ways to learn with us',
    h2: 'Three courses for a young Godot fan',
    lede: 'The Godot course is the direct route; the other two suit a learner who wants Unity next, or a little Python before GDScript.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', code: 'GKT / 01', title: 'Game development for teens', note: '13 to 18. The same scenes, scripts and signals ideas, taught in Unity and C#.' },
      { course: 'python-ai-kids-masterclass', code: 'GKT / 02', title: 'Python for kids', note: '9 to 12. Indentation and logic that make GDScript feel familiar.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'GKT / 03', title: 'Godot game development', note: '10 to 17. GDScript, 2D and 3D, ending in a finished game.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'About Godot',
      h2: 'Godot in seven facts, from its own documentation',
      lede: 'A parent deciding whether to let a child install an engine wants to know who makes it, what it costs, and what it will ask for. These answers come straight from the Godot website and documentation.',
      body: [
        { kind: 'table', caption: 'Godot facts from godotengine.org and the Godot docs (read 17 October 2026)', head: ['Question', 'What Godot says'], rows: [
          ['What is it?', 'A free and open source, community-driven 2D and 3D game engine'],
          ['What does it cost?', 'Nothing. The docs say it is free under the permissive MIT license, with "No strings attached, no royalties, nothing."'],
          ['Who owns the games?', '"Users&rsquo; games are theirs, down to the last line of engine code."'],
          ['Who is behind it?', 'Independent, community-driven development, supported by the Godot Foundation not-for-profit'],
          ['Which languages?', 'GDScript and C#, plus C and C++ through its GDExtension technology'],
          ['Which language for a beginner?', 'GDScript: the docs say it was designed to be simpler than all-purpose languages like C#'],
          ['Latest version', 'Godot 4.7.2, a maintenance release dated 18 August 2026 on godotengine.org']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What GDScript looks like to a child',
          left: [
            'The GDScript reference says the language uses an indentation-based syntax similar to languages like Python, and in the same breath that it is entirely independent from Python and is not based on it. Children who have met Python recognise the shape at once; children who have not find it tidier than languages full of brackets.',
            'Every script is attached to a node, such as a character, a timer or a label, and works on that node. That gives children a concrete answer to the question "where does this code live?", which many beginners struggle with.'
          ],
          rightH3: 'Where Godot asks more than Roblox',
          right: [
            'Roblox hands a child a ready-made world with players, physics and a publishing button. Godot hands them an empty project. Children make more decisions themselves: what the scenes are, how they connect, what each script controls.',
            'That is exactly why we like it for children about 11 and older who have already finished a few Scratch or Roblox games. It is the step where a hobby starts to look like engineering.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/about/introduction.html" rel="noopener" target="_blank">Godot docs introduction</a>, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/scripting_languages.html" rel="noopener" target="_blank">Scripting languages</a>, the <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" rel="noopener" target="_blank">GDScript reference</a> and <a class="ag-inline-link" href="https://godotengine.org/" rel="noopener" target="_blank">godotengine.org</a>. We are not connected with the Godot Foundation or the Godot project.' }
      ]
    },
    {
      id: 'computers', tint: 'deep', eyebrow: 'Will it run?',
      h2: 'Which computers can run Godot, including Chromebooks and iPads',
      lede: 'This is where Godot stands out for American families, because in some homes a school Chromebook is the only computer. The answers below come from Godot&rsquo;s system requirements and its pages on the Android and web editors.',
      body: [
        { kind: 'table', caption: 'Running the Godot editor, from the Godot docs (read 17 October 2026)', head: ['Device', 'Can it run the editor?', 'What the docs list'], rows: [
          ['Windows PC', 'Yes', 'Windows 10 or later; 4 GB of RAM minimum for the native editor; 200 MB of storage'],
          ['Mac', 'Yes', 'macOS 10.13 for the Compatibility renderer, macOS 10.15 for Forward+ and Mobile'],
          ['Linux', 'Yes', 'A Linux distribution released after 2018'],
          ['Chromebook', 'Yes, two ways', 'The Android editor supports Chromebooks supporting Android apps; the web editor runs in current browsers and needs 8 GB of RAM'],
          ['Android tablet', 'Yes', 'Android 7.0 for the Compatibility renderer, with 3 GB of RAM'],
          ['iPad or iPhone', 'No', 'The docs say plainly: iOS cannot run the editor']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The web editor: good for learning, with limits',
          left: [
            'Godot&rsquo;s documentation is honest about its web editor. It says the editor is in a preliminary stage and that while its feature set may be sufficient for educational purposes, it is currently not recommended for production work.',
            'The listed limits matter for children: no C#, no project exporting, and the editor will not warn you when you close the tab with unsaved changes. In class we teach web-editor students one habit above all: download the project source before closing the tab.'
          ],
          rightH3: 'The Android editor on a Chromebook',
          right: [
            'The docs say Godot added an Android port of the editor in 2023 and that it can be used to create, develop and export 2D and 3D projects. On a Chromebook that runs Android apps, this is the fuller option.',
            'It has no C# support either, so Chromebook students write GDScript, which is what we recommend for beginners anyway. The docs recommend connecting a keyboard and mouse, and we agree: a touchscreen alone is hard work for code.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/about/system_requirements.html" rel="noopener" target="_blank">System requirements</a>, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html" rel="noopener" target="_blank">Using the Android editor</a> and <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/editor/using_the_web_editor.html" rel="noopener" target="_blank">Using the Web editor</a>. The Android editor page gives a lower Android minimum than the system requirements page; the table follows the system requirements.' }
      ]
    },
    {
      id: 'scripts', tint: 'tint', eyebrow: 'Two real scripts',
      h2: 'Two GDScript scripts, and why each line is there',
      lede: 'The first script is a shortened version of the player in Godot&rsquo;s own beginner game, Dodge the Creeps!, with the animation removed and the four key checks replaced by one documented call. The second is ours too: a score that counts up every second, using the signal pattern from the docs.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; a player that moves and can be hit', lang: 'gdscript', code: MOVE, note: 'Map move_left, move_right, move_up and move_down in Project Settings, Input Map, as the lesson describes. The Input class reference says get_vector gives a vector whose length is limited to 1. The official lesson reaches the same result with four if statements and normalized(), and explains the reason: holding right and down at the same time makes the vector (1, 1). Our arithmetic: the length of (1, 1) is about 1.41, so with no limit a diagonal runner at speed 400 would cover about 566 pixels a second instead of 400, roughly 41 percent faster.' },
        { kind: 'code', label: 'Script 2 &middot; a score that counts every second', lang: 'gdscript', code: SCORE, note: 'Set the Timer&rsquo;s Wait Time to 1 in the Inspector, the value the docs use for the score timer in Dodge the Creeps!. The signals lesson connects a timer with the same line, timer.timeout.connect(_on_timer_timeout).' },
        { kind: 'two', mt: true,
          leftH3: 'The idea in both: signals',
          left: [
            'The docs describe signals as messages that nodes emit when something specific happens to them, like a button being pressed. In Script 1 the player emits hit; in Script 2 the timer emits timeout. Other code listens and reacts.',
            'This is the most important idea in Godot for a young learner, and it is not Godot-only. The same pattern runs buttons on web pages, notifications on phones and events in Roblox.'
          ],
          rightH3: 'Why set_deferred, in plain words',
          right: [
            'When an enemy touches the player, the game is in the middle of working out collisions. Switching off the player&rsquo;s collision shape at that exact moment can cause an error, so the docs use set_deferred to say: do this as soon as it is safe.',
            'Children do not need the theory yet. They need to know that some changes must wait their turn, and that Godot gives them a polite way to ask.'
          ] }
      ]
    },
    {
      id: 'errors', tint: 'deep', eyebrow: 'When it breaks',
      h2: 'The errors young Godot learners hit most, and the fix',
      lede: 'Every one of these appears in, or is warned about by, the official beginner tutorial. Knowing them in advance saves a child an evening of frustration.',
      body: [
        { kind: 'table', caption: 'Common beginner problems, from the Godot tutorial (read 17 October 2026; wording of the fixes ours)', head: ['What happens', 'Why', 'The fix'], rows: [
          ['Attempt to call function \'play\' in base \'null instance\' on a null instance', 'The node name in the script does not match the scene tree; the docs say node names are case-sensitive', 'Copy the exact name from the scene tree, capital letters included'],
          ['An animation does not play', 'The animation name in code differs from the SpriteFrames panel, for example Walk and walk', 'Make the names match exactly'],
          ['A connected signal does nothing', 'The connection icon only shows the signal will try to call a function with that name', 'Check the function name is spelled exactly as in the connection window'],
          ['The new function is missing after connecting a signal', 'With an external editor such as VS Code, the docs note a bug stops Godot creating it', 'Type the function into the script yourself'],
          ['The player gets hit twice in a split second', 'Collision is still switched on after the first hit', 'Disable the collision shape with set_deferred, as Script 1 does'],
          ['The player moves faster diagonally', 'The direction vector was longer than 1', 'Use Input.get_vector, or call normalized() before multiplying by speed']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Read the red text in the Debugger panel first.</b> It names the script and the line.',
          '<b>Check names before logic.</b> Three of the tutorial&rsquo;s own warnings are about names: node, animation and function names must match exactly.',
          '<b>Run the current scene by itself.</b> The docs use F6 (Cmd + R on a Mac) to test one scene, which narrows down where a problem lives.',
          '<b>Change one thing, then run again.</b> Two changes at once make it impossible to tell which one helped.',
          '<b>Explain the line out loud.</b> If a child cannot say what a line does, that line is where the teacher starts.'
        ] }
      ]
    },
    {
      id: 'learn', tint: 'tint', eyebrow: 'Learning from zero',
      h2: 'Learn to code from zero with Godot: the free routes and their order',
      lede: 'Many families arrive here after hearing about the free Learn GDScript From Zero app. It is a good start, and it fits into a sensible order with the official tutorial.',
      body: [
        { kind: 'table', caption: 'Free official and community routes into Godot, in the order we suggest (order ours)', head: ['Step', 'What it is', 'From the source'], rows: [
          ['1', 'Learn GDScript From Zero', 'The docs call it a complete beginner course with interactive practices you can do right in your browser; it is open source'],
          ['2', 'The Step by step lessons', 'The docs&rsquo; own introduction to nodes, scenes, scripts and signals'],
          ['3', 'Your first 2D game, Dodge the Creeps!', 'The docs say it assumes you have some programming experience already, which is why it comes third'],
          ['4', 'Your first 3D game', 'The docs recommend starting with the 2D series first'],
          ['5', 'A game of your own', 'Small, finished, and shown to someone else']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where a teacher helps',
          left: [
            'Self-study works well for steps 1 and 2. Step 3 is the steep one: the tutorial itself says it assumes some programming experience, and a first null instance error can feel like a wall.',
            'In one-to-one lessons we build Dodge the Creeps! together, then immediately change it, a new enemy, a power-up, a second level, because changing a game is how a child proves they understood it.'
          ],
          rightH3: 'A word on age',
          right: [
            'We suggest Godot from about 11, for a child who reads confidently and types without hunting for keys. For younger children we suggest Scratch first, where the same ideas, events, loops and conditions, come without typing errors.',
            'Teenagers can start at step 1 with no coding behind them. A teen who already knows Python will recognise much of the app&rsquo;s early material.'
          ] }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'Godot, Roblox or Unity?',
      h2: 'Godot compared with Roblox Studio and Unity for a young learner',
      lede: 'Here are the three side by side. Each row uses the maker&rsquo;s own documentation or terms; the last row is our advice.',
      body: [
        { kind: 'table', caption: 'Three engines side by side (read 17 October 2026; advice row ours)', head: ['', 'Godot 4', 'Roblox Studio', 'Unity'], rows: [
          ['Cost', 'Free, MIT license, no royalties', 'Free to install', 'Unity Personal is free for individuals under a revenue limit'],
          ['Language', 'GDScript or C#', 'Luau', 'C#'],
          ['Chromebook', 'Yes, Android or web editor', 'No', 'ChromeOS is not on Unity&rsquo;s Editor list'],
          ['Account age', 'Not covered in the docs we read', 'Studio typically recommended for 10 and up', 'Terms give 13 as the US minimum'],
          ['Exporting a game', 'Desktop, mobile and web; C# projects in Godot 4 cannot export to the web', 'Published inside Roblox', 'Many platforms'],
          ['Our advice', 'Ages 11 and up who want a real engine on any computer', 'Ages 10 and up who love Roblox and have Windows or Mac', 'Teens 13 and up heading for C# and larger 3D games']
        ] },
        { kind: 'p', mt: true, html: 'For the Roblox route, our <a class="ag-inline-link" href="/how-to-make-a-roblox-game">Roblox game walkthrough</a> covers Studio and three Luau scripts. For older students drawn to engine internals, see <a class="ag-inline-link" href="/c-plus-plus-game-development">C++ game development</a>.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'Twelve lessons',
      h2: 'A twelve-lesson Godot plan for kids and teens',
      lede: 'Our plan for a first Godot term. Teenagers with coding behind them move faster; younger children spend longer on each step.',
      body: [
        { kind: 'table', caption: 'Twelve Godot lessons for a first term (ours)', head: ['Lessons', 'What gets built', 'The idea'], rows: [
          ['1 to 2', 'Install or open the editor, nodes and scenes, a sprite on screen', 'Scenes and nodes'],
          ['3 to 4', 'Script 1: a player that moves and stays on screen', 'Input, vectors, delta'],
          ['5 to 6', 'Enemies that spawn on a timer; Script 2 for the score', 'Signals and timers'],
          ['7 to 8', 'A heads-up display and a game over screen', 'User interface'],
          ['9 to 10', 'A platformer level with gravity and jumping', 'Physics bodies'],
          ['11 to 12', 'Their own small game, shown to the family', 'Planning and finishing']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 11 and 12', p: 'More time on Scripts 1 and 2, plenty of changing numbers to see what happens.' },
          { h3: 'Ages 13 to 15', p: 'The full plan, then a second term on 3D or a game jam entry.' },
          { h3: 'Ages 16 to 18', p: 'Faster, with design documents and a public build to show.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How skill grows',
    h2: 'From first scene to first finished Godot game',
    lede: 'Four milestones we look for in a young Godot learner.',
    table: { caption: 'Godot milestones (ours)', head: ['Milestone', 'What it looks like'], rows: [
      ['1. Explorer', 'Moves around the editor, adds nodes, runs a scene'],
      ['2. Scripter', 'Attaches a script and makes something move with the keyboard'],
      ['3. Connector', 'Uses signals so one part of the game reacts to another'],
      ['4. Builder', 'Plans scenes before making them and finishes a small game']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 3 is the big one. A child who can explain a signal has understood how real software is put together.',
      'Ask to play their game. Godot projects run on the same computer they were made on, so the demo is instant.'
    ] },
    right: { h3: 'For kids and teens', ps: [
      'When Godot shows an error, read the line number first. Then check your spelling.',
      'Finish Dodge the Creeps!, then change three things about it. That is your first original game.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for game makers of every age',
    lede: 'All live online with one regular teacher, in a batch or one to one, Godot included.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 12', courses: [
        { code: 'GKT / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Events and loops before typed code.' },
        { code: 'GKT / KID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau in a world they already know.' },
        { code: 'GKT / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Indentation, logic and small games.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'GKT / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Ten months of engine work in C#.' },
        { code: 'GKT / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A strong partner language to GDScript.' },
        { code: 'GKT / TEN / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language Godot itself is written in.' }
      ] },
      { num: 'III', h3: 'More options', sub: 'Mixed ages', courses: [
        { code: 'GKT / MIX / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft, ages 8 to 12.' },
        { code: 'GKT / MIX / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Games that run in a browser tab.' },
        { code: 'GKT / MIX / 03', slug: 'game-development-complete-masterclass-college', title: 'Game development, 18 and over', blurb: 'For older students and adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Godot lessons arranged around your week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'One-to-one lessons on a weekday that suits your time zone.' },
      { time: 'Weekends', l: 'Mornings that suit busy families.' },
      { time: '1-on-1', l: 'Very personalised: your hours, your own game.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'Who knows your child&rsquo;s project.' },
      { h3: 'Editor on screen', p: 'We watch the real Godot editor live.' },
      { h3: 'Errors are lessons', p: 'Each one read and fixed together.' },
      { h3: 'Any computer that runs it', p: 'Including a Chromebook.' },
      { h3: 'Online in every state', p: 'Live from home.' },
      { h3: 'Private for Godot', p: 'Group courses use Unity.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Games and apps from students who began with an empty project. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold the full collection.',
  reviewsLede: 'From Google, in parents&rsquo; own words.',

  fees: {
    h2: 'Fees',
    lede: 'Godot itself is free, with no royalties, so the fee covers live teaching and nothing else. It is a monthly payment in US dollars, and there is no long commitment.',
    free: ['Free trial lesson', 'Bring the computer your child will use', 'No card required'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Unity and C#, not Godot', 'Monthly'],
    one: ['Godot lessons for one', 'Times you set', 'Your child&rsquo;s own game']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Godot for kids and teens: common questions',
    items: [
      { q: 'Is Godot good for kids learning game development?', a: 'Yes, for children from about 11 and for teens. It is free, runs on modest computers including Chromebooks, and its docs recommend beginners start with GDScript, a language they say was designed to be simpler than C#. For younger children we suggest Scratch first.' },
      { q: 'Is Godot free?', a: 'Yes. The Godot docs say it is completely free and open source under the permissive MIT license, with no royalties, and that users\' games are theirs.' },
      { q: 'Can you use Godot on a Chromebook?', a: 'Yes. Godot\'s Android editor supports Chromebooks supporting Android apps, and there is a web editor for current browsers, which the docs say needs 8 GB of RAM. The web editor cannot export projects or use C#.' },
      { q: 'Can you use Godot on an iPad?', a: 'No. Godot\'s system requirements say iOS cannot run the editor. An Android tablet can, with Android 7.0 or later for the Compatibility renderer.' },
      { q: 'What age is Godot for?', a: 'Godot sets no learning age in the docs we read. We suggest about 11 and up, for a child who reads and types confidently, and Scratch or Roblox Studio before that.' },
      { q: 'Is GDScript the same as Python?', a: 'No. The GDScript reference says it uses an indentation-based syntax similar to Python but is entirely independent from Python and is not based on it. Python experience still helps a lot.' },
      { q: 'What is Learn GDScript From Zero?', a: 'A free, open-source app the Godot docs recommend for people new to programming. The docs describe it as a complete beginner course with interactive practices you can do right in your browser.' },
      { q: 'Should my teen learn Godot or Unity?', a: 'Godot suits teens who want a light, free engine on any computer, including a Chromebook. Unity suits teens 13 and over who want C# and larger 3D projects; it is what our group teen course teaches.' },
      { q: 'Do you have a Godot course?', a: 'We teach Godot one to one, following a twelve-lesson plan adjusted to each student. Our group game development course for teens uses Unity and C#, which teaches the same ideas of scenes, scripts and signals.' },
      { q: 'Can lessons fit around school and sports?', a: 'Yes. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Godot lessons cost?', a: 'The first lesson is free. Lessons after that are paid monthly; the Fees section on this page gives the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families choosing a way into game development.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our pages for American families.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'The Roblox Studio route.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'Engine-level code for older teens.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The gentle start before Godot.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'Choosing a first teen language.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like.' },
      { href: '/unity-for-teens', label: 'Unity for teens', p: 'Unity for teens: age rules, free plans, computer needs and two first C# scripts.' },
      { href: '/game-design-classes-for-teens', label: 'Game design classes for teens', p: 'Game design for teens: a method, real tuning code, and the US competitions that judge teen games.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'Game design summer camp for teens: engines, a real script, a six-week plan.' }
    ]
  },

  start: {
    h2: 'Book a free Godot lesson',
    lede: 'Tell us your child&rsquo;s age, any coding they have done, and which computer they will use, Chromebook included. The teacher sets up Godot with them in the first lesson and gets something moving on screen.',
    readFirst: 'To see the method before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open <a class="ag-inline-link" href="/courses">every syllabus</a> we offer.',
    note: 'Lessons are taught live over video by teachers in India, so families in every US state learn with the same team. WhatsApp is the quickest way to ask a question.',
    formNote: 'The trial lesson is free; no payment details asked.'
  },

  footer: {
    cols: [
      { h4: 'Game engines', links: [
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/c-plus-plus-classes-for-teens', label: 'C++ classes for teens' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'A node announces, another node reacts'
  },

  personalityCss: `
.ag-root.ag-gkt .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-gkt .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-gkt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gkt .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-gkt .ag-steps { margin-top: 2rem; }
.ag-root.ag-gkt .ag-band-head h3 { letter-spacing: 0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Godot 4.7 documentation read raw on 17 October 2026 (introduction, learn to code with GDScript, scripting languages, GDScript reference, system requirements, Android editor, web editor, exporting for the web, first 2D game lessons 03, 05 and 06, signals) and godotengine.org (latest 4.7.2, licence); Unity terms and Roblox docs for the comparison.',
    localProject: 'Two GDScript scripts (ours): the Dodge the Creeps! player shortened with Input.get_vector, and a timer-driven score using the documented connect and str patterns; a troubleshooting table from the tutorial\'s own warnings; the diagonal-speed arithmetic (about 566 rather than 400 pixels a second, roughly 41 percent faster, without normalizing); a twelve-lesson first-term plan. Lesson family: signals and events.',
    requiredMentions: ['No strings attached, no royalties, nothing.', 'designed to be simpler than all-purpose languages like C#', 'Learn GDScript From Zero', 'iOS cannot run the editor', 'Chromebooks supporting Android apps', 'sufficient for educational purposes', 'Godot 4.7.2', 'macOS 10.13', 'timer.timeout.connect(_on_timer_timeout)', 'about 566 pixels a second', 'entirely independent from Python', 'Dodge the Creeps!'],
    sources: [
      { claim: 'Free and open source, MIT, no royalties, games belong to users, Godot Foundation, export targets.', url: 'https://docs.godotengine.org/en/stable/about/introduction.html' },
      { claim: 'GDScript recommended for beginners; Learn GDScript From Zero app.', url: 'https://docs.godotengine.org/en/stable/getting_started/introduction/learn_to_code_with_gdscript.html' },
      { claim: 'Four gameplay languages; C# needs an external editor.', url: 'https://docs.godotengine.org/en/stable/getting_started/step_by_step/scripting_languages.html' },
      { claim: 'Indentation-based like Python, but not based on Python.', url: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html' },
      { claim: 'Editor system requirements, iOS cannot run the editor.', url: 'https://docs.godotengine.org/en/stable/about/system_requirements.html' },
      { claim: 'Android editor since 2023, Chromebooks supporting Android apps.', url: 'https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html' },
      { claim: 'Web editor preliminary, educational use, limits.', url: 'https://docs.godotengine.org/en/stable/tutorials/editor/using_the_web_editor.html' },
      { claim: 'Player script, null instance error, case-sensitive names, signals.', url: 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html' },
      { claim: 'Connecting a timer signal in code.', url: 'https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html' },
      { claim: 'Latest release 4.7.2.', url: 'https://godotengine.org/' }
    ],
    rejectedClaims: [
      'Claims about outcomes of the Godot course (no results data yet): not made.',
      'Whether Godot needs an account or has an age rule: not stated in the docs read, so the comparison row says so.',
      'The Android editor\'s lower Android minimum (Android 5 on its own page): the system requirements page (Android 7.0) is used instead.',
      'That we ran the scripts on this page: Script 1 is adapted from the official lesson and Script 2 uses only documented calls; readers test them in their own Godot.',
      'Any affiliation with the Godot Foundation: none, stated on the page.'
    ]
  }
};
