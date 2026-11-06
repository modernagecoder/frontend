// CBSE Class 10 AI (417), Unit 3 Evaluating Models: the CONCEPT page for the
// 10-mark unit. Intent: "evaluating models class 10 questions and answers",
// "unit 3 AI class 10", "train test split class 10", "accuracy and error class 10
// AI", "ethical concerns model evaluation", "evaluation class 10 notes".
// Distinct from cb05 (confusion-matrix-class-10-ai-numericals), which is numericals
// only: this page explains why models are evaluated, the train-test split, accuracy
// and error on a predicted-versus-actual table, how to choose precision or recall,
// the ethics of evaluation, and carries written Q&A by mark band. It has exactly one
// small classification-accuracy figure and sends every matrix numerical to cb05.
// Unit names and the ethics headings (bias, transparency, accountability) follow the
// 2025-26 curriculum and handbook as summarised by school notes checked 2026-11-06;
// no train-test ratio is claimed as CBSE's (80:20 and 70:30 are called common
// choices). Assertion-reason for 417 is not claimed.
// Every number was recomputed with python3 on 2026-11-06 (scratch cb0456/cb04.py;
// parcel 40 vs 36 minutes gives error 4, rate 0.1, accuracy 0.9):
// journey minutes 250/240, 180/198, 320/304, 150/150, 400/380 give errors 10, 18, 16, 0, 20,
// error rates 0.04, 0.10, 0.05, 0, 0.05, accuracies 0.96, 0.90, 0.95, 1.00, 0.95,
// mean 0.952; 1,200 x 0.8 = 960 and 240, x 0.7 = 840 and 360; 46/50 = 0.92,
// error rate 4/50 = 0.08; the slicing snippet was run and prints 8 2 with the lists
// shown.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-evaluating-models-questions',
  code: 'cb04',
  board: 'cbse',
  themeColor: '#5A4A2E',
  dateModified: '2026-11-06',
  title: 'Evaluating Models Class 10 Questions and Answers (417)',
  description: 'Evaluating models class 10 questions and answers for CBSE AI 417, 2026-27: train-test split, accuracy and error, precision or recall, and the ethics.',
  ogTitle: 'Evaluating Models Class 10: Questions and Answers for Unit 3',
  ogDesc: 'CBSE Class 10 AI Unit 3 explained and answered: why models are evaluated, the train-test split, accuracy and error from a worked table, choosing precision or recall, and bias, transparency and accountability.',
  twDesc: 'Unit 3 of CBSE AI 417 in plain words, with written answers by mark band and one worked accuracy and error table.',
  headline: 'Evaluating Models Class 10 Questions and Answers: Unit 3 of CBSE AI 417, Explained for 2026-27',
  courseName: 'CBSE Class 10 AI (417) Unit 3 Evaluating Models, Live Online',
  courseDesc: 'Live online teaching of Unit 3, Evaluating Models, for CBSE Class 10 Artificial Intelligence (417), session 2026-27: the train-test split, accuracy and error, confusion matrix metrics, choosing precision or recall, and the ethics of evaluation, practised as written answers marked against the scheme, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Unit 3',
  navLinks: [['#why', 'Why evaluate'], ['#split', 'Train-test split'], ['#error', 'Accuracy and error'], ['#qa', 'Q and A'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Evaluating models questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 3, Evaluating Models, 2026-27',
  h1: 'Evaluating models class 10 questions and answers, with the ideas behind every one.',
  lede: 'These evaluating models class 10 questions and answers cover Unit 3 of CBSE AI 417 for the 2026-27 session: why a model must be tested, how the train-test split works, what accuracy and error mean on a real table, when precision beats recall, and the ethical side of judging a model. The ideas come first, then written answers sized for one, two and four marks. Confusion matrix calculations have a page of their own, linked below.',
  heroNote: 'Live online &middot; Unit 3 explained and answered &middot; written answers marked against the scheme &middot; case studies timed &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Unit 3 Evaluating Models for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Unit 3 is taught',
    title: 'Evaluating Models',
    right: 'CBSE 417',
    rows: [
      ['Monday, concept and written answers', '9:00', 'PM IST'],
      ['Wednesday, metric and case drill', '9:00', 'PM IST'],
      ['Unit 3 in the theory paper', '10', 'marks'],
      ['Objective items in the 2025-26 sample', '6', 'of 24']
    ],
    zones: '<b>Dubai, Abu Dhabi and Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City and Manama:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>Singapore and Kuala Lumpur:</b> late, so one to one at a local hour.',
    stamps: ['Unit 3: 10 of 50', 'Second heaviest unit']
  },
  picksH2: 'Courses behind this Unit 3 teaching',
  picksLede: 'The 417 course whose Class 10 batch teaches Evaluating Models, the AI and ML course for students who want to see real models scored, and the data science course where splits and metrics are run in Python.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: Unit 3 taught as ideas first, then written answers and case studies marked in class against the value points.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Go further / AI and ML', h3: 'AI and ML for Teens', p: 'Train a small model, hold back a test set and watch its score change, so the reasons behind evaluation are seen, not memorised.' },
    { slug: 'data-science-course-for-teens-python-data', code: 'Hands-on / Data science', h3: 'Data Science for Teens', p: 'Python notebooks where the train-test split, accuracy and error are computed on real data, a step beyond the board unit.' }
  ],
  capsule: 'Evaluating Models is Unit 3 of CBSE Class 10 AI (417), worth 10 of the 50 theory marks in 2026-27. It asks why a model is tested on data it has never seen (the train-test split), how accuracy and error are worked out, how a confusion matrix gives accuracy, precision, recall and F1 score, which metric matters when false positives or false negatives cost more, and the ethical concerns of bias, transparency and accountability. Modern Age Coders teaches the unit live in a Monday and Wednesday 9:00 PM IST batch, with written answers marked in class, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="why">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Why evaluate at all?</p>
      <h2>Unit 3 AI class 10: why do we evaluate a model?</h2>
      <p class="bx-lede">We evaluate a model to find out how well it will predict on new data it has never seen, before anyone relies on it. A model that looks perfect on the data it learnt from can still fail badly in the real world.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The four reasons a written answer should give</h3>
        <ul class="bx-check">
          <li><b>To measure reliability.</b> A number such as accuracy tells us how often the model is right.</li>
          <li><b>To compare models.</b> Two models built for one problem can only be ranked on the same test.</li>
          <li><b>To find the kind of mistake.</b> Missing a sick patient and alarming a healthy one are different errors with different costs.</li>
          <li><b>To catch overfitting.</b> A model that memorised its training examples scores high on them and low on anything new.</li>
        </ul>
      </div>
      <div>
        <h3>Where evaluation sits in the project cycle</h3>
        <p>Evaluation is the last stage of the AI project cycle, after problem scoping, data acquisition, data exploration and modelling. Its result often sends the team back a step: a weak score can mean more data, cleaner data or a different model. In an answer, saying that evaluation can loop the project back earns credit that a bare definition misses.</p>
        <p>The cycle itself, with its ethical frameworks, is covered on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">the project cycle and ethics page</a>.</p>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Unit 3 topic</th><th scope="col">What you must be able to do</th><th scope="col">Shape it usually takes</th></tr></thead>
        <tbody>
          <tr><td>Importance of evaluation</td><td>Give reasons, link to overfitting</td><td>Objective item or two-mark answer</td></tr>
          <tr><td>Train-test split</td><td>Define it, say why the test set stays unseen</td><td>Two-mark answer</td></tr>
          <tr><td>Accuracy and error</td><td>Find error, error rate and accuracy from actual and predicted values</td><td>Short calculation</td></tr>
          <tr><td>Classification metrics</td><td>Build a confusion matrix, find accuracy, precision, recall, F1</td><td>Objective items and a case-based numerical</td></tr>
          <tr><td>Precision or recall</td><td>Pick the metric for a scenario and justify it</td><td>Two or four marks</td></tr>
          <tr class="bx-total"><td>Ethical concerns</td><td>Explain bias, transparency and accountability with an example</td><td>Two-mark answer</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="split">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What is the train-test split?</p>
      <h2>What is the train test split in class 10 AI?</h2>
      <p class="bx-lede">The train-test split divides a labelled dataset into two parts: a training set the model learns from, and a testing set kept aside to check the model afterwards. Because the test set is unseen, its score is a fair guess of real-world performance.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The idea in five lines of Python</b><span>run and checked</span></figcaption>
  <pre>data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
cut = int(len(data) * 0.8)
train, test = data[:cut], data[cut:]
print(len(train), len(test))
print(train, test)

<i># Output:</i>
<i># 8 2</i>
<i># [1, 2, 3, 4, 5, 6, 7, 8] [9, 10]</i></pre>
  <p class="bx-code-note">Not something the theory paper asks you to write. It only shows the split: eight items to learn from, two held back. Real projects shuffle the rows first so both parts look alike.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col"></th><th scope="col">Training set</th><th scope="col">Testing set</th></tr></thead>
          <tbody>
            <tr><td>Purpose</td><td>The model finds patterns in it</td><td>Checks the finished model</td></tr>
            <tr><td>Seen by the model while learning?</td><td>Yes</td><td>No, never</td></tr>
            <tr><td>Usual share</td><td>The larger part</td><td>The smaller part</td></tr>
            <tr><td>1,200 photos at 80:20</td><td class="bx-num">960</td><td class="bx-num">240</td></tr>
            <tr><td>1,200 photos at 70:30</td><td class="bx-num">840</td><td class="bx-num">360</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Why not test on training data?</h3><p>The model has already seen those answers. A high score there can come from memory, not understanding, which is exactly what overfitting means.</p></div>
      <div class="bx-card"><h3>What ratio should I write?</h3><p>The handbook explains the split without fixing a ratio. 80:20 and 70:30 are common in practice; name one as an example, not as a rule.</p></div>
      <div class="bx-card"><h3>When does it work well?</h3><p>When the dataset is large enough that both parts still represent every kind of example. A tiny dataset split in two leaves each part too thin to trust.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="error">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Accuracy and error</p>
      <h2>Accuracy and error class 10 AI: one worked table</h2>
      <p class="bx-lede">Error is the gap between what the model predicted and what actually happened. For a number prediction, error = |actual minus predicted|, error rate = error divided by actual, and accuracy = 1 minus error rate.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Worked example</b><span>predicting bus journey times</span></figcaption>
  <pre>A model predicts how long five long
bus journeys take, in minutes. Find
the error, error rate and accuracy of
each, then the overall accuracy.

error      = |actual - predicted|
error rate = error / actual
accuracy   = 1 - error rate

overall = (0.96 + 0.90 + 0.95
           + 1.00 + 0.95) / 5
        = 4.76 / 5 = 0.952, about 95%</pre>
  <p class="bx-code-note">Take the absolute value: a prediction 18 too high and one 18 too low are equally wrong. Divide by the actual value, never the predicted one.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Journey</th><th scope="col">Actual</th><th scope="col">Predicted</th><th scope="col">Error</th><th scope="col">Error rate</th><th scope="col">Accuracy</th></tr></thead>
          <tbody>
            <tr><td>1</td><td class="bx-num">250</td><td class="bx-num">240</td><td class="bx-num">10</td><td class="bx-num">0.04</td><td class="bx-num">0.96</td></tr>
            <tr><td>2</td><td class="bx-num">180</td><td class="bx-num">198</td><td class="bx-num">18</td><td class="bx-num">0.10</td><td class="bx-num">0.90</td></tr>
            <tr><td>3</td><td class="bx-num">320</td><td class="bx-num">304</td><td class="bx-num">16</td><td class="bx-num">0.05</td><td class="bx-num">0.95</td></tr>
            <tr><td>4</td><td class="bx-num">150</td><td class="bx-num">150</td><td class="bx-num">0</td><td class="bx-num">0.00</td><td class="bx-num">1.00</td></tr>
            <tr><td>5</td><td class="bx-num">400</td><td class="bx-num">380</td><td class="bx-num">20</td><td class="bx-num">0.05</td><td class="bx-num">0.95</td></tr>
            <tr class="bx-total"><td colspan="5">Overall accuracy (mean)</td><td class="bx-num">0.952</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>And for a yes or no model?</h3>
        <p>When the model sorts things into classes, accuracy is simply the share of correct predictions. If a leaf-disease model labels 50 test photos and gets 46 right, its accuracy is 46 / 50 = 0.92 and its error rate is 4 / 50 = 0.08. The two always add up to 1.</p>
      </div>
      <div>
        <h3>Where the matrix questions live</h3>
        <p>Splitting those 50 predictions into true and false positives and negatives is the confusion matrix, and that is where most Unit 3 calculation marks sit. Twelve graded problems with full working are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix class 10 AI numericals</a>, and every formula on one page is on <a class="bx-link" href="/cbse-class-10-ai-formula-sheet">the 417 formula sheet</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="choose">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Precision or recall?</p>
      <h2>Which metric is important, precision or recall?</h2>
      <p class="bx-lede">Choose precision when a false alarm (false positive) is the costly mistake, and recall when a miss (false negative) is the costly mistake. When both matter and one class is rare, report the F1 score, which balances the two.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The four outcomes, one sentence each</h3>
        <ul class="bx-check">
          <li><b>True positive:</b> predicted yes, and it really was yes.</li>
          <li><b>True negative:</b> predicted no, and it really was no.</li>
          <li><b>False positive:</b> predicted yes, but it was no. A false alarm.</li>
          <li><b>False negative:</b> predicted no, but it was yes. A miss.</li>
        </ul>
        <p>Precision asks: of everything the model flagged, how much was right? Recall asks: of everything that was really there, how much did the model catch?</p>
      </div>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Scenario</th><th scope="col">Costlier error</th><th scope="col">Metric</th></tr></thead>
          <tbody>
            <tr><td>Screening for a serious illness</td><td>Missing a patient</td><td>Recall</td></tr>
            <tr><td>Moving emails to the spam folder</td><td>Hiding a real email</td><td>Precision</td></tr>
            <tr><td>Flagging card fraud</td><td>Letting a fraud through</td><td>Recall</td></tr>
            <tr><td>Approving a rocket launch on a forecast of good weather</td><td>Launching in bad weather</td><td>Precision</td></tr>
            <tr><td>Spotting forest fires from satellite images</td><td>An unseen fire</td><td>Recall</td></tr>
            <tr><td>Recommending a video to a child</td><td>An unsuitable video shown</td><td>Precision</td></tr>
            <tr><td>Rare defects, both errors costly</td><td>Neither clearly</td><td>F1 score</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">A four-mark answer names the positive class, says which wrong prediction hurts more and why, then names the metric. Writing only "recall" scores one mark at most. Is accuracy alone enough? No: on a dataset where 99 of 100 cases are negative, a model that always says no is 99% accurate and useless. Worked numbers for that trap sit on the numericals page, and objective practice on the same ideas is in <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">the class 10 AI MCQ bank</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="ethics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. The ethics of evaluation</p>
      <h2>What are the ethical concerns in model evaluation?</h2>
      <p class="bx-lede">The ethical concerns are bias, transparency and accountability: the test must be fair to every group, the way a model was scored must be explained openly, and the people who chose the metric must answer for its effects. An honest accuracy figure is part of being transparent.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Bias</h3><p>If the test set holds mostly one kind of person, a high score says little about everyone else. A face-unlock model tested only on adults may fail for children and nobody notices. Fair evaluation tests every group the model will meet.</p></div>
      <div class="bx-card"><h3>Transparency</h3><p>Users should know which data the model was tested on, which metric was used and what the score leaves out. Quoting 98% accuracy on a lopsided dataset while hiding a poor recall is misleading, even when the number is true.</p></div>
      <div class="bx-card"><h3>Accountability</h3><p>Someone must take responsibility for the metric chosen and its consequences. If a loan model is tuned for precision and that turns away honest applicants, the team that chose it owns that result.</p></div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>A two-mark question to try</h3>
        <p><b>A school reports that its attendance face-recognition model is 97% accurate. Give two questions you would ask before trusting the figure.</b></p>
        <details><summary>Model answer</summary> (1) Was it tested on faces it had not been trained on, and did the test set include students of every age, skin tone and lighting condition (bias)? (2) What were its false positives and false negatives, since marking an absent student present matters more than one accuracy number shows (transparency)?</details>
      </div>
      <div>
        <h3>Where ethics links back</h3>
        <p>Unit 1 introduces the ethical frameworks; Unit 3 asks you to apply that thinking to the scoring step. A strong answer uses the word from the question (bias, transparency or accountability) and attaches one concrete example to it. More case-style practice like this is on <a class="bx-link" href="/cbse-class-10-ai-case-based-questions">the case-based questions page</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="qa">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. Written answers</p>
      <h2>Evaluating models class 10 questions and answers, by mark band</h2>
      <p class="bx-lede">Twelve original questions in the shapes the paper uses. Write your answer first, then open the model answer and check it against the points in bold, which is how an examiner reads it.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>One mark</h3>
        <ol class="bx-qlist">
          <li>Name the stage of the AI project cycle that checks how well a model performs.
            <details><summary>Answer</summary> <b>Evaluation</b>, the final stage.</details></li>
          <li>What is the part of a dataset kept aside to check a trained model called?
            <details><summary>Answer</summary> The <b>testing set</b> (test data).</details></li>
          <li>A model predicted "no" for a case that was actually "yes". Name this outcome.
            <details><summary>Answer</summary> A <b>false negative</b>.</details></li>
          <li>Which metric is the harmonic mean of precision and recall?
            <details><summary>Answer</summary> The <b>F1 score</b>.</details></li>
        </ol>
        <h3 class="bx-mt-40">Two marks</h3>
        <ol class="bx-qlist" start="5">
          <li>What is overfitting, and how does the train-test split expose it?
            <details><summary>Answer</summary> Overfitting is when a model <b>memorises its training data</b> and does poorly on new data. Its training score is high but its <b>score on the unseen test set drops</b>, and that gap reveals the problem.</details></li>
          <li>Differentiate between a false positive and a false negative, with one example each.
            <details><summary>Answer</summary> A false positive predicts yes when the truth is no, such as <b>a real email sent to spam</b>. A false negative predicts no when the truth is yes, such as <b>a sick patient told they are healthy</b>.</details></li>
          <li>Why is accuracy alone not a good measure for a rare event?
            <details><summary>Answer</summary> When almost every case is negative, a model that <b>always predicts negative</b> scores very high accuracy while <b>catching none of the positives</b>, so recall or F1 must be checked too.</details></li>
          <li>A model predicted that a parcel would take 36 minutes to arrive; it actually took 40 minutes. Find its error rate and accuracy.
            <details><summary>Answer</summary> Error = |40 minus 36| = <b>4 minutes</b>. Error rate = 4 / 40 = <b>0.1</b>. Accuracy = 1 minus 0.1 = <b>0.9, or 90%</b>.</details></li>
        </ol>
      </div>
      <div>
        <h3>Four marks</h3>
        <ol class="bx-qlist" start="9">
          <li>Explain the train-test split. Why is it needed, and what can go wrong if the dataset is small?
            <details><summary>Answer</summary> The labelled data is divided into a <b>training set</b> for learning and a <b>testing set</b> kept unseen (1). The test set gives an <b>honest estimate</b> of performance on new data and shows overfitting (1). Common splits are 80:20 or 70:30 (1). With a <b>small dataset</b>, each part may miss some kinds of example, so the score becomes unreliable (1).</details></li>
          <li>An app warns farmers of locust swarms. Which metric should its makers focus on, and why?
            <details><summary>Answer</summary> Positive = a swarm is coming (1). A <b>false negative</b>, no warning before a real swarm, can destroy a season's crop, while a false alarm costs only some precaution (1). So the costlier error is the miss (1), and the makers should focus on <b>recall</b> (1).</details></li>
          <li>Explain any two ethical concerns around model evaluation, with an example each.
            <details><summary>Answer</summary> <b>Bias</b>: if the test data under-represents a group, the score hides poor performance for them, as with a voice assistant tested only on one accent (2). <b>Transparency</b>: how the model was tested and which metric was used must be disclosed, for example reporting recall beside accuracy for a medical model (2). Accountability is an equally good second choice.</details></li>
          <li>Two models predict exam results. Model A has precision 0.9 and recall 0.5; Model B has precision 0.7 and recall 0.7. Which would you pick to find students needing extra help, and why?
            <details><summary>Answer</summary> Positive = needs help (1). Missing a struggling student (a false negative) costs more than giving extra help to one who did not need it (1). So recall matters more (1), and <b>Model B</b>, with the higher recall, is the better choice (1).</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      In class, each of these shapes is written to the clock, then marked on the shared screen point by point, so students see exactly which phrase earned the mark and which did not. Unit 2, the other heavy theory unit, is answered the same way on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">advanced concepts of modeling questions</a>,
      and the cross-unit list is on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Learn Unit 3 in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats teach Evaluating Models the same way: the idea, a worked example, then answers written and marked against the scheme. The batch keeps the whole syllabus moving on a fixed rhythm; one to one stays on Unit 3 until the metric questions stop costing marks. Monthly billing, no admission fee, stop at any month end.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Unit 3 ideas taught with worked tables on screen',
    'Precision or recall drills on fresh scenarios',
    'Unit 3 case questions inside every full mock'
  ],
  choosePersonal: [
    'Schedule set by the family, in your own time zone',
    'Extra time on whichever Unit 3 idea is shaky',
    'Your child explains each metric aloud until it sticks',
    'Written answers rewritten until they hit every point',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who follows the theory but freezes when asked to choose between precision and recall usually needs a few focused one to one sessions with many short scenarios. A student meeting Unit 3 for the first time does better in the batch, where Units 2 and 3 are taught in sequence and modelling makes sense before scoring. Fees appear in your own currency.',
  zonesH2: 'Unit 3 classes for CBSE students in the Gulf and abroad',
  zonesLede: 'A CBSE school in Sharjah, Jeddah or Doha sits the same 417 paper, with the same 10 marks for Evaluating Models. These are the local times of the batch this winter.',
  zonesAfter: 'If the batch hour is awkward where you live, one to one runs at a time you pick. Family-specific details are on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Unit 3',
  faqH2: 'What students ask about evaluating models in class 10 AI',
  faqs: [
    ['What is evaluation in class 10 AI?', 'Evaluation is the final stage of the AI project cycle, where a trained model is tested on data it has not seen to check how reliable its predictions are. It uses measures such as accuracy, error, precision, recall and F1 score, and its result can send a project back to collect more data or try another model.'],
    ['How many marks is Evaluating Models in CBSE Class 10 AI?', 'Unit 3, Evaluating Models, carries 10 of the 50 theory marks in the 417 curriculum for 2026-27, second only to Unit 2, Advanced Concepts of Modeling, at 11. In the 2025-26 sample paper it supplied six of the 24 objective items in the AI part, alongside written questions.'],
    ['What is train test split in class 10 AI?', 'It is dividing a labelled dataset into a training set, which the model learns from, and a testing set, which is held back and used only to check the finished model. Because the model never saw the test data, its score there is a fair estimate of how it will do on new data.'],
    ['Why should a model not be tested on its training data?', 'The model has already seen those examples and may simply have memorised them. Its score would look excellent while hiding overfitting, so it would tell you nothing about how the model handles new cases. Only unseen test data gives an honest measure.'],
    ['What is the difference between accuracy and error?', 'Error measures how far a prediction is from the actual value, while accuracy measures how close it is. For a number prediction, error rate is the error divided by the actual value, and accuracy is 1 minus the error rate, so the two always add up to 1.'],
    ['How do I know whether to use precision or recall?', 'Ask which wrong prediction hurts more. If a false alarm is costly, as when real emails go to spam, use precision. If a miss is costly, as when a disease or a fraud goes undetected, use recall. If both matter, especially with a rare class, use the F1 score.'],
    ['What are the ethical concerns around model evaluation?', 'Bias, transparency and accountability. The test data must represent every group the model will serve, the way a model was scored and its weak spots must be reported openly, and the people who chose the metric must take responsibility for its effects. Reporting accuracy honestly falls under transparency.'],
    ['Is accuracy enough to judge an AI model?', 'Not always. When one class is rare, a model that always predicts the common class can score very high accuracy while missing every case that matters. That is why Unit 3 also teaches precision, recall and the F1 score, and asks you to choose between them.'],
    ['Where can I find evaluation class 10 notes and practice numericals?', 'This page holds the concepts and written answers for Unit 3. Confusion matrix numericals with full working are on our separate numericals page, the formulas are collected on the 417 formula sheet, and objective items on the unit are in the class 10 AI MCQ bank.'],
    ['Is Unit 3 taught in your live classes, and what does it cost?', 'Yes. It is taught in the Monday and Wednesday 9:00 PM IST batch, with written answers marked in class, or in personalised one to one at a time you choose. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Try a free Unit 3 class with a teacher',
  startHtml: `        <p>In the free first class your child meets one Evaluating Models idea properly: a short accuracy and error table worked on screen, then a precision or recall scenario answered in writing and marked against the value points. Afterwards the mentor tells you which parts of Unit 3 look secure, which do not, and whether the batch or one to one is the better fit.</p>
        <p>Want to see the whole subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Unit 3 Evaluating Models'
};
