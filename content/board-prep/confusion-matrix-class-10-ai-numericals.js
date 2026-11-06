// CBSE Class 10 AI (417), Unit 3: confusion matrix NUMERICALS ONLY.
// Intent: "confusion matrix class 10 AI", "precision recall F1 score class 10",
// "accuracy formula class 10 AI", "confusion matrix numericals with solutions",
// "is accuracy enough". Distinct from cb04 (cbse-class-10-ai-evaluating-models-
// questions), the concept page for the unit: this page explains the matrix only as
// far as the arithmetic needs, then carries twelve original graded problems with full
// working in three levels (matrix given, matrix built from words, compare and work
// backwards) and the marking habits. It links back to cb04 for the ideas.
// Every number below was recomputed with python3 on 2026-11-06 (scratch cb0456/cb05.py),
// with F1 also checked as 2TP / (2TP + FP + FN):
//  P1  TP42 FP8 FN6 TN44:     acc 0.86, P 0.84, R 0.875, F1 1.47/1.715 = 0.857
//  P2  TP120 FP5 FN30 TN345:  acc 0.93, P 0.96, R 0.80, F1 1.536/1.76 = 0.873, wrong 35
//  P3  TP33 FP17 FN11 TN139:  acc 0.86, P 0.66, R 0.75, F1 0.99/1.41 = 0.702, avg 0.705
//  P4  TP27 FP9 FN3 TN161:    acc 0.94, P 0.75, R 0.90, F1 1.35/1.65 = 0.818
//  P5  TP15 FP3 FN5 TN37:     acc 52/60 = 0.867, P 0.833, R 0.75, F1 0.789
//  P6  TP30 FP40 FN10 TN920:  acc 0.95, P 0.429, R 0.75, F1 0.545
//  P7  TP20 FP12 FN5 TN363:   acc 0.9575, P 0.625, R 0.80, F1 1.0/1.425 = 0.702
//  P8  pass+ TP44 FP6 FN9 TN21: acc 65/80 = 0.8125, P 0.88, R 44/53 = 0.830, F1 0.854;
//      fail+ TP21 FP9 FN6 TN44: P 0.70, R 21/27 = 0.778, F1 0.737
//  P9  A: TP0 FN10 TN990: acc 0.99, R 0, P 0/0 undefined;
//      B: TP8 FP40 FN2 TN950: acc 0.958, P 0.167, R 0.80, F1 0.276 (avg 0.483)
//  P10 X TP90 FP10 FN30 TN370: acc 0.92, P 0.90, R 0.75, F1 0.818;
//      Y TP110 FP30 FN10 TN350: acc 0.92, P 0.786, R 0.917, F1 0.846
//  P11 TP40, P 0.8, R 0.5, N 200: FP 10, FN 40, TN 110, acc 0.75, F1 0.8/1.3 = 0.615
//  P12 TP18 FN12 N100 acc 0.80: TN 62, FP 8, P 18/26 = 0.692, R 0.60, F1 0.643
'use strict';

module.exports = {
  slug: 'confusion-matrix-class-10-ai-numericals',
  code: 'cb05',
  board: 'cbse',
  themeColor: '#3E4B2C',
  dateModified: '2026-11-06',
  title: 'Confusion Matrix Class 10 AI: 12 Numericals with Solutions',
  description: 'Confusion matrix class 10 AI numericals for CBSE 417, 2026-27: twelve graded problems on accuracy, precision, recall and F1 score, with full working.',
  ogTitle: 'Confusion Matrix Class 10 AI: Twelve Numericals, Fully Worked',
  ogDesc: 'Twelve original CBSE Class 10 AI confusion matrix numericals in three levels: matrix given, matrix built from a paragraph, and compare or work backwards. Accuracy, precision, recall and F1 score with every step shown.',
  twDesc: 'Twelve graded confusion matrix numericals for CBSE AI 417, from a given matrix to working backwards, with every step shown.',
  headline: 'Confusion Matrix Class 10 AI: Twelve Graded Numericals with Full Working for CBSE 417, 2026-27',
  courseName: 'CBSE Class 10 AI (417) Confusion Matrix Numericals, Live Online',
  courseDesc: 'Live online practice of confusion matrix numericals for CBSE Class 10 Artificial Intelligence (417), session 2026-27: building the matrix from a paragraph, accuracy, precision, recall and F1 score with full working, comparing models and working backwards from a given metric, marked step by step in class every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Matrix numericals',
  navLinks: [['#layout', 'Formulas'], ['#level1', 'Level 1'], ['#level2', 'Level 2'], ['#level3', 'Level 3'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Confusion matrix numericals']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 3 numericals, 2026-27',
  h1: 'Confusion matrix class 10 AI: twelve numericals, every step written out.',
  lede: 'This page is pure practice on the confusion matrix for class 10 AI, CBSE 417, 2026-27. Twelve original problems climb in three levels: first the matrix is handed to you, then you build it from a paragraph, then you compare two models or work backwards from a metric. Each one shows the matrix, the formula, the substitution and the answer. Cover the working, solve, then check.',
  heroNote: 'Live online &middot; 12 graded numericals below &middot; working marked step by step in class &middot; fresh numbers every week &middot; first class free',
  waText: 'Hello Modern Age Coders. I want practice with confusion matrix numericals for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When matrix numericals are practised',
    title: 'Matrix numericals',
    right: 'CBSE 417',
    rows: [
      ['Monday, one worked level', '9:00', 'PM IST'],
      ['Wednesday, timed numerical round', '9:00', 'PM IST'],
      ['Problems on this page', '12', 'worked'],
      ['Metrics in every problem', '4', 'formulas']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Singapore and Malaysia:</b> close to midnight, so one to one is arranged instead.',
    stamps: ['Unit 3 numericals', 'Working earns marks']
  },
  picksH2: 'Courses behind this numerical practice',
  picksLede: 'The 417 course whose Class 10 batch sets these problems each week, the Python course where students compute the same four metrics in code, and the Class 10 maths course for anyone whose fractions and decimals are slowing them down.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: Unit 3 numericals set with fresh figures each week and marked one step at a time on the shared screen.' },
    { slug: 'python-complete-masterclass-teens', code: 'Check in code / Python', h3: 'Python for Teens', p: 'Write a ten-line program that prints accuracy, precision, recall and F1 from four counts, then use it to check your hand working.' },
    { slug: 'cbse-class-10-maths-board-exam-prep-course', code: 'Arithmetic / Class 10 maths', h3: 'CBSE Class 10 Maths Prep', p: 'For students who lose matrix marks to division and rounding slips rather than to the AI idea itself.' }
  ],
  capsule: 'A confusion matrix in class 10 AI is a two by two table that sorts a model\'s predictions into true positives (TP), false positives (FP), false negatives (FN) and true negatives (TN). From it: accuracy = (TP + TN) / total, precision = TP / (TP + FP), recall = TP / (TP + FN), and F1 score = 2 x precision x recall / (precision + recall). Board numericals ask you to build the matrix from a short paragraph, then compute and interpret these. Modern Age Coders sets such numericals live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="layout">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Before the problems</p>
      <h2>Confusion matrix class 10 AI: the layout and the accuracy formula</h2>
      <p class="bx-lede">Draw the matrix with the real answer across the top and the prediction down the side, then fill four cells. Every formula below reads straight off those four numbers.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The layout used on this page</b><span>positive = the thing we look for</span></figcaption>
  <pre>                 Reality: Yes   Reality: No
Predicted: Yes       TP             FP
Predicted: No        FN             TN

TP + FP = everything the model flagged
TP + FN = everything that was really yes
TP + FP + FN + TN = total cases</pre>
  <p class="bx-code-note">Some papers and books swap rows and columns. The cells keep their meaning, so read the labels before you copy a number. Problem 4 practises exactly that.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Formula</th><th scope="col">Asks</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(TP + TN) / total</td><td>How often is it right overall?</td></tr>
            <tr><td>Precision</td><td>TP / (TP + FP)</td><td>When it says yes, how often is it right?</td></tr>
            <tr><td>Recall</td><td>TP / (TP + FN)</td><td>Of the real yeses, how many did it catch?</td></tr>
            <tr><td>F1 score</td><td>2PR / (P + R)</td><td>A single balance of precision and recall</td></tr>
            <tr><td>Error rate</td><td>(FP + FN) / total</td><td>How often is it wrong? (1 minus accuracy)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3 class="bx-mt-40">The method, every time</h3>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Name the positive class</h4><p>Write "positive = rain" or "positive = defective" at the top. Every later step depends on it.</p></li>
      <li class="bx-step"><h4>Fill the four cells and check the total</h4><p>Add the cells. If they do not reach the number of cases in the question, a cell is wrong.</p></li>
      <li class="bx-step"><h4>Write the formula, then substitute</h4><p>Formula line, numbers line, answer line. Marks are given for each, so never jump to the answer.</p></li>
      <li class="bx-step"><h4>Round at the end, to two decimal places</h4><p>Carry full values into F1. Rounding precision and recall first can shift the last digit.</p></li>
    </ol>
    <p class="bx-mt-40">Why a model is tested this way, and how to choose between the metrics in words, is explained on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models class 10 questions and answers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="level1">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Level 1: problems 1 to 4</p>
      <h2>Confusion matrix numericals with solutions: the matrix is given</h2>
      <p class="bx-lede">Warm-up level. The four counts are printed for you, so the only skills tested are the formulas and the arithmetic. Problem 4 hides one trap in the table's layout.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 1</b><span>mango ripeness sorter, 100 mangoes</span></figcaption>
  <pre>positive = ripe

              Ripe   Not ripe
Pred ripe      42        8
Pred not ripe   6       44

Find accuracy, precision, recall, F1.</pre>
  <p class="bx-code-note">Check: 42 + 8 + 6 + 44 = 100.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(42 + 44) / 100</td><td class="bx-num">0.86</td></tr>
            <tr><td>Precision</td><td>42 / (42 + 8) = 42 / 50</td><td class="bx-num">0.84</td></tr>
            <tr><td>Recall</td><td>42 / (42 + 6) = 42 / 48</td><td class="bx-num">0.875</td></tr>
            <tr><td>F1</td><td>2 x 0.84 x 0.875 / (0.84 + 0.875) = 1.47 / 1.715</td><td class="bx-num">0.86</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 2</b><span>spam filter, 500 emails</span></figcaption>
  <pre>positive = spam

TP = 120   FP = 5
FN = 30    TN = 345

Find all four metrics and the
number of emails misclassified.</pre>
  <p class="bx-code-note">Misclassified means FP + FN, both kinds of wrong answer.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(120 + 345) / 500 = 465 / 500</td><td class="bx-num">0.93</td></tr>
            <tr><td>Precision</td><td>120 / 125</td><td class="bx-num">0.96</td></tr>
            <tr><td>Recall</td><td>120 / 150</td><td class="bx-num">0.80</td></tr>
            <tr><td>F1</td><td>2 x 0.96 x 0.80 / 1.76 = 1.536 / 1.76</td><td class="bx-num">0.87</td></tr>
            <tr><td>Misclassified</td><td>5 + 30</td><td class="bx-num">35</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 3</b><span>plant disease app, 200 leaves</span></figcaption>
  <pre>positive = diseased

TP = 33    FP = 17
FN = 11    TN = 139

Find F1. A student writes
(0.66 + 0.75) / 2 = 0.705.
What went wrong?</pre>
  <p class="bx-code-note">The student averaged. F1 is the harmonic mean, which sits closer to the smaller of the two values.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Precision</td><td>33 / 50</td><td class="bx-num">0.66</td></tr>
            <tr><td>Recall</td><td>33 / 44</td><td class="bx-num">0.75</td></tr>
            <tr><td>F1</td><td>2 x 0.66 x 0.75 / 1.41 = 0.99 / 1.41</td><td class="bx-num">0.70</td></tr>
            <tr><td>Accuracy</td><td>(33 + 139) / 200</td><td class="bx-num">0.86</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 4</b><span>card fraud, 200 payments, rotated table</span></figcaption>
  <pre>positive = fraud
(rows are REALITY here)

               Pred fraud  Pred genuine
Actual fraud       27           3
Actual genuine      9         161

Find precision and recall.</pre>
  <p class="bx-code-note">Actual fraud, predicted genuine is a miss: FN = 3. Actual genuine, predicted fraud is a false alarm: FP = 9.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Precision</td><td>27 / (27 + 9) = 27 / 36</td><td class="bx-num">0.75</td></tr>
            <tr><td>Recall</td><td>27 / (27 + 3) = 27 / 30</td><td class="bx-num">0.90</td></tr>
            <tr><td>F1</td><td>1.35 / 1.65</td><td class="bx-num">0.82</td></tr>
            <tr><td>Accuracy</td><td>(27 + 161) / 200</td><td class="bx-num">0.94</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="level2">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Level 2: problems 5 to 8</p>
      <h2>Precision recall F1 score class 10: build the matrix from the words</h2>
      <p class="bx-lede">This is the shape most case-based questions take. The paragraph gives totals and parts; you split them into the four cells, check the sum, and only then calculate.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 5</b><span>rain forecast, 60 days</span></figcaption>
  <pre>A model predicted rain on 18 days;
it rained on 15 of them. On the 42
days it predicted dry, it rained on 5.

positive = rain
TP = 15        FP = 18 - 15 = 3
FN = 5         TN = 42 - 5 = 37
check: 15 + 3 + 5 + 37 = 60</pre>
  <p class="bx-code-note">"Predicted rain on 18" is the whole top row, TP + FP, not TP alone.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(15 + 37) / 60 = 52 / 60</td><td class="bx-num">0.87</td></tr>
            <tr><td>Precision</td><td>15 / 18</td><td class="bx-num">0.83</td></tr>
            <tr><td>Recall</td><td>15 / 20</td><td class="bx-num">0.75</td></tr>
            <tr><td>F1</td><td>2 x 0.833 x 0.75 / 1.583 = 1.25 / 1.583</td><td class="bx-num">0.79</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 6</b><span>health screening, 1,000 people</span></figcaption>
  <pre>40 people have the condition. The
model flags 70 people in all and
catches 30 of the 40.

positive = has the condition
TP = 30        FP = 70 - 30 = 40
FN = 40 - 30 = 10
TN = 1000 - 30 - 40 - 10 = 920</pre>
  <p class="bx-code-note">Find TN last, by subtracting from the total. It is the cell paragraphs almost never state.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(30 + 920) / 1000</td><td class="bx-num">0.95</td></tr>
            <tr><td>Precision</td><td>30 / 70</td><td class="bx-num">0.43</td></tr>
            <tr><td>Recall</td><td>30 / 40</td><td class="bx-num">0.75</td></tr>
            <tr><td>F1</td><td>2 x 0.429 x 0.75 / 1.179</td><td class="bx-num">0.55</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Problem 6 is worth a sentence in your answer: 95% accuracy sounds excellent, yet more than half of the people flagged are healthy and a quarter of the real cases are missed.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 7</b><span>factory inspection, 400 parts</span></figcaption>
  <pre>25 parts are defective. The camera
rejects 32 parts, and 20 of those
really are defective.

positive = defective
TP = 20        FP = 32 - 20 = 12
FN = 25 - 20 = 5
TN = 400 - 20 - 12 - 5 = 363</pre>
  <p class="bx-code-note">Two different totals: 32 is what the model rejected, 25 is what was truly faulty. Mixing them is the commonest slip here.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Working</th><th scope="col">Answer</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>(20 + 363) / 400 = 383 / 400</td><td class="bx-num">0.96</td></tr>
            <tr><td>Precision</td><td>20 / 32</td><td class="bx-num">0.625</td></tr>
            <tr><td>Recall</td><td>20 / 25</td><td class="bx-num">0.80</td></tr>
            <tr><td>F1</td><td>2 x 0.625 x 0.80 / 1.425 = 1.0 / 1.425</td><td class="bx-num">0.70</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 8</b><span>result predictor, 80 students</span></figcaption>
  <pre>The model predicts 50 students will
pass; 44 of them do. Of the 30 it
predicts will fail, 9 actually pass.

(a) positive = pass
TP 44  FP 6  FN 9  TN 21
(b) positive = fail
TP 21  FP 9  FN 6  TN 44</pre>
  <p class="bx-code-note">Same model, same 80 students. Switching the positive class swaps TP with TN and FP with FN, so precision and recall change; accuracy does not.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">(a) pass positive</th><th scope="col">(b) fail positive</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>65 / 80 = 0.81</td><td>65 / 80 = 0.81</td></tr>
            <tr><td>Precision</td><td>44 / 50 = 0.88</td><td>21 / 30 = 0.70</td></tr>
            <tr><td>Recall</td><td>44 / 53 = 0.83</td><td>21 / 27 = 0.78</td></tr>
            <tr><td>F1</td><td>0.85</td><td>0.74</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="level3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Level 3: problems 9 to 12</p>
      <h2>Is accuracy enough? Compare models and work backwards</h2>
      <p class="bx-lede">No, accuracy is not enough when one class is rare or when the two kinds of error cost different amounts. These four problems show why, then reverse the direction: a metric is given and a cell is missing.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 9</b><span>rare condition, 1,000 people, 10 positive</span></figcaption>
  <pre>Model A says "healthy" to everyone.
  TP 0   FP 0   FN 10   TN 990
Model B:
  TP 8   FP 40  FN 2    TN 950

Which model would a clinic want?</pre>
  <p class="bx-code-note">A has the higher accuracy and finds nobody. Precision for A is 0 / 0, which cannot be calculated: say so rather than writing 0 or 1.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Model A</th><th scope="col">Model B</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>990 / 1000 = 0.99</td><td>958 / 1000 = 0.958</td></tr>
            <tr><td>Precision</td><td>0 / 0, cannot be found</td><td>8 / 48 = 0.17</td></tr>
            <tr><td>Recall</td><td>0 / 10 = 0</td><td>8 / 10 = 0.80</td></tr>
            <tr><td>F1</td><td>0</td><td>0.28</td></tr>
            <tr class="bx-total"><td>Choose</td><td colspan="2">B: it catches 8 of 10 real cases. Missed cases matter most, so recall decides.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 10</b><span>two spam filters, 500 emails each</span></figcaption>
  <pre>Filter X: TP 90   FP 10  FN 30  TN 370
Filter Y: TP 110  FP 30  FN 10  TN 350

Both are 92% accurate. Which should a
school office use, where a lost parent
email is worse than a stray spam?</pre>
  <p class="bx-code-note">Equal accuracy, different mistakes. A lost real email is a false positive for a spam filter, so precision is the deciding metric.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Metric</th><th scope="col">Filter X</th><th scope="col">Filter Y</th></tr></thead>
          <tbody>
            <tr><td>Accuracy</td><td>460 / 500 = 0.92</td><td>460 / 500 = 0.92</td></tr>
            <tr><td>Precision</td><td>90 / 100 = 0.90</td><td>110 / 140 = 0.79</td></tr>
            <tr><td>Recall</td><td>90 / 120 = 0.75</td><td>110 / 120 = 0.92</td></tr>
            <tr><td>F1</td><td>0.82</td><td>0.85</td></tr>
            <tr class="bx-total"><td>Choose</td><td colspan="2">X, for its higher precision, even though Y has the higher F1.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 11</b><span>find the missing cells</span></figcaption>
  <pre>200 cases. TP = 40, precision = 0.8,
recall = 0.5. Find FP, FN, TN,
accuracy and F1.

40 / (40 + FP) = 0.8  so 40 + FP = 50
                      FP = 10
40 / (40 + FN) = 0.5  so 40 + FN = 80
                      FN = 40
TN = 200 - 40 - 10 - 40 = 110
accuracy = (40 + 110) / 200 = 0.75
F1 = 2 x 0.8 x 0.5 / 1.3 = 0.62</pre>
  <p class="bx-code-note">Divide TP by the metric to get the whole denominator, then subtract TP.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem 12</b><span>from accuracy back to precision</span></figcaption>
  <pre>100 cases. TP = 18, FN = 12 and
accuracy = 0.80. Find TN, FP,
precision, recall and F1.

(18 + TN) / 100 = 0.80
              TN = 80 - 18 = 62
FP = 100 - 18 - 12 - 62 = 8
precision = 18 / 26 = 0.69
recall    = 18 / 30 = 0.60
F1 = 2 x 0.692 x 0.6 / 1.292 = 0.64</pre>
  <p class="bx-code-note">Accuracy gives TP + TN together. Once TN is known, FP is whatever is left of the total.</p>
</figure>
    </div>
    <p class="bx-mt-40">More sets in this style, printable and with answer keys, are on <a class="bx-link" href="/cbse-class-10-ai-worksheets">the Class 10 AI worksheets page</a>, and the same cases arrive as four-mark questions on <a class="bx-link" href="/cbse-class-10-ai-case-based-questions">CBSE Class 10 AI case-based questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="marking">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">How the working is marked</p>
      <h2>Accuracy formula class 10 AI and the slips that cost marks</h2>
      <p class="bx-lede">Most marks in a matrix numerical are lost before any division happens: in reading the paragraph, in placing a number in the wrong cell, or in skipping the formula line. These are the slips we see most often when marking class work.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Slip</th><th scope="col">How it shows up</th><th scope="col">The fix</th></tr></thead>
        <tbody>
          <tr><td>Row total taken as TP</td><td>"Flagged 70" written as TP = 70</td><td>Ask: is this number all the yes predictions, or only the right ones?</td></tr>
          <tr><td>FP and FN swapped</td><td>Precision and recall come out reversed</td><td>Say each cell aloud: "predicted yes, really no" is FP</td></tr>
          <tr><td>No total check</td><td>A cell is off and every metric follows</td><td>Add the four cells before computing anything</td></tr>
          <tr><td>Averaged F1</td><td>(P + R) / 2 in place of 2PR / (P + R)</td><td>Check with 2TP / (2TP + FP + FN), which gives the same F1</td></tr>
          <tr><td>Early rounding</td><td>F1 off in the second decimal</td><td>Keep fractions or three decimals until the last line</td></tr>
          <tr><td>Answer with no line of working</td><td>Correct number, partial marks</td><td>Formula, substitution, answer: three lines every time</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>One level a week in class</h3><p>Monday's class works one level on the shared screen. Each student then solves a fresh problem of the same kind while the teacher watches their working appear.</p></div>
      <div class="bx-card"><h3>New numbers on Wednesday</h3><p>The Wednesday round repeats the week's problem shapes with different figures, timed, so a remembered answer is useless and only the method scores.</p></div>
      <div class="bx-card"><h3>Inside every mock</h3><p>From December each full mock carries a matrix case question, marked line by line, so students see which of their steps earned credit.</p></div>
    </div>
    <p class="bx-mt-40">
      All five formulas sit together on <a class="bx-link" href="/cbse-class-10-ai-formula-sheet">the CBSE Class 10 AI formula sheet</a>; one-mark matrix items are in <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">the class 10 AI MCQ bank</a>; and the mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise matrix numericals in the batch, or one to one',
  chooseLede: 'In both formats the teacher sees the working, not just the final number, and marks it step by step. The batch takes the whole class through the three levels in order; one to one stays on whichever level keeps going wrong. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One level of problems worked per week',
    'Timed rounds with fresh figures on Wednesdays',
    'A matrix case question in every mock from December'
  ],
  choosePersonal: [
    'Class times chosen by the family, in your own time zone',
    'Starts at whichever level your child finds hard',
    'Paragraph-to-matrix drills until the cells land right',
    'Every slip traced back to the exact line it began',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who understands precision and recall but still drops marks by placing numbers in the wrong cell usually fixes it within a few one to one sessions of paragraph drills. A student who has not met the matrix yet does better in the batch, where Unit 3 is taught from the start before the numericals begin. Fees appear in your own currency.',
  zonesH2: 'Confusion matrix practice for CBSE students in the Gulf and abroad',
  zonesLede: 'Students in Dubai, Muscat, Riyadh or Kuwait City write the same 417 paper, with the same Unit 3 numericals. Here is the batch hour in local time for the coming exam season.',
  zonesAfter: 'If the batch falls at a bad hour for your family, one to one runs whenever suits you. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about confusion matrix numericals',
  faqH2: 'Confusion matrix class 10 AI: what students ask',
  faqs: [
    ['What is a confusion matrix in class 10 AI?', 'It is a two by two table that compares a classification model\'s predictions with reality. Its four cells count true positives, false positives, false negatives and true negatives. Accuracy, precision, recall and F1 score are all calculated from those four counts, which is why Unit 3 numericals start by filling the matrix.'],
    ['What is the accuracy formula in class 10 AI?', 'Accuracy = (TP + TN) / (TP + TN + FP + FN), the correct predictions divided by all predictions. Multiply by 100 for a percentage. For example, 86 correct out of 100 gives 0.86, or 86%. Error rate is the remaining share: (FP + FN) divided by the total.'],
    ['How do you calculate precision and recall?', 'Precision = TP / (TP + FP): of everything the model labelled positive, the share that really was. Recall = TP / (TP + FN): of everything that really was positive, the share the model found. Both use TP on top; only the second number below the line differs.'],
    ['How do you find the F1 score in class 10 AI?', 'F1 = 2 x precision x recall / (precision + recall). Find precision and recall first, keep three decimals, then substitute. A quick check is 2TP / (2TP + FP + FN), which gives the same value. Never take the plain average of precision and recall: that is a different, wrong number.'],
    ['How do I make a confusion matrix from a paragraph?', 'Name the positive class first. Then find TP (predicted yes, really yes), use the predicted-yes total to get FP, the real-yes total to get FN, and subtract all three from the grand total for TN. Add the four cells to confirm they match the number of cases before calculating.'],
    ['Is accuracy enough to evaluate a model?', 'No. When one class is rare, a model that always predicts the common class can score 99% accuracy and still find nothing. Two models with the same accuracy can also make very different mistakes. Precision, recall and F1 show what accuracy hides, and Unit 3 numericals often test this.'],
    ['What is the difference between a false positive and a false negative?', 'A false positive is a yes prediction that turns out to be no, such as a healthy person flagged as ill. A false negative is a no prediction that turns out to be yes, such as an ill person told they are fine. Which one matters more decides whether precision or recall is the key metric.'],
    ['How many decimal places should I give?', 'Two decimal places is the usual safe choice unless the question asks otherwise, and a percentage is acceptable where it fits. Keep more decimals in your working and round only on the final line, because rounding precision and recall early can shift the F1 score.'],
    ['How many marks do confusion matrix questions carry?', 'Evaluating Models carries 10 theory marks in CBSE 417, and matrix numericals appear both as one-mark objective items and inside longer case-based questions. The exact split for the 2027 paper will be clear only when CBSE releases the 2026-27 sample paper, so practise both shapes.'],
    ['Do your classes include confusion matrix practice?', 'Yes. Matrix numericals are taught and practised in the Monday and Wednesday 9:00 PM IST batch and in personalised one to one, with working marked step by step. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Solve a matrix numerical live, free',
  startHtml: `        <p>In the free first class your child turns a short paragraph into a confusion matrix with the teacher watching, then finds the four metrics with every line of working on screen. The teacher points out where marks would be gained or lost, and afterwards tells you whether the batch or one to one would close the gap faster.</p>
        <p>Prefer the concepts before the numbers? Start with <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models questions and answers</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Confusion matrix numericals'
};
