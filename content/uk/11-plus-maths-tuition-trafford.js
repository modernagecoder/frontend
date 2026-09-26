'use strict';
// 11 plus maths tuition in Trafford (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Trafford Council, entrance test for grammar schools: "Five of the seven grammar schools in Trafford are in the
//    Trafford Consortium": Altrincham Grammar School for Boys, Altrincham Grammar School for Girls, Sale Grammar School,
//    Stretford Grammar School, Urmston Grammar School; Loreto Grammar School and St Ambrose College "have a different
//    test, scheduled for 18 September 2026"; register directly with the grammar school.
//  - Sale Grammar School, September 2027 entry page and Information Booklet 2027 (restating the consortium): GL
//    Assessment partnership; "two tests, each approximately one hour in length, containing questions that assess verbal,
//    non-verbal and mathematics skills"; maths "generally cover content taught in schools up to the start of Year 6.
//    The areas assessed typically include aspects of number, measurement, geometry and statistics. Some questions may
//    involve using current mathematical skills to solve mathematical problems."; "GL produces a bespoke paper for the
//    Trafford Consortium so students sitting the examination will not sit the same examination at any other school";
//    test Monday 14 September 2026; applications 12 noon Thursday 23 April to 12 noon Friday 19 June 2026; register at
//    one consortium school and name the schools to receive a score, "Scores cannot be retrospectively shared";
//    standardised score before 31 October 2026; "The qualifying score will be achieved by those candidates who score
//    334 and above"; how the three skills are combined is confidential; no manual re-marks; date of birth range
//    1 September 2015 to 31 August 2016.
//  - GL familiarisation guide hosted by Sale Grammar School (GL Assessment, 2023): "two separate booklets, each one
//    covering verbal reasoning, non-verbal reasoning, and mathematics"; multiple choice; answer sheet "scored by
//    computer"; ruler, calculator and protractor not allowed; working in the booklet.
//  - National curriculum in England, mathematics, Year 5 statistics: "solve comparison, sum and difference problems
//    using information presented in a line graph"; "complete, read and interpret information in tables".
//  - Open-Meteo historical weather API, ERA5 reanalysis, daily 2 m maximum temperature and precipitation for 2025,
//    requested at 53.425 N 2.32 W (Sale), returned grid point 53.5 N 2.25 W; monthly means of daily maxima computed
//    by us: Jan 5.9, Feb 7.9, Mar 12.4, Apr 15.9, May 18.3, Jun 20.3, Jul 20.8, Aug 21.0, Sep 17.2, Oct 13.7, Nov 10.5,
//    Dec 9.2 C; monthly precipitation Apr 19.7 mm (lowest), Dec 135.1 mm (highest). Modelled, not a station record.
// Spine: the consortium names the four maths areas, and statistics is the one families skip. Lesson family: reading a
// line graph of real 2025 temperatures (comparison, sum and difference with one-decimal numbers).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'TRAFFORD CONSORTIUM', label: '11 plus maths in Trafford', blurb: 'Number, measurement, geometry and statistics: the Trafford Consortium names four maths areas, and the fourth is the one families skip.' },
  slug: '11-plus-maths-tuition-trafford',
  code: 'tfm',
  accent: '#4C2F2A',
  accentRationale: 'Trafford 11 plus maths: a dark umber, chosen by colour distance from every accent on the site (9.68:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Trafford',
  title: '11 Plus Maths Tuition Trafford | Consortium Test Maths Online',
  description: 'Live online 11 plus maths for the Trafford Consortium test in Altrincham, Sale, Stretford and Urmston: its four maths areas, and statistics taught properly.',
  ogDescription: 'The Trafford Consortium says its maths covers number, measurement, geometry and statistics. Statistics is the strand most preparation skips. How we teach all four.',
  twitterDescription: 'Trafford 11 plus maths, live online: all four areas the consortium names, statistics included.',
  pageName: '11 Plus Maths Tuition in Trafford',
  webPageDescription: 'Live online mathematics teaching for Trafford children preparing for the Trafford Consortium entrance examination, built on what the consortium schools and Trafford Council publish.',
  courseDescription: 'Live online maths classes for Trafford children in Years 4 and 5, covering the four areas the consortium names, number, measurement, geometry and statistics, at Year 5 depth.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Trafford',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#areas', label: 'Four areas' },
    { href: '#graph', label: 'The graph' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Trafford &middot; Consortium entrance examination maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Trafford',
  lede: 'The five schools of the Trafford Consortium describe their maths questions in one tidy sentence: they "typically include aspects of number, measurement, geometry and statistics". Read that list slowly. Most 11 plus preparation spends its hours on the first item, some on the second and third, and almost none on the fourth. Yet statistics in Year 5 is a short, well-defined topic, reading tables and line graphs and answering comparison, sum and difference questions from them, and it can be taught to fluency in a few weeks. This page sets out what the consortium and Trafford Council publish about the examination, then works through a real line graph, 2025 temperatures over Trafford, the way we would in a lesson.',
  secondaryCta: { href: '#graph', label: 'Work through the line graph' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Trafford 11 plus.',
  heroNote: 'Maths only &middot; No verbal or non-verbal reasoning teaching &middot; Not connected to any Trafford school',
  spec: [
    ['Examination', 'Trafford Consortium entrance examination'],
    ['Schools using it', 'Five of Trafford\'s seven grammar schools'],
    ['Written by', 'GL Assessment, a paper made for the consortium'],
    ['Papers', 'Two, about one hour each'],
    ['Each paper covers', 'Verbal, non-verbal and maths questions'],
    ['Maths areas named', 'Number, measurement, geometry, statistics'],
    ['Format', 'Multiple choice, computer-scored sheet'],
    ['Our focus', 'All four areas, at Year 5 depth']
  ],
  capsuleQ: 'In short',
  capsule: 'Trafford Council says five of the borough\'s seven grammar schools belong to the Trafford Consortium and share one entrance examination; Loreto Grammar School and St Ambrose College use a different test. The consortium examination is written for it by GL Assessment: two tests of about an hour, each mixing verbal, non-verbal and mathematics questions, answered by multiple choice. The consortium says the maths covers content taught up to the start of Year 6, typically "aspects of number, measurement, geometry and statistics". For September 2027 entry it was sat on Monday 14 September 2026, and Sale Grammar School gives the qualifying score as 334 and above. We teach those four maths areas live online, with statistics given its fair share. A trial lesson is free, and after it the monthly fee is USD 100 in a small group or USD 150 for one to one.',

  picks: {
    eyebrow: 'Starting points in Trafford',
    h2: 'Three courses for the consortium maths',
    lede: 'Match the course to the gaps you see at home, not to the date on the letter.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'TRAFF / I', title: 'The 11 plus maths course', note: 'All four named areas, number, measurement, geometry and statistics, taught to Year 5 depth.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'TRAFF / II', title: 'Primary maths from the ground up', note: 'For a child whose place value or fractions need firming before any exam work.' },
      { course: 'mental-maths-mastery-kids', code: 'TRAFF / III', title: 'Quick mental arithmetic', note: 'Faster recall frees time for the reading that data and word problems demand.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The examination',
      h2: 'What the consortium and the council publish',
      lede: 'Trafford Council describes the arrangement; the consortium schools publish the detail. Sale Grammar School\'s pages and 2027 information booklet were our main source, read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Trafford Consortium examination for September 2027 entry, as Sale Grammar School publishes it', head: ['Stage', 'When', 'What is published'], rows: [
          ['Applications open', '12 noon, Thursday 23 April 2026', 'Online, through a consortium school\'s own website.'],
          ['Applications close', '12 noon, Friday 19 June 2026', 'Late applications are not tested for the main round.'],
          ['Examination', 'Monday 14 September 2026', 'Two tests of about an hour, with a short break between them.'],
          ['Scores', 'Before 31 October 2026', 'A total standardised score, in time for the council application form.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Registration has one quirk worth knowing. A child registers at one consortium school only, and the family states which schools should receive the result. Sale Grammar School\'s booklet adds that scores "cannot be retrospectively shared between the schools after the standardisation process has taken place", so the choice is made at registration.',
            'The paper itself is not an off-the-shelf test. The consortium says "GL produces a bespoke paper for the Trafford Consortium so students sitting the examination will not sit the same examination at any other school", although the question types resemble GL\'s published familiarisation material.'
          ],
          right: [
            'Each of the two booklets mixes verbal reasoning, non-verbal reasoning and mathematics, according to the familiarisation guide Sale Grammar School hosts, with multiple-choice answers marked on a sheet "scored by computer". A ruler, a calculator and a protractor are not allowed; working out goes in the booklet.',
            'On scoring, the consortium publishes less than some areas do. Scores are standardised for age, and a qualifying score is published, 334 and above for 2027 entry at Sale Grammar School. How the three skills are combined is not published. We therefore make no claims about how much the maths counts, only about how to get it right.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.trafford.gov.uk/schools-and-learning/starting-school-and-admissions/starting-secondary-school/entrance-test-grammar-schools" rel="noopener" target="_blank">Trafford Council, entrance test for grammar schools</a>; <a class="ag-inline-link" href="https://www.salegrammar.co.uk/6731/september-2027-entry" rel="noopener" target="_blank">Sale Grammar School, September 2027 entry</a>, with its Information Booklet for 2027 admissions and the GL familiarisation guide it hosts. Modern Age Coders has no connection with any consortium school, GL Assessment or Trafford Council.' }
      ]
    },
    {
      id: 'areas', tint: 'plain', eyebrow: 'The four named areas',
      h2: 'Number, measurement, geometry and statistics',
      lede: 'A published list of content areas is rare in 11 plus material. Here is what each one means in the Year 5 curriculum, which is where "up to the start of Year 6" points.',
      body: [
        { kind: 'table', caption: 'The consortium\'s four areas, mapped to the Year 5 national curriculum', head: ['Area', 'Year 5 content it covers', 'How much preparation usually gets'], rows: [
          ['Number', 'Place value to a million, rounding, primes and factors, long multiplication, fractions, decimals and percentages', 'Most of it, often too much'],
          ['Measurement', 'Converting metric units, perimeter and area of rectangles, volume, money and time problems', 'A fair share'],
          ['Geometry', 'Angles at a point and on a line, properties of rectangles, reflection and translation', 'Some, mostly shapes'],
          ['Statistics', 'Reading line graphs and tables, including timetables; comparison, sum and difference questions', 'Very little, if any']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The right-hand column is our experience of how children arrive, not a published fact, and we say so. What is published is the list itself, and a list of four is a promise of breadth. A child who is excellent at long multiplication and shaky on reading a graph is prepared for three quarters of a list.',
            'Statistics also hides inside the other three. A measurement question about a timetable is a table-reading question. A number question about a change in temperature is a difference question from a graph. Teaching data reading lifts marks in places families would never file under "statistics".'
          ],
          right: [
            'The consortium adds a sentence that matters for all four areas: "Some questions may involve using current mathematical skills to solve mathematical problems." Current skills, new problems. It is not a hint about harder content; it is a hint about unfamiliar settings for familiar content.',
            'That is why we teach each area twice: once as plain skill, until it is quick, and once hidden in a context, until the child can find it. For statistics the context is usually a graph or a table the child has never seen before, which is exactly what the next section does.'
          ] },
        { kind: 'source', html: 'Sources: Sale Grammar School, Information Booklet for 2027 admissions (the consortium\'s description of the mathematics questions); <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 programme of study.' }
      ]
    },
    {
      id: 'graph', tint: 'deep', eyebrow: 'A lesson from real data',
      h2: 'A year of Trafford temperatures, read as a line graph',
      lede: 'Year 5 statistics asks children to "solve comparison, sum and difference problems using information presented in a line graph". Here is the kind of data we use, and the questions we ask about it.',
      body: [
        { kind: 'table', caption: 'Average daily maximum temperature by month, 2025, for the ERA5 grid square over Trafford (degrees Celsius)', head: ['Month', 'Average high', 'Month', 'Average high'], rows: [
          ['January', '5.9', 'July', '20.8'],
          ['February', '7.9', 'August', '21.0'],
          ['March', '12.4', 'September', '17.2'],
          ['April', '15.9', 'October', '13.7'],
          ['May', '18.3', 'November', '10.5'],
          ['June', '20.3', 'December', '9.2']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Comparison', p: 'Which month had the highest average high? August, at 21.0 °C, just ahead of July at 20.8 °C. On a graph that difference is a line barely rising; children learn to read the numbers, not the slope.' },
          { h3: 'Difference', p: 'How much warmer was the warmest month than the coldest? 21.0 - 5.9 = 15.1 degrees. Subtracting with one decimal place is Year 5 work, and it is where careless answers creep in.' },
          { h3: 'Biggest change', p: 'Between which two months did the average high rise most? February to March, 7.9 to 12.4, a rise of 4.5 degrees. The steepest fall was August to September, 3.8 degrees.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The figures come from the ERA5 reanalysis, which we downloaded through the Open-Meteo historical weather service: daily maximum temperatures for 2025 for the grid square containing Trafford, which the service placed at 53.5 degrees north, 2.25 degrees west. We averaged each month ourselves. ERA5 is a modelled estimate for a square of land, not a thermometer at one school, so it is a teaching data set, not a local weather record.',
            'We use real data because children read it differently. An invented graph invites guessing at what the question-writer wants. A real one, about a real year they lived through, invites actual reading: was it really that cold in January?'
          ],
          right: [
            'On a multiple-choice paper, a graph question usually offers answers that each come from one plausible misreading: the wrong month, the wrong axis, a subtraction done the wrong way round. Children who have practised naming the misreading behind each wrong option stop falling for them.',
            'The same data also gives us sum questions, such as the total of the three summer averages, 20.3 + 20.8 + 21.0 = 62.1, and table questions such as which months had an average high above 15 degrees (April to September, six months). Each is short, and each has one trap.'
          ] },
        { kind: 'source', html: 'Data: ERA5 reanalysis (Copernicus Climate Change Service, ECMWF) via the <a class="ag-inline-link" href="https://open-meteo.com/en/docs/historical-weather-api" rel="noopener" target="_blank">Open-Meteo historical weather API</a>, daily 2 m maximum temperature, 1 January to 31 December 2025, grid point 53.5 N, 2.25 W; monthly averages calculated by Modern Age Coders on 26 September 2026. Curriculum: national curriculum in England, mathematics, Year 5 statistics.' }
      ]
    },
    {
      id: 'bespoke', tint: 'tint', eyebrow: 'Practice without papers',
      h2: 'A bespoke paper, and why that is good news',
      lede: 'Families sometimes hear "bespoke" and worry that nothing can prepare a child for it. The opposite is true for maths.',
      body: [
        { kind: 'two',
          left: [
            'A paper written for one consortium cannot be learned from old copies of other papers, because the questions are not the same. That removes the temptation to prepare by memorising question shapes, which never worked well anyway.',
            'What remains is the content, and the consortium has told families what it is: Year 5 maths across four named areas, sometimes set as unfamiliar problems. That is a curriculum, and a curriculum can be taught.'
          ],
          right: [
            'The GL familiarisation guide shows the look of the paper: two booklets, mixed question types, answers shaded on a separate sheet. We tell every family to go through it once at home, carefully, well before September. After that, the time is better spent on the maths itself.',
            'We write our own practice questions and do not reproduce familiarisation or test material. Our questions are built to the four areas and the Year 5 curriculum, with statistics and measurement given the same attention as number.'
          ] },
        { kind: 'p', html: 'Sale Grammar School\'s booklet also notes there are no manual re-marks, because the answer sheets are machine-scored and not held by the school. Clean shading and one mark per question matter. We practise on answer grids from early on so the physical part of the task is automatic by the summer.' }
      ]
    },
    {
      id: 'borough', tint: 'plain', eyebrow: 'Across Trafford',
      h2: 'Five consortium schools, two others, one online classroom',
      lede: 'Trafford Council names the schools. We list them only to make clear which examination this page describes.',
      body: [
        { kind: 'table', caption: 'Trafford\'s grammar schools, as Trafford Council groups them', head: ['School', 'Test used'], rows: [
          ['Altrincham Grammar School for Boys', 'Trafford Consortium examination'],
          ['Altrincham Grammar School for Girls', 'Trafford Consortium examination'],
          ['Sale Grammar School', 'Trafford Consortium examination'],
          ['Stretford Grammar School', 'Trafford Consortium examination'],
          ['Urmston Grammar School', 'Trafford Consortium examination'],
          ['Loreto Grammar School', 'A different test (18 September 2026 for 2027 entry)'],
          ['St Ambrose College', 'A different test (18 September 2026 for 2027 entry)']
        ] },
        { kind: 'two', mt: true,
          left: [
            'This page is about the consortium examination. Loreto Grammar School and St Ambrose College run a different test, and we have not read its content, so we say nothing about it beyond the council\'s date. Families aiming at those schools should read their own admissions pages.',
            'From Partington to Old Trafford, the lesson is on a screen at home, so the school run and the evening traffic through Sale do not decide whether a child can attend.'
          ],
          right: [
            'We place each child in a group by level. That can mean a Trafford pupil learning with children from anywhere in the country who are at the same point in Year 5 maths; our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> gathers every area we write about.',
            'Modern Age Coders has no connection with any of these schools or with the council. Admissions, including how places are allocated, are theirs to explain.'
          ] },
        { kind: 'source', html: 'Source: Trafford Council, entrance test for grammar schools, read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How the year runs',
    h2: 'Four stages before a September test',
    lede: 'For a child in Year 5 now, the next consortium examination should fall in September of Year 6, on dates the schools will publish. Build all four areas, in this order.',
    table: { caption: 'From quick number to reading data under a clock', head: ['Term', 'Stage', 'Evidence it is in place'], rows: [
      ['Autumn, Year 5', '1. Number that is quick', 'Tables, place value and fraction facts answered without counting'],
      ['Spring, Year 5', '2. Measurement and geometry', 'Converts units and finds missing angles and lengths without fuss'],
      ['Early summer, Year 5', '3. Tables and line graphs', 'Answers comparison, sum and difference questions from a new graph, correctly'],
      ['Late summer', '4. Mixed booklets', 'Moves between verbal, non-verbal and maths questions without losing accuracy on the maths']
    ] },
    left: { h3: 'Short on time?', ps: [
      'Begin with number, then go straight to statistics: it is the quickest area to lift, because the content is small and the errors are predictable.',
      'We will tell you honestly at the trial lesson what a few months can change.'
    ] },
    right: { h3: 'Once scores arrive', ps: [
      'The data habits carry into secondary school science and maths. Some pupils move on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and draw their own graphs in Python.',
      'Others try the maths challenges listed on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths and coding for Trafford families',
    lede: 'Arranged by stage; each card links to its syllabus.',
    bands: [
      { num: 'I', h3: 'Towards the examination', sub: 'Years 3 to 5', courses: [
        { code: 'TFM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Number, measurement, geometry and statistics.' },
        { code: 'TFM / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Groundwork before speed, for younger children.' },
        { code: 'TFM / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Recall and strategy, practised little and often.' },
        { code: 'TFM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A hands-on route to confident calculation.' }
      ] },
      { num: 'II', h3: 'Into Year 7', sub: 'Secondary maths', courses: [
        { code: 'TFM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Data handling, algebra and geometry for Key Stage 3.' },
        { code: 'TFM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Statistics included, as every board requires.' },
        { code: 'TFM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'For children who want problems without a recipe.' }
      ] },
      { num: 'III', h3: 'Data and code', sub: 'Maths on a computer', courses: [
        { code: 'TFM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Plot real data and ask questions of it in Python.' },
        { code: 'TFM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'First programs, careful logic, instant feedback.' },
        { code: 'TFM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Lists of numbers become charts and simple models.' }
      ] },
      { num: 'IV', h3: 'Looking ahead', sub: 'Teenage options', courses: [
        { code: 'TFM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Speed methods once the basics are firm.' },
        { code: 'TFM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where reading data becomes learning from it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When we teach',
    h2: 'Timed for a Trafford evening',
    lede: 'Lessons are taught live from India. The UK clock moves in spring and autumn and India\'s does not, so we set every primary lesson by UK time: after school on weekdays, or on a weekend morning.',
    slots: [
      { time: 'Weekday late afternoon', l: 'Soon after school, while attention is good.' },
      { time: 'Saturday morning', l: 'For families with packed weeknights.' },
      { time: 'Holiday weeks', l: 'Shorter sessions, more often, when school is closed.' }
    ],
    cells: [
      { h3: 'A teacher who stays', p: 'The same person each week knows which slips your child makes.' },
      { h3: 'Straight feedback', p: 'A brief, candid note after lessons: progress and problems both.' },
      { h3: 'Small matched groups', p: 'Five to ten children at one level, so nobody coasts or drowns.' },
      { h3: 'Original practice', p: 'Our own questions and real data sets, never copied test material.' },
      { h3: 'Individual option', p: 'One to one lessons for a particular gap or a quieter child.' },
      { h3: 'Maths is our lane', p: 'No reasoning coaching and no views on school choice or allocation.' }
    ]
  },

  projectsH2: 'Where Year 5 maths leads',
  projectsLede: 'Four projects published by our students, all built on arithmetic and data they once met in primary school. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents writing on our Google profile, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, as for all families outside India. Cancel whenever you like; there is nothing to sign up to.',
    free: ['A proper lesson, not a pitch', 'A candid view of where things stand', 'No payment details taken'],
    group: ['Five to ten pupils at the same level', 'A regular teacher', 'Homework checked together', 'A certificate when the course ends'],
    one: ['Just your child and a teacher', 'Built around what needs fixing', 'Helpful in the run-up to September']
  },

  faq: {
    eyebrow: 'Trafford questions',
    h2: 'Questions Trafford families ask',
    items: [
      { q: 'What maths is on the Trafford 11 plus?', a: 'The consortium says its mathematics questions cover content taught in schools up to the start of Year 6, typically including aspects of number, measurement, geometry and statistics, and that some questions use current skills to solve unfamiliar problems.' },
      { q: 'Is there a separate maths paper?', a: 'No. The examination has two tests of about an hour, and each contains verbal reasoning, non-verbal reasoning and mathematics questions, according to the GL familiarisation guide published by the consortium schools.' },
      { q: 'Does the maths count for a fixed share of the score?', a: 'The consortium does not publish how the three skills are combined. Scores are standardised for age and a qualifying score is published; for 2027 entry Sale Grammar School gives it as 334 and above.' },
      { q: 'Is the Trafford test the same as other GL tests?', a: 'No. The consortium says GL produces a bespoke paper for it, so children will not sit the same examination anywhere else, although the question types are similar to GL\'s familiarisation material.' },
      { q: 'Do Loreto and St Ambrose use this test?', a: 'No. Trafford Council says those two grammar schools have a different test. This page is about the consortium examination only.' },
      { q: 'When is the test for September 2028 entry?', a: 'Not yet published when we checked on 26 September 2026. For 2027 entry, applications ran from 23 April to 19 June 2026 and the examination was on Monday 14 September 2026.' },
      { q: 'Can a calculator or ruler be used?', a: 'No. The familiarisation guide lists a ruler, a calculator and a protractor among the items not allowed. Working out is done in the test booklet.' },
      { q: 'Do you teach the reasoning parts too?', a: 'No, only maths. We also do not advise on applications, catchment or allocation.' },
      { q: 'Do you use past papers?', a: 'No. The consortium paper is bespoke and not released, and we do not copy familiarisation material. We write our own questions for each of the four areas.' },
      { q: 'How much are lessons?', a: 'The trial lesson is free. Group lessons are then USD 100 a month and one to one lessons USD 150 a month, and you can stop at any time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Other pages for Greater Manchester families',
    lede: 'Coding in Manchester, the national 11 plus page, and two other selective areas.',
    items: [
      { href: '/best-coding-class-in-manchester', label: 'Coding classes in Manchester', p: 'Our page for children and teenagers across the city.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview of 11 plus maths.' },
      { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham', p: 'Another GL test, with its own rules about equipment.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'A county where the maths weighting is published.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges for keen children, by month.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every nation, city and area.' }
    ]
  },

  start: {
    h2: 'Ask for a trial maths lesson',
    lede: 'A school year and a sentence about your child\'s maths is enough to start. The trial is a genuine lesson, and afterwards we give you our honest reading of it.',
    readFirst: 'Want more detail first? The <a class="ag-inline-link" href="/courses">courses page</a> has every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> maps the route from primary maths to programming.',
    note: 'The fastest reply comes on WhatsApp. We are based in India, our number is Indian, and we have no UK premises.',
    formNote: 'We will not ask for card details. Expect one reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primary maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Nearby and national', links: [
        { href: '/best-coding-class-in-manchester', label: 'Coding in Manchester' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/11-plus-maths-tuition-birmingham', label: '11 plus maths in Birmingham' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The consortium sets the paper; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-tfm .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-tfm .ag-capsule { border-left-width: 7px; border-radius: 0 4px 4px 0; }
.ag-root.ag-tfm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-tfm .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-tfm .ag-table td:nth-child(2), .ag-root.ag-tfm .ag-table td:nth-child(4) { font-variant-numeric: tabular-nums; }
.ag-root.ag-tfm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-tfm .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-tfm .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['Trafford Consortium', 'number, measurement, geometry and statistics', 'bespoke paper', 'Urmston Grammar School', 'St Ambrose College', 'Monday 14 September 2026', 'retrospectively shared', 'Altrincham Grammar School for Girls']
};
