'use strict';
// Video game coding classes for kids (ag- offer door; US cluster Phase 2, row 9).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, fetched raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/video-game-coding-classes-for-kids/,
// plus the raw files already saved for the sibling pages, named below):
//  - scratchjr.org/about (meta description): "With ScratchJr, young children (ages 5-7) can program their own interactive
//    stories and games."
//  - scratch.mit.edu/about: "Scratch is free for everyone."; "block-based coding interface that they can drag and snap
//    together: no tricky syntax required"; "developed at the MIT Media Lab in 2007"; "In 2019, Scratch was transferred
//    from MIT to the Scratch Foundation"; "over a billion Scratch projects"; "a safe, moderated online community";
//    scratch.mit.edu meta description: "Scratch is a free programming language and online community". (scratch.mit.edu/faq
//    now renders Contact Us client-side and its bundle returned HTTP 403, so no Scratch age range is printed.)
//  - arcade.makecode.com (raw md, src/makecode-arcade-help-for-students/): about "a code editor to build Retro Arcade
//    games for the browser and handheld consoles"; courses "Code a Carnival" "for students in grades 5-12"; offline "an
//    HTML5 web application"; FAQ: "Anyone can see your project if they have its shared URL."
//  - create.roblox.com (pilot dossier, src-pilots/roblox/): Studio "a free application available on Windows and Mac";
//    "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones."; "Our team typically recommends it
//    for ages 10 and up"; new games private by default.
//  - pypi.org/project/pygame (src/python-games-for-kids/): "free and open-source cross-platform library for the
//    development of multimedia applications like video games using Python".
//  - godotengine.org/license (src/how-to-make-a-3d-game-for-kids/): "free and open source", "permissive MIT license";
//    Godot system requirements: "iOS: Cannot run the editor".
//  - Our kids course JSON: "2 live one-hour classes per week"; "every month ends with a playable build".
// Our own facts, labelled on the page: our kids course (ages 8 to 12, 6 to 8 months, 26 to 32 weeks; months 1 to 2
// Scratch game logic, 3 to 4 bigger 2D games, 5 to 6 Roblox Studio, Minecraft and a capstone) and teen course (ages 13 to
// 18, Unity and C#, 10 to 12 months, 40 to 48 weeks), from content/courses/data/game-dev-kids.json and game-dev-teens.json;
// the game-to-concept table; the class checklist; and the arithmetic: two classes a week for 26 weeks is 52 classes
// (26 x 2 = 52), and a game finished every month of a 6-month course is 6 finished games.
// Lesson family: games as systems (every game feature is a coding concept in disguise).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GAME CODING CLASSES', blurb: 'Video game coding classes for kids: the right tool for each age from the makers’ own pages, what a class really teaches, and how to choose one.' },
  slug: 'video-game-coding-classes-for-kids',
  code: 'vgk',
  accent: '#406B66',
  accentRationale: 'Video game coding classes, US: the allocated deep teal #406B66, a quiet console green kept clear of neon, contrast 5.64, 5.30 and 4.85 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Video game coding classes for kids',
  title: 'Video Game Coding Classes for Kids: Live Online, Ages 6 to 17',
  description: 'Video game coding classes for kids, live online across the US: which game tool suits each age, what a good class teaches, our six-month course, and how to choose.',
  ogDescription: 'Kids who love games can learn to code them. Which tool fits which age, from the makers’ own pages, what each game feature teaches, and how to tell a real coding class from screen time.',
  twitterDescription: 'Video game coding classes for kids: tools by age, what classes teach, how to choose.',
  pageName: 'Video Game Coding Classes for Kids',
  webPageDescription: 'A guide for US parents choosing a video game coding class, with a tool-by-age table built from Scratch, ScratchJr, MakeCode, Roblox, pygame and Godot pages, and our own course plan.',
  courseDescription: 'Live online video game coding classes for kids and teens in the United States, from Scratch and Roblox to Unity, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Video game coding classes',
  navLinks: [
    { href: '#ages', label: 'Tools by age' },
    { href: '#inside', label: 'What kids learn' },
    { href: '#course', label: 'Our course' },
    { href: '#choose', label: 'Choosing a class' },
    { href: '#safety', label: 'Sharing safely' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 17 &middot; Live online game coding',
  h1: 'Video game coding classes for kids',
  lede: 'A child who begs for more screen time is often a child who would love to make games instead of only playing them. Video game coding classes turn that energy into real programming: scores become variables, enemies become loops, and levels become data. This page is for US parents weighing up a class. It sets out which game-making tool suits which age, using what each tool&rsquo;s makers publish, explains what a good class should actually teach, shows our own six-month course plan, and gives a checklist for judging any class, ours included.',
  secondaryCta: { href: '#ages', label: 'See tools by age' },
  wa: 'Hello Modern Age Coders, my child in the US loves video games and wants to learn to code them. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Game coding for ages 6 to 17',
  spec: [
    ['Ages', '6 to 17'],
    ['Tools', 'Scratch, Roblox Studio, Unity and more'],
    ['Real code', 'Blocks, then Luau, Python, C#'],
    ['Where', 'Live online, any US state'],
    ['Groups', 'Batches or one to one'],
    ['Days', 'Weekdays or weekends'],
    ['Kids course', 'Six months, a game a month'],
    ['First step', 'A free trial lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Video game coding classes teach kids to program by building games: Scratch or ScratchJr for the youngest, Roblox Studio from about 10, then Python, Unity and C# for teens. A good class has the child write the code and finish games. Modern Age Coders runs live online game coding classes for ages 6 to 17 across the US, in batches or one to one.',

  picks: {
    eyebrow: 'Our game coding courses',
    h2: 'Three courses, matched to age and experience',
    lede: 'Every one ends each stage with a game the child can actually play and show.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'VGK / 01', title: 'Game development for kids', note: 'Six months for ages 8 to 12: Scratch first, then Roblox and Minecraft.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'VGK / 02', title: 'Game development for teens', note: 'Ten to twelve months of Unity and C# for ages 13 to 18.' },
      { course: 'scratch-programming-complete-course', code: 'VGK / 03', title: 'Scratch coding for kids', note: 'For first-time coders: games in blocks, a gentle start.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: 'tint', eyebrow: 'Start here',
      h2: 'Which game coding tool fits which age',
      lede: 'The right first tool depends far more on a child&rsquo;s age and reading level than on the games they play. The middle columns repeat what the people behind each tool say in public; the final column is where we would place a child.',
      body: [
        { kind: 'table', caption: 'Game coding tools by age, as their makers describe them on 17 October 2026; placement column ours', head: ['Tool', 'What its makers say', 'Runs on', 'Where we place it'], rows: [
          ['ScratchJr', 'Young children (ages 5-7) can program their own interactive stories and games', 'See ScratchJr&rsquo;s site', 'Ages 6 to 7'],
          ['Scratch', 'Free for everyone; a block-based interface with no tricky syntax required', 'Web browser', 'Ages 7 to 11'],
          ['MakeCode Arcade', 'A code editor to build retro arcade games for the browser and handheld consoles', 'Web browser', 'Ages 9 to 13'],
          ['Roblox Studio', 'Free on Windows and Mac; Roblox typically recommends it for ages 10 and up', 'Windows or Mac only', 'Ages 10 to 14'],
          ['Python with pygame', 'A free and open-source library for making video games in Python', 'Windows, Mac or Linux', 'Ages 10 to 16'],
          ['Godot', 'Free and open source under the permissive MIT license', 'Windows, Mac, Linux, a web editor', 'Ages 12 and up'],
          ['Unity with C#', 'A professional engine; check Unity&rsquo;s own requirements and plans', 'Windows, Mac or Linux', 'Ages 13 to 17']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why blocks first for younger kids',
          left: [
            'Scratch describes its interface as blocks that children drag and snap together, with no tricky syntax required. For a seven-year-old that matters enormously: a missing bracket cannot stop the game, so all of their attention goes on the logic.',
            'Scratch has deep roots for a children&rsquo;s tool. Scratch began life at the MIT Media Lab in 2007, moved to the independent Scratch Foundation in 2019, and its makers say children have created over a billion Scratch projects.'
          ],
          rightH3: 'When to move to typed code',
          right: [
            'Our rule of thumb: when a child can plan a game on paper, build it in blocks without help, and is frustrated that blocks feel slow, they are ready for Luau in Roblox Studio or for Python.',
            'Age alone is a poor guide. Some nine-year-olds type confidently; some twelve-year-olds still need blocks. A first lesson that doubles as a placement check sorts that out quickly.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://www.scratchjr.org/about/info" rel="noopener" target="_blank">ScratchJr</a>, <a class="ag-inline-link" href="https://scratch.mit.edu/about" rel="noopener" target="_blank">About Scratch</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/about" rel="noopener" target="_blank">About MakeCode Arcade</a>, the <a class="ag-inline-link" href="https://create.roblox.com/docs/education/resources/frequently-asked-questions-education" rel="noopener" target="_blank">Roblox education FAQ</a>, <a class="ag-inline-link" href="https://pypi.org/project/pygame/" rel="noopener" target="_blank">pygame on PyPI</a> and the <a class="ag-inline-link" href="https://godotengine.org/license/" rel="noopener" target="_blank">Godot license</a>. None of these organizations is connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'inside', tint: 'deep', eyebrow: 'Behind the fun',
      h2: 'What kids really learn in a video game coding class',
      lede: 'Parents sometimes worry that a game class is more games. A real one is a programming class wearing a costume. Every feature a child adds to a game is a computer science idea, and the table below is how we explain that to families.',
      body: [
        { kind: 'table', caption: 'Game features and the coding ideas behind them (ours)', head: ['When the child adds', 'They are learning', 'Where it shows up later'], rows: [
          ['A score', 'Variables: a named value that changes', 'Every program ever written'],
          ['Lives and game over', 'Conditions: if something is true, do this', 'Logic in math and in apps'],
          ['Enemies that patrol', 'Loops: repeat until something changes', 'Automation and data processing'],
          ['A button that jumps', 'Events: code that waits for something to happen', 'Websites, phone apps, robots'],
          ['Gravity and speed', 'Velocity and acceleration as numbers', 'Physics class and simulations'],
          ['A second level', 'Data: the level stored separately from the code', 'Databases and file formats'],
          ['A fair difficulty', 'Testing and tuning: change, play, measure', 'Engineering of every kind']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The signs your child is really coding',
          left: [
            'They can explain, in their own words, why the score went up. They fix a bug by reasoning about it instead of deleting everything and starting again. They start to plan a game before they build it.',
            'None of that comes from following a video. It comes from writing code, getting it wrong, and having someone ask the right question at the right moment.'
          ],
          rightH3: 'The math hiding in games',
          right: [
            'Coordinates, negative numbers, speed, ratios and probability all turn up naturally the moment a child moves a sprite or randomizes an enemy, and a game gives a child a reason to care about them long before a test does.',
            'That is why we teach coding and math together where it helps: a jump height worked out on paper and then tested in a game is a lesson a child remembers.'
          ] }
      ]
    },
    {
      id: 'course', tint: 'tint', eyebrow: 'Our kids course',
      h2: 'Inside our six-month video game coding course for ages 8 to 12',
      lede: 'This is the plan our Game Development for Kids course follows, taken from its published syllabus. Children who join with some coding behind them are placed further along.',
      body: [
        { kind: 'table', caption: 'Game Development for Kids, our course plan (ages 8 to 12, 6 to 8 months, 26 to 32 weeks)', head: ['Months', 'Phase', 'What the child builds'], rows: [
          ['1 to 2', 'Game logic in Scratch', 'Movement, scoring, enemies, and complete first games that work'],
          ['3 to 4', 'Bigger, better 2D games', 'Levels, polish and game feel, in larger 2D projects'],
          ['5 to 6', 'Roblox Studio and Minecraft', 'Obbies and tycoons in Roblox Studio, coded Minecraft builds, a capstone'],
          ['Final week', 'Demo day', 'The capstone game, presented and explained by the child']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The numbers behind it (our arithmetic)',
          left: [
            'Our course runs two live classes a week, so 26 weeks is 26 x 2 = 52 classes. Each month ends with a playable build, so the six months are planned around six playable builds rather than one half-built game.',
            'Finishing is the skill we care about most. Starting a game is easy; seeing one through is what teaches.'
          ],
          rightH3: 'For teenagers',
          right: [
            'Teens aged 13 to 18 join Game Development for Teens instead, which builds in Unity with C# over 10 to 12 months, 40 to 48 weeks, and ends with games that are genuinely shipped.',
            'Teens who prefer a game they already love can take a different road: Roblox scripting in Luau, or Minecraft modding inside our Java course.'
          ] }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Choosing well',
      h2: 'How to choose a video game coding class: eight questions to ask',
      lede: 'Classes with the same name can be very different things. These questions separate a real coding class from supervised game time. Ask them of any provider, including us.',
      body: [
        { kind: 'ol', items: [
          '<b>Does my child write the code?</b> Watching an instructor build a game teaches far less than building it, even badly, with help.',
          '<b>Is it live or recorded?</b> Recorded videos cannot answer a question. A live teacher can see the bug and ask about it.',
          '<b>Is it the same teacher every week?</b> A teacher who remembers last week&rsquo;s game can build on it.',
          '<b>How big is the group, and is private teaching possible?</b> Ask for the actual number, and whether one-to-one lessons exist for a child who needs them.',
          '<b>Will my child finish games?</b> Ask how many complete games a child usually has after a term.',
          '<b>Does it move toward typed code?</b> Blocks are a fine start. A course that never reaches typed code stops being a coding course for older kids.',
          '<b>Does it fit our computer?</b> Some tools need Windows or a Mac. Ask before you pay.',
          '<b>How does sharing work?</b> Ask what is public, what is private, and who can see your child&rsquo;s games.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our own answers',
          left: [
            'Live classes, the same teacher every week, children writing every line, a finished game each month in the kids course, and a path from blocks to Luau, Python and C#. Batches are fifteen to twenty students; one-to-one lessons are available for any course.',
            'Our teachers check which computer your child uses before the course starts, so the first class is not spent on an install that cannot work.'
          ],
          rightH3: 'Near me, or online?',
          right: [
            'A search for video game coding classes near me is really a search for a regular slot and a real teacher. Live online classes give both, without the drive, and they reach every state from Alaska to Florida the same way.',
            'Summer is popular too. Our <a class="ag-inline-link" href="/summer-coding-camp">summer coding camp</a> page covers holiday options, and regular classes run through the school year.'
          ] }
      ]
    },
    {
      id: 'devices', tint: 'tint', eyebrow: 'The computer at home',
      h2: 'Will it run? Game coding tools and the family computer',
      lede: 'A surprising number of first lessons stall on the device, not the code. Here is the short version, from the tools&rsquo; own pages.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Chromebook', p: 'Scratch and MakeCode Arcade run in a web browser, so they work. Roblox Studio is the exception: its makers rule out Chromebooks, so Roblox building needs another machine.' },
          { h3: 'Windows or Mac', p: 'Everything on this page runs on one or the other: Scratch, MakeCode, Roblox Studio, Python with pygame, Godot and Unity.' },
          { h3: 'Tablet', p: 'For older kids a tablet is mostly for playing: Roblox lists Studio for Windows and Mac, and Godot says iOS cannot run its editor. Plan on a laptop or desktop for building.' }
        ] },
        { kind: 'p', mt: true, html: 'Deciding between the two big game worlds? <a class="ag-inline-link" href="/blog/minecraft-vs-roblox-which-teaches-kids-to-code">Minecraft vs Roblox for learning to code</a> compares them, and <a class="ag-inline-link" href="/blog/top-coding-games-platforms-make-learning-fun-kids">our guide to coding games and platforms</a> covers the wider field. For age-by-age detail, see <a class="ag-inline-link" href="/coding-for-8-year-olds">coding for 8 year olds</a> and <a class="ag-inline-link" href="/coding-for-12-year-olds">coding for 12 year olds</a>.' }
      ]
    },
    {
      id: 'safety', tint: 'deep', eyebrow: 'Sharing safely',
      h2: 'Sharing a child&rsquo;s games without worry',
      lede: 'Showing friends a finished game is half the fun. Each tool handles sharing differently, and it is worth knowing how before the first game is done.',
      body: [
        { kind: 'table', caption: 'How sharing works, in each tool&rsquo;s documentation as of 17 October 2026', head: ['Tool', 'What its makers say about sharing'], rows: [
          ['Scratch', 'A safe, moderated online community, with an expert team of moderators'],
          ['MakeCode Arcade', 'Anyone can see your project if they have its shared URL'],
          ['Roblox Studio', 'Until a creator releases it, a new game is open only to the creator, Edit collaborators and group members']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A family rule that works',
          left: [
            'Agree before the first game: who it is shared with, where, and how. A link sent to grandparents is different from a game posted for strangers.',
            'Read the game description together before anything is published. Writing one clear sentence about a game is a good exercise in itself.'
          ],
          rightH3: 'What we do in class',
          right: [
            'Students share their games with the teacher and, with permission, with classmates in the batch. We never publish a child&rsquo;s game anywhere on their behalf.',
            'For under-18 students we avoid general AI chat tools whose terms are written for adults, and keep AI help inside the tools a child is already allowed to use.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From player to maker',
    h2: 'From playing to designing, in four stages',
    lede: 'Where a child might be when a parent first searches for a class.',
    table: { caption: 'Stages of learning to code games (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Fan', 'Can explain what makes a favorite game fun'],
      ['2. Remixer', 'Changes other people&rsquo;s games to see what happens'],
      ['3. Builder', 'Builds a small complete game from an empty project'],
      ['4. Designer', 'Plans, builds, tests and tunes a game for other players']
    ] },
    left: { h3: 'For parents', ps: [
      'A child at stage 1 is not behind. Opinions about games are the raw material of game design.',
      'The leap from stage 2 to stage 3 is the empty project. A teacher&rsquo;s first prompt can make it possible.'
    ] },
    right: { h3: 'For kids', ps: [
      'Copy a game you love, but make one thing your own: a new enemy, a new power, a new level.',
      'Finish it before starting the next. Small and finished beats big and broken.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for kids who love games',
    lede: 'Live online, with a teacher who stays with your child, grouped or private.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'VGK / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'First games in blocks.' },
        { code: 'VGK / KID / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Six months, a playable build each month.' },
        { code: 'VGK / KID / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds worlds.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'VGK / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, shipped games.' },
        { code: 'VGK / TEN / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Luau', blurb: 'Scripting in a world they know.' },
        { code: 'VGK / TEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Includes Minecraft modding.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'VGK / PRO / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'pygame and beyond.' },
        { code: 'VGK / PRO / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of game engines.' },
        { code: 'VGK / PRO / 03', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'For older teens and adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live game coding classes, timed for US families',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches in Eastern to Pacific time.' },
      { time: 'Weekends', l: 'Weekend mornings, a favorite for younger kids.' },
      { time: '1-on-1', l: 'Private lessons, whenever suits you.' }
    ],
    cells: [
      { h3: 'Kids write the code', p: 'Every game is built by the child.' },
      { h3: 'A game a month', p: 'Something playable at every step.' },
      { h3: 'Same teacher', p: 'Week after week.' },
      { h3: 'Blocks to typed code', p: 'Scratch to Luau, Python and C#.' },
      { h3: 'Any US state', p: 'Live online, nothing to drive to.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Finished projects from our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents on Google, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'Scratch, Roblox Studio and the other tools here cost nothing to start with. Our teaching is billed monthly in US dollars, the first lesson is free, and there is no term-long commitment.',
    free: ['A free first lesson', 'Placement by what your child can do', 'No card'],
    group: ['Batches of fifteen to twenty', 'A regular teacher', 'Choose your batch', 'Billed monthly'],
    one: ['One to one', 'Times you pick', 'Built around your child&rsquo;s game ideas']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Video game coding classes: common questions',
    items: [
      { q: 'What age can kids start video game coding classes?', a: 'From about 6. ScratchJr is made for children aged 5 to 7, we place children in Scratch from about 7, and the Roblox education team suggests Studio from around age 10.' },
      { q: 'What do kids learn in a video game coding class?', a: 'Real programming: variables for scores, conditions for lives, loops for enemies, events for buttons, and testing to make a game fair. A good class has the child write the code and finish games.' },
      { q: 'Which is better for kids, Scratch or Roblox?', a: 'It depends on age. Scratch uses blocks with no tricky syntax, which suits younger children. Roblox Studio uses the Luau language and needs a Windows or Mac computer, and Roblox recommends it from about 10.' },
      { q: 'Are online video game coding classes as good as in person?', a: 'They can be, if the class is live and the child writes the code. A live teacher can see the screen and the bug, and online classes reach every US state at the same quality.' },
      { q: 'Can my child take game coding classes on a Chromebook?', a: 'Yes for Scratch and MakeCode Arcade, which run in a web browser. Building Roblox games is different: Roblox Studio is not available for Chromebooks, so it needs a Windows PC or a Mac.' },
      { q: 'How long is your video game coding course for kids?', a: 'Game Development for Kids runs 6 to 8 months, 26 to 32 weeks, for ages 8 to 12: Scratch game logic, bigger 2D games, then Roblox Studio and Minecraft, ending with a capstone game.' },
      { q: 'Do you have game coding classes for teens?', a: 'Yes. Game Development for Teens, for ages 13 to 18, builds in Unity with C# over 10 to 12 months. Teens can also take Roblox scripting or Minecraft modding inside our Java course.' },
      { q: 'Are there video game coding classes near me?', a: 'Our classes are live online, so they reach families in every state without a commute, with a regular teacher and a fixed batch or private lessons.' },
      { q: 'What times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do the game coding classes cost?', a: 'Trying a lesson costs nothing. Ongoing classes are charged monthly; scroll up to Fees for the current price in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for parents of a young game maker in the US.',
    items: [
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Luau lessons inside Roblox Studio.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Block coding in a world kids know.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The gentlest start for young coders.' },
      { href: '/summer-coding-camp', label: 'Summer coding camp', p: 'Holiday options for game makers.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids', p: 'All tracks, not only games.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our main page for US families.' },
      { href: '/how-to-make-a-3d-game-for-kids', label: 'How to make a 3D game for kids', p: 'How kids make a 3D game: tools by device, x, y and z, and real code.' },
      { href: '/godot-for-kids-and-teens', label: 'Godot for kids and teens', p: 'Godot for kids and teens: cost, devices, two GDScript scripts and the errors beginners hit.' },
      { href: '/unity-for-teens', label: 'Unity for teens', p: 'Unity for teens: age rules, free plans, computer needs and two first C# scripts.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Mention how old your child is, which games they play most, and whether home has a Chromebook, a Windows PC or a Mac. That is enough for the teacher to choose a starting tool before the trial.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how a class runs</a> or browse <a class="ag-inline-link" href="/courses">all our courses</a> first.',
    note: 'We teach live over video from India, so the class reaches your living room in any state. Questions on WhatsApp usually get the fastest answer.',
    formNote: 'The trial lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Game coding', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/summer-coding-camp', label: 'Summer coding camp' }
      ] }
    ],
    bottomRight: 'Every game feature is a coding idea'
  },

  personalityCss: `
.ag-root.ag-vgk .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-vgk .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-vgk .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vgk .ag-table caption { text-align: left; }
.ag-root.ag-vgk .ag-steps { gap: 0.9rem; }
.ag-root.ag-vgk .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Makers’ own pages read raw on 17 October 2026: ScratchJr (ages 5-7); Scratch about page (free for everyone; block-based, no tricky syntax; MIT Media Lab 2007; Scratch Foundation 2019; over a billion projects; safe, moderated community); MakeCode Arcade (retro arcade games for the browser and handheld consoles; Code a Carnival for grades 5-12; shared URL visibility); Roblox Creator docs (Studio free on Windows and Mac, cannot run on Chromebooks, ages 10 and up, new games private by default); pygame on PyPI (free and open-source library for video games); Godot license (MIT). Our own course syllabi for the kids and teen game courses.',
    localProject: 'A game-feature-to-concept table (ours) and an eight-question checklist for choosing any class. Our course facts: kids course ages 8 to 12, 6 to 8 months (26 to 32 weeks) in three phases; teen course ages 13 to 18, Unity and C#, 10 to 12 months. Our arithmetic: 26 x 2 = 52 classes; one finished game a month for six months is six games. Lesson family: games as systems.',
    requiredMentions: ['ages 5-7', 'no tricky syntax required', 'MIT Media Lab in 2007', 'Scratch Foundation in 2019', 'over a billion Scratch projects', 'retro arcade games for the browser and handheld consoles', 'Anyone can see your project if they have its shared URL', 'typically recommends it for ages 10 and up', 'permissive MIT license', '26 x 2 = 52 classes', 'six playable builds'],
    sources: [
      { claim: 'ScratchJr lets young children aged 5 to 7 program stories and games.', url: 'https://www.scratchjr.org/about/info' },
      { claim: 'Scratch is free; block-based; MIT Media Lab 2007; Scratch Foundation 2019; over a billion projects; moderated community.', url: 'https://scratch.mit.edu/about' },
      { claim: 'MakeCode Arcade builds retro arcade games for the browser and handhelds.', url: 'https://arcade.makecode.com/about' },
      { claim: 'Shared MakeCode projects are visible to anyone with the URL.', url: 'https://arcade.makecode.com/faq' },
      { claim: 'Roblox Studio free on Windows and Mac; not on Chromebooks; ages 10 and up.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' },
      { claim: 'New Roblox games private by default.', url: 'https://create.roblox.com/docs/production/publishing/publish-games-and-places' },
      { claim: 'pygame is a free, open-source library for video games in Python.', url: 'https://pypi.org/project/pygame/' },
      { claim: 'Godot is free and open source under the MIT license.', url: 'https://godotengine.org/license/' }
    ],
    rejectedClaims: [
      'A Scratch age range from the Scratch FAQ: the FAQ now renders client-side and its script returned HTTP 403, so no Scratch age figure is printed; our placement column is labelled as ours.',
      'Scratch user totals beyond the project count: the about page’s donation banner figure is not used.',
      'Unity prices or plan terms: not fetched, so not stated.',
      'Track-record claims about how many students finish or what they achieve: none made; course facts come from our published syllabi.',
      'Any affiliation with the Scratch Foundation, Microsoft, Roblox, the pygame project, the Godot project or Unity: none, and the page says so.'
    ]
  }
};
