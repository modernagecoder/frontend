'use strict';
// CIMC and CSMC contest guide (ag- contest door; Canada cluster Plan 2, row 49). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the CANADIAN INTERMEDIATE and SENIOR MATHEMATICS CONTESTS
// (CEMC, November) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/cimc-and-csmc-contest-guide/
// and ca/src/cemc/csimc.html):
//  - cemc.uwaterloo.ca/contests/csimc (csimc.txt): "North and South America: Wednesday, November 18, 2026"; "Outside
//    North and South America: Thursday, November 19, 2026"; "Ordering deadline: Thursday, October 22, 2026"; "Students in
//    Grades 9 and 10 are eligible to write the CIMC."; "Students in Grades 11 and 12 and CÉGEP students are eligible to
//    write the CSMC."; "9 questions; 6 are answer only and 3 are full-solution."; "Time allowed for completion is 2
//    hours."; "Score out of 60."; "Written in school, participants write individually on paper."; "Some calculators
//    permitted."; "Most of the CIMC problems are based on mathematical topics commonly taught up to and including Grade
//    10. Most of the CSMC problems are based on the mathematical curriculum up to and including the final year of
//    secondary school."; contest timing "as close to the beginning of the school day as possible in their respective
//    time zones"; results "four weeks after the contest date"; CSMC booklets "will NOT be shipped to the school for
//    schools located in Canada" and are downloaded "roughly one day before the contest day", while CIMC booklets and
//    paper materials "will still be shipped to schools in Canada"; CSMC Preparation Workshops "three 60-minute
//    sessions" based on "the eight modules"; official CSMC writers in Canada "were born on or after January 1, 2008,
//    and" "live in Canada."; CIMC writers are official "if they are in Grade 10 or below"; top 25% Certificate of
//    Distinction; Team Score "the sum of its five highest scoring official participants' scores"; 2025 table Senior /
//    Intermediate mean 28.6 / 29.1, Distinction cutoff 35 / 35, School Medal Champion cutoff 28 / 29, maximum 60,
//    contestants 15 153 / 13 039; "Participation in the Canadian Senior Mathematics Contest (CSMC) is not required for
//    admission to the Faculty of Mathematics at the University of Waterloo." Fee and prize amounts deliberately omitted.
//  - 2025 CSMC and CIMC booklets (2025CSMC.pdf, 2025CIMC.pdf; FRONT COVERS ONLY, no problem reproduced): "Time: 2
//    hours"; "There are two parts to this paper."; "The questions in each part are arranged roughly in order of
//    increasing difficulty. The early problems in Part B are likely easier than the later problems in Part A."; PART A
//    "six questions, each worth 5 marks", "full marks will be given for a correct answer which is placed in the box",
//    "Part marks will be awarded only if relevant work is shown"; PART B "three questions, each worth 10 marks",
//    "Rough work should be done separately.", "Marks are awarded for completeness, clarity, and style of presentation.";
//    the five disallowed calculator features. The 2025 CSMC solutions booklet was opened to confirm its structure only;
//    none of its problems or methods is used.
//  - 2025 CSIMC Results Booklet (2025CSIMCResultsBooklet.pdf), Problem Averages read from the French CCMS / CCMI
//    columns (the English layout interleaves them): CSMC Part A 4.5, 4.4, 3.5, 2.8, 0.8, 0.2 and Part B 7.3, 4.0, 0.7;
//    CIMC Part A 4.7, 4.6, 4.5, 1.8, 1.0, 0.1 and Part B 6.9, 4.0, 1.1. CEMC's own enrolment total 28192. Never summed.
//  - cemc.uwaterloo.ca/workshops/student-workshops: the Auckland workshop "brings together high-achieving Grade 11
//    Canadian Senior Mathematics Contest participants from Canada for a week-long immersive experience."
//  - uwaterloo.ca/math/undergraduate-studies/applying/scholarships: "Participation in the Canadian Senior Mathematics
//    Contest and Euclid Mathematics Contest are not required for admission, but writing one of these contests is
//    required for some scholarship decisions."
//  - cemc.uwaterloo.ca/contests/fgh and /contests/euclid via facts-schools-contests.md rows 149 to 151 (April 2027).
//  - facts-geo.md section 3 (tzdb 2026e): offsets on Wednesday, November 18, 2026, after the 1 November change.
// Our own material, labelled on the page: the five Part A practice problems and two Part B questions, the complete
// model solution on consecutive-sum numbers (all answers checked in Python on 22 October 2026), the 120-minute order of
// attack, the four-week plan to 18 November 2026, and our readings of CEMC's 2025 problem averages.
// Lesson family: order of attack (when to leave Part A for Part B, and come back).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MODEL = `Part B question (ours). Call a positive integer a run number
if it equals the sum of two or more consecutive positive integers.

(a) Show that 15 is a run number in three different ways.
(b) Explain why 64 is not a run number.
(c) Prove that no power of 2 is a run number.

(a) 15 = 7 + 8 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5.

(c) first, because (b) then follows from it.
Suppose N is the sum of k consecutive positive integers
starting at a, where k >= 2 and a >= 1. Then
    N = a + (a + 1) + ... + (a + k - 1) = k(2a + k - 1) / 2,
so 2N = k(2a + k - 1).

The two factors k and 2a + k - 1 add to 2a + 2k - 1,
which is odd, so one factor is odd and the other is even.
Both factors are at least 2: k >= 2 by assumption,
and 2a + k - 1 >= 2 + 2 - 1 = 3.
So 2N has an odd factor that is at least 3.

A power of 2 doubled is still a power of 2, and its only
odd factor is 1. So N cannot be a power of 2.

(b) 64 = 2^6 is a power of 2, so by (c) it is not a run number.

Therefore 15 is a run number in the three ways shown,
and no power of 2, including 64, is a run number.`;

const B2 = `Part B practice 2 (ours), triangle with sides 13, 14 and 15.
Put the side of length 14 on the x-axis, from B(0, 0) to C(14, 0),
and let the third vertex be A(x, h) with h > 0.

AB = 13:  x^2 + h^2 = 169
AC = 15:  (x - 14)^2 + h^2 = 225
Subtract: (x - 14)^2 - x^2 = 56, so -28x + 196 = 56 and x = 5.
Then h^2 = 169 - 25 = 144, so h = 12.

(a) Area = (1/2)(14)(12) = 84.
(b) The altitude to the side of length 14 is h = 12.
(c) Join the incentre I to A, B and C. The three small triangles
    have height r and bases 13, 14 and 15, so
    84 = (1/2) r (13 + 14 + 15) = 21r, and r = 4.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CEMC\'s November pair, the CIMC and CSMC: 18 November 2026, six boxed answers and three written solutions in two hours, the 2025 question averages and how to cross between the parts.' },
  slug: 'cimc-and-csmc-contest-guide',
  code: 'cccg',
  accent: '#376660',
  accentRationale: 'CIMC and CSMC contest guide, Canada: a muted spruce teal #376660, allocated for row 49; measured 7.2 RGB units (Euclidean) from the nearest site accent (#3D665C) and 13.1 from the nearest allocated Canada accent (#2C615B); contrast 6.13 on the paper #FBF8F2, 5.76 and 5.27 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CIMC and CSMC guide',
  title: 'CIMC and CSMC 2026: Dates, Marking and Practice',
  description: 'CEMC\'s CIMC and CSMC on 18 November 2026: nine questions in two hours out of 60, Part A boxes and Part B written solutions, 2025 averages and original practice.',
  ogDescription: 'CEMC lists the Canadian Intermediate and Senior Mathematics Contests for Wednesday, November 18, 2026 in the Americas. The two-part paper, the 2025 question averages, a full model solution and a four-week plan.',
  twitterDescription: 'CIMC and CSMC 2026: the two-part paper, the 2025 averages and when to jump to Part B.',
  pageName: 'CIMC and CSMC Contest Guide',
  webPageDescription: 'A guide for Grade 9 to 12 students in Canada and their parents to CEMC\'s Canadian Intermediate and Senior Mathematics Contests, built from CEMC\'s contest page, the 2025 booklet covers and the 2025 results booklet, with a model written solution, original practice problems and a four-week plan.',
  courseDescription: 'Live online preparation for the CEMC Waterloo math contests, including the November CIMC and CSMC with weekly marked written solutions, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'CIMC and CSMC',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: 'November 2026' },
    { href: '#paper', label: 'Two parts' },
    { href: '#averages', label: '2025 averages' },
    { href: '#model', label: 'Model solution' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Canada &middot; CEMC CIMC and CSMC &middot; Grades 9 to 12',
  h1: 'CIMC and CSMC contest guide, November 2026',
  lede: 'Every November, Waterloo\'s CEMC runs two contests side by side on the same morning: the Canadian Intermediate Mathematics Contest for Grades 9 and 10 and the Canadian Senior Mathematics Contest for Grades 11, 12 and CÉGEP. They share one shape, a two-hour paper split into six boxed answers and three written solutions, and one awkward fact printed on the cover: the first written question is usually easier than the last few boxed ones. This guide is built from CEMC\'s contest page, the covers of the 2025 booklets and CEMC\'s 2025 results booklet. It sets out what the paper asks, how far students got on each question in 2025, an order of attack built on that, a complete model solution of ours, seven practice problems of ours and a four-week plan to Wednesday, November 18, 2026.',
  secondaryCta: { href: '#averages', label: 'See the 2025 averages' },
  wa: 'Hello Modern Age Coders, my child is writing the CIMC or CSMC on 18 November 2026 and we would like some focused preparation. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; every practice problem on this page written by our teachers',
  spec: [
    ['Organiser', 'CEMC, University of Waterloo'],
    ['CIMC', 'Grades 9 and 10'],
    ['CSMC', 'Grades 11 and 12, and CÉGEP'],
    ['2026 date', 'Wednesday, November 18, 2026 (Americas)'],
    ['Paper', '9 questions, 2 hours, out of 60'],
    ['Parts', 'A: six boxed answers. B: three written solutions'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'In brief',
  capsule: 'The CIMC (Grades 9 and 10) and the CSMC (Grades 11, 12 and CÉGEP) are CEMC\'s November math contests: nine questions in two hours, six answer-only and three full-solution, scored out of 60 and written at school on Wednesday, November 18, 2026 in the Americas. Modern Age Coders teaches both papers live online, to batches or to single students, through its course Waterloo Math Contests: Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses behind the November pair',
    h2: 'Where our CIMC and CSMC preparation is taught',
    lede: 'The contest course runs the timed papers and returns every written solution marked. The competition course is for the Part B question nobody finishes. The high school course closes the curriculum gaps that a CSMC paper finds quickly.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'CCCG / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. Grades 9 and 10 meet the CIMC; Grades 11 and 12 meet the CSMC, with a marked written solution every week.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'CCCG / 02', title: 'Competition mathematics', note: 'Proof, number theory and counting at the level of the third Part B question.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'CCCG / 03', title: 'High school math, Grades 9 to 12', note: 'Quadratics, geometry and functions: the school topics the November papers lean on.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'November 2026',
      h2: 'The 2026 CIMC and CSMC, as CEMC lists them',
      lede: 'Everything in this table is from CEMC\'s Canadian Senior and Intermediate Mathematics Contests page, read on 22 October 2026, the same day CEMC\'s ordering window for schools closed.',
      body: [
        { kind: 'table', caption: 'The 2026 Canadian Intermediate and Senior Mathematics Contests, from CEMC (read 22 October 2026)', head: ['Question', 'CEMC\'s answer'], rows: [
          ['Contest day', '"North and South America: Wednesday, November 18, 2026". Schools elsewhere write on Thursday, November 19, 2026.'],
          ['School ordering deadline', 'Thursday, October 22, 2026. That date has now arrived, so a family that has not yet asked should check with the school today whether an order went in.'],
          ['Who writes the CIMC', '"Students in Grades 9 and 10 are eligible to write the CIMC."'],
          ['Who writes the CSMC', '"Students in Grades 11 and 12 and CÉGEP students are eligible to write the CSMC."'],
          ['The paper', '"9 questions; 6 are answer only and 3 are full-solution." Two hours. "Score out of 60."'],
          ['How it is written', 'In school, individually, on paper. Some calculators are permitted.'],
          ['What math', 'CIMC: mostly topics "commonly taught up to and including Grade 10". CSMC: mostly the curriculum "up to and including the final year of secondary school".'],
          ['Start time', 'As close to the start of the school day as possible, in the school\'s own time zone, on the official date.'],
          ['Results', 'In the Contest Supervisor Portal four weeks after the contest date.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One shipping rule, two answers',
          left: [
            'CEMC has split its shipping rule by contest for schools in Canada. CSMC question booklets are no longer posted; instead the school prints them from a CEMC download area roughly a day ahead of the contest.',
            'CIMC question booklets are still shipped to schools in Canada as before. Either way, the student sees a printed booklet on the desk, and the finished papers travel back to CEMC together for marking.'
          ],
          rightH3: 'Official participants differ too',
          right: [
            'At a school in Canada, a CSMC writer counts as official when the Student Information Form is filled in properly, the student was born in 2008 or later, and the student lives in Canada.',
            'For the CIMC the test is grade, not birth date: a writer is official if they are in Grade 10 or below and complete the form. Unofficial writers are still marked, and CEMC says they remain eligible for certificates and medals.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/csimc" rel="noopener" target="_blank">CEMC, Canadian Senior and Intermediate Mathematics Contests</a>, read 22 October 2026. Modern Age Coders is an independent teaching company with no connection to CEMC or the University of Waterloo; we cannot place contest orders or mark papers. On entry, CEMC states that "all students must participate through their school."' }
      ]
    },
    {
      id: 'paper', tint: 'deep', eyebrow: 'Two parts, one cover',
      h2: 'Part A boxes, Part B arguments, and the line that links them',
      lede: 'The front covers of CEMC\'s 2025 CSMC and CIMC booklets are word for word the same apart from the contest name. They describe a paper in two halves, and one sentence on them should change how a student spends the two hours.',
      body: [
        { kind: 'table', caption: 'The 2025 CSMC and CIMC booklet covers, quoted (no problems reproduced)', head: ['', 'Part A', 'Part B'], rows: [
          ['Size', '"six questions, each worth 5 marks"', '"three questions, each worth 10 marks"'],
          ['What earns marks', '"full marks will be given for a correct answer which is placed in the box"', '"Marks are awarded for completeness, clarity, and style of presentation."'],
          ['If the answer is wrong', '"Part marks will be awarded only if relevant work is shown"', 'Written work is marked on its own merits, part by part'],
          ['Working', 'In the space provided in the answer booklet', '"Rough work should be done separately."'],
          ['Order', 'Roughly easier to harder', 'Roughly easier to harder']
        ] },
        { kind: 'p', mt: true, html: 'The sentence that matters sits just above Part A: "The early problems in Part B are likely easier than the later problems in Part A." In other words the paper is not one ladder but two, and the bottom rung of the second ladder is lower than the top rungs of the first. A student who works straight through from question A1 will often arrive at Part B with twenty minutes left, having spent forty on two boxed questions worth 5 marks each, while a Part B question worth 10 marks, whose first part is close to routine, waits unread.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the parts of a Part B question matter',
          left: [
            'Part B questions are usually split into (a), (b) and (c) or more, climbing as they go. The early parts are often short and checkable, and each one earns marks on its own even if the last part is never finished.',
            'So "attempt Part B" does not mean "solve Part B". It means collect the parts that are within reach, write them properly, and leave the final part for whatever time remains.'
          ],
          rightH3: 'Calculators, briefly',
          right: [
            'The cover allows calculating devices without internet access, the ability to communicate with other devices, stored notes or programs, a computer algebra system or dynamic geometry software.',
            'On a written solution, a number from the screen is not an argument. If a calculator gave the answer, the solution still has to show where it came from.'
          ] }
      ]
    },
    {
      id: 'averages', tint: 'tint', eyebrow: 'The 2025 papers in numbers',
      h2: 'How each 2025 CSMC and CIMC question went',
      lede: 'CEMC\'s 2025 results booklet prints the average mark on every question of both contests. Part A questions are out of 5 and Part B questions out of 10, so the two halves of the table are on different scales.',
      body: [
        { kind: 'table', caption: 'Average mark per question, 2025 CSMC and CIMC, from CEMC\'s 2025 CSIMC Results Booklet (Problem Averages)', head: ['Question', 'CSMC average', 'CIMC average', 'Out of'], rows: [
          ['A1', '4.5', '4.7', '5'],
          ['A2', '4.4', '4.6', '5'],
          ['A3', '3.5', '4.5', '5'],
          ['A4', '2.8', '1.8', '5'],
          ['A5', '0.8', '1.0', '5'],
          ['A6', '0.2', '0.1', '5'],
          ['B1', '7.3', '6.9', '10'],
          ['B2', '4.0', '4.0', '10'],
          ['B3', '0.7', '1.1', '10']
        ] },
        { kind: 'table', mt: true, caption: 'Headline figures for 2025, from CEMC\'s contest page', head: ['Measure', 'CSMC 2025', 'CIMC 2025'], rows: [
          ['Average (mean), out of 60', '28.6', '29.1'],
          ['Certificate of Distinction cutoff', '35', '35'],
          ['School Medal Champion cutoff', '28', '29'],
          ['Number of contestants', '15 153', '13 039']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, and it is only ours. In both contests the first written question, B1, averaged about 7 out of 10, while the last two boxed questions, A5 and A6, averaged 1 out of 5 or less. Measured as a share of the marks available, B1 went far better than A5 or A6, which is exactly what the cover predicts. B2 averaged 4 out of 10 in both contests, so a half-finished B2 is a respectable result, not a failure. And because a correct box on A5 or A6 was rare, a student who earns one is well ahead of the field on that question; a student who spends half an hour failing to earn one has paid for it on Part B. We have not added these averages together; CEMC publishes the overall means itself, and CEMC reports 28192 students enrolled across both contests in 2025.' },
        { kind: 'source', html: 'Sources: CEMC\'s 2025 CSIMC Results Booklet (Problem Averages, Key Statistics and Enrollment) and the averages and cut-offs table on the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/csimc" rel="noopener" target="_blank">CSIMC page</a>, read 22 October 2026. The 2025 contests were written on Wednesday, November 12, 2025 in the Americas.' }
      ]
    },
    {
      id: 'attack', tint: 'deep', eyebrow: 'Order of attack',
      h2: 'A 120-minute plan that respects both ladders',
      lede: 'This is the order our students practise with from their first timed paper. It is ours, not CEMC\'s, and it is built on the cover sentence and the 2025 averages above.',
      body: [
        { kind: 'table', caption: 'Our order of attack for a two-hour CIMC or CSMC paper (ours)', head: ['Minutes', 'Work on', 'Rule'], rows: [
          ['0 to 30', 'A1 to A4', 'Box each answer; write a line of working under any answer you are not sure of'],
          ['30 to 55', 'B1, every part', 'Written properly the first time, with a closing sentence'],
          ['55 to 80', 'B2, as many parts as possible', 'Each part finished before the next is started'],
          ['80 to 100', 'A5 and A6', 'Ten minutes each, no more; working shown in case it earns part marks'],
          ['100 to 115', 'B3 part (a), or the unfinished B2 part', 'Whichever is closer to a complete answer'],
          ['115 to 120', 'Everything', 'Every box filled, every written part ending in a sentence that answers it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why A5 and A6 move to the middle',
          left: [
            'They are worth 5 marks each and, on 2025 evidence, rarely earned. B1 and B2 are worth 10 each and earn marks part by part. Doing B1 and B2 before A5 and A6 protects the larger, more reliable marks first.',
            'The boxed questions are not abandoned. They are simply taken when a stuck student can no longer lose a written part by lingering.'
          ],
          rightH3: 'When to break the plan',
          right: [
            'A student who reads A5 and sees the idea at once should take it there and then. The plan is for the student who would otherwise stare at it.',
            'A Grade 9 student writing a first CIMC may never reach A5 at all, and that is fine: A1 to A4 plus B1 and part of B2 is a good first paper.'
          ] },
        { kind: 'p', mt: true, html: 'Students resist this at first, because finishing Part A feels tidy. We run the same past paper twice, a week apart, once straight through and once in this order, and compare the two marks. That comparison usually settles the argument better than anything a teacher says.' }
      ]
    },
    {
      id: 'model', tint: 'tint', eyebrow: 'A written solution of ours',
      h2: 'A Part B question with three parts, solved the way markers want',
      lede: 'The question is our own wording of a well-known fact about sums of consecutive integers, and the solution is written by us for our CSMC students; none of it comes from a CEMC paper. It shows a feature of good Part B writing that students miss: the parts do not have to be written in the order they are asked, as long as each one is labelled.',
      body: [
        { kind: 'code', label: 'Run numbers &middot; our three-part question and our complete solution', lang: 'text', code: MODEL },
        { kind: 'table', mt: true, caption: 'What each piece of the write-up is doing (our classroom notes)', head: ['Piece', 'Its job'], rows: [
          ['(a) as three sums on one line', 'A short-answer style part needs the answer, cleanly. Three examples are all part (a) asks for'],
          ['Writing (c) before (b), and saying so', 'The proof in (c) makes (b) a one-line consequence. A clear label lets the marker follow the order'],
          ['The formula 2N = k(2a + k - 1)', 'Turns a sentence about runs into an equation that can be argued about'],
          ['The parity step', 'Two numbers whose sum is odd cannot both be even: this is the idea of the whole proof, stated with its reason'],
          ['"Both factors are at least 2"', 'Without it, the odd factor might be 1 and the proof would prove nothing. This is the line most first drafts lack'],
          ['The closing sentence', 'Answers all three parts in words, so nothing is left for the marker to assemble']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the marks hide',
          left: [
            'Part (b) asked only to "explain why". A student who tests every run length from 2 to 10 and finds nothing has not explained anything, because the list could go on. A student who points to (c) has.',
            'Part (c) is where the 2025 averages say most Part B marks are lost. A proof does not need to be long; it needs every step to have a reason a stranger can check.'
          ],
          rightH3: 'A follow-up for strong students',
          right: [
            'The converse is also true: every positive integer that is not a power of 2 is a run number. Proving it means choosing a and k from an odd factor, and it makes a good extension once (c) feels easy.',
            'We set the converse as homework only after a student can write (c) cleanly from memory in under ten minutes.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Seven practice problems',
      h2: 'Original CIMC and CSMC practice, with solutions',
      lede: 'All seven are our practice problems, not CEMC problems, and none is adapted from a past paper. Problems 1 to 5 are boxed-answer questions at roughly Part A level; the last two are three-part written questions at roughly B1 and B2 level. Every answer was checked in Python.',
      body: [
        { kind: 'p', html: '<b>Problem 1.</b> <i>Ours, written for this page, not from CEMC. Part A level.</i> A rectangle has perimeter 34 and a diagonal of length 13. What is its area?' },
        { kind: 'p', html: '<b>Solution.</b> Let the sides be l and w. Then l + w = 17 and l<sup>2</sup> + w<sup>2</sup> = 169. Since (l + w)<sup>2</sup> = l<sup>2</sup> + w<sup>2</sup> + 2lw, we get 289 = 169 + 2lw, so lw = 60. The area is 60. The sides happen to be 5 and 12, but the question never needs them.' },
        { kind: 'p', mt: true, html: '<b>Problem 2.</b> <i>Ours, written for this page, not from CEMC. Part A level.</i> How many positive divisors does 720 have?' },
        { kind: 'p', html: '<b>Solution.</b> 720 = 2<sup>4</sup> x 3<sup>2</sup> x 5. A divisor chooses an exponent of 2 from 0 to 4, of 3 from 0 to 2 and of 5 from 0 to 1, so there are 5 x 3 x 2 = 30 divisors. Listing them one by one is how a student loses ten minutes.' },
        { kind: 'p', mt: true, html: '<b>Problem 3.</b> <i>Ours, written for this page, not from CEMC. Part A level.</i> A box holds 3 green and 5 yellow counters. Two counters are taken out at random, one after the other, without putting the first back. What is the probability that the two match in colour?' },
        { kind: 'p', html: '<b>Solution.</b> Count unordered pairs: 8 x 7 / 2 = 28 equally likely pairs in all. Green pairs: 3 x 2 / 2 = 3. Yellow pairs: 5 x 4 / 2 = 10. The probability is (3 + 10) / 28 = 13/28.' },
        { kind: 'p', mt: true, html: '<b>Problem 4.</b> <i>Ours, written for this page, not from CEMC. Part A level.</i> A square is drawn inside a circle of radius 5 with all four corners on the circle. What is the area of the region inside the circle but outside the square? Give an exact answer.' },
        { kind: 'p', html: '<b>Solution.</b> The diagonal of the square is a diameter, 10, so the area of the square is 10<sup>2</sup> / 2 = 50. The circle has area 25&pi;, so the region has area 25&pi; - 50. Writing 28.54 would lose the box: the exact form is the answer.' },
        { kind: 'p', mt: true, html: '<b>Problem 5.</b> <i>Ours, written for this page, not from CEMC. Late Part A level.</i> How many integers from 1 to 1000 inclusive are divisible by 6 or by 10, but not by 15?' },
        { kind: 'p', html: '<b>Solution.</b> Divisible by 6: 166. By 10: 100. By both, that is by 30: 33. So 166 + 100 - 33 = 233 are divisible by 6 or 10. A number divisible by 6 and by 15 is divisible by 30, and so is a number divisible by 10 and by 15, so the ones to remove are exactly the 33 multiples of 30. The answer is 233 - 33 = 200. The trap is subtracting the multiples of 15 directly, which counts numbers like 45 that were never in the list.' },
        { kind: 'p', mt: true, html: '<b>Problem 6.</b> <i>Ours, written for this page, not from CEMC. Part B level, written solution.</i> A triangle has side lengths 13, 14 and 15. (a) Determine its area. (b) Determine the length of the altitude to the side of length 14. (c) Determine the radius of the circle that touches all three sides.' },
        { kind: 'code', label: 'Problem 6 &middot; our complete written solution', lang: 'text', code: B2, note: 'Part (a) gives part (b) for free here, because the coordinates already found the height. Part (c) uses a different idea, splitting the triangle at the incentre, and that change of idea is typical of a final part.' },
        { kind: 'p', mt: true, html: '<b>Problem 7.</b> <i>Ours, written for this page, not from CEMC. Part B level, written solution.</i> Let f(x) = x<sup>2</sup> - 6x + 13. (a) Write f(x) in the form (x - p)<sup>2</sup> + q. (b) Determine the smallest value of f(x) and the value of x where it occurs. (c) Determine all real numbers x for which f(x) + f(x + 2) = 20.' },
        { kind: 'p', html: '<b>Solution.</b> (a) x<sup>2</sup> - 6x + 13 = (x - 3)<sup>2</sup> + 4. (b) A square is never negative, so f(x) is at least 4, with equality exactly when x = 3. The smallest value is 4, at x = 3. (c) Using (a), f(x + 2) = (x - 1)<sup>2</sup> + 4. The equation becomes (x - 3)<sup>2</sup> + (x - 1)<sup>2</sup> + 8 = 20, so 2x<sup>2</sup> - 8x + 10 = 12, which is x<sup>2</sup> - 4x - 1 = 0. The quadratic formula gives x = 2 + &radic;5 or x = 2 - &radic;5. Both are real numbers and both satisfy the equation, so both are answers.' },
        { kind: 'two', mt: true,
          leftH3: 'How to use the set',
          left: [
            'Sit problems 1 to 5 in 30 minutes with the boxes only, then compare. Any wrong answer with no working shown would have earned nothing on the day.',
            'Write problems 6 and 7 as full solutions, timed at 25 minutes each, then check every line against ours. A missing reason is a missing mark.'
          ],
          rightH3: 'The habit underneath',
          right: [
            'Problems 1 and 7 both reward reusing an earlier result instead of starting again. Problem 5 rewards reading the condition exactly. Problem 4 rewards exact forms.',
            'Those habits are worth more on a November morning than any single formula, and they carry straight into the April contests.'
          ] }
      ]
    },
    {
      id: 'which', tint: 'tint', eyebrow: 'Choosing the contest',
      h2: 'CIMC or CSMC: which paper a student should write',
      lede: 'The rules below are CEMC\'s; the advice beside them is ours. Most families find the choice is simple once the grade is clear.',
      body: [
        { kind: 'table', caption: 'Choosing between the CIMC and the CSMC (rules from CEMC, advice ours)', head: ['Student', 'CEMC\'s rule', 'Our advice'], rows: [
          ['Grade 9', 'Eligible for the CIMC', 'Write the CIMC; aim for A1 to A4 and B1'],
          ['Grade 10', 'Eligible for the CIMC', 'Write the CIMC; a strong Grade 10 student can aim at B2 in full'],
          ['Grade 11', 'Eligible for the CSMC', 'Write the CSMC; it is also the route to CEMC\'s Auckland workshop for Grade 11 writers'],
          ['Grade 12 or CÉGEP', 'Eligible for the CSMC', 'Write the CSMC in November and treat it as the first rehearsal for the Euclid in April'],
          ['Younger and keen', 'CEMC welcomes motivated students from lower grades', 'Pick the paper that stretches without crushing, and enjoy it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the November contests lead to',
          left: [
            'CEMC\'s student workshops page describes the Lloyd Auckland Invitational Mathematics workshop as bringing "together high-achieving Grade 11 Canadian Senior Mathematics Contest participants from Canada for a week-long immersive experience."',
            'Invitations are CEMC\'s to make. We prepare students for the paper; we cannot nominate anyone, and we never suggest a score will lead to an invitation.'
          ],
          rightH3: 'What Waterloo says about the CSMC',
          right: [
            'CEMC is clear that a Waterloo Math applicant does not have to have written the CSMC. The Faculty\'s scholarships page adds that writing the CSMC or the Euclid "is required for some scholarship decisions."',
            'A Grade 12 student interested in those scholarships should read the Faculty\'s page directly. We make no claim about how any score is used.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/workshops/student-workshops" rel="noopener" target="_blank">CEMC, Student workshops</a> and <a class="ag-inline-link" href="https://uwaterloo.ca/math/undergraduate-studies/applying/scholarships" rel="noopener" target="_blank">University of Waterloo, Faculty of Mathematics scholarships</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'morning', tint: 'deep', eyebrow: '18 November 2026',
      h2: 'Contest morning after the clocks change',
      lede: 'The contest falls in the first month of winter time. Ontario, Quebec and the Atlantic provinces moved their clocks back on 1 November 2026, so the offsets below are winter ones.',
      body: [
        { kind: 'table', caption: 'UTC offsets on Wednesday, November 18, 2026 (tz database, release 2026e)', head: ['Province or zone', 'Offset'], rows: [
          ['Newfoundland and Labrador (island time)', 'UTC-3:30'],
          ['The Maritimes, on Atlantic time', 'UTC-4'],
          ['Eastern time: Ontario and Quebec', 'UTC-5'],
          ['Manitoba, now on one offset all year', 'UTC-5'],
          ['Prairies west of Manitoba', 'UTC-6'],
          ['Most of BC, and Yukon', 'UTC-7']
        ] },
        { kind: 'p', mt: true, html: 'Each school starts close to the beginning of its own school day, so there is no single national start. One consequence for our classes: from November, Toronto and Winnipeg read the same clock, which makes a shared evening batch easier to place. We still confirm every class time with each family in their own zone.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Four weeks',
      h2: 'A four-week plan from 22 October to 18 November 2026',
      lede: 'For a student whose school has ordered the contest, four weeks is enough to change how the two hours are spent, even if it is not enough to learn new mathematics. Our plan, with two live classes a week:',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1, 22 to 28 October 2026: one past paper straight through, untimed.</b> Mark it together. Find out which Part A questions were lost to mathematics and which to time.',
          '<b>Week 2, 29 October to 4 November 2026: Part B writing.</b> Two B1 questions from past papers and our problem 6, written in full and returned marked for completeness, clarity and presentation.',
          '<b>Week 3, 5 to 11 November 2026: the order of attack.</b> One full paper timed at 120 minutes using the plan above, then the same paper reviewed for which marks the order saved.',
          '<b>Week 4, 12 to 18 November 2026: rehearsal and rest.</b> One last timed paper early in the week, a short review of written-solution habits, and nothing heavy the evening before the contest.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Missed this year\'s order?', p: 'The Fryer, Galois and Hypatia Contests on Wednesday, April 7, 2027 are CEMC\'s next full-solution papers for Grades 9 to 11, ordered by Thursday, March 11, 2027.' },
          { h3: 'Grade 12 or CÉGEP', p: 'The Euclid on Tuesday, April 6, 2027 is the next step; CSMC practice is close to ideal preparation for its middle questions.' },
          { h3: 'Starting from scratch', p: 'Begin in September 2027 with a full term of written solutions before the next November paper.' }
        ] }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Free CEMC help',
      h2: 'CEMC\'s free CIMC and CSMC resources, and how we fit them in',
      lede: 'CEMC publishes past papers, solutions and preparation material for the November contests at no cost. We send students there rather than copying any of it, and we write our own problems alongside.',
      body: [
        { kind: 'table', caption: 'Free CEMC material for the November contests (read 22 October 2026)', head: ['Resource', 'What CEMC offers', 'How we use it'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests</a>', 'Past CIMC and CSMC papers with their solutions and results', 'Weeks 1, 3 and 4 of the plan; solutions read only after a full written attempt'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/csmc-and-euclid-preparation-material" rel="noopener" target="_blank">CSMC preparation materials</a>', 'Eight topic modules aimed at the CSMC', 'One module a week for Grade 11 and 12 students after November, building toward the Euclid'],
          ['CSMC Preparation Workshops', 'A short series of "three 60-minute sessions" built on those eight modules', 'A good extra for a Grade 11 or 12 student who wants to hear CEMC\'s own presenters'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">Courseware</a>', 'Free online lessons for the curriculum the contests rest on', 'Targeted review when a past paper shows a curriculum gap'],
          ['CEMC Visits Schools', 'Problem-solving workshops run by CEMC staff at schools', 'A school-level option worth mentioning to a head of math']
        ] },
        { kind: 'p', mt: true, html: 'Students who want the broader picture of CEMC\'s year, from the Gauss Contest in Grades 7 and 8 to the Euclid, will find it on our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC Waterloo contests</a> page. For a Grade 9 to 11 student the February multiple-choice papers come next: <a class="ag-inline-link" href="/pascal-contest-preparation">Pascal</a>, <a class="ag-inline-link" href="/cayley-contest-preparation">Cayley</a> and <a class="ag-inline-link" href="/fermat-contest-preparation">Fermat</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Placing a student',
    h2: 'Four stages on a two-part paper',
    lede: 'Our stages, used in the first class to decide where a student starts.',
    table: { caption: 'From boxes only to both ladders (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Box filler', 'Answers A1 to A3 correctly and leaves Part B nearly blank'],
      ['2. Starter', 'Earns B1 (a) and (b) but writes them as bare numbers'],
      ['3. Writer', 'Finishes B1 and most of B2 with reasons, and boxes A1 to A4'],
      ['4. Climber', 'Takes a part of B3 or a box from A5 and A6 on most papers']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is where most good school students begin, because school tests rarely ask for an argument written for a stranger. The jump to stage 3 is a writing habit, and habits take weekly practice.',
      'A November paper is a useful checkpoint even for a student whose real goal is April. It shows, early in the year, exactly which kind of mark is being lost.'
    ] },
    right: { h3: 'For students', ps: [
      'Read all three Part B questions in the first five minutes. Knowing what is waiting changes how long you will tolerate a stuck box.',
      'Label every written part clearly, and end each one with a sentence that answers it.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine courses for a Grade 9 to 12 contest student',
    lede: 'Live online classes with one teacher who follows the student all year, in a batch or one to one, joined from any province.',
    bands: [
      { num: 'I', h3: 'Grades 9 and 10', sub: 'The CIMC years', courses: [
        { code: 'CCCG / MID / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear and quadratic work done until it is automatic.' },
        { code: 'CCCG / MID / 02', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof and problem solving', blurb: 'An early start on written arguments.' },
        { code: 'CCCG / MID / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python used to test a conjecture before proving it.' }
      ] },
      { num: 'II', h3: 'Grades 11 and 12', sub: 'The CSMC years', courses: [
        { code: 'CCCG / SEN / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 university math', blurb: 'MHF4U and MCV4U alongside the school course.' },
        { code: 'CCCG / SEN / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Pre-calculus 12 and Math 30-1', blurb: 'For students in British Columbia and the Prairies.' },
        { code: 'CCCG / SEN / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability, the topic that decides many Part A boxes.' }
      ] },
      { num: 'III', h3: 'Contests in code', sub: 'For students who also program', courses: [
        { code: 'CCCG / CODE / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'CEMC\'s programming contest on 17 February 2027.' },
        { code: 'CCCG / CODE / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U companion', blurb: 'Ontario computer science, taught beside the school course.' },
        { code: 'CCCG / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms that sit between math contests and coding contests.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class arrangements',
    h2: 'Live CIMC and CSMC classes, fitted around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches set in Eastern time and shown on your own clock.' },
      { time: 'Weekends', l: 'Morning classes for timed papers without a school day before them.' },
      { time: '1-on-1', l: 'A private plan counted back from 18 November 2026.' }
    ],
    cells: [
      { h3: 'Written work returned', p: 'Each Part B solution comes back marked within the week.' },
      { h3: 'Problems we write', p: 'Fresh boxed and written questions beside CEMC\'s archive.' },
      { h3: 'Timed at two hours', p: 'Full papers sat with the order of attack.' },
      { h3: 'Two papers, compared', p: 'One paper run twice to show what order changes.' },
      { h3: 'Every province', p: 'The same class from St. John\'s to Kelowna.' },
      { h3: 'Two formats', p: 'Join a batch of fifteen to twenty, or learn one to one.' }
    ]
  },

  projectsH2: 'What our contest students build in code',
  projectsLede: 'Several of our CIMC and CSMC students also take our coding courses. Some of their work is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents and students, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Any contest fee CEMC charges goes through the school. Ours is for the teaching alone, billed by the month, and a student who only wants the November run can stop after it.',
    free: ['A free first class', 'One Part B question written up together', 'No card needed'],
    group: ['A batch of fifteen to twenty', 'Grouped CIMC or CSMC', 'Choose your batch', 'Monthly, stop any time'],
    one: ['One teacher, one student', 'Planned to 18 November 2026', 'Built on your own past papers']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'CIMC and CSMC: common questions',
    items: [
      { q: 'What are the CIMC and the CSMC?', a: 'They are the Canadian Intermediate Mathematics Contest and the Canadian Senior Mathematics Contest, run by CEMC at the University of Waterloo on the same day each November. The CIMC is for Grades 9 and 10, the CSMC for Grades 11, 12 and CEGEP.' },
      { q: 'When are the CIMC and CSMC in 2026?', a: 'CEMC lists Wednesday, November 18, 2026 in North and South America and Thursday, November 19, 2026 elsewhere. The school ordering deadline was Thursday, October 22, 2026.' },
      { q: 'What does the paper look like?', a: 'Nine questions in two hours, scored out of 60. Part A has six answer-only questions worth 5 marks each; Part B has three full-solution questions worth 10 marks each, marked for completeness, clarity and presentation.' },
      { q: 'Should my child finish Part A before starting Part B?', a: 'Not necessarily. The booklet cover itself says the early Part B problems are likely easier than the later Part A problems, and in 2025 the first Part B question averaged about 7 out of 10 in both contests. We teach an order that takes the first two Part B questions before the last two boxes.' },
      { q: 'What were the 2025 averages?', a: 'CEMC lists a 2025 mean of 28.6 out of 60 on the CSMC and 29.1 on the CIMC, with a Certificate of Distinction cutoff of 35 on both. There were 15 153 CSMC and 13 039 CIMC contestants.' },
      { q: 'Can a student register for the CIMC or CSMC alone?', a: 'No. CEMC contests are ordered by schools, and the student writes at school under supervision. If your school does not take part, CEMC suggests asking another local school whether your child can join its writers.' },
      { q: 'Is the CSMC required for University of Waterloo admission?', a: 'No. CEMC says the CSMC is not required for admission to the Faculty of Mathematics, and the Faculty says writing the CSMC or the Euclid is required for some scholarship decisions. We make no promises about admissions or scholarships.' },
      { q: 'Are calculators allowed?', a: 'Some are. The 2025 cover allows calculating devices without internet access, communication with other devices, stored notes or programs, a computer algebra system or dynamic geometry software. Written solutions still have to show the reasoning.' },
      { q: 'What if my child missed the 2026 order?', a: 'The next CEMC full-solution contests are the Fryer, Galois and Hypatia Contests on Wednesday, April 7, 2027 for Grades 9 to 11, and the Euclid on Tuesday, April 6, 2027 for the final year. Schools order both by Thursday, March 11, 2027.' },
      { q: 'When do your CIMC and CSMC classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern time and confirmed in your own zone, which matters in November because the eastern provinces have just changed their clocks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages',
    lede: 'Other pages for Grade 9 to 12 students in Canada following CEMC\'s contest year.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The whole CEMC calendar, from Gauss to Euclid.' },
      { href: '/euclid-contest-preparation', label: 'Euclid Contest', p: 'The April paper the CSMC rehearses for.' },
      { href: '/pascal-contest-preparation', label: 'Pascal Contest', p: 'Grade 9 multiple choice in February.' },
      { href: '/cayley-contest-preparation', label: 'Cayley Contest', p: 'Grade 10 multiple choice, late February.' },
      { href: '/fermat-contest-preparation', label: 'Fermat Contest', p: 'Grade 11 multiple choice, late February.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Code instead of proofs, from the same organizer.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math help across the provinces.' },
      { href: '/maths-olympiad-classes-online', label: 'Olympiad classes', p: 'How the major math contests compare.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Why we mark the argument, not the answer.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child reads a Part B question of ours, writes the first two parts, and watches a teacher mark them the way a CEMC marker would. You come away knowing which of the four stages fits and what the weeks before 18 November 2026 should look like.',
    readFirst: 'Prefer to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a real class, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Classes are taught live on video by our teachers in India, so families join from home anywhere in Canada. WhatsApp is the quickest way to reach us.',
    formNote: 'Free first class. Nothing to pay, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'CEMC contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'All CEMC contests' },
        { href: '/euclid-contest-preparation', label: 'Euclid Contest' },
        { href: '/fermat-contest-preparation', label: 'Fermat Contest' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/maths-olympiad-classes-online', label: 'Olympiad classes' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Two ladders, one morning'
  },

  personalityCss: `
.ag-root.ag-cccg .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cccg .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-cccg .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-cccg .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cccg .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-cccg .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Canadian Senior and Intermediate Mathematics Contests page and Student workshops page, read raw on 22 October 2026; the front covers of the 2025 CSMC and CIMC booklets (rules only, no problems); the 2025 CSIMC Results Booklet (problem averages, key statistics, enrolment total); the University of Waterloo Faculty of Mathematics scholarships page: 2026 dates Wednesday, November 18 (Americas) and Thursday, November 19; ordering deadline Thursday, October 22, 2026; Grades 9 and 10 for the CIMC, Grades 11, 12 and CEGEP for the CSMC; nine questions, two hours, out of 60; Part A six questions worth 5, Part B three worth 10; the cover line that early Part B problems are likely easier than later Part A problems; CSMC booklets downloaded and CIMC booklets shipped in Canada; official-participant rules; 2025 means 28.6 and 29.1, cutoffs 35, 28 and 29, contestants 15 153 and 13 039; question averages; three 60-minute CSMC workshops; the Auckland workshop for Grade 11 CSMC writers; CSMC not required for admission but required for some scholarship decisions. FGH and Euclid April 2027 dates from facts-schools-contests.md rows 149 to 151; UTC offsets from facts-geo.md section 3.',
    localProject: 'A three-part Part B question written by us on run numbers (sums of two or more consecutive positive integers), with a complete solution proving no power of 2 is a run number via 2N = k(2a + k - 1) and a parity argument, and notes on each piece of the write-up; seven original practice problems checked in Python (rectangle area 60, 30 divisors of 720, probability 13/28, area 25 pi minus 50, 200 integers, the 13-14-15 triangle with area 84, altitude 12 and inradius 4, and f(x) + f(x + 2) = 20 giving 2 plus or minus root 5); a 120-minute order of attack; a four-week plan to 18 November 2026. Lesson family: order of attack across two difficulty ladders.',
    requiredMentions: ['The early problems in Part B are likely easier than the later problems in Part A', 'six questions, each worth 5 marks', 'three questions, each worth 10 marks', 'CSMC question booklets are no longer posted', 'CIMC question booklets are still shipped to schools in Canada', 'A 120-minute plan that respects both ladders', 'no power of 2 is a run number', '28192 students enrolled across both contests in 2025', 'high-achieving Grade 11 Canadian Senior Mathematics Contest participants', 'Two ladders, one morning'],
    sources: [
      { claim: '2026 dates and ordering deadline, audience, format, content, timing, results, shipping split, official participants, certificates and team score, 2025 averages and cutoffs, Waterloo admission note, CSMC workshops.', url: 'https://cemc.uwaterloo.ca/contests/csimc' },
      { claim: 'Two-part structure, marks per part, boxed answers and part marks, the Part B and Part A difficulty line, calculator features, from the 2025 CSMC booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CSMC.pdf' },
      { claim: 'The same cover rules for the CIMC.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CIMC.pdf' },
      { claim: '2025 problem averages for both contests and the enrolment total.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CSIMCResultsBooklet.pdf' },
      { claim: 'Auckland workshop for high-achieving Grade 11 CSMC participants from Canada.', url: 'https://cemc.uwaterloo.ca/workshops/student-workshops' },
      { claim: 'CSMC or Euclid required for some scholarship decisions.', url: 'https://uwaterloo.ca/math/undergraduate-studies/applying/scholarships' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution, including the 2025 CSMC solutions booklet: never reproduced or adapted; the page links to CEMC\'s archive and uses problems we wrote.',
      'The three-consecutive-integers proof on the hub and the Euclid divisor model solution: not reused; the model here is a different problem.',
      'A total of the problem averages: not computed; CEMC\'s own means and enrolment total are printed instead.',
      'CIMC registrations by province: not printed, because the English layout of the results booklet interleaves the two contests.',
      'Contest fees and prize amounts for top participants: omitted.',
      'Honour-roll names and the educator testimonial on CEMC\'s page: not reproduced.',
      'A 2027 CIMC or CSMC date: not published by CEMC on 22 October 2026, so not stated.',
      'That our classes raise scores, earn certificates, workshop invitations, admission or scholarships: refused.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
