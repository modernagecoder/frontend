'use strict';
// British Mathematical Olympiad preparation (ag- competition spoke, UK cluster Phase 2).
// Facts read on 20 September 2026 at ukmt.org.uk and bmos.ukmt.org.uk:
//  - UKMT competitions calendar 2026-27: Senior Mathematical Challenge 7 October 2026; BMO Round 1 and
//    the Andrew Jobbings Senior Kangaroo both on 18 November 2026; BMO Round 2 on 20 January 2027.
//  - BMOS: BMO1 is a "3 1/2-hour paper" of "6 problems (the first being intended to be more accessible
//    than the rest)"; BMO2 is a "3 1/2-hour paper" of "4 problems"; both are "taken by students in their
//    own schools"; BMO1 scripts are marked by "a team of around 60 markers" who gather "in December to
//    mark all the scripts over a 3-day period", and BMO2 marking is "carried out by around 20 people".
//  - BMOS eligibility: "BMO1 and BMO2 are open entry competitions for students in full time secondary
//    education"; to represent the UK at the IMO a candidate must "hold British citizenship, or ... will
//    have completed at least 3 full years of full-time secondary education in the UK at the time they
//    leave school"; refugees, stateless persons and asylum seekers may apply for UK qualified status
//    through UKMT/BMOS.
//  - UKMT: automatic qualification for BMO1 and BMO2 requires reaching a published threshold and being
//    eligible. After BMO2 the top scorers attend a training camp at Trinity College, Cambridge, an IMO
//    squad is selected, and further training and selection tests choose a team of six plus reserves.
// Entry fees are published in pounds and are not printed here.
// Spine: find the thing that cannot change. Our own experiment of 20 September 2026: write 1 to n on a
// board, repeatedly rub out two numbers and write the positive difference, until one number is left.
// 20,000 random runs across n = 4 to 10 produced many different final numbers (for n = 8: 0, 2, 4, 6 and
// 8) and not one run whose parity differed from the parity of 1 + 2 + ... + n. The final value is
// unpredictable; its parity is fixed before the first move. That is an invariant, and it is how olympiad
// problems prove that something is impossible.
// No BMO question is reproduced; BMOS publishes its own past papers and solutions.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'BMO', label: 'British Mathematical Olympiad', blurb: 'Three and a half hours, six problems, and sixty markers reading every word in December.' },
  slug: 'british-mathematical-olympiad-bmo-preparation',
  code: 'bmo',
  accent: '#1C3754',
  accentRationale: 'British Mathematical Olympiad: a dark slate blue from the solver (9.89:1 on every paper tint), quieter than the Bebras mid blue and the junior olympiad navy it sits beside',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'British Mathematical Olympiad preparation',
  title: 'British Mathematical Olympiad Preparation | BMO1 and BMO2',
  description: 'Preparing for BMO1 and BMO2: three and a half hours, six problems then four, who can enter, how scripts are marked and the route to the IMO team.',
  ogDescription: 'BMO1 gives you three and a half hours for six problems, and the first is meant to be gettable. What to practise, and the one technique that proves things impossible.',
  twitterDescription: 'British Mathematical Olympiad preparation: BMO1 and BMO2, and the route to the IMO team.',
  pageName: 'British Mathematical Olympiad Preparation',
  webPageDescription: 'Preparation guidance for the British Mathematical Olympiad rounds 1 and 2, covering the format of each paper, open entry and eligibility, how scripts are marked, and the selection route to the International Mathematical Olympiad team.',
  courseDescription: 'Live online olympiad mathematics classes for sixth formers and older secondary pupils working towards the British Mathematical Olympiad, teaching proof technique rather than past-paper drilling.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'British Mathematical Olympiad',
  navLinks: [
    { href: '#rounds', label: 'The two rounds' },
    { href: '#invariant', label: 'What cannot change' },
    { href: '#route', label: 'The IMO route' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Full-time secondary education &middot; 18 November 2026 and 20 January 2027',
  h1: 'British Mathematical Olympiad preparation',
  lede: 'Three and a half hours for six problems is the most generous time limit in British school mathematics, and the first time most students meet a paper where finishing everything is not the goal. BMO1 falls on 18 November 2026 and BMO2 on 20 January 2027, both sat in a student\'s own school, both marked by hand: around sixty people gather in December to read every BMO1 script over three days. That last fact is worth more than it looks. At this level a solution is not compared with an answer key by a machine. It is read by a mathematician who is looking for one thing, and this page is about how to give it to them.',
  secondaryCta: { href: '#invariant', label: 'See the technique that proves impossibility' },
  wa: 'Hello Modern Age Coders, I am preparing for the British Mathematical Olympiad and would like a free class.',
  heroNote: 'Every figure quoted from BMOS or UKMT &middot; Our own problems &middot; No promise of a threshold or a place',
  spec: [
    ['Organisers', 'UKMT and the BMO Subtrust'],
    ['BMO1', '18 November 2026'],
    ['BMO2', '20 January 2027'],
    ['Each paper', 'Three and a half hours'],
    ['Questions', 'Six in round 1, four in round 2'],
    ['Open to', 'Full-time secondary education'],
    ['Marked by', 'Around 60 people, by hand'],
    ['Leads to', 'The IMO squad, via Cambridge']
  ],
  capsuleQ: 'In short',
  capsule: 'The British Mathematical Olympiad has two rounds. BMOS describes BMO1 as a "3 1/2-hour paper" of "6 problems (the first being intended to be more accessible than the rest)" and BMO2 as a "3 1/2-hour paper" of "4 problems", both "taken by students in their own schools". UKMT\'s calendar puts BMO1 on 18 November 2026, the same day as the Andrew Jobbings Senior Kangaroo, and BMO2 on 20 January 2027, after the Senior Mathematical Challenge on 7 October 2026. BMOS says both "are open entry competitions for students in full time secondary education", with automatic qualification for those who reach a published threshold. BMO1 scripts are marked by "a team of around 60 markers" over three days in December; BMO2 by around twenty people. The top scorers go to a training camp at Trinity College, Cambridge, from which an IMO squad and then a team of six is chosen. We teach proof technique, live online: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a BMO candidate',
    lede: 'At this level the limit is technique and stamina, not syllabus.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'BMO / 01', title: 'Olympiad and competition maths', note: 'Invariants, extremal arguments, number theory and geometry, with solutions written to a standard a marker would accept.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'BMO / 02', title: 'High school mathematics', note: 'For a student whose algebra or geometry is still doing the slowing down.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'BMO / 03', title: 'A-level maths', note: 'The school course running underneath, taught so that it stops competing for the same evenings.' }
    ]
  },

  sections: [
    {
      id: 'rounds', tint: 'tint', eyebrow: 'The two rounds',
      h2: 'Six problems, then four, and a marker reading every line',
      lede: 'Quoted from BMOS and UKMT, read on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'BMO1 and BMO2 as the organisers describe them', head: ['', 'BMO1', 'BMO2'], rows: [
          ['Date', '18 November 2026', '20 January 2027'],
          ['Length', 'A "3 1/2-hour paper"', 'A "3 1/2-hour paper"'],
          ['Questions', '"6 problems (the first being intended to be more accessible than the rest)"', '"4 problems"'],
          ['Where', '"taken by students in their own schools"', '"taken by students in their own schools"'],
          ['Marking', '"A team of around 60 markers gathers in December to mark all the scripts over a 3-day period"', 'Marking is "carried out by around 20 people"'],
          ['Who can sit it', 'An "open entry" competition for students in full-time secondary education', 'The same, with automatic qualification by threshold']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The parenthesis in the BMO1 description is the single most useful sentence on this page for a first-time candidate: the first problem is "intended to be more accessible than the rest". The organisers have deliberately left the door open. A student who sits down, reads all six, panics at questions three to six and never seriously attempts question one has misread the paper, not failed it.',
            'Three and a half hours for six problems is fifty minutes each if spread evenly, and again, nobody should. Two complete solutions on a BMO1 paper is a real result for a first attempt.'
          ],
          right: [
            'Sixty markers over three days tells you what a script is for. Nothing is auto-marked, nothing is compared with a key, and partial credit is decided by a person reading an argument. Presentation is not politeness here; it is the mechanism by which marks are awarded at all.',
            'Both papers are sat in the candidate\'s own school, on an ordinary school day, which is worth arranging early with a teacher. The Senior Kangaroo falls on the same day as BMO1, and they are different papers for different people.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://bmos.ukmt.org.uk/" rel="noopener" target="_blank">the British Mathematical Olympiad site</a>, its <a class="ag-inline-link" href="https://bmos.ukmt.org.uk/home/eligibility.shtml" rel="noopener" target="_blank">eligibility policy</a>, and the <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions calendar</a>, all read 20 September 2026. We have no connection with UKMT or the BMO Subtrust.' }
      ]
    },
    {
      id: 'invariant', tint: 'deep', eyebrow: 'The method',
      h2: 'Find the thing that cannot change',
      lede: 'Olympiad papers ask a question school papers never do: show that something is impossible. There is a standard way in, and it is worth an evening.',
      body: [
        { kind: 'p', html: 'Try this. <strong>Write the numbers 1 to 8 on a board. Rub out any two of them and write down the positive difference instead. Repeat until one number is left. What can that last number be?</strong> Play it a few times and the answers look random: 0, then 6, then 2, then 4. The question feels unanswerable. It is not.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: 20,000 random games', head: ['Numbers on the board', 'Sum at the start', 'Final numbers we saw', 'Parity wrong in'], rows: [
          ['1 to 4', '10, even', '0, 2, 4', '0 runs'],
          ['1 to 5', '15, odd', '1, 3, 5', '0 runs'],
          ['1 to 8', '36, even', '0, 2, 4, 6, 8', '0 runs'],
          ['1 to 9', '45, odd', '1, 3, 5, 7, 9', '0 runs'],
          ['1 to 10', '55, odd', '1, 3, 5, 7, 9', '0 runs']
        ] },
        { kind: 'three', cells: [
          { h3: 'What we found', p: 'Across twenty thousand games the final number varied wildly and its parity never did. Start with an even total and you finish even; start odd and you finish odd, every time.' },
          { h3: 'Why it must be so', p: 'Replacing a and b by their difference changes the total by a + b minus the difference, which is twice the smaller number. An even change never alters whether a total is odd or even.' },
          { h3: 'What it is for', p: 'Now impossibility questions have an answer. Cannot reach 0 from 1 to 9? The sum is 45, odd, and it stays odd, so the last number cannot be 0. Two lines, complete.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'That is an invariant: a quantity that no permitted move can change. Finding one turns a question about infinitely many possible sequences of moves into a question about a single number, and it is the technique behind a large share of olympiad problems that ask whether something can be done.',
            'The experiment matters as preparation in a way that reading about invariants does not. A student who has watched twenty thousand games refuse to change parity will look for the invariant first next time.'
          ],
          right: [
            'It also models the right relationship with computing. The simulation did not prove anything: twenty thousand games are twenty thousand examples, and the <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">junior olympiad page</a> has a case where forty examples in a row lie. The proof is the two-line argument about twice the smaller number. The program told us where to look.',
            'Students who enjoy that division of labour tend to enjoy informatics olympiads too, where the program is the answer rather than the scout.'
          ] },
        { kind: 'source', html: 'The game, the runs and the argument are ours, written and run on 20 September 2026: 20,000 random games over boards of 1 to n for n between 4 and 10, with no run whose final parity differed from the parity of the starting sum.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'How to practise',
      h2: 'Two solutions, not six attempts',
      lede: 'BMO preparation is unlike revision. It is closer to training for distance than for a sprint.',
      body: [
        { kind: 'table', caption: 'What a BMO candidate should actually do', head: ['Worth the hours', 'Why', 'The trap it avoids'], rows: [
          ['Sitting one problem for an hour without help', 'Olympiad problems are built to resist a first reading', 'Learning to abandon anything that does not yield in five minutes'],
          ['Attempting question one seriously', 'BMOS says it is meant to be more accessible', 'Spending the paper on problems written to be hard'],
          ['Writing solutions out in full, then rereading them cold', 'Sixty people mark by hand; an argument has to survive a stranger', 'Working that convinces the author and nobody else'],
          ['Learning techniques as a repertoire', 'Invariants, extremal cases, pigeonhole, colouring, bounding', 'Hoping a flash of insight arrives on the day'],
          ['Reading BMOS\'s own published solutions', 'They show what a complete argument looks like at this level', 'Guessing the standard of rigour expected']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The mental adjustment is the hard part. Strong students arrive at BMO1 having always finished papers, and a three-and-a-half-hour paper on which they complete two questions feels like failure. It is not: it is a normal good performance, and the students who accept that early do better than those who keep score against a school-exam standard.',
            'Stamina is trainable and most candidates never train it. Three and a half hours of concentrated mathematics is a physical skill; a student who has never worked for more than forty minutes at a stretch will lose the last hour.'
          ],
          right: [
            'Nothing in a BMO paper requires content beyond school mathematics, which surprises people. What it requires is technique, patience and the willingness to write an argument that could be wrong.',
            'For a student in the year below, the <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">Cayley, Hamilton and Maclaurin papers</a> are the same sport over two hours, and everything learned there carries straight up.'
          ] }
      ]
    },
    {
      id: 'route', tint: 'tint', eyebrow: 'What follows',
      h2: 'Trinity College, a squad, and a team of six',
      lede: 'BMO2 is not the end of the ladder. It is the point at which the ladder becomes a selection process.',
      body: [
        { kind: 'table', caption: 'The route to the International Mathematical Olympiad, as BMOS describes it', head: ['Stage', 'What happens'], rows: [
          ['Senior Mathematical Challenge, 7 October 2026', 'The multiple-choice paper from which thresholds are set'],
          ['BMO Round 1, 18 November 2026', 'Six problems, three and a half hours, sat in school'],
          ['BMO Round 2, 20 January 2027', 'Four problems, three and a half hours, for those above the threshold'],
          ['Training camp', 'Top BMO2 scorers are invited to a camp at Trinity College, Cambridge'],
          ['The squad', 'An IMO squad is selected from the camp'],
          ['The team', 'Further training and selection tests narrow the squad to six, plus reserves']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Eligibility to sit the papers and eligibility to represent the UK are two different things, and BMOS sets them out separately. The papers are open entry for students in full-time secondary education. To be selected for the IMO team, a candidate must hold British citizenship or "will have completed at least 3 full years of full-time secondary education in the UK at the time they leave school".',
            'BMOS also states that refugees, stateless persons and asylum seekers may apply for UK qualified status through UKMT and BMOS, which is worth knowing and is rarely mentioned anywhere else.'
          ],
          right: [
            'For almost everyone who sits BMO1, none of this will apply, and that is the right way to think about the paper. Around sixty markers spend three days in December reading scripts from students who will never go to Cambridge for a training camp, and the reading is the point.',
            'The whole season, every competition we could confirm with its organiser, is on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs into olympiad mathematics',
    lede: 'A candidate moves up when the previous habit has become automatic, not when a year has passed.',
    table: { caption: 'From school mathematics to olympiad proof', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 9 to 10', '1. Fluent technique', 'Algebra and geometry never interrupt the thinking'],
      ['Years 10 to 11', '2. A repertoire', 'Recognises when to try an invariant, a bound or an extremal case'],
      ['Years 11 to 12', '3. Stamina', 'Works one problem for an hour without losing the thread'],
      ['Years 12 to 13', '4. Writing that survives', 'Produces arguments a stranger can mark without asking questions']
    ] },
    left: { h3: 'If November is close', ps: [
      'Sit a full past paper under timed conditions once, then spend the remaining weeks writing up the problems from it properly.',
      'Practise question one specifically. BMOS says it is meant to be more accessible, and a complete solution to it is worth more than four half-attempts.'
    ] },
    right: { h3: 'If this is the sport', ps: [
      'The same techniques run all the way to the International Mathematical Olympiad, and the squad is chosen from BMO2 by way of Cambridge.',
      'Students who like proving impossibility often like the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">informatics olympiad</a>, where the impossible thing is usually a running time.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a sixth-form mathematician',
    lede: 'Four groups, chosen by what is currently in the way.',
    bands: [
      { num: 'I', h3: 'Olympiad technique', sub: 'The paper itself', courses: [
        { code: 'BMO / O / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Invariants, pigeonhole, bounding and colouring, practised.' },
        { code: 'BMO / O / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting arguments made rigorous.' },
        { code: 'BMO / O / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Technique that should never be the obstacle.' }
      ] },
      { num: 'II', h3: 'School alongside', sub: 'Years 11 to 13', courses: [
        { code: 'BMO / S / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'Pure, mechanics and statistics, taught to the exam.' },
        { code: 'BMO / S / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'For a younger candidate finishing the qualification.' },
        { code: 'BMO / S / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'The international route through the same content.' }
      ] },
      { num: 'III', h3: 'Programs as scouts', sub: 'Where computing helps', courses: [
        { code: 'BMO / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Simulate first, then prove what the simulation suggested.' },
        { code: 'BMO / C / 02', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Enough programming to explore a conjecture in an evening.' },
        { code: 'BMO / C / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'The informatics version of the same discipline.' }
      ] },
      { num: 'IV', h3: 'Beyond school', sub: 'University and after', courses: [
        { code: 'BMO / N / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Where proofs meet running times.' },
        { code: 'BMO / N / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Mathematics with a use case attached.' },
        { code: 'BMO / N / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Statistics done on real data rather than exercises.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Long problems, weekly, with someone reading the write-up',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot for Years 11 to 13.' },
      { time: 'Weekend morning', l: 'Long enough to work one problem to the end.' },
      { time: 'Holiday intensives', l: 'For building stamina before November.' }
    ],
    cells: [
      { h3: 'One problem, properly', p: 'A lesson often contains a single question, taken from first reading to a written argument.' },
      { h3: 'Technique named', p: 'Invariants, extremal arguments, pigeonhole and bounding are taught as a repertoire, not as tricks.' },
      { h3: 'Five to ten students', p: 'Small enough that every write-up is read, large enough for two approaches to collide.' },
      { h3: 'Our own problems', p: 'Written by us in the olympiad idiom. BMOS publishes its own past papers and solutions.' },
      { h3: 'One to one when it fits', p: 'For a candidate far beyond their year group or preparing for BMO2.' },
      { h3: 'Nothing promised', p: 'No threshold, no squad place and no medal is promised by us, and nobody honest promises one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, built outside any competition. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Six reviews from our Google profile, printed exactly as they were left.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same in every country outside India. No joining fee and no fixed term.',
    free: ['One real problem with a teacher', 'An honest view of the level', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'Written arguments marked by hand', 'A certificate at the end'],
    one: ['One student with one teacher', 'Built around a specific weakness', 'For candidates working towards BMO2']
  },

  faq: {
    eyebrow: 'British Mathematical Olympiad questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'When are BMO1 and BMO2 in 2026-27?', a: 'UKMT\'s calendar puts BMO Round 1 on 18 November 2026, the same day as the Andrew Jobbings Senior Kangaroo, and BMO Round 2 on 20 January 2027.' },
      { q: 'How long is a BMO paper?', a: 'BMOS describes both rounds as a three-and-a-half-hour paper: six problems in BMO1 and four in BMO2, taken by students in their own schools.' },
      { q: 'Who can enter?', a: 'BMOS says "BMO1 and BMO2 are open entry competitions for students in full time secondary education", with automatic qualification for those who reach the published threshold and are eligible.' },
      { q: 'Is the first question really easier?', a: 'BMOS says the first of the six BMO1 problems is "intended to be more accessible than the rest". A first-time candidate should read it carefully rather than skimming past it.' },
      { q: 'How are the papers marked?', a: 'By hand. BMOS says around 60 markers gather in December to mark all the BMO1 scripts over three days, and that BMO2 marking is carried out by around 20 people. Nothing is machine-marked, so a written argument has to convince a reader.' },
      { q: 'How many solutions is a good score?', a: 'Two complete solutions on BMO1 is a genuine result for a first attempt. The paper is not designed to be finished, and judging it by school-exam standards is the commonest way to feel bad about a good performance.' },
      { q: 'What is an invariant?', a: 'A quantity that no allowed move can change. If you write 1 to 9 on a board and repeatedly replace two numbers by their difference, the parity of the total never changes, so the last number left must be odd. That kind of argument is how olympiad problems prove something is impossible.' },
      { q: 'Who can represent the UK at the IMO?', a: 'BMOS sets a separate rule: a candidate must hold British citizenship, or will have completed at least three full years of full-time secondary education in the UK by the time they leave school. Refugees, stateless persons and asylum seekers may apply for UK qualified status through UKMT and BMOS.' },
      { q: 'What happens after BMO2?', a: 'Top scorers are invited to a training camp at Trinity College, Cambridge. An IMO squad is chosen from the camp, and further training and selection tests narrow it to a team of six plus reserves.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for olympiad mathematicians',
    lede: 'The rungs below, the informatics equivalent, and the whole season in one table.',
    items: [
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton and Maclaurin', p: 'Two hours and six problems, split by school year.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'Where the written solutions start, at Year 8.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'The whole season, organiser by organiser.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'The same discipline, with a compiler as the marker.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Seven things to ask before a card comes out.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad lesson',
    lede: 'Tell us the year group and which round is next. The free lesson takes one hard problem from the first reading to an argument that would survive a marker.',
    readFirst: 'Rather read first? Course syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the teaching approach on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'A WhatsApp message is free from a UK mobile and usually the quickest route to us. Our number is Indian, which we state everywhere, and we keep no British office.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Olympiads', links: [
        { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton, Maclaurin' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Sixth-form maths', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A-level maths' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the argument; sixty markers read it'
  },

  personalityCss: `
.ag-root.ag-bmo .ag-hero h1 { letter-spacing: -0.023em; }
.ag-root.ag-bmo .ag-capsule { border-left-width: 2px; padding-left: 1.4rem; }
.ag-root.ag-bmo .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bmo .ag-table caption { text-align: left; font-weight: 600; text-transform: none; }
.ag-root.ag-bmo .ag-table th:first-child { width: 26%; }
.ag-root.ag-bmo .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-bmo .ag-three h3 { letter-spacing: -0.001em; }
.ag-root.ag-bmo .ag-slots { gap: 1.5rem; }
`,

  mustMention: ['3 1/2-hour paper', 'intended to be more accessible than the rest', 'around 60 markers', 'open entry competitions', 'Trinity College, Cambridge', '20,000 random games', '3 full years of full-time secondary education']
};
