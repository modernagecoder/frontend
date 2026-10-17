---
title: "CodeHS Help for Students: Errors, Resets and Debugging"
description: "CodeHS help for students: how to reset an assignment, use the debugger and Scratchpad, read autograder messages, and fix login, freezing and Chromebook issues."
canonical: https://learn.modernagecoders.com/codehs-help-for-students
source: src/pages/codehs-help-for-students.html
---
> Most CodeHS problems have documented fixes. A frozen Check Code button usually means an infinite loop. To start an exercise over, open More, then History, choose Reset Code and press Save. In unit-test exercises, write and run your function in the Scratchpad, and make it return a value. For login trouble, use your school email or your class&rsquo;s Google, Clever or Canvas sign-in.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / CodeHS help

United States · Middle and high school · CodeHS

# CodeHS help for students

CodeHS is a browser-based coding platform used in school computer science classes from Karel the Dog all the way to AP Computer Science A. When it goes wrong, it tends to go wrong in the same handful of ways: the Check Code button stops responding, a unit test fails even though the code looks right, the autograder complains about style, or the login sends you to the wrong account. CodeHS documents every one of these in its own help center. This page collects those fixes in one place, adds small examples of our own, and is clear about one thing from the start: we explain how things work, and we do not hand out answers to assignments.

At a glance: For: Grades 6 to 12; Tool: CodeHS, in the browser; Languages: Karel, Python, Java, JavaScript; Exam link: AP CSA and AP CSP; Answers: Never; we teach the idea; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for students who meet CodeHS at school

Live lessons that teach the ideas behind the exercises, so the CodeHS work makes sense.

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java for the AP exam, unit by unit, alongside your school course.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The big ideas, the exam and planning a Create task of your own.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. Functions, loops and testing, from first principles.

## What is going wrong, and where CodeHS explains the fix

Each row is a problem CodeHS documents in its help center, with the fix it gives. Start with the row that matches your screen.

**Common CodeHS problems and the documented fixes, from help.codehs.com (read 17 October 2026)**

| What you see | What CodeHS says it usually means | What to try |
|---|---|---|
| The browser freezes or crashes after Run or Check Code | The code contains an infinite loop | Comment out loops one at a time to find it, then make sure its condition can become false |
| The Check Code button does nothing | An error in your code, or an infinite loop | Run the program first and read any error message |
| You want to start an exercise again | Reset Code restores the starter code | More, then History, then Reset Code, then Save |
| A unit test freezes after Check Code | User input inside a unit-test function, or no return value | Remove input the instructions did not ask for; make the function return |
| A Karel exercise fails on style | The general Karel autograder checks syntax, indentation and naming | Read the exact Style message; it names the line or function |
| Your HTML page shows No CodeHS.me Site Here | The program was blocked, or a link does not match a filename | Check whether your links and filenames match exactly |
| The cursor is misaligned on a Chromebook | The browser font is not monospace | Set Chrome&rsquo;s fixed-width font to one with Mono in its name |
| A lesson video will not play | The video host is blocked on the school network | Use the CodeHS-hosted version of the video, or the lesson slides |

### Reset Code, carefully

CodeHS says Reset Code is available for both teachers and students, and that after clicking it you must save the change with the Save button. It returns the exercise to its starter code, so anything you wrote is replaced.

Before resetting, look through the History tab. CodeHS describes it as a list of every previous version of your program, which often lets you recover the last version that worked instead of starting from nothing.

### Ask your teacher inside CodeHS

CodeHS has a built-in way to message your teacher about a specific exercise: open the More tab in the code editor and choose Conversation. Replies appear in your Inbox, under the bell icon.

Asking there, with the exercise open, is usually faster than an email, because your teacher can see the exact code you mean.

Sources: CodeHS help center articles on [code that crashes the browser](https://help.codehs.com/en/articles/4454484-for-students-fixing-code-that-crashes-the-browser), [resetting your code](https://help.codehs.com/en/articles/2708287-resetting-your-code) and [sending questions to your teacher](https://help.codehs.com/en/articles/4454503-for-students-sending-questions-to-your-teacher), read 17 October 2026. We are not connected with CodeHS.

## The debugging tools already inside the CodeHS editor

CodeHS lists five tools for students in its debugging article, plus a separate step debugger for some program types. Most students use one or two of them. All of them help.

**CodeHS editor tools for finding bugs, from the CodeHS help center (read 17 October 2026)**

| Tool | Where it is | What it is good for |
|---|---|---|
| Docs tab | In the code editor | Examples and syntax of the concepts your course has covered so far |
| History tab | Under More | Every earlier version of your program, to see what changed since it last worked |
| Speed slider | In the editor | Running code slowly to see where it goes off track |
| Next and Last buttons | Top of the editor | Running one line at a time to find the exact line at fault |
| Test Code button | Red button in the editor | Seeing which autograder tests pass; a progress bar counts them |
| Step debugger | Gear icon, then Debug Mode | Pausing a Python 3, Python 3 Graphics (tkinter) or Java (main) program and stepping through it |

### The step debugger, in five buttons

CodeHS describes five debugger functions: Run, which runs normally; Step, which moves to the next command even inside another file or library; Next, which moves to the next command in the current file; Continue, which runs until the end or a crash; and Stop.

Most students only need Next. Press it, watch which line lights up, and check whether the variables hold what you expected at that moment.

### Commenting out, the low-tech tool

CodeHS recommends commenting out sections and re-running, so the skipped code tells you by elimination where an error lives. For infinite loops, it suggests testing sections with for or while loops first, then if and else statements, then the rest.

It is a slow method, but it never fails, and it works in every language and every editor you will ever use.

Sources: CodeHS help center, [tips on debugging code](https://help.codehs.com/en/articles/4454472-for-students-tips-on-debugging-code) and [using the step debugger](https://help.codehs.com/en/articles/5142494-using-the-step-debugger), read 17 October 2026.

## Why a unit test fails when your code looks right

Many CodeHS exercises in Python, JavaScript and Java are graded by unit tests. CodeHS explains how they differ from a normal program, and the difference trips up a lot of students.

**The two files in a CodeHS unit-test exercise, from the CodeHS help center (read 17 October 2026)**

|  | Unit Test file | Scratchpad file |
|---|---|---|
| Graded? | Yes | No |
| Can you Run it and print? | No: it can not Run or print to the console | Yes: it can Run and print to the console |
| What belongs in it | A fully working function that works as expected | Experiments: different inputs, print statements, mistakes |
| What CodeHS requires | A Unit Test requires a return statement and does not ask for user input | Anything that helps you test the function |

### The CodeHS routine, step by step

CodeHS gives four steps: copy the starter code from the Unit Test into the Scratchpad; write and test your function in the Scratchpad, where you can run it; copy the working function back into the Unit Test file; and when it passes all the checks, submit it.

If the program will not run, CodeHS points out that the green Run button only runs the Scratchpad, not the Unit Test file, and that you need to both define and call the function to see anything.

### Why the test does not show you the answer

Students sometimes ask why CodeHS will not just show what the test expected. The test is there to check your function, and the exercise is there to teach you to write it. That is the same reason we teach the idea of returning a value rather than supplying the function.

A good question to ask yourself instead: if someone called my function with a value I did not try, what would it give back?

Source: CodeHS help center, [using the Scratchpad and Unit Test files](https://help.codehs.com/en/articles/4836907-for-students-using-the-scratchpad-and-unit-test-files), read 17 October 2026.

## What the Karel autograder is telling you

Karel exercises use a general autograder that applies a set of tests to each program, from the final world to the way functions are named. CodeHS publishes the common messages. Here is what each one asks you to check.

**Common Karel autograder messages, quoted from the CodeHS help center (read 17 October 2026)**

| Message | What it checks | What to look at |
|---|---|---|
| Functionality: World _______ | Karel&rsquo;s location, ball count and square colors at the end, against each Result World | Run it and compare your final world with the expected one |
| Style: You are missing a semicolon on the following lines: | That every command ends with a semicolon | The line numbers listed |
| Style: It looks like your indentation is off on line ___ | Indentation | Code inside a function or loop should be indented one level |
| Style: Some of your functions (FunctionName) do not start with a lowercase letter. | Function naming | Names like turnRight, not TurnRight |
| Style: You have a function function1 nested inside another function function2. | Functions defined inside other functions | Define functions one after the other |
| Style: You should not redefine turnRight()/turnAround() because SuperKarel already knows it. | Unneeded definitions in SuperKarel and UltraKarel | Delete your own turnRight or turnAround |

### Functionality first, then style

A program can make Karel finish in the right place and still fail on style, and the other way round. Fix the Functionality test first, because changing what the program does may change which style messages appear.

Then work through the Style messages in order. Each one quotes the exact name or line, so there is no guessing involved.

### Why style is graded at all

Naming functions in lowercase camelCase and indenting consistently are conventions every programmer follows, because code is read far more often than it is written. Karel is where CodeHS starts teaching that habit.

Students who build it early find their later Java and Python code much easier to debug, because they can see the structure at a glance.

Source: CodeHS help center, [Karel autograder messages](https://help.codehs.com/en/articles/7996203-for-students-karel-autograder-messages), read 17 October 2026.

## Login trouble, Chromebooks and which version of Java or Python you are on

Some CodeHS problems have nothing to do with code. These are the ones CodeHS documents for signing in, school devices and language versions.

**Language versions on CodeHS, from the CodeHS help center (read 17 October 2026)**

| Language | What CodeHS says |
|---|---|
| Python | Python 3.8, 3.11 and 3.12 are provided; Python 3, Python 3 Graphics (tkinter) and Pygame programs use 3.11 |
| Java | Most core courses currently use Java 8 (1.8); Java 21.05 is used in AP Computer Science A (Cortado), all new courses and all new Sandbox programs |
| JavaScript | ES6, the version all browsers use |
| Java, interactive | JShell, a Java read-eval-print loop, is supported |

Versions matter when code from a textbook, a website or a home computer behaves differently on CodeHS. A newer Java feature will not compile in a course still on Java 8. Sources: CodeHS help center, [login troubleshooting](https://help.codehs.com/en/articles/4456742-for-students-resetting-your-passwords-and-login-troubleshooting), [Chromebook cursor fixes](https://help.codehs.com/en/articles/5678174-fixing-cursor-or-typing-bugs-in-the-ide-on-chromebooks) and [language versions](https://help.codehs.com/en/articles/5118034-versions-of-programming-languages-on-codehs), read 17 October 2026.

## Why we do not give CodeHS answers, and what helps instead

Search for CodeHS and the suggestions fill up with answer keys for every unit. We understand why: it is late, the test will not pass, and the deadline is tomorrow. Here is why we will not supply them, and what we do instead.

### The work is graded

CodeHS exercises are graded by your teacher and the autograder. Copying an answer means handing in work that is not yours, and we will not take part in that.

### Schools set rules for this

CodeHS gives teachers settings such as copy and paste prevention, which in CodeHS Pro stops students in a section from pasting into the editor. Schools take this seriously.

### The next unit needs this one

CodeHS courses build step by step. An answer copied in unit 3 leaves a gap that the unit 5 exercise will find, usually at a worse moment.

### What a lesson with us looks like instead

The student shares their screen with the CodeHS exercise open. The teacher asks what the exercise wants, what the code does now, and what the autograder message says, and then teaches the idea that is missing, using a different example of our own.

The student then goes back to their exercise and writes the code themselves. It takes longer than copying, and it is the only version that helps on the next exercise and on the test.

### AP students on CodeHS

CodeHS says its AP Computer Science A course (Cortado) runs Java 21.05. The AP exam itself is, in College Board&rsquo;s words, a fully digital exam taken in the Bluebook app, so CodeHS is where you practice, not where you sit the test.

For exam-focused help alongside your school course, see our [AP Computer Science A classes](/ap-computer-science-a-online-classes) or [AP CSP coaching](/ap-computer-science-principles-online-coaching).

Sources: CodeHS help center, [copy and paste prevention](https://help.codehs.com/en/articles/1108168-enabling-copy-paste-prevention); College Board, [AP Computer Science A Exam](https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam). Both read 17 October 2026. AP is a trademark of College Board, which is not connected with us.

## Four stages of a CodeHS student

Where students usually are when they first search for CodeHS help, and where they can get to.

**Stages of working through CodeHS (ours)**

| Stage | What it looks like |
|---|---|
| 1. Stuck | Presses Check Code again and again, hoping for a different result |
| 2. Reading | Reads the autograder and error messages and goes to the line they name |
| 3. Testing | Uses the Scratchpad, the History tab and the debugger to check ideas |
| 4. Independent | Finishes exercises without help and can explain how the code works |

### For parents

A child who is stuck on CodeHS at 10 pm needs to understand one idea, not to be given one answer.
Asking them to read the autograder message aloud is a surprisingly good first step, even if you do not code.

### For students

Run before you check. The Run output often shows the problem the autograder is hinting at.
Use History before Reset. Your last working version is usually still there.

## Nine courses that match what CodeHS students learn at school

Live teaching with a regular teacher, as a batch or one to one, in the same languages CodeHS uses.

### AP and exam courses

High school

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): The Java AP course, live.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): Exam topics and the Create task process.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Java before or beside AP CSA.

### Languages CodeHS teaches

Teens

- [Python for teens](/courses/python-complete-masterclass-teens): Functions, lists and testing.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Interactive pages and browser games.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): The web design units, in depth.

### Younger coders

Ages 6 to 12

- [Scratch coding](/courses/scratch-programming-complete-course): Events and loops in blocks.
- [Python for kids](/courses/python-ai-kids-masterclass): Typed code with turtle art and games.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): From blocks to first real apps.

## Live help that fits around the school day

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Late afternoons and evenings in US time zones.
- **Weekends** A weekly slot away from the school rush.
- **1-on-1** Booked around unit tests and deadlines.

- **One teacher** The same teacher, week after week.
- **CodeHS on screen** Share the exercise; we teach the idea.
- **Our own examples** Different problems that teach the same concept.
- **No answer keys** Your CodeHS work stays yours.
- **All fifty states** Live and online, wherever you are.
- **Batch or one to one** Fifteen to twenty students, or one.

## Fees

CodeHS is provided by your school; our classes are separate. You pay for live teaching one month at a time, in US dollars, with nothing to sign for the semester and no cost for stopping at the end of any month.

- Free first class: USD 0. A free first lesson. Bring the exercise you are stuck on. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners. A regular teacher. Choose your batch. Monthly payment.
- One to one: USD 150 a month. A private teacher. At times that suit you. Built around your school course.

## CodeHS help: common questions

### Why is my CodeHS not working?

CodeHS says that if the browser freezes or the Check Code button stops responding, the code may contain an error or an infinite loop. Run the program first, read any message, and check that every loop has a condition that can become false.

### How do I reset a CodeHS assignment?

Open More, then History, in the editor and click Reset Code, which restores the starter code. CodeHS says to save afterwards with the Save button. Look through History first, because an earlier working version may still be there.

### Why does my CodeHS unit test fail when my code prints the right answer?

A unit test checks what your function returns, not what it prints. CodeHS says a unit test requires a return statement and does not ask for user input. Test the function in the Scratchpad, then copy it back.

### What is the CodeHS Scratchpad for?

It is an ungraded file in unit-test exercises where you can run code, print and try different inputs. The Unit Test file is the graded one and cannot be run or print to the console.

### What does You are missing a semicolon mean in Karel?

It is a Karel autograder style message. CodeHS says the test checks that every command ends with a semicolon, and the message lists the lines where one is missing.

### How do I use the CodeHS debugger?

Click the gear icon in the editor and turn on Debug Mode. CodeHS says the step debugger works for Python 3, Python 3 Graphics (tkinter) and Java programs with a main method, with Run, Step, Next, Continue and Stop.

### I cannot log in to CodeHS. What should I do?

Use your school-issued email, not a personal one. If your class uses Google, Clever or Canvas, sign in through that. You can also use Forgot Password, or ask your teacher, who can update your password.

### Which version of Java does CodeHS use?

CodeHS says most core courses use Java 8, while its AP Computer Science A course (Cortado), all new courses and new Sandbox programs use Java 21.05. You can check any exercise under More, then About.

### Can you give me the CodeHS answers?

No. We do not provide CodeHS answers, answer keys or solutions to any graded assignment. We teach the concept with our own examples so you can solve the exercise yourself and explain your code.

### When are your live classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do the classes cost?

The first lesson is free. After that, classes are paid one month at a time, and the fees section of this page shows the amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Every page we have for US families.
- [How to debug code](/how-to-debug-code): A step-by-step method for any bug.
- [AP Computer Science A classes](/ap-computer-science-a-online-classes): Live AP CSA preparation.
- [AP CSP coaching](/ap-computer-science-principles-online-coaching): Live AP CSP preparation.
- [AP CSP or AP CSA first?](/blog/ap-csp-vs-ap-csa-which-to-take-first): Choosing an order for the two courses.
- [Python for beginners](/blog/python-for-beginners): The basics behind the Python units.

## Contact

Book the free first class at [https://learn.modernagecoders.com/codehs-help-for-students](https://learn.modernagecoders.com/codehs-help-for-students#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
