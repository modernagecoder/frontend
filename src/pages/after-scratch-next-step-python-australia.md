---
title: "After Scratch: Moving to Python, for Australian Kids"
description: "What comes after Scratch? When Australian kids are ready for Python, a block-by-block translation of a real Scratch game, and the four traps that catch beginners."
canonical: https://learn.modernagecoders.com/after-scratch-next-step-python-australia
source: src/pages/after-scratch-next-step-python-australia.html
---
> The usual next step after Scratch is Python, a text language that keeps every idea a child already knows (loops, variables, decisions, input) but asks them to type it. Most children are ready somewhere between nine and twelve, once their Scratch projects feel cramped and they can type short words comfortably. The smoothest way across is to rebuild a game they already made in Scratch, line by line, in Python.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / After Scratch: Python

Australia · Ages 9 to 14 · Live online

# After Scratch: moving to Python

Sooner or later most keen Scratch coders hit a wall. Their projects have grown so large that scrolling around the blocks is a chore, they want something Scratch cannot easily do, or an older cousin has shown them "real code" and they want in. That moment is the right time to move to Python, and it is far gentler than parents fear. Almost every idea a child has used in Scratch has a direct Python equivalent; what changes is that they now type it. This page explains how to tell when a child is ready, translates one complete Scratch game into Python block by block, and lists the four traps that catch almost every new Python programmer so you can spot them coming.

At a glance: For: Scratch coders, about 9 to 14; Moving to: Python; Usual timing: After a year or so of Scratch; First project: A game they already built; Biggest change: Typing instead of snapping; Format: Live online lessons; Group: Five to ten, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Courses for the move from Scratch to Python

Choose by age. Each one starts by connecting Python to what the child already knows from Scratch.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12 in the course's own words. Games, turtle drawings and small AI projects, starting from Scratch ideas.
- [Python for Teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. A full year from first programs to confident, well-structured Python.
- [Maths Through Coding](/courses/maths-through-coding): Ages 10 to 15. Python used as a tool for school maths, for children who enjoy numbers.

## Five signs a child is ready to leave Scratch

Age matters less than these signs. A nine year old who shows four of them is often more ready than a twelve year old who shows one.

**Signs of readiness for Python (our teaching experience)**

| Sign | What you might notice |
|---|---|
| Big projects | Their Scratch projects have many sprites and long scripts that are hard to scroll through |
| Variables used freely | They invent variables of their own for scores, speeds and timers |
| Frustration with blocks | They complain that something would be easier "if I could just type it" |
| Comfortable typing | They type short words and numbers without hunting for every key |
| Curiosity about real code | They ask what professional programmers use, or try copying code they have seen |

### Do not rush it

A child who moves to Python too early can lose confidence: every error message feels like failure. A few more months of ambitious Scratch projects is never wasted, because the ideas carry over.

If a child shows only one or two signs, we often suggest a bigger Scratch project first, or Roblox Studio, which introduces text coding inside a familiar world.

### Do not wait too long either

Children who stay in Scratch long after they are ready can start to see coding as something for little kids. Moving to Python at that point re-energises them.

The free first class is a good test: the teacher tries a few lines of Python and watches whether the child is excited or deflated.

The Australian Curriculum makes the same move. Years 5 and 6 build "visual programs" with variables and input (AC9TDI6P05); from Years 7 and 8, students write programs "in a general-purpose programming language" (AC9TDI8P09). Doing it a little earlier at home just means school feels familiar. Families still deciding between languages can compare them on our page about [kids coding languages](/kids-coding-languages-australia).

## One Scratch game, translated block by block

Our favourite bridge project is a guess-the-number game. The computer picks a secret number from 1 to 100, the player guesses, and the computer answers "Higher!" or "Lower!" until the guess is right. Most children have built something like it in Scratch.

**The translation table: Scratch block to Python line (block names from the Scratch Foundation's own block definitions)**

| Scratch block | Python | What changes |
|---|---|---|
| when green flag clicked | the program starts at the top of the file | No start block: Python runs from the first line |
| set secret to (pick random 1 to 100) | secret = random.randint(1, 100) | Needs import random at the top |
| set guess to 0 | guess = 0 | Exactly the same idea, typed |
| repeat until (guess = secret) | while guess != secret: | The condition flips: until equal becomes while not equal |
| ask (Guess a number) and wait | input("Guess a number: ") | The question is typed in quotation marks |
| set guess to (answer) | guess = int(input(...)) | int() turns the typed text into a number |
| if (guess &lt; secret) then say Higher! | if guess &lt; secret: print("Higher!") | A colon and indentation replace the C-shaped block |
| if (guess &gt; secret) then say Lower! | elif guess &gt; secret: print("Lower!") | elif means "otherwise, if" |
| say You got it! | print("You got it!") | Output goes to the screen as text |

Put together, the Python version is ten lines long, and we ran it to check it behaves exactly like the Scratch game. Python's documentation describes random.randint(a, b) as returning "a random integer N such that a &lt;= N &lt;= b", so 1 and 100 are both possible, just like Scratch's pick random 1 to 100.

### The flip that catches everyone

Scratch says repeat until the guess equals the secret. Python's loop says while the guess does not equal the secret. They mean the same thing, but the condition is turned inside out.

Children who copy the Scratch condition straight across write while guess == secret, and the loop never runs. Spotting why is one of the most valuable ten minutes in the whole course.

### A bonus question for keen players

How many guesses does a clever player need at most? If they always guess the middle of what is left, each answer halves the possibilities. Seven halvings cover 128 numbers, so 7 guesses are always enough for 1 to 100.

We checked this by running the halving strategy for all 100 secret numbers in Python. The worst case was exactly 7. Children love testing it against a friend.

Sources, read 7 October 2026: block labels from the Scratch Foundation's [scratch-blocks](https://github.com/scratchfoundation/scratch-blocks) repository (msg/json/en.json); [Python documentation for the random module](https://docs.python.org/3/library/random.html). The ten-line game and the halving check are our own code.

## The four traps that catch new Python programmers

Every Scratch coder who moves to Python meets these. None of them is a sign of a weak student; they are features of typed code that blocks protected them from.

**Beginner traps when moving from Scratch to Python**

| Trap | What happens | How we teach past it |
|---|---|---|
| Indentation | Code inside a loop or if is not indented, so Python complains or runs it at the wrong time | Children colour the indented lines on paper first, matching each to the C-shaped block it replaces |
| = and == | They write if guess = secret, and Python reports an error | One equals sign stores a value; two compare. We say "becomes" and "is equal to" aloud |
| Text is not a number | input() gives text, so comparing it with a number fails | We print the type of the value so they see "str" and know to use int() |
| Flipped conditions | A Scratch "repeat until" is copied straight into a while loop | Translating the guessing game, where the flip is unavoidable |

### Read the error

Python error messages name the line and the kind of problem. Reading them slowly, aloud, is the habit we build in the first week.

### Change one thing

When something breaks, change one thing and run again. Changing five things at once hides which one mattered.

### Predict, then run

Before pressing run, say what should happen. The gap between the prediction and the result is where the learning is.

## Python vs Scratch for kids: what each does well

The comparison parents ask about most. They are not rivals; they are stages. But each has real strengths.

**Scratch and Python side by side**

|  | Scratch | Python |
|---|---|---|
| How you code | Drag and snap blocks | Type text |
| Typing errors | Impossible | Common at first, then rare |
| Graphics and sound | Built in from the first minute | Needs a library such as turtle or Pygame |
| Large projects | Hard to organise beyond a few screens | Split into functions and files |
| What it leads to | Mainly more Scratch | Web, data, AI, games, school and university computing |
| Cost | Free, in a browser | Free to download; the current release on python.org is 3.14.8 |

### What children miss from Scratch

Instant graphics. A Scratch cat moves the moment you click; a first Python program prints text. We bring graphics back early with the turtle library, so children draw spirals and stars within their first few lessons.

Sharing. Scratch has its own community site. Python projects are shared differently, by running them for family or, later, publishing them on the web.

### What children gain

Freedom. Python can read files, talk to websites, crunch numbers and run AI models. The ceiling is gone.

Respect. Many children find it deeply motivating to write the same language used by professional programmers. Our [longer Scratch and Python comparison](/blog/scratch-vs-python-which-better-young-learners) covers the decision for younger learners.

## Four stages from Scratch coder to Python coder

With a weekly lesson, most children who arrive confident in Scratch reach the third stage within two terms.

**Crossing from Scratch to Python**

| Stage | What your child can do |
|---|---|
| 1. Translate | Rebuild a small Scratch game in Python with help, using a translation table |
| 2. Write | Write a new Python program from a blank file, fixing their own error messages |
| 3. Organise | Split a program into functions and reuse them, which Scratch made awkward |
| 4. Extend | Use libraries for graphics, data or AI to build something Scratch could not |

### Should they keep using Scratch?

For fun, absolutely. Many children keep a Scratch project going alongside Python for months, and switching between them strengthens both.
In lessons we focus on Python once the move starts, so the new habits stick.

### School terms and holidays

Lessons run through the four school terms if you wish and can pause in holidays. Billing is monthly.
The day and time are agreed in the free first class, in your own state's time.

## Courses after Scratch

Grouped by where a child wants their Python to take them.

### First Python

The core step

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): From Scratch ideas to Python games and AI.
- [Python for Teens](/courses/python-complete-masterclass-teens): Beginner to advanced across a full year.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic and algorithms to sharpen thinking first.

### Python for making

Games and web

- [Game Development for Kids](/courses/game-development-masterclass-for-kids): Bigger games across Scratch, Roblox and beyond.
- [Roblox Game Coding](/courses/roblox-game-coding-for-kids-lua-course): Another text language, inside Roblox Studio.
- [Web Development for Kids](/courses/kids-ai-web-development-course): Web pages, the other common next step.

### Python for thinking

Maths and data

- [Maths Through Coding](/courses/maths-through-coding): School maths explored with Python.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): How machine learning works, ages 8 to 14.
- [Competitive Programming](/courses/competitive-programming-for-teens-course): Algorithm puzzles for confident teens.

## Live lessons for new Python coders in Australia

We teach from India, a few hours behind every Australian state, so after-school and weekend lessons in Australia fall comfortably in our working day.

- **Weekday, after school** The usual choice for primary-age coders.
- **Weekday, early evening** Popular with high school students.
- **Weekend** Longer sessions for translating bigger projects.

- **A free first class** Your child translates a few Scratch blocks into Python with a teacher, which shows quickly whether they are ready.
- **Small groups** Five to ten children making the same move from blocks to text.
- **One to one** For a child who wants to bring a big Scratch project across.
- **Their keyboard** The child types every line; teachers point, question and explain.
- **Parents can see** Lessons are live, so you can watch the first Python steps.
- **Bring a project** Children can bring their own Scratch game to translate.

## Fees for Python lessons

Australian families pay a monthly fee in US dollars. There is nothing to pay to join and no fixed term.

- Free first class: USD 0. A few Scratch blocks turned into Python. An honest view on readiness. No card or bank details.
- Group batch: USD 100 a month. Five to ten children per class. One teacher across the months. Classmates making the same move. Stop after any month.
- One to one: USD 150 a month. Focused on your child's own projects. Pace set by them. Good for translating a big game.

## What parents ask about the step after Scratch

### What comes after Scratch?

For most children, Python. It keeps every idea from Scratch, such as loops, variables and decisions, but is typed as text and can build much larger and more varied projects. JavaScript and Roblox Luau are other common next steps.

### Python vs Scratch for kids: which is easier?

Scratch is easier to start because there are no typing errors. Python is easier for large projects because code can be organised into functions and files. Children usually do Scratch first, then Python.

### At what age should a child move from Scratch to Python?

Usually between nine and twelve, depending on how big their Scratch projects are and how comfortably they type. Readiness matters more than age.

### What is the hardest part of moving to Python?

Usually indentation, mixing up = and ==, and remembering that typed input is text. These are new because Scratch blocks quietly prevented them.

### Is Python free?

Yes. Python is free to download from python.org, and beginners can also use free online editors.

### Can my child keep using Scratch while learning Python?

Yes, for fun. Many children keep a Scratch project going alongside, and moving between the two strengthens both.

### How long does it take to switch from Scratch to Python?

A confident Scratch coder can usually rebuild their own small games in Python within a few weeks of weekly lessons, and write new programs independently within a term or two.

### What should my child build first in Python?

Something they already built in Scratch, such as a guessing game or a quiz. Translating a known game means only the language is new, not the idea.

### Does the Australian Curriculum use Python?

It does not require one language, but expects a general-purpose language from Years 7 and 8 and gives Python, JavaScript or C# as examples. Python is a common choice.

### What does it cost?

The opening lesson is free and needs no card. After that there is a monthly fee for a group place or for private lessons, both shown under Fees, with no joining charge.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Our hub page for Australian families.
- [Kids coding languages](/kids-coding-languages-australia): Python, JavaScript and Luau compared.
- [Coding for Year 7](/coding-for-year-7-australia): When school starts using a typed language.
- [Coding for 9 and 10 year olds](/coding-classes-for-9-and-10-year-olds-australia): The age when many children make the move.
- [Game development for kids](/game-development-for-kids-australia): Python games and what follows.
- [Python for 10 year olds](/python-for-10-year-olds): A first Python course at ten.

## Contact

Book the free first class at [https://learn.modernagecoders.com/after-scratch-next-step-python-australia](https://learn.modernagecoders.com/after-scratch-next-step-python-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
