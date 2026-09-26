---
title: "Coding Classes in Worcestershire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Worcestershire, from Worcester, Redditch and Kidderminster to Bromsgrove, Malvern, Evesham and Droitwich Spa."
canonical: https://learn.modernagecoders.com/coding-classes-in-worcestershire
source: src/pages/coding-classes-in-worcestershire.html
---
> Worcestershire is governed by a county council over six district councils, and our total of their six 2021 Census counts is 603,676 people. Worcester is the largest town, then Redditch, Kidderminster, Bromsgrove and Great Malvern. We teach every class live over video from India, and each learner joins the group that fits their level rather than their age. Coding, Python, computer science and maths are open to learners from 6 to 67, taught privately or in groups of five to ten. The Worcestershire project comes from the Museum of Royal Worcester and the marks on the bottom of its porcelain. Lesson one is free; from lesson two it is USD 100 monthly for a group or USD 150 monthly for one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / Worcestershire

Worcestershire / Live online

# Coding classes in Worcestershire

**What are the best coding classes in Worcestershire?** Worcestershire is governed by a county council over six district councils, and our total of their six 2021 Census counts is 603,676 people. Worcester is the largest town, then Redditch, Kidderminster, Bromsgrove and Great Malvern. We teach every class live over video from India, and each learner joins the group that fits their level rather than their age. Coding, Python, computer science and maths are open to learners from 6 to 67, taught privately or in groups of five to ten. The Worcestershire project comes from the Museum of Royal Worcester and the marks on the bottom of its porcelain. Lesson one is free; from lesson two it is USD 100 monthly for a group or USD 150 monthly for one-to-one.

Turn over a piece of Royal Worcester porcelain and the factory mark often tells you when it was made, in a code that changed many times. The Museum of Royal Worcester explains it: letters for the years from 1867, then one dot for 1892, two for 1893, and so on until 24 dots crowd round the mark in 1915, then a star, new shapes, more dots, letters again, and finally short numbers. It is a real, working system for writing numbers, invented piece by piece by people solving a practical problem. This page's project turns it into a Python decoder and uses it to explore the ideas every programmer meets when choosing how to represent information.

Facts last verified 26 September 2026. Teaching is online; no Worcestershire branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Worcestershire learners begin

A six-year-old in Evesham who loves codes and secret messages, a Year 8 in Bromsgrove learning binary, a Year 10 in Worcester taking GCSE Computer Science, and an adult in Kidderminster starting Python. Each begins with a free lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 12): Block coding from a first Scratch game onwards, with codes, patterns and secret messages.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Maths learned by coding it, including number bases, binary and patterns in sequences.
- [GCSE Computer Science](/courses/gcse-computer-science-course) (GCSE years): GCSE Computer Science for AQA, OCR and Edexcel, with the Python and problem solving the exams test.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from zero for adults, from first lines to projects with real data.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 603,676 people across six districts

District counts are 2021 Census figures on Nomis; the total is our own addition. Towns are ONS built-up areas, which we checked against our sum of census output areas.

**Worcestershire built-up areas with at least 8,000 residents, 2021 Census**

| Town | Residents |
|---|---|
| Worcester | 105,465 |
| Redditch | 81,635 |
| Kidderminster | 57,560 |
| Bromsgrove | 34,755 |
| Great Malvern | 33,185 |
| Evesham | 28,250 |
| Droitwich Spa | 26,420 |
| Stourport-on-Severn | 20,305 |
| Catshill | 10,170 |
| Bewdley | 8,280 |
| Pershore | 8,210 |

Wychavon is the largest district at 132,492 and Malvern Hills the smallest at 79,486. The ONS Worcester area reaches from the city into Wychavon, and Great Malvern has a few hundred residents over the county edge. More strikingly, by our count about 10,000 people in Bromsgrove district live on the edge of the Birmingham built-up area, which is why Birmingham is left out of the table even though part of it lies in Worcestershire. Holiday dates are fixed by Worcestershire County Council and by academy trusts. We have not read them, so families simply tell us theirs.

### Worcester has its own page

Our [Worcester](/best-coding-class-in-worcester) page is about finding the shortest route. [Herefordshire](/coding-classes-in-herefordshire) lies over the Malverns to the west.

## Decoding a century of porcelain marks

Letters with gaps, dots that pile up, stars that reset the count, and two numbers that differ only in length.

The learner copies the museum's rules into Python as a dictionary from year to mark, then builds the reverse dictionary from mark to year. The first test is whether any two years share a mark; across the 100 years the page codes, from 1867 to 1941, 1949 to 1956 and 1990 to 2006, none do. The second test is to look for surprises, and there are several.

**What the museum's date-mark rules teach about representing numbers**

| Years | Mark | The coding idea |
|---|---|---|
| 1867 to 1890 | A letter: A, B, C, D, E, G ... Z, then O, then a | A lookup table: F, J and Q are never used, and O comes last, so you cannot just count letters |
| 1892 to 1915 | One dot for 1892, up to 24 dots for 1915 | Unary counting: simple, but it needs one mark per year and 300 dots over 24 years |
| 1916 to 1927 | A star, then a star with 1 to 11 dots | A reset, like carrying into a new column: the star stands for many dots at once |
| 1928 to 1941 | New shapes, then three circles with 1 to 9 dots | Another reset with a new symbol when the dots grow too many |
| 1942 to 1948 | No date code | A gap: some years simply cannot be decoded |
| 1990 to 2006 | 39-0 for 1990, 39-00 for 2000 | Length carries meaning: 39-1 is 1991 and 39-01 is 2001 |

The dots are the most instructive part. Adding a dot each year is easy for a worker to apply and to check, but it grows without limit: by 1915 the mark carried 24 dots. A binary pattern, where each of five fixed positions is either dotted or blank, could show any year up to 31 with at most five dots, and would have used 54 dots in total over those 24 years instead of 300. The factory's answer was different but clever: when the dots grew too many, it introduced a new symbol and started counting again. That is the same idea as a digit carrying into the next column.

The last row is a small lesson for the computer age. After 1990 a single digit gave the year within the decade, so 1991 and 2001 would both be "1". The solution was to write 2001 as "01": the number of digits carries the information. Programmers who stored years as just two digits met a similar kind of problem around the year 2000.

### Ages 7 to 11

Invent a dot code for your own birthdays, then find out how many dots you would need for your age next year and in ten years.

### Ages 11 to 15

Write the year-to-mark and mark-to-year dictionaries in Python and test that every year decodes back to itself.

### Ages 15 and up

Compare unary, the factory's resets and binary for the same years, count symbols, and design a better mark that stays short forever.

### The museum's rules and our code

Every rule and date on this page comes from the Museum of Royal Worcester's factory marks page, which also notes that some later marks show the year a design was introduced. The decoder, the counts and the binary comparison are ours. Anyone dating a real piece should use the museum's guidance and experts, not our table.

## Porcelain from 1751, and a mark full of numbers

The Worcestershire link, from the museum on the old factory site.

**Royal Worcester, as the Museum of Royal Worcester describes it**

| Point | The museum says |
|---|---|
| Founding | The Worcester Porcelain Company was founded in 1751 by Dr John Wall. |
| The number 51 | The standard printed mark has 51 in the centre, for 1751. |
| The company | The Worcester Royal Porcelain Company was formed in 1862. |
| Porcelain in the city | Made in Worcester from 1751 to 2008. |
| The museum | Severn Street, Worcester WR1 2ND. |

Choosing how to represent information is one of the first decisions in any program: numbers as text or as binary, dates in one format or another, colours as names or as codes. The Royal Worcester marks show real people making those choices over more than a century, meeting the same problems of growth, gaps and ambiguity that programmers meet today. A Worcestershire student who has decoded them has learned why representation matters before writing a single complicated line.

Modern Age Coders has no link with the Museum of Royal Worcester, Worcestershire County Council or any company that made or sells Royal Worcester. The museum's rules are its own; our decoder and any mistakes are ours.

**Nearby pages** [Worcester](/best-coding-class-in-worcester) has its own page; [Herefordshire](/coding-classes-in-herefordshire) is west, [Gloucestershire](/coding-classes-in-gloucestershire) south, [Warwickshire](/coding-classes-in-warwickshire) east and the [West Midlands](/coding-classes-in-the-west-midlands) north.

## From secret codes to data representation

The free lesson settles the first step. Age suggests; skill decides.

- **Ages 6 to 10: Codes and patterns** Block coding with secret codes, repeating patterns and simple counting games. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 10 to 13: Binary and bases** Python and maths with binary numbers, number bases and dictionaries. [Maths Through Coding](/courses/maths-through-coding), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Ages 13 to 18: How computers store things** GCSE Computer Science topics such as data representation, alongside full Python. [GCSE Computer Science](/courses/gcse-computer-science-course), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Data done right** Python and data skills for adults, including dates, formats and clean records. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI can date a teacup mark. Would it notice the years with no code at all?

Real encodings have gaps and exceptions, and confident answers can skip over them.

Describe a Royal Worcester mark to an assistant and it may give you a year straight away. The museum's rules show why that can go wrong: letters skip F, J and Q, O comes out of order, 1942 to 1948 have no code at all, and later marks may show a design's launch year rather than when the piece was made. A tidy-sounding answer can hide every one of those traps.

A Worcestershire student who has coded the rules and tested every year knows to ask what the encoding allows and what it cannot tell you. The same question matters for AI systems themselves, which turn words, images and sounds into numbers and can lose information along the way.

So a young person in Worcestershire should learn to code in 2026 to understand how information is represented before trusting what a machine reads from it. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## From the Malverns to the Vale of Evesham, online

Worcestershire mixes towns and wide farmland, and a weekly class in the right place and at the right level can be a long way off. Online lessons solve it.

- **At home, anywhere** A house in Droitwich, a flat in Redditch, a farmhouse near Pershore. The learner codes while the teacher follows the shared screen.
- **The school words** Whether it is a Key Stage 3 project or a GCSE practice paper, teachers use the terms Worcestershire pupils hear at school, in English.
- **Start free** The first lesson is real teaching, not a sales call, and ends with a plain suggestion of level and course. You give no card details.
- **A group at your level** Five to ten learners at the same stage, wherever in the world they join from.
- **Breaks for holidays** Two lessons a week is usual, with pauses for your school's own holidays.
- **UK time, fixed** We give your slot in UK time and keep it steady through the clock changes; the teacher, several hours ahead on India time, adapts.

**Why groups follow level** Five learners at one stage free on the same evening are hard to find in any one Worcestershire town. Level-based groups let a learner in Bewdley or Catshill join a class that fits.

## Fees in Worcestershire

Stourport or Malvern, the fee is identical, and it is the fee in every country we teach except India.

- First class: USD 0. A complete lesson with real work, then a suggested level and course.
- Group tuition: USD 100 a month. Around eight lessons a month with five to ten learners at one level.
- Private tuition: USD 150 a month. Around eight lessons a month, one-to-one.

All fees are in US dollars, with no pound prices. There is no charge until the free lesson has agreed a course and a weekly time; the pricing page explains pauses, missed lessons and changing between group and private.

## Worcestershire questions

### How many people live in Worcestershire?

603,676 usual residents in the 2021 Census. The six district figures are the ONS's, published on Nomis, and the total is our addition.

### What are the largest towns in Worcestershire?

By ONS built-up area: Worcester 105,465, Redditch 81,635, Kidderminster 57,560, Bromsgrove 34,755 and Great Malvern 33,185.

### What is the Royal Worcester project?

Learners turn the Museum of Royal Worcester's date-mark rules into a Python decoder, check that 100 coded years never clash, and study the letters, dots, stars and digits as ways of representing numbers.

### How were Royal Worcester pieces dated?

According to the museum, letters marked the years from 1867, dots were added one per year from 1892 up to 24 in 1915, then stars, shapes and more dots followed, with no date code from 1942 to 1948 and numeric suffixes from 1990.

### Why compare the dots with binary?

Adding a dot each year is unary counting and grows without limit. Five fixed positions used as binary could show any year up to 31 with at most five dots, which shows why positional systems are so efficient.

### Is there a Worcestershire classroom?

No. Classes run live on video, so a learner in Tenbury is as near to class as one in Worcester.

### What ages do you teach?

From 6 to 67. Young children start with blocks, Python usually begins around eight to ten, teenagers take GCSE Computer Science and advanced Python, and adults learn Python and data. Where each person starts is agreed in the free lesson.

### Do you teach GCSE Computer Science?

Yes, for AQA, OCR and Edexcel, including data representation and Python. We support learning; we do not promise grades.

### How much are lessons?

The first lesson is free. Once you decide to carry on, you pay USD 100 per month for group lessons or USD 150 per month for private ones; joining is free.

### Do you pause for Worcestershire school holidays?

Yes, if you wish. Worcestershire County Council and academy trusts publish their dates; share yours and we plan around them.

## Pages near Worcestershire

See [Worcester](/best-coding-class-in-worcester), then [Herefordshire](/coding-classes-in-herefordshire), [Gloucestershire](/coding-classes-in-gloucestershire), [Warwickshire](/coding-classes-in-warwickshire) and the [West Midlands](/coding-classes-in-the-west-midlands). The [UK hub](/coding-classes-in-united-kingdom) has every other area.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-worcestershire](https://learn.modernagecoders.com/coding-classes-in-worcestershire#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
