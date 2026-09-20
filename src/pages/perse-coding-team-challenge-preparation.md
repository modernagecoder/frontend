---
title: "Perse Coding Team Challenge Preparation | PCTC Rounds 1 and 2"
description: "Preparing for the Perse Coding Team Challenge: pairs on one computer for 40 minutes, teams of three for 60, six languages, and hidden test cases."
canonical: https://learn.modernagecoders.com/perse-coding-team-challenge-preparation
source: src/pages/perse-coding-team-challenge-preparation.html
---
> The Perse Coding Team Challenge runs from The Perse School and is "open to UK pupils up to Year 11 (S4 in Scotland) and is free to enter". Round 1 falls between 25 January and 5 February 2027 and is sat in "pairs (or solo, if necessary) sharing one computer" for "40 minutes". Round 2 runs from 1 to 12 March 2027 in "teams of up to three", with "a maximum of two Years 11 students allowed per team", for "60 minutes", across a four-level format from basic text and number processing up to algorithmic complexity, where "every question is worth an equal ten points each". A Sixth Form Gold Rush follows from 15 to 19 March 2027: six questions from Round 2 material, solo, in 50 minutes. Teams may code in "Python, C++, C#, Java, JavaScript and Visual Basic.Net" and may bring up to 20 A4 sides of code snippets. We teach the programming, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Perse Coding Team Challenge

United Kingdom · Up to Year 11 · January to March 2027

# Perse Coding Team Challenge preparation

Two pupils, one computer, forty minutes. That is the first round of the Perse Coding Team Challenge, and the shared keyboard is not a limitation the organisers apologise for: it is the competition. A pair who both type produce half a program each; a pair who talk produce one that works. Round two stretches to teams of three and an hour, and the questions climb through four levels from basic text handling to genuine algorithmic complexity. The whole thing is free, it is open to any UK pupil up to Year 11, and it is marked by a machine that will tell a team how many hidden tests they failed without ever telling them which.

At a glance: Organiser: The Perse School; For: UK pupils up to Year 11, S4 in Scotland; Cost: Free to enter; Round 1: Pairs, one computer, 40 minutes; Round 2: Teams of three, 60 minutes; Levels: Four, from text handling to complexity; Languages: Six, including Python; Marking: Automatic, on hidden tests. Rated 4.9 across 547 Google reviews.

## Three courses for a coding team

The level a pupil should work at is set by what they can debug alone, not by their year group.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): For Years 6 to 8: a first typed language, taught until a program can be read back before it runs.
- [Python from start to finish](/courses/python-complete-masterclass-teens): The main route: strings, lists, loops and functions until they are automatic under a clock.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): For the Level 3 and Level 4 questions, where a working answer is not yet a fast one.

## Forty minutes in pairs, then an hour in threes

Facts read at the organiser's own pages on 20 September 2026.

**The Perse Coding Team Challenge as the organiser describes it**

|  | Round 1 | Round 2 | Sixth Form Gold Rush |
|---|---|---|---|
| 2027 dates | 25 January to 5 February | 1 to 12 March | 15 to 19 March |
| Who sits it | "pairs (or solo, if necessary) sharing one computer" | "teams of up to three", with "a maximum of two Years 11 students allowed per team" | Solo, for older students |
| Length | "40 minutes" | "60 minutes" | "50 minutes" |
| Questions | Navigators: seven questions at three points each. Pathfinders: questions 1 to 5 at three points, 6 to 10 at five | A four-level format, and "every question is worth an equal ten points each" | "six questions selected from Round 2 material" |
| Levels | Two tracks by experience | Level 1 basic text and number processing, up to Level 4 algorithmic complexity | Drawn from Round 2 |
| Prize eligibility | UK pupils up to Year 11, S4 in Scotland | The same | Certificates |

The two tracks in round one matter more than they look. Navigators and Pathfinders are not age bands; they are experience bands, and a school entering a Year 10 pupil who started Python in September should think hard before putting them in the harder track. The competition is free, so there is no cost to entering a pupil at the level they can actually work at.

International schools may take part for certificates but cannot compete for prizes, which is worth knowing before a family abroad gets their hopes up.

Round two's four levels are the useful part of the design. Level 1 is basic text and number processing and Level 4 is genuine algorithmic complexity, with every question worth the same ten points. A team that can reliably finish the lower levels scores more than one that gambles on the top level and runs out of time.

That equal scoring is a strategy in itself. In a competition where all questions are worth the same, the right order is easiest first, always, and a team that has agreed that in advance does not argue about it at minute forty.

Sources: [Perse Coding Team Challenge](https://pctc.perse.co.uk/) and its [competition information](https://pctc.perse.co.uk/coding-competition/), read 20 September 2026. Modern Age Coders is not connected with The Perse School or the challenge.

## You are told that you failed, not why

The organiser marks automatically and gives "feedback regarding the number of test cases passed or failed", while "the test cases themselves are not shown". That one rule decides how a team should work.

Imagine a question asking for **the second largest number in a list**. In Python the obvious answer is one line: sort the list and take the second from the end. A team writes it in fifteen seconds, submits, and is told that it passed four of seven tests. Now what? They cannot see the three that failed. They can guess, or they can have a checklist.

**Our run of 20 September 2026: the one-line answer against a checklist written from the question alone**

| The case | The list | What the one-liner does |
|---|---|---|
| The ordinary case | 3, 9, 4, 1 | Returns 4, correct |
| Already in order | 1, 2, 3 | Returns 2, correct |
| All negative | &minus;5, &minus;2, &minus;9 | Returns &minus;5, correct |
| Two equal at the top | 9, 9, 4 | Returns 9: the largest again. Is that what the question wanted? |
| Every value the same | 7, 7, 7 | Returns 7, for the same reason |
| One item | 4 | Crashes |
| No items | empty | Crashes |

### Three found in a minute

Two crashes and one genuine ambiguity, all discovered before submitting anything, by a checklist that took less time to run than one failed submission.

### The checklist itself

Empty, one item, everything the same, duplicates at the interesting end, negatives, zero, and the largest size the question allows. Seven lines, and they apply to almost every task in a contest like this.

### The ambiguity is the lesson

Is the second largest of 9, 9, 4 equal to 9 or to 4? The question decides, the judge has decided, and a team that notices the ambiguity can read the wording again instead of guessing.

Hidden tests feel unfair to pupils and they are the honest version of programming. Nobody who writes software gets to see the inputs their program will meet, and the profession's answer is not better guessing: it is to invent the awkward cases yourself before anyone else finds them.

For a forty-minute round, the practical rule is that a checklist run costs about thirty seconds and a failed submission costs a minute of confusion. The arithmetic favours the checklist every time.

It also changes how a pair should split the work. One types, one reads the question again and works out what the awkward inputs would be. That is a genuine division of labour rather than a polite way of taking turns.

A pupil who enjoys this side of programming should look at the [British Informatics Olympiad](/british-informatics-olympiad-preparation), where the tests are hidden too and the programs get considerably longer.

The task, the checklist and the run are ours, written and executed on 20 September 2026. No Perse Coding Team Challenge question is reproduced; the organiser publishes its own past papers and solutions.

## You may bring notes, so bring the right ones

The organiser allows "up to 20 A4 sides (10 double-sided pages) of printed or digital code snippets". Most teams either ignore that or fill it with the wrong thing.

**What belongs in twenty sides of notes, and what does not**

| Worth the space | Why | Not worth it |
|---|---|---|
| Reading input and printing output in your language | Every question begins and ends with it, and it is the commonest thing to forget under pressure | Long tutorials on syntax already known |
| String handling: split, join, slice, case | Level 1 and 2 questions are mostly text manipulation | Whole language reference pages |
| Sorting with a custom key, and reversing | Appears constantly and is easy to get subtly wrong | Theory about sorting algorithms |
| A working loop template with a counter | Blanking on an off-by-one costs more minutes than anything else | Code nobody on the team has actually run |
| The edge-case checklist | It is the highest-value page in the pack and nobody thinks to include it | Anything copied without being understood |

The rule the organiser sets, code snippets readable at normal zoom, quietly tells a team what the notes are for. They are a personal library, not a textbook, and the useful version is built during practice by writing down whatever the team had to look up.

Six languages are permitted: Python, C++, C#, Java, JavaScript and Visual Basic.Net. A team should pick the one everybody in it can debug, not the one that sounds most serious. In a forty-minute round, familiarity beats power comfortably.

It is worth remembering that submissions can be repeated and the highest-scoring one counts, so a team that fixes a bug and resubmits loses nothing except time. That makes the checklist even more valuable: it converts a wasted submission into a fixed one.

And the whole competition is free, which is unusual enough to say plainly. A school needs a room, some computers and a teacher willing to register, and nothing else.

## Four rungs to a team that finishes

Level is set by what a pupil can fix alone, not by what they can write with help.

**From a first program to a checked submission**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Years 5 to 7 | 1. A program that runs | Writes and fixes twenty lines without a template |
| Years 7 to 9 | 2. Text and numbers | Splits, joins and converts without looking anything up |
| Years 9 to 10 | 3. The checklist habit | Invents awkward inputs before submitting, unprompted |
| Years 10 to 11 | 4. Complexity | Notices when a working answer will be too slow, and says so |

### If round one is close

Practise in pairs on one computer, with the non-typing pupil reading the question aloud and listing the awkward cases. That is the round.
Build the twenty sides from whatever the team actually looks up in practice, not from a template found online.

### After the challenge

The [British Informatics Olympiad](/british-informatics-olympiad-preparation) is the next step for a pupil who liked the hidden tests.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) has every other contest open to a UK pupil.

## Programming courses for a challenge team

Sorted by what a pupil can already do alone, with each syllabus a click away.

### Before typing

Ages 6 to 11

- [Scratch for kids](/courses/scratch-programming-complete-course): Loops, conditions and variables in a visual language.
- [Coding for kids, blocks to AI](/courses/kids-coding-blocks-masterclass): Games and apps, then a first look at AI.
- [Maths through coding](/courses/maths-through-coding): Programs that check whether a method works.

### The competition language

Ages 10 to 16

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, taught patiently.
- [Python from start to finish](/courses/python-complete-masterclass-teens): Strings, lists and functions until they are automatic.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For schools and teams that work in Java.

### Levels three and four

Where speed matters

- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting and how long a method takes.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Correctness under a clock, against hidden tests.
- [GCSE Computer Science](/courses/gcse-computer-science-course): Taught to the board the school uses.

### Building things

For pupils who want more than contests

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): A site with its own database, built in slices.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Models built and evaluated honestly.
- [App development](/courses/complete-app-development-masterclass-for-teens): Interfaces, events and state.

## Weekly programming, with the awkward inputs written first

Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time fixed in UK time.

- **Early weekday evening** For pupils in Years 6 to 9.
- **Later weekday evening** For Year 10 and 11 teams.
- **Weekend morning** For a full practice round, start to finish.

- **Checklist before submit** Every task starts by listing the awkward inputs, before a line of code is written.
- **One keyboard practice** We run pair tasks the way round one does, with one pupil typing and one reading.
- **Five to ten learners** Enough for two solutions to be compared, small enough for every program to be looked at.
- **Our own tasks** Written by us in the same style. The organiser publishes its own past papers.
- **One to one when useful** For a pupil working well above their year, or one with a specific gap.
- **Nothing promised** We cannot register a team and promise no score, certificate or prize.

## Fees

A single monthly rate in US dollars for families outside India, with no registration fee and no minimum term.

- Free first class: USD 0. A full lesson on a real task. A straight read on the right level. No card details taken.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher weekly. Code read line by line. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one learner. Shaped around the specific weakness. Useful in the weeks before a round.

## What teachers and parents ask

### Who can enter the Perse Coding Team Challenge?

The organiser says the competition is "open to UK pupils up to Year 11 (S4 in Scotland) and is free to enter". International schools may take part for certificates but cannot compete for prizes.

### When are the 2027 rounds?

Round 1 runs from 25 January to 5 February 2027, Round 2 from 1 to 12 March 2027, and the Sixth Form Gold Rush from 15 to 19 March 2027.

### How big is a team?

Round 1 is sat in pairs, or solo if necessary, sharing one computer. Round 2 is teams of up to three, with a maximum of two Year 11 students per team.

### How long is each round?

Forty minutes for Round 1, sixty for Round 2 and fifty for the Sixth Form Gold Rush, which takes six questions from Round 2 material.

### Which programming languages are allowed?

The organiser lists Python, C++, C#, Java, JavaScript and Visual Basic.Net. A team should choose the language everyone in it can debug rather than the most powerful one.

### Can students bring notes?

Yes. The organiser permits up to 20 A4 sides, or ten double-sided pages, of printed or digital code snippets, readable at normal zoom.

### How is it marked?

Automatically. Teams are told how many test cases passed or failed, but the test cases themselves are not shown, and where more than one solution is submitted the highest-scoring one counts.

### How do you debug a test you cannot see?

With a checklist written from the question. Empty input, one item, everything the same, duplicates at the interesting end, negatives, zero and the largest allowed size will find most failures in under a minute.

### What are the four levels in Round 2?

The organiser describes a four-level format running from Level 1, basic text and number processing, to Level 4, algorithmic complexity, with every question worth an equal ten points.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.

## Other coding contests for school pupils

- [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk): No programming at all, and half a million entrants.
- [Oxford University Computing Challenge](/oxford-university-computing-challenge-preparation): The coding round that follows Bebras.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): Three hours, three questions, hidden tests.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Dates for every contest, checked with the people who run them.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [GCSE Computer Science tutoring](/uk-gcse-computer-science-tutoring): The qualification most of these pupils are heading for.

## Contact

Book the free first class at [https://learn.modernagecoders.com/perse-coding-team-challenge-preparation](https://learn.modernagecoders.com/perse-coding-team-challenge-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
