---
title: "Coolest Projects UK | Project Ideas and How to Enter"
description: "Coolest Projects UK explained: seven categories including a new AI one, open to all ages, every checked entry shown, and how to build for a stranger."
canonical: https://learn.modernagecoders.com/coolest-projects-uk-project-ideas
source: src/pages/coolest-projects-uk-project-ideas.html
---
> Coolest Projects is run by the Raspberry Pi Foundation, a UK registered charity, number 1129409, and is open to young people of all ages: those under 13 are registered by an adult and those 13 and over may register themselves. There are seven categories: Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence, which the organiser marks as new for 2026. The organiser says "we check every entry, and then we'll let you know when your project is in our online gallery or has a place at an in-person event", after which participants join an event or the online celebration and share the project; VIP judges pick out favourites. Coolest Projects UK 2026 took place in Bradford in May with more than 200 young people. We teach the building, live online for ages 6 to 67. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Coolest Projects UK

United Kingdom · All ages · Seven categories

# Coolest Projects UK project ideas

Coolest Projects is the least competitive thing on our competitions calendar, and that is its point. The Raspberry Pi Foundation checks every entry and then puts it in the online gallery or gives it a place at an event; there is no ranking, no elimination and no minimum standard of ambition. A seven-year-old's Scratch animation and a sixteen-year-old's hardware build stand in the same room. Which moves the interesting question away from whether a project is good enough and onto something harder: whether it still works when somebody who did not build it sits down in front of it.

At a glance: Organiser: The Raspberry Pi Foundation; Charity number: 1129409; Ages: All, with adults registering under 13s; Categories: Seven; New for 2026: Artificial Intelligence; Every checked entry: Goes in the gallery or to an event; UK event 2026: Bradford, in May; Ranking: None. Rated 4.9 across 547 Google reviews.

## Three courses for a project builder

Pick by what the child wants to make, not by their age.

- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): For the Scratch and Games categories: a first project taken all the way to something that works without you.
- [App development](/courses/complete-app-development-masterclass-for-teens): For the Mobile apps category: screens, taps and saving what the user did.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): For the AI category, new in 2026: a model trained on real data, and an honest account of how well it works.

## Seven categories, no ranking, everybody shown

Facts read at the organiser's own pages on 20 September 2026.

**Coolest Projects as the Raspberry Pi Foundation describes it**

| Part | What the organiser says | What it means for a family |
|---|---|---|
| Who runs it | The Raspberry Pi Foundation, a UK registered charity, number 1129409 | The same charity behind Bebras and Astro Pi |
| Who can enter | Young people of all ages; under 13s are registered by an adult, 13 and over may register themselves | No lower age limit at all |
| Categories | Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence | Seven, so almost anything a child builds has a home |
| New for 2026 | The Artificial Intelligence category | The first year an AI project has a category of its own |
| What happens next | "We check every entry, and then we'll let you know when your project is in our online gallery or has a place at an in-person event" | Checked, not judged against a bar |
| Then | Participants join an in-person event or the online celebration and share the project | The showing is the event |
| Judging | VIP judges pick out favourites to highlight | Recognition without a ranking |
| The UK event in 2026 | Bradford, in May, with more than 200 young people | A real hall, with real tables |

The absence of a ranking changes who should enter, and the answer is almost everybody. A child who would never sit a timed paper, or who finds competition unpleasant, can put a project in a gallery and be treated exactly like everyone else. We have not found another UK technology event that is this open.

It also means the entry deadline matters more than the quality. A finished small thing submitted on time beats an ambitious thing that was not ready, because there is no category for nearly.

The AI category being new in 2026 is worth knowing for a family deciding what to build this year. A project that uses a trained model now has somewhere obvious to go, and the field is less crowded than Scratch or Games.

Dates move. The organiser had not published 2027 event dates on the pages we read, so check the organiser rather than a page like this one, including ours. What we can say is that entries were open when we looked and that the UK event in 2026 was in Bradford in May.

Sources: [Coolest Projects](https://online.coolestprojects.org/), read 20 September 2026, and the Raspberry Pi Foundation's blog post of 21 July 2026 on the Bradford event. Modern Age Coders is not connected with the Raspberry Pi Foundation.

## It has to run on somebody else's machine

The commonest way a good project fails at a showcase table has nothing to do with the idea. Here it is, in five lines and one step.

We wrote a tiny program: open a file called scores.txt, read the numbers in it, print the highest. Five lines, correct, and it does exactly what it should. Then we did the only thing a judge or a visitor ever does, which is run it from somewhere other than the folder it was written in.

**Our run of 20 September 2026: the same program, two places**

| Where it was run from | What happened |
|---|---|
| The folder the program lives in | highest score: 40 |
| One folder along | FileNotFoundError: No such file or directory: 'scores.txt' |

### Nothing in the code changed

Not a character. The program assumed it would be started from its own folder, and nobody ever tells you that assumption is there until it breaks.

### Why it always happens at the table

At home a project is run the same way every time. At an event it is run from a different computer, a different folder, sometimes by somebody who does not know where the files are.

### The five-minute fix

Ask the program where it lives and look for its files there, rather than wherever the shell happens to be. In Python that is a single line near the top.

The general form of the lesson is worth more than the fix. A project carries assumptions about the world it will run in: this folder, this screen size, this internet connection, this version of the language, this file that only exists on the machine where it was written.

Testing means breaking those assumptions on purpose, once, before someone else does it by accident. Move the folder. Try it on a different computer. Turn the wifi off. Hand the laptop to a sibling and say nothing.

That last test is the one we recommend hardest. A child who watches somebody else use their project without help learns more in two minutes than in a week of building, and every single time there is something they did not expect.

It is also exactly what happens at an event in Bradford in May, in front of a stranger, with a queue behind them.

The program, both runs and the error message are ours, produced on 20 September 2026. Nothing here is taken from any Coolest Projects entry.

## One idea per category, and why each one finishes

The ideas below are ours, written to be small enough to complete and interesting enough to explain at a table.

**Seven categories, seven projects that fit in a term**

| Category | An idea that finishes | Why it works at a showcase |
|---|---|---|
| Scratch | A quiz about the child's own town that refuses silly answers and says why | Visitors can play it in thirty seconds and it never breaks |
| Games | A one-screen game with a scoreboard that survives being closed and reopened | Saving state is the hard part and the part worth explaining |
| Web | A page that shows one real public dataset, with a sentence saying where the data came from | Small, honest, and a good answer to "how do you know?" |
| Mobile apps | A timer or habit tracker the child actually uses | Something used daily is always more convincing than something impressive |
| Hardware | A sensor that lights up when a room gets too dark or too loud | Physical, obvious, and demonstrable without a screen |
| Advanced programming | A tool that solves a problem the child has, like renaming a hundred photos properly | Explains itself in one sentence and shows real work |
| Artificial intelligence | A classifier trained on the child's own labelled photos, with its mistakes shown too | Showing where it fails is more impressive than showing where it works |

Every idea in that table is deliberately modest, because the thing that stops projects is scope rather than skill. A finished small project gets shown; an unfinished big one does not, and no showcase has a category for what you meant to build.

The last row is worth dwelling on now that AI has its own category. A project that says "it gets this right about eight times in ten, and here are the ones it gets wrong" is better work, and better science, than one that only shows the successes.

For the write-up, three sentences do more than three paragraphs: what it does, what was hard, and what you would do next. Children under-sell the second one, which is the one adults find most interesting.

And whatever gets built, test it away from the machine it was made on. That is the single piece of advice on this page that comes from watching projects fail rather than from a rule.

## Four rungs to a project that survives a stranger

The rungs are about finishing and handing over, not about difficulty.

**From an idea to something somebody else can use**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Any age | 1. It works for you | Runs start to finish on the machine it was built on |
| Any age | 2. It works elsewhere | Runs from a different folder, on a different computer |
| Any age | 3. It survives a user | A sibling can use it without being told anything |
| Any age | 4. It explains itself | The builder can say what it does, what was hard and what is next |

### If the deadline is close

Cut a feature rather than miss the date. Every checked entry is shown, and an unfinished project is not an entry.
Spend the last hour testing it somewhere else rather than adding to it.

### After the showcase

The same project usually makes a good starting point for the next year, one category up.
Other things a young builder can enter are on the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar).

## Courses by what a child wants to make

Grouped to match the categories, with each syllabus a click away.

### Scratch and games

Ages 6 to 11

- [Scratch for kids](/courses/scratch-programming-complete-course): A first language and a first finished project.
- [Game development for kids](/courses/game-development-masterclass-for-kids): Scratch, Roblox and Minecraft, properly.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): Building things that move, before anything is typed.

### Apps and web

Ages 10 to 16

- [App development](/courses/complete-app-development-masterclass-for-teens): Screens, taps and what the app remembers.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): A site with its own data behind it.
- [App making with blocks](/courses/block-coding-app-development-masterclass): Real apps without a semicolon in sight.

### Advanced and AI

Ages 12 to 18

- [Python from start to finish](/courses/python-complete-masterclass-teens): The language most advanced projects use.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): A trained model, and where it goes wrong.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Real data, honestly presented.

### Younger and wider

Starting out

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, taught patiently.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): Real code, in a world a child already knows.
- [Maths through coding](/courses/maths-through-coding): Programs that show why a method works.

## Project lessons, weekly, with a deadline in mind

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Early weekday evening** For primary-age builders.
- **Later weekday evening** For teenagers working on something larger.
- **Weekend morning** For a long stretch on one project.

- **Finishing taught explicitly** We help a child cut a project down to something that can actually be completed, which is most of the work.
- **Handover tested** Every project is run somewhere other than where it was built before we call it done.
- **Five to ten learners** Enough that ideas cross the room, few enough that every project gets looked at.
- **The child builds it** We teach and review. The project belongs to the young person and is theirs to submit.
- **One to one when useful** For an ambitious build, or a child who would rather work alone.
- **No role in the showcase** We do not register entries or have any relationship with the organiser.

## Fees

A monthly fee in US dollars, identical in every country but India, with no registration charge and no tie-in.

- Free first class: USD 0. A proper lesson with a teacher. A frank view of what a project needs. No payment details requested.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher weekly. Projects reviewed as they grow. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one builder. Shaped around the project. Useful in the weeks before a deadline.

## What parents and young builders ask

### Who runs Coolest Projects?

The Raspberry Pi Foundation, a UK registered charity, number 1129409. It is the same charity behind the UK Bebras Challenge and Astro Pi.

### What age do you have to be?

Any age. Young people under 13 are registered by an adult, and those aged 13 and over can register themselves or be registered by an adult.

### What are the categories?

Seven: Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence, which the organiser marks as new for 2026.

### Is it a competition?

Not in the usual sense. The organiser says every entry is checked and then placed in the online gallery or given a place at an in-person event, and VIP judges pick out favourites to highlight. There is no ranking to fall out of.

### Where was the UK event?

Coolest Projects UK 2026 took place in Bradford in May, with more than 200 young people taking part. Dates for the next one were not published on the pages we read.

### What makes a good project?

One that is finished and can be used by a stranger. Scope is what stops projects, not skill, and there is no category for what you meant to build.

### Why does my child's project break at events?

Usually because it assumes where it is being run from. We ran a five-line program that printed the right answer in its own folder and raised FileNotFoundError one folder along, with not a character of the code changed.

### How do we test for that?

Move the folder, run it on another computer, turn the wifi off, and hand it to a sibling without explaining anything. The last one finds the most.

### Should we enter an AI project?

If the child wants to, yes: the category is new for 2026 and less crowded than Scratch or Games. A project that shows where the model gets things wrong is better work than one that only shows successes.

### Do you enter projects for students?

No. We teach and review, the young person builds and submits, and we have no relationship with the organiser.

## More for young builders

- [Astro Pi Mission Zero](/astro-pi-mission-zero-and-space-lab-help): Run a Python program on the space station.
- [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk): November, free, and no programming at all.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every competition we could confirm, laid out by month.
- [Student labs](/student-labs): Projects our own students have finished and published.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Coding classes for UK children](/online-coding-classes-for-kids-uk): What a primary-age child learns first, and in what order.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coolest-projects-uk-project-ideas](https://learn.modernagecoders.com/coolest-projects-uk-project-ideas#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
