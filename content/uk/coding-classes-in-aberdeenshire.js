'use strict';
// Aberdeenshire (cg- council area page, UK cluster Phase 7, row 256). One council. Spine: how do you make sure every team
// meets every other team exactly once? Anchor: the Braemar Gathering (braemargathering.org, read raw 26 September
// 2026): "Held on the first Saturday of September each year"; "running since 1832"; "The Gathering has been run in its
// present form since 1832. Queen Victoria attended in 1848"; history page: "On 20th July, 1832, at a General Meeting held
// in Braemar Castle"; next Gathering "Saturday 4th September 2027"; Princess Royal and Duke of Fife Memorial Park,
// Braemar, AB35 5YX.
// Our schedules (scratchpad abs/rr.py): circle method (one team fixed, the rest rotate). 8 teams: 7 rounds, 28 contests,
// every pair once, nobody twice in a round; 7 teams: 7 rounds, 21 contests, one team sits out each round (7 byes);
// knockout for 8: 7 contests in 3 rounds. Breaks (same end of the arena in consecutive rounds): 6 teams 16 naive vs 4
// alternating; 8 teams 36 vs 6; 10 teams 64 vs 8; 12 teams 100 vs 10. Our first checker wrongly failed the 7-team
// schedule because it counted the team sitting out.
// Lesson family: round-robin scheduling (circle method), invariants and checking, byes, breaks; screened (round robin:
// 0 hits; "circle method" in Crumlin means circular averaging).
// Place facts: NRS, Scotland's Census 2022 first results rounded population estimates (published 14 September 2023):
// Aberdeenshire S12000034 263,900; 115,800 households; 41.8 residents per square kilometre; ages 0 to 14 45,500 and 65+
// 55,500 by our addition of five-year groups (Scotland 5,436,600). NRS Population Estimates for Settlements and
// Localities in Scotland, mid-2020 (published 31 March 2022): localities in Aberdeenshire. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ABERDEENSHIRE', blurb: 'Peterhead, Inverurie, Fraserburgh and Royal Deeside, and a Braemar lesson in scheduling contests so every team meets every other exactly once.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-aberdeenshire',
  code: 'abs',
  accent: '#325C51',
  accentRationale: 'Aberdeenshire: a granite-and-pine teal from the solver (6.08:1 on the darkest paper tint), greener than the Northumberland and Norfolk blues',
  pageType: 'governorate',
  place: {
    name: 'Aberdeenshire',
    eyebrow: 'Aberdeenshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Aberdeen', href: '/best-coding-class-in-aberdeen' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Aberdeenshire',
  title: 'Coding Classes in Aberdeenshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Aberdeenshire, from Peterhead, Inverurie and Fraserburgh to Westhill, Stonehaven, Ellon, Banchory and Huntly.',
  ogDescription: 'Coding classes for all of Aberdeenshire, and a Braemar project: build a round-robin schedule in Python so every team meets every other exactly once, then make it fair.',
  twitterDescription: 'Aberdeenshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Aberdeenshire',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Aberdeenshire, taught live in English.'
  },

  h1: 'Coding classes in Aberdeenshire',
  capsuleQ: 'What are the best coding classes in Aberdeenshire?',
  capsule: 'Aberdeenshire is one council area, and Scotland\'s Census 2022 counted about 263,900 people there, in some 115,800 households, at 41.8 people per square kilometre against 69.8 for Scotland. Its largest towns are Peterhead, Inverurie, Fraserburgh, Westhill and Stonehaven. Teaching happens live by video from India, and the class a learner joins depends on what they can already do rather than their age. We teach anyone from 6 to 67, from Primary 1 to S6 and beyond, in groups of five to ten or one-to-one, in coding, Python, algorithms and maths. The Aberdeenshire project comes from the Braemar Gathering. We charge nothing for the opening lesson; continuing costs USD 100 per month in a small group or USD 150 per month on your own.',
  lead: 'The Braemar Gathering says it has been held in its present form since 1832, on the first Saturday of September, and the next is on 4 September 2027. Any competition with many teams faces a scheduling puzzle that computer scientists love: how do you arrange the contests so that every team meets every other team exactly once, nobody has two contests at the same time, and the whole thing takes as few rounds as possible? The standard answer, called the circle method, fits in a dozen lines of Python. This page\'s project builds it, proves it works with a checker, handles an odd number of teams, and then makes the schedule fairer.',
  wa: 'Hello Modern Age Coders, we are in Aberdeenshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Aberdeenshire',
    h2: 'Where Aberdeenshire learners begin',
    intro: 'A P4 pupil in Ellon who loves organising games, an S2 in Inverurie who likes puzzles with rules, an S5 in Stonehaven working towards Higher Computing Science, and an adult in Peterhead learning to program. Each starts with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles and computational thinking, with step-by-step strategies and real-world challenges.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, where every method is written, tested and judged by what it costs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, building towards programs that organise real work.' }
    ]
  },

  sections: [
    {
      id: 'aberdeenshire', tint: '', eyebrow: 'Aberdeenshire in figures',
      h2: 'About 263,900 people, from the coast to the Cairngorms',
      intro: 'The council figures are Scotland\'s Census 2022 first results, which the National Records of Scotland rounds to the nearest hundred. Town figures are NRS locality estimates for mid-2020, a different source and year.',
      body: [
        { kind: 'table', caption: 'Aberdeenshire\'s twelve largest localities, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Peterhead', '19,060', 'Portlethen', '8,940'],
          ['Inverurie', '14,660', 'Banchory', '7,440'],
          ['Fraserburgh', '12,570', 'Turriff', '4,700'],
          ['Westhill', '12,110', 'Kintore', '4,700'],
          ['Stonehaven', '11,150', 'Huntly', '4,550'],
          ['Ellon', '10,070', 'Banff', '4,000']
        ] },
        { kind: 'p', text: 'Aberdeenshire is spread thin: no town reaches twenty thousand, and adding up all 62 of its localities gives about 188,000, so a large share of the county lives in villages and the countryside around them. By our addition of the census age groups, about 17 per cent of residents are under 15, compared with about 15 per cent for Scotland. Kemnay, Macduff, Laurencekirk, Oldmeldrum, Blackburn and Newtonhill each have around three to four thousand people. Aberdeenshire Council sets school term dates, which we did not read; lesson breaks are arranged with each family.' },
        { kind: 'callout', h3: 'Aberdeen is next door', p: 'The city has its own council and its own page: <a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen</a>. For Scottish exams, see our <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Aberdeenshire project',
      h2: 'Every team against every other, exactly once',
      intro: 'The circle method, a checker that nearly fooled us, and a fairer schedule.',
      body: [
        { kind: 'p', text: 'Imagine eight teams in a contest where each pair meets once. That is 28 contests, and with four arenas running at once they could fit into seven rounds. The circle method finds such a schedule. Write the teams round a circle, keep team 1 fixed, pair them across the circle for round one, then rotate everyone else one place and pair them again. After seven rotations every pair has met exactly once. The learner codes it with a list and a slice, and then writes the part that matters more: a checker that confirms every pair appears once and no team is in two contests in the same round.' },
        { kind: 'table', caption: 'Our schedules, built and checked in Python, 26 September 2026', head: ['Teams', 'Rounds', 'Contests', 'Breaks, simple version', 'Breaks, alternating ends'], rows: [
          ['6', '5', '15', '16', '4'],
          ['7 (one sits out each round)', '7', '21', '32', '5'],
          ['8', '7', '28', '36', '6'],
          ['10', '9', '45', '64', '8'],
          ['12', '11', '66', '100', '10']
        ] },
        { kind: 'p', text: 'An odd number of teams needs a trick: add a pretend team called "rest", and whoever is paired with it sits that round out. With seven teams that gives seven rounds, each with one team resting. Here our own first checker failed, reporting that the seven-team schedule was broken. The schedule was fine; the checker had counted the resting team as if it were competing. Testing the tests is part of the job.' },
        { kind: 'p', text: 'Now fairness. In many contests, teams start from one end of the arena or the other, and it is fairer if nobody is stuck at the same end round after round. Scheduling experts call it a break when a team has the same end twice running. The simple circle method gives eight teams 36 breaks; swapping the ends in alternate rounds cuts that to 6, without changing who meets whom. The same schedule becomes much fairer with one extra line of code.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Write four team names on cards round a table, pair across, then move every card but one a place along, and check nobody meets twice.' },
          { h3: 'Ages 11 to 15', p: 'Code the circle method in Python for any even number of teams and print each round.' },
          { h3: 'Ages 15 and up', p: 'Add byes for odd numbers, write a checker, count breaks, and invent a rule that reduces them.' }
        ] },
        { kind: 'callout', h3: 'What is the Gathering\'s and what is ours', p: 'The dates and history come from the Braemar Gathering\'s own website. The teams, contests and schedules are invented for teaching and do not describe how the Gathering organises any event.' }
      ]
    },
    {
      id: 'braemar', tint: 'deep', eyebrow: 'Why Braemar',
      h2: 'A Gathering on the first Saturday of September',
      intro: 'The Aberdeenshire link, in the Gathering\'s own words.',
      body: [
        { kind: 'table', caption: 'The Braemar Gathering, as its website describes it', head: ['Point', 'The Gathering says'], rows: [
          ['When', 'Held on the first Saturday of September each year.'],
          ['Since', 'Run in its present form since 1832.'],
          ['The first meeting', 'On 20 July 1832, at a General Meeting held in Braemar Castle.'],
          ['Next Gathering', 'Saturday 4 September 2027.'],
          ['Where', 'Princess Royal and Duke of Fife Memorial Park, Braemar, AB35 5YX.']
        ] },
        { kind: 'p', text: 'Round robins are everywhere: school leagues, chess tournaments, sports fixtures, and in computing, where a processor shares its time by giving each task a turn in rotation. The circle method is a small, elegant idea that works for any even number, and a checker turns "I think it works" into "I know it works". An Aberdeenshire student who has built both, and then improved the fairness, has done real algorithm design from start to finish.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Braemar Gathering or Aberdeenshire Council. The Gathering\'s facts are its own; our schedules and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen</a> is surrounded by Aberdeenshire; <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a> is west and <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> south. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From team games to algorithm design',
    intro: 'The free lesson places each learner. The school year is a hint; ability decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Games with rules', p: 'Block coding games where turns and rules keep things fair.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Puzzles and Python', p: 'Logic puzzles and typed Python that organise lists, turns and teams.', courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Algorithms that work', p: 'Algorithms and full Python, useful for National 5, Higher and beyond, with testing built in.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Programs for real work', p: 'Python and data structures for adults, from basics to scheduling and automation.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and checking',
    h2: 'An AI can write a fixture list. Who checks that every team meets every other?',
    intro: 'A schedule that looks right can still be wrong, and so can the test for it.',
    p1: 'Ask an assistant for a round-robin fixture list and it will usually produce one quickly. It may be perfect, or it may quietly repeat a pairing, drop one, or give a team two contests in the same round, and a long list is hard to check by eye. The only reliable way is a small program that checks every pair and every round.',
    p2: 'Our own first checker was wrong, which is the other half of the lesson: tests need testing too. An Aberdeenshire student who has written both the schedule and the checker, and caught a bug in the checker, knows how to trust an AI\'s output properly: by verifying it.',
    closer: 'Learning to code in 2026 gives an Aberdeenshire teenager the means to check the work an AI hands back.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Deeside, Donside and the Buchan coast, all online',
    intro: 'Aberdeenshire covers a great deal of countryside, and for many homes the nearest club at the right level is a long way off. Online lessons make that irrelevant.',
    cells: [
      { h3: 'At home, anywhere', p: 'A farmhouse near Turriff, a house in Westhill, a flat in Peterhead. The pupil types and runs the code, and the teacher sees the same screen and guides.' },
      { h3: 'Scottish school stages', p: 'Primary 1 to 7, S1 to S6, then National 5, Higher and Advanced Higher: lessons use the names Aberdeenshire schools use, and teaching is in English.' },
      { h3: 'A free first lesson', p: 'A real lesson, then honest advice on level and course. No card details are asked for.' },
      { h3: 'A group that matches', p: 'Classes of five to ten are built around a shared stage, not a shared postcode.' },
      { h3: 'Term and holiday rhythm', p: 'Most pupils have two lessons a week in term and pause when the school holidays arrive.' },
      { h3: 'Scottish clock, not ours', p: 'A lesson booked for 5pm in Aberdeenshire stays at 5pm UK time in March and October alike; our teachers, working on India time, move instead.' }
    ],
    spec: { title: 'Why groups follow level', p: 'In a council area of small towns and villages, five learners at one stage free on the same evening rarely live near each other. Level-based groups let a learner in Banff or Laurencekirk join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Aberdeenshire',
    intro: 'Fraserburgh or Banchory, the fee is the same, as it is in every country we teach apart from India.',
    first: 'A complete lesson of genuine work, then a recommended level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'We charge in US dollars and publish no pound prices. No bill arrives until the free lesson has settled a course and a weekly slot; the pricing page covers holidays, missed lessons and switching format.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free Aberdeenshire lesson',
    intro: 'Let us know the pupil\'s age or stage, P1 to S6 or adult, and one or two interests. A first lesson could be a Scratch team game, a first Python list, or the Braemar schedule on this page.',
    success: 'Thank you. Your Aberdeenshire request has arrived.'
  },

  faq: {
    h2: 'Aberdeenshire questions',
    intro: 'The council area, the scheduling project and practical details.',
    items: [
      { q: 'How many people live in Aberdeenshire?', a: 'Scotland\'s Census 2022 counted about 263,900 usual residents in Aberdeenshire, rounded to the nearest hundred by the National Records of Scotland, in about 115,800 households.' },
      { q: 'What are the largest towns in Aberdeenshire?', a: 'By NRS mid-2020 locality estimates: Peterhead 19,060, Inverurie 14,660, Fraserburgh 12,570, Westhill 12,110 and Stonehaven 11,150.' },
      { q: 'What is the Braemar project?', a: 'Learners build a round-robin schedule with the circle method in Python, write a checker that confirms every pair meets once, handle an odd number of teams with rest rounds, and reduce breaks from 36 to 6 for eight teams.' },
      { q: 'What is a round robin?', a: 'A competition or schedule in which every participant meets every other exactly once. In computing the same word describes sharing time by giving each task a turn in rotation.' },
      { q: 'When is the Braemar Gathering?', a: 'Its website says it is held on the first Saturday of September; the next is on Saturday 4 September 2027.' },
      { q: 'Are lessons held in Aberdeenshire?', a: 'Not in person. Every lesson is live online, so learners join from anywhere in the council area.' },
      { q: 'Do you follow the Scottish curriculum?', a: 'Lessons use Scottish stages and qualification names, and our National 5 and Higher Computing Science pages cover exam preparation. We support learning; we do not promise results.' },
      { q: 'Who can join, by age?', a: 'From 6 to 67. Young pupils start with blocks and games, Python usually begins around P6 or P7, secondary pupils move on to algorithms and exam courses, and adults learn Python.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. From the second lesson a group place costs USD 100 monthly and private teaching USD 150 monthly. Nobody pays a joining fee.' },
      { q: 'Do you pause for Aberdeenshire school holidays?', a: 'Yes, if you like. Aberdeenshire Council fixes the term dates, and once you share them we build lesson breaks to match.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Aberdeenshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen</a>, <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a> and <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a>, or the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page for every council. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Aberdeenshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-aberdeen', label: 'Aberdeen' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing' }
  ],

  personalityCss: `
.cg-root.cg-abs .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-abs .cg-hero h1 { font-weight: 800; letter-spacing: -0.026em; line-height: 1.03; }
.cg-root.cg-abs .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-abs .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-abs .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-abs .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-abs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-abs .cg-table th { letter-spacing: 0.045em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-abs .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-abs .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Aberdeenshire (S12000034), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates (published 14 September 2023, rounded to the nearest hundred): Aberdeenshire 263,900 (females 134,100, males 129,800); households 115,800; density 41.8 per square kilometre (Scotland 5,436,600; 69.8; 2,509,300 households); ages 0 to 14: 13,200 + 15,800 + 16,500 = 45,500 (our sum, 17.2 per cent); 65+: 55,500 (our sum, 21.0 per cent); Scotland 0 to 14 832,200 (15.3 per cent). NRS Population Estimates for Settlements and Localities in Scotland, mid-2020 (published 31 March 2022), Aberdeenshire localities: Peterhead 19,060; Inverurie 14,660; Fraserburgh 12,570; Westhill 12,110; Stonehaven 11,150; Ellon 10,070; Portlethen 8,940; Banchory 7,440; Turriff 4,700; Kintore 4,700; Huntly 4,550; Banff 4,000; Kemnay 3,890; Macduff 3,830; Laurencekirk 3,140; Oldmeldrum 3,120; Blackburn 3,050; Newtonhill 3,010; 62 localities summing to 188,130 (our sum, mid-2020). Braemar Gathering: "Held on the first Saturday of September each year"; "The Gathering has been run in its present form since 1832"; "On 20th July, 1832, at a General Meeting held in Braemar Castle"; "Saturday 4th September 2027"; "Broombank Terrace, Braemar, Aberdeenshire, AB35 5YX".',
    localProject: 'Round-robin scheduling by the circle method (fix team 0, rotate the rest), with a dummy for odd n. Results: n 6: 5 rounds, 15 contests; n 7: 7 rounds, 21 contests, 7 byes; n 8: 7 rounds, 28; n 10: 9, 45; n 12: 11, 66; all pairs once, no team twice per round. Knockout for 8: 7 contests, 3 rounds. Breaks (same end in consecutive rounds): naive vs alternating: 6 teams 16 vs 4; 7 teams 32 vs 5; 8 teams 36 vs 6; 10 teams 64 vs 8; 12 teams 100 vs 10. First checker counted the resting team and wrongly failed n 7. Page labels teams as invented. AI angle: generated fixture lists need programmatic checks; tests need testing. Lesson family: round robin, invariants, byes, breaks.',
    requiredMentions: [
      '263,900',
      '115,800',
      'Braemar',
      'round robin',
      'AB35 5YX',
      'Peterhead',
      'Fraserburgh',
      'Ellon',
      'Portlethen',
      'Banchory',
      'Turriff'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Aberdeenshire and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020: Aberdeenshire localities.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Braemar Gathering: date, history since 1832, next Gathering and address.', url: 'https://www.braemargathering.org/' }
    ],
    rejectedClaims: [
      'Which contests the Braemar Gathering runs and how it schedules them: not read, not claimed; the teams on the page are invented.',
      'Royal attendance details beyond the site\'s own words: not used.',
      'A mathematical lower bound on breaks: not read from a source, so the page reports only our counts.',
      'Aberdeenshire school term dates: none read.',
      'Named Aberdeenshire schools: none named.',
      'Oil and gas industry facts: not researched for this page.'
    ]
  }
};
