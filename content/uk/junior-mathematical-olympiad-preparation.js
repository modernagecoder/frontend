'use strict';
// Junior Mathematical Olympiad preparation (ag- competition spoke, UK cluster Phase 2).
// UKMT facts read on 20 September 2026 at ukmt.org.uk:
//  - Competitions calendar 2026-27: Junior Mathematical Challenge 5 May 2027; Junior Kangaroo 15 June
//    2027; Junior Mathematical Olympiad 15 June 2027.
//  - Junior Mathematical Olympiad page: eligibility "England, Wales and Overseas: Year 8 and below",
//    "Scotland: S2 or below", "Northern Ireland: Year 9 or below"; "Around 1,200 students qualify from
//    the JMC each year"; entry is "by invitation based on a qualifying JMC score, or by discretionary
//    entry", with automatic qualifiers free (the discretionary fee is in pounds and is not printed here
//    under the one-currency rule; the page sends readers to UKMT for it); "2 hour Challenge consisting of
//    6 Olympiad style questions".
// Spine: forty examples are not a proof. Our own demonstration, computed on 20 September 2026:
// n squared plus n plus 41 is prime for every whole number n from 0 to 39, forty values in a row, and at
// n = 40 it gives 1681, which is 41 times 41. The JMC asks which answer is right; the JMO asks why no
// other answer can be, and this is the cheapest way to show a twelve-year-old the difference.
// No UKMT paper is reproduced; UKMT publishes its own past papers free.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'JMO', label: 'Junior Mathematical Olympiad', blurb: 'Six questions, two hours, and the first paper where a twelve-year-old has to prove it.' },
  slug: 'junior-mathematical-olympiad-preparation',
  code: 'jmo',
  accent: '#151579',
  accentRationale: 'Junior Mathematical Olympiad: a deep navy from the solver (12.04:1 on every paper tint), distinct from the Scotland indigo and from the bronze, copper, plum, olive, blue and wine of the other competition pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Junior Mathematical Olympiad preparation',
  title: 'Junior Mathematical Olympiad Preparation | JMO, Year 8 and Below',
  description: 'Preparing for the UKMT Junior Mathematical Olympiad: six questions in two hours, who qualifies from the JMC, and the jump from choosing an answer to proving one.',
  ogDescription: 'The JMO is the first paper where a twelve-year-old has to write a proof rather than pick an answer. Forty examples are not enough, and here is why.',
  twitterDescription: 'JMO preparation: six olympiad questions, two hours, and the step up from multiple choice.',
  pageName: 'Junior Mathematical Olympiad Preparation',
  webPageDescription: 'Preparation guidance for the UK Mathematics Trust Junior Mathematical Olympiad, covering eligibility by nation, qualification from the Junior Mathematical Challenge, the format of the paper and how to practise writing proofs.',
  courseDescription: 'Live online olympiad mathematics classes for pupils in Year 8 and below, teaching problem solving and written proof rather than drilling past papers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Junior Mathematical Olympiad',
  navLinks: [
    { href: '#paper', label: 'The paper' },
    { href: '#proof', label: 'Why examples fail' },
    { href: '#practise', label: 'How to practise' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 8 and below &middot; 15 June 2027',
  h1: 'Junior Mathematical Olympiad preparation',
  lede: 'A pupil who does well in the Junior Mathematical Challenge in May is invited, six weeks later, to sit something that looks nothing like it. The Challenge is multiple choice and rewards a good eye. The Olympiad is six questions in two hours with nothing to choose from, and it rewards something a twelve-year-old has usually never been asked for: an argument that closes the door on every other answer. That step is the whole of JMO preparation. It is not harder topics, and it is certainly not more speed. It is learning that finding the answer is the beginning of the question.',
  secondaryCta: { href: '#proof', label: 'See why examples are not enough' },
  wa: 'Hello Modern Age Coders, my child has qualified for the Junior Mathematical Olympiad and I would like a free maths class.',
  heroNote: 'UKMT facts, dated &middot; No past paper reproduced &middot; No promise of a medal or a score',
  spec: [
    ['Organiser', 'UK Mathematics Trust'],
    ['For', 'Year 8 and below, or S2 and below'],
    ['2027 date', '15 June'],
    ['Paper', 'Six questions in two hours'],
    ['Qualifying from', 'The Junior Mathematical Challenge'],
    ['Qualifiers a year', 'Around 1,200'],
    ['Answers', 'Written out in full'],
    ['Entered by', 'A school, not by us']
  ],
  capsuleQ: 'In short',
  capsule: 'The Junior Mathematical Olympiad is run by the UK Mathematics Trust and is described by UKMT as a "2 hour Challenge consisting of 6 Olympiad style questions". It falls on 15 June 2027. Eligibility is "England, Wales and Overseas: Year 8 and below", "Scotland: S2 or below" and "Northern Ireland: Year 9 or below". Entry is by invitation based on a qualifying score in the Junior Mathematical Challenge, sat on 5 May 2027, or by discretionary entry; UKMT says around 1,200 students qualify from the JMC each year and that automatic qualifiers pay nothing. The Junior Kangaroo falls on the same day, 15 June 2027. Schools enter pupils; families cannot, and neither can we. What we teach is the mathematics and the writing the paper asks for, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a Year 7 or Year 8 olympiad candidate',
    lede: 'Choose by what the pupil can already write down, not by what they can work out in their head.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'JMO / 01', title: 'Olympiad and competition maths', note: 'The core: unfamiliar problems, and solutions written so that someone else is convinced.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'JMO / 02', title: 'Middle school maths mastery', note: 'The algebra, geometry and number the olympiad questions are built out of.' },
      { course: 'maths-through-coding', code: 'JMO / 03', title: 'Maths through coding', note: 'For the pupil who likes checking a claim on a thousand cases before trying to prove it.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The paper',
      h2: 'Six questions, two hours, and no options',
      lede: 'Facts read at UKMT\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Junior Mathematical Olympiad, as UKMT publishes it', head: ['Part', 'What UKMT says', 'What it means for a pupil'], rows: [
          ['Format', 'A "2 hour Challenge consisting of 6 Olympiad style questions"', 'Twenty minutes a question, and every one written out in full'],
          ['Date', '15 June 2027', 'Six weeks after the Junior Mathematical Challenge on 5 May 2027'],
          ['England, Wales and Overseas', '"Year 8 and below"', 'Usually Year 8, sometimes a very strong Year 7 or younger'],
          ['Scotland', '"S2 or below"', 'The Scottish stages, not translated year groups'],
          ['Northern Ireland', '"Year 9 or below"', 'One year higher than England and Wales, matching the NI school year'],
          ['How to get in', '"by invitation based on a qualifying JMC score, or by discretionary entry"', 'The Challenge in May is the normal route'],
          ['How many', '"Around 1,200 students qualify from the JMC each year"', 'A small paper: the whole country fits in a large school hall'],
          ['Cost', 'Automatic qualifiers are free; discretionary entries carry a fee set by UKMT', 'We do not print the fee; UKMT publishes it in pounds']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Junior Kangaroo is sat on the same day, 15 June 2027. It is the other follow-on from the Junior Mathematical Challenge and it is multiple choice, which makes it a different kind of afternoon entirely. A pupil and a teacher should know which paper is coming, because preparing for one is not preparing for the other.',
            'Around 1,200 qualifiers is worth holding onto as well. Whatever a pupil scores in June, being in that room at all puts them among a few hundred per year group nationally.'
          ],
          right: [
            'Two hours for six questions is generous by exam standards and tight by olympiad standards. Most pupils will not finish all six, and that is normal and expected: a full, correct, well-written solution to three questions is a good paper.',
            'The temptation this creates is the one to resist. A pupil who writes hurried partial answers to all six usually scores less than one who writes three properly, because olympiad marking rewards complete arguments, not coverage.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions calendar</a> and the <a class="ag-inline-link" href="https://ukmt.org.uk/junior-challenges/junior-mathematical-olympiad" rel="noopener" target="_blank">Junior Mathematical Olympiad page</a>, read 20 September 2026. Modern Age Coders is not connected with the UK Mathematics Trust.' }
      ]
    },
    {
      id: 'proof', tint: 'deep', eyebrow: 'The method',
      h2: 'Forty examples are not a proof',
      lede: 'The single idea that separates a Challenge pupil from an Olympiad pupil, in one worked case.',
      body: [
        { kind: 'p', html: 'Take the expression <strong>n &times; n + n + 41</strong> and try whole numbers. At n = 0 it gives 41, a prime. At n = 1, 43, prime. At n = 2, 47, prime. Keep going. It is prime at n = 3, at n = 10, at n = 25, at n = 39. Forty values in a row, every single one prime. Any reasonable twelve-year-old would now say the rule always gives primes, and any reasonable twelve-year-old would be wrong.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: the first forty-one values', head: ['n', 'n &times; n + n + 41', 'Prime?'], rows: [
          ['0', '41', 'Yes'],
          ['1', '43', 'Yes'],
          ['10', '151', 'Yes'],
          ['25', '691', 'Yes'],
          ['39', '1601', 'Yes, the fortieth in a row'],
          ['40', '1681', 'No: 1681 is 41 times 41']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why it fails at forty', p: 'Put n = 41 in and every term has a factor of 41; at n = 40 the same thing happens a step early. Once you see it, the failure is obvious. Before you see it, forty examples look like certainty.' },
          { h3: 'What the JMC teaches', p: 'That the right answer is among five printed options, so checking a couple of cases and choosing is a good strategy. It is a good strategy, for that paper.' },
          { h3: 'What the JMO wants', p: 'A sentence explaining why nothing else is possible. Examples can support an argument; they can never be one.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the conversation to have in the week after the Challenge results arrive, and it takes about ten minutes. Most pupils find it genuinely startling, which is the point: the habit of trying cases until convinced is exactly what has served them well until now.',
            'The follow-up question is the useful one. If forty cases are not enough, what would be? The answers a twelve-year-old can reach are already real mathematics: try every possibility when there are few enough, split into cases that cover everything, or find the reason rather than the pattern.'
          ],
          right: [
            'Our demonstration was checked in code before it went on this page, which is itself the smaller half of the lesson. Testing a claim on a thousand cases is a good way to decide whether to believe it. It is not a way to prove it, and the pupils who go furthest learn to want both.',
            'For a pupil who enjoys that side, the same instinct runs straight into programming: the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> is built on it.'
          ] },
        { kind: 'source', html: 'The values were computed by us on 20 September 2026 and checked individually: every n from 0 to 39 gives a prime, and n = 40 gives 1681, which is 41 squared.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'How to practise',
      h2: 'Write one solution properly, not six answers quickly',
      lede: 'Olympiad preparation looks slow from the outside and is. Six weeks is enough if it is spent on the right thing.',
      body: [
        { kind: 'table', caption: 'What moves a JMO score, and what does not', head: ['Worth doing', 'Why', 'Not worth doing'], rows: [
          ['Writing full solutions to problems already solved', 'The writing is the part being marked, and it is the part nobody has practised', 'Working more problems and never writing any up'],
          ['Reading UKMT\'s published solutions', 'They model the standard of explanation expected', 'Only checking whether the final answer matched'],
          ['Working one hard problem for an hour', 'Olympiad questions are meant to resist a first look', 'Twenty quick questions to feel productive'],
          ['Learning to say "suppose not"', 'Half of junior olympiad questions yield to assuming the opposite', 'Memorising named techniques by rote'],
          ['Stopping when it stops being fun', 'A tired twelve-year-old learns nothing and remembers the mood', 'Daily drilling in the fortnight before']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The most common mistake families make is to buy harder material. The mathematics in a JMO question is rarely beyond a good Year 8 pupil; it is the packaging that is unfamiliar. A pupil who can already do the arithmetic and the algebra needs practice at unpacking, not at topics.',
            'The second most common is to treat June as an exam. It is not one: nothing depends on it, no school place turns on it, and a pupil who enjoys it will come back next year at a higher level.'
          ],
          right: [
            'UKMT publishes past papers and full solutions free on its own site. That archive is better than any purchased course, and it is the reason we do not reproduce a single UKMT question here or in our lessons: the real ones are already available from the people who wrote them.',
            'What a teacher adds is reading. A pupil can tell whether their answer is right; they usually cannot tell whether their explanation is convincing, and that is the thing worth an hour a week of somebody else\'s attention.'
          ] }
      ]
    },
    {
      id: 'route', tint: 'tint', eyebrow: 'The route',
      h2: 'Where the JMO sits, and what follows it',
      lede: 'The junior olympiad is one rung of a ladder that reaches the international olympiad, and almost nobody climbs it in a straight line.',
      body: [
        { kind: 'table', caption: 'The UKMT junior and intermediate route, with 2026-27 dates', head: ['Round', 'Date', 'Who sits it'], rows: [
          ['Junior Mathematical Challenge', '5 May 2027', 'Year 8 and below, entered by the school'],
          ['Junior Kangaroo', '15 June 2027', 'A follow-on from the Challenge, multiple choice'],
          ['Junior Mathematical Olympiad', '15 June 2027', 'Around 1,200 qualifiers, six written questions'],
          ['Intermediate Mathematical Challenge', '27 January 2027', 'The next year group up'],
          ['Cayley, Hamilton and Maclaurin', '18 March 2027', 'The intermediate olympiads, by school year']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A Year 8 pupil who sits the JMO in June moves into the intermediate rounds the following year, where the same habit of writing proofs is worth even more. The Cayley, Hamilton and Maclaurin papers are the next stop, split by school year rather than by score.',
            'Nothing about the ladder is compulsory and no rung is a verdict. Plenty of strong mathematicians sit one olympiad, find it uncomfortable, and come back to it at sixteen.'
          ],
          right: [
            'For a pupil in Scotland, the <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">Scottish Mathematical Challenge</a> runs alongside all of this on its own timetable and marks explanations too, which makes the two a good pairing.',
            'And the whole year, every competition we could confirm with its organiser, is laid out on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from a right answer to a closed argument',
    lede: 'Progress here is measured in what a pupil writes, not in topics covered.',
    table: { caption: 'From answer to proof', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 6 to 7', '1. Confident arithmetic', 'Algebra and fractions do not slow the thinking down'],
      ['Year 7', '2. Unfamiliar problems', 'Will sit with a problem for twenty minutes without asking for a hint'],
      ['Year 7 to 8', '3. Written solutions', 'Writes an explanation a classmate could follow without being told'],
      ['Year 8', '4. Closed arguments', 'Can say why no other answer is possible, not just that this one works']
    ] },
    left: { h3: 'If June is close', ps: [
      'Take three problems the pupil has already solved and write them up properly. That is the fastest available gain, and it takes an evening.',
      'Do not add topics in the last fortnight. Nothing in a junior olympiad needs content a Year 8 pupil has not met.'
    ] },
    right: { h3: 'After the JMO', ps: [
      'The intermediate rounds follow the next year, and the writing habit is worth more at every level above this one.',
      'Pupils who enjoy proving things often take to programming for the same reason, which is what <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> is built around.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths and computing courses for junior olympiad candidates',
    lede: 'Arranged by what a pupil is ready for, with the syllabus behind every card.',
    bands: [
      { num: 'I', h3: 'The mathematics', sub: 'Years 6 to 9', courses: [
        { code: 'JMO / M / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Unfamiliar problems and the writing that finishes them.' },
        { code: 'JMO / M / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Pre-algebra and geometry, argued not drilled.' },
        { code: 'JMO / M / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'For a younger pupil whose foundations still wobble.' }
      ] },
      { num: 'II', h3: 'Speed and accuracy', sub: 'For the Challenge rounds', courses: [
        { code: 'JMO / S / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation that stops costing thinking time.' },
        { code: 'JMO / S / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for the arithmetic underneath.' },
        { code: 'JMO / S / 03', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Timed upper primary work, for a younger candidate.' }
      ] },
      { num: 'III', h3: 'Checking claims', sub: 'Where maths meets code', courses: [
        { code: 'JMO / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a claim on a thousand cases, then prove it.' },
        { code: 'JMO / C / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language for a curious Year 7.' },
        { code: 'JMO / C / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Reasoning about method, in code.' }
      ] },
      { num: 'IV', h3: 'Looking ahead', sub: 'Years 9 and up', courses: [
        { code: 'JMO / N / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra through to calculus, for a pupil racing ahead.' },
        { code: 'JMO / N / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and higher, to the board the school uses.' },
        { code: 'JMO / N / 03', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'For the pupil who wants to build as well as prove.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'An hour a week, with somebody reading the write-up',
    lede: 'Lessons are live on video from India, where the clock runs five and a half hours ahead of Britain in winter and four and a half in summer. Times are agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'The usual slot for Years 7 and 8.' },
      { time: 'Weekend morning', l: 'For a long session on one problem.' },
      { time: 'Holiday weeks', l: 'Short and frequent, while school is out.' }
    ],
    cells: [
      { h3: 'Solutions read closely', p: 'The teacher reads what the pupil wrote and says where a reader would stop being convinced.' },
      { h3: 'Our own problems', p: 'Written by us in the olympiad spirit. UKMT past papers stay where UKMT publishes them.' },
      { h3: 'Five to ten pupils', p: 'Small enough for every solution to be looked at, large enough for two methods to meet.' },
      { h3: 'Time to be stuck', p: 'Being stuck for twenty minutes is the work, not a sign that something is wrong.' },
      { h3: 'One to one on request', p: 'For a pupil working far above their year, or one who will not speak in a group.' },
      { h3: 'No result promised', p: 'No qualification, medal or score is promised by us, and nobody honest promises one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From our Google profile, in families\' own words.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same outside India everywhere. No joining fee and no fixed term.',
    free: ['A real lesson on a real problem', 'An honest read on the level', 'No card details'],
    group: ['Five to ten pupils at one level', 'The same teacher each week', 'Written solutions marked', 'A certificate at the end'],
    one: ['One pupil with one teacher', 'Aimed at the specific gap', 'For pupils far ahead of their year']
  },

  faq: {
    eyebrow: 'Junior Mathematical Olympiad questions',
    h2: 'What parents and pupils ask',
    items: [
      { q: 'When is the Junior Mathematical Olympiad in 2027?', a: 'UKMT\'s competitions calendar gives 15 June 2027, six weeks after the Junior Mathematical Challenge on 5 May 2027.' },
      { q: 'Who is eligible?', a: 'UKMT publishes it by nation: Year 8 and below in England, Wales and overseas; S2 or below in Scotland; Year 9 or below in Northern Ireland.' },
      { q: 'How does a pupil qualify?', a: 'By invitation based on a qualifying score in the Junior Mathematical Challenge, or by discretionary entry. UKMT says around 1,200 students qualify from the JMC each year, and that automatic qualifiers pay nothing.' },
      { q: 'What is the paper like?', a: 'UKMT describes a two-hour challenge of six olympiad-style questions. There is nothing to choose from: each answer is written out in full, and the reasoning is what is marked.' },
      { q: 'Is it harder than the Junior Mathematical Challenge?', a: 'It is different rather than simply harder. The content is within reach of a strong Year 8 pupil; what is new is being asked to prove that no other answer is possible.' },
      { q: 'How many questions should a pupil expect to finish?', a: 'Not all six, usually. Three complete, well-written solutions is a good paper, and hurried partial answers to all six generally score less.' },
      { q: 'What else falls on the same day?', a: 'The Junior Kangaroo, also on 15 June 2027, which is the multiple-choice follow-on from the Junior Mathematical Challenge. A pupil should know which paper they are sitting.' },
      { q: 'How should we prepare?', a: 'By writing up solutions to problems the pupil has already solved, reading UKMT\'s published solutions for the standard of explanation, and spending a long time on single problems. Not by adding topics.' },
      { q: 'Do you use UKMT past papers?', a: 'No. UKMT publishes its own past papers and full solutions free, which is the right place for them. Our practice problems are written by us in the same spirit.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young mathematicians',
    lede: 'The rungs above and below, and the whole competition year in one table.',
    items: [
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'The rung below, for ages 9 to 11.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Marks for the explanation, on a Scottish timetable.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'The same instinct, applied to programs.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'What to ask any provider before paying.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad lesson',
    lede: 'Tell us the year group and whether your child has sat the Challenge. The free lesson works on one real problem, all the way to a written solution.',
    readFirst: 'Rather read first? Syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, the teaching method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp costs a UK mobile nothing and usually reaches us first. Our number is Indian, as we say on every page, and there is no office in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the proof; UKMT sets the paper'
  },

  personalityCss: `
.ag-root.ag-jmo .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-jmo .ag-capsule { border-left-width: 5px; border-radius: 0 4px 4px 0; }
.ag-root.ag-jmo .ag-section-head h2 { max-width: 23ch; }
.ag-root.ag-jmo .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.015em; }
.ag-root.ag-jmo .ag-table td:first-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-jmo .ag-spec dt { letter-spacing: 0.16em; }
.ag-root.ag-jmo .ag-three h3 { letter-spacing: -0.003em; }
.ag-root.ag-jmo .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['6 Olympiad style questions', 'Year 8 and below', 'Around 1,200 students qualify', '15 June 2027', '1681', 'S2 or below', 'Year 9 or below']
};
