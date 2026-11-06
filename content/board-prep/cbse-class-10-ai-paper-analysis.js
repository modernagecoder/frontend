// CBSE Class 10 AI (417): paper analysis and answer key, a fixed URL for each exam day.
// Intent: "class 10 AI paper analysis", "CBSE class 10 AI answer key", "AI question paper
// solution", "was AI paper easy", "AI exam review".
// Distinct from cb02 (year-by-year archive, repeats table, original practice) and cxd
// (date and blueprint): this page is the analysis of ONE sitting, the main paper of
// 27 February 2026, section by section with our difficulty notes, an answer key for every
// objective item stated in our own words (no option text, no question text reproduced),
// how each written question was marked, and what the page adds on 24 February 2027.
// Sources read on 2026-11-06:
// - CBSE's own marking scheme for the 2026 main examination, 417, Q.P. code 104, set 4,
//   downloaded from cbse.gov.in (marking-scheme page, 2026/X/417_ARTIFICIAL_INTELLIGENCE)
//   and read in full. Only set 4 was read and the page says so.
// - Day-of reactions: India TV (27 Feb 2026) and Careers360 (27 Feb 2026), quoting
//   teachers; reported as what teachers said, not as our finding. India TV printed a
//   1:30 PM end time; Careers360 and the 2026 schedule give 10:30 AM to 12:30 PM, which
//   the page uses.
// - 2027 date sheet, 6 November 2026 (cbse.gov.in): 417 on Wednesday 24 February 2027,
//   10:30 AM to 12:30 PM, with 165 and 402.
// - 2025-26 sample paper is the latest 417 SQP on cbseacademic.nic.in (checked
//   2026-11-06: the skill SQP page still links Curriculum26 files).
// Numbers recomputed with python3 on 2026-11-06 (scratch calc/pa.py): cyber-attack case
// TP 1000, TN 250, FP 200, FN 50: total 1500, precision 1000 / 1200 = 0.833, recall
// 1000 / 1050 = 0.952, accuracy 1250 / 1500 = 0.833, F1 0.889, wrong 250; Section A item
// 200 + 600 = 800 correct of 1000; original BoW example "Robots sort mail quickly." and
// "Mail reaches people quickly." gives robots, sort, mail, quickly, reaches, people with
// vectors [1,1,1,1,0,0] and [0,0,1,1,1,1]; paper printed 30 objective marks for 24 and
// 42 written marks for 26.
// Difficulty ratings are our own judgement, labelled as such.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-paper-analysis',
  code: 'cb23',
  board: 'cbse',
  themeColor: '#1E4A8C',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Paper Analysis 2026 and Answer Key (417)',
  description: 'Class 10 AI paper analysis for CBSE 417: the 2026 paper by section, an answer key in our words, how each answer was marked, and the 2027 exam-day update.',
  ogTitle: 'Class 10 AI Paper Analysis: The 2026 Paper, Section by Section',
  ogDesc: 'The CBSE Class 10 Artificial Intelligence (417) paper of 27 February 2026 taken apart: difficulty by section, the objective answer key in our own words, how CBSE marked each written answer, and what this page adds on 24 February 2027.',
  twDesc: 'The 2026 CBSE AI 417 paper by section: difficulty, the answer key in our words, the marking, and the 2027 exam-day update.',
  headline: 'Class 10 AI Paper Analysis: The 2026 Paper by Section, the Answer Key and What Changes on 24 February 2027',
  courseName: 'CBSE Class 10 AI (417) Exam Practice, Live Online',
  courseDesc: 'Live online exam practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27, built on how the real papers are set and marked: objective items timed and answered with reasons, written answers marked against the CBSE value points on screen, and full morning mock papers before the 24 February 2027 paper, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Paper analysis',
  navLinks: [['#verdict', 'Verdict'], ['#answer-key', 'Answer key'], ['#written', 'Written answers'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Paper analysis']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Paper analysis and answer key',
  h1: 'Class 10 AI paper analysis: the 2026 paper taken apart, ready for 2027.',
  lede: 'This class 10 AI paper analysis covers the CBSE 417 main paper of 27 February 2026: how hard each section was, the answer to every objective item put in our own words, and what the official marking scheme rewarded in each written answer. It stays at this address, and on 24 February 2027 the same page gets that day\'s paper. In our Monday and Wednesday batch, lessons like these shape every mock before the next paper.',
  heroNote: 'Live online &middot; 2026 paper analysed from CBSE\'s own marking scheme &middot; answer key in our words &middot; updated on 24 February 2027 &middot; first class free',
  waText: 'Hello Modern Age Coders. I read your Class 10 AI paper analysis and want live 417 exam practice.',
  timetable: {
    label: 'This page, and the next paper',
    title: 'Paper watch',
    right: 'CBSE 417',
    rows: [
      ['2026 paper analysed', '27', 'Feb 2026'],
      ['Next AI paper, Wednesday', '24', 'Feb 2027'],
      ['Monday, theory class', '9:00', 'PM IST'],
      ['Wednesday, practical class', '9:00', 'PM IST']
    ],
    zones: '<b>Abu Dhabi and Muscat:</b> 7:30 PM. <b>Jeddah, Doha, Kuwait, Bahrain:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>Singapore:</b> one to one at a local hour.',
    stamps: ['Set 4 read in full', 'Moderate overall']
  },
  picksH2: 'Courses behind this analysis',
  picksLede: 'The 417 course whose Class 10 batch turns each paper into practice, the Python course for the practical half the paper never tests, and the visual machine learning course for students who want models to make sense rather than be memorised.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Each unit taught, then practised in the shapes this paper used, with written answers marked against the value points on screen.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical half / Python', h3: 'Python for Teens', p: 'The programs for the 50 school-assessed marks, the half of the subject no theory paper touches.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Models made visible / Orange', h3: 'Visual ML with Orange', p: 'Classification, clustering and evaluation built by hand in a no-code tool, so items like the regression and association ones stop being guesses.' }
  ],
  capsule: 'The CBSE Class 10 AI (417) paper of 27 February 2026 was moderate overall. Section A, 24 marks of objective items with no negative marking, was mostly direct but had a few traps in two-statement and assertion-reason items. Section B, 26 marks, rewarded exact terms: a confusion matrix case, Bag of Words on two short documents, and AI, ML and DL with a Venn diagram were the four-mark anchors, and teachers called the matrix and Bag of Words items scoring. The 2027 paper is on 24 February 2027, 10:30 AM. Modern Age Coders prepares students live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="verdict">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Was it easy?</p>
      <h2>Class 10 AI paper analysis 2026: was the AI paper easy?</h2>
      <p class="bx-lede">It was moderate: easy to start, with marks lost in a handful of precise items rather than in hard topics. The paper kept the familiar frame, 21 questions with 15 to answer in two hours for 50 marks, and covered every theory unit. Our section-by-section reading of set 4, from CBSE's own marking scheme, is below.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Section</th><th scope="col">Marks counted (printed)</th><th scope="col">Our difficulty rating</th><th scope="col">Where the marks were won or lost</th></tr></thead>
        <tbody>
          <tr><td>A, Q1: employability skills objective</td><td class="bx-num">4 (6)</td><td>Easy</td><td>Two items needed a written line, a definition and a fill-in, not just a choice</td></tr>
          <tr><td>A, Q2 to Q5: AI objective</td><td class="bx-num">20 (24)</td><td>Easy to moderate</td><td>One two-statement item, two assertion-reason items and a domain question with an unexpected answer</td></tr>
          <tr><td>B, Q6 to Q10: employability two-markers</td><td class="bx-num">6 (10)</td><td>Easy</td><td>Lists with partial marks, so a full list mattered more than neat prose</td></tr>
          <tr><td>B, Q11 to Q16: AI two-markers</td><td class="bx-num">8 (12)</td><td>Moderate</td><td>Each wanted a difference or a definition plus an example; half a mark rode on each example</td></tr>
          <tr><td>B, Q17 to Q21: AI four-markers</td><td class="bx-num">12 (20)</td><td>Moderate</td><td>Two calculation-style questions were the safest picks; the theory four-markers needed structure</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What teachers said on the day</h3>
        <p>Teachers quoted by India TV and Careers360 on 27 February 2026 described the paper as balanced and within the syllabus, with an overall moderate level. They called the four-mark Bag of Words and confusion matrix questions scoring, said most objective items were application-based, and noted that a couple of objective items had closely related options. One school also reported that two written questions needed careful interpretation.</p>
      </div>
      <div>
        <h3>How we read it</h3>
        <ul class="bx-check">
          <li><b>Choice was generous.</b> 72 marks were printed for a 50-mark paper, so a student could skip the item they disliked in every block.</li>
          <li><b>Precision decided the top band.</b> Close options and exact terms separated a high score from a full one, not knowledge of extra topics.</li>
          <li><b>No unit was skipped.</b> Every theory unit appeared in both sections, so dropping one unit was a gamble.</li>
          <li><b>Only set 4 was read.</b> Other sets carried different items of the same type; our ratings describe set 4.</li>
        </ul>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="answer-key">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What were the right answers?</p>
      <h2>CBSE class 10 AI answer key 2026 for Section A, set 4, in our words</h2>
      <p class="bx-lede">Every objective item of set 4 (question paper code 104/4), with what it tested described in our words and the answer CBSE's marking scheme keyed. We do not reprint the questions or options; the answer is given as the idea, so it can be checked against any copy of the paper.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Q1, employability skills (any 4 of 6)</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Item</th><th scope="col">Tested</th><th scope="col">Keyed answer</th></tr></thead>
            <tbody>
              <tr><td>1 (i)</td><td>Spotting the sentence type that gives an order</td><td>The command sentence</td></tr>
              <tr><td>1 (ii)</td><td>Which SMART quality small steps give a big goal</td><td>Achievable</td></tr>
              <tr><td>1 (iii)</td><td>A one-line meaning of time management</td><td>Any sound definition</td></tr>
              <tr><td>1 (iv)</td><td>What a strong password contains</td><td>Letters, numbers and special characters together</td></tr>
              <tr><td>1 (v)</td><td>A myth about entrepreneurs, as a fill-in</td><td>Born, not made (other fair pairs accepted)</td></tr>
              <tr><td>1 (vi)</td><td>The odd one out among UN goals</td><td>Population</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="bx-mt-40">Q2, AI (any 5 of 6)</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Item</th><th scope="col">Tested</th><th scope="col">Keyed answer</th></tr></thead>
            <tbody>
              <tr><td>2 (i)</td><td>Naming a fruit in a photo with one label</td><td>Classification</td></tr>
              <tr><td>2 (ii)</td><td>A colour word used for anger</td><td>Meaning depends on context</td></tr>
              <tr><td>2 (iii)</td><td>The purpose of ethical frameworks</td><td>Avoiding unintended harm</td></tr>
              <tr><td>2 (iv)</td><td>Two statements: overfitting, and testing on training data</td><td>First true, second false; "both correct" also accepted</td></tr>
              <tr><td>2 (v)</td><td>Teaching a car to park</td><td>Reinforcement learning</td></tr>
              <tr><td>2 (vi)</td><td>Project-cycle stage that tests on fresh data</td><td>Evaluation</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3>Q3, AI (any 5 of 6)</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Item</th><th scope="col">Tested</th><th scope="col">Keyed answer</th></tr></thead>
            <tbody>
              <tr><td>3 (i)</td><td>The costliest error for a self-driving safety system</td><td>False negative</td></tr>
              <tr><td>3 (ii)</td><td>Pixel value range in a byte image</td><td>0 to 255</td></tr>
              <tr><td>3 (iii)</td><td>"Bought this, also bought that" suggestions</td><td>Association model</td></tr>
              <tr><td>3 (iv)</td><td>What quietly shapes design decisions</td><td>Intuition and values</td></tr>
              <tr><td>3 (v)</td><td>Speech turned into text live</td><td>Auto-generated video captions</td></tr>
              <tr><td>3 (vi)</td><td>Why a testing set exists</td><td>To evaluate the model's accuracy</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="bx-mt-40">Q4 and Q5, AI (any 5 of 6 in each)</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Item</th><th scope="col">Tested</th><th scope="col">Keyed answer</th></tr></thead>
            <tbody>
              <tr><td>4 (i)</td><td>An alarm for a fire that is not there</td><td>False positive</td></tr>
              <tr><td>4 (ii)</td><td>Assertion and reason on bioethics</td><td>Assertion false, reason true: bioethics is sector-based</td></tr>
              <tr><td>4 (iii)</td><td>Which scenario is regression</td><td>Forecasting a temperature</td></tr>
              <tr><td>4 (iv)</td><td>Pixels and resolution</td><td>Resolution is the number of pixels</td></tr>
              <tr><td>4 (v)</td><td>Definition of precision</td><td>True positives over all predicted positives</td></tr>
              <tr><td>4 (vi)</td><td>Chatbot that needs coding and large databases</td><td>Smart bot</td></tr>
              <tr><td>5 (i)</td><td>Domain for a price comparison site</td><td>Statistical Data</td></tr>
              <tr><td>5 (ii)</td><td>Assertion and reason on lowercasing text</td><td>Both true, reason explains it</td></tr>
              <tr><td>5 (iii)</td><td>Computer vision against image processing</td><td>Computer vision is the wider field</td></tr>
              <tr><td>5 (iv)</td><td>True or false on what error measures</td><td>True</td></tr>
              <tr><td>5 (v)</td><td>Reading satisfaction from reviews</td><td>Sentiment analysis</td></tr>
              <tr><td>5 (vi)</td><td>Correct predictions from four matrix counts</td><td>800 (200 + 600)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">Two items are worth a second look. In 2 (iv), the scheme accepted a second answer because each statement could be judged true on its own wording, which shows CBSE adjusting the key when an item reads two ways. In 4 (ii), the trap was the word "value-based": bioethics belongs to one sector, healthcare, so the assertion fails while the reason holds. Original practice in these formats is on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">assertion reason questions for Class 10 AI</a> and <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">the Class 10 AI MCQ bank</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="written">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How were the written answers marked?</p>
      <h2>AI question paper solution: what CBSE rewarded in each written answer</h2>
      <p class="bx-lede">The marking scheme gives examiners value points, not model essays, and it splits the marks inside each answer. Knowing that split is the real solution to Section B, because it tells you what to write first. Here is set 4, described in our words.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Question</th><th scope="col">What it asked, in our words</th><th scope="col">How the marks were split</th><th scope="col">Our note</th></tr></thead>
        <tbody>
          <tr><td>6</td><td>The seven Cs of communication</td><td>2 for all seven, 1.5 for five or six, 1 for three or four, 0.5 for one or two</td><td>A pure list; every C named was worth something</td></tr>
          <tr><td>7</td><td>Emotional intelligence: meaning, and two of its skills</td><td>1 for the meaning, 0.5 per skill</td><td>Easy if the skill names were learnt</td></tr>
          <tr><td>8 to 10</td><td>Uses of ICT skills; qualities of an entrepreneur; sustainable development defined</td><td>1 per relevant point, or 2 for a sound definition</td><td>Generous; most students lose nothing here</td></tr>
          <tr><td>11</td><td>Sector-based against value-based frameworks, an example of each</td><td>1 for a difference, 0.5 per example</td><td>Bioethics as the sector example; rights, virtue or utility as the value one</td></tr>
          <tr><td>12</td><td>Two features of a classification model</td><td>1 per feature</td><td>Supervised, labelled, discrete classes</td></tr>
          <tr><td>13</td><td>How a computer stores a colour image</td><td>2 for a correct account</td><td>Three channels, each pixel holding three values from 0 to 255</td></tr>
          <tr><td>14</td><td>Two differences between supervised and unsupervised learning</td><td>1 per difference; 0.5 per example if only examples given</td><td>Labels, and what the model is trying to find</td></tr>
          <tr><td>15</td><td>The train-test split</td><td>2 for a correct account</td><td>Mention the unseen data and a ratio such as 80 to 20</td></tr>
          <tr><td>16</td><td>Stemming against lemmatisation, shown on an irregular plural</td><td>1 for the difference, 0.5 for the stem, 0.5 for the lemma</td><td>The stem may not be a real word; the lemma always is</td></tr>
          <tr><td>17</td><td>AI, ML and DL told apart, with a labelled Venn diagram</td><td>1 per term, 1 for the diagram</td><td>Nested circles, DL inside ML inside AI</td></tr>
          <tr><td>18</td><td>Two scenarios, each matched to an AI domain with a reason</td><td>1 for the domain, 1 for the reason, in each</td><td>Essay feedback was NLP; a vehicle-counting camera was computer vision</td></tr>
          <tr><td>19</td><td>A cyber-attack detector: matrix, true negatives, precision</td><td>2 for the matrix, 1 for TN, 1 for precision</td><td>Either matrix orientation accepted if the labels were right</td></tr>
          <tr><td>20</td><td>CNN and ANN expanded and defined; two boxes in a network diagram</td><td>0.5 per full form, 1 per definition, 0.5 per box</td><td>The boxes were the input and hidden layers</td></tr>
          <tr><td>21</td><td>Bag of Words on two short documents, all four steps</td><td>1 per step</td><td>Steps three and four could be combined without loss</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Question 19, worked from the scenario</b><span>attack = positive</span></figcaption>
  <pre>1500 network activities tested.
Correct "attack": 1000      TP = 1000
Correct "no attack": 250    TN = 250
Said attack, was not: 200   FP = 200
Said safe, was attack: 50   FN = 50

               Reality: Yes  Reality: No
Predicted Yes    1000          200
Predicted No       50          250

Precision = 1000 / (1000 + 200)
          = 1000 / 1200 = 0.833</pre>
  <p class="bx-code-note">Not asked, but worth knowing: recall 1000 / 1050 = 0.952 and accuracy 1250 / 1500 = 0.833. Here precision and accuracy round to the same value, which is a coincidence, not a rule.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Question 21's method, on our own sentences</b><span>four steps</span></figcaption>
  <pre>Doc 1: Robots sort mail quickly.
Doc 2: Mail reaches people quickly.

1. Normalise: lowercase, drop the full stop
   [robots, sort, mail, quickly]
   [mail, reaches, people, quickly]
2. Dictionary: robots, sort, mail,
   quickly, reaches, people
3. Vector for Doc 1: 1 1 1 1 0 0
4. Table:     ro so ma qu re pe
   Doc 1      1  1  1  1  0  0
   Doc 2      0  0  1  1  1  1</pre>
  <p class="bx-code-note">The 2026 paper's pair shared three of their words, so its dictionary had five entries and each document vector had four ones and one zero. One mark per step means a student who stops after the dictionary still keeps two.</p>
</figure>
    </div>
    <p class="bx-mt-40">The scheme also gave half a mark for writing the precision formula alone and told examiners not to penalise the arithmetic, so the formula should always go down first. How these value points are applied across every question type is on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the CBSE Class 10 AI marking scheme page</a>; more matrices with fresh numbers are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals for Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="lessons">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What does it mean for 2027?</p>
      <h2>AI exam review: six lessons from the 2026 paper for the 2027 candidate</h2>
      <p class="bx-lede">A paper analysis is only useful if it changes how the next student prepares. These are the habits the 2026 paper rewarded, each one now built into our mock reviews.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Learn the frameworks by type</h3><p>Two items turned on whether a framework is sector-based or value-based. Students who knew bioethics only as "an ethics example" fell into the assertion trap.</p></div>
      <div class="bx-card"><h3>Expect the unusual domain</h3><p>A price comparison website belongs to Statistical Data, not NLP. Domain questions reward reasoning from the data the system uses, not from what it looks like.</p></div>
      <div class="bx-card"><h3>Pick the calculation four-markers</h3><p>The matrix and Bag of Words questions gave a mark per step, so a methodical student was close to certain of eight marks from two choices.</p></div>
      <div class="bx-card"><h3>Draw what can be drawn</h3><p>A labelled Venn diagram carried a full mark, and two network boxes another. A clean sketch is the quickest mark in Section B.</p></div>
      <div class="bx-card"><h3>Give the example every time</h3><p>Several two-markers split their marks between a point and an example. An answer with the right idea and no example stopped at half.</p></div>
      <div class="bx-card"><h3>Read both statements on their own</h3><p>Two-statement items ask about each statement separately. Judge statement one, then statement two, then choose; do not let one colour the other.</p></div>
    </div>
    <p class="bx-mt-40">Every theory unit, with written answers of each length, is practised on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>, and full timed papers on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="exam-day">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What happens on 24 February 2027?</p>
      <h2>Class 10 AI paper analysis 2027: what this page adds on exam day</h2>
      <p class="bx-lede">The 2027 AI paper is on Wednesday 24 February 2027, from 10:30 AM to 12:30 PM IST, on the same morning as Computer Applications and Information Technology. This address does not change: the 2027 analysis is added here, in stages, and the 2026 analysis stays below it for comparison.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">When</th><th scope="col">What is added</th><th scope="col">Source</th></tr></thead>
        <tbody>
          <tr><td>Exam day, afternoon</td><td>The section-by-section shape of the paper and our first difficulty notes</td><td>Students and teachers we speak to after the paper</td></tr>
          <tr><td>Within the following days</td><td>An answer key for the objective items, written in our words, and solution notes for the written questions</td><td>Our teachers working the paper in full</td></tr>
          <tr><td>When CBSE posts its marking scheme</td><td>Any item where the official key differs from ours, corrected and noted</td><td>CBSE's marking scheme page</td></tr>
          <tr><td>If CBSE issues a 2026-27 sample paper</td><td>How the real paper compared with it</td><td>cbseacademic.nic.in; the latest 417 sample paper there is still the 2025-26 one</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What will not be added</h3>
        <p>No copy of the question paper and no reproduced question text. The analysis and the answer key describe each item in our words, as on this page. We also do not post "expected" questions before the paper: the 2027 paper is unpublished until the morning it is sat.</p>
      </div>
      <div>
        <h3>Until then, in the live batch</h3>
        <p>Monday classes take each theory unit through the shapes analysed above, and Wednesday classes keep the practical file and project moving. From January, full papers are written at 10:30 AM on weekends to match the exam slot, then reviewed live against the value points. The run-in plan is on <a class="bx-link" href="/cbse-class-10-ai-revision-plan">the CBSE Class 10 AI revision plan</a>.</p>
      </div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Practise for the next paper in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats work from the same papers, the same marking and the same teachers. The batch gives the whole syllabus in order with classmates writing the same mocks; one to one goes straight to the items your child keeps missing. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Objective items timed, each option explained',
    'Written answers marked against value points on screen',
    'Morning mock papers from January'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Practice drawn from the item types your child misses',
    'Four-mark answers rewritten until every point lands',
    'Mocks scheduled around school pre-boards',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who already scores well but drops marks on close options and missing examples often closes the gap in a few one to one sessions. A student still meeting some units for the first time does better in the batch, where the full syllabus is taught before the papers begin. Fees are shown in your own currency.',
  zonesH2: 'The same AI paper for CBSE students in the Gulf and abroad',
  zonesLede: 'CBSE schools in the UAE, Saudi Arabia, Qatar or Kenya sit the same 417 paper on the same morning, so this analysis applies to them unchanged. Here is the batch hour in local time.',
  zonesAfter: 'If 9:00 PM IST is late where you are, one to one runs at a local hour of your choosing. Families abroad will find more on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the AI paper',
  faqH2: 'What students ask after the class 10 AI paper',
  faqs: [
    ['Was the CBSE class 10 AI paper 2026 easy?', 'It was moderate. Teachers quoted on the day called it balanced and within the syllabus, and the objective section was mostly direct. Marks were lost on precision rather than hard topics: a two-statement item, two assertion-reason items, an unexpected domain question, and written answers that left out an example or a step.'],
    ['Where can I find the CBSE class 10 AI answer key 2026?', 'This page gives the answer to every objective item of set 4 (question paper code 104/4), with what each item tested described in our own words. It is based on CBSE\'s own marking scheme for the 2026 main examination, which CBSE has posted on its marking scheme page. Other sets carried different items of the same types.'],
    ['When is the class 10 AI paper analysis 2027 coming?', 'On the day of the paper. CBSE\'s 2027 date sheet puts the Artificial Intelligence (417) paper on Wednesday 24 February 2027, from 10:30 AM to 12:30 PM IST. This page will add the section-by-section shape and difficulty notes that afternoon, then an answer key in our own words in the following days.'],
    ['How many questions were in the 2026 AI paper?', 'Twenty-one, of which students answered fifteen, in two hours for 50 marks. Section A had five objective questions of six parts each, answer any four or five parts. Section B had sixteen written questions, of which ten were answered: three employability two-markers, four AI two-markers and three AI four-markers.'],
    ['Which questions were the most scoring in the AI paper?', 'Teachers named the four-mark Bag of Words and confusion matrix questions, and the marking scheme supports that: Bag of Words gave a mark per step, and the matrix question split its four marks between the matrix, one cell and precision. A methodical student could expect most of those eight marks.'],
    ['Did the 2026 AI paper have assertion reason questions?', 'Yes. Set 4 had two assertion-reason items in Section A, one on bioethics and one on lowercasing text, plus a two-statement item on overfitting. CBSE has not said how many such items a 2027 paper will carry, so treat them as one of several Section A formats.'],
    ['Was there any mistake or change in the AI answer key?', 'In set 4, the two-statement item on overfitting was keyed as first statement true and second false, but the marking scheme also accepted "both correct", noting that each statement could be read as true on its own. No other multiple-choice item in set 4 was keyed with a second accepted option.'],
    ['Did the AI paper ask Python questions?', 'No. Statistical Data and Advance Python are assessed only in the practical, so the 2026 theory paper had no code. Statistical Data appeared only as an AI domain, in a question about which domain suits a price comparison website. Python is examined through the practical file, practical exam and viva.'],
    ['Is this page a copy of the question paper?', 'No. We do not reproduce the paper, its options or its wording. Each item is described in our own words, the answers are stated as ideas, and worked methods use our own example sentences except where a figure, such as the confusion matrix counts, is needed to show the arithmetic.'],
    ['How do your classes use paper analysis like this?', 'Each item type from the real papers becomes a practice routine: timed objective sets with every option explained, written answers marked against the value points on screen, and full morning mocks from January. Classes run live on Monday and Wednesday at 9:00 PM IST, or one to one, and the first class is a free demo.']
  ],
  startH2: 'Try a paper-style class free',
  startHtml: `        <p>The free first class works through one block of objective items and one four-mark question in the shapes analysed above, with the teacher marking against the CBSE value points on screen. Afterwards the mentor tells you plainly where your child would have lost marks on the 2026 paper and whether the batch or one to one is the better way to the next one.</p>
        <p>Want every past paper in one place? See <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">Class 10 AI previous year question papers</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI paper analysis'
};
