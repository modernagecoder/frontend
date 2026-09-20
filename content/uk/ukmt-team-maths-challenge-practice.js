'use strict';
// UKMT Team Maths Challenge practice (ag- competition spoke, UK cluster Phase 2).
// UKMT facts read on 20 September 2026:
//  - Team Maths Challenge: "Each team consists of four students, with a maximum of two students from the
//    older year group"; England and Wales "Year 8 and Year 9 (with a maximum of two Year 9 pupils)",
//    Scotland S1, S2 and S3, Northern Ireland Year 9 and Year 10; four rounds, The Group, The
//    Crossnumber, The Shuttle and The Relay; "Regional Finals take place in host schools"; "The winning
//    team from the Regional Finals will be invited to participate in the National Final", with high
//    scoring second place teams or teams showing exceptional teamwork also possible. The cycle published
//    on that page is registration opening in October, Regional Finals from February to the Easter break
//    and an invite-only National Final in June.
//  - Senior Team Maths Challenge: "Teams of four students" from "Year 12 and 13 (England and Wales)/
//    Year 13 and 14 (Northern Ireland)/ S5 and S6 (Scotland)", no more than two from the older year;
//    "three rounds - The Group, The Crossnumber and The Shuttle" plus non-scoring starter questions;
//    high-scoring teams from the regional finals are invited to the National Final and a school may
//    enter only one team per regional event; registration opens "Thursday 10th September" 2026, Regional
//    Finals run throughout "November 2026", and the National Final is in "February 2027" with the venue
//    to be confirmed.
// UKMT's 2026-27 competitions calendar does not list team dates, so the Team Maths Challenge cycle is
// given as the shape of a year rather than as 2026-27 dates, and the page says so.
// Entry fees are published in pounds and are not printed here.
// Spine: in a chain, accuracy compounds. Our arithmetic of 20 September 2026 on the Shuttle round, where
// each answer feeds the next question: four questions answered correctly 90 per cent of the time
// independently would yield 3.6 right out of 4, but chained they are all correct only 65.6 per cent of
// the time, and one slip in the first question costs the other three. At 95 per cent the chain holds
// 81.5 per cent of the time; at 80 per cent, 41 per cent.
// No UKMT question is reproduced.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'TEAM', label: 'Team Maths Challenges', blurb: 'Four students, a crossnumber and a shuttle round where one wrong answer breaks the chain.' },
  slug: 'ukmt-team-maths-challenge-practice',
  code: 'tmc',
  accent: '#A51D4D',
  accentRationale: 'Team challenges: a strong crimson-rose from the solver (5.91:1 on every paper tint), lighter and pinker than the OUCC wine and clear of the London red and the Primary Maths Challenge plum',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UKMT Team Maths Challenge practice',
  title: 'UKMT Team Maths Challenge Practice | Junior and Senior',
  description: 'Preparing for the UKMT Team Maths Challenge and Senior Team Maths Challenge: teams of four, the Crossnumber and Shuttle rounds, and how regional finals work.',
  ogDescription: 'The Shuttle round chains each answer into the next question, so accuracy compounds. Four answers at ninety per cent each hold together only two thirds of the time.',
  twitterDescription: 'UKMT team challenge preparation: teams of four, four rounds, and the arithmetic of a shuttle.',
  pageName: 'UKMT Team Maths Challenge Practice',
  webPageDescription: 'Preparation guidance for the UK Mathematics Trust Team Maths Challenge and Senior Team Maths Challenge, covering team composition, the rounds, the regional and national finals, and how to practise for a chained shuttle round.',
  courseDescription: 'Live online mathematics classes that build the speed, accuracy and collaboration the UKMT team challenges reward, for pupils in Years 8 to 13.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Team Maths Challenges',
  navLinks: [
    { href: '#rounds', label: 'The rounds' },
    { href: '#chain', label: 'Why the shuttle bites' },
    { href: '#finals', label: 'Regionals and finals' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Teams of four &middot; Years 8 to 13',
  h1: 'UKMT Team Maths Challenge practice',
  lede: 'Every other competition on this site is sat alone. The Team Maths Challenges are not, and that changes what a good performance is made of. Four students share a table, one round has them working in pairs with each answer feeding the next question, another has them running answers to a marker, and the mathematics is deliberately no harder than the school course. What separates teams is accuracy and communication, in that order, and the shuttle round exists to punish anybody who has only ever been fast.',
  secondaryCta: { href: '#chain', label: 'See what a chain costs' },
  wa: 'Hello Modern Age Coders, my child is in a UKMT team maths challenge squad and I would like a free class.',
  heroNote: 'Quoted from UKMT with the date we read it &middot; Our own practice material &middot; Nothing promised about a regional final',
  spec: [
    ['Organiser', 'UK Mathematics Trust'],
    ['Team', 'Four students'],
    ['Junior years', 'Year 8 and Year 9'],
    ['Senior years', 'Year 12 and Year 13'],
    ['Junior rounds', 'Group, Crossnumber, Shuttle, Relay'],
    ['Senior rounds', 'Group, Crossnumber, Shuttle'],
    ['Regionals', 'Hosted in schools around the UK'],
    ['National final', 'By invitation only']
  ],
  capsuleQ: 'In short',
  capsule: 'UKMT runs two team competitions. In the Team Maths Challenge "each team consists of four students, with a maximum of two students from the older year group", drawn from "Year 8 and Year 9" in England and Wales, S1 to S3 in Scotland and Years 9 and 10 in Northern Ireland, and it has four rounds: The Group, The Crossnumber, The Shuttle and The Relay. The Senior Team Maths Challenge has "teams of four students" from Years 12 and 13 in England and Wales, Years 13 and 14 in Northern Ireland and S5 and S6 in Scotland, with "three rounds - The Group, The Crossnumber and The Shuttle" plus non-scoring starters. Senior registration opened on Thursday 10 September 2026, regional finals run through November 2026 and the national final is in February 2027. Regional finals are hosted in schools, and high-scoring teams are invited to the national final. We teach the mathematics and the accuracy, live online. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a team squad',
    lede: 'Team rounds reward reliable mathematics done quickly, not clever mathematics done slowly.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'TMC / 01', title: 'Mental maths for kids', note: 'For Year 8 and 9 squads: arithmetic that arrives, because in a relay the clock is the opponent.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'TMC / 02', title: 'Middle school maths mastery', note: 'The ratio, algebra and geometry the junior rounds are built from, taught to reliability.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'TMC / 03', title: 'High school mathematics', note: 'For senior squads: the sixth-form content the Group and Crossnumber rounds draw on.' }
    ]
  },

  sections: [
    {
      id: 'rounds', tint: 'tint', eyebrow: 'The rounds',
      h2: 'Four rounds, and only one of them is an ordinary paper',
      lede: 'Facts read at UKMT\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The two team competitions as UKMT describes them', head: ['', 'Team Maths Challenge', 'Senior Team Maths Challenge'], rows: [
          ['Team', '"Each team consists of four students, with a maximum of two students from the older year group"', '"Teams of four students", no more than two from the older year'],
          ['England and Wales', '"Year 8 and Year 9 (with a maximum of two Year 9 pupils)"', 'Year 12 and 13'],
          ['Scotland', 'S1, S2 and S3', 'S5 and S6'],
          ['Northern Ireland', 'Year 9 and Year 10', 'Year 13 and 14'],
          ['Rounds', 'The Group, The Crossnumber, The Shuttle and The Relay', '"three rounds - The Group, The Crossnumber and The Shuttle", plus starter questions that do not count'],
          ['Regional finals', '"Regional Finals take place in host schools"', 'Throughout November 2026, at venues around the UK'],
          ['National final', 'In June, by invitation', 'February 2027, venue to be confirmed']
        ] },
        { kind: 'three', cells: [
          { h3: 'The Group', p: 'The closest thing to an ordinary paper: the team works together on a set of questions, and the only novelty is that four people have to agree.' },
          { h3: 'The Crossnumber', p: 'A crossword with numbers, split so that two students hold the across clues and two the down. Neither pair can see the other\'s clues, so the grid is filled by inference and conversation.' },
          { h3: 'The Shuttle and The Relay', p: 'The two rounds that make this a team sport. In the shuttle, answers feed forward from one question to the next; in the relay, a runner carries answers to a marker against the clock.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'UKMT\'s 2026-27 competitions calendar does not print dates for the team challenges, so this page gives the shape of a year rather than inventing one. For the junior challenge the published cycle is registration in October, regional finals from February to the Easter break and an invite-only national final in June. For the senior challenge UKMT has published this season: registration opened on Thursday 10 September 2026, regional finals run through November 2026 and the national final is in February 2027.',
            'Entry is a school matter and entry prices are published by UKMT in pounds, which we do not print. A teacher registers a team; nothing a family or a tutor does can put a child in one.'
          ],
          right: [
            'The team composition rule is worth reading twice. A junior team is four students with at most two from the older year group, which means a squad cannot simply be the four best mathematicians in Year 9. Building a team is itself a constrained problem, and the schools that do well at this tend to be the ones that start with Year 8 the previous year.',
            'A school may enter only one team per senior regional event, so internal selection matters more at sixth form than most pupils expect.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/team-challenges/team-mathematical-challenge" rel="noopener" target="_blank">UKMT, Team Maths Challenge</a> and <a class="ag-inline-link" href="https://ukmt.org.uk/team-challenges/senior-team-maths-challenge" rel="noopener" target="_blank">Senior Team Maths Challenge</a>, read 20 September 2026. We have no connection with the UK Mathematics Trust.' }
      ]
    },
    {
      id: 'chain', tint: 'deep', eyebrow: 'The method',
      h2: 'In a chain, accuracy compounds',
      lede: 'The shuttle round feeds each answer into the next question. That one design decision changes what a team should practise.',
      body: [
        { kind: 'p', html: 'On an ordinary paper the questions are independent: get one wrong and you lose one mark. In a shuttle the answer to the first question is an input to the second, so a slip at the start does not cost one answer. It costs every answer after it. That sounds obvious and its arithmetic is not, because people badly underestimate how quickly reliability drains away when steps depend on each other.' },
        { kind: 'table', caption: 'Our arithmetic of 20 September 2026: four questions, chained against independent', head: ['If each question is right this often', 'Independent: expected right out of 4', 'Chained: all four right'], rows: [
          ['95 per cent of the time', '3.8', '81.5 per cent of the time'],
          ['90 per cent of the time', '3.6', '65.6 per cent of the time'],
          ['85 per cent of the time', '3.4', '52.2 per cent of the time'],
          ['80 per cent of the time', '3.2', '41.0 per cent of the time']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'A team that is right nine times out of ten, which sounds excellent, completes a four-link chain only about two thirds of the time. Drop to eight in ten, which still sounds respectable, and the chain holds in only four rounds out of ten.',
            'Now compare the two columns. Going from 80 to 95 per cent accuracy is worth about half a mark on an independent paper and doubles the chance of a clean chain. Nothing else a team can practise has that kind of leverage.'
          ],
          rightH3: 'What a team should do about it',
          right: [
            'Check the first answer of a chain harder than the last. Teams instinctively rush the early questions because they are easier, which is exactly backwards: the early answers carry the most weight.',
            'Say the answer out loud before passing it on, and have the receiving pair repeat it back. Most shuttle failures we hear about are transcription rather than mathematics: a 6 read as a 5, a sign dropped in the handover.'
          ] },
        { kind: 'p', html: 'None of this is exam craft dressed up. It is the same reasoning that makes engineers worry about long chains of dependent steps, and a fourteen-year-old who has felt it in a shuttle round understands something about reliability that a lot of adults do not.' },
        { kind: 'source', html: 'The figures are ours, computed on 20 September 2026 from the stated accuracies. They describe arithmetic, not any particular team.' }
      ]
    },
    {
      id: 'finals', tint: 'plain', eyebrow: 'Regionals and finals',
      h2: 'Hosted in schools, and won by teams that talk',
      lede: 'The competition is built around regional events rather than a single national paper, which changes the experience completely.',
      body: [
        { kind: 'table', caption: 'How a team progresses, in UKMT\'s own terms', head: ['Stage', 'Junior', 'Senior'], rows: [
          ['Registration', 'Opens in October', 'Opened Thursday 10 September 2026'],
          ['Regional finals', 'February to the Easter break, in host schools', 'Throughout November 2026, at venues around the UK'],
          ['Who goes through', '"The winning team from the Regional Finals will be invited to participate in the National Final"', 'High-scoring teams from the regional finals are invited'],
          ['Other invitations', 'High scoring second place teams, or teams showing exceptional teamwork', 'Not stated'],
          ['National final', 'June, invitation only', 'February 2027, venue to be confirmed'],
          ['Teams per school', 'Not stated', 'One team per regional event']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The line about "teams that have shown exceptional teamwork" is unusual enough to be worth pointing at. Most competitions promote on score alone. UKMT reserves the option to invite a team because of how it worked, which tells you what the organisers think the competition is for.',
            'A regional final in a host school is also a very different day from a paper sat at a desk. There is noise, there is a runner, there are other schools in the room, and a squad that has only ever practised quietly at lunchtime can find the atmosphere itself a surprise.'
          ],
          right: [
            'The most useful preparation, and the cheapest, is to run the rounds. A teacher with eight pupils can split them into two teams and run a crossnumber with the clues divided; nothing about that needs a tutor or a purchase.',
            'What we add is the mathematics underneath: arithmetic that does not wobble under time pressure, and the habit of checking an answer that something else depends on. The rest belongs to the school.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a squad that holds together',
    lede: 'Team performance is built from individual reliability, then communication, then pace.',
    table: { caption: 'From quick arithmetic to a chain that does not break', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 7 to 8', '1. Reliable arithmetic', 'Gets the ordinary questions right when hurried'],
      ['Year 8', '2. Working out loud', 'Can explain a step to a teammate mid-question without losing it'],
      ['Year 8 to 9', '3. Checking what matters', 'Checks an answer harder when something depends on it'],
      ['Year 9 and up', '4. Pace under noise', 'Keeps accuracy in a room with a clock and other teams in it']
    ] },
    left: { h3: 'If a regional is close', ps: [
      'Run a shuttle round in practice and record where it broke. In our experience the answer is almost always the handover, not the mathematics.',
      'Practise the crossnumber with the clues genuinely split. Doing it with all the clues visible teaches none of the skill the round is testing.'
    ] },
    right: { h3: 'Beyond the team rounds', ps: [
      'Individual papers ask for something different, and the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lays them all out.',
      'Pupils who like the relay pace often like <a class="ag-inline-link" href="/courses/competitive-programming-for-teens-course">competitive programming</a>, which is the same sport with a compiler.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses behind a reliable team',
    lede: 'Grouped by what a squad member needs, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Speed and accuracy', sub: 'The foundation of every round', courses: [
        { code: 'TMC / A / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Arithmetic that arrives rather than being worked out.' },
        { code: 'TMC / A / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speed methods for the calculation underneath.' },
        { code: 'TMC / A / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating with none.' }
      ] },
      { num: 'II', h3: 'Junior squads', sub: 'Years 8 and 9', courses: [
        { code: 'TMC / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Ratio, algebra and geometry taught to reliability.' },
        { code: 'TMC / B / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For the questions that do not announce a method.' },
        { code: 'TMC / B / 03', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'The school course, taught to the board in use.' }
      ] },
      { num: 'III', h3: 'Senior squads', sub: 'Years 12 and 13', courses: [
        { code: 'TMC / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Sixth-form content at the pace a group round needs.' },
        { code: 'TMC / C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'The qualification running alongside.' },
        { code: 'TMC / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Including how quickly reliability drains in a chain.' }
      ] },
      { num: 'IV', h3: 'Sideways', sub: 'Same instincts, different tools', courses: [
        { code: 'TMC / D / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'The relay round with a compiler as the marker.' },
        { code: 'TMC / D / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that check the answer you were about to hand over.' },
        { code: 'TMC / D / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and how long a method takes.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Individual teaching for a team sport',
    lede: 'Lessons are live on video from India, where the clock sits five and a half hours ahead of Britain in winter and four and a half in summer. Times are agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For Year 8 and 9 squad members.' },
      { time: 'Later weekday evening', l: 'For sixth-form squads.' },
      { time: 'Weekend morning', l: 'For a longer session on a full set of rounds.' }
    ],
    cells: [
      { h3: 'Accuracy before speed', p: 'We work on getting it right when hurried, which is the thing a chained round actually tests.' },
      { h3: 'Answers said aloud', p: 'Every answer is stated and repeated back, which is the habit that stops shuttle handovers going wrong.' },
      { h3: 'Five to ten learners', p: 'A group is large enough that two methods meet and small enough that every answer is heard.' },
      { h3: 'Our own material', p: 'Practice rounds written by us. UKMT publishes its own past material and that is where the real thing lives.' },
      { h3: 'One to one when needed', p: 'For a squad member with one specific weakness to close before a regional.' },
      { h3: 'Nothing promised', p: 'We cannot register a team or influence selection, and we promise no result.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, built outside any competition. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews left by families, reproduced with nothing changed.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars for families outside India. No registration fee and no minimum number of months.',
    free: ['A full lesson with a teacher', 'An honest read on where the errors come from', 'No card details taken'],
    group: ['Five to ten learners at one level', 'The same teacher every week', 'Work checked and talked through', 'A certificate at the end'],
    one: ['A teacher working with one learner', 'Aimed at one specific weakness', 'Useful in the weeks before a regional final']
  },

  faq: {
    eyebrow: 'Team challenge questions',
    h2: 'What teachers and parents ask',
    items: [
      { q: 'How big is a Team Maths Challenge team?', a: 'Four students, with a maximum of two from the older year group. In England and Wales that means Year 8 and Year 9 with at most two Year 9 pupils; in Scotland S1 to S3; in Northern Ireland Years 9 and 10.' },
      { q: 'What are the rounds?', a: 'The junior challenge has four: The Group, The Crossnumber, The Shuttle and The Relay. The Senior Team Maths Challenge has three, The Group, The Crossnumber and The Shuttle, plus starter questions that do not count towards the score.' },
      { q: 'What is the Shuttle round?', a: 'A round in which each answer feeds into the next question, so a mistake early on carries forward. It is the round that makes the competition about accuracy rather than speed.' },
      { q: 'Why does one small error matter so much?', a: 'Because reliability compounds when steps depend on each other. Four questions each answered correctly nine times out of ten would give 3.6 right on an ordinary paper, but chained they are all correct only about two thirds of the time.' },
      { q: 'When are the senior regional finals?', a: 'UKMT says senior registration opened on Thursday 10 September 2026, regional finals run throughout November 2026, and the national final is in February 2027 with the venue to be confirmed.' },
      { q: 'When is the junior competition?', a: 'UKMT\'s 2026-27 competitions calendar does not list team dates. The cycle the junior page describes is registration in October, regional finals from February to the Easter break, and an invite-only national final in June, so a school should check with UKMT for this season\'s dates.' },
      { q: 'How does a team reach the national final?', a: 'The winning team from a regional final is invited, and UKMT says high scoring second place teams or teams that have shown exceptional teamwork may also be invited. At senior level, high-scoring teams from the regional finals are invited.' },
      { q: 'Can a school enter more than one team?', a: 'At senior level UKMT says a school may enter only one team per regional event. The junior pages we read do not state a limit, so ask UKMT.' },
      { q: 'How should a squad practise?', a: 'By running the rounds, especially the crossnumber with the clues genuinely split between pairs, and by recording where a shuttle chain broke. In practice it is usually the handover rather than the mathematics.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Papers sat alone',
    lede: 'The individual rounds a squad member is likely to sit as well, and the whole season in one table.',
    items: [
      { href: '/ukmt-kangaroo-rounds-practice', label: 'UKMT Kangaroo rounds', p: 'Twenty-five multiple-choice questions in an hour.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'Six written questions for Year 8 and below.' },
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton and Maclaurin', p: 'The intermediate olympiads, split by school year.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the year group and which round a squad member struggles with. The free lesson is a real one, and afterwards we say plainly where the errors are coming from.',
    readFirst: 'Rather read first? The syllabus for each course is on its own <a class="ag-inline-link" href="/courses">course page</a>, the approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> puts the topics in order.',
    note: 'WhatsApp is free from a UK mobile and tends to reach us soonest. Our number is an Indian one, which we state on every page, and no British office exists.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/ukmt-kangaroo-rounds-practice', label: 'Kangaroo rounds' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the accuracy; the school builds the team'
  },

  personalityCss: `
.ag-root.ag-tmc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-tmc .ag-capsule { border-left-width: 4px; border-radius: 0 16px 16px 0; }
.ag-root.ag-tmc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-tmc .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.02em; }
.ag-root.ag-tmc .ag-table th { font-size: 0.93em; }
.ag-root.ag-tmc .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-tmc .ag-three h3 { letter-spacing: -0.011em; }
.ag-root.ag-tmc .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['maximum of two students from the older year group', 'The Group, The Crossnumber, The Shuttle', '65.6 per cent', 'exceptional teamwork', 'Thursday 10 September 2026', 'February 2027', 'Year 8 and Year 9']
};
