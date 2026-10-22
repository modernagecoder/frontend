'use strict';
// Math 30-1 vs Math 30-2 (ag- comparison door; Canada cluster Plan 2, row 29).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/math-30-1-vs-math-30-2/).
// Alberta writes "Mathematics 30–1", "30–2" and ranges like "45%–55%" with en dashes; the page writes hyphens and "to".
//  - Mathematics 30-1 Information Bulletin 2026-2027: course objective "entry into post-secondary programs that require the study of
//    calculus"; specifications 32 machine-scored (75%) and 3 written-response (25%); Relations and Functions 53%-58%, Trigonometry
//    27%-33%, Permutations, Combinations, and Binomial Theorem 14%-18%; "Each written-response question will consist of two parts".
//  - Mathematics 30-2 Information Bulletin 2026-2027 (alberta.ca/system/files/ecc-math-30-2-info-bulletin.pdf): course objective
//    "daily life, direct entry into the workforce, and post-secondary studies in programs that do not require the study of calculus";
//    "Technology, such as graphing calculators, is also used to enable students to explore and create patterns, examine relationships,
//    test conjectures, model, and solve problems."; "solutions may vary depending upon how the problem is understood"; specifications
//    32 machine-scored (75%) and 2 written-response (25%); Logical Reasoning 15%-20%, Probability 30%-35%, Relations and Functions
//    45%-55%, Research Project 0%; "it will begin with a 1-mark part followed by three 2-mark parts"; commentary quoted: odds "part-part"
//    and probability "part-whole"; "difficulty organizing and interpreting information that involves three sets"; "difficulty solving
//    rational equations, especially when the rational equation simplifies to a quadratic equation"; "difficulty solving exponential
//    equations that cannot be written as powers with a common base"; "Some students continue to express probability as a percent";
//    "Students are generally very successful in performing regressions"; Venn diagrams "should indicate only the number of elements in
//    each region"; both exams "up to 6 hours", designed for 3.
//  - Guide for Students, Mathematics 30-1 / 30-2: "Written-response questions are worth five marks each in Math 30-1 and seven marks
//    each in Math 30-2."; both written November, January, April, June, August; both need an approved graphing calculator.
//  - General Information Bulletin 2026-2027 schedule: Mathematics 30-1 and Mathematics 30-2 share each 9 AM to 12 PM slot (3 November
//    2026; 20 January, 8 April, 17 June, 5 August 2027).
//  - alberta.ca/diploma-exams-overview: course list includes Mathematics 30-1 and Mathematics 30-2; 30% weighting; 70/30.
//  - Guide to Education (manuals.alberta.ca), versions updated 4 September 2026: Course challenge: "High school mathematics course
//    sequences are an exception, as they are designed based on content rather than level of difficulty."; "A student may challenge
//    Mathematics 20-3 or Mathematics 20-2 after being awarded credits in Mathematics 20-1"; "The same exception applies to 30-level
//    mathematics courses."; course challenge in diploma courses applies "only to the school-awarded mark component". Transfer points:
//    "(Each course is 5 credits.)"; "Mathematics 30-1 is a prerequisite or corequisite for Mathematics 31."; "The school authority shall
//    have a policy that clearly states the criteria to be met by a student who wishes to change course sequences."; the chart image
//    (10C to 20-1 and 20-2 typical; 20-1 and 20-2 joined both ways; 20-1 to 30-2 possible; 30-1 and 30-2 joined both ways).
//    Alberta High School Diploma requirements: "Mathematics 20-1, Mathematics 20-2 or Mathematics 20-3"; "100 credits".
// Our own material, labelled: worked comparison 1 (population 8 000 growing 3% a year reaches 12 000 after log 1.5 / log 1.03 =
// 13.717 years), worked comparison 2 (5 red, 3 blue, two drawn: 20/56 + 6/56 = 13/28 = 0.464; combinations 10 + 3 = 13 of 28; odds in
// favour 13:15), the eight practice questions and answers (35:65 = 7:13; 3/8 = 0.375; (x - 3)/(x + 2), x not -2, -3; x = 2 with x = 3
// rejected; 40 - 28 = 12; image (-4, -7); verify (1 + tan^2 x)cos^2 x = 1 at pi/4; PRAIRIE 7!/(2!2!) = 1260), all computed in Python 3.13
// with exact fractions, and the decision steps.
// Lesson family: same problem, two lenses (choose the method the course expects).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_B1 = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf" rel="noopener" target="_blank">Mathematics 30-1 Information Bulletin</a>';
const SRC_B2 = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/ecc-math-30-2-info-bulletin.pdf" rel="noopener" target="_blank">Mathematics 30-2 Information Bulletin</a>';
const SRC_GTE = '<a class="ag-inline-link" href="https://manuals.alberta.ca/guide-to-education/" rel="noopener" target="_blank">Guide to Education</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: '30-1 VS 30-2', blurb: 'Alberta Math 30-1 and Math 30-2 side by side from Alberta Education\'s bulletins and Guide to Education: purpose, topics, written responses, switching, and the same problem solved both ways.' },
  slug: 'math-30-1-vs-math-30-2',
  code: 'math',
  accent: '#0D574F',
  accentRationale: 'Math 30-1 vs 30-2, Alberta: a deep fork-in-the-road teal, #0D574F, allocated for this row in alloc.tsv; 8.2 RGB units from the nearest site accent (#14544C) and 16.1 from the nearest Canada page accent (#1D5751); contrast 7.95 on the paper #FBF8F2 and 6.84 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Math 30-1 vs Math 30-2',
  title: 'Math 30-1 vs Math 30-2: Alberta\'s Two Grade 12 Math Paths',
  description: 'Math 30-1 vs Math 30-2 in Alberta: what each course is for, topics and exam blueprints, written responses, switching rules, and one problem solved both ways.',
  ogDescription: 'Alberta says its math sequences differ by content, not difficulty. Here is what that means for Math 30-1 and Math 30-2, from Alberta\'s own bulletins, with the same problem worked in each style.',
  twitterDescription: 'Math 30-1 or Math 30-2? Alberta\'s two Grade 12 math courses compared.',
  pageName: 'Math 30-1 vs Math 30-2',
  webPageDescription: 'A comparison for Alberta families of Mathematics 30-1 and Mathematics 30-2, built from the 2026 to 2027 information bulletins and Alberta\'s Guide to Education, with worked comparisons, practice questions and a decision checklist.',
  courseDescription: 'Live online help with Alberta Math 30-1 or Math 30-2, taught alongside the school course in a batch or one to one. No provincial credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'Math 30-1 vs 30-2',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#purpose', label: 'Purpose' },
    { href: '#exams', label: 'The two exams' },
    { href: '#switch', label: 'Switching' },
    { href: '#both', label: 'Both ways' },
    { href: '#decide', label: 'Deciding' }
  ],
  eyebrow: 'Alberta &middot; Grades 11 and 12 &middot; Choosing a math sequence',
  h1: 'Math 30-1 vs Math 30-2: which Grade 12 math in Alberta?',
  lede: 'Families often ask which of Alberta&rsquo;s two Grade 12 diploma math courses is the &ldquo;harder&rdquo; one. Alberta&rsquo;s own Guide to Education answers that the question is framed wrongly: its math sequences &ldquo;are designed based on content rather than level of difficulty.&rdquo; Math 30-1 points toward programs that need calculus; Math 30-2 toward everything else. This page sets the two side by side from Alberta Education&rsquo;s documents and solves the same two problems in the style each course expects. We teach both alongside the school course, and we do not grant provincial credits.',
  secondaryCta: { href: '#both', label: 'See one problem, two ways' },
  wa: 'Hello Modern Age Coders, my teen in Alberta is choosing between Math 30-1 and Math 30-2 and would like advice and help with the course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Both Alberta diploma math courses',
  spec: [
    ['Courses', 'Mathematics 30-1 and Mathematics 30-2'],
    ['Diploma exams', 'Both, each 30% of the final mark'],
    ['Credits', 'Each math course is 5 credits'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Alberta time, no clock changes'],
    ['Credit', 'None from us: taught alongside school'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Math 30-1 and Math 30-2 are Alberta&rsquo;s two Grade 12 diploma math courses. Alberta designs 30-1 for post-secondary programs that require calculus and 30-2 for daily life, the workforce and programs that do not; it says the sequences differ by content, not difficulty. Each closes with a provincial exam carrying 30 per cent of the course mark. Modern Age Coders teaches either live online, in a batch or one to one, in our Western Canada Grade 12 Math course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Three courses for either path',
    lede: 'The first follows the Alberta Grade 12 outcomes. The second and third suit students who want firmer algebra or more data and probability.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'MTH / 01', title: 'Western Canada Grade 12 Math', note: 'Grade 12. Built on Math 30-1, and adapted for 30-2 students on probability, logic and modelling.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MTH / 02', title: 'High school mathematics', note: 'Grades 9 to 12. The algebra both courses lean on, for students unsure which path suits them.' },
      { course: 'data-science-course-for-teens-python-data', code: 'MTH / 03', title: 'Data science for teens', note: 'Ages 13 to 18. Regression, probability and real data sets, close kin to the 30-2 modelling work.' }
    ]
  },

  sections: [
    {
      id: 'purpose', tint: 'tint', eyebrow: 'What each course is for',
      h2: 'Two courses, two destinations',
      lede: 'Each bulletin opens its course description with the destination, and the destinations differ in one word: calculus. Everything else on this page follows from that.',
      body: [
        { kind: 'table', caption: 'Math 30-1 and Math 30-2 compared, from Alberta&rsquo;s 2026 to 2027 information bulletins and student guide (read 22 October 2026)', head: ['', 'Mathematics 30-1', 'Mathematics 30-2'], rows: [
          ['Built for', '&ldquo;entry into post-secondary programs that require the study of calculus&rdquo;', '&ldquo;daily life, direct entry into the workforce, and post-secondary studies in programs that do not require the study of calculus&rdquo;'],
          ['Exam topics', 'Relations and Functions 53% to 58%; Trigonometry 27% to 33%; Permutations, Combinations, and Binomial Theorem 14% to 18%', 'Relations and Functions 45% to 55%; Probability 30% to 35%; Logical Reasoning 15% to 20%; Research Project 0%'],
          ['Machine-scored questions', '32, worth 75%', '32, worth 75%'],
          ['Written responses', '3 questions of 5 marks, each in two parts', '2 questions of 7 marks, each a 1-mark part and three 2-mark parts'],
          ['Calculator', 'Approved graphing calculator required', 'Approved graphing calculator required'],
          ['Time', '3 hours designed, 3 more allowed', '3 hours designed, 3 more allowed'],
          ['Exam weight', '30% of the final mark', '30% of the final mark'],
          ['Leads to', 'Mathematics 31, which needs 30-1 as a prerequisite or corequisite', 'No Grade 12 math course listed after it on the Guide&rsquo;s chart']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the 30-2 bulletin stresses',
          left: [
            'The 30-2 description puts modelling at the centre: graphing calculators are used &ldquo;to explore and create patterns, examine relationships, test conjectures, model, and solve problems.&rdquo; It adds a line the 30-1 bulletin does not have, that &ldquo;solutions may vary depending upon how the problem is understood.&rdquo;',
            'Its topics show why. Logical reasoning (sets, Venn diagrams, puzzles) and probability (odds, mutually exclusive and dependent events) carry about half of the exam. Neither appears as a strand in 30-1.'
          ],
          rightH3: 'What the 30-1 bulletin stresses',
          right: [
            'The 30-1 course is algebra-first: transformations of functions, inverses, logarithms, polynomial, radical and rational functions, then a full trigonometry strand with identities and proofs. Those are the skills a first calculus course assumes on day one.',
            'Counting is shared ground. Both courses meet permutations and combinations, but 30-1 carries them to the binomial theorem, while 30-2 uses them inside probability questions.'
          ] },
        { kind: 'source', html: 'Sources: ' + SRC_B1 + ' and ' + SRC_B2 + ' for 2026-2027 (course objectives, specifications, written-response format); Alberta&rsquo;s Guide for Students, Mathematics 30-1 / 30-2; ' + SRC_GTE + ', transfer points and course sequences (updated 4 September 2026). Read 22 October 2026. Modern Age Coders has no tie to Alberta Education and Childcare.' }
      ]
    },
    {
      id: 'exams', tint: 'deep', eyebrow: 'The two diploma exams',
      h2: 'Same morning, same weight, different questions',
      lede: 'The two exams share a great deal of their structure. Alberta&rsquo;s 2026 to 2027 schedule puts Mathematics 30-1 and Mathematics 30-2 in the same 9 AM to 12 PM slot on each date: Tuesday 3 November 2026, then 20 January, 8 April, 17 June and 5 August 2027. Both count for 30 per cent of the course mark. Where they part is the written response.',
      body: [
        { kind: 'two',
          leftH3: 'Written responses in 30-1',
          left: [
            'Three questions, each with two parts scored on a 2-mark and a 3-mark guide, for five marks a question. The student guide puts it simply: &ldquo;Written-response questions are worth five marks each in Math 30-1 and seven marks each in Math 30-2.&rdquo;',
            'The 30-1 commentary focuses on algebraic process: proving identities, simplifying versus solving, and sketching graphs with every key feature.'
          ],
          rightH3: 'Written responses in 30-2',
          right: [
            'Two questions, each of four parts: the 30-2 bulletin says each &ldquo;will begin with a 1-mark part followed by three 2-mark parts.&rdquo; Each part goes on its own answer sheet, so the student writes eight separate pieces.',
            'The 30-2 markers write most about communication: labelling odds and probability correctly, using &ldquo;appropriate use of units and appropriate rounding&rdquo;, and relating an answer back to the context.'
          ] },
        { kind: 'table', mt: true, caption: 'Where Math 30-2 students lose marks, from the 2026 to 2027 bulletin commentary (left column quoted; right column our response)', head: ['Alberta&rsquo;s commentary on 30-2', 'How we teach it'], rows: [
          ['Odds should be considered &ldquo;part-part&rdquo; and probability &ldquo;part-whole&rdquo;', 'Every answer is labelled: odds in favour, odds against, or P(event)'],
          ['&ldquo;Some students continue to express probability as a percent&rdquo;', 'Probabilities are written as fractions or decimals from 0 to 1, never as percentages'],
          ['&ldquo;difficulty organizing and interpreting information that involves three sets&rdquo;', 'Venn diagrams drawn first, filled from the centre outward, with only counts in each region'],
          ['&ldquo;difficulty solving rational equations, especially when the rational equation simplifies to a quadratic equation&rdquo;', 'Non-permissible values listed before solving, and both quadratic roots checked against them'],
          ['&ldquo;difficulty solving exponential equations that cannot be written as powers with a common base&rdquo;', 'Logarithms or a graph intersection, chosen deliberately: worked comparison 1 below'],
          ['Students are &ldquo;generally very successful in performing regressions&rdquo; but must use non-rounded values', 'Regression coefficients kept in calculator memory, not retyped']
        ] },
        { kind: 'p', mt: true, html: 'The 30-1 commentary is a different list: mapping notation for stretches, invariant points, combining logarithm laws, rational functions with holes, identity substitutions and multi-case counting. A student moving from one course to the other changes not just topics but the kind of mistake to watch for.' },
        { kind: 'source', html: 'Sources: the 2026-2027 diploma schedule in Alberta&rsquo;s General Information Bulletin; ' + SRC_B2 + ' (written-response format, commentary); ' + SRC_B1 + ' (commentary); the Guide for Students. Read 22 October 2026.' }
      ]
    },
    {
      id: 'switch', tint: 'tint', eyebrow: 'Sequences, switching and the diploma',
      h2: 'How the sequences connect, and how to switch',
      lede: 'Alberta&rsquo;s Guide to Education draws the high school math courses as a chart of arrows: solid for the typical progression, broken for a possible one. Reading it answers most switching questions.',
      body: [
        { kind: 'table', caption: 'Routes into and out of the two courses, read from the mathematics chart in Alberta&rsquo;s Guide to Education (version updated 4 September 2026)', head: ['From', 'To', 'Arrow on the chart'], rows: [
          ['Mathematics 10C', 'Mathematics 20-1 or Mathematics 20-2', 'Typical progression'],
          ['Mathematics 20-1', 'Mathematics 30-1', 'Typical progression'],
          ['Mathematics 20-2', 'Mathematics 30-2', 'Typical progression'],
          ['Mathematics 20-1', 'Mathematics 30-2', 'Possible progression'],
          ['Mathematics 20-1 and 20-2', 'Each other', 'Typical progression, both directions'],
          ['Mathematics 30-1 and 30-2', 'Each other', 'Typical progression, both directions'],
          ['Mathematics 30-1', 'Mathematics 31', 'Typical progression; 30-1 is &ldquo;a prerequisite or corequisite&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Content, not difficulty',
          left: [
            'The clearest sign of how Alberta thinks about these courses is a rule on course challenges. Normally a student cannot challenge a course in a lower sequence after earning credit in a higher one. Mathematics is the exception: &ldquo;High school mathematics course sequences are an exception, as they are designed based on content rather than level of difficulty.&rdquo;',
            'The Guide goes on: &ldquo;A student may challenge Mathematics 20-3 or Mathematics 20-2 after being awarded credits in Mathematics 20-1&rdquo;, and &ldquo;The same exception applies to 30-level mathematics courses.&rdquo; In diploma courses, a challenge covers only the school-awarded mark; the diploma exam still has to be written.'
          ],
          rightH3: 'Who decides a switch',
          right: [
            'Switching sequences is a school matter. The Guide says &ldquo;The school authority shall have a policy that clearly states the criteria to be met by a student who wishes to change course sequences.&rdquo; So the first conversation is with the school counsellor, not with a tutor.',
            'For the diploma itself, the math requirement is at the 20 level: the Guide lists &ldquo;Mathematics 20-1, Mathematics 20-2 or Mathematics 20-3&rdquo; among the requirements for the 100-credit Alberta High School Diploma. A 30-level math course is a choice made for what comes after.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_GTE + ', sections Transfer points and course sequences for senior high school, Course challenge, and Alberta High School Diploma graduation requirements (English), each in the version updated 4 September 2026 and read 22 October 2026. The chart rows above are our reading of Alberta&rsquo;s chart image.' }
      ]
    },
    {
      id: 'both', tint: 'deep', eyebrow: 'Same problem, two lenses (ours)',
      h2: 'Two problems, solved the 30-2 way and the 30-1 way',
      lede: 'These are our own problems, not Alberta Education questions. Each one sits inside both courses, and each is solved twice: once the way a 30-2 student is taught to model it, and once the way a 30-1 student is expected to handle it algebraically.',
      body: [
        { kind: 'p', html: '<b>Comparison 1: growth.</b> A town of 8 000 people grows by 3 per cent a year. After how many years will it reach 12 000?' },
        { kind: 'two',
          leftH3: 'The 30-2 way: model, then solve',
          left: [
            'Write the model from the context: P = 8000(1.03)<sup>t</sup>, where t is in years. The growth factor 1.03 comes from adding 3 per cent to 100 per cent.',
            'Set 8000(1.03)<sup>t</sup> = 12 000, so (1.03)<sup>t</sup> = 1.5. Since 1.5 is not a power of 1.03, there is no common base, which is exactly the case Alberta&rsquo;s 30-2 commentary says students find hard. Either graph y = 8000(1.03)<sup>x</sup> and y = 12 000 and find the intersection, or take logarithms: t = log 1.5 / log 1.03 = 13.717..., so about 13.7 years. Then answer in context: the town passes 12 000 during its fourteenth year.'
          ],
          rightH3: 'The 30-1 way: algebra, then structure',
          right: [
            'A 30-1 question would ask the student to <b>algebraically determine</b> t, so the graph is a check, not the method: log((1.03)<sup>t</sup>) = log 1.5, then t log 1.03 = log 1.5 by the power law, then t = 13.717...',
            'It might then push further: write t as a function of P. Solving P = 8000(1.03)<sup>t</sup> for t gives t = log<sub>1.03</sub>(P/8000), the inverse of the growth model, with domain P &gt; 0. Inverses and logarithmic functions as objects in their own right are 30-1 territory.'
          ] },
        { kind: 'p', mt: true, html: '<b>Comparison 2: chance.</b> A bag holds 5 red and 3 blue marbles. Two are drawn without replacement. What is the probability that both are the same colour, and what are the odds in favour?' },
        { kind: 'two',
          leftH3: 'The 30-2 way: cases and odds',
          left: [
            'There are two cases, and the 30-2 commentary warns that students who see more than one case often fail to combine them. Both red: (5/8)(4/7) = 20/56. Both blue: (3/8)(2/7) = 6/56. The cases are mutually exclusive, so add: 26/56 = 13/28, about 0.46.',
            'Odds compare part with part: 13 favourable to 15 unfavourable, so the odds in favour are 13:15. Writing 13:28 here would be the &ldquo;part-whole&rdquo; mix-up the markers describe.'
          ],
          rightH3: 'The 30-1 way: count the selections',
          right: [
            'A 30-1 student would count instead. Ways to choose two reds: <sub>5</sub>C<sub>2</sub> = 10. Ways to choose two blues: <sub>3</sub>C<sub>2</sub> = 3. Ways to choose any two: <sub>8</sub>C<sub>2</sub> = 28. So 13 of the 28 equally likely selections are same-colour.',
            'The answer is identical, 13/28, and that is the lesson: the counting methods 30-1 builds are the engine underneath the probability 30-2 uses. A student switching courses carries more across than they fear.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Eight practice questions, labelled by course',
      lede: 'All eight are our own. The first five are in the style of Math 30-2, the next two in the style of Math 30-1, and the last belongs to both. None is taken from an Alberta exam or practice test.',
      body: [
        { kind: 'ol', items: [
          '<b>30-2.</b> The probability of rain tomorrow is 0.35. State the odds in favour of rain in lowest terms.',
          '<b>30-2.</b> The odds against an event are 5:3. What is the probability that it happens, as a decimal?',
          '<b>30-2.</b> Simplify (x<sup>2</sup> &minus; 9) / (x<sup>2</sup> + 5x + 6) and state the non-permissible values.',
          '<b>30-2.</b> Solve x + 6/(x &minus; 3) = 2x/(x &minus; 3), and justify any root you reject.',
          '<b>30-2.</b> In a group of 40 students, 22 play soccer, 15 play basketball and 9 play both. How many play neither?',
          '<b>30-1.</b> The point (4, &minus;2) lies on y = f(x). Find its image on y = 3f(&minus;x) &minus; 1.',
          '<b>30-1.</b> Verify that (1 + tan<sup>2</sup>x)cos<sup>2</sup>x = 1 for x = &pi;/4. Does this prove the identity?',
          '<b>Both.</b> How many different arrangements can be made from all the letters of PRAIRIE?'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>7:13.</b> The probability 0.35 means 35 parts in favour out of 100, so 65 against: 35:65, which reduces to 7:13.',
          '<b>0.375.</b> Odds against of 5:3 mean 3 favourable outcomes for every 5 unfavourable, out of 8: P = 3/8 = 0.375.',
          '<b>(x &minus; 3)/(x + 2), with x &ne; &minus;2 and x &ne; &minus;3.</b> Factor: (x &minus; 3)(x + 3) over (x + 2)(x + 3). The non-permissible values come from the original denominator, so &minus;3 stays excluded after cancelling.',
          '<b>x = 2.</b> First note x &ne; 3. Multiply by (x &minus; 3): x(x &minus; 3) + 6 = 2x, so x<sup>2</sup> &minus; 5x + 6 = 0 and x = 2 or x = 3. Reject x = 3, because it makes a denominator zero. Check x = 2: 2 + 6/(&minus;1) = &minus;4, and 4/(&minus;1) = &minus;4.',
          '<b>12.</b> Those who play at least one sport: 22 + 15 &minus; 9 = 28, since the 9 were counted twice. Neither: 40 &minus; 28 = 12.',
          '<b>(&minus;4, &minus;7).</b> The mapping is (x, y) to (&minus;x, 3y &minus; 1): reflect in the y-axis, stretch vertically by 3, then translate down 1. So x becomes &minus;4 and y becomes 3(&minus;2) &minus; 1 = &minus;7.',
          '<b>True at &pi;/4, but not a proof.</b> tan(&pi;/4) = 1 and cos<sup>2</sup>(&pi;/4) = 1/2, so (1 + 1)(1/2) = 1. Alberta defines verify as checking a particular case; a proof must show the identity for every permissible x, for example by replacing 1 + tan<sup>2</sup>x with sec<sup>2</sup>x.',
          '<b>1260.</b> PRAIRIE has 7 letters, with R twice and I twice: 7! / (2! &times; 2!) = 5040 / 4 = 1260.'
        ] }
      ]
    },
    {
      id: 'decide', tint: 'deep', eyebrow: 'Deciding, step by step',
      h2: 'How to choose between Math 30-1 and Math 30-2',
      lede: 'Our checklist for a family making the choice, usually in Grade 10 or Grade 11 when the 20-level course is picked. It is advice, not a rule: the school&rsquo;s counsellor and the student&rsquo;s intended programs have the final word.',
      body: [
        { kind: 'ol', items: [
          '<b>Start from the destination.</b> List two or three programs the student might apply to and read each one&rsquo;s admission page for the year of entry. If any of them requires calculus or names Math 30-1, keep the 30-1 route open.',
          '<b>Remember the diploma needs less.</b> The Alberta High School Diploma requires a 20-level math course (20-1, 20-2 or 20-3). Grade 12 math is chosen for what comes after school.',
          '<b>Look at Math 10C and 20-1 honestly.</b> Not the mark alone, but the algebra: can the student factor, rearrange formulas and work with functions without notes? 30-1 builds on exactly that.',
          '<b>Weigh the interests.</b> A student who enjoys logic puzzles, data and chance may find 30-2 a better fit for its content, which is how Alberta describes the difference.',
          '<b>Ask the school about switching.</b> The chart shows routes between the sequences, and each school authority must have a policy on the criteria. Find out before the semester starts, not halfway through it.',
          '<b>Plan Math 31 early if calculus is likely.</b> Math 31 needs 30-1 as a prerequisite or corequisite, so a student who wants it must be on the 30-1 track in time.',
          '<b>Decide, then commit.</b> Whichever course is chosen, the diploma exam is 30 per cent of the mark. The first unit deserves full effort, because it sets up the rest.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When 30-2 is the right call',
          left: [
            'For a student heading into a trade, the workforce, or a program that does not ask for calculus, Math 30-2 is not a lesser course: it is the course Alberta built for that destination, with probability, logical reasoning and modelling that many adults use more often than trigonometric identities.',
            'We tutor 30-2 students with the same seriousness as 30-1 students, and we push them on communication, because that is where the 30-2 markers say marks are lost.'
          ],
          rightH3: 'When 30-1 is worth the stretch',
          right: [
            'For a student with a realistic interest in engineering, the sciences, computer science or anything else built on calculus, 30-1 is the course that keeps those doors open. It asks for steady algebra, and that can be built.',
            'If a student chooses 30-1 and struggles in the first unit, the usual cause is a gap from Math 20-1: factoring, function notation or exponent laws. Those gaps can be closed in a few weeks of focused work, which is often a better plan than switching.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen stands',
    h2: 'Four signs a student is ready for Math 30-1',
    lede: 'Our own markers, from teaching students in both Alberta sequences.',
    table: { caption: 'Readiness for Math 30-1 (ours)', head: ['Sign', 'What to look for'], rows: [
      ['1. Factoring is automatic', 'Trinomials and differences of squares factored without stopping to think'],
      ['2. Functions make sense', 'Reads f(x) notation, evaluates and sketches without a calculator'],
      ['3. Exponent laws are solid', 'Simplifies powers with negative and fractional exponents correctly'],
      ['4. Steps are written down', 'Shows working without being asked, and can explain each line']
    ] },
    left: { h3: 'For parents', ps: [
      'If two of the four are missing in Grade 11, that is not a verdict on 30-1. It is a list of what to work on before Grade 12 starts.',
      'Talk to the school counsellor before deciding. Switching rules are set by the school authority, and the counsellor knows them.'
    ] },
    right: { h3: 'For students', ps: [
      'Choose by where you are going, not by which course your friends take. Alberta itself says the sequences differ by content.',
      'Whichever you pick, label your answers. Both sets of markers mention it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses that pair with either path',
    lede: 'Each is taught live, by one teacher who stays with the group or the student.',
    bands: [
      { num: 'I', h3: 'Building the base', sub: 'Grades 9 to 12', courses: [
        { code: 'MTH / B / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and equations for Math 10C and 20-1.' },
        { code: 'MTH / B / 02', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions and trigonometry for the 30-1 route.' },
        { code: 'MTH / B / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'For students heading to Math 31.' }
      ] },
      { num: 'II', h3: 'Logic, chance and data', sub: 'Teens', courses: [
        { code: 'MTH / L / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Chance and data beyond the 30-2 unit.' },
        { code: 'MTH / L / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Logic and counting puzzles at contest level.' },
        { code: 'MTH / L / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Simulate probability experiments in code.' }
      ] },
      { num: 'III', h3: 'Toward a career', sub: 'Teens', courses: [
        { code: 'MTH / C / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where probability meets prediction.' },
        { code: 'MTH / C / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Web pages and simple games.' },
        { code: 'MTH / C / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Counting and logic, solved fast.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes for either sequence',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school slots in Alberta, picked with the batch.' },
      { time: 'Weekends', l: 'Weekend mornings, Alberta time.' },
      { time: '1-on-1', l: 'Around unit tests or a sequence change.' }
    ],
    cells: [
      { h3: 'Either course', p: '30-1 or 30-2, from the school outline.' },
      { h3: 'Labelled answers', p: 'Odds, probability and units, every time.' },
      { h3: 'Algebra repair', p: 'Gaps from 20-1 closed early.' },
      { h3: 'Context first', p: 'Each answer related back to the problem.' },
      { h3: 'Exam format', p: 'Written responses in the right shape.' },
      { h3: 'Size of class', p: 'A batch (fifteen to twenty), or solo.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Students apply probability, functions and data in code they write themselves. The <a class="ag-inline-link" href="/student-labs">student labs</a> collect more.',
  reviewsLede: 'What families and students said on Google.',

  fees: {
    h2: 'Fees',
    lede: 'We charge nothing for the first class. After it, families pay a monthly fee that covers eight live classes, shown in their local currency below; nothing locks you in past the current month.',
    free: ['First class free', 'Bring the course outline', 'No card asked for'],
    group: ['Batch of fifteen to twenty', 'A fixed teacher', 'Batch time of your choice', 'Monthly billing'],
    one: ['Your teen only', 'Hours to suit the school week', 'Built around 30-1 or 30-2']
  },

  faq: {
    eyebrow: 'Questions from families choosing',
    h2: 'Math 30-1 vs 30-2: common questions',
    items: [
      { q: 'What is the difference between Math 30-1 and Math 30-2?', a: 'Alberta designs Math 30-1 for post-secondary programs that require calculus, and Math 30-2 for daily life, the workforce and programs that do not. 30-1 centres on functions and trigonometry; 30-2 adds logical reasoning and probability and stresses modelling.' },
      { q: 'Is Math 30-2 easier than Math 30-1?', a: 'Alberta\'s Guide to Education says its high school math sequences are designed based on content rather than level of difficulty. The courses differ in what they cover and where they lead, and each has its own hard parts.' },
      { q: 'Do both courses have a diploma exam?', a: 'Yes. Mathematics 30-1 and Mathematics 30-2 are both diploma exam courses, each exam counts for 30 percent of the final mark, and in 2026 to 2027 both are written in the same 9 AM slot on the same five dates.' },
      { q: 'How are the written responses different?', a: 'Math 30-1 has 3 written-response questions worth 5 marks each, in two parts. Math 30-2 has 2 written-response questions worth 7 marks each, a 1-mark part followed by three 2-mark parts. Both exams also have 32 machine-scored questions worth 75 percent.' },
      { q: 'Can my teen switch from Math 30-1 to Math 30-2?', a: 'Alberta\'s course chart shows routes between the two sequences, and each school authority must have a policy setting out the criteria for changing sequences. Ask the school counsellor about the policy before the semester begins.' },
      { q: 'Does the Alberta diploma require Math 30-1 or 30-2?', a: 'Neither. The Alberta High School Diploma requires a 20-level math course: Mathematics 20-1, 20-2 or 20-3. A 30-level math course is chosen for post-secondary plans.' },
      { q: 'Which course leads to Math 31?', a: 'Math 30-1. Alberta\'s Guide to Education says Mathematics 30-1 is a prerequisite or corequisite for Mathematics 31.' },
      { q: 'Do you grant credit for Math 30-1 or 30-2?', a: 'No. We teach both courses alongside school and we do not grant provincial credits. Credit and the 70 percent school mark are matters for the student\'s school.' },
      { q: 'When are lessons held for Alberta students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are booked in Alberta time, which does not change with the seasons.' },
      { q: 'How much do lessons cost?', a: 'The first class is free. Continuing families pay a monthly fee for eight live classes with no long contract. The price panel lower down shows the current batch and one-to-one amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Keep reading',
    lede: 'Useful next pages for an Alberta family.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our full set of pages for Canada.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'From first code to Grade 12 math, province-wide.' },
      { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province', p: 'How Alberta&rsquo;s courses line up with other provinces.' },
      { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutor', p: 'Help in the year the 20-level course is chosen.' },
      { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutor', p: 'Support through the diploma year.' },
      { href: '/blog/how-to-solve-quadratic-equations', label: 'Solving quadratics', p: 'Behind every rational equation that turns quadratic.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For students on the 30-1 route.' },
      { href: '/private-math-tutor-vs-online-tutoring', label: 'Tutor in person or online?', p: 'How families weigh the two.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Try a free first class',
    lede: 'Tell us which course your teen is in or considering, and share a recent test. We will look at the algebra together and give an honest view.',
    readFirst: 'Reading first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers our method, and the <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Grade 12 course page</a> shows the syllabus.',
    note: 'Lessons are live on video from teachers in India; no one comes to your home and nobody drives anywhere. WhatsApp works well for reaching us from Alberta.',
    formNote: 'We do not ask for a card to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Alberta math', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Western Canada Grade 12 Math' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutor' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/canada-high-school-math-courses-compared', label: 'Grade 12 math by province' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Pick by destination, then label every answer'
  },

  personalityCss: `
.ag-root.ag-math .ag-hero h1 { letter-spacing: -0.012em; max-width: 23ch; }
.ag-root.ag-math .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-math .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-math .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-math .ag-table th { text-transform: none; letter-spacing: 0.01em; }
.ag-root.ag-math .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'Alberta Education and Childcare: Mathematics 30-1 and Mathematics 30-2 Information Bulletins 2026-2027 (course objectives, specifications, written-response format, commentary); Guide for Students, Mathematics 30-1 / 30-2 (5 and 7 marks per written response); General Information Bulletin 2026-2027 schedule (shared slot); diploma exams overview; Guide to Education, versions updated 4 September 2026 (course challenge exception "designed based on content rather than level of difficulty", transfer chart, 5 credits, Math 31 prerequisite, school authority policy on changing sequences, diploma 20-level math requirement, 100 credits).',
    localProject: 'Two original comparisons solved in both styles: a town of 8 000 growing 3% a year reaches 12 000 after log 1.5 / log 1.03 = 13.7 years, with the inverse t = log base 1.03 of (P/8000); same-colour draws from 5 red and 3 blue, 13/28 by cases and by combinations, odds 13:15; eight original practice questions labelled by course with checked answers; a seven-step decision checklist. Lesson family: same problem, two lenses.',
    requiredMentions: ['designed based on content rather than level of difficulty', 'The same exception applies to 30-level mathematics courses', 'post-secondary studies in programs that do not require the study of calculus', 'will begin with a 1-mark part followed by three 2-mark parts', 'Logical Reasoning 15% to 20%', 'Research Project 0%', 'shall have a policy that clearly states the criteria', 'Mathematics 20-1, Mathematics 20-2 or Mathematics 20-3', 'the odds in favour are 13:15', 'all the letters of PRAIRIE'],
    sources: [
      { claim: 'Math 30-2 course objective, specifications, written-response format and commentary.', url: 'https://www.alberta.ca/system/files/ecc-math-30-2-info-bulletin.pdf' },
      { claim: 'Math 30-1 course objective, specifications and commentary.', url: 'https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf' },
      { claim: 'Five and seven marks per written response; writing sessions.', url: 'https://www.alberta.ca/system/files/ecc-guide-for-students-mathematics.pdf' },
      { claim: 'Course challenge exception for math sequences.', url: 'https://manuals.alberta.ca/guide-to-education/program-administration-and-delivery-awarding-course-credits/course-challenge/' },
      { claim: 'Transfer chart, 5 credits, Math 31 prerequisite, school authority switching policy.', url: 'https://manuals.alberta.ca/guide-to-education/program-planning-courses-and-programs/transfer-points-and-course-sequences-for-senior-high-school/' },
      { claim: 'Diploma requirement of a 20-level math course; 100 credits.', url: 'https://manuals.alberta.ca/guide-to-education/program-administration-and-delivery-diploma-and-certificate-requirements/alberta-high-school-diploma-graduation-requirements-english/' }
    ],
    rejectedClaims: [
      'That Math 30-2 is easier or that universities reject it: Alberta says the sequences differ by content, and no university page was readable (ualberta 403, ucalgary script-rendered); families are told to check program pages.',
      'Program-by-program admission requirements naming Math 30-1 or 30-2: none stated.',
      'Math 20-1 or 20-2 course content: the program of studies could not be read, so only their place in the sequence is described.',
      'A Grade 12 math course after 30-2: the chart shows none; the page says only what the chart shows.',
      'Any connection with Alberta Education and Childcare or a school authority: none, and the page says so.'
    ]
  }
};
