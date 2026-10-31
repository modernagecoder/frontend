'use strict';
// Integrated Math III tutoring (ag- guide door; UK and US exams cluster, row US006). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/integrated-math-3-tutoring/:
//  - Utah State Board of Education, Utah Core State Standards for Mathematics, High School PDF (ADA May 2021), Secondary
//    Mathematics III: "students pull together and apply the accumulation of learning that they have from their previous
//    courses"; "They apply methods from probability and statistics to draw inferences and conclusions from data"; four
//    critical areas: (1) data collection "including sample surveys, experiments, and simulations" and "the role that
//    randomness and careful design play"; (2) "structural similarities between the system of polynomials and the system of
//    integers", "The unit culminates with the fundamental theorem of algebra", rational expressions "governed by the same
//    rules as the arithmetic of rational numbers"; (3) Laws of Sines and Cosines, "0, 1, 2, or infinitely many triangles",
//    radian measure, periodic phenomena; (4) logarithms for exponential equations, transformations, and modeling as "the
//    process of choosing and using mathematics and statistics to analyze empirical situations, to understand them better,
//    and to make decisions".
//  - USBE Major Work of Secondary Mathematics III overview (2019): future grades "In precalculus (or college algebra)".
//  - USBE Graduation Pathways (2021): Secondary Math III topics; III Plus adds "Composition of Functions", "Inverse
//    Functions / Trig Functions", "Polar Coordinates", "Arithmetic and Geometric Series"; college credit options after
//    Secondary Math III; FAQ "Can I opt out of Secondary Math III?" answer; "it is never advised students to skip classes".
//  - NC DPI Standard Course of Study page: graduation needs "NC Math 1, 2, and 3 and a fourth mathematics course".
//  - NWEA MAP Growth features: course-specific tests include Integrated Math 1, 2 and 3.
// Our own material, labelled: x^3 + 5x^2 + 7x + 3 divided by x + 1 beside 1573 / 11, a rational expression, an ambiguous-case
// Law of Sines problem (two triangles, B about 56.4 or 123.6 degrees), a Law of Cosines side (root 57), 150 degrees = 5 pi / 6,
// two exponential equations (x = 4; x = log 20 / log 5, about 1.861), a normal-model estimate, a twelve-item practice set.
// Lesson family: polynomials behave like integers.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COURSE HELP', blurb: 'Integrated Math III explained: inference from data, polynomials and rational expressions, the Laws of Sines and Cosines, logarithms and modeling.' },
  slug: 'integrated-math-3-tutoring',
  code: 'gao',
  accent: '#7E4401',
  accentRationale: 'Integrated Math III tutoring: a burnt umber #7E4401 from the US allocation table, 7.30:1 on paper #FBF8F2 and 6.28:1 on the deepest tint, warmer and brighter than the walnut Integrated Math II page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Integrated Math 3 tutoring',
  title: 'Integrated Math 3 Tutoring: Integrated Math III Help Online',
  description: 'Integrated Math 3 tutoring online: what is taught in Integrated Math III, from polynomials and logarithms to the Laws of Sines and Cosines and data inference.',
  ogDescription: 'Integrated Math III pulls the pathway together: statistics and inference, polynomials, general-triangle trig and modeling. What is in it and what comes after.',
  twitterDescription: 'Integrated Math III, from state course documents, with our own worked problems.',
  pageName: 'Integrated Math 3 Tutoring',
  webPageDescription: 'A guide to Integrated Math III (Math 3, Secondary Mathematics III) for students and families, using state course documents and pathways charts, with original worked examples, practice and a look at the courses that follow.',
  courseDescription: 'Integrated Math III taught live online for grade 11 students: inference from data, polynomial and rational functions, the Laws of Sines and Cosines, radians and logarithms, in a class of 15 to 20 or privately.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Integrated Math 3 tutoring',
  navLinks: [
    { href: '#course', label: 'The course' },
    { href: '#areas', label: 'Four areas' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#practice', label: 'Practice' },
    { href: '#ladder', label: 'After Math III' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 11 math &middot; Integrated pathway',
  h1: 'Integrated Math 3 tutoring: help with Integrated Math III',
  lede: 'Integrated Math III is the last course of the integrated pathway and the one that decides what a student can take next: precalculus, a college algebra course for credit, statistics, or calculus later on. It asks a junior to combine everything from the first two years and then go further, into higher-degree polynomials, rational expressions, logarithms, trigonometry for any triangle and inference from data. Here is what the course contains, in a state\'s own words, with the ideas worked through.',
  secondaryCta: { href: '#areas', label: 'See the four areas' },
  wa: 'Hello Modern Age Coders, my child is taking Integrated Math 3 and wants help before precalculus. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; grade 11 and up',
  spec: [
    ['Course', 'Integrated Math III, also Math 3 or Secondary Math III'],
    ['Usual grade', 'Grade 11'],
    ['Areas', 'Inference, polynomials, trigonometry, modeling'],
    ['New tools', 'Logarithms, radians, the fundamental theorem of algebra'],
    ['Leads to', 'Precalculus, college algebra, statistics'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Integrated Math III is the third course of the integrated sequence, usually taken in grade 11. Utah\'s Secondary Mathematics III groups it into four areas: inference from data; polynomial, rational and radical functions; trigonometry of general triangles and radians; and modeling with functions, including logarithms. Our High School Mathematics course teaches it live online, to a group of 15 to 20 students or one to one.',

  picks: {
    eyebrow: 'Integrated Math III',
    h2: 'Three courses for Integrated Math III',
    lede: 'The high school course covers the year itself; AP Precalculus and the statistics course carry its two biggest threads further.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'GAO / 01', title: 'High school math', note: 'Polynomials, logarithms, trigonometry and modeling.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'GAO / 02', title: 'AP Precalculus', note: 'The usual next step for calculus-bound juniors and seniors.' },
      { course: 'statistics-probability-maths-course', code: 'GAO / 03', title: 'Statistics and probability', note: 'For the inference unit and a statistics senior year.' }
    ]
  },

  sections: [
    {
      id: 'course', tint: 'tint', eyebrow: 'The course',
      h2: 'What is taught in Integrated Math 3?',
      lede: 'Integrated Math III gathers up the first two years and adds four new areas. Utah describes it as the course where "students pull together and apply the accumulation of learning that they have from their previous courses."',
      body: [
        { kind: 'p', html: 'Utah\'s description continues in four sentences that serve as a map of the year: "They apply methods from probability and statistics to draw inferences and conclusions from data. Students expand their repertoire of functions to include polynomial, rational, and radical functions. They expand their study of right triangle trigonometry to include general triangles. And, finally, students bring together all of their experience with functions and geometry to create models and solve contextual problems."' },
        { kind: 'table', mt: true, caption: 'Topics new in the third year, from the Utah State Board of Education 2021 pathways chart', head: ['Version of the course', 'Listed topics'], rows: [
          ['Secondary Math III (standard)', 'Polynomial, Rational, and Radical Functions; Trigonometry; Logarithms; Data Collection and Analysis'],
          ['Secondary Math III Plus (extended)', 'Everything above, plus Composition of Functions; Inverse Functions / Trig Functions; Polar Coordinates; Arithmetic and Geometric Series']
        ] },
        { kind: 'source', html: 'Sources: Utah State Board of Education <a class="ag-inline-link" href="https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsHighSchool.pdf" rel="noopener" target="_blank">Core State Standards for Mathematics, High School</a> and <a class="ag-inline-link" href="https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf" rel="noopener" target="_blank">Graduation Pathways</a>. North Carolina\'s equivalent course is NC Math 3.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the year feels heavier',
          left: [
            'Integrated Math I and II each had one main function family, linear and exponential, then quadratic. Integrated Math III adds several families at once and expects students to choose between them.',
            'A student who is shaky on factoring quadratics or on exponent rules will feel it here first, because polynomial division and logarithms both rest on them.'
          ],
          rightH3: 'Why it matters for what comes next',
          right: [
            'In North Carolina, NC Math 3 is the last of three required integrated courses, and the state then asks for a fourth math course matched to what the student plans after graduation. Here, as in most states, this year decides which fourth course is realistic.',
            'Utah\'s own overview says that after Secondary Math III, "In precalculus (or college algebra), students will expand their solving to all types of equations including complex number systems, vectors, matrices, and polar coordinates."'
          ] }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'Four areas',
      h2: 'What are the four units of Integrated Math III?',
      lede: 'Utah organizes Secondary Mathematics III into four critical areas. Each line below quotes Utah, then says in our words what the student practices.',
      body: [
        { kind: 'table', caption: 'Secondary Mathematics III critical areas (from Utah\'s high school mathematics core, checked 31 October 2026; our practice notes in the right column)', head: ['Area', 'Utah\'s wording, shortened', 'Practice in our lessons'], rows: [
          ['1. Inference', 'Ways of collecting data, "including sample surveys, experiments, and simulations", and "the role that randomness and careful design play in the conclusions that can be drawn"', 'Normal-model estimates, study design, simulation'],
          ['2. Polynomials and rational expressions', '"structural similarities between the system of polynomials and the system of integers"; "The unit culminates with the fundamental theorem of algebra"', 'Long division, the remainder idea, zeros and factors'],
          ['3. Trigonometry of general triangles', 'The Laws of Sines and Cosines; whether three measures define "0, 1, 2, or infinitely many triangles"; radian measure; simple periodic phenomena', 'Ambiguous cases, radians, sinusoidal graphs'],
          ['4. Mathematical modeling', 'Solving exponential equations with logarithms; transformations that have "the same effect regardless of the type of the underlying functions"; choosing and adjusting models', 'Pick a function family, fit it, judge the fit']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Polynomials are a lot like whole numbers',
          left: [
            'Utah\'s Area 2 asks students to connect "multiplication of polynomials with multiplication of multi-digit integers, and division of polynomials with long division of integers."',
            'It adds that "A central theme of this unit is that the arithmetic of rational expressions is governed by the same rules as the arithmetic of rational numbers." Students who see the parallel stop memorizing steps and start reusing ones they know.'
          ],
          rightH3: 'Modeling is the point of the course',
          right: [
            'Area 4 quotes the definition of modeling as "the process of choosing and using mathematics and statistics to analyze empirical situations, to understand them better, and to make decisions."',
            'That is why a test question in this course often gives data and asks which kind of function fits, rather than giving the function and asking for a value.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How do you divide polynomials and solve with the Law of Sines?',
      lede: 'With the same habits as integer long division, and by checking how many triangles the measurements allow. All examples here are ours, written for this page.',
      body: [
        { kind: 'table', caption: 'Our side-by-side: integer long division and polynomial long division', head: ['Step', '1573 divided by 11', '(x^3 + 5x^2 + 7x + 3) divided by (x + 1)'], rows: [
          ['First term', '11 goes into 15 once: 1, remainder 4', 'x goes into x^3 by x^2; subtract x^3 + x^2, leaving 4x^2 + 7x'],
          ['Second term', '11 into 47: 4, remainder 3', 'x into 4x^2 by 4x; subtract 4x^2 + 4x, leaving 3x + 3'],
          ['Third term', '11 into 33: 3, remainder 0', 'x into 3x by 3; subtract 3x + 3, leaving 0'],
          ['Quotient', '143', 'x^2 + 4x + 3, which factors as (x + 1)(x + 3)'],
          ['Meaning', '1573 = 11 x 143', 'The cubic is (x + 1)^2 (x + 3): zeros -1 (twice) and -3, three in all, as the fundamental theorem of algebra predicts for degree 3']
        ] },
        { kind: 'table', mt: true, caption: 'The ambiguous case (ours): angle A = 30 degrees, side a = 6 opposite it, side b = 10', head: ['Step', 'Working'], rows: [
          ['1. Find the height', 'b sin A = 10 x 0.5 = 5'],
          ['2. Count triangles', '5 &lt; 6 &lt; 10, so side a can swing to meet the base in two places: two triangles'],
          ['3. Law of Sines', 'sin B = b sin A / a = 5/6, about 0.833'],
          ['4. Two angles', 'B is about 56.4 degrees, or 180 minus that, about 123.6 degrees'],
          ['5. Check both', 'Both leave room for angle C (93.6 or 26.4 degrees), so both triangles exist']
        ] },
        { kind: 'table', mt: true, caption: 'More of ours, one per remaining area', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['Simplify (x^2 - 9)/(x^2 + 3x)', 'Factor: (x - 3)(x + 3) over x(x + 3); cancel x + 3, as with a common factor in a fraction', '(x - 3)/x, with x not 0 or -3'],
          ['Two sides 7 and 8 meet at 60 degrees. Find the third side.', 'Law of Cosines: c^2 = 49 + 64 - 2 x 7 x 8 x 0.5 = 57', 'c = root 57, about 7.55'],
          ['Convert 150 degrees to radians', 'Multiply by pi/180', '5 pi / 6'],
          ['Solve 3 x 2^x = 48', 'Divide by 3: 2^x = 16 = 2^4', 'x = 4'],
          ['Solve 5^x = 20', 'Take logs: x log 5 = log 20', 'x = log 20 / log 5, about 1.861'],
          ['Scores are roughly normal, mean 70, standard deviation 6. About what share score above 82?', '82 is two standard deviations above the mean; about 95% lie within two, so about 5% lie outside, split between both tails', 'About 2.5%']
        ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Integrated Math 3 practice problems with answers',
      lede: 'A dozen problems our teachers wrote across the four areas. Students looking for Integrated Math 3 help can use them to find which unit needs work first.',
      body: [
        { kind: 'table', caption: 'Integrated Math III practice set (ours), answers included', head: ['#', 'Area', 'Problem', 'Answer'], rows: [
          ['1', 'Inference', 'A school surveys only students in the library. What is the flaw?', 'Not a random sample of the school'],
          ['2', 'Inference', 'Mean 100, standard deviation 15, roughly normal. About what percent lie between 85 and 115?', 'About 68%'],
          ['3', 'Polynomials', 'Remainder when x^3 - 2x + 4 is divided by x - 2', '8'],
          ['4', 'Polynomials', 'How many complex zeros does a degree 5 polynomial have, counted with multiplicity?', '5'],
          ['5', 'Polynomials', 'Zeros of (x - 1)(x^2 + 4)', '1, 2i and -2i'],
          ['6', 'Rational', 'Add 1/x + 2/(x + 1)', '(3x + 1)/(x(x + 1))'],
          ['7', 'Radical', 'Solve the square root of (x + 5) = 3', 'x = 4'],
          ['8', 'Trigonometry', 'Convert pi/4 to degrees', '45 degrees'],
          ['9', 'Trigonometry', 'Period of y = sin(2x)', 'pi'],
          ['10', 'Trigonometry', 'A = 40 degrees, B = 60 degrees, a = 10. Find b to one decimal.', 'About 13.5'],
          ['11', 'Logarithms', 'Solve log base 2 of x = 5', 'x = 32'],
          ['12', 'Modeling', 'Data double every 3 years. Linear, quadratic or exponential model?', 'Exponential']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Fall, first half: statistics and inference.</b> Distributions, the normal model, sampling, experiments and simulation.',
          '<b>Fall, second half: polynomials.</b> Long and synthetic division, zeros and factors, end behavior and the fundamental theorem of algebra.',
          '<b>Winter: rational and radical functions.</b> Simplifying, adding and solving, with attention to excluded values and extraneous roots.',
          '<b>Early spring: trigonometry.</b> Laws of Sines and Cosines, the ambiguous case, radians and the unit circle, and periodic graphs.',
          '<b>Late spring: logarithms and modeling.</b> Inverses of exponentials, solving with logs, transformations, and choosing models for data.',
          '<b>Before the summer: the bridge.</b> A preview of whichever fourth course comes next.'
        ] },
        { kind: 'p', mt: true, html: 'This order is our reading of Utah\'s four areas; schools often teach trigonometry earlier or split polynomials across the year. We never write a student\'s graded work for them. We teach the method and leave the work to the student.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'After Math III',
    h2: 'What math comes after Integrated Math 3?',
    lede: 'A fourth course chosen around the student\'s plans. Utah\'s pathways chart, from 2021, sets out the options most clearly; your own district will name its courses differently.',
    table: { caption: 'Options after Secondary Math III on Utah\'s pathways chart (Utah State Board of Education, Graduation Pathways PDF, 2021)', head: ['Option', 'What Utah says about it'], rows: [
      ['Pre-Calculus', 'A high school class; "doesn\'t award college credit" but prepares for calculus'],
      ['Math 1050 and Math 1060', 'Concurrent enrollment; "most of the same topics as Precalculus"'],
      ['College Statistics or AP Statistics', 'College mathematics credit choices for statistics'],
      ['Math 1010', 'Does not give the quantitative literacy credit a bachelor\'s degree needs'],
      ['An alternative selection instead', 'Allowed, but "not usually recommended"']
    ] },
    left: { h3: 'Opting out of Math III', ps: [
      'Utah answers this directly: "You are allowed to take one of the Alternate Selections in place of Secondary Math III and still receive a high school diploma. This is not usually recommended."',
      'Families weighing that choice should first check what the student\'s likely college majors expect.'
    ] },
    right: { h3: 'Skipping ahead', ps: [
      'Utah is just as direct about skipping: "If you skip a step on the chart you may not be ready for the next class, so it is never advised students to skip classes."',
      'Students who want to move faster can take extended versions or summer classes instead, which Utah also mentions.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for Integrated Math III and after',
    lede: 'Live courses for the year itself, the tests juniors sit, and the fourth math course.',
    bands: [
      { num: 'I', h3: 'Shoring up', sub: 'Skills from Math I and II', courses: [
        { code: 'GAO / S / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Exponents and factoring.' },
        { code: 'GAO / S / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Model data in Python.' },
        { code: 'GAO / S / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'The inference unit.' }
      ] },
      { num: 'II', h3: 'Junior year', sub: 'The course and the tests', courses: [
        { code: 'GAO / J / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'All four areas.' },
        { code: 'GAO / J / 02', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'Advanced math questions.' },
        { code: 'GAO / J / 03', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'Trig and logs appear.' }
      ] },
      { num: 'III', h3: 'The fourth course', sub: 'Senior year and beyond', courses: [
        { code: 'GAO / F / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' },
        { code: 'GAO / F / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'For the data route.' },
        { code: 'GAO / F / 03', slug: 'college-math-placement-test-prep-course', title: 'College placement', blurb: 'For dual enrollment entry.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Integrated Math III lessons for busy juniors',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening slots around sports and jobs.' },
      { time: 'Weekends', l: 'Longer review before unit tests.' },
      { time: '1-on-1', l: 'Planned around SAT or ACT dates too.' }
    ],
    cells: [
      { h3: 'Integer parallels', p: 'Polynomial steps tied to number facts.' },
      { h3: 'Triangle counting', p: 'Ambiguous cases drawn first.' },
      { h3: 'Logs as inverses', p: 'Never a rule without its reason.' },
      { h3: 'Model choice', p: 'Which family fits, and why.' },
      { h3: 'Fourth-course plan', p: 'Advice on what to take next.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Older students fit models to real data in their own code. See examples on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from Google, reproduced exactly as families posted them.',

  fees: {
    h2: 'Fees',
    lede: 'The fee is monthly, in US dollars, with no minimum term. Many juniors join for one semester, then decide whether to continue into the fourth course with us.',
    free: ['Free first lesson', 'Bring a recent unit test', 'No card at sign-up'],
    group: ['Group of 15 to 20', 'Consistent teacher', 'Pick a time', 'Billed each month'],
    one: ['One-to-one teaching', 'Matched to the school calendar', 'Choose your hours']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Integrated Math 3: common questions',
    items: [
      { q: 'What is taught in Integrated Math 3?', a: 'Integrated Math III covers inference from data, polynomial, rational and radical functions, trigonometry of general triangles with radians and periodic functions, and modeling with function families including logarithms. Utah\'s Secondary Mathematics III groups these into four critical areas.' },
      { q: 'Is Integrated Math 3 the same as Algebra 2?', a: 'They overlap heavily on polynomials, rational functions and logarithms. Integrated Math III also includes the Laws of Sines and Cosines and a statistics unit, so a student switching from Algebra 2 may need help with those.' },
      { q: 'Is Integrated Math 3 hard?', a: 'It asks for more combining of ideas than the earlier courses, because several function families appear at once. Students with secure factoring and exponent skills usually cope well; gaps from Integrated Math II show up quickly.' },
      { q: 'What grade takes Integrated Math 3?', a: 'Grade 11 for most students, after Integrated Math I and II. Accelerated students may take it in grade 10, which leaves room for precalculus and calculus later.' },
      { q: 'What comes after Integrated Math 3?', a: 'Usually precalculus, a statistics course, or a college algebra course taken for dual or concurrent enrollment credit. Utah\'s pathways chart lists Pre-Calculus, Math 1050 and 1060, a college Statistics course and AP Statistics among the options.' },
      { q: 'Can my child skip Integrated Math 3?', a: 'Utah allows an alternative course in its place for the diploma but says this is not usually recommended, because the alternatives do not prepare students for college math credit. Ask your school counselor how your district handles it.' },
      { q: 'Where can I find Integrated Math 3 practice problems?', a: 'Use the school textbook first, since tests follow it, then our twelve-problem set on this page. We do not copy state test items or textbook answer keys.' },
      { q: 'Do you help with modeling projects in Integrated Math 3?', a: 'We teach how to choose a model, fit it and judge the fit, and we review the student\'s reasoning. We do not write or edit the project for a grade.' },
      { q: 'When are your Integrated Math 3 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you affiliated with any state or school?', a: 'No. Modern Age Coders runs independently of every state education agency, district and publisher. State documents are quoted here only to describe the course accurately.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More pages for juniors and the courses that follow.',
    items: [
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'The most common fourth course.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'For the traditional route.' },
      { href: '/trigonometry-tutoring-online', label: 'Trigonometry tutoring', p: 'The unit circle and beyond.' },
      { href: '/ap-statistics-tutoring-online', label: 'AP Statistics tutoring', p: 'A data-focused senior year.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math', p: 'The usual Integrated Math III year.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'Where the pathway is heading.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know the unit your child is studying, the fourth course they are considering and any SAT or ACT date. The teacher will open with one polynomial division and one triangle to gauge readiness.',
    readFirst: 'Learn <a class="ag-inline-link" href="/how-we-teach">how a lesson works</a>, or scan <a class="ag-inline-link" href="/courses">the course catalogue</a>.',
    note: 'Classes run live from India and are scheduled for late afternoon or evening wherever you are in the US. WhatsApp gets the quickest answer.',
    formNote: 'Your first lesson is free; we ask for no payment card.'
  },

  footer: {
    cols: [
      { h4: 'Grade 11 and 12 math', links: [
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/trigonometry-tutoring-online', label: 'Trigonometry' },
        { href: '/calculus-tutoring-online', label: 'Calculus' },
        { href: '/ap-statistics-tutoring-online', label: 'AP Statistics' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '1573 = 11 x 143; x^3 + 5x^2 + 7x + 3 = (x + 1)^2 (x + 3)'
  },

  personalityCss: `
.ag-root.ag-gao .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-gao .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-gao .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gao .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-gao .ag-section-head h2 { max-width: 34ch; }
`,

  dossier: {
    curriculumAuthority: 'Utah Core State Standards for Mathematics High School (Secondary Mathematics III purpose and four critical areas), USBE Major Work of Secondary Mathematics III, USBE Graduation Pathways (2021) chart and FAQ, NC DPI Standard Course of Study page, NWEA MAP Growth features; read raw 31 October 2026.',
    localProject: 'Our worked examples: 1573 / 11 beside (x^3 + 5x^2 + 7x + 3) / (x + 1) = x^2 + 4x + 3; ambiguous-case Law of Sines with A = 30, a = 6, b = 10 (B about 56.4 or 123.6 degrees); Law of Cosines root 57; 150 degrees = 5 pi / 6; 2^x = 16 and 5^x = 20 (about 1.861); a normal estimate of 2.5%. Twelve-item practice set and a year plan. Lesson family: polynomials behave like integers.',
    requiredMentions: ['students pull together and apply the accumulation of learning that they have from their previous courses', 'structural similarities between the system of polynomials and the system of integers', 'The unit culminates with the fundamental theorem of algebra', 'the arithmetic of rational expressions is governed by the same rules as the arithmetic of rational numbers', '0, 1, 2, or infinitely many triangles', 'the process of choosing and using mathematics and statistics to analyze empirical situations', 'If you skip a step on the chart you may not be ready for the next class', 'You are allowed to take one of the Alternate Selections in place of Secondary Math III', 'In precalculus (or college algebra), students will expand their solving'],
    sources: [
      { claim: 'Utah Secondary Mathematics III purpose and critical areas.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsHighSchool.pdf' },
      { claim: 'Utah pathways chart and FAQ: options after Secondary Math III.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf' },
      { claim: 'Utah Major Work of Secondary Mathematics III overview.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_major_works_tab_/CoreCourseOverviewSecondaryIII.pdf' },
      { claim: 'North Carolina graduation requirement NC Math 1, 2, 3 plus a fourth course.', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/office-teaching-and-learning/standard-course-study/mathematics/standard-course-study-supporting-resources' }
    ],
    rejectedClaims: [
      'Common Core Appendix A Mathematics III description: official link redirects to the main standards; not quoted.',
      'California and West Virginia integrated documents: blocked; not retried.',
      'End-of-course or state test items: not reproduced; every problem is ours.',
      'Placement or grade promises: refused.',
      'Any affiliation with a state, district or publisher: none.'
    ]
  }
};
