'use strict';
// Homeschool computer science high school credit (ag- topic door; US cluster Phase 2, row 34).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/homeschool-computer-science-high-school-credit/):
//  - NYSED Home Instruction (nysed.gov/curriculum-instruction/10010-home-instruction): parents must give written notice
//    of intent; the district provides the regulations and an "individualized home instruction plan (IHIP)" form.
//    NYSED Home Instruction Questions and Answers (nysed.gov/nonpublic-schools/home-instruction-questions-and-answers):
//    "Credit is given only by schools."; recommended that a receiving principal award credit "on the basis of assessment
//    or evidence"; no local or Regents diploma ("A high school diploma may only be awarded only to a student enrolled in
//    a registered secondary school", not quoted on the page because of its wording); letter of intent "within 14 days of
//    beginning home instruction"; "Within 10 business days of receiving the letter" the district sends C.R. 100.10 and
//    an IHIP form; "colleges set their own admissions requirements"; strategies: "A portfolio of the student's work",
//    Regents exam score list on letterhead, SAT and other tests, superintendent attestation (who "may, but is under no
//    obligation to, attest"), the GED.
//  - Pennsylvania Department of Education, Home Education and Private Tutoring Guide, "Revised May 2026" (pa-guide.pdf):
//    Act 196 of 2014 supervisor-issued diploma; affidavit for the twelfth grade year; the same twelfth-grade evaluator
//    co-signs; "standardized form developed by PDE"; graduation minimums in grades nine through twelve: four years of
//    English, three of mathematics, three of science, three of social studies, two of arts and humanities; "Graduation
//    should be based on completion of courses and coverage of state standards rather than on years or credit counts.";
//    course list incl. health one course, physical education two courses, "Electives: Complete a minimum of six
//    courses"; transcripts kept by the parent; acceptance of home education work is at the school's discretion and
//    districts must have written policies (22 Pa. Code 11.41); five example credit policies ("Some schools accept all
//    home education credits." ... "Some schools allow students to test for credit."); a tracking spreadsheet example.
//  - Texas Education Agency, Home Schooling (tea.texas.gov/families-and-students/finding-school-your-child/home-schooling):
//    "The State of Texas does not award a diploma to students that are home schooled."; completion is "equivalent to
//    graduation from a public high school" for Texas higher education admission. TEA To the Administrator Addressed
//    letter, July 11, 2019, Home Schools: 19 TAC 74.26(a)(2); credit by review of curriculum and work or assessments;
//    credit by examination "the standard of 70% for students to receive credit" for courses already taken rather than
//    the 80% standard; TEC 29.916 requires districts to let home school students take the PSAT and AP tests they offer.
//  - College Board: apstudents help pages (homeschooled students and AP Exams; AP courses) and AP Central "Ordering AP
//    Exams for Students Who Don't Attend Your School": AP Course Ledger is "the official, up-to-date, comprehensive list
//    of schools that have passed the AP Course Audit"; contact the AP coordinator; "Parents and students cannot order AP
//    Exams directly."; "you can self-study for most AP Exams"; November 13 ordering deadline.
// Not used: Common App support pages returned script shells with no readable text; ncaa.org and fldoe.org returned 403;
// the Westlaw text of 8 NYCRR 100.10 returned 403.
// Our own material, labelled on the page: the course record template, the sample transcript lines, the 144-hour planning
// assumption for a full-year course (36 weeks x 4 hours, ours, not a legal rule), the hours-log script, the four-year CS
// sequence and the evidence folder checklist.
// Lesson family: documentation and evidence (a course record a stranger can verify).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const HOURS = `import csv
from collections import defaultdict

# cs_hours_log.csv has three columns: date,unit,hours
totals = defaultdict(float)
with open("cs_hours_log.csv", newline="") as f:
    for row in csv.DictReader(f):
        totals[row["unit"]] += float(row["hours"])

for unit, hours in sorted(totals.items()):
    print(f"{unit:<30}{hours:6.1f}")
print(f"{'Total for the course':<30}{sum(totals.values()):6.1f}")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'HOMESCHOOL', blurb: 'How a homeschool computer science course becomes high school credit in New York, Pennsylvania and Texas, plus AP testing and a course record template.' },
  slug: 'homeschool-computer-science-high-school-credit',
  code: 'hcsh',
  accent: '#9E4D21',
  accentRationale: 'Homeschool computer science credit: #9E4D21, a warm ledger-binding rust from the allocation sheet, distinct from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'Homeschool CS high school credit',
  title: 'Homeschool Computer Science High School Credit, State by State',
  description: 'Homeschool computer science high school credit: what New York, Pennsylvania and Texas say about credit, diplomas and transcripts, AP testing, and a course record.',
  ogDescription: 'Who gives the credit for a homeschool computer science course? The answer depends on the state. Three state education departments and the College Board, read raw, plus a course record template.',
  twitterDescription: 'Homeschool CS credit in NY, PA and TX, from the state sources, with a template.',
  pageName: 'Homeschool Computer Science High School Credit',
  webPageDescription: 'A guide for US homeschool families on turning a high school computer science course into credit, built from New York, Pennsylvania and Texas education department pages and College Board AP guidance.',
  courseDescription: 'Live online computer science courses for US homeschooled high school students, with syllabi, hours and assessed projects a parent can record as a course, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Homeschool CS credit',
  navLinks: [
    { href: '#who', label: 'Who gives credit' },
    { href: '#ny', label: 'New York' },
    { href: '#pa', label: 'Pennsylvania' },
    { href: '#tx', label: 'Texas' },
    { href: '#ap', label: 'AP exams' },
    { href: '#record', label: 'Course record' }
  ],
  eyebrow: 'United States &middot; Homeschool &middot; Grades 9 to 12',
  h1: 'Homeschool computer science for high school credit',
  lede: 'Homeschool families often ask the same thing about a computer science course: will it count? The honest answer is that it depends on the state and on who is asked to accept it. This page reads three state education departments that publish clear guidance, New York, Pennsylvania and Texas, and shows how differently they handle credit, diplomas and transcripts. It then covers how homeschoolers take AP exams, and gives the course record our teachers prepare so a parent can document a computer science year that a school or college can check.',
  secondaryCta: { href: '#record', label: 'See the course record' },
  wa: 'Hello Modern Age Coders, we homeschool in the US and want a computer science course our teen can list for high school credit. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; syllabus, hours and assessed projects for each course',
  spec: [
    ['Who', 'Homeschooled high schoolers'],
    ['States read', 'New York, Pennsylvania, Texas'],
    ['Key fact', 'States differ sharply'],
    ['AP route', 'Through a local AP coordinator'],
    ['Records', 'Syllabus, hours, graded work'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Format', 'Live online, batch or 1-on-1'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Homeschool computer science counts for high school credit in very different ways by state. New York says "Credit is given only by schools." Pennsylvania lets a supervising parent issue a diploma under Act 196 of 2014, with electives such as computer science among the required courses. Texas awards no state diploma to homeschoolers. Modern Age Coders teaches the course live online and supplies the syllabus, hours and graded work a family records.',

  picks: {
    eyebrow: 'A course with records behind it',
    h2: 'Three courses a homeschool family can document as a year of CS',
    lede: 'Each has a published syllabus, regular assessed projects and an hours record, which is what a transcript entry needs underneath it.',
    items: [
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'HCSH / 01', title: 'AP Computer Science Principles', note: 'High school. Course plus the route to the AP exam.' },
      { course: 'python-complete-masterclass-teens', code: 'HCSH / 02', title: 'Python for teens', note: 'Ages 13 to 18. A full introductory programming year.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'HCSH / 03', title: 'AP Computer Science A', note: 'High school. Java, objects and the AP exam.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who gives credit',
      h2: 'The first question is who awards the credit, not what the course is',
      lede: 'A homeschool course can be excellent and still be read differently in two states. This summary compares the three state departments we read on 17 October 2026. Other states have their own laws, and nothing here should be stretched beyond these three.',
      body: [
        { kind: 'table', caption: 'Credit, diplomas and records for homeschooled high schoolers in three states (from each state education department, read 17 October 2026)', head: ['Question', 'New York', 'Pennsylvania', 'Texas'], rows: [
          ['Who gives high school credit?', 'Only schools; a receiving principal is advised to award it on assessment or evidence', 'The receiving school decides under its written policy', 'The receiving district decides, by review of work or assessment'],
          ['Can the family issue a diploma?', 'No; local and Regents diplomas need enrollment in a registered secondary school', 'Yes, a supervisor-issued diploma under Act 196 of 2014, on a PDE form', 'The state awards no diploma to homeschoolers'],
          ['Required high school courses', 'Set out in the IHIP under the state regulation', 'Four English, three mathematics, three science, three social studies, two arts and humanities, plus more', 'A course of study that includes good citizenship'],
          ['Who keeps the records?', 'Parents, with quarterly reports and an annual assessment to the district', 'Parents keep transcripts; evaluators review each year', 'Families; the state does not regulate or accredit homeschool programs']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a CS course',
          left: [
            'None of the three state sources we read requires computer science for homeschoolers. In Pennsylvania it fits naturally among the electives; in New York and Texas it becomes credit only when a school accepts it.',
            'So the course record matters more than the course title. A school or college that never met the student needs to see what was taught, for how long, and how it was assessed.'
          ],
          rightH3: 'Why we cover only three states',
          right: [
            'Homeschool law is set state by state. We chose these three because their education departments publish clear, readable guidance, and we did not want to generalise from them.',
            'If you live elsewhere, read your own state department&rsquo;s page first. Florida&rsquo;s department page and the NCAA homeschool page refused our request, so they are not summarised here.'
          ] }
      ]
    },
    {
      id: 'ny', tint: 'deep', eyebrow: 'New York',
      h2: 'New York: home instruction, the IHIP and credit given by schools',
      lede: 'The New York State Education Department explains home instruction in a long questions and answers page. Four of its answers shape a high school computer science course.',
      body: [
        { kind: 'table', caption: 'New York home instruction rules relevant to high school credit (NYSED pages, read 17 October 2026)', head: ['Topic', 'What NYSED says'], rows: [
          ['Starting', 'A letter of intent goes to the district superintendent; families who begin mid-year file it within 14 days of beginning home instruction'],
          ['The plan', 'Within 10 business days of receiving the letter, the district sends the regulation and an individualized home instruction plan (IHIP) form'],
          ['Credit', '"Credit is given only by schools." If the student later enters a school, the principal is advised to award credit on assessment or evidence'],
          ['Diploma', 'Home-instructed students cannot be awarded a local or Regents diploma'],
          ['College', 'NYSED notes that colleges set their own admissions requirements and that admission is the family&rsquo;s responsibility']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The college strategies NYSED lists',
          left: [
            'The Q and A suggests several routes a home-instructed student can combine: a portfolio of work, a letter listing any Regents exams taken, SAT or other test scores, a superintendent&rsquo;s written attestation that the program met the regulation, and the high school equivalency exam.',
            'It is candid that the superintendent "may, but is under no obligation to, attest", and that no strategy guarantees admission.'
          ],
          rightH3: 'Where computer science sits',
          right: [
            'A computer science course in New York lives inside the IHIP as part of the family&rsquo;s plan. If it may later need to count as school credit, keep the evidence a principal would assess: the syllabus, graded projects and test results.',
            'A portfolio is the strategy NYSED names first, and a coding course produces one naturally: programs that run, with the student&rsquo;s explanation of each.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nysed.gov/curriculum-instruction/10010-home-instruction" rel="noopener" target="_blank">NYSED Home Instruction</a> and <a class="ag-inline-link" href="https://www.nysed.gov/nonpublic-schools/home-instruction-questions-and-answers" rel="noopener" target="_blank">Home Instruction Questions and Answers</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'pa', tint: 'tint', eyebrow: 'Pennsylvania',
      h2: 'Pennsylvania: a parent-issued diploma and a course-based graduation',
      lede: 'Pennsylvania&rsquo;s Department of Education publishes a Home Education and Private Tutoring Guide, revised May 2026. It is the most detailed of the three sources on what a homeschool graduation contains.',
      body: [
        { kind: 'table', caption: 'Pennsylvania home education graduation, from the PDE guide (revised May 2026, read 17 October 2026)', head: ['Area', 'Minimum courses in the guide'], numCols: [1], rows: [
          ['English and language arts', '4'],
          ['Mathematics', '3'],
          ['Science', '3'],
          ['Social studies', '3'],
          ['Arts and humanities', '2'],
          ['Health education', '1'],
          ['Physical education', '2'],
          ['Electives', '6']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Courses, not seat time',
          left: [
            'The guide says: "Graduation should be based on completion of courses and coverage of state standards rather than on years or credit counts." Families keep documentation such as course descriptions or portfolios showing each area was covered.',
            'It also suggests a simple tracking spreadsheet: the required courses down one side, the year completed, a comments column for the source of each course, and a column for the evaluator.'
          ],
          rightH3: 'The supervisor-issued diploma',
          right: [
            'Act 196 of 2014 lets a home education supervisor award a state-recognized diploma. The supervisor files an affidavit for the twelfth-grade year, the student completes the graduation requirements, and the same evaluator who reviewed twelfth grade co-signs a diploma on a standardized form developed by PDE.',
            'Approved diploma-granting home education associations are a second route; they keep records and some provide transcripts.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Some schools accept all home education credits.</b>',
          '<b>Some schools do not accept any home education credits.</b>',
          '<b>Some accept credit for classes the school also offers.</b>',
          '<b>Some accept those and assign general credit for classes the district does not offer.</b>',
          '<b>Some schools allow students to test for credit.</b>'
        ] },
        { kind: 'p', mt: true, html: 'Those five examples are the guide&rsquo;s own, for a homeschooled student who later enrolls in a district school. The guide adds that no law governs acceptance of home education work, that it is left to each school, and that districts must have written policies. A computer science elective with strong records is easiest to accept under any of the five. Source: <a class="ag-inline-link" href="https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/home-education-and-private-tutoring/home%20education%20and%20private%20tutoring%20guide.pdf" rel="noopener" target="_blank">PDE Home Education and Private Tutoring Guide</a>, revised May 2026, read 17 October 2026.' }
      ]
    },
    {
      id: 'tx', tint: 'deep', eyebrow: 'Texas',
      h2: 'Texas: no state diploma, local decisions on credit',
      lede: 'The Texas Education Agency keeps a short home schooling page and a 2019 letter to school administrators. Together they explain how a homeschooled teen&rsquo;s courses are treated.',
      body: [
        { kind: 'table', caption: 'Texas home schooling and credit (TEA page and To the Administrator Addressed letter of July 11, 2019, read 17 October 2026)', head: ['Topic', 'What TEA says'], rows: [
          ['Diploma', '"The State of Texas does not award a diploma to students that are home schooled."'],
          ['College in Texas', 'Completing a home school education is treated as equivalent to graduation from a public high school for undergraduate admission to Texas institutions'],
          ['Transfer credit', 'Under 19 TAC 74.26(a)(2), home school transfers get the same treatment as transfers from unaccredited private schools'],
          ['How credit is decided', 'By reviewing the curriculum and the student&rsquo;s work, or by appropriate assessments; whether to test is a local matter'],
          ['Credit by exam', 'For a course already taken, the 70% standard should be used rather than the 80% standard for a course not previously taken'],
          ['PSAT and AP', 'TEC 29.916 requires districts to let home school students take the PSAT and AP tests they offer enrolled students, and to publish the dates']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What it means for computer science',
          left: [
            'A Texas homeschooler who later enrolls in a district may have a computer science course reviewed or tested for credit. The work samples from the course are what a review looks at.',
            'The 70% figure applies to credit by examination in the circumstances the letter describes. It is a district process, not something a family can claim on its own.'
          ],
          rightH3: 'The AP testing right',
          right: [
            'The PSAT and AP provision is unusually strong. A district must publicly post the test dates, say that home school students are eligible, and explain how to register.',
            'For a teen taking AP Computer Science Principles or A at home, that gives a clear way to sit the exam locally.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/families-and-students/finding-school-your-child/home-schooling" rel="noopener" target="_blank">TEA Home Schooling</a> and the <a class="ag-inline-link" href="https://tea.texas.gov/administrator-addressed-taa/taa-letters/taa-home-school-students-7-11-19.pdf" rel="noopener" target="_blank">TEA letter on home schools, July 11, 2019</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'ap', tint: 'tint', eyebrow: 'AP exams',
      h2: 'How homeschoolers take AP Computer Science exams',
      lede: 'An AP score is the one piece of evidence that means the same thing in every state, which is why many homeschool families use it for computer science. The College Board&rsquo;s rules for homeschoolers are short and firm.',
      body: [
        { kind: 'ol', items: [
          '<b>Search the AP Course Ledger.</b> The College Board calls it "the official, up-to-date, comprehensive list of schools that have passed the AP Course Audit", searchable by state and city.',
          '<b>Call the school and ask for the AP coordinator.</b> Schools set their own policies on testing outside students and may have local deadlines.',
          '<b>Do it early in the school year.</b> AP coordinators order exams by the November 13 deadline for full-year courses, so the arrangement should be in place before then.',
          '<b>Remember the ordering rule.</b> "Parents and students cannot order AP Exams directly." The coordinator creates an exam only section and gives the student its join code.',
          '<b>Study at home if you like.</b> The College Board says "you can self-study for most AP Exams", while recommending a course.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Principles or A?',
          left: [
            'AP Computer Science Principles is the broader course and suits a first year of CS. AP Computer Science A is Java programming and suits a student who already codes.',
            'Our <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CS Principles</a> and <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP CS A</a> pages go into each exam.'
          ],
          rightH3: 'Online AP courses',
          right: [
            'The College Board&rsquo;s help page points homeschoolers who want an AP course itself to online providers listed in the AP Course Ledger.',
            'A family can also teach the content at home and sit the exam at a local school. The transcript can then show the course and, separately, the exam score.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apstudents.collegeboard.org/help-center/im-homeschooled-how-can-i-take-ap-exam" rel="noopener" target="_blank">AP Students: homeschooled and AP Exams</a>, <a class="ag-inline-link" href="https://apstudents.collegeboard.org/help-center/im-homeschooled-how-can-i-take-ap-course" rel="noopener" target="_blank">AP Students: homeschooled and AP courses</a>, <a class="ag-inline-link" href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/ordering-fees/ordering-exam-materials/special-ordering-circumstances/home-schooled-student" rel="noopener" target="_blank">AP Central ordering guidance</a>, read 17 October 2026. We are not connected with the College Board.' }
      ]
    },
    {
      id: 'record', tint: 'deep', eyebrow: 'The course record',
      h2: 'A computer science course record a stranger can verify',
      lede: 'Whichever state you are in, the same file answers the questions a school, an evaluator or a college will ask. This template is ours; adapt it to your state&rsquo;s rules.',
      body: [
        { kind: 'table', caption: 'Course record for one year of homeschool computer science (our template)', head: ['Part', 'What it contains', 'Example'], rows: [
          ['Course title', 'A plain name a registrar recognises', 'Introduction to Computer Science (Python)'],
          ['Description', 'Three or four sentences on content and level', 'Variables, loops, functions, lists, files, simple data analysis'],
          ['Units and dates', 'Each unit with its start and end', 'Unit 4, Functions, November 3 to November 21'],
          ['Hours', 'A dated log, totalled by unit', 'See the script below'],
          ['Assessed work', 'Projects and tests with marks and the marking rule', 'Unit 4 project, 86 out of 100, rubric attached'],
          ['External evidence', 'Anything assessed outside the home', 'AP exam score, competition entry, public repository'],
          ['Grade', 'How the final grade was calculated', 'Projects 60 percent, tests 30 percent, participation 10 percent']
        ] },
        { kind: 'code', mt: true, label: 'Totalling the hours log &middot; our script', lang: 'python', code: HOURS, note: 'Standard-library Python: csv.DictReader reads each row as a dictionary keyed by the header. Keep one row per session in the CSV, and the script prints hours per unit and the course total.' },
        { kind: 'p', mt: true, html: 'Our planning assumption, not a legal rule: we plan a full-year high school computer science course at about 144 hours, which is 36 weeks at 4 hours a week (36 x 4), including live lessons, practice and projects. Pennsylvania&rsquo;s guide explicitly bases graduation on courses and standards rather than credit counts, so in that state the hours log supports the course description rather than defining the credit.' }
      ]
    },
    {
      id: 'sequence', tint: 'tint', eyebrow: 'Four years',
      h2: 'A four-year computer science sequence for homeschool high school',
      lede: 'Our suggested order, for a family that wants computer science on the transcript every year. Each year is a separate course with its own record.',
      body: [
        { kind: 'table', caption: 'A homeschool high school CS sequence (our suggestion)', head: ['Grade', 'Course', 'External evidence to aim for'], rows: [
          ['9', 'Introduction to programming in Python', 'A finished project in a public repository'],
          ['10', 'AP Computer Science Principles', 'The AP exam, sat through a local coordinator'],
          ['11', 'AP Computer Science A (Java)', 'The AP exam, and a competition entry'],
          ['12', 'Web development or data structures', 'A deployed app or an entry in the Congressional App Challenge']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'If CS starts late', p: 'Begin with Principles in grade 11; one strong year with an exam beats three thin ones.' },
          { h3: 'If math is ahead', p: 'Move AP Computer Science A to grade 10 and add data structures after it.' },
          { h3: 'If college is not the plan', p: 'Keep the portfolio and the repository; employers can open them too.' }
        ] },
        { kind: 'p', mt: true, html: 'For the wider homeschool picture, see our <a class="ag-inline-link" href="/homeschool-coding-curriculum">homeschool coding curriculum</a> and <a class="ag-inline-link" href="/homeschool-math-curriculum-usa">homeschool math curriculum</a> pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your family is now',
    h2: 'Four stages of a documented CS year',
    lede: 'Where homeschool families usually are when they ask us about credit.',
    table: { caption: 'From coding at home to a course on the transcript (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Hobby', 'The teen codes for fun with no record kept'],
      ['2. Course', 'A syllabus and regular lessons, but no hours or grades yet'],
      ['3. Recorded course', 'Dated hours, assessed projects and a grading rule'],
      ['4. Verified course', 'A record plus outside evidence such as an AP score']
    ] },
    left: { h3: 'For parents', ps: [
      'Moving from stage 2 to stage 3 is mostly a habit: log every session the day it happens.',
      'Check your own state&rsquo;s rules before the year starts, not when the transcript is due.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep every project, including the ones that went wrong. Evaluators like to see progress.',
      'Write a short note on each project: what it does and what you would change.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses homeschool families use for high school CS',
    lede: 'Live online, with a regular teacher, a syllabus and assessed work for the course record, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'First CS course', sub: 'Grades 8 and 9', courses: [
        { code: 'HCSH / START / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full introductory year.' },
        { code: 'HCSH / START / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Web pages that respond.' },
        { code: 'HCSH / START / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'For a younger sibling first.' }
      ] },
      { num: 'II', h3: 'AP years', sub: 'Grades 10 and 11', courses: [
        { code: 'HCSH / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Course and exam preparation.' },
        { code: 'HCSH / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A', blurb: 'Java to exam standard.' },
        { code: 'HCSH / AP / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Algorithms behind the exam.' }
      ] },
      { num: 'III', h3: 'Senior year', sub: 'Grade 12', courses: [
        { code: 'HCSH / SR / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'A deployed capstone app.' },
        { code: 'HCSH / SR / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Modern interfaces.' },
        { code: 'HCSH / SR / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'A public record of the work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live CS lessons inside a homeschool week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Daytime slots that suit a homeschool timetable.' },
      { time: 'Weekends', l: 'For families who keep weekdays for other subjects.' },
      { time: '1-on-1', l: 'Paced to one student and one state&rsquo;s rules.' }
    ],
    cells: [
      { h3: 'Syllabus', p: 'A written outline for the course record.' },
      { h3: 'Attendance log', p: 'Dated sessions you can total.' },
      { h3: 'Graded projects', p: 'Marks with the rubric attached.' },
      { h3: 'AP preparation', p: 'Practice in the exam format.' },
      { h3: 'Parent updates', p: 'Short notes after each unit.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our homeschool and school students built',
  projectsLede: 'Examples of the assessed work that fills a course record. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents&rsquo; Google reviews, copied without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Fees are monthly and in US dollars, so a homeschool family can run a full school year of computer science or a single semester, and adjust between years without a contract.',
    free: ['A free first lesson', 'Bring your state&rsquo;s rules', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Your homeschool timetable', 'Your course record']
  },

  faq: {
    eyebrow: 'Questions from homeschool families',
    h2: 'Homeschool computer science credit: common questions',
    items: [
      { q: 'Can a homeschool computer science course count as high school credit?', a: 'It depends on the state and on who is asked to accept it. New York says credit is given only by schools; Pennsylvania lets a supervisor issue a diploma; Texas leaves transfer credit to the receiving district.' },
      { q: 'Does New York give homeschoolers a diploma?', a: 'No. The NYSED Q and A says home-instructed students cannot be awarded a local or Regents diploma, and lists other ways to show colleges their work, such as a portfolio and test scores.' },
      { q: 'What courses does Pennsylvania require for a homeschool diploma?', a: 'The PDE guide lists four courses of English, three each of mathematics, science and social studies, two of arts and humanities, plus health, physical education and at least six electives.' },
      { q: 'Can computer science be an elective in Pennsylvania?', a: 'The guide asks for a minimum of six elective courses in subjects of interest. A computer science course with a syllabus and assessed work is a natural elective, documented like any other course.' },
      { q: 'Does Texas award homeschoolers a diploma?', a: 'No. TEA says the State of Texas does not award a diploma to students who are home schooled, and that completing a home school education is treated as equivalent to public high school graduation for Texas college admission.' },
      { q: 'How can a homeschooler take the AP Computer Science exam?', a: 'Find a nearby testing school in the AP Course Ledger and contact its AP coordinator early in the school year. The College Board says parents and students cannot order AP Exams directly.' },
      { q: 'Is there a set number of hours for one credit?', a: 'Not in the three state sources we read; Pennsylvania bases graduation on courses and standards rather than credit counts. We plan a full-year course at about 144 hours as our own planning figure.' },
      { q: 'Do all states follow these rules?', a: 'No. Homeschool law is set by each state, and this page covers only New York, Pennsylvania and Texas. Read your own state education department\'s guidance before you plan the year.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do Modern Age Coders provide for the course record?', a: 'A syllabus, a dated attendance log, graded projects with rubrics and unit notes for parents. Awarding the credit stays with the family, evaluator or school, as your state\'s rules decide.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US homeschool families planning high school.',
    items: [
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'Levels from first code upward.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Math alongside the CS years.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'The broader first AP course.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Java to exam level.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'Outside evidence for a CS year.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your state, your teen&rsquo;s grade and what they have coded so far. The teacher suggests the right first course and shows the records you would receive.',
    readFirst: 'To see what happens in a lesson first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and browse each syllabus on the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Lessons are given by video by teachers based in India, which suits homeschool daytime hours in many US time zones. WhatsApp gets the quickest reply.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Homeschool', links: [
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' }
      ] }
    ],
    bottomRight: 'Log it the day you teach it'
  },

  personalityCss: `
.ag-root.ag-hcsh .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-hcsh .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-hcsh .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-hcsh .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hcsh .ag-steps { gap: 0.8rem; }
.ag-root.ag-hcsh .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'NYSED Home Instruction page and Questions and Answers (IHIP; letter of intent within 14 days; district reply within 10 business days; credit given only by schools; no local or Regents diploma; college strategies). PDE Home Education and Private Tutoring Guide, revised May 2026 (Act 196 of 2014 diploma; 4/3/3/3/2 minimums; course-based graduation; six electives; five credit-acceptance examples; written district policies). TEA Home Schooling page and the July 11, 2019 letter (no state diploma; equivalence for Texas college admission; 19 TAC 74.26(a)(2); 70% and 80% standards; TEC 29.916). College Board AP homeschool help and AP Central ordering guidance (AP Course Ledger; coordinator; no direct ordering; November 13; self-study). All read raw on 17 October 2026.',
    localProject: 'Our course record template, our hours-log Python script, our 144-hour planning assumption for a full-year course (36 x 4, ours, not a legal rule), our four-year CS sequence. Lesson family: documentation and evidence.',
    requiredMentions: ['Credit is given only by schools.', 'within 14 days of beginning home instruction', 'Within 10 business days of receiving the letter', 'individualized home instruction plan (IHIP)', 'may, but is under no obligation to, attest', 'Act 196 of 2014', 'rather than on years or credit counts', 'standardized form developed by PDE', 'Some schools allow students to test for credit.', 'The State of Texas does not award a diploma to students that are home schooled.', '19 TAC 74.26(a)(2)', 'TEC 29.916', 'Parents and students cannot order AP Exams directly.', 'November 13', '36 x 4'],
    sources: [
      { claim: 'New York home instruction: notice of intent and IHIP form.', url: 'https://www.nysed.gov/curriculum-instruction/10010-home-instruction' },
      { claim: 'New York Q and A: credit only by schools, no diploma, 14 days, 10 business days, college strategies.', url: 'https://www.nysed.gov/nonpublic-schools/home-instruction-questions-and-answers' },
      { claim: 'Pennsylvania guide (revised May 2026): Act 196 diploma, graduation minimums, course-based graduation, electives, credit acceptance examples.', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/home-education-and-private-tutoring/home%20education%20and%20private%20tutoring%20guide.pdf' },
      { claim: 'Texas: no state diploma; equivalence for Texas college admission.', url: 'https://tea.texas.gov/families-and-students/finding-school-your-child/home-schooling' },
      { claim: 'Texas 2019 letter: 19 TAC 74.26(a)(2), credit by exam standards, TEC 29.916 PSAT and AP access.', url: 'https://tea.texas.gov/administrator-addressed-taa/taa-letters/taa-home-school-students-7-11-19.pdf' },
      { claim: 'College Board: AP Course Ledger, AP coordinator, self-study.', url: 'https://apstudents.collegeboard.org/help-center/im-homeschooled-how-can-i-take-ap-exam' },
      { claim: 'AP Central: parents and students cannot order directly; November 13 deadline.', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/ordering-fees/ordering-exam-materials/special-ordering-circumstances/home-schooled-student' }
    ],
    rejectedClaims: [
      'Any state requiring computer science for homeschoolers: not found in the three sources, so not claimed.',
      'Rules for the other 47 states and DC: not read, so not generalised; the page says states differ.',
      'Common App homeschool supervisor guidance: support pages returned script shells with no readable text, so not used.',
      'NCAA Eligibility Center homeschool rules: ncaa.org returned 403, so not used.',
      'Florida home education rules: fldoe.org returned 403, so not used.',
      'The full text of New York regulation 100.10: the Westlaw copy returned 403; only NYSED&rsquo;s own pages are cited.',
      'A fixed number of hours per credit as a legal rule: not in the sources; our 144 hours is labelled as our planning assumption.',
      'Any promise that a college or school will accept a homeschool CS credit: refused.'
    ]
  }
};
