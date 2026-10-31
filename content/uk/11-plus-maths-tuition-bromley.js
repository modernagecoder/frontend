'use strict';
// 11 plus maths tuition in Bromley (ag- maths door by area, UK cluster row UK061).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// 11-plus-maths-tuition-bromley/):
//  - London Borough of Bromley, "Secondary education in Bromley 2027-2028" booklet (bromley.gov.uk/downloads/
//    file/3972): "In Bromley there are two selective (grammar) schools (St Olave's Grammar School and Newstead
//    Wood School), both admit children based on the outcome of their selection test"; "Applications are
//    prioritised in score order from highest to lowest."; "The London Borough of Bromley does not administer the
//    selective/grammar testing for either of the two grammar schools in Bromley."; "being successful in a test
//    does not guarantee admission"; key dates: 1 September 2026 applications open; 18 September 2026 St Olave's
//    Stage 1; 25 and 26 September 2026 Newstead Wood selection test; 31 October 2026 closing date; 13 November
//    2026 St Olave's Stage 2 "for those invited back after Stage 1"; 1 March 2027 National Offer Day; distance
//    table "Places offered on Test Score" for both; appeals 2026: Newstead Wood 17 heard, 0 upheld; St Olave's
//    12 heard, 0 upheld. (Both schools are named because the council names them in its testing text and the
//    test is the topic.)
//  - St Olave's Grammar School, Entrance Test Information: "The SET will last one hour and will comprise multiple
//    choice questions in English, Logic (both Verbal and Non-Verbal Reasoning) and Mathematics."; HB pencil on
//    the Answer Sheet; "Mobile telephones, wristwatches, dictionaries, and calculators are not allowed"; Stage 2:
//    pens "for the English Paper, and pencils, an eraser and a ruler for the Mathematics Paper"; "Mobile
//    telephones, wristwatches and calculators are not allowed in the Test." Key Dates: 2027 entry SIF opens
//    Monday 8 June 2026 9am, closes Monday 29 June 2026 midday; SET Friday 18 September 2026; outcome mid-October;
//    Stage 2 Friday 13 November 2026; National Offer Day Monday 1 March 2027; 2028 entry SIF 7 June to 28 June
//    2027, SET Friday 17 September 2027, Stage 2 Friday 12 November 2027. FAQ: PAN 124 plus up to 4 chorister
//    places; "an average of around 1600 applicants for the 2025 and 2026 application seasons"; no catchment, no
//    sibling policy, no feeder schools; "the top 450 performing boys will be invited to proceed to our Stage 2
//    test"; "All 450 boys will have met the minimum standard"; final rank order shared solely with the LA; not
//    invited means not eligible, so do not name the school. Overview: "1595 applications were made for 2027 Entry".
//  - Newstead Wood School, About the Selection Test: "The Selection Test consists of two papers. The first will
//    assess Verbal Reasoning and the second will assess Non-Verbal Reasoning. We do not test on any other
//    subjects."; "The cut-off score on National Offer Day 2026 was 225."; "We received 1510 registrations to sit
//    the test for entry in September 2025."; "We do not sell past papers or practice/specimen papers." Year 7
//    admissions: test at the end of September, just after entering Year 6; results emailed at least one week
//    before the CAF deadline; catchment 9 miles; SIF opens in the Summer Term.
// St Olave's sample questions (school PDFs) were not reproduced; the arrangements PDF host returned 403 and was not
// retried. Our own, labelled: the bar model examples, practice set and plan. Spine: two grammar schools, opposite
// answers. The girls' school tests no maths at all; the boys' school tests maths twice, the second time in a
// written Mathematics Paper with a ruler, held after the council deadline. Lesson family: bar models, drawn with a
// ruler, for multi-step word problems.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'BROMLEY: ST OLAVE\'S AND NEWSTEAD WOOD', label: '11 plus maths in Bromley', blurb: 'Two Bromley grammar schools, opposite answers: no maths at Newstead Wood, maths twice at St Olave\'s, the second time with a ruler.' },
  slug: '11-plus-maths-tuition-bromley',
  code: 'gam',
  accent: '#506232',
  accentRationale: 'Bromley 11 plus: a Kentish orchard olive (#506232), 6.20:1 on #FBF8F2 and 5.34:1 on the deepest paper tint, yellower than the North Yorkshire moss so the two green pages stay distinct',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Bromley',
  title: '11 Plus Maths Tuition Bromley | St Olave\'s and Newstead Wood',
  description: '11 plus maths tuition in Bromley: St Olave\'s tests maths in both its stages, Newstead Wood tests none. The 2026 and 2027 dates, the 450 rule and bar models.',
  ogDescription: 'Bromley\'s two grammar schools give opposite answers on maths. St Olave\'s asks it twice; Newstead Wood says it tests no subject but reasoning.',
  twitterDescription: 'Bromley 11 plus maths: St Olave\'s Stage 1 and Stage 2, the top 450, Newstead Wood\'s reasoning-only test, and a ruler-drawn bar model lesson.',
  pageName: '11 Plus Maths Tuition in Bromley',
  webPageDescription: 'A guide for Bromley families on where maths does and does not appear in the borough\'s two grammar school tests, built from the London Borough of Bromley\'s 2027-2028 booklet and the schools\' own pages, with live online maths lessons for Years 5 and 6.',
  courseDescription: 'Live online maths lessons for Bromley children in Years 5 and 6, built on the national curriculum, with multi-step problem solving and bar model diagrams for a written maths paper.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus in Bromley',
  navLinks: [
    { href: '#two', label: 'Two schools' },
    { href: '#stolaves', label: 'St Olave\'s' },
    { href: '#newstead', label: 'Newstead Wood' },
    { href: '#bars', label: 'Bar models' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Bromley &middot; St Olave\'s and Newstead Wood &middot; Years 5 and 6',
  h1: '11 plus maths tuition in Bromley',
  lede: 'Bromley has two grammar schools, and on maths they could hardly differ more. St Olave\'s Grammar School tests boys in two stages, and maths is in both: a one-hour multiple-choice paper in September, then, for the 450 boys invited back, a written Mathematics Paper in November, sat with pencils, an eraser and a ruler. Newstead Wood School tests girls in verbal and non-verbal reasoning and says: "We do not test on any other subjects." Modern Age Coders teaches upper primary maths live online, to a class or to one child. This page sets out both schools\' tests from their own pages and the council\'s booklet, and teaches the diagram that a ruler in a maths exam is for: the bar model.',
  secondaryCta: { href: '#stolaves', label: 'The St Olave\'s two stages' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child in Bromley.',
  heroNote: 'From the London Borough of Bromley\'s 2027-2028 booklet and both schools\' pages, read 31 October 2026 &middot; Not connected with either school or the council',
  spec: [
    ['Grammar schools', 'Two: one boys\', one girls\''],
    ['Tests run by', 'Each school; not the council'],
    ['St Olave\'s Stage 1', 'One hour, includes maths'],
    ['St Olave\'s Stage 2', 'English Paper and Mathematics Paper'],
    ['Invited to Stage 2', 'The top 450 boys'],
    ['Newstead Wood', 'Verbal and non-verbal reasoning only'],
    ['Newstead Wood cut-off', '225 on National Offer Day 2026'],
    ['We teach', 'Year 5 and 6 maths, live online']
  ],
  capsuleQ: 'Is there maths in the Bromley 11 plus?',
  capsule: 'It depends on the school. The London Borough of Bromley says its two grammar schools, St Olave\'s Grammar School and Newstead Wood School, each admit on their own selection test, which the council does not run. St Olave\'s Selective Entrance Test, held on Friday 18 September 2026 for 2027 entry, "will last one hour and will comprise multiple choice questions in English, Logic (both Verbal and Non-Verbal Reasoning) and Mathematics", and the top 450 boys sat a Stage 2 English Paper and Mathematics Paper on Friday 13 November 2026. Newstead Wood\'s test, on 25 and 26 September 2026, is verbal and non-verbal reasoning only. Modern Age Coders teaches the maths behind the St Olave\'s papers live online, in a group or 1-on-1, through our 11 plus maths preparation course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Courses for a Bromley 11 plus candidate',
    lede: 'For a boy aiming at St Olave\'s, the first card is the core course; the second firms up arithmetic before a timed hour; the third adds the early secondary topics a demanding written paper can reach towards.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'BROM / 01', title: 'Our 11 plus maths course', note: 'Upper primary maths for a multiple-choice hour and then a written paper, with diagrams and full working.' },
      { course: 'mental-maths-mastery-kids', code: 'BROM / 02', title: 'Arithmetic that holds up', note: 'Fluent facts and mental strategies, so a mixed English, logic and maths hour is not lost to slow sums.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BROM / 03', title: 'Early secondary maths', note: 'Ratio, equations and geometry for a strong Year 6 who wants more depth.' }
    ]
  },

  sections: [
    {
      id: 'two', tint: 'tint', eyebrow: 'Two schools, two answers',
      h2: 'Which grammar schools are there in Bromley, and do they test maths?',
      lede: 'Two. The council\'s booklet names them and says both "admit children based on the outcome of their selection test", with applications "prioritised in score order from highest to lowest." Only one of the two tests maths.',
      body: [
        { kind: 'table', caption: 'Bromley\'s grammar schools for September 2027 entry, from the council booklet and the schools\' pages', head: ['', 'St Olave\'s Grammar School (boys)', 'Newstead Wood School (girls)'], rows: [
          ['Who runs the test', 'The school', 'The school'],
          ['Maths in the test?', 'Yes, in Stage 1 and in Stage 2', 'No: verbal and non-verbal reasoning only'],
          ['Test dates for 2027 entry', 'Stage 1 Friday 18 September 2026; Stage 2 Friday 13 November 2026', '25 and 26 September 2026'],
          ['How places go', 'Rank order from both stages, with parental preferences', 'Score order, within a 9-mile catchment'],
          ['Catchment', 'None', '9 miles from the main entrance'],
          ['Demand the school publishes', 'Around 1,600 applicants on average for 2025 and 2026; 1,595 applications for 2027 entry', '1,510 registrations for September 2025 entry']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the council does',
          left: [
            'The booklet is clear: "The London Borough of Bromley does not administer the selective/grammar testing for either of the two grammar schools in Bromley." Families register with each school, and the council handles only the common application, open from 1 September and closing on 31 October 2026.',
            'It also warns that "being successful in a test does not guarantee admission". The grammar school still has to be named on the council form, and the council offers the highest named preference that can be met.'
          ],
          rightH3: 'Why the difference matters to a family',
          right: [
            'A family with a son and a daughter in Year 5 faces two quite different years. For St Olave\'s, maths is central, and written maths matters by November. For Newstead Wood, our maths lessons would be for school and Year 7, not for the test.',
            'We say that plainly because it would be easy to sell maths tuition for a test that sets none. If your daughter is applying only to Newstead Wood, the school\'s own advice and its familiarisation links are the right starting point.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bromley.gov.uk/downloads/file/3972/secondary-education-in-bromley-2027-2028" rel="noopener" target="_blank">London Borough of Bromley, Secondary education in Bromley 2027-2028</a>; <a class="ag-inline-link" href="https://www.saintolaves.net/113/faq-1" rel="noopener" target="_blank">St Olave\'s FAQ</a>; <a class="ag-inline-link" href="https://www.newsteadwood.co.uk/admissions/year-7-admissions/about-the-selection-test" rel="noopener" target="_blank">Newstead Wood, About the Selection Test</a>. Modern Age Coders works independently of both schools and of the borough council.' }
      ]
    },
    {
      id: 'stolaves', tint: 'deep', eyebrow: 'The boys\' school',
      h2: 'What is in the St Olave\'s Grammar School entrance test?',
      lede: 'Two stages. Stage 1, the Selective Entrance Test, is one hour of multiple choice in English, logic and maths. The 450 highest scorers come back for Stage 2: an English Paper and a Mathematics Paper.',
      body: [
        { kind: 'table', caption: 'St Olave\'s Grammar School, entry to Year 7 in September 2027, from its key dates, test information and FAQ pages', head: ['Step', 'What the school publishes'], rows: [
          ['Register (the SIF)', 'Opened Monday 8 June 2026 at 9am, closed Monday 29 June 2026 at midday; no late applications'],
          ['Stage 1, the SET', 'Friday 18 September 2026: one hour, multiple choice, English, logic (verbal and non-verbal reasoning) and mathematics, HB pencil on an answer sheet'],
          ['Stage 1 outcome', 'Mid-October, before half term and before the council deadline'],
          ['Who goes through', 'The top 450 performing boys, all of whom have met the minimum standard'],
          ['Stage 2', 'Friday 13 November 2026: an English Paper in pen, a Mathematics Paper with pencils, an eraser and a ruler'],
          ['Not allowed', 'Mobile phones, wristwatches and calculators at both stages; dictionaries at Stage 1'],
          ['Places', 'A published admission number of 124, plus up to 4 chorister places'],
          ['Offers', 'Monday 1 March 2027, by the council, from the final rank order and parental preferences']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The awkward timing, explained by the school',
          left: [
            'Stage 2 falls after the 31 October council deadline. The school\'s answer is that every boy invited to Stage 2 has already met its minimum standard, so families know before the deadline whether St Olave\'s is worth a preference.',
            'The reverse is just as firm: "Any boy who does not proceed to the Stage 2 test will not be eligible for an offer." The school advises such families not to name it, since that "would be a waste of one of your school preferences."'
          ],
          rightH3: 'Two different kinds of maths',
          right: [
            'Stage 1 asks maths inside a single hour shared with English and logic, all multiple choice. Speed and accuracy count, and an answer can be checked against the options.',
            'Stage 2 is a Mathematics Paper of its own, and the school\'s kit list tells you something about it: a ruler, an eraser and pencils. A boy should be at ease drawing a neat diagram and writing his working, not only choosing a letter.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'No catchment, no siblings', p: 'The school says it has no catchment area, no sibling policy and no feeder schools. Entry rests "solely on performance in our entrance tests".' },
          { h3: 'No past papers', p: 'The school publishes sample questions for both stages on its site but says it does not provide past papers. We do not reproduce its samples here.' },
          { h3: 'Your place on the list', p: 'The final rank order goes only to the council. After offer day the school can indicate how many boys remain above a child, but it does not hold the waiting list.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.saintolaves.net/4205/key-dates" rel="noopener" target="_blank">St Olave\'s, Key Dates</a>, <a class="ag-inline-link" href="https://www.saintolaves.net/112/entrance-test-information" rel="noopener" target="_blank">Entrance Test Information</a> and <a class="ag-inline-link" href="https://www.saintolaves.net/113/faq-1" rel="noopener" target="_blank">FAQ</a>, read 31 October 2026. For 2028 entry the school lists Stage 1 on Friday 17 September 2027 and Stage 2 on Friday 12 November 2027, with registration from 7 June to 28 June 2027.' }
      ]
    },
    {
      id: 'newstead', tint: '', eyebrow: 'The girls\' school',
      h2: 'Is there maths in the Newstead Wood School 11 plus?',
      lede: 'No. Newstead Wood says its Selection Test "consists of two papers. The first will assess Verbal Reasoning and the second will assess Non-Verbal Reasoning. We do not test on any other subjects."',
      body: [
        { kind: 'table', caption: 'Newstead Wood School, from its Year 7 admissions and selection test pages', head: ['Question', 'What the school says'], rows: [
          ['What is tested?', 'Verbal reasoning in one paper, non-verbal reasoning in the other; no other subjects'],
          ['When?', 'At the end of September, just after a girl starts Year 6 (25 and 26 September 2026 in the council\'s list)'],
          ['How to register', 'The school\'s Supplementary Information Form, open in the summer term of Year 5; late registrations are not accepted'],
          ['Results', 'Emailed at least one week before the council application deadline'],
          ['Cut-off', '"The cut-off score on National Offer Day 2026 was 225."'],
          ['Demand', '"We received 1510 registrations to sit the test for entry in September 2025."'],
          ['Practice material', 'The school does not sell past or specimen papers; free online familiarisation for disadvantage-funded girls']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where maths lessons still fit',
          left: [
            'For school, for the Year 6 SATs in May, and for Year 7 wherever a girl goes. A girl who also applies to a grammar school in Kent or Bexley may meet maths in that test; the council booklet reminds families that those tests are arranged by the other area, not by Bromley.',
            'Non-verbal reasoning is not maths, and we will not claim that maths lessons raise a reasoning score.'
          ],
          rightH3: 'The 225 figure',
          right: [
            'Newstead Wood publishes the score at which offers stopped on National Offer Day 2026. It is a standardised score from that year\'s cohort and catchment, not a target; a later year\'s line can fall elsewhere.',
            'The council\'s booklet lists both schools as offering places "on Test Score" rather than distance, and records that in 2026 neither school had an appeal upheld.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.newsteadwood.co.uk/admissions/year-7-admissions" rel="noopener" target="_blank">Newstead Wood, Year 7 Admissions</a> and <a class="ag-inline-link" href="https://www.newsteadwood.co.uk/admissions/year-7-admissions/about-the-selection-test" rel="noopener" target="_blank">About the Selection Test</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'bars', tint: 'tint', eyebrow: 'Our lesson family',
      h2: 'What is a bar model, and why bring a ruler to a maths paper?',
      lede: 'A bar model is a drawn rectangle split into equal parts that stands for the quantities in a word problem. With a ruler it is quick and neat, and once the picture is right the arithmetic is usually one step. These examples are ours, written for this page; they are not St Olave\'s questions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Draw what you know', p: 'Read the problem once and draw one bar for each person or quantity. Make bars that are meant to be equal the same length, using the ruler.' },
          { h3: 'Mark the parts', p: 'Split the bars into equal units wherever the problem gives a fraction or a ratio. Label the total or the difference you were told.' },
          { h3: 'Find one unit', p: 'Most problems collapse to "so many units make this number". Divide to find one unit, then build the answer the question asks for.' }
        ] },
        { kind: 'table', mt: true, caption: 'Worked examples (ours), at upper primary level', head: ['Problem (ours)', 'The bar picture', 'Working'], rows: [
          ['Sam has three times as many cards as Ben. Together they have 84. How many has Sam?', 'Ben: 1 unit. Sam: 3 units. Total: 4 units = 84', '1 unit = 21, so Sam has 3 x 21 = 63'],
          ['Ella has 18 more stamps than Ruby. They have 100 altogether. How many has Ruby?', 'Two equal bars, plus an extra 18 on Ella\'s', '100 minus 18 = 82; 82 divided by 2 = 41, so Ruby has 41'],
          ['A ribbon is cut so that 2/5 is used and 45 cm is left. How long was it?', 'One bar in 5 parts; 3 parts left = 45 cm', '1 part = 15 cm, so the ribbon was 5 x 15 = 75 cm'],
          ['The ratio of red to blue beads is 3 : 5, and there are 24 more blue than red. How many beads in all?', 'Red: 3 units. Blue: 5 units. Difference: 2 units = 24', '1 unit = 12; total 8 units = 96 beads'],
          ['After spending a quarter of his money and then 6 more, Leo has half left. How much did he start with?', 'One bar in 4 quarters; 1 quarter spent, half left, so the 6 fills the last quarter', '1 quarter = 6, so he started with 4 x 6 = 24']
        ] },
        { kind: 'p', mt: true, html: 'Our practice set. Draw the bars first, every time. (1) Two numbers add to 70 and one is four times the other. Find both. (2) A jug and a cup hold 1,200 ml together; the jug holds 600 ml more than the cup. How much does the cup hold? (3) Three fifths of a class are girls and there are 8 more girls than boys. How many children? (4) Ali and Zoe share 45 sweets in the ratio 4 : 5. How many does Zoe get? (5) A book costs twice as much as a pen, and both cost 27 points in a class reward shop. What does the book cost? Answers, ours: (1) 14 and 56; (2) 300 ml; (3) 40, since 1 unit is 8 and there are 5 units; (4) 25; (5) 18 points.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this lesson family',
          left: [
            'Multi-step problems with fractions, comparison and ratio are where a written paper separates careful thinkers from quick guessers. A bar model shows the structure before any number is calculated, which makes the right operation obvious.',
            'It also produces exactly the kind of working a marker can follow, and the ruler on the St Olave\'s kit list makes the diagram quick to draw cleanly.'
          ],
          rightH3: 'Common slips we correct',
          right: [
            'Bars of unequal length for equal quantities: the picture then lies. We insist on ruled, matching units.',
            'Answering the wrong question: finding one unit and stopping when the question asked for the total. Our children underline the final question before they write the answer.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'A Bromley route from Year 4 to November of Year 6',
    lede: 'St Olave\'s registration closes at the end of June in Year 5, so the plan starts early and ends later than most areas, with a written paper in November.',
    table: { caption: 'Our plan for a boy aiming at St Olave\'s for 2028 entry', head: ['When', 'Maths focus (ours)', 'Secure when'], rows: [
      ['Year 4, summer', 'Fluent tables and the four written methods', 'Short division and long multiplication are accurate'],
      ['Year 5, autumn', 'Fractions of amounts and simple bar models', 'Any "fraction left over" problem is drawn before it is solved'],
      ['Year 5, spring', 'Ratio and comparison problems with bars; register from 7 June 2027', 'Two-person ratio problems are solved in a few lines'],
      ['Year 5, summer to Stage 1', 'Mixed multiple-choice hour, with English and logic beside it', 'The hour ends with every question attempted'],
      ['Year 6, October to November', 'Written problems with full working, if invited to Stage 2', 'Each answer has a ruled diagram and clear steps']
    ] },
    left: { h3: 'Keeping perspective', ps: [
      'With some 1,600 boys applying for about 124 places, most boys who apply will not receive an offer. That is arithmetic, not a judgement of any child.',
      'Bar models and careful working pay off in any secondary school.'
    ] },
    right: { h3: 'Next steps', ps: [
      'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> is for the exams at 16.',
      'For maths challenges through the year, see the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding courses for Bromley children',
    lede: 'Sorted by age group. Each card leads to a full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary maths', sub: 'Years 3 to 6', courses: [
        { code: 'UK / GAM / 01', slug: '11-plus-maths-preparation-course-uk', title: 'Our 11 plus maths course', blurb: 'For both St Olave\'s stages.' },
        { code: 'UK / GAM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic for children', blurb: 'Speed and accuracy with number.' },
        { code: 'UK / GAM / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths papers', blurb: 'Arithmetic and reasoning for May of Year 6.' },
        { code: 'UK / GAM / 04', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths foundations', blurb: 'For younger children starting out.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Years 6 to 8', courses: [
        { code: 'UK / GAM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Early secondary maths', blurb: 'Equations, ratio and shape beyond primary.' },
        { code: 'UK / GAM / 06', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For boys and girls who like hard problems.' }
      ] },
      { num: 'III', h3: 'Maths in code', sub: 'Ages 8 and up', courses: [
        { code: 'UK / GAM / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Ratios and fractions modelled in Python.' },
        { code: 'UK / GAM / 08', slug: 'scratch-programming-complete-course', title: 'Scratch for young coders', blurb: 'Logic with drag-and-drop blocks.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, from Beckenham to Biggin Hill',
    lede: TIMING + ' Lessons are taught from India, which does not change its clocks; that puts India time four and a half hours ahead of UK time in summer and five and a half ahead in winter. We always book in UK time.',
    slots: [
      { time: 'After school', l: 'An early-evening hour for Years 5 and 6.' },
      { time: 'Weekend morning', l: 'For families whose weeknights are full.' },
      { time: 'October to November', l: 'Written-paper practice before Stage 2.' }
    ],
    cells: [
      { h3: 'Curriculum depth', p: 'Upper primary maths taught thoroughly, never a list of shortcuts.' },
      { h3: 'No travelling', p: 'One lesson for Orpington, Chislehurst or Penge alike, from home.' },
      { h3: 'Batch or one-to-one', p: 'Learn with 15 to 20 others at the same level, or with a teacher alone.' },
      { h3: 'Fresh problems', p: 'Each problem is written for our classes, never taken from a school\'s samples.' },
      { h3: 'Short reports', p: 'Brief notes on what has improved and what to work on next.' },
      { h3: 'No promises', p: 'Ranks, cut-offs and offers belong to the schools and the council.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Projects by children from our classes, plenty of them now older. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents on our Google profile, unedited.',

  fees: {
    h2: 'Monthly fees',
    lede: 'One fee per month, in the currency UK families are billed in, paid month to month with nothing required upfront. We do not charge for the first lesson.',
    free: ['A genuine lesson at your child\'s stage', 'An honest view of the maths so far', 'Booked with just a phone number'],
    group: ['A batch of 15 to 20 at one level', 'The same teacher across the year', 'Work marked and explained', 'A certificate when finished'],
    one: ['A teacher for your child alone', 'Planned around Stage 1 or Stage 2', 'Good for a boy who rushes his working']
  },

  faq: {
    eyebrow: 'Bromley 11 plus questions',
    h2: 'What Bromley parents ask',
    items: [
      { q: 'Is there maths in the St Olave\'s 11 plus?', a: 'Yes, at both stages. Stage 1 is one hour of multiple choice in English, logic and mathematics, and Stage 2 includes a separate Mathematics Paper, sat with pencils, an eraser and a ruler.' },
      { q: 'Is there maths in the Newstead Wood 11 plus?', a: 'No. The school says its two papers assess verbal reasoning and non-verbal reasoning, and that it does not test any other subjects.' },
      { q: 'When are the St Olave\'s 11 plus exam dates for 2027 entry?', a: 'Stage 1 was on Friday 18 September 2026 and Stage 2 on Friday 13 November 2026. Registration ran from Monday 8 June to midday on Monday 29 June 2026.' },
      { q: 'What are the St Olave\'s dates for 2028 entry?', a: 'The school lists registration from 7 June to 28 June 2027, Stage 1 on Friday 17 September 2027 and Stage 2 on Friday 12 November 2027.' },
      { q: 'How many boys get through to St Olave\'s Stage 2?', a: 'The school says the top 450 performing boys in Stage 1 are invited, and all of them have met its minimum standard. A boy not invited is not eligible for an offer.' },
      { q: 'How many apply to St Olave\'s?', a: 'The school reports an average of around 1,600 applicants for the 2025 and 2026 seasons and 1,595 applications for 2027 entry, for 124 places plus up to 4 chorister places.' },
      { q: 'What was the Newstead Wood cut-off score?', a: 'The school says the cut-off on National Offer Day 2026 was 225. It also has a 9-mile catchment from its main entrance.' },
      { q: 'Does the council run the Bromley 11 plus?', a: 'No. The London Borough of Bromley says it does not administer the testing for either grammar school. It runs the common application, which closed on 31 October 2026, and passing a test does not guarantee a place.' },
      { q: 'Can my son use a calculator or watch in the St Olave\'s test?', a: 'No. The school says mobile phones, wristwatches and calculators are not allowed at either stage.' },
      { q: 'When are your maths lessons?', a: TIMING + ' Times are booked in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Bromley families',
    lede: 'Neighbouring tests, coding in the borough, and our UK hub.',
    items: [
      { href: '/11-plus-maths-tuition-bexley', label: '11 plus maths in Bexley', p: 'The test next door, run by its council.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'For families looking across the county line.' },
      { href: '/coding-classes-in-bromley-london', label: 'Coding classes in Bromley', p: 'Python and Scratch for the borough.' },
      { href: '/maths-tuition-in-london', label: 'Maths tuition in London', p: 'Our London-wide maths page.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national 11 plus picture.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Where every UK page starts.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us whether your child is aiming at St Olave\'s, Newstead Wood or both. For St Olave\'s we will start with written problems; for Newstead Wood we will be honest about what maths can and cannot do for the test.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> has its syllabus laid out, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our lessons.',
    note: 'WhatsApp is fastest, and free from any UK mobile. You will hear back from India, on a +91 number; there is no Bromley office.',
    formNote: 'No card needed, nothing to sign. You get one reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Bromley', links: [
        { href: '/coding-classes-in-bromley-london', label: 'Coding in Bromley' },
        { href: '/maths-tuition-in-london', label: 'Maths in London' },
        { href: '/11-plus-maths-tuition-bexley', label: '11 plus in Bexley' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Draw the bars with a ruler, then find one unit'
  },

  personalityCss: `
.ag-root.ag-gam .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-gam .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-gam .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-gam .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gam .ag-table th:first-child { width: 26%; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Bromley, Secondary education in Bromley 2027-2028: two selective schools named, St Olave\'s Grammar School and Newstead Wood School; admit on their own selection test, score order; council does not administer testing; key dates 18 September, 25 and 26 September, 31 October and 13 November 2026, 1 March 2027; places on test score; 2026 appeals not upheld at either. St Olave\'s: SET one hour, multiple choice English, logic (VR and NVR) and mathematics; top 450 to Stage 2; Stage 2 English Paper and Mathematics Paper with a ruler; no phones, watches, calculators; SIF 8 to 29 June 2026; PAN 124 plus up to 4 choristers; around 1,600 applicants; no catchment or sibling policy; 2028 dates. Newstead Wood: two papers, VR and NVR, no other subjects; cut-off 225 on NOD 2026; 1,510 registrations for 2025 entry; 9-mile catchment; no past papers sold.',
    localProject: 'Opposite answers on maths. The page shows Bromley families that the borough\'s two grammar schools, named in the council booklet, differ completely on maths: St Olave\'s tests it in a one-hour multiple-choice Stage 1 and again in a written Stage 2 Mathematics Paper for the top 450, held after the council deadline, while Newstead Wood tests only verbal and non-verbal reasoning. It gives each school\'s 2026 calendar, the 2028 St Olave\'s dates, the 450 rule and Newstead Wood\'s published 225 cut-off, says plainly that maths lessons are not test preparation for Newstead Wood, and teaches ruler-drawn bar models for multi-step word problems through our own examples and practice set. Lesson family: bar models for comparison, fraction and ratio problems.',
    requiredMentions: ['We do not test on any other subjects.', 'The cut-off score on National Offer Day 2026 was 225.', 'the top 450 performing boys', 'pencils, an eraser and a ruler', 'English, Logic (both Verbal and Non-Verbal Reasoning) and Mathematics', 'does not administer the selective/grammar testing', 'prioritised in score order from highest to lowest', 'Friday 13 November 2026'],
    sources: [
      { claim: 'London Borough of Bromley, Secondary education in Bromley 2027-2028: the two grammar schools, the council\'s role, key dates, test-score allocation, appeals.', url: 'https://www.bromley.gov.uk/downloads/file/3972/secondary-education-in-bromley-2027-2028' },
      { claim: 'St Olave\'s Grammar School, Entrance Test Information: SET format, kit lists, banned items.', url: 'https://www.saintolaves.net/112/entrance-test-information' },
      { claim: 'St Olave\'s Grammar School, Key Dates for 2027 and 2028 entry.', url: 'https://www.saintolaves.net/4205/key-dates' },
      { claim: 'St Olave\'s Grammar School, FAQ: PAN, applicants, no catchment, top 450, eligibility.', url: 'https://www.saintolaves.net/113/faq-1' },
      { claim: 'Newstead Wood School, About the Selection Test: VR and NVR only, 225 cut-off, 1,510 registrations.', url: 'https://www.newsteadwood.co.uk/admissions/year-7-admissions/about-the-selection-test' },
      { claim: 'Newstead Wood School, Year 7 Admissions: timing, SIF, results, catchment.', url: 'https://www.newsteadwood.co.uk/admissions/year-7-admissions' }
    ],
    rejectedClaims: [
      'St Olave\'s Stage 2 paper lengths and mark schemes: the arrangements PDF host returned 403 and the test page leaves the format blank; not stated.',
      'St Olave\'s sample questions: published by the school, not reproduced.',
      'Any claim that maths lessons improve a verbal or non-verbal reasoning score: not made.',
      'Counts of preferences or appeals summed or turned into odds of success: not done; the ladder note uses only the school\'s own applicant and place figures.',
      'Banding tests at other Bromley schools: outside the topic.',
      'Any rank, score or place promise.'
    ]
  }
};
