'use strict';
// Maths tuition in Nottingham (ag- maths by city, UK cluster Phase 11, worker M3).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM, East Midlands West Maths Hub: "The Lead School for the hub is George Spencer Academy, Nottinghamshire."; council
//    areas listed: Derbyshire, Derby, Nottingham, and the Nottinghamshire districts of Ashfield and Broxtowe.
//  - University of Nottingham, School of Mathematical Sciences outreach pages: Sixth Form Conference, "A one-day conference
//    for KS5 students and their maths teachers"; "There is no charge for the Sixth Form Conference."; taster lecture on
//    statistics: "In particular we look at extrapolation and its limitations"; community: "We take part in Wonder, the
//    University's free day for the local community"; Family Discovery Days for local primary school children and families.
//    (Admissions-test courses on the same page are deliberately not mentioned: excluded by the cluster spec.)
//  - DfE, GCSE mathematics subject content, statistics item 6: "use and interpret scatter graphs of bivariate data; recognise
//    correlation and know that it does not indicate causation; draw estimated lines of best fit; make predictions;
//    interpolate and extrapolate apparent trends whilst knowing the dangers of so doing".
//  - STA, Key stage 2 mathematics test framework: Paper 1 arithmetic, 40 marks, 30 minutes; Papers 2 and 3 reasoning, 35 marks
//    each, 40 minutes per paper; "the total testing time is 110 minutes".
// Local project (our calculation): Met Office historic station data, Sutton Bonington (Rushcliffe, Nottinghamshire; header
// "48 metres amsl"), monthly mean maximum temperature (tmax) and sunshine hours, 1959 to 1999 (the years with sunshine in
// the file, Campbell Stokes recorder). 481 month pairs after dropping 11 months flagged as estimated. All months: r = 0.834,
// fitted line tmax = 4.47 + 0.0777 x sun, r squared 0.696. By calendar month (about 40 years each): July r = 0.872 (slope
// 0.0419, intercept 13.46, July sun 106.4 to 252.4 hours), November r = -0.098, January r = 0.106. Mean residual from the
// all-months line: July +2.59 C, October +1.93 C, April -2.46 C, December -0.41 C. July line extrapolated: 0 hours -> 13.5 C,
// 400 hours -> 30.2 C (outside the observed range).
// Spine: does sunshine make a Nottinghamshire month warmer? Family: scatter graphs, correlation vs causation, lines of
// fit, interpolation vs extrapolation, a lurking variable (the season) and residuals.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'NOTTINGHAM MATHS', label: 'Maths tuition in Nottingham', blurb: 'Maths for Nottingham from Year 6 SATs to GCSE, A level and adult study, with a scatter graph project on sixty years of local weather.' },
  slug: 'maths-tuition-in-nottingham',
  code: 'mtn',
  accent: '#245418',
  accentRationale: 'Nottingham maths: a muted forest green, chosen by hand and kept clearly apart from the olive on our Nottingham coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in Nottingham',
  title: 'Maths Tuition in Nottingham | SATs, GCSE and A Level Online',
  description: 'Online maths tuition in Nottingham for ages 6 to 67: Year 6 SATs, KS3, GCSE resits, A level, Further Maths and adult maths, with a local weather data project.',
  ogDescription: 'A maths tutor for Nottingham, live online: KS2 and SATs, KS3, GCSE on AQA, Edexcel or OCR, A level, Further Maths and Functional Skills for adults.',
  twitterDescription: 'Nottingham maths, taught live online: does a sunny month really run warmer? Forty years of Met Office records say it depends on the month.',
  pageName: 'Maths Tuition in Nottingham',
  webPageDescription: 'Live online maths tuition for Nottingham learners aged 6 to 67: Key Stage 2 and the Year 6 tests, Key Stage 3, GCSE at Foundation or Higher tier, A level and Further Maths, and adult maths including Functional Skills, with a statistics project on Met Office records from Sutton Bonington.',
  courseDescription: 'Live online maths for Nottingham learners at every stage, in groups of five to ten at one level or one to one, matched to the national curriculum and the learner\'s exam board.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in Nottingham',
  navLinks: [
    { href: '#stages', label: 'Stages' },
    { href: '#sunshine', label: 'Sunshine' },
    { href: '#extrapolate', label: 'Extrapolation' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Nottingham &middot; Maths for every learner from 6 to 67 &middot; Live online, small groups or one to one',
  h1: 'Maths tuition in Nottingham',
  lede: 'Does a sunny month run warmer? It sounds too obvious to test, so we tested it on forty-one years of Met Office records from Sutton Bonington, in Rushcliffe. Across 481 months the answer looks like a firm yes: the correlation between sunshine hours and average maximum temperature is 0.834. Then split the months up. In July the link stays strong. In November it vanishes, and the correlation even turns slightly negative. The strong overall pattern was mostly the seasons talking. Knowing when a correlation means something is a GCSE skill and an A level one, and it is the thread running through this page about how we teach maths to Nottingham learners of every age.',
  secondaryCta: { href: '#sunshine', label: 'See the sunshine data' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Nottingham.',
  heroNote: 'Maths only on this page &middot; Primary, secondary, sixth form and adult learners &middot; Not linked to any Nottingham school or university',
  spec: [
    ['Who', 'Nottingham learners aged 6 to 67'],
    ['Primary', 'KS2 maths and the Year 6 tests'],
    ['Secondary', 'KS3, then GCSE on AQA, Edexcel or OCR'],
    ['Sixth form', 'A level Maths, Further Maths'],
    ['Adults', 'Functional Skills, GCSE resits, refreshers'],
    ['Format', 'Live video, 5 to 10 per group, or one to one'],
    ['Teachers', 'Working from India on UK hours'],
    ['Local project', 'Sunshine against temperature, 1959 to 1999']
  ],
  capsuleQ: 'In short',
  capsule: 'We are an online maths tutor for Nottingham learners from 6 to 67: KS2 maths and the Year 6 SATs papers, KS3, GCSE at Foundation or Higher tier on AQA, Edexcel or OCR including resits, A level Maths and Further Maths, and adult maths such as Functional Skills and refreshers. Groups of five to ten learners share one level, and private lessons are also available. Our local example uses Met Office records from Sutton Bonington: over 481 months from 1959 to 1999, sunshine and maximum temperature correlate at 0.834, but within November alone the correlation is -0.098, because the season, not the sunshine, drives most of the pattern. The opening lesson costs nothing; then it is USD 100 a month for a group place or USD 150 a month for one to one.',

  picks: {
    eyebrow: 'Where Nottingham learners tend to start',
    h2: 'Three usual first courses',
    lede: 'Start from the stage. Every other course, from early number to university maths, is listed lower down.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NOT / 1', title: 'KS2 maths', note: 'Arithmetic that holds up under a 30 minute paper, and reasoning that can be written down, ready for Year 6.' },
      { course: 'gcse-mathematics-mastery', code: 'NOT / 2', title: 'GCSE maths, first time or resit', note: 'AQA, Edexcel or OCR at either tier, including learners resitting after Year 11.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'NOT / 3', title: 'A level Maths', note: 'Regression, correlation and calculus practised on genuine data, such as the weather records further down.' }
    ]
  },

  sections: [
    {
      id: 'stages', tint: 'tint', eyebrow: 'Stage by stage',
      h2: 'KS2, KS3, GCSE and A level maths for Nottingham learners',
      lede: 'Nottingham schools teach the national curriculum for England, so a learner here passes through the same key stages and exams as one in Leeds or Bristol. Adults pick up wherever they stopped.',
      body: [
        { kind: 'table', caption: 'The maths stages in England, and where our lessons put the weight', head: ['Stage', 'Typical ages', 'Where we put the weight'], rows: [
          ['Key Stage 1', '5 to 7', 'Number bonds, counting in steps, halves and quarters, telling the time.'],
          ['Key Stage 2', '7 to 11', 'Fluent arithmetic for Paper 1, then multi-step reasoning for Papers 2 and 3 of the Year 6 tests.'],
          ['Key Stage 3', '11 to 14', 'Algebraic notation, proportion, area and volume, and drawing and reading charts.'],
          ['GCSE', '14 to 16', 'Foundation or Higher on AQA, Edexcel or OCR; scatter graphs, probability, algebra and geometry.'],
          ['A level', '16 to 18', 'Pure, statistics and mechanics, plus Further Maths for learners who want more.'],
          ['Adults', '18 to 67', 'Functional Skills, a GCSE resit, or simply getting comfortable with numbers again.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Year 6 SATs maths',
          left: [
            'The Standards and Testing Agency\'s framework for the Key Stage 2 maths test sets out three papers. Paper 1 is arithmetic: 40 marks in 30 minutes. Papers 2 and 3 are reasoning, 35 marks each, with 40 minutes per paper. In the framework\'s words, "the total testing time is 110 minutes".',
            'The two kinds of paper need different preparation. Arithmetic rewards accuracy and speed with written methods. Reasoning rewards reading a problem slowly and showing working, and the same framework expects pupils to read information from a line graph and to "calculate and interpret the mean as an average".'
          ],
          rightH3: 'GCSE, A level and Further Maths',
          right: [
            'GCSE lessons follow the board and tier the school has chosen, with proper time given to statistics, where marks are often lost cheaply. At A level we keep correlation and regression tied to genuine data sets so a coefficient always means something.',
            'For more detail by stage, see our national pages on <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/key-stage-2-mathematics-test-framework" rel="noopener" target="_blank">Standards and Testing Agency, Key stage 2 mathematics test framework</a>, read on 1 October 2026. The ages shown are typical, not rules.' }
      ]
    },
    {
      id: 'sunshine', tint: 'plain', eyebrow: 'The Nottingham project',
      h2: 'Does a sunny month run warmer? Forty-one years of Nottinghamshire weather',
      lede: 'A scatter graph of sunshine against temperature looks convincing. The interesting maths starts when you ask what is really causing the pattern.',
      body: [
        { kind: 'two',
          left: [
            'The Met Office publishes long monthly records for a set of historic weather stations. One of them is Sutton Bonington, in Rushcliffe, which the file says stands 48 metres above sea level. It lists, month by month, the average daily maximum temperature and the total hours of sunshine.',
            'Sunshine figures in the file run from 1959 to 1999, so we used those forty-one years. We dropped the 11 months that the Met Office marks as estimated, which leaves 481 months, each giving one point on a scatter graph: sunshine hours across, maximum temperature up.'
          ],
          right: [
            'The points rise steeply from left to right. The correlation coefficient is 0.834, and the fitted line says each extra hour of sunshine goes with about 0.078 °C more warmth. A student who stops here concludes that sunshine warms a month, and says so with confidence.',
            'The trouble is that both quantities follow the calendar. Summer months are long and bright; winter months are short and dull. Put every month on one graph and you mostly measure the difference between July and January, not the effect of a sunny spell.'
          ] },
        { kind: 'table', mt: true, caption: 'Correlation between sunshine hours and mean maximum temperature at Sutton Bonington, 1959 to 1999, our calculation', head: ['Months included', 'Points', 'Correlation r', 'What it suggests'], numCols: [1, 2], rows: [
          ['All months together', '481', '0.834', 'A strong pattern, mostly made by the seasons'],
          ['Julys only', '40', '0.872', 'In summer, a sunnier July really is a warmer July'],
          ['Mays only', '41', '0.644', 'Still clearly positive in late spring'],
          ['Octobers only', '40', '0.242', 'Weak by autumn'],
          ['Januarys only', '39', '0.106', 'Almost nothing in midwinter'],
          ['Novembers only', '41', '-0.098', 'Slightly negative: a sunny November is no warmer']
        ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/suttonboningtondata.txt" rel="noopener" target="_blank">Met Office historic station data, Sutton Bonington</a>, read on 1 October 2026; sunshine in these years came from a Campbell Stokes recorder. Months marked as estimated were left out. Correlations, lines and residuals are Modern Age Coders\' calculations. Number of years differs slightly by month because of those exclusions.' }
      ]
    },
    {
      id: 'extrapolate', tint: 'deep', eyebrow: 'A GCSE skill with a trap in it',
      h2: 'Fitted lines, residuals and the danger of going past the data',
      lede: 'The DfE content for GCSE maths asks students to "interpolate and extrapolate apparent trends whilst knowing the dangers of so doing". These records show both dangers clearly.',
      body: [
        { kind: 'two',
          leftH3: 'What the residuals reveal',
          left: [
            'A residual is the gap between a real point and the fitted line. Take the line drawn through all 481 months and look at which months sit above it. July months sit on average 2.59 °C above the line, October months 1.93 °C above, and April months 2.46 °C below.',
            'So two months with identical sunshine can differ by several degrees, depending on whether they come in spring or autumn. A likely reason, which is our reading rather than something these numbers prove, is that ground and sea are still cool in April and still warm in October. A single straight line through every month cannot see that.'
          ],
          rightH3: 'Going past the data',
          right: [
            'Now fit a line through the forty Julys alone: temperature ≈ 13.46 + 0.0419 × sunshine. Within the Julys we actually have, 106.4 to 252.4 hours of sun, it predicts sensibly. That is interpolation, and it is fairly safe.',
            'Push it to 400 hours and it promises 30.2 °C. No July on the record came anywhere close to that much sun, so the line is guessing. Push it down to zero hours and it gives 13.5 °C, a July with no sun at all, which has never happened either. The arithmetic is perfect and the answers mean nothing.'
          ] },
        { kind: 'p', mt: true, html: 'The DfE wording also asks students to "draw estimated lines of best fit" and to know that correlation "does not indicate causation". This data set teaches both in one sitting, and it carries on into A level, where students compute the coefficient themselves, test whether it differs from zero, and write a sentence about what it does not prove.' },
        { kind: 'source', html: 'Wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content and assessment objectives</a>. All fitted values and residuals are our calculations from the Met Office file above.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'Maths around the city',
      h2: 'Maths outside the classroom in and near Nottingham',
      lede: 'Families ask what else is on offer locally. These are things we confirmed on public web pages; we run none of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'East Midlands West Maths Hub', p: 'The NCETM page names George Spencer Academy, Nottinghamshire, as lead school for the hub, and lists Nottingham among the council areas it serves, with Derby, Derbyshire, Ashfield and Broxtowe. Hubs support teachers and schools, not families.' },
          { h3: 'University of Nottingham', p: 'The School of Mathematical Sciences runs a Sixth Form Conference, described as "A one-day conference for KS5 students and their maths teachers", and states that "There is no charge for the Sixth Form Conference."' },
          { h3: 'Tasters and family days', p: 'Its online taster lecture on statistics says "In particular we look at extrapolation and its limitations". The school also joins Wonder, the university\'s free community day, and Family Discovery Days for primary children.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Places at university events usually go through schools, so a maths teacher is the person to ask. For competitions, the UKMT maths challenges are the national ones most schools enter; they are dated on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>, and the <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad page</a> covers the later rounds.',
            'It is a happy coincidence that the university\'s statistics taster dwells on extrapolation, the same idea as our weather project. It is the kind of idea that separates a learner who can run a calculation from one who can judge it.'
          ],
          right: [
            'Beeston, Arnold or Sneinton, it makes no difference: a learner joins each live lesson from home. Groups are formed by level, so a classmate could just as easily be in Derby or Glasgow.',
            'Adults usually come to us for one of two routes, Functional Skills maths or a GCSE resit. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> explains the levels.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/hubs/east-midlands-west-maths-hub/" rel="noopener" target="_blank">NCETM, East Midlands West Maths Hub</a>; <a class="ag-inline-link" href="https://www.nottingham.ac.uk/mathematics/outreach/index.aspx" rel="noopener" target="_blank">University of Nottingham, School of Mathematical Sciences, schools and community outreach</a>. Read on 1 October 2026. None of these bodies is connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Adult learners',
      h2: 'A maths tutor for adults in Nottingham',
      lede: 'Adults make up a good share of the people who contact us, and they rarely want the same thing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Functional Skills', p: 'Practical maths for work and further training, taught step by step, with plenty of everyday problems: percentages on a payslip, scale on a plan, averages in a report.' },
          { h3: 'GCSE maths resit', p: 'For adults and older students who need the grade for a course or a job. The GCSE course we use explicitly includes resit candidates, at Foundation or Higher tier.' },
          { h3: 'Confidence and curiosity', p: 'Some adults just want to understand what they once memorised. Our <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">adult maths page</a> describes how those groups run.' }
        ] },
        { kind: 'p', mt: true, html: 'The weather data suits adults well. Most of us have seen a chart in the news showing two things rising together, and the November result above is a quick, memorable way to learn the question worth asking every time: what else changed at the same moment?' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How the steps fit',
    h2: 'From arithmetic to judging a trend, in four steps',
    lede: 'The steps build on one another. Learners start at whichever one fits, and the free first lesson finds it.',
    table: { caption: 'A route from fluent arithmetic to statistical judgement, with a sign each step is secure', head: ['Usually', 'Step', 'A sign it is secure'], rows: [
      ['Years 3 to 6', '1. Arithmetic', 'Completes long multiplication and division accurately without a calculator'],
      ['Years 6 to 8', '2. Reading data', 'Reads values and differences off a line graph and works out a mean'],
      ['Years 8 to 11', '3. Relationships', 'Plots a scatter graph and describes the correlation in a sentence'],
      ['Years 11 to 13', '4. Judgement', 'Explains when a fitted line can be trusted and when it cannot']
    ] },
    left: { h3: 'Close to an exam', ps: [
      'A Year 11 or Year 6 learner who joins late can still gain a great deal, provided we fix the arithmetic first. Most lost marks trace back to it.',
      'If there is more to fix than there is time, we will tell you plainly after the trial lesson.'
    ] },
    right: { h3: 'Beyond the exam', ps: [
      'Some learners continue with <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability</a>, where the sunshine records become a full regression study, or with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where a short program draws the scatter graph.',
      'Others find they enjoy problem solving for its own sake and move on to competition maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'All courses',
    h2: 'Maths courses for Nottingham learners',
    lede: 'Arranged by stage; open any card for the complete syllabus.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 11', courses: [
        { code: 'MTN / A1', slug: 'early-math-foundations', title: 'Early number', blurb: 'Counting, patterns and shape for young children.' },
        { code: 'MTN / A2', slug: 'elementary-mathematics-complete-masterclass', title: 'KS1 and KS2 maths', blurb: 'The whole primary curriculum, reasons included.' },
        { code: 'MTN / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, reliable calculation in the head.' },
        { code: 'MTN / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus arithmetic', blurb: 'A physical frame that becomes a mental one.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3 and GCSE', courses: [
        { code: 'MTN / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Years 7 to 9: algebra, proportion, geometry, data.' },
        { code: 'MTN / B2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rebuilding algebra from the ground up.' },
        { code: 'MTN / B3', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'AQA, Edexcel or OCR, either tier, resits included.' },
        { code: 'MTN / B4', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge and Edexcel International entries.' }
      ] },
      { num: 'III', h3: 'Sixth form and beyond', sub: 'From 16', courses: [
        { code: 'MTN / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'MTN / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Correlation, regression and hypothesis tests.' },
        { code: 'MTN / C3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'First-year calculus and linear algebra.' },
        { code: 'MTN / C4', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems that need ideas, not procedures.' }
      ] },
      { num: 'IV', h3: 'Applied and adult', sub: 'Work and interest', courses: [
        { code: 'MTN / D1', slug: 'complete-business-finance-mathematics-mastery', title: 'Business maths', blurb: 'Interest, depreciation and investment.' },
        { code: 'MTN / D2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analysis', blurb: 'Statistics and matrices behind data work.' },
        { code: 'MTN / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exploring number and data in Python.' },
        { code: 'MTN / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Speedy calculation tricks for confident learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'Weekday afternoons, evenings and weekends, in UK time',
    lede: 'Our teachers are in India, where the clocks never change. From late October to late March India is five and a half hours ahead of Nottingham, and four and a half hours ahead in British Summer Time. Slots are always fixed and shown in UK time.',
    slots: [
      { time: 'Weekdays after school', l: 'Primary and secondary pupils.' },
      { time: 'Weekday evenings', l: 'Sixth formers and adults after work.' },
      { time: 'Weekend mornings', l: 'For learners who prefer an early start.' }
    ],
    cells: [
      { h3: 'A steady teacher', p: 'One teacher follows a group week after week and remembers each learner\'s habits.' },
      { h3: 'A note after class', p: 'A few lines home on what is secure and what needs another look.' },
      { h3: 'Matched groups', p: 'Five to ten learners, all working at the same level.' },
      { h3: 'Local data', p: 'Weather records, census tables and maps alongside exam questions.' },
      { h3: 'Private option', p: 'One to one for a single topic, a looming exam or personal preference.' },
      { h3: 'Understanding first', p: 'Learners explain a method before they practise it.' }
    ]
  },

  projectsH2: 'Projects our students went on to make',
  projectsLede: 'Learners who started with graphs and data went on to make the four projects below. Plenty more are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reproduced without editing from Google reviews left by our families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'Billed each month in US dollars, at one rate for all countries outside India, with no sign-up fee and no contract.',
    free: ['A full lesson pitched at the right level', 'Our straight assessment afterwards', 'No payment details taken'],
    group: ['Five to ten learners, one level', 'The same teacher each week', 'Feedback on written work', 'Certificate on completion'],
    one: ['One teacher, one learner', 'Focused on the precise gap', 'Useful when an exam is near']
  },

  faq: {
    eyebrow: 'Nottingham maths questions',
    h2: 'What Nottingham parents and adult learners ask',
    items: [
      { q: 'What does correlation mean in maths?', a: 'Correlation measures how closely two quantities move together, from -1 to 1. A value near 1 means they rise together; near 0 means little straight-line link. It never proves that one causes the other, which is why our sunshine data matters.' },
      { q: 'How much does a maths tutor cost in Nottingham?', a: 'The first lesson is free. After that it is USD 100 a month for a place in a small group, or USD 150 a month for one to one lessons. There is no joining fee.' },
      { q: 'Can you help my child prepare for the Year 6 SATs maths papers?', a: 'Yes. We work on fast, accurate arithmetic for Paper 1 and on reading and reasoning for Papers 2 and 3, using the structure set out in the official test framework.' },
      { q: 'Do you teach GCSE maths resits?', a: 'Yes, for older students and adults, at Foundation or Higher tier, on AQA, Edexcel or OCR. The course we use is designed to include resit candidates.' },
      { q: 'Is an online maths tutor as effective as one in person?', a: 'For most learners it is. Our teachers teach live, see the learner\'s working as it is written, and correct it on the spot. There are no recorded lessons, and each group keeps the same teacher.' },
      { q: 'Do you offer Functional Skills maths for adults?', a: 'Yes. We teach Functional Skills maths to adults at their own pace, in adult groups or privately, with practical problems from everyday life and work.' },
      { q: 'Do you teach A level Maths and Further Maths?', a: 'Yes. A level Maths covers pure, statistics and mechanics; Further Maths adds more proof, complex numbers, matrices and deeper applied topics.' },
      { q: 'Are lessons held anywhere in Nottingham?', a: 'No. All lessons are live online, so learners anywhere in the city or the county join from home.' },
      { q: 'Will you guarantee a grade?', a: 'No. Nobody can honestly guarantee a grade. We teach carefully, set and mark work, and tell you each month how things are going.' },
      { q: 'Are you part of the University of Nottingham or the Maths Hub?', a: 'No. We mention their public events so families know about them, but we have no connection with the university, the NCETM, any Maths Hub or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Nottingham learners',
    lede: 'Stage-by-stage maths pages, the county page and our coding page for the city.',
    items: [
      { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition', p: 'Years 3 to 6 and the Year 6 tests.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Every board and both tiers.' },
      { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths', p: 'Practical maths qualifications for adults.' },
      { href: '/best-coding-class-in-nottingham', label: 'Coding classes in Nottingham', p: 'Our page on coding for the city.' },
      { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire', p: 'Our county page.' },
      { href: '/maths-tuition-in-liverpool', label: 'Maths tuition in Liverpool', p: 'A tide data project on the Mersey.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Let us know the learner\'s age or year group and the topic that worries them most. The trial is a genuine lesson, and you get a clear account of the learner\'s level afterwards.',
    readFirst: 'Rather browse first? See our <a class="ag-inline-link" href="/courses">course list</a> or read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'A WhatsApp message is the fastest route to a reply. Our number carries India\'s dialling code because the team is based there; we have no Nottingham office, and teaching is entirely online.',
    formNote: 'No payment card required. We will write back to arrange a convenient time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-coding-class-in-nottingham', label: 'Coding in Nottingham' },
        { href: '/maths-tuition-in-liverpool', label: 'Maths tuition in Liverpool' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Live maths teaching for all ages'
  },

  personalityCss: `
.ag-root.ag-mtn .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mtn .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mtn .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-mtn .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-mtn .ag-table td:nth-child(3) { font-weight: 600; }
.ag-root.ag-mtn .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-mtn .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-mtn .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['East Midlands West Maths Hub', 'George Spencer Academy', 'Sixth Form Conference', 'Campbell Stokes recorder', '0.834', '-0.098', '2.59 °C', 'the total testing time is 110 minutes', 'extrapolation and its limitations'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), statistics item 6 on scatter graphs; STA Key stage 2 mathematics test framework. Nottingham schools sit in the East Midlands West Maths Hub area (NCETM).',
    localProject: 'Met Office Sutton Bonington monthly tmax and sunshine, 1959 to 1999, 481 months after dropping 11 estimated: all-months r 0.834 (line 4.47 + 0.0777 x sun, r squared 0.696); July r 0.872 (13.46 + 0.0419 x sun), May 0.644, October 0.242, January 0.106, November -0.098; mean residuals July +2.59, October +1.93, April -2.46 C; July line at 400 h gives 30.2 C and at 0 h 13.5 C.',
    requiredMentions: ['East Midlands West Maths Hub', 'George Spencer Academy', 'Sixth Form Conference', 'Campbell Stokes recorder', '0.834', '-0.098', '2.59 °C', 'the total testing time is 110 minutes', 'extrapolation and its limitations'],
    sources: [
      { claim: 'NCETM, East Midlands West Maths Hub: lead school George Spencer Academy, Nottinghamshire; areas Derbyshire, Derby, Nottingham, Ashfield and Broxtowe.', url: 'https://www.ncetm.org.uk/hubs/east-midlands-west-maths-hub/' },
      { claim: 'University of Nottingham School of Mathematical Sciences outreach: Sixth Form Conference (no charge), statistics taster on extrapolation, Wonder and Family Discovery Days.', url: 'https://www.nottingham.ac.uk/mathematics/outreach/index.aspx' },
      { claim: 'DfE GCSE mathematics subject content, statistics item 6: scatter graphs, correlation not causation, lines of fit, interpolation and extrapolation.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'STA Key stage 2 mathematics test framework: Paper 1 arithmetic 40 marks 30 minutes; Papers 2 and 3 reasoning 35 marks each, 40 minutes; total 110 minutes.', url: 'https://www.gov.uk/government/publications/key-stage-2-mathematics-test-framework' },
      { claim: 'Met Office historic station data, Sutton Bonington: monthly tmax and sunshine.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/suttonboningtondata.txt' }
    ],
    rejectedClaims: [
      'University of Nottingham admissions-test courses (MAT, TMUA, STEP) on the same outreach page: excluded by the cluster spec (admissions-adjacent).',
      'That Sutton Bonington is in Nottingham city: it is in Rushcliffe, Nottinghamshire (postcodes.io), and the page says so.',
      'Any claim that sunshine causes the July warmth: the page presents correlation only.',
      'Sunshine after 1999 at Sutton Bonington: not in the file, so not used.',
      'Nottingham exam results or school performance: excluded by the spec.'
    ]
  }
};
