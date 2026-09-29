---
title: "AI and Programming Classes in Harrogate | Coding for 6 to 67"
description: "Online AI, programming, Python and vibe coding classes for Harrogate, Knaresborough, Starbeck and Bilton learners aged 6 to 67, live online. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-harrogate
source: src/pages/ai-and-programming-classes-in-harrogate.html
---
> The ONS counted 75,515 people in the Harrogate built-up area at the 2021 census and 15,785 in Knaresborough, with Starbeck, Bilton, Jennyfield and Harlow Hill among the suburbs recorded around the town. From six-year-olds to adults of 67, anyone in the district can learn AI, programming, Python, vibe coding and maths on a live video link, taught by our India-based team one-to-one or in a group of five to ten sharing a level. We teach how to think before any tool, so learners stay in charge of the AI they use. The free first lesson ends with a course recommendation. Harrogate's project tackles a question people ask phones and AI assistants every day, "is it open now?", by parsing the real opening hours recorded for the town centre. Staying on after that is USD 100 per month in a shared class, or USD 150 per month with a tutor to yourself.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Yorkshire and the Humber](/coding-and-ai-classes-in-yorkshire-and-the-humber) / Harrogate

Harrogate, North Yorkshire, England / Live online

# AI and programming classes in Harrogate

**Which are the best AI and programming classes in Harrogate?** The ONS counted 75,515 people in the Harrogate built-up area at the 2021 census and 15,785 in Knaresborough, with Starbeck, Bilton, Jennyfield and Harlow Hill among the suburbs recorded around the town. From six-year-olds to adults of 67, anyone in the district can learn AI, programming, Python, vibe coding and maths on a live video link, taught by our India-based team one-to-one or in a group of five to ten sharing a level. We teach how to think before any tool, so learners stay in charge of the AI they use. The free first lesson ends with a course recommendation. Harrogate's project tackles a question people ask phones and AI assistants every day, "is it open now?", by parsing the real opening hours recorded for the town centre. Staying on after that is USD 100 per month in a shared class, or USD 150 per month with a tutor to yourself.

Ask a phone or an AI assistant whether a café is open and, behind the scenes, a program has to read a line like "Mo-Fr 08:00-17:00; Sa,Su 09:00-17:00" and work out the answer. OpenStreetMap stores opening hours for places in central Harrogate in exactly this format, and the format has an official specification. This project uses regular expressions in Python, the standard tool for matching text patterns, to teach a program to read those lines. The first attempt looks fine on tidy examples and fails on four out of five real ones, which is precisely the lesson: real data is always messier than the examples, and software, whether written by a person or an AI, has to be tested on the real thing.

Facts last verified 29 September 2026. Teaching is online; no Harrogate branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Harrogate courses for thinking, vibe coding and AI

Four age-matched starting points, each opening with a no-cost live lesson that needs no card to reserve.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Our how-to-think programme: spotting patterns in text, rules and the exceptions to them.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games, then little apps made by describing them to AI and testing each feature.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python and web projects with AI help, including the "is it open now?" parser.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python in depth: text processing, regular expressions, data and AI agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Harrogate, Knaresborough and the surrounding villages

Published ONS census counts and the neighbourhoods recorded around the town.

**Harrogate and two other North Yorkshire built-up areas, ONS 2021 census counts**

| Built-up area | People (2021) |
|---|---|
| Harrogate | 75,515 |
| Knaresborough | 15,785 |
| Pannal | 2,530 |

We show these ONS figures as published and do not add them together. Starbeck, Bilton, Jennyfield, Harlow Hill, Oatlands and New Park are recorded as suburban areas, and Killinghall as a village, in North Yorkshire. Schools here follow the national curriculum for England; tell us the holiday weeks and we will leave them free of lessons.

### North Yorkshire, the region and our approach

More options are on [coding classes in North Yorkshire](/coding-classes-in-north-yorkshire) and [Yorkshire and the Humber](/coding-and-ai-classes-in-yorkshire-and-the-humber). Why every course starts with reasoning rather than prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Is it open now? Parsing real opening hours with regular expressions

Write a pattern, test it on the town centre's real data, then read the specification and find what you missed.

From an OpenStreetMap API download covering the middle of Harrogate, the learner extracts every shop, café, restaurant and other amenity that has an opening_hours tag: 60 places, written in 55 different ways. The first regular expression matches the obvious pattern, a day range and one time range such as "Mo-Sa 10:00-17:30". It reads just 12 of the 60. Most places are more complicated: different hours on different days, lunchtime breaks, Sundays shown separately.

The second version splits the text at semicolons into separate rules, understands day lists like "Sa,Su" and ranges like "Mo-Fr", allows more than one time range in a day, and treats "off" as closed. It also follows a rule from the official specification on the OpenStreetMap Wiki: when two rules cover the same day, the later one wins, or in the specification's words, "the earlier rule is overridden". This parser reads 54 of the 60 places.

**How much of central Harrogate's opening-hours data each approach can read, 60 places from OpenStreetMap, our Python run, 29 September 2026**

| Approach | Places read |
|---|---|
| One simple regular expression | 12 of 60 |
| Rule-by-rule parser for the common cases | 54 of 60 |
| Left over: public holidays marked PH | 2 |
| Left over: extra rules joined by a comma | 2 |
| Left over: the word "closed" | 1 |
| Left over: a time with no days given | 1 |

The six left over are not mistakes in the data. Checking the specification shows that public holidays, the word "closed" and extra rules joined by a comma are all part of the official format; the parser simply does not handle them yet. That is a lesson every programmer meets: a format is always bigger than the examples you first looked at, and the specification is the place to find out how much bigger.

Getting it wrong has a real cost. Of the 54 places the parser can read, 42 list more than one rule. A lazy program that reads only the first rule gives the wrong open-or-closed answer for 755 of the 9,072 hours in a week across those places, 8.3%. With the full parser, 17 of the 54 are open at half past four on a Sunday afternoon and 10 at eight on a Monday evening.

### Ages 8 to 11

Read opening-hours signs, write them in a shared code, and spot which ones break the code.

### Ages 11 to 15

Write a first regular expression in Python and count how many real entries it matches.

### Ages 15 and up

Build the rule parser, test "open now" across the week and extend it from the specification.

### OpenStreetMap data, our parser

Opening hours are from OpenStreetMap and its contributors under the Open Database Licence, and the format is defined on the OpenStreetMap Wiki. The parser, the counts and the open-now checks are our own work; we do not name individual businesses.

## What this teaches about vibe coding and AI agents

Passing on tidy examples proves little; passing on real data proves more.

**From Harrogate's opening hours to AI-written software**

| In the opening-hours project | When AI writes or runs code |
|---|---|
| One regex read 12 of 60 | A neat-looking answer can fail on most real inputs |
| The parser still missed 6 | Keep a list of cases the code cannot handle |
| The specification settled it | Check the official source, not just examples |
| First-rule-only was wrong 8.3% of the time | Small shortcuts create real wrong answers |
| Later rules override earlier ones | Order and precedence matter in rules |

Ask an AI assistant for a regular expression that reads opening hours and it will usually give you something like the first attempt: tidy, confident and wrong for most of the town. In our vibe coding lessons, where the learner describes a program and the AI drafts it, Harrogate learners run every draft against the real 60 entries before trusting it. AI agents that answer questions such as "is it open now?" for you depend on exactly this kind of parsing, so a wrong rule turns into a wasted journey. Learners reach agents once Python feels easy, typically late in their teens or as adults, and anything involving Copilot Studio is taught privately. You can read about that route on [the page for UK students learning to build agents](/ai-agents-course-for-students-uk), and our thinking on it in [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, the ONS and the businesses in the data are all independent of Modern Age Coders; we only used openly published records, and the parser, flaws included, is our responsibility.

## From reading signs to writing parsers

We start from the school year, then the free lesson places the learner properly.

- **Years 2 to 7: How to think** Patterns, rules and the exceptions that break them. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and small apps built with AI help and checked by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and text** Strings, regular expressions and testing alongside GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Python and agents** Text processing, data and AI agents, built properly in Python. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is a regular expression, and can AI write one for you?

It is a compact pattern for matching text, and AI can write one, but only testing shows whether it works.

In Harrogate the obvious regular expression read 12 of 60 real entries. An AI would likely have produced something similar, and it would have looked just as convincing.

Learners who have tested patterns on real data, and then checked the specification, know to ask for evidence before trusting any code, including code an AI wrote.

A Harrogate teenager who can test code against messy real data will use AI tools with real confidence, and that is a strong reason to learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Starbeck to Harlow Hill, online

Any home with a computer and broadband good enough for video can join.

- **The learner codes** Students write, prompt and run their programs themselves, while the tutor follows on screen share and asks questions.
- **Placed by ability** The free lesson shows where to begin, whatever the school year, and any exam board is noted.
- **First lesson free** No fee for lesson one, which closes with our suggestion of a course.
- **Same-stage groups** A class brings together between five and ten learners from around Britain who have reached the same point.
- **Twice weekly** Lessons stop for the school holidays.
- **Set times** Our tutors follow the UK clock changes, so your lesson hour does not move.

**Why we teach online** Five learners at the same stage and free at the same hour are unlikely to live near each other. Online, that does not matter.

## Harrogate fees

Harrogate learners pay our international rate, which applies in every country except India.

- First class: USD 0. A complete first lesson free of charge, with a course suggestion at the end.
- Group tuition: USD 100 a month. Roughly eight live small-group lessons a month.
- Private tuition: USD 150 a month. Roughly eight live one-to-one lessons a month.

Fees are charged in US dollars rather than pounds. Invoicing begins after the free lesson, once a course and a regular time are agreed; see the pricing page for holidays, missed sessions and changes of format.

## Harrogate questions

### What is the population of Harrogate?

The ONS gives 75,515 for the Harrogate built-up area at the 2021 census, and 15,785 for Knaresborough.

### Do you run AI and programming classes for Harrogate?

Yes, live online, for learners aged 6 to 67 in Harrogate, Knaresborough and the villages around them.

### What is a regular expression?

A short pattern that describes text to find or check, such as "a day range followed by a time range"; most programming languages, including Python, support them.

### What is the Harrogate project?

Learners parse the real opening hours of places in central Harrogate from OpenStreetMap, test their code against the official specification and answer "is it open now?" for every hour of the week.

### Can Harrogate learners try vibe coding?

Yes, at any age: the learner decides what to build, an AI drafts it, and the learner tests every part.

### How soon can someone start building AI agents?

As soon as they are comfortable in Python, which for most means the later teens or adulthood; Copilot Studio agent lessons are private only.

### Are lessons in person?

No, all lessons are live online.

### Is there support for GCSE or A level students?

Computer science and maths are both covered, aimed at genuine understanding rather than a promised grade.

### What are the fees?

Lesson one: nothing. Afterwards: USD 100 monthly in a class of peers, or USD 150 monthly on your own.

### Do lessons run in school holidays?

No, they pause. Send us the dates.

## More North Yorkshire and Yorkshire pages

[Ripon](/best-coding-class-in-ripon) and [York](/best-coding-class-in-york) have pages and projects of their own, and so do [Leeds](/best-coding-class-in-leeds) and [Halifax](/ai-and-programming-classes-in-halifax). The [UK hub](/coding-classes-in-united-kingdom) lists every area we cover.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-harrogate](https://learn.modernagecoders.com/ai-and-programming-classes-in-harrogate#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
