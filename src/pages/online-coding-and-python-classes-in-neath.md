---
title: "Online Coding and Python Classes in Neath | Ages 6 to 67"
description: "Online coding and Python classes for Neath, Skewen, Cimla, Llantwit and Bryn-coch: live lessons with vibe coding and AI agents for ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-neath
source: src/pages/online-coding-and-python-classes-in-neath.html
---
> At the 2021 census the ONS built-up area of Neath (Castell-nedd) held 40,730 usual residents; Neath Port Talbot county borough as a whole held 142,289. Its suburbs in the gazetteer include Cimla, Llantwit, Skewen, Penrhiwtyn, Neath Abbey and Bryn-coch. Anyone in Neath from six to 67 can learn coding, Python, AI, vibe coding or maths with us; a tutor in India teaches each lesson live on camera, either privately or to a class of five to ten who share a level. The Neath project starts from something everyone assumes is solved: putting words in alphabetical order. Welsh has its own alphabet, with letters such as ll and dd, and Python's sort does not know it. Learners write a sort key that does. Try one lesson at no cost; staying on is USD 100 a month in a class or USD 150 a month for private sessions.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Wales](/coding-and-ai-classes-in-wales) / Neath

Neath, Neath Port Talbot, Wales / Live online

# Online coding and Python classes in Neath

**Which online coding and Python classes are best for learners in Neath?** At the 2021 census the ONS built-up area of Neath (Castell-nedd) held 40,730 usual residents; Neath Port Talbot county borough as a whole held 142,289. Its suburbs in the gazetteer include Cimla, Llantwit, Skewen, Penrhiwtyn, Neath Abbey and Bryn-coch. Anyone in Neath from six to 67 can learn coding, Python, AI, vibe coding or maths with us; a tutor in India teaches each lesson live on camera, either privately or to a class of five to ten who share a level. The Neath project starts from something everyone assumes is solved: putting words in alphabetical order. Welsh has its own alphabet, with letters such as ll and dd, and Python's sort does not know it. Learners write a sort key that does. Try one lesson at no cost; staying on is USD 100 a month in a class or USD 150 a month for private sessions.

Ask Python to sort a list of names and it compares them character by character, using the number each character has inside the computer. For English that mostly works. For Welsh it does not, because ll, dd, ff, ch, rh, th, ph and ng are single letters of the Welsh alphabet with their own places in it. Street signs in Neath are bilingual, and OpenStreetMap records the Welsh form of many street names. Learners take 240 of them and find out how far the computer's idea of order is from a Welsh reader's.

Facts last verified 30 September 2026. Teaching is online; no Neath branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Coding and Python courses for Neath

Choose the one that fits the learner's age. Each starts with a free live lesson and needs no card to book.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): How to think: writing down the exact rule for putting things in order.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Vibe coding for children: a Scratch game made with AI help, then tested by the child.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Full Python for teenagers, with strings, sorting and the Neath collation project.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python from first steps to advanced work, including text handling and Unicode.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Neath, Skewen, Cimla and Bryn-coch

Census counts and gazetteer suburbs, each with a source.

**People counted in March 2021 (ONS census)**

| Place | Usual residents |
|---|---|
| Neath built-up area | 40,730 |
| Neath Port Talbot county borough | 142,289 |

The county borough is a wider area that also includes Port Talbot, Baglan and the valleys to the north, so its total is a separate count, not a sum of towns. In the postcode gazetteer Cimla, Llantwit, Skewen (Sgiwen in Welsh), Penrhiwtyn, Neath Abbey and Bryn-coch are suburban areas, and for each the nearest postcode lies in the Neath built-up area; Briton Ferry falls in the neighbouring Baglan area and is left out. Schools teach the Curriculum for Wales and enter learners for WJEC GCSE and A level, so a Welsh school year is the easiest way to tell us where a learner is. Our lessons are taught in English.

### Nearby pages

See the [Neath Port Talbot page](/coding-classes-in-neath-port-talbot) and [Swansea](/best-coding-class-in-swansea). For why the thinking still matters when AI can write code, read [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Sorting Welsh street names by the Welsh alphabet

240 street names, one line of Python that gets them wrong, and a sort key that gets them right.

One query to OpenStreetMap for named roads in and around Neath returned 1,197 road sections with 678 different names. On 413 of those sections mappers had also recorded a Welsh name, giving 240 distinct Welsh street names. Heol begins 70 of them, Stryd 47, Clos 25 and Rhodfa 10. Three contain an accented letter, among them Stryd y Dŵr. The learner's first move is the obvious one, sorted(names), and the second is to ask what a Welsh reader would expect instead.

The expected order comes from the Welsh alphabet as the Unicode Common Locale Data Repository sets it out for computers: ch comes after c, dd after d, ff after f, ng after g, ll after l, ph after p, rh after r and th after t, each counting as one letter. Capital letters and accents are ignored when deciding order. In Python this becomes a key function: fold the case, strip the accents, then walk through each word taking two characters at a time whenever they form one of those letters, and turn every letter into its position in the alphabet.

**240 Welsh street names in Neath, compared with the Welsh alphabetical order, our Python run**

| Method | Names in the wrong position | Pairs in the wrong order |
|---|---|---|
| sorted() with no key | 67 | 79 |
| Lower case and accents removed | 39 | 42 |
| Welsh letters as single units | 0 | 0 |

Plain sorted() failed in three separate ways. Capitals: it puts every capital Y before every small y, so Cwrt Y Gollen lands ahead of Cwrt y Cadno. Accents: the ô in Clôs Llwyneryr has a larger character number than any plain letter, so that street drops below every Clos name. And the Welsh letters themselves, which cause most of what is left once case and accents are cleaned up (a few more come from hyphens and apostrophes, which our key treats like spaces): in Welsh, Lon Fedwen comes before Llys Andrew, because l is an earlier letter than ll, and Heol Forster comes before Heol Ffranc. Python's character-by-character order sees two letter ls and puts Llys first.

Five names contain the characters n and g together: Bryngwyn, Heol Llangatwg, Heol Longford, Stryd Whittington and Teras Rockingham. In none of them is it the Welsh letter ng. Bryngwyn joins bryn and gwyn, Llangatwg joins llan and a form of Catwg, and the other three are English names. A key that always reads ng as one letter is wrong five times here. Yet treating ng as n followed by g changes no position in the sorted list, because no two of these names differ only at that point. The learner writes that down as a lesson about testing: a bug that no current data exposes is still a bug.

### Ages 8 to 11

Cards with Welsh words: sort them English style, then Welsh style, and count the swaps.

### Ages 11 to 15

Use sorted() with key=str.lower, then explain the names it still puts in the wrong place.

### Ages 15 and up

Write the full Welsh sort key, test it on all 240 names and design a test that catches the ng problem.

### Sources and limits

Street names are from OpenStreetMap under the Open Database Licence, as mapped on 30 September 2026; some Welsh names may be missing or mistyped. The letter order is the CLDR Welsh collation. The word splits in Bryngwyn and Llangatwg are standard Welsh, and the counts are from our own code.

## What Welsh sorting teaches about AI and text

Language models, search boxes and spreadsheets all have to decide what "in order" and "the same word" mean.

**From the Neath street list to AI and software**

| In the project | In AI and coding |
|---|---|
| sorted() put 67 of 240 names out of place | A default that suits English can quietly fail other languages |
| Case and accents fixed only part of it | Clean the obvious problems, then look for the real one |
| ll and ng look alike but behave differently | Rules about text need knowledge of the language, not just the characters |
| The ng error changed nothing in this list | Passing tests may only mean the data never triggered the bug |
| CLDR already defines Welsh order | Check for an existing standard before inventing your own |

AI systems break text into pieces before they can work with it, and those pieces are often chosen from data that is mostly English. A learner who has handled ll and dd by hand understands why a model might split a Welsh word strangely or rank Welsh search results oddly. In vibe coding, where the learner asks an AI assistant for a program and then checks it, the Neath list is an excellent test: ask the assistant to "sort these alphabetically" and see which of the three failures it avoids. Agents come after that, for learners whose Python is independent, usually in the later teens or as adults, and Copilot Studio agents are one-to-one only. Read [AI agents for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

We relied on open work by OpenStreetMap mappers, the Unicode Consortium, the ONS and postcodes.io, none of whom has any tie to Modern Age Coders; the sorting code and what we conclude from it are our own.

## From sorting cards to sort keys in Python

We start from the Welsh school year and adjust after the free lesson.

- **Years 2 to 6: How to think** Ordering, grouping and stating a rule precisely. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Scratch and early Python, with an AI helper whose output is tested. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and text** Strings, Unicode and sorting, alongside WJEC GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Python and AI agents** Serious Python first, then agents that read and write text. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is collation, and why does it matter for AI and search?

Collation is the set of rules a computer uses to decide the order of words in a particular language, and it matters for AI and search because sorting, matching and ranking text all go wrong when a system applies English rules to a language such as Welsh.

Sorting 240 Welsh street names in Neath with Python's default put 67 in the wrong place, and even after removing capitals and accents 39 were still out of order, because ll and ff are single Welsh letters.

Having built the sort key, learners ask of any AI text tool: whose language rules is it following, and what does it do with mine?

A Neath teenager who can make a computer respect the Welsh alphabet has learned to question defaults, and writing code is where that habit forms. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How Neath learners are taught

Learners take part from home with a laptop or desktop and a camera. A connection that stays up matters more than a fast one.

- **Learners write the code** Tutors explain and ask; the keyboard stays with the learner the whole time.
- **Recommendation after the trial** We watch the learner work in the free lesson and only then suggest a course.
- **The first session is free** It is a proper lesson, free of charge, and we do not ask for payment details.
- **Classes of five to ten** Group members share a level, not a postcode, and come from all over the UK.
- **Two lessons weekly** Let us know the Neath Port Talbot term dates and holiday weeks are left free.
- **UK time, all year** When the clocks change, our tutor moves; your lesson time does not.

**Why live online lessons** A tutor on a live call can spot a wrong turn the moment it happens and ask about it. Drawing learners from across the UK also lets us put together groups that really are at one level.

## Fees for Neath learners

Neath families pay our normal international fees.

- First class: USD 0. A full first lesson free, closing with a course suggestion.
- Group tuition: USD 100 a month. Group lessons, roughly eight each month.
- Private tuition: USD 150 a month. One-to-one lessons, roughly eight each month.

We charge in US dollars only and do not quote pounds. The trial is never billed; payment starts once the course and a fixed weekly time have been chosen. For holidays, absences and switching format, see the pricing page.

## Neath: your questions

### How many people live in Neath?

Census 2021 found 40,730 usual residents in the Neath built-up area, and 142,289 in Neath Port Talbot county borough.

### Do you teach coding and Python in Neath?

We do, over live video, to anyone aged 6 to 67 in Skewen, Cimla, Llantwit, Neath Abbey, Bryn-coch or elsewhere in town.

### What is a sort key in Python?

A function you pass to sorted() that turns each item into the value Python should compare. For Welsh, the key turns each word into a list of Welsh alphabet positions.

### What did the Neath project find?

Python's default sort put 67 of 240 Welsh street names in the wrong position. Ignoring capitals and accents still left 39 wrong, all because of Welsh letters such as ll and ff.

### Why is Lon Fedwen before Llys Andrew in Welsh?

Because l and ll are different letters in the Welsh alphabet and l comes first. English order compares the second l with the o and puts Llys first.

### What is vibe coding?

A way of making software in which you explain the goal to an AI, take the code it offers, and then run, probe and repair it yourself. Our learners do it with enough real coding behind them to spot a bad draft.

### When can learners start on AI agents?

After they can write Python without support, which usually means older teenagers and adults. Copilot Studio agents are one-to-one only.

### Is this useful for WJEC GCSE and A level?

Yes. Both involve programming, strings and algorithms. We do not promise any grade.

### How much do lessons cost?

Nothing for the opening lesson. Continuing means USD 100 monthly as part of a class, or USD 150 monthly with your own tutor.

### Can lessons pause in the holidays?

Yes. Tell us which weeks and we will not schedule them.

## More pages in south Wales

Visit [Swansea](/best-coding-class-in-swansea), [Bridgend](/coding-classes-in-bridgend) and [Barry](/ai-and-programming-classes-in-barry), each with its own project. The [Wales page](/coding-and-ai-classes-in-wales) and the [UK hub](/coding-classes-in-united-kingdom) have the full list.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-neath](https://learn.modernagecoders.com/online-coding-and-python-classes-in-neath#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
