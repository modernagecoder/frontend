'use strict';
// Math Kangaroo Canada preparation (ag- contest door; Canada cluster Plan 2, row 52, CONDITIONAL). Searches: math
// kangaroo canada / math kangaroo canada 2027.
// Kill-rule count (8 needed), facts of this page's own, each read raw on 22 October 2026:
//   1-12 from the University of the Fraser Valley host-centre page (ufv.txt), 13-16 from Kangourou sans Frontieres.
//   That is 16 verified facts, so the page is written. The national site mathkangaroo.ca was tried once: it returns a
//   JavaScript shell with no readable content (mathkangaroo-ca.html / .txt, 30 characters), so NOTHING on this page is
//   taken from it, and the page says so.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/math-kangaroo-canada-preparation/ and
// ca/src/other-contests/ufv-canadian-math-kangaroo.html):
//  - ufv.ca/math/contests/canadian-math-kangaroo/ (ufv.txt): (1) "Math Kangaroo Canada is nationally ranked multiple
//    choice contest"; (2) its purpose "is to introduce students from grade 1 to grade 12 to math challenges in a fun and
//    enjoyable way"; (3) "The competition is held yearly in more than 50 Canadian cities."; (4) "While the problems are
//    in alignment with provincial curricula, the problems in the contest require creativity, logical thinking or a
//    different perspective."; (5) different versions for grades 1-2, 3-4, 5-6, 7-8, 9-10 and 11-12; (6) Grades 1-2: "18
//    multiple-choice questions, arranged in increasing difficulty, to be answered in 45 minutes."; (7) Grades 3-4: 24
//    questions in 60 minutes; (8) Grades 5-12: 30 questions in 75 minutes; (9) "The Fraser Valley Contest will take
//    place on Sunday, March 21, 2027 at the Abbotsford Campus of the University of the Fraser Valley." (one host centre,
//    NEVER presented as the national date); (10) "Parents or teachers can register students in the contest." with the
//    2027 registration form on the national site; (11) the Canadian Math Kangaroo Contest (CMKC) "is a volunteer-run,
//    not-for-profit organization"; (12) it "is administered by mathematicians and teachers of mathematics". The fee lines
//    on that page are 2026 figures with 2026 deadlines and are deliberately not used.
//  - aksf.org (aksf.txt): (13) Kangourou sans Frontieres "is an international association founded in France"; its main
//    activity "is designing the annual Kangaroo Mathematics Competition"; "The questions are not standard textbook
//    problems"; "The organisation of the competition in the individual countries is up to the members of Kangourou sans
//    Frontières." The association statement on the same page is not used.
//  - aksf.org/countries.xhtml (aksf-countries.txt): (14) Canada (CA) listed with the "Canadian Math Kangaroo Contest" and
//    mathkangaroo.ca. The named representative is not reproduced.
//  - aksf.org/history.xhtml (aksf-history.txt): (15) "The first Kangaroo challenge took place on May 15th, 1991" in
//    France; the association founded in June 1994 in Strasbourg; (16) participants "remained rather stable around 6
//    million" in the second decade of the century; the Pré-écolier category for "6 to 8-year-olds" from 2012. Names of
//    individuals in the history are not reproduced.
//  - Comparison rows: CEMC school-only entry (facts-schools-contests.md rows 112 and 113) and the CMS COMC teacher
//    registration and Open Writing Centres (cms.math.ca/competitions/comc/comc2026/faq/students/, read raw today).
// Not imported: any scoring rule (points per question, penalties) from Math Kangaroo USA or from AKSF, because no
// Canadian scoring rule could be read raw; the national 2027 date and fees; national results.
// Our own material, labelled on the page: the eight practice problems and solutions (answers checked in Python on
// 22 October 2026), the minutes-per-question arithmetic (45 / 18 = 60 / 24 = 75 / 30 = 2.5), the time plans, the
// eight-week plan, and the draw-it-first method.
// Lesson family: draw it first (turn words into a picture, then count).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DRAW = `Problem 6 (ours, Grades 5 and 6). A rectangle 6 squares wide and
4 squares tall is drawn on squared paper. A straight line is drawn
from one corner to the opposite corner. How many of the small
squares does the line pass through (not just touch at a corner)?
(A) 6   (B) 7   (C) 8   (D) 10   (E) 12

Draw it first.
  The diagonal goes 6 across and 4 up. Both share the factor 2,
  so the line passes exactly through one grid corner in the middle,
  at 3 across and 2 up. That splits it into two equal halves,
  each a 3 by 2 rectangle's diagonal.

Count one half on the drawing.
  In a 3 by 2 rectangle the diagonal crosses 2 vertical lines
  and 1 horizontal line inside it, never at a corner, so it
  enters a new square 3 times after the first one:
  1 + 2 + 1 = 4 squares.

Both halves: 4 + 4 = 8.  Answer (C).

Check with the drawing: shade the squares the line passes through
and count them. A child who shades 10 has included the two squares
that the line only touches at the middle corner.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'Math Kangaroo in Canada for Grades 1 to 12: the six grade versions, how long each paper is, what we could and could not verify for 2027, and eight original practice problems.' },
  slug: 'math-kangaroo-canada-preparation',
  code: 'mkcp',
  accent: '#413D70',
  accentRationale: 'Math Kangaroo Canada preparation: a muted indigo #413D70, allocated for row 52; measured 6.8 RGB units (Euclidean) from the nearest site accent (#424076) and 20.3 from the nearest allocated Canada accent (#3C2C7A); contrast 9.32 on the paper #FBF8F2, 8.76 and 8.02 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Math Kangaroo Canada',
  title: 'Math Kangaroo Canada 2027: Format, Grades and Practice',
  description: 'Math Kangaroo in Canada for Grades 1 to 12: six grade versions, 18 to 30 questions in 45 to 75 minutes, how families register, and eight practice problems of ours.',
  ogDescription: 'Math Kangaroo Canada is a multiple-choice contest for Grades 1 to 12, held in more than 50 Canadian cities. The six versions and their timings, what is and is not published for 2027, and eight original problems with solutions.',
  twitterDescription: 'Math Kangaroo Canada: six versions, 2.5 minutes a question, and how to practise without drilling.',
  pageName: 'Math Kangaroo Canada Preparation',
  webPageDescription: 'A guide for parents in Canada to the Canadian Math Kangaroo Contest for Grades 1 to 12, built from a university host-centre page and the international Kangaroo association, with the six grade versions, honest notes on what could not be verified for 2027, and eight original practice problems.',
  courseDescription: 'Live online math and contest classes for children and teens in Canada preparing for Math Kangaroo, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'Olympiad classes', href: '/maths-olympiad-classes-online' }],
  crumbLabel: 'Math Kangaroo Canada',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: 'The contest' },
    { href: '#versions', label: 'Six versions' },
    { href: '#unknowns', label: '2027 dates' },
    { href: '#method', label: 'Draw it first' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Canada &middot; Math Kangaroo &middot; Grades 1 to 12',
  h1: 'Math Kangaroo Canada preparation, Grades 1 to 12',
  lede: 'Math Kangaroo is the Canadian branch of an international multiple-choice contest that began in France in 1991 and now runs in dozens of countries. In Canada it is organized by the Canadian Math Kangaroo Contest, a volunteer-run, not-for-profit body, and written in more than 50 cities by children from Grade 1 to Grade 12, each on a version for their own pair of grades. It is one of the few contests in Canada that a parent, not only a school, can enter a child for. This guide sets out what we could verify from primary sources on 22 October 2026, says plainly what we could not, and then does what a preparation page should: a method for young problem solvers, eight practice problems of ours across the six versions, and a plan for the weeks before the contest.',
  secondaryCta: { href: '#practice', label: 'Try the practice problems' },
  wa: 'Hello Modern Age Coders, my child would like to prepare for Math Kangaroo in Canada. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; the practice problems here are written by our teachers',
  spec: [
    ['Organiser in Canada', 'Canadian Math Kangaroo Contest (CMKC)'],
    ['Grades', '1 to 12, in six versions'],
    ['Format', 'Multiple choice, easier to harder'],
    ['Grades 1 and 2', '18 questions, 45 minutes'],
    ['Grades 3 and 4', '24 questions, 60 minutes'],
    ['Grades 5 to 12', '30 questions, 75 minutes'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'In a few lines',
  capsule: 'Math Kangaroo Canada is a multiple-choice math contest for Grades 1 to 12, held yearly in more than 50 Canadian cities, with versions of 18 questions in 45 minutes (Grades 1 and 2), 24 in 60 (Grades 3 and 4) and 30 in 75 (Grades 5 to 12). Parents or teachers can register students. Modern Age Coders prepares children for it live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Courses for Kangaroo preparation',
    h2: 'Where our Math Kangaroo preparation happens',
    lede: 'The competitions course carries the contest practice for Grades 5 to 8. The elementary course builds the number sense the youngest versions rely on. The problem-solving course teaches the habit of picturing a problem before computing.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'MKCP / 01', title: 'Middle school math competitions', note: 'Contest problem solving for Grades 5 to 8, including Math Kangaroo practice.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MKCP / 02', title: 'Elementary math, Grades 1 to 5', note: 'Number sense, shapes and word problems, taught for understanding.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'MKCP / 03', title: 'Problem solving for kids', note: 'Patterns, logic and drawing a problem out, with and without code.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'The contest',
      h2: 'Math Kangaroo in Canada: what the sources say',
      lede: 'The national website could not be read as text on 22 October 2026, so the facts below come from a university host-centre page and from the international Kangaroo association. Each row names its source.',
      body: [
        { kind: 'table', caption: 'Math Kangaroo in Canada, from primary sources read on 22 October 2026', head: ['Question', 'What the source says', 'Source'], rows: [
          ['What is it?', '"Math Kangaroo Canada is nationally ranked multiple choice contest"', 'University of the Fraser Valley host-centre page'],
          ['Who is it for?', 'Its purpose "is to introduce students from grade 1 to grade 12 to math challenges in a fun and enjoyable way"', 'Same page'],
          ['Where?', '"The competition is held yearly in more than 50 Canadian cities."', 'Same page'],
          ['What kind of math?', 'Problems "in alignment with provincial curricula" that "require creativity, logical thinking or a different perspective"', 'Same page'],
          ['Who runs it?', 'The Canadian Math Kangaroo Contest (CMKC), "a volunteer-run, not-for-profit organization" administered by mathematicians and teachers of mathematics', 'Same page'],
          ['Who can register a child?', '"Parents or teachers can register students in the contest."', 'Same page'],
          ['International link', 'Canada is listed as a member country, with the Canadian Math Kangaroo Contest as its organizer', 'Kangourou sans Frontières, countries list']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The international family',
          left: [
            'Kangourou sans Frontières describes itself as "an international association founded in France" whose main activity "is designing the annual Kangaroo Mathematics Competition". It says the questions "are not standard textbook problems".',
            'Its history page records that the first Kangaroo challenge took place on 15 May 1991 in France, and that participation worldwide stayed "rather stable around 6 million" through the 2010s.'
          ],
          rightH3: 'Each country runs its own',
          right: [
            'The association also says that "The organisation of the competition in the individual countries is up to the members". That is why rules, dates and fees in Canada can differ from those in the United States or elsewhere.',
            'For that reason we do not borrow any scoring rule from another country\'s Kangaroo for this page. Families should take Canadian rules from the Canadian organizer.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ufv.ca/math/contests/canadian-math-kangaroo/" rel="noopener" target="_blank">University of the Fraser Valley, Canadian Math Kangaroo Fraser Valley</a>, <a class="ag-inline-link" href="https://www.aksf.org/" rel="noopener" target="_blank">Kangourou sans Frontières</a> and its countries and history pages, read 22 October 2026. Modern Age Coders has no connection with the Canadian Math Kangaroo Contest or with any host centre.' }
      ]
    },
    {
      id: 'versions', tint: 'deep', eyebrow: 'Six versions',
      h2: 'The six grade versions and how long each one is',
      lede: 'There are different versions for Grades 1 and 2, 3 and 4, 5 and 6, 7 and 8, 9 and 10, and 11 and 12. The host-centre page gives three formats across them, all multiple choice and all "arranged in increasing difficulty".',
      body: [
        { kind: 'table', caption: 'Math Kangaroo Canada formats, from the University of the Fraser Valley host-centre page (read 22 October 2026), with our minutes-per-question arithmetic', head: ['Version', 'Questions', 'Time', 'Minutes per question (our arithmetic)'], rows: [
          ['Grades 1 and 2', '18', '45 minutes', '2.5'],
          ['Grades 3 and 4', '24', '60 minutes', '2.5'],
          ['Grades 5 and 6', '30', '75 minutes', '2.5'],
          ['Grades 7 and 8', '30', '75 minutes', '2.5'],
          ['Grades 9 and 10', '30', '75 minutes', '2.5'],
          ['Grades 11 and 12', '30', '75 minutes', '2.5']
        ] },
        { kind: 'p', mt: true, html: 'Our observation from the arithmetic: every version gives an average of two and a half minutes a question. Because the questions get harder as the paper goes on, that average is misleading in a useful way. The first third of a paper should take well under two and a half minutes a question, which banks time for the last third, where a single question can easily take five. A child who spends the same time on every question will run out of time exactly where the questions become interesting.' },
        { kind: 'table', mt: true, caption: 'Our time plan for each format (ours, not the organizer\'s)', head: ['Format', 'First third', 'Middle third', 'Last third', 'Check'], rows: [
          ['18 questions, 45 min', 'Questions 1 to 6 in 10 min', '7 to 12 in 15 min', '13 to 18 in 17 min', '3 min'],
          ['24 questions, 60 min', 'Questions 1 to 8 in 13 min', '9 to 16 in 20 min', '17 to 24 in 23 min', '4 min'],
          ['30 questions, 75 min', 'Questions 1 to 10 in 15 min', '11 to 20 in 25 min', '21 to 30 in 30 min', '5 min']
        ] }
      ]
    },
    {
      id: 'unknowns', tint: 'tint', eyebrow: 'Dates for 2027',
      h2: 'Math Kangaroo Canada 2027: what is known and what is not',
      lede: 'Parents searching for the 2027 date deserve a straight answer, including where the answer runs out. This is what we could and could not confirm from primary sources on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'What could be verified for 2027 (read 22 October 2026)', head: ['Question', 'What we found', 'Status'], rows: [
          ['A 2027 contest date anywhere in Canada', 'One host centre says: "The Fraser Valley Contest will take place on Sunday, March 21, 2027 at the Abbotsford Campus of the University of the Fraser Valley."', 'Verified for that one centre only'],
          ['A single national 2027 date', 'Not readable: the national site loads its content by JavaScript and showed no text to our fetch', 'Not verified'],
          ['2027 registration', 'The host-centre page says the 2027 registration form and instructions are on the national site', 'Location verified; details not read'],
          ['2027 fees', 'The host-centre page still shows 2026 fees and 2026 deadlines', 'Not verified for 2027, so not printed'],
          ['Scoring rules in Canada', 'Not published on any page we could read', 'Not verified, so not described']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, and only that: Canada has many host centres in many cities, and each can set its own local arrangements, so the Fraser Valley date should not be assumed for Toronto, Calgary or Halifax. A family should find its nearest centre through the national organizer and confirm the date, the venue and the fee there. We will not quote a national date until we can read one at the source.' }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'How entry compares',
      h2: 'Kangaroo, CEMC and COMC: who can enter a child',
      lede: 'One feature makes Math Kangaroo different from the other well-known contests in Canada. The rows below come from each organizer\'s own pages, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Who can register a student, by contest (read 22 October 2026)', head: ['Contest', 'Who registers', 'Source'], rows: [
          ['Math Kangaroo Canada', '"Parents or teachers can register students in the contest."', 'University of the Fraser Valley host-centre page'],
          ['CEMC contests (Gauss, Pascal and the rest)', 'Schools only; students take part through their school, or join another local school that will have them', 'CEMC, How contests work'],
          ['COMC (Canadian Mathematical Society)', 'Normally teachers; limited Open Writing Centre places for students whose school is not participating', 'CMS, COMC FAQ for Students']
        ] },
        { kind: 'p', mt: true, html: 'For a family whose school runs no contests, that difference matters. A Grade 3 child is younger than any CEMC contest is designed for, since CEMC says its contests are made for Grades 5 to 12, but can write Math Kangaroo. For older students, Math Kangaroo sits well alongside the school-based contests: our <a class="ag-inline-link" href="/gauss-contest-preparation">Gauss</a> page covers Grades 7 and 8, and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC Waterloo contests</a> page covers the whole Waterloo year.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Draw it first',
      h2: 'The habit we teach first: turn the words into a picture',
      lede: 'Kangaroo problems ask for creativity and a different perspective, in the host-centre page\'s words. For children, the most reliable way to find a different perspective is to draw the problem before doing any arithmetic. Here is one of our problems, worked the way we teach it.',
      body: [
        { kind: 'code', label: 'Problem 6 &middot; our Grade 5 and 6 problem, solved by drawing', lang: 'text', code: DRAW, note: 'The drawing does two jobs. It finds the answer, and it checks the answer: shading the squares on paper catches the most common wrong count. A formula for this exists, but a child who has drawn ten of these understands why it works.' },
        { kind: 'table', mt: true, caption: 'Our four drawing moves for young problem solvers (ours)', head: ['Move', 'When to use it', 'Example on this page'], rows: [
          ['Draw the objects', 'A story with people or things', 'Problem 3, the line of children'],
          ['Draw a number line or a calendar', 'Days, positions, steps', 'Problem 2, the day of the week'],
          ['Draw a diagram with overlaps', 'Groups that share members', 'Problem 5, the two clubs'],
          ['Draw the shape, then add one line', 'Geometry', 'Problem 7, the square in the circle']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why drawing beats speed',
          left: [
            'Young children often lose marks on Kangaroo-style questions not because the math is hard but because they read a word problem quickly and compute with the wrong numbers. A drawing slows the reading down just enough.',
            'Over a term, the drawings get smaller and quicker, and eventually they move into the child\'s head. That is the goal, but it cannot be skipped.'
          ],
          rightH3: 'Teaching to think, not to copy',
          right: [
            'We never hand a child a list of tricks for "question types". A child who understands why a picture works can face a problem nobody has shown them, which is what Kangaroo papers are full of.',
            'Our teachers ask "what does it look like?" far more often than "what is the formula?".'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Eight practice problems',
      h2: 'Original practice problems for every version, with solutions',
      lede: 'All eight are our practice problems, written by our teachers. None is a Math Kangaroo problem, and none is copied or adapted from a past paper. They run from the Grades 1 and 2 version to the Grades 11 and 12 version, and every answer was checked in Python.',
      body: [
        { kind: 'p', html: '<b>Problem 1 (Grades 1 and 2).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> Mia has 3 more stickers than Leo. Together they have 15 stickers. How many stickers does Mia have? (A) 6 &nbsp;(B) 8 &nbsp;(C) 9 &nbsp;(D) 12 &nbsp;(E) 18' },
        { kind: 'p', html: '<b>Solution.</b> Draw two rows of stickers, Mia\'s row 3 longer than Leo\'s. Take away Mia\'s 3 extra: 12 are left, shared equally, 6 each. So Leo has 6 and Mia has 6 + 3 = 9. Answer (C). Checking: 9 + 6 = 15.' },
        { kind: 'p', mt: true, html: '<b>Problem 2 (Grades 3 and 4).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> Today is Wednesday. What day of the week will it be 100 days from today? (A) Monday &nbsp;(B) Wednesday &nbsp;(C) Thursday &nbsp;(D) Friday &nbsp;(E) Saturday' },
        { kind: 'p', html: '<b>Solution.</b> Every 7 days it is Wednesday again. 98 = 7 x 14, so 98 days from today is a Wednesday. Two more days: Thursday, then Friday. Answer (D). Drawing a week as a circle of seven days makes the "two more" step easy to see.' },
        { kind: 'p', mt: true, html: '<b>Problem 3 (Grades 3 and 4).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> Sam is standing in a line. Sam is 7th from the front and 9th from the back. How many children are in the line? (A) 14 &nbsp;(B) 15 &nbsp;(C) 16 &nbsp;(D) 17 &nbsp;(E) 63' },
        { kind: 'p', html: '<b>Solution.</b> Draw Sam as a dot. There are 6 children in front of Sam and 8 behind. With Sam: 6 + 1 + 8 = 15. Answer (B). Answer (C) counts Sam twice, which the drawing prevents.' },
        { kind: 'p', mt: true, html: '<b>Problem 4 (Grades 5 and 6).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> The digits 1, 2, 3 and 4 are each used once to make two 2-digit numbers. What is the largest possible sum of the two numbers? (A) 64 &nbsp;(B) 68 &nbsp;(C) 73 &nbsp;(D) 75 &nbsp;(E) 77' },
        { kind: 'p', html: '<b>Solution.</b> Tens digits are worth ten times as much, so the two largest digits, 4 and 3, go in the tens places. The sum is then (4 + 3) x 10 + (2 + 1) = 73, for example 42 + 31 or 41 + 32. Answer (C).' },
        { kind: 'p', mt: true, html: '<b>Problem 5 (Grades 7 and 8).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> In a class of 30 students, 18 are in the chess club, 15 are in the puzzle club and 5 are in neither. How many are in both clubs? (A) 3 &nbsp;(B) 5 &nbsp;(C) 8 &nbsp;(D) 10 &nbsp;(E) 13' },
        { kind: 'p', html: '<b>Solution.</b> Draw two overlapping circles. Students in at least one club: 30 - 5 = 25. Adding the two clubs, 18 + 15 = 33, counts the overlap twice, so the overlap is 33 - 25 = 8. Answer (C).' },
        { kind: 'p', mt: true, html: '<b>Problem 6 (Grades 5 and 6).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> The diagonal of a 6 by 4 rectangle on squared paper: see the worked drawing in the section above. Answer (C), 8.' },
        { kind: 'p', mt: true, html: '<b>Problem 7 (Grades 9 and 10).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> A circle fits exactly inside a square of side 10, touching all four sides. A smaller square is drawn inside the circle with all four corners on the circle. What is the area of the smaller square? (A) 25 &nbsp;(B) 40 &nbsp;(C) 50 &nbsp;(D) 64 &nbsp;(E) 75' },
        { kind: 'p', html: '<b>Solution.</b> Draw it, then add one line: the diagonal of the small square. That diagonal is a diameter of the circle, which equals the side of the big square, 10. A square with diagonal 10 has area 10 x 10 / 2 = 50. Answer (C). The small square has exactly half the area of the big one, a fact worth remembering.' },
        { kind: 'p', mt: true, html: '<b>Problem 8 (Grades 11 and 12).</b> <i>Our practice problem, not a Math Kangaroo problem.</i> In how many different orders can the eight letters of the word KANGAROO be arranged? (A) 5040 &nbsp;(B) 10080 &nbsp;(C) 20160 &nbsp;(D) 40320 &nbsp;(E) 80640' },
        { kind: 'p', html: '<b>Solution.</b> If all eight letters were different there would be 8! = 40320 orders. But the two As can swap without changing the word, and so can the two Os, so each word has been counted 2 x 2 = 4 times. The answer is 40320 / 4 = 10080. Answer (B). Answer (D) forgets the repeated letters.' },
        { kind: 'two', mt: true,
          leftH3: 'Using these at home',
          left: [
            'Give your child the problem for their own version and one from the version below, with paper for drawing and no calculator. Ask them to explain their drawing to you before saying the answer.',
            'If the answer is wrong, the drawing usually shows where. That conversation is worth more than the right letter.'
          ],
          rightH3: 'The wrong answers matter',
          right: [
            'Every wrong option in our problems is a real mistake children make: counting someone twice, forgetting a repeat, mixing up the tens. Spotting why an option is wrong is as useful as finding the right one.',
            'In class we spend time on the wrong options on purpose, so that children learn to check rather than guess.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Eight weeks',
      h2: 'An eight-week plan before a spring contest',
      lede: 'Our plan for a child preparing for a Kangaroo contest in the spring, counted back from the date their own host centre confirms. It assumes two live classes a week; it is ours, not the organizer\'s.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 and 2: drawing.</b> The four drawing moves, one problem at a time, with no clock. The goal is a picture for every problem, even easy ones.',
          '<b>Weeks 3 and 4: the grade\'s own math.</b> Any gap in the child\'s school math for their grade, found in week 1, gets fixed here, because the contest problems are aligned with provincial curricula.',
          '<b>Weeks 5 and 6: the clock.</b> Half-length papers of our own problems, timed with our three-part time plan, so the easy first third is done quickly.',
          '<b>Week 7: a full rehearsal.</b> One full-length timed paper of our problems for the child\'s version, then every wrong answer reviewed by redrawing it.',
          '<b>Week 8: rest and confidence.</b> Short, enjoyable sessions only, and nothing new in the last few days. A relaxed child reads more carefully.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 1 and 2', p: 'Shorter sessions, more drawing, a parent nearby. The 45-minute paper is long for a six-year-old, so we build stamina gently.' },
          { h3: 'Grades 3 to 8', p: 'The full plan. These versions reward careful reading most, and the drawing habit pays off quickly.' },
          { h3: 'Grades 9 to 12', p: 'Less drawing practice, more algebra and counting, and links to the CEMC and COMC contests the same students often write.' }
        ] }
      ]
    },
    {
      id: 'register', tint: 'deep', eyebrow: 'Getting started',
      h2: 'How a family in Canada gets a child into the contest',
      lede: 'Based on what the host-centre page says, the steps for a family look like this. Confirm each one with the organizer, since we cannot read the national site\'s current instructions.',
      body: [
        { kind: 'ol', items: [
          '<b>Find the organizer.</b> The Canadian Math Kangaroo Contest is listed by the international association as Canada\'s organizer, at mathkangaroo.ca.',
          '<b>Find your nearest host centre.</b> The contest is held in more than 50 Canadian cities; the date and venue are those of your centre.',
          '<b>Register.</b> The host-centre page says parents or teachers can register students, using the 2027 registration form on the national site.',
          '<b>Check the version.</b> Make sure your child is entered for their own pair of grades: 1 and 2, 3 and 4, 5 and 6, 7 and 8, 9 and 10, or 11 and 12.',
          '<b>Prepare without pressure.</b> The organizer\'s stated purpose is to introduce children to math challenges "in a fun and enjoyable way". Preparation should feel the same.'
        ] },
        { kind: 'p', mt: true, html: 'We are a teaching company. We do not run a host centre, register students or supervise the contest, and we have no link with the Canadian Math Kangaroo Contest. What we offer is the teaching: live classes where children learn to think through unfamiliar problems, which is what this contest, like every good contest, actually tests.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where children start',
    h2: 'Four stages of a young problem solver',
    lede: 'Our stages, used in the first class to place a child.',
    table: { caption: 'From quick guesser to careful thinker (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Quick guesser', 'Answers fast, often with the wrong numbers from the story'],
      ['2. Drawer', 'Draws the problem when asked and gets more right'],
      ['3. Checker', 'Draws without being asked and checks answers against the picture'],
      ['4. Explorer', 'Tries the hard last-third problems and explains an approach even when unsure']
    ] },
    left: { h3: 'For parents', ps: [
      'Most bright young children start at stage 1, because quick answers are praised at school. Moving to stage 3 takes a few months of patient practice and is worth far more than any contest result.',
      'Math Kangaroo is a good first contest because it is meant to be enjoyable. Keep it that way at home.'
    ] },
    right: { h3: 'For children', ps: [
      'Draw it before you work it out.',
      'If two answers look right, check them both against your drawing.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine courses for young mathematicians in Canada',
    lede: 'All live and online, with a teacher who gets to know the child, in a batch of fifteen to twenty or one to one, from any province.',
    bands: [
      { num: 'I', h3: 'Grades 1 to 4', sub: 'The first versions', courses: [
        { code: 'MKCP / YOUNG / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Playful, hands-on math for the youngest.' },
        { code: 'MKCP / YOUNG / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Number sense rather than tricks.' },
        { code: 'MKCP / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic and patterns through simple games.' }
      ] },
      { num: 'II', h3: 'Grades 5 to 8', sub: 'The middle versions', courses: [
        { code: 'MKCP / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, geometry and early algebra in depth.' },
        { code: 'MKCP / MID / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'The Gauss Contest from Grade 7.' },
        { code: 'MKCP / MID / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python used to explore patterns.' }
      ] },
      { num: 'III', h3: 'Grades 9 to 12', sub: 'The senior versions', courses: [
        { code: 'MKCP / SEN / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus, Grades 9 to 12.' },
        { code: 'MKCP / SEN / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'For students moving on to olympiads.' },
        { code: 'MKCP / SEN / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance in depth.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Kangaroo classes for children across Canada',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school classes, set in Eastern time and shown on your own clock.' },
      { time: 'Weekends', l: 'Morning sessions that suit younger children best.' },
      { time: '1-on-1', l: 'A private plan for a child who needs a gentler pace.' }
    ],
    cells: [
      { h3: 'Drawing first', p: 'Every problem starts with a picture.' },
      { h3: 'Our own problems', p: 'Original sets for each grade version.' },
      { h3: 'Short sessions', p: 'Sized for young attention spans.' },
      { h3: 'Wrong answers used', p: 'Each wrong option discussed, not skipped.' },
      { h3: 'Any province', p: 'The same class from Newfoundland to British Columbia.' },
      { h3: 'Class size', p: 'Groups of fifteen to twenty, or one teacher for one child.' }
    ]
  },

  projectsH2: 'What our young students make in code',
  projectsLede: 'Many of our younger math students also take a coding class. Some of what they have made is shown below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' reviews from Google, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Any contest fee is paid to the organizer or host centre, not to us. Our monthly fee covers live teaching only, and you can stop after the contest with nothing more to pay.',
    free: ['A free first class', 'Two of our problems, drawn and solved together', 'No card needed'],
    group: ['A batch of fifteen to twenty', 'Grouped by grade version', 'Choose your batch', 'Monthly, cancel any time'],
    one: ['One teacher, one child', 'Paced to your host centre\'s date', 'Built around your child\'s drawings']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Math Kangaroo Canada: frequently asked questions',
    items: [
      { q: 'What is Math Kangaroo Canada?', a: 'It is the Canadian edition of the international Kangaroo math contest, run by the Canadian Math Kangaroo Contest, a volunteer-run, not-for-profit organization. It is a multiple-choice contest for Grades 1 to 12, held yearly in more than 50 Canadian cities.' },
      { q: 'When is Math Kangaroo Canada in 2027?', a: 'We could not read a national 2027 date from the organizer on 22 October 2026. One host centre, in the Fraser Valley, lists Sunday, March 21, 2027. Check the date with your own nearest centre.' },
      { q: 'How long is the contest?', a: 'According to a host-centre page, Grades 1 and 2 answer 18 questions in 45 minutes, Grades 3 and 4 answer 24 in 60 minutes, and Grades 5 to 12 answer 30 in 75 minutes. Questions get harder as the paper goes on.' },
      { q: 'Which version should my child write?', a: 'The one for their own grade. There are versions for Grades 1 and 2, 3 and 4, 5 and 6, 7 and 8, 9 and 10, and 11 and 12.' },
      { q: 'Can I register my child myself?', a: 'Yes. The host-centre page says parents or teachers can register students, using the registration form on the national site. That is different from CEMC contests, which only schools can order.' },
      { q: 'How is Math Kangaroo scored in Canada?', a: 'We could not find the Canadian scoring rules on any page we could read, so we do not describe them. Rules can differ between countries, because each national organizer runs its own contest.' },
      { q: 'Is Math Kangaroo Canada the same as Math Kangaroo USA?', a: 'They belong to the same international family, but the international association says each country organizes its own competition. Dates, fees and rules can differ, so take Canadian details from the Canadian organizer.' },
      { q: 'What kind of math is on the paper?', a: 'A host-centre page says the problems align with provincial curricula but require creativity, logical thinking or a different perspective. In our experience that means careful reading and picturing a problem matter as much as arithmetic.' },
      { q: 'Do you guarantee a result?', a: 'No. We teach children to think through problems, and we make no promise of any score, rank or award.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in your own province\'s time zone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages',
    lede: 'Other pages for families in Canada looking at math contests and classes.',
    items: [
      { href: '/gauss-contest-preparation', label: 'Gauss Contest', p: 'CEMC\'s contest for Grades 7 and 8.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The University of Waterloo contest year.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions (US page)', p: 'Written for American families, but the contest habits carry over.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA (US page)', p: 'The separate American edition, for families in the United States.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math help across the provinces.' },
      { href: '/maths-olympiad-classes-online', label: 'Olympiad classes', p: 'For older students moving beyond Kangaroo.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Where our Canada pages start.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Pictures and reasons before answers.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child solves two of our Kangaroo-style problems with a teacher, drawing each one first. You see how your child reads a problem, which of the four stages fits, and how the weeks before your host centre\'s date could be spent.',
    readFirst: 'Would you like to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a real class, and the <a class="ag-inline-link" href="/courses">course list</a> describes every course.',
    note: 'Our teachers teach from India, live on video, so children join from home in any province. WhatsApp is the quickest way to ask a question.',
    formNote: 'The first class is free. No card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Math contests', links: [
        { href: '/gauss-contest-preparation', label: 'Gauss Contest' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/pascal-contest-preparation', label: 'Pascal Contest' },
        { href: '/maths-olympiad-classes-online', label: 'Olympiad classes' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Draw it before you work it out'
  },

  personalityCss: `
.ag-root.ag-mkcp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mkcp .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-mkcp .ag-section-head h2 { max-width: 38ch; }
.ag-root.ag-mkcp .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-mkcp .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-mkcp .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'University of the Fraser Valley Canadian Math Kangaroo host-centre page and Kangourou sans Frontieres home, countries and history pages, read raw on 22 October 2026: nationally ranked multiple-choice contest; Grades 1 to 12; held yearly in more than 50 Canadian cities; aligned with provincial curricula but requiring creativity, logical thinking or a different perspective; six grade versions; 18 questions in 45 minutes, 24 in 60, 30 in 75, in increasing difficulty; Fraser Valley centre date Sunday, March 21, 2027; parents or teachers can register; the CMKC is volunteer-run and not-for-profit, administered by mathematicians and teachers; AKSF founded in France, designs the annual competition, questions not standard textbook problems, each country organizes its own; Canada listed as a member; first challenge on 15 May 1991; about 6 million participants in the 2010s. mathkangaroo.ca tried once and found JavaScript-only, so nothing is taken from it. CEMC school-only entry from facts-schools-contests.md rows 112 and 113; COMC teacher registration and Open Writing Centres from the CMS student FAQ.',
    localProject: 'Eight original multiple-choice problems written by us across the six grade versions, checked in Python (stickers 9, Wednesday plus 100 days is Friday, a line of 15, digit sum 73, a 6 by 4 diagonal through 8 squares worked by drawing, a club overlap of 8, a square of area 50 inside a circle, 10080 arrangements of KANGAROO); the minutes-per-question arithmetic (2.5 for every version) and a three-part time plan per format; four drawing moves; an eight-week plan; a verified versus unverified table for 2027. Lesson family: draw it first.',
    requiredMentions: ['Math Kangaroo Canada is nationally ranked multiple choice contest', 'The competition is held yearly in more than 50 Canadian cities', 'Parents or teachers can register students in the contest', 'The Fraser Valley Contest will take place on Sunday, March 21, 2027', 'every version gives an average of two and a half minutes a question', 'Verified for that one centre only', 'Kangaroo, CEMC and COMC: who can enter a child', 'Our four drawing moves for young problem solvers', 'In how many different orders can the eight letters of the word KANGAROO be arranged', 'Draw it before you work it out'],
    sources: [
      { claim: 'Description, purpose, more than 50 cities, curriculum alignment, six versions, the three formats, the Fraser Valley 2027 date, parents or teachers register, the CMKC as volunteer-run and not-for-profit.', url: 'https://www.ufv.ca/math/contests/canadian-math-kangaroo/' },
      { claim: 'Kangourou sans Frontieres founded in France, designs the annual competition, questions not standard textbook problems, each country organizes its own.', url: 'https://www.aksf.org/' },
      { claim: 'Canada listed as a member with the Canadian Math Kangaroo Contest.', url: 'https://www.aksf.org/countries.xhtml' },
      { claim: 'First Kangaroo challenge on 15 May 1991; about 6 million participants in the 2010s.', url: 'https://www.aksf.org/history.xhtml' },
      { claim: 'CEMC contests entered only through schools.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'COMC registered by teachers, with Open Writing Centres for students whose school does not take part.', url: 'https://cms.math.ca/competitions/comc/comc2026/faq/students/' }
    ],
    rejectedClaims: [
      'A national 2027 Math Kangaroo Canada date: not readable at the source, so only the Fraser Valley centre date is given, labelled as that centre\'s.',
      'Fees: the host-centre page shows 2026 fees and deadlines, so no fee is printed.',
      'Scoring rules from Math Kangaroo USA or the international association: not imported, because no Canadian scoring rule was verified.',
      'Any past Math Kangaroo problem: never reproduced or adapted; all eight problems are ours.',
      'The question-family, three-pass and hop examples on the Math Kangaroo USA page: not reused.',
      'National results, rankings or participation numbers for Canada: not verified, so not stated.',
      'Names of the national representative and of individuals in the international history: not reproduced.',
      'That our classes raise scores, ranks or awards: refused.',
      'Any affiliation with the Canadian Math Kangaroo Contest or a host centre: none, and the page says so.'
    ]
  }
};
