---
title: "Jupyter Notebook Errors: A Fix Guide for Students"
description: "Jupyter Notebook errors explained for students: Jupyter will not start, the kernel fails, ModuleNotFoundError, FileNotFoundError, and cells run out of order."
canonical: https://learn.modernagecoders.com/jupyter-notebook-errors-for-students
source: src/pages/jupyter-notebook-errors-for-students.html
---
> Most Jupyter Notebook errors come from one of four places: Jupyter itself is not on your PATH, the kernel points at a Python that no longer exists, a package was installed into a different environment from the kernel, or cells were run out of order. Use %pip install inside the notebook, check jupyter kernelspec list, and test with Restart and run all. Modern Age Coders teaches Python and data science live to teens and adults, in a batch or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Jupyter Notebook errors

United States · Grade 9 to college · Jupyter Notebook

# Jupyter Notebook errors, explained for students

If your high school data science unit or college statistics lab runs in Jupyter, you have probably seen it fail in ways a plain Python file never does. The server will not start, the kernel dies, a package you just installed cannot be found, or a notebook that worked last night throws a NameError today. Each of those has a known cause. This guide pairs every symptom with what the Jupyter and IPython documentation says about it, plus the exact message from our own runs where we reproduced one.

At a glance: For: Grade 9 to college; Tool: Jupyter Notebook, free; File type: .ipynb, a JSON file; Default address: localhost:8888; Most common error: No module named; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses that use notebooks properly

Each one works in notebooks, taught live by a regular teacher who can see your screen.

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Ages 14 to 18, some Python first. Notebooks, pandas, charts and first models.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Ages 13 to 18. Python to working models.
- [Data science for college and adults](/courses/data-science-complete-masterclass-college): Ages 18 and up. A full data science course, live.

## Find your Jupyter error: symptom, cause, first fix

Start with the row that matches what you see. Each one is explained below with its source.

**Jupyter Notebook errors and first fixes (our table, built from the Jupyter and IPython documentation and our runs)**

| What you see | Usual cause | First thing to try |
|---|---|---|
| "jupyter" is not recognized, or command not found | Jupyter is not installed, or not on PATH | Install it, or reinstall Anaconda with default settings |
| The page will not load in the browser | Browser extension, security software, or the address | Try another browser; swap localhost and 127.0.0.1 |
| A cell shows a star and never runs | The kernel did not start | Run jupyter kernelspec list and check the kernel path |
| ModuleNotFoundError: No module named ... | Package installed in a different environment from the kernel | Run %pip install in a notebook cell, then restart the kernel |
| FileNotFoundError: [Errno 2] No such file or directory | The working folder is not where the file is | Print os.getcwd() and fix the path |
| NameError: name ... is not defined | Cells run out of order, or the kernel restarted | Restart, then run all cells from the top |
| It worked an hour ago, now nothing imports | A new file in your folder shares a module name | Rename your file, as the Jupyter docs advise |
| ImportError: DLL load failed (Windows) | pywin32 not installed correctly | pip install --upgrade pywin32, as the docs show |

Built from Jupyter&rsquo;s [What to do when things go wrong](https://jupyter-notebook.readthedocs.io/en/latest/troubleshooting.html) page, [Running the Notebook](https://docs.jupyter.org/en/latest/running.html) and the IPython documentation, all read 17 October 2026. We are not connected with Project Jupyter.

## When Jupyter will not start, or will not load in the browser

Jupyter is two things: a server that runs on your computer and a page in your browser that talks to it. A failure at either end looks like "Jupyter is broken", so test them one at a time.

### Where the server starts matters

The dashboard lists the notebooks, files and folders in the directory where the server was started. Start Jupyter in a folder that does not contain your class work and the class notebooks simply will not appear in the list.

The Jupyter docs recommend starting the server in the highest folder that contains your notebooks, which is often your home directory.

### Closing the tab is not closing Jupyter

The notebook documentation says the kernel "remains active if the web browser window is closed", and reopening the notebook reconnects to the same kernel, with its variables still in memory.

That is convenient, and it is also why a notebook can seem to work in one session and fail in a fresh one. To stop everything, press Control-C in the terminal running the server.

## Kernel errors: what a kernel is, and why it will not start

The Jupyter documentation describes a kernel as the program that "holds the data and objects you create with your notebook code". When it will not start, cells sit with a star next to them and nothing happens.

### Check which kernels Jupyter knows about

Files called kernel specs tell Jupyter how to start each kernel. Run jupyter kernelspec list in a terminal to see where they live.

A Python kernel whose path ends in ipykernel/resources is the built-in default, which runs in the same environment as the notebook server. The docs say that if a python3 kernelspec points somewhere else and fails, deleting or renaming that folder exposes the default.

### Check the path inside kernel.json

Each kernel spec has a kernel.json file with an argv stanza: the exact command used to launch the kernel. After a Python reinstall, it often points at a Python that is no longer there.

On Windows, the docs add, Python commands live in a Scripts folder rather than bin, and a path missing its .exe extension typically ends in a FileNotFoundError.

**Kernel commands from the IPython and Jupyter documentation, and when a student needs each**

| Command | What it does | When you need it |
|---|---|---|
| jupyter kernelspec list | Lists every kernel spec and its folder | The kernel will not start, or the wrong Python runs |
| python -m ipykernel install --user | Registers the current Python as a kernel | You made a new environment and it is missing from the menu |
| --name myenv --display-name "Python (myenv)" | Gives that kernel its own name in the menu | You have several environments for different classes |
| Kernel, Interrupt (or i, i) | Stops a cell that is taking too long | A loop never ends |
| Kernel, Restart (or 0, 0) | Starts the whole computation fresh | Anything strange, and before you submit work |

The IPython documentation notes that the --name value is used internally and that these commands "will overwrite any existing kernel with the same name", so give each environment a distinct name. On Windows, a broken pywin32 install shows up in a traceback ending with the line ImportError: DLL load failed: The specified module could not be found. The Jupyter docs give pip install --upgrade pywin32 as the first fix to try.

## ModuleNotFoundError in Jupyter: installed, but not where the kernel looks

This one causes a lot of confusion: you ran pip install, it said success, and the notebook still cannot import the package. The Jupyter docs name the cause: the Notebook server running in one environment while the kernel comes from another.

### Why pip in a terminal can miss

A terminal's pip belongs to whichever Python comes first on PATH. If the notebook kernel uses Anaconda and the terminal uses a python.org install, or the other way round, the package lands in the wrong place.

The Jupyter docs list the signs: import statements within code cells producing ImportError or ModuleNotFound exceptions, or nothing happening when you try to run a cell.

### How to check in ten seconds

Run import sys and then print(sys.executable) in a notebook cell. That is the Python the kernel uses. Compare it with the Python your terminal uses before installing anything else.

If you work across several environments, register each one as its own kernel with python -m ipykernel install, then pick the right one from the notebook's kernel menu.

## NameError and FileNotFoundError: the notebook remembers more than you think

A notebook is a sequence of cells, and each one runs on Shift-Enter in whatever order you press it. The kernel keeps every variable until it restarts. That flexibility causes two classic notebook errors.

### The file that breaks imports: "This Worked An Hour Ago"

The Jupyter docs describe a student-shaped mistake: a file in your notebook folder named after a real module. Their example is a random.py that leads to AttributeError: module 'random' has no attribute 'sample' deep inside the kernel's own imports.

Their advice is direct: "You&rsquo;ll need to rename your file." Avoid naming files after anything you import: random, math, pandas, csv or test files called the same as a library.

### Notebook files are JSON

The notebook documentation says notebooks "are internally JSON files and are saved with the .ipynb extension." Editing one in a plain text editor, or a merge in Git, can break that JSON so the file will not open.

Keep a copy before experimenting, and if a notebook will not open after editing it by hand, the JSON is the first suspect.

## Nine steps for any Jupyter problem

Our routine, in the order our teachers use it with students. It keeps you from reinstalling everything when one line would do.

### Command mode and edit mode

The notebook docs list Esc for command mode and Enter for edit mode. Shortcuts like 0, 0 to restart only work in command mode, which confuses many first-time users.

### School laptops

If your school manages the laptop, you may not be allowed to install anything. Ask the teacher which environment the class expects before changing PATH or installing Anaconda.

### Asking for help well

The Jupyter docs point to the Jupyter Discourse forum and Stack Overflow. Post the full traceback and your exact command; a screenshot of a red box alone rarely gets answered.

## Learning to work in notebooks, not just survive them

Notebooks reward a few habits that nobody teaches in a syllabus. This is how our teachers build them across a first term of data science.

**Notebook habits across a first term (our plan for Grade 9 to college, adjusted for each learner)**

| Classes | What the student builds | The habit it teaches |
|---|---|---|
| 1 to 2 | A notebook of small experiments | Cells, Shift-Enter, markdown notes |
| 3 to 4 | Loading a CSV with pandas | Paths and the working folder |
| 5 to 6 | Cleaning and charting data | One idea per cell; restart and run all |
| 7 to 8 | A project with extra packages | Environments, kernels and %pip |
| 9 to 10 | A short data story | Writing for a reader, not just the grader |
| 11 to 12 | Sharing and presenting | Clean outputs, reproducible from the top |

We teach the concepts so students can complete their own class notebooks; we never fill in graded work. For bugs that are not about Jupyter at all, see [how to debug code](/how-to-debug-code), and for a wider view of the subject, our [data science course](/data-science-course) page.

## Four stages of working in Jupyter

From copying cells to running reliable analyses.

**Stages of notebook skill (ours)**

| Stage | What it looks like |
|---|---|
| 1. Clicker | Runs cells top to bottom without knowing what each holds |
| 2. Explorer | Runs cells in any order and gets surprising results |
| 3. Tidy worker | Restarts and runs all before trusting a result |
| 4. Analyst | Builds notebooks that anyone can rerun and follow |

### For parents

If your teenager says the notebook "worked yesterday", that is stage 2, and it is normal. The fix is a habit, not a new laptop.
The same habits carry over to any later course that hands out its work as notebooks.

### For students

Before you submit, restart the kernel and run all. If it breaks, you found the bug before your teacher did.
Install packages with %pip from inside the notebook. It goes where the kernel can see it.

## Nine courses for data and Python

Live online classes with a regular teacher, in a batch or one to one.

### Teens

Ages 13 to 18

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Pandas, charts, first models.
- [Python for teens](/courses/python-complete-masterclass-teens): The Python under every notebook.
- [AI and ML for teens](/courses/ai-ml-masterclass-teens): Notebooks that train models.

### Bridging

Ages 13 and up

- [Visual machine learning](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Ideas first, with Orange.
- [Python certification prep](/courses/pcep-pcap-python-certification-course): PCEP and PCAP, ages 13 and up.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Versioning notebooks safely.

### College and adults

Ages 18 and up

- [Data science, complete](/courses/data-science-complete-masterclass-college): Statistics to machine learning.
- [Data analysis](/courses/data-analysis-mastery-course-college): Cleaning and analysis for college.
- [Python, zero to advanced](/courses/python-programming-masterclass-zero-to-advanced-college): For college students and adults.

## Live classes around a US school or college week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evening batches for US time zones.
- **Weekends** Longer sessions for projects.
- **1-on-1** Fitted around classes and labs.

- **The same teacher** Week after week.
- **Your own setup** We fix it on your machine.
- **Shared screen** We see the notebook you see.
- **Ideas, not answers** Your graded work stays yours.
- **Every state** Online, from home or dorm.
- **Group or private** Fifteen to twenty, or one student.

## Fees

Jupyter is free and open source. What you pay for is a teacher: monthly fees shown in US dollars, no contract for the whole semester, and you can stop at the end of any month.

- Free first class: USD 0. A free first lesson. Bring the notebook that fails. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty students. One regular teacher. A batch time you pick. Paid each month.
- One to one: USD 150 a month. Private lessons. Scheduled at your convenience. Your own data and projects.

## Jupyter Notebook errors: common questions

### Why is Jupyter Notebook not working?

Find which half failed. If the terminal shows an error or the command is not found, the server or install is the problem. If the page loads but cells will not run, the kernel is. The Jupyter docs suggest running jupyter notebook from a terminal first.

### How do I fix "No module named" in Jupyter?

Install the package from inside the notebook with %pip install followed by the package name, then restart the kernel. That installs into the environment the kernel uses, which is often not the one your terminal uses.

### Why does Jupyter say the kernel cannot start?

Usually the kernel spec points at a Python that no longer exists. Run jupyter kernelspec list, open kernel.json in the folder it shows, and check that the path in argv exists. Re-registering the kernel with python -m ipykernel install, as the IPython docs describe, is the standard repair.

### Why do I get FileNotFoundError in Jupyter?

The notebook is looking in its own folder and the file is somewhere else. Print os.getcwd() to see the folder, then move the file there or use the correct path.

### Why did my notebook stop working after a restart?

Cells were run out of order before, so variables existed that a fresh run never creates. Restart the kernel and run all cells from the top, then fix the first cell that fails.

### How do I stop a cell that runs forever?

Use the Kernel menu and choose Interrupt, or press i twice in command mode. If that fails, restart the kernel.

### Is Jupyter Notebook free?

Yes. The Jupyter documentation says Jupyter software is free and open-source, and it can be installed with pip or with the Anaconda distribution.

### Will you do my class notebook for me?

No. We teach the ideas so you can finish your own notebook, and we never complete graded assignments. A teacher will help you find and fix the error yourself.

### What times are classes for US students?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do data science classes cost?

The first lesson is free. Then you pay monthly for live teaching, and this page's fees section lists the monthly figure in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): All our pages written for US learners.
- [Data science course](/data-science-course): What a full course covers.
- [AI and ML classes in the USA](/ai-and-machine-learning-classes-in-usa): For students moving on to models.
- [How to debug code](/how-to-debug-code): A method for any bug.
- [Files in Python](/blog/how-to-read-and-write-files-in-python): Paths, reading and writing.
- [Python for 16 year olds](/python-for-16-year-olds): A starting point in high school.

## Contact

Book the free first class at [https://learn.modernagecoders.com/jupyter-notebook-errors-for-students](https://learn.modernagecoders.com/jupyter-notebook-errors-for-students#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
