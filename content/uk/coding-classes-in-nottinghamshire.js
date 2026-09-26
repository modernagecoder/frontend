'use strict';
// Nottinghamshire (cg- county index, UK cluster Phase 7, row 244). Nottingham (unitary) plus Nottinghamshire County
// Council's seven districts. Spine: running Ada Lovelace's 1843 program today. Sources read raw 26 September 2026:
// MacTutor biography of Lovelace (born 10 December 1815; "a daughter of Lord Byron"; notes published in Taylor's
// Scientific Memoirs Volume 3 in 1843 signed AAL; Babbage, quoted: the Bernoulli working "she sent back to me for an
// amendment, having detected a grave mistake which I had made in the process"). Newstead Abbey site: "Lord Byron's study
// and displays of his personal items"; "Byron sold the Abbey in 1818 to Thomas Wildman". Menabrea's Sketch with Ada's
// notes (Fourmilab edition): "We will terminate these Notes by following up in detail the steps through which the
// engine could compute the Numbers of Bernoulli"; "We append to this Note a Diagram and Table, containing the details of
// the computation for B 7 (B 1 , B 3 , B 5 being supposed given)"; "the actual number of data needed will always be
// n +2"; "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to
// order it to perform."
// Our code (scratchpad ntt/bern.py): formula (8) as a loop, exact fractions: Ada's B1, B3, B5, B7 = 1/6, -1/30, 1/42,
// -1/30, matching modern B2, B4, B6, B8; all 30 agree with a modern recurrence. Floats: relative error 6.0e-15 at her
// B7, 2.4e-11 at B19, 2.5e-8 at B29, 2.5e-5 at B39, 2.6 per cent at B49, 2,650 per cent at B59; first above one in a
// billion at n = 13 (her B25). Our first version put (j+1)(j+2) for (j+2)(j+3) and gave B5 = 4/21 and B7 = -421/90,
// with B1 and B3 still right; a check against known values caught it. Our loop uses 17 arithmetic operations for B7.
// Lesson family: exact rational vs floating-point arithmetic, cancellation, index conventions, testing against known
// values; screened (Bernoulli, Lovelace, Analytical Engine: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,148,455); ONS built-up areas checked
// against our OA sums (South Normanton and Pinxton is almost wholly in Derbyshire, left out). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NOTTINGHAMSHIRE', blurb: 'Nottingham and seven districts, and a lesson from Lord Byron\'s former home: run Ada Lovelace\'s 1843 program and watch floating point fail.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-nottinghamshire',
  code: 'ntt',
  accent: '#224C25',
  accentRationale: 'Nottinghamshire: a deep Sherwood green from the solver (7.95:1 on the darkest paper tint), darker and cooler than the Lincolnshire and Northamptonshire greens',
  pageType: 'governorate',
  place: {
    name: 'Nottinghamshire',
    eyebrow: 'Nottinghamshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Nottinghamshire',
  title: 'Coding Classes in Nottinghamshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Nottinghamshire, from Mansfield, Beeston and Worksop to Arnold, West Bridgford, Hucknall and Newark.',
  ogDescription: 'Coding classes for all of Nottinghamshire, and a Newstead Abbey project: run Ada Lovelace\'s Bernoulli program in Python and find where ordinary decimals give up.',
  twitterDescription: 'Nottinghamshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Nottinghamshire',
    description: 'Ability-placed online coding, Python and mathematics for children, teenagers and adults across Nottinghamshire, taught live in English.'
  },

  h1: 'Coding classes in Nottinghamshire',
  capsuleQ: 'What are the best coding classes in Nottinghamshire?',
  capsule: 'Nottinghamshire here means the city of Nottingham together with the seven districts of Nottinghamshire County Council. Between them they held 1,148,455 people at the 2021 Census, a total we made by adding the eight published figures. After Nottingham come Mansfield, Carlton, Beeston and Worksop. Every lesson is live on video, taught from India, and learners join the class that fits their ability rather than the one that fits their age. Pupils range from six-year-olds to people of 67, learning coding, Python or maths in a class of five to ten or with a teacher of their own. The Nottinghamshire project comes from Newstead Abbey, Lord Byron\'s former home, and Byron\'s daughter Ada Lovelace. You pay nothing for a first lesson; after it, groups cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'Newstead Abbey, in Nottinghamshire, keeps Lord Byron\'s study and his belongings. His daughter was Ada Lovelace, who in 1843 published what is often called the first computer program: a step-by-step plan for Charles Babbage\'s Analytical Engine to compute the Bernoulli numbers. Babbage wrote that she caught "a grave mistake" in his working along the way. This page\'s project turns Ada\'s formula into a Python loop, checks it against the numbers as mathematicians write them today, and then runs it in ordinary computer decimals to see how far it can go before the answers become nonsense.',
  wa: 'Hello Modern Age Coders, we are in Nottinghamshire and would like a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Nottinghamshire',
    h2: 'Where Nottinghamshire learners begin',
    intro: 'A six-year-old in Retford who loves patterns, a Year 8 in Beeston who enjoys fractions more than friends expect, a Year 12 in West Bridgford heading for computer science, and an adult in Mansfield who wants to program properly at last. Each has a free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with number patterns that grow step by step.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including fractions, sequences and patterns as Python projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, building towards programs that are correct and tested.' }
    ]
  },

  sections: [
    {
      id: 'nottinghamshire', tint: '', eyebrow: 'Nottinghamshire in figures',
      h2: '1,148,455 people in the city and seven districts',
      intro: 'Each council figure is a 2021 Census count on Nomis, and we added the eight together for the county. Town figures are ONS built-up areas, each recounted by us from census output areas.',
      body: [
        { kind: 'table', caption: 'The twelve largest built-up areas in Nottinghamshire, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Nottingham', '299,790', 'West Bridgford', '36,490'],
          ['Mansfield', '63,445', 'Sutton in Ashfield', '36,425'],
          ['Carlton', '53,555', 'Hucknall', '35,840'],
          ['Beeston', '52,355', 'Newark-on-Trent', '29,755'],
          ['Worksop', '43,440', 'Retford', '23,740'],
          ['Arnold', '40,010', 'Clifton', '22,935']
        ] },
        { kind: 'p', text: 'The ONS draws Nottingham\'s built-up area to include parts of Broxtowe and Gedling while leaving Arnold, Carlton, Beeston, West Bridgford and Clifton as separate places, which is why the list looks so full of suburbs. Nottingham city council had 323,632 residents; the largest district is Ashfield at 126,300 and the smallest Mansfield at 110,482. Kirkby-in-Ashfield, Mansfield Woodhouse, Forest Town, Eastwood, Stapleford, Balderton and Bingham come next. South Normanton and Pinxton is left out because nearly all of it lies in Derbyshire. School holiday dates come from Nottingham City Council, Nottinghamshire County Council and individual academy trusts. We have not read them, so each family simply tells us theirs.' },
        { kind: 'callout', h3: 'The city has a page of its own', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> page has a different project, drawing the tightest boundary round the tram network. This page covers the whole county, from Worksop to Bingham.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Nottinghamshire project',
      h2: 'Running Ada Lovelace\'s program in Python',
      intro: 'A formula from 1843, exact fractions, ordinary decimals, and a bug of our own.',
      body: [
        { kind: 'p', text: 'Ada\'s last note sets out a formula that gives each Bernoulli number from the ones before it, and describes the engine\'s steps for her B7, "B 1 , B 3 , B 5 being supposed given". The learner writes it as a loop in Python, using the fractions module so every value is exact. Out come 1/6, −1/30, 1/42 and −1/30 for Ada\'s B1, B3, B5 and B7. Mathematicians today number these B2, B4, B6 and B8: the values match, but the labels are shifted, a classic source of confusion when two programs use different conventions. We then checked the first 30 against a modern formula, and all 30 agree.' },
        { kind: 'table', caption: 'Ada\'s formula run in ordinary decimals, compared with exact fractions, 26 September 2026', head: ['Ada\'s number', 'Exact value, roughly', 'Error in ordinary decimals'], rows: [
          ['B7', '−0.0333', 'About six parts in a thousand million million'],
          ['B19', '−529', 'About two parts in a hundred thousand million'],
          ['B29', '602 million', 'About two parts in a hundred million'],
          ['B39', '−1.9 × 10¹⁶', 'About two parts in a hundred thousand'],
          ['B49', '7.5 × 10²⁴', '2.6 per cent'],
          ['B59', '−2.1 × 10³⁴', 'About 26 times too big: meaningless']
        ] },
        { kind: 'p', text: 'Ordinary computer decimals, called floating point, keep about sixteen significant figures. Ada\'s formula adds large numbers of opposite sign that nearly cancel, and each step loses a little accuracy that the next step inherits. The error passes one part in a thousand million at her B25 and reaches 2.6 per cent at B49; by B59 the answer is about 26 times the size it should be. With exact fractions the same loop never goes wrong, because nothing is rounded. Choosing the right kind of number is part of writing a correct program.' },
        { kind: 'p', text: 'Our own first attempt had a bug, and it is worth confessing. One factor in the loop was off by one, and the program printed 1/6 and −1/30 correctly, then 4/21 instead of 1/42 for B5. The first two answers looked right, so a quick glance would have passed it. Only checking every result against known values caught the slip, which is exactly the kind of care Babbage says Ada showed when she sent his working back to be corrected.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Add fractions by hand and in Python, and see why 1/3 + 1/3 + 1/3 is exactly 1 with fractions but not always with decimals.' },
          { h3: 'Ages 12 to 15', p: 'Write Ada\'s loop for B1 to B7 with the fractions module and compare it with the values printed in her note.' },
          { h3: 'Ages 15 and up', p: 'Run the loop in both kinds of number up to B59, plot the growing error, and explain why nearly equal numbers are dangerous to subtract.' }
        ] },
        { kind: 'callout', h3: 'Whose work is whose', p: 'The formula and the quoted words are Ada Lovelace\'s, from her notes on Menabrea\'s paper; the biography facts are from MacTutor at the University of St Andrews. The Python loop, the error figures and the bug story are ours. Historians discuss the details of Ada\'s table in depth; this page makes no claim about any error in it.' }
      ]
    },
    {
      id: 'lovelace', tint: 'deep', eyebrow: 'Why Nottinghamshire',
      h2: 'Lord Byron\'s former home and the first program',
      intro: 'The Nottinghamshire link, and Ada\'s own words about machines.',
      body: [
        { kind: 'table', caption: 'Ada Lovelace, Newstead Abbey and the Analytical Engine', head: ['Source', 'What it says'], rows: [
          ['MacTutor', 'Ada Lovelace, born 10 December 1815, was a daughter of Lord Byron.'],
          ['Newstead Abbey', 'Lord Byron\'s study and personal items are on display; Byron sold the Abbey in 1818.'],
          ['MacTutor', 'Her notes were published in 1843 in Taylor\'s Scientific Memoirs, signed only AAL.'],
          ['Ada\'s notes', 'The notes end by following the steps by which the engine could compute the Bernoulli numbers.'],
          ['Ada\'s notes', 'The engine has no pretensions whatever to originate anything; it can do whatever we know how to order it to perform.']
        ] },
        { kind: 'p', text: 'Ada\'s sentence about originating nothing is still quoted in arguments about artificial intelligence, more than 180 years later. Her program also shows habits every programmer needs: write the steps out exactly, name every variable, and check each result. A Nottinghamshire student who has run her loop, caught a bug and watched floating point fall apart has done real computer science with a real piece of its history.' },
        { kind: 'p', text: 'We have no link with Newstead Abbey, Nottingham City Council, the University of St Andrews or Fourmilab. The quotations are theirs and Ada\'s; the code and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> has its own page; <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a> is west, <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> east, <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> south and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a> just north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From number patterns to numerical care',
    intro: 'The free lesson shows where a learner fits. Age is a hint; skill decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Patterns that grow', p: 'Block coding with repeating patterns and growing sequences, the first taste of a loop.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Fractions in code', p: 'Python with fractions, decimals and sequences, and why they sometimes disagree.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Correct programs', p: 'Full Python with testing, number types and debugging, up to A level standard and beyond.', courses: ['python-complete-masterclass-teens', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Programming properly', p: 'Python for adults, from first lines to programs that are checked and trusted.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and Ada\'s question',
    h2: 'Ada said machines only do what we order. Is that still true of AI?',
    intro: 'Her 1843 sentence is the starting point for a debate that is very much alive.',
    p1: 'Ada wrote that the engine "can do whatever we know how to order it to perform". Modern AI systems are not programmed step by step in her sense; they are trained on data and can produce things nobody wrote down in advance. Yet they still work with numbers inside a computer, and still fail in the ways her loop does: rounding, labels that mean different things in different places, and answers that look right for the first few cases.',
    p2: 'A Nottinghamshire student who has run her program both ways knows to ask what kind of number a system uses, what its labels mean, and whether anyone checked the tenth answer as well as the first. Those questions are just as useful for testing an AI tool as for testing a loop.',
    closer: 'That is why learning to code in 2026 matters for a Nottinghamshire teenager: it lets you check what a machine was really told to do.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Bassetlaw to Rushcliffe, straight from home',
    intro: 'Crossing Nottingham at rush hour for a weekly class is nobody\'s idea of fun. Online lessons avoid it.',
    cells: [
      { h3: 'At your own desk', p: 'A bedroom in Hucknall, a dining room in Southwell, a flat in Beeston. The learner codes while the teacher watches the same screen.' },
      { h3: 'Terms from school', p: 'When a Year 10 mentions a GCSE mock or a sixth former talks about A level options, the teacher knows exactly what they mean. Lessons are in English.' },
      { h3: 'A free lesson first', p: 'A genuine lesson, then a clear recommendation. No payment details are requested.' },
      { h3: 'Learners at your level', p: 'Groups of five to ten at one stage, drawn from Nottinghamshire and far beyond.' },
      { h3: 'Holidays by your calendar', p: 'Two lessons a week is the norm, and we pause for your school\'s own holidays.' },
      { h3: 'Always UK clock time', p: 'Slots are booked in UK time and do not move when the clocks change; the teacher keeps India time, several hours ahead, and makes the switch.' }
    ],
    spec: { title: 'Why level decides the group', p: 'Five learners at one stage free on the same evening are hard to find in any single town. Grouping by level lets a learner in Ollerton or Eastwood join a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Nottinghamshire',
    intro: 'A family in Worksop pays exactly what a family in West Bridgford pays, and the same as families in every country we teach apart from India.',
    first: 'A complete lesson of real work, then our honest suggestion of level and course.',
    group: 'Roughly eight lessons a month with five to ten learners at one level.',
    private: 'Roughly eight lessons a month, one teacher to one learner.',
    closer: 'We invoice in US dollars and publish no sterling prices. The first invoice comes only after the free lesson, once a course and a regular weekly slot are settled. Holidays, a missed class, or a change from group to private are all explained on our pricing page.'
  },

  reviewsH2: 'Our Google reviews, from parents and learners',

  book: {
    h2: 'Book a free Nottinghamshire lesson',
    intro: 'Say how old the learner is, or what year they are in, and which subject they like most. A first lesson could be a Scratch pattern, a Python fractions puzzle, or Ada\'s loop on this page.',
    success: 'Thank you. Your Nottinghamshire request is safely with us.'
  },

  faq: {
    h2: 'Nottinghamshire questions',
    intro: 'The county, the Lovelace project and the practical side.',
    items: [
      { q: 'How many people live in Nottinghamshire?', a: 'Adding the city of Nottingham to the seven county districts gives 1,148,455 usual residents in the 2021 Census. That total is ours; the eight separate counts are the ONS figures published on Nomis.' },
      { q: 'What are the largest towns in Nottinghamshire?', a: 'By ONS built-up area: Nottingham 299,790, Mansfield 63,445, Carlton 53,555, Beeston 52,355 and Worksop 43,440.' },
      { q: 'What is the Ada Lovelace project?', a: 'Learners turn Ada\'s 1843 formula for the Bernoulli numbers into a Python loop, check 30 results against a modern formula, and run it in floating point to find where rounding errors take over.' },
      { q: 'What is the link between Ada Lovelace and Nottinghamshire?', a: 'Ada was a daughter of Lord Byron, whose former home, Newstead Abbey in Nottinghamshire, still shows his study and belongings. The page does not claim Ada lived there.' },
      { q: 'Why do computers get decimals wrong?', a: 'Ordinary floating-point numbers keep about sixteen significant figures, so tiny rounding errors appear and can grow when nearly equal numbers are subtracted. Exact fractions avoid this but are slower.' },
      { q: 'Are there lessons in person in Nottinghamshire?', a: 'No. Every lesson is live online, so nobody needs to travel into the city.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. Young children begin with blocks, most move to typed Python around ten, teenagers go on to advanced Python and A level maths, and adults learn Python or data. The free lesson settles the starting point.' },
      { q: 'Can my teenager combine coding and A level maths?', a: 'Yes. We teach A level maths alongside Python, and projects like this one use both. We support learning; we do not promise grades.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. From the second lesson on, a group place is USD 100 monthly and one-to-one USD 150 monthly. You sign nothing long-term and pay no registration charge.' },
      { q: 'Do you follow Nottinghamshire school holidays?', a: 'We can. Nottingham City Council, Nottinghamshire County Council and academy trusts publish dates, and we plan breaks around your school\'s.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Nearby pages',
    html: 'For the city see <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a>. Around the county are <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a>, <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Nottinghamshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-nottingham', label: 'Nottingham' },
    { href: '/coding-classes-in-derbyshire', label: 'Derbyshire' }
  ],

  personalityCss: `
.cg-root.cg-ntt .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.3vw, 2.9rem); }
.cg-root.cg-ntt .cg-hero h1 { font-weight: 800; letter-spacing: -0.027em; line-height: 1.02; }
.cg-root.cg-ntt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ntt .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-ntt .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.021em; }
.cg-root.cg-ntt .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-ntt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ntt .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-ntt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ntt .cg-callout { border-left-width: 6px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Nottinghamshire: Nottingham (unitary) plus Nottinghamshire County Council districts Ashfield, Bassetlaw, Broxtowe, Gedling, Mansfield, Newark and Sherwood, Rushcliffe. ONS Census 2021 TS001 via Nomis: Nottingham 323,632; Ashfield 126,300; Newark and Sherwood 122,956; Rushcliffe 119,077; Bassetlaw 117,804; Gedling 117,264; Broxtowe 110,940; Mansfield 110,482; our sum 1,148,455. ONS built-up areas (published; agree with our OA sums): Nottingham 299,790; Mansfield 63,445; Carlton 53,555; Beeston 52,355; Worksop 43,440; Arnold 40,010; West Bridgford 36,490; Sutton in Ashfield 36,425; Hucknall 35,840; Newark-on-Trent 29,755; Retford 23,740; Clifton 22,935; Kirkby-in-Ashfield 21,270; Mansfield Woodhouse 19,520; Forest Town 19,010; Eastwood 18,890; Stapleford 15,045; Balderton 12,875; New Ollerton and Ollerton 10,870; Bingham 10,110. South Normanton and Pinxton (16,025; 232 inside) excluded. MacTutor Lovelace: "Born 10 December 1815"; "a daughter of Lord Byron"; notes "published in Richard Taylor\'s Scientific Memoirs Volume 3 in 1843 with the author\'s name given as AAL"; Babbage quoted: "having detected a grave mistake which I had made in the process". Newstead Abbey: "Lord Byron\'s study and displays of his personal items"; "Byron sold the Abbey in 1818 to Thomas Wildman". Fourmilab Sketch, Note G: "computation for B 7 (B 1 , B 3 , B 5 being supposed given)"; "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform."',
    localProject: 'Ada Lovelace formula (8) as a Python loop: A0 = -1/2 (2n-1)/(2n+1), A1 = n, next coefficient x (2n-j)(2n-j-1)/((j+2)(j+3)); B_{2n-1} = -(A0 + sum A B). Exact fractions: 1/6, -1/30, 1/42, -1/30 for Ada B1..B7 = modern B2..B8; 30 of 30 agree with modern recurrence. Float relative error: B7 6.0e-15; B19 2.4e-11; B29 2.5e-8; B39 2.5e-5; B49 2.6e-2; B59 26.5; first above 1e-9 at n = 13 (B25). Our bug: (j+1)(j+2) gave B5 = 4/21, B7 = -421/90 with B1, B3 correct. 17 operations for B7 in our loop. Page says no claim is made about errors in Ada\'s own table. AI angle: Ada\'s originate-anything sentence and checking numeric types and labels. Lesson family: exact rationals vs floating point, cancellation, index conventions, test against known values.',
    requiredMentions: [
      '1,148,455',
      'Newstead Abbey',
      'Bernoulli',
      'originate anything',
      'Menabrea',
      'Sutton in Ashfield',
      'Kirkby-in-Ashfield',
      'Mansfield Woodhouse',
      'Forest Town',
      'West Bridgford',
      'Balderton'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Nottingham and the seven Nottinghamshire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Nottinghamshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'MacTutor History of Mathematics, University of St Andrews: Ada Lovelace biography.', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Lovelace/' },
      { claim: 'Newstead Abbey: Byron\'s study and the 1818 sale.', url: 'https://newsteadabbey.org.uk/house-and-abbey' },
      { claim: 'Menabrea, Sketch of the Analytical Engine, with notes by Ada Lovelace (Fourmilab edition): Note G, Bernoulli numbers, originate anything.', url: 'https://www.fourmilab.ch/babbage/sketch.html' }
    ],
    rejectedClaims: [
      'Ada Lovelace\'s burial at Hucknall: no primary page read this session, so not mentioned.',
      'The widely discussed error in the Note G table: the table is an image in the edition read, so no claim is made about it.',
      'That Ada lived at or visited Newstead Abbey: not stated; only the Byron family link is used.',
      'Sherwood Forest and Robin Hood material: not researched, not used.',
      'Nottinghamshire school term dates: none read.',
      'Named Nottinghamshire schools: none named.'
    ]
  }
};
