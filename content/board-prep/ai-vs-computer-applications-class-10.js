// CBSE Class 10: Artificial Intelligence (417), Information Technology (402) or Computer
// Applications (165)? A three-way decision page for parents choosing in Class 9.
// Intent: "AI or computer applications class 10", "417 vs 165", "which skill subject to
// choose class 10", "AI vs IT vs computer applications".
// Distinct from cb20 (417 against 402 only, paper blocks and practical tables in detail):
// this page is the two-year Class 9 to 10 view of all three, the 165 HTML subject, the
// combination rules and a parent's decision table. It sends the 417/402 detail to cb20.
// Sources, downloaded and read 2026-11-06 (text extracted with pypdf):
//  - 165 Computer Applications Class X 2026-27 (CurriculumMain27/SecPart1/
//    Computer_Applications_SecP1X_2026-27.pdf): Networking 15, HTML 25, Cyber ethics 10,
//    practical 50 = lab test 20 (design one web page from a diagram), report file 15 (at
//    least 10 HTML pages), viva 5, project 10; periods theory 55, practical 65.
//  - 165 Class IX 2026-27 (Computer_Applications_SecP1IX_2026-27.pdf): Basics of IT 20,
//    Cyber safety 15, Office tools 15, lab 50 = lab test 30 (word 10, spreadsheet 10,
//    presentation 10), report file 8 + viva 2, project 10.
//  - 165 SQP 2026-27 (SQP/ClassX_2026_27/ComputerApplication-SQP.pdf): 2 h, 50 marks,
//    sections A to E, 12x1, 7x2, 4x3, 1x4, 2x4 case-based, all compulsory with internal
//    choice; "no change in the Question Paper Design" for 2026-27.
//  - 417 Class IX 2026-27 (skilleducation curriculums/2026-2027/sec/417-AI-IX.pdf): Part B
//    AI Reflection, Project Cycle and Ethics 10; Data Literacy 10; Math for AI (Statistics
//    and Probability) 7; Introduction to Generative AI 5; Introduction to Python 8;
//    practical file 15, practical exam 15, viva 5, project 15 (related to the SDGs).
//  - 402 Class IX 2026-27 (402-IT-IX.pdf): Intro to IT-ITeS 4, Data Entry and Keyboarding
//    6, Digital Documentation 10, Electronic Spreadsheet 10, Digital Presentation 10;
//    practical exam 15, written test 10, viva 10, portfolio 10, viva 5.
//  - 417 and 402 Class X 2026-27 and the 402 2025-26 SQP blueprint: see cb20's header.
//  - Secondary curriculum 2026-27 Part 1: 165 listed with theory 50, 2 h, internal 50;
//    "Out of the two subjects with codes 165 and 402, only one subject can be offered";
//    Classes IX and X a composite course; sixth subject "skill-based or another subject".
// Sums recomputed with python3 (scratch calc/cb34.py): every Part B and practical = 40/50;
// 165 SQP 26 items = 50 marks; 417/402 SQP 46 printed, 34 answered.
// 2028 scheme: press reports from October 2026 only, labelled reported, not yet notified.
// Left out: pass marks or pass rules per subject (unconfirmed for AI), subject averages,
// any claim that a school requires one subject for Class 11 admission.
'use strict';

module.exports = {
  slug: 'ai-vs-computer-applications-class-10',
  code: 'cb34',
  board: 'cbse',
  themeColor: '#2F5D50',
  dateModified: '2026-11-06',
  title: 'AI or Computer Applications in Class 10? 417, 402 or 165',
  description: 'AI or computer applications class 10? For Class 9 parents: CBSE 417, 402 and 165 compared over two years, with marks, practicals, rules and a checklist.',
  ogTitle: 'AI, IT or Computer Applications in CBSE Class 10: a Parent\'s Guide',
  ogDesc: 'Artificial Intelligence (417), Information Technology (402) and Computer Applications (165) compared across Class 9 and Class 10 from the 2026-27 CBSE curricula: what each teaches, how each is examined, which combinations are allowed, and how to choose.',
  twDesc: 'AI 417, IT 402 or Computer Applications 165? The two-year view from the 2026-27 CBSE curricula, the rules, and a parent\'s checklist.',
  headline: 'AI or Computer Applications in Class 10: CBSE 417, 402 and 165 Compared for Parents Choosing in Class 9',
  courseName: 'CBSE Class 10 AI (417) Board Preparation, Live Online',
  courseDesc: 'Live online classes for CBSE Class 10 Artificial Intelligence (417), session 2026-27: the theory units taught in exam order, Python and Orange practicals, the practical file and project, viva rehearsal and timed mock papers, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417, 402 or 165',
  navLinks: [['#three', 'The three subjects'], ['#two-years', 'Class 9 to 10'], ['#rules', 'Rules'], ['#parents', 'Checklist']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'AI, IT or Computer Applications?']],
  eyebrow: 'CBSE Classes 9 and 10 &middot; Choosing the sixth subject &middot; AI 417, IT 402, Computer Applications 165 &middot; 2026-27',
  h1: 'AI or computer applications in Class 10? A two-year guide for parents deciding in Class 9.',
  lede: 'Whether to pick AI or computer applications for class 10 is a decision most families actually make in Class 9, because CBSE treats the two years as one course. Three computer subjects compete for the same slot: Artificial Intelligence (417), Information Technology (402) and Computer Applications (165). This guide reads all three from the official 2026-27 curricula, shows what your child would study in each year, sets out the combination rules and ends with a checklist. We teach AI 417, and we are clear about when another subject suits a child better.',
  heroNote: 'Live online &middot; all three subjects read from the 2026-27 CBSE curricula &middot; neutral parent checklist &middot; 417 batch Monday and Wednesday &middot; first class free',
  waText: 'Hello Modern Age Coders. We are choosing between AI, IT and Computer Applications for Class 9 and 10 and want advice.',
  timetable: {
    label: 'When the 417 batch meets',
    title: 'Class 10 AI batch',
    right: 'CBSE 417',
    rows: [
      ['Monday, AI theory', '9:00', 'PM IST'],
      ['Wednesday, Python practicals', '9:00', 'PM IST'],
      ['Computer subjects compared here', '3', 'codes'],
      ['Practical share in each subject', '50', 'marks']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya, Uganda, Tanzania:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Written for Class 9 parents', 'We teach 417 only']
  },
  picksH2: 'If AI is the choice: courses that support it',
  picksLede: 'Our live 417 board course, plus two courses that help a younger student get ready for it: Python for the practical side, and broader AI and machine learning for a child who wants to go beyond the syllabus.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417', h3: 'CBSE AI for Class 9 to 12', p: 'The CBSE 417 course itself, unit by unit, with the practical file, project and viva prepared through the year rather than at the end.' },
    { slug: 'python-complete-masterclass-teens', code: 'Python / ages 13+', h3: 'Python for Teens', p: 'A gentle start in Python for a Class 9 student, so that the Class 10 programs with NumPy and Matplotlib feel familiar when they arrive.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Beyond the syllabus', h3: 'AI and ML for Teens', p: 'For a child whose interest outgrows the board course: real models, real datasets and small projects, at a teenager\'s pace.' }
  ],
  capsule: 'AI or computer applications in Class 10 comes down to what your child enjoys. Each CBSE option is marked out of 100, half written paper and half practical. Artificial Intelligence (417) teaches how AI is built and judged, with Python. Information Technology (402) teaches office software and databases in LibreOffice. Computer Applications (165) teaches networking, HTML and CSS web pages, and cyber ethics. Only one of 165 and 402 is allowed. Decide in Class 9, since the two years form one course. If you pick AI, Modern Age Coders runs a live 417 batch on Mondays and Wednesdays at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="three">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are the three options?</p>
      <h2>AI vs IT vs computer applications: what each CBSE subject is</h2>
      <p class="bx-lede">They are three different subjects that fill the same place in the timetable, the optional sixth subject alongside the five compulsory ones. AI 417 and IT 402 come from CBSE's skill education stream; Computer Applications 165 is an academic elective. Each is marked out of 100, half of it practical.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col"></th><th scope="col">Artificial Intelligence (417)</th><th scope="col">Information Technology (402)</th><th scope="col">Computer Applications (165)</th></tr></thead>
        <tbody>
          <tr><td>In one line</td><td>How AI systems are planned, trained, tested and used fairly</td><td>Advanced word processing, spreadsheets and databases for office work</td><td>How the internet works, building web pages, and behaving well online</td></tr>
          <tr><td>Type of subject</td><td>Skill subject</td><td>Skill subject (job role: Domestic Data Entry Operator)</td><td>Academic elective</td></tr>
          <tr><td>Main tools</td><td>Python in Jupyter, NumPy, Matplotlib, Orange Data Mining, Teachable Machine</td><td>LibreOffice Writer, Calc, Impress (Class 9) and Base (Class 10)</td><td>A text editor and a browser for HTML and CSS; office tools in Class 9</td></tr>
          <tr><td>Do they write code?</td><td>Yes, Python, in both years</td><td>Not a programming language; simple macros in Class 10 Calc</td><td>Yes, HTML markup with CSS styling, in Class 10</td></tr>
          <tr><td>Maths in the theory paper</td><td>Some: statistics in Class 9, model evaluation metrics in Class 10</td><td>Spreadsheet formulas only</td><td>Almost none</td></tr>
          <tr><td>Theory and practical</td><td>50 and 50</td><td>50 and 50</td><td>50 and 50</td></tr>
          <tr><td>Natural next step in Class 11</td><td>Artificial Intelligence (843)</td><td>Information Technology (802)</td><td>Computer Science or Informatics Practices, by the school's own rules</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>A common mix-up: CBSE 165 is not ICSE Computer Applications</h3>
        <p>Both boards use the name Computer Applications, but they are unrelated. CBSE subject 165 is web pages in HTML and CSS, networking and cyber ethics. The ICSE subject of the same name is Java programming in BlueJ, a far heavier coding course. If you have moved from an ICSE school, or read about Java on a forum, check which board is being discussed. The ICSE subject has its own series of pages, starting at <a class="bx-link" href="/icse-class-10-java-classes-online">ICSE Class 10 Java classes</a>.</p>
      </div>
      <div>
        <h3>What "skill subject" means for a parent</h3>
        <p>Skill subjects are written by CBSE's Department of Skill Education around practical competence, so both 417 and 402 begin with the same five employability units, worth 10 marks, on communication, self-management, ICT, entrepreneurship and green skills. Subject 165 has no such part; all of its theory is about computers and the web.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="two-years">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What will my child study each year?</p>
      <h2>Class 9 then Class 10: the two-year path of 417, 402 and 165</h2>
      <p class="bx-lede">Each subject builds from a Class 9 foundation into a different Class 10 focus. The Class 9 year is assessed by the school; the Class 10 year ends in the board exam. These are the theory units and marks in the 2026-27 curricula.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Subject</th><th scope="col">Class 9 theory units (marks)</th><th scope="col">Class 10 theory units (marks)</th></tr></thead>
        <tbody>
          <tr><td><b>AI 417</b><br><span class="bx-src">plus Part A, 10 marks, both years</span></td><td>AI Reflection, Project Cycle and Ethics (10); Data Literacy (10); Math for AI, statistics and probability (7); Introduction to Generative AI (5); Introduction to Python (8)</td><td>Revisiting AI Project Cycle and Ethical Frameworks (7); Advanced Concepts of Modeling (11); Evaluating Models (10); Computer Vision (4); Natural Language Processing (8). Statistical Data and Advance Python: practical only</td></tr>
          <tr><td><b>IT 402</b><br><span class="bx-src">plus Part A, 10 marks, both years</span></td><td>Introduction to the IT-ITeS industry (4); Data Entry and Keyboarding (6); Digital Documentation (10); Electronic Spreadsheet (10); Digital Presentation (10)</td><td>Digital Documentation, advanced (8); Electronic Spreadsheet, advanced (10); Database Management System (12); Maintain Healthy, Safe and Secure Working Environment (10)</td></tr>
          <tr><td><b>Computer Applications 165</b></td><td>Basics of Information Technology (20); Cyber Safety (15); Office Tools (15)</td><td>Networking (15); HTML, including forms, tables and CSS (25); Cyber Ethics (10)</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>AI: ideas, then models</h3><p>Class 9 meets the project cycle, data and Python basics such as variables, conditions and lists. Class 10 moves to how models learn and how they are scored, then to images and language.</p></div>
      <div class="bx-card"><h3>IT: office, then data</h3><p>Class 9 is typing accuracy, documents, spreadsheets and presentations. Class 10 goes deeper into each tool and adds a full database in Base, with queries, forms and reports.</p></div>
      <div class="bx-card"><h3>165: computers, then the web</h3><p>Class 9 covers hardware, memory, networks, safe browsing and office tools. Class 10 switches to the internet itself and to building multi-page websites by hand in HTML.</p></div>
    </div>
    <p class="bx-mt-40">The Class 10 AI units are explained one by one on <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>, and the Python a Class 9 student will meet is set out on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="exams">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How are they examined in Class 10?</p>
      <h2>417 vs 165, and 402: how the Class 10 board marks are earned</h2>
      <p class="bx-lede">Every option is 50 theory marks in a two-hour paper plus 50 internal practical marks. The papers differ in style: 417 and 402 offer a lot of choice, while 165 asks every question and offers choice only inside some of them.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">What is marked</th><th scope="col">AI 417</th><th scope="col">IT 402</th><th scope="col">Computer Applications 165</th></tr></thead>
        <tbody>
          <tr><td>Theory paper layout</td><td colspan="2">Same for both (2025-26 sample papers): 46 questions printed, 34 answered; 24 marks of one-mark items</td><td>26 questions, all compulsory, sections A to E; 12 marks of one-mark items; two 4-mark case-based questions (2026-27 sample paper)</td></tr>
          <tr><td>Hands-on test</td><td>Practical exam on statistical data, computer vision, NLP and Python, 15</td><td>Writer 5, Calc 5, Base 10, so 20 in all</td><td>Lab test: design one web page from a given diagram, 20</td></tr>
          <tr><td>File or portfolio</td><td>At least 15 programs, 15</td><td>Portfolio of Writer, Calc and Base tasks, five or more per tool, 10</td><td>Report file of at least 10 HTML pages, 15</td></tr>
          <tr><td>Viva</td><td>5 on the practical, 5 on the project</td><td>10</td><td>5, on the report file</td></tr>
          <tr><td>Project</td><td>Project, field visit or portfolio, 10</td><td>Real-world case study built in Base and written up in Writer, 10</td><td>A project that uses most of what was learnt, 10</td></tr>
          <tr class="bx-total"><td>Practical total</td><td class="bx-num">50</td><td class="bx-num">50</td><td class="bx-num">50</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
      <figure class="bx-code">
        <figcaption class="bx-code-head"><b>A Class 10 AI practical program</b><span>417</span></figcaption>
        <pre>import numpy as np
from statistics import mode

marks = [14, 9, 14, 17, 21]
print(np.mean(marks))    # 15.0
print(np.median(marks))  # 14.0
print(mode(marks))       # 14</pre>
        <p class="bx-code-note">Mean, median and mode is one of CBSE's own suggested 417 programs. Run with python3 and NumPy before it went on this page.</p>
      </figure>
      <figure class="bx-code">
        <figcaption class="bx-code-head"><b>A Class 10 web page fragment</b><span>165</span></figcaption>
        <pre>&lt;table border="1"&gt;
  &lt;tr&gt;&lt;th colspan="2"&gt;Class 10 timetable&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Monday&lt;/td&gt;&lt;td&gt;Maths&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
&lt;p style="color: navy; margin: 10px;"&gt;
  Contact: &lt;a href="mailto:office@school.example"&gt;office&lt;/a&gt;
&lt;/p&gt;</pre>
        <p class="bx-code-note">Tables with colspan, inline CSS and mailto links are all named in the 165 HTML unit.</p>
      </figure>
    </div>
    <p class="bx-mt-40">The 417 and 402 practicals, block by block, are compared in more depth on <a class="bx-link" href="/ai-417-vs-it-402-class-10">AI 417 vs IT 402</a>. For the AI file, with the output of each program, see <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the 417 project and practical file page</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="rules">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What are the rules on combining them?</p>
      <h2>Can a student take AI and Computer Applications together, or switch later?</h2>
      <p class="bx-lede">The 2026-27 CBSE scheme says only one of 165 and 402 can be offered, and in the 2026 board exams all three subjects sat in the same morning slot, so in practice a student takes one of the three. Switching between Class 9 and Class 10 is discouraged by the scheme itself.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>One of 165 and 402, never both</h4><p>The footnote to the 2026-27 subject list says it directly: out of the subjects with codes 165 and 402, only one can be offered.</p></li>
      <li class="bx-step"><h4>One morning, one paper</h4><p>In 2026, AI 417, IT 402 and Computer Applications 165 were all on Friday 27 February, 10:30 AM to 12:30 PM. A student cannot sit two papers at once, so plan on one of the three. The 2027 date sheet is not out yet.</p></li>
      <li class="bx-step"><h4>Classes 9 and 10 are one course</h4><p>CBSE asks students to take in Class 9 only the subjects they mean to continue in Class 10. A switch at the start of Class 10 leaves a year of theory and a full practical to catch up, and the school has to agree.</p></li>
      <li class="bx-step"><h4>The school decides what is on offer</h4><p>CBSE lists the subjects; each school chooses which to run, based on teachers and labs. The real choice is often between two, not three.</p></li>
    </ol>
    <div class="bx-dated bx-mt-40">
      <p><b>If your child is in Class 9 now (2026-27):</b> their Class 10 board falls in 2028. Newspapers reported in October 2026 that this batch moves to a revised scheme with a fixed core of compulsory papers and a choice of skill papers that still lists AI and IT. CBSE has not notified how each subject fits, so we treat it as reported and promise nothing. Get the school's circular in writing before the Class 9 subject form is due. Checked 6 November 2026.</p>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="parents">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Which skill subject should my child choose?</p>
      <h2>Which skill subject to choose in Class 10: a checklist for parents</h2>
      <p class="bx-lede">Match the subject to how your child likes to work, not to which name sounds most modern. Find the row that sounds most like your child, then confirm with the questions for the school.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">If your child</th><th scope="col">Look first at</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td>Asks how apps and chatbots work, and likes puzzles</td><td><span class="bx-fit">AI 417</span></td><td>Concepts, small calculations and Python from Class 9</td></tr>
          <tr><td>Enjoys designing things on screen and wants to see results at once</td><td><span class="bx-fit">165</span></td><td>Every HTML tag shows up in the browser straight away</td></tr>
          <tr><td>Is careful and organised, and likes tidy documents and tables</td><td><span class="bx-fit">IT 402</span></td><td>Rewards exact, repeatable steps in office software and databases</td></tr>
          <tr><td>Finds maths stressful this year</td><td><span class="bx-fit">402 or 165</span></td><td>Neither puts metric calculations in the theory paper</td></tr>
          <tr><td>Is set on Computer Science in Class 11</td><td><span class="bx-fit">AI 417 or 165</span></td><td>Early coding in Python or HTML; neither is a formal entry rule</td></tr>
          <tr><td>Has little computer access at home</td><td><span class="bx-fit">Ask the school</span></td><td>All three need lab time; the practical is half the marks</td></tr>
          <tr><td>Is moving from an ICSE school with Java</td><td><span class="bx-fit bx-fit--no">Not 165 by name</span></td><td>CBSE 165 is HTML, not Java; AI 417 is closer to programming</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Questions to ask the school</h3>
        <ul class="bx-check">
          <li>Which of 417, 402 and 165 will run for this batch, and who teaches it?</li>
          <li>How many lab periods a week, and is the software installed?</li>
          <li>Is a change allowed between Class 9 and 10, and until when?</li>
          <li>What does the school's circular say about the 2028 scheme?</li>
        </ul>
      </div>
      <div>
        <h3>Questions to ask your child</h3>
        <ul class="bx-check">
          <li>Would you rather work out why, build something you can see, or get a task exactly right?</li>
          <li>Are you willing to keep a practical file going all year?</li>
          <li>Which of these would you still enjoy in February of Class 10?</li>
        </ul>
        <p>Then open one Class 10 unit of each subject together for a few minutes. The reaction tells you more than any ranking.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="if-ai">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. If we choose AI, what help is there?</p>
      <h2>Choosing AI 417: how our live classes prepare a student for the board</h2>
      <p class="bx-lede">We teach the 417 course only, not 402 or 165. A student who chose AI joins a Class 10 batch on Monday and Wednesday at 9:00 PM IST, or studies one to one at a time the family sets.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Theory in exam order</h3><p>Each unit is taught, then tested with a short timed set marked live, so weak spots show up in October rather than in February.</p></div>
      <div class="bx-card"><h3>Practicals built weekly</h3><p>Python, Orange and the computer vision and NLP activities are done in class, and the practical file grows one program at a time with the output explained.</p></div>
      <div class="bx-card"><h3>Viva and mock papers</h3><p>Students answer viva questions aloud to a teacher, and from December sit full mock papers marked against the scheme on screen, with doubt time in every class.</p></div>
    </div>
    <p class="bx-mt-40">The batch and its term plan are on <a class="bx-link" href="/cbse-class-10-ai-classes-online">CBSE Class 10 AI classes online</a>. A month-by-month plan for the board year is on <a class="bx-link" href="/cbse-class-10-ai-board-exam-preparation">CBSE Class 10 AI board exam preparation</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Picked AI 417? Learn it in the evening batch or one to one',
  chooseLede: 'One syllabus, one set of teachers, two formats. The batch gives a fixed weekly routine among other Class 10 AI students; one to one suits a student who needs a slower start with Python or has a crowded week. Billing is monthly and there is no admission fee.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'A class of fifteen to twenty, with one teacher',
    'Every 417 theory unit, taught in exam order',
    'Practical file and project built through the year',
    'Mock papers and viva practice from December'
  ],
  choosePersonal: [
    'A timetable that fits around school and tuition',
    'A slower first month for a student new to Python',
    'Extra work on the unit your child finds hardest',
    'Bridging help for a student switching into AI',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'Families still deciding in Class 9 often book the free class first, to see whether AI suits their child before the subject form goes in. Once the choice is made, most students join the batch; those moving across from another subject usually begin one to one. Fees show in your own currency.',
  zonesH2: 'Choosing a computer subject at a CBSE school outside India',
  zonesLede: 'CBSE schools abroad offer the same three subject codes and set the same papers, though each school runs only some of them. If AI is the choice, the table shows the local hour of the 9:00 PM IST class.',
  zonesAfter: 'If the hour is too late for a school night, one to one can be set at an earlier local time. Local times for every Gulf city, plus advice for families overseas, sit on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">the page for Class 10 AI students in the Gulf and beyond</a>.',
  faqLabel: 'Questions about AI, IT and Computer Applications',
  faqH2: 'What parents ask when choosing AI or computer applications for Class 10',
  faqs: [
    ['Which is better, AI or computer applications, in Class 10?', 'Neither is better for every child. AI 417 suits a student who enjoys ideas, small calculations and Python. Computer Applications 165 suits one who likes building web pages and seeing results at once, with almost no maths. Both carry 100 marks, half practical. Choose by how your child likes to work and by what the school teaches well.'],
    ['What is the difference between 417 and 165?', 'Subject 417 is Artificial Intelligence, a CBSE skill subject covering the AI project cycle, ethics, modeling, model evaluation, computer vision and NLP, with Python in the practical. Subject 165 is Computer Applications, an academic elective covering networking, HTML and CSS web pages and cyber ethics in Class 10. Both have a 50-mark theory paper and a 50-mark practical.'],
    ['Which skill subject should I choose in Class 10?', 'Choose in Class 9, since CBSE treats Classes 9 and 10 as one course. Pick AI 417 for a child curious about how AI works and willing to code in Python, IT 402 for one who likes precise office and database work, or Computer Applications 165 for one who wants to build websites. Then confirm the school runs it with a teacher and lab time.'],
    ['Can I take AI and computer applications together in Class 10?', 'Not in any practical sense. The 2026 timetable put the 417, 402 and 165 papers at one and the same time, 10:30 AM on 27 February, so nobody could write two of them. On top of that, the 2026-27 subject list forbids pairing 165 with 402. Find out which of the three your school runs, then choose among those.'],
    ['Is CBSE Computer Applications 165 the same as ICSE Computer Applications?', 'No. They share a name but not a syllabus. CBSE 165 covers networking, HTML web pages with CSS and cyber ethics. ICSE Computer Applications is Java programming in BlueJ, with object-oriented programs, arrays and strings. A student moving from ICSE will find CBSE AI 417 closer to programming than CBSE 165.'],
    ['Is computer applications easier than AI in Class 10?', 'For many students 165 feels lighter because its theory has almost no calculation and HTML shows results instantly. AI 417 asks for model evaluation metrics and Python, which some students find harder and others enjoy more. CBSE does not publish subject averages, so judge by your child, and remember that half the marks in either subject are practical.'],
    ['Does Computer Applications 165 include coding?', 'Yes, but it is web markup rather than a programming language. In Class 10 students write HTML pages with headings, lists, images, tables, forms, links, audio and video, and style them with CSS. The practical includes designing one web page from a diagram in a lab test and a report file of at least 10 HTML pages.'],
    ['Which subject is better for computer science in Class 11?', 'AI 417 gives the most Python practice, and Python is the language of CBSE Class 11 Computer Science and Informatics Practices. Computer Applications 165 gives a good grounding in the web and networking. None of the three is a formal entry requirement; schools set their own criteria for Class 11 streams, often on overall and maths marks.'],
    ['Can my child change the subject in Class 10?', 'It is possible only if the school agrees, and it is hard work. The CBSE scheme describes Class 9 and Class 10 as a single composite course, so a late switch means learning the new subject\'s Class 9 base and its Class 10 content, plus building a fresh practical file, inside one year. If you are unsure, decide before the Class 9 form goes in.'],
    ['Will the 2028 board exam change these subjects?', 'Possibly. News coverage from October 2026 says today\'s Class 9 students, who reach the Class 10 board in 2028, will follow a revised scheme in which AI and IT still appear among the optional skill papers. CBSE has not yet notified the details for each subject, so treat it as reported only and rely on the written circular your school sends.']
  ],
  startH2: 'Try one free AI class before the subject form is due',
  startHtml: `        <p>The free first class is an ordinary 417 lesson, pitched so that a Class 9 student can follow it: a short idea about how AI learns, a quick evaluation problem, and a tiny Python program your child types and runs. Afterwards the mentor gives you a straight view on whether AI suits your child, and which format would serve them if you go ahead.</p>
        <p>Comparing only the two skill subjects? Read <a class="bx-link" href="/ai-417-vs-it-402-class-10">AI 417 vs IT 402</a>.</p>`,
  footerTag: 'CBSE 417 &middot; AI, IT or Computer Applications'
};
