'use strict';
// Cambridge IGCSE Mathematics 0580 help (ag- exam door, UK and US exams cluster, row UK026).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/cambridge-igcse-maths-0580-help/):
//  - Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, version 3 (May 2024), /Images/662466-2025-2027-syllabus.pdf.
//    Verbatim: "Candidates who have studied the Core subject content, or who are expected to achieve a grade D or below,
//    should be entered for Paper 1 and Paper 3. These candidates will be eligible for grades C to G."; Extended "expected
//    to achieve a grade C or above, should be entered for Paper 2 and Paper 4. These candidates will be eligible for
//    grades A* to E."; "Calculators are not allowed for Paper 1 and Paper 2."; Paper 1 and Paper 3 "1 hour 30 minutes,
//    80 marks"; Paper 2 and Paper 4 "2 hours, 100 marks"; each "weighted at 50% of the total qualification"; nine topics
//    (Number; Algebra and graphs; Coordinate geometry; Geometry; Mensuration; Trigonometry; Transformations and vectors;
//    Probability; Statistics); "Candidates should give non-exact numerical answers correct to 3 significant figures, or
//    1 decimal place for angles in degrees"; "To earn accuracy marks, candidates should avoid rounding figures until they
//    have their final answer."; "Candidates should use the value of π from their calculator or the value of 3.142.";
//    "Algebraic or graphical calculators are not permitted."; "Candidates cannot bring their own tracing paper but may
//    request it during the examination."; AO1 60 to 70 / AO2 30 to 40 (Core), AO1 40 to 50 / AO2 50 to 60 (Extended);
//    "about 130 guided learning hours"; "June and November exam series" and March in India; "Private candidates can
//    enter for this syllabus."; combining exceptions 0980, 0607, 4024; "Candidates can retake the whole qualification as
//    many times as they want to."; command words (Show (that) "provide structured evidence that leads to a given result";
//    Write down "give an answer without significant working"; Determine "establish with certainty"); version 1 changes:
//    Core lost "adding and subtracting vectors", "multiplying a vector by a scalar", "data collection"; Core gained
//    "inequalities" and "recall of certain squares, cubes and roots"; "Ungraded" not reported on the certificate.
//  - Syllabus update 2025 to 2027 (/Images/709706-2025-2027-syllabus-update.pdf): version 2 clarified "prism", reciprocal
//    and exponential graphs in E2.11, the term "random".
//  - 0580 syllabus for 2028, 2029 and 2030 (/Images/745681-2028-2030-syllabus.pdf): "There are no significant changes
//    which affect teaching."; same tier and eligibility wording. Update note: "version 2, published August 2026".
// Our own material, labelled on the page: the rounding-trap worked example (AC = 8.98721..., semicircle area 63.4 unrounded
// against 63.5 from a rounded AC), the non-calculator index and surd example, and a six-question practice set, every
// answer checked in Python on 31 October 2026. No Cambridge question, past paper or mark scheme is reproduced.
// Spine: the tier and the calculator ban are both decided before the exam. Core caps at C, Extended floors at E, and
// half of every candidate's marks are earned without a calculator. Lesson family: accuracy discipline, keeping the
// unrounded value alive until the last line.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'IGCSE 0580', blurb: 'Core caps at grade C and Extended stops at E, and half of every 0580 candidate\'s marks come from a paper with no calculator.' },
  slug: 'cambridge-igcse-maths-0580-help',
  code: 'ci',
  accent: '#683F65',
  accentRationale: 'Cambridge IGCSE 0580: a dusky plum #683F65 from the cluster allocation, 7.96:1 on #FBF8F2 and 6.85:1 on the deepest paper tint, warmer than the teal and ochre of the Edexcel International GCSE pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Cambridge IGCSE Maths 0580 help',
  title: 'Cambridge IGCSE Maths 0580 Help: Papers, Tiers, Accuracy',
  description: 'Cambridge IGCSE Maths 0580 help: four papers, two tiers, a non-calculator paper for everyone and the 3 significant figure rule. Live online classes, 1-on-1 or group.',
  ogDescription: 'Cambridge IGCSE Mathematics 0580 explained from the 2025 to 2027 syllabus: Core and Extended papers, grade ranges, the calculator ban and the accuracy rules.',
  twitterDescription: 'IGCSE Maths 0580: Paper 1 to Paper 4, which grades each tier allows, and how not to lose accuracy marks.',
  pageName: 'Cambridge IGCSE Maths 0580 Help',
  webPageDescription: 'Live online teaching for Cambridge IGCSE Mathematics 0580 candidates at Core and Extended tier, written from the 2025 to 2027 syllabus.',
  courseDescription: 'Live online classes for Cambridge IGCSE Mathematics 0580: Core and Extended content, non-calculator fluency for Papers 1 and 2, and accuracy discipline for Papers 3 and 4.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IGCSE Maths 0580',
  navLinks: [
    { href: '#papers', label: 'The four papers' },
    { href: '#tier', label: 'Core or Extended' },
    { href: '#accuracy', label: 'Accuracy rules' },
    { href: '#example', label: 'Worked example' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cambridge International &middot; IGCSE 0580 &middot; Years 10 and 11',
  h1: 'Cambridge IGCSE Maths 0580 help',
  lede: 'Cambridge IGCSE Mathematics, syllabus code 0580, is sat by pupils in UK independent schools, by home-educated teenagers entering as private candidates and by international schools across six administrative zones. Every candidate sits two papers, and one of the two is taken with no calculator at all. Which pair a pupil sits, Core or Extended, sets the grades on offer before anything is written. This page sets out the four papers from the syllabus for 2025, 2026 and 2027, the accuracy rules that quietly cost marks, and how we teach 0580 live online.',
  secondaryCta: { href: '#papers', label: 'The four papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Cambridge IGCSE Maths 0580.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with Cambridge University Press &amp; Assessment',
  spec: [
    ['Qualification', 'Cambridge IGCSE Mathematics 0580'],
    ['Syllabus in use', 'For exams in 2025, 2026 and 2027'],
    ['Core papers', 'Paper 1 and Paper 3, grades C to G'],
    ['Extended papers', 'Paper 2 and Paper 4, grades A* to E'],
    ['No calculator', 'Paper 1 and Paper 2'],
    ['Exam series', 'June and November'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Cambridge IGCSE Mathematics 0580 is a two-paper qualification from Cambridge International. Core candidates sit Paper 1 (no calculator) and Paper 3 (calculator), each 1 hour 30 minutes and 80 marks, and can be awarded grades C to G. Extended candidates sit Paper 2 (no calculator) and Paper 4 (calculator), each 2 hours and 100 marks, and can be awarded A* to E. Each paper is half the qualification. Modern Age Coders teaches 0580 live online through our IGCSE Mathematics course, in a group of 15 to 20 or 1-on-1, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that carry a 0580 candidate',
    lede: 'Our IGCSE course is the main road. The other two sit either side of it: one rebuilds the base, one takes over after the June exams.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'CI / 01', title: 'IGCSE Mathematics', note: 'Core and Extended 0580 content, with non-calculator practice built into every week.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CI / 02', title: 'Lower Secondary Maths', note: 'For a Year 9 pupil whose fractions, negatives or algebra are not yet steady enough for Paper 2.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CI / 03', title: 'A Level Maths', note: 'The next step after a strong Extended result, for pupils who want maths in the sixth form.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The four papers',
      h2: 'How is Cambridge IGCSE Maths 0580 structured?',
      lede: 'Four papers exist, and every candidate sits exactly two of them: a non-calculator paper and a calculator paper at the same tier.',
      body: [
        { kind: 'p', html: 'The 0580 syllabus for 2025, 2026 and 2027 says it plainly: "All candidates take two components." A Core candidate sits Paper 1 and Paper 3; an Extended candidate sits Paper 2 and Paper 4. The two papers at each tier are equal in length and in weight, so the non-calculator paper is worth exactly as much as the calculator one. Every paper mixes structured questions, split into parts such as (a) and (b)(i), with unstructured questions that leave the method to the candidate.' },
        { kind: 'table', caption: 'Cambridge IGCSE Mathematics 0580: the four components', head: ['Paper', 'Tier', 'Calculator', 'Time', 'Marks', 'Weight'], rows: [
          ['Paper 1', 'Core', 'Not allowed', '1 hour 30 minutes', '80', '50 per cent'],
          ['Paper 2', 'Extended', 'Not allowed', '2 hours', '100', '50 per cent'],
          ['Paper 3', 'Core', 'Scientific calculator required', '1 hour 30 minutes', '80', '50 per cent'],
          ['Paper 4', 'Extended', 'Scientific calculator required', '2 hours', '100', '50 per cent']
        ] },
        { kind: 'source', html: 'Source: Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, version 3, sections 2 and 4, from the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/" rel="noopener" target="_blank">Cambridge International 0580 page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Nine topics, one content list',
          left: [
            'The syllabus lists nine topics for every candidate: number; algebra and graphs; coordinate geometry; geometry; mensuration; trigonometry; transformations and vectors; probability; and statistics. Extended content contains all of Core plus further material, so an Extended candidate is examined on the whole of the Core list as well.',
            'Cambridge states the content "is not presented in a teaching order", which leaves a school or a tutor to sequence it. Questions may also draw on more than one topic at once.'
          ],
          rightH3: 'What goes into the exam room',
          right: [
            'For both tiers the syllabus asks for a pair of compasses, a protractor and a ruler. Tracing paper is allowed on all four papers, but candidates "cannot bring their own tracing paper but may request it during the examination."',
            'For Papers 3 and 4 a scientific calculator is needed, and one with trigonometric functions is strongly recommended. Algebraic or graphical calculators are not permitted on any paper.'
          ] }
      ]
    },
    {
      id: 'tier', tint: 'deep', eyebrow: 'Core or Extended',
      h2: 'Should my child sit Core or Extended 0580?',
      lede: 'Cambridge ties the choice to the grade a pupil is expected to reach, and each tier has a ceiling or a floor.',
      body: [
        { kind: 'p', html: 'The entry rule is written into the syllabus. Candidates "who are expected to achieve a grade D or below" should sit Core, Papers 1 and 3, and "will be eligible for grades C to G." Candidates expected to achieve a grade C or above should sit Extended, Papers 2 and 4, and "will be eligible for grades A* to E." The two ranges overlap only at C, D and E, which is where most entry arguments happen.' },
        { kind: 'table', mt: true, caption: 'What each tier allows, from the 0580 syllabus', head: ['', 'Core (Papers 1 and 3)', 'Extended (Papers 2 and 4)'], rows: [
          ['Intended for', 'Learners targeting grades C to G', 'Learners targeting grades A* to C'],
          ['Grades available', 'C, D, E, F, G', 'A*, A, B, C, D, E'],
          ['Highest possible grade', 'C', 'A*'],
          ['Below the range', 'Ungraded, shown on the statement of results only', 'Ungraded, shown on the statement of results only'],
          ['Knowledge and understanding (AO1)', '60 to 70 per cent', '40 to 50 per cent'],
          ['Analyse, interpret and communicate (AO2)', '30 to 40 per cent', '50 to 60 per cent']
        ] },
        { kind: 'p', mt: true, html: 'The last two rows are easy to skip and they matter. On Core papers most marks reward recalling and carrying out a technique. On Extended papers more than half of the marks reward analysing a problem, choosing a strategy and communicating it, so an Extended pupil who can do every method in isolation can still struggle when the question does not say which method to use.' },
        { kind: 'two', mt: true,
          leftH3: 'When Core is the honest entry',
          left: [
            'A pupil who is not yet secure on algebraic manipulation, and whose mock marks sit well below the Extended range, can do better on Core: a secure C is worth more than an Extended paper that ends below E and leaves the pupil ungraded.',
            'A Core entry closes the door to A* to B in that series. Cambridge allows retakes of the whole qualification "as many times as they want to", so a later Extended entry remains possible.'
          ],
          rightH3: 'When Extended is worth the stretch',
          right: [
            'Any pupil thinking about A level maths, sciences or a numerate sixth-form course needs grades that only Extended can give. Cambridge itself says candidates aiming for grades A* to C should study the Extended content.',
            'The real question is whether the pupil can handle unstructured problems without a calculator. Our first class tests exactly that, with problems we wrote, before any family conversation with a school.'
          ] }
      ]
    },
    {
      id: 'accuracy', tint: '', eyebrow: 'The accuracy rules',
      h2: 'How many significant figures does IGCSE 0580 want?',
      lede: 'Three, unless the question says otherwise, and the rounding has to wait until the very end.',
      body: [
        { kind: 'p', html: 'For Papers 3 and 4 the syllabus gives one standing instruction: "Candidates should give non-exact numerical answers correct to 3 significant figures, or 1 decimal place for angles in degrees, unless a different level of accuracy is specified in the question." It then adds the sentence that decides accuracy marks: "To earn accuracy marks, candidates should avoid rounding figures until they have their final answer." Where a rounded answer is used again later in the question, the syllabus asks candidates to use the value before it was rounded.' },
        { kind: 'table', mt: true, caption: 'Standing rules for 0580 answers, from section 4 of the syllabus', head: ['Rule', 'What the syllabus says', 'What it means in practice'], rows: [
          ['Default accuracy', '3 significant figures for non-exact answers', '8.987 becomes 8.99; 0.0045218 becomes 0.00452'],
          ['Angles', '1 decimal place for angles in degrees', '34.574&deg; becomes 34.6&deg;'],
          ['Rounding', 'Avoid rounding until the final answer', 'Keep the full calculator value, or store it in memory'],
          ['Reused answers', 'Use the value before it was rounded', 'Part (b) starts from the unrounded part (a) answer'],
          ['Pi', 'The value from the calculator or 3.142', 'Not 3.14, which can shift the third figure'],
          ['Working', 'Show all necessary working in the spaces provided', 'A bare answer risks every method mark']
        ] },
        { kind: 'p', mt: true, html: 'Paper 1 and Paper 2 exclude the calculator topic itself, which the syllabus numbers C1.14 and E1.14. Everything else, including estimation, standard form, surds at Extended and the recall of "certain squares, cubes and roots" that version 1 of the syllabus added to Core, can be examined without a calculator. That is why we treat the two halves of 0580 as two different skills and practise them separately.' },
        { kind: 'table', mt: true, caption: 'Command words that change what an answer must contain, from the 0580 command word list', head: ['Command word', 'Cambridge\'s meaning', 'How we teach it'], rows: [
          ['Show (that)', '"provide structured evidence that leads to a given result"', 'The answer is given; the marks are for every step that reaches it'],
          ['Write down', '"give an answer without significant working"', 'A signal that the answer should be quick, so stop and look for the shortcut'],
          ['Determine', '"establish with certainty"', 'A reason or calculation is expected, not a guess from a diagram'],
          ['Explain', 'set out purposes or reasons, supported with relevant evidence', 'A sentence with a mathematical reason, not a restated answer'],
          ['Sketch', '"make a simple freehand drawing showing the key features"', 'Intercepts and turning points labelled; no plotting needed']
        ] },
        { kind: 'source', html: 'Source: 0580 syllabus for 2025, 2026 and 2027, "Details of the assessment" and "Command words". The worked example below is ours.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked example, ours',
      h2: 'What does an early rounding error actually cost?',
      lede: 'A two-part problem we wrote at Extended calculator level, solved twice: once with the rounding rule, once without it.',
      body: [
        { kind: 'p', html: '<strong>Our problem.</strong> Triangle ABC has a right angle at B, with AB = 7.4 cm and BC = 5.1 cm. (a) Calculate AC. (b) A semicircle is drawn with AC as its diameter. Calculate the area of the semicircle.' },
        { kind: 'ol', mt: true, items: [
          'Part (a), by Pythagoras: AC<sup>2</sup> = 7.4<sup>2</sup> + 5.1<sup>2</sup> = 54.76 + 26.01 = 80.77, so AC = 8.987213... cm. The answer line takes 8.99 cm, correct to 3 significant figures.',
          'Part (b), the careful way: the radius is AC &divide; 2, so the semicircle\'s area is &pi; &times; (AC &divide; 2)<sup>2</sup> &divide; 2. Since AC<sup>2</sup> is exactly 80.77, this equals &pi; &times; 80.77 &divide; 8 = 31.718... cm<sup>2</sup>, which is 31.7 cm<sup>2</sup>.',
          'Part (b), the careless way: starting from the rounded 8.99 gives &pi; &times; 4.495<sup>2</sup> &divide; 2 = 31.737... cm<sup>2</sup>, which also rounds to 31.7. Here the slip happens to survive.',
          'Now change one instruction: ask for the area of the full circle on diameter AC. Unrounded, &pi; &times; 80.77 &divide; 4 = 63.4366..., so 63.4 cm<sup>2</sup>. From the rounded 8.99, &pi; &times; 4.495<sup>2</sup> = 63.4759..., so 63.5 cm<sup>2</sup>. The third figure has moved, and the accuracy mark goes with it.',
          'The habit that prevents it: keep AC<sup>2</sup> = 80.77 or the full calculator value in memory, write the rounded 8.99 on the answer line for part (a), and never type 8.99 back in.'
        ] },
        { kind: 'p', mt: true, html: 'The lesson is not that rounding always loses marks. It is that the loss is unpredictable, which makes it impossible to check for in the exam room. A pupil who always carries the stored value never has to wonder. We drill it until reaching for the memory key is automatic, because the syllabus rule is the same on every calculator paper.' }
      ]
    },
    {
      id: 'nocalc', tint: 'deep', eyebrow: 'Without a calculator',
      h2: 'How do you prepare for the 0580 non-calculator paper?',
      lede: 'By treating it as its own subject: exact values, index laws and surds done by hand, quickly, with a check at the end.',
      body: [
        { kind: 'p', html: '<strong>Our second example, Extended non-calculator level.</strong> (a) Work out 8<sup>2/3</sup> &times; 16<sup>&minus;1/4</sup>. (b) Simplify (&radic;45 + &radic;20) &divide; &radic;5.' },
        { kind: 'two', mt: true,
          leftH3: 'Part (a), index laws',
          left: [
            'A fractional power is a root followed by a power. 8<sup>1/3</sup> = 2, so 8<sup>2/3</sup> = 2<sup>2</sup> = 4. A negative power is a reciprocal: 16<sup>1/4</sup> = 2, so 16<sup>&minus;1/4</sup> = 1/2.',
            'The product is 4 &times; 1/2 = 2. The check: both numbers are powers of 2, so the whole expression is 2<sup>2</sup> &times; 2<sup>&minus;1</sup> = 2<sup>1</sup>.'
          ],
          rightH3: 'Part (b), surds',
          right: [
            'Split each root around a square factor: &radic;45 = &radic;9 &times; &radic;5 = 3&radic;5, and &radic;20 = &radic;4 &times; &radic;5 = 2&radic;5. Together they make 5&radic;5.',
            'Dividing by &radic;5 leaves 5. An integer answer from a surd expression is a common sign that the working is right.'
          ] },
        { kind: 'table', mt: true, caption: 'Six practice questions, written by us at 0580 level (answers checked in Python)', head: ['#', 'Our question', 'Paper type', 'Answer'], rows: [
          ['1', 'Work out 2&frac14; &divide; 3/8.', 'Non-calculator, Core', '6'],
          ['2', 'Work out (6 &times; 10<sup>5</sup>) &times; (4 &times; 10<sup>&minus;2</sup>), giving the answer in standard form.', 'Non-calculator, Core', '2.4 &times; 10<sup>4</sup>'],
          ['3', 'Solve the inequality 3x &minus; 7 &lt; 11 + x.', 'Non-calculator, Core', 'x &lt; 9'],
          ['4', 'A colony of 250 birds grows by 4 per cent each year. How many birds are there after 3 years, to the nearest whole bird?', 'Calculator, Core', '281'],
          ['5', 'Find the acute angle x when sin x = 0.62.', 'Calculator, Core', '38.3&deg;'],
          ['6', 'Rationalise the denominator of 6 &divide; &radic;3.', 'Non-calculator, Extended', '2&radic;3']
        ] },
        { kind: 'p', mt: true, html: 'Question 3 is there on purpose. Inequalities were added to the Core content when the syllabus was revised for first examination in 2025, along with the recall of certain squares, cubes and roots. Some textbooks written for the earlier syllabus do not cover them at Core, so a Core pupil using an older book can meet them for the first time in the exam.' },
        { kind: 'source', html: 'Both examples and all six questions are ours, written for this page on 31 October 2026. They are practice at the level of the syllabus, not Cambridge questions. Specimen papers and the full syllabus are on the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/" rel="noopener" target="_blank">Cambridge 0580 page</a>; schools hold past papers through Cambridge\'s School Support Hub.' }
      ]
    },
    {
      id: 'entries', tint: '', eyebrow: 'Entries and series',
      h2: 'When can 0580 be sat, and what has changed?',
      lede: 'Two series a year in the UK, a syllabus that runs to 2027, and a successor for 2028 to 2030 that changes nothing teachers need to reteach.',
      body: [
        { kind: 'table', caption: 'Practical facts for families, from the 0580 syllabus documents', head: ['Question', 'Answer from Cambridge'], rows: [
          ['Exam series', 'June and November; schools in India can also enter candidates in March'],
          ['Timetable', 'Each of six administrative zones has its own timetable, published on the Cambridge site'],
          ['Private candidates', '"Private candidates can enter for this syllabus."'],
          ['Cannot combine in one series with', 'Cambridge IGCSE (9 to 1) Mathematics 0980, IGCSE International Mathematics 0607, O Level Mathematics 4024'],
          ['Retakes', 'The whole qualification can be retaken as many times as a candidate wants'],
          ['Teaching time', 'Designed around 130 guided learning hours, for guidance only'],
          ['Syllabus for 2028, 2029 and 2030', '"There are no significant changes which affect teaching."']
        ] },
        { kind: 'p', mt: true, html: 'The 0980 exclusion catches some UK families out. 0980 is the version of the same content graded 9 to 1, used by schools that want numbered grades; it cannot be sat alongside 0580 in the same series. A pupil switching schools in Year 10 should check which code the new school enters before relying on any past papers.' },
        { kind: 'two', mt: true,
          leftH3: 'Version changes inside 2025 to 2027',
          left: [
            'Version 2, published February 2024, clarified the term prism, the expectations for reciprocal and exponential graphs in E2.11, and the word random in probability. Version 3 adjusted text alignment only.',
            'None of these changes the papers. The syllabus still tells families to "Check you are using the syllabus for the year the candidate is taking the exam."'
          ],
          rightH3: 'What the 2025 revision removed from Core',
          right: [
            'Adding and subtracting vectors, multiplying a vector by a scalar, and data collection all left the Core content when the syllabus was revised. Cambridge expects data collection to stay part of a course, but it is no longer examined.',
            'A Core pupil can therefore set aside some older Core questions on vector arithmetic. An Extended pupil cannot: vectors remain in Extended content.'
          ] },
        { kind: 'p', mt: true, html: 'Home-educated families entering 0580 as private candidates should read our <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE maths tuition page</a> for the wider choice between boards, and the <a class="ag-inline-link" href="/coding-for-home-educated-children-uk">home-education coding page</a> for the computing side. For pupils weighing 0580 against the English GCSE, <a class="ag-inline-link" href="/gcse-maths-foundation-vs-higher">GCSE Foundation against Higher</a> shows how the other tier system works.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs from Year 9 to the exam series',
    lede: 'Each rung has a test we can run in class. A pupil moves up when the test is passed, not when the calendar says so.',
    table: { caption: 'What a 0580 candidate should be able to do at each stage', head: ['Rung', 'Typical timing', 'What should be true'], rows: [
      ['1. Number by hand', 'Year 9 or early Year 10', 'Fractions, negatives, percentages and standard form done accurately without a calculator'],
      ['2. Algebra as a tool', 'Year 10', 'Rearranging, factorising and solving equations and inequalities without prompts'],
      ['3. Full tier content', 'Late Year 10 into Year 11', 'Every topic of the entered tier taught, including Extended vectors, functions and trigonometry where relevant'],
      ['4. Paper discipline', 'Final two terms', 'Timed papers with the 3 significant figure rule, stored values and every step of working shown']
    ] },
    left: { h3: 'Rung one decides Paper 1 or 2', ps: [
      'Half the qualification is sat without a calculator, so weak hand arithmetic costs marks on every non-calculator question, not just the number ones.',
      'Pupils who enjoy patterns may also like the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>, which uses the same number sense.'
    ] },
    right: { h3: 'Rung four is short but not optional', ps: [
      'A few weeks of disciplined practice protects accuracy marks across both papers.',
      'Lessons ease off in the weeks of the June or November series.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around an IGCSE year',
    lede: 'Grouped by what they do for a 0580 candidate. The free first class tells us where to start.',
    bands: [
      { num: 'I', h3: 'The IGCSE itself', sub: 'Core and Extended', courses: [
        { code: 'UK / CI1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'The 0580 content at either tier, taught in the order a pupil can build on.' },
        { code: 'UK / CI1 / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Fractions, ratio and early algebra rebuilt before IGCSE starts.' },
        { code: 'UK / CI1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Cumulative frequency, histograms and probability trees in more depth.' }
      ] },
      { num: 'II', h3: 'Hand calculation', sub: 'For Papers 1 and 2', courses: [
        { code: 'UK / CI2 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, reliable number facts for younger siblings and late starters.' },
        { code: 'UK / CI2 / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation shortcuts for pupils who like spotting structure.' },
        { code: 'UK / CI2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences, graphs and probability explored in Python.' }
      ] },
      { num: 'III', h3: 'After the IGCSE', sub: 'For confident Extended pupils', courses: [
        { code: 'UK / CI3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics, the usual next step after Extended.' },
        { code: 'UK / CI3 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For pupils who already know maths will be their main subject.' },
        { code: 'UK / CI3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Unstructured problems of the kind that reward Extended reasoning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Two skills, practised separately',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India, which keeps one clock all year, so every class is booked and shown in UK time.',
    slots: [
      { time: 'After school', l: 'The usual choice in Years 10 and 11.' },
      { time: 'Evening', l: 'For pupils with sport or music after school.' },
      { time: 'Weekend morning', l: 'Long enough to sit a full Paper 2 or Paper 4 under time.' }
    ],
    cells: [
      { h3: 'Hand-arithmetic warm-ups', p: 'Ten minutes of fractions, indices and surds by hand at the start of most classes.' },
      { h3: 'Stored values', p: 'Calculator work done with the memory key, so the third figure never drifts.' },
      { h3: 'Command words', p: 'Show, determine and write down read as instructions, with the working they demand.' },
      { h3: 'Tier evidence', p: 'Regular checks on unstructured problems, so the Core or Extended decision rests on evidence.' },
      { h3: 'Syllabus-year check', p: 'Practice matched to the 2025 to 2027 syllabus, not an older content list.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 at one tier, or one teacher for one pupil.' }
    ]
  },

  projectsH2: 'Things our students have built in class',
  projectsLede: 'Ordinary class work, none of it assessed for any exam. Many more pieces are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, unedited.',

  fees: {
    h2: 'Fees for IGCSE 0580 classes',
    lede: 'A single monthly fee, shown in US dollars for families outside India. The first class costs nothing, and billing starts only after a course and a weekly time are agreed.',
    free: ['A first class on 0580 content at the likely tier', 'A plain view of Core against Extended', 'A phone number is all we need to book'],
    group: ['A group of 15 to 20 at one tier', 'One teacher across Years 10 and 11', 'Non-calculator practice every week', 'Lighter weeks during each exam series'],
    one: ['One teacher for one pupil', 'Paced to the pupil\'s own entry and series', 'Suits a pupil moving from Core to Extended']
  },

  faq: {
    eyebrow: 'Questions about 0580',
    h2: 'What families ask about IGCSE Maths 0580',
    items: [
      { q: 'How many papers are there in IGCSE Maths 0580?', a: 'Four papers exist and each candidate sits two. Core candidates take Paper 1 and Paper 3, and Extended candidates take Paper 2 and Paper 4. At each tier one paper bans calculators and the other requires one, and each is half the qualification.' },
      { q: 'Is there a non-calculator paper in IGCSE Maths 0580?', a: 'Yes. The syllabus for 2025, 2026 and 2027 states that calculators are not allowed for Paper 1 and Paper 2. So every candidate, Core or Extended, sits one paper without a calculator.' },
      { q: 'What is the highest grade on Core 0580?', a: 'Grade C. Core candidates are eligible for grades C to G, while Extended candidates are eligible for A* to E. A pupil who needs an A or A* must be entered for Extended.' },
      { q: 'How long are the 0580 papers?', a: 'Paper 1 and Paper 3, the Core papers, are each 1 hour 30 minutes and 80 marks. Paper 2 and Paper 4, the Extended papers, are each 2 hours and 100 marks.' },
      { q: 'How many significant figures should I give in 0580?', a: 'Three significant figures for non-exact answers, or one decimal place for angles in degrees, unless the question asks for something else. Cambridge also says not to round until the final answer, and to use pi from the calculator or 3.142.' },
      { q: 'What is the difference between 0580 and 0980?', a: '0980 is Cambridge IGCSE (9 to 1) Mathematics, graded with numbers instead of letters. The two cannot be taken in the same exam series, so check which code a school enters before choosing past papers.' },
      { q: 'Can a home-educated child sit 0580?', a: 'Yes. The syllabus says private candidates can enter. The family finds an exam centre that accepts private candidates and makes the entry through that centre, which sets its own arrangements.' },
      { q: 'Is IGCSE Maths 0580 hard?', a: 'It depends on the tier and on hand arithmetic. Extended papers put more than half their marks on analysing and communicating, which is harder than recalling methods, and the non-calculator paper exposes weak fractions and indices quickly.' },
      { q: 'When do your 0580 classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is shown in UK time.' },
      { q: 'Are you part of Cambridge International?', a: 'No. Modern Age Coders is an independent teaching company with no connection to Cambridge University Press and Assessment. We teach to the published syllabus and do not reproduce Cambridge papers.' },
      { q: 'Can you guarantee an A* in 0580?', a: 'No, and nobody honestly can. We can teach the full Extended content, train accuracy and non-calculator speed, and tell you plainly how far a pupil is from the grade they want.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for IGCSE families',
    lede: 'Other boards, the next qualification, and computing alongside maths.',
    items: [
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'An overview across Cambridge and Edexcel, for families still choosing.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Where a strong Extended result usually leads.' },
      { href: '/cambridge-igcse-computer-science-tuition', label: 'Cambridge IGCSE Computer Science', p: 'The computing syllabus many 0580 pupils take in the same years.' },
      { href: '/coding-for-home-educated-children-uk', label: 'Coding for home-educated children', p: 'For families teaching at home and entering private candidates.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'Problem solving beyond the syllabus for keen Extended pupils.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page on this site, gathered in one place.' }
    ]
  },

  start: {
    h2: 'Book a free 0580 class',
    lede: 'Leave a number and we will call at a UK time that works for you. The class uses our own 0580-level problems, with and without a calculator, and ends with a view on the tier.',
    readFirst: 'Prefer to look around first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its full syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical class, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows work by our students.',
    note: 'WhatsApp is usually quickest and is free from a UK mobile. Our team in India replies from a number that starts +91.',
    formNote: 'Nothing to pay and nothing to sign; we reply once with a time.'
  },

  footer: {
    cols: [
      { h4: 'IGCSE and GCSE', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-foundation-vs-higher', label: 'GCSE Foundation or Higher' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Beyond IGCSE', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Cambridge IGCSE 0580 maths, taught live on UK time'
  },

  personalityCss: `
.ag-root.ag-ci .ag-hero h1 { letter-spacing: -0.02em; font-weight: 720; }
.ag-root.ag-ci .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ci .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ci .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-ci .ag-table th:first-child { width: 16%; }
.ag-root.ag-ci .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International, Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (version 3, May 2024): two components per candidate; Core Paper 1 non-calculator and Paper 3 calculator, 1 hour 30 minutes and 80 marks each, grades C to G; Extended Paper 2 non-calculator and Paper 4 calculator, 2 hours and 100 marks each, grades A* to E; each paper 50 per cent; 3 significant figures or 1 decimal place for angles; no rounding before the final answer; pi from the calculator or 3.142; June and November series; private candidates can enter; cannot combine with 0980, 0607 or 4024; 2028 to 2030 syllabus has no significant changes which affect teaching.',
    localProject: 'Tier and calculator are both decided before the exam. The page sets out the four 0580 papers, the Core and Extended grade ranges and assessment-objective weights, the standing accuracy rules and five command words, then works our own two-part Pythagoras and circle problem twice to show an early-rounding error moving the third significant figure (63.4 against 63.5), works an index and surd problem by hand, and gives a six-question practice set written by us, plus entry, series and syllabus-change facts for 2025 to 2030.',
    requiredMentions: ['eligible for grades C to G', 'The two ranges overlap only at C, D and E', 'avoid rounding figures until they have their final answer', 'Algebraic or graphical calculators are not permitted', 'may request it during the examination', 'Version 2, published February 2024, clarified the term prism', '63.4366', 'O Level Mathematics 4024', 'Cambridge IGCSE (9 to 1) Mathematics 0980, IGCSE International Mathematics 0607', 'The value from the calculator or 3.142'],
    sources: [
      { claim: 'Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027: papers, timings, marks, weights, tiers, grade eligibility, calculator rules, accuracy rules, command words, entries and changes.', url: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf' },
      { claim: 'Syllabus update for 2025 to 2027: version 2 and version 3 changes.', url: 'https://www.cambridgeinternational.org/Images/709706-2025-2027-syllabus-update.pdf' },
      { claim: 'Cambridge IGCSE Mathematics 0580 syllabus for 2028, 2029 and 2030: unchanged tier rules and no significant changes affecting teaching.', url: 'https://www.cambridgeinternational.org/Images/745681-2028-2030-syllabus.pdf' },
      { claim: 'Cambridge International 0580 qualification page listing the current and next syllabuses.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/' }
    ],
    rejectedClaims: [
      'Grade thresholds, entry numbers or pass rates for any series: not read at a primary source for this build, so not printed.',
      'Exam dates for June or November 2027: timetables are set per administrative zone and were not read; families are pointed to the Cambridge timetable page.',
      'Any Cambridge past paper, specimen question or mark scheme: not reproduced; every example and practice question is ours and labelled so.',
      'Claims that Core or Extended is right for a particular pupil: an entry decision for the school or centre; we give an evidence-based view only.',
      'Exam centre fees for private candidates: set by each centre, not printed.',
      'Any promise of a grade, and any affiliation with Cambridge International: both declined on the page.'
    ]
  }
};
