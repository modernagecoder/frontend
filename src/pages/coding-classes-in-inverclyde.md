---
title: "Coding Classes in Inverclyde | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Inverclyde, from Greenock, Port Glasgow and Gourock to Kilmacolm, Inverkip and Wemyss Bay. Free first lesson."
canonical: https://learn.modernagecoders.com/coding-classes-in-inverclyde
source: src/pages/coding-classes-in-inverclyde.html
---
> Inverclyde is a compact council area on the Firth of Clyde with about 78,400 residents in roughly 37,400 households, according to the 2022 census. Greenock is by far the largest town, and Port Glasgow and Gourock are the other large towns, with Kilmacolm, Inverkip and Wemyss Bay smaller. Every class is taught live by video from India; a free first lesson finds the right starting stage, anything from P1 to S6 or adult. Learners aged 6 to 67 take coding, Python and maths in a group of five to ten or individually. The Inverclyde project starts at an old Greenock dry dock. After the free lesson, a group costs USD 100 a month and one-to-one USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Inverclyde

Inverclyde / Live online

# Coding classes in Inverclyde

**What are the best coding classes in Inverclyde?** Inverclyde is a compact council area on the Firth of Clyde with about 78,400 residents in roughly 37,400 households, according to the 2022 census. Greenock is by far the largest town, and Port Glasgow and Gourock are the other large towns, with Kilmacolm, Inverkip and Wemyss Bay smaller. Every class is taught live by video from India; a free first lesson finds the right starting stage, anything from P1 to S6 or adult. Learners aged 6 to 67 take coding, Python and maths in a group of five to ten or individually. The Inverclyde project starts at an old Greenock dry dock. After the free lesson, a group costs USD 100 a month and one-to-one USD 150 a month.

In Cartsdyke, Greenock, Historic Environment Scotland lists Scott's Dry Dock at Category A and says it is believed to be the oldest surviving dry, or graving, dock in Scotland. Roughly 110 metres long and 20 metres wide, it was built for Steele's shipyard and already appears on a town plan of 1825. A dry dock works by letting the river in and pumping it out: gates open, water floods the basin, a ship floats in, and the water is removed so workers can reach the hull. How long does the flooding take? The obvious calculation is wrong by a factor of two, and the last metre of water behaves in a way that surprises almost everyone. This page's project finds out in Python.

Facts last verified 26 September 2026. Teaching is online; no Inverclyde branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## First courses that suit Inverclyde learners

A seven-year-old in Gourock, a P7 in Port Glasgow, an S5 in Greenock working towards Higher, and an adult in Kilmacolm who wants to automate spreadsheets. Here is where each typically begins, after a free lesson.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (Ages 6 to 11): Scratch from the start, with games where water rises, tanks fill and timers count.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 13): A first typed language, with small simulations that change step by step.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 12 to 18): Complete Python for teenagers, including physics simulations and debugging them.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python for adults from the first line, through to data, automation and models.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## About 78,400 people on the Firth of Clyde

Council-level figures are the 2022 census first results from National Records of Scotland, rounded to hundreds. Town sizes are NRS locality estimates for mid-2020.

**Inverclyde localities, NRS mid-2020 estimates**

| Locality | Residents |
|---|---|
| Greenock | 41,280 |
| Port Glasgow | 14,200 |
| Gourock | 10,210 |
| Kilmacolm | 3,930 |
| Inverkip | 3,490 |
| Wemyss Bay | 2,390 |

Inverclyde packs 488.7 residents into each square kilometre, seven times Scotland's 69.8. From our own addition of the census age bands, 14.3 per cent of people are under 15, a little below Scotland's 15.3, and 22.4 per cent are 65 or over, against 20.1. Inverclyde Council sets its own school terms; we have not checked them, so families tell us their break dates.

### Glasgow and exams

The [Glasgow](/best-coding-class-in-glasgow) page covers the city. For qualifications, see [Higher Computing Science](/higher-computing-science-help) and [National 5 Maths](/national-5-maths-tuition-online).

## Flooding a dock, one second at a time

A basin, a sluice, and a law of physics from the 1600s.

The model uses the listing's rough size, 110 by 20 metres, as a plain rectangle; everything else is invented. The river stands 6 metres above the dock floor and, for simplicity, stays there. Water enters through a sluice with an opening of 1 square metre. Torricelli's law says water rushes through an opening at a speed that depends on the square root of the height difference: a big drop means fast flow, a small drop slow flow. As the dock fills, the difference shrinks, so the flow slows down. The learner computes the volume, 13,200 cubic metres by our arithmetic, and then works out how long filling really takes.

**Our flooded dock, invented sluice and river level, 26 September 2026**

| Question | Answer from the model |
|---|---|
| Flow at the start | 6.51 cubic metres a second |
| Naive estimate: volume divided by starting flow | 33.8 minutes |
| True time to fill completely | 67.6 minutes, exactly twice the naive estimate |
| First 3 metres of depth | 19.8 minutes (29 per cent of the time) |
| Last 3 metres | 47.8 minutes |
| Last 10 centimetres alone | 8.7 minutes |

The first half of the depth fills in under 20 minutes; the second half needs almost 48. The last 10 centimetres, a tiny fraction of the water, take nearly 9 minutes, because the height difference driving them is almost zero. The naive sum assumes the opening flow continues all the way, and for this kind of flow the true answer comes out at exactly twice as long. Learners can prove the factor of two with a little calculus, or simply trust the simulation once it agrees with the formula.

The simulation is where coding earns its keep. Stepping forward 10 seconds at a time matches the formula closely. With 60-second steps the water level overshoots and ends above the river, which is physically impossible. With 5-minute steps it overshoots further, and on the next step the program asks for the square root of a negative number and crashes. A quick fix, clamping the level at the river height, stops the crash but then reports the dock full at 60 minutes, more than 7 minutes early. The lesson: silencing an error is not the same as fixing the model.

### Ages 8 to 11

Fill a Scratch tank from a tap whose flow drops as the tank fills, and time how long each quarter takes.

### Ages 11 to 15

Step the dock forward in Python, plot depth against time, and compare with the naive straight-line guess.

### Ages 15 and up

Derive the fill time with calculus, reproduce the overshoot and the crash, and choose a step size or method that avoids both.

### A thought experiment in a real dock

Only the dock's rough size and history come from the listing. The river level, sluice size, flow coefficient and every time in the table are invented, and say nothing about how Scott's dock was actually flooded.

## Possibly Scotland's oldest graving dock

What Historic Environment Scotland records, in its own careful words.

**Scott's Dry Dock with Outer Basin, HES listing LB50131**

| Listing detail | What it records |
|---|---|
| Size and shape | Roughly 110 m long and 20 m wide, with a semi-octagonal south end and stepped sides |
| Also known as | The Submarine Dock |
| Age | Early 19th century; believed to be the oldest surviving dry dock in Scotland |
| Evidence | Shown on John Wood's town plan of Greenock, 1825 |
| Owners | Built for Steele's shipyard; taken over by Scott's when Steele's closed in 1883 |
| Machinery | Remains of a cast-iron capstan with a Stothert and Pitt of Bath maker's plate |

The listing is careful: the dock is believed to be the oldest, and a date in the 1790s is called possible although unlikely. That caution is worth copying. The same physics runs through modern software for flood warnings, reservoir outflows, fuel tanks and the water levels in game engines, and the same mistakes, a naive rate and a step that overshoots, catch out professional code too. An Inverclyde student who has watched their program crash on a square root and then found the real cause is ready for bigger models.

Historic Environment Scotland, the owners of the dock and Inverclyde Council are not linked to us in any way. The listing facts are theirs; the model, its numbers and any errors are ours.

## From a Scratch tank to a working model

These stages are a rough guide; the free lesson decides.

- **P1 to P4: Things that fill** Block coding games with levels that rise, timers and simple rules. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **P5 to S2: Step-by-step Python** Loops that change a value over time, with graphs to show it. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **S3 to S6: Rates and models** Simulation and calculus ideas alongside National 5, Higher and Advanced Higher courses. [Python for Teens](/courses/python-complete-masterclass-teens), [High School Mathematics](/courses/complete-high-school-mathematics-mastery)
- **Adults: Models for work** Python for adults building estimates, forecasts and checks. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI can fix a crash in seconds. Will it fix the cause?

Making an error disappear can make the answer wrong.

Paste the square-root crash into a chatbot and the likely suggestion is to wrap the value in max(0, ...) or catch the error. The program then runs and prints a tidy answer: full at 60 minutes. The answer is more than 7 minutes out, and nothing on screen says so.

An Inverclyde learner who knows why the level overshot will reduce the step or change the method instead of hiding the symptom. Knowing the difference between a fix and a patch is exactly the judgement AI cannot supply for you.

That is why an Inverclyde teenager should still learn to code in 2026: to recognise when a quick fix has only hidden the real mistake. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## From Greenock to Kilmacolm, lessons at home

Online classes remove the journey to an evening club.

- **Learner at the keyboard** The learner writes the code; the teacher watches the shared screen and helps at the right moment.
- **Our words match school** We use P3, S4, National 5, Higher and Advanced Higher, like Inverclyde schools, and teach in English.
- **First lesson free** A real lesson, at no cost, and then plain advice on which course comes next.
- **Groups by stage** Five to ten learners at the same stage in each class, often from several countries.
- **Term-time rhythm** Two lessons a week in term, with the school holidays off.
- **Booked in UK time** Once set, your lesson keeps its UK time through the clock changes; teachers in India time adapt.

**Why stage beats location** Even in Greenock, finding five learners at one stage free at the same hour is unlikely. Grouping by stage across a wider pool means a pupil from Inverkip or Wemyss Bay gets a proper class.

## Inverclyde fees

Gourock or Port Glasgow, the fee is the same, and so it is in every country outside India where we teach.

- First class: USD 0. A full lesson at no charge, with a recommendation at the end.
- Group tuition: USD 100 a month. About eight lessons a month in a group of five to ten.
- Private tuition: USD 150 a month. About eight lessons a month, one teacher and one learner.

All fees are in US dollars; there is no sterling price. Payment starts only after the free lesson, when a course and weekly time have been agreed, and the pricing page explains holidays, missed lessons and changing between group and individual lessons.

## Inverclyde questions

### What is the population of Inverclyde?

About 78,400 people in roughly 37,400 households, from the rounded first results of Scotland's 2022 census.

### What are the main towns in Inverclyde?

NRS mid-2020 estimates: Greenock 41,280, Port Glasgow 14,200, Gourock 10,210, Kilmacolm 3,930, Inverkip 3,490 and Wemyss Bay 2,390.

### What is the dry dock project?

Learners flood an invented dock the size of Scott's Dry Dock in Python using Torricelli's law, find the true time is twice the naive estimate, and see how a large time step overshoots and crashes.

### What is Torricelli's law?

A rule that water flows out of, or through, an opening at a speed proportional to the square root of the height difference driving it.

### How old is Scott's Dry Dock?

Historic Environment Scotland dates it to the early 19th century, notes it on a town plan of 1825, and says it is believed to be Scotland's oldest surviving dry dock.

### Are classes held in Greenock?

Classes are online, so learners join from home anywhere in Inverclyde.

### Do you teach Higher Computing Science?

Yes, and National 5 too, with maths at both levels. We teach for understanding and do not promise grades.

### Which ages do you teach?

From 6 to 67: block coding for young children, Python and exam maths in secondary, and Python for adults at any starting point.

### What do lessons cost?

Nothing for the first lesson, then USD 100 a month in a group or USD 150 a month one-to-one.

### Do lessons pause in the holidays?

They do. Give us your school's holiday dates and we fit around them.

## Pages near Inverclyde

See [Glasgow](/best-coding-class-in-glasgow), [East Renfrewshire](/coding-classes-in-east-renfrewshire) with its sluice project, and [Argyll and Bute](/coding-classes-in-argyll-and-bute). Every council is listed on the [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-inverclyde](https://learn.modernagecoders.com/coding-classes-in-inverclyde#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
