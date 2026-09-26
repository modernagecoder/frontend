'use strict';
// 11 plus maths tuition in Kingston upon Thames (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text. The council's admissions service (Achieving
// for Children, kr.afcinfo.org.uk) returned 403; not retried. Everything below comes from the two schools.
//  - Tiffin School, Year 7 admissions page (key dates for September 2027 entry): registration opened 5 June 2026;
//    Stage One tests Friday 2 October 2026 across morning and afternoon slots; parents notified of Stage Two
//    invitations 16 October 2026; Stage Two 12 November 2026. (The page and FAQ give three different registration
//    deadlines, 1, 2 and 4 September 2026, so none is printed.)
//  - Tiffin School FAQs, entry September 2027: "Tiffin School is a selective school for boys"; two stage entrance
//    test; register in the summer term of Year 5; "We work in partnership with Quest to set our Year 7 Entrance
//    Tests"; Stage One in English and Maths on an OMR "marked by a computer", "about 40 to 60 minutes each"; maths
//    answers "may be similar to those above (multiple choice), or they may be numerical"; Stage Two "require hand
//    written answers"; Combined Score "50% English and 50% Maths", maths combining Stage One and Stage Two "in the
//    ratio 2:3"; no past papers, illustrative questions published; raw scores standardised and age-weighted.
//  - The Tiffin Girls' School, Year 7 admissions: registration closed 12.00 noon Tuesday 1 September 2026; Stage One
//    Thursday 1 and Friday 2 October 2026; invitations on or around 14 October 2026; Stage Two Saturday 7 November 2026.
//  - TGS FAQs, September 2027: "a selective school for girls"; Stage One "an English paper and a maths paper";
//    maths "some may be multiple choice, and others will require children to record a numerical answer"; OMR columns
//    "represent single digits, `tens', and `hundreds'"; examples 7, 87, 521 and a time "as a digital clock", 07:05;
//    each test "less than 60 minutes"; Stage Two written answers, "an answer sheet for the maths test", "No marks are
//    given for calculations or workings out", set and marked by the school; papers change each year "often involving
//    the number of questions, time limits, and question types"; assumes completion of the National Curriculum "for
//    Year 5 pupils" with "some questions in unfamiliar formats"; Combined Mark "60% English and 40% maths", maths from
//    Stage Two and Stage One "in a ratio of 3:1"; no rulers.
// Spine: many Kingston maths answers are not chosen but written into digit columns, and the grid's size is itself
// information. Lesson family: place value and digital time as answer format; column count as a size check.
// Admissions (Priority Area, designated area, ranking, places): not used.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'TIFFIN TESTS', label: '11 plus maths in Kingston', blurb: 'At the Tiffin schools many maths answers are written digit by digit into columns, and the number of columns is a clue in itself.' },
  slug: '11-plus-maths-tuition-kingston',
  code: 'kgm',
  accent: '#3C5C44',
  accentRationale: 'Kingston 11 plus maths: a Thames-bank green, chosen by colour distance from every accent on the site (6.03:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Kingston upon Thames',
  title: '11 Plus Maths Tuition Kingston | Tiffin Entrance Test Maths',
  description: 'Live online 11 plus maths for the Tiffin School and Tiffin Girls\' School tests in Kingston: two stages, numerical answers written into columns, Year 5 maths.',
  ogDescription: 'The two Tiffin schools ask for many maths answers as digits written into columns, then for handwritten answers at Stage Two. How to prepare for both, with Year 5 maths.',
  twitterDescription: 'Tiffin 11 plus maths, taught live online: numerical answers, digit columns and a written second stage.',
  pageName: '11 Plus Maths Tuition in Kingston upon Thames',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Tiffin School and The Tiffin Girls\' School entrance tests in Kingston upon Thames, based on what the two schools publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Tiffin entrance tests, teaching Year 5 maths for numerical answers on a column grid and for handwritten Stage Two papers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Kingston',
  navLinks: [
    { href: '#tiffin', label: 'The tests' },
    { href: '#columns', label: 'Digit columns' },
    { href: '#stagetwo', label: 'Stage Two' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Kingston upon Thames &middot; Tiffin entrance test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Kingston',
  lede: 'Kingston\'s two selective schools, Tiffin School for boys and The Tiffin Girls\' School, each run their own two-stage entrance test, and both put a detail about maths answers into their published FAQs that changes how a child should practise. At Stage One, some maths questions are multiple choice but others ask for a number, which the child writes digit by digit into columns on an answer sheet. The Tiffin Girls\' School explains that the columns "represent single digits, `tens\', and `hundreds\'", and that a time is given "as a digital clock". With no options to pick from, a slipped digit is simply wrong. Yet the grid carries a useful clue: the number of columns tells a child how many digits the answer should have. At Stage Two the options disappear altogether, and the girls\' school says no marks are given for working. This page covers what both schools publish, and how we teach for it.',
  secondaryCta: { href: '#columns', label: 'See the digit-column lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Tiffin entrance tests.',
  heroNote: 'Maths only &middot; We do not teach English for the tests &middot; No connection with either Tiffin school',
  spec: [
    ['Schools', 'Tiffin School; The Tiffin Girls\' School'],
    ['Stages', 'Two, at each school'],
    ['Stage One', 'English and maths, OMR sheet'],
    ['Maths answers', 'Multiple choice or numerical'],
    ['Numerical answers', 'Digits written into columns'],
    ['Stage Two', 'Handwritten answers'],
    ['Content', 'National Curriculum to Year 5'],
    ['We teach', 'Accurate answers with no options']
  ],
  capsuleQ: 'In short',
  capsule: 'Tiffin School and The Tiffin Girls\' School are Kingston\'s selective schools, and each runs its own two-stage test. Stage One is an English paper and a maths paper, each under an hour, answered on a computer-marked OMR sheet; in maths, some questions are multiple choice and others need a numerical answer written into digit columns. Children with the highest Stage One scores are invited to Stage Two, where answers are handwritten. Both schools say the tests assume the National Curriculum up to Year 5, with some unfamiliar formats. For September 2027 entry, Stage One falls on 1 and 2 October 2026, and Stage Two on 7 November (girls) and 12 November (boys). Maths counts for half of Tiffin School\'s combined score and 40% at Tiffin Girls\'. We teach the maths, live online, for both kinds of answer. There is a free first lesson; afterwards a group place is USD 100 a month and one to one teaching USD 150 a month.',

  picks: {
    eyebrow: 'Where to begin for Tiffin',
    h2: 'Three courses for answers without options',
    lede: 'Choose by accuracy, not speed: a column answer with one wrong digit scores nothing.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'KINGSTON / A', title: 'Tiffin-ready 11 plus maths', note: 'Year 5 content practised with multiple-choice, digit-column and handwritten answers.' },
      { course: 'mental-maths-mastery-kids', code: 'KINGSTON / B', title: 'Reliable mental arithmetic', note: 'Checking an answer in the head before committing each digit to a column.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'KINGSTON / C', title: 'Place value and number basics', note: 'For children in Year 4 who still mix up tens and hundreds under pressure.' }
    ]
  },

  sections: [
    {
      id: 'tiffin', tint: 'tint', eyebrow: 'The two tests',
      h2: 'What Tiffin School and Tiffin Girls\' publish',
      lede: 'Kingston\'s council admissions service returned an error to our reader, so everything here comes from the two schools\' own pages and 2027 FAQs, read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'Key dates for September 2027 entry, as each school publishes them', head: ['Step', 'Tiffin School (boys)', 'The Tiffin Girls\' School'], rows: [
          ['Registration', 'Opened 5 June 2026, in the summer term of Year 5', 'Closed 12.00 noon, Tuesday 1 September 2026'],
          ['Stage One', 'Friday 2 October 2026, morning or afternoon', 'Thursday 1 and Friday 2 October 2026'],
          ['Stage Two invitations', '16 October 2026', 'On or around 14 October 2026'],
          ['Stage Two', '12 November 2026', 'Saturday 7 November 2026']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Tiffin School works "in partnership with Quest to set our Year 7 Entrance Tests". Stage One is English and maths, each about 40 to 60 minutes, answered on an OMR sheet "marked by a computer". For the maths paper, the FAQ says, answers "may be similar to those above (multiple choice), or they may be numerical". Stage Two papers are of similar length and "require hand written answers".',
            'The Tiffin Girls\' School describes the same pattern: Stage One is "an English paper and a maths paper", each lasting less than 60 minutes, with maths answers that are either multiple choice or "a numerical answer". Its Stage Two papers are set and marked by the school, with an answer sheet for maths.'
          ],
          right: [
            'Both schools say they do not publish past papers. Tiffin School publishes illustrative questions; Tiffin Girls\' warns that its papers change each year, "often involving the number of questions, time limits, and question types". Both assume children have completed the National Curriculum for Year 5, and Tiffin Girls\' adds that some questions will be "in unfamiliar formats".',
            'We note one thing and leave it there: the published registration deadline for Tiffin School appears in more than one form across its page and FAQ, so we do not print one. Families should check the school\'s current key dates. Admissions, priority areas and ranking belong to the schools.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.tiffinschool.co.uk/admissions/year-7-admissions/" rel="noopener" target="_blank">Tiffin School, Year 7 admissions</a> and its FAQs for entry in September 2027; <a class="ag-inline-link" href="https://www.tiffingirls.org/admissions/year-7/" rel="noopener" target="_blank">The Tiffin Girls\' School, Year 7 admissions</a> and its FAQs for September 2027. The council\'s admissions pages returned HTTP 403 and were not used. Modern Age Coders has no connection with either school, Quest or the council.' }
      ]
    },
    {
      id: 'columns', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Writing a number into columns, one digit at a time',
      lede: 'The Tiffin Girls\' School FAQ shows how numerical answers are marked: one column per digit, with examples of 7, 87 and 521, and a time written like a digital clock.',
      body: [
        { kind: 'table', caption: 'Column answers of the kind the schools describe, with Year 5 questions of our own', head: ['Our question', 'Columns on the sheet', 'Answer to write'], rows: [
          ['What is 1,000 - 637?', 'Three: hundreds, tens, ones', '3 6 3'],
          ['How many minutes are there in 3 hours 20 minutes?', 'Three', '2 0 0'],
          ['What is the largest whole number that rounds to 700 to the nearest 100?', 'Three', '7 4 9'],
          ['A film starts at 18:40 and lasts 1 hour 35 minutes. When does it end?', 'Four, as a digital clock', '2 0 1 5 (20:15)'],
          ['What is the smallest prime number greater than 80?', 'Two', '8 3']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Tiffin Girls\' School says that for numerical answers "the columns will represent single digits, `tens\', and `hundreds\'", so a one-digit answer has one column and a three-digit answer three. That turns the grid into a check. If a child\'s answer to a three-column question has four digits, something has gone wrong before any digit is written: a place value slip, a multiplication by ten too many, a forgotten step.',
            'The check has limits, and we teach them honestly. It catches answers of the wrong size. It does not catch 463 written for 363. For that, a child still needs the other habits: estimate first (1,000 - 637 is a bit less than 400), then check the last digit (7 + 3 ends in 0).'
          ],
          right: [
            'Times are the second trap. The school\'s own example gives 5 minutes past 7 as 07:05, four columns with a leading zero. A child who writes 7:5, or 705 in three columns, has the right idea and the wrong answer. Converting between analogue and digital time, and between hours and minutes, is primary work; writing it in exactly the form asked is a separate skill we practise.',
            'All the examples the school publishes are whole numbers or clock times. We therefore teach children to expect numerical questions whose answers are whole numbers, and to treat a decimal or a remainder in their working as a sign to reread the question.'
          ] },
        { kind: 'source', html: 'Sources: The Tiffin Girls\' School FAQs for September 2027 (the OMR column description and its examples); Tiffin School FAQs (maths answers "may be numerical"). The questions in the table are written by Modern Age Coders.' }
      ]
    },
    {
      id: 'stagetwo', tint: 'plain', eyebrow: 'The second stage',
      h2: 'Stage Two: handwritten, and marked on the answer alone',
      lede: 'Children with the highest Stage One scores are invited back in November. The maths changes character again.',
      body: [
        { kind: 'two',
          leftH3: 'What the schools say',
          left: [
            'Tiffin School says Stage Two papers are similar in length to Stage One and "require hand written answers". The Tiffin Girls\' School says its Stage Two maths has an answer sheet, and states: "No marks are given for calculations or workings out."',
            'That sentence is worth sitting with. In school, and later at GCSE, a child who sets out a method well gets credit even with a slip at the end. In this paper, as the school describes it, the final answer is all that counts. A beautiful method with a copying error scores the same as a blank.'
          ],
          rightH3: 'How we teach for it',
          right: [
            'We still teach children to write working, because working is how they get the answer right. What changes is the ending: every answer is checked against the question before it goes on the sheet. Does it answer what was asked? Is it in the right unit? Is it the right size?',
            'We also teach children to copy carefully from working to answer box, which sounds trivial and is not. Under time pressure, 368 in the margin becomes 386 on the sheet more often than anyone expects.'
          ] },
        { kind: 'table', caption: 'How the two schools say the maths is weighted in the combined score', head: ['School', 'Share of combined score from maths', 'How the maths share is built'], rows: [
          ['Tiffin School', '50%', 'Stage One and Stage Two maths in the ratio 2:3'],
          ['The Tiffin Girls\' School', '40%', 'Stage Two and Stage One maths in the ratio 3:1']
        ] },
        { kind: 'p', html: 'Both schools weight the written second stage more heavily than the first. We give those published ratios so families can see why Stage Two maths deserves as much preparation time as Stage One, not to suggest any score. Both schools also standardise raw marks for age.' }
      ]
    },
    {
      id: 'unfamiliar', tint: 'tint', eyebrow: 'Changing papers',
      h2: 'Papers that change every year',
      lede: 'Neither school publishes past papers, and Tiffin Girls\' says its papers change in the number of questions, time limits and question types. That is a reason to prepare differently, not to worry.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Content is fixed', p: 'Both schools assume the Year 5 National Curriculum and nothing beyond it. Whatever the format, the maths inside is known in advance.' },
          { h3: 'Format is not', p: 'A child who has only ever practised one layout can be thrown by a new one. We vary layouts on purpose: multiple choice one week, columns the next, written the week after.' },
          { h3: 'Unfamiliar is the point', p: 'Tiffin Girls\' says some questions test "application skills and adaptability". A familiar idea in a new setting is exactly what Year 5 problem solving should look like.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Tiffin Girls\' notes that other schools\' past papers and online resources exist, that practising with them "can be helpful preparation", and that it does not endorse any. We agree with the caution. Papers from elsewhere are useful for stamina; they say nothing about what Tiffin will ask.',
            'Our own questions are written for Year 5 content and for the answer formats the schools describe. We do not reproduce the illustrative questions or anything from either school\'s tests.'
          ],
          right: [
            'The girls\' school also asks that children bring no ruler and use a standard HB pencil. We set practice the same way, so the physical side of the test is familiar long before October.',
            'English is half or more of both combined scores, and we do not teach it for the test. Families should know that before booking with us.'
          ] }
      ]
    },
    {
      id: 'kingston', tint: 'plain', eyebrow: 'Kingston and beyond',
      h2: 'Two schools, two tests, one lesson at home',
      lede: 'The tests are sat in person, Tiffin School\'s Stage One at the school itself. The preparation needs no travel at all.',
      body: [
        { kind: 'two',
          left: [
            'Tiffin School and The Tiffin Girls\' School run separate tests with separate dates, so a family applying to one is preparing for one set of papers. The maths content and answer formats are similar enough that the same teaching serves both.',
            'For coding and computing in the borough, we have a separate <a class="ag-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston coding page</a>.'
          ],
          right: [
            'Groups are formed by level. A child preparing for Tiffin can share a lesson with children at the same stage of Year 5 maths from other parts of the UK, five to ten at a time, all on video.',
            'We have no link with either school, with Quest or with the council, and we give no advice on registration choices, priority areas or places.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The months ahead',
    h2: 'Four stages to an October test',
    lede: 'Kingston\'s Stage One falls in early October of Year 6, a little later than many areas. For a child in Year 5 now, that is roughly a year away.',
    table: { caption: 'Building to multiple-choice, column and written answers', head: ['When', 'Stage', 'Ready when'], rows: [
      ['Year 4', '1. Place value', 'Reads, writes and rounds numbers confidently, and knows which digit is worth what'],
      ['Autumn and spring, Year 5', '2. Year 5 content', 'Covers the full Year 5 curriculum with accurate written methods'],
      ['Summer, Year 5', '3. Column answers', 'Writes numbers and digital times into columns, and uses the column count as a check'],
      ['September, Year 6', '4. No options', 'Answers without choices, checks against the question, copies accurately to the sheet']
    ] },
    left: { h3: 'Starting late', ps: [
      'Registration is in the summer of Year 5, and Stage One in October of Year 6, so a late start still leaves months. Spend them on accuracy first.',
      'We will tell you frankly at the free lesson how much can be done in the time.'
    ] },
    right: { h3: 'After November', ps: [
      'Accurate, checked answers are the habit of good secondary mathematicians. Many children carry on with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a program either gives the right output or it does not.',
      'Some try the challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All our courses',
    h2: 'Maths and coding for Kingston families',
    lede: 'Organised by stage; every card opens the syllabus.',
    bands: [
      { num: 'I', h3: 'For the Tiffin tests', sub: 'Years 3 to 5', courses: [
        { code: 'KGM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 maths for every answer format.' },
        { code: 'KGM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick checks before an answer is committed.' },
        { code: 'KGM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Place value and number sense from the start.' },
        { code: 'KGM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Columns of beads before columns on a sheet.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'KGM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Key Stage 3 number, algebra and geometry.' },
        { code: 'KGM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Accurate answers and clear working to GCSE.' },
        { code: 'KGM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Answer-only problems, the competition way.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Precision practised', courses: [
        { code: 'KGM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that are either right or wrong.' },
        { code: 'KGM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Exact instructions, tested straight away.' },
        { code: 'KGM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code for children ready for more.' }
      ] },
      { num: 'IV', h3: 'Further ahead', sub: 'Teenage years', courses: [
        { code: 'KGM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Faster methods on firm foundations.' },
        { code: 'KGM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Numbers in, predictions out.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'Lessons fitted around a Kingston school day',
    lede: 'Teaching comes live from India. We keep primary lessons to early evening and weekend morning slots in UK time, and our side absorbs the clock change each spring and autumn.',
    slots: [
      { time: 'Weekday evenings, early', l: 'Soon after the school day ends.' },
      { time: 'Weekend mornings', l: 'When children are fresh.' },
      { time: 'Holiday weeks', l: 'Short extra sessions in the breaks.' }
    ],
    cells: [
      { h3: 'A constant teacher', p: 'The same person every week tracks each child\'s habits.' },
      { h3: 'Plain reporting', p: 'A few honest lines after lessons, including what went badly.' },
      { h3: 'Groups of five to ten', p: 'Same level, so every explanation is pitched right.' },
      { h3: 'Our questions only', p: 'Nothing copied from either school\'s illustrative material.' },
      { h3: 'One to one on request', p: 'For accuracy problems that need close attention.' },
      { h3: 'Maths, not English', p: 'No English coaching and no advice on admissions.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Four projects published by students at our school, built on the same careful arithmetic. See the rest on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents have written on our Google profile, verbatim.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, the same for all families outside India. No sign-up fee and no fixed term.',
    free: ['A taught lesson, not a sales call', 'Our frank view afterwards', 'No card details'],
    group: ['Five to ten children, matched by level', 'A regular teacher', 'Answers checked in class', 'Certificate on completion'],
    one: ['One child, one teacher', 'Close work on accuracy', 'Helpful between Stage One and Stage Two']
  },

  faq: {
    eyebrow: 'Tiffin questions',
    h2: 'What Kingston families ask us',
    items: [
      { q: 'What is the maths like in the Tiffin Stage One test?', a: 'Both schools say Stage One includes a maths paper of under an hour, answered on a computer-marked OMR sheet. Some questions are multiple choice; others need a numerical answer written into columns.' },
      { q: 'How are numerical answers written?', a: 'The Tiffin Girls\' School says the columns represent single digits, tens and hundreds, so the number of columns matches the number of digits. Times are written as on a digital clock, for example 07:05.' },
      { q: 'What happens at Stage Two?', a: 'Children with the highest Stage One scores are invited back in November for English and maths papers with handwritten answers. Tiffin Girls\' says no marks are given for calculations or workings out.' },
      { q: 'How much does maths count?', a: 'Tiffin School says its combined score is 50% English and 50% maths, with Stage One and Stage Two maths in the ratio 2:3. Tiffin Girls\' says 60% English and 40% maths, with Stage Two and Stage One maths in a ratio of 3:1.' },
      { q: 'What maths do the tests cover?', a: 'Both schools assume completion of the National Curriculum for Year 5 and do not expect topics beyond it, though some questions come in unfamiliar formats.' },
      { q: 'When are the tests for September 2028 entry?', a: 'Not published when we checked on 26 September 2026. For 2027 entry, Stage One is on 1 and 2 October 2026 and Stage Two in November 2026. The schools publish new dates each year.' },
      { q: 'Are there Tiffin past papers?', a: 'No. Both schools say they do not publish past papers; Tiffin School publishes illustrative questions. We write our own practice and do not copy either school\'s material.' },
      { q: 'Do you prepare children for the English papers?', a: 'No. We teach maths only, and we do not advise on registration, priority areas or places.' },
      { q: 'Can my child take a ruler?', a: 'The Tiffin Girls\' School asks that children do not bring a ruler, as rulers are not allowed in any of its tests.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no joining fee.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Nearby pages',
    h2: 'More for families in south-west London and Surrey',
    lede: 'Coding in Kingston, the national 11 plus page, and neighbouring selective areas.',
    items: [
      { href: '/coding-classes-in-kingston-upon-thames-london', label: 'Coding classes in Kingston', p: 'Our coding page for the borough.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Our national page on 11 plus maths.' },
      { href: '/11-plus-maths-tuition-sutton', label: '11 plus maths in Sutton', p: 'Another two-stage process, next door.' },
      { href: '/coding-classes-in-surrey', label: 'Coding classes in Surrey', p: 'For families across the county boundary.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges through the year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every area we cover in the UK.' }
    ]
  },

  start: {
    h2: 'Book a first lesson, free',
    lede: 'Tell us the school year, and whether careless slips or hard problems are the bigger worry. We teach a real lesson, then give you an honest verdict.',
    readFirst: 'Would rather look around? Every <a class="ag-inline-link" href="/courses">course syllabus</a> is online, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the route onward.',
    note: 'Message us on WhatsApp for the fastest answer. We are in India, with an Indian number and no UK office.',
    formNote: 'No card required. We reply once to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Local and national', links: [
        { href: '/coding-classes-in-kingston-upon-thames-london', label: 'Coding in Kingston' },
        { href: '/11-plus-maths-tuition-sutton', label: '11 plus maths in Sutton' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the tests; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-kgm .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-kgm .ag-capsule { border-left-width: 5px; border-radius: 0 9px 9px 0; }
.ag-root.ag-kgm .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-kgm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.012em; }
.ag-root.ag-kgm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; letter-spacing: 0.04em; }
.ag-root.ag-kgm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-kgm .ag-three h3 { letter-spacing: -0.007em; }
.ag-root.ag-kgm .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['Tiffin Girls', 'Tiffin School', 'No marks are given for calculations', 'ratio of 3:1', '07:05', 'digital clock', 'unfamiliar formats', 'single digits']
};
