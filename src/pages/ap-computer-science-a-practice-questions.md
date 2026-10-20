---
title: "AP Computer Science A Practice Questions, With Answers"
description: "Original AP Computer Science A practice questions in Java: 14 multiple choice across all four units and one free response, every answer checked by running it."
canonical: https://learn.modernagecoders.com/ap-computer-science-a-practice-questions
source: src/pages/ap-computer-science-a-practice-questions.html
---
> These are 14 original AP Computer Science A style multiple-choice questions and one free-response task, spread across the four units of the current course in roughly the exam&rsquo;s proportions. Answers and explanations follow each unit. Every snippet was compiled and run by us, so the keys are real program output. For official practice, use AP Classroom and the Bluebook test previews. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / AP CSA practice questions

United States · Grades 10 to 12 · AP Computer Science A, Java

# AP Computer Science A practice questions

Here is a practice set you can actually trust: fourteen multiple-choice questions and one free-response task in the style of the current AP Computer Science A exam, all written by our teachers, none copied from College Board. Every answer on this page is the real output of the code, because we compiled and ran each snippet before publishing. Work through a unit at a time, write your answer down before you scroll to the key, and pay most attention to the questions you get wrong, since each one is built around a mistake students really make.

At a glance: Questions: 14 multiple choice, 1 free response; Units: All four, weighted like the exam; Language: Java, Quick Reference methods only; Written by: Our teachers, original; Checked: Compiled and run, October 2026; Time: About 30 minutes for the set; Classes: Batch or one to one; Try it: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for students who want more than a practice set

A practice set shows what you get wrong. A teacher shows you why, and gives you the next ten questions on exactly that idea.

- [AP Computer Science A exam prep](/courses/ap-computer-science-a-java-exam-prep-course): Grades 10 to 12. Unit by unit, then full timed papers.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Ages 13 to 18. Java from the first line, at a gentler pace.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Ages 13 to 18. Harder problems once AP feels easy.

## Fourteen questions, weighted like the real exam

We wrote the questions to match the current course framework, which College Board revised for the 2025 to 2026 school year into four units. More questions go to the units the exam weights more.

**Our question spread against College Board&rsquo;s multiple-choice weighting (weights from the 2025 Course at a Glance; the spread is ours)**

| Unit | Exam weighting for Section I | Questions here |
|---|---|---|
| Unit 1: Using Objects and Methods | 15 to 25% | 3 |
| Unit 2: Selection and Iteration | 25 to 35% | 4 |
| Unit 3: Class Creation | 10 to 18% | 2 |
| Unit 4: Data Collections | 30 to 40% | 5 |

### The kinds of question we wrote

College Board&rsquo;s student page lists what the multiple choice asks. You will be asked to "Determine the required code segments to produce a given output", to "Identify the output, value, or result of given program code based on initial values", and to "Analyze program code for correctness, equivalence, and errors".

Most questions here are the second kind: read the code, predict the output. That is the skill students most often skip in class, because the computer will always tell you the answer. On the exam it will not.

### What we left out on purpose

The Course and Exam Description says: "Designing and implementing inheritance relationships are outside the scope of the AP Computer Science A course and exam." So there are no questions here asking you to design subclasses.

Every Java method used in the set appears on the Java Quick Reference that is built into Bluebook: substring, indexOf, length, split, Math.random, and the ArrayList methods add, get, size and remove.

Sources, read 17 October 2026: the [AP CSA Course at a Glance](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-at-a-glance.pdf), the [Java Quick Reference](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-java-quick-reference.pdf) and the [AP CSA exam page for students](https://apstudents.collegeboard.org/courses/ap-computer-science-a/assessment). The questions are ours; we are not connected with College Board.

## Questions 1 to 3: arithmetic, strings and random numbers

Three questions on the ideas that the rest of the course is built on. Each looks easy. Each has a trap that catches students who read too fast.

**Unit 1 answers (ours; checked by running the code with javac 22)**

| Question | Answer | Why |
|---|---|---|
| 1 | (B) 6.5 | a / b is integer division, so c holds 3.0, not 3.5. The second term casts a to double first, so it is 3.5. Then 3.0 + 3.5 is 6.5. |
| 2 | (A) put48 | substring(3, 6) takes indexes 3, 4 and 5: "put". Then the + signs run left to right on a String, so 4 and 8 are joined as text, not added to make 12. |
| 3 | (B) | Math.random() gives a value from 0.0 up to but not including 1.0. Times 8 gives 0 up to 7.99, the cast makes 0 to 7, plus 5 makes 5 to 12. In (D) the cast applies to Math.random() alone, which is always 0, so it always gives 5. |

### The idea behind Question 1

Java decides the type of an expression from its operands, not from the variable that receives it. Declaring c as double does not rescue a / b, because the division has already happened with two ints.

Our test run of the random expression in Question 3, a million times, never produced anything below 5 or above 12, which is a good habit to copy: when in doubt about a range, test the edges.

### A note from the 2025 exam

The 2025 Chief Reader report, written about the older exam format, advised teachers: "Practice creating a random number in a given range." It also noted that many students had been drilled on a formula without understanding it.

The formula is worth understanding rather than memorising: the number you multiply by is how many different values you want, and the number you add is the smallest one. Here that is 8 values starting at 5.

## Questions 4 to 7: loops, conditions and traversals

Unit 2 carries up to 35 percent of the multiple choice. These four questions are about counting carefully: how many times a loop runs, and what is true when it stops.

**Unit 2 answers (ours; checked by running the code)**

| Question | Answer | Why |
|---|---|---|
| 4 | (B) 3 | i takes the values 1, 4, 7, 10, 13, 16 and 19. Seven values, but only 4, 10 and 16 are even. |
| 5 | (B) -2 4 | x goes 10, 7, 4, 1, -2 while y goes 0, 1, 2, 3, 4. After the fourth pass x is -2 and y is 4, so both halves of the condition are now false and the loop stops. |
| 6 | (B) 10 | The inner loop starts at r, so it runs 4 times, then 3, then 2, then 1. That is 4 + 3 + 2 + 1 = 10, not 4 &times; 4 = 16. |
| 7 | (A) fdb | k starts at 5, the last index, and drops by 2: 5, 3, 1. The characters at those indexes are f, d and b, added in that order. |

### Trace tables beat guessing

For Questions 4 and 5, write one column per variable and one row per pass of the loop. It takes a minute and it is the only reliable method under exam pressure.

Question 5 has a second lesson: with &&, the loop continues only while both conditions are true, so it stops when either one fails. Students who stop the trace when x first drops below 4 pick (A).

### Nested loops that do not start at zero

Question 6 is the shape behind many comparison algorithms: each element is compared only with the ones after it. Spotting the shrinking inner loop is the skill; the answer follows from it.

In Question 7 the bounds matter as much as the step. Starting at w.length() would throw an exception on the first substring call, which is why the loop starts at w.length() - 1.

## Questions 8 and 9: objects, static variables and references

Unit 3 is the lightest unit by weight, but its ideas sit underneath the free response. Both questions are about what actually lives in memory.

**Unit 3 answers (ours; checked by running the code)**

| Question | Answer | Why |
|---|---|---|
| 8 | (B) 2 2 | Only two Counter objects are built, because Counter r = q copies a reference and calls no constructor. The second object has id 2, and the static variable made, shared by the whole class, is 2. |
| 9 | (C) 99 1 | The method receives a copy of the reference to the array, so changing arr[0] changes the real array. It also receives a copy of the int k, so n = 99 changes only the copy. |

### One object, two names

Students who answer (A) to Question 8 believe that every variable of a class type holds its own object. Drawing boxes and arrows, one box per new, clears this up faster than any explanation.

Static variables belong to the class rather than to any one object, which is why Counter.getMade() is called on the class name.

### Why Question 9 matters for the free response

The 2026 Scoring Guidelines say an algorithm point is not earned when "Persistent data is modified (e.g., changing value referenced by parameter)." In other words, changing an array or list you were handed, when the task did not ask for it, can cost a point.

Question 9 is that rule in miniature: arr[0] = 99 reaches back into the caller&rsquo;s data, and n = 99 does not.

## Questions 10 to 14: lists, 2D arrays, algorithms and recursion

Unit 4 is the heaviest unit, at 30 to 40 percent of Section I, and the one most students reach last. These five questions are the ones we see cause the most lost marks.

**Unit 4 answers (ours; checked by running the code)**

| Question | Answer | Why |
|---|---|---|
| 10 | (B) [4, 5, 6] | Removing at index i shifts every later element left by one. After removing the first 4, the second 4 moves into index 0, but i moves on to 1, so that 4 is never checked. |
| 11 | (B) 12 | % runs before -, so the row is 1 - col % 2: rows 1, 0, 1 for columns 0, 1, 2. That picks 4, 2 and 6, and 4 + 2 + 6 = 12. |
| 12 | (B) | The else branch returns false on the very first pass, after checking only 3 + 1. The pair 6 + 4 at the end is never reached. |
| 13 | (B) 7 | mystery(0) to mystery(2) return 0, 1 and 2. Building up: mystery(3) is 2, mystery(4) is 3, mystery(5) is 5, and mystery(6) is 5 + 2 = 7. |
| 14 | (B) 4 | split keeps the empty string between the two commas, so the array is red, green, an empty string, and blue. |

### The too-early return

Question 12 copies a real pattern. Writing about the 2025 free response, the Chief Reader described "a common algorithmic error being a too-early return" in a question about searching a 2D array for pairs.

The fix is to return false only after the loop has finished, so every pair gets checked: delete the else branch entirely. If you picked (C), you checked the values but not the code&rsquo;s path through them.

### Removing while you traverse

Question 10 is the classic ArrayList trap. Two safe fixes: traverse backwards from the last index, or only increase i when nothing was removed. Both versions print [5, 6] when we run them.

In Question 13, build the answer from the bottom up instead of expanding the calls from the top. Writing mystery(0) to mystery(6) in a row takes seconds and avoids a tree of twenty calls.

## One free-response question in the ArrayList style

Question 3 of the current exam asks students to write one method that analyses data in an ArrayList. This original question is in that style, followed by one correct solution and a five-point rubric we wrote in the spirit of the published guidelines.

The task (ours). A TempLog object stores whole-number temperature readings, in order, in an ArrayList of Integer values called readings. Write the method longestRise, which returns the length of the longest run of consecutive readings in which each reading is strictly greater than the one before it. A single reading counts as a run of length 1. If there are no readings, return 0. For the readings 61, 64, 63, 66, 70, 72, 71 the method returns 4, because 63, 66, 70, 72 is the longest rising run.

**A five-point rubric for longestRise (ours, modelled on the style of the 2026 Scoring Guidelines, not an official rubric)**

| Point | Earned when the response |
|---|---|
| 1 | Accesses every reading in the list without going out of bounds |
| 2 | Compares each reading with the one before it using get, not [ ] |
| 3 | Keeps a running length that grows on a rise and resets to 1 otherwise |
| 4 | Keeps the longest run seen so far and updates it correctly (algorithm) |
| 5 | Returns the correct value in every case, including no readings and one reading (algorithm) |

### Where students lose points on this one

Starting the loop at 0 and comparing get(i) with get(i - 1) throws an exception on the first pass. Starting at 1 is the whole trick.

Updating the longest run only inside the else branch misses a run that lasts until the end of the list, such as 40, 41, 42. That response would return 1 instead of 3 and lose the algorithm point for the return value.

### Why get and not square brackets

The 2026 Scoring Guidelines list reversed collection access, "[] instead of .get", among the reasons an algorithm point is not earned when it is not otherwise assessed. readings is an ArrayList, so readings[i] is not Java at all.

For a step-by-step method for writing these answers, see our guide to [reading code](/how-to-read-code) and our post on [how to get a 5 in AP Computer Science A](/blog/how-to-get-a-5-in-ap-computer-science-a).

## Using your results, and where to find official practice

Fourteen questions are a sample, not an exam. Use them to find a weak unit, then practise that unit properly.

### If you missed Unit 1 questions

Go back to casting, integer division and String methods. They come back in every later unit, often hidden inside harder questions.

### If you missed Unit 2 or 4

Practise trace tables until they are automatic. Most loop and list mistakes are counting mistakes, not knowledge gaps.

### If you got them all

Time yourself on full sections. The real Section I is 42 questions in 90 minutes, a little over two minutes each.

For official material, College Board points students to AP Classroom and to the test previews in the Bluebook app. Past free-response questions are on AP Central too, but College Board warns that after the 2025 to 2026 revisions they do not completely align with the current exam, so use them for practice in writing code rather than for timing. Our [AP Computer Science A classes](/ap-computer-science-a-online-classes) set new questions like these every week.

## Four stages of getting good at AP CSA questions

Most students move through these in order. Knowing which one you are at tells you what to practise.

**Stages of AP CSA practice (ours)**

| Stage | What it looks like |
|---|---|
| 1. Running it | Types the code into an editor to find the answer |
| 2. Tracing it | Predicts the output on paper, then checks |
| 3. Spotting the trap | Sees the integer division or the shifted index at once |
| 4. Writing it | Writes full methods that earn every rubric point |

### For parents

Stage 1 is where most students begin. It is fine for learning, and not allowed on the exam.
The move from stage 2 to 3 usually comes from volume: a few hundred well-chosen questions.

### For students

Commit to an answer before you check. Guessing then checking teaches nothing.
Keep a list of the traps that caught you. It will be shorter than you expect.

## Nine courses for Java and AP students

Live online, the same teacher each week, as a batch or one to one.

### AP and Java

Grades 9 to 12

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Every unit, with weekly practice sets.
- [Java for teens](/courses/java-programming-masterclass-for-teens): The language, properly, from scratch.
- [AP CSP](/courses/ap-computer-science-principles-exam-prep-course): The broader AP course.

### Algorithms

Ages 13 to 18

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting and lists, deeper.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Contest problems, USACO style.
- [Python for teens](/courses/python-complete-masterclass-teens): Quick scripts and projects beside Java.

### Building things

Ages 13 to 18

- [Full stack for teens](/courses/full-stack-web-development-teens-masterclass): Real web apps, front to back.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Data sets and first models.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Interactive pages and games.

## Practice like this, every week, live

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evening slots work across the US time zones.
- **Weekends** Room for a full timed section.
- **1-on-1** Arranged around tests at school.

- **The same teacher** Who remembers last week&rsquo;s mistakes.
- **Trace, then run** Predict on paper first, every time.
- **New questions weekly** Written for the student&rsquo;s weak units.
- **Free response marked** Point by point, with reasons.
- **Online, nationwide** Any state, any school district.
- **Group or private** Fifteen to twenty, or one learner.

## Fees

The practice set is free. Classes are paid month by month in US dollars, with nothing to sign for the year and no fee to stop.

- Free first class: USD 0. A free first lesson. Bring the questions you missed. No card needed.
- Group batch: USD 100 a month. A batch of fifteen to twenty. One teacher all term. Choose a batch. Month to month.
- One to one: USD 150 a month. Just your teen and a teacher. Times you choose. Questions on their weak units.

## AP CSA practice: common questions

### Are these real AP Computer Science A exam questions?

No. Every question on this page was written by our teachers in the style of the current exam. College Board items are not copied. For official practice, use AP Classroom and the Bluebook test previews.

### Are the answers on this page correct?

We compiled and ran every snippet with Java before publishing, so each answer is the actual output of the code.

### How many questions are on the real AP CSA multiple choice?

There are 42 of them in Section I, with 90 minutes to answer, and together they make up 55% of the exam score.

### Which unit should I practise most?

Unit 4, Data Collections, has the largest multiple-choice weighting, 30 to 40 percent, followed by Unit 2, Selection and Iteration, at 25 to 35 percent.

### Is inheritance on the AP CSA exam?

College Board says designing and implementing inheritance relationships are outside the scope of the course and exam, so this set does not test it.

### Which Java methods can appear on the exam?

The Java Quick Reference in Bluebook lists them, including String substring, indexOf and split, Math.random, and the ArrayList methods add, get, set, size and remove.

### Are past AP CSA free-response questions still worth doing?

For practice in writing Java, yes. College Board notes that questions from before the 2025 to 2026 revisions are not fully matched to the current exam, so do not use them to judge timing or scoring.

### Why does removing from an ArrayList in a for loop skip elements?

Removing at index i shifts every later element one place left, and then i increases, so the element that moved into position i is never checked. Traversing backwards avoids it.

### When do AP CSA lessons run for students in the US?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do AP CSA classes cost?

The first lesson is free. After it, classes are paid one month at a time, and the fees section shows the monthly amount in US dollars.

## Related pages

- [AP Computer Science A classes](/ap-computer-science-a-online-classes): The full live course.
- [What changed in AP CSA](/blog/ap-computer-science-a-changes-2026): The four-unit course explained.
- [How to debug code](/how-to-debug-code): A method for finding your own bugs.
- [Thinking like a programmer](/how-to-think-like-a-programmer): The habits behind tracing.
- [USACO preparation](/usaco-preparation-online-coaching): When AP questions get easy.
- [Coding classes in the USA](/coding-classes-in-united-states): All our pages for US families.
- [AP CSP Create task guide](/ap-csp-create-performance-task-guide): The AP CSP Create task from the official handouts: code, video, PPR, AI rules, deadline.
- [Is AP Computer Science hard?](/is-ap-computer-science-hard): How hard are AP CSA and AP CSP? The 2026 numbers, the prerequisites, two quick checks.
- [Java cannot find symbol error](/java-cannot-find-symbol-error): Java cannot find symbol, decoded: real javac output, eight causes, numbered fixes.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ap-computer-science-a-practice-questions](https://learn.modernagecoders.com/ap-computer-science-a-practice-questions#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
