---
title: "Minecraft Coding Classes in Australia | MakeCode to Python"
description: "Minecraft coding classes for Australian kids: MakeCode blocks, then JavaScript and Python, building and automating inside Minecraft. Live online, first class free."
canonical: https://learn.modernagecoders.com/minecraft-coding-classes-australia
source: src/pages/minecraft-coding-classes-australia.html
---
> Minecraft coding is writing programs that act inside a Minecraft world: placing blocks, building structures, moving a robot helper called the Agent and reacting to what the player does. Most children start with Microsoft MakeCode for Minecraft, which offers drag-and-drop blocks and lets them switch the same program to JavaScript or Python. Along the way they learn coordinates, loops, functions and conditions. Modern Age Coders teaches Minecraft coding live online to Australian children, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Minecraft coding classes

Australia · Ages 7 to 14 · Blocks to real code

# Minecraft coding classes

Minecraft already teaches children to plan, build and experiment. Coding inside Minecraft adds one powerful idea: instead of placing ten thousand blocks by hand, you can write a short program that places them for you, the same way every time. Towers rise in seconds, bridges cross ravines, and a little robot called the Agent digs tunnels while your child watches. Behind all of it sit real programming ideas: coordinates, loops, functions, conditions and, later, typed JavaScript and Python. This page is for Australian parents whose children love Minecraft and might love coding too. It explains the tool most children start with, works through one idea that trips up nearly every beginner, and shows the path from blocks to text.

At a glance: For: Children aged 7 to 14; Tool: MakeCode for Minecraft; Starts in: Blocks; Moves to: JavaScript and Python; Big ideas: Coordinates, loops, functions; Format: Live online lessons; Group: Fifteen to twenty, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses for young Minecraft coders

By age and by how far your child has come. Each card opens the full syllabus.

- [Minecraft Coding for Kids](/courses/minecraft-coding-for-kids-course): MakeCode blocks first, then real JavaScript and Python, all inside Minecraft.
- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Ages 8 to 12. Minecraft worlds alongside Scratch and Roblox projects.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. For Minecraft coders ready for Python outside the game.

## The tool most children start with

Microsoft MakeCode for Minecraft connects a coding editor to the game. A child writes a program in blocks, and something happens in their world.

**What the MakeCode for Minecraft site offers learners**

| Part | What it covers | Why it helps |
|---|---|---|
| Blocks | Drag-and-drop instructions for the player, blocks, mobs, the Agent and the builder | No spelling mistakes, so attention goes to logic |
| JavaScript and Python | The same programs as typed code, with a reference for each language | A direct bridge from blocks to text |
| Positions reference | World, relative, player and local positions explained | The maths of where things go, made explicit |
| CS Intro course | Units on events, coordinates, variables, iteration, conditionals, functions, arrays and artificial intelligence | A structured order that matches how programming is usually taught |
| Examples | Projects such as towers, bridges, mazes and mini games | Ideas to remix and extend |

### Why Minecraft works for learning

Children already know the world, the blocks and the rules, so they can focus on the code. When a program builds a tower, they instantly see whether it is right.

Minecraft also makes three dimensions natural. A child who has dug tunnels and built towers understands up, down and sideways in a way a worksheet rarely achieves.

### What to know before starting

MakeCode for Minecraft works with particular editions of Minecraft, and families should check the requirements on the MakeCode and Minecraft sites for their own computer and account.

We check your setup during the free class, and if it is not ready we can start in a browser-based tool and switch once it is.

Source, read 7 October 2026: [Microsoft MakeCode for Minecraft, Positions](https://minecraft.makecode.com/reference/positions) and the site's course and reference menus. Minecraft and MakeCode are products of Microsoft and Mojang; we are independent of both.

## Where did my platform go? Relative coordinates

This is the idea that trips up almost every beginner, and once it clicks, children understand coordinates better than many adults.

MakeCode describes every location with three numbers: x for "East (positive, +x) or West (negative, -x)", y for "up (positive, +y) or down (negative, -y)" and z for "South (positive, +z) or North (negative, -z)". There are two common ways to give those numbers. A **world position**, in MakeCode's words, is "3 numbers that are the distances in each direction from the world origin: (0, 0, 0). This is also called an absolute position." A **relative position** "has ~ before each number and is centered on the player's current position", and "the position (~0, ~0, ~0) corresponds to the player's feet".

**Our worked example: the player stands at world position (100, 64, -20) and wants a platform five blocks above**

| What the child writes | Kind of position | Where the platform appears | Result |
|---|---|---|---|
| (~0, ~5, ~0) | Relative | World (100, 69, -20) | Five blocks above the player, as intended |
| (0, 5, 0) | World | World (0, 5, 0) | About 117.8 blocks away, deep underground (our arithmetic) |
| (~2, ~0, ~0) | Relative | World (102, 64, -20) | Two blocks East of the player's feet |
| (~0, ~0, ~-3) | Relative | World (100, 64, -23) | Three blocks North of the player's feet |

### The first mistake

Writing (0, 5, 0) looks like "five blocks up". In a world position it means five blocks above the world origin, which can be far from the player.

### Working it out

From (100, 64, -20) to (0, 5, 0) is 100 blocks in x, 59 in y and 20 in z. Squaring, adding and taking the square root gives about 117.8 blocks in a straight line.

### The fix

Use a relative position when something should follow the player, and a world position when it must stay put, such as the exact spot of a finish line.

### The second, sneakier mistake

Relative positions move with the player. MakeCode warns that they "move" because they start from the player's feet. If a program builds a tower one block at a time while the child walks away, each new block lands next to the player's new position, and the tower comes out crooked.

The fix is to read the player's position once at the start, keep it in a variable, and build every block from that saved spot. That is the moment a child understands why variables exist.

### What children learn from it

That the same three numbers can mean completely different places depending on what they are measured from. Programmers call this a frame of reference, and it appears everywhere, from maps to screens to robots.

Older children meet a third kind, the player position, set by the direction the player faces. MakeCode creates it with posCamera, so "three blocks in front of me" works whichever way the player turns.

## Projects from a first tower to a mini game

Each project introduces one new programming idea, using a build children are proud to show off.

**A typical Minecraft coding progression**

| Project | What it does | What it teaches |
|---|---|---|
| Chat command tower | Typing a word in chat builds a tower above the player | Events and relative positions |
| Flower trail | Flowers appear wherever the player walks | Events that repeat and the player position |
| Agent tunnel | The Agent digs a tunnel of a chosen length | Loops and a robot that follows instructions |
| Bridge builder | A bridge spans a gap whatever its width | Variables and parameters |
| Pyramid | A stepped pyramid built layer by layer | Loops inside loops |
| Mini game | A timed challenge with a score | Conditions, timers and simple game state |

### The Agent

The Agent is a small robot that does what the code says: move, turn, place, dig and detect. Because it follows instructions literally, children quickly see the difference between what they meant and what they wrote.

Programming the Agent is a gentle introduction to robotics thinking: sensing, deciding and acting.

### Making it their own

After each guided project, children change it: a taller tower, a curved bridge, a pyramid of a different block. Changing a program is where understanding shows.

Many go on to invent their own builds, and some design small games for siblings and friends.

## From MakeCode blocks to JavaScript and Python

One of the most useful things about MakeCode is that the same program can be shown as blocks, JavaScript or Python. Children use that to cross the gap to typed code.

**Moving from blocks to text, one step at a time**

| Step | What the child does | Why it works |
|---|---|---|
| 1. Read | Builds in blocks, then looks at the JavaScript or Python view | They see their own program in text form |
| 2. Edit | Changes one number or word in the text view and runs it | Small, safe changes build confidence |
| 3. Write | Types short programs in text from the start | Blocks become a safety net, not a crutch |
| 4. Leave | Writes Python outside Minecraft | The ideas are no longer tied to one game |

Children who reach step four usually move into our [Python and AI for Kids](/courses/python-ai-kids-masterclass) course or, later, into [game programming](/game-programming-course-australia). Those who prefer worlds other people can join may enjoy [Roblox coding classes](/roblox-coding-classes-australia). For the full picture of how game making builds year by year in Australia, see [game development for kids](/game-development-for-kids-australia).

MakeCode's pos reference describes a relative position as "the distance in each direction from the player's feet". Source, read 7 October 2026: [MakeCode for Minecraft, pos](https://minecraft.makecode.com/reference/positions/pos).

## Minecraft coding and Australian classrooms

Minecraft coding lines up naturally with the Digital Technologies curriculum taught in Australian primary schools.

### What it practises

The Australian Curriculum v9 asks primary students to implement algorithms as visual programs with control structures, variables and input. MakeCode blocks do exactly that, inside a world children already understand.

Coordinates in Minecraft also reinforce maths: positive and negative numbers, three directions and the distance calculation in the worked example above.

### What we do not do

We do not complete school projects or assessed tasks. Children often bring ideas from school into their Minecraft builds, and the understanding goes back with them.

We also never ask children to join public servers or chat with strangers as part of lessons. Building and testing happen in their own world.

## Four stages of a Minecraft coder

With one or two lessons a week, most children reach the third stage within a school year.

**From builder to programmer**

| Stage | What your child can do |
|---|---|
| 1. Commander | Use events and relative positions to build near the player on command |
| 2. Automator | Use loops and variables to build structures of any size |
| 3. Engineer | Plan builds with world and relative positions, functions and the Agent |
| 4. Coder | Write the same programs in JavaScript or Python, then outside Minecraft |

### Is it just playing Minecraft?

No. The game is the canvas, but lessons are spent planning, writing and fixing programs. A typical lesson has one clear coding goal.
Children do play their own creations at the end, which is part of testing.

### What age suits Minecraft coding?

Children from about seven who read simple words can start with blocks. Typed JavaScript and Python suit children from about nine or ten.
The free first class shows us where your child should begin.

## Courses around Minecraft coding

Grouped by stage. We agree the right band in the free class.

### Blocks

Ages 6 to 9

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Block coding outside Minecraft, from zero.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Blocks, games and a first look at Python.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic and patterns behind every build.

### Worlds

Ages 7 to 12

- [Minecraft Coding for Kids](/courses/minecraft-coding-for-kids-course): MakeCode blocks to JavaScript and Python.
- [Roblox Game Coding for Kids](/courses/roblox-game-coding-for-kids-lua-course): Scripting experiences others can join.
- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft projects.

### Text

Ages 9 to 14

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Python outside the game, with small AI projects.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Building with AI help, understood step by step.
- [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web): The language behind MakeCode's text view, for web games.

## Minecraft lessons in Australian time

Our teachers are based in India. Australian after-school hours fall in the Indian afternoon, so weekday lessons are easy to arrange in every state, including during daylight saving in the east.

- **After school** Short weekday lessons for primary children.
- **Saturday** Longer sessions for bigger builds.
- **Sunday** For families with busy weekdays.

- **Free first class** Your child writes a first building program with a teacher. No card needed.
- **Groups** Fifteen to twenty children sharing builds and ideas.
- **One to one** For a child who wants to race ahead or go deeper.
- **Their own code** Children write every program; teachers ask questions instead of giving answers.
- **Own world only** No public servers and no chatting with strangers during lessons.
- **Builds kept** Programs stay with your child to reuse and improve.

## Fees for Minecraft coding classes

Families outside India pay one monthly fee in US dollars. No enrolment fee and no term contract; you can stop after any month, holidays included.

- Free first class: USD 0. A first building program written together. Advice on the right starting point. No card or bank details.
- Group batch: USD 100 a month. Fifteen to twenty children per class. Builds shared and tested together. A regular teacher. Stop after any month.
- One to one: USD 150 a month. Lessons around your child's own builds. Their pace, their projects. Times around school and sport.

## What Australian parents ask about Minecraft coding

### What is Minecraft coding?

It is writing programs that act inside a Minecraft world: placing blocks, building structures, moving the Agent robot and reacting to the player. Most children use MakeCode for Minecraft, starting with blocks and moving to JavaScript or Python.

### What are relative coordinates in Minecraft?

They are positions measured from the player's feet, written with a ~ before each number. (~0, ~5, ~0) means five blocks above the player wherever they stand, whereas (0, 5, 0) means a fixed spot near the world's origin.

### Is Minecraft coding real coding?

Yes. The blocks use the same ideas as any programming language, and MakeCode shows each program as JavaScript or Python too, so children can move to typed code without starting again.

### What age is Minecraft coding for?

Blocks suit children from about seven. Typed JavaScript or Python inside Minecraft usually suits children from about nine or ten.

### What do we need at home?

A computer that can run a supported edition of Minecraft together with MakeCode, and a steady internet connection. Requirements change, so we check your setup in the free class.

### Is it safe?

Lessons happen in your child's own world. We never ask children to join public servers or chat with strangers, and accounts stay under the family's control.

### Does Minecraft coding help at school?

It practises the visual programming the Australian Curriculum v9 sets for primary school, and reinforces positive and negative numbers and three-dimensional thinking.

### What comes after Minecraft coding?

Usually Python outside the game, then game programming, web development or AI projects, depending on what your child enjoys most.

### Can my child do Minecraft and Roblox coding?

Yes. Many children try both. Minecraft is great for building and automation; Roblox suits making experiences other people join.

### What does it cost?

The first class is free with no card required. Monthly group and one-to-one fees are listed in the fees section of this page.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Every Australian page in one place.
- [Minecraft coding classes worldwide](/minecraft-coding-classes-for-kids): The same course for families anywhere.
- [Roblox coding classes](/roblox-coding-classes-australia): Luau scripting for Australian kids.
- [Game development for kids](/game-development-for-kids-australia): Scratch to engines, by year level.
- [Coding games for kids](/coding-games-for-kids-australia): Puzzle games that teach programming.
- [Online coding classes for kids](/online-coding-classes-for-kids-australia): How live lessons work in Australia.

## Contact

Book the free first class at [https://learn.modernagecoders.com/minecraft-coding-classes-australia](https://learn.modernagecoders.com/minecraft-coding-classes-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
