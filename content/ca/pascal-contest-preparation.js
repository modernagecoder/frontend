'use strict';
// Pascal Contest preparation (ag- contest door; Canada cluster Plan 2, row 44). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the PASCAL CONTEST (Grade 9) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/pascal-contest-preparation/):
//  - cemc.uwaterloo.ca/contests/pcf (pcf.html / pcf.txt): "North and South America: Tuesday, February 23, 2027 and
//    Wednesday, February 24, 2027"; deadline for schools "in Canada" Tuesday, February 9, 2027 (an en dash in the source
//    is not reproduced); "Students in Grade 9 are eligible to write the Pascal Contest."; "Motivated students in lower
//    grades are welcome to write one of the contests."; "Participants can only write one of the Pascal, Cayley and
//    Fermat Contests in a given school year."; "Contest Supervisors are expected to administer the contest within the
//    two-day contest period."; "25 multiple-choice questions."; "3 parts: Parts A and B follow a traditional
//    multiple-choice format where the answer is A, B, C, D or E; in Part C, participants select a whole number from 0 to
//    99."; "Time allowed for completion is 60 minutes."; "Score out of 150."; "Written at school, participants write
//    individually on paper or online."; "Some calculators permitted."; "based on curriculum common to all Canadian
//    provinces. Rather than testing content, most of the problems test logical thinking and mathematical
//    problem-solving."; "The PCF Online Practice Contest will be available in January."; fee per participant six
//    dollars plus a processing fee per order (in words only); "Results will be available in our Contest Supervisor
//    Portal six to eight weeks after the contest date."; "Our contests are not tests or exams. There is no passing or
//    failing score."; "The Pascal Contest may be written by any participant in Grade 9 or below."; the Grade 9 student
//    taking a Grade 10 course "is eligible to write the Pascal Contest."; "Every participant scoring in the top 25% of
//    all competitors receives a Certificate of Distinction."; team score is the sum of the three highest scores; "New in
//    2026, we will not be providing team honour rolls and awards at the zone, provincial, and national levels."; 2026
//    table Pascal mean 93.1, Certificate of Distinction cutoff 110, School Medal Champion cutoff 93, maximum 150,
//    contestants 25 488 (Cayley and Fermat figures not used here, never summed).
//  - 2025 Pascal Contest booklet (2025PascalContest.pdf, front cover only; NO problem reproduced): "Scoring: Each correct
//    answer is worth 5 in Part A, 6 in Part B, and 8 in Part C."; "There is no penalty for an incorrect answer."; "Each
//    unanswered question is worth 2, to a maximum of 10 unanswered questions."; Part C "integer from 0 to 99,
//    inclusive"; "A one-digit answer (such as "7") must be coded with a leading zero ("07")."; "Do not discuss the
//    problems or solutions from this contest online for the next 48 hours."; Part B begins at question 11 and Part C at
//    question 21 (section headings).
//  - 2026 PCF Results booklet (2026_PCF_Results.pdf): Pascal statistics page "Number of Contestants / Nombre de
//    concurrents: 20945", "Average mark / Note moyenne: 93.79"; per-question percentage choosing the correct option
//    (Q1 97.62, Q10 59.95, Q16 39.48, Q20 24.36, Q21 37.93, Q22 27.20, Q23 18.33, Q24 5.18, Q25 1.29) and % not
//    attempted (Q20 19.12, Q21 25.04, Q22 41.27, Q23 57.05, Q24 70.79, Q25 79.37). Correct letters and answers are NOT
//    printed. Students registered by province for Pascal (AB 2843, BC 3736, MB 745, NB 351, NL 204, NS 779, NT 11,
//    ON 8789, PE 215, QC 1823, SK 242, YT 16, International 5734, Total 25488), CEMC's own total, not summed by us.
//  - cemc.uwaterloo.ca/contests/calculators (calculators.txt): the five disallowed features; "Examples of disallowed
//    devices are the Casio ClassPad 300 series, HP Prime and TI-Nspire CAS."
//  - cemc.uwaterloo.ca/resources/problem-set-generator: "Contest generator" "Randomly chooses 25 problems (one each at
//    #1, #2, #3, and so on)".
//  - cemc.uwaterloo.ca/contests/how-contests-work: school-only entry; another local school; "Contests may not be taken
//    remotely or without supervision."; "a contest can never be written before the official contest date".
//  - cemc.uwaterloo.ca/contests/fgh: Fryer is the Grade 9 full-solution contest, "North and South America: Wednesday,
//    April 7, 2027", "4 questions", "Time allowed for completion is 75 minutes.", "Score out of 40."
//  - facts-schools-contests.md rows 16 (MTH1W, 2021, de-streamed) and 54 (EQAO Grade 9 math "January 12 to February 5,
//    2027", en dash in source not reproduced).
// Our own material, labelled on the page: the seven practice problems and solutions (answers checked by brute force in
// Python on 22 October 2026), the expected-value table for guessing versus leaving a blank (5/5 = 1, 6/5 = 1.2,
// 8/100 = 0.08; 5/2 = 2.5 and 6/3 = 2 after eliminations), the part totals 10 x 5 + 10 x 6 + 5 x 8 = 150, the cutoff
// share 110 / 150 = about 73 percent, the topic table, and the five-phase plan.
// Lesson family: decisions under a scoring rule (when a blank beats a guess).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const EV = `Our expected-value check, per question (not CEMC's)

Leave it blank            2 points (up to 10 blanks)
Blind guess, Part A       5 x 1/5   = 1.0 point
Blind guess, Part B       6 x 1/5   = 1.2 points
Blind guess, Part C       8 x 1/100 = 0.08 points

Part A, three options crossed out:  5 x 1/2 = 2.5  -> guess
Part B, two options crossed out:    6 x 1/3 = 2.0  -> a tie
Part B, three options crossed out:  6 x 1/2 = 3.0  -> guess`;

const P7 = `7^1 =   7      last two digits 07
7^2 =  49      last two digits 49
7^3 = 343      last two digits 43
7^4 = 2401     last two digits 01   <- the cycle restarts

2027 = 4 x 506 + 3
7^2027 = (7^4)^506 x 7^3
       ends in 01 x 43, so it ends in 43`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'The Grade 9 Pascal Contest from CEMC\'s 2027 page and its 2025 scoring rules: when a blank beats a guess, seven original practice problems, and a plan to February 2027.' },
  slug: 'pascal-contest-preparation',
  code: 'pcp',
  accent: '#8F512F',
  accentRationale: 'Pascal Contest preparation, Canada: a muted maple-bark brown #8F512F, allocated for row 44; measured 6.4 RGB units (Euclidean) from the nearest site accent and 26.5 from the nearest other Canada accent; contrast 5.85 on the paper #FBF8F2, 5.50 and 5.03 on the two darker paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Pascal Contest preparation',
  title: 'Pascal Contest 2027 (Grade 9): Format, Scoring, Practice',
  description: 'The Grade 9 Pascal Contest from CEMC\'s 2027 page: 25 questions in 60 minutes, out of 150, the blank-or-guess rule, seven original problems and a plan to February.',
  ogDescription: 'CEMC lists the 2027 Pascal Contest for Tuesday 23 and Wednesday 24 February 2027 in the Americas. The format, the scoring rule that rewards a blank, 2026 results, seven practice problems and a plan.',
  twitterDescription: 'Pascal Contest 2027 for Grade 9: format, scoring, 2026 results and seven original practice problems.',
  pageName: 'Pascal Contest Preparation',
  webPageDescription: 'A guide for Grade 9 students in Canada and their parents to CEMC\'s Pascal Contest, built from CEMC\'s 2027 contest page, the 2025 contest booklet\'s scoring rules and the 2026 results booklet, with original practice problems and a plan.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests from Gauss to Euclid, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Pascal Contest',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: '2027 facts' },
    { href: '#scoring', label: 'Blank or guess' },
    { href: '#practice', label: 'Seven problems' },
    { href: '#results', label: '2026 results' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Canada &middot; CEMC math contests &middot; Grade 9',
  h1: 'Pascal Contest preparation for Grade 9',
  lede: 'The Pascal Contest is the Grade 9 paper in the family of math contests that the University of Waterloo\'s Centre for Education in Mathematics and Computing (CEMC) sets every year. It is a one-hour, 25-question multiple-choice paper, and for many Canadian students it is the first math contest of high school. This page is built from CEMC\'s 2027 Pascal page, the front cover of the 2025 Pascal booklet and CEMC\'s 2026 results booklet. It explains the paper, the scoring rule that makes a blank worth more than a wild guess, what the questions draw on, seven practice problems we wrote with full solutions, and a plan that ends on contest day in February 2027.',
  secondaryCta: { href: '#practice', label: 'Try the seven problems' },
  wa: 'Hello Modern Age Coders, my child is in Grade 9 in Canada and wants to write the Pascal Contest in February 2027. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students &middot; every practice problem on this page written by our teachers',
  spec: [
    ['Organiser', 'CEMC, University of Waterloo'],
    ['Who writes it', 'Grade 9 (and keen younger students)'],
    ['2027 dates', 'Tuesday 23 or Wednesday 24 February 2027 (Americas)'],
    ['Paper', '25 multiple-choice questions, 60 minutes'],
    ['Score', 'Out of 150'],
    ['Entry', 'Through a school only'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Pascal Contest is CEMC\'s Grade 9 math contest: 25 multiple-choice questions in 60 minutes, scored out of 150, written at school on Tuesday 23 or Wednesday 24 February 2027 in the Americas. Students enter only through their school. Modern Age Coders coaches Grade 9 students for Pascal live online, in a batch or one to one, through its Waterloo Math Contests course, Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses for Grade 9',
    h2: 'Where we would start a Pascal writer',
    lede: 'Our Waterloo contests course comes first. A student who outgrows Part B moves on to competition math; one with shaky school algebra steadies it in the high school course.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'PCP / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. Its Grades 9 and 10 track covers Pascal: two live classes a week, weekly problem sets and timed practice rounds before February 2027.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'PCP / 02', title: 'Competition mathematics', note: 'For the Grade 9 student who already finishes Part B and wants the ideas behind Part C.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PCP / 03', title: 'High school math, Grades 9 to 12', note: 'Algebra, linear relations and geometry taught properly, for a student whose school math still has gaps.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'The 2027 contest',
      h2: 'The 2027 Pascal Contest, line by line from CEMC',
      lede: 'Every row below was read on CEMC\'s Pascal, Cayley and Fermat page on 22 October 2026. CEMC publishes one page for all three contests; the rows here are the ones that apply to Pascal.',
      body: [
        { kind: 'table', caption: 'The 2027 Pascal Contest as CEMC publishes it (read 22 October 2026)', head: ['Item', 'CEMC\'s wording'], rows: [
          ['Who it is for', '"Students in Grade 9 are eligible to write the Pascal Contest." CEMC adds that "Motivated students in lower grades are welcome to write one of the contests."'],
          ['Contest dates', '"North and South America: Tuesday, February 23, 2027 and Wednesday, February 24, 2027". Supervisors run it "within the two-day contest period", so the school picks the day.'],
          ['Ordering deadline', 'Tuesday, February 9, 2027 for schools in Canada. Schools in India and other countries have earlier deadlines.'],
          ['Paper', '"25 multiple-choice questions." Parts A and B have answers A to E; "in Part C, participants select a whole number from 0 to 99."'],
          ['Time and score', '"Time allowed for completion is 60 minutes." "Score out of 150."'],
          ['How it is written', '"Written at school, participants write individually on paper or online." The school chooses paper or online when it orders.'],
          ['Calculators', '"Some calculators permitted." CEMC\'s calculator page sets out which.'],
          ['Content', 'Based on "curriculum common to all Canadian provinces", and "most of the problems test logical thinking and mathematical problem-solving."'],
          ['One contest a year', '"Participants can only write one of the Pascal, Cayley and Fermat Contests in a given school year."'],
          ['Fee', 'CEMC charges the school six dollars for each Pascal writer, and a separate processing charge on every order.'],
          ['Results', 'In CEMC\'s Contest Supervisor Portal "six to eight weeks after the contest date."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What "Grade 9 or below" means',
          left: [
            'CEMC counts a Pascal writer as official when the contest "may be written by any participant in Grade 9 or below." A keen Grade 8 student can therefore write Pascal and still count.',
            'Grade is what matters, not the math course. CEMC gives the example of a Grade 9 student already taking a Grade 10 math course and says that student "is eligible to write the Pascal Contest." A student working well ahead may choose a higher contest instead, but never a lower one.'
          ],
          rightH3: 'Which calculators are allowed',
          right: [
            'CEMC\'s calculator page allows calculating devices without "internet access", "the ability to communicate with other devices", stored notes or programs, "a computer algebra system" or "dynamic geometry software".',
            'It names three examples that are not allowed: "the Casio ClassPad 300 series, HP Prime and TI-Nspire CAS." A plain scientific calculator is the safe choice. In our classes most Pascal questions are worked without one, because the ideas, not the arithmetic, take the time.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC, Pascal, Cayley and Fermat Contests</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/calculators" rel="noopener" target="_blank">CEMC, Calculators</a>, both read on 22 October 2026. We have no connection with CEMC or with the University of Waterloo; our part is the teaching, and the school handles everything to do with the sitting.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'The scoring rule',
      h2: 'How Pascal is scored, and when a blank beats a guess',
      lede: 'The front cover of every recent Pascal booklet carries a short scoring rule, and it changes how a student should treat the last ten minutes. The rule quoted here is from the 2025 Pascal booklet, the latest one we read; check the cover of the 2027 paper on the day.',
      body: [
        { kind: 'table', caption: 'Pascal scoring, from the front cover of CEMC\'s 2025 Pascal Contest booklet; the total in the last row is our arithmetic', head: ['Rule', 'What the 2025 booklet says'], rows: [
          ['Marks for a right answer', '"Each correct answer is worth 5 in Part A, 6 in Part B, and 8 in Part C."'],
          ['Wrong answers', '"There is no penalty for an incorrect answer."'],
          ['Blank answers', '"Each unanswered question is worth 2, to a maximum of 10 unanswered questions."'],
          ['Part C answers', 'An "integer from 0 to 99, inclusive"; "A one-digit answer (such as "7") must be coded with a leading zero ("07")."'],
          ['Where the parts start', 'Part B begins at question 11 and Part C at question 21 in the 2025 booklet.'],
          ['Our check of the total', '10 questions x 5 + 10 x 6 + 5 x 8 = 50 + 60 + 40 = 150, which matches CEMC\'s "Score out of 150".']
        ] },
        { kind: 'p', mt: true, html: 'Read the blank rule slowly. A wrong answer costs nothing, but it also earns nothing, while a blank earns 2 points, for up to ten blanks. So a guess is only worth making when it is likely enough to beat 2 points. The arithmetic below is ours, not CEMC\'s: it divides the marks for a right answer by the number of options still standing.' },
        { kind: 'code', label: 'Blank or guess &middot; our arithmetic', lang: 'text', code: EV, note: 'Our reading: a blind guess never beats a blank while blanks still count. In Part A, guess only after crossing out three of the five options. In Part B, two crossed out is a tie and three is a clear guess. In Part C, with a hundred possible answers, a guess without working is close to worthless.' },
        { kind: 'two', mt: true,
          leftH3: 'The eleventh blank',
          left: [
            'The rule stops at ten. Once a student has left ten questions blank, an eleventh blank earns nothing, so from that point any guess is better than leaving the circle empty.',
            'In practice very few Grade 9 students leave more than ten blanks with time to spare. The rule matters most for the student who finishes Part B with five minutes left and has to decide what to do with Part C.'
          ],
          rightH3: 'What we teach from it',
          right: [
            'Students keep a tally in the margin: how many questions left blank so far. It takes two seconds and it turns the last five minutes into a calm decision instead of a scramble.',
            'We also teach elimination as a skill in its own right. Crossing out two options in a Part B question by estimation is often faster than solving it, and a third crossed out turns a blank worth 2 into a guess worth 3.'
          ] }
      ]
    },
    {
      id: 'register', tint: 'tint', eyebrow: 'Entry',
      h2: 'Entering Pascal: the school orders, the student writes there',
      lede: 'There is no form a family can fill in. On its How contests work page CEMC puts it plainly: "Students cannot register for contests on their own. They must be registered by their school."',
      body: [
        { kind: 'ol', items: [
          '<b>Ask the math department in the autumn.</b> Ask the math teacher whether the school will order the 2027 contest and whether it writes on paper or online.',
          '<b>If the school has no CEMC account,</b> CEMC asks the "Principal or Head of Math" to send in a new school application, and warns the manual review can last as long as three weeks. Starting that in January 2027 leaves little room before the Tuesday, February 9, 2027 deadline for schools in Canada.',
          '<b>If your own school says no,</b> CEMC suggests asking a different school nearby whether the student may write with its group. Make those calls in December, not February.',
          '<b>Write on the school\'s chosen day.</b> The school runs the contest within the two-day window, in a classroom with a teacher present, and CEMC adds that "a contest can never be written before the official contest date."',
          '<b>Online writers: try the practice contest.</b> CEMC says "The PCF Online Practice Contest will be available in January" and strongly encourages online writers to complete it.'
        ] },
        { kind: 'p', mt: true, html: 'Our classes are online, and an online class can never be the place where Pascal is written: that is always the ordering school. Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'What the questions draw on',
      h2: 'The Grade 9 math a Pascal paper leans on',
      lede: 'CEMC describes the content in one sentence: curriculum common to all provinces, used to test logical thinking more than content. The breakdown below is ours, from teaching the paper, and it is not CEMC\'s list.',
      body: [
        { kind: 'table', caption: 'Topics behind Pascal questions (our analysis, not a CEMC syllabus)', head: ['Area', 'How it tends to appear', 'What we drill'], rows: [
          ['Number sense', 'Fractions, percentages, powers and order of operations in the opening questions', 'Exact arithmetic without a calculator, and spotting the shortcut before computing'],
          ['Algebra', 'A word problem that becomes one or two linear equations', 'Naming the unknown first, then writing the equation from the words'],
          ['Ratio and rate', 'Mixtures, speeds, shares that change when something moves', 'The "k" method: write each quantity as a multiple of one unknown'],
          ['Geometry', 'Angles, areas of composite shapes, the Pythagorean theorem', 'Drawing the figure larger and labelling every length that can be found'],
          ['Counting', 'How many numbers, paths or arrangements satisfy a rule', 'Listing in a fixed order so nothing is counted twice or missed'],
          ['Number theory', 'Digits, divisibility, remainders and last digits, often in Part C', 'Patterns in last digits and factor pairs, checked on small cases']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the Ontario Grade 9 course fits',
          left: [
            'In Ontario, Grade 9 math is MTH1W, the de-streamed course issued in 2021. Its algebra, linear relations and geometry cover most of what the early Pascal questions use.',
            'Ontario Grade 9 students also meet the EQAO Grade 9 Assessment of Mathematics, which EQAO lists for January 12 to February 5, 2027. That window ends just before Pascal, so we keep January classes lighter for Ontario students.'
          ],
          rightH3: 'The jump at question 16 or so',
          right: [
            'The first ten questions reward accuracy. The second ten ask for one idea that a textbook exercise would have handed over: an auxiliary line, a clever unknown, a pattern in the digits.',
            'Part C asks for a number, not a letter, so elimination is gone. A student who reaches question 21 with fifteen minutes left has done well; we train students to look at all five Part C questions before choosing one.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Seven practice problems',
      h2: 'Seven original Pascal-style problems with worked solutions',
      lede: 'Each problem below is our practice problem, not a CEMC problem: we wrote all seven for our Grade 9 students, and none is copied or adapted from a past contest. They climb like the paper, two at Part A level, three at Part B level and two Part C questions with whole-number answers. Every answer was checked by brute force in Python before publishing.',
      body: [
        { kind: 'p', html: '<b>Problem 1 (Part A level; our practice problem, not a CEMC problem).</b> A curling team played 12 games. It won twice as many games as it lost, and 3 games were ties. How many games did it win? (A) 3 &nbsp;(B) 4 &nbsp;(C) 6 &nbsp;(D) 8 &nbsp;(E) 9' },
        { kind: 'p', html: '<b>Solution.</b> Let the team lose L games, so it won 2L. Wins, losses and ties make 12 games: 2L + L + 3 = 12, so 3L = 9 and L = 3. The team won 2 x 3 = 6 games, answer (C). Check: 6 + 3 + 3 = 12. The trap is answer (E), 9, which is the number of games that were not ties.' },
        { kind: 'p', mt: true, html: '<b>Problem 2 (Part A level; our practice problem, not a CEMC problem).</b> A water tank is three-fifths full. After 12 litres are drained, it is one-third full. How many litres does the full tank hold? (A) 30 &nbsp;(B) 36 &nbsp;(C) 45 &nbsp;(D) 48 &nbsp;(E) 60' },
        { kind: 'p', html: '<b>Solution.</b> The 12 litres are the difference between three-fifths and one-third of the tank. 3/5 - 1/3 = 9/15 - 5/15 = 4/15, so 4/15 of the tank is 12 litres, one-fifteenth is 3 litres, and the whole tank is 45 litres, answer (C). Check: 3/5 of 45 is 27, and 27 - 12 = 15, which is one-third of 45.' },
        { kind: 'p', mt: true, html: '<b>Problem 3 (Part B level; our practice problem, not a CEMC problem).</b> The two shorter sides of a right-angled triangle are in the ratio 3 : 4, and its longest side is 25 cm. What is its area, in square centimetres? (A) 120 &nbsp;(B) 150 &nbsp;(C) 175 &nbsp;(D) 200 &nbsp;(E) 300' },
        { kind: 'p', html: '<b>Solution.</b> Write the shorter sides as 3k and 4k. By the Pythagorean theorem, (3k)<sup>2</sup> + (4k)<sup>2</sup> = 25<sup>2</sup>, so 25k<sup>2</sup> = 625, k<sup>2</sup> = 25 and k = 5. The sides are 15 cm and 20 cm, and the area is (15 x 20) / 2 = 150, answer (B). Answer (E), 300, is what a student gets by forgetting to halve.' },
        { kind: 'p', mt: true, html: '<b>Problem 4 (Part B level; our practice problem, not a CEMC problem).</b> How many positive integers less than 100 have digits that add up to 9? (A) 8 &nbsp;(B) 9 &nbsp;(C) 10 &nbsp;(D) 11 &nbsp;(E) 18' },
        { kind: 'p', html: '<b>Solution.</b> Count by the number of digits. One digit: only 9. Two digits: the tens digit t runs from 1 to 9 and the units digit is 9 - t, giving 18, 27, 36, 45, 54, 63, 72, 81 and 90, which is nine numbers. The total is 1 + 9 = 10, answer (C). Two numbers are easy to lose: the single-digit 9, and 90, whose units digit is 0.' },
        { kind: 'p', mt: true, html: '<b>Problem 5 (Part B level; our practice problem, not a CEMC problem).</b> In a class, the ratio of students who walk to school to students who take the bus is 3 : 5. Then 4 students switch from the bus to walking, and the ratio becomes 1 : 1. How many students are in the class? (A) 24 &nbsp;(B) 28 &nbsp;(C) 32 &nbsp;(D) 36 &nbsp;(E) 40' },
        { kind: 'p', html: '<b>Solution.</b> Let 3k students walk and 5k take the bus. After the switch, 3k + 4 walk and 5k - 4 ride, and these are equal: 3k + 4 = 5k - 4, so 2k = 8 and k = 4. The class has 3k + 5k = 8k = 32 students, answer (C). Check: 12 walkers and 20 riders become 16 and 16. The class size never changes, which is a quick way to test each option: it must be a multiple of 8, and of the five only 24, 32 and 40 are.' },
        { kind: 'p', mt: true, html: '<b>Problem 6 (Part C level; our practice problem, not a CEMC problem).</b> How many ordered pairs of positive integers (a, b) satisfy 1/a + 1/b = 1/6? Answer with a whole number from 0 to 99.' },
        { kind: 'p', html: '<b>Solution.</b> Multiply both sides by 6ab: 6b + 6a = ab. Move everything to one side and add 36: ab - 6a - 6b + 36 = 36, which factors as (a - 6)(b - 6) = 36. Both a and b must be greater than 6 (if a were 6 or less, 1/a alone would already be at least 1/6), so a - 6 and b - 6 are a positive factor pair of 36. Thirty-six has nine positive factors (1, 2, 3, 4, 6, 9, 12, 18, 36), and each gives one ordered pair, from (7, 42) to (42, 7). The answer is 9, coded as 09 on the response form.' },
        { kind: 'p', mt: true, html: '<b>Problem 7 (Part C level; our practice problem, not a CEMC problem).</b> What are the last two digits of 7<sup>2027</sup>? Give the integer they form, from 0 to 99.' },
        { kind: 'code', label: 'Problem 7 &middot; our working', lang: 'text', code: P7, note: 'The answer is 43. The idea is that only the last two digits ever matter when multiplying, and 7 to the fourth power ends in 01, so the pattern of last two digits repeats every four powers. A student who sees the cycle needs no calculator; one who reaches for it will find 7<sup>2027</sup> far too large to display.' },
        { kind: 'two', mt: true,
          leftH3: 'How to use the seven',
          left: [
            'Give yourself 14 minutes for all seven, the pace of a real paper, and mark your answers before reading any solution. Note which ones you would have left blank under the scoring rule.',
            'Then read each solution and write down, in one line, the idea you were missing. That line is worth more than the score.'
          ],
          rightH3: 'What links them',
          right: [
            'Problems 1, 2, 3 and 5 are all the same move: name one unknown well, and the rest follows. Problem 4 is careful listing. Problems 6 and 7 are Part C ideas, factoring a clever expression and finding a repeating pattern.',
            'Every solution ends with a check. On a multiple-choice paper the check is cheap, and it is the habit that catches a wrong letter before it costs 5 or 6 points.'
          ] }
      ]
    },
    {
      id: 'results', tint: 'deep', eyebrow: 'Last year in numbers',
      h2: 'The 2026 Pascal Contest in CEMC\'s own figures',
      lede: 'CEMC publishes averages and cutoffs on its contest page and question-by-question statistics in its results booklet. The figures below are copied from those two sources for Pascal only; the percentages are of the contestants CEMC counted on its statistics page.',
      body: [
        { kind: 'table', caption: 'Pascal 2026, from CEMC\'s Pascal, Cayley and Fermat page (read 22 October 2026)', head: ['Measure', 'Pascal 2026'], rows: [
          ['Average (mean)', '93.1 out of 150'],
          ['Certificate of Distinction cutoff', '110'],
          ['School Medal Champion cutoff', '93'],
          ['Number of contestants', '25 488']
        ] },
        { kind: 'table', mt: true, caption: 'How far down the 2026 Pascal paper students got: share choosing the right answer and share leaving the question blank, from CEMC\'s 2026 PCF Results booklet (statistics page: 20945 contestants, average mark 93.79). Answers are not reproduced.', head: ['Question', 'Chose the right answer', 'Left it blank'], rows: [
          ['1', '97.62%', 'under 1%'],
          ['10', '59.95%', 'under 1%'],
          ['16', '39.48%', '10.55%'],
          ['20', '24.36%', '19.12%'],
          ['21', '37.93%', '25.04%'],
          ['22', '27.20%', '41.27%'],
          ['23', '18.33%', '57.05%'],
          ['24', '5.18%', '70.79%'],
          ['25', '1.29%', '79.37%']
        ] },
        { kind: 'p', mt: true, html: 'Two readings of our own. First, the 2026 Certificate of Distinction cutoff of 110 is about 73 percent of 150 (110 / 150). Because the certificate goes to "the top 25%" of writers, its line is set by the paper and the field, and it shifts from year to year. Second, by question 25 almost four in five students had left the question blank. That is not failure; it is the paper working as designed, and it is why the blank rule above is worth knowing.' },
        { kind: 'table', mt: true, caption: 'Students registered for the 2026 Pascal Contest by province, from CEMC\'s 2026 PCF Results booklet (CEMC\'s own total)', head: ['Where', 'Pascal students registered'], rows: [
          ['Ontario', '8789'],
          ['British Columbia', '3736'],
          ['Alberta', '2843'],
          ['Quebec', '1823'],
          ['Nova Scotia', '779'],
          ['Manitoba', '745'],
          ['New Brunswick', '351'],
          ['Saskatchewan', '242'],
          ['Prince Edward Island', '215'],
          ['Newfoundland and Labrador', '204'],
          ['Yukon and Northwest Territories', '16 and 11'],
          ['Outside Canada', '5734'],
          ['Total, as CEMC prints it', '25488']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC, Pascal, Cayley and Fermat Contests</a> (averages and cut-offs) and CEMC\'s 2026 PCF Results booklet, linked from that page, read 22 October 2026. CEMC says its contests "are not tests or exams. There is no passing or failing score."' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Five phases',
      h2: 'A plan from November 2026 to the February 2027 Pascal',
      lede: 'This is our own plan, for a Grade 9 student who starts in early November 2026 and sits the paper on Tuesday 23 or Wednesday 24 February 2027. It is built on two live classes a week with roughly forty minutes of practice in between.',
      body: [
        { kind: 'ol', items: [
          '<b>Phase 1, 2 to 22 November 2026: speed and accuracy in Part A.</b> Fractions, percentages, powers and order of operations, worked exactly. The target by the end of the phase: ten Part A questions in twenty minutes with no careless slips. Ask the school now whether it will order the 2027 Pascal.',
          '<b>Phase 2, 23 November to 20 December 2026: algebra and ratio.</b> Turning words into one or two equations; the k method for ratios; our problems 1, 2 and 5. First Part B questions from past papers in CEMC\'s archive.',
          '<b>Phase 3, 21 December 2026 to 3 January 2027: the holiday fortnight.</b> No new topics. One problem a day from CEMC\'s Problem Set Generator, chosen at Part B level, with the solution read only after a real attempt.',
          '<b>Phase 4, 4 to 31 January 2027: geometry, counting and Part C.</b> Angles, areas and the Pythagorean theorem, careful listing, digits and remainders; our problems 3, 4, 6 and 7. One full 60-minute paper at the end of January. Ontario students sitting the EQAO Grade 9 window keep this phase to one class a week.',
          '<b>Phase 5, 1 to 21 February 2027: timed papers and the blank rule.</b> Two more past papers in exact contest conditions, each marked with the 5, 6, 8 and blank-2 rule, then reviewed line by line. Online writers try the PCF Online Practice Contest. Confirm the school\'s order is in before Tuesday, February 9, 2027.',
          '<b>Contest week, 22 to 24 February 2027.</b> A light review of the wrong-answer list, a good night\'s sleep, and the paper at school. The 2025 booklet asks writers not to discuss the problems or solutions online for the next 48 hours; we ask the same.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 8, writing early', p: 'Phases 1, 2 and 4 matter most. Finishing Part A cleanly and a few Part B questions is a strong first Pascal.' },
          { h3: 'Grade 9, first contest', p: 'The full plan, aiming for all of Part B and one or two Part C questions.' },
          { h3: 'Grade 9, contest regular', p: 'Phase 1 shortened to a week; the time moves to Part C and to the full-solution Fryer in April.' }
        ] }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Free practice from CEMC',
      h2: 'Using CEMC\'s past Pascal papers well',
      lede: 'CEMC keeps its old papers online at no cost, each with its official solutions. We do not copy them onto our pages. Students open the originals, and the table shows what we do with each.',
      body: [
        { kind: 'table', caption: 'Free CEMC material for a Pascal writer (read 22 October 2026); the last column is how we use it', head: ['Resource', 'What CEMC offers', 'How we use it'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests, solutions and results</a>', '"Problems, solutions and results from previous years can be found in the table below."', 'One full Pascal paper a month from December, and the last two in exam conditions'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/problem-set-generator" rel="noopener" target="_blank">Problem Set Generator</a>', 'Its Contest generator "Randomly chooses 25 problems (one each at #1, #2, #3, and so on)" from past contests', 'A fresh mixed paper with the shape of a real Pascal, for the holiday weeks'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a>', 'Free lessons; "No registration is required to access these resources."', 'Revision of one Grade 9 topic at a time when a past paper exposes a gap'],
          ['PCF Online Practice Contest', '"available in January" for students writing online', 'A run-through of the online screens before contest day']
        ] },
        { kind: 'p', mt: true, html: 'Our rule with past papers: the solution is opened only after a real attempt, and the student then explains CEMC\'s solution back in their own words. A paper read with the solutions open teaches pattern recognition at best; a paper struggled with teaches the ideas.' }
      ]
    },
    {
      id: 'next', tint: 'tint', eyebrow: 'After Pascal',
      h2: 'From Pascal to Fryer, Cayley and, one day, Euclid',
      lede: 'Pascal is the first rung of a ladder CEMC has built through high school. Everything in the table is CEMC\'s; the right-hand column is our advice.',
      body: [
        { kind: 'table', caption: 'Where a Grade 9 Pascal writer can go next, from CEMC\'s contest pages (read 22 October 2026)', head: ['Contest', 'What CEMC says', 'Our advice'], rows: [
          ['Fryer (Grade 9, April 2027)', 'The full-solution contest for Grade 9: "North and South America: Wednesday, April 7, 2027", "4 questions", "Time allowed for completion is 75 minutes.", "Score out of 40."', 'The natural second contest of Grade 9: same grade, but the working is marked, not just the answer'],
          ['Cayley (Grade 10)', '"Students in Grade 10 are eligible to write the Cayley Contest."', 'Same shape as Pascal, so the habits from this year carry straight over'],
          ['Euclid (final year)', 'For "Students in their final year of secondary school or CÉGEP students"; CEMC calls its last questions "some of the most complex and challenging among all our contests".', 'Three years away. The full-solution writing it needs starts with Fryer']
        ] },
        { kind: 'p', mt: true, html: 'Families often ask whether a Pascal result matters for university. CEMC\'s own pages tie no admission rule to Pascal. The Waterloo admission facts CEMC and Waterloo publish concern the senior contests, which we cover on our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC Waterloo contests page</a>. The honest value of Pascal in Grade 9 is the habit of thinking through a problem nobody has shown you how to do.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'From accurate to strategic: a Grade 9 ladder',
    lede: 'The four steps we use in a first class to see where a Grade 9 student really is.',
    table: { caption: 'From school math to contest math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Accurate', 'Solves textbook questions correctly but slowly, and has not seen a contest paper'],
      ['2. Quick', 'Finishes Part A of a past Pascal in about twenty minutes with few slips'],
      ['3. Inventive', 'Solves most of Part B by finding the one idea each question hides'],
      ['4. Strategic', 'Reaches Part C with time to choose, and uses the blank rule on purpose']
    ] },
    left: { h3: 'For parents', ps: [
      'Most Grade 9 students start at stage 1 or 2, and that is fine. Stage 3 by late January 2027 is the milestone that matters.',
      'If your child comes home saying the contest was hard, that is normal. Look at how they spent the hour, not just at the score.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep a list of every question you got wrong and the idea that would have solved it. Read it the night before.',
      'Count your blanks in the margin as you go. Ten is the most that score.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around the Pascal year',
    lede: 'All nine are live online courses with the same teacher every week, taught in a batch or privately, wherever in Canada the student lives.',
    bands: [
      { num: 'I', h3: 'The math underneath', sub: 'Grades 8 to 10', courses: [
        { code: 'PCP / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and word problems, the Part A and B workhorse.' },
        { code: 'PCP / BASE / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'For a Grade 8 student writing Pascal early.' },
        { code: 'PCP / BASE / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns and counting explored in Python.' }
      ] },
      { num: 'II', h3: 'Contest problem solving', sub: 'Grades 9 to 11', courses: [
        { code: 'PCP / STEP / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions, younger students', blurb: 'A first taste of contest problems before Grade 9.' },
        { code: 'PCP / STEP / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance, met again in later contests.' },
        { code: 'PCP / STEP / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof and problem solving, Grades 8 to 10', blurb: 'Written arguments, ready for Fryer in April.' }
      ] },
      { num: 'III', h3: 'Alongside the contests', sub: 'Coding and problem solving', courses: [
        { code: 'PCP / ALSO / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'CEMC\'s programming contest, the week before Pascal.' },
        { code: 'PCP / ALSO / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most first CCC writers use.' },
        { code: 'PCP / ALSO / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms for curious minds.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Pascal classes around a Grade 9 timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches, with Eastern time converted to your province.' },
      { time: 'Weekends', l: 'A weekend morning class keeps school nights for homework.' },
      { time: '1-on-1', l: 'Fixed around the student, counting back from the school\'s contest day.' }
    ],
    cells: [
      { h3: 'Original problems', p: 'Practice sets our teachers write, alongside CEMC\'s archive.' },
      { h3: 'Marked like the paper', p: 'Five, six and eight for right answers, two for a blank.' },
      { h3: 'One idea per question', p: 'Every review names the idea that unlocks the problem.' },
      { h3: 'Full papers in February', p: 'Sixty minutes, no pauses, reviewed the next class.' },
      { h3: 'Any province', p: 'From Victoria to St. John\'s, on the same live lesson.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or one student and one teacher.' }
    ]
  },

  projectsH2: 'What our students make between contests',
  projectsLede: 'Contest math sits beside real projects in our classes. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from parents, exactly as they posted them.',

  fees: {
    h2: 'Fees',
    lede: 'The school pays CEMC\'s contest fee when it orders. Our monthly fee covers the teaching only, with no season contract, so a family can stop after the February 2027 paper with nothing owed.',
    free: ['A free first class', 'Three Pascal-style questions to start', 'Nothing to pay on the day'],
    group: ['Fifteen to twenty students in a batch', 'Grouped by grade', 'Choose the batch that suits you', 'Billed month by month'],
    one: ['One student, one teacher', 'Timed to your school\'s contest day', 'Built on your own mistakes list']
  },

  faq: {
    eyebrow: 'What Grade 9 families ask',
    h2: 'Pascal Contest questions, answered',
    items: [
      { q: 'What is the Pascal Contest?', a: 'It is the Grade 9 math contest that CEMC, part of the University of Waterloo, sets and marks each year. It has 25 multiple-choice questions, takes 60 minutes and is scored out of 150. CEMC says most of its problems test logical thinking and problem solving rather than content.' },
      { q: 'When is the Pascal Contest in 2027?', a: 'For schools in the Americas, CEMC gives a two-day window, Tuesday, February 23, 2027 and Wednesday, February 24, 2027, and each school runs it on one of those days. The ordering deadline for schools in Canada is Tuesday, February 9, 2027.' },
      { q: 'Can a Grade 8 student write Pascal?', a: 'Yes. CEMC welcomes motivated students in lower grades, and says the Pascal Contest may be written by any participant in Grade 9 or below. A student can write only one of Pascal, Cayley and Fermat in a school year.' },
      { q: 'How is the Pascal Contest scored?', a: 'The 2025 booklet gives 5 points for each right answer in Part A, 6 in Part B and 8 in Part C. There is no penalty for a wrong answer, and each unanswered question is worth 2, up to a maximum of 10 unanswered questions. Check the 2027 booklet cover on the day.' },
      { q: 'Should my child guess or leave a Pascal question blank?', a: 'By our arithmetic, a blind guess is worth less than the 2 points a blank earns, as long as fewer than ten questions are blank. Guessing pays in Part A after three options are ruled out, and in Part B after two or three. That is our analysis of the scoring rule, not CEMC advice.' },
      { q: 'Can my child register for Pascal on their own?', a: 'No. CEMC says students cannot register on their own and must be registered by their school. Where a school does not take part, CEMC points families to other schools nearby that may let the student write with them.' },
      { q: 'Are calculators allowed on the Pascal Contest?', a: 'CEMC says some calculators are permitted. Devices with internet access, communication with other devices, stored notes or programs, a computer algebra system or dynamic geometry software are not, and CEMC names the Casio ClassPad 300 series, HP Prime and TI-Nspire CAS as examples.' },
      { q: 'Where can we find past Pascal papers?', a: 'Ten years of old Pascal papers, with official solutions and results, sit free on CEMC\'s website, and its Problem Set Generator builds new sets from past Pascal questions. Our own problems are written from scratch, and CEMC\'s papers stay on CEMC\'s site.' },
      { q: 'What was a good Pascal score in 2026?', a: 'CEMC lists the 2026 Pascal average as 93.1 out of 150, the Certificate of Distinction cutoff as 110 and the School Medal Champion cutoff as 93. CEMC gives the certificate to the top 25 percent of competitors, so the cutoff changes each year.' },
      { q: 'What times are your Pascal classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Class times are agreed in Eastern time, and we give each family the time on its own clock.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for a Grade 9 student who likes a problem with a twist.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Our overview of every CEMC math contest, Grades 7 to 12.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math help across the provinces.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'CEMC\'s programming contest, a week before Pascal.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The full CCC route, Junior to Senior.' },
      { href: '/maths-olympiad-classes-online', label: 'Choosing a math olympiad', p: 'How the world\'s contests compare.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME coaching', p: 'The American multiple-choice papers.' },
      { href: '/maths-challenges', label: 'Math challenges', p: 'Contests students sit around the world.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why we teach ideas, not answer keys.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class opens with three Pascal-style questions we wrote, worked together on screen with the clock running. Afterwards you hear which rung of the ladder your child is on and how we would spend the months up to the February 2027 paper.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class from the inside, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Our teachers work from India and teach every class by live video, so there is no centre in Canada to visit. WhatsApp reaches us fastest from any province or territory.',
    formNote: 'The first class costs nothing, and we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count your blanks'
  },

  personalityCss: `
.ag-root.ag-pcp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pcp .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pcp .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pcp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pcp .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-pcp .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Pascal, Cayley and Fermat page, How contests work, Calculators, Problem Set Generator, past contests and the Fryer, Galois and Hypatia page, read raw on 22 October 2026; the front cover of the 2025 Pascal Contest booklet (scoring rules only) and the 2026 PCF Results booklet (Pascal statistics and enrolment only): 2027 dates Tuesday, February 23 and Wednesday, February 24, 2027 in the Americas, two-day window, Canadian deadline Tuesday, February 9, 2027; Grade 9 eligibility; 25 questions, 60 minutes, score out of 150, Part C 0 to 99; scoring 5, 6, 8, no penalty, blank worth 2 up to 10; 2026 Pascal mean 93.1, cutoffs 110 and 93, 25 488 contestants; question-level statistics; enrolment by province. Ontario MTH1W and EQAO Grade 9 window from facts-schools-contests.md.',
    localProject: 'Seven original Pascal-style practice problems written by us with full worked solutions checked by brute force in Python (curling record, draining tank, 3 : 4 right triangle, digit sum 9, walkers and riders, 1/a + 1/b = 1/6, last two digits of 7 to the power 2027); our expected-value table for guessing against leaving a blank; our total check 10 x 5 + 10 x 6 + 5 x 8 = 150; a five-phase plan from 2 November 2026 to the February 2027 contest. Lesson family: decisions under a scoring rule.',
    requiredMentions: ['Students in Grade 9 are eligible to write the Pascal Contest', 'Each unanswered question is worth 2, to a maximum of 10 unanswered questions', 'Part B, two options crossed out', 'The eleventh blank', '110 / 150', 'curling team played 12 games', '7<sup>2027</sup>', 'Pascal students registered', 'may be written by any participant in Grade 9 or below', '97.62%'],
    sources: [
      { claim: 'Pascal 2027 dates, deadline for Canada, Grade 9 eligibility, format, score out of 150, calculators permitted, content, one contest per year, fee, results timing, 2026 averages and cutoffs.', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'Pascal scoring rule (5, 6, 8; no penalty; blank worth 2 up to 10) and the leading-zero rule, from the 2025 Pascal Contest booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025PascalContest.pdf' },
      { claim: '2026 Pascal question-level statistics and students registered by province.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026%20PCF%20Results_May26.pdf' },
      { claim: 'Disallowed calculator features and example devices.', url: 'https://cemc.uwaterloo.ca/contests/calculators' },
      { claim: 'Entry only through a school, another local school, supervised in-person writing, no early writing.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Fryer 2027 date and format.', url: 'https://cemc.uwaterloo.ca/contests/fgh' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution, and any correct answer letter from the results booklet: never reproduced.',
      'A combined Pascal, Cayley and Fermat contestant figure: not printed; only Pascal\'s figures appear, and the enrolment total is CEMC\'s own.',
      'Treating the contest page\'s 25 488 contestants and the statistics page\'s 20945 as the same figure: both are labelled with their own source.',
      'That a Pascal result affects university admission: not stated by CEMC, so not claimed.',
      'That our classes raise scores or win certificates: refused.',
      'The fee as a typed figure: written in words only.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
