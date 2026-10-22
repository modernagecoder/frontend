'use strict';
// Game development classes for kids in Canada (ag- door, Canada cluster Plan 2, row 72). Includes Roblox coding.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: game design as Canadian schools already frame it (Ontario's repeating and nested events, BC's visual
// programming module), Roblox's own age and safety rules for players and creators (from Roblox's pages, fetched raw),
// which game tool suits which age, and one original Roblox game mechanic in Luau with a runnable Python simulation of
// its trickiest bug.
// Sources read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/game-development-classes-for-kids-canada/):
//  - Roblox Terms of Use (en.help.roblox.com ... 115004647846-Roblox-Terms-of-Use.html; www.roblox.com/info/terms
//    redirected there): update notice "Effective Date: November 1, 2026"; a user under the legal age of majority (a
//    "MINOR") needs a parent or legal guardian to read and consent to the terms (paraphrased; the source is in capitals);
//    "Only Users who have reached the age of majority in their jurisdiction or state of residence may purchase Robux or
//    engage in other real-money transactions on the Services".
//  - Roblox parental controls (corp.roblox.com/parents redirected to about.roblox.com/parental-controls;
//    corp.roblox.com_parents_.html): "To access chat features, every user must complete an age check" (a space before
//    the full stop is page markup); "The Chat Tab is only available for users 9+."; "Voice chat with friends is OFF for all
//    users under 13."; "If your child is under 13 years old, trusted friends can only be added with your permission.";
//    controls "are available for parents of children in Roblox Kids and Roblox Select accounts"; screen time limits
//    "available for all users in Roblox Kids accounts and users ages 9-12 in Roblox Select accounts".
//  - create.roblox.com/docs/production/earning-on-roblox (redirected to /docs/monetize): "Creators who are 13 or older and
//    have earned at least 30,000 Earned Robux can turn their Earned Robux into real money using our Developer Exchange
//    (DevEx)".
//  - create.roblox.com/docs/production/publishing/publish-experiences-and-places: to release to all ages, "Verify your
//    account through facial age estimation if you are under 18 years old, or through government ID if you are 18 years
//    old or older."; "Enable 2FA on your Roblox account."; a one-time, refundable fee (no figure printed).
//  - create.roblox.com/docs/scripting/debounce (create.roblox.com_docs_scripting_debounce.html): "A debounce pattern is a
//    coding technique that prevents a function from running too many times or an input from triggering multiple
//    times."; "the Touched event fires multiple times in quick succession based on subtle physical collisions."
//  - create.roblox.com/docs/players/leaderboards: "A leaderstats folder on each player drives the Here view."
//  - create.roblox.com/docs/luau: "Luau is the scripting language creators use in Roblox Studio."; "derived from Lua
//    5.1". create.roblox.com/docs/studio/setup: "Roblox Studio , a free application available on Windows and Mac."
//  - scratchfoundation.org (scratch.mit.edu/about redirected; scratch-about.html in src-pilots/ai-classes-for-kids-in-canada):
//    "Millions of kids around the world have created over a billion Scratch projects". No Scratch age range quoted.
//  - facts-schools-contests.md: Ontario Grade 3 C3.1 "sequential, concurrent, and repeating events"; Grade 4
//    "sequential, concurrent, repeating, and nested events"; BC ADST 6 "visual programming" "for example, Kodu,
//    Scratch"; CEMC BCC Grade 5/6 dates and format.
//  - Course facts: game-development-masterclass-for-kids (ages 8 to 12, 6 to 8 months, phases Game Logic in Scratch, 2D
//    Game Mastery, 3D Worlds and the Finale); roblox-game-coding-for-kids-lua-course (ages 8 to 14, 6 months, phases
//    Studio Skills and First Luau Scripts, Events, Players and Keeping Score, Real Game Mechanics and the Published
//    Capstone); godot-game-development-course-for-kids-and-teens (ages 10 to 17).
//  - facts-geo.md section 3 for times.
// Our own material: the Maple Leaf Collector design and its two Luau scripts (written for Roblox Studio; NOT run here,
//  as no Luau runtime is available outside Studio), debounce_sim.py (plain Python simulation with made-up touch times,
//  run with python -I: 5 points without a debounce, 1 with), the game design worksheet and the age table.
// Lesson family: events and state in a game loop (why one touch must count once).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LEADERSTATS = `-- LeafScore (ours): a Script in ServerScriptService. Written for Roblox Studio; not run outside it.
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
	local stats = Instance.new("Folder")
	stats.Name = "leaderstats"          -- Roblox's docs: a leaderstats folder drives the in-game rankings
	stats.Parent = player

	local leaves = Instance.new("IntValue")
	leaves.Name = "Leaves"
	leaves.Value = 0
	leaves.Parent = stats
end)`;

const LEAF = `-- MapleLeaf (ours): a Script inside each leaf Part. Written for Roblox Studio; not run outside it.
local Players = game:GetService("Players")
local leaf = script.Parent
local collected = false                 -- the debounce: one touch, one point

leaf.Touched:Connect(function(hit)
	if collected then
		return
	end
	local player = Players:GetPlayerFromCharacter(hit.Parent)
	if player then
		collected = true
		player.leaderstats.Leaves.Value += 1
		leaf.Transparency = 1
		leaf.CanTouch = false
		task.wait(5)                    -- the leaf grows back after 5 seconds
		leaf.Transparency = 0
		leaf.CanTouch = true
		collected = false
	end
end)`;

const SIM = `# Our simulation of why a Roblox leaf needs a debounce (plain Python, not Roblox code)
touches = [0.00, 0.03, 0.05, 0.11, 0.16]   # made-up times in seconds: one foot landing makes several touches

def score(touch_times, debounce):
    points = 0
    busy_until = -1.0
    for t in touch_times:
        if debounce and t < busy_until:
            continue                        # the leaf is already collected; ignore this touch
        points += 1
        busy_until = t + 5                  # the leaf grows back after 5 seconds
    return points

print("without a debounce:", score(touches, False), "points")
print("with a debounce:   ", score(touches, True), "point")`;

const SIM_OUT = `without a debounce: 5 points
with a debounce:    1 point`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'GAMES AND ROBLOX, KIDS', blurb: 'Game design and Roblox coding for Canadian kids: Roblox\'s own age and safety rules, which tool suits which age, and an original Luau game mechanic.' },
  slug: 'game-development-classes-for-kids-canada',
  code: 'gdkc',
  accent: '#382B9E',
  accentRationale: 'Game development for kids, Canada: a muted deep indigo #382B9E, allocated for row 72 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 9.87 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Game development classes for kids in Canada',
  title: 'Game Development Classes for Kids in Canada: Scratch to Roblox',
  description: 'Game design and Roblox coding for Canadian kids aged 8 to 14: Roblox\'s own age and safety rules, which game tool fits which age, and an original Luau game mechanic.',
  ogDescription: 'Children in Canada who love games can learn to make them: Scratch first, then Roblox Studio and Luau, with Roblox\'s own rules for young players and creators set out plainly.',
  twitterDescription: 'Game design and Roblox coding for Canadian kids, with Roblox\'s own age rules and an original Luau script.',
  pageName: 'Game Development Classes for Kids in Canada',
  webPageDescription: 'A guide for Canadian parents of children aged 8 to 14 to learning game development and Roblox coding, built from Roblox\'s terms, parental controls and creator documentation, the Ontario and BC curricula, with an original Roblox game mechanic and a runnable simulation of its key bug.',
  courseDescription: 'Live online game development classes for children aged 8 to 14 across Canada, from Scratch games to Roblox Studio and Luau scripting, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Game development for kids',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#school', label: 'Games and school' },
    { href: '#roblox', label: 'Roblox rules' },
    { href: '#tools', label: 'Which tool' },
    { href: '#leaf', label: 'Luau project' },
    { href: '#design', label: 'Design sheet' }
  ],
  eyebrow: 'Canada &middot; Game development and Roblox &middot; Ages 8 to 14',
  h1: 'Game development classes for kids in Canada',
  lede: 'For many Canadian children, games are the first thing they want to make with a computer, and Roblox is often the first place they try. That is a good instinct: building a game needs every core coding idea, from repeating steps to keeping score. This page shows where game making meets the Ontario and BC curricula, sets out Roblox\'s own rules for young players and creators in Roblox\'s words, matches tools to ages, and walks through one original Roblox mechanic in Luau, including the bug almost every child writes first.',
  secondaryCta: { href: '#leaf', label: 'See the Luau project' },
  wa: 'Hello Modern Age Coders, my child in Canada loves games and wants to learn to make them. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; children design, script and debug their own games',
  spec: [
    ['Ages', '8 to 14'],
    ['Tools', 'Scratch, then Roblox Studio and Luau'],
    ['Builds', 'Games the child designs and scripts'],
    ['Roblox rules', 'Followed, with parent controls on'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Game development classes for kids in Canada teach children aged 8 to 14 to design, code and debug their own games, starting in Scratch and moving to Roblox Studio and its Luau language, within Roblox\'s own age and safety rules. Modern Age Coders teaches them live online, in a batch or one to one, in its Roblox Game Coding course.',

  picks: {
    eyebrow: 'Courses for young game makers',
    h2: 'Three game courses for Canadian children',
    lede: 'A broad game course that starts in Scratch, a Roblox course built around Luau, and a Godot course for older children who want a professional engine.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'GDKC / 01', title: 'Roblox Game Coding for Kids', note: 'Ages 8 to 14. Six months: Studio skills and first Luau scripts, then events, players and score, then real mechanics and a published capstone.' },
      { course: 'game-development-masterclass-for-kids', code: 'GDKC / 02', title: 'Game Development for Kids', note: 'Ages 8 to 12, complete beginners. Six to eight months from game logic in Scratch through 2D games to 3D worlds.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'GDKC / 03', title: 'Godot Game Development', note: 'Ages 10 to 17. Six months of GDScript in 2D and 3D, ending with a capstone game.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: 'tint', eyebrow: 'Games and the curriculum',
      h2: 'Why making games fits what Canadian schools teach',
      lede: 'No province we read has a game design course for children, but the coding lines in their documents describe exactly what a game needs. These are the lines we read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Coding ideas in provincial documents, and where they appear in a game (documents read 22 October 2026)', head: ['Document', 'What it says', 'Where it shows up in a game'], rows: [
          ['Ontario math, Grade 3, C3.1', 'Code with "sequential, concurrent, and repeating events"', 'A character that walks while music plays; an enemy that patrols in a loop'],
          ['Ontario math, Grade 4, C3.1', 'Adds "nested events"', 'A loop inside a loop: every enemy checks every coin'],
          ['British Columbia, ADST 6, computational thinking', '"visual programming", "for example, Kodu, Scratch"', 'Kodu and Scratch are both game-making tools'],
          ['CEMC Beaver Computing Challenge, Grade 5/6', 'Puzzles needing only school math, written through a school, 9 to 20 November 2026', 'The same logic puzzles that sit under game rules']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A game is a good teacher',
          left: [
            'A game gives instant feedback: the character either jumps or it does not. Children fix bugs because they want to play, not because a worksheet asks them to, and they meet ideas like events, variables and loops long before anyone names them.',
            'The risk is that the game takes over and the learning stops. Our classes keep a simple rule: before adding a feature, the child says how it will work in words.'
          ],
          rightH3: 'What children carry back to school',
          right: [
            'A child who has scripted a scoreboard has met variables; one who has made enemies patrol has met loops; one who has made a door open only with a key has met conditions. When those ideas appear in Ontario Grade 5 math as "conditional statements", they are already familiar.',
            'We are not connected with any ministry, and our classes do not replace school coding. They give children a reason to practise it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_4___strands?depth=4" rel="noopener" target="_blank">Ontario curriculum, Grade 4 math data</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/6/core" rel="noopener" target="_blank">BC ADST 6</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge</a>. Read 22 October 2026.' }
      ]
    },
    {
      id: 'roblox', tint: 'deep', eyebrow: 'Roblox\'s own rules',
      h2: 'Roblox age and safety rules for young players and creators',
      lede: 'Parents ask about Roblox more than any other platform. Here is what Roblox itself says, from its terms, its parental controls page and its creator documentation, all read on 22 October 2026. Roblox lists a terms update with an effective date of November 1, 2026, so check its pages again.',
      body: [
        { kind: 'table', caption: 'Roblox rules relevant to children, from Roblox\'s own pages (read 22 October 2026)', head: ['Topic', 'What Roblox says', 'What it means for a family'], rows: [
          ['Agreeing to the terms', 'A user under the legal age of majority needs a parent or legal guardian to read and consent to the Roblox Terms (the terms say this in capitals)', 'A parent signs off on a child\'s account'],
          ['Buying Robux', '"Only Users who have reached the age of majority in their jurisdiction or state of residence may purchase Robux or engage in other real-money transactions on the Services"', 'Purchases are a parent\'s decision'],
          ['Chat', '"To access chat features, every user must complete an age check"; "The Chat Tab is only available for users 9+."', 'Children under 9 do not get the chat tab'],
          ['Voice', '"Voice chat with friends is OFF for all users under 13."', 'No voice chat for younger children by default'],
          ['Friends', '"If your child is under 13 years old, trusted friends can only be added with your permission."', 'A parent approves trusted friends under 13'],
          ['Parental controls', 'Controls are available for parents of children in "Roblox Kids and Roblox Select accounts"; screen time limits cover Roblox Kids accounts and ages 9 to 12 in Roblox Select', 'Set up a parent account before the first class'],
          ['Earning as a creator', '"Creators who are 13 or older and have earned at least 30,000 Earned Robux can turn their Earned Robux into real money using our Developer Exchange (DevEx)"', 'Children under 13 cannot cash out, and we never make earning a goal'],
          ['Publishing to all ages', '"Verify your account through facial age estimation if you are under 18 years old, or through government ID if you are 18 years old or older"; "Enable 2FA on your Roblox account."', 'Wide publishing needs verification; a family decides whether to do it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How our Roblox classes use these rules',
          left: [
            'Children build in Roblox Studio, test their games privately, and share them with classmates through the teacher. We ask parents to set up Roblox\'s parental controls first, and we never ask a child to chat with strangers, buy Robux or verify their age as part of a class.',
            'Publishing a finished game more widely is a family decision. Where Roblox requires age verification or two-factor authentication for that step, a parent handles it.'
          ],
          rightH3: 'What we leave out on purpose',
          right: [
            'Earning money from games is not part of our teaching for children, even though Roblox offers it to creators aged 13 and over. The aim is to learn to design and code; making a game fun for a friend is reward enough at this age.',
            'Roblox Studio is described by Roblox as "a free application available on Windows and Mac", so a child needs one of those computers, not a tablet or Chromebook, for Studio work.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use" rel="noopener" target="_blank">Roblox Terms of Use</a>; <a class="ag-inline-link" href="https://about.roblox.com/parental-controls" rel="noopener" target="_blank">Roblox parental controls</a>; <a class="ag-inline-link" href="https://create.roblox.com/docs/monetize" rel="noopener" target="_blank">Roblox creator docs, earning</a>; <a class="ag-inline-link" href="https://create.roblox.com/docs/production/publishing/publish-games-and-places" rel="noopener" target="_blank">Roblox creator docs, publishing</a>; <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/setup" rel="noopener" target="_blank">Roblox Studio setup</a>. All read 22 October 2026. Modern Age Coders is not connected with Roblox.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Which tool, which age',
      h2: 'Scratch, Roblox Studio or Godot: matching the tool to the child',
      lede: 'Each tool teaches the same ideas at a different depth. The age bands are our guidance and the course details come from our syllabuses.',
      body: [
        { kind: 'table', caption: 'Game tools by age (our guidance; course facts from our syllabuses)', head: ['Tool', 'Suits', 'How the child codes', 'Our course'], rows: [
          ['Scratch', '8 to 10, and any beginner', 'Snapping blocks: events, loops, variables, broadcast messages', 'Game Development for Kids, months 1 and 2'],
          ['Roblox Studio and Luau', '9 to 14, once reading is comfortable', 'Typed Luau scripts reacting to events in a 3D world', 'Roblox Game Coding for Kids, ages 8 to 14'],
          ['Godot and GDScript', '10 to 17', 'Typed scripts in a professional open engine, 2D and 3D', 'Godot Game Development, ages 10 to 17'],
          ['Minecraft', '7 to 12', 'Blocks first, then real code inside a world children know', 'Minecraft Coding for Kids, ages 7 to 12']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why typed Luau is worth the jump',
          left: [
            'Roblox describes Luau as "the scripting language creators use in Roblox Studio", "derived from Lua 5.1". It is a real, typed programming language, so a child who learns it is learning text coding, not a toy. The same ideas, functions, events and variables, carry straight into Python later.',
            'The jump from blocks to Luau is the hardest moment in a young game maker\'s path. We make it slowly: the same small mechanic is built in Scratch first, then in Luau, side by side.'
          ],
          rightH3: 'Signs a child is ready for Roblox Studio',
          right: [
            'They can type a short line without hunting for every key, read an error message aloud, and explain what a Scratch "when this sprite is clicked" block does. If not yet, a few more weeks of Scratch games is time well spent.',
            'Scratch itself is no small thing: the Scratch Foundation says millions of children have created over a billion Scratch projects.'
          ] }
      ]
    },
    {
      id: 'leaf', tint: 'deep', eyebrow: 'An original Roblox mechanic',
      h2: 'The Maple Leaf Collector: a scoreboard, a touch and one famous bug',
      lede: 'Our own small game, designed for children of 9 to 12 in their first Roblox weeks: maple leaves float around a park, a player touches one to collect it, the scoreboard counts it, and the leaf grows back after five seconds. Two short scripts do all of it. They are written for Roblox Studio and were not run outside it, since Luau runs inside Studio; the Python simulation further down was run.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; LeafScore, in ServerScriptService (Luau, written for Roblox Studio)', lang: 'lua', code: LEADERSTATS },
        { kind: 'code', label: 'Script 2 &middot; MapleLeaf, inside each leaf Part (Luau, written for Roblox Studio)', lang: 'lua', code: LEAF, note: 'The line that matters most is <b>local collected = false</b>, and the check at the start of the function. Without them, one touch can score many points.' },
        { kind: 'p', mt: true, html: '<b>The famous bug.</b> Roblox\'s own scripting guide warns that "the Touched event fires multiple times in quick succession based on subtle physical collisions." A first version without the <b>collected</b> flag adds a point every time, so a single step on a leaf can score several points. Roblox calls the fix a debounce: "a coding technique that prevents a function from running too many times or an input from triggering multiple times."' },
        { kind: 'code', label: 'Our simulation of the bug &middot; debounce_sim.py (plain Python, run with python -I)', lang: 'python', code: SIM },
        { kind: 'code', label: 'What the simulation printed', lang: 'text', code: SIM_OUT, note: 'The five touch times are made up for the simulation. The real number of touches in Roblox varies; the point is that it is more than one.' },
        { kind: 'two', mt: true,
          leftH3: 'What the child learns from it',
          left: [
            '<b>Events:</b> code that waits for something to happen, here a touch, instead of running top to bottom. <b>State:</b> a variable, collected, that remembers what has already happened. <b>Order:</b> the flag must be set before the wait, or a second touch slips in during it.',
            'These are the same ideas Ontario\'s Grade 3 and 4 math call concurrent, repeating and nested events, met in a form a child wants to get right.'
          ],
          rightH3: 'How a class builds it',
          right: [
            'First on paper: what happens when a player touches a leaf, in four numbered steps. Then the scoreboard script alone, tested by watching the board appear. Then the leaf, deliberately without the debounce, so every child sees the score jump. Only then the fix.',
            'Each child then changes one thing on purpose, such as the regrow time or a golden leaf worth five, and explains the change to the class.'
          ] }
      ]
    },
    {
      id: 'design', tint: 'tint', eyebrow: 'Design before code',
      h2: 'A one-page game design sheet to use at home',
      lede: 'Our own worksheet. A child who can fill it in has a game they can build; a child who cannot needs more thinking, not more code.',
      body: [
        { kind: 'ol', items: [
          '<b>The goal in one sentence.</b> "Collect 20 maple leaves before the snow falls." If it takes two sentences, the game is two games.',
          '<b>What the player can do.</b> List every action: walk, jump, collect. Each one becomes an event in code.',
          '<b>What the game remembers.</b> Score, lives, time left. Each one becomes a variable.',
          '<b>How it is won and how it is lost.</b> Both must be possible, or it is not yet a game.',
          '<b>One thing that changes over time.</b> Faster leaves, more enemies, less time. This is what keeps it interesting, and it is usually a loop.',
          '<b>The first bug you expect.</b> Write it down before building. Children who predict bugs find them faster.'
        ] },
        { kind: 'p', mt: true, html: 'Step 6 surprises parents. Asking a ten year old "what will go wrong?" before they start is the single habit that most separates children who finish games from children who abandon them.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Thinking, not copying',
      h2: 'Children who script their own games',
      lede: 'Our promise to families in Canada is the one we make everywhere: children learn to think a problem through and solve it, not to copy an answer, a tutorial or an AI\'s output. Game making is full of copy-and-paste scripts online, so we are strict about it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Typed, not pasted', p: 'Every script in a child\'s game is typed by the child and explained line by line. Free models and scripts from the internet are studied, never dropped in unread.' },
          { h3: 'Bugs on purpose', p: 'Like the missing debounce, the common bugs are shown deliberately, so children recognise them in their own games.' },
          { h3: 'No AI shortcuts', p: 'Children under 13 do not use adult AI chatbots in our classes; OpenAI says ChatGPT is not meant for them, and Claude is 18 and over.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Across the country',
      h2: 'Game classes at times that suit Canadian children',
      lede: 'Weekend mornings and the hour straight after school tend to suit young game makers. We book every class in the family\'s own zone and recheck it when Eastern and Atlantic clocks change.',
      body: [
        { kind: 'table', caption: 'Clock offsets for families, 2026 to 2027 (IANA tz database 2026e)', head: ['Region', 'Through the winter', 'Spring and summer 2027'], rows: [
          ['West coast and Yukon', 'UTC-7', 'UTC-7, no change'],
          ['Prairies west of Manitoba', 'UTC-6', 'UTC-6, no change'],
          ['Manitoba', 'UTC-5', 'UTC-5, no change'],
          ['Ontario and Quebec', 'UTC-5', 'UTC-4 from 14 March'],
          ['The Maritimes', 'UTC-4', 'UTC-3 from 14 March'],
          ['Newfoundland', 'UTC-3:30', 'UTC-2:30 from 14 March']
        ] },
        { kind: 'p', mt: true, html: 'Roblox Studio needs a Windows or Mac computer, so we check the family\'s set-up in the first class. Scratch runs in a web browser, which suits a shared family laptop.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four levels',
    h2: 'How far along is your young game maker?',
    lede: 'Our levels for placing a child fairly in the first class.',
    table: { caption: 'Four game-making levels (ours)', head: ['Level', 'What the child can do'], rows: [
      ['1. Moves', 'Makes a character move and react to a key or a click'],
      ['2. Rules', 'Adds a score, a win and a loss, each tested on purpose'],
      ['3. Scripts', 'Writes typed Luau or GDScript for an event, like the maple leaf'],
      ['4. Designs', 'Plans a whole game on paper first and builds it to the plan']
    ] },
    left: { h3: 'For parents', ps: [
      'Most children who love playing games are at level 1 when they start, whatever their age. Level 2 is the big step.',
      'Ask your child to explain their game\'s rules. If they can, they are ready for the next level.'
    ] },
    right: { h3: 'For young game makers', ps: [
      'Test every new feature straight away, before adding the next one.',
      'If the score jumps by more than one, you probably need a debounce.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Canadian children',
    lede: 'All taught live by one regular teacher, in a batch or one to one, for children in any province or territory.',
    bands: [
      { num: 'I', h3: 'Start here', sub: 'Ages 6 to 12', courses: [
        { code: 'GDKC / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch first', blurb: 'Three months of Scratch games.' },
        { code: 'GDKC / START / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft code', blurb: 'Blocks, then text, in a familiar world.' },
        { code: 'GDKC / START / 03', slug: 'kids-coding-blocks-masterclass', title: 'All-round coding', blurb: 'Games, apps and a bridge to Python.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 12', courses: [
        { code: 'GDKC / TYPE / 01', slug: 'python-ai-kids-masterclass', title: 'Python and Pygame', blurb: 'Typed games in Python, 9 to 12.' },
        { code: 'GDKC / TYPE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ puzzles and games', blurb: 'A first compiled language, 9 to 12.' },
        { code: 'GDKC / TYPE / 03', slug: 'kids-ai-web-development-course', title: 'Browser projects', blurb: 'Websites built by children, 9 to 12.' }
      ] },
      { num: 'III', h3: 'Next steps', sub: 'Ages 8 to 18', courses: [
        { code: 'GDKC / NEXT / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Unity for teens', blurb: 'C# and shipped games, 13 to 18.' },
        { code: 'GDKC / NEXT / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Puzzle thinking', blurb: 'The logic under every game rule.' },
        { code: 'GDKC / NEXT / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A project in a team, 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live game classes, one mechanic at a time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Right after school, in your own zone.' },
      { time: 'Weekends', l: 'Morning build sessions.' },
      { time: '1-on-1', l: 'For a child with a game idea of their own.' }
    ],
    cells: [
      { h3: 'Design on paper', p: 'Every feature planned in words first.' },
      { h3: 'Scratch to Luau', p: 'The same mechanic built twice, side by side.' },
      { h3: 'Roblox rules kept', p: 'Parental controls on, no chat with strangers.' },
      { h3: 'No purchases', p: 'Nothing in class needs Robux.' },
      { h3: 'Show and explain', p: 'Children present their games and their bugs.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty children, or one alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Young game makers grow into builders of projects like these. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from our parents and students, unaltered.',

  fees: {
    h2: 'Fees',
    lede: 'Eight live classes a month for one monthly fee, paid a month at a time. Nothing in our classes requires buying Robux or any in-game item.',
    free: ['A free first class', 'A first moving character', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular teacher', 'A weekly time that suits you', 'Paid monthly'],
    one: ['One child, one teacher', 'The child\'s own game idea', 'Times to suit the family']
  },

  faq: {
    eyebrow: 'Parents in Canada ask',
    h2: 'Game development and Roblox for kids: common questions',
    items: [
      { q: 'What age can a child start game development?', a: 'Our Game Development for Kids course starts at 8 with Scratch, and our Roblox Game Coding course takes children from 8 to 14. Children who are not yet comfortable reading usually start with Scratch.' },
      { q: 'Is Roblox safe for my child to learn coding on?', a: 'Roblox sets its own rules: every user must complete an age check to access chat, the Chat Tab is only for users 9 and over, voice chat with friends is off for all users under 13, and trusted friends for under-13s need a parent\'s permission. We ask parents to set up Roblox\'s parental controls before class.' },
      { q: 'Does my child need to buy Robux for your classes?', a: 'No. Nothing in our classes requires purchases. Roblox itself says only users who have reached the age of majority may buy Robux or make real-money transactions.' },
      { q: 'What language does Roblox use?', a: 'Luau. Roblox describes it as the scripting language creators use in Roblox Studio, derived from Lua 5.1. It is typed text code, so children learn real programming.' },
      { q: 'Can kids earn money from Roblox games?', a: 'Roblox says creators who are 13 or older and have earned at least 30,000 Earned Robux can use its Developer Exchange. We do not teach earning as a goal; our classes are about designing and coding.' },
      { q: 'What computer does my child need?', a: 'For Roblox Studio, a Windows or Mac computer, because Roblox describes Studio as a free application for Windows and Mac. Scratch runs in a web browser on most computers.' },
      { q: 'Should my child start with Scratch or Roblox?', a: 'Most children should start with Scratch, where blocks teach events, loops and variables without typing. Once a child types comfortably and can read an error aloud, Roblox Studio and Luau are the next step.' },
      { q: 'How does game design connect to school in Canada?', a: 'Ontario math asks for code with repeating events in Grade 3 and nested events in Grade 4, and BC\'s Grade 6 design module names visual programming tools such as Kodu and Scratch. Making games practises exactly those ideas.' },
      { q: 'When are game classes held for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every class is booked in your own province\'s time.' },
      { q: 'What will my child build?', a: 'Games they design themselves, starting with Scratch games and moving to Roblox mechanics like our Maple Leaf Collector, a scoreboard and a collectable leaf that must count each touch once.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian children who want to make games.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for every province.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Our Roblox teaching in depth.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'A step-by-step guide.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'The errors children meet first.' },
      { href: '/lua-for-kids', label: 'Lua for kids', p: 'The language family behind Luau.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where most game makers begin.' },
      { href: '/godot-for-kids-and-teens', label: 'Godot for kids and teens', p: 'A professional open engine.' },
      { href: '/how-to-make-a-video-game-for-kids', label: 'Making a video game', p: 'From idea to playable game.' },
      { href: '/video-game-coding-classes-for-kids', label: 'Video game coding classes', p: 'More about our game courses.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child makes a character move and react, in Scratch or Roblox Studio depending on age. The teacher learns how your child thinks and suggests the course that fits.',
    readFirst: 'Before booking, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> a live class and the <a class="ag-inline-link" href="/courses">complete course list</a>.',
    note: 'Every class is live online, taught by teachers based in India, so children join from any province. WhatsApp is the quickest way to reach us.',
    formNote: 'The first class is free. We do not take card details.'
  },

  footer: {
    cols: [
      { h4: 'Making games', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/lua-for-kids', label: 'Lua for kids' },
        { href: '/godot-for-kids-and-teens', label: 'Godot' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'One touch, one point'
  },

  personalityCss: `
.ag-root.ag-gdkc .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-gdkc .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-gdkc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-gdkc .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-gdkc .ag-band-head h3 { letter-spacing: -0.003em; }
.ag-root.ag-gdkc .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Terms of Use, Roblox parental controls page, Roblox creator documentation on earning, publishing, Luau and Studio setup; Scratch Foundation home page; Ontario DCP API Grade 3 and 4 math C3.1; BC ADST 6; CEMC BCC; all read 22 October 2026; our course syllabuses.',
    localProject: 'The Maple Leaf Collector: an original Roblox mechanic in two Luau scripts (a leaderstats scoreboard and a collectable leaf with a debounce that regrows after five seconds), written for Roblox Studio and labelled as not run outside it, with a runnable Python simulation of the missing-debounce bug (5 points against 1) and a six-step game design sheet. Lesson family: events and state in a game loop.',
    requiredMentions: ['Maple Leaf Collector', 'local collected = false', 'debounce_sim.py', 'without a debounce: 5 points', 'The Chat Tab is only available for users 9+.', 'Voice chat with friends is OFF for all users under 13.', '30,000 Earned Robux', 'derived from Lua 5.1', 'One touch, one point'],
    sources: [
      { claim: 'Roblox terms: parental consent for minors, Robux purchases only at the age of majority, update effective November 1, 2026.', url: 'https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use' },
      { claim: 'Roblox parental controls: age check for chat, chat tab 9+, voice off under 13, trusted friends need permission under 13, Roblox Kids and Select accounts.', url: 'https://about.roblox.com/parental-controls' },
      { claim: 'DevEx for creators 13 or older with 30,000 Earned Robux.', url: 'https://create.roblox.com/docs/monetize' },
      { claim: 'Publishing to all ages requires facial age estimation under 18 or government ID at 18+, and 2FA.', url: 'https://create.roblox.com/docs/production/publishing/publish-games-and-places' },
      { claim: 'Luau is the scripting language in Roblox Studio, derived from Lua 5.1.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Roblox Studio is free on Windows and Mac.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Touched fires multiple times; the debounce pattern.', url: 'https://create.roblox.com/docs/scripting/debounce' },
      { claim: 'Ontario Grade 3 and 4 coding expectations.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_4___strands?depth=4' },
      { claim: 'BC ADST 6 visual programming, for example Kodu and Scratch.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' }
    ],
    rejectedClaims: [
      'A minimum age for creating a Roblox account: not stated as a number on the pages read, so none is given.',
      'That the Luau scripts were run: refused; they are labelled as written for Roblox Studio and not run outside it.',
      'The fee for publishing to all ages as a figure: not printed.',
      'That children earn money from games in our classes: refused; earning is not taught.',
      'An age range for Scratch: not quoted; Scratch pages rendered only by JavaScript.',
      'Any affiliation with Roblox, the Scratch Foundation or a ministry: none.'
    ]
  }
};
