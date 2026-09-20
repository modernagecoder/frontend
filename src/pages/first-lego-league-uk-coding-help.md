---
title: "FIRST LEGO League UK Coding Help | Explore, Challenge, Futures"
description: "Help with FIRST LEGO League in the UK: the IET as delivery partner, age ranges, autonomous robot missions, the BIOGLOW season and what happens after it."
canonical: https://learn.modernagecoders.com/first-lego-league-uk-coding-help
source: src/pages/first-lego-league-uk-coding-help.html
---
> "The Institution of Engineering and Technology (IET) are proud to be the UK delivery partners for FIRST LEGO League." There are three programmes: Explore, "suitable for children age 6 to 10"; Challenge, "suitable for students aged 9 to 16 years old"; and the Futures Edition, "suitable for students aged 5 to 16 years old". In Challenge, "students complete missions through autonomous robot programming and present their innovation projects to judges", with options to compete at regional and national tournaments, and the 2026-27 season is called BIOGLOW, about ecosystems and protecting the planet. LEGO Education has said that "the 2026-2027 FIRST LEGO League season will be our last together", ending a partnership of nearly three decades, with its own Founders Edition running a final season in 2027/2028 and a Future Edition using computer science and AI hardware launching in 2026/2027. We teach the coding. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / FIRST LEGO League

United Kingdom · Ages 5 to 16 · BIOGLOW season

# FIRST LEGO League UK coding help

The thing that makes FIRST LEGO League different from every other robotics activity a child meets is a single rule: once the match starts, nobody touches the robot. It drives out, does what it was told, and comes back, and any mistake in the programming happens in front of everybody at full speed. That rule is why teams spend their season arguing about centimetres, and it produces a lesson about the physical world that no amount of screen programming teaches. This page covers the three programmes and their ages, what the coding actually involves, and the change coming after the 2026-27 season.

At a glance: UK delivery partner: The IET; Explore: Ages 6 to 10; Challenge: Ages 9 to 16; Futures Edition: Ages 5 to 16; This season: BIOGLOW; Robot: Autonomous: nobody touches it; Also judged: An innovation project; Tournaments: Regional and national. Rated 4.9 across 547 Google reviews.

## Three courses for a robotics team

Robot programming is ordinary programming with consequences. Pick by what the child can already write.

- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): For Explore and younger Challenge teams: sequence, repetition and conditions in a block language.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For a team moving from blocks to typed code, which several robot platforms now allow.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): For older Challenge teams: planning a mission sequence and reasoning about what can go wrong in it.

## Three programmes, one rule about the robot

Facts read at the IET and LEGO Education on 20 September 2026.

**FIRST LEGO League in the UK, as the organisers describe it**

| Programme | Ages | What a team does |
|---|---|---|
| Explore | "children age 6 to 10" | A first structured team experience with models and simple programming |
| Challenge | "students aged 9 to 16 years old" | "Students complete missions through autonomous robot programming and present their innovation projects to judges" |
| Futures Edition | "students aged 5 to 16 years old" | The newer edition, spanning the whole age range |
| This season | All | BIOGLOW, about how the world's ecosystems thrive |
| Tournaments | Challenge | "Options to compete at Regional and National Tournaments" |
| UK delivery | All | The Institution of Engineering and Technology |
| A season | All | LEGO Education describes "16+ hours of building, coding and researching" |

Two halves, and families usually only prepare for one. The robot missions get the attention because they are visible and exciting, but Challenge teams also present an innovation project to judges, which is a research and communication task much closer to a science fair than to robotics.

A team that builds a superb robot and prepares the project in the last fortnight leaves marks on the table. The same is true in reverse, and the split is worth agreeing in September rather than in January.

The age bands overlap deliberately. A nine-year-old can be in Explore or in Challenge depending on the child and the team, and the Futures Edition spans five to sixteen, so a school running a club across year groups has a way to include everyone.

Sixteen hours of building, coding and researching is the organiser's own description of a season, which is a useful expectation to set with parents: this is a term of lunchtimes, not a weekend.

Sources: [the IET on FIRST LEGO League](https://education.theiet.org/first-lego-league-programmes/) and [LEGO Education](https://education.lego.com/en-gb/first-lego-league/), read 20 September 2026. Modern Age Coders is not connected with the IET, LEGO Education or FIRST.

## The robot runs alone, and small errors add up

A team can only program the robot in advance, so the whole season turns on one question: how wrong will it be by the end of the run? We simulated it.

Imagine a robot driving a mission as a sequence of straight legs, each thirty centimetres, turning between them. Suppose each leg is driven within two degrees of the intended heading, which is a good robot on a good surface. Two degrees is nothing. Ten legs of nothing is not nothing.

**Our simulation of 20 September 2026: 5,000 runs per row, legs of 30 cm, each heading within 2 degrees**

| Legs driven | Average miss | Worst of 5,000 runs |
|---|---|---|
| 2 | 1.1 cm | 3.1 cm |
| 5 | 3.6 cm | 14.2 cm |
| 10 | 9.6 cm | 43.0 cm |
| 20 | 26.0 cm | 126.2 cm |

### Nothing here is biased

Each heading is as likely to be two degrees left as two degrees right. There is no systematic fault to fix, and the miss still grows with every leg.

### Why long missions fail

A ten-leg mission misses by about ten centimetres on average and can miss by forty. On a competition mat, forty centimetres is a different postcode.

### The fix is not better motors

It is to touch something known. Drive into a wall, square up against it, and the accumulated error is gone. Teams that do this run long missions; teams that do not, cannot.

This is the single most useful thing to teach a Challenge team in their first month, and it is genuinely counterintuitive. Children assume that a more accurate robot is the answer, and it is not: halving the error only delays the problem, because the miss still grows with the number of legs.

What actually works is structural. Break a long mission into short runs, re-align against a fixed feature between them, and design the attachments so that hitting a wall is safe rather than expensive.

The same reasoning runs through professional robotics, where the technique has a name, dead reckoning, and the same answer: correct against something you can measure, as often as you can afford to.

For a team who want more robotics after the season, RoboCupJunior runs three leagues, Soccer, Rescue and OnStage, for students up to age 19, with the next RoboCup in Songdo, South Korea, from 30 June to 6 July 2026. We could not confirm a current UK national organiser for it on the pages we read, so ask before planning a year around it.

The simulation is ours, run on 20 September 2026 over 5,000 trials per row. The RoboCupJunior facts are from junior.robocup.org, read the same day.

## The 2026-27 season is the last of the partnership

This is the fact a family should know before committing a club to several years, and it comes from LEGO Education itself.

**What LEGO Education has published**

| Statement | What it means |
|---|---|
| "The 2026-2027 FIRST LEGO League season will be our last together" | The partnership ends after this season, having run for nearly three decades |
| The 2026-2027 challenge is BIOGLOW | This season runs normally, on biodiversity and protecting the planet |
| The Founders Edition uses SPIKE technology, with a final season of 2027/2028 | Existing kit keeps a season beyond this one |
| A Future Edition using computer science and AI hardware launches in 2026/2027 | The successor programme starts alongside the last shared season |

For a club, the practical reading is that this season is normal and the one after is not yet clear. A school buying kit should ask which edition it is buying into and what tournament route it will have in 2028, rather than assuming continuity.

For a child, it changes nothing at all. The skills a Challenge team builds, programming something that must work unattended, dividing work across people, presenting a project to adults, do not belong to any brand.

We have deliberately not repeated the many second-hand accounts of what replaces what. Everything in the table above comes from LEGO Education's own page, and the rest is not ours to guess at.

The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) carries the rest of the year, and [Coolest Projects](/coolest-projects-uk-project-ideas) takes hardware entries from any age with no ranking at all, which suits a club that loses its tournament route.

## Four rungs for a robotics programmer

Rungs are about reliability, because a robot that works four times in five loses.

**From a first sequence to a mission that repeats**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Ages 6 to 9 | 1. Sequence | Can predict where the robot will stop before pressing go |
| Ages 9 to 11 | 2. Repeatability | Runs the same program three times and gets the same result |
| Ages 11 to 14 | 3. Re-alignment | Uses a wall or a line to cancel accumulated error mid-mission |
| Ages 13 to 16 | 4. Sensors and decisions | Programs the robot to react to what it finds, not just to what was expected |

### If a tournament is close

Run every mission five times and count the failures. A mission that works four times in five is the one that will fail on the day.
Add one re-alignment against a wall in the middle of the longest mission. It is usually worth more than any code change.

### Beyond the season

The programming transfers directly: everything a Challenge team does is ordinary code with a physical consequence.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lists what else is open to the same age group.

## Courses for a robotics club member

Grouped by what a child can already write, with the syllabus behind each card.

### Blocks

Ages 6 to 11

- [Scratch for kids](/courses/scratch-programming-complete-course): Sequence, loops and conditions, visually.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): Building things that move, before anything is typed.
- [App making with blocks](/courses/block-coding-app-development-masterclass): Real programs without a semicolon.

### Typed code

Ages 10 to 14

- [Python and AI for kids](/courses/python-ai-kids-masterclass): The first typed language, taught patiently.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): Real code, in a world a child already knows.
- [Maths through coding](/courses/maths-through-coding): Angles, distances and why the arithmetic matters.

### Real programming

Ages 13 to 16

- [Python from start to finish](/courses/python-complete-masterclass-teens): Structure, testing and debugging your own work.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Planning a sequence and reasoning about failure.
- [GCSE Computer Science](/courses/gcse-computer-science-course): The qualification waiting at the end of the club.

### The other half

The innovation project

- [Data science with Python](/courses/data-science-course-for-teens-python-data): Turning measurements into something a judge believes.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): When the innovation project needs a model in it.
- [App development](/courses/complete-app-development-masterclass-for-teens): Screens and buttons, for a project with a phone in it.

## Weekly coding, taught with a physical consequence in mind

Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Early weekday evening** For primary-age club members.
- **Later weekday evening** For older Challenge teams.
- **Weekend morning** For a long session on mission logic.

- **Reliability taught first** We count how often a program works, not whether it worked once.
- **Predict then run** Children say where the robot will end up before pressing go, which is where the learning is.
- **Five to ten learners** Enough that two approaches meet, few enough that every program is read.
- **Platform agnostic** We teach the programming ideas. Whatever kit the club owns, the logic is the same.
- **One to one when useful** For a team member handling the hardest missions.
- **We do not coach the team** We teach individuals to program. We have no role in any tournament and no relationship with the organisers.

## Fees

A single monthly rate in US dollars outside India, no registration charge, and you can stop whenever a month ends.

- Free first class: USD 0. A genuine lesson on the programming. A plain view of where the gaps are. No card, no details beyond a number.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher weekly. Programs read line by line. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one learner. Shaped around the missions. Useful before a regional tournament.

## What parents and coaches ask

### Who runs FIRST LEGO League in the UK?

The Institution of Engineering and Technology. The IET describes itself as the UK delivery partner for FIRST LEGO League.

### What ages are the programmes for?

The IET gives Explore as suitable for children aged 6 to 10, Challenge for students aged 9 to 16, and the Futures Edition for students aged 5 to 16.

### What does a Challenge team actually do?

In the IET's words, students complete missions through autonomous robot programming and present their innovation projects to judges, with options to compete at regional and national tournaments.

### How much time does a season take?

LEGO Education describes a season as more than 16 hours of building, coding and researching, so a term of club sessions rather than a weekend.

### What is this season called?

BIOGLOW, the 2026-27 challenge, about how the world's ecosystems thrive and protecting the planet.

### Is FIRST LEGO League ending?

LEGO Education has said that the 2026-2027 season will be its last in partnership with FIRST, after nearly three decades. Its Founders Edition runs a final season in 2027/2028 and a Future Edition using computer science and AI hardware launches in 2026/2027. We have not repeated second-hand accounts of what follows.

### Why does our robot end up in the wrong place?

Because small heading errors accumulate. Our simulation of legs of 30 cm, each within 2 degrees of true, misses by about 1 cm after two legs, 9.6 cm after ten and 26 cm after twenty, with worst cases of 43 cm and 126 cm. Nothing in that is biased; the miss grows anyway.

### How do teams fix drift?

Not with better motors. By touching something known: drive into a wall, square up against it, and the accumulated error disappears. Teams that re-align mid-mission can run long missions; teams that do not, cannot.

### What else can a robotics team enter?

RoboCupJunior runs Soccer, Rescue and OnStage leagues for students up to 19, with the next RoboCup in Songdo, South Korea, from 30 June to 6 July 2026. We could not confirm a current UK national organiser, so check before planning around it.

### Do you coach teams?

No. We teach individuals to program, in live online classes. We have no role in any tournament and no relationship with the IET, LEGO Education or FIRST.

## More for makers and builders

- [Coolest Projects UK](/coolest-projects-uk-project-ideas): Hardware entries, any age, no ranking.
- [Big Bang Competition](/big-bang-competition-project-help): Teams of any size, judged on a five-minute video.
- [Astro Pi Mission Zero](/astro-pi-mission-zero-and-space-lab-help): Run a Python program on the space station.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): The season in one table, with each organiser named.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Coding classes for UK children](/online-coding-classes-for-kids-uk): What a primary-age child learns first, and in what order.

## Contact

Book the free first class at [https://learn.modernagecoders.com/first-lego-league-uk-coding-help](https://learn.modernagecoders.com/first-lego-league-uk-coding-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
