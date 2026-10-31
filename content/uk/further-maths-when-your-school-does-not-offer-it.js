'use strict';
// Further Maths when your school does not offer it (ag- guide door, UK and US exams cluster Phase 2, row UK039).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/further-maths-when-your-school-does-not-offer-it/):
//  - GOV.UK, Department for Education guidance "Get help to improve advanced maths teaching and participation
//    levels" (published 21 September 2018, last updated 11 October 2022, "Applies to England"). Verbatim: "The advanced
//    mathematics support programme (AMSP) provides resources and support to improve the teaching and student uptake of
//    post-16 maths."; "provides support for teachers and students in state-funded schools and colleges in England";
//    aims include "improve access to level 3 maths by supporting more schools and colleges to offer AS/A level further
//    maths and core maths" and "support level 3 students to progress to higher education by providing direct tuition,
//    support and enrichment opportunities for 16- to 19-year-olds"; resources include "support for schools and colleges
//    to offer AS/A level further maths and core maths", "tuition support for further maths students", "support for
//    students preparing for university maths entrance tests"; "The advanced mathematics support programme is available
//    to all state-funded schools and colleges in England."; "Additional support is available for schools and colleges in
//    priority areas."; "Most support opportunities and resources are free. There are some costs for student tuition of
//    further maths and some CPD is chargeable"; "Register through the AMSP website"; update note "after the award of a
//    new contract to run the programme in July 2022".
//  - Department for Education, "Further mathematics AS and A level content", April 2016. Verbatim: "A level further
//    mathematics has a prescribed core which must comprise approximately 50% of its content. The core content is set out
//    in sections A to I."; "AS further mathematics, which can be co-taught with A level further mathematics as a separate
//    qualification and which can be taught alongside AS or A level mathematics, is a very useful qualification in its own
//    right."; "In any AS further mathematics specification, at least one route must be available to allow the
//    qualification to be taught alongside AS mathematics"; "Further mathematics is designed for students with an
//    enthusiasm for mathematics, many of whom will go on to degrees in mathematics, engineering, the sciences and
//    economics."; core sections A Proof, B Complex numbers, C Matrices, D Further algebra and functions, E Further
//    calculus, F Further vectors, G Polar coordinates, H Hyperbolic functions, I Differential equations.
//  - AQA A-level Further Mathematics (7367) specification, Version 1.1: "This specification is available to private
//    candidates."; "A private candidate may be self-taught, home schooled or have private tuition, either with a tutor
//    or through a distance learning organisation. They must be based in the UK."; "There are no previous learning
//    requirements."
//  - Pearson Edexcel A level Further Mathematics (9FM0) specification, Issue 4: "There are no prior learning or other
//    requirements for this qualification."; "Students must complete all assessments in May/June in any single year."
//  - Cambridge International AS and A Level Further Mathematics 9231 syllabus for 2026 and 2027: "Private candidates
//    can enter for this syllabus."; "We strongly recommend that learners starting this course should have studied, or be
//    studying, Cambridge International AS & A Level Mathematics (9709) or the equivalent."
// Rejected hosts: amsp.org.uk and mei.org.uk returned HTTP 403 to curl; contractsfinder.service.gov.uk returned 403;
// none was retried. The AMSP is described only from the GOV.UK guidance; who runs it is not stated on the page.
// Excluded from the GOV.UK press release of 6 May 2025: its funding figures and its gender statistics (brief rules).
// Our own material, labelled on the page: a decision table of five routes (our framing), a 30-week self-study outline
// (ours), three starter problems (5^n + 3 divisible by 4 by induction; roots of x^3 - 6x^2 + 11x - 6, sum of squares 14;
// the reflection matrix in y = x squared gives I), checked in Python on 31 October 2026.
// Spine: the entry is the hard part. Teaching can come from many places; an exam entry needs a centre, and every
// route is planned backwards from where the student will sit the papers. Lesson family: arranging the entry first.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'NO FM AT SCHOOL', blurb: 'If your school does not teach Further Maths, the teaching is the easier half. The exam entry is what needs planning first.' },
  slug: 'further-maths-when-your-school-does-not-offer-it',
  code: 'fwy',
  accent: '#6F2E21',
  accentRationale: 'Further Maths without a school teacher: a rust brown #6F2E21 from the cluster allocation, 9.49:1 on #FBF8F2, warmer than the board-page accents so this guide reads as advice rather than a specification page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Further Maths when your school does not offer it',
  title: 'Further Maths When Your School Does Not Offer It',
  description: 'Your school does not offer A level Further Maths? Five routes to study it anyway: the AMSP, AS Further Maths, private entry, and live online Further Maths classes.',
  ogDescription: 'How to take A level Further Maths when your school does not teach it: what the government-funded AMSP offers, private candidate rules from AQA, Pearson and Cambridge, and online teaching.',
  twitterDescription: 'No Further Maths at your school? Sort out the exam entry first, then the teaching. Five routes, with the rules from the boards and GOV.UK.',
  pageName: 'Further Maths When Your School Does Not Offer It',
  webPageDescription: 'A guide for UK sixth formers whose school or college does not offer A level Further Maths, written from GOV.UK guidance and exam board specifications, with live online teaching from Modern Age Coders.',
  courseDescription: 'Live online A level Further Maths teaching for students whose school does not offer it: the compulsory core and options for AQA, Pearson Edexcel, OCR or Cambridge International, planned around the student\'s exam entry.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Further Maths without school provision',
  navLinks: [
    { href: '#routes', label: 'Five routes' },
    { href: '#amsp', label: 'The AMSP' },
    { href: '#entry', label: 'Exam entry' },
    { href: '#plan', label: 'Study plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'A level Further Maths &middot; Years 12 and 13 &middot; England, Wales, Northern Ireland',
  h1: 'Further Maths when your school does not offer it',
  lede: 'Plenty of sixth forms teach A level Maths but not Further Maths, usually because there are too few students to run a class. That does not close the door. Further Maths can be taught by a programme, a tutor, an online course or the student working alone. What cannot be improvised is the exam: someone has to enter the student and host the papers. This page sets out the routes, what the government-funded AMSP offers, the boards\' private candidate rules, and how we teach Further Maths online.',
  secondaryCta: { href: '#routes', label: 'Compare the routes' },
  wa: 'Hello Modern Age Coders, my school does not offer Further Maths. I would like a free first class.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with the AMSP or any exam board',
  spec: [
    ['Who this is for', 'Year 11 to 13 students without school Further Maths'],
    ['Qualification', 'AS or A level Further Mathematics'],
    ['Boards covered', 'AQA, Pearson Edexcel, OCR, Cambridge'],
    ['First step', 'Secure an exam entry'],
    ['Free support', 'AMSP, via state schools in England'],
    ['Our teaching', 'Live online, batch or 1-on-1'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'If your school does not offer A level Further Maths, you can still take it. First secure an exam entry, either through your own school or college or at another exam centre as a private candidate. Then arrange teaching: through the Department for Education\'s Advanced Maths Support Programme (AMSP) if you are at a state-funded school in England, through a tutor or online course, or a mix. Modern Age Coders teaches A level Further Maths live online, in a 15 to 20 batch or 1-on-1, from a free first class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses for a student studying Further Maths outside school',
    lede: 'The Further Maths course does the main work. A level Maths is its foundation; the admissions course matters because many Further Maths students apply for maths-heavy degrees.',
    items: [
      { course: 'a-level-further-maths-course', code: 'NF / 01', title: 'A Level Further Maths', note: 'Core and options for the student\'s board, taught from scratch if the school has no teacher.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'NF / 02', title: 'A Level Maths', note: 'Further Maths builds directly on it; gaps here show up fast.' },
      { course: 'tmua-mat-step-preparation-course', code: 'NF / 03', title: 'TMUA and STEP preparation', note: 'For applicants whose universities expect an admissions test.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: 'tint', eyebrow: 'Five routes',
      h2: 'How can you take A level Further Maths if your school does not offer it?',
      lede: 'There are five realistic routes. They differ in who teaches and who enters you for the exam, and several can be combined.',
      body: [
        { kind: 'p', html: 'The Department for Education describes Further Maths as "designed for students with an enthusiasm for mathematics, many of whom will go on to degrees in mathematics, engineering, the sciences and economics." For those students, a school timetable without it is a real obstacle, but a solvable one. The table below is our summary of the routes, built from the sources named under it.' },
        { kind: 'table', mt: true, caption: 'Routes to Further Maths without a school class, our framing of the published rules', head: ['Route', 'Who teaches', 'Who enters you', 'Where it applies'], rows: [
          ['1. School entry, outside teaching', 'An outside programme, tutor or online course', 'Your own school or college', 'Anywhere the school agrees to enter you'],
          ['2. AMSP support through your school', 'AMSP tuition support for Further Maths students, arranged with the school', 'Your own school or college', 'State-funded schools and colleges in England'],
          ['3. AS Further Maths first', 'Any of the above, for a smaller qualification', 'Your school or a centre', 'The DfE content sets rules for AS Further Maths on every board'],
          ['4. Private candidate', 'Self-study, tutor or distance learning', 'An exam centre that agrees to host you', 'UK-based for AQA 7367; Cambridge 9231 accepts private candidates'],
          ['5. Change of institution', 'A sixth form or college that teaches it', 'That institution', 'Depends on local options and admissions']
        ] },
        { kind: 'source', html: 'Sources: GOV.UK, <a class="ag-inline-link" href="https://www.gov.uk/guidance/get-help-to-increase-participation-in-advanced-maths" rel="noopener" target="_blank">Get help to improve advanced maths teaching and participation levels</a> (last updated 11 October 2022); private candidate sections of the AQA 7367 specification and the Cambridge 9231 syllabus; DfE Further mathematics AS and A level content, April 2016. Route names are ours.' },
        { kind: 'p', mt: true, html: 'Route 1 usually asks least of everyone: the school already enters the student for A level Maths, so adding a Further Maths entry with the same board is an administrative step, not a new relationship. Everything else on this page assumes you have asked your school about it first.' }
      ]
    },
    {
      id: 'amsp', tint: 'deep', eyebrow: 'The AMSP',
      h2: 'What is the AMSP, and can it help with Further Maths?',
      lede: 'The Advanced Maths Support Programme is a Department for Education programme for state-funded schools and colleges in England. One of its aims is helping more of them offer Further Maths, including tuition support for students.',
      body: [
        { kind: 'p', html: 'The GOV.UK guidance page states that the AMSP "provides resources and support to improve the teaching and student uptake of post-16 maths" and that it "provides support for teachers and students in state-funded schools and colleges in England." Among its aims it lists to "improve access to level 3 maths by supporting more schools and colleges to offer AS/A level further maths and core maths", and to "support level 3 students to progress to higher education by providing direct tuition, support and enrichment opportunities for 16- to 19-year-olds".' },
        { kind: 'table', mt: true, caption: 'What the GOV.UK page says the AMSP offers, and what that means for a student', head: ['Listed on GOV.UK', 'What it means for a Further Maths student'], rows: [
          ['"support for schools and colleges to offer AS/A level further maths and core maths"', 'The school itself can get help to start or keep Further Maths'],
          ['"tuition support for further maths students"', 'Teaching can be arranged for students where the school has no class'],
          ['"support for students preparing for university maths entrance tests"', 'Help with admissions tests sits in the same programme'],
          ['"Most support opportunities and resources are free. There are some costs for student tuition of further maths"', 'Tuition may carry a cost; ask the school how it is handled'],
          ['"Additional support is available for schools and colleges in priority areas."', 'Some areas get more help, based on deprivation data']
        ] },
        { kind: 'p', mt: true, html: 'Two limits are worth stating plainly. The guidance says "Applies to England" and covers state-funded schools and colleges, so students at independent schools, or in Wales or Northern Ireland, need another route. And the AMSP works through schools: GOV.UK tells institutions to "Register through the AMSP website". So the first conversation is still with the school\'s maths department. We could not read the AMSP\'s own website when writing this page, so for current details of its tuition, go to the programme directly or ask your school.' }
      ]
    },
    {
      id: 'entry', tint: '', eyebrow: 'Exam entry',
      h2: 'Can you sit A level Further Maths as a private candidate?',
      lede: 'Yes, with the major boards, provided an exam centre agrees to host you. AQA requires 7367 private candidates to be UK-based; Cambridge International states that private candidates can enter for 9231.',
      body: [
        { kind: 'p', html: 'AQA\'s 7367 specification says: "This specification is available to private candidates." It continues: "A private candidate may be self-taught, home schooled or have private tuition, either with a tutor or through a distance learning organisation. They must be based in the UK." Cambridge International\'s 9231 syllabus for 2026 and 2027 states: "Private candidates can enter for this syllabus." Pearson\'s 9FM0 specification sets no formal entry requirement either, though it expects most students to hold or be taking A level Maths.' },
        { kind: 'ol', mt: true, items: [
          'In Year 11 or early Year 12, ask your school whether it can enter you for Further Maths with the same board as your A level Maths, even without a class.',
          'If not, ask which board and specification your A level Maths uses, so your Further Maths matches it where possible.',
          'Contact exam centres near you that accept private candidates. Ask early; centres may charge and set their own deadlines.',
          'Confirm the specification code and, for Pearson, the option route, before teaching begins.',
          'Only then fix the teaching plan: which content, by when, and with whom.'
        ] },
        { kind: 'p', mt: true, html: 'The timing rules shape the plan. Pearson requires every 9FM0 paper to be sat in one May and June, and AQA describes 7367 as linear, with every exam sat at the end of the course. Cambridge International runs June and November series. Whatever the board, all papers fall together, so the teaching has to cover everything before one exam season.' },
        { kind: 'p', mt: true, html: 'We do not run an exam centre and cannot enter anyone for an exam. We teach; the entry stays between the family, the school or centre, and the board.' }
      ]
    },
    {
      id: 'as', tint: 'tint', eyebrow: 'A smaller step',
      h2: 'Is AS Further Maths a good option if your school does not offer the A level?',
      lede: 'It can be. The Department for Education calls AS Further Maths a very useful qualification in its own right, and every specification must allow it to be taught alongside AS Maths.',
      body: [
        { kind: 'p', html: 'The DfE subject content says AS further mathematics "can be taught alongside AS or A level mathematics" and "is a very useful qualification in its own right." It also requires that "In any AS further mathematics specification, at least one route must be available to allow the qualification to be taught alongside AS mathematics". In practice that means a Year 12 student can start AS Further Maths without having finished A level Maths first.' },
        { kind: 'two', mt: true,
          leftH3: 'When AS makes sense',
          left: [
            'When teaching time is limited, for example a student studying alone with weekly lessons.',
            'When the student wants Further Maths content for a university application but is carrying three other A levels.'
          ],
          rightH3: 'When the full A level is worth the push',
          right: [
            'When the student\'s target degree is maths, physics or engineering and the full A level is listed as preferred or required. Check each university\'s own entry page.',
            'When the student is moving fast through A level Maths and has the time.'
          ] },
        { kind: 'p', mt: true, html: 'By DfE rules, A level Further Maths has "a prescribed core which must comprise approximately 50% of its content", sections A to I: proof, complex numbers, matrices, further algebra and functions, further calculus, further vectors, polar coordinates, hyperbolic functions and differential equations. AS covers a subset of that core plus options. Either way, those nine headings are the backbone of any self-study plan.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Study plan',
      h2: 'How do you study Further Maths without a teacher at school?',
      lede: 'Backwards from the exam date, in blocks that follow the core. Here is a 30-week outline we use as a starting point, and three starter problems.',
      body: [
        { kind: 'table', caption: 'A 30-week Further Maths outline for one academic year of the core, ours (adjust to the board\'s specification)', head: ['Weeks', 'Core block', 'Checkpoint'], rows: [
          ['1 to 4', 'Proof by induction; roots of polynomials', 'Induction proofs written with base case, step and conclusion'],
          ['5 to 9', 'Complex numbers: arithmetic, Argand diagrams, modulus and argument', 'Loci sketched and equations solved'],
          ['10 to 14', 'Matrices: arithmetic, determinants, inverses, transformations', 'Transformations described from a matrix and back'],
          ['15 to 18', 'Further algebra and functions; series', 'Method of differences used confidently'],
          ['19 to 23', 'Further calculus and further vectors', 'Volumes of revolution; lines and planes in three dimensions'],
          ['24 to 27', 'Polar coordinates and hyperbolic functions', 'Polar areas and hyperbolic identities'],
          ['28 to 30', 'Differential equations, then a mixed review', 'A full timed core paper from the board']
        ] },
        { kind: 'p', mt: true, html: '<strong>Our starter problem 1, proof by induction.</strong> Prove that 5<sup>n</sup> + 3 is divisible by 4 for all positive integers n. For n = 1, 5 + 3 = 8. Assume 5<sup>k</sup> + 3 = 4m. Then 5<sup>k+1</sup> + 3 = 5(5<sup>k</sup> + 3) &minus; 12 = 20m &minus; 12 = 4(5m &minus; 3), a multiple of 4. So the result holds for every positive integer.' },
        { kind: 'p', mt: true, html: '<strong>Our starter problem 2, roots of polynomials.</strong> The roots of x<sup>3</sup> &minus; 6x<sup>2</sup> + 11x &minus; 6 = 0 are &alpha;, &beta; and &gamma;. Without solving, find &alpha;<sup>2</sup> + &beta;<sup>2</sup> + &gamma;<sup>2</sup>. The sum of the roots is 6 and the sum of products in pairs is 11, so the answer is 6<sup>2</sup> &minus; 2 &times; 11 = 14. Checking: the roots are 1, 2 and 3, and 1 + 4 + 9 = 14.' },
        { kind: 'p', mt: true, html: '<strong>Our starter problem 3, matrices.</strong> The matrix with rows (0, 1) and (1, 0) reflects the plane in the line y = x. Squaring it gives the identity matrix, which matches the geometry: reflecting twice returns every point to where it started. Ideas like this, a picture behind each calculation, are what make self-study stick.' },
        { kind: 'source', html: 'The outline and problems were written by us on 31 October 2026. Each board publishes its own specification and past papers; follow the content list of the specification you are entered for.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Order of jobs',
    h2: 'The order to do things in, from Year 11',
    lede: 'Entry first, teaching second, practice last.',
    table: { caption: 'Sequence for a student without school Further Maths', head: ['Step', 'Timing', 'Done when'], rows: [
      ['1. Ask the school', 'Year 11 summer or first weeks of Year 12', 'You know whether the school will enter you'],
      ['2. Fix the entry', 'Autumn of Year 12', 'Board, specification code and centre are confirmed in writing'],
      ['3. Arrange teaching', 'Autumn of Year 12', 'A weekly slot with a programme, tutor or course'],
      ['4. Cover the core and options', 'Years 12 and 13', 'Every specification heading taught and practised'],
      ['5. Timed papers', 'Final two terms', 'Full papers from the board, marked against its mark schemes']
    ] },
    left: { h3: 'Why entry comes before teaching', ps: [
      'Without a confirmed entry, a year of study can end with nowhere to sit the exam.',
      'And the specification decides the content.'
    ] },
    right: { h3: 'Why A level Maths still matters', ps: [
      'Further Maths assumes it throughout.',
      'A shaky A level Maths base shows up in the first Further Maths topic.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for an independent Further Maths learner',
    lede: 'Grouped by purpose. A free lesson helps us suggest where to start.',
    bands: [
      { num: 'I', h3: 'The two maths A levels', sub: 'Core of the plan', courses: [
        { code: 'UK / NF1 / 01', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Compulsory core and options for the student\'s board.' },
        { code: 'UK / NF1 / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The base Further Maths stands on.' },
        { code: 'UK / NF1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For statistics options.' }
      ] },
      { num: 'II', h3: 'Readiness', sub: 'Before or beside Year 12', courses: [
        { code: 'UK / NF2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Top-grade GCSE skills for a Year 11 planning ahead.' },
        { code: 'UK / NF2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Fluent algebra before Further Maths begins.' },
        { code: 'UK / NF2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Matrices and iteration explored in Python.' }
      ] },
      { num: 'III', h3: 'University track', sub: 'Applications and beyond', courses: [
        { code: 'UK / NF3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'The admissions tests strong applicants sit.' },
        { code: 'UK / NF3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Linear algebra and analysis previewed.' },
        { code: 'UK / NF3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving well past the syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A teacher where the school has none',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons run on UK time; our teachers are in India, and the UK slot you book does not move when the clocks change.',
    slots: [
      { time: 'After school', l: 'Fits beside a normal sixth-form day.' },
      { time: 'Evening', l: 'Good for 1-on-1 Further Maths.' },
      { time: 'Weekend morning', l: 'Time for a full timed paper.' }
    ],
    cells: [
      { h3: 'Your board, your code', p: 'Teaching follows the specification you are entered for.' },
      { h3: 'From scratch', p: 'No assumption that a school teacher covered anything.' },
      { h3: 'Homework marked', p: 'Written feedback on every set of problems.' },
      { h3: 'Entry checklist', p: 'A reminder schedule for centre and board deadlines.' },
      { h3: 'Admissions tests', p: 'TMUA or STEP practice where the student needs it.' },
      { h3: 'Batch or 1-on-1', p: 'A 15 to 20 batch, or a single student.' }
    ]
  },

  projectsH2: 'Student projects from lessons',
  projectsLede: 'Made in class, not for any exam. A wider selection is in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, shown as they were written.',

  fees: {
    h2: 'Fees for Further Maths classes outside school',
    lede: 'For UK families we charge a single monthly fee in US dollars. You start with a free lesson, and payment begins only once a course and a weekly slot are agreed.',
    free: ['A free Further Maths lesson', 'A frank view of AS versus full A level for the student', 'Booked by phone or WhatsApp'],
    group: ['A Further Maths batch of 15 to 20', 'Core content in a steady weekly rhythm', 'Peers working on the same specification', 'Lighter weeks in exam season'],
    one: ['One teacher, one student', 'Matched to the student\'s exact board and route', 'Paced to the centre\'s exam series']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'What families ask when the school does not offer Further Maths',
    items: [
      { q: 'Can I do A level Further Maths if my school does not offer it?', a: 'Yes. You need an exam entry, through your school or as a private candidate at another centre, and a source of teaching. Many students combine school entry with outside teaching.' },
      { q: 'What is the AMSP?', a: 'The Advanced Maths Support Programme is a Department for Education programme supporting post-16 maths in state-funded schools and colleges in England. Its listed support includes helping schools offer Further Maths and tuition support for Further Maths students.' },
      { q: 'Is AMSP Further Maths tuition free?', a: 'GOV.UK says most AMSP support is free but that there are some costs for student tuition of Further Maths. Ask your school how it handles them, as the programme works through institutions.' },
      { q: 'Can I take Further Maths as a private candidate?', a: 'Yes, with boards that accept private candidates, if an exam centre agrees to host you. AQA requires private candidates for 7367 to be based in the UK, and Cambridge International accepts private candidates for 9231.' },
      { q: 'Should I do AS Further Maths instead of the full A level?', a: 'It depends on your time and your degree plans. The DfE calls AS Further Maths a very useful qualification in its own right, and every specification allows it alongside AS Maths. Check what your target universities prefer.' },
      { q: 'Can I teach myself A level Further Maths?', a: 'Some students do, especially strong ones with a structured plan and marked practice. AQA explicitly lists self-taught students among possible private candidates. Regular feedback on written proofs is the part that is hardest to replace.' },
      { q: 'Do I need A level Maths for Further Maths?', a: 'Further Maths builds on A level Maths throughout, so in practice you study both. Pearson and AQA set no formal prior learning requirement, and Cambridge strongly recommends studying its 9709 Mathematics alongside or before 9231.' },
      { q: 'Which board should I choose for Further Maths?', a: 'Usually the same board as your A level Maths, because the content and notation then match. If you are a private candidate, the centre\'s available boards may decide it.' },
      { q: 'When are your Further Maths classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in UK time.' },
      { q: 'Are you part of the AMSP?', a: 'No. Modern Age Coders is an independent online school, not part of the AMSP, the Department for Education or any exam board, and we do not enter students for exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on Further Maths',
    lede: 'Board pages, costs and the question of whether to take it.',
    items: [
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'Our main Further Maths page.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'Weighing up the extra A level.' },
      { href: '/further-maths-tutor-cost-uk', label: 'Further maths tutor cost in the UK', p: 'How families budget.' },
      { href: '/aqa-a-level-maths-7357-help', label: 'AQA A level Maths 7357 help', p: 'The AQA A level Maths paper by paper.' },
      { href: '/maths-for-home-educated-children-uk', label: 'Maths for home-educated children in the UK', p: 'For families teaching at home.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free Further Maths class',
    lede: 'Send a number and we will ring at a UK time you pick. The first lesson covers one core topic and ends with a short plan for the entry and the teaching, based on your board.',
    readFirst: 'Reading around first? <a class="ag-inline-link" href="/courses">Each course</a> lists its content, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows student work.',
    note: 'On WhatsApp we answer fastest, and it is free from a UK phone. Our staff are in India and reply from a +91 number.',
    formNote: 'No cost to ask, no obligation; we come back with one suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Further Maths', links: [
        { href: '/further-maths-tuition-online', label: 'Further maths tuition' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is it worth it?' },
        { href: '/further-maths-tutor-cost-uk', label: 'Costs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Related', links: [
        { href: '/aqa-a-level-maths-7357-help', label: 'AQA A level Maths 7357' },
        { href: '/tmua-preparation', label: 'TMUA preparation' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Further Maths for students without a school class, UK time'
  },

  personalityCss: `
.ag-root.ag-fwy .ag-hero h1 { letter-spacing: -0.016em; font-weight: 690; }
.ag-root.ag-fwy .ag-capsule { border-left-width: 8px; border-radius: 3px; }
.ag-root.ag-fwy .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-fwy .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-fwy .ag-table td:first-child { font-weight: 620; }
.ag-root.ag-fwy .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'GOV.UK (Department for Education) guidance on the advanced mathematics support programme, last updated 11 October 2022: England only, state-funded schools and colleges, aims including helping schools offer AS/A level further maths and direct tuition for 16 to 19s, tuition support for further maths students, most support free with some costs for further maths tuition, priority areas, registration through the AMSP website. DfE Further mathematics AS and A level content (April 2016): core of about 50 per cent in sections A to I; AS can be taught alongside AS or A level maths. AQA 7367 and Cambridge 9231 private candidate rules; Pearson 9FM0 no prior learning requirement and single-year assessment.',
    localProject: 'The entry is the hard part. The page sets out five routes to Further Maths without a school class (our framing) with who teaches and who enters, explains what GOV.UK says the AMSP offers and its limits, quotes the private candidate rules of AQA and Cambridge with a five-step entry plan, weighs AS against the full A level from the DfE content, and gives a 30-week core outline and three starter problems (5^n + 3 by induction, a root sum of squares of 14, the reflection matrix in y = x), all ours.',
    requiredMentions: ['improve access to level 3 maths by supporting more schools and colleges to offer AS/A level further maths and core maths', 'tuition support for further maths students', 'There are some costs for student tuition of further maths', 'provides resources and support to improve the teaching and student uptake of post-16 maths', 'can be taught alongside AS or A level mathematics', 'at least one route must be available to allow the qualification to be taught alongside AS mathematics', 'either with a tutor or through a distance learning organisation', 'Private candidates can enter for this syllabus.', '5<sup>k+1</sup> + 3 = 5(5<sup>k</sup> + 3) &minus; 12', '6<sup>2</sup> &minus; 2 &times; 11 = 14'],
    sources: [
      { claim: 'GOV.UK, Department for Education: Get help to improve advanced maths teaching and participation levels (AMSP guidance), last updated 11 October 2022.', url: 'https://www.gov.uk/guidance/get-help-to-increase-participation-in-advanced-maths' },
      { claim: 'Department for Education, Further mathematics AS and A level content, April 2016: purpose, 50 per cent core in sections A to I, AS alongside AS maths.', url: 'https://assets.publishing.service.gov.uk/media/5a8185ebe5274a2e8ab54725/GCE_AS_and_A_level_subject_content_for_further_mathematics_with_appendices.pdf' },
      { claim: 'AQA A-level Further Mathematics (7367) specification, Version 1.1: private candidates and previous learning.', url: 'https://cdn.sanity.io/files/p28bar15/green/b278377bc36beb9b2e64aea1b373db2605751a15.pdf' },
      { claim: 'Cambridge International AS and A Level Further Mathematics 9231 syllabus for 2026 and 2027: private candidates and recommended prior study.', url: 'https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf' },
      { claim: 'Pearson Edexcel A level Further Mathematics (9FM0) specification, Issue 4: no prior learning requirement, all assessments in one May and June.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-further-mathematics-specification.pdf' }
    ],
    rejectedClaims: [
      'Anything from amsp.org.uk or mei.org.uk (both HTTP 403 to curl on 31 October 2026, not retried): the AMSP\'s current tuition format, cost, eligibility details and who delivers it are not stated.',
      'Who holds the current AMSP contract: the GOV.UK page mentions a new contract in July 2022 without naming the holder on the lines read, and the Contracts Finder notice returned 403; not stated.',
      'Funding figures and gender statistics from the GOV.UK press release of 6 May 2025: excluded under the brief (no currency figures, no gender statistics).',
      'How many schools do not offer Further Maths: no primary statistic read; not claimed.',
      'University entry requirements for Further Maths: vary by course; the page tells families to check each university.',
      'Any promise that a school or centre will enter a student, or any grade promise: both declined; we do not enter students.'
    ]
  }
};
