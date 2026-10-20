'use strict';
// Game design classes for teens (ag- topic door; US cluster Phase 2, row 8). Search evidence: "game design for teens"
// (2.7K impressions at position 34, our biggest losing US query), "game design courses for teens", "game design programs
// for teens", "video game design classes for teens", "video game design for teens", "game development for teens"
// (keyword-research-2026-09/us/rows.tsv and autocomplete_us.tsv).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/game-design-classes-for-teens/ and src/godot-for-kids-and-teens/, src/unity-for-teens/):
//  - MDA paper, users.cs.northwestern.edu/~hunicke/MDA.pdf ("MDA: A Formal Approach to Game Design and Game Research"):
//    "developed and taught as part of the Game Design and Tuning Workshop at the Game Developers Conference, San Jose
//    2001-2004"; "Mechanics describes the particular components of the game, at the level of data representation and
//    algorithms."; "Dynamics describes the run-time behavior of the mechanics acting on player inputs"; "Aesthetics
//    describes the desirable emotional responses evoked in the player"; the eight aesthetics with glosses ("Game as
//    sense-pleasure", "Game as make-believe", "Game as drama", "Game as obstacle course", "Game as social framework",
//    "Game as uncharted territory", "Game as self-discovery", "Game as pastime"); "The designer and player each have a
//    different perspective." Authors are not named on the page (no individuals, house rule).
//  - tsaweb.org/competitions?hspage=7: high school Video Game Design, participants "design, build, and launch an E-rated
//    online video game", with required documentation, addressing the annual theme; semifinalists "participate in an
//    interview". mspage=7: middle school version, "an E-rated, online game on a subject of their choice".
//  - esrb.org/ratings-guide: Everyone "generally suitable for all ages"; Everyone 10+ "ages 10 and up"; Teen "ages 13 and
//    up"; Mature 17+ "ages 17 and up"; Adults Only 18+ "adults ages 18 and up"; the Everyone text "May contain minimal
//    cartoon, fantasy or mild violence and/or infrequent use of mild language."; Interactive Elements "do not influence
//    the rating assignment of a product". Content lists for M and AO are deliberately not printed.
//  - Godot docs (stable, 4.7): tutorials/physics/using_character_body_2d (platformer example with get_gravity(),
//    is_on_floor(), Input.is_action_just_pressed("jump"), Input.get_axis("ui_left", "ui_right"), move_and_slide(); "There
//    is a lot more that goes into a complete platformer character: acceleration, double-jumps, coyote-time"),
//    getting_started/first_2d_game/03.coding_the_player ("@export var speed"; "Using the export keyword on the first
//    variable speed allows us to set its value in the Inspector."); about/system_requirements; editor/using_the_android_
//    editor ("Chromebooks supporting Android apps"); godotengine.org/license (MIT; "you are free to license your games").
//  - Unity: unity.com/legal/terms-of-service (last updated June 30, 2026: "13 in the US"; "You must be at least 18 years old
//    to make Purchases or submit User Content to Unity."); unity.com/products/unity-student ("Students 16 years and older
//    who are enrolled in an accredited educational institution"); docs.unity3d.com/Manual/system-requirements (Unity 6.6:
//    Windows 10 version 21H1, macOS Ventura 13, Ubuntu 22.04 and 24.04).
//  - Roblox (pilot dossier, create.roblox.com docs): Studio on Windows and Mac only; "cannot run on Chromebooks";
//    recommended "for ages 10 and up".
//  - MakeCode Arcade (arcade.makecode.com/about, /faq): "a code editor to build Retro Arcade games for the browser and
//    handheld consoles"; projects "kept in the browser's local indexed data store".
//  - Congressional App Challenge (pilot dossier, 2026 rules): "The app can be about any topic."; "teams of up to four (4)
//    students"; video "1-3 minutes long"; deadline "12:00 pm EDT, Monday, October 26th, 2026".
// Our own material, labelled on the page: the design loop, the one-page design document and its invented example, the
// tuning table, the E checklist, the engine advice, the course-phase design habits, the coyote-time script (written only
// with APIs in the Godot pages above) and the arithmetic 300 × 0.1 = 30 pixels of ledge grace at run speed 300.
// Lesson family: iteration and tuning (change one number, test, record).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JUMP = `# player.gd on a CharacterBody2D (ours, extending the
# platformer example in the Godot docs)
extends CharacterBody2D

@export var speed = 300.0
@export var jump_speed = -400.0
@export var coyote_time = 0.1  # grace after leaving a ledge
@export var jump_buffer = 0.1  # an early press is remembered

var coyote_left = 0.0
var buffer_left = 0.0

func _physics_process(delta):
    velocity += get_gravity() * delta

    if is_on_floor():
        coyote_left = coyote_time
    else:
        coyote_left -= delta

    if Input.is_action_just_pressed("jump"):
        buffer_left = jump_buffer
    else:
        buffer_left -= delta

    if buffer_left > 0 and coyote_left > 0:
        velocity.y = jump_speed
        buffer_left = 0.0
        coyote_left = 0.0

    var direction = Input.get_axis("ui_left", "ui_right")
    velocity.x = direction * speed
    move_and_slide()`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GAME DESIGN', blurb: 'Game design for teens taught as a craft: the MDA design vocabulary, a playtest loop, real tuning code, and what TSA and the Congressional App Challenge ask for.' },
  slug: 'game-design-classes-for-teens',
  code: 'gdt',
  accent: '#1E703E',
  accentRationale: 'Game design for teens, US: the allocated muted forest green #1E703E (alloc.tsv row 8), distinct from the brick red of the Roblox pilot and the other row 4 to 7 accents, and dark enough for body-size links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Game design classes for teens',
  title: 'Game Design for Teens: Live Classes, a Method and Real Code',
  description: 'Game design for teens, taught live online: the MDA vocabulary, a paper-to-playtest loop, a real Godot tuning script, and what TSA and app contests require.',
  ogDescription: 'Game design classes for US teens aged 13 to 18: a design vocabulary from game research, a playtest loop, a tuning script you can run, and the rules of two US competitions.',
  twitterDescription: 'Game design for teens: a method, real tuning code, and the US competitions that judge teen games.',
  pageName: 'Game Design Classes for Teens',
  webPageDescription: 'A guide for US teenagers and parents to learning game design: the MDA framework, a prototype and playtest loop, a Godot tuning script, engine choices by age and device, and the TSA and Congressional App Challenge rules.',
  courseDescription: 'Live online game design and game development classes for teenagers in the United States, in Unity and C#, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Game design classes for teens',
  navLinks: [
    { href: '#vocabulary', label: 'Vocabulary' },
    { href: '#loop', label: 'Design loop' },
    { href: '#tuning', label: 'Tuning code' },
    { href: '#judged', label: 'Competitions' },
    { href: '#engines', label: 'Engines' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Game design and development',
  h1: 'Game design for teens, taught as a craft',
  lede: 'Game design for teens is more than learning which buttons an engine has. It is the discipline of deciding what a player does, what they should feel while doing it, and then proving it works by watching other people play. Below is the way we teach that to American teenagers: a design vocabulary that came out of a workshop at the Game Developers Conference, a loop of paper prototype, build and playtest, a short Godot script that shows design turning into numbers, the engines a teen can actually run at home, and what two national school-age competitions want from a game.',
  secondaryCta: { href: '#loop', label: 'See the design loop' },
  wa: 'Hello Modern Age Coders, my teenager in the US is interested in game design classes. Could we book a free first lesson?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Teens 13 to 18 in every US time zone',
  spec: [
    ['For', 'Ages 13 to 18'],
    ['Focus', 'Design, prototypes, playtests'],
    ['Engine', 'Unity and C# in the course'],
    ['Also taught', 'Godot or Roblox, one to one'],
    ['Computer', 'Windows, Mac or Linux'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Game design classes for teens teach how to turn an idea into rules, build those rules in an engine, then change them after watching real players. Modern Age Coders runs these classes live online for American teenagers between 13 and 18, either in a batch of fifteen to twenty or one to one, mainly through our Game Development for Teens course in Unity and C#.',

  picks: {
    eyebrow: 'Courses for teen designers',
    h2: 'Three courses where a teen designs and ships games',
    lede: 'Each is taught live by a regular teacher, and each one asks students to finish small games rather than plan large ones.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', code: 'GDT / 01', title: 'Game development for teens', note: 'For 13 to 18 year olds. Ten months of Unity and C#, 2D then 3D, with design reviews built in.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'GDT / 02', title: 'JavaScript for teens', note: 'Ages 13 to 18. Browser games a friend can open from a link.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'GDT / 03', title: 'C++ for teens', note: 'Ages 13 to 18. The language under many engines, taught through game projects.' }
    ]
  },

  sections: [
    {
      id: 'vocabulary', tint: 'tint', eyebrow: 'A design vocabulary',
      h2: 'Mechanics, dynamics and aesthetics: the words a designer needs',
      lede: 'Teenagers who play a lot can already tell you whether a game is fun. A design class teaches them to explain why, in words a teammate can act on. We start with a framework from a paper titled MDA: A Formal Approach to Game Design and Game Research, which says it was developed and taught as part of the Game Design and Tuning Workshop at the Game Developers Conference in San Jose, from 2001 to 2004.',
      body: [
        { kind: 'table', caption: 'The three layers of a game, as the MDA paper defines them (read 17 October 2026)', head: ['Layer', 'How the paper defines it', 'What a teen writes down in class (ours)'], rows: [
          ['Mechanics', '"the particular components of the game, at the level of data representation and algorithms"', 'Every rule and number: jump height, enemy speed, how many lives, what earns a point'],
          ['Dynamics', '"the run-time behavior of the mechanics acting on player inputs"', 'What actually happens when people play: players camping a corner, racing, sharing, giving up'],
          ['Aesthetics', '"the desirable emotional responses evoked in the player"', 'The feeling the game exists for, chosen before a single line of code']
        ] },
        { kind: 'table', mt: true, caption: 'The eight kinds of fun named in the MDA paper, with a teen-sized example of each (examples ours)', head: ['Aesthetic', 'The paper\'s short gloss', 'An example a student might build'], rows: [
          ['Sensation', 'Game as sense-pleasure', 'A hit that flashes, shakes the camera and plays a crunchy sound'],
          ['Fantasy', 'Game as make-believe', 'Playing a lighthouse keeper guiding ships through fog'],
          ['Narrative', 'Game as drama', 'A three-scene story whose ending depends on one earlier choice'],
          ['Challenge', 'Game as obstacle course', 'A platformer whose fifth level asks for everything learned in the first four'],
          ['Fellowship', 'Game as social framework', 'A two-player puzzle where neither player can finish alone'],
          ['Discovery', 'Game as uncharted territory', 'A map with a secret room that rewards players who look closely'],
          ['Expression', 'Game as self-discovery', 'A garden builder with no score, only choices'],
          ['Submission', 'Game as pastime', 'A calm fishing game for five quiet minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why designers start from the feeling',
          left: [
            'The paper makes a point that changes how teens plan: the designer and player each have a different perspective. A designer sees rules first and hopes a feeling follows. A player meets the feeling first and only notices rules when something goes wrong.',
            'So we ask a student to name the aesthetic before touching the engine. Writing "Challenge, with a little Discovery" at the top of a page stops a project from drifting into a bit of everything, which is how most first games lose their shape.'
          ],
          rightH3: 'A worked example (ours)',
          right: [
            'Suppose a fifteen-year-old wants a game about a delivery drone. The aesthetic is Challenge. The mechanics are battery charge, wind speed and three drop zones. The dynamics we expect: players rush early, run low on battery and learn to plan routes.',
            'If the first playtest shows players hovering in place to wait out the wind, the dynamic is wrong for the aesthetic. The student changes one mechanic, perhaps making battery drain faster while hovering, and tests again. That one change is design.'
          ] },
        { kind: 'source', html: 'Source, read 17 October 2026: <a class="ag-inline-link" href="https://users.cs.northwestern.edu/~hunicke/MDA.pdf" rel="noopener" target="_blank">MDA: A Formal Approach to Game Design and Game Research</a> (PDF). The examples in the right-hand column of each table are ours, written for this page.' }
      ]
    },
    {
      id: 'loop', tint: 'deep', eyebrow: 'The design loop',
      h2: 'Paper, prototype, playtest: the loop we teach',
      lede: 'Game design is learned by doing a small loop many times, not one large project once. This is the sequence we teach for every game, from a two-week jam piece to a capstone.',
      body: [
        { kind: 'ol', items: [
          '<b>Write the promise.</b> One sentence in the form "In my game you ___ so that you feel ___." If the sentence will not come, the idea is not ready.',
          '<b>Choose the aesthetic.</b> Pick one of the eight from the table above, two at most. Everything later is judged against it.',
          '<b>Prototype on paper in thirty minutes.</b> Index cards, a die, a timer and a pencil. Paper is quick to throw away, which makes it easy to be brave.',
          '<b>Play the paper version with two people.</b> Note every moment they hesitate, ask a question or break a rule by accident.',
          '<b>Build the smallest digital version.</b> One screen, one mechanic, placeholder shapes, no menus and no title screen.',
          '<b>Playtest with five people who did not make it.</b> Give no instructions beyond the controls. Stay quiet and write down what they do, not what they say.',
          '<b>Change one number at a time.</b> Speed, gravity, timer length, enemy count. Retest after each change so you know which change mattered.',
          '<b>Write the design document last.</b> A one-page record of what the working prototype proved, so the full build has a target.'
        ] },
        { kind: 'table', mt: true, caption: 'A one-page design document (our template, with an invented example)', head: ['Heading', 'What goes under it', 'Example: Drone Drop'], rows: [
          ['Promise', 'The one sentence from step 1', 'In my game you deliver parcels through gusts so that you feel clever when a route works'],
          ['Aesthetic', 'One or two of the eight', 'Challenge, with some Discovery'],
          ['Core loop', 'What the player repeats every few seconds', 'Pick a parcel, plan a route, fly, drop, recharge'],
          ['Mechanics', 'Rules and their starting numbers', 'Battery 100, hover drain 3 a second, wind changes every 8 seconds'],
          ['Out of scope', 'What this version will not have', 'No story, no shop, no second drone'],
          ['Test question', 'What the next playtest must answer', 'Do players plan a route before taking off?']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why five strangers, and why silence',
          left: [
            'Five is our classroom rule because five sessions fit inside one lesson and five different players are enough to start seeing repeated behaviour. It is a teaching choice, not a research figure.',
            'Silence matters more than the number. The moment a designer explains their game, the test measures the explanation instead. This is hard, and learning to sit on their hands while a friend misses the obvious door is one of the most useful habits a design class builds.'
          ],
          rightH3: 'What we ask a student to record',
          right: [
            'Where did the player look first? When did they first smile, sigh or lean in? What did they try that the game did not allow? How long until they stopped?',
            'Those notes go straight into the next change. Over a term, a student\'s playtest log becomes the clearest evidence of their thinking, far more convincing than a polished trailer.'
          ] }
      ]
    },
    {
      id: 'tuning', tint: 'tint', eyebrow: 'Design in code',
      h2: 'Tuning a jump: where design becomes numbers',
      lede: 'The Godot documentation includes a short platformer character and then admits there is a lot more that goes into a complete one, naming acceleration, double-jumps and coyote-time. We use that admission as a lesson. The script below is ours: it keeps the documented example and adds two small forgiveness rules that players feel but rarely notice.',
      body: [
        { kind: 'code', label: 'GDScript &middot; a forgiving jump, Godot 4', lang: 'gdscript', code: JUMP, note: 'Add a jump action in Project Settings, Input Map, before you run it. Our arithmetic: at the run speed of 300 pixels a second, a coyote_time of 0.1 seconds lets a player be up to 30 pixels past the ledge and still jump (300 × 0.1 = 30).' },
        { kind: 'table', mt: true, caption: 'Four numbers a designer tunes in this script, and what players feel (ours)', head: ['Variable', 'Too low feels like', 'Too high feels like', 'What to test'], rows: [
          ['speed', 'Wading through mud', 'Overshooting every platform', 'Can a new player land on a narrow ledge first try?'],
          ['jump_speed', 'A hop that never clears a gap', 'A rocket that hits the ceiling', 'Is the longest gap clearable with a running jump only?'],
          ['coyote_time', 'The game "ate" a fair jump', 'Running on air, which looks wrong', 'Do testers complain about missed jumps at edges?'],
          ['jump_buffer', 'Jumps lost when pressed a moment early', 'A jump firing long after the press', 'Does a quick double tap behave the way players expect?']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why @export matters to a designer',
          left: [
            'The Godot docs explain that putting the export keyword on a variable lets you set its value in the Inspector. For a designer this is the whole point: the numbers in the table above can be changed while testing, without opening the script.',
            'We ask students to keep a tuning log beside the Inspector: the old value, the new value, and one sentence on what changed for the player. It turns a vague "feels better" into evidence.'
          ],
          rightH3: 'What the two extra rules teach',
          right: [
            'Coyote time and jump buffering are both about timing windows: a short span in which the game still accepts an action. The same idea shows up in fighting games, rhythm games and menus that tolerate a slightly late click.',
            'Writing them also teaches a small piece of real programming: a countdown that loses delta every physics frame and is reset by an event. Students meet that pattern again in cooldowns, invincibility frames and spawn timers.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026, Godot 4.7 documentation: <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html" rel="noopener" target="_blank">Using CharacterBody2D/3D</a> and <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html" rel="noopener" target="_blank">Coding the player</a>. The script is ours, written only with functions those pages use; test it in your own copy of Godot.' }
      ]
    },
    {
      id: 'judged', tint: 'deep', eyebrow: 'When judges play your game',
      h2: 'Two US competitions that judge a teenager\'s game',
      lede: 'A deadline and an outside judge sharpen design work. Two national programs accept games from school-age students, and their rules shape what a teen should build.',
      body: [
        { kind: 'table', caption: 'What each competition asks, from the organisers\' own pages (read 17 October 2026)', head: ['Point', 'TSA Video Game Design', 'Congressional App Challenge, 2026 cycle'], rows: [
          ['Who it is for', 'Members of a Technology Student Association school chapter; separate middle and high school events', 'Middle and high school students; the rules say middle school typically covers grades 6 to 8'],
          ['What gets built', 'High school: participants "design, build, and launch an E-rated online video game", with required documentation, on the annual theme', 'Any app: the rules say "The app can be about any topic." Games are apps'],
          ['Middle school version', '"an E-rated, online game on a subject of their choice"', 'Same rules as high school'],
          ['Teams', 'Set in TSA\'s event guidelines for members', 'Teams of up to four students'],
          ['What judges see', 'Semifinalists also take part in an interview about what they learned building the game', 'A demonstration video of 1 to 3 minutes and written answers'],
          ['Next deadline', 'Set by TSA and each state delegation; ask the chapter advisor', '12:00 pm EDT, Monday, October 26th, 2026']
        ] },
        { kind: 'table', mt: true, caption: 'ESRB rating categories by age, from esrb.org (read 17 October 2026)', head: ['Category', 'Who ESRB says the content is generally suitable for'], rows: [
          ['Everyone', 'All ages'],
          ['Everyone 10+', 'Ages 10 and up'],
          ['Teen', 'Ages 13 and up'],
          ['Mature 17+', 'Ages 17 and up'],
          ['Adults Only 18+', 'Adults ages 18 and up']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Designing to stay inside E (our checklist)',
          left: [
            'TSA asks for an E-rated game, and ESRB describes Everyone content as something that "May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language." That is a design constraint, and a useful one.',
            'Our checklist: conflict drawn as cartoon or fantasy, defeated enemies that pop or fade rather than bleed, no frightening jump scares, mild words only, and a theme a grandparent and a nine-year-old could watch together. Whether an entry passes is decided under TSA\'s own rules, so the chapter advisor has the final word.'
          ],
          rightH3: 'Online features are a separate question',
          right: [
            'ESRB lists Interactive Elements, such as players being able to interact, and says these do not influence the rating assignment. So a game can be E and still need careful thought about chat or sharing.',
            'For a school-age entry we teach the simple choice: no free-text chat, a leaderboard of initials only, and nothing that asks a player for personal details. The Congressional App Challenge in particular is close: our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> covers its rules in full.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://tsaweb.org/competitions" rel="noopener" target="_blank">TSA competitions</a>, <a class="ag-inline-link" href="https://www.esrb.org/ratings-guide/" rel="noopener" target="_blank">ESRB ratings guide</a> and the 2026 Congressional App Challenge rules. We are not connected with the Technology Student Association, the ESRB or the Congressional App Challenge.' }
      ]
    },
    {
      id: 'engines', tint: 'tint', eyebrow: 'Choosing an engine',
      h2: 'Which engine a teen designer can run, and what its own terms say',
      lede: 'Engine arguments fill forums. For a teenager the useful questions are narrower: will it run on the computer at home, what language does it use, and does the account fit their age? Each answer below comes from the engine\'s own documentation or terms.',
      body: [
        { kind: 'table', caption: 'Four engines and editors a US teen might use, from each maker\'s own pages (read 17 October 2026)', head: ['Tool', 'Language', 'Runs on', 'Age and account notes'], rows: [
          ['Unity 6.6', 'C#', 'Windows 10 version 21H1 or newer, macOS Ventura 13 or newer, Ubuntu 22.04 or 24.04; ChromeOS is not on the list', 'Account holders must be old enough to consent to data processing where they live, 13 in the US per the terms; buying or submitting content needs age 18; Student plan from 16'],
          ['Godot 4.7', 'GDScript or C#', 'Windows, macOS and Linux; a web editor in current browsers; an Android editor whose supported devices include Chromebooks supporting Android apps; no editor for iOS', 'Free and open source under the MIT license; Godot says its terms do not apply to the games you make'],
          ['Roblox Studio', 'Luau', 'Windows and Mac only; Roblox says Studio cannot run on Chromebooks', 'Roblox\'s education FAQ suggests Studio from about age 10, with younger children starting on building'],
          ['MakeCode Arcade', 'Blocks, JavaScript or Python', 'A web browser; Microsoft describes it as a code editor for Retro Arcade games', 'Projects are kept in the browser\'s storage, so clearing browsing data removes unsaved ones']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our advice, by what the teen wants',
          left: [
            'Is 13 or older and wants the engine Unity describes as the world\'s most widely used: Unity and C#, which is what our group course teaches.',
            'Has only a Chromebook, or wants a light engine with a gentle language: Godot, with GDScript, through the Android editor or the web editor while a fuller computer is found.',
            'Already lives in Roblox and wants friends to play this week: Roblox Studio and Luau, on a Windows or Mac machine. Our step-by-step <a class="ag-inline-link" href="/how-to-make-a-roblox-game">guide to making a Roblox game</a> covers it.'
          ],
          rightH3: 'Why the group course uses one engine',
          right: [
            'Our Game Development for Teens course teaches one engine deeply rather than touring several, because design skill grows when the tool stops being the problem. Unity also gives C#, a general-purpose language that carries into other software work.',
            'One-to-one students can choose Godot or Roblox instead. The design loop, the vocabulary and the tuning habit stay exactly the same, because none of them belong to any engine.'
          ] },
        { kind: 'source', html: 'Each engine row comes from its maker, read 17 October 2026: Godot&rsquo;s <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/about/system_requirements.html" rel="noopener" target="_blank">system requirements</a>, the <a class="ag-inline-link" href="https://unity.com/legal/terms-of-service" rel="noopener" target="_blank">Unity Terms of Service</a> (last updated June 30, 2026), <a class="ag-inline-link" href="https://unity.com/products/unity-student" rel="noopener" target="_blank">Unity Student plan</a>, <a class="ag-inline-link" href="https://docs.unity3d.com/Manual/system-requirements.html" rel="noopener" target="_blank">Unity 6.6 system requirements</a>, <a class="ag-inline-link" href="https://godotengine.org/license/" rel="noopener" target="_blank">Godot license</a>, the Roblox Creator documentation and <a class="ag-inline-link" href="https://arcade.makecode.com/about" rel="noopener" target="_blank">MakeCode Arcade</a>. Terms change, so check them again before signing up.' }
      ]
    },
    {
      id: 'year', tint: 'deep', eyebrow: 'A year of design',
      h2: 'What a teen designs in ten months with us',
      lede: 'Our Game Development for Teens course runs in four phases over ten months. The engine work is in the syllabus; the right-hand column is the design habit each phase adds.',
      body: [
        { kind: 'table', caption: 'The four phases of our teen course, with the design focus we add to each (ours)', head: ['Months', 'What gets built', 'The design habit'], rows: [
          ['1 to 3', 'Complete 2D games in Unity and C#, ending with a published capstone', 'The promise sentence, paper prototypes, the first silent playtests'],
          ['4 to 6', 'A 3D world: controllers, animation, environments, a finished 3D game', 'Level pacing: where the player rests, where the pressure rises'],
          ['7 to 8', 'Multiplayer basics, mobile builds, narrative and accessibility', 'Designing for players unlike yourself, including controls and readability'],
          ['9 to 10', 'Production and a capstone shipped and presented', 'Scope cutting, a design document, and explaining every choice to an audience']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 13 and 14', p: 'More paper prototyping and shorter builds. At this age the main craft is learning to finish.' },
          { h3: 'Ages 15 and 16', p: 'Full design documents, team projects and the first entries to a school-age competition.' },
          { h3: 'Ages 17 and 18', p: 'A portfolio of three finished games with design notes, ready to show anyone who asks what they can do.' }
        ] }
      ]
    },
    {
      id: 'portfolio', tint: '', eyebrow: 'Showing the work',
      h2: 'What a teen game design portfolio should show',
      lede: 'A folder of screenshots says little. A portfolio that shows thinking says a great deal, to a club, a competition panel or a summer program.',
      body: [
        { kind: 'table', caption: 'What we ask students to include for each game (ours)', head: ['Item', 'Why it is there'], rows: [
          ['The promise sentence and chosen aesthetic', 'Shows the game had a purpose from the start'],
          ['Two playtest notes and the change each one caused', 'Proves the student listens to players, which is the core of design'],
          ['A tuning log of three numbers', 'Shows design measured, not guessed'],
          ['A 60-second clip of someone else playing', 'Lets a reviewer see the dynamics, not just the art'],
          ['One honest paragraph on what did not work', 'Reflection is what separates a designer from a hobbyist']
        ] },
        { kind: 'p', mt: true, html: 'For more on related tracks, see our pages on <a class="ag-inline-link" href="/c-plus-plus-game-development">C++ game development</a>, <a class="ag-inline-link" href="/coding-for-13-year-olds">coding for 13 year olds</a> and <a class="ag-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes</a> for younger siblings.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From fan to designer',
    h2: 'Four stages of a teenage game designer',
    lede: 'Where many teens are when they join, and the step a teacher helps with.',
    table: { caption: 'Stages of a young designer (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Idea collector', 'A notebook of game ideas, none of them finished'],
      ['2. Prototyper', 'Builds small playable versions and throws most away'],
      ['3. Tuner', 'Changes one number at a time and records what players felt'],
      ['4. Finisher', 'Cuts scope, ships, and can defend every design choice']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is where enthusiasm lives, and it deserves respect. The work is helping that enthusiasm survive the first unfinished project.',
      'The leap from 2 to 3 is where structure helps most: a tuning log and a playtest habit turn tinkering into a method.'
    ] },
    right: { h3: 'For teens', ps: [
      'Finish something small this month. A tiny game that works teaches more than an epic that stays in a notebook.',
      'Watch someone else play your game without helping. It will be uncomfortable and it will be the most useful ten minutes of your week.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses on the way to designing games',
    lede: 'Taught live online by a regular teacher, in a batch or one to one, for every stage from first blocks to engine code.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'GDT / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity, C# and four design phases.' },
        { code: 'GDT / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Logic, data and small games in text.' },
        { code: 'GDT / TEN / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI as a helper, with the teen making every call.' }
      ] },
      { num: 'II', h3: 'Younger siblings', sub: 'Ages 6 to 12', courses: [
        { code: 'GDT / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Game ideas in blocks, the first design loop.' },
        { code: 'GDT / KID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts inside a world they know.' },
        { code: 'GDT / KID / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft in one plan.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'Older teens and adults', courses: [
        { code: 'GDT / PRO / 01', slug: 'game-development-complete-masterclass-college', title: 'Game development, adult track', blurb: 'The adult track for learners 18 and over.' },
        { code: 'GDT / PRO / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Design under a clock, as a team.' },
        { code: 'GDT / PRO / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Games that live in a browser tab.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes work',
    h2: 'Live design classes that fit a high school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batch times chosen to work in your own US time zone.' },
      { time: 'Weekends', l: 'Weekend mornings leave the afternoon free for sport and homework.' },
      { time: '1-on-1', l: 'Arranged around exams, games seasons and family plans.' }
    ],
    cells: [
      { h3: 'One teacher all term', p: 'Someone who knows every game the student has made.' },
      { h3: 'Screen shared live', p: 'The teacher watches the engine, not a summary.' },
      { h3: 'Playtests in class', p: 'Classmates test each other\'s builds.' },
      { h3: 'Design notes graded', p: 'Thinking counts, not only the build.' },
      { h3: 'Anywhere in the US', p: 'Online, so no drive to a center.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or a teacher alone.' }
    ]
  },

  projectsH2: 'Games and apps our students have built',
  projectsLede: 'Work by learners who once had only a notebook of ideas. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Copied from Google exactly as families wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Unity Personal, Godot and MakeCode cost nothing to download, so the fee is only for teaching. It is charged a month at a time in US dollars, with no long contract, and a family can stop at the end of any month.',
    free: ['First lesson free', 'Arrive with an idea or a half-built project', 'No card needed'],
    group: ['Fifteen to twenty teens', 'A regular teacher', 'Pick your batch time', 'Paid monthly'],
    one: ['Just the student and the teacher', 'Times you choose', 'Any engine, your project']
  },

  faq: {
    eyebrow: 'Questions from teens and parents',
    h2: 'Game design for teens: common questions',
    items: [
      { q: 'What does a game design class for teens actually teach?', a: 'How to decide what a game asks of a player and why it is fun, then how to build, playtest and change it. In our classes that means a design vocabulary, paper prototypes, silent playtests, tuning numbers in an engine and writing a short design document.' },
      { q: 'Is game design the same as game development?', a: 'They overlap. Design is deciding the rules and the feeling; development is building them in code and art. Teens learn more when they do both, because changing a number in code and watching a player react is how design gets tested.' },
      { q: 'Does my teen need to know how to code first?', a: 'No. Our teen course starts C# from zero inside Unity. A teen who has used Scratch, Roblox Studio or Python will move a little faster in the first weeks.' },
      { q: 'Which game engine should a teenager learn first?', a: 'It depends on the computer and the goal. Unity with C# suits teens 13 and over on Windows, Mac or Linux. Godot is free, lighter, and has an Android editor that runs on Chromebooks supporting Android apps. Roblox Studio needs Windows or Mac.' },
      { q: 'Can a teen make games on a Chromebook?', a: 'Yes, with Godot. Its Android editor supports Chromebooks supporting Android apps, and there is a web editor for current browsers. Roblox says Studio cannot run on Chromebooks, and ChromeOS is not among the systems Unity lists for its Editor.' },
      { q: 'What is the minimum age for a Unity account?', a: 'Unity\'s terms tie it to the age at which a person can consent to their data being processed, which they put at 13 for the US. Buying anything, or submitting content to Unity, needs a user of 18, and the Student plan begins at 16 for enrolled students.' },
      { q: 'What is the TSA Video Game Design event?', a: 'A Technology Student Association competition in which high school members design, build and launch an E-rated online video game with documentation on the annual theme. A middle school version also exists. Ask your school\'s TSA chapter advisor for the current guidelines.' },
      { q: 'Can a game be entered in the Congressional App Challenge?', a: 'Yes. The 2026 rules say the app can be about any topic, teams can have up to four students, and the deadline is 12:00 pm EDT on Monday, October 26, 2026. Entries include a demonstration video of 1 to 3 minutes.' },
      { q: 'What does E-rated mean for a student game?', a: 'E is the ESRB Everyone category, for content generally suitable for all ages. ESRB says it may contain minimal cartoon, fantasy or mild violence and infrequent mild language, so we design competition games with cartoon conflict, no blood and mild words only.' },
      { q: 'Can game design classes fit around a high school schedule?', a: 'Yes. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do game design classes cost?', a: 'The first lesson is free. Teaching after that is billed one month at a time, and the monthly amount in US dollars is listed under Fees above the questions. The engines we use are free to download.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for American teens who want to make games.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have written for US families.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge guide', p: 'The 2026 rules and a ten-week plan.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Studio, Luau and private publishing.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'For teens drawn to engine-level code.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'Where a younger teen can begin.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'Game design summer camp for teens: engines, a real script, a six-week plan.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Learn to code Minecraft mods', p: 'Minecraft modding in Java for teens: Fabric or Forge, Java versions, a first item.' },
      { href: '/python-games-for-kids', label: 'Python games for kids', p: 'Python games kids can code: a guessing game, then pygame, step by step.' }
    ]
  },

  start: {
    h2: 'Start with a free design lesson',
    lede: 'Tell us what your teen plays, what they have tried to make, and which computer they use. The first lesson starts from their own idea and ends with a playable paper prototype.',
    readFirst: 'If you would like to see our approach first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson step by step, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus in full.',
    note: 'Our teachers are based in India and teach entirely over video, so lessons reach any US state without a commute. WhatsApp is the fastest way to reach us from the US.',
    formNote: 'The first lesson is free and needs no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Making games', links: [
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'Change one number, test, write it down'
  },

  personalityCss: `
.ag-root.ag-gdt .ag-hero h1 { letter-spacing: -0.02em; max-width: 20ch; }
.ag-root.ag-gdt .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-gdt .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-gdt .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gdt .ag-steps { counter-reset: none; }
.ag-root.ag-gdt .ag-band-head h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Primary sources read raw on 17 October 2026: the MDA paper (Mechanics, Dynamics, Aesthetics definitions; eight aesthetics; Game Design and Tuning Workshop, GDC San Jose 2001 to 2004); TSA competitions pages (high school and middle school Video Game Design, E-rated online game); ESRB ratings guide (categories by age, Everyone description, Interactive Elements); Godot 4.7 docs (platformer example, coyote-time remark, export keyword, system requirements, Android editor); Unity Terms of Service (13 in the US, 18 for purchases or user content), Student plan (16 and older), Unity 6.6 system requirements; Roblox Creator docs; MakeCode Arcade about and FAQ; 2026 Congressional App Challenge rules.',
    localProject: 'A forgiving-jump GDScript (ours) that adds coyote time and jump buffering to the documented Godot platformer, with a tuning table and the arithmetic 300 × 0.1 = 30 pixels of ledge grace; a one-page design document template with an invented Drone Drop example; a design-habit overlay on the four phases of our ten-month teen course. Lesson family: iteration and tuning.',
    requiredMentions: ['Game Design and Tuning Workshop', 'Game as obstacle course', 'Game as uncharted territory', 'design, build, and launch an E-rated online video game', 'Ages 13 and up', 'do not influence the rating assignment', 'Chromebooks supporting Android apps', '13 in the US per the terms', 'coyote_time', '300 × 0.1 = 30', 'Windows 10 version 21H1', 'Teams of up to four students'],
    sources: [
      { claim: 'MDA definitions, the eight aesthetics, the GDC workshop origin, designer and player perspectives.', url: 'https://users.cs.northwestern.edu/~hunicke/MDA.pdf' },
      { claim: 'TSA Video Game Design: E-rated online video game, documentation, annual theme, interview; middle school version.', url: 'https://tsaweb.org/competitions' },
      { claim: 'ESRB categories by age; the Everyone description; Interactive Elements do not influence the rating.', url: 'https://www.esrb.org/ratings-guide/' },
      { claim: 'Godot platformer example and the coyote-time remark.', url: 'https://docs.godotengine.org/en/stable/tutorials/physics/using_character_body_2d.html' },
      { claim: 'Godot export keyword and the Inspector.', url: 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html' },
      { claim: 'Unity minimum age 13 in the US and 18 for purchases or user content.', url: 'https://unity.com/legal/terms-of-service' },
      { claim: 'Unity Student plan for students 16 and older.', url: 'https://unity.com/products/unity-student' },
      { claim: 'Unity 6.6 Editor operating systems.', url: 'https://docs.unity3d.com/Manual/system-requirements.html' },
      { claim: 'Godot Android editor on Chromebooks supporting Android apps.', url: 'https://docs.godotengine.org/en/stable/tutorials/editor/using_the_android_editor.html' }
    ],
    rejectedClaims: [
      'A count of TSA high school events: one TSA page says 40 and another 42, so no count is printed.',
      'Team sizes and deadlines for TSA Video Game Design: in the event guidelines for members, not read, so not printed.',
      'Scholastic Art and Writing Awards video game category: the categories page read had no match for game, so the program is not mentioned.',
      'Labor statistics or salaries for game designers: bls.gov returned HTTP 403 (not circumvented), and the page makes no job or salary claims.',
      'itch.io publishing terms: the host returned HTTP 429, so itch.io is not described.',
      'The ESRB content lists for Mature 17+ and Adults Only 18+: not printed on a page for teens; categories are named by age only.',
      'That five playtesters is a research-backed number: it is our classroom rule and the page says so.',
      'The names of the MDA authors: the paper is cited by title, under the house rule on naming individuals.',
      'Any affiliation with TSA, ESRB, Unity, Godot, Roblox, Microsoft or the Congressional App Challenge: none, stated on the page.'
    ]
  }
};
