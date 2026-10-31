'use strict';
// Times tables tutor online, UK (ag- maths door, England; UK and US exams cluster Phase 2, row UK005).
// Sources, read raw on 31 October 2026 with curl; raw copies in keyword-research-2026-09/uk-us-gap/src/times-tables-tutor-online-uk/:
//  - DfE, Mathematics programmes of study: key stages 1 and 2 (PRIMARY_national_curriculum_-_Mathematics_220714.pdf).
//    Year 2: "recall and use multiplication and division facts for the 2, 5 and 10 multiplication tables, including
//    recognising odd and even numbers"; "show that multiplication of two numbers can be done in any order
//    (commutative) and division of one number by another cannot"; notes connect "the 10 multiplication table to place
//    value, and the 5 multiplication table to the divisions on the clock face". Year 3: "recall and use multiplication
//    and division facts for the 3, 4 and 8 multiplication tables"; notes "Through doubling, they connect the 2, 4 and
//    8 multiplication tables." Year 4: "recall multiplication and division facts for multiplication tables up to 12 ×
//    12"; "recognise and use factor pairs and commutativity in mental calculations"; count in multiples of 6, 7, 9,
//    25 and 1000. Lower KS2: "By the end of year 4, pupils should have memorised their multiplication tables up to and
//    including the 12 multiplication table and show precision and fluency in their work."
//  - STA, Multiplication tables check: information for parents (gov.uk text version, updated 15 September 2025):
//    "It is an onscreen check consisting of 25 times table questions."; 3 practice questions; "6 seconds to answer each
//    question"; "No, you do not need to do anything additional to prepare your child for the check."; "There is no pass
//    mark for the check."
//  - DfE, Multiplication tables check attainment 2025 (explore-education-statistics, 20 November 2025): average score
//    21.0, up from 20.6 in 2024; 37% of eligible pupils scored 25, the most common mark.
//  - DfE, Curriculum and Assessment Review Final Report (November 2025): "We recommend retaining the Multiplication
//    Tables Check (MTC) in Year 4 as an important indicator of multiplicative competence."
//  - Times Tables Rock Stars, ttrockstars.com home, families and about-us pages (Maths Circle Ltd): "Suitable for all
//    learners aged 6 years and up"; "our question-based games automatically adapt to each child's unique learning
//    needs"; "There are eight different game modes to choose from, including multiplayer modes."; "No chat functions.
//    No in-game purchases. No ads."; "De-clutter the screen or hide the timer to help minimise anxiety."; FAQ: a child
//    with a school account does not need a family subscription; NumBots "released in 2019" for addition, subtraction
//    and number bonds; created and run by Maths Circle Ltd. Prices and usage counts on those pages deliberately not used.
// Our own: the count of 144, 78 and 28 facts, the derived-facts ladder, the six worked strategies, the weekly plan,
// and the practice set. Spine: recall is the target, but derived facts and understanding are the route, and a
// tutor adds what a game cannot: the reasoning behind each fact and the division that goes with it. Lesson family:
// a skill door spanning Years 2 to 6, distinct from the two Year 4 MTC pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'TIMES TABLES', blurb: 'From the 2, 5 and 10 in Year 2 to 12 × 12 by the end of Year 4. Only 28 facts are truly hard, and each can be built from one already known.' },
  slug: 'times-tables-tutor-online-uk',
  code: 'ttu',
  accent: '#32503B',
  accentRationale: 'Times tables: a deep bottle green (#32503B, 8.44:1 on #FBF8F2 and 7.26:1 on the deepest paper tint), steady and practical, apart from the Year 2 moss and the MTC pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Times tables tutor online',
  title: 'Times Tables Tutor Online UK | From Year 2 to 12 × 12',
  description: 'A times tables tutor online for UK children: which tables each year group learns, the 28 facts that are hard, how TT Rock Stars fits, and live classes.',
  ogDescription: 'Times tables in England build from the 2, 5 and 10 in Year 2 to 12 × 12 in Year 4. Most facts can be worked out from ones a child already knows.',
  twitterDescription: 'Times tables, Year 2 to Year 6: the curriculum order, derived facts, where TT Rock Stars helps, and live lessons that teach the why as well as recall.',
  pageName: 'Times Tables Tutor Online UK',
  webPageDescription: 'A guide for UK parents to how times tables are learned in England, from the national curriculum, with original strategies and live online lessons in recall and understanding.',
  courseDescription: 'Live online lessons in multiplication and division facts up to 12 × 12: arrays, doubling, derived facts, factor pairs and steady recall practice, for ages 6 to 11.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Times tables tutor',
  navLinks: [
    { href: '#order', label: 'Year by year' },
    { href: '#count', label: 'The 28 hard facts' },
    { href: '#strategies', label: 'Strategies' },
    { href: '#apps', label: 'TT Rock Stars' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Times tables &middot; Years 2 to 6, ages 6 to 11',
  h1: 'Times tables tutor online: recall built on understanding',
  lede: 'Most parents searching for times tables help have a child who can chant the 2s and 5s but stalls on 7 × 8, or who plays the school\'s times tables game every evening without getting much faster. The national curriculum is clear about the destination: by the end of Year 4, children should have memorised their tables up to 12 × 12. It is just as clear that the route starts with arrays, doubling and the order of multiplication, not with a stopwatch. This page sets out which tables each year learns, a short count showing that only 28 facts are really hard, six strategies that turn a known fact into a new one, where apps such as TT Rock Stars help and where they do not, and how our live lessons work.',
  secondaryCta: { href: '#order', label: 'Tables by year group' },
  wa: 'Hello Modern Age Coders, I would like a free first class for times tables.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the national curriculum and STA guidance',
  spec: [
    ['Year 2', '2, 5 and 10 times tables'],
    ['Year 3', '3, 4 and 8 times tables'],
    ['Year 4', 'All tables to 12 × 12'],
    ['Year 4 check', '25 questions, 6 seconds each'],
    ['Hard facts', '28, by our count'],
    ['Ages taught', '6 to 11'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Times tables in England follow the national curriculum: the 2, 5 and 10 tables in Year 2, the 3, 4 and 8 tables in Year 3, and every table up to 12 × 12 by the end of Year 4, when pupils take the statutory multiplication tables check of 25 on-screen questions. Fluent recall is the goal, built on understanding. Modern Age Coders teaches times tables live online for ages 6 to 11, in a group of 15 to 20 or 1-on-1, through Mental Maths for Kids. The first class is free, and we are not linked to TT Rock Stars or any school.',

  picks: {
    eyebrow: 'Courses for times tables',
    h2: 'Three courses that teach times tables properly',
    lede: 'Mental Maths for Kids is the main home for times tables. The other two suit a younger child and a child who has the facts but needs to use them.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'TT / 01', title: 'Mental Maths for Kids', note: 'Number sense, then the tables, for ages 5 to 10: arrays, doubling, derived facts and recall that lasts.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'TT / 02', title: 'Elementary Maths', note: 'The whole primary maths picture for Years 1 to 5, so the tables connect to place value, fractions and division.' },
      { course: 'abacus-mental-maths-course-for-kids', code: 'TT / 03', title: 'Abacus and Mental Maths', note: 'For a child who likes to see numbers: beads make grouping and multiplying visible.' }
    ]
  },

  sections: [
    {
      id: 'order', tint: 'tint', eyebrow: 'Year by year',
      h2: 'Which times tables should my child know in each year?',
      lede: 'The national curriculum introduces the tables in three waves across Years 2, 3 and 4, then keeps using them in Years 5 and 6.',
      body: [
        { kind: 'table', caption: 'Times tables in the national curriculum for England (DfE mathematics programmes of study)', head: ['Year', 'Ages', 'Statutory focus', 'How the curriculum links it'], rows: [
          ['Year 2', '6 to 7', 'Recall and use facts for the 2, 5 and 10 tables, including odd and even numbers', 'The 10 table to place value, the 5 table to the clock face; multiplication can be done in any order, division cannot'],
          ['Year 3', '7 to 8', 'Recall and use facts for the 3, 4 and 8 tables', '"Through doubling, they connect the 2, 4 and 8 multiplication tables."'],
          ['Year 4', '8 to 9', 'Recall facts for tables up to 12 × 12; use factor pairs and commutativity', 'Count in multiples of 6, 7, 9, 25 and 1000'],
          ['Years 5 and 6', '9 to 11', 'Use the facts in multiples, factors, primes, fractions and long multiplication', 'Fluency assumed from Year 4 onwards']
        ] },
        { kind: 'p', html: 'The curriculum\'s summary for Years 3 and 4 sets the bar in one sentence: "By the end of year 4, pupils should have memorised their multiplication tables up to and including the 12 multiplication table and show precision and fluency in their work." Note the word division too. Every year\'s statement asks for "multiplication and division facts", so a child who knows 6 × 7 = 42 is expected to know 42 ÷ 7 = 6 just as quickly.' },
        { kind: 'two', mt: true,
          leftH3: 'The Year 4 check, briefly',
          left: [
            'In June of Year 4 every child in a state-funded school in England takes the multiplication tables check. The STA\'s leaflet for parents describes it as "an onscreen check consisting of 25 times table questions", with 6 seconds for each one.',
            'It adds: "There is no pass mark for the check", and that parents do not need to prepare anything extra. Our <a class="ag-inline-link" href="/year-4-multiplication-tables-check-explained">Year 4 check explainer</a> and <a class="ag-inline-link" href="/multiplication-tables-check-year-4-practice">MTC practice page</a> go into it in detail.'
          ],
          rightH3: 'Why it is staying',
          right: [
            'The 2025 Curriculum and Assessment Review considered primary tests and concluded: "We recommend retaining the Multiplication Tables Check (MTC) in Year 4 as an important indicator of multiplicative competence."',
            'In the 2025 check the national average score was 21.0 out of 25, and 37 per cent of eligible pupils scored full marks, the most common result, according to the DfE\'s published statistics.'
          ] },
        { kind: 'source', html: 'Sources: DfE, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">Mathematics programmes of study: key stages 1 and 2</a>; STA, <a class="ag-inline-link" href="https://www.gov.uk/government/publications/multiplication-tables-check-information-for-parents" rel="noopener" target="_blank">Multiplication tables check: information for parents</a>; DfE, Multiplication tables check attainment: 2025; DfE, Curriculum and Assessment Review Final Report, November 2025. All read on 31 October 2026.' }
      ]
    },
    {
      id: 'count', tint: 'deep', eyebrow: 'The 28 hard facts',
      h2: 'How many times tables facts are there to learn?',
      lede: 'Fewer than it seems. A 12 by 12 grid has 144 squares, but our count shows that only 28 different facts are truly new once a child knows the easy tables and that order does not matter.',
      body: [
        { kind: 'table', caption: 'Shrinking the 12 × 12 grid (our own count)', head: ['Step', 'Facts left', 'Why'], rows: [
          ['Start with the full grid', '144', '12 rows of 12 products, from 1 × 1 to 12 × 12'],
          ['Use order (commutativity)', '78', '3 × 8 and 8 × 3 are the same fact, so each pair counts once: 12 + 11 + ... + 1'],
          ['Remove the 1, 2, 5, 10 and 11 tables', '28', 'These follow simple patterns. What remains are the products of 3, 4, 6, 7, 8, 9 and 12 with each other'],
          ['Of those, squares such as 7 × 7', '7 of the 28', 'Squares are often learned as a set of their own']
        ] },
        { kind: 'p', html: 'That third row is the honest size of the job. Twenty-eight facts, from 3 × 3 up to 12 × 12, are the ones that need real practice, and the curriculum gives children tools for most of them: doubling links the 2, 4 and 8 tables, and Year 4 asks children to "recognise and use factor pairs and commutativity in mental calculations". A child who has those tools rarely meets a fact that is completely new.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Patterns first', p: 'The 10s add a zero, the 5s are half the 10s, the 11s to 9 × 11 repeat the digit. These take days, not months.' },
          { h3: 'Then links', p: 'The 4s are double the 2s and the 8s double the 4s; the 6s double the 3s. One known table opens another.' },
          { h3: 'Then the stubborn few', p: 'Facts such as 7 × 8, 6 × 9 and 12 × 7 usually need a strategy and then steady, short practice to stick.' }
        ] }
      ]
    },
    {
      id: 'strategies', tint: '', eyebrow: 'Strategies',
      h2: 'What is the fastest way for a child to learn times tables?',
      lede: 'Understanding first, then short daily recall. Here are six strategies of ours, each one building a new fact from a known one, in the spirit of the curriculum\'s derived facts.',
      body: [
        { kind: 'two',
          leftH3: '1. The 9s from the 10s',
          left: [
            '<strong>Fact (ours).</strong> 9 × 7.',
            '<strong>Known.</strong> 10 × 7 = 70.',
            '<strong>Build.</strong> Nine sevens is one seven fewer than ten sevens: 70 &minus; 7 = 63.',
            '<strong>Why it works.</strong> Multiplying by 9 is multiplying by 10 and taking one group away. Draw it as an array of 10 rows with one row crossed out.'
          ],
          rightH3: '2. The 6s by doubling the 3s',
          right: [
            '<strong>Fact (ours).</strong> 6 × 8.',
            '<strong>Known.</strong> 3 × 8 = 24.',
            '<strong>Build.</strong> Six eights is two lots of three eights: 24 + 24 = 48.',
            '<strong>Why it works.</strong> Six is double three, so every 6 times fact is double a 3 times fact.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Splitting 7 × 8 into 5 and 2',
          left: [
            '<strong>Fact (ours).</strong> 7 × 8, the one most children find hardest.',
            '<strong>Split.</strong> Seven eights is five eights and two eights.',
            '<strong>Build.</strong> 5 × 8 = 40 and 2 × 8 = 16, so 40 + 16 = 56.',
            '<strong>Why it works.</strong> This is the distributive law that Year 4 pupils use, made visible by cutting an array into two parts.'
          ],
          rightH3: '4. The 8s as double, double, double',
          right: [
            '<strong>Fact (ours).</strong> 8 × 6.',
            '<strong>Build.</strong> Double 6 is 12, double 12 is 24, double 24 is 48.',
            '<strong>Check.</strong> It matches strategy 2, because 6 × 8 is the same fact.',
            '<strong>Why it works.</strong> Eight is 2 × 2 × 2, which is exactly the curriculum\'s link between the 2, 4 and 8 tables.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. The 12s as 10s and 2s',
          left: [
            '<strong>Fact (ours).</strong> 12 × 7.',
            '<strong>Split.</strong> Twelve sevens is ten sevens and two sevens.',
            '<strong>Build.</strong> 70 + 14 = 84.',
            '<strong>Why it works.</strong> The 12 table is the newest in Year 4 and the easiest to derive, since 10 and 2 are both easy tables.'
          ],
          rightH3: '6. Division from the same fact',
          right: [
            '<strong>Fact (ours).</strong> 54 &divide; 9.',
            '<strong>Ask.</strong> "Nine times what is 54?"',
            '<strong>Recall.</strong> 6 × 9 = 54, so the answer is 6.',
            '<strong>Why it works.</strong> Every times fact gives two division facts. Practising them together halves the work and matches the curriculum\'s "multiplication and division facts".'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) 9 × 8 from 10 × 8. (2) 6 × 7 by doubling a 3 times fact. (3) 7 × 7 split into 5 × 7 and 2 × 7. (4) 4 × 12 by doubling twice. (5) 72 &divide; 8. (6) Name two factor pairs of 36. (7) Which is bigger, 6 × 9 or 7 × 8? <strong>Answers:</strong> (1) 80 &minus; 8 = 72; (2) 21 + 21 = 42; (3) 35 + 14 = 49; (4) 24 then 48; (5) 9; (6) for example 4 and 9, 6 and 6, 3 and 12; (7) 7 × 8 = 56 is bigger than 6 × 9 = 54.' }
      ]
    },
    {
      id: 'apps', tint: 'tint', eyebrow: 'TT Rock Stars and apps',
      h2: 'Is TT Rock Stars enough, or does my child need a tutor?',
      lede: 'For many children a good practice app is enough once they understand the facts. A tutor helps when a child is practising facts they do not yet understand, or practising without getting faster.',
      body: [
        { kind: 'p', html: 'Times Tables Rock Stars, run by Maths Circle Ltd, is the app many UK primary schools set for homework. Its own site says it is "Suitable for all learners aged 6 years and up" and that its "question-based games automatically adapt to each child\'s unique learning needs". For families it lists "eight different game modes to choose from, including multiplayer modes", and states plainly "No chat functions. No in-game purchases. No ads." It also lets a parent "De-clutter the screen or hide the timer to help minimise anxiety", a setting worth knowing about for a child who freezes under time pressure. Its FAQ says a child with a school login does not need a family subscription.' },
        { kind: 'table', mt: true, caption: 'What a practice app does well, and what a teacher adds (our view)', head: ['Need', 'A practice app such as TT Rock Stars', 'A live teacher'], rows: [
          ['Daily repetition', 'Excellent: short, adaptive and motivating', 'Sets a plan, but practice still happens between lessons'],
          ['Finding which facts are weak', 'Shows stats and heatmaps', 'Also asks why a fact is weak, and spots counting on fingers'],
          ['Understanding a new fact', 'Mostly assumes it', 'Builds it from arrays, doubling or a known fact'],
          ['Division facts', 'Included in the games', 'Taught alongside each times fact as one family'],
          ['Using facts in real maths', 'Outside its scope', 'Fractions, area and word problems that need the facts'],
          ['A child who hates being timed', 'The timer can be hidden', 'Untimed reasoning first; speed later']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Signs an app alone is not working',
          left: [
            'Scores have been flat for weeks, or your child counts up in steps under the table for facts like 7 × 6.',
            'They can answer 6 × 7 but not 42 ÷ 6, or they avoid the game altogether.'
          ],
          rightH3: 'What we add in lessons',
          right: [
            'The reasoning behind each stubborn fact, so recall has something to rest on.',
            'A short weekly plan that uses the school\'s app well, rather than replacing it. We are not affiliated with TT Rock Stars or Maths Circle Ltd; the names are theirs.'
          ] },
        { kind: 'source', html: 'Source: Times Tables Rock Stars, <a class="ag-inline-link" href="https://ttrockstars.com/families/" rel="noopener" target="_blank">families page</a> and home page, read on 31 October 2026. Its sister programme NumBots, released in 2019 according to the same site, covers addition, subtraction and number bonds for younger children.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'A weekly plan',
      h2: 'How long should a child practise times tables each day?',
      lede: 'A few minutes a day beats an hour on Sunday. Here is a sample week of ours for one stubborn table, which fits around school homework.',
      body: [
        { kind: 'ol', items: [
          '<strong>Monday: build it.</strong> Make the 7 times table with an array or counters, and say each fact as a sentence: "four sevens are twenty-eight".',
          '<strong>Tuesday: link it.</strong> Use 5 × 7 and 2 × 7 to make the rest. Write the facts the child already knows in one colour.',
          '<strong>Wednesday: both ways.</strong> Mix multiplication and division: 7 × 6 and 42 ÷ 7, out loud, untimed.',
          '<strong>Thursday: little and quick.</strong> Five minutes on the school app, or ten flash cards, aiming for quick answers rather than perfect ones.',
          '<strong>Friday: use it.</strong> One real problem, such as "a week has 7 days; how many days are in 8 weeks?", and a check of which facts still need a strategy.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For a Year 2 child',
          left: [
            'Stay with the 2, 5 and 10 tables and odd and even numbers, as the curriculum asks. Count in fives round a clock face, and in tens along a number line.',
            'There is no need to rush to the 7s. Secure 2s, 5s and 10s make Year 3 much easier.'
          ],
          rightH3: 'For a Year 5 or 6 child',
          right: [
            'Gaps here hold back fractions, factors and long multiplication. Spend a few weeks closing them through the 28 hard facts, then use them straight away in real problems.',
            'Our <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths page</a> covers the wider upper primary curriculum.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs from counting to recall',
    lede: 'Where a child is with a fact matters more than which table it belongs to.',
    table: { caption: 'Stages in learning a times tables fact (our ladder)', head: ['Rung', 'What the child does', 'For example'], rows: [
      ['1. Counts in steps', 'Skip-counts from the start to reach the answer', '7, 14, 21, 28 to find 4 × 7'],
      ['2. Derives', 'Builds it from a known fact', '5 × 7 is 35, so 4 × 7 is 35 &minus; 7'],
      ['3. Recalls slowly', 'Knows it, after a pause', 'Answers 28 within a few seconds'],
      ['4. Recalls both ways', 'Answers at once, for times and divide', '4 × 7 and 28 ÷ 4 straight away']
    ] },
    left: { h3: 'Rung two is the important one', ps: [
      'Deriving keeps a child accurate while recall grows, and protects them when memory fails.',
      'For children who love number puzzles, see <a class="ag-inline-link" href="/primary-maths-challenge-practice">the Primary Maths Challenge</a>.'
    ] },
    right: { h3: 'Rung four takes repetition', ps: [
      'Short, spaced practice over weeks, not one long session.',
      'Classes can pause for school holidays.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for primary number skills',
    lede: 'Number facts first, then the wider maths that uses them.',
    bands: [
      { num: 'I', h3: 'Number facts', sub: 'Ages 5 to 11', courses: [
        { code: 'UK / TT1 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Bonds, doubles and tables built on number sense.' },
        { code: 'UK / TT1 / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Grouping made visible on the beads.' },
        { code: 'UK / TT1 / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation shortcuts for children who enjoy pattern.' }
      ] },
      { num: 'II', h3: 'Primary maths', sub: 'Years 1 to 6', courses: [
        { code: 'UK / TT2 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths', blurb: 'Tables connected to place value and fractions.' },
        { code: 'UK / TT2 / 02', slug: 'ks2-sats-maths-course', title: 'KS2 SATs Maths', blurb: 'Year 6 arithmetic, where every fact is used.' },
        { code: 'UK / TT2 / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Pattern and number puzzles for ages 6 to 9.' }
      ] },
      { num: 'III', h3: 'Beyond facts', sub: 'Using the numbers', courses: [
        { code: 'UK / TT3 / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Word problems and logic, from age 7.' },
        { code: 'UK / TT3 / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding, where loops are multiplication in disguise.' },
        { code: 'UK / TT3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For a confident upper primary child.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How times tables lessons run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The teachers are in India, and we give every lesson time in UK time.',
    slots: [
      { time: 'After school', l: 'Short, before homework.' },
      { time: 'Early evening', l: 'Around clubs and sport.' },
      { time: 'Weekend morning', l: 'Calm time for new tables.' }
    ],
    cells: [
      { h3: 'Build, then recall', p: 'Each new fact is made from arrays or a known fact before it is practised.' },
      { h3: 'Division together', p: 'Times and divide facts are taught as one family.' },
      { h3: 'The hard 28', p: 'Practice time goes where it is needed, not on the 2s and 10s.' },
      { h3: 'Works with school', p: 'We fit around the school\'s app and homework, not against them.' },
      { h3: 'Free first class', p: 'A relaxed check of which facts are secure, with nothing to pay.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20, or one child with one teacher.' }
    ]
  },

  projectsH2: 'Things our primary students made',
  projectsLede: 'Small projects from regular classes, none of them assessed. The full set is in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words from Google, not edited.',

  fees: {
    h2: 'Fees for times tables lessons',
    lede: 'Start with a free class. After that a single monthly fee applies, cheaper in a group than 1-on-1, and we invoice only after you have chosen a course and a weekly time. Stop whenever you like.',
    free: ['A relaxed first class', 'A map of secure and shaky facts', 'Just a phone number to book'],
    group: ['15 to 20 children at a similar stage', 'One teacher across the term', 'A short weekly practice plan', 'Fits alongside the school app'],
    one: ['A teacher for one child', 'Focused on that child\'s hard facts', 'Untimed work for anxious children']
  },

  faq: {
    eyebrow: 'Times tables questions',
    h2: 'What parents ask about times tables',
    items: [
      { q: 'By what age should a child know their times tables?', a: 'The national curriculum in England expects children to have memorised the tables up to 12 × 12 by the end of Year 4, usually age 9. The 2, 5 and 10 tables come in Year 2 and the 3, 4 and 8 tables in Year 3.' },
      { q: 'Which times tables are the hardest?', a: 'Usually the 6, 7, 8, 9 and 12 tables, and facts such as 7 × 8 and 6 × 9. By our count only 28 different facts remain once the easy tables and the order of multiplication are taken into account.' },
      { q: 'What is the fastest way to learn times tables?', a: 'Understand each fact first, by building it from a known one, then practise for a few minutes every day. Short daily practice works better than long weekly sessions.' },
      { q: 'Is TT Rock Stars good for learning times tables?', a: 'Its own site describes adaptive games for ages 6 and up, with no chat, ads or in-game purchases. It is strong for practice; a teacher helps when a child does not yet understand a fact or has stopped improving.' },
      { q: 'Do I need to pay for TT Rock Stars if the school uses it?', a: 'According to its FAQ, no: a child whose school has a subscription logs in with the account the teacher created. We are not connected with TT Rock Stars.' },
      { q: 'What is the Year 4 multiplication tables check?', a: 'A statutory on-screen check in June of Year 4, with 25 times table questions and 6 seconds for each. The STA says there is no pass mark and parents do not need to prepare their child specially.' },
      { q: 'Should my child learn division facts too?', a: 'Yes. Every year of the curriculum asks for multiplication and division facts together, so 42 ÷ 7 should be as quick as 6 × 7.' },
      { q: 'My child is in Year 6 and still unsure. Is it too late?', a: 'No. Most gaps come down to a handful of facts. A few weeks of strategies and short practice usually closes them, and it helps straight away with fractions and long multiplication.' },
      { q: 'When are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Are you connected with schools or the STA?', a: 'No. Modern Age Coders is independent and has no link with any school, the Standards and Testing Agency, the Department for Education, TT Rock Stars or Maths Circle Ltd.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More on primary number skills',
    lede: 'The Year 4 check, upper primary maths, and puzzles for confident children.',
    items: [
      { href: '/year-4-multiplication-tables-check-explained', label: 'The Year 4 check explained', p: 'Format, timing and what the score is used for.' },
      { href: '/multiplication-tables-check-year-4-practice', label: 'MTC practice', p: 'Practice that builds recall for the June check.' },
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6, where the tables get used.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The Year 6 arithmetic paper leans on these facts.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Number puzzles for children who enjoy a stretch.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK maths and coding pages.' }
    ]
  },

  start: {
    h2: 'Book a free times tables class',
    lede: 'Give us a phone number and we will call at a UK time that works for you. In the first class the teacher finds which facts are secure, which are derived and which are still counted, so you leave with a clear picture.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/mental-maths-mastery-kids">Mental Maths course</a> lists its phases week by week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a typical lesson.',
    note: 'A WhatsApp message is quickest and free from a UK mobile. Our team replies from India, on a number beginning +91.',
    formNote: 'You pay nothing to book and sign nothing. We answer once with a time.'
  },

  footer: {
    cols: [
      { h4: 'Number facts', links: [
        { href: '/year-4-multiplication-tables-check-explained', label: 'Year 4 check' },
        { href: '/multiplication-tables-check-year-4-practice', label: 'MTC practice' },
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'Our school', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Times tables, understood then recalled'
  },

  personalityCss: `
.ag-root.ag-ttu .ag-hero h1 { letter-spacing: -0.02em; font-weight: 720; max-width: 22ch; }
.ag-root.ag-ttu .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-ttu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ttu .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-ttu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ttu .ag-steps li { margin-bottom: 10px; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'England, DfE mathematics programmes of study: Year 2 recall of 2, 5 and 10 tables with odd and even, commutativity, 10 table to place value and 5 table to the clock; Year 3 recall of 3, 4 and 8 tables, doubling links 2, 4 and 8; Year 4 recall to 12 × 12, factor pairs and commutativity, counting in 6, 7, 9, 25 and 1000; end of Year 4 memorised to 12 × 12. STA MTC information for parents: 25 on-screen questions, 6 seconds each, no extra preparation needed, no pass mark. DfE MTC attainment 2025: average 21.0, 37% full marks. Curriculum and Assessment Review 2025: retain the MTC as an indicator of multiplicative competence. Times Tables Rock Stars (Maths Circle Ltd): ages 6 and up, adaptive games, eight game modes, no chat, ads or in-game purchases, hide the timer, school accounts, NumBots released 2019.',
    localProject: 'Recall is the target; derived facts are the route. A times tables door spanning Years 2 to 6: the curriculum order from the 2, 5 and 10 tables to 12 × 12 with the links the programme of study makes, a brief note on the Year 4 check and the Review\'s decision to keep it, our own count from 144 grid facts to 78 to 28 hard facts, six original derived-fact strategies (9s from 10s, 6s from 3s, 7 × 8 split, 8s by doubling, 12s as 10 and 2, division from the same fact) with a practice set, a fair look at TT Rock Stars from its own site with an app-versus-teacher table, a sample practice week, and a four-rung ladder. Lesson family: a primary skill door, distinct from the Year 4 MTC pages.',
    requiredMentions: [
      'By the end of year 4, pupils should have memorised their multiplication tables up to and including the 12 multiplication table and show precision and fluency in their work.',
      'Through doubling, they connect the 2, 4 and 8 multiplication tables.',
      'We recommend retaining the Multiplication Tables Check (MTC) in Year 4 as an important indicator of multiplicative competence.',
      'recognise and use factor pairs and commutativity in mental calculations',
      'Suitable for all learners aged 6 years and up',
      'eight different game modes to choose from, including multiplayer modes',
      'De-clutter the screen or hide the timer to help minimise anxiety',
      'Remove the 1, 2, 5, 10 and 11 tables',
      'The 9s from the 10s'
    ],
    sources: [
      { claim: 'DfE, Mathematics programmes of study: key stages 1 and 2: times tables statements for Years 2, 3 and 4 and the end of Year 4 expectation.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study' },
      { claim: 'STA, Multiplication tables check: information for parents: format, timing, preparation and no pass mark.', url: 'https://www.gov.uk/government/publications/multiplication-tables-check-information-for-parents' },
      { claim: 'DfE, Multiplication tables check attainment 2024/25: average score and share with full marks.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/multiplication-tables-check-attainment/2024-25' },
      { claim: 'DfE, Curriculum and Assessment Review Final Report, November 2025: retain the MTC.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'Times Tables Rock Stars, families, home and about pages: ages, adaptivity, game modes, safety features, school accounts, NumBots.', url: 'https://ttrockstars.com/families/' }
    ],
    rejectedClaims: [
      'TT Rock Stars subscription price: published on its site but not quoted, by rule.',
      'TT Rock Stars school and household counts: its pages give differing figures (15,000 and 17,000 schools), so none are quoted.',
      'TT Rock Stars outcome claims such as a proven track record: the maker\'s own claim, not independently verified, so not repeated as fact.',
      'Any promise of a full-marks MTC score: declined.'
    ]
  }
};
