'use strict';
// Fermat Contest preparation (ag- contest door; Canada cluster Plan 2, row 46). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the FERMAT CONTEST (Grade 11, CEMC) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/fermat-contest-preparation/):
//  - cemc.uwaterloo.ca/contests/pcf (pcf.txt): "Students in Grade 11 are eligible to write the Fermat Contest."; "The
//    Fermat Contest may be written by any participant in Grade 11 or below."; Americas dates Tuesday, February 23, 2027
//    and Wednesday, February 24, 2027; ordering deadline for schools in Canada Tuesday, February 9, 2027 (en dash in the
//    source not reproduced); 25 questions, 60 minutes, out of 150; "Most of the problems test logical thinking and
//    mathematical problem-solving" (paraphrased); "Each School Champion" (em dash in source, paraphrased) "receives a
//    Contest Medal, at the discretion of the CEMC. In the event of a tie, two medals are awarded."; "Student rankings
//    are provided in the Results booklet"; 2026 Fermat mean 88.9, Certificate of Distinction cutoff 102, School Medal
//    Champion cutoff 88, contestants 17 959 (Pascal and Cayley figures not used, never summed); "Completed paper contest
//    materials must be shipped back to the CEMC for marking."
//  - 2025 Fermat Contest booklet (2025FermatContest.pdf, front cover only; NO problem reproduced): "When your supervisor
//    tells you to begin, you will have 60 minutes of working time."; "Diagrams are not drawn to scale. They are intended
//    as aids only."; scoring 5, 6, 8, no penalty, blank 2 up to 10; "The name, grade, school and location, and score
//    range of some top-scoring students will be published on our website, cemc.uwaterloo.ca."
//  - 2026 PCF Results booklet (2026_PCF_Results.pdf), Fermat statistics page: "Number of Contestants / Nombre de
//    concurrents: 14670", "Average mark / Note moyenne: 88.77"; share choosing the correct option Q1 95.88, Q9 56.19,
//    Q10 30.15 (a single wrong option drew 58.51), Q12 47.79, Q15 29.97, Q19 29.14, Q20 25.99; Part C correct Q21 17.27,
//    Q22 22.33, Q23 7.33, Q24 4.10, Q25 1.55 (a wrong answer drew 1.75); % not attempted Q15 35.96, Q19 41.59, Q20
//    49.58, Q21 60.4, Q22 51.06, Q23 69.92, Q24 79.41, Q25 80.34. No answers or letters printed.
//  - cemc.uwaterloo.ca/contests/how-contests-work: honour-roll consent "unless they choose to opt out".
//  - cemc.uwaterloo.ca/contests/fgh: "Students in Grade 11 are eligible to write the Hypatia Contest."; Wednesday, April
//    7, 2027 (Americas); deadline Thursday, March 11, 2027; "a correct solution, poorly presented, will not earn a full
//    score for that problem."
//  - cemc.uwaterloo.ca/contests/csimc: "Students in Grades 11 and 12 and CÉGEP students are eligible to write the
//    CSMC."; Wednesday, November 18, 2026; "Score out of 60."; "Most of the CSMC problems are based on the mathematical
//    curriculum up to and including the final year of secondary school."
//  - cemc.uwaterloo.ca/contests/euclid: "Many students seeking to achieve a strong score in their final year of
//    secondary school write the Euclid one or more times in previous years."; "North and South America: Tuesday, April
//    6, 2027".
//  - uwaterloo.ca/future-students/admissions/admission-information-form (saved in ca/src/admissions): the
//    Supplementary Information Form "asks about any Waterloo mathematics contests you've participated in"; CSMC and/or
//    Euclid "is not required for admission, but writing one of these contests is required for some Faculty of
//    Mathematics scholarships." (The facts file attributes the contests question to the AIF; the raw page puts it under
//    the SIF, and this page follows the raw page.)
//  - facts-schools-contests.md rows 38, 39 (Ontario MCR3U "Functions", Grade 11 University; MHF4U prerequisite) and 72
//    (BC "Pre-calculus 11", "Foundations of Mathematics 11").
// Our own material, labelled on the page: the six practice problems and solutions (answers checked by brute force in
// Python on 22 October 2026), the three-pass time plan, the topic table, the month-by-month plan, and the share
// 102 / 150 = 68 percent.
// Lesson family: time triage (deciding what to attempt in a fixed hour).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const F4 = `f(x) + 2f(1/x) = 3x        ... (1)
Replace x by 1/x everywhere:
f(1/x) + 2f(x) = 3/x        ... (2)

Double (2):   2f(1/x) + 4f(x) = 6/x
Subtract (1): 3f(x) = 6/x - 3x
So            f(x)  = 2/x - x

f(2) = 2/2 - 2 = -1
Check in (1) with x = 2: f(2) + 2f(1/2) = -1 + 2(4 - 1/2) = -1 + 7 = 6 = 3 x 2`;

const F6 = `Complement: products that are NOT multiples of 6

Product misses the factor 2  ->  both dice odd:          3 x 3 = 9 pairs
Product misses the factor 3  ->  neither die is 3 or 6:  4 x 4 = 16 pairs
Misses both 2 and 3          ->  both dice in {1, 5}:    2 x 2 = 4 pairs

Not a multiple of 6: 9 + 16 - 4 = 21 pairs
Multiple of 6:      36 - 21 = 15 pairs
Probability 15/36 = 5/12, so p + q = 5 + 12 = 17`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CEMC\'s Grade 11 Fermat Contest for 2027: the paper, how the hour runs out (2026 blank rates), a three-pass time plan, six original problems and the road to Euclid.' },
  slug: 'fermat-contest-preparation',
  code: 'fer',
  accent: '#374C1C',
  accentRationale: 'Fermat Contest preparation, Canada: a dark boreal green #374C1C, allocated for row 46; measured 7.2 RGB units (Euclidean) from the nearest site accent and 18.5 from the nearest other Canada accent; contrast 8.95 on the paper #FBF8F2, 8.42 and 7.70 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Fermat Contest preparation',
  title: 'Fermat Contest 2027 (Grade 11): Date, Timing, Practice',
  description: 'The Fermat Contest for Grade 11: the 2027 date, how the 60 minutes run out (CEMC\'s 2026 blank rates), a three-pass time plan, six practice problems and Euclid.',
  ogDescription: 'CEMC lists the 2027 Fermat Contest for Tuesday 23 or Wednesday 24 February 2027 in the Americas. The paper, the 2026 statistics on what Grade 11 writers left blank, a time plan and six practice problems.',
  twitterDescription: 'Fermat Contest 2027 for Grade 11: date, timing strategy, 2026 statistics and six original problems.',
  pageName: 'Fermat Contest Preparation',
  webPageDescription: 'A guide for Grade 11 students in Canada and their parents to CEMC\'s Fermat Contest, built from CEMC\'s 2027 page, the 2025 Fermat booklet cover and the 2026 results booklet, with a time plan, original practice problems and the route to Hypatia, CSMC and Euclid.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests from Gauss to Euclid, including the Grade 11 Fermat and Hypatia contests, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Fermat Contest',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#glance', label: 'Date and format' },
    { href: '#clock', label: 'The hour' },
    { href: '#practice', label: 'Six problems' },
    { href: '#months', label: 'Plan' },
    { href: '#bridge', label: 'Toward Euclid' }
  ],
  eyebrow: 'Canada &middot; Waterloo math contests &middot; Grade 11',
  h1: 'Fermat Contest preparation for Grade 11',
  lede: 'The Fermat Contest is the Grade 11 member of CEMC\'s Pascal, Cayley and Fermat trio, and for many students it is the last multiple-choice contest before the written Euclid in their final year. The format has not changed since Grade 9, but the math has, and so has the pressure of the clock: CEMC\'s own 2026 statistics show most Fermat writers leaving the final questions untouched. This page lays out the 2027 contest from CEMC\'s pages, reads the 2026 results booklet question by question, gives a three-pass plan for spending the sixty minutes, offers six problems we wrote with full solutions, and shows how Fermat leads to the Hypatia, the CSMC and the Euclid.',
  secondaryCta: { href: '#clock', label: 'See the time plan' },
  wa: 'Hello Modern Age Coders, my child is in Grade 11 and is writing the Fermat Contest in February 2027. Could we book a free first class?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students &middot; six Grade 11 problems on this page, all our own',
  spec: [
    ['Contest', 'Fermat, from CEMC (University of Waterloo)'],
    ['Grade', 'Grade 11, or a keen younger student'],
    ['2027 window', 'Tuesday 23 and Wednesday 24 February (Americas)'],
    ['Working time', '60 minutes'],
    ['Paper', '25 questions in three parts'],
    ['How to enter', 'Ask the school; no individual entry'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Begin with', 'A free first class']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'The Fermat Contest is CEMC\'s Grade 11 math contest from the University of Waterloo: twenty-five questions, mostly multiple choice, sixty minutes, out of 150, written at school on Tuesday 23 or Wednesday 24 February 2027 in the Americas, with entry only through the school. Modern Age Coders prepares Grade 11 students for it live online, in a batch or one to one, in the Waterloo Math Contests course, Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses for Grade 11',
    h2: 'Three courses we pair with a Fermat year',
    lede: 'Contest preparation first, then the deeper problem solving the last questions demand, then the senior school math that Fermat and, a year later, Euclid are built on.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'FER / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. Its Grades 11 and 12 track takes a student from Fermat in February to Hypatia, the CSMC and Euclid, with written solutions every week.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'FER / 02', title: 'Competition mathematics', note: 'Functional equations, number theory and counting at the depth of Fermat\'s last ten questions.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'FER / 03', title: 'High school math, Grades 9 to 12', note: 'Functions, exponents, sequences and trigonometry, taught to the point where they are tools rather than topics.' }
    ]
  },

  sections: [
    {
      id: 'glance', tint: 'tint', eyebrow: 'Date and format',
      h2: 'The 2027 Fermat Contest in brief',
      lede: 'One CEMC page covers Pascal, Cayley and Fermat together. Here are the Fermat details, as that page and the cover of the 2025 Fermat booklet read on 22 October 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Who and when',
          left: [
            'CEMC: "Students in Grade 11 are eligible to write the Fermat Contest." For official results, "The Fermat Contest may be written by any participant in Grade 11 or below," so a strong Grade 10 student may write Fermat instead of Cayley.',
            'In North and South America the 2027 contest runs on Tuesday, February 23, 2027 and Wednesday, February 24, 2027, and each school uses one of the two days. Schools in Canada must order by Tuesday, February 9, 2027.'
          ],
          rightH3: 'The paper itself',
          right: [
            'Twenty-five questions: ten in Part A, ten in Part B, both with five lettered options, and five in Part C, each with a whole-number answer from 0 to 99. The total is 150.',
            'The 2025 booklet tells writers: "When your supervisor tells you to begin, you will have 60 minutes of working time." It also warns that "Diagrams are not drawn to scale. They are intended as aids only." Measuring a diagram with a ruler is not a method.'
          ] },
        { kind: 'table', mt: true, caption: 'Fermat 2027: the remaining practical points, from CEMC\'s contest page and the 2025 Fermat booklet (read 22 October 2026)', head: ['Topic', 'Detail'], rows: [
          ['Marks per question', '5 in Part A, 6 in Part B, 8 in Part C; a wrong answer loses nothing; a blank gains 2, for no more than 10 blanks'],
          ['Paper or online', 'The school chooses when it orders; a paper Fermat is sent back to CEMC to be marked'],
          ['Calculators', 'Some are permitted; devices with a computer algebra system or internet access are among those that are not'],
          ['One per year', 'Pascal, Cayley and Fermat are a group, and a student writes only one of them in a school year'],
          ['After the paper', 'Writers are asked not to discuss the problems or solutions online for 48 hours'],
          ['Awards', 'A Certificate of Distinction for the top 25%; a Contest Medal for each School Champion who reaches the medal cutoff, with two medals in a tie']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC, Pascal, Cayley and Fermat Contests</a> and the cover of CEMC\'s 2025 Fermat Contest booklet, read 22 October 2026. Modern Age Coders works independently of CEMC and the University of Waterloo.' }
      ]
    },
    {
      id: 'clock', tint: 'deep', eyebrow: 'The hour',
      h2: 'Where the Fermat hour runs out, and a plan for spending it',
      lede: 'CEMC\'s 2026 results booklet shows, for every Fermat question, the share of counted contestants who left it blank. Read down the column and the shape of the hour appears: by the last five questions, a majority had stopped writing answers.',
      body: [
        { kind: 'table', caption: 'Fermat 2026, from question 15 on: share leaving each question blank and share answering it correctly, from CEMC\'s 2026 PCF Results booklet (Fermat statistics page: 14670 contestants, average mark 88.77). No answers are reproduced.', head: ['Question', 'Left blank', 'Answered correctly'], rows: [
          ['15', '35.96%', '29.97%'],
          ['19', '41.59%', '29.14%'],
          ['20', '49.58%', '25.99%'],
          ['21', '60.4%', '17.27%'],
          ['22', '51.06%', '22.33%'],
          ['23', '69.92%', '7.33%'],
          ['24', '79.41%', '4.10%'],
          ['25', '80.34%', '1.55%']
        ] },
        { kind: 'p', mt: true, html: 'Two things stand out, and the reading is ours. First, question 22 was answered correctly more often than question 21, and left blank less often. Order on the paper is a guide to difficulty, not a rule, and a student who stops at 21 may walk past a question they could have done. Second, the blank column passes 50% at question 21. For most Grade 11 writers, the contest is decided by how well they use the first forty minutes.' },
        { kind: 'table', mt: true, caption: 'Our three-pass plan for the 60 minutes of a Fermat paper (ours, not CEMC\'s)', head: ['Pass', 'Clock', 'What the student does'], rows: [
          ['1. Sweep', 'Minutes 0 to 25', 'Questions 1 to 15 in order. Anything that will clearly take more than three minutes gets a mark in the margin and is skipped.'],
          ['2. Scout', 'Minutes 25 to 30', 'Read all five Part C questions, and questions 16 to 20, without solving. Choose the two or three that look most approachable.'],
          ['3. Spend', 'Minutes 30 to 55', 'Work the chosen questions, Part C first if one looked open, then the skipped ones from pass 1.'],
          ['Close', 'Minutes 55 to 60', 'Count blanks. Up to ten earn 2 each, so guess only where at least two Part B options are already ruled out.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why scout before spending',
          left: [
            'A Part C question is worth 8 marks, more than a Part B question at 6. If one of the last five happens to suit a student, finding it in minute 26 instead of never is the cheapest 8 marks on the paper.',
            'Scouting also stops the most common Fermat failure we see: fifteen minutes lost on question 18 while an easier question 22 waits unread.'
          ],
          rightH3: 'Practising the plan',
          right: [
            'We rehearse the passes with a timer on short sets from November, so by February the switch from sweep to scout happens without thinking.',
            'After each timed paper the student writes down where the minutes went. Two or three papers later, most students find that their time was not short; it was spent on the wrong questions.'
          ] }
      ]
    },
    {
      id: 'traps', tint: 'tint', eyebrow: 'Strong wrong answers',
      h2: 'When most Fermat writers chose the same wrong option',
      lede: 'The results booklet also prints how many contestants chose each option in Parts A and B. In 2026 two Fermat questions in the first half had one wrong option that pulled in a large share of the field.',
      body: [
        { kind: 'table', caption: 'Two 2026 Fermat questions with a strong wrong option, from CEMC\'s 2026 PCF Results booklet. Letters and answers are not reproduced.', head: ['Question', 'Chose the correct option', 'Chose the most popular wrong option'], rows: [
          ['9', '56.19%', '31.32%'],
          ['10', '30.15%', '58.51%']
        ] },
        { kind: 'p', mt: true, html: 'On question 10, a single wrong option drew 58.51% of the counted contestants, almost twice the 30.15% who chose the correct one. We will not guess at what that question asked, and we do not reproduce it, but the pattern is one every contest teacher knows: an option that matches the first, quick reading of a question. The habit that protects against it is cheap. Before filling in a circle, the student asks what the question would have to say for the quick answer to be right, and whether it says that.' },
        { kind: 'ol', mt: true, items: [
          '<b>Re-read the final sentence.</b> Is it asking for the number, its square, the difference, the remainder?',
          '<b>Test an extreme.</b> Put in 0, 1 or a very large value and see whether the chosen option still makes sense.',
          '<b>Distrust the diagram.</b> The booklet says diagrams are not drawn to scale, so an angle that looks like 90 degrees has to be proved to be one.',
          '<b>Estimate first.</b> A rough size for the answer rules out options that are ten times too big or too small.'
        ] },
        { kind: 'p', mt: true, html: 'These four habits are ours, and they cost about fifteen seconds a question. Over twenty multiple-choice questions that is five minutes, and in our experience it is the best five minutes a Fermat writer can spend.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Six practice problems',
      h2: 'Six Fermat-style problems, written by us, solved in full',
      lede: 'Every problem here is our practice problem, not a CEMC problem. Our teachers wrote them for Grade 11 students, and none is copied from or modelled on a past Fermat. Two sit at Part A level, two at Part B level and two in Part C, with answers from 0 to 99. We checked each answer in Python by brute force or substitution before publishing.',
      body: [
        { kind: 'p', html: '<b>F1.</b> <i>Our practice problem, not a CEMC problem. Part A level.</i> If f(x) = 2x - 3, what is the value of f(f(4))? (A) 5 &nbsp;(B) 7 &nbsp;(C) 9 &nbsp;(D) 11 &nbsp;(E) 13' },
        { kind: 'p', html: '<b>Worked solution.</b> Work from the inside out. f(4) = 2(4) - 3 = 5, then f(5) = 2(5) - 3 = 7, answer (B). Option (A) is the inside value only, the most common slip on composition questions: stopping one step early.' },
        { kind: 'p', mt: true, html: '<b>F2.</b> <i>Our practice problem, not a CEMC problem. Part A level.</i> If 2<sup>x + 3</sup> = 4<sup>x - 1</sup>, what is the value of x? (A) 1 &nbsp;(B) 2 &nbsp;(C) 4 &nbsp;(D) 5 &nbsp;(E) 7' },
        { kind: 'p', html: '<b>Worked solution.</b> Write both sides with base 2: 4<sup>x - 1</sup> = (2<sup>2</sup>)<sup>x - 1</sup> = 2<sup>2x - 2</sup>. Equal powers of 2 have equal exponents, so x + 3 = 2x - 2 and x = 5, answer (D). Check: 2<sup>8</sup> = 256 and 4<sup>4</sup> = 256.' },
        { kind: 'p', mt: true, html: '<b>F3.</b> <i>Our practice problem, not a CEMC problem. Part B level.</i> In an arithmetic sequence, the 3rd term is 14 and the 8th term is 39. What is the 20th term? (A) 94 &nbsp;(B) 96 &nbsp;(C) 99 &nbsp;(D) 104 &nbsp;(E) 109' },
        { kind: 'p', html: '<b>Worked solution.</b> From the 3rd term to the 8th there are 5 steps, and the terms rise by 39 - 14 = 25, so the common difference is 5. From the 8th term to the 20th there are 12 more steps: 39 + 12 x 5 = 99, answer (C). Counting steps, not terms, avoids the off-by-one error that leads to (D), 104.' },
        { kind: 'p', mt: true, html: '<b>F4.</b> <i>Our practice problem, not a CEMC problem. Part B level.</i> A function f satisfies f(x) + 2f(1/x) = 3x for every non-zero real number x. What is f(2)? (A) -1 &nbsp;(B) 0 &nbsp;(C) 1 &nbsp;(D) 2 &nbsp;(E) 3' },
        { kind: 'code', label: 'F4 &middot; our worked solution', lang: 'text', code: F4, note: 'The answer is (A), -1. Substituting x = 2 alone gives one equation with two unknowns, f(2) and f(1/2). The idea is to substitute 1/x as well, which gives a second equation, and then solve the pair. This trick appears in Fermat-level function questions often enough to be worth practising until it is automatic.' },
        { kind: 'p', mt: true, html: '<b>F5.</b> <i>Our practice problem, not a CEMC problem. Part C level.</i> For how many integers n with 1 &le; n &le; 99 is n<sup>2</sup> - 1 a multiple of 24? Give a whole number from 0 to 99.' },
        { kind: 'p', html: '<b>Worked solution.</b> Write n<sup>2</sup> - 1 = (n - 1)(n + 1). If n is odd, n - 1 and n + 1 are consecutive even numbers, so one of them is a multiple of 4 and their product is a multiple of 8. If n is not a multiple of 3, one of n - 1 and n + 1 is, so the product is a multiple of 3. Together: when n is odd and not a multiple of 3, n<sup>2</sup> - 1 is a multiple of 24. Conversely, if n is even then n<sup>2</sup> - 1 is odd, and if 3 divides n then 3 does not divide n<sup>2</sup> - 1, so both conditions are needed. Count from 1 to 99: there are 50 odd numbers, and of those the odd multiples of 3 are 3, 9, 15 and so on up to 99, which is 17 numbers. The answer is 50 - 17 = 33.' },
        { kind: 'p', mt: true, html: '<b>F6.</b> <i>Our practice problem, not a CEMC problem. Part C level.</i> Two fair six-sided dice are rolled. The probability that the product of the two numbers rolled is a multiple of 6 can be written as p/q in lowest terms. What is p + q?' },
        { kind: 'code', label: 'F6 &middot; our worked solution', lang: 'text', code: F6, note: 'The answer is 17. Counting the complement is easier here: a product fails to be a multiple of 6 when it misses the factor 2 or the factor 3, and inclusion and exclusion stops the four pairs that miss both from being counted twice. A direct count, listing all 15 good pairs, makes a good check.' },
        { kind: 'two', mt: true,
          leftH3: 'Working the six as a mini paper',
          left: [
            'Allow fourteen minutes and use the three passes: F1 to F3 quickly, then read F5 and F6 before choosing between F4 and a Part C problem.',
            'Score it with the contest marks: 5 for F1 and F2, 6 for F3 and F4, 8 for F5 and F6. The maximum is 38.'
          ],
          rightH3: 'The ideas inside',
          right: [
            'Composition and bases (F1, F2) are Part A habits. Counting steps (F3) and substituting 1/x (F4) are the kind of single idea Part B rewards.',
            'F5 and F6 both turn on the factors 2 and 3, from two different directions: divisibility of a product, and the complement of a probability. Spotting the shared structure is the point.'
          ] }
      ]
    },
    {
      id: 'grade11', tint: 'tint', eyebrow: 'Grade 11 math',
      h2: 'The Grade 11 math the Fermat paper rests on',
      lede: 'CEMC writes Fermat on curriculum common to all the provinces. Below is our own map of what that means in practice for a Grade 11 student, not a CEMC list.',
      body: [
        { kind: 'table', caption: 'Topics on a Fermat paper and how we teach them (our analysis)', head: ['Topic', 'What Fermat does with it', 'What we teach'], rows: [
          ['Functions', 'Composition, inverses, functional equations, transformations', 'Substitution as a tool, as in F4: choose the input that creates a second equation'],
          ['Exponents and powers', 'Equations with powers, comparing large numbers, last digits', 'Rewriting with a common base before anything else'],
          ['Sequences', 'Arithmetic and geometric sequences, sums, recursive rules', 'Counting steps between terms, and writing out the first five terms'],
          ['Trigonometry', 'Right-triangle ratios, special angles, the sine and cosine laws', 'Exact values of sine and cosine for 30, 45 and 60 degrees, and when to use each law'],
          ['Counting and probability', 'Dice, cards, arrangements, complements', 'Choosing between a direct count and the complement before starting'],
          ['Number theory', 'Divisibility, remainders, factoring numbers like n squared minus 1', 'Factoring first, then testing small cases, as in F5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two provinces as examples',
          left: [
            'In Ontario, the Grade 11 university math course is MCR3U, Functions. It is the prerequisite for MHF4U, Advanced Functions, so the function work Fermat rewards feeds straight into Grade 12.',
            'In British Columbia, Grade 11 students take Pre-calculus 11 or Foundations of Mathematics 11. Pre-calculus 11, with its quadratic functions and trigonometry, is the closer match for a Fermat paper.'
          ],
          rightH3: 'February comes early in the course',
          right: [
            'The contest falls in February, when a semestered Grade 11 course may have only just started. A student whose functions course runs in the second semester may meet some Fermat topics in our classes first.',
            'That is one reason we spend November and December on functions and sequences: by February the student has them, whatever the school timetable.'
          ] }
      ]
    },
    {
      id: 'results', tint: 'deep', eyebrow: '2026 results',
      h2: 'Fermat 2026: averages, cutoffs and what results look like',
      lede: 'CEMC lists the Fermat average and cutoffs for 2026 on its contest page. These are the Fermat figures only, never added to Pascal or Cayley.',
      body: [
        { kind: 'table', caption: 'Fermat 2026, from CEMC\'s contest page (read 22 October 2026)', head: ['Measure', 'Fermat 2026'], rows: [
          ['Average (mean)', '88.9'],
          ['Certificate of Distinction cutoff', '102'],
          ['School Medal Champion cutoff', '88'],
          ['Maximum possible score', '150'],
          ['Number of contestants', '17 959']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the cutoff',
          left: [
            'Our arithmetic: the 2026 Certificate of Distinction line of 102 is 68 percent of 150 (102 / 150). That is a lower share than the Pascal and Cayley lines, and our reading is that it matches the blank rates above: the Grade 11 paper asks the most of its writers, so the top quarter begins lower.',
            'CEMC also prints "Student rankings" in its results booklet, so a student can see where a score places among all contestants, and that is more useful than the raw number.'
          ],
          rightH3: 'Names, rankings and opting out',
          right: [
            'The 2025 Fermat cover says that "The name, grade, school and location, and score range of some top-scoring students will be published on our website, cemc.uwaterloo.ca."',
            'CEMC\'s rules let a student decline that: participants consent to having their names in public results "unless they choose to opt out". A family that prefers privacy should raise it with the school\'s contest supervisor.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">CEMC, averages and cut-offs</a>, the 2025 Fermat booklet cover and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'entry', tint: 'tint', eyebrow: 'Entering',
      h2: 'Fermat entry goes through the school',
      lede: 'The rule is the same for every CEMC contest: a school orders, and its students write. A Grade 11 family\'s part is a timely conversation.',
      body: [
        { kind: 'ol', items: [
          '<b>November 2026:</b> ask the head of math whether the school will order the 2027 Fermat, and on which February day it will run.',
          '<b>December 2026:</b> if the school has never ordered from CEMC, an application for a school account is needed, and CEMC reviews it by hand, which can take up to three weeks.',
          '<b>January 2027:</b> if the school will not order, look for a nearby school willing to let your child sit the paper there, as CEMC suggests.',
          '<b>By Tuesday, February 9, 2027:</b> the order for a school in Canada must be in.',
          '<b>Contest day:</b> the student writes at the ordering school, supervised in person, on paper or online as the school chose.'
        ] },
        { kind: 'p', mt: true, html: 'We prepare students; we cannot enter them or host the paper. The full entry rules are on <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC\'s How contests work page</a>.' }
      ]
    },
    {
      id: 'months', tint: 'deep', eyebrow: 'The plan',
      h2: 'A Grade 11 plan, November 2026 to February 2027',
      lede: 'Our plan, month by month, for a student starting in November and writing on Tuesday 23 or Wednesday 24 February 2027, with two live classes each week.',
      body: [
        { kind: 'table', caption: 'Our month-by-month Fermat plan (not a CEMC schedule)', head: ['Month', 'Math focus', 'Contest skill', 'Practice'], rows: [
          ['November 2026', 'Functions, composition, functional equations', 'The sweep: questions 1 to 15 at three minutes or less', 'Part A of two past Fermat papers, timed'],
          ['December 2026', 'Exponents, sequences, the factors of n squared minus 1', 'Elimination and the four trap checks', 'Part B of two past papers; F1 to F4 above'],
          ['January 2027', 'Trigonometry, counting, probability', 'The scout: choosing among Part C questions', 'Two full papers under the three-pass plan; F5 and F6'],
          ['February 2027 (to the 22nd)', 'No new topics', 'Calm blank counting in the last five minutes', 'One final full paper, then the mistakes list only']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'First CEMC contest', p: 'Aim for a clean sweep of Part A and half of Part B. Try the scout in every timed paper.' },
          { h3: 'Wrote Cayley last year', p: 'Your Cayley mistakes are the starting list. The goal moves to Part C.' },
          { h3: 'Euclid in view', p: 'Add one written solution a week from December, ready for Hypatia and the Euclid.' }
        ] }
      ]
    },
    {
      id: 'bridge', tint: 'tint', eyebrow: 'After Fermat',
      h2: 'From Fermat to Hypatia, the CSMC and the Euclid',
      lede: 'Grade 11 is the year a CEMC student moves from choosing answers to writing them. Everything in the table is from CEMC or Waterloo; the last column is our advice.',
      body: [
        { kind: 'table', caption: 'The written contests open to a Grade 11 student, from CEMC\'s and the University of Waterloo\'s pages (read 22 October 2026)', head: ['Contest', 'What the organizer says', 'Our advice'], rows: [
          ['Hypatia (Grade 11), Wednesday, April 7, 2027', '"Students in Grade 11 are eligible to write the Hypatia Contest." Each solution is judged on completeness, clarity and presentation, and "a correct solution, poorly presented, will not earn a full score for that problem."', 'The natural partner to Fermat: the same grade, every step written out'],
          ['CSMC (Grades 11 and 12)', '"Students in Grades 11 and 12 and CÉGEP students are eligible to write the CSMC." Marked out of 60; most problems use curriculum "up to and including the final year of secondary school."', 'The 2026 sitting is on Wednesday, November 18, 2026, and CEMC\'s ordering deadline for it is Thursday, October 22, 2026, the day this page was written; for most readers it is a Grade 12 plan'],
          ['Euclid (final year)', 'CEMC: "Many students seeking to achieve a strong score in their final year of secondary school write the Euclid one or more times in previous years." The 2027 date is Tuesday, April 6, 2027 in the Americas.', 'Worth writing in Grade 11 as a rehearsal, if the school will enter a Grade 11 student']
        ] },
        { kind: 'p', mt: true, html: 'What Waterloo says, in its own words: its Supplementary Information Form "asks about any Waterloo mathematics contests you\'ve participated in", and writing the CSMC or the Euclid "is not required for admission, but writing one of these contests is required for some Faculty of Mathematics scholarships." Fermat is not one of the two contests named there. Its value in Grade 11 is as preparation for them, and as a contest worth writing for its own sake. We make no promise about any scholarship, admission or result.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/fgh" rel="noopener" target="_blank">CEMC, Fryer, Galois and Hypatia</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/csimc" rel="noopener" target="_blank">CEMC, CSMC and CIMC</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/euclid" rel="noopener" target="_blank">CEMC, Euclid</a> and <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/admissions/admission-information-form" rel="noopener" target="_blank">University of Waterloo, Admission Information Form</a>, read 22 October 2026. Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> covers the whole family.' }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Free practice',
      h2: 'Past Fermat papers, and the booklets most students never open',
      lede: 'CEMC posts every recent Fermat paper with solutions, and its results booklets too. Students use the first; almost nobody uses the second, which is a mistake.',
      body: [
        { kind: 'two',
          leftH3: 'Past papers',
          left: [
            'CEMC\'s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">past contests, solutions and results</a> page has the Fermat papers of recent years. We use them whole and timed from January 2027, and part by part before that.',
            'The <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/problem-set-generator" rel="noopener" target="_blank">Problem Set Generator</a> also draws on past Fermat questions, which makes it useful for a holiday fortnight of mixed practice.'
          ],
          rightH3: 'Results booklets',
          right: [
            'The booklet for each year shows how many students chose each option on each question. After a timed past paper, we have the student compare their own blanks and errors with the national pattern for the same paper.',
            'A question that 80% of contestants left blank and the student also left blank is no cause for worry. A question most contestants answered correctly and the student missed is the one to study.'
          ] },
        { kind: 'p', mt: true, html: 'Solutions are read after a genuine attempt, never before, and the student explains CEMC\'s solution back in their own words. That one rule turns an old paper from a quiz into a lesson.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Starting point',
    h2: 'Four kinds of Fermat writer we meet',
    lede: 'Our labels, used to plan from the first class.',
    table: { caption: 'Where Grade 11 students tend to start (ours)', head: ['Type', 'What it looks like'], rows: [
      ['1. The newcomer', 'Strong at school math, has never written a CEMC contest'],
      ['2. The sprinter', 'Fast through Part A, stuck by question 16, never reaches Part C'],
      ['3. The perfectionist', 'Accurate but slow; leaves points on the table by refusing to skip'],
      ['4. The planner', 'Uses the passes, finds the open Part C question, counts blanks at the end']
    ] },
    left: { h3: 'For parents', ps: [
      'Types 2 and 3 are the most common, and both are fixed by the same thing: practising the hour, not just the math.',
      'A Fermat score is only one February afternoon. Ask your child what they would do differently next time; that answer tells you more.'
    ] },
    right: { h3: 'For students', ps: [
      'Read all of Part C by minute 30, every time, even when it feels like a waste.',
      'If a question has taken four minutes and you can see no way in, mark it and move on. You can come back.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine courses for a Grade 11 problem solver',
    lede: 'All taught live online, with the same teacher every week, in a group or privately, wherever in Canada a student lives.',
    bands: [
      { num: 'I', h3: 'Senior school math', sub: 'Grades 11 and 12', courses: [
        { code: 'FER / BASE / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The probability questions late in a Fermat paper.' },
        { code: 'FER / BASE / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For schools that offer AP in Grade 12.' },
        { code: 'FER / BASE / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For IB Diploma students writing CEMC contests too.' }
      ] },
      { num: 'II', h3: 'Proof and contest depth', sub: 'For Hypatia and Euclid', courses: [
        { code: 'FER / STEP / 01', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof and problem solving', blurb: 'How to set out a proof, one line at a time.' },
        { code: 'FER / STEP / 02', slug: 'college-mathematics-complete-masterclass', title: 'University math', blurb: 'Linear algebra and calculus, for students who are ready.' },
        { code: 'FER / STEP / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'For applicants to universities in the United States.' }
      ] },
      { num: 'III', h3: 'Math and code', sub: 'For students who like both', courses: [
        { code: 'FER / CODE / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'CEMC\'s computing contest, six days before Fermat.' },
        { code: 'FER / CODE / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Check a counting answer with a short program.' },
        { code: 'FER / CODE / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms and contest habits.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class setup',
    h2: 'How live Fermat classes fit around Grade 11',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school groups, timed in Eastern time and shown in yours.' },
      { time: 'Weekends', l: 'A morning class that leaves weeknights for school.' },
      { time: '1-on-1', l: 'Fitted to a busy Grade 11 timetable and planned to the contest.' }
    ],
    cells: [
      { h3: 'Our own problems', p: 'Weekly Fermat-style sets, plus CEMC\'s past papers.' },
      { h3: 'The hour, rehearsed', p: 'Sweep, scout and spend, practised with a timer.' },
      { h3: 'Trap checks', p: 'Fifteen seconds of doubt before every circle is filled.' },
      { h3: 'Written solutions too', p: 'One a week, ready for Hypatia and the Euclid.' },
      { h3: 'Across Canada', p: 'Students in every province join the same live class.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty together, or a teacher of your own.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Our students build real things alongside contest math. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Parents\' Google reviews, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Whatever CEMC charges is paid by the school with its order. Our monthly fee is for teaching alone, with no term contract, so stopping after the February 2027 paper is simple.',
    free: ['A free first class', 'Two Fermat-style questions and a timed sweep', 'No card, no commitment'],
    group: ['Fifteen to twenty in a group', 'Grade 11 students together', 'Pick a batch that suits you', 'Paid monthly'],
    one: ['A private teacher', 'Planned around Grade 11 workload', 'Every class built on your timed papers']
  },

  faq: {
    eyebrow: 'From Grade 11 families',
    h2: 'Fermat Contest: what families ask',
    items: [
      { q: 'What is the Fermat Contest?', a: 'It is CEMC\'s math contest for Grade 11, from the University of Waterloo. Students have 60 minutes for 25 questions worth 150 marks: twenty with five lettered options and five with a whole-number answer from 0 to 99.' },
      { q: 'When is the Fermat Contest in 2027?', a: 'The Americas window is two days long, Tuesday, February 23, 2027 or Wednesday, February 24, 2027, with the school choosing its day. Canadian schools order by Tuesday, February 9, 2027.' },
      { q: 'Can a Grade 10 student write Fermat?', a: 'Yes. CEMC says the Fermat Contest may be written by any participant in Grade 11 or below, so a Grade 10 student working ahead can choose it. They would then not write Cayley that year, because only one of Pascal, Cayley and Fermat is allowed per school year.' },
      { q: 'How many students leave Fermat questions blank?', a: 'Many. In CEMC\'s 2026 results booklet, over half of the counted Fermat contestants left question 21 blank, and about four in five left questions 24 and 25 blank. That is why we teach a time plan as well as the math.' },
      { q: 'What was the Fermat cutoff in 2026?', a: 'CEMC lists a 2026 Fermat average of 88.9, a Certificate of Distinction cutoff of 102 and a School Medal Champion cutoff of 88, out of 150, with 17 959 contestants.' },
      { q: 'Does the Fermat Contest matter for University of Waterloo admission?', a: 'Waterloo names the CSMC and the Euclid, not Fermat, as the contests required for some Faculty of Mathematics scholarships, and says neither is required for admission. Fermat is good preparation for both. We make no admission or scholarship promises.' },
      { q: 'Should my child write Hypatia as well as Fermat?', a: 'If they enjoy Fermat, yes. Hypatia is CEMC\'s Grade 11 full-solution contest, on Wednesday, April 7, 2027 in the Americas, and it trains the written reasoning the Euclid asks for a year later.' },
      { q: 'Can a student write the Euclid in Grade 11?', a: 'CEMC welcomes motivated students in lower grades and says many students write the Euclid one or more times before their final year. Whether a Grade 11 student can sit it depends on the school ordering it for them.' },
      { q: 'How do we enter the Fermat Contest?', a: 'Through the school, which orders it from CEMC; students cannot enter themselves. A student whose school says no can, as CEMC suggests, ask a different school in the area to let them sit the paper there.' },
      { q: 'When are Fermat classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We work in Eastern time and confirm each class in your province\'s time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for Grade 11 students in Canada who are thinking about contests and university math.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The full CEMC family, Gauss to Euclid.' },
      { href: '/online-math-tutor-canada', label: 'Math tutor, Canada', p: 'Help with the Grade 11 course itself.' },
      { href: '/coding-classes-in-canada', label: 'Canada overview', p: 'All our Canadian pages in one place.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'CEMC\'s programming contest, the week before.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC 12 and AIME', p: 'The American route many Fermat writers also take.' },
      { href: '/maths-olympiad-classes-online', label: 'Choosing an olympiad', p: 'How the major contests compare.' },
      { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutoring', p: 'Grade 11 math, one topic at a time.' },
      { href: '/why-coding-and-maths-together', label: 'Coding and math together', p: 'Why the two strengthen each other.' },
      { href: '/we-teach-you-how-to-think', label: 'How we think about teaching', p: 'Ideas over answer keys.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child does two Fermat-style questions we wrote and a short timed sweep, with a teacher watching how they spend the minutes. You hear which of the four types they are and what we would change before February 2027.',
    readFirst: 'Prefer to look around first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses">course list</a> for every syllabus.',
    note: 'Classes are live on video, taught by our teachers in India, so there is nowhere to travel to. Message us on WhatsApp from anywhere in Canada for the fastest answer.',
    formNote: 'The first class is free. No card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'CEMC contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME' }
      ] },
      { h4: 'In Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Canada overview' },
        { href: '/online-math-tutor-canada', label: 'Math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Scout before you spend'
  },

  personalityCss: `
.ag-root.ag-fer .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-fer .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-fer .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-fer .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-fer .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-fer .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Pascal, Cayley and Fermat page, Fryer, Galois and Hypatia page, CSMC and CIMC page, Euclid page and How contests work, read raw on 22 October 2026; the 2025 Fermat booklet cover (no problems); the 2026 PCF Results booklet, Fermat statistics only; the University of Waterloo Admission Information Form page (Supplementary Information Form wording): Grade 11 eligibility, Grade 11 or below for official status; Americas dates Tuesday, February 23 and Wednesday, February 24, 2027; Canadian deadline Tuesday, February 9, 2027; 60 minutes of working time; diagrams not to scale; 2026 Fermat mean 88.9, cutoffs 102 and 88, 17 959 contestants; question blank and correct shares from 15 to 25; the Q9 and Q10 strong-distractor shares; publication of top scorers and the opt-out; Hypatia, CSMC and Euclid facts; Waterloo SIF and scholarship statement. Ontario MCR3U and BC Pre-calculus 11 from facts-schools-contests.md.',
    localProject: 'Six original Fermat-style problems written by us with full solutions checked by brute force or substitution in Python (f(f(4)), 2 to the x plus 3 equals 4 to the x minus 1, arithmetic sequence 20th term, f(x) + 2f(1/x) = 3x, n squared minus 1 divisible by 24, dice product a multiple of 6); our three-pass time plan; four trap checks; a month-by-month plan; our share 102 / 150 = 68 percent. Lesson family: time triage.',
    requiredMentions: ['Students in Grade 11 are eligible to write the Fermat Contest', 'When your supervisor tells you to begin, you will have 60 minutes of working time', '80.34%', '58.51%', 'Minutes 25 to 30', 'f(x) + 2f(1/x) = 3x', '102 / 150', 'Supplementary Information Form', 'write the Euclid one or more times in previous years', 'Scout before you spend'],
    sources: [
      { claim: 'Fermat eligibility, 2027 dates and Canadian deadline, format, one per year, awards, 2026 averages and cutoffs, paper return for marking.', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: '60 minutes of working time, diagrams not to scale, scoring, publication of top-scoring students, from the 2025 Fermat booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025FermatContest.pdf' },
      { claim: 'Fermat 2026 question-level blank and correct shares, strong-distractor shares, 14670 counted contestants, average mark 88.77.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026%20PCF%20Results_May26.pdf' },
      { claim: 'Hypatia eligibility, date and marking.', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'CSMC eligibility, date, score and content.', url: 'https://cemc.uwaterloo.ca/contests/csimc' },
      { claim: 'Students write the Euclid before their final year; 2027 Euclid date.', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'Supplementary Information Form asks about Waterloo math contests; CSMC or Euclid not required for admission but required for some Faculty of Mathematics scholarships.', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form' }
    ],
    rejectedClaims: [
      'Any CEMC past problem, solution, answer letter or answer value: never reproduced; statistics given as percentages only.',
      'What the 2026 question 10 asked: not described or guessed.',
      'Pascal or Cayley figures, or a combined total: not printed on this page.',
      'That the AIF asks about contests (as the facts file says): the raw Waterloo page puts that question in the Supplementary Information Form, and the page follows the raw page.',
      'That Fermat affects admission or scholarships: Waterloo names only the CSMC and the Euclid, so nothing is claimed for Fermat.',
      'That our classes improve scores or earn awards: refused.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
