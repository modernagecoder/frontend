---
title: "Best Coding Classes in London | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for London families in all 32 boroughs and the City, for ages 6 to 67, taught by a teacher. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-class-in-london
source: src/pages/best-coding-class-in-london.html
---
> A good class for a London family has to work in a city of 8,799,728 people at the 2021 Census, run by 33 local authorities: 32 boroughs and the City of London Corporation. London also publishes itself. The Greater London Authority created the London Datastore, which listed 1,302 datasets when we counted through its API on 19 September 2026, and that API is the project on this page. Teaching is live, online and from India: a learner in Harrow, Hackney or Croydon logs in from home to a class at their own level, with learners aged anywhere from 6 to 67, in a group of five to ten or alone with a teacher. Nothing is charged for the first lesson; from then on a group place is USD 100 a month and private teaching USD 150.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / London

Greater London, England / Live online

# Coding classes in London

**What are the best coding classes in London?** A good class for a London family has to work in a city of 8,799,728 people at the 2021 Census, run by 33 local authorities: 32 boroughs and the City of London Corporation. London also publishes itself. The Greater London Authority created the London Datastore, which listed 1,302 datasets when we counted through its API on 19 September 2026, and that API is the project on this page. Teaching is live, online and from India: a learner in Harrow, Hackney or Croydon logs in from home to a class at their own level, with learners aged anywhere from 6 to 67, in a group of five to ten or alone with a teacher. Nothing is charged for the first lesson; from then on a group place is USD 100 a month and private teaching USD 150.

Every programmer eventually writes a loop that asks a server for results one page at a time: give me the first hundred, then the next hundred, and stop when a page comes back empty. It is the standard way to download a catalogue, and it rests on one assumption nobody writes down: that the server does what the request asks. We pointed that loop at the London Datastore, the city's open-data catalogue. It reported 1,302 datasets. Then it sent all 1,302 back on every call, whatever page size and starting point we asked for. A page never came back empty, so the loop never stopped. We had put a cap of 51 calls on it; by then it had collected 66,402 records, and only 1,302 of them were different. Nothing crashed and nothing warned. The program simply kept working, confidently, on a false assumption. That is the thread of this page, and of a great deal of real software.

Facts last verified 20 September 2026. Teaching is online; no London branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four courses for a city of 33 councils

A child in Enfield who wants to make a game, a teenager in Lewisham starting to write real Python, a sixth former in Ealing who likes data, and an adult in Tower Hamlets who spends Friday afternoons copying figures between spreadsheets. Each one starts with a free lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Block code where a loop repeats a move until something on screen changes, and the question every coder learns early: what makes it stop?
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python for Key Stage 3 and 4, read before it is written, with the London Datastore as a real server to ask questions of.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 14 to 18): Downloading a catalogue properly: counting first, capping the calls, removing duplicates and checking the total against a second listing.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Scripts that pull data from work systems safely, with limits and checks, before a report or an AI summary is built on them.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A city of 8,799,728, and 33 councils

London is one city with many governments. The figures below come from the organisations that publish them, and each answers a different question.

**London in figures, from the organisations that publish them**

| Measure | Figure | Where it comes from |
|---|---|---|
| Usual residents, Census 2021 | 8,799,728 | Office for National Statistics, table TS001 on Nomis |
| Local authorities | 33 | London Councils: the 32 boroughs and the City of London Corporation |
| Datasets in the London Datastore | 1,302 | Our count through its API on 19 September 2026 |
| Postal districts in Rowland Hill's plan | 10 | The Postal Museum |
| Elizabeth line opening | Tuesday 24 May 2022 | Transport for London |

### Thirty-three councils

London Councils describes itself as the collective of London local government, the 32 boroughs and the City of London Corporation. A family's council decides school admissions, libraries and much else, which is why each borough will have a page of its own.

### A city that publishes itself

The London Datastore was created by the Greater London Authority to open up the city's data. Anyone can search it, download from it or query it through an API, which makes it an honest place for a learner to meet a real server.

### The first postcodes

The Postal Museum records that when Rowland Hill became Secretary to the Post Office in 1854, he introduced postcodes to London, dividing it into 10 postal districts. Elsewhere in Britain, postcodes were not introduced until after the Second World War.

## The loop that never ends

The London Datastore answers requests in a standard catalogue format. Learners ask it how many datasets it holds, try to download them page by page, and find out what happens when a server does not do what the request asks.

### 1. Ask for the count

A call to package_search returns a field called count before any results. On 19 September 2026 it said 1,302. That number becomes the definition of done.

### 2. Write the usual loop

Ask for 100 results starting at 0, then 100 starting at 100, and so on, stopping when a page comes back empty. On most servers it works. On this one every call returned all 1,302 datasets, so no page was ever empty.

### 3. Make the loop honest

Stop when the number of distinct ids reaches the count, put a hard ceiling on the number of calls, and check the result against a second listing, package_list, which gave the same 1,302 ids.

**What the London Datastore API returned in our test, 19 September 2026**

| Request | Records returned | What it shows |
|---|---|---|
| package_search, no page size given | 1,302 | The full catalogue in one response |
| Page size 0 | 1,302 | Asking for none still returns all |
| Page size 100, and page size 5,000 | 1,302 each | The page size is ignored |
| Starting at record 100, 200 and onwards | 1,302 each | The starting point is ignored too |
| The usual loop, capped at 51 calls | 66,402 | Only 1,302 of them distinct |
| package_list, the second listing | 1,302 ids | None missing either way against search |

### Why an AI does not catch this for you

Ask an AI assistant to write a script that downloads every dataset from the London Datastore and it will very likely write the standard paging loop, because that is what almost every catalogue API expects. The code will look correct and read well. Run against this server, it keeps going until something outside it stops it, and if it has a limit it hands back a file fifty times too long. Nothing in the code is wrong in general; the assumption is wrong for this server. Only someone who counted first, and checked the first two responses against each other, would notice. That habit of testing what a system actually does, instead of what it is supposed to do, is the part of programming that stays with the person.

## Five habits for any API

For school projects, work scripts and anything that downloads data in a loop. Taught from a real London server that ignores its paging.

**Calling an API safely when you cannot see inside it**

| Habit | In practice | What it prevents |
|---|---|---|
| Ask how many first | Read the count or total the server reports before fetching anything | A loop with no idea when it is finished |
| Stop on the count | End when distinct records reach the count, not when a page is empty | A loop that runs forever |
| Cap the calls | Set a maximum number of requests and stop loudly if it is reached | A script that hammers someone else's server |
| Deduplicate by id | Keep one record per identifier, and report how many were dropped | Totals fifty times too large |
| Check a second listing | Compare with another route to the same catalogue | Silent gaps and silent repeats |

The same habits hold on any server a learner will meet later: school systems, shop websites, weather feeds, the APIs behind every app. A server can change its behaviour without notice, and the code that calls it should notice when it does. Each dataset in the London Datastore carries its own publisher and licence on its own page, and a project that uses one reads that licence first.

Modern Age Coders has no connection with the Greater London Authority, Transport for London, London Councils, the Postal Museum or any borough council, and nothing here suggests one. The Datastore figures are our own test of its public API; the population figure is the one the Office for National Statistics publishes for Census 2021.

## A new railway under the city, and a class that needs no train

London plans its week around the trains. An online lesson only needs a desk and a connection.

### The Elizabeth line

Transport for London opened the Elizabeth line on Tuesday 24 May 2022, with 12 trains an hour between Paddington and Abbey Wood from Monday to Saturday, between 06:30 and 23:00, when it began.

### Built underground

Eight tunnel boring machines created the new tunnels under London, according to TfL's own announcement. The line joined services running out to Reading and Heathrow in the west and Shenfield in the east.

### No journey at all

A learner in Havering and a learner in Hillingdon sit at opposite ends of Greater London. In an online group they share a screen at the same minute, and neither needs a line, a change or a ticket.

**33 councils, one timetable** School holidays, half terms and inset days differ from borough to borough and from school to school. A group needs five learners who match on level, subject and hour, so groups draw on learners across London and beyond, and pauses are agreed with each family.

## Thirty-two boroughs and the City

Each borough gets a page of its own as this series grows, written for its own schools, libraries and streets. Linked names below are live now.

Barking and Dagenham, [Barnet](/coding-classes-in-barnet-london), Bexley, [Brent](/coding-classes-in-brent-london), Bromley, Camden, City of London, [Croydon](/coding-classes-in-croydon-london), [Ealing](/coding-classes-in-ealing-london), Enfield, Greenwich, Hackney, Hammersmith and Fulham, Haringey, [Harrow](/coding-classes-in-harrow-london), Havering, [Hillingdon](/coding-classes-in-hillingdon-london), [Hounslow](/coding-classes-in-hounslow-london), Islington, Kensington and Chelsea, Kingston upon Thames, Lambeth, Lewisham, Merton, [Newham](/coding-classes-in-newham-london), [Redbridge](/coding-classes-in-redbridge-london), Richmond upon Thames, Southwark, [Sutton](/coding-classes-in-sutton-london), Tower Hamlets, Waltham Forest, Wandsworth, Westminster.

The capital also has a page on [AI and machine learning classes in London](/ai-and-machine-learning-classes-in-london), built around London cycle hire data. The whole country, with its four school systems, is on the [UK coding page](/coding-classes-in-united-kingdom).

## From a loop that stops to a script that checks

Where a learner starts is decided by watching them work in the free lesson; age and school year only hint at it.

- **Ages 6 to 10: Loops that stop** Children build games where something repeats until a condition changes, and learn to ask what would make it stop before they press go. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Counting and checking** First Python loops, lists and counts, with a check that the answer is the size it should be. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Real servers** Teenagers call a real London API, count first, cap their requests and remove duplicates. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Scripts at work** Adults build downloads and automations that stop on a known total and report anything unexpected. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## An AI can write a downloader for the London Datastore in seconds. Why should a London teenager learn to test it?

Because the code can be right in general and wrong for the one server it is pointed at.

An assistant asked for a download script will produce clean, commented code with a paging loop, because that is what almost every catalogue expects. Pointed at the London Datastore, that code never finishes: the server sends the whole catalogue on every call, so the empty page the loop waits for never arrives. The assistant has not made a mistake anyone could see by reading. The problem only shows up when someone runs the code, looks at the first two responses and asks why they are identical.

A learner who has watched a loop fail to stop carries the habit everywhere: ask for the count, cap the calls, check the result against something independent. It applies to exam coursework, to a first job, to any script that touches a system someone else runs. The AI can write the loop. Deciding what done means, and noticing when a system does not behave as documented, is the part that stays human.

The reason for a London child to learn to code in 2026 is not the tech jobs, real as they are. It is that a city which publishes this much data needs people who test what a system does rather than what it promises. The longer argument is in [why coding is still worth learning for children in 2026](/blog/is-coding-worth-learning-2026).

## From Havering to Hillingdon, one class at one hour

Greater London stretches a long way east to west, and an online lesson reaches every borough at once.

- **Home, wherever that is** A learner in Bexley and one in Barnet share a lesson from their own rooms, and nobody travels across the city.
- **English school words kept** Reception, Key Stages, Year 9 options, GCSEs and A levels keep their names, and every lesson is taught in English.
- **The first lesson is free** A proper lesson on a real problem, followed by a suggested level, course and weekly slot. We never ask for card details.
- **Mixed from many places** A group is five to ten learners at the same level, from all over London and from other countries, which is how every stage finds a slot that suits it.
- **Around the school year** Twice a week, roughly eight lessons a month, and the family decides with the teacher when to stop for holidays, half term or revision.
- **Teaching from India** Our teachers work on India time, which runs five and a half hours ahead of London from late October to late March and four and a half hours ahead in summer. Your slot is always written down in UK time.

**8,799,728 people and one group online** Finding five learners who match on level, subject and hour sounds easy in a city this size, and at seven on a Wednesday it often is not, which is why groups are drawn from London and beyond rather than from one borough.

## What classes cost in London

Three prices, and no small print behind them.

- First class: USD 0. One lesson on a real problem, ending in a placement and a course suggestion.
- Group tuition: USD 100 a month. A month of lessons, usually eight, with five to ten learners at the same level.
- Private tuition: USD 150 a month. A month of lessons, usually eight, with one teacher for one learner.

The price is set in US dollars, as it is for every family outside India, and it is the same in Zone 1 as in Zone 6; there is no pound price list. Nothing is paid until the free lesson has fixed a course and a regular slot, and the pricing page covers pauses, missed lessons and a change of format.

## London coding class questions

### How many people live in London?

Census 2021 counted 8,799,728 usual residents in Greater London, according to the Office for National Statistics table TS001.

### How many councils does London have?

Thirty-three: the 32 London boroughs and the City of London Corporation, which London Councils describes as the collective of London local government.

### What is the London Datastore project?

Learners query the London Datastore, created by the Greater London Authority, ask how many datasets it holds (1,302 on 19 September 2026), and try to download them page by page. The server returns all 1,302 on every call, so the usual loop never stops. Learners fix it by stopping on the count, capping the calls and removing duplicates.

### Is the London Datastore broken?

Not in any way that matters to someone browsing it. Its search returned the whole catalogue on every call in our test, which is a reasonable choice for a catalogue of this size. It only matters to code that assumes the server will page its results, and that is the lesson.

### When were London postcodes introduced?

The Postal Museum records that Rowland Hill introduced postcodes to London after becoming Secretary to the Post Office in 1854, dividing the city into 10 postal districts. Elsewhere in Britain, postcodes came only after the Second World War.

### What time are lessons for London learners?

That depends on which groups have space at your level, and it is settled after the free lesson. India time is five and a half hours ahead of London in winter and four and a half in summer, and your slot is confirmed in UK time before you pay anything.

### Will there be a page for my borough?

Yes. Each of the 32 boroughs and the City will have its own page as the series grows, and every one that is live is linked from the borough list on this page.

### Is there a Modern Age Coders centre in London?

No. All teaching is live and online, and no London premises or UK office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.

### What do coding classes in London cost?

Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.

### How many learners are in a group?

Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.

## Boroughs, the AI page and the national page

The boroughs are listed above and linked as their pages go live. For AI and machine learning built from first principles there is [AI and machine learning classes in London](/ai-and-machine-learning-classes-in-london); for what a class anywhere should offer, [eight tests for any coding class](/best-coding-class-in-the-world); and the whole country is on the [UK coding page](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-class-in-london](https://learn.modernagecoders.com/best-coding-class-in-london#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
