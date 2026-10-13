---
title: "Coding Classes in East Ayrshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across East Ayrshire, from Kilmarnock, Cumnock and Stewarton to Galston, Mauchline, Darvel and Auchinleck."
canonical: https://learn.modernagecoders.com/coding-classes-in-east-ayrshire
source: src/pages/coding-classes-in-east-ayrshire.html
---
> Live online coding, Python and maths classes across East Ayrshire, from Kilmarnock, Cumnock and Stewarton to Galston, Mauchline, Darvel and Auchinleck.

Skip to contentCourses for East Ayrshire

## Where East Ayrshire learners start

A P4 pupil in Stewarton who loves rhymes, an S1 in Cumnock starting Python, an S5 in Kilmarnock interested in AI and language, and an adult in Mauchline learning to program. Each starts with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding from a first Scratch game onwards, including rhyme and word games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsTyped Python for children, with games, puzzles and first steps with data and AI.See the syllabus](/courses/python-ai-kids-masterclass)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 18AI and Machine Learning for TeensPython to real machine learning for teenagers, including natural language processing.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from zero for adults, including working with text and patterns.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)East Ayrshire in figures

## About 120,300 people from Kilmarnock to the southern hills

The council figures are from the first results of the 2022 census, which the National Records of Scotland gives in hundreds. The towns are NRS locality estimates for mid-2020.

| Locality | Residents |
| --- | --- |
| Kilmarnock | 46,970 |
| Cumnock | 8,700 |
| Stewarton | 7,770 |
| Galston | 4,710 |
| Hurlford and Crookedholm | 4,400 |
| Mauchline | 3,900 |
| Darvel | 3,900 |
| Auchinleck | 3,630 |
| Drongan | 3,060 |

Kilmarnock alone holds about four in ten of the people in the council area. The density is 95.3 residents per square kilometre, above the Scottish figure of 69.8. Adding up the census age bands, we find 15.8 per cent of residents under 15 and 21.4 per cent aged 65 or more, close to Scotland's 15.3 and 20.1. Smaller places include Kilmaurs, Newmilns, Crosshouse, New Cumnock, Patna, Catrine and Dalrymple. East Ayrshire Council sets school term dates, which we have not read; we follow each family's.

### Scottish exam pages

For National 5 and Higher support, see [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help). [Glasgow](/best-coding-class-in-glasgow) is the nearest city with its own page.

The East Ayrshire project

## Teaching a program to spot the Burns stanza

Six lines, two rough tests, and a rhyme detector that stumbles over Scots.

The learner loads a Project Gutenberg collection of Burns's poems and songs, splits it at blank lines into 4,042 stanzas, and keeps the 688 that have exactly six lines. Then come two tests. The shape test counts rough syllables in each line by counting groups of vowels, and asks whether lines one, two, three and five are long, seven syllables or more, while lines four and six are short, five or fewer. The rhyme test compares the last letters of the end words and asks whether lines one, two, three and five match each other, and four matches six.

| Test | Stanzas passing |
| --- | --- |
| Six lines long | 688 |
| The Burns stanza shape (long, long, long, short, long, short) | 485 |
| Shape plus a two-letter spelling rhyme test | 142 |
| Shape plus a three-letter spelling rhyme test | 73 |

The rhyme test throws away most of the shapes, and a look at the rejects shows why it is wrong to trust it. Among the first stanzas it rejected are the verses of Poor Mailie's Elegy, true Burns stanzas every one, with end words like "prose, nose, close, remead, woes, dead". The book’s own glossary gives "remead" as remedy, and to the ear it rhymes with "dead"; to a program comparing the last two letters, "ad" and "ed" do not. Another verse ends "shape, raip, gape, dread, crape, dead": "raip" is meant to rhyme with "shape" but shares none of its final letters. A stricter three-letter test halves the matches again.

So which number is right? Probably something closer to the shape count than the rhyme count, but the honest answer is that the program cannot tell without a better idea of sound. This is the everyday trade-off of pattern recognition: a strict test misses real examples, a loose one lets in false ones, and the only way to know which you have is to look at the mistakes. Computer scientists call these recall and precision, and every search engine and spam filter balances the same two.

### Ages 8 to 11

Clap out the syllables of a Burns verse, mark the short lines, and circle the rhymes that do not look alike.

### Ages 11 to 15

Write a Python syllable counter from vowel groups and test it on lines where you already know the answer.

### Ages 15 and up

Build the full detector, hand-check a sample of passes and rejects, and estimate precision and recall.

### Whose words and whose code

The poems are Burns's, as published by Project Gutenberg, and the Kilmarnock facts come from Historic Environment Scotland. The detector, its thresholds and every count are ours, and another edition or another threshold would change the numbers.

Why Kilmarnock

## Where Burns was first printed

The East Ayrshire link, in Historic Environment Scotland's listings.

| Listing | What it records |
| --- | --- |
| LB35925, Kay Park Burns Monument | Burns's poems were first published in Kilmarnock on 31 July 1786. |
| LB35925, the monument | Designed by Robert Samson Ingram, 1878 to 1879, with a statue of Burns by W Grant Stevenson unveiled on 9 August 1879. |
| LB35925, the statue | Burns holds a pencil in his right hand and a notebook in the other. |
| LB14473, Castle Street, Mauchline | Listed as Jean Armour Burns' House and Museum, Category B. |

Recognising patterns in language is one of the oldest problems in computing and one of the most important in AI today. Every chatbot and translation tool rests on the question this project asks in miniature: how do you turn the sound and shape of words into something a program can test? An East Ayrshire student who has taught a program to spot a Burns stanza, and then studied its mistakes, understands both the power and the limits of those tools.

Modern Age Coders has no link with Historic Environment Scotland, Project Gutenberg or East Ayrshire Council. Their facts and texts are theirs; our detector and any errors are ours.

Nearby pages

[Glasgow](/best-coding-class-in-glasgow) is to the north, [Dumfries and Galloway](/coding-classes-in-dumfries-and-galloway) to the south. The [Scotland](/coding-and-ai-classes-in-scotland) page lists every council.

The path

## From rhyme games to language AI

The free lesson decides where each learner begins. Stage is a hint; skill settles it.

P1 to P4

### Words and rhymes

Block coding games with rhyming words and simple word puzzles.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Text in Python

Typed Python that splits text, counts syllables and finds patterns.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)S3 to S6

### Language and AI

Machine learning and language processing, useful alongside National 5 and Higher courses.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Text at work

Python for adults who work with documents, reports and text data.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)AI and language

## An AI can recognise a Burns stanza. Would it read Scots rhymes the way Burns meant them?

Language models handle sound better than spelling tests, but not perfectly.

A modern language model would recognise the Burns stanza far better than our simple detector, because it has learned how words sound from vast amounts of text. It can still stumble on dialect, where the same word is spelt several ways and rhymes depend on a local accent. Scots words like "raip" and "remead" are exactly the kind of case where a confident answer can be wrong.

An East Ayrshire student who has measured their own detector's mistakes knows to test any language tool on the hard cases, the dialect words, the unusual spellings, before trusting its overall score. That habit matters for anyone using AI on real language, not just textbook English.

So a young person in East Ayrshire should learn to code in 2026 to test language tools on the words that matter locally. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Day to day

## From the Irvine Valley to the Doon, from home

East Ayrshire spreads from Kilmarnock into long valleys and hills, and a weekly class at the right level can be a trek. Online lessons avoid it.

### At home, anywhere

A house in Galston, a flat in Kilmarnock, a cottage near Dalmellington. The screen is shared and the pupil does the coding.

### The Scottish system

A P6 project, an S3 option or a Higher: teachers use the same names East Ayrshire schools use, and lessons are in English.

### A lesson before paying

The first lesson is real teaching, then an honest recommendation, with no card details taken.

### Your level, your class

Fifteen to twenty learners at one stage, drawn from Scotland and much further away.

### Pauses for holidays

Two lessons a week during term, with a break whenever the school holidays come round.

### Fixed in UK time

The slot you are given stays put in UK time through spring and autumn; teachers on India time do the adjusting.

Why groups follow level

Even in Kilmarnock, five learners at the same stage free on the same evening are hard to find. Level-based groups let a pupil in Newmilns or Patna join a class that fits.

Fees

## Fees in East Ayrshire

Darvel or Drongan, the fee is the same, as it is in every country we teach apart from India.

First class**USD 0**

A full lesson of real work, then a suggested level and course.

Group tuition**USD 100**

Around eight lessons a month with fifteen to twenty learners at one level.

Private tuition**USD 150**

Around eight lessons a month, taught one-to-one.

Fees are in US dollars, never pounds. Nothing is billed until the free lesson has agreed a course and a weekly slot; the pricing page covers pauses, missed lessons and changing format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20East%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Families on Google, in their words

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

## Book a free East Ayrshire lesson

Tell us the pupil's stage or the adult's aim, plus what they enjoy. A first lesson could be a Scratch rhyme game, a Python syllable counter, or the Burns detector on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented East Ayrshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20East%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## East Ayrshire questions

The council area, the Burns project and practical details.

### How many people live in East Ayrshire?

About 120,300 usual residents in roughly 55,400 households, according to the 2022 census first results, rounded to hundreds by the National Records of Scotland.

### What are the largest towns in East Ayrshire?

By NRS mid-2020 locality estimates: Kilmarnock 46,970, Cumnock 8,700, Stewarton 7,770, Galston 4,710 and Hurlford and Crookedholm 4,400.

### What is the Burns project?

Learners write a Python detector for the six-line Burns stanza, run it on a Gutenberg collection of his poems, and find 485 stanzas with the right shape but only 142 that pass a spelling-based rhyme test, because Scots spelling is not sound.

### What is the Burns stanza?

A six-line verse form with three long lines, a short line, a long line and a short line, rhyming aaabab. Burns used it often, for example in Poor Mailie's Elegy.

### When were Burns's poems first published?

Historic Environment Scotland's listing for the Kilmarnock Burns Monument records that they were first published in Kilmarnock on 31 July 1786.

### Are there classes in East Ayrshire?

Not in person. All lessons are live online, so pupils join from home anywhere in the council area.

### Do you help with National 5 and Higher?

Yes; see our National 5 and Higher Computing Science pages. We aim for understanding and do not promise grades.

### What ages do you teach?

Six to sixty-seven: blocks for young children, Python from about P6, AI and exam courses in secondary, and Python for adults.

### How much are lessons?

The first is free. After it, a group place is USD 100 a month and private lessons USD 150 a month.

### Do you pause for East Ayrshire school holidays?

Yes. East Ayrshire Council publishes its term dates; send yours and we plan around them.

Close by

## Pages near East Ayrshire

The nearest city page is [Glasgow](/best-coding-class-in-glasgow), and [Dumfries and Galloway](/coding-classes-in-dumfries-and-galloway) lies south. Every council is on our [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20East%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-east-ayrshire*
