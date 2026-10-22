'use strict';
// Homeschool coding and math in Ontario (ag- market door; Canada cluster row 76).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Searches: homeschooling ontario curriculum / homeschooling ontario high school / coding for kids homeschool.
// Spine: what Ontario's Policy/Program Memorandum 131 asks of home-schooling parents (written notice each year, and the
// three things a board looks at: a plan, literacy and numeracy, assessment), and how a coding and math plan answers them.
// No legal or funding advice: the page quotes PPM 131 and tells families to check the official source.
// Sources, read raw with curl on 22 October 2026:
//  - ontario.ca PPM 131 (src-pilots/homeschool-coding-and-math-ontario/ppm131.html, .txt): "Date of Issue: June 17, 2002";
//    "Subject: Home Schooling"; page "Updated: December 18, 2024"; "Parents who decide to provide home schooling for their
//    child(ren) should notify the school board of their intent in writing."; "they should give notification each year in
//    writing prior to September 1 to the school board in whose jurisdiction their child last attended school."; "The board
//    should accept the written notification of the parents each year as evidence that the parents are providing
//    satisfactory instruction at home."; "Normally, the board should not investigate the matter."; "the parent may not be
//    following the Ontario curriculum, using standard classroom practices in the home, or teaching within the standard
//    school day or school year."; focus "a plan for educating the child", "plans to ensure literacy and numeracy at
//    developmentally appropriate levels", "plans for assessing the child's achievement"; guide question "Is your
//    instructional program based on the Ontario curriculum or on a different curriculum?"; materials example list ending
//    "computer programs"; EQAO: "Parents providing home schooling may wish their child(ren) to participate in assessments
//    for students in Grades 3, 6, and 9, and/or the Ontario Secondary School Literacy Test"; "must contact the school board
//    by September 30 (or another date specified by the school board)"; ILC: "A parent who wishes to enrol a child of
//    compulsory school age in courses offered through the Independent Learning Centre"; "provided that the parent has
//    notified the school board of the intent to provide home schooling"; curriculum: "may download curriculum policy
//    documents and curriculum support material produced by the Ministry of Education free of charge"; PLAR: "who are
//    entering secondary school after having received home schooling".
//    Deliberately NOT used: the named support associations, the health-services section, the compulsory-age line in
//    Appendix A (a 2002 summary that cannot be checked against e-Laws, which is JavaScript-only), the investigation and
//    prosecution clauses, and the part-time funding paragraph.
//  - facts-schools-contests.md, used as they stand: Ontario math C3 (Grade 1 "sequential events", Grade 7 "subprogram");
//    MTH1W "Students will use mathematical processes, mathematical modelling, and coding"; ICD2O "use fundamental
//    programming concepts to write simple programs"; ICS3U and ICS3C have no prerequisite; OSSD page "What you need to earn
//    an Ontario Secondary School Diploma depends on the year you started Grade 9.", 17 compulsory and 13 optional credits
//    (2024 or later), "Everyone needs 40 hours of" community involvement; OSSLT "one of the requirements"; CEMC "talk to a
//    math or computer science educator at your school", "all students must participate through their school."
//  - facts-geo.md section 3 (tzdb 2026e): Ontario ET UTC-5 from 1 November 2026, UTC-4 from 14 March 2027; northwestern
//    Ontario on Central time (America/Winnipeg).
// Our own material, labelled on the page: the plan-to-PPM table, the weekly timetable, the Feeder Watch project (Python,
// run under CPython on 22 October 2026: total 185, mean 13.2, day 14 busiest at 22, week means 13.3 and 13.1, days above
// the mean 3, 6, 7, 10, 13, 14), the portfolio list and the high school notes.
// Lesson family: evidence of learning (a plan, the work, and how it was assessed).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FEEDER = `# Our Feeder Watch project: two weeks of backyard bird counts (Grade 7 and 8 math with code)
counts = [12, 9, 15, 7, 11, 18, 21, 10, 8, 14, 6, 13, 19, 22]   # day 1 to day 14

total = sum(counts)
mean = total / len(counts)
busiest = max(counts)
busiest_day = counts.index(busiest) + 1

week1 = counts[:7]
week2 = counts[7:]

print("Total birds seen:", total)
print("Mean per day:", round(mean, 1))
print("Busiest day: day", busiest_day, "with", busiest, "birds")
print("Week 1 mean:", round(sum(week1) / 7, 1), "| Week 2 mean:", round(sum(week2) / 7, 1))

above = [day + 1 for day, c in enumerate(counts) if c > mean]
print("Days above the mean:", above)`;

const FEEDER_OUT = `Total birds seen: 185
Mean per day: 13.2
Busiest day: day 14 with 22 birds
Week 1 mean: 13.3 | Week 2 mean: 13.1
Days above the mean: [3, 6, 7, 10, 13, 14]`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'HOMESCHOOL ON', blurb: 'Homeschooling coding and math in Ontario, from PPM 131 itself: the yearly notice, what a board looks at, EQAO and contest access, a weekly plan and a project.' },
  slug: 'homeschool-coding-and-math-ontario',
  code: 'hmo',
  accent: '#485231',
  accentRationale: 'Homeschool coding and math, Ontario: a muted moss green #485231, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 7.84 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  courseCodePage: true,
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Homeschool coding and math, Ontario',
  title: 'Homeschool Coding and Math in Ontario: A PPM 131 Guide',
  description: 'Homeschooling coding and math in Ontario: what PPM 131 asks of parents, the Ontario curriculum or your own, EQAO and Waterloo contests, a weekly plan and a project.',
  ogDescription: 'Ontario\'s home schooling memorandum, PPM 131, read line by line for families teaching coding and math at home: the yearly written notice, what a board looks at, EQAO access, high school routes, and a weekly plan.',
  twitterDescription: 'Homeschool coding and math in Ontario, built from PPM 131, with a weekly plan and a Python project.',
  pageName: 'Homeschool Coding and Math in Ontario',
  webPageDescription: 'A guide for Ontario families who home school, quoting Policy/Program Memorandum 131 on notification, satisfactory instruction, EQAO and the Independent Learning Centre, with a sample coding and math plan from Modern Age Coders.',
  courseDescription: 'Live online coding and math classes for home-schooled children and teens in Ontario, in a batch or one to one, alongside the family\'s own plan.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Homeschool coding and math, Ontario',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#ppm', label: 'PPM 131' },
    { href: '#plan', label: 'Your plan' },
    { href: '#week', label: 'A weekly plan' },
    { href: '#project', label: 'A project' },
    { href: '#tests', label: 'EQAO and contests' },
    { href: '#high', label: 'High school' }
  ],
  eyebrow: 'Ontario &middot; Home schooling &middot; Coding and math',
  h1: 'Homeschool coding and math in Ontario',
  lede: 'Ontario sets out how home schooling works in one document: Policy/Program Memorandum 131, issued on June 17, 2002 and still in effect. It is short, and much of what parents worry about is answered in it plainly. This page quotes PPM 131 on the points that matter for a family planning coding and math at home, then shows a weekly plan, a project and a portfolio that fit what the memorandum describes. We teach coding and math alongside the family\'s own plan; we do not grant Ontario credits, and nothing here is legal advice, so check the memorandum itself and your school board before you act.',
  secondaryCta: { href: '#week', label: 'See the weekly plan' },
  wa: 'Hello Modern Age Coders, we home school in Ontario and would like coding and math classes. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['Province', 'Ontario'],
    ['Official document', 'PPM 131, Home Schooling'],
    ['Yearly notice', 'In writing, before 1 September'],
    ['Subjects here', 'Coding and math'],
    ['Ages', 'About 6 to 18'],
    ['Format', 'Live online, batch or one to one'],
    ['Credits', 'We do not grant Ontario credits'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Families who home school in Ontario follow Policy/Program Memorandum 131: they notify their school board in writing each year, and they may use the Ontario curriculum or a different one. Modern Age Coders teaches coding and math to home-schooled children and teens live online, in a batch or one to one, through courses such as Math Through Coding, as one part of the family\'s plan.',

  picks: {
    eyebrow: 'Courses home-schoolers use',
    h2: 'Three courses for Ontario home-schooling families',
    lede: 'One joins math and coding for the middle years; two follow the Grade 11 and 12 subjects that Ontario teens most often study at home.',
    items: [
      { course: 'maths-through-coding', code: 'HMO / 01', title: 'Math Through Coding', note: 'Ages 10 to 15. Fractions, patterns, data and probability built as small Python programs, which suits Ontario\'s coding-in-math approach.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'HMO / 02', title: 'Ontario Computer Science, ICS3U and ICS4U content', note: 'The Grade 11 and 12 computer science material in Python and Java, taught as a companion course. It carries no Ontario credit.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'HMO / 03', title: 'Advanced Functions and Calculus and Vectors', note: 'The MHF4U and MCV4U topics for teens heading to university math or science, taught live. It carries no Ontario credit.' }
    ]
  },

  sections: [
    {
      id: 'ppm', tint: 'tint', eyebrow: 'The official document',
      h2: 'What Ontario\'s PPM 131 says about home schooling',
      lede: 'Every line in this table is quoted from Policy/Program Memorandum 131 on ontario.ca, which we read on 22 October 2026 (the page shows "Updated: December 18, 2024"). The memorandum is addressed to school boards, so it describes what boards should do as well as what parents should do.',
      body: [
        { kind: 'table', caption: 'Policy/Program Memorandum 131, Home Schooling, as published on ontario.ca (read 22 October 2026)', head: ['Topic', 'What PPM 131 says'], rows: [
          ['The document', '"Date of Issue: June 17, 2002". "Subject: Home Schooling".'],
          ['Telling the board', '"Parents who decide to provide home schooling for their child(ren) should notify the school board of their intent in writing."'],
          ['Every year', 'Parents who continue "should give notification each year in writing prior to September 1 to the school board in whose jurisdiction their child last attended school."'],
          ['How the board treats the notice', '"The board should accept the written notification of the parents each year as evidence that the parents are providing satisfactory instruction at home."'],
          ['Investigation', '"Normally, the board should not investigate the matter." The memorandum lists the limited situations in which a board may look further.'],
          ['Curriculum and timing', 'Board officials should recognise that "the parent may not be following the Ontario curriculum, using standard classroom practices in the home, or teaching within the standard school day or school year."'],
          ['What "satisfactory" focuses on', '"a plan for educating the child"; "plans to ensure literacy and numeracy at developmentally appropriate levels"; "plans for assessing the child\'s achievement".'],
          ['Free curriculum documents', 'Home-schooling parents "may download curriculum policy documents and curriculum support material produced by the Ministry of Education free of charge" from the ministry\'s website.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for coding and math',
          left: [
            'PPM 131 does not list required subjects, but numeracy is named directly in what a board would look for. A family that can show a plan for math, examples of work, and how progress is checked is describing exactly the three things the memorandum names.',
            'Coding is not mentioned as a subject. It does appear indirectly: in the questions a board official may ask about materials, the memorandum\'s examples include "computer programs".'
          ],
          rightH3: 'What this page is not',
          right: [
            'This is a reading of the memorandum for families, not legal advice. PPM 131 is the official source; your school board applies it; and the Education Act sits behind both. Check them before you notify, withdraw or change anything.',
            'Modern Age Coders is not connected with the Ontario Ministry of Education or any school board. We teach coding and math; we do not register, supervise or report on home schooling.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-131" rel="noopener" target="_blank">Ontario, Policy/Program Memorandum 131: Home Schooling</a>, read 22 October 2026. The memorandum\'s appendices include sample letters for the notice.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Writing your plan',
      h2: 'The three things PPM 131 names, answered for coding and math',
      lede: 'If a board ever asks, PPM 131 says determining whether instruction is satisfactory "should therefore focus on" a plan, literacy and numeracy, and assessment. Here is how a coding and math plan can speak to each one. The right-hand columns are our suggestions, not the ministry\'s.',
      body: [
        { kind: 'table', caption: 'PPM 131\'s three focus points and a coding and math answer to each (the last two columns are ours)', head: ['PPM 131 focus', 'A math answer', 'A coding answer'], rows: [
          ['"a plan for educating the child"', 'A one-page outline for the year: number, fractions and ratio, algebra, geometry, data, in the order you will teach them', 'A sequence from block coding or a first Python program to small projects of the child\'s own'],
          ['"plans to ensure literacy and numeracy at developmentally appropriate levels"', 'Two live math classes a week at the child\'s level, plus short daily practice; a placement check at the start', 'Programs that use the math being learned: a pattern rule as a loop, a mean from a list of numbers'],
          ['"plans for assessing the child\'s achievement"', 'A monthly talk with the teacher about what is secure, a dated problem set each month, and a short end-of-term review', 'A folder of finished programs with one sentence each on what the child learned, dated']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Following the Ontario curriculum, or not',
          left: [
            'One of the questions PPM 131 suggests for a board official is: "Is your instructional program based on the Ontario curriculum or on a different curriculum?" Either answer is acceptable in the memorandum\'s terms; a family simply says which documents it uses.',
            'Families who choose the Ontario curriculum often like its math, because it builds coding in from Grade 1, where students write code that involves "sequential events", up to Grade 7, which adds a "subprogram".'
          ],
          rightH3: 'Keeping it light',
          right: [
            'A plan does not need to look like a school timetable. PPM 131 itself says the methods, materials and schedule may differ from those of the school system.',
            'What makes a plan convincing is that it is specific and that the work matches it. A short plan you actually follow is worth more than a thick binder.'
          ] }
      ]
    },
    {
      id: 'week', tint: 'tint', eyebrow: 'A sample week',
      h2: 'A sample weekly plan for coding and math at home',
      lede: 'This is our own plan for a home-schooled child in about Grade 6 or 7, with two of our live classes a week and short independent work on the other days. Every family will change it; it is here to show how little time a steady plan needs.',
      body: [
        { kind: 'table', caption: 'A home-school week for coding and math (our sample plan)', head: ['Day', 'Math', 'Coding', 'What goes in the folder'], rows: [
          ['Monday', 'Twenty minutes of mental math and one word problem, solved out loud', 'Fifteen minutes finishing last week\'s program', 'Nothing yet'],
          ['Tuesday', 'Live math class with our teacher (one hour)', 'None', 'The child\'s two-line summary of the class'],
          ['Wednesday', 'Practice set from Tuesday, checked by the child with a second method', 'Twenty minutes on a small change to a program', 'The checked practice set, dated'],
          ['Thursday', 'None', 'Live Math Through Coding class (one hour): math idea turned into a program', 'The program file and one sentence on what it shows'],
          ['Friday', 'A fifteen-minute review: what was hard this week, and why', 'Show a parent the program running and explain one line', 'A short spoken or written reflection'],
          ['Weekend', 'Optional: a puzzle or a real-life measurement task', 'Optional: free play with code', 'Anything the child is proud of']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'About four hours', p: 'Two live hours plus short daily work covers coding and math for most children of this age.' },
          { h3: 'Dated work', p: 'One dated item a day, filed together, becomes the record of learning the memorandum talks about.' },
          { h3: 'Swap days freely', p: 'Live classes can sit on any weekday or weekend morning; the rest of the week moves around them.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A project from our classes',
      h2: 'Project: Feeder Watch, two weeks of bird counts analysed in Python',
      lede: 'We wrote this project for home-schooled children in Grades 7 and 8. It brings together data, averages and a few lines of code, and it ends with a decision, which echoes Ontario\'s Grade 8 math expectation for code that involves "the analysis of data in order to inform and communicate decisions".',
      body: [
        { kind: 'ol', items: [
          '<b>Collect.</b> For fourteen days, at the same time each morning, count the birds at a backyard or balcony feeder for ten minutes and write the number down.',
          '<b>Predict.</b> Halfway through, the feeder moves closer to a window. Before analysing anything, the child writes down a prediction: will week 2 be busier?',
          '<b>Analyse.</b> Type the fourteen numbers into the program below and run it.',
          '<b>Decide.</b> Compare the two weekly means and say, in a sentence, whether moving the feeder made a difference.',
          '<b>Communicate.</b> Present the result to a parent in two minutes, with one number that supports the conclusion.'
        ] },
        { kind: 'code', label: 'feeder.py &middot; our program', lang: 'python', code: FEEDER, note: 'The counts are made-up sample data. We ran the program under Python 3 on 22 October 2026.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: FEEDER_OUT },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'Week 2 includes the two busiest days, 21 and 22 birds, so it feels busier. But the weekly means are 13.3 and 13.1, almost the same, because week 2 also has the quietest day, with 6.',
            'The honest conclusion is that two weeks of counts show no clear difference. That is a better answer than the prediction, and it is real data analysis.'
          ],
          rightH3: 'What goes in the portfolio',
          right: [
            'The tally sheet with dates, the prediction, the program, its output, and the child\'s one-paragraph conclusion. Together they show a plan, numeracy and assessment in one project.',
            'Extensions: add a median, draw a bar chart by hand, or collect a third week to see whether the pattern holds.'
          ] }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'Tests and contests',
      h2: 'EQAO and Waterloo contests for home-schooled students in Ontario',
      lede: 'Home schooling does not shut a child out of Ontario\'s provincial assessments or the University of Waterloo\'s math and computing contests, but both run through schools, so they need planning early in the school year.',
      body: [
        { kind: 'table', caption: 'Access for home-schooled students, from PPM 131 and CEMC (read 22 October 2026)', head: ['What', 'What the official source says', 'What to do'], rows: [
          ['EQAO assessments and the literacy test', 'PPM 131: "Parents providing home schooling may wish their child(ren) to participate in assessments for students in Grades 3, 6, and 9, and/or the Ontario Secondary School Literacy Test".', 'PPM 131 says parents "must contact the school board by September 30 (or another date specified by the school board)" of that year.'],
          ['Where the child writes', 'PPM 131 says the board should provide space at a local school when the assessment is given to its own students, and the school informs the parent of the date, time and place.', 'Plan transport: the memorandum makes that the parent\'s responsibility.'],
          ['CEMC contests (Gauss, Pascal, Beaver, CCC and others)', 'CEMC: the first step for a student "is to talk to a math or computer science educator at your school", and "all students must participate through their school."', 'For a home-schooled student, ask a nearby school whether it orders the contest and will let the student join.'],
          ['If a school agrees', 'CEMC says a student whose own school is not participating can look for another local school that will let them join as a participant.', 'Ask in September or October; the school places the order, and the student writes there in person.']
        ] },
        { kind: 'p', mt: true, html: 'The CEMC pages we read do not describe a separate route for home-schooled students, so we do not suggest one. Our classes prepare students for the contests, but we cannot enter anyone or host a sitting. See our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> and the <a class="ag-inline-link" href="/gauss-contest-preparation">Gauss</a> and <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior</a> guides for what each contest asks.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-131" rel="noopener" target="_blank">PPM 131</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a>, read 22 October 2026. We are not connected with EQAO or CEMC.' }
      ]
    },
    {
      id: 'high', tint: 'deep', eyebrow: 'High school at home',
      h2: 'Homeschooling Ontario high school: coding, math and the diploma',
      lede: 'Teenagers who home school often ask how their work connects to an Ontario Secondary School Diploma (OSSD). The official sources answer part of that; your school board and the Independent Learning Centre answer the rest. We do not grant Ontario credits.',
      body: [
        { kind: 'table', caption: 'High school facts from ontario.ca and PPM 131 (read 22 October 2026)', head: ['Topic', 'What the official source says'], rows: [
          ['The diploma depends on start year', 'Ontario\'s graduation page: "What you need to earn an Ontario Secondary School Diploma depends on the year you started Grade 9."'],
          ['Credits for Grade 9 in 2024 or later', 'The same page lists 17 compulsory credits and 13 optional credits, plus other requirements.'],
          ['Community involvement', '"Everyone needs 40 hours of" community involvement activities.'],
          ['Independent Learning Centre', 'PPM 131: "A parent who wishes to enrol a child of compulsory school age in courses offered through the Independent Learning Centre" may do so, "provided that the parent has notified the school board of the intent to provide home schooling".'],
          ['Entering a secondary school later', 'PPM 131 says certain sections of the secondary program and diploma policy also apply to students "who are entering secondary school after having received home schooling".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Coding and math courses a teen might study',
          left: [
            'Ontario\'s computer studies courses include ICD2O in Grade 10, where students "use fundamental programming concepts to write simple programs", and ICS3U and ICS3C in Grade 11, both of which list no prerequisite.',
            'In math, Grade 9 (MTH1W) says students "will use mathematical processes, mathematical modelling, and coding". Senior university-bound math leads to Advanced Functions (MHF4U) and Calculus and Vectors (MCV4U).'
          ],
          rightH3: 'How we fit in',
          right: [
            'We teach the content of these subjects live, so a teen learns the programming and the math properly. We do not grant Ontario credits, and our classes do not replace a credit course from a school or the Independent Learning Centre.',
            'A teen who later needs a credit can take it through a recognised provider; what they learned with us is then real preparation rather than a substitute.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ontario.ca/page/high-school-graduation-requirements" rel="noopener" target="_blank">Ontario, high school graduation requirements</a>, the Ontario curriculum course descriptions, and PPM 131, read 22 October 2026. Families should check each source for their own start year and situation.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Class times',
      h2: 'Class times for Ontario families',
      lede: 'Home schooling frees the timetable, which makes daytime and weekend classes easy to arrange.',
      body: [
        { kind: 'p', html: 'Most of Ontario is on Eastern time: UTC-5 after the clocks go back on Sunday 1 November 2026, and UTC-4 after they go forward on Sunday 14 March 2027. Northwestern Ontario west of the 90th meridian is filed under Winnipeg\'s zone in the tz database, which records UTC-5 all year from 1 November 2026, so families around Kenora or Dryden should tell us the clock they actually keep and we will match it. We state every class time in your own zone. Many home-schooling families choose a weekday slot, since school hours do not get in the way.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a child starts',
    h2: 'Four stages for a home-schooled coder',
    lede: 'Our stages, used in the first class to place each learner, whatever their age.',
    table: { caption: 'From first program to independent projects (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Exploring', 'Drags blocks or types simple lines, mostly by following an example'],
      ['2. Explaining', 'Can say what each line of a short program does'],
      ['3. Designing', 'Plans a program from a goal and tests it with a few inputs'],
      ['4. Owning', 'Starts, finishes and documents a project of their own choice']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the one to watch: a child who can explain code is learning, not copying. It also produces exactly the kind of evidence a portfolio needs.',
      'Children often move faster at home than in a classroom because nobody waits for the slowest or the fastest.'
    ] },
    right: { h3: 'For students', ps: [
      'Date everything you make. Future you will be amazed how far you came.',
      'If you cannot explain a line, you have not finished with it yet.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses Ontario home-schoolers take with us',
    lede: 'All taught live online by a regular teacher, in a batch or one to one, during the day or at weekends.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'About Grades 1 to 5', courses: [
        { code: 'HMO / YOUNG / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Math', blurb: 'Grades 1 to 5, placed by level.' },
        { code: 'HMO / YOUNG / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Block coding from age 6.' },
        { code: 'HMO / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch Coding', blurb: 'Games and stories, step by step.' }
      ] },
      { num: 'II', h3: 'The middle years', sub: 'About Grades 6 to 9', courses: [
        { code: 'HMO / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Math', blurb: 'Ratio, integers and early algebra.' },
        { code: 'HMO / MID / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Typed code from scratch, ages 13 to 18.' },
        { code: 'HMO / MID / 03', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'Gauss to Euclid, by grade.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'About Grades 10 to 12', courses: [
        { code: 'HMO / HIGH / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High School Math', blurb: 'Algebra through calculus readiness.' },
        { code: 'HMO / HIGH / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Preparation', blurb: 'For the Canadian Computing Competition.' },
        { code: 'HMO / HIGH / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object-oriented programming from the first class.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that fit a home-school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Daytime or after-lunch slots that school hours would rule out.' },
      { time: 'Weekends', l: 'Morning classes for families who keep weekdays for other subjects.' },
      { time: '1-on-1', l: 'A teacher matched to your child and your plan.' }
    ],
    cells: [
      { h3: 'Ask any time', p: 'The teacher will tell you how your child is doing.' },
      { h3: 'Dated work', p: 'Every program and problem set carries its date.' },
      { h3: 'Your curriculum', p: 'Ontario documents or your own, whichever you use.' },
      { h3: 'Math and code together', p: 'Programs that use the math being learned.' },
      { h3: 'Siblings welcome', p: 'Different ages placed in different batches.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty per batch, or a teacher alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Home-schooled and school students build alongside each other in our classes. Some of their work is shown below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has plenty more.',
  reviewsLede: 'Parents\' words from Google reviews, left exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Each month\'s fee pays for eight live classes with one regular teacher. Home-schooling plans change, so there is no yearly commitment: pay month by month and pause when your family needs to.',
    free: ['A free first class', 'A placement check in coding or math', 'No card required'],
    group: ['Fifteen to twenty students per batch', 'Grouped by age and level', 'Daytime and weekend options', 'Monthly billing'],
    one: ['One teacher for your child', 'Matched to your home-school plan', 'Moves at your child\'s speed']
  },

  faq: {
    eyebrow: 'Questions from Ontario home-schoolers',
    h2: 'Homeschool coding and math in Ontario: common questions',
    items: [
      { q: 'Do I have to tell the school board that we home school in Ontario?', a: 'PPM 131 says parents who decide to home school should notify the school board of their intent in writing, and should give notification each year in writing before September 1. Check the memorandum and your board for the details.' },
      { q: 'Do I have to follow the Ontario curriculum when homeschooling?', a: 'PPM 131 recognises that a parent may not be following the Ontario curriculum, and one of its suggested questions simply asks which curriculum documents a family uses. Many families use the Ontario curriculum for math because it is free to download.' },
      { q: 'What does a board look at if it asks about our instruction?', a: 'PPM 131 says the focus should be a plan for educating the child, plans for literacy and numeracy at developmentally appropriate levels, and plans for assessing achievement. It also says that normally the board should not investigate.' },
      { q: 'Do you grant credits for homeschooled high school students in Ontario?', a: 'No. We do not grant Ontario credits. We teach coding and math content alongside the family\'s plan. PPM 131 describes the Independent Learning Centre as one route to courses for home-schooled students; check with the ILC and your board.' },
      { q: 'Can my home-schooled child write EQAO?', a: 'PPM 131 says home-schooling parents may wish their children to take part in the Grade 3, 6 and 9 assessments or the literacy test, and must contact the school board by September 30, or another date the board sets.' },
      { q: 'Can a homeschooled student write Waterloo math or computing contests?', a: 'Yes, through a school. CEMC says all students must participate through their school, and suggests a student whose own school is not participating look for another local school that will let them join.' },
      { q: 'How much coding and math does a home-schooled child need each week?', a: 'There is no official number. Our sample plan uses two live hours a week plus short daily practice, about four hours in total for a child of Grade 6 or 7.' },
      { q: 'What should go in a coding and math portfolio?', a: 'Dated work: a monthly problem set, finished programs with a sentence on what each shows, and one larger project such as our Feeder Watch data analysis.' },
      { q: 'When are classes for Ontario home-schooling families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Daytime weekday slots are easy for home-schooling families.' },
      { q: 'Is this page legal advice?', a: 'No. It quotes PPM 131 and other official pages so families can find the source quickly. Always check the memorandum, the Education Act and your school board before making decisions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario families teaching at home.',
    items: [
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Our main page for Ontario families.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canadian page we publish.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'A year-by-year coding plan for home-schoolers.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science', p: 'What the Grade 11 course covers.' },
      { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U Advanced Functions', p: 'Grade 12 university math in Ontario.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'One-to-one math through high school.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Math contests from Grade 7 up.' },
      { href: '/gauss-contest-preparation', label: 'Gauss Contest', p: 'The Waterloo contest for Grades 7 and 8.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A tour of a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class places your child in coding, math or both, using a short task at their level. Afterwards the teacher explains what it showed, which you can add to your home-school plan, and suggests a first month.',
    readFirst: 'Reading first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class from start to end, and the <a class="ag-inline-link" href="/courses">course list</a> carries every syllabus in full.',
    note: 'Classes are taught over live video by our teachers in India, so they reach Ontario homes from Windsor to Kenora. Send us a WhatsApp message if you would rather talk first.',
    formNote: 'The first class is free and asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Home schooling', links: [
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool computer science' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/courses/maths-through-coding', label: 'Math Through Coding' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A plan, the work, the check'
  },

  personalityCss: `
.ag-root.ag-hmo .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hmo .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-hmo .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-hmo .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.005em; }
.ag-root.ag-hmo .ag-steps { gap: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario Policy/Program Memorandum 131, Home Schooling (Date of Issue: June 17, 2002; page updated December 18, 2024): written notice each year before September 1; the board accepts the notice as evidence of satisfactory instruction; normally no investigation; parents may not follow the Ontario curriculum; the three focus points; EQAO and OSSLT access via the board by September 30; ILC enrolment after notification; free curriculum documents; PLAR on entering secondary school. Ontario graduation requirements page (17 and 13 credits for 2024 starters, 40 hours). Ontario curriculum (C3 coding, MTH1W, ICD2O, ICS3U and ICS3C). CEMC How contests work. All read 22 October 2026.',
    localProject: 'Feeder Watch, written by us: fourteen days of made-up feeder counts analysed in Python (total 185, mean 13.2, busiest day 14 with 22, weekly means 13.3 and 13.1, days above the mean listed), with a predict, analyse, decide and communicate sequence; a table answering PPM 131\'s three focus points for math and coding; a Monday-to-weekend timetable with a folder column; portfolio guidance. Lesson family: evidence of learning.',
    requiredMentions: ['Feeder Watch', 'Week 1 mean: 13.3 | Week 2 mean: 13.1', 'should notify the school board of their intent in writing', 'prior to September 1 to the school board in whose jurisdiction', 'Normally, the board should not investigate the matter', 'plans for assessing the child\'s achievement', 'Is your instructional program based on the Ontario curriculum or on a different curriculum?', 'by September 30 (or another date specified by the school board)', 'who are entering secondary school after having received home schooling', 'What goes in the folder'],
    sources: [
      { claim: 'PPM 131: notification, yearly notice, satisfactory instruction, focus points, curriculum freedom, EQAO access, ILC, free curriculum documents, PLAR.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/policyprogram-memorandum-131' },
      { claim: 'OSSD requirements depend on Grade 9 start year; 17 compulsory and 13 optional credits; 40 hours of community involvement.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'Ontario curriculum coding expectations, MTH1W coding, ICD2O and ICS3U/ICS3C details.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'CEMC contests run through schools; talk to an educator; another local school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'Legal advice of any kind: the page quotes PPM 131 and sends families to the memorandum, the Education Act and their board.',
      'The compulsory school age line in PPM 131 Appendix A: a 2002 summary that could not be checked against current law (e-Laws is JavaScript-only), so no age is printed.',
      'The named home-schooling support associations: not reproduced (some are religious organisations).',
      'The health-services section and the investigation and prosecution clauses: not reproduced.',
      'Funding for part-time attendance and any fee wording: not used (no funding advice).',
      'That our classes earn Ontario credits: refused; the page says we do not grant Ontario credits.',
      'A CEMC route specific to home-schooled students: not found on the pages read, so none is suggested.',
      'Any affiliation with the Ministry of Education, a school board, the ILC, EQAO or CEMC: none.'
    ]
  }
};
