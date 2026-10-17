---
title: "VS Code Setup for Students: Python and Java Without Errors"
description: "VS Code setup for students: install it on a school laptop, set up Python and Java, and fix the errors students hit, from No module named to class is public."
canonical: https://learn.modernagecoders.com/vs-code-setup-for-students
source: src/pages/vs-code-setup-for-students.html
---
> To set up VS Code for school, install three things: VS Code itself, the language extension (Python, or the Extension Pack for Java), and the language (a Python interpreter, or a Java JDK). Open your project folder with File, Open Folder, pick the interpreter in the Status Bar, and run from the play button. Modern Age Coders teaches Python and Java live to students in the US, in a batch or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / VS Code setup for students

United States · Grade 6 to college · Visual Studio Code

# VS Code setup for students

Visual Studio Code is free and runs on Windows and Mac, so it is a natural choice when a teacher asks you to code at home. It also confuses beginners, because installing VS Code does not install Python or Java. This guide sets it up the way Microsoft's own documentation describes, on a school-issued laptop or a family computer, then walks through the errors students actually see, with the exact messages from our test machine and the fix for each.

At a glance: For: Grade 6 to college; Editor: VS Code, free; Runs on: Windows, macOS, Linux; For Python: Python extension plus Python; For Java: Java extensions plus a JDK; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses that start on your own laptop

Each is taught live on your own computer, so a teacher can help get the editor working early and keep the focus on code.

- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. VS Code, Python and real projects.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Ages 13 to 18. From the first class file to object-oriented programs.
- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): High school. Java from the basics, built for the AP course.

## Three pieces, not one: why VS Code alone runs nothing

The Python tutorial in the VS Code documentation says it directly: "three separate pieces work together to run Python in VS Code." Java works the same way. When nothing runs in week one, check that all three pieces are there.

**What each piece does, from the VS Code Python and Java tutorials (read 17 October 2026)**

| Piece | For Python | For Java |
|---|---|---|
| The editor | VS Code, where you write and organize code | VS Code, the same editor |
| The extension | The Python extension; the docs note "The extension doesn't include Python itself." | Extension Pack for Java; the tutorial needs Language Support for Java by Red Hat and Debugger for Java |
| The language | A Python interpreter, installed separately | A Java Development Kit (JDK); the pack "supports Java version 1.8 or above" |
| An all-in-one option | None in the tutorial | The Coding Pack for Java bundles VS Code, a JDK and extensions, but "is only available for Windows and macOS" |

### Is VS Code free for students?

Yes, and not only for students. The VS Code FAQ says "VS Code is free for private or commercial use." There is no student edition to apply for.

Python and the JDK distributions the Java tutorial lists are also free to download, so a working setup costs nothing.

### VS Code is not Visual Studio

Visual Studio is a different, larger Microsoft product. If your teacher said VS Code, you want Visual Studio Code from code.visualstudio.com.

The pair is confused often enough that vs code vs visual studio shows up in search suggestions. For a school Python or Java class, VS Code is the one to install.

## Installing VS Code on a school or family laptop

If your school manages your laptop, you may not have an administrator password. The VS Code docs cover that case, and the Mac and old-Windows cases too.

**Installing VS Code, from the VS Code setup documentation (read 17 October 2026)**

| Your computer | What the docs say | Watch out for |
|---|---|---|
| Windows, no admin password | The User setup "does not require administrator permissions" and is "the recommended installation for most people" | "Updates are disabled when VS Code runs as Administrator from a User setup installation." |
| Windows, family computer | "Setup adds Visual Studio Code to your %PATH% environment variable. Restart your console after installation" | Run code . in a folder to open it, after restarting the terminal |
| Mac | "Drag Visual Studio Code.app to the Applications folder." | Then open it from Applications by double-clicking the icon, as the docs describe |
| Mac, to use code in Terminal | Run Shell Command: Install 'code' command in PATH from the Command Palette | Restart the terminal afterwards |
| Mac with Apple silicon | The download page lists Universal, Intel chip and Apple silicon builds | Universal works on both |
| Windows 7 | "VS Code version 1.70.3 is the last available release for Windows 7 users" | Old laptops need a newer Windows for current VS Code |

### If Python will not install without admin

The Python tutorial in the VS Code docs offers a route: "If you don't have admin access, an additional option for installing Python on Windows is to use the Microsoft Store."

If the Store is blocked as well, ask your teacher or the school's tech office rather than looking for a workaround; the device belongs to the district.

### Mac students: one Python warning

The VS Code docs say "The system install of Python on macOS is not supported." They recommend Homebrew, with brew install python3 in Terminal.

The python.org installer is the other common choice for students. Either way, use a Python you installed, not the one the Mac shipped with.

## Setting up Python in VS Code, and the three errors that follow

Follow the steps in order. Each one matches a step in the VS Code Python tutorial, and each error below appears when one is skipped.

**Three Python errors and their fixes, from the VS Code Python tutorial**

| What you see | Why | Fix |
|---|---|---|
| "ModuleNotFoundError: No module named 'numpy'" | The tutorial says it means "the required package isn't available in your interpreter" | In the VS Code terminal for that interpreter, run python -m pip install numpy (Windows) or python3 -m pip install numpy (Mac) |
| Python installed, but VS Code or the terminal cannot find it | A terminal reads system settings only when it starts | The docs say: "close and reopen the terminal (or restart VS Code)" |
| Packages vanish when you switch projects | Each virtual environment keeps its own packages | Pick the right interpreter in the Status Bar; share setups with pip freeze > requirements.txt |

## Setting up Java in VS Code, and the file-name error every AP student meets

Java in VS Code needs a JDK and the Java extensions. Our AP Computer Science A course is taught in Java, and its students tend to meet the same two compile errors in their first week.

### Open the folder, or the language server stalls

The Java tutorial warns: "If you open a Java file in VS Code without opening its folder, the Java Language Server might not work properly." Symptoms are red squiggles everywhere, no Run button, or no code completion.

Fix it with File, Open Folder on the folder that holds your .java files. For a school project with a build tool, open the project's top folder.

### When Run is missing: lightweight mode

The Java project docs explain that "Lightweight mode doesn't resolve imported dependencies nor build the project", so it cannot run or debug. Click the Java status item in the Status Bar to switch to standard mode.

If things are still strange, the docs suggest the Java: Clean Java Language Server Workspace command, which rebuilds the language server's view of your project.

Sources, read 17 October 2026: [Getting Started with Java in VS Code](https://code.visualstudio.com/docs/java/java-tutorial) and [Managing Java Projects in VS Code](https://code.visualstudio.com/docs/java/java-project); compile errors from our own run of javac 22.0.1 on Windows 11. We are not connected with Microsoft.

## Ten checks when VS Code will not run your code

Our checklist for the evening before an assignment is due. Work through it in order and stop at the first check that explains the error.

### About the AI features

Current VS Code versions include AI chat features linked to GitHub Copilot. They are optional, and the VS Code FAQ says that if you disable AI functionality or do not sign in, your data is not sent to the Copilot back end.

While students are learning to read errors, we keep AI chat switched off in lessons, so they learn to fix problems themselves. Check your school's rules before turning such tools on for coursework.

### What we will and will not do

A teacher can set up VS Code with you on a shared screen, explain each error, and make sure your own laptop works for the rest of the year.

We do not write or finish graded assignments. We teach the concept so you can solve the assignment yourself.

## What a first term looks like when the setup is done right

Our plan for students who are new to a real code editor. The first two classes deal with setup so it never gets in the way again.

**A first term in VS Code (our plan, adjusted for each student)**

| Classes | What the student does | What it builds |
|---|---|---|
| 1 to 2 | Install, open a folder, run a first file | A setup that works every time |
| 3 to 4 | Variables, input and output | Reading the terminal, saving often |
| 5 to 6 | Decisions and loops | Using the debugger and breakpoints |
| 7 to 8 | Functions or methods | Splitting code across files |
| 9 to 10 | A project with a package or class | Environments, imports, file names |
| 11 to 12 | Version control with Git | Committing work from inside VS Code |

### Middle school

In our classes, students in Grades 6 to 8 start with Python, where one file and one play button go a long way.

### High school

Students heading for AP Computer Science A add Java in the second term with us, in the same editor.

### College

We have college students set up one environment per course from day one, which saves a lot of grief at midterms.

For the AP course itself, see [AP Computer Science A online classes](/ap-computer-science-a-online-classes); for Java outside the AP track, [Java classes for teens](/java-classes-for-teens); and for choosing an editor at all, our post on [Java IDEs for beginners](/blog/best-java-ides-for-beginners).

## Four stages of working in a real editor

From fighting the setup to forgetting it is there.

**Stages with VS Code (ours)**

| Stage | What it looks like |
|---|---|
| 1. Installer | VS Code is installed, but nothing runs yet |
| 2. Runner | Runs single files with the play button |
| 3. Organizer | Works in folders, environments and projects |
| 4. Debugger | Uses breakpoints and reads errors before searching |

### For parents

If your child is stuck at stage 1, it is almost never their fault: one of the three pieces is missing. Once all three pieces are in place, the setup keeps working.
On a school-managed laptop, some installs are blocked on purpose. Check with the school before working around anything.

### For students

Always open the folder. Half of all VS Code mysteries disappear with that one habit.
Look at the Status Bar. It tells you which Python or which Java mode you are in.

## Nine courses taught in a real editor

All live online with a regular teacher, in a batch or one to one.

### Teens

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): Projects in VS Code.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Classes, objects, real programs.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Websites built in the editor.

### Exams and tools

High school

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java for the AP course.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Commit and push from VS Code.
- [Full-stack web for teens](/courses/full-stack-web-development-teens-masterclass): Front end to server.

### College and adults

Ages 18 and up

- [Python, zero to advanced](/courses/python-programming-masterclass-zero-to-advanced-college): For college and beyond.
- [Java for college](/courses/complete-java-programming-masterclass-college): Complete Java, live.
- [Git and GitHub for college](/courses/git-github-version-control-course-for-college-students): Collaboration on real repos.

## Live lessons on your own laptop

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After-school batches in US time zones.
- **Weekends** Good for a full setup session.
- **1-on-1** When an assignment is due soon.

- **One teacher** The same person all term.
- **Your machine** We fix the setup you will use.
- **Screen sharing** Errors read together, live.
- **You do the work** Graded work stays your own.
- **Anywhere in the US** Online, from home.
- **Batch or solo** Fifteen to twenty, or one student.

## Fees

VS Code, Python and a JDK are all free. Our fee is for the teaching, charged per month in US dollars, with no semester-long agreement and no charge after you decide to stop.

- Free first class: USD 0. A free first lesson. We can start with your setup. No card details.
- Group batch: USD 100 a month. Fifteen to twenty students. A regular teacher. Your choice of batch. Month by month.
- One to one: USD 150 a month. Private lessons. Booked at your convenience. Your own course and laptop.

## VS Code setup: common questions

### Is VS Code free for students?

Yes. The VS Code FAQ says VS Code is free for private or commercial use, so there is no student version to apply for. Python and the free JDK builds the Java tutorial lists cost nothing either.

### Why is VS Code not working with Python?

Usually one of three pieces is missing: VS Code, the Python extension, or Python itself. The extension does not include Python. Install Python, restart the terminal, then choose the interpreter with Python: Select Interpreter.

### How do I select the Python interpreter in VS Code?

Click the Python version shown in the Status Bar, or open the Command Palette and run Python: Select Interpreter, then choose your project environment or the Python you installed.

### Why does VS Code say No module named numpy?

The package is not installed in the interpreter VS Code is using. In the VS Code terminal for that interpreter, run python -m pip install numpy on Windows or python3 -m pip install numpy on a Mac.

### How do I set up Java in VS Code?

Install a JDK and the Extension Pack for Java, or on Windows and macOS use the Coding Pack for Java, which bundles both with VS Code. Then open the folder that holds your .java files.

### Why does Java say class is public, should be declared in a file named?

A public class must be in a file with exactly the same name. Our run of public class Hello in Greeting.java failed for that reason. Rename the file to Hello.java, matching capital letters.

### Can I install VS Code on a school laptop without admin rights?

The VS Code docs say the Windows User setup does not require administrator permissions. Your school may still block installs, so check with your teacher or school tech office first.

### Will you do my coding assignment?

No. We help you set up your tools and teach the ideas so you can finish your own assignment. We never complete graded work.

### What times are classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do Python or Java classes cost?

The first lesson is free. After that you pay monthly for live lessons, and the fees section on this page shows the amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): The full list of our pages for the US.
- [AP CSA online classes](/ap-computer-science-a-online-classes): Java for the AP course.
- [Java classes for teens](/java-classes-for-teens): Java beyond the AP track.
- [Java IDEs for beginners](/blog/best-java-ides-for-beginners): Comparing editors before you install.
- [Git vs GitHub](/blog/git-vs-github-difference): The next tool after the editor.
- [Python for 15 year olds](/python-for-15-year-olds): A high school starting point.

## Contact

Book the free first class at [https://learn.modernagecoders.com/vs-code-setup-for-students](https://learn.modernagecoders.com/vs-code-setup-for-students#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
