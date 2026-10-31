'use strict';
// Year 9 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK015).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/year-9-maths-tutor-online/ and .../year-10-maths-tutor-online/):
//  - DfE, Mathematics programmes of study: key stage 3, National curriculum in England, "September 2013",
//    reference DFE-00179-2013 (assets.publishing.service.gov.uk). Verbatim: "By the end of key stage 3, pupils are
//    expected to know, apply and understand the matters, skills and processes specified in the relevant programme
//    of study."; "Schools are not required by law to teach the example content in [square brackets] or the content
//    indicated as being 'non-statutory'."; "Pupils who grasp concepts rapidly should be challenged through being
//    offered rich and sophisticated problems before any acceleration through new content in preparation for key
//    stage 4."; "Those who are not sufficiently fluent should consolidate their understanding, including through
//    additional practice, before moving on."; "Calculators should not be used as a substitute for good written and
//    mental arithmetic."; content lines "recognise arithmetic sequences and find the nth term", "solve problems
//    involving percentage change, including: percentage increase, decrease and original value problems and simple
//    interest in financial mathematics", "use Pythagoras' Theorem and trigonometric ratios in similar triangles to
//    solve problems involving right-angled triangles", "interpret and compare numbers in standard form",
//    "use approximation through rounding to estimate answers and calculate possible resulting errors expressed
//    using inequality notation a<x≤b", "generate theoretical sample spaces for single and combined events",
//    "derive and use the standard ruler and compass constructions".
//  - DfE, Mathematics programmes of study: key stage 4, "July 2014". Verbatim: "Together, the mathematical content
//    set out in the key stage 3 and key stage 4 programmes of study covers the full range of material contained in
//    the GCSE Mathematics qualification."
//  - DfE, GCSE mathematics: subject content and assessment objectives (gov.uk, published 1 November 2013).
//    Verbatim: "There is no expectation that teaching of such content should be repeated during the GCSE course
//    where it has already been taught effectively at an earlier stage."; AO1 weighting Higher 40%, Foundation 50%.
//  - gov.uk, The national curriculum (content API, parts overview and key-stage-3-and-4). Verbatim: Year 9 "13 to
//    14", assessment "Not applicable"; Year 10 "Some children take GCSEs"; "By the end of each summer term the
//    school must write a report on your child's progress and talk it through with you."; KS4 "Core subjects are:
//    English maths science"; "Other types of school, like academies and private schools, do not have to follow the
//    national curriculum."
//  - AQA GCSE Mathematics 8300 specification v1.1 (raw copy in src/aqa-gcse-maths-8300-help/): "GCSE Mathematics has
//    a Foundation tier (grades 1 – 5) and a Higher tier (grades 4 – 9)." (restated without dashes on the page).
// Our own: the bridge table pairing KS3 statements with what GCSE adds, the three worked examples, the practice set,
// the end-of-Year-9 audit and the term plan are ours.
// Spine: Year 9 is the last year of Key Stage 3 and the year of options. Maths is not one of the options (it is a
// KS4 core subject), so the real Year 9 decisions are about readiness: which KS3 statements are secure before GCSE
// content arrives, and what that implies for the tier conversation in Year 10. Lesson family: a year-group door built
// on the end of a key stage, distinct from the KS3 door (all three years) and the GCSE doors.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 9', blurb: 'The last year of Key Stage 3. An audit of the statements GCSE builds on, before options and before the tier talk.' },
  slug: 'year-9-maths-tutor-online',
  code: 'gah',
  accent: '#285729',
  accentRationale: 'Year 9 maths: a deep fern green (#285729, 7.97:1 on #FBF8F2), a growing colour for the year between Key Stage 3 and GCSE, well away from the slate, teal and navy of the GCSE board doors',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 9 maths tutor online',
  title: 'Year 9 Maths Tutor Online | End of KS3, Options and Tier',
  description: 'Year 9 maths tutor online: the end of Key Stage 3, why maths is not an option, the KS3 statements GCSE builds on, and a Year 9 audit with worked examples.',
  ogDescription: 'Year 9 closes Key Stage 3. Find the statements that are not yet secure before GCSE content starts, with an audit, worked examples and a term plan.',
  twitterDescription: 'Year 9 maths: the end of Key Stage 3, the options year, the tier conversation ahead, and an audit to run before GCSE starts.',
  pageName: 'Year 9 Maths Tutor Online',
  webPageDescription: 'Live online maths teaching for Year 9 students in England, built on the Key Stage 3 programme of study and the bridge into GCSE Mathematics.',
  courseDescription: 'Live online maths classes for Year 9, closing Key Stage 3 gaps and starting GCSE Mathematics content at the right pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 9 maths',
  navLinks: [
    { href: '#endks3', label: 'End of KS3' },
    { href: '#options', label: 'Options year' },
    { href: '#bridge', label: 'KS3 to GCSE' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Key Stage 3 &middot; Year 9, ages 13 to 14',
  h1: 'Year 9 maths tutor online',
  lede: 'Year 9 is a strange year for maths. It is the final year of Key Stage 3, so the programme of study expects everything it lists to be known by the summer, yet many schools are already teaching GCSE topics and talking about sets. It is also the options year, when families spend weeks on subject choices, and maths is the one subject nobody chooses because it is compulsory. This page explains what the end of Key Stage 3 actually requires, why the options process changes less for maths than parents expect, which Year 9 topics GCSE leans on hardest, and how to run a short audit before Year 10 begins. Three worked examples and a practice set, all written by us, show the level.',
  secondaryCta: { href: '#audit', label: 'Run the Year 9 audit' },
  wa: 'Hello Modern Age Coders, I would like a free first maths class for my child in Year 9.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the DfE Key Stage 3 and GCSE maths documents',
  spec: [
    ['Year group', 'Year 9, ages 13 to 14'],
    ['Key stage', 'Last year of Key Stage 3'],
    ['National test', 'None in Year 9'],
    ['Next step', 'GCSE Maths in Years 10 and 11'],
    ['Course', 'GCSE Maths: Foundation and Higher'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 9 maths in England is the final year of Key Stage 3, for students aged 13 to 14, taught from the Department for Education\'s Key Stage 3 programme of study. There is no national maths test in Year 9; GCSE Mathematics follows in Years 10 and 11. Modern Age Coders teaches Year 9 maths live online through its GCSE Maths: Foundation and Higher course, either 1-on-1 or in a batch of 15 to 20 students, and closes Key Stage 3 gaps before any new GCSE topic. We are independent of schools, the DfE and every exam board.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses a Year 9 student might join',
    lede: 'Most Year 9 students join the first. The second suits a student whose Key Stage 3 arithmetic or algebra is shaky; the third suits one who is racing ahead.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'Y9 / 01', title: 'GCSE Maths: Foundation and Higher', note: 'Starts where Key Stage 3 ends, at a pace set by the audit rather than by the calendar.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'Y9 / 02', title: 'Lower secondary maths', note: 'For a Year 9 student who needs fractions, negatives and equations rebuilt before GCSE.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'Y9 / 03', title: 'Competition maths', note: 'Rich problems for a fast student, in line with the curriculum\'s preference for depth before acceleration.' }
    ]
  },

  sections: [
    {
      id: 'endks3', tint: 'tint', eyebrow: 'The end of Key Stage 3',
      h2: 'What should a Year 9 student know in maths by the end of the year?',
      lede: 'Everything in the Key Stage 3 programme of study. The DfE document, dated September 2013, says so in one sentence, and it is worth reading slowly.',
      body: [
        { kind: 'p', html: 'The national curriculum sets the target for the whole key stage, not for each year: "By the end of key stage 3, pupils are expected to know, apply and understand the matters, skills and processes specified in the relevant programme of study." Year 9 is where that sentence comes due. Whatever was missed in Years 7 and 8 is still on the list in June of Year 9, and nothing in the curriculum moves it to Year 10.' },
        { kind: 'p', html: 'The programme of study is a nine-page document, organised under six content headings: number; algebra; ratio, proportion and rates of change; geometry and measures; probability; and statistics. Above them sit three aims that run through every topic: to become fluent, to reason mathematically, and to solve problems. In practice the aims matter as much as the topics, because GCSE papers reward the second and third almost as heavily as the first.' },
        { kind: 'table', mt: true, caption: 'Year 9 in the national curriculum, from gov.uk\'s national curriculum guide', head: ['Year', 'Age', 'Key stage', 'National assessment in that year'], rows: [
          ['Year 9', '13 to 14', 'Key Stage 3, final year', 'Not applicable (no national test)'],
          ['Year 10', '14 to 15', 'Key Stage 4', 'Some children take GCSEs'],
          ['Year 11', '15 to 16', 'Key Stage 4', 'Most children take GCSEs or other national tests']
        ] },
        { kind: 'p', html: 'Because there is no national test, Year 9 maths is judged entirely by the school: its own end-of-year exams, its setting decisions and its report. The gov.uk guide adds one duty that families can use: "By the end of each summer term the school must write a report on your child\'s progress and talk it through with you." The Year 9 summer report is the most useful one to read carefully, because it is usually written by the person deciding the Year 10 set.' },
        { kind: 'two', mt: true,
          leftH3: 'What is statutory, and what is not',
          left: [
            'The programme of study includes example content in square brackets. The DfE is explicit that "Schools are not required by law to teach the example content in [square brackets] or the content indicated as being \'non-statutory\'."',
            'So when a school skips a bracketed example, it is not breaking a rule. What it cannot skip is the main statement around the brackets.'
          ],
          rightH3: 'Who has to follow it',
          right: [
            'Maintained schools follow the national curriculum. The gov.uk guide notes that "Other types of school, like academies and private schools, do not have to follow the national curriculum", though academies must still teach maths.',
            'In practice almost every school in England teaches something close to it, because GCSE is built on the same content.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">DfE, Mathematics programmes of study: key stage 3</a> (September 2013, reference DFE-00179-2013) and <a class="ag-inline-link" href="https://www.gov.uk/national-curriculum" rel="noopener" target="_blank">gov.uk, The national curriculum</a>, both read on 31 October 2026.' }
      ]
    },
    {
      id: 'options', tint: 'deep', eyebrow: 'The options year',
      h2: 'Do you choose maths in Year 9 options?',
      lede: 'No. Maths is a core subject at Key Stage 4, so it is never on the options form. What Year 9 does decide is the shape of the maths that follows.',
      body: [
        { kind: 'p', html: 'The gov.uk guide lists the Key Stage 4 core plainly: "Core subjects are: English maths science". Every student in a maintained school in England continues maths into Years 10 and 11 and, in almost every case, sits GCSE Mathematics. The options booklet a family receives in Year 9 is about the other subjects. That is why parents are sometimes surprised that the options evening has nothing to say about maths.' },
        { kind: 'p', html: 'Three maths-shaped questions still sit inside the options year, and they are the ones worth asking the school about before the form goes in.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'A second maths qualification', p: 'Some schools offer GCSE Statistics, or a Level 2 Further Maths course for a top set, alongside GCSE Maths. These usually sit inside options blocks or after-school slots, so they appear in Year 9 even though maths itself does not.' },
          { h3: 'Subjects that lean on maths', p: 'Computer Science, physics and the separate sciences, geography and economics all use Key Stage 3 algebra, graphs and statistics. A student weighing those options should know how secure their own algebra is.' },
          { h3: 'The set for Year 10', p: 'Many schools reset maths groups at the start of Key Stage 4. The set is not the GCSE tier, but it often decides which content is taught first and how quickly Higher-only topics arrive.' }
        ] },
        { kind: 'p', mt: true, html: 'GCSE Maths has two tiers. AQA\'s specification describes them in one line: a Foundation tier for grades 1 to 5 and a Higher tier for grades 4 to 9, and the other boards in England use the same split. Nobody is entered for a tier in Year 9; that happens late in Year 11. But the Year 9 audit below is the earliest honest evidence of which tier a student is heading towards, and it is far easier to change that direction at 13 than at 15.' },
        { kind: 'two', mt: true,
          leftH3: 'If a student is thinking about Computer Science',
          left: [
            'Our page on <a class="ag-inline-link" href="/choosing-gcse-computer-science-year-9-options">choosing GCSE Computer Science in Year 9</a> covers that decision on its own terms.',
            'The maths link is real: sequences, algebraic notation and logic all reappear in programming, and a student comfortable with nth-term rules usually finds loops less mysterious.'
          ],
          rightH3: 'If a second maths GCSE is offered',
          right: [
            'Ask when it is taught and how it is examined. A Statistics GCSE in the options block costs a full option; one taught after school does not.',
            'A student still consolidating Key Stage 3 number is usually better served by one strong maths GCSE than by two thin ones.'
          ] }
      ]
    },
    {
      id: 'bridge', tint: '', eyebrow: 'Key Stage 3 to GCSE',
      h2: 'Which Year 9 topics does GCSE Maths build on most?',
      lede: 'Nearly all of them. The Key Stage 4 programme of study, dated July 2014, says Key Stage 3 and Key Stage 4 together are the whole GCSE.',
      body: [
        { kind: 'p', html: 'The sentence that ties the two stages together is in the Key Stage 4 document: "Together, the mathematical content set out in the key stage 3 and key stage 4 programmes of study covers the full range of material contained in the GCSE Mathematics qualification." The DfE\'s GCSE subject content then adds that GCSE outcomes "may reflect or build upon subject content which is typically taught at key stage 3", and that "There is no expectation that teaching of such content should be repeated during the GCSE course where it has already been taught effectively at an earlier stage." Read together, those lines carry a quiet warning: if a Key Stage 3 topic was not learned the first time, the GCSE course is not obliged to teach it again.' },
        { kind: 'table', mt: true, caption: 'Eight Key Stage 3 statements and what GCSE adds on top (statements quoted from the KS3 programme of study; the right-hand column is our summary of the DfE GCSE subject content)', head: ['Key Stage 3 statement (DfE, 2013)', 'Area', 'What GCSE adds'], rows: [
          ['interpret and compare numbers in standard form', 'Number', 'Calculating with standard form, not just reading it'],
          ['use approximation through rounding to estimate answers and calculate possible resulting errors expressed using inequality notation', 'Number', 'Error intervals from truncation, then upper and lower bounds'],
          ['recognise arithmetic sequences and find the nth term', 'Algebra', 'Quadratic sequences and their nth term at Higher'],
          ['use algebraic methods to solve linear equations in one variable', 'Algebra', 'Quadratics, simultaneous equations and inequalities'],
          ['solve problems involving percentage change, including ... original value problems', 'Ratio', 'Compound growth and decay, repeated percentage change'],
          ['solve problems involving direct and inverse proportion', 'Ratio', 'Proportion written as equations, with constants found'],
          ['use Pythagoras\' Theorem and trigonometric ratios in similar triangles', 'Geometry', 'Exact trigonometric values, then the sine and cosine rules at Higher'],
          ['generate theoretical sample spaces for single and combined events', 'Probability', 'Tree diagrams, Venn diagrams and conditional probability']
        ] },
        { kind: 'p', html: 'Every row in that table is a Year 9 topic that becomes a GCSE topic with more weight on top. A student who leaves Year 9 unable to find an original value after a percentage change does not just lose that question; they arrive at compound interest, reverse percentages and growth and decay without the step those topics stand on. The same is true of linear equations, which hold up most of GCSE algebra.' },
        { kind: 'two', mt: true,
          leftH3: 'Depth before speed',
          left: [
            'The programme of study has a view on fast students: they "should be challenged through being offered rich and sophisticated problems before any acceleration through new content in preparation for key stage 4."',
            'For a strong Year 9 student, that argues for harder problems on Key Stage 3 content, not an early start on Higher-only topics.'
          ],
          rightH3: 'Consolidation before moving on',
          right: [
            'For the rest it is equally direct: those "not sufficiently fluent should consolidate their understanding, including through additional practice, before moving on."',
            'Year 9 is the last year where consolidation can happen without a GCSE scheme of work pulling the class forward.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">DfE, Mathematics programmes of study: key stages 3 and 4</a> and <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics: subject content and assessment objectives</a>, read on 31 October 2026. The middle column of the table and the summaries in it are ours.' }
      ]
    },
    {
      id: 'audit', tint: 'tint', eyebrow: 'The Year 9 audit',
      h2: 'How can you tell if a Year 9 student is ready for GCSE Maths?',
      lede: 'Run a short audit of the Key Stage 3 statements that GCSE leans on. This is our method; it takes one lesson and leaves a list, not a label.',
      body: [
        { kind: 'p', html: 'Our audit uses twelve short questions, one for each of twelve Key Stage 3 statements, chosen because each is the base of a heavier GCSE topic. The student answers without a calculator first, then with one where the statement allows it, because the programme of study warns that "Calculators should not be used as a substitute for good written and mental arithmetic." Each answer is marked secure, shaky or missing. The audit is ours, and it is a teaching tool, not a predicted grade.' },
        { kind: 'ol', items: [
          '<strong>Number sense.</strong> Order a mix of negative numbers, decimals and fractions on one line, and explain one placement aloud.',
          '<strong>Fractions as operators.</strong> Find three fifths of 45 and 35% of 60 by hand.',
          '<strong>Standard form.</strong> Compare 3.2 × 10<sup>4</sup> with 4.1 × 10<sup>3</sup> and say which is bigger and roughly how many times.',
          '<strong>Estimation.</strong> Round each number in a two-step calculation to one significant figure and estimate the answer.',
          '<strong>Expressions.</strong> Expand and simplify two brackets, then factorise a simple expression.',
          '<strong>Linear equations.</strong> Solve an equation with the unknown on both sides and a fraction in it.',
          '<strong>Sequences.</strong> Find the nth term of an arithmetic sequence and test whether a given number belongs to it.',
          '<strong>Straight-line graphs.</strong> Read the gradient and intercept from y = mx + c, then sketch the line.',
          '<strong>Ratio and percentage.</strong> Share an amount in a ratio, and find an original amount after a percentage reduction.',
          '<strong>Angles and shapes.</strong> Use angle facts on parallel lines and give the reason for each step.',
          '<strong>Right-angled triangles.</strong> Find a missing side with Pythagoras\' theorem and decide when to use it.',
          '<strong>Probability and data.</strong> List a sample space for two events and compare two data sets using a mean and a range.'
        ] },
        { kind: 'p', mt: true, html: 'The pattern of the marks matters more than the count. Shaky fractions and equations usually mean a student will find Foundation algebra hard and Higher algebra very hard. Shaky Pythagoras and sequences on their own are quick fixes. Shaky reasoning, where the answer is right but the student cannot say why, is the gap that costs most at GCSE, because the DfE weights reasoning (AO2) at 30% of Higher marks and 25% of Foundation marks, and problem solving (AO3) the same again.' }
      ]
    },
    {
      id: 'examples', tint: '', eyebrow: 'Worked examples',
      h2: 'Three Year 9 questions we wrote, with every step shown',
      lede: 'Our own questions, at the level of the end of Key Stage 3. None is taken from a school, a board or a published test.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, ratio and percentage: an original value',
          left: [
            '<strong>Question (ours).</strong> After a 15% cut, a school uses 340 kilowatt hours of electricity a week. How much did it use before the cut?',
            '<strong>Think first.</strong> 340 is not the starting amount; it is 85% of the starting amount. So the old figure is the unknown, and 340 is what is left after the cut.',
            '<strong>Working.</strong> 100% &minus; 15% = 85%, so 0.85 × original = 340. Original = 340 ÷ 0.85 = 400 kilowatt hours.',
            '<strong>Check.</strong> 15% of 400 is 60, and 400 &minus; 60 = 340. The common wrong answer, 340 + 15% of 340 = 391, fails the check at once.'
          ],
          rightH3: 'Example 2, algebra: is it in the sequence?',
          right: [
            '<strong>Question (ours).</strong> A sequence begins 7, 11, 15, 19. Is 150 a term of the sequence?',
            '<strong>Working.</strong> The difference is 4, so the nth term is 4n + c. When n = 1 the term is 7, so c = 3, giving 4n + 3.',
            '<strong>Test.</strong> Solve 4n + 3 = 150, so 4n = 147 and n = 36.75. A term number must be a whole number.',
            '<strong>Answer.</strong> No, 150 is not in the sequence. The 36th term is 147 and the 37th is 151, which confirms it.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, geometry: Pythagoras with a decision',
          left: [
            '<strong>Question (ours).</strong> A 5 metre ladder leans against a wall with its foot 1.4 metres from the wall. How high up the wall does it reach, to the nearest centimetre?',
            '<strong>Think.</strong> The ladder is the hypotenuse, because it is opposite the right angle at the foot of the wall. So we subtract squares, not add them.',
            '<strong>Working.</strong> h² = 5² &minus; 1.4² = 25 &minus; 1.96 = 23.04. h = 4.8 metres exactly, which is 4.80 m to the nearest centimetre.',
            '<strong>Sense check.</strong> The height must be less than 5 m, the ladder\'s length. An answer of 5.19 m would come from adding the squares and is impossible.'
          ],
          rightH3: 'What the three examples share',
          right: [
            'Each one has a moment before any arithmetic where the student decides what the numbers mean: which amount is the whole, what the term number must be, which side is the hypotenuse.',
            'That moment is the reasoning the curriculum asks for, and it is the step most often skipped. We teach students to write it as a short sentence before they calculate.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) Write 0.000 47 in standard form. (2) Solve 5x &minus; 3 = 2x + 18. (3) Share 84 in the ratio 3 : 4. (4) After a 20% cut, a bus journey takes 72 minutes; how long did it take before? (5) Find the nth term of 2, 9, 16, 23. (6) A right-angled triangle has shorter sides 9 cm and 12 cm; find the hypotenuse. (7) Two fair coins are flipped; what is the probability of exactly one head? <strong>Answers:</strong> (1) 4.7 × 10<sup>&minus;4</sup>; (2) x = 7; (3) 36 and 48; (4) 90 minutes; (5) 7n &minus; 5; (6) 15 cm; (7) one half, from the sample space HH, HT, TH, TT.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A Year 9 plan',
      h2: 'How should a Year 9 student spend the year in maths?',
      lede: 'Our three-term outline for the year, written around the way most English schools run Year 9: options in the spring, end-of-year exams and the summer report in the summer.',
      body: [
        { kind: 'ol', items: [
          '<strong>Autumn term: audit and repair.</strong> Run the twelve-line audit in the first weeks. Spend the term on the two or three weakest lines, retesting each one a fortnight after it is taught.',
          '<strong>Autumn half-term: written arithmetic.</strong> A short daily habit of non-calculator work, fractions and negative numbers especially, because GCSE has a full non-calculator paper.',
          '<strong>Spring term, before options: a conversation.</strong> Ask the school how maths groups are set for Year 10 and whether a second maths qualification is offered. Use the audit, not a feeling, to decide whether to ask for a change.',
          '<strong>Spring term, after options: reasoning.</strong> Move from getting answers to explaining them: angle reasons, why a number is or is not in a sequence, what a gradient means in a context.',
          '<strong>Summer term: the school exam.</strong> Revise from the audit list, sit the school\'s end-of-year paper, and keep the marked paper.',
          '<strong>After the summer report: the handover.</strong> Re-run the audit. The lines still shaky become the first weeks of Year 10, before GCSE content builds on them.'
        ] },
        { kind: 'p', mt: true, html: 'The plan is ours and it is deliberately modest. It does not try to finish GCSE topics in Year 9. It tries to make sure that when Year 10 starts, the base is solid enough that new content can be added rather than patched. For a student who is already secure on all twelve lines, the curriculum\'s own advice applies: richer problems, more proof and reasoning, and perhaps <a class="ag-inline-link" href="/further-maths-tuition-online">further maths</a> later, rather than a sprint through the Higher specification.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs from Year 9 into Year 10',
    lede: 'A rung is reached when the audit says so, not when the calendar does.',
    table: { caption: 'What should be true by each point', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Gaps named', 'First weeks with us', 'The audit has been run and the shaky lines are written down'],
      ['2. Arithmetic by hand', 'By Christmas of Year 9', 'Fractions, negatives and percentages done without a calculator'],
      ['3. Algebra secure', 'By the options deadline', 'Linear equations, brackets and nth terms solved and checked'],
      ['4. Reasons written', 'By the summer report', 'Every geometry and sequence answer comes with a sentence saying why']
    ] },
    left: { h3: 'Why the first rung matters', ps: [
      'Families often arrive with a worry and leave the first class with a list. The list is shorter than the worry, almost always.',
      'Our <a class="ag-inline-link" href="/ks3-maths-tuition-online">Key Stage 3 maths page</a> covers Years 7 and 8 if the gaps go back further.'
    ] },
    right: { h3: 'Why the fourth rung matters', ps: [
      'GCSE marks reasoning and problem solving on both tiers. A student who writes reasons in Year 9 is practising for every GCSE paper.',
      'We send families a short note on the audit each month.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Year 9 maths',
    lede: 'Grouped by what a Year 9 student usually needs: repair, the GCSE itself, or stretch.',
    bands: [
      { num: 'I', h3: 'Repair', sub: 'Key Stage 3 foundations', courses: [
        { code: 'UK / Y9A / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Number, geometry and early algebra, rebuilt in order.' },
        { code: 'UK / Y9A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'From expressions to equations with the unknown on both sides.' },
        { code: 'UK / Y9A / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for students whose written arithmetic is slow.' }
      ] },
      { num: 'II', h3: 'The GCSE ahead', sub: 'Starting at the right pace', courses: [
        { code: 'UK / Y9B / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Foundation and Higher content once the base is secure.' },
        { code: 'UK / Y9B / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Sample spaces, averages and spread, taken further.' },
        { code: 'UK / Y9B / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences and straight-line graphs turned into short Python programs.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For the fastest Year 9s', courses: [
        { code: 'UK / Y9C / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems that reward depth on familiar content.' },
        { code: 'UK / Y9C / 02', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof and problem solving', blurb: 'Longer arguments for students who enjoy hard questions.' },
        { code: 'UK / Y9C / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first programming language, useful for a Computer Science option.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live Year 9 maths classes, set in UK time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers work from India and every lesson is timetabled in UK time.',
    slots: [
      { time: 'After school', l: 'A good slot for a 13 or 14 year old.' },
      { time: 'Early evening', l: 'After homework and clubs.' },
      { time: 'Weekend mornings', l: 'Unhurried time for the audit.' }
    ],
    cells: [
      { h3: 'Audit first', p: 'Twelve Key Stage 3 lines checked in the first lesson, so teaching starts at the real gap.' },
      { h3: 'Hand arithmetic', p: 'Non-calculator practice in every class, because GCSE has a paper without one.' },
      { h3: 'Reasons in writing', p: 'Every answer ends with a sentence that says why it is right.' },
      { h3: 'School work alongside', p: 'Homework and school tests are welcome in class; we teach around them.' },
      { h3: 'Free first lesson', p: 'One live class to try the format, with nothing paid until a regular time is agreed.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 Year 9 students, or a teacher for one student.' }
    ]
  },

  projectsH2: 'Things students made in our classes',
  projectsLede: 'Ordinary class work, not assessed pieces. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, copied as written.',

  fees: {
    h2: 'Fees for Year 9 maths classes',
    lede: 'The first lesson is free. After that a single monthly fee, with a group seat costing less than 1-on-1 teaching. There is no contract, and nothing is charged until a weekly slot is fixed.',
    free: ['A live class with the twelve-line audit', 'A written list of the shaky lines', 'Booked with only a phone number'],
    group: ['15 to 20 Year 9 students', 'The same teacher through the year', 'Hand arithmetic in every class', 'A monthly note on the audit'],
    one: ['A teacher for one student', 'Built around that student\'s audit', 'Suits a big gap or a fast learner']
  },

  faq: {
    eyebrow: 'Questions about Year 9 maths',
    h2: 'What parents ask about Year 9 maths',
    items: [
      { q: 'What maths is taught in Year 9?', a: 'Year 9 finishes the Key Stage 3 programme of study: number, algebra, ratio and proportion, geometry and measures, probability and statistics. Many schools also start some GCSE topics in Year 9, but the Key Stage 3 statements are still the target for the end of the year.' },
      { q: 'Is there a test at the end of Year 9?', a: 'There is no national maths test in Year 9; the gov.uk guide lists the assessment for Year 9 as not applicable. Schools set their own end-of-year exams and must send a written report on progress by the end of the summer term.' },
      { q: 'Do you pick maths in Year 9 options?', a: 'No. Maths is a core subject at Key Stage 4, alongside English and science, so it is not on the options form. Options can still involve maths, for example a GCSE Statistics course or a subject such as Computer Science that uses a lot of algebra.' },
      { q: 'Is Year 9 maths the start of GCSE?', a: 'In many schools, partly. The Key Stage 4 programme of study says Key Stage 3 and Key Stage 4 together cover the whole GCSE, so Year 9 content is GCSE content in its first form. The DfE also says GCSE teaching need not repeat topics already taught well at Key Stage 3.' },
      { q: 'Does the Year 9 set decide Foundation or Higher?', a: 'Not directly. Students are entered for a tier late in Year 11, and the Foundation tier awards grades 1 to 5 while Higher awards 4 to 9. But Year 10 sets often decide which content is taught first, so Year 9 progress shapes the route.' },
      { q: 'My child is ahead in Year 9. Should they start GCSE early?', a: 'The Key Stage 3 programme of study prefers depth: fast students should get rich and sophisticated problems before acceleration through new content. We usually give strong Year 9 students harder problems on familiar topics rather than racing ahead.' },
      { q: 'What is the most important Year 9 maths topic?', a: 'If we had to choose one, solving linear equations, because so much GCSE algebra stands on it. Close behind are fractions and percentages by hand, including original value problems, which lead straight into reverse percentages and compound change.' },
      { q: 'How do I know if my child has gaps?', a: 'A short audit tells you more than a test score. We use twelve questions, each tied to a Key Stage 3 statement, and mark each one secure, shaky or missing; the free first class includes it.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are set in UK time.' },
      { q: 'Are you connected with my child\'s school or the DfE?', a: 'No. Modern Age Coders is an independent online school. We teach to the published Key Stage 3 programme of study and the GCSE content, and we do not promise a set, a tier or a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Year 9 and the years after',
    lede: 'The key stage around Year 9, and the GCSE questions that come next.',
    items: [
      { href: '/ks3-maths-tuition-online', label: 'Key Stage 3 maths tuition', p: 'Years 7 to 9 together, for gaps that go back further.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'The two years that follow Year 9, in one place.' },
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher', p: 'How the tier choice is made, and by whom.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'Comparing the GCSE boards', p: 'What changes, and what does not, between AQA, Edexcel and OCR.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Computer Science as an option', p: 'A Year 9 choice that leans on maths.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'The UK hub for maths and computing.' }
    ]
  },

  start: {
    h2: 'Book a free Year 9 maths class',
    lede: 'Leave a number and we will call at a UK time you choose. The class runs the twelve-line audit and ends with a short written list of what to work on first.',
    readFirst: 'Want to look before booking? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> shows the syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical lesson.',
    note: 'WhatsApp reaches us fastest and costs nothing from a UK phone. Our team in India answers, from a number that begins +91.',
    formNote: 'No card, no commitment. We reply once with a time.'
  },

  footer: {
    cols: [
      { h4: 'Year 9 and Key Stage 3', links: [
        { href: '/ks3-maths-tuition-online', label: 'Key Stage 3 maths' },
        { href: '/ks3-computing-tuition-online', label: 'Key Stage 3 computing' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Looking ahead to GCSE', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-grades-explained', label: 'GCSE grades explained' },
        { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 9 maths, live online in UK time'
  },

  personalityCss: `
.ag-root.ag-gah .ag-hero h1 { letter-spacing: -0.015em; font-weight: 700; }
.ag-root.ag-gah .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-gah .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-gah .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gah .ag-table td:nth-child(2) { white-space: nowrap; }
.ag-root.ag-gah .ag-steps li { margin-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE national curriculum. Mathematics programmes of study: key stage 3 (September 2013, DFE-00179-2013): end-of-key-stage expectation; square-bracket and non-statutory content not required by law; depth before acceleration; consolidation before moving on; calculators not a substitute for written and mental arithmetic; statements on standard form, rounding errors, nth term, linear equations, percentage change and original value, proportion, Pythagoras and trigonometric ratios, sample spaces. Key stage 4 (July 2014): KS3 and KS4 together cover the full GCSE. GCSE mathematics subject content (DfE, November 2013): no expectation to repeat KS3 content already taught effectively. gov.uk national curriculum guide: Year 9 ages 13 to 14, no national assessment; Year 10 some take GCSEs; Year 11 most take GCSEs; summer-term report duty; KS4 core English, maths, science; academies and private schools need not follow the national curriculum. AQA 8300 tiers: Foundation 1 to 5, Higher 4 to 9.',
    localProject: 'Year 9 is the last year of Key Stage 3 and the options year. The page explains that the KS3 programme of study is due by the end of Year 9, that maths is a KS4 core subject and so never an option, and which maths-shaped questions do sit inside options (a second maths qualification, maths-heavy subjects, Year 10 setting). A bridge table pairs eight quoted KS3 statements with what GCSE adds. It then gives our twelve-line Year 9 audit, three original worked examples (an original value after a 15% reduction, testing whether 150 is in 7, 11, 15, 19, and a ladder problem where the hypotenuse is given), a practice set with answers, and a three-term Year 9 plan. Lesson family: a year-group door built on the end of a key stage.',
    requiredMentions: [
      'reference DFE-00179-2013',
      'By the end of key stage 3, pupils are expected to know, apply and understand the matters, skills and processes specified in the relevant programme of study.',
      'Schools are not required by law to teach the example content in [square brackets]',
      'Together, the mathematical content set out in the key stage 3 and key stage 4 programmes of study covers the full range of material contained in the GCSE Mathematics qualification.',
      'There is no expectation that teaching of such content should be repeated during the GCSE course where it has already been taught effectively at an earlier stage.',
      'By the end of each summer term the school must write a report on your child\'s progress and talk it through with you.',
      'Core subjects are: English maths science',
      'Our audit uses twelve short questions',
      'Is 150 a term of the sequence?'
    ],
    sources: [
      { claim: 'DfE Mathematics programmes of study: key stage 3, September 2013: end-of-key-stage expectation, statutory status, acceleration and consolidation guidance, calculator guidance, content statements.', url: 'https://assets.publishing.service.gov.uk/media/5a7c1408e5274a1f5cc75a68/SECONDARY_national_curriculum_-_Mathematics.pdf' },
      { claim: 'DfE Mathematics programmes of study: key stage 4, July 2014: KS3 and KS4 together cover the full GCSE.', url: 'https://assets.publishing.service.gov.uk/media/5a7dc9dced915d2ac884d8ef/KS4_maths_PoS_FINAL_170714.pdf' },
      { claim: 'DfE GCSE mathematics subject content and assessment objectives: no expectation to repeat KS3 content taught effectively.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk The national curriculum: year and age table, assessments by year, summer report duty, KS4 core subjects, academies and private schools.', url: 'https://www.gov.uk/national-curriculum' },
      { claim: 'AQA GCSE Mathematics 8300 specification: Foundation tier grades 1 to 5, Higher tier grades 4 to 9.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification' }
    ],
    rejectedClaims: [
      'Any national statistic on Year 9 attainment or setting: none read at a primary source, so none quoted.',
      'A claim that schools must start GCSE in Year 9 or must not: no such rule in the DfE documents, so the page says many schools start some GCSE topics and leaves it there.',
      'Options deadlines: they vary by school and are not published centrally, so none are given.',
      'Any promise of a set, tier or grade: declined.'
    ]
  }
};
