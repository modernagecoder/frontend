---
title: "Scottish Mathematical Challenge Practice | P7 to S6"
description: "Preparing for the Scottish Mathematical Challenge: four divisions from P7 to S6, two or three rounds a year, and marks given for the explanation, not the answer."
canonical: https://learn.modernagecoders.com/scottish-mathematical-challenge-practice
source: src/pages/scottish-mathematical-challenge-practice.html
---
> The Mathematical Challenge is run by the Scottish Mathematical Council and describes itself as "a problem solving competition for individual pupils in Scottish secondary schools and upper primary schools (mainly P7)", running since 1976 with the aim "to promote mathematics as a source of interest and pleasurable achievement". There are four divisions, Primary (P7), Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6), with three rounds a year for primary schools and two for secondary. Gold, silver and bronze certificates are announced in early summer and the top winners are invited to a prize-giving, where they receive a Mathematical Challenge mug. The rule that shapes preparation is the organiser's own: "Marks are given for explanations of answers rather than for simply getting the correct answer." We teach the mathematics and the writing that go with it, live online for ages 6 to 67. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Scottish Mathematical Challenge

Scotland · P7 to S6 · Running since 1976

# Scottish Mathematical Challenge practice

One sentence on the organiser's own home page tells a pupil everything about how to prepare for this competition, and most preparation ignores it: "Marks are given for explanations of answers rather than for simply getting the correct answer." That is not a nicety. It means a pupil who writes the right number and stops has handed in the cheap half of the work, while a pupil who explains why no other number could be right has handed in the expensive half as well. Almost every other paper a Scottish pupil sits rewards the opposite habit. This page is about the switch, and about a competition that has been asking for it since 1976.

At a glance: Organiser: The Scottish Mathematical Council; Running since: 1976; For: Individual pupils, P7 to S6; Divisions: Primary, Junior, Middle, Senior; Rounds a year: Three primary, two secondary; Marked on: The explanation, not the answer; Awards: Gold, silver and bronze in early summer; Entered by: A teacher, not by us. Rated 4.9 across 547 Google reviews.

## Three courses for a pupil who wants harder problems

Choose by the stage the pupil is at in Scotland, not by the division they will enter.

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Problems that hide their method, and the habit of writing down why an answer has to be the one it is.
- [Middle school maths mastery](/courses/comprehensive-middle-school-mathematics-mastery): For S1 to S3: the algebra and geometry the Junior and Middle divisions lean on.
- [Primary maths, Years 1 to 5](/courses/elementary-mathematics-complete-masterclass): For a P7 pupil whose number work still needs a pencil before the interesting part starts.

## Four divisions, two or three rounds, and fifty years of the same idea

Quoted and summarised from the Scottish Mathematical Council's own Mathematical Challenge pages, read on 20 September 2026.

**The Mathematical Challenge as its organiser describes it**

| Part | What the organiser says | What it means for a pupil |
|---|---|---|
| Who it is for | "individual pupils in Scottish secondary schools and upper primary schools (mainly P7)" | An individual entry, not a team; a P7 pupil can start a year before secondary |
| Since | "running since 1976 under the aegis of the Scottish Mathematical Council" | Half a century of published problems, all of them available to work through |
| Divisions | "Primary (P7), Junior (S1 and S2), Middle (S3 and S4), and Senior (S5 and S6)" | Stages, not ages: the Scottish system all the way up |
| Rounds | "two rounds of problems for Secondary schools and three rounds for Primary schools" | A year-long competition rather than one morning |
| Marking | "Marks are given for explanations of answers rather than for simply getting the correct answer" | The written argument is the work |
| Awards | Gold, silver and bronze certificates announced in early summer, with top winners invited to a prize-giving | Recognition at the end of the school year, not in the week of the round |
| The mug | Top winners "receive a much prized Mathematical Challenge mug" | The most Scottish prize in British mathematics |
| Aim | "to promote mathematics as a source of interest and pleasurable achievement" | Nothing here is a selection test for anything |

Two things this page does not tell you, because the organiser publishes them as images we cannot read: how long a pupil gets for a round, and what help is allowed. The guidelines for primary and secondary schools are on the organiser's own site and a teacher entering a class will have them. Ask the teacher, not a tutor, and certainly not us.

What we can say is that a competition with two or three rounds spread across a year is not a sprint. It is closer to homework that happens to be interesting, which is a much better fit for a pupil who likes mathematics than a single timed paper.

The entry route is a teacher. Problems, solutions and the individual entry form are downloaded from the organiser's site by the school, and a pupil who wants to take part should say so in a maths lesson. We have no part in it and could not enter anyone if we tried.

The archive is the other thing worth knowing about. Fifty years of past problems and solutions sit on the organiser's own pages, free, which makes this one of the best-stocked competitions in the UK for a pupil who simply wants harder mathematics to do.

Sources: the [Scottish Mathematical Council](https://www.scottishmathematicalcouncil.org/mathematical-challenge/) and its [Mathematical Challenge home page](http://www.wpr3.co.uk/MC/index.pdf), read 20 September 2026. Modern Age Coders is not connected with the Scottish Mathematical Council.

## The answer is the cheap part

A worked example, written by us rather than taken from any past paper, showing what the difference is worth.

Here is a problem in the right spirit. **A shop sells pencils only in packs of 4 and packs of 7. What is the largest number of pencils you cannot buy exactly?** Try it before reading on; it takes a P7 pupil about ten minutes and an S5 pupil about two.

### Answer A, which earns very little

"17."

That is correct. It is also unmarkable beyond the single fact. A marker cannot tell whether the pupil found it, guessed it, remembered it from somewhere or asked someone. Nothing in the answer shows that the pupil knows 18 onwards are all possible, which is the part that makes 17 the largest rather than merely an example.

### Answer B, which earns the marks

"The numbers you cannot make are 1, 2, 3, 5, 6, 9, 10, 13 and 17. After 17, look at 18 = 4 + 7 + 7, 19 = 4 + 4 + 4 + 7, 20 = 4 + 4 + 4 + 4 and 21 = 7 + 7 + 7. Those are four in a row. Every number above 21 is four more than one of them, so adding packs of four reaches all of them. Therefore nothing above 17 is impossible, and 17 is the largest."

Same number, entirely different piece of work. The second answer closes the problem: it shows why there cannot be a bigger one, which is what the question actually asked.

### Four in a row is the trick

With packs of four, once you have four consecutive numbers you have everything above them. That single idea is the whole argument, and a pupil who has met it once will use it for life.

### Say what you checked

Listing the impossible numbers is not padding. It is evidence that the search was systematic rather than lucky, and it costs two lines.

### Finish with the claim

The last sentence should answer the question that was asked, in words. Markers are reading for it, and pupils almost never write it.

We checked the example in code before printing it: with packs of 4 and 7 the impossible totals are exactly 1, 2, 3, 5, 6, 9, 10, 13 and 17, and 18 to 21 are all reachable. That is the habit worth copying at home too. Work the problem, then test the claim, then write the argument that makes the test unnecessary.

The problem and both answers are ours, written for this page. The Mathematical Challenge publishes its own past problems and solutions, which are the right place to meet the real thing.

## Writing mathematics is a separate skill, and it is teachable

Most pupils who lose marks here are not stuck on the mathematics. They are stuck on the sentence after it.

**What a marker can and cannot give credit for**

| A pupil writes | Credit for the answer | Credit for the reasoning |
|---|---|---|
| The final number alone | Yes | None: nothing shows how it was found |
| Working, with no words | Yes | Some: a marker may follow it, or may not |
| Words with no working | Depends | Some, if the words actually argue |
| Working, then a sentence saying what it proves | Yes | Full: the pupil has answered the question asked |
| A correct method with an arithmetic slip | No | Most of it, because the reasoning is visible |

That last row is the one to show a worried pupil. In a competition that marks explanations, a slipped multiplication costs far less than it does in a school test, because the thinking is still on the page. The pupils who are hurt most by this marking are the fast, accurate ones who have never had to write anything down.

The fix is small and dull: after every problem, one sentence beginning "So" or "Therefore" that says what has been shown. Three weeks of that changes how a pupil's work reads.

The second habit is to write for a reader who is not in the room. Not the teacher who set it, not a parent who watched the working happen, but a stranger who has only the page. Pupils find this easier if they are told to write it for a friend who was off sick.

In our classes this is taught the same way for mathematics and for programming: say what you are about to do, do it, then say what it shows. The pupils who take to [informatics olympiads](/british-informatics-olympiad-preparation) later are usually the ones who learned it here first.

## Where the divisions sit, and what else is open to a Scottish pupil

The Challenge runs on Scottish stages, so nothing needs translating. The competitions beside it mostly do not.

**The four divisions and the stage each covers**

| Division | Stage | Roughly |
|---|---|---|
| Primary | P7 | The last year of primary school |
| Junior | S1 and S2 | The first two years of secondary |
| Middle | S3 and S4 | Through the National 5 years |
| Senior | S5 and S6 | Higher and Advanced Higher |

A Scottish pupil can enter this and the UK-wide competitions in the same year: they are run by different bodies and nothing conflicts. The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lays the whole year out, including the UKMT challenges and the informatics and AI olympiads.

The stage names matter more than they look. Most UK competition material is written in English year groups, and a parent in Aberdeen translating Year 9 into S2 is doing arithmetic nobody should have to do. Our [Scotland page](/coding-and-ai-classes-in-scotland) sets out the stages and the Scottish qualifications properly.

For a pupil who likes this sort of problem and also likes computers, the informatics route opens at secondary: the British Informatics Olympiad is sat in school in December and January, and it rewards exactly the same instinct, the one that asks whether an answer could be wrong.

For a pupil who does not want a competition at all, none of this is compulsory and none of it is a measure of anything. The mathematics is worth doing because it is interesting, which is what the organiser says too.

## Four rungs from a right answer to a finished argument

Progress here is about what a pupil writes, not about which topics they have covered.

**From answer to argument**

| Stage | Rung | The sign it is secure |
|---|---|---|
| P6 to P7 | 1. Systematic search | Tries cases in an order and can say what the order was |
| P7 to S1 | 2. Working on the page | Leaves enough behind that someone else could follow it |
| S1 to S3 | 3. The closing sentence | Ends with a line saying what has been shown, unprompted |
| S3 to S6 | 4. Why nothing else works | Argues that no other answer is possible, not just that this one is |

### If a round is close

Do not start new topics. Take problems the pupil has already solved and rewrite the solutions properly; that is the fastest gain available in this competition.
A pupil who solved four and explained none is in a better position than one who solved two and explained both, but only if somebody shows them the difference this week.

### What this leads to

The same skill is what senior olympiad mathematics is made of, and what university mathematics is made of after that.
It transfers sideways too: the [A-level computing project](/a-level-computer-science-nea-help) is marked on evidence of reasoning for exactly the same reason.

## Maths and computing courses for Scottish pupils

Arranged by stage, with each syllabus a click away.

### Primary into S1

P6, P7 and first year

- [Primary maths, Years 1 to 5](/courses/elementary-mathematics-complete-masterclass): The number work everything else stands on.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Calculation that stops costing thinking time.
- [Maths through coding](/courses/maths-through-coding): Python as a way of testing whether a method really works.

### Junior and Middle

S1 to S4

- [Middle school maths mastery](/courses/comprehensive-middle-school-mathematics-mastery): Pre-algebra and geometry, argued rather than drilled.
- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Problems that do not announce their method.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, for pupils who like to check things.

### Senior

S5 and S6

- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Algebra through to calculus, at Higher pace.
- [Statistics and probability](/courses/statistics-probability-maths-course): Where argument and evidence meet numbers.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Reasoning about method, in code.

### Beside the maths

For pupils who also build

- [Python from start to finish](/courses/python-complete-masterclass-teens): Every core idea, with prediction before running.
- [Scratch for kids](/courses/scratch-programming-complete-course): A first language for P6 and P7.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): For the senior pupil looking past school.

## A weekly hour, and someone who reads what the pupil wrote

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer. Scottish pupils usually take a weekday evening, fixed in UK time.

- **Weekday evening** The usual slot from S1 upwards.
- **Early evening** Kept for P7 and S1, before concentration runs out.
- **Weekend morning** For longer sessions on a single hard problem.

- **Written work read properly** A teacher reads what the pupil actually wrote and says where the argument stops being convincing.
- **Problems written by us** Fresh problems in the same spirit. The organiser's archive is where the real ones live.
- **Groups of five to ten** Small enough that every solution gets read aloud, large enough to hear a better method than your own.
- **Scottish stages used** P7, S1 to S6, National 5, Higher and Advanced Higher, called by their own names.
- **One to one when wanted** For a pupil working well beyond their year, or one who will not speak up in a group.
- **No result promised** No certificate, no prize-giving invitation and no mug is promised by us.

## Fees

One monthly rate in US dollars for every country outside India. No joining fee and no term to commit to.

- Free first class: USD 0. A proper lesson with a teacher. An honest read on where the maths is. No card details taken.
- Group batch: USD 100 a month. Five to ten pupils at one stage. The same teacher weekly. Written solutions read and discussed. A certificate at the end.
- One to one: USD 150 a month. One pupil, one teacher. Aimed at a particular weakness. Useful for a pupil far ahead of their stage.

## What Scottish parents and teachers ask

### Who can enter the Scottish Mathematical Challenge?

The organiser describes it as a problem-solving competition for individual pupils in Scottish secondary schools and upper primary schools, mainly P7. Entry is through a school, so the first step is a word with the maths teacher.

### What are the four divisions?

Primary (P7), Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6), as the Scottish Mathematical Council publishes them.

### How many rounds are there?

The organiser says there are three rounds a year for primary schools and two for secondary schools, so it runs across the school year rather than on a single morning.

### How is the Mathematical Challenge marked?

In the organiser's own words, "marks are given for explanations of answers rather than for simply getting the correct answer". A right answer with no reasoning earns very little.

### How long does a pupil get for a round?

We do not say, because the organiser publishes its guidelines as images we cannot read. The primary and secondary guidelines are on its own site and a teacher entering pupils will have them.

### What do winners get?

Gold, silver and bronze certificates are announced in each section in early summer, and the top winners are usually invited to a prize-giving ceremony where they receive a Mathematical Challenge mug.

### How long has it been running?

Since 1976, under the aegis of the Scottish Mathematical Council, which makes it one of the longest-running school mathematics competitions in Britain.

### Can a pupil do this and the UKMT challenges?

Yes. They are run by different organisations on different timetables, and a Scottish pupil can enter both in the same school year.

### Do you use past Challenge problems in lessons?

No. We write our own in the same spirit. The organiser publishes fifty years of past problems with solutions, free, and that is the right place for the real thing.

### What do classes cost?

The first lesson is free. After it, a group place is USD 100 a month and one-to-one teaching USD 150, with nothing to pay to join and no minimum term.

## More for Scottish pupils and young mathematicians

- [Coding and AI classes in Scotland](/coding-and-ai-classes-in-scotland): The Scottish stages, qualifications and school year.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every contest we could confirm, month by month.
- [Primary Maths Challenge](/primary-maths-challenge-practice): The English and Welsh primary competition, marked very differently.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): Where the same instinct goes when a pupil likes programming.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): Four school systems, and every UK page.
- [Choosing an online class](/best-online-coding-classes-uk): What to ask any provider before paying.

## Contact

Book the free first class at [https://learn.modernagecoders.com/scottish-mathematical-challenge-practice](https://learn.modernagecoders.com/scottish-mathematical-challenge-practice#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
