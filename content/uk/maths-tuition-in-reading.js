'use strict';
// Maths tuition in Reading (ag- maths by city, UK cluster Phase 11, row 582).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, Moebius Maths Hub page: "The Lead School for the hub is The Willink School, Burghfield, Berkshire.";
//    council areas listed: Bracknell Forest, Reading, Swindon, West Berkshire, Wiltshire, Wokingham.
//  - University of Reading, Department of Mathematics and Statistics, Outreach: "The MathsSquad! visits local schools in
//    Berkshire and surrounding area to deliver mathematical outreach events."
//  - DfE, GCSE mathematics subject content (2013), ratio item 1: "change freely between related standard units (e.g.
//    time, length, area, volume/capacity, mass) and compound units (e.g. speed, rates of pay, prices, density,
//    pressure)"; number item 9: "calculate with and interpret standard form".
//  - Environment Agency hydrology API, station "Reading" (River Thames, reference 2200TH): catchmentArea 4640.0.
//    UKCEH NRFA station-info for 39130 "Thames at Reading": catchment-area 4633.7.
// Local project (our calculation): EA daily mean flow (m3/s), 19 August 1992 to 31 December 2025. Kept only days the
// Agency marks Complete and Good: 11,203 days (excluded 480 Suspect, 463 Estimated, 5 Unchecked, 3 Incomplete).
// Highest 302.0 on 2003-01-04; lowest 2.189 on 2022-08-17; ratio 138.0. Median 23.4, mean 38.19.
// Per day: median 2,021,760 m3 (2.02 x 10^6), highest 26,092,800 (2.61 x 10^7), lowest 189,129.6 (1.89 x 10^5).
// Our 50 x 25 x 2 m pool = 2,500 m3: 808.7, 10,437.1, 75.7 pools. Depth over 4,633.7 km2: 0.436, 5.63, 0.0408 mm/day
// (4,640.0 km2 gives 0.436, 5.62, 0.0408). Days by order of magnitude: under 10: 2,699; 10 to under 100: 7,483;
// 100 or more: 1,021.
// Spine: how much water passes Reading in a day? Family: compound measures and unit conversion, standard form, orders of
// magnitude and log scales, two published catchment areas.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'READING MATHS', label: 'Maths tuition in Reading', blurb: 'GCSE, A level, 11 plus and adult maths for Reading, with a project on how much Thames water passes the town each day.' },
  slug: 'maths-tuition-in-reading',
  code: 'mrd',
  accent: '#0F573F',
  accentRationale: 'Reading maths: a deep Thames green (8.55:1 on white), chosen by hand at least 30 RGB units from every other maths-by-city page and 40 from our coding page for the town',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Reading',
  title: 'Maths Tuition in Reading | GCSE, A Level and 11 Plus Tutors',
  description: 'Maths tutor in Reading for ages 6 to 67, live online: KS2, 11 plus, KS3, GCSE, A level and adult maths, plus a Thames flow project in standard form.',
  ogDescription: 'How much water flows past Reading in a day? Unit conversion, standard form and log scales from 33 years of Thames readings, and how we teach maths at every age.',
  twitterDescription: 'Maths tuition in Reading, live online: the Thames carries about two million cubic metres past the town on a typical day.',
  pageName: 'Maths Tuition in Reading',
  webPageDescription: 'Live online maths tuition for Reading learners aged 6 to 67, from KS2 and the 11 plus to KS3, GCSE, A level and adult maths, with a compound measures project on the River Thames.',
  courseDescription: 'Live online maths lessons for learners in Reading, one to one or in small level-matched groups, following the national curriculum and the GCSE and A level specifications of the main exam boards.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Reading',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#thames', label: 'Thames flow' },
    { href: '#scale', label: 'Standard form' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Reading &middot; Online maths tutor, ages 6 to 67 &middot; Groups or one to one',
  h1: 'Maths tuition in Reading',
  lede: 'On a typical day the River Thames carries about 23.4 cubic metres of water past Reading every second. That sounds modest until you turn it into a day: 23.4 × 86,400 seconds is 2,021,760 cubic metres, enough to fill roughly 800 large swimming pools. On its wettest day in our records it carried 302.0 cubic metres a second; on its driest, 2.189. Turning one of those numbers into the others is exactly the skill GCSE calls compound measures, and writing them neatly needs standard form. This page shows how we teach maths to Reading learners, from Key Stage 2 to A level and adult study, with the Thames as our running example.',
  secondaryCta: { href: '#thames', label: 'See the Thames numbers' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Reading.',
  heroNote: 'This page covers maths only &middot; Primary to A level and adults &middot; Not linked to any Reading school',
  spec: [
    ['Ages', '6 to 67, across Reading'],
    ['Primary', 'KS2 maths, times tables, SATs'],
    ['11 plus', 'Maths for the grammar school tests'],
    ['Secondary', 'KS3 and GCSE, Foundation or Higher'],
    ['Sixth form', 'A level Maths, Further Maths topics'],
    ['Adults', 'GCSE resits and everyday maths'],
    ['Format', 'Live online, 1 to 1 or 5 to 10 a group'],
    ['Project', 'Thames flow in standard form']
  ],
  capsuleQ: 'Maths tuition in Reading: the short version',
  capsule: 'For Reading learners from age 6 to 67 we work as an online maths tutor, teaching live by video. That covers primary arithmetic through to the Year 6 SATs, preparation for the 11 plus, Years 7 to 9, GCSE (either tier, with AQA, Edexcel or OCR), IGCSE, A level with optional Further Maths topics, and maths for grown-ups, resits included. A learner can have a teacher to themselves or join a class of five to ten who are working at the same point. Our Reading project uses Environment Agency readings of the Thames: on a typical day 23.4 cubic metres of water pass the town each second, which is about 2.02 × 10⁶ cubic metres a day. The trial costs nothing. Ongoing lessons are USD 100 a month for a class seat or USD 150 a month taught privately.',

  picks: {
    eyebrow: 'What Reading families ask for first',
    h2: 'GCSE, A level and 11 plus maths',
    lede: 'The three courses most often requested by Reading families. The full list follows further down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'RDG / 1', title: 'GCSE maths', note: 'Foundation or Higher, matched to the exam board, with compound measures and standard form practised on real data.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'RDG / 2', title: 'A level maths', note: 'Logarithms, calculus and data, taught so that the Thames log scales below make sense as well as the exam questions.' },
      { course: '11-plus-maths-preparation-course-uk', code: 'RDG / 3', title: '11 plus maths', note: 'Quick, careful number work and multi-step reasoning for Year 5 children heading for selective tests.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'Every stage, every age',
      h2: 'Maths tutor in Reading, from KS2 to A level and beyond',
      lede: 'Reading schools teach the national curriculum for England. The table shows the stages a Reading learner meets and where our teaching puts its weight.',
      body: [
        { kind: 'table', caption: 'Maths stages for a Reading learner and our emphasis at each', head: ['Stage', 'Typical age', 'Where our lessons put the weight'], rows: [
          ['KS1', '5 to 7', 'Number to 100, adding and subtracting, telling the time, simple measures.'],
          ['KS2', '7 to 11', 'All tables to 12 × 12 before the Year 4 check, then written methods, fractions and decimals on the way to the Year 6 SATs.'],
          ['11 plus', '9 to 11', 'Fast, accurate number work and multi-step problems for grammar school tests.'],
          ['KS3', '11 to 14', 'Algebra, ratio and proportion, units and measures, negative numbers.'],
          ['GCSE', '14 to 16', 'Either tier, any of the three big boards, with rates, compound measures and standard form given extra time.'],
          ['A level and adults', '16 to 67', 'A level Maths, Further Maths topics, GCSE maths resits and refreshers.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Primary and the 11 plus',
          left: [
            'At primary level we teach number until it is automatic and then until it is understood. Times tables come first because so much rests on them, from the Year 4 multiplication tables check to long division in Year 6.',
            'For families sitting the Reading grammar school tests, our separate <a class="ag-inline-link" href="/11-plus-maths-tuition-reading">11 plus maths in Reading</a> page covers the schools and the test. This page is about maths at every other stage.'
          ],
          rightH3: 'Secondary, sixth form and adults',
          right: [
            'From Year 7 we move steadily towards algebra and proportional reasoning, which is where many learners first wobble. A GCSE maths tutor earns their keep here, long before the exam.',
            'For each stage our national pages go deeper: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE</a> and <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level</a>.'
          ] },
        { kind: 'source', html: 'Typical ages are the usual ones for each stage in England. Grammar school test details are on our Reading 11 plus page, not repeated here.' }
      ]
    },
    {
      id: 'thames', tint: 'plain', eyebrow: 'The Reading project',
      h2: 'How much water passes Reading in a day?',
      lede: 'Thirty-three years of daily readings from one gauge, and one unit conversion that every GCSE student should be able to do in their sleep.',
      body: [
        { kind: 'two',
          left: [
            'The Environment Agency runs a gauge on the River Thames at Reading and publishes its daily mean flow: the average number of cubic metres of water passing each second, worked out for each day. We downloaded every daily value from 19 August 1992 to 31 December 2025.',
            'The Agency labels each reading for quality. We kept only the 11,203 days it marks as complete and good, and left out days flagged as suspect, estimated or unchecked. Every figure below is our own calculation from those days.'
          ],
          right: [
            'The middle value, the median, is 23.4 cubic metres a second. The mean is higher, 38.19, because a few winter floods pull it up. The highest daily flow was 302.0 on 4 January 2003, and the lowest was 2.189 on 17 August 2022. The wettest day carried about 138 times as much water as the driest.',
            'A cubic metre a second sounds small because a second is short. The question a learner should ask straight away is: per what? Change the time unit and the same river looks completely different.'
          ] },
        { kind: 'table', mt: true, caption: 'Thames at Reading, daily mean flow converted three ways (our calculation from Environment Agency data)', head: ['Day', 'Flow, m³ per second', 'Water in one day, m³', 'In standard form', 'Pools of 2,500 m³'], numCols: [1, 2, 4], rows: [
          ['Driest, 17 August 2022', '2.189', '189,129.6', '1.89 × 10⁵', '75.7'],
          ['Typical (median)', '23.4', '2,021,760', '2.02 × 10⁶', '808.7'],
          ['Average (mean)', '38.19', '3,300,000', '3.30 × 10⁶', '1,320.0'],
          ['Wettest, 4 January 2003', '302.0', '26,092,800', '2.61 × 10⁷', '10,437.1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The conversion, step by step',
          left: [
            'One day has 24 × 60 × 60 = 86,400 seconds. So a flow of 23.4 cubic metres a second gives 23.4 × 86,400 = 2,021,760 cubic metres a day. The DfE content for GCSE asks learners to "change freely between related standard units (e.g. time, length, area, volume/capacity, mass) and compound units", and this is that skill exactly.',
            'The pool column uses our own example pool, 50 metres long, 25 wide and 2 deep, which holds 2,500 cubic metres. Real pools vary, so treat the pool figures as a feel for size, not a measurement.'
          ],
          rightH3: 'Spread over the land',
          right: [
            'A different conversion asks how deep a day of flow would be if it were spread over all the land that drains to the gauge. Divide the volume by the area and the answer comes out in metres; multiply by 1,000 for millimetres.',
            'UKCEH, which runs the National River Flow Archive, gives that area as 4,633.7 square kilometres. A typical day then works out at 0.436 millimetres of water, the wettest at 5.63 and the driest at 0.0408.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://environment.data.gov.uk/hydrology/" rel="noopener" target="_blank">Environment Agency hydrology data</a>, station Reading on the River Thames, daily mean flow, read on 1 October 2026; catchment area from the <a class="ag-inline-link" href="https://nrfa.ceh.ac.uk/" rel="noopener" target="_blank">UKCEH National River Flow Archive</a>, station 39130. GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>. All conversions are Modern Age Coders calculations.' }
      ]
    },
    {
      id: 'scale', tint: 'deep', eyebrow: 'Standard form and log scales',
      h2: 'Numbers that span a hundredfold, and two areas that disagree',
      lede: 'The Thames data is a good place to see why scientists write numbers in standard form and draw some graphs on a log scale.',
      body: [
        { kind: 'two',
          left: [
            'The DfE content asks GCSE learners to "calculate with and interpret standard form". The daily volumes above run from 1.89 × 10⁵ to 2.61 × 10⁷ cubic metres. The powers of ten tell the story at a glance: the wettest day is two orders of magnitude above the driest.',
            'Sort the 11,203 days by order of magnitude and the pattern is plain: 2,699 days had a flow below 10 cubic metres a second, 7,483 days were from 10 up to 100, and 1,021 days were 100 or more.'
          ],
          right: [
            'Draw those flows on an ordinary graph and the summer days squash into a flat line at the bottom while a few floods tower above. Draw them on a log scale, where each step up the axis multiplies by ten, and both the dry spells and the floods become readable.',
            'At A level the same idea returns as logarithms: log₁₀ of 302.0 is about 2.48 and log₁₀ of 2.189 is about 0.34, and the gap between them, 2.14, is the number of tens you multiply by to get from one to the other.'
          ] },
        { kind: 'table', mt: true, caption: 'Thames at Reading, days of good-quality daily mean flow by size (our calculation)', head: ['Daily mean flow, m³ per second', 'Number of days', 'Power of ten'], numCols: [1], rows: [
          ['Under 10', '2,699', '10⁰ up to 10¹'],
          ['10 to under 100', '7,483', '10¹ up to 10²'],
          ['100 or more', '1,021', '10² and above']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two published areas',
          left: [
            'The Environment Agency lists the catchment for this gauge as 4,640.0 square kilometres. The National River Flow Archive gives 4,633.7. Both are official, and they differ by 6.3 square kilometres, about 0.14 per cent.',
            'We do not pick a winner. We show that, for a typical day, the depth is 0.436 millimetres with either area once you round to three decimal places, so the disagreement does not change the answer at that accuracy.'
          ],
          rightH3: 'What learners take from it',
          right: [
            'At KS3 a learner converts per second to per day. At GCSE they write the answers in standard form and round to a sensible accuracy. At A level they ask why the mean is so far above the median and plot the data on a log scale.',
            'At every level the habit is the same: say what the unit is, say which source you used, and say how accurate the answer can honestly be.'
          ] },
        { kind: 'source', html: 'Catchment areas: Environment Agency hydrology API station record (4,640.0) and UKCEH National River Flow Archive station 39130 (4,633.7), both read on 1 October 2026. The day counts and logarithms are our calculations.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths in and around Reading',
      h2: 'The Maths Hub, the university and the UKMT maths challenge',
      lede: 'Families often ask what else is on offer for a child who likes maths. These are public programmes; we run none of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Möbius Maths Hub', p: 'The NCETM lists Reading among the council areas of the Möbius Maths Hub, whose lead school is The Willink School in Burghfield. Maths Hubs support teachers and schools rather than families.' },
          { h3: 'University of Reading', p: 'The Department of Mathematics and Statistics describes an outreach team: "The MathsSquad! visits local schools in Berkshire and surrounding area to deliver mathematical outreach events." Schools arrange the visits.' },
          { h3: 'National challenges', p: 'Reading secondary pupils often meet the UKMT maths challenge through school entries each year. How we coach for those papers is set out on our <a class="ag-inline-link" href="/maths-challenges">maths challenges page</a>.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'A learner who enjoys the Thames numbers will enjoy competition problems too, because both reward asking what a number really means before calculating with it.',
            'Our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists national events by age, and our <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> covers the harder rounds.'
          ],
          right: [
            'Lessons are live on video, so learners in Caversham, Tilehurst, Earley and Whitley all join from home. We group by level rather than by area, so a classmate could be in Slough or Swindon.',
            'Adults who walk the Thames Path often find the flow numbers the most memorable thing on this page, and a good way back into maths they last met at school.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/moebius-maths-hub/" rel="noopener" target="_blank">NCETM, Möbius Maths Hub</a>; <a class="ag-inline-link" href="https://www.reading.ac.uk/maths-and-stats/outreach" rel="noopener" target="_blank">University of Reading, Department of Mathematics and Statistics, Outreach</a>. Both read on 1 October 2026. Modern Age Coders has no link with the NCETM, its hubs, the University of Reading, the UKMT or any Reading school.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'Maths tutor for adults in Reading',
      lede: 'Adults come to us for many reasons: a GCSE maths resit for a course, numbers at work, or the wish to help a child without confusing them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resits', p: 'The full GCSE content, taught again at an adult pace and starting from the weakest topic. The exam entry is made through a college or exam centre.' },
          { h3: 'Functional Skills maths', p: 'Practical topics such as percentages, measures, money and reading tables, in the style Functional Skills maths qualifications use. See our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a>.' },
          { h3: 'Numbers at work', p: 'Spreadsheets, rates, unit conversions and reading charts with confidence, which is the Thames project in a work setting.' }
        ] },
        { kind: 'p', mt: true, html: 'Many adults tell us they were never shown why the methods work, only told to use them. We start from the reasons, which tends to make the methods stick. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> has more.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Our teaching order',
    h2: 'Four steps from counting to standard form',
    lede: 'Learners join at whichever step suits them; the free lesson shows us where.',
    table: { caption: 'From place value to orders of magnitude: what we look for before moving on', head: ['Typical years', 'Stage of the climb', 'Ready to move on once they'], rows: [
      ['Years 2 to 4', '1. Place value', 'Read and write numbers to a million and say what each digit is worth'],
      ['Years 5 to 7', '2. Units', 'Convert between seconds, minutes, hours and days without a calculator'],
      ['Years 8 to 10', '3. Compound measures', 'Turn a rate per second into a rate per day and explain each step'],
      ['Years 11 to 13', '4. Standard form and logs', 'Write very large and small numbers as A × 10ⁿ and compare them by their powers']
    ] },
    left: { h3: 'Joining late in GCSE', ps: [
      'A Year 11 learner who joins in spring still benefits. We check place value and units first, because standard form questions usually go wrong there.',
      'If the gap is too wide for the time left, we will tell you honestly at the free lesson.'
    ] },
    right: { h3: 'Beyond the exam', ps: [
      'Anyone hooked by the river data can carry on with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, turning the Thames readings into a short program, or with our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a> course.',
      'Others try competition maths, which rewards the same careful reading.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our maths courses',
    h2: 'Popular maths courses for Reading learners',
    lede: 'The courses UK families look for most often are first: GCSE, A level, 11 plus and IGCSE. Open any card for the syllabus.',
    bands: [
      { num: 'I', h3: 'Most requested', sub: 'Exam courses', courses: [
        { code: 'MRD / A1', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher tier, every major board.' },
        { code: 'MRD / A2', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics.' },
        { code: 'MRD / A3', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'Speed and reasoning for selective entry papers.' },
        { code: 'MRD / A4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For international exam papers.' }
      ] },
      { num: 'II', h3: 'Primary', sub: 'KS1 and KS2', courses: [
        { code: 'MRD / B1', slug: 'elementary-mathematics-complete-masterclass', title: 'KS1 and KS2 maths', blurb: 'All of primary maths, up to the SATs.' },
        { code: 'MRD / B2', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Number and shape for the youngest learners.' },
        { code: 'MRD / B3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Reliable calculation without paper.' },
        { code: 'MRD / B4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus arithmetic', blurb: 'From beads to mental pictures.' }
      ] },
      { num: 'III', h3: 'Secondary and stretch', sub: 'KS3 and beyond', courses: [
        { code: 'MRD / C1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Proportion, algebra and measures, the ground GCSE builds on.' },
        { code: 'MRD / C2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For algebra that never quite settled.' },
        { code: 'MRD / C3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, averages and probability.' },
        { code: 'MRD / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems in the UKMT style.' }
      ] },
      { num: 'IV', h3: 'For adults', sub: 'Work and further study', courses: [
        { code: 'MRD / D1', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'First-year topics for adults returning to study.' },
        { code: 'MRD / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'Statistics behind data analysis.' },
        { code: 'MRD / D3', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, rates and percentages.' },
        { code: 'MRD / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speedy arithmetic methods.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'Lessons after school, in the evening and at weekends',
    lede: 'Our teachers are in India, which is five and a half hours ahead of Reading in winter and four and a half in British Summer Time. We agree every slot in UK time.',
    slots: [
      { time: 'After school, weekdays', l: 'Primary, 11 plus and KS3.' },
      { time: 'Evenings, weekdays', l: 'GCSE, A level and adult learners.' },
      { time: 'Weekend mornings', l: 'Any stage.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'The same person each week, who knows what slipped last time.' },
      { h3: 'Short updates home', p: 'A few lines after lessons on progress and next steps.' },
      { h3: 'Groups of five to ten', p: 'Matched by level, so the pace suits everyone.' },
      { h3: 'Real data used', p: 'River flows, timetables and census tables alongside exam questions.' },
      { h3: 'Private lessons too', p: 'For a near exam or a single stubborn topic.' },
      { h3: 'Why before how', p: 'We explain the reason behind every method we teach.' }
    ]
  },

  projectsH2: 'Our learners went on to build these',
  projectsLede: 'Four projects from students whose first lessons used real numbers much like the Thames flows. The <a class="ag-inline-link" href="/student-labs">student labs</a> show plenty more.',
  reviewsLede: 'Word-for-word reviews that families and learners posted on our Google profile.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, at the same rate for every country outside India. Nothing to pay up front and no contract.',
    free: ['A real lesson at the right level', 'Frank feedback afterwards', 'No card required'],
    group: ['Five to ten learners, one level', 'A teacher who stays with the group', 'Marked homework, discussed', 'A certificate on completion'],
    one: ['A single learner with a teacher', 'Built around the exact gap', 'Useful before an exam']
  },

  faq: {
    eyebrow: 'Reading maths questions',
    h2: 'What Reading families ask about maths tuition',
    items: [
      { q: 'What is standard form in maths?', a: 'Standard form writes a number as A × 10ⁿ, where A is at least 1 and less than 10 and n is a whole number. So 2,021,760 is about 2.02 × 10⁶, and 0.00042 is 4.2 × 10⁻⁴.' },
      { q: 'How much is a maths tutor in Reading?', a: 'The first lesson with us is free. Then a group place costs USD 100 a month and one to one lessons USD 150 a month, with no joining fee and no minimum term.' },
      { q: 'Do you teach 11 plus maths in Reading?', a: 'Yes, through our 11 plus maths course. Our separate Reading 11 plus page covers the local tests and schools.' },
      { q: 'Can you teach GCSE maths for AQA, Edexcel or OCR?', a: 'Yes, at Foundation or Higher tier, to the exact specification of the board, and IGCSE where a school uses it.' },
      { q: 'Do you help adults with a GCSE maths resit?', a: 'Yes. We reteach the GCSE content from the learner\'s weakest topic upwards. The exam is booked through a college or exam centre.' },
      { q: 'Do you cover KS3 maths?', a: 'Yes. KS3, Years 7 to 9, is where algebra and proportion are built, and many GCSE problems trace back to it, so we take it seriously.' },
      { q: 'What is the best way to check a unit conversion?', a: 'Estimate first, then ask whether the answer is sensible. A river flowing at about 20 cubic metres a second must carry well over a million cubic metres a day, because a day has 86,400 seconds.' },
      { q: 'Are lessons face to face anywhere in Reading?', a: 'No, we only teach online. Each session is live, with a teacher you can see and question, and it reaches any Reading postcode with a decent connection.' },
      { q: 'Can you help with Further Maths?', a: 'Yes, as an extension of A level. Once the single-maths core is solid, a keen sixth former in Reading can work on Further Maths topics such as complex numbers and matrices with the same teacher. Name the board when you book.' },
      { q: 'Do you promise exam grades?', a: 'No. We teach carefully and report progress honestly, but no tutor can promise a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Reading learners',
    lede: 'Our 11 plus page for Reading, national maths pages and our coding page for the town.',
    items: [
      { href: '/11-plus-maths-tuition-reading', label: '11 plus maths in Reading', p: 'The local grammar school tests, in detail.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Every tier and board.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure, statistics and mechanics.' },
      { href: '/best-coding-class-in-reading', label: 'Coding classes in Reading', p: 'Our coding page for the town.' },
      { href: '/maths-tuition-in-slough', label: 'Maths tuition in Slough', p: 'A neighbouring town, a different project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'All our UK pages in one place.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson in Reading',
    lede: 'Tell us the age or year and the topic that causes the most trouble. The trial is a full lesson, and we follow it with a clear view of where the learner stands.',
    readFirst: 'Would you like to look first? See our <a class="ag-inline-link" href="/courses">courses</a> and how we approach <a class="ag-inline-link" href="/how-we-teach">teaching</a>.',
    note: 'WhatsApp gets the quickest reply. The number starts with India\'s code because the team works from India; there is no Reading office and lessons are online.',
    formNote: 'No card needed. We get back to you to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/11-plus-maths-tuition-reading', label: '11 plus maths in Reading' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/online-maths-classes-for-adults-in-uk', label: 'Maths for adults' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-reading', label: 'Coding in Reading' },
        { href: '/maths-tuition-in-slough', label: 'Maths tuition in Slough' },
        { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford' }
      ] }
    ],
    bottomRight: 'Maths at every stage, live online'
  },

  personalityCss: `
.ag-root.ag-mrd .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-mrd .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mrd .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-mrd .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mrd .ag-table td:nth-child(4) { white-space: nowrap; }
.ag-root.ag-mrd .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-mrd .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-mrd .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['Möbius Maths Hub', 'The Willink School', 'MathsSquad!', '2,021,760', '302.0 cubic metres', '4,633.7 square kilometres', '11,203 days', '7,483 days', '0.436 millimetres'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), compound units and standard form. Reading schools sit in the Möbius Maths Hub area (NCETM).',
    localProject: 'Thames at Reading, Environment Agency daily mean flow, 19 August 1992 to 31 December 2025, 11,203 complete and good days: median 23.4, mean 38.19, max 302.0 (2003-01-04), min 2.189 (2022-08-17), ratio 138. Per day 2,021,760 / 26,092,800 / 189,129.6 m3; standard form; pools of 2,500 m3; depth over 4,633.7 km2 (NRFA) vs 4,640.0 (EA). Days under 10: 2,699; 10 to 100: 7,483; 100+: 1,021.',
    requiredMentions: ['Möbius Maths Hub', 'The Willink School', 'MathsSquad!', '2,021,760', '302.0 cubic metres', '4,633.7 square kilometres', '11,203 days', '7,483 days', '0.436 millimetres'],
    sources: [
      { claim: 'NCETM, Moebius Maths Hub: lead school The Willink School, Burghfield; council areas include Reading.', url: 'https://www.ncetm.org.uk/hubs/moebius-maths-hub/' },
      { claim: 'University of Reading, Department of Mathematics and Statistics, Outreach: MathsSquad! visits local schools in Berkshire.', url: 'https://www.reading.ac.uk/maths-and-stats/outreach' },
      { claim: 'Environment Agency hydrology, station Reading (River Thames, 2200TH), daily mean flow readings and catchmentArea 4640.0.', url: 'https://environment.data.gov.uk/hydrology/' },
      { claim: 'UKCEH National River Flow Archive, station 39130 Thames at Reading, catchment area 4633.7 km2.', url: 'https://nrfa.ceh.ac.uk/' },
      { claim: 'DfE GCSE mathematics subject content: compound units; standard form.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' }
    ],
    rejectedClaims: [
      'Flood claims about Reading homes or streets: the gauge measures flow only, and no flood statement is made.',
      'Days marked Suspect (including a lower value, 1.938, on 2022-09-29), Estimated or Unchecked: left out of every figure.',
      'Any total volume of water over the 33 years: it would be a sum of daily averages and is not printed.',
      'The pool comparison as a fact about real pools: it uses our own 2,500 cubic metre example and says so.',
      'Grammar school and test content: kept on the Reading 11 plus page, not repeated here.',
      'Any statement about Reading exam results or school performance: excluded by the spec.'
    ]
  }
};
