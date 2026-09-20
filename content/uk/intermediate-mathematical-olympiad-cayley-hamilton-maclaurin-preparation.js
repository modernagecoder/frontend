'use strict';
// Intermediate Mathematical Olympiad preparation, Cayley, Hamilton and Maclaurin (ag- competition spoke,
// UK cluster Phase 2). UKMT facts read on 20 September 2026 at ukmt.org.uk:
//  - Competitions calendar 2026-27: Intermediate Mathematical Challenge 27 January 2027; Cayley,
//    Hamilton, Maclaurin, Grey Kangaroo and Pink Kangaroo all on 18 March 2027.
//  - Cayley, Hamilton and Maclaurin page: each is a two-hour paper of "six Olympiad style problems";
//    eligibility "Cayley Maths Olympiad: England, Wales and Overseas: Year 9 and below Scotland: S2 or
//    below Northern Ireland: Year 10 or below"; "Hamilton Maths Olympiad: England, Wales and Overseas:
//    Year 10 Scotland: S3 Northern Ireland: Year 11"; "Maclaurin Maths Olympiad: England, Wales and
//    Overseas: Year 11 Scotland: S4 Northern Ireland: Year 12"; "Entry to the Intermediate Olympiads is
//    by invitation based on a qualifying IMC score, or by discretionary entry"; "Around 1,800 students
//    qualify from the IMC each year"; candidates "should give full written solutions, including
//    mathematical reasons as to why your method is correct" and "Just stating an answer, even a correct
//    one, will earn you very few marks; also, incomplete or poorly presented solutions will not receive
//    full marks".
// Discretionary entry fees are published by UKMT in pounds and are not printed here.
// Spine: a complete answer means all of them. Our own worked example, computed on 20 September 2026:
// 1/a + 1/b = 1/6 in positive integers has exactly nine ordered solutions, (7,42), (8,24), (9,18),
// (10,15), (12,12) and the four reverses, because (a-6)(b-6) = 36 and 36 has nine divisors. A pupil who
// spots a = b = 12 and stops has found one ninth of the answer, and the marks follow the proof that
// there are no others.
// No UKMT question is reproduced; UKMT publishes its own past papers and solutions free.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'IMOK', label: 'Cayley, Hamilton and Maclaurin', blurb: 'Three olympiad papers split by school year, and the marks that live in the word "all".' },
  slug: 'intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation',
  code: 'imk',
  accent: '#356E4A',
  accentRationale: 'Intermediate olympiads: a forest green from the solver (4.90:1 on every paper tint), lighter and greener than the Surrey and Scottish Challenge greens and unlike any other competition accent',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Cayley, Hamilton and Maclaurin olympiad preparation',
  title: 'Cayley, Hamilton and Maclaurin Preparation | UKMT Olympiads',
  description: 'Preparing for the UKMT intermediate olympiads: which paper each year group sits, six questions in two hours, and why finding one answer is rarely the answer.',
  ogDescription: 'Cayley, Hamilton and Maclaurin are three olympiad papers split by school year. The marks live in proving you have found every solution, not the first one.',
  twitterDescription: 'UKMT intermediate olympiad preparation: Cayley, Hamilton and Maclaurin, six questions in two hours.',
  pageName: 'Cayley, Hamilton and Maclaurin Olympiad Preparation',
  webPageDescription: 'Preparation guidance for the UK Mathematics Trust intermediate mathematical olympiads, Cayley, Hamilton and Maclaurin, covering eligibility by year group and nation, qualification from the Intermediate Mathematical Challenge, and how full written solutions are marked.',
  courseDescription: 'Live online olympiad mathematics classes for pupils in Years 9 to 11 working towards the Cayley, Hamilton and Maclaurin papers, teaching complete written solutions rather than past-paper drilling.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Cayley, Hamilton and Maclaurin',
  navLinks: [
    { href: '#papers', label: 'Three papers' },
    { href: '#all', label: 'Finding all of them' },
    { href: '#practise', label: 'How to practise' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Years 9, 10 and 11 &middot; 18 March 2027',
  h1: 'Cayley, Hamilton and Maclaurin preparation',
  lede: 'Three olympiad papers, sat on the same afternoon, split not by how good a pupil is but by which school year they are in. Cayley is for Year 9 and below, Hamilton for Year 10, Maclaurin for Year 11, and each is six questions in two hours with every answer written out in full. That structure has a consequence worth understanding before March: a pupil who sits Cayley this year will sit Hamilton next year and Maclaurin the year after, against the same people. Nobody gets one attempt at this. What carries between the three is not topics. It is the habit of finishing a question, which at this level almost always means finding every answer rather than an answer.',
  secondaryCta: { href: '#all', label: 'See what a complete answer looks like' },
  wa: 'Hello Modern Age Coders, my child has qualified for a UKMT intermediate olympiad and I would like a free maths class.',
  heroNote: 'Every figure quoted from UKMT &middot; Our own practice problems &middot; Nobody can promise you a paper',
  spec: [
    ['Organiser', 'UK Mathematics Trust'],
    ['Three papers', 'Cayley, Hamilton, Maclaurin'],
    ['2027 date', '18 March, all three'],
    ['Paper', 'Six questions in two hours'],
    ['Split by', 'School year, not by score'],
    ['Qualifying from', 'The Intermediate Challenge'],
    ['Qualifiers a year', 'Around 1,800'],
    ['Answers', 'Full written solutions']
  ],
  capsuleQ: 'In short',
  capsule: 'The UK Mathematics Trust runs three intermediate olympiads on one day, 18 March 2027: Cayley for "England, Wales and Overseas: Year 9 and below", Hamilton for "Year 10" and Maclaurin for "Year 11", with Scotland sitting S2 or below, S3 and S4 and Northern Ireland one year higher in each case. Each is a two-hour paper of "six Olympiad style problems". Entry is "by invitation based on a qualifying IMC score, or by discretionary entry", from the Intermediate Mathematical Challenge on 27 January 2027, and UKMT says "around 1,800 students qualify from the IMC each year". Candidates "should give full written solutions, including mathematical reasons as to why your method is correct", because "just stating an answer, even a correct one, will earn you very few marks". We teach the mathematics and the writing, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an intermediate olympiad candidate',
    lede: 'Choose by what a pupil can finish, not by what they can start.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'IMK / 01', title: 'Olympiad and competition maths', note: 'Number theory, combinatorics and geometry in the olympiad idiom, with solutions written to completion.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'IMK / 02', title: 'High school mathematics', note: 'For a Year 10 or 11 pupil whose algebra needs to stop being the obstacle.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'IMK / 03', title: 'Middle school maths mastery', note: 'For a Year 9 Cayley candidate still consolidating the ground the paper stands on.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The three papers',
      h2: 'One afternoon, three papers, split by year group',
      lede: 'Facts read at UKMT\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'Who sits which paper, in UKMT\'s own words', head: ['Paper', 'England, Wales and Overseas', 'Scotland', 'Northern Ireland'], rows: [
          ['Cayley', 'Year 9 and below', 'S2 or below', 'Year 10 or below'],
          ['Hamilton', 'Year 10', 'S3', 'Year 11'],
          ['Maclaurin', 'Year 11', 'S4', 'Year 12']
        ] },
        { kind: 'table', caption: 'The intermediate route, with the 2026-27 dates UKMT publishes', head: ['Round', 'Date', 'What it is'], rows: [
          ['Intermediate Mathematical Challenge', '27 January 2027', 'The multiple-choice paper everyone sits first'],
          ['Cayley, Hamilton and Maclaurin', '18 March 2027', 'Six written questions, two hours, by year group'],
          ['Grey Kangaroo', '18 March 2027', 'A multiple-choice follow-on, same afternoon'],
          ['Pink Kangaroo', '18 March 2027', 'The older multiple-choice follow-on, same afternoon']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Four papers on one afternoon is the thing to get straight with a school. A pupil qualifies for exactly one of them from their Intermediate Challenge score and their year group, and the Kangaroo papers and the olympiad papers are different animals: multiple choice against full written solutions. Preparing for the wrong one is a wasted six weeks.',
            'UKMT says around 1,800 students qualify from the Intermediate Challenge each year, across all three olympiad papers and all four nations. It is a small room.'
          ],
          right: [
            'The split by year group rather than by score is unusual and deliberate. A brilliant Year 9 pupil is not pushed onto the Maclaurin paper; they sit Cayley against other Year 9s. It keeps the papers age-appropriate and it means the ladder repeats: Cayley, then Hamilton, then Maclaurin.',
            'Entry is a school matter. UKMT invites on a qualifying Intermediate Challenge score or accepts a discretionary entry, for which it charges a fee published on its own site in pounds. We do not print fees and we cannot enter anyone.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions calendar</a> and the <a class="ag-inline-link" href="https://ukmt.org.uk/intermediate-challenges/cayley-hamilton-maclaurin-olympiad-challenge" rel="noopener" target="_blank">Cayley, Hamilton and Maclaurin page</a>, read 20 September 2026. We have no connection with the UK Mathematics Trust, and nothing on this page should be read as one.' }
      ]
    },
    {
      id: 'all', tint: 'deep', eyebrow: 'The method',
      h2: 'A complete answer means all of them',
      lede: 'UKMT is explicit: "just stating an answer, even a correct one, will earn you very few marks". Here is what that looks like on a real question.',
      body: [
        { kind: 'p', html: 'A question in this style: <strong>find all pairs of positive whole numbers a and b for which 1/a + 1/b = 1/6.</strong> Most pupils find one within a minute. a = 12 and b = 12 works, because a sixth is two twelfths. That is a correct answer, and on an olympiad paper it is worth almost nothing, because the question said <em>all</em>.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: every solution, and where they come from', head: ['a', 'b', 'Why it appears'], rows: [
          ['7', '42', 'a &minus; 6 = 1, so b &minus; 6 = 36'],
          ['8', '24', 'a &minus; 6 = 2, so b &minus; 6 = 18'],
          ['9', '18', 'a &minus; 6 = 3, so b &minus; 6 = 12'],
          ['10', '15', 'a &minus; 6 = 4, so b &minus; 6 = 9'],
          ['12', '12', 'a &minus; 6 = 6, so b &minus; 6 = 6'],
          ['15, 18, 24, 42', '10, 9, 8, 7', 'The same four pairs the other way round']
        ] },
        { kind: 'three', cells: [
          { h3: 'The move that finds them', p: 'Multiply out and rearrange: ab &minus; 6a &minus; 6b = 0, so (a &minus; 6)(b &minus; 6) = 36. Now the question is about the divisors of 36, and there is nothing left to hunt for.' },
          { h3: 'Why nine and not more', p: '36 has exactly nine positive divisors: 1, 2, 3, 4, 6, 9, 12, 18 and 36. Each one gives one ordered pair. That sentence is the proof that the list is complete, and it is where the marks are.' },
          { h3: 'What we checked', p: 'We searched every pair of positive integers up to 200 by computer and found exactly those nine. The search is reassurance; the divisor argument is the answer.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The difference between one solution and nine is a minute of work. The difference between nine solutions and a proof that there are only nine is the whole question, and it is the thing a pupil coming from the Intermediate Challenge has never been asked to supply.',
            'The verbal habit that fixes it is small. After finding an answer, ask out loud: could there be another? Then: how do I know there is not? Pupils who ask those two questions automatically pick up marks all over an olympiad paper.'
          ],
          right: [
            'The same trick, turning an equation into a product and then reading off divisors, comes up again and again at this level. It is worth learning as a move rather than as a fact about the number 6.',
            'And notice what the good answer is not: it is not longer. Three lines of algebra, a list of nine divisors and one sentence about why the list is complete is a full-mark solution. Olympiad marking rewards finishing, not volume.'
          ] },
        { kind: 'source', html: 'The problem, the algebra and the search are ours, written and run on 20 September 2026. UKMT publishes its own past papers and full solutions free, and none of them is reproduced here.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'How to practise',
      h2: 'Six weeks, one habit',
      lede: 'The Intermediate Challenge is in January and the olympiads are in March. That gap is enough if it is spent on writing rather than on reading.',
      body: [
        { kind: 'table', caption: 'What earns marks on these papers, and what does not', head: ['Habit', 'What it is worth', 'The failure it prevents'], rows: [
          ['Writing "all solutions are" and then proving it', 'Often the majority of a question\'s marks', 'A correct first answer scoring almost nothing'],
          ['Stating the method before using it', 'Lets a marker follow a long argument', 'A page of algebra nobody can grade'],
          ['Checking the boundary cases', 'Catches the solution that was quietly excluded', 'Nine solutions written as eight'],
          ['Finishing three questions rather than starting six', 'Complete solutions score; fragments rarely do', 'Two hours spent producing no full marks'],
          ['Reading UKMT\'s published solutions for style', 'Shows the expected standard exactly', 'Guessing how much detail is enough']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The commonest pattern we see in a first lesson is a pupil who can do the mathematics and has never once been told what a finished solution looks like. They are not behind. They have been rewarded for answers their whole school career, and the olympiad has changed the currency.',
            'Two hours for six questions means twenty minutes each, and nobody should aim for that. Three questions finished properly is a good paper and a realistic target for a first-time candidate.'
          ],
          right: [
            'For a Year 9 pupil sitting Cayley, the best investment is the one that pays three times. Everything learned about writing complete solutions this March is worth more on the Hamilton paper next year and more again on Maclaurin after that.',
            'A pupil who finds they enjoy this should look at the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>: the senior rounds and the British Mathematical Olympiad are the same sport played longer.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs, and a ladder that repeats',
    lede: 'The same pupil climbs this three times, in Years 9, 10 and 11. What is learned once counts three times.',
    table: { caption: 'From an answer to a complete, proved solution', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 8 to 9', '1. Algebra that does not slow you down', 'Rearranges and factorises without stopping to think'],
      ['Year 9', '2. One complete solution', 'Writes an argument a classmate could follow unaided'],
      ['Year 10', '3. All solutions', 'Asks "could there be another?" without being prompted'],
      ['Year 11', '4. Proof of completeness', 'Explains why the list cannot be longer, in a sentence']
    ] },
    left: { h3: 'If March is close', ps: [
      'Write up three problems the pupil has already solved, in full, and have someone read them as a stranger would. That is the highest-return evening available.',
      'Do not start new topics. Intermediate olympiad questions are built from school mathematics used unfamiliarly.'
    ] },
    right: { h3: 'After Maclaurin', ps: [
      'The senior rounds follow, and the British Mathematical Olympiad after those, where the same habit is worth far more.',
      'A pupil who enjoys closing a list of cases usually enjoys writing the program that generated it, which is what <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> is for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a Year 9, 10 or 11 mathematician',
    lede: 'Four groups, chosen by what is currently in the way rather than by year group.',
    bands: [
      { num: 'I', h3: 'Olympiad mathematics', sub: 'The paper itself', courses: [
        { code: 'IMK / O / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Divisors, invariants and arguments taken to the end.' },
        { code: 'IMK / O / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'The ground a Cayley candidate stands on.' },
        { code: 'IMK / O / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting arguments, done carefully.' }
      ] },
      { num: 'II', h3: 'School mathematics', sub: 'Years 9 to 11', courses: [
        { code: 'IMK / S / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'The algebra a Maclaurin candidate should not be thinking about.' },
        { code: 'IMK / S / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and higher, to the school\'s board.' },
        { code: 'IMK / S / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international and independent schools.' }
      ] },
      { num: 'III', h3: 'Checking and building', sub: 'Where maths meets code', courses: [
        { code: 'IMK / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'A program that lists candidates, and a proof that closes the list.' },
        { code: 'IMK / C / 02', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Enough code to search a space of cases by hand.' },
        { code: 'IMK / C / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Counting, searching and proving a method terminates.' }
      ] },
      { num: 'IV', h3: 'Looking further', sub: 'Sixth form and beyond', courses: [
        { code: 'IMK / N / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'Pure, mechanics and statistics, taught properly.' },
        { code: 'IMK / N / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correctness under a clock.' },
        { code: 'IMK / N / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where the mathematics goes next.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A weekly hour, and a reader for the write-up',
    lede: 'Teaching is live on video from India, which sits five and a half hours ahead of Britain in winter and four and a half in summer. Slots are agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice for Years 9 to 11.' },
      { time: 'Weekend morning', l: 'For two hours on a single question, properly.' },
      { time: 'Half term', l: 'Short intensives in the run-up to March.' }
    ],
    cells: [
      { h3: 'Written solutions marked', p: 'Someone reads the argument as a stranger would and says where it stops convincing.' },
      { h3: 'Problems written by us', p: 'In the olympiad idiom. UKMT\'s past papers stay on UKMT\'s site.' },
      { h3: 'Five to ten pupils', p: 'Enough for two different methods to meet, small enough for every write-up to be read.' },
      { h3: 'Year groups respected', p: 'Cayley, Hamilton and Maclaurin candidates are taught at the level their paper is set.' },
      { h3: 'One to one when useful', p: 'For a pupil far ahead of their year or preparing for a specific paper.' },
      { h3: 'No score promised', p: 'We cannot qualify anyone and do not claim to. Nobody honest promises a medal.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Six reviews left on our Google profile, printed without a word changed.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars for every country outside India. No joining fee and no term to sign.',
    free: ['A real lesson on one problem', 'An honest read on the level', 'No card details'],
    group: ['Five to ten pupils at one level', 'The same teacher weekly', 'Solutions read line by line', 'A certificate at the end'],
    one: ['One pupil with one teacher', 'Aimed at a particular paper', 'For pupils well ahead of their year']
  },

  faq: {
    eyebrow: 'Intermediate olympiad questions',
    h2: 'What pupils and parents ask',
    items: [
      { q: 'Which paper does my child sit?', a: 'By year group, not by score. UKMT sets Cayley for Year 9 and below, Hamilton for Year 10 and Maclaurin for Year 11 in England, Wales and overseas; S2 or below, S3 and S4 in Scotland; and Year 10 or below, Year 11 and Year 12 in Northern Ireland.' },
      { q: 'When are the intermediate olympiads in 2027?', a: 'All three papers fall on 18 March 2027, the same afternoon as the Grey and Pink Kangaroo. The Intermediate Mathematical Challenge that qualifies pupils is on 27 January 2027.' },
      { q: 'How does a pupil qualify?', a: 'UKMT says entry is by invitation based on a qualifying Intermediate Mathematical Challenge score, or by discretionary entry, and that around 1,800 students qualify from the IMC each year.' },
      { q: 'What is the paper like?', a: 'Two hours and six olympiad-style problems, with every answer written out in full. UKMT tells candidates to "give full written solutions, including mathematical reasons as to why your method is correct".' },
      { q: 'Why did a correct answer score so little?', a: 'Because UKMT says so plainly: "just stating an answer, even a correct one, will earn you very few marks; also, incomplete or poorly presented solutions will not receive full marks". At this level the argument is the answer.' },
      { q: 'What does "find all" actually require?', a: 'A list and a reason the list is complete. For example, 1/a + 1/b = 1/6 has exactly nine ordered solutions in positive integers, because the equation rearranges to (a minus 6)(b minus 6) = 36 and 36 has nine divisors. The sentence about the divisors is where the marks are.' },
      { q: 'How many questions should a pupil finish?', a: 'Three, well. Two hours for six questions is twenty minutes each, and complete solutions score where fragments do not.' },
      { q: 'Is the Kangaroo the same thing?', a: 'No. The Grey and Pink Kangaroo papers fall on the same afternoon but are multiple choice. Preparing for one is not preparing for the other.' },
      { q: 'Do you use UKMT past papers in lessons?', a: 'No. UKMT publishes its own past papers and full solutions free, which is the right place for them. Our problems are written by us in the same idiom.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for olympiad mathematicians',
    lede: 'The rung below, the paper beside it, and the whole competition year.',
    items: [
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'The rung below, for Year 8 and under.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'The whole season in one table, organiser by organiser.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Three rounds a year, and a mug for the winners.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'For pupils who would rather prove things in code.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and where every UK page sits.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Seven things to ask before a card comes out.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad lesson',
    lede: 'Tell us the year group and which paper is coming. The free lesson takes one problem all the way to a written solution someone else can read.',
    readFirst: 'Rather read? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp costs a UK mobile nothing and reaches us quickest. Our number is Indian, as we say on every page, and there is no office in Britain.',
    formNote: 'No card, no obligation. One reply to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the finishing; UKMT sets the paper'
  },

  personalityCss: `
.ag-root.ag-imk .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-imk .ag-capsule { border-left-width: 7px; border-radius: 0 8px 8px 0; }
.ag-root.ag-imk .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-imk .ag-table caption { text-align: left; font-weight: 700; font-style: italic; }
.ag-root.ag-imk .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-imk .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-imk .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-imk .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['six Olympiad style problems', 'Year 9 and below', 'around 1,800 students qualify from the IMC each year', '18 March 2027', 'nine divisors', 'will earn you very few marks', 'Maclaurin']
};
