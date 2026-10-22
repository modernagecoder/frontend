'use strict';
// Best online math tutoring in Canada (ag- market door; Canada cluster Plan 2, row 80).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// A "best" page: the superlative stays in title and meta; the page defines what a strong math tutor looks like with
// stated checks, compares FORMATS (not companies), and never claims we are the best. Sibling of row 79 (coding) with
// its own spine (diagnosis before teaching), its own worked material (a six-question gap finder) and its own FAQ.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/best-online-math-tutoring-in-canada/ and ca/src/):
//  - Provider sites, read raw 22 October 2026 (facts-competitors.md, grep-checked again): Kumon Canada "advancing step
//    by logical step in just 30 minutes per day, per subject.", "Two days a week your child completes assignments at a
//    Kumon centre", "Not all Kumon Centres are currently offering virtual classes."; Mathnasium Canada "foundational-to-
//    advanced math instruction for students in grades K-12", "Mathnasium tutors hold live sessions online", "Pricing
//    varies by program and geographic area.", "the costs and value are identical for in-person and online tutoring.";
//    Oxford Learning "We Have Over 130 Centres Across Canada!", "LIVE: students work with tutors via screen-sharing
//    technology.", "all Oxford Learning locations offer a competitive hourly rate"; Scholars "Students who attend a
//    minimum of two, one-hour sessions per week"; Spirit of Math "students who consistently perform at a B+ level or
//    higher", "Each 90-minute class integrates the elements of our approach", "Spirit of Math in-person campuses are in
//    over 30 locations across Canada."; StudyPug "All our online classes are through Zoom."; Prodigy "Prodigy's Math and
//    English content are free". No provider fees printed. Mathnasium "nationwide" counts and Sylvan's combined US and
//    Canada count are not used.
//  - facts-schools-contests.md (verified): EQAO "EQAO's provincial tests assess students' literacy (reading and writing)
//    and numeracy (mathematics) knowledge and skills"; Grade 3 and 6 window May 4 to June 8, 2027 and Grade 9 window
//    January 12 to February 5, 2027 (en dashes in the source, so paraphrased, not quoted); Grade 9 "Results of this
//    assessment are to be included as part of a student's final course mark" (curly apostrophe normalised); MTH1W
//    "Students will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they
//    are learning"; MHF4U prerequisite; MCV4U "must be taken prior to or concurrently with"; Alberta "70% of the final
//    mark comes from course work. The remaining 30% comes from the diploma exam.", PATs "administered annually to all
//    Alberta students in grades 6 and 9"; BC mathematics course list; Quebec Cycle Two options and "All of these options
//    allow students to enroll in a preuniversity program."; CEMC Gauss, Pascal, Cayley, Fermat, Euclid dates and formats;
//    "Our contests are not tests or exams. There is no passing or failing score."; Courseware "No registration is
//    required to access these resources."; Problem of the Week for "Grades 3 to 12"; Waterloo CS course list and the
//    contests-and-scholarships line; UofT St. George CS lists MCV4U.
//  - scripts/brand-facts.json: ages 6 to 67, groups 15 to 20 and 1:1 (the mini batch is sold only in India), 4.9 across 547 Google reviews.
// Our own material, labelled on the page: the seven checks, the format table's judgments, the six-question gap finder
// with answers and what each wrong answer reveals, the discount program (run under CPython on 22 October 2026: 28.0,
// 28.0 and 51.0 percent off), and the first-month steps. Lesson family: diagnosis (find where a gap starts, not where
// it shows).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DISC = `# Our check for question 3: two discounts in a row (written by Modern Age Coders)
price = 100
for first, second in [(20, 10), (10, 20), (30, 30)]:
    final = price * (1 - first / 100) * (1 - second / 100)
    print(f"{first}% then {second}%: {round(100 - final, 2)}% off in total")`;

const DISC_OUT = `20% then 10%: 28.0% off in total
10% then 20%: 28.0% off in total
30% then 30%: 51.0% off in total`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Choosing a math tutor in Canada: seven checks, six tutoring formats side by side, provincial checkpoints from EQAO to Math 30-1, and a six-question gap finder we wrote.' },
  slug: 'best-online-math-tutoring-in-canada',
  code: 'bmtc',
  accent: '#0F1C66',
  accentRationale: 'Best online math tutoring in Canada: a deep ink blue #0F1C66, allocated for this row at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 14.37 on the paper #FBF8F2, 13.52 on #F5F1E8 and 12.37 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Choosing a math tutor',
  title: 'Best Online Math Tutoring in Canada: 7 Checks Before You Pick',
  description: 'How to judge online math tutoring in Canada: seven checks, six formats compared, EQAO to Math 30-1 checkpoints by province, and a six-question gap finder.',
  ogDescription: 'What separates a math tutor who builds understanding from one who supervises worksheets: seven checks, six formats, each province\'s checkpoints, and a gap finder you can try tonight.',
  twitterDescription: 'Choosing a math tutor in Canada: seven checks, six formats, and a six-question gap finder.',
  pageName: 'Best Online Math Tutoring in Canada',
  webPageDescription: 'A guide for Canadian families comparing math tutoring formats (worksheet centres, tutoring centres, enrichment schools, live online classes, live online 1-on-1 and free resources) against stated checks, with provincial math checkpoints and an original diagnostic question set.',
  courseDescription: 'Live online math classes for students across Canada, from Grade 1 to Grade 12 and beyond, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Choosing a math tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#checks', label: 'Seven checks' },
    { href: '#options', label: 'Six formats' },
    { href: '#checkpoints', label: 'By province' },
    { href: '#gapfinder', label: 'Gap finder' },
    { href: '#firstmonth', label: 'First month' }
  ],
  eyebrow: 'Canada &middot; Math tutoring &middot; How to choose',
  h1: 'Online math tutor in Canada: formats, checks and fit by province',
  lede: 'Most searches for a math tutor in Canada start after something has gone wrong: a report card comment, an EQAO result, a Grade 11 functions test that came back lower than anyone expected. That is exactly when a family is most likely to pick the first tutor who answers the phone. This page slows the choice down. It sets out seven checks that separate a tutor who builds understanding from one who supervises worksheets, compares the six formats Canadian families meet, lists each province\'s math checkpoints, and gives you a six-question gap finder we wrote, so you know where the trouble really starts before anyone is paid to fix it.',
  secondaryCta: { href: '#gapfinder', label: 'Try the gap finder' },
  wa: 'Hello Modern Age Coders, we are looking for a math tutor for our child in Canada. Could we book a free first class?',
  heroNote: 'Live online math since 2020 &middot; Grade 1 to Grade 12 and adults &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['What this is', 'Checks and formats, not a ranking'],
    ['Checks', 'Seven, each one testable'],
    ['Formats', 'Six, compared'],
    ['Provinces', 'Ontario, BC, Alberta, Quebec and more'],
    ['Our formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Ages we teach', '6 to 67'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'A strong online math tutor in Canada finds where a gap starts before teaching, explains why each method works, follows your province\'s course (EQAO, MTH1W, MHF4U, Math 30-1, Pre-calculus 12), states the group size, prints the fee, and never hands over answers. Modern Age Coders teaches math live online across Canada, in a batch or one to one, in courses such as High School Mathematics.',

  picks: {
    eyebrow: 'Where we would start',
    h2: 'Three math courses for Canadian students',
    lede: 'One for each stage of school. All three begin with a short placement check, because a Grade 8 student can carry a Grade 5 gap.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'BMTC / 01', title: 'Elementary Math, Grades 1 to 5', note: 'Number sense, place value, fractions and early problem solving, with each child placed by grade and a short check.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BMTC / 02', title: 'Middle School Mathematics', note: 'Grades 6 to 8: ratios, negatives, early algebra and geometry, the years that decide how high school math feels.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'BMTC / 03', title: 'High School Mathematics', note: 'Grades 9 to 12: algebra, functions, trigonometry and an introduction to calculus, mapped to your province\'s courses.' }
    ]
  },

  sections: [
    {
      id: 'checks', tint: 'tint', eyebrow: 'What good looks like',
      h2: 'Seven checks for an online math tutor in Canada',
      lede: 'Our checks, written so a parent can test each one in a first session. A tutor who passes the first and the seventh is usually worth keeping even if the others need work.',
      body: [
        { kind: 'table', caption: 'Seven checks for a math tutor, and how to test each (our framework)', head: ['Check', 'What a strong tutor does', 'How to test it'], rows: [
          ['1. Diagnoses before teaching', 'Finds the earliest idea that is shaky, which is often two or three grades below the one on the report card', 'Ask what the first session will measure, and what happens with the result'],
          ['2. Explains why, not only how', 'Can show why a method works, with a picture or a smaller example, before asking for practice', 'Ask the tutor to explain one rule your child "just knows", such as flipping a fraction to divide'],
          ['3. Follows your province\'s course', 'Knows the course code, the next assessment and the prerequisite chain in your province', 'Name the course (MTH1W, MCR3U, Math 20-1, Pre-calculus 11) and ask what comes next'],
          ['4. States the group size', 'Gives a maximum, so you know how much of each hour is your child\'s', 'Ask for the most students a session can have, in writing'],
          ['5. Prints the fee', 'Shows what a month costs before a sales call', 'Search the provider\'s pages; failing that, request it by email'],
          ['6. Has a route beyond the textbook', 'Can stretch a student who is ahead, for example towards the CEMC contests', 'Ask what they would give a student who finishes the homework in ten minutes'],
          ['7. Never hands over answers', 'Makes the student do the thinking, and treats a photo-solver or AI answer as something to check, not copy', 'Watch who holds the pencil, or the cursor, for most of the session']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why diagnosis comes first',
          left: [
            'A Grade 10 student who loses marks on quadratics rarely has a quadratics problem. Much more often the trouble is fractions, negative numbers or the meaning of the equals sign, met years earlier and never fully learned.',
            'A tutor who teaches this week\'s homework without finding that earlier gap can raise one test mark and leave the next unit just as hard. A tutor who finds it can make the next three units easier.'
          ],
          rightH3: 'Why answers are the line we will not cross',
          right: [
            'Students now carry tools that produce a worked solution from a photo. A tutor who does the same thing in a nicer voice adds nothing.',
            'Wherever we teach, the promise holds: a student leaves able to reason through a problem alone, never trained to copy a worked answer or an AI\'s output. In practice the student holds the pencil and the tutor asks the questions.'
          ] }
      ]
    },
    {
      id: 'options', tint: 'deep', eyebrow: 'Six formats',
      h2: 'Six math tutoring formats Canadian families choose between',
      lede: 'Every verdict in this grid is our own, and describes a typical example of each format rather than its best or worst. Any single provider can be stronger or weaker than its format.',
      body: [
        { kind: 'table', caption: 'Math tutoring formats in Canada against the seven checks (our verdicts, written October 2026)', head: ['Check', 'Worksheet centre', 'Tutoring centre', 'Enrichment school', 'Live online class', 'Live online 1-on-1', 'Apps and free resources'], rows: [
          ['Diagnoses first', 'Placement test, then levels', 'Usually an assessment', 'Entrance standard', 'Depends on the provider', 'Easiest to do well', 'Some apps adapt'],
          ['Explains why', 'Little: the worksheets carry the method', 'Depends on the tutor', 'Usually strong', 'Depends on the teacher', 'Strong if the tutor can teach', 'Varies'],
          ['Province fit', 'Its own sequence', 'Often school-aligned', 'Its own program', 'Possible', 'Strongest', 'Some claim alignment'],
          ['Group size stated', 'Rarely', 'Rarely', 'Rarely', 'Sometimes', 'One student', 'Not applicable'],
          ['Fee printed', 'Often not', 'Often not', 'Often not', 'Mixed', 'Mixed', 'Often free to start'],
          ['Stretch beyond school', 'Moving ahead in levels', 'Sometimes', 'Strong', 'Possible', 'Strong if asked', 'Limited'],
          ['No answers handed over', 'Yes, by design', 'Depends on the tutor', 'Yes', 'Depends on the teacher', 'Easiest to check', 'Many apps show worked answers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Centres: routine and a room',
          left: [
            'Worksheet centres and tutoring centres give a child a place to go and a fixed rhythm, which suits families who want math to happen at the same time each week.',
            'Their limit is the hour itself. In a centre built on worksheets the method is in the paper; in a busy tutoring centre the tutor may be sharing the hour with several students at once.'
          ],
          rightH3: 'Online: reach and attention',
          right: [
            'Online tutoring reaches every province equally and shares a screen, so the tutor sees each line the student writes. For a student in a town with no centre, it is often the only choice that includes a specialist.',
            'The trade-off between an online class and online one-to-one is the same as in coding: a class gives company and a lower monthly fee; one-to-one follows your child\'s own course and pace.'
          ] }
      ]
    },
    {
      id: 'voices', tint: 'tint', eyebrow: 'In providers\' own words',
      h2: 'What tutoring providers in Canada say about how they work',
      lede: 'A few examples of each format, quoted from each provider\'s own site as read on 22 October 2026. They show how formats differ in practice. Nothing here is a ranking or an endorsement, and we have no tie to any of them.',
      body: [
        { kind: 'table', caption: 'Math tutoring providers in Canada, quoted from their own pages on 22 October 2026', head: ['Kind of provider', 'Provider', 'Quoted from its site', 'Any fee on that page?'], rows: [
          ['Worksheet centre', 'Kumon Canada', '"advancing step by logical step in just 30 minutes per day, per subject."; "Two days a week your child completes assignments at a Kumon centre"; "Not all Kumon Centres are currently offering virtual classes."', 'Not on the pages we read'],
          ['Tutoring centre with online option', 'Mathnasium Canada', '"foundational-to-advanced math instruction for students in grades K-12"; "Mathnasium tutors hold live sessions online"; "Pricing varies by program and geographic area."', 'No figure'],
          ['Tutoring centre with online option', 'Oxford Learning', '"We Have Over 130 Centres Across Canada!"; "LIVE: students work with tutors via screen-sharing technology."; "all Oxford Learning locations offer a competitive hourly rate"', 'No figure'],
          ['Tutoring centre', 'Scholars Education', '"Students who attend a minimum of two, one-hour sessions per week"', 'No'],
          ['Enrichment school', 'Spirit of Math', '"students who consistently perform at a B+ level or higher"; "Each 90-minute class integrates the elements of our approach"; "in-person campuses are in over 30 locations across Canada."', 'No'],
          ['Live online classes', 'StudyPug', '"All our online classes are through Zoom."', 'Not recorded here'],
          ['Game-based practice', 'Prodigy', '"Prodigy\'s Math and English content are free"', 'Membership for extras'],
          ['Free resources', 'CEMC, University of Waterloo', 'Courseware: "No registration is required to access these resources."', 'Free']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.kumon.com/ca-en/home" rel="noopener" target="_blank">Kumon Canada</a>, <a class="ag-inline-link" href="https://www.mathnasium.com/ca/faq" rel="noopener" target="_blank">Mathnasium Canada</a>, <a class="ag-inline-link" href="https://oxfordlearning.com/online-tutoring-at-home-with-virtual-table/" rel="noopener" target="_blank">Oxford Learning</a>, <a class="ag-inline-link" href="https://www.scholarsed.com/" rel="noopener" target="_blank">Scholars Education</a>, <a class="ag-inline-link" href="https://spiritofmath.com/spirit-of-math-program/" rel="noopener" target="_blank">Spirit of Math</a>, <a class="ag-inline-link" href="https://www.studypug.com/learning/en/classes/math/" rel="noopener" target="_blank">StudyPug</a>, <a class="ag-inline-link" href="https://www.prodigygame.com/Memberships/math/" rel="noopener" target="_blank">Prodigy</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a>, each read raw on 22 October 2026. We do not reprint anyone else\'s fees.' },
        { kind: 'two', mt: true,
          leftH3: 'What the quotes reveal',
          left: [
            'Read side by side, the providers\' own words describe very different hours. Thirty minutes of worksheets a day, a ninety-minute enrichment class with an entry bar, two one-hour sessions a week at a centre, a live screen-share: each is a reasonable product for a particular child.',
            'The mistake is choosing on the brand rather than on the hour. Ask what your child will actually be doing for most of each session.'
          ],
          rightH3: 'What the quotes leave out',
          right: [
            'Few of the pages we read print a fee or a maximum group size. Those two facts are the easiest way to compare like with like, and the hardest to find.',
            'We print both. The fee panel further down lists what a month with us costs, shown in the currency of wherever you are, and a class is either a group of fifteen to twenty or a single student.'
          ] }
      ]
    },
    {
      id: 'checkpoints', tint: 'deep', eyebrow: 'Provincial checkpoints',
      h2: 'The math checkpoints a tutor should know in each province',
      lede: 'A tutor who knows these dates and rules can plan backwards from them. Each row comes from the provincial ministry or assessment office, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Provincial math checkpoints for 2026 to 2027 (from each province\'s own pages)', head: ['Province', 'Checkpoint', 'What the official source says'], rows: [
          ['Ontario', 'EQAO Grade 3 and Grade 6', 'EQAO lists both for 4 May to 8 June 2027. EQAO says its tests "assess students\' literacy (reading and writing) and numeracy (mathematics) knowledge and skills".'],
          ['Ontario', 'EQAO Grade 9 Assessment of Mathematics', 'EQAO lists 12 January to 5 February 2027, and says "Results of this assessment are to be included as part of a student\'s final course mark".'],
          ['Ontario', 'Grade 9 math (MTH1W, de-streamed)', '"Students will use mathematical processes, mathematical modelling, and coding to make sense of the mathematics they are learning"'],
          ['Ontario', 'Grade 12 Advanced Functions (MHF4U)', 'Prerequisite: "Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation"'],
          ['Ontario', 'Grade 12 Calculus and Vectors (MCV4U)', '"The new Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U)"'],
          ['Alberta', 'Diploma exams, including Mathematics 30-1 and 30-2', '"70% of the final mark comes from course work. The remaining 30% comes from the diploma exam."'],
          ['Alberta', 'Provincial Achievement Tests', '"administered annually to all Alberta students in grades 6 and 9"'],
          ['British Columbia', 'The senior math course family', 'The ministry lists Foundations of Mathematics and Pre-calculus 10, Pre-calculus 11, Pre-calculus 12, Foundations of Mathematics 11 and 12, Workplace Mathematics 10, Calculus 12 and Statistics 12, among others'],
          ['Quebec', 'Secondary Cycle Two options', '"the Cultural, Social and Technical option, the Technical and Scientific option and the Science option"; "All of these options allow students to enroll in a preuniversity program."']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO assessments</a> and <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/grade-9-math/" rel="noopener" target="_blank">Grade 9 math</a>; Ontario\'s curriculum content service for MTH1W, MHF4U and MCV4U; <a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Alberta diploma exams</a> and <a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">PATs</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics" rel="noopener" target="_blank">BC mathematics curriculum</a>; the Quebec Education Program for Secondary Cycle Two mathematics. All read 22 October 2026. We teach alongside school courses and do not grant credits in any province.' },
        { kind: 'two', mt: true,
          leftH3: 'What a tutor should do with these dates',
          left: [
            'In Ontario, a Grade 9 student writes the EQAO math assessment in the first weeks of 2027, and the result counts in the course mark. A tutor who starts in October 2026 has about ten weeks to work with; one who starts in January has almost none.',
            'In Alberta, three tenths of a Math 30-1 mark rests on one exam. That changes what tutoring should look like in the last months: timed practice and exam habits, not only new content.'
          ],
          rightH3: 'Why the prerequisite chain matters most',
          right: [
            'The Grade 12 university courses sit at the end of a chain. In Ontario, MCV4U needs MHF4U before it or alongside it, and MHF4U needs Grade 11 Functions. A gap left in Grade 10 shows up two years later in a course a university asks for.',
            'University computer science programs make this concrete: Waterloo lists Advanced Functions and Calculus and Vectors for Ontario applicants, and the University of Toronto lists MCV4U for computer science at St. George.'
          ] }
      ]
    },
    {
      id: 'gapfinder', tint: 'tint', eyebrow: 'Our gap finder',
      h2: 'A six-question gap finder you can try at the kitchen table',
      lede: 'We wrote these six questions to find where a math gap starts. They are ours, not from any test, and they are not a grade-level exam. Ask your child to answer aloud and explain each one. The explanation tells you more than the answer, and a tutor worth hiring should be able to use the result in the first session.',
      body: [
        { kind: 'table', caption: 'The gap finder: six questions, answers, and what a wrong answer usually reveals (ours)', head: ['Question', 'Answer', 'A common wrong answer', 'What the wrong answer reveals'], rows: [
          ['1. Which is larger, 0.7 or 0.65? Why?', '0.7, because 7 tenths is 70 hundredths, more than 65 hundredths', '0.65, "because 65 is bigger than 7"', 'Place value: decimals read as whole numbers. Usually from Grades 4 to 6.'],
          ['2. What is 3/4 divided by 1/2? Explain without the "flip" rule.', '1 and 1/2: one half fits into three quarters one and a half times', '3/8, by multiplying straight across', 'Division as "how many fit", never learned; the rule was memorised without meaning.'],
          ['3. A jacket is 20% off, then 10% off the sale price. Is that 30% off?', 'No: 0.8 times 0.9 is 0.72, so 28% off in total', 'Yes, 30%', 'Percent as a fixed amount rather than a fraction of a changing whole. Grades 7 to 9.'],
          ['4. Solve 2(x + 3) = 14, and say what each step does to both sides.', 'x = 4: divide both sides by 2 to get x + 3 = 7, then subtract 3', 'x = 5.5, from 2x + 3 = 14', 'The distributive property, and the equals sign as a balance. Grades 8 to 9.'],
          ['5. If y = 3x + 2, what happens to y when x goes up by 1?', 'y goes up by 3, every time', '"It goes up by 5"', 'Slope as a rate of change. This is the bridge to Grade 10 and 11 functions.'],
          ['6. If f(x) = 2 to the power x, how does f(x + 1) compare with f(x)?', 'It is double: f(x + 1) = 2 times f(x)', '"It is one more"', 'Exponential growth confused with linear growth. Grades 11 and 12, MCR3U and MHF4U.']
        ] },
        { kind: 'p', mt: true, html: '<b>How to read the result.</b> Stop at the first question your child cannot explain, even if they get the next one right. That first question is where a tutor should begin, whatever grade your child is in. A Grade 11 student who stumbles at question 3 needs a few weeks on fractions and percent before functions will feel easier; that is not a step backwards, it is the shortest route forward.' },
        { kind: 'code', label: 'Question 3, checked with a short program (ours)', lang: 'python', code: DISC, note: 'We ran this in Python on 22 October 2026. The order of the two discounts does not matter, and two 30% discounts make 51% off, not 60%, because the second one is taken from a smaller price. A student who can explain that has understood percent.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: DISC_OUT },
        { kind: 'two', mt: true,
          leftH3: 'Using the gap finder in a trial session',
          left: [
            'Give a tutor the result before the first session, and ask what they would do with it. A strong tutor will start at the earliest shaky question, not at this week\'s homework.',
            'Then watch for check two in action: ask the tutor to explain question 2 to your child without the flip rule. If they can, they can teach.'
          ],
          rightH3: 'What the questions are not',
          right: [
            'They are not a test of intelligence, and they are not tied to one province\'s curriculum. Six questions cannot cover everything a grade teaches.',
            'They are a quick way to see whether the problem is the newest topic or an older idea underneath it, which is the single most useful thing to know before paying for tutoring.'
          ] }
      ]
    },
    {
      id: 'stretch', tint: 'deep', eyebrow: 'Beyond school math',
      h2: 'For students who are ahead: the CEMC contests',
      lede: 'Check six asks what a tutor offers a student who finds school math easy. In Canada the natural answer is the contests set by the University of Waterloo\'s Centre for Education in Mathematics and Computing (CEMC), which students write at school.',
      body: [
        { kind: 'table', caption: 'CEMC math contests for 2026 to 2027, as CEMC lists them (read 22 October 2026)', head: ['Contest', 'Who', 'When (North and South America)', 'Format'], rows: [
          ['Gauss', '"Students in Grades 7 and 8."', 'Monday, May 10, 2027 to Friday, May 21, 2027', '"25 multiple-choice questions." 60 minutes'],
          ['Pascal, Cayley, Fermat', 'Grade 9, Grade 10 and Grade 11 respectively', 'Tuesday, February 23, 2027 and Wednesday, February 24, 2027', '25 multiple-choice questions, 60 minutes'],
          ['Euclid', '"Students in their final year of secondary school or CÉGEP students."', 'Tuesday, April 6, 2027', '"10 questions; a mix of final answer only and full-solution." 2.5 hours']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/gauss" rel="noopener" target="_blank">Gauss</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">Pascal, Cayley and Fermat</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/euclid" rel="noopener" target="_blank">Euclid</a> and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests overview</a>, read 22 October 2026. Entry is through schools: CEMC says "all students must participate through their school." Modern Age Coders is not connected with CEMC.' },
        { kind: 'two', mt: true,
          leftH3: 'Why contests suit tutoring',
          left: [
            'CEMC is clear on its own pages: "Our contests are not tests or exams. There is no passing or failing score." That makes them a low-pressure stretch for a student who is bored in class.',
            'Contest problems also expose the difference between knowing a procedure and understanding it, because the procedure is rarely the obvious one.'
          ],
          rightH3: 'A note for Grade 12 students',
          right: [
            'Waterloo says the CSMC and Euclid are not required for admission to computer science, "but writing one of these contests is required for some scholarships offered by the Faculty of Mathematics."',
            'Our <a class="ag-inline-link" href="/courses/waterloo-math-contests-gauss-to-euclid-course">Waterloo Math Contests course</a> prepares students from Gauss to Euclid with problems our teachers write, and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> covers the full set.'
          ] }
      ]
    },
    {
      id: 'firstmonth', tint: 'tint', eyebrow: 'The first month',
      h2: 'What the first month with a new math tutor should look like',
      lede: 'Our view of a good first month, in order. If a tutor\'s first month looks very different, ask why; there may be a good reason, and you should hear it.',
      body: [
        { kind: 'ol', items: [
          '<b>Session 1: diagnosis.</b> A short check, such as the gap finder above, and a conversation about the school course, the next test date and what the student finds hardest.',
          '<b>Sessions 2 to 3: the earliest gap.</b> Work on the first idea the diagnosis found shaky, even if it belongs to an earlier grade, explained with pictures or small numbers before any drill.',
          '<b>Sessions 4 to 5: bridge back to school.</b> Use the repaired idea on this month\'s homework, so the student feels the difference in class, not only in tutoring.',
          '<b>Sessions 6 to 7: the student explains.</b> The student teaches a method back to the tutor, out loud, and solves an unfamiliar question with the tutor only asking questions.',
          '<b>Session 8: a short written update to the family.</b> What was found, what has improved, what comes next, and how it lines up with the next provincial checkpoint.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Signs it is working',
          left: [
            'Homework takes less time and causes fewer arguments. The student starts sentences with "because" when explaining an answer. They attempt a question before asking for help.',
            'Marks often follow, but they lag. A month is long enough to see the habits change and usually too short to see a report card move. We make no promise about marks; we show you the work.'
          ],
          rightH3: 'Signs to change tutor',
          right: [
            'The tutor does most of the writing. Every session is this week\'s homework and nothing earlier. Your child cannot say what they learned. The tutor cannot tell you what the diagnosis found.',
            'Changing is not a failure. The right fit between a tutor and a student matters more than any format or brand.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages of understanding in math',
    lede: 'Our stages, used to place a student in the first class.',
    table: { caption: 'Four stages of math understanding (ours)', head: ['Stage', 'What you hear the student say'], rows: [
      ['1. Recall', '"I know you flip it, I just do not know why."'],
      ['2. Reason', '"It works because dividing by a half asks how many halves fit."'],
      ['3. Connect', '"This is the same idea as the slope question last week."'],
      ['4. Extend', '"If the rule changed like this, the answer would be..." on a problem never seen before']
    ] },
    left: { h3: 'For parents', ps: [
      'Report cards measure answers, so a student can reach a good mark at stage 1 and fall when the course moves on. Stage 2 is what lasts.',
      'Listen to how your child explains homework. The words "because" and "so" are the best sign that tutoring is working.'
    ] },
    right: { h3: 'For students', ps: [
      'When you check an answer, check the reason too. If you cannot say why a step is allowed, mark it and ask.',
      'If you use an app that shows worked solutions, cover the solution, try the question, then compare. Copying the steps teaches you to copy.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math courses for Canadian students',
    lede: 'Live, online and led by one teacher who stays with the group; choose a batch or private lessons.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Kindergarten to Grade 8', courses: [
        { code: 'BMTC / BASE / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Concrete, playful math for ages 4 to 7.' },
        { code: 'BMTC / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Math for Kids', blurb: 'Number sense rather than tricks, ages 5 to 10.' },
        { code: 'BMTC / BASE / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Grades 7 to 9, or any student whose algebra needs a rebuild.' }
      ] },
      { num: 'II', h3: 'Senior high school', sub: 'Grades 11 and 12', courses: [
        { code: 'BMTC / SR / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 University Math', blurb: 'Alongside MHF4U and MCV4U at school; no credits granted.' },
        { code: 'BMTC / SR / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Pre-calculus 12 and Math 30-1', blurb: 'For BC and Alberta students in Grade 12.' },
        { code: 'BMTC / SR / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Data and chance, for older students and adults.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Contests and math through code', courses: [
        { code: 'BMTC / UP / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'Gauss to Euclid, with problems our teachers write.' },
        { code: 'BMTC / UP / 02', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Math learned by building it in Python, ages 10 to 15.' },
        { code: 'BMTC / UP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition Mathematics', blurb: 'Olympiad-style problem solving for strong students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our math classes run',
    h2: 'Live online math lessons across Canada',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, set in your province\'s own time.' },
      { time: 'Weekends', l: 'Weekend mornings for students with full school weeks.' },
      { time: '1-on-1', l: 'Planned around the next test or provincial checkpoint.' }
    ],
    cells: [
      { h3: 'Diagnose first', p: 'A short check in the first class finds the earliest gap.' },
      { h3: 'Why before how', p: 'Every method explained before it is practised.' },
      { h3: 'Your course code', p: 'MTH1W, MCR3U, Math 30-1 or Pre-calculus 12, by name.' },
      { h3: 'Pencil stays with the student', p: 'The teacher asks; the student writes and explains.' },
      { h3: 'Group size in writing', p: 'Fifteen to twenty in a group, or a single student.' },
      { h3: 'Written updates', p: 'Short notes to the family on what changed.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Many of our math students also code, and some combine the two. A few projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'What parents wrote on Google, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Check five, applied to us: the monthly fee appears here in your own currency. Months are paid one at a time, with nothing to sign for the school year.',
    free: ['A free first class', 'A short diagnostic', 'No card details needed'],
    group: ['Groups of 15 to 20', 'Eight live lessons monthly', 'One teacher who knows the course code'],
    one: ['One student, one teacher', 'Planned to your course code', 'Times your family chooses']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Choosing a math tutor in Canada: questions and answers',
    items: [
      { q: 'What makes the best online math tutor in Canada?', a: 'We give checks rather than a ranking. A strong tutor diagnoses before teaching, explains why methods work, knows your province\'s course and its checkpoints, states the group size, prints the fee, can stretch a student who is ahead, and never hands over answers.' },
      { q: 'Is online math tutoring as good as in person?', a: 'For most students it can be, because the tutor sees every line the student writes on a shared screen. In-person centres offer routine and a room. Judge the hour, not the setting: who is doing the thinking for most of it?' },
      { q: 'Should my child have a 1-on-1 tutor or join a group?', a: 'One-to-one suits a student with a specific course, a gap to repair or an upcoming checkpoint. A small group suits a student who likes company and is roughly at grade level. We teach batches of 15 to 20 and one to one.' },
      { q: 'How do I know where my child\'s math gap really is?', a: 'Try the six-question gap finder on this page and stop at the first question your child cannot explain. That question, not the newest topic, is usually where tutoring should start.' },
      { q: 'Can a tutor help with EQAO in Ontario?', a: 'Yes, by building the skills the assessments measure rather than drilling the test. EQAO lists the Grade 3 and 6 assessments for 4 May to 8 June 2027, and the Grade 9 math assessment for 12 January to 5 February 2027, where results count in the course mark.' },
      { q: 'Can you help with Grade 12 math such as MHF4U, MCV4U, Math 30-1 or Pre-calculus 12?', a: 'Yes. We teach alongside the school course and do not grant credits. Our Ontario Grade 12 University Math course covers MHF4U and MCV4U, and our Western Canada course covers Pre-calculus 12 and Math 30-1.' },
      { q: 'Do you teach Quebec secondary math?', a: 'We teach the math behind the Secondary 4 and 5 options. Quebec\'s program describes three options, Cultural, Social and Technical, Technical and Scientific, and Science, and says all three allow entry to a pre-university program.' },
      { q: 'My child is ahead in math. What should a tutor offer?', a: 'Harder problems, not just faster worksheets. The CEMC contests are a good path: Gauss for Grades 7 and 8, Pascal, Cayley and Fermat for Grades 9 to 11, and Euclid in the final year, all written at school.' },
      { q: 'Is it a problem if my child uses apps that show worked answers?', a: 'Only if the answer is copied instead of checked. We ask students to try a question first, then compare with any app or AI answer line by line. ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'What times do you teach for families in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in your province\'s own clock.' },
      { q: 'How soon should we see results?', a: 'Habits change first: less time on homework, more explanations that start with because. Marks usually follow later. We do not promise marks; we send short written updates so you can see the work.' },
      { q: 'Are you the best math tutor in Canada?', a: 'We will not make that claim. We publish our group sizes and our monthly fee, teach live, start with a diagnosis, and invite you to judge the first class against the seven checks on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families thinking about math help.',
    items: [
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Our main math page for Canadian students, with course cards.' },
      { href: '/canada-high-school-math-courses-compared', label: 'High school math by province', p: 'Ontario, BC, Alberta and Quebec courses, side by side.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Preparation for Gauss through Euclid.' },
      { href: '/gauss-contest-preparation', label: 'Gauss contest preparation', p: 'The Grade 7 and 8 contest in detail.' },
      { href: '/pascal-contest-preparation', label: 'Pascal contest preparation', p: 'The Grade 9 contest and how to practise for it.' },
      { href: '/group-vs-one-to-one-maths-tuition', label: 'Group or one-to-one?', p: 'How to decide between a class and a tutor of your own.' },
      { href: '/online-math-tutor-cost', label: 'What a math tutor costs', p: 'How tutoring fees are built, and what to compare.' },
      { href: '/coding-vs-maths', label: 'Coding or math first?', p: 'For families deciding where to start.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'Every province\'s clock for the 2026 to 2027 school year.' }
    ]
  },

  start: {
    h2: 'Book a free first math class',
    lede: 'The first class begins with a short diagnosis at your child\'s level and ends with a plain answer: where the earliest gap is, what the next eight classes should cover, and whether a batch or one to one would suit.',
    readFirst: 'Prefer to look first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows recorded lessons, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus in full.',
    note: 'Our math teachers work from India and teach every lesson live over video, so a student in Saskatoon and one in Saint John get the same teacher and the same class. Message us on WhatsApp for the quickest reply.',
    formNote: 'The first class is free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/canada-high-school-math-courses-compared', label: 'Math courses by province' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/pricing', label: 'Fees' }
      ] }
    ],
    bottomRight: 'Start where the gap starts'
  },

  personalityCss: `
.ag-root.ag-bmtc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-bmtc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-bmtc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-bmtc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bmtc .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-bmtc .ag-slots { gap: 1.4rem; }
`,

  dossier: {
    curriculumAuthority: 'Provider sites read raw 22 October 2026 (Kumon Canada, Mathnasium Canada, Oxford Learning, Scholars Education, Spirit of Math, StudyPug, Prodigy) for format and fee publication; EQAO assessments and Grade 9 pages; Ontario DCP for MTH1W, MHF4U and MCV4U; Alberta diploma exams and PATs; BC mathematics curriculum; Quebec Education Program Secondary Cycle Two mathematics; CEMC Gauss, PCF, Euclid, contests overview, courseware; Waterloo CS and UofT CS admission pages.',
    localProject: 'Our seven checks; the six-format table; a six-question gap finder (decimals, fraction division, successive percent, distributive equations, slope, exponential growth) with answers and what each wrong answer reveals; a Python check on successive discounts (28.0, 28.0 and 51.0 percent, run 22 October 2026); a first-month plan. Lesson family: diagnosis.',
    requiredMentions: ['advancing step by logical step in just 30 minutes per day, per subject.', 'Pricing varies by program and geographic area.', 'LIVE: students work with tutors via screen-sharing technology.', 'Students who attend a minimum of two, one-hour sessions per week', 'All our online classes are through Zoom.', 'A six-question gap finder you can try at the kitchen table', '30% then 30%: 51.0% off in total', 'Start where the gap starts', 'Six math tutoring formats Canadian families choose between', 'What is 3/4 divided by 1/2? Explain without the'],
    sources: [
      { claim: 'Worksheet centre format: 30 minutes per day per subject, two centre days a week, virtual classes not everywhere.', url: 'https://www.kumon.com/ca-en/home' },
      { claim: 'Tutoring centre with live online sessions; pricing varies by program and area.', url: 'https://www.mathnasium.com/ca/faq' },
      { claim: 'Over 130 centres across Canada; live screen-sharing tutoring; competitive hourly rate with no figure.', url: 'https://oxfordlearning.com/pricing/' },
      { claim: 'Enrichment school with a B+ entry bar and 90-minute classes; over 30 locations across Canada.', url: 'https://spiritofmath.com/spirit-of-math-program/' },
      { claim: 'EQAO 2026 to 2027 windows; Grade 9 results count in the course mark.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'Alberta diploma exams weighted 30 percent of the final mark; Math 30-1 and 30-2.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'CEMC Gauss, Pascal, Cayley, Fermat and Euclid dates and formats; contests are not tests or exams.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'A ranking of named providers, or a claim that Modern Age Coders is the best: refused.',
      'Any provider fee or hourly rate figure, including one with no stated currency: not printed.',
      'Mathnasium centre counts described as nationwide, and Sylvan\'s combined US and Canada count: not Canadian figures, not used.',
      'EQAO dates quoted with the source\'s en dashes: paraphrased as 4 May to 8 June 2027 and 12 January to 5 February 2027 instead.',
      'Promises of better marks or EQAO results: refused; the page says marks lag and makes no promise.',
      'A free provincial tutoring service seen only in search results: not used, because it was not read at its primary source.',
      'Any affiliation with CEMC, EQAO or any provider named: none.'
    ]
  }
};
