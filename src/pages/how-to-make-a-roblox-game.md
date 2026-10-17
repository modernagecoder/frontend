---
title: "How to Make a Roblox Game: Studio, Luau and Publishing"
description: "How to make a Roblox game step by step: which devices run Roblox Studio, three real Luau scripts for coins, a leaderboard and an obby, and how to publish safely."
canonical: https://learn.modernagecoders.com/how-to-make-a-roblox-game
source: src/pages/how-to-make-a-roblox-game.html
---
> To make a Roblox game, install Roblox Studio (free, on a Windows or Mac computer), start from a template such as Baseplate, add parts, then write Luau scripts that react to events, for example a coin that adds a point when a player touches it. Publish with File &gt; Publish; a new game stays private to you until you release it.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / How to make a Roblox game

United States · Ages 8 to 18 · Roblox Studio and Luau

# How to make a Roblox game

Millions of American kids play Roblox, and a lot of them ask the same question sooner or later: how do people actually make these games? The honest answer is that every Roblox game is built in Roblox Studio, a free program, and brought to life with Luau, a real programming language. This guide walks through the whole route: the computer you need (and the ones that will not work), the first hour in Studio, three short scripts that turn a flat world into a game with coins, a leaderboard and an obstacle course, how Roblox&rsquo;s own AI helper fits in, and the settings that keep a first game private until you are ready.

At a glance: For: Ages 8 to 18; Tool: Roblox Studio, free; Language: Luau; Computer: Windows or Mac; Not for building: Chromebook, iPad, phone; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses that take a Roblox fan to real game code

Each one is taught live, and each one starts from what your child has already built.

- [Roblox game coding in Luau](/courses/roblox-game-coding-for-kids-lua-course): Ages 8 to 14. Studio, events, leaderboards and a published game.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Ages 8 to 12. Scratch, Roblox and Minecraft, one plan.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Ages 13 to 18. The step from Luau to Unity and C#.

## Which devices can build a Roblox game, and which only play one

This is the question families ask first, usually after a Chromebook or an iPad has refused to install anything. Roblox answers it plainly in its own documentation.

**Building versus playing, from the Roblox Creator documentation (read 17 October 2026)**

| Device | Play Roblox games? | Build in Roblox Studio? |
|---|---|---|
| Windows PC | Yes | Yes: minimum Windows 10, recommended Windows 11 |
| Mac | Yes | Yes: minimum macOS 10.14, recommended macOS 14+ |
| Chromebook | Yes | No: "Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones." |
| iPad or tablet | Yes | No: Studio is listed for Windows and Mac only |
| Phone | Yes | No |

### What the computer needs

Roblox lists 3 GB of memory as the minimum and 8 GB as the recommended amount, with a screen resolution of 1600×900 or higher. A school laptop that meets those numbers and runs Windows or macOS is usually fine.

The installer is RobloxStudio.exe on Windows and RobloxStudio.dmg on a Mac. After installing, you sign in with a Roblox account, the same kind of account used to play.

### If the only computer is a Chromebook

Your child can still play and test ideas on a Chromebook, but building needs a Windows or Mac computer, so a shared family laptop or a library computer is the usual answer.

In the meantime, the thinking behind Roblox games (events, loops, scores) can be practised in Scratch in a browser, which is how many of our younger students start.

Sources, read 17 October 2026: [Roblox Studio setup](https://create.roblox.com/docs/studio/setup) and the [Roblox education FAQ](https://create.roblox.com/docs/education/resources/frequently-asked-questions-education). Roblox says every game runs on the latest version of the Roblox engine, so keep Studio updated. We are not connected with Roblox Corporation.

## From an empty Baseplate to a game your friends can play

This is the order we teach in, and the order that keeps a first game small enough to finish. Each step names the Studio window you will use.

### Why so many small steps

Most first games that never get finished fail in the same way: a child designs a huge world, writes no code for a week, and loses heart. Eight small steps each end with something that works.

The playtest step matters most. Professional game developers test constantly, and children who learn to read the Output window early fix their own bugs instead of waiting for help.

### How long it takes

With a teacher, most children aged 9 to 12 finish steps 1 to 5 in their first two classes. The coin and leaderboard usually work by the end of the fourth.

Teenagers with some coding behind them often go faster, then spend their time on what makes a game fun: level design, difficulty and feedback.

## The three scripts that turn a world into a game

These are the first three Luau scripts our students write. We wrote them using only the parts of Roblox that its documentation describes: the Players service, Instance.new, the Touched event and GetPlayerFromCharacter. Paste them into Studio, press Play, and test them yourself.

### The idea behind all three: events

Roblox games are event-driven. Nothing in Script 2 runs until something touches the coin; the Touched event then calls the onTouched function, which we call the handler.

That one pattern, an event and a handler, is the same idea behind buttons on websites, clicks in apps and messages in chat programs. Children who understand it here have learned something they will use in every language that follows.

### Why Script 2 needs a guard flag

A player&rsquo;s character is made of several parts, so one jump onto a coin can fire Touched several times in a split second. Without the collected flag, one coin would add three or four points.

Spotting that bug, and fixing it with a single true or false value, is the moment most of our students stop copying code and start reasoning about it.

## Roblox Assistant: what the AI can do, and how we use it with kids

Studio now includes Roblox&rsquo;s own AI helper. Families searching for how to make a Roblox game with AI are usually asking about this, so here is what Roblox says it does.

**Roblox Assistant, as described in the Roblox Creator documentation (read 17 October 2026)**

| Point | From the documentation |
|---|---|
| What it is | "Assistant is an AI helper that helps you build games faster by answering questions, generating content, and performing actions directly in Studio." |
| What it can touch | Objects and scripts in your place, assets from the Creator Store, and code you select in the Script Editor |
| Planning | A Plan mode that breaks a game idea into smaller tasks before building |
| A limit | "50 procedural models within a 24-hour rolling window" |

### How we use it in class

We ask students to write a script first, then use Assistant to explain an error or suggest an improvement, and to say in their own words what changed. The AI becomes a second explanation, not a replacement for thinking.

Plan mode is genuinely useful for teaching: a child describes a game, reads the plan, and decides which tasks they will code themselves.

### What we do not do

We never let a student publish a game they cannot explain. If Assistant wrote a script, the student must be able to say what each line does before it stays in the game.

Outside Studio, we keep under-18 students away from general AI chatbots whose terms are for adults. Roblox Assistant runs inside Studio under the student&rsquo;s own Roblox account.

Sources: [Assistant for Studio](https://create.roblox.com/docs/assistant/guide) and [Build your first game with Assistant](https://create.roblox.com/docs/ai/build-with-assistant), read 17 October 2026.

## Publishing a first game without making it public by accident

Parents often worry that pressing Publish puts a child&rsquo;s game in front of the whole internet. By default it does not.

**What publishing does, from the Roblox Creator documentation (read 17 October 2026)**

| Point | What Roblox says |
|---|---|
| Who can see a new game | "By default, new games are only accessible to you as the creator, users with Edit access, and group members" |
| How to publish | File &gt; Publish, then add a name, description, icon and thumbnail |
| Size limit | "Roblox supports places up to 100 MB (104,857,600 bytes)." |
| Early testers | "You can invite up to 10 similar-aged friends to preview your game" |
| Young testers | "Any age, but under 9 needs parent approval" for the youngest preview testers |

### A checklist for parents

Publish privately first, then invite a few friends your child knows in real life to preview it. Release to everyone only when the game works and you have read its description together.

Sit with your child the first time they fill in the game details. A clear one-sentence summary is a writing exercise as much as a coding one.

### What we teach about releasing

Students learn that releasing a game is a decision, not a button. They write down what the game is, who it is for, and what they will fix next before anyone outside the family plays it.

For anything about Roblox accounts, parental controls and age settings, the place to check is Roblox&rsquo;s own help and settings pages, which change over time.

## What a child can build in twelve classes

Our plan for a first term of Roblox game coding, for children around ages 9 to 13. Teenagers move through it faster.

**A 12-class plan for a first Roblox game (ours)**

| Classes | What gets built | The coding idea |
|---|---|---|
| 1 to 2 | Install, templates, parts, the three windows | Objects and properties |
| 3 to 4 | Leaderboard and coins | Events, handlers, variables |
| 5 to 6 | An obby with checkpoints and reset bricks | Conditions: if something is true |
| 7 to 8 | Moving platforms and timers | Loops and waiting |
| 9 to 10 | A shop that spends coins | Comparing numbers, functions |
| 11 to 12 | Testing, the game page, private release | Debugging and explaining your code |

### Ages 8 to 10

Shorter scripts, more building, lots of playtesting. Many start in Scratch for a month first.

### Ages 11 to 13

The full twelve classes, with their own shop or level idea by class 10.

### Ages 14 to 18

Faster, then on to tables, module scripts and the step towards Unity and C#.

## Where Roblox coding leads

Luau is a real language, and the habits it builds carry straight into the next one.

**From Roblox to the next language**

| If your child loved | A good next step | Why |
|---|---|---|
| Writing scripts | Python | The same ideas (variables, functions, events) in the language schools use most |
| Building worlds | Unity and C# | Full 3D game engines used by professional studios |
| Making it look right | Web development | Design, layout and code that friends can open in a browser |
| Competing | Coding competitions | Puzzles that reward the reasoning a guard flag teaches |

For more on choosing, see [Minecraft vs Roblox for learning to code](/blog/minecraft-vs-roblox-which-teaches-kids-to-code), our [Roblox coding classes](/roblox-coding-classes-for-kids) and the [best age to start coding](/best-age-to-start-coding).

## Four stages from playing Roblox to making games

Where most children are, and what comes next.

**Stages of a young Roblox creator (ours)**

| Stage | What it looks like |
|---|---|
| 1. Player | Knows many games and has opinions about what makes them fun |
| 2. Builder | Places parts and uses templates in Studio, no scripts yet |
| 3. Scripter | Writes events and handlers like the three scripts above |
| 4. Designer | Plans levels, tests with friends, explains every line |

### For parents

Stage 1 is not wasted time. Children who can say why a game is fun already think like designers.
The jump from 2 to 3 is where a teacher helps most, because the first bugs are the hardest to read.

### For kids

Start small: one coin, one score, one obby. Finished small games teach more than unfinished big ones.
Read the Output window. It tells you which line broke and usually why.

## Nine courses for young game makers

All taught live online by a regular teacher, in a batch or one to one.

### Kids

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Games in blocks, before Studio.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Blocks first, then real scripts.
- [Python for kids](/courses/python-ai-kids-masterclass): Typed code, games and turtle art.

### Teens

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): Real projects, real code.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): Fast code and real games.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Browser games and websites.

### Going further

Teens and adults

- [Game development](/courses/game-development-complete-masterclass-college): Unity, C# and Unreal.
- [Vibe coding for teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): Building with AI, explained.
- [Hackathon preparation](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Ship a game in a weekend with a team.

## Live classes, at a time that suits your family

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Choose a batch at a time that works across US time zones.
- **Weekends** Weekend mornings suit many families.
- **1-on-1** Very personalised, at your convenience.

- **Regular teacher** The same teacher each week.
- **Studio on screen** Your child shares their screen and builds.
- **A plan per learner** The twelve-class plan, adjusted.
- **Their game, their ideas** We build on what they already made.
- **Live, online** At home, any state.
- **Batch or one to one** Fifteen to twenty, or one to one.

## Fees

Studio itself costs nothing to install. What families pay for is the teaching: one month at a time, displayed in your local currency, nothing to sign for a whole semester, and you can end it whenever a month finishes.

- Free first class: USD 0. A free first lesson. Bring a game you started. No card details.
- Group batch: USD 100 a month. Fifteen to twenty learners. One regular teacher. Choose your batch. Monthly.
- One to one: USD 150 a month. A teacher to yourself. Times at your convenience. Your own game.

## Making a Roblox game: common questions

### How do you make a Roblox game?

You install Roblox Studio on a Windows or Mac computer, start from a template, add parts, write Luau scripts that react to events, test with Play, and publish from the File menu. A new game stays private to you until you release it.

### Can you make a Roblox game on a Chromebook?

No. Roblox says Roblox Studio cannot run on Chromebooks or mobile devices such as smartphones. Chromebooks can play Roblox games, but building needs a Windows or Mac computer.

### Can you make a Roblox game on an iPad or phone?

Not with Roblox Studio, which Roblox lists for Windows and Mac. An iPad or phone can play and test games, but not build them in Studio.

### Is Roblox Studio free?

Yes. Roblox describes Roblox Studio as a free application available on Windows and Mac.

### What coding language does Roblox use?

Luau, a language derived from Lua. Scripts in Studio are written in Luau, and the ideas carry over well to Python and JavaScript.

### What computer do you need for Roblox Studio?

Roblox lists Windows 10 or macOS 10.14 as the minimum, with 3 GB of memory, and recommends Windows 11 or macOS 14+, 8 GB of memory and a screen of 1600×900 or higher.

### Can you make a Roblox game with AI?

Studio includes Roblox Assistant, an AI helper that can answer questions, generate content and act in Studio. We teach children to write code first and use Assistant to explain and improve it.

### Is a child's game public as soon as they publish it?

Not at first. Roblox says new games are only accessible to the creator, people with Edit access and group members until the creator releases the game to the public.

### What age can kids start making Roblox games?

Most of our students start building in Studio around 8 or 9 and writing scripts by 9 or 10. Younger children often begin in Scratch, which teaches the same event ideas.

### What times are classes for US families?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Roblox coding classes cost?

Your first lesson costs nothing. After it, families pay for one month of teaching at a time, and the fees section on this page displays the monthly figure in your local currency.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): All of our pages for US families.
- [Roblox coding classes](/roblox-coding-classes-for-kids): Our live Roblox classes.
- [Minecraft coding classes](/minecraft-coding-classes-for-kids): For kids who prefer blocks to obbies.
- [Minecraft vs Roblox](/blog/minecraft-vs-roblox-which-teaches-kids-to-code): Which teaches more coding.
- [Online coding for US kids](/online-coding-classes-for-kids-usa): Every track, ages 6 to 14.
- [How we teach](/how-we-teach): What happens in each live class.

## Contact

Book the free first class at [https://learn.modernagecoders.com/how-to-make-a-roblox-game](https://learn.modernagecoders.com/how-to-make-a-roblox-game#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
