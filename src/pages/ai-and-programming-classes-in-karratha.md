---
title: "AI and Programming Classes in Karratha | Live Online Lessons"
description: "Live online AI and programming classes for Karratha teenagers and adults, with a project that calculates the two days a year the noon sun is directly overhead."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-karratha
source: src/pages/ai-and-programming-classes-in-karratha.html
---
> Live lessons where a Karratha teenager or adult writes programs that calculate something checkable outside the window, and then tests what AI tools say against that result. The 2021 Census put the urban area at 17,013 residents. Lessons happen over video in a small group or one to one, and the opening lesson is free.

[Home](/) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Australia](/coding-classes-in-australia) / Karratha

Karratha, Pilbara, Western Australia / Live online

# AI and programming classes in Karratha

**What are the best AI and programming classes in Karratha?** Live lessons where a Karratha teenager or adult writes programs that calculate something checkable outside the window, and then tests what AI tools say against that result. The 2021 Census put the urban area at 17,013 residents. Lessons happen over video in a small group or one to one, and the opening lesson is free.

Karratha lies north of the Tropic of Capricorn, which means that twice a year the noon sun climbs to the very top of the sky and shadows almost vanish beneath people's feet. Which two days? Take the latitude of the town from Main Roads WA's open road data, about 20.74 degrees south, and write a program that tracks the sun's declination through the year. It answers 17 January and 25 November. Use a popular one-line shortcut instead and November moves three days earlier. Feed degrees to a function expecting radians and the sun ends up on the wrong side of the sky. Karratha learners discover how much care hides inside a calculation that looks like a single line.

Facts last verified 10 October 2026. Teaching is online; no Karratha branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Where Karratha learners usually start

All four lead towards the sun project on this page. A free first lesson picks the right one, and card details are never requested.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python basics, the math module and loops that step through every day of a year.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 11 to 16): Angles, trigonometry and graphs built with code instead of memorised.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning foundations, plus the habit of testing a model against known answers.
- [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college) (University and adult): AI from search and models to evaluation, with checks against physical ground truth.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A young Pilbara city of 17,013

Census figures for the Karratha urban area from 2021, set against Western Australia and the whole country.

There were 17,013 people on Census night, with a median age of just 32. They formed 3,839 families in 7,610 private dwellings, at 2.8 people per household on average.

**Karratha against WA and Australia (2021 Census shares)**

| Share | Karratha | WA | Australia |
|---|---|---|---|
| Technicians and trades workers (2,203 people) | 24.8% | 15.3% | 12.9% |
| Professionals (1,348 people) | 15.2% | 22.0% | 24.0% |
| Bachelor degree or above (2,111 people) | 16.9% | 23.8% | 26.3% |
| Separate houses (4,015 dwellings) | 79.3% | 79.7% | 72.3% |

### Flats and units

Some 298 dwellings, 5.9% of the stock, were flats or apartments.

### Young adults

The count included 924 people aged 15 to 19 and 890 aged 20 to 24.

### The wider council

The ABS estimate for the City of Karratha council area on 30 June 2025 is 25,429, a larger area than the urban count above.

To protect privacy the ABS nudges Census cells by small random amounts, which means the pieces of a table seldom total exactly. We quote each value as published and never add rows together to make a total of our own.

## On which days is the noon sun straight over Karratha?

Town latitude from Main Roads WA open data, the sun's position from published astronomical equations, and Python to bring them together.

**What the calculation gives for latitude 20.74 degrees south (our code, 10 October 2026)**

| Question | Careful method | Common shortcut or slip |
|---|---|---|
| First overhead day of 2026 | 17 January | 17 January (the one-line formula agrees) |
| Second overhead day of 2026 | 25 November | 22 November (one-line formula) |
| Sine of the tilt, 23.44 | 0.3978 (degrees) | -0.9926 (read as radians) |
| Noon sun height in June | 45.82 degrees | Not computed |
| Noon sun height in December | 87.30 degrees, just to the south | Not computed |

### 1. Find the latitude

Main Roads WA publishes thousands of reference points along the state's roads. Inside a box around Karratha we took 2,000 of them, spanning 20.71 to 20.78 degrees south, and used their median, 20.7414.

### 2. Track the sun

The sun's declination is how far north or south of the equator it sits. Standard equations give it for any moment; the overhead days are when it equals the town's latitude.

### 3. Solve for the moment

A simple search finds the crossings at 12:53 Karratha time on 17 January 2026 and 12:44 on 25 November 2026. The northern and southern edges of town cross on the same dates.

### Fifty-three days with the sun to the south

Between those two dates the noon sun is actually south of overhead, so shadows at midday point north towards the equator, the opposite of what most Australians expect. Our program counts 53 such days in 2026. Errors of a degree in the sun's position would shift those boundaries by days, which is exactly what the popular shortcut does: its largest error over the year is 1.10 degrees, and its November date lands three days early.

The equations are the NOAA solar calculator's, which follow Jean Meeus, with an obliquity of 23.4381 degrees for 2026; the shortcut is Cooper's 1969 sine formula. All results are our own calculations. In 2027 the same dates return, with the crossings at 18:37 on 17 January and 18:36 on 25 November.

## Making a short formula trustworthy

Learned on the sun over Karratha, then applied to physics simulations, navigation and any code built on angles.

**Checks run on the Karratha sun program**

| Check | How | Result |
|---|---|---|
| Known values | Declination at the solstices should be near plus and minus 23.44 degrees | The program reaches 23.44 both ways |
| Units | Print sin(23.44) with and without converting to radians | A sign flip shows the slip at once |
| Shortcut against full method | Run both for every day of 2026 and compare | Average gap 0.40 degree, worst 1.10 |
| Edges of the area | Repeat for the town's northern and southern limits | Same two dates, different hours |

A formula that produces a believable number is the most dangerous kind, because nobody looks twice. Comparing against values you already know, the solstices here, is the cheapest way to catch a mistake before anyone relies on it.

### Secondary students

Plot declination through the year, find the two crossings with a loop and explain why the shadows reverse.

### University students

Root-finding on a periodic function, numerical precision and validating against an independent reference.

### Adults at work

Any spreadsheet or script that handles angles, bearings or solar data benefits from the same unit and edge checks.

Modern Age Coders is not linked to Main Roads Western Australia, the ABS, NOAA or the WA Government. Their data and equations remain theirs; the code and results on this page are our own.

## Western Australian time all year

Local details that shape when a Karratha learner can join a live lesson.

### No clock changes

Karratha keeps Western Australian time, UTC plus 8, every month of the year with no daylight saving.

### Close to India time

India time is two and a half hours behind Karratha throughout the year, so after-school slots line up easily.

### The East Coast gap

Sydney and Melbourne sit two hours ahead in winter and three hours ahead during their daylight saving.

**Western Australian term dates** The WA Department of Education lists Term 4 of 2026 from Monday 12 October to Thursday 17 December, and Term 1 of 2027 from Monday 1 February to Friday 9 April. Lessons pause around these dates on request.

## From angles on paper to models that answer to reality

The bands are rough; the free lesson finds the actual start.

- **Ages 11 to 14: Angles in code** Drawing shapes and shadows, converting degrees and seeing trigonometry move. [Maths Through Coding](/courses/maths-through-coding), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 15 to 18: Formulas and searches** Putting equations into functions, looping over a year and finding where a value is crossed. [Python for Teens](/courses/python-complete-masterclass-teens), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **University: Numerical methods and AI** Precision, root-finding and testing learned models against physical ground truth. [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)
- **Adults: Calculations at work** Scripts and AI tools for technical work, checked before anyone acts on them. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Artificial Intelligence Course](/courses/artificial-intelligence-complete-masterclass-college)

## Would an AI assistant put the sun in the right place?

Usually close, which is the problem.

Ask a chatbot when the sun is directly over Karratha and it may reach for the one-line shortcut, giving a November date a few days off, or write code that passes degrees to a function expecting radians. Both answers look reasonable on a screen.

Our Karratha learners use AI to draft the program, then check it against what they can verify: the solstice values, a unit test on the sine of the tilt, and the shadows they can see at noon in January. The model saves typing; the learner decides what is true.

A Karratha learner who has caught a three-day error with a solstice check will spot the same quiet mistakes in any AI output, whatever arrives after 2026. The longer argument is in [how AI changes what young programmers should learn](/blog/is-coding-worth-learning-2026).

## Pilbara distance, no disadvantage

A live online class reaches Karratha as easily as it reaches Perth.

- **Set in WA time** Lessons are scheduled on Western Australian time, which never shifts, so the slot is the same all year.
- **Matched to WA year levels** Teachers follow the WA curriculum years, including ATAR students, and teach in English.
- **A real first lesson** The free session is spent programming with a teacher; you then get a suggested course and time, and nobody asks for payment details.
- **Groups of fifteen to twenty** Learners at one stage, gathered from several states and countries so a sensible hour exists.
- **Two classes weekly** Roughly eight a month, with school holidays and exams planned around in advance.
- **Swing shifts allowed for** Adults on rotating rosters can move between group times or choose one-to-one lessons.

**Times written for Karratha** Every lesson time is given in Western Australian time, so families never convert from the East Coast.

## Fees for AI and programming classes in Karratha

Three options, plainly.

- First class: USD 0. A free lesson that ends with a level, a course and a time we suggest.
- Group tuition: USD 100 a month. About eight group lessons a month with fifteen to twenty learners at your stage.
- Private tuition: USD 150 a month. About eight one-to-one lessons a month with a dedicated teacher.

Remote postcodes pay nothing extra: Karratha is charged the same US dollar fee as every other Australian town. No payment is taken until the trial has settled a course and slot; the pricing page covers breaks, missed lessons and changes of format.

## Karratha AI and programming questions

### How many people live in Karratha?

The 2021 Census counted 17,013 people in the Karratha urban area. The ABS estimate for the wider City of Karratha council area on 30 June 2025 is 25,429.

### What is solar declination?

Solar declination is the latitude at which the sun is directly overhead at noon. It moves between about 23.44 degrees north and 23.44 degrees south over a year, so places between the tropics have two days each year when the noon sun is straight above them.

### When is the sun directly overhead in Karratha?

By our calculation for latitude 20.74 degrees south, on 17 January and 25 November. Between those dates the noon sun is slightly to the south, so midday shadows point north.

### What does the Karratha sun project involve?

Learners take Karratha's latitude from Main Roads WA open data, compute the sun's declination for every day of the year in Python, find the two dates it matches the town, and compare a careful method with a popular shortcut.

### Can ATAR students join?

Yes. Year 11 and 12 students fit the lessons around their ATAR courses, and all assessed school work stays their own.

### What times suit Karratha?

After school, evenings or weekends, agreed in the trial and written in Western Australian time. India time is two and a half hours behind Karratha all year.

### Are there classes for primary-aged children?

There are, from age 6, using visual coding tools; the sun project here is designed for teenagers and adults.

### Is there a Modern Age Coders office in Karratha?

No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.

### What do AI and programming classes in Karratha cost?

The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.

### How large are the groups?

Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.

## Other pages for northern and western WA

Further down the coast there is [a Geraldton coding page](/best-coding-classes-in-geraldton), and inland [coding classes in Kalgoorlie](/best-coding-classes-in-kalgoorlie). Learners heading to the capital can read [online coding and Python in Perth](/online-coding-and-python-classes-in-perth-western-australia), and the state overview is [coding and AI classes in Western Australia](/coding-and-ai-classes-in-western-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-karratha](https://learn.modernagecoders.com/ai-and-programming-classes-in-karratha#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
