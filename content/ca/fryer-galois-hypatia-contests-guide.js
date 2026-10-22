'use strict';
// Fryer, Galois and Hypatia contests guide (ag- contest door; Canada cluster Plan 2, row 48). Spoke under the hub
// /cemc-waterloo-contests-preparation: this page is the FGH CONTESTS (Grades 9, 10 and 11, CEMC, April) only.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/fryer-galois-hypatia-contests-guide/
// and ca/src/cemc/fgh.html):
//  - cemc.uwaterloo.ca/contests/fgh (fgh.txt): "North and South America: Wednesday, April 7, 2027"; "Outside North and
//    South America: Thursday, April 8, 2027"; "Ordering deadline: Thursday, March 11, 2027"; "Students in Grade 9 are
//    eligible to write the Fryer Contest." (Galois Grade 10, Hypatia Grade 11); "Participants can only write one of the
//    Fryer, Galois and Hypatia Contests in a given school year."; "4 questions; a mix of final answer-only and
//    full-solution."; "Time allowed for completion is 75 minutes."; "Score out of 40."; "Written at school, participants
//    write individually and on paper."; "Some calculators permitted."; "Questions on the FGH Contests are based on
//    curriculum common to all Canadian provinces. Rather than testing content recall, most of the problems require
//    logical thinking and mathematical problem-solving skills."; overview "presenting problems that progressively lead
//    to more complex questions" and the full-solution format "can help learners develop both problem-solving and
//    communication skills" (the overview sentence contains an em dash, so it is paraphrased, not quoted whole); results
//    "four to six weeks after the contest date"; official participants: Fryer "Grade 9 or below", Galois "Grade 10 or
//    below", Hypatia "Grade 11 or below"; a Grade 9 student taking a Grade 10 course "is eligible to write the Fryer
//    Contest"; top 25% Certificate of Distinction; Team Score the five highest official scores; honour rolls "for
//    regions with at least 30 participants"; 2026 table Fryer / Galois / Hypatia mean 21.7 / 21.0 / 22.8, Distinction
//    cutoff 28 / 26 / 28, School Medal Champion cutoff 21 / 21 / 22, maximum 40, contestants 6388 / 6478 / 6615; three
//    types of preparation support (past contests, courseware, CEMC Visits Schools). Fee figures omitted.
//  - 2025 Fryer, Galois and Hypatia booklets (2025FryerContest.pdf, 2025GaloisContest.pdf, 2025HypatiaContest.pdf; FRONT
//    COVERS ONLY, no problem reproduced): "Time: 75 minutes"; "Number of questions: 4"; "Each question is worth 10
//    marks"; SHORT ANSWER parts "worth 2 or 3 marks each", "full marks given for a correct answer which is placed in the
//    box", "part marks awarded only if relevant work is shown in the space provided"; FULL SOLUTION parts "worth the
//    remainder of the 10 marks for the question", "must be written in the appropriate location in the answer booklet",
//    "a correct solution poorly presented will not earn full marks"; extra paper "must be supplied by your supervising
//    teacher". The three covers differ only in contest name and grade.
//  - 2026 FGH Results booklet (2026_FGH_Results.pdf), Problem Averages read from the French column (the English layout
//    is garbled): Fryer 8.2, 6.0, 3.8, 3.7; Galois 8.2, 7.2, 4.6, 1.1; Hypatia 8.0, 7.2, 6.3, 1.3 (each out of 10);
//    CEMC's own enrolment total 19481. Nothing summed.
//  - cemc.uwaterloo.ca/contests/pcf via facts-schools-contests.md row 147: Pascal, Cayley and Fermat "North and South
//    America: Tuesday, February 23, 2027 and Wednesday, February 24, 2027".
//  - cemc.uwaterloo.ca/contests/how-contests-work via facts row 112 (school-only entry) and row 113 (another local school).
// Our own material, labelled on the page: three warm-up problems, three four-part questions (Fryer-, Galois- and
// Hypatia-style) with complete solutions (all answers checked in Python on 22 October 2026), our 10-mark split and
// rubric for the Fryer-style question, the 75-minute budget, the plan to 7 April 2027 and our readings of the 2026
// problem averages (including the arithmetic 2 x 10 = 20 against cutoffs of 26 and 28).
// Lesson family: each part of a question is a tool for the next.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FRYER = `Fryer-style question (ours). A school bake sale packs cookies
in boxes of 6 and boxes of 10. A customer buys whole boxes only.

(a) [2 marks, short answer] Show how to buy exactly 46 cookies.
(b) [2 marks, short answer] In how many ways can exactly 60 cookies
    be bought?
(c) [2 marks, full solution] Explain why an odd number of cookies
    can never be bought.
(d) [4 marks, full solution] Determine, with justification, the
    largest even number of cookies that cannot be bought.

(a) One box of 6 and four boxes of 10: 6 + 40 = 46.

(b) We need 6a + 10b = 60, that is 3a + 5b = 30, with a, b >= 0.
    b = 0 gives a = 10; b = 3 gives a = 5; b = 6 gives a = 0.
    Other values of b from 0 to 6 leave 30 - 5b not a multiple
    of 3. So there are 3 ways.

(c) 6a + 10b = 2(3a + 5b), which is even for every a and b.
    So an odd number of cookies is impossible.

(d) 14 cannot be bought. With no 10-box we need 6a = 14,
    impossible. With one 10-box we need 6a = 4, impossible.
    Two or more 10-boxes already give more than 14.

    Every even number from 16 up can be bought.
    16 = 6 + 10,   18 = 6 + 6 + 6,   20 = 10 + 10.
    Adding one more box of 6 to any of these gives the next
    three even numbers, 22, 24 and 26, and repeating this
    reaches every even number from 16 upward.

    Therefore the largest even number of cookies that cannot
    be bought is 14.`;

const GALOIS = `Galois-style question (ours). The parabola y = x^2 - 4x + k,
where k is a real number.

(a) [2 marks] If k = 3, what are the x-intercepts?
(b) [3 marks] For what value of k does the parabola touch
    the x-axis at exactly one point?
(c) [5 marks, full solution] The line y = 2x - 5 meets the
    parabola at two points whose x-coordinates differ by 4.
    Determine k and the two points.

(a) x^2 - 4x + 3 = (x - 1)(x - 3), so the intercepts are x = 1, x = 3.

(b) x^2 - 4x + k = (x - 2)^2 + (k - 4). This touches the x-axis
    exactly once when k - 4 = 0, so k = 4.

(c) At an intersection, x^2 - 4x + k = 2x - 5,
    so x^2 - 6x + (k + 5) = 0.
    By the quadratic formula,
        x = (6 +/- sqrt(36 - 4(k + 5))) / 2 = 3 +/- sqrt(4 - k).
    The two x-coordinates differ by 2 sqrt(4 - k).
    Setting 2 sqrt(4 - k) = 4 gives sqrt(4 - k) = 2, so k = 0.
    Then x = 5 or x = 1, and on the line y = 2x - 5 these give
    the points (5, 5) and (1, -3).
    Check on the parabola y = x^2 - 4x: 25 - 20 = 5 and 1 - 4 = -3.

    Therefore k = 0, and the points are (5, 5) and (1, -3).`;

const HYPATIA = `Hypatia-style question (ours). For a two-digit positive integer n,
R(n) is the number formed by reversing its digits,
so R(52) = 25 and R(40) = 4.

(a) [2 marks] What is 52 - R(52)?
(b) [3 marks, full solution] Prove that n - R(n) is a multiple
    of 9 for every two-digit n.
(c) [5 marks, full solution] Determine how many two-digit n
    make n - R(n) a positive perfect square.

(a) 52 - 25 = 27.

(b) Write n = 10a + b, where a is the tens digit (1 to 9) and
    b is the units digit (0 to 9). Then R(n) = 10b + a, and
        n - R(n) = 9a - 9b = 9(a - b),
    which is a multiple of 9.

(c) By (b), we need 9(a - b) to be a positive perfect square.
    If 9m = s^2 for a positive integer m, then 3 divides s, so
    s = 3t and m = t^2. Conversely 9t^2 = (3t)^2. So 9(a - b) is a
    perfect square exactly when a - b is a perfect square.
    Since 1 <= a - b <= 9, a - b is 1, 4 or 9.
      a - b = 1: a = 1 to 9, so 9 numbers (10, 21, ..., 98).
      a - b = 4: a = 4 to 9, so 6 numbers (40, 51, ..., 95).
      a - b = 9: only a = 9, b = 0, so 1 number (90).

    Therefore 9 + 6 + 1 = 16 two-digit numbers work.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CEMC\'s April full-solution contests for Grades 9, 10 and 11: four questions in 75 minutes on 7 April 2027, the 2026 question averages, and one complete question of ours for each contest.' },
  slug: 'fryer-galois-hypatia-contests-guide',
  code: 'fghc',
  accent: '#165C25',
  accentRationale: 'Fryer, Galois and Hypatia contests guide, Canada: a muted forest green #165C25, allocated for row 48; measured 8.5 RGB units (Euclidean) from the nearest site accent (#0E5C28) and 11.0 from the nearest allocated Canada accent (#165C1A); contrast 7.64 on the paper #FBF8F2, 7.19 and 6.58 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Fryer, Galois and Hypatia',
  title: 'Fryer, Galois and Hypatia Contests 2027: A Full Guide',
  description: 'CEMC\'s Fryer, Galois and Hypatia Contests on 7 April 2027: four questions in 75 minutes out of 40, the 2026 averages and a complete practice question for each grade.',
  ogDescription: 'CEMC lists the 2027 Fryer, Galois and Hypatia Contests for Wednesday, April 7, 2027 in the Americas. How each 10-mark question is built, the 2026 question averages, three original questions solved in full and a plan.',
  twitterDescription: 'Fryer, Galois and Hypatia 2027: how the four questions climb, and how to write each part.',
  pageName: 'Fryer, Galois and Hypatia Contests Guide',
  webPageDescription: 'For Grade 9 to 11 students in Canada and their families: CEMC\'s Fryer, Galois and Hypatia Contests explained from CEMC\'s own pages, booklet covers and 2026 results, with three complete practice questions of ours, a marking rubric and a plan to April 2027.',
  courseDescription: 'Live online preparation for CEMC\'s Waterloo math contests, including the Fryer, Galois and Hypatia full-solution papers, for Grade 9 to 11 students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'CEMC Waterloo contests', href: '/cemc-waterloo-contests-preparation' }],
  crumbLabel: 'Fryer, Galois and Hypatia',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: 'April 2027' },
    { href: '#question', label: 'One question' },
    { href: '#averages', label: '2026 averages' },
    { href: '#worked', label: 'Three questions' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Canada &middot; CEMC Fryer, Galois, Hypatia &middot; Grades 9 to 11',
  h1: 'Fryer, Galois and Hypatia contests guide, 2027',
  lede: 'The Fryer, Galois and Hypatia Contests are the University of Waterloo\'s full-solution papers for Grades 9, 10 and 11, written on the same April morning by tens of thousands of students in and beyond Canada. Each paper is short, four questions in seventy-five minutes, but every question is a small staircase: quick boxed answers at the bottom, a written argument at the top. This guide is built from CEMC\'s contest page for 2027, the covers of the 2025 booklets and CEMC\'s 2026 results booklet. It explains how one 10-mark question is put together, how far students climbed on each question in 2026, a rubric of ours for marking a written part, one complete practice question of ours for each contest, and a plan from November to Wednesday, April 7, 2027.',
  secondaryCta: { href: '#worked', label: 'Try the three questions' },
  wa: 'Hello Modern Age Coders, my child is in Grade 9, 10 or 11 in Canada and would like to prepare for the Fryer, Galois or Hypatia Contest on 7 April 2027. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; the questions and solutions here are written by our teachers',
  spec: [
    ['Organiser', 'CEMC, University of Waterloo'],
    ['Fryer', 'Grade 9'],
    ['Galois', 'Grade 10'],
    ['Hypatia', 'Grade 11'],
    ['2027 date', 'Wednesday, April 7, 2027 (Americas)'],
    ['Paper', '4 questions, 75 minutes, out of 40'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'At a glance',
  capsule: 'The Fryer (Grade 9), Galois (Grade 10) and Hypatia (Grade 11) Contests are CEMC\'s full-solution math papers: four questions in 75 minutes, each worth 10 marks, mixing boxed answers with written solutions, written at school on Wednesday, April 7, 2027 in the Americas. Modern Age Coders runs live online classes for all three, for groups or individual students, as part of its Waterloo Math Contests: Gauss to Euclid course.',

  picks: {
    eyebrow: 'Courses for the April papers',
    h2: 'The courses our Fryer, Galois and Hypatia classes come from',
    lede: 'The contest course carries the past papers and the weekly written work. The competition course stretches students toward the final part of question 4. The high school course keeps the grade\'s own math solid underneath.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'FGHC / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Ages 11 to 18. The Grades 9 to 11 track writes a full solution every week, built toward Fryer, Galois or Hypatia.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'FGHC / 02', title: 'Competition mathematics', note: 'Number theory, counting and proof for students reaching for the last part of each question.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'FGHC / 03', title: 'High school math, Grades 9 to 12', note: 'Linear relations, quadratics and geometry, the school topics the April papers grow from.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'April 2027',
      h2: 'The 2027 Fryer, Galois and Hypatia Contests, from CEMC',
      lede: 'This table comes from CEMC\'s Fryer, Galois and Hypatia page, read on 22 October 2026. Dates can move, so check CEMC\'s page again in March 2027 before the school orders.',
      body: [
        { kind: 'table', caption: 'The 2027 FGH Contests, as listed by CEMC (read 22 October 2026)', head: ['Question', 'What CEMC lists'], rows: [
          ['Contest day', '"North and South America: Wednesday, April 7, 2027"; elsewhere Thursday, April 8, 2027.'],
          ['School ordering deadline', 'Thursday, March 11, 2027.'],
          ['Who writes which', 'Grade 9: Fryer. Grade 10: Galois. Grade 11: Hypatia.'],
          ['One per year', '"Participants can only write one of the Fryer, Galois and Hypatia Contests in a given school year."'],
          ['The paper', 'Four questions mixing boxed answers and written solutions, 75 minutes, "Score out of 40."'],
          ['Writing conditions', 'At school, individually, on paper. Some calculators are permitted.'],
          ['What it tests', '"Rather than testing content recall, most of the problems require logical thinking and mathematical problem-solving skills."'],
          ['Results', 'Released to the school between four and six weeks after the contest.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Working ahead in math',
          left: [
            'CEMC answers a common question directly. A Grade 9 student taking a Grade 10 math course is still eligible for the Fryer, the contest for their own grade.',
            'Students who want a harder paper may choose a contest above their grade, but still only one of the three in a school year, so the choice is worth a conversation with the school.'
          ],
          rightH3: 'Official status and recognition',
          right: [
            'A writer is official for the Fryer if in Grade 9 or below, for the Galois if in Grade 10 or below, and for the Hypatia if in Grade 11 or below, with the response form properly completed.',
            'The top 25% of all writers receive a Certificate of Distinction. A school\'s team score adds its five highest official scores, and schools may opt out of the team competition.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/fgh" rel="noopener" target="_blank">CEMC, Fryer, Galois and Hypatia Contests</a>, read 22 October 2026. Students enter through their school; CEMC does not take individual registrations. Modern Age Coders is a separate teaching company, not connected with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'question', tint: 'deep', eyebrow: 'Anatomy of a question',
      h2: 'How one 10-mark question is put together',
      lede: 'The three 2025 booklet covers are identical apart from the contest name and grade. Read together, their rules describe the inside of a single question better than any summary.',
      body: [
        { kind: 'table', caption: 'From the covers of the 2025 Fryer, Galois and Hypatia booklets (rules only, no problems)', head: ['Rule on the cover', 'What it means for a student'], rows: [
          ['"Number of questions: 4" and "Each question is worth 10 marks"', 'Four equal questions; the paper is out of 40'],
          ['Short answer parts are "worth 2 or 3 marks each"', 'The early parts of a question are small, quick and boxed'],
          ['A correct boxed answer earns the part in full', 'A boxed part needs the answer, not an essay'],
          ['Part marks on a boxed part need relevant working in the space given', 'A line of working protects a boxed part from a slip'],
          ['Full solution parts carry whatever the boxed parts leave of the 10', 'The written parts carry most of each question'],
          ['Presentation is marked: a right answer, badly written, falls short of full marks', 'A right answer with a missing reason is an incomplete answer']
        ] },
        { kind: 'p', mt: true, html: 'Put those rules together and a question looks like a staircase of three or four steps. The bottom steps are short and boxed, worth 2 or 3 marks each. The top step, sometimes two, asks for a written argument and carries the rest. CEMC\'s own overview describes the papers as problems that "progressively lead to more complex questions", and in our experience that is literal: the earlier parts usually hand the student a fact or a method that the last part needs. A student who treats each part as a separate puzzle works harder than one who asks, at every step, what the previous part just gave them.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading a question from the top',
          left: [
            'Before writing anything, read the last part first. Knowing where the question is going makes the early parts look like preparation, which is what they usually are.',
            'Then do the boxed parts quickly and cleanly, keeping a note of any result that seems likely to come back.'
          ],
          rightH3: 'Seventy-five minutes for four',
          right: [
            'Our budget: questions 1 and 2 in about 30 minutes together, then 20 minutes each on questions 3 and 4, with 5 minutes left to reread every written part.',
            'This budget is ours, not CEMC\'s. Its purpose is to stop a student finishing question 3 perfectly and never reading question 4, whose first parts are often the easiest marks left on the paper.'
          ] }
      ]
    },
    {
      id: 'averages', tint: 'tint', eyebrow: '2026 in figures',
      h2: 'How far up each question students climbed in 2026',
      lede: 'CEMC\'s 2026 results booklet reports the average mark on each of the four questions of each contest, each out of 10. The 2026 contests were the most recent sitting when this page was written.',
      body: [
        { kind: 'table', caption: 'Average mark per question, 2026 Fryer, Galois and Hypatia Contests, each out of 10, from CEMC\'s 2026 FGH Results booklet', head: ['Question', 'Fryer (Grade 9)', 'Galois (Grade 10)', 'Hypatia (Grade 11)'], rows: [
          ['1', '8.2', '8.2', '8.0'],
          ['2', '6.0', '7.2', '7.2'],
          ['3', '3.8', '4.6', '6.3'],
          ['4', '3.7', '1.1', '1.3']
        ] },
        { kind: 'table', mt: true, caption: 'Headline figures for 2026, from CEMC\'s FGH page (each out of 40)', head: ['Measure', 'Fryer', 'Galois', 'Hypatia'], rows: [
          ['Average (mean)', '21.7', '21.0', '22.8'],
          ['Certificate of Distinction cutoff', '28', '26', '28'],
          ['School Medal Champion cutoff', '21', '21', '22'],
          ['Number of contestants', '6388', '6478', '6615']
        ] },
        { kind: 'p', mt: true, html: 'What we read from these figures, labelled as ours. Question 1 averaged about 8 out of 10 on all three papers, so most writers climbed it almost to the top. Question 4 on the Galois and Hypatia averaged barely above 1 out of 10: most writers collected a boxed part or two and stopped. A perfect score on questions 1 and 2 is 20 marks, and the 2026 Certificate of Distinction cutoffs were 26 and 28, so a certificate needed real marks on questions 3 and 4 as well. Those marks do not have to come from the final written part; on most questions the lower steps of 3 and 4 are within reach of a well-prepared student, and they are exactly what the staircase approach collects. CEMC reports 19481 students enrolled across the three contests in 2026; we have not added any of the averages together.' },
        { kind: 'source', html: 'Sources: CEMC\'s 2026 FGH Results booklet (Problem Averages and enrolment) and the averages and cut-offs table on the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/fgh" rel="noopener" target="_blank">FGH page</a>, read 22 October 2026. CEMC stresses that its contests have no pass or fail mark.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'One question per contest',
      h2: 'Three full questions of ours, one for each paper, solved completely',
      lede: 'Each question below was written by our teachers for our students. None comes from a CEMC paper or is modelled on one. Each has the same staircase shape as an April question, and each is followed by a note on how its parts feed one another. All answers were checked in Python.',
      body: [
        { kind: 'code', label: 'Fryer-style &middot; our question and our complete solution', lang: 'text', code: FRYER, note: 'Part (c) is the key to part (d): once every purchase is known to be even, the search in (d) only has to look at even numbers. Part (b) quietly practises the same equation that (d) uses. The mark split shown is ours, chosen to resemble the cover\'s rules; CEMC sets its own split on each paper.' },
        { kind: 'code', label: 'Galois-style &middot; our question and our complete solution', lang: 'text', code: GALOIS, note: 'Part (b) completes the square and part (c) uses the quadratic formula, which is completing the square in general form. A student who sees that link solves (c) calmly. The check on the parabola at the end costs ten seconds and catches arithmetic slips.' },
        { kind: 'code', label: 'Hypatia-style &middot; our question and our complete solution', lang: 'text', code: HYPATIA, note: 'Part (b) does the algebra that turns part (c) from a search through 90 numbers into a question about the digit difference a - b. The small lemma about 9m being a square is the line many students skip; without it the count is a guess.' },
        { kind: 'two', mt: true,
          leftH3: 'A common thread',
          left: [
            'In all three, the written part is easier than it looks once the earlier parts are taken seriously. The paper is designed that way, and students who expect it find question 4 less frightening.',
            'Try each question under time: 20 minutes for the Fryer-style one, 18 for the Galois-style and 18 for the Hypatia-style, then compare with ours line by line.'
          ],
          rightH3: 'If a student is stuck on the last part',
          right: [
            'Write down what the earlier parts proved, in a sentence each. On our three questions, that sentence is most of the final answer.',
            'Then try a small case on scrap paper. CEMC\'s covers ask for rough work to stay out of the finished solution, so the small case belongs on the rough page, not the answer booklet.'
          ] }
      ]
    },
    {
      id: 'rubric', tint: 'tint', eyebrow: 'How we mark',
      h2: 'Our rubric for a written part, using the cookie question',
      lede: 'This is the rubric our teachers use in class for part (d) of the Fryer-style question above. It is ours, not CEMC\'s marking scheme, but it follows the three qualities CEMC names on every cover: completeness, clarity and presentation.',
      body: [
        { kind: 'table', caption: 'Our 4-mark rubric for part (d) of the Fryer-style question (ours)', head: ['Mark', 'Earned for', 'Commonly lost because'], rows: [
          ['1', 'Showing 14 cannot be bought, case by case', 'The student says "14 does not work" with no cases'],
          ['1', 'Showing 16, 18 and 20 can be bought', 'Only one or two of the three are shown'],
          ['1', 'Explaining why every larger even number then works', 'The student lists 22, 24, 26, 28 and writes "and so on"'],
          ['1', 'A closing sentence that answers the question', 'The answer 14 appears only inside the working']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the rubric teaches',
          left: [
            'A largest-impossible question always has two halves: the number really is impossible, and everything above it really is possible. Students who prove only one half lose half the marks.',
            'The phrase "and so on" is the most expensive two words on an FGH paper. It asks the marker to finish the argument, and markers do not.'
          ],
          rightH3: 'Using it at home',
          right: [
            'Ask your child to mark their own attempt against the four rows before reading our solution. Self-marking against a rubric is a skill in itself, and it transfers to every written contest.',
            'In our classes, students swap attempts and mark each other\'s work with the same table before the teacher marks both.'
          ] }
      ]
    },
    {
      id: 'warmup', tint: 'deep', eyebrow: 'Three warm-ups',
      h2: 'Short boxed questions to start a practice session',
      lede: 'These are our practice problems, not CEMC problems, at the level of the first boxed part of an April question. Each should take two or three minutes.',
      body: [
        { kind: 'p', html: '<b>Warm-up 1.</b> <i>Our practice problem, not a CEMC problem.</i> What is the smaller angle between the hour hand and the minute hand of a clock at 3:30?' },
        { kind: 'p', html: '<b>Solution.</b> At 3:30 the minute hand points at the 6, which is 180 degrees from 12. The hour hand has moved halfway from the 3 to the 4: the 3 is at 90 degrees and each hour mark is 30 degrees, so the hour hand is at 90 + 15 = 105 degrees. The angle between them is 180 - 105 = 75 degrees. Answers of 90 forget that the hour hand moves.' },
        { kind: 'p', mt: true, html: '<b>Warm-up 2.</b> <i>Our practice problem, not a CEMC problem.</i> How many of the integers from 1 to 100 are perfect squares or perfect cubes, or both?' },
        { kind: 'p', html: '<b>Solution.</b> There are 10 squares (1 to 100) and 4 cubes (1, 8, 27, 64). Two numbers, 1 and 64, are both, so they were counted twice. The total is 10 + 4 - 2 = 12.' },
        { kind: 'p', mt: true, html: '<b>Warm-up 3.</b> <i>Our practice problem, not a CEMC problem.</i> The mean of five consecutive odd integers is 21. What is the largest of them?' },
        { kind: 'p', html: '<b>Solution.</b> Five consecutive odd integers are spaced 2 apart, so their mean is the middle one, 21. The five are 17, 19, 21, 23 and 25, and the largest is 25. No equation is needed once the symmetry is seen.' },
        { kind: 'p', mt: true, html: 'Warm-ups like these are where a 2-mark box is won or lost. In class we set three at the start of every session, timed, before any written work, so that the habit of exact, quick boxed answers is practised as often as the longer writing.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Which contest',
      h2: 'Choosing Fryer, Galois or Hypatia, and fitting it into the year',
      lede: 'The rules in the first column are CEMC\'s; the suggestions are ours. Because a student may write only one of the three in a school year, the choice is worth making deliberately.',
      body: [
        { kind: 'table', caption: 'Fitting an April FGH paper into a Grade 9 to 11 contest year (rules CEMC\'s, suggestions ours)', head: ['Grade', 'April paper', 'Earlier in the year', 'Our suggestion'], rows: [
          ['9', 'Fryer', 'CIMC in November; Pascal in February', 'Use the February paper for speed and the Fryer for writing'],
          ['10', 'Galois', 'CIMC in November; Cayley in February', 'A good year to make written solutions routine'],
          ['11', 'Hypatia', 'CSMC in November; Fermat in February', 'Treat the Hypatia as a rehearsal for the Euclid a year later'],
          ['Any grade, working ahead', 'A contest above grade, still only one', 'As above', 'Choose by readiness for written proof, not by course level']
        ] },
        { kind: 'p', mt: true, html: 'CEMC lists the Pascal, Cayley and Fermat multiple-choice contests for Tuesday, February 23, 2027 and Wednesday, February 24, 2027 in the Americas, six weeks before the April papers. The two kinds of contest test different habits: February rewards speed and elimination, April rewards a written argument. Our grade pages cover the February papers: <a class="ag-inline-link" href="/pascal-contest-preparation">Pascal</a> for Grade 9, <a class="ag-inline-link" href="/cayley-contest-preparation">Cayley</a> for Grade 10 and <a class="ag-inline-link" href="/fermat-contest-preparation">Fermat</a> for Grade 11. Students in their final year write the <a class="ag-inline-link" href="/euclid-contest-preparation">Euclid</a> instead, one day before the FGH papers.' },
        { kind: 'two', mt: true,
          leftH3: 'If the school is not ordering',
          left: [
            'CEMC takes contest orders only from schools; in its words, "all students must participate through their school." The student writes there under supervision. Where a school sits out, CEMC\'s advice is to find a nearby school willing to host the student for the morning.',
            'CEMC wants school orders in by Thursday, March 11, 2027, so January is a sensible time to raise it.'
          ],
          rightH3: 'After results arrive',
          right: [
            'Results reach the school four to six weeks after the contest, so in May 2027. Ask the teacher for the student\'s marks by question if possible: they show exactly which steps of which staircase were climbed.',
            'That breakdown is the most useful starting point for the next year\'s preparation.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'The plan',
      h2: 'From November 2026 to the April 7, 2027 papers, in five stages',
      lede: 'Our plan for a Grade 9 to 11 student starting in November, with two live classes a week and one written part handed in every week from the first class.',
      body: [
        { kind: 'ol', items: [
          '<b>Stage 1, November to mid-December 2026: the staircase habit.</b> Question 1 and question 2 from three past papers, untimed, with every written part marked against a rubric like ours.',
          '<b>Stage 2, mid-December 2026 to January 2027: the grade\'s mathematics.</b> Algebra, geometry and counting for the grade, taught for understanding, with a short written proof each week. Confirm with the school that it will order the April contest.',
          '<b>Stage 3, February 2027: the February paper.</b> Most of our Grade 9 to 11 students also write Pascal, Cayley or Fermat on 23 or 24 February 2027, so this month shifts to multiple-choice pace, with one written part a week kept going.',
          '<b>Stage 4, March 2027: questions 3 and 4.</b> The lower steps of questions 3 and 4 from past papers, and our own four-part questions. One full 75-minute paper by mid-March, and a reminder to the school about the March 11, 2027 order date.',
          '<b>Stage 5, 15 March to 7 April 2027: rehearsal.</b> A pair of full 75-minute sittings in exam conditions, each gone through part by part afterwards, then a quiet final week of polishing old write-ups instead of new topics.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 9, first Fryer', p: 'Stages 1, 4 and 5 matter most. Aim at questions 1 and 2 in full and the boxed parts of 3 and 4.' },
          { h3: 'Grade 10, Galois', p: 'The full plan; question 4 is the target, given its 2026 average.' },
          { h3: 'Grade 11, Hypatia', p: 'Add one Euclid-style written question a fortnight, looking ahead to the final-year contest.' }
        ] }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Free CEMC material',
      h2: 'CEMC\'s free FGH resources, and how our classes use them',
      lede: 'CEMC names three kinds of support for the FGH Contests on its contest page. All are free, and we point students to them rather than copying them.',
      body: [
        { kind: 'table', caption: 'CEMC\'s three types of FGH support (read 22 October 2026) and our use of each', head: ['Support', 'What CEMC provides', 'How we use it'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests</a>', 'Past Fryer, Galois and Hypatia papers with solutions', 'Stages 1, 4 and 5; the official solutions are read only after a full written attempt'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">Courseware</a>', 'Free online lessons covering school curriculum content', 'Filling a curriculum gap that a past paper exposes'],
          ['CEMC Visits Schools', 'Problem-solving workshops at schools, run by CEMC staff', 'A suggestion to pass on to a head of math']
        ] },
        { kind: 'p', mt: true, html: 'Past papers are most useful when they are not used up too fast. We ration them: each past paper is used once for a timed attempt and once, weeks later, for a rewrite of the written parts. The second use often teaches more than the first, because the student already knows the mathematics and can concentrate entirely on the writing. For the wider CEMC year see our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC Waterloo contests</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four steps up an FGH staircase',
    lede: 'Our stages, used in the first class to place a student.',
    table: { caption: 'From the first box to the final part (ours)', head: ['Stage', 'What a paper shows'], rows: [
      ['1. First steps', 'Boxed parts of questions 1 and 2 correct; written parts left as a bare answer'],
      ['2. Two questions', 'Questions 1 and 2 complete, with written parts that give reasons'],
      ['3. Lower steps', 'Boxed parts of questions 3 and 4 collected as well'],
      ['4. Top step', 'A written final part on question 3 or 4, complete and clearly argued']
    ] },
    left: { h3: 'For parents', ps: [
      'Most capable students begin at stage 1, because school math rarely asks a Grade 9 student to explain why something must be true. Moving to stage 2 is usually a matter of weeks; stages 3 and 4 take months of steady writing.',
      'The FGH papers are a gentle introduction to proof. Students who learn it here meet the Euclid and university mathematics with an advantage.'
    ] },
    right: { h3: 'For students', ps: [
      'Before the last part of any question, write down what the earlier parts gave you.',
      'Never write "and so on". Say exactly why the pattern continues.'
    ] }
  },

  catalogue: {
    eyebrow: 'Beyond the April papers',
    h2: 'Nine courses for a Grade 9 to 11 math student',
    lede: 'All live and online, with one teacher who stays with the student, in a group or one to one, for students in every province and territory.',
    bands: [
      { num: 'I', h3: 'Grade 9 and 10 math', sub: 'The Fryer and Galois years', courses: [
        { code: 'FGHC / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions made reliable.' },
        { code: 'FGHC / BASE / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'For a Grade 8 or 9 student still closing gaps.' },
        { code: 'FGHC / BASE / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proofs for beginners', blurb: 'Short written arguments from the first week.' }
      ] },
      { num: 'II', h3: 'Grade 11 and beyond', sub: 'The Hypatia year and after', courses: [
        { code: 'FGHC / NEXT / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 university math', blurb: 'Advanced Functions and Calculus and Vectors, beside the school.' },
        { code: 'FGHC / NEXT / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Pre-calculus 12 and Math 30-1', blurb: 'Western Canada Grade 12 math, live.' },
        { code: 'FGHC / NEXT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance, a frequent final part.' }
      ] },
      { num: 'III', h3: 'Math with code', sub: 'For students who also program', courses: [
        { code: 'FGHC / CODE / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python to test a pattern before proving it.' },
        { code: 'FGHC / CODE / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'Waterloo\'s coding contest, for students who program too.' },
        { code: 'FGHC / CODE / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full first language for Grade 9 to 11 students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live FGH classes through a Grade 9 to 11 year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school groups planned in Eastern time, confirmed on your own clock.' },
      { time: 'Weekends', l: 'Morning sessions for full 75-minute papers.' },
      { time: '1-on-1', l: 'A private plan counted back from 7 April 2027.' }
    ],
    cells: [
      { h3: 'A written part weekly', p: 'Handed in, marked and returned with comments.' },
      { h3: 'Our own questions', p: 'Four-part staircases written by our teachers.' },
      { h3: 'Rubric marking', p: 'Every written part scored against a clear rubric.' },
      { h3: 'Papers rationed', p: 'Each past paper attempted, then rewritten later.' },
      { h3: 'Across Canada', p: 'One class shared by Halifax, Winnipeg and Victoria.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty in a group, or a teacher to yourself.' }
    ]
  },

  projectsH2: 'Projects from students who also code',
  projectsLede: 'A number of our FGH students take a coding course alongside. Below is a sample of what they have built, and there is plenty more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from our Google listing, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'The school pays CEMC for the contest itself. Our monthly fee is for live teaching only, and students can pause after the April 2027 papers without notice.',
    free: ['A free first class', 'One four-part question of ours, solved together', 'No payment details asked'],
    group: ['A batch of fifteen to twenty', 'Grouped by grade', 'Choose your batch', 'Billed month to month'],
    one: ['A private teacher', 'Paced to 7 April 2027', 'Built on your past papers']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Fryer, Galois and Hypatia: frequently asked',
    items: [
      { q: 'What are the Fryer, Galois and Hypatia Contests?', a: 'They are CEMC\'s full-solution math contests from the University of Waterloo: the Fryer for Grade 9, the Galois for Grade 10 and the Hypatia for Grade 11. Each has four questions, takes 75 minutes and is scored out of 40.' },
      { q: 'When are the Fryer, Galois and Hypatia Contests in 2027?', a: 'CEMC lists Wednesday, April 7, 2027 in North and South America and Thursday, April 8, 2027 elsewhere. Schools must order by Thursday, March 11, 2027.' },
      { q: 'How is each question marked?', a: 'Every question is worth 10 marks. On the 2025 papers, short answer parts were worth 2 or 3 marks each, with full marks for a correct boxed answer, and full solution parts carried the rest of the question, marked for completeness, clarity and style.' },
      { q: 'Can my child write more than one of the three?', a: 'No. CEMC allows only one of the Fryer, Galois and Hypatia Contests per student in a school year. A student working ahead may choose a contest above their grade instead of their own.' },
      { q: 'What were the 2026 averages?', a: 'CEMC lists 2026 means of 21.7 for the Fryer, 21.0 for the Galois and 22.8 for the Hypatia, each out of 40, with Certificate of Distinction cutoffs of 28, 26 and 28. Question 4 averaged 1.1 out of 10 on the Galois and 1.3 on the Hypatia.' },
      { q: 'How is FGH different from Pascal, Cayley and Fermat?', a: 'Pascal, Cayley and Fermat are 60-minute multiple-choice papers in February. The Fryer, Galois and Hypatia are written papers in April, where most marks come from explaining a solution. Many students write one of each in the same school year.' },
      { q: 'How do we enter?', a: 'Through the school. CEMC takes orders only from schools, and students write at school under supervision. If your school is not taking part, CEMC suggests asking another local school whether your child can write with its students.' },
      { q: 'Are calculators permitted?', a: 'Some are. CEMC permits calculators that cannot go online, talk to other devices, hold stored notes or programs, or run algebra or geometry software. A written part still has to show the reasoning on paper.' },
      { q: 'Does your course give certificates or guarantee results?', a: 'Certificates come from CEMC, based on the paper. We teach the mathematics and the writing, and we make no promise of a score, certificate or medal.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We plan in Eastern time and confirm each class in your own province\'s time, including after the clocks move forward on 14 March 2027.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'Pages for Grade 9 to 11 students in Canada planning their CEMC year.',
    items: [
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Every CEMC math contest, from Gauss to Euclid.' },
      { href: '/pascal-contest-preparation', label: 'Pascal Contest', p: 'Grade 9 speed and elimination, six weeks earlier.' },
      { href: '/cayley-contest-preparation', label: 'Cayley Contest', p: 'The multiple-choice partner of the Galois.' },
      { href: '/fermat-contest-preparation', label: 'Fermat Contest', p: 'The multiple-choice partner of the Hypatia.' },
      { href: '/euclid-contest-preparation', label: 'Euclid Contest', p: 'The final-year written contest, one day earlier.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math help in every province.' },
      { href: '/maths-olympiad-classes-online', label: 'Olympiad classes', p: 'Comparing the major math contests.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our Canada pages start here.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Reasons first, answers second.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class works through one of our four-part questions together: the boxed parts quickly, then the written part slowly, marked against our rubric on screen. You leave knowing which step of the staircase your child is on and how the months before 7 April 2027 could be used.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class from start to finish, and the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'Every class is live on video, taught by our teachers in India, so there is nothing to travel to. Families anywhere in Canada reach us fastest on WhatsApp.',
    formNote: 'The first class is free. No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'CEMC contests', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'All CEMC contests' },
        { href: '/pascal-contest-preparation', label: 'Pascal Contest' },
        { href: '/fermat-contest-preparation', label: 'Fermat Contest' },
        { href: '/euclid-contest-preparation', label: 'Euclid Contest' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/maths-olympiad-classes-online', label: 'Olympiad classes' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Each part is a tool for the next'
  },

  personalityCss: `
.ag-root.ag-fghc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-fghc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-fghc .ag-section-head h2 { max-width: 40ch; }
.ag-root.ag-fghc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-fghc .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-fghc .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Fryer, Galois and Hypatia Contests page, read raw on 22 October 2026; the front covers of the 2025 Fryer, Galois and Hypatia booklets (rules only, no problems); the 2026 FGH Results booklet (problem averages and enrolment total): 2027 dates Wednesday, April 7, 2027 (Americas) and Thursday, April 8, 2027; ordering deadline Thursday, March 11, 2027; Fryer Grade 9, Galois Grade 10, Hypatia Grade 11; one contest per school year; four questions, 75 minutes, out of 40; each question worth 10; short answer parts worth 2 or 3; full solution parts worth the remainder; logical thinking over content recall; official-participant grade limits; Certificate of Distinction for the top 25%; team score of five; 2026 means 21.7, 21.0, 22.8; cutoffs 28, 26, 28 and 21, 21, 22; contestants 6388, 6478, 6615; question averages; enrolment 19481; three types of preparation support. PCF February 2027 dates from facts-schools-contests.md row 147; school-only entry from rows 112 and 113.',
    localProject: 'Three original four-part questions written by us with complete solutions checked in Python: a Fryer-style cookie-box question (46 cookies, 3 ways to buy 60, odd totals impossible, 14 the largest impossible even total), a Galois-style parabola question (intercepts 1 and 3, k = 4 for tangency, k = 0 with points (5, 5) and (1, -3)), and a Hypatia-style digit-reversal question (n - R(n) = 9(a - b), 16 two-digit numbers give a positive perfect square); a 4-mark rubric of ours; three warm-ups (75 degrees, 12 squares or cubes, largest odd integer 25); a 75-minute budget; a five-stage plan to 7 April 2027. Lesson family: each part of a question is a tool for the next.',
    requiredMentions: ['worth 2 or 3 marks each', 'The bottom steps are short and boxed', 'Participants can only write one of the Fryer, Galois and Hypatia Contests in a given school year', 'progressively lead to more complex questions', 'Question 4 on the Galois and Hypatia averaged barely above 1 out of 10', '19481 students enrolled across the three contests in 2026', 'Showing 14 cannot be bought, case by case', 'Our rubric for a written part, using the cookie question', 'is the most expensive two words on an FGH paper', 'Each part is a tool for the next'],
    sources: [
      { claim: '2027 dates and deadline, audience, one-per-year rule, format, writing conditions, content description, results timing, official participants, working-ahead note, certificates, team score, 2026 averages and cutoffs, preparation support.', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'Question count, 10 marks per question, short answer parts worth 2 or 3, full solution parts worth the remainder, boxed answers and part marks, presentation rule, calculator features, from the 2025 Fryer booklet cover.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025FryerContest.pdf' },
      { claim: 'The same cover rules for the Galois.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025GaloisContest.pdf' },
      { claim: 'The same cover rules for the Hypatia.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025HypatiaContest.pdf' },
      { claim: '2026 problem averages for all three contests and the enrolment total.', url: 'https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026_FGH_Results.pdf' },
      { claim: 'Pascal, Cayley and Fermat dates, 23 and 24 February 2027.', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'School-only entry and joining another local school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'Any CEMC past FGH problem or solution: never reproduced or adapted; the page links to CEMC\'s archive and uses questions we wrote.',
      'The hub page\'s three-consecutive-integers example and the Euclid page\'s losing-draft device: not reused; this page uses a rubric and three new questions.',
      'A time-zone table for 7 April 2027: left out, as the Euclid page already covers that morning.',
      'Totals of the problem averages or of contestants: not computed; CEMC\'s own enrolment total is printed.',
      'Registrations by province: not printed, because the results booklet layout interleaves the three contests.',
      'Contest fees: omitted.',
      'Honour-roll names: not reproduced.',
      'That our classes raise scores or earn certificates or medals: refused.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
