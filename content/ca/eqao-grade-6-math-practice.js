'use strict';
// EQAO Grade 6 math practice (ag- assessment door; Canada cluster Plan 2, row 12).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/eqao-grade-6-math-practice/):
//  - eqao.com/the-assessments/ (ca/src/ontario/eqao-assessments.html, saved earlier the same day): "Grade 6, Junior Division";
//    "Assessment of Reading, Writing and Mathematics"; next administration "May 4 – June 8, 2027" (written "May 4 to June 8,
//    2027"); EQAO "is responsible for overseeing Ontario’s provincial assessment program".
//  - eqao.com/the-assessments/grade-9-math/ (saved the same day): the parent Math Night webinar covers Grade 6.
//  - eqao.com/the-assessments/junior-division/ returned a Cloudflare 403 on 22 October 2026 (BLOCKED-403-junior-division.html),
//    not retried; so nothing is said about the Grade 6 format, length, delivery or sample test.
//  - Ontario elementary mathematics (2020), Grade 6 strands (ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4),
//    quoted in the mapping table: B1.1 "up to and including one million"; B1.3 "compare and order integers, decimal numbers, and
//    fractions, separately and in combination"; B1.6 "show equivalences among fractions and decimal numbers up to thousandths";
//    B2.7 "the multiplication of three-digit whole numbers by decimal tenths"; B2.10 "divide whole numbers by proper fractions";
//    B2.11 "the division of decimal numbers up to thousandths by whole numbers up to 10"; B2.12 "solve problems involving ratios,
//    including percents and rates"; C1.2 "including tables of values, graphs, and, for linear growing patterns, algebraic expressions
//    and equations"; C2.2 "evaluate algebraic expressions that involve whole numbers and decimal tenths"; C2.3 "solve equations that
//    involve multiple terms and whole numbers"; C3.1 "efficient code"; D1.3 "including histograms and broken-line graphs"; D1.6 "and
//    in misleading graphs"; E2.3 "supplementary angles, complementary angles, opposite angles"; E2.6 "determine the surface areas
//    of prisms and pyramids".
//  - cemc.uwaterloo.ca/contests/gauss: "Students in Grades 7 and 8."; "Motivated students in lower grades are welcome to write the
//    contest."; "North and South America: Monday, May 10, 2027 to Friday, May 21, 2027"; "Gauss Contests are based on math
//    curriculum common to all Canadian provinces."; "25 multiple-choice questions."; "Time allowed for completion is 60 minutes.";
//    "all students must participate through their school" (how-contests-work).
// Our own material, labelled on the page: the fifteen practice questions ("our practice, not EQAO questions") and worked answers
// (arithmetic and the one program checked in Python 3), the five-part answer guide, the May 2027 calendar reading, the stages.
// Lesson family: complete answers (state, strategy, work, check, units).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const Q15 = `total = 0
for n in range(1, 21):
    if n % 3 == 0 and n % 2 != 0:
        total = total + n
print(total)`;

const EQAO_G6 = '<a class="ag-inline-link" href="https://www.eqao.com/the-assessments/junior-division/" rel="noopener" target="_blank">Grade 6, Junior Division page</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'EQAO GRADE 6', blurb: 'The EQAO Grade 6 assessment and its 2027 window, with fifteen practice questions of our own mapped to Grade 6 Ontario math expectations, worked answers and an answer guide.' },
  slug: 'eqao-grade-6-math-practice',
  code: 'eqg',
  accent: '#110B4C',
  accentRationale: 'EQAO Grade 6 math practice: a midnight ink, #110B4C, allocated by the Canada Plan 2 grid; 7.8 RGB units from the nearest site accent (#0B104C) and at least 14 from every other Canada accent; contrast 16.85 on the paper #FBF8F2 and 14.49 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'EQAO Grade 6 math practice',
  title: 'EQAO Grade 6 Math Practice: 15 Sample Questions, Answers',
  description: 'EQAO Grade 6 math for Ontario families: the assessment, the May to June 2027 window, and 15 sample practice questions of our own mapped to Grade 6 expectations.',
  ogDescription: 'The Grade 6 EQAO assessment from EQAO&rsquo;s own pages, its 2027 window, and fifteen practice questions we wrote, each tied to a quoted Grade 6 expectation, with worked answers.',
  twitterDescription: 'EQAO Grade 6 math: fifteen practice questions of our own, mapped to Grade 6 expectations, with answers.',
  pageName: 'EQAO Grade 6 Math Practice',
  webPageDescription: 'A guide for Ontario Grade 6 students and parents to the EQAO Junior Division assessment, with fifteen original practice questions mapped to quoted Grade 6 math expectations, worked answers and a guide to complete explanations.',
  courseDescription: 'Live online Grade 6 math for Ontario students: fractions, decimals, ratios, algebra, data and geometry, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'EQAO Grade 6 math practice',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#junior', label: 'The assessment' },
    { href: '#map', label: 'Question map' },
    { href: '#practice', label: 'Practice' },
    { href: '#answers', label: 'Answers' },
    { href: '#may', label: 'May 2027' }
  ],
  eyebrow: 'Ontario &middot; Grade 6 &middot; EQAO Junior Division',
  h1: 'EQAO Grade 6 math practice: fifteen sample questions',
  lede: 'By Grade 6 most students have met EQAO once before, back in Grade 3, and the second time feels different: decimals to thousandths, dividing by fractions, ratios, misleading graphs. This page sets out what EQAO itself says about the Junior Division assessment, then gives fifteen sample questions we wrote ourselves, each one tied to the exact Grade 6 expectation it practises, with full worked answers.',
  secondaryCta: { href: '#practice', label: 'Go to the sample questions' },
  wa: 'Hello Modern Age Coders, my child is in Grade 6 in Ontario and would like math practice before the EQAO assessment. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Grade 6 math, explained',
  spec: [
    ['For', 'Ontario Grade 6, ages 10 to 12'],
    ['Assessment', 'EQAO Junior Division'],
    ['Window', 'May 4 to June 8, 2027'],
    ['Practice', 'Fifteen questions, ours'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Booked in Eastern time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The EQAO Grade 6 assessment, the Junior Division Assessment of Reading, Writing and Mathematics, runs in Ontario from May 4 to June 8, 2027. Good practice means the Grade 6 math curriculum, explained answers and no cramming. Modern Age Coders teaches Grade 6 math live online, in a batch or one to one, through Middle School Math.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses to pair with EQAO practice',
    lede: 'Core math first, then a challenge course and a course that makes the math concrete through code.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'EQG / 01', title: 'Middle School Math', note: 'A year that runs from arithmetic to pre-algebra, geometry and statistics, with each method practised until it is automatic.' },
      { course: 'middle-school-math-competitions-course', code: 'EQG / 02', title: 'Math Competitions, Grades 5 to 8', note: 'Ages 10 to 14. Number sense, counting and geometry problems for students heading toward the Gauss contest.' },
      { course: 'maths-through-coding', code: 'EQG / 03', title: 'Math Through Coding', note: 'Grades 5 to 10. Ratios, patterns and probability built as small Python programs, so each rule gets tested.' }
    ]
  },

  sections: [
    {
      id: 'junior', tint: 'tint', eyebrow: 'From EQAO&rsquo;s own pages',
      h2: 'What the EQAO Grade 6 assessment is',
      lede: 'EQAO, the Education Quality and Accountability Office, says it &ldquo;is responsible for overseeing Ontario&rsquo;s provincial assessment program.&rdquo; In Grade 6 that program is the Junior Division Assessment of Reading, Writing and Mathematics.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The name', p: 'EQAO lists it as &ldquo;Grade 6, Junior Division&rdquo;, an &ldquo;Assessment of Reading, Writing and Mathematics&rdquo;. Math is one of three parts, alongside reading and writing.' },
          { h3: 'The window', p: 'On 22 October 2026, EQAO listed the next administration dates for Grade 6 as May 4 to June 8, 2027, the same window it lists for Grade 3.' },
          { h3: 'The source to trust', p: 'Official details and any sample material belong on EQAO&rsquo;s ' + EQAO_G6 + '. Our request for it failed on 22 October 2026, and we leave its contents to EQAO rather than guess.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we can say, and what we cannot',
          left: [
            'We can say what the assessment is called, which grade writes it and when EQAO lists the next window. We cannot tell you how many questions it has, how long it takes or whether it is on screen or on paper, because we could not read EQAO&rsquo;s Grade 6 page, and we will not guess.',
            'For anything about format, accommodations or tools allowed, go to EQAO directly or ask the school. A detail that names no source is not worth planning around.'
          ],
          rightH3: 'Using EQAO&rsquo;s own material well',
          right: [
            'If you find an official sample or practice activity on EQAO&rsquo;s site, use it once, untimed, to make the format familiar. Then return to normal practice. One familiar look at the real format calms more nerves than ten unofficial practice tests.',
            'EQAO also runs a free Math Night webinar for parents and guardians that covers Grade 6. It is a good way to hear EQAO&rsquo;s own staff explain what the math questions are meant to show.'
          ] },
        { kind: 'source', html: 'Taken from <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO, Assessments</a> (copied 22 October 2026); the Math Night listing appears on EQAO&rsquo;s Grade 9 math page. We are a private teaching company, separate from EQAO.' }
      ]
    },
    {
      id: 'map', tint: 'deep', eyebrow: 'The quotable table',
      h2: 'Our fifteen questions, mapped to Grade 6 expectations',
      lede: 'Each question in our practice set targets one specific expectation from the 2020 Grade 6 math curriculum. The middle column quotes the ministry&rsquo;s wording, so you can see exactly which skill each question practises. The mapping is ours; EQAO has not published it.',
      body: [
        { kind: 'table', caption: 'Our practice questions and the Grade 6 expectation each one targets (expectations quoted from the Ontario curriculum, 2020, read 22 October 2026)', head: ['Q', 'Expectation', 'Curriculum wording, quoted'], numCols: [0], rows: [
          ['1', 'B1.1', 'whole numbers &ldquo;up to and including one million&rdquo;'],
          ['2', 'B1.3', '&ldquo;compare and order integers, decimal numbers, and fractions, separately and in combination&rdquo;'],
          ['3', 'B1.6', '&ldquo;show equivalences among fractions and decimal numbers up to thousandths&rdquo;'],
          ['4', 'B2.7', '&ldquo;the multiplication of three-digit whole numbers by decimal tenths&rdquo;'],
          ['5', 'B2.10', '&ldquo;divide whole numbers by proper fractions&rdquo;'],
          ['6', 'B2.11', '&ldquo;the division of decimal numbers up to thousandths by whole numbers up to 10&rdquo;'],
          ['7', 'B2.12', '&ldquo;solve problems involving ratios, including percents and rates&rdquo;'],
          ['8', 'C2.2', '&ldquo;evaluate algebraic expressions that involve whole numbers and decimal tenths&rdquo;'],
          ['9', 'C2.3', '&ldquo;solve equations that involve multiple terms and whole numbers&rdquo;'],
          ['10', 'C1.2', 'patterns shown &ldquo;including tables of values, graphs, and, for linear growing patterns, algebraic expressions and equations&rdquo;'],
          ['11', 'D1.3', 'choosing among graphs &ldquo;including histograms and broken-line graphs&rdquo;'],
          ['12', 'D1.6', 'analysing data, including &ldquo;in misleading graphs&rdquo;'],
          ['13', 'E2.3', 'using &ldquo;supplementary angles, complementary angles, opposite angles&rdquo;'],
          ['14', 'E2.6', '&ldquo;determine the surface areas of prisms and pyramids&rdquo;'],
          ['15', 'C3.1', 'writing and reading &ldquo;efficient code&rdquo; with conditional statements']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why map questions this way',
          left: [
            'A wrong answer on its own tells you little. A wrong answer on question 5 tells you that dividing by a fraction, B2.10, is the skill to revisit, and you can then find that topic in your child&rsquo;s notebook or ask the teacher about it by name.',
            'The codes also make conversations with teachers shorter. &ldquo;My child is stuck on B2.10&rdquo; is clearer than &ldquo;my child is bad at fractions&rdquo;.'
          ],
          rightH3: 'What the set leaves out',
          right: [
            'Fifteen questions cannot cover a whole year. We left out financial literacy, spatial transformations and probability lines, among others, and leaned on Number, where Grade 6 students tend to lose the most marks in our experience.',
            'For a full year of practice, follow the class units and use sets like this one for review, not as a substitute for the curriculum.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Our practice, not EQAO questions',
      h2: 'Fifteen Grade 6 sample questions',
      lede: 'These are original questions written by Modern Age Coders for this page. They are not EQAO questions, released items or copies of any school material. Show your work for each one; the answer guide further down explains what a complete answer includes.',
      body: [
        { kind: 'ol', items: [
          'Write 704 315 in words. What is the value of the digit 4?',
          'Order from least to greatest: &minus;2, 0.5, 1/4, &minus;0.75.',
          'Write 3/8 as a decimal. Write 0.6 as a fraction in lowest terms.',
          'Calculate 245 &times; 0.3. Estimate first, then check your answer against the estimate.',
          'How many quarters are in 6? Write this as a division by a fraction and solve it.',
          'Five friends share 7.35 litres of juice equally. How much does each get?',
          'A cyclist rides 18 km in 45 minutes. At the same rate, how far does the cyclist ride in 2 hours?',
          'Evaluate 4n + 2.5 when n = 1.5.',
          'Solve 2x + 3x + 4 = 29 and check your solution.',
          'Figure 1 of a pattern has 5 squares, Figure 2 has 8 and Figure 3 has 11. Make a table of values, write an equation for the number of squares, and find Figure 10.',
          'Which graph would you choose for (a) a city&rsquo;s temperature every hour of one day and (b) the heights of 30 students grouped in 5 cm intervals? Explain why.',
          'A bar graph shows Class A with 92 books read and Class B with 96. The vertical axis starts at 90. Why might the graph mislead a reader?',
          'Two angles are supplementary. One is 118&deg;. What is the other? If two lines cross and one angle is 118&deg;, what is the angle opposite it?',
          'Find the surface area of a rectangular prism that is 5 cm long, 3 cm wide and 2 cm high.'
        ] },
        { kind: 'code', label: 'Question 15 &middot; read the code &middot; Python', lang: 'python', code: Q15, note: 'What does this print? Which numbers does it add, and why? Rewrite the loop so it checks fewer numbers but prints the same answer.' }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Worked answers to the fifteen questions',
      lede: 'Each answer shows the working a Grade 6 teacher would hope to see. Every number was checked with a short program.',
      body: [
        { kind: 'ol', items: [
          '<b>Seven hundred four thousand three hundred fifteen; 4 000.</b> The 4 is in the thousands place. The space in 704 315 only separates the digits into groups of three, so the number is easier to read.',
          '<b>&minus;2, &minus;0.75, 1/4, 0.5.</b> Negatives come first, and &minus;2 is further below zero than &minus;0.75. Then 1/4 = 0.25, which is less than 0.5.',
          '<b>0.375 and 3/5.</b> 3 &divide; 8 = 0.375. And 0.6 = 6/10, which simplifies to 3/5 by dividing top and bottom by 2.',
          '<b>73.5.</b> Estimate: 250 &times; 0.3 is 75, so the answer is a little under 75. Work: 245 &times; 3 = 735, and multiplying by tenths moves it one place: 73.5. Close to the estimate, so it is reasonable.',
          '<b>24.</b> Each whole has 4 quarters, so 6 wholes have 6 &times; 4 = 24. As a division: 6 &divide; 1/4 = 24. Dividing by a fraction less than 1 gives a bigger number, which surprises many students the first time.',
          '<b>1.47 litres each.</b> 7.35 &divide; 5: 7 &divide; 5 is 1 remainder 2; 23 tenths &divide; 5 is 4 tenths remainder 3; 35 hundredths &divide; 5 is 7 hundredths. Check: 1.47 &times; 5 = 7.35.',
          '<b>48 km.</b> 2 hours is 120 minutes. 120 &divide; 45 is 8/3, so the cyclist rides 8/3 &times; 18 = 48 km. Or find the unit rate: 18 km in 45 minutes is 0.4 km a minute, and 0.4 &times; 120 = 48.',
          '<b>8.5.</b> Substitute n = 1.5: 4 &times; 1.5 = 6, then 6 + 2.5 = 8.5.',
          '<b>x = 5.</b> Collect like terms: 5x + 4 = 29. Subtract 4: 5x = 25. Divide by 5: x = 5. Check: 2(5) + 3(5) + 4 = 10 + 15 + 4 = 29.',
          '<b>s = 3n + 2; Figure 10 has 32 squares.</b> The table goes 1 &rarr; 5, 2 &rarr; 8, 3 &rarr; 11: up 3 each time, so 3n, plus 2 to make Figure 1 equal 5. Figure 10: 3 &times; 10 + 2 = 32. The pattern grows by the same amount each step, so it is linear.',
          '<b>(a) A broken-line graph; (b) a histogram.</b> Temperature changes continuously through the day, so joining the points shows the trend. Heights grouped in intervals are continuous data in bins, which is what a histogram shows.',
          '<b>The difference looks huge.</b> Starting the axis at 90 makes Class B&rsquo;s bar look three times as tall as Class A&rsquo;s (6 above 90 against 2 above 90), when 96 is only about 4% more than 92. A fair graph starts at zero or marks the break clearly.',
          '<b>62&deg; and 118&deg;.</b> Supplementary angles add to 180&deg;, so 180 &minus; 118 = 62. Opposite angles where two lines cross are equal, so the opposite angle is also 118&deg;.',
          '<b>62 cm&sup2;.</b> A rectangular prism has three pairs of faces: 5 &times; 3 = 15, 5 &times; 2 = 10 and 3 &times; 2 = 6. Add them and double: 2 &times; (15 + 10 + 6) = 62 cm&sup2;.',
          '<b>27.</b> The condition keeps numbers that are multiples of 3 and not even: 3, 9 and 15. Their sum is 27. A more efficient loop starts at 3 and steps by 6, <code>for n in range(3, 21, 6)</code>, which visits only 3, 9 and 15 and needs no <code>if</code> at all.'
        ] }
      ]
    },
    {
      id: 'complete', tint: 'tint', eyebrow: 'Showing your work',
      h2: 'What a complete Grade 6 answer includes',
      lede: 'Our own five-part guide, built from the answers Grade 6 students write in our lessons. Use it to check your answers to the questions above, not only whether the number is right.',
      body: [
        { kind: 'table', caption: 'Five parts of a complete answer (ours), using question 7 as the example', head: ['Part', 'What it means', 'In question 7'], rows: [
          ['State', 'Say what you are finding', '&ldquo;I need the distance in 2 hours.&rdquo;'],
          ['Strategy', 'Name the method before using it', '&ldquo;I will find the distance per minute.&rdquo;'],
          ['Work', 'Show each step so a reader can follow', '18 &divide; 45 = 0.4; 2 hours = 120 minutes; 0.4 &times; 120 = 48'],
          ['Check', 'Test the answer another way', '45 minutes gives 18 km, so 90 minutes gives 36, and 120 is a bit more: 48 fits'],
          ['Units', 'Finish with the unit the question uses', '48 km']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why explanations matter so much in Grade 6',
          left: [
            'The Grade 6 curriculum keeps asking students to explain: to &ldquo;justify their choice of graphs&rdquo;, to make &ldquo;convincing arguments and informed decisions&rdquo; from data, and to verify solutions. A bare number meets only part of that.',
            'Students who explain also catch their own mistakes. Writing &ldquo;I need the distance in 2 hours&rdquo; is often the moment a student notices they were about to answer for 45 minutes.'
          ],
          rightH3: 'The habit at home',
          right: [
            'Pick one question a day and ask for all five parts, aloud. It takes two minutes. Within a few weeks most students start writing the strategy line without being told.',
            'Praise the check more than the answer. A student who checks a wrong answer and finds the mistake has done something more valuable than a student who got lucky.'
          ] }
      ]
    },
    {
      id: 'may', tint: 'deep', eyebrow: 'The spring of Grade 6',
      h2: 'May 2027 for a Grade 6 student: EQAO and the Gauss contest',
      lede: 'One calendar detail many families miss: for Grade 6 students who write a CEMC math contest, the spring of 2027 is busy. Here is what each organiser lists.',
      body: [
        { kind: 'table', caption: 'Two spring 2027 events for Grade 6 students, from the organisers&rsquo; pages (read 22 October 2026)', head: ['Event', 'Organiser', 'Who it is for', 'Dates listed'], rows: [
          ['Grade 6, Junior Division: Assessment of Reading, Writing and Mathematics', 'EQAO', 'Grade 6 students', 'May 4 to June 8, 2027'],
          ['Gauss Contests', 'CEMC, University of Waterloo', '&ldquo;Students in Grades 7 and 8.&rdquo; &ldquo;Motivated students in lower grades are welcome to write the contest.&rdquo;', 'North and South America: Monday, May 10, 2027 to Friday, May 21, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the two together',
          left: [
            'The Gauss window sits inside the EQAO window. A Grade 6 student who writes the Grade 7 Gauss contest early may have both in the same few weeks. Neither needs cramming, but it is worth knowing in advance so April is spent on steady review rather than panic.',
            'CEMC describes Gauss as &ldquo;25 multiple-choice questions&rdquo;, with &ldquo;Time allowed for completion is 60 minutes&rdquo;, and says &ldquo;Gauss Contests are based on math curriculum common to all Canadian provinces.&rdquo; On entry, CEMC is clear: &ldquo;all students must participate through their school.&rdquo;'
          ],
          rightH3: 'How we plan the spring',
          right: [
            'From February 2027 we mix one contest-style problem into each lesson for students who want Gauss, and keep the rest on Grade 6 expectations. In April we review using mapped sets like the one above. In May, lessons stay normal.',
            'Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> explains Gauss and the later CEMC contests. We teach for both events but are not part of either organisation and promise no result.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO, Assessments</a>; CEMC, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/gauss" rel="noopener" target="_blank">Gauss Contests</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four stages of a Grade 6 problem solver',
    lede: 'Our own stages, drawn from the way Grade 6 students write answers in our classes.',
    table: { caption: 'Grade 6 answer-writing stages (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Number only', 'Writes an answer with no working; right or wrong, nobody can tell why'],
      ['2. Steps shown', 'Shows calculations but not the plan behind them'],
      ['3. Strategy named', 'Says the method first, then works it through'],
      ['4. Checked', 'Tests the answer another way and gives the unit every time']
    ] },
    left: { h3: 'For parents', ps: [
      'Look at a recent test and count how many answers show a strategy line. That count tells you the stage better than the mark does.',
      'Moving from stage 2 to stage 3 is the biggest step, and it is mostly a habit, not a talent.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you calculate, write one sentence: what am I finding, and how?',
      'Estimate first. If your answer is far from the estimate, look again.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More courses for Grades 5 to 8',
    lede: 'Live online, always, with the same teacher from week to week, either in a group or privately.',
    bands: [
      { num: 'I', h3: 'Strengthen the core', sub: 'Grades 5 to 7', courses: [
        { code: 'EQG / COR / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Math', blurb: 'For gaps left over from Grades 4 and 5.' },
        { code: 'EQG / COR / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Math', blurb: 'Quick, reasoned estimates before calculating.' },
        { code: 'EQG / COR / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic Math', blurb: 'Fast calculation, with why each method works.' }
      ] },
      { num: 'II', h3: 'Think further', sub: 'Grades 6 to 8', courses: [
        { code: 'EQG / FUR / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Equations and variables ahead of Grade 9.' },
        { code: 'EQG / FUR / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad Math', blurb: 'For students who finish contest papers early.' },
        { code: 'EQG / FUR / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Graphs, chance and honest data.' }
      ] },
      { num: 'III', h3: 'Code the math', sub: 'Ages 9 to 13', courses: [
        { code: 'EQG / COD / 01', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'Loops and conditions, typed for real.' },
        { code: 'EQG / COD / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding', blurb: 'Block coding for classes that use Scratch.' },
        { code: 'EQG / COD / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational Thinking', blurb: 'Breaking big problems into steps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 6 math lessons through the year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, an hour that fits the week.' },
      { time: 'Weekends', l: 'Morning lessons before weekend activities.' },
      { time: '1-on-1', l: 'Paced to the class units and the spring.' }
    ],
    cells: [
      { h3: 'Strategy first', p: 'Name the method, then use it.' },
      { h3: 'Mapped review', p: 'Practice tied to expectations.' },
      { h3: 'Estimate, then work', p: 'Every answer sense-checked.' },
      { h3: 'Class units followed', p: 'In step with school.' },
      { h3: 'Short parent notes', p: 'What to practise this week.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects by older students, who all started with the fractions and ratios of the middle grades. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold more.',
  reviewsLede: 'From Google reviews, in families&rsquo; own words.',

  fees: {
    h2: 'Fees',
    lede: 'Begin with one free class. After it, eight live classes a month cost one monthly fee, printed in the box below with its currency code. You sign nothing for the year and can leave at any month&rsquo;s end.',
    free: ['A free first class', 'Bring a recent test', 'No card required'],
    group: ['Fifteen to twenty students', 'Grouped by grade', 'A regular teacher', 'Month-to-month'],
    one: ['A private teacher', 'Times you choose', 'Built on their weak spots']
  },

  faq: {
    eyebrow: 'Questions from Grade 6 families',
    h2: 'EQAO Grade 6 math: common questions',
    items: [
      { q: 'What are the 2027 EQAO dates for Grade 6?', a: 'EQAO gives a window, not a single day: May 4 to June 8, 2027 for the Junior Division assessment, as its site showed in October 2026. The teacher can tell you which days the class will write.' },
      { q: 'Are these real EQAO sample questions?', a: 'No. They are our practice, not EQAO questions. We wrote all fifteen ourselves and mapped each one to a Grade 6 expectation in the Ontario math curriculum. For official samples, go to EQAO\'s own website.' },
      { q: 'Where can I find an EQAO Grade 6 practice test?', a: 'Look on EQAO\'s own website, starting from its Grade 6, Junior Division page. Official material is the only reliable guide to the format. We could not open that page on 22 October 2026, so we do not describe what is there.' },
      { q: 'Which Grade 6 topics should we review?', a: 'Grade 6 math in Ontario spans five content strands, from Number and Algebra to Data, Spatial Sense and Financial Literacy. Our fifteen questions lean on Number, where fractions, decimals and ratios come together, plus a few algebra, data, geometry and coding items. The table on this page names the exact expectation behind each one.' },
      { q: 'How should my child practise for EQAO Grade 6?', a: 'Keep learning the Grade 6 units well, practise a few mixed questions each day with full explanations, and look at EQAO\'s own sample material once so the format is familiar. Cramming in May adds stress without adding much skill.' },
      { q: 'What is the hardest part of Grade 6 math?', a: 'In our classes, decimal and fraction operations cause the most trouble: multiplying by tenths, dividing by a fraction and converting between fractions and decimals. Ratios and rates come next. All of them improve with steady practice.' },
      { q: 'Can a Grade 6 student write the Gauss contest?', a: 'CEMC says Gauss is for students in Grades 7 and 8, and that motivated students in lower grades are welcome to write it. CEMC lists the 2027 Gauss for North and South America from Monday, May 10 to Friday, May 21, 2027, written through a school.' },
      { q: 'Do you promise a better EQAO level?', a: 'No. We do not promise any EQAO level or mark. We teach the Grade 6 curriculum carefully and help students write complete answers, which is what lasts beyond any one assessment.' },
      { q: 'What times do Grade 6 lessons run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. For most Ontario families we work in Eastern time and confirm times again after each clock change.' },
      { q: 'What are the fees?', a: 'You pay nothing for the first class. Continuing costs one fee per month for eight live lessons, with no year-long commitment; look in the price panel for the group and private amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario families in the middle grades.',
    items: [
      { href: '/online-math-tutor-6th-grade', label: 'Online math tutor, Grade 6', p: 'Private math help at this grade.' },
      { href: '/online-math-tutor-7th-grade', label: 'Online math tutor, Grade 7', p: 'What the next year asks.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Our main math page for Canada.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests', p: 'Gauss and the other CEMC contests.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Coding for students across Ontario.' },
      { href: '/blog/how-to-solve-maths-word-problems', label: 'Word problems', p: 'Reading a problem before solving it.' },
      { href: '/blog/estimation-in-maths', label: 'Estimation', p: 'Why a rough answer first saves marks.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One of our lessons, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share a recent math test or a question that caused trouble. The free class starts there, and you will see how we teach explanations, not just answers.',
    readFirst: 'Reading first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Math syllabus</a>.',
    note: 'Teachers in India teach every lesson live on video, at hours fixed for Ontario families. There is no centre and no commute; WhatsApp is the quick way to reach us.',
    formNote: 'The free class needs no payment card.'
  },

  footer: {
    cols: [
      { h4: 'Grade 6 math', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle School Math' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Math Competitions' },
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
    bottomRight: 'State it, show it, check it, label it'
  },

  personalityCss: `
.ag-root.ag-eqg .ag-hero h1 { letter-spacing: -0.014em; max-width: 21ch; }
.ag-root.ag-eqg .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-eqg .ag-table td:nth-child(2) { white-space: nowrap; font-weight: 600; }
.ag-root.ag-eqg .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-eqg .ag-steps li { margin-bottom: 0.65rem; }
`,

  dossier: {
    curriculumAuthority: 'EQAO assessments page (saved 22 October 2026; the junior-division page returned a Cloudflare 403 and was not retried): EQAO&rsquo;s role, the Grade 6 Junior Division title and the May 4 to June 8, 2027 window; EQAO Grade 9 page for the parent webinar. Ontario elementary mathematics (2020), Grade 6 specific expectations quoted in the mapping table, read raw the same day. CEMC Gauss and how-contests-work pages.',
    localProject: 'Fifteen original Grade 6 sample questions (our practice, not EQAO questions), each mapped to a quoted Grade 6 expectation in a table, with worked answers checked in Python, including one code-reading question with an efficient rewrite; a five-part complete-answer guide worked on question 7; a reading of the May 2027 calendar with EQAO and Gauss side by side. Lesson family: complete answers.',
    requiredMentions: ['is responsible for overseeing Ontario', 'compare and order integers, decimal numbers, and fractions, separately and in combination', 'the division of decimal numbers up to thousandths by whole numbers up to 10', 'evaluate algebraic expressions that involve whole numbers and decimal tenths', 'Motivated students in lower grades are welcome to write the contest.', 'Gauss Contests are based on math curriculum common to all Canadian provinces.', 'They are our practice, not EQAO questions.', 'Write 704 315 in words', 'for n in range(3, 21, 6)', 'A cyclist rides 18 km in 45 minutes'],
    sources: [
      { claim: 'EQAO role, Grade 6 Junior Division assessment name and the May 4 to June 8, 2027 window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Grade 6 math specific expectations quoted in the mapping table.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4' },
      { claim: 'Gauss eligibility, 2027 dates, format and curriculum basis.', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'Students participate in CEMC contests through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'The Grade 6 assessment page (linked; Cloudflare 403 on 22 October 2026, not described).', url: 'https://www.eqao.com/the-assessments/junior-division/' }
    ],
    rejectedClaims: [
      'Any Grade 6 EQAO format, length, delivery or sample-test details: the junior-division page was blocked, so none is given.',
      'Grade 9 EQAO facts applied to Grade 6: not done.',
      'That EQAO maps its questions to these expectations: the mapping is ours and labelled so.',
      'EQAO released questions or copies of them: none used.',
      'CEMC contest fees: left out of the page (no currency figures).',
      'Any EQAO level, mark or contest result from our classes: none promised.',
      'Any affiliation with EQAO, CEMC or the ministry: none, and the page says so.'
    ]
  }
};
