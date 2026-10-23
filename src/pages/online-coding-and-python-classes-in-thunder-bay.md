---
title: "Online Coding and Python Classes in Thunder Bay | Live Online"
description: "Live online coding and Python classes for Thunder Bay learners aged 6 to adult: how to tell a class is truly live, a Python path, and a heritage register project."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-thunder-bay
source: src/pages/online-coding-and-python-classes-in-thunder-bay.html
---
> Yes. Modern Age Coders teaches live online coding and Python to Thunder Bay learners, from six year olds to adults, in groups of fifteen to twenty or one to one. Python and AI for Kids, Python for Teens and the Python Masterclass are the usual first courses, and teens can add CCC preparation. A first class is free.

[Home](/) / [Canada](/coding-classes-in-canada) / [Ontario](/coding-classes-in-ontario) / Thunder Bay

Thunder Bay, Ontario / Live online

# Online coding and Python classes in Thunder Bay

**Can a Thunder Bay student learn Python live online with a real teacher?** Yes. Modern Age Coders teaches live online coding and Python to Thunder Bay learners, from six year olds to adults, in groups of fifteen to twenty or one to one. Python and AI for Kids, Python for Teens and the Python Masterclass are the usual first courses, and teens can add CCC preparation. A first class is free.

Thunder Bay is a long way from most of the province's tech jobs and coding schools, which makes "online" sound like the obvious answer. It is, provided the class is actually live and someone is actually teaching. This page gives five plain tests for that, a Python path from Grade 1 to adulthood, a project our students run on the City of Thunder Bay heritage register (136 rows that teach more about messy data than many textbooks), and where coding already appears in the Ontario curriculum a Thunder Bay student follows.

Facts last verified 23 October 2026. Teaching is online; no Thunder Bay branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Thunder Bay learners, from first Python to the CCC

Python for each age group, plus contest preparation for teens who already enjoy problem solving. The free class confirms the starting point.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Grades 4 to 7): Children leave blocks behind and type programs that draw, count, ask and decide, explaining each line to the teacher as they go.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 8 to 12): Core Python taken all the way to files and data, including text cleaning like the heritage register project on this page.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): A steady route into Python for adults who have never coded, or who stopped years ago and want to start properly.
- [CCC Junior and Senior Preparation (Canadian Computing Competition)](/courses/ccc-junior-and-senior-preparation-course) (Grades 9 to 12): Preparation for the CEMC Canadian Computing Competition with original problems, taught in Python or another CCC language.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Five tests that tell you whether an online coding class is genuinely live

Plenty of products call themselves online classes. These five questions separate teaching from content, and they work on any provider, including us.

**Five tests for a live online coding class, and how our classes answer them (our own checklist)**

| Test | What to look for | How it works with us |
|---|---|---|
| 1. Does a person see the code? | Someone looks at what your child typed, not just at a quiz score | The teacher reads the learner's screen and code during the lesson |
| 2. Can the learner interrupt? | Questions are answered in the moment, about the learner's own program | Yes, out loud; questions are the point of the lesson |
| 3. Is the code kept? | Programs are saved as files the learner owns and can reopen | Learners code on their own computer from the first week |
| 4. Is progress shown honestly? | A program rebuilt from a blank file, not badges | Every few weeks, without notes |
| 5. Can you try before paying? | A real lesson, not a sales call | A free class of 30 to 45 minutes that ends with a suggested level |

The first test matters most. A Thunder Bay twelve year old who writes `print(Hello)` without quotation marks gets a NameError. In a recorded course she pauses the video and guesses. In a live class the teacher asks her to read the last line of the error aloud, then asks what Python thinks `Hello` is. She works it out herself in under a minute, and next time she reads the error before asking anyone.

### Group classes

Fifteen to twenty learners at the same level, one teacher, a fixed weekly rhythm. Most children and teens start here.

### One to one

A teacher for a single learner. Adults with irregular hours often choose it, and so do teens preparing for the CCC.

### What you need

A laptop or desktop with sound, a connection that holds a video call, and Python 3, which is free and installed with help in the early lessons.

## When were Thunder Bay's heritage buildings built? A Python project on the city register

The City of Thunder Bay publishes its Municipal Heritage Register as an open data CSV under its Open Data Licence 1.0. The file is small, which is exactly why it is good for learning: every messy value can be looked at by hand. We pulled the CSV with curl on 22 October 2026, and each count here comes from our own Python, not from the City.

**Our count of register entries by decade of construction, taking the first year in the Cira column (136 rows). One row reads "1790 (placed 1964)"**

| Decade (first year in the Cira column) | Entries |
|---|---|
| 1790s | 1 |
| 1870s | 3 |
| 1880s | 5 |
| 1890s | 2 |
| 1900s | 53 |
| 1910s | 35 |
| 1920s | 14 |
| 1930s | 4 |
| 1940s | 4 |
| 1950s | 6 |
| 1960s | 5 |
| 1970s | 3 |
| 1980s | 1 |

The script that prints the table and the ownership counts. Nothing to install beyond Python itself; save it beside heritage-register.csv and run it:

```
import csv

decades = {}
owners = {}
with open("heritage-register.csv", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        first_year = int(row["Cira"].strip()[:4])
        decade = first_year // 10 * 10
        decades[decade] = decades.get(decade, 0) + 1
        owner = row["Ownership"].strip()
        if owner.startswith("Federal"):
            owner = "Federal Government"
        owners[owner] = owners.get(owner, 0) + 1

for decade in sorted(decades):
    print(str(decade) + "s", decades[decade])
print(owners)
```

### 1. A year that is not a number

The column is spelled "Cira", and the city describes it as the approximate date of construction. 128 values are plain years; seven are ranges such as 1910-1913; one says 1790 (placed 1964). Calling int() on the whole field crashes, so students decide on a rule, first year, and write it down.

### 2. One owner, three spellings

The Ownership column has "Federal Government", "Federal" and "Federal Governement". Merged, they are five entries; left alone, they look like three tiny groups. One "Provincal Government" stays as it is, because a typo fix should be a decision, not an accident.

### 3. A spike that is not a building boom

Sixty-two entries were added to the register in 1988, sixty of them marked "Designated - Waverley Park". That year shows a decision about a whole area, not sixty separate ones, and a chart of "heritage additions per year" needs to say so.

### How old is this file?

The dataset description says "The data was last updated on August 22 2022." Anything added or removed since then is not in it. That is not a flaw to hide; it is the first thing to print above any chart, and the habit of checking it is worth more than the chart itself.

Ownership after our merge: 84 private, 25 public agency, 16 City of Thunder Bay, 5 board-run by the City, 5 federal and 1 provincial. Status: 60 Waverley Park designations, 49 listed, 26 other designations and 1 entry with a combined status. Contains information licensed under the Open Data Licence - The Corporation of the City of Thunder Bay ([licence](https://media-004-ca.cdn.govstack.com/thunderbay-002-ca-dot-site/media/inmjquon/city-of-thunder-bay-open-data-licence.pdf), [open data portal](https://opendata-thunderbay.hub.arcgis.com/), [city open data page](https://www.thunderbay.ca/city-hall/thunder-bay-open-data/)). We print no building names. The licence gives no endorsement, and none is implied.

## Where a Thunder Bay student already meets code in Ontario schools

Thunder Bay schools follow the Ontario curriculum, the same documents as Toronto or Ottawa. We read them from the ministry's curriculum service on 22 October 2026; quotation marks mark the ministry's words.

### Grade 1 onward

From Grade 1, math asks children to "read and alter existing code" and say how the change affects the outcome. By Grade 6, science adds coding in investigations, "with a focus on obtaining input in different ways".

### Grade 9 and Grade 10

MTH1W has students "create code by decomposing situations into computational steps". EQAO's Grade 9 math assessment runs 12 January to 5 February 2027 and counts in the course mark. ICD2O, an open Grade 10 course from 2023, includes "automation and artificial intelligence".

### Grades 11 and 12

ICS3U needs no prerequisite and leads to ICS4U; both date from 2008. The diploma rules put computer studies in the STEM-related course group, one of the compulsory-credit choices. Our [ICS3U help page](/ics3u-computer-science-help) goes into the course.

The heritage project lines up with that ladder better than it looks. Reading a CSV and counting is Grade 8 data work; deciding how to turn "1910-1913" into a number is exactly the decomposition MTH1W describes; and merging three spellings of one owner is the kind of careful design ICS3U expects. A Thunder Bay student who has done it once tends to find school coding tasks short.

**Contests open to Thunder Bay students in 2026 to 2027 (dates as published by CEMC and Skills Ontario, read 22 October 2026)**

| Event | Organiser | Date | How to enter |
|---|---|---|---|
| Beaver Computing Challenge | CEMC | 9 to 20 November 2026 | Through a school |
| Canadian Computing Competition | CEMC | Wednesday 17 February 2027 | Through a school |
| Gauss math contest (Grades 7 and 8) | CEMC | 10 to 21 May 2027 | Through a school |
| Skills Ontario Competition, including Coding | Skills Ontario | 3 and 4 May 2027, Toronto Congress Centre | Through the school's contact person |

### What we do not do

We teach alongside school courses and do not grant Ontario credits. CEMC says all students take part through their school and suggests that where a school does not participate, students "look for another local school that will allow them to join". We are not connected with the Ontario Ministry of Education, EQAO, any Thunder Bay school board, CEMC, Skills Ontario or the City of Thunder Bay.

## Thunder Bay keeps Eastern time, though part of its district does not

In the IANA time zone database, America/Thunder_Bay is simply a link to America/Toronto, so the city changes its clocks with the rest of Eastern Ontario. The database notes that parts of Thunder Bay District lying broadly west of 90 degrees west follow America/Winnipeg instead.

**Two sample Thunder Bay class times and the matching time in India, 2026 to 2027 (tz database 2026e offsets; our own arithmetic; illustrative times, not set batches)**

| Period | Thunder Bay | 6 pm Tuesday in Thunder Bay is, in India | 11 am Saturday in Thunder Bay is, in India |
|---|---|---|---|
| Rest of October 2026 | UTC-4 | 3:30 am Wednesday | 8:30 pm Saturday |
| Winter, after clocks go back on 1 November 2026 | UTC-5 | 4:30 am Wednesday | 9:30 pm Saturday |
| Spring and summer, once clocks go forward on 14 March 2027 | UTC-4 | 3:30 am Wednesday | 8:30 pm Saturday |

Manitoba’s clocks will not go back on 1 November 2026; the province stays on UTC-5 from then on. So this winter, a family in Thunder Bay and a relative in the western part of the district or in Winnipeg share a clock; from 14 March 2027 they are an hour apart again. We write every class time in Thunder Bay time and re-confirm it before each change. Our [Canada time zones page](/canada-time-zones-2026-online-class-times) covers the rest of the country.

One local practical note: area code 807 moved to ten-digit local dialling, under a CRTC decision recorded in the national dial plan, fully from 15 January 2024. Our form wants those same ten digits.

## From Grade 1 code reading to Python at work

Where a learner starts depends on what they can already do, which the free class shows; the age bands are approximate.

- **Grades 1 to 3: Reading and changing code** Blocks and short programs the child alters and explains, close to what Ontario math asks from Grade 1. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Grades 4 to 8: Typed Python** Variables, loops, conditions and small functions, then a first data file before Grade 8 data work arrives. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Grades 9 to 12: Data, contests, ICS** Full Python, real files like the heritage register, the CCC, and support beside ICS3U and ICS4U. [Python for Teens](/courses/python-complete-masterclass-teens), [Ontario Computer Science Companion](/courses/ics3u-ics4u-computer-science-companion-course)
- **Adults: Python for real tasks** From the first line to scripts that tidy spreadsheets and reports, at a pace that fits a working week. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## What happens when an AI meets "1790 (placed 1964)"

It guesses, and it does not tell you it guessed.

Give an AI assistant the Thunder Bay register and ask for a chart of construction by decade. Its code may silently drop the eight rows that are not plain years, or crash and then "fix" itself by skipping them, and it will keep the three federal spellings apart. You get a neat chart that quietly leaves out rows and splits one owner three ways.

Our classes teach learners to think the problem through before typing: look at the odd values, choose a rule, write the rule down, then code it. Teens use AI tools with us within each tool's age limits, as a draft to inspect line by line. Copying an answer, from a classmate or a chatbot, teaches nothing we can build on.

Ontario's new Grade 10 course puts artificial intelligence on the timetable; the students who get most from it will be the ones who can check what AI produces. The longer argument is in [should you still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Live classes for Thunder Bay and Northwestern Ontario

Distance is the problem online learning solves best. Here is how the rest works.

- **Times that fit** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Across the northwest** Learners in Kakabeka Falls, Nipigon, Marathon and Dryden can join the same classes. Anyone in the part of the district that keeps Winnipeg time simply gets their times written in that zone.
- **Ontario grades** Teachers plan in Ontario grades and course codes, and know when EQAO, ICS3U units and CEMC contests fall in the year.
- **807 numbers** Thunder Bay numbers on area code 807 work in the form; the country code is added for you.
- **Homework stays honest** We help a student understand a school task, never write it for them. Marked work is the student's own.
- **Free to begin** The first class is free and needs no card. By its end you know the right starting point and a time that could work.

**No Thunder Bay centre** Modern Age Coders has no office in Thunder Bay or Northwestern Ontario and claims none. All teaching is live and online, by teachers based in India.

## Fees for Thunder Bay learners

Three items, each shown in the currency for your region.

- First class: Free. A full live lesson without charge, closing with a level and a course suggestion.
- Group tuition: CAD 140 a month. The monthly fee for a group of fifteen to twenty learners at one stage.
- Private tuition: CAD 210 a month. The monthly fee for one teacher with one learner, at times you set together.

A Thunder Bay learner pays the same as one in Toronto or anywhere else in Canada. There is no bill until the free lesson has happened and you have picked a course and time; holiday and missed-class rules sit on the pricing page.

## Thunder Bay online coding and Python questions

### Are there coding classes in Thunder Bay?

Ours are live and online rather than in a local building. A teacher teaches each lesson in real time and the learner joins from home in Thunder Bay or anywhere in the region.

### How can I tell an online class is really live?

Check that a person sees the learner's code, that questions are answered in the moment, that programs are kept as files, and that you can try a real lesson free. Ours passes all of those.

### What age can my child start Python?

Usually around 9, or Grade 4. Younger children, from 6, begin with blocks and short programs first. Teens and adults can start Python at once.

### How long is the free class?

Between 30 and 45 minutes of real teaching at the learner's level. It ends with a suggested course and time, and no card is needed.

### Do you teach adults in Thunder Bay?

Yes. Adults usually begin in the Python Masterclass, and those who want Python for work go on to the automation course.

### Do your classes give an Ontario credit?

No. We do not grant Ontario credits. ICS3U, ICS4U and every other credit come from school; we add practice and understanding beside them.

### Can my teen prepare for the CCC with you?

Yes. CEMC has set the 2027 CCC for Wednesday 17 February 2027. Entry is through a school, and our CCC course prepares students with problems we write ourselves.

### What time zone are Thunder Bay classes in?

Eastern time, the same as Toronto. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Does an 807 number work in your form?

Yes. Enter the ten digits of an 807 number without the leading 1. Numbers from elsewhere in Canada work too.

### What does my child need at home?

A laptop or desktop with sound, a stable internet connection and a quiet spot. Tablets make typing code painful, so we ask for a keyboard. Python is free, and we help install it.

### What does it cost?

Look at the Fees block on this page. It sets out the free class and the two monthly options, group or one to one, in your own currency, and nothing is paid before the free class.

## Other pages for Thunder Bay and Ontario learners

For the province, read [coding classes in Ontario](/coding-classes-in-ontario), or start from [coding classes in Canada](/coding-classes-in-canada). Students can go on to [Ontario coding by grade](/ontario-coding-curriculum-grades-1-to-8), [ICD2O explained](/icd2o-digital-technology-course-explained) and [CCC preparation](/canadian-computing-competition-ccc-prep).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-thunder-bay](https://learn.modernagecoders.com/online-coding-and-python-classes-in-thunder-bay#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
