'use strict';
// Gauss Contest preparation (ag- contest door; Canada cluster Plan 2, row 43). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the GAUSS CONTESTS (Grades 7 and 8, CEMC) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/gauss-contest-preparation/):
//  - cemc.uwaterloo.ca/contests/gauss (gauss.txt): "Monday, May 10, 2027 to Friday, May 21, 2027" (same in and outside
//    the Americas); ordering deadline "Thursday, April 22, 2027"; "Students in Grades 7 and 8."; "Motivated students in
//    lower grades are welcome to write the contest."; "Contest Supervisors are expected to administer the contest within
//    the two-week contest period."; "25 multiple-choice questions."; "Time allowed for completion is 60 minutes.";
//    "Score out of 150."; "Written at school, participants write individually on paper or online."; "Some calculators
//    permitted."; "based on math curriculum common to all Canadian provinces. The last few questions are designed to
//    test ingenuity and insight."; "The Gauss Online Practice Contest will be available in April."; practice contest
//    "features questions from last year's Gauss Contests"; "All paper contests are marked in the school. Contest
//    Supervisors are given a marking template in the contest package."; results "sent to the Contest Supervisor by
//    email"; fee five dollars per participant (words only); "For Gauss Contests, there is a minimum order requirement of
//    10 contests."; "The Gauss Contests are considered a taxable supply in Canada."; "A Certificate of Participation is
//    provided for each participant."; Certificate of Distinction for "the top 25% of all participants within their own
//    school, for schools with at least 4 participants"; Certificate of Outstanding Achievement "to the highest achieving
//    participant in their school on each of the Grade 7 and 8 Contests, for schools with at least 10 participants";
//    "There is no Team Competition for these contests."; "the goal of our contests is to increase curiosity and foster
//    problem solving skills among participants".
//  - 2025 Gauss Grade 7 and Grade 8 booklets (covers only; NO problem reproduced): "(The Grade 8 Contest is on the
//    reverse side)"; "Time: 1 hour"; "This is a multiple-choice test. Each question is followed by five possible answers
//    marked A, B, C, D, and E."; scoring 5, 6, 8; "There is no penalty for an incorrect answer."; "Each unanswered
//    question is worth 2, to a maximum of 10 unanswered questions."; "you will have sixty minutes of working time";
//    Part B starts at question 11 and Part C at question 21.
//  - 2026 Gauss Results booklet (2026_Gauss_Results.pdf): Grade 7 and Grade 8 mark bands (counts and approximate
//    percentages), schools and students represented (1433 / 24102 and 1286 / 20675), averages 85.3 and 87.4, CEMC's own
//    "Total number of students represented" 44777, and the caveat that the statistics "do not represent all contest
//    participants"; students registered by province (ON 43271, BC 12072, AB 6756, QC 3524, NS 2030, MB 1607, NB 601,
//    PE 279, SK 181, NL 132, YT 45, NT 35, NU 10, International 8869, Total 79412 as CEMC prints it). Nothing summed.
//  - cemc.uwaterloo.ca/resources/problem-set-generator: generators draw on "past Gauss, Pascal, Cayley, and Fermat
//    Contests".
//  - cemc.uwaterloo.ca/contests and how-contests-work: "Students cannot register for contests on their own. They must
//    be registered by their school."; "Grade 7 and Grade 8 Gauss Contests" listed as a grouping in which a student
//    writes only one; Team Up Challenge for "Grades 6 to 8", "Tuesday, June 1, 2027 or later"; "These contests are
//    available in English and French."
//  - facts-schools-contests.md rows 11 and 12 (Ontario 2020 math, Grade 7 and Grade 8 coding expectations C3.1) and
//    136 to 139 (Beaver Computing Challenge dates, Grade 7/8 level, 15 questions out of 90, 45 minutes, no coding
//    needed).
// Our own material, labelled on the page: the eight practice problems and solutions (answers checked in Python on
// 22 October 2026), the two Python check programs (run under CPython 3.13 on 22 October 2026), the plan, and the
// readings of CEMC's mark bands (read band by band; no band percentages are added together).
// Lesson family: organized counting, checked by a short program.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RECT = `# Our check for Gauss practice problem 4 (not a CEMC problem)
# A rectangle in a 2 by 3 grid is fixed by choosing two of the
# 4 vertical grid lines and two of the 3 horizontal grid lines.
count = 0
for left in range(4):
    for right in range(left + 1, 4):
        for top in range(3):
            for bottom in range(top + 1, 3):
                count += 1
print(count)   # prints 18`;

const STAIRS = `# Our check for Gauss practice problem 8 (not a CEMC problem)
# ways[n] = number of ways to reach step n taking 1 or 2 steps
ways = [1, 1]          # step 0 (stand still) and step 1
for step in range(2, 11):
    ways.append(ways[-1] + ways[-2])
print(ways[10])        # prints 89`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'The Gauss Contests for Grades 7 and 8 in 2027: the May window, marking at school, the certificates, 2026 mark bands, eight original problems and two short Python checks.' },
  slug: 'gauss-contest-preparation',
  code: 'gcp',
  accent: '#85142C',
  accentRationale: 'Gauss Contest preparation, Canada: a muted cranberry #85142C, allocated for row 43; measured 6.2 RGB units (Euclidean) from the nearest site accent and 28.3 from the nearest other Canada accent; contrast 9.28 on the paper #FBF8F2, 8.73 and 7.99 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Gauss Contest preparation',
  title: 'Gauss Contest 2027 (Grades 7 and 8): Dates and Practice',
  description: 'The Gauss Contests for Grades 7 and 8: the 10 to 21 May 2027 window, 25 questions in 60 minutes, school marking and certificates, eight original problems and a plan.',
  ogDescription: 'CEMC runs the 2027 Gauss Contests from Monday 10 to Friday 21 May 2027. How the paper works, how schools mark it, what the certificates mean, 2026 mark bands and eight practice problems with solutions.',
  twitterDescription: 'Gauss Contest 2027 for Grades 7 and 8: dates, format, certificates and eight original problems.',
  pageName: 'Gauss Contest Preparation',
  webPageDescription: 'A guide for Grade 7 and 8 students in Canada and their parents to CEMC\'s Gauss Contests, built from CEMC\'s 2027 Gauss page, the 2025 Gauss booklet covers and the 2026 results booklet, with original practice problems, Python checks and a plan to May 2027.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests from Gauss to Euclid, with a Gauss track for Grades 7 and 8, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Gauss Contest',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#window', label: 'May 2027' },
    { href: '#paper', label: 'The paper' },
    { href: '#practice', label: 'Eight problems' },
    { href: '#bands', label: '2026 results' },
    { href: '#term', label: 'Plan' }
  ],
  eyebrow: 'Canada &middot; CEMC Gauss Contests &middot; Grades 7 and 8',
  h1: 'Gauss Contest preparation for Grades 7 and 8',
  lede: 'The Gauss Contests are where many Canadian students meet a real math contest for the first time. CEMC, at the University of Waterloo, sets one paper for Grade 7 and one for Grade 8, printed back to back in the same booklet, and schools run them on a day of their choosing within a two-week window in May. The questions start gently and end with a few that CEMC says are there to test "ingenuity and insight". This guide is built from CEMC\'s Gauss page for 2027, the covers of the 2025 Gauss booklets and CEMC\'s 2026 Gauss results booklet. It covers the window, the paper, how schools mark it and award certificates, last year\'s mark bands, eight practice problems we wrote with solutions, two short Python programs that check our answers, and a plan to May 2027.',
  secondaryCta: { href: '#practice', label: 'Try the eight problems' },
  wa: 'Hello Modern Age Coders, my child is in Grade 7 (or 8) in Canada and would like to prepare for the Gauss Contest in May 2027. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students, from age 6 &middot; every problem on this page is ours, written for Grades 7 and 8',
  spec: [
    ['Set by', 'CEMC, University of Waterloo'],
    ['For', 'Grades 7 and 8, and keen younger students'],
    ['2027 window', 'Monday 10 to Friday 21 May 2027'],
    ['Paper', '25 multiple-choice questions, 60 minutes'],
    ['Score', 'Out of 150'],
    ['Marked', 'At school, for paper writers'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In a sentence or two',
  capsule: 'The Gauss Contests are CEMC\'s math contests for Grades 7 and 8: one hour, twenty-five multiple-choice questions and 150 marks, sat at school on a day the school picks between Monday 10 and Friday 21 May 2027. Students take part only through their school. Modern Age Coders prepares Grade 7 and 8 students live online, in a batch or one to one, in the Gauss track of its Waterloo Math Contests course, Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses for Grades 7 and 8',
    h2: 'Three courses for a Gauss student',
    lede: 'The contest course has a Gauss track of its own. The competitions course widens the problem solving; the middle school course makes sure the Grade 7 and 8 math underneath is secure.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'GCP / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. Its Gauss track for Grades 7 and 8 meets twice a week live, sets problems between classes and runs timed rounds ahead of the May 2027 window.' },
      { course: 'middle-school-math-competitions-course', code: 'GCP / 02', title: 'Middle school math competitions', note: 'Ages 10 to 14. Number theory, counting, algebra and geometry problem solving for students who like contest questions.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'GCP / 03', title: 'Middle school math', note: 'Fractions, ratio, percent, pre-algebra and geometry taught properly, the ground the first Gauss questions stand on.' }
    ]
  },

  sections: [
    {
      id: 'window', tint: 'tint', eyebrow: 'May 2027',
      h2: 'The 2027 Gauss window, and what makes Gauss different',
      lede: 'Gauss works a little differently from CEMC\'s high school contests. There is no single contest day, the school marks paper copies itself, and some certificates are decided inside each school. Everything below is from CEMC\'s Gauss page, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The 2027 Gauss Contests, from CEMC\'s Gauss page (read 22 October 2026)', head: ['Detail', 'What CEMC publishes'], rows: [
          ['Who it is for', '"Students in Grades 7 and 8." "Motivated students in lower grades are welcome to write the contest."'],
          ['When', '"Monday, May 10, 2027 to Friday, May 21, 2027", the same window inside and outside the Americas'],
          ['Choosing the day', '"Contest Supervisors are expected to administer the contest within the two-week contest period."'],
          ['School ordering deadline', '"Thursday, April 22, 2027"'],
          ['Paper', 'Twenty-five questions, every one with five lettered options, in one hour, for a possible 150 marks'],
          ['Where and how', 'At school, each student alone, either on paper or on CEMC\'s online platform, as the school decides'],
          ['Calculators', '"Some calculators permitted."'],
          ['Content', 'Based on "math curriculum common to all Canadian provinces"; "The last few questions are designed to test ingenuity and insight."'],
          ['Languages', 'CEMC\'s contest table says "These contests are available in English and French."'],
          ['Fee', 'Five dollars per participant, ordered by the school, with a minimum order of ten contests']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One booklet, two contests',
          left: [
            'The Grade 7 and Grade 8 papers are separate contests. In 2025 they were printed back to back: the Grade 7 cover said "(The Grade 8 Contest is on the reverse side)".',
            'A student writes one of them in a school year. CEMC lists the "Grade 7 and Grade 8 Gauss Contests" among the groupings where a student can write only one, and a student working ahead may choose the higher grade but never the lower one.'
          ],
          rightH3: 'Marked at school',
          right: [
            'Paper Gauss contests stay at the school: "All paper contests are marked in the school. Contest Supervisors are given a marking template in the contest package." Online writers are marked on CEMC\'s platform.',
            'Results then go to the teacher, and CEMC says they are "sent to the Contest Supervisor by email in the weeks after the contest is written." Families hear the score from the school, not from CEMC.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/gauss" rel="noopener" target="_blank">CEMC, Gauss Contests</a>, and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests table</a>, read 22 October 2026. Modern Age Coders runs independent classes and is not part of, or connected with, CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'paper', tint: 'deep', eyebrow: 'The paper',
      h2: 'Inside a Gauss paper: three parts, all multiple choice',
      lede: 'The cover of each 2025 Gauss booklet gave the rules a student needs to know before starting. Unlike the Grade 9 to 11 contests, every Gauss question, even the last five, has five lettered options.',
      body: [
        { kind: 'table', caption: 'Gauss rules from the covers of CEMC\'s 2025 Grade 7 and Grade 8 Gauss booklets (no questions reproduced)', head: ['Rule', 'What the 2025 cover says'], rows: [
          ['Format', '"This is a multiple-choice test. Each question is followed by five possible answers marked A, B, C, D, and E."'],
          ['Time', '"Time: 1 hour"; "you will have sixty minutes of working time"'],
          ['Marks', 'Five for a right answer in Part A, six in Part B and eight in Part C'],
          ['Wrong answers', 'They cost nothing: the cover states there is no penalty'],
          ['Blanks', 'Two marks for each question left empty, counted for no more than ten of them'],
          ['Parts', 'Part A is questions 1 to 10, Part B questions 11 to 20, Part C questions 21 to 25']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the blank rule means for a Grade 7 student',
          left: [
            'A blank earns 2 marks; a wild guess among five options is right only one time in five. Our arithmetic: a blind guess in Part A is worth 5 / 5 = 1 mark on average, less than the 2 for a blank.',
            'So we teach younger students a simple rule: answer what you can work out, cross out options you can rule out, and only guess when you have narrowed it to two. That rule is ours, not CEMC\'s, and it stops counting once ten questions are blank.'
          ],
          rightH3: 'Ingenuity and insight',
          right: [
            'CEMC says the last few questions "are designed to test ingenuity and insight", and that the paper leans on reasoning more than on remembered content.',
            'In practice, a Grade 7 student meets questions near the end that no lesson has prepared them for. The skill is not knowing more math; it is trying a small case, drawing a picture, or making an organized list until a pattern shows.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Eight practice problems',
      h2: 'Eight Gauss-style problems, with full solutions',
      lede: 'These eight are our practice problems, not CEMC problems. Our teachers wrote them for Grade 7 and 8 students; none is copied or adapted from any Gauss paper. Like the contest, they move from Part A level to Part C level, and every one has five options. Each answer was checked in Python, and two of the checks are printed further down.',
      body: [
        { kind: 'p', html: '<b>Gauss practice 1</b> (our practice problem, not a CEMC problem, pitched at Part A). What is the value of 2027 - 2026 + 2025 - 2024 + ... + 3 - 2 + 1? (A) 1012 &nbsp;(B) 1013 &nbsp;(C) 1014 &nbsp;(D) 2026 &nbsp;(E) 2027' },
        { kind: 'p', html: '<b>How to solve it.</b> Group the terms in pairs from the left: (2027 - 2026), (2025 - 2024), and so on down to (3 - 2). Each pair equals 1. The pairs start at 2027, 2025, ..., 3, which is 1013 odd numbers, so the pairs add to 1013. The 1 at the end is left over, so the total is 1014, answer (C). Checking with a small version, 5 - 4 + 3 - 2 + 1 = 3: two pairs and the 1, which fits.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 2</b> (our practice problem, not a CEMC problem, pitched at Part A). A pancake recipe uses 3 cups of flour for every 2 cups of milk. How many cups of flour go with 7 cups of milk? (A) 9 &nbsp;(B) 9.5 &nbsp;(C) 10 &nbsp;(D) 10.25 &nbsp;(E) 10.5' },
        { kind: 'p', html: '<b>How to solve it.</b> Flour is 3/2 times the milk, so 7 cups of milk need 7 x 3/2 = 21/2 = 10.5 cups of flour, answer (E). A quick check: 2 cups of milk go with 3 of flour, so 6 go with 9, and the extra cup of milk needs another 1.5 cups of flour.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 3</b> (our practice problem, not a CEMC problem, pitched at Part A). A jacket is marked down by 20%. Later, the sale price is marked down by a further 25%. The final price is what percent of the original price? (A) 55% &nbsp;(B) 60% &nbsp;(C) 45% &nbsp;(D) 65% &nbsp;(E) 75%' },
        { kind: 'p', html: '<b>How to solve it.</b> Pretend the original price is 100. After 20% off it is 80. Taking 25% off 80 removes 20, leaving 60, so the final price is 60% of the original, answer (B). The trap is (C), 45%, from adding 20% and 25% and subtracting from 100: the second discount is taken from a smaller price.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 4</b> (our practice problem, not a CEMC problem, pitched at Part B). A grid has 2 rows and 3 columns of unit squares. How many rectangles of any size can be traced along its lines? (Squares count as rectangles.) (A) 6 &nbsp;(B) 12 &nbsp;(C) 17 &nbsp;(D) 18 &nbsp;(E) 22' },
        { kind: 'p', html: '<b>How to solve it.</b> Every rectangle is fixed by its left and right sides and its top and bottom. The grid has 4 vertical lines, and there are 6 ways to choose two of them (list them: 1-2, 1-3, 1-4, 2-3, 2-4, 3-4). It has 3 horizontal lines, with 3 ways to choose two. Each choice of sides goes with each choice of top and bottom, so there are 6 x 3 = 18 rectangles, answer (D). Counting the shapes one by one on the diagram usually gives 17: one rectangle is easy to miss.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 5</b> (our practice problem, not a CEMC problem, pitched at Part B). The three angles of a triangle are in the ratio 2 : 3 : 4. What is the size of the largest angle? (A) 60&deg; &nbsp;(B) 70&deg; &nbsp;(C) 75&deg; &nbsp;(D) 80&deg; &nbsp;(E) 90&deg;' },
        { kind: 'p', html: '<b>How to solve it.</b> Write the angles as 2k, 3k and 4k. They add to 180&deg;, so 9k = 180 and k = 20. The largest angle is 4k = 80&deg;, answer (D). Check: 40 + 60 + 80 = 180.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 6</b> (our practice problem, not a CEMC problem, pitched at Part B). How many positive whole numbers less than 200 are multiples of 6 but not multiples of 4? (A) 16 &nbsp;(B) 17 &nbsp;(C) 25 &nbsp;(D) 33 &nbsp;(E) 49' },
        { kind: 'p', html: '<b>How to solve it.</b> The multiples of 6 below 200 are 6, 12, ..., 198, which is 33 numbers. A multiple of 6 is also a multiple of 4 exactly when it is a multiple of 12, and the multiples of 12 below 200 are 12, 24, ..., 192, which is 16 numbers. So 33 - 16 = 17 are multiples of 6 but not of 4, answer (B). The quick check: the multiples of 6 alternate, 6 (no), 12 (yes), 18 (no), 24 (yes), so roughly half are removed.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 7</b> (our practice problem, not a CEMC problem, pitched at Part C). Figure 1 is made of 1 square. Figure 2 adds a column of 2 squares beside it, making a staircase of 3 squares. Figure 3 adds a column of 3, making 6 squares, and so on. Which is the first figure to use more than 200 squares? (A) Figure 18 &nbsp;(B) Figure 19 &nbsp;(C) Figure 20 &nbsp;(D) Figure 21 &nbsp;(E) Figure 100' },
        { kind: 'p', html: '<b>How to solve it.</b> Figure n uses 1 + 2 + ... + n squares. Two copies of a staircase fit together into a rectangle n wide and n + 1 tall, so one staircase uses n(n + 1) / 2 squares. Figure 19 uses 19 x 20 / 2 = 190 squares and Figure 20 uses 20 x 21 / 2 = 210, so the first figure over 200 is Figure 20, answer (C). Drawing figures 1 to 4 and noticing the doubling trick is the "insight" step.' },
        { kind: 'p', mt: true, html: '<b>Gauss practice 8</b> (our practice problem, not a CEMC problem, pitched at Part C). A student climbs a staircase of 10 steps, going up either 1 step or 2 steps with each stride. In how many different ways can the student reach the top? (A) 55 &nbsp;(B) 64 &nbsp;(C) 89 &nbsp;(D) 100 &nbsp;(E) 144' },
        { kind: 'p', html: '<b>How to solve it.</b> Start small. One step can be climbed 1 way; two steps 2 ways (1 + 1 or 2); three steps 3 ways. To reach any step, the last stride came from one step below or two steps below, so the number of ways to reach a step is the sum of the ways to reach the two steps before it. That gives 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 for steps 1 to 10, so the answer is 89, (C). This is the kind of last question CEMC means by ingenuity: listing all 89 ways would take the whole hour, while the small cases take two minutes.' },
        { kind: 'two', mt: true,
          leftH3: 'Doing the set like a contest',
          left: [
            'Set a timer for 18 minutes for all eight, about the pace of a real Gauss. Mark your answers with the contest marks: 5 for problems 1 to 3, 6 for 4 to 6, 8 for 7 and 8, and 2 for any blank.',
            'Then check the solutions, and for every one you missed, write a single sentence about what you would try first next time.'
          ],
          rightH3: 'The habits inside them',
          right: [
            'Pairing (problem 1), pretending a price is 100 (problem 3), choosing sides instead of counting shapes (problem 4) and starting with small cases (problems 7 and 8) all come back on real papers.',
            'None needs math beyond Grade 8. They need the patience to organize the work, which is what Gauss is really testing.'
          ] }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'Math meets code',
      h2: 'Checking a Gauss answer with a few lines of Python',
      lede: 'We are a coding and math school, and in Grades 7 and 8 the two meet naturally. Ontario\'s 2020 math curriculum already includes coding, so many Grade 7 and 8 students write small programs in math class. Below are two short programs of ours that check our answers by brute force. They are for practice at home, never for contest day: the contest is pencil, paper and thinking.',
      body: [
        { kind: 'code', label: 'Checking practice problem 4 &middot; our Python program', lang: 'python', code: RECT, note: 'The four nested loops choose a left side, a right side further along, a top and a bottom further down, exactly the reasoning in the written solution. Run it and it prints 18. Change the 4 and the 3 to count the rectangles in any other grid.' },
        { kind: 'code', label: 'Checking practice problem 8 &middot; our Python program', lang: 'python', code: STAIRS, note: 'The list grows by adding its last two numbers, the same rule as in the solution, and prints 89. Both programs ran under Python 3 on 22 October 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Why a program helps a math student',
          left: [
            'Writing the check forces the student to say exactly what is being counted. A program that prints 17 for the rectangles is as useful as one that prints 18: it shows the counting rule was wrong.',
            'Ontario\'s Grade 7 math expectations mention code with "a defined count and/or subprogram", and Grade 8 adds code that involves "the analysis of data". A brute-force check is a natural first use of both.'
          ],
          rightH3: 'Where the contest draws the line',
          right: [
            'CEMC\'s calculator rules exclude devices holding stored programs or notes, so a program like this is a study tool, not a contest tool. On the day, the paper rewards the reasoning.',
            'Students who enjoy this side can also try CEMC\'s Beaver Computing Challenge, whose questions, CEMC says, "only require familiarity with concepts covered in the mathematics curriculum".'
          ] }
      ]
    },
    {
      id: 'bands', tint: 'tint', eyebrow: '2026 results',
      h2: 'What Gauss 2026 scores looked like, by CEMC\'s mark bands',
      lede: 'CEMC\'s 2026 Gauss results booklet groups scores into bands for each grade. CEMC adds a caveat that matters: the statistics cover online writers and paper schools that sent results through CEMC\'s results form, so they "do not represent all contest participants."',
      body: [
        { kind: 'table', caption: 'Gauss 2026 mark bands, from CEMC\'s 2026 Gauss Results booklet (statistics for represented students only)', head: ['Marks out of 150', 'Grade 7: students (approx. %)', 'Grade 8: students (approx. %)'], rows: [
          ['136 to 150', '527 (2.19%)', '721 (3.49%)'],
          ['121 to 135', '1488 (6.17%)', '1541 (7.45%)'],
          ['106 to 120', '3032 (12.58%)', '2573 (12.45%)'],
          ['91 to 105', '5708 (23.68%)', '4866 (23.54%)'],
          ['76 to 90', '5925 (24.58%)', '5072 (24.53%)'],
          ['61 to 75', '4124 (17.11%)', '3306 (15.99%)'],
          ['60 and below', '2556 (10.60%)', '2095 (10.13%)'],
          ['Average', '85.3', '87.4'],
          ['Schools and students represented', '1433 schools, 24102 students', '1286 schools, 20675 students']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, labelled as ours. The busiest band in both grades was 76 to 90 marks, with 91 to 105 close behind. The top band, 136 to 150, held only 2.19% of represented Grade 7 writers and 3.49% of Grade 8 writers, so a near-perfect Gauss is genuinely rare. A Grade 7 student who scores in the 90s on a first Gauss has done what most of the country\'s writers did, and that is a sound start. CEMC prints the total number of students represented across both grades as 44777.' },
        { kind: 'table', mt: true, caption: 'Students registered for the 2026 Gauss Contests by province and territory, from CEMC\'s 2026 Gauss Results booklet', head: ['Where', 'Students registered'], rows: [
          ['Ontario', '43271'], ['British Columbia', '12072'], ['Alberta', '6756'], ['Quebec', '3524'],
          ['Nova Scotia', '2030'], ['Manitoba', '1607'], ['New Brunswick', '601'], ['Prince Edward Island', '279'],
          ['Saskatchewan', '181'], ['Newfoundland and Labrador', '132'], ['Yukon, Northwest Territories, Nunavut', '45, 35 and 10'],
          ['Outside Canada', '8869'], ['Total, as CEMC prints it', '79412']
        ] },
        { kind: 'source', html: 'Source: CEMC\'s 2026 Gauss Results booklet, linked from the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/gauss" rel="noopener" target="_blank">Gauss page</a>, read 22 October 2026. The registered total and the represented total are CEMC\'s own figures for different groups, and we have not combined or compared them.' }
      ]
    },
    {
      id: 'awards', tint: 'deep', eyebrow: 'Certificates',
      h2: 'Gauss certificates: what each one means',
      lede: 'Gauss awards are mostly decided within each school, which surprises families used to national rankings. CEMC lists three certificates and no team competition.',
      body: [
        { kind: 'table', caption: 'Gauss awards, as listed on CEMC\'s Gauss page (read 22 October 2026)', head: ['Award', 'Who receives it, in CEMC\'s words'], rows: [
          ['Certificate of Participation', '"A Certificate of Participation is provided for each participant."'],
          ['Certificate of Distinction', 'Each participant "scoring in the top 25% of all participants within their own school, for schools with at least 4 participants"'],
          ['Certificate of Outstanding Achievement', '"the highest achieving participant in their school on each of the Grade 7 and 8 Contests, for schools with at least 10 participants"'],
          ['Team awards', '"There is no Team Competition for these contests."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading a certificate fairly',
          left: [
            'Because the Distinction certificate is the top quarter within one school, the score it takes depends on the school. In a school with many strong writers it is harder to earn; in a small group it may be easier.',
            'That is a reason to look at the score itself, and at what the student tried, rather than only at the certificate.'
          ],
          rightH3: 'What CEMC says the contest is for',
          right: [
            'CEMC states that "the goal of our contests is to increase curiosity and foster problem solving skills among participants." It adds that nobody passes or fails one of its contests.',
            'We take that seriously in our Gauss classes. The aim is a student who enjoys a hard question, not one who is anxious about a certificate.'
          ] }
      ]
    },
    {
      id: 'entry', tint: 'tint', eyebrow: 'Entry',
      h2: 'How a Grade 7 or 8 student enters the Gauss',
      lede: 'CEMC accepts entries only from schools, so a family cannot sign a child up directly. Gauss adds one practical detail: a school order must be for at least ten contests.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask the class teacher or the school\'s math lead in the winter.</b> Not every school orders CEMC contests, so the first step is finding out whether yours will.',
          '<b>Mention the ten-contest minimum.</b> Because CEMC asks for "a minimum order requirement of 10 contests", a teacher may want to gather a group. A family offering to find interested classmates can make the order easier.',
          '<b>New schools need an account.</b> A school that has never ordered applies for a CEMC school account, which CEMC reviews by hand over as long as three weeks, before the Thursday, April 22, 2027 deadline.',
          '<b>If your school declines,</b> CEMC suggests asking another nearby school whether your child may write with them.',
          '<b>Online writers can rehearse.</b> CEMC says "The Gauss Online Practice Contest will be available in April", using questions from the previous year\'s contests.'
        ] },
        { kind: 'p', mt: true, html: 'We prepare students; we cannot enter them or run the sitting, which always happens at the school. CEMC\'s full process is on its <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> page.' }
      ]
    },
    {
      id: 'term', tint: 'deep', eyebrow: 'The plan',
      h2: 'A plan from January to the May 2027 Gauss window',
      lede: 'Our plan for a Grade 7 or 8 student who starts in January 2027 and writes in the 10 to 21 May window. Students who start in November simply have more time on the first term. It assumes two live classes a week.',
      body: [
        { kind: 'three', cells: [
          { h3: 'January and February 2027', p: 'Number sense and Part A speed: fractions, decimals, percent, ratio and order of operations, with pairing and "pretend it is 100" tricks. Our problems 1 to 3. One untimed past Gauss each month.' },
          { h3: 'March 2027', p: 'Geometry and measurement: angles, area, perimeter and simple 3-D shapes, always with a drawing. Our problem 5. Part B questions from past papers, timed at three minutes each.' },
          { h3: 'April 2027', p: 'Counting and patterns: organized lists, choosing sides and corners, small cases first. Our problems 4, 6, 7 and 8, and the two Python checks. Online writers try the Gauss Online Practice Contest.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>By Thursday, April 22, 2027:</b> confirm with the school that its order is in.',
          '<b>The week before the school\'s day:</b> two full 60-minute past papers in contest conditions, each marked with 5, 6, 8 and blank-2, then reviewed question by question.',
          '<b>Contest week, between Monday 10 and Friday 21 May 2027:</b> nothing new, an early night, and then the paper itself, at school, on whichever day the teacher has picked.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 6, writing early', p: 'CEMC welcomes motivated younger students. Aim for Part A and a few Part B questions; the habits matter more than the score.' },
          { h3: 'Grade 7, first contest', p: 'The full plan. A strong first Gauss finishes Part A cleanly and makes real attempts at Part B.' },
          { h3: 'Grade 8, second Gauss', p: 'Start from last year\'s mistakes. The target is Part C, where the 8-mark questions are.' }
        ] }
      ]
    },
    {
      id: 'year', tint: 'tint', eyebrow: 'The Grade 7 and 8 year',
      h2: 'Gauss among CEMC\'s activities for Grades 7 and 8',
      lede: 'Gauss is the main individual math contest CEMC offers in Grades 7 and 8, but not the only activity. The table is from CEMC\'s pages and our facts file; the advice column is ours.',
      body: [
        { kind: 'table', caption: 'CEMC activities open to Grade 7 and 8 students in 2026 to 2027 (Americas dates, read 22 October 2026)', head: ['Activity', 'When', 'What CEMC says', 'Our advice'], rows: [
          ['Beaver Computing Challenge, Grade 7/8', 'Monday, November 9 to Friday, November 20, 2026', 'For students in "Grade 8 or below"; 15 multiple-choice questions out of 90 in 45 minutes; the questions "only require familiarity with concepts covered in the mathematics curriculum"', 'A gentle first contest for a student who likes puzzles and code'],
          ['Gauss Contests', 'Monday, May 10 to Friday, May 21, 2027', '25 multiple-choice questions, 60 minutes, out of 150', 'The main event of the year for a Grade 7 or 8 math student'],
          ['Team Up Challenge', 'Tuesday, June 1, 2027 or later', 'A collaborative resource for "Grades 6 to 8", with four students working together', 'A good end-of-year group activity if the teacher orders it'],
          ['Pascal Contest (in Grade 9)', 'February of the Grade 9 year', 'CEMC opens Pascal to Grade 9 students, and to keen younger ones', 'The next step: same shape as Gauss, high school math']
        ] },
        { kind: 'p', mt: true, html: 'A Grade 8 student who enjoys Gauss will find the Grade 9 Pascal Contest familiar: twenty-five questions, sixty minutes, the same marking and the same blank rule on the 2025 papers. The big change is Part C, where Pascal asks for a whole number instead of a letter. Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests overview</a> sets out every contest from Gauss to Euclid.' }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Free practice',
      h2: 'Past Gauss papers and the Problem Set Generator',
      lede: 'CEMC gives away a decade of old Gauss papers with solutions, and a tool that builds new practice sets from them. We send students to the originals and never copy them onto our pages.',
      body: [
        { kind: 'two',
          leftH3: 'Past papers',
          left: [
            'CEMC\'s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">past contests page</a> has Gauss papers, solutions and results by year, filtered by grade. A Grade 7 student should practise on Grade 7 papers first, then try a Grade 8 paper for stretch.',
            'We use one untimed paper a month from January, then two timed ones just before the school\'s chosen day.'
          ],
          rightH3: 'Problem Set Generator',
          right: [
            'The <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/problem-set-generator" rel="noopener" target="_blank">Problem Set Generator</a> builds sets from "past Gauss, Pascal, Cayley, and Fermat Contests", by topic or as a mock paper.',
            'It is ideal for a weak spot: a student who keeps missing geometry questions can ask for Part A geometry from past Gauss papers and do a set in twenty minutes.'
          ] },
        { kind: 'p', mt: true, html: 'Our one rule with any past paper: try every question properly before opening the solution, and afterwards explain the official solution in your own words. The <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a> covers the school math behind the questions, lesson by lesson, if a gap shows up.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four steps from school math to a strong Gauss',
    lede: 'The four rungs our teachers use to place a Grade 7 or 8 student on day one.',
    table: { caption: 'Gauss readiness (ours)', head: ['Step', 'What it looks like'], rows: [
      ['1. Calculator habit', 'Reaches for the calculator first and has not seen a contest question'],
      ['2. Number confident', 'Does fractions, percent and ratio in their head and finishes Part A'],
      ['3. Picture drawer', 'Draws, lists and tries small cases on Part B without being told to'],
      ['4. Pattern spotter', 'Finds the trick in some Part C questions, like the staircase or the pairs']
    ] },
    left: { h3: 'For parents', ps: [
      'Most Grade 7 students start at step 1 or 2. Moving to step 3 is the biggest change, and it comes from practice with a teacher who asks "what could you draw?"',
      'Gauss is a good first contest because it is low-stakes. Treat the result as information, not a verdict.'
    ] },
    right: { h3: 'For students', ps: [
      'If a question looks too big, make it smaller: 10 steps becomes 3 steps, 2027 becomes 5.',
      'Draw something for every geometry question, even a rough sketch.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine courses for a Grade 7 or 8 student',
    lede: 'Live online classes with a regular teacher, in a small group or one to one, for students in every province and territory.',
    bands: [
      { num: 'I', h3: 'Math foundations', sub: 'Grades 5 to 8', courses: [
        { code: 'GCP / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra and equations, ready for Grade 9.' },
        { code: 'GCP / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense without tricks, for younger students.' },
        { code: 'GCP / BASE / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'For younger siblings in Grades 1 to 5.' }
      ] },
      { num: 'II', h3: 'Problem solving', sub: 'Contest habits', courses: [
        { code: 'GCP / STEP / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Logic and patterns, with and without code.' },
        { code: 'GCP / STEP / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Check a count with Python, as on this page.' },
        { code: 'GCP / STEP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'For strong Grade 8 students heading for Pascal.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Ages 9 to 14', courses: [
        { code: 'GCP / CODE / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'First real programs, games and turtle art.' },
        { code: 'GCP / CODE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A first compiled language, puzzles included.' },
        { code: 'GCP / CODE / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For Grade 8 students ready for more.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class format',
    h2: 'How live Gauss classes work for Grades 7 and 8',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school groups, set in Eastern time and shown in yours.' },
      { time: 'Weekends', l: 'Weekend morning classes, away from homework nights.' },
      { time: '1-on-1', l: 'At a time that suits the family, planned to the May window.' }
    ],
    cells: [
      { h3: 'Problems we write', p: 'Fresh Gauss-style sets every week, beside CEMC\'s papers.' },
      { h3: 'Draw, list, try small', p: 'The three habits taught in every class.' },
      { h3: 'Math and code', p: 'Short Python checks for students who enjoy them.' },
      { h3: 'Timed papers in May', p: 'Two full papers before the school\'s chosen day.' },
      { h3: 'Every province', p: 'Grade 7 and 8 students from across Canada.' },
      { h3: 'Group or private', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our younger students build',
  projectsLede: 'Our Grade 7 and 8 students code as well as solve. A few of their projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' words from Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The school pays CEMC for the contest itself. Our fee is for the classes only, charged each month, and ends whenever you say, the May 2027 window included.',
    free: ['A free first class', 'Three Gauss-style questions together', 'No card needed'],
    group: ['A group of fifteen to twenty', 'Grades 7 and 8 together', 'Choose a batch time', 'Monthly billing'],
    one: ['One student, one teacher', 'Planned to the May window', 'Built around your child\'s pace']
  },

  faq: {
    eyebrow: 'Grade 7 and 8 families ask',
    h2: 'Gauss Contest: frequently asked',
    items: [
      { q: 'What is the Gauss Contest?', a: 'The Gauss Contests are CEMC\'s math contests for Grades 7 and 8, from the University of Waterloo. There is one paper for each grade, each with 25 multiple-choice questions, 60 minutes and a score out of 150.' },
      { q: 'When is the Gauss Contest in 2027?', a: 'CEMC lists a window from Monday, May 10, 2027 to Friday, May 21, 2027, the same inside and outside the Americas. Each school runs it on a day it chooses within those two weeks, and must order by Thursday, April 22, 2027.' },
      { q: 'Can a Grade 6 student write the Gauss?', a: 'Yes. Younger students who are keen may write too, CEMC says. A student writes one Gauss paper per school year, and may choose a higher grade\'s paper but not a lower one.' },
      { q: 'How is the Gauss Contest scored?', a: 'Going by the 2025 covers: 5 marks a question in Part A, 6 in Part B, 8 in Part C, nothing taken off for errors, and 2 marks for each blank up to ten blanks. All 25 questions had five lettered options.' },
      { q: 'Who marks the Gauss Contest?', a: 'Paper contests are marked at the school using a marking template from CEMC; online contests are marked on CEMC\'s platform. CEMC emails the results to the school\'s contest supervisor in the weeks after the contest.' },
      { q: 'What certificates can a Gauss student earn?', a: 'CEMC gives every participant a Certificate of Participation. The top 25 percent within each school, in schools with at least 4 participants, receive a Certificate of Distinction, and the top scorer on each grade\'s contest in schools with at least 10 participants receives a Certificate of Outstanding Achievement.' },
      { q: 'What was the Gauss average in 2026?', a: 'CEMC\'s 2026 results booklet gives an average of 85.3 for Grade 7 and 87.4 for Grade 8, out of 150. CEMC notes these figures cover only the students whose results it received, not every participant.' },
      { q: 'How does my child enter the Gauss?', a: 'Only through the school: CEMC takes orders from schools, never from families, and a Gauss order must cover at least ten contests. If the school declines, ask a nearby school whether your child can write there.' },
      { q: 'Where can we find past Gauss papers?', a: 'On CEMC\'s past contests page, free, with solutions, and through CEMC\'s Problem Set Generator, which builds practice sets from past Gauss questions. Our own practice problems are written by our teachers.' },
      { q: 'When are your Gauss classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We arrange times in Eastern time and show each family the time in its own province.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families with a Grade 7 or 8 student who likes math or code.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Every CEMC math contest from Gauss to Euclid.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Help with the school course itself.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our main page for Canadian families.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'CEMC\'s programming contest, for later grades.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Other contests at this age.' },
      { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math tutoring', p: 'Grade 7 math, one topic at a time.' },
      { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math tutoring', p: 'Grade 8 math, ready for high school.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The American middle school contest.' },
      { href: '/coding-vs-maths', label: 'Coding or math?', p: 'For students who enjoy both.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class works through three Gauss-style questions we wrote, with the teacher asking your child to draw, list and try small cases. Afterwards you hear which of the four steps they are on and how we would use the months to May 2027.',
    readFirst: 'Want to see more first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the <a class="ag-inline-link" href="/courses">full list of courses</a>.',
    note: 'Classes are live on video with teachers based in India, so nobody needs to travel. For the quickest reply from anywhere in Canada, message us on WhatsApp.',
    formNote: 'The first class is free. We do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school contests' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Make it smaller first'
  },

  personalityCss: `
.ag-root.ag-gcp .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-gcp .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-gcp .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-gcp .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-gcp .ag-band-head h3 { letter-spacing: -0.002em; }
.ag-root.ag-gcp .ag-slots { gap: 1.4rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Gauss page, contests table, How contests work and Problem Set Generator, read raw on 22 October 2026; the covers of the 2025 Grade 7 and Grade 8 Gauss booklets (rules only, no problems); the 2026 Gauss Results booklet (mark bands, averages, represented and registered students): 2027 window Monday, May 10 to Friday, May 21, 2027; ordering deadline Thursday, April 22, 2027; Grades 7 and 8; 25 questions, 60 minutes, out of 150; paper or online; marked at school with a template; certificates of Participation, Distinction and Outstanding Achievement; no team competition; minimum order of 10; Online Practice Contest in April; 2026 averages 85.3 and 87.4 with CEMC\'s caveat. Ontario Grade 7 and 8 coding expectations and Beaver Computing Challenge facts from facts-schools-contests.md.',
    localProject: 'Eight original Gauss-style multiple-choice problems written by us with full solutions checked in Python (alternating sum to 2027, flour and milk ratio, two successive discounts, rectangles in a 2 by 3 grid, angles in ratio 2 : 3 : 4, multiples of 6 but not 4 below 200, staircase figures past 200 squares, 1-or-2-step stairs to 10); two runnable Python check programs; a January to May 2027 plan; our reading of CEMC\'s bands, with no percentages added together. Lesson family: organized counting, checked by a short program.',
    requiredMentions: ['Monday, May 10, 2027 to Friday, May 21, 2027', 'Thursday, April 22, 2027', 'The Grade 8 Contest is on the reverse side', 'All paper contests are marked in the school', 'Certificate of Outstanding Achievement', 'There is no Team Competition for these contests', 'minimum order requirement of 10 contests', 'held only 2.19% of represented Grade 7 writers', 'Gauss practice 8', 'print(ways[10])', 'Make it smaller first'],
    sources: [
      { claim: 'Gauss 2027 window and deadline, audience, format, paper or online, calculators, content, practice contest, marking at school, results by email, fee and minimum order, certificates, no team competition, CEMC\'s stated goal.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'Grade 8 paper on the reverse of the Grade 7 paper; multiple-choice format; scoring 5, 6, 8, no penalty, blank 2 up to 10; sixty minutes of working time.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.pdf' },
      { claim: '2026 Gauss mark bands, averages 85.3 and 87.4, represented and registered students, CEMC caveat.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026%20Gauss%20Results%20Booklet.pdf' },
      { claim: 'Contest languages and the Team Up Challenge date and audience.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Students registered by their school; Grade 7 and Grade 8 Gauss as a one-per-year grouping.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Problem Set Generator draws on past Gauss contests.', url: 'https://cemc.uwaterloo.ca/resources/problem-set-generator' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution: never reproduced; all eight problems are ours.',
      'Combining or comparing the 79412 registered and 44777 represented students: not done; both are printed as CEMC\'s own figures for different groups.',
      'Treating the 2026 averages as covering every writer: refused; CEMC\'s caveat is printed with them.',
      'Using code or programs on contest day: not suggested; the Python checks are labelled as home study tools.',
      'That our classes raise scores or win certificates: refused.',
      'The CEMC fee as a typed figure, and the tax rates CEMC lists: written in words or omitted.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
