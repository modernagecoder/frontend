'use strict';
// Go Math homework help, with Into Math (ag- curriculum help door; UK and US exams cluster Phase 2, row US090, group B17).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/go-math-homework-help/):
//  - hmhco.com/programs/go-math: Go Math! listed as "Go Math!, K-6" core curriculum; trusted content for "more than seven
//    million students worldwide"; research-based 5E model (Engage, Explore, Explain, Elaborate, Evaluate); "Go Math!
//    organizes instruction through a chapter-based structure built around the 5E lesson model."; "Each chapter opens with
//    Launch Activities that introduce students to the overarching domain, present an exploratory problem, and include a Math
//    Talk question for partner or group discussion."; "Each chapter also includes a Show What You Know diagnostic to assess
//    prior knowledge and a Vocabulary Builder page"; "Practice and Homework pages, including a set of Spiral Review
//    questions, further reinforce previously taught concepts and procedures throughout the year."; Explore phase Listen and
//    Draw (grades K to 2) or Unlock the Problem (grades 3 to 5); Elaborate phase "On Your Own and Problem Solving problems
//    require students to explain their thinking"; Quick Check, Chapter Reviews, Chapter Test; "Reteach, Challenge, and
//    Additional Practice"; Waggle adaptive practice in English and Spanish; "The full program is available in Spanish";
//    new K-6 edition and "Rest assured, we are still here to support teachers using the current version of the program."
//  - hmhco.com/programs/into-math: "Into Math, K-Algebra 1"; "Into Algebra 1, Geometry, Algebra 2, 8-12"; "Into Math is
//    organized into modules with sequenced lessons that follow a consistent, predictable instructional flow designed for
//    whole-class instruction."; "Each lesson includes a Learning Goal Routine, a Spark Your Learning task, task-based
//    learning, Turn & Talk opportunities, Language Routines, embedded supports, and a Quick Check that informs
//    differentiation options."; "Each lesson begins with a Spark Your Learning task"; "a Student Edition with Practice On
//    Your Own"; Practice Plus with "four pages per lesson covering lesson and fluency practice, application, and Train Your
//    Memory"; Open Middle problems; Spanish counterpart Arriba las Matematicas; HMH Ed platform; Waggle embedded.
// Not used: prices, efficacy claims, named authors and consultants, AI tool claims, and any lesson, Practice and Homework
// page, answer or test. No third-party answer sites.
// Our own material, labelled: the five-line word-problem routine, 156 / 6 by partial quotients, elapsed time 9:45 to 11:20,
// 3 / (1/4), the Spiral Review triage, the stall table and the practice set.
// Lesson family: reading a word problem in a fixed routine before calculating (grades 3 to 6).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for children using HMH Go Math or Into Math: chapters and modules, the Practice and Homework pages, and live classes for grades K to 6.' },
  slug: 'go-math-homework-help',
  code: 'gh',
  accent: '#743B1F',
  accentRationale: 'Go Math homework help: a russet brown, #743B1F as allocated, warm and school-desk plain, about 8.3:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Go Math homework help',
  title: 'Go Math Homework Help (and Into Math): Live Tutor, Grades K to 6',
  description: 'Go Math homework help for parents: how HMH Go Math chapters and Into Math modules are built, the Spiral Review questions, and a live tutor for grades K to 6.',
  ogDescription: 'Go Math and Into Math come from HMH and are built differently. How each lesson is organized, what the Practice and Homework pages expect, why Spiral Review trips children up, and how a live tutor helps.',
  twitterDescription: 'Live help with Go Math and Into Math homework: read the problem, plan, then solve.',
  pageName: 'Go Math Homework Help',
  webPageDescription: 'A guide for US parents whose children use HMH Go Math or Into Math, built from hmhco.com program pages checked on 31 October 2026; the routines, examples and stall points are written by Modern Age Coders.',
  courseDescription: 'Live online math lessons for children whose schools use HMH Go Math or Into Math, grades K to 6, teaching a steady word-problem routine and the reasoning behind each chapter, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Go Math homework help',
  navLinks: [
    { href: '#which', label: 'Go or Into' },
    { href: '#go-lesson', label: 'Go Math lesson' },
    { href: '#into-lesson', label: 'Into Math lesson' },
    { href: '#homework', label: 'Homework pages' },
    { href: '#routine', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; HMH Go Math! and Into Math &middot; Grades K to 6',
  h1: 'Go Math homework help, with a tutor who teaches the routine',
  lede: 'Go Math! is the HMH elementary math program many US children bring home each night, and its sibling Into Math is spreading through districts from kindergarten to Algebra 1. The homework pages look tidy, but each one leans on the lesson that came before it and on Spiral Review questions from weeks earlier. When a child stalls, parents are often unsure whether the gap is today\'s lesson or an older one. This page explains how both programs are organized, from HMH\'s own pages, and how a live tutor works alongside them.',
  secondaryCta: { href: '#routine', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Go Math at school and homework is hard. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'HMH'],
    ['Go Math!', 'Grades K to 6, chapters'],
    ['Into Math', 'K to Algebra 1, modules'],
    ['Homework', 'Practice pages with Spiral Review'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In brief',
  capsule: 'Go Math! is an HMH core math curriculum for grades K to 6 built around chapters and a 5E lesson model; Into Math is the HMH program for kindergarten to Algebra 1, built around modules that open with a Spark Your Learning task. Go Math homework help from a live tutor teaches the reasoning, never the answers. Modern Age Coders runs it live online in its Elementary Mathematics course, in a batch or 1-on-1, with the first class free.',

  picks: {
    eyebrow: 'Courses for HMH families',
    h2: 'Live math classes for Go Math and Into Math students',
    lede: 'The school program sets the chapter or module. We teach the thinking that the homework assumes.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'GM / 01', title: 'Elementary math', note: 'Grades 1 to 5: operations, place value, fractions, time and measurement.' },
      { course: 'mental-maths-mastery-kids', code: 'GM / 02', title: 'Mental math', note: 'Facts and estimation, so word problems are about thinking, not counting.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'GM / 03', title: 'Middle school math', note: 'For Go Math grade 6 and Into Math in the middle grades.' }
    ]
  },

  sections: [
    {
      id: 'which', tint: 'tint', eyebrow: 'Go or Into',
      h2: 'What is the difference between Go Math and Into Math?',
      lede: 'Both are HMH core math programs, but they are organized differently. HMH lists Go Math! for grades K to 6 and Into Math from kindergarten to Algebra 1, with a separate Into Algebra 1, Geometry, Algebra 2 series for grades 8 to 12.',
      body: [
        { kind: 'table', caption: 'Go Math! and Into Math compared, from HMH program pages (hmhco.com, checked 31 October 2026)', head: ['Feature', 'Go Math!', 'Into Math'], rows: [
          ['Grades', 'K to 6', 'K to Algebra 1'],
          ['Unit of study', 'Chapters', 'Modules of sequenced lessons'],
          ['Lesson model', 'The 5E model: Engage, Explore, Explain, Elaborate, Evaluate', 'A consistent flow that begins with a Spark Your Learning task'],
          ['Opening', 'Launch Activities with an exploratory problem and a Math Talk question', 'A Learning Goal Routine and Spark Your Learning'],
          ['Checking', 'Show What You Know, Quick Check, Chapter Review, Chapter Test', 'Diagnostic, formative and summative assessments, including a Quick Check'],
          ['Practice', 'Practice and Homework pages with Spiral Review', 'Practice On Your Own and the Practice Plus workbook'],
          ['Adaptive practice', 'Waggle, in English and Spanish', 'Waggle, embedded'],
          ['Spanish', 'The full program is available in Spanish', 'A Spanish counterpart, Arriba las Matematicas']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Check which one your child has',
          left: [
            'The cover says Go Math! or Into Math. Homework references help too: a "chapter" usually means Go Math, a "module" usually means Into Math.',
            'HMH says it has released a new Go Math! for grades K to 6 and adds: "Rest assured, we are still here to support teachers using the current version of the program." So two editions may be in use in different schools.'
          ],
          rightH3: 'Why it matters to a tutor',
          right: [
            'The topics in a given grade overlap a great deal, but the order and the opening activities differ. A good tutor follows the same order as the class.',
            'Send us the chapter or module number and lesson title, and we plan around the same sequence.'
          ] },
        { kind: 'source', html: 'Sources: HMH <a class="ag-inline-link" href="https://www.hmhco.com/programs/go-math" rel="noopener" target="_blank">Go Math! program page</a> and <a class="ag-inline-link" href="https://www.hmhco.com/programs/into-math" rel="noopener" target="_blank">Into Math program page</a>, checked 31 October 2026. Go Math!, Into Math and HMH are trademarks of their owner. Modern Age Coders is not affiliated with or endorsed by HMH.' }
      ]
    },
    {
      id: 'go-lesson', tint: 'deep', eyebrow: 'Go Math lesson',
      h2: 'How is a Go Math chapter and lesson organized?',
      lede: 'HMH says plainly: "Go Math! organizes instruction through a chapter-based structure built around the 5E lesson model." Each part of the chapter has a job, and the homework sits at the end of each lesson.',
      body: [
        { kind: 'table', caption: 'A Go Math! chapter in HMH\'s description (Go Math! program page, checked 31 October 2026)', head: ['Part', 'What HMH says it does'], rows: [
          ['Chapter opening', '"Each chapter opens with Launch Activities that introduce students to the overarching domain, present an exploratory problem, and include a Math Talk question for partner or group discussion."'],
          ['Before lessons', 'A Show What You Know diagnostic to assess prior knowledge, and a Vocabulary Builder page with review and preview words'],
          ['Explore', 'Listen and Draw in grades K to 2, or Unlock the Problem in grades 3 to 5, with step-by-step modeling and Math Talk'],
          ['Elaborate', '"On Your Own and Problem Solving problems require students to explain their thinking"'],
          ['Homework', 'Practice and Homework pages, with a set of Spiral Review questions'],
          ['Checks', 'Quick Check, Chapter Review and Chapter Test'],
          ['Extra help', 'Reteach, Challenge, and Additional Practice options']
        ] },
        { kind: 'p', mt: true, html: 'Two parts of that list matter most at home. The Unlock the Problem lessons in grades 3 to 5 are where word problems are taught as a process, and the Spiral Review questions on each homework page bring back earlier chapters on purpose. HMH says they "further reinforce previously taught concepts and procedures throughout the year."' }
      ]
    },
    {
      id: 'into-lesson', tint: 'tint', eyebrow: 'Into Math lesson',
      h2: 'How is an Into Math lesson structured?',
      lede: 'HMH describes Into Math as "organized into modules with sequenced lessons that follow a consistent, predictable instructional flow designed for whole-class instruction." The same parts appear in every lesson.',
      body: [
        { kind: 'table', caption: 'Parts of an Into Math lesson, in the order HMH lists them (Into Math program page, checked 31 October 2026), with what a parent may see (our reading)', head: ['Part', 'What a parent may notice'], rows: [
          ['Learning Goal Routine', 'The child can tell you what the lesson was for'],
          ['Spark Your Learning task', 'An open problem tried before any method; HMH says "Each lesson begins with a Spark Your Learning task"'],
          ['Task-based learning', 'Work built from that first task'],
          ['Turn &amp; Talk', 'Partner talk, which is why children may say "we discussed it"'],
          ['Language Routines', 'Vocabulary and sentence frames for explaining'],
          ['Quick Check', 'A short check that steers what comes next']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Practice Plus and Practice On Your Own',
          left: [
            'HMH lists "a Student Edition with Practice On Your Own" and a Practice Plus workbook giving "four pages per lesson covering lesson and fluency practice, application, and Train Your Memory".',
            'Train Your Memory pages, like Go Math\'s Spiral Review, bring back older skills. A wrong answer there is a clue about an earlier module, not today\'s.'
          ],
          rightH3: 'Open Middle problems',
          right: [
            'Into Math includes Open Middle problems, which have one clear goal but many ways to reach it. HMH says they push students beyond memorizing formulas.',
            'Parents sometimes find them frustrating because there is no single procedure. Guessing, checking and explaining is exactly the intended work.'
          ] }
      ]
    },
    {
      id: 'homework', tint: 'deep', eyebrow: 'Homework pages',
      h2: 'Why is my child stuck on Go Math homework?',
      lede: 'Most stuck homework falls into a few patterns. These come from our teachers\' live lessons with HMH students and are general teaching guidance, not statistics about the programs.',
      body: [
        { kind: 'table', caption: 'Common reasons homework stalls and what helps (our teaching notes)', head: ['What happens', 'The likely cause', 'What to try tonight'], rows: [
          ['Today\'s problems fine, Spiral Review wrong', 'An earlier chapter has faded', 'Note the topic; review it at the weekend'],
          ['Word problems left blank', 'No routine for reading them', 'Use the five-line routine below'],
          ['Right answer, "explain" box empty', 'The child can do it but not say it', 'Ask them to tell you, then write what they said'],
          ['Every page slow', 'Facts are not automatic yet', 'Five minutes of facts before homework'],
          ['Tears at the exploratory problem', 'Fear of being wrong with no method', 'Praise any start; drawing counts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Spiral Review triage',
          left: [
            'Our suggestion for parents: when a Spiral Review question goes wrong, write its topic on a sticky note. After a week, the notes that repeat show which earlier chapter needs a second look.',
            'That list is the most useful thing a family can bring to a first class.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not complete Practice and Homework pages for children and we do not share answer keys. Our teachers explain the idea on fresh problems they have written, and your child then does the school page alone.',
            'HMH\'s own Reteach and Additional Practice options, which the school may assign, are also worth asking the teacher about.'
          ] }
      ]
    },
    {
      id: 'routine', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How do you solve Go Math word problems step by step?',
      lede: 'Our five-line routine, then three worked examples on grade 3 to 5 topics. All are written by our teachers; none comes from an HMH book.',
      body: [
        { kind: 'table', caption: 'A five-line routine for any word problem (ours)', head: ['Line', 'The child writes', 'Example: "A class of 156 students is split into 6 equal teams. How many in each?"'], rows: [
          ['1. Question', 'What am I asked to find?', 'Pupils per team'],
          ['2. Know', 'Numbers and facts given', '156 students, 6 equal teams'],
          ['3. Plan', 'Which operation, and why?', 'Equal sharing, so divide'],
          ['4. Solve', 'Show the working', '156 / 6 = 26'],
          ['5. Check', 'Does it make sense?', '6 x 26 = 156, and 26 is a sensible team size']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Partial quotients for 156 / 6 (grade 4)',
          left: [
            'Take away friendly chunks of 6. Ten sixes are 60, so subtract 60 twice: 156 - 60 - 60 = 36. That is 20 sixes so far.',
            'Six sixes make 36, so 36 - 36 = 0. Add the chunks: 10 + 10 + 6 = 26. The idea to say aloud: division counts how many groups fit, and you may take them out in any sizes you know.'
          ],
          rightH3: 'Elapsed time from 9:45 to 11:20 (grade 3)',
          right: [
            'Jump on a time line. From 9:45 to 10:00 is 15 minutes. From 10:00 to 11:00 is 1 hour. From 11:00 to 11:20 is 20 minutes.',
            'Total: 1 hour and 15 + 20 = 35 minutes, so 1 hour 35 minutes. The idea to say aloud: land on the next whole hour first, because hours are easy to count.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Dividing by a unit fraction (grade 5)',
          left: [
            'Our problem: 3 pizzas are cut into quarters. How many quarter pieces? Each pizza gives 4 quarters, so 3 pizzas give 3 x 4 = 12.',
            'Written as division: 3 / (1/4) = 12. The idea to say aloud: dividing by a quarter asks how many quarters fit, so the answer is bigger than 3.'
          ],
          rightH3: 'Answering the "explain" box',
          right: [
            'A good written explanation names the operation and the reason: "I divided because the students were shared into equal teams. I checked by multiplying 6 by 26."',
            'Two sentences like that meet the "explain your thinking" prompts HMH describes in its Elaborate phase, without any special vocabulary.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set: use the five-line routine (ours; answers in brackets)', head: ['Problem', 'Plan, then answer'], rows: [
          ['168 books packed 8 to a box. How many boxes?', 'Divide; partial quotients [21 boxes]'],
          ['A film runs from 2:50 to 4:35. How long?', 'Jump to 3:00 first [1 hour 45 minutes]'],
          ['5 ribbons each cut into thirds. How many pieces?', 'Divide by 1/3 [15 pieces]'],
          ['A bag holds 48 marbles; Jo has 7 bags. How many marbles?', 'Multiply [336]'],
          ['9 x 7 then subtract 18', 'Order matters [45]'],
          ['Which is more, 2/5 or 3/10?', 'Make tenths [2/5 = 4/10, so 2/5]']
        ] }
      ]
    },
    {
      id: 'alongside', tint: 'deep', eyebrow: 'With a tutor',
      h2: 'How can a live tutor help alongside Go Math or Into Math?',
      lede: 'We teach around the school\'s chapter or module. The teacher at school sets the pace; our job is to make the next homework page something your child can start alone.',
      body: [
        { kind: 'ol', items: [
          '<b>Send the chapter or module and the lesson title.</b> Add the Spiral Review or Train Your Memory topics that went wrong.',
          '<b>Find the older gap.</b> The teacher checks the earlier skill first, because that is often the real problem.',
          '<b>Teach on new problems.</b> Fresh problems written by our teachers, so the school pages stay your child\'s own work.',
          '<b>Practise the routine.</b> Every word problem in class uses the same five lines until they become habit.',
          '<b>Before a Chapter Test.</b> A mixed review of that chapter, in the style of the school\'s checks but never copied from them.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'No tutor needed', p: 'When homework is calm, Spiral Review is mostly right and your child can explain answers.' },
          { h3: 'A group class', p: 'When your child benefits from Math Talk style discussion with others, in a batch of fifteen to twenty.' },
          { h3: 'One to one', p: 'When an older chapter is missing, or homework regularly ends in tears.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Word problems',
    h2: 'How children grow at word problems',
    lede: 'Our description of the stages we see, from guessing to explaining.',
    table: { caption: 'Stages with word problems (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Number grabbing', 'Uses whatever numbers appear, with any operation'],
      ['2. Keyword hunting', 'Looks for words like "total" or "left"'],
      ['3. Picturing', 'Draws the situation before choosing'],
      ['4. Planning', 'Says which operation and why, then checks']
    ] },
    left: { h3: 'For parents', ps: [
      'Keyword hunting works on easy pages and fails on Spiral Review. Moving past it is the goal.',
      'Ask "what is happening in this story?" before "what do you do?"'
    ] },
    right: { h3: 'For students', ps: [
      'Write the question in your own words first.',
      'Check by doing the opposite operation.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for Go Math and Into Math students',
    lede: 'From kindergarten to the start of algebra.',
    bands: [
      { num: 'I', h3: 'K to 2', sub: 'Listen and Draw years', courses: [
        { code: 'GM / A / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting, shapes and first sums.' },
        { code: 'GM / A / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Place value you can touch.' }
      ] },
      { num: 'II', h3: 'Grades 3 to 5', sub: 'Unlock the Problem years', courses: [
        { code: 'GM / B / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The full grade 1 to 5 range.' },
        { code: 'GM / B / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Fast facts with reasons.' },
        { code: 'GM / B / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Puzzles and patterns, ages 6 to 9.' }
      ] },
      { num: 'III', h3: 'Grade 6 and up', sub: 'Toward Algebra 1', courses: [
        { code: 'GM / C / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, integers, equations.' },
        { code: 'GM / C / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For Into Math students nearing Algebra 1.' },
        { code: 'GM / C / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Stretch problems for keen students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Schedule',
    h2: 'Live classes that fit around school homework',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon, before the homework is due.' },
      { time: 'Weekends', l: 'Spiral Review catch-up and test review.' },
      { time: '1-on-1', l: 'Fitted to your child\'s school timetable.' }
    ],
    cells: [
      { h3: 'Chapter or module', p: 'We follow your school order.' },
      { h3: 'Older gaps first', p: 'Spiral Review clues followed up.' },
      { h3: 'One routine', p: 'Five lines for every word problem.' },
      { h3: 'New problems', p: 'Written by our teachers.' },
      { h3: 'Explain boxes', p: 'Practice at writing reasons.' },
      { h3: 'Class size', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some children pair math with beginner coding. Browse their work on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on Google, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'Go Math and Into Math help is billed monthly in US dollars, and families can stop at the end of any month, so a few months of support through fractions or long division is a common pattern.',
    free: ['Free first class', 'Bring tonight\'s homework page', 'No card'],
    group: ['Fifteen to twenty per class', 'One familiar teacher', 'Pick a batch time', 'Monthly billing'],
    one: ['Private teacher', 'Follows the school chapter', 'Times you choose']
  },

  faq: {
    eyebrow: 'From parents',
    h2: 'Go Math homework help: common questions',
    items: [
      { q: 'Can you help with Go Math homework online?', a: 'Yes. Our teachers run live online classes for children whose schools use HMH Go Math! or Into Math. We teach the idea behind the homework on new problems, in a batch of 15 to 20 or one to one.' },
      { q: 'What grades does Go Math cover?', a: 'HMH lists Go Math! as a core math curriculum for grades K to 6. Into Math runs from kindergarten to Algebra 1, and HMH has a separate Into Algebra 1, Geometry, Algebra 2 series for grades 8 to 12.' },
      { q: 'Is Into Math the same as Go Math?', a: 'No. Both are from HMH, but Go Math! is organized in chapters around a 5E lesson model, while Into Math uses modules whose lessons begin with a Spark Your Learning task. The topics in a grade overlap, but the order and activities differ.' },
      { q: 'What is Spiral Review in Go Math?', a: 'It is a set of questions on each Practice and Homework page that brings back earlier topics. HMH says they reinforce previously taught concepts throughout the year, so a wrong Spiral Review answer usually points to an older chapter.' },
      { q: 'Where can I get a Go Math practice book for grade 3, 4 or 5?', a: 'Practice and Homework pages come with the school\'s program, so ask your child\'s teacher what is available at home. Our teachers also write fresh practice on the same chapter topics.' },
      { q: 'Do you give Go Math answer keys?', a: 'No. We never share answer keys or do assigned pages for children. We explain the method on our own problems, and your child then solves the school page independently.' },
      { q: 'Why does my child struggle with Go Math word problems?', a: 'In our experience the usual cause is having no routine for reading the problem, so the child grabs numbers or hunts for keywords. A short, fixed routine of question, know, plan, solve, check helps most children quickly.' },
      { q: 'Is Go Math available in Spanish?', a: 'HMH says the full Go Math! program is available in Spanish, and that Into Math has a Spanish counterpart called Arriba las Matematicas. Our classes are taught in English.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of HMH?', a: 'No. We are an independent online school. Go Math! and Into Math belong to their owner, and we describe them only from HMH\'s own published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More grade-by-grade help for US families.',
    items: [
      { href: '/online-math-tutor-1st-grade', label: 'First grade math tutoring', p: 'Counting, addition and early place value.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication, division and time.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Long division and fractions.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'The last Go Math year, and ratios.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'Help with standards-based homework.' },
      { href: '/math-catch-up-program', label: 'Math catch-up program', p: 'When several earlier topics need repair.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us whether it is Go Math or Into Math, the grade, the chapter or module, and the lesson. If you have kept a list of Spiral Review slips, bring it.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">our live teaching</a>, or see <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Our teachers are in India and hold classes at US after-school and evening hours. Send a WhatsApp message and we will suggest a time.',
    formNote: 'Booking the free class needs no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Elementary math', links: [
        { href: '/online-math-tutor-2nd-grade', label: 'Grade 2 math' },
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional' },
        { href: '/math-catch-up-program', label: 'Catch-up program' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Question, know, plan, solve, check'
  },

  personalityCss: `
.ag-root.ag-gh .ag-hero h1 { letter-spacing: -0.008em; max-width: 23ch; }
.ag-root.ag-gh .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-gh .ag-table caption { text-align: left; font-weight: 600; font-style: normal; }
.ag-root.ag-gh .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-gh .ag-section-head h2 { max-width: 31ch; }
`,

  dossier: {
    curriculumAuthority: 'HMH, hmhco.com Go Math! and Into Math program pages, read raw 31 October 2026: Go Math! K-6, chapters, 5E model, Launch Activities, Show What You Know, Vocabulary Builder, Listen and Draw and Unlock the Problem, On Your Own and Problem Solving, Practice and Homework with Spiral Review, Quick Check, Chapter Review and Test, Reteach, Challenge, Additional Practice, Waggle, Spanish edition, new edition with support for current version; Into Math K-Algebra 1 and Into Algebra 1, Geometry, Algebra 2 for 8-12, modules, lesson parts from Learning Goal Routine to Quick Check, Spark Your Learning, Practice On Your Own, Practice Plus four pages per lesson with Train Your Memory, Open Middle, Spanish counterpart.',
    localProject: 'Our five-line word-problem routine worked on 156 students in 6 teams; 156 / 6 by partial quotients; elapsed time 9:45 to 11:20; 3 / (1/4) = 12 with pizzas; a model explain-box answer; Spiral Review sticky-note triage; a six-item practice set. Lesson family: reading a word problem in a fixed routine before calculating.',
    requiredMentions: [
      'Go Math! organizes instruction through a chapter-based structure built around the 5E lesson model.',
      'Each chapter opens with Launch Activities that introduce students to the overarching domain, present an exploratory problem, and include a Math Talk question for partner or group discussion.',
      'further reinforce previously taught concepts and procedures throughout the year.',
      'On Your Own and Problem Solving problems require students to explain their thinking',
      'Rest assured, we are still here to support teachers using the current version of the program.',
      'organized into modules with sequenced lessons that follow a consistent, predictable instructional flow designed for whole-class instruction.',
      'four pages per lesson covering lesson and fluency practice, application, and Train Your Memory',
      'a Student Edition with Practice On Your Own',
      '156 - 60 - 60 = 36',
      '3 / (1/4) = 12'
    ],
    sources: [
      { claim: 'Go Math! grades, chapter structure, 5E model, homework pages, checks, Spanish edition.', url: 'https://www.hmhco.com/programs/go-math' },
      { claim: 'Into Math grades, module structure, lesson parts, Practice Plus, Spanish counterpart.', url: 'https://www.hmhco.com/programs/into-math' },
      { claim: 'HMH program list (Go Math! K-6, Into Math K-Algebra 1, Into Algebra 1, Geometry, Algebra 2 for 8-12) from the site navigation on both pages.', url: 'https://www.hmhco.com/programs/into-math' }
    ],
    rejectedClaims: [
      'HMH efficacy statements and student-reach figures beyond the one sentence quoted in the header: not printed.',
      'Named authors and language consultants: not used.',
      'AI tool features on HMH Ed: not described.',
      'Practice and Homework pages, Spiral Review questions, answers and tests: not reproduced; all problems are ours.',
      'Third-party answer sites: not linked.',
      'Prices: not used.',
      'That tutoring raises grades or scores: refused.',
      'Any affiliation with HMH: none, stated on the page.'
    ]
  }
};
