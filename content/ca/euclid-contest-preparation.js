'use strict';
// Euclid Contest preparation (ag- contest door; Canada cluster Plan 2, row 47). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the EUCLID CONTEST (final year of secondary school, CEMC) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/euclid-contest-preparation/):
//  - cemc.uwaterloo.ca/contests/euclid (euclid.txt): "North and South America: Tuesday, April 6, 2027"; "Outside North
//    and South America: Wednesday, April 7, 2027"; ordering deadline "Thursday, March 11, 2027"; "Written annually by
//    over 25 000 participants worldwide"; "Students in their final year of secondary school or CÉGEP students.";
//    "Motivated students in lower grades are welcome to write the contest."; "10 questions; a mix of final answer only
//    and full-solution."; "Time allowed for completion is 2.5 hours."; "Score out of 100."; "Each submitted solution is
//    assessed for completeness, clarity, and presentation style; a correct solution, poorly presented, will not earn a
//    full score for that problem."; "Written in school, participants write individually and on paper."; "Some
//    calculators permitted."; "Most of the problems on the Euclid Contest are based on curricula up to and including the
//    final year of secondary school. Some problems might require students to use knowledge beyond the curriculum in
//    their school."; workshops "three 90-minute sessions" based on "the eight modules"; results "four to six weeks
//    after the contest date"; question booklet "will NOT be shipped" but downloaded "roughly one day before contest day";
//    fee eighteen dollars per participant (words only); official participant at a school in Canada "born on or after
//    January 1, 2008, and" "live in Canada."; honour rolls "for regions with at least 30 participants"; plaques and
//    prizes for top official participants in Canada at CEMC's discretion (amounts deliberately omitted); 2026 table mean
//    52.2, Certificate of Distinction cutoff 66, School Medal Champion cutoff 52, maximum 100, contestants 23 985;
//    "Participation in the Euclid Mathematics Contest is not required for admission to the Faculty of Mathematics at the
//    University of Waterloo." The student testimonial on the page is not used.
//  - 2025 Euclid Contest booklet cover (2025EuclidContest.pdf; NO problem reproduced): "Number of questions: 10"; "Each
//    question is worth 10 marks"; SHORT ANSWER parts "worth 3 marks each", "full marks given for a correct answer which
//    is placed in the box", "part marks awarded only if relevant work is shown in the space provided"; FULL SOLUTION
//    parts "worth the remainder of the 10 marks for the question", "marks awarded for completeness, clarity, and style
//    of presentation", "a correct solution poorly presented will not earn full marks"; "Express answers as simplified
//    exact numbers except where otherwise indicated."; "Use mathematical statements and words to explain all of the
//    steps of your solution."; "Work out some details in rough on a separate piece of paper before writing your
//    finished solution."
//  - 2026 Euclid Results booklet (2026_Euclid_Results.pdf), Problem Averages: Q1 9.5, Q2 9.1, Q3 8.2, Q4 7.9, Q5 5.8,
//    Q6 4.5, Q7 3.4, Q8 1.8, Q9 1.2, Q10 0.73 (each out of 10; never summed). No names from honour rolls.
//  - cemc.uwaterloo.ca/resources/csmc-and-euclid-preparation-material: CSMC and Euclid "are the CEMC's most senior math
//    contests"; "There are eight major topic areas"; topic names Exponents and Logarithms, Trigonometry, Functions,
//    Equations and Polynomials, Analytic Geometry, Sequences and Series, Euclidean Geometry, Counting and Probability,
//    Properties of Numbers; "These topics are not posted in any particular order."
//  - CEMC General Preparation Advice (Advice.pdf, linked from that page): "use ideas from all areas of high school
//    mathematics except for calculus and vectors"; "Use words! You do not need to use full sentences, but words can make
//    things clearer."; "If you introduce variables, be clear about what those variables represent."; "If you find
//    yourself spending more than 5 minutes on a problem without making any progress, put a star on the problem";
//    "Part (a) on questions 9 and 10 may be easier than question 8"; "Set a timer and use no resources other than your
//    calculator."; Problem of the Month "posted on the first Tuesday of every month from October to May".
//  - cemc.uwaterloo.ca/contests/calculators: "other mathematical steps must be shown and justified in your written
//    solutions and specific marks may be allocated for these steps."
//  - cemc.uwaterloo.ca/contests/how-contests-work: integrity rule, violators "will be disqualified from the contest,
//    will not be considered for CEMC invitational workshops, and any current or future offers of admission to the
//    University of Waterloo may be revoked."
//  - University of Waterloo (ca/src/admissions, from the facts file rows 203 to 208, raw re-read): Computer Science page
//    "Participation in the Canadian Senior Mathematics Contest and/or the Euclid Mathematics Contest is not required for
//    admission, but writing one of these contests is required for some scholarships offered by the Faculty of
//    Mathematics."; AIF "is required for admission"; AIF deadline "February 15, 2027" for programs not listed separately.
//  - facts-geo.md section 3 (tzdb 2026e) for the April 2027 UTC offsets.
// Our own material, labelled on the page: the five two-part practice problems and their solutions, the complete model
// solution to our problem 6 with its line-by-line notes (all answers checked in Python on 22 October 2026), the
// 150-minute time budget, the plan to 6 April 2027, and the readings of CEMC's 2026 problem averages (66 / 100).
// Lesson family: writing a complete solution (an argument a stranger can mark).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MODEL = `Problem 6 (ours). Determine all positive integers n for which
n + 2 is a divisor of n^2 + 20.

Solution.
Since n^2 - 4 = (n - 2)(n + 2), we can write
    n^2 + 20 = (n - 2)(n + 2) + 24.

Because n - 2 is an integer, n + 2 always divides (n - 2)(n + 2).

If n + 2 divides n^2 + 20, then it divides the difference
(n^2 + 20) - (n - 2)(n + 2) = 24.
Conversely, if n + 2 divides 24, then it divides the sum
(n - 2)(n + 2) + 24 = n^2 + 20.
So n + 2 divides n^2 + 20 exactly when n + 2 divides 24.

Since n is a positive integer, n + 2 is at least 3.
The positive divisors of 24 that are at least 3 are
    3, 4, 6, 8, 12 and 24,
which give n = 1, 2, 4, 6, 10 and 22.

Check of the largest: when n = 22, n^2 + 20 = 504 = 24 x 21.

Therefore the positive integers n are 1, 2, 4, 6, 10 and 22.`;

const E2B = `2 sin^2(t) = 3 cos(t)
Use sin^2(t) = 1 - cos^2(t):
2 - 2 cos^2(t) = 3 cos(t)
2 cos^2(t) + 3 cos(t) - 2 = 0
(2 cos(t) - 1)(cos(t) + 2) = 0

cos(t) = -2 is impossible, because -1 <= cos(t) <= 1 for every angle.
So cos(t) = 1/2, and for 0 <= t <= 360 degrees, t = 60 or t = 300.
Check t = 300: sin^2(300) = 3/4, so the left side is 3/2,
and 3 cos(300) = 3/2. Both sides agree.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'The 2027 Euclid Contest from CEMC: how the 100 marks work, the 2026 question averages, a complete written solution taken apart line by line, five two-part problems, and what Waterloo says.' },
  slug: 'euclid-contest-preparation',
  code: 'ecp',
  accent: '#436631',
  accentRationale: 'Euclid Contest preparation, Canada: a muted moss green #436631, allocated for row 47; measured 6.2 RGB units (Euclidean) from the nearest site accent and 19.7 from the nearest other Canada accent; contrast 6.22 on the paper #FBF8F2, 5.85 and 5.35 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Euclid Contest preparation',
  title: 'Euclid Contest 2027: Date, Marking and Full Solutions',
  description: 'The 2027 Euclid Contest from CEMC: 6 April in the Americas, 10 questions in 2.5 hours, how full solutions are marked, a model written solution and a plan to April.',
  ogDescription: 'CEMC lists the 2027 Euclid Contest for Tuesday, April 6, 2027 in the Americas. How the 100 marks are earned, 2026 question averages, a complete written solution annotated line by line, practice problems and a plan.',
  twitterDescription: 'Euclid Contest 2027: the marking, the 2026 averages and how to write a full solution.',
  pageName: 'Euclid Contest Preparation',
  webPageDescription: 'A guide for final-year secondary students in Canada and their parents to CEMC\'s Euclid Contest, built from CEMC\'s 2027 Euclid page, the 2025 Euclid booklet cover, the 2026 results booklet and CEMC\'s preparation advice, with a model full solution, original practice problems and a plan.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests from Gauss to Euclid, including full-solution writing for the Euclid Contest, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Euclid Contest',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: '2027 contest' },
    { href: '#marks', label: 'Marking' },
    { href: '#model', label: 'Model solution' },
    { href: '#practice', label: 'Practice' },
    { href: '#waterloo', label: 'Waterloo' }
  ],
  eyebrow: 'Canada &middot; CEMC Euclid Contest &middot; final year',
  h1: 'Euclid Contest preparation, 2027',
  lede: 'The Euclid Contest is the senior paper of the University of Waterloo\'s Centre for Education in Mathematics and Computing, written on one spring morning by final-year secondary students and CÉGEP students, and by many younger ones who want a look at it early. It is the CEMC paper that most clearly rewards writing: ten questions over two and a half hours, where the later answers are only worth their marks if the reasoning is on the page. This guide is built from CEMC\'s Euclid page for 2027, the cover of the 2025 Euclid booklet, CEMC\'s 2026 results booklet and its preparation advice. It shows how the 100 marks are earned, how far into the paper students got in 2026, a complete written solution of ours taken apart line by line, five two-part practice problems, and what the University of Waterloo says about the Euclid in its own words.',
  secondaryCta: { href: '#model', label: 'Read the model solution' },
  wa: 'Hello Modern Age Coders, my child is in their final year in Canada and wants to prepare for the Euclid Contest on 6 April 2027. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; every problem and model solution here written by our teachers',
  spec: [
    ['Organiser', 'CEMC, University of Waterloo'],
    ['For', 'Final year of secondary school, or CÉGEP'],
    ['2027 date', 'Tuesday, April 6, 2027 (Americas)'],
    ['Paper', '10 questions, 2.5 hours, on paper'],
    ['Marks', '100: ten questions worth 10 each'],
    ['Answers', 'Short answers and full written solutions'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'The short version',
  capsule: 'The Euclid Contest is CEMC\'s senior math contest for students in their final year of secondary school or at CÉGEP: ten questions, two and a half hours, 100 marks, mixing short answers with full written solutions, written at school on Tuesday, April 6, 2027 in the Americas. Entry is through a school. Modern Age Coders prepares students for it live online, in a batch or one to one, in its Waterloo Math Contests course, Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses for the Euclid year',
    h2: 'The three courses behind our Euclid preparation',
    lede: 'The contest course carries the timed papers and the marked written solutions. The competition course takes the last three questions seriously. The high school course keeps the curriculum the paper rests on in good repair.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'ECP / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. The Grades 11 and 12 track builds to the Euclid, with proof writing, written solutions handed in every week and timed practice rounds.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'ECP / 02', title: 'Competition mathematics', note: 'Number theory, combinatorics, inequalities and geometry at the level of Euclid questions 8 to 10.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'ECP / 03', title: 'High school math, Grades 9 to 12', note: 'Logarithms, trigonometry, polynomials and sequences, the curriculum most Euclid questions grow from.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'The 2027 contest',
      h2: 'The 2027 Euclid Contest, from CEMC\'s page',
      lede: 'All of the following comes from CEMC\'s Euclid page, read on 22 October 2026. CEMC sets these details each year, so a final check of its page in March 2027 is worth the minute it takes.',
      body: [
        { kind: 'table', caption: 'The Euclid Contest for 2027, as published by CEMC (read 22 October 2026)', head: ['What families ask', 'CEMC\'s answer'], rows: [
          ['When is it?', '"North and South America: Tuesday, April 6, 2027". Elsewhere it is the next day, Wednesday, April 7, 2027.'],
          ['When must the school order?', 'By Thursday, March 11, 2027.'],
          ['Who is it for?', '"Students in their final year of secondary school or CÉGEP students." CEMC adds that "Motivated students in lower grades are welcome to write the contest."'],
          ['How big is it?', '"Written annually by over 25 000 participants worldwide".'],
          ['What is the paper?', '"10 questions; a mix of final answer only and full-solution." "Time allowed for completion is 2.5 hours." "Score out of 100."'],
          ['How is it written?', '"Written in school, participants write individually and on paper." It is a paper contest from start to finish.'],
          ['Calculators?', '"Some calculators permitted." CEMC\'s calculator rules apply, and written steps still have to be shown.'],
          ['What math?', '"Most of the problems on the Euclid Contest are based on curricula up to and including the final year of secondary school. Some problems might require students to use knowledge beyond the curriculum in their school."'],
          ['When are results out?', 'In the Contest Supervisor Portal "four to six weeks after the contest date".'],
          ['Fee?', 'Eighteen dollars per participant, plus processing and shipping charges, all billed to the school.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A change for 2027 schools should know about',
          left: [
            'CEMC has marked a new shipping rule on its Euclid page: the question booklets "will NOT be shipped to the schools". Instead, teachers download and print them from CEMC\'s Contest Material Repository "roughly one day before contest day in their timezone".',
            'Solution booklets and Student Information Forms still arrive by post, and the finished papers go back to CEMC in one package for marking. Nothing in this changes what a student does on the day.'
          ],
          rightH3: 'Who counts as an official participant',
          right: [
            'For a student writing at a school in Canada, CEMC counts an official participant as one who completes the Student Information Form, "were born on or after January 1, 2008, and" "live in Canada."',
            'Official status decides inclusion on honour rolls and in a school\'s team score. CEMC says unofficial participants are still marked and still eligible for certificates and medals.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/euclid" rel="noopener" target="_blank">CEMC, Euclid Contest</a>, read 22 October 2026. Modern Age Coders is a teaching company; we have no connection with CEMC or the University of Waterloo, and we cannot enter students or mark their papers.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'The 100 marks',
      h2: 'How a Euclid paper is marked: boxes, then arguments',
      lede: 'The front cover of the 2025 Euclid booklet sets out the marking in a few lines, and those lines explain how the paper should be written. The quotations below are from that cover; the 2027 booklet may word them differently.',
      body: [
        { kind: 'table', caption: 'Euclid marking, quoted from the cover of CEMC\'s 2025 Euclid Contest booklet', head: ['Part type', 'What the cover says'], rows: [
          ['Every question', '"Number of questions: 10" and "Each question is worth 10 marks"'],
          ['Short answer parts', '"worth 3 marks each"; "full marks given for a correct answer which is placed in the box"; "part marks awarded only if relevant work is shown in the space provided"'],
          ['Full solution parts', '"worth the remainder of the 10 marks for the question"; "marks awarded for completeness, clarity, and style of presentation"; "a correct solution poorly presented will not earn full marks"'],
          ['Form of answers', '"Express answers as simplified exact numbers except where otherwise indicated."'],
          ['How to write', '"Use mathematical statements and words to explain all of the steps of your solution." "Work out some details in rough on a separate piece of paper before writing your finished solution."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What that means in practice',
          left: [
            'A short-answer part is a box: the right answer in the box earns all 3 marks, whatever the working looks like. A wrong answer earns part marks only if relevant work is shown, so a line or two of working is insurance, not decoration.',
            'A full-solution part is an essay in miniature. A student who writes only the final number to a full-solution part has done the least valuable part of the job.'
          ],
          rightH3: 'Calculators do not write solutions',
          right: [
            'CEMC\'s calculator page is direct: on contests with full-solution questions, "other mathematical steps must be shown and justified in your written solutions and specific marks may be allocated for these steps."',
            'So a root found on a calculator is still a root that has to be found on paper. "Simplified exact numbers" also rules out a decimal from the screen where a surd or a fraction is expected.'
          ] },
        { kind: 'p', mt: true, html: 'CEMC\'s own Euclid page says the same thing in one sentence: each submitted solution "is assessed for completeness, clarity, and presentation style; a correct solution, poorly presented, will not earn a full score for that problem." The model solution further down this page is our attempt to show what that sentence looks like on paper.' }
      ]
    },
    {
      id: 'averages', tint: 'tint', eyebrow: '2026 in numbers',
      h2: 'How far into the 2026 Euclid students got',
      lede: 'CEMC\'s 2026 Euclid results booklet lists the average mark on each of the ten questions, each out of 10. It is the clearest picture available of how the paper climbs.',
      body: [
        { kind: 'table', caption: 'Average mark per question, 2026 Euclid Contest, each out of 10, from CEMC\'s 2026 Euclid Results booklet', head: ['Question', 'Average out of 10'], rows: [
          ['1', '9.5'], ['2', '9.1'], ['3', '8.2'], ['4', '7.9'], ['5', '5.8'],
          ['6', '4.5'], ['7', '3.4'], ['8', '1.8'], ['9', '1.2'], ['10', '0.73']
        ] },
        { kind: 'table', mt: true, caption: 'Euclid 2026 headline figures, from CEMC\'s Euclid page', head: ['Measure', 'Euclid 2026'], rows: [
          ['Average (mean)', '52.2 out of 100'],
          ['Certificate of Distinction cutoff', '66'],
          ['School Medal Champion cutoff', '52'],
          ['Number of contestants', '23 985']
        ] },
        { kind: 'p', mt: true, html: 'Our readings, labelled as ours. The first four questions averaged close to full marks; from question 5 the averages fall quickly, and by question 8 they are under 2 out of 10. The Certificate of Distinction line of 66 out of 100 sits above what the first four questions alone can give a student who is perfect on them (40), so a certificate in 2026 needed real progress on the middle questions as well. And because the averages on questions 8 to 10 are so low, a few marks earned there, for a correct part (a) or a clearly argued partial result, are worth more relative to the field than anywhere else on the paper. We have not added the ten averages together; CEMC publishes the overall mean itself.' },
        { kind: 'source', html: 'Sources: CEMC\'s 2026 Euclid Results booklet (Problem Averages) and the averages and cut-offs table on the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/euclid" rel="noopener" target="_blank">Euclid page</a>, read 22 October 2026. CEMC reminds schools there is "no passing or failing score".' }
      ]
    },
    {
      id: 'model', tint: 'deep', eyebrow: 'A complete written solution',
      h2: 'What a full-marks solution looks like: one of ours, taken apart',
      lede: 'Below is a Euclid-style full-solution question we wrote and the complete solution our teachers would hope to see. It is our problem and our solution, not CEMC\'s, and the notes after it explain what each part of the write-up is doing for the marker.',
      body: [
        { kind: 'code', label: 'Problem 6 &middot; our question and our complete solution', lang: 'text', code: MODEL },
        { kind: 'table', mt: true, caption: 'Why each part of the model solution is there (our notes, written the way we mark in class)', head: ['Part of the write-up', 'What it does for the marker'], rows: [
          ['The identity n<sup>2</sup> + 20 = (n - 2)(n + 2) + 24', 'States the key idea at once, in a line anyone can check by expanding'],
          ['"Because n - 2 is an integer..."', 'Gives the reason the first term is divisible, instead of leaving the marker to supply it'],
          ['Both directions, "if" and "conversely"', 'Shows the condition is exactly right: every n found works, and no n is missed. This is the step most first drafts leave out'],
          ['"n + 2 is at least 3"', 'Explains why the divisors 1 and 2 are thrown away, so the list is complete for a reason, not by luck'],
          ['The check with n = 22', 'Optional, but a quick sign that the answer was tested'],
          ['The final sentence', 'Answers the question as asked, in words, so the marker never has to hunt for the result']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The draft that loses marks',
          left: [
            'A typical first attempt tries n = 1, 2, 3 and so on up to 10, finds that 1, 2, 4, 6 and 10 work, and writes "the answer is 1, 2, 4, 6, 10". It misses 22, and even with 22 added it gives no reason why there are no more.',
            'On a short-answer box that might earn part marks. On a full-solution part it shows the student found a pattern, not that the pattern is complete, and that is the difference CEMC\'s marking is designed to see.'
          ],
          rightH3: 'CEMC\'s own advice on writing',
          right: [
            'CEMC\'s General Preparation Advice for the CSMC and Euclid gives short rules we use in class: "Use words! You do not need to use full sentences, but words can make things clearer." and "If you introduce variables, be clear about what those variables represent."',
            'It also suggests separating rough work from the solution itself. The model above is what is left after the rough work: every line is there because the argument needs it.'
          ] },
        { kind: 'p', mt: true, html: 'The lesson behind this page is that a solution is written for a stranger. The marker has never met the student and cannot ask what they meant. Our students hand in one written solution a week from the start of the season, and get it back marked against the three words CEMC uses: completeness, clarity, presentation.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Five two-part problems',
      h2: 'Five Euclid-style practice problems, with solutions',
      lede: 'Each of these is our practice problem, not a CEMC problem. We wrote them for students preparing for the Euclid; none is taken from or modelled on a past paper. Like the contest, most come in parts, with part (a) a short answer and part (b) either a harder short answer or a full solution. They climb roughly as questions 1 to 7 of a Euclid paper do. All answers were checked in Python.',
      body: [
        { kind: 'p', html: '<b>Problem 1.</b> <i>Our practice problem, not a CEMC problem.</i> (a) What is the value of log<sub>2</sub> 48 - log<sub>2</sub> 3? (b) Determine all real numbers x for which log<sub>3</sub>(x + 6) + log<sub>3</sub> x = 3.' },
        { kind: 'p', html: '<b>Solution.</b> (a) log<sub>2</sub> 48 - log<sub>2</sub> 3 = log<sub>2</sub>(48 / 3) = log<sub>2</sub> 16 = 4. (b) Both logarithms must be defined, so x > 0. Combining, log<sub>3</sub>(x(x + 6)) = 3, so x(x + 6) = 27, giving x<sup>2</sup> + 6x - 27 = 0 and (x + 9)(x - 3) = 0. The root x = -9 is rejected because log<sub>3</sub> x is not defined there, so x = 3. Check: log<sub>3</sub> 9 + log<sub>3</sub> 3 = 2 + 1 = 3. The rejected root is where marks are won or lost: writing "x = 3 or x = -9" is an incomplete answer.' },
        { kind: 'p', mt: true, html: '<b>Problem 2.</b> <i>Our practice problem, not a CEMC problem.</i> (a) In triangle ABC, the angle at C is 90 degrees, sin A = 5/13 and AB = 26. What is the length of BC? (b) Determine all angles t with 0 &le; t &le; 360 degrees for which 2 sin<sup>2</sup> t = 3 cos t. Full solution.' },
        { kind: 'p', html: '<b>Solution to (a).</b> BC is opposite angle A and AB is the hypotenuse, so BC / AB = sin A = 5/13, giving BC = 26 x 5/13 = 10.' },
        { kind: 'code', label: 'Problem 2(b) &middot; our full solution', lang: 'text', code: E2B, note: 'The line that earns the marks a hurried student loses is the rejection of cos t = -2, with its reason. "Not possible" with no reason is a gap in the argument; "because cosine is always between -1 and 1" closes it.' },
        { kind: 'p', mt: true, html: '<b>Problem 3.</b> <i>Our practice problem, not a CEMC problem.</i> (a) The first three terms of a geometric sequence are 6, x and 24, and x > 0. What is x? (b) An arithmetic sequence has first term a and common difference d. The sum of its first 10 terms is 155 and the sum of its first 20 terms is 610. Determine a and d.' },
        { kind: 'p', html: '<b>Solution.</b> (a) In a geometric sequence the ratio x / 6 equals 24 / x, so x<sup>2</sup> = 144, and since x > 0, x = 12. (b) The sum of the first n terms is (n/2)(2a + (n - 1)d). For n = 10: 5(2a + 9d) = 155, so 2a + 9d = 31. For n = 20: 10(2a + 19d) = 610, so 2a + 19d = 61. Subtracting, 10d = 30, so d = 3, and then 2a = 31 - 27 = 4, so a = 2. Check: the first 10 terms run from 2 to 29, and 10 x (2 + 29) / 2 = 155.' },
        { kind: 'p', mt: true, html: '<b>Problem 4.</b> <i>Our practice problem, not a CEMC problem.</i> (a) When p(x) = x<sup>3</sup> + kx - 6 is divided by x - 2, the remainder is 8. What is k? (b) The roots of x<sup>2</sup> - 7x + c = 0 are r and s, and r<sup>2</sup> + s<sup>2</sup> = 29. What is c?' },
        { kind: 'p', html: '<b>Solution.</b> (a) By the remainder theorem the remainder is p(2) = 8 + 2k - 6 = 2 + 2k. Setting 2 + 2k = 8 gives k = 3. (b) The roots satisfy r + s = 7 and rs = c. Then r<sup>2</sup> + s<sup>2</sup> = (r + s)<sup>2</sup> - 2rs = 49 - 2c, and 49 - 2c = 29 gives c = 10. Check: x<sup>2</sup> - 7x + 10 = (x - 2)(x - 5), and 4 + 25 = 29. Neither part needs the roots themselves, which is the point of both.' },
        { kind: 'p', mt: true, html: '<b>Problem 5.</b> <i>Our practice problem, not a CEMC problem.</i> (a) What is the distance from the origin to the line 3x + 4y = 20? (b) The points A(1, 3) and B(7, -5) are given. Determine all points P on the x-axis for which angle APB is 90 degrees. Give exact coordinates.' },
        { kind: 'p', html: '<b>Solution.</b> (a) The distance from (0, 0) to 3x + 4y - 20 = 0 is |0 + 0 - 20| / &radic;(3<sup>2</sup> + 4<sup>2</sup>) = 20 / 5 = 4. (b) Angle APB is 90 degrees exactly when P lies on the circle with diameter AB (with P different from A and B). The centre is the midpoint of AB, (4, -1), and the radius is half of AB: AB = &radic;(6<sup>2</sup> + 8<sup>2</sup>) = 10, so the radius is 5. The circle is (x - 4)<sup>2</sup> + (y + 1)<sup>2</sup> = 25. On the x-axis y = 0, so (x - 4)<sup>2</sup> = 24 and x = 4 &plusmn; 2&radic;6. The points are (4 + 2&radic;6, 0) and (4 - 2&radic;6, 0). The exact form matters: "Express answers as simplified exact numbers", so 8.90 and -0.90 would not do.' },
        { kind: 'two', mt: true,
          leftH3: 'Using the set',
          left: [
            'Problems 1 to 3 are the pace of Euclid questions 1 to 4: aim for about ten minutes each, written up properly. Problems 4 and 5 sit nearer questions 5 to 7.',
            'Write problem 2(b) and problem 5(b) as full solutions, then compare them with ours line by line. Every line of ours that you skipped is a line to ask about.'
          ],
          rightH3: 'What links the five',
          right: [
            'Each has a moment where the obvious answer is incomplete: a root to reject, an impossible cosine, a positive ratio, an identity that avoids solving, an exact value instead of a decimal.',
            'The Euclid rewards students who notice those moments and say so in writing. That habit, more than any formula, is what our classes build.'
          ] }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'What the paper draws on',
      h2: 'The eight topic areas CEMC names for the Euclid',
      lede: 'CEMC\'s preparation materials for the CSMC and Euclid, "the CEMC\'s most senior math contests", are organized into eight topic areas, each with a toolkit, worked samples and a problem set. The topic names are CEMC\'s; the notes beside them are ours.',
      body: [
        { kind: 'table', caption: 'CEMC\'s eight preparation topics (names as CEMC lists them, read 22 October 2026) with our teaching notes', head: ['CEMC topic', 'Our note on what students most need'], rows: [
          ['Exponents and Logarithms', 'Log laws used fluently, and the domain check every time (see our problem 1)'],
          ['Trigonometry', 'Identities, exact values and the sine and cosine laws, with impossible values rejected in writing'],
          ['Functions, Equations and Polynomials', 'The remainder and factor theorems, and sums and products of roots'],
          ['Analytic Geometry', 'Lines, circles and distances, and when a geometric fact saves algebra'],
          ['Sequences and Series', 'Arithmetic and geometric sums set up cleanly as equations'],
          ['Euclidean Geometry', 'Similar triangles, circle theorems and the habit of a large, labelled diagram'],
          ['Counting and Probability', 'Choosing whether order matters, and the complement'],
          ['Properties of Numbers', 'Divisibility, primes and factoring tricks like the one in our model solution']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Calculus is not on the list',
          left: [
            'CEMC\'s General Preparation Advice says the CSMC and Euclid "use ideas from all areas of high school mathematics except for calculus and vectors." CEMC also notes that the topics "are not posted in any particular order" and that contest problems often mix them.',
            'For an Ontario student, that means MHF4U, Advanced Functions, matters far more to the Euclid than MCV4U, Calculus and Vectors, although many Euclid writers take both.'
          ],
          rightH3: 'Beyond the school course',
          right: [
            'CEMC says some problems "might require students to use knowledge beyond the curriculum in their school." In our experience that usually means a counting or number theory idea, or a classical geometry result, rather than new topics.',
            'CEMC itself points students who need a review to its free courseware, naming the Grades 9/10/11 and Advanced Functions and Pre-Calculus material as the most helpful.'
          ] }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Two and a half hours',
      h2: 'Spending 150 minutes on ten questions',
      lede: 'The Euclid is long enough that time management is a skill of its own. CEMC\'s advice and our own budget are below; the budget is ours, built from timing students on past papers.',
      body: [
        { kind: 'table', caption: 'From CEMC\'s General Preparation Advice for the CSMC and Euclid (read 22 October 2026)', head: ['CEMC\'s advice', 'In CEMC\'s words'], rows: [
          ['When stuck', '"If you find yourself spending more than 5 minutes on a problem without making any progress, put a star on the problem" and move on'],
          ['Difficulty is uneven', '"Part (a) on questions 9 and 10 may be easier than question 8"'],
          ['Practice', '"Set a timer and use no resources other than your calculator."']
        ] },
        { kind: 'table', mt: true, caption: 'Our 150-minute budget for a Euclid paper (ours, not CEMC\'s)', head: ['Minutes', 'Questions', 'Aim'], rows: [
          ['0 to 35', '1 to 4', 'All of it, with short answers boxed and full solutions written cleanly the first time'],
          ['35 to 85', '5 to 7', 'Most of it; star anything stuck after five minutes'],
          ['85 to 115', '8 to 10, part (a) of each', 'The opening parts, which CEMC says may be easier than question 8'],
          ['115 to 140', 'Starred questions, or one later part', 'The single most promising unfinished part'],
          ['140 to 150', 'Everything', 'Read every full solution once for missing reasons and an unanswered final sentence']
        ] },
        { kind: 'p', mt: true, html: 'The last ten minutes are the ones students most often give away. Read in a hurry, a full solution usually looks finished. Read slowly, it often turns out to skip the "conversely" step, a rejected root or the closing sentence, and each of those can be put right in under a minute.' }
      ]
    },
    {
      id: 'day', tint: 'deep', eyebrow: 'Contest morning',
      h2: 'The Euclid morning across Canada\'s time zones',
      lede: 'There is no national start time. CEMC asks each school to start the paper close to the beginning of its own school day, on the official date for its country, so a student in Halifax finishes before a student in Vancouver begins.',
      body: [
        { kind: 'table', caption: 'UTC offsets on Tuesday, April 6, 2027, the Euclid date in the Americas (from the tz database, release 2026e)', head: ['Province or zone', 'Offset on 6 April 2027'], rows: [
          ['Newfoundland (NT)', 'UTC-2:30'],
          ['Nova Scotia, New Brunswick, Prince Edward Island (AT)', 'UTC-3'],
          ['Ontario and Quebec (ET)', 'UTC-4'],
          ['Manitoba (on UTC-5 all year from 1 November 2026)', 'UTC-5'],
          ['Saskatchewan and Alberta', 'UTC-6'],
          ['British Columbia (most of the province) and Yukon', 'UTC-7']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the day means for a student',
          left: [
            'The paper starts in the morning, at school, so the student needs the usual school-day routine, not a late night of revision. The question booklet is printed at the school, so there is nothing to collect beforehand.',
            'The paper is written on paper only, individually. Bring the permitted calculator, pencils and an eraser, and nothing that stores notes.'
          ],
          rightH3: 'Our classes in April 2027',
          right: [
            'Eastern clocks move forward on 14 March 2027, three weeks before the contest. We confirm class times with every family after that change, because Manitoba, Saskatchewan, Alberta and British Columbia do not move.',
            'The final class before 6 April is a short review on a weekday evening, never a long session the night before.'
          ] }
      ]
    },
    {
      id: 'entry', tint: 'tint', eyebrow: 'Entry and integrity',
      h2: 'Entering the Euclid, and the rule every writer should know',
      lede: 'A student writes the Euclid through a school, at that school, under supervision. The school\'s order is due by Thursday, March 11, 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask early in the final year.</b> Find out from the head of math whether the school orders the Euclid, and tell them your child intends to write.',
          '<b>If the school has no CEMC account,</b> its head of math or principal applies for one, and CEMC reviews applications by hand over as long as three weeks.',
          '<b>If the school will not order,</b> CEMC suggests looking for another school in the area that will let the student sit the paper with its students.',
          '<b>Write on the official date.</b> CEMC says a contest can never be written before its official date, and the Euclid is always written in person.'
        ] },
        { kind: 'p', mt: true, html: 'CEMC\'s integrity rule carries particular weight for a final-year student. Participants who break the contest rules, CEMC says, "will be disqualified from the contest, will not be considered for CEMC invitational workshops, and any current or future offers of admission to the University of Waterloo may be revoked." We teach students to write every line themselves, in class and on the day, and we mean it: no shortcut is worth that risk. Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a>.' }
      ]
    },
    {
      id: 'waterloo', tint: 'deep', eyebrow: 'The Euclid and Waterloo',
      h2: 'What the University of Waterloo says about the Euclid',
      lede: 'Families ask about this more than anything else. The rows below are only what CEMC and the University of Waterloo publish; we add nothing to them and promise nothing beyond them.',
      body: [
        { kind: 'table', caption: 'The Euclid and University of Waterloo admission, in the organizers\' own words (read 22 October 2026)', head: ['Statement', 'Where it appears'], rows: [
          ['"Participation in the Euclid Mathematics Contest is not required for admission to the Faculty of Mathematics at the University of Waterloo."', 'CEMC\'s Euclid page'],
          ['"Participation in the Canadian Senior Mathematics Contest and/or the Euclid Mathematics Contest is not required for admission, but writing one of these contests is required for some scholarships offered by the Faculty of Mathematics."', 'Waterloo\'s Computer Science program page'],
          ['The Admission Information Form "is required for admission."', 'Waterloo\'s Computer Science program page'],
          ['The deadline Waterloo lists for "Programs other than those listed in the next rows" is February 15, 2027; Engineering, listed separately, is February 1, 2027.', 'Waterloo\'s Admission Information Form page']
        ] },
        { kind: 'p', mt: true, html: 'Two things follow, and they are our reading only. The Euclid is not an entry requirement, so no student should treat it as a gate. And because Waterloo names it among the contests required for some Faculty of Mathematics scholarships, a student interested in those scholarships should read Waterloo\'s scholarship pages directly and write the Euclid in the year Waterloo expects. We cannot say how any university weighs a Euclid score, and we never claim to.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/euclid" rel="noopener" target="_blank">CEMC, Euclid Contest</a>, <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">University of Waterloo, Computer Science</a> and <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/admissions/admission-information-form" rel="noopener" target="_blank">University of Waterloo, Admission Information Form</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'The plan',
      h2: 'Five blocks from November 2026 to 6 April 2027',
      lede: 'Our plan for a final-year student who starts in early November and writes on Tuesday, April 6, 2027. It runs on two live classes a week and one written solution handed in every week from the first block.',
      body: [
        { kind: 'ol', items: [
          '<b>Block 1, 2 November to 6 December 2026: logarithms, exponents and sequences.</b> Questions 1 to 4 from two past Euclid papers, untimed. First written solutions marked for completeness, clarity and presentation.',
          '<b>Block 2, 7 December 2026 to 10 January 2027: trigonometry and polynomials.</b> Identities, exact values, the remainder theorem and sums and products of roots. The holiday weeks carry one full-solution question a day, nothing more.',
          '<b>Block 3, 11 January to 14 February 2027: analytic and Euclidean geometry.</b> Circles, distances, similar triangles and circle theorems. One full past paper, timed at 150 minutes, at the end of January. Waterloo lists February 15, 2027 as its form deadline for most programs, at the end of this block, so we keep the load lighter for applicants.',
          '<b>Block 4, 15 February to 21 March 2027: counting, probability and properties of numbers.</b> The later questions: part (a) of questions 8 to 10 from past papers, and model-solution practice like our problem 6. Confirm the school\'s order before Thursday, March 11, 2027.',
          '<b>Block 5, 22 March to 6 April 2027: rehearsal.</b> Two more full papers under contest conditions, each reviewed line by line, then a last week of rewriting old solutions more clearly rather than learning anything new.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 11, writing early', p: 'Blocks 1 to 3 matter most. A first Euclid is a rehearsal for the final-year one, as CEMC itself notes many students write it more than once.' },
          { h3: 'Final year, first Euclid', p: 'The full plan, aiming at questions 1 to 7 and part (a) of the last three.' },
          { h3: 'Final year, experienced', p: 'Blocks 1 and 2 shortened; the time moves to questions 8 to 10 and to cleaner write-ups.' }
        ] }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Free CEMC material',
      h2: 'CEMC\'s free Euclid materials, and how we use them',
      lede: 'CEMC publishes more Euclid help than most families realize, all of it free. We link to it rather than reproducing it, and we build our own problems alongside it.',
      body: [
        { kind: 'table', caption: 'Free CEMC resources for a Euclid writer (read 22 October 2026)', head: ['Resource', 'What CEMC provides', 'How we use it'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past Euclid papers</a>', 'Past contests with official solutions and results', 'Three full timed papers from late January, and question-by-question work before that'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/csmc-and-euclid-preparation-material" rel="noopener" target="_blank">CSMC and Euclid preparation material</a>', 'Eight topic areas, each with a toolkit, sample problems with full solutions and a problem set', 'One topic set per block, solutions read only after a full attempt'],
          ['Euclid Preparation Workshops', '"three 90-minute sessions" based on the eight modules, with CEMC\'s own schedule and registration', 'A useful addition for students who want CEMC\'s own presenters'],
          ['Problem of the Month', 'A new problem "on the first Tuesday of every month from October to May"', 'Stretch material for students aiming at questions 9 and 10'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a>', 'Free lessons, including Advanced Functions and Pre-Calculus', 'Review of a single curriculum gap a past paper has exposed']
        ] },
        { kind: 'p', mt: true, html: 'One more habit from CEMC\'s advice that we use: swapping solutions. CEMC suggests students "swap solutions with a classmate and see if you can understand each other\'s solutions." In our batches students read and mark each other\'s write-ups, which teaches them to see a gap from the marker\'s side of the desk.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four stages of a Euclid writer',
    lede: 'Our stages, used to place a student in the first class.',
    table: { caption: 'From answer-finder to solution-writer (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Answer-finder', 'Solves the early questions but writes only the final number'],
      ['2. Steady', 'Clears questions 1 to 4 with working that a marker can follow'],
      ['3. Solution-writer', 'Writes complete full solutions to questions 5 to 7, with reasons for every step'],
      ['4. Explorer', 'Earns part (a) marks on questions 8 to 10 and argues partial results clearly']
    ] },
    left: { h3: 'For parents', ps: [
      'Most strong students start at stage 1, because school math rarely asks for a full written argument. The move to stage 3 takes months, which is why we start written solutions in the first week.',
      'The Euclid is one morning. What lasts is the ability to explain a piece of mathematics in writing, which first-year university courses ask for at once.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the final sentence of every full solution: "Therefore..." It costs five seconds and saves the marker a search.',
      'When a root, an angle or a case is thrown away, say why in the same line.'
    ] }
  },

  catalogue: {
    eyebrow: 'The wider catalogue',
    h2: 'Nine courses for a final-year math student',
    lede: 'Every course is live and online, with one teacher who follows the student, in a group or one to one, for students in any province.',
    bands: [
      { num: 'I', h3: 'Senior math', sub: 'Final year of school', courses: [
        { code: 'ECP / BASE / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'Calculus for schools that offer AP; not needed for the Euclid itself.' },
        { code: 'ECP / BASE / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The counting and probability topic in depth.' },
        { code: 'ECP / BASE / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For IB students writing the Euclid too.' }
      ] },
      { num: 'II', h3: 'After the Euclid', sub: 'University-level math', courses: [
        { code: 'ECP / NEXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Calculus, linear algebra and analysis, a first-year preview.' },
        { code: 'ECP / NEXT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics and linear algebra for future data scientists.' },
        { code: 'ECP / NEXT / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof foundations', blurb: 'For younger siblings starting to write proofs.' }
      ] },
      { num: 'III', h3: 'Math meets code', sub: 'For future Math and CS students', courses: [
        { code: 'ECP / CODE / 01', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U companion', blurb: 'Ontario computer science, taught alongside school.' },
        { code: 'ECP / CODE / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'CEMC\'s programming contest, earlier in the year.' },
        { code: 'ECP / CODE / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For students heading into computer science.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Euclid classes in a busy final year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches, fixed in Eastern time and shown on each family\'s own clock.' },
      { time: 'Weekends', l: 'Morning classes that leave school nights for applications and homework.' },
      { time: '1-on-1', l: 'Arranged around a final-year timetable, planned back from 6 April.' }
    ],
    cells: [
      { h3: 'Written every week', p: 'One full solution handed in weekly and returned marked.' },
      { h3: 'Our own problems', p: 'Euclid-style sets we write, beside CEMC\'s papers.' },
      { h3: 'Timed papers', p: 'Three full 150-minute papers from late January.' },
      { h3: 'Peer marking', p: 'Students read each other\'s solutions as a marker would.' },
      { h3: 'All provinces', p: 'One live class, joined from Victoria, Regina or Moncton.' },
      { h3: 'Batch or private', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Student projects alongside the math',
  projectsLede: 'Many of our Euclid students also code. A few of their projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews parents left on Google, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'CEMC\'s Euclid fee is charged to the school. Our fee covers the teaching only, monthly, and a final-year student can stop the month after the April 2027 contest with nothing further owed.',
    free: ['A free first class', 'One Euclid-style question, written up together', 'No card asked for'],
    group: ['A batch of fifteen to twenty', 'Final-year students together', 'Choose your batch', 'Month by month'],
    one: ['A teacher of your own', 'Paced to 6 April 2027', 'Built on your own written solutions']
  },

  faq: {
    eyebrow: 'Final-year families ask',
    h2: 'Euclid Contest: questions answered',
    items: [
      { q: 'What is the Euclid Contest?', a: 'It is CEMC\'s senior math contest, from the University of Waterloo, for students in their final year of secondary school or at CÉGEP. It has ten questions, takes two and a half hours, is marked out of 100, and mixes short answers with full written solutions.' },
      { q: 'When is the Euclid Contest in 2027?', a: 'CEMC lists Tuesday, April 6, 2027 for North and South America and Wednesday, April 7, 2027 elsewhere. Schools must order it by Thursday, March 11, 2027.' },
      { q: 'How is the Euclid marked?', a: 'Each question is worth 10 marks. On the 2025 paper, short-answer parts were worth 3 marks each, with full marks for a correct answer in the box, and full-solution parts were worth the rest of the 10, marked for completeness, clarity and style of presentation.' },
      { q: 'Are calculators allowed on the Euclid?', a: 'CEMC says some calculators are permitted, but on full-solution questions the other mathematical steps must still be shown and justified, and specific marks may be given for them. Answers are expected as simplified exact numbers unless a question says otherwise.' },
      { q: 'Is the Euclid required for University of Waterloo admission?', a: 'No. CEMC says participation in the Euclid is not required for admission to Waterloo\'s Faculty of Mathematics. Waterloo says writing the Euclid or the CSMC is required for some Faculty of Mathematics scholarships. We make no promise about admission or scholarships.' },
      { q: 'Can a Grade 11 student write the Euclid?', a: 'Yes, if the school orders it for them. Younger students who are keen are welcome, says CEMC, and its Euclid page says many students aiming for a strong final-year score write it more than once before then.' },
      { q: 'What was a good Euclid score in 2026?', a: 'CEMC lists a 2026 average of 52.2 out of 100, a Certificate of Distinction cutoff of 66 and a School Medal Champion cutoff of 52, with 23 985 contestants. The question averages fell from 9.5 out of 10 on question 1 to 0.73 on question 10.' },
      { q: 'Does the Euclid include calculus?', a: 'CEMC\'s preparation advice says the CSMC and Euclid use ideas from all areas of high school math except calculus and vectors. Its eight preparation topics run from exponents and logarithms to properties of numbers.' },
      { q: 'How do we register for the Euclid?', a: 'Through the school. Students cannot register themselves; the school orders the contest from CEMC and the student writes there in person. If the school will not order, CEMC suggests finding another local school that will let the student join.' },
      { q: 'What times are your Euclid classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We plan in Eastern time and confirm every class in the family\'s own time zone, including after the clocks change on 14 March 2027.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More to read',
    h2: 'Related pages',
    lede: 'Pages for final-year students in Canada thinking about contests, university math and computer science.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Every CEMC math contest on one page.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Help with MHF4U and other final-year courses.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Where our Canada pages start.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Ontario Grade 11 computer science, for future CS applicants.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'CEMC\'s programming contest, in February.' },
      { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutoring', p: 'Final-year math, one topic at a time.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC 12 and AIME', p: 'The American contests many Euclid writers also sit.' },
      { href: '/maths-olympiad-classes-online', label: 'Choosing an olympiad', p: 'How the world\'s math contests compare.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Why we teach arguments, not answer keys.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class takes one Euclid-style full-solution question we wrote and writes it up together, line by line, on screen. You leave knowing which of the four stages your child is at and how we would use the months before 6 April 2027.',
    readFirst: 'Would you rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus in full.',
    note: 'Our teachers are in India and every class is live on video, so there is no Canadian office to visit. WhatsApp gets the fastest reply from anywhere in Canada.',
    formNote: 'Free first class. No card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME' },
        { href: '/maths-olympiad-classes-online', label: 'Choosing an olympiad' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Write it for a stranger'
  },

  personalityCss: `
.ag-root.ag-ecp .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ecp .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ecp .ag-section-head h2 { max-width: 38ch; }
.ag-root.ag-ecp .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-ecp .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-ecp .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Euclid page, CSMC and Euclid preparation material, General Preparation Advice, Calculators and How contests work, read raw on 22 October 2026; the cover of the 2025 Euclid booklet (marking only, no problems); the 2026 Euclid Results booklet (Problem Averages); the University of Waterloo Computer Science and Admission Information Form pages: 2027 dates Tuesday, April 6, 2027 (Americas) and Wednesday, April 7, 2027; ordering deadline Thursday, March 11, 2027; audience; over 25 000 participants; 10 questions, 2.5 hours, out of 100; marking of short-answer and full-solution parts; exact answers; booklet download change; official participants born on or after January 1, 2008; 2026 mean 52.2, cutoffs 66 and 52, 23 985 contestants; question averages 9.5 to 0.73; eight preparation topics; no calculus and vectors; integrity rule; Waterloo admission and scholarship statements; the February 15, 2027 form deadline for programs not listed separately. UTC offsets from facts-geo.md section 3.',
    localProject: 'A complete model full solution written by us (positive integers n with n + 2 dividing n squared plus 20: n = 1, 2, 4, 6, 10, 22) with line-by-line notes on what each part does for a marker; five original two-part Euclid-style problems with solutions checked in Python (logarithms with a rejected root, 2 sin squared t = 3 cos t, sequences, remainder theorem and sum of squares of roots, right angle on a circle with diameter AB giving 4 plus or minus 2 root 6); a 150-minute time budget; a five-block plan to 6 April 2027. Lesson family: writing a complete solution for a stranger to mark.',
    requiredMentions: ['Each question is worth 10 marks', 'part marks awarded only if relevant work is shown in the space provided', 'Express answers as simplified exact numbers except where otherwise indicated', 'except for calculus and vectors', '9.5 out of 10 on question 1 to 0.73 on question 10', 'Properties of Numbers', 'any current or future offers of admission to the University of Waterloo may be revoked', 'n = 1, 2, 4, 6, 10 and 22', 'The draft that loses marks', 'Write it for a stranger', 'will NOT be shipped to the schools'],
    sources: [
      { claim: 'Euclid 2027 dates and deadline, audience, scale, format, marking sentence, writing on paper, calculators, content, results timing, booklet download, official participants, 2026 averages and cutoffs, Waterloo admission note.', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'Marking of short-answer and full-solution parts, exact answers, writing instructions, from the 2025 Euclid booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025EuclidContest.pdf' },
      { claim: '2026 Euclid problem averages, question by question.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026_Euclid_Results.pdf' },
      { claim: 'Eight preparation topic areas and the most-senior-contests line.', url: 'https://cemc.uwaterloo.ca/resources/csmc-and-euclid-preparation-material' },
      { claim: 'General Preparation Advice: no calculus and vectors, writing tips, five-minute star rule, part (a) of questions 9 and 10, timed practice, Problem of the Month.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2024/Advice.pdf' },
      { claim: 'Steps must be shown and justified on full-solution contests.', url: 'https://cemc.uwaterloo.ca/contests/calculators' },
      { claim: 'Integrity rule and its consequences, school-only entry.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CSMC or Euclid not required for admission but required for some Faculty of Mathematics scholarships; AIF required.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'Form deadline February 15, 2027 for programs not listed separately; Engineering February 1, 2027.', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution: never reproduced; the page links to CEMC\'s archive and uses problems we wrote.',
      'The three-consecutive-integers proof used on the hub page: deliberately not reused; the model solution is a different problem.',
      'A total of the ten 2026 question averages: not computed; CEMC\'s own mean is printed instead.',
      'Prize amounts for top Euclid participants: omitted.',
      'Honour-roll names and the student testimonial on CEMC\'s page: not reproduced.',
      'How Waterloo or any university weighs a Euclid score: not stated by the sources, so not claimed.',
      'That our classes raise scores, earn certificates or secure admission or scholarships: refused.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
