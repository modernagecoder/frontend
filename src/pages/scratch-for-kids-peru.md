---
title: "Scratch for Kids in Peru: Live Scratch Classes in English"
description: "Scratch for kids in Peru: live Scratch coding classes taught in English for children aged 6 to 12, in a group or one to one, at any hour that suits Peru time."
canonical: https://learn.modernagecoders.com/scratch-for-kids-peru
source: src/pages/scratch-for-kids-peru.html
---
> Modern Age Coders teaches Scratch to kids in Peru aged 6 to 12 in live online classes, in English. Scratch is a free block-based coding tool from the Scratch Foundation; children snap blocks together to make characters move, talk, score points and react to keys, with no typing needed. A mentor based in India watches the child's screen, asks them to predict what each script will do and helps them find their own mistakes. Families pick a group of fifteen to twenty children of the same age or one-to-one lessons, at any hour on Peru time, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Scratch for kids

Peru · Ages 6 to 12 · Scratch, live in English

# Scratch for kids in Peru

Scratch looks like a toy: a cat, some coloured blocks, a white stage. Underneath, every block is a small piece of real computing, and a good teacher can show a child the maths and logic hiding inside it. This page is for families in Peru choosing Scratch for a child of 6 to 12. It explains what Scratch is, what a block actually does, how a six year old and a ten year old use it differently, and how to tell when a child is ready to move on.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12; Tool: Scratch, free in the browser; Length: Three to four months; Format: Live video, in English; Group size: Fifteen to twenty, or one to one; Peru hours: Chosen by your family. Rated 4.9 across 547 Google reviews.

## Three Scratch courses for children in Peru

Choose by age and ambition. The free first class shows which one fits.

- [Scratch Coding: Zero to Real Games](/courses/scratch-programming-complete-course): Ages 6 to 12, three to four months. Motion, events, loops, variables and a finished game, grouped by age so a six year old never shares a class with a twelve year old.
- [Coding for Kids: Scratch to Apps and AI](/courses/kids-coding-blocks-masterclass): Ages 6 to 12, across a school year. Starts in Scratch and carries on into apps, game worlds and a first taste of Python.
- [Vibe Coding for Kids: AI, Scratch and Games](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Ages 8 to 12. Scratch games plus a careful, age-appropriate look at how AI tools help and where they go wrong, always after the child has done the thinking.

## What is Scratch, and is it good for kids?

Scratch is a free coding tool in which children build programs from blocks instead of typed text. It is one of the most widely used first languages in the world, and for good reason.

### Where Scratch comes from

According to the Scratch Foundation, Scratch "was developed at the MIT Media Lab in 2007", and in 2019 it moved from MIT to the Scratch Foundation, "an independent nonprofit". The Foundation says "200 million kids create on Scratch for free" and that children have "created over a billion Scratch projects".

"Scratch is free for everyone," the Foundation writes. It runs in a web browser, and an offline editor can be downloaded for computers without a steady connection. A family pays nothing for Scratch itself; what a class adds is a teacher.

### Why blocks suit young children

A block cannot be misspelt. A six year old who cannot yet type "repeat" correctly can still drag a repeat block and see what it does. Blocks only fit together in ways that make sense, so children spend their effort on the idea rather than on punctuation.

That does not make Scratch shallow. Variables, loops, conditions, events, messages between characters and even simple physics all appear in Scratch. The limit is the teaching, not the tool, which is why the next section looks inside a block.

## What does a Scratch block really do?

Scratch is open source, so anyone can read the code that runs each block. We did, and the answers are useful for parents and children alike.

**Five facts about Scratch, read from Scratch's own source code (November 2026)**

| Question | Answer in the code | What it means for a child |
|---|---|---|
| How big is the stage? | 480 wide, 360 high | x runs from -240 to 240 and y from -180 to 180, with 0, 0 in the middle |
| How often does Scratch update the screen? | The editor turns on compatibility mode, which steps 1000 / 30 milliseconds apart | About 30 updates every second; a script inside a forever loop moves once per update |
| What does "move 10 steps" calculate? | x changes by steps times cos(90 minus direction); y by steps times sin(90 minus direction) | Direction 90 is right, 0 is up; diagonal moves share the 10 steps between x and y |
| Does "pick random 1 to 10" include 10? | Yes: with whole numbers both ends can come up | A dice game with 1 to 6 really can roll a 6 |
| And "pick random 1 to 10.5"? | A decimal in either box gives decimal answers | Typing 1.0 instead of 1 changes the kind of answer you get |

Source: the Scratch Foundation's open source repositories on GitHub (scratch-vm: runtime.js, scratch3_motion.js, scratch3_operators.js; scratch-gui: layout-constants.js and vm-manager-hoc.jsx), develop branch, read on 9 November 2026. The plain-language readings in the last column are ours.

None of this needs to be taught to a six year old. But the third row is a piece of real trigonometry, and children of ten or eleven are perfectly able to discover it for themselves if a teacher sets up the right experiment. That is the lesson below.

## How can Scratch teach a child real maths?

By asking questions the child can test. In this lesson a sprite moves 10 steps in different directions and the child writes down how far it travels along x and along y each time.

### The experiment in Scratch

The child sets a direction, clicks "move 10 steps" once, and reads the change in x and y from the sprite's information panel. Direction 90: x goes up by 10. Direction 0: y goes up by 10. So far, nothing surprising.

Then the mentor asks for a prediction: "At direction 45, halfway between, how far will it move along x?" Most children say 5, or 10. Scratch says about 7.07, and the same along y.

### Why 7.07 and not 5

The sprite still travels 10 steps, but along a slant. Seven and a bit across and seven and a bit up make a right-angled triangle whose long side is 10. Children who have met squares can check it: 7.07 times 7.07 is about 50, and 50 plus 50 is 100, which is 10 times 10.

Scratch's own code does this with cosine and sine of 90 minus the direction. We rebuild it in a few lines of Python so the child can print a whole table of directions at once.

**Scratch's "move" block, rebuilt in Python** (Python)
```python
import math


def move(steps, direction):
    radians = math.radians(90 - direction)
    dx = round(steps * math.cos(radians), 2) + 0.0
    dy = round(steps * math.sin(radians), 2) + 0.0
    return dx, dy


for direction in (90, 0, 45, 30, 180, -90):
    dx, dy = move(10, direction)
    print(f"move 10 steps, direction {direction:>3}: x {dx:+.2f}, y {dy:+.2f}")
```

**What it prints** (Output)
```output
move 10 steps, direction  90: x +10.00, y +0.00
move 10 steps, direction   0: x +0.00, y +10.00
move 10 steps, direction  45: x +7.07, y +7.07
move 10 steps, direction  30: x +5.00, y +8.66
move 10 steps, direction 180: x +0.00, y -10.00
move 10 steps, direction -90: x -10.00, y +0.00
```
Exact output of our run with Python 3. Direction 30 gives 5.00 across and 8.66 up; 5 squared plus 8.66 squared is again about 100.

The rule children write in their own notebooks is short: **a step at a slant is shared between x and y, and the two parts always rebuild the full step**. They have just met Pythagoras and a little trigonometry, years before school asks for it, through a block they have used a hundred times.

### Part two: from steps to speed

Next question: how fast is "move 5 steps" inside a forever loop? The block does not know about seconds. But the Scratch editor updates about 30 times a second, so 5 steps per update means about 150 steps per second.

The stage is 480 steps wide. Children predict how long a sprite takes to cross it at 2, 5 and 10 steps per update, then run the calculation.

### Why it matters in a game

A child who knows that speed is steps per frame times frames per second can design a game on purpose: a slow enemy that takes eight seconds to cross the screen, a fast one that takes under two.

It also explains a common puzzle: the same project can feel slower on an old computer that cannot keep up 30 updates a second. The steps did not change; the frames did.

**Crossing the 480-step stage** (Python)
```python
FRAMES_PER_SECOND = 30
STAGE_WIDTH = 480
for steps in (2, 5, 10):
    frames = STAGE_WIDTH / steps
    print(f"{steps:>2} steps a frame: {frames:.0f} frames, "
          f"{frames / FRAMES_PER_SECOND:.1f} seconds to cross")
```

**What it prints** (Output)
```output
 2 steps a frame: 240 frames, 8.0 seconds to cross
 5 steps a frame: 96 frames, 3.2 seconds to cross
10 steps a frame: 48 frames, 1.6 seconds to cross
```
Exact output of our run. Doubling the steps per frame halves the time to cross, which children then check with a stopwatch in Scratch.

1. **Ages 6 to 8.** On squared paper, walk a counter 10 squares right, then 10 squares up. Then try to reach the same diagonal line in 10 counted moves. What happens?
2. **Ages 8 to 10.** In Scratch, point the sprite in four directions and note x and y after each "move 10 steps". Which directions change only one number?
3. **Ages 10 to 12.** Run both Python programs. Then predict, and check, how many seconds a sprite moving 8 steps per frame needs to cross the stage.

## Is Scratch for 6 year olds or for 10 year olds?

Both, used very differently. Peruvian primaria lasts six years, and by MINEDU's normative-age table a child of 6 is in 1st grade and a child of 10 in 5th grade. A good Scratch class changes shape across those years.

### At 6 and 7: stories and sequence

Young children make a character walk, speak and change costume. The ideas are order (first this, then that), repetition and simple events such as "when this sprite is clicked". Reading is light, and the mentor names each block aloud.

Projects are short: an animated birthday card, a dancing cat, a talking animal. The aim is confidence and a child who says, in simple English, what their program does.

### At 10 to 12: games and reasoning

Older children build games with scores, lives, levels and timers. They use variables, conditions that combine two tests, messages between sprites and lists. The lesson above, on direction and speed, belongs here.

Projects are planned before they are built, and the child is asked to test edge cases: what happens at zero lives, at the edge of the stage, when two keys are pressed together.

Families with a younger child can read our Spanish-language page on [coding at 6, in 1st grade of primaria](/programacion-para-ninos-de-6-anos), and for the middle years, the page on [coding at 8, in 3rd grade](/programacion-para-ninos-de-8-anos). Both describe the same English-taught classes from a parent's point of view.

## Is remixing Scratch projects the same as copying?

It can be, and that is the risk. Scratch invites children to remix other people's projects; the Foundation's own page says "Don't want to "start from Scratch"? Try remixing". Remixing is a fine way to learn when a child understands what they changed.

### Read before you change

Before remixing, the child explains in a sentence what the original project does and which script does it. If they cannot, they are not ready to change it.

### Change one thing, predict the result

One edit at a time, with a guess first. "If I change 5 to 10, the bat will fly twice as fast." Then run it and compare.

### Build the next one alone

After a remix, the child builds a similar project from an empty stage. Only then is the idea theirs.

Peru's national curriculum, the CNEB, describes creating digital objects as building them "siguiendo un proceso de mejoras sucesivas y retroalimentación", by successive improvement and feedback. That is a fair description of a good Scratch class: build, show, hear a question, improve. Our classes run alongside school; we do not replace any part of it.

## What does my child need for Scratch classes at home?

A laptop or desktop computer with a browser, a mouse, and a headset if possible. Scratch itself costs nothing and needs no installation, though an offline version exists.

### Why not a phone

INEI reports that 67.8% of Peruvian children aged 6 to 11 used a mobile phone in the second quarter of 2026. Phones are the screen children know best, but dragging small blocks with a finger while watching a mentor on the same screen is frustrating, so our Scratch classes use a computer.

A mouse makes a real difference for six and seven year olds, whose fingers find a trackpad hard to control. It is the cheapest upgrade a family can make for a Scratch class.

### English or Spanish menus?

Scratch's language menu includes both English and Español Latinoamericano. In our classes children use the English menus, so the words they see on the blocks are the words the mentor says.

For a Spanish-speaking child that is part of the value: "forever", "repeat" and "if" become everyday words, heard and read in the same moment. Families who want the reasons in Spanish can read [clases de programación para niños en inglés](/clases-de-programacion-para-ninos-en-ingles).

## When is a child ready to move from Scratch to Python?

When Scratch starts getting in the way. Age matters less than signs, and most children show them somewhere between 9 and 11.

1. **Scripts grow too long to see.** The child scrolls for a long time to find one block and loses track.
2. **They ask for things Scratch makes awkward,** such as saving a score to a file or working with lots of text.
3. **They read comfortably in English** and can type a short sentence without hunting for each key.
4. **They plan before building.** A child who sketches the logic first is ready for a language where logic is all there is.
5. **They predict correctly** what a script will do most of the time, and can explain why when they are wrong.

When those signs appear, our mentor suggests the move, and the first Python lessons rebuild a familiar Scratch project in typed code, just as the direction lesson above rebuilt a block. [Python for kids in Peru](/python-for-kids-peru) describes that first year of typed code. Children who are still enjoying Scratch at 11 are not behind; there is plenty left to learn in it.

## What time can my child have Scratch classes in Peru?

Whenever suits you. Peru is on UTC minus 5 and India on UTC plus 5:30 all year, which puts India ten and a half hours ahead every day. The table only shows conversions, not a timetable.

**Example Peru hours converted to India time (not class slots)**

| Peru time | India time | Often chosen for |
|---|---|---|
| 07:30 | 18:00 | An early summer-holiday start |
| 11:30 | 22:00 | A Saturday late morning |
| 15:30 | 02:00, next day | After school for younger children |
| 16:30 | 03:00, next day | After a snack and a rest |
| 19:00 | 05:30, next day | Evenings for older children |

Based on the IANA time zone database: America/Lima at UTC minus 5 with no daylight saving, Asia/Kolkata at UTC plus 5:30. We worked out the conversions.

Because neither clock changes during the year, a class booked for 15:30 in Cusco stays at 15:30 in winter and summer. For help judging any live class for a young child, see [online coding classes for kids in Peru](/online-coding-classes-for-kids-peru); all our Peru pages are gathered on the [coding and AI classes in Peru](/coding-and-ai-classes-in-peru) hub.

## How can I see my child improving in Scratch?

Ask to see a project and hear it explained. These six stages are our own and guide each child's next step.

**Our Scratch stages for children of 6 to 12**

| Stage | Typical age | Builds | Explains |
|---|---|---|---|
| 1. Story | 6 to 7 | A character that moves and speaks in order | "First it says hello, then it walks." |
| 2. Repeat | 7 to 8 | Animations with repeat and forever loops | "It does this ten times, then stops." |
| 3. React | 8 to 9 | Projects that respond to keys, clicks and touching | "When it touches the wall, it turns." |
| 4. Remember | 9 to 10 | Games with a score or lives in a variable | "The score goes up by one each time." |
| 5. Measure | 10 to 11 | Movement planned with direction, speed and timing | "At 45 degrees it only moves 7 across." |
| 6. Design | 11 to 12 | A planned, tested game with levels | "I tested zero lives and found a bug." |

### For parents

Ask which part of the project was hardest. A child who can name it is thinking about their own work.
Stage 5 is the direction lesson. Children who reach it often start explaining maths to the rest of the family.

### For young Scratchers

Before you click the green flag, say what will happen. Then watch.
If a sprite does something strange, change one block at a time until you find the one responsible.

## Nine more courses for before, beside and after Scratch

Live, in English, with one mentor throughout, in a group or one to one.

### Before and beside

Ages 6 to 9

- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and puzzles that prepare small children for code.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Planning a project in steps before building it.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Number sense that helps with scores, speeds and coordinates.

### Other block worlds

Ages 7 to 12

- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Blocks that build inside Minecraft Education.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft in one path.
- [Apps with blocks](/courses/block-coding-app-development-masterclass): Phone-style apps built from blocks.

### After Scratch

Ages 9 to 12

- [Python and AI for kids](/courses/python-ai-kids-masterclass): The first typed language, with child-safe AI projects.
- [Maths through coding](/courses/maths-through-coding): More lessons like the direction table, in Python.
- [Web pages for kids](/courses/kids-ai-web-development-course): A real website, written and published by the child.

## A week of Scratch classes, seen from Peru

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **School weeks** Mid to late afternoon in Peru is the usual choice for primaria children.
- **January to March** Mornings in the long summer break suit many families; say the hour and we arrange it.
- **Private lessons** A single child and a mentor, on a schedule set by the family.

- **Shared stage** The mentor sees the child's Scratch screen all lesson.
- **Familiar face** The same mentor each week, who knows every project so far.
- **Words on screen** Spoken English backed up by the words on each block.
- **Something finished** A working project, however small, at the end of every class.
- **A note home** Two or three lines for parents after each class.
- **Group or private** Fifteen to twenty children, or one to one.

## Fees for Scratch classes from Peru

We bill in US dollars, monthly, to a card. Your bank chooses the soles exchange rate when the charge arrives, which is why the amount you see can shift slightly between months.

- Free first class: Free. A free first Scratch class. A first animation built by your child. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty children of the same age band. One mentor all course. Two live classes a week. Pay monthly, stop when you like.
- One to one: USD 150 a month. Your child alone with the mentor. Projects and pace shaped to your child. Hours you pick.

## Scratch for kids: questions from families in Peru

### Are the classes in Spanish?

No. Every Scratch class is live, online and in English only. The mentor speaks plainly and patiently, follows your child's pace and accent, and points to each block while saying its name, so a child still learning English can keep up. Some of our Peru pages are in Spanish for parents, but the lessons are always in English.

### What age is Scratch for?

Our Scratch course takes children from 6 to 12, grouped by age. Six and seven year olds make stories and animations; ten to twelve year olds build games with scores, timers and planned movement. In Peru that spans 1st to 6th grade of primaria.

### Is Scratch free?

Yes. The Scratch Foundation says Scratch is free for everyone, and it runs in a web browser, with an offline editor available to download. Our classes charge for live teaching by a mentor, not for Scratch.

### Can my child learn Scratch on a tablet or phone?

Not in our classes. Scratch needs a laptop or desktop with a mouse to drag blocks accurately, and the screen must show both the project and the mentor. A headset with a microphone helps a lot.

### Does Scratch teach real coding?

Yes. Loops, conditions, variables, events and lists are real programming ideas, and Scratch's own code turns a single "move" block into trigonometry. Children who learn Scratch well find Python easier because the thinking is already in place.

### When are Scratch classes on Peru time?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 15:30 in Peru is 02:00 the next day for the mentor.

### Group or one to one for a young child?

A group of fifteen to twenty of the same age suits a child who likes sharing their work. One to one suits a six year old who needs more help with the mouse and the English, a shy child, or one far ahead of their age group. You can change format later.

### When should my child move from Scratch to Python?

When long scripts become hard to manage, when they read and type comfortably in English, and when they predict what a script will do most of the time. That is usually between 9 and 11, but the signs matter more than the age.

### Will my child just remix other people's projects?

Only after explaining what the original does, and then changing one thing at a time with a prediction first. Every remix is followed by a similar project built from an empty stage, so the idea becomes the child's own.

### Are you part of Scratch, MINEDU or a school?

No. Modern Age Coders is an independent online school, not part of the Scratch Foundation, MINEDU or any Peruvian school. We award no Peruvian grades; finishing children receive a completion certificate from us.

## More for Scratch families

- [Scratch coding classes](/scratch-coding-classes-for-kids): Our main Scratch course page.
- [Scratch not working?](/scratch-not-working-help): Common Scratch problems and quick fixes.
- [Python at ten](/python-for-10-year-olds): What comes after Scratch for many children.
- [AI tools by age](/ai-tools-age-guide): The youngest age each AI tool allows.
- [Thinking first](/we-teach-you-how-to-think): Why we ask children to predict.
- [How we teach](/how-we-teach): One class described from start to end.

## Contact

Book the free first class at [https://learn.modernagecoders.com/scratch-for-kids-peru](https://learn.modernagecoders.com/scratch-for-kids-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
