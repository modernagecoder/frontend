---
title: "Coding Classes in Glasnevin, Dublin | Modern Age Coders"
description: "Live online coding, Python, AI and maths lessons for Glasnevin learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge."
canonical: https://learn.modernagecoders.com/coding-classes-in-glasnevin-dublin
source: src/pages/coding-classes-in-glasnevin-dublin.html
---
> Glasnevin learners have a real teacher leading every lesson live over video, with a small group at their own level or one to one, two sessions in most weeks, and any age from six to sixty-seven is welcome. You never leave home for it. Lesson one is free; after that you pay USD 100 a month for a group place or USD 150 a month for private teaching.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Dublin](/best-coding-class-in-dublin) / Glasnevin

Glasnevin, Dublin 9 / Live online

# Coding classes in Glasnevin

**What are the best coding classes in Glasnevin?** Glasnevin learners have a real teacher leading every lesson live over video, with a small group at their own level or one to one, two sessions in most weeks, and any age from six to sixty-seven is welcome. You never leave home for it. Lesson one is free; after that you pay USD 100 a month for a group place or USD 150 a month for private teaching.

Met Éireann has measured temperature at its Glasnevin station since 1961, and 58 of the years since are complete. If nothing were changing, every year would be as likely as any other to be the warmest so far, and 58 years would set about 4.65 records for the warmest year by chance alone. Glasnevin's yearly average has set 10, three of them in the last 20 complete years, where chance would give less than half of one. This page teaches a learner where 4.65 comes from, how to test it by shuffling the years, and why the same test on the single hottest day tells a quieter story.

Facts last verified 20 September 2026. Teaching is online; no Glasnevin branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four first courses for Glasnevin

Age is the first filter; the teacher then checks the level during the free lesson and points to a different course if it would suit better.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks and a dice game: how often a new high score turns up when every roll is luck.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 13): Fractions that add up, 1 + 1/2 + 1/3 and onwards, computed and then tested in code.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Python with a 65-year weather file: merging duplicate rows, counting records and shuffling to test them.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults who report records and firsts at work and want to know when one is really news.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How many records should chance set? Sixty-five years at the Glasnevin station

The data is Met Éireann's daily file for its Dublin (Glasnevin) station. A year counts here only if it has at least 350 days with both a maximum and a minimum temperature, which leaves 58 complete years between 1961 and 2025.

**Records at Glasnevin in 58 complete years, 1961 to 2025**

| What is measured each year | Records set | Expected with no trend | Latest record |
|---|---|---|---|
| Average temperature for the year | 10 | 4.65 | 2023, 11.80 degrees |
| Hottest day | 6 | 4.65 | 1990, 31.0 degrees |
| Warmest night | 4 | 4.65 | 2006, 19.8 degrees |
| Coldest night (record lows) | 2 | 4.65 | 1972, minus 11.5 degrees |

### Where 4.65 comes from

If nothing is changing, each of the first k years is equally likely to be the warmest so far, so year k sets a record with a chance of 1 in k. The first year always counts. Add 1 + 1/2 + 1/3 and so on up to 1/58 and the total is 4.65. The same sum for just the last 20 of those years is 0.42.

### The warm years

Glasnevin's yearly average set records in 1961, 1973, 1975, 1983, 1989, 1995, 1997, 2006, 2022 and 2023, ten in all. Shuffling the 58 yearly averages into random order 100,000 times produced ten or more records only 570 times.

### The hottest day

The single hottest day of each year tells a quieter story: six records, the last on 2 August 1990 at 31.0 degrees, which still stands. One day a year is a noisy thing to track, and 2022 came closest, with 29.8 on 18 July.

### A record means little until you know how many to expect

A new record sounds dramatic, yet in a short series records are common and in a long one they should grow rare. Counting them only means something beside the number expected if nothing were changing, and that number takes one line to compute and a few more to check by simulation. The same test works for race times, rainfall, sales figures or a video game's high scores.

The learner's program reads Met Éireann's file, which opens with a key to its codes and then gives one row per day. It hits a trap before any maths. From 1966 to 1988 every date appears twice, 8,000 dates in all: one row carries rain only, the other rain and temperatures, and which comes first changes from year to year. Keeping the first row for each date leaves 38 complete years; keeping the last leaves 42; merging the pair field by field, which turns up no conflicting values, restores all 58. The program then works out each year's average, hottest day, warmest night and coldest night, counts the records in each, computes the expected count with the running sum above, and repeats the count on 100,000 shuffled orders to see how often chance matches it.

### Years left out

Seven years between 1961 and 2025 have fewer than 350 days with both readings, 2020 among them because its rows stop at the end of November. They are left out rather than filled in with guesses.

### The cold side

Record lows turn up less often than chance would give. The coldest night set a record only twice, in 1961 and at minus 11.5 degrees in 1972, and the yearly average only twice, in 1961 and 1962.

### What it does not show

The records say recent years at Glasnevin have been warm; they do not say why, and one station is not the whole country. The shuffle test also treats years as independent, which neighbouring years are not quite.

## Glasnevin through its weather station, gardens, cemetery and university

Every entry below comes from the body responsible for it.

**Named places in Glasnevin**

| Place | What its own source says |
|---|---|
| Met Éireann weather station | Dublin (Glasnevin), 18 metres above sea level |
| National Botanic Gardens | Glasnevin, Dublin 9, D09 VY63 |
| Glasnevin Cemetery | Finglas Road, D11 XA32 |
| DCU Glasnevin Campus | Collins Avenue Extension, D09 V209 |

### The gardens

The OPW's Heritage Ireland page says the gardens, 3 kilometres from the city centre, hold over 16,000 plant species and cultivars, over 300 of them endangered and 6 extinct in the wild. It names Richard Turner's Curvilinear Range and the Great Palm House as highlights, notes a link with Kilmacurragh in County Wicklow since 1854, and lists admission to the gardens as free.

### The cemetery

Dublin Cemeteries Trust says Glasnevin Cemetery was established in 1832, covers 124 acres and is the resting place of almost 1.5 million people.

### The university

DCU gives D09 V209 as the default eircode for its Glasnevin Campus, used for post to the mailroom at the John and Aileen O'Reilly Library on Collins Avenue Extension.

**What this page does not claim** No population is given for Glasnevin, because the page prints only what named bodies publish about the place. The temperature records describe one station. The Botanic Gardens' own website blocked automated reading, so its facts are taken from the OPW's Heritage Ireland page instead.

## Two lessons in a Glasnevin learner's week

Most weeks hold two lessons, and in each the teacher leads live throughout.

### Children

Children begin in block code with games of chance, and learn to tell a lucky streak from a real change.

### Teenagers

Teenagers progress to Python, websites, AI projects and long real files like the weather station's, where the maths becomes something they can run.

### Adults

Adults are welcome with no experience; the first lesson chooses the course.

Temperatures are Met Éireann's daily records for station 1823; the complete-year counts, record tallies, expected values and shuffle results were calculated by us on 20 September 2026. Garden, cemetery and university details come from the OPW, Dublin Cemeteries Trust and DCU.

## From a lucky high score to a tested claim

Bands are approximate; the first lesson sets the actual level.

- **Ages 6 to 10: New high score** Block-coded games that keep the top score so far and count how often it changes. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Adding fractions** Python that sums 1 + 1/2 + 1/3 and compares it with a simulated game. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Shuffle tests** Real weather files, merged rows, record counts and permutation tests. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Is it news?** Deciding whether a record, a first or an all-time high deserves attention. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Ask an assistant whether Glasnevin is getting warmer

It may fit a trend line. It rarely asks how the file was built.

Give an AI assistant the station file and ask for a warming trend, and a common first attempt reads the rows into a table keyed by date and fits a line. On this file a table keyed by date keeps whichever row came last, and from 1966 to 1988 that is often the row with no temperatures, so years of readings vanish without an error. The line that follows is fitted to the survivors.

The learner who has built this project checks the keys first, merges the duplicate rows, and then asks a sharper question than a trend line: how many records would chance set in 58 years, and how does that compare with what happened? An assistant can help write the shuffle; the learner knows what it is for.

A record is only news next to the number chance would produce. Code lets you work that number out. The longer argument is in [why a young learner should start coding now](/blog/is-coding-worth-learning-2026).

## How lessons run for Glasnevin

What to expect.

- **Teacher present** Lessons are taught in real time, with the teacher reviewing each learner's code and helping as it is written.
- **Matched groups** Five to ten learners at one level, whether from Glasnevin, elsewhere in Ireland or another country.
- **Regular slots** Two agreed days every week, adding up to about eight lessons a month.
- **Holidays covered** The school holidays, mid-term breaks and exam weeks are planned around.
- **Set-up** A laptop or desktop, a working microphone, headphones or speakers, and broadband able to carry video.
- **Private lessons** One-to-one teaching for learners who are ahead, want more time or keep hours no group runs.

**Taught online** Modern Age Coders has no building in Glasnevin or anywhere else in Ireland. Lessons take place live on video and are the same from any home.

## Fees for Glasnevin

Straightforward.

- First class: USD 0. An opening lesson free of charge, including a level check.
- Group tuition: USD 100 a month. A month in a same-level group of five to ten, roughly eight live lessons.
- Private tuition: USD 150 a month. A month of one-to-one lessons at the same pace.

Families outside India all pay the same fee in US dollars, one month at a time. The free lesson carries no obligation, charges begin only with the course, and the pricing page explains holidays, missed lessons and changing between group and private teaching.

## Glasnevin coding class questions

### Is there a Modern Age Coders centre in Glasnevin?

No. We teach live on video and have no premises in Ireland. The learner needs a computer, a microphone and sound, and a reliable internet connection. The phone number on this page belongs to India.

### What is the weather records project?

The learner takes Met Éireann's daily file for the Glasnevin station, repairs 8,000 duplicated dates, keeps the 58 complete years and counts records: the yearly average set 10 against the 4.65 chance would give, and 100,000 shuffles matched that only 570 times.

### Does the project prove why it is warmer?

No. It shows how unusual the run of warm records is for one station. Explaining the cause takes much more than one station's file, and the page does not attempt it.

### Why is no population shown for Glasnevin?

District pages here use only what named bodies publish about the place itself, in this case Met Éireann, the OPW, Dublin Cemeteries Trust and DCU, and none of them states a head count.

### At what times are lessons held?

Weekdays from after school into the evening, and daytime at weekends. Lesson times are given in Irish time. Our teachers are in India, ahead of Glasnevin by four and a half hours in summer and by five and a half in winter, and we only offer hours that make sense on both sides.

### Do you teach adults?

Yes, anyone up to sixty-seven, beginners included. After the free lesson an adult can pick a group at their level or one-to-one teaching.

### Will my child be grouped with other Glasnevin children?

Only by chance, since groups are formed by level, so classmates can be from anywhere in Ireland or abroad.

### What do coding classes in Glasnevin cost?

The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before anything is paid.

### How big is a group?

Five to ten learners, matched by level, pace and goals rather than by age or where they live. If no group runs at a workable time, lessons are one to one.

## Around Glasnevin

Next door, [Drumcondra](/coding-classes-in-drumcondra-dublin) has a project on a year of noise readings. The [Dublin](/best-coding-class-in-dublin) page covers the city, and the [Ireland hub](/coding-classes-in-ireland) collects every county, town and district.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-glasnevin-dublin](https://learn.modernagecoders.com/coding-classes-in-glasnevin-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
