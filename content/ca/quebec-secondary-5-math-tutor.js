'use strict';
// Quebec Secondary V math tutor (ag- curriculum door; Canada cluster Plan 2, row 37).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// English-language page from the English Québec Education Program and Québec.ca's English pages. Sibling of row 36
// (Secondary IV): this page owns Secondary V content, the third-year assignments, Appendix F bridges, the CEGEP program
// conditions and conditional admission; the option descriptions and the Sec 4 exam stay on row 36.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/quebec/ and
// ca/src-pilots/quebec-secondary-5-math-tutor/):
//  - QEP Mathematics, Secondary Cycle Two (qep-math-cycle2.txt): "Concepts introduced in the third year of Cycle Two" per
//    option (quoted in the content table); CST "Analyzing and optimizing a situation and making decisions, using linear
//    programming"; CST Secondary V finance "When assessing financial situations in Secondary V, students use rules such as
//    Cn = Co (1 + i) n to determine compounding" (exponent n, flattened in the text extraction); CST "Optional independent
//    assignment: comprehensive activity for integrating mathematical learning in the third year of Cycle Two"; TS
//    "exploration activity in the third year of Cycle Two", "between 10 and 15 class hours"; Science "detailed
//    investigation activity", "roughly 15 class hours"; Appendix F "at the end of Secondary IV, decide to change to
//    another option for Secondary V"; "Although all option changes are possible, some are more significant than others.";
//    CST to Science: "it is up to the school to determine the content to be emphasized and the organizational
//    arrangements involved"; switching students "must also be willing to devote all the time they need"; the CST to TS and
//    TS to Science bridge content (quoted in the bridge table).
//  - quebec.ca QEP secondary page: "programs of study for students from Secondary I to Secondary V".
//  - quebec.ca schedule of ministerial examinations 2026 to 2027: mathematics papers listed for "Mathematics, Sec. 4" only;
//    no Secondary V mathematics paper appears (grepped: no "Sec. 5" or "5 e secondaire" line with mathematics).
//  - quebec.ca final results: "Students who are six credits or less short of obtaining their SSD could enter college on
//    the condition that they obtain the missing credits during their first term."; 60% rule (paraphrased here, quoted on
//    row 63).
//  - 200.B0 Science (200-B0.txt) and 200.C0 Computer Science and Mathematics (200-C0.txt): special conditions for admission
//    "Secondary V Chemistry", "Secondary V Mathematics: Technical and Scientific option or Science option", "Secondary V
//    Physics"; 200.C0 history "June 2010 Replacement of the conditions "Mathematics 536," "Physics 534" and "Chemistry
//    534"". 420.B0 Computer Science Technology (420-B0.txt): "Secondary IV, Technical and Scientific option OR Secondary IV,
//    Science option OR Secondary V, Cultural, Social and Technical option".
// Our own material, labelled on the page: the ice sculpture linear programming problem and its Python check (run 22 October
// 2026: 54 feasible whole-number plans, 32 points at 6 small and 4 large; corners 0, 24, 32, 30), the term plan, the
// option-by-goal table, the ladder. "Secondary V is often compared to Grade 11" is labelled a common comparison.
// Lesson family: optimizing under constraints (the corner of the polygon).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LP = `# Our linear programming check: winter carnival ice sculptures.
# s small sculptures: 2 h of carving, 1 block of ice, 2 visitor points
# L large sculptures: 3 h of carving, 3 blocks of ice, 5 visitor points
HOURS, BLOCKS = 24, 18

def points(s, L):
    return 2 * s + 5 * L

feasible = [(s, L) for s in range(0, 13) for L in range(0, 7)
            if 2 * s + 3 * L <= HOURS and s + 3 * L <= BLOCKS]
top = max(points(s, L) for s, L in feasible)
print("feasible plans:", len(feasible))
print("most points:", top, "at", [p for p in feasible if points(*p) == top])

for corner in [(0, 0), (12, 0), (6, 4), (0, 6)]:      # vertices of the polygon
    print(corner, points(*corner))`;

const LP_OUT = `feasible plans: 54
most points: 32 at [(6, 4)]
(0, 0) 0
(12, 0) 24
(6, 4) 32
(0, 6) 30`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'QUEBEC SEC 5 MATH', blurb: 'Secondary V math in Quebec, option by option, from the Québec Education Program: the new concepts, the year-end assignment, switching options, and the math conditions CEGEP programs set.' },
  slug: 'quebec-secondary-5-math-tutor',
  code: 'qus',
  accent: '#3C6B1A',
  accentRationale: 'Quebec Secondary 5 math tutor, Canada: a muted spruce-needle green #3C6B1A, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 5.98 on the paper #FBF8F2 (5.63 and 5.15 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Quebec Secondary 5 math tutor',
  title: 'Quebec Secondary 5 Math Tutor: CST, TS, Science Help Online',
  description: 'Online Secondary 5 math tutoring for Quebec: what each option adds in Sec V, the final-year assignment, switching options, and the math CEGEP programs ask for.',
  ogDescription: 'Secondary V is the last year of math before CEGEP. What the Québec Education Program adds in each option, how switching works, and which Secondary V math each college program requires.',
  twitterDescription: 'Quebec Secondary V math, option by option, and the math CEGEP programs ask for.',
  pageName: 'Quebec Secondary 5 Math Tutor',
  webPageDescription: 'A guide for Quebec English-sector students and parents to Secondary V mathematics: third-year content in each option, the independent assignments, Appendix F bridges between options, and the mathematics conditions of CEGEP programs, from the Québec Education Program and Québec.ca, read 22 October 2026.',
  courseDescription: 'Live online tutoring for Quebec Secondary V mathematics in the CST, TS or Science option, taught alongside school, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Quebec Secondary 5 math tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#content', label: 'What Sec 5 adds' },
    { href: '#assignment', label: 'Year-end assignment' },
    { href: '#bridges', label: 'Switching options' },
    { href: '#cegep', label: 'CEGEP conditions' },
    { href: '#example', label: 'Worked example' }
  ],
  eyebrow: 'Quebec &middot; Secondary V &middot; Math tutoring online',
  h1: 'Quebec Secondary 5 math tutor, online',
  lede: 'Secondary V is the last year of secondary school in Quebec, and for many students the math mark that year decides which CEGEP programs are open to them. The Québec Education Program keeps the three options of Secondary IV running into Secondary V, each with a new set of concepts and a substantial independent assignment. This page sets out what Secondary V adds in each option, how a student who changes option at the end of Secondary IV catches up, and which Secondary V math the college programs we checked ask for, all from the program document and Québec.ca as read on 22 October 2026. Then it shows how we tutor the year, with a problem we wrote. Our tutoring runs beside the school\'s math course; Quebec credits are granted by the school system, never by us.',
  secondaryCta: { href: '#cegep', label: 'See the CEGEP conditions' },
  wa: 'Hello Modern Age Coders, my teen in Quebec is in Secondary 5 math and would like a tutor alongside school. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Secondary V math in English, in all three options',
  spec: [
    ['Year', 'Secondary V, the last of secondary'],
    ['Options', 'CST, TS, Science'],
    ['Science 200.B0 asks', 'Sec V math in TS or Science'],
    ['Computer Science Technology asks', 'Sec IV TS or Science, or Sec V CST'],
    ['Taught', 'Live online, in English'],
    ['Credits', 'Earned at school only'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Secondary 5 is the last year of Quebec secondary math, taught in the CST, TS or Science option; CEGEP Science programs ask for Secondary V math in TS or Science. Modern Age Coders tutors it live online in English, in a batch or one to one, with its High School Mathematics course beside the school\'s.',

  picks: {
    eyebrow: 'Tutoring that follows your option',
    h2: 'Three courses for a Secondary V math student',
    lede: 'The first covers the school course in any option. The second suits TS and Science students heading into functions and trigonometry. The third suits CST students, whose Secondary V leans on probability.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'QUS / 01', title: 'High school mathematics', note: 'For the final year of secondary. Paced to whichever option is on your timetable; credits stay with the school.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'QUS / 02', title: 'Precalculus', note: 'Logarithmic, sinusoidal and rational functions, the core of Secondary V in TS and Science.' },
      { course: 'statistics-probability-maths-course', code: 'QUS / 03', title: 'Statistics and probability', note: 'Odds, fairness, expectation and conditional probability, as in Secondary V CST.' }
    ]
  },

  sections: [
    {
      id: 'year', tint: 'tint', eyebrow: 'The final year',
      h2: 'What makes Secondary V math different from Secondary IV',
      lede: 'Québec.ca describes the secondary Québec Education Program as programs of study "from Secondary I to Secondary V", and Secondary V closes it. Three things change in math that year.',
      body: [
        { kind: 'three', cells: [
          { h3: 'New concepts in every option', p: 'The program lists "Concepts introduced in the third year of Cycle Two" for each option. In TS and Science these include logarithmic, sinusoidal and rational functions; in CST, linear programming, probability and graph theory.' },
          { h3: 'A longer independent assignment', p: 'Each option builds in a self-directed project for the third year: an optional integrating activity in CST, an exploration activity of 10 to 15 class hours in TS, and a detailed investigation of about 15 class hours in Science.' },
          { h3: 'No ministerial math paper on the 2027 schedule', p: 'Québec.ca\'s 2026 to 2027 schedule lists ministerial math papers for Secondary IV only. With none for Secondary V, the math evaluations a Secondary V student meets in 2026 to 2027 are the school\'s own.' }
        ] },
        { kind: 'p', mt: true, html: 'A note on comparisons: because Quebec secondary school ends at Secondary V, Secondary V is often compared to Grade 11 elsewhere in Canada. That comparison is ours and approximate; the ministry pages we read set no grade equivalence. To pass the subject and earn its credits, Québec.ca sets a final result of 60 percent or more. We help with the learning behind that result; the credits themselves come only from the school system.' },
        { kind: 'source', html: 'Sources: Québec Education Program, <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf" rel="noopener" target="_blank">Mathematics, Secondary Cycle Two</a>; Québec.ca <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary" rel="noopener" target="_blank">QEP secondary page</a> and <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/-schedule-examination-sessions" rel="noopener" target="_blank">2026 to 2027 exam schedule</a>; all read 22 October 2026. We have no link to the Ministère de l\'Éducation or to any school board.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'What Secondary V adds',
      h2: 'The third-year concepts in each option',
      lede: 'These are the headings the program gives under "Concepts introduced in the third year of Cycle Two", shortened. Read across a row to see how far apart the options are by the end of secondary school.',
      body: [
        { kind: 'table', caption: 'Secondary V, option by option: the third-year concept lists in the program document, shortened (22 October 2026)', head: ['Strand', 'Cultural, Social and Technical', 'Technical and Scientific', 'Science option'], rows: [
          ['Functions and algebra', 'Powers and logarithms; first-degree inequality in two variables; systems of first-degree inequalities, the polygon of constraints and the function to be optimized (linear programming)', 'Exponential and logarithmic, second-degree, square root, sinusoidal, tangent, greatest integer and rational functions; additive parameter; operations on functions; systems of inequalities', 'Absolute value, radicals, exponents and logarithms; absolute value, square root, rational, exponential, logarithmic, sinusoidal, tangent and piecewise functions; operations on functions; systems of second-degree equations with conics'],
          ['Probability and data', 'Subjective probability; fairness; odds; mathematical expectation; conditional probability', 'No new concepts listed for this year (probability came in Secondary IV)', 'No new concepts listed for this year'],
          ['Geometry', 'Cosine law; equivalent figures', 'Equivalent figures; geometric loci and conics; unit circle, radian, arc length; trigonometric identity; vectors; sine and cosine laws; metric relations in circles', 'Standard unit circle; trigonometric identity; vectors; parabola, and circle, ellipse and hyperbola centred at the origin'],
          ['Discrete math', 'Graphs: degree, distance, path and circuit; directed and weighted graphs; Euler and Hamiltonian paths', '', '']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'CST in Secondary V: decisions with data',
          left: [
            'CST\'s third year is built around choosing well: optimizing a situation by linear programming, comparing odds and expected values, and modelling networks with graphs. It also brings in money: the program says that when assessing financial situations in Secondary V, students use compounding and discounting rules of the form Cn = C0(1 + i)^n.',
            'For a CST student, the hardest part is usually not the arithmetic but the setting up: turning a paragraph of constraints into inequalities.'
          ],
          rightH3: 'TS and Science in Secondary V: the function families',
          right: [
            'Both options spend much of the year on families of functions and their parameters, then trigonometry on the unit circle and vectors. Science adds conics in standard positions and systems that mix a conic with another equation.',
            'This is the material college calculus starts from. A student who leaves Secondary V fluent with logarithmic and sinusoidal functions arrives at CEGEP ready for it.'
          ] }
      ]
    },
    {
      id: 'assignment', tint: 'tint', eyebrow: 'The year-end assignment',
      h2: 'The independent assignment in each option',
      lede: 'Each option asks for a self-directed piece of work in the third year of Cycle Two. The program describes them differently, and gives class time for two of them.',
      body: [
        { kind: 'table', caption: 'Third-year independent assignments, from the Québec Education Program (read 22 October 2026)', head: ['Option', 'What the program calls it', 'Class time the program gives'], rows: [
          ['CST', '"Optional independent assignment: comprehensive activity for integrating mathematical learning in the third year of Cycle Two"', 'Not stated in the lines we quote; the program notes students may start at the beginning of the third year'],
          ['TS', 'An "exploration activity in the third year of Cycle Two", on the cultural or work-related implications of mathematics', '"between 10 and 15 class hours"'],
          ['Science', 'A "detailed investigation activity" in which students "delve further into certain mathematical concepts"', '"roughly 15 class hours"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we help with it',
          left: [
            'We help a student choose a topic they can finish, plan the stages week by week, and check the mathematics in their drafts. We do not write the report. The program asks that the student\'s own autonomy and initiative be valued, and a report written by someone else defeats the purpose.',
            'A good topic is narrow. "Mathematics in music" is a theme; "how the frequencies of a piano\'s keys form a geometric sequence" is a project.'
          ],
          rightH3: 'Coding as a tool for the project',
          right: [
            'Several of the program\'s suggested topics involve technology, from instruments to computer-aided drawing. A short program that tests a conjecture on a thousand cases, or plots a family of functions, can make a Secondary V investigation far more convincing.',
            'This is where our two subjects meet. Students who can write a few lines of Python have a laboratory for their math, and we teach both.'
          ] }
      ]
    },
    {
      id: 'bridges', tint: 'deep', eyebrow: 'Changing option',
      h2: 'Switching options between Secondary IV and V: the program\'s bridges',
      lede: 'Appendix F of the program is written for students who move to a different option between the two final years. It says plainly that "Although all option changes are possible, some are more significant than others."',
      body: [
        { kind: 'table', caption: 'What Appendix F asks a switching student to focus on (Québec Education Program, read 22 October 2026)', head: ['Change', 'What the program says to emphasize'], rows: [
          ['CST to Science', 'No set list: "it is up to the school to determine the content to be emphasized and the organizational arrangements involved"'],
          ['CST to TS', 'Radicals and rational exponents; expanding and factoring, including by grouping; first-degree inequalities in two variables; the greatest integer function and its multiplicative parameter; the inverse of an exponential function and exponential equations'],
          ['TS to Science', 'The second-degree polynomial function, additive parameters and solving second-degree equations, including completing the square; the sine and cosine laws'],
          ['TS to CST', 'The sine law or Hero\'s formula, before situations that need them']
        ] },
        { kind: 'p', mt: true, html: 'The program adds two expectations of any switching student: they "should be able to work independently and feel comfortable with the approach and requirements of the new option", and, under the Secondary V teacher\'s supervision, "must also be willing to devote all the time they need" to catch up. Our reading, labelled as ours: a summer of focused work on the bridge list above is the honest minimum for CST to TS, and the school\'s own plan is the starting point for CST to Science.' }
      ]
    },
    {
      id: 'cegep', tint: 'tint', eyebrow: 'Math and CEGEP',
      h2: 'Which Secondary V math do CEGEP programs ask for?',
      lede: 'The program says every option allows entry to a pre-university program. Individual college programs then set special conditions for admission. Here are three, quoted from the ministry\'s own program documents on Québec.ca.',
      body: [
        { kind: 'table', caption: 'Math in the special conditions for admission of three college programs (ministry program documents, read 22 October 2026)', head: ['College program', 'Type', 'Special conditions for admission that involve math'], rows: [
          ['Science (200.B0)', 'Pre-university', '"Secondary V Mathematics: Technical and Scientific option or Science option", with Secondary V Chemistry and Secondary V Physics'],
          ['Computer Science and Mathematics (200.C0)', 'Pre-university', 'The same: Secondary V math in the TS or Science option, with Secondary V Chemistry and Physics'],
          ['Computer Science Technology (420.B0)', 'Technical', '"Secondary IV, Technical and Scientific option OR Secondary IV, Science option OR Secondary V, Cultural, Social and Technical option"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'For the science pre-university programs, a CST student meets a wall: both documents ask for Secondary V math in TS or Science. For the technical computer science program, Secondary IV in TS or Science is enough, and so is Secondary V CST.',
            'The 200.C0 document also records its own history: in June 2010 the old conditions "Mathematics 536," "Physics 534" and "Chemistry 534" were replaced by the Secondary V option names. Families who hear the old course numbers are hearing that earlier system.'
          ],
          rightH3: 'Six credits short',
          right: [
            'Québec.ca allows some flexibility at the edge: "Students who are six credits or less short of obtaining their SSD could enter college on the condition that they obtain the missing credits during their first term." The college sets the terms.',
            'That is a safety net, not a plan. A student who needs Secondary V TS or Science math for a program should aim to pass it in Secondary V.'
          ] },
        { kind: 'source', html: 'Sources: ministry program documents for <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-B0-science.pdf" rel="noopener" target="_blank">Science (200.B0)</a>, <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-C0-computer-science-mathematic.pdf" rel="noopener" target="_blank">Computer Science and Mathematics (200.C0)</a> and <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/Programmes-etudes-techniques/PE01-420B0-Computer-Science.pdf" rel="noopener" target="_blank">Computer Science Technology (420.B0)</a>; Québec.ca <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/final-results" rel="noopener" target="_blank">final results</a>. All read 22 October 2026. Colleges may add their own requirements; check each one.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'A Secondary V CST problem: linear programming at a winter carnival',
      lede: 'Linear programming, "Analyzing and optimizing a situation and making decisions", is a Secondary V CST concept. This problem and its solution are ours, written for this page.',
      body: [
        { kind: 'p', html: '<b>The problem (ours).</b> A winter carnival committee carves two kinds of ice sculpture. A small one takes 2 hours of carving and 1 block of ice; a large one takes 3 hours and 3 blocks. The committee has 24 hours of volunteer carving and 18 blocks. Judges award 2 visitor points for a small sculpture and 5 for a large one. How many of each should the committee carve to earn the most points?' },
        { kind: 'ol', items: [
          '<b>Name the variables.</b> Let s be the number of small sculptures and L the number of large ones, with s at least 0 and L at least 0.',
          '<b>Write the constraints.</b> Carving time: 2s + 3L is at most 24. Ice: s + 3L is at most 18. These two inequalities, with the two non-negativity ones, are the system of first-degree inequalities.',
          '<b>Find the polygon of constraints.</b> Its corners are (0, 0), (12, 0) where the time line meets the s-axis, (0, 6) where the ice line meets the L-axis, and the crossing of the two lines: subtract s + 3L = 18 from 2s + 3L = 24 to get s = 6, then L = 4.',
          '<b>Test the function to be optimized at each corner.</b> Points P = 2s + 5L give 0, 24, 30 and, at (6, 4), 12 + 20 = 32.',
          '<b>Decide, and say why.</b> Carve 6 small and 4 large sculptures, for 32 points. It uses all 24 hours (12 + 12) and all 18 blocks (6 + 12), which is why the answer sits on the corner where both constraints are tight.'
        ] },
        { kind: 'code', label: 'Our check in Python: every whole-number plan', lang: 'python', code: LP },
        { kind: 'code', label: 'Output (run on 22 October 2026)', lang: 'text', code: LP_OUT, note: 'Of 54 possible whole-number plans, only (6, 4) reaches 32 points, and it is a corner of the polygon, as the method predicts. Change the large sculpture to 3 points and the corners (12, 0) and (6, 4) tie at 24: then the committee has a genuine choice, and the written answer should say so.' },
        { kind: 'p', mt: true, html: 'Where students lose marks on problems like this, in our experience: reversing an inequality when writing a constraint, testing only some of the corners, and stating "(6, 4)" without saying in words what it means for the committee. The last one costs most, because the decision is the point of the exercise.' }
      ]
    },
    {
      id: 'tutoring', tint: 'tint', eyebrow: 'How we tutor Secondary V',
      h2: 'A Secondary V math year with a tutor, term by term',
      lede: 'Our plan for a student starting with us in late October 2026, in any option. The school\'s own calendar takes priority over ours.',
      body: [
        { kind: 'ol', items: [
          '<b>First class (late October 2026):</b> a short diagnostic on Secondary IV algebra and functions, because every Secondary V option builds on them. We agree what to fix first.',
          '<b>November and December 2026:</b> close the Secondary IV gaps while keeping up with the new unit in class. Weekly homework is explained, never done for the student.',
          '<b>January to March 2027:</b> the heart of the year\'s new material: function families and trigonometry in TS and Science; linear programming and probability in CST. Choose the independent assignment topic by February.',
          '<b>April 2027:</b> the independent assignment\'s mathematics checked draft by draft; the report stays the student\'s own work.',
          '<b>May and June 2027:</b> timed practice papers in the school\'s format and a review of every unit test of the year. For college-bound students, a first look at what CEGEP calculus or statistics will expect.'
        ] },
        { kind: 'table', mt: true, caption: 'Which option fits which goal, at a glance (our summary of the program and the three program documents above)', head: ['Goal after Secondary V', 'Option that keeps it open', 'Why'], rows: [
          ['A CEGEP science pre-university program', 'TS or Science', 'Both 200.B0 and 200.C0 ask for Secondary V math in TS or Science'],
          ['A technical program in computer science', 'Any of the three, at the right level', '420.B0 accepts Secondary IV TS or Science, or Secondary V CST'],
          ['Social science, arts or humanities programs', 'Any option', 'The program says all options lead to pre-university programs; CST was designed with these fields in mind'],
          ['Not sure yet', 'TS or Science if the student can manage it', 'They keep the most science programs open; check with the school']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Placement',
    h2: 'Our four tutoring stages for the last year of secondary math',
    lede: 'Our stages, used in the free first class to decide where tutoring begins.',
    table: { caption: 'Stages we use when tutoring Secondary V (our own scale)', head: ['Stage', 'Typical signs'], rows: [
      ['1. Secondary IV gaps', 'Factoring, exponents or graphing slow every new topic down'],
      ['2. Keeping pace', 'Follows the Secondary V unit, but only with the worked example open'],
      ['3. Independent', 'Sets up an unfamiliar problem alone and explains the result in words'],
      ['4. College-ready', 'Fluent with the option\'s function families or optimization, and checks every answer']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 in October is common and fixable. It is the most important thing to know before the new units get harder in the winter.',
      'If your teen is aiming at a science pre-university program, ask now which option they are in. It decides more than the mark does.'
    ] },
    right: { h3: 'For students', ps: [
      'For every inequality you write, test one point to see that it points the right way.',
      'Finish every solution with one sentence that answers the question in its own words.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Secondary V and the step to CEGEP',
    lede: 'Live online classes in English, with one regular teacher, in a batch or one to one, timed in Eastern time for Quebec families.',
    bands: [
      { num: 'I', h3: 'Secondary V support', sub: 'Ages 16 and 17', courses: [
        { code: 'QUS / SV / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For gaps that slow down Secondary V.' },
        { code: 'QUS / SV / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions and conjectures tested in code.' },
        { code: 'QUS / SV / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Proof and problem solving for Science students.' }
      ] },
      { num: 'II', h3: 'Getting ready for CEGEP', sub: 'Secondary V and summer', courses: [
        { code: 'QUS / PRE / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'An early start on college calculus.' },
        { code: 'QUS / PRE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming before a computer science program.' },
        { code: 'QUS / PRE / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Probability and statistics with real data.' }
      ] },
      { num: 'III', h3: 'At CEGEP and beyond', sub: 'Ages 17 and up', courses: [
        { code: 'QUS / COL / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year college topics, from derivatives to matrices.' },
        { code: 'QUS / COL / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics and linear algebra for analysis.' },
        { code: 'QUS / COL / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'For students 18 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Secondary V math tutoring that fits a Quebec school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in Eastern time.' },
      { time: 'Weekends', l: 'Morning sessions before unit tests and project deadlines.' },
      { time: '1-on-1', l: 'Built around your option and your school\'s calendar.' }
    ],
    cells: [
      { h3: 'Your option, your units', p: 'CST, TS or Science, at the school\'s pace.' },
      { h3: 'Setting up first', p: 'Every problem starts with variables and constraints in words.' },
      { h3: 'The assignment, guided', p: 'Planned and checked, never written for you.' },
      { h3: 'In English', p: 'From the English version of the program.' },
      { h3: 'One regular tutor', p: 'The same teacher through the year.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty students, or private.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Math students who also code bring that to their projects. Some examples are below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' reviews from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee covers eight live classes a month. There is no contract for the year, so tutoring can stop in June 2027 when Secondary V ends, or continue into the summer before CEGEP.',
    free: ['A free first class', 'A diagnostic on Secondary IV algebra', 'No card details asked'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly billing'],
    one: ['A tutor to yourself', 'Paced to your option and units', 'Built on your own tests']
  },

  faq: {
    eyebrow: 'Questions from Quebec families',
    h2: 'Quebec Secondary 5 math: common questions',
    items: [
      { q: 'What is Secondary 5 math in Quebec?', a: 'It is the final math course of Quebec secondary school. Students stay in the option they took in Secondary IV, unless they switch, and each option brings in its own third-year concepts: linear programming and probability in CST, function families and trigonometry in TS and Science.' },
      { q: 'Is Secondary 5 the same as Grade 11?', a: 'Secondary V is the final year of secondary school in Quebec, so it is often compared to Grade 11 elsewhere in Canada. That is a common comparison, not an official equivalence; schools and universities place students on content, not on the grade number.' },
      { q: 'Which Secondary 5 math do I need for CEGEP Science?', a: 'The ministry\'s Science program document (200.B0) lists Secondary V Mathematics in the Technical and Scientific option or the Science option as a special condition for admission, along with Secondary V Chemistry and Physics.' },
      { q: 'Can I get into a CEGEP computer science program with CST math?', a: 'For the technical program Computer Science Technology (420.B0), yes: its document accepts Secondary V CST, or Secondary IV TS or Science. The pre-university Computer Science and Mathematics program (200.C0) asks for Secondary V math in TS or Science.' },
      { q: 'Is there a ministerial exam in Secondary 5 math?', a: 'The 2026 to 2027 schedule on Québec.ca lists ministerial mathematics papers for Secondary IV only, and none for Secondary V. Secondary V math evaluations that year are the school\'s own. Check the schedule each year, as it can change.' },
      { q: 'Can I switch from CST to TS or Science for Secondary 5?', a: 'The program allows option changes at the end of Secondary IV and lists what to catch up on for most of them. For CST to Science, it leaves the content and arrangements to the school. Expect extra work over the summer.' },
      { q: 'What is the Secondary 5 math project?', a: 'Each option includes an independent assignment in the third year of Cycle Two. The program gives between 10 and 15 class hours to the TS exploration activity and roughly 15 to the Science detailed investigation; in CST it is an optional integrating activity.' },
      { q: 'Do you grant Quebec credits?', a: 'No. We tutor alongside the school course and do not grant Quebec credits. Credits and the Secondary School Diploma come from the school system.' },
      { q: 'When are Secondary 5 math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We book every slot in Quebec\'s own Eastern clock.' },
      { q: 'Will you do my Secondary 5 homework or project?', a: 'No. We explain, check and question, so the work stays yours and you can do it alone in a test. That applies to AI tools too: ChatGPT needs a parent\'s permission for anyone under 18, and an answer it writes teaches nothing.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for a student in the last year before CEGEP.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math tutoring for every province.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The function families of TS and Science.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'For the first CEGEP calculus course.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Contests a Secondary V student can write.' },
      { href: '/blog/how-to-solve-maths-word-problems', label: 'Solving word problems', p: 'Turning constraints into inequalities.' },
      { href: '/blog/how-to-write-a-maths-proof', label: 'Writing a proof', p: 'For the Science option\'s reasoning.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Breaking a problem into steps.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'Studying with AI, honestly', p: 'Using AI tools the honest way.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us three things: the option, the unit the class is on, and any college program the student has in mind. The first class opens with a short diagnostic on Secondary IV algebra; by its end the tutor can place the student on our scale and outline the months to June 2027.',
    readFirst: 'If you would like to see the teaching first, our page on <a class="ag-inline-link" href="/how-we-teach">the way we teach</a> walks through a session, and the <a class="ag-inline-link" href="/courses">list of courses</a> shows each syllabus.',
    note: 'Tutoring happens over live video with teachers based in India, in English, at times set in Eastern time. Families in Montreal, Gatineau or the Eastern Townships all join the same way.',
    formNote: 'There is no charge for the first class and no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] },
      { h4: 'More', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'The answer sits on a corner'
  },

  personalityCss: `
.ag-root.ag-qus .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-qus .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-qus .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-qus .ag-table td { line-height: 1.5; }
.ag-root.ag-qus .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-qus .ag-steps { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Québec Education Program, Mathematics, Secondary Cycle Two (English): third-year concepts per option, linear programming and the Secondary V finance rule in CST, the third-year independent assignments with their class hours, Appendix F bridges between options; Québec.ca QEP secondary page, 2026 to 2027 ministerial exam schedule and final results page; ministry program documents for 200.B0, 200.C0 and 420.B0; all read raw on 22 October 2026.',
    localProject: 'Our winter carnival linear programming problem: 2s + 3L at most 24 hours, s + 3L at most 18 blocks, maximize 2s + 5L; corners (0, 0), (12, 0), (6, 4), (0, 6) give 0, 24, 32, 30, and a Python search of all 54 whole-number plans confirms (6, 4) on 22 October 2026. Plus a term-by-term tutoring plan and an option-by-goal table, labelled ours. Lesson family: optimizing under constraints.',
    requiredMentions: ['Concepts introduced in the third year of Cycle Two', 'between 10 and 15 class hours', 'roughly 15 class hours', 'Although all option changes are possible, some are more significant than others.', 'it is up to the school to determine the content to be emphasized', 'Secondary IV, Technical and Scientific option OR Secondary IV, Science option OR', 'six credits or less short of obtaining their SSD', '"Mathematics 536," "Physics 534" and "Chemistry 534"', 'winter carnival committee carves two kinds of ice sculpture', 'feasible plans: 54'],
    sources: [
      { claim: 'Third-year concepts, independent assignments and Appendix F bridges.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Secondary I to Secondary V.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary' },
      { claim: '2026 to 2027 ministerial exam schedule: math papers at Secondary IV only.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/ministerial-examinations/-schedule-examination-sessions' },
      { claim: 'Six credits or less short: conditional college entry; 60 percent to earn credits.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/final-results' },
      { claim: 'Science 200.B0 special conditions for admission.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-B0-science.pdf' },
      { claim: 'Computer Science and Mathematics 200.C0 special conditions and history.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/programmes-etudes-preuniversitaires/main-program/200-C0-computer-science-mathematic.pdf' },
      { claim: 'Computer Science Technology 420.B0 math admission requirement.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/education/publications-adm/cegeps/services-administratifs/Programmes-etudes-techniques/PE01-420B0-Computer-Science.pdf' }
    ],
    rejectedClaims: [
      'The French-sector abbreviation for the Science option: not printed, per the brief.',
      'An official equivalence between Secondary V and Grade 11: none found; labelled as a common comparison.',
      'That there is never a Secondary V math ministerial exam: only the 2026 to 2027 schedule was read; the page says so and tells families to check each year.',
      'Any promise of a mark, a pass or a CEGEP admission: refused.',
      'Writing a student\'s independent assignment or homework: refused, on the page and in the FAQ.',
      'That we grant Quebec credits: refused; the page says we do not.',
      'Any affiliation with the Ministère de l\'Éducation, a school service centre or a CEGEP: none.'
    ]
  }
};
