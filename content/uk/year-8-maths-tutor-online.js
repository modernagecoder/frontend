'use strict';
// Year 8 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK014).
// Sources, read raw on 31 October 2026 with curl (gov.uk content API and assets.publishing.service.gov.uk PDFs;
// PDF text through pypdf; raw copies in keyword-research-2026-09/uk-us-gap/src/year-8-maths-tutor-online/):
//  - Government response to the Curriculum and Assessment Review (November 2025): "We will expect all schools to
//    assess pupil progress in writing and maths in Year 8 and will support them to select the right products to do
//    this."; "a new expectation for schools to assess pupil progress in maths in Year 8 using a range of high-quality
//    tools, to ensure that any gaps in understanding are addressed in good time before key stage 4"; "introduce a new
//    statutory reading test for all children to be taken in Year 8"; revised curriculum published by spring 2027, first
//    teaching from September 2028; GCSEs updated "for first teaching from 2029 onwards". No start year is given for the
//    Year 8 maths expectation in the text we read.
//  - Curriculum and Assessment Review Final Report (November 2025): recommendation "Introduces a diagnostic test in
//    Maths, to be taken in Year 8, with the aim of supporting teachers to identify and deal with any weakness before
//    students progress to Key Stage 4."; "this assessment should take place in Year 8, partway through Key Stage 3";
//    "If shown to be effective, we would recommend it becomes mandatory, but that it is not included in published
//    school-level data"; "so that students begin GCSE courses in Year 10 with secure foundations"; "Analysis of past
//    GCSE Maths scripts indicates that students who do not have a basic understanding to reason multiplicatively or
//    proportionally rarely achieve grade 4 at GCSE."; proportional and algebraic reasoning, "the bulk of which we think
//    should be introduced in Key Stage 3".
//  - DfE, Mathematics programmes of study: key stage 3 (DFE-00179-2013): "use algebraic methods to solve linear
//    equations in one variable (including all forms that require rearrangement)"; "reduce a given linear equation in
//    two variables to the standard form y = mx + c; calculate and interpret gradients and intercepts"; "solve problems
//    involving direct and inverse proportion, including graphical and algebraic representations"; "understand and use
//    the relationship between parallel lines and alternate and corresponding angles"; "understand that the
//    probabilities of all possible outcomes sum to 1"; "use compound units such as speed, unit pricing and density".
// Our own: the cohort timeline (a Year 8 student in 2026 to 2027 starts GCSE courses in September 2028, the same month
// the revised national curriculum is first taught; our reading of the dates), four worked examples, the practice set.
// Spine: Year 8 is the middle of Key Stage 3, the year the government now expects schools to check maths progress,
// and the year proportional and algebraic reasoning carry most weight. Lesson family: a secondary year door, distinct
// from the Year 7 door (transition), the Year 9 door (end of KS3) and the KS3 door.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 8 MATHS', blurb: 'Mid Key Stage 3: equations, straight-line graphs, proportion and angle reasoning, and the new Year 8 progress check.' },
  slug: 'year-8-maths-tutor-online',
  code: 'gag',
  accent: '#184F71',
  accentRationale: 'Year 8 maths: a deep harbour navy (#184F71, 8.27:1 on #FBF8F2), clearly bluer than the Year 7 plum',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 8 maths tutor online',
  title: 'Year 8 Maths Tutor Online | KS3 Algebra, Proportion, Live',
  description: 'Year 8 maths tutor online: the middle of Key Stage 3, the new expectation that schools check maths progress in Year 8, worked examples and live classes in UK time.',
  ogDescription: 'Year 8 is the middle of Key Stage 3 and the year the government now expects schools to check maths progress. What that means and how to prepare.',
  twitterDescription: 'Year 8 maths from the DfE KS3 programme and the 2025 Curriculum and Assessment Review, with worked examples and live classes.',
  pageName: 'Year 8 Maths Tutor Online',
  webPageDescription: 'Live online maths tutoring for Year 8 students in England, built from the DfE key stage 3 programme of study and the Curriculum and Assessment Review with the government\'s response.',
  courseDescription: 'Live online maths for Year 8: linear equations, straight-line graphs, ratio and proportion, percentages, compound units, angles with parallel lines, area and volume, and probability.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 8 maths tutor',
  navLinks: [
    { href: '#check', label: 'The Year 8 check' },
    { href: '#reasoning', label: 'Proportion and algebra' },
    { href: '#timeline', label: 'Year 8 to GCSE' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 8 maths &middot; ages 12 to 13',
  h1: 'Year 8 maths tutor online',
  lede: 'Year 8 used to be the quiet middle of secondary school: no national test, no options yet, and GCSE still two years off. That is changing. After the Curriculum and Assessment Review reported in November 2025, the government said it will expect every school to assess pupils\' progress in maths in Year 8, so that gaps are found while there is still time before GCSE. The maths itself is also at its most important here. Year 8 is where equations get two sides, graphs get gradients, and proportion becomes the tool behind half of what follows. This page explains the new Year 8 expectation, the Key Stage 3 content most schools reach this year, and how we tutor it.',
  secondaryCta: { href: '#check', label: 'The Year 8 maths check' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a Year 8 maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE KS3 programme and the 2025 review',
  spec: [
    ['Year group', 'Year 8, ages 12 to 13'],
    ['Stage', 'Middle of Key Stage 3'],
    ['New expectation', 'Schools assess maths progress'],
    ['Key ideas', 'Equations, graphs, proportion'],
    ['GCSE courses begin', 'Year 10'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 8 maths is the middle year of Key Stage 3 in England, for students aged 12 to 13, taught from the DfE key stage 3 programme of study in an order each school sets. In its November 2025 response to the Curriculum and Assessment Review, the government said it will expect all schools to assess pupil progress in maths in Year 8, so gaps are closed before Key Stage 4. Most Year 8 schemes cover linear equations, straight-line graphs, ratio and proportion, and angle reasoning. Modern Age Coders tutors Year 8 maths live online, 1-on-1 or in a group of 15 to 20, through its Middle School Maths course. The first class is free; we are independent of every school.',

  picks: {
    eyebrow: 'Courses for Year 8',
    h2: 'Three courses for a Year 8 student',
    lede: 'The first follows a typical Year 8 scheme. The second is for algebra that has not clicked yet. The third suits a secure student who wants to see where Key Stage 3 leads.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'Y8 / 01', title: 'Middle School Maths', note: 'Key Stage 3 number, algebra, geometry and data, taught in the order your child\'s school uses.' },
      { course: 'algebra-foundations-masterclass', code: 'Y8 / 02', title: 'Algebra Foundations', note: 'Equations, brackets and graphs rebuilt from the ground for a Year 8 who is guessing.' },
      { course: 'gcse-mathematics-mastery', code: 'Y8 / 03', title: 'GCSE Maths Mastery', note: 'For a confident Year 8: the GCSE versions of Key Stage 3 ideas, met early and without exam pressure.' }
    ]
  },

  sections: [
    {
      id: 'check', tint: 'tint', eyebrow: 'The Year 8 check',
      h2: 'Is there a maths test in Year 8?',
      lede: 'Not a national one, but the government now expects every school to assess maths progress in Year 8. The Curriculum and Assessment Review recommended a diagnostic maths test in Year 8, and the government\'s response chose an expectation on schools, supported by a choice of high-quality tools.',
      body: [
        { kind: 'p', html: 'The response, published in November 2025, says: "We will expect all schools to assess pupil progress in writing and maths in Year 8 and will support them to select the right products to do this." In its section on maths it describes "a new expectation for schools to assess pupil progress in maths in Year 8 using a range of high-quality tools, to ensure that any gaps in understanding are addressed in good time before key stage 4". For reading the plan is firmer: a new statutory reading test in Year 8. For maths, the school chooses the assessment.' },
        { kind: 'table', mt: true, caption: 'Year 8 maths assessment: what the Review proposed and what the government decided (both November 2025; the side-by-side layout is ours)', head: ['Question', 'The Review recommended', 'The government responded'], rows: [
          ['What kind of assessment?', 'A diagnostic test in maths, to be taken in Year 8', 'An expectation that schools assess maths progress in Year 8'],
          ['Why Year 8?', '"partway through Key Stage 3", leaving time to act before Key Stage 4', 'So gaps are addressed "in good time before key stage 4"'],
          ['Who designs it?', 'Designed and trialled, then mandatory if shown effective', 'Schools draw on a range of high-quality tools'],
          ['Are results published?', 'Not included in published school-level data', 'No school league table is described for maths'],
          ['Starting when?', 'After trials', 'No start year given in the response we read']
        ] },
        { kind: 'p', html: 'The Review explained its thinking plainly. The assessment should be in Year 8 to give schools time to plan support, and "This should also help to ensure that Year 9 focuses intensively on closing gaps in knowledge and skills, alongside teaching new content, so that students begin GCSE courses in Year 10 with secure foundations." It also proposed that the test, "If shown to be effective", would become mandatory "but that it is not included in published school-level data", so the pressure falls on finding gaps, not on scores.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">government response to the Curriculum and Assessment Review</a> and the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Review\'s final report</a>, November 2025, read on 31 October 2026.' }
      ]
    },
    {
      id: 'reasoning', tint: 'deep', eyebrow: 'Proportion and algebra',
      h2: 'What should a Year 8 student be able to do in maths?',
      lede: 'There is no official Year 8 list, because Key Stage 3 is one programme for Years 7 to 9. But the Review is clear about what matters most in this stage: multiplicative, proportional and algebraic reasoning.',
      body: [
        { kind: 'p', html: 'The Review gives a sharp reason to care: "Analysis of past GCSE Maths scripts indicates that students who do not have a basic understanding to reason multiplicatively or proportionally rarely achieve grade 4 at GCSE." It also says that proportional and algebraic reasoning are ideas "the bulk of which we think should be introduced in Key Stage 3". For most students, that means Year 8.' },
        { kind: 'table', mt: true, caption: 'Key Stage 3 statements most Year 8 schemes reach (quoted or shortened from the DfE programme of study; the selection for Year 8 is our observation)', head: ['Area', 'Statement from the programme'], rows: [
          ['Equations', 'Solve linear equations in one variable "including all forms that require rearrangement"'],
          ['Graphs', 'Reduce a linear equation to y = mx + c; calculate and interpret gradients and intercepts'],
          ['Proportion', '"solve problems involving direct and inverse proportion, including graphical and algebraic representations"'],
          ['Rates', 'Compound units such as speed, unit pricing and density'],
          ['Angles', 'The relationship between parallel lines and alternate and corresponding angles'],
          ['Probability', 'The probabilities of all possible outcomes sum to 1; sample spaces for single events'],
          ['Measures', 'Area of circles and composite shapes; volume of prisms, including cylinders']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where Year 8 students slip',
          left: [
            '<strong>Unknowns on both sides.</strong> 5x − 7 = 2x + 11 is the first equation that cannot be done by guessing, and it shows quickly whether a student understands balancing.',
            '<strong>Proportion done by adding.</strong> If 3 tins cost the same each, 6 tins cost double; students who add 3 instead of multiplying by 2 are reasoning additively where the problem is multiplicative.'
          ],
          rightH3: 'What fixes it',
          right: [
            '<strong>Do the same to both sides, and say it.</strong> Writing the operation beside each line turns a trick into a method.',
            '<strong>Ask what stays fixed.</strong> In direct proportion the ratio stays fixed; in inverse proportion the product does. One question sorts most proportion problems.'
          ] },
        { kind: 'source', html: 'Statements from the DfE <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">key stage 3 mathematics programme of study</a>; quotations from the Curriculum and Assessment Review final report.' }
      ]
    },
    {
      id: 'timeline', tint: '', eyebrow: 'Year 8 to GCSE',
      h2: 'How far is Year 8 from GCSE maths?',
      lede: 'Two school years. A student in Year 8 during 2026 to 2027 begins GCSE courses in September 2028, the same month the revised national curriculum is first taught. The dates come from the government\'s response; the mapping to this year group is ours.',
      body: [
        { kind: 'table', caption: 'A Year 8 student in 2026 to 2027 (government dates from its November 2025 response; the cohort mapping is ours)', head: ['When', 'Nationally', 'This Year 8 student'], rows: [
          ['2026 to 2027', 'Current 2013 programme of study taught', 'Year 8; school expected to assess maths progress'],
          ['By spring 2027', 'Revised national curriculum published', 'Year 8, nearly finished'],
          ['2027 to 2028', 'Current programme still in place', 'Year 9, the last year of Key Stage 3'],
          ['September 2028', 'Revised curriculum first taught', 'Starts Year 10 and GCSE courses'],
          ['From 2029', 'Updated GCSEs begin first teaching in phases', 'Already part way through GCSE']
        ] },
        { kind: 'p', html: 'On those dates, this Year 8 group should finish Key Stage 3 under the current programme. Which GCSE specification they sit is for their school and the exam boards to confirm nearer the time; we do not guess. What is certain is that the Key Stage 3 ideas on this page are the foundations GCSE builds on, under any specification.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the middle year matters',
          left: [
            'The Review lists the problems of Key Stage 3 as "limited progress by students", poor continuity from primary school, and a lower priority than GCSE years.',
            'A Year 8 student who keeps steady progress avoids all three. The Year 8 check is designed to show exactly that.'
          ],
          rightH3: 'Looking further on',
          right: [
            'Our <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths tuition page</a> covers the stage as a whole, and our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths tuition page</a> covers Years 10 and 11.',
            'Families thinking about exam boards early can read <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">AQA, Edexcel and OCR GCSE maths compared</a>.'
          ] },
        { kind: 'source', html: 'Dates from the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response" rel="noopener" target="_blank">government response</a>; the Key Stage 3 challenges from the Review\'s secondary assessment chapter.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Year 8 problems we wrote, worked in full',
      lede: 'Each uses Key Stage 3 content that Year 8 schemes commonly cover. The questions are ours and come from no test or textbook.',
      body: [
        { kind: 'two',
          leftH3: '1. Unknowns on both sides',
          left: [
            '<strong>Question (ours).</strong> Solve 5x − 7 = 2x + 11.',
            '<strong>Gather the x terms.</strong> Subtract 2x from both sides: 3x − 7 = 11.',
            '<strong>Gather the numbers.</strong> Add 7 to both sides: 3x = 18, so x = 6.',
            '<strong>Check.</strong> Left side 5 × 6 − 7 = 23; right side 2 × 6 + 11 = 23. Both sides agree, so the solution is right.'
          ],
          rightH3: '2. The equation of a line',
          right: [
            '<strong>Question (ours).</strong> A straight line passes through (1, 5) and (4, 14). Find its equation.',
            '<strong>Gradient.</strong> y rises by 14 − 5 = 9 while x rises by 4 − 1 = 3, so the gradient is 9 ÷ 3 = 3.',
            '<strong>Intercept.</strong> In y = 3x + c, put in (1, 5): 5 = 3 + c, so c = 2.',
            '<strong>Answer.</strong> y = 3x + 2. Check the other point: 3 × 4 + 2 = 14, as it should be.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Inverse proportion',
          left: [
            '<strong>Question (ours).</strong> Six volunteers can clear a garden in 10 days. How long would 4 volunteers take, working at the same rate?',
            '<strong>Find what stays fixed.</strong> The total work is 6 × 10 = 60 volunteer-days.',
            '<strong>Share it out.</strong> 60 ÷ 4 = 15 days.',
            '<strong>Sense check.</strong> Fewer people should take longer, and 15 is more than 10. A student who answered 6 and two thirds days has used direct proportion by mistake.'
          ],
          rightH3: '4. Why a triangle has 180 degrees',
          right: [
            '<strong>Question (ours).</strong> Use parallel lines to show that the angles in any triangle add up to 180°.',
            '<strong>Draw a parallel.</strong> Through the top corner, draw a line parallel to the base.',
            '<strong>Use alternate angles.</strong> The two base angles each equal an angle at the top corner, because alternate angles between parallel lines are equal.',
            '<strong>Conclude.</strong> The three angles at the top now sit on a straight line, which is 180°. This is reasoning, not measuring, and it is the kind of argument Key Stage 3 asks students to begin.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) Solve 3(x + 4) = 27. (2) Share 84 in the ratio 3 : 4. (3) State the gradient and y-intercept of y = −2x + 7. (4) A spinner lands on red with probability 0.35 and on blue with probability 0.4; it can only land on red, blue or green. Find the probability of green. (5) A cyclist travels 2.5 km in 10 minutes; find the speed in km per hour. (6) The area of a circle with radius 5 cm, in terms of π. (7) Expand (x + 3)(x + 5). <strong>Answers:</strong> (1) x = 5; (2) 36 and 48; (3) gradient −2, intercept 7; (4) 0.25; (5) 15 km per hour; (6) 25π square centimetres; (7) x² + 8x + 15.' }
      ]
    },
    {
      id: 'tutoring', tint: '', eyebrow: 'Our tutoring',
      h2: 'How does a Year 8 maths tutor keep a student on track?',
      lede: 'By checking Key Stage 3 foundations early, giving algebra and proportion the time they need, and following the school\'s own order. The plan below is ours and is adjusted after the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first class.</strong> The tutor sets a two-sided equation, a proportion problem and a fraction calculation, and asks which topics the class is on.',
          '<strong>A short audit of Year 7.</strong> Negative numbers, notation and fractions checked, since Year 8 algebra stands on them.',
          '<strong>Equations and graphs together.</strong> Every equation is also a line, so we move between the algebra and the picture.',
          '<strong>Proportion every week.</strong> Recipes, maps, speeds and best buys described in words rather than prices, so the reasoning is multiplicative from the start.',
          '<strong>Reasoning in geometry.</strong> Angle facts used to prove results, not just to find missing numbers.',
          '<strong>Ready for the school\'s check.</strong> Whatever assessment your child\'s school chooses, a student secure in these ideas has nothing to cram.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 in Year 8?',
          left: [
            'A group of 15 to 20 Year 8 students suits a student who is keeping up and enjoys working through problems with others.',
            '1-on-1 suits a student who has fallen behind since Year 7, is anxious about maths, or wants harder problems than school sets.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A result in the school\'s Year 8 assessment, a set change or a future GCSE grade.',
            'Any connection with your child\'s school, the DfE or an exam board. Families are our only clients.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four markers through Year 8',
    lede: 'We look for each one in an ordinary class task. They are our own markers, not the school\'s assessment.',
    table: { caption: 'Year 8 markers (ours, set against the KS3 programme of study)', head: ['Marker', 'Usually by', 'What the student can do'], rows: [
      ['1. Year 7 secure', 'October half term', 'Negative numbers, notation and fraction arithmetic without hesitation'],
      ['2. Two-sided equations', 'Christmas', 'Solves and checks equations with unknowns on both sides and with brackets'],
      ['3. Lines and gradients', 'Spring term', 'Finds and interprets y = mx + c from two points or a graph'],
      ['4. Proportional thinking', 'Summer term', 'Tells direct from inverse proportion and uses ratio and compound units correctly']
    ] },
    left: { h3: 'Marker one first', ps: [
      'Most Year 8 struggles are unfinished Year 7 work. We fix that before adding more.',
      'Strong students may enjoy our <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">Junior Mathematical Olympiad page</a>.'
    ] },
    right: { h3: 'Marker four is the big one', ps: [
      'The Review links proportional reasoning directly to later GCSE success.',
      'Classes can pause during school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for twelve and thirteen year olds',
    lede: 'Key Stage 3 maths, a look ahead to GCSE, and stretch or coding for students who want more.',
    bands: [
      { num: 'I', h3: 'Year 8 maths', sub: 'The core', courses: [
        { code: 'UK / Y81 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Maths', blurb: 'The Key Stage 3 core.' },
        { code: 'UK / Y81 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and graphs rebuilt.' },
        { code: 'UK / Y81 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Chance and data in depth.' }
      ] },
      { num: 'II', h3: 'Looking ahead', sub: 'Towards GCSE', courses: [
        { code: 'UK / Y82 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths Mastery', blurb: 'GCSE ideas met early.' },
        { code: 'UK / Y82 / 02', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Non-routine problems.' },
        { code: 'UK / Y82 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and deep problems.' }
      ] },
      { num: 'III', h3: 'Maths in code', sub: 'Make it run', courses: [
        { code: 'UK / Y83 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Graphs and sequences in Python.' },
        { code: 'UK / Y83 / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast mental checking.' },
        { code: 'UK / Y83 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Angles and coordinates in games.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Year 8 lessons run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our tutors live and work in India; the class times we offer are all in UK time.',
    slots: [
      { time: 'After school', l: 'While the day\'s lesson is fresh.' },
      { time: 'Evening', l: 'Fits round sport and homework.' },
      { time: 'Weekend morning', l: 'Time for longer problems.' }
    ],
    cells: [
      { h3: 'Follow the school', p: 'Topics in the order your child meets them in class.' },
      { h3: 'Algebra with pictures', p: 'Equations drawn as lines, lines read as equations.' },
      { h3: 'Proportion weekly', p: 'Multiplicative reasoning practised in every lesson.' },
      { h3: 'Proof, gently', p: 'Angle facts used to explain, not just to find.' },
      { h3: 'First lesson free', p: 'A whole Year 8 class before you pay anything.' },
      { h3: 'Pick a format', p: 'A Year 8 group of 15 to 20, or one tutor for one student.' }
    ]
  },

  projectsH2: 'Student projects from our lessons',
  projectsLede: 'Made in ordinary classes and never graded. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, shown unedited.',

  fees: {
    h2: 'Year 8 maths tutoring fees',
    lede: 'The first class is on us. Then a monthly fee applies, cheaper for a group and dearer for 1-on-1, starting only when you have agreed a course and a regular weekly slot. Cancel whenever you need to.',
    free: ['A live Year 8 class', 'Equations and proportion checked', 'Needs only a phone number'],
    group: ['15 to 20 Year 8 students', 'A steady tutor all year', 'Work in school topic order', 'A note home every term'],
    one: ['One tutor for one student', 'Year 7 gaps closed first', 'Stretch for strong students']
  },

  faq: {
    eyebrow: 'Year 8 questions',
    h2: 'What parents ask about Year 8 maths',
    items: [
      { q: 'What maths do students learn in Year 8?', a: 'Each school sets its own order within the Key Stage 3 programme, but most Year 8 schemes cover equations with unknowns on both sides, straight-line graphs, ratio and proportion, compound units, angles with parallel lines, circle area and prism volume, and probability.' },
      { q: 'Is there a Year 8 maths test?', a: 'There is no national maths test in Year 8. In November 2025 the government said it will expect all schools to assess pupil progress in maths in Year 8, using tools the school chooses.' },
      { q: 'When does the Year 8 maths assessment start?', a: 'The government response we read gives no start year for the Year 8 maths expectation. Ask your child\'s school how it assesses Year 8 maths now.' },
      { q: 'Will Year 8 maths results be published?', a: 'The Review recommended that a Year 8 diagnostic test should not be included in published school-level data. Its purpose is to find gaps, not to rank schools.' },
      { q: 'Why does Year 8 maths matter if GCSE is in Year 10?', a: 'Because GCSE builds on it. The Review found that students without basic multiplicative or proportional reasoning rarely achieve grade 4 at GCSE, and that reasoning is mostly developed in Key Stage 3.' },
      { q: 'My child finds algebra hard in Year 8. What helps?', a: 'Check Year 7 basics first, especially negative numbers and notation, then solve equations by doing the same to both sides and saying each step aloud. Checking the answer by substituting back builds confidence quickly.' },
      { q: 'Will the new national curriculum affect my Year 8 child?', a: 'The government plans first teaching of a revised curriculum from September 2028. A student in Year 8 during 2026 to 2027 should finish Key Stage 3 on the current programme and start Year 10 that month.' },
      { q: 'Can a strong Year 8 student start GCSE content?', a: 'They can, but depth usually helps more than speed. We prefer harder problems on Key Stage 3 ideas, with a look at the GCSE versions, over racing through new topics.' },
      { q: 'When are Year 8 classes available?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every slot is in UK time.' },
      { q: 'Are you part of my child\'s school or an exam board?', a: 'No. Modern Age Coders is independent and works for families directly. We have no tie to any school, the DfE or any exam board.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More secondary maths',
    h2: 'Related pages for Year 8 families',
    lede: 'The stage, the next exam and some stretch.',
    items: [
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition', p: 'Years 7 to 9 together.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Years 10 and 11.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'GCSE boards compared', p: 'AQA, Edexcel and OCR side by side.' },
      { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges', p: 'Junior and Intermediate challenges.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options', p: 'GCSE choices coming next year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub.' }
    ]
  },

  start: {
    h2: 'Book a free Year 8 maths class',
    lede: 'Give us a number and we will phone at a UK time that suits you. The tutor works through an equation, a proportion problem and a little geometry with your child, and suggests a first target.',
    readFirst: 'Like to read first? The <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Maths course</a> sets out its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes what a lesson is like.',
    note: 'For the quickest reply, WhatsApp us; it is free from a UK phone. Our team answers from India, on a +91 number.',
    formNote: 'No payment and no sign-up. One reply, with a time to talk.'
  },

  footer: {
    cols: [
      { h4: 'Secondary maths', links: [
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'GCSE boards' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Olympiad' }
      ] },
      { h4: 'More for teens', links: [
        { href: '/ks3-computing-tuition-online', label: 'KS3 computing' },
        { href: '/online-maths-tuition-for-teens-in-uk', label: 'Teen maths tuition' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 8 maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-gag .ag-hero h1 { letter-spacing: -0.02em; font-weight: 710; }
.ag-root.ag-gag .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-gag .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gag .ag-table caption { text-align: left; font-weight: 610; font-style: italic; }
.ag-root.ag-gag .ag-table th:first-child { width: 23%; }
.ag-root.ag-gag .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'England, key stage 3 mathematics programme of study (DFE-00179-2013), one programme for Years 7 to 9: linear equations including all forms that require rearrangement; y = mx + c with gradients and intercepts; direct and inverse proportion; compound units; parallel lines with alternate and corresponding angles; probabilities summing to 1. Government response to the Curriculum and Assessment Review (November 2025): schools expected to assess pupil progress in maths in Year 8 using high-quality tools; statutory Year 8 reading test; revised curriculum published by spring 2027 and first taught from September 2028; GCSE updates from 2029; no start year given for the Year 8 maths expectation. Review final report: Year 8 diagnostic maths test recommended, partway through KS3, mandatory if effective, not in published school-level data; Year 9 to close gaps so GCSE begins in Year 10 on secure foundations; GCSE scripts and grade 4; proportional and algebraic reasoning mostly in KS3; KS3 challenges.',
    localProject: 'The middle year, now with a check. A Year 8 door built on the government\'s Year 8 maths expectation: its two quoted sentences, a table comparing the Review\'s recommendation with the government\'s decision, and the Review\'s reasoning about Year 9 and Year 10. A section on proportional and algebraic reasoning (the GCSE scripts finding) with a seven-row table of KS3 statements most Year 8 schemes reach, and a cohort timeline to GCSE and the September 2028 curriculum. Four original worked examples (5x minus 7 = 2x + 11, the line through (1, 5) and (4, 14), six volunteers in 10 days, the triangle angle sum by alternate angles) and an original seven-item practice set. Lesson family: a secondary year door.',
    requiredMentions: [
      'We will expect all schools to assess pupil progress in writing and maths in Year 8 and will support them to select the right products to do this.',
      'a new expectation for schools to assess pupil progress in maths in Year 8 using a range of high-quality tools',
      'partway through Key Stage 3',
      'but that it is not included in published school-level data',
      'so that students begin GCSE courses in Year 10 with secure foundations',
      'Analysis of past GCSE Maths scripts indicates that students who do not have a basic understanding to reason multiplicatively or proportionally rarely achieve grade 4 at GCSE.',
      'the bulk of which we think should be introduced in Key Stage 3',
      'including all forms that require rearrangement',
      'solve problems involving direct and inverse proportion, including graphical and algebraic representations'
    ],
    sources: [
      { claim: 'Government response to the Curriculum and Assessment Review (November 2025): Year 8 maths progress expectation, Year 8 reading test, curriculum and GCSE timetable.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report-government-response' },
      { claim: 'Curriculum and Assessment Review Final Report (November 2025): Year 8 diagnostic test recommendation and rationale, GCSE scripts finding, KS3 reasoning and challenges.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'DfE, Mathematics programmes of study: key stage 3: equations, graphs, proportion, compound units, angles, probability.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' }
    ],
    rejectedClaims: [
      'A start date for the Year 8 maths expectation: none found in the response, so none given.',
      'Which GCSE specification this cohort will sit: depends on exam boards and schools; not guessed.',
      'An official Year 8 topic list: KS3 is one programme; the Year 8 selection is labelled as our observation.',
      'Prior-attainment GCSE percentages from the Review: not used, to keep the page focused on what families can act on.',
      'Any promise of an assessment result, a set or a GCSE grade: declined.'
    ]
  }
};
