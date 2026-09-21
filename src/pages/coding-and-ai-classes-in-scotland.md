---
title: "Coding and AI Classes in Scotland | National 5 and Highers"
description: "Live online coding, Python and AI classes for learners in Scotland, from P1 to S6, National 5, Higher and beyond, ages 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-scotland
source: src/pages/coding-and-ai-classes-in-scotland.html
---
> Scotland runs its own school system, so a class for a Scottish learner has to speak its language: primary 1 to 7, S1 to S6, a broad general education that Education Scotland says continues to the end of S3, and then National 5, Higher and Advanced Higher, now awarded by Qualifications Scotland. The scale is national: 695,923 pupils in 2,435 publicly funded schools in 2025, in a country of 5,436,600 people on Census Day 2022, served by 32 councils. Modern Age Coders teaches live online from India, so a learner in Lerwick and one in Largs join a class at the same level at the same moment, anyone from 6 to 67, in groups of five to ten or one to one. There is no charge for the opening lesson; afterwards a group place is USD 100 a month and private lessons USD 150.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / Scotland

Scotland, United Kingdom / Live online

# Coding and AI classes in Scotland

**What are the best coding classes in Scotland?** Scotland runs its own school system, so a class for a Scottish learner has to speak its language: primary 1 to 7, S1 to S6, a broad general education that Education Scotland says continues to the end of S3, and then National 5, Higher and Advanced Higher, now awarded by Qualifications Scotland. The scale is national: 695,923 pupils in 2,435 publicly funded schools in 2025, in a country of 5,436,600 people on Census Day 2022, served by 32 councils. Modern Age Coders teaches live online from India, so a learner in Lerwick and one in Largs join a class at the same level at the same moment, anyone from 6 to 67, in groups of five to ten or one to one. There is no charge for the opening lesson; afterwards a group place is USD 100 a month and private lessons USD 150.

Almost every Scottish website with a form has a box asking for your council, and people fill it in the way they speak. Western Isles, not Comhairle nan Eilean Siar. Glasgow, not Glasgow City Council. Borders, Lanarkshire, Edinburgh City. A programmer who wants to be kind accepts near misses, and the standard tool for that is edit distance: count the fewest single-letter changes that turn one string into another, and pick the council with the smallest count. We ran it against the 32 names on mygov.scot. It fixed Fyfe, Anguss and Highlands in one letter each. It also sent Shetland to the Highland Council, Orkney to Moray, and Lanarkshire to Renfrewshire, each time with total confidence, and it could not decide whether Glasgow meant Glasgow City or Angus. Kindness without judgement produces confident mistakes, and learning to tell the two apart is the thread of this page.

Facts last verified 20 September 2026. Teaching is online; no Scotland branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four courses from P1 to the senior phase and beyond

A P3 child in Inverness who wants to make a game, an S2 pupil in Dundee ready for proper code, an S5 student in Stirling thinking about Higher Computing Science, and an adult in Paisley who spends too long tidying spreadsheets. Each starts with a free lesson.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (P1 to P5): Scratch games built from a plan, including a menu that understands what a player meant even when they mistype it.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (P6 to S2): The step from blocks to typed Python during the later years of the broad general education.
- [Python for Teens](/courses/python-complete-masterclass-teens) (S3 to S6): Python in depth for the senior phase, where learners write a council-name matcher and learn when it should refuse to guess.
- [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course) (Adults): For grown-ups who clean lists at work: matching names that are spelled a dozen ways without inventing matches.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 5,436,600 people, 695,923 pupils and 32 councils

Each figure comes from the body that publishes it. They measure different things at different dates, and the table keeps them apart.

**Scotland from its own sources**

| Measure | Figure | Published by |
|---|---|---|
| Population on Census Day, 20 March 2022 (rounded estimate) | 5,436,600 | National Records of Scotland, Scotland's Census |
| Growth since the 2011 census | 141,200, or 2.7 percent | National Records of Scotland, Scotland's Census |
| Pupils in publicly funded schools, 2025 | 695,923 | Scottish Government, Pupil and teacher characteristics 2025 |
| Publicly funded schools, 2025 | 2,435 | Scottish Government, the same release |
| Pupil to teacher ratio, 2025 | 13.2 | Scottish Government, the same release |
| Councils | 32 | mygov.scot |

### A broad general education

Education Scotland describes the broad general education as beginning in early learning and childcare and continuing to the end of S3, the third year of secondary school. Computing is part of it, taught through the technologies curriculum rather than as an exam subject.

### The senior phase

From S4, pupils work towards qualifications. Qualifications Scotland publishes courses in National 5, Higher and Advanced Higher Computing Science, and says the existing course documents remain current since it replaced SQA on 1 February 2026.

### Thirty-two councils

Every Scottish council runs its own schools, admissions and holidays. mygov.scot lists all 32, and one of them, Comhairle nan Eilean Siar, uses its Gaelic name as its official one.

The date a Scottish child starts school, split at 1 March rather than 1 September, is set out with England and Northern Ireland on the [UK coding page](/coding-classes-in-united-kingdom), which is where its project lives.

## Thirty-two councils and a name box

Learners write a matcher that takes whatever a person types and finds the council they meant, using edit distance, then test it on the ways Scots actually refer to their councils.

### 1. Tidy both sides

Lower-case everything, turn an ampersand into and, and drop the word council, so that Perth & Kinross and Perth and Kinross Council become the same string before any comparison.

### 2. Measure the distance

Edit distance, often called Levenshtein distance, counts the fewest insertions, deletions and substitutions between two strings. It is computed with a small table filled in cell by cell, a classic piece of dynamic programming.

### 3. Refuse to guess

The closest name is not always right. Learners add an alias list, a threshold that grows with the length of the input, and a rule that two equally close councils mean asking the person, not picking one.

**Our run against the 32 names on mygov.scot, 20 September 2026 (d = edit distance)**

| Typed | Closest council | d | Verdict |
|---|---|---|---|
| Fyfe | Fife Council | 1 | Right: a one-letter typo |
| Anguss | Angus Council | 1 | Right |
| Highlands | Highland Council | 1 | Right |
| Perth & Kinross | Perth and Kinross Council | 0 | Right, once the ampersand is tidied |
| Glasgow | Angus Council and Glasgow City Council | 5 each | A tie, and half of it absurd |
| Aberdeen | Aberdeen City Council and Aberdeenshire Council | 5 each | A genuine tie: ask |
| Dunbartonshire | East and West Dunbartonshire | 5 each | A genuine tie: ask |
| Shetland | Highland Council | 4 | Wrong: Shetland Islands Council is further away |
| Orkney | Moray Council | 4 | Wrong |
| Borders | Moray Council | 5 | Wrong: Scottish Borders Council is further away |
| Lanarkshire | Renfrewshire Council | 5 | Wrong: North and South Lanarkshire both lose |
| Western Isles | A four-way tie of unrelated councils | 9 | Wrong: no letters in common with the Gaelic name |

### Why an AI does not settle this for you

Ask an assistant for a fuzzy matcher and it will write a correct edit-distance function and pick the lowest score, which is exactly what produced Shetland to Highland. The function is not faulty; it measures letters, and letters are not meaning. Only someone who knows that people say Western Isles for Comhairle nan Eilean Siar, and Borders for the Scottish Borders, can write the alias list that fixes it, and only someone who has watched a tie get broken arbitrarily knows to make the program ask. That judgement is the part of the job that does not move to the machine.

## Five rules for matching what people type

For forms, spreadsheets, mailing lists and any data where the same place or person is spelled more than one way.

**Fuzzy matching without inventing matches**

| Rule | In practice | What it prevents |
|---|---|---|
| Normalise both sides first | Case, punctuation, ampersands and filler words such as council or city | Real names failing on formatting alone |
| Keep an alias list | Common names, old names and names in other languages, taken from the organisations themselves | Western Isles never finding Comhairle nan Eilean Siar |
| Scale the threshold | Allow a distance of one or two for long names, less for short ones | Shetland matching Highland at a distance of four |
| Treat ties as questions | If two candidates are equally close, show both and ask | Glasgow being silently filed under Angus |
| Keep the evidence | Store what was typed, what it matched and the distance | Mistakes that nobody can trace later |

The scale is the reason this matters. With 695,923 pupils in Scottish schools and a council box on most forms that touch them, a matcher that is right nine times in ten still files tens of thousands of records under the wrong council. A few lines of care at the start cost far less than cleaning up afterwards.

Modern Age Coders has no connection with the Scottish Government, Education Scotland, Qualifications Scotland, National Records of Scotland, mygov.scot or any Scottish council, and nothing here suggests one. The council names are quoted as mygov.scot lists them; the matching results are our own run on 20 September 2026.

## Thirty-two councils and eight cities

Each council area and city will have a page of its own as this series grows, written for its own schools, libraries and places. Linked names are live now.

**Councils, as mygov.scot lists them:** Aberdeen City Council, Aberdeenshire Council, Angus Council, Argyll and Bute Council, Clackmannanshire Council, Comhairle nan Eilean Siar, Dumfries and Galloway Council, Dundee City Council, East Ayrshire Council, East Dunbartonshire Council, East Lothian Council, East Renfrewshire Council, [Edinburgh Council](/best-coding-class-in-edinburgh), Falkirk Council, Fife Council, Glasgow City Council, Highland Council, Inverclyde Council, Midlothian Council, Moray Council, North Ayrshire Council, North Lanarkshire Council, Orkney Islands Council, Perth and Kinross Council, Renfrewshire Council, Scottish Borders Council, Shetland Islands Council, South Ayrshire Council, South Lanarkshire Council, Stirling Council, West Dunbartonshire Council, West Lothian Council.

**Cities with city status:** Aberdeen, Dundee, Dunfermline, [Edinburgh](/best-coding-class-in-edinburgh), Glasgow, Inverness, Perth, Stirling. The UK government's list of cities, published on 29 August 2022, names these eight in Scotland.

## From a menu that forgives typos to a matcher that knows when to ask

Where a learner starts is set in the free lesson, from what they can do, whatever their stage at school.

- **P1 to P5: Forgiving menus** Children build games with menus and questions that cope with small mistakes, and notice when a guess goes wrong. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **P6 to S2: Strings and loops** Python strings, loops and comparisons: the pieces an edit-distance table is built from. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **S3 to S6: Algorithms with judgement** Dynamic programming, thresholds and alias lists, alongside National 5 and Higher Computing Science work. [Python for Teens](/courses/python-complete-masterclass-teens), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **Adults: Cleaner data at work** Adults match and merge the lists they inherit, without letting a clever tool make up matches. [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## An AI can write a fuzzy matcher in seconds. Why should a Scottish pupil learn when to distrust it?

Because the matcher will be confident about Shetland being in the Highlands.

The code an assistant produces for this job is usually textbook: an edit-distance function, a loop over the candidates, the smallest score wins. Run on Scottish council names it rescues typos neatly and then files Shetland under the Highland Council, Orkney under Moray, and Glasgow somewhere between Glasgow City and Angus. Nothing in the output looks uncertain. The mistakes only appear when a person who knows Scotland reads the results.

A learner who has built and broken this matcher carries the lesson into every job that involves messy names: school lists, club registers, customer records, the columns an AI is asked to tidy. Measure similarity, yes, but keep an alias list, scale the threshold, and ask when two answers are equally good. The machine does the arithmetic. Deciding what counts as the same thing is the human part.

So the case for a Scottish child learning to code in 2026 is not that computers are hard to use. It is that they are easy to use badly, and a country of 32 councils and two languages on its road signs needs people who can tell a close match from a correct one. The longer argument is in [the case for learning to program in 2026](/blog/is-coding-worth-learning-2026).

## From the Borders to Shetland, the same lesson at the same time

An online class reaches the islands as easily as the Central Belt.

- **Island or city** A learner on Orkney and a learner in Glasgow share one group, and neither needs a ferry, a train or a lift.
- **Scottish stages kept** P1 to P7, S1 to S6, Nationals and Highers keep their Scottish names; teaching is in English.
- **Start with a free lesson** A proper task with a teacher, then a recommended level, course and regular time. No card details are taken.
- **Groups that fit** Five to ten learners at the same level, from across Scotland and beyond, so that each stage has a group at a sensible hour.
- **Council holidays** Each Scottish council publishes its own term dates, and the exam diet has its own timetable; families and teachers agree breaks around both.
- **Two clocks** India is five and a half hours ahead of Scotland in winter and four and a half in summer, and every lesson is booked in UK time.

**2,435 schools, one online group** A group needs five learners who match on level, subject and hour, which is easier across a whole country than in any single town, especially in the islands and the rural council areas.

## What classes cost in Scotland

One price list for the whole country, from the Central Belt to the islands.

- First class: USD 0. A full lesson on a real task, ending with a recommended level and course.
- Group tuition: USD 100 a month. Around eight lessons a month in a group of five to ten at one level.
- Private tuition: USD 150 a month. Around eight lessons a month with a teacher for one learner.

Fees are in US dollars, the rate for every family outside India, with no pound price list and no difference between councils. Nothing is paid until the free lesson has agreed a course and a regular time; the pricing page covers pauses, missed lessons and changing format.

## Coding classes in Scotland: common questions

### How many pupils and schools are there in Scotland?

The Scottish Government counted 695,923 pupils in 2,435 publicly funded schools in 2025, with a pupil to teacher ratio of 13.2, in its Pupil and teacher characteristics release of 9 December 2025.

### What is the broad general education?

Education Scotland describes it as the part of Curriculum for Excellence that begins in early learning and childcare and continues to the end of S3. The senior phase, with National 5, Higher and Advanced Higher, follows.

### Who awards National 5 and Higher Computing Science now?

Qualifications Scotland, which replaced SQA on 1 February 2026. Its course pages say the existing National 5 Computing Science documents remain current.

### How many councils does Scotland have?

Thirty-two. mygov.scot lists them all, and Comhairle nan Eilean Siar is the one whose official name is in Gaelic.

### What is the council-name project?

Learners match typed council names to the 32 official ones with edit distance. It fixes typos such as Fyfe and Anguss, but sends Shetland to Highland and Lanarkshire to Renfrewshire and ties Glasgow with Angus, so learners add an alias list, a length-based threshold and a rule to ask on a tie.

### Do you teach National 5 and Higher Computing Science?

Teachers work with the content of National 5, Higher and Advanced Higher Computing Science alongside school, as tutoring and extra practice; they do not replace the school course or its assessment.

### What time are lessons for learners in Scotland?

A regular time is agreed after the free lesson, depending on which groups have space at the learner's level. India is five and a half hours ahead of the UK in winter and four and a half in summer, and times are always given in UK time.

### Is there a Modern Age Coders centre in Scotland?

No. All teaching is live and online, and no Scottish premises or UK office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.

### What do coding classes in Scotland cost?

Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.

### How many learners are in a group?

Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.

## The rest of the UK

The four school systems of the UK, and the date each one starts children at school, are on the [UK coding page](/coding-classes-in-united-kingdom). For what any class should offer, read [choosing an online coding class in the UK](/best-online-coding-classes-uk), and for AI built from the ground up, [AI and machine learning classes in the UK](/ai-and-machine-learning-classes-in-uk).

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-scotland](https://learn.modernagecoders.com/coding-and-ai-classes-in-scotland#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
