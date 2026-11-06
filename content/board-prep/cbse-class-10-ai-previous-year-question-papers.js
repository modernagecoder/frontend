// CBSE Class 10 AI (417): previous year question papers, described and answered.
// Intent: "class 10 AI previous year question paper", "CBSE class 10 AI question
// paper 2026 with solutions", "417 PYQ 2025", "AI class 10 board paper 2024
// solution", "most repeated questions class 10 AI".
// Distinct from csq (solving the sample paper, mock ladder), ciq (question bank by
// shape) and cb01 (objective bank): this page is the year-by-year archive, each paper
// DESCRIBED in our own words (no PDF, no reproduced question text), a repeats table
// by 2026-27 unit, and ORIGINAL practice in the same shapes with worked answers.
// Sources read on 2026-11-06: CBSE's own marking scheme for the 2025 main exam
// (cbse.gov.in, Q.P. code 104, set 4); the 2026 main exam marking scheme (Q.P. code
// 104, set 4) as hosted by AglaSem, cross-checked line by line in the raw text; the
// 2025-26 sample paper marking scheme (cbseacademic.nic.in). Only ONE set per year
// was read, so the page says so. 2024 and earlier were NOT verified and the page says
// that plainly; they were set on the older syllabus.
// Assertion-reason: the 2025 main paper, the 2025-26 SQP and the 2026 main paper each
// carried assertion-reason items in Section A (read in all three), so this page states
// it for those papers only, not as a promise for 2027.
// Every numerical recomputed with python3 on 2026-11-06 (scratch calc/cb.py):
// crop-leaf case TP 120, FP 30, FN 40, TN 210: n 400, accuracy 0.825, precision 0.80,
// recall 0.75, F1 0.7742 (0.77; plain average 0.775), wrong 70; Section A item TP 150,
// TN 280 gives 430 correct of 500; precision 45 / 60 = 0.75; 1280 x 720 = 921,600
// pixels (x 3 = 2,764,800); BoW "Rain helps crops grow." / "Crops need rain and sun."
// gives dictionary rain, helps, crops, grow, need, and, sun with vectors
// [1,1,1,1,0,0,0] and [1,0,1,0,1,1,1]; perceptron 0.5 x 1 + 0.2 x 0 + 0.4 x 1 - 0.6 = 0.3.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-previous-year-question-papers',
  code: 'cb02',
  board: 'cbse',
  themeColor: '#2F5D50',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Previous Year Question Paper (417), Solved',
  description: 'Class 10 AI previous year question paper guide for CBSE 417: what the 2025 and 2026 board papers asked, the repeats by unit, and original practice solved.',
  ogTitle: 'Class 10 AI Previous Year Question Papers, Year by Year',
  ogDesc: 'What the CBSE 417 board papers of 2025 and 2026 actually asked, described section by section, which question shapes repeat in every paper, and original practice in those shapes with worked answers.',
  twDesc: 'The 2025 and 2026 CBSE AI 417 papers described, the repeats by unit, and original practice with full working.',
  headline: 'Class 10 AI Previous Year Question Papers: What 2025 and 2026 Asked, What Repeats, and How to Practise It',
  courseName: 'CBSE Class 10 AI (417) Previous Year Paper Practice, Live Online',
  courseDesc: 'Live online practice built on the CBSE Class 10 Artificial Intelligence (417) board papers of past years, session 2026-27: every repeating question shape rehearsed with fresh numbers, answers marked against the value points CBSE gives examiners, and full timed papers in the final term, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Past papers',
  navLinks: [['#years', 'Year by year'], ['#repeats', 'Repeats'], ['#practice', 'Practice'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Previous year papers']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Previous year papers, 2025 and 2026',
  h1: 'Class 10 AI previous year question papers, read closely and answered in fresh practice.',
  lede: 'This class 10 AI previous year question paper guide tells you what the CBSE 417 board papers of 2025 and 2026 actually asked, section by section, in our own words. We do not reproduce the papers. Instead we show which shapes come back every year, map them to the 2026-27 units, and give original questions in those shapes with the working an examiner wants to see. In our Monday and Wednesday batch these shapes are rehearsed until they feel routine.',
  heroNote: 'Live online &middot; 2025 and 2026 papers described &middot; repeats mapped by unit &middot; original practice solved &middot; full timed papers in term two &middot; first class free',
  waText: 'Hello Modern Age Coders. I want to practise CBSE Class 10 AI 417 previous year papers live.',
  timetable: {
    label: 'Past-paper practice in the week',
    title: 'Past papers',
    right: 'CBSE 417',
    rows: [
      ['Monday, one repeating shape', '9:00', 'PM IST'],
      ['Wednesday, timed half paper', '9:00', 'PM IST'],
      ['Board papers read for this page', '2', 'years'],
      ['Questions on each paper', '21', 'answer 15']
    ],
    zones: '<b>Dubai, Abu Dhabi and Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City and Manama:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>Kathmandu:</b> 9:15 PM. <b>Singapore:</b> 11:30 PM, so most families there choose one to one.',
    stamps: ['Theory paper 50', 'Two hours']
  },
  picksH2: 'Courses behind this past-paper practice',
  picksLede: 'The 417 course whose Class 10 batch works through these question shapes, the Python course for the practical half of the subject, and the Orange course for the no-code tools the newer papers name in their options.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: each unit taught, then tested in the exact shapes the board has used, with answers marked against the examiner value points.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical half / Python', h3: 'Python for Teens', p: 'The NumPy, Matplotlib and CSV programs that the practical file and the lab exam need, which no theory paper asks you to write.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code tools / Orange', h3: 'Visual ML with Orange', p: 'Hands-on with the no-code tool behind the penguin, coral and sentiment case studies, so a scenario question about them reads as familiar.' }
  ],
  capsule: 'For a class 10 AI previous year question paper, start with the CBSE 417 main papers of 2025 and 2026. Both had 21 questions, of which a student answers 15, in two hours for 50 marks: 24 objective marks in Section A and 26 written marks in Section B. Every paper we read had a four-mark confusion matrix case, a four-mark Bag of Words table, a stemming question, a chatbot type and assertion-reason items. The 2025 paper was set on the older syllabus. Modern Age Coders rehearses these shapes live on Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="years">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What did each year ask?</p>
      <h2>What did the CBSE Class 10 AI board papers ask in 2025 and 2026?</h2>
      <p class="bx-lede">Both papers used the same frame: 21 questions, 15 to answer, two hours, 50 marks. What changed between them was the syllabus underneath. Here is each paper described in our words, from one set per year that we read in full.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Paper</th><th scope="col">Syllabus it followed</th><th scope="col">What stood out</th><th scope="col">How we checked it</th></tr></thead>
        <tbody>
          <tr><td>2026 board exam (main, 27 February 2026)</td><td>The current units: project cycle and ethics, modeling, evaluating models, computer vision, NLP</td><td>A cyber-security case asking for a confusion matrix, one cell and precision; a Bag of Words table from two short documents; AI, ML and DL compared with a Venn diagram; two scenarios to match to an AI domain; stemming against lemmatisation on a plural noun; sector-based against value-based ethics</td><td>Marking scheme for set 4 of paper code 104, read line by line</td></tr>
          <tr><td>2025-26 sample paper</td><td>The current units</td><td>A biased admissions algorithm judged with bioethics principles; unsupervised learning with clustering and association; four scenarios to name by model type; a matrix built from a story, then accuracy and wrong predictions; a Bag of Words dictionary and vector with two short theory parts</td><td>CBSE's own sample paper marking scheme</td></tr>
          <tr><td>2025 board exam (main)</td><td>The older units, which still had Data Science and Advance Python in theory</td><td>A diagnostic-test case asking for true negatives, precision, recall and F1; a Bag of Words table; a neural network diagram to explain; the problem statement template; AI bias and AI access with examples; items on SQL, CSV files, IoT and data science in airlines</td><td>CBSE's own marking scheme, set 4 of paper code 104</td></tr>
          <tr><td>2024 and earlier</td><td>Older units again, with a different section design in some years</td><td>Not described here</td><td>Not verified by us, so we make no claims about them</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the frame looked like in both years</h3>
        <ul class="bx-check">
          <li><b>Section A, 24 marks.</b> Five questions of six one-mark parts each: any 4 of 6 from employability skills, then any 5 of 6 in each of the four AI questions.</li>
          <li><b>Section B, 26 marks.</b> Any 3 of 5 employability two-markers, any 4 of 6 AI two-markers, any 3 of 5 AI four-markers.</li>
          <li><b>Word limits printed on the paper:</b> 20 to 30 words for two marks, 50 to 80 for four.</li>
          <li><b>No negative marking</b> in Section A in either year.</li>
        </ul>
      </div>
      <div>
        <h3>Assertion-reason is already here</h3>
        <p>Each of the three papers above carried assertion-reason items inside Section A, alongside two-statement items where you judge Statement 1 and Statement 2 separately. So these formats have appeared in 417 papers, not just in IT 402. CBSE has not said how many a 2027 paper will carry, so treat them as one of several Section A shapes, not the main one. A full practice set is on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">assertion and reason questions for Class 10 AI</a>.</p>
        <p>The blueprint and the 2027 calendar are on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the exam date and paper pattern page</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="repeats">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What comes back every year?</p>
      <h2>Most repeated questions in class 10 AI, tagged by the 2026-27 unit</h2>
      <p class="bx-lede">A repeat here means the same skill was tested in the same shape, never the same wording. Each row was present in all three papers we read unless the cell says otherwise.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Repeating shape</th><th scope="col">Unit now</th><th scope="col">2025 board</th><th scope="col">2025-26 sample</th><th scope="col">2026 board</th></tr></thead>
        <tbody>
          <tr><td>Confusion matrix case: build or read the matrix, then a metric</td><td>3 Evaluating Models</td><td>4 marks</td><td>4 marks</td><td>4 marks</td></tr>
          <tr><td>Bag of Words: dictionary and document vectors from short sentences</td><td>6 NLP</td><td>4 marks</td><td>4 marks</td><td>4 marks</td></tr>
          <tr><td>Stemming against lemmatisation on one word</td><td>6 NLP</td><td>1 mark</td><td>1 mark</td><td>2 marks</td></tr>
          <tr><td>Script bot or smart bot</td><td>6 NLP</td><td>1 mark</td><td>1 mark</td><td>1 mark</td></tr>
          <tr><td>False positive or false negative named from a situation</td><td>3 Evaluating Models</td><td>1 and 2 marks</td><td>1 mark</td><td>1 mark</td></tr>
          <tr><td>Overfitting, or why test data must be unseen</td><td>3 Evaluating Models</td><td>1 mark</td><td>1 mark</td><td>1 and 2 marks</td></tr>
          <tr><td>Neural network layers, or CNN and ANN</td><td>2 Modeling</td><td>4 marks</td><td>2 marks</td><td>4 marks</td></tr>
          <tr><td>Learning types: supervised, unsupervised, clustering, association</td><td>2 Modeling</td><td>1 mark</td><td>4 marks</td><td>1 and 2 marks</td></tr>
          <tr><td>Computer vision basics: tasks, pixel values, resolution, RGB</td><td>5 Computer Vision</td><td>1 and 2 marks</td><td>1 and 2 marks</td><td>1 and 2 marks</td></tr>
          <tr><td>Ethics: bias, bioethics principles, framework types</td><td>1 Project cycle and ethics</td><td>4 marks</td><td>4 marks</td><td>1 and 2 marks</td></tr>
          <tr><td>Match a scenario to an AI domain or model</td><td>1 and 2</td><td>1 mark</td><td>4 marks</td><td>4 marks</td></tr>
          <tr><td>Part A: communication, self-motivation, entrepreneur tasks, sustainability</td><td>Part A</td><td>1 and 2 marks</td><td>1 and 2 marks</td><td>1 and 2 marks</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The two safe four-markers</h3><p>The matrix case and the Bag of Words table appeared as four-mark questions in every paper we read. Together they are 8 of the 12 long-answer marks a student needs, so they are worth practising until they take under eight minutes each.</p></div>
      <div class="bx-card"><h3>The rising unit</h3><p>Ethics moved from a single essay on bias to a mix: a value-based or sector-based item, an assertion on bioethics and a long case. Unit 1 now rewards knowing the four bioethics principles by name and applying them.</p></div>
      <div class="bx-card"><h3>The thin unit</h3><p>Computer Vision has only four theory marks, and it was asked as one-mark facts and a two-mark explanation. Pixel arithmetic and RGB storage cover nearly all of it.</p></div>
    </div>
    <p class="bx-mt-40">Fresh numbers for the matrix case are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals for Class 10 AI</a>, and longer corpora with TFIDF on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="practice">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Section A, in the board's shapes</p>
      <h2>CBSE class 10 AI question paper practice with solutions: Section A shapes</h2>
      <p class="bx-lede">Ten original one-mark items, one for each format the recent papers used: plain MCQ, a quick calculation, assertion-reason, two statements and one-word answers. Try each before opening the answer.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Items 1 to 5</h3>
        <ol class="bx-qlist">
          <li>A model is tested on 500 samples: TP 150, TN 280, FP 40, FN 30. How many predictions were correct?
            <br>(a) 180 <br>(b) 430 <br>(c) 320 <br>(d) 70
            <details><summary>Answer</summary> <b>(b)</b> Correct means TP + TN = 150 + 280. Option (d) is the number of wrong predictions, FP + FN.</details></li>
          <li>Out of 60 emails a filter marked as spam, 45 really were spam. Its precision is
            <br>(a) 0.45 <br>(b) 0.60 <br>(c) 0.75 <br>(d) 1.33
            <details><summary>Answer</summary> <b>(c)</b> Precision = TP / all predicted positive = 45 / 60. Recall cannot be found: we are not told how many spam emails were missed.</details></li>
          <li>Assertion (A): A rule-based chatbot can answer only the questions its makers wrote replies for. Reason (R): A rule-based system does not learn from new data on its own.
            <br>(a) Both true, R explains A <br>(b) Both true, R does not explain A <br>(c) A true, R false <br>(d) A false, R true
            <details><summary>Answer</summary> <b>(a)</b> It is limited because it cannot learn, so the reason is the cause of the claim.</details></li>
          <li>Statement 1: Lemmatisation always returns a real dictionary word. Statement 2: Stemming is faster because it only cuts off word endings.
            <br>(a) Both correct <br>(b) Both incorrect <br>(c) Only 1 correct <br>(d) Only 2 correct
            <details><summary>Answer</summary> <b>(a)</b> Judge each statement alone. They do not have to explain each other in this format.</details></li>
          <li>A screen is 1280 x 720 pixels. How many pixels does it show?
            <br>(a) 2,000 <br>(b) 92,160 <br>(c) 921,600 <br>(d) 2,764,800
            <details><summary>Answer</summary> <b>(c)</b> 1280 x 720 = 921,600. Option (d) multiplies by 3 again, which counts RGB values, not pixels.</details></li>
        </ol>
      </div>
      <div>
        <h3>Items 6 to 10</h3>
        <ol class="bx-qlist" start="6">
          <li>A model groups news articles into topics with no labels given. Name the learning type and the subcategory.
            <details><summary>Answer</summary> Unsupervised learning, clustering. Name both: the question asks for two things.</details></li>
          <li>A bank's model lets a fraudulent payment through as genuine. Which outcome is this?
            <details><summary>Answer</summary> False negative: reality yes (fraud), prediction no.</details></li>
          <li>Which value of the four bioethics principles is broken when an AI shares a patient's records without asking them?
            <details><summary>Answer</summary> Respect for autonomy: the patient's right to decide about their own data and care.</details></li>
          <li>Assertion (A): Accuracy alone can hide a weak model. Reason (R): When one class is rare, a model that always predicts the common class still scores high accuracy.
            <details><summary>Answer</summary> Both true, and R explains A. This is why the papers also ask for precision, recall or F1.</details></li>
          <li>Inputs 1, 0 and 1 reach a perceptron with weights 0.5, 0.2 and 0.4 and a bias of -0.6. What is the weighted sum plus bias?
            <details><summary>Answer</summary> 0.5 + 0 + 0.4 - 0.6 = 0.3. Write the three products first, then add the bias, so a slip is easy to find.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Thirty-six more objective items, grouped by unit, are on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ with answers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="long">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. The four-mark shapes, solved</p>
      <h2>CBSE class 10 AI question paper 2026 with solutions, the way the long answers repeat</h2>
      <p class="bx-lede">Two original four-mark questions in the two shapes that every paper we read included, answered the way the value points split the marks: half a mark for each formula, half for substitution, the rest for the result or the table.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Case: a crop leaf scanner</b><span>4 marks</span></figcaption>
  <pre>A phone app checks 400 leaf photos for
blight. It says "blight" for 150 photos;
120 of those really have it. Of the 250 it
calls healthy, 40 actually have blight.

(a) Draw the confusion matrix.      1
(b) Find precision and recall.      2
(c) Find the F1 score.              1

              Reality: Yes  Reality: No
Predicted Yes   TP = 120     FP = 30
Predicted No    FN = 40      TN = 210

Precision = 120 / (120 + 30) = 0.80
Recall    = 120 / (120 + 40) = 0.75
F1 = 2 x 0.80 x 0.75 / (0.80 + 0.75)
   = 1.20 / 1.55 = 0.77 (approx.)</pre>
  <p class="bx-code-note">Build TN last: 250 called healthy minus the 40 missed gives 210. The check is that all four cells add to 400. An F1 of 0.775 means the plain average was used, which loses the mark.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Bag of Words, all four steps</b><span>4 marks</span></figcaption>
  <pre>Document 1: Rain helps crops grow.
Document 2: Crops need rain and sun.

Step 1  Normalise: lower case, drop the
        full stops, split into tokens
  D1: [rain, helps, crops, grow]
  D2: [crops, need, rain, and, sun]

Step 2  Dictionary of unique words
  rain helps crops grow need and sun

Step 3  Vector for each document
        rain helps crops grow need and sun
  D1     1     1     1    1    0   0   0
  D2     1     0     1    0    1   1   1

Step 4  Stack the vectors into the
        document vector table above</pre>
  <p class="bx-code-note">Name every step: the schemes give half a mark for naming and half for doing. Keep the dictionary in the order words first appear, and count, do not tick, so a repeated word scores 2.</p>
</figure>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Other four-mark shapes from the recent papers</h3>
        <ol class="bx-qlist">
          <li>Compare AI, ML and DL with one example each and draw how they nest.
            <details><summary>Answer</summary> AI is any technique that lets a machine act intelligently (a chess program); ML is AI that learns patterns from data (a spam filter); DL is ML using many-layered neural networks (face unlock). Draw DL inside ML inside AI. One mark per term, one for the labelled diagram.</details></li>
          <li>Name the AI domain for each, with a reason: (i) an app that reads a shop sign aloud in another language; (ii) a camera that counts cars at a toll gate.
            <details><summary>Answer</summary> (i) Natural Language Processing, because it translates text, though reading the sign first uses vision, so mention both for safety; (ii) Computer Vision, because it detects and counts objects in images. One mark for each domain, one for each reason.</details></li>
        </ol>
      </div>
      <div>
        <h3>Where students lost these marks in our mocks</h3>
        <ul class="bx-check">
          <li><b>No table drawn.</b> Writing TP = 120 in a sentence instead of a labelled matrix.</li>
          <li><b>Reality and prediction swapped.</b> The 2025 scheme put prediction down the side; the 2025-26 sample paper put reality down the side. Label both axes and you are safe either way.</li>
          <li><b>Steps not named</b> in Bag of Words, so half the marks vanish.</li>
          <li><b>Over-long answers.</b> 50 to 80 words is the printed limit for four marks.</li>
        </ul>
        <p>How each mark is split is set out on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the 417 marking scheme, explained</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="older">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Are older papers still worth solving?</p>
      <h2>AI class 10 board paper 2024 solution and older papers: what still counts</h2>
      <p class="bx-lede">Partly. Papers up to 2025 were set on the older syllabus, so some of their questions test topics that are now practical only or gone from the theory paper. Use them, but filter first.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Topic in older papers</th><th scope="col">Status for the 2027 theory paper</th><th scope="col">What to do with it</th></tr></thead>
        <tbody>
          <tr><td>Confusion matrix, precision, recall, F1</td><td>Still theory, Unit 3</td><td>Solve every one you find</td></tr>
          <tr><td>Bag of Words, stop words, stemming, chatbots</td><td>Still theory, Unit 6</td><td>Solve every one</td></tr>
          <tr><td>Neural networks, supervised and unsupervised learning</td><td>Still theory, Unit 2</td><td>Solve, and add the rule-based against learning-based comparison</td></tr>
          <tr><td>Problem scoping, the 4Ws and the problem statement template</td><td>Still theory, Unit 1, as part of revisiting the project cycle</td><td>Solve, then add an ethics follow-up of your own</td></tr>
          <tr><td>Data Science applications, SQL, CSV files, data sources</td><td>Unit 4 Statistical Data, practical only</td><td>Skip for the written paper; know it for the viva</td></tr>
          <tr><td>Python syntax and output questions</td><td>Unit 7 Advance Python, practical only</td><td>Skip for theory; practise for the lab exam</td></tr>
          <tr><td>Multiple intelligences, IoT and general AI awareness</td><td>Not named in the 2026-27 Class 10 units</td><td>Skip</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>A note on finding papers</h3>
        <p>CBSE publishes its sample papers and marking schemes on cbseacademic.nic.in, and has posted main-exam marking schemes on cbse.gov.in. Those are the safest sources. Copies on other sites can carry typing errors in the answers, so check any number you copy by working it yourself.</p>
      </div>
      <div>
        <h3>What we could not verify</h3>
        <p>We read one set of each paper. Other sets of the same year use different questions in the same blueprint, so a topic we list for 2026 may have been asked differently in your region's set. We have not checked any 2024 or earlier paper ourselves, and the second board exam of 2026 is not covered here.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are past papers used in class?</p>
      <h2>How the live batch turns past papers into a routine</h2>
      <p class="bx-lede">Solving an old paper once tells a student their score. Rehearsing its shapes with new numbers every week is what makes the real paper feel familiar.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>One shape a Monday</h3><p>Each Monday class takes one repeating shape from the table above, works a fresh version on the shared screen, then gives students a second version to solve against the clock while the teacher watches the working.</p></div>
      <div class="bx-card"><h3>Marked like the examiner</h3><p>Answers are marked with the half-mark splits the schemes use, out loud, so students hear why a missing formula line costs half a mark even when the final number is right.</p></div>
      <div class="bx-card"><h3>Full papers in term two</h3><p>From December, Wednesday classes become timed half papers, and full two-hour papers follow before the board exam, with the choice of questions planned in advance.</p></div>
    </div>
    <p class="bx-mt-40">The mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">sample paper and mock tests</a>, and the longer case-style questions have their own set on <a class="bx-link" href="/cbse-class-10-ai-case-based-questions">case based questions for Class 10 AI</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise past-paper shapes in the batch, or one to one',
  chooseLede: 'The same repeating shapes and the same marking, in two formats. The batch keeps a steady weekly rhythm with classmates sitting the same timed questions; one to one spends the hour on whichever shapes your child still drops marks on. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One repeating board shape worked each Monday',
    'Timed half papers on Wednesdays from December',
    'Full two-hour papers before the board exam'
  ],
  choosePersonal: [
    'Days and time chosen by you, in your own time zone',
    'Only the shapes your child keeps losing marks on',
    'Matrix and Bag of Words cases repeated with new data',
    'Answers rewritten until they fit the word limits',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who already scores well but stalls on the four-mark cases usually needs only a few one to one sessions on those two shapes. A student starting the subject late gains more from the batch, where every unit is taught and then tested in the board format. Fees are shown in your own currency.',
  zonesH2: 'Previous year paper practice for CBSE students abroad',
  zonesLede: 'CBSE schools outside India sit the same 417 paper with the same frame, so a student in Sharjah or Kuwait faces exactly the shapes described above. These are the batch times in local clocks this winter.',
  zonesAfter: 'Where 9:00 PM IST falls too late, one to one runs at a local hour. More on studying from abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI past papers',
  faqH2: 'What students ask about class 10 AI previous year question papers',
  faqs: [
    ['Where can I get the class 10 AI previous year question paper?', 'CBSE posts sample papers and their marking schemes on cbseacademic.nic.in, and has published main-exam marking schemes on cbse.gov.in, which reproduce the questions. Those are the safest sources. This page describes what the 2025 and 2026 main papers asked and gives original practice in the same shapes, with worked answers.'],
    ['What was asked in the CBSE class 10 AI question paper 2026?', 'In the set we read, Section A mixed MCQs, assertion-reason and two-statement items across Part A and every theory unit. Section B asked, among others, the seven Cs of communication, ICT uses, sustainable development, ethics frameworks, RGB storage, train-test split, stemming, a comparison of AI, ML and DL, an AI domain question, a cyber-security confusion matrix case and a Bag of Words table.'],
    ['Is the 2025 AI paper still useful for 2027?', 'Partly. The 2025 paper followed the older syllabus, so its items on SQL, CSV files, data science applications, IoT and multiple intelligences are no longer theory topics. Its confusion matrix case, Bag of Words table, neural network question, chatbot item and ethics essay still match the 2026-27 units closely.'],
    ['What are the most repeated questions in class 10 AI?', 'In every paper we read: a four-mark confusion matrix case, a four-mark Bag of Words table, a stemming or lemmatisation item, a chatbot type, a false positive or false negative from a situation, and an overfitting or unseen-test-data item. Neural networks and ethics appeared in every paper, in different mark bands.'],
    ['Are assertion reason questions asked in the class 10 AI 417 paper?', 'Yes. The 2025 main paper, the 2025-26 sample paper and the 2026 main paper we read each had assertion-reason items in Section A. CBSE has not said how many a 2027 paper will include, so practise them as one Section A format among several.'],
    ['How many questions are in the class 10 AI board paper?', 'Twenty-one, of which you answer 15. Section A has five objective questions worth 24 marks, each with six one-mark parts and a choice. Section B has sixteen written questions worth 26 marks, of which you answer ten. The paper lasts two hours.'],
    ['Do previous year papers include Python questions?', 'The 2025 paper, set on the older syllabus, touched data handling topics. From 2025-26, Advance Python and Statistical Data are assessed only in the practical, so the theory paper does not ask you to write code. Practise programs for the practical file and lab exam instead.'],
    ['How many previous year papers should I solve for class 10 AI?', 'Solve the 2025-26 sample paper and the 2026 main paper fully under time, then use the 2025 paper for the topics that still count. After that, fresh questions in the same shapes help more than further old papers, because the newest syllabus has only one board paper so far.'],
    ['Is this page a copy of the CBSE question paper?', 'No. We describe each paper in our own words and write our own questions and answers. For the exact wording, read the official marking schemes. Our aim is to show the shapes that repeat and the working that earns each mark.'],
    ['Are past papers part of your classes or extra?', 'Part of ordinary teaching. Repeating shapes, timed half papers and full mocks are all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Try one past-paper shape free with a teacher',
  startHtml: `        <p>In the free first class your child solves one four-mark case in a shape the board has repeated, then watches it marked half-mark by half-mark against the scheme. Afterwards the mentor tells you plainly which shapes are already safe, which need work, and whether the batch or one to one fits better.</p>
        <p>Want the subject in one view first? Read <a class="bx-link" href="/cbse-class-10-ai-notes">Class 10 AI notes, unit wise</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI past papers'
};
