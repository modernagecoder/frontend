---
title: "Online Coding and Python Classes in Whitehorse, Melbourne"
description: "Live online coding and Python classes for City of Whitehorse children, teenagers and adults, from Scratch to Python scripts that handle real files."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-whitehorse-melbourne
source: src/pages/online-coding-and-python-classes-in-whitehorse-melbourne.html
---
> Through live lessons on screen, in groups of five to ten or one to one, writing Python that works on real public files. The City of Whitehorse had 169,346 residents at the 2021 Census, and 24.1% of its homes were townhouses, terraces or semi-detached houses, against 13.9% across Victoria.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / City of Whitehorse

City of Whitehorse, Melbourne, Victoria / Live online

# Online coding and Python classes in the City of Whitehorse

**How can City of Whitehorse learners study coding and Python online?** Through live lessons on screen, in groups of five to ten or one to one, writing Python that works on real public files. The City of Whitehorse had 169,346 residents at the 2021 Census, and 24.1% of its homes were townhouses, terraces or semi-detached houses, against 13.9% across Victoria.

Victoria publishes one file of station entries for each financial year. A script that reads all of them has to find them first, and that is where small mistakes hide. Ask for files containing "2024" and you get two years, not one. Ask for files ending "_2024" and you get the year that finished in 2024, which may not be the one you meant.

Facts last verified 10 October 2026. Teaching is online; no City of Whitehorse branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses that teach Python for real files

Each course here works with folders and files from early on, the skill behind the glob project. The free first class decides the starting course.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python with files, folders and the standard library, including pathlib.
- [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course) (Ages 13 and up): Python certification preparation that tests exactly these details.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): From first scripts to tidy programs that handle many files safely.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (University and adult): Automating folders of reports, exports and downloads.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Townhouses, graduates and six stations

Figures for the City of Whitehorse local government area (ABS code LGA26980) from the 2021 Census QuickStats, compared with Victoria. Box Hill, inside the council area, has a separate page.

**City of Whitehorse, 2021 Census headline counts**

| Headline | City of Whitehorse |
|---|---|
| Residents | 169,346 |
| Median age | 39 |
| Families | 45,342 |
| Private dwellings | 71,521 |
| Average people per household | 2.6 |

**City of Whitehorse against Victoria**

| Measure | City of Whitehorse | Victoria |
|---|---|---|
| Semi-detached, row or terrace houses and townhouses | 24.1% (15,216) | 13.9% |
| Adults with a bachelor degree or higher | 41.7% (59,350) | 29.2% |
| Workers employed as professionals | 33.4% (27,848) | 25.0% |
| Workers who took the train | 2.5% (2,118) | 1.6% |
| Workers who drove to work | 40.6% (33,835) | 49.9% |

### Area

The bureau puts the council area at 64.28 square kilometres in Melbourne's east.

### School age

Residents aged 10 to 14 numbered 9,692 at the Census, 5.7% of the population.

### Lockdown note

The Census was held in the August 2021 lockdown, when 28,574 employed residents, 34.3%, worked from home.

The bureau makes small random adjustments to Census cells for privacy, so components may not match totals. Each figure is quoted as published; we never total the parts ourselves.

## Find the files before you read them

We downloaded the seven yearly station-entry files, FY18-19 to FY24-25, into one folder and tried seven glob patterns with Python's pathlib, running Python 3.13 on Windows. Then we read every file and pulled out the stations inside the council boundary.

**What each pattern found (our run on the published file names)**

| Pattern | Files found | What happened |
|---|---|---|
| *.csv | 7 | Everything, which was right here |
| *2024* | 2 | FY23-24 and FY24-25 both contain 2024 |
| *fy_2024_* | 1 | FY24-25, the year starting in 2024 |
| *_2024.csv | 1 | FY23-24, the year ending in 2024 |
| Full name with fy_20??_20?? | 7 | Exact shape, safe to count |
| *FY* | 7 | Matched lower-case fy, because Windows ignores case |
| *FY* with case_sensitive=True | 0 | The same pattern, made strict |

**Stations inside the City of Whitehorse, entries (Department of Transport and Planning, rounded to 50)**

| Station | FY18-19 | FY24-25 |
|---|---|---|
| Blackburn | 1,484,400 | 1,206,950 |
| Mitcham | 1,241,550 | 925,550 |
| Nunawading | 1,148,000 | 758,050 |
| Heatherdale | 605,900 | 448,700 |
| Laburnum | 414,700 | 316,900 |
| Mont Albert | 260,850 | Not in the file |

### The missing station

Mont Albert appears in every file up to FY22-23, with 92,300 entries that year, and in none after. A loop expecting every station in every year stops with an error.

### An extra row

Six files hold 222 stations; FY22-23 holds 223. A script that assumes a fixed row count would quietly misalign.

### Hidden bytes

Only the FY24-25 file begins with a byte order mark, so its first column name reads differently unless the file is opened with the right encoding.

### When a plain list is better

For seven files that never change, typing the seven names into a list is simpler than any pattern and just as correct. Globbing earns its place when an eighth file arrives next year, and only if the script also checks that it found the number of files it expected.

The patterns, counts and station table come from our own script on 10 October 2026; the figures inside the files are the department's, quoted as published. Box Hill, the council's busiest station, is covered on its own page.

## Three habits for finding files safely

Python's pathlib treats paths as objects, and its glob method finds files that match a pattern. Most bugs come from the pattern, not the code.

**Habits that would have caught every problem above**

| Habit | In pathlib | Catches |
|---|---|---|
| Match the whole name shape | glob with ? for each digit | Two years matching one search |
| Count what you found | Compare len(files) with the number expected | A file missing or added |
| Say how case should work | case_sensitive=True, added in Python 3.12 | A pattern that only works on Windows |

The Python documentation says glob follows the platform's rules unless told otherwise: typically case-sensitive on POSIX systems such as Linux, and case-insensitive on Windows. A script written on a Windows laptop can therefore pass every test and then find nothing on a Linux server.

### Younger learners

Name and sort a folder of drawings by date, then find all the ones from one month.

### Secondary students

Write the discovery step for the seven station files and make it fail loudly if the count is wrong.

### Adults

Point pathlib at a downloads folder of monthly exports and build one tidy table from them.

## Forty-nine schools and the 2027 year

More from the state files for the council area.

### Schools

The 2025 school locations file places 49 open schools inside the council boundary: 31 primary, 9 secondary, 4 combined, 4 specialist and 1 language school.

### By sector

Of the 49, 33 are government schools, 10 Catholic and 6 independent.

### Station recovery

Mitcham's 925,550 entries in FY24-25 were 74.5% of its FY18-19 figure, by our calculation.

**Term 4, 2027** Victorian government schools run Term 4 from Monday 4 October to Friday 17 December 2027; students start the year on Thursday 28 January.

## From sorted folders to Python pipelines

Age bands are a starting point only; the free first class confirms the level.

- **Ages 6 to 10: Scratch** Projects with saved files, lists and simple sorting. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 10 to 14: First Python** Reading a file, looping over lines and printing results. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Python with real data** Folders of public files, pathlib and careful checks. [Python for Teens](/courses/python-complete-masterclass-teens), [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course)
- **University and adult: Python at work** Automation over many files, built to fail loudly. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## If an AI writes the file-reading code, why should a City of Whitehorse learner check the pattern?

Because the pattern decides which data the program ever sees, and a wrong one fails without a sound.

Ask an assistant to "load the 2024 station file" and a natural draft globs for 2024. It runs, it returns data, and it has silently mixed two financial years together. On another machine, a pattern written in capitals might return nothing at all.

A learner who has watched one pattern find two files, another find the wrong one, and a third behave differently on Windows will check what an AI's code actually picked up. That check takes one line and saves whole reports.

The City of Whitehorse learner who counts the files is the one whose results can be trusted. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Online lessons across the City of Whitehorse

Lessons are live on screen, so learners join from home in any suburb of the council area.

- **Shared code** Learners open a link, share a screen and the teacher works through the code with them live.
- **State terms** Courses follow Victoria's four school terms and pause in the holidays between.
- **A first class** The free trial is a real lesson; afterwards we recommend a course and a fixed weekly time.
- **Group size** Five to ten learners in each group, sorted by level rather than location.
- **Twice a week** Two lessons a week, about eight a month, with breaks agreed beforehand.
- **Teachers in India** Teachers work from India, so a 5pm Whitehorse lesson in summer is 11:30am India time, and 12:30pm after daylight saving ends.

**Melbourne time** Melbourne's daylight saving period runs from Sunday 4 October 2026 to Sunday 4 April 2027. India does not adjust its clocks, so we confirm every lesson time in Melbourne time.

## City of Whitehorse class fees

Three prices, in plain terms.

- First class: USD 0. The first lesson is free and ends with an honest view of where to go next.
- Group tuition: USD 100 a month. A month of group lessons, usually eight, in a group of five to ten at one level.
- Private tuition: USD 150 a month. About eight one-to-one lessons each month.

Outside India we bill in US dollars, so a Whitehorse family pays the same as families anywhere else abroad. Payment starts only once the trial has agreed a course and time; holidays, missed lessons and format switches are explained on the pricing page.

## City of Whitehorse coding and Python questions

### How many people live in the City of Whitehorse?

The 2021 Census QuickStats for the City of Whitehorse record 169,346 residents, 45,342 families and 71,521 private dwellings.

### What is pathlib in Python?

A standard library module that represents file paths as objects, with methods to join, inspect and search them, including glob for matching patterns.

### What does glob do?

It finds files whose names match a pattern, where an asterisk stands for any run of characters and a question mark for exactly one. The right pattern finds every file you want and nothing else.

### What did the Whitehorse file project show?

A search for 2024 found two yearly files, a search for names ending _2024 found the year ending in June 2024, and on Windows a pattern in capitals matched all seven lower-case names.

### Do children need to know about files to start coding?

No. Younger children start with Scratch, where projects save themselves. Files and folders come in once they move to typed Python.

### Will learners write Python on their own computer?

Yes, where possible, because working with real folders on their own machine is part of the skill. The teacher helps set it up in the first lessons.

### Do you teach from a Whitehorse location?

No. All lessons are live online, we have no Australian premises, and the phone number shown is Indian.

### How much do Python classes cost for City of Whitehorse learners?

The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for one-to-one lessons. Course, format and time are agreed before you pay.

### How are groups made up?

Five to ten learners at a matching level, pace and goal; private lessons fill the gap when no group time works.

### Can adults learn Python with you?

Yes. Adult learners study in adult groups or privately, often to automate a weekly job built around folders of files.

## More for City of Whitehorse learners

Inside the council area, [Box Hill](/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne) has its own page on AI agents. Families with younger children can read about [kids coding in Melbourne](/coding-classes-for-kids-melbourne), and the [Victoria guide](/coding-and-ai-classes-in-victoria) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-whitehorse-melbourne](https://learn.modernagecoders.com/online-coding-and-python-classes-in-whitehorse-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
