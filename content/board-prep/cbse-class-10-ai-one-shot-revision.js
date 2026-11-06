// CBSE Class 10 AI (417): one shot revision for 2026-27, a 90-minute read-through.
// Intent: "class 10 AI one shot", "AI class 10 complete one shot", "417 one shot part A
// and part B", "AI revision in one day".
// Distinct from cb03 (notes: one static sheet per unit) and cb33 (formula sheet): this
// page is a TIMED PATH. Seven stops in exam-weight order of reading, minutes fixed per
// stop (10, 12, 20, 18, 8, 14, 8 = 90), each with a checkpoint question answered in
// <details>, and one running example (a school canteen that wants to waste fewer
// lunches) carried through every unit so the units read as one story, not a list.
// Each stop links down to the deeper unit page. Marks are the 2026-27 curriculum
// figures in the design doc (Part A 10; U1 7, U2 11, U3 10, U5 4, U6 8; U4 and U7
// practical only). Objective counts quoted from the 2025-26 sample paper blueprint
// (the 2026-27 417 SQP is not out). TFIDF follows the CBSE handbook convention used
// on cb08: TF = count, TFIDF = TF x log10(N / documents containing the word).
// Every numerical recomputed with python3 on 2026-11-06 (scratch
// writers/cbse-class-10-ai-one-shot-revision/calc.py): 750 records split 80:20 =
// 600 / 150; TP 36, FP 9, FN 12, TN 93: n 150, accuracy 0.86, error 0.14, wrong 21,
// precision 0.80, recall 0.75, F1 0.7742 (0.77; plain average 0.775); perceptron
// 1 x 0.3 + 0 x 0.8 + 1 x 0.5 - 0.6 = 0.2 (0.8 without bias); 960 x 540 = 518,400
// pixels, x 3 = 1,555,200 values; 2^8 = 256; IDF log10(5/2) = 0.398 (TF 1 gives
// 0.398), log10(5/5) = 0, log10(5/1) = 0.699; tokens of "Pasta was cold, again!" = 6;
// data 40, 25, 30, 25, 50: mean 34, median 30, mode 25.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-one-shot-revision',
  code: 'cb13',
  board: 'cbse',
  themeColor: '#7A4A1E',
  dateModified: '2026-11-06',
  title: 'Class 10 AI One Shot Revision 2026-27 (417) in 90 Minutes',
  description: 'Class 10 AI one shot for CBSE 417, 2026-27: the whole syllabus as a 90-minute timed path, Part A and Part B, with checkpoints and worked numbers.',
  ogTitle: 'Class 10 AI One Shot: the Whole 417 Syllabus in 90 Minutes',
  ogDesc: 'A text one shot for CBSE Class 10 AI (417), 2026-27: seven timed stops from Part A to Advance Python, one running example through every unit, a checkpoint at each stop and a final ten-question check, with links to the deeper unit pages.',
  twDesc: 'The whole 417 syllabus as a 90-minute timed read, seven stops, a checkpoint at each, numbers worked.',
  headline: 'Class 10 AI One Shot for 2026-27: Part A and Part B in a 90-Minute Timed Path',
  courseName: 'CBSE Class 10 AI (417) Full Revision, Live Online',
  courseDesc: 'Live online full revision of CBSE Class 10 Artificial Intelligence (417), session 2026-27: the whole syllabus covered in timed rounds from Part A to the practical-only units, each round closed by a checkpoint test marked in class, numericals redone with fresh figures and doubts answered on the spot, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; One shot',
  navLinks: [['#path', 'The 90 minutes'], ['#stop3', 'Units 2 and 3'], ['#check', 'Final check'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'One shot revision']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; One shot revision 2026-27',
  h1: 'Class 10 AI one shot: the whole 417 syllabus in a single 90-minute sitting.',
  lede: 'This class 10 AI one shot takes you through the full CBSE 417 syllabus for 2026-27 in about 90 minutes of reading, in seven timed stops. One example runs through every unit: a school canteen that wants to stop throwing away lunches. Each stop ends with a checkpoint question; if you miss it, the link under it goes deeper. In our live batch the same path is run as a revision class, with a short test at each stop.',
  heroNote: 'Live online &middot; seven timed stops &middot; one example through every unit &middot; a checkpoint at each stop &middot; final ten-question check &middot; first class free',
  waText: 'Hello Modern Age Coders. I want a live one shot revision for CBSE Class 10 AI 417.',
  timetable: {
    label: 'How the one shot is run live',
    title: 'Full revision',
    right: 'CBSE 417',
    rows: [
      ['Monday, stops taught at speed', '9:00', 'PM IST'],
      ['Wednesday, checkpoint test', '9:00', 'PM IST'],
      ['Reading time for this page', '90', 'minutes'],
      ['Timed stops on the path', '7', 'stops']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Singapore and Malaysia:</b> late at night, so one to one at a local hour works better.',
    stamps: ['Part A and Part B', 'Session 2026-27']
  },
  picksH2: 'Courses behind this one shot revision',
  picksLede: 'The 417 course whose Class 10 batch runs full-syllabus revision rounds, the Python course for the Advance Python stop, and the Orange course for the Statistical Data stop.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: every unit taught in the term, then revised in fast rounds like this one, each closed by a marked test.' },
    { slug: 'python-complete-masterclass-teens', code: 'Stop 7 / Python', h3: 'Python for Teens', p: 'Lists, NumPy, Matplotlib and CSV reading: the programs the lab exam and viva ask about.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Stop 7 / Orange', h3: 'Visual ML with Orange', p: 'The no-code tool of the Statistical Data unit, used hands-on so the practical questions feel familiar.' }
  ],
  capsule: 'A class 10 AI one shot is a single read-through of the whole CBSE 417 syllabus. For 2026-27 it should cover Part A employability skills (10 theory marks) and the Part B units in proportion to their weight: Advanced Concepts of Modeling (11), Evaluating Models (10), Natural Language Processing (8), the AI Project Cycle and Ethical Frameworks (7) and Computer Vision (4), with Statistical Data and Advance Python kept short because they are practical only. This page does it in about 90 minutes. Modern Age Coders runs the same revision live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="path">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Before you start. What is the plan?</p>
      <h2>How do you revise class 10 AI in one shot?</h2>
      <p class="bx-lede">Read the seven stops below in order, keep to the minutes in the table, and answer each checkpoint before opening it. The heavy units get the most minutes, so the time you spend matches the marks at stake.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Stop</th><th scope="col">Clock</th><th scope="col">Unit</th><th scope="col">Theory marks</th><th scope="col">You should leave able to</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>0 to 10 min</td><td>Part A: the five employability skills units</td><td class="bx-num">10</td><td>Recall one list and one example per unit</td></tr>
          <tr><td>2</td><td>10 to 22 min</td><td>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks</td><td class="bx-num">7</td><td>Place any task in the right stage; sort a framework by type</td></tr>
          <tr><td>3</td><td>22 to 42 min</td><td>Unit 2: Advanced Concepts of Modeling in AI</td><td class="bx-num">11</td><td>Name the learning type of any scenario; do a perceptron sum</td></tr>
          <tr><td>4</td><td>42 to 60 min</td><td>Unit 3: Evaluating Models</td><td class="bx-num">10</td><td>Build a confusion matrix from words and get four metrics</td></tr>
          <tr><td>5</td><td>60 to 68 min</td><td>Unit 5: Computer Vision</td><td class="bx-num">4</td><td>Name the task; count pixels and stored values</td></tr>
          <tr><td>6</td><td>68 to 82 min</td><td>Unit 6: Natural Language Processing</td><td class="bx-num">8</td><td>Normalise a sentence, make a vector, find an IDF</td></tr>
          <tr><td>7</td><td>82 to 90 min</td><td>Units 4 and 7: Statistical Data and Advance Python</td><td>practical only</td><td>Explain mean, median, mode and the eight lab programs</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Three rules for the 90 minutes</h3>
        <ul class="bx-check">
          <li><b>Pen and rough paper ready.</b> Every number on this page is meant to be worked, not read.</li>
          <li><b>Checkpoint first, answer second.</b> A checkpoint you get wrong is the most useful thing on the page: write it on a list.</li>
          <li><b>No detours.</b> Do not open the deeper links during the run. Visit them afterwards, starting with the unit that cost you a checkpoint.</li>
        </ul>
      </div>
      <div>
        <h3>The example that runs through every stop</h3>
        <p>A school canteen cooks about 600 lunches a day and throws away too many. The students' AI club decides to help. You will scope that problem, collect its data, pick a model, test it, point a camera at the waste bin and read the feedback students write. Seeing one problem through every unit is what makes the syllabus hang together the night before the paper.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="stop1">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Stops 1 and 2. Minutes 0 to 22, 17 marks</p>
      <h2>417 one shot, Part A and Part B: employability skills and the project cycle</h2>
      <p class="bx-lede">Part A is ten marks of short recall, so it gets ten minutes and no more. Unit 1 then sets up the vocabulary the rest of Part B leans on.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Stop 1. Part A in ten minutes</h3>
        <p><b>Communication.</b> A message travels from sender to receiver and comes back as feedback. It can be spoken or written, carried by gestures and posture, or shown as a chart or sign. The seven Cs are the test of a good one: clear, concise, concrete, correct, coherent, complete and courteous.</p>
        <p><b>Self-management.</b> Knowing your strengths, handling stress, keeping yourself motivated and planning time. A goal is SMART when it is specific, measurable, achievable, relevant and time-bound.</p>
        <p><b>ICT.</b> Looking after a device, recognising a virus or a spam message, using antivirus and keeping passwords and personal data private.</p>
        <p><b>Entrepreneurship.</b> Someone who spots an unmet need, takes a risk on meeting it and runs the business. The canteen club selling a waste-tracking app to other schools would be doing exactly that.</p>
        <p><b>Green skills.</b> Development that meets today's needs without spoiling tomorrow's, the Sustainable Development Goals, and everyday choices such as saving water, energy and food.</p>
        <details><summary>Checkpoint 1: which SMART letter does "finish Unit 3 by Friday" satisfy most clearly?</summary> <b>T, time-bound.</b> It has a deadline. It is also specific, but the date is what makes it time-bound.</details>
        <p>Part A with short answers for each unit: <a class="bx-link" href="/cbse-class-10-ai-employability-skills-part-a">Part A employability skills</a>.</p>
      </div>
      <div>
        <h3>Stop 2. The project cycle and ethics, twelve minutes</h3>
        <p>The canteen problem goes round the cycle in order:</p>
        <ol class="bx-qlist">
          <li><b>Problem Scoping.</b> Fill the 4Ws canvas. Who is affected: cooks, students, the school paying for food. What is the problem: about one plate in six is thrown away. Where: the lunch hall, on weekdays. Why solve it: less wasted money and food.</li>
          <li><b>Data Acquisition.</b> Collect day-by-day records: menu, weather, attendance, exam days and plates wasted.</li>
          <li><b>Data Exploration.</b> Plot the records and look for patterns, such as more waste on rainy days.</li>
          <li><b>Modelling.</b> Choose and train a model that predicts tomorrow's waste.</li>
          <li><b>Evaluation.</b> Test it on days it has never seen. Some newer CBSE material names Deployment, putting the model to use, as a stage after this.</li>
        </ol>
        <p>The project sits in one of three domains: Statistical Data (tables of numbers, like these records), Computer Vision (images) or NLP (language). <b>Ethical frameworks</b> are the guide-rails for right and wrong choices with AI. Sector-based ones are written for one field, bioethics for healthcare being the classic case, with its four principles: respect autonomy, do no harm, maximise benefit, act justly. Value-based ones are rights-based, utility-based or virtue-based.</p>
        <details><summary>Checkpoint 2: the club chooses the menu change that cuts the most waste overall, even though a few students lose a favourite dish. Which approach is that?</summary> <b>Utility-based.</b> It weighs the total good against the harm. A rights-based approach would protect every student's choice first.</details>
        <p>The full unit, case study included: <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">project cycle and ethics</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="stop3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Stops 3 and 4. Minutes 22 to 60, 21 marks</p>
      <h2>AI class 10 complete one shot: modeling and evaluating models</h2>
      <p class="bx-lede">These two units carry more than half of the 40 Part B theory marks, so they get 38 of the 90 minutes. Slow down here.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Stop 3. Modeling, twenty minutes</h3>
        <p><b>AI, ML and DL nest inside each other.</b> AI is any machine behaviour that looks intelligent. Machine learning is the part of AI that improves from data. Deep learning is the part of ML that uses neural networks with many layers.</p>
        <p><b>Rule-based or learning-based.</b> "If it rains, cook 50 fewer plates" is a rule a person wrote, and it never changes on its own. A model that reads two years of records and works out the effect of rain for itself is learning-based, and it improves as new days are added.</p>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">The canteen asks</th><th scope="col">Learning type</th><th scope="col">Task</th></tr></thead>
            <tbody>
              <tr><td>How many plates will be wasted tomorrow?</td><td>Supervised</td><td>Regression (a number)</td></tr>
              <tr><td>Will the paneer run out before 1 PM: yes or no?</td><td>Supervised</td><td>Classification (a label)</td></tr>
              <tr><td>Which groups of students eat in similar ways? (no labels)</td><td>Unsupervised</td><td>Clustering</td></tr>
              <tr><td>Which dishes are usually taken together?</td><td>Unsupervised</td><td>Association</td></tr>
              <tr><td>A program that adjusts daily orders and is rewarded when waste falls</td><td>Reinforcement</td><td>Reward and penalty</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-mt-40"><b>Neural networks.</b> The input layer takes the features in, hidden layers do the processing, the output layer gives the answer. An ANN is the general network; a CNN is the one built for images. A single neuron, the perceptron, multiplies each input by its weight, adds them with the bias and fires if the total passes the threshold.</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Checkpoint 3</b><span>perceptron, threshold 0</span></figcaption>
  <pre>rainy = 1, exam day = 0, pizza on menu = 1
weights 0.3, 0.8, 0.5   bias -0.6
sum = 1 x 0.3 + 0 x 0.8 + 1 x 0.5 - 0.6 = ?</pre>
  <div class="bx-code-note"><details><summary>Answer</summary> <b>0.2</b>, above 0, so the neuron fires: "high waste day". Forgetting the bias gives 0.8; the decision is the same here, but the mark is not.</details></div>
</figure>
        <p class="bx-mt-40">Fifteen scenarios to sort and the written answers: <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">Unit 2 modeling questions</a>.</p>
      </div>
      <div>
        <h3>Stop 4. Evaluating models, eighteen minutes</h3>
        <p>The club has 750 days of lunch records. It keeps 20 per cent aside, trains on 600 and tests on 150 the model has never seen. Testing on the training days would flatter it, because a model can memorise data it has seen; that memorising is called overfitting.</p>
        <p>For a number prediction, error is the gap between actual and predicted. For a yes or no prediction, the four outcomes go into a confusion matrix. Here the classifier answers "will the main dish run out early?" for the 150 test days:</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The canteen classifier</b><span>run out = positive</span></figcaption>
  <pre>              Actually ran out   Did not
Predicted yes     TP = 36         FP = 9
Predicted no      FN = 12         TN = 93

Accuracy  = (36 + 93) / 150   = 0.86
Error     = 1 - 0.86          = 0.14   (21 wrong)
Precision = 36 / (36 + 9)     = 0.80
Recall    = 36 / (36 + 12)    = 0.75
F1        = 2 x 0.80 x 0.75 / 1.55 = 0.77</pre>
  <p class="bx-code-note">The plain average of 0.80 and 0.75 is 0.775. F1 sits below it, nearer the weaker of the two.</p>
</figure>
        <p class="bx-mt-40"><b>Which metric matters?</b> Ask which mistake hurts more. Here a false negative means hungry students with no main dish, so recall matters. For a spam filter, a false positive buries a real email, so precision matters. When both hurt, use F1. The ethics of evaluation asks whether the test data was fair to every group and whether the score was reported honestly.</p>
        <details><summary>Checkpoint 4: the cook says, "Of the days your model warned me, how many really ran out?" Which metric is that?</summary> <b>Precision</b>, 36 of 45 warnings, 0.80. "Of the days that really ran out, how many did you warn me about?" would be recall.</details>
        <p>Ten graded problems, including ones that run backwards from a metric: <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="stop5">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Stops 5 and 6. Minutes 60 to 82, 12 marks</p>
      <h2>Computer vision and NLP in the class 10 AI one shot</h2>
      <p class="bx-lede">The club now adds a camera above the waste bin and a box for written feedback. Vision gets eight minutes because it carries four theory marks; language gets fourteen for its eight.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Stop 5. Computer vision, eight minutes</h3>
        <p>Computer vision lets a machine take meaning from images and video. The tasks grow in detail:</p>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Bin camera wants to know</th><th scope="col">Task</th></tr></thead>
            <tbody>
              <tr><td>Is this plate rice or roti?</td><td>Classification</td></tr>
              <tr><td>What is on the plate, and where in the frame?</td><td>Classification and localisation</td></tr>
              <tr><td>Box every plate on the tray</td><td>Object detection</td></tr>
              <tr><td>Trace the exact outline of each leftover</td><td>Instance segmentation</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-mt-40">An image is a grid of pixels. The camera saves frames of 960 x 540, so each frame has 518,400 pixels. In grayscale each pixel holds one value; in colour it holds three, red, green and blue, so a colour frame stores 1,555,200 numbers. With 8 bits per value there are 2<sup>8</sup> = 256 levels, from 0 for black to 255 for full brightness.</p>
        <details><summary>Checkpoint 5: a grayscale frame of 960 x 540 is converted to colour. How many more numbers does it store?</summary> <b>1,036,800 more.</b> Colour stores 1,555,200 and grayscale 518,400; the colour frame holds three times as many.</details>
        <p>Pixel counts and the practical side of the unit: <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">Unit 5 computer vision questions</a>.</p>
      </div>
      <div>
        <h3>Stop 6. Natural Language Processing, fourteen minutes</h3>
        <p>NLP lets a machine work with human language: voice assistants, translation, captions, sentiment analysis, keyword extraction. Language is hard for machines because one sentence can be grammatical and still mean nothing, or mean two things.</p>
        <p><b>Stages:</b> lexical (the words), syntactic (the grammar), semantic (the meaning), then logical analysis of the whole text. <b>Chatbots</b> are script bots that follow fixed replies or smart bots that learn from data.</p>
        <p>A feedback slip reads <i>"Pasta was cold, again!"</i>. Text normalisation splits it into tokens (Pasta, was, cold, the comma, again, the exclamation mark: 6 tokens), drops stopwords such as "was" and the punctuation, lowers the case, and reduces words to a base form, by stemming (cut the ending) or lemmatisation (return a real dictionary word).</p>
        <p><b>Bag of Words</b> then lists every unique word of all the slips as a dictionary and turns each slip into a row of counts. <b>TFIDF</b> scores how special a word is to one slip: TF is its count in that slip, and TFIDF = TF x log<sub>10</sub>(total slips / slips containing the word).</p>
        <details><summary>Checkpoint 6: in 5 slips, "cold" appears once in a slip and in 2 slips overall. What is its TFIDF there, and what would it be if every slip said "cold"?</summary> <b>1 x log<sub>10</sub>(5/2) = 0.398</b>, and log<sub>10</sub>(5/5) = 0 if all five slips use it: a word found everywhere tells the slips apart not at all.</details>
        <p>A corpus taken to the last TFIDF cell: <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="check">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Stop 7 and the final check. Minutes 82 to 90</p>
      <h2>The practical units, then a final check on the whole one shot</h2>
      <p class="bx-lede">Statistical Data and Advance Python are not in the written paper. They earn their marks in the practical file, the lab exam and the viva, so the one shot gives them a quick look and moves on.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Stop 7. Two practical units, eight minutes</h3>
        <p><b>Statistical Data</b> is about building models without writing code (no-code tools such as Orange Data Mining) and the statistics underneath. Five days of wasted plates, 40, 25, 30, 25, 50, have a mean of 34, a median of 30 once sorted, and a mode of 25.</p>
        <p><b>Advance Python</b> covers Jupyter Notebook, virtual environments, installing packages and the Python basics. CBSE suggests eight programs for the file, from adding two lists to reading an image and finding its shape; examiners ask you to run one and explain it.</p>
        <p>Each program written out and explained: <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
      </div>
      <div>
        <h3>Final check: ten questions, five minutes</h3>
        <ol class="bx-qlist">
          <li>Which stage comes straight after Data Acquisition? <details><summary>Answer</summary> Data Exploration.</details></li>
          <li>Predicting a price in rupees: classification or regression? <details><summary>Answer</summary> Regression, because the output is a number.</details></li>
          <li>Grouping customers when no labels exist is called what? <details><summary>Answer</summary> Clustering, a kind of unsupervised learning.</details></li>
          <li>Which layer of a neural network does no processing? <details><summary>Answer</summary> The input layer; it only receives the data.</details></li>
          <li>Write the F1 formula. <details><summary>Answer</summary> 2 x precision x recall / (precision + recall).</details></li>
          <li>For a fraud alarm, which costs more: FP or FN? <details><summary>Answer</summary> FN, a missed fraud, so recall matters most.</details></li>
          <li>How many pixels in a 100 x 50 image? <details><summary>Answer</summary> 5,000; a colour version stores 15,000 values.</details></li>
          <li>Which gives a real word: stemming or lemmatisation? <details><summary>Answer</summary> Lemmatisation.</details></li>
          <li>Name the four principles of bioethics. <details><summary>Answer</summary> Respect for autonomy, do no harm, maximum benefit, justice.</details></li>
          <li>Is Advance Python in the theory paper? <details><summary>Answer</summary> No. It is assessed only in the practical.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Eight or more right means the one shot has done its job; now practise papers. Fewer than six means the units behind your misses need a proper revision round, and <a class="bx-link" href="/cbse-class-10-ai-revision-plan">the 30, 7 and 1 day revision plan</a> shows how to fit that in before the exam.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">When should you do it, and with whom?</p>
      <h2>AI revision in one day: when a one shot helps, and how the live class runs it</h2>
      <p class="bx-lede">A one shot is a review, not a first lesson. It works when the units were taught during the year and you need them all in your head at once, typically in the final weeks and once more the day before the paper.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Your situation</th><th scope="col">Use the one shot for</th><th scope="col">Then</th></tr></thead>
        <tbody>
          <tr><td>Units studied, exam three or four weeks away</td><td>Finding the weak units</td><td>A full revision round on each one you missed</td></tr>
          <tr><td>One week left</td><td>Day 1 of the week, to rank the units</td><td>Two timed papers, each corrected the same day</td></tr>
          <tr><td>The day before the paper</td><td>A calm read in the morning</td><td>Formulas and your error list in the evening, then sleep</td></tr>
          <tr><td>Units never studied</td><td>Not much: it is too fast</td><td>Learn the heavy units first: Modeling, then Evaluating Models</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Stops taught at speed</h3><p>From January the Monday class takes two or three stops of this path in one sitting, with the teacher working the numbers on screen and students answering aloud.</p></div>
      <div class="bx-card"><h3>Checkpoint tests on Wednesday</h3><p>The Wednesday class opens with a short written test on the stops just covered, marked against the value points, and every miss goes on the student's own error list.</p></div>
      <div class="bx-card"><h3>Doubts settled the same night</h3><p>A student who loses a checkpoint can ask why on the spot. The teacher reworks it with fresh numbers until the method holds, rather than leaving it for the next week.</p></div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Run the full revision in the batch, or one to one',
  chooseLede: 'The same path and the same teachers either way. The batch moves through every stop at a fixed weekly pace with classmates; one to one spends its hours on the stops your child keeps missing. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Two or three stops revised per class from January',
    'A marked checkpoint test every Wednesday',
    'Full timed mock papers between revision rounds'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'The path reordered around your child\'s weakest stops',
    'Numericals repeated with new figures until steady',
    'A one shot session in the last days before the paper',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A child who knows most units but blanks under a clock usually gains most from the batch rhythm of revise, test, correct. A child who missed whole units during the year needs one to one hours to learn them properly before any fast revision makes sense. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI one shot revision for CBSE students in the Gulf and abroad',
  zonesLede: 'A CBSE school in Sharjah or Doha sits the same 417 paper as one in Delhi, so the same seven stops apply. Here is the batch hour in local time this winter.',
  zonesAfter: 'If the evening hour clashes with school or travel, one to one runs at a local time you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the Class 10 AI one shot',
  faqH2: 'What students ask about a class 10 AI one shot',
  faqs: [
    ['What is a class 10 AI one shot?', 'It is a single sitting that revises the whole CBSE Class 10 AI (417) syllabus from start to end, instead of one unit at a time. This page does it as a text path of seven timed stops, about 90 minutes in all, covering Part A, the five theory units of Part B and the two practical-only units, with a checkpoint question at each stop.'],
    ['Can I complete class 10 AI in one day?', 'You can revise it in one day if you studied the units during the year: read the one shot in the morning, rework the numericals in the afternoon and write one timed paper in the evening. Learning it from nothing in one day is not realistic, because Units 2 and 3 alone carry 21 theory marks and need practice, not just reading.'],
    ['How long is the AI class 10 complete one shot?', 'About 90 minutes of focused reading, with a pen for the numbers. The minutes follow the marks: 20 for Advanced Concepts of Modeling, 18 for Evaluating Models, 14 for NLP, 12 for the project cycle unit, 10 for Part A, 8 for Computer Vision and 8 for the two practical units.'],
    ['Does the 417 one shot cover both Part A and Part B?', 'Yes. Part A, the five employability skills units, is worth 10 theory marks and takes the first ten minutes. Part B, the AI units worth 40 theory marks, takes the rest. Statistical Data and Advance Python are included briefly, because they are assessed only in the practical.'],
    ['Which units carry the most marks in class 10 AI?', 'Advanced Concepts of Modeling in AI carries 11 of the 40 Part B theory marks and Evaluating Models carries 10, so those two are more than half. Natural Language Processing has 8, the AI project cycle and ethics unit 7, and Computer Vision 4. Part A adds 10 marks across five units.'],
    ['Are numericals asked in class 10 AI?', 'Yes. Expect accuracy, error, precision, recall and F1 score from a confusion matrix, the perceptron weighted sum, pixel and colour-value counts, and Bag of Words or TFIDF calculations. In the latest sample paper the perceptron appears only as an objective question.'],
    ['Is a one shot enough to score full marks in class 10 AI?', 'On its own, no. A one shot tells you what you remember; marks come from writing answers to the board word limits and solving numericals quickly. Use the one shot to find weak units, then revise those and write timed papers, which is how our batch uses it.'],
    ['When should I do AI revision in one day before the board exam?', 'Twice is best: once three to four weeks before the paper to find your weak units, and once the day before, as a calm read in the morning. In between, work through timed papers and the units you missed. Do not leave the first run to the final evening, when there is no time left to fix what it shows.'],
    ['Is a video one shot better than a text one?', 'A video is good for a first explanation. For revision, text is faster: you can read at your own speed, skip what you know, stop at a number and work it yourself. If you prefer a teacher, our live classes run the same path with a test after each part.'],
    ['Do your classes include a full revision before the AI board exam?', 'Yes. From January the Monday and Wednesday 9:00 PM IST batch revises the whole syllabus in rounds, with a checkpoint test every Wednesday and timed mock papers in between. It is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.']
  ],
  startH2: 'Try two stops of the one shot free, with a teacher',
  startHtml: `        <p>In the free first class your child runs two stops of this path with a teacher, usually Modeling and Evaluating Models, then sits the checkpoint questions, marked on screen. Afterwards the mentor tells you which units look ready, which need a proper round of revision, and whether the batch or one to one would suit better.</p>
        <p>Want every formula on one page for the night before? Read <a class="bx-link" href="/cbse-class-10-ai-formula-sheet">the Class 10 AI formula sheet</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI one shot'
};
