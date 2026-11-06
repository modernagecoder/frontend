// Class 10 AI (417) tuition for Bengaluru families on the CBSE board: live online,
// no centre. Intent: "class 10 AI tuition Bangalore", "AI classes Bengaluru CBSE",
// "417 tutor Bangalore". Angle (series.json cb38): Bengaluru page for CBSE families in
// a city with many boards. Searches run 2026-11-06 return syllabus pages, textbooks
// and a school pre-board listing, but no Bengaluru tuition that names 417, so the page
// first sorts out which board the child is on, then gives the CBSE regional office for
// Karnataka, a worked Computer Vision question with a program, the class week and how
// the school practical is prepared on Python and Orange.
// Local facts: CBSE regional offices page (cbse.gov.in/cbsenew/ro.html), pulled raw
// with curl on 2026-11-06: Regional Office Bengaluru, Hesaraghatta Main Road,
// Chikkabanavara, Bengaluru 560090, covers Karnataka. (Chennai's office covers Andhra
// Pradesh, Tamil Nadu, Telangana, Puducherry and the Andaman and Nicobar Islands.)
// Karnataka's own Class 10 exam is the SSLC (state board), written in general terms.
// 417 cannot be combined with Computer Applications (165): as on the Gulf page. No
// school counts (no official figure found) and no school names.
// Every number was recomputed with python3 and NumPy on 2026-11-06 (scratch
// writers/class-10-ai-tuition-delhi/py/blr.py; the program on the page was run as
// printed and its output pasted): 1280 x 720 = 921,600 pixels, x 3 = 2,764,800 values;
// 640 x 360 = 230,400, x 3 = 691,200; 2^8 = 256; (200 + 120 + 40) / 3 = 120;
// (90 + 0 + 30) / 3 = 40; array shape (2, 2, 3), 4 pixels, grayscale [[120 10]
// [255 40]], shape (2, 2).
'use strict';

module.exports = {
  slug: 'class-10-ai-tuition-bangalore',
  code: 'cb38',
  board: 'cbse',
  themeColor: '#4A3F6B',
  dateModified: '2026-11-06',
  areaServed: [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'Country', name: 'India' }],
  title: 'Class 10 AI Tuition Bangalore: CBSE 417, Live Online',
  description: 'Class 10 AI tuition for Bangalore students on CBSE: live online 417 classes at 9:00 PM IST on Monday and Wednesday, practicals and viva included. Free demo.',
  ogTitle: 'Class 10 AI Tuition in Bangalore for CBSE Students, Live Online',
  ogDesc: 'For Bengaluru families on the CBSE board: live online Class 10 Artificial Intelligence (417) tuition, which board needs what, the Karnataka regional office, a Computer Vision question worked with a NumPy program, and how the school practical on Python and Orange is prepared.',
  twDesc: 'CBSE Class 10 AI (417) tuition for Bengaluru, live online: which board, the regional office, a worked pixel question and program.',
  headline: 'Class 10 AI Tuition in Bangalore for CBSE Students: Live, Online, Board-Specific',
  courseName: 'CBSE Class 10 AI (417) Tuition for Bengaluru Students, Live Online',
  courseDesc: 'Live online tuition in CBSE Class 10 Artificial Intelligence (417) for Bengaluru students, session 2026-27: Part A and the five theory units, the practical units in Python and Orange, the program file, project and vivas the school assesses, and timed mock papers, in a Monday and Wednesday 9:00 PM IST group batch or personalised one to one.',
  brandTag: '417 &middot; Bengaluru',
  navLinks: [['#boards', 'Which board'], ['#worked', 'Worked CV question'], ['#lab', 'School practical'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'AI tuition in Bangalore']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; For CBSE students in Bengaluru',
  h1: 'Class 10 AI tuition in Bangalore, for the students whose school is on CBSE.',
  lede: 'Class 10 AI tuition in Bangalore is a narrower search than it looks. Bengaluru children write the state SSLC, ICSE, CBSE and international exams, and only CBSE has Artificial Intelligence as subject 417. If that is your child, our live online class teaches exactly that paper and its practical, on Monday and Wednesday at 9:00 PM, from home: we have no Bengaluru centre. Below: which board needs what, the regional office for Karnataka, one Computer Vision question worked from paper to program, and the way we get students ready for the lab day at school.',
  heroNote: 'Live online, no Bengaluru centre &middot; CBSE 417 only &middot; Mon and Wed 9:00 PM &middot; Python and Orange practicals &middot; mocks and viva rehearsal &middot; first class free',
  waText: 'Hello Modern Age Coders. We are in Bengaluru, CBSE board, and want Class 10 AI 417 classes.',
  timetable: {
    label: 'Class 10 AI tuition for Bengaluru, slots',
    title: 'Bengaluru, CBSE',
    right: 'Code 417',
    rows: [
      ['Monday: theory units, Part A', '9:00', 'PM IST'],
      ['Wednesday: lab half, project', '9:00', 'PM IST'],
      ['Theory units in the paper', '5', 'of 7'],
      ['Commute to class', '0', 'km']
    ],
    zones: '<b>Whitefield to Yelahanka, Electronic City to Hebbal:</b> the same 9:00 PM class. <b>Late office hours at home?</b> One to one on a slot you choose.',
    stamps: ['CBSE 417 only', 'Practical half taught too']
  },
  picksH2: 'Courses Bengaluru CBSE students take for 417',
  picksLede: 'The 417 course that holds the Bengaluru students\' evening group, a Python course for the 50 marks won in the school lab, and an AI and machine learning course for students who want to go past the syllabus after the board paper.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Five theory units and Part A on Mondays, the practical units, file and project on Wednesdays, and mock papers in the last weeks.' },
    { slug: 'python-complete-masterclass-teens', code: 'Lab half / Python', h3: 'Python for Teens', p: 'Arrays, images as numbers, text and charts in Jupyter: the programs behind the Computer Vision and statistics tasks in the practical.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Beyond the paper / AI and ML', h3: 'AI and ML for Teens', p: 'For the student who enjoyed 417 and wants real models, datasets and projects once Class 10 is finished.' }
  ],
  capsule: 'Class 10 AI tuition in Bangalore applies to students at CBSE schools, because Artificial Intelligence (417) is a CBSE skill subject; Karnataka state board and ICSE students sit different papers. Modern Age Coders teaches 417 live online, with no Bengaluru centre. The group class meets every Monday and Wednesday evening from 9:00 PM IST; a private one to one plan is the other option, booked to the family\'s week. Teaching spans Part A, the five theory units, and the school-run practical: Python and Orange tasks, the program file, the project and both vivas, with timed mocks. Karnataka\'s CBSE schools come under the board\'s Bengaluru regional office.',
  sections: [
`<section class="bx-section bx-section--tint" id="boards">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Is this the right page for my child's board?</p>
      <h2>Which board is your child on? AI 417 belongs to CBSE only</h2>
      <p class="bx-lede">Subject 417 exists only for students at CBSE-affiliated schools. In a city where neighbours on the same road may be on four different boards, it is worth checking before booking any tuition.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Your child's school</th><th scope="col">Class 10 exam</th><th scope="col">The computing subject</th><th scope="col">Where to look</th></tr></thead>
        <tbody>
          <tr><td>CBSE</td><td>CBSE Class 10 board exam</td><td>Artificial Intelligence (417) as the skill subject; some take Information Technology (402) or Computer Applications (165) instead</td><td>This page</td></tr>
          <tr><td>ICSE (CISCE)</td><td>ICSE Class 10</td><td>Computer Applications, taught in Java with BlueJ</td><td><a class="bx-link" href="/icse-computer-tuition-bangalore">ICSE computer tuition in Bangalore</a></td></tr>
          <tr><td>Karnataka state board</td><td>SSLC</td><td>The state syllabus; no subject 417</td><td>Not covered by this series</td></tr>
          <tr><td>IB or Cambridge</td><td>MYP or IGCSE</td><td>Their own computing courses</td><td>Not covered by this series</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Two traps worth knowing. First, 417 cannot be taken together with Computer Applications (165), so a CBSE student has one or the
      other. Second, some CBSE schools offer 402 rather than 417; a student on IT does not need this page. If you are still choosing
      for Class 9, the comparison is on <a class="bx-link" href="/ai-417-vs-it-402-class-10">AI 417 vs IT 402</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" id="office">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which CBSE office covers Bengaluru?</p>
      <h2>CBSE schools in Karnataka report to the Bengaluru regional office</h2>
      <p class="bx-lede">CBSE's Bengaluru regional office, on Hesaraghatta Main Road in Chikkabanavara, covers Karnataka. That is how the board\'s own list of regional offices read when we looked it up on 6 November 2026. Tamil Nadu, Andhra Pradesh and Telangana schools are under Chennai, not Bengaluru.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>What the school does</h3><p>Enrols each Class 10 candidate with CBSE under code 417, passes on the admit card, which names the exam centre, and runs the practical half itself. Families seldom need the regional office directly.</p></div>
      <div class="bx-card"><h3>What is national</h3><p>The 2026-27 curriculum, the 50-mark theory paper and the 50 practical marks are the same for a student in Jayanagar as in Jaipur. So is the date sheet when CBSE publishes it; see <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the exam date and paper pattern page</a>.</p></div>
      <div class="bx-card"><h3>What we did not find</h3><p>An official count of Bengaluru CBSE schools that offer 417. We would rather print nothing than a guess, so there is no figure here. The school timetable tells you whether your child takes AI.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="worked">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does a class teach, concretely?</p>
      <h2>A worked Computer Vision question, from paper to program</h2>
      <p class="bx-lede">Unit 5, Computer Vision, is worth 4 theory marks, but its ideas run straight into the practical, so a good class takes one question from the written answer to working code. This question is ours.</p>
    </div>
    <div class="bx-card">
      <h3>Question</h3>
      <p>A traffic camera records frames of 1280 x 720 pixels in colour. (a) How many pixels does one frame have? (b) How many values are stored for one frame in RGB? (c) If each value uses 8 bits, what range can a pixel value take? (d) A pixel reads (200, 120, 40). What is its grayscale value by the averaging method?</p>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Written answer</h3>
        <ol class="bx-qlist">
          <li>Pixels = width x height = 1280 x 720 = <b>921,600</b>.</li>
          <li>RGB stores three values per pixel: 921,600 x 3 = <b>2,764,800</b>.</li>
          <li>8 bits give 2<sup>8</sup> = 256 levels, so values run from <b>0 to 255</b>.</li>
          <li>(200 + 120 + 40) / 3 = 360 / 3 = <b>120</b>.</li>
        </ol>
        <p>A follow-up we set in class: a 640 x 360 thumbnail has 230,400 pixels and 691,200 RGB values, a quarter of the full frame because both sides are halved.</p>
      </div>
      <div>
        <h3>Where students lose the marks</h3>
        <ul class="bx-check">
          <li>Multiplying by 3 in part (a), which asks for pixels, not values.</li>
          <li>Writing the range as 1 to 256 instead of 0 to 255.</li>
          <li>Leaving out the working: a bare 120 shows no method.</li>
        </ul>
      </div>
    </div>
    <h3 class="bx-mt-40">The same idea as a practical program: a tiny RGB image turned grayscale</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program</b><span>NumPy, image as an array</span></figcaption>
  <pre>import numpy as np

img = np.array([[[200, 120, 40], [10, 10, 10]],
                [[255, 255, 255], [90, 0, 30]]], dtype=np.uint8)
print("Shape:", img.shape)
print("Pixels:", img.shape[0] * img.shape[1])
gray = img.mean(axis=2).astype(np.uint8)
print("Grayscale:")
print(gray)
print("Shape after:", gray.shape)</pre>
  <p class="bx-code-note">axis=2 averages across the three colour channels of each pixel, which is exactly part (d) done for every pixel at once.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>Shape: (2, 2, 3)
Pixels: 4
Grayscale:
[[120  10]
 [255  40]]
Shape after: (2, 2)</pre>
  <p class="bx-code-note">The first pixel gives 120, as in the written answer. The last, (90, 0, 30), gives 120 / 3 = 40. The third number in the shape, 3, disappears because grayscale keeps one value per pixel.</p>
</figure>
    </div>
    <p class="bx-mt-40">More questions on pixels, convolution and CNNs are on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">the Computer Vision questions page</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="week">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What happens before, during and after each class?</p>
      <h2>The 417 week for a Bengaluru student, around a 9 PM start</h2>
      <p class="bx-lede">The class starts at 9:00 PM because by then the school day, the ride home and most activities are done. Each class has a little work before it and a little after, so the week adds up without taking over the evening.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col"></th><th scope="col">Before class</th><th scope="col">In class, 9:00 PM</th><th scope="col">After class</th></tr></thead>
        <tbody>
          <tr><td>Monday</td><td>Read the textbook pages named last time, ten minutes</td><td>One theory topic taught, then objective, short and case questions answered and marked on screen</td><td>A worksheet on the same topic, marked in the next class</td></tr>
          <tr><td>Wednesday</td><td>Open Jupyter and run last week's program once</td><td>A file program or Orange workflow built, broken and fixed, then explained aloud; a project step</td><td>Write the program into the file with its output and two lines on what it does</td></tr>
          <tr><td>From January</td><td>Revise the unit named for the mock</td><td>Mock papers reviewed question by question</td><td>Rewrite every answer that lost marks</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Doubts are taken when they arise, not saved for a separate session: a student unmutes or shares their screen and the class pauses
      on it. Full papers come from <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock
      test series</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="lab">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do online classes prepare a practical that happens at school?</p>
      <h2>Python or Orange in the school practical: prepare for both</h2>
      <p class="bx-lede">Your school sets the practical task, the date and the examiner, and the 417 curriculum leaves room for both code and no-code tools. So students prepare the same task both ways and arrive able to do whichever the school asks.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The 50 practical marks, as the school awards them</h3>
        <ul class="bx-check">
          <li><b>Practical file, 15:</b> at least 15 programs, written and run during the year.</li>
          <li><b>Practical exam, 15:</b> a task on the day, drawn from the practical units: Statistical Data, Computer Vision, NLP and Advance Python.</li>
          <li><b>Viva, 5:</b> questions on the file and the practical units.</li>
          <li><b>Project, 10, and project viva, 5:</b> one AI project taken through the project cycle and explained aloud.</li>
        </ul>
      </div>
      <div>
        <h3>How each piece is prepared online</h3>
        <p>The file grows by one program most Wednesdays. The program above, for example, goes in with its output and a short explanation. Each image task is also done in Orange, so a student who meets a no-code task on the day has already built that workflow once.</p>
        <p>In December there is a timed rehearsal on an unseen task, watched over a shared screen. Mock vivas follow, with the habit we drill hardest: answer, then give the reason. The question bank is on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">the viva questions page</a>, and the project stages on <a class="bx-link" href="/cbse-class-10-ai-project-ideas">the project ideas page</a>.</p>
      </div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Two ways to study 417 from Bengaluru',
  chooseLede: 'Both run on the same CBSE 2026-27 course with the same teachers and include the practical half. The difference is time: the batch is Monday and Wednesday at 9:00 PM, one to one is booked to your week. Monthly fees, nothing payable on admission.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM, joined from any part of Bengaluru',
    'Fifteen to twenty CBSE Class 10 students',
    'Theory, Part A, Python and Orange practicals',
    'File, project and both vivas prepared',
    'Mock papers reviewed live'
  ],
  choosePersonal: [
    'A time that suits your household, weekday or weekend',
    'Useful when 9 PM clashes with other tuition',
    'More hours on Computer Vision or the Python tasks',
    'Paced to your school\'s pre-board calendar',
    'Same teachers, same CBSE 417 course'
  ],
  chooseAfter: 'Bengaluru students who can keep Monday and Wednesday evenings free usually choose the batch. Those with other tuition on those nights, or who want an hour of a teacher\'s full attention for the practical, choose one to one. The mentor suggests one after the free demo; both monthly fees appear above.',
  zonesLabel: 'Heading overseas?',
  zonesH2: 'The class from a CBSE school outside India',
  zonesLede: 'If your family moves out of Bengaluru and your child continues at a CBSE school abroad, the same live class can follow. These are its times in the countries that have CBSE schools.',
  zonesAfter: 'Moving does not restart the course: the file, the project and the teacher continue. Where the local time is unworkable, the class turns into one to one at a sensible hour.',
  faqLabel: 'Questions from Bengaluru parents',
  faqH2: 'Class 10 AI tuition in Bangalore: questions parents ask',
  faqs: [
    ['Do you offer class 10 AI tuition in Bangalore?', 'Yes, as live online classes; there is no Modern Age Coders centre in Bengaluru. Students taking Artificial Intelligence (417) at a CBSE school log in to the twice-weekly group at 9:00 PM IST (Mondays and Wednesdays) or book private classes on days that suit them. Both the written paper and the lab half are taught.'],
    ['My child is on the Karnataka state board. Is AI 417 for them?', 'No. Subject 417 is a CBSE skill subject, so it is examined only for students at CBSE-affiliated schools. State board students write the SSLC, which has its own syllabus. This page and its classes are for CBSE students. If your child moves from a state board school to a CBSE school for Class 9, 417 becomes an option then.'],
    ['We are on ICSE. Is there a Java equivalent?', 'Yes. ICSE students take Computer Applications in Java with BlueJ, a different paper with its own internal assessment. We teach it in a separate small batch; see the ICSE computer tuition in Bangalore page linked on this page. It is a mini batch for families in India, with one to one as the other choice.'],
    ['How do I find a 417 tutor in Bangalore?', 'Check four things: the tutor teaches the 2026-27 unit names, knows that Statistical Data and Advance Python are tested only in the practical, uses Python and Orange, and prepares the file, project and viva. A free live class shows you those things better than a phone call.'],
    ['Which CBSE regional office covers Bengaluru schools?', 'The Bengaluru regional office, on Hesaraghatta Main Road in Chikkabanavara, covers Karnataka, according to the regional offices page on cbse.gov.in. Your school deals with it for registration and admit cards; families normally do not need to. Schools in Tamil Nadu, Andhra Pradesh and Telangana are under Chennai instead.'],
    ['Are AI classes for Bengaluru CBSE students only theory?', 'No. Half of the 100 marks are practical, awarded by the school for the program file, a task on lab day, the project and two oral rounds. Wednesday classes teach Python and Orange for those tasks, build the file and project, and rehearse the viva.'],
    ['Is 9 PM too late for a Class 10 student?', 'For many it is the first hour without school, travel or activities. If it is too late for your child, one to one can be set earlier in the evening or on a weekend, and moved when the school calendar changes.'],
    ['Can my child take both AI 417 and Computer Applications 165?', 'No. CBSE does not allow 417 to be taken with Computer Applications (165), so a student has one or the other. If your child is on 165, these classes are not the right match. Check the subject list on the school timetable or the registration slip if you are unsure which code your child has.'],
    ['How are fees paid?', 'Month by month. The fees panel on this page shows the group batch and the one to one plan as monthly amounts; there is no admission charge and no term lock-in, so you can stop after any month. The trial class costs nothing.'],
    ['How do we begin?', 'Send your number through the form, or message on WhatsApp. We ring back, fix a time, and your child sits a full live 417 class for free. You choose between the batch and one to one only after that, with the mentor\'s honest view of which suits.']
  ],
  startH2: 'Book a free live 417 class from Bengaluru',
  startHtml: `        <p>Add your number to the form and we will phone at a convenient time to fix the free class. Your child joins from home, solves a 417 question with the teacher, and sees the answer marked against value points. On a Wednesday, they also see a practical program built live.</p>
        <p>Still deciding on the subject? Read <a class="bx-link" href="/ai-vs-computer-applications-class-10">AI or Computer Applications for Class 10</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Tuition for Bengaluru students, live online'
};
