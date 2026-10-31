'use strict';
// Duke TIP alternatives (ag- guide door; UK and US exams cluster Phase 2, row US079, writer group B16). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, rules 9 and 10 (neutral, facts from each organisation's own
// site, no prices, no "better than"). Every fact read raw with curl -A "Mozilla/5.0" on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/duke-tip-alternatives/:
//  - Duke Office of the Provost, notice on the death of Duke TIP's founding executive director (provost-sawyer.html):
//    Duke TIP founded after a 1980 request from Duke's provost; the plan "to invite 7th graders to take the SAT"; first
//    three-week residential program in summer 1981 with 151 students; "In 2020, the COVID-19 pandemic forced the
//    suspension of the residential summer program, and TIP and the Academic Talent Search were permanently closed later
//    that year."; Duke's summer offering "continues through the Duke Pre-College program"; "standardized testing is no
//    longer used as a primary means of assessment". Individuals named in the notice are not named on the page.
//  - tip.duke.edu and alumni.tip.duke.edu: both redirect (301) to provost.duke.edu/pre-college-programs (curl -I, 31 Oct).
//  - Duke Pre-College (tip.html): "2027 dates and courses will be announced in late October 2026"; "Registration will open
//    in December 2026"; Middle School current grades 6 to 8, High School current grades 9 to 12; "Students must have a
//    3.0+ GPA"; "Duke Pre-College will not offer online courses for the summer of 2027."; programming "managed by
//    EngageU" for summer 2026. Fees not printed.
//  - Northwestern Center for Talent Development (ctd.html, ctd-elig.html, ctd-assess.html, ctd-online.html): "Since 1982";
//    online classes for "kids and teens ages 4 to 18"; eligibility tiers: Amber open enrollment ("No test scores or
//    portfolio materials needed to enroll."), Emerald ("90th percentile or above on a nationally normed, standardized
//    grade-level achievement test"), Magenta (95th percentile), Indigo (above-grade-level or grade-level ACT or SAT, or
//    PSAT 8/9, SCAT or I-Excel in grade 5 or 6); "CTD accepts test scores or an admission portfolio for most courses";
//    "Above-Grade-Level Assessment (Grades 2 - 9)" (hyphen range written "grades 2 to 9").
//  - University of Iowa Belin-Blank Center (belin.html, belin-bests.html): "Above-level testing" defined as giving "a
//    younger student a test that was developed for older students"; "hitting the ceiling"; "the Belin-Blank Center is not
//    currently providing above-level testing" and it recommends WKU's Center for Gifted Studies, Northwestern's CTD and
//    the Johns Hopkins Center for Talented Youth; summer institutes and weekend enrichment.
//  - Western Kentucky University, The Center for Gifted Studies (wku.html): "Serving gifted students, their teachers, and
//    their parents since 1982"; student programs incl. SCATS, VAMPY, Super Saturdays, Talent Identification Program of
//    Kentucky.
//  - Stanford Pre-Collegiate Studies (spcs.html, spcs-programs.html): "five summer programs and two academic year
//    programs"; SUMaC for "rising high school juniors and seniors"; Stanford Math Circle; University-Level Online Math &
//    Physics with Stanford University Continuing Studies credit.
// Blocked, not retried: cty.jhu.edu (403 noted by the coordinator), Purdue GERI (request rejected), Davidson Institute and
// Art of Problem Solving (403). Johns Hopkins CTY is mentioned only as named in Belin-Blank's list.
// Our own material, labelled on the page: the ceiling-effect illustration (two students at 40 of 40 on a grade-level
// test), the criteria checklist, the trailing-zeros worked problem (25! has 6, 100! has 24), the practice set (35, 5050,
// last digit 9, 24, 204) checked in Python, and the family plan. Lesson family: counting factors rather than multiplying.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GIFTED PROGRAMS', blurb: 'Duke TIP closed in 2020. What Duke says happened, and the talent-search and enrichment programs families now use, each described from its own site.' },
  slug: 'duke-tip-alternatives',
  code: 'dta',
  accent: '#88557C',
  accentRationale: 'Duke TIP alternatives: the allocated dusky plum #88557C, quiet and scholarly; about 5.4:1 on the #FBF8F2 paper, above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Duke TIP alternatives',
  title: 'Duke TIP Alternatives: Gifted Programs Since TIP Closed',
  description: 'Duke TIP alternatives: what Duke says about TIP closing in 2020, and the talent search and enrichment programs families use now, each from its own site.',
  ogDescription: 'Duke TIP and its Academic Talent Search closed for good in 2020. Here is Duke\'s own account, and a neutral, checked guide to the university programs that still offer talent searches, above-level testing and advanced classes.',
  twitterDescription: 'Duke TIP closed in 2020. A neutral guide to the programs families use now, from their own sites.',
  pageName: 'Duke TIP Alternatives',
  webPageDescription: 'A neutral guide for US families who once relied on the Duke Talent Identification Program: Duke\'s own account of TIP\'s closure, Duke Pre-College today, and talent search, above-level testing and enrichment programs at Northwestern, the University of Iowa, Western Kentucky University and Stanford, each described from its own pages.',
  courseDescription: 'Live online advanced math and problem-solving classes for academically strong US students in grades 4 to 12, in a batch or one to one, with no test required to join.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Duke TIP alternatives',
  navLinks: [
    { href: '#closed', label: 'What happened' },
    { href: '#options', label: 'The options' },
    { href: '#testing', label: 'Above-level testing' },
    { href: '#choose', label: 'How to choose' },
    { href: '#stretch', label: 'Stretch problems' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 2 to 12 &middot; After Duke TIP',
  h1: 'Duke TIP alternatives: where gifted students go now',
  lede: 'For forty years, the Duke Talent Identification Program was where many families in the South and Midwest first heard their child described as ready for more. Then it was gone. This page sets out what Duke itself says happened, what Duke offers today, and the university-based programs that still run talent searches, above-level testing and advanced courses. Each program is described only from its own website, read on 31 October 2026, with no rankings and no prices, so you can compare them on what matters to your child.',
  secondaryCta: { href: '#options', label: 'Compare the options' },
  wa: 'Hello Modern Age Coders, my child in the US would have gone to Duke TIP and needs more challenge in math. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Duke TIP', 'Closed in 2020'],
    ['Duke today', 'Duke Pre-College, summer'],
    ['Talent search', 'Northwestern CTD and others'],
    ['Above-level testing', 'Grades 2 to 9 at CTD'],
    ['Our lessons', 'Live online, no test to join'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Duke TIP, the Duke University Talent Identification Program, and its Academic Talent Search were permanently closed in 2020, according to Duke\'s Office of the Provost; Duke now runs a summer Duke Pre-College program instead. Families looking for a replacement usually turn to university talent-development centers such as Northwestern\'s CTD, or to enrichment and advanced classes. Modern Age Coders, which has no link to Duke, offers live online advanced math in a 15 to 20 batch or 1-on-1, with no test needed.',

  picks: {
    eyebrow: 'Challenge without a test',
    h2: 'Three courses for students who want more math',
    lede: 'Each is open to any student who is ready, with placement by a conversation and a sample of work rather than a score.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'DTA / 01', title: 'Olympiad and competition math', note: 'AMC-style problem solving and proof, from middle school up.' },
      { course: 'middle-school-math-competitions-course', code: 'DTA / 02', title: 'Middle school competition math', note: 'MATHCOUNTS, AMC 8 and Math Kangaroo problem solving.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'DTA / 03', title: 'High school math, algebra to calculus', note: 'Working ahead of grade level with real understanding.' }
    ]
  },

  sections: [
    {
      id: 'closed', tint: 'tint', eyebrow: 'What happened',
      h2: 'Did Duke TIP close, and what replaced it?',
      lede: 'Yes. Duke\'s Office of the Provost states that the pandemic forced TIP\'s residential summer program to stop in 2020, and that TIP and the Academic Talent Search were permanently closed later that year. Duke\'s summer offering now continues as Duke Pre-College.',
      body: [
        { kind: 'two',
          leftH3: 'Duke\'s own account',
          left: [
            'A notice published by Duke\'s provost office tells the story. Duke TIP began after a 1980 request from Duke\'s provost, with a plan "to invite 7th graders to take the SAT" and offer high scorers further opportunities. The first three-week residential program welcomed 151 students in the summer of 1981.',
            'The same notice says: "In 2020, the COVID-19 pandemic forced the suspension of the residential summer program, and TIP and the Academic Talent Search were permanently closed later that year." The old tip.duke.edu address now redirects to Duke\'s pre-college page.'
          ],
          rightH3: 'Duke Pre-College today',
          right: [
            'Duke Pre-College runs summer programs for students currently in grades 6 to 8 and 9 to 12. Its page says "2027 dates and courses will be announced in late October 2026" and "Registration will open in December 2026", and that it "will not offer online courses for the summer of 2027."',
            'It is a different kind of program from TIP. Duke\'s notice says that at Pre-College "standardized testing is no longer used as a primary means of assessment", and the program page says "Students must have a 3.0+ GPA" to participate.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://provost.duke.edu/news/duke-flags-lowered-robert-n-sawyer-founder-duke-tip-dies/" rel="noopener" target="_blank">Duke Office of the Provost notice on Duke TIP\'s founder</a> and <a class="ag-inline-link" href="https://provost.duke.edu/pre-college-programs/" rel="noopener" target="_blank">Duke Pre-College Programs</a>, read 31 October 2026. Modern Age Coders is not connected with Duke University or any program on this page.' }
      ]
    },
    {
      id: 'options', tint: 'deep', eyebrow: 'The options',
      h2: 'What are the alternatives to Duke TIP?',
      lede: 'There is no single replacement. Instead, several long-running university centers offer parts of what TIP did: identification through testing, summer and weekend programs, and advanced online courses. The table describes each from its own site.',
      body: [
        { kind: 'table', caption: 'University gifted and enrichment programs, described from their own sites (pages read 31 October 2026)', head: ['Program', 'Who runs it', 'Who it serves, as published', 'Is a test needed?'], rows: [
          ['Center for Talent Development (CTD)', 'Northwestern University, since 1982', 'Online classes for kids and teens ages 4 to 18; summer, weekend and online programs', 'Depends on the tier: Amber is open enrollment; higher tiers ask for scores or a portfolio'],
          ['Belin-Blank Center', 'University of Iowa, since 1988', 'Summer institutes, weekend enrichment, early-entrance academies', 'It is not currently providing above-level testing'],
          ['The Center for Gifted Studies', 'Western Kentucky University, since 1982', 'Programs including SCATS, VAMPY, Super Saturdays and the Talent Identification Program of Kentucky', 'Varies by program; check each one'],
          ['Stanford Pre-Collegiate Studies', 'Stanford University', 'Five summer and two academic-year programs, including SUMaC for rising juniors and seniors', 'Application-based; varies by program'],
          ['Duke Pre-College', 'Duke University', 'Summer programs for current grades 6 to 8 and 9 to 12', 'No primary test; a 3.0+ GPA is required']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Northwestern CTD tiers',
          left: [
            'CTD sorts courses into eligibility tiers. Amber courses are open enrollment: "No test scores or portfolio materials needed to enroll." Emerald courses accept a report card plus teacher recommendation, or "90th percentile or above on a nationally normed, standardized grade-level achievement test" such as MAP or STAR.',
            'Magenta asks for the 95th percentile, and the accelerated Indigo tier asks for qualifying ACT or SAT scores, or PSAT 8/9, SCAT or I-Excel taken in grade 5 or 6. CTD says it "accepts test scores or an admission portfolio for most courses".'
          ],
          rightH3: 'Stanford and others',
          right: [
            'Stanford Pre-Collegiate Studies lists SUMaC, which "welcomes a select group of rising high school juniors and seniors" for advanced mathematics, the Stanford Math Circle for after-school math, and University-Level Online Math & Physics with Stanford Continuing Studies credit.',
            'The Belin-Blank Center, which no longer runs above-level testing itself, points families to WKU\'s Center for Gifted Studies, Northwestern\'s CTD and the Johns Hopkins Center for Talented Youth.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ctd.northwestern.edu/eligibility" rel="noopener" target="_blank">Northwestern CTD eligibility</a>, <a class="ag-inline-link" href="https://belinblank.education.uiowa.edu/students/bests" rel="noopener" target="_blank">Belin-Blank Academic Talent Search</a>, <a class="ag-inline-link" href="https://www.wku.edu/gifted/" rel="noopener" target="_blank">WKU Center for Gifted Studies</a> and <a class="ag-inline-link" href="https://spcs.stanford.edu/programs" rel="noopener" target="_blank">Stanford Pre-Collegiate Studies programs</a>, read 31 October 2026. We could not read the Johns Hopkins CTY site (it refused automated requests), so we do not describe it beyond its name. Program names belong to their universities.' }
      ]
    },
    {
      id: 'testing', tint: 'tint', eyebrow: 'Above-level testing',
      h2: 'What is above-level testing, and why did TIP use it?',
      lede: 'Above-level testing means giving a younger student a test written for older students. It was the heart of the old talent searches, including Duke\'s plan to have 7th graders take the SAT, and some centers still offer it.',
      body: [
        { kind: 'two',
          leftH3: 'In the Belin-Blank Center\'s words',
          left: [
            'The Belin-Blank Center explains it simply: "Give a younger student a test that was developed for older students." Bright students often answer almost everything right on a grade-level test, which psychologists call "hitting the ceiling".',
            'A test built for older students has room above, so it shows how far beyond grade level a child really is. That helps a family decide between enrichment, moving up a grade in one subject, or something else.'
          ],
          rightH3: 'A ceiling, in numbers (ours)',
          right: [
            'Imagine two fifth graders who both score 40 out of 40 on a grade 5 math test. The test cannot tell them apart. Now give both a test written for grade 8. One scores 31 of 40 and the other 14 of 40.',
            'Both are strong, but they need different things: the first may be ready to accelerate, while the second may thrive on enrichment at grade level. The numbers are our illustration, not data from any program.'
          ] },
        { kind: 'table', mt: true, caption: 'Where above-level testing is offered today, from the providers\' own pages (read 31 October 2026)', head: ['Provider', 'What the page says'], rows: [
          ['Northwestern CTD', 'Above-grade-level assessment for grades 2 to 9, with tools including the CogAT, Practice PSAT or PreACT, Practice SAT and Practice ACT'],
          ['Northwestern CTD', 'Grade-level tools for younger learners: KTEA, NWEA MAP and CogAT'],
          ['Belin-Blank Center', 'Not currently providing above-level testing; recommends other university programs'],
          ['Duke Pre-College', 'Standardized testing no longer used as a primary means of assessment']
        ] },
        { kind: 'p', mt: true, html: 'Ability and gifted screening tests are a different topic; if your district uses one, our <a class="ag-inline-link" href="/gifted-and-talented-test-prep">gifted and talented test guide</a> explains what they measure and why the honest preparation is broad reasoning, not drilling.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'How to choose',
      h2: 'How do I choose a gifted program for my child now?',
      lede: 'Start from what your child needs, not from the program\'s name. A short checklist helps, and the steps below are a sensible order for a family starting from scratch. Both are ours.',
      body: [
        { kind: 'table', caption: 'A criteria checklist for comparing programs (ours)', head: ['Question to ask', 'Why it matters'], rows: [
          ['Is it enrichment or acceleration?', 'Enrichment goes deeper at grade level; acceleration moves ahead, sometimes for credit'],
          ['What does entry require?', 'Open enrollment, a portfolio, grade-level percentiles or above-level scores'],
          ['Online, weekend or residential?', 'Residential summers suit some children; weekly online classes suit others'],
          ['How long does it last?', 'A two-week camp and a year of weekly classes give very different results'],
          ['Who teaches?', 'Look for subject experts and small, active classes'],
          ['Does it fit the year?', 'Summer programs leave the school year untouched; weekly classes need steady time']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Look at what you already have (ours).</b> School report cards and any MAP, STAR or state test percentiles are often enough for open or portfolio-based entry.',
          '<b>Decide on the goal.</b> Is your child bored and needs depth, or racing ahead and needs pace? That choice rules out half the options.',
          '<b>Consider above-level testing</b> if you want to know how far ahead your child is. CTD lists it for grades 2 to 9.',
          '<b>Pick one structured option for the year</b> and one for the summer, rather than five at once.',
          '<b>Review after a term.</b> If your child is still coasting, move up a level; if stressed, step back.'
        ] }
      ]
    },
    {
      id: 'stretch', tint: 'tint', eyebrow: 'Stretch problems',
      h2: 'What kind of math stretches a gifted student?',
      lede: 'Problems that reward thinking over calculation. Here is one worked example and a short set, all ours, of the kind a former TIP student would enjoy. Each answer was checked in Python.',
      body: [
        { kind: 'two',
          leftH3: 'The problem (ours)',
          left: [
            'How many zeros are at the end of 25! (that is 25 x 24 x 23 x ... x 1)? Multiplying it out gives a 26-digit number. There is a far better way.',
            'A zero at the end comes from a factor of 10, which is 2 x 5. There are plenty of 2s among the factors, so count the 5s.'
          ],
          rightH3: 'The reasoning',
          right: [
            'The multiples of 5 up to 25 are 5, 10, 15, 20 and 25: five numbers, each with one 5. But 25 = 5 x 5 has a second 5. So there are 5 + 1 = 6 fives, and 25! ends in 6 zeros.',
            'The same idea for 100!: 100 / 5 = 20 multiples of 5, plus 100 / 25 = 4 multiples of 25 with an extra 5, giving 24 zeros. Counting factors replaced an impossible multiplication.'
          ] },
        { kind: 'table', mt: true, caption: 'Five stretch problems with answers (ours; checked in Python)', head: ['Problem', 'A way in', 'Answer'], rows: [
          ['How many diagonals does a 10-sided polygon have?', 'Each vertex joins 7 others; halve the double count', '35'],
          ['1 + 2 + 3 + ... + 100', 'Pair 1 with 100, 2 with 99, ...', '5050'],
          ['Last digit of 7 to the power 2026', 'Last digits cycle 7, 9, 3, 1', '9'],
          ['Zeros at the end of 100!', 'Count 5s, then 25s', '24'],
          ['How many squares of any size on a chessboard?', '64 + 49 + 36 + ... + 1', '204']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four kinds of mathematical readiness',
    lede: 'Our own way of describing what an able child may need next.',
    table: { caption: 'Readiness and what tends to help (ours)', head: ['What you see', 'What often helps'], rows: [
      ['Finishes schoolwork fast, bored', 'Enrichment: richer problems at the same level'],
      ['Already knows next year\'s topics', 'Acceleration in that subject'],
      ['Loves puzzles, struggles with speed', 'Problem-solving classes and contests'],
      ['Ready for proof and depth', 'Competition math and university-style courses']
    ] },
    left: { h3: 'For parents', ps: [
      'A child can be in different places in different subjects. Plan math separately from reading.',
      'Challenge should feel hard but doable. Frustration every week means the level is wrong.'
    ] },
    right: { h3: 'For students', ps: [
      'If a problem looks like it needs a huge calculation, look for a pattern first.',
      'Getting stuck is part of the work. Write down what you tried; it often shows the way.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Advanced math and thinking courses',
    lede: 'Live online courses for students ready for more, open without a qualifying test.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 2 to 5', courses: [
        { code: 'DTA / E / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and logic.' },
        { code: 'DTA / E / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles and algorithms.' },
        { code: 'DTA / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'DTA / M / 01', slug: 'middle-school-math-competitions-course', title: 'Competition math', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'DTA / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra early', blurb: 'Pre-algebra to Algebra 1.' },
        { code: 'DTA / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Ideas in Python.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'DTA / H / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad math', blurb: 'AMC, AIME and proof.' },
        { code: 'DTA / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'DTA / H / 03', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Beyond calculus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Advanced math, all year, from home',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening classes alongside school.' },
      { time: 'Weekends', l: 'Longer problem-solving sessions.' },
      { time: '1-on-1', l: 'For a child far ahead in one subject.' }
    ],
    cells: [
      { h3: 'No entry test', p: 'Placement by a free first class.' },
      { h3: 'Depth and pace', p: 'Enrichment or acceleration, as needed.' },
      { h3: 'Problems we wrote', p: 'Original, never copied.' },
      { h3: 'Year-round', p: 'Weekly, not just in summer.' },
      { h3: 'No outcome promises', p: 'We teach; results belong to the child.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our advanced students',
  projectsLede: 'Math investigations and programs made in our classes; more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Advanced math is paid month by month with no qualifying test and no long contract, so a family can try a term of real challenge before deciding.',
    free: ['A free first class', 'A sample of work is enough', 'No card details'],
    group: ['Fifteen to twenty learners', 'A steady teacher', 'Choose a batch time', 'Monthly'],
    one: ['A private teacher', 'Paced to your child', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Duke TIP alternatives: questions answered',
    items: [
      { q: 'Is Duke TIP still running?', a: 'No. Duke\'s Office of the Provost says TIP\'s residential summer program was suspended in 2020 because of the pandemic, and that TIP and its Academic Talent Search were permanently closed later that year.' },
      { q: 'What replaced Duke TIP?', a: 'Duke now runs Duke Pre-College, summer programs for students currently in grades 6 to 12. It does not use standardized testing as a primary means of assessment, and it asks for a 3.0+ GPA.' },
      { q: 'What is the best alternative to Duke TIP?', a: 'There is no single replacement; it depends on whether your child needs testing, a summer program or year-round classes. Northwestern\'s CTD offers above-grade-level assessment and tiered courses, while Stanford Pre-Collegiate Studies, WKU and the University of Iowa run their own programs.' },
      { q: 'Does any program still offer a talent search?', a: 'Northwestern\'s Center for Talent Development lists above-grade-level assessment for grades 2 to 9. The Belin-Blank Center says it is not currently testing and recommends WKU, CTD and Johns Hopkins CTY.' },
      { q: 'Does my child need test scores for Northwestern CTD?', a: 'Not always. CTD\'s Amber tier is open enrollment with no scores, and its higher tiers accept either scores or an admission portfolio for most courses, according to its eligibility page.' },
      { q: 'When does Duke Pre-College registration open for 2027?', a: 'Duke\'s page says 2027 dates and courses would be announced in late October 2026 and registration opens in December 2026. It also says there will be no online courses in summer 2027.' },
      { q: 'What did Duke TIP\'s talent search do?', a: 'According to Duke\'s provost office, the original plan invited 7th graders to take the SAT and offered high scorers further opportunities, beginning with a residential program in 1981.' },
      { q: 'Do your classes require a test?', a: 'No. We place students after a free first class and a look at recent work. We teach advanced math, but we are not a talent search and award no scores.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Duke or any of these programs?', a: 'No. Modern Age Coders is an independent online school with no link to Duke, Northwestern, Stanford, the University of Iowa, WKU or Johns Hopkins. We describe each program only from its own site.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for academically able US students.',
    items: [
      { href: '/gifted-and-talented-test-prep', label: 'Gifted and talented tests', p: 'What screening tests measure.' },
      { href: '/accelerated-math-program-online', label: 'Accelerated math online', p: 'Working ahead, properly.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Contests for able students.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning advanced math at home.' },
      { href: '/computer-science-summer-programs-for-high-school-students', label: 'CS summer programs', p: 'Summer options for teens.' },
      { href: '/cogat-test-prep', label: 'CogAT explained', p: 'Reasoning, not drilling.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade, what they find too easy at school and anything they love in math. The teacher will pitch the class above that.',
    readFirst: 'Have a look at <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> or the <a class="ag-inline-link" href="/courses">course list</a> if you like.',
    note: 'Every lesson is live online, taught from India, scheduled for US evenings and weekends. Message us on WhatsApp for the fastest answer.',
    formNote: 'You pay nothing for the first class, and no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'Able learners', links: [
        { href: '/gifted-and-talented-test-prep', label: 'Gifted tests' },
        { href: '/accelerated-math-program-online', label: 'Accelerated math' },
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' },
        { href: '/cogat-test-prep', label: 'CogAT' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/computer-science-summer-programs-for-high-school-students', label: 'Summer programs' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '25! ends in 6 zeros: count the fives'
  },

  personalityCss: `
.ag-root.ag-dta .ag-hero h1 { letter-spacing: -0.013em; max-width: 22ch; }
.ag-root.ag-dta .ag-capsule { border-left-width: 4px; border-radius: 10px; }
.ag-root.ag-dta .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-dta .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Duke Office of the Provost notice (TIP history and 2020 closure) and Duke Pre-College page; Northwestern CTD home, eligibility, assessments and online pages; Belin-Blank Center home and Academic Talent Search page; WKU Center for Gifted Studies home; Stanford Pre-Collegiate Studies home and programs. All read raw 31 October 2026.',
    localProject: 'Our ceiling-effect illustration (40 of 40 for both, then 31 and 14 of 40 above level), the criteria checklist and five-step plan, the trailing-zeros worked problem (25! has 6, 100! has 24), and five stretch problems checked in Python (35, 5050, 9, 24, 204). Lesson family: counting factors rather than multiplying.',
    requiredMentions: ['TIP and the Academic Talent Search were permanently closed later that year', 'to invite 7th graders to take the SAT', 'standardized testing is no longer used as a primary means of assessment', 'will not offer online courses for the summer of 2027', 'No test scores or portfolio materials needed to enroll.', '90th percentile or above on a nationally normed, standardized grade-level achievement test', 'Give a younger student a test that was developed for older students.', 'Talent Identification Program of Kentucky', '25! ends in 6 zeros'],
    sources: [
      { claim: 'Duke Office of the Provost: Duke TIP history and 2020 permanent closure.', url: 'https://provost.duke.edu/news/duke-flags-lowered-robert-n-sawyer-founder-duke-tip-dies/' },
      { claim: 'Duke Pre-College: 2027 timeline, grades, GPA rule, no online courses in 2027.', url: 'https://provost.duke.edu/pre-college-programs/' },
      { claim: 'Northwestern CTD: eligibility tiers.', url: 'https://www.ctd.northwestern.edu/eligibility' },
      { claim: 'Northwestern CTD: assessments, including above-grade-level for grades 2 to 9.', url: 'https://www.ctd.northwestern.edu/assessments' },
      { claim: 'Belin-Blank Center: above-level testing explained; not currently testing; referrals.', url: 'https://belinblank.education.uiowa.edu/students/bests' },
      { claim: 'WKU Center for Gifted Studies: since 1982, programs.', url: 'https://www.wku.edu/gifted/' },
      { claim: 'Stanford Pre-Collegiate Studies: programs including SUMaC and Stanford Math Circle.', url: 'https://spcs.stanford.edu/programs' }
    ],
    rejectedClaims: [
      'Johns Hopkins CTY (cty.jhu.edu): returned 403 earlier in this cluster, not retried; named only as listed by the Belin-Blank Center.',
      'Purdue GERI, the Davidson Institute and Art of Problem Solving: their sites refused our requests on 31 October 2026, so they are not described.',
      'All program fees, including Duke Pre-College and Belin-Blank prices: not printed (no other provider\'s prices).',
      'Names of individuals in Duke\'s notice: not printed (brief rule 7).',
      'Any ranking or "best" program claim: none; the table is neutral and ordered without merit judgment. Our own row is excluded from the comparison table.',
      'The ceiling-effect scores (31 and 14 of 40) are our illustration, not data from any program.'
    ]
  }
};
