// CBSE Class 10 AI (417): formula sheet for 2026-27, every formula and counting rule
// with one worked line each.
// Intent: "class 10 AI formulas", "accuracy precision recall F1 formula", "TFIDF formula
// class 10", "AI class 10 cheat sheet".
// Distinct from cb03 (notes, where formulas sit inside unit sheets), cb05 (confusion
// matrix numericals, ten graded problems) and cb08 (a corpus taken through TFIDF): this
// page is ONE printable list of every formula in 417, numbered, each with a single
// worked one-liner on fresh figures, plus which are theory and which practical only.
// Conventions: error for number predictions = |actual - predicted|, error rate =
// error / actual, accuracy = 1 - error rate (as on cb04); classification error rate =
// (FP + FN) / total. TFIDF follows the CBSE AI Facilitator Handbook for Class X as
// recorded on cb08: TF = count in the document, IDF = N / DF, TFIDF = TF x log10(IDF).
// Convolution output size n - k + 1 and multiply-and-sum are practical-side (cb09).
// Every number was recomputed with python3 (and numpy for the statistics) on
// 2026-11-06; the three programs shown on the page were run exactly as printed
// (scratch writers/cbse-class-10-ai-one-shot-revision/page_metrics.py, page_rest.py,
// page_stats.py, calc.py): TP 56, FP 14, FN 8, TN 122: total 200, accuracy 0.89,
// error rate 0.11 (22 wrong), precision 0.80, recall 0.875, F1 0.8358 = 0.84 (plain
// average 0.8375); actual 250, predicted 230: error 20, rate 0.08, accuracy 0.92; 1,200
// rows at 75:25 = 900 / 300; perceptron x 1,0,1,1 w 0.2,0.9,-0.4,0.6 b -0.3 = 0.1 ->
// 1; 1024 x 768 = 786,432 pixels, RGB 2,359,296 values; 2^8 = 256, max 255; 2^1 = 2;
// tokens of "Rain fell, and the match stopped." = 8; BoW [ball, bat, run, out] for
// "bat ball bat run" = [1, 2, 1, 0]; TFIDF N 6: 2 x log10(6/3) = 0.602, log10(6/1) =
// 0.778, log10(6/6) = 0, 4 x log10(6/2) = 1.908; data 14, 9, 11, 9, 17, 12: mean 12,
// median 11.5, mode 9; convolution 7 and 3 -> 5; patch [[1,2],[3,4]] with kernel
// [[0,1],[1,0]] = 5.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-formula-sheet',
  code: 'cb33',
  board: 'cbse',
  themeColor: '#334E7A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Formulas 2026-27 (417): One-Page Formula Sheet',
  description: 'Class 10 AI formulas for CBSE 417, 2026-27: accuracy, precision, recall, F1, error, TFIDF, pixels and the perceptron sum, each with a worked line.',
  ogTitle: 'Class 10 AI Formulas on One Page, Each Worked Once',
  ogDesc: 'Every formula and counting rule in CBSE Class 10 AI (417) for 2026-27, numbered on one printable sheet: confusion matrix metrics, error, train-test split, perceptron sum, pixels and colour values, tokens, Bag of Words and TFIDF with log base 10, plus the practical statistics, each with a worked one-liner.',
  twDesc: 'Every 417 formula on one printable sheet, each with a worked line checked in Python.',
  headline: 'Class 10 AI Formulas for 2026-27: Every 417 Formula and Rule on One Sheet, with a Worked Line Each',
  courseName: 'CBSE Class 10 AI (417) Numericals Practice, Live Online',
  courseDesc: 'Live online numericals practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: every formula in the syllabus drilled on fresh figures, from confusion matrix metrics and error to perceptron sums, pixel counts and TFIDF, with working marked on screen and timed numerical sets inside mock papers, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Formula sheet',
  navLinks: [['#sheet', 'The sheet'], ['#metrics', 'Metrics'], ['#tfidf', 'TFIDF'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Formula sheet']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Formula sheet 2026-27',
  h1: 'Class 10 AI formulas: every formula in CBSE 417 on one sheet, each worked once.',
  lede: 'These are all the class 10 AI formulas and counting rules in CBSE 417 for 2026-27, numbered on one sheet you can print. Each comes with a single worked line on fresh numbers, and every number was checked in Python. The sheet marks which formulas belong to the theory paper and which only to the practical. In our live batch each one is drilled on new figures until the working is automatic.',
  heroNote: 'Live online &middot; every 417 formula on one sheet &middot; a worked line for each &middot; checked in Python &middot; theory and practical marked &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live numericals practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When the formulas are drilled',
    title: 'Numericals practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, one formula family taught', '9:00', 'PM IST'],
      ['Wednesday, timed numerical set', '9:00', 'PM IST'],
      ['Formulas and rules on this sheet', '20', 'numbered'],
      ['Worked one-liners checked', '20', 'in Python']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Singapore and Malaysia:</b> close to midnight, so one to one at a local hour is the better fit.',
    stamps: ['Theory and practical marked', 'Session 2026-27']
  },
  picksH2: 'Courses behind this formula sheet',
  picksLede: 'The 417 course whose Class 10 batch drills these numericals, the Python course where the same formulas become short programs, and the Data Science course for students who want the metrics on real data.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: each formula taught from its idea, then practised as timed numericals marked in class.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical / Python', h3: 'Python for Teens', p: 'NumPy and plain Python versions of the formulas, the way the lab exam and viva ask about them.' },
    { slug: 'data-science-course-for-teens-python-data', code: 'Beyond the board / Data', h3: 'Data Science for Teens', p: 'Accuracy, precision and recall computed on real data sets in notebooks, a step past the board unit.' }
  ],
  capsule: 'The class 10 AI formulas for CBSE 417 in 2026-27 come from four units. Evaluating Models: accuracy = (TP + TN) / total, error rate = 1 minus accuracy, precision = TP / (TP + FP), recall = TP / (TP + FN), F1 = 2PR / (P + R). Modeling: perceptron sum = inputs times weights, added, plus bias. Computer Vision: pixels = width x height, values = pixels x 3 for RGB, 2 to the power 8 = 256 levels. NLP: TFIDF = TF x log10(N / documents containing the word). Modern Age Coders drills them live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="sheet">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">The sheet. Print this part</p>
      <h2>What formulas are in class 10 AI? The complete list</h2>
      <p class="bx-lede">Twenty formulas and rules cover every calculation in the 417 syllabus. Numbers 1 to 16 can appear in the theory paper; 17 to 20 belong to the practical units. The worked lines underneath use the same figures, so you can check each one.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">No.</th><th scope="col">Formula or rule</th><th scope="col">Unit</th><th scope="col">Worked one-liner</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Total = TP + FP + FN + TN</td><td>3</td><td>56 + 14 + 8 + 122 = 200</td></tr>
          <tr><td>2</td><td>Accuracy = (TP + TN) / total</td><td>3</td><td>(56 + 122) / 200 = 0.89</td></tr>
          <tr><td>3</td><td>Error rate = (FP + FN) / total = 1 - accuracy</td><td>3</td><td>22 / 200 = 0.11</td></tr>
          <tr><td>4</td><td>Precision = TP / (TP + FP)</td><td>3</td><td>56 / 70 = 0.80</td></tr>
          <tr><td>5</td><td>Recall = TP / (TP + FN)</td><td>3</td><td>56 / 64 = 0.875</td></tr>
          <tr><td>6</td><td>F1 = 2 x P x R / (P + R)</td><td>3</td><td>2 x 0.80 x 0.875 / 1.675 = 0.84</td></tr>
          <tr><td>7</td><td>Error = |actual - predicted|; error rate = error / actual; accuracy = 1 - error rate</td><td>3</td><td>|250 - 230| = 20; 20 / 250 = 0.08; 0.92</td></tr>
          <tr><td>8</td><td>Train-test split: rows x share</td><td>3</td><td>1,200 at 75:25 = 900 train, 300 test</td></tr>
          <tr><td>9</td><td>Perceptron sum = x<sub>1</sub>w<sub>1</sub> + x<sub>2</sub>w<sub>2</sub> + ... + bias; output 1 if it passes the threshold</td><td>2</td><td>0.2 + 0 - 0.4 + 0.6 - 0.3 = 0.1, so 1</td></tr>
          <tr><td>10</td><td>Pixels = width x height</td><td>5</td><td>1024 x 768 = 786,432</td></tr>
          <tr><td>11</td><td>Values stored = pixels x channels (1 grayscale, 3 RGB)</td><td>5</td><td>786,432 x 3 = 2,359,296</td></tr>
          <tr><td>12</td><td>Levels = 2<sup>bits</sup>; values run 0 to 2<sup>bits</sup> - 1</td><td>5</td><td>2<sup>8</sup> = 256, so 0 to 255</td></tr>
          <tr><td>13</td><td>Tokens = words + punctuation marks</td><td>6</td><td>"Rain fell, and the match stopped." = 8</td></tr>
          <tr><td>14</td><td>Bag of Words vector = count of each dictionary word, in dictionary order</td><td>6</td><td>[ball, bat, run, out] for "bat ball bat run" = [1, 2, 1, 0]</td></tr>
          <tr><td>15</td><td>TF = count of the word in that document; IDF = N / DF</td><td>6</td><td>N 6, word in 3 documents: IDF = 6 / 3 = 2</td></tr>
          <tr><td>16</td><td>TFIDF = TF x log<sub>10</sub>(N / DF)</td><td>6</td><td>2 x log<sub>10</sub> 2 = 0.602</td></tr>
          <tr><td>17</td><td>Mean = sum / count</td><td>4, practical</td><td>72 / 6 = 12</td></tr>
          <tr><td>18</td><td>Median = middle of the sorted list; even count: average of the two middle values</td><td>4, practical</td><td>9, 9, 11, 12, 14, 17: (11 + 12) / 2 = 11.5</td></tr>
          <tr><td>19</td><td>Mode = the most frequent value</td><td>4, practical</td><td>9 appears twice, so 9</td></tr>
          <tr><td>20</td><td>Convolution output size = n - k + 1</td><td>5, practical</td><td>7 x 7 image, 3 x 3 kernel: 5 x 5</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Where these formulas earn marks</h3>
        <p>Evaluating Models, worth 10 theory marks, holds six of the twenty and supplies most of the calculation items in a paper. In the latest sample paper the perceptron sum appears only as a one-mark objective item, and pixel or token counts usually do too. TFIDF can come as a short calculation inside an NLP answer.</p>
      </div>
      <div>
        <h3>Printing it</h3>
        <p>Print the table above on its own: choose Print in your browser, set the range to the first page, and save as PDF if you want a file. It is meant to be read the evening before the paper, after you have written each formula from memory first.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="metrics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Formulas 1 to 8. Evaluating Models</p>
      <h2>Accuracy, precision, recall and F1 formula for class 10 AI</h2>
      <p class="bx-lede">Accuracy is correct predictions over all predictions; precision is how many of the predicted positives were right; recall is how many of the real positives were caught; F1 combines precision and recall into one score. All four start from the confusion matrix, so build that first.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>One matrix, eight formulas</b><span>200 test cases</span></figcaption>
  <pre>A plant-disease app checks 200 leaf photos.
                Really diseased   Healthy
Predicted sick     TP = 56        FP = 14
Predicted fine     FN = 8         TN = 122

Accuracy   = 178 / 200         = 0.89
Error rate = 22 / 200          = 0.11
Precision  = 56 / 70           = 0.80
Recall     = 56 / 64           = 0.875
F1         = 1.4 / 1.675       = 0.84</pre>
  <p class="bx-code-note">The plain average of precision and recall is 0.8375. F1 is never above the average, and it falls further when the two are far apart.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The same, checked in Python</b><span>run as printed</span></figcaption>
  <pre>tp, fp, fn, tn = 56, 14, 8, 122
total = tp + fp + fn + tn
p = tp / (tp + fp)
r = tp / (tp + fn)
print(total, (tp + tn) / total, (fp + fn) / total)
print(p, r, round(2 * p * r / (p + r), 2))

<i># output</i>
200 0.89 0.11
0.8 0.875 0.84</pre>
  <p class="bx-code-note">Writing the formulas as code is a good self-test: if the program needs a number you cannot find in the matrix, you have the formula wrong.</p>
</figure>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Error for a number prediction (formula 7)</h3>
        <p>When a model predicts a number, not a yes or no, there is no matrix. Error is the gap, ignoring the sign. A bus app predicts a 230-second wait; the bus takes 250. Error = 20 seconds, error rate = 20 / 250 = 0.08, and accuracy for that prediction = 1 - 0.08 = 0.92.</p>
        <h3 class="bx-mt-40">Train-test split (formula 8)</h3>
        <p>Multiply the rows by each share. 1,200 rows split 75:25 gives 900 to train on and 300 to test on. The test rows must be ones the model never saw in training.</p>
      </div>
      <div>
        <h3>Which metric the question wants</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">The costly mistake</th><th scope="col">Cell</th><th scope="col">Use</th></tr></thead>
            <tbody>
              <tr><td>Missing a real case (disease, fire, fraud)</td><td>FN</td><td>Recall</td></tr>
              <tr><td>A false alarm (good mail sent to spam)</td><td>FP</td><td>Precision</td></tr>
              <tr><td>Both matter, or classes are uneven</td><td>FP and FN</td><td>F1</td></tr>
              <tr><td>Both classes common and equal in cost</td><td>All four</td><td>Accuracy</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">Ten graded matrix problems are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>, and the written answers for the rest of the unit on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="tfidf">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Formulas 13 to 16. Natural Language Processing</p>
      <h2>TFIDF formula for class 10, with tokens and Bag of Words</h2>
      <p class="bx-lede">TFIDF = TF x log<sub>10</sub>(N / DF), where TF is how often the word appears in this document, N is the number of documents and DF is how many of them contain the word. It is high for a word common in one document and rare in the rest.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The four NLP rules in order</h3>
        <ol class="bx-qlist" start="13">
          <li><b>Tokens.</b> Split into words and keep each punctuation mark as its own token. "Rain fell, and the match stopped." has six words, a comma and a full stop: 8 tokens.</li>
          <li><b>Bag of Words.</b> After normalising, list each unique word once as the dictionary, then count. Dictionary [ball, bat, run, out]; "bat ball bat run" becomes [1, 2, 1, 0]. Order follows the dictionary, not the sentence.</li>
          <li><b>TF and IDF.</b> TF is the raw count from the vector. The CBSE handbook writes IDF as the ratio N / DF, and takes its logarithm in the next step.</li>
          <li><b>TFIDF.</b> Multiply TF by log<sub>10</sub> of that ratio. Base 10, not the natural log: a calculator's ln key gives different numbers that will not match the marking scheme.</li>
        </ol>
      </div>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">N = 6 documents</th><th scope="col">TF</th><th scope="col">DF</th><th scope="col">TFIDF</th></tr></thead>
          <tbody>
            <tr><td>Word in half the documents</td><td class="bx-num">2</td><td class="bx-num">3</td><td>2 x log<sub>10</sub>(6/3) = 0.602</td></tr>
            <tr><td>Word in only this document</td><td class="bx-num">1</td><td class="bx-num">1</td><td>log<sub>10</sub>(6/1) = 0.778</td></tr>
            <tr><td>Word repeated, in two documents</td><td class="bx-num">4</td><td class="bx-num">2</td><td>4 x log<sub>10</sub>(6/2) = 1.908</td></tr>
            <tr><td>Word in every document</td><td>any</td><td class="bx-num">6</td><td>log<sub>10</sub>(6/6) = 0</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">A word that appears in every document scores 0 however often it occurs, which is why stopwords such as "the" and "is" end up worthless for telling documents apart. The whole pipeline on a three-document corpus, cell by cell, is on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>; the rest of the unit is on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">NLP questions and answers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="pixels">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Formulas 9 to 12. Modeling and Computer Vision</p>
      <h2>Pixel, colour value and perceptron formulas</h2>
      <p class="bx-lede">The number of pixels is width times height; the number of values stored is pixels times channels; the perceptron's sum is each input times its weight, added, plus the bias. These are short one-mark calculations, so the only real risk is a slip.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Formula 9, perceptron</b><span>threshold 0</span></figcaption>
  <pre>inputs   1     0     1     1
weights  0.2   0.9   -0.4  0.6
bias     -0.3

sum = 0.2 + 0 - 0.4 + 0.6 - 0.3 = 0.1
0.1 > 0, so output = 1</pre>
  <p class="bx-code-note">An input of 0 cancels its weight, however large: the 0.9 adds nothing. A negative weight subtracts. Forgetting the bias here gives 0.4.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Formulas 9 to 16, checked</b><span>run as printed</span></figcaption>
  <pre>import math
x = [1, 0, 1, 1]
w = [0.2, 0.9, -0.4, 0.6]
s = sum(a * b for a, b in zip(x, w)) - 0.3
print(round(s, 2), 1 if s > 0 else 0)
print(1024 * 768, 1024 * 768 * 3, 2 ** 8)
print(round(2 * math.log10(6 / 3), 3), round(math.log10(6 / 1), 3), math.log10(6 / 6))

<i># output</i>
0.1 1
786432 2359296 256
0.602 0.778 0.0</pre>
  <p class="bx-code-note">The round() matters: without it, Python prints the perceptron sum as 0.09999999999999998, a floating point effect, not a different answer.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Image</th><th scope="col">Pixels (formula 10)</th><th scope="col">Values in grayscale</th><th scope="col">Values in RGB (formula 11)</th></tr></thead>
        <tbody>
          <tr><td>1024 x 768</td><td class="bx-num">786,432</td><td class="bx-num">786,432</td><td class="bx-num">2,359,296</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">For formula 12, an 8-bit value has 2<sup>8</sup> = 256 possible levels, 0 (black) to 255 (white). The rule works for any bit depth: with 1 bit there are only 2 levels, black and white. The perceptron is drilled on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">Unit 2 modeling questions</a> and the image counts on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">Unit 5 computer vision questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="practical">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Formulas 17 to 20. Practical only</p>
      <h2>Statistics and convolution: the formulas for the practical and viva</h2>
      <p class="bx-lede">Statistical Data and Advance Python are not in the theory paper, and convolution sits on the practical side of Computer Vision. Examiners ask about these in the lab exam and viva, usually as "what will this program print?".</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Formulas 17 to 19</b><span>numpy, run as printed</span></figcaption>
  <pre>import numpy as np
from statistics import mode
d = [14, 9, 11, 9, 17, 12]
print(np.mean(d), np.median(d), mode(d))

<i># output</i>
12.0 11.5 9</pre>
  <p class="bx-code-note">Sorted, the list is 9, 9, 11, 12, 14, 17. Six values, so the median is the average of the third and fourth. NumPy prints the mean as 12.0, a decimal, because it always divides as floating point.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Formula 20, convolution</b><span>practical side of Unit 5</span></figcaption>
  <pre>output size = n - k + 1
7 x 7 image, 3 x 3 kernel -> 5 x 5

one output cell = multiply and add
patch  [[1, 2],    kernel [[0, 1],
        [3, 4]]            [1, 0]]
= 1x0 + 2x1 + 3x1 + 4x0 = 5</pre>
  <p class="bx-code-note">The kernel slides one step at a time and never hangs off the edge, which is why the output shrinks by k - 1 in each direction.</p>
</figure>
    </div>
    <p class="bx-mt-40">The eight suggested lab programs, written and explained, are on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="cheat">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Using the sheet</p>
      <h2>AI class 10 cheat sheet: the slips that cost formula marks</h2>
      <p class="bx-lede">Students rarely forget a formula outright. They lose marks by feeding it the wrong number. These are the slips we see most often when marking timed numerical sets.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Formula</th><th scope="col">The slip</th><th scope="col">The check that catches it</th></tr></thead>
        <tbody>
          <tr><td>Precision and recall</td><td>FP and FN swapped, so the two answers trade places</td><td>Precision's denominator is the "predicted yes" row; recall's is the "really yes" column</td></tr>
          <tr><td>F1</td><td>Taking the plain average</td><td>F1 must be at or below the average; if it is above, redo it</td></tr>
          <tr><td>Accuracy</td><td>Dividing by TP + TN only, giving 1</td><td>The denominator is always all four cells</td></tr>
          <tr><td>Error, number model</td><td>A negative error</td><td>Use the gap without its sign</td></tr>
          <tr><td>Perceptron</td><td>Bias left out, or a 0 input still counted</td><td>Write one product per input, then the bias, then add</td></tr>
          <tr><td>RGB values</td><td>Answering in pixels when values were asked</td><td>Underline "pixels" or "values" in the question</td></tr>
          <tr><td>Tokens</td><td>Punctuation not counted</td><td>Circle every mark before counting</td></tr>
          <tr><td>TFIDF</td><td>Natural log, or IDF written upside down as DF / N</td><td>Use log<sub>10</sub>; a word in every document must come out 0</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>One family per Monday</h3><p>Each Monday class takes one family of formulas, metrics or NLP or images, builds it from the idea up, and works examples on screen with the class calling out each step.</p></div>
      <div class="bx-card"><h3>Fresh numbers on Wednesday</h3><p>The Wednesday class sets a timed numerical set on new figures, marked live, so a remembered answer is no use and only the method scores.</p></div>
      <div class="bx-card"><h3>Formula recall inside mocks</h3><p>Before each full mock, students write this sheet from memory in five minutes. Any formula missing from their version is drilled again that week.</p></div>
    </div>
    <p class="bx-mt-40">One-mark items that use these formulas, with answers and reasons, are on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ with answers</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Drill these formulas in the batch, or one to one',
  chooseLede: 'The same sheet and the same teachers, two formats. The batch works through one formula family a week with classmates racing the same clock; one to one goes straight to the formulas your child keeps getting wrong. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One formula family taught each week',
    'A timed numerical set on fresh figures every Wednesday',
    'The sheet written from memory before every mock'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Only the formulas your child slips on',
    'The same formula reworked on new numbers until steady',
    'Working checked line by line on screen',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'If your child knows the formulas but loses marks to small slips under time pressure, the batch\'s weekly timed sets usually fix it. If the confusion matrix itself does not make sense yet, a few one to one sessions that rebuild it from the idea are quicker. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI formulas practice for CBSE students in the Gulf and abroad',
  zonesLede: 'The 417 formulas and marking are identical in a CBSE school in Kuwait or Nairobi, so the same sheet applies. Here is the batch hour in local time this winter.',
  zonesAfter: 'If the evening hour does not suit, one to one runs at a local time you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI formulas',
  faqH2: 'What students ask about class 10 AI formulas',
  faqs: [
    ['What are the formulas in class 10 AI?', 'Most are in Evaluating Models: accuracy, error rate, precision, recall and F1 score from a confusion matrix, plus error for number predictions and the train-test split. The others are the perceptron weighted sum, pixel and colour-value counts in Computer Vision, and token counts, Bag of Words and TFIDF in NLP. Mean, median, mode and convolution belong to the practical.'],
    ['What is the formula of accuracy, precision and recall?', 'Accuracy = (TP + TN) / (TP + TN + FP + FN). Precision = TP / (TP + FP), the share of predicted positives that were right. Recall = TP / (TP + FN), the share of real positives the model caught. For TP 56, FP 14, FN 8, TN 122 they are 0.89, 0.80 and 0.875.'],
    ['What is the F1 score formula in class 10 AI?', 'F1 = 2 x precision x recall / (precision + recall). It balances the two and is pulled toward the lower one. With precision 0.80 and recall 0.875, F1 = 1.4 / 1.675 = 0.84, slightly below their plain average of 0.8375. Never take the simple average.'],
    ['What is the TFIDF formula for class 10?', 'TFIDF(W) = TF(W) x log10(N / DF(W)). TF is how many times the word appears in the document, N is the total number of documents, and DF is how many documents contain the word. For a word appearing twice in a document and in 3 of 6 documents, TFIDF = 2 x log10 2 = 0.602.'],
    ['Is log base 10 or natural log used for TFIDF in class 10 AI?', 'Base 10. The CBSE handbook for Class 10 AI takes log to base 10 of N divided by DF. Natural log, or the smoothed version software libraries use, gives different numbers that will not match the marking scheme, so use the log button for base 10 when you check your work.'],
    ['How do you calculate error in class 10 AI?', 'For a model that predicts a number, error = |actual - predicted|, error rate = error / actual, and accuracy = 1 minus the error rate. A wait predicted as 230 seconds that was really 250 gives error 20, rate 0.08 and accuracy 0.92. For a classifier, error rate = (FP + FN) / total, which is 1 minus accuracy.'],
    ['How do you calculate the number of pixels in an image?', 'Multiply width by height in pixels. A 1024 x 768 image has 786,432 pixels. A grayscale image stores one value per pixel, so 786,432 values; an RGB image stores three, one each for red, green and blue, so 2,359,296. With 8 bits per value each one runs from 0 to 255.'],
    ['How is the perceptron output calculated?', 'Multiply each input by its weight, add the products, add the bias, then compare with the threshold. Inputs 1, 0, 1, 1 with weights 0.2, 0.9, -0.4, 0.6 and bias -0.3 give 0.1, above a threshold of 0, so the output is 1. In the latest sample paper this appears only as an objective item.'],
    ['Is there an AI class 10 cheat sheet I can print?', 'Yes, the numbered table at the top of this page is the cheat sheet: twenty formulas and rules with a worked line each. Use your browser\'s Print option and save it as a PDF if you want a file. It is for revision at home; nothing can be taken into the board exam hall.'],
    ['Are mean, median and mode asked in the class 10 AI theory paper?', 'No. They belong to Statistical Data, which is assessed only in the practical, together with Advance Python. Expect them in the lab exam and viva, often as a NumPy program whose output you must predict, such as the median of an even-length list.'],
    ['Do your classes cover all these numericals?', 'Yes. Every formula on this sheet is taught from its idea and then drilled on fresh figures in timed sets, marked live, in the Monday and Wednesday 9:00 PM IST batch or one to one. It is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.']
  ],
  startH2: 'Try a timed numerical set free, with a teacher',
  startHtml: `        <p>In the free first class your child solves a short timed set across the formula families with a teacher, then goes through the working line by line on screen. Afterwards the mentor tells you which formulas are secure, which slips keep recurring, and whether the batch or one to one would suit better.</p>
        <p>Want the whole syllabus in one sitting as well? Read <a class="bx-link" href="/cbse-class-10-ai-one-shot-revision">the Class 10 AI one shot revision</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI formulas'
};
