---
title: "Python Games for Kids: Code Your First Game, Then Pygame"
description: "Python games for kids to code: a no-install guessing game, a full pygame arcade game, five games ordered by difficulty, and the Python version that pygame supports."
canonical: https://learn.modernagecoders.com/python-games-for-kids
source: src/pages/python-games-for-kids.html
---
> Kids can code Python games in two steps: a text game such as guess the number, which needs only Python and the random module, then graphical games with pygame, installed with pip install pygame. On PyPI, pygame 2.6.1 has ready-built files for Python up to 3.13, so check versions first. Modern Age Coders teaches Python through games, live online, ages 9 to 16.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Python games for kids

United States · Ages 9 to 16 · Python and pygame

# Python games for kids

Plenty of kids who want to learn Python want to make a game with it, and that is a very good instinct. Games give instant feedback: the code either makes the character move or it does not. This page shows how to get there in two steps. First a game that runs in plain Python with nothing to install, then a real arcade game in pygame, a free and long-established Python game library. Along the way there is a version trap worth knowing about before you install anything, and the four-part loop that sits at the heart of every game.

At a glance: For: Ages 9 to 16; Language: Python; Game library: pygame, free; Computer: Windows, Mac or Linux; First game: No installs needed; Taught: In a batch or privately; Timing: Weekdays or weekends; Begin with: A free trial class. Rated 4.9 across 547 Google reviews.

## Three courses that begin with games

Each course writes a game in the first weeks, then uses games to teach the ideas behind them.

- [Python for kids](/courses/python-ai-kids-masterclass): Suits 9 to 12: text games, turtle art, then pygame.
- [Python for teens](/courses/python-complete-masterclass-teens): Teens 13 to 18: pygame projects, data and AI.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Kids 8 to 12: game design across Scratch, Roblox and more.

## Five Python games for kids, from easiest to hardest

This is the order we use, because each game adds exactly one new idea to the last one. The first two run in plain Python; the last three need pygame.

**Five Python games, ordered by difficulty (our teaching order)**

| Game | Needs | The new idea | Typical age |
|---|---|---|---|
| 1. Guess my number | Python only | Loops, input and if statements | 9 and up |
| 2. Rock, paper, scissors | Python only | Random choice and comparing values | 9 and up |
| 3. Dodge the falling block | pygame | The game loop, rectangles and collisions | 10 and up |
| 4. Catch the stars | pygame | Lists of moving objects and a timer | 11 and up |
| 5. Two-player Pong | pygame | Velocity, bouncing and two sets of controls | 12 and up |

### Why start without graphics

A text game strips a program down to its logic. There is no window, no images and nothing to install, so a nine-year-old can write a complete, working game in a single lesson and understand every line.

It also teaches the hardest early skill, reading an error message, at a time when the program is short enough that the error is easy to find.

### When to move to pygame

Once a child can write a while loop with an if inside it without help, they are ready. The pygame games on this page are the same structure with a window added.

Teenagers who already type confidently can start at game 3. In our plan, younger children spend a few weeks on games 1 and 2 first.

## A first Python game kids can code in one sitting

This guessing game needs nothing except Python itself. It uses randint from Python&rsquo;s random module, which the Python documentation describes as returning a random integer N such that a &lt;= N &lt;= b, so 1 and 100 are both possible.

### The maths hiding in the game (our worked example)

The clever way to play is to guess the middle every time: 50, then 25 or 75, and so on. Each guess halves the numbers left. Since 2 to the 7th power is 128, which is more than 100, halving finds any number from 1 to 100 in at most 7 guesses. Six guesses are not always enough, because 2 to the 6th is only 64.

Children who work this out have discovered binary search, one of the most important ideas in computer science, by playing their own game.

### Three changes to try

Limit the player to 7 tries, and print the secret number if they run out. That needs a counter and one more if.

Ask whether they want to play again at the end. That needs a loop around the whole game.

Let the player choose the range, 1 to 1,000 for example, and work out the new maximum number of guesses: 2 to the 10th is 1,024, so 10.

## Installing pygame, and the Python version to check first

pygame describes itself on its PyPI page as a free and open-source cross-platform library for making multimedia applications like video games in Python. Installing it is one command, as long as the Python on the computer is one that pygame has ready-built files for.

**Versions on the official pages, read 17 October 2026**

| What | Official figure | Source |
|---|---|---|
| Latest pygame | 2.6.1, files uploaded 29 September 2024 | PyPI |
| Python versions pygame 2.6.1 has ready-built files for | CPython 3.6 to 3.13, plus some PyPy builds | PyPI file list |
| Python that pygame says it requires | 3.6 or newer | PyPI |
| Newest Python on python.org | 3.15.0, released October 9, 2026 | python.org |
| Latest Python 3.13 release | 3.13.16, released September 30, 2026 | python.org |
| pygame licence | LGPL | PyPI |

### The version trap

On PyPI, the newest ready-built pygame files stop at Python 3.13, while python.org&rsquo;s big download button now offers Python 3.15.0. PyPI also lists a source package, pygame-2.6.1.tar.gz, but without a ready-built file for your Python, installing means building pygame from that source, a much harder job for a first-time install.

That is a gap between two official pages on one day, not a fault in either project, and it may close when pygame publishes a new release. Check the pygame files on PyPI before you choose a Python.

### What we do with new students

Our choice, for now: we set up game students on the latest Python 3.13 release, which python.org updated on September 30, 2026, because pygame has ready-built files for it.

When pygame lists files for a newer Python, we move up. The habit we want children to learn is the one behind this table: read the official version list before installing anything.

Sources, read 17 October 2026: [pygame on PyPI](https://pypi.org/project/pygame/) and [python.org downloads](https://www.python.org/downloads/). We are not connected with the pygame project or the Python Software Foundation.

## The game loop: four steps every pygame game repeats

Every game on a screen, from Pong to the largest console game, repeats the same short cycle many times a second. pygame&rsquo;s newbie guide calls this update, render, wait loop a design pattern that serves as the skeleton of most games.

**The four parts of a pygame frame (our labels; the rules are from the pygame documentation)**

| Step | pygame code | What the documentation says |
|---|---|---|
| 1. Input | pygame.event.get() | Your program must handle events every frame; not handling them may cause your system to decide the program has locked up |
| 2. Update | Move objects, check colliderect | colliderect returns true if any portion of either rectangle overlaps, except the edges |
| 3. Draw | screen.fill, draw, then pygame.display.flip() | flip updates the contents of the entire display |
| 4. Wait | clock.tick(60) | Clock.tick(40) once per frame means the program never runs at more than 40 frames per second |

### Why the input step is not optional

A classic beginner slip is leaving out the event loop when a game has no controls yet. pygame&rsquo;s documentation warns what happens: events pile up, and the operating system may decide the program has frozen.

Handling pygame.QUIT is also what makes the close button on the window work. Without it, the only way out is to force the program to stop.

### Frames and speed

clock.tick(60) caps the game at 60 frames a second. Movement in the simple games here is counted in pixels per frame, so the frame cap is also what keeps the speed steady from one computer to the next.

Later, students learn the method pygame&rsquo;s own quick start shows: measure dt, the time in seconds since the last frame, and multiply speeds by it, so movement stays smooth even when frames are uneven.

## A complete pygame arcade game in under 50 lines

This is the first pygame game our students build. Move left and right, let the white block fall past you, and score a point for every block you avoid. Every line uses a part of pygame that its documentation describes.

### Is the game fair? (our arithmetic)

At 60 frames a second, a block moving 5 pixels a frame falls 300 pixels a second. It starts 40 pixels above the window and is replaced when it passes 640, so it travels 680 pixels, taking about 680 / 300 = 2.27 seconds.

The player moves 6 pixels a frame, 360 pixels a second, and the widest trip across the window is 480 - 50 = 430 pixels, about 1.19 seconds. Because 1.19 is less than 2.27, the player can always escape. Make the block faster than that and the game becomes unfair.

### Five upgrades, in order

Speed the block up a little each time the score rises. Then add a second block. Then give the player three lives instead of one.

After that, replace the rectangles with images loaded from files, and add a sound when a block is dodged. Each upgrade practises one new part of pygame.

## What Python game coding looks like at each age

Our guide for US families, by grade. Children vary a lot, and we place each one by what they can already do, not by birthday.

### Grades 3 to 5, ages 9 to 11

Text games, turtle drawings and simple quizzes. Typing speed is the main limit, so programs stay short and lessons stay playful.

### Grades 6 to 8, ages 11 to 14

pygame games 3 and 4, with lists, functions and a scoreboard. A good moment to start a folder of finished games.

### Grades 9 to 12, ages 14 to 18

Pong, then larger projects with classes, sprites and levels. A good stepping stone toward AP Computer Science or a portfolio project.

Not sure where your child fits? Our pages on [Python for 10 year olds](/python-for-10-year-olds), [Python for 12 year olds](/python-for-12-year-olds) and [Python for 14 year olds](/python-for-14-year-olds) go into each age in more depth, and [our text adventure tutorial](/blog/how-to-make-a-text-adventure-game-in-python) is another good first game.

## Four stages of a young Python game maker

A rough map of where children are, and the next step from each.

**Stages of learning game coding in Python (ours)**

| Stage | What it looks like |
|---|---|
| 1. Copier | Types in a game from a page and gets it running |
| 2. Changer | Changes numbers and messages to see what happens |
| 3. Builder | Writes a new game from an empty file using the loop pattern |
| 4. Designer | Balances a game on purpose: speeds, scores, fairness |

### For parents

Copying is a legitimate start. Professional programmers learned the same way, by typing out code and then breaking it.
The jump to stage 3 is the big one. An empty file is intimidating, and a teacher&rsquo;s first question can unlock it.

### For kids

Change one number and run it again. You learn more from ten small experiments than one big plan.
Read the last line of an error first. Python puts the reason there.

## Nine courses for kids who like making games

Every one runs live with the same teacher each week, in a batch or one to one.

### Kids

Ages 6 to 12

- [Python for kids](/courses/python-ai-kids-masterclass): Games first, then AI projects.
- [Scratch coding](/courses/scratch-programming-complete-course): Game ideas before typed code.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): Blocks to games and apps.

### Teens

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): pygame, data and real projects.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): From pygame thinking to Unity.
- [Java for teens](/courses/java-programming-masterclass-for-teens): A 2D game and Minecraft mods.

### Going further

Teens and adults

- [Game development](/courses/game-development-complete-masterclass-college): Professional engines and tools.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Playable web pages and games.
- [Hackathon preparation](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Build a game with a team, fast.

## Live Python lessons, planned around your week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school batches across US time zones.
- **Weekends** Morning batches for families with busy weekdays.
- **1-on-1** A personal plan, at times you pick.

- **A game every few weeks** Each idea arrives inside a game.
- **Typing on their own computer** Code written by the child, not watched.
- **Set up together** Python and pygame installed in class.
- **A regular teacher** The same person, week after week.
- **Online, nationwide** From Maine to Hawaii.
- **Batch or private** Fifteen to twenty students, or one to one.

## Fees

Python and pygame are both free to download, and so is the first lesson. Regular classes are paid by the month in US dollars, with no long contract, and can stop when any month ends.

- Free first class: USD 0. A free first lesson. Help installing Python and pygame. No card.
- Group batch: USD 100 a month. Batch of fifteen to twenty. One teacher all term. Choose a batch time. Monthly payment.
- One to one: USD 150 a month. Private lessons. Your choice of times. Your own game ideas.

## Python games for kids: common questions

### What Python games can kids code?

Start with text games such as guess the number and rock, paper, scissors, which need only Python. Then move to pygame for games with a window: dodging blocks, catching stars and two-player Pong.

### Is Python good for making games?

For learning, yes. Python reads clearly, and the pygame library handles windows, drawing, keyboard input and collisions, so children spend their time on game logic rather than setup.

### Is pygame free?

Yes. pygame's PyPI page describes it as a free and open-source cross-platform library, and lists its licence as LGPL.

### How do you install pygame?

Check that Python and pip work with python --version and pip --version, then run pip install pygame. Test it with python3 -m pygame.examples.aliens, a small game that comes with pygame.

### Which Python version works with pygame?

On PyPI, pygame 2.6.1 has ready-built files for Python up to 3.13, while python.org now offers 3.15.0. We set students up on the latest 3.13 release until pygame publishes files for newer versions.

### What age can kids start making Python games?

We start text games from about 9 or 10, once a child types comfortably, and pygame games from about 10. Teenagers can start with pygame directly.

### Can kids make Python games without installing anything?

A text game needs only Python itself, which includes the random module. Graphical games need pygame, which is installed with pip.

### What does clock.tick(60) do in pygame?

It limits the game to at most 60 frames per second. pygame's documentation says that calling Clock.tick(40) once per frame means the program never runs faster than 40 frames per second.

### Which class times work for US kids?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much are Python game coding classes?

The first lesson is free. Regular classes are billed per month, and the fees panel on this page gives the monthly amount in US dollars.

## Related pages

- [Python for 10 year olds](/python-for-10-year-olds): What a 10 year old can build.
- [Python for 14 year olds](/python-for-14-year-olds): Bigger projects for high schoolers.
- [Text adventure in Python](/blog/how-to-make-a-text-adventure-game-in-python): Another first game, step by step.
- [Scratch or Python first](/blog/scratch-vs-python-which-better-young-learners): Choosing a starting language.
- [Coding classes in the USA](/coding-classes-in-united-states): Our hub for families across the country.
- [How we teach](/how-we-teach): What happens in a live lesson.

## Contact

Book the free first class at [https://learn.modernagecoders.com/python-games-for-kids](https://learn.modernagecoders.com/python-games-for-kids#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
