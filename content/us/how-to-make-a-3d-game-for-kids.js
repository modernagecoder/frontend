'use strict';
// How to make a 3D game for kids (ag- how-to door; US cluster Phase 2, row 12).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, fetched raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/how-to-make-a-3d-game-for-kids/):
//  - docs.godotengine.org/en/stable/about/introduction: "the free and open source"; "completely free and open source
//    under the permissive MIT license. No strings attached, no royalties"; export to desktop, mobile, Web and consoles.
//  - godotengine.org/license: "Godot Engine is free and open source", "released under the permissive MIT license";
//    licence terms "do not apply to the content you create with it".
//  - godotengine.org/download/windows: "4.7.2", "18 August 2026"; Recommended "Vulkan 1.0 compatible hardware", Minimal
//    "OpenGL 3.3 / OpenGL ES 3.0 compatible hardware".
//  - docs.godotengine.org/.../about/system_requirements: RAM "Native editor: 4 GB", "Web editor: 8 GB"; storage "200 MB";
//    OS "Windows 10, macOS 10.13 (Compatibility) or macOS 10.15 (Forward+/Mobile), Linux distribution released after
//    2018"; mobile "Android: SoC with any 32-bit or 64-bit ARM or x86 CPU"; "iOS: Cannot run the editor".
//  - .../getting_started/step_by_step/scripting_languages: "If you're a beginner, we recommend to start with GDScript.";
//    "GDScript looks like Python as you structure your code blocks using indentations".
//  - .../tutorials/3d/introduction_to_3d: "1 unit being equal to 1 meter"; "The Y coordinate is used for "up""; "X is
//    sides", "Y is up/down", "Z is front/back"; Red, Green, Blue for X, Y, Z; grids "1x1 meter by default".
//  - .../getting_started/first_3d_game (index, 03, 06): "Squash the Creeps"; "if you're new to game development, we
//    recommend you to start with 2D. 3D game code is always more complex"; speed = 14, fall_acceleration = 75,
//    jump_impulse = 20; "In 3D, the XZ plane is the ground plane."; diagonal vector "a length of about 1.4"; normalized().
//  - .../classes/class_characterbody3d: "CharacterBody3D is a specialized class for physics bodies that are meant to be
//    user-controlled."; move_and_slide(); is_on_floor().
//  - Roblox (facts reused from the pilot dossier, raw files in us/src-pilots/roblox/): Studio "a free application
//    available on Windows and Mac"; "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones.";
//    "Our team typically recommends it for ages 10 and up".
//  - create.roblox.com/docs/studio/testing-modes (raw copy under src/roblox-studio-errors-fixed/): Test (F5) inserts
//    your avatar; education FAQ: "Younger students typically focus on the creation and design of environments".
//  - docs.unity3d.com/Manual/system-requirements.html: "System requirements for Unity 6.6"; Windows "Windows 10 version
//    21H1 (build 19043) or newer"; macOS "Ventura 13 or newer"; Linux "Ubuntu 22.04, Ubuntu 24.04"; "supported on
//    workstations or laptop form factors running without emulation, container or compatibility layer".
// Not used: any Unity price or plan terms (not fetched); Scratch 3D claims (no primary source read).
// Our own material, labelled on the page: the GDScript player (Godot's documented API; the Input Map actions must be
// created first; the reader runs it), the tool table's "who it suits" column, the eight steps, and the jump arithmetic:
// time to the top 20 / 75 = 0.27 s; height 20 x 20 / (2 x 75) = 400 / 150 = 2.67 m; one second of running at speed 14
// covers 14 m, fourteen 1-meter grid squares.
// Lesson family: three dimensions as numbers (vectors, velocity and gravity on three axes).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PLAYER = `# player.gd on a CharacterBody3D (ours, Godot 4)
extends CharacterBody3D

@export var speed = 14  # meters per second
@export var fall_acceleration = 75
@export var jump_impulse = 20

var target_velocity = Vector3.ZERO

func _physics_process(delta):
    var direction = Vector3.ZERO
    if Input.is_action_pressed("move_right"):
        direction.x += 1
    if Input.is_action_pressed("move_left"):
        direction.x -= 1
    if Input.is_action_pressed("move_back"):
        direction.z += 1
    if Input.is_action_pressed("move_forward"):
        direction.z -= 1
    if direction != Vector3.ZERO:
        direction = direction.normalized()

    # x and z: the ground plane
    target_velocity.x = direction.x * speed
    target_velocity.z = direction.z * speed

    # y: up and down
    var jump = Input.is_action_just_pressed("jump")
    if is_on_floor() and jump:
        target_velocity.y = jump_impulse
    if not is_on_floor():
        target_velocity.y -= fall_acceleration * delta

    velocity = target_velocity
    move_and_slide()`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: '3D GAMES', blurb: 'How kids can make a 3D game: which free tool fits which computer, how x, y and z work, and a real Godot script that runs and jumps.' },
  slug: 'how-to-make-a-3d-game-for-kids',
  code: 'how',
  accent: '#60559E',
  accentRationale: '3D games for kids, US: the allocated dusk violet #60559E, a depth colour for a page about the third axis, contrast 6.02, 5.66 and 5.18 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'How to make a 3D game for kids',
  title: 'How to Make a 3D Video Game for Kids: Tools, Steps and Code',
  description: 'How to make a 3D video game for kids: which free tool runs on which computer, how x, y and z work, eight steps to a playable game, and a real Godot script.',
  ogDescription: 'Roblox Studio, Godot and Unity compared by device and age, the three axes explained, eight steps to a first 3D game, and a GDScript character that runs and jumps.',
  twitterDescription: 'How kids make a 3D game: tools by device, x, y and z, and real code.',
  pageName: 'How to Make a 3D Game for Kids',
  webPageDescription: 'A guide for US kids and parents to making a first 3D video game, comparing Roblox Studio, Godot and Unity from their own documentation, with a worked jump calculation and a Godot script.',
  courseDescription: 'Live online game development classes for US kids and teens, building 3D games in Roblox Studio and, for teens, Unity, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'How to make a 3D game',
  navLinks: [
    { href: '#tools', label: 'Tools' },
    { href: '#axes', label: 'X, Y and Z' },
    { href: '#steps', label: 'Eight steps' },
    { href: '#code', label: 'Real code' },
    { href: '#ready', label: '2D first?' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 10 to 17 &middot; 3D game making',
  h1: 'How to make a 3D video game for kids',
  lede: 'Kids who have spent hours inside 3D worlds sooner or later want to build one of their own. It is possible, with free tools, on an ordinary home computer, but 3D asks for a few things that flat games do not: a computer that can run a 3D editor, a feel for three axes instead of two, and code that moves objects through space. This guide takes those one at a time. It compares three widely used tools, using each one&rsquo;s own documentation, explains x, y and z in plain terms, lays out eight steps to a first playable 3D game, and finishes with a real script that makes a character run and jump.',
  secondaryCta: { href: '#tools', label: 'Compare the 3D tools' },
  wa: 'Hello Modern Age Coders, my child in the US wants to learn how to make 3D games. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; 3D games in Roblox Studio and Unity',
  spec: [
    ['For', 'Ages 10 to 17'],
    ['Tools', 'Roblox Studio, Godot, Unity'],
    ['Languages', 'Luau, GDScript, C#'],
    ['Computer', 'Windows or Mac, usually'],
    ['Skills', 'Axes, vectors, gravity'],
    ['Class size', 'Group batch or private'],
    ['Schedule', 'Flexible across the week'],
    ['Try it', 'One free trial lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'To make a 3D video game, a kid picks a free 3D tool that runs on their computer (Roblox Studio or Godot are good first choices; Unity suits older teens), learns how x, y and z place objects in space, builds a floor and a player, then writes code that moves the player and applies gravity. Modern Age Coders teaches 3D game building live online, ages 10 to 17.',

  picks: {
    eyebrow: 'Build it with a teacher',
    h2: 'Three courses for kids who want to make 3D games',
    lede: 'Two of them build in 3D from early on; the third lays the game-design groundwork first.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: '3DG / 01', title: 'Roblox game coding in Luau', note: 'For 8 to 14 year olds: a 3D world, physics and scripts from term one.' },
      { course: 'complete-game-development-masterclass-for-teens', code: '3DG / 02', title: 'Game development for teens', note: 'Teens 13 to 18 move into Unity and C#, from scenes to shipped games.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: '3DG / 03', title: 'Godot game development', note: 'Ages 10 to 17: free, open-source Godot, from 2D scenes to a 3D game in GDScript.' }
    ]
  },

  sections: [
    {
      id: 'tools', tint: 'tint', eyebrow: 'Choose a tool',
      h2: 'Which 3D game tool fits which kid and which computer',
      lede: 'The first question is not which tool is most powerful. It is which one will actually run on the computer at home. Each tool publishes its requirements, and they differ more than most parents expect.',
      body: [
        { kind: 'table', caption: 'Three 3D tools, from each one&rsquo;s own documentation (read 17 October 2026); the last row is our advice', head: ['Point', 'Roblox Studio', 'Godot', 'Unity'], rows: [
          ['Cost to install', 'Roblox calls Studio a free application', 'Free and open source, MIT license', 'Not covered here; check Unity&rsquo;s own plans'],
          ['Windows', 'Yes', 'Windows 10 or later', 'Windows 10 version 21H1 or newer'],
          ['Mac', 'Yes', 'macOS 10.13 or 10.15, by renderer', 'macOS Ventura 13 or newer'],
          ['Chromebook, tablet, phone', 'Studio cannot run on Chromebooks or phones', 'A web editor (8 GB RAM) and an Android editor; iOS cannot run the editor', 'Workstations or laptops, without emulation'],
          ['Language', 'Luau', 'GDScript, which Godot recommends for beginners, or C#', 'C#, the language our teen course teaches'],
          ['Age guidance', 'Roblox typically recommends Studio for ages 10 and up', 'None published', 'None published'],
          ['Who it suits (ours)', 'Ages 10 to 14 who already play Roblox', 'Ages 12 and up who like tinkering', 'Ages 14 and up ready for a professional engine']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the family computer is a Chromebook',
          left: [
            'Roblox&rsquo;s education FAQ rules out Chromebooks and smartphones for building in Studio, and Unity lists its editor for workstations and laptops running without emulation, container or compatibility layer.',
            'Of the three requirement pages we read, only Godot&rsquo;s lists a web editor, with 8 GB of memory for it against 4 GB for the native editor. Check the Chromebook&rsquo;s memory before planning around it; a Windows or Mac laptop is the simpler route.'
          ],
          rightH3: 'Where Godot fits on this page',
          right: [
            'The courses linked on this page build in 3D with Roblox Studio for younger students and Unity for teens. Godot is included because it is free, open source and well documented, and it makes a strong first engine for a tinkering teen.',
            'The ideas carry across all three. A child who understands axes, velocity and gravity in Roblox Studio can read the Godot script further down this page.'
          ] },
        { kind: 'source', html: 'Read on 17 October 2026: <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/setup" rel="noopener" target="_blank">Roblox Studio setup</a>, the <a class="ag-inline-link" href="https://create.roblox.com/docs/education/resources/frequently-asked-questions-education" rel="noopener" target="_blank">Roblox education FAQ</a>, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/about/system_requirements.html" rel="noopener" target="_blank">Godot system requirements</a>, the <a class="ag-inline-link" href="https://godotengine.org/license/" rel="noopener" target="_blank">Godot license</a> and <a class="ag-inline-link" href="https://docs.unity3d.com/Manual/system-requirements.html" rel="noopener" target="_blank">Unity 6.6 system requirements</a>. We are not connected with Roblox, the Godot project or Unity.' }
      ]
    },
    {
      id: 'axes', tint: 'deep', eyebrow: 'Thinking in 3D',
      h2: 'X, Y and Z: the idea that makes 3D games different',
      lede: 'A flat game places things with two numbers, across and down. A 3D game needs a third. Godot&rsquo;s documentation explains its convention in three short lines, which make a good starting point for any 3D tool.',
      body: [
        { kind: 'table', caption: 'Godot&rsquo;s 3D coordinate system, from its documentation (read 17 October 2026)', head: ['Axis', 'Meaning in Godot', 'Color on screen'], rows: [
          ['X', 'Sides: left and right', 'Red'],
          ['Y', 'Up and down', 'Green'],
          ['Z', 'Front and back', 'Blue'],
          ['Scale', '1 unit is 1 meter, and physics is tuned for that', 'Grid squares are 1x1 meter by default']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The ground is not where kids expect',
          left: [
            'In a flat game, y usually runs down the screen. In Godot&rsquo;s 3D, Y is up, and the ground is the plane made by X and Z. The documentation says it directly: in 3D, the XZ plane is the ground plane.',
            'That is why the movement code below changes x and z when a player walks, and changes y only to jump or fall. A value placed on the wrong axis is a classic first 3D bug.'
          ],
          rightH3: 'Why diagonal movement needs a fix',
          right: [
            'If a player holds forward and right together, the direction has 1 on two axes at once. Godot&rsquo;s tutorial points out that this vector has a length of about 1.4, so the player would move faster diagonally than straight.',
            'The fix is one method, normalized(), which keeps the direction but sets the length back to 1. Children who meet this learn, without being told, a piece of geometry they will see again in math class: the diagonal of a unit square.'
          ] },
        { kind: 'source', html: 'Sources: Godot&rsquo;s <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html" rel="noopener" target="_blank">Introduction to 3D</a> and <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/getting_started/first_3d_game/03.player_movement_code.html" rel="noopener" target="_blank">Moving the player with code</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'steps', tint: 'tint', eyebrow: 'Step by step',
      h2: 'Eight steps from an empty scene to a playable 3D game',
      lede: 'This is the order we use with students in any 3D tool. It keeps the first game small enough to finish, which matters more in 3D than anywhere else.',
      body: [
        { kind: 'ol', items: [
          '<b>Pick the tool for your computer.</b> Use the table above. Install it and open an empty 3D project or template.',
          '<b>Learn to move the camera.</b> Spend the first session flying around the empty world. Being lost in 3D space is a classic early frustration.',
          '<b>Place a floor.</b> Add a large flat box and fix it in place, so gravity leaves it where you put it.',
          '<b>Add a player.</b> In Godot, that is a CharacterBody3D, which its documentation describes as a physics body meant to be user-controlled. In Roblox Studio, the avatar is added for you when you press Test.',
          '<b>Make it move.</b> Write code that reads the keys and changes the player&rsquo;s position on the ground plane.',
          '<b>Add gravity and a jump.</b> Pull the player down every frame when it is in the air, and push it up once when the jump key is pressed on the floor.',
          '<b>Give it a goal.</b> One thing to collect or reach turns a world into a game. Keep it to one goal in a first game.',
          '<b>Test, then share.</b> Play it from start to end after every change, then let one real person try it and watch without helping.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why one goal is enough',
          left: [
            'A 3D world invites big plans: a city, a castle, a whole planet. Children who start there spend weeks building scenery and never write the code that makes it a game.',
            'One floor, one player, one goal, playable in a week, teaches every core idea. Scenery can come afterward, and it is far more fun when the game underneath works.'
          ],
          rightH3: 'How long it takes',
          right: [
            'Our plan for ages 10 to 12 reaches step 6 in about six sessions in Roblox Studio, where the avatar and its movement already exist. In Godot or Unity, writing movement yourself adds a few sessions to that plan.',
            'That is not wasted time. Writing the movement code by hand is exactly where the three axes stop being abstract.'
          ] }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'Real code',
      h2: 'A real 3D script: a character that runs and jumps in Godot',
      lede: 'This is the core of a 3D platformer, in GDScript. It follows the structure of Godot&rsquo;s own Squash the Creeps tutorial, uses the same starting numbers, and uses only methods its documentation describes.',
      body: [
        { kind: 'code', label: 'Script &middot; run and jump on three axes', lang: 'gdscript', code: PLAYER, note: 'Attach it to a CharacterBody3D that has a collision shape. Before it runs, create five input actions in Project Settings, Input Map: move_left, move_right, move_forward, move_back and jump. The script only reads action names, so the keys are yours to choose.' },
        { kind: 'two', mt: true,
          leftH3: 'The jump, worked out (our calculation)',
          left: [
            'The jump starts at 20 meters per second upward, and gravity takes away 75 meters per second every second. So the character reaches the top after 20 / 75 = 0.27 seconds.',
            'The height is 20 x 20 / (2 x 75) = 400 / 150 = 2.67 meters. With Godot&rsquo;s default grid of 1-meter squares, that is a jump onto a box between two and three squares tall.'
          ],
          rightH3: 'Reading the script',
          right: [
            'Every frame, _physics_process works out a direction from the keys, sets the speed on x and z, then handles y: a jump if the jump key was just pressed on the floor, gravity if the character is in the air. move_and_slide then moves it and handles collisions with walls and slopes.',
            'At a speed of 14, one second of running covers 14 meters, fourteen grid squares. Changing that one number is a good first experiment.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Try 1 (ours)', p: 'Set jump_impulse to 30. How high is the jump now? (900 / 150 = 6 meters.)' },
          { h3: 'Try 2 (ours)', p: 'Halve fall_acceleration to 37.5. What happens to the height? (It doubles, to about 5.33 meters.)' },
          { h3: 'Try 3 (ours)', p: 'Remove normalized() and walk diagonally. Is the character faster? (Yes, about 1.4 times.)' }
        ] }
      ]
    },
    {
      id: 'ready', tint: 'tint', eyebrow: 'Start in 3D or not',
      h2: 'Should kids start with 2D or 3D games?',
      lede: 'Godot&rsquo;s own 3D tutorial answers this honestly: if you are new to game development, it recommends starting with 2D, because 3D game code is always more complex.',
      body: [
        { kind: 'two',
          leftH3: 'When starting in 3D works',
          left: [
            'A child who already knows a 3D tool as a player, most often Roblox, can start building in 3D straight away, because the editor does a lot of the hard work: the camera, the avatar and its movement already exist.',
            'Roblox&rsquo;s education team says younger students typically focus on the creation and design of environments, and that suits a first 3D project well: build the world first, then script it.'
          ],
          rightH3: 'When 2D first is wiser',
          right: [
            'If a child wants to write the movement code themselves, as in the Godot script above, a few weeks of 2D games first makes 3D far less confusing. Velocity and gravity are easier to see on two axes.',
            'Our game course for younger kids begins in Scratch and moves into Roblox&rsquo;s 3D worlds once the ideas are solid.'
          ] },
        { kind: 'table', mt: true, caption: 'A suggested route by age (ours)', head: ['Age', 'Start with', 'Then'], rows: [
          ['8 to 10', 'Scratch or another 2D tool', 'Roblox Studio building, then simple scripts'],
          ['10 to 13', 'Roblox Studio', 'Luau scripts for movement, scores and goals'],
          ['13 to 15', 'Roblox Studio or Godot', 'Writing a 3D character controller by hand'],
          ['15 to 17', 'Unity with C#', 'A complete 3D game with menus, levels and a build']
        ] },
        { kind: 'p', mt: true, html: 'For Roblox specifically, <a class="ag-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> walks through Studio, scripts and publishing. For 2D starts, see <a class="ag-inline-link" href="/scratch-coding-classes-for-kids">Scratch coding classes</a>, and for the language behind many engines, <a class="ag-inline-link" href="/c-plus-plus-game-development">C++ game development</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From player to 3D builder',
    h2: 'Four stages of a young 3D game maker',
    lede: 'Where a child might be when they ask how 3D games are made, and what comes next.',
    table: { caption: 'Stages of learning to make 3D games (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Explorer', 'Flies the camera around an editor and places objects'],
      ['2. World builder', 'Builds levels from parts, with lighting and color'],
      ['3. Scripter', 'Writes movement, gravity and goals in code'],
      ['4. Game maker', 'Tunes the numbers so the game feels fair and fun']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 can last a long time, and that is fine. Building worlds teaches spatial thinking that pays off in math and science.',
      'Stage 3 is the hard climb. Vectors and axes click faster when someone sketches them beside the running game.'
    ] },
    right: { h3: 'For kids', ps: [
      'Name your axes out loud when you code: x is sideways, y is up, z is forward and back. It saves a lot of bugs.',
      'Make it small and finish it. One level you can play beats a huge world you cannot.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses on the road to 3D games',
    lede: 'Each is taught live, in a group batch or one to one, by a teacher who stays with the student.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: '3DG / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Game logic in 2D first.' },
        { code: '3DG / KID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Luau', blurb: 'Build and script 3D worlds.' },
        { code: '3DG / KID / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds in a 3D world.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: '3DG / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity, C# and 3D scenes.' },
        { code: '3DG / TEN / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language under game engines.' },
        { code: '3DG / TEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Vectors and logic in code.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: '3DG / PRO / 01', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Professional engines, start to finish.' },
        { code: '3DG / PRO / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Games that run in the browser.' },
        { code: '3DG / PRO / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'A game built with a team in a weekend.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live 3D game lessons, when it suits you',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches after school in every US time zone.' },
      { time: 'Weekends', l: 'Morning batches with time to build.' },
      { time: '1-on-1', l: 'Times arranged around your child.' }
    ],
    cells: [
      { h3: 'Screen shared', p: 'The teacher sees the 3D view live.' },
      { h3: 'Axes drawn out', p: 'X, y and z explained on the student&rsquo;s own game.' },
      { h3: 'A plan per student', p: 'Roblox Studio or Unity, by age and goal.' },
      { h3: 'Same teacher', p: 'One person who knows the project.' },
      { h3: 'From home', p: 'Online, in any state.' },
      { h3: 'Group or private', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Some of the projects our students have finished. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents&rsquo; Google reviews, left exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Roblox Studio and Godot are free to install, and the first lesson is free as well. Classes are paid month by month in US dollars, with no term contract, and you can stop after any month.',
    free: ['A free first lesson', 'Help choosing a tool', 'No card'],
    group: ['Batches of fifteen to twenty', 'One regular teacher', 'Choose your batch', 'Paid monthly'],
    one: ['One to one', 'At times you set', 'Your own 3D game']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Making 3D games: common questions',
    items: [
      { q: 'How can a kid make a 3D video game?', a: 'Choose a free 3D tool that runs on your computer, such as Roblox Studio or Godot, place a floor and a player, then write code that moves the player on the ground and adds gravity and a jump. Start with one goal, finish it, then grow it.' },
      { q: 'What is the easiest way for kids to make a 3D game?', a: 'For a child who already plays Roblox, Roblox Studio, because the camera, avatar and movement are built in. Roblox typically recommends Studio for ages 10 and up.' },
      { q: 'Can you make a 3D game on a Chromebook?', a: 'Not in Roblox Studio, which the Roblox education FAQ rules out on Chromebooks, and Unity lists its editor for computers running without emulation. Godot publishes a web editor that it says needs 8 GB of memory, so check the Chromebook first.' },
      { q: 'Is Godot free for kids to use?', a: 'Yes. Godot is free and open source under the MIT license, and its license terms do not apply to the games you make with it.' },
      { q: 'What coding language do 3D games use?', a: 'It depends on the tool: Luau in Roblox Studio, GDScript or C# in Godot, and C# in Unity. Godot recommends GDScript for beginners and says it looks like Python.' },
      { q: 'Should my child learn 2D before 3D?', a: 'Often, yes. Godot\'s own 3D tutorial recommends starting with 2D if you are new to game development, because 3D code is more complex. Children building in Roblox Studio can start in 3D sooner.' },
      { q: 'What math is in 3D games?', a: 'Coordinates on three axes, vectors, speed and gravity. Working out how high a character jumps is a real physics calculation, and normalizing a diagonal direction is geometry.' },
      { q: 'What computer does a 3D game tool need?', a: 'Godot lists 4 GB of memory for its native editor on Windows 10 or later. Unity 6.6 lists Windows 10 version 21H1 or newer, or macOS Ventura 13 or newer. Roblox Studio runs on Windows and Mac.' },
      { q: 'Can lessons fit around a US school day?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do 3D game development classes cost?', a: 'Nothing for the trial lesson. Regular classes are charged per month, and you will find that monthly price in US dollars in the fees block above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for kids who want to build worlds.',
    items: [
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Studio, Luau and publishing.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Live lessons in Roblox Studio.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'The language under many engines.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'A 2D start for younger kids.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Where every US guide of ours starts.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' },
      { href: '/godot-for-kids-and-teens', label: 'Godot for kids and teens', p: 'Godot for kids and teens: cost, devices, two GDScript scripts and the errors beginners hit.' },
      { href: '/unity-for-teens', label: 'Unity for teens', p: 'Unity for teens: age rules, free plans, computer needs and two first C# scripts.' },
      { href: '/game-design-classes-for-teens', label: 'Game design classes for teens', p: 'Game design for teens: a method, real tuning code, and the US competitions that judge teen games.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s age, the computer they use, and the kind of 3D game they dream about. The teacher picks the right tool before the lesson starts.',
    readFirst: 'To see the method first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open a syllabus from <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'All teaching is live on video from our team in India, so there is no center to visit, wherever you live in the US. WhatsApp reaches us fastest.',
    formNote: 'No card is needed for the first lesson.'
  },

  footer: {
    cols: [
      { h4: 'Game making', links: [
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' }
      ] }
    ],
    bottomRight: 'X is sideways, Y is up, Z is forward'
  },

  personalityCss: `
.ag-root.ag-how .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-how .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-how .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-how .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-how .ag-steps { gap: 0.95rem; }
.ag-root.ag-how .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Godot documentation (stable) and godotengine.org, read 17 October 2026: free and open source under the MIT license; 4.7.2 of 18 August 2026; system requirements (native editor 4 GB, web editor 8 GB, Windows 10, macOS 10.13 or 10.15, Android editor, iOS cannot run the editor); GDScript recommended for beginners; 3D coordinate system (1 unit = 1 meter, Y up, X sides, Z front/back, red green blue); first 3D game tutorial (2D first advice, speed 14, fall_acceleration 75, jump_impulse 20, XZ ground plane, diagonal length about 1.4); CharacterBody3D. Roblox Creator docs (pilot dossier): Studio free on Windows and Mac, cannot run on Chromebooks, recommended for ages 10 and up. Unity 6.6 system requirements.',
    localProject: 'A GDScript character controller (ours, Godot documented API) with Input Map actions; our jump arithmetic 20 / 75 = 0.27 seconds and 400 / 150 = 2.67 meters, 14 meters a second at speed 14; a three-item practice set; an eight-step build order and an age route table. Lesson family: three dimensions as numbers.',
    requiredMentions: ['MIT license', 'lists a web editor', '8 GB', '900 / 150 = 6 meters', 'the XZ plane is the ground plane', 'a length of about 1.4', '1 unit is 1 meter', 'CharacterBody3D', 'move_and_slide', 'macOS Ventura 13 or newer', 'Studio cannot run on Chromebooks', '400 / 150 = 2.67 meters', '20 / 75 = 0.27 seconds'],
    sources: [
      { claim: 'Godot is free and open source under the MIT license; license terms do not apply to user content.', url: 'https://godotengine.org/license/' },
      { claim: 'Godot editor system requirements, web editor, Android and iOS.', url: 'https://docs.godotengine.org/en/stable/about/system_requirements.html' },
      { claim: 'GDScript recommended for beginners; looks like Python.', url: 'https://docs.godotengine.org/en/stable/getting_started/step_by_step/scripting_languages.html' },
      { claim: '3D coordinate system: meters, Y up, axis colors.', url: 'https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html' },
      { claim: 'Squash the Creeps: 2D first advice, movement code values, XZ ground plane, diagonal length.', url: 'https://docs.godotengine.org/en/stable/getting_started/first_3d_game/03.player_movement_code.html' },
      { claim: 'CharacterBody3D, move_and_slide, is_on_floor.', url: 'https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html' },
      { claim: 'Roblox Studio free on Windows and Mac; cannot run on Chromebooks; ages 10 and up.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' },
      { claim: 'Unity 6.6 editor requirements.', url: 'https://docs.unity3d.com/Manual/system-requirements.html' }
    ],
    rejectedClaims: [
      'Unity pricing or plan eligibility: not fetched, so the page says only to check Unity\'s own plans.',
      'That Godot\'s web editor runs on any given Chromebook: Godot states memory and browser needs, not device support, so the page asks families to check the memory.',
      'Outcome claims for the Godot course: none made (no results data yet).',
      'That we ran the GDScript on this page: it follows Godot\'s documented API and the reader runs it.',
      'Any affiliation with Roblox, the Godot project or Unity: none, and the page says so.'
    ]
  }
};
