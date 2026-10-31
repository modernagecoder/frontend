'use strict';
// Pearson Edexcel International GCSE Further Pure Mathematics 4PM1 help (ag- exam door, UK and US exams cluster, row UK029).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/edexcel-igcse-further-pure-maths-4pm1-help/):
//  - Pearson Edexcel International GCSE in Further Pure Mathematics (9-1) (4PM1) specification, Issue 1, January 2016,
//    "For first teaching September 2017", "First examination June 2019". Verbatim: "This qualification is not accredited or
//    regulated by any UK regulatory body."; "two examinations available at Higher Tier only (targeted at grades 9–4, with 3
//    allowed). Both examinations must be taken in the same series at the end of the course of study."; "This specification
//    is offered through a single tier."; 4PM1/01 and 4PM1/02; "Availability: January and June"; "Each paper is assessed
//    through a 2-hour examination set and marked by Pearson."; "The total number of marks for each paper is 100."; "Each
//    paper will consist of around 11 questions with varying mark allocations per question"; "the solution of any questions
//    may require knowledge of more than one section"; "approximately 40% of the marks distributed evenly over grades 4 and
//    5 and approximately 60% of the marks distributed evenly over grades 6, 7, 8 and 9"; "A formulae sheet (Appendix 4)
//    will be included"; Appendix 5 "gives formulae that students are expected to remember and will not be included on the
//    formula sheet" (logarithms, quadratic roots, series, coordinate geometry, calculus); "Students will be expected to
//    have a thorough knowledge of the content common to the Pearson Edexcel International GCSE in Mathematics
//    (Specification A) (Higher Tier) or ... (Specification B)."; "knowledge of statistics and matrices will not be
//    required"; ten sections (Logarithmic functions and indices; The quadratic function; Identities and inequalities;
//    Graphs; Series; The binomial series; Scalar and vector quantities; Rectangular Cartesian coordinates; Calculus;
//    Trigonometry); calculus notes: "The volumes will be obtained only by revolution about the coordinate axes.",
//    "Justification of maxima and minima will be expected.", connected rates of change; binomial "(ii) n is rational and
//    |x| < 1", "The validity condition for (ii) is expected."; trigonometry "Radian measure", addition formulae on the
//    formula sheet, "Long questions, explicitly involving excessive manipulation, will not be set."; calculator minimum
//    functions include ln x, e^x and radians; prohibitions; "unclassified U result"; progression to AS and A level.
// Our own material, labelled on the page: the balloon rates example (dr/dt = 1/(2 pi), about 0.159 cm per second at
// r = 5), the binomial estimate of the square root of 1.02 (1.0099505), the roots example (alpha^2 + beta^2 = 21/4), and
// a six-question practice set, all checked in Python on 31 October 2026. No Pearson question is reproduced.
// Spine: one tier, around eleven long questions per paper, and a list of formulae you must carry in your head. 4PM1 is
// A level style pure maths at fifteen, with no statistics to hide behind. Lesson family: chaining two topics in one
// answer.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'FURTHER PURE 4PM1', blurb: 'One tier, about eleven questions a paper, no statistics, and a printed list of formulae that will not be on the formula sheet.' },
  slug: 'edexcel-igcse-further-pure-maths-4pm1-help',
  code: 'eif',
  accent: '#845E01',
  accentRationale: 'Edexcel International GCSE Further Pure 4PM1: a dark ochre #845E01 from the cluster allocation, 5.53:1 on #FBF8F2 and 4.76:1 on the deepest paper tint, warm and gold against the teal of the 4MA1 page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel IGCSE Further Pure Maths 4PM1 help',
  title: 'Edexcel IGCSE Further Pure Maths 4PM1 Help and Topics',
  description: 'Edexcel IGCSE Further Pure Maths 4PM1 help: one tier, two 2-hour papers of about 11 questions, calculus, logs and series, and formulae to learn. Live online classes.',
  ogDescription: 'Pearson Edexcel International GCSE Further Pure Mathematics 4PM1 from the specification: the papers, the ten topics, the formulae you must memorise and how the calculus is examined.',
  twitterDescription: 'Edexcel IGCSE Further Pure 4PM1: two papers, ten topics, formulae to learn, and A level style calculus at fifteen.',
  pageName: 'Edexcel IGCSE Further Pure Maths 4PM1 Help',
  webPageDescription: 'Live online teaching for Pearson Edexcel International GCSE Further Pure Mathematics 4PM1, written from the Issue 1 specification.',
  courseDescription: 'Live online classes for Edexcel International GCSE Further Pure Mathematics 4PM1: logarithms, quadratics, series and the binomial expansion, vectors, coordinate geometry, calculus and trigonometry in radians.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel IGCSE Further Pure 4PM1',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#topics', label: 'Ten topics' },
    { href: '#memory', label: 'Formulae to learn' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pearson Edexcel &middot; International GCSE 4PM1 &middot; Years 10 and 11',
  h1: 'Edexcel IGCSE Further Pure Maths 4PM1 help',
  lede: 'Pearson Edexcel International GCSE Further Pure Mathematics, code 4PM1, is a second maths qualification for pupils who already handle Higher tier maths comfortably. It brings calculus, logarithms, the binomial series and radian trigonometry into Years 10 and 11, with no statistics or easy questions to balance them. Pearson builds it on top of International GCSE Mathematics A at Higher tier. This page explains the two papers, the ten topics, the formulae that must be learned by heart, and how we teach 4PM1 live online.',
  secondaryCta: { href: '#papers', label: 'The papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel IGCSE Further Pure Maths 4PM1.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Independent of Pearson Edexcel',
  spec: [
    ['Qualification', 'Pearson Edexcel International GCSE Further Pure Mathematics'],
    ['Code', '4PM1'],
    ['Papers', '4PM1/01 and 4PM1/02'],
    ['Each paper', '2 hours, 100 marks, about 11 questions'],
    ['Tier', 'One, targeting grades 9 to 4, with 3 allowed'],
    ['Series', 'January and June'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Pearson Edexcel International GCSE Further Pure Mathematics, code 4PM1, is a single-tier qualification for able pupils, usually taken alongside International GCSE Mathematics A. Candidates sit Paper 1 and Paper 2 in the same January or June series; each runs for two hours, with 100 marks spread over roughly eleven questions. Grades 9 to 4 are targeted, with 3 allowed. Content runs from logarithms and series to calculus and radians. Modern Age Coders runs 4PM1 classes live online as part of its IGCSE Mathematics course; families pick a group of 15 to 20 or 1-on-1 lessons, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a Further Pure candidate',
    lede: 'The IGCSE course carries 4PM1. The A level course continues every topic in it, and Further Maths is where a keen 4PM1 pupil often ends up.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'FP / 01', title: 'IGCSE Mathematics', note: 'Further Pure 4PM1 alongside the Higher 4MA1 content it assumes.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'FP / 02', title: 'A Level Maths', note: 'The pure mathematics that picks up where 4PM1 calculus and series stop.' },
      { course: 'a-level-further-maths-course', code: 'FP / 03', title: 'A Level Further Maths', note: 'For the pupil whose favourite lesson of the week is 4PM1.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'How is Edexcel IGCSE Further Pure Maths assessed?',
      lede: 'Two long papers, one tier, one series. Any topic can appear on either paper, and questions often join two topics together.',
      body: [
        { kind: 'p', html: 'The specification describes a short, demanding format. "This specification is offered through a single tier." Both papers draw on the whole content, and Pearson notes that "the solution of any questions may require knowledge of more than one section of the specification content." With "around 11 questions" in two hours, each question is long: a typical one carries several parts and asks for a chain of reasoning, not a single technique.' },
        { kind: 'table', caption: 'Pearson Edexcel International GCSE Further Pure Mathematics 4PM1: the assessment', head: ['Paper', 'Time', 'Marks', 'Questions', 'Weight', 'Calculator'], rows: [
          ['4PM1/01', '2 hours', '100', 'Around 11', '50 per cent', 'Allowed'],
          ['4PM1/02', '2 hours', '100', 'Around 11', '50 per cent', 'Allowed']
        ] },
        { kind: 'source', html: 'Source: Pearson Edexcel International GCSE in Further Pure Mathematics specification, Issue 1, January 2016, "Qualification at a glance", from the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html" rel="noopener" target="_blank">Pearson 4PM1 qualification page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Grades on one tier',
          left: [
            'Every question aims at grades 9 down to 4, and a grade 3 can still be awarded. Roughly two fifths of the marks sit over grades 4 and 5, and three fifths over grades 6 to 9.',
            'Below the minimum standard the result is an unclassified U. There is no Foundation option to fall back on.'
          ],
          rightH3: 'Status in the UK',
          right: [
            'The specification states: "This qualification is not accredited or regulated by any UK regulatory body." Pearson designs it as a lead-in to its AS and A levels in Mathematics, Further Mathematics or Pure Mathematics.',
            'For a UK pupil that makes it a signal of ability and a head start on sixth-form maths, rather than a qualification that replaces anything.'
          ] }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'Ten topics',
      h2: 'What is in the IGCSE Further Pure Maths syllabus?',
      lede: 'Ten sections, all pure mathematics. Statistics and matrices are explicitly left out.',
      body: [
        { kind: 'table', caption: 'The 4PM1 content, with the detail from Pearson\'s notes that changes how each is taught', head: ['#', 'Section', 'A detail from the specification notes'], rows: [
          ['1', 'Logarithmic functions and indices', 'Laws of logarithms, change of base, equations of the form a<sup>x</sup> = b, simple surds'],
          ['2', 'The quadratic function', 'Completing the square, the discriminant, and functions of the roots of a quadratic'],
          ['3', 'Identities and inequalities', 'Algebraic division, the factor and remainder theorems, quadratic inequalities and simple linear programming'],
          ['4', 'Graphs', 'Polynomials and rational functions with asymptotes, and graphical solution of equations'],
          ['5', 'Series', 'Arithmetic and geometric series and sum to infinity; "Proofs of the above are not required."'],
          ['6', 'The binomial series', 'Positive integer n, and rational n for |x| &lt; 1; "The validity condition for (ii) is expected."'],
          ['7', 'Scalar and vector quantities', 'Vectors with i and j, position vectors, and dividing a line in a ratio'],
          ['8', 'Rectangular Cartesian coordinates', 'Distance, gradient, dividing a line in a given ratio, parallel and perpendicular lines'],
          ['9', 'Calculus', 'Product, quotient and chain rules, kinematics, areas, volumes of revolution, connected rates of change'],
          ['10', 'Trigonometry', 'Radians, arc and sector, addition formulae, and equations on a given interval']
        ] },
        { kind: 'p', mt: true, html: 'The calculus section is the one that surprises families. It includes differentiating products and quotients, finding volumes by rotating a curve about an axis ("The volumes will be obtained only by revolution about the coordinate axes"), and connected rates of change, where one quantity\'s rate is found from another\'s. For maxima and minima, "Justification of maxima and minima will be expected", so a pupil must show why a stationary point is a maximum, not just find it.' },
        { kind: 'two', mt: true,
          leftH3: 'What 4PM1 assumes',
          left: [
            'Pearson expects "a thorough knowledge of the content common to" International GCSE Mathematics A at Higher tier, or Mathematics B. Questions can lean on that content without teaching it again.',
            'In practice a pupil needs secure Higher algebra, surds, trigonometry in triangles and straight-line geometry before starting 4PM1.'
          ],
          rightH3: 'What 4PM1 leaves out',
          right: [
            'The specification says "knowledge of statistics and matrices will not be required." There is no data handling and no probability to collect easier marks on.',
            'For trigonometry, Pearson adds: "Long questions, explicitly involving excessive manipulation, will not be set." The difficulty is in combining ideas, not in pages of algebra.'
          ] }
      ]
    },
    {
      id: 'memory', tint: '', eyebrow: 'Formulae to learn',
      h2: 'Which formulae must you memorise for 4PM1?',
      lede: 'Pearson prints a formula sheet in the exam, and then publishes a separate list of formulae that will not be on it.',
      body: [
        { kind: 'p', html: 'Appendix 5 of the specification is titled "Formulae to learn", and it "gives formulae that students are expected to remember and will not be included on the formula sheet provided in the examination papers." It is the single most useful page in the specification for revision, because it tells a pupil exactly what has to be carried into the exam room.' },
        { kind: 'table', mt: true, caption: 'Areas covered by the 4PM1 "Formulae to learn" list, with examples in our words', head: ['Area', 'Examples of what must be remembered'], rows: [
          ['Logarithms and indices', 'log<sub>a</sub> xy = log<sub>a</sub> x + log<sub>a</sub> y, the quotient and power laws, log<sub>a</sub> a = 1 and log<sub>a</sub> 1 = 0'],
          ['Quadratic equations', 'The quadratic formula, and for roots &alpha; and &beta;: &alpha; + &beta; = &minus;b/a and &alpha;&beta; = c/a'],
          ['Series', 'The nth term and the sum to n terms of arithmetic and geometric series'],
          ['Coordinate geometry', 'Gradient, distance between two points, and the point dividing a line in the ratio m : n'],
          ['Calculus', 'The standard derivatives of powers of x, sin ax, cos ax and e<sup>ax</sup>'],
          ['Trigonometry', 'Arc length s = r&theta;, sector area &frac12;r<sup>2</sup>&theta;, the area &frac12;ab sin C and cos<sup>2</sup>&theta; + sin<sup>2</sup>&theta; = 1']
        ] },
        { kind: 'p', mt: true, html: 'Some trigonometry is given rather than learned. The specification notes that the addition formulae for sin(A + B), cos(A + B) and tan(A + B) "will be on the formula sheet", and that tan &theta; = sin &theta; &divide; cos &theta; is provided too. The cosine rule is given; the sine rule is expected to be known. We give pupils a one-page list split into "on the sheet" and "learn it" in the first month, and test the second column every week.' },
        { kind: 'table', mt: true, caption: 'Calculator rules for 4PM1, from the specification', head: ['Rule', 'Detail'], rows: [
          ['Use', 'Expected on both papers'],
          ['Minimum functions', 'Including ln x, e<sup>x</sup>, standard form, and trigonometric functions in degrees or radians'],
          ['Prohibited', 'Stored data or text, a typewriter-style keyboard, or symbolic algebra and calculus']
        ] },
        { kind: 'source', html: 'Source: 4PM1 specification, Appendix 5 "Formulae to learn", the notes to sections 9 and 10, and "Calculators". The examples in the first table are our summary; the appendix gives the formulae in full.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked examples, ours',
      h2: 'Three 4PM1 style problems, worked in full',
      lede: 'We wrote these to show the three habits 4PM1 tests most: rates in calculus, the binomial series with its validity condition, and the roots of a quadratic.',
      body: [
        { kind: 'p', html: '<strong>Our first problem, connected rates.</strong> A spherical balloon is inflated so that its volume V cm<sup>3</sup> increases at 50 cm<sup>3</sup> per second. Given V = (4/3)&pi;r<sup>3</sup>, find the rate at which the radius is increasing when r = 5 cm.' },
        { kind: 'ol', mt: true, items: [
          'Write down what is known and what is wanted: dV/dt = 50, and we want dr/dt when r = 5.',
          'Differentiate the volume with respect to the radius: dV/dr = 4&pi;r<sup>2</sup>. At r = 5 this is 100&pi;.',
          'Link the rates with the chain rule: dV/dt = (dV/dr) &times; (dr/dt), so 50 = 100&pi; &times; dr/dt.',
          'Solve: dr/dt = 50 &divide; 100&pi; = 1/(2&pi;), which is about 0.159 cm per second. Leaving 1/(2&pi;) as the exact answer first, then rounding, protects the accuracy mark.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our second problem, the binomial series',
          left: [
            'Expand (1 + x)<sup>1/2</sup> up to the term in x<sup>3</sup>, state the values of x for which it is valid, and use it to estimate &radic;1.02.',
            'With n = 1/2: 1 + (1/2)x + [(1/2)(&minus;1/2)/2]x<sup>2</sup> + [(1/2)(&minus;1/2)(&minus;3/2)/6]x<sup>3</sup> = 1 + x/2 &minus; x<sup>2</sup>/8 + x<sup>3</sup>/16. Because n is not a positive integer, the series is valid only for |x| &lt; 1. Putting x = 0.02 gives 1 + 0.01 &minus; 0.00005 + 0.0000005 = 1.0099505, which agrees with a calculator to seven decimal places.'
          ],
          rightH3: 'Our third problem, functions of the roots',
          right: [
            'The roots of 2x<sup>2</sup> &minus; 5x + 1 = 0 are &alpha; and &beta;. Without solving the equation, find &alpha;<sup>2</sup> + &beta;<sup>2</sup>.',
            'From the formulae to learn, &alpha; + &beta; = 5/2 and &alpha;&beta; = 1/2. Then &alpha;<sup>2</sup> + &beta;<sup>2</sup> = (&alpha; + &beta;)<sup>2</sup> &minus; 2&alpha;&beta; = 25/4 &minus; 1 = 21/4. The identity in the middle step is the whole question; pupils who try to find the roots first waste minutes on surds.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set: six questions we wrote for 4PM1 candidates, each answer verified in Python', head: ['#', 'Our question', 'Section', 'Answer'], rows: [
          ['1', 'Solve 2<sup>x+1</sup> = 3<sup>x</sup>, giving x to 3 significant figures.', 'Logarithms', '1.71'],
          ['2', 'Find the sum to infinity of the geometric series 12 + 6 + 3 + ...', 'Series', '24'],
          ['3', 'Differentiate x<sup>2</sup>e<sup>3x</sup>.', 'Calculus', 'e<sup>3x</sup>(2x + 3x<sup>2</sup>)'],
          ['4', 'Find the equation of the tangent to y = x<sup>3</sup> &minus; 2x at the point where x = 1.', 'Calculus', 'y = x &minus; 2'],
          ['5', 'Solve sin 2x = 0.5 for 0&deg; &lt; x &lt; 180&deg;.', 'Trigonometry', 'x = 15&deg; or 75&deg;'],
          ['6', 'A is (2, 1) and B is (10, 5). Find the point that divides AB in the ratio 1 : 3.', 'Coordinates', '(4, 2)']
        ] },
        { kind: 'source', html: 'We wrote the three worked problems and the six practice questions ourselves on 31 October 2026; none comes from Pearson. Pearson\'s specimen papers sit on the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html" rel="noopener" target="_blank">Pearson 4PM1 page</a>, and past papers are available to schools and exam centres through Pearson.' }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Who it suits',
      h2: 'Is IGCSE Further Pure Maths worth taking?',
      lede: 'For a pupil heading towards A level maths and enjoying algebra, often yes. For a pupil still consolidating Higher 4MA1, not yet.',
      body: [
        { kind: 'p', html: 'Pearson positions 4PM1 as "a solid basis for students wishing to progress to Edexcel AS and Advanced GCE Level, or equivalent qualifications." Much of its content (logarithms, the binomial expansion, radians, differentiation rules and integration) reappears in the first year of A level Mathematics. A pupil who has met it at fifteen arrives in the sixth form with a term or more of pure maths already familiar.' },
        { kind: 'table', mt: true, caption: 'A readiness check we use before recommending 4PM1 (our criteria, not Pearson\'s)', head: ['Sign', 'Ready for 4PM1', 'Wait a term'], rows: [
          ['Higher 4MA1 algebra', 'Rearranges and factorises without prompts', 'Still needs worked examples for each type'],
          ['Surds and indices', 'Simplifies and rationalises reliably', 'Makes sign or index-law slips'],
          ['Unfamiliar questions', 'Tries an approach and checks it', 'Stops when the method is not obvious'],
          ['Time available', 'Can give 4PM1 its own weekly slot', 'Already stretched across other subjects']
        ] },
        { kind: 'p', mt: true, html: 'One point from the 4MA1 specification is worth repeating here. Pearson warns that taking two qualifications "in the same subject" is very likely to be treated as one by colleges and universities. 4PM1 is a different subject from Mathematics A, so it adds a second maths qualification rather than duplicating the first.' },
        { kind: 'p', mt: true, html: 'Families thinking about the sixth form can read <a class="ag-inline-link" href="/is-a-level-further-maths-worth-it">whether A level Further Maths is worth it</a> and our <a class="ag-inline-link" href="/further-maths-tuition-online">further maths tuition page</a>. For the main IGCSE across boards, start from <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE maths tuition online</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Further Pure',
    lede: 'The order we teach follows dependency: algebra and logarithms first, calculus once those hold, mixed papers last.',
    table: { caption: 'Milestones for a Further Pure candidate', head: ['Stage', 'When', 'Evidence of readiness'], rows: [
      ['1. Higher 4MA1 secure', 'Before starting', 'All Higher algebra, surds, trigonometry and coordinate work done reliably'],
      ['2. Algebraic topics', 'First two terms', 'Logarithms, quadratics and their roots, identities, inequalities, series and the binomial expansion'],
      ['3. Calculus, vectors, radians', 'Following two terms', 'All four rules of differentiation, integration with areas and volumes, rates, vectors and radian trigonometry'],
      ['4. Mixed long questions', 'Before the series', 'Two-hour papers where one question joins two or three sections, with every step written']
    ] },
    left: { h3: 'Rung two decides the pace', ps: [
      'Logarithms and the binomial series feed into calculus questions later, so slips here repeat everywhere.',
      'Pupils who like seeing series converge can try them in code with <a class="ag-inline-link" href="/coding-for-igcse-students">coding for IGCSE students</a>.'
    ] },
    right: { h3: 'Rung four is the real exam', ps: [
      'About eleven questions in two hours means long, joined-up problems. We practise those in full, timed.',
      'Weekly classes slow down during the exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses near Further Pure',
    lede: 'Grouped by stage. A free first class shows which one fits.',
    bands: [
      { num: 'I', h3: 'The IGCSE pair', sub: '4MA1 and 4PM1', courses: [
        { code: 'UK / FP1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Higher 4MA1 and Further Pure 4PM1 taught as one programme.' },
        { code: 'UK / FP1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For a pupil whose Higher algebra needs securing first.' },
        { code: 'UK / FP1 / 03', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'For UK school pupils adding 4PM1 to a GCSE.' }
      ] },
      { num: 'II', h3: 'The sixth form', sub: 'Where 4PM1 leads', courses: [
        { code: 'UK / FP2 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics building on 4PM1 calculus.' },
        { code: 'UK / FP2 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Complex numbers, matrices and further pure.' },
        { code: 'UK / FP2 / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'For pupils heading into the IB Diploma.' }
      ] },
      { num: 'III', h3: 'Problem solving', sub: 'Beyond the specification', courses: [
        { code: 'UK / FP3 / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Hard problems for pupils who finish 4PM1 papers early.' },
        { code: 'UK / FP3 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Series, functions and rates explored in Python.' },
        { code: 'UK / FP3 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The data topics 4PM1 leaves out, for A level.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Two topics in every question',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The teaching team sits in India, which has no daylight saving, and every time we send you is in UK time.',
    slots: [
      { time: 'After school', l: 'A common slot for Year 10 and 11.' },
      { time: 'Evening', l: 'For pupils with clubs after school.' },
      { time: 'Weekend morning', l: 'A full two-hour paper fits here.' }
    ],
    cells: [
      { h3: 'Formulae drill', p: 'The Appendix 5 list tested weekly, so nothing has to be derived in the exam.' },
      { h3: 'Exact first', p: 'Answers kept exact, as in 1/(2&pi;), before any rounding.' },
      { h3: 'Justified maxima', p: 'A reason for every maximum and minimum, as the specification expects.' },
      { h3: 'Validity conditions', p: 'The |x| &lt; 1 condition stated whenever the binomial series uses a fractional power.' },
      { h3: 'Joined-up questions', p: 'Practice where logarithms meet calculus or vectors meet coordinates.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 4PM1 pupils, or one teacher for one pupil.' }
    ]
  },

  projectsH2: 'What our students built in class',
  projectsLede: 'Pieces from normal lessons, not marked for any exam. Browse the rest in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, reproduced as written.',

  fees: {
    h2: 'Fees for Further Pure 4PM1 classes',
    lede: 'A monthly fee in US dollars applies to families outside India. Your first class is free, and we only bill once a course and a fixed weekly slot are agreed.',
    free: ['A first class on a 4PM1 topic', 'A readiness view against Higher 4MA1', 'A phone number books it'],
    group: ['A group of 15 to 20 4PM1 pupils', 'One teacher through the course', 'Formulae tests most weeks', 'Lighter weeks around each series'],
    one: ['A teacher for one pupil', 'Planned around both IGCSEs', 'Suits a pupil starting 4PM1 late']
  },

  faq: {
    eyebrow: 'Questions about 4PM1',
    h2: 'What families ask about IGCSE Further Pure Maths',
    items: [
      { q: 'How many papers are in IGCSE Further Pure Maths 4PM1?', a: 'Two, Paper 1 and Paper 2. Each is a two-hour written exam worth 100 marks, with about eleven questions, and both are sat in one series.' },
      { q: 'Is there a Foundation tier for 4PM1?', a: 'No. The specification is offered through a single tier, aimed at grades 9 to 4, though a 3 can be awarded. A performance below that is reported as U, unclassified.' },
      { q: 'Is a calculator allowed in IGCSE Further Pure?', a: 'Yes, on both papers. It needs ln x, e to the x and trigonometry in radians, and any model that does algebra symbolically, stores text or has a full typing keyboard is banned.' },
      { q: 'What topics are in 4PM1?', a: 'Ten sections: logarithms and indices, the quadratic function, identities and inequalities, graphs, series, the binomial series, vectors, Cartesian coordinates, calculus and trigonometry. Statistics and matrices are not required.' },
      { q: 'What formulae do I need to memorise for 4PM1?', a: 'Appendix 5 of the specification lists them. They include the laws of logarithms, the sum and product of the roots of a quadratic, arithmetic and geometric series, coordinate formulae and the standard derivatives.' },
      { q: 'Is IGCSE Further Pure Maths hard?', a: 'It is harder than International GCSE Mathematics A, because every question is pure maths at a level close to the first year of A level, and questions often combine topics. It assumes the Higher tier 4MA1 content already.' },
      { q: 'Should I take 4PM1 with 4MA1?', a: 'Most candidates do, because 4PM1 assumes the Higher 4MA1 content. They are different subjects, so 4PM1 adds a second maths qualification rather than repeating the first.' },
      { q: 'Is IGCSE Further Pure Maths regulated in the UK?', a: 'No. Pearson\'s specification says no UK regulator accredits or oversees it. It exists to prepare pupils for sixth-form maths and further maths.' },
      { q: 'When do your 4PM1 classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm every time in UK time.' },
      { q: 'Are you part of Pearson Edexcel?', a: 'No. Modern Age Coders is independent of Pearson; we follow the published specification, and every example here is our own work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for able young mathematicians',
    lede: 'The main IGCSE, the sixth-form choices, and problem solving beyond any syllabus.',
    items: [
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'Both IGCSE boards explained on one page.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'Where a 4PM1 pupil often heads at sixteen.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A clear look at the choice many 4PM1 families face.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'The course that continues 4PM1 calculus and series.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad preparation', p: 'For pupils who want harder problems than any exam.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All of our UK pages, listed together.' }
    ]
  },

  start: {
    h2: 'Book a free 4PM1 class',
    lede: 'Leave a number and we will call at a UK time that suits you. The class works one of our 4PM1 problems with your child and checks the Higher 4MA1 base underneath it.',
    readFirst: 'Would you like to read first? Every <a class="ag-inline-link" href="/courses">course page</a> shows its full syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a class, and <a class="ag-inline-link" href="/student-labs">student labs</a> has examples of student work.',
    note: 'WhatsApp reaches us fastest and is free to use from a UK mobile. Expect a reply from our India team, from a +91 number.',
    formNote: 'No payment and no sign-up; we answer once with a time.'
  },

  footer: {
    cols: [
      { h4: 'IGCSE and beyond', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Stretch', links: [
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'BMO preparation' },
        { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Edexcel IGCSE Further Pure 4PM1, live on UK time'
  },

  personalityCss: `
.ag-root.ag-eif .ag-hero h1 { letter-spacing: -0.024em; font-weight: 690; }
.ag-root.ag-eif .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-eif .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-eif .ag-table caption { text-align: left; font-weight: 630; }
.ag-root.ag-eif .ag-table th:first-child { width: 8%; }
.ag-root.ag-eif .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Pearson Edexcel International GCSE in Further Pure Mathematics (9-1), 4PM1, specification Issue 1, January 2016 (first examination June 2019): single tier targeting grades 9 to 4 with 3 allowed; two papers 4PM1/01 and 4PM1/02, each 2 hours, 100 marks, around 11 questions, 50 per cent; both in the same series; January and June availability; formula sheet plus Appendix 5 formulae to learn; calculator on all papers; ten pure sections with no statistics or matrices; assumes International GCSE Mathematics A Higher or Mathematics B; not accredited or regulated by any UK regulatory body.',
    localProject: 'One tier, about eleven long questions, and formulae carried in the head. The page sets out the two 4PM1 papers and grade targeting, the ten sections with the notes that change teaching (volumes of revolution, justified maxima, the binomial validity condition), the Formulae to learn appendix against what is printed, and the calculator rules, then works three of our own problems (balloon rates dr/dt = 1/(2 pi), the binomial estimate of root 1.02 as 1.0099505, alpha^2 + beta^2 = 21/4) and a six-question practice set written by us, with our own readiness check.',
    requiredMentions: ['offered through a single tier', 'around 11 questions', 'will not be included on the formula sheet provided in the examination papers', 'knowledge of statistics and matrices will not be required', 'Justification of maxima and minima will be expected', 'The volumes will be obtained only by revolution about the coordinate axes', 'The validity condition for (ii) is expected.', '1.0099505', 'excessive manipulation, will not be set', '4PM1/01'],
    sources: [
      { claim: 'Pearson Edexcel International GCSE in Further Pure Mathematics specification, Issue 1: tier, papers, questions, grades, availability, content and notes, formulae to learn, calculators and status.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Further%20Pure%20Mathematics/2016/Specification%20and%20sample%20assessments/international-gcse-in-further-pure-mathematics-spec.pdf' },
      { claim: 'Pearson 4PM1 qualification page linking the specification.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html' },
      { claim: 'Pearson Edexcel International GCSE Mathematics A specification: the same-subject warning and progression to Further Pure Mathematics.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf' }
    ],
    rejectedClaims: [
      'Exam dates for January or June 2027: not read at Pearson\'s timetable for this build.',
      'Grade boundaries and entry statistics: not read at a primary source, not printed.',
      'That 4PM1 earns UCAS points or replaces any UK qualification: not stated by Pearson, not claimed.',
      'Any Pearson past paper or sample question: not reproduced; the examples, practice set and readiness check are ours.',
      'Exam centre fees, any grade promise, and any affiliation with Pearson: not printed, declined on the page.'
    ]
  }
};
