---
title: "Understand the Code, Don't Copy-Paste | Australian Students"
description: "For Australian students: why pasted code fails quietly, how a written contract catches it, and how understanding each line keeps school work honest and your own."
canonical: https://learn.modernagecoders.com/understand-the-code-dont-copy-paste-australia
source: src/pages/understand-the-code-dont-copy-paste-australia.html
---
> Understanding code means being able to say what a function should return for any input, then checking that it does. A precise statement of that promise is called a postcondition. In our test, a pasted median function passed a loose postcondition on all 10,000 random lists, yet gave the wrong answer 4,219 times, which an exact postcondition caught every time. Pasting skips the understanding that writes the exact check.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Understand the code

Australia · Years 7 to 12 and adults · Own every line

# Understand the code, don't copy-paste

Copying code has never been easier. A forum answer, a tutorial or an AI assistant will hand a student a function that runs first time, and it is tempting to drop it in and move on. The trouble is that code which runs is not the same as code which is right, and a student who does not understand a function cannot tell the difference. This page shows the problem with a real experiment: one short, pasted function, ten thousand test inputs, and two ways of checking it. One check passed it every time. The other caught it failing thousands of times. The difference was whether the person checking understood what the function was supposed to do.

At a glance: For: Secondary students and adults; Focus: Reading, predicting and testing code; Tools: Assertions and written contracts; Languages: Python first, then Java or JavaScript; Integrity: We never write assessed work; Format: Live online video; Group: Five to ten, or one to one; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses built on reading and testing code

Each one asks students to predict, explain and test what they write. The free first lesson chooses between them.

- [Python, line by line](/courses/python-complete-masterclass-teens): Ages 13 to 18. Every program predicted on paper before it runs.
- [Logic and algorithms for teens](/courses/problem-solving-dsa-masterclass-teens): Ages 13 to 18. Data structures you can explain, not just use.
- [Version control, honestly](/courses/git-github-version-control-course-for-teens): Ages 13 to 18. A history of your own work that shows how it grew.

## Running is not the same as right

Pasted code usually fails in one of two ways. Either it crashes, which is easy to notice, or it quietly returns a wrong answer for some inputs, which is not. The second kind is the dangerous one, and only understanding catches it.

### What the curriculum expects

The Australian Curriculum v9 says that by the end of Year 10 students verify their solutions "by validating their algorithms, represented as flowcharts and pseudocode, and using test cases to confirm the correctness of their solutions".

A test case confirms correctness only if the student knows what the correct answer is. That knowledge is exactly what pasting skips.

### Reading other people's code

The same curriculum includes, as an example for Years 9 and 10, "reading and interpreting programs split across files, functions or classes, and modifying them to add functionality".

Reading code is a skill to practise, not a sign of laziness. The difference from pasting is that reading ends in understanding.

Source, read 7 October 2026: ACARA, [Australian Curriculum v9, Digital Technologies content, Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx) (Year 10 band description, and an elaboration under AC9TDI10P09).

## One pasted function, ten thousand lists

We took a short median function of the kind that circulates online: sort the list and return the middle item. It runs without error on any list of numbers. Then we checked it two ways on 10,000 random lists of 1 to 12 whole numbers between 0 and 20.

**The pasted function against two postconditions (our experiment, Python, fixed random seed 2026)**

| What we measured | Result |
|---|---|
| Random lists tested | 10,000 |
| Lists with an even number of items | 4,962 |
| Wrong answers returned by the pasted function | 4,219 |
| Failures caught by the loose postcondition: no more than half the items below the answer, no more than half above | 0 |
| Failures caught by the exact postcondition: the middle item for odd lengths, the mean of the two middle items for even lengths | 4,219 |

### Why the function is wrong

For a list with an odd number of items, the middle item is the median, and the pasted code is right. For an even number, the median is halfway between the two middle items, and the code returns only the upper one.

It was right for every odd-length list and for even-length lists whose two middle items happened to be equal, which is why it looks fine in a quick test.

### Why the loose check missed it

The loose check is true of the real median, so it sounds sensible. But it is also true of any value between the two middle items, so it cannot tell a right answer from a nearly right one.

Only someone who knows the definition of a median writes the exact check. That knowledge is the understanding that pasting skips.

**The lesson in one line** A test can only be as precise as the tester's understanding. Weak understanding writes weak tests, and weak tests pass wrong code.

## Postconditions: promises a function must keep

A postcondition is a statement that must be true when a function finishes. Writing it down forces the writer to understand what the function promises, and checking it automatically catches the moment the promise is broken. The approach is often called design by contract.

**Postconditions for three everyday functions**

| Function | Its postcondition, in words |
|---|---|
| Sort a list | The result has the same items as the input, and each item is no larger than the next |
| Find the median | For an odd length, the middle item; for an even length, the mean of the two middle items |
| Convert minutes to hours and minutes | Hours times 60, plus minutes, equals the input, and minutes is between 0 and 59 |

### Checking with assert

In Python, the simplest way to check a postcondition is an assert statement. The Python Language Reference describes it as "a convenient way to insert debugging assertions into a program", equivalent to raising an AssertionError when the condition is false.

A student who writes assert lines for their own functions is writing their understanding down, where the computer can check it.

### A catch worth knowing

The same reference explains that assertions run only while the built-in __debug__ is true, and that "the current code generator emits no code for an assert statement when optimization is requested at compile time".

So asserts are for checking during development, not for guarding a finished program. Real input validation needs ordinary if statements.

Source, read 7 October 2026: [The Python Language Reference, simple statements, "The assert statement"](https://docs.python.org/3/reference/simple_stmts.html).

## Understanding is also what keeps school work yours

Every Australian state sets its own rules on what help is allowed in assessed work, and the rules are tightening as AI tools spread. A student who understands every line of their code is safe under any of them.

### An example from NSW

In New South Wales, NESA describes its All My Own Work program as one that "gives students the opportunity to understand, value and use ethical practices when locating and using information during their studies".

Other states have their own equivalents and their own rules on AI in assessment. Check the rules that apply to your school and course.

### What we do and do not do

We teach students to read, predict, write and test code until they understand it. We never write a student's assessed work, major project or take-home task.

NSW students working on a senior project can read our [HSC Software Engineering page](/hsc-software-engineering-help) for how we help with technique while the work stays theirs.

### Predict before running

Say what the program will print before you run it. A wrong prediction is the start of real understanding.

### Rebuild without looking

If you learned something from an example, close it and write it again from memory. What you cannot rebuild, you have not yet learned.

### Write the contract

For every function, write its postcondition first. If you cannot state it, you are not ready to write the function.

Source, read 7 October 2026: [NSW Education Standards Authority](https://educationstandards.nsw.edu.au/), key services, All My Own Work.

## From pasting to owning

The steps students take as they stop copying and start understanding.

**Four stages of owning your code**

| Stage | What the student does |
|---|---|
| 1. Read | Read a short program and say, in words, what it does |
| 2. Predict | Predict exact output for a given input before running it |
| 3. Contract | Write postconditions and assertions for their own functions |
| 4. Defend | Explain and justify every line of a project to someone else |

### Using examples well

Examples are how everyone learns. The question is what happens after you read one.
Read it, close it, rebuild it, test it. That turns someone else's code into your own understanding.

### Using AI well

An AI assistant is a fast source of examples, and the same rules apply: never keep a line you cannot explain.
Our page on [learning to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-australia) covers how many AI answers to check.

## Nine courses where students own their code

Grouped by stage. The free first lesson finds the right starting point.

### Foundations

Ages 11 to 15

- [Python with explanations](/courses/python-ai-kids-masterclass): First programs, every line discussed.
- [JavaScript you can read](/courses/javascript-course-for-teens-beginners-interactive-web): Interactive pages and browser games.
- [Maths you can test](/courses/maths-through-coding): Python programs that check maths.

### Secondary

Ages 13 to 18

- [Complete Python for teens](/courses/python-complete-masterclass-teens): Beginner to advanced, tested as you go.
- [Java, classes and objects](/courses/java-programming-masterclass-for-teens): Object-oriented code you can explain.
- [Algorithms with proofs of behaviour](/courses/problem-solving-dsa-masterclass-teens): Data structures and their contracts.

### Adults

18 and over

- [Python from the ground up](/courses/python-programming-masterclass-zero-to-advanced-college): For adults who want to understand, not copy.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): Interview-ready because understood.
- [Team-ready Git](/courses/git-github-version-control-course-for-college-students): Your work, its history, your name on it.

## Lessons where nothing is pasted

Students type, predict and test everything they keep. Teachers ask "what will this print?" far more often than they explain.

- **After school** Weekday afternoons in your state.
- **Evenings** For senior students and adults.
- **Weekends** Saturday and Sunday options.

- **Prediction first** Every new idea starts with a guess about what the code will do.
- **Contracts written** Students state what each function promises before writing it.
- **Tests by the student** Students write their own checks, including the awkward cases.
- **Explain it back** A program is finished when the student can explain every line.
- **Small groups** Five to ten students, or one to one.
- **Never your assessment** We teach technique; assessed work stays the student's own.

## Fees

Families outside India are billed monthly in US dollars at a rate that does not change between countries. No sign-up fee applies and nothing locks you in for a term; any month can be the last.

- Free first class: USD 0. A full trial lesson, free. An honest read of current level. No card required.
- Group batch: USD 100 a month. Five to ten students. One steady teacher. Matched by level. Month by month.
- One to one: USD 150 a month. One teacher, one student. Around school and exams. Your pace.

## Common questions about understanding code

### What does understand the code, don't copy-paste mean?

It means being able to explain what every line of a program does and why, and to predict and test its output, rather than inserting code from elsewhere that you cannot explain.

### What is a postcondition?

A postcondition is a statement that must be true when a function finishes, such as "the result is sorted and contains the same items as the input". Writing and checking postconditions is the heart of design by contract.

### What is design by contract?

Design by contract is a way of writing software in which each function states what it needs before it runs and what it promises when it finishes, and those statements are checked, often with assertions.

### Is copying code from examples cheating?

Learning from examples is normal. What matters is whether you understand and can rebuild what you keep, and whether your school's rules allow it in assessed work.

### Why did the pasted median function pass the loose check?

The loose check only required no more than half the items below and above the answer. Any value between the two middle items meets that, so it could not tell the correct median from a nearly correct one.

### Can I use AI to help with coding assignments?

That depends on your state and school rules, which differ and are changing. Whatever is allowed, keep only code you understand and can explain.

### Do you write students' assessed work or major projects?

No. We teach reading, writing and testing code until the student understands it. Assessed work, including major projects and take-home tasks, stays the student's own.

### Should asserts be used to check user input?

No. Python skips assert statements when optimisation is switched on, so they suit checks during development. Use ordinary if statements to validate input in a finished program.

### What age is this for?

Mostly secondary students from Year 7 and adults. Younger children learn the same habit through predicting what Scratch programs will do.

### How much are lessons?

The first lesson is free. After that, families pay monthly with no joining fee and no term lock-in; see the fees section on this page.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Our main page for Australian families.
- [Learn to think, not just use AI](/learn-to-think-not-just-use-ai-tools-australia): How many AI answers to check.
- [Learn to train AI](/learn-to-train-ai-not-just-prompt-it-australia): Building models, not prompting them.
- [Problem solving through coding](/problem-solving-through-coding-australia): Thinking skills that transfer.
- [HSC Software Engineering](/hsc-software-engineering-help): For NSW senior students.
- [Coding for Year 7](/coding-for-year-7-australia): Starting secondary school computing.

## Contact

Book the free first class at [https://learn.modernagecoders.com/understand-the-code-dont-copy-paste-australia](https://learn.modernagecoders.com/understand-the-code-dont-copy-paste-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
