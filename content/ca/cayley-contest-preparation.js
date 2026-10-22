'use strict';
// Cayley Contest preparation (ag- contest door; Canada cluster Plan 2, row 45). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the CAYLEY CONTEST (Grade 10, CEMC, University of Waterloo) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/cayley-contest-preparation/):
//  - cemc.uwaterloo.ca/contests/pcf (pcf.txt): "Students in Grade 10 are eligible to write the Cayley Contest.";
//    "The Cayley Contest may be written by any participant in Grade 10 or below."; "Exceptional participants may elect
//    to write a contest beyond their actual grade level."; Americas dates Tuesday, February 23, 2027 and Wednesday,
//    February 24, 2027; Canadian ordering deadline Tuesday, February 9, 2027 (en dash in the source not reproduced);
//    25 questions, 60 minutes, out of 150; Part C "a whole number from 0 to 99"; "Some calculators permitted."; content
//    "based on curriculum common to all Canadian provinces"; 2026 Cayley mean 90.0, Certificate of Distinction cutoff
//    106, School Medal Champion cutoff 90, contestants 19 953 (Pascal and Fermat figures not used, never summed).
//  - 2025 Cayley Contest booklet (2025CayleyContest.pdf, front cover and Part C note only; NO problem reproduced):
//    "Part A and Part B of this contest are multiple choice."; "The correct answer to each question in Part C is an
//    integer from 0 to 99, inclusive."; "Note: The integer formed by the rightmost two digits of 12 345 is 45."; "The
//    integer formed by the rightmost two digits of 6307 is 7, coded 07."; scoring 5, 6, 8, "There is no penalty for an
//    incorrect answer."; "Diagrams are not drawn to scale. They are intended as aids only."; "You may use rulers,
//    compasses and paper for rough work."
//  - 2026 PCF Results booklet (2026_PCF_Results.pdf), Cayley statistics page: "Number of Contestants / Nombre de
//    concurrents: 16368", "Average mark / Note moyenne: 90.66"; share choosing the correct option Q1 97.89, Q9 59.6,
//    Q13 53.81, Q16 45.14, Q18 19.42, Q19 22.49, Q20 20.33; Part C share giving the correct answer Q21 53.55, Q22 14.72,
//    Q23 13.28, Q24 1.92, Q25 2.11; % not attempted Q18 35.04, Q19 44.43, Q20 42.85, Q21 24.1, Q22 32.99, Q23 67.9,
//    Q24 74.79, Q25 80.47; on Q22 the most popular answer (15.51%) was not the correct one. No answer is printed.
//  - cemc.uwaterloo.ca/resources/problem-set-generator: Topic generator "Randomly chooses up to 30 problems according to
//    contest, level of difficulty (Part A/B/C), and topic."
//  - cemc.uwaterloo.ca/contests/fgh: "Students in Grade 10 are eligible to write the Galois Contest."; Wednesday, April
//    7, 2027 in the Americas; ordering deadline Thursday, March 11, 2027; "4 questions; a mix of final answer-only and
//    full-solution."; 75 minutes; out of 40.
//  - cemc.uwaterloo.ca/contests/csimc: "Students in Grades 9 and 10 are eligible to write the CIMC."; "North and South
//    America: Wednesday, November 18, 2026"; ordering deadline "Thursday, October 22, 2026"; "9 questions; 6 are answer
//    only and 3 are full-solution."; "Time allowed for completion is 2 hours."; "Most of the CIMC problems are based on
//    mathematical topics commonly taught up to and including Grade 10."
//  - cemc.uwaterloo.ca/contests/how-contests-work: "Each year, educators order CEMC contests for over 300 000 students
//    worldwide"; account review by the CEMC; "Participants may only write the contest at the school which ordered the
//    contest."; "Only permitted aids indicated on the Contest Question Booklet or Supervisor Instructions Document may be
//    used while writing the contest."
//  - facts-schools-contests.md rows 38 and 41 (Ontario MPM2D "Principles of Mathematics", Grade 10 Academic, 2005;
//    prerequisite for MCR3U) and 72 (BC "Foundations of Mathematics and Pre-calculus 10").
// Our own material, labelled on the page: the eight practice problems and solutions (answers checked by brute force in
// Python on 22 October 2026), the five-check routine for Part C answers, the topic table, the countdown plan, and the
// share 106 / 150 = about 71 percent.
// Lesson family: checking an answer when there are no options to compare against.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const P7 = `3^10 = 59049, so 1 + 3^10 = 59050

Pair each term with the one ten places later:
  3^1  + 3^11 = 3^1  x 59050
  3^2  + 3^12 = 3^2  x 59050
  ...
  3^10 + 3^20 = 3^10 x 59050

An odd number times 59050 ends in 50.
Ten numbers that each end in 50 add to a number ending in 00.
Rightmost two digits: 00, so the answer is 0, coded 00.`;

const P8 = `Largest side c, with a <= b <= c, a + b + c = 30 and a + b > c
a + b > c means 30 - c > c, so c < 15; and c >= 10, as c is the largest

c = 10   a + b = 20   (10,10)                    1
c = 11   a + b = 19   (9,10) (8,11)              2
c = 12   a + b = 18   b from 9 to 12             4
c = 13   a + b = 17   b from 9 to 13             5
c = 14   a + b = 16   b from 8 to 14             7
                                        total   19`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CEMC\'s Grade 10 Cayley Contest for 2027: the paper, the Part C answer rule, 2026 question statistics, eight original problems with worked solutions and a countdown plan.' },
  slug: 'cayley-contest-preparation',
  code: 'ccp',
  accent: '#4C300B',
  accentRationale: 'Cayley Contest preparation, Canada: a deep walnut #4C300B, allocated for row 45; measured 6.0 RGB units (Euclidean) from the nearest site accent and 26.9 from the nearest other Canada accent; contrast 11.42 on the paper #FBF8F2, 10.74 and 9.82 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Cayley Contest preparation',
  title: 'Cayley Contest 2027 (Grade 10): Paper, Results, Practice',
  description: 'The Waterloo Cayley Contest for Grade 10 in 2027: the paper, the Part C answer rule, what 2026 writers got right, eight original problems and a countdown plan.',
  ogDescription: 'The Grade 10 Cayley Contest from CEMC runs on Tuesday 23 or Wednesday 24 February 2027 in the Americas. How the paper works, how to check a Part C answer, 2026 statistics and eight practice problems.',
  twitterDescription: 'Cayley Contest 2027 for Grade 10: the paper, 2026 results and eight original practice problems.',
  pageName: 'Cayley Contest Preparation',
  webPageDescription: 'A guide for Grade 10 students in Canada and their parents to the University of Waterloo CEMC Cayley Contest, built from CEMC\'s 2027 contest page, the 2025 Cayley booklet cover and the 2026 results booklet, with original practice problems and a countdown plan.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests from Gauss to Euclid, including the Grade 10 Cayley and Galois contests, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Cayley Contest',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#paper', label: 'The paper' },
    { href: '#partc', label: 'Part C' },
    { href: '#practice', label: 'Eight problems' },
    { href: '#results', label: '2026 figures' },
    { href: '#countdown', label: 'Countdown' }
  ],
  eyebrow: 'Canada &middot; University of Waterloo CEMC &middot; Grade 10',
  h1: 'Cayley Contest preparation for Grade 10',
  lede: 'The Cayley Contest is the Grade 10 paper among the Waterloo math contests, written each February in schools across Canada and abroad. It sits between Pascal in Grade 9 and Fermat in Grade 11 and looks exactly like them: an hour, twenty-five questions, multiple choice until the last five. What changes is the math, which now reaches quadratics, coordinate geometry and similar triangles, and the final five questions, where there are no options to fall back on. This guide is drawn from the University of Waterloo CEMC Cayley pages for 2027, the cover of the 2025 Cayley booklet and the 2026 results booklet, and it adds eight problems of our own with every step of the solution shown.',
  secondaryCta: { href: '#practice', label: 'Work the eight problems' },
  wa: 'Hello Modern Age Coders, my child is in Grade 10 and plans to write the Cayley Contest in February 2027. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students taught &middot; problems on this page are our own, written for Grade 10',
  spec: [
    ['Set by', 'CEMC at the University of Waterloo'],
    ['Grade', '10, or below'],
    ['When', 'Tue 23 or Wed 24 February 2027, Americas'],
    ['Length', 'One hour'],
    ['Questions', '20 with options A to E, then 5 with a number answer'],
    ['Marks', '150 in total'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'The answer in brief',
  capsule: 'The Cayley Contest is the University of Waterloo CEMC math contest for Grade 10: one hour, 25 questions, 150 marks, written at school in a two-day window, Tuesday 23 or Wednesday 24 February 2027 in the Americas. Entry is only through the school. Modern Age Coders runs live online Cayley preparation, in a batch or one to one, inside its Waterloo Math Contests course, Gauss to Euclid.',

  picks: {
    eyebrow: 'Teaching for Grade 10',
    h2: 'The three courses a Cayley student usually takes',
    lede: 'One is built for the Waterloo contests themselves. One is for the student who wants the hardest questions on the paper. One makes sure the Grade 10 curriculum underneath is solid.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'CCP / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18, with a track for Grades 9 and 10. Two live classes a week, written solutions and timed rounds, aimed at the February 2027 Cayley and the April Galois.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'CCP / 02', title: 'Competition mathematics', note: 'Number theory, counting and geometry beyond the school course, for students chasing questions 21 to 25.' },
      { course: 'algebra-foundations-masterclass', code: 'CCP / 03', title: 'Algebra foundations', note: 'Factoring, equations and linear relations made automatic, so a Grade 10 student has time left for the ideas.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The 2027 paper',
      h2: 'Cayley 2027: who writes it, when, and in what form',
      lede: 'CEMC prints the details for Pascal, Cayley and Fermat on a single page. The rows below are the Cayley ones, as that page and the 2025 Cayley booklet showed them on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'The Cayley Contest, from CEMC\'s contest page and the 2025 Cayley booklet cover (both read 22 October 2026)', head: ['Question families ask', 'The published answer', 'Where it comes from'], rows: [
          ['Who is it for?', '"Students in Grade 10 are eligible to write the Cayley Contest." Officially, it "may be written by any participant in Grade 10 or below."', 'CEMC contest page'],
          ['When in 2027?', 'Tuesday, February 23, 2027 or Wednesday, February 24, 2027 in North and South America; the school runs it on one of the two days.', 'CEMC contest page'],
          ['Deadline for the school?', 'Tuesday, February 9, 2027 for schools in Canada.', 'CEMC contest page'],
          ['How long, how many?', 'Sixty minutes for twenty-five questions, marked out of 150.', 'CEMC contest page'],
          ['What kind of answers?', '"Part A and Part B of this contest are multiple choice." In Part C, "The correct answer to each question in Part C is an integer from 0 to 99, inclusive."', '2025 Cayley booklet'],
          ['Is guessing punished?', '"There is no penalty for an incorrect answer." Right answers earn 5, 6 or 8 marks by part, and a blank earns 2, for at most ten blanks.', '2025 Cayley booklet'],
          ['What can be on the desk?', '"You may use rulers, compasses and paper for rough work." Some calculators are permitted; the rest of the aids rule is CEMC\'s.', '2025 booklet and contest page'],
          ['Paper or screen?', 'Either: the school decides when it orders, and in both cases the student writes at school, alone.', 'CEMC contest page'],
          ['What math does it use?', 'CEMC bases the questions on "curriculum common to all Canadian provinces".', 'CEMC contest page']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One of three, once a year',
          left: [
            'A student may write only one of Pascal, Cayley and Fermat in a school year. So a Grade 10 student cannot sit Cayley for the real result and Pascal for practice in the same February.',
            'A Grade 9 student who is far ahead may choose Cayley instead of Pascal; CEMC says "Exceptional participants may elect to write a contest beyond their actual grade level." The reverse is not allowed: a Grade 10 student cannot drop down to Pascal.'
          ],
          rightH3: 'Not the UK Cayley',
          right: [
            'The name is shared with a Cayley paper set by the UK Mathematics Trust, which is a different paper from a different organizer. Everything on this page is the Waterloo contest.',
            'Families who do mean the UK paper will find it on our <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">Cayley, Hamilton and Maclaurin page</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC, Pascal, Cayley and Fermat Contests</a> and CEMC\'s 2025 Cayley Contest booklet, front cover only, read 22 October 2026. We are an independent teaching company with no tie to CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'partc', tint: 'deep', eyebrow: 'The last five questions',
      h2: 'Part C on Cayley: an answer from 0 to 99, and no options to lean on',
      lede: 'In Parts A and B a student can test the five options, rule some out, or estimate their way to a letter. Part C takes that away. The answer is a whole number, and the 2025 booklet explains the convention used when a natural answer would be bigger than 99.',
      body: [
        { kind: 'table', caption: 'The Part C conventions, quoted from the 2025 Cayley booklet', head: ['Rule', 'Booklet wording'], rows: [
          ['Range', '"an integer from 0 to 99, inclusive"'],
          ['Large answers', '"The integer formed by the rightmost two digits of 12 345 is 45."'],
          ['Small answers', '"The integer formed by the rightmost two digits of 6307 is 7, coded 07."'],
          ['Marks', '8 for each correct Part C answer, the highest of the three parts']
        ] },
        { kind: 'table', mt: true, caption: 'Cayley 2026, Part C: share of contestants giving the correct answer and share leaving it blank, from CEMC\'s 2026 PCF Results booklet (Cayley statistics page: 16368 contestants, average mark 90.66). The answers themselves are not printed here.', head: ['Question', 'Correct answer given', 'Left blank'], rows: [
          ['21', '53.55%', '24.1%'],
          ['22', '14.72%', '32.99%'],
          ['23', '13.28%', '67.9%'],
          ['24', '1.92%', '74.79%'],
          ['25', '2.11%', '80.47%']
        ] },
        { kind: 'p', mt: true, html: 'One line in that booklet deserves a second look. On question 22 of the 2026 Cayley, the single most popular answer was a wrong one: 15.51% of contestants gave it, slightly more than the 14.72% who gave the correct answer. A wrong number written confidently in Part C earns nothing, and in 2026 more students did that on question 22 than got it right. That is what Part C asks of a student: to check an answer when no list of options can confirm it.' },
        { kind: 'ol', mt: true, items: [
          '<b>Put it back in.</b> If the question gives a condition, test your number against it. Roots go back into the equation; a count goes back into the rule.',
          '<b>Try a smaller case.</b> Shrink the question (20 terms to 4, 30 to 9) and solve the small version by listing. If your method gives the wrong small answer, it is wrong for the big one too.',
          '<b>Check size and parity.</b> Should the answer be even? Divisible by 3? Smaller than some obvious bound? A count of pairs that comes out odd when the pairs are symmetric is a warning sign.',
          '<b>Read the last line again.</b> Many Part C answers are "the rightmost two digits of" something, a sum, or a count of objects. Make sure the number you code answers that, and not a step on the way.',
          '<b>Code it correctly.</b> A one-digit answer needs a leading zero, so 7 is coded 07, and an answer of 0 is coded 00.'
        ] },
        { kind: 'p', mt: true, html: 'Those five checks are ours, not CEMC\'s. We teach them from the first week and use them on every Part C question in class, including the last three problems in the practice set below.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Eight practice problems',
      h2: 'Eight Cayley-style problems we wrote, with every step shown',
      lede: 'These are our practice problems, not CEMC problems. Our teachers wrote all eight for Grade 10 students, and nothing in them is taken or reworked from an old Cayley paper. Two are at Part A level, three at Part B level and three are Part C questions with an answer from 0 to 99. Every answer was confirmed by a brute-force check in Python before this page went up.',
      body: [
        { kind: 'p', html: '<b>Cayley practice 1</b> (our practice problem, not a CEMC problem; Part A standard). The line y = 3x - 6 meets the x-axis at P and the y-axis at Q. If O is the origin, what is the area of triangle OPQ? (A) 3 &nbsp;(B) 6 &nbsp;(C) 9 &nbsp;(D) 12 &nbsp;(E) 18' },
        { kind: 'p', html: '<b>Solution.</b> At P, y = 0, so 3x = 6 and P is (2, 0). At Q, x = 0, so Q is (0, -6). The triangle has a right angle at O, with legs of length 2 and 6, so its area is (2 x 6) / 2 = 6, answer (B). A length is never negative: the leg along the y-axis is 6, not -6.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 2</b> (our practice problem, not a CEMC problem; Part A standard). If x + y = 11 and x - y = 3, what is the value of x<sup>2</sup> - y<sup>2</sup>? (A) 24 &nbsp;(B) 30 &nbsp;(C) 33 &nbsp;(D) 36 &nbsp;(E) 49' },
        { kind: 'p', html: '<b>Solution.</b> There is no need to find x and y. Factor: x<sup>2</sup> - y<sup>2</sup> = (x + y)(x - y) = 11 x 3 = 33, answer (C). Check by solving: adding the equations gives 2x = 14, so x = 7 and y = 4, and 49 - 16 = 33. The factoring takes ten seconds, the solving a minute, and on a 60-minute paper that difference adds up.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 3</b> (our practice problem, not a CEMC problem; Part B standard). The product of two consecutive positive odd integers is 323. What is their sum? (A) 32 &nbsp;(B) 34 &nbsp;(C) 36 &nbsp;(D) 38 &nbsp;(E) 40' },
        { kind: 'p', html: '<b>Solution.</b> Call the even number between them n, so the odd integers are n - 1 and n + 1. Their product is n<sup>2</sup> - 1 = 323, so n<sup>2</sup> = 324 and n = 18. The integers are 17 and 19, and their sum is 2n = 36, answer (C). Check: 17 x 19 = 323. Choosing the middle number as the unknown turns a messy quadratic into a perfect square.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 4</b> (our practice problem, not a CEMC problem; Part B standard). A student 1.8 m tall stands 6 m from the foot of a lamp post. The student\'s shadow, cast by the lamp, is 3 m long on level ground. How tall, in metres, is the lamp post? (A) 3.6 &nbsp;(B) 4.8 &nbsp;(C) 5.4 &nbsp;(D) 6.0 &nbsp;(E) 7.2' },
        { kind: 'p', html: '<b>Solution.</b> The tip of the shadow is 6 + 3 = 9 m from the post. The light ray from the top of the post to the tip of the shadow passes over the student\'s head, so the small triangle (student and shadow) is similar to the large one (post and full distance). Heights compare as bases: h / 9 = 1.8 / 3, so h = 9 x 0.6 = 5.4, answer (C). The usual slip is using 6 m as the base of the large triangle, which gives 3.6, option (A).' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 5</b> (our practice problem, not a CEMC problem; Part B standard). How many three-digit positive integers have three odd digits that strictly increase from left to right, such as 139? (A) 6 &nbsp;(B) 10 &nbsp;(C) 20 &nbsp;(D) 60 &nbsp;(E) 125' },
        { kind: 'p', html: '<b>Solution.</b> The odd digits are 1, 3, 5, 7 and 9. Any choice of three different odd digits can be arranged in increasing order in exactly one way, so the count equals the number of ways to choose 3 digits from 5, which is (5 x 4 x 3) / (3 x 2 x 1) = 10, answer (B). Option (D), 60, counts every order instead of only the increasing one, and (E), 125, allows repeats.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 6</b> (our practice problem, not a CEMC problem; Part C standard). The equation x<sup>2</sup> - 24x + k = 0 has two different positive integer roots. How many different values can k take? Give a whole-number answer between 0 and 99.' },
        { kind: 'p', html: '<b>Solution.</b> If the roots are r and s, then r + s = 24 and rs = k. With r smaller than s and both positive, r can be 1, 2, 3 and so on up to 11 (r = 12 would make the roots equal). Each r gives a different product r(24 - r): 23, 44, 63, 80, 95, 108, 119, 128, 135, 140 and 143. That is 11 values, so the answer is 11. Check with the first value: x<sup>2</sup> - 24x + 23 = (x - 1)(x - 23), whose roots, 1 and 23, are different positive integers.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 7</b> (our practice problem, not a CEMC problem; Part C standard). Let S = 3 + 3<sup>2</sup> + 3<sup>3</sup> + ... + 3<sup>20</sup>. What is the integer formed by the rightmost two digits of S?' },
        { kind: 'code', label: 'Problem 7 &middot; our working', lang: 'text', code: P7, note: 'The answer is 0, coded 00. A zero answer makes students doubt themselves, so this is a good place to use check 2 from the list above: the sum 3 + 9 + 27 + 81 = 120 is a small version of the same idea, pairing 3 with 27 and 9 with 81, and it also ends in a zero.' },
        { kind: 'p', mt: true, html: '<b>Cayley practice 8</b> (our practice problem, not a CEMC problem; Part C standard). In how many ways can 30 be written as a + b + c, where a, b and c are positive integers with a &le; b &le; c, and a, b and c can be the side lengths of a triangle?' },
        { kind: 'code', label: 'Problem 8 &middot; our working', lang: 'text', code: P8, note: 'The answer is 19. The triangle condition only needs checking for the largest side, because if a + b is greater than c, the other two inequalities follow automatically. Fixing the largest side first and counting what remains is a method worth practising: it keeps a long count in order.' },
        { kind: 'two', mt: true,
          leftH3: 'Timing the set',
          left: [
            'Sixteen minutes for all eight matches the pace of a real Cayley. Part A problems should take a minute or two each, which leaves more time for the Part C ones.',
            'Mark yourself with the booklet\'s scale (5, 6, 8, and 2 for a blank) before checking the solutions, so the score means what a real Cayley score means.'
          ],
          rightH3: 'The ideas to carry forward',
          right: [
            'Choosing a good unknown (problem 3), factoring instead of solving (problem 2), and fixing the largest piece first (problem 8) all appear again and again in Fermat and Euclid.',
            'Problem 7 is the one to redo in a month. Pairing terms that sit a fixed distance apart is an idea students forget, and it unlocks whole families of last-two-digit questions.'
          ] }
      ]
    },
    {
      id: 'grade10', tint: 'deep', eyebrow: 'The math behind it',
      h2: 'What Grade 10 math the Cayley Contest draws on',
      lede: 'CEMC ties the questions to the math common to every province, not to one curriculum. Below is how we map that to the Grade 10 courses Canadian students actually take; the table is our own analysis.',
      body: [
        { kind: 'table', caption: 'Topics that carry a Cayley paper, and what we teach for each (ours, not a CEMC syllabus)', head: ['Topic', 'What it looks like on the paper', 'What we teach'], rows: [
          ['Quadratics', 'Factoring, roots, and the link between roots and coefficients', 'Sum and product of roots, so many questions need no formula at all'],
          ['Coordinate geometry', 'Lines, intercepts, midpoints, distances and areas on a grid', 'Sketching first, then one equation per fact'],
          ['Similar triangles', 'Shadows, ladders, nested shapes, scale', 'Marking matching angles before writing any ratio'],
          ['Algebraic manipulation', 'Expressions to simplify, identities like a difference of squares', 'Looking for the factored form the question is hiding'],
          ['Counting', 'Digits with rules, arrangements, selections', 'Choosing whether order matters before choosing a formula'],
          ['Number theory', 'Remainders, last digits, divisibility, often in Part C', 'Small cases by hand, then the pattern, then a proof of the pattern']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ontario and British Columbia',
          left: [
            'In Ontario, the Grade 10 academic math course is MPM2D, Principles of Mathematics, and it is the prerequisite for Grade 11 Functions (MCR3U). Its quadratics, analytic geometry and trigonometry of right triangles line up well with the Cayley paper.',
            'In British Columbia the Grade 10 course is Foundations of Mathematics and Pre-calculus 10. Students elsewhere in Canada meet similar content in their own Grade 10 course, which is why CEMC builds the paper on what the provinces share.'
          ],
          rightH3: 'Where school stops and the contest starts',
          right: [
            'Very little on a Cayley paper is outside the school course. What is outside is the way it is used: a school question tells you to factor, a contest question expects you to notice that factoring helps.',
            'That is why our classes spend less time on new content than families expect, and more on recognizing which tool a question needs.'
          ] }
      ]
    },
    {
      id: 'results', tint: 'tint', eyebrow: 'The 2026 figures',
      h2: 'How the 2026 Cayley went, in CEMC\'s numbers',
      lede: 'CEMC shows an average and two cutoffs on its contest page, and a table for every question in its results booklet. These are the Cayley rows only, read 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Cayley 2026 averages and cutoffs, from CEMC\'s contest page', head: ['Figure', 'Cayley 2026'], rows: [
          ['Average (mean)', '90.0 out of 150'],
          ['Certificate of Distinction cutoff', '106'],
          ['School Medal Champion cutoff', '90'],
          ['Number of contestants', '19 953']
        ] },
        { kind: 'table', mt: true, caption: 'Selected Cayley 2026 questions in Parts A and B: share of contestants choosing the correct option and share leaving it blank, from CEMC\'s 2026 PCF Results booklet. No answer letters are given.', head: ['Question', 'Chose the correct option', 'Left blank'], rows: [
          ['1', '97.89%', 'under 1%'],
          ['9', '59.6%', '7%'],
          ['13', '53.81%', '4.56%'],
          ['16', '45.14%', '13.17%'],
          ['18', '19.42%', '35.04%'],
          ['19', '22.49%', '44.43%'],
          ['20', '20.33%', '42.85%']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, labelled as ours: a Cayley writer in 2026 needed 106 for the Certificate of Distinction, about 71 percent of the 150 marks (106 / 150). The question table shows a pattern we see in class too. Students leave the end of Part B blank far more often than the start of Part C: in 2026, question 20 was left blank by 42.85% of the counted contestants, while question 21 was left blank by only 24.1%. Our explanation, which CEMC does not give, is that students who are short of time skip ahead to Part C\'s first question, which is often more approachable than the last questions of Part B. We teach students to look at question 21 before they get stuck on question 19.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC contest page, averages and cut-offs</a>, and the 2026 PCF Results booklet linked there. CEMC reminds schools that its contests have "no passing or failing score".' }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Getting a seat',
      h2: 'How a Grade 10 student gets into the Cayley Contest',
      lede: 'Only a school can order the paper. CEMC\'s own figure for how far this reaches: "Each year, educators order CEMC contests for over 300 000 students worldwide". A family\'s job is to make sure their child is one of them.',
      body: [
        { kind: 'two',
          leftH3: 'If the school already orders',
          left: [
            'Ask the math teacher in November 2026 whether Cayley will be ordered, on which of the two February days it will run, and whether the school has chosen paper or the online platform.',
            'The student then writes at that school on that day. CEMC\'s standards say "Participants may only write the contest at the school which ordered the contest."'
          ],
          rightH3: 'If it does not',
          right: [
            'A school without a CEMC account needs one, and CEMC reviews new applications by hand, which can take three weeks. That is a conversation for the head of math before the winter break.',
            'Where a school declines, CEMC points students to other local schools that might take them in for the sitting. A homeschooling family would take the same route; we found no separate home-education process on the CEMC pages we read.'
          ] },
        { kind: 'p', mt: true, html: 'On the day, the rules about aids come from the paper itself: CEMC says "Only permitted aids indicated on the Contest Question Booklet or Supervisor Instructions Document may be used while writing the contest." From CEMC\'s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> page, as it read on 22 October 2026.' }
      ]
    },
    {
      id: 'countdown', tint: 'tint', eyebrow: 'A countdown',
      h2: 'Counting back from the February 2027 Cayley',
      lede: 'Our plan, written as weeks before Tuesday 23 February 2027. A school that writes on Wednesday 24 February simply gains a day. It assumes two live classes a week from the start of November.',
      body: [
        { kind: 'table', caption: 'Our countdown to the 2027 Cayley Contest (a plan, not a CEMC schedule)', head: ['Weeks to go', 'Dates', 'Focus', 'Checkpoint'], rows: [
          ['16 to 13', '2 to 29 November 2026', 'Algebra fluency: factoring, identities, linear systems; Parts A and B of one past paper, untimed', 'Every Part A question attempted with working shown'],
          ['12 to 10', '30 November to 20 December 2026', 'Coordinate geometry and similar triangles; problems 1 and 4 above', 'A sketch drawn before every geometry answer'],
          ['9 to 8', 'The holiday fortnight, 21 December to 3 January', 'Holiday weeks: one Topic generator set a day, chosen by weak topic', 'A personal list of the five topics that cost the most marks'],
          ['7 to 5', '4 to 24 January 2027', 'Quadratics and roots, counting, last digits; problems 2 and 3, then 5, 6, 7 and 8', 'The five Part C checks used on every answer'],
          ['4 to 2', '25 January to 14 February 2027', 'Two full past papers under contest conditions, reviewed line by line', 'School order confirmed before Tuesday, February 9, 2027'],
          ['1', '15 to 22 February 2027', 'No new material: redo the questions missed in the timed papers', 'A calm, early night before the contest']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'First contest in Grade 10', p: 'Aim to finish Part A and most of Part B cleanly. Part C is a bonus this year.' },
          { h3: 'Wrote Pascal last year', p: 'Start from your Pascal mistakes list; the target is all of Part B and two Part C questions.' },
          { h3: 'Grade 9, writing up', p: 'Only if past Pascal papers feel easy. Spend the extra weeks on quadratics and similar triangles.' }
        ] }
      ]
    },
    {
      id: 'year', tint: 'deep', eyebrow: 'The Grade 10 contest year',
      h2: 'Cayley in a Grade 10 year: CIMC in November, Galois in April',
      lede: 'CEMC offers a Grade 10 student three individual math contests in 2026 to 2027. They test different things, and a student who writes all three gets a full picture of where they stand.',
      body: [
        { kind: 'table', caption: 'CEMC\'s individual math contests open to a Grade 10 student in 2026 to 2027 (dates for the Americas, from CEMC\'s pages read 22 October 2026)', head: ['Contest', 'Date', 'Shape, in CEMC\'s words', 'What it adds'], rows: [
          ['CIMC (Canadian Intermediate Mathematics Contest)', 'Wednesday, November 18, 2026', '"9 questions; 6 are answer only and 3 are full-solution." "Time allowed for completion is 2 hours."', 'An early full-solution taste; CEMC says most problems use topics "commonly taught up to and including Grade 10"'],
          ['Cayley', 'Tuesday 23 or Wednesday 24 February 2027', 'Multiple choice and number answers, one hour', 'Speed and range across the Grade 10 course'],
          ['Galois', 'Wednesday, April 7, 2027', '"4 questions; a mix of final answer-only and full-solution."; 75 minutes, marked out of 40', 'Written explanations, marked for how clearly the reasoning is set out']
        ] },
        { kind: 'p', mt: true, html: 'The CIMC ordering deadline on CEMC\'s page was Thursday, October 22, 2026, the day this page was written, so most families reading it now will plan around Cayley and Galois. For a student who likes Cayley, Galois is the more important second contest: the same grade, the same curriculum, but every step of the working is read by a marker. After Grade 10 come Fermat and Hypatia in Grade 11, and the Euclid in the final year, which our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests overview</a> covers alongside the rest of the family.' }
      ]
    },
    {
      id: 'archive', tint: 'tint', eyebrow: 'Practice material',
      h2: 'CEMC\'s past Cayley papers and the Topic generator',
      lede: 'The best practice for Cayley is old Cayley papers, and CEMC gives them away. We send students to CEMC\'s site for them rather than copying any onto ours.',
      body: [
        { kind: 'two',
          leftH3: 'Whole past papers',
          left: [
            'CEMC\'s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">past contests page</a> holds the Cayley paper, its solutions and its results for each recent year, filtered by contest and grade.',
            'We use them in two ways: untimed and part by part in the autumn, then whole and timed in February. A paper used as a timed rehearsal is never one the student has seen before.'
          ],
          rightH3: 'Sets by topic',
          right: [
            'The <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/problem-set-generator" rel="noopener" target="_blank">Problem Set Generator</a> has a Topic generator that "Randomly chooses up to 30 problems according to contest, level of difficulty (Part A/B/C), and topic."',
            'That makes it the right tool for a weak spot. A student who keeps losing marks on counting can ask it for Part B counting questions from past Cayley papers, and work through a set in an evening.'
          ] },
        { kind: 'p', mt: true, html: 'For the curriculum itself, CEMC\'s free <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">Courseware</a> covers school math lesson by lesson. Our only rule for any of this material: try the question properly first, and read the official solution afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Placing a Grade 10 student',
    h2: 'Where a Cayley student usually starts',
    lede: 'Our four levels, used in the first class.',
    table: { caption: 'Levels for a Cayley writer (ours)', head: ['Level', 'What we see'], rows: [
      ['1. Course-ready', 'Comfortable with Grade 10 homework, new to contest questions'],
      ['2. Part A secure', 'Clears the first ten questions of a past Cayley in about twenty minutes'],
      ['3. Part B solver', 'Finds the idea in most Part B questions, sometimes too slowly'],
      ['4. Part C checker', 'Attempts Part C with time left and checks each answer before coding it']
    ] },
    left: { h3: 'For parents', ps: [
      'Level 2 by Christmas 2026 is a good sign. The step to level 3 is where steady weekly practice shows.',
      'A student who wrote Pascal last year often starts at level 2 or 3. Ask them for their old Pascal score and their mistakes; both help us.'
    ] },
    right: { h3: 'For students', ps: [
      'When a Part C answer comes out, stop and check it before moving on. A checked answer is worth 8; an unchecked one may be worth nothing.',
      'Look at question 21 before you get stuck at the end of Part B.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine courses for a Grade 10 student who likes math',
    lede: 'Live and online, taught by one teacher who knows the student, in a group or privately, for families in every province.',
    bands: [
      { num: 'I', h3: 'School math, made strong', sub: 'Grades 9 to 11', courses: [
        { code: 'CCP / BASE / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The full Grade 9 to 12 course, live.' },
        { code: 'CCP / BASE / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Probability for the Part C counting questions.' },
        { code: 'CCP / BASE / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Test a pattern in Python before you prove it.' }
      ] },
      { num: 'II', h3: 'Contest and proof', sub: 'For keen problem solvers', courses: [
        { code: 'CCP / STEP / 01', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof and problem solving', blurb: 'Written arguments, ready for Galois.' },
        { code: 'CCP / STEP / 02', slug: 'middle-school-math-competitions-course', title: 'Contest math, younger students', blurb: 'For a younger sibling starting out.' },
        { code: 'CCP / STEP / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'For students also applying to US universities.' }
      ] },
      { num: 'III', h3: 'The computing side', sub: 'CEMC\'s other contests', courses: [
        { code: 'CCP / CODE / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'Programming problems, a week before Cayley.' },
        { code: 'CCP / CODE / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms for contest coders.' },
        { code: 'CCP / CODE / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first program to real projects.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson format',
    h2: 'How live Cayley classes are set up',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches after school, with times shown in your own zone.' },
      { time: 'Weekends', l: 'Weekend mornings, clear of the school week.' },
      { time: '1-on-1', l: 'Set around the student, and planned back from the contest day.' }
    ],
    cells: [
      { h3: 'Problems written in-house', p: 'Fresh Cayley-style sets each week, alongside CEMC\'s archive.' },
      { h3: 'Checks before answers', p: 'Every Part C answer is tested before it counts.' },
      { h3: 'Timed rounds', p: 'Short timed sets weekly, full papers from late January.' },
      { h3: 'Grade 10 groups', p: 'Students grouped by grade, so the math matches.' },
      { h3: 'From coast to coast', p: 'Students join from every province and territory.' },
      { h3: 'Group or private', p: 'Join a group of 15 to 20, or learn alone with a teacher.' }
    ]
  },

  projectsH2: 'Student work beyond the contest',
  projectsLede: 'Alongside contest math, our students build things. Some of their work is below, and more is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Ordering the paper from CEMC is the school\'s cost. Ours is the teaching, billed monthly, and a family can stop at the end of any month, including straight after the Cayley.',
    free: ['A free first class', 'A short Cayley-style warm-up', 'No payment details needed'],
    group: ['A group of fifteen to twenty', 'Grade 10 students together', 'Your choice of batch', 'One month at a time'],
    one: ['Private lessons', 'Planned to your school\'s Cayley day', 'Every class on your own errors']
  },

  faq: {
    eyebrow: 'Grade 10 families ask',
    h2: 'Cayley Contest: questions and answers',
    items: [
      { q: 'What is the Cayley Contest?', a: 'It is the University of Waterloo CEMC math contest for Grade 10 students. The paper has twenty-five questions, takes an hour and is marked out of 150, and it is written at school in February.' },
      { q: 'When is the Cayley Contest in 2027?', a: 'In North and South America CEMC lists Tuesday, February 23, 2027 and Wednesday, February 24, 2027, and the school picks one of those days. Schools in Canada must have their order in by Tuesday, February 9, 2027.' },
      { q: 'Who can write the Cayley Contest?', a: 'CEMC says students in Grade 10 are eligible, and that it may be written officially by any participant in Grade 10 or below. Pascal, Cayley and Fermat count as a set, so a student writes just one of them each school year.' },
      { q: 'What is Part C on the Cayley Contest?', a: 'It is the last five questions. Instead of choosing a letter, the student gives a whole number from 0 to 99. When a natural answer is larger, the question usually asks for the integer formed by its rightmost two digits, and a one-digit answer is coded with a leading zero, such as 07.' },
      { q: 'Is there a penalty for wrong answers on Cayley?', a: 'No. Under the 2025 booklet rules a wrong answer simply scores zero. Correct answers earn 5, 6 or 8 marks by part, and each unanswered question earns 2, up to ten unanswered questions.' },
      { q: 'What was the Cayley average in 2026?', a: 'CEMC lists a 2026 Cayley average of 90.0 out of 150, a Certificate of Distinction cutoff of 106 and a School Medal Champion cutoff of 90, with 19 953 contestants.' },
      { q: 'Is the Waterloo Cayley Contest the same as the UK Cayley?', a: 'No. The Waterloo Cayley is CEMC\'s Grade 10 paper. The UK Cayley belongs to the UK Mathematics Trust and is a different paper, with its own route to entry and its own date.' },
      { q: 'How does my child enter the Cayley Contest?', a: 'Through their school, which orders the contest from CEMC. Students cannot enter on their own. If the school does not take part, CEMC suggests looking for another school nearby that will let the student write there.' },
      { q: 'Should a Grade 10 student also write Galois?', a: 'We think so, if they enjoy Cayley. Galois is CEMC\'s Grade 10 full-solution contest, on Wednesday, April 7, 2027 in the Americas, with four questions in 75 minutes, and it rewards clear written reasoning.' },
      { q: 'When are your Cayley classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern time and shown to each family in its own time zone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages',
    lede: 'Pages a Grade 10 contest writer in Canada may find useful next.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'All CEMC Waterloo contests', p: 'Gauss to Euclid on one page.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Support with the Grade 10 course itself.' },
      { href: '/coding-classes-in-canada', label: 'Canada home', p: 'Every page we have for Canadian students.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'Canadian Computing Competition', p: 'CEMC\'s programming contest in February.' },
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'The UK Cayley paper', p: 'If you meant the UK Mathematics Trust contest.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC 10 and 12', p: 'The American papers many Canadian students also write.' },
      { href: '/maths-olympiad-classes-online', label: 'Which olympiad?', p: 'A guide to the major math contests.' },
      { href: '/coding-vs-maths', label: 'Coding or math first?', p: 'For students drawn to both.' },
      { href: '/how-to-think-like-a-programmer', label: 'Thinking like a programmer', p: 'Breaking a problem into steps, the same skill Part C needs.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the student works through a short Cayley-style set we wrote, with a teacher, on screen. You come away knowing which of the four levels your child is at and what we would do with them between now and late February 2027.',
    readFirst: 'Rather read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the <a class="ag-inline-link" href="/courses">course list</a> with every syllabus.',
    note: 'We teach from India, live over video, so nobody has to travel. WhatsApp is the quickest way to reach a person, wherever in Canada you are.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Waterloo contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/maths-olympiad-classes-online', label: 'Choosing an olympiad' }
      ] },
      { h4: 'For Canadian families', links: [
        { href: '/coding-classes-in-canada', label: 'Canada home' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student work' }
      ] }
    ],
    bottomRight: 'Check it before you code it'
  },

  personalityCss: `
.ag-root.ag-ccp .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ccp .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-ccp .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-ccp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccp .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-ccp .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Pascal, Cayley and Fermat page, Problem Set Generator, Fryer, Galois and Hypatia page, Canadian Senior and Intermediate Mathematics Contests page and How contests work, read raw on 22 October 2026; the 2025 Cayley booklet front cover and Part C note (no problems); the 2026 PCF Results booklet, Cayley statistics only: Grade 10 eligibility, Grade 10 or below for official status; the two-day window Tuesday, February 23 and Wednesday, February 24, 2027; Canadian deadline Tuesday, February 9, 2027; Part C rightmost-two-digits convention; 2026 Cayley mean 90.0, cutoffs 106 and 90, 19 953 contestants; question shares including the Q22 most-popular-answer finding; Galois and CIMC dates and formats. Ontario MPM2D and BC Foundations of Mathematics and Pre-calculus 10 from facts-schools-contests.md.',
    localProject: 'Eight original Cayley-style problems written by us with full solutions checked by brute force in Python (line intercept triangle, difference of squares, consecutive odd integers with product 323, lamp-post shadow, increasing odd digits, x squared minus 24x plus k, rightmost two digits of 3 + ... + 3 to the 20th, triangles with perimeter 30); our five-check routine for Part C; a countdown table from 2 November 2026; our share 106 / 150 = about 71 percent. Lesson family: checking an answer without options.',
    requiredMentions: ['Students in Grade 10 are eligible to write the Cayley Contest', 'The integer formed by the rightmost two digits of 6307 is 7, coded 07', 'the single most popular answer was a wrong one', '15.51%', '106 / 150', 'x<sup>2</sup> - 24x + k = 0', 'Put it back in.', 'Foundations of Mathematics and Pre-calculus 10', 'Randomly chooses up to 30 problems according to contest', 'Counting back from the February 2027 Cayley'],
    sources: [
      { claim: 'Cayley eligibility, 2027 dates and Canadian deadline, format, content, 2026 averages and cutoffs, one contest per year, writing above grade.', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'Part A and B multiple choice, Part C integer 0 to 99 and the rightmost-two-digits note, scoring, permitted rough-work tools, from the 2025 Cayley booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CayleyContest.pdf' },
      { claim: 'Cayley 2026 question-level statistics, 16368 counted contestants, average mark 90.66.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026%20PCF%20Results_May26.pdf' },
      { claim: 'Topic generator description.', url: 'https://cemc.uwaterloo.ca/resources/problem-set-generator' },
      { claim: 'Galois 2027 date and format.', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'CIMC 2026 date, ordering deadline and format.', url: 'https://cemc.uwaterloo.ca/contests/csimc' },
      { claim: 'Scale of CEMC contest orders, school-only writing and permitted aids.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'Any CEMC past problem, solution or answer value: never reproduced; the Q22 finding is given as percentages only.',
      'Pascal or Fermat figures, or any combined PCF total: not printed on the Cayley page.',
      'A CEMC explanation for the Q20 and Q21 blank rates: none exists; the time-pressure reading is labelled as ours.',
      'A separate CEMC route for homeschooled students: not found, so not described.',
      'That our teaching raises Cayley scores or wins certificates or medals: refused.',
      'The CEMC fee as a typed figure: omitted.',
      'Any affiliation with CEMC, the University of Waterloo or the UK Mathematics Trust: none, and the page says so.'
    ]
  }
};
