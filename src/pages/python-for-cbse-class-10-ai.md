---
title: "Python for CBSE Class 10 AI (417) | Unit 7 and the Practical File"
description: "Python for CBSE Class 10 AI (417): the Advance Python unit, all eight suggested programs written out, NumPy, charts, CSV and images in Jupyter, and the file."
canonical: https://learn.modernagecoders.com/python-for-cbse-class-10-ai
source: src/pages/python-for-cbse-class-10-ai.html
---
> Python for CBSE Class 10 AI (417): the Advance Python unit, all eight suggested programs written out, NumPy, charts, CSV and images in Jupyter, and the file.

Start here

## The courses that teach this Python

The 417 batch for the file itself, and two companions for the student who discovers on a Wednesday that Python is the part they like.

[![CBSE Computational Thinking and AI for Teens course thumbnail](/images/ct-ai-teens.webp)  The file / 417 Wednesday lab CBSE AI for Class 9 to 12 The Class 10 batch whose Wednesday lab writes the eight suggested programs and the ten more that make a file worth defending. Open the syllabus →](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843)[![Python for Teens course thumbnail](/images/python-teens.webp)  Beyond Unit 7 / the language Python for Teens The full language, functions to files to real projects, for the student who wants Python to be more than a practical file. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  Beyond the CSV programs / data Data Science for Teens Pandas and Matplotlib taken seriously: the two CSV programs and two chart programs on this page are its first week. Open the syllabus →](/courses/data-science-course-for-teens-python-data)

Ans. The short version

Python in CBSE Class 10 AI (417) is Unit 7, Advance Python: ten practical hours, no theory marks, and the foundation of 30 practical marks, the 15-mark file of at least fifteen programs and the 15-mark practical examination on Units 4 to 7. The curriculum names Jupyter Notebook, virtual environments and packages, and suggests eight programs: adding two lists, mean, median and mode with NumPy, a line chart, a scatter chart, reading a CSV to show ten rows, showing a CSV's information, displaying an image, and finding an image's shape. They need four libraries, NumPy, Matplotlib, Pandas and an image library, and two traps: NumPy has no mode function, and every program in the practical exam arrives with a twist. Modern Age Coders writes them all, plus ten more, in a live Wednesday 9 PM lab.

Q1. Where does Python earn its marks?

## No theory marks, thirty practical marks: the strange shape of Unit 7

The ledger row for Advance Python reads ten practical hours and a blank in the theory column, which fools families into treating it as minor. Follow the marks instead.

| Where Python is assessed | Marks | Share of 100 |
| --- | --- | --- |
| Practical file, minimum 15 programs, most of them Python | 15 |   |
| Practical examination on Units 4 to 7, Python or Orange task | 15 |   |
| Viva voce, questions on the file's programs | 5 |   |
| Project, if built in Python rather than Orange | up to 20 |   |
| Theory paper questions on Unit 7 | 0 |   |
| Marks that depend on writing Python | 30 to 45 |   |

Thirty marks certain, up to forty-five if the project is coded, and not one of them is earned by reproduction: the file is checked, the practical exam is unseen, and the viva asks why. That is a third of the subject riding on ten curriculum hours, which is the least time per mark of any unit and the reason school periods alone rarely produce a confident file.

It also explains our Wednesday lab. One suggested program per week from the first month, written by the student in Jupyter, then broken with a wrong input and fixed, then explained back in one sentence. By November there are eighteen programs in the file and none of them is a photograph. The full marks scheme, including the theory units, is on [the syllabus explained](/cbse-class-10-ai-syllabus-explained).

Q2. What are the eight suggested programs?

## CBSE's suggested list, written out the way a full-marks file writes them

Every program below runs as shown in a Jupyter cell. Read the notes under each; the traps are where the marks move.

Programs 1 and 2 · lists and statistics

***1. Add the elements of two lists**CBSE suggested program*

```
a = [12, 7, 30, 5]
b = [8, 3, 10, 15]

total = []
for i in range(len(a)):
    total.append(a[i] + b[i])

print("Sum of lists:", total)

# Output: Sum of lists: [20, 10, 40, 20]
# One-line version students should also know:
total = [x + y for x, y in zip(a, b)]
```

The loop version shows the examiner you understand indexing; the zip version shows you understand Python. A good file has the first with the second as a comment.

***2. Mean, median and mode using NumPy**CBSE suggested program*

```
import numpy as np
from scipy import stats

marks = np.array([72, 65, 88, 91, 65, 70, 88, 65])

print("Mean:", np.mean(marks))
print("Median:", np.median(marks))
print("Mode:", stats.mode(marks, keepdims=False).mode)

# Output: Mean: 75.5 Median: 71.0 Mode: 65
# Trap: NumPy has no mode function.
# SciPy stats (or statistics.mode) supplies it.
```

The single most common error in Class 10 files is np.mode, which does not exist. Knowing why, and saying so in the viva, is worth more than the program.

Programs 3 and 4 · charts with Matplotlib

***3. Line chart from (2,5) to (9,10)**CBSE suggested program*

```
import matplotlib.pyplot as plt

x = [2, 9]
y = [5, 10]

plt.plot(x, y, marker="o")
plt.title("Line chart from (2,5) to (9,10)")
plt.xlabel("x")
plt.ylabel("y")
plt.show()

# In Jupyter the chart appears under the cell.
```

Title and axis labels are not decoration: a chart without them is the first thing a practical examiner marks down, and adding them is a two-second habit.

***4. Scatter chart for the given points**CBSE suggested program*

```
import matplotlib.pyplot as plt

x = [2, 9, 8, 5, 6]
y = [5, 10, 3, 7, 18]

plt.scatter(x, y)
plt.title("Scatter chart of five points")
plt.xlabel("x")
plt.ylabel("y")
plt.show()

# Points: (2,5) (9,10) (8,3) (5,7) (6,18)
```

Students often swap plot for scatter and lose the mark for the wrong chart type. The exam twist here is usually a sixth point or a colour, both one-line changes for a student who reads the code.

Programs 5 and 6 · CSV files with Pandas

***5. Read a CSV and display 10 rows**CBSE suggested program*

```
import pandas as pd

df = pd.read_csv("students.csv")

print(df.head(10))

# head(10) shows the first ten rows.
# Exam twist: "display the last 5 rows"
# becomes df.tail(5). Same idea, one word.
```

The file must exist beside the notebook, and the student must know that. Practical exams are lost to a wrong filename more often than to wrong Python.

***6. Read a CSV and display its information**CBSE suggested program*

```
import pandas as pd

df = pd.read_csv("students.csv")

df.info()

# Columns, non-null counts, data types.
print(df.describe())
# Count, mean, min, max per numeric column.
```

Info and describe answer different questions, and the viva loves asking which is which. Knowing that info shows types and describe shows statistics is a guaranteed mark.

Programs 7 and 8 · images

***7. Read an image and display it**CBSE suggested program*

```
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

img = mpimg.imread("photo.jpg")

plt.imshow(img)
plt.axis("off")
plt.show()

# The image appears under the cell in Jupyter.
```

This is why the curriculum names Jupyter: an image displays inline. In IDLE this program opens a window that vanishes on some machines, and the student concludes their code is wrong.

***8. Read an image and identify its shape**CBSE suggested program*

```
import cv2

img = cv2.imread("photo.jpg")

print("Shape:", img.shape)

# Output like: Shape: (720, 1280, 3)
# height, width, channels: 3 means RGB.
# This is Unit 5 (Computer Vision)
# arriving inside Unit 7.
```

The shape connects two units: an image is numbers, height by width by channels, exactly as the Computer Vision theory says. A student who explains the 3 has just answered a Unit 5 question in the practical viva.

Eight programs, four libraries, two traps, and one pattern that runs through all of them: every program has an obvious variation an examiner can ask for, and the file that scores is the one whose author can make that variation in a minute. Our Wednesday lab drills exactly that, and it is why the batch page describes the lab as [one program per week, broken and fixed](/cbse-class-10-ai-classes-online) rather than as eight programs typed in.

Q3. How is the environment set up?

## The recap the curriculum asks for: Jupyter, a virtual environment, packages

Unit 7 opens with exactly these three skills. Done once in the first lab, they never need doing again.

1. #### Install Python and check it answers

  Python from python.org, with the add-to-PATH box ticked on Windows. Then one command in a terminal, python --version, and the number that comes back is the first thing the student has ever asked a computer in its own language.
2. #### Create a virtual environment for the AI file

  python -m venv ai417, then activate it. The curriculum names this step because it is how real Python work is organised, and because a student who understands it never again breaks one project by installing something for another.
3. #### Install the four libraries in one line

  pip install numpy pandas matplotlib opencv-python scipy jupyter. That is every library the eight programs need, plus SciPy for the mode trap and Jupyter itself. Five minutes on an ordinary connection.
4. #### Launch Jupyter and write the first cell

  jupyter notebook opens the browser interface; a new notebook, one cell, print("417 file, program 1"), and the run button. From here on, every Wednesday adds a cell block with a program, its output and a one-line comment saying what it does, which is the file taking shape.
5. #### Keep the data files beside the notebook

  students.csv and photo.jpg live in the same folder as the notebook, so read_csv and imread find them by name. Half of all practical-day panic is a file in the wrong folder, and the habit that prevents it costs nothing.

Q4. What does the practical exam change?

## Each suggested program, and the twist it usually arrives with

The practical examination is set on Units 4 to 7 and is not the file re-typed. This is how the eight programs tend to reappear, and what a prepared student does with each.

| Suggested program | The likely twist | What it tests |
| --- | --- | --- |
| Add two lists | Multiply them, or add three lists, or lists of unequal length | Indexing and loops, not memory |
| Mean, median, mode | Only marks above a cutoff, or a second list to compare | Array filtering and reading output |
| Line chart | Three points instead of two, a title with the student's name | Understanding x and y lists |
| Scatter chart | A sixth point, a colour, or a grid | Knowing the function's arguments |
| CSV, first ten rows | Last five rows, or only one column | head, tail and column selection |
| CSV information | Count the rows, or the mean of one column | info versus describe versus a column mean |
| Display an image | Display it in grayscale, or two images side by side | Arguments to imread and imshow |
| Image shape | Print only the width, or the number of pixels | Indexing a tuple and multiplying its parts |

Every twist in the middle column is a one-line change for a student who understands the program and an impossible one for a student who stored it. That is the entire difference between the two students on the [board exam preparation page](/cbse-class-10-ai-board-exam-preparation), and the practical-exam rehearsals in our lab are built from this table.

Q5. What fills the file past eight?

## Ten more programs, in the same four libraries, that connect to the other units

- **A bar chart of marks by subject**, the third chart type after line and scatter.
- **A marks dictionary with a lookup**, so the student meets keys and values before Class 11 does.
- **A bag-of-words counter** for two sentences, which is the Unit 6 theory question written as code.
- **A grayscale conversion of an image**, connecting Unit 5's grayscale-versus-RGB idea to a running program.
- **A CSV filter**: rows where a column passes a condition, the Pandas version of the NumPy filter above.

- **A small statistics report** that prints mean, median, minimum and maximum for every numeric column.
- **A histogram of one column**, the chart that makes the Statistical Data unit's ideas visible.
- **A train-test split by hand**, slicing a list eighty-twenty, so Unit 3's idea has a program behind it.
- **An accuracy calculator**: predicted against actual labels, matches divided by total, Unit 3 in six lines.
- **A menu program** that runs any of the above on request, which is the viva's favourite thing to see.

Eighteen programs, all short, all written by the student, and half of them tied to a theory unit, so the file doubles as revision. How the file, the project and both vivas are scheduled across the year is on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file).

Q6. What does the batch cost?

## Monthly fees, the same for every course we teach

Billed monthly, no admission fee, stop at any month end. The free demo class comes first, and for this page it can be a Wednesday lab.

Group batch · Mon and Wed 9 PM

₹1,499

per month

- Ten to fifteen students, one teacher all year
- Wednesday lab: one file program a week, in Jupyter
- Monday theory, Part A and the concept units
- Certificate on completion

Book the free demo

Mini batch

₹2,999

per month

- Four to five students
- Other timings than the Monday and Wednesday batch
- Every program written with the teacher watching

Ask about timings

One to one

₹4,999

per month

- Private teaching on your own schedule
- The file built at the student's pace
- The usual choice for a student behind on Python in October

Enquire

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

Four more on CBSE AI 417, and five on the ICSE Computer Applications paper for families on the other board.

[The Mon and Wed 9 PM batch/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[The 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Board exam preparation/cbse-class-10-ai-board-exam-preparation](/cbse-class-10-ai-board-exam-preparation)[Project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)[ICSE Class 10 Java classes/icse-class-10-java-classes-online](/icse-class-10-java-classes-online)[ICSE Computer Applications syllabus/icse-class-10-computer-applications-syllabus-explained](/icse-class-10-computer-applications-syllabus-explained)[ICSE Java programs practice/icse-class-10-java-programs-practice](/icse-class-10-java-programs-practice)[ICSE BlueJ Java coaching/icse-class-10-bluej-java-coaching](/icse-class-10-bluej-java-coaching)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)

Questions about the Python

## What parents and students ask about Unit 7 and the file

### How much Python does CBSE Class 10 AI actually need?

Less than the word Advance suggests, and more than most students have. The unit's own learning outcomes are working in Jupyter Notebook, creating virtual environments, installing packages, writing basic programs with variables, data types, operators and control structures, and using built-in functions and libraries. The suggested programs then use four libraries: NumPy, Matplotlib, Pandas and an image library. A student who can write a loop, index a list and call a library function has everything the file and the practical exam demand.

### Which libraries must be installed for the practical file?

For CBSE's eight suggested programs: NumPy for the statistics program, Matplotlib for the line and scatter charts and for displaying an image, Pandas for the two CSV programs, and an image library, OpenCV or Pillow, for reading an image and finding its shape. All four install with one pip command inside the virtual environment the curriculum asks students to create, and we do that installation together in the first Wednesday lab.

### Does NumPy have a mode function?

No, and this trips up more Class 10 files than any other detail. NumPy gives you mean and median directly, but the mode comes from SciPy's stats module or from Python's own statistics module. CBSE's program title says mean, median and mode using NumPy, so the accepted file version computes mean and median with NumPy and the mode with SciPy or statistics alongside it, and a student who can explain why in the viva has turned a trap into a mark.

### Jupyter Notebook or IDLE: which should my child use?

Jupyter, because the 2026-27 curriculum names it explicitly in the Advance Python recap and because it is where charts and images display inline, which the chart and image programs need. IDLE still works for plain programs, but a file built in Jupyter shows outputs next to code, which examiners like and which makes the viva easier. We set Jupyter up in the first lab and never look back.

### Is any Python asked in the theory paper?

No. Advance Python carries practical hours only and no theory marks; the theory paper tests the concept units. Python earns its marks in Part C: the 15-mark practical file and the 15-mark practical examination, which is set on Units 4 to 7, plus a share of the viva. That is 30 marks that hinge on being able to write and adapt a short program, which is why Wednesdays exist.

### What does the practical exam actually ask?

A program in the family of the suggested list, usually with a twist: different numbers, an extra condition, a label on a chart, a different column from the CSV. It is set on Units 4 to 7, so an Orange task from the no-code units can appear alongside a Python one. The students who do well are the ones who practised variations, not the ones who practised reproduction, which is the whole design of our Wednesday labs.

### Do you teach only CBSE's eight programs or more?

More, because the file needs at least fifteen and because variation is the skill. Beyond the eight, students write a bar chart, a marks dictionary with a lookup, a bag-of-words counter that connects to the NLP unit, a grayscale conversion of an image, a CSV filter and a small statistics report, all in the same four libraries. That makes eighteen or so programs the student wrote and can defend, which is the file examiners reward.

### What laptop does the practical work need?

Any Windows or Mac laptop from roughly the last eight years that can run a browser and Jupyter, which is nearly all of them. Nothing here is heavy: NumPy, Pandas and Matplotlib run comfortably on modest machines. A tablet or phone is not enough for the labs, because the file has to be written, run and shown from a real keyboard.

### Does this Python carry forward to Class 11 and 12?

Directly. The Class 11 and 12 AI subject, code 843, and the Computer Science and Informatics Practices subjects all build on exactly these libraries, especially Pandas and Matplotlib. A Class 10 student who genuinely understands the eight programs on this page rather than storing them arrives in Class 11 ahead, and the companion Python for Teens course exists for the ones who want to keep going.

### How do we start?

Send the form and a mentor books a free demo class for the Monday and Wednesday batch. Ask for a Wednesday if Python is the worry: the demo then is a real lab, one suggested program written from scratch in Jupyter with the teacher, broken on purpose and fixed. No card, no enrolment fee, and an honest read on where your child's Python stands.

Start

## Ask for a Wednesday, and the demo is a real lab

Your child opens Jupyter with the teacher, writes one of the eight programs on this page from a blank cell, runs it, watches it break on a wrong input, fixes it, and explains it back in a sentence. Forty-five minutes later there is a program in a notebook that the student can adapt, and you have watched the difference between a file that is stored and a file that is understood. Then you decide, without a sales call.

More reading first? The [syllabus explained](/cbse-class-10-ai-syllabus-explained) shows where Unit 7 sits among the others, and the [project and practical file page](/cbse-class-10-ai-project-and-practical-file) covers the vivas.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20want%20help%20with%20Python%20for%20CBSE%20Class%2010%20AI%20417.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every session is a live video class. The form asks for one callback and books nothing else.

---

*Canonical: https://learn.modernagecoders.com/python-for-cbse-class-10-ai*
