'use strict';
// Cambridge IGCSE Additional Mathematics 0606 help (ag- exam door, UK and US exams cluster, row UK027).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/cambridge-igcse-additional-maths-0606-help/):
//  - Cambridge IGCSE Additional Mathematics 0606 syllabus for 2025, 2026 and 2027 (/Images/662470-2025-2027-syllabus.pdf).
//    Verbatim: "All candidates take two components. Candidates will be eligible for grades A* to E."; "Calculators are not
//    allowed for Paper 1."; Paper 1 and Paper 2 each "Written paper, 2 hours, 80 marks", 50%; "This paper consists of
//    questions based on any part of the content."; "Grades A* to E will be available for candidates who achieve the
//    required standards. Grades F and G will not be available. Therefore, candidates who do not achieve the minimum mark
//    for grade E will be unclassified."; fourteen topics (Functions ... Calculus); "No formulas will be given in the List
//    of formulas for the Calculus section."; "Knowledge of the subject content of IGCSE Mathematics (0580) or IGCSE (9–1)
//    Mathematics (0980) is assumed. This includes the use of indices and surds."; "It is designed to stretch the more able
//    candidates and provides a smooth transition to Cambridge International AS & A Level Mathematics."; AO1 45 to 55,
//    AO2 45 to 55; "If candidates are asked to show their working, or show that a given result is true, they cannot gain
//    full marks without clearly communicating and fully justifying their method."; "A numerical answer should not be given
//    as a combination of fractions and decimals"; "When asked to 'simplify', the candidate must simplify fully."; graph
//    conventions (modulus of a non-linear function "should have cusps"; values read "to an accuracy of within half of the
//    smallest square"); "about 130 guided learning hours"; June and November series, March in India; "Private candidates
//    can enter for this syllabus."; exception "Cambridge O Level Additional Mathematics (4037)"; changes for 2025: "The
//    Indices and surds topic has been removed from the subject content (this is now assumed knowledge)", "A new topic on
//    Coordinate geometry of the circle has been added", "Paper 1 is now a non-calculator paper", "The questions in the
//    examinations are the same standard as in the existing assessment.", "Mark schemes have been updated to award more
//    marks for working where appropriate"; 14.1 "Only an informal understanding of the idea of a limit is expected".
//  - Getting ready to teach factsheet (/Images/665419-...): "Learners will need to practise solving problems and showing
//    their working without a calculator."; "renamed Calculus as Differentiation and Integration".
//  - 0606 syllabus for 2028, 2029 and 2030 (/Images/745683-2028-2030-syllabus.pdf): "There are no significant changes
//    which affect teaching."
// Our own material, labelled on the page: the circle and line example (centre (3, -2), radius 5, meeting points (3, -7)
// and (8, -2)), the stationary-point example y = 2x^3 - 9x^2 + 12x + 1 (maximum (1, 6), minimum (2, 5)), and a
// six-question practice set, all checked in Python on 31 October 2026. No Cambridge question is reproduced.
// Spine: there is no safety net below E. 0606 has no F or G, both papers can test any topic, and Paper 1 bans the
// calculator, so a candidate entered without secure algebra can leave with nothing. Lesson family: algebra fluency
// strong enough to do calculus by hand.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'ADD MATHS 0606', blurb: 'No grade F or G exists in 0606: miss E and the result is unclassified. Paper 1 has no calculator and both papers can test any topic.' },
  slug: 'cambridge-igcse-additional-maths-0606-help',
  code: 'cia',
  accent: '#722F31',
  accentRationale: 'Cambridge IGCSE Additional Mathematics 0606: an oxblood #722F31 from the cluster allocation, 9.14:1 on #FBF8F2 and 7.87:1 on the deepest paper tint, darker and redder than the plum used for 0580',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IGCSE Additional Maths 0606 help',
  title: 'IGCSE Additional Maths 0606 Help: Papers, Topics, Grades',
  description: 'IGCSE Additional Maths 0606 tutor help: two 2-hour papers, Paper 1 with no calculator, fourteen topics and no grade below E. Live online classes, 1-on-1 or group.',
  ogDescription: 'Cambridge IGCSE Additional Mathematics 0606 from the 2025 to 2027 syllabus: the two papers, the fourteen topics, the missing F and G grades and the calculus by hand.',
  twitterDescription: 'IGCSE Add Maths 0606: what is on each paper, why there is no grade below E, and how to do the calculus without a calculator.',
  pageName: 'IGCSE Additional Maths 0606 Help',
  webPageDescription: 'Live online teaching for Cambridge IGCSE Additional Mathematics 0606, written from the 2025 to 2027 syllabus and its 2025 changes.',
  courseDescription: 'Live online classes for Cambridge IGCSE Additional Mathematics 0606: functions, logarithms, the circle, trigonometry, series and calculus, with non-calculator working for Paper 1.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IGCSE Additional Maths 0606',
  navLinks: [
    { href: '#papers', label: 'The two papers' },
    { href: '#grades', label: 'No F or G' },
    { href: '#topics', label: 'Fourteen topics' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cambridge International &middot; IGCSE 0606 &middot; Years 10 and 11',
  h1: 'IGCSE Additional Maths 0606 help',
  lede: 'Cambridge IGCSE Additional Mathematics, code 0606, is the second maths qualification that strong pupils take alongside 0580 or 0980. Cambridge describes it as designed "to stretch the more able candidates" and as a smooth transition to AS and A Level. It also has a feature families rarely hear about until results day: the grade scale stops at E. This page covers the two papers, the fourteen topics, what changed for 2025 and why the calculus has to be done by hand.',
  secondaryCta: { href: '#papers', label: 'The two papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for IGCSE Additional Maths 0606.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Independent of Cambridge International',
  spec: [
    ['Qualification', 'Cambridge IGCSE Additional Mathematics 0606'],
    ['Syllabus in use', 'For exams in 2025, 2026 and 2027'],
    ['Paper 1', 'No calculator, 2 hours, 80 marks'],
    ['Paper 2', 'Calculator, 2 hours, 80 marks'],
    ['Grades', 'A* to E only'],
    ['Assumed', '0580 or 0980 content, with indices and surds'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Cambridge IGCSE Additional Mathematics 0606 is an advanced IGCSE from Cambridge International for able pupils, usually in Years 10 and 11. Every candidate sits two papers of 2 hours and 80 marks: Paper 1 without a calculator and Paper 2 with one, each worth half. Both papers can test any of fourteen topics, from functions and logarithms to calculus. Only grades A* to E exist. Modern Age Coders teaches 0606 live online through our IGCSE Mathematics course, in a group of 15 to 20 or 1-on-1, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an Additional Maths candidate',
    lede: 'Our IGCSE course carries the 0606 content. The A level course is where the same ideas continue, and the competition course stretches the problem solving.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'CA / 01', title: 'IGCSE Mathematics', note: 'Additional Mathematics 0606 taught with, or after, the 0580 Extended content it assumes.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CA / 02', title: 'A Level Maths', note: 'Pure mathematics that continues 0606 calculus, logarithms and trigonometry.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'CA / 03', title: 'Competition Mathematics', note: 'Unfamiliar problems for pupils who finish 0606 papers with time left over.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The two papers',
      h2: 'How is IGCSE Additional Maths 0606 assessed?',
      lede: 'Two written papers of equal length and weight. The only difference between them is the calculator.',
      body: [
        { kind: 'p', html: 'Unlike 0580, Additional Mathematics has no tiers. Every candidate sits the same two papers, and the syllabus says each "consists of questions based on any part of the content." There is no split where one paper takes algebra and the other takes calculus, so a pupil cannot hope to bank marks on a favourite topic in one sitting and avoid a weak one in the other.' },
        { kind: 'table', caption: 'Cambridge IGCSE Additional Mathematics 0606: the two components', head: ['Paper', 'Calculator', 'Time', 'Marks', 'Weight', 'Content'], rows: [
          ['Paper 1', 'Not allowed', '2 hours', '80', '50 per cent', 'Any part of the syllabus'],
          ['Paper 2', 'Scientific calculator required', '2 hours', '80', '50 per cent', 'Any part of the syllabus']
        ] },
        { kind: 'p', mt: true, html: 'Eighty marks in two hours is roughly one and a half minutes per mark, which is more generous per mark than 0580\'s Extended papers. The extra time is there because the marks are earned through longer chains of algebra. The assessment objectives are weighted evenly: knowledge and understanding of techniques (AO1) and analysing, interpreting and communicating (AO2) each carry 45 to 55 per cent of the qualification.' },
        { kind: 'source', html: 'Source: Cambridge IGCSE Additional Mathematics 0606 syllabus for 2025, 2026 and 2027, "Assessment overview" and "Details of the assessment", from the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-additional-0606/" rel="noopener" target="_blank">Cambridge International 0606 page</a>. The minutes-per-mark figure is our arithmetic.' }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'No F or G',
      h2: 'What happens if you fail IGCSE Additional Maths?',
      lede: 'The result is unclassified. 0606 has no grades F or G to fall back on.',
      body: [
        { kind: 'p', html: 'The syllabus is unusually direct about this: "Grades A* to E will be available for candidates who achieve the required standards. Grades F and G will not be available. Therefore, candidates who do not achieve the minimum mark for grade E will be unclassified." In 0580 a weak Core paper still earns a G. In 0606 there is no equivalent; a pupil either reaches E or leaves with no grade for the subject.' },
        { kind: 'table', mt: true, caption: 'How 0606 grading compares with the main IGCSE, from the two Cambridge syllabuses', head: ['', '0580 Core', '0580 Extended', '0606 Additional'], rows: [
          ['Grades available', 'C to G', 'A* to E', 'A* to E'],
          ['Tiers', 'Two', 'Two', 'None'],
          ['If below the lowest grade', 'Ungraded', 'Ungraded', 'Unclassified'],
          ['Calculator ban', 'Paper 1', 'Paper 2', 'Paper 1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for entry',
          left: [
            'A school enters 0606 candidates because it believes they will reach at least E. That judgement rests on algebra: the syllabus assumes the whole of 0580 or 0980 content, "This includes the use of indices and surds."',
            'A pupil who is still shaky on Extended 0580 algebra is the pupil most at risk of an unclassified 0606 result. It is better to secure that algebra first than to take both qualifications under strain.'
          ],
          rightH3: 'What it means for the upside',
          right: [
            'For a pupil who is secure, 0606 is a strong signal. Cambridge says candidates achieving A* to C "are well prepared to follow a wide range of courses including Cambridge International AS & A Level Mathematics."',
            'It also gives a running start on A level: logarithms, radians, the binomial expansion and calculus all appear again in the first year of sixth form.'
          ] },
        { kind: 'p', mt: true, html: 'Our first class for a 0606 candidate includes a short algebra check we wrote ourselves: rearranging, factorising cubics, index laws and surds. If it shows gaps, we say so before any Additional Maths topic is taught, because the risk of an unclassified result is too high to discover in a mock.' }
      ]
    },
    {
      id: 'topics', tint: '', eyebrow: 'Fourteen topics',
      h2: 'What topics are in IGCSE Additional Maths 0606?',
      lede: 'Fourteen, listed by Cambridge in this order, with a note on what each asks for beyond 0580.',
      body: [
        { kind: 'table', caption: 'The 0606 content list, with our note on the step up from 0580', head: ['#', 'Topic', 'The step up, in our words'], rows: [
          ['1', 'Functions', 'Domain, range, inverse and composite functions, and modulus graphs'],
          ['2', 'Quadratic functions', 'Completing the square, the discriminant and quadratic inequalities'],
          ['3', 'Factors of polynomials', 'The factor and remainder theorems for cubics'],
          ['4', 'Equations, inequalities and graphs', 'Modulus equations and sketching cubic and modulus curves'],
          ['5', 'Simultaneous equations', 'One linear and one non-linear equation'],
          ['6', 'Logarithmic and exponential functions', 'Laws of logarithms, solving exponential equations, natural logarithms'],
          ['7', 'Straight-line graphs', 'Turning a non-linear relationship into a straight line'],
          ['8', 'Coordinate geometry of the circle', 'New from 2025: the equation of a circle and where lines meet it'],
          ['9', 'Circular measure', 'Radians, arc length and sector area'],
          ['10', 'Trigonometry', 'Graphs, identities and equations over a given interval'],
          ['11', 'Permutations and combinations', 'Arrangements and selections, with restrictions'],
          ['12', 'Series', 'The binomial expansion, arithmetic and geometric progressions'],
          ['13', 'Vectors in two dimensions', 'Position vectors, unit vectors and velocities'],
          ['14', 'Calculus', 'Differentiation, integration, areas and kinematics']
        ] },
        { kind: 'source', html: 'Topic list from the 0606 syllabus for 2025, 2026 and 2027, "Content overview". The right-hand column is our summary, not Cambridge\'s wording; the syllabus itself gives the full learning outcomes and notes.' },
        { kind: 'two', mt: true,
          leftH3: 'Calculus without a formula list',
          left: [
            'The syllabus states: "No formulas will be given in the List of formulas for the Calculus section." Pupils must know the derivatives of x<sup>n</sup>, sin x, cos x, tan x, e<sup>x</sup> and ln x, the chain, product and quotient rules, and the matching integrals.',
            'Only "an informal understanding of the idea of a limit is expected", and differentiation from first principles is not required. The weight falls on using the rules accurately, not on proving them.'
          ],
          rightH3: 'Answers that lose marks on format',
          right: [
            'Cambridge lists conventions that cost marks if ignored. "A numerical answer should not be given as a combination of fractions and decimals". "When asked to \'simplify\', the candidate must simplify fully", and the same applies to factorise.',
            'On graphs, the modulus of a non-linear function "should have cusps", and values should be read to within half of the smallest square on the grid.'
          ] }
      ]
    },
    {
      id: 'changes', tint: 'tint', eyebrow: 'What changed for 2025',
      h2: 'What changed in 0606 for 2025, and is 2028 different?',
      lede: 'One topic in, one topic out, and a calculator ban on Paper 1. The syllabus for 2028 to 2030 makes no significant teaching change.',
      body: [
        { kind: 'table', caption: 'The 2025 revision of 0606, from Cambridge\'s change list', head: ['Change', 'Cambridge\'s wording'], rows: [
          ['Topic removed', '"The Indices and surds topic has been removed from the subject content (this is now assumed knowledge)."'],
          ['Topic added', '"A new topic on Coordinate geometry of the circle has been added to the subject content."'],
          ['Calculator', '"Paper 1 is now a non-calculator paper, calculators are not allowed in the exam."'],
          ['Standard', '"The questions in the examinations are the same standard as in the existing assessment."'],
          ['Marking', '"Mark schemes have been updated to award more marks for working where appropriate"'],
          ['Teaching time', '"The teaching time has not changed."']
        ] },
        { kind: 'p', mt: true, html: 'Two practical consequences follow. First, any past paper from before 2025 has a calculator on both papers and no circle questions, so it gives a misleading picture of Paper 1. Second, surds and indices did not disappear: they moved from a taught topic to an assumed skill, which means they now turn up inside other questions without warning. Cambridge\'s own teacher factsheet puts it simply: "Learners will need to practise solving problems and showing their working without a calculator."' },
        { kind: 'p', mt: true, html: 'Looking further ahead, the syllabus for examination in 2028, 2029 and 2030 says: "There are no significant changes which affect teaching." A pupil starting 0606 in Year 10 in September 2026 for exams in 2028 can use the same preparation.' },
        { kind: 'source', html: 'Sources: "Changes to this syllabus for 2025, 2026 and 2027" in the current syllabus, the Cambridge "Getting ready to teach" factsheet for 0606, and the 0606 syllabus for 2028 to 2030.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'Two Paper 1 style problems, worked by hand',
      lede: 'Both written by us at 0606 level, and both solvable without a calculator: one from the new circle topic, one from calculus.',
      body: [
        { kind: 'p', html: '<strong>Our first problem.</strong> A circle has equation x<sup>2</sup> + y<sup>2</sup> &minus; 6x + 4y &minus; 12 = 0. (a) Find its centre and radius. (b) Find the coordinates of the points where the line y = x &minus; 10 meets the circle.' },
        { kind: 'ol', mt: true, items: [
          'Complete the square in x and in y: (x &minus; 3)<sup>2</sup> &minus; 9 + (y + 2)<sup>2</sup> &minus; 4 &minus; 12 = 0, so (x &minus; 3)<sup>2</sup> + (y + 2)<sup>2</sup> = 25.',
          'Read off the centre (3, &minus;2) and the radius 5. The sign flip inside each bracket is the step most often lost.',
          'Substitute y = x &minus; 10 into the original equation: x<sup>2</sup> + (x &minus; 10)<sup>2</sup> &minus; 6x + 4(x &minus; 10) &minus; 12 = 0, which simplifies to 2x<sup>2</sup> &minus; 22x + 48 = 0.',
          'Divide by 2 and factorise: x<sup>2</sup> &minus; 11x + 24 = (x &minus; 3)(x &minus; 8) = 0, so x = 3 or x = 8.',
          'Find y from the line: the points are (3, &minus;7) and (8, &minus;2). Check: each is 5 units from (3, &minus;2), which confirms both lie on the circle.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Our second problem.</strong> The curve y = 2x<sup>3</sup> &minus; 9x<sup>2</sup> + 12x + 1 has two stationary points. Find them and determine their nature.' },
        { kind: 'two', mt: true,
          leftH3: 'Finding the points',
          left: [
            'Differentiate: dy/dx = 6x<sup>2</sup> &minus; 18x + 12 = 6(x<sup>2</sup> &minus; 3x + 2) = 6(x &minus; 1)(x &minus; 2). Setting this to zero gives x = 1 and x = 2.',
            'Substitute back into the curve: when x = 1, y = 2 &minus; 9 + 12 + 1 = 6; when x = 2, y = 16 &minus; 36 + 24 + 1 = 5. The points are (1, 6) and (2, 5).'
          ],
          rightH3: 'Deciding their nature',
          right: [
            'The second derivative is d<sup>2</sup>y/dx<sup>2</sup> = 12x &minus; 18. At x = 1 it is &minus;6, which is negative, so (1, 6) is a maximum. At x = 2 it is 6, positive, so (2, 5) is a minimum.',
            'Every number here is small on purpose. On Paper 1 the factorisation of the derivative is the whole question; a pupil who cannot factorise by inspection cannot finish.'
          ] },
        { kind: 'table', mt: true, caption: 'Six more practice questions, written by us at 0606 level (answers checked in Python)', head: ['#', 'Our question', 'Topic', 'Answer'], rows: [
          ['1', 'Solve log<sub>2</sub> x + log<sub>2</sub> (x &minus; 2) = 3.', 'Logarithms', 'x = 4 (x = &minus;2 is rejected)'],
          ['2', 'Find the term in x<sup>2</sup> in the expansion of (2 + x)<sup>5</sup>.', 'Series', '80x<sup>2</sup>'],
          ['3', 'Differentiate (3x<sup>2</sup> + 1)<sup>4</sup> with respect to x.', 'Calculus', '24x(3x<sup>2</sup> + 1)<sup>3</sup>'],
          ['4', 'Evaluate the integral of 3x<sup>2</sup> &minus; 2x from x = 0 to x = 2.', 'Calculus', '4'],
          ['5', 'How many arrangements of the six letters of PLANET begin with a vowel?', 'Permutations', '240'],
          ['6', 'A sector has radius 6 cm and angle 0.8 radians. Find its arc length and area.', 'Circular measure', '4.8 cm and 14.4 cm<sup>2</sup>']
        ] },
        { kind: 'source', html: 'Both worked problems and all six questions are ours, written on 31 October 2026, not Cambridge questions. Specimen papers for the 2025 syllabus are linked from the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-additional-0606/" rel="noopener" target="_blank">Cambridge 0606 page</a>, and schools hold past papers through the School Support Hub.' }
      ]
    },
    {
      id: 'entries', tint: '', eyebrow: 'Entries',
      h2: 'Who can sit 0606, and when?',
      lede: 'Any school pupil or private candidate who can find a centre, in June or November.',
      body: [
        { kind: 'table', caption: 'Entry facts from the 0606 syllabus', head: ['Question', 'Cambridge\'s answer'], rows: [
          ['Exam series', 'June and November, plus March for schools in India'],
          ['Private candidates', '"Private candidates can enter for this syllabus."'],
          ['Cannot combine in one series with', 'Cambridge O Level Additional Mathematics 4037'],
          ['Can combine with', 'IGCSE Mathematics 0580 or IGCSE (9 to 1) Mathematics 0980 in the same series'],
          ['Teaching time', 'Designed around 130 guided learning hours, for guidance only'],
          ['Prior study', 'A lower secondary maths course, with 0580 or 0980 content assumed']
        ] },
        { kind: 'p', mt: true, html: 'Because 0606 assumes 0580 or 0980, most schools teach the two side by side in Years 10 and 11, often with less lesson time for Additional Maths than for the main IGCSE. That is the gap tutoring usually fills: the main IGCSE gets the timetable, and 0606 gets what is left. A pupil who sits 0580 in June and wants 0606 later can use the November series.' },
        { kind: 'p', mt: true, html: 'Families comparing qualifications may find <a class="ag-inline-link" href="/igcse-maths-tuition-online">our IGCSE maths overview</a> useful, and those already looking at the sixth form can read <a class="ag-inline-link" href="/is-a-level-further-maths-worth-it">whether A level Further Maths is worth it</a>, since 0606 is often the first sign a pupil may want it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs to a confident 0606 paper',
    lede: 'Additional Maths is built on algebra, so the first rung is algebra and the last is speed.',
    table: { caption: 'What a 0606 candidate should be able to do, stage by stage', head: ['Rung', 'Typical timing', 'What should be true'], rows: [
      ['1. Extended algebra secure', 'Start of Year 10', 'Factorising, rearranging, surds and index laws by hand, without hesitation'],
      ['2. Functions and graphs', 'Year 10', 'Composite and inverse functions, modulus graphs, polynomials and the circle'],
      ['3. Calculus and series', 'Late Year 10 into Year 11', 'The derivative and integral rules, kinematics, binomial expansion and progressions'],
      ['4. Paper 1 pace', 'Final two terms', 'Full two-hour papers by hand, with every step written so method marks are safe']
    ] },
    left: { h3: 'Rung one protects the grade', ps: [
      'With no grade below E, weak algebra is not a small cost. It is the main reason a 0606 result can be unclassified.',
      'Pupils who like algebra on a screen may enjoy <a class="ag-inline-link" href="/coding-for-igcse-students">coding for IGCSE students</a>.'
    ] },
    right: { h3: 'Rung four is where marks are kept', ps: [
      'Cambridge now awards more marks for working, so a page of clear steps earns credit even when the last line slips.',
      'Classes thin out during each exam series.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Additional Maths',
    lede: 'Grouped by when a 0606 pupil tends to need them. The free first class sets the starting point.',
    bands: [
      { num: 'I', h3: 'The IGCSE years', sub: '0580 and 0606 together', courses: [
        { code: 'UK / CA1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Additional Mathematics alongside the Extended content it relies on.' },
        { code: 'UK / CA1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'For pupils at UK schools taking GCSE maths with 0606 as an extra.' },
        { code: 'UK / CA1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability, building on topic 11.' }
      ] },
      { num: 'II', h3: 'Sixth form', sub: 'Where 0606 leads', courses: [
        { code: 'UK / CA2 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics, continuing 0606 calculus.' },
        { code: 'UK / CA2 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Complex numbers, matrices and further calculus for keen mathematicians.' },
        { code: 'UK / CA2 / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'For pupils moving on to the IB Diploma instead of A levels.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Beyond the syllabus', courses: [
        { code: 'UK / CA3 / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problems that reward the same algebra fluency 0606 builds.' },
        { code: 'UK / CA3 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions, series and graphs explored in Python.' },
        { code: 'UK / CA3 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Faster hand arithmetic for the non-calculator paper.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Algebra first, then everything else',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers work from India, whose clocks never change, and each booking is confirmed in UK time.',
    slots: [
      { time: 'After school', l: 'Common for Year 10 and 11 pupils.' },
      { time: 'Evening', l: 'Fits round homework for the main IGCSE.' },
      { time: 'Weekend morning', l: 'Time for a full two-hour paper.' }
    ],
    cells: [
      { h3: 'Algebra checks', p: 'Short hand-algebra checks most weeks, because every 0606 topic rests on them.' },
      { h3: 'Calculus by hand', p: 'Derivatives and integrals recalled, since no calculus formula is given in the exam.' },
      { h3: 'Full working', p: 'Every step written down, to collect the method marks Cambridge now awards.' },
      { h3: 'Circle questions', p: 'The 2025 topic practised with problems we write, as older papers have none.' },
      { h3: 'Two-paper practice', p: 'Mixed-topic papers, since either paper can test anything.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 0606 pupils, or one teacher for one pupil.' }
    ]
  },

  projectsH2: 'Work our students produced in class',
  projectsLede: 'Everyday class projects, never marked for an exam. More are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees for Additional Maths 0606 classes',
    lede: 'One monthly fee in US dollars for families outside India. The first class is free, and payment begins only once a course and a regular slot are fixed.',
    free: ['A first class with our algebra check', 'A frank view of 0606 readiness', 'Booking needs only a phone number'],
    group: ['A group of 15 to 20 0606 pupils', 'One teacher through Years 10 and 11', 'Non-calculator papers every few weeks', 'Quieter weeks in each exam series'],
    one: ['One teacher for one pupil', 'Planned around both IGCSEs', 'Suits a pupil adding 0606 late']
  },

  faq: {
    eyebrow: 'Questions about 0606',
    h2: 'What families ask about IGCSE Additional Maths',
    items: [
      { q: 'How many papers are in IGCSE Additional Maths 0606?', a: 'Two. Paper 1 and Paper 2 are each 2 hours and 80 marks and each is worth half of the qualification. Paper 1 is sat without a calculator and Paper 2 requires a scientific calculator.' },
      { q: 'Is a calculator allowed in 0606 Paper 1?', a: 'No. Since the revision for first examination in 2025, Paper 1 is a non-calculator paper. Calculators are still allowed and required in Paper 2.' },
      { q: 'What grades can you get in IGCSE Additional Maths?', a: 'Only A* to E. The syllabus says grades F and G will not be available, so a candidate who does not reach the minimum mark for E is unclassified.' },
      { q: 'Is IGCSE Additional Maths hard?', a: 'It is harder than 0580 Extended, because it adds calculus, logarithms, radians and series, and both papers can test any topic. Cambridge says it is designed to stretch the more able candidates.' },
      { q: 'Do you need 0580 to take 0606?', a: 'The syllabus assumes knowledge of 0580 or 0980 content, including indices and surds. Most schools teach them together in Years 10 and 11, and 0606 can be sat in the same series as either.' },
      { q: 'What topics are in 0606?', a: 'Fourteen: functions, quadratic functions, factors of polynomials, equations and graphs, simultaneous equations, logarithms and exponentials, straight-line graphs, the circle, circular measure, trigonometry, permutations and combinations, series, vectors and calculus.' },
      { q: 'Are formulas given in the 0606 exam?', a: 'A list of formulas is printed in the paper, but the syllabus states that no formulas will be given for the calculus section. Derivatives and integrals of the standard functions must be learned.' },
      { q: 'Can a home-educated pupil sit 0606?', a: 'Yes. Private candidates can enter for this syllabus through an exam centre that accepts them. The centre makes the entry and sets its own arrangements.' },
      { q: 'When are your 0606 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are always given in UK time.' },
      { q: 'Are you connected with Cambridge?', a: 'No. Modern Age Coders is independent and has no link with Cambridge University Press and Assessment. Our examples are written by us and we do not copy Cambridge papers.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for strong IGCSE mathematicians',
    lede: 'The main IGCSE, the sixth-form options and problem solving beyond the syllabus.',
    items: [
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'Cambridge and Edexcel IGCSE maths compared, tier by tier.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'The course where 0606 calculus and logarithms continue.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For pupils who find 0606 the part of maths they enjoy most.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A question many 0606 families meet in Year 11.' },
      { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT maths challenge tutoring', p: 'The UK competitions for pupils who enjoy hard problems.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'An index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free 0606 class',
    lede: 'Leave a number and we will call at a UK time you choose. The class starts with our algebra check and moves into a 0606 topic, so you leave with a clear sense of readiness.',
    readFirst: 'Want to read more first? Every <a class="ag-inline-link" href="/courses">course page</a> shows its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects student projects.',
    note: 'The fastest route is WhatsApp, which costs nothing from a UK phone. Replies come from our team in India on a +91 number.',
    formNote: 'No payment details and no commitment; we reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'IGCSE maths', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE Computer Science' },
        { href: '/coding-for-igcse-students', label: 'Coding for IGCSE students' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Next steps', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'IGCSE Additional Maths 0606, live in UK hours'
  },

  personalityCss: `
.ag-root.ag-cia .ag-hero h1 { letter-spacing: -0.022em; font-weight: 700; }
.ag-root.ag-cia .ag-capsule { border-left-width: 7px; border-radius: 0; }
.ag-root.ag-cia .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-cia .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-cia .ag-table th:first-child { width: 9%; }
.ag-root.ag-cia .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International, Cambridge IGCSE Additional Mathematics 0606 syllabus for 2025, 2026 and 2027: two components, Paper 1 non-calculator and Paper 2 calculator, each 2 hours, 80 marks and 50 per cent, each on any part of the content; grades A* to E only, with F and G not available and candidates below E unclassified; fourteen topics; no calculus formulas given; 0580 or 0980 content assumed including indices and surds; 2025 changes (indices and surds removed as a topic, coordinate geometry of the circle added, Paper 1 made non-calculator, more marks for working); June and November series; private candidates can enter; cannot combine with O Level 4037; 2028 to 2030 syllabus has no significant changes affecting teaching.',
    localProject: 'There is no safety net below E. The page sets out the two equal 0606 papers, quotes the rule that F and G are not available and compares the grading with 0580, lists the fourteen topics with our note on each step up, quotes the 2025 change list and the marking conventions, then works two of our own Paper 1 style problems by hand (circle centre (3, -2) radius 5 meeting y = x - 10 at (3, -7) and (8, -2); stationary points of 2x^3 - 9x^2 + 12x + 1) and gives a six-question practice set written by us.',
    requiredMentions: ['Grades F and G will not be available', 'will be unclassified', 'No formulas will be given in the List of formulas for the Calculus section.', 'This includes the use of indices and surds.', 'should have cusps', 'Coordinate geometry of the circle has been added', 'award more marks for working', 'O Level Additional Mathematics 4037', '(3, &minus;7) and (8, &minus;2)', 'to stretch the more able candidates'],
    sources: [
      { claim: 'Cambridge IGCSE Additional Mathematics 0606 syllabus for 2025, 2026 and 2027: papers, grades, topics, conventions, entries and the 2025 change list.', url: 'https://www.cambridgeinternational.org/Images/662470-2025-2027-syllabus.pdf' },
      { claim: 'Getting ready to teach factsheet for 0606: non-calculator practice and content changes.', url: 'https://www.cambridgeinternational.org/Images/665419-getting-ready-factsheet-for-igcse-maths-additional.pdf' },
      { claim: '0606 syllabus for 2028, 2029 and 2030: no significant changes which affect teaching.', url: 'https://www.cambridgeinternational.org/Images/745683-2028-2030-syllabus.pdf' },
      { claim: 'Cambridge International 0606 qualification page.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-additional-0606/' }
    ],
    rejectedClaims: [
      'Grade thresholds and the share of candidates at each grade: not read at a primary source, not printed.',
      'Specific exam dates for 2027: timetables vary by administrative zone and were not read.',
      'Any Cambridge past paper, specimen question or mark scheme: not reproduced; the worked examples and practice set are ours.',
      'That most schools teach 0606 with less time than 0580: presented as our teaching experience, not as a Cambridge statement; Cambridge only says the teaching time has not changed.',
      'Exam centre fees: set by centres, not printed.',
      'Any grade promise or affiliation with Cambridge International: both declined on the page.'
    ]
  }
};
