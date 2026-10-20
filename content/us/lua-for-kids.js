'use strict';
// Lua for kids (ag- topic door; US cluster Phase 2, row 4). Search evidence: "lua for kids", "learn lua for kids", "lua
// coding for kids", "lua programming for kids", "roblox lua for kids", "lua course for kids", "lua tutorial for kids",
// "lua script for kids", "learn to code luau", "roblox coding luau" (keyword-research-2026-09/us/rows.tsv, autocomplete_us.tsv).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/lua-for-kids/):
//  - lua.org/about.html: "Lua is a powerful, efficient, lightweight, embeddable scripting language."; designed at
//    "PUC-Rio, the Pontifical Catholic University of Rio de Janeiro in Brazil"; "(pronounced LOO-ah) means "Moon" in
//    Portuguese"; "Please do not write it as "LUA""; used in games "(e.g., World of Warcraft and Angry Birds)"; "the leading
//    scripting language in games" (lua.org's own description); "since its creation in 1993"; Lua 5.5.1 tarball "takes 390K
//    compressed and 1.5M uncompressed"; "around 32000 lines of C"; "free open-source software, distributed under a very
//    liberal license (the well-known MIT license)".
//  - lua.org/versions.html: "Lua 5.5 was released on 22 Dec 2025"; "The current release is Lua 5.5.1, released on 03 Aug
//    2026"; 5.5 new features "declarations for global variables"; Lua 5.4 "released on 29 Jun 2020", last release 5.4.9;
//    Lua 5.1 "released on 21 Feb 2006".
//  - lua.org/manual/5.5/manual.html: "Lua is a dynamically typed language. This means that variables do not have types;
//    only values do."; "Both nil and false make a condition false"; "The type table implements associative arrays";
//    "Lua is a case-sensitive language: and is a reserved word, but And and AND are two different, valid names."; "A
//    comment starts with a double hyphen (--)"; "~= : inequality"; ipairs iterates "(1,t[1]), (2,t[2]), ..., up to the
//    first absent index."; math.random(m, n) "returns a pseudo-random integer with uniform distribution in the range
//    [m, n]"; "so that math.random should generate different sequences of results each time the program runs";
//    print, string.format, tostring.
//  - lua.org/demo.html: lists third-party sites to try Lua in a browser (OneCompiler, Tutorials Point, myCompiler).
//  - luau.org (home, why, syntax): "small, fast, and embeddable programming language based on Lua with a gradual type
//    system"; "Around 2006, Roblox started using Lua 5.1 as a scripting language for games."; "Luau uses the baseline
//    syntax of Lua 5.1"; additions: continue ("continue must be the last statement in the block"), compound
//    assignments "+= , -= , *= , /= , //= , %= , ^= , ..=", type annotations, const bindings, if-then-else expressions,
//    generalized iteration ("In Luau, you can simply iterate over a table"), backtick string interpolation, floor
//    division; "Luau only has a single number type, a 64-bit IEEE754 double"; "Try Luau online".
//  - create.roblox.com/docs/luau.md (pilot copy): "Luau is the scripting language creators use in Roblox Studio. It is a
//    fast, small, safe, gradually typed embeddable scripting language derived from Lua 5.1."; education FAQ: Studio
//    "Our team typically recommends it for ages 10 and up"; Studio cannot run on Chromebooks (pilot dossier).
// Our own material, labelled on the page: the three Lua programs and the Luau rewrite (written only with functions in the
// manual and syntax on luau.org), the practice set, the ten-class plan, and the arithmetic: two dice give 36 equally
// likely pairs, 6 of them draws, so a draw comes up 6 / 36 = 1 in 6 games on average; coins 12 + 7 + 25 + 3 = 47.
// Lesson family: tables and loops (a list, a loop over it, a running total).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const HELLO = `-- Program 1: a greeting robot (ours)
local name = "Maya"
local age = 10

print("Hello, " .. name .. "!")

if age >= 13 then
  print("The teen group is for you.")
elseif age >= 8 then
  print("Time for your first game script.")
else
  print("Scratch first, then Lua.")
end`;

const COINS = `-- Program 2: coins collected on five levels (ours)
local coins = {12, 0, 7, 25, 3}
local total = 0

for level, amount in ipairs(coins) do
  if amount ~= 0 then
    total = total + amount
  end
  print("Level " .. level .. ": " .. amount)
end

print(string.format("Total coins: %d", total))`;

const DICE = `-- Program 3: a dice duel against the computer (ours)
local function roll()
  return math.random(1, 6)
end

local you = roll()
local robot = roll()
print("You rolled " .. you .. ", the robot rolled " .. robot)

if you > robot then
  print("You win!")
elseif you < robot then
  print("The robot wins this time.")
else
  print("A draw. Roll again!")
end`;

const LUAU = `-- Program 2 again, rewritten in Luau (ours)
local coins: {number} = {12, 0, 7, 25, 3}
local total = 0

for _, amount in coins do  -- Luau loops over a table directly
  if amount == 0 then
    continue                -- skip empty levels
  end
  total += amount
end

print(\`Total: {total}\`)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'LUA FOR KIDS', blurb: 'Lua for kids explained from lua.org and luau.org: what Lua is, how Luau differs, three programs a child can run today, and a ten-class plan.' },
  slug: 'lua-for-kids',
  code: 'lk',
  accent: '#570F0D',
  accentRationale: 'Lua for kids, US: the allocated deep oxblood #570F0D (alloc.tsv row 4), darker and redder than the Roblox pilot brick, readable as link colour on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Lua for kids',
  title: 'Lua for Kids: Learn Lua and Luau with Real Code',
  description: 'Lua for kids from the source: what Lua and Roblox Luau are, how they differ, three short programs to run in a browser today, and live classes for ages 8 to 14.',
  ogDescription: 'Lua is a small, free language from Brazil and Luau is the Roblox version built on it. Three programs a child can run today, a Lua and Luau table, and a ten-class plan.',
  twitterDescription: 'Lua for kids: what it is, how Luau differs, and three programs to run today.',
  pageName: 'Lua for Kids',
  webPageDescription: 'A guide for US parents and children to learning Lua and Luau: facts from lua.org and luau.org, three beginner programs, a comparison of Lua and Luau, where children can run code, and a ten-class plan.',
  courseDescription: 'Live online Lua and Luau coding classes for children in the United States, leading into Roblox game scripting, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Lua for kids',
  navLinks: [
    { href: '#facts', label: 'What Lua is' },
    { href: '#programs', label: 'Three programs' },
    { href: '#luau', label: 'Lua vs Luau' },
    { href: '#where', label: 'Where to code' },
    { href: '#plan', label: 'Ten classes' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 8 to 14 &middot; Lua and Roblox Luau',
  h1: 'Lua for kids: a first real language',
  lede: 'A search for Lua for kids often starts with Roblox. A child wants to script a game, hears that Roblox runs on something called Luau, and a parent searches for where to begin. The good news is that Lua is one of the smallest real programming languages in use, free, and built by a university team that has looked after it for more than thirty years. This guide explains what Lua is, in the words of the people who make it, gives your child three short programs to type and run today, shows exactly how Roblox&rsquo;s Luau grew out of it, and sets out a ten-class plan.',
  secondaryCta: { href: '#programs', label: 'Try the three programs' },
  wa: 'Hello Modern Age Coders, my child in the US wants to learn Lua for Roblox. Could we book a free first lesson?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Lua first, then Luau in Roblox Studio',
  spec: [
    ['For', 'Ages 8 to 14'],
    ['Language', 'Lua, then Luau'],
    ['Leads to', 'Roblox game scripting'],
    ['Cost of Lua', 'Free, MIT license'],
    ['Runs in', 'A browser, or Roblox Studio'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Lua is a small, free programming language made at a university in Brazil, and Luau, the language of Roblox Studio, is built from Lua 5.1. Children aged about 8 to 14 can learn it live online with Modern Age Coders, in a batch or one to one, through our Roblox Game Coding course, whose second month teaches Luau from zero inside Roblox Studio.',

  picks: {
    eyebrow: 'Learn Lua with a teacher',
    h2: 'Three courses for a child who wants to code in Lua',
    lede: 'All three are live, with the same teacher each week, and each one builds on whatever your child has already made.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'LK / 01', title: 'Roblox scripting with Luau', note: 'Six months for children aged 8 to 14. Studio skills first, then Luau from zero.' },
      { course: 'game-development-masterclass-for-kids', code: 'LK / 02', title: 'Game making for kids', note: 'For 8 to 12 year olds who like variety: three game platforms, one teacher.' },
      { course: 'python-ai-kids-masterclass', code: 'LK / 03', title: 'Python for kids', note: 'Ages 9 to 12. The natural second language after Lua.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'What Lua is',
      h2: 'Lua in eight facts, from the people who make it',
      lede: 'Rather than repeat other summaries, here is what lua.org, the official site, says about the language, so a parent knows what their child is actually learning.',
      body: [
        { kind: 'table', caption: 'Lua facts from lua.org (read 17 October 2026)', head: ['Question', 'What lua.org says'], rows: [
          ['What is it?', '"a powerful, efficient, lightweight, embeddable scripting language"'],
          ['Who makes it?', 'A team at PUC-Rio, the Pontifical Catholic University of Rio de Janeiro in Brazil'],
          ['What does the name mean?', 'Moon, in Portuguese. It is pronounced LOO-ah, and lua.org asks people to write Lua, not LUA'],
          ['How old is it?', 'Versions have been released and used in real applications since its creation in 1993'],
          ['Latest version', 'Lua 5.5, released on 22 Dec 2025; the current release is Lua 5.5.1, released on 03 Aug 2026'],
          ['How big is it?', 'The Lua 5.5.1 package takes 390K compressed, and the source is around 32000 lines of C'],
          ['Where is it used?', 'lua.org names games such as World of Warcraft and Angry Birds, and calls Lua the leading scripting language in games'],
          ['What does it cost?', 'Nothing: free open-source software under the MIT license, usable for any purpose']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why small matters for a child',
          left: [
            'A language small enough to describe in one reference manual is a language a ten-year-old can hold in their head. Lua has a short list of keywords and one main way to build collections of data, the table. Children reach the point of writing their own games much sooner than in larger languages.',
            'The manual describes Lua as dynamically typed, which it explains as "variables do not have types; only values do." In practice a child can write <code>score = 10</code> without first announcing that score is a number.'
          ],
          rightH3: 'Two rules that trip up beginners',
          right: [
            'Lua is case-sensitive. The manual&rsquo;s own example is that <code>and</code> is a reserved word, but And and AND are two different, valid names. So a capital letter in the wrong place is enough to stop a program, and spelling is the first thing to check.',
            'Only two values count as false: the manual says both nil and false make a condition false, and any other value makes it true. That includes zero, which surprises children who have met other languages first.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://www.lua.org/about.html" rel="noopener" target="_blank">About Lua</a>, <a class="ag-inline-link" href="https://www.lua.org/versions.html" rel="noopener" target="_blank">Lua version history</a> and the <a class="ag-inline-link" href="https://www.lua.org/manual/5.5/manual.html" rel="noopener" target="_blank">Lua 5.5 Reference Manual</a>. We are not connected with Lua.org or PUC-Rio.' }
      ]
    },
    {
      id: 'programs', tint: 'deep', eyebrow: 'Type it, run it',
      h2: 'Three Lua programs a child can run today',
      lede: 'Three short programs we wrote for a first Lua session. We used only functions described in the Lua reference manual: print, ipairs, string.format and math.random. They run in any recent version of Lua, including the browser sites listed on lua.org.',
      body: [
        { kind: 'code', label: 'Program 1 &middot; variables and decisions', lang: 'lua', code: HELLO, note: 'With age set to 10 it prints two lines: Hello, Maya! and then Time for your first game script. Change the number and run it again to see the other branches.' },
        { kind: 'code', label: 'Program 2 &middot; a table and a loop', lang: 'lua', code: COINS, note: 'The manual says ipairs walks a table from position 1 upward, up to the first absent index. Our arithmetic for the final line: 12 + 7 + 25 + 3 = 47, so it prints Total coins: 47. The two dots join pieces of text together, and the tilde-equals sign means not equal.' },
        { kind: 'code', label: 'Program 3 &middot; a function and randomness', lang: 'lua', code: DICE, note: 'The manual says Lua seeds its random generator so that results differ each time the program runs. Our probability note: two dice make 36 equally likely pairs and 6 of them are draws, so a draw comes up about once in six games (6 / 36 = 1/6).' },
        { kind: 'table', mt: true, caption: 'A practice set to try after the three programs (ours)', head: ['Task', 'Hint', 'You know it works when'], rows: [
          ['Greet three different names', 'Copy the print line and change the name', 'Three greetings appear, each on its own line'],
          ['Add a sixth level to Program 2', 'Put another number at the end of the table', 'The total grows by exactly that number'],
          ['Count the empty levels', 'Make a second variable that adds 1 when amount is 0', 'With the table above it prints 1'],
          ['Make the dice fairer to you', 'Roll two dice for yourself and keep the higher', 'You win clearly more often over twenty games'],
          ['Play three rounds', 'Wrap the duel in a loop that runs three times', 'A final line announces who won more rounds']
        ] }
      ]
    },
    {
      id: 'luau', tint: 'tint', eyebrow: 'Lua and Roblox',
      h2: 'Lua and Luau: what stays the same, what Roblox added',
      lede: 'Roblox does not run plain Lua. It runs Luau, and Roblox&rsquo;s documentation describes Luau as a fast, small, safe, gradually typed embeddable scripting language derived from Lua 5.1. The Luau project&rsquo;s own history says that around 2006, Roblox started using Lua 5.1 as a scripting language for games, and later reshaped it.',
      body: [
        { kind: 'table', caption: 'Lua 5.5 and Luau side by side, from lua.org and luau.org (read 17 October 2026)', head: ['Feature', 'Lua 5.5', 'Luau'], rows: [
          ['Starting point', 'The current official Lua', 'Built on the Lua 5.1 syntax, with additions'],
          ['Comments, tables, if and for', 'The core of the language', 'The same, so Lua lessons carry straight over'],
          ['Adding to a variable', 'Written out: <code>total = total + amount</code>', 'Also allows compound assignment: <code>+=</code>, <code>-=</code>, <code>*=</code> and others'],
          ['Skipping a loop step', 'No continue statement in the manual', 'Has continue, which must be the last statement in the block'],
          ['Putting values into text', 'Joining with two dots, or string.format', 'Backtick strings with braces, such as Total: {total}'],
          ['Types', 'Values carry types; variables do not', 'Optional type annotations, checked by a gradual type system'],
          ['Numbers', 'Integers and floats since Lua 5.3', 'A single number type, a 64-bit IEEE754 double'],
          ['New in the latest release', 'Declarations for global variables, among other changes', 'Separate releases on luau.org']
        ] },
        { kind: 'code', mt: true, label: 'Program 2 in Luau &middot; for Roblox Studio', lang: 'luau', code: LUAU, note: 'Same coins, same answer: it prints Total: 47. Every new piece here, the type annotation, looping over a table without ipairs, continue, += and the backtick string, is documented on luau.org. It will not run in plain Lua, which is exactly the lesson.' },
        { kind: 'two', mt: true,
          leftH3: 'Learn Lua first, or go straight to Luau?',
          left: [
            'Our Roblox course works inside Roblox Studio from the first week, because that is where the excitement is, and its second month teaches Luau from zero: variables, values, then loops and functions. Those four ideas are identical in both, and a child who owns them reads any Roblox script with confidence.',
            'The extras Luau adds are conveniences. A good way to meet them is one at a time, with the long Lua way shown first, as in the two versions of Program 2 above.'
          ],
          rightH3: 'What Roblox adds on top of the language',
          right: [
            'Separate from Luau itself, Roblox gives scripts a huge library of game objects: players, parts, sounds, events. That library is Roblox-only. Lua and Luau are the grammar; the Roblox engine is the world the grammar talks about.',
            'Our <a class="ag-inline-link" href="/how-to-make-a-roblox-game">guide to making a Roblox game</a> shows three Roblox scripts that use that library, including a leaderboard and a coin that counts.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://luau.org/why" rel="noopener" target="_blank">Why Luau?</a>, <a class="ag-inline-link" href="https://luau.org/syntax" rel="noopener" target="_blank">Luau syntax by example</a>, the Roblox Creator documentation page on Luau, and lua.org. Roblox Corporation has no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'where', tint: 'deep', eyebrow: 'Where to write it',
      h2: 'Where a child can write and run Lua, including on a Chromebook',
      lede: 'This is the practical question in many American homes, where the school laptop is a Chromebook. The answer depends on whether your child is writing plain Lua, plain Luau, or a Roblox game.',
      body: [
        { kind: 'table', caption: 'Where each kind of Lua code runs (from lua.org, luau.org and the Roblox Creator docs, read 17 October 2026)', head: ['What your child is writing', 'Where it runs', 'Works on a Chromebook?'], rows: [
          ['Plain Lua, like Programs 1 to 3', 'Lua installed on a computer, or a browser site from the list on lua.org&rsquo;s demo page', 'Yes, through a browser site'],
          ['Plain Luau, like the rewrite above', 'The Try Luau online playground on luau.org', 'Yes, in the browser'],
          ['A Roblox game', 'Roblox Studio on Windows or Mac', 'No: Roblox says Studio cannot run on Chromebooks']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A note for parents on browser sites',
          left: [
            'The sites on lua.org&rsquo;s demo page are run by other companies, not by the Lua team. Check each site&rsquo;s terms and sign-up rules with your child before using one, and prefer sites that run code without an account.',
            'The Luau playground is run by the Luau project itself, which makes it the simplest place to try the Luau version of Program 2 above.'
          ],
          rightH3: 'If Roblox Studio is the goal',
          right: [
            'Roblox Studio needs a Windows or Mac computer, and Roblox&rsquo;s education team suggests Studio for children of about 10 and older. Children younger than that, or without such a computer yet, lose nothing by starting with plain Lua in a browser.',
            'When the computer arrives, the move is short: the same loops and tables, now moving parts and counting coins.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A first course',
      h2: 'Ten classes from first print to first Roblox script',
      lede: 'A path we suggest for a child starting Lua one to one, ages about 9 to 13. Younger children take it more slowly and older ones skip ahead.',
      body: [
        { kind: 'table', caption: 'A ten-class Lua and Luau plan (ours)', head: ['Class', 'What the child writes', 'The idea underneath'], rows: [
          ['1', 'Program 1, then a robot that greets the family', 'Variables and text'],
          ['2', 'Choose-your-path stories with if and elseif', 'Decisions'],
          ['3', 'Program 2 and the practice set', 'Tables and loops'],
          ['4', 'A times-table quiz that keeps score', 'Loops with a counter'],
          ['5', 'Program 3, then a rock-paper-scissors game', 'Functions and randomness'],
          ['6', 'The Luau rewrite and the four Luau extras', 'One idea, two dialects'],
          ['7', 'First Roblox Studio script: a part that changes color', 'Objects and properties'],
          ['8', 'A coin that counts points', 'Events'],
          ['9', 'A small obstacle course with checkpoints', 'Putting it together'],
          ['10', 'Explaining every line of their own game to the class', 'Reading code aloud']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 8 and 9', p: 'Shorter programs, lots of changing numbers to see what happens. Some start in Scratch, which shares the same ideas.' },
          { h3: 'Ages 10 to 12', p: 'The full ten classes, then on to the rest of our Roblox course.' },
          { h3: 'Ages 13 and 14', p: 'Faster through the core, then Luau types and modules, and a step towards Python or C#.' }
        ] }
      ]
    },
    {
      id: 'after', tint: '', eyebrow: 'After Lua',
      h2: 'What Lua prepares a child for',
      lede: 'When Lua is the first language a child types rather than drags, what comes next matters as much as the first program.',
      body: [
        { kind: 'table', caption: 'Next steps after a first Lua course (ours)', head: ['If your child enjoyed', 'Try next', 'Why it follows'], rows: [
          ['Scripting games in Roblox', 'More Luau, in our Roblox course', 'Bigger games, the same language'],
          ['Writing the programs themselves', 'Python', 'Tables become lists and dictionaries; loops and functions look familiar'],
          ['Making games outside Roblox', 'Godot or Unity, later', 'Full game engines for teenagers'],
          ['Puzzles and logic', 'Coding challenges', 'The same loops and conditions, under a clock']
        ] },
        { kind: 'p', mt: true, html: 'See also our <a class="ag-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes</a>, <a class="ag-inline-link" href="/python-for-10-year-olds">Python for 10 year olds</a> and <a class="ag-inline-link" href="/blog/minecraft-vs-roblox-which-teaches-kids-to-code">Minecraft vs Roblox for learning to code</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Signs of progress',
    h2: 'How a child&rsquo;s Lua grows',
    lede: 'Four steps we watch for, from copying to inventing.',
    table: { caption: 'Stages in learning Lua (ours)', head: ['Stage', 'You will notice'], rows: [
      ['1. Copier', 'Types programs exactly and fixes typos when they break'],
      ['2. Changer', 'Edits numbers and words to make the program do something new'],
      ['3. Combiner', 'Puts a loop inside an if, or a function inside a loop, without being told'],
      ['4. Inventor', 'Starts a blank file with a plan of their own']
    ] },
    left: { h3: 'For parents', ps: [
      'The jump from copier to changer can come quickly. Ask your child to show you what one number in their program does.',
      'Combiner is the big one. It is where a teacher earns their keep, by setting puzzles that need two ideas at once.'
    ] },
    right: { h3: 'For kids', ps: [
      'When something breaks, read the error message slowly, from start to end, before changing anything.',
      'Say what each line does out loud. If you cannot, that is the line to ask about.'
    ] }
  },

  catalogue: {
    eyebrow: 'All courses',
    h2: 'Nine courses for young coders in the US',
    lede: 'Every one is live online, with one regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'LK / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Events and loops in blocks, a gentle start.' },
        { code: 'LK / KID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Lua thinking inside Roblox Studio.' },
        { code: 'LK / KID / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds in a world they love.' }
      ] },
      { num: 'II', h3: 'Next languages', sub: 'Ages 9 and up', courses: [
        { code: 'LK / NXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Text code with a huge library behind it.' },
        { code: 'LK / NXT / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Three platforms, one steady plan.' },
        { code: 'LK / NXT / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For older siblings ready for more.' }
      ] },
      { num: 'III', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'LK / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Where Luau fans meet Unity and C#.' },
        { code: 'LK / TEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Web pages and browser games.' },
        { code: 'LK / TEN / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Speed, structure and game code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Live Lua lessons on your family&rsquo;s schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Pick a batch at an hour that suits your time zone.' },
      { time: 'Weekends', l: 'Morning classes before the rest of the day begins.' },
      { time: '1-on-1', l: 'A slot picked around your family.' }
    ],
    cells: [
      { h3: 'Same teacher weekly', p: 'Who knows your child&rsquo;s code by name.' },
      { h3: 'Typing, not dragging', p: 'Real text code from the first class.' },
      { h3: 'Errors read aloud', p: 'Children learn to understand them.' },
      { h3: 'Small wins each class', p: 'Every lesson ends with a program that runs.' },
      { h3: 'From home', p: 'Any state, any time zone.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects made by our students',
  projectsLede: 'Games and apps from children who began with a single print line. The <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Reviews parents left on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Lua and Luau are free to use, so families pay only for live teaching. Fees are monthly, shown in US dollars, with no term contract; stop after any month.',
    free: ['Free first class', 'See your child write a working program', 'No payment details'],
    group: ['Fifteen to twenty children', 'One regular teacher', 'Choose a batch time', 'Monthly'],
    one: ['One child, one teacher', 'A time that suits you', 'Paced to your child']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Lua for kids: questions parents ask',
    items: [
      { q: 'Is Lua a good language for kids?', a: 'For a child who reads and types comfortably, yes. Lua is small, free and readable, and lua.org describes it as lightweight. It is also the base of Luau, the Roblox language, so a child who wants to make Roblox games has a strong reason to learn it.' },
      { q: 'What is the difference between Lua and Luau?', a: 'Luau is the language of Roblox Studio. Roblox describes it as derived from Lua 5.1. It keeps the Lua core and adds extras such as +=, continue, backtick string interpolation and optional type annotations.' },
      { q: 'What age can a child start learning Lua?', a: 'Around 9 or 10 is a sensible start, once a child reads and types comfortably. Roblox says its education team typically recommends Roblox Studio for ages 10 and up. Younger children often begin in Scratch, which teaches the same ideas in blocks.' },
      { q: 'Is Lua free?', a: 'Yes. lua.org says Lua is free open-source software under the MIT license and may be used for any purpose at no cost. Roblox Studio, where Luau runs, is also free to install on Windows or Mac.' },
      { q: 'Can my child learn Lua on a Chromebook?', a: 'Plain Lua and plain Luau, yes, in a browser: lua.org lists sites that run Lua online and luau.org has its own playground. Roblox games are different, because Roblox says Studio cannot run on Chromebooks.' },
      { q: 'Is Lua hard to learn?', a: 'It is one of the gentler typed languages. The main surprises for children are that capital letters matter and that only nil and false count as false. The three programs on this page are each about a dozen lines.' },
      { q: 'Does my child need Roblox to learn Lua?', a: 'No. Plain Lua runs anywhere Lua is installed or in a browser. Roblox becomes useful when your child wants to turn Lua skills into games friends can play.' },
      { q: 'Which version of Lua is the latest?', a: 'lua.org says Lua 5.5 was released on 22 December 2025, and the current release is Lua 5.5.1, released on 3 August 2026. Roblox uses Luau, which follows its own releases.' },
      { q: 'What can kids make with Lua?', a: 'Text games, quizzes and dice games in plain Lua; in Roblox Studio, full games with coins, leaderboards and obstacle courses. lua.org also lists professional games that use Lua, such as World of Warcraft and Angry Birds.' },
      { q: 'When are the Lua classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Lua classes cost?', a: 'The first class is free. After it, teaching is paid monthly, and the exact US dollar figure sits in the Fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a child who wants to code games.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for American families.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Studio, three scripts, publishing.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'The live course behind this page.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'A gentle start for younger children.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'The usual language after Lua.' },
      { href: '/best-age-to-start-coding', label: 'When to start coding', p: 'Ages, readiness and first steps.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.' },
      { href: '/how-to-make-a-video-game-for-kids', label: 'How to make a video game for kids', p: 'How to make a video game as a kid: free tools, seven steps and a real game to copy.' },
      { href: '/video-game-coding-classes-for-kids', label: 'Video game coding classes for kids', p: 'Video game coding classes for kids: tools by age, what classes teach, how to choose.' }
    ]
  },

  start: {
    h2: 'Book a free Lua lesson',
    lede: 'Let us know your child&rsquo;s age, whether they already play or build in Roblox, and what computer they have. The teacher plans the first lesson around that, and your child leaves it with a program they wrote.',
    readFirst: 'Curious about the method? Read <a class="ag-inline-link" href="/how-we-teach">how a live class works</a>, or browse <a class="ag-inline-link" href="/courses">all our courses</a> and their syllabuses.',
    note: 'Classes are taught by video from India, which is how we reach every US state with the same teachers. For a quick answer, message us on WhatsApp.',
    formNote: 'No card is needed for the first lesson.'
  },

  footer: {
    cols: [
      { h4: 'Coding for kids', links: [
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'A list, a loop, a running total'
  },

  personalityCss: `
.ag-root.ag-lk .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-lk .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-lk .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-lk .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-lk .ag-code-note { font-size: 0.95rem; }
.ag-root.ag-lk .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'lua.org about, versions, license, demo and the Lua 5.5 Reference Manual; luau.org home, Why Luau and syntax; the Roblox Creator documentation page on Luau and the Roblox education FAQ; all read raw on 17 October 2026.',
    localProject: 'Three plain Lua programs (ours, using only print, ipairs, string.format and math.random from the manual), a Luau rewrite of Program 2 using only luau.org syntax, a five-task practice set, a ten-class plan, and two pieces of arithmetic: 12 + 7 + 25 + 3 = 47 and a dice draw rate of 6 / 36 = 1/6. Lesson family: tables and loops.',
    requiredMentions: ['Pontifical Catholic University of Rio de Janeiro', 'LOO-ah', '22 Dec 2025', '390K compressed', 'And and AND are two different, valid names', 'up to the first absent index', 'derived from Lua 5.1', 'around 2006, Roblox started using Lua 5.1', 'Total coins: 47', '6 / 36 = 1/6', 'must be the last statement in the block', 'a 64-bit IEEE754 double'],
    sources: [
      { claim: 'What Lua is, who makes it, the name, age, size, use in games, MIT license.', url: 'https://www.lua.org/about.html' },
      { claim: 'Lua 5.5 released 22 Dec 2025; current release 5.5.1 on 03 Aug 2026; version features.', url: 'https://www.lua.org/versions.html' },
      { claim: 'Dynamic typing, false values, case sensitivity, comments, ipairs, math.random seeding.', url: 'https://www.lua.org/manual/5.5/manual.html' },
      { claim: 'Browser sites for trying Lua.', url: 'https://www.lua.org/demo.html' },
      { claim: 'Roblox began with Lua 5.1 around 2006; Luau history.', url: 'https://luau.org/why' },
      { claim: 'Luau additions: continue, compound assignment, types, interpolation, generalized iteration, single number type.', url: 'https://luau.org/syntax' },
      { claim: 'Luau is the scripting language of Roblox Studio, derived from Lua 5.1.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Roblox Studio typically recommended for ages 10 and up.', url: 'https://create.roblox.com/docs/education/resources/frequently-asked-questions-education' }
    ],
    rejectedClaims: [
      'That plain Lua has no compound assignment: not stated as such by lua.org; the page says only that Luau allows it and shows the long form for Lua.',
      'Terms or age rules of the third-party sites on lua.org\'s demo page: not read; parents are told to check them.',
      'That we ran the programs on this page: they are written to the manual and the reader runs them.',
      'An age requirement for luau.org\'s playground: none found, so none claimed.',
      'Any affiliation with Lua.org, PUC-Rio or Roblox Corporation: none, stated on the page.'
    ]
  }
};
