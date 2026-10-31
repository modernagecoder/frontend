'use strict';
// Math League contest preparation (ag- competition guide; UK and US exams cluster, row US067).
// Two different organizations publish contests under the name "Math League". Both were read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/math-league-contest-preparation/):
//  - The Math League, mathleague.com: formed in 1977; "we promote enjoyment and study of mathematics by organizing
//    contests for grades 4-12"; Official Contest Dates 2026-2027: High School registration deadline September 30, 2026,
//    HS Contest 1 October 20, 2026, 2 November 17, 2026, 3 December 15, 2026, 4 January 12, 2027, 5 February 9, 2027, 6
//    March 16, 2027, alternate dates one week later; 7th and 8th Grade deadline December 31, 2026, contest 3rd Tues. in
//    Feb. (February 16, 2027) or 4th Tues. in Feb. (February 23, 2027); the 6th Grade row prints its deadline as
//    "December 31, 2027" (apparently a typo; not repeated); 4th Grade, 5th Grade and Algebra Course 1 deadline January 31,
//    2027, contest "April 15th or later"; "Late registrations will be accepted". Calculators: the register page says "No
//    Calculators Allowed Beginning 2026-2027 School Year"; a later announcement dated 4 July 2026 says "we have decided
//    to allow students to use a calculator on the contests for this school year" (without a QWERTY keyboard) and "We
//    will implement the "no calculator" policy for the next school year." FAQ: high school "6 sets of 30 contest copies";
//    4th, 5th and Algebra Course 1 are "intramural contests"; "There is no minimum number of students required";
//    homeschool subscription package "sent to you in May for testing at home", or official participation through "an
//    accredited local school"; "A student may participate officially in only one of the contests for grades 6, 7, and
//    8". 2018-19 sample contest instructions (format only, no question reproduced): grade 4 and Algebra Course 1 "30
//    questions" in "30 minutes", grade 7 "35 questions in the 30 minutes allowed", multiple choice A to D, 1 point each,
//    "Unanswered questions get no credit", "there is no "passing" or "failing" score"; high school contest "Time Limit:
//    30 minutes", six questions numbered 5-1 to 5-6. Fees are printed in dollars and are not repeated.
//  - mathleague.org (Math League LLC): "runs more than 400 contests globally and reaches over 30,000 students each
//    year"; programs "for students in grades 3-12"; students keep questions and answer sheets, solutions given at the end;
//    eligibility grades 12 and below (HS), 8 and below (MS), 6 and below (ES); school year August 1 to July 31; grade
//    level on the last school day before April 1; one contest per release number, new release each month from October;
//    parents or outside coaches may be the contact if a school will not take part; membership "No payment is required";
//    HS state championships "held in April", US National High School Championship "in May", International "in July";
//    MS rounds: Sprint "40-minute round consisting of thirty questions", no calculators; Target "Four pairs of problems",
//    6 minutes per pair, SAT-approved calculator; Team "Four team members work together for 20 minutes to answer ten
//    questions"; Countdown head to head; individual score sprint + 2 x target, maximum 46; team maximum 66; "mathleague.org
//    is not affiliated in any way with MATHCOUNTS". HS rounds: Sprint "sixty minutes to complete 30 multiple choice
//    questions", "Four points will be awarded for each correct answer, with one point deducted for each incorrect
//    answer"; Target eight questions of 10 points in pairs, ten minutes per pair; Team ten questions in twenty minutes,
//    up to six; Power round proof-oriented, up to six, one hour, out of 100, championships only; Relay TNYWR, integers in
//    [0,99], 2, 3 and 5 points, three minutes, five relays; individual maximum 200 (120 sprint, 80 target). Northern and
//    Southern California treated as two states. ARML teams organized.
// Our own material, labelled on the page: seconds per question (30 minutes / 35 = about 51 seconds; 60 minutes / 30 =
// 120 seconds; 6 minutes per pair = 180 seconds), the expected value of a guess under +4/-1 scoring, (5 - k)/k with k
// options left, a three-question relay chain of our own (8, 54, 9), and eight practice problems with answers checked in
// Python. Lesson family: let the scoring rule decide the strategy.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'Two organizations share the name Math League. Their 2026-27 dates, rounds and scoring side by side, and when a guess helps or hurts.' },
  slug: 'math-league-contest-preparation',
  code: 'lcp',
  accent: '#686A35',
  accentRationale: 'Math League contest preparation: an olive #686A35 from the US allocation table, about 5.4:1 on #FBF8F2 and above 4.5:1 on every paper tint, apart from the brick red of the middle school competitions page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Math League contest preparation',
  title: 'Math League Contest Preparation: 2026-27 Dates and Rounds',
  description: 'Math League contest preparation for grades 3 to 12: mathleague.com and mathleague.org compared, 2026-27 dates, round formats, scoring and a guessing rule.',
  ogDescription: 'Two different organizations run contests called Math League. Which one your school uses changes the timing, the scoring and whether a guess costs points. Both, side by side.',
  twitterDescription: 'Math League contest preparation: mathleague.com and mathleague.org, dates, rounds and scoring.',
  pageName: 'Math League Contest Preparation',
  webPageDescription: 'A guide for US students, parents and coaches to the contests run by The Math League (mathleague.com) and by mathleague.org, from each organization\'s own pages, with pacing, scoring strategy and original practice problems.',
  courseDescription: 'Live online competition math classes for US students in grades 4 to 12 preparing for Math League contests, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Math League contest preparation',
  navLinks: [
    { href: '#which', label: 'Which Math League' },
    { href: '#dates', label: '2026-27 dates' },
    { href: '#rounds', label: 'Rounds' },
    { href: '#scoring', label: 'Guessing' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 3 to 12 &middot; The 2026-27 contest year',
  h1: 'Math League contest preparation',
  lede: 'Before preparing for "Math League", find out which one. The Math League at mathleague.com has mailed contests to schools since 1977: six high school contests a year and single grade-level contests from grade 4 up, taken in class on fixed days. mathleague.org is a separate organization that runs local qualifying contests, then state, national and international championships, for grades 3 to 12. The two differ in almost everything a student feels on the day: length, rounds, calculators and, in one high school round, whether a wrong answer costs points. This page sets out both from their own websites as of 31 October 2026, works out the time per question, shows when guessing pays, and ends with practice problems our teachers wrote.',
  secondaryCta: { href: '#which', label: 'Find out which Math League you have' },
  wa: 'Hello Modern Age Coders, my child has a Math League contest coming up in the US. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Facts from mathleague.com and mathleague.org only',
  spec: [
    ['mathleague.com', 'Grades 4 to 12, contests taken at school'],
    ['mathleague.org', 'Grades 3 to 12, local contests to championships'],
    ['First .com HS contest', 'October 20, 2026'],
    ['Last .com HS contest', 'March 16, 2027'],
    ['.com grades 7 and 8', 'February 16 or 23, 2027'],
    ['.org HS sprint', '30 questions, 60 minutes, +4 / -1'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Math League contests come from two unrelated organizations. The Math League (mathleague.com), formed in 1977, sends contests for grades 4 to 12 to schools: six high school contests from October 20, 2026 to March 16, 2027, and grade 7 and 8 contests on February 16 or 23, 2027. mathleague.org runs more than 400 local contests a year for grades 3 to 12 with state, national and international championships. Modern Age Coders teaches live online contest classes for both, in a batch of 15 to 20 or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for Math League students',
    lede: 'A middle school contest course first, then the high school depth and the algebra behind it.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'LCP / 01', title: 'Middle school math competitions', note: 'Roughly ages 10 to 14. Timed contest sets that match the grade 6 to 8 Math League papers.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'LCP / 02', title: 'Math olympiad and competitions', note: 'For high schoolers moving from Math League to the AMC and beyond.' },
      { course: 'algebra-foundations-masterclass', code: 'LCP / 03', title: 'Algebra foundations', note: 'Grades 7 to 9. The algebra under the Algebra Course 1 contest and most high school rounds.' }
    ]
  },

  sections: [
    {
      id: 'which', tint: 'tint', eyebrow: 'Two leagues, one name',
      h2: 'Is Math League the same as mathleague.org?',
      lede: 'No. The Math League (mathleague.com) and mathleague.org are separate organizations with different contests, calendars and rules. Ask the teacher or coach which website the school registered with; the answer decides everything below.',
      body: [
        { kind: 'table', caption: 'The two Math Leagues, from each organization\'s own pages (checked October 31, 2026)', head: ['', 'The Math League (mathleague.com)', 'mathleague.org'], rows: [
          ['Grades', '4 to 12', '3 to 12, plus an early childhood challenge listed as coming soon'],
          ['Started', 'Formed in 1977', 'Not stated on the pages read'],
          ['How it runs', 'Contests mailed to a school and taken in class on set days', 'Local qualifying contests at host sites, then championships'],
          ['High school', 'Six contests a year, October to March', 'Qualifying contests, state championships in April, US national in May, international in July'],
          ['Middle school', 'One contest each for grades 6, 7 and 8, plus Algebra Course 1', 'Qualifying contests leading to state and US national championships'],
          ['Elementary', 'Grade 4 and grade 5 contests, run in-school', 'Contests for grades 6 and below, up to district, state, national and international championships'],
          ['Size', 'Not stated on the pages read', 'More than 400 contests a year, over 30,000 students'],
          ['Homeschoolers', 'Unofficial package mailed in May, or official entry through a local school', 'Parents or outside coaches can act as the contact']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to tell which one',
          left: [
            'If a teacher hands out a short paper in class on a Tuesday in February, or once a month in high school math, it is almost certainly The Math League from mathleague.com. Its contests are posted to an advisor at the school, and the school reports scores back.',
            'If the family travels to a host site for a contest day with Sprint, Target and Team rounds, it is likely mathleague.org. Its qualifying results lead on to state and national championships.'
          ],
          rightH3: 'Why it matters for preparation',
          right: [
            'The papers are built differently. A mathleague.com grade 7 sample paper has 35 multiple-choice questions in 30 minutes. A mathleague.org middle school contest has a 40-minute sprint of thirty questions, a target round of four pairs and a team round, and a high schooler there may face a penalty for wrong answers.',
            'Some students do both, and they fit together: one runs on school days through the winter, the other on contest days that lead to spring championships.'
          ] },
        { kind: 'source', html: 'Sources: The Math League <a class="ag-inline-link" href="https://www.mathleague.com/index.php/about-the-math-league/statement-of-purpose" rel="noopener" target="_blank">statement of purpose</a> and <a class="ag-inline-link" href="https://www.mathleague.com/index.php/about-the-math-league/faq" rel="noopener" target="_blank">FAQ</a>; mathleague.org <a class="ag-inline-link" href="https://mathleague.org/about.php" rel="noopener" target="_blank">about page</a>, <a class="ag-inline-link" href="https://mathleague.org/" rel="noopener" target="_blank">home page</a> and <a class="ag-inline-link" href="https://mathleague.org/eligiblestudent.php" rel="noopener" target="_blank">eligibility page</a>; all checked October 31, 2026. The "how to tell" guidance is ours. Modern Age Coders is not affiliated with either organization.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'mathleague.com calendar',
      h2: 'When are the Math League contests in 2026-27?',
      lede: 'For mathleague.com, high school contests fall on October 20, November 17 and December 15, 2026, then January 12, February 9 and March 16, 2027. Grades 7 and 8 sit on February 16 or 23, 2027. mathleague.org dates vary by region and are on its calendar.',
      body: [
        { kind: 'table', caption: 'The Math League (mathleague.com) official contest dates, 2026-2027 school year', head: ['Contest', 'Registration deadline', 'Contest date'], rows: [
          ['High School (six contests)', 'September 30, 2026', 'October 20, November 17 and December 15, 2026; January 12, February 9 and March 16, 2027'],
          ['7th Grade', 'December 31, 2026', 'February 16, 2027 (3rd Tuesday) or February 23, 2027 (4th Tuesday)'],
          ['8th Grade', 'December 31, 2026', 'February 16, 2027 or February 23, 2027'],
          ['6th Grade', 'See the schedule page', 'February 16, 2027 or February 23, 2027'],
          ['4th Grade, 5th Grade, Algebra Course 1', 'January 31, 2027', 'April 15 or later; schools choose the day']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the calendar',
          left: [
            'Late registrations are accepted, the schedule says, and alternate high school dates may be set one week after each official date if a school has a conflict. The 6th grade row on the schedule prints a deadline of December 31, 2027, which looks like a typo for 2026; ask the school.',
            'For grades 6 to 8, every student whose score is reported must take the paper at the same sitting. The FAQ says a student absent that day may take it later for a school certificate, but the score cannot go to the League.'
          ],
          rightH3: 'Calculators this year',
          right: [
            'The two mathleague.com notices disagree. The registration page announces "No Calculators Allowed Beginning 2026-2027 School Year". A later notice, dated July 4, 2026, explains that printed papers and the procedures sheet contradicted each other, and that the League has "decided to allow students to use a calculator on the contests for this school year", without a QWERTY keyboard, moving to no calculators the following year.',
            'Our advice is to practice without one anyway. The rule changes next year, and contest questions at this level are built to be done by reasoning.'
          ] },
        { kind: 'source', html: 'Sources: The Math League <a class="ag-inline-link" href="https://www.mathleague.com/index.php/annualcontestinformation/contestschedules" rel="noopener" target="_blank">contests and dates</a>, <a class="ag-inline-link" href="https://www.mathleague.com/index.php/schools/registerforcontests" rel="noopener" target="_blank">register for contests</a> and the <a class="ag-inline-link" href="https://www.mathleague.com/index.php/38-news/756-no-calculators-allowed-beginning-2026-2027-school-year" rel="noopener" target="_blank">July 4, 2026 calculator notice</a>, checked October 31, 2026. Registration fees are printed there and are not repeated here. mathleague.org publishes dates by region on its <a class="ag-inline-link" href="https://mathleague.org/contestfind.php" rel="noopener" target="_blank">find a contest</a> page.' }
      ]
    },
    {
      id: 'rounds', tint: 'tint', eyebrow: 'mathleague.org rounds',
      h2: 'What rounds are in a mathleague.org contest?',
      lede: 'Middle school contests have Sprint, Target, Team and Countdown rounds with no penalty for wrong answers. High school contests have Sprint, Target, Team and Relay rounds, and the high school Sprint deducts a point for each wrong answer.',
      body: [
        { kind: 'table', caption: 'mathleague.org middle school and high school rounds, from its test description pages', head: ['Round', 'Middle school', 'High school'], rows: [
          ['Sprint', 'Thirty questions in 40 minutes, no calculator, 1 point each, no penalty', '30 multiple-choice questions in sixty minutes, no calculator, +4 correct, -1 wrong, 0 skipped'],
          ['Target', 'Four pairs, 6 minutes per pair, SAT-approved calculator', 'Eight questions of 10 points in pairs, ten minutes per pair, calculators allowed'],
          ['Team', 'Four students, ten questions, 20 minutes', 'Up to six students, ten questions, twenty minutes, 10 points each'],
          ['Countdown or Relay', 'Countdown: head to head, one question at a time, no calculator', 'Relay: teams of up to three, three linked questions, three minutes, answers 0 to 99'],
          ['Power round', 'Not listed', 'Proof-based team round of one hour, out of 100, at US state and national championships'],
          ['Individual score', 'Sprint + 2 &times; Target, maximum 46', 'Sprint + Target, maximum 200']
        ] },
        { kind: 'table', mt: true, caption: 'Our arithmetic: time per question in each format', head: ['Format', 'Questions and time', 'Seconds per question'], numCols: [2], rows: [
          ['mathleague.com grade 7 (2018-19 sample)', '35 in 30 minutes', 'about 51'],
          ['mathleague.com grade 4 and Algebra Course 1 (2018-19 samples)', '30 in 30 minutes', '60'],
          ['mathleague.org middle school Sprint', '30 in 40 minutes', '80'],
          ['mathleague.org high school Sprint', '30 in 60 minutes', '120'],
          ['mathleague.org middle school Target', '2 in 6 minutes', '180'],
          ['mathleague.org high school Target', '2 in 10 minutes', '300']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the relay teaches',
          left: [
            'In a mathleague.org high school relay, each student gets all three questions. The answer to the first is plugged in where the second says "TNYWR" (the number you will receive), and the second answer feeds the third. Correct answers score 2, 3 and 5 points, and the sheet is handed in after three minutes.',
            'The weighting rewards accuracy early in the chain, because a wrong first answer makes the next two wrong. Teams that check question 1 twice before moving on usually do better than teams that rush.'
          ],
          rightH3: 'The middle school link to MATHCOUNTS',
          right: [
            'mathleague.org says its middle school "problems and contest formats" are designed to also prepare students for MATHCOUNTS, and the round names and timings line up. It also states it "is not affiliated in any way with MATHCOUNTS".',
            'Our separate <a class="ag-inline-link" href="/mathcounts-preparation">MATHCOUNTS guide</a> covers that series round by round, so a student doing both has one set of habits to learn.'
          ] },
        { kind: 'source', html: 'Sources: mathleague.org <a class="ag-inline-link" href="https://mathleague.org/mstests.php" rel="noopener" target="_blank">middle school test descriptions</a>, <a class="ag-inline-link" href="https://mathleague.org/hstests.php" rel="noopener" target="_blank">high school test descriptions</a> and <a class="ag-inline-link" href="https://mathleague.org/ms.php" rel="noopener" target="_blank">middle school program</a>, and the format notes printed on mathleague.com 2018-19 <a class="ag-inline-link" href="https://www.mathleague.com/index.php/annualcontestinformation/samplecontests" rel="noopener" target="_blank">sample contests</a>, checked October 31, 2026. No contest question is reproduced. The seconds per question are ours.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'Scoring and strategy, ours',
      h2: 'Should you guess on a Math League contest?',
      lede: 'On mathleague.com papers and mathleague.org middle school rounds, yes: a blank scores nothing and a wrong answer costs nothing. On the mathleague.org high school Sprint, guess only after ruling out at least one choice.',
      body: [
        { kind: 'p', html: 'The high school Sprint gives +4 for a correct answer, &minus;1 for a wrong one and 0 for a skip. Suppose a student has k answer choices left and picks one at random. Our calculation of the average result is (1/k) &times; 4 + ((k &minus; 1)/k) &times; (&minus;1) = (5 &minus; k)/k points. The table shows what that means.' },
        { kind: 'table', caption: 'Our calculation: average points from a random guess under +4 / -1 scoring', head: ['Choices left', 'Average points per guess', 'Verdict'], numCols: [1], rows: [
          ['6', '&minus;0.17', 'Skip'],
          ['5', '0.00', 'No gain on average; skip unless you have a hunch'],
          ['4', '+0.25', 'Guess'],
          ['3', '+0.67', 'Guess'],
          ['2', '+1.50', 'Always guess']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where no penalty applies',
          left: [
            'mathleague.com sample papers state that a correct answer is worth 1 point and unanswered questions get no credit. mathleague.org middle school rounds give one point per correct answer "with no penalty for questions that are skipped or answered incorrectly". In both, every blank is a lost chance.',
            'So the plan for those papers is simple: watch the clock, and in the last minute fill every remaining answer.'
          ],
          rightH3: 'The bigger lesson',
          right: [
            'mathleague.com sample papers remind students that a contest has no passing or failing score, and the grade 4 sample says few students reach 80 percent correct. A student who expects to finish everything will panic at question 20 of 35.',
            'We teach students to read the scoring rule before the first question, set a target for the number they will attempt, and treat the rest as a bonus. Every later contest has its own rule, and the habit of reading it first carries over.'
          ] },
        { kind: 'source', html: 'Scoring rules from mathleague.org test description pages and the mathleague.com 2018-19 sample contests. The guessing formula and table are our own arithmetic; the number of choices on a given mathleague.org paper is not stated on the pages we read.' }
      ]
    },
    {
      id: 'practice', tint: 'plain', eyebrow: 'Practice set, ours',
      h2: 'Eight Math League style practice problems',
      lede: 'Written by our teachers for this page, at the level of grade 6 to 8 contests and early high school contests. They are not taken from any Math League paper; both organizations sell their own past contests, and mathleague.com posts free samples.',
      body: [
        { kind: 'table', caption: 'Our practice set (answers checked in Python on October 31, 2026)', head: ['#', 'Level', 'Our problem', 'Answer'], rows: [
          ['1', 'Grade 6', 'What is the smallest positive whole number divisible by 2, 3, 4, 5 and 6?', '60'],
          ['2', 'Grade 6', 'How many positive divisors does 72 have?', '12'],
          ['3', 'Grade 7', 'The average of five numbers is 12. One number is removed and the average of the other four is 10. Which number was removed?', '20'],
          ['4', 'Grade 7', 'What is the sum of the interior angles of a hexagon, in degrees?', '720'],
          ['5', 'Grade 8', 'How many three-digit numbers have digits that add up to 5?', '15'],
          ['6', 'High school', 'If x + 1/x = 3, what is x<sup>2</sup> + 1/x<sup>2</sup>?', '7'],
          ['7', 'High school', 'What is the remainder when 3<sup>50</sup> is divided by 8?', '1'],
          ['8', 'High school relay (ours)', 'Q1: How many primes are less than 20? Q2: Let T be TNYWR. Find T<sup>2</sup> &minus; 10. Q3: Let T be TNYWR. Find the sum of the digits of T.', '8, then 54, then 9']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we would teach problem 5',
          left: [
            'Write the number as digits a, b, c with a at least 1. Set a&prime; = a &minus; 1, so a&prime; + b + c = 4 with every digit at least 0. Counting the ways to split 4 into three ordered parts gives 15 (the "stars and bars" count of 6 choose 2).',
            'A grade 8 student who lists them by hand will also get 15, more slowly. The lesson is to notice the shift that turns a restricted count into a free one, a trick that reappears all through high school contests.'
          ],
          rightH3: 'How we would teach problem 6',
          right: [
            'Square both sides: (x + 1/x)<sup>2</sup> = x<sup>2</sup> + 2 + 1/x<sup>2</sup> = 9, so x<sup>2</sup> + 1/x<sup>2</sup> = 7. No need to find x, which is not a whole number.',
            'Students who try to solve for x first lose two minutes on a sixty-second question. Spotting that the question asks for a combination, not the value, is the habit Math League high school papers reward.'
          ] },
        { kind: 'source', html: 'All eight problems, the relay chain and the explanations are ours. mathleague.com publishes free sample contests with solutions from 2004-05, 2012-13 and 2018-19; mathleague.org sends a free contest problem set to anyone on its mailing list.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A season plan, ours',
    h2: 'From September to the spring championships',
    lede: 'Our suggested plan for a student in either league. Adjust the months to the contest dates your school or region uses.',
    table: { caption: 'Our Math League season plan', head: ['When', 'Focus', 'The sign it is working'], rows: [
      ['September', 'Arithmetic, fractions and number sense without a calculator', 'Twenty quick questions in ten minutes, almost no slips'],
      ['October to December', 'Counting, divisibility, ratios and basic geometry', 'Can explain a solution aloud, not just get it'],
      ['January to February', 'Full timed papers at the right length', 'Finishes the attempted questions with time to check'],
      ['March to May', 'Team rounds, relays and championship-style sets', 'Checks question 1 of a relay twice before moving on']
    ] },
    left: { h3: 'If the contest is next week', ps: [
      'Sit one full sample paper at the official time limit, then spend the rest of the week only on the questions that were missed or slow.',
      'Read the scoring rule out loud the day before, so the guessing decision is already made.'
    ] },
    right: { h3: 'If this is the first contest year', ps: [
      'Start with the free sample papers to see the level, then build number sense before speed.',
      'Our <a class="ag-inline-link" href="/math-competitions-for-middle-school-students">middle school competitions guide</a> compares MATHCOUNTS, Math Kangaroo and MOEMS, which many Math League students also enter.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Math courses for Math League students',
    lede: 'Grouped by grade band, from the first grade 4 contest to the high school relay.',
    bands: [
      { num: 'I', h3: 'Contest math', sub: 'Grades 4 to 12', courses: [
        { code: 'LCP / CON / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school math competitions', blurb: 'Sprint, target and team practice.' },
        { code: 'LCP / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Math olympiad and competitions', blurb: 'After Math League, the AMC.' },
        { code: 'LCP / CON / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Speed without a calculator.' }
      ] },
      { num: 'II', h3: 'School math underneath', sub: 'Grades 4 to 9', courses: [
        { code: 'LCP / SCH / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'For the grade 4 and 5 contests.' },
        { code: 'LCP / SCH / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grades 6 to 8, in full.' },
        { code: 'LCP / SCH / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For the Algebra Course 1 contest.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'LCP / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra 2, geometry and precalculus.' },
        { code: 'LCP / HS / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability for contests.' },
        { code: 'LCP / HS / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Check a counting answer with Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live contest math classes for US students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your own time zone.' },
      { time: 'Weekends', l: 'Good for a full timed paper.' },
      { time: '1-on-1', l: 'Paced to one child and one contest date.' }
    ],
    cells: [
      { h3: 'Scoring first', p: 'Each lesson starts with the rule for the contest ahead.' },
      { h3: 'Real time limits', p: 'Fifty-one seconds, eighty or two minutes a question, as the paper sets.' },
      { h3: 'Team practice', p: 'Relays and team rounds rehearsed in breakout groups.' },
      { h3: 'Original problems', p: 'Written by us; official papers are for families to buy or download.' },
      { h3: 'All fifty states', p: 'Online, so the league does not need to be local to us.' },
      { h3: 'Batch size', p: 'Fifteen to twenty students in a group, or one student alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Math, coding and AI work our learners have published. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What parents wrote on our Google profile, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Each league charges schools or families its own registration; our monthly fee covers only the classes. Families can start in the fall and stop after the last contest of the season.',
    free: ['A free first lesson', 'A short timed set at the right grade', 'No card details'],
    group: ['A batch of 15 to 20', 'The same teacher each week', 'Choose your batch', 'Billed monthly'],
    one: ['A private contest coach', 'Built around your contest dates', 'Problems chosen for one student']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Math League contests: what parents ask',
    items: [
      { q: 'What is the Math League contest?', a: 'There are two. The Math League (mathleague.com), formed in 1977, sends contests for grades 4 to 12 to schools to take in class. mathleague.org is a separate organization that runs local contests and championships for grades 3 to 12.' },
      { q: 'When are the Math League high school contests in 2026-27?', a: 'The Math League lists six: October 20, November 17 and December 15, 2026, then January 12, February 9 and March 16, 2027. Alternate dates one week later are allowed for schools with conflicts.' },
      { q: 'When is the 7th and 8th grade Math League contest in 2027?', a: 'The Math League schedule gives the third Tuesday in February, February 16, 2027, or the fourth Tuesday, February 23, 2027. The registration deadline is December 31, 2026.' },
      { q: 'Can you use a calculator on Math League contests?', a: 'For mathleague.com in 2026-27, a July 4, 2026 notice allows calculators without a QWERTY keyboard this school year, with a no-calculator rule from next year. On mathleague.org, sprint rounds forbid calculators and target and team rounds allow them.' },
      { q: 'How is the mathleague.org high school sprint scored?', a: 'Four points for each correct answer, one point off for each wrong answer and nothing for a skip, across 30 multiple-choice questions in sixty minutes. By our calculation a guess pays on average only once at least one choice is ruled out.' },
      { q: 'How long is a Math League contest?', a: 'The mathleague.com 2018-19 sample papers allow 30 minutes, for 30 questions at grade 4 and Algebra Course 1 and 35 at grade 7. A mathleague.org contest is longer, with several rounds such as a 40-minute middle school sprint.' },
      { q: 'Can a homeschooled child take Math League contests?', a: 'Yes. The Math League mails an unofficial homeschool package in May, or a family can arrange official entry through an accredited local school. mathleague.org lets parents or outside coaches act as the contact.' },
      { q: 'Does my child need a team?', a: 'No. The Math League says there is no minimum number of students. mathleague.org scores each student individually, though a school needs at least two students on each middle school test to be eligible for sweepstakes awards.' },
      { q: 'Where are free Math League practice tests?', a: 'mathleague.com posts sample contests with solutions from 2004-05, 2012-13 and 2018-19, and mathleague.org emails a free contest problem set to anyone who joins its mailing list.' },
      { q: 'Which days and times can my child take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Math League?', a: 'No. Modern Age Coders has no connection with The Math League (mathleague.com) or with mathleague.org, and we do not register students for either. Families and schools enter directly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on competition math',
    lede: 'Other contests Math League students often take, and help by grade.',
    items: [
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'MATHCOUNTS, Math Kangaroo and MOEMS compared.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The series mathleague.org middle school contests mirror.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'One March morning, no penalty for wrong answers.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring', p: 'Where strong high school Math League students go next.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar 2026-27', p: 'Coding, math and AI contest dates in one place.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math', p: 'A full math program at home.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child\'s grade and which Math League the school uses. The teacher runs a short timed set at that level and shows you which topics need work before the next contest.',
    readFirst: 'To see the approach first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Classes are live over video from India, scheduled in your US time zone. Most US families find WhatsApp the quickest way to reach us.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Competition math', links: [
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: '4th grade math tutor' },
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Read the scoring rule first'
  },

  personalityCss: `
.ag-root.ag-lcp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-lcp .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-lcp .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-lcp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-lcp .ag-table th:first-child { width: 18%; }
.ag-root.ag-lcp .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Both Math League organizations from their own pages, read raw on 31 October 2026. The Math League (mathleague.com): formed 1977, contests for grades 4-12; 2026-2027 dates (HS deadline September 30 2026, six HS contests October 20, November 17, December 15 2026, January 12, February 9, March 16 2027; grades 7 and 8 deadline December 31 2026, February 16 or 23 2027; grades 4, 5 and Algebra Course 1 deadline January 31 2027, April 15 or later; late registrations accepted); calculator notices (no calculators from 2026-27 on the register page; July 4 2026 notice allowing non-QWERTY calculators this year); FAQ (six sets of 30 for HS, intramural grade 4, 5 and Algebra 1 contests, no minimum number, homeschool package in May, one of grades 6 to 8 only); 2018-19 sample instructions (30 questions in 30 minutes at grade 4 and Algebra 1, 35 at grade 7, 1 point, no passing score; HS 30-minute time limit). mathleague.org: 400+ contests, 30,000+ students, grades 3-12; eligibility by grade, August 1 to July 31 year, April 1 grade rule, one contest per release number; MS rounds and 46-point maximum; HS rounds, +4/-1 sprint, relay TNYWR 0 to 99 with 2, 3, 5 points, power round out of 100, 200-point maximum; championships April, May, July; not affiliated with MATHCOUNTS.',
    localProject: 'Our scoring analysis: average points from a random guess under the mathleague.org high school +4/-1 rule is (5 - k)/k with k choices left (-0.17, 0, +0.25, +0.67, +1.50 for k = 6 to 2), so guess only after eliminating a choice; seconds per question in every format (51, 60, 80, 120, 180, 300); a three-question relay chain of our own (8, 54, 9); and eight original practice problems (60, 12, 20, 720, 15, 7, 1) checked in Python, with stars-and-bars and squaring explanations. Lesson family: let the scoring rule decide the strategy.',
    requiredMentions: ['mathleague.com', 'mathleague.org', 'Formed in 1977', 'February 16, 2027', 'March 16, 2027', 'More than 400 contests a year, over 30,000 students', 'decided to allow students to use a calculator on the contests for this school year', '+4 correct, -1 wrong, 0 skipped', '(5 &minus; k)/k', 'TNYWR', 'is not affiliated in any way with MATHCOUNTS', 'December 31, 2027'],
    sources: [
      { claim: 'The Math League 2026-2027 contest dates and deadlines.', url: 'https://www.mathleague.com/index.php/annualcontestinformation/contestschedules' },
      { claim: 'The Math League calculator notice of July 4, 2026.', url: 'https://www.mathleague.com/index.php/38-news/756-no-calculators-allowed-beginning-2026-2027-school-year' },
      { claim: 'The Math League purpose, grades and history.', url: 'https://www.mathleague.com/index.php/about-the-math-league/statement-of-purpose' },
      { claim: 'The Math League FAQ: sets, homeschool, minimum numbers, grade choice.', url: 'https://www.mathleague.com/index.php/about-the-math-league/faq' },
      { claim: 'mathleague.org program, size and grades.', url: 'https://mathleague.org/about.php' },
      { claim: 'mathleague.org eligibility, grade levels and release numbers.', url: 'https://mathleague.org/eligiblestudent.php' },
      { claim: 'mathleague.org middle school rounds and scoring.', url: 'https://mathleague.org/mstests.php' },
      { claim: 'mathleague.org high school rounds and scoring.', url: 'https://mathleague.org/hstests.php' }
    ],
    rejectedClaims: [
      'Registration fees for either league: printed by the organizations and not repeated; no dollar figure is typed.',
      'The mathleague.com 6th grade deadline of December 31, 2027: printed by the League but apparently a typo; flagged on the page, not presented as a fact.',
      'mathleague.org regional contest dates: they vary by host site; the page points to its find-a-contest page instead.',
      'Current mathleague.com question counts and time limits: taken only from 2018-19 sample papers and labelled with that year.',
      'Any Math League contest question: not reproduced; free samples are linked and our practice problems are original.',
      'Names of the people behind either organization: left out under the page rules.',
      'Any affiliation with The Math League, mathleague.org or MATHCOUNTS: none, stated on the page.'
    ]
  }
};
