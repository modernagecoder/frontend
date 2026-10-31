'use strict';
// 11 plus maths tuition in Wiltshire (ag- maths door by area, UK cluster row UK060).
// wiltshire.gov.uk returned HTTP 403 to curl (also recorded in uk-map.tsv) and the Salisbury girls' grammar school
// host (swgs.wilts.sch.uk) returned 403: neither retried. Because the council's own test arrangements could not be
// read, the page names no school and describes "the boys' grammar school in Salisbury" generically.
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// 11-plus-maths-tuition-wiltshire/):
//  - The boys' grammar school's Year 7 admissions page: "a selective boys' grammar school, with responsibility for
//    setting its own testing and admission requirements"; test provider Quest; 2027 entry timetable (11+
//    applications opened Wednesday 25 March 2026, closed Friday 3 July 2026; LA applications open "Monday 1
//    September 2026" (1 September 2026 is a Tuesday, so the page prints the date without a weekday); test Saturday 26 September 2026; result letters Tuesday 6 October 2026; LA close Friday 31
//    October 2026; National Offer Day Monday 1 March 2027); 2028 entry timetable (opens Monday 22 March 2027,
//    closes Friday 2 July 2027, test Saturday 25 September 2027, results mid-October 2027, LA close 31 October
//    2027, National Offer Day 1 March 2028).
//  - The school's Information Leaflet for entry in September 2028 ("Last updated: 13.10.26"): "Paper 1: English and
//    Verbal Problem Solving: Approximately 45 minuets" and "Paper 2: Maths and Non-Verbal Problem Solving:
//    Approximately 45 minuets" (the school's spelling; the page writes minutes); total about 1 hour 30 minutes,
//    break between; "No mobile phones, smart watches, timers or any other electronic devices"; sit once; papers
//    "prepared by Quest"; "papers from previous years will not be made available"; marked centrally by Quest,
//    standardised by age; "The raw scores attained by candidates are not supplied to the School"; qualifying
//    standard "determined by the headteacher in consultation with the School Governing Body"; pupil premium
//    standard "set at 10% lower"; results by Monday 11 October 2027; tutors "entirely a matter for parental
//    choice" and "a tutor's opinion will have no bearing on any subsequent appeal"; advice to name the school
//    first; Wiltshire Council coordinates offers; affected-performance letters by Friday 1 October 2027.
//  - Quest Assessments, the school's 11+ assessment page for September 2028 entry: two papers in one session, each
//    45 minutes; "All questions are multiple choice, with your child selecting from a set of options (usually five:
//    A, B, C, D or E)"; OMR sheet, horizontal line through a box; "A recording will play before, during, and after
//    each paper with instructions."; free familiarisation booklets for English, maths, VR and NVR with a practice
//    OMR sheet; free Atom Home for pupil premium candidates; "Quest Assessments is part of the education company
//    Atom Learning".
//  - Department for Education, national curriculum in England, primary (assets.publishing.service.gov.uk), Year 5
//    fractions: "recognise the per cent symbol (%) and understand that per cent relates to 'number of parts per
//    hundred'" and percentage and decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5.
// Our own, labelled: the percentage examples, practice set, pacing plan. Spine: the 2028 test is already published,
// two years ahead: maths shares one 45-minute paper with non-verbal problem solving, five options, a recording
// paces the room and no watch is allowed. Lesson family: per cent as hundredths, and the Year 5 fraction and
// decimal equivalents used to find a percentage of an amount.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'WILTSHIRE: SALISBURY', label: '11 plus maths in Wiltshire', blurb: 'Salisbury\'s boys\' grammar test for 2028 entry is already set out: maths shares a 45-minute Quest paper with non-verbal problem solving.' },
  slug: '11-plus-maths-tuition-wiltshire',
  code: 'ptw',
  accent: '#256668',
  accentRationale: 'Wiltshire 11 plus: a chalk-stream teal (#256668), 6.36:1 on #FBF8F2 and 5.48:1 on the deepest paper tint, greener than the IB teals and lighter than the Kent page so the Salisbury page has its own colour',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Wiltshire',
  title: '11 Plus Maths Tuition Wiltshire | Salisbury 11 Plus for 2028',
  description: '11 plus maths tuition in Wiltshire: the Salisbury boys\' grammar test for 2028 entry, its Quest maths and non-verbal paper, dates, scoring and percentages.',
  ogDescription: 'The Salisbury eleven plus for September 2028 entry sits on Saturday 25 September 2027. Maths shares one 45-minute paper. Here is what that means.',
  twitterDescription: 'Salisbury eleven plus, 2028 entry: two Quest papers, five options per question, a recording to pace the room, no watches. And a lesson on per cent.',
  pageName: '11 Plus Maths Tuition in Wiltshire',
  webPageDescription: 'A guide for Wiltshire families on the maths in the Salisbury boys\' grammar school entrance test for 2027 and 2028 entry, from the school\'s own leaflet and its test provider, with live online maths lessons for Years 5 and 6.',
  courseDescription: 'Live online maths lessons for Wiltshire children in Years 5 and 6, covering upper primary maths for the Salisbury test, with fractions, decimals and percentages taught as one connected idea.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus in Wiltshire',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#calendar', label: 'Dates' },
    { href: '#standard', label: 'Qualifying' },
    { href: '#percent', label: 'Per cent' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Wiltshire &middot; Salisbury eleven plus &middot; Years 5 and 6',
  h1: '11 plus maths tuition in Wiltshire',
  lede: 'Wiltshire\'s grammar schools are in Salisbury, and each sets its own entrance test. The boys\' grammar school has already published its arrangements for September 2028 entry, so a child now in Year 5 can see exactly what is coming: two papers from Quest on Saturday 25 September 2027, with maths sharing the second paper with non-verbal problem solving in about 45 minutes. Every question is multiple choice, usually from five options, and a recording paces the room because no watch or timer is allowed. Modern Age Coders teaches the upper primary maths behind that paper live online, to a class or to one child. This page sets out the format, the dates, how the qualifying standard works, and one topic that repays early work: per cent.',
  secondaryCta: { href: '#papers', label: 'How the two papers split' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child in Wiltshire.',
  heroNote: 'From the school\'s 2028 entry leaflet and its test provider\'s page, read 31 October 2026 &middot; Not connected with any school, Quest or Wiltshire Council',
  spec: [
    ['Where', 'Salisbury, Wiltshire'],
    ['Test set by', 'Each grammar school'],
    ['Boys\' school provider', 'Quest Assessments'],
    ['Maths paper', 'Maths and non-verbal, about 45 minutes'],
    ['Answers', 'Multiple choice, usually five options'],
    ['2028 entry test', 'Saturday 25 September 2027'],
    ['Watches', 'Not allowed; a recording paces the room'],
    ['We teach', 'Year 5 and 6 maths, live online']
  ],
  capsuleQ: 'Is there maths in the Salisbury 11 plus?',
  capsule: 'Yes. The boys\' grammar school in Salisbury sets its own 11 plus, written and marked by Quest Assessments. Its leaflet for September 2028 entry lists two papers: "English and Verbal Problem Solving" and "Maths and Non-Verbal Problem Solving", each of about 45 minutes, on the morning of Saturday 25 September 2027. Quest says every question is multiple choice, usually from five options, marked on an answer sheet. The 2027 entry test was on Saturday 26 September 2026. The girls\' grammar school sets its own test, which we could not read. Modern Age Coders teaches the maths behind the Salisbury paper live online, in a group or 1-on-1, through our 11 plus maths preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Courses for a Salisbury 11 plus year',
    lede: 'Start with the main 11 plus course. A child unsure of number facts may do better beginning with the mental arithmetic course; a child already ahead can go on to lower secondary topics.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'WILTS / 01', title: 'The 11 plus maths course', note: 'Number, fractions, decimals, percentages, shape and data, at the level of a multiple-choice maths paper.' },
      { course: 'mental-maths-mastery-kids', code: 'WILTS / 02', title: 'Number facts without strain', note: 'Halves, quarters, tenths and times tables recalled fast enough to save minutes inside a shared paper.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'WILTS / 03', title: 'Beyond primary maths', note: 'Ratio, simple algebra and geometry for a child already secure at Year 6.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The two papers',
      h2: 'What is in the Salisbury boys\' grammar school 11 plus?',
      lede: 'Two papers sat in one morning session with a short supervised break. The school\'s 2028 entry leaflet gives about 45 minutes each and about an hour and a half in total.',
      body: [
        { kind: 'table', caption: 'The 11 plus for September 2028 entry, from the school\'s leaflet and Quest\'s page', head: ['Paper', 'Content', 'Time', 'Answer format'], rows: [
          ['Paper 1', 'English and verbal problem solving', 'About 45 minutes', 'Multiple choice, usually five options, on an answer sheet'],
          ['Paper 2', 'Maths and non-verbal problem solving', 'About 45 minutes', 'Multiple choice, usually five options, on an answer sheet'],
          ['Between them', 'A short supervised break for a drink, a snack and the toilet', '', ''],
          ['Total', 'About 1 hour 30 minutes of examination time', '', 'Instructions from a recording before, during and after each paper']
        ] },
        { kind: 'source', html: 'Sources: the school\'s <a class="ag-inline-link" href="https://www.bishopwordsworths.org.uk/attachments/download.asp?file=566&amp;type=pdf" rel="noopener" target="_blank">information leaflet for entry in September 2028</a> (updated 13 October 2026) and <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/bishop-wordsworth-school-11" rel="noopener" target="_blank">Quest Assessments\' guidance for the school\'s 11 plus</a>, read 31 October 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Maths shares its paper',
          left: [
            'There is no maths-only paper. Maths and non-verbal problem solving come together in about 45 minutes, so the time a child spends on one is time not spent on the other. The leaflet does not say how the 45 minutes divide between them, and we will not guess.',
            'What a family can work on is speed of recall. A child who knows that a fifth is 20 per cent, or that 7 x 8 is 56, without thinking, leaves more of the paper for the questions that need thought.'
          ],
          rightH3: 'How answers are marked',
          right: [
            'Quest explains that "Rather than writing out answers, your child draws a horizontal line through a box next to their chosen answer." One mark per question unless told otherwise; mistakes are rubbed out fully with a clean eraser.',
            'That has a maths consequence. There is no credit for a method, only for the right box. Checking an answer against the options before marking it is part of the skill.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'No watch, no timer', p: 'The leaflet bans "mobile phones, smart watches, timers or any other electronic devices". Quest says a recording plays before, during and after each paper with the instructions.' },
          { h3: 'One attempt only', p: '"Each candidate may only sit the 11+ examination" for the school once, the leaflet says. There is no second sitting the following year.' },
          { h3: 'No past papers', p: 'The leaflet says: "For security and copyright reasons, papers from previous years will not be made available to parents." Quest\'s free familiarisation booklets show the format.' }
        ] }
      ]
    },
    {
      id: 'calendar', tint: 'deep', eyebrow: 'Two cohorts at once',
      h2: 'When is the Salisbury 11 plus for 2027 and 2028 entry?',
      lede: 'The school publishes two timetables side by side. The 2026 sitting, for September 2027 entry, has already happened; the 2027 sitting, for 2028 entry, is the one today\'s Year 5 will take.',
      body: [
        { kind: 'table', caption: 'The school\'s 11 plus timetables, from its Year 7 admissions page and 2028 leaflet', head: ['Step', 'September 2027 entry', 'September 2028 entry'], rows: [
          ['School 11 plus applications open', 'Wednesday 25 March 2026', 'Monday 22 March 2027'],
          ['School 11 plus applications close', 'Friday 3 July 2026', 'Friday 2 July 2027'],
          ['Local authority applications open', '1 September 2026', '1 September 2027'],
          ['Test day', 'Saturday 26 September 2026', 'Saturday 25 September 2027, morning'],
          ['Results', 'Tuesday 6 October 2026', 'By Monday 11 October 2027, through the school\'s portal'],
          ['Local authority applications close', 'Friday 31 October 2026', '31 October 2027'],
          ['National Offer Day', 'Monday 1 March 2027', '1 March 2028']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two forms, two systems',
          left: [
            'The leaflet asks for the school\'s own online 11 plus registration form first, and says plainly that this "does not replace applying for admission through the LA application form". Offers for Year 7 are coordinated by Wiltshire Council.',
            'Families in Hampshire and Dorset apply through their own councils by the same 31 October deadline, naming the school; their council then passes the preference to Wiltshire.'
          ],
          rightH3: 'If a child is unwell',
          right: [
            'The school must be told by email before the test or by 9.00am on the day. An alternative date needs valid evidence, such as a GP letter, and the leaflet notes that ordinary tiredness after a school trip is not enough.',
            'A parent who believes performance was affected on the day must write to the school by Friday 1 October 2027, with evidence. Circumstances raised after that cannot be considered.'
          ] },
        { kind: 'source', html: 'Source: the school\'s Year 7 admissions page and 2028 entry leaflet, read 31 October 2026. We print a weekday only where the school\'s weekday matches the calendar; some of its listed weekdays do not, so for those dates we give the date alone.' }
      ]
    },
    {
      id: 'standard', tint: '', eyebrow: 'Scores and places',
      h2: 'What score do you need for the Salisbury 11 plus?',
      lede: 'There is no published pass mark. The leaflet says the qualifying standard "is determined by the headteacher in consultation with the School Governing Body", and is set at 10 per cent lower for disadvantage-funded candidates.',
      body: [
        { kind: 'table', caption: 'How the school describes marking and qualifying, 2028 entry leaflet', head: ['Question', 'What the leaflet says'], rows: [
          ['Who marks the papers?', 'Quest, centrally, followed by standardisation by Quest\'s statisticians'],
          ['What is standardisation?', 'Raw scores (questions right) converted by age weighting, using the boy\'s age on the test day'],
          ['What result do parents see?', 'The standardised weighted score from both papers, and whether the qualifying standard was met'],
          ['Can parents see raw scores?', 'No: "The raw scores attained by candidates are not supplied to the School"'],
          ['Is there a lower standard for anyone?', 'For disadvantage-funded candidates, "set at 10% lower than the standard qualifying standard"'],
          ['Does qualifying mean a place?', 'No: if more boys qualify than places, the oversubscription criteria decide'],
          ['Where should the school go on the council form?', 'The school advises first preference, because offers follow the highest preference that can be met']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The 10 per cent rule in plain numbers',
          left: [
            'Our illustration, not the school\'s figures: if a qualifying standard were 100 points on some scale, 10 per cent lower would be 90. The school does not publish its standard, so no real number can be put in the example; the point is only what "10 per cent lower" means arithmetically.',
            'Eligibility follows the leaflet: looked after or previously looked after children, and children recorded for free school meals in the last six years (FSM Ever 6), with evidence.'
          ],
          rightH3: 'What the school says about tutors',
          right: [
            'The leaflet calls private tutoring "entirely a matter for parental choice", says the school and Quest "are not responsible for what is taught", and adds that "a tutor\'s opinion will have no bearing on any subsequent appeal".',
            'It also asks parents to "monitor and limit any activities that might put undue additional pressure" on a child before the test. We take that seriously: our lessons are school maths, paced for a ten-year-old.'
          ] }
      ]
    },
    {
      id: 'percent', tint: 'tint', eyebrow: 'Our lesson family',
      h2: 'How should a Year 5 child think about percentages?',
      lede: 'As hundredths. The Year 5 national curriculum asks pupils to "recognise the per cent symbol (%) and understand that per cent relates to \'number of parts per hundred\'", and to know the percentage and decimal equivalents of a half, a quarter, a fifth, two fifths and four fifths. Everything below is ours, written for this page; none of it is a Quest question.',
      body: [
        { kind: 'table', caption: 'Our table of equivalents worth knowing by heart', head: ['Fraction', 'Decimal', 'Per cent', 'Quick way to find it of an amount (ours)'], rows: [
          ['1/2', '0.5', '50%', 'Halve'],
          ['1/4', '0.25', '25%', 'Halve, then halve again'],
          ['1/5', '0.2', '20%', 'Divide by 10, then double'],
          ['2/5', '0.4', '40%', 'Find 20%, then double'],
          ['4/5', '0.8', '80%', 'Find 20%, then take it away from the whole'],
          ['1/10', '0.1', '10%', 'Divide by 10'],
          ['3/10', '0.3', '30%', 'Find 10%, then multiply by 3']
        ] },
        { kind: 'table', mt: true, caption: 'Worked examples (ours)', head: ['Question (ours)', 'Thinking', 'Answer'], rows: [
          ['What is 25% of 64?', '25% is a quarter; half of 64 is 32, half again is 16', '16'],
          ['A class of 30 has 40% wearing glasses. How many?', '10% of 30 is 3, so 40% is 4 x 3', '12'],
          ['Which is larger, 3/5 or 0.65?', '3/5 is 6/10, which is 0.6, and 0.65 is more than 0.6', '0.65'],
          ['A 200 g bar is 80% chocolate. How many grams are not chocolate?', '100% minus 80% is 20%; 20% of 200 is 40', '40 g'],
          ['Put in order, smallest first: 0.3, 1/4, 28%', 'As hundredths: 30, 25, 28', '1/4, 28%, 0.3']
        ] },
        { kind: 'p', mt: true, html: 'Our practice set. Try each in your head first, then check on paper. (1) 50% of 86. (2) 20% of 45. (3) Which is closest to 1/5: 0.15, 0.21 or 0.3? (4) 75% of 120. (5) 3 out of 25 children walk to school; what percentage is that? (6) Order 0.45, 2/5 and 42%. Answers, ours: (1) 43; (2) 9, because 10% is 4.5; (3) 0.21, since 1/5 is 0.2; (4) 90, because 25% is 30; (5) 12%, since 3/25 = 12/100; (6) 2/5, 42%, 0.45.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this suits a five-option paper',
          left: [
            'Fractions, decimals and percentages written three ways are a natural source of near-miss options. A child who converts everything to hundredths before choosing, as in the ordering example, is rarely caught by an option that looks right.',
            'It is also fast. Finding 10 per cent by dividing by 10 and building from there takes seconds, which matters when maths shares 45 minutes with another kind of reasoning.'
          ],
          rightH3: 'The mistakes we see most',
          right: [
            'Reading 0.3 as smaller than 0.25 because 3 is less than 25. Writing both as hundredths, 30 and 25, fixes it permanently.',
            'Taking 20 per cent as "divide by 20". We teach the fraction first, a fifth, and only then the percentage, so the operation follows from the meaning.'
          ] }
      ]
    },
    {
      id: 'girls', tint: 'deep', eyebrow: 'What we could not read',
      h2: 'What about the girls\' grammar school in Salisbury?',
      lede: 'It sets its own test, separately. Its website, and Wiltshire Council\'s, refused our requests, so this page gives no format, provider or dates for the girls\' test and does not guess.',
      body: [
        { kind: 'two',
          leftH3: 'What to do instead',
          left: [
            'Read the girls\' school\'s own admissions page and leaflet, and Wiltshire Council\'s secondary admissions pages, for the current year. Dates and providers change, and the school is the only reliable source for its own test.',
            'If its test includes maths, the maths in our lessons is the same national curriculum maths in any case. We will ask which school you are applying to and plan around its format once you have read it.'
          ],
          rightH3: 'Why we do not fill the gap',
          right: [
            'Another site\'s summary of a school\'s test is not the school. Rather than repeat claims we could not check at source, we leave the section short and send you to the school.',
            'The same rule runs through every page in this series: facts come from the council, the testing body or the school, read directly, with the date we read them.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'From Year 4 to a late-September test in Year 6',
    lede: 'For 2028 entry the test falls on 25 September 2027, about three weeks into Year 6, and registration closes on 2 July 2027, near the end of Year 5.',
    table: { caption: 'Our pacing plan for a child aiming at the 2027 sitting', head: ['When', 'Maths focus (ours)', 'Secure when'], rows: [
      ['Year 4, summer term', 'Tables to 12 x 12 and tenths as decimals', 'Every table fact and 0.1 to 0.9 are instant'],
      ['Year 5, autumn term', 'Fractions and their equivalents; hundredths', 'Halves, quarters and fifths convert in both directions'],
      ['Year 5, spring term', 'Per cent; written multiplication and division', 'A percentage of an amount takes under half a minute'],
      ['Year 5, summer term', 'Mixed multiple-choice sets; register by 2 July 2027', 'Answers are checked against the options before marking'],
      ['Year 6, September', 'Quest familiarisation booklets and the answer sheet', 'The child has practised a horizontal line through a box']
    ] },
    left: { h3: 'Keeping it in proportion', ps: [
      'More boys usually sit than there are places, and qualifying is not an offer. Most children who sit will go elsewhere.',
      'Secure percentages and fractions will be used in every Year 7 maths room.'
    ] },
    right: { h3: 'Further on', ps: [
      'See our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> for the exam at 16.',
      'For maths and coding contests by month, there is the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding for Wiltshire children',
    lede: 'Arranged by age. Tap a card for the full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary maths', sub: 'Years 3 to 6', courses: [
        { code: 'UK / PTW / 01', slug: '11-plus-maths-preparation-course-uk', title: 'The 11 plus maths course', blurb: 'Upper primary maths at entrance-test pace.' },
        { code: 'UK / PTW / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for children', blurb: 'Equivalents and tables until they are reflex.' },
        { code: 'UK / PTW / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths from Year 1', blurb: 'For a younger brother or sister.' },
        { code: 'UK / PTW / 04', slug: 'ks2-sats-maths-course', title: 'KS2 SATs preparation', blurb: 'The May tests at the end of primary.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Years 6 to 8', courses: [
        { code: 'UK / PTW / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Beyond primary maths', blurb: 'Ratio, algebra and geometry for Years 7 and 8.' },
        { code: 'UK / PTW / 06', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Stretching problems for strong mathematicians.' }
      ] },
      { num: 'III', h3: 'Maths in code', sub: 'Ages 8 and up', courses: [
        { code: 'UK / PTW / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Write a percentage calculator in Python.' },
        { code: 'UK / PTW / 08', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'First steps in logic, with blocks.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, from Salisbury to the Vale of Pewsey',
    lede: TIMING + ' The teaching team works from India, on a clock that never moves: India time is four and a half hours in front of UK time from late March to late October and five and a half hours the rest of the year. Times you book are UK time.',
    slots: [
      { time: 'After school', l: 'An hour that fits the end of a primary day.' },
      { time: 'Weekend morning', l: 'For families with busy weekday evenings.' },
      { time: 'Easter and summer', l: 'Short blocks before registration closes.' }
    ],
    cells: [
      { h3: 'School maths first', p: 'The national curriculum in depth, never a bank of test tricks.' },
      { h3: 'No school run', p: 'The same lesson in Amesbury, Wilton or Tisbury without the drive.' },
      { h3: 'Batch or private', p: 'A batch of 15 to 20 at one stage, or one teacher for your child alone.' },
      { h3: 'Original practice', p: 'Every exercise is ours; none is copied from a Quest booklet.' },
      { h3: 'Plain feedback', p: 'After each block, two lines: what is now secure, what is next.' },
      { h3: 'No promises', p: 'Qualifying and places are for the school and the council alone.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Things built by children from our classes, several of them now teenagers. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From parents, on our Google profile.',

  fees: {
    h2: 'Lesson fees',
    lede: 'A fixed monthly fee in the currency we invoice UK families in, paid as you go with nothing in advance. Lesson one is free.',
    free: ['One real lesson at your child\'s level', 'A frank view of where the maths stands', 'All we need is a phone number'],
    group: ['A batch of 15 to 20 at one stage', 'The same teacher all year', 'Homework marked and explained', 'A certificate at the close'],
    one: ['One child with one teacher', 'Built around the Salisbury format', 'Right for a child who rushes or freezes']
  },

  faq: {
    eyebrow: 'Wiltshire 11 plus questions',
    h2: 'What Wiltshire parents ask',
    items: [
      { q: 'Is there a maths paper in the Salisbury 11 plus?', a: 'At the boys\' grammar school, maths is half of Paper 2, called Maths and Non-Verbal Problem Solving, which lasts about 45 minutes. There is no maths-only paper.' },
      { q: 'When is the Salisbury eleven plus for 2028 entry?', a: 'The school\'s leaflet gives the morning of Saturday 25 September 2027. Its 11 plus applications open on Monday 22 March 2027 and close on Friday 2 July 2027.' },
      { q: 'Who sets the Salisbury boys\' grammar school test?', a: 'Quest Assessments, which the provider says is part of Atom Learning. Quest prepares, marks and standardises the papers, and the school sets the qualifying standard.' },
      { q: 'Are the questions multiple choice?', a: 'Every one, according to the provider, normally with five lettered choices. A child answers by drawing a horizontal line through the box beside the chosen letter.' },
      { q: 'Can my son wear a watch in the 11 plus?', a: 'No. The leaflet bans mobile phones, smart watches, timers and other electronic devices. Quest says a recording gives instructions before, during and after each paper.' },
      { q: 'What is the pass mark for the Salisbury 11 plus?', a: 'None is published. The headteacher sets the qualifying standard with the governing body, and it is 10 per cent lower for disadvantage-funded candidates. Raw scores are not given to the school or to parents.' },
      { q: 'Are there Salisbury 11 plus past papers?', a: 'No. The school says papers from previous years will not be made available. Quest publishes free familiarisation booklets in English, maths, verbal and non-verbal reasoning, with a practice answer sheet.' },
      { q: 'Does qualifying guarantee a place?', a: 'No. If more boys qualify than there are places, the oversubscription criteria decide, and the school advises naming it as first preference on the council form.' },
      { q: 'Do I need an 11 plus tutor in Salisbury?', a: 'The school calls tutoring entirely a matter for parental choice and says a tutor\'s opinion has no bearing on an appeal. We teach curriculum maths and make no promise about any outcome.' },
      { q: 'When are your maths lessons?', a: TIMING + ' Booking times are in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Wiltshire families',
    lede: 'Coding nearby, other selective areas, and our UK hub.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'How 11 plus maths works across England.' },
      { href: '/11-plus-maths-tuition-wirral', label: '11 plus maths on the Wirral', p: 'Another test pairing maths with non-verbal reasoning.' },
      { href: '/coding-classes-in-wiltshire', label: 'Coding classes in Wiltshire', p: 'Python and Scratch across the county.' },
      { href: '/best-coding-class-in-salisbury', label: 'Coding classes in Salisbury', p: 'For families in the city itself.' },
      { href: '/ai-and-programming-classes-in-swindon', label: 'Programming in Swindon', p: 'For north Wiltshire.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages, gathered.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Give us your child\'s year group and the school in mind. If it is the boys\' grammar school, the first lesson will practise a five-option maths question set.',
    readFirst: 'Reading before booking? The <a class="ag-inline-link" href="/courses">course pages</a> each carry a syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson from start to finish.',
    note: 'WhatsApp is the quickest way in and free from UK phones. Messages are answered in India from a +91 number; we keep no Wiltshire office.',
    formNote: 'No payment details and no commitment. A single reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Wiltshire', links: [
        { href: '/coding-classes-in-wiltshire', label: 'Coding in Wiltshire' },
        { href: '/best-coding-class-in-salisbury', label: 'Coding in Salisbury' },
        { href: '/ai-and-programming-classes-in-swindon', label: 'Coding in Swindon' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Per cent means parts per hundred, so think in hundredths'
  },

  personalityCss: `
.ag-root.ag-ptw .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ptw .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-ptw .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ptw .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ptw .ag-table td:nth-child(3) { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'The Salisbury boys\' grammar school (named in sources, not on the page), Year 7 admissions page and 2028 entry leaflet updated 13 October 2026: sets its own testing; Quest provider; Paper 1 English and Verbal Problem Solving and Paper 2 Maths and Non-Verbal Problem Solving, about 45 minutes each, about 1 hour 30 total; no phones, smart watches, timers; one sitting; no past papers; central marking and age standardisation; raw scores not supplied; qualifying standard set by the headteacher with governors, 10% lower for disadvantaged pupils; results by 11 October 2027; 2027 and 2028 entry timetables; tutor statement. Quest Assessments: multiple choice, usually five options, OMR, recording plays, free familiarisation booklets, Atom Home for disadvantaged pupils. DfE primary national curriculum Year 5: per cent as parts per hundred; equivalents of 1/2, 1/4, 1/5, 2/5, 4/5.',
    localProject: 'A test published two years ahead. The page shows Wiltshire families that the Salisbury boys\' grammar school has already set out its September 2028 entry test: two Quest papers on Saturday 25 September 2027, with maths sharing about 45 minutes with non-verbal problem solving, five-option multiple choice, an instruction recording and no watches. It sets the 2027 and 2028 timetables side by side, explains standardisation and the unpublished qualifying standard with its 10 per cent disadvantaged-pupil allowance, and says plainly that the girls\' school and council pages could not be read. It then teaches per cent as hundredths and the Year 5 equivalents through our own table, examples and practice set. Lesson family: percentages of amounts and ordering fractions, decimals and percentages.',
    requiredMentions: ['Maths and Non-Verbal Problem Solving', 'usually five options', 'a recording paces the room', 'set at 10% lower than the standard qualifying standard', 'The raw scores attained by candidates are not supplied to the School', 'Saturday 25 September 2027', 'papers from previous years will not be made available to parents', 'per cent relates to \'number of parts per hundred\''],
    sources: [
      { claim: 'The school\'s information leaflet for September 2028 entry: papers, timing, devices, marking, qualifying standard, disadvantaged-pupil rule, results date, tutoring statement.', url: 'https://www.bishopwordsworths.org.uk/attachments/download.asp?file=566&type=pdf' },
      { claim: 'The school\'s Year 7 admissions page: own testing, Quest, 2027 and 2028 timetables.', url: 'https://www.bishopwordsworths.org.uk/admissions/year-7-admissions' },
      { claim: 'Quest Assessments\' page for the school\'s 11 plus (2028 entry): five-option multiple choice, OMR, recording, familiarisation booklets.', url: 'https://www.questassessments.com/parent-guidance-consortium/bishop-wordsworth-school-11' },
      { claim: 'DfE national curriculum in England, primary, Year 5 fractions including decimals and percentages.', url: 'https://assets.publishing.service.gov.uk/media/5a81a9abe5274a2e8ab55319/PRIMARY_national_curriculum.pdf' }
    ],
    rejectedClaims: [
      'Wiltshire Council\'s admissions pages: HTTP 403 to curl (also in uk-map.tsv); not retried. The school is therefore not named on the page.',
      'The girls\' grammar school\'s test format, provider and dates: its site (swgs.wilts.sch.uk) returned 403; not retried, not stated.',
      'How Paper 2\'s 45 minutes divide between maths and non-verbal problem solving: not published; not guessed.',
      'Any qualifying score or number of applicants: not published by the school; not stated.',
      'Quest familiarisation booklet questions: not reproduced; every example is ours.',
      'Any score, qualification or place promise.'
    ]
  }
};
