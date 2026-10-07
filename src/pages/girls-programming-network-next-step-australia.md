---
title: "After a Girls' Programming Network Workshop: Next Steps"
description: "What Girls' Programming Network workshops offer in Australia, the cities they run in, and practical ways to keep coding in Python between workshops."
canonical: https://learn.modernagecoders.com/girls-programming-network-next-step-australia
source: src/pages/girls-programming-network-next-step-australia.html
---
> Girls' Programming Network runs free, full-day programming workshops each school term around Australia, which it describes as coding workshops for high school girls and gender minorities, hosted by volunteer technologists and teachers. It has nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane, and GPN Junior for primary Years 3 to 6 in Sydney. Between workshops, regular practice keeps the skills growing.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / Girls' Programming Network next steps

Australia · Primary and high school · Checked at Girls' Programming Network

# After a Girls' Programming Network workshop

A Girls' Programming Network workshop is a full day of building something real in code, alongside mentors and new friends, and many students leave wanting more. The gap between one workshop and the next is a whole school term, which is long enough for new skills to fade. This page explains what GPN runs and where, in the organisers' own words, points to the resources GPN itself recommends, and then sets out a simple way to keep coding between events, including one Python habit that makes every project easier to grow. We are independent of GPN and admire what it does.

At a glance: Organisation: Girls' Programming Network (GPN); Workshops: Free, full day, each school term; Main program: High school students; GPN Junior: Primary Years 3 to 6, Sydney; Nodes: Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide, Brisbane; Run by: Volunteer tutors; We provide: Weekly Python and coding classes; We are not: Part of GPN. Rated 4.9 across 547 Google reviews.

## Three courses for keeping the coding going

Python is the natural next step for many GPN students, so these lead there.

- [Princess Coders](/courses/princess-coders-complete-coding-masterclass): Our coding course designed for girls and women, from complete beginner upwards.
- [Python for teens](/courses/python-complete-masterclass-teens): A full path from first programs to structured projects for high school students.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For primary students coming from GPN Junior who are ready for text code.

## What Girls' Programming Network runs, and where

Everything below is taken from GPN's own site, read on 7 October 2026.

**Girls' Programming Network at a glance, from the organisers**

| What | Details |
|---|---|
| Workshops | Free, full-day programming workshops each school term, hosted by local technologists and teachers |
| Who they are for | In GPN's words, "Coding workshops for high school girls and gender minorities", for beginners and experienced coders alike |
| Where | Nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane |
| GPN Junior | A program for primary school students in Years 3 to 6, in Sydney |
| Tutors | Volunteers: university students, IT professionals, teachers, parents and hobbyist coders |
| Tutoring path | High school students in Years 9 to 12 who have attended a main GPN event can be invited to tutor |

GPN lists six values: fun, aspirational and relevant, challenging, diverse, social, and network. Its workshops mix learning with games, computing puzzles, mentors and new friends, and it says each student will be given an accessible challenge whether it is their first time coding or not.

GPN workshops are run by volunteer tutors, and students who keep coding can return as tutors from Year 9, which GPN presents as a way to build coding, public speaking and leadership skills.

GPN's own "more opportunities" page suggests installing the latest Python 3 at home, and lists places to keep learning, including Grok Learning from Year 4, Scratch from Year 3, MakeCode from Year 4 and Khan Academy from Year 6.

Workshop dates are announced by each node. GPN invites students to find their nearest node and join its mailing list to hear about the next event.

Sources: [Girls' Programming Network](https://www.girlsprogramming.network/); [GPN Junior](https://www.girlsprogramming.network/junior); [More opportunities](https://www.girlsprogramming.network/more-opportunities); [GPN values](https://www.girlsprogramming.network/gpn-values). Read 7 October 2026. We are not part of GPN.

## Turning one great day into a steady habit

A school term is roughly ten weeks. Without practice, much of a workshop's new learning fades long before the next one. Small, regular sessions keep it alive.

**A simple between-workshops plan, about an hour a week**

| Week | Do this | Why it helps |
|---|---|---|
| 1 | Rebuild the workshop project from memory, without looking | Shows exactly which parts were really understood |
| 2 and 3 | Change it: add a feature, alter the rules, new text | Changing code teaches more than copying it |
| 4 and 5 | Start a small project of your own choosing | Ownership keeps motivation high |
| 6 and 7 | Tidy it up: names, functions, comments | Makes the code easy to grow (see the lesson below) |
| 8 to 10 | Show it to someone and explain how it works | Explaining is the fastest way to find gaps |

The plan works with any of the free tools GPN recommends. What matters is regularity: an hour every week does more than one long session before the next workshop.

A short coding journal helps too: one line per session saying what was built and what was confusing. By the next workshop, the confusing items make a ready list of questions for a tutor.

Some students want a teacher between workshops, especially once their own projects grow beyond what a single day covers. That is where weekly classes can sit alongside GPN rather than replace it.

Students in Year 9 and above can also aim to return as GPN tutors. Teaching a concept is a powerful way to master it.

## Don't repeat yourself: turning copied code into a function

Workshop projects grow fast, and fast-growing code is often copied and pasted. One idea keeps it manageable. The quiz program below is our own example.

### The copied version

A Python quiz asks three questions. For each, it prints the question, reads an answer with input(), compares it with the right answer, and prints "Correct" or "Not quite". Each question takes five lines, copied three times.

### The problem

A student notices that "Paris" is marked wrong when someone types "paris". The fix, comparing answers in lower case, has to be made in three places. Miss one and the bug survives.

### The function version

The five lines become one function, ask(question, answer), with the question and answer as parameters. The questions go in a list, and a loop calls the function for each one.

**Copied blocks compared with one function, as the quiz grows (counts for our example)**

| Task | Copied blocks | One function and a list |
|---|---|---|
| Lines of code for 3 questions | 15 | 13 |
| Lines added for a 4th question | 5 | 1 |
| Lines of code for 10 questions | 50 | 20 |
| Places to edit to fix the capital-letter bug | 3 (or 10 with 10 questions) | 1 |
| Places to edit to change the "Correct" message | 3 (or 10 with 10 questions) | 1 |

In the function version, the function itself is six lines, the list of questions takes one line per question plus an opening and a closing line, and the loop is two lines. At three questions the saving is small; at ten it is large, and the real benefit is that every improvement, such as ignoring capital letters or changing a message, happens once and applies everywhere. This is the principle programmers call "don't repeat yourself". A useful rule for students: if a block of code has been copied a second time, stop and ask whether it should become a function, and what should be its parameters.

### Finding the parameters

Compare the copied blocks side by side and highlight what differs between them. Here, only the question text and the right answer change; everything else is identical. The parts that differ become the parameters, and the parts that stay the same become the function body.

That comparison is a skill worth practising on its own, with any project that has grown by copying.

### Why it matters later

Every larger program, from a game to a website, is built from functions that are called many times with different inputs. Learning to spot repetition early makes the step to bigger projects much smoother.

It also makes code easier to share with a tutor or teammate, because a named function says what it does in a way five copied lines never can.

## How weekly classes can sit alongside GPN

GPN offers a free, social day of coding each term. Weekly classes can fill the weeks in between with steady progress.

Our classes pick up where a workshop leaves off: Python fundamentals, functions and data, then small projects the student designs. A student can bring a workshop project to class and grow it with a teacher.

Princess Coders, our course designed for girls and women, runs from complete beginner level, and our Python courses for kids and teens cover the same ground at each age.

We are not part of GPN and do not run its workshops or speak for it. Families should look to GPN directly for workshop dates and eligibility.

We do not promise particular outcomes. Our aim is steady skill and confidence, measured by what a student can build and explain.

**A term of weekly classes alongside GPN workshops**

| Weeks | Focus | Sign of progress |
|---|---|---|
| 1 and 2 | Variables, input and decisions | Writes a short interactive program unaided |
| 3 and 4 | Loops and lists | Repeats work with a loop instead of copying |
| 5 and 6 | Functions and parameters | Turns a repeated block into a function |
| 7 and 8 | A small project of her own design | Plans and builds a working first version |
| 9 and 10 | Improving and presenting | Explains the project and one design choice |

## Four rungs from first workshop to tutor

Every student moves at her own pace; these rungs describe the order.

**From a first workshop to helping others learn**

| Around | Rung | The sign it is secure |
|---|---|---|
| Years 3 to 6 | 1. Enjoys making things | Finishes a small project in Scratch or blocks |
| Years 7 and 8 | 2. Writes Python | Builds a short program with input, decisions and loops |
| Years 8 to 10 | 3. Structures code | Uses functions and lists to keep projects tidy |
| Years 9 to 12 | 4. Teaches others | Explains concepts clearly enough to tutor a beginner |

### If motivation dips

Switch to a project that matters to her: a game, a quiz about a favourite topic, a tool for a hobby.
Code with a friend. GPN's emphasis on the social side of coding is worth copying at home.

### Related reading

For moving from blocks to text, see [after Scratch, the next step is Python](/after-scratch-next-step-python-australia).
Students who enjoy building might try [Young ICT Explorers](/young-ict-explorers-project-help).

## Nine courses for students who want more coding

Grouped by stage. Every card opens its full course outline.

### Starting out

Primary and early secondary

- [Scratch for kids](/courses/scratch-programming-complete-course): Projects in blocks, from Year 3.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first text language.
- [Princess Coders](/courses/princess-coders-complete-coding-masterclass): Designed for girls and women.

### Building in Python

High school

- [Python for teens](/courses/python-complete-masterclass-teens): From first programs to projects.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic and algorithms.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Python with real data.

### Making things

Web, games and apps

- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): Real websites from scratch.
- [Game development for teens](/courses/complete-game-development-masterclass-for-teens): Unity and C#.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Mobile apps that work.

## Weekly live classes between workshops

Our teachers are in India. Burnie and Hobart are four and a half hours ahead of India time in winter and five and a half in summer, and Perth two and a half hours ahead all year. An Australian after-school class lands in the Indian afternoon, so a regular weekly slot is easy to keep.

- **After school, midweek** Concepts practised on short exercises.
- **Weekend** Growing a project of her own design.
- **Before a workshop** A quick refresh so she arrives ready to go further.

- **Projects she chooses** Interest keeps students coding between events.
- **Understanding first** Every line explained, never just copied.
- **Friendly groups** Five to ten students at a similar level.
- **One-to-one option** For a student who wants a personal pace.
- **Alongside GPN** Classes complement workshops; they never replace them.
- **No outcome promised** We build skill and confidence, week by week.

## Fees

Classes are charged monthly in US dollars, our international rate, with no joining fee and no lock-in. GPN workshops are free and run by GPN; they have nothing to do with our fees.

- Free first class: USD 0. A first class with a teacher, at no cost. Bring a workshop project to look at together. No card details.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher across the term. Projects shared and discussed. A certificate at the end.
- One to one: USD 150 a month. A teacher for one student. Lessons built around her own projects. Weekly times chosen with you.

## What students and parents ask

### What is the Girls' Programming Network?

A volunteer-run organisation that holds free, full-day programming workshops each school term around Australia, described on its site as coding workshops for high school girls and gender minorities.

### Where does GPN run?

GPN lists nodes in Sydney, Perth, Canberra, Melbourne, Burnie, Adelaide and Brisbane. Each node announces its own workshop dates.

### Is there anything for primary students?

Yes. GPN Junior is a program for primary school students in Years 3 to 6 in Sydney, according to GPN.

### What does "don't repeat yourself" mean?

A programming principle: when the same code appears more than once, turn it into one function with parameters, so changes and fixes happen in one place.

### What should my daughter do between workshops?

About an hour of coding a week: rebuild the workshop project, change it, then start a small project of her own. GPN also recommends installing Python 3 at home.

### Can students become GPN tutors?

GPN invites high school students in Years 9 to 12 who have attended a main GPN event to volunteer as tutors.

### Are your classes part of GPN?

No. We are independent of GPN. Our weekly classes can sit alongside its free workshops for students who want regular teaching in between.

### Do you have a course just for girls?

Yes. Princess Coders is our coding course designed for girls and women, starting from complete beginner level.

### What language should come after a workshop?

Python is a natural choice for many students; GPN's own resources page starts by recommending Python 3. Younger students may stay with Scratch a little longer.

### What happens in the free class?

A teacher looks at what she has built, works through one new idea with her, and suggests a simple plan for the weeks ahead.

## More for Australian students

- [After Scratch, Python](/after-scratch-next-step-python-australia): Making the jump to text code.
- [Young ICT Explorers](/young-ict-explorers-project-help): A national project competition.
- [Student hackathons](/australian-student-hackathons): Team builds and who can enter.
- [Kids coding languages](/kids-coding-languages-australia): Which language for which stage.
- [Coding classes in Australia](/coding-classes-in-australia): Every state and every age.
- [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Contests through the year.

## Contact

Book the free first class at [https://learn.modernagecoders.com/girls-programming-network-next-step-australia](https://learn.modernagecoders.com/girls-programming-network-next-step-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
