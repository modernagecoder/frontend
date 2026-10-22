'use strict';
// Ontario Grade 6 math and coding help (ag- grade door; Canada cluster Plan 2, row 9).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/ontario-grade-6-math-and-coding-help/;
// facts-schools-contests.md rows 9, 10, 14, 15, 53, 137 to 139):
//  - Ontario elementary mathematics (2020), Grade 6 strands, ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4:
//    strand titles A to F; B1.2 "read and represent integers"; B1.5 rounding "to the nearest tenth, hundredth, or whole number";
//    B2.2 "divisible by 2, 3, 4, 5, 6, 8, 9, and 10"; B2.3 "including 1%, 5%, 10%, 15%, 25%, and 50%"; B2.5 "add and subtract
//    fractions with like and unlike denominators"; B2.6 "including through the use of factor trees"; C1.1 "specify which growing
//    patterns are linear"; C2.4 "solve inequalities that involve two operations and whole numbers up to 100"; D1.5 "determine the
//    range as a measure of spread"; D2.2 "determine and compare the theoretical and experimental probabilities of two independent
//    events happening"; E1.3 "plot and read coordinates in all four quadrants of a Cartesian plane"; E2.4 "determine the areas of
//    trapezoids, rhombuses, kites, and composite polygons"; C3.1 and C3.2 Grade 6 wording; notes: the flow chart sentence, "More
//    efficient code can reduce execution time and reduce computer storage space.", "The reverse flow chart that is used to solve
//    equations is not the same as the flow chart used in coding."; Grade 6 situations "grouping numbers using the divisibility
//    rules", "simulating probability situations", "identifying whether a growing pattern is linear".
//  - Science and Technology (2022), Grade 6 A2.1 "write and execute code in investigations and when modelling concepts".
//  - eqao.com/the-assessments/ (saved earlier the same day, ca/src/ontario/eqao-assessments.html): "Grade 6, Junior Division",
//    "Assessment of Reading, Writing and Mathematics", next administration "May 4 – June 8, 2027" (written on the page as
//    "May 4 to June 8, 2027"). eqao.com returned a Cloudflare 403 on later requests (BLOCKED-403-junior-division.html), so nothing
//    about the Grade 6 assessment format is claimed.
//  - cemc.uwaterloo.ca/contests/bcc: "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC."; "12
//    multiple-choice questions out of a total of 60 (Grade 5/6)."; "Time allowed for completion is 45 minutes."
// Our own material, labelled on the page: the divisibility program (run in Python 3; output pasted; checked against plain
// division for every whole number from 1 to 10,000 with 0 mismatches), its flow-chart steps, the twelve practice questions and
// worked answers (every number checked in Python), the week plan and the warning signs.
// Lesson family: rules as code (turn a math rule into a test, then make the test cheaper).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DIV = `# Grade 6: which divisibility tests does a number pass? (ours)
def digit_sum(n):
    total = 0
    for d in str(n):
        total = total + int(d)
    return total

def passes(n):
    tests = []
    last = n % 10
    if last % 2 == 0:
        tests.append(2)
    if digit_sum(n) % 3 == 0:
        tests.append(3)
    if n % 100 % 4 == 0:              # last two digits
        tests.append(4)
    if last == 0 or last == 5:
        tests.append(5)
    if 2 in tests and 3 in tests:      # 6 needs both: no new work
        tests.append(6)
    if n % 1000 % 8 == 0:             # last three digits
        tests.append(8)
    if digit_sum(n) % 9 == 0:
        tests.append(9)
    if last == 0:
        tests.append(10)
    return tests

for n in [2520, 7416, 1155]:
    print(n, "passes", passes(n))`;

const Q9 = `count = 0
for n in range(1, 51):
    if n % 6 == 0:
        count = count + 1
print(count)`;

const Q10 = `a = 0
n = 6
while n <= 50:
    a = a + 1
    n = n + 6
print(a)`;

const Q11 = `x = 0
while 3 * x + 5 < 32:
    x = x + 1
print(x - 1)`;

const SRC_G6 = '<a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario&rsquo;s Grade 6 mathematics curriculum (2020)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'GRADE 6 ONTARIO', blurb: 'Grade 6 math and coding in Ontario together: the strands, the Grade 6 C3.1 wording, a divisibility program and twelve practice questions of our own.' },
  slug: 'ontario-grade-6-math-and-coding-help',
  code: 'ong',
  accent: '#0C5235',
  accentRationale: 'Ontario Grade 6 math and coding: a deep pine green, #0C5235, allocated by the Canada Plan 2 grid; 6.8 RGB units from the nearest site accent (#0B4C32) and at least 14 from every other Canada accent; contrast 8.71 on the paper #FBF8F2 and 7.50 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Ontario Grade 6 math and coding help',
  title: 'Grade 6 Math and Coding Help, Ontario: Strands and Practice',
  description: 'Ontario Grade 6 math and coding in one place: what each strand asks, the Grade 6 C3.1 coding wording, a worked program and twelve practice questions with answers.',
  ogDescription: 'Grade 6 is where Ontario math asks for efficient code. This guide pairs the Grade 6 strands with coding, works one program from rule to code, and gives twelve original questions with full answers.',
  twitterDescription: 'Grade 6 math and coding in Ontario, with a worked program and twelve practice questions.',
  pageName: 'Ontario Grade 6 Math and Coding Help',
  webPageDescription: 'A guide for Ontario Grade 6 families to the math curriculum strands and the coding expectations, with a worked divisibility program, twelve original practice questions and answers, and a plan for the year.',
  courseDescription: 'Live online Grade 6 math and coding help for Ontario children, in Python or Scratch, taught in a batch or one to one by a regular teacher alongside the school program.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'Grade 6 math and coding',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#strands', label: 'Grade 6 math' },
    { href: '#coding', label: 'Grade 6 coding' },
    { href: '#worked', label: 'Worked program' },
    { href: '#practice', label: 'Practice' },
    { href: '#year', label: 'The year' }
  ],
  eyebrow: 'Ontario &middot; Grade 6 &middot; math with coding',
  h1: 'Grade 6 math and coding help for Ontario students',
  lede: 'Grade 6 is a big year in Ontario math. Integers, percents, divisibility rules, four-quadrant graphs and probability all arrive, and the coding expectation adds a new word, efficient. The good news is that each one helps the other: a divisibility rule is easier to remember once you have written it as a test a computer runs. This page shows how, with a program we wrote and twelve practice questions of our own.',
  secondaryCta: { href: '#practice', label: 'Go to the twelve questions' },
  wa: 'Hello Modern Age Coders, my child is in Grade 6 in Ontario and needs help with math and the coding part of it. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students &middot; Math and Python together',
  spec: [
    ['For', 'Ontario Grade 6, ages 10 to 12'],
    ['Covers', 'All five math strands, plus coding'],
    ['Code in', 'Python, or Scratch if the class uses it'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Booked in Eastern time'],
    ['Teacher', 'One regular teacher'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Grade 6 math in Ontario covers number, algebra, data, spatial sense and financial literacy, and its coding expectation C3.1 asks students to write &ldquo;efficient code&rdquo; with conditional statements. Help works well when the two are taught together. Modern Age Coders does that live online, in a batch or one to one, through our Math Through Coding course.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Grade 6 student',
    lede: 'One for the math itself, one that teaches the math through Python, and one for children who want more coding.',
    items: [
      { course: 'maths-through-coding', code: 'ONG / 01', title: 'Math Through Coding', note: 'For ages 10 to 15. Each unit is a math topic that the student turns into a working Python program, which is what Grade 6 C3.1 describes.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ONG / 02', title: 'Middle School Math', note: 'Arithmetic to pre-algebra, geometry and statistics, with problem-solving strategies taught by name.' },
      { course: 'python-ai-kids-masterclass', code: 'ONG / 03', title: 'Python for Kids', note: 'Ages 9 to 12. A first text language: variables, loops, conditions, then turtle drawings and small games.' }
    ]
  },

  sections: [
    {
      id: 'strands', tint: 'tint', eyebrow: 'The Grade 6 curriculum',
      h2: 'What Grade 6 math covers in Ontario, strand by strand',
      lede: 'The 2020 curriculum organises Grade 6 into six strands. Strand A, social-emotional learning skills and the mathematical processes, runs through the other five. The table picks out the expectations that most often surprise families, with the curriculum&rsquo;s own words in the middle column.',
      body: [
        { kind: 'table', caption: 'Grade 6 math expectations that families ask about, quoted from the Ontario curriculum (2020), read 22 October 2026; the right column is ours', head: ['Strand', 'In the curriculum&rsquo;s words', 'Where coding helps (ours)'], rows: [
          ['B. Number', 'Divisibility rules &ldquo;to determine whether numbers are divisible by 2, 3, 4, 5, 6, 8, 9, and 10&rdquo;; percents &ldquo;including 1%, 5%, 10%, 15%, 25%, and 50%&rdquo;; prime factors &ldquo;including through the use of factor trees&rdquo;', 'Each rule becomes an <code>if</code> test; the program checks the rule against real division'],
          ['B. Number', '&ldquo;read and represent integers&rdquo;; rounding decimals &ldquo;to the nearest tenth, hundredth, or whole number&rdquo;; &ldquo;add and subtract fractions with like and unlike denominators&rdquo;', 'Printing a number line of integers; comparing a rounded value with the original'],
          ['C. Algebra', '&ldquo;specify which growing patterns are linear&rdquo;; &ldquo;solve inequalities that involve two operations and whole numbers up to 100&rdquo;', 'A loop that generates a pattern; a loop that tries values until an inequality fails'],
          ['D. Data', '&ldquo;determine the range as a measure of spread&rdquo;; &ldquo;determine and compare the theoretical and experimental probabilities of two independent events happening&rdquo;', 'Simulating two dice a thousand times and comparing with the fraction worked on paper'],
          ['E. Spatial Sense', '&ldquo;plot and read coordinates in all four quadrants of a Cartesian plane&rdquo;; &ldquo;determine the areas of trapezoids, rhombuses, kites, and composite polygons&rdquo;', 'Moving a sprite by translations and printing its new coordinates'],
          ['F. Financial Literacy', 'Methods of payment, financial goals, and interest rates and fees', 'Mostly discussion and planning; we teach it from the class materials']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The hard parts, from our classes',
          left: [
            'Negative numbers trip up more Grade 6 students than anything else, because the rules that worked for whole numbers suddenly need a direction. Fractions with unlike denominators are a close second, usually because the idea of a common denominator was memorised in Grade 5 rather than understood.',
            'Percents are the pleasant surprise. Once a child can find 10% by moving the decimal point, 5%, 15% and 25% follow quickly, and the curriculum asks for exactly that mental math.'
          ],
          rightH3: 'Why the strands connect',
          right: [
            'The Grade 6 strands are not separate units in real life. A probability simulation (Data) needs fractions and percents (Number) and a loop with a condition (Algebra, C3). A translation on the grid (Spatial Sense) needs integers.',
            'That is why we teach Grade 6 math and Grade 6 coding in the same lesson. A child who writes the code for a dice experiment does fraction work, percent work and loop work at once, and sees why each one matters.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_G6 + ', Grade 6 strands and specific expectations, pulled on 22 October 2026 from the data service that feeds the ministry&rsquo;s curriculum website. We teach independently and are not linked to the ministry or to any board.' }
      ]
    },
    {
      id: 'coding', tint: 'deep', eyebrow: 'Grade 6 coding',
      h2: 'The Grade 6 coding expectation: efficient code with conditions',
      lede: 'Grade 6 C3.1 asks students to solve math problems &ldquo;by writing and executing efficient code, including code that involves conditional statements and other control structures&rdquo;. C3.2 asks them to read and alter code and describe how changes affect &ldquo;the outcomes and the efficiency of the code&rdquo;. Grade 5 asked for the conditions; Grade 6 adds the efficiency.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Plan with a flow chart', p: 'The Grade 6 notes say: &ldquo;A flow chart can be used to plan and organize thinking. The symbols used in flow charts have specific meanings, including those that represent a process, a decision, and program input/output.&rdquo; A diamond for each <code>if</code>, a box for each step.' },
          { h3: 'Two different flow charts', p: 'The notes add a warning worth knowing: &ldquo;The reverse flow chart that is used to solve equations is not the same as the flow chart used in coding.&rdquo; Children meet both in Grade 6 and often mix them up.' },
          { h3: 'Why efficiency matters', p: 'In the curriculum&rsquo;s words: &ldquo;More efficient code can reduce execution time and reduce computer storage space.&rdquo; For a Grade 6 child, that means fewer steps doing the same job, and reusing an answer already worked out.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Grade 6 coding tasks are about',
          left: [
            'The curriculum lists possible math situations for Grade 6 coding. Among them are &ldquo;grouping numbers using the divisibility rules&rdquo;, &ldquo;simulating probability situations&rdquo; and &ldquo;identifying whether a growing pattern is linear&rdquo;. Every one is a math topic from another strand, done with code.',
            'So a Grade 6 coding task is rarely a game for its own sake. It is a math question where the program does the repetitive part and the child does the thinking: which rule to test, in which order, and how to know the answer is right.'
          ],
          rightH3: 'Coding in Grade 6 science too',
          right: [
            'Science class carries its own coding line. Expectation A2.1 of the 2022 Science and Technology curriculum says Grade 6 students will &ldquo;write and execute code in investigations and when modelling concepts&rdquo;. In practice that might be a program that reads a sensor or asks the user for a value, then reports a result.',
            'The same skills carry across: variables, a loop, a decision. A child who is comfortable with conditions in math will find the science tasks familiar, even when the class uses a different tool.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'A worked program, ours',
      h2: 'From divisibility rules to an efficient program',
      lede: 'Our own worked example, built the way we teach it. The math is Grade 6 B2.2, the divisibility rules for 2, 3, 4, 5, 6, 8, 9 and 10. The coding is Grade 6 C3.1: conditional statements, and one deliberate efficiency.',
      body: [
        { kind: 'ol', items: [
          '<b>Write each rule in words first.</b> 2: the last digit is even. 3: the digit sum divides by 3. 4: the last two digits divide by 4. 5: the last digit is 0 or 5. 6: it passes both 2 and 3. 8: the last three digits divide by 8. 9: the digit sum divides by 9. 10: the last digit is 0.',
          '<b>Spot the work that repeats.</b> The digit sum is needed twice, for 3 and for 9, so it becomes its own small function.',
          '<b>Draw the flow chart.</b> One decision diamond per rule, each with a yes branch that adds the divisor to a list.',
          '<b>Find the free answer.</b> The test for 6 needs no new arithmetic at all: if 2 and 3 are already on the list, 6 goes on too. That reuse is the efficiency.',
          '<b>Code it and run it on three numbers</b> chosen to behave differently: one that passes everything, one that passes some, one that passes few.',
          '<b>Check the rules against real division.</b> We had the computer compare our rule-based list with plain division for every whole number from 1 to 10,000. There were no mismatches.'
        ] },
        { kind: 'code', label: 'Python &middot; divisibility tests (ours)', lang: 'python', code: DIV, note: 'Output: <code>2520 passes [2, 3, 4, 5, 6, 8, 9, 10]</code>, <code>7416 passes [2, 3, 4, 6, 8, 9]</code> and <code>1155 passes [3, 5]</code>. The digit sum of 7416 is 18, which divides by both 3 and 9; its last three digits, 416, are 8 times 52.' },
        { kind: 'two', mt: true,
          leftH3: 'Where the efficiency is',
          left: [
            'Testing 6 by dividing would be one more division. Testing it from the list costs nothing, because the program already knows the answers for 2 and 3. The same idea, keeping an answer you have already worked out, is what makes much bigger programs fast.',
            'There is a second, quieter lesson. The digit sum is calculated twice in this version, once for 3 and once for 9. Ask the student to alter the code so it is calculated only once and stored in a variable. That is a C3.2 task: change the code, then explain the effect on efficiency.'
          ],
          rightH3: 'Where the math is',
          right: [
            'Why does the digit-sum rule work? Because 10, 100 and 1,000 are each one more than a multiple of 9, so a number and its digit sum leave the same remainder when divided by 3 or 9. A Grade 6 student does not need the proof, but a curious one enjoys it.',
            'And why do 4 and 8 only look at the last digits? Because 100 is a multiple of 4 and 1,000 is a multiple of 8, so everything to the left cannot change the remainder. A computer could just divide; the rules are for people working by hand on a test without a calculator.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, ours',
      h2: 'Twelve Grade 6 math and coding practice questions',
      lede: 'These are our practice questions, written for this page and matched to the Grade 6 strands. They are not taken from EQAO, any school or any textbook. Questions 9 to 11 are short Python programs to read. Try each one on paper before checking the answers.',
      body: [
        { kind: 'ol', items: [
          '<b>Number.</b> Without dividing, decide whether 7,416 is divisible by 3, by 9 and by 8. Say which rule you used for each.',
          '<b>Number.</b> Find 15% of 240 in your head. Explain your steps.',
          '<b>Number.</b> At 7 a.m. the temperature in Thunder Bay was &minus;7&deg;C. By noon it was 5&deg;C. By how many degrees did it rise?',
          '<b>Number.</b> Round 4.6382 to the nearest tenth and to the nearest hundredth.',
          '<b>Number.</b> Add 2/3 and 1/4. Show the common denominator.',
          '<b>Number.</b> Use a factor tree to write 360 as a product of prime factors.',
          '<b>Algebra.</b> The pattern 4, 7, 10, 13 continues. Is it linear? Write a rule for the nth term and find the 20th term.',
          '<b>Algebra.</b> Find the whole-number solutions of 3x + 5 &lt; 32.'
        ] },
        { kind: 'code', label: 'Question 9 &middot; read the code', lang: 'python', code: Q9, note: 'What does this print? What question about the numbers 1 to 50 does it answer?' },
        { kind: 'code', label: 'Question 10 &middot; efficiency', lang: 'python', code: Q10, note: 'This prints the same number as Question 9. How many times does each loop run? Which is more efficient, and why?' },
        { kind: 'code', label: 'Question 11 &middot; inequality by code', lang: 'python', code: Q11, note: 'Predict the output. How does it connect to Question 8? Why does the last line subtract 1?' },
        { kind: 'p', mt: true, html: '<b>Question 12 &middot; spatial sense.</b> The point (&minus;3, 2) is translated 5 units right and 4 units down. Where does it land, and in which quadrant?' },
        { kind: 'p', html: '<b>Bonus, data.</b> Two fair dice are rolled. What is the theoretical probability of a sum of 7? In an experiment of 200 rolls a class got a sum of 7 forty times. What is the experimental probability, and why might the two differ? The six numbers 14, 9, 22, 9, 16 and 20 are a separate data set: find the mean, median, mode and range. <b>Bonus, measurement:</b> a trapezoid has parallel sides of 8 cm and 12 cm and a height of 5 cm. Find its area.' }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Worked answers to the Grade 6 practice set',
      lede: 'Each answer shows the reasoning, because that is what a Grade 6 teacher marks. We checked every number with a short program.',
      body: [
        { kind: 'ol', items: [
          '<b>Yes, yes, yes.</b> The digit sum is 7 + 4 + 1 + 6 = 18, which divides by 3 and by 9. For 8, look at the last three digits: 416 = 8 &times; 52. (Our worked program above gives the same list.)',
          '<b>36.</b> 10% of 240 is 24. 5% is half of that, 12. 15% is 24 + 12 = 36.',
          '<b>12 degrees.</b> From &minus;7 up to 0 is 7, and from 0 up to 5 is 5 more. 7 + 5 = 12. On a vertical number line, count the steps.',
          '<b>4.6 and 4.64.</b> For tenths, look at the hundredths digit, 3, which is less than 5, so round down. For hundredths, look at the thousandths digit, 8, so round up.',
          '<b>11/12.</b> The lowest common denominator of 3 and 4 is 12. 2/3 = 8/12 and 1/4 = 3/12, so the sum is 11/12.',
          '<b>2 &times; 2 &times; 2 &times; 3 &times; 3 &times; 5</b>, or 2<sup>3</sup> &times; 3<sup>2</sup> &times; 5. One tree: 360 = 36 &times; 10, then 36 = 4 &times; 9 and 10 = 2 &times; 5, then 4 = 2 &times; 2 and 9 = 3 &times; 3.',
          '<b>Linear; 3n + 1; 61.</b> The pattern grows by 3 every time, the same amount, so it is linear. Term 1 is 3 &times; 1 + 1 = 4, which checks. Term 20 is 3 &times; 20 + 1 = 61.',
          '<b>x = 0, 1, 2, 3, 4, 5, 6, 7 or 8.</b> Subtract 5 from both sides: 3x &lt; 27, so x &lt; 9. Check the edge: 3 &times; 8 + 5 = 29, which is less than 32, and 3 &times; 9 + 5 = 32, which is not.',
          '<b>8.</b> It counts the multiples of 6 from 1 to 50: 6, 12, 18, 24, 30, 36, 42 and 48. The <code>if</code> asks the divisibility question once per number.',
          '<b>The first loop runs 50 times; the second runs 8 times.</b> Both print 8. The second is more efficient because it jumps straight from one multiple of 6 to the next instead of testing every number. This is the Grade 6 C3.2 question in miniature: same outcome, less work.',
          '<b>8.</b> The loop keeps adding 1 to x while 3x + 5 is still less than 32. It stops when x reaches 9, the first value that fails, so the largest solution is one less: 8. That matches Question 8, worked by code instead of algebra.',
          '<b>(2, &minus;2), in Quadrant IV.</b> Right 5 changes x from &minus;3 to 2; down 4 changes y from 2 to &minus;2. Positive x and negative y is the fourth quadrant.'
        ] },
        { kind: 'p', mt: true, html: '<b>Bonus answers.</b> Six of the 36 equally likely outcomes give a sum of 7, so the theoretical probability is 6/36 = 1/6, about 0.17. The experiment gives 40/200 = 1/5 = 0.2. Experiments vary from the theory, especially with few trials; more rolls usually bring them closer. For the data set, sorted it is 9, 9, 14, 16, 20, 22: the mean is 90 &divide; 6 = 15, the median is halfway between 14 and 16, so 15, the mode is 9 and the range is 22 &minus; 9 = 13. The trapezoid&rsquo;s area is (8 + 12) &divide; 2 &times; 5 = 50 cm&sup2;.' }
      ]
    },
    {
      id: 'year', tint: 'deep', eyebrow: 'The Grade 6 year',
      h2: 'The Grade 6 year in Ontario: contests, EQAO and what to plan for',
      lede: 'Grade 6 carries two outside events many families hear about late. Here is what their organisers say, with the year on every date, and how we plan the year around them.',
      body: [
        { kind: 'table', caption: 'Two Grade 6 events, from the organisers&rsquo; own pages (read 22 October 2026)', head: ['Event', 'Who runs it', 'What the organiser says', 'When'], rows: [
          ['Beaver Computing Challenge, Grade 5/6', 'CEMC, University of Waterloo', '&ldquo;Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC.&rdquo; &ldquo;12 multiple-choice questions out of a total of 60 (Grade 5/6).&rdquo; &ldquo;Time allowed for completion is 45 minutes.&rdquo;', 'CEMC lists North and South America for 9 to 20 November 2026'],
          ['Grade 6, Junior Division: Assessment of Reading, Writing and Mathematics', 'EQAO, the Education Quality and Accountability Office', 'EQAO&rsquo;s provincial tests &ldquo;assess students&rsquo; literacy (reading and writing) and numeracy (mathematics) knowledge and skills&rdquo;', 'EQAO lists the next administration for May 4 to June 8, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we plan a Grade 6 year',
          left: [
            'September to November: integers, place value to a million and the divisibility rules, with the first coding projects. Children who want to try the Beaver Computing Challenge ask their school; CEMC contests are written through a school.',
            'December to March: fractions, percents, patterns and inequalities, each with a short program. April to June: probability simulations, data and geometry, plus review in the weeks before the EQAO window. This is our plan; each school&rsquo;s order is set by the teacher.'
          ],
          rightH3: 'About the EQAO assessment',
          right: [
            'EQAO&rsquo;s own pages are the place to read about the Grade 6 assessment and any sample materials it offers; start from its <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/junior-division/" rel="noopener" target="_blank">Grade 6, Junior Division page</a>. We could not read that page on 22 October 2026, so we do not describe its format here.',
            'Our practice set above is matched to the Grade 6 curriculum strands, not to EQAO questions. Steady work across the year does more than a cram in May, and we do not promise any result.'
          ] },
        { kind: 'source', html: 'Sources, all opened 22 October 2026: CEMC&rsquo;s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">Beaver Computing Challenge page</a>; <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO&rsquo;s assessments page</a>. CEMC and EQAO are independent of us, and we of them.' }
      ]
    },
    {
      id: 'help', tint: 'tint', eyebrow: 'When to get help',
      h2: 'Signs a Grade 6 student needs help, and what helps',
      lede: 'Most Grade 6 struggles start small. These are the signs we see most often in first classes, and the fix we use for each.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Guessing with negatives', p: 'If a child adds &minus;7 and 5 and says 12, the number line is missing. We go back to a vertical line, like a thermometer, until direction makes sense.' },
          { h3: 'Rules without reasons', p: 'A child who knows the divisibility rules but cannot say why 6 needs both 2 and 3 will forget them by spring. Writing the rules as code forces the reason.' },
          { h3: 'Code copied, not read', p: 'If a child can type a program but not predict its output, they have met the tool and not the expectation. We ask for a prediction before every run.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A week that works',
          left: [
            'Two live lessons, each with one math idea and one short program that uses it. Ten minutes a day at home on three practice questions, with the working shown. One saved program a week in a folder.',
            'Parents need no coding knowledge to help. Ask what the program calculates and what it should print before your child runs it.'
          ],
          rightH3: 'Getting ready for Grade 7',
          right: [
            'Grade 7 coding adds subprograms and loops that stop when a condition is met. A Grade 6 student who already writes small functions, like <code>digit_sum</code> above, walks into Grade 7 a step ahead.',
            'On the math side, integers and fractions are the two foundations Grade 7 builds on most. Time spent on them in Grade 6 is never wasted.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four stages of a Grade 6 math coder',
    lede: 'Our own stages, for children who are learning math and code together.',
    table: { caption: 'Grade 6 math and coding stages (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Calculator', 'Works examples step by step but cannot yet say which rule applies when'],
      ['2. Rule user', 'Picks the right rule and explains it in a sentence'],
      ['3. Rule coder', 'Turns a rule into an <code>if</code> test and checks it on tricky numbers'],
      ['4. Efficient coder', 'Spots repeated work in a program and removes it, then explains the saving']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to explain one rule from this week without a worksheet in front of them. If they can, they are at stage 2 or beyond.',
      'Stage 3 is where coding starts helping math directly, and it usually takes a few weeks of short programs to reach.'
    ] },
    right: { h3: 'For students', ps: [
      'When a rule feels like magic, test it on a number that should fail. Rules you have tried to break are the ones you remember.',
      'Before you run a program, write down what it should print.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Ontario middle grades',
    lede: 'All are taught in live video lessons by a teacher who stays with the class, as a group or privately.',
    bands: [
      { num: 'I', h3: 'Math, deeper', sub: 'Grades 5 to 8', courses: [
        { code: 'ONG / MTH / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Fractions and negatives repaired, then equations.' },
        { code: 'ONG / MTH / 02', slug: 'middle-school-math-competitions-course', title: 'Math Competitions', blurb: 'Timed contest problems for children who want more.' },
        { code: 'ONG / MTH / 03', slug: 'mental-maths-mastery-kids', title: 'Mental Math', blurb: 'Fast, honest number sense for percents and estimates.' }
      ] },
      { num: 'II', h3: 'Coding, wider', sub: 'Ages 9 to 13', courses: [
        { code: 'ONG / COD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding', blurb: 'Blocks for children whose class codes in Scratch.' },
        { code: 'ONG / COD / 02', slug: 'game-development-masterclass-for-kids', title: 'Game Development', blurb: 'Coordinates and conditions inside real games.' },
        { code: 'ONG / COD / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational Thinking', blurb: 'Decomposition and logic puzzles, away from the keyboard.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'Grades 7 and 8', courses: [
        { code: 'ONG / NXT / 01', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'A first website, written in HTML and CSS.' },
        { code: 'ONG / NXT / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding', blurb: 'Loops and functions that build in three dimensions.' },
        { code: 'ONG / NXT / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High School Math', blurb: 'For Grade 8 students ready to look past Grade 9.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 6 lessons, math and code side by side',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An hour after school, set when you choose a batch.' },
      { time: 'Weekends', l: 'A morning lesson that leaves the afternoon free.' },
      { time: '1-on-1', l: 'Built around this term&rsquo;s math units.' }
    ],
    cells: [
      { h3: 'One idea, one program', p: 'Each lesson pairs a topic with code.' },
      { h3: 'Working shown', p: 'Answers explained, never just given.' },
      { h3: 'Class units first', p: 'We follow what school is teaching.' },
      { h3: 'Python or Scratch', p: 'Whichever the class uses.' },
      { h3: 'A note home', p: 'What we covered, what to practise.' },
      { h3: 'Class size', p: 'A group of fifteen to twenty, or a private teacher.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects from older learners who began, like a Grade 6 student, with loops and conditions. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents and students, in their own words on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. After that a monthly fee covers eight live classes; the price shown carries its currency code, and families can stop after any month with no term to sign.',
    free: ['A free first class', 'Bring a recent worksheet', 'No card asked for'],
    group: ['Fifteen to twenty students', 'Grouped by grade', 'A regular teacher', 'Monthly payment'],
    one: ['One teacher, one child', 'Times that fit your week', 'Paced to the school units']
  },

  faq: {
    eyebrow: 'Questions from Grade 6 families',
    h2: 'Ontario Grade 6 math and coding: common questions',
    items: [
      { q: 'What coding does Grade 6 math ask for?', a: 'In Grade 6, Ontario expects code that is efficient and that uses conditional statements, such as if and else, along with loops and other control structures, all in the service of math problems. Students also read code written by someone else, change it, and say whether the change made it work better or faster.' },
      { q: 'What does efficient code mean in Grade 6?', a: 'The Grade 6 curriculum notes say more efficient code can reduce execution time and computer storage space. For a Grade 6 student it usually means fewer steps doing the same job, such as using a loop instead of repeating a line, or reusing an answer the program already worked out.' },
      { q: 'What math is taught in Grade 6 in Ontario?', a: 'The 2020 curriculum has five content strands in Grade 6: Number, Algebra, Data, Spatial Sense and Financial Literacy, with social-emotional learning skills and the mathematical processes running through them. Grade 6 includes integers, divisibility rules, percents, fractions, linear patterns, inequalities, probability, four-quadrant coordinates and the areas of trapezoids and other polygons.' },
      { q: 'Which divisibility rules does Grade 6 cover?', a: 'The Grade 6 curriculum asks students to understand the divisibility rules and use them for 2, 3, 4, 5, 6, 8, 9 and 10. Our worked program on this page turns each rule into a conditional test and checks it against real division.' },
      { q: 'Does my child need to know Python for Grade 6?', a: 'No. The curriculum does not name a coding tool, and many classes use block-based programs. We teach in Python or Scratch, depending on what the class uses, and many children start Python around Grade 6 because conditions and variables read clearly as words.' },
      { q: 'When is the Grade 6 EQAO assessment?', a: 'EQAO lists the next administration of the Grade 6, Junior Division Assessment of Reading, Writing and Mathematics for May 4 to June 8, 2027. Ask your child\'s school which days it plans to use.' },
      { q: 'Are your practice questions EQAO questions?', a: 'No. The twelve questions on this page are our own, written to match the Grade 6 curriculum strands. They are not EQAO questions or copies of any school or textbook material.' },
      { q: 'What is the Beaver Computing Challenge?', a: 'It is a computational thinking contest run by CEMC at the University of Waterloo. Students in Grade 6 or below can write the Grade 5/6 level, which CEMC describes as 12 multiple-choice questions in 45 minutes. CEMC lists the 2026 contest for 9 to 20 November 2026, written through a school.' },
      { q: 'Can coding help my child with math?', a: 'It can, when the code computes the math rather than decorating it. Writing a divisibility rule or a probability experiment as a program makes a child state the rule exactly and test it, which is often where understanding finally clicks. We cannot promise a mark, but we see the habit grow.' },
      { q: 'When are Grade 6 lessons held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set each slot in Eastern time; when the clocks change on 1 November 2026, we message every family to confirm the hour.' },
      { q: 'How are fees paid?', a: 'The first class is free. After it, families pay month by month for eight live classes, and the fees box on this page shows the current figure for a group and for one to one. There is no term contract.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Grade 6 families in Ontario.',
    items: [
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Classes for every age across the province.' },
      { href: '/online-math-tutor-6th-grade', label: 'Online math tutor, Grade 6', p: 'One-to-one math help at this grade.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help for Canadian students, Grades 1 to 12.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/blog/how-to-solve-maths-word-problems', label: 'Solving word problems', p: 'A method for the questions that hide the math.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python?', p: 'Which suits a child of 10 to 12.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests', p: 'The Gauss contest waits in Grades 7 and 8.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us your child&rsquo;s current math unit and anything that has felt hard lately. The first class works on that, and ends with one short program your child wrote.',
    readFirst: 'Curious first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses/maths-through-coding">Math Through Coding syllabus</a>.',
    note: 'All lessons are online and live, with teachers working from India at times set for Ontario. There is no centre to drive to; message us on WhatsApp for a fast reply.',
    formNote: 'No payment details are needed for the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 6', links: [
        { href: '/courses/maths-through-coding', label: 'Math Through Coding' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle School Math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' }
      ] }
    ],
    bottomRight: 'Say the rule, code the rule, break the rule'
  },

  personalityCss: `
.ag-root.ag-ong .ag-hero h1 { letter-spacing: -0.008em; max-width: 21ch; }
.ag-root.ag-ong .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ong .ag-table caption { text-align: left; }
.ag-root.ag-ong .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ong .ag-code-head span { letter-spacing: 0.05em; text-transform: uppercase; }
.ag-root.ag-ong .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario elementary mathematics (2020), Grade 6 strands, specific expectations and C3 notes, read raw 22 October 2026 through ws.api.dcp.edu.gov.on.ca; Science and Technology (2022) Grade 6 A2.1; EQAO assessments page (saved the same day; later requests blocked by Cloudflare); CEMC BCC page.',
    localProject: 'Our divisibility-test program in Python (digit_sum reused for 3 and 9; the test for 6 reuses the answers for 2 and 3), run on 2520, 7416 and 1155 and checked against division for 1 to 10,000 with no mismatches; a six-step flow-chart plan; twelve original practice questions across Number, Algebra, coding and Spatial Sense, plus data and measurement bonuses, all answers checked by program. Lesson family: rules as code.',
    requiredMentions: ['divisible by 2, 3, 4, 5, 6, 8, 9, and 10', 'by writing and executing efficient code, including code that involves conditional statements and other control structures', 'The reverse flow chart that is used to solve equations', 'More efficient code can reduce execution time', 'grouping numbers using the divisibility rules', 'write and execute code in investigations and when modelling concepts', '7416 passes [2, 3, 4, 6, 8, 9]', '6 needs both: no new work', 'Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC.', 'determine the areas of trapezoids, rhombuses, kites, and composite polygons'],
    sources: [
      { claim: 'Grade 6 math strands, specific expectations, C3.1, C3.2 and the C3 notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4' },
      { claim: 'Grade 6 Science and Technology A2.1.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'EQAO Grade 6, Junior Division assessment title and the May 4 to June 8, 2027 window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'BCC Grade 5/6 eligibility, format, time and 2026 dates.', url: 'https://cemc.uwaterloo.ca/contests/bcc' }
    ],
    rejectedClaims: [
      'Any description of the Grade 6 EQAO format, length or sample test: eqao.com blocked the junior-division page (Cloudflare 403), so none is made.',
      'That coding appears on the EQAO Grade 6 assessment: not verified.',
      'Any mark, EQAO level or contest result from our classes: none promised.',
      'Reproducing EQAO, CEMC or textbook questions: the practice set is ours and labelled so.',
      'Detailed Financial Literacy practice: left to class materials to keep the page free of money figures.',
      'Any affiliation with the ministry, EQAO, CEMC or a school board: none, and the page says so.'
    ]
  }
};
