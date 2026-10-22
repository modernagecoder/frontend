---
title: "CCC Junior 2027 Guide: Format, Rules, Practice Problems"
description: "CCC Junior from CEMC's 2027 pages: 5 questions in 3 hours out of 75, how school entry works, Junior vs Senior, three original Python problems and a 16-week plan."
canonical: https://learn.modernagecoders.com/ccc-junior-guide
source: src/pages/ccc-junior-guide.html
---
> CCC Junior is the beginner-to-intermediate level of the Canadian Computing Competition, run by CEMC at the University of Waterloo: five programming problems, three hours, scored out of 75, written online at school. It suits students who can write loops and conditions, in any grade. Modern Age Coders prepares students live online, in a batch or one to one, in its CCC Junior and Senior Preparation course.

[Home](/) / [Courses](/courses) / [Coding classes in Canada](/coding-classes-in-canada) / CCC Junior guide

Canada · Canadian Computing Competition · Junior level

# CCC Junior guide for 2027

The Junior level of the Canadian Computing Competition is where most Canadian students meet contest programming for the first time: one online sitting at school, five problems, three hours, and an automatic grader that only accepts output in exactly the form the problem asks for. This guide is built from the 2027 contest page published by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo and from the rules of its CCC Online Grader. It covers what the paper looks like, how entry through a school works, how Junior compares with Senior, the skills Junior problems lean on, three practice problems we wrote with full Python solutions, and a sixteen-week plan that ends on contest day.

At a glance: Run by: CEMC, University of Waterloo; 2027 contest: Wednesday 17 February 2027 (the Americas); Paper: 5 questions, 3 hours; Score: Out of 75, 15 per question; Languages: C, C++, Python 2 or 3, Java; Entry: Through a school only; Classes: Weekdays or weekends, flexible; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses for a CCC Junior writer

The first is built around the CCC itself. The other two are where a student goes to strengthen the programming underneath it.

- [CCC Junior and Senior Preparation](/courses/ccc-junior-and-senior-preparation-course): Ages 13 to 18. Junior and Senior tracks in Python or C++, two live classes a week and timed practice contests, up to the 17 February 2027 contest.
- [Competitive programming for teens](/courses/competitive-programming-for-teens-course): Ages 13 to 18. Algorithms and contest habits for students heading from Junior towards Senior.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. Fluent Python first, for a student who is not yet comfortable with loops, lists and strings.

## CCC 2027 at a glance, from CEMC's contest page

Each line below comes from CEMC's own page for the Canadian Computing Competition, read on 22 October 2026. CEMC sets these details each year, so check its page again before the contest.

**The 2027 Canadian Computing Competition, as published by CEMC (read 22 October 2026)**

| Point | What CEMC publishes for 2027 |
|---|---|
| Contest date | CEMC lists "North and South America: Wednesday, February 17, 2027" and "Outside North and South America: Thursday, February 18, 2027". |
| Ordering deadline | CEMC gives schools until Thursday, February 11, 2027 to order the 2027 CCC. |
| Levels | Junior: "any participant with beginner to intermediate programming skills." Senior: "any participant with intermediate to advanced programming skills." |
| Choosing a level | CEMC lets each writer pick a level "regardless of their grade". |
| Where and how | "Written in school, participants write online, individually." |
| Format | "5 questions." "Time allowed for completion is 3 hours." "Score out of 75." "Each question is worth 15." |
| Partial marks | CEMC says problems may be split into subtasks, with a partial score for each, including an easier, restricted version of a problem. |
| Programming languages | "CCC participants may use C, C++, Python 2, Python 3, or Java." |
| Contest language | CEMC: "This contest is available in English and French." |
| Fee | CEMC sets a ten-dollar fee per participant, plus a processing fee per school order; the school places the order. |
| Practice | The CCC Online Grader, "where participants can create a free practice account and access previous contests". |

### What the three hours mean

CEMC's supervisor instructions say "An individualized 3-hour timer will begin for each participant as soon as they enter biographical information" after logging in to the grader. The clock is personal, so a student who starts a few minutes late still gets the full three hours.

The grader rules add a detail many families miss: a student may open both the Junior and the Senior contest, but has "a maximum of 3 hours in total" across the two. CEMC then counts the higher result: "We will take the maximum score between the Junior and Senior contest as the student's overall score."

### When the paper starts

There is no single national start time. CEMC asks supervisors to run the contest "as close to the beginning of the school day as possible in their respective time zones" on the official date, so a student in Halifax and a student in Vancouver write on the same Wednesday 17 February 2027 but at different moments.

Results reach the school's supervisor through CEMC's Contest Supervisor Portal within a few weeks of the contest, according to the CCC page.

Source: [CEMC, Canadian Computing Competition](https://cemc.uwaterloo.ca/contests/ccc), and the [CEMC contests overview](https://cemc.uwaterloo.ca/contests), read 22 October 2026. Modern Age Coders is not connected with CEMC or the University of Waterloo; we teach students who write the contest through their schools.

## What the CCC Online Grader checks, and why it trips up first-time writers

Every CCC answer is a program, and a machine marks it. The rules document linked from CEMC's page is short, and nearly every Junior mark lost to a "silly mistake" breaks one of the lines below.

**CCC grader rules that matter most at Junior level, quoted from the CCC rules document (read 22 October 2026)**

| Rule | What the CCC rules say | What it means for a Junior writer |
|---|---|---|
| Input and output | "All input is from standard input and all output is to standard output." | Read with input(); never open a file. |
| Exact output | "Output must match the output format specified in the problem exactly. Prompts or additional output must not be produced." | input("Enter a number: ") costs the whole test case. |
| Limits | "3 second time limit and a 512 MB memory limit" unless a problem says otherwise | Slow code fails on big inputs even when it is correct. |
| Submissions | "up to 50 submissions per problem", "at most once per minute" | Test on your own machine first; the grader is not a debugger. |
| Scoring | The "maximum score over all submissions" counts for each problem | A later, worse submission never lowers a score. |
| Help allowed | Official language documentation only; "generative AI such as CoPilot or ChatGPT" is forbidden, and "AI-based tools within an IDE cannot be used." | Practise with plain documentation open, not an AI assistant. |
| After the contest | "Do not discuss the problems or solutions from a contest online within 48 hours after the contest." | Wait two days before posting about it. |

### The Python version matters

CEMC's sample-programs document lists the Python 3 compiler as "Pypy3 7.3.9 (running Python 3.8.13)". Code written with newer syntax, such as a match statement, will not run there.

We write every practice solution on this page in Python 3.8 syntax for that reason, and we ask students to avoid features they have only seen in the newest tutorials.

### Python or another language?

CEMC warns that "it may not always be possible to achieve a perfect score with a particular language choice (for example, Python or Java)", while there is always at least one language in which a perfect score is possible.

For a first Junior paper we teach in Python, because the student's attention belongs on the problem. Students who aim for Senior and the Canadian Computing Olympiad move to C++, which the CCO requires.

Sources: [CCC rules](https://cccgrader.com/rules.pdf) and [sample programs and language details](https://cccgrader.com/sample_soln.pdf), both linked from CEMC's CCC page and read 22 October 2026. Outside the contest, ChatGPT needs a parent's permission for anyone under 18.

## How to enter CCC Junior: only through a school

Families often look for a sign-up form. There is none for students. CEMC is direct about it on its How contests work page: "It is not possible for students to individually register for a contest", and "all students must participate through their school."

1. Talk to a teacher early. CEMC's first step for a student is to "talk to a math or computer science educator at your school". Ask in the autumn whether the school orders the CCC.
2. If the school already takes part, the teacher gives the student the school's CEMC school number (never the password) so the student can create a CCC Online Grader account, which the teacher then approves.
3. If the school has never ordered a CEMC contest, the principal or head of math applies for a school account. CEMC says "only educators are permitted to request a CEMC School Account" and that review "can take up to three weeks", so this cannot wait until February 2027.
4. If the school will not take part, CEMC's answer is that "students can look for another local school that will allow them to join as a participant." Ask nearby schools politely and well before the deadline.
5. Check the order is in. The 2027 ordering deadline CEMC lists is Thursday, February 11, 2027. CEMC adds that late and even last-minute registrants can be added before the contest starts, with the school invoiced afterwards.
6. Write at that school. CEMC's standards say "Participants may only write the contest at the school which ordered the contest" and "Contests may not be taken remotely or without supervision."

### Homeschooled students, and schools without the CCC

CEMC's pages that we read give one route for a student whose own school does not take part: another local school that agrees to host them. They do not describe a separate route for homeschooled students, so we do not invent one. A homeschooling family's practical step is the same: contact a nearby school's math or computer science department and ask whether the student can write there.

An online class cannot host the sitting. We teach the preparation; the contest itself is always written in person at a school, under that school's supervision.

### Who counts as an official participant

CEMC says "Any full-time student may participate" in the CCC. For writers at a school inside Canada, CEMC counts a participant as official if they were born on or after July 1, 2007, and live in Canada.

Official status matters mainly for invitations onward from Senior. Unofficial participants, CEMC notes, are still eligible for certificates.

Sources: [CEMC, How contests work](https://cemc.uwaterloo.ca/contests/how-contests-work) and the [CCC page](https://cemc.uwaterloo.ca/contests/ccc), read 22 October 2026.

## CCC Junior vs Senior: what each paper asks of a student

Both papers share the same format and the same afternoon. They differ in what the five problems demand, and in where a strong result can lead.

**CCC Junior and Senior compared, from CEMC's CCC page (read 22 October 2026); the last row is our guidance**

|  | Junior | Senior |
|---|---|---|
| CEMC's audience line | Beginner to intermediate programming skills | Intermediate to advanced programming skills |
| Questions 1 and 2 | Straightforward: "basic loops and conditions" | Basic algorithms: "sorting, searching" |
| Questions 3 and 4 | More challenging: "some combination of loops, conditions and counting" | More advanced algorithms: "careful counting, more advanced mathematical reasoning" |
| Question 5 | "recursion, two-dimensional arrays, efficient/insightful algorithms" | "IOI level question" |
| Format | 5 questions, 3 hours, out of 75 | 5 questions, 3 hours, out of 75 |
| 2026 average (mean) | 42.65 out of 75 | 15.56 out of 75 |
| 2026 Certificate of Distinction cutoff | 58 | 26 |
| 2026 number of contestants | 3421 | 2439 |
| Honour roll | Not listed by CEMC for Junior | Some top official participants named |
| Leads onward | CEMC names no onward invitation from Junior | About 20 top official Senior participants from schools in Canada invited to the CCO |
| Our guidance | A student who still checks how to write a loop, or has never written a contest program | A student who solves the last Junior problems from past papers comfortably within the time |

Our own reading of CEMC's 2026 Junior figures, labelled as ours: the Certificate of Distinction cutoff of 58 is three full questions at 15 points each plus 13 more points (58 = 45 + 13), so in 2026 a Junior writer needed roughly four questions' worth of marks to reach it. The Junior mean of 42.65 is about 57 percent of 75 (42.65 / 75). CEMC awards the certificate to "the top 25%" of all competitors, so the cutoff moves from year to year with the paper.

### Why Junior is a sound first contest

The first two Junior problems reward plain, careful programming. A student who reads the statement slowly and prints exactly what is asked can collect 30 points before any clever idea is needed.

Junior is also where students learn the rhythm of a contest: the personal timer, the grader's verdicts, the decision to stop polishing one problem and move to the next.

### When to move a student up

We look at evidence from timed practice, not at the grade on a report card. When a student finishes Junior questions 4 and 5 from several past years inside the time, the Senior paper is the more useful afternoon.

CEMC allows a student to open both levels, and the higher score counts, but the three hours are shared, so time spent on one paper is time lost on the other. We settle the level in late January or early February 2027, after two timed papers, so the student walks in planning to spend the afternoon on one.

## The six skills CCC Junior problems lean on

CEMC describes its Junior questions in a single line each. In our teaching, those lines break down into six habits a student can practise. The descriptions below are ours, not CEMC's.

**Skills behind CCC Junior problems (our analysis, linked to CEMC's question outline)**

| Skill | What it looks like in a Junior problem | How we practise it |
|---|---|---|
| Input parsing | A count on the first line, then values one per line or several on one line | Students write the reading code first and print what they read before solving anything |
| Loops and conditions | Deciding what happens to each item: count it, skip it, compare it | Short drills where the only change is a word such as "at least" versus "more than" |
| Simulation | Following a process step by step: a queue, a game, a timetable | Tracing the sample by hand on paper, one row per step, before any code |
| String handling | Checking characters one at a time, building an answer string, slicing | Problems where spaces, capitals and punctuation matter, so careless shortcuts fail |
| Simple data structures | Lists, dictionaries for counting, a two-dimensional grid by question 5 | One structure a week, used in three different problems |
| Careful reading | Edge cases hidden in the wording: ties, the first item, an empty run | Students write two test inputs of their own for every problem, one of them tiny |

### Why careful reading comes last but matters most

Almost every Junior problem is solvable by a student who knows loops, lists and strings. What separates the scores is how exactly the statement is followed: whether "taller" means strictly taller, whether output goes on one line or two.

That is why our three practice problems below each hide one small trap in the wording, and why each solution names the mistake it is built to catch.

### Subtasks change the strategy

Because CEMC can award partial scores for an easier, restricted version of a problem, a student who cannot see the full solution to question 5 should still solve the small case.

A simple program that is correct for small inputs and too slow for large ones can still earn the subtask points. We practise writing that version first, then improving it.

## Three original CCC Junior-style problems with Python solutions

We wrote these three problems for our students; they are our practice problems, not CEMC problems, and they are not copied or adapted from any past contest. They follow the Junior ladder in difficulty: the first is question 1 or 2 level, the second question 3 level, the third a string problem of the kind that appears in the middle of a Junior paper. Each solution is written in Python 3.8 syntax, to suit the grader, and was run on its sample input.

Practice problem 1: Line-up Leaders. Students stand in a line. Count how many students are strictly taller than every student in front of them; the first student always counts. Input: the first line holds N (1 to 100), the number of students. Each of the next N lines holds one height in centimetres, a whole number from 1 to 250. Output: one line with the count.

**Problem 1 · sample input and output** (text)
```text
Sample input:
5
140
152
152
149
160

Sample output:
3
```

**Problem 1 · our solution** (python)
```python
# Our practice problem 1: Line-up Leaders (not a CEMC problem)
n = int(input())
count = 0
tallest = 0          # every height is at least 1, so 0 is safe
for _ in range(n):
    h = int(input())
    if h > tallest:  # strictly taller; a tie does not count
        count += 1
        tallest = h
print(count)
```
The mistake it catches: writing >= instead of >. The second student of height 152 ties, so does not count, and the answer is 3, not 4. The second trap is a prompt: input("How many students? ") prints extra text, and the grader marks the case wrong.

Practice problem 2: Plough Days. A town ploughs its roads on any day with at least 5 cm of new snow. Given the snowfall for N days, print how many plough days there were, then the length of the longest run of plough days in a row. Input: the first line holds N (1 to 1000). The second line holds N whole numbers from 0 to 100, separated by single spaces. Output: two lines, the number of plough days and then the longest run.

**Problem 2 · sample input and output** (text)
```text
Sample input 1:
8
0 6 7 2 5 5 9 1

Sample output 1:
5
3

Sample input 2:
4
1 5 6 7

Sample output 2:
3
3
```

**Problem 2 · our solution** (python)
```python
# Our practice problem 2: Plough Days (not a CEMC problem)
n = int(input())
snow = list(map(int, input().split()))

plough_days = 0
run = 0
longest = 0
for cm in snow:
    if cm >= 5:
        plough_days += 1
        run += 1
        if run > longest:   # update inside the loop, so a run
            longest = run   # that reaches the last day still counts
    else:
        run = 0
print(plough_days)
print(longest)
```
The mistake it catches: many first attempts update the longest run only when a run breaks. On the second sample the run of 5, 6 and 7 reaches the last day and never breaks, so that version prints 0 instead of 3. Updating inside the loop, as above, fixes it. The input trap: all the numbers sit on one line, so a program that reads each day with int(input()) receives the whole line "0 6 7 2 5 5 9 1" at once, raises a ValueError, and the grader reports a run-time error.

Practice problem 3: Postal Pattern. Our simplified postal pattern has exactly seven characters: a capital letter, a digit, a capital letter, one space, a digit, a capital letter and a digit. For each line, print VALID if it matches the pattern and INVALID if it does not. (This is our made-up checking rule for practice, not a full postal-code validator.) Input: the first line holds N (1 to 50). Each of the next N lines holds one string of up to 20 characters. Output: N lines, each VALID or INVALID.

**Problem 3 · sample input and output** (text)
```text
Sample input:
5
A1B 2C3
a1b 2c3
A1B2C3
Z9Y 8X7
A1B 2C3D

Sample output:
VALID
INVALID
INVALID
VALID
INVALID
```

**Problem 3 · our solution** (python)
```python
# Our practice problem 3: Postal Pattern (not a CEMC problem)
LETTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
DIGIT = "0123456789"
PATTERN = [LETTER, DIGIT, LETTER, " ", DIGIT, LETTER, DIGIT]

def is_valid(code):
    if len(code) != len(PATTERN):
        return False
    for ch, allowed in zip(code, PATTERN):
        if ch not in allowed:
            return False
    return True

n = int(input())
for _ in range(n):
    line = input()            # keep the space in the middle
    print("VALID" if is_valid(line) else "INVALID")
```
The mistake it catches: reading the line with input().split() cuts "A1B 2C3" into two pieces and loses the space the pattern needs. The second trap is isalpha(), which accepts lower-case letters, so "a1b 2c3" would wrongly pass. Comparing each character with an explicit list of allowed characters follows the statement exactly.

### How to use these problems

Solve each one before reading our solution, then type your program into a fresh file and run it on the sample input. If it disagrees with the sample output, find out why before you look.

Then write two inputs of your own: a tiny one (N equal to 1) and an awkward one, such as all ties in problem 1 or no snow at all in problem 2. Predict the output by hand first.

### What the three have in common

None needs an algorithm a Grade 8 student has not met. Each needs the statement read twice: a strict comparison, a run that ends at the edge, a space that must survive.

That is the lesson family behind this page: treat the input and output description as a contract, and test the contract before the clever part.

## A 16-week CCC Junior plan, from October 2026 to contest day

Our plan for a student writing Junior on Wednesday 17 February 2027, the date CEMC lists for the Americas. It assumes two live one-hour classes a week, as in our CCC course, a short problem set between them, and lighter weeks over the winter break. Our full course season began in September 2026; this plan is for a student who begins in late October 2026.

1. Late October 2026, before week 1: ask the school's math or computer science teacher whether it orders the 2027 CCC, and if not, start looking for a host school. Create a free CCC Online Grader practice account and read one old Junior paper from CEMC's archive without timing it.
2. Weeks 1 to 2 (2 to 15 November 2026): the input and output contract. Reading a count then N lines, reading a list from one line, printing exactly the required lines. Practice problem 1 above.
3. Weeks 3 to 4 (16 to 29 November 2026): loops and conditions with exact wording: strict and non-strict comparisons, ties, the first and last item. Questions 1 and 2 from three past Junior papers.
4. Weeks 5 to 6 (30 November to 13 December 2026): counting and simulation: running totals, streaks, a state that changes step by step. Practice problem 2, then a past question 3.
5. Weeks 7 to 8 (14 to 27 December 2026): strings, character by character, with slicing and building answers. Practice problem 3. Shorter sessions over the holidays: one problem a day is plenty.
6. Weeks 9 to 10 (28 December 2026 to 10 January 2027): lists, dictionaries for counting, and a first two-dimensional grid with nested loops. The first full timed Junior paper, three hours, at the end of week 10.
7. Weeks 11 to 12 (11 to 24 January 2027): question 5 material at Junior level: a first look at recursion, grids, and spotting a faster method. Practise taking the subtask points with a simple, slow program first.
8. Weeks 13 to 14 (25 January to 7 February 2027): two more timed papers in three-hour sittings, each reviewed line by line with the teacher. Settle the level and confirm the school's order before CEMC's Thursday, February 11, 2027 deadline.
9. Week 15 (8 to 14 February 2027): no new topics. Re-solve the problems missed in the timed papers and try the Practice Contest, which CEMC strongly recommends every participant attempt.
10. Week 16 (15 to 17 February 2027): light review, a good night's sleep, and the contest at school on Wednesday 17 February 2027. Afterwards, nothing about the problems online for 48 hours, as the rules ask.

### Grades 6 to 8

Weeks 1 to 8 matter most. A first paper with questions 1 to 3 solved cleanly is a strong start.

### Grades 9 to 10

The full sixteen weeks, with question 4 as the target and question 5 subtasks as the stretch.

### Grades 11 to 12

Faster through weeks 1 to 6, then the question 5 work and an honest look at Senior.

## From CCC Junior to Senior, the CCO and the IOI

Junior is a contest in its own right, but CEMC's pages show it as the first rung of a longer ladder. CEMC describes every step above it in terms of the Senior paper.

**The CCC pathway, from CEMC's CCC and IOI pages (read 22 October 2026)**

| Step | What CEMC says |
|---|---|
| CCC Senior | The Senior question 5 is described as an "IOI level question". |
| Canadian Computing Olympiad | "Approximately 20 of the top official CCC Senior participants from schools in Canada are invited to the CCO at the University of Waterloo each spring." |
| What the CCO is | A "week-long learning experience featuring workshops, a contest and other extracurricular activities". |
| CCO language | "CCO participants must use C++." |
| International Olympiad in Informatics | The CCO "is also used to select Canada's teams for the International Olympiad in Informatics (IOI)". |
| How Canada enters the IOI | "Canada's entry into the annual IOI competition is determined by performance on the" Canadian Computing Competition. |
| Who decides | Selection of CCO participants and IOI team members "is at the discretion of the CEMC". |

### What a Junior student adds to reach Senior

Senior questions 1 and 2 begin where Junior question 5 ends: sorting, searching and choosing an efficient method. The season after a first Junior paper is mostly about speed of thought on those ideas, and about the mathematical reasoning CEMC names for Senior questions 3 and 4.

A move from Python to C++ belongs in that year too, for a student who wants the CCO in view, because the CCO accepts only C++.

### Keeping the ladder in proportion

About 20 invitations a year, across the whole country, is a very small number. For nearly every student the honest goal is a strong CCC paper, and the skills behind it.

We cannot influence any invitation. CEMC decides on results, at its discretion, and we say so to every family that asks.

Sources: [CEMC, CCC and CCO](https://cemc.uwaterloo.ca/contests/ccc) and [Canada at the IOI](https://cemc.uwaterloo.ca/contests/ccc/ioi), read 22 October 2026. For the full Senior route, see our [CCC preparation page](/canadian-computing-competition-ccc-prep).

## CEMC's free past contests and resources

The richest store of CCC Junior problems belongs to CEMC, and it is free. CEMC says of its resources: "There is no registration or fee required to access these materials." We never reproduce those problems on our pages; we send students to the originals.

**Free CEMC resources for a CCC Junior writer (read 22 October 2026)**

| Resource | What CEMC says it is | How we use it |
|---|---|---|
| [Past contests, solutions and results](https://cemc.uwaterloo.ca/resources/past-contests) | "Below you will find resources from the last 10 years." The CCC can be filtered by year, from 2016 to 2026. | One past Junior paper every two to three weeks, untimed at first, timed from January 2027 |
| [CCC Online Grader](https://cccgrader.com/) | "the system used to run the Canadian Computing Competition", which "also provides access to practice problems and previous contests" | Every past problem is submitted to the grader, so students meet its verdicts long before the contest |
| [Computer Science Circles](https://cscircles.cemc.uwaterloo.ca/) | CEMC's Python programming tutorials | Revision for a student whose loops or lists are still shaky |
| [CEMC Courseware](https://cemc.uwaterloo.ca/resources/courseware) | Math and computer science lessons for Grades 4 to 12; "No registration is required" | Background math for Senior-bound students |
| Books CEMC names | Competitive Programming by Halim and Halim, and Competitive Programmers Handbook by Antti Laaksonen | Reading for students moving from Junior towards Senior |

A note on honesty with past papers: a solution read before the problem is attempted teaches far less than one struggled towards. We ask students to spend at least twenty minutes on a past problem before opening CEMC's solution, and to explain the official solution back in their own words afterwards. The [CEMC resources page](https://cemc.uwaterloo.ca/resources) lists everything else CEMC offers.

## Class times across Canadian time zones

Our live classes are arranged in Eastern time and converted for each family, because students join from every province. There is no fixed batch time on this page; you choose the slot that suits you.

**UTC offsets for winter 2026 to 2027 and summer 2027 (from the tz database, release 2026e)**

| Where | Winter (from 1 November 2026) | Summer (from 14 March 2027) |
|---|---|---|
| British Columbia (most), Yukon | UTC-7 | UTC-7, all year (in BC since 8 March 2026) |
| Alberta, Saskatchewan | UTC-6 | UTC-6, all year |
| Manitoba | UTC-5 | UTC-5, all year from 1 November 2026 |
| Ontario and Quebec (ET) | UTC-5 | UTC-4 |
| Nova Scotia, New Brunswick, Prince Edward Island (AT) | UTC-4 | UTC-3 |
| Newfoundland (NT) | UTC-3:30 | UTC-2:30 |

Eastern clocks go back on Sunday 1 November 2026 and forward on Sunday 14 March 2027, so a class time agreed in Toronto in October 2026 shifts for a family in Calgary or Vancouver when the clocks change. We confirm the time with each family at both changes. The contest itself follows the school day: CEMC asks each school to start it near the beginning of its own day on Wednesday 17 February 2027.

## Four stages on the way to a CCC Junior paper

Our stages, to place a student honestly in the first class.

**From first program to a Junior paper (ours)**

| Stage | What it looks like |
|---|---|
| 1. Typing code | Can follow a tutorial and change a program, but not yet write one from a blank file |
| 2. Writing code | Writes short programs with loops, conditions and lists without help |
| 3. Reading problems | Turns a written problem into input, processing and output, and tests the sample |
| 4. Contest ready | Solves Junior questions 1 to 3 from past papers inside the time, and knows why a submission failed |

### For parents

A student at stage 1 in October 2026 can still write a respectable Junior paper on Wednesday 17 February 2027 with steady weekly work. Stage 2 by December 2026 is the milestone to watch.
The step from stage 2 to stage 3 is where a teacher helps most, because the problem is no longer the code but the reading.

### For students

Print what you read before you solve anything. Half of all early bugs are input bugs.
Keep a list of every wrong answer and its cause. By February 2027 it is the most useful page you own.

## Nine courses around the CCC, from first programs to Senior

Each is taught live online by one regular teacher, in a batch or one to one, for students anywhere in Canada.

### Building the base

Before a first Junior paper

- [Python for kids](/courses/python-ai-kids-masterclass): Typed code for younger students in Grades 5 to 7.
- [Java for teens](/courses/java-programming-masterclass-for-teens): One of the five CCC languages, from scratch.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic and data structures, step by step.

### Junior to Senior

Grades 9 to 12

- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): The language the CCO requires.
- [High school math](/courses/complete-high-school-mathematics-mastery): The reasoning Senior questions 3 and 4 ask for.
- [Competition math](/courses/olympiad-competition-mathematics-mastery): For students also writing math contests.

### Going further

Strong coders and university

- [Competitive programming, advanced](/courses/competitive-programming-masterclass-college): Contest technique beyond high school.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The systematic treatment, for ages 18 and up.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): For schools that offer AP, in Java.

## Live CCC classes that fit a Canadian school week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school batches, with the time converted to your province.
- **Weekends** Weekend mornings leave the school week free for homework.
- **1-on-1** Timed around the student, and paced to the 2027 contest date.

- **Problems we wrote** Original practice sets, with CEMC's archive for past papers.
- **Grader-style testing** Exact input and output, checked like the real thing.
- **Timed papers** Three-hour sittings from January 2027, reviewed afterwards.
- **Python, then C++** Python for Junior; C++ when Senior comes into view.
- **Coast to coast** Students from British Columbia to Newfoundland.
- **Batch or one to one** A batch of fifteen to twenty, or a teacher to yourself.

## Fees

The contest fee is the school's business with CEMC. Our fee covers the teaching only, paid one month at a time with no contract for the season, so a student can stop after February 2027 without anything owed.

- Free first class: USD 0. A free first class. A short Junior-style problem to start. No card details asked for.
- Group batch: USD 100 a month. Fifteen to twenty students in a batch. One teacher all season. Pick the batch that suits you. Billed monthly.
- One to one: USD 150 a month. A teacher to yourself. Paced to the 2027 contest. Built on your own code.

## CCC Junior: common questions

### What is CCC Junior?

It is the Junior level of the Canadian Computing Competition, run by CEMC at the University of Waterloo. CEMC describes Junior as being for any participant with beginner to intermediate programming skills, whatever their grade. Students solve five programming problems online, at school.

### When is the CCC in 2027?

CEMC lists the 2027 CCC for Wednesday, February 17, 2027 in North and South America, and Thursday, February 18, 2027 elsewhere. The ordering deadline for schools is Thursday, February 11, 2027.

### How long is the CCC?

Three hours. CEMC says an individual 3-hour timer starts when the student enters their details in the CCC Online Grader. A student who opens both Junior and Senior has a maximum of 3 hours in total across the two.

### How many questions are on CCC Junior, and how is it scored?

Five questions, each worth 15, for a score out of 75. CEMC says problems may have subtasks with partial scores, and the grader keeps the highest score across a student's submissions for each problem.

### Should my child write CCC Junior or Senior?

CEMC lets each student choose a level regardless of grade. Our rule of thumb: if past Junior questions 4 and 5 are solved comfortably inside the time, Senior is the more useful paper. CEMC invites about 20 of the top official CCC Senior participants from schools in Canada to the Canadian Computing Olympiad, at its discretion.

### Can a student register for the CCC on their own?

No. CEMC says it is not possible for students to individually register, and all students must participate through their school. If their own school is not taking part, CEMC suggests looking for another local school that will let them join.

### Can a homeschooled student write the CCC?

CEMC's pages that we read describe one route for a student whose school does not take part: another local school that agrees to host them. The contest must be written in person at the ordering school, under supervision, so ask a nearby school early.

### Which programming languages can be used on the CCC?

CEMC allows C, C++, Python 2, Python 3 and Java, and the contest is available in English and French. The CCO, the next step after Senior, requires C++.

### Can students use AI tools or the internet during the CCC?

Only for editing, compiling, submitting and reading official language documentation. The CCC rules forbid generative AI and AI tools inside an editor. Outside the contest, ChatGPT needs a parent's permission for anyone under 18.

### Where can I find CCC Junior past problems?

CEMC publishes past contests, solutions and results free on its website, covering the last ten years, and the CCC Online Grader lets students open a free practice account. We do not copy those problems; we link to them and write our own practice sets.

### What times are CCC classes for Canadian families?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We arrange times in Eastern time and convert them for your province.

### Does the CCC help with university admission?

CEMC states that taking part in the CCC is not required for admission to the Faculty of Mathematics at the University of Waterloo. Its value is the problem solving a student builds while preparing, which no contest result can promise.

## Related pages

- [Coding classes in Canada](/coding-classes-in-canada): Every page we have for families across Canada.
- [CCC preparation](/canadian-computing-competition-ccc-prep): Our main CCC page, with the Senior route in detail.
- [CEMC Waterloo contests](/cemc-waterloo-contests-preparation): The math contests CEMC runs for Grades 7 to 12.
- [Online math tutor, Canada](/online-math-tutor-canada): Math help that sits under a Senior paper.
- [IOI training](/ioi-olympiad-informatics-training): What the top of the informatics ladder asks.
- [USACO preparation](/usaco-preparation-online-coaching): Another online contest many CCC writers try.
- [How to debug code](/how-to-debug-code): Finding the bug a wrong-answer verdict hides.
- [Think like a programmer](/how-to-think-like-a-programmer): Turning a problem statement into steps.
- [Python indentation errors](/python-indentation-error-explained): The error first-time contest writers meet most.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ccc-junior-guide](https://learn.modernagecoders.com/ccc-junior-guide#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
