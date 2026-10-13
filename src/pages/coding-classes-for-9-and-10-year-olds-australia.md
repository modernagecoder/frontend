---
title: "Coding Classes for 9 and 10 Year Olds in Australia"
description: "Coding classes for 9 and 10 year olds in Australia: Scratch games with variables and coordinates, a first step into Python, and live online lessons that fit school."
canonical: https://learn.modernagecoders.com/coding-classes-for-9-and-10-year-olds-australia
source: src/pages/coding-classes-for-9-and-10-year-olds-australia.html
---
> Coding classes for 9 and 10 year olds in Australia: Scratch games with variables and coordinates, a first step into Python, and live online lessons that fit school.

In short

Coding classes for 9 and 10 year olds take children from simple Scratch animations to complete games with scores, timers, levels and moving enemies, using variables and the stage's coordinate grid. Many children of this age are ready to start Python too. The Australian Curriculum expects the same growth: by the end of Year 6, students implement algorithms "as visual programs that include variables and respond to input".

Start here

## Three strong courses for ages 9 and 10

Choose by whether your child is new to coding, already confident in Scratch, or keen on games above all.

[![Game Development for Kids course thumbnail](/images/game-dev-kids.webp)  KNIN / 01 Game Development for Kids For game-mad 9 and 10 year olds: complete Scratch games, then Roblox and Minecraft worlds. Open the syllabus →](/courses/game-development-masterclass-for-kids)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)  KNIN / 02 Python and AI for Kids For children already happy in Scratch who are ready to type real code, from nine. Open the syllabus →](/courses/python-ai-kids-masterclass)[![Coding for Kids course thumbnail](/images/kids-coding.webp)  KNIN / 03 Coding for Kids For complete beginners of this age: a year-long path that moves quickly through Scratch. Open the syllabus →](/courses/kids-coding-blocks-masterclass)

This age

## What nine and ten year olds can build

This is the age when children start to finish projects on their own and improve them without being asked. A typical term ends with a game a sibling actually wants to play.

|   | Typical nine year old | Typical ten year old |
| --- | --- | --- |
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

A worked example

## The Scratch stage is a 480 by 360 grid

Almost every game a ten year old wants to make depends on one idea: knowing exactly where things are. In Scratch, every position on the stage is a pair of numbers.

Scratch's own source code fixes the stage at **480 steps wide** and **360 steps tall**. The centre of the stage is the point (0, 0). So x, the left-and-right number, runs from -240 at the left edge to 240 at the right, and y, the up-and-down number, runs from -180 at the bottom to 180 at the top. Blocks such as *go to x: ... y: ...* and *change x by ...* use exactly these numbers.

| Where | x | y | What children use it for |
| --- | --- | --- | --- |
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

Variables

## Variables: the idea that turns animations into games

A variable is a named box that holds a value which can change: a score, a number of lives, a timer, a level. Nine and ten year olds meet variables properly, and it changes what they can make.

| Variable | Starts at | Changes when | Game ends when |
| --- | --- | --- | --- |
| score | 0 | The player catches a star: change score by 1 | Never, it only goes up |
| lives | 3 | The player touches an enemy: change lives by -1 | lives reaches 0 |
| timer | 60 | Each second passes: change timer by -1 | timer reaches 0 |
| level | 1 | score passes 10: change level by 1 | level passes 3, the player wins |

### Why variables feel hard at first

A variable is invisible. Children cannot see the box, only its effects. That is why we show variables on screen while the game runs, so a child can watch the score change as it happens.

Once they see it, most nine year olds grasp it within a lesson, and they start inventing variables of their own: speed, power-ups, bonus points.

### Where it leads

Variables lead to decisions that depend on them ("if lives is 0, stop the game"), then to lists, which are collections of values such as a high-score table.

In Python the same idea is written as plain text, `score = 0`, so the concept transfers almost unchanged.

The Australian Curriculum

## How this lines up with Years 4 to 6 at school

Nine and ten year olds sit across the Years 3 and 4 band and the Years 5 and 6 band of the Australian Curriculum v9. The band descriptions show the step up clearly.

| Point in school | In the curriculum's words |
| --- | --- |
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

A term of games

## Projects a nine or ten year old can finish

Each project adds one idea on top of the last, so by the end of a term the child is combining them without help.

| Project | New idea | Uses the stage grid how |
| --- | --- | --- |
| Bouncing ball | Edges and direction | Turns round past x = 240 or y = 180 |
| Apple catcher | A score variable | Apples restart at y = 180, random x |
| Maze runner | Walls and lives | The start point is a fixed (x, y) |
| Space defender | Enemies as clones | Enemies spaced at fixed x positions |
| Quiz show | Asking and checking answers | Buttons placed by coordinates |

Children who love games may want our dedicated guide to [game development for kids](/game-development-for-kids-australia), which follows the path from Scratch to a real engine.

Stages

## Four stages for nine and ten year olds

With one lesson a week, most children of this age reach the third stage within a school year.

| Stage | What your child can do |
| --- | --- |
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

The catalogue

## Courses for ages 9 and 10

Grouped by what your child most wants to make.

I

### Games

The favourite at this age

KNIN / GAME / 01

#### Game Development for Kids

Complete games in Scratch, Roblox and Minecraft.

[Open the syllabus](/courses/game-development-masterclass-for-kids)

KNIN / GAME / 02

#### Roblox Game Coding

Luau in Roblox Studio, from age eight.

[Open the syllabus](/courses/roblox-game-coding-for-kids-lua-course)

KNIN / GAME / 03

#### Scratch Coding for Kids

For children new to Scratch.

[Open the syllabus](/courses/scratch-programming-complete-course)II

### Text coding

Ready to type

KNIN / TEXT / 01

#### Python and AI for Kids

First Python, turtle drawings and small AI projects.

[Open the syllabus](/courses/python-ai-kids-masterclass)

KNIN / TEXT / 02

#### Web Development for Kids

Real web pages with HTML and CSS.

[Open the syllabus](/courses/kids-ai-web-development-course)

KNIN / TEXT / 03

#### Maths Through Coding

Python and maths together, from ten.

[Open the syllabus](/courses/maths-through-coding)III

### Making and thinking

Other interests

KNIN / MAKE / 01

#### App Making for Kids

Phone apps built with blocks.

[Open the syllabus](/courses/block-coding-app-development-masterclass)

KNIN / MAKE / 02

#### Vibe Coding for Kids

Scratch and kid-safe AI tools.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)

KNIN / MAKE / 03

#### AI Literacy for Kids

How AI works and how to use it wisely, from eight.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

How lessons run

## Live lessons that suit Australian families

The teaching team works in India, behind Australia by a few hours whichever state you are in. Australian after-school and weekend slots therefore sit inside the Indian working day.

Weekday, after school

The most popular choice for this age.

Weekday, early evening

Fits around afternoon sport.

Weekend

A longer session for ambitious game builders.

### A free first class

Your child builds part of a small game and the teacher judges whether Scratch or Python suits better.

### Groups

Fifteen to twenty children of similar ability who play-test each other's games.

### One to one

For a child who wants to move faster or build one big project.

### Built by the child

Teachers explain and question. Every block and line is the child's.

### Watch any time

Lessons are live, so parents can see exactly how they run.

### School tasks stay theirs

We never complete school assessment work.

Student work

## Projects built by our students

A few of our students' finished projects. Many began with a bouncing ball at nine or ten. See more in our [student labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees for ages 9 and 10

Families in Australia pay a monthly fee in US dollars, with no charge to join and no contract.

Free first class

USD 0

no card required

- Part of a small game, built together
- Advice on Scratch or Python
- No card or bank details

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty children per group
- A regular teacher
- Classmates who play-test games
- Stop after any month

Start here

One to one

USD 150

a month, billed in US dollars

- Your child's project, your child's pace
- Flexible timing
- Ideal for an ambitious game

Enquire

What families say

## Rated 4.9 across 547 Google reviews

As written by parents and students on our Google profile, without edits.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Questions from parents

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

Elsewhere on this site

## Related pages

More for Australian families of children around nine and ten.

### [Coding classes in Australia](/coding-classes-in-australia)

Our Australian guides, gathered in one list.

### [Coding for 11 and 12 year olds](/coding-classes-for-11-and-12-year-olds-australia)

Binary, data and getting ready for high school.

### [After Scratch: Python](/after-scratch-next-step-python-australia)

The move from blocks to text.

### [Game development for kids](/game-development-for-kids-australia)

From Scratch games to real engines.

### [Coding for 10 year olds](/coding-for-10-year-olds)

Our general guide for ten year olds.

### [Python for 10 year olds](/python-for-10-year-olds)

What a first Python course looks like at ten.

Start here

## Book a free first class

Send your details and we will ring at a convenient time. In the free class your child builds part of a small game with a teacher, and you leave knowing whether Scratch or Python is the better starting point.

If you would rather read first, [how we teach](/how-we-teach) walks through a real lesson and the [full course list](/courses) shows the road ahead.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20our%20child%20is%209%20or%2010%20and%20we%20are%20in%20Australia.%20Could%20we%20book%20a%20free%20first%20coding%20class%3F) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Many Australian families reach us fastest on WhatsApp. We are based in India, so the number begins +91, and we do not run an office in Australia.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-for-9-and-10-year-olds-australia*
