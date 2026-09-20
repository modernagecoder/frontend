'use strict';
// Primary Maths Challenge practice (ag- competition spoke, UK cluster Phase 2).
// Organiser facts read at primarymathschallenge.org.uk on 20 September 2026:
// "The Primary Mathematics Challenge will be held between 9 - 20 November 2026"; the organiser is the
// Primary Mathematics Challenge at Loughborough University Science and Enterprise Park, under the
// Association for Mathematics in Education, with registration at members.m-a.org.uk; "The PMC paper has
// 25 questions. 20 of these are multiple choice. The questions are graded; starting with easy ones and
// graduating to harder questions. The final five require an answer where no choices are given"; "45
// minutes to answer the questions"; "The paper is marked automatically, and teachers can then access
// pupils answers"; "The Bonus Round is an invite-only opportunity for those pupils who did well in the
// first round"; the cut-off score "will be in December" and the Bonus Round takes place in February;
// each pack holds ten question papers and 1 gold, 2 silver and 3 bronze certificates plus an electronic
// "Took the Challenge" certificate; "The Primary Mathematics Challenge is aimed at pupils aged 9 - 11,
// children must be in Primary school", with younger or older pupils at the school's discretion; papers
// are marked in school and results returned electronically.
// Spine: the shape of the paper is the strategy. 25 questions in 45 minutes is 108 seconds each if the
// time is spread evenly, but only 20 of them offer choices and the five that do not are the graded-hard
// ones at the end. Our arithmetic, stated as arithmetic: twenty questions at 40 seconds each banks 1,900
// seconds, 31.7 minutes, for the last five, which is 380 seconds each. No claim is made about how fast
// any child works; the page shows the budget and lets a family choose a pace.
// Nothing is said about negative marking or the number of options per question: the organiser does not
// publish either on the pages we could read, so no guessing advice is given.
// No PMC question is reproduced. Practice in our classes is written fresh in the same spirit.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'PMC', label: 'Primary Maths Challenge', blurb: 'Twenty-five questions in forty-five minutes, and the five at the end that offer no choices.' },
  slug: 'primary-maths-challenge-practice',
  code: 'pmc',
  accent: '#791558',
  accentRationale: 'Primary Maths Challenge: a deep plum from the solver (8.27:1 on every paper tint), well clear of the London red, the NEA violet and the Harrow magenta',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Primary Maths Challenge practice',
  title: 'Primary Maths Challenge Practice | PMC 2026, Ages 9 to 11',
  description: 'How to prepare for the Primary Maths Challenge: the 25-question paper, the five questions with no choices, the November 2026 dates and the Bonus Round.',
  ogDescription: 'The PMC paper is 25 questions in 45 minutes, and only 20 of them offer choices. What that shape means for a nine to eleven year old preparing for November.',
  twitterDescription: 'Primary Maths Challenge preparation: the paper, the dates, the Bonus Round, and what to practise.',
  pageName: 'Primary Maths Challenge Practice',
  webPageDescription: 'Preparation guidance for the Primary Mathematics Challenge for pupils aged 9 to 11, based on what the organiser publishes about the paper, the timing, the Bonus Round and the awards.',
  courseDescription: 'Live online primary mathematics classes that build the number fluency and unfamiliar problem solving the Primary Maths Challenge asks for, without copying any past paper.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Primary Maths Challenge',
  navLinks: [
    { href: '#paper', label: 'The paper' },
    { href: '#budget', label: 'The 45 minutes' },
    { href: '#bonus', label: 'Bonus Round' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 9 to 11 &middot; 9 to 20 November 2026',
  h1: 'Primary Maths Challenge practice',
  lede: 'Most children meet the Primary Maths Challenge as a surprise: a paper handed out one November morning, twenty-five questions, forty-five minutes, and a teacher saying to have a go. It is a generous competition, run by mathematics teachers for nine to eleven year olds, and nothing about it needs a tutor. But it has a shape worth understanding before the morning arrives, because twenty of its questions offer answers to choose from and the last five do not, and those five are the hardest on the paper by design. A child who knows that is not being coached. They are being told what the room looks like before they walk into it.',
  secondaryCta: { href: '#budget', label: 'See the time budget' },
  wa: 'Hello Modern Age Coders, my child is doing the Primary Maths Challenge and I would like a free maths class.',
  heroNote: 'Organiser facts, dated &middot; No past paper reproduced &middot; No promise about any score',
  spec: [
    ['Organiser', 'The Primary Mathematics Challenge'],
    ['For', 'Pupils aged 9 to 11'],
    ['Held', '9 to 20 November 2026'],
    ['Paper', '25 questions in 45 minutes'],
    ['Choices given', 'On the first 20 only'],
    ['Marked', 'In school, returned electronically'],
    ['Next round', 'Bonus Round in February'],
    ['Entered by', 'The school, not by us']
  ],
  capsuleQ: 'In short',
  capsule: 'The Primary Mathematics Challenge is sat in school between 9 and 20 November 2026 by pupils aged 9 to 11. The organiser describes a paper of 25 questions with 45 minutes to answer them: "20 of these are multiple choice. The questions are graded; starting with easy ones and graduating to harder questions. The final five require an answer where no choices are given." Papers are marked in school and the results returned electronically, each pack carries one gold, two silver and three bronze certificates, and pupils who do well are invited to a Bonus Round in February, with the cut-off score announced in December. Schools enter; families cannot enter a child directly, and neither can we. What we teach is the arithmetic and problem solving the paper draws on, in live online classes for ages 6 upwards. A first class is free, a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a Year 5 or Year 6 mathematician',
    lede: 'Pick by how settled the arithmetic is, not by how near November is.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'PMC / 01', title: 'Primary maths, Years 1 to 5', note: 'The whole primary ladder, taught properly, for a child whose number work still needs a pencil.' },
      { course: 'mental-maths-mastery-kids', code: 'PMC / 02', title: 'Mental maths for kids', note: 'Number sense rather than tricks, which is what buys thinking time in a forty-five minute paper.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'PMC / 03', title: 'Olympiad and competition maths', note: 'For a child who finds the school paper easy and wants problems that fight back.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The paper',
      h2: 'Twenty-five questions, and only twenty of them offer a way in',
      lede: 'Everything here is quoted or summarised from the organiser\'s own pages, read on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Primary Maths Challenge as its organiser describes it', head: ['Part', 'What the organiser says', 'What it means on the day'], rows: [
          ['Who it is for', '"aimed at pupils aged 9 - 11, children must be in Primary school", with younger or older pupils entered at the school\'s discretion', 'Year 5 and Year 6 in England and Wales, and the equivalent primary years elsewhere'],
          ['When', 'Held between 9 and 20 November 2026', 'A window, not a fixed morning: the school picks its slot'],
          ['The paper', '25 questions, graded from easy to hard, 45 minutes to answer them', 'Roughly 108 seconds a question if the time were spread evenly, which it should not be'],
          ['The first twenty', '"20 of these are multiple choice"', 'Answers are on the page; the work is choosing between them'],
          ['The last five', '"The final five require an answer where no choices are given"', 'The hardest questions, with nothing to eliminate and nothing to recognise'],
          ['Marking', 'Marked in school, "the paper is marked automatically, and teachers can then access pupils answers"', 'Results go back to the organiser electronically'],
          ['Certificates', 'Each pack of ten papers holds 1 gold, 2 silver and 3 bronze certificates, with a "Took the Challenge" certificate available electronically', 'Six of ten children in a pack take something home']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Notice what is not in that table. The organiser does not publish, on the pages we could read, how many options each multiple-choice question offers or whether a wrong answer costs anything. So this page gives no advice about guessing. Anyone who tells you the odds of a guess on the PMC is working from an assumption, and an assumption about marking is the kind that quietly teaches a child the wrong habit.',
            'What is in the table is enough to prepare well. Twenty-five questions, graded, forty-five minutes, five of them open at the end.'
          ],
          right: [
            'It is also worth saying what the challenge is not. It is not an entrance exam, it does not feed into secondary school admissions, and no school we know of uses it to set a child. It is a paper handed to children who like maths, in a subject where the pleasant surprises tend to come from being allowed to find something hard.',
            'The packs of ten are a clue to the spirit of it: most schools enter a handful of children, not a year group.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.primarymathschallenge.org.uk/" rel="noopener" target="_blank">Primary Mathematics Challenge</a>, its <a class="ag-inline-link" href="https://www.primarymathschallenge.org.uk/about-the-pmc/" rel="noopener" target="_blank">about page</a> and its <a class="ag-inline-link" href="https://www.primarymathschallenge.org.uk/pmc-faqs/" rel="noopener" target="_blank">FAQs</a>, read 20 September 2026. Modern Age Coders is not connected with the Primary Mathematics Challenge or the Association for Mathematics in Education.' }
      ]
    },
    {
      id: 'budget', tint: 'deep', eyebrow: 'The method',
      h2: 'Forty-five minutes is a budget, and it is not spent evenly',
      lede: 'This section is arithmetic on the organiser\'s published numbers. It makes no claim about how quickly any particular child works.',
      body: [
        { kind: 'p', html: 'Twenty-five questions and forty-five minutes come to 108 seconds a question if a child spreads the time evenly. Almost nobody should. The questions are graded from easy to hard, and the five hardest are the five with no choices, which are also the five a child cannot shortcut by recognising an answer. So the interesting question is how much time the first twenty can bank for the last five, and that is a sum a ten-year-old can do.' },
        { kind: 'table', caption: 'Our arithmetic: what the first twenty questions bank for the last five', head: ['Pace on the first twenty', 'Time that leaves', 'Per question on the last five'], rows: [
          ['30 seconds each', '35.0 minutes', '7 minutes each'],
          ['40 seconds each', '31.7 minutes', '6 minutes and 20 seconds each'],
          ['50 seconds each', '28.3 minutes', '5 minutes and 40 seconds each'],
          ['108 seconds each, the even split', '9.0 minutes', '1 minute and 48 seconds each']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The bottom row is what happens without a plan, and it is the single biggest difference between two children of the same ability. Spread the time evenly and the hardest five get under two minutes apiece. Move briskly through the first twenty, which are graded to be the easier ones, and the same child arrives at those five with half an hour in hand.',
            'This is not a trick and it is not coaching. It is the reason an experienced teacher tells a class to do the ones they can do first. Putting numbers on it makes it concrete enough for a child to feel.'
          ],
          right: [
            'The practical version for a ten-year-old is three sentences. Go through once and answer everything you are sure of. Do not stop to be certain on the easy ones. Then spend what is left on the end of the paper, where there is nothing to choose from and the only way through is to work it out.',
            'The counterpart at home is arithmetic that does not need paper. A child who computes 25 per cent of 48 in their head has bought themselves forty seconds; a child who sets it out in columns has spent them.'
          ] },
        { kind: 'source', html: 'The pace figures are ours, computed from the 25 questions and 45 minutes the organiser publishes. They describe a budget, not a child.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'What to practise',
      h2: 'Fluency, then unfamiliar shapes, then the end of the paper',
      lede: 'In that order, and for about twenty minutes a week rather than an hour the night before.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Recall, not calculation', p: 'Tables to twelve, doubles and halves, fraction and decimal equivalents, ten and twenty-five per cent of round numbers. These should arrive, not be worked out.' },
          { h3: '2. Questions in disguise', p: 'The same idea dressed differently each week: a sharing problem as a recipe, an area problem as a patio, a sequence hidden in a story about stairs.' },
          { h3: '3. Answers with no options', p: 'Practice where nothing is offered to choose from, so a child gets used to producing a number from nothing and checking it themselves.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'That third habit is the one most preparation skips, because multiple-choice practice is easier to set and easier to mark. It is also the habit the last five questions of the paper are built to test. A child who has only ever chosen between four printed numbers has had no practice at the part of the paper that separates the top of the room.',
            'Checking is part of it. If a child can say why an answer is about the right size before writing it, they catch the slips that cost more marks than any missing method.'
          ],
          right: [
            'We write our own practice problems in the spirit of the challenge, and we do not reproduce PMC questions. The organiser sells its own past papers and practice material, which is the proper place to meet the real style, and the money goes to the people who write it.',
            'If a child finds the whole thing enjoyable rather than stressful, the useful next step is not more PMC practice. It is harder mathematics of any kind: the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> has what comes after primary school.'
          ] }
      ]
    },
    {
      id: 'bonus', tint: 'tint', eyebrow: 'After November',
      h2: 'The Bonus Round, and what a certificate is worth',
      lede: 'Two things happen after the paper: a cut-off is published, and most children find out they are better at this than they thought.',
      body: [
        { kind: 'table', caption: 'What follows the November challenge', head: ['Stage', 'When', 'What the organiser says'], rows: [
          ['Cut-off announced', 'December', 'The score that qualifies for the Bonus Round is set after the papers are in'],
          ['Bonus Round', 'February', '"an invite-only opportunity for those pupils who did well in the first round, to extend and challenge their maths skills"'],
          ['Certificates', 'With the pack', 'One gold, two silver and three bronze per pack of ten, plus an electronic certificate for taking part'],
          ['Bonus Round awards', 'After February', 'Certificates for participants, with stickers from the Mathematics Association for award winners']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Because the cut-off is set after the event, no one can tell a family in October what score will qualify. Anyone who does is guessing, and a target invented in October is a good way to make a child anxious about a paper meant to be enjoyable.',
            'The honest thing to say to a nine-year-old is that the Bonus Round exists, that it is an invitation rather than a prize, and that the February paper is there to be interesting rather than to rank anyone again.'
          ],
          right: [
            'A bronze certificate from a pack of ten is not a consolation. It means a child was in the top six of the group their school chose to enter, and those groups are usually the children who already like maths.',
            'The one thing worth watching for afterwards is the child who says the last five were the good bit. That is the child to point at harder problems, whatever their score was.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from tables to the end of the paper',
    lede: 'Where a child starts depends on their arithmetic, not on which year they are in.',
    table: { caption: 'From secure number work to questions with no options', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 3 to 4', '1. Recall', 'Tables and number bonds arrive without counting or writing'],
      ['Year 4 to 5', '2. Methods', 'Multiplication, division and fractions come out right when the numbers are awkward'],
      ['Year 5', '3. Unfamiliar shapes', 'Reads a wordy question and can say what kind of maths it is before starting'],
      ['Year 5 to 6', '4. Open answers', 'Produces and checks a number with nothing offered to choose from']
    ] },
    left: { h3: 'If November is close', ps: [
      'Two habits are worth more than any amount of content in the last month: answer what you can quickly, and practise questions that offer no choices.',
      'Nothing about a low score in November means a child is not good at mathematics. The paper is graded to be hard at the end on purpose.'
    ] },
    right: { h3: 'What comes next', ps: [
      'After primary school the UKMT Junior Mathematical Challenge is the usual next step, and the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lays out the whole ladder.',
      'Children who like the puzzle side often take to programming quickly, which is what <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> is for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths and coding courses for primary-age children',
    lede: 'Grouped by what a child needs next, with the syllabus behind every card.',
    bands: [
      { num: 'I', h3: 'Number and fluency', sub: 'The ground the paper stands on', courses: [
        { code: 'PMC / NUM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Every primary topic, taught until it is automatic.' },
        { code: 'PMC / NUM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense, so calculation stops costing time.' },
        { code: 'PMC / NUM / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating with none.' },
        { code: 'PMC / NUM / 04', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for the arithmetic underneath.' }
      ] },
      { num: 'II', h3: 'Problem solving', sub: 'Where competitions actually live', courses: [
        { code: 'PMC / SOLVE / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems that do not announce their method.' },
        { code: 'PMC / SOLVE / 02', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'The same upper primary content, under time pressure.' },
        { code: 'PMC / SOLVE / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'For a Year 6 child already working beyond primary.' }
      ] },
      { num: 'III', h3: 'Maths with a computer', sub: 'For children who like to build', courses: [
        { code: 'PMC / CODE / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way of seeing why a method works.' },
        { code: 'PMC / CODE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first language, built on the same logic.' },
        { code: 'PMC / CODE / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Games, apps and a first look at AI.' }
      ] },
      { num: 'IV', h3: 'Further on', sub: 'When primary is no longer enough', courses: [
        { code: 'PMC / NEXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code once the ideas are comfortable.' },
        { code: 'PMC / NEXT / 02', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'For a younger sibling starting from the beginning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short, weekly, and at an hour a ten-year-old can still concentrate in',
    lede: 'Teaching is live on video from India, which runs five and a half hours ahead of the UK in winter and four and a half in summer. Primary children take an early evening slot and never a late one.',
    slots: [
      { time: 'Early weekday evening', l: 'Straight after school, before the day runs out.' },
      { time: 'Weekend morning', l: 'For families who keep weeknights clear.' },
      { time: 'Half term and holidays', l: 'Shorter sessions, more often, while school is out.' }
    ],
    cells: [
      { h3: 'The same teacher weekly', p: 'A child\'s mistakes only get fixed by someone who has seen them before.' },
      { h3: 'Our own problems', p: 'Practice is written by us in the spirit of the challenge. No PMC paper is copied.' },
      { h3: 'Five to ten children', p: 'Enough for a child to hear a better method than their own, few enough that nobody hides at the back.' },
      { h3: 'Parents told the truth', p: 'A short, plain note on what went well and what did not, rather than a score to put on the fridge.' },
      { h3: 'One to one when useful', p: 'For a child who freezes in a group, or has one specific gap to close.' },
      { h3: 'Nothing promised', p: 'No certificate, no Bonus Round place and no score is promised by us or anyone honest.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, most of them older than this, all of them once nine. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' own words, taken from our Google profile without edits.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same for every country outside India. Nothing to join and nothing to cancel.',
    free: ['A real lesson, taught not sold', 'A straight answer about where the maths is', 'No card details'],
    group: ['Five to ten children at one level', 'The same teacher every week', 'Work marked and talked through', 'A certificate at the end'],
    one: ['One child with one teacher', 'Built around a specific gap', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'Primary Maths Challenge questions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'When is the Primary Maths Challenge in 2026?', a: 'The organiser publishes a window rather than a single morning: the challenge is held between 9 and 20 November 2026, and each school chooses its slot inside that fortnight.' },
      { q: 'What age is the Primary Maths Challenge for?', a: 'The organiser says it is aimed at pupils aged 9 to 11 who must be in primary school, and that entering a younger or older pupil who would benefit is at the school\'s discretion.' },
      { q: 'How many questions are on the PMC paper?', a: 'Twenty-five, with 45 minutes to answer them. Twenty are multiple choice and, in the organiser\'s words, "the final five require an answer where no choices are given". The questions are graded from easy to hard.' },
      { q: 'How should a child use the 45 minutes?', a: 'Not evenly. Twenty-five questions in 45 minutes is 108 seconds each if the time is spread flat, which leaves under two minutes for the hardest five. Moving through the first twenty at around 40 seconds each banks nearly 32 minutes for the end of the paper.' },
      { q: 'Should my child guess on the multiple-choice questions?', a: 'We do not give guessing advice, because the organiser does not publish the number of options or whether a wrong answer costs anything on the pages we could read. Any rule of thumb you are offered about this rests on an assumption.' },
      { q: 'What is the Bonus Round?', a: 'An invite-only round in February for pupils who did well in November, described by the organiser as a chance "to extend and challenge their maths skills". The qualifying cut-off is announced in December, after the papers are marked.' },
      { q: 'Can I enter my child myself?', a: 'No. Schools order the packs and run the paper, each pack holding ten question papers. Neither a family nor a tutor can enter a child directly, and we have no role in the process.' },
      { q: 'Do you use real PMC papers in lessons?', a: 'No. We write our own problems in the same spirit, and point families to the organiser\'s own material for the real thing.' },
      { q: 'What do classes cost?', a: 'The first is free. A place in a group is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to join.' },
      { q: 'When are lessons, in UK time?', a: 'A weekly slot is agreed after the free lesson, and for primary children we keep to early evening. Our teachers work five and a half hours ahead of the UK in winter and four and a half in summer, and every time is confirmed in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young mathematicians',
    lede: 'What comes after primary school, what runs beside it, and where the whole calendar lives.',
    items: [
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'For families north of the border, where the school year differs.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'The same upper primary content, with a selective test attached.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national page for grammar and independent entry.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Questions worth asking any provider, ours included.' }
    ]
  },

  start: {
    h2: 'Start with a free maths lesson',
    lede: 'Tell us the school year and how your child feels about maths. The free lesson teaches something real, and afterwards we say honestly what we saw.',
    readFirst: 'Prefer to read first? Each course keeps its syllabus on its own <a class="ag-inline-link" href="/courses">course page</a>, our method is described on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows what.',
    note: 'WhatsApp is usually the quickest way to reach us and costs a UK mobile nothing. Our number is Indian, as we say everywhere, and we keep no office in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework help' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] },
      { h4: 'Primary maths', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primary maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] }
    ],
    bottomRight: 'We teach the maths; the school enters the child'
  },

  personalityCss: `
.ag-root.ag-pmc .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-pmc .ag-capsule { border-left-width: 6px; border-radius: 0 12px 12px 0; }
.ag-root.ag-pmc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-pmc .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-pmc .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-pmc .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-pmc .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-pmc .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['between 9 and 20 November 2026', 'The final five require an answer where no choices are given', '108 seconds', 'invite-only opportunity', '1 gold, 2 silver and 3 bronze', 'aged 9 to 11', '31.7 minutes']
};
