'use strict';
// Online maths summer school UK (ag- competition door; UK cluster Phase 2 row UK079).
// Siblings checked first: online-coding-summer-course-uk (coding summer page; nothing reused),
// maths-olympiad-training-uk, intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation (IMC
// dates and olympiad figures live there; not repeated), online-maths-circle-uk and
// maths-masterclasses-for-able-students-uk (this group).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// online-maths-summer-school-uk/ and src/online-maths-circle-uk/):
//  - UKMT, National Mathematics Summer School (ukmt.org.uk/enrichment/summer-schools): "These residential
//    events are one week long."; invitations "sent to students selected at random from the top 1.5% of
//    results from the Intermediate Mathematical Challenge, in Years 10-11 (England, Wales) or S3-S4
//    (Scotland) and Years 11-12 (Northern Ireland)" (written here with "to"); "Students must be aged 14-16
//    years."; "Invitations are sent through schools in March."; "Only one student per school can be invited,
//    and schools cannot send students two years in a row to ensure wider access."; attendees "must be UK
//    passport holders not requiring a visa"; "Usually from the start of August onwards. At present, we run
//    three events a year, running Sunday through to Friday."; topics "Number Theory, Geometry, Combinatorics,
//    Graph Theory, Proof by Induction, Writing Maths, Maths at University, Repetition and Chaos, Polyhedra,
//    Logic Puzzles"; Seniors "one Senior per group of six Juniors", Senior applications "usually go out in
//    December"; "All of our volunteers have Enhanced DBS checks"; IMC results "somewhere around 226,000 in
//    2024", one per school "to hit 843 students in 2024", "108 Juniors in 2024"; "entering IMC as a visiting
//    student may be possible". Venue not named; gender split and school-type split not printed.
//  - University of Oxford Mathematical Institute, PROMYS Europe: "aged 16+"; "running as a 6-week program";
//    anyone "at least 16, pre-university, and ordinarily resident in Europe can apply"; Number Theory;
//    "Applications open in January each year"; partnership of PROMYS, Wadham College, the Mathematical
//    Institute and the Clay Mathematics Institute. Page last updated 19 February 2024 (flagged as such).
//  - King's College London Mathematics School outreach: "two completely free summer schools"; one "a five-day
//    programme aimed at Year 11 students who are planning to take Maths and Physics at A Level".
// Our arithmetic: 108 invitations against about 226,000 IMC results is roughly 1 in 2,100; one week of
// residential maths against a six-week summer holiday. Our own: the five-day online summer plan and every
// worked example in it (pigeonhole pairs to 11, the difference-game parity invariant, the odd-degree
// handshake lemma, induction for 2 to the n beating n squared from n = 5, a rewrite exercise), all answers.
// No fees printed for any programme. Spine: the famous UK maths summer school is a lottery among the top
// 1.5 per cent and lasts one week; the page explains the real thing, then shows what a summer of the same
// topics looks like online for anyone. Lesson family: a selective programme explainer with an open equivalent.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'SUMMER SCHOOL', label: 'Online maths summer school', blurb: 'The UKMT National Mathematics Summer School explained, who is invited, and a five-day summer of the same topics online.' },
  slug: 'online-maths-summer-school-uk',
  code: 'ssu',
  accent: '#514907',
  accentRationale: 'Online maths summer school: a deep harvest gold (#514907), 8.59:1 on #FBF8F2, a late-summer field colour kept dark enough for body links and clear of the circle olive',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Online maths summer school',
  title: 'Online Maths Summer School UK: UKMT Summer School Explained',
  description: 'The UKMT National Mathematics Summer School explained: who is invited from the IMC, ages, dates and topics, plus an online maths summer school plan for anyone.',
  ogDescription: 'UKMT invites about 108 students a year, chosen by lottery from the top 1.5% of the IMC. How it works, and a five-day online summer of the same topics.',
  twitterDescription: 'UKMT summer school, PROMYS Europe and free university summer schools explained, with an online maths summer plan.',
  pageName: 'Online Maths Summer School in the UK',
  webPageDescription: 'A guide to UK maths summer schools, built from UKMT, University of Oxford and King\'s Maths School pages, with an original five-day online summer programme of olympiad-style topics.',
  courseDescription: 'Live online olympiad-style maths over the summer for pupils aged 11 to 17: number theory, combinatorics, graph theory, induction and writing proofs, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths summer school',
  navLinks: [
    { href: '#ukmt', label: 'UKMT summer school' },
    { href: '#odds', label: 'Who is invited' },
    { href: '#others', label: 'Other programmes' },
    { href: '#week', label: 'A five-day plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Summer enrichment &middot; Ages 11 to 17 &middot; UK-wide, online',
  h1: 'Online maths summer school in the UK',
  lede: 'The UK\'s best known maths summer school, the UKMT National Mathematics Summer School, is a free week away that students cannot apply for: invitations go by lottery to a small share of top scorers in the Intermediate Mathematical Challenge. Modern Age Coders is not connected with UKMT. Over the summer we teach the same kind of maths, number theory, combinatorics, graphs, induction and proof writing, live online through our olympiad and competition course, for pupils aged 11 to 17, as a group or 1-on-1. This page explains the UKMT summer school from UKMT\'s own pages, lists other programmes, and lays out a five-day online summer plan with worked examples.',
  secondaryCta: { href: '#week', label: 'See the five-day plan' },
  wa: 'Hello Modern Age Coders, I would like a free summer maths lesson for my child.',
  heroNote: 'UKMT, Oxford and King\'s pages read 31 October 2026 &middot; Not linked to UKMT or any summer school',
  spec: [
    ['UKMT summer school', 'Residential, one week'],
    ['Who is invited', 'A lottery among the top 1.5% of IMC scores'],
    ['Ages', '14 to 16'],
    ['Invitations', 'Through schools, in March'],
    ['When', 'Usually from the start of August'],
    ['Our summer maths', 'Live online, open to all'],
    ['Our ages', '11 to 17'],
    ['Format', 'Group of 15 to 20, or 1-on-1']
  ],
  capsuleQ: 'What is the UKMT maths summer school, and how do students get in?',
  capsule: 'The National Mathematics Summer School is a one-week residential event run by the UK Mathematics Trust for students aged 14 to 16. Nobody applies: UKMT sends invitations through schools in March to students chosen at random from the top 1.5 per cent of Intermediate Mathematical Challenge results, in Years 10 to 11 in England and Wales, S3 to S4 in Scotland and Years 11 to 12 in Northern Ireland, with only one student per school. UKMT says it usually runs three events a year from the start of August. Modern Age Coders has no link with UKMT; we teach summer school topics live online on our olympiad course to any pupil aged 11 to 17, in groups of 15 to 20 or 1-on-1.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for a summer of maths',
    lede: 'Choose by age and appetite. Each card opens a syllabus you can compare with the summer school topic list.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'SSU / 01', title: 'Olympiad and summer school topics', note: 'Number theory, combinatorics, geometry, graphs and induction, with written solutions, for ages 13 to 17.' },
      { course: 'middle-school-math-competitions-course', code: 'SSU / 02', title: 'Junior competition maths', note: 'Puzzle-rich problem solving for ages 11 to 14, the years before an IMC score counts.' },
      { course: 'maths-through-coding', code: 'SSU / 03', title: 'Maths through coding', note: 'A summer project that uses Python to explore patterns, for ages 10 to 15 who like both.' }
    ]
  },

  sections: [
    {
      id: 'ukmt', tint: 'tint', eyebrow: 'UKMT summer school',
      h2: 'What happens at the UKMT National Mathematics Summer School?',
      lede: 'A week of maths sessions, problem solving in groups and evening activities, run by volunteers who are often maths teachers or former attendees. The table sets out the facts as UKMT publishes them.',
      body: [
        { kind: 'table', caption: 'UKMT National Mathematics Summer School, from UKMT\'s summer schools page read 31 October 2026', head: ['Question', 'What UKMT says'], rows: [
          ['What is it?', 'Residential events, "one week long", for young people with an interest in maths'],
          ['When?', '"Usually from the start of August onwards"; three events a year, Sunday to Friday'],
          ['Ages and years', '14 to 16; Years 10 to 11 in England and Wales, S3 to S4 in Scotland, Years 11 to 12 in Northern Ireland'],
          ['How are students chosen?', 'At random from the top 1.5% of Intermediate Mathematical Challenge results'],
          ['How do invitations arrive?', '"Invitations are sent through schools in March"'],
          ['Limits', 'One student per school; a school cannot send students two years in a row'],
          ['Eligibility', 'UK passport holders not requiring a visa, with UK-based emergency contacts'],
          ['Who teaches?', 'Volunteers, with Enhanced DBS checks and safeguarding training'],
          ['Topics', 'Number Theory, Geometry, Combinatorics, Graph Theory, Proof by Induction, Writing Maths, Maths at University, Repetition and Chaos, Polyhedra, Logic Puzzles and more']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Seniors: going back a second time',
          left: [
            'UKMT invites past Juniors to apply to return as Seniors, with "one Senior per group of six Juniors". Volunteers highlight suitable students, and Senior applications "usually go out in December".',
            'Seniors get more specialised sessions that push beyond the secondary curriculum into university topics.'
          ],
          rightH3: 'If the school does not enter the IMC',
          right: [
            'UKMT\'s answer is that "entering IMC as a visiting student may be possible" at another local school, which is under no obligation to agree.',
            'For pupils whose school does enter, the first job each year is simply to sit the Intermediate Challenge, which our <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">intermediate olympiad page</a> covers.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ukmt.org.uk/enrichment/summer-schools" rel="noopener" target="_blank">UK Mathematics Trust, National Mathematics Summer School</a>, read 31 October 2026. UKMT does not charge invited students in what we read; we print no fees for any programme. Modern Age Coders is not connected with UKMT.' }
      ]
    },
    {
      id: 'odds', tint: 'deep', eyebrow: 'Who is invited',
      h2: 'How many students get a UKMT summer school place?',
      lede: 'Very few, and luck plays a large part. UKMT publishes its own 2024 figures, and they explain why a high scorer can miss out.',
      body: [
        { kind: 'ol', items: [
          'UKMT starts with all Intermediate Mathematical Challenge results: "somewhere around 226,000 in 2024".',
          'It takes the top 1.5 per cent of scorers in the eligible years.',
          'It selects one student at random from each school, which in 2024 gave 843 students, leaving out schools that sent someone the previous year.',
          'A second lottery chooses the final invitations: "108 Juniors in 2024".',
          'If a student declines, the place goes by lottery to another school and student.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our arithmetic on those figures',
          left: [
            '108 invitations against about 226,000 results is roughly one invitation for every 2,100 results, by our calculation. Even among the 843 shortlisted after the one-per-school step, about one in eight was invited.',
            'UKMT is open about why: it wants wider access, so it spreads places across schools rather than taking the top scores.'
          ],
          rightH3: 'What that means for a family',
          right: [
            'A summer school invitation is a lovely surprise, not a plan. A strong scorer from a school with several strong scorers may never be the one drawn.',
            'If your child loves the kind of maths on that topic list, it makes sense to find a way to do it every summer, invited or not.'
          ] },
        { kind: 'source', html: 'Figures quoted from UKMT\'s summer school FAQ, read 31 October 2026. The one-in-2,100 and one-in-eight ratios are our own arithmetic on UKMT\'s numbers.' }
      ]
    },
    {
      id: 'others', tint: '', eyebrow: 'Other programmes',
      h2: 'What other maths summer schools are there for UK students?',
      lede: 'A handful of university-linked programmes, each with its own age and entry rule. We list only what the organisers say on their own pages, and we print no fees.',
      body: [
        { kind: 'table', caption: 'Other maths summer programmes open to UK students, from the organisers\' pages read 31 October 2026', head: ['Programme', 'Who for', 'Length', 'Entry'], rows: [
          ['PROMYS Europe (with the University of Oxford Mathematical Institute, Wadham College and the Clay Mathematics Institute)', 'At least 16, pre-university, ordinarily resident in Europe', 'A 6-week programme of intensive number theory', 'Application with problems; applications open each January'],
          ['King\'s College London Mathematics School summer school', 'Year 11 students planning A level Maths and Physics', 'Five days', 'King\'s says its summer schools are completely free'],
          ['UKMT National Mathematics Summer School', 'Ages 14 to 16, by year group', 'One week, residential', 'Invitation only, by lottery']
        ] },
        { kind: 'p', mt: true, html: 'Oxford\'s PROMYS Europe page was last updated in February 2024, so check the programme\'s own site for the current year. There are also paid commercial summer camps in maths and coding; we do not review or price them here. For coding over the holidays, our <a class="ag-inline-link" href="/online-coding-summer-course-uk">online coding summer course</a> page covers the options.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach/promys-europe" rel="noopener" target="_blank">University of Oxford, PROMYS Europe</a>; <a class="ag-inline-link" href="https://www.kingsmathsschool.com/outreach/outreach-for-students" rel="noopener" target="_blank">King\'s Maths School, outreach for students</a>. We are independent of both.' }
      ]
    },
    {
      id: 'week', tint: 'tint', eyebrow: 'A five-day plan',
      h2: 'What could an online maths summer school week cover?',
      lede: 'Here is a five-day plan we wrote around topics on UKMT\'s own list, with one worked example a day. It is our programme, not UKMT\'s, and it suits ages 13 to 17; younger pupils take each day more slowly.',
      body: [
        { kind: 'table', caption: 'Our five-day online summer plan', head: ['Day', 'Topic', 'The idea', 'One problem (ours)'], rows: [
          ['1', 'Combinatorics: the pigeonhole principle', 'More objects than boxes forces a shared box', 'Pick any six numbers from 1 to 10; show two of them add to 11'],
          ['2', 'Logic: invariants', 'Find what never changes', 'The difference game on 1 to 10, below'],
          ['3', 'Graph theory', 'Count from both ends', 'Show the number of people with an odd handshake count is even'],
          ['4', 'Proof by induction', 'One step, then every step', 'Show 2 to the power n exceeds n squared from n = 5 onwards'],
          ['5', 'Writing maths', 'A solution is for a reader', 'Rewrite a correct but muddled solution so a stranger can follow it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Day 1 and Day 2, worked',
          left: [
            'Pigeonhole: split 1 to 10 into the five pairs 1 and 10, 2 and 9, 3 and 8, 4 and 7, 5 and 6. Each pair adds to 11. Six numbers in five pairs means two land in the same pair, and those two add to 11.',
            'Invariant: write 1 to 10 on a board. Repeatedly rub out two numbers and write their difference. Can the last number be 0? The sum starts at 55, which is odd. Replacing a and b by their difference changes the sum by an even amount, so the sum stays odd, and the last number is odd. It can never be 0.'
          ],
          rightH3: 'Day 3 and Day 4, worked',
          right: [
            'Graphs: add up everyone\'s handshake count. Each handshake is counted twice, once by each person, so the total is even. A sum of whole numbers is even only if it contains an even number of odd terms. So an even number of people shook an odd number of hands.',
            'Induction: at n = 5, 32 beats 25. If 2 to the n exceeds n squared, then 2 to the n plus 1 exceeds 2n squared, and 2n squared minus (n plus 1) squared equals n squared minus 2n minus 1, which is positive for n of 3 or more. So the claim passes from each n to the next.'
          ] },
        { kind: 'p', mt: true, html: 'Day 5 matters most. UKMT lists Writing Maths as a session of its own, and olympiad markers reward a clear argument over a bare answer. On our Day 5 each pupil takes one of their own solutions from the week, rewrites it for a reader who was not in the room, and has it read and returned by a teacher. A pupil who does that once a week for a summer writes very differently by September.' },
        { kind: 'source', html: 'The plan, the problems and the worked solutions are ours. The topic names in the second column echo UKMT\'s published topic list.' }
      ]
    },
    {
      id: 'summer', tint: 'deep', eyebrow: 'Shaping a summer',
      h2: 'How should a keen pupil spend a maths summer?',
      lede: 'Our suggestion, not a rule: a little maths often, one long problem a week, and something written down. Holidays should still feel like holidays.',
      body: [
        { kind: 'table', caption: 'A sample six-week summer, our suggestion', head: ['Week', 'Theme', 'Time'], rows: [
          ['1', 'Pigeonhole and counting', 'Two sessions plus an hour of problems'],
          ['2', 'Invariants and games', 'Two sessions plus a written solution'],
          ['3', 'Number theory: remainders and primes', 'Two sessions plus an hour of problems'],
          ['4', 'Graphs and networks', 'Two sessions plus a written solution'],
          ['5', 'Induction and sequences', 'Two sessions plus an hour of problems'],
          ['6', 'Writing week: revise three solutions', 'One session plus rewriting']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If an invitation does come',
          left: [
            'Go. A residential week with other keen students and volunteers who love maths is something online lessons cannot copy, and UKMT\'s pages describe evening activities, a quiet room and pastoral leads.',
            'The weeks around it are where online lessons help, either to prepare or to keep going afterwards.'
          ],
          rightH3: 'For younger pupils',
          right: [
            'Pupils aged 11 to 13 are below the UKMT summer school age. A gentler summer of puzzles and competition maths builds the habits that a later IMC score depends on.',
            'Our <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">junior olympiad page</a> and <a class="ag-inline-link" href="/online-maths-circle-uk">online maths circle page</a> show what that looks like.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four summers, four steps',
    lede: 'A rough path through the summers between Year 7 and Year 11, in our own terms.',
    table: { caption: 'Our summer stages', head: ['Stage', 'Typical year', 'Secure when'], rows: [
      ['1. Puzzles', 'Year 7', 'Enjoys a problem that takes twenty minutes'],
      ['2. Techniques', 'Year 8', 'Recognises pigeonhole, parity and case-splitting'],
      ['3. Arguments', 'Year 9', 'Writes a short proof a classmate accepts'],
      ['4. Olympiad style', 'Year 10 and 11', 'Tackles unseen olympiad problems with a written solution']
    ] },
    left: { h3: 'Why summer works', ps: [
      'Without homework and tests, a pupil can stay with one problem for an afternoon, which is how these topics are really learned.',
      'Short, regular sessions keep the habit through August.'
    ] },
    right: { h3: 'After the summer', ps: [
      'The autumn brings UKMT challenges; see our <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad training guide</a>.',
      'Sixth formers can turn to <a class="ag-inline-link" href="/step-maths-preparation">STEP preparation</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for a maths or coding summer',
    lede: 'Grouped by age. Every syllabus is on its course page.',
    bands: [
      { num: 'I', h3: 'Younger pupils', sub: 'Ages 8 to 12', courses: [
        { code: 'UK / SSU / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick, confident number sense.' },
        { code: 'UK / SSU / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A coding summer for ages 8 to 12.' }
      ] },
      { num: 'II', h3: 'Competition maths', sub: 'Ages 11 to 17', courses: [
        { code: 'UK / SSU / 03', slug: 'middle-school-math-competitions-course', title: 'Junior competition maths', blurb: 'Problem solving for ages 11 to 14.' },
        { code: 'UK / SSU / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'The summer school topic list, every week.' },
        { code: 'UK / SSU / 05', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns explored with Python.' }
      ] },
      { num: 'III', h3: 'Sixth form', sub: 'Ages 16 to 18', courses: [
        { code: 'UK / SSU / 06', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'Admissions maths for future maths students.' },
        { code: 'UK / SSU / 07', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'A head start before Year 12.' },
        { code: 'UK / SSU / 08', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A coding summer for ages 13 to 18.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How summer lessons run',
    h2: 'Live sessions through the holidays',
    lede: TIMING + ' In the holidays a 1-on-1 plan can meet more often than once a week if a pupil wants a concentrated summer. Lessons are booked in UK time, and our teachers in India adjust to the UK day.',
    slots: [
      { time: 'Weekday morning', l: 'Holiday sessions while school is out.' },
      { time: 'Weekday afternoon', l: 'Group batches by stage.' },
      { time: 'Weekend morning', l: 'For families away during the week.' }
    ],
    cells: [
      { h3: 'One topic a week', p: 'A summer theme per week, built from first ideas to hard problems.' },
      { h3: 'Problems between sessions', p: 'A short set to try alone, discussed at the next session.' },
      { h3: 'Writing counts', p: 'At least one full written solution each week, read by the teacher.' },
      { h3: 'Group or 1-on-1', p: '15 to 20 pupils at one stage, or a single pupil.' },
      { h3: 'Away for a week', p: 'Holidays are expected; sessions move rather than vanish.' },
      { h3: 'Into the autumn', p: 'The same group can carry on when term starts.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Things our students made in maths and code. More are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from our Google profile, quoted exactly.',

  fees: {
    h2: 'Fees for summer maths',
    lede: 'Billed monthly, so a family can book just the summer months and stop in September, or carry on. The first session is free.',
    free: ['A taster session on one summer topic', 'Advice on stage and group', 'Only a phone number to book'],
    group: ['15 to 20 pupils at one stage', 'A weekly topic and problem set', 'Written solutions read and returned', 'Continues into term if wanted'],
    one: ['One pupil, one teacher', 'Sessions as often as the summer allows', 'Topics chosen around the pupil']
  },

  faq: {
    eyebrow: 'Summer school questions',
    h2: 'What families ask about maths summer schools',
    items: [
      { q: 'What is the UKMT summer school?', a: 'The National Mathematics Summer School, a one-week residential event run by the UK Mathematics Trust for students aged 14 to 16. UKMT says it runs three events a year, Sunday to Friday, usually from the start of August.' },
      { q: 'How do you get into the UKMT summer school?', a: 'By invitation only. UKMT chooses students at random from the top 1.5 per cent of Intermediate Mathematical Challenge results in the eligible years, one per school, and sends invitations through schools in March.' },
      { q: 'Can I apply for the UKMT national maths summer school?', a: 'No. There is no application for Juniors; the selection is by lottery from IMC results. Past attendees can later apply to return as Seniors, with applications usually going out in December.' },
      { q: 'How many students go to UKMT summer school?', a: 'UKMT says it invited 108 Juniors in 2024, chosen from 843 students shortlisted one per school from the top 1.5 per cent of about 226,000 IMC results. By our arithmetic that is roughly one invitation per 2,100 results.' },
      { q: 'What do students do at the UKMT summer school?', a: 'Maths sessions on topics such as number theory, geometry, combinatorics, graph theory, proof by induction and writing maths, plus group problem solving and evening activities. Volunteers, often maths teachers, lead the sessions.' },
      { q: 'Are there other maths summer schools in the UK?', a: 'Yes. PROMYS Europe, a partnership including the University of Oxford\'s Mathematical Institute, runs a six-week number theory programme for students aged 16 and over living in Europe, and King\'s College London Mathematics School runs free summer schools including a five-day programme for Year 11.' },
      { q: 'Is there an online maths summer school for UK students?', a: 'We teach summer school topics live online for ages 11 to 17, open to anyone and not by invitation. It is our own programme, not a UKMT event, and it can continue into term if a pupil enjoys it.' },
      { q: 'My child is 12. Is there anything for them?', a: 'The UKMT summer school is for ages 14 to 16, so not yet. A summer of puzzles and junior competition maths builds the habits a later Intermediate Challenge score needs, and that is what our junior groups do.' },
      { q: 'Are you linked to UKMT?', a: 'No. We describe UKMT\'s summer school from its own pages so families understand it. We are not connected with UKMT, PROMYS Europe, the University of Oxford or King\'s.' },
      { q: 'When do summer lessons run?', a: TIMING + ' Holiday times are agreed in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for the summer and beyond',
    lede: 'Coding summers, circles, masterclasses and competitions.',
    items: [
      { href: '/online-coding-summer-course-uk', label: 'Online coding summer course', p: 'A holiday of real coding projects.' },
      { href: '/online-maths-circle-uk', label: 'Online maths circles', p: 'Long problems with the same group all year.' },
      { href: '/maths-masterclasses-for-able-students-uk', label: 'Maths masterclasses', p: 'The Royal Institution series explained.' },
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Intermediate olympiads', p: 'Cayley, Hamilton and Maclaurin, after the IMC.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'Every UKMT round in one table.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub.' }
    ]
  },

  start: {
    h2: 'Book a free summer session',
    lede: 'Let us know your child\'s school year and which topics sound exciting. We teach one summer-style session, then suggest a group or a 1-on-1 plan for the holidays.',
    readFirst: 'Reading first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a session from start to finish.',
    note: 'Message us on WhatsApp for the quickest answer. Our team replies from India using a +91 number.',
    formNote: 'There is no charge to book and no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Summer', links: [
        { href: '/online-coding-summer-course-uk', label: 'Coding summer course' },
        { href: '/online-maths-circle-uk', label: 'Maths circles' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'The summer school topic list, open to every pupil'
  },

  personalityCss: `
.ag-root.ag-ssu .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ssu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ssu .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ssu .ag-table th:first-child { width: 24%; }
.ag-root.ag-ssu .ag-table caption { text-align: left; letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'UKMT National Mathematics Summer School (read 31 October 2026): residential, one week long; invitations at random from the top 1.5% of IMC results; Years 10 to 11 England and Wales, S3 to S4 Scotland, Years 11 to 12 Northern Ireland; ages 14 to 16; invitations through schools in March; one per school, not two years in a row; UK passport holders; usually from the start of August, three events a year Sunday to Friday; topic list; one Senior per six Juniors, Senior applications in December; Enhanced DBS; 2024 figures about 226,000 IMC results, 843 shortlisted, 108 Juniors; visiting-student IMC entry may be possible. University of Oxford, PROMYS Europe: 16+, pre-university, resident in Europe, 6-week number theory programme, applications open in January (page updated February 2024). King\'s Maths School: two free summer schools, a five-day programme for Year 11 planning A level Maths and Physics.',
    localProject: 'A lottery among the top 1.5 per cent. The page tabulates the UKMT National Mathematics Summer School from UKMT\'s own FAQ, walks through the 2024 selection in five steps with our ratio of about one invitation per 2,100 results, lists PROMYS Europe and King\'s free summer school by their own pages, and lays out an original five-day online plan with worked pigeonhole, invariant, handshake-parity and induction proofs, then a six-week summer schedule. Lesson family: a selective programme explainer with an open equivalent.',
    requiredMentions: ['top 1.5% of Intermediate Mathematical Challenge results', 'Invitations are sent through schools in March', 'somewhere around 226,000 in 2024', '108 Juniors in 2024', 'one Senior per group of six Juniors', 'Usually from the start of August onwards', 'entering IMC as a visiting student may be possible', 'PROMYS Europe', 'difference game'],
    sources: [
      { claim: 'UKMT National Mathematics Summer School: format, selection, eligibility, dates, topics, Seniors, 2024 figures.', url: 'https://ukmt.org.uk/enrichment/summer-schools' },
      { claim: 'University of Oxford, PROMYS Europe: ages, six weeks, number theory, residence rule, January applications, partners.', url: 'https://www.maths.ox.ac.uk/outreach/promys-europe' },
      { claim: 'King\'s College London Mathematics School: two free summer schools, five-day Year 11 programme.', url: 'https://www.kingsmathsschool.com/outreach/outreach-for-students' }
    ],
    rejectedClaims: [
      'Fees for PROMYS Europe or any commercial camp: not printed, under the no-other-provider-prices rule.',
      'UKMT\'s gender split and state or independent school split of attendees: not printed (no gender statistics).',
      'The UKMT summer school venue: a named school; not printed.',
      'The second King\'s summer school, defined by gender: not described.',
      'PROMYS Europe dates for 2027: the Oxford page dates from February 2024; readers are sent to the programme.',
      'Any UKMT affiliation, endorsement or route from our classes into the summer school: none; the page says invitations come only from IMC results.'
    ]
  }
};
