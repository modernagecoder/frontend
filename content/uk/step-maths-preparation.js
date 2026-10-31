'use strict';
// STEP maths preparation (ag- exam door, UK and US exams cluster, row UK070).
// Sources, read raw with curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/step-maths-preparation/):
//  - OCR STEP Mathematics pages (ocr.org.uk/students/step-mathematics/ and subpages). Verbatim: "STEP is used by the
//    University of Cambridge, the University of Warwick and Imperial College London."; "There are two STEP examinations:
//    STEP 2 and STEP 3."; key dates 2027: 1 March 2027 registration opens, 21 April 2027 last date for modified papers,
//    4 May 2027 registration closes and access arrangements deadline, 14 June 2027 STEP paper 2, 21 June 2027 STEP paper
//    3, 12 August 2027 results at 8am UK time, 19 August 2027 results enquiries; "*In the UK, the test will take place at
//    9am."; "as a candidate you cannot register yourself"; centre needs name, gender, date of birth, UCAS number,
//    universities and course codes; scoring: "each takes three hours"; 12 questions, "Section A: 8 pure questions",
//    "Section B: 2 mechanics questions", "Section C: 2 probability/statistics questions"; "All STEP questions are marked
//    out of 20."; "six best answers only"; grades S, 1, 2, 3, U; "Correct answers always receive full marks, whatever the
//    method used."; for Cambridge "copies of students' answer booklets are sent directly to the university admissions
//    team"; FAQs: "STEP is open to all"; "Calculators are not allowed in the examination."; rulers, protractors and
//    compasses; black pen; "a 48 page answer booklet"; "it is not advisable to attempt more than six questions";
//    crossed-out work not marked; refunds only until the entry deadline. Fees are printed by OCR in pounds and are not
//    repeated here.
//  - OCR, Explanation of Results for STEP 2026 (PDF): STEP Mathematics II (9470) boundaries out of 120: S 84, 1 62, 2 52,
//    3 34; cumulative percentages 8.27, 28.14, 41.97, 73.52. STEP Mathematics III (9475): S 80, 1 56, 2 48, 3 30;
//    cumulative 9.27, 35.73, 48.73, 83.18.
//  - STEP Mathematics Specifications for examinations from June 2026 onwards (PDF, version 1.3): "From the June 2021
//    sitting onwards, STEP Mathematics 1 has not been offered."; STEP 3 "assumes all the content of both the Mathematics
//    1 and the STEP Mathematics 2 specifications"; "We do not permit the use of bilingual dictionaries".
//  - University of Cambridge Faculty of Mathematics STEP page: STEP "normally forms part of a conditional offer";
//    "usually taken in mid to late June"; "STEP is a far better predictor of success in the Mathematical Tripos than
//    A-levels"; "it is aimed at the top 5% or so of all A-level mathematics candidates"; "11-14 questions in two hours"
//    versus "no more than 6 questions in three hours"; free STEP Support programme with NRICH "from the summer of Y12
//    onwards"; commercial resources "the Faculty neither endorses nor recommends, since there are more than enough free
//    resources"; Siklos, Advanced Problems in Mathematics, free PDF; STEP database to 2018; MEI solutions 1996 to 2019.
//  - University of Cambridge undergraduate STEP page: "almost all conditional offers from Cambridge for Mathematics and
//    Mathematics with Physics"; "if you apply in October 2026, you should expect to take STEP in June 2027";
//    "Applicants for Mathematics are normally asked to take both"; grades required vary by College.
//  - University of Cambridge TMUA page: Mathematics applicants also take the TMUA, 12 to 16 October 2026.
//  - University of Warwick admissions tests page: Mathematics applicants "typically be required to take TMUA or STEP";
//    offers without TMUA "conditional upon grade 2 in any STEP paper"; Statistics offers "5.0 in TMUA, or grade 2 in any
//    STEP".
// No STEP question is reproduced; OCR publishes past papers and examiner reports, linked.
// Our own material, labelled on the page: minutes per question (180 / 6 = 30 against 120 / 14 to 120 / 11, about 8.6 to
// 10.9), boundary percentages (84 / 120 = 70 per cent; 62 / 120 about 52 per cent), the "three complete answers" reading
// of the 2026 grade 1 boundary, the reduction-formula question I_n = integral of x^n e^x from 0 to 1 with I_n = e - n
// I_(n-1), bounds 1/(n+1) <= I_n <= e/(n+1), n I_n -> e, and a Python run showing forward recursion from I_0 = 1.718
// turning negative at n = 8 (error multiplied by n!). Lesson family: choose six, then finish a long chain without
// dropping a link.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'STEP', blurb: 'Twelve questions, three hours, and only the top six count. STEP 2 (9470) and STEP 3 (9475) for June 2027, with the 2026 grade boundaries.' },
  slug: 'step-maths-preparation',
  code: 'ste',
  accent: '#83533A',
  accentRationale: 'STEP maths preparation: a burnt sienna #83533A from the cluster allocation, about 5.9:1 on #FBF8F2 and above 4.5:1 on every paper tint, warmer than the Oxford teal and the olympiad slate',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'STEP maths preparation',
  title: 'STEP Maths Preparation and Tuition: STEP 2 and 3 for 2027',
  description: 'STEP maths preparation for June 2027: STEP 2 (9470) and STEP 3 (9475) dates, the top-six-answers rule, 2026 grade boundaries and a worked question of ours.',
  ogDescription: 'STEP gives three hours for twelve questions and counts only the top six. The June 2027 dates, the 2026 grade boundaries from OCR and how to prepare without wasting the summer.',
  twitterDescription: 'STEP maths preparation: STEP 2 and STEP 3 in June 2027, from OCR and Cambridge.',
  pageName: 'STEP Maths Preparation',
  webPageDescription: 'A guide to the Sixth Term Examination Papers in Mathematics, STEP 2 and STEP 3, for Cambridge, Warwick and Imperial applicants, built from OCR\'s STEP pages, the 2026 results explanation and the University of Cambridge STEP guidance.',
  courseDescription: 'Live online STEP preparation for Year 13 students holding or expecting Cambridge, Warwick or Imperial offers: question choice, long algebraic chains, and full solutions read by a teacher every week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'STEP maths preparation',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#dates', label: '2027 dates' },
    { href: '#boundaries', label: 'Grade boundaries' },
    { href: '#worked', label: 'Worked question' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 13 &middot; STEP 2 on 14 June 2027 and STEP 3 on 21 June 2027',
  h1: 'STEP maths preparation: STEP 2 (9470) and STEP 3 (9475)',
  lede: 'STEP is the paper that tells a student what university mathematics feels like before they get there. Each paper lasts three hours and contains twelve questions, and only the six highest-scoring answers count towards the result, so the first skill is not solving but choosing. The University of Cambridge uses STEP in almost every conditional offer for Mathematics, and OCR, which sets and runs it, names Warwick and Imperial as users too. For a student applying in October 2026, the papers fall in June 2027: STEP 2 on the 14th and STEP 3 on the 21st. Below are the papers, the 2027 calendar, what the 2026 grade boundaries actually required, one long question of our own worked through, and how to use the free material the Faculty of Mathematics publishes.',
  secondaryCta: { href: '#worked', label: 'Work one STEP-style question' },
  wa: 'Hello Modern Age Coders, I am preparing for STEP maths and would like a free class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Every STEP fact from OCR or the University of Cambridge',
  spec: [
    ['Set by', 'OCR (Cambridge University Press and Assessment)'],
    ['Papers', 'STEP 2 (9470) and STEP 3 (9475)'],
    ['Each paper', 'Three hours, twelve questions'],
    ['What counts', 'Top six answers, each out of 20'],
    ['Grades', 'S, 1, 2, 3, U'],
    ['2027 dates', '14 June (STEP 2) and 21 June (STEP 3)'],
    ['Calculator', 'Not allowed'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'STEP (Sixth Term Examination Paper) is a mathematics exam set by OCR and used by the University of Cambridge, the University of Warwick and Imperial College London. There are two papers, STEP 2 and STEP 3, each three hours long with twelve questions; only the six highest-scoring answers count, each marked out of 20, and grades run S, 1, 2, 3, U. In 2027 STEP 2 is on 14 June and STEP 3 on 21 June. Modern Age Coders runs live online STEP classes for Year 13 students, as a group of fifteen to twenty or one-to-one, as part of its admissions-test course for TMUA, MAT and STEP.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a STEP candidate',
    lede: 'One for the papers themselves, one for the Further Maths that STEP 3 assumes, and one for problems that go further still.',
    items: [
      { course: 'tmua-mat-step-preparation-course', code: 'STE / 01', title: 'STEP, TMUA and MAT course', note: 'For 16 to 18 year olds. Question choice, long chains of algebra, and solutions read in full every week.' },
      { course: 'a-level-further-maths-course', code: 'STE / 02', title: 'A Level Further Maths', note: 'STEP 3 is built on the Further Mathematics A Level. Gaps here cost whole questions.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'STE / 03', title: 'Olympiad and competition maths', note: 'Invariants, inequalities and number theory for the student who wants harder still.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The two papers',
      h2: 'How are STEP 2 and STEP 3 structured?',
      lede: 'Each paper lasts three hours and has twelve questions in three sections: eight pure, two mechanics and two probability or statistics. OCR marks every attempted question out of 20 and counts the top six, so the maximum on either paper is 120.',
      body: [
        { kind: 'table', caption: 'STEP 2 and STEP 3 as OCR and the University of Cambridge describe them (read 31 October 2026)', head: ['', 'STEP 2 (STEP Mathematics II, 9470)', 'STEP 3 (STEP Mathematics III, 9475)'], rows: [
          ['Based on', 'A Level Mathematics and AS Level Further Mathematics', 'A Level Mathematics and A Level Further Mathematics'],
          ['Length', 'Three hours', 'Three hours'],
          ['Section A', '8 pure questions', '8 pure questions'],
          ['Section B', '2 mechanics questions', '2 mechanics questions'],
          ['Section C', '2 probability/statistics questions', '2 probability/statistics questions'],
          ['Marking', 'Each question out of 20; top six count; 120 maximum', 'Each question out of 20; top six count; 120 maximum'],
          ['Date in 2027', '14 June 2027, 9am in the UK', '21 June 2027, 9am in the UK']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why only six count',
          left: [
            'OCR\'s FAQ is plain about it: a candidate may answer as many questions as they wish, every answer is marked, and the six highest marks are added. Then comes the advice that matters: "it is not advisable to attempt more than six questions, and candidates who do so rarely score as well as those who concentrate on answering six questions."',
            'Our arithmetic makes the reason obvious. Cambridge contrasts A Levels, where students "are expected to answer 11-14 questions in two hours", with STEP\'s "no more than 6 questions in three hours". That is roughly nine to eleven minutes a question at A Level against thirty minutes a question on STEP. A STEP question is three A Level questions long, and it wants to be finished.'
          ],
          rightH3: 'What a question rewards',
          right: [
            'OCR says questions "may test a candidate\'s ability to apply mathematical knowledge in novel and unfamiliar ways" and that solutions "will frequently require insight, ingenuity, persistence and the ability to work through substantial sequences of algebraic manipulation". The last phrase is the one students underestimate.',
            'Two more rules shape how to write. "Correct answers always receive full marks, whatever the method used", unless a question demands a specific method. And crossed-out work is not marked, so a student who scraps an approach should leave it legible until sure.'
          ] },
        { kind: 'p', mt: true, html: 'STEP 1 no longer exists. The current specification states that "From the June 2021 sitting onwards, STEP Mathematics 1 has not been offered." Old STEP 1 papers are still good practice at roughly A Level Mathematics depth, as the Faculty of Mathematics notes, but no offer will ask for one.' },
        { kind: 'source', html: 'Sources: OCR <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/scoring-and-results/" rel="noopener" target="_blank">scoring and results</a>, <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/faqs/" rel="noopener" target="_blank">FAQs</a> and the <a class="ag-inline-link" href="https://www.ocr.org.uk/Images/696329-step-specification-2026.pdf" rel="noopener" target="_blank">STEP specification for June 2026 onwards</a>; the Faculty of Mathematics <a class="ag-inline-link" href="https://www.maths.cam.ac.uk/undergrad/admissions/step" rel="noopener" target="_blank">STEP page</a>; all read 31 October 2026. The per-question minutes are our calculation. Modern Age Coders has no connection with OCR, Cambridge University Press and Assessment or the University of Cambridge.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'The 2027 calendar',
      h2: 'When is STEP in 2027, and how do you register?',
      lede: 'STEP 2 is on 14 June 2027 and STEP 3 on 21 June 2027. Registration runs from 1 March to 4 May 2027 and is made by a test centre, usually the student\'s own school; OCR says a candidate cannot register themselves.',
      body: [
        { kind: 'table', caption: 'STEP key dates 2027, from OCR (OCR reserves the right to change them)', head: ['Date', 'Event'], rows: [
          ['1 March 2027', 'STEP registration opens; centres can register candidates from this date'],
          ['21 April 2027', 'Last date to request modified question papers'],
          ['4 May 2027', 'STEP registration closes; last date to request access arrangements'],
          ['14 June 2027', 'STEP paper 2, 9am in the UK'],
          ['21 June 2027', 'STEP paper 3, 9am in the UK'],
          ['12 August 2027', 'Results released at 8am UK time'],
          ['19 August 2027', 'Last date for results enquiries']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check the offer.</strong> OCR says the university usually names the papers in its offer letter. Cambridge says Mathematics applicants are normally asked to take both, and that the grades required vary by College.',
          '<strong>Find the centre early.</strong> A school that is not yet a STEP centre can apply to become one, OCR says, "even if you are the only person taking a test". Students outside school may be able to sit at their old school or another authorised centre.',
          '<strong>Give the exams officer the details.</strong> Name, gender, date of birth and UCAS number exactly as on the UCAS application, the universities and course codes, and any access arrangements with evidence.',
          '<strong>Ask for the entry number.</strong> OCR tells candidates to ask the exams officer for a candidate entry number as proof the registration is complete. Centres may set an internal deadline well before 4 May.',
          '<strong>Sit both papers a week apart.</strong> Take black pens, a pencil for diagrams, a ruler, a protractor and compasses. No calculator and no bilingual dictionary.',
          '<strong>Results reach universities through UCAS.</strong> For Cambridge, OCR sends the answer booklets themselves to the admissions team, so a near miss can be judged on the actual work.'
        ] },
        { kind: 'p', mt: true, html: 'Timing within the application matters. Cambridge\'s guidance is that a student "should normally expect to take STEP in the summer following your application", and gives the example: apply in October 2026, sit STEP in June 2027. A student who has already sat STEP before applying may be asked to sit it again. Cambridge Mathematics applicants for 2027 entry also took the TMUA in the 12 to 16 October 2026 window, according to Cambridge\'s TMUA page, so the two tests sit at opposite ends of Year 13.' },
        { kind: 'source', html: 'Sources: OCR <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/key-dates-and-fees/" rel="noopener" target="_blank">key dates and fees</a> and <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/how-to-register/" rel="noopener" target="_blank">how to register</a>; Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/after/sixth-term-exam-STEP" rel="noopener" target="_blank">undergraduate STEP guidance</a> and <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/maths-admission-test" rel="noopener" target="_blank">TMUA page</a>; read 31 October 2026. OCR publishes its registration fees on the key dates page; we do not repeat them.' }
      ]
    },
    {
      id: 'boundaries', tint: 'tint', eyebrow: 'What the grades required',
      h2: 'What were the STEP grade boundaries in 2026?',
      lede: 'In 2026 a grade 1 needed 62 out of 120 on STEP 2 and 56 on STEP 3; an S needed 84 and 80. OCR publishes the boundaries and the share of candidates at each grade every August.',
      body: [
        { kind: 'table', caption: 'STEP 2026 grade boundaries (minimum marks out of 120) and cumulative percentages, from OCR\'s Explanation of Results for STEP 2026', head: ['Paper', 'S', '1', '2', '3', 'Reached grade 1 or better'], numCols: [1, 2, 3, 4, 5], rows: [
          ['STEP Mathematics II (9470)', '84', '62', '52', '34', '28.14%'],
          ['STEP Mathematics III (9475)', '80', '56', '48', '30', '35.73%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the numbers',
          left: [
            'Our arithmetic: a grade 1 on STEP 2 in 2026 needed 62 marks, a little over half of 120. Since each question is out of 20, that is three complete solutions and a few marks more. An S needed 84, which is 70 per cent, or four complete solutions and real progress on two others.',
            'Put the other way round, a student who finished three questions properly and wrote nothing else of value would have fallen just short of grade 1 on STEP 2 and just reached it on STEP 3. Boundaries move every year, and these are 2026 figures only, not a target.'
          ],
          rightH3: 'What follows for practice',
          right: [
            'Finishing matters more than starting. Six half-done questions at ten marks each make 60; three finished and three abandoned can make the same, with far less risk. Students who practise reaching the end of a question, rather than sampling many, build the habit the boundaries reward.',
            'Cambridge adds a reason not to panic: the Faculty calls STEP "supposed to be difficult", aimed "at the top 5% or so of all A-level mathematics candidates", and reminds students that colleges can read the scripts and make allowances for a near miss.'
          ] },
        { kind: 'source', html: 'Boundaries and percentages from OCR\'s <a class="ag-inline-link" href="https://www.ocr.org.uk/Images/761472-explanation-of-results-for-step-2026.pdf" rel="noopener" target="_blank">Explanation of Results for STEP 2026</a> (PDF), read 31 October 2026. The percentages of 120 and the "three complete solutions" reading are our own arithmetic. We promise no grade.' }
      ]
    },
    {
      id: 'worked', tint: 'plain', eyebrow: 'Worked question, ours',
      h2: 'A STEP-style question worked through, start to finish',
      lede: 'This is our own question, written for this page in the long, linked style STEP uses: each part leans on the last, and the final part is where the marks separate. It is not taken from any STEP paper.',
      body: [
        { kind: 'p', html: '<strong>Our question.</strong> For n = 0, 1, 2, ..., let I<sub>n</sub> be the integral of x<sup>n</sup>e<sup>x</sup> from x = 0 to x = 1. (i) Show that I<sub>n</sub> = e &minus; nI<sub>n&minus;1</sub> for n &ge; 1, and find I<sub>0</sub>, I<sub>1</sub> and I<sub>2</sub>. (ii) Show that 1/(n + 1) &le; I<sub>n</sub> &le; e/(n + 1). (iii) Hence find the limit of nI<sub>n</sub> as n tends to infinity.' },
        { kind: 'three', cells: [
          { h3: 'Part (i): the recurrence', p: 'Integrate by parts with u = x<sup>n</sup> and dv = e<sup>x</sup>dx: I<sub>n</sub> = [x<sup>n</sup>e<sup>x</sup>] from 0 to 1 minus n times the integral of x<sup>n&minus;1</sup>e<sup>x</sup>, which is e &minus; nI<sub>n&minus;1</sub>. Then I<sub>0</sub> = e &minus; 1, I<sub>1</sub> = e &minus; (e &minus; 1) = 1 and I<sub>2</sub> = e &minus; 2.' },
          { h3: 'Part (ii): the squeeze', p: 'On 0 &le; x &le; 1 we have 1 &le; e<sup>x</sup> &le; e, so x<sup>n</sup> &le; x<sup>n</sup>e<sup>x</sup> &le; ex<sup>n</sup>. Integrating each side from 0 to 1 gives 1/(n + 1) &le; I<sub>n</sub> &le; e/(n + 1). One line, but only once you think to bound e<sup>x</sup> rather than the whole integrand.' },
          { h3: 'Part (iii): the payoff', p: 'Rewrite part (i) with n + 1 in place of n: (n + 1)I<sub>n</sub> = e &minus; I<sub>n+1</sub>. By part (ii), I<sub>n+1</sub> tends to 0, so (n + 1)I<sub>n</sub> tends to e. Since I<sub>n</sub> itself tends to 0, nI<sub>n</sub> = (n + 1)I<sub>n</sub> &minus; I<sub>n</sub> tends to e as well.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our check in Python: the true values against the recurrence started from a rounded I<sub>0</sub>', head: ['n', 'True I<sub>n</sub> (6 d.p.)', 'Bounds 1/(n+1) to e/(n+1)', 'Recurrence from I<sub>0</sub> = 1.718'], rows: [
          ['1', '1.000000', '0.5 to 1.359', '1.0003'],
          ['3', '0.563436', '0.25 to 0.680', '0.5651'],
          ['5', '0.395600', '0.167 to 0.453', '0.4294'],
          ['7', 'about 0.31', '0.125 to 0.340', '1.7259'],
          ['8', 'about 0.27', '0.111 to 0.302', '&minus;11.089'],
          ['10', '0.228002', '0.091 to 0.247', '&minus;1022.47']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the last column goes wrong',
          left: [
            'Rounding I<sub>0</sub> to 1.718 introduces an error of about 0.0003. Each step of the recurrence multiplies the error by n, so by n = 8 it has been multiplied by 8 &times; 7 &times; ... &times; 1 = 40,320, and the computed value is negative, which part (ii) proves impossible. Our run on 31 October 2026 shows exactly that.',
            'This is the kind of extension STEP enjoys: a short "explain why" at the end that tests whether a student understood what they proved rather than only how. The bound from part (ii) is the tool that catches the error.'
          ],
          rightH3: 'What the question trains',
          right: [
            'Three habits, all of which the 2026 boundaries reward. Reuse earlier parts: part (iii) is impossible without parts (i) and (ii), and STEP questions are usually built that way. Bound before you compute: the squeeze needs no integration at all. Finish: a candidate who stops after part (i) has done the routine third.',
            'A teacher\'s job here is mostly reading. Most STEP marks are lost in the linking sentences, the "hence" that does not quite follow, and a student needs someone who reads the whole solution, not only the answer at the bottom.'
          ] },
        { kind: 'source', html: 'Question, solution and Python check are ours, written and run on 31 October 2026; the values for n = 7 and 8 are given to two places because the point is the sign. For the real thing, OCR publishes STEP 2 and STEP 3 past papers and examiner reports from 2019 to 2025 on its <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/preparing-for-step/" rel="noopener" target="_blank">preparing for STEP</a> page; we link to them and reproduce none.' }
      ]
    },
    {
      id: 'prepare', tint: 'deep', eyebrow: 'Preparing honestly',
      h2: 'How should you prepare for STEP, and do you need a tutor?',
      lede: 'The Faculty of Mathematics says the way to prepare is past papers, and offers a free STEP Support programme with NRICH from the summer of Year 12. It also says, of commercial resources, that it "neither endorses nor recommends" them "since there are more than enough free resources". We are a commercial resource, so here is what that means in practice.',
      body: [
        { kind: 'table', caption: 'Free STEP material named by OCR and the Faculty of Mathematics (read 31 October 2026)', head: ['Resource', 'Who offers it', 'What it is for'], rows: [
          ['STEP Support programme', 'Faculty of Mathematics with NRICH', 'Structured problem sets from the summer of Year 12, with a discussion forum'],
          ['Advanced Problems in Mathematics', 'Dr Stephen Siklos, free PDF', 'Recent STEP questions analysed, each with comment and full solution'],
          ['STEP past papers and examiner reports', 'OCR', 'STEP 2 and STEP 3 papers from 2019 to 2025, plus legacy papers'],
          ['STEP database', 'Faculty of Mathematics', 'A searchable set of questions from the 1986 specimens to 2018'],
          ['Full solutions 1996 to 2019', 'MEI', 'Worked solutions when a student is stuck'],
          ['Advanced problem-solving', 'NRICH and Underground Mathematics', 'A gentler start and selected STEP questions with explanations']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where a class helps',
          left: [
            'A student working alone through the Support programme has the problems and the solutions. What they lack is a reader. Nobody tells them that their part (ii) assumed what it set out to prove, or that their "hence" used a different method from the one the question asked for, which OCR warns can earn few marks.',
            'A class also helps where the school cannot: a sixth form without Further Maths, or one where STEP is new. Cambridge itself says not to worry if a school cannot provide much help, because plenty of material exists. We add a teacher who reads every line.'
          ],
          rightH3: 'Where it does not',
          right: [
            'If a school already runs STEP sessions with a teacher who marks full solutions, and the student is working steadily through the Support programme, a paid class adds little. We would rather say that than sell a course that duplicates good free provision.',
            'And no class makes STEP easy. The Faculty\'s own words are that the papers "look daunting; but you should not be daunted", and that with enough practice students get better at them. Enough practice, finished and read, is all we teach.'
          ] },
        { kind: 'source', html: 'Resources listed on the Faculty of Mathematics <a class="ag-inline-link" href="https://www.maths.cam.ac.uk/undergrad/admissions/step" rel="noopener" target="_blank">STEP page</a> and OCR\'s preparing for STEP page; Warwick\'s use of STEP from its <a class="ag-inline-link" href="https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/" rel="noopener" target="_blank">admissions tests page</a>; read 31 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From Year 12 to June',
    h2: 'Four stages to STEP 2 and STEP 3',
    lede: 'A typical path for a student applying in October of Year 13. Move on when the habit is reliable, not when the month changes.',
    table: { caption: 'Our STEP plan, alongside the 2026 to 2027 calendar', head: ['When', 'Stage', 'The sign it is secure'], rows: [
      ['Year 12, summer', '1. STEP Support foundation work', 'Can finish a multi-part problem without hints, even slowly'],
      ['Year 13, autumn', '2. Further Maths content in place', 'Complex numbers, matrices, further calculus and series no longer interrupt a question'],
      ['Year 13, January to April', '3. Single questions, timed at 30 minutes', 'Picks a question in two minutes and reaches the end in most attempts'],
      ['Year 13, May to June', '4. Full papers, six questions in three hours', 'Writes six finished answers, then stops']
    ] },
    left: { h3: 'If June is weeks away', ps: [
      'Sit two or three recent papers under full conditions, then rework every question you abandoned until you can finish it. The finishing is the practice.',
      'Decide your sections. Many candidates aim at the eight pure questions; a student strong in mechanics or probability should know in advance that those two-question sections are an option.'
    ] },
    right: { h3: 'If the offer is still to come', ps: [
      'Start with the Further Maths A Level done properly, because STEP 3 assumes all of it, and with the free Support programme for problem solving.',
      'Students who enjoy long, linked problems often enjoy the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a> in November of Year 13 as well.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a STEP candidate',
    lede: 'Four groups, chosen by which gap is costing questions.',
    bands: [
      { num: 'I', h3: 'The papers', sub: 'STEP 2 and STEP 3', courses: [
        { code: 'STE / P / 01', slug: 'tmua-mat-step-preparation-course', title: 'Admissions tests: STEP, TMUA, MAT', blurb: 'Choosing six, and finishing them.' },
        { code: 'STE / P / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Inequalities, invariants and proof.' },
        { code: 'STE / P / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For Section C, two questions a paper.' }
      ] },
      { num: 'II', h3: 'The content underneath', sub: 'Years 12 and 13', courses: [
        { code: 'STE / C / 01', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'The base of STEP 3.' },
        { code: 'STE / C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure, mechanics and statistics, all assumed.' },
        { code: 'STE / C / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For IB applicants sitting STEP.' }
      ] },
      { num: 'III', h3: 'Beyond the exam', sub: 'First-year university mathematics', courses: [
        { code: 'STE / U / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus and algebra at university pace.' },
        { code: 'STE / U / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a recurrence numerically, as above.' },
        { code: 'STE / U / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Check a numerical answer in a few lines.' }
      ] },
      { num: 'IV', h3: 'Related applications', sub: 'Computer science and data', courses: [
        { code: 'STE / R / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Proof meets running time.' },
        { code: 'STE / R / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'The informatics olympiad route.' },
        { code: 'STE / R / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Probability put to work on datasets.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live STEP classes from the autumn of Year 13 to June',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'One question, thirty minutes, then the write-up.' },
      { time: 'Weekend mornings', l: 'Room for a full three-hour paper.' },
      { time: '1-on-1', l: 'For a candidate with a specific offer to meet.' }
    ],
    cells: [
      { h3: 'Choose, then solve', p: 'Every lesson starts by reading several questions and choosing, the skill the paper tests first.' },
      { h3: 'Finished answers', p: 'Solutions are written to the end and read in full, linking sentences included.' },
      { h3: 'All three sections', p: 'Pure, mechanics and probability, so a student knows which of the twelve are really open to them.' },
      { h3: 'A batch of 15 to 20', p: 'Several routes through one question, compared side by side.' },
      { h3: 'Our own questions', p: 'Questions in class are composed by our teachers; OCR\'s papers are for students to sit on their own.' },
      { h3: 'No grade promised', p: 'We do not promise an S, a 1 or an offer, and no one honestly can.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Published student work from our school in mathematics, programming and AI. The <a class="ag-inline-link" href="/student-labs">student labs</a> page gathers the rest.',
  reviewsLede: 'Parents and students on our Google profile, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'OCR charges the STEP entry through the centre, and some centres add an administration fee; our monthly fee is only for the classes, with no joining fee, and ends whenever the student chooses, usually after 21 June.',
    free: ['A free first class', 'One long question, read line by line', 'No card details'],
    group: ['A batch of 15 to 20', 'One teacher through to June', 'Weekly solutions read in full', 'Monthly, stop any time'],
    one: ['One student, one teacher', 'Built around the offer conditions', 'Mock papers marked by hand']
  },

  faq: {
    eyebrow: 'STEP questions',
    h2: 'What STEP candidates and parents ask',
    items: [
      { q: 'What is STEP maths?', a: 'STEP, the Sixth Term Examination Paper, is a mathematics exam set by OCR. OCR says it is used by the University of Cambridge, the University of Warwick and Imperial College London, and that some students sit it just for the challenge.' },
      { q: 'When is STEP in 2027?', a: 'OCR lists STEP 2 on 14 June 2027 and STEP 3 on 21 June 2027, both at 9am in the UK. Results are released on 12 August 2027 at 8am UK time.' },
      { q: 'How many questions do you answer in STEP?', a: 'Each paper has twelve questions and lasts three hours. Every answer is marked out of 20 but only the top six count. OCR advises against attempting more than six.' },
      { q: 'What is the difference between STEP 2 and STEP 3?', a: 'STEP 2 is based on A Level Mathematics and AS Level Further Mathematics; STEP 3 on A Level Mathematics and the full Further Mathematics A Level. Both have eight pure, two mechanics and two probability or statistics questions.' },
      { q: 'What were the STEP grade boundaries in 2026?', a: 'OCR\'s 2026 results explanation gives, out of 120, STEP 2: S 84, grade 1 62, grade 2 52, grade 3 34; and STEP 3: S 80, grade 1 56, grade 2 48, grade 3 30. Boundaries change every year.' },
      { q: 'Is STEP 1 still available?', a: 'No. The STEP specification says STEP Mathematics 1 has not been offered from the June 2021 sitting onwards. Old STEP 1 papers remain useful practice at roughly A Level Mathematics depth.' },
      { q: 'Can I register for STEP myself?', a: 'No. OCR says a candidate must be registered by an authorised centre, usually their school, between 1 March and 4 May 2027. A school that is not yet a centre can apply to become one even for a single candidate.' },
      { q: 'Can I use a calculator in STEP?', a: 'No. OCR says calculators are not allowed. Candidates may bring rulers, protractors and compasses, must write in black pen and use pencil only for diagrams.' },
      { q: 'Does Warwick accept STEP instead of the TMUA?', a: 'Yes, for Mathematics. Warwick says applicants typically take the TMUA or STEP, and that offers to applicants without a TMUA score are conditional on grade 2 in any STEP paper, alongside A Level or equivalent grades.' },
      { q: 'Do I need a tutor for STEP?', a: 'Not necessarily. The Faculty of Mathematics says free resources are more than enough and offers the STEP Support programme with NRICH. A teacher helps most when nobody else is reading full solutions or the school does not teach Further Maths.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of OCR or Cambridge?', a: 'No. We teach independently, online, and OCR, Cambridge University Press and Assessment and the University of Cambridge have no part in our classes. Entries are made through a school or authorised centre.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for STEP candidates',
    lede: 'The A Levels STEP rests on, a competition beside it, and the city itself.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'Every topic STEP 3 takes for granted.' },
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'STEP 2 rests on all of it.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A Level Further Maths worth it?', p: 'For a Year 11 student weighing up sixth-form options.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Long problems in November, a good rehearsal for June.' },
      { href: '/further-maths-tutor-cost-uk', label: 'Further Maths tutor cost in the UK', p: 'What families pay for help at this level, and why it varies.' },
      { href: '/maths-tuition-in-cambridge', label: 'Maths tuition in Cambridge', p: 'For families living in the city.' }
    ]
  },

  start: {
    h2: 'Book a free STEP class',
    lede: 'Tell us which papers your offer names, or which you expect, and how far through Further Maths you are. The free class takes one long question to its last part with you and reads every line you write.',
    readFirst: 'Want to look around first? Each course has its own syllabus, all listed <a class="ag-inline-link" href="/courses">here</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson.',
    note: 'Classes are live on video from India, arranged in UK time. A WhatsApp message from a UK mobile is usually answered first.',
    formNote: 'No card and no obligation; we reply once to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth-form maths', links: [
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Twelve questions, six that count'
  },

  personalityCss: `
.ag-root.ag-ste .ag-hero h1 { letter-spacing: -0.02em; max-width: 26ch; }
.ag-root.ag-ste .ag-capsule { border-left-width: 5px; padding-left: 1.2rem; }
.ag-root.ag-ste .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ste .ag-table caption { text-align: left; font-weight: 600; text-transform: none; }
.ag-root.ag-ste .ag-table th:first-child { width: 24%; }
.ag-root.ag-ste .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-ste .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'OCR STEP Mathematics pages, read raw on 31 October 2026: users (Cambridge, Warwick, Imperial); STEP 2 and STEP 3 only; 2027 key dates (1 March, 21 April, 4 May, 14 June, 21 June, 12 August, 19 August 2027; 9am UK start); centre registration and the details a centre needs; three hours, twelve questions in sections of 8 pure, 2 mechanics, 2 probability/statistics; each question out of 20, top six count; grades S, 1, 2, 3, U; correct answers full marks whatever the method; answer booklets sent to Cambridge; FAQs on calculators, equipment, the 48 page answer booklet, attempting more than six, crossed-out work. Explanation of Results 2026: 9470 boundaries 84, 62, 52, 34 and 28.14 per cent at grade 1 or better; 9475 boundaries 80, 56, 48, 30 and 35.73 per cent. Specification from June 2026: STEP 1 not offered from June 2021. Cambridge Faculty of Mathematics and undergraduate STEP pages: conditional offers, June timing, predictor of Tripos success, top 5 per cent, 11-14 questions in two hours versus 6 in three, free STEP Support programme, commercial resources not endorsed. Warwick: TMUA or STEP for Mathematics, grade 2 in any STEP.',
    localProject: 'Our reduction-formula question I_n = integral of x^n e^x from 0 to 1: the recurrence I_n = e - n I_(n-1), I_0 = e - 1, I_1 = 1, I_2 = e - 2; the squeeze 1/(n+1) <= I_n <= e/(n+1); the limit of n I_n equal to e; and a Python run in which the recurrence started from I_0 = 1.718 goes negative at n = 8 because the rounding error is multiplied by n!, which part (ii) proves impossible. With our boundary arithmetic (62 of 120 is three complete answers and a little more; 84 is 70 per cent) and minutes per question (30 against about 9 to 11 at A Level). Lesson family: choose six, then finish a long chain without dropping a link.',
    requiredMentions: ['STEP Mathematics II (9470)', 'STEP Mathematics III (9475)', '14 June 2027', '21 June 2027', 'it is not advisable to attempt more than six questions', 'neither endorses nor recommends', 'From the June 2021 sitting onwards, STEP Mathematics 1 has not been offered.', 'top 5% or so of all A-level mathematics candidates', '28.14%', '&minus;11.089', 'conditional on grade 2 in any STEP paper'],
    sources: [
      { claim: 'STEP users, the two papers, and links to the specification.', url: 'https://www.ocr.org.uk/students/step-mathematics/' },
      { claim: '2027 key dates and UK start time.', url: 'https://www.ocr.org.uk/students/step-mathematics/key-dates-and-fees/' },
      { claim: 'Paper structure, marking, six highest-scoring answers and grades.', url: 'https://www.ocr.org.uk/students/step-mathematics/scoring-and-results/' },
      { claim: 'Exam-day rules, centre registration, attempting more than six questions.', url: 'https://www.ocr.org.uk/students/step-mathematics/faqs/' },
      { claim: '2026 grade boundaries and cumulative percentages for 9470 and 9475.', url: 'https://www.ocr.org.uk/Images/761472-explanation-of-results-for-step-2026.pdf' },
      { claim: 'STEP 1 withdrawn from June 2021; content assumed by STEP 3.', url: 'https://www.ocr.org.uk/Images/696329-step-specification-2026.pdf' },
      { claim: 'Why Cambridge uses STEP, difficulty, free resources and commercial resources.', url: 'https://www.maths.cam.ac.uk/undergrad/admissions/step' },
      { claim: 'STEP in Cambridge offers and the June after applying.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/after/sixth-term-exam-STEP' },
      { claim: 'Warwick accepts STEP grade 2 as an alternative to the TMUA.', url: 'https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/' }
    ],
    rejectedClaims: [
      'STEP registration fees: published by OCR in pounds; not repeated, and no currency is typed on the page.',
      'College-by-college STEP grade requirements: Cambridge says they vary by College; none is quoted.',
      'Imperial\'s exact STEP requirement: Imperial is named as a user only, from OCR; its own STEP page was not read.',
      'Any STEP question: not reproduced; OCR past papers and examiner reports are linked, and our question is labelled ours.',
      'Boundaries as targets: 2026 figures described as 2026 only.',
      'Any promise of a grade or an offer: declined on the page.',
      'Any affiliation with OCR, Cambridge University Press and Assessment or the University of Cambridge: none, stated on the page.'
    ]
  }
};
