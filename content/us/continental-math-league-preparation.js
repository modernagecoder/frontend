'use strict';
// Continental Mathematics League preparation (ag- competition door; UK and US exams cluster Phase 2, row US068). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. continentalmathematicsleague.com over https failed (curl
// exit 35); its http address redirects to cmleague.com, the League's own site, which was read raw with curl on 31
// October 2026. Copies in keyword-research-2026-09/uk-us-gap/src/continental-math-league-preparation/:
//  - cmleague.com/about: "We are beginning our 46th year! In 1980 we offered the Continental Mathematics League to our
//    nation's public and private schools."; first math book in 1990.
//  - The Continental Mathematics League category description (the /product-category/cml/ page, text read through the
//    site's own public store API, cml-category.txt): invitation "for the 2026-2027 school year"; grades 2 and 3: "3
//    Meets", "6 Questions per Meet", "30 minutes per meet", meet dates 1/7, 2/4, 3/4; grades 4 to 9 in the Pythagorean
//    or Euclidean Division: "5 Meets", 6 questions, 30 minutes, dates 11/5, 12/3, 1/7, 2/4, 3/4; Calculus League: 4
//    meets of 8 questions, 40 minutes, 12/3, 2/4, 3/4, 4/8, "Calculators approved by ETS may be used."; each team
//    "receives 5 certificates and 2 medals"; national and regional awards; results cut-off dates (grades 4 to 9: 11/30,
//    1/4, 2/1, 3/1, 3/22; grades 2 and 3: 2/1, 3/1, 3/22); Pythagorean "above-average reading comprehension and
//    analytical reasoning", Euclidean "average"; "no individual student may participate in both divisions"; "Except for
//    the Calculus League, paper and pencil are to be used to solve the questions."; "There is NO restriction as to how
//    many students may participate"; "The top 6 scores on the sheet will be the team's score"; "CML anticipates that
//    each student will participate at or above his/her present grade level."; "both 5th and 6th graders may
//    participate at the 6th grade level"; step-by-step solutions; "These are Contests only to be ordered by Schools-
//    parents looking for practice materials should go to the 'books' tab."
//  - cmleague.com/faq: team score "top 6 student scores in math"; student names can change from meet to meet;
//    cumulative score; Euclidean and Pythagorean for grades 4 to 9; "A team cannot participate in both"; meets "should
//    be given as close to the scheduled dates as possible"; late results; sample tests for every grade; "Home School"
//    route for a student whose school does not participate; Best of CML books may be ordered by parents; 504/IEP
//    accommodations; Terms: no derivative works "(such as study guides or practice worksheets) using active test
//    questions".
// Dates: the year for each meet is our reading of "2026-2027" (November and December in 2026, the rest in 2027); every
// meet date then falls on a Thursday and every cut-off on a Monday (checked in Python). Prices and fees not used.
// Our own material, labelled: 5 minutes per question (30 / 6), 30 questions a season for grades 4 to 9 (5 x 6), the
// team-score example, three worked examples (the read-restate-solve method: 15 apples; 40 minutes; 11 and 13), ten
// practice problems for grades 4 to 6 with answers checked in Python, the season plan. Lesson family: reading
// comprehension inside word problems, the skill that separates the two divisions.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'competition', tag: 'COMPETITION', blurb: 'The Continental Mathematics League for grades 2 to 9: six-question meets in 30 minutes, the Euclidean and Pythagorean divisions, 2026 to 2027 dates and reading-first practice.' },
  slug: 'continental-math-league-preparation',
  code: 'clp',
  accent: '#5A6B2D',
  accentRationale: 'Continental Math League preparation: a moss green #5A6B2D from the US allocation table, about 5.9:1 on paper #FBF8F2, an earthier tone than the MOEMS forest green',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Continental Math League preparation',
  title: 'Continental Math League Practice Problems and Prep, Grades 2 to 9',
  description: 'Continental Math League prep for grades 2 to 9: six questions in 30 minutes per meet, Euclidean or Pythagorean, the 2026 to 2027 dates and reading-first practice.',
  ogDescription: 'The Continental Mathematics League sets six-question meets in 30 minutes for grades 2 to 9. How the two divisions differ, the 2026 to 2027 meet dates, team scoring and original practice.',
  twitterDescription: 'Continental Math League prep, from the League\'s own pages.',
  pageName: 'Continental Math League Preparation',
  webPageDescription: 'A guide for students, parents and teachers to the Continental Mathematics League in 2026 to 2027, from cmleague.com: meets, divisions, dates, team scores and practice materials, with a reading-first method and original practice problems.',
  courseDescription: 'Live online math classes for students in grades 2 to 9 taking part in the Continental Mathematics League, in a batch of 15 to 20 or one to one, focused on reading word problems closely and reasoning through them.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Continental Math League preparation',
  navLinks: [
    { href: '#meets', label: 'Meets' },
    { href: '#divisions', label: 'Divisions' },
    { href: '#dates', label: 'Dates' },
    { href: '#reading', label: 'Reading first' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Grades 2 to 9 &middot; Euclidean and Pythagorean &middot; The 2026 to 2027 season',
  h1: 'Continental Math League practice and preparation',
  lede: 'The League&rsquo;s own history begins: "In 1980 we offered the Continental Mathematics League" to the nation&rsquo;s public and private schools. Students in grades 4 to 9 sit five meets a year, each with six questions in 30 minutes, in one of two divisions defined by how much reading comprehension the questions demand. That makes CML a little different from other contests: careful reading counts as much as arithmetic. This page sets out the 2026 to 2027 League from the League&rsquo;s own site as it read on 31 October 2026, then sets out the read, restate and solve routine our teachers use, worked through on three examples and a ten-problem set we invented.',
  secondaryCta: { href: '#reading', label: 'The reading-first method' },
  wa: 'Hello Modern Age Coders, my child takes part in the Continental Math League at school. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Organiser', 'Continental Mathematics League'],
    ['Running since', '1980'],
    ['Grades 2 and 3', '3 meets of 6 questions'],
    ['Grades 4 to 9', '5 meets of 6 questions'],
    ['Each meet', '30 minutes'],
    ['Divisions', 'Euclidean or Pythagorean, grades 4 to 9'],
    ['Team score', 'Top 6 scores'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Continental Mathematics League (CML) runs school math meets for grades 2 to 9, plus a Calculus League. Grades 4 to 9 sit five meets of six questions in 30 minutes, in the Euclidean or the harder-reading Pythagorean division; schools proctor and grade them. Modern Age Coders teaches CML-style problem solving live online as group batch or 1-on-1 lessons in our Elementary Mathematics course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for Continental Math League students',
    lede: 'Elementary math for grades 2 to 5, then problem solving, then middle school math for grades 6 to 9.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'CLP / 01', title: 'Elementary math', note: 'Grades 1 to 5. Number sense and careful word-problem reading.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CLP / 02', title: 'Problem solving for kids', note: 'Logic and analytical reasoning in small steps.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CLP / 03', title: 'Middle school mathematics', note: 'Grades 6 to 8, for the upper CML levels.' }
    ]
  },

  sections: [
    {
      id: 'meets', tint: 'tint', eyebrow: 'How it works',
      h2: 'What is the Continental Math League and how do meets work?',
      lede: 'CML is a league of short meets held at school. Students in grades 2 and 3 sit three meets, students in grades 4 to 9 sit five, and each meet has six questions with a 30 minute limit. A separate Calculus League has four meets of eight questions in 40 minutes.',
      body: [
        { kind: 'table', caption: 'The Continental Mathematics League for 2026 to 2027 (cmleague.com League description and FAQ, read 31 October 2026)', head: ['Level', 'Meets', 'Questions per meet', 'Time per meet'], rows: [
          ['Grades 2 and 3', '3', '6', '30 minutes'],
          ['Grades 4 to 9, Euclidean or Pythagorean', '5', '6', '30 minutes'],
          ['Calculus League', '4', '8', '40 minutes']
        ] },
        { kind: 'table', mt: true, caption: 'Meet and contest rules (cmleague.com, read 31 October 2026)', head: ['Rule', 'What the League says'], rows: [
          ['Tools', '"Except for the Calculus League, paper and pencil are to be used to solve the questions." Calculus may use calculators approved by ETS'],
          ['Who sits', 'No restriction on how many students take part'],
          ['Working', 'Each student works independently within the time limit'],
          ['Running it', 'The school proctors and grades each meet with answer keys and step-by-step solutions from CML'],
          ['Team score', 'The top 6 scores at each meet'],
          ['Changing names', 'Different students can be listed from meet to meet; cumulative scores add up across meets'],
          ['Grade level', 'Students take part at or above their present grade level'],
          ['Dates', 'Held on the scheduled day or as close to it as possible']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Five minutes a question',
          left: [
            'Six questions in 30 minutes is 5 minutes each, by our arithmetic, which is more time per question than most contests give. The League&rsquo;s design leaves room to read slowly, and its questions call on reading comprehension, so that time is meant to be used.',
            'For grades 4 to 9, five meets of six questions make 30 questions across the season, again our arithmetic. Each one is worth reviewing.'
          ],
          rightH3: 'A team of anyone',
          right: [
            'Because any number of students can sit and only the top 6 scores count, a school can let a whole class try a meet without harming the team. The FAQ gives a grade 5 example where the six names listed can change at every meet.',
            'For a student, that means CML is low stakes: a chance to try hard problems in class time, not a test that decides anything.'
          ] },
        { kind: 'source', html: 'Sources: Continental Mathematics League <a class="ag-inline-link" href="https://www.cmleague.com/product-category/cml/" rel="noopener" target="_blank">League page</a>, <a class="ag-inline-link" href="https://www.cmleague.com/faq/" rel="noopener" target="_blank">FAQ</a> and <a class="ag-inline-link" href="https://www.cmleague.com/about/" rel="noopener" target="_blank">About</a>, read 31 October 2026. Modern Age Coders is not connected with the Continental Mathematics League.' }
      ]
    },
    {
      id: 'divisions', tint: 'deep', eyebrow: 'Two divisions',
      h2: 'What is the difference between the Euclidean and Pythagorean divisions?',
      lede: 'Both divisions serve grades 4 to 9 and expect grade-level computation. The difference is reading: Euclidean students need average reading comprehension and analytical reasoning, while Pythagorean students need, in the League&rsquo;s words, "above-average reading comprehension and analytical reasoning".',
      body: [
        { kind: 'table', caption: 'The two CML divisions (cmleague.com League description and FAQ, read 31 October 2026)', head: ['', 'Euclidean Division', 'Pythagorean Division'], rows: [
          ['Grades', '4 to 9', '4 to 9'],
          ['Reading comprehension', 'Average', 'Above average'],
          ['Analytical reasoning', 'Average', 'Above average'],
          ['Computation', 'Appropriate to grade level', 'Appropriate to grade level'],
          ['Entry', 'A team enters one division only', 'A team enters one division only'],
          ['Students', 'No student in both divisions', 'No student in both divisions']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which suits my child?',
          left: [
            'The League&rsquo;s own words point to a test: how does your child handle long, wordy problems? A strong calculator of numbers who rushes through text may score better in Euclidean, while a careful reader who enjoys puzzles fits Pythagorean.',
            'Schools decide team entry, and the FAQ notes that many schools enter one team in each division, in the same or a different grade.'
          ],
          rightH3: 'Moving up a level',
          right: [
            'CML says it anticipates each student will participate at or above their present grade level, and gives the example that "both 5th and 6th graders may participate at the 6th grade level."',
            'So a strong grade 5 student might sit the grade 6 meets. Ask the teacher who runs your school&rsquo;s team which level and division your child is on before practicing.'
          ] },
        { kind: 'source', html: 'Source: Continental Mathematics League <a class="ag-inline-link" href="https://www.cmleague.com/faq/" rel="noopener" target="_blank">FAQ</a> and League page, read 31 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'The calendar',
      h2: 'When are the Continental Math League meets in 2026 to 2027?',
      lede: 'For grades 4 to 9 the five meets fall on November 5 and December 3, 2026, then January 7, February 4 and March 4, 2027. Grades 2 and 3 join from January. The League lists the dates as month and day for the 2026 to 2027 year, and each falls on a Thursday.',
      body: [
        { kind: 'table', caption: 'CML meet dates and results cut-off dates for 2026 to 2027 (cmleague.com League page, read 31 October 2026; years and weekdays added by us)', head: ['Meet', 'Grades 4 to 9', 'Grades 2 and 3', 'Calculus League', 'Cut-off, grades 4 to 9'], rows: [
          ['1', 'Thursday, November 5, 2026', 'No meet', 'No meet', 'Monday, November 30, 2026'],
          ['2', 'Thursday, December 3, 2026', 'No meet', 'Thursday, December 3, 2026', 'Monday, January 4, 2027'],
          ['3', 'Thursday, January 7, 2027', 'Thursday, January 7, 2027', 'No meet', 'Monday, February 1, 2027'],
          ['4', 'Thursday, February 4, 2027', 'Thursday, February 4, 2027', 'Thursday, February 4, 2027', 'Monday, March 1, 2027'],
          ['5', 'Thursday, March 4, 2027', 'Thursday, March 4, 2027', 'Thursday, March 4, 2027', 'Monday, March 22, 2027'],
          ['Extra', '', '', 'Thursday, April 8, 2027', '']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the cut-off dates mean',
          left: [
            'The cut-off is the date by which a school must enter scores to appear on that meet&rsquo;s results report. The League says late scores should still be entered so cumulative totals stay correct for future meets.',
            'Grades 2 and 3 have cut-offs of February 1, March 1 and March 22, 2027, by our year reading.'
          ],
          rightH3: 'Close to the date',
          right: [
            'Meets do not have to be given on the exact day, the FAQ says, but should be as close to the scheduled date as possible. So a child might sit Meet 1 a day or two either side of November 5.',
            'Ask the team&rsquo;s teacher for the actual days and plan practice for the week before each one.'
          ] },
        { kind: 'source', html: 'Source: Continental Mathematics League <a class="ag-inline-link" href="https://www.cmleague.com/product-category/cml/" rel="noopener" target="_blank">League page</a>, read 31 October 2026. The League prints month and day only; we added the years from its 2026 to 2027 season label and checked the weekdays.' }
      ]
    },
    {
      id: 'materials', tint: 'deep', eyebrow: 'Practice materials',
      h2: 'Where can you find Continental Math League practice problems?',
      lede: 'CML posts a sample test for every grade of every contest on its site, and sells Best of CML books of past problems with solutions, which parents may order. The meets themselves are for schools only.',
      body: [
        { kind: 'table', caption: 'Official CML practice routes (cmleague.com FAQ, League page and Books page, read 31 October 2026)', head: ['Resource', 'Open to'], rows: [
          ['Sample test for each grade', 'Anyone, downloaded from the League page'],
          ['The League&rsquo;s books of past problems', 'Parents and schools can order them'],
          ['The five meets and their solutions', 'Schools that have joined the League'],
          ['Home School entry', 'A student whose school does not take part, registered with the League']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Respecting the League&rsquo;s rules',
          left: [
            'The League&rsquo;s terms say schools and teachers "shall not copy, modify, adapt, reproduce, or create derivative works (such as study guides or practice worksheets) using active test questions." We follow that strictly: no CML question appears on this page or in our classes.',
            'Our teachers invent fresh problems that read the same way, wordy and multi-step, and point families to the official sample tests and books.'
          ],
          rightH3: 'No team at your child&rsquo;s school?',
          right: [
            'The FAQ explains that a Home School entry "does not necessarily mean a student is schooled at home": it is simply a student who wants to take part when their school does not. The family registers an account and emails the League to arrange it.',
            'A student cannot be on a school team and a Home School team at the same time.'
          ] },
        { kind: 'source', html: 'Source: Continental Mathematics League <a class="ag-inline-link" href="https://www.cmleague.com/faq/" rel="noopener" target="_blank">FAQ and Terms</a>, read 31 October 2026. Prices are on the League&rsquo;s site and not repeated here.' }
      ]
    },
    {
      id: 'reading', tint: 'tint', eyebrow: 'Reading first',
      h2: 'How should a student read a CML word problem?',
      lede: 'Since reading comprehension is built into the divisions, our method starts with the words: read, restate in your own words, then solve, then answer the exact question asked. The method and its steps are ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Read once for the story.</b> Who is doing what? Do not touch the numbers yet.',
          '<b>Read again for the question.</b> Underline what is being asked: how many, how much more, which day, what fraction.',
          '<b>Restate it in one sentence of your own.</b> "There are some apples; a third were eaten and 10 are left; find the start." If you cannot restate it, read again.',
          '<b>Solve with a picture or a short list.</b> Bars, a table or a number line, whichever fits.',
          '<b>Answer the underlined question.</b> Check units and whether the answer is a sensible size for the story.'
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 1 (ours, grade 4): what is really asked.</b> A basket held some apples. Lucy ate 2 and gave away 3. Then she bought twice as many as she had left, and now has 30. How many apples were in the basket at first? Restate: "after eating and giving away, some number remained; that number tripled to 30." Buying twice as many as she had means she now has three times as many, so before buying she had 10. Add back the 5 she ate or gave away: 15 at first. The phrase "twice as many as she had left" is where readers go wrong, treating 30 as only double.' },
        { kind: 'p', html: '<b>Worked example 2 (ours, grade 5): time, read carefully.</b> A movie started at 6:45 pm and ended 1 hour 55 minutes later. Sam left 30 minutes before the end. How long did Sam watch? Restate: "the movie lasted 115 minutes; Sam missed the last 30." So Sam watched 85 minutes, or 1 hour 25 minutes. The clock times are a distraction; the question never asks when anything ended. Readers who compute 8:40 pm first have done extra work that may hide a slip.' },
        { kind: 'p', html: '<b>Worked example 3 (ours, grade 6): two conditions.</b> I am thinking of two consecutive odd numbers. Their product is 143. What is their sum? Restate: "two odd numbers in a row multiply to 143; add them." 143 is close to 12 x 12 = 144, so try the odd numbers on either side of 12: 11 x 13 = 143. The sum is 24. Estimating with a square nearby is the key move, and it only appears once the student has restated the two conditions.' },
        { kind: 'two', mt: true,
          leftH3: 'Why restating works',
          left: [
            'Most lost points in reading-heavy contests come from solving a different problem from the one asked. Restating in one sentence forces the student to decide what the problem is before spending any time on numbers.',
            'Five minutes a question is enough time to do this properly. Students who skip it to save time usually lose more than they save.'
          ],
          rightH3: 'From Euclidean to Pythagorean',
          right: [
            'A student moving to the Pythagorean division meets longer sentences and more conditions. The method does not change; the restatement just gets more careful.',
            'We practice by giving the same math in a short and a long wording, so students learn that the words, not the numbers, set the difficulty.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Ten original practice problems for CML students in grades 4 to 6',
      lede: 'Written by our teachers, reading-heavy on purpose. They are not CML questions and not drawn from any CML sample or book. Try six in 30 minutes.',
      body: [
        { kind: 'ol', items: [
          '<b>Nora has 3 times as many stamps as Ivan. If Nora gives Ivan 10 stamps, they have the same number. How many stamps does Ivan have now, before the gift?</b>',
          '<b>A train leaves at 9:50 am and arrives at 1:15 pm. How many minutes is the trip?</b>',
          '<b>The product of my two digits is 12 and I am a two-digit number greater than 50. What number am I?</b>',
          '<b>A class of 28 students voted. Twice as many voted for soccer as for chess, and the rest, 7 students, voted for art. How many voted for soccer?</b>',
          '<b>A square and an equilateral triangle each have a perimeter of 24 inches. How much longer is a side of the triangle than a side of the square?</b>',
          '<b>Pencils cost 3 for 1 dollar. How many dollars do 18 pencils cost?</b>',
          '<b>What is the smallest number that can be divided evenly by 4, 6 and 10?</b>',
          '<b>A book has 120 pages. Mei read one third of it on Monday and one quarter of the rest on Tuesday. How many pages are left?</b>',
          '<b>Every day a plant doubles in height. On day 10 it is 64 cm tall. On which day was it 8 cm tall?</b>',
          '<b>How many minutes are in one fifth of a day?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answer key with the restated question (ours; checked in Python)', head: ['No.', 'Answer', 'Restated, then solved'], rows: [
          ['1', '10', 'The difference is 20 and is 2 of Ivan&rsquo;s units, so Ivan has 10 and Nora 30'],
          ['2', '205 minutes', '9:50 to 12:50 is 180, then 25 more'],
          ['3', '62', 'Digit pairs with product 12: 26, 34, 43, 62; only 62 is above 50'],
          ['4', '14', '21 voted soccer or chess, in 3 units of 7; soccer is 2 units'],
          ['5', '2 inches', 'Triangle sides 8, square sides 6'],
          ['6', '6 dollars', 'Six groups of 3'],
          ['7', '60', 'The least common multiple of 4, 6 and 10'],
          ['8', '60 pages', '40 read Monday, leaving 80; 20 read Tuesday'],
          ['9', 'Day 7', 'Halve back from day 10: 32, 16, 8'],
          ['10', '288 minutes', '1,440 minutes in a day, divided by 5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where readers slip',
          left: [
            'Problem 1 asks for Ivan&rsquo;s stamps before the gift; students who solve and then add 10 report 20. Problem 8 says "of the rest", not of the book, so a quarter of 80, not of 120.',
            'Problem 3 has two conditions. Students who stop at the first number with digit product 12 answer 26.'
          ],
          rightH3: 'Next, the official samples',
          right: [
            'When these feel steady, download the CML sample test for your child&rsquo;s grade and sit it in 30 minutes with paper and pencil.',
            'In class we group missed questions by the reading mistake behind them and set fresh problems of our own for each.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Season plan',
      h2: 'A CML season plan for grades 4 to 9',
      lede: 'How we would spread one weekly class across the gaps between the five meets (our plan).',
      body: [
        { kind: 'table', caption: 'Meet by meet (our plan)', head: ['Weeks before', 'Meet', 'Focus'], rows: [
          ['Now to November 4, 2026', 'Meet 1, November 5', 'Read, restate, solve; the official sample test'],
          ['November 2026', 'Meet 2, December 3', 'Multi-step stories; time and money'],
          ['December 2026', 'Meet 3, January 7, 2027', 'Fractions of the rest; ratios'],
          ['January 2027', 'Meet 4, February 4', 'Number puzzles with two conditions'],
          ['February 2027', 'Meet 5, March 4', 'Mixed sets of six in 30 minutes']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 2 and 3', p: 'Three meets from January; short stories, read aloud first.' },
          { h3: 'Grades 4 to 6', p: 'Five meets; restating becomes a habit.' },
          { h3: 'Grades 7 to 9', p: 'Longer conditions; algebra where it helps.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of a careful reader of math',
    lede: 'Our own description of growth through a CML season. It is not a League measure.',
    table: { caption: 'From quick reader to careful solver (our own four steps)', head: ['Step', 'Observed in class'], rows: [
      ['1. Slows down', 'Reads the whole problem before writing'],
      ['2. Restates', 'Says the question in their own words'],
      ['3. Organises', 'Uses a picture, list or table without prompting'],
      ['4. Answers exactly', 'Gives the quantity asked, in the right units']
    ] },
    left: { h3: 'For parents', ps: [
      'At home, ask your child to tell you a word problem as a story before solving it. It builds stage 2 quickly.',
      'Cumulative scores across five meets show growth better than any single meet.'
    ] },
    right: { h3: 'For students', ps: [
      'Underline the question. Then check, before you write the answer, that it answers the underlined words.',
      'You have five minutes a question. Spend one of them reading.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for League students',
    lede: 'Live online classes, one regular teacher, a group batch or private lessons.',
    bands: [
      { num: 'I', h3: 'Grades 2 to 5', sub: 'Elementary League levels', courses: [
        { code: 'CLP / ELM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Number sense, grades 1 to 5.' },
        { code: 'CLP / ELM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Thinking skills', blurb: 'Analytical puzzles.' },
        { code: 'CLP / ELM / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Young thinkers', blurb: 'Ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Grades 6 to 9', sub: 'Upper League levels', courses: [
        { code: 'CLP / UPR / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, geometry, pre-algebra.' },
        { code: 'CLP / UPR / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest strategies.' },
        { code: 'CLP / UPR / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For grades 7 to 9.' }
      ] },
      { num: 'III', h3: 'Beyond the League', sub: 'High school', courses: [
        { code: 'CLP / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Up to calculus.' },
        { code: 'CLP / HS / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'AMC and beyond.' },
        { code: 'CLP / HS / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python with numbers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live League classes around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, any US time zone.' },
      { time: 'Weekends', l: 'Unhurried reading practice.' },
      { time: '1-on-1', l: 'For one student&rsquo;s level and division.' }
    ],
    cells: [
      { h3: 'Read aloud', p: 'Students read problems to the teacher.' },
      { h3: 'Restate', p: 'One sentence before any numbers.' },
      { h3: 'Sets of six', p: 'Our own, 30 minutes, pencil only.' },
      { h3: 'Meet reviews', p: 'Past meets reviewed by idea, at home.' },
      { h3: 'Every state', p: 'Online, nationwide.' },
      { h3: 'Batch size', p: 'Up to 20 per batch, or solo.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Some League students later build math into programs; see the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews written by parents, as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Schools join the League directly with CML; our fee covers only the classes. We bill by the month, so classes can follow the five meets and stop in March.',
    free: ['A free first class', 'Two reading-first problems', 'No card required'],
    group: ['A batch of 15 to 20', 'One teacher each week', 'Choose your batch', 'Monthly fee'],
    one: ['A personal teacher', 'Matched to level and division', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Continental Math League: what families ask',
    items: [
      { q: 'What is the Continental Mathematics League?', a: 'It is a school math league that the organiser says began in 1980. Grades 2 and 3 sit three meets and grades 4 to 9 sit five, each with six questions in 30 minutes; there is also a Calculus League.' },
      { q: 'What is the difference between Euclidean and Pythagorean in CML?', a: 'Both divisions are for grades 4 to 9. The Euclidean division calls for average reading comprehension and analytical reasoning, the Pythagorean for above-average, and no student may be in both.' },
      { q: 'When are the Continental Math League meets in 2026 to 2027?', a: 'For grades 4 to 9 the League lists 11/5, 12/3, 1/7, 2/4 and 3/4 for the 2026 to 2027 year, which we read as November 5, 2026 to March 4, 2027. Grades 2 and 3 meet on 1/7, 2/4 and 3/4.' },
      { q: 'Can you use a calculator in the Continental Math League?', a: 'No, except in the Calculus League. The League says paper and pencil are used for all other meets, and calculators approved by ETS may be used for calculus.' },
      { q: 'How is a CML team score worked out?', a: 'The team score is the sum of the top 6 student scores at each meet. Any number of students can take part, and the names listed can change from meet to meet.' },
      { q: 'Where can I find Continental Math League practice problems?', a: 'The League posts a sample test for every grade on its site and sells books of past League problems with solutions, which parents may order. The meets themselves are for schools only.' },
      { q: 'Can my child join if the school does not take part?', a: 'Yes, through what the League calls a Home School entry, which simply means a student taking part when their school does not. Register an account and email the League to set it up.' },
      { q: 'Can a 5th grader sit the 6th grade meets?', a: 'Yes. CML says students take part at or above their present grade level and gives the example that 5th and 6th graders may both sit the 6th grade level.' },
      { q: 'What days and times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the Continental Mathematics League?', a: 'No. Modern Age Coders is an independent online school, not connected with the Continental Mathematics League. We never use its meet questions in class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More contests and grade-level help',
    lede: 'Other school contests, the full calendar, and help for each grade.',
    items: [
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Every contest date this year.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'MATHCOUNTS, Kangaroo and MOEMS.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'Another contest with reading-rich problems.' },
      { href: '/online-math-tutor-4th-grade', label: '4th grade math tutor', p: 'The first five-meet year.' },
      { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor', p: 'Ratios and the middle grades.' },
      { href: '/saxon-math-tutor', label: 'Saxon math tutor', p: 'Help alongside a word-problem-heavy curriculum.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know the grade, level and division your child is in. The teacher reads two of our problems with them, watches how they restate them, and tells you what to work on.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a sense of a lesson, or view <a class="ag-inline-link" href="/courses">the full catalogue</a>.',
    note: 'We teach live from India, with class times set around US school afternoons and weekends. WhatsApp usually brings the quickest answer.',
    formNote: 'Your first class is free, and we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'School contests', links: [
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutor' },
        { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Six questions, read twice'
  },

  personalityCss: `
.ag-root.ag-clp .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-clp .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-clp .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-clp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-clp .ag-steps li { line-height: 1.58; }
.ag-root.ag-clp .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Continental Mathematics League (cmleague.com, the destination of continentalmathematicsleague.com), read raw on 31 October 2026: About (46th year, begun in 1980), League page description for 2026 to 2027 (meets, questions, time limits, meet dates, awards, cut-off dates, divisions, paper and pencil, ETS calculators for calculus only, top 6 team score, grade level rule, schools-only ordering), FAQ (team, divisions, dates, late results, sample tests, Home School entry, books for parents, accommodations) and Terms (no derivative works from active test questions).',
    localProject: 'Our arithmetic of 5 minutes per question and 30 questions a season, the read-restate-solve method, three original worked examples (15 apples, 85 minutes watched, 11 x 13 = 143 with sum 24), ten original practice problems for grades 4 to 6 with answers checked in Python, a meet-by-meet plan. Lesson family: reading comprehension inside word problems.',
    requiredMentions: ['In 1980 we offered the Continental Mathematics League', 'above-average reading comprehension and analytical reasoning', 'Except for the Calculus League, paper and pencil are to be used to solve the questions.', 'both 5th and 6th graders may participate at the 6th grade level.', 'does not necessarily mean a student is schooled at home', 'shall not copy, modify, adapt, reproduce, or create derivative works (such as study guides or practice worksheets) using active test questions.', 'Thursday, November 5, 2026', 'Monday, March 22, 2027', '11 x 13 = 143', 'Digit pairs with product 12: 26, 34, 43, 62'],
    sources: [
      { claim: 'CML 2026 to 2027: meets, questions, time limits, meet and cut-off dates, divisions, tools, team score, grade level rule.', url: 'https://www.cmleague.com/product-category/cml/' },
      { claim: 'FAQ and terms: team rules, divisions, dates, sample tests, Home School entry, books, accommodations, derivative works.', url: 'https://www.cmleague.com/faq/' },
      { claim: 'History: begun in 1980, 46th year.', url: 'https://www.cmleague.com/about/' }
    ],
    rejectedClaims: [
      'continentalmathematicsleague.com over https: connection failed (curl exit 35) on 31 October 2026; not retried. Its http address redirects to cmleague.com, which was used.',
      'Team, Home School and book prices: not printed (no typed currency, never another provider\'s prices).',
      'Years for the month/day meet dates: the League prints none; years added by us from its 2026-2027 season label and labelled so.',
      'Any CML sample or meet question: not reproduced (League terms); all problems are ours.',
      'National and regional award criteria: the League mentions them without detail; nothing more printed.',
      'Any affiliation with the Continental Mathematics League: none, stated on the page.'
    ]
  }
};
