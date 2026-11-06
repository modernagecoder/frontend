// CBSE Class 10 AI (417): revision plan for 2026-27, as three tables (30 days, 7 days,
// 1 day), each weighted by the unit marks.
// Intent: "class 10 AI revision plan", "AI class 10 last 30 days", "revision
// timetable 417", "how to revise AI in 1 week".
// Distinct from cb13 (one shot: the content itself, read in 90 minutes), cb03 (notes)
// and the board-exam-preparation page (the whole-year strategy): this page is ONLY the
// calendar, day by day, with what to produce each day, and the rules for falling
// behind. It links out for the content.
// Marks are the 2026-27 curriculum figures in the design doc: Part A 10; U1 7, U2 11,
// U3 10, U5 4, U6 8; U4 and U7 practical only; Part C 15/15/5/10/5. Shares recomputed
// with python3 on 2026-11-06 (scratch writers/cbse-class-10-ai-one-shot-revision/
// calc.py and plan.py): Part A 20%, U1 14%, U2 22%, U3 20%, U5 8%, U6 16%; U2 + U3 =
// 21 of 40 Part B marks (52.5%); first-round days 4, 4, 3, 2, 1, 2 = 16 and days per
// mark 0.36, 0.40, 0.375, 0.29, 0.25, 0.20; daily minutes 60 + 20 = 80, x 30 = 40
// hours; 7-day plan days 7 to 2 at 4.5 to 5 hours = 27 to 30 hours. 2027 timing from the
// CBSE date sheet released 6 Nov 2026: AI 417 Wed 24 Feb 2027, 10:30 AM to 12:30 PM IST;
// Maths 17 Feb, Science 22 Feb. python3: day 1 = Mon 25 Jan, day 30 = Tue 23 Feb,
// "7 days left" = Wed 17 Feb. No claim about practical dates beyond "set by your school".
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-revision-plan',
  code: 'cb18',
  board: 'cbse',
  themeColor: '#2F5D50',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Revision Plan 2026-27 (417): 30, 7 and 1 Day',
  description: 'Class 10 AI revision plan for CBSE 417, 2026-27: day-by-day 30-day, 7-day and 1-day timetables, weighted by unit marks, with mock papers placed in.',
  ogTitle: 'Class 10 AI Revision Plan: 30 Days, 7 Days and the Day Before',
  ogDesc: 'Three revision timetables for CBSE Class 10 AI (417), 2026-27, each built from the unit marks: a 30-day plan with three full papers, a one-week plan, and an hour-by-hour plan for the day before the paper, plus what to drop if you fall behind.',
  twDesc: 'Day-by-day 30, 7 and 1 day revision timetables for CBSE AI 417, weighted by unit marks.',
  headline: 'Class 10 AI Revision Plan for 2026-27: the 30-Day, 7-Day and 1-Day Timetables, Weighted by Marks',
  courseName: 'CBSE Class 10 AI (417) Revision Programme, Live Online',
  courseDesc: 'Live online revision programme for CBSE Class 10 Artificial Intelligence (417), session 2026-27, run on a marks-weighted calendar: Modeling and Evaluating Models revised first and twice, full timed mock papers corrected in class, error lists kept for every student, and doubts answered live in every Monday and Wednesday 9:00 PM IST class, or one to one at a time the family chooses.',
  brandTag: '417 &middot; Revision plan',
  navLinks: [['#weights', 'Marks first'], ['#thirty', '30 days'], ['#seven', '7 days'], ['#one', 'Day before'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Revision plan']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Revision plan 2026-27',
  h1: 'Class 10 AI revision plan: 30 days, 7 days and the day before, built on the unit marks.',
  lede: 'This class 10 AI revision plan gives you three ready timetables for CBSE 417 in 2026-27: thirty days, one week and the final day. Each one spends time where the marks are, so Advanced Concepts of Modeling and Evaluating Models come first and come back twice, and Computer Vision gets a day, not a week. Pick the table that matches the days you have left, and follow it row by row. Our live batch runs the same calendar with the papers marked in class.',
  heroNote: 'Live online &middot; three timetables &middot; weighted by unit marks &middot; three full papers in the 30 days &middot; error list every day &middot; first class free',
  waText: 'Hello Modern Age Coders. I want a live revision plan and classes for CBSE Class 10 AI 417.',
  timetable: {
    label: 'How the plan is run live',
    title: 'Revision calendar',
    right: 'CBSE 417',
    rows: [
      ['Monday, the week\'s units revised', '9:00', 'PM IST'],
      ['Wednesday, paper review', '9:00', 'PM IST'],
      ['Full papers in the 30-day plan', '3', 'papers'],
      ['AI time per day, 30-day plan', '80', 'minutes']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Nepal:</b> 9:15 PM local. <b>Singapore and Malaysia:</b> near midnight, so one to one fits better.',
    stamps: ['Weighted by marks', 'Session 2026-27']
  },
  picksH2: 'Courses behind this revision plan',
  picksLede: 'The 417 course whose Class 10 batch revises on this calendar, the Python course for the lab programs in the short blocks, and the Orange course for the Statistical Data practical.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course; from January its Class 10 batch revises in mark order, with full papers marked in class.' },
    { slug: 'python-complete-masterclass-teens', code: 'Short blocks / Python', h3: 'Python for Teens', p: 'The eight suggested lab programs, written and explained, for students whose practical is still ahead.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Practical / Orange', h3: 'Visual ML with Orange', p: 'The no-code tool of the Statistical Data unit, practised for the lab exam and the viva.' }
  ],
  capsule: 'A class 10 AI revision plan for CBSE 417 in 2026-27 should follow the theory marks: Advanced Concepts of Modeling (11) and Evaluating Models (10) first, then NLP (8), the AI project cycle and ethics (7), Part A employability skills (10, quick to recall) and Computer Vision (4). Over 30 days that means about 80 minutes a day, a first round of every unit by day 17, three timed full papers and a second round on the weak units. Modern Age Coders runs this calendar live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="weights">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Plan rule 1. Where are the marks?</p>
      <h2>How should a class 10 AI revision plan follow the unit marks?</h2>
      <p class="bx-lede">Give each unit time in proportion to its theory marks, then adjust for how hard it is to score. The 50-mark theory paper splits as below, and the day counts are the ones used in the 30-day table further down.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Unit</th><th scope="col">Theory marks</th><th scope="col">Share of the paper</th><th scope="col">First-round days (30-day plan)</th><th scope="col">Why that many</th></tr></thead>
        <tbody>
          <tr><td>Unit 2: Advanced Concepts of Modeling in AI</td><td class="bx-num">11</td><td class="bx-num">22%</td><td class="bx-num">4</td><td>Largest unit; the only one with two long answers in the latest blueprint</td></tr>
          <tr><td>Unit 3: Evaluating Models</td><td class="bx-num">10</td><td class="bx-num">20%</td><td class="bx-num">4</td><td>Numericals need practice, not reading, so it gets the most days per mark</td></tr>
          <tr><td>Unit 6: Natural Language Processing</td><td class="bx-num">8</td><td class="bx-num">16%</td><td class="bx-num">3</td><td>Normalisation steps plus Bag of Words and TFIDF tables</td></tr>
          <tr><td>Unit 1: AI Project Cycle and Ethical Frameworks</td><td class="bx-num">7</td><td class="bx-num">14%</td><td class="bx-num">2</td><td>Mostly ordered lists and one case to apply them to</td></tr>
          <tr><td>Part A: five employability skills units</td><td class="bx-num">10</td><td class="bx-num">20%</td><td class="bx-num">2</td><td>Short recall; kept warm in the 20-minute blocks afterwards</td></tr>
          <tr><td>Unit 5: Computer Vision</td><td class="bx-num">4</td><td class="bx-num">8%</td><td class="bx-num">1</td><td>Small in theory: tasks, pixels, grayscale and RGB</td></tr>
          <tr><td>Units 4 and 7: Statistical Data, Advance Python</td><td>practical only</td><td>none of the theory</td><td>short blocks</td><td>Only if your school practical is still ahead</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Read the table as a rule, not a ratio</h3>
        <p>Units 2 and 3 together are 21 of the 40 Part B marks, more than half, so every plan below opens with them and returns to them. Part A gets fewer days per mark than its share suggests because its answers are lists you either recall or do not; a few minutes a day keeps them, where a whole day would not add much.</p>
      </div>
      <div>
        <h3>What each day produces</h3>
        <p>A plan row is done when something is on paper: a set of answers, a worked numerical, a list written from memory, a marked paper. Reading alone does not count as a finished row. Anything you get wrong goes on one running page, the error list, which you will read again in the final week.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="thirty">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Plan 1. Thirty days out</p>
      <h2>AI class 10 last 30 days: the day-by-day plan</h2>
      <p class="bx-lede">Each day has a main block of about 60 minutes and a short block of about 20, so AI takes 80 minutes alongside your other subjects, about 40 hours in all. Days 1 to 17 are the first round, days 18 to 26 are papers and the second round, and the last four days are for consolidation. For the AI paper on Wednesday 24 February 2027 (CBSE date sheet released 6 November 2026), day 1 is Monday 25 January and day 30 is Tuesday 23 February.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Day</th><th scope="col">Main block, about 60 minutes</th><th scope="col">Short block, about 20 minutes</th><th scope="col">On paper by bedtime</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Unit 2: AI, ML and DL; features and labels; rule-based against learning-based</td><td>Lab program 1: add two lists</td><td>Three 2-mark answers in 30 words each</td></tr>
          <tr><td>2</td><td>Unit 2: supervised (classification, regression), unsupervised (clustering, association), reinforcement</td><td>Lab program 2: mean, median, mode with NumPy</td><td>Ten scenarios sorted by learning type</td></tr>
          <tr><td>3</td><td>Unit 2: neural network layers, ANN and CNN, perceptron sums</td><td>Lab program 3: line chart</td><td>Five perceptron sums, bias included</td></tr>
          <tr><td>4</td><td>Unit 2: two 4-mark answers written to the clock, 50 to 80 words</td><td>Lab program 4: scatter chart</td><td>Both answers checked against the word limit</td></tr>
          <tr><td>5</td><td>Unit 3: why evaluate, train-test split, overfitting, accuracy and error</td><td>Lab program 5: read a CSV, show ten rows</td><td>Error and error rate for five predictions</td></tr>
          <tr><td>6</td><td>Unit 3: building a confusion matrix from a word problem</td><td>Lab program 6: CSV information</td><td>Four matrices built from text</td></tr>
          <tr><td>7</td><td>Unit 3: precision, recall, F1 score numericals</td><td>Lab program 7: read and display an image</td><td>Six numericals, full working</td></tr>
          <tr><td>8</td><td>Unit 3: choosing the metric; ethics of evaluation; a timed set</td><td>Lab program 8: image shape</td><td>A scenario table: costlier error and metric</td></tr>
          <tr><td>9</td><td>Half paper on Units 2 and 3, 60 minutes, then self-marking</td><td>Error list started</td><td>Marked half paper</td></tr>
          <tr><td>10</td><td>Unit 6: applications, stages of NLP, script and smart chatbots</td><td>Objective items on Unit 3</td><td>Stages named for three example sentences</td></tr>
          <tr><td>11</td><td>Unit 6: text normalisation, stemming and lemmatisation, Bag of Words</td><td>Objective items on Unit 2</td><td>One document vector table</td></tr>
          <tr><td>12</td><td>Unit 6: TFIDF numericals and written answers</td><td>Error list read</td><td>Three TFIDF values with log<sub>10</sub></td></tr>
          <tr><td>13</td><td>Unit 1: project cycle stages and the 4Ws canvas</td><td>Objective items on Unit 6</td><td>A 4Ws canvas for a new problem</td></tr>
          <tr><td>14</td><td>Unit 1: ethical frameworks, bioethics and the case study</td><td>Assertion and reason items</td><td>One 4-mark case answer</td></tr>
          <tr><td>15</td><td>Unit 5: tasks, pixels, resolution, pixel value, grayscale and RGB</td><td>Objective items on Unit 1</td><td>Five pixel and value counts</td></tr>
          <tr><td>16</td><td>Part A: communication, self-management, ICT</td><td>Objective items on Unit 5</td><td>Lists written from memory</td></tr>
          <tr><td>17</td><td>Part A: entrepreneurial and green skills; a Part A timed set</td><td>Error list read</td><td>Part A answers marked</td></tr>
          <tr><td>18</td><td>Full paper 1, two hours, timed</td><td>None</td><td>The paper</td></tr>
          <tr><td>19</td><td>Correct paper 1; rewrite every answer that lost marks</td><td>Add misses to the error list</td><td>Rewritten answers</td></tr>
          <tr><td>20</td><td>Second round: Units 2 and 3, numericals with new figures</td><td>Part A lists</td><td>Six fresh numericals</td></tr>
          <tr><td>21</td><td>Second round: Units 6 and 1</td><td>Part A lists</td><td>One TFIDF table, one case answer</td></tr>
          <tr><td>22</td><td>Full paper 2, two hours, timed</td><td>None</td><td>The paper</td></tr>
          <tr><td>23</td><td>Correct paper 2; the unit that lost most marks, again</td><td>Error list read</td><td>Rewritten answers</td></tr>
          <tr><td>24</td><td>Second round: Unit 5 and Part A; mixed assertion and reason set</td><td>Formula sheet from memory</td><td>Marked set</td></tr>
          <tr><td>25</td><td>Full paper 3, written in the morning slot the 2026 paper used</td><td>None</td><td>The paper</td></tr>
          <tr><td>26</td><td>Correct paper 3; the two weakest units</td><td>Error list read</td><td>Rewritten answers</td></tr>
          <tr><td>27</td><td>Thirty mixed objective items, timed, then the misses</td><td>Formula sheet from memory</td><td>Marked set</td></tr>
          <tr><td>28</td><td>Four long answers, one each from Units 1, 2, 3 and 6</td><td>Part A lists</td><td>Answers checked for word limits</td></tr>
          <tr><td>29</td><td>The 90-minute one shot read-through</td><td>Error list read</td><td>Checkpoint answers</td></tr>
          <tr><td>30</td><td>The 1-day plan below</td><td>Sleep early</td><td>Nothing new</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">If your school practical exam is already over, swap the lab programs on days 1 to 8 for Part A recall. The content for each row is on the unit pages; the fastest way through all of it in one sitting is <a class="bx-link" href="/cbse-class-10-ai-one-shot-revision">the Class 10 AI one shot revision</a>, and the papers for days 18, 22 and 25 come from <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="seven">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Plan 2. One week out</p>
      <h2>How to revise AI in 1 week: the 7-day plan</h2>
      <p class="bx-lede">With a week left, revise in mark order and write two full papers. The table assumes about four to five hours a day for AI, the kind of gap a date sheet sometimes leaves before a paper. In 2027 it does not: counting back from 24 February, 7 days left is Wednesday 17 February, the Mathematics paper, and Science falls on 22 February. So keep the morning blocks and the two papers on the free days, and shorten the rest.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Day</th><th scope="col">Morning, 2 hours</th><th scope="col">Afternoon, 1.5 to 2 hours</th><th scope="col">Evening, 1 hour</th></tr></thead>
        <tbody>
          <tr><td>7 days left</td><td>Unit 2: learning types, neural networks, perceptron sums</td><td>Unit 3: confusion matrix and the four metrics, eight numericals</td><td>Start the error list from today's misses</td></tr>
          <tr><td>6 days left</td><td>Unit 6: normalisation, Bag of Words, TFIDF</td><td>Unit 1: cycle, 4Ws, frameworks, bioethics case</td><td>Unit 5: tasks and pixel counts</td></tr>
          <tr><td>5 days left</td><td>Full paper 1, timed, two hours</td><td>Correct it; rewrite each lost answer</td><td>Part A lists, all five units</td></tr>
          <tr><td>4 days left</td><td>Weakest unit from paper 1, from the beginning</td><td>Units 2 and 3 numericals with new figures</td><td>Assertion and reason set</td></tr>
          <tr><td>3 days left</td><td>Full paper 2, at the morning hour of the real paper</td><td>Correct it, same method</td><td>Error list read aloud</td></tr>
          <tr><td>2 days left</td><td>Four long answers to the word limit</td><td>Thirty mixed objective items, timed</td><td>Formula sheet from memory</td></tr>
          <tr><td>1 day left</td><td colspan="3">Follow the 1-day plan below</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Why papers on days 5 and 3</h3><p>Paper 1 shows the weak unit early enough to fix it on day 4. Paper 2 then checks the fix, with two days still left for anything it turns up.</p></div>
      <div class="bx-card"><h3>Why numericals twice</h3><p>Confusion matrix, perceptron, pixel and TFIDF questions are the quickest marks once the method is automatic, and the easiest to lose by swapping two cells under time pressure.</p></div>
      <div class="bx-card"><h3>Why Computer Vision gets an hour</h3><p>It carries 4 theory marks. An hour on its tasks and pixel counts secures them; more time would come straight out of Units 2 and 3.</p></div>
    </div>
    <p class="bx-mt-40">Fresh numericals for day 4 are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>, and the assertion and reason sets on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">CBSE Class 10 AI assertion reason questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="one">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Plan 3. The day before</p>
      <h2>The 1-day revision plan for the day before the AI paper</h2>
      <p class="bx-lede">The day before is for recall and confidence, not new topics. The CBSE date sheet released 6 November 2026 puts the AI paper on Wednesday 24 February 2027 at 10:30 AM IST, so the day before is Tuesday 23 February; set your sleep to that hour.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Time</th><th scope="col">Do this</th></tr></thead>
          <tbody>
            <tr><td>7:30 to 9:00 AM</td><td>The one shot read-through, checkpoints answered on paper</td></tr>
            <tr><td>9:15 to 10:15 AM</td><td>Three Unit 3 numericals and two perceptron sums, new figures</td></tr>
            <tr><td>10:30 to 11:30 AM</td><td>Normalise one sentence, make one vector, find two TFIDF values</td></tr>
            <tr><td>11:30 AM to 12:00 PM</td><td>Part A lists, said aloud</td></tr>
            <tr><td>2:00 to 3:00 PM</td><td>Unit 1 stage order and frameworks; Unit 5 task table</td></tr>
            <tr><td>3:00 to 4:00 PM</td><td>Thirty mixed objective items, timed</td></tr>
            <tr><td>4:30 to 5:30 PM</td><td>Two long answers to 80 words, one from Unit 2</td></tr>
            <tr><td>6:30 to 7:30 PM</td><td>Formula sheet from memory, then the error list</td></tr>
            <tr><td>8:00 PM</td><td>Admit card, pens, school ID packed. Stop studying.</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>Leave these out the day before</h3>
        <ul class="bx-check">
          <li><b>A new full paper.</b> A bad score the evening before helps nobody; papers belong to the days before.</li>
          <li><b>New sources.</b> A different book's wording now only creates doubt about the version you know.</li>
          <li><b>The practical units.</b> Statistical Data and Advance Python are not in the theory paper.</li>
          <li><b>A late night.</b> Recall the next morning depends on sleep more than on one extra hour.</li>
        </ul>
        <p>Every formula and rule for the 6:30 PM block is on <a class="bx-link" href="/cbse-class-10-ai-formula-sheet">the Class 10 AI formula sheet</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="rules">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Plan rule 2. When the plan slips</p>
      <h2>Making the revision timetable for 417 survive a real month</h2>
      <p class="bx-lede">Every plan slips: a school test, a fever, a hard day. What matters is deciding in advance what gives way, so the high-mark units are never the ones that lose out.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Lose a day, drop from the bottom</h4><p>Cut the second round of Computer Vision first, then extra Part A sessions. Never cut the numericals of Units 2 and 3 or a full paper.</p></li>
      <li class="bx-step"><h4>Correct every paper the same day or the next</h4><p>An uncorrected paper is half the value. Mark it against the value points, rewrite each answer that lost marks, and add the reason to the error list.</p></li>
      <li class="bx-step"><h4>Write answers to the word limits</h4><p>Two-mark answers in 20 to 30 words and four-mark answers in 50 to 80. Extra length earns nothing and steals time from Section B.</p></li>
      <li class="bx-step"><h4>Keep the practical separate</h4><p>The practical exam, file and viva are set by your school. If they fall inside your 30 days, give the lab programs the short blocks and do not let them push out theory papers. The questions examiners ask are on <a class="bx-link" href="/cbse-class-10-ai-practical-exam-questions">CBSE Class 10 AI practical exam questions</a>.</p></li>
      <li class="bx-step"><h4>Re-plan on day 10 and day 20</h4><p>Look at the error list. If one unit fills half of it, give that unit the next free main block and drop a lower-weight unit's revisit.</p></li>
    </ol>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The batch runs this calendar</h3><p>From January the Monday class revises the week's units in mark order and the Wednesday class reviews a paper, so students do not have to hold the plan together alone.</p></div>
      <div class="bx-card"><h3>Papers marked in class</h3><p>Full papers are written at home and then marked against the scheme on screen, with the lost marks rewritten while the reasons are fresh.</p></div>
      <div class="bx-card"><h3>Doubts during the week</h3><p>A doubt from Saturday's row is raised in Monday's class and answered there, so a stuck numerical does not quietly eat two days of the plan.</p></div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Revise on this calendar in the batch, or one to one',
  chooseLede: 'Same plan, same teachers, two ways to follow it. The batch keeps everyone on the same rows with papers marked together; one to one bends the calendar around your child\'s weak units and school dates. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Units revised in mark order from January',
    'Full papers reviewed in the Wednesday class',
    'A running error list kept for each student'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'The 30-day plan rebuilt around your date sheet',
    'Extra rounds on the unit that fills the error list',
    'A final session in the last days before the paper',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'Students who start revising early and want a steady push do well in the batch. Students who are short of days, or whose school tests keep breaking the plan, usually need one to one, where each session goes straight to the rows that matter most. Fees are shown in your own currency.',
  zonesH2: 'A class 10 AI revision plan for CBSE students in the Gulf and abroad',
  zonesLede: 'Schools abroad follow the same CBSE date sheet, so the 30, 7 and 1 day plans count down to the same paper. Here is the batch hour in local time this winter.',
  zonesAfter: 'When the evening class clashes with school or travel, one to one runs at an hour you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the Class 10 AI revision plan',
  faqH2: 'What students ask about a class 10 AI revision plan',
  faqs: [
    ['How do I make a revision plan for class 10 AI?', 'Start from the theory marks: Advanced Concepts of Modeling 11, Evaluating Models 10, NLP 8, the project cycle unit 7, Computer Vision 4 and Part A 10. Give the heavy units the first and most days, plan timed full papers with a correction day after each, and keep a running list of every mistake to read in the final week.'],
    ['How to prepare for AI class 10 in the last 30 days?', 'Revise every unit once in the first 17 days, heaviest units first, with about 80 minutes a day. Then write three full timed papers, correct each one the next day, and spend the gaps on a second round of the units the papers expose. Keep the final day for light recall.'],
    ['How to revise AI class 10 in 1 week?', 'Spend the first two days on a fast round of all the units in mark order, write a full paper on day three, fix its weakest unit on day four, write a second paper on day five, and use the last two days for numericals, long answers and the formula sheet. The 7-day table on this page lays it out by morning, afternoon and evening.'],
    ['How many hours a day should I study AI for class 10 boards?', 'In the last month, about 80 minutes a day alongside your other subjects is enough for most students who studied the units during the year. In a free week just before the paper, four to five hours a day lets you write two full papers and still revise every unit.'],
    ['Which unit should I revise first in class 10 AI?', 'Advanced Concepts of Modeling, then Evaluating Models. Together they carry 21 of the 40 Part B theory marks, and Evaluating Models needs practised numericals. Computer Vision, at 4 marks, can safely come later and take less time. Part A is worth 10 marks but is quick recall, so short daily blocks keep it fresh.'],
    ['Should I solve sample papers in my AI revision timetable?', 'Yes, but only with a correction step. A paper you write and never mark shows a score, not the reason for it. Correct it against the marking points the same or next day, rewrite every answer that lost marks, and log the cause. The 30-day plan here has three papers and a correction day after each.'],
    ['What should I do the day before the class 10 AI exam?', 'Read the whole syllabus once in the morning, rework a few numericals with new figures, say the Part A lists aloud, do a timed objective set, write the formula sheet from memory and read your error list. Do not start a new paper or new material, pack your admit card and sleep early.'],
    ['Is 1 week enough to prepare for class 10 AI?', 'One week is enough to revise if the units were taught during the year and you put four to five hours a day into it. It is not enough to learn the subject from scratch; in that case start with Units 2 and 3, which carry the most marks, and ask for help early.'],
    ['Do I need to revise Python for the AI theory paper?', 'No. Advance Python and Statistical Data are assessed only in the practical exam, file and viva. If your school practical is still ahead during your revision month, use the short daily blocks for the eight suggested lab programs, and keep the main blocks for theory.'],
    ['Do your classes follow a revision plan before the AI board exam?', 'Yes. From January the Monday and Wednesday 9:00 PM IST batch revises the units in mark order and reviews full papers in class, with an error list kept for each student. It is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.']
  ],
  startH2: 'Get a revision plan checked by a teacher, free',
  startHtml: `        <p>In the free first class your child does a short timed set across the heavy units with a teacher, marked on screen. Afterwards the mentor tells you where the plan should start, which units can wait, and whether the batch calendar or one to one would suit better with the days left.</p>
        <p>Want one revision sheet per unit to work from? Read <a class="bx-link" href="/cbse-class-10-ai-notes">the Class 10 AI notes</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI revision plan'
};
