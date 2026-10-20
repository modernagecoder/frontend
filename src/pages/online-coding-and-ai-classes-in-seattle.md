---
title: "Online Coding and AI Classes in Seattle | Live Teachers"
description: "Live online coding and AI classes for Seattle students, from Scratch to machine learning, with a Python project that joins two City of Seattle parks tables."
canonical: https://learn.modernagecoders.com/online-coding-and-ai-classes-in-seattle
source: src/pages/online-coding-and-ai-classes-in-seattle.html
---
> Modern Age Coders teaches Seattle students live online: Scratch for six-year-olds, then Python, data science and, by high school, machine learning, in groups of fifteen to twenty at one level or one to one, scheduled in Pacific Time. A signature project joins two City of Seattle parks datasets on a shared key.

[Home](/) / [United States](/coding-classes-in-united-states) / Seattle

Seattle, Washington / Live online

# Online coding and AI classes in Seattle

**Where can a Seattle student take live online coding and AI classes?** Modern Age Coders teaches Seattle students live online: Scratch for six-year-olds, then Python, data science and, by high school, machine learning, in groups of fifteen to twenty at one level or one to one, scheduled in Pacific Time. A signature project joins two City of Seattle parks datasets on a shared key.

Seattle students grow up around software, and many of them want to understand how it is actually made. Real programming work is less about clever algorithms than about getting data from two places to line up. This page shows that skill on two public datasets from the City of Seattle, one listing park addresses and one listing park features, and what happens when you join them. It also explains what Washington state law says about high school computer science, how class times work on Pacific Time, and what our classes cost.

Facts last verified 18 October 2026. Teaching is online; no Seattle branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four places to begin

Matched to age and goal, then confirmed in a free first lesson with a teacher.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Grades K to 3): Visual blocks, stories and puzzles that build sequencing and logic before any typing.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 6 to 12): Python from scratch to dictionaries, files and data, enough to run the parks join below.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Grades 9 to 12): pandas, joins, charts and honest conclusions from public datasets.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Grades 10 to 12): Machine learning built on data the student has joined and cleaned, then tested properly.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Joining two Seattle parks tables, and finding what falls out

The City of Seattle publishes park addresses and park features as two separate public-domain tables on its open data portal. Both carry a park ID called PMAID. We downloaded both on 18 October 2026 and joined them.

**What the join shows (our counts from two Seattle Open Data tables, 18 October 2026)**

| Measure | Count | What it tells a student |
|---|---|---|
| Rows in Park Addresses | 412 | One row per park, one PMAID each |
| Rows in Park Features By PMAID | 1,044 | Many rows per park, one per feature |
| PMAIDs that appear in the features table | 282 | Not every park has listed features |
| PMAIDs found in both tables | 266 | The size of an inner join, counted in parks |
| Feature rows with no matching address | 33, on 16 PMAIDs | Orphans: a join silently drops them |
| Parks with no feature rows at all | 146 | Missing from an inner join, kept by a left join |

### Inner join

Keep only parks in both tables. It looks clean, but 146 parks vanish without warning, and so do the 33 orphan feature rows.

### Left join

Keep every park from the address table and attach features where they exist. Now the 146 parks show up with blanks, which is honest.

### Anti-join

Ask the reverse question: which feature rows point at a PMAID with no address? Those 16 IDs are the ones to report or investigate.

In pandas the whole lesson is three lines: pd.merge(addr, feat, on="pmaid", how="inner"), the same with how="left", and an indicator=True merge to label which side each row came from. Comparing the row counts after each one teaches more about data than any single chart.

**The most common park features (our count from Park Features By PMAID)**

| Feature | Rows |
|---|---|
| Play Area | 142 |
| Drinking fountains | 132 |
| Views | 98 |
| Restrooms | 89 |

### Ours, not the city&rsquo;s

Every count here is our own, from downloads on 18 October 2026. The two tables were last updated at different times (the address table in May 2024, the features table in July 2026), which may explain some orphans. We say &ldquo;may&rdquo; because the city has not told us; guessing a cause and calling it a fact is the mistake this project is designed to prevent.

## Seattle&rsquo;s parks and council, as the city describes them

Official City of Seattle figures, read on 18 October 2026, set beside the open data.

**What the City of Seattle publishes**

| Topic | Official figure | Source |
|---|---|---|
| Park system | a 6,441-acre park system of over 489 parks | Seattle Parks and Recreation, About Us |
| Share of the city | about 12% of the city&rsquo;s land area | Seattle Parks and Recreation, About Us |
| Community centers | 25 community centers | Seattle Parks and Recreation, About Us |
| Swimming | eight indoor swimming pools | Seattle Parks and Recreation, About Us |
| Picnic shelters | 38 parks with reservable picnic shelters | Seattle Parks and Recreation |
| Sports fields | 200+ sport fields, 59 lighted fields | Seattle Parks and Recreation |
| City Council | Nine members: seven districts and two citywide positions | Seattle City Council |

Put the official &ldquo;over 489 parks&rdquo; next to the 412 rows in the address table and a student has a real research question: which parks are not in the file, and why? It is a good example of why a dataset is a view of reality, not reality itself. The park with the most listed features in our join is Warren G. Magnuson Park, with 16.

## Computer science at school in Washington, briefly

The state rule in a sentence, then what it means for a Seattle family choosing classes.

In short: Washington&rsquo;s school code asks every district that runs a high school to give its students the chance to take a computer science elective, which is an access rule rather than a course every student must pass. We read it in the Revised Code of Washington on 18 October 2026, because the state education agency&rsquo;s page refused our request that day. By Code.org&rsquo;s count, 51.2% of Washington high schools listed computer science in 2024 to 2025 (Code.org (2025). 2025 State of AI + CS Education).

### If your school offers it

A Seattle student can take the school elective and use our classes for depth: bigger projects, data work like the parks join, or AP preparation.

### If the timetable is full

Many students cannot fit an elective around languages, music and sport. A weekly online class keeps coding going without a timetable clash.

### Credit questions

Any question about school credit belongs with the school counselor. Our classes do not award Washington credit, and school assignments stay the student&rsquo;s own.

## Pacific Time, and the widest gap to India in the lower 48

Seattle runs on America/Los_Angeles in the IANA time zone database, the furthest US mainland zone from India.

### Choose your times

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### The arithmetic

The gap to India is twelve and a half hours while Seattle is on daylight time and thirteen and a half in winter, so a Seattle afternoon is the next India morning.

### Changeover days

Seattle changes clocks on November 1, 2026 (back) and March 14, 2027 (forward); every class is confirmed in Pacific Time.

**A date-line puzzle** Because the gap passes twelve hours, a Monday 5 p.m. class in Seattle starts on Tuesday in India. Teen students write a Python check with zoneinfo that prints both dates, a neat test of whether they understand time zones as data.

## From blocks to joined data and AI

Grades are a guide; the free lesson finds the right rung.

- **Grades K to 3: Logic with blocks** Sequences, events and loops in visual code. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Grades 4 to 7: First real programs** Python basics and small games, with simple lists and counting. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Game Development for Kids](/courses/game-development-masterclass-for-kids)
- **Grades 8 to 10: Data and the web** pandas joins like the parks project, and full web pages. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)
- **Grades 10 to 12: AI and AP** Machine learning and AP Computer Science A. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course)

## Will AI make joining data and writing code unnecessary?

AI can write the merge line. Deciding which join is right is still a human call.

Ask an AI assistant to combine the two Seattle tables and it will most likely produce an inner join, report a tidy result and say nothing about the 146 parks that disappeared. Nothing in the output warns you; you have to know to ask.

That is why our students write joins by hand before they rely on tools. Once they know what each join keeps and drops, an assistant becomes a fast typist rather than an authority. The same habit carries into machine learning, where the training data decides what a model can ever know.

Our AI courses for teens begin with exactly this: the data, the join and the gaps, and only then the model. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Ballard to Beacon Hill, the same live class

Hills, bridges and traffic make cross-city classes slow. Online, every neighborhood is the same distance away.

- **Learn from home** Students join from their own room anywhere in Seattle, with no bus or bridge to cross after school.
- **Washington school year** Lessons follow US grades and Seattle&rsquo;s school terms, and a teacher never completes assessed work for a student.
- **Begin with a free class** A genuine coding task with a teacher; at the end, a suggested course, level and slot, and no request for payment details.
- **Grouped by stage** Batches of fifteen to twenty students at the same point, from Seattle and across the country.
- **Private option** A teacher for one student, for those who want speed, AP preparation or a quieter setting.
- **Slots in Pacific Time** Weekdays or weekends, decided by you, confirmed in Pacific Time.

**No local office** We have no Seattle center and claim none. Classes are live online, taught from India, and need a laptop or desktop with sound and a reliable connection.

## Class fees for Seattle families

Three items cover it.

- First class: USD 0. A free first class with a teacher, ending in a suggested course and level.
- Group tuition: USD 100 a month. A monthly fee for a level-matched batch of fifteen to twenty students.
- Private tuition: USD 150 a month. A monthly fee for one-to-one teaching.

Seattle families pay in US dollars, the same single rate used nationwide. Charges begin only after the free class and once you accept the course and time; holidays and missed lessons are explained on the pricing page.

## Seattle coding and AI questions

### What ages do you teach in Seattle?

From age 6 with visual blocks, through Python and web development in middle school, to data science, AP Computer Science and machine learning in high school.

### What is the Seattle parks join project?

Students download the City of Seattle Park Addresses and Park Features tables, join them on the PMAID key, and compare inner, left and anti-joins to see which parks and rows drop out.

### Are the parks counts official?

No. They are our own counts from downloads on 18 October 2026. Official figures, such as over 489 parks, come from Seattle Parks and Recreation.

### Must every Washington student take computer science?

No. The state code asks districts that run a high school to offer access to a computer science elective; taking it is the student's choice.

### Do your classes count for school credit?

No. We do not grant Washington credit. Our classes add skills and projects alongside school.

### When are classes for Seattle students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every slot is given in Pacific Time.

### Why does the class date look different in India?

India is 12 hours 30 minutes or more ahead of Seattle, so an afternoon class in Seattle starts the next morning in India. We handle that and confirm the Seattle time.

### Do you have a Seattle location?

No. We teach live online from India only.

### What do classes cost?

The fees block lists a free first class and two monthly plans, group or one to one. Nothing is charged until after the free class.

## More for Seattle students

Teens interested in data and AI can read [machine learning competitions](/machine-learning-competitions-for-high-school-students) and [AI projects for high school students](/ai-projects-for-high-school-students). For tools, see [VS Code setup for students](/vs-code-setup-for-students); competitive coders can look at [USACO preparation](/usaco-preparation-online-coaching).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-ai-classes-in-seattle](https://learn.modernagecoders.com/online-coding-and-ai-classes-in-seattle#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
