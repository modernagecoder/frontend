'use strict';
// Game design summer camp for teens (ag- topic door; US cluster Phase 2, row 27).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/game-design-summer-camp-for-teens/):
//  - Carnegie Mellon Pre-College, National High School Game Academy (cmu.edu/pre-college/academic-programs/game-academy.html):
//    "six weeks of video game development"; Program Length "June 26 to August 7, 2027"; "You must be 16 years of age by
//    June 26, 2027"; "Be a current sophomore or junior in high school at the time of application submission"; "most of
//    our admitted students will be juniors"; "Have an academic average of B (3.0/4.0) or better"; tracks Software
//    Development, Visual Arts/Graphic Design, Sound Design/Music Composition, Game Generalist; weeks 1 and 2 topics incl.
//    "programming in Unity"; "We average approximately 20 total homework assignments over the first two weeks";
//    "between three and four hours of homework every night"; "A typical day includes five hours of classes and three
//    hours of homework"; "Each team consists of five or six students"; one-week "Lightning Round"; pitch "three ideas to
//    faculty"; "We do not assign that role in the NHSGA. Design is a collaborative effort."; "Do not submit a link to an
//    online portfolio."; "No more than 10 documents or work examples should be submitted."; "If applying for a software
//    position, please submit a video of the game or project being played or used live."; Basic Application Deadline
//    "March 1, 2027"; Scholarship Application Deadline "February 1, 2027", decisions "April 1, 2027"; "Resident Only";
//    "Work may not be done remotely." The page names its director; we do not name him.
//  - Godot Engine licence (godotengine.org/license/): "Godot Engine is free and open source", "released under the
//    permissive MIT license". Godot FAQ (docs.godotengine.org/en/stable/about/faq.html): "GDScript is the recommended
//    language to learn and use since it is native to Godot". Godot docs, Your first 2D game, Coding the player
//    (docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html): extends Area2D,
//    "@export var speed = 400", Input.is_action_pressed(), velocity.normalized() * speed, position += velocity * delta,
//    position.clamp(Vector2.ZERO, screen_size), get_viewport_rect().size; normalising stops faster diagonal movement.
//  - Unity Student plan (unity.com/products/unity-student): secondary school eligibility "Students 16 years and older who
//    are enrolled in an accredited educational institution and can consent to having their personal information
//    collected and processed".
//  - Roblox Creator Docs (copied from the pilot sources): Studio is "a free application available on Windows and Mac"
//    (studio/setup); "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones." (education FAQ).
//  - ESRB ratings guide (esrb.org/ratings-guide/): Teen "Content is generally suitable for ages 13 and up."; Everyone
//    10+ "Content is generally suitable for ages 10 and up." Only the age lines are used.
// Our own material, labelled on the page: the six-week at-home camp plan, the portfolio checklist, the engine choice
// table's recommendations, and the arithmetic on the Godot sample (diagonal speed 400 x 1.414 = about 566 pixels per
// second without normalising; 400 / 60 = about 6.7 pixels per frame at an assumed 60 frames per second; NHSGA weeks 1
// and 2 = 10 school days, so 20 assignments is about two a day).
// Lesson family: vectors and game loops (frame time, normalising, clamping).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MOVE = `extends Area2D

@export var speed = 400  # pixels per second, the value in Godot's own tutorial
var screen_size

func _ready():
    screen_size = get_viewport_rect().size

func _process(delta):
    var velocity = Vector2.ZERO
    if Input.is_action_pressed("move_right"):
        velocity.x += 1
    if Input.is_action_pressed("move_left"):
        velocity.x -= 1
    if Input.is_action_pressed("move_down"):
        velocity.y += 1
    if Input.is_action_pressed("move_up"):
        velocity.y -= 1
    if velocity.length() > 0:
        velocity = velocity.normalized() * speed
    position += velocity * delta
    position = position.clamp(Vector2.ZERO, screen_size)`;

const BUG = `# The camp-week bug we set on purpose: no normalized() call.
func _process(delta):
    var velocity = Vector2.ZERO
    if Input.is_action_pressed("move_right"):
        velocity.x += 1
    if Input.is_action_pressed("move_down"):
        velocity.y += 1
    velocity = velocity * speed   # (1, 1) * 400 has length of about 566
    position += velocity * delta`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'Game design summer camps for teens: what a serious program asks for, which engine to learn first, a six-week plan and a portfolio checklist.' },
  slug: 'game-design-summer-camp-for-teens',
  code: 'gdsc',
  accent: '#2B6B27',
  accentRationale: 'Game design summer camp for teens: #2B6B27, a deep pixel-meadow green from the allocation sheet, distinct from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'Game design summer camp for teens',
  title: 'Game Design Summer Camp for Teens: Engines, Plans, Portfolio',
  description: 'A game design summer camp for teens explained: what a selective 2027 program asks for, Godot, Unity or Roblox first, real GDScript, and our six-week plan.',
  ogDescription: 'What a serious teen game design camp expects, which engine fits which teen, a working Godot script, a six-week summer plan and a portfolio checklist, all in one place.',
  twitterDescription: 'Game design summer camp for teens: engines, a real script, a six-week plan.',
  pageName: 'Game Design Summer Camp for Teens',
  webPageDescription: 'A guide for US teens and parents choosing a video game design summer camp, with one selective program read from its own 2027 page, engine rules, real code and our own summer plan.',
  courseDescription: 'Live online game development classes for US teens over the summer, building original games in Unity, Godot or Roblox Studio, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Game design summer camp for teens',
  navLinks: [
    { href: '#serious', label: 'A selective camp' },
    { href: '#engines', label: 'Which engine' },
    { href: '#code', label: 'Real code' },
    { href: '#plan', label: 'Six-week plan' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Summer 2027',
  h1: 'Game design summer camp for teens',
  lede: 'A good game design summer camp for teens ends with a game somebody else can play, not a certificate. That takes an engine, a team or a mentor, and a deadline. This page reads one of the most demanding US programs from its own 2027 page so families can see what the top end really asks, compares the engines a teenager can use legally at each age, walks through a short Godot script line by line, and sets out the six-week summer plan our teachers use online for teens who want to build a finished game from home.',
  secondaryCta: { href: '#plan', label: 'See the six-week plan' },
  wa: 'Hello Modern Age Coders, my teenager in the US wants a game design camp this summer. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; one finished game as the goal',
  spec: [
    ['Ages', '13 to 18'],
    ['Engines', 'Unity, Godot, Roblox Studio'],
    ['Goal', 'One finished, playable game'],
    ['Length', 'Six weeks, or longer'],
    ['Format', 'Live online classes'],
    ['Group', 'A batch, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A game design summer camp for teens should leave the student with one finished game, a short gameplay video and the ability to explain their code. Residential programs such as Carnegie Mellon&rsquo;s National High School Game Academy run six weeks, need applicants aged 16 or older and close applications by March 1, 2027. Modern Age Coders teaches the same skills live online, ages 13 to 18, in a batch or one to one.',

  picks: {
    eyebrow: 'Build the game with a teacher',
    h2: 'Three courses that turn a summer into a finished game',
    lede: 'Pick by engine and by how much code the teen already writes. All three are live, with homework reviewed every week.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', code: 'GDSC / 01', title: 'Game development for teens', note: 'Ages 13 to 18. Unity and C#, from first scene to shipped build.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'GDSC / 02', title: 'Browser games in JavaScript', note: 'Ages 13 to 18. Games that run on a school Chromebook.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'GDSC / 03', title: 'Roblox games in Luau', note: 'Younger teens. Real scripts in Roblox Studio.' }
    ]
  },

  sections: [
    {
      id: 'serious', tint: 'tint', eyebrow: 'The top end',
      h2: 'What a selective teen game design program asks for in 2027',
      lede: 'To see what serious looks like, we read the 2027 page of Carnegie Mellon&rsquo;s National High School Game Academy (NHSGA) from start to finish. It is one residential program among many, not a ranking, and the details below are only what Carnegie Mellon publishes.',
      body: [
        { kind: 'table', caption: 'National High School Game Academy, 2027 cycle, from Carnegie Mellon Pre-College&rsquo;s own page (read 17 October 2026)', head: ['Point', 'What the 2027 page says'], rows: [
          ['Length', 'Six weeks of video game development, June 26 to August 7, 2027, resident only'],
          ['Age', '"You must be 16 years of age by June 26, 2027."'],
          ['Grade', 'A current sophomore or junior when applying; the page adds that "most of our admitted students will be juniors"'],
          ['Grades in school', '"Have an academic average of B (3.0/4.0) or better."'],
          ['Tracks', 'Software Development, Visual Arts or Graphic Design, Sound Design or Music Composition, Game Generalist'],
          ['Deadlines', 'Scholarship application February 1, 2027 (decisions April 1, 2027); basic application March 1, 2027, decided on a rolling basis'],
          ['Attendance', 'In person every day; "Work may not be done remotely."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The workload, in their numbers',
          left: [
            'The first two weeks are classes in 2D and 3D art, programming in Unity, project management, interactive storytelling, game design, animation, sound and public speaking. The page says "A typical day includes five hours of classes and three hours of homework."',
            'It also says "We average approximately 20 total homework assignments over the first two weeks." Our arithmetic: two school weeks are ten weekdays, so that is about two assignments a day, every day, on top of class.'
          ],
          rightH3: 'How the teams work',
          right: [
            'From week three, students build in teams of five or six: programmers, visual artists, generalists and sound designers. A one-week Lightning Round comes first, then a second team pitches three ideas and builds one original game from scratch.',
            'One line surprises many applicants: "We do not assign that role in the NHSGA. Design is a collaborative effort." Nobody is hired as the game designer; design comes out of the whole team.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/game-academy.html" rel="noopener" target="_blank">Carnegie Mellon Pre-College, National High School Game Academy</a>, read 17 October 2026. Dates are for the 2027 cycle; later cycles publish their own. We are not connected with Carnegie Mellon University, and we make no prediction about any admission decision.' }
      ]
    },
    {
      id: 'apply', tint: 'deep', eyebrow: 'Applying',
      h2: 'The work sample rules, and what they teach every teen',
      lede: 'Selective game programs judge what an applicant has already made. The NHSGA rules are unusually specific, and they are a good checklist even for a teen who never applies there.',
      body: [
        { kind: 'table', caption: 'Work samples for the 2027 NHSGA application, from Carnegie Mellon&rsquo;s page', head: ['Rule', 'What it says'], rows: [
          ['No portfolio links', '"Do not submit a link to an online portfolio." Upload documents instead, ideally one PDF.'],
          ['How many', '"No more than 10 documents or work examples should be submitted."'],
          ['Code', 'Written code is allowed if the applicant explains what skill each sample is meant to show.'],
          ['Software track', '"If applying for a software position, please submit a video of the game or project being played or used live."'],
          ['Team projects', 'Always say which role the applicant performed on any shared project.'],
          ['Prior experience', 'Helpful but not necessary; the page looks for a creative mindset shown through the samples.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the video matters so much',
          left: [
            'A reviewer can watch thirty seconds of play faster than they can install a build. A short capture that shows the core loop, a win and a loss tells them more than a page of description.',
            'That is why every plan on this page ends with a recorded play-through, whichever engine the teen uses.'
          ],
          rightH3: 'Saying who did what',
          right: [
            'Most teen games are built with friends. A sample that says "I wrote the enemy movement and the save system; my partner drew the art" is honest and much easier to judge.',
            'Keep a short build diary from the first day of camp. Writing the role statement in March is then a matter of copying, not remembering.'
          ] }
      ]
    },
    {
      id: 'engines', tint: 'tint', eyebrow: 'Which engine',
      h2: 'Godot, Unity or Roblox Studio: what each one allows at which age',
      lede: 'Engine choice is partly about taste and partly about rules. Account and licence terms set real age lines, and the hardware at home decides the rest.',
      body: [
        { kind: 'table', caption: 'Engine facts from each maker&rsquo;s own pages (read 17 October 2026); the last column is our recommendation', head: ['Engine', 'What the maker publishes', 'Our view: best fit'], rows: [
          ['Godot', '"Godot Engine is free and open source", "released under the permissive MIT license"; GDScript "is the recommended language to learn"', 'A teen who wants to own the whole game and learn clean scripting'],
          ['Unity', 'Student plan for secondary school: "Students 16 years and older who are enrolled in an accredited educational institution"', 'Older teens aiming at the C# and 3D skills many studios list'],
          ['Roblox Studio', '"a free application available on Windows and Mac"; "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones."', 'Younger teens who already play Roblox and want an audience fast'],
          ['Browser JavaScript', 'No single maker; our note: the code runs in the web browser, so nothing needs installing', 'A Chromebook household, or a first game in a few days']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the age lines carefully',
          left: [
            'The Unity line above is the eligibility rule for the free Student plan for secondary school students. Check Unity&rsquo;s current terms with your teen before creating any account, and keep a parent involved for anyone under 18.',
            'Godot has no account at all, which is one reason we like it for a summer: download, open, build.'
          ],
          rightH3: 'Ratings for the game itself',
          right: [
            'US families often judge teen games by the ESRB labels. The ESRB guide says Teen content "is generally suitable for ages 13 and up" and Everyone 10+ content "is generally suitable for ages 10 and up".',
            'Our suggestion is to keep a student game within what Everyone 10+ describes, so the project can be shown at school, to grandparents and on an application without a second thought.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://godotengine.org/license/" rel="noopener" target="_blank">Godot licence</a>, <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/about/faq.html" rel="noopener" target="_blank">Godot FAQ</a>, <a class="ag-inline-link" href="https://unity.com/products/unity-student" rel="noopener" target="_blank">Unity Student plan</a>, <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/setup" rel="noopener" target="_blank">Roblox Studio setup</a>, <a class="ag-inline-link" href="https://www.esrb.org/ratings-guide/" rel="noopener" target="_blank">ESRB ratings guide</a>, all read 17 October 2026. We are not connected with any of these companies or organisations.' }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'Real code',
      h2: 'A Godot movement script, and the bug every camp should teach',
      lede: 'This is the player movement from Godot&rsquo;s own first-game tutorial, set out as one script. It runs as written on an Area2D node once four input actions are mapped in the project settings.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; eight-way movement that stays on screen', lang: 'gdscript', code: MOVE, note: 'Every line here uses calls documented in the Godot tutorial: Input.is_action_pressed, Vector2.normalized, clamp and get_viewport_rect. The engine calls _process once per frame and passes delta, the seconds since the last frame.' },
        { kind: 'code', label: 'Script 2 &middot; the same idea with one line missing', lang: 'gdscript', code: BUG, note: 'Our arithmetic: holding right and down gives the vector (1, 1), whose length is the square root of 2, about 1.414. Times 400 that is about 566 pixels per second, so the player moves roughly 41 percent faster on a diagonal.' },
        { kind: 'two', mt: true,
          leftH3: 'Why delta matters',
          left: [
            'Speed is in pixels per second, but the screen updates in frames. Multiplying by delta converts one into the other. At an assumed 60 frames a second, delta is about 0.0167, so the player moves about 6.7 pixels each frame (400 / 60).',
            'On a slower laptop running 30 frames a second, delta doubles and the step doubles too, so the player still covers 400 pixels in a second. Without delta, a game runs at different speeds on different computers.'
          ],
          rightH3: 'What the student learns',
          right: [
            'Vectors, frame time and clamping are the same ideas behind physics in any engine. A teen who can explain Script 2&rsquo;s bug out loud understands something that later appears in Unity, in Roblox and in a high school physics class.',
            'We set this bug deliberately in week two of our plan. Students find it by feel first, because diagonal movement looks wrong, and then prove it with the square root of 2.'
          ] },
        { kind: 'source', html: 'Code source: <a class="ag-inline-link" href="https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html" rel="noopener" target="_blank">Godot docs, Your first 2D game: Coding the player</a>, read 17 October 2026. Script 2 and the arithmetic are ours.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Six weeks',
      h2: 'Our six-week summer plan for one finished game',
      lede: 'This is our plan for a teen learning from home with live classes. It assumes about six hours a week: two live lessons and the build time between them. It is deliberately smaller than a residential program, because a finished small game beats an unfinished large one.',
      body: [
        { kind: 'table', caption: 'Six weeks to a finished game (our plan)', head: ['Week', 'Goal', 'Finished when'], rows: [
          ['1', 'Engine set up and a moving player', 'The player moves, stays on screen and the teen can explain delta'],
          ['2', 'The core loop', 'One thing to collect or avoid, a score, and the diagonal bug found and fixed'],
          ['3', 'Win and lose', 'A start screen, a game-over screen and a restart button'],
          ['4', 'Playtest', 'Four people outside the family played it; their three biggest complaints written down'],
          ['5', 'Fix and polish', 'The three complaints fixed; sound and one visual pass'],
          ['6', 'Ship and record', 'An exported build, a 60 to 90 second play video, and a one-page build diary']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 13 and 14', p: 'Roblox Studio or browser JavaScript. One level, one mechanic, done properly.' },
          { h3: 'Ages 15 and 16', p: 'Godot with GDScript. A short arcade game with a title screen and saved high score.' },
          { h3: 'Ages 16 to 18', p: 'Unity or Godot, a level designed on paper first, and a gameplay video fit for an application.' }
        ] },
        { kind: 'p', mt: true, html: 'Our time budget, for parents who want the number: six hours a week for six weeks is 36 hours. A residential day at the program above is five hours of class and three of homework, so 36 hours is roughly four and a half of those days. That is why our plan aims at one small game rather than two team games.' }
      ]
    },
    {
      id: 'portfolio', tint: 'deep', eyebrow: 'The portfolio',
      h2: 'A portfolio checklist for a teen game designer',
      lede: 'Whether the next step is a selective camp, a school showcase or a college application, the same few items do the work. This checklist is ours, built from the work-sample rules above.',
      body: [
        { kind: 'ol', items: [
          '<b>One finished game.</b> Playable from start to end, with a way to win and a way to lose.',
          '<b>A short play video.</b> Sixty to ninety seconds of real play, with no music laid over the game&rsquo;s own sound.',
          '<b>A role statement.</b> One sentence per project saying exactly what the teen made.',
          '<b>One explained code sample.</b> A function the teen wrote, with three lines on why it is built that way.',
          '<b>A design page.</b> The first sketch of the level next to a screenshot of the final one.',
          '<b>A playtest note.</b> What testers struggled with and what changed because of it.',
          '<b>Everything in one PDF.</b> Matching the no-links rule, with the video uploaded where the application allows it.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What not to include',
          left: [
            'Tutorial projects copied step by step. Reviewers recognise the standard first-game assets at a glance, and they show following, not designing.',
            'Ten half-finished prototypes. The rule says no more than ten examples; three strong ones are better.'
          ],
          rightH3: 'Using AI tools honestly',
          right: [
            'If an AI tool helped with art or code, say so in the role statement, exactly as you would credit a teammate.',
            'Under-18 students should only use tools whose terms allow their age, with a parent aware of the account. In class we use AI mainly to explain an error message, not to write the game.'
          ] }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Choosing a camp',
      h2: 'Residential, local day camp or live online: how to choose',
      lede: 'There is no single right format. These are the questions we suggest families ask any program, including ours.',
      body: [
        { kind: 'table', caption: 'Questions to ask any game design summer program (our checklist)', head: ['Question', 'Why it matters'], rows: [
          ['What does a student take home on the last day?', 'A build and a video, or only a certificate?'],
          ['Which engine, and can we keep using it at home?', 'Free engines and accounts the teen is old enough to hold'],
          ['How many students per instructor?', 'Code help is one to one, even inside a group'],
          ['Is there real code, or only visual tools?', 'Both are valid; know which one you are paying for'],
          ['What happens after the summer?', 'A game started in July is often finished in September'],
          ['Who owns the game?', 'Teens should be free to publish and show their own work']
        ] },
        { kind: 'p', mt: true, html: 'For more on our summer formats, see the <a class="ag-inline-link" href="/summer-coding-camp-teens">teen summer coding camp</a> and the <a class="ag-inline-link" href="/online-coding-summer-camp">online coding summer camp</a> pages. This page is about game design only.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages on the way to a game portfolio',
    lede: 'Where teens usually start when they ask about a game camp.',
    table: { caption: 'From player to game designer (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Player', 'Plays a lot, has ideas, has not opened an engine'],
      ['2. Tinkerer', 'Has followed a tutorial and changed some numbers'],
      ['3. Builder', 'Has made a small game with a start and an end'],
      ['4. Designer', 'Has shipped, playtested and explained a game of their own']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 to stage 3 in one summer is realistic with steady weekly lessons.',
      'Watch for the playtest week. A teen who listens to testers is learning design, not only code.'
    ] },
    right: { h3: 'For teens', ps: [
      'Make the smallest game you would still be proud of, then make it feel good to play.',
      'Write your build diary every session. Future you will need it for every application.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for teens who want to make games',
    lede: 'Each one runs live online with a teacher who reviews the student&rsquo;s own project, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'First games', sub: 'Ages 13 to 14', courses: [
        { code: 'GDSC / START / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripts, events and a real audience.' },
        { code: 'GDSC / START / 02', slug: 'scratch-programming-complete-course', title: 'Scratch games', blurb: 'Game logic without typing yet.' },
        { code: 'GDSC / START / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript games', blurb: 'Playable in any browser.' }
      ] },
      { num: 'II', h3: 'Real engines', sub: 'Ages 14 to 18', courses: [
        { code: 'GDSC / ENGINE / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Unity and C#', blurb: '2D and 3D, built and exported.' },
        { code: 'GDSC / ENGINE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Logic first, then Pygame.' },
        { code: 'GDSC / ENGINE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'The maths behind game systems.' }
      ] },
      { num: 'III', h3: 'Ship it', sub: 'Strong builders', courses: [
        { code: 'GDSC / SHIP / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Save every version of the game.' },
        { code: 'GDSC / SHIP / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Game jams and hackathons', blurb: 'Build to a deadline, as a team.' },
        { code: 'GDSC / SHIP / 03', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'A game can be the Create task.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live game design lessons that fit a summer',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Summer afternoons or evenings in your own time zone.' },
      { time: 'Weekends', l: 'A good fit around summer jobs and family trips.' },
      { time: '1-on-1', l: 'Built around one teen&rsquo;s game and pace.' }
    ],
    cells: [
      { h3: 'Your engine', p: 'Unity, Godot, Roblox Studio or the browser.' },
      { h3: 'Weekly build review', p: 'The teacher plays the latest version each week.' },
      { h3: 'Playtest week', p: 'Real testers, written notes, real fixes.' },
      { h3: 'Ship day', p: 'An exported build and a recorded play video.' },
      { h3: 'From home', p: 'Any state, no travel, no dorm.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Games and apps our students have built',
  projectsLede: 'A few projects from our learners, from first arcade games upward. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote about us on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Game design classes are billed month by month in US dollars. A teen can take one summer month, or keep going into the school year to finish a bigger game, with no long contract either way.',
    free: ['A free first lesson', 'Bring a game idea', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A mentor to yourself', 'Your engine, your game', 'Timed around summer plans']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Game design summer camp for teens: common questions',
    items: [
      { q: 'What should a teen get out of a game design summer camp?', a: 'One finished game that someone else can play, a short video of it being played, and the ability to explain their own code. A certificate on its own shows very little.' },
      { q: 'How old do you have to be for the National High School Game Academy?', a: 'Carnegie Mellon\'s 2027 page says applicants must be 16 by June 26, 2027 and be a sophomore or junior when they apply, with a B average or better. We are not connected with the program.' },
      { q: 'When are the 2027 NHSGA deadlines?', a: 'The 2027 page lists February 1, 2027 for the scholarship application, with decisions on April 1, 2027, and March 1, 2027 for the basic application, decided on a rolling basis.' },
      { q: 'Which game engine should a teenager learn first?', a: 'For a 13 or 14 year old who plays Roblox, Roblox Studio. For a teen who wants clean scripting and full ownership, Godot. For older teens aiming at C# and 3D, Unity. That is our view, not a rule.' },
      { q: 'Is Godot really free?', a: 'Yes. The Godot licence page says Godot Engine is free and open source, released under the permissive MIT license. No account is needed to download it.' },
      { q: 'Can my teen use Unity for free?', a: 'Unity offers a free Student plan. Its page says secondary school students qualify at 16 years and older if enrolled in an accredited educational institution.' },
      { q: 'Can my teen make games on a Chromebook?', a: 'Roblox\'s own education FAQ says Roblox Studio cannot run on Chromebooks. Browser-based JavaScript games work well on a Chromebook, which is why we teach that route to Chromebook families.' },
      { q: 'Is an online game design camp as good as a residential one?', a: 'They are different. Residential camps give team life on campus; live online classes give a regular teacher, no travel and the chance to keep building after summer. Choose by what your teen needs.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How can Modern Age Coders help over the summer?', a: 'A regular teacher takes your teen through our six-week plan in the engine that suits them, reviews each build, runs a playtest week and helps record the final play video.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for teens who build games and want to keep going.',
    items: [
      { href: '/summer-coding-camp-teens', label: 'Summer coding camp for teens', p: 'Our general summer program.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Three working Luau scripts.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Game jams under a clock.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'Games are eligible apps too.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our learners shipped.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Learn to code Minecraft mods', p: 'Minecraft modding in Java for teens: Fabric or Forge, Java versions, a first item.' },
      { href: '/python-games-for-kids', label: 'Python games for kids', p: 'Python games kids can code: a guessing game, then pygame, step by step.' },
      { href: '/makecode-arcade-help-for-students', label: 'MakeCode Arcade help', p: 'MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring the game your teen keeps describing at dinner. In the first lesson the teacher picks an engine with them and cuts the idea down to something that can be finished this summer.',
    readFirst: 'Curious how a lesson actually runs? Our <a class="ag-inline-link" href="/how-we-teach">teaching method</a> page walks through one, and every syllabus sits on the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Teachers join by video from India. There is nothing to drive to; families in every US state message us on WhatsApp.',
    formNote: 'The first lesson is free. Nothing to pay today.'
  },

  footer: {
    cols: [
      { h4: 'Make games', links: [
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/summer-coding-camp-teens', label: 'Teen summer camp' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] }
    ],
    bottomRight: 'Normalise the vector'
  },

  personalityCss: `
.ag-root.ag-gdsc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-gdsc .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-gdsc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gdsc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gdsc .ag-steps { gap: 0.9rem; }
.ag-root.ag-gdsc .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Carnegie Mellon Pre-College, National High School Game Academy 2027 page (six weeks, June 26 to August 7, 2027; 16 by June 26, 2027; sophomore or junior; B (3.0/4.0); four tracks; five hours of class and three of homework; about 20 assignments in two weeks; teams of five or six; Lightning Round; no designer role; work-sample rules; deadlines February 1 and March 1, 2027; resident only). Godot licence and FAQ, Godot first-2D-game tutorial code; Unity Student plan eligibility; Roblox Studio setup and education FAQ; ESRB ratings guide age lines. All read raw on 17 October 2026.',
    localProject: 'Our six-week at-home game plan (36 hours at six hours a week), our portfolio checklist, our engine recommendations, and our arithmetic on the Godot sample: diagonal speed about 566 pixels per second without normalising (400 x 1.414), about 6.7 pixels per frame at an assumed 60 frames per second. Lesson family: vectors and game loops.',
    requiredMentions: ['June 26 to August 7, 2027', 'You must be 16 years of age by June 26, 2027.', 'most of our admitted students will be juniors', 'B (3.0/4.0)', 'five hours of classes and three hours of homework', 'We do not assign that role in the NHSGA', 'Do not submit a link to an online portfolio.', 'released under the permissive MIT license', 'Students 16 years and older', 'Roblox Studio cannot run on Chromebooks', 'about 566 pixels per second', 'position.clamp(Vector2.ZERO, screen_size)'],
    sources: [
      { claim: 'NHSGA 2027: length, age, grade, GPA, tracks, workload, teams, work samples, deadlines, residence.', url: 'https://www.cmu.edu/pre-college/academic-programs/game-academy.html' },
      { claim: 'Godot is free and open source under the MIT license.', url: 'https://godotengine.org/license/' },
      { claim: 'GDScript is the recommended language in Godot.', url: 'https://docs.godotengine.org/en/stable/about/faq.html' },
      { claim: 'Movement code: Input.is_action_pressed, normalized, clamp, get_viewport_rect.', url: 'https://docs.godotengine.org/en/stable/getting_started/first_2d_game/03.coding_the_player.html' },
      { claim: 'Unity Student plan secondary eligibility: 16 and older, accredited institution.', url: 'https://unity.com/products/unity-student' },
      { claim: 'Roblox Studio is a free application on Windows and Mac.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Roblox Studio cannot run on Chromebooks or mobile devices.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' },
      { claim: 'ESRB Teen and Everyone 10+ age lines.', url: 'https://www.esrb.org/ratings-guide/' }
    ],
    rejectedClaims: [
      'Acceptance rates or class sizes for the NHSGA: not published on the page, so not printed.',
      'Program fees for the NHSGA: not stated on the page read, so not printed.',
      'The NHSGA director by name: the page names him; we do not name individuals.',
      'Johns Hopkins CTY summer pages: returned 403 to a plain request, so not used.',
      'Any ranking of game camps, or a claim that our classes improve admission chances: refused.',
      'ESRB content descriptors beyond the age lines: not needed, not printed.'
    ]
  }
};
