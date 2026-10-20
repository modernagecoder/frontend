---
title: "Code.org App Lab Help: Fix Events, Variables and Screens"
description: "Code.org App Lab help from the official docs: why a button does nothing, why a score resets, getText versus getNumber, screens, sounds and data, and AP CSP rules."
canonical: https://learn.modernagecoders.com/code-org-app-lab-help
source: src/pages/code-org-app-lab-help.html
---
> Most App Lab bugs break one of four documented rules: an onEvent must come after the element it listens to, with an id typed exactly; variables that must keep their value are created once with var at the top, never inside onEvent; getText returns text, so use getNumber for arithmetic; and data callbacks finish later, so never put them in a loop. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Code.org App Lab help

United States · Grades 8 to 12 · Code.org App Lab

# Code.org App Lab help: fixing events, variables and screens

App Lab is where a lot of American students build their first real app: a quiz, a pet poll, a game with a timer, often as part of AP Computer Science Principles. It is friendly, it runs in the browser, and it lets you switch between blocks and JavaScript text. It also has a few rules that are easy to miss, and when one is broken the app does not crash with a clear message. A button simply does nothing, a score stays stuck at 1, or a total of 10 plus 5 comes out as 105. Every one of these has an explanation in the official App Lab documentation, and this page walks through them with small examples of our own.

At a glance: For: Grades 8 to 12; Tool: App Lab, in the browser; Language: JavaScript, blocks or text; Docs read: 17 October 2026; Exam link: AP Computer Science Principles; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for students building apps in App Lab

Each is taught live, starting from the app your student already has open.

- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The exam, the big ideas and how to plan a Create task that is your own.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): The language under App Lab&rsquo;s blocks, for real websites and games.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): The next step after App Lab: apps for real phones.

## App Lab at a glance, from its own pages

Before fixing anything, it helps to know what App Lab is designed for and what it expects of the device you use. This is what its makers publish.

**App Lab facts, from code.org/en-US/tools/app-lab and the App Lab documentation (read 17 October 2026)**

| Point | What the page says |
|---|---|
| What it is | App Lab &ldquo;is a programming environment where you can make simple apps right in the browser.&rdquo; |
| Language | JavaScript, written &ldquo;with either blocks or text&rdquo; |
| Ages listed | 13 to 18, level Beginner |
| Devices listed | Laptop, Chromebook, Tablet; all modern browsers |
| Device advice in the editor | &ldquo;App Lab works best on a desktop or laptop computer with a mouse and keyboard.&rdquo; |
| Courses that use it | Intro to App Lab (grades 8 to 12) and Computer Science Principles (grades 9 to 12) |

### Code.org or CodeAI?

If the site looks different from what your teacher showed you, that is not your imagination. The footer of the App Lab page, read on 17 October 2026, says the organization is now CodeAI and that "Code.org" is a former trademark of CodeAI.

App Lab itself still lives at studio.code.org, your projects are where they were, and the documentation pages still carry the familiar function names. We use the name Code.org here because that is what students search for.

### What language is App Lab?

It is JavaScript. The blocks are a visual way of writing the same JavaScript, and you can switch between the two views. That is why the skills transfer: an onEvent block is the same idea as an event listener on any website.

It also explains some surprises. JavaScript happily adds text and numbers together by joining them, which is the cause of one of the commonest App Lab bugs, covered below.

Sources: [App Lab tool page](https://code.org/en-US/tools/app-lab) and [App Lab documentation](https://studio.code.org/docs/ide/applab), read 17 October 2026. Code.org&rsquo;s support site returned an access error to our request, so no help-desk article is quoted here. We are not connected with Code.org or CodeAI.

## What your app is doing, and the documented reason

App Lab rarely stops with a red error for these bugs. It just behaves strangely. Match the behavior to a row, then read the rule behind it.

**App Lab symptoms and the rule behind each, from the App Lab documentation (read 17 October 2026)**

| What you see | The rule the docs give | What to check |
|---|---|---|
| Clicking a button does nothing | The UI element must be defined in your code before the matching onEvent() event handler | The element exists first, and the id in onEvent matches it exactly |
| An id is rejected or never matches | An id must begin with a letter, contain no spaces, and may contain letters, digits, - and _ | Rename ids like my button or 2ndScreen |
| A score or counter stays at 1 | Create variables once, at the top, outside any function or onEvent | Remove var from inside the handler |
| 10 plus 5 shows 105 | getText returns a string; with a number, arithmetic will not be possible | Use getNumber for numeric input |
| A screen&rsquo;s buttons do nothing after switching screens | Only one screen can be visible at a time, and each has its own elements | Call setScreen with the right screen id; the default is screen1 |
| A sound will not play | The sound URL requires the full http:// prefix | Use a complete URL, or upload the file and pick it with Choose |
| Data from a table arrives late or out of order | createRecord and readRecords have callbacks and will not finish immediately | Use the data inside the callback; never put these calls in a loop |
| A warning that event is defined but not called | The documentation says you can ignore it | Nothing to fix |

### Where things go in the code

The onEvent documentation suggests an order for every program: screen elements at the top, event handlers in the middle, other code and functions at the end. Following it prevents the first two rows of the table almost by itself.

If you build the screen in Design Mode, the elements already exist when the code runs, and the id dropdown in the onEvent block lists them, which removes typing mistakes.

### Tables are per app

The createRecord documentation adds a detail that confuses students sharing projects: data is only accessible to the app that created the table. A second app, even one you made yourself, cannot read it. To look at what your app has stored, the docs point to the View data button.

Column names matter too. The docs say the object property names must match the table&rsquo;s column names, and that both are case sensitive, so score and Score are different columns.

Sources: App Lab documentation for [onEvent](https://studio.code.org/docs/ide/applab/expressions/onEvent), [getNumber](https://studio.code.org/docs/ide/applab/expressions/getNumber), [setScreen](https://studio.code.org/docs/ide/applab/expressions/setScreen), [playSound](https://studio.code.org/docs/ide/applab/expressions/playSound) and [createRecord](https://studio.code.org/docs/ide/applab/expressions/createRecord), read 17 October 2026.

## Why your score keeps resetting: var inside onEvent

This is the App Lab bug teachers see most, and the documentation has a page devoted to it. Here is the bug in a few lines, then the fix.

### What the documentation says

The App Lab concept page on variable scope gives three rules: use var only once, create your variables at the top of your program, and create them outside any function or onEvent block.

It describes the broken version exactly: although it looks like one variable, there are actually two, one local and one global, both named count, and changing one has no effect on the other.

### The habit that prevents it

The documentation&rsquo;s updateScreen pattern helps here too: keep the app&rsquo;s state in global variables, have every event handler change those variables, then call one function, updateScreen, that redraws everything from them.

Students who adopt that shape write handlers that are three lines long and almost never have this bug again.

Sources: App Lab concepts, [Debugging Variable Scope: Functions](https://studio.code.org/docs/concepts/patterns/debugging-variable-scope-functions/), [Counter Patterns with Event](https://studio.code.org/docs/concepts/patterns/counter-patterns-with-event/) and [The updateScreen() Pattern](https://studio.code.org/docs/concepts/patterns/update-screen-pattern/); [console.log](https://studio.code.org/docs/ide/applab/expressions/console.log). All read 17 October 2026.

## An eight-step routine for an App Lab app that misbehaves

Our order, built on the documentation&rsquo;s rules. It moves from the cheapest checks to the ones that take longer.

**App Lab variable naming rules, from the documentation (read 17 October 2026)**

| Rule | Breaks it | Follows it |
|---|---|---|
| Labels cannot include spaces | width of rectangle | widthOfRectangle |
| Labels cannot begin with a number | 2morrow | tomorrow2 |
| Labels are case-sensitive | size and Size used as one variable | size used everywhere |
| Be consistent | Mixing camelCase and underscores | One style throughout |

The same routine works in any language with events, which is why it is the first thing we teach in [JavaScript basics](/blog/javascript-basics). For a wider method that also covers languages without events, see [how to debug code](/how-to-debug-code).

## App Lab and the AP CSP Create performance task

Many AP Computer Science Principles classes build the Create performance task in App Lab. College Board&rsquo;s rules for that task are strict, and every App Lab student in an AP class should know them.

**AP CSP exam and Create task facts, from AP Central and the AP CSP Course and Exam Description (read 17 October 2026)**

| Point | What College Board says |
|---|---|
| Create task deadline | Fri, Apr 30, 2027, 11:59 PM ET, submitted as final in the AP Digital Portfolio |
| End-of-course exam | Fri, May 14, 2027, in the Bluebook app |
| Section I | 70 multiple-choice questions, 120 minutes, 70% of score |
| Section II | The Create task and two written responses, 30% of score; 9 hours of in-class time for the task |
| Errors on the exam | Written Response 2(b), Errors and Testing, includes CRD-2.I.a: Identify the error, and CRD-2.I.b: Correct the error |
| Plagiarism | Using code or media created by someone else or with generative AI tools, without acknowledgment, scores 0 on the Create task, including the written responses |
| Generative AI | Permitted as supplementary resources for understanding coding principles, assisting in code development, and debugging; the student must review, understand and be able to explain any such code |

### Why debugging your own App Lab code matters for the exam

On exam day, students answer written questions about the code in their own Personalized Project Reference, including identifying and correcting an error. A student who fixed their own App Lab bugs during the 9 hours can answer those from experience.

A student whose code was fixed by someone else has nothing to draw on. That is the practical reason, beyond the rules, to do your own debugging.

### What we will and will not do

We never write, fix or review a student&rsquo;s Create task code, and we do not provide answers to any graded App Lab assignment. In class we teach the concepts with separate examples of our own, like the ones on this page, so the work stays the student&rsquo;s.

We also do not point under-18 students to general AI chatbots whose terms are for adults. If a school allows AI help under College Board&rsquo;s policy, that is between the student, the teacher and the tool&rsquo;s own age rules.

Sources: [AP Computer Science Principles Exam](https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam) and the [AP CSP Course and Exam Description](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-principles-course-and-exam-description.pdf) (Guidelines for Completing the Performance Task), read 17 October 2026. AP is a trademark of College Board, which is not connected with us. For course choices, see [AP CSP or AP CSA first](/blog/ap-csp-vs-ap-csa-which-to-take-first).

## Four stages of an App Lab student

Where students usually are when they first get stuck, and where they can head next.

**Stages of building in App Lab (ours)**

| Stage | What it looks like |
|---|---|
| 1. Designing | Places buttons and labels in Design Mode, little code yet |
| 2. Reacting | Writes onEvent handlers that change text on screen |
| 3. Remembering | Keeps state in global variables and updates the screen from them |
| 4. Structuring | Uses functions, lists and stored data, and debugs with console.log |

### For parents

An app that misbehaves without an error message is genuinely harder to fix than one that crashes. Being stuck here is normal.
Ask your child what the app should do and what it does instead. That gap is where the bug is.

### For students

Put var at the top, once. It fixes more App Lab bugs than anything else.
Log first, guess later. One console.log line beats ten minutes of staring.

## Nine courses for students who like making apps

Live, with one regular teacher, and in a group or one to one: whichever suits the student.

### Web and apps

Teens

- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): The language beneath App Lab.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Real phone apps with React Native.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): Pages that look the way you designed.

### AP and beyond

High school

- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The course App Lab often belongs to.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): The Java AP course that follows.
- [Python for teens](/courses/python-complete-masterclass-teens): A second text language.

### Starting younger

Ages 6 to 12

- [App making for kids](/courses/block-coding-app-development-masterclass): Apps from blocks, before text.
- [Scratch coding](/courses/scratch-programming-complete-course): Events and variables in games.
- [Web development for kids](/courses/kids-ai-web-development-course): First websites, step by step.

## Live lessons around a US school schedule

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school slots across Eastern to Pacific time.
- **Weekends** For students who prefer a quiet weekly hour.
- **1-on-1** Planned around project and exam dates.

- **A regular teacher** One person who knows your progress.
- **Screen sharing** Your App Lab project, seen live.
- **Concepts first** We teach with examples of our own.
- **Create task stays yours** We never touch graded code.
- **Online, any state** From home, wherever you live.
- **Batch or one to one** Fifteen to twenty, or just one student.

## Fees

App Lab is free to use, and our lessons are a separate choice. Teaching is paid one month at a time, with the fee shown in US dollars, no term contract, and nothing to pay for stopping once a month is done.

- Free first class: USD 0. A free first lesson. Show us the app you are building. No card details.
- Group batch: USD 100 a month. Fifteen to twenty learners. A regular teacher. Choose your batch. Month by month.
- One to one: USD 150 a month. Private lessons. At times you pick. Shaped around your class.

## App Lab help: common questions

### Why does my App Lab button not do anything?

The App Lab documentation says the UI element must be defined in your code before its onEvent handler, and the id must match exactly. Check the id letter by letter against Design Mode, and make sure the handler comes after the element.

### Why does my App Lab score stay at 1?

Usually because var score = 0 is inside the onEvent handler, which creates a new variable on every click. The App Lab documentation says to use var only once, at the top of the program, outside any function or onEvent.

### Why does App Lab add 10 and 5 to get 105?

getText returns text, so the plus sign joins the two values together. The documentation says arithmetic is not possible with that result. Use getNumber to read numbers from a text input or slider.

### What language does Code.org App Lab use?

JavaScript. App Lab lets you write it with either blocks or text and switch between them, according to the App Lab tool page.

### How do I add sound in App Lab?

Use playSound with the address of an MP3 file. The documentation says the sound URL needs the full http:// prefix, or you can upload your own file and choose it, in which case the file name is enough.

### How do I switch screens in App Lab?

Use setScreen with the id of the screen you want. The documentation says the default screen id is screen1, and that only one screen can be visible at a time.

### Does App Lab work on a Chromebook or tablet?

The App Lab tool page lists laptop, Chromebook and tablet. The editor itself recommends a desktop or laptop computer with a mouse and keyboard for building apps.

### Is Code.org now called CodeAI?

The footer of the App Lab page, read on 17 October 2026, says the organization is CodeAI and that Code.org is a former trademark of CodeAI. App Lab is still at studio.code.org.

### Can you help me with my AP CSP Create task in App Lab?

We teach the concepts the task needs with our own examples, but we never write, fix or review Create task code. College Board says plagiarism, including unacknowledged AI-generated code, scores 0 on the Create task.

### When are classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do the classes cost?

The first lesson is free. After that, lessons are paid month by month, and the fees section on this page shows the amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): All of our pages for American students.
- [AP CSP coaching](/ap-computer-science-principles-online-coaching): Live preparation for AP Computer Science Principles.
- [AP CSP or AP CSA first?](/blog/ap-csp-vs-ap-csa-which-to-take-first): Which AP course to take first.
- [JavaScript basics](/blog/javascript-basics): The language App Lab is built on.
- [How to debug code](/how-to-debug-code): A general method for any bug.
- [Web project ideas](/blog/html-css-javascript-project-ideas): What to build after App Lab.
- [Java cannot find symbol error](/java-cannot-find-symbol-error): Java cannot find symbol, decoded: real javac output, eight causes, numbered fixes.
- [BlueJ not working: fixes](/bluej-not-working-fix): BlueJ not working? Official fixes for install, VM errors, output and frozen runs.
- [Eclipse Java help for students](/eclipse-java-help-for-students): Eclipse for Java students: install, run, read errors, fix Java version and memory.

## Contact

Book the free first class at [https://learn.modernagecoders.com/code-org-app-lab-help](https://learn.modernagecoders.com/code-org-app-lab-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
