---
title: "Online Coding and Python Classes in Maitland, Newcastle"
description: "Live online coding and Python classes across the Maitland council area, with Scratch from age six and Python, data and AI for teenagers and adults."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-maitland-newcastle
source: src/pages/online-coding-and-python-classes-in-maitland-newcastle.html
---
> Python taught live by a teacher, with real data from their own region and the habit of checking results that look wrong. Children begin with Scratch at six; teenagers and adults move on to Python, data and AI. The Maitland council area counted 90,226 residents in 2021.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Newcastle](/online-coding-and-python-classes-in-newcastle-nsw) / Maitland

Maitland City Council, Hunter, New South Wales / Live online

# Online coding and Python classes in Maitland

**What can a Maitland learner get from online Python classes?** Python taught live by a teacher, with real data from their own region and the habit of checking results that look wrong. Children begin with Scratch at six; teenagers and adults move on to Python, data and AI. The Maitland council area counted 90,226 residents in 2021.

Two data sets should agree on Maitland's nine railway stations. A regular expression meant to pull station names from Transport for NSW's usage file matched none of them. The same pattern with one extra question mark matched all nine. The difference was two spaces in the source text.

Facts last verified 14 October 2026. Teaching is online; no Maitland branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Python courses that handle messy text

The station project needs strings, regular expressions and careful joins. These courses teach them in that order; a free first lesson finds the right starting point.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Strings, the re module and joining two data sets.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 14): First Python with text and lists, then simple AI projects.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (Ages 6 to 10): Matching and comparing in Scratch before any typing.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Adults 18 and over): Data cleaning and AI tools for real work.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A growing river city in the lower Hunter

Census 2021 figures for the Maitland local government area (ABS code LGA15050), with New South Wales alongside.

**Maitland council area, 2021**

| Measure | Maitland |
|---|---|
| Residents | 90,226 |
| Median age | 36 |
| Families | 25,244 |
| Private dwellings | 35,413 |
| People per household | 2.7 |

**Maitland beside New South Wales**

| Indicator | Maitland | New South Wales |
|---|---|---|
| Separate houses | 87.3% (28,499) | 65.6% |
| Flats or apartments | 2.3% (752) | 21.7% |
| Adults with a bachelor degree or higher | 15.4% (10,950) | 27.8% |
| Employed people in professional jobs | 17.0% (7,369) | 25.8% |

### Young families

Maitland had 6,571 residents aged 5 to 9 and 6,480 aged 10 to 14, with a median age of 36.

### Teenagers

5,568 residents were aged 15 to 19.

### Council size

The council area spans roughly 392 square kilometres of the lower Hunter.

Close to nine in ten Maitland homes were separate houses. QuickStats publishes each cell with small privacy adjustments, so the figures stand as printed and are never totalled by us.

## Nine stations, zero matches

NSW Spatial Services places nine railway station points inside the Maitland council boundary. Transport for NSW publishes monthly entries and exits for every station. To join them, a script has to turn "Maitland Station" into "Maitland".

**Two patterns on the same names (our run)**

| Pattern | Captured from "Maitland Station" | Stations matched |
|---|---|---|
| (.*)\s+Station, greedy | "Maitland " with a trailing space | 0 of 9 |
| (.*?)\s+Station, lazy | "Maitland" | 9 of 9 |

**August 2026 entries at Maitland council stations (Transport for NSW)**

| Station | Entries |
|---|---|
| Maitland | 9,315 |
| Victoria Street | 6,927 |
| Thornton | 5,551 |
| Telarah | 3,407 |
| Metford | 1,665 |
| East Maitland | 1,097 |
| High Street | 275 |
| Lochinvar | Less than 50 |
| Mindaribba | Less than 50 |

### Greedy grabs

.* takes as much text as it can and gives back only what the rest of the pattern needs. \s+ needs one space, so the other stays in the name.

### Lazy waits

.*? takes as little as it can, so \s+ swallows both spaces and the name comes out clean.

### The source

Of 296 train station names in the file, 295 have two spaces before "Station". Newcastle Interchange is the one with a single space.

### Print what you captured

A join that matches nothing is a clue, not a result. Printing repr() of the captured text shows the hidden space at once, where an ordinary print hides it.

Station points come from NSW Spatial Services and monthly usage from Transport for NSW's Opal-based file. Two stations are published only as "Less than 50" and are shown exactly that way. The matching and the boundary test are our own.

## Greedy, lazy and anchored

Small symbols that change what a pattern returns.

**Quantifiers in Python's re module**

| Quantifier | Takes | Lazy form |
|---|---|---|
| * | Zero or more, as many as possible | *? |
| + | One or more, as many as possible | +? |
| ? | Zero or one, one if possible | ?? |
| {2,5} | Two to five, as many as possible | {2,5}? |

### Primary learners

Cut words from a sentence strip and argue about where each one ends.

### Secondary learners

Test both patterns on ten station names and explain each result before running the code.

### Adults

Add .strip() or a lazy quantifier to any name-extraction pattern before joining on it.

Calling .strip() on the captured name would also have fixed it. Knowing why both fixes work is what lets a learner choose between them next time.

## Stations, addresses and the school year

Council-wide markers from NSW open data.

### Busiest station

Maitland station recorded 9,315 entries in August 2026, the most of the nine in the council area.

### Address points

NSW Spatial Services lists 46,627 address points in or on the council boundary, counted only.

### Term 1, 2027

Eastern division NSW public schools return on 28 January 2027, and Term 1 ends on 9 April.

**Maitland council area** These figures describe the Maitland local government area, not Greater Newcastle. The ABS boundaries show it meeting Cessnock, Dungog, Newcastle, Port Stephens and Singleton.

## From sentence strips to regular expressions

Ages are rough guides; the trial lesson sets the level.

- **Ages 6 to 10: Scratch** Comparing words and building simple games. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: First Python** Strings, lists and small text projects. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Python with data** Regular expressions, files and joins. [Python for Teens](/courses/python-complete-masterclass-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **Adults 18 and over: Data and AI** Cleaning real data before trusting it. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## Can an AI tool write the pattern for you?

It can, and it may write the greedy one.

Ask an assistant for a pattern that takes the name before the word Station and (.*)\s+Station is a very likely reply. It works on the examples in your prompt if they have one space. Against a file with two spaces, it quietly leaves one behind.

A learner who has seen 0 of 9 become 9 of 9 knows to test a pattern on the real data and to print what it captured. That check takes a minute and catches a mistake that no error message reports.

Maitland learners who test every pattern on the real file trust their joins for good reasons. The longer argument is in [why programming still repays the effort](/blog/is-coding-worth-learning-2026).

## How Maitland lessons run

Lessons are live on video, so the learner stays at home.

- **Real files** Learners work with public data from their own region, not toy examples.
- **NSW terms** Classes follow the New South Wales school calendar and stop for holidays.
- **Free trial** One full lesson costs nothing and ends with a written recommendation.
- **Level-matched groups** Fifteen to twenty learners at a similar stage, or one to one.
- **Twice weekly** Two set lessons a week, around eight in a month.
- **India time** Our teachers are in India: a 7pm Maitland class is 1:30pm India time during daylight saving and 2:30pm from April.

**Hunter clocks** New South Wales moves to daylight saving on the first Sunday in October and back on the first Sunday in April (IANA time zone database); India does not change.

## Maitland class fees

The same price list in every council area.

- First class: USD 0. Your first lesson is free, with written advice to follow.
- Group tuition: USD 100 a month. Around eight group lessons a month, fifteen to twenty learners each.
- Private tuition: USD 150 a month. Around eight private lessons a month.

Maitland families pay in US dollars once the trial lesson has fixed the course and the class times. The pricing page explains holidays and missed lessons.

## Maitland Python and coding questions

### What is the population of the Maitland council area?

The 2021 Census QuickStats count 90,226 residents in the Maitland local government area, with 25,244 families and 35,413 private dwellings.

### What is a greedy quantifier in a regular expression?

One that matches as much text as possible, such as * or +, giving back characters only when the rest of the pattern needs them.

### How do I make a regex quantifier lazy in Python?

Add a question mark after it: *? or +? match as little as possible while still letting the whole pattern succeed.

### How many railway stations are in the Maitland council area?

NSW Spatial Services places nine railway station points inside the council boundary: Maitland, Victoria Street, Thornton, Telarah, Metford, East Maitland, High Street, Lochinvar and Mindaribba.

### Is online Python suitable for a ten-year-old?

Often, yes. Many children are ready for typed Python around ten, after some Scratch; the trial lesson shows whether that is the right step.

### Can teenagers use Claude in our classes?

No. Claude is used only in courses for adults aged 18 and over.

### Is there a classroom in Maitland?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do lessons cost for Maitland learners?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Do Maitland group classes cover Copilot Studio?

No. Copilot Studio is taught one to one only; groups write their projects in Python.

## More for Maitland learners

[The Newcastle page](/online-coding-and-python-classes-in-newcastle-nsw) covers the wider urban area and [the New South Wales guide](/coding-and-ai-classes-in-new-south-wales) the state. Families with young children may like [coding classes for kids in Newcastle](/coding-classes-for-kids-newcastle).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-maitland-newcastle](https://learn.modernagecoders.com/online-coding-and-python-classes-in-maitland-newcastle#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
