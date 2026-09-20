'use strict';
// Maths olympiad training UK (ag- competition hub, UK cluster Phase 2). The hub above the UKMT olympiad
// spokes. Every figure was read at UKMT, BMOS or the Scottish Mathematical Council on 20 September 2026
// while building those pages, and each is re-cited here:
//  - Junior Mathematical Olympiad: a "2 hour Challenge consisting of 6 Olympiad style questions",
//    15 June 2027, Year 8 and below, "around 1,200 students qualify from the JMC each year".
//  - Cayley, Hamilton and Maclaurin: two hours and "six Olympiad style problems" each, all on
//    18 March 2027, split by school year, with "around 1,800 students qualify from the IMC each year".
//  - Mathematical Olympiad for Girls: "2.5 hours" and "five challenging problems" on "Tuesday 22nd
//    September 2026", two answer-only and three requiring full written explanations.
//  - British Mathematical Olympiad: BMO1 a "3 1/2-hour paper" of "6 problems" on 18 November 2026 and
//    BMO2 a "3 1/2-hour paper" of "4 problems" on 20 January 2027, marked by hand.
//  - The feeder challenges: Senior Mathematical Challenge 7 October 2026, Intermediate Mathematical
//    Challenge 27 January 2027, Junior Mathematical Challenge 5 May 2027.
//  - Scottish Mathematical Challenge: running since 1976, "marks are given for explanations of answers
//    rather than for simply getting the correct answer".
// Spine: the higher you climb, the more time you get per question. Our arithmetic of 20 September 2026:
// JMO and the intermediate olympiads give 120 minutes for 6 questions, 20.0 minutes each; the girls'
// olympiad 150 for 5, 30.0 each; BMO1 210 for 6, 35.0 each; BMO2 210 for 4, 52.5 each. Every other exam
// a student meets goes the other way. It is the clearest evidence that these papers are about thinking
// rather than speed, and the single most useful thing to tell a pupil who is afraid of them.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'OLYMPIAD LADDER', label: 'Maths olympiad training', blurb: 'Every UK olympiad round in one table, and the reason each rung gives you more time, not less.' },
  slug: 'maths-olympiad-training-uk',
  code: 'mot',
  accent: '#201249',
  accentRationale: 'Maths olympiad training: a very deep indigo from the solver (13.70:1 on every paper tint), the darkest accent in the set and distinct from the junior olympiad navy and the cipher indigo-violet',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths olympiad training in the UK',
  title: 'Maths Olympiad Training UK | Every Round From JMO to BMO',
  description: 'The UK maths olympiad ladder in one table: who sits which paper, the 2026-27 dates, how they are marked, and why each rung gives more time per question.',
  ogDescription: 'Climb the UK olympiad ladder and the minutes per question rise: 20 at the junior olympiad, 35 at BMO1, 52.5 at BMO2. Every other exam goes the other way.',
  twitterDescription: 'UK maths olympiad training: every round, every date, and why the hard papers give you more time.',
  pageName: 'Maths Olympiad Training in the UK',
  webPageDescription: 'A guide to the United Kingdom mathematical olympiad ladder, covering the junior, intermediate, girls and British olympiads, their dates and formats, how written solutions are marked and how to train for them.',
  courseDescription: 'Live online olympiad mathematics teaching for UK pupils from Year 7 to Year 13, built around written proof rather than past-paper drilling.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Maths olympiad training',
  navLinks: [
    { href: '#ladder', label: 'The ladder' },
    { href: '#time', label: 'Minutes per question' },
    { href: '#training', label: 'How to train' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 7 to Year 13 &middot; Every round, one table',
  h1: 'Maths olympiad training in the UK',
  lede: 'Parents meet the olympiad ladder in the wrong order: a letter comes home saying a child has qualified for something, and nobody explains what it is or what comes next. This page is the map. Every UK olympiad round with its date, its year groups, how many questions it asks and how long it gives, from a two-hour paper for twelve-year-olds to the three and a half hours that choose the national team. And one observation that reassures almost every pupil who reads it: as the papers get harder, they give you more time per question, not less.',
  secondaryCta: { href: '#time', label: 'See the minutes per question rise' },
  wa: 'Hello Modern Age Coders, my child has qualified for a maths olympiad and I would like a free class.',
  heroNote: 'Every figure quoted from UKMT or BMOS with the date &middot; Our own arithmetic, labelled &middot; No promise about any result',
  spec: [
    ['Junior olympiad', 'Six questions, two hours'],
    ['Intermediate olympiads', 'Three papers, by school year'],
    ["Girls' olympiad", 'Five problems, two and a half hours'],
    ['British olympiad, round 1', 'Six problems, three and a half hours'],
    ['British olympiad, round 2', 'Four problems, three and a half hours'],
    ['Marked', 'By hand, on the reasoning'],
    ['Leads to', 'A team of six, via Cambridge'],
    ['Entered by', 'A school, not by us']
  ],
  capsuleQ: 'In short',
  capsule: 'The UK olympiad ladder runs from the Junior Mathematical Olympiad, "a 2 hour Challenge consisting of 6 Olympiad style questions" on 15 June 2027 for Year 8 and below, through the Cayley, Hamilton and Maclaurin papers, "six Olympiad style problems" in two hours on 18 March 2027 split by school year, to the British Mathematical Olympiad: BMO1, a "3 1/2-hour paper" of "6 problems" on 18 November 2026, and BMO2, the same length with "4 problems", on 20 January 2027. Alongside them the Mathematical Olympiad for Girls runs "2.5 hours" of "five challenging problems" on 22 September 2026, two answer-only and three written. Around 1,200 pupils qualify for the junior olympiad each year and around 1,800 for the intermediate ones. Everything above the first challenge is marked by hand on the reasoning. We teach the mathematics and the writing: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an olympiad candidate',
    lede: 'The limit at every rung is technique and written argument, not syllabus.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'MOT / 01', title: 'Olympiad and competition maths', note: 'The core course at every level: unfamiliar problems, and solutions written so that a marker is convinced.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MOT / 02', title: 'Middle school maths mastery', note: 'For Years 7 to 9, where the algebra and geometry the junior papers lean on are still being built.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MOT / 03', title: 'High school mathematics', note: 'For sixth formers, so that technique never becomes the thing slowing an olympiad answer down.' }
    ]
  },

  sections: [
    {
      id: 'ladder', tint: 'tint', eyebrow: 'The ladder',
      h2: 'Every UK olympiad round, in one table',
      lede: 'Each row was read at UKMT or the British Mathematical Olympiad on 20 September 2026, and each links to the page behind it.',
      body: [
        { kind: 'table', caption: 'The UK mathematical olympiad rounds for 2026-27', head: ['Round', 'Who sits it', 'Date', 'Paper'], rows: [
          ['Mathematical Olympiad for Girls', 'Year 11 and above, S4 and above, Year 12 and above in Northern Ireland', '22 September 2026', 'Five problems in two and a half hours'],
          ['British Mathematical Olympiad 1', 'Open entry, full-time secondary education', '18 November 2026', 'Six problems in three and a half hours'],
          ['British Mathematical Olympiad 2', 'Those above the threshold', '20 January 2027', 'Four problems in three and a half hours'],
          ['Cayley', 'Year 9 and below, S2 or below, Year 10 or below in Northern Ireland', '18 March 2027', 'Six problems in two hours'],
          ['Hamilton', 'Year 10, S3, Year 11 in Northern Ireland', '18 March 2027', 'Six problems in two hours'],
          ['Maclaurin', 'Year 11, S4, Year 12 in Northern Ireland', '18 March 2027', 'Six problems in two hours'],
          ['Junior Mathematical Olympiad', 'Year 8 and below, S2 or below, Year 9 or below in Northern Ireland', '15 June 2027', 'Six questions in two hours']
        ] },
        { kind: 'table', caption: 'The multiple-choice challenges that qualify pupils for them', head: ['Challenge', 'Date', 'Leads to'], rows: [
          ['Senior Mathematical Challenge', '7 October 2026', 'The Senior Kangaroo and the British Mathematical Olympiad'],
          ['Intermediate Mathematical Challenge', '27 January 2027', 'Cayley, Hamilton, Maclaurin and the Grey and Pink Kangaroos'],
          ['Junior Mathematical Challenge', '5 May 2027', 'The Junior Kangaroo and the Junior Mathematical Olympiad']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two numbers give the shape of the thing. UKMT says around 1,200 pupils qualify for the Junior Mathematical Olympiad from the Junior Challenge each year, and around 1,800 for the three intermediate olympiads. These are small rooms: a pupil who sits one is already among a few hundred per year group nationally.',
            'Everything in the first table is written out in full and marked by a person. Everything in the second is multiple choice and marked by a machine. That is the only real dividing line in the ladder, and it falls between the Challenge in the spring and the olympiad six weeks later.'
          ],
          right: [
            'Scotland runs its own ladder alongside this one. The <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">Scottish Mathematical Challenge</a> has been going since 1976, spreads three rounds across the year, and has always marked "explanations of answers rather than ... simply getting the correct answer". A Scottish pupil can sit both.',
            'Nothing here is entered by a family. Schools enter pupils for the challenges and UKMT invites the qualifiers, and no tutor, service or payment shortens that route.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions calendar</a>, its round pages and <a class="ag-inline-link" href="https://bmos.ukmt.org.uk/" rel="noopener" target="_blank">the British Mathematical Olympiad</a>, all read 20 September 2026. We have no connection with UKMT or the BMO Subtrust.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'The observation',
      h2: 'The harder the paper, the more time you get',
      lede: 'This is arithmetic on the published formats, and it is the most reassuring thing on the page.',
      body: [
        { kind: 'p', html: 'Every exam a pupil has ever sat works one way: as the content gets harder, the questions get shorter and the clock gets meaner. The olympiad ladder does the opposite, and once you see the numbers you cannot unsee them.' },
        { kind: 'table', caption: 'Our arithmetic of 20 September 2026, from the published formats', head: ['Round', 'Questions', 'Minutes', 'Minutes per question'], rows: [
          ['Junior Mathematical Olympiad', '6', '120', '20.0'],
          ['Cayley, Hamilton and Maclaurin', '6', '120', '20.0'],
          ['Mathematical Olympiad for Girls', '5', '150', '30.0'],
          ['British Mathematical Olympiad 1', '6', '210', '35.0'],
          ['British Mathematical Olympiad 2', '4', '210', '52.5']
        ] },
        { kind: 'three', cells: [
          { h3: 'What it tells a pupil', p: 'Nobody expects an answer in three minutes. Nearly an hour a question at the top of the ladder is permission to sit and think, which is exactly what these papers are testing.' },
          { h3: 'What it tells a parent', p: 'Speed drills are the wrong preparation. They help in the multiple-choice challenges and do almost nothing for an olympiad paper.' },
          { h3: 'What it tells a teacher', p: 'If a pupil is finishing early, they are not writing enough. A complete argument takes far longer than finding the answer did.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The reason for the pattern is simple once stated. At the bottom of the ladder a question can be seen through: find the trick, write it down, move on. At the top it cannot, and the time is there for the part that is genuinely hard, which is being sure and then being convincing.',
            'It also explains why finishing is not the goal. Two complete solutions on a BMO1 paper is a real result, and three well-written answers on a two-hour olympiad beats six hurried ones every time.'
          ],
          right: [
            'The marking backs it up. UKMT tells candidates that "just stating an answer, even a correct one, will earn you very few marks", and the British Mathematical Olympiad has around sixty people gather in December to read every BMO1 script by hand over three days.',
            'A pupil who understands that the clock is generous and the marking is human prepares completely differently, and usually enjoys it far more.'
          ] },
        { kind: 'source', html: 'The minutes-per-question figures are ours, computed on 20 September 2026 from the question counts and durations each organiser publishes.' }
      ]
    },
    {
      id: 'training', tint: 'plain', eyebrow: 'How to train',
      h2: 'One problem, written up, every week',
      lede: 'Olympiad training looks slower than exam revision because it is. It is also the only thing that works.',
      body: [
        { kind: 'table', caption: 'What moves an olympiad score, at every rung', head: ['Worth the hours', 'Why', 'Not worth it'], rows: [
          ['Writing up problems already solved', 'The writing is the half being marked and the half nobody practises', 'Solving more and writing none'],
          ['Sitting with one problem for an hour', 'These questions are built to resist a first reading', 'Twenty quick questions to feel productive'],
          ['Reading the organiser\'s own solutions', 'They show the standard of explanation expected', 'Checking only whether the final answer matched'],
          ['Building a repertoire', 'Invariants, extremal cases, pigeonhole, bounding, colouring', 'Hoping for a flash of insight on the day'],
          ['Stamina, before the senior rounds', 'Three and a half hours of concentration is a physical skill', 'Any drilling in the last fortnight']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The commonest mistake families make is buying harder material. The mathematics in a junior or intermediate olympiad question is rarely beyond a good pupil in that year group; what is unfamiliar is the packaging and the demand for proof. More topics do not help. More writing does.',
            'The second commonest is treating a qualification as a verdict. Nothing depends on these papers, no school place turns on them, and a pupil who enjoys one will come back next year a rung higher against the same people.'
          ],
          right: [
            'What a teacher adds is reading. A pupil can tell whether their answer is right; they almost never can tell whether their explanation convinces a stranger, and that is the thing worth an hour a week of somebody else\'s attention.',
            'The individual pages for each round set out the technique that round rewards, from writing a first proof at the <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">junior olympiad</a> to invariants at the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The route',
    h2: 'Four rungs, climbed over five years',
    lede: 'A pupil usually spends two years on each rung, and the habit carried up matters more than the score at any of them.',
    table: { caption: 'From a challenge paper to a written proof', head: ['Years', 'Rung', 'The paper that tests it'], rows: [
      ['7 to 8', '1. Fast, accurate, unfamiliar', 'The Junior Mathematical Challenge and Kangaroo'],
      ['8 to 9', '2. A first written solution', 'The Junior Mathematical Olympiad'],
      ['9 to 11', '3. Complete arguments', 'Cayley, Hamilton and Maclaurin'],
      ['11 to 13', '4. Proof and stamina', "The Mathematical Olympiad for Girls and the British Mathematical Olympiad"]
    ] },
    left: { h3: 'If a paper is close', ps: [
      'Write up three problems already solved, properly, and have someone read them as a stranger would. It is the highest-return evening available at any rung.',
      'Do not add topics. Every one of these papers is built from mathematics the pupil has already met.'
    ] },
    right: { h3: 'At the top of the ladder', ps: [
      'The top BMO2 scorers are invited to a training camp at Trinity College, Cambridge, from which an IMO squad and then a team of six is chosen.',
      'Pupils who like proving things often take to <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">informatics olympiads</a> as well, where the marker is a compiler.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for every rung of the ladder',
    lede: 'Grouped by the stage a pupil is at, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Before the ladder', sub: 'Years 5 to 7', courses: [
        { code: 'MOT / A / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The number work everything above stands on.' },
        { code: 'MOT / A / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation that stops costing thinking time.' },
        { code: 'MOT / A / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a claim on a thousand cases, then prove it.' }
      ] },
      { num: 'II', h3: 'Junior and intermediate', sub: 'Years 7 to 11', courses: [
        { code: 'MOT / B / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Unfamiliar problems, finished in writing.' },
        { code: 'MOT / B / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Algebra and geometry, argued not drilled.' },
        { code: 'MOT / B / 03', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'The school course, taught to the board in use.' }
      ] },
      { num: 'III', h3: 'Senior rounds', sub: 'Years 11 to 13', courses: [
        { code: 'MOT / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Technique that should never be the obstacle.' },
        { code: 'MOT / C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'Pure, mechanics and statistics, taught to the exam.' },
        { code: 'MOT / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting arguments made rigorous.' }
      ] },
      { num: 'IV', h3: 'The other olympiads', sub: 'For pupils who also program', courses: [
        { code: 'MOT / D / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Where proof meets running time.' },
        { code: 'MOT / D / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'The informatics version of the same patience.' },
        { code: 'MOT / D / 03', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Enough code to explore a conjecture.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'One hard problem a week, and someone who reads the write-up',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot from Year 7 upwards.' },
      { time: 'Weekend morning', l: 'Long enough to take one problem to a finished proof.' },
      { time: 'Holiday intensives', l: 'For stamina before the senior rounds.' }
    ],
    cells: [
      { h3: 'A cold reader every week', p: 'Someone who has not seen the problem reads the solution and says where they stopped following it.' },
      { h3: 'A named toolbox', p: 'Each technique is taught with a name so a pupil can reach for it deliberately rather than hope.' },
      { h3: 'Groups of five to ten', p: 'Big enough that somebody solves it differently, small enough that nobody goes unheard.' },
      { h3: 'Being stuck is the work', p: 'Twenty minutes without progress is normal here and we say so, because pupils assume it is failure.' },
      { h3: 'Problems we wrote', p: 'Ours, in the same idiom. The organisers give their past papers away and that is where the real ones belong.' },
      { h3: 'No outcome sold', p: 'Qualification is not ours to give and we do not pretend otherwise.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition work. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects them.',
  reviewsLede: 'Google reviews left by families here, printed as written.',

  fees: {
    h2: 'Fees',
    lede: 'The same price each month in US dollars outside India, nothing charged to start, and no commitment past the month you are in.',
    free: ['A single hard problem, taught properly', 'A plain answer about which rung fits', 'Nothing asked for but a number'],
    group: ['Five to ten pupils at one level', 'The same teacher weekly', 'Written arguments marked by hand', 'A certificate at the end'],
    one: ['A teacher working with one pupil', 'Aimed at the round they are sitting', 'For pupils well beyond their year group']
  },

  faq: {
    eyebrow: 'Olympiad ladder questions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'What are the UK maths olympiads?', a: 'A ladder of written papers run by the UK Mathematics Trust and the British Mathematical Olympiad: the Junior Mathematical Olympiad, the Cayley, Hamilton and Maclaurin papers, the Mathematical Olympiad for Girls and the two British Mathematical Olympiad rounds.' },
      { q: 'How does a pupil get into one?', a: 'Through a multiple-choice Mathematical Challenge sat at school, after which UKMT invites those above a qualifying score, with discretionary entries also possible. Around 1,200 pupils qualify for the junior olympiad each year and around 1,800 for the intermediate ones.' },
      { q: 'What are the 2026-27 dates?', a: 'The Mathematical Olympiad for Girls on 22 September 2026, British Mathematical Olympiad 1 on 18 November 2026, BMO2 on 20 January 2027, Cayley, Hamilton and Maclaurin on 18 March 2027 and the Junior Mathematical Olympiad on 15 June 2027.' },
      { q: 'How long are the papers?', a: 'Two hours for the junior and intermediate olympiads, two and a half for the girls olympiad, and three and a half hours for both British Mathematical Olympiad rounds.' },
      { q: 'Do the harder papers give less time?', a: 'No, and this surprises everyone. Per question it is 20 minutes at the junior and intermediate olympiads, 30 at the girls olympiad, 35 at BMO1 and 52.5 at BMO2. The ladder gives more time as it gets harder.' },
      { q: 'Why is my child not finishing the paper?', a: 'Because finishing is not the goal. Three complete, well-written solutions on a two-hour olympiad beats six hurried ones, and two on a BMO1 paper is a real result for a first attempt.' },
      { q: 'How are they marked?', a: 'By hand, on the reasoning. UKMT tells candidates that just stating an answer, even a correct one, will earn very few marks, and around sixty markers gather in December to read every BMO1 script over three days.' },
      { q: 'What is the best preparation?', a: 'Writing up problems the pupil has already solved, spending an hour on single problems, reading the organiser\'s own published solutions for the standard, and building a repertoire of techniques. Not speed drills and not new topics.' },
      { q: 'Is there a Scottish route?', a: 'Yes. The Scottish Mathematical Challenge has run since 1976, spreads three rounds across the year and marks explanations rather than answers. A Scottish pupil can sit it alongside the UKMT ladder.' },
      { q: 'What is at the top?', a: 'The top British Mathematical Olympiad round 2 scorers are invited to a training camp at Trinity College, Cambridge, from which an IMO squad and then a team of six plus reserves is chosen.' }
    ]
  },

  elsewhere: {
    eyebrow: 'The pages behind this one',
    h2: 'Each round in full',
    lede: 'Every rung has its own page, with the organiser\'s words and the technique that rung rewards.',
    items: [
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'Why forty examples are not a proof.' },
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton and Maclaurin', p: 'Why a complete answer means all of them.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Finding the thing that cannot change.' },
      { href: '/mathematical-olympiad-for-girls-preparation', label: 'Mathematical Olympiad for Girls', p: 'Two questions want a number, three want the reason.' },
      { href: '/ukmt-kangaroo-rounds-practice', label: 'UKMT Kangaroo rounds', p: 'The multiple-choice follow-ons, and what the wrong options are for.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'Where it all starts, at ages 9 to 11.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad lesson',
    lede: 'Tell us the year group and which round is next. The free lesson takes one problem from first reading to a written argument.',
    readFirst: 'Rather read first? Every syllabus is on its <a class="ag-inline-link" href="/courses">course page</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'The quickest reply usually comes on WhatsApp, which is free from a UK mobile. The number is registered in India, as we say everywhere, and no British office sits behind it.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'The rounds', links: [
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton, Maclaurin' },
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' },
        { href: '/mathematical-olympiad-for-girls-preparation', label: 'Olympiad for Girls' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'We teach the argument; UKMT sets the papers'
  },

  personalityCss: `
.ag-root.ag-mot .ag-hero h1 { letter-spacing: -0.024em; }
.ag-root.ag-mot .ag-capsule { border-left-width: 10px; border-radius: 0 4px 4px 0; }
.ag-root.ag-mot .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-mot .ag-table caption { text-align: left; font-weight: 700; font-style: italic; letter-spacing: 0.008em; }
.ag-root.ag-mot .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-mot .ag-spec dt { letter-spacing: 0.15em; }
.ag-root.ag-mot .ag-three h3 { letter-spacing: -0.0105em; }
.ag-root.ag-mot .ag-slots { gap: 1.48rem; }
`,

  mustMention: ['52.5', '20.0', 'around 1,200 pupils qualify', 'around 1,800 for the three intermediate olympiads', '18 March 2027', 'Trinity College, Cambridge', 'very few marks']
};
