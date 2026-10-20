---
title: "MakeCode Arcade Help: Jump, Gravity, Levels and Saving"
description: "MakeCode Arcade help for students: how to make a sprite jump, add gravity, build levels with tilemaps, fix a jump that never fires, and find a project you lost."
canonical: https://learn.modernagecoders.com/makecode-arcade-help-for-students
source: src/pages/makecode-arcade-help-for-students.html
---
> To make a MakeCode Arcade sprite jump, move it left and right only, set its ay (vertical acceleration) to a positive number for gravity, and on the A button set vy to a negative number if isHittingTile(Bottom) is true. Levels are tilemaps drawn in the editor and loaded with setTilemap. Modern Age Coders teaches game coding live, ages 8 to 18.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / MakeCode Arcade help

United States · Grades 4 to 12 · Microsoft MakeCode Arcade

# MakeCode Arcade help for students

MakeCode Arcade is the free Microsoft editor that turns up in US computer science classes: drag blocks, press play, and a little retro game runs in the browser. Then the questions start. How do I make my character jump? Why does it fall off the screen? How do I add a second level? Where did my project go? Each answer below comes from the MakeCode Arcade documentation itself, turned into steps a student can follow, with two short programs and the arithmetic behind a good jump.

At a glance: For: Grades 4 to 12; Tool: MakeCode Arcade; Views: Blocks, JavaScript, Python; Runs in: A web browser; Covers: Jump, gravity, levels, saving; Lessons: Batch or one to one; Days: Any weekday or weekend; Trial: Free, no card. Rated 4.9 across 547 Google reviews.

## Three courses for students who outgrow the school unit

Each starts from the game the student has already made, blocks or typed code.

- [Game development for kids](/courses/game-development-masterclass-for-kids): Kids 8 to 12 build platformers, scores and levels, then Roblox and Minecraft.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): Kids 6 to 12 go from blocks to games, apps and AI.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Teens 13 to 18 learn the language behind Arcade&rsquo;s JavaScript view.

## How to make a sprite jump and add gravity in MakeCode Arcade

A jump is two numbers working together: an upward speed that starts the jump and a steady pull that ends it. MakeCode Arcade gives every sprite properties for both.

**Sprite motion properties, from the MakeCode Arcade reference (read 17 October 2026)**

| Property | What it controls | Unit | Direction |
|---|---|---|---|
| vx | Horizontal speed | Pixels per second | Positive moves right |
| vy | Vertical speed | Pixels per second | Positive moves toward the bottom |
| ax | Horizontal acceleration | Pixels per second, per second | Changes vx over time |
| ay | Vertical acceleration | Pixels per second, per second | Positive speeds the sprite toward the bottom |

### The jump, worked out (our calculation)

The docs give the rule for acceleration: a sprite at speed 0 with an acceleration of 2 is moving at 2 pixels per second after one second, and 4 after two. Our jump starts at 150 pixels per second upward, and gravity of 350 takes that away each second.

So the hero reaches the top after 150 / 350 = 0.43 seconds. The height of the jump is 150 x 150 / (2 x 350) = 22,500 / 700, about 32 pixels: two tiles of 16 pixels, the tile size the documentation&rsquo;s own examples use.

### Tuning it

A floaty jump has gravity too weak for its speed. A jump that barely leaves the ground has speed too low for its gravity. Change one number at a time and press play.

A useful classroom target is a jump that clears exactly the gap or wall in your level. Work out the height first, then test it, and the numbers stop being guesses.

### Practice 1 (ours)

Keep ay at 350 and jump with vy = -200. About how high does the hero go? (Answer: 40,000 / 700, about 57 pixels.)

### Practice 2 (ours)

You want a jump of 48 pixels, three tiles, with ay = 350. Which speed works? (Try vy = -183: 183 x 183 / 700 is about 48.)

### Practice 3 (ours)

Double ay to 700 and keep vy at -150. What happens to the height? (It halves, to about 16 pixels.)

## How to make levels in MakeCode Arcade with tilemaps

In MakeCode Arcade a level is a tilemap: a grid of tiles drawn in the editor and stored in the project&rsquo;s assets. The docs say a game can have more than one tilemap, and changing the tilemap changes the level.

**Tilemap tools, from the MakeCode Arcade reference (read 17 October 2026)**

| Block or function | What the documentation says it does |
|---|---|
| set tilemap | Sets a tilemap as the current tilemap for the game scene |
| set wall at | Makes a tile a barrier, so sprites cannot pass through it, or turns it back |
| on overlap tile | Runs code when a sprite of a chosen kind overlaps a tile |
| place on random tile | Moves a sprite to a random tile of a chosen type; with only one such tile, always that one |
| camera follow sprite | Moves the scene so a sprite stays in view in a scene bigger than the screen |
| game over | Stops the game and shows the current and highest scores; win can be true or false |

### Why a level variable

Without the level variable, touching the goal on level 2 would load level 2 again forever. One number that remembers where the player is turns a loop into a sequence.

This is the same idea as a save slot in a big game: the program keeps a little state and decides what happens next from it.

### Designing a level that works

Draw the floor first and mark it as walls, then place the start and the goal, then add hazards. A level that cannot be finished is a classic bug, and it is a design bug, not a code bug.

Play your own level start to finish after every change. If you need to jump a gap, use the jump height from the section above to size it.

## Why your MakeCode Arcade game is not doing what you expected

These are classic MakeCode Arcade problems. Each cause comes from a documented rule, so the fix is not a guess.

**Symptoms and fixes (our table, each rule from the MakeCode Arcade reference)**

| What happens | The documented rule behind it | Fix |
|---|---|---|
| The jump button does nothing | is hitting tile returns false unless the sprite is moving | Make sure gravity (ay) is set so the hero keeps pressing on the floor |
| The hero flies with each press | Nothing stops a jump in mid air | Wrap the jump in the is hitting tile, bottom check |
| The hero walks off the screen | A moving sprite leaves the screen unless something stops it | Use camera follow sprite, or set stay in screen |
| The hero falls through the floor | Wall tiles are what create a barrier for sprites | Mark floor tiles as walls in the tilemap editor |
| Up and down fight gravity | move sprite sets vertical speed from the buttons | Set the vy value in move sprite to 0 in a platformer |
| An event runs again and again | A button event can be pressed, released or repeated | Choose pressed, not repeated, for a single jump |

### The rule behind a classic jump bug

The docs put it plainly: the sprite must be in motion, with a vx or vy that is not 0, before the check for a tile hit; otherwise false is returned even though the sprite is touching the wall tile.

Our reading of that rule: with no gravity, a hero standing still has a vy of 0, so the check fails and the jump never fires. Gravity keeps a little downward motion going, and the check works.

### How to find a bug yourself

Make the sprite tell you what it knows. A say block showing vy, or whether is hitting tile is true, turns an invisible number into something you can watch while you play.

Then change one thing, play again, and note what changed. That habit is what our teachers practise with students in every class, whatever the tool.

## Where MakeCode Arcade saves your projects, and how to keep them

The most painful MakeCode question is the one asked after a project disappears. The documentation explains exactly where projects live, which also explains how they get lost.

**Saving and sharing, from the MakeCode documentation (read 17 October 2026)**

| Question | What the documentation says |
|---|---|
| Where is my project? | In the browser&rsquo;s local indexed data store, named or as an Untitled project |
| What is in a project? | Four files: main.ts, main.blocks, README.md and pxt.json |
| What deletes it? | Clearing browsing data removes all saved projects and the offline files |
| What survives? | A project you shared to the public cloud is still there |
| Who can see a shared project? | Anyone who has its shared URL |
| Can I go back a version? | Yes, with GitHub: History, then View commits |
| How do I keep a copy? | The Save icon downloads a PNG that also encodes your game |

### Why school projects vanish

Because projects live inside one browser on one computer, a project made on a school laptop is not on the home computer, and a laptop that clears its browsing data at the end of the day takes the project with it.

Signing in to a different browser profile has the same effect. The project is not deleted; it is in a browser you are not using.

### A habit that prevents it

At the end of every session, download the project file with the Save icon and keep it in your school drive or email it to yourself. Opening that file later brings the whole game back.

For work you share with a teacher, use the Share button. Remember that anyone with the link can see it, so share it only with the people it is meant for.

Sources, read 17 October 2026: [Saving projects](https://arcade.makecode.com/save), the [MakeCode Arcade FAQ](https://arcade.makecode.com/faq) and [Publishing games](https://arcade.makecode.com/publishing-games). We are not connected with Microsoft.

## MakeCode Arcade at school: blocked sites, offline use and the three views

MakeCode Arcade appears in US high school courses that Microsoft lists on its own courses page, including an AP Computer Science Principles course and a full-year introduction to computer science, plus activities for grades 5 to 12.

### If the editor will not load at school

School networks sometimes block the sites MakeCode needs. The FAQ lists domains to unblock, among them https://makecode.com, https://cdn.makecode.com, https://api.github.com and https://immersivereaderprod.cognitiveservices.azure.com, alongside the editor&rsquo;s own address.

A student cannot change a school network. Show that list to the teacher or the school&rsquo;s technology staff, who can.

### Working without internet

The docs describe two routes. The web editor is cached in the browser the first time it loads, so it can keep working offline; adding a new extension needs a connection again.

There is also an offline app that installs on a Windows or Mac computer and works the same way as the web editor.

**The three ways to write an Arcade game (from the MakeCode docs; the last column is our advice)**

| View | What the docs say | Who it suits |
|---|---|---|
| Blocks | Blocks snap into each other; the on start event runs first | Beginners, and anyone planning a game |
| JavaScript | JavaScript along with the Static TypeScript language | Students ready to type, and AP CSP students |
| Python | Python along with the JavaScript language | Students who already use Python in class |

Sources, read 17 October 2026: [MakeCode Arcade courses](https://arcade.makecode.com/courses), [Using MakeCode offline](https://arcade.makecode.com/offline), [JavaScript](https://arcade.makecode.com/javascript) and [Python](https://arcade.makecode.com/python).

## Help with a MakeCode class project, without doing it for you

Some students come to us in the middle of a graded MakeCode unit. Here is how we handle that.

### What we teach

We teach the idea the assignment is testing: events, variables, velocity and acceleration, conditions, tilemaps. Students practise it on a different small game, then go back and solve their own assignment.

That way the grade reflects what the student can do, and the next unit is easier rather than harder.

### What we will not do

We do not write or finish graded assignments, and we do not provide answer keys. If a student asks for the answer, the teacher asks the question that leads to it.

If your class has rules about outside help, follow them, and tell your teacher you are learning with a tutor.

Ready for more after Arcade? Our [Scratch coding classes](/scratch-coding-classes-for-kids) suit younger students, the [guide to coding games and platforms](/blog/top-coding-games-platforms-make-learning-fun-kids) compares the options, and [Minecraft coding classes](/minecraft-coding-classes-for-kids) use a MakeCode editor too.

## Four stages of an Arcade game maker

Where a student might be after a school unit, and what comes next.

**Stages of a young MakeCode Arcade coder (ours)**

| Stage | What it looks like |
|---|---|
| 1. Follower | Finishes the built-in tutorials step by step |
| 2. Tinkerer | Changes speeds and images to see what happens |
| 3. Designer | Plans a level, sets jump numbers on purpose, adds a second level |
| 4. Typist | Switches to JavaScript or Python view and writes code directly |

### For parents

Arcade is a real foundation. Velocity, events and conditions are the same ideas used in professional game engines.
The step from stage 3 to stage 4 is where a teacher helps most, because typed code brings typing errors with it.

### For students

Switch to JavaScript view now and then, even if you write in blocks. Reading your own program as text is the fastest way to stage 4.
Finish small games. A one-level game that works teaches more than a ten-level plan.

## Nine courses after MakeCode Arcade

Every one is live, with a regular teacher, in a group batch or private lessons.

### Kids

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): More blocks, bigger games.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): MakeCode blocks in a 3D world.
- [Python for kids](/courses/python-ai-kids-masterclass): From Arcade&rsquo;s Python view to real Python.

### Teens

Ages 13 to 18

- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Browser games written by hand.
- [Python for teens](/courses/python-complete-masterclass-teens): Games, data and AI projects.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): From 2D sprites to Unity.

### Going further

Teens and adults

- [Roblox coding in Luau](/courses/roblox-game-coding-for-kids-lua-course): The jump to 3D and real players.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): The language of game engines.
- [Vibe coding for teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): Building with AI, carefully.

## Live classes that start from your own game

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** A batch after school, in your own time zone.
- **Weekends** Weekend mornings for longer building sessions.
- **1-on-1** Times you choose, around school.

- **Open your project** Arcade runs in the browser, so class starts there.
- **Blocks or text** We work in whichever view you use.
- **Same teacher** Week after week, one person.
- **Concepts, not answers** You solve your own assignments.
- **All fifty states** Online, from any US time zone.
- **Batch or private** A group of fifteen to twenty, or one to one.

## Fees

MakeCode Arcade costs nothing, and the first lesson is free too. Regular classes are paid for a month at a time, in US dollars, and you can stop after any month.

- Free first class: USD 0. A free first lesson. Bring your Arcade game. No card asked for.
- Group batch: USD 100 a month. Fifteen to twenty in a batch. A regular teacher. You choose the batch. Billed monthly.
- One to one: USD 150 a month. Private lessons. Scheduled around school. Built on your project.

## MakeCode Arcade: common questions

### How do you make a sprite jump in MakeCode Arcade?

Set a positive ay on the sprite for gravity, then in an on A button pressed event set vy to a negative number, such as -150, but only if is hitting tile, bottom is true, so the sprite jumps from the floor.

### How do you add gravity in MakeCode Arcade?

Set the sprite's ay property, its vertical acceleration in pixels per second per second. A positive value speeds the sprite toward the bottom of the screen, which works as gravity.

### Why does my jump not work in MakeCode Arcade?

The docs say is hitting tile returns false unless the sprite is moving, even when it touches a wall tile. Set gravity so the sprite keeps pressing on the floor, and make sure the floor tiles are walls.

### How do you make levels in MakeCode Arcade?

Draw each level as a tilemap in the tilemap editor, then load it with set tilemap. A game can have several tilemaps, and setting a different one changes the level, for example when the player touches a goal tile.

### Where are my MakeCode Arcade projects saved?

In your browser's local data store on that computer. Clearing browsing data removes them, so download a copy with the Save icon or share the project before you leave a school computer.

### Can I get a deleted MakeCode project back?

If the browser data was cleared, only a copy saved elsewhere can bring it back: a downloaded project file, a shared link, or a GitHub repository with its commit history.

### Can MakeCode Arcade work offline?

Yes. The web editor is cached the first time it loads, and Microsoft also offers an offline app for Windows and Mac computers. Adding a new extension needs an internet connection.

### Does MakeCode Arcade use real code?

Yes. Besides blocks, it has a JavaScript view, using JavaScript with Static TypeScript, and a Python view. Students can switch views and see the same program as text.

### Can you do my MakeCode assignment?

No. We never write graded work or give answer keys. We teach the concept behind the assignment, such as velocity or tilemaps, so the student can complete it on their own.

### When are classes for US students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### What do game coding classes cost?

The first lesson is free. After that, classes are paid monthly, and the fees part of this page states that monthly price in US dollars.

## Related pages

- [Scratch coding classes](/scratch-coding-classes-for-kids): Block coding for younger game makers.
- [Minecraft coding classes](/minecraft-coding-classes-for-kids): Another MakeCode editor, in 3D.
- [Coding games and platforms](/blog/top-coding-games-platforms-make-learning-fun-kids): How the popular tools compare.
- [Coding classes in the USA](/coding-classes-in-united-states): Our full set of pages for US families.
- [Coding for 10 year olds](/coding-for-10-year-olds): What fits at that age.
- [How we teach](/how-we-teach): A look inside a live class.
- [Roblox Studio errors fixed](/roblox-studio-errors-fixed): Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.
- [Khan Academy CS vs live classes](/khan-academy-computer-science-vs-live-classes): Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.
- [CodeHS help for students](/codehs-help-for-students): CodeHS help: resets, debugger, unit tests, autograder messages and login fixes.

## Contact

Book the free first class at [https://learn.modernagecoders.com/makecode-arcade-help-for-students](https://learn.modernagecoders.com/makecode-arcade-help-for-students#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
