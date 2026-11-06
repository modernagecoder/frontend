// CBSE Class 10 AI (417): the marking scheme, explained through annotated answers.
// Intent: "class 10 AI marking scheme", "how AI answers are marked", "step marking
// 417", "marking scheme 2026 AI".
// Distinct from cxd (exam date and blueprint: unit weightage), csq (solving the
// sample paper), cb02 (what each year's paper asked) and ciq (question bank): this
// page is about HOW marks are given. It describes, in our own words, the structure
// and the marking rules of three official schemes, then shows ORIGINAL model
// answers annotated mark by mark, with weaker versions marked down.
// Sources read line by line on 2026-11-06: the 2025 main exam marking scheme,
// Q.P. code 104 set 4 (cbse.gov.in, X_417_MS_Artificial_Intelligence.pdf); the
// 2026 main exam marking scheme, Q.P. code 104 set 4 (as hosted by AglaSem); the
// 2025-26 sample paper marking scheme (cbseacademic.nic.in). Only set 4 of each
// main paper was read, and the page says so. The 2025 paper still carried older
// topics (AI bias and access, data science applications); 2026 and the 2025-26
// SQP follow the current units. Nothing on this page promises the 2027 scheme;
// the 2026-27 417 SQP is not out (the listed one is the 2025-26 paper).
// Marking rules described (not quoted): value points are guidelines, own wording
// accepted; competency-based answers credited when the competency is shown; an
// extra attempted question keeps the higher score; an error is penalised once;
// the full range of marks is to be used. Splits described: 2026 sector vs value
// (1 for a difference, half per example); 2026 stemming item (1 difference, half
// stem, half lemma); 2026 7 Cs (graded 2 / 1.5 / 1 / 0.5); 2026 confusion matrix
// (2 for a full matrix, 1.5 with two right values, 0.5 for a frame without values;
// TN 1; precision 1, or 0.5 for formula only); 2025 precision / recall / F1 item
// (1 for TN, half per formula, half per substitution); both carry a note that
// calculations can be ignored; 2026 BoW (1 per step, steps 3 and 4 may be
// combined); 2026 AI, ML, DL (1 each plus 1 for the Venn diagram); 2026 domain
// scenarios (1 domain plus 1 justification each); 2025-26 SQP biased-selection
// case (1 per reason, half per principle, half per explanation); 2025-26 SQP
// matrix (half per cell, half formula, half answer).
// Numbers checked with python3 on 2026-11-06 (scratch calc/cb25.py): library model
// TP 72, FP 8, FN 28, TN 292: n 400, accuracy 0.91, precision 0.90, recall 0.72,
// F1 0.80 (plain average 0.81), wrong predictions 36; swapped cells give 0.72 as
// "precision". BoW "Robots help farmers." / "Farmers teach robots and robots help."
// gives dictionary robots, help, farmers, teach, and with vectors [1,1,1,0,0] and
// [2,1,1,1,1]. Section totals 4 + 20 = 24 and 6 + 8 + 12 = 26.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-marking-scheme',
  code: 'cb25',
  board: 'cbse',
  themeColor: '#2E5566',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Marking Scheme (417), Explained with Answers',
  description: 'Class 10 AI marking scheme for CBSE 417, explained: how the 2025 and 2026 schemes split marks, with model answers showing where each mark is won or lost.',
  ogTitle: 'Class 10 AI Marking Scheme, Explained Answer by Answer',
  ogDesc: 'How CBSE marks the 417 paper: the structure and rules of the 2025, 2026 and sample paper schemes in plain words, then original answers annotated half mark by half mark, with the weaker versions that lose them.',
  twDesc: 'How 417 answers are marked, from one-mark items to the four-mark matrix, with annotated model answers and the slips that cost marks.',
  headline: 'Class 10 AI Marking Scheme Explained: How CBSE Splits the Marks in 417, Shown on Annotated Model Answers',
  courseName: 'CBSE Class 10 AI (417) Answer Writing and Marking Practice, Live Online',
  courseDesc: 'Live online answer-writing practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: answers written to the 20 to 30 and 50 to 80 word limits, marked on screen the way the board splits its value points, rewritten until no half mark is lost, and full mocks marked to the scheme, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Marking scheme',
  navLinks: [['#how', 'How it is marked'], ['#shortans', '2-mark answers'], ['#longans', '4-mark answers'], ['#lost', 'Marks lost']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Marking scheme, explained']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Marking scheme explained, 2026-27',
  h1: 'Class 10 AI marking scheme, explained on real answers: where each mark is won and where it slips away.',
  lede: 'The class 10 AI marking scheme that CBSE gives examiners lists value points: the ideas an answer must contain, and how many marks each is worth. We read the official schemes for the 2025 and 2026 board papers and the 2025-26 sample paper, and describe below, in our own words, how they split the marks. Then each kind of question is answered in full, annotated half mark by half mark, beside a weaker version that loses marks. In our live batch, every mock is marked this way on screen.',
  heroNote: 'Live online &middot; marking rules in plain words &middot; annotated model answers &middot; weak answers marked down &middot; mocks marked to the scheme &middot; first class free',
  waText: 'Hello Modern Age Coders. I want answer-writing practice marked to the CBSE Class 10 AI 417 scheme.',
  timetable: {
    label: 'When answers are marked in class',
    title: 'Marking scheme practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, answers written to time', '9:00', 'PM IST'],
      ['Wednesday, marked on screen', '9:00', 'PM IST'],
      ['Objective marks, Section A', '24', 'of 50'],
      ['Written marks, Section B', '26', 'of 50']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM. <b>Kenya and Uganda:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour you choose.',
    stamps: ['Value points', 'Half marks count']
  },
  picksH2: 'Courses behind this answer practice',
  picksLede: 'The 417 course whose batch writes and marks these answers, the Python course for the practical half the theory scheme does not cover, and the Orange course for the no-code tools named in objective items.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, with written answers marked against the value points after every unit and in each full mock.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical half / Python', h3: 'Python for Teens', p: 'The 50 practical marks have their own assessment: NumPy, Pandas and Matplotlib programs for the file and the practical exam.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code tools / Orange', h3: 'Visual ML with Orange', p: 'The no-code workflows behind several one-mark items and the practical units, built and explained.' }
  ],
  capsule: 'The class 10 AI marking scheme for CBSE 417 gives examiners value points, not full answers: any correct wording earns the mark if the point is there. In the 2025 and 2026 schemes, objective items carry 1 mark each with no negative marking, 2-mark answers usually split into two 1-mark points or a point plus two half-mark examples, and 4-mark answers into named parts such as 1 per step or half a mark per formula and per substitution. Modern Age Coders marks practice answers this way live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="how">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How is the class 10 AI paper marked?</p>
      <h2>How the class 10 AI marking scheme is laid out</h2>
      <p class="bx-lede">The 417 theory paper is 50 marks in two hours: 24 objective marks in Section A and 26 written marks in Section B. The 2025 and 2026 board schemes and the 2025-26 sample paper scheme all use this shape.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part of the paper</th><th scope="col">Choice</th><th scope="col">Marks each</th><th scope="col">Total</th><th scope="col">How the scheme marks it</th></tr></thead>
        <tbody>
          <tr><td>Section A, employability skills</td><td>any 4 of 6</td><td class="bx-num">1</td><td class="bx-num">4</td><td>Right or wrong; often an option letter or its text is accepted</td></tr>
          <tr><td>Section A, AI items (four questions)</td><td>any 5 of 6 in each</td><td class="bx-num">1</td><td class="bx-num">20</td><td>Same; no negative marking</td></tr>
          <tr><td>Section B, employability skills</td><td>any 3 of 5, 20 to 30 words</td><td class="bx-num">2</td><td class="bx-num">6</td><td>Usually 1 per relevant point</td></tr>
          <tr><td>Section B, AI short answers</td><td>any 4 of 6, 20 to 30 words</td><td class="bx-num">2</td><td class="bx-num">8</td><td>Two points, or a point plus examples</td></tr>
          <tr><td>Section B, AI long answers</td><td>any 3 of 5, 50 to 80 words</td><td class="bx-num">4</td><td class="bx-num">12</td><td>Split into named parts, steps or calculations</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The rules on the front pages, in plain words</h3>
        <ul class="bx-check">
          <li><b>Value points are a guide.</b> The scheme says its answers are not complete answers; a student's own wording earns the marks if the point is correct.</li>
          <li><b>Competency questions are read generously.</b> If an answer shows the skill being tested, examiners are told to credit it even when it is not the scheme's wording.</li>
          <li><b>One error, one penalty.</b> A mistake carried into later parts is not punished again.</li>
          <li><b>Extra questions.</b> If you answer more than the choice allows, the higher-scoring answer is kept.</li>
          <li><b>Full marks are allowed.</b> Examiners are told to use the whole scale, so a complete answer gets everything.</li>
        </ul>
      </div>
      <div>
        <h3>What this means for the way you write</h3>
        <p>Examiners look for the points, so make each point easy to find: one idea per line, the key term written exactly (precision, data acquisition, justice), and the example labelled "Example:". An answer that is right but buried in a paragraph risks a point being missed.</p>
        <p>A note on sources: we read set 4 of the 2025 and 2026 papers and the sample paper scheme. Other sets have other questions but the same marking style. The 2025 paper still carried some older topics, such as AI bias and data science applications; 2026 follows the current units. Unit-by-unit weightage is on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the exam date and paper pattern page</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="objective">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How are one-mark items marked?</p>
      <h2>How AI answers are marked in Section A</h2>
      <p class="bx-lede">Every objective item is one mark, all or nothing, with no negative marking. The schemes accept either the option letter or the option text, and some items list more than one acceptable answer.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Letter or words</h3><p>The 2026 scheme writes answers as "(C) OR the option's text". Writing both is safest: a letter alone can be misread, and the words show you knew it.</p></div>
      <div class="bx-card"><h3>More than one right answer</h3><p>In 2026, a two-statement item about overfitting accepted two options, because each statement was true on its own. In 2025, a chatbot item accepted several names for a smart bot.</p></div>
      <div class="bx-card"><h3>Half marks can appear</h3><p>The 2025 chatbot item gave half a mark when a student named only an example product instead of the type. So even a one-mark item can be partly credited when the scheme allows it.</p></div>
    </div>
    <h3 class="bx-mt-40">Three original one-mark items, with how they would be marked</h3>
    <ol class="bx-qlist">
      <li>A gate camera reads car number plates. Which AI domain is this?
        <details><summary>Marking</summary> <b>Computer Vision [1].</b> "CV" also earns it. "Image processing" alone is a narrower idea, and a scheme may not list it.</details></li>
      <li><b>Assertion:</b> Precision is the share of predicted positives that were correct. <b>Reason:</b> Precision uses TP and FN.
        <details><summary>Marking</summary> <b>Assertion true, reason false [1].</b> Precision uses TP and FP. No working is needed or marked.</details></li>
      <li>Fill in the blank: the stage of the AI project cycle that puts a model into real use is ______.
        <details><summary>Marking</summary> <b>Deployment [1].</b> Naming any other stage, such as evaluation, earns nothing.</details></li>
    </ol>
    <p class="bx-mt-40">Thirty-six more objective items with answers are on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="shortans">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How are 2-mark answers split?</p>
      <h2>Two-mark answers: where each mark sits</h2>
      <p class="bx-lede">A 2-mark answer is almost always worth two separate points. The schemes use four splits again and again, and knowing which one a question uses tells you what to write.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Split</th><th scope="col">Where we saw it</th><th scope="col">What to write</th></tr></thead>
        <tbody>
          <tr><td>1 + 1, two points</td><td>Two characteristics of a classification model (2026); two stages explained (2025-26 SQP)</td><td>Two separate lines, each a complete point</td></tr>
          <tr><td>1 for a difference + &frac12; + &frac12; for examples</td><td>Sector-based against value-based frameworks (2026)</td><td>One clear difference, then one example of each, labelled</td></tr>
          <tr><td>1 for a difference + &frac12; + &frac12; for applying it</td><td>Stemming against lemmatisation on a plural word (2026)</td><td>The difference, then the stem and the lemma of the given word</td></tr>
          <tr><td>Graded by how many points</td><td>The 7 Cs of communication (2026): all seven for 2, fewer for 1&frac12;, 1 or &frac12;</td><td>Every item in the list, even if short of time</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card">
        <h3>Q. Differentiate classification and regression, with one example of each. (2)</h3>
        <p><b>Full-mark answer.</b> Classification predicts a label or category from fixed classes, while regression predicts a continuous number <b>[1]</b>. Example of classification: sorting emails into spam or not spam <b>[&frac12;]</b>. Example of regression: predicting tomorrow's temperature in degrees <b>[&frac12;]</b>.</p>
        <p><b>Answer that gets 1.</b> "Classification puts things in groups and regression is for numbers, e.g. house price." The difference earns its mark; there is only one example, and it is not labelled as regression, so at most half more is likely.</p>
      </div>
      <div class="bx-card">
        <h3>Q. What is model evaluation, and why is it needed? (2)</h3>
        <p><b>Full-mark answer.</b> Model evaluation is checking how well a trained model performs, using metrics such as accuracy, precision and recall on data it has not seen <b>[1]</b>. It is needed because the scores show the model's weak points, so it can be improved before people rely on it <b>[1]</b>.</p>
        <p><b>Answer that gets 1.</b> "Evaluation is the fifth stage of the AI project cycle where we test the model." That places it, but gives no reason it is needed, so the second point is missing. This "define, then explain" split is the one the 2025-26 sample paper used for its evaluation item.</p>
      </div>
    </div>
    <p class="bx-mt-40">Every two-mark difference pair the units offer is answered on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">CBSE Class 10 AI difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="longans">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Is there step marking in Class 10 AI?</p>
      <h2>Step marking in 417: four-mark answers, annotated</h2>
      <p class="bx-lede">Yes, in effect. The four-mark items are split into parts, steps or calculations, each with its own mark, so a student who gets the final value wrong can still earn most of the marks for the matrix, the formulas and the substitution.</p>
    </div>
    <p><b>Q.</b> A library tests a model that predicts whether a borrowed book will be returned late, on 400 loans. It predicted "late" for 80 loans, of which 72 were late. Of the 320 it predicted "on time", 28 were late. (a) Draw the confusion matrix. (2) (b) Calculate precision and recall. (2)</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Full-mark answer</b><span>late = positive</span></figcaption>
  <pre>(a)            Reality: Late  Reality: On time
   Pred: Late     TP = 72        FP = 8
   Pred: On time  FN = 28        TN = 292   [2]

(b) Precision = TP / (TP + FP)              [&frac12;]
              = 72 / (72 + 8) = 72 / 80     [&frac12;]
              = 0.90
    Recall    = TP / (TP + FN)              [&frac12;]
              = 72 / (72 + 28) = 72 / 100   [&frac12;]
              = 0.72</pre>
  <p class="bx-code-note">Writing each formula on its own line, then the substitution, gives the examiner four separate places to award half marks.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-marks">
          <thead><tr><th scope="col">Slip</th><th scope="col">Likely cost</th></tr></thead>
          <tbody>
            <tr><td>Matrix drawn with all four cells right</td><td class="bx-num">2 of 2</td></tr>
            <tr><td>Matrix with only two cells right</td><td class="bx-num">about 1&frac12;</td></tr>
            <tr><td>Matrix frame with no values</td><td class="bx-num">&frac12;</td></tr>
            <tr><td>FP and FN swapped, so "precision" = 0.72</td><td class="bx-num">loses cell marks; formula marks can survive, and the error is penalised once</td></tr>
            <tr><td>Formula only, no substitution</td><td class="bx-num">&frac12; per part</td></tr>
            <tr><td>Right formula, arithmetic slip in the last line</td><td class="bx-num">usually little or nothing</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">The costs above follow the 2026 and 2025 schemes for their matrix items: two marks for a fully correct matrix with partial credit below that, and half marks for each formula and its substitution. Both schemes add a note that the calculations themselves can be ignored, which puts the weight on the method. Still write the final value: accuracy here is 364 / 400 = 0.91, and F1 is 2 x 0.90 x 0.72 / 1.62 = 0.80, not the plain average 0.81.</p>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card">
        <h3>Bag of Words: one mark per step</h3>
        <p><b>Q.</b> Apply the four steps of Bag of Words to: D1 "Robots help farmers." D2 "Farmers teach robots and robots help." (4)</p>
        <p><b>Step 1, normalise [1]:</b> D1 = robots, help, farmers; D2 = farmers, teach, robots, and, robots, help.<br><b>Step 2, dictionary [1]:</b> robots, help, farmers, teach, and.<br><b>Step 3, vector for D1 [1]:</b> [1, 1, 1, 0, 0].<br><b>Step 4, table for all [1]:</b> D1 [1, 1, 1, 0, 0]; D2 [2, 1, 1, 1, 1].</p>
        <p>The 2026 scheme gave one mark per step and said steps 3 and 4 may be shown together. A table without the step names risks the marks for the steps you skipped. Fully worked versions are on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF for Class 10 AI</a>.</p>
      </div>
      <div class="bx-card">
        <h3>Other four-mark splits we saw</h3>
        <ul class="bx-check">
          <li><b>AI, ML and DL with a Venn diagram (2026):</b> 1 for each term, 1 for the labelled diagram.</li>
          <li><b>Two scenarios, name the domain (2026):</b> 1 for each domain, 1 for each justification.</li>
          <li><b>Biased selection case (2025-26 sample):</b> 1 for each of two reasons, then half for each principle named and half for each explanation.</li>
          <li><b>Matrix, accuracy and wrong predictions (2025-26 sample):</b> half per correct cell, then half for each formula and half for each answer.</li>
        </ul>
        <p>The bioethics case answer is worked mark by mark on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">AI project cycle and ethics</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="lost">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Where are marks usually lost?</p>
      <h2>Where 417 answers lose marks, and the habit that keeps them</h2>
      <p class="bx-lede">Most lost marks in this paper are not lost on hard topics. They go on answers that miss one value point the scheme was looking for. These are the patterns we see most when marking mocks.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">What happens</th><th scope="col">Which split it breaks</th><th scope="col">The habit that fixes it</th></tr></thead>
        <tbody>
          <tr><td>A difference written, but no examples</td><td>Difference plus two half-mark examples</td><td>Write "Example:" twice whenever a question says "with an example"</td></tr>
          <tr><td>Principle described but not named</td><td>Half for the name, half for the explanation</td><td>Start each line with the principle's name: "Justice: ..."</td></tr>
          <tr><td>Only the final number in a numerical</td><td>Half per formula and per substitution</td><td>Formula line, substitution line, answer line, every time</td></tr>
          <tr><td>Bag of Words table with no steps</td><td>One mark per named step</td><td>Head each part "Step 1", "Step 2" and so on</td></tr>
          <tr><td>Two points merged into one sentence</td><td>1 + 1</td><td>One point per line; never let a "because" hide the second point</td></tr>
          <tr><td>Long answers past the word limit</td><td>Not a rule for marks, but time lost</td><td>20 to 30 words for 2 marks, 50 to 80 for 4; stop when the points are made</td></tr>
          <tr><td>Extra questions attempted "just in case"</td><td>Only the higher answer counts</td><td>Choose early, spend the time checking</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The marking scheme covers the 50 theory marks only. The other 50, the practical file, practical exam, viva and project, are assessed in school; that half is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>. Past papers to practise these splits on are described on <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">CBSE Class 10 AI previous year question papers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How do classes use the marking scheme?</p>
      <h2>How the live batch marks answers the CBSE way</h2>
      <p class="bx-lede">Knowing the splits is half the work; the other half is writing to them under time until it is automatic. That only happens when someone marks your answers the way the board will and shows you the half marks you dropped.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Written to the word limit</h3><p>On Mondays students write two-mark and four-mark answers against the clock, to the 20 to 30 and 50 to 80 word limits the paper sets.</p></div>
      <div class="bx-card"><h3>Marked on screen</h3><p>On Wednesdays the teacher marks a few answers on the shared screen, writing the half marks in the margin, so everyone sees which line earned what and which point was missing.</p></div>
      <div class="bx-card"><h3>Rewritten, then mocked</h3><p>Each student rewrites one answer that lost marks. From December, full timed mocks are marked against the value points and returned with a mark per question.</p></div>
    </div>
    <p class="bx-mt-40">
      The mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>. Students can pause any marking session to argue for a half mark; working out why the scheme would or would not give it is often where the lesson lands.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Have your answers marked in the Monday and Wednesday batch, or one to one',
  chooseLede: 'In the batch, answers from the whole class are marked on screen, so students learn from each other\'s lost half marks as well as their own. One to one marks only your child\'s answers and rewrites them until every value point is there. Same teachers, same scheme; monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Answers written to the paper\'s word limits',
    'Marked on screen against the value points',
    'Full mocks from December, marked question by question'
  ],
  choosePersonal: [
    'Days and time chosen by you, in your own time zone',
    'Every answer your child writes marked line by line',
    'Rewrites until each half mark is secure',
    'School test papers marked the CBSE way if you share them',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who knows the content but scores below it in school tests often has a marking-scheme problem, and a few one to one sessions on answer layout tend to fix it. A student still learning the units gains more from the batch, where the content and the answer writing are taught together. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI answer-writing practice for CBSE students in the Gulf and abroad',
  zonesLede: 'Answer scripts from CBSE schools abroad are marked to the same scheme as those from India. Here is when the evening batch falls in your time zone this winter.',
  zonesAfter: 'If 9:00 PM IST is too late where you live, one to one runs at an hour you choose. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the AI marking scheme',
  faqH2: 'What students ask about the class 10 AI marking scheme',
  faqs: [
    ['What is the class 10 AI marking scheme?', 'It is the document CBSE gives examiners for each paper, listing the value points an answer should contain and how many marks each point earns. For 417 it covers the 50-mark theory paper. CBSE publishes main exam schemes on its website and a scheme with each sample paper, which is how students can see how answers are marked.'],
    ['Where can I find the class 10 AI marking scheme 2026?', 'CBSE posts main exam marking schemes on cbse.gov.in, by year and subject code, and sample paper schemes on cbseacademic.nic.in. Each main exam has several sets with different questions; we read set 4 of the 2026 paper, so other sets differ in questions but not in marking style.'],
    ['Is there step marking in CBSE Class 10 AI?', 'In effect, yes. Four-mark numericals and Bag of Words items are split into parts: marks for the confusion matrix, half marks for each formula and each substitution, or one mark per Bag of Words step. The 2025 and 2026 schemes also note that calculations can be ignored, so the method carries most of the marks.'],
    ['Is there negative marking in the class 10 AI paper?', 'No. The 2025 and 2026 papers and the 2025-26 sample paper all state there is no negative marking in Section A. Attempt every objective item you choose, and use elimination when unsure.'],
    ['How are 2 mark questions marked in class 10 AI?', 'Usually as two separate points of one mark each, or one mark for a difference plus half a mark for each of two examples. Some list-based answers are graded by how many items you give. Write each point on its own line so the examiner can find it.'],
    ['Do I have to write the exact words from the marking scheme?', 'No. The scheme says its value points are guidelines and that a student\'s own expression earns the marks if it is correct. Key terms still matter: write precision, data acquisition or justice exactly, because those words are what the examiner looks for.'],
    ['What happens if I answer an extra question?', 'The examiner marks the extra answer too, but only the higher-scoring one is counted and the other is struck out. It rarely helps, because the time is better spent checking the answers you chose.'],
    ['How many words should a 4 mark AI answer have?', 'The 417 paper asks for 50 to 80 words for four-mark answers and 20 to 30 words for two-mark answers. The marks come from the value points, not the length, so aim to cover every point clearly within the limit.'],
    ['Will the 2027 marking scheme be the same?', 'No one can say until CBSE publishes the 2026-27 sample paper for 417, and the one listed so far is the 2025-26 paper. The 2025-26 sample paper and the 2026 board paper used the same structure and splits, so practising to them is the sensible preparation.'],
    ['Is marked answer practice included in your classes?', 'Yes. Answers are written to time and marked against the value points in ordinary classes, in the batch or one to one, covered by the monthly fee shown on this page in your own currency. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Have a free answer marked by a teacher',
  startHtml: `        <p>In the free first class your child writes one two-mark and one four-mark answer, and the teacher marks both live, half mark by half mark, against the way the board splits them. You will see where marks go missing, and the mentor will tell you honestly what to work on and whether the batch or one to one fits better.</p>
        <p>Want the full picture of the subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI marking scheme'
};
