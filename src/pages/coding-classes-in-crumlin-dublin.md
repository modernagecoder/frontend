---
title: "Coding Classes in Crumlin, Dublin | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Crumlin learners aged 6 to 67, in small same-level groups or one to one. The first lesson is completely free."
canonical: https://learn.modernagecoders.com/coding-classes-in-crumlin-dublin
source: src/pages/coding-classes-in-crumlin-dublin.html
---
> Live online coding, Python, AI and maths lessons for Crumlin learners aged 6 to 67, in small same-level groups or one to one. The first lesson is completely free.

Skip to contentCourses for Crumlin

## Four first courses for Crumlin

Use the age band to choose a starting point; the free first lesson is where the teacher checks the level and switches course if another fits better.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 10Coding for KidsBlocks and clocks: a clock face game where the hands go round and the numbers start again after 12.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 13Maths Through CodingAngles, sine and cosine made useful: turning times of day into points on a circle and back.See the syllabus](/courses/maths-through-coding)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 18Data Science for TeensPython with a real bus timetable feed: filtering stops, finding last departures and averaging them correctly.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)College and adultData Analysis CourseFor adults who summarise shift times, delivery windows or opening hours that cross midnight.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Signature project

## When is the last bus, on average? Times that cross midnight

The departures come from the National Transport Authority's Dublin Bus timetable feed for Tuesday 22 September 2026, at the nine stops whose names contain Crumlin. Routes with fewer than 10 departures from those stops that day are left out, which removes one route that runs a single morning trip.

| What is averaged | Result |
| --- | --- |
| Last buses: 150, 122, 151, 27, 56A | 23:29, 23:30, 23:54, 23:56, 23:58 |
| Last buses: S2, 74, 77A (clock time) | 00:02, 00:08, 00:16 |
| Ordinary average of the clock times | 14:54 |
| Average of the timetable times (24:02, 24:08, 24:16) | 23:54 |
| Average on a circle | 23:54, concentration 0.998 |

### Why 14:54 appears

Written as a clock shows it, 00:16 is a small number and 23:58 a large one, so an ordinary average treats the three buses after midnight as the earliest of the day and drags the answer to mid-afternoon. Sort the same list by clock time and the three latest buses come out on top, as if they were the first.

### The timetable's own fix

The GTFS standard behind the timetable says that for times after midnight on the service day, the time is entered as a value greater than 24:00:00, so a trip at 1:35 in the morning is written 25:35:00. The feed writes Crumlin's latest bus as 24:16, and with that convention the ordinary average is 23:54.

### The general fix

Times of day, compass bearings and months of the year all go round in circles. Turn each time into a point on a circle, average the points, and turn the result back into a time. For the eight last buses that gives 23:54 as well, and the length of the averaged point, 0.998 out of a possible 1, says the times are tightly bunched.

### If the numbers wrap around, average them on a circle

An average assumes that the biggest and smallest values are the furthest apart. On a clock, 23:58 and 00:02 are four minutes apart, not almost a whole day. Before averaging anything that wraps, whether hours, angles or days of the week, either unroll it the way the timetable does, with times past 24:00, or map it to a circle and back. The circle method also tells you when an average means little: if the times are spread all round the clock, the averaged point lands near the centre and its length drops towards zero.

The learner's program opens the timetable feed, a set of plain text files. It reads the calendar to find which services run on the chosen Tuesday, selects the stops whose names contain Crumlin, and scans more than two million lines of stop times for departures at those stops, 1,774 of them on the eight routes. For each route it finds the first and last departure. Then it averages the last departures three ways: as clock times, as the timetable writes them, and on a circle using sine and cosine, and prints all three beside each other so the wrong one is impossible to miss. As a check, the same code averages the first departures, which run from 05:45 to 06:35 and do not cross midnight, and all three methods agree at 06:11.

### Decide what counts

One route calls at a Crumlin stop only once that day, at 08:18. Its last bus and its first bus are the same bus, so the program sets a rule, at least 10 departures, before calling anything a last bus. Defining the question comes before averaging the answer.

### A timetable, not a record

These are planned departures for one weekday in the feed. Buses run early or late, and weekend and holiday timetables differ, so the page makes no claim about any particular night's last bus.

### Beyond buses

The same trap waits in shift rotas that end after midnight, in wind directions near north, and in birthdays around New Year. Anything measured on a dial needs the circle treatment.

Crumlin, named

## Crumlin by its parks, its college and its bus stops

Each line is taken from the body that runs the place.

| Place | What its own source says |
| --- | --- |
| Eamonn Ceannt Park | 237 Clogher Road, Crumlin, D12 DP78, with the city's velodrome |
| Willie Pearse Park | 159 Windmill Road, Crumlin, D12 H4C8, opened 1949 |
| City of Dublin FET College, Crumlin | D12 N921, ten minutes' walk from the Suir Road Luas stop |
| Bus stops named Crumlin | Nine in the Dublin Bus timetable feed |

### Eamonn Ceannt Park

Dublin City Council says the park is named after one of the executed leaders of the 1916 Rising and has soccer pitches, a 9-a-side all-weather pitch, tennis courts, a basketball court, a running track and an outdoor gym, and is home to Dublin City's velodrome.

### Willie Pearse Park

The council says the park first opened in 1949 and is named after Willie Pearse, younger brother of Pádraig Pearse. Its facilities include a bowling green, a boxing club, a GAA pitch and an all-weather pitch.

### The college

City of Dublin FET College, Crumlin, gives its eircode as D12 N921 and says it is ten minutes' walk from the Suir Road Luas stop and well served by buses on the Crumlin Road.

What this page does not claim

No population is given for Crumlin, because the page prints only what named bodies publish about the place. The bus figures are planned times for one weekday, taken from the national timetable feed, and the page says nothing about how busy any bus is.

Learning here

## A Crumlin learner's week of lessons

Most weeks bring two lessons, and a teacher leads each one live all the way through.

### Children

Children begin with block code and clock games, where the numbers start again after twelve.

### Teenagers

Teenagers progress to Python, web pages, AI projects and real timetable feeds, with the geometry done in code.

### Adults

Adults can join with no background; the first lesson settles where to start.

Departure times are the National Transport Authority's published timetable feed; the route filtering, first and last departures and all three averages were worked out by us on 20 September 2026. Park details are Dublin City Council's and college details the college's own.

Learning ladder

## From a clock face to averages on a circle

Take the bands as a first guess; lesson one places the learner.

Ages 6 to 10

### Round and round

Block-coded clocks and spinners that wrap back to the start.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 11 to 13

### Times as angles

Python that turns a time into an angle and a point, and back again.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Circular averages

Real timetable data, first and last departures, and three averages side by side.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[Python for Teens](/courses/python-complete-masterclass-teens)Ages 18 to 67

### Shifts and schedules

Summarising times that cross midnight without producing nonsense.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)Coding and AI

## Ask an assistant for the average last bus

It may convert the times carefully and still get mid-afternoon.

Give an AI assistant the eight last departures as a clock shows them and ask for the average, and a straightforward answer converts each to minutes, averages them and reports 14:54. Every step is correct and the result is absurd, because the method treats 00:16 as sixteen minutes into the day instead of sixteen minutes after 23:59.

The learner who has done this project asks the assistant to average the times on a circle, or to use the timetable's own times past 24:00, and to report how bunched they are. The same learner knows to check the answer against common sense: a last bus at mid-afternoon cannot be right.

Arithmetic assumes numbers lie on a line. Some live on a circle, and code has to be told. The longer argument is in [what a learner of any age still gains from coding](/blog/is-coding-worth-learning-2026).

Delivery

## How lessons run for Crumlin

The practicalities.

### A teacher every time

Each lesson is led live, and the teacher watches and helps with each learner's code as it comes together.

### Levelled groups

Fifteen to twenty learners at one level, joining from Crumlin, the rest of Ireland or abroad.

### Two slots a week

Lessons on the same two days each week, about eight in a month.

### Holidays planned

The course plan works around school holidays, mid-terms and exams.

### Equipment

A desktop or laptop, a microphone, headphones or speakers, and internet good enough for a video call.

### Solo teaching

One-to-one lessons for learners who are ahead, need extra time, or need hours no group runs.

No local premises

We have no building in Crumlin, in Dublin or anywhere in Ireland. Lessons happen live on video and are the same from any home.

Fees

## Fees for Crumlin

In brief.

First class**USD 0**

A first lesson with a level check, at no charge.

Group tuition**USD 100**

A month in a same-level group of fifteen to twenty, around eight live lessons.

Private tuition**USD 150**

A month of one-to-one lessons on the same timetable.

All families outside India pay the same US dollar fee, one month at a time. The free lesson involves no commitment, charges begin only with the course, and the pricing page sets out holidays, missed lessons and switching between group and private teaching.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Crumlin.)Reviews

## Google reviews from families, copied exactly

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

## Book a free first lesson in Crumlin

Tell us how old the learner is and what grabs their attention, and the opening lesson will be shaped to match. It might close with a small game, a working program, or a clock that averages midnight properly.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Crumlin one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Crumlin.)

Submitted details are used for placement and follow-up.

FAQ

## Crumlin coding class questions

Questions Crumlin families often ask.

### Is there a Modern Age Coders centre in Crumlin?

No. Lessons are live on video and we have no premises in Ireland. The learner needs a computer, a microphone and sound, and a reliable connection. The phone number on the page is an Indian one.

### What is the last bus project?

The learner takes the Dublin Bus timetable feed, finds the last weekday departure of each route from stops named Crumlin, and averages them: 14:54 as clock times, which is absurd, and 23:54 either with the timetable's times past 24:00 or on a circle.

### Does the page say when the last bus actually leaves?

It lists planned last departures for one weekday from the national timetable feed. Real buses can run early or late, and other days have other timetables, so check the operator before travelling.

### Why is there no population figure for Crumlin?

The page prints only what named organisations publish about Crumlin itself, here the National Transport Authority, Dublin City Council and the FET college, and none of them gives a head count.

### What times are lessons?

Weekdays from after school into the evening, and daytimes at weekends. Every slot is listed in Irish time. The teaching team is in India, which runs five and a half hours ahead of Crumlin in winter and four and a half in summer, and every slot we offer is sensible for both.

### Do you take adult learners?

Adults are very welcome, right up to sixty-seven and with or without experience; once the free lesson is over they choose between a same-level group and private lessons.

### Will my child be with other Crumlin children?

Only by chance. Groups are made by level, so classmates can live anywhere in Ireland or further afield.

### What do coding classes in Crumlin cost?

The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with fifteen to twenty learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.

### How big is each group?

Fifteen to twenty learners, matched by level, pace and goals rather than age or address. If no group fits a workable time, lessons are one to one.

Explore Ireland

## Around Crumlin

To the east, [Rathmines](/coding-classes-in-rathmines-dublin) has a project on library loans. The [Dublin](/best-coding-class-in-dublin) page covers the city, and for every other county, town and district there is the [Ireland hub](/coding-classes-in-ireland).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20coding%20lesson%20for%20a%20learner%20in%20Crumlin.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-crumlin-dublin*
