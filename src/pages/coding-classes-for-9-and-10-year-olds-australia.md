---
title: "Coding Classes for 9 and 10 Year Olds in Australia"
description: "Coding classes for 9 and 10 year olds in Australia: Scratch games with variables and coordinates, a first step into Python, and live online lessons that fit school."
canonical: https://learn.modernagecoders.com/coding-classes-for-9-and-10-year-olds-australia
source: src/pages/coding-classes-for-9-and-10-year-olds-australia.html
---
> Coding classes for 9 and 10 year olds take children from simple Scratch animations to complete games with scores, timers, levels and moving enemies, using variables and the stage's coordinate grid. Many children of this age are ready to start Python too. The Australian Curriculum expects the same growth: by the end of Year 6, students implement algorithms "as visual programs that include variables and respond to input".

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Coding for 9 and 10 year olds

Australia · Ages 9 and 10 · Live online

# Coding classes for 9 and 10 year olds

Nine and ten year olds are often the most productive young coders of all. They read fluently, type with growing confidence, follow a multi-step plan and, crucially, they can hold an abstract idea in their head: a number that stands for a score, a position described by two numbers, a rule that applies to every enemy in a game. That is when games stop being toys and start being real programs. This page explains what children of this age typically build, works through the single idea that unlocks most of their games (the Scratch stage as a coordinate grid), shows where variables come in, maps it all to Years 4 to 6 of the Australian Curriculum, and explains when to take the first step from blocks into Python.

At a glance: For: Children aged 9 and 10; School years: Usually Years 4 and 5; Main tools: Scratch, then Python; Big new ideas: Variables and coordinates; Projects: Complete games with scores; Format: Live online lessons; Group: Five to ten, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three strong courses for ages 9 and 10

Choose by whether your child is new to coding, already confident in Scratch, or keen on games above all.

- [Game Development for Kids](/courses/game-development-masterclass-for-kids): For game-mad 9 and 10 year olds: complete Scratch games, then Roblox and Minecraft worlds.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children already happy in Scratch who are ready to type real code, from nine.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): For complete beginners of this age: a year-long path that moves quickly through Scratch.

## What nine and ten year olds can build

This is the age when children start to finish projects on their own and improve them without being asked. A typical term ends with a game a sibling actually wants to play.

**Coding at nine and at ten (our teaching experience)**

|  | Typical nine year old | Typical ten year old |
|---|---|---|
| Projects | A complete Scratch game with a score and a timer | A game with levels, lives and several kinds of enemy |
| Ideas | Variables, coordinates, simple decisions | Lists, messages between sprites, first functions |
| Typing | Short words and numbers | Comfortable enough to start Python |
| Debugging | Finds and fixes most bugs with a hint | Tests deliberately to find bugs before others do |
| Next step | Larger Scratch projects | Python, web pages or Roblox Studio |

### Scratch or Python at this age?

Both. Most nine year olds still gain a lot from Scratch, because it lets them build big, ambitious games without typing errors getting in the way. Most ten year olds who are confident in Scratch are ready for Python.

The two support each other: ideas learned in Scratch, such as variables and coordinates, turn up again in Python with almost the same meaning.

### Signs your child is ready for Python

They build Scratch projects with several sprites and variables, they get annoyed when a project becomes hard to organise, and they type short words without hunting for every key.

Our page on [moving from Scratch to Python](/after-scratch-next-step-python-australia) goes through the handover step by step.

Most Australian nine and ten year olds are in Year 4 or Year 5, depending on the state and their birthday. Younger siblings may suit our guide for [7 and 8 year olds](/coding-classes-for-7-and-8-year-olds-australia), and older ones the page for [11 and 12 year olds](/coding-classes-for-11-and-12-year-olds-australia).

## The Scratch stage is a 480 by 360 grid

Almost every game a ten year old wants to make depends on one idea: knowing exactly where things are. In Scratch, every position on the stage is a pair of numbers.

Scratch's own source code fixes the stage at **480 steps wide** and **360 steps tall**. The centre of the stage is the point (0, 0). So x, the left-and-right number, runs from -240 at the left edge to 240 at the right, and y, the up-and-down number, runs from -180 at the bottom to 180 at the top. Blocks such as go to x: ... y: ... and change x by ... use exactly these numbers.

**Key points on the Scratch stage (our worked example)**

| Where | x | y | What children use it for |
|---|---|---|---|
| Centre | 0 | 0 | Starting position for the player |
| Right edge | 240 | any | Detecting when the player runs off screen |
| Top-left corner | -240 | 180 | Placing a score label out of the way |
| Bottom edge | any | -180 | The floor for falling objects |
| Bottom-right corner | 240 | -180 | Where enemies enter in many games |

### Numbers hiding in the grid

Multiply the sides and the stage holds 480 times 360, which is 172,800 square steps. From the centre to any corner is 240 across and 180 up or down.

That corner distance is exactly 300 steps, because 240, 180 and 300 are 60 times the famous 3, 4, 5 triangle. Ten year olds will not need Pythagoras for years, but they enjoy checking with a ruler on screen that the diagonal really is 300.

### What children do with it

They make a ball bounce by checking whether its x is past 240 or its y is past 180 and turning it round. They spread enemies evenly by placing them at x = -180, -60, 60 and 180.

They make a falling apple reappear at the top by setting y to 180 and choosing a random x between -240 and 240.

### Predict the position

Before running, children write down where a sprite should end up after a few moves, then check the x and y Scratch shows.

### Find the bug

When a sprite vanishes, the coordinates usually explain why: it went past an edge. Reading the numbers turns a mystery into a fix.

### Carry it to Python

Python drawing and game libraries use coordinates too, so a child who owns the Scratch grid has already learned half of their first Python game.

Source, read 7 October 2026: the Scratch Foundation's open-source [scratch-vm](https://github.com/scratchfoundation/scratch-vm) engine, file src/engine/runtime.js, where STAGE_WIDTH returns 480 and STAGE_HEIGHT returns 360. The corner distance and area are our arithmetic, checked in Python.

## Variables: the idea that turns animations into games

A variable is a named box that holds a value which can change: a score, a number of lives, a timer, a level. Nine and ten year olds meet variables properly, and it changes what they can make.

**Variables in a typical first complete game**

| Variable | Starts at | Changes when | Game ends when |
|---|---|---|---|
| score | 0 | The player catches a star: change score by 1 | Never, it only goes up |
| lives | 3 | The player touches an enemy: change lives by -1 | lives reaches 0 |
| timer | 60 | Each second passes: change timer by -1 | timer reaches 0 |
| level | 1 | score passes 10: change level by 1 | level passes 3, the player wins |

### Why variables feel hard at first

A variable is invisible. Children cannot see the box, only its effects. That is why we show variables on screen while the game runs, so a child can watch the score change as it happens.

Once they see it, most nine year olds grasp it within a lesson, and they start inventing variables of their own: speed, power-ups, bonus points.

### Where it leads

Variables lead to decisions that depend on them ("if lives is 0, stop the game"), then to lists, which are collections of values such as a high-score table.

In Python the same idea is written as plain text, score = 0, so the concept transfers almost unchanged.

## How this lines up with Years 4 to 6 at school

Nine and ten year olds sit across the Years 3 and 4 band and the Years 5 and 6 band of the Australian Curriculum v9. The band descriptions show the step up clearly.

**Digital Technologies around ages 9 and 10, Australian Curriculum v9 (quoted)**

| Point in school | In the curriculum's words |
|---|---|
| By the end of Year 4 | children design and implement "solutions as visual programs" |
| Years 3 and 4 (AC9TDI4K03) | "recognise different types of data and explore how the same data can be represented differently depending on the purpose" |
| Years 5 and 6 (AC9TDI6P03) | "design a user interface for a digital system" |
| By the end of Year 6 | students implement algorithms "as visual programs that include variables and respond to input" |

### Variables and input arrive on time

The Year 6 band description names variables and input explicitly. That is exactly what a game with a score and keyboard controls contains, so the projects on this page are not extra to the curriculum: they are it, done with more ambition.

States and territories implement the curriculum in their own ways, so the exact timing at your child's school may differ.

### Designing for someone else

For the user interface description, ACARA's example is "drawing the designed layout of the landing page of an app to order lunches from the school canteen". Designing for a real user is a big step for ten year olds.

We use the same idea: children sketch the start screen of their game before building it, and ask a classmate to try it.

Quotations from ACARA's [Foundation to Year 6 Digital Technologies content](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx), read on 7 October 2026.

## Projects a nine or ten year old can finish

Each project adds one idea on top of the last, so by the end of a term the child is combining them without help.

**A term of projects for ages 9 and 10**

| Project | New idea | Uses the stage grid how |
|---|---|---|
| Bouncing ball | Edges and direction | Turns round past x = 240 or y = 180 |
| Apple catcher | A score variable | Apples restart at y = 180, random x |
| Maze runner | Walls and lives | The start point is a fixed (x, y) |
| Space defender | Enemies as clones | Enemies spaced at fixed x positions |
| Quiz show | Asking and checking answers | Buttons placed by coordinates |

Children who love games may want our dedicated guide to [game development for kids](/game-development-for-kids-australia), which follows the path from Scratch to a real engine.

## Four stages for nine and ten year olds

With one lesson a week, most children of this age reach the third stage within a school year.

**Coding stages at ages 9 and 10**

| Stage | What your child can do |
|---|---|
| 1. Coordinates | Places and moves sprites precisely using x and y, and explains where they will end up |
| 2. Variables | Builds a game with a score, lives and a timer that all work together |
| 3. Complete games | Designs, builds and tests a game with levels that someone else enjoys playing |
| 4. First Python | Rewrites a small Scratch game as a Python program and explains the differences |

### Is this too much screen time?

Coding is making, not watching, and children of this age often spend time away from the screen sketching levels and planning rules.
One or two lessons a week, plus some optional tinkering, is plenty for steady progress.

### Fitting into the school year

Many families keep lessons going across the four school terms and pause over the summer holidays. Billing is monthly.
We agree a regular day and time in the free first class.

## Courses for ages 9 and 10

Grouped by what your child most wants to make.

### Games

The favourite at this age

- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Complete games in Scratch, Roblox and Minecraft.
- [Roblox Game Coding](/courses/roblox-game-coding-for-kids-lua-course): Luau in Roblox Studio, from age eight.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): For children new to Scratch.

### Text coding

Ready to type

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): First Python, turtle drawings and small AI projects.
- [Web Development for Kids](/courses/kids-ai-web-development-course): Real web pages with HTML and CSS.
- [Maths Through Coding](/courses/maths-through-coding): Python and maths together, from ten.

### Making and thinking

Other interests

- [App Making for Kids](/courses/block-coding-app-development-masterclass): Phone apps built with blocks.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Scratch and kid-safe AI tools.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): How AI works and how to use it wisely, from eight.

## Live lessons that suit Australian families

The teaching team works in India, behind Australia by a few hours whichever state you are in. Australian after-school and weekend slots therefore sit inside the Indian working day.

- **Weekday, after school** The most popular choice for this age.
- **Weekday, early evening** Fits around afternoon sport.
- **Weekend** A longer session for ambitious game builders.

- **A free first class** Your child builds part of a small game and the teacher judges whether Scratch or Python suits better.
- **Small groups** Five to ten children of similar ability who play-test each other's games.
- **One to one** For a child who wants to move faster or build one big project.
- **Built by the child** Teachers explain and question. Every block and line is the child's.
- **Watch any time** Lessons are live, so parents can see exactly how they run.
- **School tasks stay theirs** We never complete school assessment work.

## Fees for ages 9 and 10

Families in Australia pay a monthly fee in US dollars, with no charge to join and no contract.

- Free first class: USD 0. Part of a small game, built together. Advice on Scratch or Python. No card or bank details.
- Group batch: USD 100 a month. Five to ten children per group. A regular teacher. Classmates who play-test games. Stop after any month.
- One to one: USD 150 a month. Your child's project, your child's pace. Flexible timing. Ideal for an ambitious game.

## What parents of 9 and 10 year olds ask

### What coding should a 9 year old learn?

Most nine year olds do well building complete games in Scratch with variables and coordinates. Confident nine year olds can start Python alongside.

### Can a 10 year old learn Python?

Yes. Many ten year olds who are comfortable in Scratch and can type short words are ready for Python, especially for games and drawing projects.

### What is a variable in coding?

A variable is a named place that stores a value which can change while a program runs, such as a score, a number of lives or a timer.

### How big is the Scratch stage?

The Scratch stage is 480 steps wide and 360 steps tall, with (0, 0) in the centre. So x runs from -240 to 240 and y from -180 to 180.

### What are coordinates in Scratch?

Coordinates are the pair of numbers, x and y, that say exactly where a sprite is on the stage. Blocks such as go to x and y, and change x by, use them to move sprites precisely.

### Is my 9 year old too young for game development?

No. Nine is a great age to build complete games in Scratch. Real engines such as Unity are better left until the teenage years.

### What does the curriculum expect by Year 6?

The Australian Curriculum v9 expects students to design algorithms with branching and iteration and implement them as visual programs that include variables and respond to input.

### Should my child learn Roblox coding?

If they love Roblox, it is a motivating route into a real text language, Luau. We usually suggest some Scratch first if they have never coded.

### How much practice should they do between lessons?

None is required. Many children choose to tinker with their games between lessons, which speeds progress, but the lessons stand on their own.

### What does it cost?

There is no charge for the first lesson, and no card details are needed. Monthly fees for group and private lessons are listed under Fees, with nothing to pay on joining.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Our Australian guides, gathered in one list.
- [Coding for 11 and 12 year olds](/coding-classes-for-11-and-12-year-olds-australia): Binary, data and getting ready for high school.
- [After Scratch: Python](/after-scratch-next-step-python-australia): The move from blocks to text.
- [Game development for kids](/game-development-for-kids-australia): From Scratch games to real engines.
- [Coding for 10 year olds](/coding-for-10-year-olds): Our general guide for ten year olds.
- [Python for 10 year olds](/python-for-10-year-olds): What a first Python course looks like at ten.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-classes-for-9-and-10-year-olds-australia](https://learn.modernagecoders.com/coding-classes-for-9-and-10-year-olds-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
