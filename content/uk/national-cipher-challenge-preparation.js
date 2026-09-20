'use strict';
// National Cipher Challenge preparation (ag- competition spoke, UK cluster Phase 2).
// Facts read at cipherchallenge.org on 20 September 2026:
//  - Run from the University of Southampton; the 2026-27 competition runs "September 2026 - January
//    2027", with "Prizegiving at Bletchley Park on March 10th"; registration opened 24 September.
//  - "The competition is open to anyone but only individuals in full time school level education in the
//    UK and Channel Islands qualify for prizes."
//  - "Entries may be received from individuals or from teams. The teams may be of any size, but we
//    reserve the right to restrict the number of team members listed on the leader board."
//  - Ten challenges, each in two parts, A and B.
//  - Scoring is on "the accuracy of your best submission for that challenge and the order in which we
//    receive the submissions", with accuracy measured by the Damerau-Levenshtein metric and time points
//    from a published schedule. "Accuracy is more important than speed."
//  - Tools: "You may use spreadsheets and text editors to help you tackle the challenges and any
//    software we provide on the Official BOSS Deciphering Tools page. You can also use any software that
//    you write yourself. You should not use deciphering tools you find elsewhere on the web and nor
//    should you use AI to decipher messages or to write software to do so. This can result in
//    disqualification."
//  - Gold and silver medals at the prizegiving, certificates for participants, and a teachers and alumni
//    leaderboard for entrants who do not qualify for prizes.
// Prize money is published in pounds and is not printed here under the one-currency rule.
// Spine: write your own tool, because the rules say so. Our own demonstration of 20 September 2026: a
// sentence we wrote, shifted seven places, gives ciphertext beginning "aol xbhspaf vm h jshzz". Its five
// commonest letters are L 15, H 15, A 13, V 11 and S 10, and a chi-squared comparison against English
// letter frequencies over all 26 shifts picks 7, the true shift, and recovers the sentence.
// No challenge text is reproduced; the organiser publishes its own archive.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'CIPHER', label: 'National Cipher Challenge', blurb: 'Ten challenges from September to January, and a rule that says write your own tools and do not ask an AI.' },
  slug: 'national-cipher-challenge-preparation',
  code: 'ncc',
  accent: '#3B1471',
  accentRationale: 'National Cipher Challenge: a very deep indigo-violet from the solver (11.18:1 on every paper tint), darker than the Kangaroo violet and bluer than the Perse magenta',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'National Cipher Challenge preparation',
  title: 'National Cipher Challenge Preparation | Ten Challenges, A and B',
  description: 'Preparing for the National Cipher Challenge: ten challenges from September to January, who can win prizes, how accuracy is scored and why you write your own tools.',
  ogDescription: 'The National Cipher Challenge tells entrants to write their own software and not to use AI. That rule is the whole point, and it makes this a programming competition.',
  twitterDescription: 'National Cipher Challenge preparation: ten challenges, your own tools, and no AI.',
  pageName: 'National Cipher Challenge Preparation',
  webPageDescription: 'Preparation guidance for the University of Southampton National Cipher Challenge, covering the ten challenges, who qualifies for prizes, how accuracy and speed are scored, and the rules on tools and AI.',
  courseDescription: 'Live online programming classes for school students who want to write their own cipher-breaking tools for the National Cipher Challenge.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'National Cipher Challenge',
  navLinks: [
    { href: '#challenge', label: 'The challenge' },
    { href: '#tools', label: 'Write your own tool' },
    { href: '#scoring', label: 'Accuracy and speed' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; School-level education &middot; September 2026 to January 2027',
  h1: 'National Cipher Challenge preparation',
  lede: 'Most competitions tell you what you may not bring into the room. The National Cipher Challenge does something rarer: it tells you what to build. Entrants may use spreadsheets, text editors and the organiser\'s own tools, and "any software that you write yourself" &mdash; and they may not use deciphering tools found elsewhere online, or an AI to break a message or to write the software that breaks it. That single rule turns a puzzle competition into a programming one, and it is the reason this is such a rewarding way for a curious fourteen-year-old to spend an autumn term.',
  secondaryCta: { href: '#tools', label: 'See a first tool, written and run' },
  wa: 'Hello Modern Age Coders, my child is doing the National Cipher Challenge and I would like a free coding class.',
  heroNote: 'Quoted from the organiser with the date we read it &middot; No challenge text reproduced &middot; Nothing promised about a placing',
  spec: [
    ['Organiser', 'University of Southampton'],
    ['Runs', 'September 2026 to January 2027'],
    ['Challenges', 'Ten, each in parts A and B'],
    ['Prizes open to', 'School-level education, UK and Channel Islands'],
    ['Teams', 'Any size, or enter alone'],
    ['Scored on', 'Accuracy first, then order received'],
    ['AI', 'Not permitted, on pain of disqualification'],
    ['Prizegiving', 'Bletchley Park, 10 March']
  ],
  capsuleQ: 'In short',
  capsule: 'The National Cipher Challenge is run from the University of Southampton and runs from "September 2026 - January 2027", with the prizegiving "at Bletchley Park on March 10th". There are ten challenges, each in two parts, A and B. "The competition is open to anyone but only individuals in full time school level education in the UK and Channel Islands qualify for prizes", and "entries may be received from individuals or from teams", which "may be of any size". Scoring uses the accuracy of an entrant\'s strongest submission for a challenge and the order in which submissions arrive, with accuracy measured by the Damerau-Levenshtein metric, and the organiser states plainly that "accuracy is more important than speed". Entrants may write their own software and may not use online deciphering tools or AI. We teach the programming that makes your own tools possible. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a cipher breaker',
    lede: 'The competition is won by whoever can turn an idea into a working script the same evening.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'NCC / 01', title: 'Python from start to finish', note: 'The language almost every entrant uses: strings, counting, files and the loops that try every possibility.' },
      { course: 'python-ai-kids-masterclass', code: 'NCC / 02', title: 'Python and AI for kids', note: 'For a younger entrant meeting typed code for the first time this autumn.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'NCC / 03', title: 'Algorithms and data structures', note: 'For the later challenges, where a brute-force search has to be pruned before it finishes this century.' }
    ]
  },

  sections: [
    {
      id: 'challenge', tint: 'tint', eyebrow: 'The competition',
      h2: 'Ten challenges, two parts each, one autumn term',
      lede: 'Facts read at the organiser\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The National Cipher Challenge as its organiser describes it', head: ['Part', 'What the organiser says', 'What it means for an entrant'], rows: [
          ['Who runs it', 'The University of Southampton', 'An academic competition, not a commercial one'],
          ['When', '"September 2026 - January 2027"', 'A whole term, with challenges released across it'],
          ['How many', 'Ten challenges, each in two parts, A and B', 'Part B is the harder half of each pair'],
          ['Who can enter', '"The competition is open to anyone but only individuals in full time school level education in the UK and Channel Islands qualify for prizes"', 'Anyone may play; prizes are for school-age entrants here'],
          ['Alone or together', '"Entries may be received from individuals or from teams. The teams may be of any size"', 'A club, a class or one pupil at a kitchen table'],
          ['Adults', 'A teachers and alumni leaderboard exists for entrants who do not qualify for prizes', 'Parents and teachers can play without muddying the school table'],
          ['The end', '"Prizegiving at Bletchley Park on March 10th"', 'Gold and silver medals, with certificates for participants']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A whole term is the feature. Unlike almost everything else on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>, this is not an afternoon in a hall: challenges arrive through the autumn, and a pupil comes back to them across weeks. That suits a different sort of learner entirely, including several who do badly under a clock.',
            'It also means a school club has something to do every week from September, which is why so many computing departments build a lunchtime club around it.'
          ],
          right: [
            'Teams of any size is worth reading twice. A pupil can enter alone, with a friend, or as part of a whole class, and the organiser only reserves the right to limit how many names appear on the leaderboard. Nobody has to find three other people first.',
            'The prize fund is published by the organiser in pounds and we do not print it, as we do not print prices in two currencies anywhere. It is on the organiser\'s own site.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cipherchallenge.org/" rel="noopener" target="_blank">the National Cipher Challenge</a> and its <a class="ag-inline-link" href="https://www.cipherchallenge.org/rules/" rel="noopener" target="_blank">rules</a>, read 20 September 2026. Modern Age Coders is not connected with the University of Southampton or the challenge.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'The method',
      h2: 'Write your own tool, because the rules say so',
      lede: 'The tools rule is the most interesting sentence any UK competition publishes, and it deserves quoting in full.',
      body: [
        { kind: 'p', html: '"You may use spreadsheets and text editors to help you tackle the challenges and any software we provide on the Official BOSS Deciphering Tools page. You can also use any software that you write yourself. You should not use deciphering tools you find elsewhere on the web and nor should you use AI to decipher messages or to write software to do so. This can result in disqualification."' },
        { kind: 'two', mt: true,
          left: [
            'Read it as an instruction rather than a restriction. The organiser has drawn a line around exactly one kind of help: the kind you built. That makes the National Cipher Challenge, in practice, a programming competition with a historical costume on, and it is the only UK competition we know of that states an AI rule this plainly.',
            'It is also a rule with teeth, since it names disqualification. A pupil who pastes a message into a chatbot has not taken a shortcut; they have left the competition.'
          ],
          right: [
            'The good news is that a first useful tool is about fifteen lines long. Counting letters is enough to break the earliest challenges, and a pupil who writes that counter themselves has learned more in an evening than a term of watching videos would give them.',
            'Below is one we wrote to show what "your own tool" actually means at the start. Nothing here comes from a past challenge: the sentence is ours.'
          ] },
        { kind: 'table', caption: 'Our run of 20 September 2026: a sentence we wrote, shifted seven places, and a counter', head: ['Step', 'What we did', 'What came back'], rows: [
          ['1. Make a message', 'Took a sentence of our own and shifted every letter seven places along the alphabet', 'The ciphertext begins "aol xbhspaf vm h jshzz"'],
          ['2. Count the letters', 'Fifteen lines of Python counting how often each letter appears', 'L 15, H 15, A 13, V 11, S 10'],
          ['3. Compare with English', 'Scored all 26 possible shifts against ordinary English letter frequencies', 'Shift 7 fits far better than any other'],
          ['4. Undo it', 'Shifted back by seven', '"the quality of a class is decided by the teacher in the room"']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why counting works', p: 'A shift cipher moves every letter by the same amount, so the shape of the letter frequencies survives. E is still the commonest letter; it is just wearing a different hat.' },
          { h3: 'Why the computer helps', p: 'Trying 26 shifts by hand is twenty minutes of tedium. Trying them in code takes a second and can be reused on every message for the rest of the competition.' },
          { h3: 'Where it stops working', p: 'The later challenges use ciphers that flatten the frequencies deliberately. That is the point at which an entrant has to learn something new, which is the whole design.' }
        ] },
        { kind: 'source', html: 'The sentence, the shift and the letter counts are ours, produced on 20 September 2026. No challenge text is reproduced anywhere on this page; the organiser publishes its own archive of past challenges.' }
      ]
    },
    {
      id: 'scoring', tint: 'plain', eyebrow: 'How it is scored',
      h2: 'Nearly right still counts, and the organiser says so',
      lede: 'The scoring rules are unusual, and understanding them changes what an entrant does at eleven o\'clock at night.',
      body: [
        { kind: 'table', caption: 'What earns points, from the organiser\'s rules', head: ['Element', 'How it works', 'What follows'], rows: [
          ['Accuracy', 'Points reflect "the accuracy of your best submission for that challenge", measured by the Damerau-Levenshtein metric', 'A decryption with a few wrong letters still scores; it is not all or nothing'],
          ['Speed', '"Time points will be based on a schedule published alongside the challenge"', 'Early submissions earn more, but not at any cost'],
          ['The trade-off', '"Accuracy is more important than speed"', 'Do not send a half-broken message to beat a clock'],
          ['Multiple attempts', 'The score reflects the strongest attempt an entrant sends for that challenge', 'Send an improvement when you have one'],
          ['Recognition', 'Gold and silver medals at Bletchley Park, certificates for participants, a leaderboard for schools', 'Most entrants finish with a certificate and a new skill']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The accuracy metric is the part worth explaining to a pupil. It measures how far your text is from the true plaintext, counting insertions, deletions, substitutions and swapped neighbours. A message that is ninety per cent deciphered scores far more than nothing, which means an entrant who is stuck should still submit what they have.',
            'That is the opposite of the instinct most pupils bring from school exams, where an incomplete answer feels like an admission. Here it is a score.'
          ],
          right: [
            'The rule that accuracy beats speed also settles the commonest argument in a school club: whether to submit now or check first. Check first. The schedule rewards being early, and the organiser has said in as many words which matters more.',
            'For a pupil who enjoys the code more than the ciphers, the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> in December and January is a natural companion, and it runs in the same weeks.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from counting letters to breaking something hard',
    lede: 'Each rung is a tool the entrant has written and can run again next week.',
    table: { caption: 'The toolkit, built one challenge at a time', head: ['Stage', 'Rung', 'The tool at the end of it'], rows: [
      ['First week', '1. Count and shift', 'A letter counter and a script that tries all 26 shifts'],
      ['Early autumn', '2. Substitution', 'A frequency table, a guessing loop and a way to print partial decryptions'],
      ['Mid autumn', '3. Transposition', 'Tools that rearrange rather than replace, and a way to test a guess quickly'],
      ['Late autumn', '4. Search that stops early', 'A program that prunes the possibilities instead of trying all of them']
    ] },
    left: { h3: 'If the term has started', ps: [
      'Write the letter counter tonight. Everything else in the competition is built on top of it, and it is fifteen lines.',
      'Submit partial answers. The accuracy metric means a nearly-right decryption scores, and waiting for perfection scores nothing.'
    ] },
    right: { h3: 'What this leads to', ps: [
      'Every tool an entrant writes is ordinary programming: counting, searching, testing. It is the most thoroughly disguised introduction to real software we know.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists everything else open to a UK student this year.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for an entrant who wants to build the tools',
    lede: 'Sorted by what a student can already write alone, with the syllabus on every card.',
    bands: [
      { num: 'I', h3: 'First programs', sub: 'Ages 9 to 13', courses: [
        { code: 'NCC / A / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, taught patiently.' },
        { code: 'NCC / A / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting, patterns and why a method works.' },
        { code: 'NCC / A / 03', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'The logic, before the typing.' }
      ] },
      { num: 'II', h3: 'Real Python', sub: 'Ages 13 to 18', courses: [
        { code: 'NCC / B / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Strings, files, loops and functions, to fluency.' },
        { code: 'NCC / B / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching and pruning, for the later challenges.' },
        { code: 'NCC / B / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Writing correct code quickly, under pressure.' }
      ] },
      { num: 'III', h3: 'Alongside school', sub: 'Qualifications', courses: [
        { code: 'NCC / C / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Taught to the board the school uses.' },
        { code: 'NCC / C / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge A Level 9618', blurb: 'For international and independent schools.' },
        { code: 'NCC / C / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For students whose school teaches Java.' }
      ] },
      { num: 'IV', h3: 'Further afield', sub: 'Where the curiosity goes next', courses: [
        { code: 'NCC / D / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Understanding the tools the rules forbid here.' },
        { code: 'NCC / D / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Frequencies and distributions, on real data.' },
        { code: 'NCC / D / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'For students who would rather build than break.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly Python, aimed at tools a student can keep',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time fixed in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot during the autumn term.' },
      { time: 'Weekend morning', l: 'For a longer session building one tool properly.' },
      { time: 'Half term', l: 'When several challenges are open at once.' }
    ],
    cells: [
      { h3: 'Tools, not exercises', p: 'Every lesson leaves the student with a script they can run again on the next challenge.' },
      { h3: 'We do not touch the challenges', p: 'We teach programming. We do not decipher a live challenge message or help with one, and we say so if asked.' },
      { h3: 'Five to ten students', p: 'Enough for two approaches to be compared, small enough for every script to be read.' },
      { h3: 'Our own examples', p: 'Written by us. The organiser publishes an archive of past challenges for the real thing.' },
      { h3: 'One to one when useful', p: 'For a student well ahead of their year, or one building something specific.' },
      { h3: 'No AI shortcuts', p: 'The competition forbids AI for this work, and we teach accordingly.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left by families on Google, printed unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars for families outside India, with nothing to pay to register and no minimum term.',
    free: ['A full lesson building something', 'A straight read on the level', 'No card details taken'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Code read line by line', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around what they are building', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'National Cipher Challenge questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'Who runs the National Cipher Challenge?', a: 'The University of Southampton. The 2026-27 competition runs from September 2026 to January 2027, with prizegiving at Bletchley Park on 10 March.' },
      { q: 'Who can enter and who can win?', a: 'The organiser says the competition is open to anyone, but only individuals in full-time school-level education in the UK and Channel Islands qualify for prizes. There is a separate leaderboard for teachers and alumni.' },
      { q: 'Can my child enter alone?', a: 'Yes. Entries may come from individuals or from teams of any size, and the organiser only reserves the right to limit how many team members appear on the leaderboard.' },
      { q: 'How many challenges are there?', a: 'Ten, each in two parts, A and B, released across the autumn term rather than sat in a single session.' },
      { q: 'Is AI allowed?', a: 'No. The rules say plainly that you should not use deciphering tools found elsewhere on the web, nor use AI to decipher messages or to write software to do so, and that this can result in disqualification.' },
      { q: 'What tools are allowed?', a: 'Spreadsheets, text editors, the software on the organiser\'s Official BOSS Deciphering Tools page, and any software the entrant writes themselves.' },
      { q: 'How is it scored?', a: 'On the accuracy of an entrant\'s strongest submission for each challenge and the order in which submissions are received. Accuracy is measured with the Damerau-Levenshtein metric and time points come from a published schedule, and the organiser states that accuracy is more important than speed.' },
      { q: 'Should we submit a partial decryption?', a: 'Yes. Because accuracy is measured as a distance from the true text rather than as right or wrong, a message that is mostly deciphered still scores.' },
      { q: 'What is the first tool to build?', a: 'A letter counter. Count how often each letter appears in the ciphertext, compare with ordinary English frequencies, and try all 26 shifts. It is about fifteen lines of Python and everything later is built on top of it.' },
      { q: 'Do you help with the live challenges?', a: 'No. We teach programming, and we do not decipher or assist with a live challenge message. Doing so would be against the competition\'s rules and against how we teach.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other contests in the same term',
    lede: 'What runs alongside the cipher challenge, and where the whole year is set out.',
    items: [
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Sat in school in December and January.' },
      { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge', p: 'Teams, hidden tests, January and March.' },
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'The November challenge with no programming in it.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/uk-gcse-computer-science-tutoring', label: 'GCSE Computer Science tutoring', p: 'The qualification most entrants are working towards.' }
    ]
  },

  start: {
    h2: 'Book a free coding lesson',
    lede: 'Tell us the year group and whether your child has written Python before. The free lesson builds something small and real, and we say afterwards what we saw.',
    readFirst: 'Rather read first? Each syllabus is on its own <a class="ag-inline-link" href="/courses">course page</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is free from a UK mobile and usually the fastest way to reach us. Our number is Indian, which we say on every page, and there is no British office.',
    formNote: 'No card, no obligation. One reply to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Coding contests', links: [
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge' },
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Programming', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms and data structures' },
        { href: '/courses/gcse-computer-science-course', label: 'GCSE Computer Science' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the tools; the messages are yours to break'
  },

  personalityCss: `
.ag-root.ag-ncc .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ncc .ag-capsule { border-left-width: 6px; border-radius: 0 3px 3px 0; }
.ag-root.ag-ncc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ncc .ag-table caption { text-align: left; font-weight: 700; font-size: 0.96em; }
.ag-root.ag-ncc .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ncc .ag-spec dt { letter-spacing: 0.115em; }
.ag-root.ag-ncc .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-ncc .ag-slots { gap: 1.45rem; }
`,

  mustMention: ['any software that you write yourself', 'can result in disqualification', 'Bletchley Park on March 10th', 'Damerau-Levenshtein', 'accuracy is more important than speed', 'aol xbhspaf', 'UK and Channel Islands']
};
