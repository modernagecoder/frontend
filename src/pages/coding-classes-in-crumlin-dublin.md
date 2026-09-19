---
title: "Coding Classes in Crumlin, Dublin | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Crumlin learners aged 6 to 67, in small same-level groups or one to one. The first lesson is completely free."
canonical: https://learn.modernagecoders.com/coding-classes-in-crumlin-dublin
source: src/pages/coding-classes-in-crumlin-dublin.html
---
> Crumlin learners have a teacher leading every lesson live over video, in a small group of learners at one level or one to one, on two days in a normal week, for any age from six to sixty-seven. It all happens at home. Lesson one carries no charge, and from then on each month is USD 100 as part of a group or USD 150 taught privately.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Dublin](/best-coding-class-in-dublin) / Crumlin

Crumlin, Dublin 12 / Live online

# Coding classes in Crumlin

**What are the best coding classes in Crumlin?** Crumlin learners have a teacher leading every lesson live over video, in a small group of learners at one level or one to one, on two days in a normal week, for any age from six to sixty-seven. It all happens at home. Lesson one carries no charge, and from then on each month is USD 100 as part of a group or USD 150 taught privately.

Eight Dublin Bus routes stop at places the timetable names after Crumlin, and each has a last departure of the night. Three of them leave after midnight: at 00:02, 00:08 and 00:16. Average the eight last buses as a clock shows them and the answer is 14:54, the middle of the afternoon, when every one of those buses is still running. The mistake is not in the arithmetic. Clock times go round in a circle, and an ordinary average treats 00:16 as the earliest time of day rather than the latest. This page teaches a learner two ways to average times properly, and why the bus timetable itself writes 00:16 as 24:16.

Facts last verified 20 September 2026. Teaching is online; no Crumlin branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four first courses for Crumlin

Use the age band to choose a starting point; the free first lesson is where the teacher checks the level and switches course if another fits better.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and clocks: a clock face game where the hands go round and the numbers start again after 12.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 13): Angles, sine and cosine made useful: turning times of day into points on a circle and back.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Python with a real bus timetable feed: filtering stops, finding last departures and averaging them correctly.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults who summarise shift times, delivery windows or opening hours that cross midnight.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## When is the last bus, on average? Times that cross midnight

The departures come from the National Transport Authority's Dublin Bus timetable feed for Tuesday 22 September 2026, at the nine stops whose names contain Crumlin. Routes with fewer than 10 departures from those stops that day are left out, which removes one route that runs a single morning trip.

**Last weekday departures from Crumlin stops, and three ways to average them**

| What is averaged | Result |
|---|---|
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

## Crumlin by its parks, its college and its bus stops

Each line is taken from the body that runs the place.

**Named places in Crumlin**

| Place | What its own source says |
|---|---|
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

**What this page does not claim** No population is given for Crumlin, because the page prints only what named bodies publish about the place. The bus figures are planned times for one weekday, taken from the national timetable feed, and the page says nothing about how busy any bus is.

## A Crumlin learner's week of lessons

Most weeks bring two lessons, and a teacher leads each one live all the way through.

### Children

Children begin with block code and clock games, where the numbers start again after twelve.

### Teenagers

Teenagers progress to Python, web pages, AI projects and real timetable feeds, with the geometry done in code.

### Adults

Adults can join with no background; the first lesson settles where to start.

Departure times are the National Transport Authority's published timetable feed; the route filtering, first and last departures and all three averages were worked out by us on 20 September 2026. Park details are Dublin City Council's and college details the college's own.

## From a clock face to averages on a circle

Take the bands as a first guess; lesson one places the learner.

- **Ages 6 to 10: Round and round** Block-coded clocks and spinners that wrap back to the start. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Times as angles** Python that turns a time into an angle and a point, and back again. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Circular averages** Real timetable data, first and last departures, and three averages side by side. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Shifts and schedules** Summarising times that cross midnight without producing nonsense. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Ask an assistant for the average last bus

It may convert the times carefully and still get mid-afternoon.

Give an AI assistant the eight last departures as a clock shows them and ask for the average, and a straightforward answer converts each to minutes, averages them and reports 14:54. Every step is correct and the result is absurd, because the method treats 00:16 as sixteen minutes into the day instead of sixteen minutes after 23:59.

The learner who has done this project asks the assistant to average the times on a circle, or to use the timetable's own times past 24:00, and to report how bunched they are. The same learner knows to check the answer against common sense: a last bus at mid-afternoon cannot be right.

Arithmetic assumes numbers lie on a line. Some live on a circle, and code has to be told. The longer argument is in [what a learner of any age still gains from coding](/blog/is-coding-worth-learning-2026).

## How lessons run for Crumlin

The practicalities.

- **A teacher every time** Each lesson is led live, and the teacher watches and helps with each learner's code as it comes together.
- **Levelled groups** Five to ten learners at one level, joining from Crumlin, the rest of Ireland or abroad.
- **Two slots a week** Lessons on the same two days each week, about eight in a month.
- **Holidays planned** The course plan works around school holidays, mid-terms and exams.
- **Equipment** A desktop or laptop, a microphone, headphones or speakers, and internet good enough for a video call.
- **Solo teaching** One-to-one lessons for learners who are ahead, need extra time, or need hours no group runs.

**No local premises** We have no building in Crumlin, in Dublin or anywhere in Ireland. Lessons happen live on video and are the same from any home.

## Fees for Crumlin

In brief.

- First class: USD 0. A first lesson with a level check, at no charge.
- Group tuition: USD 100 a month. A month in a same-level group of five to ten, around eight live lessons.
- Private tuition: USD 150 a month. A month of one-to-one lessons on the same timetable.

All families outside India pay the same US dollar fee, one month at a time. The free lesson involves no commitment, charges begin only with the course, and the pricing page sets out holidays, missed lessons and switching between group and private teaching.

## Crumlin coding class questions

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

The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.

### How big is each group?

Five to ten learners, matched by level, pace and goals rather than age or address. If no group fits a workable time, lessons are one to one.

## Around Crumlin

To the east, [Rathmines](/coding-classes-in-rathmines-dublin) has a project on library loans. The [Dublin](/best-coding-class-in-dublin) page covers the city, and for every other county, town and district there is the [Ireland hub](/coding-classes-in-ireland).

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-crumlin-dublin](https://learn.modernagecoders.com/coding-classes-in-crumlin-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
