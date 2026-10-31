'use strict';
// ISEB Common Pre-Test maths practice (ag- maths door, independent school entry; UK cluster row UK051).
// Read raw with curl on 31 October 2026 from iseb.co.uk (HTML via our own text extractor, PDFs via pypdf);
// copies under keyword-research-2026-09/uk-us-gap/src/iseb-common-pre-test-maths-practice/:
//  - ISEB Common Pre-Tests page: "a series of four online, adaptive and shared entrance assessments";
//    "Often taken in Year 6 or Year 7"; four subjects "mathematics, English (reading comprehension and
//    grammar), verbal reasoning and non-verbal reasoning"; "can be taken together on the same day or split
//    into multiple days"; 2026-27 timeline: Guardian Portal opens Tuesday 9 June 2026, live testing from
//    Tuesday 1 September 2026, testing ends late May 2027.
//  - ISEB Pre-Tests for families: "a set of four multiple-choice, adaptive, online tests"; Year 7 entry "or
//    delayed entry in Year 9"; "will take 2 hours 15 minutes to complete"; "Results are age-standardised".
//  - ISEB Pre-Tests for schools: "it is highly unlikely that two pupils will see the same series of
//    questions"; "pupils may be presented with differing numbers of questions, and the system does not allow
//    them to go back and change previous answers"; calculators "must not be accessible"; "Applicants should
//    have access to a pen/pencil and paper for their rough work"; mathematics practice questions "are based
//    on the National Curriculum for Mathematics until the end of Year 5"; SEND extra time "of 25%"; results
//    as a Standardised Age Score with "the average is 100", plus stanine, percentile rank and group rank;
//    "Pupils can only sit the ISEB Pre-Tests once in any academic year"; "Fees are paid by the senior
//    school, per result accessed"; "ISEB cannot guarantee the accuracy of third-party Common Pre-Tests
//    practice resources that are not endorsed by ISEB."; attainment vs potential paragraph.
//  - ISEB Common Pre-Tests Framework 2026-27 (PDF): maths topics "Number and place value", "Calculations",
//    "Fractions, decimals and percentages", "Measurement", "Geometry", "Statistics"; "Some questions will
//    assess mathematical fluency in the form of arithmetic questions, others will require solving
//    mathematical problems, possibly including more than one of the topics."; "In the very unlikely event of
//    a candidate taking the tests more than once within a single academic year, the first set of results
//    will stand."; the PDF gives the window as "between the beginning of October and the end of June",
//    which differs from the web pages (1 September 2026 to late May 2027): both printed, attributed.
//  - Preparing your child for the ISEB Pre-Tests (PDF): "Additional test practice is not a requirement of
//    the ISEB Pre-Tests"; "they will be allowed a pen and paper during the test to jot down any calculations
//    or notes that they want to make. This working paper is not marked."; "pupils make mistakes because they
//    haven't read the question properly or have used the wrong operation"; times tables advice.
//  - Information for Parents/Guardians flyer (PDF): "Free: there will be no charge to parents/guardians for
//    registering children".
// Not used: testimonial quotes naming schools and staff; the prep-pack price; school names in ISEB copy.
// Our own: the adaptive-test illustration (a simplified model, not ISEB's algorithm), worked examples,
// the practice set. Spine: the test you cannot go back in. An adaptive, one-way test removes the paper-test
// habits of skipping and returning, so the skill to build is committing to a checked answer.
// Lesson family: an online adaptive admissions test where technique, not content, is the new thing.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'ISEB PRE-TEST', label: 'ISEB Common Pre-Test maths', blurb: 'Online, adaptive and one-way: a child cannot go back to change an answer, so checking happens before the click.' },
  slug: 'iseb-common-pre-test-maths-practice',
  code: 'icp',
  accent: '#6A4B34',
  accentRationale: 'ISEB Pre-Test maths: a walnut brown (#6A4B34), 7.42:1 on #FBF8F2 and 6.39:1 on the deepest paper tint, warmer than the olive GL page so the two 11 plus provider pages read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'ISEB Common Pre-Test maths practice',
  title: 'ISEB Common Pre-Test Maths Practice | Adaptive, One Way',
  description: 'ISEB Common Pre-Test maths practice: how the online adaptive test works, what maths it covers to the end of Year 5, why there is no going back, and how to prepare.',
  ogDescription: 'The ISEB Pre-Tests are adaptive: each answer chooses the next question and a child cannot go back. Here is what that changes about maths preparation.',
  twitterDescription: 'ISEB Pre-Test maths: four adaptive online tests, Year 5 content, no calculator, no going back, once a year. How to prepare without drilling.',
  pageName: 'ISEB Common Pre-Test Maths Practice',
  webPageDescription: 'Live online maths teaching for children sitting the ISEB Common Pre-Tests for independent senior school entry, built from ISEB\'s own pages and 2026-27 framework.',
  courseDescription: 'Live online maths lessons for children in Years 5 and 6 preparing for the ISEB Common Pre-Test mathematics test: Year 5 curriculum content, problem solving and on-screen, one-way test technique.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'ISEB Pre-Test maths',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#adaptive', label: 'Adaptive' },
    { href: '#maths', label: 'The maths' },
    { href: '#examples', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Independent senior schools &middot; ISEB Pre-Tests &middot; Years 5 and 6',
  h1: 'ISEB Common Pre-Test maths practice',
  lede: 'The ISEB Common Pre-Tests are four online, adaptive, multiple-choice entrance tests set by the Independent Schools Examinations Board and used by many independent senior schools, usually in Year 6, for Year 7 entry or deferred Year 9 entry. Mathematics is one of the four. Modern Age Coders teaches that maths live online, in a group or one to one, through our 11 plus maths preparation course. The single fact that changes preparation most is in ISEB\'s own words: the system "does not allow them to go back and change previous answers". A child has to check before moving on, because there is no later.',
  secondaryCta: { href: '#adaptive', label: 'How adaptive works' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for the ISEB Pre-Tests.',
  heroNote: 'Built from ISEB\'s pages and 2026-27 framework, read 31 October 2026 &middot; Not connected with ISEB or any school',
  spec: [
    ['Set by', 'ISEB, the Independent Schools Examinations Board'],
    ['Tests', 'English, mathematics, verbal and non-verbal reasoning'],
    ['Format', 'Online, adaptive, multiple choice'],
    ['All four', '2 hours 15 minutes, per ISEB'],
    ['Maths content', 'National curriculum to the end of Year 5'],
    ['Going back', 'Not possible'],
    ['Sittings', 'Once per academic year'],
    ['Results', 'Standardised Age Score, average 100']
  ],
  capsuleQ: 'What is the ISEB Common Pre-Test?',
  capsule: 'The ISEB Common Pre-Tests are a set of four online tests in English, mathematics, verbal reasoning and non-verbal reasoning, used by many independent senior schools as one part of admissions. ISEB says they are multiple choice and adaptive, take 2 hours 15 minutes in total, and can be sat in one day or across several. A child sits them once in an academic year, usually at their own school, and the results are shared with every senior school the family gives the Applicant ID to. The maths test covers the national curriculum up to the end of Year 5: number, calculation, fractions, decimals and percentages, measurement, geometry and statistics. No calculator is allowed; pen and paper are. For the 2026-27 session ISEB opened registration on 9 June 2026 and live testing from 1 September 2026. Modern Age Coders teaches the maths and the one-way technique live online, with practice we write ourselves.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for Pre-Test maths',
    lede: 'Choose by how quick and accurate the Year 5 arithmetic is. Each card opens a syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'ICP / 01', title: '11 plus maths preparation', note: 'Covers the Year 5 topics the ISEB framework lists, with multi-step problems that join two of them.' },
      { course: 'mental-maths-mastery-kids', code: 'ICP / 02', title: 'Mental maths, number sense first', note: 'With no going back, the checking has to be fast; secure number facts make it possible.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ICP / 03', title: 'Lower secondary maths', note: 'For a strong Year 6 child who will meet the hardest adaptive questions and then Year 7 maths.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test',
      h2: 'How do the ISEB Pre-Tests work?',
      lede: 'Four short online tests, sat once, shared with many schools. ISEB describes them in its 2026-27 pages and its test framework.',
      body: [
        { kind: 'table', caption: 'The ISEB Common Pre-Tests, 2026-27 session, as ISEB publishes them', head: ['Feature', 'What ISEB says'], rows: [
          ['Tests', 'English (reading comprehension and grammar), mathematics, verbal reasoning, non-verbal reasoning'],
          ['Format', 'Online, adaptive and multiple choice'],
          ['Length', 'All four together "will take 2 hours 15 minutes to complete"'],
          ['When in school life', 'Often Year 6 for Year 7 entry; some senior schools use them before Year 9 entry'],
          ['Where', 'Usually the pupil\'s current school, or a senior school or approved centre, in the UK or overseas'],
          ['Registration', 'By a parent or guardian through the Guardian Portal; ISEB says registration is free for families'],
          ['Window', 'Registration opened Tuesday 9 June 2026; live testing from Tuesday 1 September 2026 to late May 2027'],
          ['Sittings', '"Pupils can only sit the ISEB Pre-Tests once in any academic year"'],
          ['Results', 'A Standardised Age Score where "the average is 100", with stanine, percentile rank and group rank']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Shared, so sat once',
          left: [
            'The "common" in the name means one sitting serves many schools. Parents create an Applicant Profile and an Applicant ID, then give that ID to each senior school applied to. ISEB says this means pupils do not miss lessons for several separate tests.',
            'Fees, ISEB says, are paid by the senior school, per result accessed. Individual schools set their own deadlines inside the session, so the date that matters is the earliest one among the schools on your list.'
          ],
          rightH3: 'Two windows in print',
          right: [
            'ISEB\'s web pages give the 2026-27 testing window as 1 September 2026 to late May 2027. Its 2026-27 framework PDF says tests "can be taken between the beginning of October and the end of June". We print both because both are ISEB\'s; ask your child\'s school and the senior schools which applies.',
            'If a child were somehow tested twice in a year, the framework says "the first set of results will stand." There is no practice run that counts.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-pre-tests/" rel="noopener" target="_blank">ISEB Common Pre-Tests</a>, <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-pre-tests/cpt-for-families/" rel="noopener" target="_blank">information for families</a>, <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-pre-tests/cpt-for-schools/" rel="noopener" target="_blank">information for schools</a>, and the <a class="ag-inline-link" href="https://www.iseb.co.uk/wp-content/uploads/ISEB-Common-Pre-Tests-Framework.pdf" rel="noopener" target="_blank">ISEB Common Pre-Tests Framework 2026-27</a>, read 31 October 2026. Modern Age Coders is not connected with ISEB or with any senior school.' }
      ]
    },
    {
      id: 'adaptive', tint: 'deep', eyebrow: 'Adaptive and one-way',
      h2: 'What does "adaptive" mean for a child sitting the maths test?',
      lede: 'Each answer helps choose the next question, the number of questions varies, and there is no going back. Those three facts change preparation more than any topic list.',
      body: [
        { kind: 'p', html: 'ISEB explains it directly: "The test system will assess the pupil\'s ability after each response and select the next question to have the most appropriate level of difficulty." It adds that "pupils may be presented with differing numbers of questions, and the system does not allow them to go back and change previous answers". It also says "it is highly unlikely that two pupils will see the same series of questions." So two children leaving the same room may have answered different questions, a different number of them, at different levels, and both had a fair test.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Skipping is not a tactic', p: 'On a paper 11 plus, leaving a hard question and returning is good technique. Here there is nothing to return to. A child needs to decide, with a sensible estimate behind the choice, and move on.' },
          { h3: 'Harder can be good news', p: 'In an adaptive test, a run of harder questions usually follows correct answers. Children who expect every question to feel easy can panic at exactly the moment they are doing well. We tell them so in advance.' },
          { h3: 'Checking comes first', p: 'Because a click is final, the check must happen before it: does the answer fit the estimate, the units, the question actually asked? Practising that two-second habit is the core of our Pre-Test lessons.' }
        ] },
        { kind: 'table', mt: true, caption: 'Paper 11 plus habits against the ISEB Pre-Test, our comparison from ISEB\'s description', head: ['Habit from paper tests', 'Does it work in the Pre-Test?', 'What to do instead'], rows: [
          ['Skip and come back later', 'No: earlier answers cannot be revisited', 'Estimate, eliminate, commit'],
          ['Count questions left to pace yourself', 'Not reliably: question numbers vary by pupil', 'Pace by the visible timer, which can be hidden if it worries the child'],
          ['Change an answer on a final check', 'No', 'Do the check before selecting'],
          ['Work in the margin of the question', 'No margin on screen', 'Use the pen and paper provided; that working is not marked'],
          ['Use the easy questions to build confidence', 'Difficulty adjusts to the pupil', 'Expect hard questions and treat them as a sign of progress']
        ] },
        { kind: 'p', mt: true, html: 'A simplified illustration of our own, not ISEB\'s algorithm: picture a ladder of question difficulty. A correct answer usually moves a child up a rung, a wrong one down, and the test stops when it is confident where the child stands. That is why ISEB can say the test "can be shorter while still giving an accurate score", and why a careless slip on an easy rung costs more time than it would on paper: the test has to climb back.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.iseb.co.uk/assessments/common-pre-tests/cpt-for-schools/" rel="noopener" target="_blank">ISEB Pre-Tests information for schools</a>, How do the ISEB Pre-Tests work, and the 2026-27 framework. The ladder picture and the habits table are our own explanation.' }
      ]
    },
    {
      id: 'maths', tint: '', eyebrow: 'The maths',
      h2: 'What maths is on the ISEB Pre-Test?',
      lede: 'The national curriculum for England up to the end of Year 5, in six strands. ISEB describes some questions as plain arithmetic and others as problems that join more than one topic.',
      body: [
        { kind: 'table', caption: 'ISEB\'s six maths strands, with Year 5 examples we use in teaching', head: ['Strand (ISEB framework)', 'Year 5 examples (ours, from the national curriculum)'], rows: [
          ['Number and place value', 'Numbers to a million, negative numbers in context, Roman numerals to M, rounding'],
          ['Calculations', 'Written addition and subtraction, short multiplication and division, multiples, factors and primes to 100'],
          ['Fractions, decimals and percentages', 'Equivalent fractions, mixed numbers, thousandths, simple percentages of amounts'],
          ['Measurement', 'Converting metric units, perimeter and area, estimating volume, time problems'],
          ['Geometry', 'Angles in degrees, angles on a line and around a point, 3D shapes from 2D drawings, reflection and translation'],
          ['Statistics', 'Line graphs and tables, including timetables']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What ISEB tells families',
          left: [
            'ISEB\'s preparation leaflet says "The ISEB Maths test is based on the National Curriculum Programme of Study, up to the end of Year 5", and that children will be "allowed a pen and paper during the test to jot down any calculations or notes that they want to make. This working paper is not marked."',
            'It names two common errors: pupils who "haven\'t read the question properly or have used the wrong operation". It recommends times tables as a route to confidence.'
          ],
          rightH3: 'Attainment, not potential',
          right: [
            'ISEB separates the four tests into two kinds. English and mathematics measure attainment, "in line with topics and knowledge that pupils will be taught in class". Verbal and non-verbal reasoning are meant to show potential through unfamiliar question types.',
            'That distinction is useful. Maths is the test where ordinary, steady teaching shows up most directly, because it measures what has been learned.'
          ] }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples, written by us',
      h2: 'How should a child work a Pre-Test style maths question?',
      lede: 'Three original questions in a one-at-a-time, choose-one style, at Year 5 level. None is an ISEB question; ISEB\'s own Test Walkthrough shows the real look of the platform.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Two prices, one total', p: 'An adult ticket costs three times a child ticket. Two adults and three children cost 27 tokens. What does an adult ticket cost? Draw a bar for one child ticket. An adult is three bars, so two adults are six bars, plus three child bars: nine bars make 27, so one bar is 3 and an adult ticket is 9. Check before choosing: 2 times 9 plus 3 times 3 is 27. No algebra, one picture.' },
          { h3: '2. Fractions of one amount', p: 'What is five sixths of 48 minus three eighths of 48? One sixth of 48 is 8, so five sixths is 40. One eighth is 6, so three eighths is 18. The answer is 22. The trap is subtracting the fractions first without a common denominator; working each part on paper takes twenty seconds and cannot go wrong that way.' },
          { h3: '3. Angles on a line', p: 'Three angles sit on a straight line. One is 47 degrees and the other two are equal. What is each of the equal angles? Angles on a line make 180 degrees, so the two equal angles make 133, which is odd, so each is 66.5 degrees. An estimate catches errors: each should be a little under 70. If the options include 66.5, choose it; if a child got 133, they forgot the halving.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders, one question at a time', head: ['Question (ours)', 'Answer', 'Check before you click'], rows: [
          ['2,345 plus 1,878', '4,223', 'Estimate 2,300 plus 1,900 is 4,200; the answer should be just above.'],
          ['1.2 kg take away 450 g', '750 g', 'Convert first: 1,200 g minus 450 g. Answers in kilograms and grams mixed are the usual slip.'],
          ['Write 1994 in Roman numerals', 'MCMXCIV', 'M for 1000, CM for 900, XC for 90, IV for 4. Read it back as a check.'],
          ['Which of 21, 23, 25 and 27 is prime?', '23', '21 is 3 times 7, 25 is 5 times 5, 27 is 3 times 9.'],
          ['What is 15 per cent of 60?', '9', 'Ten per cent is 6 and five per cent is 3. Add, then confirm it is less than a fifth of 60.'],
          ['A film starts at 18:40 and lasts 1 hour 55 minutes. When does it end?', '20:35', 'Add 2 hours to get 20:40, then take off 5 minutes.']
        ] },
        { kind: 'p', mt: true, html: 'Every row has a check that takes a few seconds and happens before the answer is chosen. That is the whole Pre-Test technique in miniature: on paper, a child can tidy up at the end; here, the end is each click.' }
      ]
    },
    {
      id: 'prep', tint: 'deep', eyebrow: 'Preparing well',
      h2: 'How much preparation does the ISEB Pre-Test need?',
      lede: 'Less than many families fear, by ISEB\'s own account. A sensible plan secures Year 5 maths, practises the one-way format briefly, and protects the child\'s calm.',
      body: [
        { kind: 'ol', items: [
          'Read ISEB\'s families page and framework, and note each senior school\'s own deadline within the session.',
          'Check the Year 5 strands one at a time: place value, the four operations, fractions, decimals and percentages, measures, geometry and data.',
          'Fix gaps with short daily practice, times tables first, as ISEB\'s own leaflet suggests.',
          'Practise one-way answering: one question on screen, an estimate on paper, a check, then a choice that cannot be undone.',
          'Use ISEB\'s free Test Walkthrough to try the platform, the coloured overlays and the font size controls, so nothing on the day is new.',
          'Stop timed practice a week or so before the sitting, and keep the last days light.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What ISEB says about practice',
          left: [
            'From ISEB\'s preparation leaflet: "Additional test practice is not a requirement of the ISEB Pre-Tests; however, some parents, guardians and families may benefit from preparation work to reduce test anxiety."',
            'ISEB endorses one commercial practice platform and warns that it "cannot guarantee the accuracy of third-party Common Pre-Tests practice resources that are not endorsed by ISEB". Our questions are third-party too, which is why we label them as ours and teach maths rather than imitate the test.'
          ],
          rightH3: 'Access arrangements',
          right: [
            'Where a senior school agrees, ISEB says applicants with special educational needs can have extra time of 25 per cent on each test, requested by the parent at registration with evidence such as an educational psychologist\'s report.',
            'The visible timer can be hidden if a countdown makes a child anxious. There is no extra time for English as an additional language, though a bilingual paper dictionary may be allowed.'
          ] },
        { kind: 'p', mt: true, html: 'Families aiming at 13 plus entry may meet Common Entrance after the Pre-Test; our <a class="ag-inline-link" href="/common-entrance-maths-tuition">Common Entrance maths page</a> covers that stage. For grammar school tests, which work quite differently, see <a class="ag-inline-link" href="/gl-assessment-11-plus-maths-practice">GL Assessment 11 plus maths</a> and the <a class="ag-inline-link" href="/11-plus-maths-tuition">national 11 plus maths page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 5 to the sitting',
    lede: 'Registration for 2026-27 opened in June 2026 and sittings run through the school year, so many children sit in the autumn or spring of Year 6.',
    table: { caption: 'Four stages before an ISEB Pre-Test', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Early Year 5', '1. Number facts', 'Tables, place value and fraction equivalents recalled, not worked out'],
      ['Through Year 5', '2. The six strands', 'Each of ISEB\'s strands answered correctly at Year 5 level, with mixed-topic problems'],
      ['Summer before Year 6', '3. One-way habit', 'Estimate, check, commit, on screen, without wanting to go back'],
      ['Weeks before the sitting', '4. Calm rehearsal', 'The Walkthrough tried, a timed mixed set done, and nothing new attempted']
    ] },
    left: { h3: 'A late start', ps: [
      'If the sitting is weeks away, we work on the commonest slips and the one-way habit, not on new topics.',
      'We will say honestly what that time can and cannot change.'
    ] },
    right: { h3: 'After the Pre-Test', ps: [
      'ISEB describes the Pre-Tests as one part of a school\'s admissions process; each senior school sets the rest.',
      'Children who enjoy the problem solving often move on to <a class="ag-inline-link" href="/courses/olympiad-competition-mathematics-mastery">competition maths</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths courses around independent school entry',
    lede: 'By stage, from Year 5 arithmetic to the maths that follows entry.',
    bands: [
      { num: 'I', h3: 'For the Pre-Test', sub: 'Years 5 and 6', courses: [
        { code: 'UK / ICP / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 strands taught for problems that mix topics.' },
        { code: 'UK / ICP / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Fast recall so checks fit inside the time.' },
        { code: 'UK / ICP / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'For gaps that sit underneath Year 5 work.' }
      ] },
      { num: 'II', h3: 'Beyond the test', sub: 'Year 6 to Year 8', courses: [
        { code: 'UK / ICP / 04', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Pre-algebra and geometry for the first senior years.' },
        { code: 'UK / ICP / 05', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder, slower problems for keen mathematicians.' },
        { code: 'UK / ICP / 06', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data reading and chance, taken further.' }
      ] },
      { num: 'III', h3: 'Maths and code', sub: 'For curious children', courses: [
        { code: 'UK / ICP / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and number explored in Python.' },
        { code: 'UK / ICP / 08', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation methods for number lovers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live, on screen, one question at a time',
    lede: TIMING + ' Teachers are based in India; India time is four and a half hours ahead of UK time in summer and five and a half in winter, and we fix every lesson in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 5 and 6.' },
      { time: 'Weekend morning', l: 'Room for a longer mixed set.' },
      { time: 'Holidays', l: 'Short, frequent lessons before a sitting.' }
    ],
    cells: [
      { h3: 'One-way practice', p: 'Questions shown singly, answers locked, as in the real test.' },
      { h3: 'Estimate on paper', p: 'Rough working on paper beside the screen, as ISEB allows.' },
      { h3: 'Six strands tracked', p: 'Progress noted strand by strand from ISEB\'s framework.' },
      { h3: 'Our own questions', p: 'Written by us at Year 5 level, never presented as ISEB items.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one level, or a teacher for one child.' },
      { h3: 'Calm by design', p: 'Hard questions framed as progress, so they do not frighten.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Projects students made in our classes in the years after entrance tests. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words from our Google profile, as written.',

  fees: {
    h2: 'Fees for Pre-Test maths lessons',
    lede: 'A monthly fee in the currency we use for UK families, the same for every month you choose to continue. The first lesson is free.',
    free: ['A full lesson on Year 5 maths', 'A frank view of strengths and gaps', 'No card needed to book'],
    group: ['15 to 20 children at one level', 'The same teacher each week', 'One-way practice built in', 'Progress by ISEB strand'],
    one: ['One child, one teacher', 'Planned around the sitting date', 'Helpful for a single stubborn gap']
  },

  faq: {
    eyebrow: 'ISEB Pre-Test questions',
    h2: 'What parents ask about the ISEB Pre-Tests',
    items: [
      { q: 'What is on the ISEB Pre-Test maths test?', a: 'Mathematics from the national curriculum for England up to the end of Year 5. ISEB\'s framework lists number and place value, calculations, fractions, decimals and percentages, measurement, geometry and statistics, with some arithmetic questions and some problems that mix topics.' },
      { q: 'How long is the ISEB Pre-Test?', a: 'ISEB says the four tests together take 2 hours 15 minutes. They can be sat on one day or split across several days, as the invigilation centre arranges.' },
      { q: 'Can my child go back and change an answer?', a: 'No. ISEB says the adaptive system does not allow pupils to go back and change previous answers. That is why we teach children to estimate and check before they choose.' },
      { q: 'Can a calculator be used?', a: 'No. ISEB says calculators must not be accessible. Pupils do have pen and paper for rough work, and ISEB says that working paper is not marked.' },
      { q: 'Why did my child get different questions from a friend?', a: 'Because the test is adaptive. ISEB says each answer helps choose the next question and that it is highly unlikely two pupils will see the same series of questions, or even the same number.' },
      { q: 'How many times can a child sit the Pre-Tests?', a: 'Once in an academic year. ISEB\'s framework adds that if a child were tested more than once in the same year, the first set of results would stand.' },
      { q: 'When can the 2026-27 Pre-Tests be taken?', a: 'ISEB\'s web pages give live testing from 1 September 2026 to late May 2027, after registration opened on 9 June 2026. Its framework PDF gives a window from the beginning of October to the end of June, so confirm the date with your child\'s school and each senior school.' },
      { q: 'How are ISEB Pre-Test results reported?', a: 'As a Standardised Age Score, adjusted for age and compared with a sample of pupils applying to independent schools, where the average is 100. Schools also see stanine and percentile rank.' },
      { q: 'Does my child need tutoring for the Pre-Tests?', a: 'ISEB says additional practice is not a requirement, though some families find preparation reduces anxiety. We teach Year 5 maths and the one-way habit; we do not claim to know the live questions.' },
      { q: 'When are your lessons?', a: TIMING + ' Every lesson is set in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for families applying to senior schools',
    lede: 'Other entrance tests, and what comes after.',
    items: [
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'The written exams some schools set at 11 and 13.' },
      { href: '/gl-assessment-11-plus-maths-practice', label: 'GL Assessment 11 plus maths', p: 'Grammar school tests written to each area\'s order.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The subject itself, without a test provider in mind.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The national tests at the end of Year 6.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'For children who want harder problems.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year and roughly when they will sit. We teach a real lesson, one question at a time, and then tell you what we saw.',
    readFirst: 'Want to read first? The <a class="ag-inline-link" href="/courses/11-plus-maths-preparation-course-uk">course page</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'WhatsApp is the fastest way to reach us and is free from a UK mobile. Replies come from our team in India, on a +91 number.',
    formNote: 'No card details. One reply with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Entrance tests', links: [
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths' },
        { href: '/gl-assessment-11-plus-maths-practice', label: 'GL 11 plus maths' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Check first, then click: the Pre-Test does not go back'
  },

  personalityCss: `
.ag-root.ag-icp .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-icp .ag-capsule { border-left-width: 4px; border-radius: 0 8px 8px 0; }
.ag-root.ag-icp .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-icp .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-icp .ag-table th:first-child { width: 30%; }
`,

  dossier: {
    curriculumAuthority: 'ISEB Common Pre-Tests, 2026-27 session, read 31 October 2026 from iseb.co.uk. Four online, adaptive, multiple-choice tests (English, mathematics, verbal reasoning, non-verbal reasoning), 2 hours 15 minutes in all, sat once per academic year, Year 7 or deferred Year 9 entry; registration opened 9 June 2026, live testing from 1 September 2026 to late May 2027 (framework PDF: beginning of October to end of June); "the system does not allow them to go back and change previous answers"; "it is highly unlikely that two pupils will see the same series of questions"; no calculators, pen and paper for rough work not marked; maths to the end of Year 5 in six strands; Standardised Age Score with average 100, stanine, percentile rank; first results stand; 25 per cent extra time for SEND by agreement; fees paid by senior schools; registration free for families; "Additional test practice is not a requirement of the ISEB Pre-Tests".',
    localProject: 'The test you cannot go back in. The page sets out the ISEB Pre-Tests from ISEB\'s own pages and 2026-27 framework, including the two testing windows ISEB prints, then explains what adaptive and one-way mean for a child: skipping is not a tactic, harder questions can be good news, and checking must happen before the click. A table maps paper-test habits to what works instead. It lists ISEB\'s six maths strands with Year 5 examples of ours, three original worked examples and a six-question practice set where each row carries a pre-click check, a six-step preparation plan, and ISEB\'s own words that extra practice is not required. Lesson family: an online adaptive admissions test where technique, not content, is the new thing.',
    requiredMentions: ['does not allow them to go back and change previous answers', 'highly unlikely that two pupils will see the same series of questions', 'This working paper is not marked', 'the first set of results will stand', 'Additional test practice is not a requirement', 'between the beginning of October and the end of June', 'Applicant ID', 'Check before you click'],
    sources: [
      { claim: 'ISEB Common Pre-Tests: four online adaptive tests, Year 6 or 7, 2026-27 timeline.', url: 'https://www.iseb.co.uk/assessments/common-pre-tests/' },
      { claim: 'ISEB information for families: multiple choice, 2 hours 15 minutes, Year 7 or Year 9 entry, age-standardised results.', url: 'https://www.iseb.co.uk/assessments/common-pre-tests/cpt-for-families/' },
      { claim: 'ISEB information for schools: adaptive behaviour, no going back, calculators, rough paper, maths to Year 5, SEND, results, once a year, fees.', url: 'https://www.iseb.co.uk/assessments/common-pre-tests/cpt-for-schools/' },
      { claim: 'ISEB Common Pre-Tests Framework 2026-27: maths strands, testing window, first results stand.', url: 'https://www.iseb.co.uk/wp-content/uploads/ISEB-Common-Pre-Tests-Framework.pdf' },
      { claim: 'Preparing your child for the ISEB Pre-Tests: practice not required, working paper not marked, common errors.', url: 'https://www.iseb.co.uk/wp-content/uploads/ISEB-Pre-Tests-Preparing-your-child-for-the-ISEB-Pre-Tests.pdf' }
    ],
    rejectedClaims: [
      'Which schools use the Pre-Tests: ISEB names some in passing and in testimonials; the page names none.',
      'The price of ISEB\'s prep pack and any commercial platform: not printed.',
      'Number of questions or minutes in the maths test alone: ISEB gives only the four-test total and says question numbers vary.',
      'How the adaptive algorithm works in detail: not published; our ladder picture is labelled as our simplification.',
      'Any score a school requires, or any outcome promise.'
    ]
  }
};
