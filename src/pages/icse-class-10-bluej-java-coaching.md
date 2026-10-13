---
title: "ICSE Class 10 BlueJ Java Coaching | Errors, Lab File, Practical"
description: "BlueJ coaching for ICSE Class 10 Computer Applications: set-up on Windows and Mac, the object bench, eight errors decoded, the lab file and the practical day."
canonical: https://learn.modernagecoders.com/icse-class-10-bluej-java-coaching
source: src/pages/icse-class-10-bluej-java-coaching.html
---
> BlueJ coaching for ICSE Class 10 Computer Applications: set-up on Windows and Mac, the object bench, eight errors decoded, the lab file and the practical day.

Start here

## The courses that live in BlueJ

The ICSE course where every Wednesday is a BlueJ lab, and two courses for students who want Java beyond the paper.

[![ICSE Computer Applications Java with BlueJ course thumbnail](/images/java-teens.webp)  The environment / ICSE mini batch ICSE Computer Applications, Java with BlueJ Taught in BlueJ from the first class to the practical rehearsal, so the student is never examined in a tool they only half know. Open the syllabus →](/courses/icse-computer-applications-java-bluej-course)[![Computer Science Class 11 and 12 course thumbnail](/images/ip-cs-class-11-12.webp)  After Class 10 / the senior paper Computer Science Class 11 and 12 The Class 11 and 12 paper for students who keep the subject, taught to students who already read a compiler error without flinching. Open the syllabus →](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course)[![Hackathon Prep for Teens course thumbnail](/images/hackathon-teens.webp)  Beyond the lab / building under time Hackathon Prep for Teens For the student who liked the practical day more than the theory paper: building and demonstrating under time, with an audience that asks questions. Open the syllabus →](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

Ans. The short version

BlueJ is the free, open-source Java environment that ICSE schools use for Computer Applications, that CISCE's papers name, and in which the internal assessment and practical examination take place. Coaching for it means four things: a working installation on the student's own Windows or Mac machine, fluency with the class diagram, object bench and terminal as tools for understanding classes and objects, the ability to read the eight compiler and runtime errors a Class 10 student regularly meets and fix them without help, and lab assignments organised as clean BlueJ projects ready for an external examiner. Modern Age Coders teaches all of it inside the Tuesday 5:30 PM and Wednesday 8 PM mini batch of four or five, with screens shared every Wednesday.

Q1. How is BlueJ set up, and what is in the window?

## Installation in one evening, and the four parts of the screen worth knowing

### Set-up, done once

1. #### Download the current BlueJ 5 installer for your operating system

  The Windows and Mac installers include a Java runtime, so for most families nothing else is needed. A machine from the last eight years is plenty; BlueJ is light.
2. #### Create a project folder that lives in one place

  A folder named for the subject, inside it one BlueJ project per topic or assignment. The folder is what travels between home and the school lab on a pen drive, so it is created deliberately rather than wherever the first save landed.
3. #### Write, compile and run one class

  New class, a main method that prints one line, the Compile button, then right-click and run main. The first successful run is the moment BlueJ stops being a mystery, and it happens in the first fifteen minutes of our first class.

### The four parts of the window

- **The class diagram.** The main area, where each class is a box and arrows show which class uses which. For Class 10 it makes the abstract word class into something you can see and click.
- **The editor.** Opens on double-clicking a class: auto-indenting, brace-matching, with the Compile button that turns a red bar into a running program. The variable description is written beside it, not after it.
- **The object bench.** The strip along the bottom where objects appear when created from a class. Call a method, inspect a field, watch a constructor run. Not examined, and the best teaching tool in the program.
- **The terminal window.** Where output appears and input is typed. Its contents are what the lab file records, and it is worth knowing how to clear and save it.

The object bench deserves a sentence more. Create two objects from one Student class, call display on each, and the difference between a class and an object is no longer a definition to memorise for Section A: it is two boxes on the bench with different names in them.

Q2. What do the error messages mean?

## The eight errors a Class 10 student meets, decoded

There are only about eight, and each names its cause once you can read it. Students who learn these as vocabulary fix most of their own programs; students who do not, stop and wait.

| What BlueJ says | What it means | Where to look |
| --- | --- | --- |
| cannot find symbol | A name is used that was never declared, or is spelt differently from where it was declared | The line shown: check the spelling and the capital letters of that variable or method, then check it was declared in scope |
| ';' expected | A statement did not end, usually a missing semicolon on the line above the one highlighted | The end of the previous line |
| incompatible types | A value of one type is being put where another type is required, such as a double into an int | The assignment on that line: cast it, or change the variable's type |
| missing return statement | A method promises to return a value but some path through it reaches the end without returning | The method's if and else branches: one of them forgets to return |
| unreachable statement | A line comes after a return or break, so it can never run | The lines after the return: move or remove them |
| ArrayIndexOutOfBoundsException | At run time, an index was used that the array does not have, usually length itself | The loop condition: i < a.length, never i <= a.length |
| NullPointerException | At run time, a method was called on a variable that holds nothing yet | Whether the object or array was actually created with new before use |
| InputMismatchException | At run time, Scanner was asked for one type and the user typed another | The nextInt or nextDouble call, and what the program told the user to type |

The first five stop the program compiling; the last three stop it while running, which is why testing with an awkward input matters: a program that compiles is not yet a program that works. In the Wednesday lab we plant one of these eight in a program on purpose most weeks and have the student find it using only the message, so that by the practical day a red bar is a clue rather than a crisis.

Q3. What does reading an error actually look like?

## The same red bar, met by two students

A method that should return a student's grade will not compile. One student stops; the other reads.

***Student one**sees gibberish, stops*

```
char grade() {
  if (marks >= 80) return 'A';
  else if (marks >= 60) return 'B';
}

BlueJ: missing return statement

// "But I did return! Twice!"
// Deletes the method. Retypes it.
// Same message. Closes BlueJ.
// Lab assignment unfinished.
```

The message is precise and the student never read it as a sentence. Every retype produces the same error because the error is in the logic, not the typing.

***Student two**reads the sentence*

```
char grade() {
  if (marks >= 80) return 'A';
  else if (marks >= 60) return 'B';
  else return 'C';
}

// "Missing return: some path reaches
//  the end without returning. Which one?
//  marks below 60. Add the else."
// Compiles. Runs. Tested with 45: C.
```

Same student ability, one habit apart: treat the message as a sentence about the program and ask which line it is describing. That habit is taught, and it is taught in one Wednesday.

The eight-error table above is the vocabulary; this is the grammar: read the message, find the line, ask what the message says about that line, change one thing, compile again. Four steps, repeated until it is automatic, and the practical examination turns from the day students fear into an ordinary Wednesday. The programs themselves, family by family, are on [Java programs practice](/icse-class-10-java-programs-practice).

Q4. How should the lab assignments be organised?

## Twenty-plus assignments as clean BlueJ projects an examiner can open in seconds

### The folder tree

One folder for the subject; inside it, one BlueJ project per assignment or per topic, named so that a stranger could find "the array search program" without opening anything. Each project holds its class source, and the output from the terminal window is captured into the written or printed file in whatever format the school specifies. The same tree lives on the home laptop and on a pen drive for the school lab, and it is copied, not rebuilt, at the end of every Wednesday.

### What each assignment carries

The program as it compiled, the variable description beside it, the real output, and a line saying what the assignment demonstrates. Twenty is the minimum; the batch produces closer to twenty-five, spanning every unit, so that when the external examiner opens one at random and asks the student to walk through it, the answer is the student's own. That walk-through is practised every Wednesday, in two sentences, after every program.

The project half of the internal assessment is drafted in the second term alongside the assignments, and both are rehearsed together before the school's practical day. The full internal assessment scheme, and how the second hundred marks are split between the school and the external examiner, is on [the syllabus explained](/icse-class-10-computer-applications-syllabus-explained).

Q5. What wins on the practical day?

## A problem, a lab machine, a clock, an examiner: the five habits that hold up

The school sets the day's format within CISCE's framework. What does not change is the behaviour that earns marks under time, and every one of these is rehearsed in the Wednesday lab.

1. #### Read the whole question before touching the keyboard

  Which family is it, what inputs, what exact output format, is a class skeleton given. Two minutes of reading prevents twenty minutes of rewriting, and students who start typing at the first sentence are the ones who run out of time.
2. #### Write the class shell first, then the variable description

  Class, main or the named methods, braces balanced, then every variable listed with its purpose before the logic exists. The description is the plan, and a program with a plan is typed once.
3. #### Compile early and often

  After the shell, after the variables, after each loop. A red bar after five lines is a one-minute fix; a red bar after sixty lines is an archaeology project. BlueJ makes compiling one click, so there is no reason to save it for the end.
4. #### Test with one ordinary input and one awkward one

  The example from the question, then an empty string, a zero, a negative, a value at the boundary. The three runtime errors in the table above only appear when the program runs, and the examiner will run it.
5. #### Be ready to explain any line out loud

  The examiner may ask what a line does or why a variable exists. A student who has said two sentences about every Wednesday program for a year answers without thinking, which is the calm the practical day rewards.

The dress rehearsal in the second term runs the whole day once: an unseen problem, the clock, and a teacher the student has not met asking questions. The theory paper's countdown, which follows the practical, is on [board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

Q6. What goes wrong in BlueJ specifically?

## Six environment mistakes that cost marks the syllabus never mentions

### The class name and the file name disagree

BlueJ names the file from the class, so renaming one without the other produces a program that cannot be found. Rename through BlueJ, never through the folder.

### Running before compiling

The class box is striped when it needs compiling, and running a stale class runs the old program. The stripes are the signal; the habit is compile, then run, every time.

### Input typed into the wrong window

Scanner reads from the terminal window, which may be behind the editor. Students type into nothing and conclude the program is frozen. Bring the terminal forward before running any program that asks for input.

### Projects scattered across the desktop

Ten projects in ten folders, half on a school machine, the pen drive somewhere in a bag. The folder tree exists so that every assignment is in one place on the day it is needed.

### Output not captured

The program ran, the terminal was closed, and the lab file has code with no output. Copy the terminal contents into the file before moving on; the file is the evidence.

### Treating the object bench as decoration

A year of BlueJ without ever creating an object on the bench is a year without its best teacher. Ten minutes with two objects of one class explains more about constructors than a chapter.

Q7. What does it cost?

## Monthly fees, with the Tuesday and Wednesday mini batch featured

BlueJ coaching is part of the standard batch, not a separate course. Billed monthly, no admission fee, stop at any month end, and the software itself is free.

Mini batch · Tue 5:30 PM and Wed 8 PM

₹2,999

per month

- Four or five students, one teacher all year
- Every Wednesday a BlueJ lab, screens shared
- Installation, lab file and practical rehearsal included
- Certificate on completion

Book the free demo

One to one

₹4,999

per month

- Private teaching on your own schedule
- Every compile watched, every error read together
- The usual choice for a student behind on the lab file

Enquire

Group batch · other timings

₹1,499

per month

- Ten to fifteen students
- Timings other than Tuesday and Wednesday
- The same BlueJ labs, a larger room

Ask about timings

What families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

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

The rest of the Class 10 series

## Nine more pages for Class 10 board students

Four more on ICSE Computer Applications, and five on the CBSE AI paper for families on the other board.

[The Tue and Wed mini batch/icse-class-10-java-classes-online](/icse-class-10-java-classes-online)[ICSE Computer Applications syllabus/icse-class-10-computer-applications-syllabus-explained](/icse-class-10-computer-applications-syllabus-explained)[ICSE Java programs practice/icse-class-10-java-programs-practice](/icse-class-10-java-programs-practice)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)[CBSE Class 10 AI classes/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[CBSE 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Python for CBSE Class 10 AI/python-for-cbse-class-10-ai](/python-for-cbse-class-10-ai)[CBSE AI board exam preparation/cbse-class-10-ai-board-exam-preparation](/cbse-class-10-ai-board-exam-preparation)[CBSE AI project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)

Questions about BlueJ

## What parents and students ask about the environment

### Is BlueJ free, and does it run on a Mac?

BlueJ is free and open source, and it runs on Windows, Mac and Linux. The Windows and Mac installers bundle a suitable Java runtime, so on most machines there is nothing else to install. We set it up together in the first class regardless, because the one family in five that hits an installation problem, usually an old operating system or a blocked download, deserves not to spend their first evening fighting it alone.

### Which version of BlueJ should a Class 10 student use?

A current BlueJ 5 release, version 5.4 or later, on Java 11 or later, which is what our course materials assume and what matches school labs that have updated. If the school runs an older version, the difference is cosmetic for Class 10 work: the class diagram, object bench, editor and terminal behave the same way, and a program written in one compiles in the other. What matters is that the student practises in the same kind of environment they will be examined in.

### Why does the paper mention BlueJ, and can another editor be used?

CISCE's syllabus and papers refer to programs in the BlueJ environment or any program environment with Java as the base, so the board is not strict about the tool. Schools are, in practice, because their labs run BlueJ and the internal assessment happens there. We teach in BlueJ for that reason and because its object bench and class diagram are genuinely good for learning what a class and an object are, which the syllabus's first two Class 10 units are about.

### My child's program will not compile and the error means nothing to them. What do you do?

We teach the error messages as vocabulary, because there are only about eight that a Class 10 student meets regularly, and each one names its cause once you know how to read it. The table on this page is the one we drill: cannot find symbol, missing semicolon, incompatible types, missing return statement, unreachable statement, the array index exception, the null pointer exception and the input mismatch. A student who can read those eight fixes most of their own programs without asking, which is the whole point.

### What is the object bench, and does it matter for the exam?

The object bench is the area at the bottom of the BlueJ window where objects live once you create them from a class: right-click a class, create an object, and it appears there so you can call its methods one at a time and inspect its fields. It is not examined directly, but it is the best tool there is for understanding the difference between a class and an object, what a constructor does, and what a method returns, all of which are examined. We use it heavily in the classes, methods and constructors units.

### How should the lab assignments be organised in BlueJ?

One BlueJ project per assignment or per topic, named clearly, each class saved with its source and the output captured from the terminal window. Schools differ on whether they want printed listings, a written file, or both, so ask early and follow the school's format exactly. We keep every student's assignments in a single folder tree so that nothing is lost between a home laptop and a school machine, and so that the external examiner's request to see any assignment takes seconds.

### What happens on the practical examination day?

The student is given a problem to solve in Java, typically one or more programs in the style of the lab work, and writes, compiles, tests and demonstrates them in the school lab within a set time, with the examiner able to ask questions about the work. Details of timing and format are set by the school within CISCE's framework. What does not vary is what wins: reading the question fully, writing the class shell first, compiling early and often, and testing with an awkward input before saying finished.

### Does slow typing hold a student back in BlueJ?

Less than families fear. Class 10 programs are short, thirty to sixty lines, and BlueJ's editor auto-indents and matches braces, which removes much of the fiddly typing. What slows students is not typing speed but retyping: a program written without a plan gets rewritten three times. Writing the class shell, then the variable description, then the logic, in that order, is faster than fast typing.

### What does the BlueJ coaching cost?

It is part of the standard Computer Applications batch rather than a separate course: the Tuesday and Wednesday mini batch of four or five, one to one, and the larger group batch on other timings are shown on this page in your own currency, billed monthly with no admission fee. The free demo class is a BlueJ session, so the installation and the first program happen before any decision.

### How do we start?

Send the form and a mentor books a free demo class. If BlueJ is not yet installed, the demo begins with installing it together, then the student writes and compiles a first class, meets a deliberate compiler error, reads it using the table on this page, and fixes it. By the end of the hour BlueJ is set up, the student has a working program, and you have watched the format on your own child.

Start

## The free demo installs BlueJ and plants one error

If BlueJ is not on the laptop yet, the first ten minutes put it there. Then the student writes a class from nothing, compiles it, and meets one error the teacher has planted on purpose: a missing semicolon or a missing return. They read the message using the table on this page, find the line, fix it, and run the program. An hour later the environment is set up, the student has read their first error as a sentence, and you have watched the habit that carries the whole practical half of the subject.

Reading further first? [Java programs practice](/icse-class-10-java-programs-practice) holds the programs that get written in this environment, and the [batch page](/icse-class-10-java-classes-online) explains the Tuesday and Wednesday rhythm.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20My%20child%20needs%20help%20with%20BlueJ%20for%20ICSE%20Class%2010%20Computer%20Applications.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every session is a live video class. The form books one callback and nothing else.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-bluej-java-coaching*
