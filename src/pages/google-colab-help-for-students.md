---
title: "Google Colab Help for Students: Errors, Files and Limits"
description: "Google Colab help for students: why the runtime disconnects, where uploaded files go, why Drive will not mount, GPU warnings, and the age rule for AI features."
canonical: https://learn.modernagecoders.com/google-colab-help-for-students
source: src/pages/google-colab-help-for-students.html
---
> Most Google Colab problems come from one fact: your code runs on a temporary virtual machine, not your laptop. When it is idle or reaches its limit, Colab deletes it, and uploaded files and variables go with it. Keep data in Google Drive, re-run cells from the top after a reconnect, and switch off the GPU when you do not need it. Our teen data science course at Modern Age Coders runs in Google Colab and is taught live to US high schoolers, as a group batch or private one-to-one classes.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Google Colab help

United States · Grade 9 to college · Google Colab

# Google Colab help for students

Google Colab runs Python in a browser tab, with nothing to install, so it suits students on school Chromebooks and anyone without admin rights on a laptop. That convenience has a cost that catches students out: your code runs on a Google machine that can disappear. Files vanish, variables reset, Drive refuses to connect, a GPU warning pops up. This page explains each one using Google's own Colab FAQ and the source code of Google's google.colab package, and says plainly what to do.

At a glance: For: Grade 9 to college; Tool: Google Colab, free; Runs in: A browser; code runs on Google machines; Free runtime limit: At most 12 hours; AI features: Google account 18+ only; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses where Colab is the classroom

Each uses notebooks from the first week, so students learn how the machine behind them works.

- [Machine learning in Colab, ages 13 to 18](/courses/ai-ml-masterclass-teens): Heavy training runs on free cloud notebooks with GPU time.
- [Teen data science in notebooks](/courses/data-science-course-for-teens-python-data): High schoolers who know a little Python: Drive data, pandas, charts.
- [AI and ML for college students](/courses/ai-ml-masterclass-complete-college): Ages 18 and up. Training runs on free cloud notebooks.

## What went wrong in Colab, and what it usually means

Find your row. The explanations below quote the Colab FAQ, read on 17 October 2026.

**Common Colab problems for students (our table, built from the Colab FAQ and google.colab source)**

| What you see | What is going on | What to do |
|---|---|---|
| Runtime disconnected; variables gone | The virtual machine was idle too long or hit its lifetime | Reconnect, and use Runtime, Run all |
| Uploaded file missing next day | It lived on the deleted machine, not in Drive | Save data files in Google Drive and mount it |
| drive.mount() says timed out | Too many items in the top level of My Drive | Move files into subfolders; empty the Trash |
| OSError: [Errno 5] Input/output error | A Drive folder with very many items, or a Drive quota | Use subfolders, copy one archive, or wait a day |
| A message that the GPU is not being used | You chose a GPU runtime but the code does not use it | Set Hardware Accelerator to None |
| No Gemini icon or AI suggestions | The account is under 18, or the locale is unsupported | Nothing to fix for students under 18; learn without it |
| A prompt to enable third-party cookies | Colab shows rich output through other origins | Allow googleusercontent.com in browser settings |
| Your file reads the wrong data | A second upload was saved as "grades (1).csv" | Read the name files.upload() returns |

Checked on 17 October 2026 against the [Colaboratory FAQ](https://research.google.com/colaboratory/faq.html) and Google&rsquo;s [googlecolab/colabtools](https://github.com/googlecolab/colabtools) code on GitHub. Modern Age Coders has no connection with Google.

## Why the runtime disconnects, and why your variables vanish

The Colab FAQ describes Colab as "a hosted Jupyter Notebook service that requires no setup to use". The word hosted is the key: your notebook is saved in Drive, but the code runs somewhere else.

### What the FAQ says about the machine

"Code is executed in a virtual machine private to your account. Virtual machines are deleted when idle for a while, and have a maximum lifetime enforced by the Colab service."

For the free version, the FAQ says notebooks "can run for at most 12 hours, depending on availability and your usage patterns", and adds that "Runtimes will time out if you are idle."

### What that means for a homework session

Walk away for dinner and the machine may be gone when you return. The notebook text and code are safe in Drive; the variables, installed packages and uploaded files are not.

So after any reconnect, run the notebook from the top: Runtime, Run all. If it fails part way, you have found a cell that depended on something that no longer exists.

**Colab limits and rules students meet, from the Colab FAQ (read 17 October 2026)**

| Topic | What the FAQ says |
|---|---|
| Cost | "Yes. Colab is free of charge to use." |
| Guarantees | "Colab resources are not guaranteed and not unlimited", and Colab does not publish its usage limits |
| Who comes first | Colab "prioritizes users who are actively programming in a notebook" |
| Resetting a broken machine | Runtime &gt; Disconnect and delete runtime returns the machines to their original state, and how often you can do it is limited |
| GPU not used | "Choose Runtime &gt; Change Runtime Type and set Hardware Accelerator to None" |
| Languages | Colab focuses on Python, and "Python 2 is no longer supported in Colab." |
| Browsers | Colab is "most thoroughly tested with the latest versions of Chrome, Firefox and Safari" |

## Uploading data and mounting Google Drive without losing work

There are two ways to get a data file into Colab: upload it to the machine, or connect Google Drive. Uploads are quick but disappear with the machine; Drive persists. Both behave in ways the documentation spells out.

### When drive.mount() times out or fails

The FAQ explains that Drive operations "can time out when the number of files or subfolders in a folder grows too large", and that storing "more than approximately ten thousand items in the root directory can cause mounting to fail".

Its fix: move files out of the top level of My Drive into subfolders, keep each folder under ten thousand items, and empty the Trash, because deleted files may still count.

### OSError: [Errno 5] and quotas

The same error can come from Drive quotas. The FAQ names accessing a popular shared file or too many files too quickly as typical causes, and suggests copying data as one .zip archive and unpacking it on the machine.

Its last suggestion is simply: "Wait a day for quota limits to reset." If a class dataset is shared with every student, make your own copy in Drive first.

A safety note the FAQ makes in so many words: "Mounting Google Drive on Colab allows any code in your notebook to access any files in your Google Drive." Only mount Drive in notebooks you trust, and be careful with notebooks a stranger shared.

## School Google accounts, sharing, and the AI features

If you open Colab with a school Google account, the school's settings change what you can see and use. The Colab FAQ covers that directly.

**Accounts, sharing and AI in Colab, from the Colab FAQ (read 17 October 2026)**

| Question | What the FAQ says | What it means for a student |
|---|---|---|
| Can I use Colab with my school account? | Workspace access is "controlled by the Workspace on/off control" set by the school's administrator | If Colab will not open on a school account, the school decides |
| Do under-18 students need permission? | Workspace for Education organizations "are required to obtain parental consent" for students under 18 using Additional Services | Your school may need a parent form before Colab is switched on |
| Why is there no Gemini button? | "Access to Colab's AI features requires your Google account's age to be 18+." | Under 18, the AI features are not for you; the notebook works without them |
| What does sharing share? | Text, code, output and comments, but the virtual machine and its files "will not be shared" | A classmate must re-run your setup cells and upload the data again |
| Can I hide my outputs? | Yes: Edit, Notebook settings, "Omit code cell output when saving this notebook" | Useful before sharing a notebook that printed private data |
| Can I bring in a Jupyter file? | Yes, with "Upload notebook" from the File menu | Files from a teacher's Jupyter class open in Colab too |

### Our rule on AI for students under 18

Colab's own FAQ sets the AI features at 18 and over, so we do not show or recommend them to students under 18, and we do not suggest any way around that rule.

Students learn to read a traceback and fix it themselves, which is the skill the AI would otherwise skip. Adult learners in our college courses can use the features where their account allows.

### Running Colab on your own computer

The Colab documentation says "Colab lets you connect to a local runtime", running the code on your own computer instead of Google's.

It also warns that with a local connection "the code you execute can read, write, and delete files on your computer." For a school notebook from a trusted teacher that may be fine; for anything else, stay on the hosted runtime.

## Ten steps when a Colab notebook will not run

Our routine, in order. It works whether the problem is the machine, the files or your code.

### Colab or Jupyter?

The FAQ says Jupyter is the open source project Colab is based on. Colab needs no install and runs on Google machines; Jupyter runs on your own computer.

### Is Colab safe?

Your code runs in a machine private to your account. The risks are the ones above: notebooks that mount your Drive, and local runtimes that touch your files.

### Python errors in Colab

A NameError, TypeError or IndentationError in Colab is ordinary Python. Read it the same way you would in any editor; Colab only changes where the code runs.

## Working in Colab like a data scientist, not a firefighter

Every problem on this page has the same root: not knowing where the code runs and what survives. Our first term teaches that early.

**Twelve classes in Colab (ours, for high school and college students, changed to suit each one)**

| Classes | Notebook work | What it trains |
|---|---|---|
| 1 to 2 | A first notebook with text and code cells | Where the notebook is saved, and where it runs |
| 3 to 4 | Loading a class dataset from Drive | Mounting Drive and using full paths |
| 5 to 6 | Cleaning and charting with pandas | Setup cells at the top; Run all after a reconnect |
| 7 to 8 | A first machine learning model | When a GPU helps, and when to switch it off |
| 9 to 10 | A data project of their own | Sharing without leaking outputs |
| 11 to 12 | Presenting the notebook | A notebook anyone can rerun from the top |

We teach the ideas behind each notebook so students can complete their own coursework; we do not fill in graded notebooks. For the bigger picture, see our [data science course](/data-science-course) page and [AI and machine learning classes in the USA](/ai-and-machine-learning-classes-in-usa).

## Four stages of using Colab

From losing work to never worrying about it.

**Stages with Google Colab (ours)**

| Stage | What it looks like |
|---|---|
| 1. Visitor | Opens a shared notebook and presses play on each cell |
| 2. Uploader | Uploads files each session and loses them often |
| 3. Organizer | Keeps data in Drive and setup cells at the top |
| 4. Builder | Writes notebooks that run cleanly on a fresh machine |

### For parents

Colab is free and runs in a browser such as Chrome, so it can work on a Chromebook, which makes it a sensible tool for a school data class.
If your child is under 18, the AI features are off by Google's own rule. That is not a problem to solve.

### For students

Assume the machine will vanish. Keep files in Drive and setup at the top.
After any reconnect, Run all before you trust a result.

## Nine courses for Python, data and AI

Taught live online by a regular teacher, in a batch or one to one.

### Teens

Ages 13 to 18

- [Teen data science](/courses/data-science-course-for-teens-python-data): Datasets kept safely in Drive.
- [Teen machine learning](/courses/ai-ml-masterclass-teens): GPU runtimes used with care.
- [Hackathon preparation](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course): Ship a team notebook fast.

### Bridging

Ages 10 and up

- [Maths through coding](/courses/maths-through-coding): Grades 5 to 10, maths in Python.
- [Creative coding](/courses/creative-coding-animation-mastery): Generative art from data.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Algorithms behind the analysis.

### College and adults

Ages 18 and up

- [AI and ML for college](/courses/ai-ml-masterclass-complete-college): Deep learning and projects.
- [Data and AI analytics](/courses/data-and-ai-analytics-for-non-programmers-course): For adults who do not code yet.
- [Generative AI for college](/courses/complete-generative-ai-masterclass-college): Ages 18 and up, model building.

## Live lessons in the notebook you already use

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Batches after school, US time zones.
- **Weekends** Time for a full project session.
- **1-on-1** Around a class deadline or exam.

- **A steady teacher** The same person each class.
- **Your notebook** Colab, shared on screen.
- **Works on Chromebooks** A browser is all you need.
- **Concepts only** Graded work stays yours.
- **Every state** Live online, from home.
- **Batch or one to one** Fifteen to twenty, or private.

## Fees

Colab's free version costs nothing, and our teen data science course runs in it. You pay us only for teaching, month by month in US dollars, with no semester contract and nothing more to pay when you stop.

- Free first class: USD 0. A free first lesson. Share the notebook that fails. No card asked.
- Group batch: USD 100 a month. Fifteen to twenty students. A regular teacher. A batch you choose. Paid monthly.
- One to one: USD 150 a month. One student, one teacher. Times that suit you. Your own data and goals.

## Google Colab: common questions

### Why does Google Colab keep disconnecting?

Colab runs your code on a virtual machine that is deleted when idle for a while and has a maximum lifetime; the free version runs for at most 12 hours. Reconnect, then run all cells from the top.

### Where did my uploaded files go in Colab?

Uploaded files live on the virtual machine, which Colab deletes when it is idle or reaches its limit. Keep data files in Google Drive and mount Drive at the top of the notebook.

### Why does drive.mount() time out?

Google says Drive operations can time out when a folder holds too many items, and that more than about ten thousand items in the top level of My Drive can make mounting fail. Move files into subfolders and empty the Trash.

### Is Google Colab free for students?

Yes. The Colab FAQ says Colab is free of charge to use, although its resources are not guaranteed and not unlimited.

### Why can I not see Gemini or AI features in Colab?

Google says access to Colab AI features requires a Google account aged 18 or over. Students under 18 will not see them, and the notebook works fully without them.

### Why will Colab not open with my school account?

Access for school Workspace accounts is switched on or off by the school administrator, and Workspace for Education schools must get parental consent for students under 18. Ask your teacher.

### Should I use a GPU in Colab?

Only if your code uses one, usually for training models. Google recommends switching to a standard runtime when the GPU is not used: open the Runtime menu, choose Change runtime type and set the hardware accelerator to None.

### Can you finish my Colab assignment for me?

No. Graded notebooks are yours to complete; a teacher explains the concept and the error until you can finish it on your own.

### When do lessons run for students in the US?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### What does a Colab or data science course cost?

Nothing for the first lesson. After that, fees are charged a month at a time for live classes, with the figure in US dollars shown in the fees section above.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Our pages for US students, in one place.
- [Data science course](/data-science-course): What a full data course includes.
- [AI and ML in the USA](/ai-and-machine-learning-classes-in-usa): For students ready for models.
- [AI tools age guide](/ai-tools-age-guide): Age rules for popular AI tools.
- [Reading files in Python](/blog/how-to-read-and-write-files-in-python): Paths and files, explained.
- [Python for 17 year olds](/python-for-17-year-olds): For high school seniors.
- [Jupyter Notebook errors for students](/jupyter-notebook-errors-for-students): Jupyter Notebook errors students hit, what they mean, and how to fix them.
- [Python indentation errors explained](/python-indentation-error-explained): Every Python IndentationError message, what it means, and how to fix it.
- [Python turtle not working](/python-turtle-not-working): Python turtle not working? The real errors, the fixes, and how to write text.

## Contact

Book the free first class at [https://learn.modernagecoders.com/google-colab-help-for-students](https://learn.modernagecoders.com/google-colab-help-for-students#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
