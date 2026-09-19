---
title: "Coding Classes in Clondalkin, Dublin 22 | Modern Age Coders"
description: "Coding, Python, AI and maths classes for Clondalkin learners aged 6 to 67, taught live online in same-level groups or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-clondalkin-dublin
source: src/pages/coding-classes-in-clondalkin-dublin.html
---
> Clondalkin learners have a live teacher on video for each lesson, either in a small group where everyone is at the same point or individually, commonly twice a week, and the classes are open to people from six to sixty-seven. There is no trip to make. The free first lesson comes before anything else; from then on a group place is USD 100 a month and a private place USD 150 a month.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [South Dublin](/coding-classes-in-south-dublin) / Clondalkin

Clondalkin, Dublin 22 / Live online

# Coding classes in Clondalkin

**What are the best coding classes in Clondalkin?** Clondalkin learners have a live teacher on video for each lesson, either in a small group where everyone is at the same point or individually, commonly twice a week, and the classes are open to people from six to sixty-seven. There is no trip to make. The free first lesson comes before anything else; from then on a group place is USD 100 a month and a private place USD 150 a month.

South Dublin County Council gives the height of the Round Tower in Clondalkin village as 27.5 metres. Suppose a learner wants to check that with nothing but a phone's angle app and a measured distance. The trigonometry is one line, but the answer is only as good as the measurements, and a single degree of error in the angle can shift the result by almost a metre or by nearly three, depending on where the learner stands. This page turns that into a small coding project: build the calculation, add a deliberate error, and let the program find the spot where the tower can be measured most reliably.

Facts last verified 20 September 2026. Teaching is online; no Clondalkin branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## First courses for Clondalkin learners

A course for each stage of life, with the free first lesson and its teacher deciding whether it fits.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and angles: a sprite that turns, aims and measures how far its shot lands from the target.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 14): Maths through code: triangles, angles and tangent turned into a height calculator that anyone can test.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Python models with inputs that can be nudged, to see which measurement errors matter most.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults whose estimates rest on measurements, and who need to know how much a small error matters.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Measure the Round Tower with an angle, then find where to stand

The height is worked out from the distance to the tower and the angle up to its top, plus the observer's eye height, assumed here to be 1.5 metres on level ground. The table shows how far off the answer lands when the angle is misread by one degree either way.

**Estimating a 27.5 m tower when the angle is off by one degree**

| Distance | Angle to the top | Error if +1 degree | Error if -1 degree |
|---|---|---|---|
| 5 m | 79.1 degrees | +2.69 m | -2.24 m |
| 10 m | 69.0 degrees | +1.42 m | -1.30 m |
| 26 m | 45.0 degrees | +0.92 m | -0.89 m |
| 40 m | 33.0 degrees | +1.00 m | -0.98 m |
| 80 m | 18.0 degrees | +1.55 m | -1.54 m |
| 150 m | 9.8 degrees | +2.71 m | -2.69 m |

### Too close

Five metres from the base the top is almost straight up, at 79.1 degrees, and a one-degree slip changes the answer by up to 2.69 metres. At steep angles the tangent climbs fast, so small errors are magnified.

### Too far

From 150 metres the top is less than ten degrees above eye level, and the same slip is worth about 2.7 metres. At shallow angles a degree covers a long way at the tower's distance.

### Just right

The error is smallest, about 0.9 metres either way, near 26 metres, where the top sits at 45 degrees. A search over distances from 1 to 200 metres puts the most forgiving spot at 26.5 metres.

### Before trusting a result, nudge its inputs

Every calculated answer inherits the errors of its inputs, and some inputs matter far more than others. Sensitivity testing is the habit of changing each input by a realistic amount, one at a time, and watching how far the answer moves. It shows which measurements deserve the most care, and sometimes, as here, how to set up the measurement so the errors hurt least. It costs a loop and a few lines of code, and it turns a single number into a number with a known margin.

The learner's program has one function: given a distance, an angle and an eye height, return the tower's height using the tangent of the angle. Around it goes a loop over distances, and for each one the program computes the true angle to a 27.5-metre top, adds and subtracts one degree, and records how far the answers land from 27.5. A second loop does the same for the distance instead of the angle: at 26 metres, judging the distance 5 percent too long adds 1.30 metres to the height. The results go into a small table and a line chart, and the lowest point of the chart is the recommended place to stand.

### Stated assumptions

The eye height of 1.5 metres and the level ground are assumptions, not facts about Clondalkin; a sloping street or a taller observer changes the numbers slightly. A good report lists them before the answer.

### Tall and thin

The council describes the tower as 27.5 metres high and four metres wide at the bottom, a height nearly seven times its base, 6.88 to be exact, and thought to be the slenderest round tower in Ireland.

### Why 45 degrees

The error from a small angle slip is smallest where the angle is 45 degrees, because that is where the product of its sine and cosine is largest. The program finds this by searching; the maths explains why.

## Clondalkin, in the words of the council and its services

Facts that each body publishes itself, with an eircode where its page gives a valid one.

**Named places in Clondalkin**

| Place | What its own source says |
|---|---|
| The Round Tower | 27.5 m high, four metres wide at the base |
| Round Tower visitor centre | Tower Road, D22 DV56; opened 3 July 2017 |
| North Clondalkin Library | Liscarne Close, Rowlagh, D22 E2Y2; opened December 2020 |
| Clondalkin Fonthill station | Fonthill Road, D22 Y2F9 |

### The tower itself

South Dublin County Council calls it one of only four remaining round towers in County Dublin, with its original cap, a raised doorway and four windows at the top facing north, south, east and west. Inside there were once six floors; there are now five.

### A modern library

The council describes North Clondalkin Library as purpose-built and opened to the public in December 2020, with a creative studio and a virtual reality library experience designed for a Meta Quest 2 headset.

### In the village

Clondalkin Library, on Monastery Road in the village, opens until 8pm from Monday to Thursday. Its web page prints an eircode containing the letter O, which eircodes do not use, so none is repeated here.

**What this page does not claim** No population is printed for Clondalkin, because the page uses only facts that named bodies publish about the place itself. The council's pages give the tower's age in two different ways, so this page does not state one. The measurement project uses stated assumptions, not a survey of the tower.

## Clondalkin learners and their week

Two live lessons make up a typical week, each taught by a teacher who is present the whole way through.

### Children

Children begin with block code and angle games, turning and aiming sprites, the playful start of trigonometry.

### Teenagers

Teenagers move to Python, websites, AI projects and models whose inputs they can test, like the tower calculator.

### Adults

Adults may start with no coding at all; the opening lesson chooses the path.

The tower's height and width are South Dublin County Council's figures; the angles, errors and recommended distance are our own calculations, run on 20 September 2026, using the assumptions stated above. The libraries, the visitor centre and the station are quoted from their own pages.

## From aiming a sprite to testing a model

Age bands are approximate; lesson one finds the real starting point for each learner.

- **Ages 6 to 10: Turn and aim** Block-coded sprites that turn by angles and hit, or miss, a target. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Triangles in code** Python that uses tangent to find a height from a distance and an angle. [Maths Through Coding](/courses/maths-through-coding), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Ages 14 to 18: Sensitivity** Nudging inputs in a loop to see which errors matter and how to reduce them. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Estimates with margins** Workplace calculations reported with the error each input can cause. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Ask an assistant to measure the Round Tower from a photo

It will usually produce a confident height.

Describe a photo of the tower to an AI assistant, with a distance and an angle, and it will calculate a height and state it neatly. The arithmetic will be right. What it will rarely add is how much that height would change if the angle were a degree off, or whether the photo was taken from a good distance for measuring at all.

With the sensitivity table in hand, the learner asks the assistant what error margin its answer carries, how the margin changes with distance, and what assumptions it made about eye height and level ground. The answers turn a neat number into an honest one.

Calculating a height is one line. Knowing how wrong it could be is the skill. The longer argument is in [the case for learning to code at any age](/blog/is-coding-worth-learning-2026).

## How lessons run for Clondalkin

The practical arrangements.

- **A live teacher** Each lesson is led live, with the teacher watching and helping as every learner writes code.
- **Same-stage learners** Groups of five to ten at one stage, from Dublin 22, elsewhere in Ireland and abroad.
- **Two regular slots** About eight lessons a month, on the same two weekly slots agreed at the outset.
- **Term planning** School holidays, mid-term breaks and exam weeks are accounted for in advance.
- **Setup at home** Whatever laptop or desktop is at home will usually do, with a mic and something to hear through, on broadband that copes with video.
- **Alone with a tutor** One-to-one lessons for learners who are ahead, need extra time, or can only attend at unusual hours.

**Online, not local** We have no premises in Clondalkin, in South Dublin or anywhere in Ireland. Every lesson is on video and is the same wherever the learner joins from.

## Clondalkin lesson fees

Here is everything.

- First class: USD 0. A free first lesson that includes a level check.
- Group tuition: USD 100 a month. A month in a group of five to ten at one stage, around eight live lessons.
- Private tuition: USD 150 a month. A month of private lessons at the same pace.

One monthly fee in US dollars applies to every family outside India. The free lesson involves no commitment, the first payment is due when the course begins, and the pricing page explains holidays, missed lessons and moving between group and private lessons.

## Clondalkin coding class questions

### Is there a Modern Age Coders centre in Clondalkin?

No. Lessons are live on video, and we have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number given here is in India.

### What is the Round Tower project?

Learners write a small program that works out the tower's height from a distance and an angle, then add a one-degree error and see how much the answer moves. The error is smallest, about 0.9 metres, near 26 metres from the base, and grows to about 2.7 metres very close or far away.

### Is this more maths than coding?

It is both. The maths is a single tangent; the coding is in the loops, the tables and the search for the most reliable place to stand, which is the part a learner cannot easily do by hand.

### Why does the page give no population for Clondalkin?

District pages carry only facts that named bodies publish about the place itself, and neither the council's tower, library and visitor-centre pages nor Irish Rail publishes a head count.

### When are lessons?

On weekdays from after school into the evening, and at weekends during the day. Times are fixed in Irish time. The teachers are in India, whose clocks run five and a half hours ahead of Clondalkin in the winter months and four and a half in the summer ones, so we only propose hours that are sensible at both ends.

### Can adults learn too?

Yes, up to the age of sixty-seven and from any level. An adult chooses a small group at the same level or private lessons after the first lesson.

### Will my child be with other Clondalkin children?

Only if their level matches. Groups are formed by level, so classmates may be local or far away.

### What do coding classes in Clondalkin cost?

The first lesson is free. A group place is then USD 100 a month for around eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.

### How big are groups?

Between five and ten learners, grouped by level, pace and goals rather than age or address. If no group fits a workable hour, lessons are one to one.

## Around Clondalkin and South Dublin

The [South Dublin](/coding-classes-in-south-dublin) page covers the council area, [Tallaght](/coding-classes-in-tallaght-dublin) and [Lucan](/coding-classes-in-lucan-dublin) have their own district pages nearby, and learners who like the maths side can look at the [problem solving through coding](/problem-solving-skills-through-coding-ireland) page. The [Ireland hub](/coding-classes-in-ireland) lists everything else.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-clondalkin-dublin](https://learn.modernagecoders.com/coding-classes-in-clondalkin-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
