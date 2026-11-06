// CBSE Class 10 AI (417): live doubt classes page for 2026-27.
// Intent: "class 10 AI doubt classes", "AI 417 doubt solving", "ask class 10 AI
// doubt", "live doubt session AI class 10". Angle from series.json: how live doubt
// time works inside the Monday and Wednesday batch, with sample doubts answered on
// the page. The page shows where doubt time sits in a class, eight real-shaped
// theory doubts answered in full (Units 1, 2, 3, 5, 6 and Part A), two Python
// error doubts with the broken code, the error and the fix, a how-to-ask template,
// and an honest comparison with doubt apps, forums, videos and school.
// Distinct from cb12 (tuition routes and cost per class), cb24 (one to one plan)
// and cb17 (crash plan); the sample-paper page only mentions doubts in passing.
// Verified with python3 on 2026-11-06 (scratch writers/cbse-class-10-ai-tuition/):
// F1 with P 0.9, R 0.3 = 0.45 (plain average 0.6); fraud model 990/1000 = 0.99,
// recall 0; perceptron 0.5 x 1 + (-0.3) x 1 + 0.8 x 0 - 0.1 = 0.1; 1920 x 1080 =
// 2,073,600 pixels, x 3 = 6,220,800 values. bug1.py really raises
// "TypeError: can only concatenate list (not "int") to list"; fix1.py prints
// [45 60 75] and 55.0; bug2.py raises "AttributeError: module 'numpy' has no
// attribute 'mode'"; fix2.py prints 8. Outputs pasted from the runs.
// No class length stated as a fact; no prices typed.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-doubt-classes',
  code: 'cb11',
  board: 'cbse',
  themeColor: '#3D5A3A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Doubt Classes (CBSE 417), Live Doubt Solving',
  description: 'Class 10 AI doubt classes for CBSE 417, live: how doubt time works in the Monday and Wednesday batch, plus ten real doubts answered in full on this page.',
  ogTitle: 'Class 10 AI Doubt Classes: How Live Doubt Solving Works, with Doubts Answered',
  ogDesc: 'How doubts are taken in a live CBSE Class 10 AI (417) batch, eight theory doubts and two Python error doubts answered in full, and how to ask a doubt so it is solved in one go.',
  twDesc: 'Live doubt solving for CBSE 417: where doubt time sits in each class, and ten real doubts answered with the working.',
  headline: 'Class 10 AI Doubt Classes for 2026-27: How Live Doubt Time Works, and Ten Doubts Answered',
  courseName: 'CBSE Class 10 AI (417) Live Classes with Doubt Solving',
  courseDesc: 'Live online classes for CBSE Class 10 Artificial Intelligence (417), session 2026-27, with doubt time built into every class: doubts from set work taken first, theory and Python doubts worked on a shared screen, and mock reviews run as doubt sessions, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; doubt classes',
  navLinks: [['#doubt-time', 'How it works'], ['#theory-doubts', 'Theory doubts'], ['#python-doubts', 'Python doubts'], ['#asking', 'How to ask']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Doubt classes']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Live doubt solving 2026-27',
  h1: 'Class 10 AI doubt classes that answer the doubt while the student is still thinking about it.',
  lede: 'Class 10 AI doubt classes work best when the doubt is answered live, by a teacher who can see the student\'s own working, not days later in a chat thread. This page shows where doubt time sits in each Monday and Wednesday class of our 417 batch, then answers ten doubts students actually bring, from F1 scores to a NumPy error, in full.',
  heroNote: 'Live online &middot; doubts taken first in every class &middot; worked on a shared screen &middot; Python errors fixed in the student\'s own notebook &middot; mock reviews run as doubt sessions &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live doubt classes for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When doubts are taken',
    title: 'Doubt time',
    right: 'CBSE 417',
    rows: [
      ['Monday, theory doubts first', '9:00', 'PM IST'],
      ['Wednesday, Python and Orange doubts', '9:00', 'PM IST'],
      ['After every full mock', 'Review', 'class'],
      ['Doubts answered on this page', '10', 'worked']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and East Africa:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Doubts before new work', 'Live, never a ticket']
  },
  picksH2: 'The courses whose doubts are solved here',
  picksLede: 'Doubt time belongs to the 417 course itself. The Python and Orange courses help students whose doubts keep coming from the practical side.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'Doubts / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The board course with doubt time inside every class, from Part A to the project viva.' },
    { slug: 'python-complete-masterclass-teens', code: 'Python doubts', h3: 'Python for Teens', p: 'For students whose doubts are mostly error messages: the language taught slowly enough that errors start to make sense.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Orange doubts', h3: 'Visual ML with Orange', p: 'Widget by widget practice in the no-code tool, so "my workflow shows nothing" stops being a weekly doubt.' }
  ],
  capsule: 'Class 10 AI doubt classes are live sessions where a teacher answers a student\'s questions on CBSE 417 as they arise, working through the student\'s own answer or code. In the Modern Age Coders batch, every Monday and Wednesday 9:00 PM IST class opens with doubts from the set work, doubts raised during the lesson are worked on a shared screen at once, and each full mock is followed by a review class run as a doubt session. Students who want all their time spent on their own doubts can take personalised one to one at their own hours.',
  sections: [
`<section class="bx-section bx-section--tint" id="doubt-time">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Where do doubts go?</p>
      <h2>How do live doubt sessions work in a class 10 AI batch?</h2>
      <p class="bx-lede">Doubts are not saved for a separate weekly hour. They are taken at three points: at the start of each class, during the lesson the moment they come up, and in the review class after each mock. The table shows what happens at each.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">When the doubt arises</th><th scope="col">When it is taken</th><th scope="col">How it is answered</th></tr></thead>
        <tbody>
          <tr><td>While doing set work at home</td><td>At the opening of the next Monday or Wednesday class, before new teaching</td><td>The student shows their attempt; the teacher finds the step where it went wrong</td></tr>
          <tr><td>During the lesson</td><td>Straight away, by unmuting or in the chat</td><td>Worked on the shared screen, often with a fresh example</td></tr>
          <tr><td>In a Python or Orange task</td><td>In the Wednesday lab, as it happens</td><td>The student shares their screen; the error is read together and fixed in their notebook</td></tr>
          <tr><td>In a full timed mock</td><td>In the review class that follows</td><td>Every lost mark becomes a doubt; each is explained, then re-attempted</td></tr>
          <tr><td>In a school test or worksheet</td><td>Brought to the next class</td><td>Answered if it is 417; the teacher shows how the board scheme would mark it</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Attempt first, then ask</h3><p>A doubt with an attempt attached is solved in a minute, because the mistake is visible. "I did not understand Unit 3" takes a whole class and teaches less.</p></div>
      <div class="bx-card"><h3>One doubt, many students</h3><p>In a batch of 15 to 20, one student's question is usually three other students' silent question. Answering it on the shared screen helps the whole room.</p></div>
      <div class="bx-card"><h3>Doubts become practice</h3><p>When the same doubt comes up twice, it goes into the next practice set with new numbers, so the fix is tested and not just heard.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="theory-doubts">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What kind of doubts come up?</p>
      <h2>AI 417 doubt solving: eight theory doubts, answered in full</h2>
      <p class="bx-lede">These are written the way students ask them, and answered the way a teacher answers them live: the direct answer first, then the reason, then the habit that stops the doubt returning.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Units 2 and 3: modeling and evaluation</h3>
        <ol class="bx-qlist">
          <li><b>"Why can't I just average precision and recall to get F1?"</b>
            <details open><summary>Answer</summary> Because F1 punishes a big gap between them and an average does not. Take precision 0.9 and recall 0.3. The average is 0.6, which looks fine. F1 = 2 x 0.9 x 0.3 / (0.9 + 0.3) = 0.54 / 1.2 = 0.45. The model misses most real cases, and F1 says so. <b>Habit:</b> write 2PR / (P + R) before touching the numbers.</details></li>
          <li><b>"My model is 99% accurate. Why did the answer get only half marks?"</b>
            <details><summary>Answer</summary> In a data set of 1,000 bank transactions with 10 frauds, a model that calls everything genuine is right 990 times, so 99% accurate, yet it catches no fraud at all: recall is 0. The examiner wanted you to say accuracy misleads when one class is rare, and to name recall as the metric to check. <b>Habit:</b> when one class is rare, look at the minority class first.</details></li>
          <li><b>"What is the bias actually doing in a perceptron?"</b>
            <details><summary>Answer</summary> It shifts how easily the neuron fires, whatever the inputs. With inputs 1, 1, 0, weights 0.5, -0.3, 0.8 and bias -0.1: 0.5 - 0.3 + 0 - 0.1 = 0.1. With a step rule that fires above 0, the output is 1. Make the bias -0.3 and the sum becomes -0.1, so it does not fire. Same inputs, different decision. <b>Habit:</b> add the bias last, as its own line of working.</details></li>
          <li><b>"Is a chatbot that answers from fixed menu options AI?"</b>
            <details><summary>Answer</summary> It is a script bot: it follows rules a person wrote and cannot handle a question outside them. A smart bot, such as a voice assistant, uses NLP and learns from data, so it copes with new phrasings. The board likes this as a difference question, so give one example of each. <b>Habit:</b> ask "who wrote the rule, a person or the data?"</details></li>
        </ol>
      </div>
      <div>
        <h3>Units 1, 5, 6 and Part A</h3>
        <ol class="bx-qlist" start="5">
          <li><b>"Is a 1920 x 1080 image 2 million or 6 million?"</b>
            <details><summary>Answer</summary> Both, depending on the question. It has 1920 x 1080 = 2,073,600 pixels. If it is a colour (RGB) image, each pixel stores three values, so it holds 6,220,800 numbers. Read whether the question asks for pixels or values. <b>Habit:</b> underline the word "pixels" or "values" before multiplying.</details></li>
          <li><b>"Stemming and lemmatisation look the same to me."</b>
            <details><summary>Answer</summary> Both reduce a word to a base form, but stemming just cuts off the ending and may leave a non-word, while lemmatisation returns a real dictionary word. A stemmer that simply strips "-ing" turns "caring" into "car", a real word with the wrong meaning, while lemmatisation gives "care". Lemmatisation is slower because it needs a dictionary. <b>Habit:</b> learn one example where the stem is not a real word.</details></li>
          <li><b>"In the 4Ws canvas, what goes under Where?"</b>
            <details><summary>Answer</summary> The situation or context in which the problem happens: when and where the stakeholders meet it. For a canteen food-waste project, Where is the school canteen at lunch, where plates are scraped into bins. It is not the place the solution will be built. <b>Habit:</b> fill Who, What, Where and Why in order, one line each, before any data talk.</details></li>
          <li><b>"Is 'I will score well in AI' a SMART goal?"</b>
            <details><summary>Answer</summary> No. It is not specific or measurable and has no deadline. "I will score 40 or more out of 50 in my AI theory pre-board by revising one unit every three days until 15 January" is specific, measurable, achievable, relevant and time-bound. Part A asks this shape for two marks. <b>Habit:</b> check each of the five letters in turn.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More doubts in the evaluation unit are answered with numbers on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>; the NLP ones on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">bag of words and TFIDF</a>; and the word pairs students confuse most on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="python-doubts">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. And practical doubts?</p>
      <h2>Live doubt session for class 10 AI Python errors</h2>
      <p class="bx-lede">Most Wednesday doubts are error messages. The fix is almost never to memorise the correct code; it is to read the last line of the error, which names the problem. Here are two that arrive every year, run exactly as shown.</p>
    </div>
    <h3>Doubt 9: "I want to add 5 grace marks to everyone"</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Student's code and the error</b><span>a plain list</span></figcaption>
  <pre>marks = [40, 55, 70]
print(marks + 5)

TypeError: can only concatenate
list (not "int") to list</pre>
  <p class="bx-code-note">For a list, + means join two lists. Python cannot join a number to a list, so it stops.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Fixed in class</b><span>a NumPy array</span></figcaption>
  <pre>import numpy as np
marks = np.array([40, 55, 70])
print(marks + 5)
print(marks.mean())

[45 60 75]
55.0</pre>
  <p class="bx-code-note">A NumPy array adds 5 to every element. This is why Unit 7 uses NumPy for data.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Doubt 10: "NumPy has mean and median, so where is mode?"</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Student's code and the error</b><span>guessing a name</span></figcaption>
  <pre>import numpy as np
scores = [6, 8, 8, 9, 5]
print(np.mode(scores))

AttributeError: module 'numpy'
has no attribute 'mode'</pre>
  <p class="bx-code-note">AttributeError means "this name does not exist inside that module". NumPy simply has no mode function.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Fixed in class</b><span>the statistics module</span></figcaption>
  <pre>import statistics
scores = [6, 8, 8, 9, 5]
print(statistics.mode(scores))

8</pre>
  <p class="bx-code-note">Python's built-in statistics module has mode. Good to know for the viva too.</p>
</figure>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Read the last line</h3><p>TypeError, NameError, AttributeError and IndentationError each point to a different kind of fix. Students learn the four that cover most Class 10 errors.</p></div>
      <div class="bx-card"><h3>Orange doubts too</h3><p>"My Test and Score widget is empty" is usually a missing link or no target column set. Shared screens make it a thirty-second fix.</p></div>
      <div class="bx-card"><h3>Into the file</h3><p>A program whose error was solved and explained is a strong practical file entry, because the student can talk about it in the viva.</p></div>
    </div>
    <p class="bx-mt-40">The full Python side of the subject is on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>, and the no-code tool on <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="asking">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do I ask well?</p>
      <h2>How to ask a class 10 AI doubt so it is solved in one go</h2>
      <p class="bx-lede">Bring three things: the exact question, what you tried, and where you got stuck. A doubt asked like that is usually solved in under two minutes and teaches the rest of the class something too.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Name the source</h4><p>"Worksheet question 4", "my school pre-board, Section B", or "file program 7". The teacher can then see the exact wording.</p></li>
          <li class="bx-step"><h4>Show the attempt</h4><p>A photo of the written answer, or the notebook on screen. Even a wrong attempt shows where the thinking turned.</p></li>
          <li class="bx-step"><h4>Point to the stuck step</h4><p>"I got TP and FP, but not FN" is far more useful than "I don't get confusion matrix".</p></li>
          <li class="bx-step"><h4>Try the check question</h4><p>After the answer, the teacher gives a quick variant. Solving it is how both of you know the doubt is closed.</p></li>
        </ol>
      </div>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A doubt, asked well</b><span>template</span></figcaption>
  <pre>Question: Worksheet 3, Q6 (Unit 6)
Asked:   TFIDF of "rain" in doc 2
I did:   TF = 2, IDF = log(3/3)
         so I got 0. Answer key
         says 0 too, but why is a
         word used twice worth 0?
Stuck:   the meaning, not the maths</pre>
  <p class="bx-code-note">Answer in class: a word in every document cannot tell the documents apart, so its IDF, and its TFIDF, is 0 however often it appears.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">Students who are shy in a group can type the doubt in the class chat; the teacher reads it out without the name if asked. Those who prefer every minute spent on their own questions often choose <a class="bx-link" href="/cbse-class-10-ai-private-tutor">a Class 10 AI private tutor</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="where-else">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Is an app enough?</p>
      <h2>Live doubt classes compared with doubt apps, forums, videos and school</h2>
      <p class="bx-lede">An app or forum gives an answer; a live doubt class finds out why the doubt happened. For quick facts the free routes are fine. For doubts that keep coming back, especially numericals and Python errors, a teacher who sees the attempt is faster.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Route</th><th scope="col">Speed</th><th scope="col">Sees your attempt</th><th scope="col">Knows the 2026-27 units</th><th scope="col">Checks the doubt is closed</th></tr></thead>
        <tbody>
          <tr><td>AI doubt-solving app</td><td>Instant</td><td>Only if you type it all</td><td>Not reliably</td><td>No</td></tr>
          <tr><td>Online forum or group</td><td>Hours to days</td><td>Rarely</td><td>Depends who answers</td><td>No</td></tr>
          <tr><td>Recorded video</td><td>Instant, if one fits</td><td>No</td><td>Check the date</td><td>No</td></tr>
          <tr><td>School teacher</td><td>Next period, if time allows</td><td>Yes</td><td>Yes</td><td>Sometimes</td></tr>
          <tr><td>Live batch doubt time</td><td>Same class or the next one</td><td>Yes, on screen</td><td>Yes</td><td>Yes, with a check question</td></tr>
          <tr><td>One to one</td><td>Within the session</td><td>Yes</td><td>Yes</td><td>Yes, and re-tested later</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">A word on AI apps: they can be useful for a definition, but on 417 they sometimes answer from the older chapter list or set long theory answers on Unit 4, which is practical only this year. Check any app answer against the unit list on <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the syllabus explained</a>, or bring it to class as a doubt.</p>
  </div>
</section>`
  ],
  chooseH2: 'Doubt time in the evening batch, or a whole session of your own doubts',
  chooseLede: 'In the batch, doubts share the class with new teaching. In one to one, the session can be all doubts if that is what the week needs. Same teachers, same 417 course. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST',
    'Set-work doubts taken before new teaching',
    'Python errors fixed live in the Wednesday lab',
    'Mock review classes run as doubt sessions',
    'Fifteen to twenty students, one teacher'
  ],
  choosePersonal: [
    'A full session on your own doubts when needed',
    'Days and time set with you, any time zone',
    'Each doubt re-tested with a new variant later',
    'Ideal for a student shy of asking in a group',
    'Same 417 syllabus and teachers'
  ],
  chooseAfter: 'If doubts come mostly from one unit, a few one to one sessions clear them; if they come from everywhere, the batch, with its doubt time every class, is the steadier fix. Fees appear in your own currency.',
  zonesH2: 'Class 10 AI doubt classes for CBSE students in the Gulf and abroad',
  zonesLede: 'Students in CBSE schools abroad meet the same doubts, often with fewer people around who know 417. The batch, with its doubt time, lands at these local hours.',
  zonesAfter: 'If the batch hour does not suit, one to one runs at a local time. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI doubt classes',
  faqH2: 'What students ask about class 10 AI doubt classes',
  faqs: [
    ['Where can I ask class 10 AI doubts?', 'In our live batch, doubts are asked in every Monday and Wednesday 9:00 PM IST class: doubts from set work are taken first, and doubts during the lesson are answered on the shared screen at once. One to one students can spend whole sessions on their doubts. The first class is a free demo, so you can bring a doubt to it.'],
    ['Are doubt classes separate from regular classes?', 'No. Doubt time is built into every class rather than held as a separate session, so no doubt waits for a special day. After each full mock, the review class works as a dedicated doubt session on lost marks.'],
    ['Can I ask doubts from my school worksheet or pre-board?', 'Yes, if they are 417 questions. Bring the question and your attempt; the teacher answers it and shows how the CBSE marking scheme would award the marks.'],
    ['How are Python doubts solved online?', 'The student shares their screen, the error message is read together, and the code is fixed in the student\'s own notebook so the corrected program can go into the practical file. Most Class 10 errors fall into a few types, such as TypeError and AttributeError, which students learn to read themselves.'],
    ['Can I ask doubts on Orange Data Mining?', 'Yes. Orange doubts are taken in the Wednesday lab with the student\'s workflow on the shared screen. Common ones are a widget with no output because a link is missing, or a model that will not train because no target column is set.'],
    ['What if I am too shy to ask a doubt in front of the batch?', 'Type it in the class chat; the teacher can read it out without your name. Students who prefer complete privacy usually do better one to one, where every question is theirs.'],
    ['Is there doubt support for the practical file and viva?', 'Yes. Doubts about any program in the file are taken in class, and the viva is rehearsed, which tends to surface the doubts a student did not know they had.'],
    ['Are AI doubt-solving apps good for CBSE 417?', 'For a quick definition, sometimes. But apps may answer from the older chapter list, or treat Statistical Data as a theory unit when in 2026-27 it is practical only. They also cannot see why you made a mistake. Check app answers against the current unit list.'],
    ['Is live doubt solving included in the fee?', 'Yes. Doubt time is part of every class and is covered by the monthly fee shown on this page, for the batch or one to one. There is no separate doubt fee and no admission fee.']
  ],
  startH2: 'Bring one AI doubt to a free live class',
  startHtml: `        <p>Come to the free first class with a 417 question that has been bothering you, from a worksheet, a sample paper or your file. The teacher will solve it with you on screen, give you a check question, and then show a short part of a normal lesson, so you see both halves of how the class runs.</p>
        <p>Want to test yourself first? Try <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">the Class 10 AI MCQ bank</a> and bring the ones you missed.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI doubt classes'
};
