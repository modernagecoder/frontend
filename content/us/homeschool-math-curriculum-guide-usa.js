'use strict';
// Homeschool and school math curricula guide, USA (ag- pillar/index page for the hub
// "homeschool-math-curriculum-guide-usa" in content/exam-cluster-groups.json; UK and US exams cluster, index pages).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10: named curricula allowed; facts only
// from the publisher's own site, dated; neutral; never prices; never "better"; trademarks are theirs; not affiliated).
// Every figure and quote below was re-grepped on 1 November 2026 in the raw publisher copies the member pages saved on
// 31 October 2026 (keyword-research-2026-09/uk-us-gap/src/<member-slug>/), never copied from a member page's prose:
//  - saxon-math-tutor (hmhco.com/programs/saxon-math): "To master mathematics, students need to build on prior learning";
//    "An incremental approach gives students the time to understand and practice a small concept before adding the next
//    step."; "Cumulative practice and assessments cover ideas from earlier lessons"; "Grade 3 is available in kit or
//    textbook format"; bands Primary K-3 to Algebra 2; "iTools digital math manipulatives".
//  - beast-academy-tutor (beastacademy.com, /faq, /books, /online): "elementary school math program created by Art of
//    Problem Solving"; ages 6-13 (non-breaking hyphen in the raw, written "6 to 13"); "Each level 1-5 is split into four
//    units"; "more than 1,000 lessons"; "as a stand-alone curriculum or as a supplement"; "loosely based on the Common
//    Core"; start "about a level" behind; "Level 5 of Beast Academy Online has the mathematical background necessary for
//    Art of Problem Solving (AoPS) prealgebra".
//  - teaching-textbooks-math-help (teachingtextbooks.com): "a complete math curriculum offered as a series of apps"; "Each
//    course does all of the teaching, all of the grading, and has step-by-step solutions for every problem."; products Math 3
//    to Pre-Calculus, "Printed Textbooks" optional; "Each problem and hint is read aloud to the student"; placement: "have
//    them take two tests starting with the higher level".
//  - math-mammoth-tutor (mathmammoth.com): "constitutes a full elementary mathematics curriculum for grades K-8"; "two
//    student worktexts (A and B)"; "All the instruction in the worktexts is written directly to the student."; "The lessons
//    break apart mathematical concepts and explain the"; "For grades 1-7, there are free videos that are matched";
//    "Math Mammoth does not offer algebra 1 or above."; "After MM7 or MM8, students can proceed directly to high school
//    math"; placement tests "are end-of-year (EOY) tests"; "Many popular math curricula are easier than Math Mammoth".
//  - math-u-see-tutor (mathusee.com; Demme Learning): "The curriculum consists of 13 levels, building from an introduction to
//    mathematics through calculus."; "Focuses on mastering fundamental concepts and skills before moving on to a new
//    topic"; "Students view one video per lesson and decide whether to take notes."; "Build, Write, Say"; "Using Greek
//    letters for levels instead of age or grade"; "Placement Specialists"; "More than 300 public school districts".
//  - eureka-math-homework-help (greatminds.org; nysed.gov): "They use the same models and problem-solving methods from grade
//    to grade"; Eureka Math squared "an evidence-based PreK" to Algebra I curriculum; "This spiraling curriculum helps
//    students build, revisit, and retain knowledge over time."; "Learn, Practice, Succeed" workbooks; "open educational
//    resource" student edition PreK to 12; "There is a Homework Helper to go with every homework assignment in the
//    curriculum."; NYSED "discontinued support for the EngageNY.org website on July 7, 2022".
//  - envision-math-help (savvas.com): "develops deep math connections and lasting understanding through student
//    investigations and experiences that focus on the why, what, and how of mathematics"; "Student Editions, an Additional
//    Practice Workbook, and Teacher's Editions"; "Savvas Realize provides access to all the enVision+ digital resources";
//    enVision+ Mathematics Grades K-5 and 6-8; enVision A|G|A "Algebra 1, Geometry, Algebra 2".
//  - go-math-homework-help (hmhco.com/programs/go-math, /into-math): "Go Math!, K-6"; "Go Math! organizes instruction
//    through a chapter-based structure built around the 5E lesson model."; "Spiral Review"; "The full program is available
//    in Spanish"; "Into Math, K-Algebra 1"; "Each lesson begins with a Spark Your Learning task".
//  - big-ideas-math-help (bigideaslearning.com, bigideasmath.com): "Our lesson design begins with engaging, exploratory
//    experiences to help students build a solid, conceptual foundation."; Math & YOU "a brand-new comprehensive K-12
//    program"; "Math & YOU K-8"; "Easy Access to your Student Edition"; "founded in 2008"; "registered trademarks of Larson
//    Texts, Inc.".
//  - khan-academy-math-vs-live-tutor (khanmigo.ai; khanacademy.org itself served a script challenge, nothing quoted from
//    it): "The Khan Academy content library and learning platform will always remain 100% free."; "Khan Academy is a small
//    nonprofit funded by donations."; "it guides learners to find the answer themselves"; "Khanmigo can help students who
//    are in elementary school through college."; Khanmigo users "be 18 years or older, live in the United States".
//  - russian-school-of-mathematics-alternative (russianschool.com): "K-12 after-school math program"; "Our average class
//    size is 12"; "RSM-Online is open to students in grades 2 - 10"; "based on elite math schools in the former Soviet
//    Union, adapted to the U.S. environment"; "live and interactive classes on our proprietary video-conferencing
//    platform"; "We offer tutoring only as a short-term solution"; "for nearly thirty years".
//  - art-of-problem-solving-alternative (aopsacademy.org, beastacademy.com; artofproblemsolving.com returned 403 and was
//    not retried): "AoPS Academy is an after-school enrichment program with a mission to teach problem solving skills
//    through advanced math, language arts, and science courses."; "AoPS trains students to approach hard problems by
//    breaking them down into familiar parts."; "over 20 locations in 12 states"; "with online courses designed for
//    high-performing math students"; "Since 1993"; "opened the first AoPS Academy campus in 2016".
//  - stanford-10-math-practice (Pearson SAT10 product page and overview flyer; Code of Virginia 22.1-254.1; NYSED Home
//    Instruction Q&A; RCW 28A.200.010): "Grades K-12 paper, Grades 3-12 online"; "Co-normed with the OLSAT8";
//    "2018 Stanford 10 norms update"; "Easy-hard-easy" format; "2.25-5.5 hours" untimed; Virginia "fourth stanine on any
//    nationally normed standardized achievement test"; New York "is below the thirty-third percentile on national norms";
//    Washington "is administered annually to the child by a qualified individual".
//  - homeschool-computer-science-high-school-credit (no raw copies under uk-us-gap; re-checked here instead): NYSED Home
//    Instruction Q&A copy (saved as src/homeschool-math-curriculum-guide-usa/nysed-home-instruction-qa.txt): "Credit is
//    given only by schools."; "colleges set their own admissions requirements"; Texas Education Agency home schooling
//    page fetched raw 1 November 2026 (tea-homeschool.html): "The State of Texas does not award a diploma to students that
//    are home schooled."
// Not used: any price (publishers', tutors', ours), efficacy and outcome claims, testimonials, author and staff names other
// than John Saxon (not needed here), rankings of any kind. No curriculum is rated against another or against us.
// Our own material, labelled on the page: the two-week trial log (Program A: 10 lessons, 214 minutes, 78 of 100 first-try,
// 5 of 10 explain-backs; Program B: 10 lessons, 306 minutes, 61 of 100, 9 of 10), its Python summary (21.4 and 30.6 minutes a
// lesson; 78% and 61%), the grade-band ladder, the decision steps and the questions-for-the-publisher list.
// Lesson family: choosing a curriculum from evidence you collect yourself (a short trial, logged).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Every homeschool and school math curriculum we support, compared from the publishers&rsquo; own pages, with testing and credit rules.' },
  slug: 'homeschool-math-curriculum-guide-usa',
  code: 'ushc',
  accent: '#3F5B4A',
  accentRationale: 'Homeschool math curriculum guide: a moss slate, #3F5B4A, quiet enough to sit over a fourteen-row comparison table and apart from the mulberry, green and blue curriculum doors it links to; 7.06:1 on #FBF8F2, 6.64:1 on #F5F1E8 and 6.07:1 on #EDE7DA',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Homeschool math curriculum guide',
  title: 'Homeschool Math Curriculum Comparison: 9 Programs Side by Side',
  description: 'A homeschool math curriculum comparison: Saxon, Beast Academy, Teaching Textbooks, Math Mammoth, Math-U-See, Eureka and more, from the publishers&rsquo; pages.',
  ogDescription: 'Which math curriculum should you use? Nine programs, from Saxon to Big Ideas Math, laid side by side by grade range, format and approach, in each publisher\'s own words, plus Khan Academy, RSM, AoPS, the Stanford 10 and high school credit.',
  twitterDescription: 'Nine US math curricula compared from the publishers\' own pages, with a way to choose by trial.',
  pageName: 'Homeschool Math Curriculum Guide',
  webPageDescription: 'A pillar guide for US families choosing a math curriculum at home or meeting one at school, built from publisher and state pages read raw on 31 October and 1 November 2026, with our own trial method and links to a page for each program.',
  courseDescription: 'Live online math lessons for US students using any home or school curriculum, from elementary arithmetic to Algebra 1, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Homeschool math curriculum guide',
  navLinks: [
    { href: '#compare', label: 'Comparison table' },
    { href: '#curricula', label: 'The curricula' },
    { href: '#options', label: 'Other options' },
    { href: '#testing', label: 'Testing and credit' },
    { href: '#choose', label: 'How to choose' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Homeschool and school math &middot; Nine curricula, three alternatives, two rule books',
  h1: 'Homeschool math curriculum comparison: which math curriculum should you use?',
  lede: 'Families ask the same question in a dozen forms: Saxon or Math-U-See, Beast Academy or Math Mammoth, an app or a book, spiral or mastery. There is no single right answer, but there are facts, and every publisher states its own. We put them in one table, read from each publisher&rsquo;s site, and point to a deeper page for every program. Nothing here ranks one curriculum over another.',
  secondaryCta: { href: '#compare', label: 'Open the comparison table' },
  wa: 'Hello Modern Age Coders, we homeschool in the US and are choosing a math curriculum. Could we book a free first class to talk it through with a teacher?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Covers', 'Nine curricula, three alternatives'],
    ['Plus', 'Stanford 10 and high school credit'],
    ['Sources', 'Publisher and state pages'],
    ['Checked', '31 October to 1 November 2026'],
    ['Stance', 'Neutral, no rankings'],
    ['Our help', 'Live, beside any curriculum'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Widely used US homeschool math curricula include Saxon (HMH), Beast Academy (Art of Problem Solving), Teaching Textbooks, Math Mammoth and Math-U-See (Demme Learning); schools often use Eureka Math (Great Minds), enVision (Savvas), Go Math (HMH) and Big Ideas Math. They differ in grade range, format (book, video, app) and approach, so choose with each publisher&rsquo;s placement test and a short trial. Modern Age Coders, which is not connected with any publisher, teaches live online beside whichever one you pick, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Courses that sit beside a curriculum',
    h2: 'Three live courses that follow whatever book is on the table',
    lede: 'Each course is taught to the topic your child is on in their own curriculum. The book keeps the sequence; the teacher explains it a second way.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'USHC / 01', title: 'Elementary math, grades 1 to 5', note: 'Place value, the four operations, fractions and measurement, for families on any K to 5 program.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'USHC / 02', title: 'Middle school math', note: 'Ratios, negatives, expressions and geometry, the years where curricula diverge most.' },
      { course: 'algebra-foundations-masterclass', code: 'USHC / 03', title: 'Algebra foundations', note: 'Pre-algebra and Algebra 1, the hand-off point where many families change program.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'The master table',
      h2: 'How do the main homeschool math curricula compare?',
      lede: 'Short answer: they cover overlapping grades in very different ways. Saxon and Math Mammoth are books, Teaching Textbooks is an app, Math-U-See pairs a video with blocks and a workbook, and the school programs come as print editions with a digital platform. The table below puts every program in this guide on one grid, using only words the publisher or the state wrote itself.',
      body: [
        { kind: 'table', caption: 'Math curricula, alternatives and homeschool rules in this guide, from each organisation&rsquo;s own pages (read raw 31 October 2026, re-checked 1 November 2026; grade ranges written with "to")', head: ['Program', 'Who publishes or runs it', 'Grades or ages', 'Delivery format', 'Approach, in their own words'], rows: [
          ['Saxon Math', 'Houghton Mifflin Harcourt (HMH)', 'K to Algebra 2', 'Books and kits; online tools such as "iTools digital math manipulatives"', '"An incremental approach gives students the time to understand and practice a small concept before adding the next step."'],
          ['Beast Academy', 'Art of Problem Solving', 'Ages 6 to 13, Levels 1 to 5', 'Guide and Practice books, or BA Online with "more than 1,000 lessons"', 'The "elementary school math program created by Art of Problem Solving", usable "as a stand-alone curriculum or as a supplement"'],
          ['Teaching Textbooks', 'Teaching Textbooks', 'Math 3 to Pre-Calculus', 'One app per course; "Printed Textbooks" optional', '"Each course does all of the teaching, all of the grading, and has step-by-step solutions for every problem."'],
          ['Math Mammoth', 'Math Mammoth (mathmammoth.com)', 'K to 8 (Light Blue Series)', '"two student worktexts (A and B)" a grade; free videos for grades 1 to 7', '"All the instruction in the worktexts is written directly to the student."'],
          ['Math-U-See', 'Demme Learning', '13 levels, Primer to Calculus', 'Lesson video, workbook, tests and manipulative blocks', '"Focuses on mastering fundamental concepts and skills before moving on to a new topic"'],
          ['Eureka Math and Eureka Math squared', 'Great Minds', 'PreK to grade 12; squared edition PreK to Algebra I', '"Learn, Practice, Succeed" workbooks; an "open educational resource" student edition', '"They use the same models and problem-solving methods from grade to grade"'],
          ['enVision Mathematics', 'Savvas Learning Company', 'K to 8, plus enVision A|G|A for high school', '"Student Editions, an Additional Practice Workbook, and Teacher&rsquo;s Editions", with Savvas Realize online', 'Builds understanding "through student investigations and experiences that focus on the why, what, and how of mathematics"'],
          ['Go Math! (and Into Math)', 'Houghton Mifflin Harcourt (HMH)', 'Go Math! K to 6; Into Math K to Algebra 1', 'Print program with HMH digital tools; "The full program is available in Spanish"', '"Go Math! organizes instruction through a chapter-based structure built around the 5E lesson model."'],
          ['Big Ideas Math (Math &amp; YOU)', 'Big Ideas Learning, a Larson Texts company', 'K to 12, plus AP', 'Student Edition in print with "Easy Access" online', '"Our lesson design begins with engaging, exploratory experiences to help students build a solid, conceptual foundation."'],
          ['Khan Academy', 'Khan Academy, a nonprofit', 'Khanmigo: "elementary school through college"', 'Self-paced videos and exercises; Khanmigo AI tutor', 'Khanmigo "guides learners to find the answer themselves"'],
          ['Russian School of Mathematics', 'RSM', 'K to 12; RSM-Online grades 2 to 10', 'In-person branches and live online classes', 'Approach "based on elite math schools in the former Soviet Union, adapted to the U.S. environment"'],
          ['Art of Problem Solving', 'AoPS (AoPS Academy)', 'AoPS Academy grades 1 to 12', 'Books, online courses since 2003, campuses', '"AoPS trains students to approach hard problems by breaking them down into familiar parts."'],
          ['Stanford 10 (SAT10)', 'Pearson', 'K to 12 on paper, 3 to 12 online', 'Nationally normed, multiple-choice test', 'An "Easy-hard-easy" question format, with 2018 norms'],
          ['High school credit at home', 'Each state', 'Grades 9 to 12', 'Records the family keeps', 'New York: "Credit is given only by schools."']
        ] },
        { kind: 'source', html: 'Sources, all read raw: <a class="ag-inline-link" href="https://www.hmhco.com/programs/saxon-math" rel="noopener" target="_blank">HMH Saxon Math</a>, <a class="ag-inline-link" href="https://beastacademy.com/books" rel="noopener" target="_blank">Beast Academy books</a>, <a class="ag-inline-link" href="https://www.teachingtextbooks.com/" rel="noopener" target="_blank">Teaching Textbooks</a>, <a class="ag-inline-link" href="https://www.mathmammoth.com/complete-curriculum" rel="noopener" target="_blank">Math Mammoth</a>, <a class="ag-inline-link" href="https://mathusee.com/products/math-u-see-curriculum/" rel="noopener" target="_blank">Math-U-See</a>, <a class="ag-inline-link" href="https://greatminds.org/math/eurekamath" rel="noopener" target="_blank">Great Minds Eureka Math</a>, <a class="ag-inline-link" href="https://www.savvas.com/solutions/mathematics/envision-mathematics-grades-k-12" rel="noopener" target="_blank">Savvas enVision</a>, <a class="ag-inline-link" href="https://www.hmhco.com/programs/go-math" rel="noopener" target="_blank">HMH Go Math!</a>, <a class="ag-inline-link" href="https://www.bigideaslearning.com/" rel="noopener" target="_blank">Big Ideas Learning</a>, <a class="ag-inline-link" href="https://www.khanmigo.ai/" rel="noopener" target="_blank">Khanmigo</a>, <a class="ag-inline-link" href="https://www.russianschool.com/" rel="noopener" target="_blank">RSM</a>, <a class="ag-inline-link" href="https://aopsacademy.org/about" rel="noopener" target="_blank">AoPS Academy</a>, Pearson&rsquo;s SAT10 product page and the NYSED Home Instruction questions and answers. Grade ranges are what each publisher lists today; Math-U-See ties levels to no grade at all, saying "Using Greek letters for levels instead of age or grade" removes pressure. Prices and outcome claims are left out on purpose. Every product name is a trademark of its owner. Modern Age Coders is not affiliated with, endorsed by or paid by any publisher, school or state named here.' }
      ]
    },
    {
      id: 'curricula', tint: 'deep', eyebrow: 'Curricula we teach alongside',
      h2: 'Which math curricula do homeschool and school families actually use?',
      lede: 'Two groups. Five programs were written for the home and are bought by parents; four are school adoptions that families meet through homework. Each has its own deeper page on this site.',
      body: [
        { kind: 'p', html: '<b>Built for teaching at home.</b> Saxon is the long-running one: HMH says "To master mathematics, students need to build on prior learning", and every lesson&rsquo;s mixed practice reaches back to earlier work. Our <a class="ag-inline-link" href="/saxon-math-tutor">Saxon Math tutor page</a> is for the family whose child does today&rsquo;s lesson fine but trips over problem 18 of the review set, and it shows how to trace each miss to its lesson of origin.' },
        { kind: 'p', mt: true, html: 'Beast Academy, from the people behind Art of Problem Solving, is comic-led and puzzle-heavy, with five levels each split into four units. The <a class="ag-inline-link" href="/beast-academy-tutor">Beast Academy tutor page</a> suits a child aged roughly 6 to 13 who loves the characters but stalls on the starred problems, and it explains the publisher&rsquo;s own advice to start "about a level" behind the school grade.' },
        { kind: 'p', mt: true, html: 'Teaching Textbooks hands almost the whole job to software, which reads problems aloud, grades them and plays a worked solution. Our <a class="ag-inline-link" href="/teaching-textbooks-math-help">Teaching Textbooks math help page</a> is written for the moment a student has watched the solution and still cannot say why a step is allowed, usually somewhere in Pre-Algebra or Algebra 1.' },
        { kind: 'p', mt: true, html: 'Math Mammoth speaks to the child directly in its worktexts and leans hard on mental arithmetic and word problems; it stops before high school, saying "Math Mammoth does not offer algebra 1 or above." The <a class="ag-inline-link" href="/math-mammoth-tutor">Math Mammoth tutor page</a> helps when a nearly self-teaching book needs a voice, and it covers the publisher&rsquo;s warning about placing a child too high.' },
        { kind: 'p', mt: true, html: 'Math-U-See, from Demme Learning, builds each idea with blocks before symbols, through a Build, Write, Say routine and one short video a lesson. Our <a class="ag-inline-link" href="/math-u-see-tutor">Math-U-See tutor page</a> is aimed at the levels where blocks give way to algebra, from Delta through Algebra 1, with area-model factoring drawn out step by step.' },
        { kind: 'p', mt: true, html: '<b>Adopted by school districts.</b> Eureka Math comes from Great Minds and, in New York, grew out of the EngageNY modules; NYSED says it "discontinued support for the EngageNY.org website on July 7, 2022." The <a class="ag-inline-link" href="/eureka-math-homework-help">Eureka Math homework help page</a> is for parents who were taught a different method and need the number bond and tape diagram explained before they can help at the table.' },
        { kind: 'p', mt: true, html: 'enVision, published by Savvas, opens a lesson with an exploration task and only then shows a visual example. Our <a class="ag-inline-link" href="/envision-math-help">enVision Math help page</a> walks a K to 8 family through that order, so a child who feels lost in the opening task learns that confusion there is planned.' },
        { kind: 'p', mt: true, html: 'Go Math! is HMH&rsquo;s chapter-based K to 6 program, and Into Math is its module-based successor running to Algebra 1. The <a class="ag-inline-link" href="/go-math-homework-help">Go Math homework help page</a> covers both, and its focus is a fixed routine for reading a word problem before any calculation starts.' },
        { kind: 'p', mt: true, html: 'Big Ideas Math, from Larson Texts&rsquo; Big Ideas Learning, is common in middle school and high school classrooms, and its newer programs carry the Math &amp; YOU name. Our <a class="ag-inline-link" href="/big-ideas-math-help">Big Ideas Math help page</a> is for grade 6 to Algebra 2 students who can follow the textbook example but cannot spot which method a fresh problem calls for.' },
        { kind: 'two', mt: true,
          leftH3: 'Spiral, incremental, mastery: what the words mean here',
          left: [
            'Look at where review is placed. HMH says of Saxon that "Cumulative practice and assessments cover ideas from earlier lessons". Great Minds calls Eureka Math squared a "spiraling curriculum" that helps students "build, revisit, and retain" knowledge.',
            'Math-U-See and Math Mammoth sit nearer the other end: a topic is studied until it holds, then the book moves on. Neither style is wrong; a forgetful child may like constant review, a focused one the long chapter.'
          ],
          rightH3: 'Who does the explaining',
          right: [
            'This separates the programs most. In Teaching Textbooks the app explains; in Math-U-See a video does; in Math Mammoth the page speaks to the child; in Saxon and Beast Academy a parent usually reads alongside.',
            'In the school programs the classroom teacher explains, and homework assumes the lesson happened, which is why parents so often feel locked out of the method.'
          ] }
      ]
    },
    {
      id: 'options', tint: 'tint', eyebrow: 'Comparing options',
      h2: 'How are Khan Academy, RSM and AoPS different from a curriculum?',
      lede: 'They are not boxed curricula, though families weigh them against one. Khan Academy is a free self-paced library with a paid AI tutor, RSM an after-school program with its own sequence, and Art of Problem Solving a publisher, online school and campus network.',
      body: [
        { kind: 'p', html: 'Khan Academy describes itself as "a small nonprofit funded by donations" and says its library "will always remain 100% free." Its Khanmigo assistant, by Khan&rsquo;s own account, "guides learners to find the answer themselves", and an account holder must be 18 or older, so a parent signs up on a child&rsquo;s behalf. Our <a class="ag-inline-link" href="/khan-academy-math-vs-live-tutor">Khan Academy math vs a live tutor page</a> lays out a criteria table for the family deciding whether a free library is enough or whether a person needs to hear the child reason aloud.' },
        { kind: 'p', mt: true, html: 'The Russian School of Mathematics runs a K to 12 sequence of its own, with an online branch for grades 2 to 10 and an average class of 12, according to its site. RSM also says "We offer tutoring only as a short-term solution", so it is a program to join rather than help with homework. The <a class="ag-inline-link" href="/russian-school-of-mathematics-alternative">RSM alternative page</a> compares the facts in a neutral table and adds two of our own puzzles solved two ways.' },
        { kind: 'p', mt: true, html: 'Art of Problem Solving goes back to a 1993 book, launched online courses in 2003 "designed for high-performing math students", and runs AoPS Academy at "over 20 locations in 12 states". It also created Beast Academy, whose Level 5 is described as leading into AoPS prealgebra. Our <a class="ag-inline-link" href="/art-of-problem-solving-alternative">Art of Problem Solving alternative page</a> sets AoPS beside other paths for a strong student and teaches the habit of splitting a hard problem into pieces already known.' }
      ]
    },
    {
      id: 'testing', tint: 'deep', eyebrow: 'Homeschool testing and credit',
      h2: 'How do homeschoolers test math and get high school credit?',
      lede: 'It depends on the state. Some accept a nationally normed achievement test such as the Stanford 10 as annual evidence; high school credit and diplomas follow state rules that differ widely, so your records matter as much as the curriculum.',
      body: [
        { kind: 'table', caption: 'Selected state wording on annual evidence and credit (each state&rsquo;s own text, read raw 31 October and 1 November 2026; not legal advice, and other routes exist in each state)', head: ['State', 'What its own text says'], rows: [
          ['Virginia (Code 22.1-254.1)', 'Evidence can be "a composite score in or above the fourth stanine on any nationally normed standardized achievement test"'],
          ['New York (NYSED Q&amp;A)', 'Probation applies if the composite "is below the thirty-third percentile on national norms" or shows less than a year of growth'],
          ['Washington (RCW 28A.200.010)', 'A state-approved achievement test "is administered annually to the child by a qualified individual", or a certificated person assesses the child'],
          ['New York, high school', '"Credit is given only by schools." NYSED adds that "colleges set their own admissions requirements"'],
          ['Texas (TEA)', '"The State of Texas does not award a diploma to students that are home schooled."']
        ] },
        { kind: 'p', mt: true, html: 'Pearson&rsquo;s product page lists the Stanford Achievement Test Series, Tenth Edition for "Grades K-12 paper, Grades 3-12 online", co-normed with the OLSAT 8, untimed, with a completion time of "2.25-5.5 hours" for the full battery. Its overview flyer mentions a "2018 Stanford 10 norms update". The <a class="ag-inline-link" href="/stanford-10-math-practice">Stanford 10 math practice page</a> explains the two math subtests, what a stanine is, and how to pace the test calmly with original problems, never real items.' },
        { kind: 'p', mt: true, html: 'Computer science is the subject homeschool families ask about most once math is settled, because it is easy to teach well and hard to document. Our <a class="ag-inline-link" href="/homeschool-computer-science-high-school-credit">homeschool computer science credit page</a> compares New York, Pennsylvania and Texas rules from their own guidance and gives a course record template a stranger could verify.' },
        { kind: 'p', mt: true, html: '<b>What this means for your curriculum.</b> Keep its tests: a dated folder of chapter tests, placement results and levels completed feeds a portfolio or transcript later. An achievement test is normed by age grade, not curriculum level. We quote state text but give no legal advice, so confirm this year&rsquo;s rules with your state education department.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'How to choose',
      h2: 'How do I choose a math curriculum for my child?',
      lede: 'Decide who will explain, place your child with the publisher&rsquo;s own test, then run a short logged trial before buying a full year.',
      body: [
        { kind: 'ol', items: [
          '<b>Name the explainer.</b> Will a parent teach each lesson, will a video or app do it, or will the child read alone? Cross off programs that assume a different answer.',
          '<b>Check the range.</b> In grade 7, a program ending at grade 8 means another switch soon; one running to Algebra 2 or Calculus does not.',
          '<b>Place with the publisher&rsquo;s test.</b> Teaching Textbooks suggests you "have them take two tests starting with the higher level"; Math Mammoth&rsquo;s placement tests "are end-of-year (EOY) tests"; Math-U-See offers Placement Specialists. Use the tool the program supplies, not your child&rsquo;s school grade.',
          '<b>Run a two-week trial and log it.</b> Record minutes per lesson, first-try accuracy, and whether the child can explain one problem back to you. Our example follows.',
          '<b>Ask the publisher the open questions.</b> What happens after the last level? Is there a placement route back if we start too high? What is in the parent materials? Note the answers and the date.',
          '<b>Decide, then hold for a term.</b> Unless a trial shows real distress, give a program a full term before you judge it.'
        ] },
        { kind: 'code', label: 'trial_log.py (our example; two unnamed programs and all numbers invented)', lang: 'Python 3', code: 'trial = {\n    "Program A": {"lessons": 10, "minutes": 214, "first_try": 78, "problems": 100, "explained": 5},\n    "Program B": {"lessons": 10, "minutes": 306, "first_try": 61, "problems": 100, "explained": 9},\n}\n\nfor name, t in trial.items():\n    per_lesson = t["minutes"] / t["lessons"]\n    accuracy = 100 * t["first_try"] / t["problems"]\n    print(f"{name}: {per_lesson:.1f} min a lesson, {accuracy:.0f}% first try, "\n          f"explained {t[\'explained\']} of {t[\'lessons\']}")\n\n# Program A: 21.4 min a lesson, 78% first try, explained 5 of 10\n# Program B: 30.6 min a lesson, 61% first try, explained 9 of 10' },
        { kind: 'table', mt: true, caption: 'Reading the trial log (our worked example; neither program is a real product)', head: ['Signal', 'Program A', 'Program B', 'What it suggests'], rows: [
          ['Minutes a lesson', '21.4', '30.6', 'B takes longer; check whether the extra time is thinking or frustration'],
          ['First-try accuracy', '78%', '61%', 'A feels easier, which can mean good fit or placement that is too low'],
          ['Explain-backs', '5 of 10', '9 of 10', 'B&rsquo;s child can say why far more often']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the example teaches',
          left: [
            'On speed and accuracy alone, Program A wins. But the child on Program B explained 9 of 10 problems back, against 5 of 10, so the slower lessons may be building more understanding.',
            'Neither reading is automatically right: a family needing a calm, independent routine may choose A, one heading for algebra may choose B. The log turns a feeling into a reason.'
          ],
          rightH3: 'How to do the explain-back',
          right: [
            'Once a day, pick one problem your child got right and ask, "How did you know to do that?" Count it as explained only if the answer names the idea, such as "I made both fractions into twelfths", not just the steps.',
            'Keep it light: the aim is to see understanding, not to set a trap.'
          ] }
      ]
    },
    {
      id: 'tutor', tint: 'deep', eyebrow: 'Where a teacher fits',
      h2: 'Can a live teacher work alongside any of these curricula?',
      lede: 'Yes. The curriculum keeps the order and the teacher supplies a second explanation when the first has not landed. Tell us the program, level and lesson; we never ask a family to switch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A batch may suit', p: 'A child whose curriculum sits close to their grade, who benefits from hearing classmates reason through similar topics each week.' },
          { h3: '1-on-1 may suit', p: 'A homeschooler a level ahead or behind, on a curriculum with its own order, such as Math-U-See&rsquo;s Greek-letter levels.' },
          { h3: 'No teacher may suit', p: 'A child who reads the lesson, checks their own answers and stays calm. Plenty of families never need outside help, and that is a good sign.' }
        ] },
        { kind: 'p', mt: true, html: 'We never complete homework, tests or placement assessments for a student. Each curriculum belongs to its publisher; we teach the mathematics, not their pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By grade band',
    h2: 'Which programs cover which grades, according to their own pages',
    lede: 'Where each program starts and stops; placement tests decide the actual level.',
    table: { caption: 'Grade bands each program lists for itself (our grouping of publisher ranges, checked 1 November 2026)', head: ['Band', 'Programs whose pages list it'], rows: [
      ['K to 2', 'Saxon Primary, Beast Academy Level 1 and up, Math Mammoth, Eureka Math, enVision, Go Math!, Big Ideas Math; Math-U-See from Primer by level'],
      ['Grades 3 to 5', 'All of the above, plus Teaching Textbooks from Math 3'],
      ['Grades 6 to 8', 'Saxon Courses 1 to 3, Teaching Textbooks Math 6 to Pre-Algebra, Math Mammoth to grade 8, enVision 6 to 8, Into Math, Big Ideas Math, Math-U-See by level'],
      ['Algebra 1 and up', 'Saxon to Algebra 2, Teaching Textbooks to Pre-Calculus, Math-U-See to Calculus, enVision A|G|A, Into Algebra 1 to Algebra 2, Big Ideas Math to AP']
    ] },
    left: { h3: 'For parents', ps: [
      'Common switch points are grade 5 to 6 and Algebra 1; plan a term ahead. Math Mammoth says that "After MM7 or MM8, students can proceed directly to high school math", and Beast Academy points to AoPS prealgebra after Level 5.',
    ] },
    right: { h3: 'For students', ps: [
      'A new book uses new words for old ideas; ask what it was called before.',
      'Starting a level lower in a new program is normal, not a step back.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live math courses, matched to curriculum stages',
    lede: 'Courses that run beside a home or school curriculum, from first numbers to Algebra 2.',
    bands: [
      { num: 'I', h3: 'Early and elementary', sub: 'Ages 4 to grade 5', courses: [
        { code: 'USHC / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Hands-on number sense.' },
        { code: 'USHC / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Operations to fractions.' },
        { code: 'USHC / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Strategies said aloud.' }
      ] },
      { num: 'II', h3: 'Middle grades', sub: 'Grades 6 to 8', courses: [
        { code: 'USHC / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, integers, geometry.' },
        { code: 'USHC / M / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Ideas tested in Python.' },
        { code: 'USHC / M / 03', slug: 'middle-school-math-competitions-course', title: 'Contest math', blurb: 'For puzzle lovers.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Algebra 1 onward', courses: [
        { code: 'USHC / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The first algebra year.' },
        { code: 'USHC / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to calculus.' },
        { code: 'USHC / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Once the courses are done.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons planned around your curriculum, not ours',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Inside the homeschool day or after school.' },
      { time: 'Weekends', l: 'Catch-up before a chapter test.' },
      { time: '1-on-1', l: 'Paced to your level and lesson.' }
    ],
    cells: [
      { h3: 'Any program', p: 'Home or school curriculum, named or not.' },
      { h3: 'Second explanation', p: 'A new picture for the same idea.' },
      { h3: 'Fresh practice', p: 'Problems our teachers write.' },
      { h3: 'Work stays theirs', p: 'No homework or tests done for anyone.' },
      { h3: 'All US time zones', p: 'Eastern through Hawaii.' },
      { h3: 'Size you choose', p: 'Fifteen to twenty, or one.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'Math students who also code sometimes publish small programs; a selection sits on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed monthly with no long commitment, so a family can bring in a teacher for one difficult chapter or a full year of a new program and stop whenever the book is running smoothly.',
    free: ['First class free', 'Bring your curriculum', 'No card needed'],
    group: ['Fifteen to twenty students', 'One steady teacher', 'Choose your batch', 'Monthly billing'],
    one: ['Just your child', 'Follows your level', 'Times you pick']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Choosing a math curriculum: questions and answers',
    items: [
      { q: 'Which math curriculum should I use for homeschool?', a: 'Start with who will explain each lesson, then check the grade range and place your child with the publisher\'s own test. A two-week logged trial of your top two choices usually settles it. No program suits every child, so we do not rank them.' },
      { q: 'What is the difference between spiral and mastery math?', a: 'A spiral or cumulative program returns to many topics in small doses all year; HMH describes Saxon\'s practice as covering ideas from earlier lessons. A mastery program stays on one topic until it holds, as Math-U-See and Math Mammoth describe. Both can work; the child\'s memory and patience decide.' },
      { q: 'Can I use Khan Academy as my whole math curriculum?', a: 'Some families do, since Khan Academy says its library will always be free. It is self-paced, so it works for a child who stays on task alone. Many families pair it with a book or a teacher so someone hears the child reason.' },
      { q: 'Do I need a placement test before starting a new curriculum?', a: 'Yes, in our view. Teaching Textbooks, Math Mammoth, Math-U-See and Beast Academy each offer a placement route, and Math Mammoth warns that a child switching from an easier program may be placed too high. Use the publisher\'s tool, not the school grade.' },
      { q: 'What curriculum comes after Math Mammoth or Beast Academy?', a: 'Math Mammoth says students can go straight to an Algebra 1 course after its grade 7 or 8 books. Beast Academy says Level 5 of its online program prepares a student for AoPS prealgebra. Any Algebra 1 course with its own placement test is also an option.' },
      { q: 'My child\'s school uses Eureka, enVision, Go Math or Big Ideas. Can I help at home?', a: 'Yes. Each publisher puts family material online, such as Great Minds\' Homework Helpers for Eureka Math, and a teacher can explain the class model to a parent.' },
      { q: 'Does my state require a math test for homeschoolers?', a: 'Some do. Virginia accepts a fourth stanine or above on a nationally normed test as one option, and New York sets a thirty-third percentile threshold for its testing route. Check your own state\'s education department for the rules that apply this year.' },
      { q: 'Are you connected with any of these publishers?', a: 'No. Modern Age Coders is not affiliated with HMH, Art of Problem Solving, Teaching Textbooks, Math Mammoth, Demme Learning, Great Minds, Savvas, Big Ideas Learning, Khan Academy or RSM. Their names and trademarks belong to them.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Is the first class free?', a: 'Yes. The first class is free and no card details are needed. Tell us your curriculum, level and lesson so the teacher can prepare.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other guides for US families',
    lede: 'Further reading for families planning math at home.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math, one to one', p: 'Our own path for families who want a teacher to plan the sequence.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why homework looks different from the way parents learned.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math contests', p: 'For the child who finishes the curriculum early.' },
      { href: '/online-math-circle-for-kids', label: 'Online math circle', p: 'Puzzles and talk, outside any textbook.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'What changes the fee for live online help.' }
    ]
  },

  start: {
    h2: 'Book a free first class, whatever curriculum you use',
    lede: 'Name the program, the level and what keeps going wrong. The teacher will look at it with your child in the first lesson.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how a lesson is planned</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Our teachers work from India and teach American families live, with times arranged around US school calendars and homeschool days. A WhatsApp message gets the fastest reply.',
    formNote: 'The first class is free; we never ask for payment details to book it.'
  },

  footer: {
    cols: [
      { h4: 'Curricula', links: [
        { href: '/saxon-math-tutor', label: 'Saxon Math' },
        { href: '/math-u-see-tutor', label: 'Math-U-See' },
        { href: '/beast-academy-tutor', label: 'Beast Academy' },
        { href: '/eureka-math-homework-help', label: 'Eureka Math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/stanford-10-math-practice', label: 'Stanford 10' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Program A or B, logged'
  },

  personalityCss: `
.ag-root.ag-ushc .ag-hero h1 { letter-spacing: -0.014em; max-width: 24ch; }
.ag-root.ag-ushc .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ushc .ag-table td { font-size: 0.95em; line-height: 1.5; }
.ag-root.ag-ushc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ushc .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Publisher pages read raw by the member pages on 31 October 2026 and re-grepped 1 November 2026: HMH (Saxon Math, Go Math!, Into Math), Art of Problem Solving (Beast Academy, AoPS Academy), Teaching Textbooks, Math Mammoth, Demme Learning (Math-U-See), Great Minds (Eureka Math), Savvas (enVision), Big Ideas Learning, Khanmigo, RSM, Pearson (SAT10); state text from the Code of Virginia, NYSED, RCW and TEA.',
    localProject: 'Our two-week trial log of two invented programs (Program A: 10 lessons, 214 minutes, 78 of 100 first-try, 5 of 10 explain-backs; Program B: 10 lessons, 306 minutes, 61 of 100, 9 of 10), summarised in Python as 21.4 and 30.6 minutes a lesson, 78% and 61%; the grade-band ladder and the six decision steps. Lesson family: choosing a curriculum from evidence a family collects itself.',
    requiredMentions: [
      'Program A: 21.4 min a lesson, 78% first try, explained 5 of 10',
      'Program B: 30.6 min a lesson, 61% first try, explained 9 of 10',
      'Math curricula, alternatives and homeschool rules in this guide',
      'Selected state wording on annual evidence and credit',
      'Grade bands each program lists for itself',
      'Reading the trial log (our worked example; neither program is a real product)',
      'Name the explainer.',
      'The State of Texas does not award a diploma to students that are home schooled.',
      'Run a two-week trial and log it.'
    ],
    sources: [
      { claim: 'Saxon Math design and bands; Go Math! and Into Math structure and grades (HMH).', url: 'https://www.hmhco.com/programs/saxon-math' },
      { claim: 'Beast Academy levels, units, ages and the AoPS prealgebra hand-off.', url: 'https://beastacademy.com/books' },
      { claim: 'Teaching Textbooks app-based courses, Math 3 to Pre-Calculus, and placement advice.', url: 'https://www.teachingtextbooks.com/' },
      { claim: 'Math Mammoth worktexts, grade range, videos and placement tests.', url: 'https://www.mathmammoth.com/complete-curriculum' },
      { claim: 'Math-U-See levels, mastery approach and placement (Demme Learning).', url: 'https://mathusee.com/products/math-u-see-curriculum/' },
      { claim: 'Eureka Math models, editions and family resources (Great Minds).', url: 'https://greatminds.org/math/eurekamath' },
      { claim: 'enVision Mathematics editions, components and approach (Savvas).', url: 'https://www.savvas.com/solutions/mathematics/envision-mathematics-grades-k-12' },
      { claim: 'Big Ideas Math and Math & YOU (Big Ideas Learning).', url: 'https://www.bigideaslearning.com/' },
      { claim: 'Khan Academy and Khanmigo statements.', url: 'https://www.khanmigo.ai/' },
      { claim: 'RSM program and online facts.', url: 'https://www.russianschool.com/' },
      { claim: 'AoPS Academy and AoPS timeline.', url: 'https://aopsacademy.org/about' },
      { claim: 'Stanford 10 grades, formats, norms and completion time (Pearson).', url: 'https://www.pearsonassessments.com/' },
      { claim: 'New York home instruction testing threshold and credit statement.', url: 'https://www.nysed.gov/nonpublic-schools/home-instruction-questions-and-answers' },
      { claim: 'Texas home schooling diploma statement (TEA).', url: 'https://tea.texas.gov/families-and-students/finding-school-your-child/home-schooling' }
    ],
    rejectedClaims: [
      'Any ranking of curricula, or any statement that Modern Age Coders is better than a curriculum or provider: refused (brief rule 10).',
      'Prices from any publisher, provider or from us in typed form: not printed.',
      'Publisher efficacy, ESSA, EdReports and "most widely used" claims: left out of this index to keep the table neutral; the member pages attribute them where they appear.',
      'artofproblemsolving.com (403) and khanacademy.org (script challenge) were not retried; nothing is quoted from them.',
      'Beast Academy "12-15 days" a chapter pacing: the raw copy uses non-ASCII range characters that did not grep cleanly; not printed here.',
      'HMH homeschool page line naming Math in Focus beside Saxon: did not grep in the saved copy on 1 November 2026; not printed.',
      'State legal advice beyond quoting the state text: refused; families are directed to their state education department.',
      'Any affiliation with the publishers, providers or states named: none, stated on the page.'
    ]
  }
};
