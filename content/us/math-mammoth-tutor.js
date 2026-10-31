'use strict';
// Math Mammoth tutor (ag- curriculum help door; UK and US exams cluster Phase 2, row US091, group B17).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/math-mammoth-tutor/):
//  - mathmammoth.com (home): "Math Mammoth Light Blue Series constitutes a full elementary mathematics curriculum for grades
//    K-8."; mastery-oriented, conceptual understanding, mental math, number sense; "nearly self-teaching"; "The lessons break
//    apart mathematical concepts and explain the "why" of math."; "Mental math strategies are taught and practiced
//    explicitly."; "Word problems are present in nearly every lesson"; "The operations used in the problems vary so that
//    children learn to think, and not simply apply the operation that is in the title of the lesson."; "All the instruction
//    in the worktexts is written directly to the student."; Blue Series topical worktexts "work great for filling in gaps";
//    placement tests; free online practice; free video lessons; versions US, International, Canadian, South African.
//  - mathmammoth.com/complete-curriculum: "Each grade level typically contains 8-10 chapters."; "Visual models and exercises
//    are used a lot."; "Each grade level consists of two student worktexts (A and B), which contain both the teaching
//    (explanations) and all of the student work (exercises)."; worksheet maker; "Levels 1-8 also include answer keys,
//    chapter tests, and additional cumulative review worksheets."; "For grades 1-7, there are free videos that are matched
//    to the curriculum" (grade 8 in progress); placement warning "Many popular math curricula are easier than Math Mammoth
//    and thus there is a danger the child is placed too high"; "Math Mammoth does not offer algebra 1 or above."; "After
//    MM7 or MM8, students can proceed directly to high school math (such as algebra 1)."; lesson plans for an online
//    planner; scope and sequence PDF.
//  - mathmammoth.com/complete/placement_tests: "They are end-of-year (EOY) tests"; questions grouped by topic; start with
//    the highest level you think the student will pass; administering sections of lower tests to size a gap; no strict
//    time limit; postpone testing where a child is anxious about math.
// Not used: prices, sale and coupon offers, testimonials and reviewer names, the author's name, the screener link for
// learning differences (health content), and any worktext page, answer key or test item.
// Our own material, labelled: the strategy table for 7 x 8, 25 x 12 and 9 x 6, 96 / 4 by splitting, counting up to make
// change, the mixed-operation word problem set, the stall table.
// Lesson family: mental-math strategies explained aloud, then chosen on mixed word problems.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for homeschool families using Math Mammoth: the Light Blue grades, worktexts A and B, placement, and a live teacher for mental math and word problems.' },
  slug: 'math-mammoth-tutor',
  code: 'max',
  accent: '#835F0F',
  accentRationale: 'Math Mammoth tutor: an old-gold ochre, #835F0F as allocated, earthy for a homeschool page and about 5.5:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Math Mammoth tutor',
  title: 'Math Mammoth Tutor Online: Live Help for Grades 1 to 7',
  description: 'A Math Mammoth tutor online for homeschoolers: how the Light Blue worktexts are built, placing your child, where they stall, and live help with mental math.',
  ogDescription: 'Math Mammoth is written straight to the student and many children teach themselves from it. Here is how the Light Blue Series works, why placement matters, and where a live teacher helps most.',
  twitterDescription: 'Live help for Math Mammoth students: mental math, word problems and the why.',
  pageName: 'Math Mammoth Tutor',
  webPageDescription: 'A guide for US homeschool families using Math Mammoth, built from mathmammoth.com checked on 31 October 2026; the strategies, worked examples and stall points are written by Modern Age Coders.',
  courseDescription: 'Live online math lessons for homeschool students using Math Mammoth, grades 1 to 7, teaching mental-math strategies and mixed word problems with reasons, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Math Mammoth tutor',
  navLinks: [
    { href: '#series', label: 'The series' },
    { href: '#worktext', label: 'Worktexts' },
    { href: '#placement', label: 'Placement' },
    { href: '#stall', label: 'Stall points' },
    { href: '#strategies', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Math Mammoth Light Blue Series &middot; Grades 1 to 7',
  h1: 'Math Mammoth tutor online, for when self-teaching needs a voice',
  lede: 'Math Mammoth is built to be read by the child: the explanations, the pictures and the exercises are all in the same worktext, and many homeschoolers work through it with little help. Then a chapter arrives where the written explanation is not enough, often in multiplication, long division or fractions, and the child needs someone to talk it through. Below, using Math Mammoth\'s published pages, we set out how the Light Blue Series is put together, then show the point at which a live teacher is worth adding and how to do it without taking over.',
  secondaryCta: { href: '#strategies', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Math Mammoth and is stuck on a chapter. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Curriculum', 'Math Mammoth Light Blue'],
    ['Grades', 'K to 8'],
    ['Books', 'Worktexts A and B per grade'],
    ['Style', 'Written to the student'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'Short version',
  capsule: 'Math Mammoth is a mastery-oriented homeschool math curriculum whose Light Blue Series covers grades K to 8 in two worktexts per grade, with explanations written directly to the student and a strong focus on mental math and word problems. A Math Mammoth tutor works live on the chapter where self-teaching has stalled. Modern Age Coders offers that help live online, mainly in its Elementary Mathematics course, choosing between a group batch and 1-on-1, and you pay nothing for the first class.',

  picks: {
    eyebrow: 'Courses for Light Blue students',
    h2: 'Live math courses for Math Mammoth families',
    lede: 'The worktext stays your curriculum. These classes add a teacher who listens to how your child thinks.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'MM / 01', title: 'Elementary math', note: 'Grades 1 to 5: place value, multiplication, division, fractions and measurement.' },
      { course: 'mental-maths-mastery-kids', code: 'MM / 02', title: 'Mental math', note: 'The strategy work Math Mammoth leans on, practised aloud.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MM / 03', title: 'Middle school math', note: 'For grades 6 and 7: ratios, percent, integers and equations.' }
    ]
  },

  sections: [
    {
      id: 'series', tint: 'tint', eyebrow: 'The series',
      h2: 'What is Math Mammoth, and what does it cover?',
      lede: 'The site says: "Math Mammoth Light Blue Series constitutes a full elementary mathematics curriculum for grades K-8." It also publishes topical books and versions for other countries.',
      body: [
        { kind: 'table', caption: 'Math Mammoth at a glance (mathmammoth.com home and complete curriculum pages, checked 31 October 2026)', head: ['Feature', 'What Math Mammoth says'], rows: [
          ['Scope', 'Light Blue Series, kindergarten to grade 8'],
          ['Approach', 'Mastery-oriented, organized into chapters by topic; "Each grade level typically contains 8-10 chapters."'],
          ['Emphasis', 'Conceptual understanding, mental math and number sense; "Visual models and exercises are used a lot."'],
          ['Mental math', '"Mental math strategies are taught and practiced explicitly."'],
          ['Word problems', '"Word problems are present in nearly every lesson", with operations varied so children have to think'],
          ['Teaching style', '"All the instruction in the worktexts is written directly to the student."; described as nearly self-teaching'],
          ['Videos', 'Free videos matched to the curriculum for grades 1 to 7, with grade 8 in progress'],
          ['Other books', 'Blue Series topical worktexts for filling gaps or supplementing another curriculum'],
          ['Versions', 'US, International, Canadian and South African']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What comes after grade 8',
          left: [
            'Math Mammoth is clear: "Math Mammoth does not offer algebra 1 or above." It adds: "After MM7 or MM8, students can proceed directly to high school math (such as algebra 1)."',
            'That handover is a natural moment for a live teacher, because the next curriculum will be written in a different voice.'
          ],
          rightH3: 'Why the operations are mixed',
          right: [
            'The site explains that "The operations used in the problems vary so that children learn to think, and not simply apply the operation that is in the title of the lesson."',
            'That is excellent design, and it is also why some children stall: they can do the lesson\'s skill, but not yet decide when to use it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.mathmammoth.com/" rel="noopener" target="_blank">Math Mammoth</a> and its <a class="ag-inline-link" href="https://www.mathmammoth.com/complete-curriculum" rel="noopener" target="_blank">complete curriculum page</a>, checked 31 October 2026. Math Mammoth is a trademark of its owner. Modern Age Coders is not affiliated with or endorsed by Math Mammoth.' }
      ]
    },
    {
      id: 'worktext', tint: 'deep', eyebrow: 'Worktexts',
      h2: 'How is a Math Mammoth lesson structured?',
      lede: 'There is no separate teacher script. "Each grade level consists of two student worktexts (A and B), which contain both the teaching (explanations) and all of the student work (exercises)."',
      body: [
        { kind: 'table', caption: 'What comes with each Light Blue grade level (complete curriculum page, checked 31 October 2026)', head: ['Part', 'What it is for'], rows: [
          ['Worktext A and worktext B', 'The explanations and the exercises, lesson by lesson, in chapters by topic'],
          ['Answer keys', 'Included for levels 1 to 8'],
          ['Chapter tests', 'Included for levels 1 to 8'],
          ['Cumulative review worksheets', 'Additional review across chapters, levels 1 to 8'],
          ['Worksheet maker', 'Extra practice sheets, with internet access'],
          ['Videos', 'Matched to lessons, free online for grades 1 to 7']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Read', p: 'Each lesson opens with an explanation and a picture, written to the child. Reading it slowly, aloud if needed, is the first step.' },
          { h3: 'Try', p: 'Exercises follow straight after, beginning close to the example and moving further from it.' },
          { h3: 'Mix', p: 'Word problems near the end use a mix of operations, which is where real understanding is tested.' }
        ] },
        { kind: 'p', mt: true, html: 'Because everything is in one book, a parent often sees only the finished page. The reasoning behind it may never be said aloud. Asking your child to explain one exercise each day, in their own words, is the simplest check that the self-teaching is working.' }
      ]
    },
    {
      id: 'placement', tint: 'tint', eyebrow: 'Placement',
      h2: 'How do I place my child in Math Mammoth?',
      lede: 'Math Mammoth publishes free placement tests and gives unusually direct advice: "Many popular math curricula are easier than Math Mammoth and thus there is a danger the child is placed too high" if you go by grade alone.',
      body: [
        { kind: 'ol', items: [
          '<b>Know what the tests are.</b> Math Mammoth says "They are end-of-year (EOY) tests", meant to be taken after studying that grade.',
          '<b>Start high.</b> Choose the highest level you think your child will pass, and give that test first.',
          '<b>Read results by section.</b> The questions are grouped by topic, so a low geometry or fractions section shows exactly where a gap is.',
          '<b>Test lower if needed.</b> Math Mammoth suggests giving sections of lower-level tests to find how large a gap is.',
          '<b>Keep it low-pressure.</b> It advises against strict time limits, and suggests postponing tests for a child who is already anxious about math.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Using the results with a tutor',
          left: [
            'Bring the section scores to a free first class. A child who scored well overall but low in one topic does not need to drop a whole grade.',
            'Our teachers can work on that topic live while your child continues the main worktext, or you can use a Blue Series topical book for the same gap, as Math Mammoth suggests.'
          ],
          rightH3: 'Switching from another curriculum',
          right: [
            'Children moving from a gentler program sometimes find Math Mammoth\'s word problems a shock. That is not failure; it is the placement warning in action.',
            'A few weeks of explained mixed problems usually settle it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.mathmammoth.com/complete/placement_tests" rel="noopener" target="_blank">Math Mammoth placement tests</a>, checked 31 October 2026.' }
      ]
    },
    {
      id: 'stall', tint: 'deep', eyebrow: 'Stall points',
      h2: 'Which Math Mammoth chapters cause children the most trouble?',
      lede: 'These are the places our teachers meet most often when homeschool students bring Math Mammoth work to class. They are general teaching guidance, not statistics.',
      body: [
        { kind: 'table', caption: 'Common Math Mammoth stall points and what helps (our teaching notes)', head: ['Where', 'What happens', 'What tends to help'], rows: [
          ['Grade 2 and 3 mental math', 'Counts on fingers instead of using a strategy', 'Name one strategy and use only that for a week'],
          ['Grade 3 and 4 multiplication', 'Tables memorized in order, not by relationship', 'Build each fact from one you know'],
          ['Grade 4 long division', 'Loses place in the steps', 'Estimate first, then divide'],
          ['Grade 4 and 5 fractions', 'Treats numerator and denominator as separate numbers', 'Always draw the whole'],
          ['Making change', 'Subtracts on paper and loses track', 'Count up from the price'],
          ['Mixed word problems', 'Uses the operation in the lesson title', 'Ask "what is happening?" before any numbers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The self-teaching trap',
          left: [
            'A capable reader can finish pages by copying the pattern of the example. Scores look fine until the chapter test or the cumulative review.',
            'If the review pages go badly after good lesson pages, the explanation was read but not understood.'
          ],
          rightH3: 'When to bring in a teacher',
          right: [
            'Not for one bad page. A teacher helps when the same kind of mistake repeats over a chapter, or when your child stops wanting to open the book.',
            'Often a few sessions on one chapter are enough before the worktext can lead again.'
          ] }
      ]
    },
    {
      id: 'strategies', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'What mental math strategies help with Math Mammoth?',
      lede: 'Math Mammoth teaches mental math explicitly, and these are the kinds of strategies our teachers practise aloud with students. All examples and wording are ours, not taken from the worktexts.',
      body: [
        { kind: 'table', caption: 'Multiplication facts from facts you already know (our examples)', head: ['Fact', 'Strategy', 'Said aloud'], rows: [
          ['7 x 8', 'Double, double, double: 7 x 2 = 14, x 2 = 28, x 2 = 56', '"Times 8 is doubling three times."'],
          ['9 x 6', 'Ten times, minus one group: 60 - 6 = 54', '"Nine sixes are ten sixes take away one six."'],
          ['6 x 7', 'Five sevens plus one more: 35 + 7 = 42', '"Six groups is five groups and one more."'],
          ['25 x 12', 'Four 25s make 100: 12 is three fours, so 300', '"Group the 25s into hundreds."'],
          ['4 x 19', 'Round and fix: 4 x 20 = 80, minus 4 = 76', '"I used one too many in each group."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Dividing 96 by 4 in your head',
          left: [
            'Split 96 into parts that divide easily: 80 and 16. Then 80 / 4 = 20 and 16 / 4 = 4, so 96 / 4 = 24.',
            'Check by multiplying: 24 x 4 = 96. The idea to say aloud: you may split the number you are dividing, as long as every part is shared by the same amount.'
          ],
          rightH3: 'Making change by counting up',
          right: [
            'Our problem: something costs 13.65 dollars and you pay with a 20-dollar bill. Count up from the price: 35 cents makes 14.00, then 1 dollar makes 15.00, then 5 dollars makes 20.00.',
            'Change: 5 + 1 + 0.35 = 6.35 dollars. The idea to say aloud: it is easier to add up to the bill than to subtract across zeros.'
          ] },
        { kind: 'table', mt: true, caption: 'Mixed word problems: decide the operation first (ours; answers in brackets)', head: ['Problem', 'What is happening, and the answer'], rows: [
          ['A book has 8 chapters of 24 pages. How many pages?', 'Equal groups, so multiply [192]'],
          ['84 stickers are shared by 7 children. How many each?', 'Equal sharing, so divide [12]'],
          ['A ticket costs 6.40 dollars; you pay 10 dollars. Change?', 'Count up [3.60 dollars]'],
          ['Sam read 37 pages, then 48 more. Pages read?', 'Joining, so add [85]'],
          ['A 3/4-full jug holds 600 mL. Full jug?', 'Each quarter is 200 mL [800 mL]'],
          ['9 x 14 in your head', 'Ten fourteens minus one [126]']
        ] }
      ]
    },
    {
      id: 'beside', tint: 'deep', eyebrow: 'With a tutor',
      h2: 'How does a live tutor work alongside Math Mammoth?',
      lede: 'Math Mammoth is designed for independence, so a tutor should protect that. Our lessons follow the worktext and hand the work back to your child as soon as possible.',
      body: [
        { kind: 'ol', items: [
          '<b>Tell us the grade, worktext (A or B), chapter and lesson.</b> Placement test section scores help too.',
          '<b>Read the explanation together.</b> The teacher asks your child to put it in their own words, which shows what was missed.',
          '<b>Practise the strategy aloud.</b> Mental math in particular is learned by saying it, so classes are full of talk.',
          '<b>Mix the problems.</b> Fresh mixed word problems written by our teachers, so your child practises choosing the operation.',
          '<b>Hand back to the book.</b> When your child can explain the chapter, they carry on alone with the worktext and its reviews.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Worktext alone', p: 'For a child who reads the explanations, explains answers when asked and does well on chapter tests.' },
          { h3: 'Worktext plus a batch', p: 'For a child who enjoys hearing others\' strategies, in a class of fifteen to twenty.' },
          { h3: 'Worktext plus 1-on-1', p: 'For a gap shown by placement, or a chapter where confidence has gone.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Strategies',
    h2: 'From counting to choosing a strategy',
    lede: 'Our description of how mental math grows in a Math Mammoth child.',
    table: { caption: 'Stages of mental math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Counting', 'Counts on or uses fingers'],
      ['2. Recalling', 'Knows some facts by heart'],
      ['3. Deriving', 'Builds new facts from known ones'],
      ['4. Choosing', 'Picks the quickest strategy and says why']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 matters more than speed. A child who can build 7 x 8 from 7 x 4 will never truly forget it.',
      'Ask "how did you know?" more often than "what is the answer?"'
    ] },
    right: { h3: 'For students', ps: [
      'If you forget a fact, build it from one you know.',
      'Before a word problem, say what is happening in the story.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Math Mammoth homeschoolers',
    lede: 'Arranged by where your child is in the Light Blue Series.',
    bands: [
      { num: 'I', h3: 'Kindergarten to grade 2', sub: 'First numbers', courses: [
        { code: 'MM / K / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Hands-on counting and shape.' },
        { code: 'MM / K / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Beads for place value.' },
        { code: 'MM / K / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Pattern puzzles, ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Grades 3 to 5', sub: 'Operations and fractions', courses: [
        { code: 'MM / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Multiplication to fractions.' },
        { code: 'MM / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Strategies, said aloud.' },
        { code: 'MM / E / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic math', blurb: 'Extra calculation shortcuts.' }
      ] },
      { num: 'III', h3: 'Grades 6 to 8 and after', sub: 'Toward algebra', courses: [
        { code: 'MM / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, percent, integers.' },
        { code: 'MM / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The step after MM7 or MM8.' },
        { code: 'MM / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Number patterns in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'Live classes that hand the work back to the worktext',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Daytime homeschool slots or later.' },
      { time: 'Weekends', l: 'A weekly session on the hardest lesson.' },
      { time: '1-on-1', l: 'Matched to your worktext chapter.' }
    ],
    cells: [
      { h3: 'Worktext leads', p: 'We follow your chapter.' },
      { h3: 'Said aloud', p: 'Strategies practised in talk.' },
      { h3: 'Mixed problems', p: 'Choosing the operation.' },
      { h3: 'Placement aware', p: 'Section gaps targeted.' },
      { h3: 'Short stints', p: 'Help for a chapter, then back.' },
      { h3: 'Group or single', p: 'Fifteen to twenty, or 1-on-1.' }
    ]
  },

  projectsH2: 'Our students\' projects',
  projectsLede: 'Homeschoolers often try coding once arithmetic feels easy. Some results are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, copied without changes.',

  fees: {
    h2: 'Fees',
    lede: 'Math Mammoth support is billed monthly in US dollars, with no term to sign up for. Many homeschool families use a teacher for a single chapter, such as long division, and then let the worktext lead again.',
    free: ['A free trial class', 'Bring the stuck lesson', 'No card details'],
    group: ['A class of fifteen to twenty', 'Same teacher weekly', 'Pick a batch', 'Month by month'],
    one: ['Just your child', 'Paced to the worktext', 'Daytime slots too']
  },

  faq: {
    eyebrow: 'Homeschool questions',
    h2: 'Math Mammoth tutoring: common questions',
    items: [
      { q: 'Do you offer a Math Mammoth tutor online?', a: 'Yes. Homeschool students who use Math Mammoth join our teachers live online, working on the chapter where they are stuck. Classes run in a batch of 15 to 20 or one to one.' },
      { q: 'What grades does Math Mammoth cover?', a: 'The Light Blue Series is a full curriculum for kindergarten to grade 8. Math Mammoth says it does not offer Algebra 1 or above, and that after grade 7 or 8 students can go straight to high school math such as Algebra 1.' },
      { q: 'Is Math Mammoth self-teaching?', a: 'Math Mammoth describes it as nearly self-teaching, with all instruction written directly to the student and free matched videos for grades 1 to 7. Many children manage alone for long stretches; a teacher helps when a chapter does not click.' },
      { q: 'How does Math Mammoth teach multiplication?', a: 'Math Mammoth says mental math strategies are taught and practised explicitly. In our classes we build each fact from known ones, such as 7 x 8 by doubling three times, so children can recover a fact they forget.' },
      { q: 'Where can I find Math Mammoth extra practice?', a: 'Each grade includes a worksheet maker, and levels 1 to 8 include cumulative review worksheets; the site also offers free online practice. Our teachers add fresh mixed problems of their own in class.' },
      { q: 'Which Math Mammoth placement test should my child take?', a: 'Math Mammoth suggests starting with the highest level test you think your child will pass. The tests are end-of-year tests grouped by topic, so look at section scores, and test lower sections if a gap appears.' },
      { q: 'Why is my child struggling with Math Mammoth word problems?', a: 'In our experience it is usually because the operations are mixed on purpose, and the child is still using whatever the lesson title suggests. Asking what is happening in the story before using any numbers helps a lot.' },
      { q: 'Will a tutor replace Math Mammoth?', a: 'No. The worktext stays your curriculum. We teach the stuck chapter live and hand the work back to the book as soon as your child can explain it.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Math Mammoth?', a: 'No. We are an independent online school. Math Mammoth is a trademark of its owner, and we describe it only from its own published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US homeschool families.',
    items: [
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning math across the homeschool years.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication facts and strategies.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Long division and fractions.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The step after Math Mammoth grade 7 or 8.' },
      { href: '/beast-academy-tutor', label: 'Beast Academy tutor', p: 'Another homeschool favorite, explained.' },
      { href: '/teaching-textbooks-math-help', label: 'Teaching Textbooks help', p: 'A self-grading app-based program, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s Math Mammoth grade, worktext A or B, chapter and lesson. Placement test section scores are welcome. We start with the lesson that stalled.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we teach online</a>, or view <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'With teachers based in India, we can teach US homeschoolers in the morning and early afternoon as well as the evening. Start with a WhatsApp message.',
    formNote: 'Free first class, and no payment details asked.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-2nd-grade', label: 'Grade 2 math' },
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS credit' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Double, double, double: 7 x 8'
  },

  personalityCss: `
.ag-root.ag-max .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-max .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-max .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-max .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-max .ag-section-head h2 { max-width: 29ch; }
`,

  dossier: {
    curriculumAuthority: 'Math Mammoth, mathmammoth.com home, complete curriculum and placement test pages, read raw 31 October 2026: Light Blue Series K-8; mastery-oriented chapters by topic, 8-10 per grade; conceptual, visual models, mental math and number sense; nearly self-teaching, instruction written to the student; worktexts A and B; answer keys, chapter tests, cumulative reviews for levels 1-8; worksheet maker; free videos grades 1-7; Blue Series topical books; four country versions; word problems in nearly every lesson with mixed operations; no Algebra 1 or above; placement warning; end-of-year placement tests grouped by topic, start high, no strict time limit.',
    localProject: 'Our multiplication strategy table (7 x 8 by doubling, 9 x 6, 6 x 7, 25 x 12, 4 x 19); 96 / 4 by splitting into 80 and 16; making change from a 20-dollar bill by counting up; a mixed word-problem set; a stall table. Lesson family: mental-math strategies said aloud, then chosen on mixed problems.',
    requiredMentions: [
      'Math Mammoth Light Blue Series constitutes a full elementary mathematics curriculum for grades K-8.',
      'Each grade level typically contains 8-10 chapters.',
      'Mental math strategies are taught and practiced explicitly.',
      'All the instruction in the worktexts is written directly to the student.',
      'Each grade level consists of two student worktexts (A and B), which contain both the teaching (explanations) and all of the student work (exercises).',
      'Math Mammoth does not offer algebra 1 or above.',
      'After MM7 or MM8, students can proceed directly to high school math (such as algebra 1).',
      'They are end-of-year (EOY) tests',
      'Double, double, double: 7 x 2 = 14, x 2 = 28, x 2 = 56',
      'Change: 5 + 1 + 0.35 = 6.35 dollars'
    ],
    sources: [
      { claim: 'Math Mammoth approach, mental math, word problems, self-teaching, Blue Series, versions.', url: 'https://www.mathmammoth.com/' },
      { claim: 'Light Blue Series structure, worktexts, included materials, videos, placement warning, no Algebra 1.', url: 'https://www.mathmammoth.com/complete-curriculum' },
      { claim: 'Placement tests: end-of-year, grouped by topic, how to administer.', url: 'https://www.mathmammoth.com/complete/placement_tests' }
    ],
    rejectedClaims: [
      'Prices, bundle discounts, coupons and sale dates on mathmammoth.com: not used.',
      'Testimonials and reviewer names, and the author\'s name: not repeated.',
      'The placement page\'s link to screeners for learning differences: not used (health content, outside our scope).',
      'Worktext pages, answer keys, tests and placement test items: not reproduced; all problems are ours.',
      'That tutoring raises scores or speeds a child through grades: refused.',
      'Any affiliation with Math Mammoth: none, stated on the page.'
    ]
  }
};
