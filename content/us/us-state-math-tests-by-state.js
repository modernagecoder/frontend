'use strict';
// US state math tests by state (ag- pillar/index page for the hub "US state math tests by state" in
// content/exam-cluster-groups.json; UK and US exams cluster, index pages 2026-11-01). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every figure below was re-grepped on 1 November 2026 in the raw
// copies the member pages saved under keyword-research-2026-09/uk-us-gap/src/<member-slug>/ (read raw with curl on 31
// October 2026), and the three fast-moving facts were fetched again live on 1 November 2026 into
// keyword-research-2026-09/uk-us-gap/src/us-state-math-tests-by-state/:
//  - California (caaspp-math-practice/): sb-ela-math page "Students in grades three through eight and grade eleven take the
//    Smarter Balanced Summative Assessments."; fact sheet "Most schools will test between the middle of March and the middle
//    of May."; Scoring and Reporting What's New: Standard Exceeded/Met/Nearly Met/Not Met renamed Advanced/Proficient/
//    Developing/Minimal, "no cut scores or achievement level thresholds were changed"; Appendix A grade 3 Minimal 2190 to
//    2380 ... Advanced 2501 to 2660; portal footer "© 2026 by the California Department of Education . Site designed and
//    maintained by ETS"; accessibility page calculators: grades three through five none, grade six four-function, grades
//    seven and eight scientific.
//  - Smarter Balanced (smarter-balanced-math-practice/): Content Specifications "Summative Assessment of the Common Core State
//    Standards for Mathematics"; Claim #1 roughly 50%. smarterbalanced.org 403, so no member list.
//  - Colorado (colorado-cmas-math-practice/): cmas page "based on the Colorado Academic Standards", "Students in grades 3
//    through 8 take the grade level math assessment for their enrolled grade.", "CMAS tests are developed by Colorado teachers
//    with CDE and Pearson."; important dates "Colorado Measures of Academic Success (CMAS) * April 5 through April 23, 2027"
//    (tentative); performance levels PDF May 2026 "Overall scale scores range from 650 to 850." and five levels Did Not Yet
//    Meet, Partially Met, Approached, Met, Exceeded Expectations; calculator policy grades 3 to 5 none except accommodation,
//    grades 6 to 7 five-function, grade 8 scientific.
//  - Illinois (illinois-iar-math-practice/): IAR Summative Resources "IAR Spring 2027 Testing Window – Online Testing 3/1/27 –
//    4/16/27", paper 3/1/27 to 4/2/27; parent guide "assesses progress of students in grades 3-8 in meeting the Illinois
//    Learning Standards", "IAR scale scores range from 650 to 850 for all tests.", Level 4 Above Proficient to Level 1 Below
//    Proficient; portal "The Illinois Administration Platform, formerly PearsonAccess next"; coordinator manual grades 6 to 7
//    four-function with square root and percentage, grade 8 scientific. isbe.net timed out (not retried).
//  - Massachusetts (mcas-math-prep/): g3-8 test information "aligned to the 2017 Massachusetts Mathematics Curriculum
//    Framework", "All mathematics tests have two sessions.", grades 3 to 6 no calculators, grades 7 to 8 Session 2 only;
//    2027 schedule grades 3 to 8 Mathematics April 26 to May 21 (2027), grade 10 Session 1 May 18, window May 18 to 26,
//    November 2026 window November 10 to 17; ALDs Exceeding, Meeting, Partially Meeting, Not Meeting Expectations; graduation
//    page "In November 2024, Massachusetts voters approved a ballot question that amended the Competency Determination CD
//    requirement in the law."; class of 2027 and beyond math coursework Algebra I and Geometry or Integrated Math I and II.
//  - North Carolina (nc-eog-math-practice/, nc-math-1-eoc-prep/): EOG specs "Grades 3–8 End-of-Grade (EOG) Mathematics
//    Tests", NCSCOS "adopted by the North Carolina State Board of Education in June 2017", calculator inactive and active
//    sections, grades 3 to 5 "any four-function calculator with memory key", "two hours (120 minutes) for most students";
//    State Tests page "The EOG testing window is the last ten (10) days of the school year.", "The EOC assessments are
//    available for Biology, English II, NC Math 1, and NC Math 3.", "at least twenty (20) percent of the student's final
//    grade"; EOC specs "last five days (4x4/semester courses/summer school) or the last ten days (traditional yearlong
//    schedule)". Level names not printed: simbli.eboardsolutions.com blocked (Incapsula).
//  - New Jersey (njsla-math-practice/, njgpa-math-prep/; FAQ and adaptive page re-fetched live 1 November 2026): adaptive
//    page "adaptive assessments aligned with the New Jersey Student Learning Standards (NJSLS)"; flyer "Beginning in 2026,
//    the NJSLA-A in ELA and Mathematics and NJGPA-A will use Computer Adaptive Testing"; overview mathematics "Grades 3-8,
//    Algebra I, Geometry, Algebra II"; FAQ "The NJSLA-A for ELA and Mathematics has five performance levels: Did Not Yet Meet
//    Expectations Partially Met Expectations Approaching Expectations Met Expectations Exceeded Expectations", NJGPA-A "two
//    performance levels: Graduation Ready Not Yet Graduation Ready", calculators grades 3 through 5 not permitted, grade 6
//    four-function, grade 8 Desmos scientific and TI34; Spring 2027 NJSLA-A results June 30, 2027; schedule 2026-27 spring
//    NJSLA-A "April 19, 2027 through May 21, 2027", Fall Block math 9 through 12 "November 30, 2026 through December 16,
//    2026", NJGPA-A spring "March 1, 2027 through March 19, 2027"; NJGPA-A overview "Students in Grade 11", math "aligned to
//    Algebra I and Geometry standards"; SBE resolution August 2026 overall scale 300-650, passing cut 450.
//  - New York (nys-math-test-prep-grades-3-8/, algebra-1-regents-prep/; NY Inspires timeline re-fetched live 1 November
//    2026): educator guide "Next Generation Mathematics Learning Standards", Levels 1 to 4, Level 3 "proficient in standards
//    for their grade", grades 3 to 5 no calculators, grade 6 Session 2 only, grades 7 to 8 scientific, "Graphing calculators
//    are NOT permitted."; final dates "Monday, April 5 - Friday, May 14" (2027), "two consecutive days"; CBT page "In Spring
//    2026, students in Grades 3-8 will be required to participate in CBT."; Regents final dates January 26 to 29 and June 15
//    to 25, 2027; Algebra I guide "permitted three hours", five levels; diploma page "one mathematics Regents Examination or
//    NYSED-Approved Regents Examination Alternative"; NY Inspires "Diploma assessment requirements would sunset in the Fall of
//    2027.", "Students graduating beginning January 2028 and after would not be required to pass Regents exams", "The Board of
//    Regents must approve any changes to the New York State graduation requirements. Until such time, the existing
//    requirements remain in effect for all students."; FAQ "NYSED is not eliminating the Regents Examinations."
//  - Pennsylvania (pssa-math-practice/, keystone-algebra-1-prep/): PSSA page "Every Pennsylvania student in grades 3 through 8
//    is assessed in English Language Arts and Math.", "standards-based, criterion-referenced assessment", "specific criteria
//    for advanced, proficient, basic and below basic levels of performance.", Mathematics May 3 to 7, 2027 and optional May 10
//    to 14, 2027; test design "calculators are not allowed on the grade 3 test"; DFA grades 4 to 8 questions 1 through 4 no
//    calculator; Keystone windows December 7 to 18, 2026, January 4 to 15, May 17 to 28 and July 26 to 30, 2027; parent FAQ
//    "Beginning with the class of 2022–2023, students must demonstrate proficiency on the Algebra I, Literature, and Biology
//    Keystone Exams to graduate or fulfill one of the other pathways"; graduation page "one of five Pathways to Graduation".
//  - Texas (staar-math-tutoring/, staar-algebra-1-eoc-prep/; HB 8 FAQ re-fetched live 1 November 2026): STAAR resources
//    "grades 3–8 and high school"; blueprints "All TEKS ... required to be taught in their entirety"; calendar 2026-27 grades
//    3 to 8 Mathematics and Algebra I Apr 19 to Apr 30 (2027), Algebra I Nov 30 to Dec 11 (2026) and Jun 14 to Jun 25 (2027);
//    performance standards Masters, Meets, Approaches, Did Not Meet Grade Level, "Approaches Grade Level or higher on STAAR
//    have passed the test"; calculator policy "not permitted for students taking the STAAR grades 3–7 mathematics", grade 8
//    and Algebra I "graphing calculation device throughout the entire test"; graduation page five EOCs "Algebra I, English I,
//    English II, Biology and U.S. History"; HB 8 FAQ "was passed in September 2025", changes "beginning in the 2027–28 school
//    year", "replacing the State of Texas Assessments of Academic Readiness (STAAR®) with a new instructionally supportive
//    assessment program", "will continue to report Masters Grade Level, Meets Grade Level, Approaches Grade Level, and Did Not
//    Meet Grade Level"; DRAFT SST Algebra I blueprint "Effective beginning with the Spring 2028 administration".
// Blocked or not covered, not retried: fldoe.org, doe.virginia.gov (403), gadoe.org and tn.gov (no response) in the research
// map; marylandpublicschools.org, louisianabelieves.com, mdek12.org, dese.mo.gov (403), education.ohio.gov (Request
// Rejected); smarterbalanced.org and Washington OSPI (403); cde.ca.gov (WAF loop); isbe.net (timeout). No state outside the
// ten member states is described.
// State dashes written "to". No released item, practice item or past paper from any state reproduced. No totals computed.
// Our own material, labelled: the "same child, three reports" reading (a grade 7 student moving Texas to New Jersey to New
// York), the label-translation table, the four-question checklist, the grade-band map.
// Lesson family: reading your own state's documents, not someone else's.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const L = (href, text) => '<a class="ag-inline-link" href="' + href + '" rel="noopener" target="_blank">' + text + '</a>';
const M = (slug, text) => '<a class="ag-inline-link" href="/' + slug + '">' + text + '</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STATE TESTS', blurb: 'Which math test each state gives: test names, grades, score levels, 2027 windows and who runs them, for ten states, read from each education department.' },
  slug: 'us-state-math-tests-by-state',
  code: 'usst',
  accent: '#3F5E7A',
  accentRationale: 'US state math tests index: a slate blue #3F5E7A, 6.4:1 on paper #FBF8F2 and 5.5:1 on the deepest tint #EDE7DA; neutral and map-like, so it sits apart from the warmer state pages it links to',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  routeLabel: 'US state math tests by state',
  title: 'State Math Tests by State: What Each US State Uses',
  description: 'What math test does each state use? State standardized math tests by state: names, grades, score levels, 2027 windows and who runs them, from state sources.',
  ogDescription: 'STAAR, CAASPP, MCAS, PSSA, NJSLA-A, IAR, CMAS, EOG, the NYS tests and the Regents in one table, read from each state&rsquo;s own education department.',
  twitterDescription: 'State standardized math tests by state, in one table built from each state&rsquo;s own documents.',
  pageName: 'State Math Tests by State',
  webPageDescription: 'A state-by-state index of US standardized math tests for grades 3 to 8 and high school, covering California, the Smarter Balanced design, Colorado, Illinois, Massachusetts, North Carolina, New Jersey, New York, Pennsylvania and Texas, with test names, grades, score levels, 2026 to 2027 testing windows and the agency responsible, each taken from that state&rsquo;s published documents.',
  courseDescription: 'Live online math classes for US students in grades 3 to 12, taught to the standards their state tests measure, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'State math tests by state',
  navLinks: [
    { href: '#by-state', label: 'By state' },
    { href: '#grades-3-8', label: 'Grades 3 to 8' },
    { href: '#high-school', label: 'High school' },
    { href: '#changes', label: 'Changes' },
    { href: '#choose', label: 'Find yours' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ten states &middot; Grades 3 to 8 and high school &middot; Read from state education departments',
  h1: 'State math tests by state: what each US state uses',
  lede: 'There is no national math test for American schoolchildren. Each state picks, names and schedules its own, which is why a parent in Austin talks about STAAR and a parent in Buffalo about the Regents. This index puts the ten states we have researched into one table, every row taken from the state&rsquo;s own documents, then points you to each state&rsquo;s page.',
  secondaryCta: { href: '#by-state', label: 'Jump to the table' },
  wa: 'Hello Modern Age Coders, my child sits our state math test this school year. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on US time zones',
  spec: [
    ['What it is', 'An index of state math tests'],
    ['States covered', 'Ten, plus the Smarter Balanced design'],
    ['Grades', '3 to 8, then high school courses'],
    ['Sources', 'Each state education department'],
    ['Checked', 'October and November 2026'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Each US state chooses its own math test. Texas gives STAAR, California the Smarter Balanced CAASPP, Massachusetts MCAS, Pennsylvania the PSSA, New Jersey the NJSLA-A, Illinois the IAR, Colorado CMAS, North Carolina the EOG and New York its grades 3 to 8 tests, all covering grades 3 to 8, with high school end-of-course exams such as the Regents. Modern Age Coders teaches the math behind them live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Courses for state test years',
    h2: 'Three courses that follow the tested grades',
    lede: 'Grades 3 to 5, grades 6 to 8, then the first high school course most states test at the end of the year.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'USST / 01', title: 'Elementary math, grades 3 to 5', note: 'The calculator-free years.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'USST / 02', title: 'Middle school math, grades 6 to 8', note: 'Where calculator rules start to differ.' },
      { course: 'algebra-foundations-masterclass', code: 'USST / 03', title: 'Algebra foundations for the EOC year', note: 'The course behind most end-of-course tests.' }
    ]
  },

  sections: [
    {
      id: 'by-state', tint: 'tint', eyebrow: 'The master table',
      h2: 'What math test does each state use?',
      lede: 'For grades 3 to 8, each state here gives one yearly math test of its own, with its own name, score scale and spring window. The Smarter Balanced design has a separate row because several states share it.',
      body: [
        { kind: 'table', caption: 'State standardized math tests for grades 3 to 8, 2026 to 2027 school year (each row from the state&rsquo;s own education department or official testing portal, read 31 October and 1 November 2026)', head: ['State', 'Math test', 'Grades', 'How scores are reported', '2027 testing window', 'Who runs it'], rows: [
          ['California', 'CAASPP: Smarter Balanced Summative Assessments', '3 to 8 and 11', 'Four levels: Advanced, Proficient, Developing, Minimal (renamed for 2025 to 2026; grade 3 scale 2190 to 2660)', 'Set by each school; the state says most test between mid-March and mid-May', 'California Department of Education; portal maintained by ETS'],
          ['Smarter Balanced, other member states', 'Smarter Balanced Summative, under each state&rsquo;s own program name', '3 to 8 and 11', 'Level names chosen by each state', 'Set by each member state', 'Written by the consortium, given by each member'],
          ['Colorado', 'CMAS Mathematics', '3 to 8', 'Scale 650 to 850; five levels from Did Not Yet Meet to Exceeded Expectations', 'April 5 to April 23, 2027 (tentative)', 'Colorado Department of Education, developed with Pearson'],
          ['Illinois', 'Illinois Assessment of Readiness (IAR)', '3 to 8', 'Scale 650 to 850; Level 1 Below Proficient to Level 4 Above Proficient', 'Online March 1 to April 16, 2027; paper to April 2', 'Illinois State Board of Education, on the Illinois Administration Platform'],
          ['Massachusetts', 'MCAS Mathematics', '3 to 8 and 10', 'Four levels: Exceeding, Meeting, Partially Meeting, Not Meeting Expectations', 'Grades 3 to 8: April 26 to May 21, 2027', 'Department of Elementary and Secondary Education (DESE)'],
          ['New Jersey', 'NJSLA-A Mathematics (adaptive since 2026)', '3 to 8, plus Algebra I, Geometry and Algebra II', 'Five levels from Did Not Yet Meet to Exceeded Expectations', 'April 19 to May 21, 2027', 'New Jersey Department of Education'],
          ['New York', 'NYS Grades 3 to 8 Mathematics Tests', '3 to 8', 'NYS Levels 1 to 4; Level 3 is proficient for the grade', 'Two consecutive school days chosen by the school, between April 5 and May 14, 2027', 'New York State Education Department (NYSED)'],
          ['North Carolina', 'End-of-Grade (EOG) Mathematics', '3 to 8', 'See NCDPI&rsquo;s achievement level page (we could not open it)', 'The last ten days of the school year', 'NC Department of Public Instruction (NCDPI)'],
          ['Pennsylvania', 'PSSA Mathematics', '3 to 8', 'Advanced, Proficient, Basic, Below Basic', 'May 3 to 7, 2027, with an optional May 10 to 14 week', 'Pennsylvania Department of Education (PDE)'],
          ['Texas', 'STAAR Mathematics', '3 to 8', 'Masters, Meets, Approaches, Did Not Meet Grade Level; Approaches or higher passes', 'April 19 to April 30, 2027', 'Texas Education Agency (TEA); replaced by a new program from 2027 to 2028']
        ] },
        { kind: 'source', html: 'Sources: ' + L('https://www.caaspp-elpac.org/assessments/caaspp/sb-ela-math', 'CAASPP portal') + '; ' + L('https://ed.cde.state.co.us/assessment/generalinfo/importantdates', 'CDE test windows') + '; ' + L('https://il.mypearsonsupport.com', 'Illinois testing portal') + '; ' + L('https://www.doe.mass.edu/mcas/2027schedule.docx', 'DESE 2026 to 2027 schedule') + '; ' + L('https://www.nj.gov/education/assessment/adaptive/faq.shtml', 'NJDOE adaptive FAQ') + '; ' + L('https://www.nysed.gov/state-assessment', 'NYSED Office of State Assessment') + '; ' + L('https://www.dpi.nc.gov', 'NCDPI') + '; ' + L('https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/pennsylvania-system-of-school-assessment-pssa', 'PDE PSSA page') + '; ' + L('https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf', 'TEA 2026 to 2027 calendar') + '. State date ranges are written with &ldquo;to&rdquo; here. Modern Age Coders is independent and has no connection with any state, district, consortium or test contractor.' },
        { kind: 'two', mt: true,
          leftH3: 'States this table leaves out',
          left: [
            'Forty states are missing, and we would rather say so than guess. The education department sites of Florida and Virginia refused our requests, Georgia and Tennessee did not answer, and Maryland, Louisiana, Mississippi, Missouri and Ohio blocked us in October 2026. We describe no test without reading the state&rsquo;s own pages.',
            'If your state is missing, the four questions further down still work with your own department&rsquo;s assessment page.'
          ],
          rightH3: 'Why Smarter Balanced has its own row',
          right: [
            'Smarter Balanced is a design, not a state. Its content specifications describe a summative assessment of the Common Core State Standards for Mathematics, and member states give it under their own names. California is the one member whose portal we could read, so it is the only one named.',
            'The consortium&rsquo;s own site refused our request, so we print no member list.'
          ] }
      ]
    },
    {
      id: 'grades-3-8', tint: 'deep', eyebrow: 'State tests, grades 3 to 8',
      h2: 'Which grades 3 to 8 state math test does my child take?',
      lede: 'The one your public school&rsquo;s state gives, in your child&rsquo;s enrolled grade. Every page below covers one state test in depth: its question types, calculator rules, score report and an original practice set.',
      body: [
        { kind: 'p', html: '<b>California.</b> ' + M('caaspp-math-practice', 'CAASPP math practice') + ' is for California families decoding a score in the 2,000s: the untimed adaptive section, the separate performance task and the state&rsquo;s scale bands.' },
        { kind: 'p', html: '<b>Any Smarter Balanced state.</b> ' + M('smarter-balanced-math-practice', 'Smarter Balanced math practice') + ' reads the shared consortium blueprint rather than one state&rsquo;s manual, so it suits families outside California whose state uses the same design under another name. Its focus is the four claims and the reasoning questions most families never practice.' },
        { kind: 'p', html: '<b>Colorado.</b> ' + M('colorado-cmas-math-practice', 'Colorado CMAS math practice') + ' covers the four subclaims Colorado reports, with particular attention to the written reasoning and modeling tasks. It is the page for a child whose report shows a Met or Approached level and a weak reasoning score.' },
        { kind: 'p', html: '<b>Illinois.</b> ' + M('illinois-iar-math-practice', 'Illinois IAR math practice') + ' deals with the strictly timed 60-minute units and the state&rsquo;s scoring expectations for a written answer, where a bare correct number does not earn the top point.' },
        { kind: 'p', html: '<b>Massachusetts.</b> ' + M('mcas-math-prep', 'MCAS math prep') + ' spans grades 3 to 8 and the grade 10 test, and is built around the constructed-response question and the two-session structure in which the calculator arrives only in grade 7.' },
        { kind: 'p', html: '<b>North Carolina.</b> ' + M('nc-eog-math-practice', 'NC EOG math practice') + ' is about the calculator-inactive part of the End-of-Grade test, so it leans on mental arithmetic and fraction sense, and it explains the end-of-year window.' },
        { kind: 'p', html: '<b>New Jersey.</b> ' + M('njsla-math-practice', 'NJSLA math practice') + ' explains what changed when New Jersey&rsquo;s test became adaptive in 2026: why the first answers matter more, and why going back later is limited to the same session.' },
        { kind: 'p', html: '<b>New York.</b> ' + M('nys-math-test-prep-grades-3-8', 'NYS math test prep for grades 3 to 8') + ' concentrates on partial credit in the two- and three-credit questions of Session 2, and on the two-day testing pattern New York schools follow.' },
        { kind: 'p', html: '<b>Pennsylvania.</b> ' + M('pssa-math-practice', 'PSSA math practice') + ' scores sample open-ended answers against the state&rsquo;s four-point guideline, which is the clearest way to see what separates a 2 from a 4.' },
        { kind: 'p', html: '<b>Texas.</b> ' + M('staar-math-tutoring', 'STAAR math tutoring') + ' reads the six grade-level blueprints, the no-calculator rule up to grade 7, and the switch to the Student Success Tool from 2027 to 2028.' },
        { kind: 'table', mt: true, caption: 'Calculator rules on grades 3 to 8 state math tests, by state (each from the state&rsquo;s calculator policy, test manual or test design document, read 31 October 2026)', head: ['State', 'Grades 3 to 5', 'Grade 6', 'Grades 7 and 8'], rows: [
          ['California (CAASPP)', 'No embedded calculator', 'Four-function', 'Scientific'],
          ['Colorado (CMAS)', 'None, unless an approved accommodation', 'Five-function, with square root and percentage', 'Grade 7 five-function; grade 8 scientific'],
          ['Illinois (IAR)', 'Accommodation only', 'Four-function with square root and percentage, calculator parts only', 'Grade 7 the same; grade 8 scientific'],
          ['Massachusetts (MCAS)', 'None in either session', 'None in either session', 'Session 2 only'],
          ['New Jersey (NJSLA-A)', 'Not permitted', 'Four-function, embedded', 'Grade 8 Desmos scientific and TI34'],
          ['New York', 'Not permitted', 'Session 2 only: four-function with square root, or scientific', 'Scientific; graphing not permitted'],
          ['North Carolina (EOG)', 'Four-function with memory key, in the calculator-active section', 'Calculator-active section only', 'Calculator-active section only'],
          ['Pennsylvania (PSSA)', 'Grade 3 none; grades 4 and 5 none on questions 1 to 4', 'None on questions 1 to 4', 'None on questions 1 to 4'],
          ['Texas (STAAR)', 'Not permitted', 'Not permitted', 'Grade 7 not permitted; grade 8 graphing calculator required']
        ] },
        { kind: 'p', mt: true, html: 'So a grade 7 student in Texas works by hand while one in California has a scientific calculator on screen.' }
      ]
    },
    {
      id: 'high-school', tint: 'tint', eyebrow: 'High school end-of-course and graduation tests',
      h2: 'Which high school math tests do states require?',
      lede: 'After grade 8, most states we cover test by course instead of by grade: an Algebra I test comes at the end of Algebra I, whenever that is. Some count toward graduation, others toward a course grade.',
      body: [
        { kind: 'table', caption: 'High school state math tests in the states we cover, 2026 to 2027 (from TEA, PDE, NCDPI, NJDOE, NYSED and DESE documents, read 31 October and 1 November 2026)', head: ['State', 'Test', 'Who sits it', 'What it counts for', '2026 to 2027 windows'], rows: [
          ['Texas', 'STAAR Algebra I end-of-course', 'Students finishing Algebra I', 'One of five end-of-course tests for graduation (with English I, English II, Biology, U.S. History)', 'Nov 30 to Dec 11, 2026; Apr 19 to 30 and Jun 14 to 25, 2027'],
          ['Pennsylvania', 'Keystone Algebra I', 'Students finishing Algebra I', 'Proficiency on Algebra I, Literature and Biology Keystones, or another of the five Pathways to Graduation', 'Dec 7 to 18, 2026; Jan 4 to 15, May 17 to 28 and Jul 26 to 30, 2027'],
          ['North Carolina', 'NC Math 1 and NC Math 3 end-of-course', 'Students enrolled for credit in those courses', 'At least 20 percent of the final course grade', 'Last five days of a semester course or last ten of a yearlong one'],
          ['New Jersey', 'NJGPA-A Mathematics', 'Grade 11; Algebra I and Geometry standards', 'Graduation Ready at a scale score of 450, on a 300 to 650 scale', 'Spring March 1 to 19, 2027'],
          ['New Jersey', 'NJSLA-A Algebra I, Geometry, Algebra II', 'Students in those courses', 'Federal accountability; five performance levels', 'Fall Block Nov 30 to Dec 16, 2026; spring Apr 19 to May 21, 2027'],
          ['New York', 'Regents Examinations in Algebra I, Geometry and Algebra II', 'Students completing those courses', 'One math Regents (or an approved alternative) for a Regents or local diploma, under current rules', 'Jan 26 to 29 and Jun 15 to 25, 2027'],
          ['Massachusetts', 'Grade 10 MCAS Mathematics', 'Grade 10', 'Accountability; the graduation rule for the class of 2027 on is coursework (see below)', 'Nov 10 to 17, 2026; May 18 to 26, 2027']
        ] },
        { kind: 'source', html: 'Sources: ' + L('https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements', 'TEA graduation requirements') + '; ' + L('https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/keystone-exams', 'PDE Keystone Exams') + '; ' + L('https://www.dpi.nc.gov', 'NCDPI State Tests') + '; ' + L('https://www.nj.gov/education/assessment/resources/district/statewide_schedule_2627.shtml', 'NJDOE testing schedule 2026 to 2027') + '; ' + L('https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements', 'NYSED diploma requirements') + '; ' + L('https://www.doe.mass.edu/ccte/graduation/default.html', 'DESE graduation guidance') + '.' },
        { kind: 'p', mt: true, html: '<b>One page for every state.</b> ' + M('algebra-1-eoc-prep', 'Algebra 1 EOC prep') + ' is the starting point when a family knows only that an &ldquo;Algebra 1 end-of-course test&rdquo; is coming. It compares the Algebra I tests of four states side by side and teaches the linear-against-exponential reasoning that every one of them asks for.' },
        { kind: 'p', html: '<b>Texas.</b> ' + M('staar-algebra-1-eoc-prep', 'STAAR Algebra I EOC prep') + ' is for a Texas student who must pass this test to graduate. It covers the five reporting categories, the three windows a year for retakes, and the draft blueprint for the replacement test from spring 2028.' },
        { kind: 'p', html: '<b>Pennsylvania.</b> ' + M('keystone-algebra-1-prep', 'Keystone Algebra I prep') + ' works through the two modules anchor by anchor, using Pennsylvania&rsquo;s Eligible Content list, and explains which winter or spring wave suits a given course schedule.' },
        { kind: 'p', html: '<b>North Carolina.</b> ' + M('nc-math-1-eoc-prep', 'NC Math 1 EOC prep') + ' takes both of the state&rsquo;s math end-of-course tests, NC Math 1 and NC Math 3, and links them through one technique, completing the square.' },
        { kind: 'p', html: '<b>New Jersey.</b> ' + M('njgpa-math-prep', 'NJGPA math prep') + ' is for grade 11 students facing the graduation test, and lays out the three routes New Jersey offers if a student is Not Yet Graduation Ready on the first try.' },
        { kind: 'p', html: '<b>New York.</b> Three pages share the Regents, each with a different emphasis. ' + M('algebra-1-regents-prep', 'Algebra I Regents prep') + ' is about the long Part IV modeling question and the reference sheet. ' + M('geometry-regents-prep', 'Geometry Regents prep') + ' is about proof, compass-and-straightedge construction and the rule on pi. ' + M('algebra-2-regents-prep', 'Algebra II Regents prep') + ' covers the newest of the three exams, first given in June 2026, and its functions and regression work.' },
        { kind: 'two', mt: true,
          leftH3: 'Graduation test or course test?',
          left: [
            'Texas, Pennsylvania and New Jersey tie a math test to the diploma, each with alternatives, and New York does for now through the Regents. North Carolina folds the result into the course grade, at no less than a fifth of it.',
            'Massachusetts changed its rule after a November 2024 ballot question. For the class of 2027 and later, the math part of the Competency Determination is coursework: a year each of Algebra I and Geometry, or of Integrated Math I and II.'
          ],
          rightH3: 'Middle schoolers who take high school math',
          right: [
            'An advanced grade 8 student may sit the course test instead of the grade test. North Carolina does not give such students the grade 8 math EOG, and New York lets schools exempt students who will sit a math Regents in June.'
          ] }
      ]
    },
    {
      id: 'changes', tint: 'deep', eyebrow: 'What is changing',
      h2: 'Which state math tests are changing in 2026 to 2028?',
      lede: 'Three of the ten states are mid-change, and a fourth has renamed its score levels.',
      body: [
        { kind: 'table', caption: 'Recent and planned changes to state math tests (each from the state&rsquo;s own announcement; Texas, New York and New Jersey re-read live on 1 November 2026)', head: ['State', 'What changes', 'When', 'Status in the state&rsquo;s words'], rows: [
          ['Texas', 'STAAR replaced by the Student Success Tool (SST): adaptive beginning- and middle-of-year tests, then a fixed end-of-year test', 'From the 2027 to 2028 school year; spring 2027 is still STAAR', 'House Bill 8 &ldquo;was passed in September 2025&rdquo;; TEA says the same four levels will still be reported'],
          ['New York', 'Passing Regents exams would stop being a diploma requirement', 'Requirements would sunset in fall 2027; graduates from January 2028', 'A proposal: &ldquo;The Board of Regents must approve any changes&rdquo;; until then current rules apply, and &ldquo;NYSED is not eliminating the Regents Examinations.&rdquo;'],
          ['New Jersey', 'NJSLA and NJGPA became computer adaptive (NJSLA-A, NJGPA-A)', 'Spring 2026 onward', 'In place; new cut scores adopted in 2026'],
          ['California', 'Score level names changed (Standard Met became Proficient, and so on)', '2025 to 2026 reporting', 'Labels only: &ldquo;no cut scores or achievement level thresholds were changed&rdquo;']
        ] },
        { kind: 'source', html: 'Sources: ' + L('https://tea.texas.gov/data-reports/staar/hb-8-faq-update.pdf', 'Updated HB 8 FAQ') + ', TEA; ' + L('https://www.nysed.gov/ny-inspires/transformation-timeline', 'NY Inspires transformation timeline') + ', NYSED; ' + L('https://www.nj.gov/education/assessment/adaptive/', 'NJSLA-A, NJGPA-A and NJSLA-S page') + ', NJDOE; ' + L('https://ca-toms-help.ets.org/caaspp-otam/prep-and-planning/general-test-admin-info/', 'CAASPP manuals') + '. All read 1 November 2026 except the California manual (31 October).' }
      ]
    },
    {
      id: 'standards', tint: 'tint', eyebrow: 'Standards behind the tests',
      h2: 'What standards are state math tests based on?',
      lede: 'Each test measures its own state&rsquo;s standards. Many grew from the Common Core and were later renamed or revised, so the math looks alike even where the names differ.',
      body: [
        { kind: 'table', caption: 'The standards each test measures, as each state names them (from the test documents cited above)', head: ['State', 'Standards named in the test documents'], rows: [
          ['California and other Smarter Balanced members', 'Common Core State Standards for Mathematics (the consortium&rsquo;s content specifications)'],
          ['Colorado', 'Colorado Academic Standards'],
          ['Illinois', 'Illinois Learning Standards'],
          ['Massachusetts', '2017 Massachusetts Mathematics Curriculum Framework'],
          ['New Jersey', 'New Jersey Student Learning Standards (NJSLS)'],
          ['New York', 'Next Generation Mathematics Learning Standards'],
          ['North Carolina', 'NC Standard Course of Study for Mathematics, adopted June 2017'],
          ['Pennsylvania', 'Pennsylvania&rsquo;s academic standards (the PSSA is &ldquo;standards-based, criterion-referenced&rdquo;)'],
          ['Texas', 'Texas Essential Knowledge and Skills (TEKS)']
        ] },
        { kind: 'p', mt: true, html: 'Two pages explain the standards themselves rather than a test. ' + M('common-core-math-tutor', 'Common Core math tutoring') + ' helps with homework built on Common Core-style standards: number lines, area models, &ldquo;explain your thinking&rdquo;. ' + M('common-core-math-vs-traditional-math', 'Common Core math vs traditional math') + ' sets the two approaches out with criteria, for parents who learned arithmetic one way and see their child taught another. Colorado&rsquo;s department says it plainly: teaching the standards through the year is the way to prepare.' }
      ]
    },
    {
      id: 'scores', tint: 'deep', eyebrow: 'Reading a score',
      h2: 'Can you compare state math scores between states?',
      lede: 'Not number to number: each state sets its own scale and cut points. Compare the level instead, in the state&rsquo;s own words.',
      body: [
        { kind: 'table', caption: 'What the &ldquo;on grade level&rdquo; level is called in each state (state wording; the reading across states is ours)', head: ['State', 'Score scale', 'Level that means on track for the grade', 'Levels in total'], rows: [
          ['California', 'Four-digit scale by grade (grade 3: 2190 to 2660)', 'Proficient (Level 3)', 'Four'],
          ['Colorado', '650 to 850', 'Met Expectations', 'Five'],
          ['Illinois', '650 to 850', 'Level 3: Proficient', 'Four'],
          ['Massachusetts', 'See DESE&rsquo;s reports', 'Meeting Expectations', 'Four'],
          ['New Jersey', 'Four-digit scale by grade', 'Met Expectations (Level 4)', 'Five'],
          ['New York', 'See NYSED&rsquo;s conversion charts', 'NYS Level 3', 'Four'],
          ['Pennsylvania', 'See PDE&rsquo;s reports', 'Proficient', 'Four'],
          ['Texas', 'Four-digit scale by grade', 'Meets Grade Level', 'Four']
        ] },
        { kind: 'p', mt: true, html: '<b>A worked example (ours, not a real student).</b> A grade 7 student moves from Texas to New Jersey, then to New York a year later. The Texas report said Approaches Grade Level, which TEA counts as a pass. In New Jersey the same child lands in Approaching Expectations, Level 3 of five, one below Met. In New York a Level 2 would mean partially proficient. Three reports, three vocabularies, one honest summary: close to grade level, with a few topics to fix. Read the reporting categories on each report, not the raw number, to find them.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Find your test',
      h2: 'How do I find out which math test my child takes?',
      lede: 'Four questions settle it, answered by your state&rsquo;s assessment page or the last score report.',
      body: [
        { kind: 'ol', items: [
          '<b>Which state, and which kind of school?</b> State tests are written for public schools; Texas, for instance, requires them in public and open-enrollment charter schools. Private and home schooling follow other rules.',
          '<b>Grade test or course test?</b> Grades 3 to 8 sit the grade test; once in Algebra I or Geometry, use the high school table.',
          '<b>What is it called this year?</b> Match the name on the last report to the table; New Jersey added &ldquo;-A&rdquo; in 2026.',
          '<b>When is the window?</b> The state sets it and your school picks the days. Then open that state&rsquo;s page above.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By grade band',
    h2: 'Where the tests fall from grade 3 to grade 12',
    lede: 'Our summary of the tables above, by grade band.',
    table: { caption: 'State math tests by grade band in the ten states covered (ours, from the state documents above)', head: ['Grade band', 'What is tested', 'What usually changes between states'], rows: [
      ['3 to 5', 'A yearly grade test in every state covered', 'Mostly no calculator; question types and timing differ'],
      ['6 to 8', 'A yearly grade test, or a high school course test for advanced students', 'Calculator rules, from none in Texas to scientific in California'],
      ['9 to 12', 'Course tests (Algebra I and others) or a grade test (grade 10 or 11)', 'Whether the result affects graduation or the course grade']
    ] },
    left: { h3: 'For parents', ps: [
      'Keep last year&rsquo;s report; its category breakdown matters more than the headline level.'
    ] },
    right: { h3: 'For students', ps: [
      'Learn your grade&rsquo;s calculator rule, and practice without one if your state says none.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for state test years, grade by grade',
    lede: 'The same courses serve every state; the teacher adjusts to your state&rsquo;s standards and rules.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'USST / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Place value to fractions, with reasons written out.' },
        { code: 'USST / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Quick, sure arithmetic for no-calculator grades.' },
        { code: 'USST / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'For children not yet in grade 3.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'USST / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, integers, equations, geometry and data.' },
        { code: 'USST / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems for students ahead of the grade.' },
        { code: 'USST / M / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For grade 8 students sitting a high school course test.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'USST / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra I through Algebra II and beyond.' },
        { code: 'USST / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Accepted in some states as an alternative pathway.' },
        { code: 'USST / H / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions and data modeled in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes set to your state&rsquo;s time zone',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Eastern, Central, Mountain or Pacific Time.' },
      { time: 'Weekends', l: 'Longer sessions in the weeks before a spring window.' },
      { time: '1-on-1', l: 'Built from the categories on your child&rsquo;s report.' }
    ],
    cells: [
      { h3: 'State-aware', p: 'Your state&rsquo;s standards and tool rules.' },
      { h3: 'Report-led', p: 'Weak categories chosen first.' },
      { h3: 'Written reasons', p: 'Explanations practiced every week.' },
      { h3: 'Practice sites late', p: 'Official practice in the last weeks.' },
      { h3: 'Moving states', p: 'Help when standards change mid-year.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a class, or private.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some older students turn their math into small programs. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, as written.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars, with no contract; many families join in the months before their state&rsquo;s window and decide afterwards whether to continue.',
    free: ['A free first class', 'Bring your child&rsquo;s last state score report', 'No card needed'],
    group: ['A class of fifteen to twenty', 'The same teacher all term', 'Choose your batch', 'Monthly billing'],
    one: ['Private lessons', 'Planned around your state&rsquo;s test', 'Times you choose']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'State math tests: common questions',
    items: [
      { q: 'What math test does each state use?', a: 'Each state picks its own: among those we cover, Texas uses STAAR, California CAASPP (Smarter Balanced), Massachusetts MCAS, Pennsylvania the PSSA, New Jersey the NJSLA-A, Illinois the IAR, Colorado CMAS, North Carolina the EOG and New York its own grades 3 to 8 tests.' },
      { q: 'Is there a national standardized math test for every state?', a: 'No. Each state runs its own yearly math test for grades 3 to 8. Some share a design, such as Smarter Balanced, but still set their own name, calendar and labels.' },
      { q: 'Which grades take state math tests?', a: 'In every state on this page, grades 3 to 8 take a yearly math test. In high school, most switch to course tests such as Algebra I, while California tests grade 11, Massachusetts grade 10 and New Jersey grade 11.' },
      { q: 'When are state math tests in 2027?', a: 'Most fall between March and May 2027. For example, Illinois runs online testing March 1 to April 16, Texas April 19 to April 30, and Pennsylvania May 3 to 7, while North Carolina tests in the last ten days of the school year.' },
      { q: 'Is STAAR being replaced in Texas?', a: 'Yes. Under House Bill 8, passed in September 2025, TEA says STAAR will be replaced from the 2027 to 2028 school year by the Student Success Tool, with tests at the start, middle and end of the year. Spring 2027 is still a STAAR window.' },
      { q: 'Are the New York Regents exams ending?', a: 'No. NYSED says it is not eliminating the Regents Examinations. It has proposed that passing them stop being a diploma requirement from fall 2027, but the Board of Regents must approve that, and until then the current rules apply.' },
      { q: 'Can I compare my child\'s math score with another state\'s?', a: 'Not directly, since each state sets its own scale and cut scores. Compare the level, such as Proficient, in each state\'s own words.' },
      { q: 'What if my state is not on this page?', a: 'Open your state education department\'s assessment page and find the test name, grades, window and practice site. We left out states whose sites blocked our research rather than describe them second-hand.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in your US time zone.' },
      { q: 'Are you connected with any state or test company?', a: 'No. Modern Age Coders is an independent online school with no tie to any state education department, district, the Smarter Balanced consortium or any test contractor. We quote and link the states\' public documents.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other tests and next steps',
    lede: 'Pages for the tests that sit beside, or after, the state test.',
    items: [
      { href: '/middle-school-math-placement-test-prep', label: 'Middle school math placement tests', p: 'When a district decides who takes algebra early.' },
      { href: '/psat-math-prep', label: 'PSAT math prep', p: 'The test many juniors meet after the state ones.' },
      { href: '/shsat-math-prep', label: 'SHSAT math prep', p: 'New York City&rsquo;s specialized high school entrance test.' },
      { href: '/cogat-test-prep', label: 'CogAT: reasoning and readiness', p: 'Gifted screening, which measures something different.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'For students the state test no longer stretches.' }

    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your state and your child&rsquo;s grade, and share the last score report if you have it. The teacher uses its categories to plan the first lesson.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every <a class="ag-inline-link" href="/courses">course</a>.',
    note: 'Our teachers work from India on hours matched to US time zones, after school or at weekends. WhatsApp reaches us fastest.',
    formNote: 'The first class is free, and we do not ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' }
      ] },
      { h4: 'State pages', links: [
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-california', label: 'California' },
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'One country, many tests'
  },

  personalityCss: `
.ag-root.ag-usst .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-usst .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-usst .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-usst .ag-table td { line-height: 1.45; font-size: 0.95em; }
.ag-root.ag-usst .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Each covered state\'s own education department or official testing portal, re-grepped 1 November 2026 in the raw copies saved by the member pages (read 31 October 2026): CAASPP portal and manuals (California, CDE, ETS-maintained); Smarter Balanced public library; CDE Colorado (ed.cde.state.co.us); Illinois testing portal for ISBE; DESE Massachusetts; NCDPI; NJDOE; NYSED and nysedregents.org; PDE Pennsylvania; TEA Texas. TEA HB 8 FAQ, NYSED NY Inspires timeline and NJDOE adaptive pages re-fetched live 1 November 2026.',
    localProject: 'Our worked reading of one grade 7 student\'s three reports after moving Texas to New Jersey to New York (Approaches Grade Level, Approaching Expectations Level 3 of five, NYS Level 2), the on-track label table, the four-question checklist for finding your test, the calculator comparison reading and the grade-band map. Lesson family: reading your own state\'s documents.',
    requiredMentions: [
      'Set by each school; the state says most test between mid-March and mid-May',
      'Online March 1 to April 16, 2027; paper to April 2',
      'Two consecutive school days chosen by the school, between April 5 and May 14, 2027',
      'Grade 3 none; grades 4 and 5 none on questions 1 to 4',
      'Graduation Ready at a scale score of 450, on a 300 to 650 scale',
      'Requirements would sunset in fall 2027; graduates from January 2028',
      'Labels only: &ldquo;no cut scores or achievement level thresholds were changed&rdquo;',
      'Scale 650 to 850; five levels from Did Not Yet Meet to Exceeded Expectations',
      'Proficiency on Algebra I, Literature and Biology Keystones, or another of the five Pathways to Graduation',
      'Three reports, three vocabularies'
    ],
    sources: [
      { claim: 'TEA 2026 to 2027 Student Assessment Testing Calendar: STAAR grades 3 to 8 math and Algebra I windows.', url: 'https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf' },
      { claim: 'TEA Updated HB 8 FAQ: STAAR replaced from 2027 to 2028.', url: 'https://tea.texas.gov/data-reports/staar/hb-8-faq-update.pdf' },
      { claim: 'NYSED NY Inspires transformation timeline: proposed sunset of Regents diploma requirements.', url: 'https://www.nysed.gov/ny-inspires/transformation-timeline' },
      { claim: 'NJDOE NJSLA-A and NJGPA-A FAQ: performance levels, calculators, adaptive design.', url: 'https://www.nj.gov/education/assessment/adaptive/faq.shtml' },
      { claim: 'NJDOE Statewide Assessment Testing Schedule 2026-27.', url: 'https://www.nj.gov/education/assessment/resources/district/statewide_schedule_2627.shtml' },
      { claim: 'DESE 2026 to 2027 Initial Statewide Testing Schedule (MCAS).', url: 'https://www.doe.mass.edu/mcas/2027schedule.docx' },
      { claim: 'PDE PSSA page: grades, performance levels, 2027 windows.', url: 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/pennsylvania-system-of-school-assessment-pssa' },
      { claim: 'CDE Colorado test windows and reporting timeline.', url: 'https://ed.cde.state.co.us/assessment/generalinfo/importantdates' },
      { claim: 'CAASPP portal, Smarter Balanced assessments for ELA and math (California).', url: 'https://www.caaspp-elpac.org/assessments/caaspp/sb-ela-math' }
    ],
    rejectedClaims: [
      'Any state outside the ten covered: fldoe.org and doe.virginia.gov 403, gadoe.org and tn.gov no response (research map); Maryland, Louisiana, Mississippi, Missouri 403 and Ohio Request Rejected (algebra-1-eoc-prep research). Not retried; not described.',
      'A list of Smarter Balanced member states (Washington, Oregon and others): smarterbalanced.org and Washington OSPI returned 403; only California named.',
      'North Carolina achievement level names and cut scores: the level document host (simbli.eboardsolutions.com) was blocked and the NCDPI link returned Page not Found; cell says to see NCDPI.',
      'MCAS, NYS and PSSA scale ranges: not printed (not verified in the raw copies used here, or, for the PSSA, the cut score PDF is undated).',
      'Individual June 2027 Regents exam days: the schedule needs layout extraction; only the NYSED period dates are printed.',
      'Comparisons of difficulty or rigor between states: no primary source; refused.',
      'Score, level or graduation promises: refused. Affiliation with any state, consortium or contractor: none.'
    ]
  }
};
