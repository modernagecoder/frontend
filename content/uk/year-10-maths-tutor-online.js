'use strict';
// Year 10 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK016).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/year-10-maths-tutor-online/ and src/edexcel-gcse-maths-1ma1-help/):
//  - DfE, Mathematics programmes of study: key stage 4, "July 2014". Verbatim: "The expectation is that the majority
//    of pupils will move through the programme of study at broadly the same pace."; "the mathematical content that
//    should be taught to all pupils, in standard type; and"; "additional mathematical content to be taught to more
//    highly attaining pupils, in bold type and braces { }."
//  - DfE, GCSE mathematics: subject content and assessment objectives (gov.uk, 1 November 2013). Verbatim: "All
//    students will be assessed on the content identified by the standard and the underlined type"; "Only the more
//    highly attaining students will be assessed on the content identified by bold type."; AO1 "Use and apply standard
//    techniques" Higher 40%, Foundation 50%; AO2 "Reason, interpret and communicate mathematically" 30%, 25%; AO3
//    "Solve problems within mathematics and in other contexts" 30%, 25%; formula appendix part 2 lists the trapezium,
//    prism volume, compound interest "Total accrued" and P(A or B) as formulae that "should be derived or informally
//    understood".
//  - Ofqual consultation outcome, Proposed changes to the assessment of mathematics, physics and combined science
//    GCSEs (gov.uk content API, updated 5 May 2026). Verbatim: sheets continue "for the remaining lifetime of the
//    current specifications"; "This decision relates to GCSE mathematics, physics and combined science exams being
//    taken from 2028 onwards"; boards must "publish the formulae and equations sheets for exams by 1 September the
//    year before each exam series" and "not set questions that can be answered solely by transferring information
//    from the formulae or equations sheets."; consultation body: DfE "intends that reformed qualifications will be
//    first taught in 2029 or 2030"; proposals "will apply to GCSE exams taken by students up to and including 2030 or
//    2031".
//  - Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, Issue 2, June 2015 (raw copy in
//    src/edexcel-gcse-maths-1ma1-help/). Verbatim: topic weightings Foundation Number "22 - 28%", Algebra "17 - 23%",
//    Ratio "22 - 28%", Geometry and Measures "12 - 18%", Statistics & Probability "12 - 18%"; Higher Number
//    "12 - 18%", Algebra "27 - 33%", Ratio "17 - 23%", Geometry and Measures "17 - 23%", Statistics & Probability
//    "12 - 18%" (restated as "22 to 28%" and so on); "Individual papers are not graded."; "Higher tier: grades 4 to 9
//    (grade 3 allowed)."; "November entries will only be available to students who were at least 16 on the previous
//    31 August, as set out in Ofqual's GCSE subject level conditions".
//  - gov.uk, The national curriculum: Year 10 "14 to 15", "Some children take GCSEs".
// Our own: the statement that a student in Year 10 in 2026 to 2027 normally sits GCSE in summer 2028 (our
// arithmetic from the year table), the mock autopsy by assessment objective, the three worked examples, the practice
// set and the Year 10 term plan are ours.
// Spine: Year 10 is the first GCSE year, and in 2026 to 2027 it is the class of 2028, the first cohort under Ofqual's
// from-2028 formulae decision. The page teaches families to read the content by type (standard, underlined, bold),
// to see how the weighting moves towards algebra at Higher, and to use the Year 10 mocks as a diagnosis by
// assessment objective rather than a grade. Lesson family: a year-group door built on the first year of a course.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 10', blurb: 'The first GCSE year and the class of 2028. Read the content by type, then use the Year 10 mocks as a diagnosis.' },
  slug: 'year-10-maths-tutor-online',
  code: 'gai',
  accent: '#624C66',
  accentRationale: 'Year 10 maths: a dusky heather purple (#624C66, 7.22:1 on #FBF8F2), muted and greyed so it reads as ink rather than the retired bright violet, and clearly apart from the Year 9 fern and the Year 11 teal',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 10 maths tutor online',
  title: 'Year 10 Maths Tutor Online | First GCSE Year and Mocks',
  description: 'Year 10 maths tutor online: the first GCSE year, the class of 2028 and its formulae sheet, how content is split by tier, and how to use the Year 10 mocks well.',
  ogDescription: 'Year 10 starts GCSE Maths. See how the content is split by tier, what the 2028 formulae decision means, and how to turn a Year 10 mock into a plan.',
  twitterDescription: 'Year 10 maths: the first GCSE year, the class of 2028, the tier weightings, and a mock autopsy by assessment objective.',
  pageName: 'Year 10 Maths Tutor Online',
  webPageDescription: 'Live online maths teaching for Year 10 students in England, built on the DfE GCSE subject content, the Pearson tier weightings and Ofqual\'s formulae sheet decisions.',
  courseDescription: 'Live online GCSE Maths classes for Year 10, at Foundation or Higher pace, with the Year 10 mocks used as a diagnosis.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 10 maths',
  navLinks: [
    { href: '#firstyear', label: 'The first GCSE year' },
    { href: '#weights', label: 'Tier weightings' },
    { href: '#mocks', label: 'Year 10 mocks' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Key Stage 4 &middot; Year 10, ages 14 to 15',
  h1: 'Year 10 maths tutor online',
  lede: 'Year 10 is when GCSE Maths stops being a word teachers use and becomes the course. Most students will sit the exams at the end of Year 11, so nothing in Year 10 is final, yet a great deal is decided: which content is taught at what speed, what the school thinks after the first mocks, and whether a student is pointed towards Foundation or Higher. For anyone in Year 10 during 2026 to 2027 there is one more thing to know: they are the class of 2028, the first year group covered by Ofqual\'s decision to keep formulae sheets for the rest of this GCSE\'s life. This page explains how the GCSE content is split, how the weighting moves between tiers, how to read a Year 10 mock, and works three original questions at Year 10 level.',
  secondaryCta: { href: '#mocks', label: 'How to use the mocks' },
  wa: 'Hello Modern Age Coders, I would like a free first maths class for my child in Year 10.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE GCSE content, Pearson\'s tier weightings and Ofqual\'s 2028 decision',
  spec: [
    ['Year group', 'Year 10, ages 14 to 15'],
    ['Key stage', 'Key Stage 4, first year'],
    ['Usual exam', 'GCSE Maths, end of Year 11'],
    ['Class of', '2028, if in Year 10 now'],
    ['Course', 'GCSE Maths: Foundation and Higher'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 10 maths in England is the first year of the two-year GCSE Mathematics course, for students aged 14 to 15, taught from the DfE GCSE subject content at Foundation (grades 1 to 5) or Higher (grades 4 to 9) pace. A student in Year 10 during 2026 to 2027 normally sits GCSE Maths in summer 2028. Modern Age Coders teaches Year 10 maths live online through its GCSE Maths: Foundation and Higher course, as 1-on-1 lessons or in a group of 15 to 20, and treats the Year 10 mocks as a diagnosis. We are not connected with any school, exam board or Ofqual.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a Year 10 student',
    lede: 'The first is the main GCSE course. The second is for a student whose algebra is holding up everything else; the third is for a top-set student with room for more.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'Y10 / 01', title: 'GCSE Maths: Foundation and Higher', note: 'The two-year GCSE taught from its first year, at the pace the student\'s tier needs.' },
      { course: 'algebra-foundations-masterclass', code: 'Y10 / 02', title: 'Algebra Foundations', note: 'Algebra carries the largest share of Higher marks, so a weak base here is worth fixing early.' },
      { course: 'statistics-probability-maths-course', code: 'Y10 / 03', title: 'Statistics and probability', note: 'For a strong student also taking GCSE Statistics, or one who wants the probability strand deepened.' }
    ]
  },

  sections: [
    {
      id: 'firstyear', tint: 'tint', eyebrow: 'The first GCSE year',
      h2: 'What changes in maths when a student starts Year 10?',
      lede: 'The content stops being Key Stage 3 and becomes the GCSE, and from now on it comes in two speeds. The DfE marks those speeds by typeface.',
      body: [
        { kind: 'p', html: 'Year 10 is the start of Key Stage 4. The gov.uk national curriculum guide describes it in four words, "Some children take GCSEs", because a few schools enter some students early, but for most students Year 10 is the first of two years leading to the exams in Year 11. The Key Stage 4 programme of study, dated July 2014, sets the default pace: "The expectation is that the majority of pupils will move through the programme of study at broadly the same pace."' },
        { kind: 'p', html: 'The DfE\'s GCSE subject content is printed in three kinds of type, and those three styles are the clearest way to understand what Year 10 is teaching and to whom.' },
        { kind: 'table', mt: true, caption: 'How the DfE GCSE subject content separates the tiers (quoted from the DfE document; the right-hand column is our plain-English reading)', head: ['Type in the DfE content', 'Who is assessed on it (DfE wording)', 'What it means in a Year 10 classroom'], rows: [
          ['Standard type', '"All students will develop confidence and competence with the content identified by standard type"', 'Taught to everyone, usually first in Year 10'],
          ['Underlined type', '"All students will be assessed on the content identified by the standard and the underlined type"', 'On both tiers; the harder end of Foundation'],
          ['Bold type', '"Only the more highly attaining students will be assessed on the content identified by bold type."', 'Higher tier only, often started in Year 10 by top sets']
        ] },
        { kind: 'p', html: 'Pearson\'s 1MA1 specification applies the same rule in its own words: Foundation students "will not be assessed on content identified by bold type", and Higher students are assessed on all three. The practical consequence for Year 10 is that a class can look as if it is "doing the same topic" while two students in it are being prepared for very different questions. Two students learning quadratics, for example, may be heading for factorising alone on Foundation, or for the quadratic formula and completing the square on Higher.' },
        { kind: 'two', mt: true,
          leftH3: 'The class of 2028',
          left: [
            'Using the gov.uk year table, a student aged 14 to 15 in Year 10 during 2026 to 2027 reaches Year 11 in 2027 to 2028 and normally sits GCSE Maths in summer 2028. That arithmetic is ours.',
            'Ofqual decided in 2026 that, for exams "taken from 2028 onwards", boards must keep providing formulae sheets "for the remaining lifetime of the current specifications".'
          ],
          rightH3: 'What the sheet does not do',
          right: [
            'Ofqual requires each sheet to be published "by 1 September the year before each exam series", so the 2028 sheet is due by 1 September 2027, at the start of Year 11.',
            'Boards must also "not set questions that can be answered solely by transferring information from the formulae or equations sheets." A sheet on the desk helps only a student who can tell which of its lines a question is asking for.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics: subject content and assessment objectives</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">DfE, Mathematics programmes of study: key stage 4</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses" rel="noopener" target="_blank">Ofqual, decisions on formulae sheets from 2028</a>. All read on 31 October 2026.' }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'Tier weightings',
      h2: 'How is GCSE Maths weighted at Foundation and at Higher?',
      lede: 'Very differently. Pearson publishes topic weightings for each tier of 1MA1, and they show the centre of gravity moving from number to algebra as the tier rises.',
      body: [
        { kind: 'table', caption: 'Pearson Edexcel GCSE Mathematics 1MA1: topic area weightings by tier, from the specification (Issue 2, June 2015)', head: ['Topic area', 'Foundation tier', 'Higher tier'], rows: [
          ['Number', '22 to 28%', '12 to 18%'],
          ['Algebra', '17 to 23%', '27 to 33%'],
          ['Ratio, proportion and rates of change', '22 to 28%', '17 to 23%'],
          ['Geometry and measures', '12 to 18%', '17 to 23%'],
          ['Statistics and probability', '12 to 18%', '12 to 18%']
        ] },
        { kind: 'p', html: 'Two rows explain most Year 10 tier conversations. On Foundation, number is weighted at 22 to 28% and algebra at 17 to 23%. On Higher, those almost swap: number falls to 12 to 18% and algebra rises to 27 to 33%, the largest single share on either tier. A Year 10 student who is strong at arithmetic but uneasy with algebra will therefore feel much more comfortable on Foundation papers than on Higher ones, whatever their overall percentage in a test. The other boards in England do not all publish weightings in this form, but they teach the same DfE content.' },
        { kind: 'table', mt: true, caption: 'The three assessment objectives and their weights, from the DfE GCSE subject content', head: ['Assessment objective', 'What it asks', 'Higher', 'Foundation'], rows: [
          ['AO1 Use and apply standard techniques', 'Recall facts, use notation, carry out routine procedures', '40%', '50%'],
          ['AO2 Reason, interpret and communicate mathematically', 'Chains of reasoning, arguments and proofs, interpreting information', '30%', '25%'],
          ['AO3 Solve problems within mathematics and in other contexts', 'Turn a problem into mathematical steps and interpret the result', '30%', '25%']
        ] },
        { kind: 'p', html: 'The assessment objectives matter in Year 10 because they explain why a student can know every method and still lose marks. At Higher, routine technique (AO1) is only 40% of the marks; reasoning (AO2) and problem solving (AO3) are 30% each. At Foundation, technique is 50%, so a Foundation student who knows the methods well can bank half the paper, but the other half still rewards explanation and unfamiliar problems. Pearson\'s specification adds that "Individual papers are not graded": the grade comes from the total across all three papers.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html" rel="noopener" target="_blank">Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification</a> and the DfE GCSE subject content, both read on 31 October 2026. Our explanation of what the weightings mean for a Year 10 student is ours.' }
      ]
    },
    {
      id: 'mocks', tint: '', eyebrow: 'Year 10 mocks',
      h2: 'How much do Year 10 maths mocks matter?',
      lede: 'They do not count towards the GCSE at all. They matter because schools use them to set groups and to start the tier conversation, and because they are the first full-length evidence of where marks go.',
      body: [
        { kind: 'p', html: 'Mocks are a school practice, not a board requirement, so their timing and format vary. Most English schools run some form of end-of-Year-10 exam, often using past GCSE papers or papers built from them. The result is not a GCSE grade, even when it is reported as one, because a grade depends on grade boundaries set for a real series and on the whole course having been taught. A Year 10 student sitting a full past paper has usually covered only part of the content.' },
        { kind: 'p', html: 'What a mock can do, very well, is show where marks are lost. We use a method we call the mock autopsy, built around the three assessment objectives in the DfE table above.' },
        { kind: 'ol', items: [
          '<strong>Collect the marked paper.</strong> Ask the school for the script, or at least the question-by-question marks. A single percentage is almost useless.',
          '<strong>Remove the untaught questions.</strong> Cross out any question on content the class has not reached yet. What remains is a fair test of Year 10 so far.',
          '<strong>Sort every lost mark by objective.</strong> AO1 if the method was not known or went wrong; AO2 if the answer lacked a reason, a conclusion or a clear chain; AO3 if the student could not see how to start an unfamiliar problem.',
          '<strong>Count the three piles.</strong> The biggest pile decides the next term. A large AO1 pile is a content gap; a large AO2 pile is a writing habit; a large AO3 pile is a problem-solving skill.',
          '<strong>Pick three topics and one habit.</strong> Never more. Three content topics from the AO1 pile, and one habit from the other two.',
          '<strong>Retest in six weeks.</strong> A short paper on the same three topics and the same habit, marked the same way.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the piles usually say',
          left: [
            'A Foundation-leaning student\'s autopsy is often dominated by AO1: fractions, percentages, ratio. That is good news, because AO1 gaps respond fastest to teaching.',
            'A Higher-leaning student\'s autopsy is often dominated by AO2 and AO3, which take longer: writing a full argument, or spotting that a geometry question is really an algebra question.'
          ],
          rightH3: 'November is not an option yet',
          right: [
            'A Year 10 student cannot fix a poor mock by sitting GCSE Maths in November. Pearson\'s specification says "November entries will only be available to students who were at least 16 on the previous 31 August", as Ofqual\'s rules require.',
            'For almost every Year 10 student, the only GCSE series ahead is the summer of Year 11.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three Year 10 questions of ours, solved in full',
      lede: 'These are original questions at the level most Year 10 classes reach. Each one is labelled with the assessment objective it leans on, so the mock autopsy has something to practise on.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, compound decrease (AO1)',
          left: [
            '<strong>Question (ours).</strong> A laptop loses 18% of its value each year. It is worth 950 units now. What is it worth after 3 years, to the nearest unit?',
            '<strong>Think first.</strong> Losing 18% leaves 82%, so each year multiplies the value by 0.82. Three years means three multiplications, not 3 × 18% = 54% off.',
            '<strong>Working.</strong> 950 × 0.82³ = 950 × 0.551368 = 523.7996, so about 524 units.',
            '<strong>Check.</strong> The simple-interest mistake gives 950 × 0.46 = 437, which is too low: each year\'s 18% is taken from a smaller amount, so less is lost. The DfE lists this formula among those that "should be derived or informally understood".'
          ],
          rightH3: 'Example 2, simultaneous equations in context (AO3)',
          right: [
            '<strong>Question (ours).</strong> Four pens and three rulers cost 27 tokens. Two pens and five rulers cost 24 tokens. Find the cost of one pen.',
            '<strong>Set up.</strong> Let p be a pen and r a ruler: 4p + 3r = 27 and 2p + 5r = 24. Writing the two equations is the AO3 step; many students stop before it.',
            '<strong>Working.</strong> Double the second: 4p + 10r = 48. Subtract the first: 7r = 21, so r = 3. Then 2p + 15 = 24, so p = 4.5.',
            '<strong>Check in both.</strong> 4(4.5) + 3(3) = 18 + 9 = 27, and 2(4.5) + 5(3) = 9 + 15 = 24. A pen costs 4.5 tokens.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, a Venn diagram argument (AO2)',
          left: [
            '<strong>Question (ours).</strong> In a year group, 60% of students study French, 45% study Spanish and 20% study both. Sam says the probability that a student studies French or Spanish is 1.05. Explain why Sam is wrong and find the correct value.',
            '<strong>Reason.</strong> A probability cannot exceed 1, so 1.05 is impossible. Sam has added 60% and 45%, counting the 20% who study both twice.',
            '<strong>Working.</strong> P(F or S) = P(F) + P(S) &minus; P(F and S) = 0.60 + 0.45 &minus; 0.20 = 0.85.',
            '<strong>Conclusion.</strong> The probability is 0.85. The explanation, not the number, earns the AO2 marks: it names the double counting.'
          ],
          rightH3: 'Why the labels matter',
          right: [
            'Example 1 is pure technique once the multiplier is seen. Example 2 is mainly about turning words into equations. Example 3 is about saying why something is wrong.',
            'Practising all three kinds in Year 10, not only the first, is the most useful single change a student can make before the Year 11 papers, because AO2 and AO3 are each weighted at 25% or more on both tiers.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) A population of 12 000 grows by 3% a year; what is it after 4 years, to the nearest whole number? (2) Solve 3x + 2y = 16 and x &minus; y = 2. (3) Expand and simplify (2x + 3)(x &minus; 4). (4) Factorise x² + 7x + 12. (5) In a class, P(plays football) = 0.5, P(plays tennis) = 0.3 and P(both) = 0.1; find P(football or tennis). (6) A trapezium has parallel sides 7 cm and 11 cm and height 4 cm; find its area. <strong>Answers:</strong> (1) 13 506; (2) x = 4, y = 2; (3) 2x² &minus; 5x &minus; 12; (4) (x + 3)(x + 4); (5) 0.7; (6) 36 cm².' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A Year 10 plan',
      h2: 'How should a Year 10 student plan the year in maths?',
      lede: 'Our outline for Year 10 in 2026 to 2027, written around the way most schools run the year. We have assumed a weekly live lesson plus a couple of brief home sessions between lessons.',
      body: [
        { kind: 'ol', items: [
          '<strong>September to October: find the floor.</strong> A short check of the Key Stage 3 algebra and number that Year 10 builds on. Any shaky line is taught before the first Year 10 topic test.',
          '<strong>November to December: algebra early.</strong> Because algebra is the heaviest Higher area and a large Foundation one, we put expressions, equations and graphs first.',
          '<strong>January to February: the first full paper.</strong> One past paper, on content covered so far, run as a practice for the mock autopsy.',
          '<strong>March to April: reasoning practice.</strong> A weekly AO2 question: explain, prove or criticise a claim, with the reason written out.',
          '<strong>May to June: the Year 10 mock.</strong> Revise from the autopsy piles, sit the school mock, and collect the marked script.',
          '<strong>July: the autopsy and the summer list.</strong> Sort the lost marks, choose three topics and one habit, and plan the summer around them.',
          '<strong>September 2027: Year 11 begins.</strong> The 2028 formulae sheet is due from the boards by 1 September 2027; use it in practice from the first week.'
        ] },
        { kind: 'p', mt: true, html: 'The plan is ours and is a starting shape, not a promise of any grade. A student entering Year 10 well behind needs more weeks on the floor; a top-set student may move to bold-type content by Christmas. The autopsy keeps the plan honest, because it is built from that student\'s own marks. For more on how the tier decision is made, see our page on <a class="ag-inline-link" href="/gcse-maths-foundation-vs-higher">Foundation or Higher</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Year 10',
    lede: 'Rungs are checked on real papers, not on how a topic felt in class.',
    table: { caption: 'What should be true at each point of Year 10', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Floor secure', 'October', 'Key Stage 3 equations, fractions and percentages done without errors'],
      ['2. Algebra moving', 'December', 'Expanding, factorising and solving linear and simple quadratic equations'],
      ['3. Reasons written', 'Spring term', 'An AO2 answer finished with a clear concluding sentence every week'],
      ['4. Autopsy done', 'After the summer mock', 'Lost marks sorted by objective, with three topics and one habit chosen']
    ] },
    left: { h3: 'Why algebra comes first', ps: [
      'Pearson weights algebra at 27 to 33% of Higher. Putting it early gives it two years to settle instead of one.',
      'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths tuition page</a> covers the course as a whole.'
    ] },
    right: { h3: 'Why the autopsy comes last', ps: [
      'A summer mock is the first full test of a year\'s learning. The autopsy turns it into the summer\'s plan.',
      'Parents receive a short monthly note on progress.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Year 10 maths',
    lede: 'Arranged by what Year 10 students usually need: the GCSE, the strands inside it, and what lies beyond it.',
    bands: [
      { num: 'I', h3: 'The GCSE course', sub: 'Years 10 and 11', courses: [
        { code: 'UK / Y10A / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Both tiers, starting from the first Year 10 topic.' },
        { code: 'UK / Y10A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'The heaviest Higher area, built from the ground up.' },
        { code: 'UK / Y10A / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'For a Year 10 who arrived without secure fractions or negatives.' }
      ] },
      { num: 'II', h3: 'Strands inside GCSE', sub: 'Depth on one area', courses: [
        { code: 'UK / Y10B / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Venn diagrams, tree diagrams and data handling taken further.' },
        { code: 'UK / Y10B / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Iteration, sequences and growth modelled in short programs.' },
        { code: 'UK / Y10B / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Faster arithmetic for the non-calculator paper.' }
      ] },
      { num: 'III', h3: 'Beyond the GCSE', sub: 'For top sets', courses: [
        { code: 'UK / Y10C / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving well past the specification.' },
        { code: 'UK / Y10C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Where a strong Higher route leads after Year 11.' },
        { code: 'UK / Y10C / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Useful alongside GCSE Computer Science.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live Year 10 maths, timetabled in UK time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are based in India, and every lesson is set in UK time.',
    slots: [
      { time: 'After school', l: 'The most common Year 10 slot.' },
      { time: 'Evenings', l: 'Around sport, music and homework.' },
      { time: 'Weekend mornings', l: 'Long enough for a full practice paper.' }
    ],
    cells: [
      { h3: 'Tier-aware teaching', p: 'Standard, underlined and bold content taught in the order the student\'s likely tier needs.' },
      { h3: 'Algebra early', p: 'The heaviest Higher area started first, so it has two years to settle.' },
      { h3: 'Autopsy after mocks', p: 'Every lost mark sorted by assessment objective into a short plan.' },
      { h3: 'A reasoning question weekly', p: 'One AO2 question every class, finished with a written conclusion.' },
      { h3: 'First lesson free', p: 'A live class before any payment, to see the method and agree a start.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20 Year 10 students, or lessons for one.' }
    ]
  },

  projectsH2: 'Work from students in our classes',
  projectsLede: 'Pieces made in everyday lessons; none of it is assessed. The full set is in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'Fees for Year 10 maths classes',
    lede: 'The first class costs nothing. From then on there is one monthly fee, with a group seat priced below 1-on-1 lessons; no contract is signed and no payment is taken before a regular time is set.',
    free: ['A live Year 10 class', 'A first look at where marks go', 'Booked with a phone number only'],
    group: ['15 to 20 Year 10 students', 'One teacher across the year', 'An AO2 question every week', 'A mock autopsy after each mock'],
    one: ['Lessons for one student', 'Planned from that student\'s own papers', 'Suits a student far behind or far ahead']
  },

  faq: {
    eyebrow: 'Questions about Year 10 maths',
    h2: 'What parents ask about Year 10 maths',
    items: [
      { q: 'Is Year 10 the start of GCSE Maths?', a: 'Yes, for most students. Year 10 is the first year of Key Stage 4 and of the two-year GCSE course, with the exams at the end of Year 11. Some schools begin GCSE topics in Year 9, but Year 10 is when the full course runs.' },
      { q: 'When will a Year 10 student sit GCSE Maths?', a: 'Normally in the summer of Year 11. A student in Year 10 during 2026 to 2027 will usually sit the papers in summer 2028; the boards have not yet published 2028 dates, so check with the school later in Year 11.' },
      { q: 'Do Year 10 mocks count towards the GCSE?', a: 'No. Mocks are set by the school and do not form part of the GCSE grade, which comes only from the final papers. Schools often use them to set groups and to begin the tier conversation, so they still deserve proper preparation.' },
      { q: 'What is the difference between Foundation and Higher in Year 10?', a: 'Foundation leads to grades 1 to 5 and Higher to grades 4 to 9, and Higher adds the content the DfE prints in bold. Pearson\'s weightings also differ: number is 22 to 28% of Foundation but algebra is 27 to 33% of Higher.' },
      { q: 'Will there be a formulae sheet in my child\'s GCSE Maths exam?', a: 'For students sitting GCSE Maths in 2028 or later, yes. Ofqual decided in 2026 that boards must keep providing formulae sheets for the remaining lifetime of the current specifications, published by 1 September the year before each series.' },
      { q: 'Can a Year 10 student sit GCSE Maths in November?', a: 'Almost never. Pearson\'s specification, following Ofqual\'s rules, limits November entries to students who were at least 16 on the previous 31 August, which rules out nearly all Year 10 students.' },
      { q: 'What are AO1, AO2 and AO3?', a: 'They are the DfE\'s assessment objectives. AO1 is standard techniques, AO2 is reasoning and communication, and AO3 is problem solving; at Higher they carry 40%, 30% and 30% of the marks, and at Foundation 50%, 25% and 25%.' },
      { q: 'My child got a low grade in a Year 10 mock. Should we worry?', a: 'Look at the script before the grade. A Year 10 mock often includes content not yet taught, and grade labels on mocks are estimates. Sort the lost marks into technique, reasoning and problem solving, then work on the largest group.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in UK time.' },
      { q: 'Are you linked to any exam board?', a: 'No. Modern Age Coders is independent of AQA, Pearson Edexcel, OCR, Ofqual and every school. We teach to the published GCSE content and do not promise a tier or a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for the GCSE years',
    lede: 'The tier question, the grades, and the papers ahead in Year 11.',
    items: [
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher', p: 'Who decides the tier, and when.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades', p: 'What 4, 5, 7 and 9 actually mean.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Two kinds of paper, two kinds of practice.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'The three English boards', p: 'Side by side, where they differ and where they do not.' },
      { href: '/ks3-maths-tuition-online', label: 'Key Stage 3 maths', p: 'For gaps that go back before Year 10.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK hub', p: 'Every UK maths and computing page.' }
    ]
  },

  start: {
    h2: 'Book a free Year 10 maths class',
    lede: 'Send your number and a teacher rings back at a UK time you pick. Bring a recent test or mock if there is one; the class starts sorting its lost marks.',
    readFirst: 'Rather read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> lists the topics in order, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson from start to finish.',
    note: 'WhatsApp is the quickest route to us and is free from a UK number. Replies come from our team in India, on a +91 number.',
    formNote: 'No card needed and no commitment. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'The GCSE years', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher' },
        { href: '/gcse-maths-grades-explained', label: 'Grades explained' },
        { href: '/gcse-maths-resit-explained', label: 'Resits' }
      ] },
      { h4: 'Alongside Year 10', links: [
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR Computer Science J277' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 10 maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-gai .ag-hero h1 { letter-spacing: -0.018em; font-weight: 720; }
.ag-root.ag-gai .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-gai .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-gai .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-gai .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-gai .ag-steps li { margin-bottom: 11px; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE. Mathematics programmes of study: key stage 4 (July 2014): majority at broadly the same pace; standard type for all, bold and braces for more highly attaining pupils. GCSE mathematics subject content (November 2013): standard, underlined and bold type; AO1 40% Higher, 50% Foundation; AO2 30%, 25%; AO3 30%, 25%; formulae to be derived or informally understood (trapezium, prism, compound interest, P(A or B)). Ofqual, decisions on formulae sheets from 2028 (updated 5 May 2026): sheets for the remaining lifetime of the current specifications; published by 1 September the year before each series; no questions answerable solely by transferring from the sheet; reformed qualifications first taught 2029 or 2030. Pearson Edexcel 1MA1 Issue 2: topic weightings by tier; individual papers not graded; Higher grades 4 to 9 with grade 3 allowed; November entry only at 16 or over on the previous 31 August. gov.uk national curriculum: Year 10 ages 14 to 15, some children take GCSEs.',
    localProject: 'Year 10 is the first GCSE year, and in 2026 to 2027 it is the class of 2028 (our arithmetic), the first cohort under Ofqual\'s from-2028 formulae sheet decision. The page explains the DfE content by type (standard, underlined, bold), quotes Pearson\'s 1MA1 topic weightings to show algebra rising to 27 to 33% at Higher, sets out the AO1 to AO3 weights, and gives our six-step mock autopsy that sorts lost marks by assessment objective. Three original worked examples, each labelled with its objective (a three-year 18% depreciation, pens and rulers simultaneous equations, a Venn double-counting argument), an original practice set and a Year 10 plan to September 2027 follow. Lesson family: a year-group door built on the first year of a course.',
    requiredMentions: [
      'The expectation is that the majority of pupils will move through the programme of study at broadly the same pace.',
      'Only the more highly attaining students will be assessed on the content identified by bold type.',
      'for the remaining lifetime of the current specifications',
      'by 1 September the year before each exam series',
      'the 2028 sheet is due by 1 September 2027',
      'Individual papers are not graded',
      'algebra rises to 27 to 33%',
      'We use a method we call the mock autopsy',
      'A laptop loses 18% of its value each year.'
    ],
    sources: [
      { claim: 'DfE GCSE mathematics subject content and assessment objectives: typefaces, AO weightings, formula appendix.', url: 'https://assets.publishing.service.gov.uk/media/5a7cb5b040f0b6629523b52c/GCSE_mathematics_subject_content_and_assessment_objectives.pdf' },
      { claim: 'DfE Mathematics programmes of study: key stage 4, July 2014: pace and typeface conventions.', url: 'https://assets.publishing.service.gov.uk/media/5a7dc9dced915d2ac884d8ef/KS4_maths_PoS_FINAL_170714.pdf' },
      { claim: 'Ofqual decisions on formulae sheets for GCSE maths from 2028 for the lifetime of current specifications.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses' },
      { claim: 'Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, Issue 2: topic weightings, grading, November entry rule.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html' },
      { claim: 'gov.uk The national curriculum: Year 10 age and assessment.', url: 'https://www.gov.uk/national-curriculum' }
    ],
    rejectedClaims: [
      'Summer 2028 exam dates: not yet published by AQA, Pearson or OCR on the pages read, so none are given.',
      'National data on early entry in Year 10: not read at a primary source, so not quoted.',
      'Topic weightings for AQA and OCR: not published in the same form on the pages read, so only Pearson\'s are tabled.',
      'Any claim that mocks predict grades: declined; the page says mocks do not count and grade labels on them are estimates.',
      'Any promise of a tier or grade: declined.'
    ]
  }
};
