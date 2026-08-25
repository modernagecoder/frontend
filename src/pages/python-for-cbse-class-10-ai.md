---
title: "Python for CBSE Class 10 AI (417) | Unit 7 and the Practical File"
description: "Python for CBSE Class 10 AI (417): the Advance Python unit, all eight suggested programs written out, NumPy, charts, CSV and images in Jupyter, and the file."
canonical: https://learn.modernagecoders.com/python-for-cbse-class-10-ai
source: src/pages/python-for-cbse-class-10-ai.html
---

> Python in CBSE Class 10 AI (417) is Unit 7, Advance Python: ten practical hours, no theory marks, and the foundation of 30 practical marks, the 15-mark file of at least fifteen programs and the 15-mark practical examination on Units 4 to 7. The curriculum names Jupyter Notebook, virtual environments and packages, and suggests eight programs: adding two lists, mean, median and mode with NumPy, a line chart, a scatter chart, reading a CSV to show ten rows, showing a CSV's information, displaying an image, and finding an image's shape. They need four libraries, NumPy, Matplotlib, Pandas and an image library, and two traps: NumPy has no mode function, and every program in the practical exam arrives with a twist. Modern Age Coders writes them all, plus ten more, in a live Wednesday 9 PM lab.

## Where Python earns its marks

Practical file, minimum 15 programs, mostly Python: 15 marks. Practical examination on Units 4 to 7, a Python or Orange task: 15 marks. Viva voce on the file's programs: 5 marks. The project, if coded rather than built in Orange: up to 10 marks. Theory paper questions on Unit 7: none. Thirty marks certain and up to forty-five ride on ten curriculum hours, the least time per mark of any unit.

## The eight suggested programs, written out

1. Add the elements of two lists: a loop over range(len(a)) appending a[i] + b[i], with the zip and list-comprehension version as a comment. Output for [12, 7, 30, 5] and [8, 3, 10, 15] is [20, 10, 40, 20].
2. Mean, median and mode using NumPy: np.mean and np.median on an array of marks, with the mode from scipy.stats.mode, because NumPy has no mode function. For [72, 65, 88, 91, 65, 70, 88, 65]: mean 75.5, median 71.0, mode 65.
3. Line chart from (2,5) to (9,10): matplotlib.pyplot.plot with x = [2, 9] and y = [5, 10], a marker, a title and axis labels; charts without labels are marked down first.
4. Scatter chart for (2,5), (9,10), (8,3), (5,7), (6,18): plt.scatter, not plt.plot; the exam twist is usually a sixth point or a colour.
5. Read a CSV and display 10 rows: pandas read_csv then df.head(10); "last five rows" becomes df.tail(5), and the file must sit beside the notebook.
6. Read a CSV and display its information: df.info() for columns, non-null counts and data types; df.describe() for count, mean, min and max; the viva loves asking which is which.
7. Read an image and display it: matplotlib.image.imread, plt.imshow, plt.axis("off"), plt.show(); this is why the curriculum names Jupyter, where the image displays inline.
8. Read an image and identify its shape: cv2.imread then img.shape, giving height, width and channels, where 3 means RGB, which is Unit 5 arriving inside Unit 7.

## The environment the curriculum asks for

Install Python and check python --version. Create a virtual environment, python -m venv ai417, and activate it. Install the four libraries in one line: pip install numpy pandas matplotlib opencv-python scipy jupyter. Launch jupyter notebook and write the first cell. Keep students.csv and photo.jpg beside the notebook, because half of practical-day panic is a file in the wrong folder.

## The twist each program gets in the practical exam

Add two lists becomes multiply them or add three. Mean, median and mode becomes only marks above a cutoff. The line chart gets a third point and a title. The scatter chart gets a sixth point or a colour. The CSV rows become the last five or one column. CSV information becomes a row count or one column's mean. The image gets displayed in grayscale. The shape becomes only the width or the pixel count. Every twist is a one-line change for a student who understands the program.

## Ten more programs for a file past eight

A bar chart of marks by subject; a marks dictionary with a lookup; a bag-of-words counter for two sentences, the Unit 6 theory question as code; a grayscale image conversion; a CSV filter; a statistics report over every numeric column; a histogram of one column; a train-test split by hand; an accuracy calculator comparing predicted and actual labels; and a menu program that runs any of them.

## The courses that teach this Python

- [CBSE Computational Thinking and AI for Teens, Classes 9 to 12 (417 and 843)](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): the Class 10 batch whose Wednesday lab writes the file.
- [Python for Teens](/courses/python-complete-masterclass-teens): the full language, for the student who wants more than a file.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Pandas and Matplotlib taken seriously.

Students also look at [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) and [Python Web with Django and Flask](/courses/python-web-development-django-flask-course).

## Fees

Monthly, no admission fee, stop at any month end. The Monday and Wednesday group batch is the standard monthly group fee; a mini batch of three to four and one to one run on other timings. Fees are shown on the page in the visitor's own currency. The free demo can be a Wednesday lab.

## Frequently asked questions

**How much Python does 417 need?** A loop, list indexing and library calls: the unit's outcomes are Jupyter, virtual environments, packages, basic programs and built-in functions.

**Which libraries?** NumPy, Matplotlib, Pandas and OpenCV or Pillow, plus SciPy for the mode, installed in one pip command.

**Does NumPy have a mode function?** No; SciPy stats or the statistics module supplies it, and explaining that in the viva turns a trap into a mark.

**Jupyter or IDLE?** Jupyter, named in the curriculum, where charts and images display inline.

**Any Python in the theory paper?** None; Python earns its 30 marks in Part C.

**Does it carry to Class 11?** Directly, into code 843 and the CS and IP subjects, all built on the same libraries.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Related pages: /cbse-class-10-ai-classes-online, /cbse-class-10-ai-syllabus-explained, /cbse-class-10-ai-board-exam-preparation, /cbse-class-10-ai-project-and-practical-file, /python-for-class-10, /python-for-class-11-cbse.

---

*Canonical: https://learn.modernagecoders.com/python-for-cbse-class-10-ai*
