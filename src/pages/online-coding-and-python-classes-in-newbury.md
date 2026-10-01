---
title: "Online Coding and Python Classes in Newbury | Ages 6 to 67"
description: "Online coding and Python classes for Newbury, Speen, Shaw, Wash Common and Greenham, for ages 6 to 67, with data projects, vibe coding and AI. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-newbury
source: src/pages/online-coding-and-python-classes-in-newbury.html
---
> The Newbury built-up area had 42,260 usual residents at the 2021 census, according to the ONS, and West Berkshire as a whole had 161,448. Speen, Shaw, Wash Common, Donnington and Greenham are gazetteer suburbs whose nearest postcode falls inside the built-up area. Modern Age Coders gives live online lessons in coding, Python, vibe coding, AI and maths to Newbury learners aged six to 67; our tutors are in India and teach either one-to-one or in level-matched groups of five to ten. A free lesson happens before we recommend any course. The Newbury project takes a full year of water levels from the Environment Agency gauge at Shaw on the River Lambourn and asks how to smooth out the wobble without shaving the tops off the rises. Lessons after the trial are USD 100 a month in a group or USD 150 a month privately.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [South East England](/coding-and-ai-classes-in-south-east-england) / Newbury

Newbury, West Berkshire / Live online

# Online coding and Python classes in Newbury

**What are the best online coding and Python classes in Newbury?** The Newbury built-up area had 42,260 usual residents at the 2021 census, according to the ONS, and West Berkshire as a whole had 161,448. Speen, Shaw, Wash Common, Donnington and Greenham are gazetteer suburbs whose nearest postcode falls inside the built-up area. Modern Age Coders gives live online lessons in coding, Python, vibe coding, AI and maths to Newbury learners aged six to 67; our tutors are in India and teach either one-to-one or in level-matched groups of five to ten. A free lesson happens before we recommend any course. The Newbury project takes a full year of water levels from the Environment Agency gauge at Shaw on the River Lambourn and asks how to smooth out the wobble without shaving the tops off the rises. Lessons after the trial are USD 100 a month in a group or USD 150 a month privately.

Every sensor wobbles, and the usual cure is an average: replace each reading with the mean of its neighbours. It works, and it quietly lies. Averages flatten peaks and, if they only look backwards, they report every rise late. A method from 1964 chemistry labs, the Savitzky-Golay filter, fits a small curve through each window instead of a flat line, and a year of River Lambourn readings shows exactly how much difference that makes.

Facts last verified 1 October 2026. Teaching is online; no Newbury branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Online coding and Python courses for Newbury learners

The course we would usually suggest at each age. All of them open with a free live lesson, no card needed.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Puzzles and patterns that train the step-by-step thinking coding depends on.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games built with an AI, then tested and put right by the child.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 17): Python with real data: loading, cleaning, charting and filtering, as in the Lambourn project.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): A complete Python route for adults, from first script to confident projects.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Newbury, Speen, Shaw, Wash Common and Greenham

The census figures for the town and the district, and the suburb names we checked.

**Usual residents at the 2021 census (ONS)**

| Area | Residents |
|---|---|
| Newbury built-up area | 42,260 |
| West Berkshire | 161,448 |

West Berkshire also contains Thatcham, Hungerford, part of the Reading built-up area and many villages, so the district figure is a different area rather than a total to add the town to. Each suburb named here was checked the same way: we found the postcode nearest to its gazetteer point and confirmed that postcode is inside the Newbury built-up area. Newbury schools follow the national curriculum for England, and lessons can run beside GCSE computer science, GCSE maths and A level courses.

### Across Berkshire

Neighbouring pages: [Reading](/best-coding-class-in-reading), [Bracknell](/online-coding-and-python-classes-in-bracknell), [Wokingham](/vibe-coding-and-ai-agents-classes-in-wokingham) and [the Berkshire page](/coding-classes-in-berkshire). Why we put thinking ahead of AI tools is explained on [reasoning first, tools second](/learn-to-think-not-just-use-ai-tools-uk).

## Smoothing a river without flattening it

35,040 readings from one gauge, four window lengths and three ways to smooth.

The learner downloads a year of readings from the Environment Agency's open hydrology service: the water level at the gauge called Shaw, on the River Lambourn, every 15 minutes through 2025. That is 35,040 quality-checked values with none missing; 98 extra readings taken at odd times on 11 to 13 November were marked unchecked, so they are left out. The level moves between 1.363 m and 1.832 m on the gauge's own scale. Most of the time it barely changes, with a typical 15-minute step of 0.62 mm, but the eight largest rises of the year, each at least three days apart, were all 76 mm or more within a day, the largest 143 mm to a peak at 23:15 on 5 January.

Three smoothers are tried on the whole year. A centred moving average replaces each reading with the mean of a window around it. A trailing average uses only the past, the way a live dashboard must. The Savitzky-Golay filter, published by Abraham Savitzky and Marcel Golay in 1964, fits a small polynomial through each window by least squares and keeps its middle value, so a curved peak can survive. In Python it is one call, scipy.signal.savgol_filter. For each of the eight big rises the learner measures how much of the rise is left after smoothing, and how far the peak moves.

**Share of each big rise kept after smoothing (average, worst of eight) and median shift of the peak, our run on the 2025 Shaw readings**

| Window | Moving average | Savitzky-Golay, order 2 | Savitzky-Golay, order 4 |
|---|---|---|---|
| 3 hours | 98.4%, 95.0%, 30 min | 99.7%, 99.0%, 30 min | 100.0%, 99.6%, 15 min |
| 6 hours | 96.4%, 88.3%, 52 min | 99.1%, 96.5%, 30 min | 99.5%, 98.4%, 30 min |
| 12 hours | 90.9%, 79.7%, 82 min | 99.1%, 90.8%, 45 min | 99.4%, 94.4%, 30 min |
| 24 hours | 77.8%, 63.6%, 262 min | 94.5%, 83.5%, 82 min | 99.1%, 89.4%, 60 min |

With a day-long window the moving average keeps only 77.8% of a typical rise, as little as 63.6% of one, and moves the peak by more than four hours. Savitzky-Golay of order 4 over the same window keeps 99.1%. The trailing average keeps the same share as the centred one but reports peaks late: by a median of 982 minutes, more than 16 hours, at the 24-hour window. There is a price, and the learner measures it too. After the 24-hour moving average the typical step is 0.183 mm; after order-4 Savitzky-Golay it is 0.305 mm, so less of the wobble is removed. One more surprise: orders 2 and 3 gave identical results, a known property of the centred filter that the numbers confirm.

### Ages 8 to 11

Plot a week of readings on squared paper and try averaging each point with its neighbours.

### Ages 11 to 15

Read the file with Python's csv module and write a moving average with a loop.

### Ages 15 and up

Use numpy and scipy to compare filters, then measure what each one costs on real peaks.

### Where the data comes from

River levels are Environment Agency data from the Hydrology API, used under the Open Government Licence, read on 1 October 2026. The filter is from Savitzky and Golay, Analytical Chemistry, 1964. The choice of peaks, the windows and every percentage above are from our own Python; we say nothing about flooding or what caused any rise.

## What smoothing a river teaches about AI and data

Cleaning data is a decision, and each method decides differently.

**From Lambourn readings to working with AI**

| What the filters did | What to remember with AI |
|---|---|
| A 24-hour average kept 77.8% of a typical rise | Tidying data can erase the very thing you want |
| The trailing average was 16 hours late at the peak | A model that only sees the past lags behind change |
| Savitzky-Golay kept peaks but removed less wobble | Every improvement has a cost; measure both sides |
| Orders 2 and 3 matched exactly | Check a claim by running it, not by reading about it |
| 98 unchecked readings were left out | Know which data you trust, and say what you dropped |

AI assistants suggest smoothing, averaging and cleaning steps readily, and they rarely mention what those steps remove. Newbury learners practise vibe coding by asking an AI for the filter code, then plotting the result against the raw readings and measuring the peaks themselves. Building AI agents begins once a learner writes Python unaided, usually in the sixth form or as an adult, and Copilot Studio agents are taught one-to-one only. For more, see [our reasons for explaining code rather than pasting it](/understand-the-code-dont-copy-paste-uk) and [the agent-building course for UK students](/ai-agents-course-for-students-uk).

The Environment Agency, the ONS and postcodes.io provided open data for this page, but they have no link with Modern Age Coders and have not reviewed our figures.

## From squared paper at seven to signal processing at seventeen

A learner joins at the step the free lesson points to; school year is only a starting guess.

- **Years 2 to 6: Patterns first** Sequences, averages and puzzles, often on paper before the screen. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Code with AI** Scratch with an AI helper, then early Python. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and data** Files, charts, numpy and filters on real readings. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Python in depth** Thorough Python, then data structures and algorithms. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)

## What is a Savitzky-Golay filter, and why does it matter when AI cleans data?

A Savitzky-Golay filter smooths a series by fitting a small polynomial through each window of readings and keeping its centre value, and it matters because a plain average, the kind of step an AI often suggests, can quietly flatten and delay the peaks that matter most.

On the 2025 Shaw readings from the River Lambourn, a 24-hour moving average kept 77.8% of a typical rise while an order-4 Savitzky-Golay filter kept 99.1%, and a trailing average reported peaks 982 minutes late.

A learner who has measured that asks of every cleaning step, from an AI or anyone else, what it removed along with the noise.

Newbury teenagers who can check a data pipeline with their own code keep control of the AI tools they use, and that skill is built by programming. The longer argument is in [why learning Python is still a smart move in 2026](/blog/is-coding-worth-learning-2026).

## How Newbury lessons work

All lessons are live on video. A laptop or desktop with a keyboard is needed, since phones and tablets are too limited for real programming.

- **Learner in control** The learner types every line and runs it; the tutor asks what it should do.
- **Start at the right step** The free lesson shows the level, and the course follows from that.
- **Free to try** The trial lesson has no fee and asks for no card.
- **Level-matched groups** Five to ten learners at one stage, from towns all over the UK.
- **Regular rhythm** Around eight lessons a month in term, two a week, with holidays skipped on request.
- **Same hour all year** Clock changes are handled on our side so your lesson time holds.

**Why online** A group at exactly one level is far easier to build from the whole country than from a single town, and video removes the journey.

## Fees for Newbury learners

Newbury learners pay the rate we use for all students outside India.

- First class: USD 0. First lesson: free, full length, with a course suggestion at the end.
- Group tuition: USD 100 a month. Group lessons, about eight a month.
- Private tuition: USD 150 a month. Private lessons, about eight a month.

Our prices are in US dollars and we do not convert them to pounds. The trial is free, and no invoice is raised until a course and a regular time are agreed. See the pricing page for holidays, missed lessons and changes between group and private.

## Newbury questions

### What is the population of Newbury?

The ONS gives 42,260 usual residents for the Newbury built-up area at the 2021 census. West Berkshire had 161,448.

### Do you offer online coding and Python classes in Newbury?

Yes. Learners aged 6 to 67 in Newbury, Speen, Shaw, Wash Common, Greenham or anywhere in West Berkshire can join, since all lessons are live online.

### What does a Savitzky-Golay filter do?

It smooths noisy readings by fitting a low-order polynomial to each window of points by least squares and keeping the fitted middle value, which preserves peaks better than a plain average.

### Why do trailing averages lag?

Because they only use past readings, so a rise shows up only after enough of it has entered the window. At a 24-hour window the Lambourn peaks appeared a median of 982 minutes late.

### What did the Newbury project find?

Over a 24-hour window, a moving average kept 77.8% of a typical rise in the 2025 Shaw readings, while an order-4 Savitzky-Golay filter kept 99.1% but removed less of the small wobble.

### What is vibe coding?

Asking an AI in ordinary words for a program, then reading, running and fixing its code. We teach it alongside Python written by the learner.

### When do learners move on to AI agents?

Once they can write Python unaided, usually from the sixth form or as adults. Copilot Studio agents are one-to-one only.

### Will this help with GCSE computer science or maths?

Data handling, averages and algorithms feature in GCSE and A level computer science and maths, and this project uses all of them. We make no promises about grades.

### How much do lessons cost?

The first lesson is free; then USD 100 a month in a group or USD 150 a month one-to-one.

### Can lessons pause for holidays?

Yes. Let us know the dates and we will skip those weeks.

## Other Berkshire and South East pages

We also have pages for [Reading](/best-coding-class-in-reading), [Bracknell](/online-coding-and-python-classes-in-bracknell), [Wokingham](/vibe-coding-and-ai-agents-classes-in-wokingham) and [Basingstoke](/ai-and-programming-classes-in-basingstoke). Other places are listed on [the county page](/coding-classes-in-berkshire), [the South East region page](/coding-and-ai-classes-in-south-east-england) and [the page for the whole UK](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-newbury](https://learn.modernagecoders.com/online-coding-and-python-classes-in-newbury#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
