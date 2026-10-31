'use strict';
// UK maths exam boards and specification codes (ag- guide door, pillar/index page for the hub
// "UK maths exam boards and specification codes" in content/exam-cluster-groups.json; UK and US exams cluster).
// Every figure in the master table was re-grepped on 1 November 2026 in the raw primary-source copy (whitespace
// normalised), not copied from member prose. Raw copies: keyword-research-2026-09/uk-us-gap/src/<member-slug>/ and,
// for the five documents fetched fresh for this page, src/uk-maths-exam-boards-and-specification-codes/.
//  - AQA GCSE Mathematics 8300 specification, "GCSE exams June 2017 onwards. Version 1.1 September 2026": "Students
//    must take three question papers at the same tier"; "1 hour 30 minutes"; "80 marks"; "Paper 1: non-calculator",
//    "Paper 2: calculator", "Paper 3: calculator"; QAN "601/4608/4". AQA 8300 key dates page: 8300/1F and 1H "14 May",
//    2F and 2H "27 May", 3F and 3H "14 Jun", June 2027 series, "Start time: AM | Duration: 1h 30m".
//  - Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, "First certification from June 2017 Issue 2": "three
//    equally-weighted written examination papers"; "Paper 1 is a non-calculator assessment and a calculator is allowed
//    for Paper 2" (and Paper 3); "Each paper is 1 hour and 30 minutes long."; "Each paper has 80 marks." Pearson GCSE
//    Summer 2027 timetable FINAL: "Friday 14 May 1MA1 1F Mathematics Paper 1 (Non-Calculator) Foundation Tier Morning".
//  - OCR (Cambridge OCR) GCSE (9-1) Mathematics J560 specification v2.1: "For first assessment in 2017"; six papers,
//    each "100 marks", "1 hour 30 minutes"; Papers 2 and 5 "Calculator not permitted", others "Calculator permitted".
//    OCR June 2027 final timetable: "J560/01 Paper 1 (Foundation – calculator) 1 h 30 min Fri 14 May am"; "J560/05
//    Paper 5 (Higher – non-calculator)" Thu 27 May am.
//  - AQA GCSE Statistics 8382 spec "GCSE exams June 2019 onwards. Version 1.2 June 2026": two papers, "Written exam: 1
//    hour 45 minutes", "80 marks"; "Students may use a calculator in the exam." Pearson 1ST0 spec: "Written examination: 1
//    hour 30 minutes"; "Calculators may be used in the examination"; "The first certification opportunity for this
//    qualification will be 2019."
//  - AQA Level 2 Certificate in Further Maths 8365 spec "For exams in May/June 2020 onwards. Version 1.4": "Paper 1: non-
//    calculator Paper 2: calculator"; "written exam: 1 hour 45 minutes".
//  - OCR FSMQ Additional Maths 6993 spec: "For first assessment in 2019"; "one two-hour examination"; "Calculators
//    permitted".
//  - CCEA GCSE Mathematics specification (fetched 1 Nov 2026, ccea.org.uk downloads path, HTTP 200): "For first award in
//    Summer 2019"; "Subject Code: 2210"; "Students take two units, one from M1, M2, M3 or M4 and one from M5, M6, M7 or
//    M8. To receive an award, one of these must be a completion test."; M1 and M2 "with calculator 1 hour 45 mins"; M3
//    and M4 "with calculator 2 hours"; M5 and M6 "Paper 1 without calculator 1 hour", "Paper 2 with calculator 1 hour";
//    M7 and M8 papers "1 hour 15 mins" each.
//  - WJEC GCSE Mathematics and Numeracy (Double Award) specification (fetched 1 Nov 2026, HTTP 200): "First Award
//    November 2026"; "C00/4968/0"; Unit 1 and Unit 2 Higher "1 hour 45 minutes", Foundation "1 hour 30 minutes"; Unit 2
//    "A calculator will not be allowed in this paper."; "Unit 3: Calculator-allowed Written examination Higher Tier: 2
//    hours (90 marks) Foundation Tier: 1 hour 45 minutes (75 marks)"; "Higher Tier: A* – D", "Foundation Tier: C – G"
//    (restated without dashes).
//  - Cambridge IGCSE Mathematics 0580 syllabus 2025 to 2027: Papers 1 and 3 "1 hour 30 minutes", Papers 2 and 4 "2
//    hours"; "Calculators are not allowed for Paper 1 and Paper 2."; "Algebraic or graphical calculators are not
//    permitted."; "Private candidates can enter for this syllabus."; "June and November".
//  - Cambridge IGCSE Additional Mathematics 0606 syllabus 2025 to 2027: "Calculators are not allowed for Paper 1.";
//    papers "2 hours, 80 marks"; "Candidates will be eligible for grades A* to E"; "Paper 1 is now a non-calculator
//    paper".
//  - Pearson Edexcel International GCSE Mathematics A 4MA1 spec Issue 2: "First assessment: June 2018"; "2-hour
//    examination"; "The total number of marks for each paper is 100."; "A calculator may be used in the examinations";
//    "Availability: January and June"; "This qualification is not accredited or regulated by any UK regulatory body."
//  - Pearson Edexcel International GCSE Further Pure Mathematics 4PM1 spec: "First examination June 2019"; "single tier";
//    "2-hour examination"; "A calculator may be used in the examinations"; same not-regulated sentence.
//  - Cambridge International AS & A Level Mathematics 9709 syllabus 2026 and 2027: "Candidates take four components for
//    A Level Mathematics."; "1 hour 50 minutes" (Papers 1 and 3), "1 hour 15 minutes" (Papers 2, 4, 5, 6); "it is not
//    possible to combine Paper 4 and Paper 6"; "graphical calculators ... are not permitted".
//  - Cambridge International Further Mathematics 9231 syllabus 2026 and 2027: "All A Level candidates take four written
//    papers."; Papers 1 and 2 "2 hours", Papers 3 and 4 "1 hour 30 minutes"; graphical calculators not permitted; "Exams
//    are available in the June and November series."
//  - AQA A-level Mathematics 7357 spec: "For exams in 2018 onwards"; "Written exam: 2 hours", "100 marks"; "A calculator
//    is required for use in all assessments in this specification."
//  - Pearson Edexcel A level Mathematics 9MA0 spec Issue 4: "First certification from 2018"; "2-hour written
//    examination"; "100 marks"; "Calculators can be used in the assessment."; "Students must complete all assessment in
//    May/June in any single year."
//  - OCR A Level Mathematics A H240 spec v3.1: "For first assessment in 2018"; "2 hour written paper"; "100 marks";
//    "Learners are permitted to use a scientific or graphical calculator for all papers."
//  - OCR B (MEI) H640 spec v3.1: "For first assessment in 2018"; three papers, "2 hour written paper"; components 01 and
//    02 "100 marks", 03 "75 marks"; "36.4%", "27.3%"; "scientific or graphical calculator for all components".
//  - CCEA GCE Mathematics spec: "Subject Code: 2210"; "For first teaching from September 2018"; AS 1 "1 hour 45 mins", AS
//    2 "1 hour 15 mins", A2 1 "2 hours 30 mins", A2 2 "1 hour 30 mins"; no "computer algebra system".
//  - WJEC GCE AS/A Level Mathematics spec: "Teaching from 2017"; "not available to centres in England"; Units 1 and 3 "2
//    hours 30 minutes", Units 2 and 4 "1 hour 45 minutes"; "A calculator is required for use in all assessments in this
//    specification."; entry codes 2300U1, 2300U2, 1300U3, 1300U4.
//  - AQA A-level Further Mathematics 7367 spec: "For exams in June 2019 onwards"; "Written exam: 2 hours" (three papers);
//    "Students must study two of these options."; "A calculator is required".
//  - Pearson Edexcel A level Further Mathematics 9FM0 spec Issue 4: "1 hour and 30 minutes written examination"; "75
//    marks"; "This makes a total of ten different option pairs."; "Calculators can be used in the assessment."; "The first
//    certification opportunity for this qualification will be 2019."
//  - SQA course specifications (fetched 1 Nov 2026, sqa.org.uk, HTTP 200): National 5 Mathematics "Course code: C847 75",
//    "Valid from: session 2023–24", "Question paper 1 (non-calculator) 40 1 hour", "Question paper 2 50 1 hour and 30
//    minutes"; Higher Mathematics "Course code: C847 76", paper 1 (non-calculator) "55 1 hour and 15 minutes", paper 2
//    "65 1 hour and 30 minutes"; Advanced Higher Mathematics "Course code: C847 77", "Valid from: session 2019–20", paper
//    1 (non-calculator) "35 1 hour", paper 2 "80 2 hours and 30 minutes". National 5 Applications of Mathematics spec
//    (member raw copy): "Course code: C844 75"; paper 1 non-calculator 50 minutes, paper 2 "1 hour and 40 minutes". SQA
//    page sqa-81281.html: "On 1 February 2026, Qualifications Scotland replaced SQA".
//  - IB DP subject brief, Mathematics: applications and interpretation (IB PDF hosted at ms.ut.ee; ibo.org returned 403 to
//    earlier writers and was not retried): "First assessments for SL and HL—2021"; "Both courses are offered at SL and HL."; Paper 1 and Paper
//    2 "Technology allowed.", SL 1.5 hours, HL 2 hours; Paper 3 HL 1 hour; Exploration 20 per cent; "share 60 hours of
//    common content". IB MYP mathematics subject brief (school-hosted IB PDF): "designed for students aged 11 to 16";
//    "standard and extended"; "2 hour on-screen exam-inations" for the MYP certificate.
// Our own: the two decoding worked examples (J560/05 and a 9709 route), the five-step finder, the grouping of rows and the
// "same morning" comparison table built from the three boards' own June 2027 timetables.
// Spine: the code is the map. A specification code on a timetable or a past paper cover tells a family the board, the
// qualification, the tier and often the calculator rule, and so which member page to open. Lesson family: a pillar that
// teaches families to decode the codes, distinct from the AQA, Edexcel and OCR comparison door.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'BOARDS AND CODES', blurb: 'Every UK school maths qualification on one table, from 8300 and 0580 to C847 76 and H640, and how to tell which one a pupil is entered for.' },
  slug: 'uk-maths-exam-boards-and-specification-codes',
  code: 'ukeb',
  accent: '#2B4A5E',
  accentRationale: 'Boards and codes pillar: a deep ink slate blue (#2B4A5E, 8.83:1 on #FBF8F2, 8.30:1 on #F5F1E8, 7.60:1 on #EDE7DA), neutral enough to sit above every board door without borrowing any one board\'s colour',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK maths exam boards and specification codes',
  title: 'GCSE and A Level Maths Exam Boards and Specification Codes',
  description: 'Every UK maths exam board and spec code in one table: AQA 8300, Edexcel 1MA1, OCR J560, 0580, 4MA1, 7357, 9MA0, H240, SQA and IB, with papers and calculator rules.',
  ogDescription: 'One table for every UK school maths qualification: board, specification code, papers, paper length and calculator rule, read from each board\'s own specification.',
  twitterDescription: 'GCSE, IGCSE, A level, Scottish and IB maths: which board sets which code, how many papers, how long, and when the calculator is allowed.',
  pageName: 'UK Maths Exam Boards and Specification Codes',
  webPageDescription: 'A guide to every maths exam board and specification code used in UK schools, with a master table built from the boards\' own specifications.',
  courseDescription: 'Live online maths teaching for UK students on any board: GCSE, International GCSE, A level, Scottish National Qualifications and IB.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths exam boards and codes',
  navLinks: [
    { href: '#codes', label: 'Master table' },
    { href: '#gcse', label: 'GCSE' },
    { href: '#international', label: 'International' },
    { href: '#alevel', label: 'A level' },
    { href: '#finder', label: 'Find your code' }
  ],
  eyebrow: 'England, Wales, Northern Ireland, Scotland &middot; GCSE to A level &middot; Ages 14 to 18',
  h1: 'GCSE and A level maths exam boards and specification codes',
  lede: 'A four-digit number on a revision guide, a code on a timetable, a paper labelled 2H or 05: UK maths runs on codes, and each points to a different set of papers. This page lists every maths specification a UK school is likely to use, from GCSE and International GCSE to A level, Scottish National Qualifications and the IB, with board, code, papers, paper length and calculator rule, each checked in the board\'s own specification. Below the table, every qualification gets a short introduction and a link to its own page.',
  secondaryCta: { href: '#codes', label: 'See the master table' },
  wa: 'Hello Modern Age Coders, I would like a free first class. My child\'s maths exam board and code is:',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from each board\'s own specification, checked 1 November 2026',
  spec: [
    ['England', 'AQA, Pearson Edexcel, OCR'],
    ['Northern Ireland', 'CCEA'],
    ['Wales', 'WJEC'],
    ['Scotland', 'Qualifications Scotland, formerly SQA'],
    ['International', 'Cambridge, Pearson Edexcel, IB'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'UK school maths exams are set by AQA, Pearson Edexcel and OCR in England, CCEA in Northern Ireland, WJEC in Wales and Qualifications Scotland (formerly SQA). GCSE maths codes are AQA 8300, Edexcel 1MA1 and OCR J560. A level codes are AQA 7357, Edexcel 9MA0, OCR H240 and OCR MEI H640. Cambridge sets IGCSE 0580 and A Level 9709; Edexcel sets International GCSE 4MA1. Scotland uses National 5 (C847 75) and Higher (C847 76), and IB schools teach two DP maths courses at SL and HL. The specification code on a timetable or past paper cover tells you which papers a student will sit. Modern Age Coders teaches every one of these live online, in a group of 15 to 20 or 1-on-1, through its GCSE Mathematics, IGCSE Mathematics and A Level Maths courses.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that cover most of the table',
    lede: 'Each is taught to the student\'s own board and code, from that board\'s papers.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'EB / 01', title: 'GCSE Maths: Foundation and Higher', note: 'For 8300, 1MA1, J560, CCEA and WJEC students, taught at the right tier with the right calculator order.' },
      { course: 'igcse-mathematics-mastery', code: 'EB / 02', title: 'IGCSE Maths: Core, Extended and Additional', note: 'For Cambridge 0580 and 0606 and Edexcel 4MA1 students, including private candidates.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EB / 03', title: 'A Level Maths: Pure, Mechanics, Statistics', note: 'For 7357, 9MA0, H240, H640, 9709, CCEA and WJEC students, matched to the board\'s paper split.' }
    ]
  },

  sections: [
    {
      id: 'codes', tint: 'tint', eyebrow: 'The master table',
      h2: 'What are the UK maths exam boards and their specification codes?',
      lede: 'Six awarding bodies set the maths taken in UK schools, plus Cambridge International and the IB, which many independent and international schools use. Each qualification has a code, and the table gives it with the paper structure printed in that board\'s current specification.',
      body: [
        { kind: 'table', caption: 'UK school maths qualifications by board and code (from each board\'s specification; "yes" means a calculator is allowed)', head: ['Qualification', 'Board', 'Code', 'Papers', 'Length of each paper', 'Calculator', 'First or current exams'], rows: [
          ['GCSE Mathematics', 'AQA', '8300', '3, one tier', '1 h 30 min', 'Paper 1 no; 2 and 3 yes', 'June 2017 onwards'],
          ['GCSE Mathematics', 'Pearson Edexcel', '1MA1', '3, one tier', '1 h 30 min', 'Paper 1 no; 2 and 3 yes', 'First certified June 2017'],
          ['GCSE Mathematics', 'OCR', 'J560', '3, one tier (1 to 3 or 4 to 6)', '1 h 30 min', 'Papers 2 and 5 no; rest yes', 'First assessed 2017'],
          ['GCSE Statistics', 'AQA', '8382', '2, one tier', '1 h 45 min', 'Yes', 'June 2019 onwards'],
          ['GCSE Statistics', 'Pearson Edexcel', '1ST0', '2, one tier', '1 h 30 min', 'Yes', 'First certified 2019'],
          ['Level 2 Further Maths', 'AQA', '8365', '2', '1 h 45 min', 'Paper 1 no; Paper 2 yes', 'May/June 2020 onwards'],
          ['FSMQ Additional Maths', 'OCR', '6993', '1', '2 h', 'Yes', 'First assessed 2019'],
          ['GCSE Mathematics, Northern Ireland', 'CCEA', 'Units M1 to M8 (subject code 2210)', 'A first unit plus a two-paper completion test', 'M1, M2 1 h 45 min; M3, M4 2 h; completion papers 1 h or 1 h 15 min', 'First unit yes; completion Paper 1 no', 'First award Summer 2019'],
          ['GCSE Mathematics and Numeracy, Wales', 'WJEC', 'C00/4968/0', '3 units', 'Higher 1 h 45, 1 h 45, 2 h; Foundation 1 h 30, 1 h 30, 1 h 45', 'Unit 2 no; Units 1 and 3 yes', 'First award November 2026'],
          ['IGCSE Mathematics', 'Cambridge International', '0580', '2 (Core 1 and 3, Extended 2 and 4)', 'Core 1 h 30 min; Extended 2 h', 'Papers 1 and 2 no', 'Syllabus 2025 to 2027'],
          ['IGCSE Additional Mathematics', 'Cambridge International', '0606', '2', '2 h', 'Paper 1 no', 'Syllabus 2025 to 2027'],
          ['International GCSE Mathematics A', 'Pearson Edexcel', '4MA1', '2, one tier', '2 h', 'Yes', 'First assessed June 2018'],
          ['International GCSE Further Pure', 'Pearson Edexcel', '4PM1', '2, single tier', '2 h', 'Yes', 'First examined June 2019'],
          ['AS and A Level Mathematics', 'Cambridge International', '9709', '4 of 6 components', 'Papers 1, 3 1 h 50 min; others 1 h 15 min', 'Yes, not graphical', 'Syllabus 2026 and 2027'],
          ['AS and A Level Further Mathematics', 'Cambridge International', '9231', '4', 'Papers 1, 2 2 h; 3, 4 1 h 30 min', 'Yes, not graphical', 'Syllabus 2026 and 2027'],
          ['A-level Mathematics', 'AQA', '7357', '3', '2 h', 'Required', '2018 onwards'],
          ['A level Mathematics', 'Pearson Edexcel', '9MA0', '3', '2 h', 'Yes', 'First certified 2018'],
          ['A Level Mathematics A', 'OCR', 'H240', '3', '2 h', 'Yes, graphical allowed', 'First assessed 2018'],
          ['A Level Mathematics B (MEI)', 'OCR', 'H640', '3', '2 h', 'Yes, graphical allowed', 'First assessed 2018'],
          ['GCE Mathematics, Northern Ireland', 'CCEA', 'Subject code 2210', '4 units', '1 h 45, 1 h 15, 2 h 30, 1 h 30', 'Yes, no computer algebra', 'Taught from September 2018'],
          ['GCE Mathematics, Wales', 'WJEC', 'Units 2300U1, 2300U2, 1300U3, 1300U4', '4 units', 'Units 1, 3 2 h 30 min; 2, 4 1 h 45 min', 'Required', 'Taught from 2017'],
          ['A-level Further Mathematics', 'AQA', '7367', '3', '2 h', 'Required', 'June 2019 onwards'],
          ['A level Further Mathematics', 'Pearson Edexcel', '9FM0', '4 (2 core, 2 options)', '1 h 30 min', 'Yes', 'First certified 2019'],
          ['National 5 Mathematics', 'Qualifications Scotland (SQA)', 'C847 75', '2', '1 h; 1 h 30 min', 'Paper 1 no', 'Session 2023 to 24 on'],
          ['National 5 Applications of Mathematics', 'Qualifications Scotland (SQA)', 'C844 75', '2', '50 min; 1 h 40 min', 'Paper 1 no', 'Session 2023 to 24 on'],
          ['Higher Mathematics', 'Qualifications Scotland (SQA)', 'C847 76', '2', '1 h 15 min; 1 h 30 min', 'Paper 1 no', 'Session 2023 to 24 on'],
          ['Advanced Higher Mathematics', 'Qualifications Scotland (SQA)', 'C847 77', '2', '1 h; 2 h 30 min', 'Paper 1 no', 'Session 2019 to 20 on'],
          ['DP Maths: applications and interpretation', 'IB', 'SL and HL', 'SL 2, HL 3, plus exploration', 'SL 1.5 h; HL 2 h, 2 h, 1 h', 'Technology allowed', 'First assessed 2021'],
          ['DP Maths: analysis and approaches', 'IB', 'SL and HL', 'See the IB\'s page', 'See the IB\'s page', 'See the IB\'s page', 'See the IB\'s page'],
          ['MYP mathematics', 'IB', 'Standard and extended', 'Optional on-screen exam', '2 h', 'See the IB\'s page', 'Ages 11 to 16']
        ] },
        { kind: 'source', html: 'Sources, read raw on 31 October and 1 November 2026: the current specifications of <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics" rel="noopener" target="_blank">AQA</a>, <a class="ag-inline-link" href="https://qualifications.pearson.com/" rel="noopener" target="_blank">Pearson Edexcel</a>, <a class="ag-inline-link" href="https://www.ocr.org.uk/" rel="noopener" target="_blank">OCR</a>, CCEA and WJEC; Cambridge International syllabuses; SQA course specifications; and IB subject briefs hosted by schools, because ibo.org refused automated requests.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read a code',
          left: [
            'Each board has its own house style. AQA uses four digits (8300, 7357); Pearson Edexcel joins digits to a subject abbreviation (1MA1, 9MA0, 9FM0); OCR puts a letter first (J for GCSE, H for A level). Cambridge also uses four digits, so 0580 and 9709 are easily mistaken for AQA codes. A suffix after a slash names the paper: 8300/2H is AQA\'s second Higher paper, J560/05 is OCR\'s fifth.'
          ],
          rightH3: 'Regulated or not',
          right: [
            'AQA, Edexcel and OCR GCSEs and A levels are regulated by Ofqual, WJEC\'s Welsh specifications by Qualifications Wales, and CCEA sets Northern Ireland\'s. Of both its International GCSEs in the table, Pearson says: "This qualification is not accredited or regulated by any UK regulatory body."'
          ] }
      ]
    },
    {
      id: 'gcse', tint: '', eyebrow: 'GCSE maths',
      h2: 'Which GCSE maths specification does my child sit?',
      lede: 'In England, one of three: AQA 8300, Pearson Edexcel 1MA1 or OCR J560. Northern Ireland and Wales have their own GCSEs, and some schools add a second maths qualification for able students.',
      body: [
        { kind: 'p', html: 'The three English GCSEs teach the same Department for Education content on the same 9 to 1 scale, so they differ in paper design, not maths. AQA tags every content statement with a reference such as N8 or G21, and our <a class="ag-inline-link" href="/aqa-gcse-maths-8300-help">AQA 8300 guide</a> uses those tags to trace a lost mark back to the specification. Edexcel examiners do not prescribe one method for problem-solving questions, so the <a class="ag-inline-link" href="/edexcel-gcse-maths-1ma1-help">Edexcel 1MA1 page</a> is about showing the route. OCR differs on paper order and marks per paper, and the <a class="ag-inline-link" href="/ocr-gcse-maths-j560-help">OCR J560 page</a> is built around when to pick up the calculator.' },
        { kind: 'table', mt: true, caption: 'Same morning, three boards: GCSE maths papers in the June 2027 series (AQA key dates page; Pearson and OCR final timetables)', head: ['Date', 'Papers', 'Calculator'], rows: [
          ['Friday 14 May 2027, morning', 'AQA 8300/1F, 1H; Edexcel 1MA1 1F, 1H', 'No'],
          ['Friday 14 May 2027, morning', 'OCR J560/01, J560/04', 'Yes'],
          ['Thursday 27 May 2027, morning', 'AQA and Edexcel second papers; OCR J560/02, /05', 'AQA and Edexcel yes; OCR no'],
          ['Monday 14 June 2027, morning', 'Third papers on all three boards', 'Yes']
        ] },
        { kind: 'p', html: 'Northern Irish pupils sit CCEA\'s unitised GCSE: one first unit and one completion test, with the pairing fixing the grades on offer, as the <a class="ag-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE maths page</a> explains. Wales has merged its two maths GCSEs into one double award, first awarded in November 2026, with a unit on money and real-world numeracy; start with the <a class="ag-inline-link" href="/gcse-maths-and-numeracy-wales-help">Welsh GCSE Mathematics and Numeracy guide</a>.' },
        { kind: 'p', html: 'Two pages work by tier rather than code. For a student aiming at a secure 4 or 5, <a class="ag-inline-link" href="/gcse-foundation-maths-tutor-online">Foundation maths tutoring</a> covers the questions Foundation candidates drop most. For a top-set student chasing 8 or 9, <a class="ag-inline-link" href="/gcse-higher-maths-grade-9-tutor">Higher tier grade 9 tutoring</a> explains how the top grade is set.' },
        { kind: 'p', html: 'Some schools add a second qualification. GCSE Statistics is a full GCSE, AQA 8382 or Edexcel 1ST0, compared on our <a class="ag-inline-link" href="/gcse-statistics-tutor-online">GCSE Statistics tutoring page</a>. AQA\'s Level 2 Certificate brings calculus and matrices in early for future A level students (see the <a class="ag-inline-link" href="/aqa-level-2-further-maths-8365-help">AQA 8365 further maths page</a>), and OCR\'s single two-hour Level 3 paper is on the <a class="ag-inline-link" href="/ocr-fsmq-additional-maths-6993-help">OCR FSMQ Additional Maths 6993 page</a>. Not sure of the board yet? Try <a class="ag-inline-link" href="/gcse-maths-tuition-online">online GCSE maths tuition</a>, or compare the English specifications side by side on the <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">AQA, Edexcel and OCR comparison</a>.' }
      ]
    },
    {
      id: 'international', tint: 'deep', eyebrow: 'International GCSE and Cambridge International',
      h2: 'What is the difference between IGCSE and GCSE maths?',
      lede: 'International GCSEs come from Cambridge International (0580, 0606) or Pearson Edexcel (4MA1, 4PM1). The maths overlaps heavily with GCSE; the papers, tiers, exam series and regulation do not.',
      body: [
        { kind: 'p', html: 'Cambridge IGCSE Mathematics 0580 has Core (Papers 1 and 3, 1 hour 30 minutes each) and Extended (Papers 2 and 4, 2 hours each), and the first paper of each pair bans the calculator. The <a class="ag-inline-link" href="/cambridge-igcse-maths-0580-help">Cambridge IGCSE 0580 page</a> explains how the tier caps or floors the grade. IGCSE Additional Mathematics 0606 has no grades below E and, from 2025, a non-calculator first paper; see the <a class="ag-inline-link" href="/cambridge-igcse-additional-maths-0606-help">IGCSE Additional Maths 0606 page</a>.' },
        { kind: 'p', html: 'Pearson Edexcel\'s International GCSE Mathematics A, 4MA1, has two 2-hour papers per tier and a calculator on both, so marks reward choosing a method; the <a class="ag-inline-link" href="/edexcel-international-gcse-maths-a-4ma1-help">Edexcel International GCSE 4MA1 page</a> works through that. Further Pure Mathematics 4PM1 is single-tier, has no statistics and reaches A level style calculus, as the <a class="ag-inline-link" href="/edexcel-igcse-further-pure-maths-4pm1-help">4PM1 Further Pure page</a> shows.' },
        { kind: 'p', html: 'These are also the usual route for families educating at home: Cambridge says of 0580 that "Private candidates can enter for this syllabus." Finding a centre and paying fees fall to the parent, and the <a class="ag-inline-link" href="/igcse-maths-for-home-educated-students-uk">IGCSE maths guide for home-educated students</a> sets out the steps.' },
        { kind: 'p', html: 'After 16, Cambridge AS and A Level Mathematics 9709 has six components, of which an A Level candidate sits four; the <a class="ag-inline-link" href="/cambridge-a-level-maths-9709-help">Cambridge A Level Maths 9709 page</a> covers the route choice. Further Mathematics 9231 expects most of 9709 first, mapped on the <a class="ag-inline-link" href="/cambridge-a-level-further-maths-9231-help">Cambridge Further Maths 9231 page</a>. For classes on any international code, see <a class="ag-inline-link" href="/igcse-maths-tuition-online">online IGCSE maths tuition</a>.' },
        { kind: 'p', html: 'Series differ too. Cambridge runs June and November series for 0580, 9709 and 9231; Pearson lists "Availability: January and June" for 4MA1 and 4PM1; English GCSE maths has a summer series plus a November series for students aged 16 or over.' }
      ]
    },
    {
      id: 'alevel', tint: '', eyebrow: 'A level maths and further maths',
      h2: 'Which A level maths board is my school using?',
      lede: 'In England, one of four: AQA 7357, Pearson Edexcel 9MA0, OCR H240 or OCR MEI H640. All are sat in one series at the end of the course and share Ofqual\'s assessment objectives, but they split pure, mechanics and statistics between papers differently.',
      body: [
        { kind: 'table', caption: 'Where mechanics and statistics sit in each English A level maths specification', head: ['Code', 'Paper 1', 'Paper 2', 'Paper 3'], rows: [
          ['AQA 7357', 'Pure', 'Pure and mechanics', 'Pure and statistics'],
          ['Edexcel 9MA0', 'Pure', 'Pure', 'Statistics and mechanics'],
          ['OCR H240', 'Pure', 'Pure and statistics', 'Pure and mechanics'],
          ['OCR MEI H640', 'Pure and mechanics', 'Pure and statistics', 'Pure and comprehension']
        ] },
        { kind: 'p', mt: true, html: 'The <a class="ag-inline-link" href="/aqa-a-level-maths-7357-help">AQA A level maths 7357 page</a> shows how mixing pure into both applied papers changes revision. The <a class="ag-inline-link" href="/edexcel-a-level-maths-9ma0-help">Edexcel 9MA0 page</a> starts from its all-applied third paper and the large data set. The <a class="ag-inline-link" href="/ocr-a-level-maths-h240-help">OCR H240 page</a> focuses on command words such as "show detailed reasoning", and the <a class="ag-inline-link" href="/ocr-mei-a-level-maths-h640-help">OCR MEI H640 page</a> prepares students for the 75-mark third paper with its comprehension passage.' },
        { kind: 'p', html: 'CCEA\'s A level is two AS and two A2 units, the AS worth 40 per cent, with unit resits; see the <a class="ag-inline-link" href="/ccea-a-level-maths-help">CCEA A level maths page</a>. WJEC\'s, "not available to centres in England", is also four units, ending with differential equations and mechanics; see the <a class="ag-inline-link" href="/wjec-a-level-maths-help-wales">WJEC A level maths page for Wales</a>.' },
        { kind: 'p', html: 'Further Mathematics is a second A level. AQA 7367 is three two-hour papers with two of mechanics, statistics and discrete chosen, set out on the <a class="ag-inline-link" href="/aqa-a-level-further-maths-7367-help">AQA further maths 7367 page</a>. Edexcel 9FM0 is four 90-minute papers with "a total of ten different option pairs", untangled on the <a class="ag-inline-link" href="/edexcel-a-level-further-maths-9fm0-help">Edexcel further maths 9FM0 page</a>. If a sixth form offers none, read <a class="ag-inline-link" href="/further-maths-when-your-school-does-not-offer-it">further maths when your school does not offer it</a>. For board-neutral classes, start at <a class="ag-inline-link" href="/a-level-maths-tuition-online">online A level maths tuition</a>.' }
      ]
    },
    {
      id: 'scotland', tint: 'tint', eyebrow: 'Scotland',
      h2: 'How do Scottish maths qualifications work?',
      lede: 'Scotland has its own curriculum and awarding body. On 1 February 2026 Qualifications Scotland replaced SQA, and SQA\'s course documents stay current. Every course in the table opens with a non-calculator paper.',
      body: [
        { kind: 'p', html: 'Before any exam, pupils move through Curriculum for Excellence levels, judged by teachers against national Benchmarks. <a class="ag-inline-link" href="/scottish-primary-maths-tutor-online">Primary maths tutoring in Scotland</a> explains Early, First and Second level; the <a class="ag-inline-link" href="/s1-s3-maths-tutor-online-scotland">S1 to S3 maths page</a> covers Third and Fourth level and how they feed the S4 choice.' },
        { kind: 'p', html: 'National 5 Mathematics, C847 75, has a one-hour 40-mark paper without a calculator and a 90-minute 50-mark paper with one, as the <a class="ag-inline-link" href="/national-5-maths-tuition-online">National 5 maths tuition page</a> discusses. National 5 Applications of Mathematics, C844 75, applies maths to finance, measurement and statistics; the <a class="ag-inline-link" href="/national-5-applications-of-maths-help">National 5 Applications of Maths page</a> shows when it suits. Higher Mathematics, C847 76, names National 5 Mathematics as its expected prior course, and the <a class="ag-inline-link" href="/higher-maths-tuition-online">Higher maths tuition page</a> covers the line-by-line working markers expect. Advanced Higher, C847 77, adds a 2 hour 30 minute calculator paper and formal proof; see the <a class="ag-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher maths tuition page</a>.' },
        { kind: 'p', html: 'The codes have their own logic. The same 847 runs through all three mathematics courses, and the last pair tracks the level: the C847 75 specification is SCQF level 5, C847 76 is level 6 and C847 77 is level 7.' }
      ]
    },
    {
      id: 'ib', tint: '', eyebrow: 'International Baccalaureate',
      h2: 'How is IB maths assessed?',
      lede: 'The Middle Years Programme, for ages 11 to 16, offers standard and extended maths. The Diploma offers analysis and approaches (AA) and applications and interpretation (AI), each at SL and HL.',
      body: [
        { kind: 'p', html: 'MYP maths is assessed by teachers on four criteria, with an optional two-hour on-screen examination; the <a class="ag-inline-link" href="/ib-myp-maths-tutor-online">IB MYP maths tutoring page</a> explains what each criterion measures. In the Diploma, IB\'s subject brief for AI says the two courses "share 60 hours of common content" and marks every paper "Technology allowed." AI SL is two 1.5-hour papers plus an exploration worth 20 per cent, covered on our <a class="ag-inline-link" href="/ib-maths-ai-sl-tutor-online">IB Maths AI SL tutoring page</a>.' },
        { kind: 'p', html: 'Two IB pieces are written by the student under strict academic-integrity rules. The <a class="ag-inline-link" href="/ib-maths-ia-guidance">IB maths IA guidance page</a> explains how we mentor the method while the student writes every word, and the <a class="ag-inline-link" href="/ib-extended-essay-maths-computer-science-mentoring">Extended Essay mentoring page</a> sets out what an outside mentor may do on a 4,000-word essay. For regular IB classes, start at <a class="ag-inline-link" href="/ib-maths-tuition-online">online IB maths tuition</a>. Because ibo.org refused automated requests, the AA row points to the IB rather than guessing.' }
      ]
    },
    {
      id: 'finder', tint: 'deep', eyebrow: 'Find your code',
      h2: 'How do I find out which specification my child is taking?',
      lede: 'Ask the school, then confirm it on paper. A code on an official document beats a board name on a revision guide, because one board often sets several maths qualifications.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask the maths department for board and code.</strong> "AQA 8300, Higher" or "Cambridge 0580, Extended" is enough. If they only say "Edexcel", ask whether it is 1MA1 or 4MA1.',
          '<strong>Check a mock paper cover.</strong> Boards print the code and paper on the front, such as 8300/1H or J560/04.',
          '<strong>Read the statement of entry.</strong> Near the exams, the centre lists every paper by code, date and session. That document is final.',
          '<strong>Find the row in the master table.</strong> It gives the papers, lengths and calculator rule.',
          '<strong>Open the page linked for that code</strong> before buying revision books, so the books match the board.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Worked example one, ours.</strong> A timetable reads "J560/05, 1 h 30 min, Thursday 27 May 2027, morning". J560 is OCR GCSE Mathematics. OCR numbers Higher papers 4 to 6, so Paper 5 means Higher tier. The specification marks Paper 5 "Calculator not permitted". So the week before is Higher content by hand, calculator away, even though AQA and Edexcel students sit a calculator paper that morning.' },
        { kind: 'p', html: '<strong>Worked example two, ours.</strong> A student says she is "doing 9709 with Mechanics and Stats". 9709 is Cambridge A Level Mathematics, which needs Papers 1 and 3 plus Papers 4 and 5 or Papers 5 and 6. Mechanics is Paper 4, and the syllabus says "it is not possible to combine Paper 4 and Paper 6", so she sits Papers 1, 3, 4 and 5: two of 1 hour 50 minutes and two of 1 hour 15 minutes.' },
        { kind: 'p', html: 'A revision guide marked "Edexcel" may be for 1MA1, 4MA1 or 9MA0. Check the code on the cover, not the logo.' }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progression',
    h2: 'The usual route through UK maths qualifications',
    lede: 'The codes change at each rung, and so do the papers.',
    table: { caption: 'Typical progression by age and nation', head: ['Rung', 'Typical age', 'Common codes'], rows: [
      ['1. Lower secondary', '11 to 14', 'No exam code; school schemes, CfE Third and Fourth level, or MYP'],
      ['2. GCSE or equivalent', '14 to 16', '8300, 1MA1, J560, CCEA, WJEC, 0580, 4MA1, C847 75'],
      ['3. Extra Level 2 or 3 maths', '15 to 16', '8365, 6993, 0606, 4PM1, 8382, 1ST0'],
      ['4. A level or equivalent', '16 to 18', '7357, 9MA0, H240, H640, 9709, C847 76, IB DP'],
      ['5. Further maths', '16 to 18', '7367, 9FM0, 9231, C847 77, IB DP at HL']
    ] },
    left: { h3: 'Skipping a rung', ps: [
      'Rung three is optional, and brings calculus and harder algebra forward.',
      'For students who want maths beyond the syllabus, see <a class="ag-inline-link" href="/maths-olympiad-training-uk">maths olympiad training</a>.'
    ] },
    right: { h3: 'Changing board between rungs', ps: [
      'GCSE with one board and A level with another is common. The maths carries over; the paper style takes a few weeks to learn.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses across the codes',
    lede: 'Grouped by the rung they serve.',
    bands: [
      { num: 'I', h3: 'GCSE and International GCSE', sub: 'Ages 14 to 16', courses: [
        { code: 'UK / EB1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'For 8300, 1MA1, J560, CCEA and WJEC at either tier.' },
        { code: 'UK / EB1 / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'For 0580, 0606 and 4MA1, Core or Extended.' },
        { code: 'UK / EB1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For GCSE Statistics 8382 or 1ST0, and the statistics on every paper.' }
      ] },
      { num: 'II', h3: 'A level and IB', sub: 'Ages 16 to 18', courses: [
        { code: 'UK / EB2 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Maths', blurb: 'Pure, mechanics and statistics for any A level code.' },
        { code: 'UK / EB2 / 02', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'Core pure and the applied options for 7367, 9FM0 or 9231.' },
        { code: 'UK / EB2 / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL, with method coaching for the exploration.' }
      ] },
      { num: 'III', h3: 'Before and beyond', sub: 'Foundations and stretch', courses: [
        { code: 'UK / EB3 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Ages 11 to 14, before any code applies.' },
        { code: 'UK / EB3 / 02', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'University admissions maths after the A level rung.' },
        { code: 'UK / EB3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving that no specification asks for.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live classes taught to the code on the entry',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers work from India and every class is timetabled in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for GCSE and Nationals.' },
      { time: 'Evenings', l: 'For sixth formers around study periods.' },
      { time: 'Weekend mornings', l: 'Long enough for a full timed paper.' }
    ],
    cells: [
      { h3: 'Code first', p: 'The first question we ask is the board and code, so every paper set is the right one.' },
      { h3: 'Board papers', p: 'Practice from the student\'s own board, in that board\'s paper order.' },
      { h3: 'Calculator rule', p: 'Each week planned around which papers allow a calculator and which do not.' },
      { h3: 'Switch support', p: 'Students who change board between GCSE and A level get a mapped catch-up.' },
      { h3: 'Free first class', p: 'One live class before any payment, to agree the level.' },
      { h3: 'Two formats', p: 'A group of 15 to 20 on one code and tier, or 1-on-1.' }
    ]
  },

  projectsH2: 'Projects from our classes',
  projectsLede: 'Built by students in ordinary lessons, not for marks. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees for maths classes on any UK board',
    lede: 'The first class costs nothing. After it, families pay one monthly fee, lower for a group seat than for 1-on-1, with no contract and nothing taken until a weekly time is agreed.',
    free: ['A live class on the student\'s own code', 'A short check of the tier and paper format', 'Booked with just a phone number'],
    group: ['15 to 20 students on one code and tier', 'The same teacher through the exam year', 'Board papers set and marked regularly', 'A short monthly note for parents'],
    one: ['A teacher for one student', 'Planned around that student\'s papers and dates', 'Suits private candidates and board changes']
  },

  faq: {
    eyebrow: 'Questions about boards and codes',
    h2: 'What families ask about maths exam boards',
    items: [
      { q: 'What are the main maths exam boards in the UK?', a: 'AQA, Pearson Edexcel and OCR in England, CCEA in Northern Ireland, WJEC in Wales, and Qualifications Scotland, which replaced SQA on 1 February 2026. Many independent and international schools also use Cambridge International, Pearson\'s International GCSEs or the IB.' },
      { q: 'What is the specification code for GCSE maths?', a: 'AQA is 8300, Pearson Edexcel is 1MA1 and OCR is J560, each with three 90-minute papers at Foundation or Higher tier. CCEA uses units M1 to M8, and WJEC has a double award GCSE Mathematics and Numeracy.' },
      { q: 'What are the A level maths specification codes?', a: 'AQA 7357, Pearson Edexcel 9MA0, OCR H240 and OCR MEI H640, plus Cambridge International 9709. Further maths is AQA 7367, Edexcel 9FM0 or Cambridge 9231. CCEA and WJEC run their own unitised A levels.' },
      { q: 'How do I know which exam board my child is on?', a: 'Ask the maths department for the board and code, then confirm it on a mock paper cover or the statement of entry. Codes such as 8300/1H or J560/04 show the qualification and the paper.' },
      { q: 'Is IGCSE maths the same as GCSE maths?', a: 'The maths overlaps heavily, but Cambridge 0580 and Edexcel 4MA1 have two longer papers instead of three, different tier names and their own exam series. Pearson says its International GCSE is not regulated by any UK regulatory body.' },
      { q: 'Does every GCSE maths board have a non-calculator paper?', a: 'Yes, but not on the same morning. AQA and Edexcel make Paper 1 non-calculator; OCR makes Paper 2 or Paper 5 non-calculator. On 14 May 2027 OCR students have a calculator and the others do not.' },
      { q: 'Is OCR MEI the same as OCR A level maths?', a: 'No. OCR offers Mathematics A (H240) and Mathematics B (MEI) (H640). Both have three two-hour papers, but the third H640 paper is worth 75 marks and includes a comprehension passage.' },
      { q: 'Which maths qualifications do Scottish pupils sit?', a: 'Usually National 5 Mathematics (C847 75) or National 5 Applications of Mathematics (C844 75), then Higher Mathematics (C847 76) and Advanced Higher Mathematics (C847 77). Each opens with a non-calculator paper.' },
      { q: 'Can a private candidate choose the board?', a: 'Yes, if the specification accepts private candidates and a centre will enter them. AQA and OCR say private candidates must be based in the UK; Cambridge says private candidates can enter for 0580.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All classes are set in UK time.' },
      { q: 'Are you connected with any exam board?', a: 'No. Modern Age Coders is independent of every board on this page and of the IB. We teach to their published specifications and never promise a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More guides for UK maths families',
    lede: 'Tier choices, paper types, grades and what comes after the table.',
    items: [
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher', p: 'How GCSE tier entry is decided, and what it rules in or out.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Practising for both kinds of GCSE paper.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades', p: 'The 9 to 1 scale and what each grade means.' },
      { href: '/tmua-preparation', label: 'TMUA preparation', p: 'The admissions test that follows the A level rung.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths', p: 'The selective school tests that come before any code.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK hub', p: 'All our UK maths and computing pages.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send the board and code if you know them, or just a number and the year group. A teacher will phone at a UK time you pick and run a class on the right papers.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our method, and each course card above opens its full syllabus.',
    note: 'WhatsApp reaches us fastest and is free from a UK mobile. Replies come from our team in India, on a number that starts +91.',
    formNote: 'No card and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'By stage', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' }
      ] },
      { h4: 'More', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/maths-for-home-educated-children-uk', label: 'Home-educated maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'UK maths on every board, live in UK time'
  },

  personalityCss: `
.ag-root.ag-ukeb .ag-hero h1 { letter-spacing: -0.018em; font-weight: 700; }
.ag-root.ag-ukeb .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ukeb .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ukeb .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-ukeb .ag-table td:nth-child(3) { font-family: 'JetBrains Mono', monospace; font-size: 0.9em; white-space: nowrap; }
.ag-root.ag-ukeb .ag-steps li { margin-bottom: 12px; }
`,

  dossier: {
    curriculumAuthority: 'UK school maths qualifications across England (AQA, Pearson Edexcel, OCR; Ofqual), Northern Ireland (CCEA), Wales (WJEC; Qualifications Wales), Scotland (Qualifications Scotland, formerly SQA) plus Cambridge International, Pearson International GCSE and the IB. Codes and paper structures read from each specification: AQA 8300 (3 x 1 h 30, Paper 1 non-calculator), Edexcel 1MA1 (3 x 1 h 30, 80 marks), OCR J560 (6 papers of 100 marks, Papers 2 and 5 non-calculator), AQA 8382 (2 x 1 h 45), Edexcel 1ST0 (2 x 1 h 30), AQA 8365 (2 x 1 h 45), OCR 6993 (one 2 h paper), CCEA GCSE (two units from M1 to M8, completion test), WJEC GCSE Mathematics and Numeracy C00/4968/0 (three units, first award November 2026), Cambridge 0580 (Core 1 h 30, Extended 2 h, Papers 1 and 2 non-calculator), 0606 (2 x 2 h, Paper 1 non-calculator), Edexcel 4MA1 and 4PM1 (2 x 2 h, calculator), Cambridge 9709 (four of six components) and 9231 (four papers), AQA 7357, Edexcel 9MA0, OCR H240 and H640 (3 x 2 h), CCEA GCE 2210 (four units), WJEC GCE (four units, 2300U1 to 1300U4), AQA 7367 (3 x 2 h), Edexcel 9FM0 (4 x 1 h 30), SQA C847 75, C844 75, C847 76, C847 77 (non-calculator paper 1), IB DP AI (Technology allowed on every paper; SL 1.5 h papers) and MYP (two-hour on-screen examinations). June 2027 first GCSE maths papers all on 14 May 2027.',
    localProject: 'The code is the map. A pillar page for the UK maths exam boards hub: one master table of 29 qualifications with board, code, papers, paper length, calculator rule and first or current exams, each cell re-read in the board\'s own specification; a "same morning, three boards" table showing that on 14 May 2027 AQA and Edexcel students sit a non-calculator paper while OCR students have a calculator; one section per hub group (GCSE, International GCSE and Cambridge, A level and further maths, Scotland, IB) introducing every member page in fresh sentences; a paper-split table for the four English A level codes; a five-step finder and two original decoding examples (J560/05, a 9709 route). Lesson family: decoding codes, distinct from the board-comparison door.',
    requiredMentions: [
      'Same morning, three boards',
      'J560/05, 1 h 30 min, Thursday 27 May 2027, morning',
      'doing 9709 with Mechanics and Stats',
      'Units M1 to M8 (subject code 2210)',
      'Units 2300U1, 2300U2, 1300U3, 1300U4',
      'The same 847 runs through all three mathematics courses',
      'Pure and comprehension',
      'A revision guide marked "Edexcel" may be for 1MA1, 4MA1 or 9MA0.',
      'Live classes taught to the code on the entry'
    ],
    sources: [
      { claim: 'AQA GCSE Mathematics 8300 specification and key dates (papers, length, calculator, June 2027 dates).', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300' },
      { claim: 'Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification and Summer 2027 final timetable.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html' },
      { claim: 'OCR GCSE (9-1) Mathematics J560 specification and June 2027 final timetable.', url: 'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/' },
      { claim: 'CCEA GCSE Mathematics specification (units M1 to M8, timings, completion tests, first award Summer 2019).', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20(2017)/GCSE%20Mathematics%20(2017)-specification-Standard.pdf' },
      { claim: 'WJEC GCSE Mathematics and Numeracy (Double Award) specification (units, timings, calculator rules, first award November 2026).', url: 'https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf' },
      { claim: 'Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027.', url: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf' },
      { claim: 'Cambridge International AS and A Level Mathematics 9709 syllabus for 2026 and 2027.', url: 'https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf' },
      { claim: 'SQA National 5 Mathematics course specification (C847 75).', url: 'https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf' },
      { claim: 'SQA Higher Mathematics course specification (C847 76).', url: 'https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf' },
      { claim: 'SQA Advanced Higher Mathematics course specification (C847 77).', url: 'https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf' },
      { claim: 'IB DP subject brief, Mathematics: applications and interpretation (IB PDF hosted by the University of Tartu).', url: 'https://www-1.ms.ut.ee/too-ja-praktika/files/MHG-IB.pdf' }
    ],
    rejectedClaims: [
      'IB DP Mathematics: analysis and approaches paper lengths and calculator rules: ibo.org returned 403 to automated requests and was not retried; only a partial third-party mirror of the AA guide was available, so the AA row says "See the IB\'s page" rather than guessing.',
      'MYP on-screen examination calculator rules: not stated in the IB brief read; the cell points to the IB.',
      'Entry numbers or market share for each board: not read at a primary source; the page says nothing about which board is most popular.',
      'Grade boundaries for any code: not read at source for this page; none quoted.',
      'Any claim that one board is easier or harder: declined.',
      'JCQ documents (jcq.org.uk returned 403 to earlier writers): not used.',
      'Any promised grade or result: declined.'
    ]
  }
};
