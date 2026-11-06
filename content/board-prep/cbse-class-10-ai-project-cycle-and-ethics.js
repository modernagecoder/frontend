// CBSE Class 10 AI (417), Unit 1: Revisiting AI Project Cycle and Ethical Frameworks
// for AI, session 2026-27. Intent: "AI project cycle class 10 questions", "ethical
// frameworks for AI class 10", "bioethics class 10 AI", "sector based vs value based
// framework", "revisiting AI project cycle".
// Distinct from cb28 (difference-between owns the sector vs value table and the
// rights / utility / virtue table), ccb (case-based owns a hospital-registration
// bias case), the notes page (one-sheet summary) and textbook solutions (fitness app
// case): this page is the whole unit as an exam unit. The six stages run through
// ONE original example (a canteen demand project) with its problem statement
// template filled, the three domains with a 4-mark scenario answer marked, the
// framework classifier drill, and the handbook's bioethics case described in our
// own words and then worked as a 4-mark answer with the marks shown, plus a second
// original case (eye-screening camera bias) for practice.
// Sources read on 2026-11-06: CBSE 417 curriculum 2026-27 (cbseacademic.nic.in,
// Unit 1 sub-units: AI project cycle, three domains, ethical frameworks, types,
// bioethics and a case study, activity "My Goodness"); the CBSE / Intel Class 10
// facilitator handbook, Unit 1 (six stages; domains named Statistical Data,
// Computer Vision, NLP; the four principles; the healthcare risk algorithm case
// trained on spending as a proxy for illness); the 2026 main marking scheme (Q.P.
// 104 set 4, via AglaSem) for what Unit 1 asked and how the 2-mark sector vs value
// item was split (1 for a difference, half for each example); the 2025-26 SQP
// marking scheme for the 4-mark biased selection case (1 per reason, half per
// principle, half per explanation). Unit 1 = 7 theory marks per the curriculum.
// No numericals on this page; the only figures are marks, checked against those
// documents. No year tag is put on any original question.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-project-cycle-and-ethics',
  code: 'cb26',
  board: 'cbse',
  themeColor: '#5B2347',
  dateModified: '2026-11-06',
  title: 'AI Project Cycle Class 10 Questions, Ethics and Bioethics',
  description: 'AI project cycle class 10 questions for CBSE 417 Unit 1, 2026-27: the six stages, AI domains, ethical frameworks and the bioethics case worked for 4 marks.',
  ogTitle: 'AI Project Cycle Class 10 Questions, with Ethics and Bioethics Worked',
  ogDesc: 'CBSE 417 Unit 1 for 2026-27 as an exam unit: the six stages run through one example, the three AI domains, ethical frameworks sorted, and the bioethics case answered for four marks with every mark shown.',
  twDesc: 'Unit 1 of CBSE 417: project cycle stages, AI domains, framework types and the bioethics case worked mark by mark.',
  headline: 'AI Project Cycle Class 10 Questions: Unit 1 of CBSE 417 with Ethical Frameworks and the Bioethics Case Worked in Exam Format',
  courseName: 'CBSE Class 10 AI (417) Unit 1 Coaching, Live Online',
  courseDesc: 'Live online teaching of CBSE Class 10 Artificial Intelligence (417) Unit 1, Revisiting AI Project Cycle and Ethical Frameworks for AI, session 2026-27: the six stages practised on fresh problems, domain spotting, framework sorting and bioethics case answers written and marked against the value points, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Unit 1',
  navLinks: [['#cycle', 'Project cycle'], ['#domains', 'AI domains'], ['#frameworks', 'Frameworks'], ['#bioethics', 'Bioethics case']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Project cycle and ethics']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 1, 2026-27',
  h1: 'AI project cycle class 10 questions, ethical frameworks and the bioethics case, worked for marks.',
  lede: 'These AI project cycle class 10 questions cover all of Unit 1 in CBSE 417 for 2026-27: the six stages of the cycle, the three AI domains, ethical frameworks and their types, and bioethics. Seven theory marks rest on this unit, and most of them are lost not on facts but on answers that skip a named stage or principle. Below, every idea is followed by questions in the shapes the board uses, with model answers and the mark each line earns. Our Monday and Wednesday batch writes these answers and marks them on screen.',
  heroNote: 'Live online &middot; six stages on one worked example &middot; domain and framework drills &middot; bioethics case marked line by line &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Unit 1 (project cycle and ethics) of CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Unit 1 is worked in class',
    title: 'Project cycle and ethics',
    right: 'CBSE 417',
    rows: [
      ['Monday, stages and domains', '9:00', 'PM IST'],
      ['Wednesday, ethics case answers', '9:00', 'PM IST'],
      ['Theory marks on this unit', '7', 'of 50'],
      ['Stages in the project cycle', '6', 'named']
    ],
    zones: '<b>Dubai, Abu Dhabi and Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City and Manama:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>Singapore and Kuala Lumpur:</b> one to one, at an hour that suits you.',
    stamps: ['Unit 1: 7 marks', 'Bioethics case']
  },
  picksH2: 'Courses that teach this unit',
  picksLede: 'The 417 course in which Unit 1 is taught and its case answers are marked, the Orange course where the same six stages are run on real data, and the AI course for students who want the ideas behind bias in more depth.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Unit 1 taught in the opening weeks, then revisited with every later unit, since each one is a stage of the same cycle.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'The cycle, hands on / Orange', h3: 'Visual ML with Orange', p: 'Problem scoping to evaluation done on a real dataset in a no-code tool, so the stages stop being a list to memorise.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Bias and fairness / AI and ML', h3: 'AI and Machine Learning for Teens', p: 'Where biased data comes from and how models are checked for it, the idea underneath every bioethics case answer.' }
  ],
  capsule: 'AI project cycle class 10 questions come from Unit 1 of CBSE 417, Revisiting AI Project Cycle and Ethical Frameworks for AI, worth 7 theory marks in 2026-27. Learn the six stages in order (problem scoping, data acquisition, data exploration, modelling, evaluation, deployment), the three AI domains (Statistical Data, Computer Vision, NLP), the two types of ethical framework (sector-based such as bioethics, value-based such as rights, utility and virtue) and the four bioethics principles applied to a case. Modern Age Coders teaches and marks these answers live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="weight">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What does Unit 1 cover, and what is it worth?</p>
      <h2>Revisiting AI project cycle and ethical frameworks: the unit in one table</h2>
      <p class="bx-lede">Unit 1 carries 7 of the 50 theory marks in the 2026-27 CBSE 417 curriculum. It has three sub-units, and the board has drawn questions from all three.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Sub-unit (2026-27 curriculum)</th><th scope="col">What you must be able to do</th><th scope="col">How it has been asked</th></tr></thead>
        <tbody>
          <tr><td>AI Project Cycle</td><td>Name the six stages in order and say what happens in each</td><td>One-mark stage spotting; two-mark explanations of two stages</td></tr>
          <tr><td>Introduction to AI Domains</td><td>Place an application in Statistical Data, Computer Vision or NLP, with a reason</td><td>One-mark identification; a four-mark item with two scenarios in the 2026 paper</td></tr>
          <tr><td>Ethical Frameworks for AI</td><td>Define a framework and an ethical framework, give the types, apply the four bioethics principles to a case</td><td>A two-mark sector versus value answer and an assertion-reason item on bioethics in 2026; a four-mark biased-selection case in the 2025-26 sample paper</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Why "revisiting"?</h3>
        <p>The cycle was taught in Class 9. In Class 10 it is the spine of the course: Unit 2 is modelling, Unit 3 is evaluation in depth, and the no-code walkthroughs in Units 4, 5 and 6 each run the full cycle.</p>
      </div>
      <div>
        <h3>Where Unit 1 marks leak</h3>
        <ul class="bx-check">
          <li><b>Stage names drift.</b> "Data collection" for data acquisition costs nothing; "testing" for evaluation sometimes does.</li>
          <li><b>Principles go unnamed.</b> A case answer that describes fairness but never writes "justice" misses a value point.</li>
          <li><b>Examples are missing.</b> Two-mark framework answers split marks between the difference and the examples.</li>
        </ul>
        <p>How those papers looked as a whole is on <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">CBSE Class 10 AI previous year question papers</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="cycle">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What are the stages of the AI project cycle?</p>
      <h2>The six stages of the AI project cycle, on one worked example</h2>
      <p class="bx-lede">The AI project cycle has six stages: problem scoping, data acquisition, data exploration, modelling, evaluation and deployment. It is called a cycle because what you learn at evaluation and after deployment sends you back to improve earlier stages.</p>
    </div>
    <p>One example makes the stages stick better than six definitions. Suppose a school canteen throws away trays of unsold lunch every week and wants an AI that predicts tomorrow's number of meals.</p>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Stage</th><th scope="col">The question it answers</th><th scope="col">In the canteen project</th></tr></thead>
        <tbody>
          <tr><td>1. Problem scoping</td><td>What exactly are we solving, for whom, and why?</td><td>Cooks over-prepare; the goal is to predict meals needed per day so less food is wasted</td></tr>
          <tr><td>2. Data acquisition</td><td>What data do we need, and from which reliable source?</td><td>Two terms of daily meal counts, the day of the week, exam days, holidays, weather</td></tr>
          <tr><td>3. Data exploration</td><td>What patterns does the data show once we visualise it?</td><td>A bar chart shows Fridays and rainy days sell fewer meals; two days have impossible counts and are fixed</td></tr>
          <tr><td>4. Modelling</td><td>Which model suits the problem, and which performs best?</td><td>The output is a number, so a regression model; two are tried</td></tr>
          <tr><td>5. Evaluation</td><td>How well does the model do on data it has never seen?</td><td>Tested on the last three weeks, held back from training; the better model is kept</td></tr>
          <tr><td>6. Deployment</td><td>How is it put to real use, and kept useful?</td><td>The cook sees each morning's prediction on a phone; counts keep flowing back so the model is retrained</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The 4Ws canvas and problem statement template</h3>
        <p>Problem scoping is done with the 4Ws: <b>Who</b> has the problem (the stakeholders), <b>What</b> the problem is, <b>Where</b> or when it arises (the context), and <b>Why</b> solving it matters (the benefit). The problem statement template then puts all four into one sentence you can return to later.</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Problem statement template, filled</b><span>canteen project</span></figcaption>
  <pre>Our   canteen cooks and the school    (Who)
have  a problem of cooking more
      lunches than are sold           (What)
when  numbers change with the day,
      weather and exam timetable      (Where)
An ideal solution would predict each
      day's meals, cutting waste and
      cost                            (Why)</pre>
  <p class="bx-code-note">A four-mark board item has asked for this template. Its scheme gave one mark for saying what the template is for and the other three for laying it out correctly, so draw every row even when short of time.</p>
</figure>
      </div>
      <div>
        <h3>AI project cycle class 10 questions with answers</h3>
        <ol class="bx-qlist">
          <li>A team draws scatter plots of the collected data to look for trends before choosing a model. Name the stage. (1)
            <details><summary>Answer</summary> Data exploration. Choosing the model comes next, in modelling.</details></li>
          <li>At which stage is the model tested on newly fetched data it was not trained on? (1)
            <details><summary>Answer</summary> Evaluation. Students who write "modelling" have mixed up building with checking.</details></li>
          <li>In the 4Ws canvas, which block records the stakeholders? (1)
            <details><summary>Answer</summary> Who. A two-statement item in an earlier board paper placed stakeholders under "When" to catch this.</details></li>
          <li>Explain the second and third stages of the AI project cycle. (2)
            <details><summary>Answer</summary> <b>Data acquisition [1]:</b> collecting relevant data from reliable, authentic sources; it is the base the whole project rests on. <b>Data exploration [1]:</b> arranging the data into graphs, charts or tables so that patterns, trends and errors become visible and the right model can be chosen.</details></li>
          <li>Why is the AI project cycle drawn as a cycle and not a straight line? (2)
            <details><summary>Answer</summary> Evaluation can show the model is not good enough, so the team returns to collect more data or try another model [1]. After deployment, new data and feedback keep arriving, so the model is improved and redeployed [1].</details></li>
          <li>What is deployment, and why does it matter? (2)
            <details><summary>Answer</summary> Deployment is putting the evaluated model into real use, inside an app, a website or a device, where people rely on it [1]. Without it the project helps nobody, and only real use shows problems that testing missed [1].</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The same six stages are what the project report and its viva are built on; how to write each one up is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="domains">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which AI domain is it?</p>
      <h2>The three AI domains: Statistical Data, Computer Vision and NLP</h2>
      <p class="bx-lede">AI is grouped into domains by the type of data the model is fed. Numbers and tables mean Statistical Data, images and video mean Computer Vision, and spoken or written human language means Natural Language Processing.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Domain</th><th scope="col">The input it works on</th><th scope="col">Clue words in a question</th><th scope="col">An example to quote</th></tr></thead>
        <tbody>
          <tr><td>Statistical Data</td><td>Records, numbers, tables</td><td>predict a price, sales figures, records, compare, forecast</td><td>Price comparison websites</td></tr>
          <tr><td>Computer Vision</td><td>Photos, video, camera feeds, scans</td><td>camera, image, scan, detect, recognise faces, count vehicles</td><td>Crop monitoring from drone images</td></tr>
          <tr><td>Natural Language Processing</td><td>Spoken or written words</td><td>reviews, essays, translate, voice command, chat, captions</td><td>Spam filters, machine translation</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Note the curriculum's name: the 2026-27 handbook calls the first domain <b>Statistical Data</b>. Older books say Data Science, and the 2026 board paper used Statistical Data as the answer to a price-comparison item.</p>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Six scenarios: name the domain</h3>
        <ol class="bx-qlist">
          <li>A railway app answers "When does the next train to Pune leave?" typed in Marathi.
            <details><summary>Answer</summary> NLP: the input is written human language.</details></li>
          <li>A dairy forecasts next month's milk demand from three years of daily sales.
            <details><summary>Answer</summary> Statistical Data: past numbers predict a future number.</details></li>
          <li>A toll gate reads number plates from its camera.
            <details><summary>Answer</summary> Computer Vision: the input is an image of the plate.</details></li>
          <li>An app writes subtitles for a lecture video as the teacher speaks.
            <details><summary>Answer</summary> NLP: it converts speech to text. The word "video" is the trap; the AI works on the audio.</details></li>
          <li>A tablet app checks a child's handwritten digits on a worksheet photo.
            <details><summary>Answer</summary> Computer Vision: it reads shapes from an image.</details></li>
        </ol>
      </div>
      <div class="bx-card">
        <h3>A four-mark domain answer, marked</h3>
        <p><b>Q.</b> Identify the AI domain for each, with a justification. (a) A hospital app reads patients' typed symptoms and suggests which department to visit. (b) A dam's cameras watch the spillway and raise an alarm when debris blocks it. (2 + 2)</p>
        <p><b>(a)</b> Natural Language Processing <b>[1]</b>. The app must understand sentences that patients type in their own words, which is the core of NLP <b>[1]</b>.</p>
        <p><b>(b)</b> Computer Vision <b>[1]</b>. The system interprets images from cameras to spot debris, so it processes visual data <b>[1]</b>.</p>
        <p>The 2026 marking scheme split its two-scenario item the same way: one mark for the domain, one for a relevant justification. A bare domain name earns half the question.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="frameworks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What is an ethical framework for AI?</p>
      <h2>Ethical frameworks for AI, class 10: meaning, need and types</h2>
      <p class="bx-lede">An ethical framework is a step-by-step guide that helps us make sure the choices we make, and the choices our AI makes, do not cause unintended harm. A framework on its own is any structured set of steps for solving a problem; adding ethics points those steps at right and wrong.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Why AI needs one</h3><p>AI now decides or influences who gets a loan, a job interview or a hospital bed. If it learns from biased data, it repeats that bias at scale. A framework applied while building the system catches the harm before it happens, not after.</p></div>
      <div class="bx-card"><h3>What sways our choices</h3><p>The curriculum's "My Goodness" activity asks students to donate to charity and then shows what swayed them: who the recipient was, where they lived, a pull towards relatives, whether hidden details were revealed. Culture, religion, intuition and values shape decisions without our noticing.</p></div>
      <div class="bx-card"><h3>The two types</h3><p><b>Sector-based</b> frameworks are written for one field, such as bioethics for healthcare, or finance, education and transport. <b>Value-based</b> frameworks rest on moral principles that apply anywhere: rights-based, utility-based and virtue-based.</p></div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The one-question test for any framework</h3>
        <p>Ask: is it written for a particular industry? If yes, it is sector-based. If it is a moral principle you could carry into any field, it is value-based, and then ask which value leads:</p>
        <ul class="bx-check">
          <li><b>Protect each person's rights and dignity first:</b> rights-based.</li>
          <li><b>Do the most good for the most people:</b> utility-based.</li>
          <li><b>Act as an honest, caring person would:</b> virtue-based.</li>
        </ul>
        <p>Side-by-side difference tables for these, with the two-mark answer, are on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">CBSE Class 10 AI difference between questions</a>.</p>
      </div>
      <div>
        <h3>Sort these, then check</h3>
        <ol class="bx-qlist">
          <li>A banking regulator's code for fair AI credit scoring.
            <details><summary>Answer</summary> Sector-based: written for finance only.</details></li>
          <li>A city refuses a face-recognition rollout because no citizen consented, though it would cut crime.
            <details><summary>Answer</summary> Rights-based: consent and privacy come before the overall gain.</details></li>
          <li>A flood app sends rescue boats where the most people can be reached first.
            <details><summary>Answer</summary> Utility-based: the greatest benefit for the greatest number.</details></li>
          <li>A developer reports a flaw in her own team's model though nobody asked her to.
            <details><summary>Answer</summary> Virtue-based: honesty and integrity of the person acting.</details></li>
          <li><b>Assertion:</b> Bioethics is a value-based framework. <b>Reason:</b> Bioethics deals with ethical issues in health, medicine and the life sciences.
            <details><summary>Answer</summary> Assertion false, reason true. Because it belongs to one field, bioethics is sector-based. The 2026 board paper set this same trap.</details></li>
          <li><b>Assertion:</b> Ethical frameworks help an AI avoid unintended outcomes. <b>Reason:</b> They are applied while the solution is being built.
            <details><summary>Answer</summary> Both true, and the reason explains the assertion: harm is caught before deployment.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More items in this two-statement shape are on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">CBSE Class 10 AI assertion reason questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="bioethics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do I answer the bioethics case study?</p>
      <h2>Bioethics class 10 AI: the four principles and the case study, in exam format</h2>
      <p class="bx-lede">Bioethics is the sector-based framework used in healthcare and the life sciences. Its four principles are respect for autonomy, do not harm, ensure maximum benefit for all, and give justice. A case answer names a principle, then shows how it applies to the story.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Principle</th><th scope="col">Formal name</th><th scope="col">In plain words</th><th scope="col">What it asks of an AI system</th></tr></thead>
        <tbody>
          <tr><td>Respect for autonomy</td><td>Autonomy</td><td>People decide for themselves, knowing the facts</td><td>Tell users how it works; make its data and decisions open to checking</td></tr>
          <tr><td>Do not harm</td><td>Non-maleficence</td><td>Avoid harm to anyone, human or not; if every path harms, take the least harmful</td><td>Train on data that spreads risk fairly, not only for some groups</td></tr>
          <tr><td>Ensure maximum benefit</td><td>Beneficence</td><td>Go beyond avoiding harm and actively do good</td><td>Meet clinical standards, and help every group of patients</td></tr>
          <tr><td>Give justice</td><td>Justice</td><td>Share benefits and burdens fairly, whatever a person's background</td><td>Understand the social causes of bias and work against them</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The handbook case, in brief</h3>
        <p>The CBSE handbook's case is a hospital tool built to flag high-risk patients so that extra care went to those who needed it most. It learned from past healthcare spending, treating money spent on a patient as a stand-in for how ill they were. In the place it was built, less had historically been spent on patients from one group, which the handbook calls the western region. So two patients with the same risk score were not equally ill: the patient from that region was usually sicker, and the tool would have sent care away from them.</p>
        <p>The lesson: the data looked neutral, but the measure it used carried an old inequality into the model.</p>
      </div>
      <div class="bx-card">
        <h3>Exam question on this case (4 marks)</h3>
        <p>(a) Give two reasons the algorithm's risk scores were unfair. (2)<br>(b) Name two bioethics principles the designers should have applied, and explain how each would change the system. (2)</p>
        <p><b>(a)</b> It measured illness through money spent, not through the patient's actual health <b>[1]</b>. Less money had been spent on patients from one region, so the model learned to under-rate their needs even when they were sicker <b>[1]</b>.</p>
        <p><b>(b)</b> <b>Do not harm [&frac12;]:</b> the tool would have denied care to the sickest group, so it must be trained on data such as diagnoses and test results that reflect real illness for everyone <b>[&frac12;]</b>. <b>Justice [&frac12;]:</b> care must be shared fairly whatever a patient's background, so designers should check scores group by group before use <b>[&frac12;]</b>.</p>
        <p>This split, one mark per reason and half a mark each for the principle and its explanation, follows the scheme for the four-mark biased-selection case in the 2025-26 sample paper.</p>
      </div>
    </div>
    <h3 class="bx-mt-40">Practise on a fresh case</h3>
    <p><i>A state health mission screens diabetic patients' eyes with an AI that reads photographs of the retina. It was trained only on sharp images from an expensive camera used in city hospitals. In village camps, cheaper cameras produce softer images and the AI misses far more early disease. Patients are not told an AI made the call.</i></p>
    <ol class="bx-qlist">
      <li>Which stage of the AI project cycle should have caught the problem before rollout? (1)
        <details><summary>Answer</summary> Evaluation: testing on images from the village cameras would have shown the drop. Data acquisition is also a fair answer if explained, since the training data left those cameras out.</details></li>
      <li>Name the bioethics principle broken by not telling patients, and give a fix. (2)
        <details><summary>Answer</summary> Respect for autonomy [1]. Tell each patient that an AI screened the photo, what it can miss, and how to ask for a doctor's reading [1].</details></li>
      <li>Explain two more principles the screening breaks and how to repair the system. (4)
        <details><summary>Answer</summary> <b>Do not harm [&frac12;]:</b> missed disease can lead to lost sight <b>[&frac12;]</b>; retrain with images from the cheaper cameras and send unclear images to a doctor <b>[1]</b>. <b>Justice [&frac12;]:</b> village patients get a worse service than city patients for the same disease <b>[&frac12;]</b>; report accuracy separately for camp and hospital images and deploy only when both meet the same standard <b>[1]</b>.</details></li>
    </ol>
    <p class="bx-mt-40">Two more ethics cases with model answers, in the other case shapes the paper uses, are on <a class="bx-link" href="/cbse-class-10-ai-case-based-questions">CBSE Class 10 AI case based questions</a>. How examiners award these value points across the whole paper is on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the class 10 AI marking scheme, explained</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is Unit 1 taught live?</p>
      <h2>How the live batch teaches the project cycle and ethics</h2>
      <p class="bx-lede">Unit 1 looks easy because it has no formulas. The marks go to students who can apply each term to a story they have not seen, in the words the scheme looks for, and that takes practice with feedback.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>A new problem every week</h3><p>Each Monday the class takes a fresh problem, a bus route, a school library, a local clinic, and scopes it with the 4Ws, then walks it through all six stages aloud. By December the stages come in order without effort.</p></div>
      <div class="bx-card"><h3>Case answers marked on screen</h3><p>On Wednesdays students write a four-mark ethics answer in ten minutes. The teacher marks one on the shared screen against the value points: is the principle named, is the explanation tied to the story, is the fix specific.</p></div>
      <div class="bx-card"><h3>Revisited with every unit</h3><p>When the class reaches evaluating models or NLP, the teacher asks which stage of the cycle it belongs to and what could go wrong ethically. Unit 1 becomes the frame for the rest of the course, not a chapter left behind.</p></div>
    </div>
    <p class="bx-mt-40">
      Students can stop the class at any point to ask why an answer lost its half mark. The one-sheet summary of this unit is on <a class="bx-link" href="/cbse-class-10-ai-notes">CBSE Class 10 AI notes</a>, and the no-code walkthroughs that run the whole cycle on real data are on <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Work through Unit 1 in the Monday and Wednesday batch, or one to one',
  chooseLede: 'The batch rehearses stage spotting and case answers with classmates, so students hear how others phrase the same principle. One to one spends the time only on the answers your child keeps losing marks on. Same syllabus and teachers either way; monthly billing, no admission fee, and you can stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'A fresh problem scoped and run through the six stages',
    'Timed four-mark ethics answers, marked on screen',
    'Unit 1 questions inside every full mock'
  ],
  choosePersonal: [
    'Days and time chosen by you, in your own time zone',
    'Case answers rewritten until each principle is named and applied',
    'Domain and framework drills built from your child\'s misses',
    'Practice with the school\'s own worksheets if you share them',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who knows the definitions but writes vague case answers usually gains most from a few one to one sessions on answer writing. A student meeting the project cycle afresh, or behind on the later units, is better served by the batch, where Unit 1 is taught first and then tied to every unit after it. Fees are shown in your own currency.',
  zonesH2: 'Unit 1 coaching for CBSE Class 10 AI students in the Gulf and abroad',
  zonesLede: 'CBSE schools outside India sit the same 417 paper, so the same project cycle and ethics questions are waiting. This is when the evening batch reaches you this winter.',
  zonesAfter: 'If the batch hour does not fit around school and travel, personalised one to one runs at a time you pick. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Unit 1',
  faqH2: 'What students ask about the AI project cycle and ethical frameworks',
  faqs: [
    ['What are the 6 stages of the AI project cycle in class 10?', 'Problem scoping, data acquisition, data exploration, modelling, evaluation and deployment. Problem scoping sets the goal with the 4Ws, acquisition collects reliable data, exploration visualises it to find patterns, modelling chooses and trains a model, evaluation tests it on unseen data, and deployment puts it into real use. Learn them in this order; one-mark items often describe a stage and ask for its name.'],
    ['How many marks is Unit 1 in CBSE Class 10 AI?', 'Unit 1, Revisiting AI Project Cycle and Ethical Frameworks for AI, carries 7 of the 50 theory marks in the 2026-27 CBSE 417 curriculum. Expect a mix of one-mark objective items, two-mark short answers such as sector-based versus value-based frameworks, and sometimes a four-mark case or scenario answer.'],
    ['What is an ethical framework in AI class 10?', 'An ethical framework is a step-by-step guide that helps make sure the choices we make, including those built into an AI system, do not cause unintended harm. AI needs one because it is used to make or influence decisions, and a model trained on biased data can repeat that bias for thousands of people.'],
    ['What is the difference between sector based and value based frameworks?', 'A sector-based framework is written for the ethical problems of one industry, for example bioethics for healthcare. A value-based framework rests on general moral principles that apply in any field: rights-based, utility-based or virtue-based. In the 2026 marking scheme, this two-mark answer earned one mark for a correct difference and half a mark for each example.'],
    ['What are the four principles of bioethics in class 10 AI?', 'Respect for autonomy (people decide with full knowledge), do not harm or non-maleficence, ensure maximum benefit or beneficence, and give justice (benefits and burdens shared fairly). In a case answer, name the principle and then explain how it applies to the story; the name and the explanation usually carry half a mark each.'],
    ['Is bioethics a value based or sector based framework?', 'Sector-based. Bioethics is written for one field, healthcare and the life sciences. The 2026 CBSE Class 10 AI paper tested this with an assertion that called bioethics value-based: the assertion was false and the reason, that bioethics deals with health and medicine, was true.'],
    ['What is the bioethics case study in class 10 AI?', 'The CBSE handbook describes a hospital tool that flagged high-risk patients using past healthcare spending as a stand-in for illness. Because less had been spent on one group of patients, the tool rated them as less at risk even when they were sicker. Applying the bioethics principles, especially do not harm and justice, would have caught this before use.'],
    ['What are the three domains of AI in class 10?', 'Statistical Data (numbers and records, such as price comparison websites), Computer Vision (images and video, such as crop monitoring from drones) and Natural Language Processing (spoken and written language, such as spam filters and translation). The 2026-27 handbook uses the name Statistical Data where older books said Data Science.'],
    ['Are your Unit 1 classes part of the regular course?', 'Yes. Unit 1 is taught at the start of the 417 course and revisited with every later unit, with case answers written and marked in class. It is all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Write a free bioethics answer with a teacher',
  startHtml: `        <p>In the free first class your child scopes a short problem with the 4Ws, names its six stages, then writes a four-mark ethics answer that the teacher marks live, half mark by half mark. You will see exactly where marks are won and lost, and the mentor will tell you honestly whether the batch or one to one fits your child better.</p>
        <p>Want to see where Unit 1 sits in the whole subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Unit 1 project cycle and ethics'
};
