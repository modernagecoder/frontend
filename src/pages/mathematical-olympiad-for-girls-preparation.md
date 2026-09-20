---
title: "Mathematical Olympiad for Girls Preparation | MOG and MCG"
description: "Preparing for the UKMT Mathematical Olympiad for Girls: five problems in two and a half hours, two answer-only and three written, and how the MCG differs."
canonical: https://learn.modernagecoders.com/mathematical-olympiad-for-girls-preparation
source: src/pages/mathematical-olympiad-for-girls-preparation.html
---
> The Mathematical Olympiad for Girls is run by the UK Mathematics Trust and falls on "Tuesday 22nd September 2026". UKMT describes a paper of "2.5 hours" that "consists of five challenging problems": two ask for "numerical answers only" and three "require full written explanations". Eligibility is "England and Wales: Year 11 and above (younger students may be entered at the school's discretion)", "Scotland: S4 and above" and "Northern Ireland: Year 12 and above", and entry is discretionary through a school. On the same day UKMT runs the newer Mathematical Competition for Girls, an unlimited-entry paper of "five similar problems, but in the answer-only format", with some questions shared; "students cannot sit both the MCG and MOG". We teach the problem solving and the written argument, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Mathematical Olympiad for Girls

United Kingdom · Year 11 and above · 22 September 2026

# Mathematical Olympiad for Girls preparation

Most students meet written mathematics as a cliff. One year the papers are multiple choice and the next they want a proof, and nothing in between teaches the crossing. The Mathematical Olympiad for Girls is the gentlest bridge in the British system, and it is built that way on purpose: five problems in two and a half hours, of which two ask for a numerical answer and three ask for a full written explanation. A student can walk in able to do the first kind and learn, on paper, what the second kind wants. This page is about that difference, and about how to practise the half nobody has ever asked for.

At a glance: Organiser: UK Mathematics Trust; Date: Tuesday 22 September 2026; Length: Two and a half hours; Problems: Five; Answer only: Two of the five; Written explanation: Three of the five; England and Wales: Year 11 and above; Also that day: The Mathematical Competition for Girls. Rated 4.9 across 547 Google reviews.

## Three courses for a MOG candidate

Pick by whether the gap is the mathematics or the writing.

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Counting, number theory and geometry in the olympiad idiom, with every solution written out.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): For a student who can see the idea but loses time getting the algebra out.
- [Statistics and probability](/courses/statistics-probability-maths-course): Counting arguments done carefully, which is where a good many MOG problems live.

## Five problems, and two different kinds of answer

Facts read at UKMT's own pages on 20 September 2026.

**The Mathematical Olympiad for Girls as UKMT publishes it**

| Part | What UKMT says | What it means on the day |
|---|---|---|
| Date | "Tuesday 22nd September 2026" | Early in the autumn term, before most competition seasons begin |
| Length | "2.5 hours" | Thirty minutes a problem, which nobody should spend evenly |
| The paper | "consists of five challenging problems" | Fewer, longer problems than any challenge paper |
| Two of them | Ask for "numerical answers only" | Familiar ground for a student coming from the Senior Challenge |
| Three of them | "require full written explanations" | The part that has to be learned, and the reason this page exists |
| England and Wales | "Year 11 and above (younger students may be entered at the school's discretion)" | Sixth formers and strong Year 11s, with younger students possible |
| Scotland | "S4 and above" | Scottish stages, not translated year groups |
| Northern Ireland | "Year 12 and above" | One year higher, matching the NI school year |
| Entry | Discretionary, arranged by a school | No qualifying score is needed; a teacher enters candidates |

Discretionary entry is the detail that changes who this paper is for. There is no threshold to clear first and no invitation to wait for. A teacher who thinks a student would enjoy it can enter her, which means the paper is available to students who have never done well in a timed multiple-choice round and might do very well given two and a half hours.

Answer sheets are uploaded the following day, by 11:59pm on Wednesday 23 September 2026, so a school needs to have thought about scanning before the morning arrives.

Two and a half hours for five problems is unusually generous, and the generosity is the design. These are problems meant to be thought about rather than recognised, and a student who finishes early has almost certainly not written enough on the three explained questions.

It falls in September, which makes it the first serious paper of the school year. That is worth planning around: the useful preparation happens in the summer term before, not in the fortnight after school goes back.

Sources: [UKMT, Mathematical Olympiad for Girls](https://ukmt.org.uk/mathematical-olympiad-for-girls), [Mathematical Competition for Girls](https://ukmt.org.uk/competitions/mathematical-competition-for-girls) and the [competitions calendar](https://ukmt.org.uk/competitions), read 20 September 2026. We have no connection with the UK Mathematics Trust.

## The number is one word. The reason is the question.

A worked case, written by us, that shows exactly what the three explained questions are asking for.

Here is a problem in the right spirit. **In any group of people, some pairs are friends and the rest are strangers. What is the smallest size of group that must always contain three people who are all friends with each other, or three who are all strangers to each other?** The answer is six. Written on a line by itself, that answer is worth almost nothing, and a student who has only ever sat answer-only papers has no idea why.

**Our brute force of 20 September 2026: every possible pattern of friendships**

| Group size | Patterns checked | Patterns with no trio of mutual friends and no trio of mutual strangers |
|---|---|---|
| Five people | 1,024 | 12 |
| Six people | 32,768 | 0 |

### Why five is not enough

Twelve of the 1,024 patterns on five people escape, and they are all the same shape: a ring. Seat five people in a circle, let each be friends with their two neighbours and strangers to the other two, and no trio is all friends or all strangers.

### Why six always works

Pick any person. They have five relationships, so at least three are of the same kind, say three friends. If any two of those three are friends with each other, that pair plus the first person is a trio of friends. If none are, those three are a trio of strangers.

### What the brute force did

It checked all 32,768 patterns and found no exception, which is reassurance. The paragraph above is the proof, and it is what the three written questions on the paper are asking a student to produce.

Notice the shape of the good argument. It does not check cases; there are 32,768 of them and nobody has the afternoon. It picks an arbitrary person, counts their five relationships, and observes that three must match. That counting step is the pigeonhole principle, and it is one of the two or three techniques that unlock most olympiad counting problems.

Notice also how short it is. Five sentences, no algebra, complete. Students often believe a written solution must be long, and length is usually a sign that the key idea has not been found yet.

The practical exercise this suggests is small and repeatable. Take a problem whose answer is already known and write the reason in under ten lines, for a reader who has not seen the problem. Then leave it a day and read it back cold, and see whether it still convinces.

That is the whole difference between the two answer-only questions and the three explained ones, and it is trainable in a way that raw problem-solving ability is not.

The problem, the argument and the brute-force check are ours, written and run on 20 September 2026: all 1,024 friendship patterns on five people and all 32,768 on six were tested, with twelve escapes at five and none at six.

## MOG or MCG, and why a student cannot sit both

UKMT now runs two papers for girls on the same day, and a school has to choose one per student.

**The two papers compared, from UKMT's own descriptions**

|  | Mathematical Olympiad for Girls | Mathematical Competition for Girls |
|---|---|---|
| Entry | Discretionary, through a school | Unlimited entry |
| Problems | Five challenging problems | "five similar problems, but in the answer-only format" |
| Answers | Two numerical, three fully written | All answer only |
| Overlap | Its answer-only questions are the reference point | Similar in style and level, with some questions shared |
| Both at once | Not possible: "students cannot sit both the MCG and MOG" | Not possible, for the same reason |

The honest way to choose is to ask what a student has actually done before. A student who has never written a mathematical argument, and will not have practised one before late September, may get more out of a paper that asks only for answers, and can come to the written paper next year knowing what it wants.

A student who has written up solutions, even a handful, should sit the olympiad. The three explained questions are where the real learning is, and a half-finished written argument teaches more than five correct numbers.

What should not drive the decision is fear of a bad score. Neither paper is a qualification, neither appears on any record a school or university sees unless a student chooses to mention it, and both exist because UKMT wanted more girls sitting mathematics beyond the syllabus.

The other rungs are open in parallel. The Senior Mathematical Challenge falls on 7 October 2026 and the [British Mathematical Olympiad](/british-mathematical-olympiad-bmo-preparation) follows in November, and a student can sit those as well as this.

## Write ten lines, then read them cold

There is one exercise worth doing repeatedly, and it takes twenty minutes a week.

**Preparation that works for a September paper**

| When | What to do | Why |
|---|---|---|
| Summer term before | Work olympiad problems without a clock | Problem-solving grows slowly and cannot be hurried in September |
| Summer holidays | Write up one solution a week, properly | The writing is the half nobody has practised |
| Early September | Reread old write-ups cold and mark them yourself | A solution that convinced you in July often does not in September |
| The week before | One timed two-and-a-half-hour sitting | Stamina and pacing, not content |
| On the day | Read all five, then start with the one you can see into | Nothing rewards doing them in order |

The commonest preparation mistake for this paper is to spend all of it on the two answer-only questions, because they are the familiar kind and progress feels measurable. Three fifths of the paper wants something else.

The second is to read model solutions instead of writing any. Reading a good proof teaches style; writing a mediocre one and having it picked apart teaches the skill.

UKMT publishes its own past papers and full solutions free, which is the right place to meet the real style of the questions. We do not reproduce any of them here or in lessons; our problems are written by us in the same territory.

If a student finds she enjoys the written questions more than the answer-only ones, that is the signal to look at the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) and keep going.

## Four rungs from an answer to an argument

A student moves up when the previous habit is automatic, whatever her year group.

**From a number to a proof a stranger accepts**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Years 9 to 10 | 1. Technique out of the way | Algebra and counting never interrupt the thinking |
| Years 10 to 11 | 2. Patience | Will stay with one problem for half an hour unprompted |
| Year 11 to 12 | 3. Ten honest lines | Writes a short argument that a classmate can follow |
| Years 12 to 13 | 4. Cold reading | Marks her own week-old solution and finds the gap in it |

### If September is close

Write up two problems already solved, fully, and have someone read them as a stranger would. That is the highest-value evening available.
Sit one timed paper for pacing, and do not add topics. Nothing in this paper needs content beyond school mathematics.

### What comes after

The Senior Mathematical Challenge is on 7 October 2026 and the [British Mathematical Olympiad](/british-mathematical-olympiad-bmo-preparation) in November, both open to the same students.
The written habit is worth more at every level above this one, and it is what university mathematics is made of.

## Courses for a sixth-form problem solver

Sorted by the obstacle rather than the year group, with each syllabus a click away.

### Olympiad mathematics

The paper itself

- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Pigeonhole, counting and construction, written out.
- [Statistics and probability](/courses/statistics-probability-maths-course): Probability arguments that survive being questioned.
- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Algebra and geometry until they are out of the way.

### The school course

Running underneath it all

- [A-level maths](/courses/a-level-maths-course-pure-mechanics-statistics): The sixth-form course, taught so it stops eating the same evenings.
- [GCSE maths](/courses/gcse-mathematics-mastery): Foundation and higher, for a candidate still in Year 11.
- [IGCSE maths](/courses/igcse-mathematics-mastery): For students in independent and international schools.

### Computing beside it

Where a program helps

- [Maths through coding](/courses/maths-through-coding): A short program, and then the sentence that makes it unnecessary.
- [Python from start to finish](/courses/python-complete-masterclass-teens): Enough code to list every case before arguing about them.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Where careful counting meets a messy spreadsheet.

### Further on

University and after

- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting and how long a method takes.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): What counting and probability turn into later.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Problems solved against a clock and a judge.

## One problem a week, and a reader for the write-up

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Weekday evening** The usual choice for Years 11 to 13.
- **Weekend morning** Long enough to work a problem to a finished argument.
- **Summer weeks** The right time to prepare for a September paper.

- **Write-ups read as a stranger** A teacher reads the argument cold and says where it stops being convincing.
- **Techniques named** Pigeonhole, extremal cases and construction are taught as a repertoire, not as tricks.
- **Five to ten students** Enough for two approaches to meet, small enough for every solution to be read aloud.
- **Our own problems** Written by us in the same territory. UKMT publishes its own past papers and solutions.
- **One to one when wanted** For a student working beyond her year group, or one who prefers to think out loud alone.
- **Nothing promised** We cannot enter anyone, and no score, award or invitation is promised by us.

## Fees

Priced monthly in US dollars for families outside India, with no registration fee and no minimum number of months.

- Free first class: USD 0. One real problem with a teacher. A straight read on the level. No card details.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher weekly. Written arguments read closely. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one student. Shaped around what she finds hard. Useful when a group hour will not fit the week.

## What students and parents ask

### When is the Mathematical Olympiad for Girls in 2026?

UKMT gives Tuesday 22 September 2026, with paper answer sheets uploaded by 11:59pm the following day.

### Who can enter?

UKMT publishes it by nation: Year 11 and above in England and Wales, with younger students at the school's discretion; S4 and above in Scotland; Year 12 and above in Northern Ireland. Entry is discretionary and arranged by a school.

### What is the paper like?

Two and a half hours and five challenging problems. Two ask for numerical answers only and three require full written explanations, which makes it the gentlest crossing in the British system from answer papers to proof.

### Does a student need a qualifying score?

No. Entry is discretionary rather than by invitation, so a teacher can enter a student who would enjoy the paper without her having cleared a threshold first.

### What is the Mathematical Competition for Girls?

A newer UKMT paper on the same day with unlimited entry, described as five similar problems in the answer-only format, similar in style and level to the MOG answer-only questions with some questions shared.

### Can a student sit both papers?

No. UKMT says plainly that students cannot sit both the MCG and the MOG, so a school chooses one per student.

### Which should my daughter sit?

If she has written up mathematical solutions before, even a few, the olympiad is where the learning is. If she has not, and will not have practised by late September, the answer-only paper is a reasonable first year, and the olympiad is there next year.

### How do you practise a written question?

By writing ten honest lines about a problem already solved, then reading them back a week later as a stranger would. A good argument is usually short: if it is long, the key idea has probably not been found yet.

### Do you use UKMT past papers?

No. UKMT publishes its own past papers and full solutions free. Our practice problems are written by us in the same territory.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.

## Where to go after September

- [British Mathematical Olympiad](/british-mathematical-olympiad-bmo-preparation): Three and a half hours, six problems, in November.
- [Cayley, Hamilton and Maclaurin](/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation): The intermediate papers, split by school year.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Dates for every contest, checked with the people who run them.
- [Junior Mathematical Olympiad](/junior-mathematical-olympiad-preparation): Where written solutions begin, at Year 8.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Choosing an online class](/best-online-coding-classes-uk): How to tell a serious provider from a well-designed one.

## Contact

Book the free first class at [https://learn.modernagecoders.com/mathematical-olympiad-for-girls-preparation](https://learn.modernagecoders.com/mathematical-olympiad-for-girls-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
