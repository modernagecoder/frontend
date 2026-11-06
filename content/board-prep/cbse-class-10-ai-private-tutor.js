// CBSE Class 10 AI (417): private tutor (one to one) page for 2026-27.
// Intent: "class 10 AI private tutor", "1 on 1 AI class 10", "personal AI tutor
// 417", "AI home tuition online". Angle from series.json: who should choose one to
// one over the batch, with a sample lesson plan. The page carries a fit test (who
// gains from one to one and who does not), an eight-week plan in both cadences
// (one private class a week in India, two outside India, matching the plan card),
// one private Unit 3 lesson stage by stage with a worked confusion matrix, a
// comparison of home tutor, online one to one and the batch, and a practical file
// program with viva questions.
// Distinct from cb12 (tuition: four routes, fee per class, sample weeks), cb11
// (doubts) and cb17 (crash plan).
// Verified with python3 on 2026-11-06 (scratch writers/cbse-class-10-ai-tuition/checks.py):
// spam matrix TP 80, FP 20, FN 10, TN 390 of 500: precision 0.8, recall 80/90 = 0.889,
// accuracy 470/500 = 0.94, F1 = 0.842, wrong predictions 30. Rainfall program
// [12, 0, 7, 12, 30, 5, 12]: sum 78, np.mean 11.142857142857142, np.median 12.0,
// statistics.mode 12; the program on the page was run and its output pasted.
// Viva variant with 300 for 30: total 348, mean 49.714, median 12.0 (run).
// No class length stated as a fact; no prices typed.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-private-tutor',
  code: 'cb24',
  board: 'cbse',
  themeColor: '#6B3A2A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Private Tutor (CBSE 417), 1 on 1 Online',
  description: 'A class 10 AI private tutor for CBSE 417, one to one online: who it suits better than a batch, an eight-week lesson plan and a sample private lesson.',
  ogTitle: 'Class 10 AI Private Tutor: Who Needs One to One, and What a Plan Looks Like',
  ogDesc: 'Should your child have a private tutor for CBSE Class 10 AI (417)? A fit test, an eight-week one to one plan, a full private lesson on evaluating models, and how the practical file and viva are handled.',
  twDesc: 'One to one CBSE 417 tutoring: who it suits, an eight-week plan, and a sample private lesson with the working shown.',
  headline: 'Class 10 AI Private Tutor for 2026-27: Who Should Go One to One, a Lesson Plan and a Sample Lesson',
  courseName: 'CBSE Class 10 AI (417) Private Tutoring, One to One Online',
  courseDesc: 'Personalised one to one tutoring for CBSE Class 10 Artificial Intelligence (417), session 2026-27: a diagnostic first session, a plan built on the student\'s weakest units, written answers marked line by line, Python and Orange practicals on the student\'s own file, mocks timed to school pre-boards and viva rehearsal, at days and times the family chooses; a Monday and Wednesday 9:00 PM IST batch is also available.',
  brandTag: '417 &middot; private tutor',
  navLinks: [['#fit', 'Who it suits'], ['#plan', 'Lesson plan'], ['#private-lesson', 'Sample lesson'], ['#viva', 'File and viva']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Private tutor']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; One to one 2026-27',
  h1: 'A class 10 AI private tutor, for the students a batch does not quite fit.',
  lede: 'A class 10 AI private tutor makes sense for some students and wastes money for others. If your child misses the batch evenings, is starting late, or keeps losing marks in one unit, one to one fixes that faster. If they simply need the syllabus taught in order, the group batch does it well. Below is a fit test, an eight-week plan, and one private lesson written out in full.',
  heroNote: 'Live one to one online &middot; your days, your time zone &middot; diagnostic first session &middot; plan built on weak units &middot; file and viva rehearsed on your own work &middot; first class free',
  waText: 'Hello Modern Age Coders. I am looking for a one to one private tutor for CBSE Class 10 AI 417.',
  timetable: {
    label: 'How one to one AI tutoring is scheduled',
    title: 'Private tutor',
    right: 'CBSE 417',
    rows: [
      ['In India, private classes', '1', 'a week'],
      ['Outside India, private classes', '2', 'a week'],
      ['Days and hour', 'Your', 'choice'],
      ['Group batch, if it fits: Mon and Wed', '9:00', 'PM IST']
    ],
    zones: '<b>UAE and Oman:</b> batch at 7:30 PM, or one to one at any hour. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> batch at 6:30 PM. <b>Singapore, Malaysia, Australia:</b> one to one at a local after-school hour.',
    stamps: ['Plan built on weak units', 'Monthly, stop any month']
  },
  picksH2: 'What a private 417 tutor teaches from',
  picksLede: 'One to one follows the same board course as the batch. These two companions are often added to a private plan when Python or the no-code tool is the gap.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'Board course / 417', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, re-ordered in one to one around the units your child needs first, with the file, project and vivas included.' },
    { slug: 'python-complete-masterclass-teens', code: 'Gap / Python', h3: 'Python for Teens', p: 'When the practical file stalls because Python never clicked, private sessions can slow down and rebuild it from lists upward.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Gap / Orange', h3: 'Visual ML with Orange', p: 'For students who have never opened the Orange tool the curriculum names for its data, vision and text activities.' }
  ],
  capsule: 'A class 10 AI private tutor teaches CBSE 417 one to one, so the plan starts from the student\'s own weak units instead of the batch\'s order. It suits students who cannot attend fixed evening classes, who are starting late, who keep losing marks in one unit such as Evaluating Models, or whose practical file is behind. Modern Age Coders offers personalised one to one online at the family\'s chosen days and time, one private class a week in India and two outside India, for the monthly fee shown on this page. A live Monday and Wednesday 9:00 PM IST batch is the alternative.',
  sections: [
`<section class="bx-section bx-section--tint" id="fit">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Does my child need one?</p>
      <h2>Who should choose a class 10 AI private tutor over the batch?</h2>
      <p class="bx-lede">Choose one to one when the problem is timing, a late start or a specific weak spot; choose the batch when the student needs the whole syllabus taught in order and can attend Monday and Wednesday at 9:00 PM IST. Find your child in the table.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Your child's situation</th><th scope="col">Better fit</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td>School tests, sport or other tuition on Monday or Wednesday evenings</td><td><span class="bx-fit">One to one</span></td><td>Same course on free evenings; nothing missed for a clash</td></tr>
          <tr><td>Starting 417 support in November or later</td><td><span class="bx-fit">One to one</span></td><td>The batch is moving into mocks; a private plan can teach the missing units first</td></tr>
          <tr><td>Scores well except in confusion matrix or TFIDF numericals</td><td><span class="bx-fit">One to one</span></td><td>A few sessions on one unit cost less than a term of everything</td></tr>
          <tr><td>Practical file has fewer than half its programs</td><td><span class="bx-fit">One to one</span></td><td>Sessions built around writing and explaining the student's own programs</td></tr>
          <tr><td>Quiet in groups, will not ask a question in front of others</td><td><span class="bx-fit">One to one</span></td><td>No audience; the tutor asks, the student answers</td></tr>
          <tr><td>Living in a time zone where 9:00 PM IST is school hours or midnight</td><td><span class="bx-fit">One to one</span></td><td>Scheduled at a local after-school hour</td></tr>
          <tr><td>Starting at the beginning of the session, roughly in step with school</td><td><span class="bx-fit bx-fit--no">Batch</span></td><td>The full syllabus in order, with classmates and a steady rhythm</td></tr>
          <tr><td>Motivated by working alongside others and racing the clock</td><td><span class="bx-fit bx-fit--no">Batch</span></td><td>Timed sets and mocks with a group are part of the point</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Many families use both in sequence: the batch for most of the year, then a month of one to one before the practical exam. The broader comparison with local tutors and recorded videos is on <a class="bx-link" href="/cbse-class-10-ai-tuition">Class 10 AI tuition</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="plan">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What would the sessions cover?</p>
      <h2>A sample one to one AI 417 lesson plan for eight weeks</h2>
      <p class="bx-lede">Every 1 on 1 AI class 10 plan begins with a diagnostic session and is rewritten after it, so this is an example, not a fixed course. It is for a student who has covered most of the syllabus at school but is weak in Units 3 and 6 and has six programs in the practical file.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Week</th><th scope="col">India: one private class a week</th><th scope="col">Outside India: second class that week</th><th scope="col">Set work</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>Diagnostic: 12 mixed objective items, two written answers, one program explained aloud</td><td>Unit 3: building the confusion matrix from a word problem</td><td>Plan agreed with the family</td></tr>
          <tr><td class="bx-num">2</td><td>Unit 3: precision, recall, accuracy, F1; which metric for which risk</td><td>File: two programs on lists and NumPy statistics</td><td>Three numericals with new figures</td></tr>
          <tr><td class="bx-num">3</td><td>Unit 6: text normalisation, then bag of words worked by hand</td><td>Unit 6: TFIDF on three short documents</td><td>One full bag of words table</td></tr>
          <tr><td class="bx-num">4</td><td>Unit 6 in Orange: sentiment analysis; script bot against smart bot</td><td>File: two programs on charts with Matplotlib</td><td>One four-mark NLP answer, then a rewrite</td></tr>
          <tr><td class="bx-num">5</td><td>Check test on Units 3 and 6, marked on screen</td><td>Unit 2 recap: model types sorted from scenarios</td><td>Re-attempt every lost mark</td></tr>
          <tr><td class="bx-num">6</td><td>Unit 1 and Part A: case questions on the project cycle and ethics; two Part A units</td><td>File: reading a CSV and an image; programs reach the minimum fifteen</td><td>Read every file program aloud once</td></tr>
          <tr><td class="bx-num">7</td><td>Timed Section B mock, then the marking</td><td>Project: problem canvas and data plan checked</td><td>Fix the two weakest answers</td></tr>
          <tr><td class="bx-num">8</td><td>Viva rehearsal on the file and the project</td><td>Practical mock: an unseen program on Units 4 to 7</td><td>Next month's plan written</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The plan follows the student</h3><p>If the week 5 check shows Unit 3 is fixed but Unit 6 is not, week 6 changes. In a batch the class moves on; one to one it does not have to.</p></div>
      <div class="bx-card"><h3>Same teachers as the batch</h3><p>The private tutor teaches 417 to batches as well, so the marking, mock papers and file standard are identical.</p></div>
      <div class="bx-card"><h3>Parents see the plan</h3><p>The plan written after the diagnostic is shared with the family, and so is the rewrite at the end of each month.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="private-lesson">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What happens in a private class?</p>
      <h2>Inside one personal AI tutor 417 session: evaluating models</h2>
      <p class="bx-lede">Here is week 2 of the plan above, stage by stage. Unit 3, Evaluating Models, carries 10 theory marks and most of them depend on reading one table correctly, which is exactly the kind of thing one to one fixes quickly.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Opening: last week's set work</h4><p>The student shares the three numericals. Two are right; in the third, FP and FN are swapped. The tutor asks the student to explain their table before saying anything.</p></li>
          <li class="bx-step"><h4>Find the habit, not the slip</h4><p>The student had put Predicted across the top. The fix agreed: always Reality across the top, Predicted down the side, written before any number.</p></li>
          <li class="bx-step"><h4>One new problem, worked together</h4><p>The spam filter on the right, built cell by cell from the words.</p></li>
          <li class="bx-step"><h4>The student teaches it back</h4><p>The student explains why a spam filter cares more about precision, and the tutor plays an examiner pushing back.</p></li>
          <li class="bx-step"><h4>Two solo problems, timed</h4><p>New figures, no help. Both marked at once, with the working.</p></li>
          <li class="bx-step"><h4>Close: set work and the next step</h4><p>Three more numericals; the next class moves to the NumPy statistics programs if both solo problems were right.</p></li>
        </ol>
      </div>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The worked problem</b><span>spam = positive</span></figcaption>
  <pre>A filter checks 500 emails.
It marks 100 as spam; 80 really
are spam. Of the 400 it lets
through, 10 are spam.

              Reality: Spam  Reality: Not
Predicted Spam   TP = 80       FP = 20
Predicted Not    FN = 10       TN = 390

Precision = 80 / (80 + 20)  = 0.80
Recall    = 80 / (80 + 10)  = 0.89
Accuracy  = (80 + 390) / 500 = 0.94
F1 = 2 x 0.80 x 0.89 / (0.80 + 0.89)
   = 0.84
Wrong predictions = 20 + 10 = 30</pre>
  <p class="bx-code-note">Recall is 80 / 90 = 0.889 and F1 is 0.842 before rounding.</p>
</figure>
        <p><b>Why precision here?</b> A false positive sends a real email, perhaps a school notice, to the spam folder. People tolerate a little spam in the inbox far more than a lost important mail, so this filter is judged mainly on precision. For a disease screen the reasoning flips to recall.</p>
      </div>
    </div>
    <p class="bx-mt-40">More practice in this exact shape is on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals for Class 10 AI</a>, and the rest of the unit on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="home-or-online">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. At home or online?</p>
      <h2>AI home tuition online, a tutor at home, or the batch: a straight comparison</h2>
      <p class="bx-lede">A tutor who comes home and an online one to one tutor both give undivided attention; the difference is whether they know 417 specifically and can work on the student's own computer. The batch gives less individual time but a fixed rhythm and classmates.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point to weigh</th><th scope="col">Home tutor, in person</th><th scope="col">Online one to one</th><th scope="col">Online batch</th></tr></thead>
        <tbody>
          <tr><td>Attention per class</td><td>All of it</td><td>All of it</td><td>Shared by 15 to 20</td></tr>
          <tr><td>Knows the 2026-27 unit list</td><td>Check before hiring</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Works inside the student's Jupyter or Orange file</td><td>Only if they bring the skills</td><td>Yes, by screen share</td><td>Yes, in the Wednesday lab</td></tr>
          <tr><td>Who chooses the time</td><td>Tutor and family</td><td>Family</td><td>Fixed: Mon and Wed, 9:00 PM IST</td></tr>
          <tr><td>Practice with others under time pressure</td><td>No</td><td>No, unless a batch mock is added</td><td>Yes</td></tr>
          <tr><td>Finding one abroad</td><td>Hard for a CBSE skill subject</td><td>Same as in India</td><td>Same as in India</td></tr>
          <tr><td>Billing</td><td>Varies</td><td>Monthly, the fee shown on this page</td><td>Monthly, the fee shown on this page</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>When a home tutor is the right call</h3>
        <p>A younger-seeming Class 10 student who drifts off screens, or a family where no quiet computer corner exists, may do better with someone in the room. Ask that tutor to show you Orange running and a marked answer from Unit 3 before the first month.</p>
      </div>
      <div>
        <h3>What online one to one needs at home</h3>
        <ul class="bx-check">
          <li>A laptop or desktop, not only a phone: the practical is done on it.</li>
          <li>Jupyter and Orange installed; the first session can do this together.</li>
          <li>A steady connection and a headset.</li>
          <li>A notebook for written answers, photographed after the class.</li>
        </ul>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="viva">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. And the practical half?</p>
      <h2>How a private tutor prepares the practical file and the viva</h2>
      <p class="bx-lede">One to one is at its strongest on the 50 practical marks: the file of at least 15 programs, the practical exam, the project and two vivas. Every program is the student's own, and the viva is rehearsed on exactly those programs.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A file program, written in session</b><span>Unit 4 statistics</span></figcaption>
  <pre>import numpy as np
import statistics

rain = [12, 0, 7, 12, 30, 5, 12]  # mm, one week

print("Total:", sum(rain))
print("Mean:", np.mean(rain))
print("Median:", np.median(rain))
print("Mode:", statistics.mode(rain))</pre>
  <p class="bx-code-note">Mode comes from the statistics module: NumPy has no mode function.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output, as run</b><span>Python 3 with NumPy</span></figcaption>
  <pre>Total: 78
Mean: 11.142857142857142
Median: 12.0
Mode: 12</pre>
  <p class="bx-code-note">The median is 12 because the sorted list is 0, 5, 7, 12, 12, 12, 30, and the fourth value is the middle.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Viva questions the tutor asks on this program</h3>
    <ol class="bx-qlist">
      <li>Why is the mean lower than the median here?<details><summary>Model answer</summary> The 0 mm day pulls the mean down more than the one 30 mm day pulls it up, while the median only looks at the middle value, 12.</details></li>
      <li>What would change if someone typed 300 instead of 30?<details><summary>Model answer</summary> The total becomes 348 and the mean jumps to about 49.7, but the median stays 12, because 300 still sorts to the end. That is why the median resists outliers.</details></li>
      <li>Why did you import statistics as well as NumPy?<details><summary>Model answer</summary> NumPy gives mean and median, but it has no mode function, so the mode comes from Python's statistics module.</details></li>
      <li>How would you show this week as a chart?<details><summary>Model answer</summary> With Matplotlib: plt.bar for rainfall by day, or plt.plot for a line, then plt.show().</details></li>
      <li>Which unit of the syllabus does this program belong to?<details><summary>Model answer</summary> Unit 4, Statistical Data, which is assessed in the practical rather than the theory paper.</details></li>
    </ol>
    <p class="bx-mt-40">A program list for the whole file is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the 417 project and practical file page</a>, and many more viva questions with answers are on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">Class 10 AI viva questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'One to one at your hour, or the evening batch if it fits',
  chooseLede: 'The private plan and the batch are taught by the same people from the same course. One to one is shaped around your child; the batch is shaped around the syllabus. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST',
    'Fifteen to twenty Class 10 students',
    'The full syllabus in order, every unit tested',
    'Classmates to work alongside in mocks',
    'Lab night every Wednesday for the file'
  ],
  choosePersonal: [
    'Diagnostic first, then a written plan',
    'One private class a week in India, two abroad',
    'Days and hour set with your family',
    'Weak units first; strong units only revised',
    'Your child\'s own file and project rehearsed for the viva'
  ],
  chooseAfter: 'Still unsure? The free first class ends with a recommendation, and it is not always one to one: if your child is in step with school and free on those two evenings, the batch is the sensible choice and the mentor will say so. Fees are shown in your own currency.',
  zonesH2: 'A private CBSE AI tutor for families in the Gulf and abroad',
  zonesLede: 'Abroad, one to one is often the practical choice because the batch hour may clash with local routines. Outside India the private plan is two classes a week. Here is the batch hour in local time, if it suits.',
  zonesAfter: 'For more on studying 417 from outside India, see <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about a Class 10 AI private tutor',
  faqH2: 'What families ask about a class 10 AI private tutor',
  faqs: [
    ['Is a private tutor better than a batch for class 10 AI?', 'Not for everyone. A private tutor is better when the student cannot attend fixed evenings, is starting late, or keeps losing marks in one unit. A batch is better value for a student who needs the full syllabus in order and enjoys working alongside others. The free demo is a fair way to decide.'],
    ['How many classes a week are there in 1 on 1 AI class 10 tutoring?', 'In India the personalised plan is one private class a week; outside India it is two a week. The days and the hour are set with the family and can move around school tests. Each class leaves short set work that opens the next one.'],
    ['Can a personal AI tutor 417 help with only one unit?', 'Yes. A student who is strong overall but weak in Evaluating Models or the NLP numericals can take one to one for that unit alone, then stop. Monthly billing makes a short plan possible.'],
    ['What is AI home tuition online?', 'It means one to one tuition delivered live over video instead of a tutor travelling to your home. For 417 it suits the subject well, because the practical is done on a computer and the tutor can see and fix the student\'s own Python or Orange work by screen share.'],
    ['Does a private tutor help with the practical file and project?', 'Yes, and this is where one to one is strongest. The tutor helps the student write and understand each program of the file of at least 15, guides the project in stages, and rehearses both vivas on the student\'s own work. The student writes everything; the tutor checks and questions it.'],
    ['How quickly can a private tutor cover the whole 417 syllabus?', 'It depends on where the student starts and how many classes a week. A student who has covered the theory at school mostly needs practice, marking and the practical, which can be organised in a couple of months. A student starting from nothing in winter needs a tighter plan; see the crash course page.'],
    ['Can we change the timing of one to one classes?', 'Yes. The days and hour are agreed with the family, and a class can move for a school test with notice. Outside India the time is set in your own time zone.'],
    ['What does the first one to one session involve?', 'It is a short diagnostic: a few objective items across the units, one written answer marked point by point, and one program from the file explained aloud. From that the tutor writes a plan for the month, listing the weak units first and the practical work needed, and shares it with the family.'],
    ['How much does a class 10 AI private tutor cost?', 'The one to one fee is shown on this page in your own currency, billed monthly with no admission fee. It covers one private class a week in India and two outside India, including marking, mocks and viva practice.'],
    ['Can my child try one to one before committing?', 'Yes. The first class is a free live demo. A paid priority demo is also available as a full class with a written skill report afterwards. Either way, the mentor recommends the batch or one to one honestly.']
  ],
  startH2: 'Book a free first session with a 417 tutor',
  startHtml: `        <p>The first session works like the diagnostic in week 1 of the plan above, in miniature: a few objective items, one written answer and one short program talked through. You leave with a clear view of the weak units and a suggested plan, private or batch, and no obligation to take either.</p>
        <p>Starting very late in the year? Read <a class="bx-link" href="/cbse-class-10-ai-crash-course">the Class 10 AI crash course</a> first.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI private tutor'
};
