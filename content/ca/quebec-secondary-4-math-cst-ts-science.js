'use strict';
// Quebec Secondary IV math: CST, TS and Science options (ag- curriculum door; Canada cluster Plan 2, row 36).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// English-language page, built from the English version of the Québec Education Program and Québec.ca's English pages.
// The French-sector label for the Science option is NOT printed (the brief marks it unverified; a schedule line in
// French was found and is reported to the lead instead of used).
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/quebec/ and
// ca/src-pilots/quebec-secondary-4-math-cst-ts-science/):
//  - QEP Mathematics, Secondary Cycle Two, English PDF (PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf, text
//    qep-math-cycle2.txt): "They are the Cultural, Social and Technical option, the Technical and Scientific option and the
//    Science option."; CST "It involves a greater use of statistics and discrete mathematics" and "prepares them for
//    studies in the arts, communications, the humanities and the social sciences"; TS "explore situations that sometimes
//    involve both manual and intellectual work", "identify errors and anomalies in processes or solutions", "technical
//    fields related to nutrition, biology, physics, business administration, the fine arts and graphic arts"; Science
//    "Students learn to develop formal proofs in situations where there is always a need to confirm a truth", "pursue
//    their studies in the hard sciences or to perhaps eventually specialize in research"; "since the option they select at
//    the end of this first year may influence their career choices"; "At the end of the second year of Cycle Two,
//    students may switch from one option to another, but only in certain specific cases."; CST to Science "may require a
//    compensatory measure, to be determined by the school"; Appendix F "at the end of Secondary IV, decide to change to
//    another option for Secondary V" (so the second year of Cycle Two is Secondary IV); the "Concepts introduced in the
//    second year of Cycle Two" lists for each option (quoted in the content table); the three competencies "Solves a
//    situational problem", "Uses mathematical reasoning", "Communicates by using mathematical language".
//  - Québec.ca schedule of ministerial examinations (qc-exam-schedule): "The ministerial examinations are administered
//    every year in January, June and August."; English sector "Mathematics, Sec. 4": 21 January 2027 9:00 a.m. to 12:00
//    p.m. (563-420, 564-420, 565-420); 11 June 2027 9:00 to 12:00 (564-420, 565-420); 18 June 2027 9:00 to 12:00 (563-420);
//    3 August 2027 9:00 to 12:00 (all three); each labelled "(Math. Reasoning)".
//  - Québec.ca About the ministerial examinations (qc-exam-about): "count for 50% of the final mark for the competency or
//    competencies evaluated"; marking of Secondary IV Mathematics "is shared by the Ministère and the educational
//    institutions", multiple-choice part by optical reader, "the constructed-response part is marked by the student's
//    teacher based on a marking guide produced by the Ministère"; devices "smartphone, wireless headphones or earbuds,
//    smartwatch, etc." forbidden; ANN mark; admission to the examination for students enrolled or taught at home after an
//    exemption; the school "cannot refuse the student admission to the examination on the grounds of too many absences or
//    low marks".
//  - Québec.ca Final results in Secondary IV and V (qc-final-results): moderation "adjusting the school marks upward or
//    downward"; "Conversion is always applied as an increase"; moderation never fails a student who passed the
//    examination; retake "you can register to retake the examination".
//  - Québec.ca preparatory documents (qc-exam-prep): guides for parents "present samples from past exams" (linked, never
//    reproduced).
//  - Québec.ca CEGEP admission (qc-cegep-admission): the DVS route lists "the Secondary IV mathematics program".
// Our own material, labelled on the page: the maple syrup system solved three ways and checked in Python (run 22 October
// 2026: 12 one-litre cans and 18 half-litre cans; the general rule gives (-2, 32) for an impossible order), the option
// chooser, the study calendar to 21 January and June 2027, and the ladder. "Secondary IV is often compared to Grade 10"
// is labelled a common comparison, not an official one.
// Lesson family: one system of equations, three ways of reasoning (the options as habits of mind).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SYRUP = `# Our check: 30 cans of maple syrup, some 1 L and some 0.5 L, holding 21 L in all.
# Count in half-litres so every number stays whole: a 1 L can is 2 halves.
CANS, HALVES = 30, 42

for big in range(CANS + 1):          # try every possible number of 1 L cans
    small = CANS - big
    if 2 * big + small == HALVES:
        print("1 L cans:", big, " 0.5 L cans:", small)

# the Science-option generalization: for T cans holding V litres,
# big = 2V - T and small = 2T - 2V
def solve(T, V):
    return 2 * V - T, 2 * T - 2 * V

print(solve(30, 21))
print(solve(30, 14))    # only possible if 2V - T >= 0`;

const SYRUP_OUT = `1 L cans: 12  0.5 L cans: 18
(12, 18)
(-2, 32)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'QUEBEC SEC 4 MATH', blurb: 'The three Secondary IV math options from the Québec Education Program, what each one adds, and the 2027 ministerial exam dates from Québec.ca.' },
  slug: 'quebec-secondary-4-math-cst-ts-science',
  code: 'que',
  accent: '#556B13',
  accentRationale: 'Quebec Secondary 4 math, Canada: a muted fiddlehead olive #556B13, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 5.66 on the paper #FBF8F2 (5.32 and 4.87 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Quebec Secondary 4 math',
  title: 'Quebec Secondary 4 Math: CST, TS or Science, and the 2027 Exam',
  description: 'Quebec Sec 4 math explained from the QEP: the CST, TS and Science options, what each teaches, the January and June 2027 ministerial exams, and how marks work.',
  ogDescription: 'CST, TS or Science? What the Québec Education Program says each Secondary IV math option is for, the concepts each one introduces, and the 2027 ministerial exam dates.',
  twitterDescription: 'Quebec Secondary IV math options and the 2027 ministerial exam, from the QEP and Québec.ca.',
  pageName: 'Quebec Secondary 4 Math: CST, TS and Science',
  webPageDescription: 'A guide for English-sector students and parents in Quebec to Secondary IV mathematics: the three options in the Québec Education Program, the concepts each introduces, and the 2026 to 2027 ministerial examination and marking rules from Québec.ca.',
  courseDescription: 'Live online help with Quebec Secondary IV and V mathematics in any of the three options, taught alongside school, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Quebec Secondary 4 math',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#options', label: 'The three options' },
    { href: '#content', label: 'What Sec 4 adds' },
    { href: '#exam', label: '2027 exam' },
    { href: '#example', label: 'Worked example' },
    { href: '#choosing', label: 'Choosing' }
  ],
  eyebrow: 'Quebec &middot; Secondary IV &middot; Mathematics in three options',
  h1: 'Quebec Secondary 4 math: CST, TS or Science',
  lede: 'Secondary IV is the year Quebec students first sit math in one of three options, and the year the Ministère de l\'Éducation sets a provincial math exam that counts for half of the final mark. Families hear the short forms CST and TS in the school corridor and want to know what they mean for later choices. This guide works from the English version of the Québec Education Program and from Québec.ca\'s pages on ministerial exams, read on 22 October 2026. It covers who each option is for in the program\'s own words, the concepts each one introduces in Secondary IV, the 2027 exam dates, how the final mark is put together, a problem we wrote and solved three ways, and how to choose. We teach alongside the school course and do not grant Quebec credits; those come only from the school system.',
  secondaryCta: { href: '#exam', label: 'See the 2027 exam dates' },
  wa: 'Hello Modern Age Coders, my teen in Quebec is in Secondary 4 math and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; built from the Québec Education Program and Québec.ca, in English',
  spec: [
    ['Options', 'CST, TS, Science'],
    ['Set by', 'Ministère de l\'Éducation'],
    ['January exam', '21 January 2027'],
    ['June exams', '11 June (TS, Science), 18 June (CST)'],
    ['Exam weight', '50% of the competency mark'],
    ['Credits', 'Granted only by the school'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Quebec Secondary 4 math comes in three options set by the Québec Education Program: Cultural, Social and Technical (CST), Technical and Scientific (TS), and Science. A ministerial exam in January or June 2027 counts for half the final mark. Modern Age Coders teaches all three live online, in a batch or one to one, through its High School Mathematics course.',

  picks: {
    eyebrow: 'Study with a teacher',
    h2: 'Three courses for a Secondary IV math student',
    lede: 'The first follows the school course in any option. The second rebuilds algebra, which every option leans on. The third is for students who think most clearly with a computer in front of them.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'QUE / 01', title: 'High school mathematics', note: 'Grades 9 to 12. Taught to your option, CST, TS or Science, alongside the school course. We grant no credits.' },
      { course: 'algebra-foundations-masterclass', code: 'QUE / 02', title: 'Algebra foundations', note: 'For a student whose trouble with functions and systems is really an algebra gap from Secondary III.' },
      { course: 'maths-through-coding', code: 'QUE / 03', title: 'Maths through coding', note: 'Ages 10 to 15. Systems, functions and statistics explored by writing small programs.' }
    ]
  },

  sections: [
    {
      id: 'options', tint: 'tint', eyebrow: 'The three options',
      h2: 'What the Québec Education Program says each option is for',
      lede: 'The program document for Secondary Cycle Two puts it in one line: "They are the Cultural, Social and Technical option, the Technical and Scientific option and the Science option." Each then gets its own description. The middle column quotes them; the last column is our plain reading.',
      body: [
        { kind: 'table', caption: 'The three Secondary Cycle Two math options, quoted from the Québec Education Program (English version, read 22 October 2026)', head: ['Option', 'In the program\'s words', 'Our plain reading'], rows: [
          ['Cultural, Social and Technical (CST)', '"It involves a greater use of statistics and discrete mathematics"; it "prepares them for studies in the arts, communications, the humanities and the social sciences".', 'Math for decisions: data, money, voting, design, planning'],
          ['Technical and Scientific (TS)', 'For students who "explore situations that sometimes involve both manual and intellectual work"; it develops the ability to "identify errors and anomalies in processes or solutions", aiming at "technical fields related to nutrition, biology, physics, business administration, the fine arts and graphic arts".', 'Math for making and fixing things: models, instruments, case studies'],
          ['Science', '"Students learn to develop formal proofs in situations where there is always a need to confirm a truth", with an academic background for those who "pursue their studies in the hard sciences or to perhaps eventually specialize in research".', 'Math for proof and abstraction: heavier algebra, more proofs']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When the choice is made',
          left: [
            'The program places the options in the second and third years of Cycle Two, and its appendix on changing options speaks of students who, "at the end of Secondary IV, decide to change to another option for Secondary V". So the options begin in Secondary IV.',
            'The choice itself comes a year earlier. The program asks students to reflect from the first year of Cycle Two, "since the option they select at the end of this first year may influence their career choices".'
          ],
          rightH3: 'Can a student switch?',
          right: [
            'Sometimes. "At the end of the second year of Cycle Two, students may switch from one option to another, but only in certain specific cases." Moving from CST up to Science "may require a compensatory measure, to be determined by the school".',
            'That last phrase is the practical one: the school decides what extra work a switch needs, so the conversation is with the school, before the end of Secondary IV.'
          ] },
        { kind: 'source', html: 'Source: Québec Education Program, <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf" rel="noopener" target="_blank">Mathematics, Secondary Cycle Two</a> (English version), read 22 October 2026. Modern Age Coders is not connected with the Ministère de l\'Éducation or any school service centre.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'What Secondary IV adds',
      h2: 'The concepts each option introduces in Secondary IV',
      lede: 'Under each option the program lists "Concepts introduced in the second year of Cycle Two", which is Secondary IV. The table quotes those lists, shortened to their headings. All three options share a system of first-degree equations in two variables; after that, they part ways.',
      body: [
        { kind: 'table', caption: 'Concepts introduced in the second year of Cycle Two (Secondary IV), by option, from the Québec Education Program (read 22 October 2026)', head: ['Branch', 'CST', 'TS', 'Science'], rows: [
          ['Algebra and functions', 'Relation, function and inverse; real functions: polynomial of degree less than 3, exponential, periodic, step, piecewise; system of first-degree equations in two variables', 'Radicals (nth root); powers of base 2 and 10; first-degree inequality in two variables; real functions: second-degree polynomial, exponential, greatest integer, periodic, piecewise or step; multiplicative parameter; systems of first-degree equations', 'Algebraic identity of the second degree; second-degree equation and inequality in one or two variables; step and greatest-integer functions; second-degree polynomial function; parameter; system of first-degree equations in two variables; a first-degree equation with a second-degree one'],
          ['Statistics and probability', 'Percentile; mean deviation; two-variable distribution; linear correlation, correlation coefficient, regression line', 'Conditional probability; fairness; odds; mathematical expectation; mean deviation and standard deviation; linear and other correlation', 'Two-variable distribution; linear correlation; correlation coefficient; regression line'],
          ['Geometry', 'Analytic geometry: distance, slope, point of division; parallel and perpendicular lines; sine, cosine, tangent, sine law, Hero\'s formula', 'Distance between two points; point of division; equation and slope of a line; perpendicular bisectors; trigonometric ratios in right triangles', 'Equivalent figures; line and distance between two points; sine, cosine, tangent; sine and cosine laws']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the lists tell a parent',
          left: [
            'CST spends more of Secondary IV on statistics and on reading data, and keeps its functions to degree less than 3. TS adds radicals, base changes and parameters, which are the tools for fitting a model to a real instrument or process.',
            'Science moves fastest in algebra: second-degree equations and inequalities in two variables, identities, and systems that mix a line with a curve. That is the program\'s "more complex algebraic operations" in practice.'
          ],
          rightH3: 'What the lists do not say',
          right: [
            'They do not rank the options. The program presents three courses with different aims, not an easy, middle and hard track, even though families often talk about them that way.',
            'They also do not set a textbook or a calculator. Those are school choices, and the ministerial exam\'s rules on permitted materials are given to students by the school before the sitting.'
          ] },
        { kind: 'source', html: 'Source: Québec Education Program, Mathematics, Secondary Cycle Two, "Program Content" for each option, read 22 October 2026. Headings are shortened; the program document gives each concept\'s full processes.' }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'The 2027 ministerial exam',
      h2: 'Secondary IV math exam dates for 2026 to 2027',
      lede: 'Québec.ca says "The ministerial examinations are administered every year in January, June and August." For Secondary IV mathematics in the English sector, the 2026 to 2027 schedule lists the papers below. Each one is labelled "(Math. Reasoning)", the second of the program\'s three competencies.',
      body: [
        { kind: 'table', caption: 'Mathematics, Sec. 4, English sector, from the Québec.ca schedule of ministerial examinations (read 22 October 2026)', head: ['Date', 'Time', 'Papers'], rows: [
          ['Thursday 21 January 2027', '9:00 a.m. to 12:00 p.m.', 'CST (563-420), TS (564-420) and Science (565-420)'],
          ['Friday 11 June 2027', '9:00 a.m. to 12:00 p.m.', 'TS (564-420) and Science (565-420)'],
          ['Friday 18 June 2027', '9:00 a.m. to 12:00 p.m.', 'CST (563-420)'],
          ['Tuesday 3 August 2027', '9:00 a.m. to 12:00 p.m.', 'CST, TS and Science (the retake session)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How much it counts',
          left: [
            'Québec.ca: "The ministerial examinations in Secondary IV and V count for 50% of the final mark for the competency or competencies evaluated." The other half is the school mark for that competency, after moderation (explained below).',
            'Which sitting a student writes, January or June, depends on how the school organizes the course. Ask the school which session applies; the schedule lists both.'
          ],
          rightH3: 'Who marks it',
          right: [
            'Marking of the Secondary IV Mathematics exam "is shared by the Ministère and the educational institutions". The multiple-choice part is read by optical reader at the ministry, and "the constructed-response part is marked by the student\'s teacher based on a marking guide produced by the Ministère".',
            'So the written solutions are read by the student\'s own teacher against a common guide. Clear, complete reasoning on paper is part of the mark, not decoration.'
          ] },
        { kind: 'p', mt: true, html: '<b>Rules on the day.</b> Students are "strictly forbidden" to have a personal mobile device, which Québec.ca spells out as "smartphone, wireless headphones or earbuds, smartwatch, etc.", or any unauthorized material; a breach is recorded with the mark "ANN", equivalent to 0 percent. A student who took the course, or received equivalent instruction at home after an exemption from school attendance, may sit the exam, and the school "cannot refuse the student admission to the examination on the grounds of too many absences or low marks".' },
        { kind: 'source', html: 'Sources: Québec.ca, <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/-schedule-examination-sessions" rel="noopener" target="_blank">schedule of ministerial examinations</a> and <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/about" rel="noopener" target="_blank">about the ministerial examinations</a>, read 22 October 2026. Dates can change; the school confirms the sitting.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'How the final mark works',
      h2: 'Moderation, conversion and the retake, in plain terms',
      lede: 'Two words on Québec.ca confuse many families: moderation and conversion. Both adjust marks, in different directions and for different reasons.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Moderation', p: 'The school marks of a group are compared with the same group\'s results on the ministerial exam, and adjusted by a statistical procedure. Québec.ca: "Moderation involves adjusting the school marks upward or downward." It also says moderation never fails a student who passed the ministerial exam.' },
          { h3: 'Conversion', p: 'Used only when a ministerial exam proves much harder than usual for a whole cohort. Québec.ca: "Conversion is always applied as an increase." The Minister decides whether to apply it and how.' },
          { h3: 'Retake', p: 'A student who failed, or is unhappy with the mark, "can register to retake the examination", through the school. For Secondary IV math the 2027 retake sitting is Tuesday 3 August 2027.' }
        ] },
        { kind: 'p', mt: true, html: 'Our reading of what this means for preparation, labelled as ours: because school marks are moderated against the exam, a class whose local tests were generous does not keep that advantage, and a class whose tests were hard is not punished. The fair way to prepare is the same either way: practise reasoning problems under exam conditions, in full sentences and complete steps, because that is what the constructed-response part rewards.' },
        { kind: 'source', html: 'Source: Québec.ca, <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/final-results" rel="noopener" target="_blank">final results in Secondary IV and V</a>, read 22 October 2026. Past-exam samples are in the ministry\'s <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/preparatory-documents" rel="noopener" target="_blank">preparatory documents</a>; we link to them and never copy them.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'A worked example',
      h2: 'One problem, three options: a system of equations at a sugar shack',
      lede: 'All three options introduce systems of first-degree equations in two variables in Secondary IV. Here is one problem we wrote, solved the way each option tends to approach it. The problem, the three solutions and the program are ours, not from any ministerial exam.',
      body: [
        { kind: 'p', html: '<b>The problem (ours).</b> A sugar shack fills 30 cans of maple syrup, some of 1 litre and some of 0.5 litre. Together they hold 21 litres. How many cans of each size are there? Let x be the number of 1-litre cans and y the number of half-litre cans: x + y = 30 and x + 0.5y = 21.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The CST way: a table and a graph', p: 'Make a table: with 10 big cans, 20 small hold 10 + 10 = 20 litres; with 12 big cans, 18 small hold 12 + 9 = 21. Plot both lines and they cross at (12, 18). The decision follows from the data: 12 one-litre cans and 18 half-litre cans.' },
          { h3: 'The TS way: comparison', p: 'Isolate x in both: x = 30 - y and x = 21 - 0.5y. Set them equal: 30 - y = 21 - 0.5y, so 9 = 0.5y and y = 18, then x = 12. Then check for anomalies: does 12 + 18 = 30, and 12 + 9 = 21? Yes to both.' },
          { h3: 'The Science way: the general case', p: 'For T cans holding V litres, subtracting the equations gives 0.5y = T - V, so y = 2T - 2V and x = 2V - T. A real order needs both to be zero or more, so T must be at most 2V and 2V at most 2T. With T = 30 and V = 21: x = 12, y = 18.' }
        ] },
        { kind: 'code', mt: true, label: 'Our check in Python', lang: 'python', code: SYRUP },
        { kind: 'code', label: 'Output (run on 22 October 2026)', lang: 'text', code: SYRUP_OUT, note: 'The search finds exactly one answer, 12 and 18, and the general rule agrees. The last line asks for 30 cans holding only 14 litres and returns -2 one-litre cans: impossible, because 30 half-litre cans already hold 15 litres. That is the domain check the Science solution asks for, done by machine.' },
        { kind: 'p', mt: true, html: 'Which way is right? All three. What differs is the habit each option builds: reading a situation from data, modelling and checking a process, or proving a rule for every case. A student who can do the problem all three ways understands systems better than one who knows a single routine, whichever option is on the timetable. If you want to see the same idea from another angle, our blog post on <a class="ag-inline-link" href="/blog/how-to-solve-simultaneous-equations">solving simultaneous equations</a> works through elimination and substitution step by step.' }
      ]
    },
    {
      id: 'choosing', tint: 'deep', eyebrow: 'Choosing an option',
      h2: 'How to choose between CST, TS and Science: five questions',
      lede: 'Our questions for a student finishing Secondary III, in the order we ask them. The school\'s guidance staff make the actual placement, and the program says all three options keep pre-university college programs open.',
      body: [
        { kind: 'ol', items: [
          '<b>What does the student want to study after secondary school, roughly?</b> The program links CST to the arts, communications, the humanities and the social sciences, TS to technical fields, and Science to the hard sciences and research. A rough direction is enough.',
          '<b>Does the student enjoy algebra for its own sake?</b> Science asks for more complex algebraic operations and formal proof. A student who likes a clean general rule usually enjoys it; one who needs a context to care usually prefers CST or TS.',
          '<b>Does the student like making and fixing things?</b> TS is built around case studies and spotting errors in processes, which suits students who learn by building and testing.',
          '<b>What do specific college programs ask?</b> Some CEGEP programs set their own math conditions on top of the general rule. Check the program you have in mind before the end of Secondary IV, while switching is still possible.',
          '<b>What did Secondary III algebra look like?</b> Marks on equations and functions in Secondary III are the honest predictor. A gap there is cheaper to close in the summer than in the middle of Secondary IV.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A common comparison, not an official one',
          left: [
            'Secondary IV is often compared to Grade 10 elsewhere in Canada, because Quebec secondary school ends a year earlier, at Secondary V. That comparison is ours and is approximate; no ministry page we read sets an equivalence.',
            'Families moving in from another province should ask the receiving school how it places the student, and bring the old transcript.'
          ],
          rightH3: 'Secondary IV math and CEGEP',
          right: [
            'Québec.ca\'s CEGEP admission page lists, for one admission route, "the Secondary IV mathematics program" among the subjects to have passed. Secondary IV math, in whichever option, is one of the building blocks of college entry.',
            'Program-specific conditions vary from one college program to the next, and each program\'s document on Québec.ca sets them out.'
          ] }
      ]
    },
    {
      id: 'competencies', tint: 'tint', eyebrow: 'The three competencies',
      h2: 'How the program grades math, and how we teach to it',
      lede: 'Every option is built on the same three competencies: "Solves a situational problem", "Uses mathematical reasoning" and "Communicates by using mathematical language". The ministerial exam papers are labelled with the second.',
      body: [
        { kind: 'table', caption: 'The three competencies (names from the Québec Education Program) and our classroom habits for each (ours)', head: ['Competency', 'What it asks of a student', 'What we do in class'], rows: [
          ['Solves a situational problem', 'Decode a situation, model it, work out a solution, validate it', 'Every problem starts with the student saying, in words, what is known and what is wanted'],
          ['Uses mathematical reasoning', 'Make conjectures and build proofs; apply networks of concepts', 'Students justify each step aloud, and we ask "how do you know?" more than "what is the answer?"'],
          ['Communicates by using mathematical language', 'Interpret and produce mathematical messages', 'Written solutions are marked for clarity as well as correctness, as a teacher marking the exam would']
        ] },
        { kind: 'p', mt: true, html: 'We do not hand out answer keys or write homework. AI tools can produce a solution in seconds, and a student who copies one learns nothing the constructed-response part of the exam can reward. ChatGPT, for anyone under 18, needs a parent\'s permission. What we teach is the reasoning, so that the student can produce the solution alone on 21 January or in June 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages for a Secondary IV math student',
    lede: 'Our placement stages, used in the first class. They apply to all three options.',
    table: { caption: 'From Secondary III gaps to exam-ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Secondary III gaps', 'Loses marks on rearranging equations or reading a graph, whatever the new topic'],
      ['2. Following the course', 'Keeps up with class but freezes on an unfamiliar situational problem'],
      ['3. Reasoning on paper', 'Writes complete, justified solutions without being prompted'],
      ['4. Exam ready', 'Finishes a three-hour reasoning paper in time and checks it']
    ] },
    left: { h3: 'For parents', ps: [
      'A student at stage 1 in late October 2026 has about three months before the 21 January 2027 sitting. That is time for real progress with steady weekly work, and a June sitting gives five more months.',
      'Ask the teacher which session your child writes. It changes the plan by five months.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the sentence before the calculation: "Let x be the number of...". Half the marks for reasoning start there.',
      'After every practice problem, check the answer back in the original situation, not only in your last line.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Quebec secondary students',
    lede: 'Taught live online in English by a regular teacher, in a batch or one to one, at a time set in Eastern time for Quebec families.',
    bands: [
      { num: 'I', h3: 'Building the base', sub: 'Secondary I to III', courses: [
        { code: 'QUE / BASE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'Pre-algebra and geometry before Cycle Two.' },
        { code: 'QUE / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense that saves time on every paper.' },
        { code: 'QUE / BASE / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For the statistics strand in every option.' }
      ] },
      { num: 'II', h3: 'Secondary IV and V', sub: 'Ages 15 to 17', courses: [
        { code: 'QUE / SEC / 01', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions, logarithms and trigonometry, at a pace that suits TS and Science.' },
        { code: 'QUE / SEC / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Proof and problem solving beyond the course.' },
        { code: 'QUE / SEC / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming, for students eyeing a CEGEP science program.' }
      ] },
      { num: 'III', h3: 'Towards CEGEP', sub: 'Secondary V and after', courses: [
        { code: 'QUE / NXT / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'A head start on college calculus.' },
        { code: 'QUE / NXT / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus and linear algebra at college level.' },
        { code: 'QUE / NXT / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Statistics put to work in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Secondary IV math classes, in English, around the Quebec school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Eastern time.' },
      { time: 'Weekends', l: 'Longer morning sessions before the January and June sittings.' },
      { time: '1-on-1', l: 'Planned around your option and your exam session.' }
    ],
    cells: [
      { h3: 'Your option', p: 'CST, TS or Science, as on your timetable.' },
      { h3: 'Reasoning on paper', p: 'Full written solutions, every class.' },
      { h3: 'Timed practice', p: 'Three-hour sittings before the exam session.' },
      { h3: 'No answer keys', p: 'Homework explained, never written for you.' },
      { h3: 'One regular teacher', p: 'The same teacher all year.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'What our students make outside math class',
  projectsLede: 'Plenty of our math students code as well. A few of their projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee for eight live classes a month, paid month to month with no contract for the school year. Stop after the June 2027 sitting, or carry on into Secondary V; there is nothing to cancel.',
    free: ['A free first class', 'A short reasoning problem in your option', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly payments'],
    one: ['A teacher to yourself', 'Paced to your exam session', 'Built on your own tests and homework']
  },

  faq: {
    eyebrow: 'Questions from Quebec families',
    h2: 'Quebec Secondary 4 math: common questions',
    items: [
      { q: 'What do CST, TS and Science mean in Secondary 4 math?', a: 'They are the three options of the Québec Education Program in Secondary Cycle Two: Cultural, Social and Technical (CST), Technical and Scientific (TS), and Science. Each has its own content and aims, and all three begin in Secondary IV.' },
      { q: 'Is CST math easier than TS or Science?', a: 'The program does not rank them. CST uses more statistics and discrete mathematics; TS focuses on case studies and technical models; Science asks for more complex algebraic operations and formal proofs. Which feels easier depends on the student.' },
      { q: 'When is the Secondary 4 math ministerial exam in 2027?', a: 'For the English sector, Québec.ca lists Thursday 21 January 2027 for all three options; Friday 11 June 2027 for TS and Science; Friday 18 June 2027 for CST; and a retake session on Tuesday 3 August 2027. Each sitting runs 9:00 a.m. to 12:00 p.m.' },
      { q: 'How much does the Secondary 4 math exam count?', a: 'Québec.ca says the ministerial examinations in Secondary IV and V count for 50 percent of the final mark for the competency or competencies evaluated. The other half is the moderated school mark.' },
      { q: 'Can my child switch options after Secondary 4?', a: 'The program allows a switch at the end of Secondary IV, but only in certain specific cases, and a move from CST to Science may need a compensatory measure decided by the school. Talk to the school before the end of the year.' },
      { q: 'Do all three options lead to CEGEP?', a: 'The program says all of the options allow students to enrol in a pre-university program. Some individual college programs set their own math conditions, so check the program you have in mind.' },
      { q: 'Can a homeschooled student write the ministerial exam?', a: 'Québec.ca says a student may sit a Secondary IV or V ministerial exam after taking the program or receiving equivalent instruction at home following an exemption from school attendance. Ask your school service centre or school board early about how to register.' },
      { q: 'Do your classes give Quebec credits?', a: 'No. We teach alongside the school course and do not grant Quebec credits. Credits come from the school system, after the final result is calculated.' },
      { q: 'Are your Quebec math classes in English?', a: 'Yes. We teach in English, using the English version of the Québec Education Program, which suits students in the English sector.' },
      { q: 'When are classes for Quebec students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern time.' },
      { q: 'Can I see past Secondary 4 math exams?', a: 'The ministry publishes preparatory documents, and its guides for parents present samples from past exams. We link to those official documents and write our own practice problems; we never copy exam material.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Quebec students and for math across Canada.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our Canadian pages in one place.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help mapped to each province.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions, logs and trigonometry for Science and TS.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'For students looking ahead to CEGEP calculus.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Contests open to Quebec secondary students.' },
      { href: '/blog/how-to-solve-simultaneous-equations', label: 'Simultaneous equations', p: 'More on the systems every option teaches.' },
      { href: '/blog/how-to-write-a-maths-proof', label: 'Writing a proof', p: 'The habit the Science option builds.' },
      { href: '/blog/how-to-solve-maths-word-problems', label: 'Word problems', p: 'Turning a situation into equations.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'AI and studying', p: 'Using AI for help without copying.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the option and the exam session. The first class works through one short reasoning problem in that option, and the teacher tells you which of our four stages the student is at and what to do before January or June 2027.',
    readFirst: 'Want to know how a lesson goes first? See <a class="ag-inline-link" href="/how-we-teach">inside one of our classes</a>, or open the <a class="ag-inline-link" href="/courses">course syllabuses</a>.',
    note: 'Our teachers teach from India over live video, in English, in Eastern time for Quebec. There is no centre in Montreal or Quebec City; everything happens online.',
    formNote: 'The first class costs nothing, and no card is requested.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'One problem, three ways'
  },

  personalityCss: `
.ag-root.ag-que .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-que .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-que .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-que .ag-grid-3 { gap: 1.4rem; }
.ag-root.ag-que .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-que .ag-steps { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Québec Education Program, Mathematics, Secondary Cycle Two (English version): the three options and their descriptions, option choice and switching, Secondary IV concepts per option, the three competencies; Québec.ca schedule of ministerial examinations 2026 to 2027 (English sector, Mathematics Sec. 4: 21 January, 11 June, 18 June and 3 August 2027, papers 563-420, 564-420, 565-420); Québec.ca pages on the ministerial examinations, final results, preparatory documents and CEGEP admission; all read raw on 22 October 2026.',
    localProject: 'Our sugar shack problem: 30 cans of 1 L and 0.5 L holding 21 L, solved the CST way (table and graph), the TS way (comparison and checking) and the Science way (general rule x = 2V - T, y = 2T - 2V with a domain check), confirmed in Python on 22 October 2026 (12 and 18; (-2, 32) for an impossible order). Plus five questions for choosing an option and a competency table, labelled ours. Lesson family: one system, three ways of reasoning.',
    requiredMentions: ['It involves a greater use of statistics and discrete mathematics', 'identify errors and anomalies in processes or solutions', 'Students learn to develop formal proofs in situations where there is always a need to confirm a truth', 'may require a compensatory measure, to be determined by the school', 'Thursday 21 January 2027', '563-420', 'the constructed-response part is marked by the student\'s teacher', 'Conversion is always applied as an increase', 'A sugar shack fills 30 cans of maple syrup', 'cannot refuse the student admission to the examination'],
    sources: [
      { claim: 'The three options, their aims, Secondary IV concepts, switching rules, competencies.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Secondary IV math ministerial exam dates for 2026 to 2027, English sector.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/-schedule-examination-sessions' },
      { claim: 'Secondary IV and V exams count for 50 percent; shared marking; devices; admission to the exam.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/about' },
      { claim: 'Moderation, conversion and retakes.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/final-results' },
      { claim: 'Guides for parents present samples from past exams.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/preparatory-documents' },
      { claim: 'CEGEP admission route listing the Secondary IV mathematics program.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/admission' }
    ],
    rejectedClaims: [
      'The French-sector abbreviation for the Science option: not printed, per the brief; the English names are used throughout.',
      'That one option is easier or harder than another: the program does not rank them; not claimed.',
      'Any reproduction of ministerial exam questions or samples: refused; the page links to the ministry\'s preparatory documents and uses our own problem.',
      'An official equivalence between Secondary IV and Grade 10: none found; labelled as a common comparison.',
      'Any mark, pass or admission promise: refused.',
      'That we grant Quebec credits: refused; the page says we do not.',
      'Any affiliation with the Ministère de l\'Éducation or a school service centre: none, and the page says so.'
    ]
  }
};
