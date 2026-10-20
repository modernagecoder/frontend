---
title: "Lua for Kids: Learn Lua and Luau with Real Code"
description: "Lua for kids from the source: what Lua and Roblox Luau are, how they differ, three short programs to run in a browser today, and live classes for ages 8 to 14."
canonical: https://learn.modernagecoders.com/lua-for-kids
source: src/pages/lua-for-kids.html
---
> Lua is a small, free programming language made at a university in Brazil, and Luau, the language of Roblox Studio, is built from Lua 5.1. Children aged about 8 to 14 can learn it live online with Modern Age Coders, in a batch or one to one, through our Roblox Game Coding course, whose second month teaches Luau from zero inside Roblox Studio.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Lua for kids

United States · Ages 8 to 14 · Lua and Roblox Luau

# Lua for kids: a first real language

A search for Lua for kids often starts with Roblox. A child wants to script a game, hears that Roblox runs on something called Luau, and a parent searches for where to begin. The good news is that Lua is one of the smallest real programming languages in use, free, and built by a university team that has looked after it for more than thirty years. This guide explains what Lua is, in the words of the people who make it, gives your child three short programs to type and run today, shows exactly how Roblox&rsquo;s Luau grew out of it, and sets out a ten-class plan.

At a glance: For: Ages 8 to 14; Language: Lua, then Luau; Leads to: Roblox game scripting; Cost of Lua: Free, MIT license; Runs in: A browser, or Roblox Studio; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for a child who wants to code in Lua

All three are live, with the same teacher each week, and each one builds on whatever your child has already made.

- [Roblox scripting with Luau](/courses/roblox-game-coding-for-kids-lua-course): Six months for children aged 8 to 14. Studio skills first, then Luau from zero.
- [Game making for kids](/courses/game-development-masterclass-for-kids): For 8 to 12 year olds who like variety: three game platforms, one teacher.
- [Python for kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. The natural second language after Lua.

## Lua in eight facts, from the people who make it

Rather than repeat other summaries, here is what lua.org, the official site, says about the language, so a parent knows what their child is actually learning.

**Lua facts from lua.org (read 17 October 2026)**

| Question | What lua.org says |
|---|---|
| What is it? | "a powerful, efficient, lightweight, embeddable scripting language" |
| Who makes it? | A team at PUC-Rio, the Pontifical Catholic University of Rio de Janeiro in Brazil |
| What does the name mean? | Moon, in Portuguese. It is pronounced LOO-ah, and lua.org asks people to write Lua, not LUA |
| How old is it? | Versions have been released and used in real applications since its creation in 1993 |
| Latest version | Lua 5.5, released on 22 Dec 2025; the current release is Lua 5.5.1, released on 03 Aug 2026 |
| How big is it? | The Lua 5.5.1 package takes 390K compressed, and the source is around 32000 lines of C |
| Where is it used? | lua.org names games such as World of Warcraft and Angry Birds, and calls Lua the leading scripting language in games |
| What does it cost? | Nothing: free open-source software under the MIT license, usable for any purpose |

### Why small matters for a child

A language small enough to describe in one reference manual is a language a ten-year-old can hold in their head. Lua has a short list of keywords and one main way to build collections of data, the table. Children reach the point of writing their own games much sooner than in larger languages.

The manual describes Lua as dynamically typed, which it explains as "variables do not have types; only values do." In practice a child can write score = 10 without first announcing that score is a number.

### Two rules that trip up beginners

Lua is case-sensitive. The manual&rsquo;s own example is that and is a reserved word, but And and AND are two different, valid names. So a capital letter in the wrong place is enough to stop a program, and spelling is the first thing to check.

Only two values count as false: the manual says both nil and false make a condition false, and any other value makes it true. That includes zero, which surprises children who have met other languages first.

Sources, read 17 October 2026: [About Lua](https://www.lua.org/about.html), [Lua version history](https://www.lua.org/versions.html) and the [Lua 5.5 Reference Manual](https://www.lua.org/manual/5.5/manual.html). We are not connected with Lua.org or PUC-Rio.

## Three Lua programs a child can run today

Three short programs we wrote for a first Lua session. We used only functions described in the Lua reference manual: print, ipairs, string.format and math.random. They run in any recent version of Lua, including the browser sites listed on lua.org.

**A practice set to try after the three programs (ours)**

| Task | Hint | You know it works when |
|---|---|---|
| Greet three different names | Copy the print line and change the name | Three greetings appear, each on its own line |
| Add a sixth level to Program 2 | Put another number at the end of the table | The total grows by exactly that number |
| Count the empty levels | Make a second variable that adds 1 when amount is 0 | With the table above it prints 1 |
| Make the dice fairer to you | Roll two dice for yourself and keep the higher | You win clearly more often over twenty games |
| Play three rounds | Wrap the duel in a loop that runs three times | A final line announces who won more rounds |

## Lua and Luau: what stays the same, what Roblox added

Roblox does not run plain Lua. It runs Luau, and Roblox&rsquo;s documentation describes Luau as a fast, small, safe, gradually typed embeddable scripting language derived from Lua 5.1. The Luau project&rsquo;s own history says that around 2006, Roblox started using Lua 5.1 as a scripting language for games, and later reshaped it.

**Lua 5.5 and Luau side by side, from lua.org and luau.org (read 17 October 2026)**

| Feature | Lua 5.5 | Luau |
|---|---|---|
| Starting point | The current official Lua | Built on the Lua 5.1 syntax, with additions |
| Comments, tables, if and for | The core of the language | The same, so Lua lessons carry straight over |
| Adding to a variable | Written out: total = total + amount | Also allows compound assignment: +=, -=, *= and others |
| Skipping a loop step | No continue statement in the manual | Has continue, which must be the last statement in the block |
| Putting values into text | Joining with two dots, or string.format | Backtick strings with braces, such as Total: {total} |
| Types | Values carry types; variables do not | Optional type annotations, checked by a gradual type system |
| Numbers | Integers and floats since Lua 5.3 | A single number type, a 64-bit IEEE754 double |
| New in the latest release | Declarations for global variables, among other changes | Separate releases on luau.org |

### Learn Lua first, or go straight to Luau?

Our Roblox course works inside Roblox Studio from the first week, because that is where the excitement is, and its second month teaches Luau from zero: variables, values, then loops and functions. Those four ideas are identical in both, and a child who owns them reads any Roblox script with confidence.

The extras Luau adds are conveniences. A good way to meet them is one at a time, with the long Lua way shown first, as in the two versions of Program 2 above.

### What Roblox adds on top of the language

Separate from Luau itself, Roblox gives scripts a huge library of game objects: players, parts, sounds, events. That library is Roblox-only. Lua and Luau are the grammar; the Roblox engine is the world the grammar talks about.

Our [guide to making a Roblox game](/how-to-make-a-roblox-game) shows three Roblox scripts that use that library, including a leaderboard and a coin that counts.

Sources, read 17 October 2026: [Why Luau?](https://luau.org/why), [Luau syntax by example](https://luau.org/syntax), the Roblox Creator documentation page on Luau, and lua.org. Roblox Corporation has no connection with Modern Age Coders.

## Where a child can write and run Lua, including on a Chromebook

This is the practical question in many American homes, where the school laptop is a Chromebook. The answer depends on whether your child is writing plain Lua, plain Luau, or a Roblox game.

**Where each kind of Lua code runs (from lua.org, luau.org and the Roblox Creator docs, read 17 October 2026)**

| What your child is writing | Where it runs | Works on a Chromebook? |
|---|---|---|
| Plain Lua, like Programs 1 to 3 | Lua installed on a computer, or a browser site from the list on lua.org&rsquo;s demo page | Yes, through a browser site |
| Plain Luau, like the rewrite above | The Try Luau online playground on luau.org | Yes, in the browser |
| A Roblox game | Roblox Studio on Windows or Mac | No: Roblox says Studio cannot run on Chromebooks |

### A note for parents on browser sites

The sites on lua.org&rsquo;s demo page are run by other companies, not by the Lua team. Check each site&rsquo;s terms and sign-up rules with your child before using one, and prefer sites that run code without an account.

The Luau playground is run by the Luau project itself, which makes it the simplest place to try the Luau version of Program 2 above.

### If Roblox Studio is the goal

Roblox Studio needs a Windows or Mac computer, and Roblox&rsquo;s education team suggests Studio for children of about 10 and older. Children younger than that, or without such a computer yet, lose nothing by starting with plain Lua in a browser.

When the computer arrives, the move is short: the same loops and tables, now moving parts and counting coins.

## Ten classes from first print to first Roblox script

A path we suggest for a child starting Lua one to one, ages about 9 to 13. Younger children take it more slowly and older ones skip ahead.

**A ten-class Lua and Luau plan (ours)**

| Class | What the child writes | The idea underneath |
|---|---|---|
| 1 | Program 1, then a robot that greets the family | Variables and text |
| 2 | Choose-your-path stories with if and elseif | Decisions |
| 3 | Program 2 and the practice set | Tables and loops |
| 4 | A times-table quiz that keeps score | Loops with a counter |
| 5 | Program 3, then a rock-paper-scissors game | Functions and randomness |
| 6 | The Luau rewrite and the four Luau extras | One idea, two dialects |
| 7 | First Roblox Studio script: a part that changes color | Objects and properties |
| 8 | A coin that counts points | Events |
| 9 | A small obstacle course with checkpoints | Putting it together |
| 10 | Explaining every line of their own game to the class | Reading code aloud |

### Ages 8 and 9

Shorter programs, lots of changing numbers to see what happens. Some start in Scratch, which shares the same ideas.

### Ages 10 to 12

The full ten classes, then on to the rest of our Roblox course.

### Ages 13 and 14

Faster through the core, then Luau types and modules, and a step towards Python or C#.

## What Lua prepares a child for

When Lua is the first language a child types rather than drags, what comes next matters as much as the first program.

**Next steps after a first Lua course (ours)**

| If your child enjoyed | Try next | Why it follows |
|---|---|---|
| Scripting games in Roblox | More Luau, in our Roblox course | Bigger games, the same language |
| Writing the programs themselves | Python | Tables become lists and dictionaries; loops and functions look familiar |
| Making games outside Roblox | Godot or Unity, later | Full game engines for teenagers |
| Puzzles and logic | Coding challenges | The same loops and conditions, under a clock |

See also our [Roblox coding classes](/roblox-coding-classes-for-kids), [Python for 10 year olds](/python-for-10-year-olds) and [Minecraft vs Roblox for learning to code](/blog/minecraft-vs-roblox-which-teaches-kids-to-code).

## How a child&rsquo;s Lua grows

Four steps we watch for, from copying to inventing.

**Stages in learning Lua (ours)**

| Stage | You will notice |
|---|---|
| 1. Copier | Types programs exactly and fixes typos when they break |
| 2. Changer | Edits numbers and words to make the program do something new |
| 3. Combiner | Puts a loop inside an if, or a function inside a loop, without being told |
| 4. Inventor | Starts a blank file with a plan of their own |

### For parents

The jump from copier to changer can come quickly. Ask your child to show you what one number in their program does.
Combiner is the big one. It is where a teacher earns their keep, by setting puzzles that need two ideas at once.

### For kids

When something breaks, read the error message slowly, from start to end, before changing anything.
Say what each line does out loud. If you cannot, that is the line to ask about.

## Nine courses for young coders in the US

Every one is live online, with one regular teacher, in a batch or one to one.

### Kids

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Events and loops in blocks, a gentle start.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Lua thinking inside Roblox Studio.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code that builds in a world they love.

### Next languages

Ages 9 and up

- [Python for kids](/courses/python-ai-kids-masterclass): Text code with a huge library behind it.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Three platforms, one steady plan.
- [Python for teens](/courses/python-complete-masterclass-teens): For older siblings ready for more.

### Teens

Ages 13 to 18

- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Where Luau fans meet Unity and C#.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Web pages and browser games.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): Speed, structure and game code.

## Live Lua lessons on your family&rsquo;s schedule

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Pick a batch at an hour that suits your time zone.
- **Weekends** Morning classes before the rest of the day begins.
- **1-on-1** A slot picked around your family.

- **Same teacher weekly** Who knows your child&rsquo;s code by name.
- **Typing, not dragging** Real text code from the first class.
- **Errors read aloud** Children learn to understand them.
- **Small wins each class** Every lesson ends with a program that runs.
- **From home** Any state, any time zone.
- **Group or private** Fifteen to twenty, or one to one.

## Fees

Lua and Luau are free to use, so families pay only for live teaching. Fees are monthly, shown in US dollars, with no term contract; stop after any month.

- Free first class: USD 0. Free first class. See your child write a working program. No payment details.
- Group batch: USD 100 a month. Fifteen to twenty children. One regular teacher. Choose a batch time. Monthly.
- One to one: USD 150 a month. One child, one teacher. A time that suits you. Paced to your child.

## Lua for kids: questions parents ask

### Is Lua a good language for kids?

For a child who reads and types comfortably, yes. Lua is small, free and readable, and lua.org describes it as lightweight. It is also the base of Luau, the Roblox language, so a child who wants to make Roblox games has a strong reason to learn it.

### What is the difference between Lua and Luau?

Luau is the language of Roblox Studio. Roblox describes it as derived from Lua 5.1. It keeps the Lua core and adds extras such as +=, continue, backtick string interpolation and optional type annotations.

### What age can a child start learning Lua?

Around 9 or 10 is a sensible start, once a child reads and types comfortably. Roblox says its education team typically recommends Roblox Studio for ages 10 and up. Younger children often begin in Scratch, which teaches the same ideas in blocks.

### Is Lua free?

Yes. lua.org says Lua is free open-source software under the MIT license and may be used for any purpose at no cost. Roblox Studio, where Luau runs, is also free to install on Windows or Mac.

### Can my child learn Lua on a Chromebook?

Plain Lua and plain Luau, yes, in a browser: lua.org lists sites that run Lua online and luau.org has its own playground. Roblox games are different, because Roblox says Studio cannot run on Chromebooks.

### Is Lua hard to learn?

It is one of the gentler typed languages. The main surprises for children are that capital letters matter and that only nil and false count as false. The three programs on this page are each about a dozen lines.

### Does my child need Roblox to learn Lua?

No. Plain Lua runs anywhere Lua is installed or in a browser. Roblox becomes useful when your child wants to turn Lua skills into games friends can play.

### Which version of Lua is the latest?

lua.org says Lua 5.5 was released on 22 December 2025, and the current release is Lua 5.5.1, released on 3 August 2026. Roblox uses Luau, which follows its own releases.

### What can kids make with Lua?

Text games, quizzes and dice games in plain Lua; in Roblox Studio, full games with coins, leaderboards and obstacle courses. lua.org also lists professional games that use Lua, such as World of Warcraft and Angry Birds.

### When are the Lua classes held?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Lua classes cost?

The first class is free. After it, teaching is paid monthly, and the exact US dollar figure sits in the Fees section of this page.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Our hub for American families.
- [How to make a Roblox game](/how-to-make-a-roblox-game): Studio, three scripts, publishing.
- [Roblox coding classes](/roblox-coding-classes-for-kids): The live course behind this page.
- [Scratch coding classes](/scratch-coding-classes-for-kids): A gentle start for younger children.
- [Python for 10 year olds](/python-for-10-year-olds): The usual language after Lua.
- [When to start coding](/best-age-to-start-coding): Ages, readiness and first steps.
- [Roblox Studio errors fixed](/roblox-studio-errors-fixed): Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.
- [How to make a video game for kids](/how-to-make-a-video-game-for-kids): How to make a video game as a kid: free tools, seven steps and a real game to copy.
- [Video game coding classes for kids](/video-game-coding-classes-for-kids): Video game coding classes for kids: tools by age, what classes teach, how to choose.

## Contact

Book the free first class at [https://learn.modernagecoders.com/lua-for-kids](https://learn.modernagecoders.com/lua-for-kids#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
