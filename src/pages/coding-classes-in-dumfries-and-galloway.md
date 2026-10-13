---
title: "Coding Classes in Dumfries and Galloway | Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Dumfries and Galloway, from Dumfries, Stranraer and Annan to Lockerbie, Castle Douglas and Kirkcudbright."
canonical: https://learn.modernagecoders.com/coding-classes-in-dumfries-and-galloway
source: src/pages/coding-classes-in-dumfries-and-galloway.html
---
> Live online coding, Python and maths classes across Dumfries and Galloway, from Dumfries, Stranraer and Annan to Lockerbie, Castle Douglas and Kirkcudbright.

Skip to contentCourses for Dumfries and Galloway

## Where Dumfries and Galloway learners start

A P5 pupil in Castle Douglas who loves the stars, an S2 in Annan starting Python, an S5 in Dumfries working with data, and an adult in Stranraer building new skills. Each begins with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding from a first Scratch game onwards, including night-sky scenes and counting games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, with games, puzzles and first steps with data and AI.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 13 to 18Data Science for TeensReal data in Python for teenagers, from loading a catalogue to testing a claim against it.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CourseSpreadsheets, statistics and SQL, then Python and dashboards, for adults working with real data.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Dumfries and Galloway in figures

## About 145,900 people from the Solway to the Galloway hills

Population, households and density come from the 2022 census as first published, in hundreds; the town list is from the NRS mid-2020 locality estimates.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Dumfries | 33,470 | Dalbeattie | 4,160 |
| Stranraer | 10,110 | Newton Stewart | 4,030 |
| Annan | 8,760 | Castle Douglas | 4,000 |
| Locharbriggs | 5,610 | Kirkcudbright | 3,350 |
| Lockerbie | 4,190 | Gretna | 3,110 |

At 22.7 residents per square kilometre, the council area is about a third as densely settled as Scotland overall. Our addition of the census age groups gives 14.1 per cent under 15 and 27.1 per cent aged 65 or over, compared with 15.3 and 20.1 per cent for Scotland. Moffat and Lochmaben are the next towns after the table. Dumfries and Galloway Council sets school term dates, which we have not read; we fit breaks around each family's calendar.

### Over the border

Many families look across the Solway to [Carlisle](/best-coding-class-in-carlisle) and [Cumbria](/coding-classes-in-cumbria). For Scottish exams, see [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help).

The Dumfries and Galloway project

## How many stars can you really see?

A real star catalogue, a few lines of spherical geometry, and a claim that depends on its definition.

The learner downloads the Yale Bright Star Catalogue, which lists the brightness and position of every star bright enough to see without a telescope: 9,096 entries with both values. Astronomers measure brightness in magnitudes, where bigger numbers are fainter, and the usual naked-eye limit under a dark sky is around magnitude 6 to 6.5. First the program counts stars brighter than each magnitude, and a pattern jumps out: each step fainter roughly triples the count, from 174 stars brighter than 3 to 518 brighter than 4, 1,630 brighter than 5 and 5,080 brighter than 6.

| What "visible" means | Stars counted |
| --- | --- |
| Whole sky, brighter than magnitude 6.5 | 8,404 |
| Every star in the catalogue that ever rises at 55 degrees north | 6,814 |
| Above the horizon at one moment, brighter than 6.5 (average of 24 times) | About 4,074 |
| The same, but at least 10 degrees above the horizon | About 3,387 |
| Above the horizon at one moment, brighter than 6.0 | About 2,433 |

Now the claim. From Galloway, at about 55 degrees north, stars far enough south never rise, so the program keeps only those with a declination above minus 35 degrees: 6,814 catalogue stars. But at any single moment only the half of the sky above you counts. Using a little spherical geometry to work out each star's height, the program finds on average about 4,074 stars brighter than magnitude 6.5 above the horizon at once, and about 3,387 if the murky lowest ten degrees are left out. Seeing over 7,000 would need a different definition: counting over the whole year, including planets, or seeing stars fainter than 6.5 under an exceptional sky.

That is the real lesson. The claim may well be true in the sense its authors intended; our program cannot tell. What it does show is that a number like "over 7,000 visible" means very little until you know over what time, down to what brightness, and from what height above the horizon. Making those choices explicit, and seeing how much each one moves the answer, is exactly what data work is.

### Ages 9 to 12

Count the stars inside a cardboard tube on a clear night, then multiply up for the whole sky, and discuss why guesses vary so much.

### Ages 12 to 15

Load the catalogue in Python, count stars brighter than each magnitude, and plot the counts to see the tripling.

### Ages 15 and up

Compute each star's altitude for a given time and latitude, average over the night, and write up what "visible" should mean.

### Their claim and our counts

The Dark Sky Park facts and the 7,000 figure are Forestry and Land Scotland's. The Bright Star Catalogue is published by the Strasbourg astronomical data centre from Yale's work. Every count on this page is ours, and a different latitude, brightness limit or catalogue would give different numbers.

Why Galloway

## One of the first Dark Sky Parks in the world

The Dumfries and Galloway link, from Forestry and Land Scotland.

| Point | The page says |
| --- | --- |
| Designation | In 2009 Galloway Forest Park became one of the first in the world to be named an International Dark Sky Park. |
| Tier | It was also awarded Gold Tier status. |
| On a clear night | Over 7,000 stars and planets are visible with the naked eye. |
| The Milky Way | Its bright band is usually easy to see arching across the sky. |

Astronomy was one of the first sciences to depend on large catalogues and careful counting, and today's sky surveys produce more data than any other science. The skills on this page, loading a catalogue, applying a threshold, doing geometry on every row and defining terms precisely, are the same ones used in genetics, finance and AI. A Dumfries and Galloway student who has checked a claim about their own sky has done real data science.

We have no connection with Forestry and Land Scotland, the Strasbourg data centre or Dumfries and Galloway Council. Their facts and data are theirs; our analysis and any mistakes are ours.

Nearby pages

[Carlisle](/best-coding-class-in-carlisle) and [Cumbria](/coding-classes-in-cumbria) are over the border; [Glasgow](/best-coding-class-in-glasgow) is to the north. The [Scotland](/coding-and-ai-classes-in-scotland) page lists every council.

The path

## From counting stars to testing claims with data

The free lesson settles where to start. The school stage is a clue, and ability is the answer.

P1 to P4

### Counting games

Block coding with counting, sorting and simple night-sky scenes.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Lists and thresholds

Typed Python that filters a list by a rule and counts what passes.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)S3 to S6

### Real datasets

Data science with real catalogues, useful alongside National 5 and Higher courses.

[Data Science for Teens](/courses/data-science-course-for-teens-python-data)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Data you can defend

Spreadsheets, SQL and Python for adults who need numbers that stand up to questions.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)AI and definitions

## An AI can repeat "over 7,000 stars". Can it tell you what that number counts?

Numbers without definitions travel easily and mean little.

AI assistants are very good at repeating figures they have read, and a figure like "over 7,000 stars visible" will be repeated widely. What they rarely do, unless asked, is unpack it: at one moment or over a year, down to which brightness, above what height. Our own count gives about 4,074 at one moment, 6,814 over the year, and 8,404 over the whole sky, all from the same catalogue.

A Dumfries and Galloway student who has run those numbers knows to ask what a figure counts before trusting or repeating it. That question is essential for anyone using AI to research anything, from health statistics to school results.

So a young person in Dumfries and Galloway should learn to code in 2026 to find out what a number really counts. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## From the Rhins to Annandale, no long drive

Dumfries and Galloway is wide and rural, and a weekly class at the right level can be far from home. Online lessons remove the distance.

### Home is the classroom

A farmhouse near Newton Stewart, a flat in Dumfries, a house in Stranraer. The pupil types the code while the teacher watches the shared screen.

### Scottish stages

Teachers know where a P7 or an S4 pupil is in the Scottish system, from Primary to National 5, Higher and Advanced Higher, and teach in English.

### Free to start

A real first lesson, then clear advice on level and course. No card details are asked for.

### Groups by stage

Each class of fifteen to twenty shares a level, even if its members live in different countries.

### Term and holidays

A usual week has two lessons; when the school holidays start, so does our break.

### UK time, steady

Your slot stays at the same UK time all year; the teacher, on India time several hours ahead, adjusts when the clocks change.

Why groups follow level

Across a council area this large, five learners at one stage who are free on the same evening rarely live near each other. Grouping by level lets a pupil in Moffat or Kirkcudbright join a class that fits.

Fees

## Fees in Dumfries and Galloway

Stranraer or Gretna, the fee is the same, and it is the fee in every country we teach apart from India.

First class**USD 0**

A full lesson of genuine work, then a suggested level and course.

Group tuition**USD 100**

About eight lessons a month with fifteen to twenty learners at one level.

Private tuition**USD 150**

About eight lessons a month, one-to-one.

Prices are set in US dollars, not pounds. Payment only begins after the free lesson has settled which course and which weekly hour; holiday pauses, missed lessons and changing between group and private are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Dumfries%20and%20Galloway%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Reviews from families on Google

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

## Book a free Dumfries and Galloway lesson

Give us the pupil's stage or the adult's aim, and one or two interests. A first lesson could be a Scratch night-sky scene, a Python counting program, or the star catalogue on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Dumfries and Galloway one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Dumfries%20and%20Galloway%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Dumfries and Galloway questions

The council area, the dark sky project and practical details.

### How many people live in Dumfries and Galloway?

The 2022 census put it at about 145,900 usual residents living in some 70,600 households, figures the NRS rounds to hundreds.

### What are the largest towns in Dumfries and Galloway?

By NRS mid-2020 locality estimates: Dumfries 33,470, Stranraer 10,110, Annan 8,760, Locharbriggs 5,610 and Lockerbie 4,190.

### What is the dark sky project?

Learners use the Yale Bright Star Catalogue in Python to count stars by brightness, work out which rise at Galloway's latitude and how many are up at once, and test the claim that over 7,000 are visible.

### How many stars can you see at once?

By our count from the catalogue, about 4,000 stars brighter than magnitude 6.5 are above the horizon at any moment at 55 degrees north, fewer near the horizon. Other definitions give larger numbers.

### When did Galloway become a Dark Sky Park?

Forestry and Land Scotland says Galloway Forest Park became one of the first International Dark Sky Parks in 2009, with Gold Tier status.

### Are lessons held in Dumfries and Galloway?

No. All lessons are live online, so pupils anywhere in the council area join from home.

### Do you teach National 5 and Higher Computing Science?

Yes: exam support is set out on our National 5 and Higher Computing Science pages. Our aim is understanding, and we make no promise about results.

### What ages do you teach?

Anyone from six to sixty-seven: blocks in the early primary years, Python and then data science through secondary, and practical data skills for adults.

### How much do lessons cost?

The first lesson is free. From then on it is USD 100 monthly in a group or USD 150 monthly for individual lessons.

### Do you pause for Dumfries and Galloway school holidays?

Yes. Term dates are published by the council, and we arrange pauses once you send yours.

Close by

## Pages near Dumfries and Galloway

South over the Solway are [Carlisle](/best-coding-class-in-carlisle) and [Cumbria](/coding-classes-in-cumbria); north is [Glasgow](/best-coding-class-in-glasgow). All 32 Scottish councils appear on our [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) has the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Dumfries%20and%20Galloway%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-dumfries-and-galloway*
