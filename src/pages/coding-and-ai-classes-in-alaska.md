---
title: "Coding and AI Classes in Alaska | Live Online, Any Town"
description: "Live online coding and AI classes for Alaska students in any town: published CS access figures, Alaska time zones, and a Python project on airport distances."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-alaska
source: src/pages/coding-and-ai-classes-in-alaska.html
---
> Online, live. Code.org (2025) found computer science in 89 of 260 Alaska high schools, or 34.2%, in 2024 to 2025, so many students have no class nearby. Modern Age Coders teaches Python, AI and AP Computer Science Principles live online to K-12 learners, either in level-matched groups or one to one, scheduled on Alaska time wherever the student lives.

[Home](/) / [United States](/coding-classes-in-united-states) / Alaska

Alaska, United States / Live online

# Coding and AI classes in Alaska

**How can an Alaska student learn coding if their school has no computer science course?** Online, live. Code.org (2025) found computer science in 89 of 260 Alaska high schools, or 34.2%, in 2024 to 2025, so many students have no class nearby. Modern Age Coders teaches Python, AI and AP Computer Science Principles live online to K-12 learners, either in level-matched groups or one to one, scheduled on Alaska time wherever the student lives.

Alaska is the one state where "the nearest coding class" can be a flight away. The published share of high schools with a computer science course is about one in three, its time zone history is unusually tangled, and its own education department website turned our requests away. So this page leans on what we could read at the source: the Code.org access counts, College Board AP school totals, the IANA time zone records, and the state transportation department's airport list, which becomes a real Python project on great-circle distance.

Facts last verified 18 October 2026. Teaching is online; no Alaska branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses that travel well

Each runs entirely online, so a student in Bethel and one in Ketchikan get the same teacher and the same projects.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Grades 3 to 6): Python with turtle drawings, games and small AI experiments, a first step into typed code.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 7 to 12): Full Python, including the airport distance project, with math the student can check on a map.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course) (Grades 10 to 12): For students whose school has no AP CSP section: the Create task and exam practice, taught live.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Grades 9 to 12): Machine learning from scratch in Python, with models trained, tested and questioned by the student.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## About one in three Alaska high schools offers a computer science course

What the Code.org (2025) State of AI + CS Education data sheet and the College Board publish for Alaska, read on 17 October 2026.

**Year-by-year access in Alaska, taken from the trend tab of the 2025 Code.org sheet**

| Year | High schools with a CS course |
|---|---|
| 2018 to 2019 | 19% |
| 2019 to 2020 | 32% |
| 2020 to 2021 | 42% |
| 2021 to 2022 | 51% |
| 2022 to 2023 | No figure published |
| 2023 to 2024 | No figure published |
| 2024 to 2025 | 34.2%, or 89 of 260 high schools (Most Recent Access Data tab) |

### A different kind of source

For 2024 to 2025, the Alaska row credits "School Course Catalogs and Teacher Surveys" as its basis. Many other rows in the same tab rest on files supplied by a state agency instead.

### Why the drop may not be a drop

The series runs from 51% to 34.2% across a two-year gap with no data. The tab does not say which method produced the earlier years, so a change in how schools were counted cannot be ruled out.

### No enrollment count

The participation tabs hold no Alaska value for any year from 2020 to 2021 onward. How many Alaska students take computer science is simply not in this dataset.

**Alaska schools giving at least one AP exam, from the College Board state-by-state AP school report covering 2023 and 2024**

| Exam year | Total | Public schools | Other schools |
|---|---|---|---|
| 2023 | 59 | 52 | 7 |
| 2024 | 70 | 63 | 7 |

Eleven more public schools gave AP exams in 2024 than in 2023, a rise of about a fifth by our arithmetic, and it is a reminder that a school can offer AP in some subjects without a computer science teacher on staff. Suggested citation for the access figures: Code.org (2025). 2025 State of AI + CS Education. Single Alaska values are quoted; the sheet itself is not reproduced.

### What we could not read

The Alaska Department of Education and Early Development website, the legislature's administrative code pages and two other state sites blocked automated requests when we checked in October 2026. We do not print Alaska's computer science standards or any diploma rule here, because we could not read them at the source.

## How far is it from Anchorage? Great-circle distance on 285 Alaska airports

The Alaska Department of Transportation and Public Facilities publishes its airports as a public map layer with latitude and longitude for each. Students turn those coordinates into distances with the haversine formula.

**Straight-line distance from Anchorage's international airport (FAA code ANC), our haversine calculation in miles from the DOT&PF Airports layer, downloaded 17 October 2026**

| Airport (FAA code) | Our distance from ANC |
|---|---|
| Fairbanks International (FAI) | 260.3 |
| Nome (OME) | 537.2 |
| Juneau International (JNU) | 569.1 |
| Barrow (BRW) | 722.5 |
| Ketchikan International (KTN) | 772.8 |
| Atka (AKA) | 1,097.2 |
| Adak (ADK), the farthest in the layer | 1,188.9 |

### 1. Check the download

The layer's count query returns 285, and the file holds 285 airports: 118 in the Northern region, 87 Southcoast and 80 Central. Every record has coordinates, so nothing is silently dropped.

### 2. Why not Pythagoras?

Latitude and longitude are angles on a sphere. A degree of longitude near Barrow covers far less ground than one near Ketchikan, so flat-map subtraction gives wrong answers. Haversine works on the sphere itself.

### 3. Summarize the spread

From ANC, our median distance to the other airports is 396.8 miles. Only 22 lie within 100 miles, while 86 are more than 500 miles away. Those three numbers describe Alaska better than a map does.

**The formula students write** Convert both points to radians; take a = sin squared of half the latitude difference, plus cos(lat1) times cos(lat2) times sin squared of half the longitude difference; the distance is 2R times arcsin of the square root of a, with R = 3,958.8 miles. Then test it: Lake Hood, next to ANC, should come out close to one mile, and it does.

Two extensions keep strong students busy. First, the layer's longitudes run from -176.65 to -130.01, so no point here crosses the 180th meridian; students ask what their code would do if one did, and fix it before it happens. Second, a straight line is not a route: the DOT&PF itself says it makes no warranty about the data, and a flight path, a ferry or a road can be much longer. Our numbers are a teaching result, not travel distances.

## Seven Alaska zone names in the time zone database, one class time

Alaska keeps two official offsets today, but the IANA database tracks seven zone names for the state because their histories differ.

**Alaska zones in the IANA tzdb (zone1970.tab and northamerica, read 17 October 2026)**

| Zone name | Area described | Offset today |
|---|---|---|
| America/Anchorage | Alaska (most areas) | Alaska time, UTC minus 9 in winter |
| America/Juneau, America/Sitka, America/Yakutat | The Juneau, Sitka and Yakutat areas | Alaska time |
| America/Metlakatla | Annette Island | Alaska time since 2019, after spells on Pacific time |
| America/Nome | Alaska (west) | Alaska time |
| America/Adak | Western Aleutians | Hawaii-Aleutian time, UTC minus 10 in winter |

### Most of the state

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Alaska time.

### The Aleutian exception

Students on Adak run an hour behind Anchorage. We confirm their slot on Hawaii-Aleutian time, so no one joins an hour late.

### The India gap, our sums

India is 13 hours 30 minutes ahead of Alaska Daylight Time and 14 hours 30 minutes ahead of Alaska Standard Time, by our arithmetic. Alaska changes clocks on November 1, 2026 and March 14, 2027.

The database notes are a history lesson in themselves. They record that when Alaska passed from Russia in 1867, Sitka workers "celebrated two Sundays" in one week as the calendar shifted, and they cite a 1983 newspaper headline, "Alaska's four time zones now two", from the year Anchorage moved from UTC minus 10 to the current Alaska offset. Metlakatla changed zones three times between 2015 and 2019. A program that hard-codes an offset for an Alaska student will be wrong somewhere; one that stores the zone name will not.

## A path that works from any village or city

Treat the grade ranges loosely. Where a student actually starts is decided in the no-cost first session.

- **Grades K to 3: Logic in blocks** Short block programs, patterns and puzzles that build sequencing and loops without typing. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Grades 4 to 6: From blocks to Python** Games and drawings in Python, plus a first look at how AI tools make guesses from examples. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Grades 7 to 9: Coordinates and code** Python with real data such as the airport layer, then web pages that show what the code found. [Python for Teens](/courses/python-complete-masterclass-teens), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)
- **Grades 10 to 12: AP and machine learning** AP Computer Science Principles where the school has none, then models built and evaluated by hand. [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)

## An AI tool can write the haversine function. Can it tell you the answer is wrong?

Not reliably. Checking is a human skill, and Alaska data makes the case well.

Ask an assistant for a distance function and it will usually produce one that runs. Whether it uses degrees where it needs radians, or miles where you wanted kilometers, only shows when someone tests it against a known answer, like the one mile from ANC to Lake Hood.

Students who wrote the function themselves know where it can break: units, the 180th meridian, a missing coordinate. That knowledge lets them use AI tools for speed while staying in charge of correctness, which is the skill that will matter long after any particular tool changes.

In a state where a third of high schools list a computer science course, a student who can build and check their own tools has an advantage that does not depend on the local timetable. The longer argument is in [the case for learning to code in the age of AI](/blog/is-coding-worth-learning-2026).

## A live teacher, whatever the distance to the nearest road

All a class needs is a connection good enough for video and sound.

- **Rural and remote families** Students in communities off the road system join exactly as students in Anchorage do. There is no travel and no relocation, just a scheduled video class.
- **Batches by level** Groups of fifteen to twenty students at the same stage, mixed from across the US, led live by one teacher each session.
- **One teacher, one student** A 1-on-1 plan suits students with unusual schedules, such as seasonal family work, or anyone preparing AP without a school course.
- **Connection tips** Where bandwidth is tight, students can switch off their own camera and keep audio and screen sharing, which is what coding lessons depend on most.
- **Your own work** Teachers know US grade levels and AP formats. Anything a school grades, and any project a student submits anywhere, stays the student's own work.
- **First lesson free** A complete lesson with a real task, then a suggested level and course. Nothing is charged for it, and no card is requested.

**Taught online, from India** Our teachers work from India. Modern Age Coders has no office or learning center in Alaska and claims none, and we are not connected with the state education department or any Alaska district.

## Fees for families in Alaska

The same three prices for every US household, shown in US dollars.

- First class: USD 0. An opening lesson at no cost, finishing with our level and course suggestion.
- Group tuition: USD 100 a month. A month of live classes in a batch of fifteen to twenty students at the same level.
- Private tuition: USD 150 a month. A month of 1-on-1 classes, the same schedule with a teacher to yourself.

A family in Juneau pays what a family in Fairbanks pays, in US dollars, with no remote-area surcharge. Payment starts only after the free lesson, once you have agreed a course and time; the pricing page covers breaks and missed classes.

## Questions from Alaska families

### What share of Alaska high schools offer computer science?

The 2025 Code.org sheet gives 89 of 260, or 34.2%, for 2024 to 2025, and it lists course catalogs and teacher surveys as where that count came from.

### Why did the Alaska figure fall from 51% to 34.2%?

We cannot say. There is no published value for the two years in between, and the sheet does not show which method produced the older figures, so the change may partly reflect counting.

### How many Alaska students take computer science?

The Code.org participation tabs contain no Alaska figure for any year, so we do not know and do not estimate it.

### Does Alaska require computer science to graduate?

We could not check. The state education department site blocked our requests in October 2026, so ask your school or district for the current diploma rules.

### Can a student in a rural community join live classes?

Yes, if the connection supports a video call. Audio and screen sharing matter most, so a student can turn off their camera when bandwidth is limited.

### Which time zone are classes set in?

Alaska time for most students. Families on Adak in the western Aleutians, which uses Hawaii-Aleutian time, get their slot confirmed on that clock instead.

### What are the class timing options?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Can you prepare a student for AP Computer Science Principles?

Yes. We teach the course content, the Create performance task skills and exam practice, while the task itself remains the student's own work.

### Do you have a location in Alaska?

No. All teaching is live online from India, and we do not claim any Alaska office or partnership with a school district.

### Where do I find the fees?

In the fees section above: a free first lesson, then a monthly batch or monthly 1-on-1 plan, all priced in US dollars and billed only after the free lesson.

## More for Alaska students

For school-age options see [coding classes for middle school students](/coding-classes-for-middle-school-students) and [coding classes for high school students](/coding-classes-for-high-school-students). Students without an AP section can read [AP Computer Science Principles coaching](/ap-computer-science-principles-online-coaching), and builders can enter the [Congressional App Challenge](/congressional-app-challenge-guide), which our guide explains.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-alaska](https://learn.modernagecoders.com/coding-and-ai-classes-in-alaska#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
