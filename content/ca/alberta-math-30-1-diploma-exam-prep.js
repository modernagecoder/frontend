'use strict';
// Alberta Math 30-1 diploma exam prep (ag- exam door; Canada cluster Plan 2, row 32).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/alberta-math-30-1-diploma-exam-prep/).
// Alberta prints "Mathematics 30–1" and "9 AM–12 PM" with en dashes; the page writes a hyphen and "to" (house rule).
//  - General Information Bulletin 2026-2027: Diploma Examinations Program, schedule pages 11 to 15 (edc-diploma-exam-schedule.pdf):
//    Mathematics 30-1 and Mathematics 30-2, 9 AM to 12 PM, on Tuesday 3 November 2026 and Wednesday 20 January, Thursday 8 April,
//    Thursday 17 June and Thursday 5 August 2027 (month headers carry the years; rows confirmed with PyMuPDF word y-positions and a
//    Python weekday check); "All students are provided with up to double the official time noted above if they require it.";
//    "No exams scheduled on June 21, National Indigenous Peoples Day."
//  - alberta.ca/diploma-exams-overview: "The weighting of diploma exams returned to 30% effective September 1, 2023."; "70% of the final
//    mark comes from course work. The remaining 30% comes from the diploma exam."; "To pass a diploma exam course, you must earn a final
//    combined mark of at least 50%."; example "if you get a mark of 68% from your school and 60% on the diploma exam, your official final
//    mark is 66%."; January 2026: "Alberta's government has cancelled the January 2026 diploma examinations and Grade 9 Provincial
//    Achievement Tests (PATs)."; "Students who choose not to write at a later date will receive their school-awarded mark as their final
//    official course mark."; "A notation will be added to transcripts confirming that no diploma exam was written."; "students write
//    diploma exams and provincial achievement tests in a digital environment rather than pencil and paper"; results on myPass
//    "approximately 3 weeks after writing"; "Students must have photo ID when they write diploma exams."
//  - alberta.ca/writing-diploma-exams (src/alberta/writing-diploma-exams.html): materials "pens", "HB pencils", "one approved and
//    appropriately configured calculator"; "School staff will register students enrolled in diploma exams courses for the first time.";
//    "Students who retake courses will not automatically be registered."; rescore: "The mark resulting from rescoring becomes your final
//    exam mark, even if it is lower than the original mark."; rewrites: "You may also rewrite a diploma exam without repeating the
//    diploma course."; transcript "will show only the highest diploma exam mark and highest school-awarded mark earned." Fees on that
//    page are not printed (currency-neutral rule).
//  - Mathematics 30-1 Information Bulletin 2026-2027: instructions page "Time: 3 hours. This closed-book examination was developed to be
//    completed in 3 hours; however, you may take an additional 3 hours"; 32 machine-scored (75%) and 3 written-response (25%);
//    numerical response "nearest tenth or nearest hundredth"; "record the 0 before the decimal place"; "Students should retain all
//    decimals throughout the question, and rounding should occur only in the final answer."; written response "Each written-response
//    question will consist of two parts"; scoring guide 2-mark part and 3-mark part, augmented scores "0.5, 1.5, or 2.5", "combined for a
//    total of 5 marks"; written-response answer sheets printed, collected, "scanned and uploaded"; "will be fully secured and will not be
//    released"; two forms in January and June; directing-word definitions (Algebraically, Compare, Determine, Evaluate, Justify, Prove,
//    Sketch, Verify quoted); observation "the directing word algebraically requires students to demonstrate a complete algebraic process".
//  - A Guide for Students Preparing to Write the Diploma Examination, Mathematics 30-1 / 30-2 (ecc-guide-for-students-mathematics.pdf):
//    "Written-response questions are worth five marks each in Math 30-1"; "A ruler, protractor, and highlighter may be used for math
//    exams."; "a paper version of the formula sheet is also permitted"; writing sessions November, January, April, June, August.
//  - Mathematics 30-1 and 30-2 Diploma Exam Fact Sheet (2019): "Students will not be able to obtain full credit for a response without
//    supporting work."; "Students wishing to rewrite the Mathematics 30-1 or the Mathematics 30-2 Diploma Exam must rewrite the entire exam."
//  - 2026-2027 Calculator Information and Rules (August 2026): prohibited properties include "symbolic manipulation capabilities",
//    "ability to provide trigonometric calculation exact values", "ability to simplify radicals and rationalize denominators"; approved
//    list includes TI-84 Plus CE, TI-Nspire CX II, TI-Nspire CX II CAS "(CAS must be disabled)", Casio fx-9750 GIII "(must be in
//    Examination Mode)"; "bring only one approved and appropriately configured calculator".
// Not named on purpose: the bill cited on the digital-format paragraph, the reason given for the January 2026 cancellation, and the
// exam managers listed in the bulletin.
// Our own material, labelled: the 70 and 30 table (computed: 0.7 x 80 + 0.3 x 60 = 74; 72/72 = 72; 90/70 = 84; 65/45 = 59; 55/35 = 49;
// 75/85 = 78; Alberta's 68/60 example computes to 65.6, which Alberta states as 66%), worked response 1 ((x^2 - 2/x)^8: general term
// C(8,k)(-2)^k x^(16-3k); k = 3 gives -448x^7, the fourth term; no constant term because 16 - 3k = 0 has no whole-number k), worked
// response 2 (4-digit even numbers above 5000 from 1 to 7 without repetition: 40 + 120 = 160, brute-forced in Python), the eight-question
// mock and answers (log2 48 - log2 3 = 4; 5^(2x) = 40 gives 1.1460; period 2pi/3 = 2.09; C(6,2) = 15; cos(pi/3) = 0.50; P(x) = 2x^3 + x^2 -
// 13x + 6 zeros 2, 1/2, -3, all checked), the eight-week countdown and the exam-day checklist.
// Lesson family: write for the marker (directing words, layout, partial marks).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_SCHEDULE = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/custom_downloaded_images/edc-diploma-exam-schedule.pdf" rel="noopener" target="_blank">2026-2027 diploma exam schedule</a>';
const SRC_OVERVIEW = '<a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Diploma exams: Overview</a>';
const SRC_BULL = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf" rel="noopener" target="_blank">Mathematics 30-1 Information Bulletin 2026-2027</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MATH 30-1 DIPLOMA', blurb: 'The Alberta Math 30-1 diploma exam for 2026 to 2027: the five sittings, the 70 and 30 arithmetic, how written responses are scored, two worked responses and a countdown.' },
  slug: 'alberta-math-30-1-diploma-exam-prep',
  code: 'alb',
  accent: '#3A3157',
  accentRationale: 'Alberta Math 30-1 diploma prep: a deep exam-hall indigo, #3A3157, allocated for this row in alloc.tsv; 7.7 RGB units from the nearest site accent (#333054) and 31.4 from the nearest Canada page accent (#264761); contrast 11.28 on the paper #FBF8F2 and 9.70 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Alberta Math 30-1 diploma exam prep',
  title: 'Alberta Math 30-1 Diploma Exam 2027: Dates, Marking, Prep',
  description: 'The Math 30-1 diploma exam for 2026 to 2027: all five dates, how the 70/30 final mark works, how written responses are scored, two worked responses, a countdown.',
  ogDescription: 'Every Math 30-1 diploma sitting from November 2026 to August 2027, the 70 and 30 arithmetic, Alberta\'s scoring guide for written responses, and an eight-week plan built backward from exam day.',
  twitterDescription: 'Math 30-1 diploma exam 2026 to 2027: dates, marking and an eight-week plan.',
  pageName: 'Alberta Math 30-1 Diploma Exam Prep',
  webPageDescription: 'A preparation guide for Alberta students writing the Mathematics 30-1 diploma exam in 2026 to 2027, built from Alberta Education and Childcare\'s schedule, bulletin, student guide and calculator rules, with two worked written responses, a short mock and a countdown.',
  courseDescription: 'Live online Math 30-1 diploma preparation for Alberta students, taught alongside the school course in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'Math 30-1 diploma prep',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#dates', label: 'Dates' },
    { href: '#mark', label: 'The 70 and 30' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#responses', label: 'Worked responses' },
    { href: '#countdown', label: 'Countdown' }
  ],
  eyebrow: 'Alberta &middot; Grade 12 &middot; Diploma exam 2026 to 2027',
  h1: 'Alberta Math 30-1 diploma exam prep, 2026 to 2027',
  lede: 'The Mathematics 30-1 diploma exam is one sitting of three hours that decides 30 per cent of a Grade 12 student&rsquo;s final mark in Alberta&rsquo;s calculus-track course. It is written on a computer, except for the written responses, which go on paper and are marked by Alberta teachers against a published scoring guide. This page collects what Alberta Education and Childcare has published for 2026 to 2027, works two written responses the way the scoring guide rewards, and lays out an eight-week plan. We teach alongside the student&rsquo;s Math 30-1 class; we do not grant provincial credits.',
  secondaryCta: { href: '#countdown', label: 'See the eight-week plan' },
  wa: 'Hello Modern Age Coders, my teen in Alberta is writing the Math 30-1 diploma exam and would like help preparing. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Diploma practice in the written-response format',
  spec: [
    ['Exam', 'Mathematics 30-1 diploma, 2026 to 2027'],
    ['Weight', '30% of the final course mark'],
    ['Length', '3 hours designed, 3 more allowed'],
    ['Questions', '32 machine-scored, 3 written-response'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Credit', 'None from us: we teach alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Alberta Math 30-1 diploma exam is designed for three hours (three more are allowed), has 32 machine-scored and 3 written-response questions, and counts for 30 per cent of the final mark. In 2026 to 2027 it runs on 3 November 2026 and 20 January, 8 April, 17 June and 5 August 2027. Modern Age Coders prepares students for it in live online classes, one to one or in a batch, within the Western Canada Grade 12 Math course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for the diploma year',
    lede: 'The first is built around Math 30-1 and its written responses. The others widen the base for students who want more room.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'ALB / 01', title: 'Western Canada Grade 12 Math', note: 'Grade 12. Math 30-1 outcomes in order, with timed mixed sets and full written responses marked against the scoring guide.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'ALB / 02', title: 'Precalculus', note: 'Grades 10 to 12. Functions, exponentials and trigonometry with a second set of problems to practise on.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'ALB / 03', title: 'High school mathematics', note: 'Grades 9 to 12. For gaps in factoring and algebra that slow every 30-1 written response.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'The 2026 to 2027 schedule',
      h2: 'Every Math 30-1 diploma sitting, November 2026 to August 2027',
      lede: 'Alberta publishes one schedule a year in its General Information Bulletin for the Diploma Examinations Program. For 2026 to 2027 it lists five administrations of Mathematics 30-1, each in the same three-hour morning slot that Mathematics 30-2 shares.',
      body: [
        { kind: 'table', caption: 'Mathematics 30-1 diploma exam dates, 2026 to 2027, from Alberta&rsquo;s General Information Bulletin schedule pages (read 22 October 2026)', head: ['Administration', 'Day and date', 'Official time'], rows: [
          ['November 2026', 'Tuesday 3 November 2026', '9 AM to 12 PM'],
          ['January 2027', 'Wednesday 20 January 2027', '9 AM to 12 PM'],
          ['April 2027', 'Thursday 8 April 2027', '9 AM to 12 PM'],
          ['June 2027', 'Thursday 17 June 2027', '9 AM to 12 PM'],
          ['August 2027', 'Thursday 5 August 2027', '9 AM to 12 PM']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the schedule',
          left: [
            'Under each month Alberta adds the same line: &ldquo;All students are provided with up to double the official time noted above if they require it.&rdquo; So the 9 AM to 12 PM slot is the designed time, and a student may keep working past noon. The June page also notes &ldquo;No exams scheduled on June 21, National Indigenous Peoples Day.&rdquo;',
            'January and June are the large administrations. The bulletin says some subjects &ldquo;may have two distinct forms&rdquo; then, both equated to the same baseline, and that each school receives one form per subject.'
          ],
          rightH3: 'Who registers whom',
          right: [
            'Alberta&rsquo;s writing page is clear on registration: &ldquo;School staff will register students enrolled in diploma exams courses for the first time.&rdquo; A student repeating the exam is different: &ldquo;Students who retake courses will not automatically be registered&rdquo;, and they register online through myPass.',
            'The student guide confirms the five writing sessions for Math 30-1 (November, January, April, June and August), so a student who misses one sitting or wants another attempt has several choices in the same school year.'
          ] },
        { kind: 'p', mt: true, html: '<b>What happened in January 2026.</b> Alberta&rsquo;s overview page records that &ldquo;Alberta&rsquo;s government has cancelled the January 2026 diploma examinations and Grade 9 Provincial Achievement Tests (PATs).&rdquo; Students could write the missed exam in April or June 2026 instead; those who chose not to &ldquo;will receive their school-awarded mark as their final official course mark&rdquo;, and &ldquo;A notation will be added to transcripts confirming that no diploma exam was written.&rdquo; The 2026 to 2027 schedule above restores a January sitting, on 20 January 2027.' },
        { kind: 'source', html: 'Sources: Alberta Education and Childcare, ' + SRC_SCHEDULE + ' (General Information Bulletin, pages 11 to 15), ' + SRC_OVERVIEW + ' and <a class="ag-inline-link" href="https://www.alberta.ca/writing-diploma-exams" rel="noopener" target="_blank">Writing diploma exams</a>, read 22 October 2026. The overview page still labels its schedule link 2025/26; the dates above come from the 2026-2027 bulletin itself. We are not connected with Alberta Education and Childcare.' }
      ]
    },
    {
      id: 'mark', tint: 'deep', eyebrow: 'The 70 and 30',
      h2: 'How the diploma exam changes the final Math 30-1 mark',
      lede: 'Alberta states the rule in two sentences: &ldquo;70% of the final mark comes from course work. The remaining 30% comes from the diploma exam.&rdquo; It adds that the weighting &ldquo;returned to 30% effective September 1, 2023&rdquo;, and that &ldquo;To pass a diploma exam course, you must earn a final combined mark of at least 50%.&rdquo;',
      body: [
        { kind: 'table', caption: 'The 70 and 30 rule applied to sample marks (our arithmetic; Alberta&rsquo;s own example is the first row)', head: ['School-awarded mark', 'Diploma exam mark', '0.7 &times; school + 0.3 &times; diploma', 'What it shows'], numCols: [0, 1, 2], rows: [
          ['68%', '60%', '47.6 + 18 = 65.6, given by Alberta as 66%', 'Alberta&rsquo;s worked example on its overview page'],
          ['80%', '60%', '56 + 18 = 74%', 'A 20-point gap costs 6 points'],
          ['72%', '72%', '50.4 + 21.6 = 72%', 'Equal marks leave the result unchanged'],
          ['90%', '70%', '63 + 21 = 84%', 'A strong school mark absorbs a weaker exam'],
          ['75%', '85%', '52.5 + 25.5 = 78%', 'A strong exam lifts the mark, but only by 30% of the gap'],
          ['55%', '35%', '38.5 + 10.5 = 49%', 'Under the 50% Alberta requires to pass the course']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the arithmetic tells a student',
          left: [
            'Each point on the diploma exam moves the final mark by 0.3 of a point; each point of school mark moves it by 0.7. So the exam cannot be ignored, but neither can the term. A student who coasts through the units and hopes to rescue the year in June is working against a 70 per cent weight.',
            'The table is arithmetic, not a forecast. Nobody can honestly promise a diploma mark in advance, and we do not. What we can do is make sure the student walks in having practised the format, the timing and the written responses until none of them is a surprise.'
          ],
          rightH3: 'Rescores and rewrites',
          right: [
            'A student who doubts a result can ask for a rescore through myPass, but Alberta warns that &ldquo;The mark resulting from rescoring becomes your final exam mark, even if it is lower than the original mark.&rdquo; For Math 30-1 only the written responses are remarked; the machine-scored part is not rescored.',
            'A rewrite is the other route: &ldquo;You may also rewrite a diploma exam without repeating the diploma course.&rdquo; Alberta&rsquo;s math fact sheet adds that students rewriting Math 30-1 &ldquo;must rewrite the entire exam&rdquo;, and the transcript keeps the highest diploma mark and highest school-awarded mark.'
          ] },
        { kind: 'source', html: 'Sources: ' + SRC_OVERVIEW + ' (weighting, 70 and 30, the 68 and 60 example, the 50% pass rule) and Writing diploma exams (rescores, rewrites), read 22 October 2026. The calculations in the table are ours.' }
      ]
    },
    {
      id: 'format', tint: 'tint', eyebrow: 'On the day',
      h2: 'What the Math 30-1 exam looks like on screen and on paper',
      lede: 'Alberta has moved its provincial assessments to a digital platform: students &ldquo;write diploma exams and provincial achievement tests in a digital environment rather than pencil and paper.&rdquo; Math 30-1 is a hybrid. The 32 machine-scored questions are answered on screen; the three written responses are written on printed answer sheets that the school scans and uploads afterwards.',
      body: [
        { kind: 'table', caption: 'The Math 30-1 instructions page and student guide, summarized (Alberta Education and Childcare, 2026 to 2027)', head: ['Item', 'What Alberta says'], rows: [
          ['Time', '&ldquo;This closed-book examination was developed to be completed in 3 hours; however, you may take an additional 3 hours, should you need it.&rdquo;'],
          ['Machine-scored', '32 questions, 75% of the exam mark, each worth one mark: four-choice questions and numerical responses typed in a box'],
          ['Written response', '3 questions, 25% of the exam mark: &ldquo;Written-response questions are worth five marks each in Math 30-1&rdquo;'],
          ['Formula sheet', 'Shown on screen under the Resources icon; &ldquo;a paper version of the formula sheet is also permitted&rdquo;'],
          ['Calculator', 'One approved graphing calculator, which the supervisor clears and sets up both before and after'],
          ['Other tools', '&ldquo;A ruler, protractor, and highlighter may be used for math exams.&rdquo; Scrap paper comes from the supervisor and earns no marks'],
          ['Bring', 'Pens, HB pencils, the approved calculator and photo ID'],
          ['After', 'Results on myPass &ldquo;approximately 3 weeks after writing&rdquo;; the exam itself &ldquo;will be fully secured and will not be released&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Numerical responses have their own rules',
          left: [
            'For a numerical-response question the student types a number, rounded &ldquo;to the nearest tenth or nearest hundredth, as specified in the question.&rdquo; Two instructions trip people up. First, for a value between 0 and 1, &ldquo;record the 0 before the decimal place&rdquo;. Second, &ldquo;Students should retain all decimals throughout the question, and rounding should occur only in the final answer.&rdquo;',
            'We drill both with every calculator question in class: the student says the rounding instruction aloud before pressing a key, and stores intermediate results in calculator memory instead of copying a rounded value back in.'
          ],
          rightH3: 'The calculator rules for 2026 to 2027',
          right: [
            'Alberta&rsquo;s August 2026 calculator document lists approved graphing models, among them the TI-84 Plus CE, the TI-Nspire CX II and the Casio fx-9750 GIII &ldquo;(must be in Examination Mode)&rdquo;; the TI-Nspire CX II CAS is allowed only with &ldquo;CAS must be disabled&rdquo;.',
            'Prohibited properties include &ldquo;symbolic manipulation capabilities&rdquo;, the &ldquo;ability to provide trigonometric calculation exact values&rdquo; and the &ldquo;ability to simplify radicals and rationalize denominators&rdquo;. In other words, the calculator will not hand a student the exact value of cos(&pi;/6). That has to come from the unit circle.'
          ] },
        { kind: 'source', html: 'Sources: ' + SRC_BULL + ' (instructions page, machine-scored questions, security); Alberta&rsquo;s <a class="ag-inline-link" href="https://www.alberta.ca/system/files/ecc-guide-for-students-mathematics.pdf" rel="noopener" target="_blank">Guide for Students: Mathematics 30-1 / 30-2</a>; <a class="ag-inline-link" href="https://www.alberta.ca/system/files/custom_downloaded_images/edc-calculator-information-and-rules.pdf" rel="noopener" target="_blank">2026-27 Calculator Information and Rules</a>; Diploma exams overview. Read 22 October 2026.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'How written responses are marked',
      h2: 'The scoring guide and the directing words',
      lede: 'The written responses are a quarter of the exam, and they are where a well-prepared student pulls ahead. Each of the three questions has two parts, and the bulletin publishes the general scoring guide the markers start from.',
      body: [
        { kind: 'table', caption: 'Math 30-1 written response: the general scoring guide in brief (from the 2026 to 2027 bulletin)', head: ['Score', '2-mark part', '3-mark part'], numCols: [0], rows: [
          ['0', 'The response does not address the question or is invalid', 'The response does not address the question or is invalid'],
          ['1', '&ldquo;basic mathematical understanding&rdquo;, finding a partial solution', '&ldquo;minimal mathematical understanding&rdquo;, completing initial stages of a solution'],
          ['2', '&ldquo;complete mathematical understanding&rdquo;, a complete and correct solution', '&ldquo;good mathematical understanding&rdquo;, a partial solution'],
          ['3', 'Not used', '&ldquo;complete mathematical understanding&rdquo;, a complete and correct solution'],
          ['Half marks', '0.5 and 1.5 available', '0.5, 1.5 and 2.5 available'],
          ['Total', 'The two parts are scored separately and &ldquo;combined for a total of 5 marks&rdquo;', '']
        ] },
        { kind: 'table', mt: true, caption: 'Eight of Alberta&rsquo;s mathematics directing words, quoted from the bulletin (bolded on the exam)', head: ['Directing word', 'Alberta&rsquo;s definition', 'What a marker looks for (our reading)'], rows: [
          ['Algebraically', '&ldquo;Using mathematical procedures that involve variables or symbols to represent values&rdquo;', 'A complete algebraic process; a calculator answer alone does not qualify'],
          ['Compare', '&ldquo;Examine the character or qualities of two things by providing characteristics of both that point out their mutual similarities and differences&rdquo;', 'An explicit statement of what is alike and what differs, with evidence'],
          ['Determine', '&ldquo;Find a solution, to a specified degree of accuracy, to a problem by showing appropriate formulas, procedures, and/or calculations&rdquo;', 'Every step written, rounding as asked'],
          ['Evaluate', '&ldquo;Find a numerical value or equivalent for an equation, formula, or function&rdquo;', 'A value, correctly substituted'],
          ['Justify', '&ldquo;Indicate why a conclusion has been stated by providing supporting reasons and/or evidence that form a mathematical argument&rdquo;', 'A position stated, then reasons'],
          ['Prove', '&ldquo;Establish the truth or validity of a statement by giving factual evidence or logical argument&rdquo;', 'A general argument, not one checked case'],
          ['Sketch', '&ldquo;Provide a drawing that represents the key features or characteristics of an object or graph&rdquo;', 'Scaled axes, intercepts, asymptotes, end behaviour'],
          ['Verify', '&ldquo;Establish, by substitution for a particular case or by geometric comparison, the truth of a statement&rdquo;', 'One case checked; not the same as prove']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Partial marks are real marks',
          left: [
            'The bulletin tells teachers to encourage students &ldquo;to try to solve the problems in both parts because an attempt at a solution may be worth partial marks.&rdquo; On a 5-mark question, a correct setup that stalls can still earn 1 or 1.5 on each part. A blank earns nothing.',
            'Alberta&rsquo;s math fact sheet puts the other side plainly: &ldquo;Students will not be able to obtain full credit for a response without supporting work.&rdquo; A correct final number with no work beside it is not a full-mark response.'
          ],
          rightH3: 'The words markers keep writing about',
          right: [
            'In the commentary, markers say many students did not show they know &ldquo;the directing word algebraically requires students to demonstrate a complete algebraic process or procedure&rdquo;, or that compare needs an explicit statement of similarities and differences. Determine means every step.',
            'We teach the directing words the way a language teacher teaches verbs: each one with a short example response, then a question where the student has to say which word is in bold before writing anything.'
          ] }
      ]
    },
    {
      id: 'responses', tint: 'tint', eyebrow: 'Worked responses, ours',
      h2: 'Two written responses, set out the way the scoring guide rewards',
      lede: 'Both questions are ours, written for this page in the diploma&rsquo;s two-part shape. They are not Alberta Education questions, and they do not adapt any released or secured item. Each targets a weakness Alberta&rsquo;s commentary names: specific terms of a binomial with non-linear terms, and counting with several constraints.',
      body: [
        { kind: 'p', html: '<b>Response 1.</b> Part 1 (3 marks): <b>determine</b> the term containing x<sup>7</sup> in the expansion of (x<sup>2</sup> &minus; 2/x)<sup>8</sup>. Part 2 (2 marks): <b>justify</b> whether the expansion has a constant term.' },
        { kind: 'ol', items: [
          '<b>Write the general term.</b> t<sub>k+1</sub> = <sub>8</sub>C<sub>k</sub> (x<sup>2</sup>)<sup>8&minus;k</sup> (&minus;2/x)<sup>k</sup>. Keep the minus sign inside the second term; dropping it is the commonest sign error.',
          '<b>Collect the powers of x.</b> (x<sup>2</sup>)<sup>8&minus;k</sup> gives x<sup>16&minus;2k</sup>, and (1/x)<sup>k</sup> gives x<sup>&minus;k</sup>, so the term is <sub>8</sub>C<sub>k</sub> (&minus;2)<sup>k</sup> x<sup>16&minus;3k</sup>.',
          '<b>Solve for k.</b> 16 &minus; 3k = 7, so k = 3. The term wanted is t<sub>4</sub>, the fourth term, because the general term is numbered k + 1.',
          '<b>Evaluate.</b> <sub>8</sub>C<sub>3</sub> = 56 and (&minus;2)<sup>3</sup> = &minus;8, so the term is &minus;448x<sup>7</sup>. That completes part 1.',
          '<b>Part 2: state the position, then the reason.</b> There is no constant term. A constant term needs 16 &minus; 3k = 0, which gives k = 16/3, and k must be a whole number from 0 to 8. Since no whole number works, no term is free of x.'
        ] },
        { kind: 'p', mt: true, html: '<b>Response 2.</b> Part 1 (3 marks): using the digits 1 to 7 with no repetition, <b>determine</b> how many four-digit even numbers greater than 5000 can be formed. Part 2 (2 marks): <b>explain</b> why the count cannot be found with one product of choices.' },
        { kind: 'ol', items: [
          '<b>List the constraints.</b> There are three: the first digit must be 5, 6 or 7 (greater than 5000), the last digit must be 2, 4 or 6 (even), and no digit repeats.',
          '<b>Spot the clash.</b> The digit 6 appears in both lists. If 6 is used first, it cannot also be last, so the number of choices for the last digit depends on the first. That is the signal to split into cases.',
          '<b>Case A: the first digit is 6.</b> The last digit is 2 or 4: 2 choices. The middle two places use any 2 of the 5 remaining digits in order: <sub>5</sub>P<sub>2</sub> = 20. Case A gives 1 &times; 20 &times; 2 = 40.',
          '<b>Case B: the first digit is 5 or 7.</b> The last digit is 2, 4 or 6: 3 choices. The middle again has <sub>5</sub>P<sub>2</sub> = 20 arrangements. Case B gives 2 &times; 20 &times; 3 = 120.',
          '<b>Add the cases.</b> 40 + 120 = 160 numbers. (We confirmed the count by listing every arrangement in a short program.)',
          '<b>Part 2.</b> A single product would treat the choices for the first and last digits as independent, giving 3 &times; 3 &times; 20 = 180, which counts numbers such as 6 _ _ 6 that repeat a digit. The cases remove those 20 impossible numbers.'
        ] },
        { kind: 'p', mt: true, html: 'Notice the shape of both responses: a position or formula first, one step per line, and a final sentence that answers the question in words. That shape is what Alberta&rsquo;s written-response instructions ask for when they say responses &ldquo;must be presented in a well-organized manner&rdquo; and &ldquo;must address all aspects of the question.&rdquo;' }
      ]
    },
    {
      id: 'mock', tint: 'deep', eyebrow: 'A short mock, ours',
      h2: 'Eight questions in the diploma format, with answers',
      lede: 'Seven numerical-response questions and one written response, all ours and none taken from Alberta Education. Give yourself 25 minutes, follow the rounding instructions exactly, and use a calculator only where the question allows it.',
      body: [
        { kind: 'ol', items: [
          '<b>Numerical response, no calculator.</b> Evaluate log<sub>2</sub>48 &minus; log<sub>2</sub>3.',
          '<b>Numerical response, calculator.</b> Solve 5<sup>2x</sup> = 40. Record x to the nearest hundredth.',
          '<b>Numerical response.</b> The graph of y = x<sup>3</sup> is stretched vertically by a factor of 2. How many invariant points are there?',
          '<b>Numerical response.</b> Record the period of y = 4cos(3x) &minus; 1, in radians, to the nearest hundredth.',
          '<b>Numerical response.</b> A committee of 3 is chosen from 7 students, and one named student must be on it. How many committees are possible?',
          '<b>Numerical response.</b> Record cos(&pi;/3) to the nearest hundredth.',
          '<b>Numerical response.</b> In the expansion of (a + b)<sup>9</sup>, how many terms are there?',
          '<b>Written response.</b> Part 1: <b>algebraically determine</b> the zeros of P(x) = 2x<sup>3</sup> + x<sup>2</sup> &minus; 13x + 6. Part 2: <b>sketch</b> y = P(x), labelling the intercepts.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>4.</b> The quotient law gives log<sub>2</sub>(48/3) = log<sub>2</sub>16 = 4.',
          '<b>1.15.</b> 2x = log 40 / log 5, so x = 1.1460..., which rounds to 1.15. Rounding log 40 to 1.6 too early gives a different answer.',
          '<b>1.</b> A vertical stretch leaves only points with y = 0 unchanged, and y = x<sup>3</sup> crosses the x-axis once, at the origin.',
          '<b>2.09.</b> The period is 2&pi;/3 = 2.0943..., or 2.09.',
          '<b>15.</b> With the named student placed, choose 2 more from the other 6: <sub>6</sub>C<sub>2</sub> = 15.',
          '<b>0.50.</b> cos(&pi;/3) is exactly 1/2. To the nearest hundredth it is recorded as 0.50, with the 0 before the decimal place, as Alberta instructs.',
          '<b>10.</b> An expansion to the power n has n + 1 terms.',
          '<b>Zeros 2, 1/2 and &minus;3; y-intercept 6.</b> P(2) = 16 + 4 &minus; 26 + 6 = 0, so x &minus; 2 is a factor. Dividing gives 2x<sup>2</sup> + 5x &minus; 3 = (2x &minus; 1)(x + 3). For the sketch: positive leading coefficient and odd degree, so the graph falls to the left and rises to the right, crossing at x = &minus;3, 1/2 and 2, and meeting the y-axis at 6.'
        ] }
      ]
    },
    {
      id: 'countdown', tint: 'tint', eyebrow: 'An eight-week plan, ours',
      h2: 'Eight weeks to the June 2027 diploma',
      lede: 'This is our plan, built backward from Thursday 17 June 2027; move every row by the same number of weeks for the November, January, April or August sittings. It assumes the student is still finishing the course at school, so it adds about three focused hours a week rather than replacing class.',
      body: [
        { kind: 'table', caption: 'Countdown to Thursday 17 June 2027 (ours)', head: ['Week starting', 'Focus', 'Done when'], rows: [
          ['Monday 19 April 2027', 'Diagnostic: one mixed set under time, every mistake logged by unit', 'The error log names the two weakest units'],
          ['Monday 26 April 2027', 'Weakest unit, part 1, from the student&rsquo;s own notes', 'Ten questions in that unit done without notes'],
          ['Monday 3 May 2027', 'Weakest unit, part 2, plus directing words', 'Every directing word defined from memory'],
          ['Monday 10 May 2027', 'Written responses: three per week, scored with the general guide', 'The student can score their own response within half a mark'],
          ['Monday 17 May 2027', 'Second weakest unit, plus numerical-response rounding', 'No rounding mistakes in a set of ten'],
          ['Monday 24 May 2027', 'Full three-hour mixed practice, on screen, with the approved calculator', 'Finished inside three hours'],
          ['Monday 31 May 2027', 'Mistakes from the full practice, then a second full practice', 'Error log shorter than in April'],
          ['Monday 7 June 2027', 'Light review: formula sheet, unit circle, the error log', 'Nothing new learned after Tuesday 15 June']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Exam-day checklist',
          left: [
            'The night before: calculator charged or fresh batteries, HB pencils, pens and photo ID packed. Check the calculator is an approved model, because a student may bring only one, and the supervisor clears and configures it before and after.',
            'In the room: read every written-response question before starting the machine-scored ones, so the brain works on them in the background. Flag hard questions and come back. Answer every machine-scored question; there is no reason to leave one blank.'
          ],
          rightH3: 'Where the practice material lives',
          right: [
            'Alberta posts practice tests on its digital assessment platform, and the writing page links released items and the written-response information document. Use them in the final weeks, timed, in the same digital format.',
            'We never copy Alberta&rsquo;s items into our classes. Students sit the official practice on Alberta&rsquo;s own platform; our lessons use original questions written to the same outcomes, so the official material stays fresh for timed rehearsal.'
          ] }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'Our part, and the clock',
      h2: 'What we do, what the school does, and Alberta time',
      lede: 'Families sometimes ask whether a tutor can stand in for the course. For Math 30-1 the answer is no, and the reason is structural.',
      body: [
        { kind: 'two',
          leftH3: 'Who does what',
          left: [
            'The school teaches the course, awards the 70 per cent and grants the credit. Alberta sets, administers and marks the diploma exam that supplies the other 30 per cent. We do neither: we teach alongside the student&rsquo;s Math 30-1 class and we do not grant provincial credits.',
            'What we add is time with one teacher who knows the format: worked responses marked against the guide, practice timed to the sitting, and a student who arrives knowing exactly what each directing word asks for.'
          ],
          rightH3: 'Alberta time and India time',
          right: [
            'Alberta does not change its clocks: it sits at UTC-6 through the whole year (IANA tz release 2026e), so a class booked for a Saturday morning in Calgary or Edmonton keeps the same local time in November and in June.',
            'Our teachers keep India time, which runs 11 hours 30 minutes ahead of Alberta in every month. A morning class in Alberta is evening in India, which is why weekend mornings are easy to schedule.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How ready is your teen?',
    h2: 'Four stages of diploma readiness',
    lede: 'Our own stages, used to decide where the remaining weeks should go.',
    table: { caption: 'Diploma readiness in Math 30-1 (ours)', head: ['Stage', 'Signs of it'], rows: [
      ['1. Unfamiliar', 'Has not seen the on-screen format, the formula sheet or a written-response answer sheet'],
      ['2. Familiar', 'Knows the format and the directing words but runs out of time on a full set'],
      ['3. Fluent', 'Finishes a mixed set in three hours and scores own written responses close to the guide'],
      ['4. Exam-ready', 'Error log is short, rounding is automatic, and the last week is review only']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask to see one written response your teen wrote this month. If you can follow every step without asking a question, a marker probably can too.',
      'A stage 1 student two months out is not in trouble. A stage 1 student two weeks out needs a narrower plan, not a longer one.'
    ] },
    right: { h3: 'For students', ps: [
      'Say the directing word aloud before you write. Determine, justify and verify ask for three different things.',
      'Do one full three-hour practice before the real day. The third hour feels different, and it is better to learn that early.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Grade 11 and 12 students',
    lede: 'All taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'More math', sub: 'Grades 10 to 12', courses: [
        { code: 'ALB / M / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'The step after 30-1, for Math 31 students.' },
        { code: 'ALB / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and equations, rebuilt properly.' },
        { code: 'ALB / M / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance, taken further.' }
      ] },
      { num: 'II', h3: 'Contests', sub: 'Grades 9 to 12', courses: [
        { code: 'ALB / C / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Euclid problems for strong Grade 12 students.' },
        { code: 'ALB / C / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Proof-based problems beyond the course.' },
        { code: 'ALB / C / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Counting problems, solved in code.' }
      ] },
      { num: 'III', h3: 'After the diploma', sub: 'Teens', courses: [
        { code: 'ALB / A / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first language for a university program.' },
        { code: 'ALB / A / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real data, regression and charts.' },
        { code: 'ALB / A / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Functions and probability at work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes timed to your sitting',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Alberta, set when the batch is chosen.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings in Alberta time.' },
      { time: '1-on-1', l: 'Extra sessions in the final weeks before the sitting.' }
    ],
    cells: [
      { h3: 'Format first', p: 'On-screen practice with the real tools.' },
      { h3: 'Scored responses', p: 'Marked against the general guide.' },
      { h3: 'Directing words', p: 'Taught as a vocabulary, with examples.' },
      { h3: 'Timed sets', p: 'Built up to the full three hours.' },
      { h3: 'Error log', p: 'Reviewed in every class.' },
      { h3: 'Your choice of size', p: 'Fifteen to twenty in a batch, or solo.' }
    ]
  },

  projectsH2: 'Student work beyond the exam',
  projectsLede: 'What students build once the math is solid, in Python and on the web. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews from families and students, quoted from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class costs nothing. Continuing means one monthly fee for eight live classes, displayed below in your currency, and no commitment beyond the month you are in.',
    free: ['A free first class', 'Bring a recent practice set', 'No payment details asked'],
    group: ['Batch of fifteen to twenty', 'One teacher all year', 'You pick the batch', 'Paid month by month'],
    one: ['One teacher, one student', 'Extra sessions before the sitting', 'Planned from the error log']
  },

  faq: {
    eyebrow: 'Questions about the diploma',
    h2: 'Math 30-1 diploma exam: common questions',
    items: [
      { q: 'When is the Math 30-1 diploma exam in 2027?', a: 'Alberta\'s 2026 to 2027 schedule lists Wednesday 20 January, Thursday 8 April, Thursday 17 June and Thursday 5 August 2027, each from 9 AM to 12 PM, after a first sitting on Tuesday 3 November 2026.' },
      { q: 'How long is the Math 30-1 diploma exam?', a: 'It is designed to be completed in 3 hours, and every student may take 3 more hours if needed, for a total of 6 hours at most.' },
      { q: 'How much is the diploma exam worth?', a: 'Thirty percent of the final course mark. Alberta says the weighting returned to 30 percent on 1 September 2023, with the other 70 percent coming from the school-awarded mark. The combined mark must be at least 50 percent to pass the course.' },
      { q: 'How many questions are on the Math 30-1 diploma?', a: 'For 2026 to 2027 there are 32 machine-scored questions worth 75 percent of the exam and 3 written-response questions worth 25 percent. Each written response is worth 5 marks and has two parts.' },
      { q: 'Is the Math 30-1 diploma exam written on a computer?', a: 'Mostly. Alberta now runs diploma exams on a digital platform, so the machine-scored questions are answered on screen. The written responses are written on printed answer sheets that the school scans and uploads after the exam.' },
      { q: 'Which calculator can I use on the Math 30-1 diploma?', a: 'One approved graphing calculator, cleared and configured by the supervisor before and after. Alberta\'s 2026 to 2027 list includes the TI-84 Plus CE and the Casio fx-9750 GIII in Examination Mode. Calculators that give exact trigonometric values or simplify radicals are not allowed.' },
      { q: 'Can I rewrite the Math 30-1 diploma exam?', a: 'Yes. Alberta lets students rewrite a diploma exam without repeating the course, the whole exam must be rewritten, and the transcript keeps the highest diploma mark. Students who retake must register themselves through myPass.' },
      { q: 'Should I ask for a rescore?', a: 'Think carefully first. Only the written responses are remarked, and Alberta says the rescored mark becomes the final exam mark even if it is lower than the original.' },
      { q: 'Do you grant credit for Math 30-1?', a: 'No. Our lessons run alongside the school\'s course, and we do not grant provincial credits. The school grants the credit and Alberta marks the diploma exam.' },
      { q: 'When can my teen take classes from Alberta?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta stays on UTC-6 all year, so the local time of a class does not shift.' },
      { q: 'What does diploma preparation with you cost?', a: 'The first class is free. Families who carry on pay a monthly fee for eight live classes and can leave at the end of a month. The Fees part of this page shows the live figures.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More reading',
    lede: 'For Alberta students in their diploma year.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Everything we have written for Canada.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'Coding and math across the province.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'How Math 30-1 compares with MHF4U and Pre-calculus 12.' },
      { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutor', p: 'One-to-one help in the final year.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions and trigonometry, taken slowly.' },
      { href: '/blog/how-to-solve-quadratic-equations', label: 'Solving quadratics', p: 'The factoring every written response leans on.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'Every province&rsquo;s clock for 2026 to 2027.' },
      { href: '/euclid-contest-preparation', label: 'Euclid contest', p: 'A harder test for strong Grade 12 students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method for live classes.' }
    ]
  },

  start: {
    h2: 'Book a free class before your sitting',
    lede: 'Tell us which sitting your teen is writing and send one recent unit test. The first class looks at that test and maps the weeks left.',
    readFirst: 'Rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our classes, and the <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">course syllabus</a> lays out the Grade 12 plan.',
    note: 'Every class is live on video, taught by teachers working from India, so there is nothing to drive to. WhatsApp reaches us quickly from anywhere in Alberta.',
    formNote: 'No card is needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Diploma year', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutor' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times in Canada' }
      ] }
    ],
    bottomRight: 'Read the bold word, then write for the marker'
  },

  personalityCss: `
.ag-root.ag-alb .ag-hero h1 { letter-spacing: -0.015em; max-width: 21ch; }
.ag-root.ag-alb .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-alb .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-alb .ag-table caption { text-align: left; font-style: normal; letter-spacing: 0.01em; }
.ag-root.ag-alb .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-alb .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Alberta Education and Childcare: General Information Bulletin 2026-2027 diploma schedule pages (five Math 30-1 sittings); Diploma exams overview (30% from 1 September 2023, 70/30, 50% pass, 68/60 example, January 2026 cancellation, digital environment, results in about 3 weeks, photo ID); Writing diploma exams (materials, registration, rescores, rewrites); Mathematics 30-1 Information Bulletin 2026-2027 (instructions page, question formats, numerical-response rules, general scoring guide, directing words, security, forms); Guide for Students, Mathematics 30-1 / 30-2; Math diploma fact sheet 2019; 2026-27 Calculator Information and Rules.',
    localProject: 'Two original two-part written responses: the x^7 term of (x^2 - 2/x)^8 (-448x^7, no constant term because k = 16/3) and four-digit even numbers above 5000 from the digits 1 to 7 (40 + 120 = 160, brute-force checked); an original eight-question mock with answers; a 70 and 30 table of our arithmetic; an eight-week countdown to Thursday 17 June 2027. Lesson family: write for the marker.',
    requiredMentions: ['Countdown to Thursday 17 June 2027 (ours)', 'Monday 19 April 2027', 'cos(&pi;/3) is exactly 1/2', '47.6 + 18 = 65.6', 'record the 0 before the decimal place', 'combined for a total of 5 marks', 'even if it is lower than the original mark', 'must be in Examination Mode', 'the term is &minus;448x<sup>7</sup>', '40 + 120 = 160', 'A notation will be added to transcripts confirming that no diploma exam was written'],
    sources: [
      { claim: 'Math 30-1 diploma dates for November 2026 and January, April, June and August 2027; double time.', url: 'https://www.alberta.ca/system/files/custom_downloaded_images/edc-diploma-exam-schedule.pdf' },
      { claim: '30% weighting since 1 September 2023, 70/30, 50% pass, worked example, January 2026 cancellation, digital format, results timing.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Materials, registration, rescores and rewrites.', url: 'https://www.alberta.ca/writing-diploma-exams' },
      { claim: 'Instructions page, question formats, numerical-response rules, scoring guide, directing words, security.', url: 'https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf' },
      { claim: 'Five marks per written response, tools allowed, formula sheet, writing sessions.', url: 'https://www.alberta.ca/system/files/ecc-guide-for-students-mathematics.pdf' },
      { claim: 'Approved and prohibited calculators for 2026-27.', url: 'https://www.alberta.ca/system/files/custom_downloaded_images/edc-calculator-information-and-rules.pdf' }
    ],
    rejectedClaims: [
      'Rescore and rewrite fees: printed on Alberta\'s page with a dollar sign, so left off this currency-neutral page; the page links the source instead.',
      'The bill named beside the digital-format paragraph and the reason given for the January 2026 cancellation: left out as political context the page does not need.',
      'Any predicted diploma mark or pass: none; the 70 and 30 table is labelled arithmetic, not a forecast.',
      'Released items, the 2022 practice test or exemplar questions: none reproduced or adapted; all questions are ours.',
      'That the April and August sittings have two forms: the bulletin says two forms are possible in January and June only, so nothing is said about the others.',
      'Any connection with Alberta Education and Childcare, a school or a school authority: none, and the page says so.'
    ]
  }
};
