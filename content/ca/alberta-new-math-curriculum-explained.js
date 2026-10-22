'use strict';
// Alberta's new math curriculum explained (ag- curriculum door; Canada cluster Plan 2, row 35).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/alberta-new-math-curriculum-explained/).
//  - alberta.ca/curriculum-mathematics ("Highlights of the K to 9 mathematics curriculum"): K to 6 "focus on numeracy skills"; Grades 7
//    to 9 "students connect concrete experiences to their comprehension of abstract concepts"; "Studying and mastering mathematics can
//    lead to jobs in computer science, construction, artificial intelligence, teaching, engineering and many other fields."; "Draft 7 to
//    9 mathematics curriculum was released in June 2025 for field testing."; "Field testing occurred between January and March 2026.";
//    engagement themes (Content load "Content load is heavy, particularly in Grade 7, and too much content results in surface-level
//    learning"; Sequencing; Alignment and clarity; Real-world applications) and the updates after engagement and after field testing;
//    the current (2016) vs draft (2026) comparison table, nine rows, quoted; the snapshot by grade, Kindergarten to Grade 9, quoted;
//    "Optional classroom piloting of draft 7 to 9 mathematics will occur in the 2026/2027 school year".
//  - alberta.ca/curriculum-subject-areas (K to 12 Curriculum Renewal Timeline: 2022 to 2027): "New grades K to 3 mathematics ...
//    implemented across the province." September 2022; "New grades 4 to 6 mathematics ..." 2023-24 school year; optional piloting of
//    draft 7 to 9 math 2026-27; "New 7 to 9 curriculums for career education and financial literacy, mathematics, physical education
//    and wellness, and social studies will be implemented." September 2027. (Caption-then-date order confirmed in the HTML.)
//  - alberta.ca/curriculum-how-we-got-here: under 2022/2023 "New K to 6 curriculum for English language arts and literature,
//    mathematics and physical education and wellness implemented in schools." (printed with its own page named, beside the timeline
//    page's split); "June 2026, release of updated draft curriculums for grades 7 to 9 ... mathematics ..., in preparation for optional
//    classroom piloting in 2026/27."; "During classroom piloting, teachers may pilot some or all of the draft curriculum."; "ahead of
//    mandatory implementation in September 2027"; the AI and computer science sentence belongs to the science 7 to 9 and CALM 10
//    paragraph (mandatory 2028/29), so it is quoted with that context only.
//  - alberta.ca/curriculum: field testing "is an optional, pre-pilot phase"; the three phases field testing, piloting, implementation.
//  - 2026-2027 Mathematics 9 Subject Bulletin: pilot classes "will not be required to write the Grade 9 Mathematics Provincial
//    Achievement Test"; General Information Bulletin (PATs), Appendix 1: "DEADLINE to fill out the PAT survey to indicate optionally
//    piloting new curriculum" November 27, 2026.
//  - 2026-2027 Grade 6 Mathematics Subject Bulletin: Part A "15 questions from Organizing Idea: Number"; Grade 6 Parent Guide: science
//    PAT reporting categories include "Computational Thinking".
// Failures recorded: open.alberta.ca (K to 6 and draft 7 to 9 fact sheets) returned a 403 Cloudflare challenge, not retried;
// curriculum.learnalberta.ca (the curriculum itself) is JavaScript only. So no outcome wording beyond alberta.ca's own summaries.
// Our own material, labelled: the Python snippet (runs in Python 3.13: table of f(x) = 2x - 3 for x = -1 to 5, then f(x) <= 7 for
// -5 to 5), the two worked examples (f(x) <= 7 gives x <= 5; x^2 = 49 gives +/-7; (x - 3)^2 = 16 gives 7 or -1), the eight practice
// questions and answers (5420.1; 22; 3/2; 14; slope 2; x^2 - 9; +/-5; 3/5), the "what to ask the school" steps and the ladder.
// Lesson family: notation as language (say it, write it, check it).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_MATH = '<a class="ag-inline-link" href="https://www.alberta.ca/curriculum-mathematics" rel="noopener" target="_blank">Alberta.ca, Mathematics (K to 12 curriculum renewal)</a>';
const SRC_AREAS = '<a class="ag-inline-link" href="https://www.alberta.ca/curriculum-subject-areas" rel="noopener" target="_blank">Alberta.ca, Subject areas and renewal timeline</a>';
const SRC_HISTORY = '<a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta.ca, How we got here</a>';

const SET_PY = `# A linear function, its table, and a solution set (ours)

def f(x):
    return 2 * x - 3

print("x   f(x)")
for x in range(-1, 6):
    print(f"{x:<3} {f(x)}")

# Which whole numbers from -5 to 10 satisfy f(x) <= 7?
solutions = [x for x in range(-5, 11) if f(x) <= 7]
print("f(x) <= 7 for", solutions)
print("Set-builder form: {x | -5 <= x <= 5, x is an integer}")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'NEW MATH CURRICULUM', blurb: 'Alberta\'s new K to 6 math and the draft Grades 7 to 9 math explained from Alberta\'s own pages: the timeline to September 2027, what changes in each grade, and what it means for families.' },
  slug: 'alberta-new-math-curriculum-explained',
  code: 'anmc',
  accent: '#6B5A27',
  accentRationale: 'Alberta new math curriculum: a muted prairie wheat brown, #6B5A27, allocated for this row in alloc.tsv; 6.2 RGB units from the nearest site accent (#6C6028) and 25.6 from the nearest Canada page accent (#545C32); contrast 6.36 on the paper #FBF8F2 and 5.47 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Alberta new math curriculum explained',
  title: 'Alberta\'s New Math Curriculum Explained: K to 6 and 7 to 9',
  description: 'Alberta\'s new math curriculum explained: K to 6 in place, draft Grades 7 to 9 piloting in 2026 to 2027 before September 2027, and what changes in each grade.',
  ogDescription: 'What Alberta\'s renewed math curriculum changes, grade by grade, from Alberta\'s own pages: the K to 6 rollout, the draft 7 to 9 piloting this year, September 2027, and the effect on the Grade 9 PAT.',
  twitterDescription: 'Alberta\'s new math curriculum, K to 9: timeline, changes and what families can do.',
  pageName: 'Alberta New Math Curriculum Explained',
  webPageDescription: 'A guide for Alberta parents to the renewed K to 9 mathematics curriculum, built from alberta.ca\'s curriculum pages and the 2026-2027 PAT bulletins, with the timeline, the current and draft comparison, the grade snapshot, worked examples and practice.',
  courseDescription: 'Live online math classes for Alberta students from the early grades to Grade 9, paced to the curriculum the student\'s class is using, in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'New math curriculum',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#changes', label: 'What changes' },
    { href: '#grades', label: 'Grade by grade' },
    { href: '#examples', label: 'Examples' },
    { href: '#families', label: 'For families' }
  ],
  eyebrow: 'Alberta &middot; Kindergarten to Grade 9 &middot; Curriculum renewal',
  h1: 'Alberta&rsquo;s new math curriculum, explained for parents',
  lede: 'Alberta has been replacing its math curriculum in stages. Kindergarten to Grade 6 already has the new version; Grades 7 to 9 are on a draft that some schools are piloting this year, with every school moving to the new version in September 2027. For a family that means two practical questions: which curriculum is my child&rsquo;s class using, and what is different about it? This page answers both from Alberta&rsquo;s own curriculum pages, with examples of the new Grade 9 ideas worked by us.',
  secondaryCta: { href: '#grades', label: 'See your child&rsquo;s grade' },
  wa: 'Hello Modern Age Coders, my child is in school in Alberta and I would like math help that matches the new curriculum. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Math from the early grades to Grade 9',
  spec: [
    ['For', 'Alberta families, Kindergarten to Grade 9'],
    ['K to 6', 'New curriculum in place'],
    ['Grades 7 to 9', 'Draft, optional piloting 2026 to 2027'],
    ['Required', 'New 7 to 9 math from September 2027'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Alberta time, UTC-6 all year'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Alberta&rsquo;s new math curriculum is already in place for Kindergarten to Grade 6. A draft for Grades 7 to 9, released in June 2025, is being piloted by some schools in 2026 to 2027 and becomes the curriculum everywhere in September 2027. It adds functions, irrational numbers, quadratic equations and set notation to junior high. Modern Age Coders teaches either version live online, in a batch or one to one, through our Middle School Mathematics course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Three courses that fit the new curriculum',
    lede: 'Chosen for the grades where the change is largest, Grades 7 to 9, and for students who like to see math work in code.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ANM / 01', title: 'Middle School Mathematics', note: 'Grades 6 to 8. Integers, fractions, equations, geometry and data, taught to the class&rsquo;s own unit order.' },
      { course: 'algebra-foundations-masterclass', code: 'ANM / 02', title: 'Algebra Foundations', note: 'Grades 7 to 9. Polynomials, factoring and equations, the heart of the draft Grade 9 changes.' },
      { course: 'maths-through-coding', code: 'ANM / 03', title: 'Maths through coding', note: 'Ages 10 to 15. Functions, patterns and probability explored by writing small Python programs.' }
    ]
  },

  sections: [
    {
      id: 'timeline', tint: 'tint', eyebrow: 'The timeline',
      h2: 'From September 2022 to September 2027: how the rollout runs',
      lede: 'Alberta publishes its renewal timeline on its curriculum pages. For mathematics, the steps are below, each with the page it comes from. Two Alberta pages describe the K to 6 start slightly differently, so both are shown.',
      body: [
        { kind: 'table', caption: 'Alberta mathematics curriculum renewal, as published on alberta.ca (read 22 October 2026)', head: ['When', 'What happened or happens', 'Alberta page'], rows: [
          ['September 2022', '&ldquo;New grades K to 3 mathematics and English language arts and literature, and K to 6 physical education and wellness implemented across the province.&rdquo;', 'Subject areas timeline'],
          ['2023-24 school year', '&ldquo;New grades 4 to 6 mathematics and English language arts and literature&rdquo; implemented across the province', 'Subject areas timeline'],
          ['2022/2023 (as filed on the history page)', '&ldquo;New K to 6 curriculum for English language arts and literature, mathematics and physical education and wellness implemented in schools.&rdquo;', 'How we got here'],
          ['June 2025', '&ldquo;Draft 7 to 9 mathematics curriculum was released in June 2025 for field testing.&rdquo;', 'Mathematics'],
          ['January to March 2026', '&ldquo;Field testing occurred between January and March 2026.&rdquo;', 'Mathematics'],
          ['June 2026', 'Updated draft Grades 7 to 9 math released &ldquo;in preparation for optional classroom piloting in 2026/27&rdquo;', 'How we got here'],
          ['2026 to 2027 school year', 'Optional classroom piloting of the draft Grades 7 to 9 math curriculum', 'Mathematics; Subject areas timeline'],
          ['September 2027', '&ldquo;New 7 to 9 curriculums for career education and financial literacy, mathematics, physical education and wellness, and social studies will be implemented.&rdquo;', 'Subject areas timeline']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Field testing, piloting, implementation',
          left: [
            'Alberta moves each new curriculum through three phases. Field testing &ldquo;is an optional, pre-pilot phase&rdquo; in which schools try selected parts. Piloting is next: &ldquo;During classroom piloting, teachers may pilot some or all of the draft curriculum.&rdquo; Implementation is when the curriculum becomes required everywhere.',
            'For Grades 7 to 9 math, field testing finished in March 2026 and piloting is happening now. Alberta&rsquo;s history page says the draft will keep being refined &ldquo;ahead of mandatory implementation in September 2027.&rdquo;'
          ],
          rightH3: 'Why two different K to 6 dates',
          right: [
            'The renewal timeline gives K to 3 math in September 2022 and Grades 4 to 6 math in the 2023-24 school year. The history page files the whole K to 6 math change under 2022/2023. Both are Alberta&rsquo;s own pages; we print both rather than choose.',
            'For families the practical point is the same either way: any child now in Kindergarten to Grade 6 in an Alberta school is learning from the new math curriculum, and has been for at least two school years.'
          ] },
        { kind: 'source', html: 'Sources: ' + SRC_AREAS + '; ' + SRC_MATH + '; ' + SRC_HISTORY + '; Alberta.ca, K to 12 curriculum renewal overview. All read 22 October 2026. Alberta&rsquo;s K to 6 and draft 7 to 9 fact sheets sit on open.alberta.ca, which refused our request, and the curriculum itself is on new LearnAlberta, which needs a browser; neither is quoted here. Modern Age Coders is not connected with Alberta Education and Childcare.' }
      ]
    },
    {
      id: 'changes', tint: 'deep', eyebrow: 'Current and draft, side by side',
      h2: 'What the draft Grades 7 to 9 math changes',
      lede: 'Alberta&rsquo;s mathematics page compares the current Grade 7 to 9 curriculum, &ldquo;updated in 2016&rdquo;, with the draft. It notes that the comparison &ldquo;provides examples and does not represent all the changes that were made.&rdquo; Here are its nine rows, in Alberta&rsquo;s words.',
      body: [
        { kind: 'table', caption: 'Current (2016) and draft (2026) Grades 7 to 9 mathematics, examples quoted from alberta.ca/curriculum-mathematics (read 22 October 2026)', head: ['Area', 'Current 7 to 9 (2016)', 'Draft 7 to 9 (2026)'], rows: [
          ['Real numbers', '&ldquo;Students learn about rational numbers but do not explore absolute value or scientific notation.&rdquo;', '&ldquo;Students learn about irrational numbers, sets, and notation&rdquo;; &ldquo;introduced to absolute value and scientific notation&rdquo;'],
          ['Equations and inequalities', '&ldquo;Students solve linear equations and inequalities.&rdquo;', '&ldquo;Students learn to solve quadratic equations and linear inequalities&rdquo;; &ldquo;introduced to set builder notation&rdquo;'],
          ['Polynomial expressions', '&ldquo;Students add, subtract, multiply, and divide polynomials.&rdquo;', '&ldquo;Students are introduced to identities to support strategies of expanding and factoring polynomials.&rdquo;'],
          ['Geometric objects', '&ldquo;Students construct perpendicular lines and angle bisectors.&rdquo;', '&ldquo;Students use symbols and symbolic notation to communicate relationships among angles, lines and objects.&rdquo;'],
          ['Theorems', '&ldquo;Students explore the Pythagorean theorem.&rdquo;', '&ldquo;introduced to additional theorems, including angle theorems and triangle properties&rdquo;'],
          ['2-D and 3-D shapes', '&ldquo;Students explore area and volume of 3-D shapes.&rdquo;', '&ldquo;volume of composite 3-D shapes&rdquo; and &ldquo;surface area and volume of pyramids&rdquo;'],
          ['Functions', '&ldquo;Students are not introduced to functions.&rdquo;', '&ldquo;Students develop knowledge of functions and their characteristics&rdquo;'],
          ['Data', '&ldquo;Students learn about factors that influence data collection.&rdquo;', '&ldquo;Students interpret sample data by analyzing distributions, focusing on shape and spread&rdquo;'],
          ['Probability', '&ldquo;Students solve problems involving independent events.&rdquo;', '&ldquo;Students explore how multiple events influence probability&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What stands out',
          left: [
            'Three changes reach furthest. Functions arrive in junior high, where the 2016 curriculum did not introduce them at all. Quadratic equations, until now a high school topic, appear in Grade 9 in simple forms. And notation becomes something students are taught to use deliberately: set-builder notation, function notation, symbols for angles and lines.',
            'Those are exactly the habits Alberta&rsquo;s Grade 12 diploma bulletins say students struggle to show on the written responses. Starting them earlier is, in our reading, the point.'
          ],
          rightH3: 'What teachers told Alberta',
          right: [
            'Alberta lists what it heard in 2025 engagement. On content load: &ldquo;Content load is heavy, particularly in Grade 7, and too much content results in surface-level learning&rdquo;. Partners also asked for better sequencing between grades, clearer wording, and more real-world examples.',
            'Alberta says it responded by refining content &ldquo;identified as redundant or repetitive&rdquo;, adjusting the order of learning, revising statements for clarity, and adding &ldquo;real-world examples and applications throughout grades 7 to 9&rdquo;. After the 2026 field test it made further changes to sequencing, clarity and real-world content.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_MATH + ', sections Current and draft curriculum comparison, What we heard during engagement in 2025, and What we updated, read 22 October 2026.' }
      ]
    },
    {
      id: 'grades', tint: 'tint', eyebrow: 'Grade by grade',
      h2: 'The new math curriculum in each grade, Kindergarten to Grade 9',
      lede: 'Alberta&rsquo;s mathematics page gives a snapshot of &ldquo;some of the content students explore in each grade&rdquo;. Kindergarten to Grade 6 is the curriculum now in schools; Grades 7 to 9 are the draft being piloted. The middle column is Alberta&rsquo;s; the right column is ours.',
      body: [
        { kind: 'table', caption: 'Snapshot by grade from alberta.ca/curriculum-mathematics (shortened; read 22 October 2026), with a sample task of ours', head: ['Grade', 'Some of what students explore (Alberta)', 'A sample task at home (ours)'], rows: [
          ['Kindergarten', '&ldquo;Count and represent quantities within 10.&rdquo;; recognize 2-D and 3-D shapes; compare objects by length, area, weight and capacity', 'Count the forks for dinner, then show the same number on fingers'],
          ['Grade 1', '&ldquo;Recall addition number facts to a sum of 20 and related subtraction facts.&rdquo;; compare and sort shapes; cycles of time', 'If 8 + 7 = 15, what is 15 &minus; 7?'],
          ['Grade 2', '&ldquo;Add and subtract numbers within 100.&rdquo;; sort shapes by a rule; measure length in centimetres; &ldquo;Collect and graph data.&rdquo;', 'Measure three spoons in centimetres and order them'],
          ['Grade 3', 'Add and subtract within 1000 &ldquo;using standard procedures (algorithms)&rdquo;; &ldquo;Recall multiplication number facts to 10 x 10&rdquo;; tell time on analog and digital clocks', 'Work out 403 &minus; 178 with the column method, then check by adding'],
          ['Grade 4', 'Add and subtract within 10,000 &ldquo;including decimal numbers&rdquo;; multiply and divide 3-digit by 1-digit numbers; area of rectangles', 'Area of a 7 m by 4 m rectangle'],
          ['Grade 5', 'Add and subtract within 1,000,000; multiply 3-digit by 2-digit numbers; &ldquo;Write and evaluate algebraic expressions.&rdquo;', 'Evaluate 3n + 4 when n = 6'],
          ['Grade 6', '&ldquo;Multiply fractions by natural numbers.&rdquo;; &ldquo;Calculate area and volume.&rdquo;; &ldquo;Solve algebraic equations.&rdquo;', 'Work out 4 &times; 3/8'],
          ['Grade 7 (draft)', '&ldquo;Add, subtract, multiply and divide integers.&rdquo;; &ldquo;Solve equations with algebraic terms on both sides.&rdquo;; &ldquo;Interpret domain and range of functions.&rdquo;', 'Evaluate (&minus;6) &times; (&minus;4) &minus; 10'],
          ['Grade 8 (draft)', '&ldquo;Classify and simplify polynomials.&rdquo;; &ldquo;Investigate slope of linear functions.&rdquo;; histograms for the shape of a distribution', 'Slope of the line through (1, 3) and (5, 11)'],
          ['Grade 9 (draft)', '&ldquo;Represent sets of real numbers.&rdquo;; &ldquo;Expand and factor polynomials.&rdquo;; &ldquo;Solve linear inequalities and simple quadratic equations.&rdquo;; function and set-builder notation; box plots; mutually exclusive events', 'Solve 2x<sup>2</sup> = 50']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'K to 6: numeracy and standard algorithms',
          left: [
            'Alberta describes Kindergarten to Grade 6 as having &ldquo;a focus on numeracy skills, which provides students with a solid foundation of mathematical knowledge.&rdquo; The phrase that recurs in the snapshot is &ldquo;standard procedures (algorithms)&rdquo;: column addition and subtraction from Grade 3, and multiplication algorithms in Grades 4 and 5.',
            'The Grade 6 math PAT is now organized the same way. Its 2026 to 2027 bulletin describes Part A as &ldquo;15 questions from Organizing Idea: Number&rdquo;, the vocabulary of the new curriculum.'
          ],
          rightH3: 'Grades 7 to 9: from concrete to abstract',
          right: [
            'For the junior high grades, Alberta writes that &ldquo;students connect concrete experiences to their comprehension of abstract concepts&rdquo;, and that &ldquo;They communicate by using conventional mathematical symbols, notation and vocabulary.&rdquo;',
            'In practice that is a Grade 9 student writing {x | x &le; 5, x &isin; R} instead of &ldquo;x is 5 or less&rdquo;, and knowing why the two say the same thing. The examples below show what that looks like.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'Two new Grade 9 ideas, worked through',
      lede: 'Both examples are ours, written to the draft Grade 9 snapshot; they are not Alberta Education material. The first uses function and set-builder notation, the second a simple quadratic equation. A short Python program at the end checks the first one.',
      body: [
        { kind: 'p', html: '<b>Example 1: a linear function and its solution set.</b> For f(x) = 2x &minus; 3, find f(4), then find every real x with f(x) &le; 7 and write the answer in set-builder notation.' },
        { kind: 'ol', items: [
          '<b>Read the notation aloud.</b> &ldquo;f of x equals two x minus three&rdquo; means: take the input, double it, subtract three. f(4) means the input is 4.',
          '<b>Evaluate.</b> f(4) = 2(4) &minus; 3 = 5.',
          '<b>Turn the condition into an inequality.</b> f(x) &le; 7 becomes 2x &minus; 3 &le; 7.',
          '<b>Solve it like an equation, carefully.</b> Add 3: 2x &le; 10. Divide by 2 (a positive number, so the sign stays): x &le; 5.',
          '<b>Write the set.</b> {x | x &le; 5, x &isin; R}: &ldquo;the set of all x such that x is at most 5, where x is a real number.&rdquo; Every part of the notation says something the sentence says.',
          '<b>Check a value on each side.</b> f(5) = 7, which satisfies &le; 7. f(6) = 9, which does not. The boundary behaves as the set says.'
        ] },
        { kind: 'p', mt: true, html: '<b>Example 2: a simple quadratic equation.</b> Solve x<sup>2</sup> = 49, then solve (x &minus; 3)<sup>2</sup> = 16.' },
        { kind: 'ol', items: [
          '<b>Ask what number squares to 49.</b> Both 7 and &minus;7 do, because (&minus;7)<sup>2</sup> = 49 as well. So x = 7 or x = &minus;7, often written x = &plusmn;7. Forgetting the negative root is the classic first mistake.',
          '<b>Treat the bracket as one quantity.</b> In (x &minus; 3)<sup>2</sup> = 16, the quantity x &minus; 3 squares to 16, so x &minus; 3 = 4 or x &minus; 3 = &minus;4.',
          '<b>Solve each case.</b> x = 7 or x = &minus;1.',
          '<b>Check both.</b> (7 &minus; 3)<sup>2</sup> = 16 and (&minus;1 &minus; 3)<sup>2</sup> = (&minus;4)<sup>2</sup> = 16. Two solutions, both valid: exactly the &ldquo;understanding of multiple solutions&rdquo; Alberta&rsquo;s comparison table says the draft is aiming for.'
        ] },
        { kind: 'code', label: 'Python &middot; checking example 1 (ours)', lang: 'python', code: SET_PY, note: 'Output: a table from x = &minus;1 (f = &minus;5) to x = 5 (f = 7), then f(x) &lt;= 7 for &minus;5, &minus;4, ..., 5. The program only tests whole numbers in a window, while the real answer covers every real x up to 5; seeing the difference is part of the lesson.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Eight practice questions across the new curriculum',
      lede: 'Our own questions, one or two per grade band, written to Alberta&rsquo;s snapshot. They are not Alberta Education questions. Answers follow.',
      body: [
        { kind: 'ol', items: [
          '<b>Grade 4.</b> Add 3482.6 and 1937.5 with the column method.',
          '<b>Grade 5.</b> Evaluate 3n + 4 when n = 6.',
          '<b>Grade 6.</b> Multiply 4 &times; 3/8 and write the answer as a fraction in lowest terms.',
          '<b>Grade 7.</b> Evaluate (&minus;6) &times; (&minus;4) &minus; 10.',
          '<b>Grade 8.</b> Find the slope of the line through (1, 3) and (5, 11).',
          '<b>Grade 9.</b> Expand (x + 3)(x &minus; 3). Which identity does it show?',
          '<b>Grade 9.</b> Solve 2x<sup>2</sup> = 50.',
          '<b>Grade 9.</b> In a class of 30, 12 students play piano, 10 play guitar and 4 play both. What is the probability that a student chosen at random plays piano or guitar?'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>5420.1.</b> Line up the decimal points; the tenths give 6 + 5 = 11, so write 1 and carry 1.',
          '<b>22.</b> 3(6) + 4 = 18 + 4.',
          '<b>3/2.</b> 4 &times; 3/8 = 12/8, which simplifies to 3/2 (or 1 1/2).',
          '<b>14.</b> A negative times a negative is positive: 24 &minus; 10 = 14.',
          '<b>2.</b> Rise over run: (11 &minus; 3) / (5 &minus; 1) = 8/4 = 2.',
          '<b>x<sup>2</sup> &minus; 9.</b> The middle terms cancel. It is the difference of squares, (a + b)(a &minus; b) = a<sup>2</sup> &minus; b<sup>2</sup>, the kind of identity the draft uses to support factoring.',
          '<b>x = 5 or x = &minus;5.</b> Divide by 2 to get x<sup>2</sup> = 25, then take both square roots.',
          '<b>3/5, or 0.6.</b> The events overlap (not mutually exclusive), so subtract the overlap once: (12 + 10 &minus; 4)/30 = 18/30 = 3/5.'
        ] }
      ]
    },
    {
      id: 'families', tint: 'deep', eyebrow: 'What families can do',
      h2: 'What the change means for your child this year',
      lede: 'The renewal affects families differently depending on the grade. Our advice, in order.',
      body: [
        { kind: 'ol', items: [
          '<b>Find out which curriculum the class is using.</b> For Kindergarten to Grade 6 it is the new one. For Grades 7 to 9 in 2026 to 2027, ask the school whether the math class is piloting the draft; Alberta set a 27 November 2026 deadline for schools to tell it about optional piloting.',
          '<b>If your child is in a Grade 9 pilot class, note the PAT rule.</b> Alberta&rsquo;s Grade 9 math bulletin says pilot classes &ldquo;will not be required to write the Grade 9 Mathematics Provincial Achievement Test&rdquo; in 2026 to 2027.',
          '<b>If your child is in Grade 6, expect the PAT in the new curriculum&rsquo;s terms.</b> The Grade 6 math PAT is organized by the new organizing ideas, starting with Number.',
          '<b>Watch the bridge years.</b> A student finishing Grade 9 on the 2016 curriculum in June 2027 and a student finishing on the draft will reach Math 10C with different experience of functions and quadratics. Gaps are fixable; they just need noticing.',
          '<b>Practise notation, not just answers.</b> Ask your child to read an expression aloud and to write one sentence as symbols. Both directions matter under the new curriculum.',
          '<b>Use Alberta&rsquo;s own material.</b> The K to 6 curriculum and the draft 7 to 9 curriculum are published on new LearnAlberta for anyone to read, and alberta.ca summarizes each grade.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where coding fits',
          left: [
            'Alberta&rsquo;s math page closes its overview with careers: mathematics &ldquo;can lead to jobs in computer science, construction, artificial intelligence, teaching, engineering and many other fields.&rdquo; Its K to 6 science curriculum is where computing shows up by name: the Grade 6 science PAT reports on a category called &ldquo;Computational Thinking&rdquo;.',
            'Alberta&rsquo;s history page also says the renewed curriculum will integrate &ldquo;topics like artificial intelligence, computer science and money management&rdquo;. That sentence sits with the draft science 7 to 9 and CALM 10 work, which Alberta plans to require from 2028/29, so it is not a statement about math.'
          ],
          rightH3: 'Why we teach functions through code',
          right: [
            'A function in the draft Grade 9 sense (an input, a rule, an output) is the same idea as a function in a program. Students who write f(x) = 2x &minus; 3 as three lines of Python, as in the example above, tend to understand domain and output faster than students who only see it on paper.',
            'That is why our Maths through coding course sits beside the algebra courses for this age group. It does not replace learning the notation; it gives the notation something to do.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of comfort with math notation',
    lede: 'Our own stages, useful for any student meeting the draft Grade 7 to 9 ideas.',
    table: { caption: 'Comfort with notation (ours)', head: ['Stage', 'What you notice'], rows: [
      ['1. Words only', 'Explains an idea in a sentence but freezes at f(x) or set brackets'],
      ['2. Reader', 'Reads notation aloud correctly and can say what it means'],
      ['3. Writer', 'Turns a sentence into symbols, such as an inequality or a set'],
      ['4. Checker', 'Tests a written answer with values on both sides of a boundary']
    ] },
    left: { h3: 'For parents', ps: [
      'You do not need to know the new curriculum to help. Ask your child to teach you one symbol from this week&rsquo;s math.',
      'If the class is piloting the draft, keep the school&rsquo;s unit list nearby. It is the clearest map of what is being taught.'
    ] },
    right: { h3: 'For students', ps: [
      'Say notation out loud until it sounds like a sentence. Then it stops being decoration.',
      'Whenever an equation has a square, look for a second answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Alberta children and teens',
    lede: 'Live online, one regular teacher, in a batch or individually.',
    bands: [
      { num: 'I', h3: 'Early grades', sub: 'Kindergarten to Grade 5', courses: [
        { code: 'ANM / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting and shapes, ages 4 to 7.' },
        { code: 'ANM / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary mathematics', blurb: 'Grades 1 to 5, placed by grade.' },
        { code: 'ANM / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number facts without tricks.' }
      ] },
      { num: 'II', h3: 'Junior high and beyond', sub: 'Grades 7 to 12', courses: [
        { code: 'ANM / J / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems for keen students.' },
        { code: 'ANM / J / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Gauss for Grades 7 and 8, then on.' },
        { code: 'ANM / J / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'The step into Math 10C.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Ages 6 to 18', courses: [
        { code: 'ANM / C / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch games and first logic.' },
        { code: 'ANM / C / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art and small projects.' },
        { code: 'ANM / C / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Functions in code, for real.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live math classes for Alberta students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Alberta, set by the batch you join.' },
      { time: 'Weekends', l: 'Weekend mornings in Alberta time.' },
      { time: '1-on-1', l: 'Fitted around the class&rsquo;s unit tests.' }
    ],
    cells: [
      { h3: 'Either curriculum', p: '2016 or draft, whichever the class uses.' },
      { h3: 'Notation taught', p: 'Read aloud, then written.' },
      { h3: 'Code alongside', p: 'Functions checked in Python.' },
      { h3: 'Unit order', p: 'Following the school&rsquo;s list.' },
      { h3: 'Bridge gaps', p: 'Spotted early, fixed steadily.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'Projects where the math turns into something that runs. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents and students on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class is free. From the second month on it is one monthly fee for eight live classes, shown in your currency below, and you may stop whenever a month ends.',
    free: ['A free first class', 'Bring a recent worksheet', 'No card needed to book'],
    group: ['Fifteen to twenty learners', 'A steady teacher', 'Batch time you choose', 'Monthly, no term contract'],
    one: ['Just your child', 'Times around school', 'Planned to their curriculum']
  },

  faq: {
    eyebrow: 'Questions from Alberta parents',
    h2: 'Alberta&rsquo;s new math curriculum: common questions',
    items: [
      { q: 'When did Alberta\'s new math curriculum start?', a: 'Alberta\'s renewal timeline gives September 2022 for new Kindergarten to Grade 3 math and the 2023-24 school year for Grades 4 to 6. Alberta\'s history page files the whole K to 6 math change under 2022/2023.' },
      { q: 'When does the new Grade 7 to 9 math curriculum start?', a: 'Alberta plans mandatory implementation of the new Grades 7 to 9 math curriculum in September 2027. In the 2026 to 2027 school year some schools are optionally piloting the draft.' },
      { q: 'What is different in the new Grades 7 to 9 math?', a: 'Alberta\'s comparison lists, among other changes, functions in junior high, irrational numbers and set notation, absolute value and scientific notation, simple quadratic equations, polynomial identities, more theorems, pyramids and composite shapes, and data distributions.' },
      { q: 'Is my child\'s school piloting the new math curriculum?', a: 'Piloting is optional in 2026 to 2027, and teachers may pilot some or all of the draft. Ask the school directly; it will know whether your child\'s math class is using the draft.' },
      { q: 'Does the new curriculum affect the Grade 9 math PAT?', a: 'Yes, this year. Alberta\'s 2026 to 2027 Grade 9 math bulletin says classes in schools piloting the new Grade 9 math curriculum will not be required to write the Grade 9 math PAT. Other classes write it in June 2027.' },
      { q: 'Does the new curriculum affect the Grade 6 math PAT?', a: 'The Grade 6 math PAT now uses the new curriculum\'s structure: its 2026 to 2027 bulletin describes Part A as questions from the organizing idea Number, and Part B as drawing on all organizing ideas.' },
      { q: 'Where can I read the new math curriculum?', a: 'Alberta publishes the K to 6 curriculum and the draft Grades 7 to 9 curriculum on new LearnAlberta, and summarizes them on its alberta.ca mathematics page, including a snapshot for each grade.' },
      { q: 'Is coding part of Alberta\'s new math curriculum?', a: 'Alberta\'s math page does not say so. It names computer science and artificial intelligence among careers math can lead to, and the Grade 6 science PAT reports on Computational Thinking. We teach coding alongside math for students who want it.' },
      { q: 'What times are classes for families in Alberta?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are set in Alberta time, which is UTC-6 throughout the year.' },
      { q: 'How much are classes?', a: 'The first class is free. Families who stay pay one monthly fee for eight live classes and can stop between months. The Fees panel shows today\'s figures for a batch and for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Alberta families and for parents comparing provinces.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our Canadian pages, gathered.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'Coding and math across Alberta.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Where coding sits in each province&rsquo;s schools.' },
      { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math tutor', p: 'One-to-one help in the last K to 6 year.' },
      { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor', p: 'Help with functions, polynomials and more.' },
      { href: '/blog/how-to-solve-quadratic-equations', label: 'Solving quadratics', p: 'The next step after simple quadratic equations.' },
      { href: '/blog/how-to-help-a-child-understand-fractions', label: 'Helping with fractions', p: 'For the K to 6 years.' },
      { href: '/gauss-contest-preparation', label: 'Gauss contest', p: 'Waterloo&rsquo;s contest for Grades 7 and 8.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our approach in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free math class',
    lede: 'Tell us your child&rsquo;s grade, whether the class is on the new or draft curriculum if you know, and the topic that is causing trouble. The first class starts there.',
    readFirst: 'Prefer to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes our lessons, and the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Mathematics syllabus</a> shows the junior high plan.',
    note: 'Every class is live on video with teachers based in India, so nobody travels. WhatsApp is the quickest way for Alberta families to reach us.',
    formNote: 'Booking the free class asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Math by stage', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle School Mathematics' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra Foundations' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/canada-coding-curriculum-by-province', label: 'Coding by province' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Say it, write it, check it'
  },

  personalityCss: `
.ag-root.ag-anmc .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-anmc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-anmc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-anmc .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-anmc .ag-code-head span { text-transform: uppercase; letter-spacing: 0.05em; }
.ag-root.ag-anmc .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'alberta.ca: curriculum-mathematics (K to 6 numeracy focus, 7 to 9 description, careers sentence, draft released June 2025, field testing January to March 2026, 2025 engagement themes and updates, current 2016 vs draft 2026 comparison, snapshot by grade, optional piloting 2026/2027); curriculum-subject-areas (renewal timeline: K to 3 math September 2022, 4 to 6 math 2023-24, 7 to 9 implementation September 2027); curriculum-how-we-got-here (2022/2023 K to 6 math; June 2026 updated drafts; piloting some or all; September 2027); curriculum overview (field testing and piloting definitions); 2026-2027 Mathematics 9 and Grade 6 Mathematics Subject Bulletins; PAT significant dates (27 November 2026 piloting survey deadline); Grade 6 Parent Guide (Computational Thinking). open.alberta.ca fact sheets 403; LearnAlberta JavaScript only.',
    localProject: 'Two original worked examples on draft Grade 9 ideas (f(x) = 2x - 3 with f(x) <= 7 written {x | x <= 5, x in R}; x^2 = 49 and (x - 3)^2 = 16), a Python program that tabulates f and checks the inequality (run in Python 3.13), eight original practice questions from Grade 4 to Grade 9 with checked answers, and a six-step family checklist. Lesson family: notation as language.',
    requiredMentions: ['Content load is heavy, particularly in Grade 7, and too much content results in surface-level learning', 'Students are not introduced to functions.', 'Draft 7 to 9 mathematics curriculum was released in June 2025 for field testing.', 'Field testing occurred between January and March 2026.', 'New grades K to 3 mathematics and English language arts and literature', 'can lead to jobs in computer science, construction, artificial intelligence', 'Solve linear inequalities and simple quadratic equations.', 'is an optional, pre-pilot phase', 'Set-builder form: {x | -5 &lt;= x &lt;= 5, x is an integer}', 'In a class of 30, 12 students play piano'],
    sources: [
      { claim: 'K to 9 math highlights, draft release and field testing, engagement themes and updates, current vs draft comparison, grade snapshot, piloting.', url: 'https://www.alberta.ca/curriculum-mathematics' },
      { claim: 'Renewal timeline: K to 3 math September 2022, Grades 4 to 6 math 2023-24, Grades 7 to 9 implementation September 2027.', url: 'https://www.alberta.ca/curriculum-subject-areas' },
      { claim: 'History of renewal, June 2026 updated drafts, piloting some or all, mandatory implementation September 2027.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'Field testing and piloting phases.', url: 'https://www.alberta.ca/curriculum' },
      { claim: 'Pilot classes exempt from the Grade 9 math PAT in 2026/27.', url: 'https://www.alberta.ca/system/files/edc-math-9-subject-bulletin-2026-27.pdf' },
      { claim: 'Grade 6 math PAT Part A from Organizing Idea: Number.', url: 'https://www.alberta.ca/system/files/edc-math-6-subject-bulletin-2026-27.pdf' }
    ],
    rejectedClaims: [
      'That coding is in the new math curriculum: alberta.ca\'s math page does not say so; the page says only what Alberta says.',
      'That the AI and computer science sentence on the history page refers to math: it sits with the science 7 to 9 and CALM 10 drafts, and is quoted in that context.',
      'Specific learning outcomes from the curriculum documents: LearnAlberta needs JavaScript and open.alberta.ca refused the request, so only alberta.ca\'s summaries are quoted.',
      'The funding figure on the history page: a currency amount, left off this currency-neutral page and not needed.',
      'Any opinion on whether the new curriculum is better or worse: none offered.',
      'Any connection with Alberta Education and Childcare or a school authority: none, and the page says so.'
    ]
  }
};
