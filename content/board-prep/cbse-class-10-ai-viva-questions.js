// CBSE Class 10 AI (417): viva questions for 2026-27, split into the practical viva
// (5 marks, on the file and the practical units) and the project viva (5 marks).
// Intent: "class 10 AI viva questions", "AI practical viva questions", "project viva
// questions class 10 AI", "oral questions 417", "viva voce AI class 10".
// Distinct from cbse-class-10-ai-project-and-practical-file (which owns the file
// anatomy, the project's six documented stages, the year plan and one worked
// two-student viva contrast): this page IS the question bank, 54 original viva
// questions, each with a two-sentence answer written the way a student says it
// aloud, plus the follow-up chains examiners use and how the rehearsal runs.
// Part C marks (file 15, practical exam 15, viva 5, project 10, project viva 5)
// are from the CBSE 417 curriculum 2026-27 as recorded in the series design doc.
// CBSE publishes no viva question list and no viva rubric for 417; every question
// here is ours and the page says so. No claim about viva duration is made.
// Every code fact in the answers was run with python3 on 2026-11-06 in a scratch
// venv (numpy 2.5.4, pandas installed there; scratch writers/cbse-class-10-ai-viva-
// questions/viva.py): head() returns 5 rows, head(10) returns 10; [1, 2] + [3, 4] gives [1, 2, 3, 4]; np.array([1, 2]) + np.array([3, 4])
// gives [4 6]; hasattr(np, 'mode') is False; statistics.mode([2, 5, 5, 7]) = 5;
// np.median([4, 1, 9, 6]) = 5.0; a 3 x 4 RGB array has shape (3, 4, 3), its
// grayscale twin (3, 4); 2^8 = 256; 50 x 40 x 3 = 6,000 values; accuracy
// (40 + 45) / 100 = 0.85, precision 40 / 50 = 0.8, recall 40 / 45 = 0.89.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-viva-questions',
  code: 'cb10',
  board: 'cbse',
  themeColor: '#5B2347',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Viva Questions 2026-27 (417) with Answers',
  description: 'Class 10 AI viva questions for CBSE 417, 2026-27: 54 original practical viva and project viva questions, each with a two-sentence answer to say aloud.',
  ogTitle: 'Class 10 AI Viva Questions: Practical Viva and Project Viva',
  ogDesc: '54 original viva voce questions for CBSE Class 10 AI (417): Python, NumPy, Pandas, Matplotlib, images, Orange, NLP and evaluation for the practical viva, then problem scoping to ethics for the project viva, each with a spoken two-sentence answer.',
  twDesc: '54 original 417 viva questions, practical and project, each answered in two spoken sentences, plus the follow-ups examiners chain on.',
  headline: 'Class 10 AI Viva Questions for 2026-27: 54 Practical and Project Viva Questions with Spoken Answers',
  courseName: 'CBSE Class 10 AI (417) Viva Rehearsal, Live Online',
  courseDesc: 'Live online viva rehearsal for CBSE Class 10 Artificial Intelligence (417), session 2026-27: students explain their own file programs and project out loud, answer chained follow-up questions from a teacher, and repeat weak answers until they come out in two clear sentences, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; viva voce',
  navLinks: [['#marks', 'How the viva works'], ['#practical-viva', 'Practical viva'], ['#project-viva', 'Project viva'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Viva questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Viva voce 2026-27',
  h1: 'Class 10 AI viva questions, with answers short enough to say out loud.',
  lede: 'These class 10 AI viva questions cover both orals in CBSE 417 Part C: the practical viva on your file and the practical units, and the project viva on the project you built. There are 54 original questions, and every answer is two sentences, because that is about how long an examiner listens before the next question. Tap Say this to compare your own answer. In our live batch, students rehearse these aloud with a teacher who keeps asking why.',
  heroNote: 'Live online &middot; 54 viva questions below &middot; spoken two-sentence answers &middot; follow-up chains rehearsed &middot; mock viva with an unfamiliar teacher &middot; first class free',
  waText: 'Hello Modern Age Coders. I want viva practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When viva rehearsal runs',
    title: 'Viva rehearsal',
    right: 'CBSE 417',
    rows: [
      ['Monday, explain-it-back round', '9:00', 'PM IST'],
      ['Wednesday, lab and oral check', '9:00', 'PM IST'],
      ['Viva questions on this page', '54', 'answered'],
      ['Marks riding on the two orals', '10', 'of 50']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Nepal:</b> 9:15 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Practical viva 5', 'Project viva 5']
  },
  picksH2: 'Courses that make the viva easy',
  picksLede: 'The 417 course where students explain their work every week, the Python course behind the programs the practical viva asks about, and the AI course for students who want to defend a model with confidence.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, where every file program and project decision is explained aloud in class long before an examiner asks.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical viva / Python', h3: 'Python for Teens', p: 'Lists, NumPy, Pandas and Matplotlib understood line by line, so "what does this line do" has a ready answer.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Project viva / models', h3: 'AI and ML for Teens', p: 'Supervised learning, train and test data and the metrics behind a project, taught to a depth that survives follow-up questions.' }
  ],
  capsule: 'Class 10 AI viva questions in CBSE 417 come in two orals worth 5 marks each: the practical viva, on the programs in your practical file and the practical units (Statistical Data, Computer Vision, NLP and Advance Python), and the project viva, on the project you built for the Sustainable Development Goals. CBSE publishes no viva question list, so examiners ask about your own work: what a line of code does, why you chose that dataset, what your accuracy means. Modern Age Coders rehearses vivas live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="marks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is the viva in Class 10 AI?</p>
      <h2>How the viva voce in AI class 10 is marked</h2>
      <p class="bx-lede">There are two vivas in CBSE 417 Part C, 5 marks each, and both are conducted in school before the theory paper. The questions below are ours: CBSE does not publish a viva question list, so examiners draw on your own file and project.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Oral</th><th scope="col">Marks</th><th scope="col">What it is about</th><th scope="col">The question behind every question</th></tr></thead>
        <tbody>
          <tr><td>Practical viva</td><td class="bx-num">5</td><td>Programs in your practical file and the practical units: Statistical Data, Computer Vision, NLP and Advance Python</td><td>Do you understand the code you submitted?</td></tr>
          <tr><td>Project viva</td><td class="bx-num">5</td><td>Your project, field visit or portfolio linked to the Sustainable Development Goals</td><td>Did you make the decisions in this project?</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The two-sentence rule</h3>
        <p>Say the fact first, then one reason, example or number from your own work. "Recall is TP divided by TP plus FN. In my project it was 0.89, which matters because a missed case costs more than a false alarm." That is a complete viva answer.</p>
      </div>
      <div>
        <h3>Four habits that earn the marks</h3>
        <ul class="bx-check">
          <li><b>Point at your own work,</b> not a textbook line.</li>
          <li><b>Use the unit words:</b> token, pixel, recall.</li>
          <li><b>Stop when you are done.</b> Short answers invite easy follow-ups.</li>
        </ul>
      </div>
    </div>
    <p class="bx-mt-40">How the file and the project are assembled across the year is covered on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>. This page is only the oral.</p>
  </div>
</section>`,

`<section class="bx-section" id="practical-viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Practical viva, part one</p>
      <h2>AI practical viva questions: Python, NumPy, Pandas and charts</h2>
      <p class="bx-lede">Questions 1 to 16 come from Advance Python and Statistical Data, the two units that appear only in the practical. Expect the examiner to point at a program in your file and start here.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Python, Jupyter and packages</h3>
        <ol class="bx-qlist">
          <li>Why did you use Jupyter Notebook for your file?
            <details><summary>Say this</summary> Jupyter runs code in small cells and shows the output right under each one. That made it easy to test one step at a time and keep the real output next to every program.</details></li>
          <li>What is a virtual environment?
            <details><summary>Say this</summary> It is a separate space with its own Python packages for one project. If two projects need different versions of a library, they do not clash.</details></li>
          <li>What is a library, and which ones did you use?
            <details><summary>Say this</summary> A library is ready-made code we import instead of writing everything ourselves. I used NumPy for arrays and statistics, Pandas for CSV files and Matplotlib for charts.</details></li>
          <li>What does <code>import numpy as np</code> do?
            <details><summary>Say this</summary> It loads NumPy and gives it the short name np. After that I can write np.mean instead of numpy.mean every time.</details></li>
          <li>What is the difference between a list and a NumPy array?
            <details><summary>Say this</summary> A list can mix types, while an array holds one type and supports maths on every element at once. So [1, 2] + [3, 4] joins two lists, but adding two arrays gives [4, 6].</details></li>
          <li>How did you add the elements of two lists in your file?
            <details><summary>Say this</summary> I looped over the positions and added the items at the same index into a new list. The lists must be the same length, or the loop runs past the end of the shorter one.</details></li>
          <li>What is an error and what is an exception?
            <details><summary>Say this</summary> A syntax error stops the program before it runs, like a missing bracket. An exception happens while it runs, like dividing by zero or opening a file that is not there.</details></li>
          <li>What is the use of <code>input()</code> and <code>int()</code> together?
            <details><summary>Say this</summary> input() always returns text, even when the user types a number. int() converts that text to a whole number so I can do arithmetic with it.</details></li>
        </ol>
      </div>
      <div>
        <h3>Statistics, CSV files and charts</h3>
        <ol class="bx-qlist" start="9">
          <li>What is the difference between mean, median and mode?
            <details><summary>Say this</summary> The mean is the average, the median is the middle value after sorting and the mode is the most frequent value. For 4, 1, 9, 6, NumPy gives a median of 5.0 because the two middle values are 4 and 6.</details></li>
          <li>Why did you not use <code>np.mode</code>?
            <details><summary>Say this</summary> NumPy has no mode function, so that line would raise an error. I used the mode function from Python's statistics module instead.</details></li>
          <li>When is the median better than the mean?
            <details><summary>Say this</summary> When the data has an extreme value, because one very large number pulls the mean but not the median. For example, one very high salary in a small group makes the average misleading.</details></li>
          <li>What is a CSV file?
            <details><summary>Say this</summary> It is a plain text table where each row is a line and values are separated by commas. Pandas reads it into a DataFrame with read_csv.</details></li>
          <li>What does <code>df.head()</code> show, and how do you show ten rows?
            <details><summary>Say this</summary> head() shows the first five rows by default. I passed 10 inside the brackets to show ten.</details></li>
          <li>What is the difference between <code>info()</code> and <code>describe()</code>?
            <details><summary>Say this</summary> info() lists the columns, their data types and how many values are not missing. describe() gives numbers such as count, mean, minimum and maximum for the numeric columns.</details></li>
          <li>When would you use a scatter plot instead of a line chart?
            <details><summary>Say this</summary> A scatter plot shows separate points, so it suits checking whether two quantities are related. A line chart joins points in order, so it suits something that changes over time.</details></li>
          <li>Why did you add labels and a title to your chart?
            <details><summary>Say this</summary> Without them, the reader cannot tell what each axis measures. xlabel, ylabel and title make the chart readable on its own, which examiners look for.</details></li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="cv-nlp-viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Practical viva, part two</p>
      <h2>Oral questions for 417: images, Orange, NLP and model evaluation</h2>
      <p class="bx-lede">Questions 17 to 32. Computer Vision and NLP are in the theory paper as well as the practical, so these orals reuse theory ideas, but in the form of "show me" and "why".</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Images and computer vision</h3>
        <ol class="bx-qlist" start="17">
          <li>What is a pixel?
            <details><summary>Say this</summary> A pixel is the smallest dot of an image, stored as numbers. In a grayscale image each pixel holds one value from 0 for black to 255 for white.</details></li>
          <li>Why are pixel values between 0 and 255?
            <details><summary>Say this</summary> Each value is stored in one byte, which has 8 bits. Two to the power 8 is 256 possible values, numbered 0 to 255.</details></li>
          <li>What did the shape of your image tell you?
            <details><summary>Say this</summary> It gives height, width and the number of colour channels, in that order. A colour image has three numbers in its shape and a grayscale image has only two.</details></li>
          <li>How many values does a 50 by 40 RGB image store?
            <details><summary>Say this</summary> 50 times 40 times 3, which is 6,000 values. Each pixel stores a red, a green and a blue value.</details></li>
          <li>Why did the colours look wrong when you showed an OpenCV image with Matplotlib?
            <details><summary>Say this</summary> OpenCV reads colour images in BGR order, while Matplotlib expects RGB. Converting with cvtColor fixes the red and blue swap.</details></li>
          <li>What is the difference between image classification and object detection?
            <details><summary>Say this</summary> Classification gives one label to the whole image, like "cat". Detection finds each object and draws a box around it, so it can find three cats in one photo.</details></li>
          <li>How did Orange handle images in your practical?
            <details><summary>Say this</summary> I loaded a folder of images with the Import Images widget and passed them to Image Embedding. Embedding turns each image into a list of numbers, so a model can learn from it.</details></li>
          <li>What is Orange, and why use it?
            <details><summary>Say this</summary> Orange is a visual tool where you build a workflow by connecting widgets instead of typing code. It lets me focus on the data and the model, and see the result at each step.</details></li>
        </ol>
      </div>
      <div>
        <h3>NLP and evaluating a model</h3>
        <ol class="bx-qlist" start="25">
          <li>What is tokenisation?
            <details><summary>Say this</summary> It splits text into smaller pieces called tokens, usually words and punctuation marks. It is the first step before a computer can count or compare words.</details></li>
          <li>Why do we remove stopwords?
            <details><summary>Say this</summary> Words like "the" and "is" appear everywhere and add little meaning. Removing them leaves the words that tell documents apart.</details></li>
          <li>What does Bag of Words produce?
            <details><summary>Say this</summary> It makes a vocabulary of unique words and counts how often each appears in each document. The result is a table of numbers, one row per document.</details></li>
          <li>Which Orange widgets did you use for text?
            <details><summary>Say this</summary> Corpus to load the text, Preprocess Text to tokenise and clean it, then Bag of Words or Word Cloud. For opinions, the Sentiment Analysis widget gives each text a score showing how positive or negative it is.</details></li>
          <li>Why do we split data into training and testing sets?
            <details><summary>Say this</summary> The model learns from the training data and is checked on test data it has never seen. Testing on training data would hide whether it only memorised the answers.</details></li>
          <li>A model got 40 true positives, 10 false positives, 5 false negatives and 45 true negatives. What is its accuracy?
            <details><summary>Say this</summary> Correct predictions are 40 plus 45, which is 85 out of 100, so accuracy is 0.85. Precision would be 40 out of 50, which is 0.8.</details></li>
          <li>When is recall more important than precision?
            <details><summary>Say this</summary> When missing a real case is costly, like a disease or a fire alarm. Recall tells us how many real cases the model caught.</details></li>
          <li>What does the Confusion Matrix widget in Orange show?
            <details><summary>Say this</summary> It shows how many items of each actual class were predicted as each class. The diagonal holds the correct predictions and everything else is a mistake.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The metric numericals behind questions 29 to 31 are worked step by step on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals for Class 10 AI</a>, and the exam-day tasks these orals sit beside are on <a class="bx-link" href="/cbse-class-10-ai-practical-exam-questions">CBSE Class 10 AI practical exam questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="project-viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What is asked about the project?</p>
      <h2>Project viva questions for class 10 AI, stage by stage</h2>
      <p class="bx-lede">Questions 33 to 54 follow the AI project cycle, then ethics. Answers mention a sample project, a model that sorts water samples as safe or unsafe for SDG 6; swap in your own project's details.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Scoping, data and exploration</h3>
        <ol class="bx-qlist" start="33">
          <li>What problem does your project solve?
            <details><summary>Say this</summary> It predicts whether a water sample is safe to drink from simple measurements like pH and turbidity. Villages without a lab could check water faster.</details></li>
          <li>Which Sustainable Development Goal does it support, and how?
            <details><summary>Say this</summary> SDG 6, clean water and sanitation. Safe drinking water is its first target, and my model helps flag unsafe samples early.</details></li>
          <li>Fill the 4Ws for your project.
            <details><summary>Say this</summary> Who: families in areas without testing labs; What: they cannot tell if water is safe; Where: at home and at village wells. Why: early warnings prevent waterborne illness.</details></li>
          <li>What is your problem statement?
            <details><summary>Say this</summary> Village families have a problem: they cannot tell whether their well water is safe when they draw it every day. An ideal solution would warn them quickly, so they can boil or avoid unsafe water.</details></li>
          <li>Where did your data come from?
            <details><summary>Say this</summary> From an open water-quality dataset, and I wrote its source in my report. I checked that its columns matched the measurements I wanted to use.</details></li>
          <li>What are the features and the label in your data?
            <details><summary>Say this</summary> The features are the measurements, like pH, hardness and turbidity. The label is the answer the model must learn: safe or unsafe.</details></li>
          <li>Was any data missing, and what did you do?
            <details><summary>Say this</summary> Some rows had blank pH values. I removed those rows, and I noted how many, so the reader knows the data shrank.</details></li>
          <li>What did your exploration chart show?
            <details><summary>Say this</summary> The distribution chart showed most unsafe samples had a pH outside the normal range. That told me pH would be a useful feature before I built any model.</details></li>
          <li>Is your data balanced?
            <details><summary>Say this</summary> Not fully, there were more safe samples than unsafe ones. That is why I looked at recall for the unsafe class and not only at accuracy.</details></li>
          <li>Why did you not collect more data yourself?
            <details><summary>Say this</summary> Testing water needs kits and time that I did not have for hundreds of samples. An open dataset gave me enough rows, and I would add local samples next.</details></li>
          <li>Rule-based or learning-based: which did you use?
            <details><summary>Say this</summary> Learning-based, because the model found the pattern from labelled examples. A rule-based version would need me to write every threshold by hand.</details></li>
        </ol>
      </div>
      <div>
        <h3>Modelling, evaluation and ethics</h3>
        <ol class="bx-qlist" start="44">
          <li>Is your model supervised or unsupervised, and why?
            <details><summary>Say this</summary> Supervised, because every sample in my data already had the label safe or unsafe. The model learnt from those answers.</details></li>
          <li>Is it classification or regression?
            <details><summary>Say this</summary> Classification, because the output is a category, safe or unsafe. Predicting an exact pH value would have been regression.</details></li>
          <li>Which model did you use, and how did you choose it?
            <details><summary>Say this</summary> I tried two classifiers in Orange's Test and Score and kept the one with the higher recall on unsafe water. I chose it on the metric that matched my goal, not on accuracy alone.</details></li>
          <li>What was your train and test split?
            <details><summary>Say this</summary> I kept 80 percent of the rows for training and 20 percent for testing. The test rows were never shown to the model while it learnt.</details></li>
          <li>Your accuracy is 85 percent. Is that good enough?
            <details><summary>Say this</summary> It is good for a first model, but 15 in 100 predictions are still wrong. For drinking water, I care most about the unsafe samples it misses, so I look at recall.</details></li>
          <li>What mistakes does your model make?
            <details><summary>Say this</summary> It sometimes calls slightly cloudy but safe water unsafe, which is a false positive. That is the safer mistake, because a false negative could make someone ill.</details></li>
          <li>How would you improve your project?
            <details><summary>Say this</summary> I would add samples from local wells and more unsafe examples. Then I would retrain and check whether recall improves.</details></li>
          <li>Could your model be biased?
            <details><summary>Say this</summary> Yes, if most data came from one region, it may fail on water from somewhere else. Testing it on samples from other places would show that.</details></li>
          <li>Which ethical framework fits your project?
            <details><summary>Say this</summary> A utility-based view fits, because the goal is the most benefit for the most families. I also respect autonomy, since the tool advises and the family still decides.</details></li>
          <li>Who is responsible if the model is wrong?
            <details><summary>Say this</summary> The people who build and deploy it, which is why the report says it is an early warning, not a lab test. A real deployment would need checking by experts.</details></li>
          <li>What did you learn from this project?
            <details><summary>Say this</summary> I learnt that choosing the right metric matters more than a high accuracy number. I also learnt that cleaning data took longer than building the model.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">If you have not picked a project yet, fifteen goal-linked options with their AI domain are on <a class="bx-link" href="/cbse-class-10-ai-project-ideas">Class 10 AI project ideas</a>, and the ethics vocabulary for questions 51 and 52 is revised on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">project cycle and ethics</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="follow-ups">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What happens after the first answer?</p>
      <h2>Viva voce AI class 10: the follow-up chains examiners use</h2>
      <p class="bx-lede">Most viva marks are decided by the second or third question. Each chain starts from a common opener and shows where it usually goes. If you do not know, say so and reason aloud.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Opening question</th><th scope="col">Likely follow-up</th><th scope="col">Then</th></tr></thead>
        <tbody>
          <tr><td>Run this program for me.</td><td>Change the input. What will it print now?</td><td>Which line would you change to print only the even values?</td></tr>
          <tr><td>What is the mean of this column?</td><td>Why is the median different?</td><td>Which would you report for house prices, and why?</td></tr>
          <tr><td>What is the shape of this image?</td><td>How many pixels is that?</td><td>What changes in the shape after grayscale conversion?</td></tr>
          <tr><td>What does your Word Cloud show?</td><td>Why are "the" and "and" missing?</td><td>What would happen without preprocessing?</td></tr>
          <tr><td>What is your accuracy?</td><td>Show me the confusion matrix.</td><td>Which error matters more for your goal?</td></tr>
          <tr><td>Which SDG does this serve?</td><td>Who exactly benefits?</td><td>What could go wrong if people trust it too much?</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Slipped on a word? Correct yourself at once: "Sorry, I meant recall, not precision." Unsure what is being asked? Restate it: "Do you mean training or test accuracy?" Both moves show understanding.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is a viva rehearsed online?</p>
      <h2>How our live batch rehearses both vivas</h2>
      <p class="bx-lede">Reading answers silently does little for an oral, so the batch makes students say them aloud to a teacher who keeps asking.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Explain it back, every week</h3><p>Each Wednesday program ends with a two-minute oral on what each block does and what changes if one value changes.</p></div>
      <div class="bx-card"><h3>Project check-ins with questions</h3><p>Once a month, each student presents one project stage and takes three questions. Weak answers become homework.</p></div>
      <div class="bx-card"><h3>A mock viva with a stranger</h3><p>Before the school practical, an unfamiliar teacher runs both vivas on camera and names the answers to fix.</p></div>
    </div>
    <p class="bx-mt-40">Students can ask for any viva answer to be reworked in doubt time. The rest of the year's plan sits on <a class="bx-link" href="/cbse-class-10-ai-board-exam-preparation">CBSE Class 10 AI board exam preparation</a>, and the programs these questions point at are written out on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Rehearse the viva in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats use the same questions and the same teachers. In the batch, students hear classmates answer too, which builds vocabulary quickly. One to one gives a nervous speaker more turns and a quieter room. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'A short oral after every Wednesday program',
    'Monthly project check-in with questions',
    'Mock practical and project viva before the school dates'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Viva questions drawn from your child\'s own file and project',
    'Repeated rounds until every answer is two clear sentences',
    'Gentle pace for a student who freezes when speaking',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'Students who know the material but go blank when asked to speak often need only a handful of one to one rounds a few weeks before the school practical. Students still building their file or project benefit more from the batch, where the oral grows alongside the work. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI viva practice for CBSE schools in the Gulf and abroad',
  zonesLede: 'CBSE schools abroad hold the same Part C orals, set by the school on its own dates. Here is when the Monday and Wednesday class falls in your city this winter.',
  zonesAfter: 'If the batch hour is too late locally, one to one viva practice runs at a time you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the Class 10 AI viva',
  faqH2: 'What students and parents ask about the class 10 AI viva',
  faqs: [
    ['What questions are asked in the class 10 AI viva?', 'Examiners ask about your own work. The practical viva covers your file programs and the practical units: lists, NumPy statistics, Pandas, Matplotlib, image shape, Orange widgets, tokenisation and evaluation. The project viva covers your problem, its SDG, your data, model, metrics and next steps.'],
    ['How many marks is the viva in CBSE Class 10 AI?', 'Ten marks in total across two orals in Part C of CBSE 417 for 2026-27: 5 marks for the viva on the practical work and 5 marks for the viva on the project. Part C carries 50 marks overall, with the practical file 15, the practical exam 15 and the project 10.'],
    ['Does CBSE give a list of viva questions for AI 417?', 'No. CBSE sets the marks for each viva in the curriculum but does not publish a question list or a fixed set of oral questions. Examiners ask about the student\'s own file and project, which is why rehearsing explanations of your own work matters more than memorising a list.'],
    ['How should I answer AI practical viva questions?', 'In two sentences: state the fact, then give a reason or an example from your own file. For instance, "head() shows the first five rows. I passed 10 to show ten rows of my CSV." Short, specific answers invite easier follow-ups and show the work is yours.'],
    ['What are common project viva questions for class 10 AI?', 'Why this problem, which SDG it supports, where the data came from, what the features and label are, whether the model is supervised, what the accuracy is, which error matters more, what the model gets wrong, whether it could be biased and how you would improve it.'],
    ['Is the AI viva in English or Hindi?', 'The curriculum does not fix a viva language, so the school and the examiner decide. Most students answer in the language they were taught in. Technical terms such as precision, token, pixel and confusion matrix are usually kept in English either way, so learn those words exactly as they appear in your file.'],
    ['What if I forget an answer in the viva?', 'Say you are not sure, then reason aloud from what you do know, for example from a program in your file. Examiners usually rephrase the question or give a hint. A calm, honest attempt earns more than silence, or a confident wrong answer that the very next question exposes.'],
    ['Are viva voce questions asked on Orange in class 10 AI?', 'Often, when the student used Orange in the practical work or the project. Expect to name widgets such as File, Data Table, Scatter Plot, Test and Score, Confusion Matrix, Import Images, Image Embedding, Corpus, Preprocess Text and Word Cloud, and to say what each step did to the data.'],
    ['When is the class 10 AI viva conducted?', 'The school conducts both orals as part of Part C, on dates it sets, before the theory board paper. Ask your school for the exact date, and finish your file and project well before it so you have time to practise speaking about them.'],
    ['Is viva practice included in your Class 10 AI classes?', 'Yes. Oral explanation is built into the ordinary teaching: a short oral after every Wednesday program, monthly project check-ins and a mock viva before the school practical. It is all covered by the monthly fee shown on this page, for the batch or one to one, with no admission fee and a free first class.']
  ],
  startH2: 'Try a free mock viva with a teacher',
  startHtml: `        <p>In the free first class, your child explains one program and one idea for a project to a teacher, who asks the follow-up questions an examiner would. You will hear where the answers are clear and where they wobble, and the mentor tells you afterwards whether the batch or one to one would help more.</p>
        <p>Want to see the full marks structure first? Read <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the 417 exam date and paper pattern</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI viva questions'
};
