---
title: "Coding and AI Classes in Boston, Lincolnshire | Ages 6 to 67"
description: "Coding, AI, Python and vibe coding classes taught live online for Boston, Skirbeck, Wyberton, Fishtoft and Kirton in Lincolnshire, ages 6 to 67. Lesson one is free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-boston
source: src/pages/best-coding-and-ai-classes-in-boston.html
---
> Coding, AI, Python and vibe coding classes taught live online for Boston, Skirbeck, Wyberton, Fishtoft and Kirton in Lincolnshire, ages 6 to 67. Lesson one is free.

Skip to contentFirst courses

## Coding, thinking and AI courses picked for Boston

Each band below has one suggestion. Its opening live lesson is free and you can book it without a card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: lay a ruler through scattered dots as closely as you can, then argue about what "fits" means.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsHave an AI draw a line-of-dots game in Scratch, then turn the stage and see if its line turns too.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensRegression, error and machine learning, with the Boston waterways as a line-fitting project.See the syllabus](/courses/ai-ml-masterclass-teens)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web builds made with AI help, each tested by changing the input and watching the output.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Boston borough

## Boston and the built-up areas around it

The ONS lists these built-up areas of 1,000 people or more as lying wholly inside the borough.

| Built-up area | Residents |
| --- | --- |
| Boston | 45,340 |
| Kirton | 5,570 |
| Swineshead | 2,650 |
| Butterwick | 1,365 |
| Old Leake | 1,175 |
| Fishtoft | 1,075 |
| Sutterton | 1,070 |

Each figure is the ONS's own, and we have not added them up; 70,502 for the whole borough is a separate count. Beyond these, postcodes.io records Bicker, Benington, Leverton, Amber Hill, Holland Fen, Hubbert's Bridge, Kirton End, Kirton Holme and Swineshead Bridge as villages and Brothertoft as a hamlet. Schools across the borough follow the national curriculum for England, and we build lessons round the term dates you send.

### Lincolnshire, the East Midlands and our method

County-wide options are on [coding classes in Lincolnshire](/coding-classes-in-lincolnshire), and the region on [the East Midlands](/coding-and-ai-classes-in-east-midlands). Why we put thinking ahead of any tool is explained in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Boston project

## Three straight lines through 26 fenland waterways

Fit each waterway three ways, then rotate the map one degree at a time and see which answers move.

The learner sends one request to the Overpass service for every named drain, canal, river and ditch in a box around Boston, converts the coordinates to metres on the British National Grid, and places a point every 10 m along each waterway so that heavily mapped stretches do not count for more. Twenty-six named waterways have at least 1.5 km inside the box. For each one the program draws three straight lines. The first is ordinary least squares with northing predicted from easting, the line that makes the vertical gaps smallest. The second swaps the roles, making the horizontal gaps smallest. The third is total least squares, also called orthogonal regression, which makes the perpendicular distance from each point to the line smallest and treats north and east alike.

| Waterway | Length in box | Total least squares bearing | Typical distance from that line | Northing-on-easting line differs by | Easting-on-northing line differs by | Worst northing-on-easting error as the map turns |
| --- | --- | --- | --- | --- | --- | --- |
| New Hammond Beck | 5.8 km | 80.9 | 10.1 m | 0.0 | 0.0 | 0.8 |
| Maud Foster Drain | 4.2 km | 169.3 | 47.9 m | 0.5 | 0.0 | 16.3 |
| Hobhole Drain | 13.4 km | 3.5 | 179.8 m | 2.1 | 0.0 | 14.7 |
| Old Hammond Beck | 8.5 km | 91.5 | 291.2 m | 0.0 | 33.8 | 64.5 |
| South Forty Foot Drain | 26.9 km | 50.0 | 2,236.1 m | 5.6 | 8.0 | 89.9 |

Read the table from the top. New Hammond Beck is almost ruler straight, 10.1 m from its own line on average over 5.8 km, and all three methods agree. As a waterway wanders, they part company. Hobhole Drain runs close to north and south, and the method that measures vertical gaps tilts its answer by 2.1 degrees, because for a line that steep the vertical gap is a poor measure of how far a point really is from it. Old Hammond Beck runs close to east and west, and there it is the other ordinary method that goes wrong, by 33.8 degrees. Across all 26, the northing-on-easting line differed from total least squares by more than a degree for 11 waterways and the easting-on-northing line for 13.

The last column is the real test. The program turns the whole map one degree at a time, 180 times, refits, and turns the answer back. Total least squares gives the same direction every time, because perpendicular distance does not care which way is up. Ordinary least squares does care. For 22 of the 26 waterways its answer swung by more than 10 degrees at some angle, and for the long South Forty Foot Drain by 89.9 degrees, which means it ended up almost at right angles to the truth. Only New Hammond Beck and Clay Dike, the two straightest, held within a degree. A method whose answer depends on which way you hold the map is telling you about your choice of axes, not about the drain.

### Ages 8 to 11

Draw a steep line of dots on squared paper, fit a line by eye, then turn the paper and try again.

### Ages 11 to 15

Code ordinary least squares in Python for a handful of points and swap which variable is predicted.

### Ages 15 and up

Fit all three lines to the real waterways, add the rotation test, and explain why only one stays still.

### Sources and limits

Waterway geometry © OpenStreetMap contributors under the Open Database Licence. The resampling, the fits and the rotations are ours. A straight line is a crude summary of a winding river; the point of the exercise is the fitting method, not a survey of the channels, and a different box would clip them differently.

Fitting and AI

## Why this matters for AI and vibe coding

Most machine learning inherits the assumptions of ordinary least squares, and few people check them.

| In the project | In AI practice |
| --- | --- |
| Three methods, three directions | Different loss functions answer different questions |
| Vertical gaps only | Standard regression assumes the inputs are exact |
| 89.9 degree swing when the map turned | Check whether a result survives a harmless change |
| Straight drains, no disagreement | Clean data hides the weakness of a method |
| Perpendicular distance treats both axes alike | Choose the method that matches the error you expect |

Linear regression, the first model in almost every machine learning course, is ordinary least squares. It is the right tool when the inputs are known precisely and only the output is noisy. When the inputs are noisy too, as they are with measurements, sensors and survey data, it systematically flattens the slope, and no amount of extra data fixes that. Ask an AI assistant to vibe code "fit a line to these points" and it will produce ordinary least squares every time without asking where the error lives. Boston learners have watched that line swing round on a real map, so they ask. Learners who can write Python unaided, typically in the sixth form or as adults, go on to AI agents; Copilot Studio agents are taught one-to-one only. There is more at [AI agents: a pathway for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, the Office for National Statistics and postcodes.io are independent of us and have not endorsed this page. We use their open data and take responsibility for the analysis.

Step by step

## From rulers on dots to fitting models

School years are a loose guide; what a learner does in the free lesson decides the level.

Years 2 to 7

### How to think

Patterns in points, estimates and asking what "closest" means.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Games an AI helps build and the child checks by changing things.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python, statistics and AI

Regression and model testing on real data, beside GCSE and A level work.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Data and AI in practice

Solid Python, then machine learning and generative AI.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI and line fitting

## What is total least squares, and how is it different from ordinary regression?

Total least squares, also called orthogonal regression, fits a line by making the perpendicular distances from the points to the line as small as possible, so it allows for error in every coordinate, whereas ordinary least squares minimises only the vertical distances and assumes the horizontal values are exact.

Fitted to 26 waterways around Boston, total least squares gave the same direction however the map was turned, while ordinary least squares swung by more than 10 degrees for 22 of them.

The two methods agreed only where a waterway was almost perfectly straight, such as New Hammond Beck, 10.1 m from its line on average.

Boston teenagers who have turned a map and watched a regression line move ask what any AI model is assuming about its errors. That habit comes from coding the fit themselves, one of the strongest reasons to learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Online lessons

## Skirbeck, Wyberton and Fishtoft, one live lesson

A computer with a webcam and a connection that holds a video call is all that is needed.

### The learner builds

Every line is typed by the learner on a shared screen; the tutor asks and nudges.

### Level first

The free lesson shows us where a learner is before any course is suggested.

### Genuinely free trial

Full length, no card, and a recommendation at the end.

### Classes at one stage

Fifteen to twenty learners at the same level, drawn from the whole UK.

### Two lessons weekly

Holiday weeks are skipped once you have told us the dates.

### Same slot all year

We absorb the clock changes so your time never shifts.

Why we teach online

One town seldom has enough learners at exactly the same stage to fill a class. The whole country does.

Fees

## Fees for Boston learners

Boston comes under our international prices, which apply outside India.

First class**USD 0**

A full first lesson, free, closing with our course advice.

Group tuition**USD 100**

About eight group lessons per month.

Private tuition**USD 150**

About eight private lessons per month.

Prices are set in US dollars, with no sterling version. We only invoice after the trial, once a course and weekly slot are fixed. The pricing page explains holidays, missed lessons and switching format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Boston%2C%20Lincolnshire.)Reviews

## Google reviews from East Midlands families and UK learners

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free lesson from Boston

Share an age or year group and a favourite subject or hobby. The trial might be a dots-and-ruler puzzle, a Scratch game made with an AI, first Python, or a first line fitted to real data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Boston one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Boston%2C%20Lincolnshire.)

Submitted details are used for placement and follow-up.

FAQ

## Boston: questions and answers

Line fitting, the waterways project, coding, AI and the practical side.

### How many people live in Boston, Lincolnshire?

The Boston built-up area had 45,340 usual residents at the 2021 census, on ONS figures, and Boston borough had 70,502.

### Are coding and AI classes available online in Boston?

Yes. Live video lessons for ages 6 to 67 cover Boston, Skirbeck, Wyberton, Fishtoft, Kirton and the villages of the borough.

### What is ordinary least squares?

The standard way to fit a straight line: choose the line that makes the sum of squared vertical gaps between the points and the line as small as possible.

### Why did turning the map change the answer?

Because ordinary least squares measures gaps straight up and down. Turn the map and "up" points somewhere else, so different gaps are measured. Total least squares uses perpendicular gaps, which do not depend on the direction of the axes.

### What do learners build in the Boston project?

A Python program that downloads the named waterways around Boston, fits three kinds of straight line to each, and rotates the map 180 times to see which fits stay put.

### Do you teach vibe coding as well?

Yes, for all ages. Learners instruct an AI, then read, run and question what it produces.

### When can a learner move on to AI agents?

Once they can write Python unaided, usually in sixth form or as an adult. Copilot Studio agents are taught one-to-one only.

### Do you help with GCSE and A level?

Yes, for computer science and maths, with understanding as the aim. We make no promises about grades.

### How much do lessons cost?

The first lesson is free; after that it is USD 100 a month in a group or USD 150 a month for one-to-one.

### Do you stop for school holidays?

Yes, whenever you ask; just send the dates.

Lincolnshire and nearby

## More Lincolnshire and East Midlands pages

Other projects run on the pages for [Lincoln](/best-coding-class-in-lincoln), [Grimsby](/ai-and-programming-classes-in-grimsby) and [Scunthorpe](/vibe-coding-and-ai-agents-classes-in-scunthorpe), and the county has a page at [Lincolnshire](/coding-classes-in-lincolnshire). Elsewhere, start from the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Send us a WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Boston%2C%20Lincolnshire.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-boston*
