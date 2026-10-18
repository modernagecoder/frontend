'use strict';
// Math competitions for middle school students (ag- competition door; US cluster Phase 3, row 44).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Every competition is described only from its own
// official site, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/math-competitions-for-middle-school-students/):
//  - MATHCOUNTS (mathcounts.org home, /programs/mathcounts-competition-series, /programs/competition-rules-faq):
//    grades 6-8; "4 levels of competition—school, chapter, state and national"; Sprint "40 minutes to complete 30 math
//    problems without a calculator"; Target "4 pairs of problems and have 6 minutes to complete each pair"; Team "20
//    minutes to complete 10 math problems", "Only the 4 students on a school's team"; Countdown "a maximum of 45
//    seconds per problem", optional below national; "about 3 hours"; "Participation in MATHCOUNTS competitions is
//    limited to 3 years for each student"; "Tutoring/enrichment centers ... are not eligible"; NSC registration "will
//    open on November 5, 2026", "a limit of 14 NSCs per school"; Early Bird by "Nov. 3, 2026"; Regular by "Dec. 15,
//    2026"; 2027 School Competition released online "Nov. 3, 2026"; chapter "February 1-28, 2027", state "March 1-31,
//    2027", national "May 9-10 in Washington, DC"; "500 chapter competitions"; up to 14 competitors per school (4 team +
//    10 individuals); "224 competitors"; National Math Club free.
//  - Math Kangaroo USA (mathkangaroo.org/mks/ home, /math-kangaroo-competition/, /faqs/about-the-test/, /faqs/about-
//    registration/, /math-kangaroo-scoring/, /math-kangaroo-team-competition/): "a 75 minute multiple-choice test for
//    students in grades 1-12"; "24 questions for students in grades 1-4 and 30 questions for students in grades 5 and
//    higher"; "Kindergarten students are welcome to participate at grade 1"; "the 3rd Thursday in March"; 1/3 of
//    questions at 3, 4 and 5 points; "There are no points taken away for answering questions incorrectly."; 120 maximum
//    at grades 5-12; questions selected by AKSF; regular registration "September 15th to December 31st", late "January
//    1st to February 1st"; "Registration opens September 15, 2026!"; "held in March 2027 for students in Grades K–12"
//    (en dash in original); national top 20 per grade, state top 3; team competition in the fall, teams of 2 to 4,
//    in person; "over 60,000 students annually across the U.S."; center moves "only be done by January 1".
//  - MOEMS (moems.org home, /pages/contests-tournaments): Division E grades 4-6, Division M grades 6-8; teams of up to
//    35 students; "Five Olympiad Contests, each consisting of five questions, and limited to 30 minutes"; 2026-2027
//    windows Nov 9-30, Dec 7-28 2026, Jan 4-25, Feb 1-22, Mar 1-29 2027; score entry deadline March 31, 2027, 11:59 PM
//    (PT); OnPaper and OnLine; established 1979; tournaments with an Individual Round and a Team Round, April to December.
//  - AMC 8: maa.org returned HTTP 403 on 17 October 2026; not circumvented. No AMC dates or rules are printed.
// Our own material, labelled on the page: the seconds-per-problem table (2400 / 30 = 80, 360 / 2 = 180, 1200 / 10 =
// 120, 4500 / 30 = 150, 1800 / 5 = 360), the Math Kangaroo 120-point arithmetic and the 18 March 2027 date derived
// from "the 3rd Thursday in March" (labelled as our calculation), the seven practice problems with answers checked in
// Python, and the year plan. Lesson family: pacing a timed test.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'MATHCOUNTS, Math Kangaroo and MOEMS side by side for grades 6 to 8: formats, timing per problem and the 2026-27 dates, with a practice set.' },
  slug: 'math-competitions-for-middle-school-students',
  code: 'mcms',
  accent: '#70241E',
  accentRationale: 'Math competitions for middle school students: a brick red #70241E from the US allocation table, apart from the coding competition blues and violets, contrast checked on every paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Math competitions for middle school students',
  title: 'Math Competitions for Middle School: MATHCOUNTS and More',
  description: 'MATHCOUNTS, Math Kangaroo and MOEMS for grades 6 to 8: rounds, scoring, time per problem and the 2026-27 dates from each organiser, plus seven practice problems.',
  ogDescription: 'The three math competitions most US middle schools meet, compared from their own 2026-27 pages: who can enter, how each round works, and how much time a student has per problem.',
  twitterDescription: 'Middle school math competitions for 2026-27, compared round by round.',
  pageName: 'Math Competitions for Middle School Students',
  webPageDescription: 'A guide for US middle school students and parents to MATHCOUNTS, Math Kangaroo, MOEMS and the AMC 8 route in 2026-27, from each organiser\'s official pages, with a pacing table and a practice set.',
  courseDescription: 'Live online competition math classes for US middle school students preparing for MATHCOUNTS, Math Kangaroo and the AMC 8, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Middle school math competitions',
  navLinks: [
    { href: '#compare', label: 'Compared' },
    { href: '#mathcounts', label: 'MATHCOUNTS' },
    { href: '#kangaroo', label: 'Math Kangaroo' },
    { href: '#pacing', label: 'Time per problem' },
    { href: '#practice', label: 'Practice set' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; The 2026-27 contest year',
  h1: 'Math competitions for middle school students',
  lede: 'Most US middle schoolers who enjoy math will meet three competitions: MATHCOUNTS, which runs from a school round up to a national final; Math Kangaroo, a single 75-minute multiple-choice test each March; and MOEMS, five short monthly contests taken at school. They feel very different on the day, mostly because of how much time each problem gets. This page sets them side by side from each organiser&rsquo;s own pages, checked on 17 October 2026, works out the time per problem for every round, and ends with seven practice problems our teachers wrote.',
  secondaryCta: { href: '#pacing', label: 'See the time per problem' },
  wa: 'Hello Modern Age Coders, my middle schooler in the US wants to prepare for MATHCOUNTS or Math Kangaroo. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; problem solving taught, not tricks',
  spec: [
    ['Grades', '6 to 8'],
    ['MATHCOUNTS', 'School to national, four rounds'],
    ['Math Kangaroo', '75 minutes, multiple choice'],
    ['MOEMS', 'Five contests of five questions'],
    ['AMC 8', 'Run by the MAA; see their site'],
    ['First deadline', 'November 3, 2026 (MATHCOUNTS Early Bird)'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The main math competitions for US middle schoolers are MATHCOUNTS (grades 6 to 8; school, chapter, state and national levels; national final May 9 to 10, 2027), Math Kangaroo (a 75-minute multiple-choice test on the third Thursday in March) and MOEMS Division M (five 30-minute contests from November 2026 to March 2027). Modern Age Coders runs live online classes for all three.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for middle school competition math',
    lede: 'A dedicated competition course first, then the depth and the algebra behind it.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'MCMS / 01', title: 'Middle school math competitions', note: 'Roughly ages 10 to 14. MATHCOUNTS, AMC 8 and Math Kangaroo.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MCMS / 02', title: 'Math olympiad and competitions', note: 'For students ready to go past middle school contests.' },
      { course: 'algebra-foundations-masterclass', code: 'MCMS / 03', title: 'Algebra foundations', note: 'Grades 7 to 9. The algebra most contest problems lean on.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Side by side',
      h2: 'MATHCOUNTS, Math Kangaroo and MOEMS compared',
      lede: 'Every cell comes from the organiser&rsquo;s own pages. The AMC 8 is left out of the table because its organiser&rsquo;s site refused our request; more on that below.',
      body: [
        { kind: 'table', caption: 'Middle school math competitions, 2026-27 (organisers&rsquo; pages, checked 17 October 2026)', head: ['', 'MATHCOUNTS Competition Series', 'Math Kangaroo USA', 'MOEMS Division M'], rows: [
          ['Grades', '6 to 8', 'K to 12 (kindergarten sits the grade 1 paper)', '6 to 8 (Division E covers 4 to 6)'],
          ['Format', 'Four rounds: Sprint, Target, Team, Countdown; about 3 hours in total', 'One 75-minute multiple-choice test', 'Five contests, each five questions in 30 minutes'],
          ['Calculator', 'No in Sprint and Countdown; assumed in Target and Team', 'Not stated on the pages read', 'Not stated on the pages read'],
          ['Levels', 'School, chapter, state, national', 'One sitting; national and state rankings', 'Monthly contests at school; optional local tournaments'],
          ['How to enter', 'Through the school; a non-school competitor only if the school is not registering', 'At a Math Kangaroo center', 'Through a school or group team of up to 35'],
          ['2026-27 dates', 'Chapter February 1 to 28, state March 1 to 31, national May 9 to 10, 2027', 'March 2027; the rule is the third Thursday in March', 'Monthly windows from November 9, 2026 to March 29, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which suits which student',
          left: [
            'MATHCOUNTS rewards speed and teamwork across a whole season, and a strong student can keep advancing from February to May. It is the most involved of the three for families, because it runs through the school.',
            'Math Kangaroo is one morning of careful reasoning with no penalty for a wrong answer. MOEMS is the lightest: five short contests in class, good practice for students who have never competed.'
          ],
          rightH3: 'Doing more than one',
          right: [
            'They fit together well. MOEMS runs monthly from November, MATHCOUNTS chapter rounds are in February, and Math Kangaroo is in March, so a single year of preparation serves all three.',
            'Our deeper guides cover two of them on their own: <a class="ag-inline-link" href="/mathcounts-preparation">MATHCOUNTS preparation</a> and <a class="ag-inline-link" href="/math-kangaroo-usa-preparation">Math Kangaroo preparation</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.mathcounts.org/programs/mathcounts-competition-series" rel="noopener" target="_blank">MATHCOUNTS Competition Series</a> and <a class="ag-inline-link" href="https://www.mathcounts.org/programs/competition-rules-faq" rel="noopener" target="_blank">Rules and FAQ</a>; Math Kangaroo USA <a class="ag-inline-link" href="https://mathkangaroo.org/mks/faqs/about-the-test/" rel="noopener" target="_blank">test FAQ</a> and <a class="ag-inline-link" href="https://mathkangaroo.org/mks/math-kangaroo-competition/" rel="noopener" target="_blank">competition page</a>; <a class="ag-inline-link" href="https://www.moems.org/" rel="noopener" target="_blank">MOEMS</a>; all checked 17 October 2026. We have no connection with any of these organisations.' }
      ]
    },
    {
      id: 'mathcounts', tint: 'deep', eyebrow: 'MATHCOUNTS',
      h2: 'MATHCOUNTS: four rounds, four levels, one school year',
      lede: 'The MATHCOUNTS Foundation, a non-profit, runs this program for sixth, seventh and eighth graders. Here is the 2026-27 season as the Foundation published it.',
      body: [
        { kind: 'table', caption: 'The four MATHCOUNTS rounds, from the Competition Series page (checked 17 October 2026)', head: ['Round', 'Problems and time', 'Calculator', 'What it tests'], rows: [
          ['Sprint', '30 problems in 40 minutes', 'No', 'Speed and accuracy'],
          ['Target', '4 pairs of problems, 6 minutes per pair', 'Assumed', 'Problem solving and reasoning'],
          ['Team', '10 problems in 20 minutes, only the 4 students on a school&rsquo;s team', 'Assumed', 'Problem solving and collaboration'],
          ['Countdown', 'At most 45 seconds per problem', 'No', 'Speed; schools, chapters and states may skip it']
        ] },
        { kind: 'table', mt: true, caption: 'The 2026-27 MATHCOUNTS calendar, from the Rules and FAQ page', head: ['Date', 'What happens'], rows: [
          ['November 3, 2026', 'Early Bird registration deadline; the 2027 School Competition is released online'],
          ['November 5, 2026', 'Registration opens for non-school competitors (NSCs)'],
          ['December 15, 2026', 'Regular registration deadline; later registrations pay the late rate'],
          ['November 2026 to January 2027', 'School competitions, run by each school&rsquo;s coach'],
          ['February 1 to 28, 2027', 'Chapter competitions, more than 500 across the country'],
          ['March 1 to 31, 2027', 'State competitions in all 50 states plus territories'],
          ['May 9 to 10, 2027', 'National Competition in Washington, DC, for the top 4 individuals from each state']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Rules families ask about',
          left: [
            'Students must be enrolled in grades 6 to 8, and MATHCOUNTS states that "Participation in MATHCOUNTS competitions is limited to 3 years for each student". A school can send up to 14 students to its chapter competition: a team of 4 plus 10 individuals.',
            'Public, private, charter, virtual and home schools can all register; home schools add a participation form. Tutoring and enrichment centers that are not a student&rsquo;s official school of record cannot.'
          ],
          rightH3: 'If the school does not take part',
          right: [
            'A student may register as a non-school competitor only if their school is not registering and will not support participation. Online sign-up by a parent opens on November 5, 2026, and there is a limit of 14 NSCs per school.',
            'MATHCOUNTS also runs a free National Math Club all school year, which needs no competition registration and is a gentler start for a school with no team.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.mathcounts.org/programs/mathcounts-competition-series" rel="noopener" target="_blank">Competition Series</a>, <a class="ag-inline-link" href="https://www.mathcounts.org/programs/competition-rules-faq" rel="noopener" target="_blank">Competition Rules and FAQ</a> and <a class="ag-inline-link" href="https://www.mathcounts.org/" rel="noopener" target="_blank">home page</a>, checked 17 October 2026.' }
      ]
    },
    {
      id: 'kangaroo', tint: 'tint', eyebrow: 'Math Kangaroo',
      h2: 'Math Kangaroo USA: one 75-minute test in March',
      lede: 'Math Kangaroo is the US arm of an international contest. For 2027 it marks its 30th annual competition, and registration opened on September 15, 2026.',
      body: [
        { kind: 'table', caption: 'Math Kangaroo test format and scoring, from the official FAQ and scoring pages (checked 17 October 2026)', head: ['Item', 'As Math Kangaroo USA publishes it'], rows: [
          ['Length', '"a 75 minute multiple-choice test for students in grades 1-12"'],
          ['Questions', '24 questions in grades 1 to 4; 30 questions in grades 5 and higher'],
          ['Points', 'Questions come in three equal groups worth 3, 4 and 5 points'],
          ['Wrong answers', '"There are no points taken away for answering questions incorrectly."'],
          ['Top score', '120 from grade 5 up; 96 for grades 1 to 4'],
          ['Date rule', 'The contest day is the 3rd Thursday in March each year'],
          ['Registration', 'Regular from September 15 to December 31; late from January 1 to February 1'],
          ['Rankings', 'The twenty highest scores in each grade nationally, and the three highest in each grade in each state']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers mean for a seventh grader',
          left: [
            'In grades 5 to 12 there are 30 questions, so ten are worth 3 points, ten worth 4 and ten worth 5. By our arithmetic that is 30 + 40 + 50 = 120, which matches the published maximum.',
            'Because nothing is taken away for a wrong answer, an unanswered question can only cost points. Our advice in class is to mark an answer for every question in the last two minutes, after a real attempt at the ones that can be reasoned out.'
          ],
          rightH3: 'The 2027 date',
          right: [
            'For the 2027 individual contest the organiser gives the month, March 2027, and its standing rule of the third Thursday of March. By our calendar calculation that is Thursday, March 18, 2027; confirm with your center, which sets the exact arrangements.',
            'Math Kangaroo also runs a newer in-person Team Competition in the fall for teams of 2 to 4 students. The questions themselves are selected by the International Math Kangaroo Committee, AKSF, not by the US organiser.'
          ] },
        { kind: 'source', html: 'Sources: Math Kangaroo USA <a class="ag-inline-link" href="https://mathkangaroo.org/mks/faqs/about-the-test/" rel="noopener" target="_blank">About the Test</a>, <a class="ag-inline-link" href="https://mathkangaroo.org/mks/math-kangaroo-scoring/" rel="noopener" target="_blank">Scoring</a>, <a class="ag-inline-link" href="https://mathkangaroo.org/mks/math-kangaroo-team-competition/" rel="noopener" target="_blank">Team Competition</a> and <a class="ag-inline-link" href="https://mathkangaroo.org/mks/" rel="noopener" target="_blank">home page</a>, checked 17 October 2026.' }
      ]
    },
    {
      id: 'moems', tint: 'deep', eyebrow: 'MOEMS and the AMC 8',
      h2: 'MOEMS for a first contest, and a note on the AMC 8',
      lede: 'MOEMS, Math Olympiads for Elementary and Middle Schools, is the shortest contest format here, and it runs inside the school day.',
      body: [
        { kind: 'table', caption: 'MOEMS 2026-2027 contest windows, from the official site (checked 17 October 2026)', head: ['Contest', 'Administration window', 'Scores due'], rows: [
          ['1', 'November 9 to 30, 2026', 'March 31, 2027, 11:59 pm Pacific'],
          ['2', 'December 7 to 28, 2026', 'March 31, 2027, 11:59 pm Pacific'],
          ['3', 'January 4 to 25, 2027', 'March 31, 2027, 11:59 pm Pacific'],
          ['4', 'February 1 to 22, 2027', 'March 31, 2027, 11:59 pm Pacific'],
          ['5', 'March 1 to 29, 2027', 'March 31, 2027, 11:59 pm Pacific']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'MOEMS in brief',
          left: [
            'In MOEMS&rsquo;s words: "Five Olympiad Contests, each consisting of five questions, and limited to 30 minutes are held monthly from November through March." Division M covers sixth to eighth grade, and a team can have up to 35 students, on paper or online.',
            'MOEMS was established in 1979. Groups can also host a one-day tournament with an individual round and a team round, any time from April through December.'
          ],
          rightH3: 'Why the AMC 8 has no details here',
          right: [
            'The AMC 8 is run by the Mathematical Association of America. When we tried to read the MAA&rsquo;s competition pages on 17 October 2026, the site returned an access-denied error, and we do not work around blocks like that.',
            'So this page prints no AMC dates or rules. Check the MAA site directly, and see our <a class="ag-inline-link" href="/math-olympiad-amc-tutoring">AMC and math olympiad tutoring</a> page for how we prepare students.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.moems.org/" rel="noopener" target="_blank">MOEMS home page</a> and <a class="ag-inline-link" href="https://www.moems.org/pages/contests-tournaments" rel="noopener" target="_blank">Contests and Tournaments</a>, checked 17 October 2026.' }
      ]
    },
    {
      id: 'pacing', tint: 'tint', eyebrow: 'Time per problem',
      h2: 'How much time each problem gets, round by round',
      lede: 'Our own arithmetic on the published formats. This one table explains most of the difference in how the contests feel, and it shapes how we practise for each.',
      body: [
        { kind: 'table', caption: 'Average time per problem in each format (our calculation from the official formats)', head: ['Contest and round', 'Published format', 'Average time per problem'], numCols: [2], rows: [
          ['MATHCOUNTS Countdown', 'At most 45 seconds per problem', '45 seconds or less'],
          ['MATHCOUNTS Sprint', '30 problems in 40 minutes', '80 seconds (2,400 / 30)'],
          ['MATHCOUNTS Team', '10 problems in 20 minutes, shared by 4 students', '120 seconds (1,200 / 10)'],
          ['Math Kangaroo, grades 5 to 12', '30 questions in 75 minutes', '150 seconds (4,500 / 30)'],
          ['MATHCOUNTS Target', '6 minutes per pair of problems', '180 seconds (360 / 2)'],
          ['MOEMS', '5 questions in 30 minutes', '360 seconds (1,800 / 5)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'At the fast end, Countdown and Sprint reward instant recall: squares, primes, common fractions as decimals, and quick estimates. At the slow end, MOEMS gives six minutes a question, so it rewards trying several approaches and checking.',
            'Math Kangaroo sits in the middle at two and a half minutes, but its later questions are worth more and are harder, so in practice a student should move faster through the early ones.'
          ],
          rightH3: 'How we practise for each',
          right: [
            'For Sprint we run short timed sets of ten problems in about thirteen minutes, the same pace as the real round. For Target and MOEMS we slow down and ask students to write a full solution, then find a second method.',
            'Team rounds get their own practice: four students, ten problems, and a rule that nobody works alone for more than five minutes.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Seven practice problems in the style of middle school contests',
      lede: 'These problems are ours, written for this page and not taken from any competition. They sit at roughly school and chapter level. Try them with a timer set to 80 seconds each.',
      body: [
        { kind: 'ol', items: [
          '<b>What is the sum of the first 20 positive odd integers?</b>',
          '<b>A rectangle&rsquo;s length is 3 more than its width, and its perimeter is 46. What is its area?</b>',
          '<b>How many positive divisors does 72 have?</b>',
          '<b>The mean of five numbers is 18. Four of them are 12, 15, 20 and 25. What is the fifth?</b>',
          '<b>How many integers from 1 to 100 are divisible by 3 or by 5?</b>',
          '<b>A bag holds 4 red and 6 blue marbles. Two are drawn without replacement. What is the probability that both are red?</b> Give a common fraction.',
          '<b>What is the units digit of 7 to the power 2026?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the key idea (ours; each answer checked in Python)', head: ['Problem', 'Answer', 'Key idea'], rows: [
          ['1', '400', 'The first n odd numbers add to n squared, and 20 x 20 = 400'],
          ['2', '130', 'Width plus length is 23, so the width is 10 and the length 13; 10 x 13 = 130'],
          ['3', '12', '72 = 2 cubed x 3 squared, so (3 + 1) x (2 + 1) = 12 divisors'],
          ['4', '18', 'The five numbers total 5 x 18 = 90; 90 minus 72 leaves 18'],
          ['5', '47', '33 multiples of 3 plus 20 multiples of 5, minus 6 multiples of 15 counted twice'],
          ['6', '2/15', '4/10 x 3/9 = 12/90 = 2/15'],
          ['7', '9', 'Units digits of powers of 7 cycle 7, 9, 3, 1; 2026 leaves remainder 2 when divided by 4']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What these problems practise',
          left: [
            'Problems 1, 3 and 7 reward knowing a pattern so well that the answer takes seconds, which is what Sprint and Countdown need. Problems 2, 4 and 6 are short algebra and probability, the bread and butter of every contest here.',
            'Problem 5 is the classic overlap trap: adding 33 and 20 gives 53, which counts the multiples of 15 twice.'
          ],
          rightH3: 'Making more of your own',
          right: [
            'Change one number and solve again: the first 25 odd integers, divisors of 96, a perimeter of 58. If the method still works, the student has learned the idea, not the answer.',
            'Then ask the harder version. Problem 5 becomes "divisible by 3, 5 or 7", which needs the full inclusion and exclusion idea.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A year plan',
      h2: 'One preparation year that covers all three contests',
      lede: 'Our plan for a student in grade 6, 7 or 8 starting in October 2026, with one live class a week and twenty minutes of practice on most days.',
      body: [
        { kind: 'table', caption: 'October 2026 to May 2027 (our plan on the official dates)', head: ['Month', 'Contest dates', 'Practice focus'], rows: [
          ['October 2026', 'MATHCOUNTS Early Bird deadline November 3; Math Kangaroo registration open', 'Number sense and fast arithmetic; register early'],
          ['November 2026', 'MOEMS Contest 1 from November 9; MATHCOUNTS School Competition released November 3', 'Counting and divisibility'],
          ['December 2026', 'MOEMS Contest 2; Math Kangaroo regular registration ends December 31', 'Fractions, ratios and percent'],
          ['January 2027', 'MOEMS Contest 3; school MATHCOUNTS rounds finish', 'Timed Sprint sets at 80 seconds a problem'],
          ['February 2027', 'MATHCOUNTS chapter competitions February 1 to 28; MOEMS Contest 4', 'Geometry and probability'],
          ['March 2027', 'MATHCOUNTS state March 1 to 31; Math Kangaroo on the third Thursday; MOEMS Contest 5', 'Multiple-choice strategy and full mock tests'],
          ['May 2027', 'MATHCOUNTS National May 9 to 10 for state qualifiers', 'Review the year and plan next season']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 6', p: 'MOEMS and Math Kangaroo first; join the MATHCOUNTS school team if there is one.' },
          { h3: 'Grade 7', p: 'All three. Aim to make the school&rsquo;s four-person MATHCOUNTS team.' },
          { h3: 'Grade 8', p: 'All three, plus algebra and geometry beyond the school course.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps from good at school math to competition ready',
    lede: 'A high grade in math class is a start, not the finish.',
    table: { caption: 'From school math to contest math (ours)', head: ['Step', 'How it shows'], rows: [
      ['1. Accurate', 'Gets school problems right, given time'],
      ['2. Fluent', 'Handles fractions, percents and powers without a calculator'],
      ['3. Flexible', 'Tries a second method when the first one stalls'],
      ['4. Paced', 'Knows how long to spend on each problem and when to move on']
    ] },
    left: { h3: 'For parents', ps: [
      'Steps 3 and 4 are rarely taught in a regular class. They are exactly what competition practice builds.',
      'Check how your school enters MATHCOUNTS early in the fall; registration runs through the school, and Early Bird closes on November 3, 2026.'
    ] },
    right: { h3: 'For students', ps: [
      'Time yourself. Knowing your own pace is the quickest improvement available.',
      'Keep a list of every problem you missed and the idea you were missing. Reread it before each contest.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses for middle school competitors and their siblings',
    lede: 'Taught live online, with the same teacher each week, as a group class or privately.',
    bands: [
      { num: 'I', h3: 'Competition math', sub: 'Grades 6 to 8 and beyond', courses: [
        { code: 'MCMS / CMP / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school math competitions', blurb: 'MATHCOUNTS, AMC 8, Kangaroo.' },
        { code: 'MCMS / CMP / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition math', blurb: 'The next level up.' },
        { code: 'MCMS / CMP / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic for younger solvers.' }
      ] },
      { num: 'II', h3: 'School math, deeper', sub: 'The base under every contest', courses: [
        { code: 'MCMS / SCH / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra and Algebra 1.' },
        { code: 'MCMS / SCH / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'Pre-algebra and geometry.' },
        { code: 'MCMS / SCH / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'For an eighth grader ahead.' }
      ] },
      { num: 'III', h3: 'Younger siblings', sub: 'Math Kangaroo starts at grade 1', courses: [
        { code: 'MCMS / YNG / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, live.' },
        { code: 'MCMS / YNG / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Number sense for speed.' },
        { code: 'MCMS / YNG / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Ages 10 to 15, in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math classes through the contest season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches in your time zone.' },
      { time: 'Weekends', l: 'Mock tests run well on a weekend morning.' },
      { time: '1-on-1', l: 'Built around one student&rsquo;s weak topics.' }
    ],
    cells: [
      { h3: 'Timed sets', p: 'Practice at each round&rsquo;s real pace.' },
      { h3: 'Two methods', p: 'Every problem solved a second way.' },
      { h3: 'Mistake log', p: 'Missed ideas tracked all year.' },
      { h3: 'Mock rounds', p: 'Sprint, Target and Kangaroo style.' },
      { h3: 'Any US state', p: 'Live online, nothing to commute to.' },
      { h3: 'Class size', p: 'Fifteen to twenty students per batch, or a single student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Work by our learners across math, coding and AI. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Google reviews left by parents, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Each competition charges its own registration through the school, center or team; our fee is only for the classes. We bill monthly in US dollars, so a student can take lessons from fall through the March contests and stop there.',
    free: ['A free first lesson', 'A short timed problem set', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private math teacher', 'Lessons timed to your contest dates', 'Problems picked for your child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Middle school math competitions: what parents ask',
    items: [
      { q: 'What are the main math competitions for middle school in the US?', a: 'MATHCOUNTS (grades 6 to 8, from school to national level), Math Kangaroo USA (a 75-minute multiple-choice test for grades 1 to 12), MOEMS Division M (five monthly contests for grades 6 to 8) and the AMC 8, which is run by the Mathematical Association of America.' },
      { q: 'When is MATHCOUNTS in 2026-27?', a: 'School competitions run from November 2026 to January 2027, chapter competitions February 1 to 28, 2027, state competitions March 1 to 31, 2027, and the National Competition on May 9 to 10, 2027 in Washington, DC.' },
      { q: 'Can a homeschooled student do MATHCOUNTS?', a: 'Yes. Home schools can register for the Competition Series and submit a separate Home School Participation Form. Home school students should not register as non-school competitors.' },
      { q: 'What if my child\'s school does not do MATHCOUNTS?', a: 'If the school will not register or support participation, the parent may sign the student up online as an NSC (non-school competitor) once registration opens on November 5, 2026. There is a limit of 14 NSCs per school.' },
      { q: 'How is Math Kangaroo scored?', a: 'Each question carries 3, 4 or 5 points, split evenly across the paper, and a wrong answer costs nothing. From grade 5 up the maximum is 120; in grades 1 to 4 it is 96.' },
      { q: 'When is Math Kangaroo 2027?', a: 'The organiser lists March 2027, and its rule puts the contest on the third Thursday of March. Counting the calendar ourselves, that falls on March 18, 2027; your center confirms the details.' },
      { q: 'How many years can a student compete in MATHCOUNTS?', a: 'MATHCOUNTS limits competition participation to 3 years per student, though there is no limit on years of school-based coaching.' },
      { q: 'Why does this page not give AMC 8 dates?', a: 'The MAA website refused our request when we checked on 17 October 2026, and we only print competition facts read from the organiser. Please check the MAA site directly for AMC 8 dates and rules.' },
      { q: 'Are you affiliated with MATHCOUNTS or Math Kangaroo?', a: 'No. Modern Age Coders runs its own classes and has no tie to MATHCOUNTS, Math Kangaroo USA, MOEMS or the MAA. Families register with each competition themselves.' },
      { q: 'Which days and times can my child take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on competition math',
    lede: 'Deeper guides to single contests, and help by grade.',
    items: [
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Round by round, in depth.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation', p: 'Practice for the March test.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring', p: 'From the AMC 8 upward.' },
      { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor', p: 'School math, properly.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The base of most contest problems.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math', p: 'A full curriculum at home.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Say which contest your child is aiming at and their grade. The teacher runs a short timed set together with them and shows you where the gaps are.',
    readFirst: 'To see how classes are structured first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'We teach over live video from India; there is no center to drop in at. WhatsApp is usually quickest for US families.',
    formNote: 'Free first lesson. No card needed to book.'
  },

  footer: {
    cols: [
      { h4: 'Competition math', links: [
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' },
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Eighty seconds a problem'
  },

  personalityCss: `
.ag-root.ag-mcms .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mcms .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mcms .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mcms .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mcms .ag-steps li { line-height: 1.65; }
.ag-root.ag-mcms .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Each competition from its own official pages, read raw on 17 October 2026: MATHCOUNTS Competition Series and Rules and FAQ (grades 6 to 8, four levels, four rounds with times and calculator rules, about 3 hours, 3-year limit, school types, NSC rules and November 5 2026 opening, 14 NSC limit, Early Bird November 3 2026, School Competition released November 3 2026, regular deadline December 15 2026, chapter February 1 to 28 2027, state March 1 to 31 2027, national May 9 to 10 2027 in Washington DC, 500 chapter competitions, 14 per school, 224 national competitors, free National Math Club); Math Kangaroo USA (75 minutes, 24 or 30 questions, 3/4/5 points, no deduction, 96 and 120 maxima, 3rd Thursday in March, registration windows, March 2027, AKSF, rankings, team competition, 60,000 US students); MOEMS (Division M grades 6 to 8, teams up to 35, five contests of five questions in 30 minutes, 2026-27 windows, March 31 2027 score deadline, 1979, tournaments). MAA returned 403.',
    localProject: 'Our seconds-per-problem table (45, 80, 120, 150, 180, 360), our Math Kangaroo arithmetic 30 + 40 + 50 = 120, our date calculation Thursday March 18 2027 from the 3rd Thursday rule, seven original practice problems with answers checked in Python (400, 130, 12, 18, 47, 2/15, 9), and our October to May plan. Lesson family: pacing a timed test.',
    requiredMentions: ['limited to 3 years for each student', '30 problems in 40 minutes', '6 minutes per pair', 'At most 45 seconds per problem', 'a limit of 14 NSCs per school', 'May 9 to 10, 2027', 'There are no points taken away for answering questions incorrectly.', '3rd Thursday in March', 'March 18, 2027', 'each consisting of five questions, and limited to 30 minutes', 'up to 35 students', '80 seconds (2,400 / 30)', '2/15', 'access-denied error'],
    sources: [
      { claim: 'MATHCOUNTS rounds, levels and 2026-27 national timeline.', url: 'https://www.mathcounts.org/programs/mathcounts-competition-series' },
      { claim: 'MATHCOUNTS eligibility, NSC rules, deadlines and competition dates.', url: 'https://www.mathcounts.org/programs/competition-rules-faq' },
      { claim: 'Math Kangaroo test format, scoring, date rule and registration windows.', url: 'https://mathkangaroo.org/mks/faqs/about-the-test/' },
      { claim: 'Math Kangaroo rankings and maximum scores.', url: 'https://mathkangaroo.org/mks/math-kangaroo-scoring/' },
      { claim: 'Math Kangaroo 2027 individual competition and team competition.', url: 'https://mathkangaroo.org/mks/' },
      { claim: 'MOEMS divisions, team size, 2026-2027 contest windows and format.', url: 'https://www.moems.org/' },
      { claim: 'MOEMS contest format and tournaments.', url: 'https://www.moems.org/pages/contests-tournaments' }
    ],
    rejectedClaims: [
      'AMC 8 dates, rules, eligibility and scoring: maa.org returned HTTP 403 on 17 October 2026; not circumvented, not printed.',
      'An official 2027 Math Kangaroo date: not published on the pages read; March 18, 2027 is labelled as our calculation from the published 3rd Thursday rule.',
      'Registration fees for MATHCOUNTS, Math Kangaroo and MOEMS: published by the organisers and not repeated here.',
      'Sample problems from MATHCOUNTS pages: not reproduced; our practice problems are original.',
      'MATHCOUNTS date conflict accommodation details: left out of the page.',
      'Any affiliation with MATHCOUNTS, Math Kangaroo USA, MOEMS or the MAA: none, stated on the page.'
    ]
  }
};
