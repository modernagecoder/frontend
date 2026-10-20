---
title: "BlueJ Not Working? Fixes for Install, Output and Frozen Programs"
description: "BlueJ not working? Fixes from the official BlueJ FAQ for a missing JDK, the virtual machine error, grayed-out buttons, no terminal output and frozen programs."
canonical: https://learn.modernagecoders.com/bluej-not-working-fix
source: src/pages/bluej-not-working-fix.html
---
> Most BlueJ problems have four causes, all covered in the official BlueJ FAQ: no Java kit found (reinstall BlueJ with its bundled JDK), a firewall or proxy blocking BlueJ&rsquo;s local connection, a class that is not compiled yet (grayed options), or a program waiting silently for keyboard input in the terminal. Check them in that order. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / BlueJ not working

United States · Grades 9 to 12 and college · BlueJ

# BlueJ not working? The fixes, in the order to try them

BlueJ is built for beginners, and most of the time it is pleasantly simple: draw classes, compile, right-click to make objects. So when it refuses to open, grays out its buttons, or runs a program that seems to do nothing at all, students tend to assume they broke something. Usually they did not. The BlueJ team publishes a frequently asked questions page that covers nearly every one of these failures, and the causes are few: a missing or mismatched Java kit, a firewall blocking BlueJ&rsquo;s two halves from talking, a class that has not been compiled yet, or a program quietly waiting for input. This page puts those fixes in the order that solves problems fastest.

At a glance: For: Grades 9 to 12 and college; Tool: BlueJ, free; Version read: 6.0.1; Language: Java; Exam link: AP Computer Science A; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three Java courses for students who started in BlueJ

BlueJ is a fine place to learn objects. These courses take that understanding further, live.

- [Java for teens](/courses/java-programming-masterclass-for-teens): Ages 13 to 18. Classes, objects and methods, then real programs.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Class design, ArrayList and 2D arrays the way the exam asks for them.
- [Java for college](/courses/complete-java-programming-masterclass-college): From the object bench to full applications.

## What you see, what it usually means, and the fix

Every row is an entry in the official BlueJ FAQ. Find the line that matches your screen, then read the fuller explanation further down.

**BlueJ symptoms and fixes, from bluej.org/faq.html (read 17 October 2026)**

| What you see | What the FAQ says causes it | What to do |
|---|---|---|
| &ldquo;BlueJ could not find any Java systems. A JDK must be installed to run BlueJ.&rdquo; | No Java development kit was found | Reinstall BlueJ from bluej.org; the FAQ says most installers now ship with the correct JDK included |
| &ldquo;Bluej was unable to create a virtual machine (VM) to execute projects&rdquo; | Usually firewall software blocking BlueJ&rsquo;s local connection; on Windows, also accented or non-English characters in the project path | Allow traffic on 127.0.0.1 for BlueJ, or move the project to a plain folder name |
| &ldquo;The New Class and Compile buttons are greyed out&rdquo; | No project is open | Use Open Project or New Project from the Project menu |
| Right-click shows Inspect grayed out, no way to make objects | The class has not been compiled | Compile the class, then right-click it again |
| The program runs forever and nothing happens | It is waiting for input it asked for | Open the terminal from the View menu, type the input, press Enter |
| On a Mac, &ldquo;Creating object...&rdquo; never finishes | A network proxy affecting BlueJ&rsquo;s local sockets | Add localhost to the bypass list in the Mac&rsquo;s network proxy settings |
| On a Mac, the splash screen or main window never appears | A Java bug affecting some macOS systems | Open Font Book and choose Restore standard fonts from the File menu |
| The window is in the taskbar but not on screen | It opened on a second monitor that is no longer connected | Move the window back to the visible screen area |

### Why BlueJ has a virtual machine error at all

The FAQ explains that BlueJ actually runs two Java virtual machines: one for BlueJ itself and one for your code. When you create an object, it lives in the second one, and the two talk over a network connection inside your own computer.

That design is what makes the object bench possible, and it is also why a strict firewall or a school proxy can break BlueJ even though nothing ever leaves the machine. The FAQ says communication must be allowed when both source and destination are 127.0.0.1, the loopback address.

### On a school laptop

Many US districts manage student laptops centrally, so you cannot change the firewall yourself. If the virtual machine error appears on a managed machine, show the FAQ entry to your teacher or the school IT team; the fix belongs to whoever manages the device.

For Macs managed by a school, the FAQ lists the BlueJ components that must also be authorized in the management profile, which is again an IT task rather than a student one.

Source: [BlueJ Frequently Asked Questions](https://www.bluej.org/faq.html), read 17 October 2026. We are not connected with the BlueJ project.

## Installing BlueJ cleanly, and what each download needs

Half of all BlueJ problems disappear with a clean install of the current version, because the installer brings its own Java with it. Here is what bluej.org lists.

**BlueJ 6.0.1 downloads, from the bluej.org home page (read 17 October 2026)**

| System | Requirement listed | Also offered |
|---|---|---|
| Windows | 64-bit Windows, Windows 8 or later | A standalone zip suitable for USB drives |
| macOS | macOS 11 or later | A separate version for Macs with Intel processors (2021 and earlier) |
| Ubuntu or Debian | 64-bit Intel, Debian 11 or Ubuntu 20.04 or later | A version for ARM64, for example Raspberry Pi |
| 32-bit systems | Not supported by current versions | BlueJ 4.1.4 |

### Is BlueJ free?

Yes. The BlueJ home page calls it a free Java Development Environment designed for beginners, and it is published under the GNU General Public License version 2 with the Classpath Exception. The source code is public.

The FAQ adds that BlueJ sends a little anonymous information, such as the BlueJ and Java versions and the operating system, to help plan development, and that a bluej.uid=private setting switches it off.

### A note on the two pages

The download lists on the version history page give different minimums for the same 6.0.x installers (they mention Windows 7 and macOS 10.12) than the home page does. We print the home page figures, which are the stricter ones; if your machine sits between the two, try the installer and see.

The 6.0.0 release on 1 July 2026 added Kotlin support for editing and running code. For a Java course that changes nothing; the 6.0.1 point release only added Kotlin class templates that were missing.

Sources: [bluej.org](https://www.bluej.org/) and [BlueJ version history](https://www.bluej.org/versions.html), read 17 October 2026.

## When a program seems to do nothing, or shows no output

The BlueJ FAQ has an entry for a program that seems to run forever and do nothing. Usually it is working perfectly and waiting for you. Here is a tiny example that does exactly that.

### What the BlueJ FAQ says

The FAQ answers this one directly: if your program requests input, you must supply the input before the program can continue running; what is happening is that it is waiting, indefinitely, for the input it asked for.

You can open the terminal from the View menu and type into it, pressing Enter at the end, because the terminal input is line buffered.

### The better fix, also from the FAQ

The FAQ&rsquo;s recommended solution is to print a prompt, such as &ldquo;Please enter your name&rdquo;, before reading input. Printing makes BlueJ open the terminal window automatically, so the program no longer looks frozen.

It is also simply better programming: anyone running your code, including a teacher grading it, can see what it expects.

**No output in BlueJ: four checks (from the BlueJ FAQ and version history)**

| Check | Why |
|---|---|
| Is the terminal window open? | Output goes to the terminal, which you can open from the View menu |
| Did the program print before it read input? | Printing opens the terminal automatically; reading alone does not |
| Is the window off screen? | After unplugging a second monitor, the terminal can open where you cannot see it |
| Are you on an old version? | BlueJ 5.5.0 fixed a bug where the terminal sometimes did not show exceptions if the error pane had not been visible |

## How to run a program, with arguments, in BlueJ

BlueJ does not have a single Run button for main, which confuses students coming from other editors. The FAQ explains the BlueJ way.

### Why BlueJ works this way

BlueJ is designed around objects rather than whole programs. You can create an object from any compiled class and call its methods one at a time, without writing a main method at all, and inspect the values of its fields as you go.

For learning what a constructor does, or how two objects share data, that interactive object bench is genuinely useful, and it is the main reason teachers choose BlueJ for a first course.

### Libraries and the standard classes

If your class gives you a jar file, the FAQ lists three ways to add it: the Libraries tab in Preferences, the userlib folder inside the BlueJ installation, or a folder named +libs inside your project.

To experiment with a standard class such as String or java.awt.Point, the Tools menu has Use Library Class, which lets you create objects from it directly on the bench.

## A reset routine, and where BlueJ keeps its settings

If BlueJ misbehaves in a way none of the entries above describe, these steps work through the remaining causes, from the least to the most disruptive.

**Where BlueJ stores bluej.properties, from the BlueJ FAQ (read 17 October 2026)**

| System | Location the FAQ gives |
|---|---|
| Windows (the FAQ lists Vista, 7 and 8) | C:\Users\your-user-name\bluej\bluej.properties |
| macOS | /User/your-user-name/Library/Preferences/org.bluej/bluej.properties |
| Linux | your-home-directory/.bluej/bluej.properties |

### Git and GitHub from BlueJ

BlueJ can share a project through Git. If team actions fail even though your GitHub password is right, the FAQ explains why: GitHub no longer allows account passwords for version control operations, and you need a Personal Access Token in the password field instead.

On a school network, a proxy can also block Git. The FAQ describes passing the proxy settings to BlueJ&rsquo;s Java as -D options, which is again a job for the person who knows the network.

### Settings that override settings

BlueJ reads two files: bluej.defs, installed with BlueJ for every user, and bluej.properties, which is yours. The FAQ notes that properties set in bluej.properties override those in bluej.defs.

So a student&rsquo;s personal file can carry an old, broken setting even after a reinstall. That is why renaming bluej.properties is on the reset list.

## BlueJ, AP Computer Science A and the step to a larger IDE

BlueJ appears in many first Java courses in the US. Here is how it lines up with AP CSA, what College Board publishes about the exam, and how we handle graded work.

**BlueJ or a larger IDE? Our comparison for students (ours, from the BlueJ pages above)**

| If you need | BlueJ | A larger IDE such as Eclipse or IntelliJ IDEA |
|---|---|---|
| To see objects and call methods one by one | Built in: the object bench | Possible through a debugger, less direct |
| A simple screen for a first course | Yes, deliberately minimal | Many more panels and settings |
| To work on large, many-file programs | Workable, limited | Built for it |
| Its own Java bundled | The Windows and Mac downloads include a JDK | Varies by product |
| Cost | Free, open source | Free options exist |

### What lines up with the exam

AP Central lists Unit 3, Class Creation, at 10% to 18% of the multiple-choice weighting. Designing a class, writing its constructor and calling its methods is exactly what BlueJ&rsquo;s object bench makes visible.

The exam itself is fully digital and taken in College Board&rsquo;s Bluebook app, not in any IDE, so BlueJ is a place to learn and practice rather than the exam environment. See our [AP Computer Science A classes](/ap-computer-science-a-online-classes) for preparation.

### Graded work stays the student&rsquo;s

When a BlueJ project is homework, our teachers do not write or fix it, and we never give answer keys. The teacher helps the student find which symptom row matches, and the student makes the change.

For a general method of finding bugs that works in any editor, see [how to debug code](/how-to-debug-code). Students preparing for India&rsquo;s ICSE board use BlueJ differently, and our [ICSE BlueJ coaching](/icse-class-10-bluej-java-coaching) page covers that course.

Sources: [AP Computer Science A Course](https://apcentral.collegeboard.org/courses/ap-computer-science-a) and [Exam](https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam), AP Central, read 17 October 2026. AP is a trademark of College Board, which is not connected with us.

## Four stages from first project to confident Java

Where students usually are when BlueJ first goes wrong, and where they head next.

**Stages of a BlueJ learner (ours)**

| Stage | What it looks like |
|---|---|
| 1. Setting up | Installing, opening a first project, wondering why buttons are gray |
| 2. On the bench | Creating objects by right-clicking and calling their methods |
| 3. Writing programs | Using main, the terminal and input with a clear prompt |
| 4. Moving on | Ready for a larger IDE and many-file projects |

### For parents

When BlueJ stops working, it is almost always the setup, not your child&rsquo;s code or ability.
If the computer is a school device, the fix may need the school&rsquo;s IT team, and that is normal.

### For students

Print a prompt before every input. It saves you and everyone who runs your code.
Compile first, then right-click. Most grayed-out menus are an uncompiled class.

## Nine courses for students learning Java with objects

Each one is a live course with the same teacher every week, taken in a group or alone.

### Java

Teens

- [Java for teens](/courses/java-programming-masterclass-for-teens): Objects first, then whole programs.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Classes, lists and arrays for the exam.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Thinking through a task before coding it.

### Next languages

Teens

- [Python for teens](/courses/python-complete-masterclass-teens): Quick scripts and data, in fewer lines.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course): The broader AP course and its Create task.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Share BlueJ projects the proper way.

### College

Ages 18 and up

- [Java for college](/courses/complete-java-programming-masterclass-college): The intro sequence and what follows it.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): Lists, trees and graphs in Java.
- [C++ for college](/courses/cpp-programming-complete-masterclass-college): A second systems language.

## Live Java lessons at times that suit US students

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school times across the US time zones.
- **Weekends** A weekly slot that leaves weekdays free.
- **1-on-1** Arranged around your class and test dates.

- **A teacher who stays** The same person every week.
- **BlueJ, shared** We see your class diagram live.
- **Setup help included** Install and settings problems count too.
- **Concepts, not answers** Your graded work stays your own.
- **Online, nationwide** Wherever in the US you study.
- **Batch or private** Fifteen to twenty learners, or one to one.

## Fees

BlueJ is free and so is Java. The only cost is the live teaching, which is paid month by month in US dollars, with no long contract and no charge for stopping when a month is over.

- Free first class: USD 0. A free first lesson. Bring the project that will not run. No card asked for.
- Group batch: USD 100 a month. Fifteen to twenty in a batch. The same teacher each week. Your choice of batch. Paid each month.
- One to one: USD 150 a month. One student, one teacher. Times you choose. Paced to your course.

## BlueJ not working: common questions

### Why is BlueJ not working?

The official BlueJ FAQ points to a few causes: no Java development kit found, firewall or proxy software blocking BlueJ's connection to its own second virtual machine, a class that has not been compiled, or a program waiting for input. Reinstalling the current BlueJ, which includes a JDK, fixes many cases.

### What does BlueJ could not find any Java systems mean?

It means no JDK was found, and the FAQ says a JDK must be installed to run BlueJ. The FAQ also says most BlueJ installers now ship with the correct JDK included, so downloading the current installer from bluej.org is the simplest fix.

### How do I fix Bluej was unable to create a virtual machine?

The FAQ says firewall software is the usual cause. BlueJ needs to communicate when both source and destination are 127.0.0.1. On Windows, accented or non-English characters in the project path can also cause it, so move the project to a plain folder name.

### Why is my BlueJ program not showing output?

Output appears in the terminal window, which you can open from the View menu. If the program reads input before printing anything, it can look frozen while it waits. Print a prompt first; the FAQ notes that printing opens the terminal automatically.

### Why are the New Class and Compile buttons grayed out?

No project is open. The FAQ says to use Open Project or New Project from the Project menu first, after which you can create and compile classes.

### How do I run main in BlueJ?

Compile the class, right-click it in the class diagram and choose the main method. A dialog asks for the String array; leave it as { } for no arguments, or type something like { "one", "two", "three" } to pass three.

### Is BlueJ free?

Yes. The BlueJ home page describes it as a free Java Development Environment designed for beginners, released under the GNU General Public License version 2 with the Classpath Exception.

### Does BlueJ work on a Chromebook or a 32-bit computer?

The BlueJ home page lists downloads for 64-bit Windows, macOS and Debian or Ubuntu Linux, and says BlueJ requires a 64-bit operating system; for 32-bit systems it points to BlueJ 4.1.4. It lists no ChromeOS download.

### Will you fix my BlueJ homework?

No. We do not write or repair graded assignments or provide answer keys. A teacher helps you find the cause and teaches the idea behind it, so you can make the change yourself.

### When are live Java classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much are the classes?

The first lesson is free. After that, teaching is paid monthly, and the fees section of this page shows the amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Our hub for American students and families.
- [How to debug code](/how-to-debug-code): Finding mistakes in any language.
- [Java classes for teens](/java-classes-for-teens): The teen Java course.
- [AP Computer Science A classes](/ap-computer-science-a-online-classes): Live AP CSA preparation.
- [Java constructors explained](/blog/java-constructors-explained): What happens when you create an object.
- [Java for beginners](/java-for-beginners): A first course from zero.
- [Eclipse Java help for students](/eclipse-java-help-for-students): Eclipse for Java students: install, run, read errors, fix Java version and memory.
- [IntelliJ and PyCharm free for students](/intellij-and-pycharm-free-for-students): IntelliJ IDEA and PyCharm for students: free core, student license, setup fixes.
- [VS Code setup for students](/vs-code-setup-for-students): Set up VS Code for Python and Java, and fix the errors students hit.

## Contact

Book the free first class at [https://learn.modernagecoders.com/bluej-not-working-fix](https://learn.modernagecoders.com/bluej-not-working-fix#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
