'use strict';
// Oxford University Computing Challenge preparation (ag- competition spoke, UK cluster Phase 2).
// The name searchers use is OUCC; the round it refers to is now presented by UK Bebras as the Raspberry
// Pi Foundation Coding Challenge. The page says so in the first paragraph rather than trading on a name.
// Read 20 September 2026:
//  - bebras.uk, Raspberry Pi Foundation Coding Challenge: only schools and students who took part in the
//    previous UK Bebras Challenge can enter, home-educated students are contacted directly by the UK
//    Bebras team; "Designed to be accessible to all students aged 10+"; two types, block-based and
//    text-based programming, each with two difficulty levels; a "45-minute coding challenge" supervised
//    by coordinators; teachers are contacted through the UK Bebras emailing system during the challenge.
//  - Raspberry Pi Foundation blog on the OUCC: "We invited the students with the top 10% best results in
//    the UK Bebras challenge to take part in the OUCC"; students aged 10 to 18 in four age groups; the
//    two younger cohorts "solve problems using the Blockly programming language" and the older two "can
//    use one of the 11 programming languages that Bebras supports"; offered in the UK, Australia, Jamaica
//    and China; "Over 20,000 Bebras participants took up the invitation to the first round of the OUCC";
//    "the top 20 participants from each of the four OUCC age groups took part in the final round".
//  - oucc.uk and the bebras.uk OUCC pages returned 404 or access-denied errors on 20 September 2026, so
//    nothing is stated about the current status of the OUCC name itself.
// Spine: equal is not the same as identical. In an auto-marked round the output must match, and two
// correct sorts of the same data can disagree about the order of tied entries. Our demonstration of
// 20 September 2026: seven pupils with scores, sorted high to low. A method that preserves the order of
// equal items gives Ben Dev Gus Amara Cara Esme Finn; a quicksort we wrote that does not gives
// Gus Dev Ben Esme Cara Amara Finn. Both are sorted by score. Only one matches a marker's expected text.
// Lesson family: stable sort and the order of ties, screened free site-wide on 20 September 2026.
// No challenge task is reproduced.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'OUCC', label: 'Oxford University Computing Challenge', blurb: 'The round after Bebras, now run as the Raspberry Pi Foundation Coding Challenge. Invitation only.' },
  slug: 'oxford-university-computing-challenge-preparation',
  code: 'ouc',
  accent: '#570F20',
  accentRationale: 'OUCC: a very dark wine red from the solver (11.40:1 on every paper tint), far from the brighter London red and unlike the bronze, copper, plum, olive and blue of the other competition pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Oxford University Computing Challenge preparation',
  title: 'Oxford University Computing Challenge | The Round After Bebras',
  description: 'The OUCC, now run as the Raspberry Pi Foundation Coding Challenge: who is invited, the block and text tracks, 45 minutes, and how to prepare for a marked round.',
  ogDescription: 'The challenge after Bebras is invitation only, 45 minutes, and marked by a machine. What that changes about how a student should write their code.',
  twitterDescription: 'Oxford University Computing Challenge preparation: the round after Bebras, block-based or text-based.',
  pageName: 'Oxford University Computing Challenge Preparation',
  webPageDescription: 'Preparation guidance for the coding round that follows the UK Bebras Challenge, known to most students as the Oxford University Computing Challenge and now presented by UK Bebras as the Raspberry Pi Foundation Coding Challenge.',
  courseDescription: 'Live online programming classes in Blockly-style block coding and in Python for students preparing for auto-marked coding challenges, ages 10 upwards.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Oxford University Computing Challenge',
  navLinks: [
    { href: '#what', label: 'What it is now' },
    { href: '#ties', label: 'Equal is not identical' },
    { href: '#prepare', label: 'How to prepare' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 10 and over &middot; Invitation only, through Bebras',
  h1: 'Oxford University Computing Challenge preparation',
  lede: 'A note before anything else, because it will save you an afternoon. The round most people mean by the Oxford University Computing Challenge is now presented by UK Bebras as the Raspberry Pi Foundation Coding Challenge, and the OUCC\'s own pages returned errors when we checked them in September 2026. The round still exists, it still follows Bebras, and it is still the step where a young person\'s thinking has to survive contact with an actual program. The rest of this page is about that step: who gets in, what the two tracks are, and the particular way an auto-marked round punishes code that is nearly right.',
  secondaryCta: { href: '#ties', label: 'See how two correct answers disagree' },
  wa: 'Hello Modern Age Coders, my child has been invited to the coding challenge after Bebras and I would like a free class.',
  heroNote: 'Organiser facts, dated &middot; No task reproduced &middot; No promise of an invitation',
  spec: [
    ['Now run as', 'Raspberry Pi Foundation Coding Challenge'],
    ['Follows', 'The UK Bebras Challenge'],
    ['For', 'Students aged 10 and over'],
    ['Two tracks', 'Block-based and text-based'],
    ['Levels', 'Two difficulty levels in each'],
    ['Length', '45 minutes, supervised'],
    ['Entry', 'Only through a school that sat Bebras'],
    ['Marked by', 'A machine, on output']
  ],
  capsuleQ: 'In short',
  capsule: 'The coding round that follows the UK Bebras Challenge is described by UK Bebras as the Raspberry Pi Foundation Coding Challenge; most students, teachers and websites still call it the Oxford University Computing Challenge. Only schools and students who took part in the previous UK Bebras Challenge can enter, and home-educated students are contacted directly by the UK Bebras team. It is "designed to be accessible to all students aged 10+", runs as a 45-minute supervised challenge, and comes in two types, block-based and text-based programming, each with two difficulty levels. Historically the Raspberry Pi Foundation invited the students with the top ten per cent of results in the UK Bebras challenge, with four age groups from 10 to 18, Blockly for the younger two and a choice of eleven languages for the older two. We teach the programming, not the entry: the first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for the round after Bebras',
    lede: 'Choose by which track the student will sit, blocks or text.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'OUC / 01', title: 'Coding for kids, blocks to AI', note: 'For the block-based track: loops, conditions and variables, in a visual language.' },
      { course: 'python-ai-kids-masterclass', code: 'OUC / 02', title: 'Python and AI for kids', note: 'For a ten to thirteen year old crossing from blocks to typed code.' },
      { course: 'python-complete-masterclass-teens', code: 'OUC / 03', title: 'Python from start to finish', note: 'For the text-based track at the older age groups, including exact output and edge cases.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is now',
      h2: 'One round, two names, and a single way in',
      lede: 'Facts from UK Bebras and the Raspberry Pi Foundation, read on 20 September 2026. Where a source is historical we say so.',
      body: [
        { kind: 'table', caption: 'The coding round after Bebras, as the organisers describe it', head: ['Part', 'What the organiser says', 'Source'], rows: [
          ['Who can enter', 'Only schools and students who took part in the previous UK Bebras Challenge; home-educated students are contacted directly by the UK Bebras team', 'UK Bebras, 2026'],
          ['Ages', '"Designed to be accessible to all students aged 10+"', 'UK Bebras, 2026'],
          ['Two types', 'Block-based programming and text-based programming, each with two difficulty levels', 'UK Bebras, 2026'],
          ['Length', 'A 45-minute coding challenge, supervised by school coordinators', 'UK Bebras, 2026'],
          ['On the day', 'Teachers are contacted through the UK Bebras internal emailing system with instructions', 'UK Bebras, 2026'],
          ['Historic invitation', '"We invited the students with the top 10% best results in the UK Bebras challenge to take part in the OUCC"', 'Raspberry Pi Foundation, on the OUCC'],
          ['Historic age groups', 'Students aged 10 to 18 in four age groups; Blockly for the two younger cohorts, one of eleven languages Bebras supports for the older two', 'Raspberry Pi Foundation, on the OUCC'],
          ['Historic scale', '"Over 20,000 Bebras participants took up the invitation to the first round", with the top 20 in each of the four age groups reaching the final', 'Raspberry Pi Foundation, on the OUCC']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The single most important line for a parent is the first one. There is no direct entry. A student who did not sit the UK Bebras Challenge in November cannot take this round, however good they are, and no tutor, service or payment changes that. The way in is a teacher signing a school up for Bebras.',
            'Everything else follows from that. If a child is interested in this round, the thing to do in September is ask whether the school is entering Bebras, not to buy preparation.'
          ],
          right: [
            'On the name: we could not read oucc.uk or the Bebras OUCC pages on 20 September 2026, and we do not assert that the Oxford University Computing Challenge has been renamed, retired or replaced. What we can say is what UK Bebras currently publishes, which describes the follow-on round as the Raspberry Pi Foundation Coding Challenge. Both names appear on this page so that families searching either one arrive somewhere useful.',
            'The historical rows are labelled as historical for the same reason. A top-ten-per-cent invitation was how the OUCC worked when the Foundation wrote about it; we do not claim it is this year\'s rule.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://bebras.uk/index.php?action=content&amp;id=132" rel="noopener" target="_blank">UK Bebras, Raspberry Pi Foundation Coding Challenge</a> and the Raspberry Pi Foundation\'s <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/uk-bebras-oxford-university-computing-challenge-2022/" rel="noopener" target="_blank">account of the Oxford University Computing Challenge</a>, read 20 September 2026. Modern Age Coders is not connected with the Raspberry Pi Foundation, UK Bebras or the University of Oxford.' }
      ]
    },
    {
      id: 'ties', tint: 'deep', eyebrow: 'The method',
      h2: 'Equal is not the same as identical',
      lede: 'A round marked by a machine compares your output with an expected output. That makes one ordinary bug much more expensive than it is at school.',
      body: [
        { kind: 'p', html: 'Suppose a task says: print the pupils in order of score, highest first. Here are seven pupils. <strong>Ben 9, Dev 9, Gus 9, Amara 7, Cara 7, Esme 7, Finn 5.</strong> Three of them share a nine and three share a seven. Sort them by score and you have a correct answer. Sort them by score a different way and you have a different correct answer. Only one of the two matches what the marker is holding.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: two sorts of the same seven pupils, both by score', head: ['Method', 'Output', 'Sorted by score?'], rows: [
          ['Keeps equal items in their original order', 'Ben Dev Gus Amara Cara Esme Finn', 'Yes'],
          ['A quicksort we wrote that does not', 'Gus Dev Ben Esme Cara Amara Finn', 'Yes'],
          ['What an automatic marker does', 'Compares the text, character by character', 'It does not care which is fairer']
        ] },
        { kind: 'three', cells: [
          { h3: 'The word for it', p: 'A sort that leaves equal items in the order they arrived is called stable. One that does not is not, and most beginners have never been told which kind their language gives them.' },
          { h3: 'Why it bites here', p: 'At school a teacher reads the answer and sees it is sorted. A machine sees two strings that differ, and marks the second one wrong.' },
          { h3: 'The fix is one line', p: 'Decide what happens to ties and say so: sort by score, then by name. Now there is only one correct output and nothing is left to chance.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the real difference between school programming and a marked round, and it goes well beyond sorting. Trailing spaces, capital letters, a full stop the task did not ask for, printing "6.0" where the task wanted "6": all of them are correct thinking and a failed test. None of them means a student does not understand the problem.',
            'It is also the one thing that is genuinely worth practising before a 45-minute round, because it is invisible until it costs you.'
          ],
          right: [
            'The habit to build is to read the expected output as carefully as the question. What exactly does the task want printed, in what order, with what spacing, and what should happen when two things are equal? A student who asks those four questions before typing loses almost nothing to formatting.',
            'And when the task does not say what to do with ties, decide anyway, write it down, and be consistent. An arbitrary rule applied everywhere beats no rule applied differently each run.'
          ] },
        { kind: 'source', html: 'The two sorts, the seven pupils and both outputs are ours, run on 20 September 2026 to make the point. No challenge task is reproduced anywhere on this page.' }
      ]
    },
    {
      id: 'prepare', tint: 'plain', eyebrow: 'How to prepare',
      h2: 'Blocks or text, and the same four questions either way',
      lede: 'The two tracks look different and ask for the same discipline.',
      body: [
        { kind: 'table', caption: 'What to practise, by track', head: ['Track', 'What it uses', 'What to practise'], rows: [
          ['Block-based', 'A visual language in the browser, historically Blockly for the younger age groups', 'Loops with a counter, conditions inside loops, and reading a block program back before running it'],
          ['Text-based', 'Typed code; historically one of eleven languages Bebras supports, which covers those taught in UK schools', 'Input and output exactly as asked, string and number handling, and the boundary cases'],
          ['Both', '45 minutes, supervised, auto-marked', 'Working out what the expected output looks like before writing any code']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a student crossing from blocks to text, the honest advice is not to cross in the week of the round. Blocks are not a lesser track: a block program with a correct loop beats a typed program with a subtle bug, and the marker cannot tell how the answer was produced.',
            'The most useful single exercise, in either track, is to take a task description and write out the expected output by hand before writing any code. Most lost marks are decided in that first minute.'
          ],
          right: [
            'What not to do is drill speed. Forty-five minutes is not generous, but the students who run out of time are almost always the ones who started coding before they understood the output, not the ones who type slowly.',
            'If a student enjoys this round, the next step up is the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>, sat in school in December and January, where the programs get longer and the tests get nastier.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from a first loop to a program that survives a marker',
    lede: 'Where a student starts depends on what they can already write without help.',
    table: { caption: 'From blocks to text to tested code', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Ages 8 to 10', '1. Reliable blocks', 'Builds a loop with a counter and predicts what it prints'],
      ['Ages 10 to 12', '2. First typed code', 'Writes and fixes a twenty-line program without a template'],
      ['Ages 12 to 15', '3. Exact output', 'Produces output that matches a specification character for character'],
      ['Ages 15 to 18', '4. Own tests', 'Invents the inputs that would break the program, before anyone else does']
    ] },
    left: { h3: 'If the round is next week', ps: [
      'Practise reading task descriptions and writing the expected output by hand. Nothing else moves the needle in a week.',
      'Stay in the track the student is fluent in. Switching from blocks to text under time pressure loses more than it gains.'
    ] },
    right: { h3: 'If they are hooked', ps: [
      'Informatics olympiads are the next rung, and they reward exactly the habit this round teaches.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> shows every contest open to a UK student, month by month.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Programming courses by track and age',
    lede: 'Grouped by where a student is now, with every syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Block-based', sub: 'Ages 8 to 12', courses: [
        { code: 'OUC / BLK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Loops, conditions and variables in a visual language.' },
        { code: 'OUC / BLK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'From first blocks through games and apps.' },
        { code: 'OUC / BLK / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Real apps, still without typing a semicolon.' }
      ] },
      { num: 'II', h3: 'Crossing to text', sub: 'Ages 10 to 13', courses: [
        { code: 'OUC / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, taught patiently.' },
        { code: 'OUC / TXT / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that check whether a method is right.' },
        { code: 'OUC / TXT / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'From blocks to real code in a familiar world.' }
      ] },
      { num: 'III', h3: 'Text-based track', sub: 'Ages 13 to 18', courses: [
        { code: 'OUC / ADV / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Every core idea, with prediction before running.' },
        { code: 'OUC / ADV / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Sorting, searching and why ties have an order.' },
        { code: 'OUC / ADV / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correctness under a clock, against hidden tests.' }
      ] },
      { num: 'IV', h3: 'Alongside school', sub: 'Qualifications and beyond', courses: [
        { code: 'OUC / SCH / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Taught to the board the school uses.' },
        { code: 'OUC / SCH / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools and students working in Java.' },
        { code: 'OUC / SCH / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where the same discipline goes next.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly programming, taught with the marker in mind',
    lede: 'Lessons are live on video from India, where the clock runs five and a half hours ahead of Britain in winter and four and a half in summer. Times are agreed in UK time and kept.',
    slots: [
      { time: 'Early weekday evening', l: 'For students of primary and lower secondary age.' },
      { time: 'Later weekday evening', l: 'The usual slot for GCSE-age students and above.' },
      { time: 'Weekend morning', l: 'For a long session on one problem, start to finish.' }
    ],
    cells: [
      { h3: 'Output read first', p: 'Every task begins by writing down what the program should print, before any code is typed.' },
      { h3: 'Both tracks taught', p: 'Block-based and typed code, and we do not push a student out of the one they are fluent in.' },
      { h3: 'Groups of five to ten', p: 'Small enough that every program gets looked at, large enough for two approaches to collide.' },
      { h3: 'Our own problems', p: 'Written by us. No Bebras or challenge task is reproduced in a lesson.' },
      { h3: 'One to one on request', p: 'For a student far ahead of their year, or one with a particular gap.' },
      { h3: 'Nothing promised', p: 'We cannot get a student invited to this round, and we do not claim otherwise.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, built outside any competition. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from our Google profile, in the families\' own words.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same for every country outside India. Nothing to join and no term to sign.',
    free: ['A full lesson on a real task', 'An honest read on the right track', 'No card details taken'],
    group: ['Five to ten students at one level', 'The same teacher weekly', 'Code read line by line', 'A certificate at the end'],
    one: ['One student with one teacher', 'Aimed at a specific weakness', 'For students far ahead of their year']
  },

  faq: {
    eyebrow: 'Coding challenge questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'Is the Oxford University Computing Challenge still running?', a: 'We do not say, because we could not read the OUCC\'s own pages on 20 September 2026. What UK Bebras currently publishes is a follow-on round called the Raspberry Pi Foundation Coding Challenge, open to schools and students who took the previous UK Bebras Challenge.' },
      { q: 'How does my child get invited?', a: 'By sitting the UK Bebras Challenge at school in November. UK Bebras says only schools and students who took part in the previous challenge can enter the coding round, and home-educated students are contacted directly by the UK Bebras team.' },
      { q: 'What age is it for?', a: 'UK Bebras describes it as designed to be accessible to all students aged 10 and over. Historically the Raspberry Pi Foundation ran the OUCC for students aged 10 to 18 in four age groups.' },
      { q: 'What programming language is used?', a: 'There are two tracks, block-based and text-based, each with two difficulty levels. Historically the two younger OUCC cohorts used Blockly and the older two could use one of the eleven programming languages Bebras supports, which covers those taught in UK schools.' },
      { q: 'How long is the challenge?', a: 'UK Bebras describes a 45-minute coding challenge, supervised by a school coordinator, with instructions sent to teachers during the challenge through the Bebras emailing system.' },
      { q: 'Why did my child\'s correct program fail?', a: 'Usually formatting rather than logic. An automatic marker compares output as text, so a trailing space, a capital letter, an extra full stop or a different order for tied entries all count as wrong even when the thinking is right.' },
      { q: 'What is a stable sort and why does it matter?', a: 'A sort is stable if items with equal keys stay in the order they arrived. Two sorts of the same scores can both be correct and produce different lines, and a marker comparing text will accept only one. Sorting by score and then by name removes the ambiguity.' },
      { q: 'How should a student prepare?', a: 'By writing the expected output by hand before coding, practising exact input and output, and staying in whichever track they are fluent in. Speed drilling helps far less than reading the task properly.' },
      { q: 'Do you reproduce challenge tasks?', a: 'No. Our problems are written by us in the same territory, and the organisers publish their own past material.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, with no joining fee and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young programmers',
    lede: 'The round before this one, the olympiad after it, and the whole year in one table.',
    items: [
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'The November challenge that is the only way in.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'The next rung, sat in school in December and January.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/uk-gcse-computer-science-tutoring', label: 'GCSE Computer Science tutoring', p: 'The qualification most of these students are heading for.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'What to ask any provider before you pay.' }
    ]
  },

  start: {
    h2: 'Book a free programming lesson',
    lede: 'Tell us the age and whether your child works in blocks or typed code. The free lesson is a real task, and afterwards we say plainly what the programming looked like.',
    readFirst: 'Prefer reading? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is free from a UK mobile and reaches us quickest. Our number is an Indian one, which we say on every page, and there is no office in Britain.',
    formNote: 'No card, no obligation. One reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'Programming', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms and data structures' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the code; Bebras opens the door'
  },

  personalityCss: `
.ag-root.ag-ouc .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-ouc .ag-capsule { border-left-width: 3px; padding-left: 1.3rem; }
.ag-root.ag-ouc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ouc .ag-table caption { text-align: left; font-weight: 700; font-size: 0.95em; }
.ag-root.ag-ouc .ag-table td:last-child { font-style: italic; }
.ag-root.ag-ouc .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-ouc .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-ouc .ag-slots { gap: 1.4rem; }
`,

  mustMention: ['Raspberry Pi Foundation Coding Challenge', 'top 10% best results', 'Ben Dev Gus Amara Cara Esme Finn', 'Gus Dev Ben Esme Cara Amara Finn', 'aged 10+', 'Over 20,000 Bebras participants', 'Blockly']
};
