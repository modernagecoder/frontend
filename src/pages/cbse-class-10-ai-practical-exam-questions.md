---
title: "Class 10 AI Practical Exam Questions 2027 (417), Solved"
description: "Class 10 AI practical exam questions for CBSE 417, 2027: likely tasks per unit, six solved Python programs with output, timing and what examiners check."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-practical-exam-questions
source: src/pages/cbse-class-10-ai-practical-exam-questions.html
updated: 2026-11-06
---

> The class 10 AI practical exam is worth 15 of the 50 Part C marks in CBSE 417 and is conducted by the school before the theory paper. Tasks come from four practical units: Statistical Data, Computer Vision, Natural Language Processing and Advance Python. Expect an unseen task close to your file programs: NumPy statistics, a Pandas CSV task, a labelled chart, an image or a text task, in Python or Orange. Examiners check that it runs, gives the right output and that you can explain it. Modern Age Coders practises these tasks live in a Monday and Wednesday 9:00 PM IST batch, or one to one.

## What is asked in the AI practical exam, unit by unit

The practical exam is one unseen task worth 15 marks, solved on a computer and shown running. It is set on the four practical units, and Units 4 and 7 are examined nowhere else.

- Practical unit | Likely task on the day | Tool

- Unit 7: Advance Python | A short program with input, conditions and a loop; a NumPy array with mean, median and a filter | Python in Jupyter

- Unit 4: Statistical Data | Read a CSV, show some rows, find a column statistic, filter rows, draw a labelled chart | Pandas and Matplotlib, or Orange

- Unit 5: Computer Vision | Load an image, print its shape, convert to grayscale, count pixels; or classify images in Orange | NumPy or OpenCV, or Orange

- Unit 6: NLP | Tokenise text, remove stopwords, count words or build a Bag of Words; or a word cloud and sentiment in Orange | Python, or Orange

### How long is the AI practical exam?

The 417 curriculum does not print a duration for the task, so your school sets the slot, often alongside the file check and the viva. We train for a one-hour task window, which leaves room if the school is stricter.

### Our time plan for a one-hour task

- 5 minutes: read the task twice and underline every output it asks for.

- 5 minutes: write the steps as comments in the first cell.

- 30 minutes: code one step per cell, running each as you go.

- 10 minutes: run again with a second input and check by hand.

- 10 minutes: add labels and comments, save, and prepare to explain.

## 417 practical questions with Python, NumPy, Pandas and Matplotlib, solved

Four exam-style tasks, each written for this page and run in Python with the output pasted exactly. Read the task, try it, then compare.

### Task 1 (Unit 7). Store seven marks in a NumPy array. Print the mean, median and mode, then the marks above the mean and how many there are.

```
import numpy as np
import statistics

marks = np.array([72, 85, 64, 85, 91, 58, 77])
print("Mean:", round(np.mean(marks), 2))
print("Median:", np.median(marks))
print("Mode:", statistics.mode(marks.tolist()))
above = marks[marks > np.mean(marks)]
print("Above the mean:", above)
print("Count:", above.size)
```

```
Mean: 76.0
Median: 77.0
Mode: 85
Above the mean: [85 85 91 77]
Count: 4
```

### Task 2 (Unit 7). Read the names and scores out of 50 of three students. Print each percentage with a grade, then the class average.

```
total = 0
for i in range(3):
    name = input("Name: ")
    score = float(input("Score out of 50: "))
    pct = score / 50 * 100
    total = total + pct
    if pct >= 90:
        grade = "A"
    elif pct >= 75:
        grade = "B"
    elif pct >= 50:
        grade = "C"
    else:
        grade = "Needs support"
    print(name, round(pct, 1), "%", grade)
print("Class average:", round(total / 3, 1), "%")
```

```
Riya 92.0 % A
Kabir 77.0 % B
Sana 44.0 % Needs support
Class average: 71.0 %
```

### Task 3 (Unit 4). rainfall.csv has the columns month, rain_mm and rainy_days for June to November. Show its size and first three rows, the average rainfall, and the months above 100 mm.

```
import pandas as pd

df = pd.read_csv("rainfall.csv")
print(df.shape)
print(df.head(3))
print("Average rainfall:", round(df["rain_mm"].mean(), 1))
wet = df[df["rain_mm"] > 100]
print(wet[["month", "rain_mm"]])
```

```
(6, 3)
  month  rain_mm  rainy_days
0   Jun      164           9
1   Jul      238          16
2   Aug      201          14
Average rainfall: 124.8
  month  rain_mm
0   Jun      164
1   Jul      238
2   Aug      201
```

### Task 4 (Unit 4). Draw a bar chart of the same rainfall with a title, axis labels and a dashed line at the average. Save it as an image.

```
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("rainfall.csv")
plt.bar(df["month"], df["rain_mm"], color="teal")
plt.axhline(df["rain_mm"].mean(), color="black", linestyle="--")
plt.title("Monthly rainfall, June to November")
plt.xlabel("Month")
plt.ylabel("Rainfall (mm)")
plt.savefig("rainfall.png")
print("Saved rainfall.png")
```

```
Saved rainfall.png

# Six teal bars, tallest for Jul (238),
# shortest for Nov (12). The dashed line
# sits at 124.8, crossed only by Jun,
# Jul and Aug.
```

The Orange version of Tasks 3 and 4: File, then Data Table to view rows, Feature Statistics for the mean, Select Rows for the filter, and Bar Plot or Distributions for the chart. CBSE's eight suggested programs, and the twists they come back with, are on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai).

## AI practical exam 2027: image and text tasks, solved

Units 5 and 6 are in the theory paper too, so the practical version checks that the ideas work as code: pixels are numbers, and words become counts.

### Task 5 (Unit 5). An image is stored as a 2 by 3 RGB array. Print its shape, the number of pixels and values, a grayscale version by averaging the channels, and the second row flipped.

```
import numpy as np

img = np.array([[[255, 0, 0], [0, 255, 0], [0, 0, 255]],
                [[255, 255, 255], [0, 0, 0], [90, 120, 150]]],
               dtype=np.uint8)
print("Shape:", img.shape)
h, w, c = img.shape
print("Pixels:", h * w, "Values:", img.size)
gray = img.mean(axis=2).astype(np.uint8)
print("Gray shape:", gray.shape)
print(gray)
print("Row 2 flipped:", np.fliplr(gray)[1])
```

```
Shape: (2, 3, 3)
Pixels: 6 Values: 18
Gray shape: (2, 3)
[[ 85  85  85]
 [255   0 120]]
Row 2 flipped: [120   0 255]
```

### Task 6 (Unit 6). For three short sentences, lowercase, split into words, drop the stopwords is, a, and, the, then print the sorted vocabulary and each sentence's Bag of Words vector.

```
docs = ["Clean water saves lives",
        "Dirty water spreads disease",
        "Water is life and water is a right"]
stop = {"is", "a", "and", "the"}
tokens = [[w for w in d.lower().split() if w not in stop]
          for d in docs]
vocab = sorted(set(w for t in tokens for w in t))
print(vocab)
for t in tokens:
    print([t.count(w) for w in vocab])
```

```
['clean', 'dirty', 'disease', 'life', 'lives',
 'right', 'saves', 'spreads', 'water']
[1, 0, 0, 0, 1, 0, 1, 0, 1]
[0, 1, 1, 0, 0, 0, 0, 1, 1]
[0, 0, 0, 1, 0, 1, 0, 0, 2]
```

- If the task is set in Orange | Widgets, in order | What to show the examiner

- Classify images, for example ripe and unripe fruit | Import Images, Image Embedding, Test and Score with a learner, Confusion Matrix | The accuracy and one class the model confuses

- Find the common words in reviews | Corpus, Preprocess Text, Bag of Words or Word Cloud | Why stopwords vanished after preprocessing

- Score opinions as positive or negative | Corpus, Preprocess Text, Sentiment Analysis, Data Table | The most negative text and its score

Image Embedding needs an internet connection for its default embedder, so ask in advance whether the lab is online. The theory behind these tasks is drilled on [computer vision questions](/cbse-class-10-ai-computer-vision-questions) and [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai); every widget is walked through on [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai).

## What examiners check in the class 10 AI practical exam

CBSE does not publish a mark-by-mark rubric for the 417 practical task. From what examiners look for when they watch, this is the checklist our mock tasks are marked against; treat it as ours, not CBSE's.

- The examiner checks | How it shows on screen | How marks slip

- It runs | Every cell executes top to bottom without an error | A cell that only works because an older cell was run first

- The output is right | Numbers that can be checked by hand, every requested item printed | Printing the mean but forgetting the count the task also asked for

- The output is readable | Labels in print statements, chart title and axis names | A bare list of numbers nobody can match to the question

- It is your own | Variable names you can explain, comments in your words | Freezing when asked to change one value

- It handles a change | The examiner swaps an input and it still works | Values typed into the output instead of computed

- You can explain it | A clear sentence for what each block does | "I saw it in a video"

### Restart and run all
Before you call the examiner, restart the kernel and run every cell. It catches the hidden dependence on a deleted cell.

### Keep error messages calm
Read the last line of the error first: it names the problem, often a misspelt column name or a missing import.

### Say what you would add
If time runs out, explain the missing step aloud. A clear plan for the last line is worth more than silence.

The oral that follows the task is a separate 5 marks; its questions are on [class 10 AI viva questions](/cbse-class-10-ai-viva-questions).

## How the live batch prepares students for the practical exam

A student who has only typed programs from a file meets a new task and stalls. Practice has to be unseen, timed and changed halfway.

### Unseen, not repeated
Every Wednesday task is new, built on the week's unit. Students write the steps as comments first, then code, with the teacher watching shared screens.

### The changed requirement
Twenty minutes in, the teacher changes one thing: a new column, a second sentence, a different threshold. That is the moment that tests understanding, so we practise it on purpose.

### Python and Orange both
Each task is solved once in code and once in Orange, so the student is ready whichever tool the school's lab and examiner prefer.

How the practical sits inside the whole year, with the file and project, is on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file); the theory paper's mock calendar is on [sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course, with an unseen practical task solved under time in the Wednesday lab once each unit is taught.
- [Python for Teens](/courses/python-complete-masterclass-teens): Lists, conditions, NumPy, Pandas and Matplotlib until a blank cell holds no fear and a changed requirement is a one-line edit.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Image and text workflows built widget by widget, so an Orange task on exam day is a familiar canvas.

Families also look at [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

## Batch or personalised, and the fees

Option 1, fixed batch: Monday and Wednesday at 9:00 PM IST, live online, fifteen to twenty students. Option 2, personalised one to one: days and time chosen by the family, the right choice for time zones where the batch falls in school hours or late at night. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Batch times outside India

- Where you live | Mon and Wed 9:00 PM IST | Best format

- India (IST)every Indian city | 9:00 PM | Batch fits

- UAE and OmanDubai, Abu Dhabi, Sharjah, Muscat | 7:30 PM | Batch fits

- Saudi Arabia, Qatar, Kuwait, BahrainRiyadh, Jeddah, Dammam, Doha, Kuwait City, Manama | 6:30 PM | Batch fits

- NepalKathmandu | 9:15 PM | Batch fits

- Ethiopia and East AfricaAddis Ababa and East Africa Time | 6:30 PM | Batch fits

- Singapore and MalaysiaSingapore, Kuala Lumpur | 11:30 PM | Choose 1-on-1

## Frequently asked questions

**What questions come in the class 10 AI practical exam?** An unseen task from the four practical units of CBSE 417: a Python program with input and conditions, NumPy statistics such as mean and median, a Pandas task on a CSV file, a labelled Matplotlib chart, an image shape or grayscale task, or a text task such as tokenising and counting words. Some schools set the task in Orange instead of Python.

**How many marks is the class 10 AI practical exam?** The practical examination is 15 marks. It sits inside Part C, which carries 50 marks: practical file 15, practical exam 15, viva 5, project 10 and project viva 5. The theory paper carries the other 50 marks of the subject.

**Which units come in the AI practical exam 2027?** Four units: Unit 4 Statistical Data, Unit 5 Computer Vision, Unit 6 Natural Language Processing and Unit 7 Advance Python, as in the 2026-27 curriculum. Units 4 and 7 are examined only in the practical, never in the theory paper, so they deserve real practice.

**Is numpy and matplotlib asked in the class 10 AI practical?** Yes, they are the core of the Python tasks. Expect NumPy for arrays and statistics, Pandas to read and filter a CSV file and Matplotlib for line, bar or scatter charts with a title and axis labels. NumPy has no mode function, so use the statistics module for the mode.

**Is the practical exam the same as the practical file programs?** Not exactly. The task is usually close to a file program but changed: a different dataset, an extra condition, a second chart or a new sentence. A student who understands each line adapts in minutes, while one who memorised the file often gets stuck.

**Can I use Orange in the class 10 AI practical exam?** Many schools allow it, because Orange is part of the 417 curriculum for data, image and text tasks. Whether your task is in Python or Orange depends on the school and the examiner, so ask your teacher and practise both, especially the image and text workflows.

**How long is the class 10 AI practical exam?** The 417 curriculum does not fix a duration for the practical task, so each school sets its own slot, usually with the file check and the viva on the same day. We train students to finish a task in about an hour, with time left to test and explain it.

**When is the CBSE class 10 AI practical exam held?** It is conducted by the school before the theory board paper, on dates the school announces. Ask your school for the exact date, and aim to finish the practical file early so the last weeks go into timed practice rather than writing.

**What if my code shows an error in the practical exam?** Read the last line of the error first, because it names the problem, then fix that one line. Common causes are a misspelt column name, a missing import or a bracket left open. If you cannot fix it in time, explain the step you intended: examiners credit a clear plan.

**Is practical exam practice included in your classes?** Yes. Unseen practical tasks in Python and Orange are part of ordinary teaching in the Wednesday lab and in one to one sessions, covered by the monthly fee shown on this page, with no admission fee and a free first class.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI project ideas](/cbse-class-10-ai-project-ideas).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-practical-exam-questions*
