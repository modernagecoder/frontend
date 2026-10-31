'use strict';
// UK university admissions: maths tests and computing applications (ag- guide index, UK and US exams cluster hub
// "uk-university-admissions-maths-and-computing-guide" in content/exam-cluster-groups.json).
// Pillar page for the broad questions "which universities need TMUA STEP or ESAT" and "UK maths admissions tests
// explained". Every figure below was re-read raw on 1 November 2026 (curl, or the raw copies the member pages saved);
// new copies are in keyword-research-2026-09/uk-us-gap/src/uk-university-admissions-maths-and-computing-guide/.
//  - UAT-UK, TMUA page (esat-tmua.ac.uk/about-the-tests/tmua-test/): "The Test of Mathematics for University
//    Admission"; Test Sitting 1 "12th-16th October 2026", "Applicable to all candidates for 2027 entry"; Test Sitting 2
//    "4th-8th January 2027"; "The TMUA lasts 2 hours 30 minutes in total. It is divided into two papers."; Paper 1
//    Applications of Mathematical Knowledge, Paper 2 Mathematical Reasoning, each "20 multiple-choice questions", "75
//    minutes"; "You will not be able to use a calculator or dictionary."; "You will receive one single overall score";
//    "1 (low) to 9 (high) to one decimal place"; "There is no pass/fail score for the TMUA."; "based on content
//    typically covered within Higher Level GCSE mathematics courses or AS level mathematics"; "There are seven
//    universities using the TMUA for selection to some courses in Mathematics, Economics, or Computer Science.";
//    "the TMUA may be a compulsory part of your application, or it may be optional"; "the best way to prepare is to
//    familiarise yourself with the test format and style of questions"; Notes on Logic and Proof; bursaries "will cover
//    the full cost of your test"; results "approximately six weeks after your test sitting". The page prints a test fee;
//    we do not.
//  - UAT-UK, ESAT page: "There are five ESAT modules."; "Each module lasts 40 minutes and contains 27 multiple choice
//    questions. The ESAT will be 120 minutes long for most candidates."; "All candidates need to sit Maths 1. Most other
//    candidates need to sit two further modules."; modules "cannot be changed without cancelling and re-booking";
//    "Imperial College London, the University of Cambridge, the University of Oxford and UCL all use the ESAT."
//  - UAT-UK, TARA page: "The Test of Academic Reasoning For Admissions"; Critical Thinking and Problem Solving, 22
//    multiple-choice questions each, and a Writing Task, "Word limit of 750 words", each module 40 minutes; "The TARA is
//    currently used by the University of Oxford and UCL".
//  - UAT-UK, Key Dates (esat-tmua.ac.uk/deadlines/), "2027 entry cycle": account creation 1st June 2026; booking opens
//    20 July 2026; access arrangements deadline 14th September 2026; bursary deadline 21st September 2026; booking
//    closes 28th September 2026 (6pm UK time); window 12th-16th October; results "Monday 16th November 2026"; January
//    booking opens 28th October 2026; access arrangements 7th December 2026; bursary 14th December 2026; booking closes
//    21st December 2026; window 4th-8th January; results "8th February 2027"; "There is no advantage to sitting in
//    either session, but you can only sit once within an admissions cycle."; Cambridge and Oxford applicants "MUST sit
//    the test in October" (mature-college and Astrophoria Foundation Year exceptions); China, Hong Kong and Macau days.
//  - UAT-UK, Course List 2027 Entry (PDF, "Last Updated April 2026"): Durham D86 TMUA "recommended" for G100, G103,
//    G111, G114; Imperial I50 ESAT or TMUA "compulsory" (TMUA for Computing G400 to GG47, Mathematics G100, G103 and
//    others, Mathematics and Computer Science GG14 and GG41, Economics, Finance and Data Science L1N3); LSE L72 "the
//    TMUA is compulsory for BSc Economics and BSc Econometrics and Mathematical Economics. For all other listed courses,
//    the TMUA is recommended"; Cambridge C05 TMUA for Computer Science G400, Economics L100, Mathematics G100, ESAT for
//    H810, H100, BCF0, D100; Oxford O33 TMUA for G400, IV15, GG14, GV15, G100, ESAT for engineering, physics and
//    biomedical courses, TARA for LN12, L0V0 and others; Warwick W20 TMUA "compulsory (except for those eligible for a
//    contextual offer)" for G400, G403, GN42, G190, G4G3, G100, G103 and "recommended" for 7G73, G304, L100, LN12,
//    LLD2, GG13, GGC3, GLN0, G0L0; UCL U80 ESAT for H600 and H601, TARA for Computer Science G400, G402, G430 and others,
//    TMUA for Economics L100 and L101.
//  - University of Warwick, admissions tests page (raw copy in src/tmua-preparation/): Mathematics applicants
//    "typically be required to take TMUA or STEP"; offers without TMUA "conditional upon grade 2 in any STEP paper".
//    The page reports both Warwick's wording and UAT-UK's list and tells the reader to follow Warwick.
//  - Imperial, TMUA page: "Only your first test score will be considered."
//  - OCR STEP pages (raw copies in src/step-maths-preparation/): "STEP is used by the University of Cambridge, the
//    University of Warwick and Imperial College London."; "There are two STEP examinations: STEP 2 and STEP 3.";
//    "each takes three hours"; 12 questions, "Section A: 8 pure questions", "Section B: 2 mechanics questions",
//    "Section C: 2 probability/statistics questions"; "All STEP questions are marked out of 20."; final grade from
//    the "six best answers only" (printed as "six highest-scoring answers"); key dates 2027: 1 March 2027
//    registration opens, 4 May 2027 registration closes, 14 June 2027 STEP paper 2, 21 June 2027 STEP paper 3, 12 August
//    2027 results; "You cannot register yourself for STEP"; "STEP is open to all."; "Calculators are not allowed in the
//    examination."
//  - Cambridge Faculty of Mathematics STEP page: STEP "normally forms part of a conditional offer"; grades "S, 1, 2, 3,
//    and U"; "aimed at the top 5% or so of all A-level mathematics candidates". Cambridge undergraduate STEP page: "if
//    you apply in October 2026, you should expect to take STEP in June 2027"; "Applicants for Mathematics are normally
//    asked to take both."
//  - Oxford Mathematical Institute MAT and TMUA pages: "The Mathematics Admissions Test (MAT) was a test used from 2007
//    to 2025"; "the MAT will not take place, and all applicants will take the TMUA instead"; "we shortlist around three
//    applicants per place to interview"; 15 October 2026 (6pm UK time) UCAS deadline. Oxford interviews page:
//    "Interviews occur in December."; "Interviews are online via video call for all candidates."; "about 25 minutes".
//    Oxford Computer Science how to apply: "Our Computer Science students take the same test as those applying for
//    Mathematics."; interviews "around 30 minutes, usually with two interviewers".
//  - Cambridge interviews page: "Main interview period: 7 December to 18 December 2026"; "1 or 2 interviews lasting a
//    total of 35 minutes to an hour"; interview preparation companies "are not endorsed by the University. They do not
//    have access to any exclusive information." Cambridge Faculty of Mathematics: "There are no trick questions.";
//    "Historically, between 75% and 80% of applicants have been invited to interview".
//  - UCAS, How to write your personal statement: "three separate questions"; "minimum character count of 350
//    characters"; "The 4,000 overall character limit (including spaces) remains the same". UCAS AI page: declare the
//    statement has not been "copied or provided from another source, including artificial intelligence software".
//    Imperial: "For 2027 entry, personal statements will be structured into three distinct sections". Cambridge: "We
//    don't give personal statements a formal score." Cambridge Computer Science: Peterhouse or Trinity applicants also
//    take the "Computer Sciences Aptitude Test (CSAT)"; Further Mathematics to AS or A level if the school offers it.
//  - AQA 7517 specification v1.6: Paper 1 "On-screen exam: 2 hours 30 minutes", "40% of A-level"; Paper 2 "Written exam:
//    2 hours 30 minutes"; NEA "75 marks", "20% of A-level"; Preliminary Material and a Skeleton Program; languages C#,
//    Java, Python, VB.Net; "These specifications are not available to private candidates."
//  - OCR H446 specification v3.0: components 01 and 02 "140 marks", "2 hours and 30 minutes written paper", "(no
//    calculators allowed)", "40% of total A level"; programming project "70 marks", 20%; "Private candidates may enter
//    for OCR assessments."; "minimum of 10% mathematical skills"; "The total qualification time for A Level Computer
//    Science is 360 hours." DfE subject content: "minimum of 10% mathematics".
//  - AQA EPQ 7993 specification v1.4: "120 guided learning hours"; written report alone "approximately 5000 words";
//    artefact plus report "of a minimum 1000 words"; AO3 40%; supervisor declaration of "the unaided work of the
//    student".
//  - Pearson BTEC Level 3 Nationals IT (2016): Unit 4 Programming "Unit type: Internal", "Guided learning hours: 90",
//    "maximum number of two summative assignments"; Extended Diploma "equivalent in size to three A Levels"; last
//    registration England (DfE funded) 31 Jul 2025, England (private/apprenticeship funded) 31 Dec 2026.
// Not reached: www.ox.ac.uk and durham.ac.uk returned 403 to other writers on 31 October 2026 and were not retried;
// Durham and LSE are described only from UAT-UK's course list. No question from any test is reproduced.
// Our own material, labelled on the page: minutes per question for each test (TMUA 75 / 20 = 3 minutes 45 seconds;
// ESAT 40 / 27, about 1 minute 29 seconds; STEP 180 / 6 = 30 minutes), the two worked applicant plans (a computer
// science list and a mathematics list run against the UAT-UK course list), the five-step choosing method and the
// two-year route. Lesson family: an index that maps a UCAS list to the tests it triggers.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'Admissions', blurb: 'TMUA, ESAT, TARA, STEP and the retired MAT side by side, which UCAS courses trigger each one, and the computing evidence that sits beside them.' },
  slug: 'uk-university-admissions-maths-and-computing-guide',
  code: 'ukua',
  accent: '#3E4F6B',
  accentRationale: 'Admissions guide index: a slate navy #3E4F6B, about 7.8:1 on #FBF8F2 (7.3:1 on #F5F1E8, 6.7:1 on #EDE7DA), cooler and greyer than the pine TMUA, teal Oxford and brown STEP and ESAT members so the hub reads as their parent rather than a sibling; not used by any other module',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK university admissions guide',
  title: 'Which Universities Need TMUA, STEP or ESAT? UK Admissions Guide',
  description: 'UK maths admissions tests explained for 2027 entry: TMUA, ESAT, TARA and STEP, which university courses use each, the 2026 to 2027 dates, and computing applications.',
  ogDescription: 'One table for every UK maths and computing admissions hurdle: who sets the TMUA, ESAT, TARA and STEP, which courses at seven universities use them, when they sit, and what computer science applicants add.',
  twitterDescription: 'Which UK universities need the TMUA, STEP or ESAT, from UAT-UK, OCR and the universities themselves.',
  pageName: 'UK University Admissions: Maths Tests and Computing Applications',
  webPageDescription: 'A pillar guide to UK undergraduate admissions tests for mathematics, computer science, economics, engineering and science, built from the UAT-UK 2027 entry course list, OCR\'s STEP pages and university admissions pages, with routes to detailed pages on each test, interview and computing qualification.',
  courseDescription: 'Live online preparation for UK university admissions in mathematics and computing: TMUA and STEP mathematics, A Level Further Maths, and A Level Computer Science for AQA 7517 and OCR H446, for students aged 16 to 18.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'UK university admissions guide',
  navLinks: [
    { href: '#master', label: 'All tests' },
    { href: '#which', label: 'By university' },
    { href: '#tests', label: 'Tests and interviews' },
    { href: '#dates', label: 'Dates' },
    { href: '#computing', label: 'Computer science' },
    { href: '#choose', label: 'How to choose' }
  ],
  eyebrow: 'United Kingdom &middot; Years 12 and 13 &middot; 2027 entry',
  h1: 'Which universities need the TMUA, STEP or ESAT? UK maths admissions tests explained',
  lede: 'A UK sixth former applying for mathematics, computer science, economics or engineering can face an on-screen test in October or January, a written STEP exam the next June and a December interview, on top of A Level grades. Which apply depends on the exact UCAS course code. This guide puts every test in one table, lists the courses that use each, gives the 2026 to 2027 dates and covers the computing qualifications behind a computer science application.',
  secondaryCta: { href: '#choose', label: 'Work out which tests you need' },
  wa: 'Hello Modern Age Coders, I am applying to UK universities for maths or computer science and would like a free class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Test facts from UAT-UK, OCR and university admissions pages',
  spec: [
    ['Covers', 'TMUA, ESAT, TARA, STEP, interviews'],
    ['Plus', 'A Level CS, NEA, EPQ, BTEC, UCAS'],
    ['Entry year', '2027, applying in 2026'],
    ['On-screen tests', '12 to 16 October 2026; 4 to 8 January 2027'],
    ['STEP 2 and 3', '14 and 21 June 2027'],
    ['Universities in the list', 'Seven, per UAT-UK'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'For 2027 entry, UAT-UK runs three on-screen admissions tests: the TMUA for mathematics, computer science and economics, the ESAT for engineering and science, and the TARA, which Oxford and UCL use. Its course list names seven universities: Cambridge, Durham, Imperial, LSE, Oxford, UCL and Warwick. OCR runs STEP, which Cambridge, Warwick and Imperial use. Oxford\'s MAT ended after 2025; Oxford now uses the TMUA. Modern Age Coders teaches TMUA and STEP mathematics and A Level Computer Science live online, in groups or one-to-one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a university applicant',
    lede: 'The admissions tests, the A Level that most maths-heavy courses expect, and the computing A Level behind a computer science application.',
    items: [
      { course: 'tmua-mat-step-preparation-course', code: 'UA / 01', title: 'TMUA and STEP preparation', note: 'Ages 16 to 18: TMUA logic and pacing in the autumn, then STEP 2 and 3 through to June.' },
      { course: 'a-level-further-maths-course', code: 'UA / 02', title: 'A Level Further Maths', note: 'STEP 3 assumes it, and Cambridge Computer Science asks for it where a school offers it.' },
      { course: 'a-level-computer-science-course-aqa-ocr', code: 'UA / 03', title: 'A Level Computer Science', note: 'AQA 7517 or OCR H446 papers, Python, and mentoring on how to run the project yourself.' }
    ]
  },

  sections: [
    {
      id: 'master', tint: 'tint', eyebrow: 'Every hurdle, one table',
      h2: 'What are the UK maths and computing admissions tests, and who sets each one?',
      lede: 'Four live tests and one retired one. UAT-UK delivers the TMUA, ESAT and TARA on screen at Pearson test centres; OCR sets STEP on paper in June; the Oxford MAT ran from 2007 to 2025.',
      body: [
        { kind: 'table', caption: 'UK admissions tests and computing qualifications for 2027 entry, as each owner states them (read 1 November 2026)', head: ['Hurdle', 'Run by', 'Used by, as stated', 'Format', 'When'], rows: [
          ['TMUA (Test of Mathematics for University Admission)', 'UAT-UK, on screen at Pearson test centres', 'Seven universities, for some mathematics, economics and computer science courses', 'Two papers of 20 multiple-choice questions, 75 minutes each; no calculator; one overall score from 1 to 9', '12 to 16 October 2026 or 4 to 8 January 2027'],
          ['ESAT (Engineering and Science Admissions Test)', 'UAT-UK, on screen', 'Imperial, Cambridge, Oxford and UCL, for engineering and science courses', 'Five modules of 27 questions and 40 minutes; Mathematics 1 for all, usually plus two more; a score per module', 'Same two windows as the TMUA'],
          ['TARA (Test of Academic Reasoning for Admissions)', 'UAT-UK, on screen', 'Oxford and UCL, including UCL Computer Science', 'Critical Thinking and Problem Solving, 22 questions each, plus a Writing Task of up to 750 words; 40 minutes each', 'Same two windows'],
          ['STEP 2 and STEP 3', 'OCR, written, at a registered STEP centre', 'Cambridge, Warwick and Imperial', 'Three hours each; 12 questions (8 pure, 2 mechanics, 2 probability and statistics); six highest-scoring answers count, each out of 20; grades S, 1, 2, 3, U', '14 June 2027 (STEP 2) and 21 June 2027 (STEP 3)'],
          ['Oxford MAT', 'Oxford Mathematical Institute', 'Nobody since 2025; Oxford now uses the TMUA', 'Retired', 'Not running'],
          ['Oxbridge interviews', 'Oxford and Cambridge colleges', 'Shortlisted applicants: about three per place at Oxford Mathematics; historically 75% to 80% of Cambridge Mathematics applicants', 'Oxford Mathematics: online, about 25 minutes each; Cambridge: one or two interviews totalling 35 minutes to an hour for most', 'December 2026; Cambridge\'s main period is 7 to 18 December 2026'],
          ['UCAS personal statement', 'UCAS', 'Every UCAS applicant', 'Three questions, at least 350 characters each, 4,000 characters in all', 'With the application; 15 October 2026 for Oxford'],
          ['AQA A-level Computer Science 7517', 'AQA', 'Schools in England; not available to private candidates', 'Paper 1 on screen and Paper 2 written, 2 hours 30 minutes and 40% each; NEA 75 marks, 20%', 'Summer of Year 13; see AQA\'s timetable'],
          ['OCR A Level Computer Science H446', 'OCR', 'Schools, and private candidates based in the UK', 'Components 01 and 02 written, 140 marks, 2 hours 30 minutes and 40% each, no calculators; project 70 marks, 20%', 'Summer of Year 13; see OCR\'s timetable'],
          ['A Level Computer Science NEA', 'AQA or OCR, marked by the school', 'Every A Level Computer Science candidate', '75 marks at AQA, 70 at OCR; 20% at both', 'Through Year 13, to school deadlines'],
          ['EPQ (Extended Project Qualification)', 'AQA 7993, Pearson and others', 'Optional; UCAS names it as evidence for question 2', '120 guided learning hours; an artefact plus a report of at least 1,000 words at AQA', 'Usually Year 12 into Year 13'],
          ['BTEC IT Unit 4 Programming', 'Pearson', 'Students on the BTEC Level 3 Nationals in IT (2016)', 'Internally assessed, 90 guided learning hours, at most two summative assignments', 'Set by the college']
        ] },
        { kind: 'source', html: 'Sources: UAT-UK\'s <a class="ag-inline-link" href="https://esat-tmua.ac.uk/about-the-tests/tmua-test/" rel="noopener" target="_blank">TMUA</a>, <a class="ag-inline-link" href="https://esat-tmua.ac.uk/about-the-tests/esat-test/" rel="noopener" target="_blank">ESAT</a> and <a class="ag-inline-link" href="https://esat-tmua.ac.uk/about-the-tests/tara/" rel="noopener" target="_blank">TARA</a> pages and <a class="ag-inline-link" href="https://esat-tmua.ac.uk/deadlines/" rel="noopener" target="_blank">key dates</a>; OCR\'s <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/" rel="noopener" target="_blank">STEP Mathematics pages</a>; the Oxford Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test" rel="noopener" target="_blank">MAT page</a>; interview pages, UCAS and the four specifications, read 31 October and 1 November 2026. We are not connected with UAT-UK, OCR, AQA, Pearson, UCAS or any university.' }
      ]
    },
    {
      id: 'which', tint: 'deep', eyebrow: 'By university, 2027 entry',
      h2: 'Which universities need the TMUA, STEP or ESAT for 2027 entry?',
      lede: 'UAT-UK\'s Course List for 2027 entry, updated April 2026, names seven universities. A test can be compulsory for one degree and only recommended for its neighbour, so the codes matter.',
      body: [
        { kind: 'table', caption: 'Which test each university lists, by course, from UAT-UK\'s Course List 2027 Entry and OCR\'s STEP pages', head: ['University', 'TMUA', 'ESAT', 'TARA', 'STEP'], rows: [
          ['University of Cambridge (C05)', 'Compulsory: Computer Science G400, Economics L100, Mathematics G100', 'Compulsory: Chemical Engineering and Biotechnology, Engineering, Natural Sciences, Veterinary Medicine', 'Not listed', 'Normally part of the conditional offer for Mathematics; both papers usually asked for'],
          ['University of Oxford (O33)', 'Compulsory: Computer Science, Computer Science and Philosophy, Mathematics and Computer Science, Mathematics and Philosophy, Mathematics', 'Compulsory: engineering, physics and biomedical courses', 'Compulsory: PPE, Economics and Management, Experimental Psychology and others', 'Not listed by OCR'],
          ['Imperial College London (I50)', 'Compulsory: Computing courses, Mathematics courses, Mathematics and Computer Science, Economics, Finance and Data Science', 'Compulsory: engineering, physics and life sciences courses', 'Not listed', 'Named by OCR as a user; check Imperial\'s course page'],
          ['University of Warwick (W20)', 'Compulsory except for contextual offers: Computer Science, Discrete Mathematics, Mathematics; recommended: Data Science, Economics, Mathematics and Statistics, MORSE and others', 'Not listed', 'Not listed', 'Warwick\'s own page: Mathematics applicants typically take TMUA or STEP'],
          ['London School of Economics (L72)', 'Compulsory: Economics L101, Econometrics and Mathematical Economics L140; recommended for the other listed courses', 'Not listed', 'Not listed', 'Not listed by OCR'],
          ['UCL (U80)', 'Compulsory: Economics L100 and L101', 'Compulsory: Electronic and Electrical Engineering H600, H601', 'Compulsory: Computer Science G400, G402, Computer Science and Mathematics G430, Robotics and Artificial Intelligence H700 and others', 'Not listed by OCR'],
          ['Durham University (D86)', 'Recommended: Mathematics G100, G103, Mathematics and Statistics G111, G114', 'Not listed', 'Not listed', 'Not listed by OCR']
        ] },
        { kind: 'source', html: 'Sources: UAT-UK, <a class="ag-inline-link" href="https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2026/04/01172717/Course_List_2027_Entry_Final.pdf" rel="noopener" target="_blank">Course List 2027 Entry</a> (PDF, April 2026); OCR\'s STEP student pages; the Cambridge undergraduate STEP page; the University of Warwick <a class="ag-inline-link" href="https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/" rel="noopener" target="_blank">admissions tests page</a>. "Not listed" means the list or OCR does not name it there; always check the course page.' },
        { kind: 'two', mt: true,
          leftH3: 'Two surprises in the list',
          left: [
            'UCL Computer Science uses the TARA, a reasoning and writing test, not the TMUA. And Imperial lists eight Computing degrees separately, G400 to GG47, while Warwick leaves Computer Systems Engineering outside its TMUA rule: the code decides, not the department.'
          ],
          rightH3: 'When two sources disagree',
          right: [
            'For Warwick Mathematics, UAT-UK\'s list says the TMUA is compulsory, yet Warwick\'s own page says applicants typically take TMUA or STEP, with offers to those without a TMUA score conditional on grade 2 in any STEP paper. Act on the university\'s page; it sets the offer.'
          ] }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'Hub section one',
      h2: 'Which admissions tests and interviews will a maths applicant face?',
      lede: 'A Cambridge mathematics applicant can face all three stages: the TMUA in October, an interview in December and STEP in June. Oxford has the TMUA and interviews; engineers sit the ESAT. These five pages take each stage in depth.',
      body: [
        { kind: 'p', html: '<strong>The TMUA.</strong> Our <a class="ag-inline-link" href="/tmua-preparation">TMUA preparation page</a> is for any Year 13 student whose course list triggers the test, whatever the subject; most of it is about the logic paper, where strong A Level students often lose time.' },
        { kind: 'p', html: '<strong>STEP.</strong> The <a class="ag-inline-link" href="/step-maths-preparation">STEP 2 and STEP 3 guide</a> suits a student holding, or expecting, a Cambridge or Warwick offer that names a STEP grade. It is unlike the on-screen tests: long written answers, a June date and a grade from S to U.' },
        { kind: 'p', html: '<strong>The ESAT.</strong> Engineers, physicists and natural scientists need the <a class="ag-inline-link" href="/esat-maths-preparation">ESAT maths page</a>, which covers the two mathematics modules and how to book the right modules.' },
        { kind: 'p', html: '<strong>The retired MAT.</strong> Anyone searching for the Oxford test will find on the <a class="ag-inline-link" href="/oxford-mat-preparation">Oxford MAT page</a> what replaced it and whether the old papers still repay the effort.' },
        { kind: 'p', html: '<strong>Interviews.</strong> The <a class="ag-inline-link" href="/oxbridge-maths-interview-problem-solving">Oxbridge maths interview page</a> is about speaking mathematics aloud: it is for shortlisted applicants in November and December, and it practises taking a hint rather than reciting technique.' },
        { kind: 'table', mt: true, caption: 'How the tests compare in time pressure, our arithmetic from the published formats', head: ['Test', 'Questions you answer', 'Time', 'Time per question (ours)', 'What that pace rewards'], rows: [
          ['TMUA, each paper', '20', '75 minutes', '3 minutes 45 seconds', 'Precise reading and quick structure-spotting'],
          ['ESAT, each module', '27', '40 minutes', 'About 1 minute 29 seconds', 'Fluent arithmetic without a calculator'],
          ['TARA, each multiple-choice module', '22', '40 minutes', 'About 1 minute 49 seconds', 'Reasoning in words rather than symbols'],
          ['STEP, each paper', '6 count, out of 12 set', '180 minutes', '30 minutes', 'Stamina and complete, correct arguments']
        ] },
        { kind: 'p', mt: true, html: '<strong>Same mathematics, rising depth.</strong> UAT-UK says the TMUA draws on Higher GCSE and AS level mathematics; Cambridge says STEP 2 is based on A Level Mathematics and AS Further Mathematics, and STEP 3 on a typical Further Mathematics A Level syllabus. As the content climbs, the pace falls, so STEP is never just a slower TMUA. Interviews test something else again: Cambridge\'s mathematics faculty says there are no trick questions, though some problems are meant to leave you stuck for a while.' },
        { kind: 'source', html: 'Formats from UAT-UK\'s test pages and OCR\'s STEP scoring page; Cambridge\'s STEP content summary from the Faculty of Mathematics STEP page; interview statements from the Oxford Mathematical Institute TMUA page and the Cambridge Faculty of Mathematics. Time per question is our division, not a published figure.' }
      ]
    },
    {
      id: 'dates', tint: 'plain', eyebrow: 'The 2026 to 2027 calendar',
      h2: 'When are the UK admissions tests in 2026 and 2027?',
      lede: 'The on-screen tests run from 12 to 16 October 2026 and from 4 to 8 January 2027; Oxford and Cambridge applicants must use October. Interviews follow in December. STEP 2 is on 14 June 2027 and STEP 3 on 21 June 2027.',
      body: [
        { kind: 'table', caption: 'Admissions calendar for 2027 entry, from UAT-UK key dates, OCR STEP key dates and university pages', head: ['Date', 'What happens', 'Source'], rows: [
          ['1 June 2026', 'UAT-UK accounts, bursary and access arrangement requests open', 'UAT-UK'],
          ['20 July 2026', 'Booking opens for the October sitting', 'UAT-UK'],
          ['28 September 2026, 6pm UK time', 'October booking closes', 'UAT-UK'],
          ['12 to 16 October 2026', 'TMUA, ESAT and TARA window 1', 'UAT-UK'],
          ['15 October 2026, 6pm UK time', 'UCAS deadline for Oxford', 'Oxford Mathematical Institute'],
          ['28 October 2026', 'Booking opens for the January sitting', 'UAT-UK'],
          ['16 November 2026', 'October results to candidates', 'UAT-UK'],
          ['December 2026', 'Oxford Mathematics interviews, online', 'Oxford Mathematical Institute'],
          ['7 to 18 December 2026', 'Cambridge main interview period', 'University of Cambridge'],
          ['21 December 2026', 'January booking closes', 'UAT-UK'],
          ['4 to 8 January 2027', 'Window 2, not for most Oxford or Cambridge applicants', 'UAT-UK'],
          ['8 February 2027', 'January results to candidates', 'UAT-UK'],
          ['1 March to 4 May 2027', 'STEP registration, by a STEP centre', 'OCR'],
          ['14 June 2027 and 21 June 2027', 'STEP 2, then STEP 3', 'OCR'],
          ['12 August 2027', 'STEP results', 'OCR']
        ] },
        { kind: 'source', html: 'From UAT-UK\'s <a class="ag-inline-link" href="https://esat-tmua.ac.uk/deadlines/" rel="noopener" target="_blank">Key Dates and Deadlines for 2027 Entry</a>, OCR\'s <a class="ag-inline-link" href="https://www.ocr.org.uk/students/step-mathematics/key-dates-and-fees/" rel="noopener" target="_blank">STEP key dates</a>, the Oxford Mathematical Institute TMUA page and the Cambridge interviews page, read 1 November 2026. Candidates in China, Hong Kong and Macau sit on fixed days inside each window; UAT-UK lists them. Fees are set by UAT-UK and OCR and are not printed here.' },
        { kind: 'p', mt: true, html: '<strong>One sitting per cycle.</strong> UAT-UK says there is no advantage to either session, but a candidate can sit only once within an admissions cycle, and Imperial adds that only the first score is considered. For a student applying to neither Oxford nor Cambridge, January buys an extra term of A Level teaching before the test.' }
      ]
    },
    {
      id: 'computing', tint: 'deep', eyebrow: 'Hub section two',
      h2: 'What does a computer science application need besides an admissions test?',
      lede: 'Mathematics first, then evidence of computing. Cambridge\'s Computer Science department puts its main weight on Mathematics and Further Mathematics and calls A Level Computer Science valuable where offered. These seven pages cover the rest.',
      body: [
        { kind: 'p', html: '<strong>Something to write about.</strong> The <a class="ag-inline-link" href="/computer-science-personal-statement-projects-uk">personal statement projects page</a> helps a Year 12 student who has nothing to put in UCAS question 1 yet; it proposes small, measurable builds and a log, and it never touches the statement itself.' },
        { kind: 'p', html: '<strong>Choosing the A Level.</strong> Start with the <a class="ag-inline-link" href="/a-level-computer-science-tutor-online-uk">A level Computer Science tutor page</a> if you do not yet know your board, or you study at home, since whether you can sit as a private candidate decides between the two main specifications.' },
        { kind: 'p', html: '<strong>AQA 7517.</strong> Students at an AQA school should read the <a class="ag-inline-link" href="/aqa-a-level-computer-science-7517-help">AQA 7517 page</a>, which is built around the on-screen Paper 1 and the program AQA releases before it.' },
        { kind: 'p', html: '<strong>OCR H446.</strong> The <a class="ag-inline-link" href="/ocr-a-level-computer-science-h446-help">OCR H446 page</a> is its opposite number: two handwritten papers with no calculator, and the only coding done in a project of the student\'s choosing.' },
        { kind: 'p', html: '<strong>The project.</strong> For the coursework on either board, the <a class="ag-inline-link" href="/a-level-computer-science-nea-help">A-level Computer Science NEA page</a> sets out how the marks divide and what each board allows on AI help.' },
        { kind: 'p', html: '<strong>An EPQ artefact.</strong> A student who wants a computing project outside the A Level, such as an app or a model, should open the <a class="ag-inline-link" href="/epq-computer-science-artefact-mentoring">EPQ computer science page</a>, which is clear about where a mentor must stop.' },
        { kind: 'p', html: '<strong>The vocational route.</strong> The <a class="ag-inline-link" href="/btec-it-programming-unit-help">BTEC IT programming page</a> is for college students on Unit 4, whose assignments are assessed internally under strict authenticity rules.' },
        { kind: 'two', mt: true,
          leftH3: 'The personal statement in 2026',
          left: [
            'UCAS now asks three questions instead of one essay: at least 350 characters each, 4,000 characters in all, spaces included. Applicants must also declare the statement was not copied or provided from another source, artificial intelligence software included.'
          ],
          rightH3: 'Our line on coursework and statements',
          right: [
            'We teach computing and the method of running a project on practice material of our own. We never write, edit or rewrite a student\'s NEA, EPQ, BTEC assignment or personal statement. Cambridge applicants to Peterhouse or Trinity also sit the Computer Sciences Aptitude Test (CSAT).'
          ] }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'From UCAS list to test list',
      h2: 'How do you work out which admissions tests you need?',
      lede: 'Write out your five UCAS choices with their course codes and look each one up. Five steps, then two worked plans of our own.',
      body: [
        { kind: 'ol', items: [
          '<strong>List the five codes.</strong> Take each course\'s UCAS code from the university\'s course page, for example G400 or GG14, not just the subject name.',
          '<strong>Look each code up in UAT-UK\'s course list.</strong> Note TMUA, ESAT or TARA, whether it is compulsory or recommended, and for the ESAT the exact modules.',
          '<strong>Read each course page.</strong> UAT-UK says this is your responsibility; STEP requirements, college tests such as the CSAT and later changes appear there.',
          '<strong>Choose the window.</strong> An Oxford or Cambridge choice fixes October; otherwise pick either, once per cycle.',
          '<strong>Book by the deadline, after any bursary or access request.</strong> January booking closes on 21 December 2026 at 6pm UK time.'
        ] },
        { kind: 'table', mt: true, caption: 'Worked plan A, ours: a computer science list run against UAT-UK\'s 2027 course list', head: ['Choice (illustrative)', 'Code', 'Test it triggers', 'Status'], rows: [
          ['Cambridge Computer Science', 'G400', 'TMUA (plus CSAT at Peterhouse or Trinity)', 'Compulsory; October'],
          ['Imperial Computing', 'G400', 'TMUA', 'Compulsory'],
          ['Warwick Computer Science', 'G400', 'TMUA', 'Compulsory unless eligible for a contextual offer'],
          ['UCL Computer Science', 'G400', 'TARA', 'Compulsory'],
          ['Durham Computer Science', 'Not in the list', 'None listed', 'Check Durham\'s course page']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What plan A comes to',
          left: [
            'Two different tests, the TMUA for three choices and the TARA for UCL, both in October because of Cambridge: one account, two bookings. Durham is in our example because the list is silent on it, which means its course page decides, not that there is no test.'
          ],
          rightH3: 'Worked plan B, ours: mathematics',
          right: [
            'Cambridge, Warwick, Imperial and Durham Mathematics (all G100) plus LSE Mathematics with Economics G1L1. The list makes the TMUA compulsory for the first three and recommended for Durham and LSE, so one October TMUA serves all five. A Cambridge offer would then normally add STEP 2 and STEP 3 in June 2027.'
          ] },
        { kind: 'source', html: 'Plans A and B are ours, written on 1 November 2026 from UAT-UK\'s Course List 2027 Entry, Cambridge\'s Computer Science and STEP pages and Warwick\'s admissions tests page. They are not a recommendation of any university or any combination of choices.' }
      ]
    },
    {
      id: 'prep', tint: 'plain', eyebrow: 'Honest about preparation',
      h2: 'Do you need a tutor for the TMUA, ESAT or STEP?',
      lede: 'Not necessarily, and the test owners say so. UAT-UK writes that "the best way to prepare is to familiarise yourself with the test format and style of questions", and publishes free materials for every test.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What is free', p: 'UAT-UK specifications, Notes on Logic and Proof and practice tests; OCR\'s STEP past papers and examiner reports; Cambridge\'s STEP Support programme.' },
          { h3: 'What a class adds', p: 'A timetable, a teacher who marks working, and a group to compare wrong answers with. It helps most when logic, proof or Further Maths is new.' },
          { h3: 'What nobody can add', p: 'Cambridge says interview preparation companies are not endorsed and have no exclusive information. The same holds for every test here: there are no secret questions, and we promise no score, grade, interview or offer.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A two-year route',
    h2: 'From Year 12 to results day: the order we suggest',
    lede: 'Our suggested sequence for a mathematics or computer science applicant. Each stage ends with something the student can show.',
    table: { caption: 'Our admissions route, Year 12 to Year 13', head: ['When', 'Stage', 'Sign it is done'], rows: [
      ['Year 12, autumn and spring', '1. A Level pure secure, Further Maths begun', 'Algebra, sequences and calculus no longer need notes'],
      ['Year 12, summer', '2. Tests identified, logic learned, a project started', 'Five course codes looked up; a working program with a log'],
      ['Year 13, September to October', '3. TMUA, ESAT or TARA booked and sat', 'Both papers finished in time with nothing left blank'],
      ['Year 13, November to December', '4. Interview practice, if shortlisted', 'Can talk through a stuck problem and use a hint'],
      ['Year 13, January to June', '5. STEP, if an offer names it', 'Six full answers in three hours on an old paper']
    ] },
    left: { h3: 'If the plan is computer science', ps: [
      'Stage 2 carries more weight: the summer project feeds UCAS question 1. Keep it separate from the NEA, which must be new work done under the school\'s supervision.'
    ] },
    right: { h3: 'If the plan is mathematics at Cambridge', ps: [
      'All five stages apply. Cambridge says STEP is aimed at roughly the top 5% of A Level mathematics candidates, so slow early progress on old papers is normal.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach university applicants',
    lede: 'Grouped by the part of the application each course supports.',
    bands: [
      { num: 'I', h3: 'Admissions tests', sub: 'TMUA, STEP, harder problems', courses: [
        { code: 'UA / T / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'Both stages, autumn to June.' },
        { code: 'UA / T / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems that reward persistence.' },
        { code: 'UA / T / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Logic and reasoning about code.' }
      ] },
      { num: 'II', h3: 'Sixth-form mathematics', sub: 'A Level and IB', courses: [
        { code: 'UA / M / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'The content under every test.' },
        { code: 'UA / M / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Assumed by STEP 3.' },
        { code: 'UA / M / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For Diploma students applying to UK courses.' }
      ] },
      { num: 'III', h3: 'Computing', sub: 'A Level and beyond', courses: [
        { code: 'UA / C / 01', slug: 'a-level-computer-science-course-aqa-ocr', title: 'A Level Computer Science', blurb: 'AQA 7517 and OCR H446.' },
        { code: 'UA / C / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge International 9618', blurb: 'For international schools.' },
        { code: 'UA / C / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problems in code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live admissions classes, timed to the application year',
    lede: TIMING,
    slots: [
      { time: 'Weekday evenings', l: 'Content and logic, after school.' },
      { time: 'Weekend mornings', l: 'Full timed papers and long questions.' },
      { time: '1-on-1', l: 'One applicant, one course list.' }
    ],
    cells: [
      { h3: 'Codes before classes', p: 'The first lesson maps the student\'s UCAS codes to the tests they trigger.' },
      { h3: 'Two speeds', p: 'Short timed items for the on-screen tests; slow, complete write-ups for STEP.' },
      { h3: 'Working shown', p: 'Every answer, even a multiple-choice one, is explained aloud or on paper.' },
      { h3: 'Groups of 15 to 20', p: 'Comparing different routes to one answer is how reasoning gets sharper.' },
      { h3: 'Practice of our own', p: 'Lessons use questions we wrote; official papers stay with the student.' },
      { h3: 'No outcomes promised', p: 'We promise no score, grade, interview or offer from any university.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Projects our students have published in maths, programming and machine learning, some of them the kind a computer science applicant can describe in UCAS question 1. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews copied word for word from our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'Test fees go to UAT-UK or OCR, and UAT-UK bursaries can cover the whole fee for eligible UK candidates. Our classes are a separate monthly fee, and most applicants stop once their last test or interview is done.',
    free: ['A free first class', 'Your UCAS codes mapped to tests', 'No card details'],
    group: ['Groups of 15 to 20', 'One teacher all year', 'Timed papers marked', 'Monthly, stop any time'],
    one: ['One student, one teacher', 'Planned around one course list', 'For a close deadline']
  },

  faq: {
    eyebrow: 'Admissions questions',
    h2: 'What applicants and parents ask about UK admissions tests',
    items: [
      { q: 'Which universities use the TMUA?', a: 'UAT-UK\'s course list for 2027 entry names seven: Cambridge, Durham, Imperial, LSE, Oxford, UCL and Warwick. It is compulsory for some courses, such as LSE Economics, and only recommended for others, such as Durham Mathematics.' },
      { q: 'Which universities require STEP?', a: 'OCR says STEP is used by the University of Cambridge, the University of Warwick and Imperial College London. At Cambridge it normally forms part of the conditional offer for Mathematics, and Warwick accepts it as an alternative to the TMUA for Mathematics.' },
      { q: 'What is the difference between the TMUA and STEP?', a: 'The TMUA is an on-screen multiple-choice test in October or January, two 75-minute papers with one overall score. STEP is a written OCR exam in June, three hours a paper, where you choose six of twelve questions and receive a grade from S to U.' },
      { q: 'Does Oxford still use the MAT?', a: 'No. Oxford\'s Mathematical Institute says the MAT was used from 2007 to 2025 and will not take place again. Applicants for Mathematics, Computer Science and the joint honours courses now take the TMUA in the October sitting.' },
      { q: 'Do all computer science courses need the TMUA?', a: 'No. Cambridge, Oxford, Imperial and Warwick use it for computer science, but UAT-UK lists the TARA, not the TMUA, for UCL Computer Science. Universities outside UAT-UK\'s list of seven do not appear in it at all, so each course page is the authority.' },
      { q: 'When are the admissions tests for 2027 entry?', a: 'UAT-UK runs the TMUA, ESAT and TARA from 12 to 16 October 2026 and from 4 to 8 January 2027. OCR sets STEP 2 on 14 June 2027 and STEP 3 on 21 June 2027.' },
      { q: 'Do I need a tutor for university admissions tests?', a: 'UAT-UK says familiarity with the format and question style is the main preparation, and its materials are free. A class helps when logic, proof or Further Maths is new; it guarantees no result.' },
      { q: 'Will you write or check my personal statement or NEA?', a: 'No. We teach computing and project method on our own practice material, but never write, edit or rewrite a statement, NEA, EPQ or BTEC assignment: UCAS and the boards require your own work.' },
      { q: 'What days are classes on?', a: TIMING },
      { q: 'Are you connected with UAT-UK, OCR or any university?', a: 'No. We are an independent teaching company with no link to UAT-UK, OCR, AQA, Pearson, UCAS or any university. Students register and book their own tests.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Beyond admissions tests',
    lede: 'The school courses these tests sit on, and enrichment that strengthens a mathematics or computing application.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'The A Level that STEP 3 takes for granted.' },
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'Pure, mechanics and statistics for Years 12 and 13.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Proof-writing practice that carries over to long STEP answers.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'A timed programming contest for computing applicants.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'IB Extended Essay mentoring', p: 'The IB counterpart of an EPQ in maths or computing.' }
    ]
  },

  start: {
    h2: 'Book a free admissions class',
    lede: 'Tell us your intended courses and the year you apply. In the free class we map your UCAS codes to their tests and try a short problem together.',
    readFirst: 'You can also look through <a class="ag-inline-link" href="/courses">every course we run</a> or see <a class="ag-inline-link" href="/how-we-teach">how our live classes work</a> first.',
    note: 'Taught live from India, scheduled in UK time around sixth-form hours; WhatsApp from a UK number is quickest.',
    formNote: 'Free, with no card; we reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth form', links: [
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/edexcel-a-level-maths-9ma0-help', label: 'Edexcel A Level Maths 9MA0' },
        { href: '/aqa-a-level-maths-7357-help', label: 'AQA A Level Maths 7357' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/tmua-mat-step-preparation-course', label: 'TMUA and STEP preparation' },
        { href: '/courses/a-level-computer-science-course-aqa-ocr', label: 'A Level Computer Science' },
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Look up the course code first'
  },

  personalityCss: `
.ag-root.ag-ukua .ag-hero h1 { letter-spacing: -0.017em; max-width: 27ch; }
.ag-root.ag-ukua .ag-capsule { border-left-width: 5px; padding-left: 1.3rem; }
.ag-root.ag-ukua .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ukua .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.002em; }
.ag-root.ag-ukua .ag-table th:first-child { width: 18%; }
.ag-root.ag-ukua .ag-steps li { line-height: 1.62; }
.ag-root.ag-ukua .ag-three h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'UAT-UK (esat-tmua.ac.uk) TMUA, ESAT and TARA pages, its Key Dates and Deadlines for 2027 Entry and its Course List 2027 Entry PDF (April 2026), read raw on 1 November 2026; OCR STEP Mathematics pages (STEP users, two papers, three hours, twelve questions in three sections, marked out of 20, six answers count, 2027 key dates, centre registration, no calculators); Cambridge Faculty of Mathematics and undergraduate STEP pages (conditional offer, grades S to U, top 5%, both papers for Mathematics); University of Warwick admissions tests page (TMUA or STEP for Mathematics); Imperial TMUA page (first score only); Oxford Mathematical Institute MAT, TMUA and interviews pages and Oxford Computer Science how to apply; Cambridge interview pages and Faculty of Mathematics FAQ and how to apply; UCAS personal statement and AI pages; Imperial and Cambridge personal statement pages; Cambridge Computer Science course page (CSAT); AQA 7517 v1.6, OCR H446 v3.0, AQA 7993 v1.4 and Pearson BTEC Nationals IT (2016) specifications and qualification page.',
    localProject: 'An index that maps a UCAS list to the tests it triggers: a master table of twelve admissions hurdles and qualifications, a by-university table built from the UAT-UK 2027 course list, our time-per-question comparison (TMUA 3 minutes 45 seconds, ESAT about 1 minute 29 seconds, TARA about 1 minute 49 seconds, STEP 30 minutes), a dated 2026 to 2027 calendar, and two worked applicant plans of our own: a computer science list that triggers both the TMUA and the TARA, and a mathematics list where one October TMUA serves five choices before STEP in June.',
    requiredMentions: ['Course List 2027 Entry', 'UCL Computer Science uses the TARA', 'Test of Academic Reasoning for Admissions', 'Econometrics and Mathematical Economics L140', 'Recommended: Mathematics G100, G103, Mathematics and Statistics G111, G114', 'About 1 minute 49 seconds', '16 November 2026', '8 February 2027', 'Worked plan A, ours', 'one October TMUA serves all five', 'Look up the course code first'],
    sources: [
      { claim: 'TMUA format, score scale, seven user universities, preparation advice and bursaries.', url: 'https://esat-tmua.ac.uk/about-the-tests/tmua-test/' },
      { claim: 'ESAT modules, timing and the four universities that use it.', url: 'https://esat-tmua.ac.uk/about-the-tests/esat-test/' },
      { claim: 'TARA modules and its use by Oxford and UCL.', url: 'https://esat-tmua.ac.uk/about-the-tests/tara/' },
      { claim: 'Key dates, deadlines, results dates and once-per-cycle rule for 2027 entry.', url: 'https://esat-tmua.ac.uk/deadlines/' },
      { claim: 'Courses requiring or recommending each UAT-UK test at seven universities.', url: 'https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2026/04/01172717/Course_List_2027_Entry_Final.pdf' },
      { claim: 'STEP users, structure, marking and 2027 key dates.', url: 'https://www.ocr.org.uk/students/step-mathematics/' },
      { claim: 'The MAT ended after 2025 and Oxford uses the TMUA.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test' },
      { claim: 'Warwick Mathematics: TMUA or STEP.', url: 'https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/' },
      { claim: 'UCAS three-question personal statement and character limits.', url: 'https://www.ucas.com/applying/applying-to-university/writing-your-personal-statement' }
    ],
    rejectedClaims: [
      'Test fees: UAT-UK and OCR print them; not repeated, and no currency is typed on the page.',
      'Durham and LSE requirements beyond UAT-UK\'s course list: durham.ac.uk returned 403 to another writer on 31 October 2026 and was not retried; LSE course pages not read. Both are described only as the list states.',
      'Oxford central admissions pages (www.ox.ac.uk): 403 on 31 October 2026, not retried; Oxford facts come from the Mathematical Institute and Computer Science department pages.',
      'Warwick Mathematics as TMUA-only: UAT-UK\'s list says compulsory, Warwick\'s own page says TMUA or STEP; both printed, reader told to follow Warwick.',
      'Cambridge offer rates and Warwick score thresholds: left to the member pages; not needed for the index and easily misread as targets.',
      'Any test question, past paper item or interview question: none reproduced.',
      'Any score, grade, interview or offer promise: declined on the page.',
      'Any affiliation with UAT-UK, OCR, AQA, Pearson, UCAS or any university: none, stated on the page.'
    ]
  }
};
