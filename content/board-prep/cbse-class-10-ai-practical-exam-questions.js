// CBSE Class 10 AI (417): the 15-mark practical examination, 2026-27 session (exam
// in 2027). Intent: "class 10 AI practical exam questions", "AI practical exam 2027",
// "417 practical questions", "practical exam python numpy matplotlib", "what is
// asked in AI practical".
// Distinct from cbse-class-10-ai-project-and-practical-file (owns the file, the
// project, the year plan and the monthly mock in general terms) and
// python-for-cbse-class-10-ai (owns CBSE's eight suggested programs and their
// twists): this page is exam day only. Likely tasks per practical unit (4, 5, 6,
// 7), six original exam-style programs with their real output, the Orange
// versions of the tasks, a time plan for the task window and what an examiner
// checks while watching. CBSE does not print a duration or a rubric for the 417
// practical task; the time plan and the checklist are labelled as ours.
// Part C marks are from the CBSE 417 curriculum 2026-27 via the series design doc:
// practical exam 15, on Statistical Data, Computer Vision, NLP and Advance Python.
// Every program below was run with python3 on 2026-11-06 in a scratch venv
// (numpy 2.5.4, pandas and matplotlib installed there, because the system python
// has numpy only; scratch writers/cbse-class-10-ai-viva-questions/pe/a.py to f.py)
// and the outputs are pasted exactly: marks mean 76.0, median 77.0, mode 85,
// above-mean [85 85 91 77], count 4; grades Riya 92.0 A, Kabir 77.0 B, Sana 44.0,
// class average 71.0; rainfall shape (6, 3), mean 124.8, three months above 100;
// bar chart saved and viewed; image shape (2, 3, 3), 6 pixels, 18 values, gray
// [[85 85 85] [255 0 120]], row 2 flipped [120 0 255]; Bag of Words vocabulary of
// 9 words and vectors [1,0,0,0,1,0,1,0,1], [0,1,1,0,0,0,0,1,1], [0,0,0,1,0,1,0,0,2].
// OpenCV (cv2) is not installed, so the cv2 lines in the image section are named
// as the library equivalents and were NOT run; the image program itself is NumPy.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-practical-exam-questions',
  code: 'cb15',
  board: 'cbse',
  themeColor: '#5E3A55',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Practical Exam Questions 2027 (417), Solved',
  description: 'Class 10 AI practical exam questions for CBSE 417, 2027: likely tasks per unit, six solved Python programs with output, timing and what examiners check.',
  ogTitle: 'Class 10 AI Practical Exam Questions, Solved, for the 2027 Exam',
  ogDesc: 'The 15-mark CBSE Class 10 AI (417) practical exam: likely tasks for Statistical Data, Computer Vision, NLP and Advance Python, six original Python programs with real output, the Orange versions, a time plan and the examiner checklist.',
  twDesc: 'Exam day for the 417 practical: likely tasks per unit, six solved programs with output, timing and what examiners check.',
  headline: 'Class 10 AI Practical Exam Questions for 2027: Likely Tasks per Unit, Solved Programs, Timing and the Examiner Checklist',
  courseName: 'CBSE Class 10 AI (417) Practical Exam Preparation, Live Online',
  courseDesc: 'Live online preparation for the 15-mark CBSE Class 10 Artificial Intelligence (417) practical examination, session 2026-27: unseen Python and Orange tasks on Statistical Data, Computer Vision, NLP and Advance Python solved under time, checked the way an examiner checks them, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; practical exam',
  navLinks: [['#exam', 'The 15 marks'], ['#python-tasks', 'Python tasks'], ['#cv-nlp-tasks', 'Image and text tasks'], ['#checks', 'What is checked'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Practical exam questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Practical exam 2027',
  h1: 'Class 10 AI practical exam questions for 2027, solved the way the exam asks them.',
  lede: 'These class 10 AI practical exam questions are for the 15-mark task in CBSE 417 Part C, set on four units: Statistical Data, Computer Vision, NLP and Advance Python. Below are the likely tasks for each unit, six original programs run in Python with their real output, the Orange version of each task, a time plan and the checklist an examiner works through while you type. In our live batch, students solve tasks like these unseen and against the clock.',
  heroNote: 'Live online &middot; six solved programs below &middot; unseen tasks under time &middot; Python and Orange both &middot; checked against the examiner list &middot; first class free',
  waText: 'Hello Modern Age Coders. I want practice for the CBSE Class 10 AI 417 practical exam.',
  timetable: {
    label: 'When practical tasks are practised',
    title: 'Practical exam prep',
    right: 'CBSE 417',
    rows: [
      ['Monday, concept and dry run', '9:00', 'PM IST'],
      ['Wednesday, unseen timed task', '9:00', 'PM IST'],
      ['Solved programs on this page', '6', 'with output'],
      ['Practical exam weight', '15', 'marks']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Nepal:</b> 9:15 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Units 4, 5, 6, 7', 'Python or Orange']
  },
  picksH2: 'Courses behind the practical exam',
  picksLede: 'The 417 course whose Wednesday lab runs these timed tasks, the Python course for the NumPy, Pandas and Matplotlib the tasks lean on, and the Orange course for the no-code version of every task.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, with an unseen practical task solved under time in the Wednesday lab once each unit is taught.' },
    { slug: 'python-complete-masterclass-teens', code: 'Units 4 and 7 / Python', h3: 'Python for Teens', p: 'Lists, conditions, NumPy, Pandas and Matplotlib until a blank cell holds no fear and a changed requirement is a one-line edit.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Units 5 and 6 / Orange', h3: 'Visual ML with Orange', p: 'Image and text workflows built widget by widget, so an Orange task on exam day is a familiar canvas.' }
  ],
  capsule: 'The class 10 AI practical exam is worth 15 of the 50 Part C marks in CBSE 417 and is conducted by the school before the theory paper. Tasks come from four practical units: Statistical Data, Computer Vision, Natural Language Processing and Advance Python. Expect an unseen task close to your file programs: NumPy statistics, a Pandas CSV task, a labelled chart, an image or a text task, in Python or Orange. Examiners check that it runs, gives the right output and that you can explain it. Modern Age Coders practises these tasks live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="exam">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is the AI practical exam?</p>
      <h2>What is asked in the AI practical exam, unit by unit</h2>
      <p class="bx-lede">The practical exam is one unseen task worth 15 marks, solved on a computer and shown running. It is set on the four practical units, and Units 4 and 7 are examined nowhere else.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Practical unit</th><th scope="col">Likely task on the day</th><th scope="col">Tool</th></tr></thead>
        <tbody>
          <tr><td>Unit 7: Advance Python</td><td>A short program with input, conditions and a loop; a NumPy array with mean, median and a filter</td><td>Python in Jupyter</td></tr>
          <tr><td>Unit 4: Statistical Data</td><td>Read a CSV, show some rows, find a column statistic, filter rows, draw a labelled chart</td><td>Pandas and Matplotlib, or Orange</td></tr>
          <tr><td>Unit 5: Computer Vision</td><td>Load an image, print its shape, convert to grayscale, count pixels; or classify images in Orange</td><td>NumPy or OpenCV, or Orange</td></tr>
          <tr><td>Unit 6: NLP</td><td>Tokenise text, remove stopwords, count words or build a Bag of Words; or a word cloud and sentiment in Orange</td><td>Python, or Orange</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>How long is the AI practical exam?</h3>
        <p>The 417 curriculum does not print a duration for the task, so your school sets the slot, often alongside the file check and the viva. We train for a one-hour task window, which leaves room if the school is stricter.</p>
      </div>
      <div>
        <h3>Our time plan for a one-hour task</h3>
        <ol class="bx-qlist">
          <li><b>5 minutes:</b> read the task twice and underline every output it asks for.</li>
          <li><b>5 minutes:</b> write the steps as comments in the first cell.</li>
          <li><b>30 minutes:</b> code one step per cell, running each as you go.</li>
          <li><b>10 minutes:</b> run again with a second input and check by hand.</li>
          <li><b>10 minutes:</b> add labels and comments, save, and prepare to explain.</li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="python-tasks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Advance Python and Statistical Data</p>
      <h2>417 practical questions with Python, NumPy, Pandas and Matplotlib, solved</h2>
      <p class="bx-lede">Four exam-style tasks, each written for this page and run in Python with the output pasted exactly. Read the task, try it, then compare.</p>
    </div>
    <h3>Task 1 (Unit 7). Store seven marks in a NumPy array. Print the mean, median and mode, then the marks above the mean and how many there are.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>numpy plus statistics</span></figcaption>
  <pre>import numpy as np
import statistics

marks = np.array([72, 85, 64, 85, 91, 58, 77])
print("Mean:", round(np.mean(marks), 2))
print("Median:", np.median(marks))
print("Mode:", statistics.mode(marks.tolist()))
above = marks[marks &gt; np.mean(marks)]
print("Above the mean:", above)
print("Count:", above.size)</pre>
  <p class="bx-code-note">NumPy has no mode function, which is why statistics is imported. The filter inside the square brackets is the line examiners most like to ask about.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>Mean: 76.0
Median: 77.0
Mode: 85
Above the mean: [85 85 91 77]
Count: 4</pre>
  <p class="bx-code-note">Check by hand: the total is 532 and 532 / 7 = 76. Sorted, the fourth of seven values is 77.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Task 2 (Unit 7). Read the names and scores out of 50 of three students. Print each percentage with a grade, then the class average.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>input, if-elif, loop</span></figcaption>
  <pre>total = 0
for i in range(3):
    name = input("Name: ")
    score = float(input("Score out of 50: "))
    pct = score / 50 * 100
    total = total + pct
    if pct &gt;= 90:
        grade = "A"
    elif pct &gt;= 75:
        grade = "B"
    elif pct &gt;= 50:
        grade = "C"
    else:
        grade = "Needs support"
    print(name, round(pct, 1), "%", grade)
print("Class average:", round(total / 3, 1), "%")</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>inputs Riya 46, Kabir 38.5, Sana 22</span></figcaption>
  <pre>Riya 92.0 % A
Kabir 77.0 % B
Sana 44.0 % Needs support
Class average: 71.0 %</pre>
  <p class="bx-code-note">float(), not int(), because a score such as 38.5 is allowed. The order of the elif tests matters: check 90 before 75.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Task 3 (Unit 4). rainfall.csv has the columns month, rain_mm and rainy_days for June to November. Show its size and first three rows, the average rainfall, and the months above 100 mm.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>pandas</span></figcaption>
  <pre>import pandas as pd

df = pd.read_csv("rainfall.csv")
print(df.shape)
print(df.head(3))
print("Average rainfall:", round(df["rain_mm"].mean(), 1))
wet = df[df["rain_mm"] &gt; 100]
print(wet[["month", "rain_mm"]])</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>(6, 3)
  month  rain_mm  rainy_days
0   Jun      164           9
1   Jul      238          16
2   Aug      201          14
Average rainfall: 124.8
  month  rain_mm
0   Jun      164
1   Jul      238
2   Aug      201</pre>
  <p class="bx-code-note">Our file held Jun 164, Jul 238, Aug 201, Sep 96, Oct 38 and Nov 12. The double square brackets select two columns.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Task 4 (Unit 4). Draw a bar chart of the same rainfall with a title, axis labels and a dashed line at the average. Save it as an image.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>matplotlib</span></figcaption>
  <pre>import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("rainfall.csv")
plt.bar(df["month"], df["rain_mm"], color="teal")
plt.axhline(df["rain_mm"].mean(), color="black", linestyle="--")
plt.title("Monthly rainfall, June to November")
plt.xlabel("Month")
plt.ylabel("Rainfall (mm)")
plt.savefig("rainfall.png")
print("Saved rainfall.png")</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>what appears</span></figcaption>
  <pre>Saved rainfall.png

<i># Six teal bars, tallest for Jul (238),</i>
<i># shortest for Nov (12). The dashed line</i>
<i># sits at 124.8, crossed only by Jun,</i>
<i># Jul and Aug.</i></pre>
  <p class="bx-code-note">Call savefig before show, or the saved file can come out blank. In Jupyter, add plt.show() last to see the chart under the cell.</p>
</figure>
    </div>
    <p class="bx-mt-40">The Orange version of Tasks 3 and 4: File, then Data Table to view rows, Feature Statistics for the mean, Select Rows for the filter, and Bar Plot or Distributions for the chart. CBSE's eight suggested programs, and the twists they come back with, are on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="cv-nlp-tasks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Computer Vision and NLP</p>
      <h2>AI practical exam 2027: image and text tasks, solved</h2>
      <p class="bx-lede">Units 5 and 6 are in the theory paper too, so the practical version checks that the ideas work as code: pixels are numbers, and words become counts.</p>
    </div>
    <h3>Task 5 (Unit 5). An image is stored as a 2 by 3 RGB array. Print its shape, the number of pixels and values, a grayscale version by averaging the channels, and the second row flipped.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>numpy image</span></figcaption>
  <pre>import numpy as np

img = np.array([[[255, 0, 0], [0, 255, 0], [0, 0, 255]],
                [[255, 255, 255], [0, 0, 0], [90, 120, 150]]],
               dtype=np.uint8)
print("Shape:", img.shape)
h, w, c = img.shape
print("Pixels:", h * w, "Values:", img.size)
gray = img.mean(axis=2).astype(np.uint8)
print("Gray shape:", gray.shape)
print(gray)
print("Row 2 flipped:", np.fliplr(gray)[1])</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>Shape: (2, 3, 3)
Pixels: 6 Values: 18
Gray shape: (2, 3)
[[ 85  85  85]
 [255   0 120]]
Row 2 flipped: [120   0 255]</pre>
  <p class="bx-code-note">Pure red, green and blue all average to 85. With a real photo, cv2.imread loads the file and cv2.cvtColor makes the grayscale; OpenCV weights the three channels unequally, so its grey values differ from a plain average.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Task 6 (Unit 6). For three short sentences, lowercase, split into words, drop the stopwords is, a, and, the, then print the sorted vocabulary and each sentence's Bag of Words vector.</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>plain python</span></figcaption>
  <pre>docs = ["Clean water saves lives",
        "Dirty water spreads disease",
        "Water is life and water is a right"]
stop = {"is", "a", "and", "the"}
tokens = [[w for w in d.lower().split() if w not in stop]
          for d in docs]
vocab = sorted(set(w for t in tokens for w in t))
print(vocab)
for t in tokens:
    print([t.count(w) for w in vocab])</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>['clean', 'dirty', 'disease', 'life', 'lives',
 'right', 'saves', 'spreads', 'water']
[1, 0, 0, 0, 1, 0, 1, 0, 1]
[0, 1, 1, 0, 0, 0, 0, 1, 1]
[0, 0, 0, 1, 0, 1, 0, 0, 2]</pre>
  <p class="bx-code-note">"life" and "lives" stay separate because there is no stemming or lemmatisation here. The 2 in the last vector is "water" appearing twice.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">If the task is set in Orange</th><th scope="col">Widgets, in order</th><th scope="col">What to show the examiner</th></tr></thead>
        <tbody>
          <tr><td>Classify images, for example ripe and unripe fruit</td><td>Import Images, Image Embedding, Test and Score with a learner, Confusion Matrix</td><td>The accuracy and one class the model confuses</td></tr>
          <tr><td>Find the common words in reviews</td><td>Corpus, Preprocess Text, Bag of Words or Word Cloud</td><td>Why stopwords vanished after preprocessing</td></tr>
          <tr><td>Score opinions as positive or negative</td><td>Corpus, Preprocess Text, Sentiment Analysis, Data Table</td><td>The most negative text and its score</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Image Embedding needs an internet connection for its default embedder, so ask in advance whether the lab is online. The theory behind these tasks is drilled on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">computer vision questions</a> and <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>; every widget is walked through on <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="checks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What does the examiner check?</p>
      <h2>What examiners check in the class 10 AI practical exam</h2>
      <p class="bx-lede">CBSE does not publish a mark-by-mark rubric for the 417 practical task. From what examiners look for when they watch, this is the checklist our mock tasks are marked against; treat it as ours, not CBSE's.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">The examiner checks</th><th scope="col">How it shows on screen</th><th scope="col">How marks slip</th></tr></thead>
        <tbody>
          <tr><td>It runs</td><td>Every cell executes top to bottom without an error</td><td>A cell that only works because an older cell was run first</td></tr>
          <tr><td>The output is right</td><td>Numbers that can be checked by hand, every requested item printed</td><td>Printing the mean but forgetting the count the task also asked for</td></tr>
          <tr><td>The output is readable</td><td>Labels in print statements, chart title and axis names</td><td>A bare list of numbers nobody can match to the question</td></tr>
          <tr><td>It is your own</td><td>Variable names you can explain, comments in your words</td><td>Freezing when asked to change one value</td></tr>
          <tr><td>It handles a change</td><td>The examiner swaps an input and it still works</td><td>Values typed into the output instead of computed</td></tr>
          <tr><td>You can explain it</td><td>A clear sentence for what each block does</td><td>"I saw it in a video"</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Restart and run all</h3><p>Before you call the examiner, restart the kernel and run every cell. It catches the hidden dependence on a deleted cell.</p></div>
      <div class="bx-card"><h3>Keep error messages calm</h3><p>Read the last line of the error first: it names the problem, often a misspelt column name or a missing import.</p></div>
      <div class="bx-card"><h3>Say what you would add</h3><p>If time runs out, explain the missing step aloud. A clear plan for the last line is worth more than silence.</p></div>
    </div>
    <p class="bx-mt-40">The oral that follows the task is a separate 5 marks; its questions are on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is it practised in class?</p>
      <h2>How the live batch prepares students for the practical exam</h2>
      <p class="bx-lede">A student who has only typed programs from a file meets a new task and stalls. Practice has to be unseen, timed and changed halfway.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Unseen, not repeated</h3><p>Every Wednesday task is new, built on the week's unit. Students write the steps as comments first, then code, with the teacher watching shared screens.</p></div>
      <div class="bx-card"><h3>The changed requirement</h3><p>Twenty minutes in, the teacher changes one thing: a new column, a second sentence, a different threshold. That is the moment that tests understanding, so we practise it on purpose.</p></div>
      <div class="bx-card"><h3>Python and Orange both</h3><p>Each task is solved once in code and once in Orange, so the student is ready whichever tool the school's lab and examiner prefer.</p></div>
    </div>
    <p class="bx-mt-40">How the practical sits inside the whole year, with the file and project, is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>; the theory paper's mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">sample paper and mock tests</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise practical tasks in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats work through the same unseen tasks with the same teachers. The batch keeps a weekly rhythm and shows students how classmates solve the same task differently. One to one fixes the exact step where your child gets stuck. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'An unseen practical task in the Wednesday lab',
    'Each task in Python and in Orange',
    'A full timed practical before the school date'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Tasks chosen from the unit your child finds hardest',
    'Screen shared while your child codes, every step watched',
    'Extra tasks in the weeks just before the school practical',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'Students who can read code but cannot start from a blank cell usually improve fastest one to one, where every hesitation is caught. Students who are new to Python or Orange gain more from the batch, where the practical units are taught in order before tasks begin. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI practical exam preparation for CBSE schools abroad',
  zonesLede: 'A CBSE school in the Gulf, Nepal or East Africa runs the same Part C practical on dates it sets. This is when the batch falls in local time this winter.',
  zonesAfter: 'If the batch hour does not suit your city, one to one practical sessions run when you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the Class 10 AI practical exam',
  faqH2: 'What students and parents ask about the class 10 AI practical exam',
  faqs: [
    ['What questions come in the class 10 AI practical exam?', 'An unseen task from the four practical units of CBSE 417: a Python program with input and conditions, NumPy statistics such as mean and median, a Pandas task on a CSV file, a labelled Matplotlib chart, an image shape or grayscale task, or a text task such as tokenising and counting words. Some schools set the task in Orange instead of Python.'],
    ['How many marks is the class 10 AI practical exam?', 'The practical examination is 15 marks. It sits inside Part C, which carries 50 marks: practical file 15, practical exam 15, viva 5, project 10 and project viva 5. The theory paper carries the other 50 marks of the subject.'],
    ['Which units come in the AI practical exam 2027?', 'Four units: Unit 4 Statistical Data, Unit 5 Computer Vision, Unit 6 Natural Language Processing and Unit 7 Advance Python, as in the 2026-27 curriculum. Units 4 and 7 are examined only in the practical, never in the theory paper, so they deserve real practice.'],
    ['Is numpy and matplotlib asked in the class 10 AI practical?', 'Yes, they are the core of the Python tasks. Expect NumPy for arrays and statistics, Pandas to read and filter a CSV file and Matplotlib for line, bar or scatter charts with a title and axis labels. NumPy has no mode function, so use the statistics module for the mode.'],
    ['Is the practical exam the same as the practical file programs?', 'Not exactly. The task is usually close to a file program but changed: a different dataset, an extra condition, a second chart or a new sentence. A student who understands each line adapts in minutes, while one who memorised the file often gets stuck.'],
    ['Can I use Orange in the class 10 AI practical exam?', 'Many schools allow it, because Orange is part of the 417 curriculum for data, image and text tasks. Whether your task is in Python or Orange depends on the school and the examiner, so ask your teacher and practise both, especially the image and text workflows.'],
    ['How long is the class 10 AI practical exam?', 'The 417 curriculum does not fix a duration for the practical task, so each school sets its own slot, usually with the file check and the viva on the same day. We train students to finish a task in about an hour, with time left to test and explain it.'],
    ['When is the CBSE class 10 AI practical exam held?', 'It is conducted by the school before the theory board paper, on dates the school announces. Ask your school for the exact date, and aim to finish the practical file early so the last weeks go into timed practice rather than writing.'],
    ['What if my code shows an error in the practical exam?', 'Read the last line of the error first, because it names the problem, then fix that one line. Common causes are a misspelt column name, a missing import or a bracket left open. If you cannot fix it in time, explain the step you intended: examiners credit a clear plan.'],
    ['Is practical exam practice included in your classes?', 'Yes. Unseen practical tasks in Python and Orange are part of ordinary teaching in the Wednesday lab and in one to one sessions, covered by the monthly fee shown on this page, with no admission fee and a free first class.']
  ],
  startH2: 'Solve a free practical task with a teacher',
  startHtml: `        <p>In the free first class, your child solves a short unseen practical task while sharing the screen, and the teacher shows how an examiner would check it, including a changed input at the end. You will see where your child is steady and where they stall, and the mentor will say plainly whether the batch or one to one fits better.</p>
        <p>Want to see the full Part C picture first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI practical exam'
};
