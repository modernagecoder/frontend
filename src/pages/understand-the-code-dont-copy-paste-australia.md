---
title: "Understand the Code, Don't Copy-Paste | Australian Students"
description: "For Australian students: why pasted code fails quietly, how a written contract catches it, and how understanding each line keeps school work honest and your own."
canonical: https://learn.modernagecoders.com/understand-the-code-dont-copy-paste-australia
source: src/pages/understand-the-code-dont-copy-paste-australia.html
---
> For Australian students: why pasted code fails quietly, how a written contract catches it, and how understanding each line keeps school work honest and your own.

In short

Understanding code means being able to say what a function should return for any input, then checking that it does. A precise statement of that promise is called a postcondition. In our test, a pasted median function passed a loose postcondition on all 10,000 random lists, yet gave the wrong answer 4,219 times, which an exact postcondition caught every time. Pasting skips the understanding that writes the exact check.

Where to start

## Three courses built on reading and testing code

Each one asks students to predict, explain and test what they write. The free first lesson chooses between them.

[![Python for Teens course thumbnail](/images/python-teens.webp)  UCAU / 01 Python, line by line Ages 13 to 18. Every program predicted on paper before it runs. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  UCAU / 02 Logic and algorithms for teens Ages 13 to 18. Data structures you can explain, not just use. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)[![Git & GitHub Course for Teens course thumbnail](/images/git-github-teens.webp)  UCAU / 03 Version control, honestly Ages 13 to 18. A history of your own work that shows how it grew. Open the syllabus →](/courses/git-github-version-control-course-for-teens)

Why it matters

## Running is not the same as right

Pasted code usually fails in one of two ways. Either it crashes, which is easy to notice, or it quietly returns a wrong answer for some inputs, which is not. The second kind is the dangerous one, and only understanding catches it.

### What the curriculum expects

The Australian Curriculum v9 says that by the end of Year 10 students verify their solutions "by validating their algorithms, represented as flowcharts and pseudocode, and using test cases to confirm the correctness of their solutions".

A test case confirms correctness only if the student knows what the correct answer is. That knowledge is exactly what pasting skips.

### Reading other people's code

The same curriculum includes, as an example for Years 9 and 10, "reading and interpreting programs split across files, functions or classes, and modifying them to add functionality".

Reading code is a skill to practise, not a sign of laziness. The difference from pasting is that reading ends in understanding.

Source, read 7 October 2026: ACARA, [Australian Curriculum v9, Digital Technologies content, Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx) (Year 10 band description, and an elaboration under AC9TDI10P09).

The experiment

## One pasted function, ten thousand lists

We took a short median function of the kind that circulates online: sort the list and return the middle item. It runs without error on any list of numbers. Then we checked it two ways on 10,000 random lists of 1 to 12 whole numbers between 0 and 20.

| What we measured | Result |
| --- | --- |
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

The lesson in one line

A test can only be as precise as the tester's understanding. Weak understanding writes weak tests, and weak tests pass wrong code.

Writing contracts

## Postconditions: promises a function must keep

A postcondition is a statement that must be true when a function finishes. Writing it down forces the writer to understand what the function promises, and checking it automatically catches the moment the promise is broken. The approach is often called design by contract.

| Function | Its postcondition, in words |
| --- | --- |
| Sort a list | The result has the same items as the input, and each item is no larger than the next |
| Find the median | For an odd length, the middle item; for an even length, the mean of the two middle items |
| Convert minutes to hours and minutes | Hours times 60, plus minutes, equals the input, and minutes is between 0 and 59 |

### Checking with assert

In Python, the simplest way to check a postcondition is an `assert` statement. The Python Language Reference describes it as "a convenient way to insert debugging assertions into a program", equivalent to raising an `AssertionError` when the condition is false.

A student who writes `assert` lines for their own functions is writing their understanding down, where the computer can check it.

### A catch worth knowing

The same reference explains that assertions run only while the built-in `__debug__` is true, and that "the current code generator emits no code for an assert statement when optimization is requested at compile time".

So asserts are for checking during development, not for guarding a finished program. Real input validation needs ordinary `if` statements.

Source, read 7 October 2026: [The Python Language Reference, simple statements, "The assert statement"](https://docs.python.org/3/reference/simple_stmts.html).

Honest work

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

Stages

## From pasting to owning

The steps students take as they stop copying and start understanding.

| Stage | What the student does |
| --- | --- |
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

The catalogue

## Nine courses where students own their code

Grouped by stage. The free first lesson finds the right starting point.

I

### Foundations

Ages 11 to 15

UCAU / FND / 01

#### Python with explanations

First programs, every line discussed.

[Open the syllabus](/courses/python-ai-kids-masterclass)

UCAU / FND / 02

#### JavaScript you can read

Interactive pages and browser games.

[Open the syllabus](/courses/javascript-course-for-teens-beginners-interactive-web)

UCAU / FND / 03

#### Maths you can test

Python programs that check maths.

[Open the syllabus](/courses/maths-through-coding)II

### Secondary

Ages 13 to 18

UCAU / SEC / 01

#### Complete Python for teens

Beginner to advanced, tested as you go.

[Open the syllabus](/courses/python-complete-masterclass-teens)

UCAU / SEC / 02

#### Java, classes and objects

Object-oriented code you can explain.

[Open the syllabus](/courses/java-programming-masterclass-for-teens)

UCAU / SEC / 03

#### Algorithms with proofs of behaviour

Data structures and their contracts.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)III

### Adults

18 and over

UCAU / ADL / 01

#### Python from the ground up

For adults who want to understand, not copy.

[Open the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

UCAU / ADL / 02

#### Data structures and algorithms

Interview-ready because understood.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

UCAU / ADL / 03

#### Team-ready Git

Your work, its history, your name on it.

[Open the syllabus](/courses/git-github-version-control-course-for-college-students)

How lessons run

## Lessons where nothing is pasted

Students type, predict and test everything they keep. Teachers ask "what will this print?" far more often than they explain.

After school

Weekday afternoons in your state.

Evenings

For senior students and adults.

Weekends

Saturday and Sunday options.

### Prediction first

Every new idea starts with a guess about what the code will do.

### Contracts written

Students state what each function promises before writing it.

### Tests by the student

Students write their own checks, including the awkward cases.

### Explain it back

A program is finished when the student can explain every line.

### Groups

Fifteen to twenty students, or one to one.

### Never your assessment

We teach technique; assessed work stays the student's own.

Student work

## Projects our students can explain line by line

Each of these was typed, tested and defended by the student who built it. Find more on the [student labs](/student-labs) page.

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees

Families outside India are billed monthly in US dollars at a rate that does not change between countries. No sign-up fee applies and nothing locks you in for a term; any month can be the last.

Free first class

USD 0

no card required

- A full trial lesson, free
- An honest read of current level
- No card required

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students
- One steady teacher
- Matched by level
- Month by month

Start here

One to one

USD 150

a month, billed in US dollars

- One teacher, one student
- Around school and exams
- Your pace

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews posted on Google by our families, shown without edits.

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

Questions from students and parents

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

Elsewhere on this site

## Related pages

More on thinking with AI, building it and senior school computing.

### [Coding classes in Australia](/coding-classes-in-australia)

Our main page for Australian families.

### [Learn to think, not just use AI](/learn-to-think-not-just-use-ai-tools-australia)

How many AI answers to check.

### [Learn to train AI](/learn-to-train-ai-not-just-prompt-it-australia)

Building models, not prompting them.

### [Problem solving through coding](/problem-solving-through-coding-australia)

Thinking skills that transfer.

### [HSC Software Engineering](/hsc-software-engineering-help)

For NSW senior students.

### [Coding for Year 7](/coding-for-year-7-australia)

Starting secondary school computing.

Start here

## Book a free first lesson

Send a number and a good time to call. The student works through a short program with a teacher, predicting and testing it, and you see the difference understanding makes.

Would you like more detail first? Read [how a lesson runs](/how-we-teach) or look over [our courses](/courses).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20my%20child%20copies%20code%20without%20really%20understanding%20it.%20Could%20we%20book%20a%20free%20lesson%20to%20work%20on%20that%3F) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

From Australia, WhatsApp gets the quickest reply. We are an India-based team, so messages come from a +91 number; there is no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/understand-the-code-dont-copy-paste-australia*
