---
title: "Python IndentationError Explained: Every Message and Fix"
description: "Python IndentationError explained for students: what each message means, how Python counts spaces and tabs, the fix for every case, and a practice set."
canonical: https://learn.modernagecoders.com/python-indentation-error-explained
source: src/pages/python-indentation-error-explained.html
---
> A Python IndentationError means the spaces at the start of a line do not fit the block structure Python expects: a block after a colon is missing, a line is indented for no reason, or a line steps back to a level that never existed. TabError, its subclass, means tabs and spaces were mixed. Re-indent the block with 4 spaces per level. Modern Age Coders teaches Python live to students from Grade 3 up, in a batch or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Python indentation errors

United States · Grade 3 to college · Python errors

# Python IndentationError explained

An IndentationError is one of the first Python errors a new programmer meets, and its message rarely says what to change. This page reads each message the way Python means it, shows how Python actually counts the spaces at the start of a line, and gives a routine that fixes the error in any editor a US school uses, from IDLE and VS Code to a notebook in the browser. Every error message below comes from the Python documentation or from our own run of Python 3.13.6, and each one is labelled.

At a glance: For: Grade 3 to college; Error family: IndentationError, TabError; Parent class: SyntaxError; Python tested: 3.13.6, our run; Rule of thumb: 4 spaces, no tabs; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three Python courses where blocks are taught, not guessed

Each course starts with the structure of a program, so indentation errors become rare rather than mysterious.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Grades 3 to 8. Turtle art, games, and blocks of code a child can see.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. From the first loop to full projects.
- [Python for college and adults](/courses/python-programming-masterclass-zero-to-advanced-college): Ages 18 and up. Zero to advanced, live.

## Five messages, one family: what each IndentationError is telling you

Python reports every indentation problem as an IndentationError or its stricter cousin, TabError. The Python documentation describes IndentationError as the "Base class for syntax errors related to incorrect indentation" and notes that it is a subclass of SyntaxError, which is why the program stops before a single line runs.

**The messages, as printed by our run of Python 3.13.6 on 17 October 2026, and what each one means**

| Message | What Python found | The usual fix |
|---|---|---|
| expected an indented block after 'for' statement on line 2 | A line ending in a colon (for, if, while, def, class, else) with no indented line under it | Indent the body 4 spaces, or write pass if the body is not ready |
| unexpected indent | A line pushed right when nothing above it opened a block | Move the line back to the level of the line above |
| unindent does not match any outer indentation level | A line stepped back to a column no earlier line used | Line it up exactly with the block it belongs to |
| inconsistent use of tabs and spaces in indentation | Tabs and spaces mixed so that the meaning depends on tab width (this one is a TabError) | Convert the whole file to spaces |
| expected an indented block after function definition on line 1 | A def with only a comment, or nothing, underneath | Add the body, or pass as a placeholder |

### Why the line number can point at the wrong line

Python reports the line where it noticed the problem, not the line you need to edit. For "expected an indented block", the line printed is the first line that should have been indented, and the line named at the end of the message is the one with the colon. Read both.

When the block is empty and the file ends, our run pointed at a comment line: a line that holds only a comment is ignored by Python (the documentation says such a line "is ignored"), so a comment can never be the body of a loop or a function.

### Versions word it slightly differently

Python 3.10 added the extra context. Its release notes show the message as "IndentationError: expected an indented block after 'if' statement in line 2", with the word "in".

Our run of Python 3.13.6 printed "on line 2" instead. If your school laptop runs an older Python, the message may be shorter, but the meaning and the fix are the same.

Sources, read 17 October 2026: [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html), [What is new in Python 3.10](https://docs.python.org/3/whatsnew/3.10.html), and our own runs of Python 3.13.6 on Windows 11 (file paths shortened to the file name). We are not connected with the Python Software Foundation.

## The most common case: a loop with no body

A student counts quiz answers, presses Run, and gets an error before anything prints. The loop line ends in a colon, which promises a block, and the next line breaks the promise.

### Indentation is meaning, not decoration

The Python tutorial puts it plainly: "indentation is Python&rsquo;s way of grouping statements." In many languages braces mark a block and spacing is only style. In Python, moving a line four spaces changes which block it belongs to.

That is why the fixed program above and a version with print indented are both valid Python but do different things. The error only appears when the spacing makes no sense at all.

### What to check first

Find the line that ends in a colon just above the error. Every line that should run as part of that loop, if or function must start further right than the colon line, and all of them by the same amount.

The tutorial states the same rule: "each line within a basic block must be indented by the same amount." Three spaces on one line and four on the next is enough to stop the program.

## How Python decides a line is inside a block: the indentation stack

The Python language reference describes the exact rule, and once a student sees it, "unindent does not match any outer indentation level" stops being mysterious. Python keeps a stack of indentation levels, starting with a single zero, and compares each new line against the top of it.

**Our walk-through of grade.py using the stack rule in the Python language reference (2.1.8 Indentation)**

| Line | Leading spaces | Stack before the line | What Python does |
|---|---|---|---|
| 1 def grade(points): | 0 | [0] | Equal to the top: nothing happens |
| 2 if points >= 90: | 4 | [0] | Larger: push 4, one INDENT |
| 3 return "A" | 8 | [0, 4] | Larger: push 8, one INDENT |
| 4 return "B" | 6 | [0, 4, 8] | Smaller, but 6 is not on the stack: IndentationError |

### The rule in the reference

The reference says that when a line is indented less than the one before, its level "must be one of the numbers occurring on the stack". Python pops levels until it reaches that number, producing one DEDENT for each.

Moving line 4 to 4 spaces makes it a DEDENT back to the if level, which means "otherwise, return B". Our run of the fixed file prints A B for grade(95) and grade(70).

### Where tabs break the count

Tabs are worth a variable number of spaces: the reference says each tab is replaced by one to eight spaces so that the column becomes a multiple of eight. A tab at the start of a line counts as 8; four spaces and then a tab also count as 8.

Two lines can therefore look identical on screen and mean different things. Python refuses to guess: if the meaning depends "on the worth of a tab in spaces", it raises TabError.

## Eight steps that fix any indentation error

This is the routine our teachers walk students through, in this order. It works in IDLE, VS Code, PyCharm and browser notebooks, because it relies on Python's rules rather than any one editor.

### What tabnanny printed for us

We ran python -m tabnanny on two of our broken files. It printed e4.py 3 followed by the line that began with a tab, and e7.py 4 followed by the line that used 8 spaces under tab-indented lines. That is the file, the line number and the exact line, which is all a student needs.

The Python documentation describes tabnanny as a tool for the "Detection of ambiguous indentation", intended for the time being to be called as a script.

### What not to do

Do not press space until the error goes away. The error may vanish while the logic breaks, for example when a line that should run once ends up inside a loop.

Do not paste a whole file into an AI chatbot and accept whatever comes back. We ask students to explain each block out loud first, because putting a block into words makes a misplaced line easier to spot.

## Seven snippets: predict the message, then check

Our own practice set, written for this page and run on Python 3.13.6. Cover the right-hand column, decide what Python will say, then compare. It is practice for the idea, not anybody's homework.

**Practice set (ours): seven short programs and what our run of Python 3.13.6 printed**

| # | The program, line by line | What Python said |
|---|---|---|
| 1 | for i in range(3): / print(i) at the left margin | expected an indented block after 'for' statement on line 1 |
| 2 | total = 0 / then total = total + 5 with one leading space | unexpected indent |
| 3 | if True: / 4 spaces print("yes") / 2 spaces print("done") | unindent does not match any outer indentation level |
| 4 | while False: / 4 spaces # nothing yet | expected an indented block after 'while' statement on line 1 |
| 5 | def hello(): / 4 spaces then a one-line docstring | No error: a docstring is a statement, so the body is not empty |
| 6 | class Pet: / a blank line / print("ok") | expected an indented block after class definition on line 1 |
| 7 | if name == "Ava": / 4 spaces print("Hi Ava") / else: / print("Who are you?") at the margin | expected an indented block after 'else' statement on line 4 |

### Snippet 4 is the trap

The body holds only a comment, and Python ignores comment-only lines, so the loop has no body at all. Replace the comment with pass, or keep the comment and add pass under it.

### Snippet 5 is the surprise

A string on its own line is a real statement, so a function whose body is only a docstring is valid. Many students expect an error here; seeing why there is none teaches what a block really needs.

### Snippet 7 is the classic

else opens its own block, so it needs its own indented line. It is easy to fix the if half and forget that the else half follows exactly the same rule.

## Where indentation errors come from in school editors

US students write Python in whatever their class uses: IDLE on a school laptop, VS Code at home, a notebook in Google Colab, or a browser editor the teacher assigned. The rules are Python's, but each setting has its own usual cause.

**Common causes by setting (our teaching notes; the rules themselves come from the Python documentation)**

| Where you write Python | The usual cause | What to check |
|---|---|---|
| Code copied from a web page or a PDF | Non-standard spaces, or tabs mixed with spaces | Delete the indentation and retype it with the Tab key in an editor set to spaces |
| A notebook cell (Colab or Jupyter) | A cell pasted half from one source, half from another | Re-indent the whole cell, then run that one cell |
| The interactive prompt (the >>> shell) | A compound statement not finished with a blank line | The tutorial says a compound statement typed interactively "must be followed by a blank line" |
| Two editors on one file | One saves tabs, the other saves spaces | Run python -m tabnanny, then convert the file to spaces |
| A long expression across lines | Worry that continuation lines need block indentation | Lines inside brackets may be indented freely; the reference says their indentation "is not important" |

### Make the editor help you

The tutorial notes that "all decent text editors have an auto-indent facility." Let the editor indent after a colon, and use its option to show whitespace, so a tab and four spaces stop looking the same.

Many editors can convert a file's indentation to spaces in one command. Do that once per file and TabError disappears for good.

### A US classroom habit worth keeping

A student moving from block coding in elementary school to typed Python in middle or high school loses the visual nesting that blocks gave them. Indentation is that same nesting, written with spaces.

Students who go on to Java, the language of our AP Computer Science A course, keep the same habit: Java marks blocks with braces, but well-indented Java is far easier to read and debug.

Rules quoted from the [Python tutorial](https://docs.python.org/3/tutorial/introduction.html), the [language reference](https://docs.python.org/3/reference/lexical_analysis.html) and [PEP 8](https://peps.python.org/pep-0008/), read 17 October 2026. PEP 8 also says "Python disallows mixing tabs and spaces for indentation."

## What a teacher changes: from fixing errors to reading structure

Fixing one error at midnight is useful. Understanding blocks well enough that the errors stop is better, and that is what our classes aim for.

**How we teach blocks across a first term of Python (our plan, adjusted for each learner)**

| Classes | What the student does | What it teaches about indentation |
|---|---|---|
| 1 to 2 | First programs with if and else | A colon opens a block; the block is everything indented under it |
| 3 to 4 | Loops that count and total | Which lines run every time, and which run once after |
| 5 to 6 | Functions with return | Where a function ends, and why a return can end it early |
| 7 to 8 | Nested loops and conditions | Reading three levels at once; the stack walk-through above |
| 9 to 10 | A small project of their choice | Keeping a long file consistent: 4 spaces, no tabs |
| 11 to 12 | Reading other people's code | Explaining a program block by block, out loud |

We teach the concept so a student can solve their own school assignments; we do not write graded work for anyone. For a wider method that covers every kind of bug, see [how to debug code](/how-to-debug-code), and for errors that happen while a program runs, [exception handling in Python](/blog/exception-handling-in-python).

## Four stages of reading indentation

Find the row that sounds like you. The goal is stage 4.

**Stages of understanding Python blocks (ours)**

| Stage | What it looks like |
|---|---|
| 1. Copier | Spacing matches an example, but the student cannot say why |
| 2. Fixer | Can clear an IndentationError by trial, sometimes breaking the logic |
| 3. Reader | Can say which lines belong to which block before running |
| 4. Designer | Plans blocks first, and indentation errors almost never appear |

### For parents

Indentation errors are a sign your child is writing real Python, not a sign they are bad at it. Every programmer has met them.
Ask your child to explain one block of their code to you. If they can, they are past stage 2.

### For students

Read the colon line and the line under it before touching anything. The message is pointing at one of the two.
Pick 4 spaces and never mix in a tab. That one habit removes TabError for good.

## Nine courses where Python structure matters

Live online, with a regular teacher, in a batch or one to one.

### Kids

Grades 3 to 8

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Turtle drawings, games, first blocks.
- [Scratch coding](/courses/scratch-programming-complete-course): Nesting you can see, before typed code.
- [Maths through coding](/courses/maths-through-coding): Loops and conditions on real maths.

### Teens

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): Every block type, then projects.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Nested loops that stay readable.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Notebooks, pandas, clean cells.

### Going further

Ages 13 and up

- [Python certification prep](/courses/pcep-pcap-python-certification-course): PCEP and PCAP, syntax rules included.
- [Python for college and adults](/courses/python-programming-masterclass-zero-to-advanced-college): Zero to advanced for ages 18 and up.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java blocks, braces and style.

## Live Python classes that fit a US school week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After school in your time zone, in a batch.
- **Weekends** A calmer slot for longer projects.
- **1-on-1** Built around your own schedule.

- **One teacher, every week** Someone who knows your code.
- **Your editor** IDLE, VS Code or a notebook.
- **Bring the error** We start from what broke.
- **Concept, not answers** You solve your own assignments.
- **Online, any state** From home, coast to coast.
- **Group or solo** Fifteen to twenty, or just you.

## Fees

Python costs nothing to install, and every editor named here has a free version. The fee covers live teaching, billed one month at a time in US dollars, with no semester contract and nothing owed once you stop.

- Free first class: USD 0. A free first lesson. Bring the error that stopped you. No card asked for.
- Group batch: USD 100 a month. Fifteen to twenty students. The same teacher each week. Pick the batch that suits you. Paid monthly.
- One to one: USD 150 a month. A teacher for you alone. Times that suit you. Your own pace and projects.

## Python indentation errors: common questions

### What does IndentationError mean in Python?

It means the spaces at the start of a line do not fit the block structure Python expects. The Python documentation describes IndentationError as the base class for syntax errors related to incorrect indentation, and it is a subclass of SyntaxError, so nothing runs until it is fixed.

### How do I fix "expected an indented block"?

Find the line ending in a colon that the message names, and indent the line under it by 4 spaces. If the body is not written yet, put pass on an indented line. A comment on its own does not count as a body.

### What does "unexpected indent" mean?

A line starts further right than it should, even though nothing above it opened a block. Move it back to line up with the line before it.

### What does "unindent does not match any outer indentation level" mean?

A line stepped back to a column that no earlier line used, so Python cannot tell which block it belongs to. Line it up exactly with the block it should join, usually 4 spaces per level.

### What is a TabError?

It is a subclass of IndentationError, raised when indentation mixes tabs and spaces inconsistently. Convert the whole file to spaces. Running python -m tabnanny on the file shows the line it finds ambiguous.

### Should I use tabs or spaces in Python?

Spaces. The Python tutorial says to use 4-space indentation and no tabs, and PEP 8, the Python style guide, calls spaces the preferred indentation method.

### Why do I get an indentation error in Google Colab?

Colab runs ordinary Python, so the same rules apply inside each cell. The usual cause is pasted code with mixed spacing. Re-indent the whole cell with 4 spaces per level and run that cell again.

### Can you just fix my homework code?

No. We teach the concept so you can solve your own assignments, and we never write graded work. In a lesson, a teacher will walk through your error with you until you can fix it yourself.

### What times are classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Python classes cost?

The first lesson is free. After that, families pay for one month of live teaching at a time, and the fees section of this page shows the current monthly amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Every page we have written for US families.
- [How to debug code](/how-to-debug-code): A method for bugs beyond indentation.
- [Exception handling in Python](/blog/exception-handling-in-python): Errors that appear while a program runs.
- [Python for 14 year olds](/python-for-14-year-olds): Where a high school freshman can start.
- [AP CSP coaching](/ap-computer-science-principles-online-coaching): The AP course many students meet first.
- [How we teach](/how-we-teach): Inside a live lesson, step by step.
- [Python turtle not working](/python-turtle-not-working): Python turtle not working? The real errors, the fixes, and how to write text.
- [Scratch not working](/scratch-not-working-help): Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.
- [MakeCode Arcade help](/makecode-arcade-help-for-students): MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.

## Contact

Book the free first class at [https://learn.modernagecoders.com/python-indentation-error-explained](https://learn.modernagecoders.com/python-indentation-error-explained#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
