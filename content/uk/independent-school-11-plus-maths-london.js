'use strict';
// Independent school 11 plus maths in London (ag- maths door, UK cluster Phase 2, row UK052).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/independent-school-11-plus-maths-london/). The old host
// 11plusconsortium.org.uk did not connect; the consortium's site is london11plus.co.uk.
//  - The London 11+ Consortium, home page, Code of Practice and FAQs: 13 London independent schools listed as
//    members (not named on our page); "In 2022 the Consortium introduced a new bespoke assessment process, for entry
//    in September 2023 onwards"; "This test is 100 minutes in total"; key dates for September 2027 entry: closing
//    date Friday 6th November 2026; assessment on one of Friday 27th November, Tuesday 1st December or Thursday 3rd
//    December 2026; offers Friday 12th February 2027; accept by 12 noon on Wednesday 3rd March 2027; three
//    approaches: "an online, adaptive, cognitive test followed by a non-adaptive section", a common reference form,
//    an interview; "Any prior knowledge assessed in the entrance examination will be based on the National
//    Curriculum for Year 5, but with opportunities for additional challenge"; "We worked hard with our test
//    provider, Quest Assessments"; components "20 minutes for Maths", "10 minutes for Non-Verbal Reasoning",
//    "20 minutes for English", "10 minutes for Verbal Reasoning", break "for up to 30 minutes", "15 minutes for
//    Problem Solving", "25 minutes for the Creative Comprehension"; "Maths, verbal reasoning and non-verbal reasoning
//    are adaptive"; maths "based on the National Curriculum for Year 5 and we do not test anything on the Year 6
//    curriculum"; "we provide stretch and challenge through the style and depth of the questions"; clock counts
//    down "in minutes"; "They will not be given any additional time warnings"; "once a section has been completed,
//    candidates cannot go back to amend it"; problem-solving section "tests the ability of candidates to use words
//    and numbers to solve multi-step problems"; devices "iPads, PCs, laptops and chrome books"; "does not need
//    special tuition or intensive practice"; "We actively discourage preparation for the interview."; 25% extra time
//    under the 2025-26 JCQ regulations with standardised scores of 84 or less; familiarisation via Quest taster.
//  - Cambridge Insight, entrance assessments (cem.org): Cambridge Select Insight for "selective independent
//    schools", 11+ and 13+, about 60 minutes.
//  - ISEB home page: Common Pre-Tests "are taken by pupils in Year 6 or 7, and provide an age-standardised measure of
//    ability".
// Our own arithmetic, labelled as ours: the three adaptive sections take 40 of the 100 minutes; maths alone is a
// fifth of the time.
// Worked examples and the practice set are written by us.
// Spine: one online sitting, six locked sections in a fixed order, maths first and adaptive. London independent 11+
// entry is not one exam, but this consortium is its largest shared test, and its shape is published in detail.
// Lesson family: multi-step problems with a remainder to interpret, and puzzles that need a systematic list.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'LONDON INDEPENDENT 11+', label: 'Independent school 11 plus maths in London', blurb: 'The London 11+ Consortium test: one online sitting, six locked sections, adaptive maths first. What the consortium publishes and how to prepare.' },
  slug: 'independent-school-11-plus-maths-london',
  code: 'isp',
  accent: '#375110',
  accentRationale: 'London independent 11 plus maths: a deep moss green (#375110), 8.44:1 on #FBF8F2 and 7.26:1 on the deepest paper tint, darker and yellower than the bottle-green Quest page it links to',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Independent school 11 plus maths in London',
  title: 'London 11 Plus Consortium Maths | Independent School Entry',
  description: 'London 11 plus consortium maths for independent school entry: the 100-minute online test, the adaptive maths section, key dates for 2027 entry, and how to prepare.',
  ogDescription: 'The London 11+ Consortium sets one online test for its member schools. Maths comes first: 20 adaptive minutes, Year 5 content, no going back.',
  twitterDescription: 'How the London 11+ Consortium test works: six timed sections, adaptive maths, a minutes-only clock, three test dates, and what the schools say about tutoring.',
  pageName: 'Independent School 11 Plus Maths in London',
  webPageDescription: 'Live online maths teaching for children applying to London independent schools at 11 plus, built from what the London 11+ Consortium publishes about its online test.',
  courseDescription: 'Live online maths lessons for Year 5 and Year 6 children applying to London independent schools at 11 plus, teaching Year 5 maths with depth and multi-step problem solving.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'London independent 11 plus maths',
  navLinks: [
    { href: '#routes', label: 'London routes' },
    { href: '#consortium', label: 'The consortium test' },
    { href: '#maths', label: 'The maths section' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#dates', label: 'Key dates' }
  ],
  eyebrow: 'London &middot; Independent school 11 plus &middot; Years 5 and 6',
  h1: 'London 11 plus consortium maths for independent school entry',
  lede: 'Many London independent schools choose their Year 7 pupils with an entrance test sat in Year 6, and the largest shared one is the London 11+ Consortium assessment: a single 100-minute online test, designed with Quest Assessments, that counts for every member school a child applies to. Maths opens it, with 20 adaptive minutes. Modern Age Coders teaches that maths live online, in a class or one to one, through our 11 plus maths preparation course.',
  secondaryCta: { href: '#consortium', label: 'How the test works' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a London independent school 11 plus.',
  heroNote: 'From the London 11+ Consortium site, read 31 October 2026 &middot; Not connected with the consortium or any school',
  spec: [
    ['Test', 'London 11+ Consortium assessment'],
    ['Members', '13 London independent schools'],
    ['Length', '100 minutes, plus a break of up to 30'],
    ['Delivery', 'Online, usually at the child\'s own school'],
    ['Maths section', '20 minutes, adaptive, first'],
    ['Maths content', 'Year 5 curriculum, with stretch'],
    ['Provider', 'Designed with Quest Assessments'],
    ['We teach', 'Year 5 maths in depth, multi-step problems']
  ],
  capsuleQ: 'What is the London 11+ Consortium test?',
  capsule: 'It is a shared entrance assessment for 13 London independent schools, sat once in Year 6 and sent to every member school the child applies to. The consortium describes it as 100 minutes in total, taken online, with six sections in a fixed order: 20 minutes of maths, 10 of non-verbal reasoning, 20 of English and 10 of verbal reasoning, a break, then 15 minutes of problem solving and 25 of creative comprehension. Maths and both reasoning sections are adaptive. The maths uses the Year 5 national curriculum, "with opportunities for additional challenge". For September 2027 entry the test falls on 27 November, 1 December or 3 December 2026. Modern Age Coders teaches the maths, live online, with practice we write ourselves.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for London independent 11 plus maths',
    lede: 'Depth matters more than speed in an adaptive section. Choose by what your child needs most. Each card opens a full syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'LDN / 01', title: '11 plus maths preparation', note: 'The core course for entrance tests: the Year 5 curriculum taught to the depth an adaptive section reaches.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'LDN / 02', title: 'Competition maths', note: 'Unfamiliar, multi-step problems, the kind the consortium\'s problem-solving section is built from.' },
      { course: 'mental-maths-mastery-kids', code: 'LDN / 03', title: 'Mental maths, number sense first', note: 'Twenty minutes is short; fluent recall leaves time for the harder questions an adaptive test serves up.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: 'tint', eyebrow: 'London routes',
      h2: 'How do London independent schools test at 11 plus?',
      lede: 'There is no single London independent 11 plus. Schools use a shared consortium test, a bought-in test from a provider, their own written papers, or a mix, and many add an interview.',
      body: [
        { kind: 'table', caption: 'Common entrance-test routes for London independent schools at 11 plus (each from the provider\'s or consortium\'s own site, read 31 October 2026)', head: ['Route', 'Who sets it', 'What the source says'], rows: [
          ['A shared consortium test', 'The London 11+ Consortium, with Quest Assessments', 'One online test of 100 minutes, results shared with every member school applied to'],
          ['A pre-test from ISEB', 'The Independent Schools Examinations Board', 'Common Pre-Tests "are taken by pupils in Year 6 or 7, and provide an age-standardised measure of ability"'],
          ['A Cambridge computer test', 'Cambridge Insight (formerly CEM)', 'Cambridge Select Insight is designed for "selective independent schools" among others, for 11+ and 13+ entry'],
          ['A bespoke provider test', 'Quest Admissions and others', 'Quest says it builds tests "Bespoke and branded to your school"'],
          ['The school\'s own papers', 'Each school', 'Written maths and English papers, often with an interview; details only on each school\'s site']
        ] },
        { kind: 'p', mt: true, html: 'A child applying to several schools can meet more than one route in the same autumn. The rule we give families is simple: list the schools, then write next to each one the test it uses, the date and whether there is a second stage. The rest of this page goes deep on the consortium test, because it is the one route whose maths section is published in detail, and because it is shared across 13 schools. For written papers set by individual schools, see our <a class="ag-inline-link" href="/common-entrance-maths-tuition">Common Entrance maths page</a>; for the subject in general, our <a class="ag-inline-link" href="/11-plus-maths-tuition">11 plus maths page</a>.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://london11plus.co.uk/" rel="noopener" target="_blank">The London 11+ Consortium</a>; <a class="ag-inline-link" href="https://www.iseb.co.uk/" rel="noopener" target="_blank">ISEB</a>; <a class="ag-inline-link" href="https://www.cem.org/entrance-assessments" rel="noopener" target="_blank">Cambridge Insight, entrance assessments</a>; <a class="ag-inline-link" href="https://www.questassessments.com/admissions" rel="noopener" target="_blank">Quest Admissions</a>. Modern Age Coders is not connected with the consortium, its schools, ISEB, Cambridge or Quest.' }
      ]
    },
    {
      id: 'consortium', tint: 'deep', eyebrow: 'The consortium test',
      h2: 'How is the London 11+ Consortium test structured?',
      lede: 'Six sections in a fixed order, three adaptive and three not, with a break after the fourth. Each section is locked once finished, and the on-screen clock counts only minutes.',
      body: [
        { kind: 'table', caption: 'The London 11+ Consortium assessment, in the order it is sat (Consortium FAQs and parent information sheet, September 2027 entry)', head: ['Order', 'Section', 'Minutes', 'Adaptive?'], rows: [
          ['1', 'Maths', '20', 'Yes'],
          ['2', 'Non-verbal reasoning', '10', 'Yes'],
          ['3', 'English (comprehension of a specially written fiction text, then standard English in context)', '20', 'No'],
          ['4', 'Verbal reasoning', '10', 'Yes'],
          ['', 'Break', 'Up to 30', ''],
          ['5', 'Problem solving', '15', 'No'],
          ['6', 'Creative comprehension (several sources in different formats)', '25', 'No']
        ] },
        { kind: 'p', mt: true, html: 'The consortium says the exam "is 100 minutes long (1 hour 40 minutes)" with a 30-minute break in the middle. By our own arithmetic, the three adaptive sections take 40 of those 100 minutes and maths alone is a fifth of the time. The non-adaptive sections change for each of the three test days, "to ensure the security of the test", and results are standardised across the three sittings. The adaptive sections are different for every candidate anyway, since each next question depends on the last answer.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'No going back', p: 'The consortium explains that extra time is given section by section "because once a section has been completed, candidates cannot go back to amend it." So a child must use the whole 20 maths minutes for maths.' },
          { h3: 'A clock in minutes only', p: 'Candidates see a clock that counts down "in minutes" for each section, chosen "not to count down in seconds" so it does not distract, and "They will not be given any additional time warnings."' },
          { h3: 'Any device', p: 'The test runs on "iPads, PCs, laptops and chrome books", and the consortium says the device "does not make any difference". There is no extended writing, so typing speed does not count.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where it is sat',
          left: [
            'Usually in the child\'s current primary or prep school, which runs it to the consortium\'s rules: a start inside a set window, one of the three dates, and the break after verbal reasoning for everyone.',
            'If the current school cannot host it, the family names a first and second choice consortium school as a centre, and both must be schools the child has applied to.'
          ],
          rightH3: 'What else counts',
          right: [
            'The test is one of "three complementary assessment approaches". The others are a common reference form from the current head and an interview that each senior school runs in its own way.',
            'Some member schools select for interview from the test results and some do not; the consortium tells families to check each school\'s own site.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://london11plus.co.uk/" rel="noopener" target="_blank">The London 11+ Consortium, home page, Code of Practice and FAQs</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'maths', tint: '', eyebrow: 'The maths section',
      h2: 'What maths is in the London 11+ Consortium test?',
      lede: 'Year 5 national curriculum maths, nothing from Year 6, made harder by depth rather than by new topics. Because the section adapts, a strong child keeps meeting harder questions.',
      body: [
        { kind: 'p', html: 'The consortium is precise about content: "The questions are based on the National Curriculum for Year 5 and we do not test anything on the Year 6 curriculum." Its reason is fairness, since "different schools will teach the Year 6 curriculum in different orders". Then comes the line that matters most for preparation: "Because we have many very able candidates taking the Consortium exam, we provide stretch and challenge through the style and depth of the questions we ask." In other words, a child will not meet algebra or ratio from Year 6, but will meet Year 5 ideas such as fractions, multiplication, measures and shape asked in ways that need two or three steps of thought.' },
        { kind: 'table', mt: true, caption: 'Year 5 maths and how depth can be added to it (topics from the national curriculum; the "deeper" column is our own illustration)', head: ['Year 5 topic', 'A routine question', 'A deeper question on the same idea (ours)'], rows: [
          ['Multiplication and factors', 'What is 24 times 6?', 'How many factor pairs does 36 have, and why does one of them repeat a number?'],
          ['Fractions', 'What is three fifths of 40?', 'Which is larger, seven tenths or thirteen twentieths, and by how much?'],
          ['Decimals and place value', 'Write 2.05 km in metres', 'Multiply 3.4 by 25 without written long multiplication'],
          ['Measures and time', 'How many minutes in 2.5 hours?', 'How many 45-minute slots fit between 07:00 and 21:00?'],
          ['Angles', 'Angles on a straight line add to what?', 'Two angles on a line are 63 and 48 degrees; find the third'],
          ['Problem solving', 'Add three numbers', 'In how many ways can 10 be made from three different whole numbers?']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What adaptive means for practice',
          left: [
            'An adaptive section has no fixed "hard part at the end". Questions rise in difficulty after correct answers and ease after wrong ones, so a child may meet a demanding question in the first minute.',
            'That rewards steady accuracy over racing. A careless slip on an easy question pulls the next one down; a careful right answer lifts it.'
          ],
          rightH3: 'The problem-solving section is maths too',
          right: [
            'Section five, 15 minutes, "tests the ability of candidates to use words and numbers to solve multi-step problems". It is not adaptive, and the consortium notes that candidates "are likely to complete different numbers of questions in the time available."',
            'The creative comprehension section asks children to use information from several sources at once, which often includes reading tables, timetables or charts.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a child work through a deeper Year 5 problem?',
      lede: 'Three original problems in the style of the stretch the consortium describes: Year 5 content, more than one step. None is from the consortium test or its familiarisation material.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. The leftover pencils', p: 'A school buys 7 boxes of 24 pencils and gives 15 pencils to each of its 9 classes. How many are left? Two calculations, kept separate: 7 times 24 is 168 pencils bought; 9 times 15 is 135 given out. 168 minus 135 leaves 33. Writing each step as a sentence ("bought", "given", "left") stops the classic slip of subtracting 15 from 168.' },
          { h3: '2. The reversed number', p: 'A two-digit number has digits that add to 11. Reversing the digits makes it 27 larger. What is it? List the candidates with digit sum 11: 29, 38, 47, 56, 65, 74, 83, 92. Reversal only increases a number whose tens digit is smaller. Test 47: 74 minus 47 is 27. Answer 47. A systematic list beats guessing every time.' },
          { h3: '3. What a remainder means', p: 'A pool opens from 07:00 to 21:00 and lanes are booked in 45-minute slots back to back. How many full slots fit in a day? 14 hours is 840 minutes; 840 divided by 45 is 18 remainder 30. The answer is 18, not 19 and not 18.7: half a slot cannot be booked. Deciding what the remainder means is the step adaptive questions test.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, Year 5 content with added depth', head: ['Question (ours)', 'Answer', 'How to think'], rows: [
          ['3.4 multiplied by 25', '85', 'Times 25 is times 100 then divide by 4: 340 divided by 4 is 85. No long multiplication needed.'],
          ['How many factor pairs does 36 have?', '5', '1 and 36, 2 and 18, 3 and 12, 4 and 9, 6 and 6. Stop at 6, because the pairs would start repeating.'],
          ['Which is larger, seven tenths or thirteen twentieths?', 'Seven tenths, by one twentieth', 'Seven tenths is fourteen twentieths. Common denominators make the size difference visible.'],
          ['Two angles on a straight line are 63 and 48 degrees. What is the third angle on that line?', '69 degrees', '63 plus 48 is 111; 180 minus 111 is 69. Add the known parts first, then subtract once.'],
          ['Write 2.05 km in metres.', '2050 m', 'The 0 in the tenths place is the trap: 2.05 km is 2 km and 50 m, not 2 km and 500 m.'],
          ['In how many ways can 10 be written as the sum of three different whole numbers above 0, ignoring order?', '4', '1+2+7, 1+3+6, 1+4+5, 2+3+5. Fix the smallest number and count upwards so nothing is missed or repeated.']
        ] },
        { kind: 'p', mt: true, html: 'The common thread is method before arithmetic: name each quantity, list possibilities in order, check units, and decide what a remainder means before writing an answer. These are the habits the consortium\'s own phrase, "style and depth", points to, and they are useful far beyond one test.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Key dates',
      h2: 'When is the London 11+ Consortium test for 2027 entry?',
      lede: 'Registrations close on Friday 6 November 2026, and the test runs on one of three dates at the end of November and start of December 2026. Offers arrive in February 2027.',
      body: [
        { kind: 'table', caption: 'Key dates for September 2027 entry, as the London 11+ Consortium publishes them', head: ['Step', 'Date'], rows: [
          ['Closing date for registrations, and for evidence of access arrangements', 'Friday 6 November 2026'],
          ['Assessment, on one of three dates', 'Friday 27 November, Tuesday 1 December or Thursday 3 December 2026'],
          ['Offers sent to arrive', 'Friday 12 February 2027'],
          ['Deadline to accept', '12 noon on Wednesday 3 March 2027']
        ] },
        { kind: 'ol', mt: true, items: [
          'Register with each consortium school your child is applying to, before the closing date. The test itself is sat only once.',
          'If your child has extra time at school, send the specialist and school evidence to every consortium school applied to by the same closing date. The consortium follows the 2025-26 JCQ regulations for this sitting, and 25 per cent extra time needs standardised scores of 84 or less in the areas the rules set out.',
          'Look at the familiarisation materials linked from the consortium\'s site before the test day. The consortium recommends this for every candidate.',
          'Check with your current school whether it will host the test, and on which date and session.',
          'Check each school\'s site for its interview process; some select for interview from the test and some do not.'
        ] },
        { kind: 'p', mt: true, html: 'For families planning ahead to September 2028 entry, expect a similar pattern a year later, but confirm on the consortium\'s site once it publishes, since dates are set each year. Overseas applicants can travel to sit at a member school or ask a consortium school\'s admissions team about sitting abroad.' }
      ]
    },
    {
      id: 'tuition', tint: '', eyebrow: 'What the schools say',
      h2: 'Does the London 11+ Consortium recommend tutoring?',
      lede: 'No. It says a child "does not need special tuition or intensive practice", and it actively discourages interview coaching. Families should weigh that before booking anyone, including us.',
      body: [
        { kind: 'two',
          leftH3: 'In the consortium\'s words',
          left: [
            'The home page sets out the aim: "We are concerned about the pressure the 11+ application system can place on young children and the damage to learning which relentless \'teaching to the test\' produces."',
            'On preparation, the FAQ says the test checks the Year 5 maths curriculum and reading of an extended fiction passage, "skills that your daughter will be developing in school anyway", and on non-verbal and verbal reasoning, "any gains quickly become very marginal". On interviews: "We actively discourage preparation for the interview."'
          ],
          rightH3: 'What we offer instead',
          right: [
            'Teaching, not coaching. If a child in Year 5 is unsure of fractions, factors, measures or multi-step problems, that is a gap in ordinary school maths, worth closing for Year 7 whatever happens in December.',
            'We do not prepare children for interviews, we do not claim to know the consortium\'s questions, and we never present our practice as theirs. We will not predict a result.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 4 to a December test',
    lede: 'The consortium test falls in the autumn term of Year 6. Our four stages count back from that sitting; they are a plan, not the consortium\'s.',
    table: { caption: 'Four stages before the consortium maths section (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 4', '1. Fluency', 'Tables to 12, place value and number bonds recalled without pause'],
      ['Year 5', '2. The Year 5 curriculum', 'Fractions, decimals, factors, measures and angles all taught and understood'],
      ['Year 5, summer', '3. Depth', 'Two- and three-step problems solved by naming quantities and listing systematically'],
      ['Autumn of Year 6', '4. Familiarisation', 'The consortium\'s own materials done; 20-minute on-screen sets finished without rushing']
    ] },
    left: { h3: 'Late starters', ps: [
      'Starting in September of Year 6 still leaves time for stage 3, which is where most marks in an adaptive section are won or lost.',
      'We tell you honestly after the first lesson what is realistic.'
    ] },
    right: { h3: 'After December', ps: [
      'Depth in Year 5 maths makes Year 7 easier. Curious children often continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists puzzles and challenges for the spring.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for London independent school entry',
    lede: 'Sorted by stage. Each card links to its syllabus.',
    bands: [
      { num: 'I', h3: 'Before Year 6', sub: 'Years 3 to 5', courses: [
        { code: 'UK / ISP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 maths for independent and grammar school tests.' },
        { code: 'UK / ISP / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Rebuilds any wobbly foundations before entrance work.' },
        { code: 'UK / ISP / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Pattern and spatial thinking for children aged 6 to 9.' }
      ] },
      { num: 'II', h3: 'Depth and speed', sub: 'Stretch work', courses: [
        { code: 'UK / ISP / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Multi-step problems for able young mathematicians.' },
        { code: 'UK / ISP / 05', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Fluent recall that protects time in a short section.' },
        { code: 'UK / ISP / 06', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns in calculation, explained.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'Year 6 to 8', courses: [
        { code: 'UK / ISP / 07', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'The pre-algebra and geometry of Years 7 and 8.' },
        { code: 'UK / ISP / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python projects that make maths ideas concrete.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for an online, adaptive test',
    lede: TIMING + ' Lessons are taught from India, which keeps the same clock all year, so the time difference to London is four and a half hours in summer and five and a half in winter. We quote every slot in UK time.',
    slots: [
      { time: 'After school', l: 'The usual time for Year 5 children.' },
      { time: 'Weekend morning', l: 'A longer session for problem solving.' },
      { time: 'Half term', l: 'Extra lessons before a November sitting.' }
    ],
    cells: [
      { h3: 'Depth, not just speed', p: 'Year 5 topics pushed to two and three steps.' },
      { h3: 'On-screen sets', p: 'Twenty-minute practice read from a screen, as on the day.' },
      { h3: 'Systematic listing', p: 'Counting and puzzle questions solved in order.' },
      { h3: 'Written by us', p: 'No consortium or school questions reproduced.' },
      { h3: 'Group or one to one', p: 'A class of 15 to 20, or private lessons.' },
      { h3: 'No interview coaching', p: 'The consortium discourages it, and so do we.' }
    ]
  },

  projectsH2: 'Projects our students went on to build',
  projectsLede: 'Work from students at our school after their entrance year. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on our Google profile, left as they wrote them.',

  fees: {
    h2: 'Fees for independent school 11 plus maths',
    lede: 'A monthly fee, displayed in the currency we use for UK families. The first lesson is free, and joining costs nothing.',
    free: ['A real Year 5 maths lesson with depth', 'A frank view of strengths and gaps', 'All we need is a phone number'],
    group: ['A class of 15 to 20 at one stage', 'One teacher through to the test', 'On-screen practice sets', 'Gentler weeks around school events'],
    one: ['Private lessons with one teacher', 'Paced to your test date', 'Useful for one particular gap']
  },

  faq: {
    eyebrow: 'London 11 plus questions',
    h2: 'What parents ask about the London 11+ Consortium test',
    items: [
      { q: 'What is the London 11+ Consortium?', a: 'It is a group of 13 London independent schools that share one entrance test for Year 7. A child sits the test once, and the results go to every member school they have applied to.' },
      { q: 'How long is the London consortium test?', a: 'The consortium says it is 100 minutes in total, with a break of up to 30 minutes in the middle. It is split into six timed sections, starting with 20 minutes of maths.' },
      { q: 'Is the consortium maths section adaptive?', a: 'Yes. The consortium says maths, verbal reasoning and non-verbal reasoning are adaptive, so the questions adjust to each answer. English, problem solving and creative comprehension are not.' },
      { q: 'What maths is tested?', a: 'Year 5 national curriculum maths and nothing from Year 6. The consortium adds stretch through the style and depth of the questions, because many very able children sit it.' },
      { q: 'Can my child go back to an earlier section?', a: 'No. The consortium says that once a section is completed, candidates cannot go back to amend it, which is why extra time is given section by section.' },
      { q: 'When is the test for 2027 entry?', a: 'On one of Friday 27 November, Tuesday 1 December or Thursday 3 December 2026. Registrations close on Friday 6 November 2026 and offers arrive on Friday 12 February 2027.' },
      { q: 'Who writes the consortium test?', a: 'The consortium designed it with its test provider, Quest Assessments, together with curriculum specialists from its own schools. It was first sat in December 2022 for September 2023 entry.' },
      { q: 'Does my child need tutoring for it?', a: 'The consortium says no special tuition or intensive practice is needed and recommends its familiarisation materials. We teach Year 5 maths with depth for children who have real gaps, and we never coach for interviews.' },
      { q: 'When can lessons happen?', a: TIMING + ' Each slot is confirmed in UK time.' },
      { q: 'Are you linked to the consortium or its schools?', a: 'No. Modern Age Coders is independent, has never seen the consortium\'s questions and writes all of its own practice. We do not predict results or promise places.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More on 11 plus entry',
    lede: 'Other tests London families meet, and the subject itself.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Entrance maths, whichever school sets it.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'Written 11+ and 13+ papers for independent schools.' },
      { href: '/11-plus-maths-tuition-enfield', label: '11 plus maths in Enfield', p: 'A north London grammar area moving to a Quest-written test.' },
      { href: '/11-plus-maths-tuition-sutton', label: '11 plus maths in Sutton', p: 'A London borough with state grammar schools.' },
      { href: '/11-plus-maths-tuition-kingston', label: '11 plus maths in Kingston', p: 'Selective state schools in south west London.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The hub for all our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year and the schools on your list. We will note which test each one uses, teach a real lesson, and give you an honest read on the maths.',
    readFirst: 'Prefer to look first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">11 plus maths course page</a> sets out the full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'WhatsApp reaches us fastest, at no cost from a UK number. Our team answers from India on a number starting +91.',
    formNote: 'No payment details are needed. We send one message back with a time.'
  },

  footer: {
    cols: [
      { h4: 'Entrance maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' },
        { href: '/11-plus-maths-tuition-enfield', label: 'Enfield' },
        { href: '/11-plus-maths-tuition-sutton', label: 'Sutton' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 5 maths, asked with depth, in 20 adaptive minutes'
  },

  personalityCss: `
.ag-root.ag-isp .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-isp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-isp .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-isp .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-isp .ag-table th:first-child { width: 18%; }
`,

  dossier: {
    curriculumAuthority: 'The London 11+ Consortium (london11plus.co.uk), home page, Code of Practice, FAQs and parent information sheet, read 31 October 2026: 13 member schools; bespoke assessment introduced in 2022 for September 2023 entry; 100 minutes with a break of up to 30 minutes; six sections in order (maths 20, non-verbal reasoning 10, English 20, verbal reasoning 10, problem solving 15, creative comprehension 25); maths and both reasoning sections adaptive; Year 5 national curriculum only, stretch through style and depth; sections cannot be revisited; minutes-only clock and no time warnings; designed with Quest Assessments; key dates for 2027 entry (6 November 2026; 27 November, 1 or 3 December 2026; 12 February 2027; 3 March 2027); 2025-26 JCQ rules for access arrangements; no special tuition needed; interview preparation discouraged. ISEB: Common Pre-Tests in Year 6 or 7. Cambridge Insight: Cambridge Select Insight for selective independent schools at 11+ and 13+.',
    localProject: 'A London independent-entry page built around the one shared test whose shape is public. It maps five entrance routes London schools use, sets out the consortium test section by section with timings and which sections adapt, explains the Year 5 ceiling with stretch, shows in a table how depth can be added to Year 5 topics, teaches three original multi-step worked examples and a six-question practice set, lists the 2027-entry dates with a numbered checklist, and quotes the consortium on tutoring and interview coaching. Lesson family: multi-step problems with a remainder to interpret, and systematic listing.',
    requiredMentions: ['we do not test anything on the Year 6 curriculum', 'stretch and challenge through the style and depth of the questions', 'once a section has been completed, candidates cannot go back to amend it', 'They will not be given any additional time warnings', 'Friday 27 November, Tuesday 1 December or Thursday 3 December 2026', 'We actively discourage preparation for the interview', 'is 100 minutes long (1 hour 40 minutes)', 'use words and numbers to solve multi-step problems'],
    sources: [
      { claim: 'London 11+ Consortium: members, test structure and timings, adaptive sections, Year 5 content, locked sections, clock, devices, provider, dates, access arrangements, tutoring and interview statements.', url: 'https://london11plus.co.uk/' },
      { claim: 'London 11+ Consortium parent information on access arrangements for 2027 entry.', url: 'https://london11plus.co.uk/parent-info/' },
      { claim: 'ISEB: Common Pre-Tests taken in Year 6 or 7 as an age-standardised measure of ability.', url: 'https://www.iseb.co.uk/' },
      { claim: 'Cambridge Select Insight for selective independent schools at 11+ and 13+.', url: 'https://www.cem.org/entrance-assessments' },
      { claim: 'Quest Admissions: bespoke and branded tests for schools.', url: 'https://www.questassessments.com/admissions' }
    ],
    rejectedClaims: [
      '11plusconsortium.org.uk (the URL in our research map): did not connect; the consortium\'s own site says london11plus.co.uk is its official site, so all facts come from there.',
      'Names of the 13 member schools and any other London independent school: deliberately not printed.',
      'Tutor-site claims about pass marks, interview selection rates or how many children sit the test: not primary, not used.',
      'Any question from the consortium\'s familiarisation materials: not reproduced; families are pointed to the consortium site.',
      'Which London schools use the ISEB pre-test or Cambridge Select Insight: varies by school and is not stated.',
      'Any score target, offer prediction or place promise.'
    ]
  }
};
