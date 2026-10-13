---
title: "Coding for Year 7 in Australia: From Blocks to Python"
description: "Coding for Year 7 in Australia: what Digital Technologies expects in the first year of high school, from tracing algorithms to Python, and how to get ready."
canonical: https://learn.modernagecoders.com/coding-for-year-7-australia
source: src/pages/coding-for-year-7-australia.html
---
> Coding for Year 7 means writing programs in a general-purpose language such as Python, after years of visual block coding in primary school. The Australian Curriculum v9 expects that by the end of Year 8 students "design and trace algorithms and implement them in a general-purpose programming language". The best preparation is a term or two of Python before or during Year 7, plus practice predicting what a program will do before running it.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Coding for Year 7

Australia · Years 7 and 8 · Live online

# Coding for Year 7

Year 7 is a turning point for young programmers in Australia, and few families notice it happening. Through primary school, coding in class mostly means dragging blocks on a screen. From Year 7 the Australian Curriculum expects students to write programs in a general-purpose language, the kind professionals type every day, and to plan them first with flowcharts and pseudocode. At the same moment, students are changing schools, meeting new teachers and juggling a timetable full of subjects. This page explains exactly what the curriculum asks of Years 7 and 8, why the move from blocks to text catches some students out, and how a child can arrive in Year 7 already comfortable rather than scrambling to catch up.

At a glance: For: Years 6, 7 and 8; Language: Usually Python; Also covers: Flowcharts and pseudocode; Skills: Tracing, debugging, functions; Curriculum: Australian Curriculum v9; Format: Live online lessons; Group: Fifteen to twenty, or one to one; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three ways to get ready for Year 7

Pick by how much coding your child has already done.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For upper primary students, about 9 to 12, who want a head start in text coding before high school.
- [Python for Teens](/courses/python-complete-masterclass-teens): For students already in Year 7 or 8, from first lines of code to confident, well-organised programs.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): For students who need the thinking first: breaking problems down, patterns and algorithms, ages 7 to 12.

## What Digital Technologies asks of Years 7 and 8

The Australian Curriculum v9 groups Years 7 and 8 into one band. Its band description sets the scene in one sentence: students apply computational thinking by "designing and modifying algorithms, and implementing them in a general-purpose programming language".

**Programming content descriptions for Years 7 and 8, Australian Curriculum v9 (quoted)**

| Code | Students learn to |
|---|---|
| AC9TDI8P04 | "define and decompose real-world problems with design criteria and by creating user stories" |
| AC9TDI8P05 | design algorithms with nested control structures and show them as flowcharts and pseudocode |
| AC9TDI8P06 | "trace algorithms to predict output for a given input and to identify errors" |
| AC9TDI8P09 | write, change and fix programs that use control structures and functions, in a general-purpose language |

### The skill most students underrate

Tracing is the quiet star of the list. For AC9TDI8P06, ACARA suggests students might do a "desk check with a table of input, variables and output": writing down, line by line, what every variable holds as the program runs, before the computer runs it.

Students who can trace find their own bugs. Students who cannot spend Year 7 changing things at random until the program works, and learning very little from it.

### Where the security ideas come in

The same band asks students to investigate how data is sent and secured on networks (AC9TDI8K02). One of ACARA's example activities is "exploring simple encryption and decryption algorithms, for example ROT13 and XOR".

That suggestion is a gift to anyone teaching a new programmer, because both ciphers are short enough to write in a lesson and strange enough to be interesting. We work one through below.

The achievement standard for the end of Year 8 sums it up: students "design and trace algorithms and implement them in a general-purpose programming language". A child who leaves Year 6 able to read and predict simple Python is well placed to meet that standard on time.

Checked on 7 October 2026 against ACARA's Word download of the [Digital Technologies content for Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx). Quotation marks show ACARA's exact words; the other rows are close summaries. NSW and some other jurisdictions publish their own syllabuses, so a school's course may be organised differently.

## Why the jump from blocks to text catches students out

Most Year 7 students have coded before, usually in Scratch. The ideas carry over. The surprises are almost all about the medium.

**What changes when a student moves from blocks to a typed language**

| In block coding | In Year 7 text coding | What helps |
|---|---|---|
| Blocks only fit together in valid ways | One missing bracket stops the whole program | Reading error messages aloud and finding the line they name |
| Everything is visible on one screen | Programs grow past what fits on screen | Splitting code into named functions |
| A sprite shows what is happening | Output may be a single line of text | Printing values while the program runs |
| Mistakes look obvious | Mistakes hide inside a correct-looking line | Tracing by hand before running |

### The error message is a friend

The first time a Python program refuses to run, many students read the red text, panic and delete the last thing they typed. A better habit is to read the message slowly: it names a line number and usually the kind of mistake.

We spend real lesson time on this, because a student who trusts error messages becomes independent within weeks.

### Functions are the big new idea

Scratch has custom blocks, but many primary students never use them. In Year 7, functions become central: naming a piece of code so it can be reused and tested on its own.

Functions are also how a long program stays readable, which matters once a school task runs to a hundred lines.

Year 7 is the first year of secondary school across Australia; in the ABS's words, secondary school runs "from Year 7 to Year 12 in all states and territories". That was not always so: Queensland and Western Australia moved Year 7 into secondary school in 2015, and the ABS records that in 2022 South Australia "completed transition to year 7 secondary for all government and non-government schools". So a Year 7 student everywhere now meets text coding in a new school, often with a specialist teacher. Families still choosing a first language may find our guide to [kids coding languages](/kids-coding-languages-australia) useful.

Source, read 7 October 2026: [ABS, Schools methodology, 2025](https://www.abs.gov.au/methodologies/schools-methodology/2025), schooling structure and the history of changes to the year in which secondary school begins.

## ROT13 and XOR: two ciphers that undo themselves

Here is the kind of lesson we run with Year 7 students, built on ACARA's own suggestion. The surprising idea at its heart is a function that, applied twice, gives back exactly what you started with.

**ROT13** replaces each letter with the letter thirteen places further along the alphabet, wrapping round from Z back to A. Because the alphabet has 26 letters, moving thirteen places and then thirteen more is a full lap. So ROT13 is its own decoder: run it once to scramble a message, run it again to unscramble it. Mathematicians call a function like this **self-inverse**.

**ROT13 by hand (our worked example, checked in Python)**

| Step | H | E | L | L | O |
|---|---|---|---|---|---|
| Original letter | H | E | L | L | O |
| Thirteen places on | U | R | Y | Y | B |
| Thirteen places again | H | E | L | L | O |

### XOR does the same with numbers

Computers store every letter as a number. In the code most systems use, capital H is 72. XOR (exclusive or) compares two numbers bit by bit and keeps a 1 wherever the bits differ.

Take a secret key of 42. Then 72 XOR 42 gives 98, which happens to be the code for a lower-case b. Apply XOR with 42 to 98 and you get 72 again: H is back. XOR with the same key is self-inverse too, which is why it appears inside real encryption.

### What students write

In Python, ROT13 is a short function with a loop over the letters, a calculation with the remainder operator to wrap round the alphabet, and a test for whether each character is a letter at all.

Students then write a second function that applies the first one twice and checks the result matches the original. That test is the real lesson: it turns "I think it works" into evidence.

### Trace it first

Before running, students fill in a table: each letter, its position, its position plus thirteen, the wrapped position and the new letter.

### Then break it

What happens with a space, a full stop or a lower-case letter? Each answer is a small decision the student has to program.

### Then question it

ROT13 is easy to break, so why is it taught? Because it shows the shape of encryption without the maths of real ciphers.

We check every worked example ourselves: HELLO becomes URYYB and back, and 72 XOR 42 is 98 and back to 72. Students are encouraged to check ours too.

## A ten-week plan for a Year 7 student new to text coding

Australian school terms run roughly ten weeks. This is how we would use one with a student who has done some Scratch but no typed code.

**Our ten-week starter plan (one or two live lessons a week)**

| Weeks | Focus | By the end the student can |
|---|---|---|
| 1 and 2 | First programs, printing and input | Run a program, read an error message and fix a typo |
| 3 and 4 | Variables and decisions | Write a small quiz that keeps score and reacts to answers |
| 5 and 6 | Loops and tracing | Predict a loop's output in a desk check table before running it |
| 7 and 8 | Functions | Split a program into named functions and test each one |
| 9 and 10 | A small project | Build and explain a ROT13 message machine or a guessing game |

### Flowcharts and pseudocode too

Because the curriculum asks for algorithms to be planned in flowcharts and pseudocode, students draw at least one plan before each project. It feels slow at first and saves time by week six.

We keep the plans simple: boxes, diamonds and arrows on paper, photographed and shared in the lesson.

### Faster for some students

A student who has done Python before may cover this plan in five weeks and move on to lists, files and larger projects.

A student who finds typing hard may spend longer on weeks one to four. The plan bends to the student, not the other way round.

## How parents can help without knowing how to code

You do not need to read Python to support a Year 7 coder. A few habits matter far more than technical knowledge.

### Ask for a prediction

Before they run a program, ask what they expect to happen. Matching the prediction to the result is the core habit of programming.

### Ask them to teach you

Explaining a program to someone who does not code exposes the parts the student only half understands.

### Protect the struggle

Being stuck for ten minutes on a bug is normal and useful. Resist fixing it for them, and resist letting an AI tool fix it for them too.

About AI tools: many Year 7 students now have access to chatbots that write code. Used well, they explain error messages. Used badly, they hand over working code the student cannot explain, which collapses the moment a teacher asks a question. Our page on [how we teach](/how-we-teach) sets out how lessons keep students explaining their own code, with or without an AI tool open.

## Four stages through Years 7 and 8

With one or two lessons a week, most students reach the third stage during Year 7.

**From first lines to confident programs**

| Stage | What your child can do |
|---|---|
| 1. Reads code | Predicts what a short program will print and explains each line |
| 2. Writes code | Writes a working program with variables, decisions and loops from a blank file |
| 3. Organises code | Splits a longer program into functions and tests each one separately |
| 4. Plans code | Plans a project in pseudocode, builds it, traces it and fixes it independently |

### Is Year 7 too late to start?

Not at all. Plenty of strong programmers wrote their first line in Year 7 or later. Starting in Year 7 just means pairing the text coding with the thinking skills primary school would otherwise have built.
For those students we often add a few weeks of problem-solving work alongside Python.

### Fitting it round school

Lessons are after school or at the weekend and continue across the four school terms if a family wants. Billing is monthly, so pausing in a busy term is easy.
We do not do or check assessed school work; we build the skills that make it manageable.

## Courses for Years 6 to 8

Grouped by where a student is starting from.

### Before Year 7

Upper primary

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): A first text language with games and small AI projects.
- [Problem Solving for Kids](/courses/problem-solving-and-computational-thinking-for-kids): Decomposition, patterns and algorithms before code.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): For students who have not yet coded with blocks.

### During Years 7 and 8

Lower secondary

- [Python for Teens](/courses/python-complete-masterclass-teens): Python from first lines to organised, tested programs.
- [Web Development for Kids](/courses/kids-ai-web-development-course): HTML, CSS and a first look at JavaScript.
- [Maths Through Coding](/courses/maths-through-coding): Python used to explore the maths of Years 5 to 10.

### Stretch

Keen Year 8 students

- [Competitive Programming for Teens](/courses/competitive-programming-for-teens-course): Algorithm puzzles for students who love a challenge.
- [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web): A second language through interactive web pages.
- [Cybersecurity for Teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Ethical, defensive security for students drawn to ciphers.

## Live lessons around a Year 7 timetable

Our teachers are based in India. Every Australian state is ahead of India time, by between two and a half hours (Perth) and five and a half (the eastern states in summer), so after-school lessons in Australia fall in the Indian afternoon.

- **Weekday, late afternoon** Popular with Year 7 students who travel to a new school.
- **Weekday, early evening** Works around sport and homework.
- **Saturday or Sunday** A longer session for project work.

- **A free first class** The teacher checks what your child can already read and write in code.
- **Groups** Fifteen to twenty students of a similar level, usually all in Years 6 to 8.
- **One to one** Helpful for a student who is anxious about text coding or far ahead of their class.
- **Their own code** The student types every line. Teachers explain, ask and point at errors.
- **Parents can watch** Every lesson is live, so you can see exactly how your child is taught.
- **No ghost-writing** Assessment tasks are never written or checked by our teachers.

## Fees for Year 7 coding

Australian families pay one monthly price in US dollars. Nothing is charged to join, and there is no term-long contract.

- Free first class: USD 0. A short Python task with a teacher. A recommended starting course. No card or bank details.
- Group batch: USD 100 a month. Fifteen to twenty students per class. The same teacher each week. Classmates of a similar level. Stop after any month.
- One to one: USD 150 a month. Lessons shaped around your child. A pace that suits them. Time for one ambitious project.

## What parents ask about coding in Year 7

### What is coding in Year 7?

In Australia, Year 7 is usually when students move from block coding to writing programs in a typed, general-purpose language such as Python, and learn to plan programs with flowcharts and pseudocode.

### What coding language is used in Year 7?

The Australian Curriculum does not require one language, but gives Python, JavaScript or C# as examples of a general-purpose language. Python is the most common choice for beginners.

### What is a desk check?

A desk check is working through a program by hand, line by line, writing down what each variable holds and what the program outputs. ACARA suggests it for tracing algorithms in Years 7 and 8.

### What is ROT13?

ROT13 is a simple cipher that replaces each letter with the letter thirteen places further along the alphabet. Applying it twice returns the original message, so the same function both scrambles and unscrambles.

### Should my child learn Python before Year 7?

It helps. A term or two of Python in Year 5 or 6 means the ideas in Year 7 Digital Technologies arrive as revision rather than as a shock. It is not required, though.

### My child loved Scratch but struggles with Python. Is that normal?

Very. The thinking carries over; the typing, punctuation and error messages are new. Most students settle within a few weeks with practice reading error messages.

### Do you help with school coding assignments?

We teach the skills that school tasks draw on, but we never write, complete or check assessed work. That keeps the work honestly the student's own.

### Is Year 7 the start of high school everywhere in Australia?

Yes. According to the ABS, secondary school runs from Year 7 to Year 12 in all states and territories, after Queensland and Western Australia changed in 2015 and South Australia completed its change in 2022.

### How often should a Year 7 student have lessons?

Once a week is enough to make steady progress; twice a week suits a student preparing for a particular term or catching up quickly.

### What does it cost?

The opening lesson is free with no card needed. Monthly prices for group places and private lessons are listed in the fees section further up this page.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): The index of our pages for Australian students.
- [Kids coding languages](/kids-coding-languages-australia): Which language to start with, and why.
- [After Scratch: Python](/after-scratch-next-step-python-australia): The step from blocks to text.
- [Coding for 11 and 12 year olds](/coding-classes-for-11-and-12-year-olds-australia): The last primary years, just before Year 7.
- [Python for 12 year olds](/python-for-12-year-olds): A closer look at Python at this age.
- [NAPLAN numeracy practice](/naplan-numeracy-practice-online): For the Year 7 NAPLAN tests in March.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-for-year-7-australia](https://learn.modernagecoders.com/coding-for-year-7-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
