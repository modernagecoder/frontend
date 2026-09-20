---
title: "Astro Pi Mission Zero Help | Run Python on the Space Station"
description: "Help with Astro Pi Mission Zero and Mission Space Lab: teams of four, aged under 19, an hour of Python, and a March deadline that falls at 11am UK time."
canonical: https://learn.modernagecoders.com/astro-pi-mission-zero-and-space-lab-help
source: src/pages/astro-pi-mission-zero-and-space-lab-help.html
---
> "Astro Pi is an ESA Education project run in collaboration with the Raspberry Pi Foundation", described by the organisers as "a free challenge where kids run their code in space". There are two missions, both for young people aged "19 and under". Mission Zero takes about an hour: a team of "up to 4 young people", supervised by a mentor who may be a teacher, educator, parent or code club leader, writes a Python program that shows a personalised, nature-inspired image on an Astro Pi computer aboard the International Space Station, using a colour and luminosity sensor reading to set the background colour. It is written in a web browser with no special hardware. Mission Space Lab takes two to six hours and runs a longer program on the station. The 2026/27 Mission Zero cycle launched on 14 September 2026, closes on "22 March 2027, 12:00 noon CET", runs in May 2027 and issues certificates in June, each signed by an ESA astronaut and showing where the station was. We teach the Python. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Astro Pi

United Kingdom · Under 19 · Deadline 22 March 2027

# Astro Pi Mission Zero and Space Lab help

A child writes a short Python program at a kitchen table in Cardiff, and a few weeks later it runs on a computer aboard the International Space Station while the station is somewhere over the Pacific. That is not a metaphor and it is not a competition in the usual sense: there is no ranking, no pass mark and nothing to win. Astro Pi Mission Zero takes about an hour, it is free, and every entry that follows the rules runs in space and comes back with a certificate saying where the station was at the time. This page covers both missions, what the Python actually has to do, and the one detail that has cost British schools an entry: the deadline is not set in UK time.

At a glance: Organisers: ESA Education and the Raspberry Pi Foundation; Cost: Free; Age: 19 and under; Mission Zero: About one hour; Mission Space Lab: Two to six hours; Team: Up to four young people; Language: Python, in a browser; Deadline: 22 March 2027, noon CET. Rated 4.9 across 547 Google reviews.

## Three courses for an Astro Pi entrant

Mission Zero needs about an hour of Python. Mission Space Lab needs rather more.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): The right starting point for most Mission Zero entrants: a first typed language, taught so that the program can be read back before it runs.
- [Python from start to finish](/courses/python-complete-masterclass-teens): For Mission Space Lab: files, loops, sensors and structure, which is where a longer program needs real technique.
- [Scratch for kids](/courses/scratch-programming-complete-course): For a younger child who wants to take part but has never written a line: the logic first, the typing after.

## An hour in space, or an afternoon

Facts read at the organiser's own pages on 20 September 2026.

**Astro Pi as its organisers describe it**

|  | Mission Zero | Mission Space Lab |
|---|---|---|
| What it is | "Send a personalised image to the astronauts on the International Space Station!" | "Run your program on board the International Space Station" |
| How long | About one hour | Two to six hours |
| Age | "Age 19 and under" | Under 19 |
| Team | "Up to 4 young people", with a mentor | A team with a mentor |
| Written in | Python, in a web browser, no special hardware | Python, with more of it |
| The task | A personalised, nature-inspired image, with a colour and luminosity sensor reading setting the background colour | A longer program that runs on the station |
| Cost | Free | Free |

Mission Zero is the one to start with, and its design is unusually generous. There is no competition in it: every entry that follows the rules and meets the deadline is run on the station, and every participant receives a certificate showing the location of the ISS when their program ran, with the exact start and end times, signed by an ESA astronaut.

That means a child cannot fail at Mission Zero except by missing the deadline or breaking a rule. For a nine-year-old who has never finished anything technical, that is a rare and valuable thing.

The sensor reading is the detail that makes it real programming rather than a drawing exercise. The program asks the Astro Pi computer what the colour and light levels are and uses the answer to set the background, so the image that appears depends on conditions aboard the station at the moment it runs.

Mission Space Lab is the longer sibling, two to six hours, for teams who want to write a program that does something with the station's sensors rather than show a picture. It suits a school club with a term rather than an afternoon.

Sources: [Astro Pi](https://astro-pi.org/) and its [Mission Zero pages](https://astro-pi.org/mission-zero), read 20 September 2026. Modern Age Coders is not connected with ESA Education or the Raspberry Pi Foundation.

## The deadline is an hour earlier than it looks

The organiser publishes the Mission Zero deadline as "22 March 2027, 12:00 noon CET". For a British school that sentence needs converting, and the conversion is not the one most people assume.

The instinct is to think that noon in Europe is around eleven in Britain in winter and around noon in summer, and to guess that March is close enough to summer not to matter. It matters. The precise question is whether the clocks have changed by the deadline day, and the answer is no, by six days.

**Our computation of 20 September 2026**

| Question | Answer | Why it matters |
|---|---|---|
| What day is 22 March 2027? | A Monday | A school day, so the deadline falls in lesson time |
| When do the clocks change? | The last Sunday of March, which in 2027 is 28 March | Both the UK and continental Europe change on the same day |
| So on 22 March 2027? | The UK is still on winter time and CET is one hour ahead of it | The gap between the two is one hour, not zero |
| What is noon CET in the UK? | 11am | A class submitting at 11.30 UK time on the day has missed it |

### Why this catches people

Deadlines in another country's local time look harmless. The error only appears on the day, when there is no time left to fix it, and it is invisible to anyone reading the date alone.

### The rule to teach

When a deadline is published in someone else's time, convert it once, in writing, and check whether a clock change falls between now and then. Both halves matter.

### What we would actually do

Treat the deadline as the Friday before. Nothing about Mission Zero requires the last hour, and a program submitted early still runs in May.

This is a small thing that teaches a large one. Almost every system a young programmer will ever touch stores times in one zone and shows them in another, and almost every bug in that area comes from assuming the offset is fixed when it changes twice a year on dates that differ between countries.

A child who has converted one real deadline by hand, and checked the clock-change date rather than assuming it, has met the whole problem in ten minutes.

It also shows why we date every fact on these pages. The conversion above is true for the 2027 cycle, and the equivalent sentence for a later year depends on where that year's deadline falls relative to the last Sunday in March. Check it again rather than trusting this paragraph in 2029.

The related trap on our [Surrey page](/coding-classes-in-surrey) is the same family from the other end: GPS satellites keep a clock that ignores leap seconds, so their midnight is eighteen seconds off UTC.

The conversion is ours, computed on 20 September 2026 from the deadline the organiser publishes. The last Sunday of March 2027 is the 28th; 22 March 2027 is a Monday.

## One hour, one mentor, four children

Mission Zero is designed to be completed in a single session, and the things that stop it are rarely the programming.

**What a first Mission Zero session needs**

| Need | Why | The thing that goes wrong |
|---|---|---|
| A mentor over 18 | The organiser requires a teacher, educator, parent or code club leader to supervise and submit | Children working alone and having nobody to submit the entry |
| A browser and an hour | The code is written in a web browser with no special hardware | Waiting for equipment that is not needed |
| An idea for the image | The entry is a personalised, nature-inspired image, so the design takes as long as the code | Half the hour spent choosing a picture |
| The sensor line understood | The background colour comes from a colour and luminosity reading taken on the station | Copying the line without knowing what it does |
| A submission well before the day | The deadline is noon CET, which is 11am UK time on 22 March 2027 | Submitting on the morning of the deadline |

For a class of thirty, the sensible shape is teams of up to four with one mentor and one hour, and a rule that the image is sketched on paper before anybody opens a browser. The programming part of Mission Zero is genuinely short; the deciding part is knowing what you want it to look like.

For a child doing it at home, a parent counts as the mentor, which is worth knowing because many families assume a school has to be involved.

For Mission Space Lab, treat it as a project rather than a session. Two to six hours of work is a half term of a lunchtime club, and it rewards a team that can plan and test rather than one that can type quickly.

Either way, the certificate is the point. A child who can say that a program they wrote ran on the International Space Station, and show where the station was at the time, has something no exam gives them.

## Four rungs from first Python to a program worth sending up

Mission Zero needs rung two. Everything above it is for the longer mission and for what comes after.

**From a first line to a program that reads the world**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Ages 7 to 10 | 1. Sequence and repetition | Can predict what a short program will do before running it |
| Ages 9 to 12 | 2. First Python | Writes and fixes a dozen lines, including a colour and a loop |
| Ages 11 to 14 | 3. Input from the world | Uses a sensor reading or a data file to change what a program does |
| Ages 13 to 18 | 4. A project that finishes | Plans, tests and completes something over several sessions |

### If March is close

Do Mission Zero this week rather than next month. It takes an hour and the deadline is 11am UK time on 22 March 2027.
Sketch the image on paper first. It is the half of the task that actually takes the time.

### After the certificate

Mission Space Lab is the same idea with a term behind it, and it suits a club.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) has everything else open to a UK child this year, including several with no age floor.

## Python courses for a young space programmer

Sorted by what a child can write alone today, with the syllabus behind each card.

### Before Python

Ages 6 to 10

- [Scratch for kids](/courses/scratch-programming-complete-course): Sequence, loops and colour, without typing.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): Building things that move, before anything is typed.
- [Early maths foundations](/courses/early-math-foundations): The number sense a first program leans on.

### Mission Zero level

Ages 9 to 13

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, taught patiently.
- [Maths through coding](/courses/maths-through-coding): Colour, coordinates and patterns, in code.
- [Minecraft coding for kids](/courses/minecraft-coding-for-kids-course): Real code, in a world a child already knows the rules of.

### Mission Space Lab level

Ages 12 to 18

- [Python from start to finish](/courses/python-complete-masterclass-teens): Files, structure and sensors, properly.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): What to do with readings once you have them.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): For a program that has to finish in time.

### Where it leads

Beyond the challenge

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Models built and checked against reality.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): Somewhere to publish what you build.
- [GCSE Computer Science](/courses/gcse-computer-science-course): The qualification, with the exam board the school entered.

## Short weekly Python, at an hour a ten-year-old can think in

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Early weekday evening** For primary and lower secondary children.
- **Later weekday evening** For older students working on the longer mission.
- **Weekend morning** For a full session on one project.

- **Predict before running** Children say what a program will do before they run it, which is how a short program gets understood rather than copied.
- **Sensors explained** We teach what a sensor reading actually is, so the line that sets a background colour is not magic.
- **Five to ten children** Enough for ideas to cross the room, few enough that every screen gets looked at.
- **Our own examples** Written by us. The organiser publishes its own guides and we do not copy them.
- **One to one when useful** For a child far ahead of their year, or one working on Mission Space Lab.
- **We do not submit** A mentor submits an Astro Pi entry. We teach the Python and have no role in the challenge.

## Fees

US dollars, charged monthly, at one rate for every country except India. No sign-up fee and no term to commit to.

- Free first class: USD 0. A whole lesson, taught not pitched. An honest answer about the right level. Nothing asked for but a phone number.
- Group batch: USD 100 a month. Five to ten children at one level. The same teacher every week. Code looked at line by line. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one child. Shaped around what they are making. Useful when a group hour will not fit.

## What parents and teachers ask

### What is Astro Pi?

The organisers describe it as "an ESA Education project run in collaboration with the Raspberry Pi Foundation" and "a free challenge where kids run their code in space". There are two missions, Mission Zero and Mission Space Lab.

### What does Mission Zero involve?

About an hour of work: a Python program that shows a personalised, nature-inspired image on an Astro Pi computer aboard the International Space Station, with a colour and luminosity sensor reading setting the background colour. It is written in a web browser and needs no special hardware.

### Who can take part?

Young people aged 19 and under, in teams of up to four, supervised by a mentor who may be a teacher, educator, parent or code club leader.

### When is the deadline?

The organiser gives 22 March 2027 at 12:00 noon CET for the 2026/27 Mission Zero cycle, which launched on 14 September 2026.

### What is that in UK time?

11am. Both the UK and continental Europe change their clocks on the last Sunday of March, which in 2027 is the 28th, six days after the deadline, so on the day CET is one hour ahead of UK time.

### Is it a competition?

Not in the usual sense. There is no ranking or pass mark: every entry that follows the rules and meets the deadline is run on the station.

### What do participants get?

A certificate showing the location of the ISS when their program ran, with the exact start and end times, signed by an ESA astronaut. The organiser says programs run in May 2027 and certificates follow in June.

### Does my child need to know Python already?

A little helps and an hour is enough for most children with a mentor beside them. A child who has never typed code can still take part; the programming is short and the image design takes as long.

### What is Mission Space Lab?

The longer mission, two to six hours, in which a team writes a program that runs on board the station. It suits a school club with a term rather than a single session.

### Can you submit an entry for us?

No. A mentor submits an Astro Pi entry and we have no role in the challenge. We teach the Python behind it.

## Other things a young programmer can enter

- [Perse Coding Team Challenge](/perse-coding-team-challenge-preparation): Teams of three, hidden tests, January and March.
- [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk): November, free, and no programming at all.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Dates for every contest, checked with the people who run them.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Coding classes for UK children](/online-coding-classes-for-kids-uk): What a primary-age child learns first, and in what order.
- [Choosing an online class](/best-online-coding-classes-uk): How to tell a serious provider from a well-designed one.

## Contact

Book the free first class at [https://learn.modernagecoders.com/astro-pi-mission-zero-and-space-lab-help](https://learn.modernagecoders.com/astro-pi-mission-zero-and-space-lab-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
