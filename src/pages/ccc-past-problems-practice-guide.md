---
title: "CCC Past Papers: How to Practise with CEMC's Archive"
description: "Where to find Canadian Computing Competition past papers, how the CCC Grader judges a submission, and a six-step method and local checker for practice."
canonical: https://learn.modernagecoders.com/ccc-past-problems-practice-guide
source: src/pages/ccc-past-problems-practice-guide.html
---
> CCC past papers, with solutions and results, are free on CEMC's past contests page, and the CCC Online Grader lets students submit old problems and get the real verdicts. They pay off when used slowly: attempt, test, compare, re-solve. Modern Age Coders runs this practice live online, batch or one to one, in its CCC Junior and Senior Preparation course.

[Home](/) / [Courses](/courses) / [Coding classes in Canada](/coding-classes-in-canada) / CCC past problems practice

Canada · Canadian Computing Competition · Past papers

# How to practise with CCC past papers

Every CCC writer is told to "do past papers", and most do them badly: a quick read, a peek at the solution, and on to the next. The Centre for Education in Mathematics and Computing (CEMC) gives Canadian students an unusually good archive, free, and the same online grader the real contest uses. This guide shows where the past papers live, how the CCC Online Grader judges a submission, the pitfalls its own instructions warn about, a six-step method that makes one past problem worth an evening, and a small checker we wrote so students can test their programs exactly the way a grader does. We never reproduce CEMC's problems here; we point to them.

At a glance: Archive: CEMC past contests, free; Years: Filter runs 2016 to 2026; Practice system: CCC Online Grader; Account needs: The school's CEMC number; Problems per paper: 5, Junior or Senior; 2027 contest: 17 February 2027; Classes: Weekdays or weekends, flexible; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses built on past-paper practice

Past papers are free; what a teacher adds is the review afterwards. These are the courses where that happens.

- [CCC Junior and Senior Preparation](/courses/ccc-junior-and-senior-preparation-course): Past papers worked weekly with a teacher, then timed three-hour sittings from January 2027.
- [Competitive programming for teens](/courses/competitive-programming-for-teens-course): For students who have exhausted the easy past problems and need the algorithms for the hard ones.
- [Python for teens](/courses/python-complete-masterclass-teens): For a student whose past-paper attempts stall on the language, not the problem.

## Where CEMC keeps CCC past papers, solutions and results

Two CEMC systems hold the past CCC material, and they do different jobs. One is a library to read; the other is a judge to submit to. Every description below is from CEMC's own pages, read on 22 October 2026.

**The CCC practice material CEMC publishes (read 22 October 2026)**

| Where | What CEMC says it holds | Use it for |
|---|---|---|
| [Past contests, solutions and results](https://cemc.uwaterloo.ca/resources/past-contests) | "Problems, solutions and results from previous years can be found in the table below." The text says "resources from the last 10 years"; the year filter lists 2016 to 2026. | Reading problems, official solutions and results booklets |
| [CCC Online Grader](https://cccgrader.com/) | "It also provides access to practice problems and previous contests." CEMC calls it the place "where participants can create a free practice account and access previous contests". | Submitting your own program and getting real verdicts |
| [Sample programs document](https://cccgrader.com/sample_soln.pdf) | CEMC's example programs "illustrating input and output", one per language, with each compiler version | Checking how input should be read in your language |
| Practice Contest on the grader | CEMC: "We strongly recommend that every participant attempt the Practice Contest." | One rehearsal of the contest system before February 2027 |

### What CEMC intends the archive for

CEMC states the purpose plainly: "These resources can be used by students to review and attempt past contests to gain a better understanding of the contest format and level of difficulty." It describes the archive as free, and its ordering terms add that "Resources are available on the CEMC website at no cost."

Notice the order in that sentence: attempt, then understand. The archive is built to be tried, not just read.

### Why we never copy the problems

CEMC's terms say its materials are licensed under a Creative Commons Attribution-NonCommercial 4.0 International licence. We teach for a fee, so we treat CEMC's problems as theirs: we link to them, we discuss them in class with the original open on screen, and we write our own problems for anything we publish.

For families this has a useful side effect. A student who practises from CEMC's own archive is reading the real wording, formatting and constraints, not someone's retelling of them.

Sources: [CEMC past contests](https://cemc.uwaterloo.ca/resources/past-contests), [CEMC CCC page](https://cemc.uwaterloo.ca/contests/ccc), [CEMC terms and conditions](https://cemc.uwaterloo.ca/online-ordering-terms-and-conditions) and the CCC Online Grader home page, read 22 October 2026. We are not connected with CEMC or the University of Waterloo.

## Setting up a CCC Online Grader account for practice

The grader account a student practises with is the same one used on contest day, so it is worth setting up early in the school year. The steps follow the grader's registration page and its instructions document.

1. Get the school number from a teacher. The registration page says: "You will need your school's CEMC "school number", which is what was used to register your school for the CCC: your math or computer science teacher will have that number." CEMC's CCC page tells teachers to hand students the school number but never the school's password, which a student does not need.
2. Register on the grader. Fill in name, date of birth, the school number, email and a password on cccgrader.com/register.php.
3. Wait for the teacher. "After this, your teacher will need to authenticate you as a student." The teacher approves the account from the grader's teachers' page.
4. Watch for the email. The instructions say the student then receives a message that the account in the CCC Contest System has been created, with the username.
5. Log in and enter a past contest. From the main page, "Enter" a contest, choose a "Problem", choose a "Language", upload the file with "Browse" and press "Submit".
6. Read the submission page. It shows the score and the result of each test case as the program runs; refreshing updates it.

A student whose school does not take part in the CCC has no school number to register with. The grader's instructions also mention that each school has its own "school account" that teachers can use to submit solutions, so a teacher who supports a student's practice can try problems that way. For how entry to the contest itself works, CEMC's rules on the [How contests work](https://cemc.uwaterloo.ca/contests/how-contests-work) page apply.

## How the grader judges a submission, verdict by verdict

Every past problem submitted to the grader comes back with one of six verdicts per test. Learning to read them is half of what past-paper practice is for. The verdict names and their examples are quoted from the grader's instructions; the right-hand column is our advice.

**CCC Grader verdicts, from the grader's instructions document (read 22 October 2026), with our advice**

| Verdict | The grader's example | What to do next (ours) |
|---|---|---|
| correct | "your output matches the expected output exactly" | Move on, or try the problem again a week later from a blank file |
| wrong answer | "your program gave incorrect output" | Re-read the output section; then test the smallest and largest inputs by hand |
| time-limit exceeded | "your program took too long to find an answer" | Estimate the steps for the largest input; the method, not the code, usually needs to change |
| run-time error | "segmentation fault in your program" | Look for an index past the end of a list, a division by zero, or recursion that runs too deep |
| compilation error | "your program did not compile" | Check the language chosen in the menu, and for Java the class name |
| skipped test | "within one test batch, you have failed one of the tests, and thus the remainder of the tests within that batch have been skipped" | Fix the first failure in the batch; the skipped tests say nothing yet |

### Feedback on the samples is guaranteed

The CCC rules say "Feedback is always provided for the sample test cases." A program that fails the sample on the grader but passed it at home is almost always reading input differently from the way the grader supplies it.

The rules also fix the shape of input and output: standard input and standard output only, and "Submitted programs must not read or write to files."

### Why exact matters

The grader compares output with the expected answer exactly. That one fact explains most of the wrong answers we see from students who are sure their logic is right: an extra word, a missing line, a label in front of the number.

The checker in a later section is built to be just as strict, so those mistakes surface at home, before the grader sees them.

## The pitfalls the grader's own instructions warn about

The grader's instructions end with a short list headed "How to avoid common pitfalls". Each one is a mark lost by someone. The quotes are the instructions' own words; the fixes are ours.

**Common pitfalls, quoted from the CCC Grader instructions (read 22 October 2026), with our fixes**

| The instructions say | Our fix |
|---|---|
| Filenames should contain "only alphanumeric, underscore" or dash characters | Name files like j3.py or s2_v2.cpp; no spaces, no accents |
| "Python 2 programs and Python 3 programs are not interchangeable." | Always pick Python 3 in the menu unless you truly wrote Python 2 |
| Java programs must be in a file called Main.java, with public class Main | Start every Java practice file from that line |
| "Use at most one such input object to read from System.in." | One Scanner or one BufferedReader per Java program, created once |
| To get a perfect score, "fast input" is sometimes required | In C++, scanf or a faster cin setup; in Python, read sys.stdin.buffer once |
| Python's recursion depth can be raised with "sys.setrecursionlimit(limit)" | Raise it at the top of any recursive Python solution, or rewrite the recursion as a loop |

The instructions add a warning about live contests that is worth practising for: "the system will generate an automatic logout after approximately 10 minutes of inactivity." The timer keeps running, and the student can log in again and carry on while time remains. In a mock paper at home, a student who thinks for long stretches should expect to log in again, and not be thrown by it.

## A six-step method for one past problem

This is the method our teachers use for every past CCC problem a student attempts. It is ours, and it is slow on purpose: one problem done this way teaches more than five read through.

1. Read it twice, then restate it. Open the problem from CEMC's archive. After two readings, write the input, the output and the rule in three plain sentences of your own.
2. Do the sample by hand. Work the sample input on paper until you get the sample output. If you cannot, the statement is not yet understood, and no code will help.
3. Write the simplest correct program. Ignore speed. Make it right for small inputs, and check it on the sample with the local checker in the next section.
4. Make your own tests. Add at least two: a tiny input and an awkward one, such as all values equal or a single item. Predict the output before running.
5. Submit, and read the verdicts. On the grader, note which tests pass. A time-limit verdict on the later tests means step 3 was right but too slow; now think about a faster method.
6. Only then, read CEMC's solution. We ask for at least twenty-five minutes of honest effort first. Afterwards, close it and re-solve the problem from a blank file a week later.

### Why step 6 waits

A solution read too early feels like understanding and fades within days. A solution read after a real struggle answers a question the student has already asked, and it stays.

The re-solve a week later is the real test. If the student can write it again without looking, the idea has moved from CEMC's page into the student's head.

### What to keep in a notebook

For every past problem: the year and number, the verdicts on each submission, the cause of each failure in one line, and the key idea of the solution in one sentence.

By February 2027, that notebook is a personal list of the mistakes most likely to cost marks on contest day, which is worth more than any list of tips.

## A local checker that judges like a grader

Students test at home by eye, and eyes forgive small differences. A grader does not. We wrote this short Python program for our students: it runs a solution on every test file in a folder and compares the output exactly, reporting verdicts in the grader's own words. It is ours, not CEMC's.

**judge.py · our local checker (Python)** (python)
```python
# Our local checker: runs a program on every .in file in a folder and
# compares its output with the matching .out file, exactly, like a grader.
# Usage: python judge.py tests python cold_days.py
import subprocess
import sys
import time
from pathlib import Path

LIMIT = 3.0  # seconds per test, the CCC default

def verdict(cmd, test_in, test_out):
    start = time.time()
    try:
        run = subprocess.run(cmd, stdin=open(test_in), capture_output=True,
                             text=True, timeout=LIMIT)
    except subprocess.TimeoutExpired:
        return "time-limit exceeded"
    if run.returncode != 0:
        return "run-time error"
    got = run.stdout.rstrip("\n").split("\n")
    want = test_out.read_text().rstrip("\n").split("\n")
    if got != want:  # strict on purpose: even a trailing space fails
        return "wrong answer"
    return "correct (%.2f s)" % (time.time() - start)

folder, cmd = Path(sys.argv[1]), sys.argv[2:]
for test_in in sorted(folder.glob("*.in")):
    print(test_in.name, verdict(cmd, test_in, test_in.with_suffix(".out")))
```
Put each test in a folder as a pair of files, 01.in with the input and 01.out with the expected output. The checker gives each test three seconds, the CCC's default, and treats any difference, even a trailing space, as a wrong answer.

Our practice problem: Cold Days. Given N daily temperatures in degrees Celsius, print how many of them are below zero. Input: N on the first line, then N whole numbers on one line. Output: one integer. It is deliberately easy, because the point here is the checking, not the problem.

**One test pair for Cold Days** (text)
```text
tests/01.in
5
-3 2 0 -11 4

tests/01.out
2
```

**cold_days.py · our solution** (python)
```python
# Our practice problem: Cold Days (not a CEMC problem)
n = int(input())
temps = list(map(int, input().split()))
print(sum(1 for t in temps if t < 0))
```

**cold_days_prompt.py · the same logic with a friendly prompt** (python)
```python
# The same program with a friendly prompt: the grader marks it wrong
n = int(input("How many days? "))
temps = list(map(int, input().split()))
print(sum(1 for t in temps if t < 0))
```

**What our checker printed on 22 October 2026** (text)
```text
$ python judge.py tests python cold_days.py
01.in correct (0.03 s)
02.in correct (0.03 s)
03.in correct (0.03 s)

$ python judge.py tests python cold_days_prompt.py
01.in wrong answer
02.in wrong answer
03.in wrong answer
```
Both programs count correctly. The second fails every test because the words "How many days? " are printed to standard output in front of the answer. The CCC rules forbid exactly this: output must match the problem's format, with no prompts. Times will differ on your computer.

### How to use it with a past problem

Copy the sample input and output from the CEMC problem into 01.in and 01.out. Add your own tests from step 4 of the method as 02, 03 and so on. Run the checker after every change.

When everything says correct at home, submit to the grader. If the grader disagrees, you have learnt something specific about the hidden tests, which is the most useful thing a wrong answer can teach.

### What it does not do

It does not know CEMC's hidden tests, measure memory, or reproduce the grader's exact speed. A program that is fast here may still time out on the grader's largest inputs.

It is a habit-builder: run, compare exactly, read the verdict. Students who use it stop losing marks to output formatting within a few weeks.

## Which past problems to do, and in what order

With a full paper of five problems for each level in each year, the archive is large: our arithmetic gives up to 55 Junior and 55 Senior problems across the eleven years in the filter (11 x 5). Nobody needs all of them. This order is ours.

**Working through the CCC archive (our plan)**

| Phase | Which problems | How many | Goal |
|---|---|---|---|
| 1. Across the years | Problem 1 from several recent Junior papers, then problem 2 | About 10 | Fluent input and output; every one correct on the first or second submission |
| 2. Middle of the paper | Junior problems 3 and 4 from recent years | About 10 | Counting, simulation and strings with careful reading |
| 3. The top of Junior | Junior problem 5, subtasks first | About 5 | Taking partial marks with a simple method |
| 4. Senior entry | Senior problems 1 and 2 | About 10 | Sorting, searching and efficient methods |
| 5. Full papers | Two or three whole papers at the chosen level, timed | 2 to 3 papers | Three hours of decisions, from January 2027 |

### Across first, then down

Doing the same question number across several years first lets a student meet one level of difficulty many times. Once problem 1 is reliably correct, problem 2, and so on. Whole papers come last, when the student can already handle each part.

Keep the two most recent years untouched until the end. They are the closest match to the next contest, and are worth saving for timed practice.

### Honesty in practice

The contest bans outside help, and practice should copy that. The rules spell it out: "All other Internet use is forbidden. This includes email, chat, web search, code forums, and generative AI".

We ask students to practise with only the official language documentation open. A problem solved with a search engine open has not been solved by the student.

## Four stages of past-paper practice

How our teachers see a student's practice change over a season. The stages are ours.

**From reading past papers to learning from them (ours)**

| Stage | What it looks like |
|---|---|
| 1. Reading | Reads problems and solutions; submits rarely |
| 2. Submitting | Submits often, but fixes by trial and error |
| 3. Testing | Tests locally with own cases before each submission |
| 4. Re-solving | Re-solves old problems from memory and keeps a mistakes notebook |

### For parents

Count submissions, not problems read. A week with three problems submitted and understood beats a week with ten skimmed.
Ask to see the mistakes notebook. Its length is a good sign, not a bad one.

### For students

Never open a solution before you have something to compare it with.
When the grader says wrong answer, believe it. Look for the case you did not test.

## Nine courses for students using the CCC archive

Taught live online by one regular teacher, as a batch or one to one, wherever in Canada the student lives.

### Language first

Before the archive

- [Python and AI for kids](/courses/python-ai-kids-masterclass): For Grades 5 to 8, before Junior.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For schools that teach Java.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): For Senior and the CCO.

### Contest practice

Grades 9 to 12

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Methods for the middle problems.
- [High school math](/courses/complete-high-school-mathematics-mastery): For counting and reasoning questions.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java with exam discipline.

### Further

University level

- [Competitive programming, advanced](/courses/competitive-programming-masterclass-college): Beyond school contests.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): For ages 18 and up.
- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Deeper Python, ages 18 and up.

## Live past-paper sessions on a Canadian timetable

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Short after-school sessions for one problem at a time.
- **Weekends** Weekend mornings for full timed papers.
- **1-on-1** A review of the student's own submissions, line by line.

- **CEMC's archive** Original problems opened from CEMC, never copied.
- **Exact testing** Every solution checked the way the grader checks it.
- **Verdict reading** Each failed test turned into a lesson.
- **Re-solves** Old problems revisited from a blank file.
- **Every province** Students join from coast to coast.
- **Batch or one to one** Fifteen to twenty in a batch, or one student.

## Fees

CEMC's past papers are free, and stay free in our classes. What we charge is a monthly fee for live teaching and review, with no contract, so a family can stop whenever the season ends.

- Free first class: Free. A free first class. One past problem worked with the six-step method. No card needed.
- Group batch: CAD 140 a month. Fifteen to twenty students in a batch. The same teacher every week. A batch time that works for you. Paid each month.
- One to one: CAD 210 a month. One student, one teacher. Your own submissions reviewed. Paced to 17 February 2027.

## CCC past problems: common questions

### Where can I find Canadian Computing Competition past papers?

On CEMC's past contests, solutions and results page, which is free. Its year filter runs from 2016 to 2026. Past problems can also be opened and submitted on the CCC Online Grader.

### Are CCC solutions available?

Yes. CEMC publishes solutions alongside past problems and results in its archive. We suggest reading a solution only after at least twenty-five minutes of real effort, then re-solving the problem a week later.

### Can my child submit past CCC problems for grading?

Yes. The CCC Online Grader offers previous contests and practice problems, and gives the same verdicts as on contest day: correct, wrong answer, time-limit exceeded, run-time error, compilation error, or a skipped test.

### Does a student need a school number for a CCC Grader account?

Yes. The grader's registration page asks for the school's CEMC school number, which the math or computer science teacher has, and the teacher then authenticates the student. The school's password is never needed.

### How many CCC past problems are there?

Each level has five problems a year. With the archive's filter covering 2016 to 2026, our count is up to 55 Junior and 55 Senior problems. Ten well-understood problems are worth more than fifty skimmed.

### Which CCC Junior problems should a beginner start with?

Problem 1 from several recent years, then problem 2. Doing the same question number across years builds reliability before a student faces full papers.

### Why does my program pass at home but fail on the grader?

Most often the output is not exactly what the problem asks for, such as an input prompt or an extra word. Next most common are the wrong Python version in the menu, or input read in a different way from the grader's.

### Can students use AI tools while practising?

We advise against it, because the CCC rules forbid generative AI and web search during the contest, and practice should match the real conditions. Outside the contest, ChatGPT also needs a parent's permission for anyone under 18.

### Do you copy CCC problems into your course?

No. CEMC licenses its materials for non-commercial use, so we open CEMC's problems from its own site in class and write our own problems for anything we publish.

### When are your CCC practice classes for Canadian families?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The time is set in Eastern time and given to you in your province's time.

## Related pages

- [CCC preparation](/canadian-computing-competition-ccc-prep): Our CCC coaching, Junior and Senior.
- [CCC Junior guide](/ccc-junior-guide): The 2027 Junior paper, with original problems.
- [Coding classes in Canada](/coding-classes-in-canada): All our pages for families in Canada.
- [How to debug code](/how-to-debug-code): What to do after a wrong-answer verdict.
- [How to read code](/how-to-read-code): Reading an official solution properly.
- [Python indentation errors](/python-indentation-error-explained): A common first run-time surprise.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ccc-past-problems-practice-guide](https://learn.modernagecoders.com/ccc-past-problems-practice-guide#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
