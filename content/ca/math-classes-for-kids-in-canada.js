'use strict';
// Math classes for kids in Canada (ag- market door; Canada cluster row 75).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Searches: math classes for kids canada / math help grade 1-8 canada.
// Spine: where Grade 1 to 8 math is checked across Canada in 2026 to 2027, and how one situation is taught three ways
// (picture, table, rule). Must not repeat /online-math-tutor-canada (no province "road" table, no warning-signs list,
// no phone-plan example).
// Facts used as they stand from keyword-research-2026-09/ca/facts-schools-contests.md (each carries quote, URL, saved
// file under ca/src/, read 22 October 2026):
//  - Ontario elementary math (2020), C3 overall expectation "solve problems and create computational representations of
//    mathematical situations using coding concepts and skills"; Grade 1 C3.1 "code that involves sequential events";
//    Grade 6 "writing and executing efficient code"; Grade 8 "the analysis of data in order to inform and communicate
//    decisions" (facts 2, 3, 9, 12; ontario/api-math-g*-strands.json).
//  - EQAO: "EQAO's provincial tests assess students' literacy (reading and writing) and numeracy (mathematics)
//    knowledge and skills"; Grade 3 and Grade 6 window "May 4 - June 8, 2027" (an en dash in the source, written here
//    as "May 4 to June 8, 2027"); Grade 9 "January 12 - February 5, 2027" (written with "to") (facts 52 to 54;
//    ontario/eqao-assessments.html).
//  - Alberta: "New K to 6 curriculum for English language arts and literature, mathematics and physical education and
//    wellness implemented in schools" (filed under 2022/2023); draft 7 to 9 math "ahead of mandatory implementation in
//    September 2027"; PATs "administered annually to all Alberta students in grades 6 and 9"; Grade 6 tests "occur in
//    June"; "in a digital environment rather than pencil and paper" (facts 76, 79, 84 to 86; alberta/*.html).
//  - BC ADST 6 Computational Thinking: "simple algorithms", "visual programming" (fact 67; bc/adst-6-core.html).
//  - CEMC: BCC Grade 5/6 eligibility "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC.";
//    "12 multiple-choice questions out of a total of 60 (Grade 5/6)."; "Time allowed for completion is 45 minutes.";
//    "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces";
//    BCC 2026 dates Monday, November 9, 2026 to Friday, November 20, 2026 (facts 136 to 139); Gauss "Students in Grades
//    7 and 8." / "Motivated students in lower grades are welcome to write the contest."; Monday, May 10, 2027 to Friday,
//    May 21, 2027; "25 multiple-choice questions."; 60 minutes (facts 143 to 145); "Our contests are not tests or exams.
//    There is no passing or failing score." (fact 159); POTW "e-mailed to educators for use with their students from
//    Grades 3 to 12", "New problems are sent every Thursday, and their solutions are sent one week later." (fact 162);
//    Courseware "No registration is required to access these resources." (fact 163); entry "all students must
//    participate through their school." (fact 112).
//  - Math Kangaroo (UFV host-centre page, not the national site): "Students from grades 1 to 12 are welcome to write the
//    contest, with different versions for grades 1-2, 3-4, 5-6, 7-8, 9-10, and 11-12!"; Grades 1-2: 18 questions in 45
//    minutes; Grades 3-4: 24 questions in 60 minutes; "30 multiple-choice questions, arranged in increasing difficulty,
//    to be answered in 75 minutes." for Grades 5 to 12 (facts 196, 197; other-contests/ufv-canadian-math-kangaroo.html).
//    The 2026 fees on that page are NOT used.
//  - facts-geo.md section 3 (tzdb 2026e): offsets for the clock table.
// Our own material, labelled on the page: the grade-band teaching table, the Canoe Water Share and Snow Fort Wall worked
// examples, the Python loop (run under CPython on 22 October 2026, prints walls 1 to 10 at 5 to 32 blocks and finds wall
// 30 for 92 blocks), the eight-problem practice set with answers, the month plan, and the clock conversions
// (10:00 ET in winter = 10:00 Winnipeg, 9:00 Calgary and Regina, 8:00 Vancouver, 11:00 Halifax, 11:30 St. John's;
// in summer 2027 = 9:00, 8:00, 7:00, 11:00, 11:30).
// Lesson family: one situation, three faces (picture, table, rule).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const WALL = `# Our Snow Fort Wall pattern (a Grade 7 or 8 coding-in-math task)
blocks = 5            # wall 1 uses 5 blocks
for wall in range(1, 11):
    print("Wall", wall, "uses", blocks, "blocks")
    blocks = blocks + 3   # every new wall adds 3 blocks

# Working backwards: which wall uses exactly 92 blocks?
wall = 1
while 3 * wall + 2 < 92:
    wall = wall + 1
print("92 blocks makes wall", wall)`;

const WALL_OUT = `Wall 1 uses 5 blocks
Wall 2 uses 8 blocks
Wall 3 uses 11 blocks
...
Wall 10 uses 32 blocks
92 blocks makes wall 30`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MATH FOR KIDS', blurb: 'Grade 1 to 8 math across Canada: where each province checks it in 2026 to 2027, free CEMC challenges, two worked examples and a practice set we wrote.' },
  slug: 'math-classes-for-kids-in-canada',
  code: 'mkc',
  accent: '#665E3D',
  accentRationale: 'Math classes for kids, Canada: a muted olive-bronze #665E3D, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 6.13 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Math classes for kids, Canada',
  title: 'Math Classes for Kids in Canada: Grades 1 to 8, Live Online',
  description: 'Live online math classes for Canadian kids in Grades 1 to 8: what EQAO and Alberta PATs check in 2027, free CEMC challenges, and two worked examples we wrote.',
  ogDescription: 'Grade 1 to 8 math for Canadian children, taught live online. EQAO lists May 4 to June 8, 2027 for Grades 3 and 6; Alberta writes PATs in Grades 6 and 9. What to practise, and how we teach it.',
  twitterDescription: 'Math classes for kids in Canada, Grades 1 to 8, with provincial checkpoints for 2027 and worked examples we wrote.',
  pageName: 'Math Classes for Kids in Canada',
  webPageDescription: 'A guide for Canadian parents of children in Grades 1 to 8 to the provincial math checkpoints of 2026 to 2027, free CEMC math and computing challenges, and how Modern Age Coders teaches elementary and middle school math live online.',
  courseDescription: 'Live online math classes for children in Grades 1 to 8 across Canada, in a batch or one to one, from number sense and fractions to pre-algebra.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Math classes for kids',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#checks', label: 'Provincial checks' },
    { href: '#bands', label: 'By grade' },
    { href: '#example', label: 'Worked examples' },
    { href: '#practice', label: 'Practice set' },
    { href: '#challenges', label: 'Free challenges' }
  ],
  eyebrow: 'Canada &middot; Grades 1 to 8 &middot; Live online math',
  h1: 'Math classes for kids in Canada',
  lede: 'Elementary math in Canada is set by each province, and a child in Grade 3 in Ottawa meets a different checkpoint from a child in Grade 3 in Red Deer. What does not change from province to province is what makes a child good at math: knowing why a method works, being able to picture a problem, and checking an answer instead of hoping. This page sets out where Grade 1 to 8 math is formally checked in 2026 to 2027, which free challenges a younger child can try, what we teach in each grade band, and two worked examples from our own classes, so you can see the teaching before you book anything.',
  secondaryCta: { href: '#example', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child in Canada needs help with math. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['Grades', '1 to 8 (ages about 6 to 14)'],
    ['Taught', 'Live online, one regular teacher'],
    ['Format', 'Batch or one to one'],
    ['Classes', 'Eight live classes a month'],
    ['Ontario checks', 'EQAO, Grades 3 and 6'],
    ['Alberta checks', 'PATs, Grades 6 and 9'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches math to children in Grades 1 to 8 across Canada, live online, in a batch or one to one, through its Elementary Math and Middle School Math courses. Classes build number sense, fractions, ratio and early algebra by explaining why each method works, and they track the checkpoints a child meets at school, such as EQAO in Ontario and the Provincial Achievement Tests in Alberta.',

  picks: {
    eyebrow: 'Start with a course',
    h2: 'Three math courses for Canadian children',
    lede: 'One for the primary grades, one for the middle years, and one that teaches math through code for children who like to build.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'MKC / 01', title: 'Elementary Math, Grades 1 to 5', note: 'Placement by grade into three levels, from counting and place value to fractions, measurement and early geometry. Eight live classes a month.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MKC / 02', title: 'Middle School Math', note: 'Ratio, percent, integers, equations and geometry for the years before high school, taught so the reasoning holds up in Grade 9.' },
      { course: 'maths-through-coding', code: 'MKC / 03', title: 'Math Through Coding', note: 'Ages 10 to 15. Fractions, patterns and probability built as small Python programs, with no coding experience needed.' }
    ]
  },

  sections: [
    {
      id: 'checks', tint: 'tint', eyebrow: 'Where math is checked',
      h2: 'Provincial math checkpoints for Grades 1 to 8 in 2026 to 2027',
      lede: 'There is no national math test for Canadian children. Each province decides whether, when and how it checks elementary math. These are the checkpoints we could confirm on official pages on 22 October 2026; for any province not listed, ask your child\'s school.',
      body: [
        { kind: 'table', caption: 'Elementary math checkpoints by province, from the provincial and assessment-office pages read on 22 October 2026', head: ['Province', 'What the official source says', 'Grades', 'When'], rows: [
          ['Ontario (EQAO)', 'EQAO\'s provincial tests assess students\' literacy and numeracy (mathematics) knowledge and skills.', 'Grades 3 and 6, then Grade 9', 'EQAO lists May 4 to June 8, 2027 for Grades 3 and 6, and January 12 to February 5, 2027 for the Grade 9 math assessment'],
          ['Alberta (PATs)', 'Provincial Achievement Tests are "administered annually to all Alberta students in grades 6 and 9."', 'Grades 6 and 9', 'Alberta says the Grade 6 tests "occur in June"'],
          ['Alberta (format)', 'Students write the tests "in a digital environment rather than pencil and paper".', 'Grades 6 and 9', 'Each year'],
          ['Alberta (curriculum)', 'A new K to 6 mathematics curriculum was implemented in schools, filed by the province under 2022/2023; draft Grades 7 to 9 math is "ahead of mandatory implementation in September 2027".', 'K to 9', 'From September 2027 for Grades 7 to 9'],
          ['British Columbia', 'No elementary math test was confirmed on a primary page we could reach on 22 October 2026, so we print none.', 'Not confirmed', 'Ask the school'],
          ['Other provinces', 'Not checked for this page. We do not repeat dates from search summaries.', 'Not confirmed', 'Ask the school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read a checkpoint',
          left: [
            'An EQAO or PAT result describes one sitting in one year. It is useful as a map of what a child has and has not yet secured, and much less useful as a verdict on the child.',
            'We read a report alongside the child\'s own work. If a Grade 6 result shows a weakness with fractions, the question we ask is which earlier idea is missing, usually the meaning of a fraction as a share or a point on a number line, not how to drill the test format.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not teach to a test paper, promise a level or a mark, or run practice in the exact format of a provincial test. Our classes build the math those tests are trying to see.',
            'We are not connected with EQAO, Alberta Education or any school board. Dates come from their pages, and families should check those pages before each school year, because they can change.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO, the assessments</a>; <a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">Alberta, Provincial Achievement Tests</a>; <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta, curriculum: how we got here</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'coding', tint: 'deep', eyebrow: 'Math with code',
      h2: 'Why coding now turns up in elementary math',
      lede: 'Some Canadian curricula now place coding inside the math or design program. A parent who sees a loop on a math worksheet is not imagining it.',
      body: [
        { kind: 'table', caption: 'Coding in elementary math and design, quoted from the curriculum pages (read 22 October 2026)', head: ['Where', 'What the curriculum says'], rows: [
          ['Ontario math, every grade 1 to 8', 'Students "solve problems and create computational representations of mathematical situations using coding concepts and skills".'],
          ['Ontario math, Grade 1', 'Students write and run code, "including code that involves sequential events".'],
          ['Ontario math, Grade 6', 'Students work "by writing and executing efficient code".'],
          ['Ontario math, Grade 8', 'Code includes "the analysis of data in order to inform and communicate decisions".'],
          ['BC design (ADST 6)', 'The Computational Thinking module names "simple algorithms" and "visual programming".']
        ] },
        { kind: 'p', mt: true, html: 'Our view, labelled as ours: coding in math is useful when the program says something about the math. A loop that adds 3 each time is a pattern rule in motion; a program that counts how many times a die lands on six is a probability experiment. That is how we use it in class, and it is why the Snow Fort Wall example below ends with eight lines of Python. Children who enjoy that side can go further in our <a class="ag-inline-link" href="/courses/maths-through-coding">Math Through Coding</a> course.' },
        { kind: 'source', html: 'Sources: the Ontario curriculum content service behind <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario elementary mathematics (2020)</a>, and <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/6/core" rel="noopener" target="_blank">BC ADST 6</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'bands', tint: 'tint', eyebrow: 'Grade by grade',
      h2: 'What we teach in each grade band, Grades 1 to 8',
      lede: 'This is our own teaching plan, not a provincial document. Provinces order topics a little differently, so the teacher matches the order to the child\'s school after the first class.',
      body: [
        { kind: 'table', caption: 'Our grade-band plan for Canadian children (ours)', head: ['Band', 'The big ideas we secure', 'What it looks like in class'], rows: [
          ['Grades 1 and 2', 'Counting with meaning, place value to 100 and beyond, adding and subtracting by making tens', 'Ten-frames on screen, number lines drawn together, short spoken problems about real things the child can picture'],
          ['Grades 3 and 4', 'Multiplication as equal groups and arrays, early fractions as fair shares, measuring length and time', 'Building arrays, folding paper strips into halves and quarters, explaining a method out loud before writing it'],
          ['Grades 5 and 6', 'Fractions, decimals and percent as one family, area and volume, first patterns with rules', 'Moving between a picture, a table and a rule; estimating before calculating; checking with a second method'],
          ['Grades 7 and 8', 'Ratio and rate, integers, linear patterns and equations, data and probability', 'Writing a rule from a pattern, solving it backwards, and testing it with a few lines of code']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Number sense first', p: 'Mental arithmetic and estimation appear in every class, so a calculator becomes a check rather than a crutch.' },
          { h3: 'Words before symbols', p: 'A child explains what a problem is asking in their own words before any working goes on the page.' },
          { h3: 'Two ways to know', p: 'Every answer gets a second check: a picture, a reverse calculation or a sensible estimate.' }
        ] }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'Two worked examples',
      h2: 'Two worked examples from our classes, labelled ours',
      lede: 'We wrote both problems for our students. The first is for Grades 4 and 5, the second for Grades 7 and 8. Each shows the same habit at a different age: see the situation, then describe it in more than one way.',
      body: [
        { kind: 'p', html: '<b>Worked example 1 (Grades 4 and 5): Canoe Water Share.</b> Four paddlers share 3 litres of drinking water equally on a canoe day. How much does each paddler get?' },
        { kind: 'ol', items: [
          '<b>Picture it.</b> Draw 3 bottles, one litre each. Four people cannot share one whole bottle each, so cut every bottle into 4 equal parts. Each part is one quarter of a litre.',
          '<b>Share it out.</b> There are 3 bottles times 4 parts, which is 12 quarters. Twelve quarters shared among 4 paddlers is 3 quarters each.',
          '<b>Name the answer.</b> Each paddler gets three quarters of a litre. The child writes it as 3/4 L and then, because 1 litre is 1000 mL, as 750 mL.',
          '<b>See the pattern.</b> 3 litres among 4 people gave 3/4. The teacher asks what 5 litres among 4 people would give. The child predicts 5/4, which is one and a quarter litres, and checks it with the bottle picture.',
          '<b>Say the rule.</b> Sharing a things equally among b people gives a/b each. The fraction bar means "shared among", which is the idea Grade 6 division of fractions will lean on later.'
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 2 (Grades 7 and 8): Snow Fort Wall.</b> A fort wall is built in stages. Wall 1 uses 5 blocks, wall 2 uses 8 blocks, wall 3 uses 11 blocks, and every wall adds the same number of blocks as the one before. How many blocks does wall 20 use, and which wall uses exactly 92 blocks?' },
        { kind: 'table', caption: 'The Snow Fort Wall as a table (our example)', head: ['Wall number (n)', '1', '2', '3', '4', '10', '20'], rows: [
          ['Blocks', '5', '8', '11', '14', '32', '62']
        ] },
        { kind: 'ol', items: [
          '<b>Find what changes.</b> The blocks go up by 3 each time, so 3 belongs next to n in the rule.',
          '<b>Find what stays.</b> 3 times 1 is 3, but wall 1 has 5 blocks, so 2 more blocks are always there. The rule is blocks = 3n + 2.',
          '<b>Test the rule.</b> Wall 4: 3 times 4 plus 2 is 14, which matches the table. Wall 20: 3 times 20 plus 2 is 62.',
          '<b>Work backwards.</b> For 92 blocks, take away the 2 that are always there (90) and share by 3: wall 30. Check: 3 times 30 plus 2 is 92.',
          '<b>Let a program check it.</b> The short program below grows the wall step by step and then searches for 92 blocks. It agrees with the rule.'
        ] },
        { kind: 'code', label: 'Snow Fort Wall &middot; our Python check', lang: 'python', code: WALL, note: 'We ran this under Python 3 on 22 October 2026. The loop is the "add 3 each time" picture; the rule 3n + 2 is the shortcut. A child who can explain why both give the same numbers understands linear patterns, which is the base for Grade 9 algebra.' },
        { kind: 'code', label: 'What the program prints', lang: 'text', code: WALL_OUT },
        { kind: 'two', mt: true,
          leftH3: 'Why one situation, three ways',
          left: [
            'A table shows what happens, a picture shows why, and a rule lets a child jump straight to wall 20 or wall 30. Children who only ever see the rule forget it. Children who build it from the table can rebuild it when they forget.',
            'This is the lesson family behind our elementary teaching: one situation, three faces.'
          ],
          rightH3: 'The mistakes these examples catch',
          right: [
            'In the canoe problem, many children answer 4/3 because they divide the larger number by the smaller. The bottle picture shows at once that each person gets less than one litre.',
            'In the fort problem, the common slip is the rule 5n, because wall 1 has 5 blocks. Testing it on wall 2 gives 10 instead of 8, which is why we always test a rule on a second case.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Eight practice problems for Grades 1 to 8, written by us',
      lede: 'Two problems for each grade band, with answers. They are our own problems, not copied from any provincial test or contest. Ask your child to explain each answer out loud; the explanation tells you more than the number.',
      body: [
        { kind: 'table', caption: 'Our practice set with answers (ours)', head: ['Band', 'Problem', 'Answer'], rows: [
          ['Grades 1 and 2', 'A bus has 9 children on it. At the next stop 6 more get on. How many children are on the bus? Show it by making a ten.', '15 (9 and 1 make 10, then 5 more)'],
          ['Grades 1 and 2', 'Sam has 42 hockey cards in tens and ones. How many tens and how many ones?', '4 tens and 2 ones'],
          ['Grades 3 and 4', 'Chairs are set out in 6 rows of 7. How many chairs? Draw the array, then find a second way to count.', '42 (for example 5 rows of 7 is 35, plus one more row of 7)'],
          ['Grades 3 and 4', 'A ribbon is folded into 4 equal parts. Three parts are blue. What fraction is not blue?', 'One quarter (1/4)'],
          ['Grades 5 and 6', 'Write 3/5 as a decimal and as a percent. Which is larger, 3/5 or 0.58?', '0.6 and 60 percent; 3/5 is larger'],
          ['Grades 5 and 6', 'A garden bed is 3.5 m long and 2 m wide. What is its area? Estimate first.', 'Estimate about 7; exact 7 square metres'],
          ['Grades 7 and 8', 'A pattern goes 4, 9, 14, 19. Write a rule for term n and find term 50.', '5n minus 1; term 50 is 249'],
          ['Grades 7 and 8', 'The temperature is minus 8 degrees at 7 a.m. and rises 3 degrees each hour. When does it reach 4 degrees?', 'After 4 hours, at 11 a.m.']
        ] },
        { kind: 'p', mt: true, html: 'If a child gets an answer right but cannot say why, we treat the problem as not yet learned. If a child gets it wrong but explains a sensible method with one slip, we treat it as nearly there. That difference shapes what the next class covers.' }
      ]
    },
    {
      id: 'challenges', tint: 'deep', eyebrow: 'Free and low-pressure',
      h2: 'Math challenges a younger Canadian child can try',
      lede: 'Several Canadian organisers run math challenges for children well before high school. The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo says plainly: "Our contests are not tests or exams. There is no passing or failing score."',
      body: [
        { kind: 'table', caption: 'Challenges and free resources for Grades 1 to 8, from the organisers\' pages (read 22 October 2026)', head: ['Challenge', 'Who it is for', 'What the organiser publishes'], rows: [
          ['CEMC Problem of the Week', 'Grades 3 to 12', 'Problems "e-mailed to educators for use with their students"; "New problems are sent every Thursday, and their solutions are sent one week later."'],
          ['CEMC Beaver Computing Challenge, Grade 5/6', '"Students in Grade 6 or below"', '"12 multiple-choice questions out of a total of 60"; 45 minutes; it needs only "familiarity with concepts covered in the mathematics curriculum across all Canadian provinces". The 2026 window runs Monday, November 9, 2026 to Friday, November 20, 2026.'],
          ['CEMC Gauss Contest', '"Students in Grades 7 and 8." "Motivated students in lower grades are welcome to write the contest."', '"25 multiple-choice questions." in 60 minutes; Monday, May 10, 2027 to Friday, May 21, 2027.'],
          ['CEMC Courseware', 'Grades 4 to 12', 'Lessons in math and computer science; "No registration is required to access these resources."'],
          ['Math Kangaroo (as described by a host centre at UFV)', 'Grades 1 to 12, in versions for grades 1-2, 3-4, 5-6, 7-8, 9-10 and 11-12', 'Grades 1 and 2: 18 questions in 45 minutes. Grades 3 and 4: 24 questions in 60 minutes. Grades 5 to 12: "30 multiple-choice questions, arranged in increasing difficulty, to be answered in 75 minutes."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How entry works',
          left: [
            'CEMC contests are ordered by schools. CEMC\'s own wording is that "all students must participate through their school." So the first step for the Beaver Computing Challenge or Gauss is a conversation with your child\'s teacher, ideally in September or October.',
            'Math Kangaroo is run through host centres; the page we read is one centre\'s page at the University of the Fraser Valley, not the national organiser\'s, so check the centre nearest you for its own dates and rules.'
          ],
          rightH3: 'How we use challenges',
          right: [
            'For a child in Grades 3 to 6, we use a weekly problem as a short puzzle at the end of class, chosen to stretch a topic just taught. For Grades 7 and 8, some families aim for Gauss, and our <a class="ag-inline-link" href="/courses/waterloo-math-contests-gauss-to-euclid-course">Waterloo Math Contests course</a> has a Gauss track.',
            'We never reproduce an organiser\'s past problems. We link to the originals and write our own practice, as on this page.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potw" rel="noopener" target="_blank">CEMC Problem of the Week</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">Beaver Computing Challenge</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/gauss" rel="noopener" target="_blank">Gauss Contest</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>, and the <a class="ag-inline-link" href="https://ufv.ca/math/contests/canadian-math-kangaroo" rel="noopener" target="_blank">UFV Canadian Math Kangaroo page</a>, read 22 October 2026. Modern Age Coders is not connected with CEMC, the University of Waterloo or Math Kangaroo.' }
      ]
    },
    {
      id: 'month', tint: 'tint', eyebrow: 'A month of classes',
      h2: 'What a month of math classes looks like',
      lede: 'Our plan for a typical month, with two live classes a week. The order of topics follows the child\'s school year; the rhythm stays the same.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1, first class:</b> a short placement chat and a few problems at the child\'s grade, to find the earliest idea that is not yet secure. The teacher then tells parents what the chat showed.',
          '<b>Week 1, second class:</b> rebuild that idea with pictures and objects on screen, even if it belongs to an earlier grade. Five minutes of mental math to start.',
          '<b>Week 2:</b> bring the idea up to the child\'s current grade topic. The child explains a method out loud before writing it, and checks one answer a second way.',
          '<b>Week 3:</b> mixed practice, including one problem written in words that hides the operation, so the child has to decide what to do rather than follow a heading.',
          '<b>Week 4:</b> a short review problem set, a puzzle to finish, and a short talk with parents about what is secure, what is nearly there and what comes next month.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Homework, lightly', p: 'Ten to fifteen minutes between classes for younger children. More is rarely better at this age.' },
          { h3: 'School first', p: 'If a school unit is coming up, the teacher can bring it forward, so class supports what happens in the classroom.' },
          { h3: 'No screens to stare at', p: 'Children draw on paper and hold it up to the camera. Thinking happens with a pencil, not a slideshow.' }
        ] }
      ]
    },
    {
      id: 'clocks', tint: 'deep', eyebrow: 'Across the time zones',
      h2: 'One class, six Canadian clocks',
      lede: 'Our classes run in every Canadian time zone. To show how one slot reads across the country, here is an example of a Saturday class set at 10:00 in Toronto. It is an illustration only, not a batch time we advertise; every family picks its own slot.',
      body: [
        { kind: 'table', caption: 'A 10:00 Toronto class in local time, our conversion from the 2026 UTC offsets (tz database 2026e)', head: ['City', 'Winter, from 1 November 2026', 'Summer, from 14 March 2027'], rows: [
          ['Toronto, Ottawa, Montreal (ET)', '10:00', '10:00'],
          ['Winnipeg (Manitoba, UTC-5 all year)', '10:00', '9:00'],
          ['Calgary, Edmonton, Regina (UTC-6 all year)', '9:00', '8:00'],
          ['Vancouver, Victoria (BC, UTC-7 all year)', '8:00', '7:00'],
          ['Halifax, Moncton (AT)', '11:00', '11:00'],
          ['St. John\'s (NT)', '11:30', '11:30']
        ] },
        { kind: 'p', mt: true, html: 'The surprise for many families: from 1 November 2026 Manitoba stays on UTC-5 all year and BC stays on UTC-7, so when Ontario moves its clocks on 14 March 2027, a Winnipeg or Vancouver family\'s class moves an hour earlier on their own clock. We confirm times again with every family at both changes. For younger children we usually suggest a weekend morning or an early evening slot that leaves time for dinner and bed.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a child starts',
    h2: 'Four stages of a young mathematician',
    lede: 'Our stages, used to place a child honestly in the first class, whatever their grade.',
    table: { caption: 'From counting to reasoning (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Counting', 'Gets answers by counting one at a time, often on fingers, and is unsure what a written sum means'],
      ['2. Calculating', 'Follows taught methods accurately but cannot say why they work, and stalls on a word problem'],
      ['3. Explaining', 'Chooses a method, explains it, and checks an answer with a picture or estimate'],
      ['4. Reasoning', 'Spots structure, writes a rule, works backwards, and enjoys a problem with no obvious first step']
    ] },
    left: { h3: 'For parents', ps: [
      'Many children sit at stage 2 for years because school marks reward accurate methods. Stage 3 is where confidence starts, and where most of our teaching time goes.',
      'A child can be at stage 4 in one topic and stage 2 in another. That is normal, and the placement chat finds it.'
    ] },
    right: { h3: 'For children', ps: [
      'If you can explain it to someone younger, you know it.',
      'A wrong answer you can explain is more useful than a right answer you guessed.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for children from Kindergarten to Grade 8',
    lede: 'Each course is taught live online by a regular teacher, in a batch or one to one, for children anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'The early years', sub: 'Kindergarten to Grade 5', courses: [
        { code: 'MKC / EARLY / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Ages 4 to 7, counting and shapes with real objects.' },
        { code: 'MKC / EARLY / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Math for Kids', blurb: 'Number sense for ages 5 to 10, not tricks.' },
        { code: 'MKC / EARLY / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and Mental Math', blurb: 'Bead work that turns into calculation in the head.' }
      ] },
      { num: 'II', h3: 'The middle years', sub: 'Grades 5 to 8', courses: [
        { code: 'MKC / MID / 01', slug: 'middle-school-math-competitions-course', title: 'Middle School Math Competitions', blurb: 'Harder problems for children who want more.' },
        { code: 'MKC / MID / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'A Gauss track for Grades 7 and 8.' },
        { code: 'MKC / MID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and step-by-step thinking.' }
      ] },
      { num: 'III', h3: 'Math meets code', sub: 'For builders', courses: [
        { code: 'MKC / CODE / 01', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'Turtle drawings and games that use real math.' },
        { code: 'MKC / CODE / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Block coding from age 6, the start of computational thinking.' },
        { code: 'MKC / CODE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High School Math', blurb: 'The next step after Grade 8.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math classes that fit a Canadian school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Early-evening classes after school, converted to your province\'s clock.' },
      { time: 'Weekends', l: 'Morning classes, when younger children are freshest.' },
      { time: '1-on-1', l: 'A teacher to your child alone, at a time you choose.' }
    ],
    cells: [
      { h3: 'Pencil and paper', p: 'Children work on paper and show it to the camera.' },
      { h3: 'Pictures first', p: 'Arrays, number lines and bar models before symbols.' },
      { h3: 'One teacher', p: 'The same teacher each week, who knows your child.' },
      { h3: 'Parents in the loop', p: 'Ask the teacher at any time what is secure and what is next.' },
      { h3: 'Province-aware', p: 'Topic order matched to your child\'s school.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or a teacher alone.' }
    ]
  },

  projectsH2: 'Work our students have made',
  projectsLede: 'Math and coding grow together in our classes. A few things our learners have built are below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote in their Google reviews, quoted as they wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'The monthly fee covers eight live classes with the same teacher. You pay one month at a time, with nothing to sign for the school year, and you can pause over the summer.',
    free: ['A free first class', 'A placement chat with your child', 'No card details needed'],
    group: ['Fifteen to twenty children in a batch', 'Grouped by grade and level', 'Eight live classes a month', 'Paid monthly'],
    one: ['A teacher to your child alone', 'Paced to your child', 'Built around school topics']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'Math classes for kids: common questions',
    items: [
      { q: 'What grades do your math classes for kids cover?', a: 'Grades 1 to 8, roughly ages 6 to 14, with an early-years course for younger children. Elementary Math covers Grades 1 to 5 in three levels and Middle School Math covers the years before high school. Each child is placed after a short chat in the first class.' },
      { q: 'Do you follow my province\'s math curriculum?', a: 'We teach the math that every provincial curriculum is built on, and the teacher matches the order of topics to your child\'s school after the first class. Provinces set their own curricula, so tell us your province and grade and we will line the classes up with them.' },
      { q: 'Will this help with EQAO in Ontario?', a: 'EQAO says its tests assess literacy and numeracy knowledge and skills, and it lists May 4 to June 8, 2027 for the Grade 3 and Grade 6 assessments. We teach the math underneath rather than the test format, and we make no promise about a result.' },
      { q: 'What about the Alberta Provincial Achievement Tests?', a: 'Alberta says PATs are administered every year to students in Grades 6 and 9, written digitally, with the Grade 6 tests in June. Our classes build the Grade 6 math that sits under them; we do not run practice in the test\'s own format.' },
      { q: 'Is my child too young for online math classes?', a: 'Six-year-olds do well in short, lively online classes with a parent nearby for the first few weeks. Very young children work with real objects and drawings at home while the teacher guides on screen.' },
      { q: 'Is coding part of your math classes?', a: 'In the middle grades it can be, because some curricula, such as Ontario\'s, now include coding inside math. Our Math Through Coding course goes further for children aged 10 to 15 who enjoy building programs.' },
      { q: 'Can my child write CEMC math contests through you?', a: 'No. CEMC says all students must participate through their school, so a teacher has to order the contest. We help children prepare, for example for Gauss in Grades 7 and 8, and they write at school.' },
      { q: 'How big are the batches?', a: 'A batch has fifteen to twenty children, grouped by grade and level, with one regular teacher. If you prefer, a one-to-one plan gives your child a teacher alone.' },
      { q: 'When are classes held for families across Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm times in your own province\'s clock, and again when the clocks change.' },
      { q: 'How do I know the classes are working?', a: 'Ask the teacher at any point what is secure, what is nearly there and what comes next. The clearest sign is a child who explains a method in their own words and checks an answer without being asked.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families with children who like numbers, puzzles or building things.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our pages for families across Canada.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'One-to-one math help through high school.' },
      { href: '/gauss-contest-preparation', label: 'Gauss Contest preparation', p: 'The CEMC contest for Grades 7 and 8.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The full ladder of Waterloo math contests.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian time zones in 2026', p: 'How the 2026 clock changes affect class times.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'For families in Canada\'s largest province.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'For families on Alberta\'s single time zone.' },
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'For families on BC\'s year-round clock.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a relaxed placement chat and a few problems at your child\'s grade. By the end, the teacher can tell you where your child is strong, which earlier idea needs rebuilding, and what the first month would cover.',
    readFirst: 'Want to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live class, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'Our teachers teach from India over live video, so there is no centre to drive to in your city. Reaching us on WhatsApp is quickest from any province.',
    formNote: 'There is no charge for the first class and no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Math', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/gauss-contest-preparation', label: 'Gauss Contest preparation' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/courses/maths-through-coding', label: 'Math Through Coding' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by province' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Picture it, table it, rule it'
  },

  personalityCss: `
.ag-root.ag-mkc .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mkc .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mkc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mkc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mkc .ag-steps { gap: 0.9rem; }
.ag-root.ag-mkc .ag-band-head h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'EQAO assessments page (Grades 3 and 6 window May 4 to June 8, 2027; Grade 9 January 12 to February 5, 2027); Alberta Provincial Achievement Tests page (Grades 6 and 9, Grade 6 in June, digital) and curriculum history page (new K to 6 math, Grades 7 to 9 mandatory September 2027); Ontario elementary mathematics (2020) C3 coding expectations for Grades 1, 6 and 8; BC ADST 6 Computational Thinking; CEMC POTW, BCC, Gauss, Courseware and How contests work; the UFV Canadian Math Kangaroo host-centre page. All read on 22 October 2026 and saved under keyword-research-2026-09/ca/src/.',
    localProject: 'Two worked examples written by us: Canoe Water Share (Grades 4 and 5, 3 litres among 4 paddlers is 3/4 L or 750 mL, extended to 5/4) and Snow Fort Wall (Grades 7 and 8, blocks = 3n + 2, wall 20 is 62, 92 blocks is wall 30) with a Python check run on 22 October 2026; an eight-problem practice set with answers; a grade-band teaching table; a month plan; a clock table converting one 10:00 Toronto class to five other zones in winter 2026 to 2027 and summer 2027. Lesson family: one situation, three faces.',
    requiredMentions: ['Canoe Water Share', 'Snow Fort Wall', 'blocks = 3n + 2', '92 blocks makes wall 30', 'Five minutes of mental math to start', 'Twelve quarters shared among 4 paddlers', 'Sharing a things equally among b people gives a/b each', 'May 4 to June 8, 2027 for Grades 3 and 6', 'One class, six Canadian clocks', 'Words before symbols'],
    sources: [
      { claim: 'EQAO assesses literacy and numeracy; Grade 3 and 6 window May 4 to June 8, 2027; Grade 9 window January 12 to February 5, 2027.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Alberta PATs administered annually in Grades 6 and 9; Grade 6 tests in June; written digitally.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Alberta new K to 6 math implemented (2022/2023); draft Grades 7 to 9 math mandatory from September 2027.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'Ontario elementary math C3 coding expectations, Grades 1, 6 and 8.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'CEMC Beaver Computing Challenge Grade 5/6 format, dates and math-only prerequisite.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC Gauss Contest audience, dates and format; contests are not tests.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'CEMC Problem of the Week for Grades 3 to 12, weekly on Thursdays.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'Math Kangaroo grade versions and timings, as described by the UFV host centre.', url: 'https://ufv.ca/math/contests/canadian-math-kangaroo' }
    ],
    rejectedClaims: [
      'Any promise that classes raise an EQAO or PAT result: refused; the page says we make no promise about a result.',
      'A BC elementary math assessment: not confirmed on a reachable primary page (curriculum.gov.bc.ca refused connections on 22 October 2026), so none is printed.',
      'Checkpoints for other provinces and territories: not checked, so not printed.',
      'Math Kangaroo fees from the UFV page: they are the 2026 figures, so not used.',
      'Any CEMC or Math Kangaroo past problem: never reproduced; the practice set and worked examples are ours.',
      'Combined contestant totals across CEMC contests: not printed.',
      'Any affiliation with EQAO, Alberta Education, CEMC or Math Kangaroo: none, and the page says so.'
    ]
  }
};
