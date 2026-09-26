---
title: "Coding Classes in Moray | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Moray, from Elgin, Forres and Buckie to Lossiemouth, Keith, Fochabers, Burghead and Dufftown."
canonical: https://learn.modernagecoders.com/coding-classes-in-moray
source: src/pages/coding-classes-in-moray.html
---
> Moray had about 93,400 residents in roughly 43,100 households at the 2022 census, spread thinly at 41.7 people per square kilometre. Elgin is the main town, with Forres, Buckie and Lossiemouth next and smaller places such as Keith, Fochabers and Dufftown. Our teachers in India give every lesson live over video, and a free first session places each learner, from P1 to S6 or beyond school. Anyone from 6 to 67 can study coding, Python or maths here, either one-to-one or in a group of five to ten. The Moray project begins with a lighthouse inscription near Lossiemouth. Following the free lesson, groups cost USD 100 a month and one-to-one lessons USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Moray

Moray / Live online

# Coding classes in Moray

**What are the best coding classes in Moray?** Moray had about 93,400 residents in roughly 43,100 households at the 2022 census, spread thinly at 41.7 people per square kilometre. Elgin is the main town, with Forres, Buckie and Lossiemouth next and smaller places such as Keith, Fochabers and Dufftown. Our teachers in India give every lesson live over video, and a free first session places each learner, from P1 to S6 or beyond school. Anyone from 6 to 67 can study coding, Python or maths here, either one-to-one or in a group of five to ten. The Moray project begins with a lighthouse inscription near Lossiemouth. Following the free lesson, groups cost USD 100 a month and one-to-one lessons USD 150 a month.

Near Lossiemouth, Historic Environment Scotland lists the Covesea Skerries Lighthouse at Category A: a tall circular tower by the engineer Alan Stevenson, dated 1844, with Egyptian-style keepers' cottages. The listing transcribes the inscription over the entrance, which ends with a date in Roman numerals, and the characters it gives are MDLCC XL1V. That is not a standard Roman numeral, and it contains a digit 1 where a letter I would be expected. We have not seen the stone, so we cannot say what is carved there. But the transcription makes a perfect test for a program. Feed it to a careless parser and it cheerfully prints a date almost 150 years out. This page's project builds a Roman numeral reader in Python that knows when to refuse.

Facts last verified 26 September 2026. Teaching is online; no Moray branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Common first courses in Moray

A six-year-old in Buckie, a P7 in Forres who likes puzzles, an S3 in Elgin ready for proper Python, and an adult in Lossiemouth cleaning up data at work. These are their usual starting courses, each after a free lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 12): Block coding with number puzzles, codes and games that check the player's answers.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 13): A first typed language, including programs that read and check what people type.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 12 to 18): Complete Python for teenagers, with strings, validation and testing done properly.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from zero for adults, including cleaning and checking messy real-world data.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## About 93,400 people across Moray

Totals for the council come from the rounded first results of the 2022 census, published by National Records of Scotland. Town sizes are NRS estimates for mid-2020.

**Moray localities above 1,500 people, NRS mid-2020 estimates**

| Locality | Residents | Locality | Residents |
|---|---|---|---|
| Elgin | 25,040 | Burghead | 1,840 |
| Forres | 9,900 | Lhanbryde | 1,830 |
| Buckie | 9,010 | Fochabers | 1,770 |
| Lossiemouth | 6,840 | Hopeman | 1,710 |
| Keith | 4,610 | Dufftown | 1,590 |

At 41.7 residents per square kilometre, Moray is more thinly settled than Scotland overall (69.8). Adding the census age bands ourselves, we find 15.5 per cent of Moray's people are under 15, close to the Scottish 15.3, and 22.9 per cent are 65 or older, above Scotland's 20.1. Moray Council sets its own school terms; we have not read them and fit breaks around what each family tells us.

### Related pages and exams

See [Aberdeenshire](/coding-classes-in-aberdeenshire) and [the Highlands](/coding-classes-in-highland). For exam support: [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help).

## A parser that knows when to say no

Seven letters, a handful of rules, and a date that should not come out as 1695.

Roman numerals use seven letters, I, V, X, L, C, D and M, worth 1, 5, 10, 50, 100, 500 and 1,000. Most of the time you add them up, but a smaller value placed before a larger one is subtracted, as in IV for 4. The learner's first program does exactly that and nothing more: it skips any character it does not recognise, then walks along the letters, adding or subtracting. It is short, and it is dangerously polite, because it never refuses an input.

**Our parsers on the listing's transcription and friends, 26 September 2026**

| Input | Naive parser says | Strict validator says |
|---|---|---|
| MDLCC XL1V (as transcribed) | 1695 | Not a valid numeral |
| MDLCCXLIV (1 read as I) | 1694 | Not a valid numeral |
| MDCCCXLIV (1844 written the standard way) | 1844 | Valid |
| MDCCCXLIIII (four I's, as on some clock faces) | 1844 | Not standard |
| IM | 999 | Not a valid numeral |
| VX | 5 | Not a valid numeral |

The naive parser turns the transcription into 1695, or 1694 if the 1 is read as an I, even though the listing itself says the lighthouse is dated 1844. The problem is the L before the C, which it treats as "subtract 50". Standard Roman numerals never put L before C, and a strict validator knows that. The learner writes one as a pattern: up to three M's, then a hundreds part, a tens part and a units part, each from a short list of allowed forms. Anything else is rejected with a clear message instead of a confident wrong number.

Then the checks. Converting every number from 1 to 3,999 into Roman numerals and back gives zero mismatches, so the two directions agree. Of all 19,607 possible strings of one to five Roman letters, only 735 are valid numerals, fewer than 4 per cent, yet the naive parser gives a number for every one of them. It even reads IV, IIII and the nonsense IVX as 4. The longest standard numeral below 4,000 is 3,888, MMMDCCCLXXXVIII, fifteen letters.

### Ages 8 to 11

Build a Scratch quiz that converts numbers to Roman numerals and back, and find inputs that trick it.

### Ages 11 to 15

Write the add-and-subtract parser in Python, then list five inputs it gets wrong and explain why.

### Ages 15 and up

Write the strict validator as a regular expression, test every number to 3,999, and count how many random strings pass.

### About the inscription

We are using the listing's typed transcription as test data. We have not seen the carved stone, and the characters on it may well differ from the transcription. Nothing here says the inscription itself is wrong.

## A Stevenson lighthouse from 1844

What Historic Environment Scotland records about it.

**Covesea Skerries Lighthouse, Keepers' Cottages and Steading, HES listing LB37605**

| Listing detail | What it records |
|---|---|
| Category | A, listed in 1971 |
| Engineer and date | Alan Stevenson, engineer; James Smith, contractor; dated 1844 |
| Tower | Tall circular 7-storey lighthouse tower |
| Cottages | A pair of single-storey Egyptian-style keepers' cottages |
| Inscription | Names the engineer, contractor and superintendent William Middlemiss, ending MDLCC XL1V as transcribed |
| Today | The light is automated; the original light is in Lossiemouth Fisheries Museum |

Every form on the internet faces the same question as the Roman numeral parser: accept what was typed, or refuse it with a helpful message. Dates, postcodes, phone numbers and prices all arrive messy, and code that silently guesses creates quiet errors that surface months later. A Moray pupil who has watched a parser invent the date 1695 will write validation first from now on.

We have no link with Historic Environment Scotland or Moray Council. The listing and its transcription are theirs; the parsers, tests and any mistakes are ours.

## From number puzzles to validators

Stages are guides only; the free lesson settles the starting point.

- **P1 to P4: Puzzles and codes** Block coding with number games, secret codes and answer checking. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Reading input** Typed Python that reads what users type and handles mistakes. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **S3 to S6: Strings and testing** Parsing, patterns and systematic testing beside National 5, Higher and Advanced Higher Computing Science. [Python for Teens](/courses/python-complete-masterclass-teens), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **Adults: Clean data** Python for adults who need to check and tidy real data. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI will read almost anything. Will it tell you when it should not?

Always producing an answer is not the same as being right.

Give a chatbot MDLCC XL1V and ask for the year. Some answers will correct it to 1844 without saying so, others will compute something else, and few will explain that the string is not a valid numeral. Either way the uncertainty disappears from view.

A Moray learner who has written a strict validator knows that refusing bad input, and saying why, is part of a correct program. It is the same judgement needed to check anything an AI returns.

That is why a Moray teenager should still learn to code in 2026: to build programs that know the difference between an answer and a guess. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Lessons from Elgin to Dufftown, online

With towns spread across the county, online classes save the evening journey.

- **Typing, not watching** Learners write every line themselves while the teacher follows the shared screen.
- **Scottish stages** We work in P6, S3, National 5, Higher and Advanced Higher, as Moray schools do, in English.
- **A free first session** A real lesson with no charge, followed by a straight recommendation.
- **Stage-matched groups** Five to ten learners at one stage, often from several countries.
- **Breaks for holidays** Twice a week in term; nothing during school holidays.
- **Fixed in UK time** Your slot keeps its UK time when the clocks change; teachers in India time adapt instead.

**Why not group by town?** Five learners at one stage, free at the same hour, rarely live in one Moray town. Grouping by stage across a wider pool finds a real class for a pupil in Hopeman or Lhanbryde.

## Fees in Moray

Buckie or Burghead, the fee is identical, and the same everywhere we teach outside India.

- First class: USD 0. A complete free lesson, then a clear suggestion.
- Group tuition: USD 100 a month. About eight lessons a month with five to ten learners at one stage.
- Private tuition: USD 150 a month. About eight lessons a month with a teacher of your own.

Our prices are in US dollars, and we have no sterling price list. Charges begin only once the free lesson has fixed a course and a weekly time; the pricing page details holidays, missed lessons and moving between formats.

## Moray questions

### How many people live in Moray?

The 2022 census counted about 93,400 residents in roughly 43,100 households, rounded by NRS to the nearest hundred.

### What are the main towns in Moray?

NRS mid-2020 estimates give Elgin 25,040, Forres 9,900, Buckie 9,010, Lossiemouth 6,840 and Keith 4,610.

### What is the Covesea Skerries project?

Learners write a Roman numeral parser in Python, test it on the listing's transcription MDLCC XL1V, see a naive parser output 1695, and build a strict validator that rejects it.

### What is 1844 in Roman numerals?

In the standard form, MDCCCXLIV: M for 1,000, DCCC for 800, XL for 40 and IV for 4.

### How old is Covesea Skerries Lighthouse?

Historic Environment Scotland says it is dated 1844, by the engineer Alan Stevenson, and lists it at Category A.

### Do lessons happen in Elgin?

Lessons are online, so learners join from home anywhere in Moray.

### Do you teach Higher Computing Science?

Yes, alongside National 5 Computing Science and maths at both levels. We teach understanding and make no promises about grades.

### Which ages can learn?

Ages 6 to 67. Young children start with blocks, secondary pupils with Python and exam work, and adults wherever they need to.

### What does it cost?

The first lesson is free; afterwards USD 100 a month for a group or USD 150 a month one-to-one.

### Are there lessons in the school holidays?

No, we pause. Tell us your school's holiday dates and we work around them.

## Beyond Moray

Try [Aberdeenshire](/coding-classes-in-aberdeenshire), [the Highlands](/coding-classes-in-highland) and [Inverness](/best-coding-class-in-inverness), or every council on the [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-moray](https://learn.modernagecoders.com/coding-classes-in-moray#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
