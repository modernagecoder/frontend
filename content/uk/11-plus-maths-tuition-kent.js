'use strict';
// 11 plus maths tuition in Kent (ag- maths door by area, UK cluster Phase 1 preview).
// kent.gov.uk returns 403 to us, so nothing is attributed to the council that we did not read in a
// council document. Read on 20 September 2026:
//  - Kent County Council's own Kent Test leaflet for September 2027 entry, mirrored as a PDF by Barton
//    Green Primary (bgpschool.kent.sch.uk): registration in Year 5, opens 1 June 2026, closes midnight
//    1 July 2026; access arrangement requests not accepted after 1 July 2026; Kent primary pupils sit on
//    Thursday 10 September 2026, others on 12 or 13 September 2026 at an allocated centre; decisions
//    emailed after 4pm on Thursday 15 October 2026; "Schools in Medway, Bexley and Bromley are outside
//    the Kent Local Authority area"; an assessment does not guarantee a place. (The leaflet's key-date
//    table calls 1 July 2026 a Tuesday; it is a Wednesday. We print the date, not the weekday.)
//  - Kent County Council's Kent Test Familiarisation Booklet, 2015 edition, mirrored on an irp-cdn host
//    (the current edition sits behind the 403): two booklets, Reasoning and English & Maths; multiple
//    choice with a separate computer-marked answer sheet; the English & Maths test "takes around 1 hour,
//    with 25 minutes for the English section (plus 5 minutes practice) and 25 minutes for the Maths
//    section (plus 5 minutes practice)"; the maths "contains a series of multiple-choice questions
//    covering a variety of topics taught in most schools up to the start of Year 6", with "a small
//    number of questions ... based on things you will have been taught but may be more difficult than
//    you are used to".
//  - Upton Junior School's 2026 Kent Test information (a Kent school restating the council, attributed
//    as such): the writing exercise is 40 minutes including 10 minutes planning and is not marked, but
//    may be used by a local headteacher panel; three standardised scores plus an aggregate, adjusted for
//    age; scores run 69 to 141, highest possible total 423; last year's threshold was 332 with no single
//    score below 108, and the year's threshold is published in October. Thresholds are NOT printed as
//    current: the page says the bar is set afresh each year.
//  - Great Chart Primary School, Ashford: autumn term 2026 starts for children on Wednesday 2 September
//    2026, which makes 10 September the seventh school day of Year 6 there.
//  - National curriculum in England, mathematics programmes of study (gov.uk): Year 5 covers long
//    multiplication for two-digit numbers and short division; Year 6 introduces formal long division,
//    and ratio and proportion and algebra as new sections.
//  - DfE, Key stage 2 attainment, 2025/26 provisional: 75 per cent of pupils met the expected standard
//    in maths, 63 per cent in reading, writing and maths combined.
//  - ONS Census 2021 usual residents for the twelve Kent districts (Nomis), summing to 1,576,077.
// Spine: the paper is sat in the first full week of Year 6, so it can only test Year 5 maths.
// No admissions advice: the page says once, plainly, that admissions are the council's and the schools'.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'KENT TEST', label: '11 plus maths in Kent', blurb: 'The maths on the Kent Test is Year 5 maths, because the paper is sat in the first week of Year 6.' },
  slug: '11-plus-maths-tuition-kent',
  code: 'ktm',
  accent: '#0F4857',
  accentRationale: 'Kent 11 plus maths: a deep teal from the solver (8.17:1 on every paper tint), the only teal in the UK set and far from the London red and the NEA violet',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Kent',
  title: '11 Plus Maths Tuition Kent | Kent Test Maths, Live Online',
  description: 'Live online 11 plus maths tuition for the Kent Test. Why the maths section is Year 5 work, what the council publishes about the paper, and how we teach it.',
  ogDescription: 'The Kent Test is sat in the first week of Year 6, so its maths section can only draw on Year 5 teaching. What that means for how a child should prepare.',
  twitterDescription: 'Kent Test maths, taught online: Year 5 fluency and unfamiliar problems, not Year 6 cramming.',
  pageName: '11 Plus Maths Tuition in Kent',
  webPageDescription: 'Live online mathematics teaching for children in Kent preparing for the Kent Test, built around what Kent County Council publishes about the English and Maths paper and the national curriculum content it can draw on.',
  courseDescription: 'Live online mathematics classes for Kent children in Years 4 and 5 working towards the Kent Test, teaching number fluency and unfamiliar problem solving rather than past-paper repetition.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Kent',
  navLinks: [
    { href: '#paper', label: 'The paper' },
    { href: '#year5', label: 'Why Year 5' },
    { href: '#scores', label: 'Scores' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Kent &middot; Kent Test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Kent',
  lede: 'There is one fact about the Kent Test that changes how a family should prepare, and almost nobody says it out loud: the paper is sat in the first full week of Year 6. A child registered in Year 5 walks into the test having had perhaps six days of Year 6 teaching. Whatever the maths section asks, it cannot be asking about a year of school that has not happened yet. So the work that pays is not racing ahead into Year 6 content. It is making Year 5 arithmetic quick and certain, then practising it on questions the child has never seen in that form before. This page sets out what Kent County Council publishes about the paper, what the maths on it can and cannot be, and how we teach it online.',
  secondaryCta: { href: '#year5', label: 'See what the maths can cover' },
  wa: 'Hello Modern Age Coders, I would like a free class about Kent Test maths for my child.',
  heroNote: 'Maths only &middot; No promises about a threshold &middot; Admissions stay with the council and the schools',
  spec: [
    ['Test', 'The Kent Test, English and Maths paper'],
    ['Maths section', '25 minutes, plus 5 minutes practice'],
    ['Format', 'Multiple choice, separate answer sheet'],
    ['Registered in', 'Year 5, before the summer'],
    ['Sat in', 'The first full week of Year 6'],
    ['Content', 'Maths taught up to the start of Year 6'],
    ['We teach', 'Fluency, then unfamiliar problems'],
    ['We never', 'Predict a threshold or a place']
  ],
  capsuleQ: 'In short',
  capsule: 'The Kent Test is two multiple-choice booklets with a separate answer sheet, one for reasoning and one for English and maths, plus a writing exercise. In the council\'s 2015 familiarisation booklet, the most recent edition we have been able to read, the English and Maths test "takes around 1 hour, with 25 minutes for the English section (plus 5 minutes practice) and 25 minutes for the Maths section (plus 5 minutes practice)", and the maths covers "a variety of topics taught in most schools up to the start of Year 6". For September 2027 entry the council registered children in Year 5 between 1 June and 1 July 2026, Kent primary pupils sat the test on Thursday 10 September 2026, and decisions went out after 4pm on 15 October 2026. Twenty-five minutes of Year 5 arithmetic, asked in unfamiliar ways: that is the target, and it is a teachable one. A first lesson is free; group teaching is USD 100 a month and one to one USD 150.',

  picks: {
    eyebrow: 'Where a Kent child starts',
    h2: 'Three courses that carry the maths',
    lede: 'Choose by how secure the arithmetic is, not by how close the test date feels.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'KENT / 01', title: '11 plus maths preparation', note: 'The core course: number, fractions, measures and the kind of problem that hides its method.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'KENT / 02', title: 'Primary maths, Years 1 to 5', note: 'For a child in Year 4 or early Year 5 whose foundations still wobble under time pressure.' },
      { course: 'mental-maths-mastery-kids', code: 'KENT / 03', title: 'Mental maths, number sense first', note: 'Twenty-five minutes is short. Calculation that happens in the head buys the thinking time.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'What the paper is',
      h2: 'The Kent Test, as the council describes it',
      lede: 'Kent County Council\'s website returns an error to automated readers, so everything below comes from council documents we could actually open, and each is named. Read on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Kent Test for September 2027 entry, from Kent County Council\'s own leaflet', head: ['Stage', 'When', 'Detail as published'], rows: [
          ['Registration', '1 June to midnight 1 July 2026', 'Online at the council\'s Kent Test pages, by a parent of a child then in Year 5. Requests for access arrangements for a disability or special educational need are discussed with the primary school and are not accepted after 1 July 2026.'],
          ['Test day, Kent primaries', 'Thursday 10 September 2026', 'Children at a Kent primary school sit the test in their own school.'],
          ['Test day, everyone else', 'Saturday 12 or Sunday 13 September 2026', 'Children at primary schools outside Kent, or educated at home, sit it at an allocated test centre, notified by email at the end of August.'],
          ['Decisions', 'Thursday 15 October 2026', 'Emailed after 4pm to the address used to register the child.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two booklets, then. The council\'s familiarisation booklet describes one called Reasoning and one called English &amp; Maths, both made of timed, multiple-choice questions, with answers marked on a separate sheet that a computer reads. There is also a writing exercise: Upton Junior School\'s 2026 information for parents, restating the council, gives it 40 minutes including 10 minutes of planning, and says it is not marked but may be used by a local headteacher panel.',
            'The separate answer sheet is worth a sentence of its own, because it is the one part of the format that catches children out. Every answer is a line drawn through a small box next to a number, and the number on the sheet has to match the number of the question. A child who skips a question in the booklet and forgets to skip the box loses everything after it.'
          ],
          right: [
            'Medway is not Kent for this purpose. The council\'s leaflet says plainly that "Schools in Medway, Bexley and Bromley are outside the Kent Local Authority area", and Medway runs its own selective test on its own timetable. A family in Rainham or Strood is not preparing for the same paper as a family in Ashford, and this page is about the Kent one.',
            'One thing this page will not do is advise on admissions. Which schools to name, how oversubscription criteria work, appeals and waiting lists are the council\'s business and each school\'s, published by them and changed by them. We teach the maths.'
          ] },
        { kind: 'source', html: 'Sources: Kent County Council\'s Kent Test leaflet for September 2027 entry, published as a PDF by <a class="ag-inline-link" href="https://www.bgpschool.kent.sch.uk/" rel="noopener" target="_blank">Barton Green Primary School</a>; Kent County Council\'s <em>Kent Test Familiarisation Booklet</em>, 2015 edition; <a class="ag-inline-link" href="https://www.uptonjunior.com/" rel="noopener" target="_blank">Upton Junior School</a>, 2026 Kent Test information for parents. The council\'s own site returns HTTP 403 to us and we have not quoted anything from it that we could not read elsewhere in a council document. Modern Age Coders has no connection with Kent County Council or any grammar school.' }
      ]
    },
    {
      id: 'year5', tint: 'deep', eyebrow: 'The thing nobody says',
      h2: 'It is a Year 5 maths paper, sat in Year 6',
      lede: 'Count the school days. The conclusion is not an opinion about teaching; it is arithmetic on a calendar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Term starts', p: 'At Great Chart Primary School in Ashford, children returned for the autumn term on Wednesday 2 September 2026, after a staff development day on the Tuesday. Kent primaries vary by a day or two, not by a month.' },
          { h3: 'The test lands', p: 'Kent primary pupils sat the Kent Test on Thursday 10 September 2026. At Great Chart that is the seventh school day of Year 6, two half terms before the first Year 6 report.' },
          { h3: 'So the maths is', p: 'Whatever Year 6 teaches, it has not taught it yet. The council\'s booklet says as much: the maths covers "a variety of topics taught in most schools up to the start of Year 6".' }
        ] },
        { kind: 'table', caption: 'Where the national curriculum puts the content, and what that means for the test', head: ['Maths', 'Year taught', 'On a paper sat in week one of Year 6?'], rows: [
          ['Long multiplication, four digits by two', 'Year 5', 'Yes. Taught, practised, and fair game at speed.'],
          ['Short division, four digits by one', 'Year 5', 'Yes, including what to do with the remainder.'],
          ['Equivalent fractions, mixed numbers, thousandths', 'Year 5', 'Yes. The curriculum states that percentages, decimals and fractions are different ways of expressing proportions.'],
          ['Perimeter, area, volume, converting metric units', 'Year 5', 'Yes, usually wrapped inside a word problem.'],
          ['Formal long division by a two-digit number', 'Year 6', 'Not taught yet. A child who can divide sensibly by other means is not behind.'],
          ['Ratio and proportion as a named topic', 'Year 6', 'Not taught yet, though sharing and scaling questions can be met with Year 5 fraction sense.'],
          ['Algebra: formulae, sequences, two unknowns', 'Year 6', 'Not taught yet. This is the section parents drill hardest and need least.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'That last row is where money and evenings go to die. A tutor who starts a Year 5 child on algebra because "the 11 plus has algebra" is teaching for a paper the child will sit a year later, somewhere else. The Kent maths section stretches inside Year 5 ground instead: the council\'s booklet says a small number of questions are "based on things you will have been taught but may be more difficult than you are used to. This is so you can show how you use the maths skills you already have to solve new kinds of problem."',
            'Read that sentence as a syllabus and the work becomes obvious. Known content, unknown shape. Not more topics, but more ways in.'
          ],
          right: [
            'It also explains why past papers alone stop working. A child who has done forty papers has seen forty shapes and learned to recognise them. The test is written to defeat recognition: the same fraction idea arrives as a recipe, a bus timetable, a length of ribbon. Recognition runs out; fluency does not.',
            'The national picture says the foundations are not automatic either. In the Department for Education\'s provisional key stage 2 results for 2025/26, 75 per cent of pupils in England met the expected standard in maths and 63 per cent met it in reading, writing and maths together. Meeting the expected standard is a long way below answering unfamiliar questions against a clock.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics programmes of study</a> (years 5 and 6); <a class="ag-inline-link" href="https://explore-education-statistics.service.gov.uk/find-statistics/key-stage-2-attainment" rel="noopener" target="_blank">Department for Education, key stage 2 attainment, 2025/26 provisional</a>; <a class="ag-inline-link" href="https://www.great-chart.kent.sch.uk/parents/term-dates-2026-27/" rel="noopener" target="_blank">Great Chart Primary School term dates 2026-27</a>; Kent County Council\'s familiarisation booklet, 2015 edition.' }
      ]
    },
    {
      id: 'scores', tint: 'plain', eyebrow: 'How it is scored',
      h2: 'Three standardised scores, and a bar that moves',
      lede: 'Understanding the scoring stops two mistakes: panicking about a summer birthday, and believing anyone who quotes you a target mark.',
      body: [
        { kind: 'two',
          leftH3: 'What standardisation does',
          left: [
            'A child does not get a mark out of forty. They get three standardised scores, one for English, one for maths and one for reasoning, and an aggregate of the three. Standardisation compares a child\'s performance with everyone else\'s on the same test, and then adjusts for age so that a child born in August is not measured against a child born the previous September as though they were the same age.',
            'That adjustment is real and it is arithmetic, not sympathy. It does not make a summer-born child\'s answers better; it stops eleven months of extra life counting as extra ability.'
          ],
          rightH3: 'Why we will not give you a target',
          right: [
            'The qualifying bar is set for each year\'s cohort and published in the autumn, after the papers are marked. Upton Junior School\'s 2026 information told Kent parents last year\'s figures and then said, in as many words, that the current year\'s threshold would be available in October. Numbers from a previous year are history, not a target.',
            'You will find tutors and websites quoting a precise aggregate as though it were a law. Different sites quote different minimums for the same test, which is the usual sign of a number that moves. We teach the maths and let the council publish the bar.'
          ] },
        { kind: 'p', html: 'One more thing follows from the scoring, and it is the reason the maths section deserves separate attention: the aggregate is only part of the picture, because the three scores are reported separately as well. A child who is strong in English and reasoning and shaky in maths is not carried by an average in the way a single mark out of a hundred would carry them. Maths is a third of the reported picture and it is the third that responds fastest to teaching, because arithmetic fluency is trainable in a way that reading speed at ten largely is not.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.uptonjunior.com/" rel="noopener" target="_blank">Upton Junior School</a>, 2026 Kent Test information for parents, restating Kent County Council. We print no threshold: the council publishes it each October.' }
      ]
    },
    {
      id: 'teaching', tint: 'tint', eyebrow: 'What we actually do',
      h2: 'Twenty-five minutes is a skill of its own',
      lede: 'Content, speed and format are three different problems. Most preparation only works on the first.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Fluency first', p: 'Times tables to twelve, halves and doubles, fraction and decimal equivalents, ten per cent of anything. Recalled, not worked out. Every second saved here is a second available for thinking.' },
          { h3: 'Then unfamiliar shapes', p: 'The same idea in a new costume, every week: a fraction question dressed as a recipe, an area question dressed as a garden path, a division question that never says divide.' },
          { h3: 'Then the clock and the sheet', p: 'Working under twenty-five minutes, choosing what to leave, checking the answer-sheet number against the question number. Format practice is short and late, not the whole course.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'A child who cannot decide quickly loses more marks than a child who does not know a topic. In a multiple-choice paper the decision is the work: four options, one right, and often two designed to catch the two commonest errors. We teach children to estimate first and eliminate, because an estimate rules out two options in seconds and turns a hard question into a coin toss at worst.',
            'We also teach when to move on. A twenty-five minute paper punishes stubbornness. Children rehearse leaving a question, marking its number, and coming back, so that on the day it is a habit rather than a decision made in a panic.'
          ],
          right: [
            'What we do not do is promise anything. No provider can know a threshold before it is set, no provider can know a cohort, and a tutor who promises a grammar school place is selling something they do not own. We will tell a family honestly where a child is against Year 5 content, and what a term of work is likely to change.',
            'Nor do we reproduce Kent Test papers. The council publishes its own familiarisation material for that. Our practice questions are written by us, in the same spirit but not the same words, which is also why they cannot be memorised.'
          ] }
      ]
    },
    {
      id: 'kent', tint: 'deep', eyebrow: 'Across the county',
      h2: 'Every district in Kent, and no journey',
      lede: 'Lessons are live and online, so the twelve districts are all the same distance away. Census 2021 usual residents, from the Office for National Statistics.',
      body: [
        { kind: 'table', caption: 'The twelve Kent districts, by population at Census 2021', head: ['District', 'Usual residents', 'Towns families come from'], rows: [
          ['Maidstone', '175,781', 'Maidstone, Staplehurst, Marden, Headcorn'],
          ['Canterbury', '157,429', 'Canterbury, Whitstable, Herne Bay'],
          ['Swale', '151,677', 'Sittingbourne, Faversham, Sheerness'],
          ['Thanet', '140,587', 'Margate, Ramsgate, Broadstairs'],
          ['Ashford', '132,747', 'Ashford, Tenterden, Charing'],
          ['Tonbridge and Malling', '132,201', 'Tonbridge, West Malling, Snodland'],
          ['Sevenoaks', '120,515', 'Sevenoaks, Swanley, Edenbridge'],
          ['Dartford', '116,754', 'Dartford, Greenhithe, Swanscombe'],
          ['Dover', '116,411', 'Dover, Deal, Sandwich'],
          ['Tunbridge Wells', '115,314', 'Royal Tunbridge Wells, Southborough, Paddock Wood'],
          ['Folkestone and Hythe', '109,759', 'Folkestone, Hythe, Romney Marsh'],
          ['Gravesham', '106,902', 'Gravesend, Northfleet, Higham']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Those twelve add to 1,576,077 people, and they are one county with one test and twelve very different journeys to a classroom. A family in Romney Marsh and a family in Dartford have the same registration deadline and nothing like the same options for a Tuesday evening. Online teaching removes that difference entirely: the lesson is the same lesson in Sheerness and in Sevenoaks.',
            'It also removes the quiet cost nobody prices in. An hour of tuition that needs forty minutes of driving each way is a three-hour commitment for the adult and a tired child at the end of it.'
          ],
          right: [
            'Medway, again, is its own authority with its own test, and so are Bexley and Bromley across the boundary. If you live there, the timetable and the paper on this page are not yours, and we will say so in the free lesson rather than take the booking.',
            'We teach children in Kent alongside children in the rest of the <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">United Kingdom</a> and well beyond it. A group is formed by level, not by postcode, which is what makes small groups possible at all at this age.'
          ] },
        { kind: 'source', html: 'Source: Office for National Statistics, Census 2021, usual residents by local authority district, via Nomis. District town lists are ours, not the council\'s.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'When to start',
    h2: 'Four rungs, and the year each one belongs to',
    lede: 'Registration closes at the start of July in Year 5. Work backwards from that, not from the test date.',
    table: { caption: 'From secure arithmetic to a paper that holds no surprises', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 4', '1. Number sense', 'Knows tables to twelve without counting, and can say what half of 37 is without a pencil'],
      ['Early Year 5', '2. Written methods', 'Long multiplication and short division come out right when the numbers are ugly'],
      ['Late Year 5', '3. Unfamiliar problems', 'Reads a wordy question and can say what kind of maths it is before doing any'],
      ['Summer before the test', '4. Clock and format', 'Finishes twenty-five minutes of mixed questions and keeps the answer sheet in step']
    ] },
    left: { h3: 'If you are starting late', ps: [
      'A child who begins in the spring of Year 5 can still gain a great deal, but the order does not change: fluency, then unfamiliar problems, then timing. Skipping to timed papers with shaky tables produces fast wrong answers.',
      'If the arithmetic is genuinely insecure, we will say so, and we will say what six months can reasonably do.'
    ] },
    right: { h3: 'After the test, either way', ps: [
      'The maths does not stop mattering in October. Children carry on with us into secondary work, and many move across into <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where the arithmetic they drilled becomes something they can build with.',
      'For a child who turns out to enjoy the puzzles more than the exam, the Primary Maths Challenge and the UKMT ladder are on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths and coding courses for Kent families',
    lede: 'Arranged by the age the course suits, with the syllabus behind every card.',
    bands: [
      { num: 'I', h3: 'Before the test', sub: 'Years 3 to 5', courses: [
        { code: 'KENT / PREP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 content, taught for unfamiliar questions.' },
        { code: 'KENT / PREP / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The foundations the paper assumes are already there.' },
        { code: 'KENT / PREP / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense rather than tricks, for speed under a clock.' },
        { code: 'KENT / PREP / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating without them.' }
      ] },
      { num: 'II', h3: 'After the test', sub: 'Year 6 and secondary', courses: [
        { code: 'KENT / NEXT / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Pre-algebra and geometry, the ground Year 7 assumes.' },
        { code: 'KENT / NEXT / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'AQA, Edexcel and OCR, taught to the board.' },
        { code: 'KENT / NEXT / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For the child who finishes early and wants harder.' }
      ] },
      { num: 'III', h3: 'Maths through a screen', sub: 'Where maths and code meet', courses: [
        { code: 'KENT / CODE / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way of seeing why a method works.' },
        { code: 'KENT / CODE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'A first language, built on the same logical habits.' },
        { code: 'KENT / CODE / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code, once the ideas are comfortable.' }
      ] },
      { num: 'IV', h3: 'Wider still', sub: 'For families thinking past the test', courses: [
        { code: 'KENT / MORE / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Methods that make mental arithmetic quicker.' },
        { code: 'KENT / MORE / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where the maths goes, a few years later.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A weekly lesson, at an hour a ten-year-old can still think in',
    lede: 'Teaching is live on video from India, which runs five and a half hours ahead of the UK in winter and four and a half in summer. For primary children we keep to early evening UK time and never later.',
    slots: [
      { time: 'Early weekday evening', l: 'Straight after school, while the day is still fresh.' },
      { time: 'Weekend morning', l: 'For families who would rather keep weeknights free.' },
      { time: 'Holiday weeks', l: 'Shorter, more frequent sessions when school is out.' }
    ],
    cells: [
      { h3: 'One teacher, every week', p: 'The same person sees the same mistakes twice and can do something about them.' },
      { h3: 'Parents get the truth', p: 'A short honest note on what went well and what did not, not a score to frame.' },
      { h3: 'Five to ten children', p: 'Enough voices in the room for a child to hear a better method than their own, few enough that nobody hides.' },
      { h3: 'Our own questions', p: 'We write the practice ourselves. No Kent Test paper is reproduced here.' },
      { h3: 'One to one when it helps', p: 'For a specific gap, or for a child who freezes in a group.' },
      { h3: 'No outcome promised', p: 'We teach maths. Places, thresholds and appeals belong to the council and the schools.' }
    ]
  },

  projectsH2: 'What our students go on to build',
  projectsLede: 'Four published projects by students at our school, most of them older than Year 5 and all of them once ten. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Written by parents on our Google profile, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly rate in US dollars, the same everywhere outside India. Nothing to join, nothing to cancel.',
    free: ['A full lesson, taught not sold', 'A frank read on where the maths is', 'No card details taken'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Work marked and talked through', 'A certificate at the end'],
    one: ['One child, one teacher', 'Built around the specific gap', 'Useful in the months before the test']
  },

  faq: {
    eyebrow: 'Kent Test maths questions',
    h2: 'What Kent parents ask us',
    items: [
      { q: 'How long is the maths section of the Kent Test?', a: 'In Kent County Council\'s familiarisation booklet the English and Maths test takes around an hour, with 25 minutes for the English section plus 5 minutes of practice, and 25 minutes for the maths section plus 5 minutes of practice.' },
      { q: 'What maths topics are on the Kent Test?', a: 'The council\'s booklet describes multiple-choice questions covering topics taught in most schools up to the start of Year 6, with a small number of harder questions that use those same skills on unfamiliar problems. In practice that is upper key stage 2 number, fractions, decimals, percentages, measures and shape.' },
      { q: 'Should my child learn Year 6 algebra for the Kent Test?', a: 'It is not the best use of the time. Algebra, ratio and proportion and formal long division are introduced in Year 6 in the national curriculum, and the test is sat in the first full week of Year 6. Depth in Year 5 content beats a thin pass over Year 6 content.' },
      { q: 'When is the Kent Test sat?', a: 'For September 2027 entry, children at Kent primary schools sat it on Thursday 10 September 2026, and children elsewhere on Saturday 12 or Sunday 13 September 2026 at an allocated centre. Registration ran from 1 June to midnight on 1 July 2026, while those children were in Year 5.' },
      { q: 'What score does my child need?', a: 'We do not publish a target. Three standardised scores and an aggregate are reported, adjusted for age, and the qualifying bar is set for each cohort and published by the council in the October after the test. Anyone quoting you a certain number for next year is guessing.' },
      { q: 'Is the Medway Test the same thing?', a: 'No. The council\'s own leaflet says schools in Medway, Bexley and Bromley are outside the Kent local authority area, and Medway runs its own selective test. If you live there, tell us in the free lesson and we will say so.' },
      { q: 'Do you help with school choices or appeals?', a: 'No. Admissions, oversubscription criteria, headteacher assessment and appeals are published by Kent County Council and by each school, and they are the people to ask. We only teach the maths.' },
      { q: 'Do you use real Kent Test papers?', a: 'No. We write our own practice questions. The council publishes its own familiarisation material, which is the right place for the exact format.' },
      { q: 'When should a child start?', a: 'Year 4 or early Year 5 if you have the choice, because fluency takes months and cannot be hurried. Starting in the spring of Year 5 still helps, as long as the order is fluency, then unfamiliar problems, then timing.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. After that a place in a group is USD 100 a month and one to one is USD 150 a month, with nothing to pay to join and no term you are locked into.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for families in Kent and the south east',
    lede: 'The national version of this page, the competitions a keen mathematician grows into, and the rest of the UK.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national page, covering GL and CEM style papers.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'From the Primary Maths Challenge upwards, month by month.' },
      { href: '/best-coding-class-in-london', label: 'Coding classes in London', p: 'For families over the boundary, or moving.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for UK children', p: 'What a primary-age child learns first, and in what order.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page we publish.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Questions worth asking any provider, ours included.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the school year and what the maths feels like at home. The free lesson is a real lesson: we teach something, and afterwards we tell you honestly what we saw.',
    readFirst: 'Would rather read than ring? The syllabus for each course sits on its own <a class="ag-inline-link" href="/courses">course page</a>, our approach is set out on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows what.',
    note: 'WhatsApp reaches us fastest and costs a UK mobile nothing. Our number is an Indian one, as we say on every page, and we keep no office in Britain.',
    formNote: 'No card, no obligation. One reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-coding-classes-for-kids-uk', label: 'Classes for UK children' },
        { href: '/best-online-coding-classes-uk', label: 'Choosing a class' }
      ] }
    ],
    bottomRight: 'We teach the maths; the council publishes the test'
  },

  personalityCss: `
.ag-root.ag-ktm .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ktm .ag-capsule { border-left-width: 5px; border-radius: 0 10px 10px 0; }
.ag-root.ag-ktm .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ktm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ktm .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-ktm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-ktm .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-ktm .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['up to the start of Year 6', 'seventh school day', '25 minutes for the Maths section', 'Great Chart Primary School', '1,576,077', 'Medway, Bexley and Bromley', 'standardised scores', 'Long multiplication, four digits by two']
};
