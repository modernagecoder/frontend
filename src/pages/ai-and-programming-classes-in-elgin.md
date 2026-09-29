---
title: "AI and Programming Classes in Elgin | Ages 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Elgin, Bishopmill, New Elgin and Fogwatt learners in Moray, aged 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-elgin
source: src/pages/ai-and-programming-classes-in-elgin.html
---
> Moray's biggest locality is Elgin, where National Records of Scotland estimated 25,040 people lived in mid-2020. Bishopmill and New Elgin are suburbs recorded in the IV30 district, alongside the villages of Fogwatt and Lhanbryde and the hamlet of Longhill. From the age of six up to 67, learners take AI, programming, Python, vibe coding and maths with tutors based in India, live on camera, in one-to-one lessons or in small classes grouped by stage. We teach pattern-finding and careful reasoning first, so a learner understands what a search or an AI model is really doing. Lesson one costs nothing and ends with our pick of course. The Elgin project turns 786 months of rainfall from the Met Office's former Nairn station into a string of letters and searches it for wet and dry spells with the Knuth-Morris-Pratt algorithm. Tuition after that is USD 100 a month in a class or USD 150 a month privately.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Elgin

Elgin, Moray, Scotland / Live online

# AI and programming classes in Elgin

**Which are the best AI and programming classes in Elgin?** Moray's biggest locality is Elgin, where National Records of Scotland estimated 25,040 people lived in mid-2020. Bishopmill and New Elgin are suburbs recorded in the IV30 district, alongside the villages of Fogwatt and Lhanbryde and the hamlet of Longhill. From the age of six up to 67, learners take AI, programming, Python, vibe coding and maths with tutors based in India, live on camera, in one-to-one lessons or in small classes grouped by stage. We teach pattern-finding and careful reasoning first, so a learner understands what a search or an AI model is really doing. Lesson one costs nothing and ends with our pick of course. The Elgin project turns 786 months of rainfall from the Met Office's former Nairn station into a string of letters and searches it for wet and dry spells with the Knuth-Morris-Pratt algorithm. Tuition after that is USD 100 a month in a class or USD 150 a month privately.

Searching for a pattern inside a long sequence sounds simple: line the pattern up at every position and compare letter by letter. It works, but every time a partial match fails, that simple method slides forward one place and starts comparing again, re-reading letters it has already seen. In 1977 Knuth, Morris and Pratt published a method that never steps backwards. Before searching, it works out, for each position in the pattern, how much of the pattern would still match after a failure, a table called the failure function. This project applies it to real data: monthly rainfall recorded by the Met Office at Nairn from 1931 to 1996, coded as low, middle or high for the time of year.

Facts last verified 29 September 2026. Teaching is online; no Elgin branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Elgin courses in patterns, Python and AI

Choose a course to suit the learner's age. Every one opens with a free live lesson, booked without payment details.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: spotting repeats, coding weather as symbols and searching without starting over.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the learner, made with an AI and tested bit by bit.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning and sequence data in Python, including the Nairn pattern search.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python for algorithms, time series, AI and agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Elgin, Bishopmill, New Elgin and Fogwatt

The NRS figure for Elgin, and places recorded in IV30.

**Elgin in National Records of Scotland estimates**

| Area | People |
|---|---|
| Elgin locality, mid-2020 | 25,040 |

For the IV30 district, postcodes.io lists Bishopmill and New Elgin as suburban areas of Moray, Fogwatt and Lhanbryde as villages and Longhill as a hamlet. Moray schools teach the Curriculum for Excellence, and so our planning follows Scottish P and S years, with SQA Computing Science and Maths support from National 5 up. Once we know the holiday dates, those weeks are left clear.

### Moray, Inverness and the SQA

More on [coding classes in Moray](/coding-classes-in-moray), [Inverness](/best-coding-class-in-inverness) and [National 5 Computing Science help](/national-5-computing-science-help). Our reasons for teaching thinking before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Searching 786 months of weather for patterns with Knuth-Morris-Pratt

Turn rainfall into letters, look for runs of wet and dry months, and count every comparison.

The Met Office publishes monthly records for its former Nairn weather station, which moved site in 1998 and closed at the end of 2014. The learner takes the longest stretch with no missing rainfall, January 1931 to June 1996, all at the original site: 786 months. Each month becomes a letter: L if its rain was in the lowest third for that calendar month, H if in the highest third, M otherwise. The result is a 786-letter string with 272 L, 263 M and 251 H. Now weather questions become text searches. How often did three high months come in a row? That is a search for HHH.

**Patterns in the Nairn rainfall string, 1931 to 1996, and the comparisons each search needed, our Python run on Met Office data**

| Pattern | Meaning | Times found | Naive comparisons | KMP comparisons |
|---|---|---|---|---|
| HHH | Three wet months in a row | 28 | 1,121 | 1,009 |
| LLLL | Four dry months in a row | 13 | 1,176 | 1,044 |
| LLLLLH | Five dry months, then a wet one | 2 | 1,190 | 1,047 |
| HHHHH | Five wet months in a row | 1 | 1,153 | 1,036 |

On this data the saving is real but modest: KMP made about 10 to 12% fewer comparisons than the naive method. The bigger difference is behaviour. The naive search kept re-reading earlier months, 1.51 comparisons per month for LLLLLH, while KMP read each month once, in order, and never went back, 1.33 comparisons per month including the extra steps along its table. To see the worst case, the learner builds an invented string of 786 L letters: searching it for LLLLLH costs the naive method 4,686 comparisons and KMP 1,567. Real weather rarely looks like that, which is why the honest summary is that KMP guarantees good behaviour rather than always winning by a mile. The longest dry run in the real record was six months, and the longest wet run five.

### P5 to P7

Colour a year of weather as dry, middle or wet squares and hunt for three wet squares together.

### S1 to S3

Code Nairn's rainfall as L, M and H in Python and count the HHH runs with a simple loop.

### S4 and up

Build the KMP failure function, count comparisons against the naive search and test a worst case.

### Met Office records, our coding

Rainfall comes from the Met Office historic station data for Nairn, published under the Open Government Licence. The letter coding, the searches and all counts are our own; the station is described only from its own file header.

## What this teaches about vibe coding and AI agents

Much of AI is pattern-finding in long sequences; how you search matters.

**From the Nairn pattern search to working with AI**

| In the rainfall project | When AI works with sequences |
|---|---|
| Rain became a string of L, M and H | AI turns text, sound and data into tokens |
| KMP read each month once, in order | Single-pass methods suit live streams |
| Savings on real data were about a tenth | Measure on your own data, not only the worst case |
| The invented case showed 4,686 against 1,567 | Know the worst case too |
| Coding months as thirds was a choice | Every encoding shapes what can be found |

Language models read text as sequences of tokens, and monitoring agents watch streams of readings, alerts or logs for patterns as they arrive. An agent that must spot a pattern in a live feed cannot go back and re-read old data cheaply, which is exactly the property KMP provides. In vibe coding, the learner describes the search and an AI writes it; our Elgin learners then count the work it does on real data and on a nasty invented case before trusting it. Agents that watch data on your behalf need that same testing. Learners move on to building agents once their Python is self-sufficient, usually late in secondary or as adults, and Copilot Studio agents run as one-to-one lessons only. Our [agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) set out the path.

None of the Met Office, National Records of Scotland or postcodes.io is linked to Modern Age Coders. We used their open data as published; the coding scheme, the searches and any mistakes are ours.

## From weather squares to string algorithms

Primary or secondary year is our first guess; the free session sharpens it.

- **P1 to P7: How to think** Symbols, repeats and searching in order. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Vibe coding for kids** Games and apps the learner plans and an AI helps build. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Python and algorithms** Strings, searching and sequence data alongside SQA Computing Science. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)
- **Adults: Sequences, AI and agents** Time series, pattern search and AI agents in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## How does a computer search for a pattern in a long sequence?

The simplest way checks the pattern at every position; the Knuth-Morris-Pratt algorithm does better by precomputing how much of the pattern still matches after a mismatch, so it reads the sequence once and never steps back.

Searching 786 months of Nairn rainfall coded as letters, KMP needed about 10 to 12% fewer comparisons than the naive method on real patterns, and 1,567 against 4,686 on an invented worst case.

Learners who have run both ask of any AI search or monitoring tool: does it re-read everything, and what is its worst case?

Understanding how a search really works keeps Elgin teenagers in charge of the AI tools they use, and learning to code is how that understanding is built in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Bishopmill to Fogwatt, online

Needed: a computer, a webcam and an internet connection steady enough for video.

- **Hands-on learner** Everything is typed and run by the student, while the tutor follows on screen share and asks what each count means.
- **Trial shapes the plan** The free lesson shows where to start, and we note any SQA exam due.
- **Free opening class** Class one has no charge and ends with a course suggestion.
- **Same-stage groups** Five to ten learners from across Britain, matched by level.
- **Two lessons a week** Paused for school holidays.
- **Steady lesson time** British Summer Time changes are handled by our tutors, not your diary.

**Why online** In a region as spread out as Moray, five learners at one level on the same evening rarely live close together. Video brings them into one class.

## Elgin fees

Elgin learners pay the international rate we use everywhere except India.

- First class: USD 0. A complete free lesson, then a recommended course.
- Group tuition: USD 100 a month. Around eight live lessons each month in a small class.
- Private tuition: USD 150 a month. Around eight live private lessons each month.

We bill in US dollars and never in pounds, starting only when the trial has fixed a course and a weekly slot. Holiday weeks, missed sessions and switching between private and group are explained on the pricing page.

## Elgin questions

### What is the population of Elgin?

National Records of Scotland estimated 25,040 people in the Elgin locality in mid-2020.

### Are AI and programming classes available online in Elgin?

Yes. Every lesson is live on video, for ages 6 to 67 in Elgin, Lhanbryde and across Moray.

### What is the Knuth-Morris-Pratt algorithm?

A string search method, published in 1977, that finds a pattern in a text without ever moving backwards through the text, by using a precomputed table of how much of the pattern still matches after a mismatch.

### What is a failure function?

The table KMP builds from the pattern alone. For each position it records the length of the longest start of the pattern that also ends the part matched so far, so after a mismatch the search resumes from there instead of starting again.

### What does the Elgin project involve?

Coding 786 months of Met Office Nairn rainfall as low, middle or high, then searching the string for wet and dry spells with naive search and KMP and counting the work each does.

### Do you teach vibe coding?

Yes, for every age; learners decide what the program should do and check what the AI writes.

### When can learners build AI agents?

Once their Python is self-sufficient, usually late in secondary school or as adults; Copilot Studio agents are one-to-one only.

### Do you support National 5 and Higher Computing Science?

Yes, and Advanced Higher and Maths too, taught for understanding without any promised grade.

### How much are lessons?

The first is free; afterwards USD 100 a month in a group or USD 150 a month one-to-one.

### Are there lessons in the school holidays?

No, we pause; send us the dates.

## More north of Scotland pages

Pages with projects of their own: [Moray](/coding-classes-in-moray) (reading Roman numerals), [Inverness](/best-coding-class-in-inverness), [Highland](/coding-classes-in-highland) and [Aberdeen](/best-coding-class-in-aberdeen). For anywhere else, start from the [Scotland page](/coding-and-ai-classes-in-scotland) or the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-elgin](https://learn.modernagecoders.com/ai-and-programming-classes-in-elgin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
