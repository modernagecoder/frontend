'use strict';
// Math tutor, Ottawa (cg- city page, Canada cluster Wave 2, row 166). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: periodic behaviour and rates of change through Ontario math (patterns, MCR3U sinusoidal functions, MHF4U radians,
// MCV4U rates), routed to the live spokes; one MCR3U modelling lesson, a sinusoid built from a year of Ottawa River
// temperatures at the Britannia intake and tested against the data; an MCV4U worked problem on shrinking intervals and
// noise; the Grade 11 contest slice (Fermat and Hypatia) with the CMS COMC noted; price.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; Ottawa files in ca/src-pilots/math-tutor-ottawa/ and the
// Ottawa licence in ca/src/geo/opendata/ottawa/):
//  - Ontario DCP API: MCR3U "Functions" (2007), prerequisite Grade 10 academic; MHF4U "Advanced Functions"; MCV4U "Calculus
//    and Vectors" with MHF4U "prior to or concurrently"; MDM4U; MTH1W (2021). EQAO 2026-27 windows (en dashes in source).
//  - CEMC: Fermat "Students in Grade 11 are eligible to write the Fermat Contest."; PCF "Tuesday, February 23, 2027 and
//    Wednesday, February 24, 2027", "25 multiple-choice questions", 60 minutes; Hypatia (Grade 11) "Wednesday, April 7,
//    2027", "4 questions; a mix of final answer-only and full-solution.", 75 minutes; through a school; past contests free.
//    CMS COMC: 2026 date "Thursday, October 29th", registration last day "Thursday, October 22nd"; "The COMC is open to
//    students in all locations, at all grade levels."; CMO "All students require an invitation".
//  - facts-geo.md: Ottawa is in the Ottawa - Gatineau CMA; Eastern Ontario overlay 343/613/753; Constitution Act, 1867 s.16
//    "the Seat of Government of Canada shall be Ottawa"; Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March 2027.
//  - City of Ottawa, "Ottawa River Temperature 2025" item 4b659d7c349d4bf6afccbd658773b6ea (saved): snippet "Daily average
//    raw water temperature of Ottawa River at Britannia WPP in 2025."; description: temperature recorded = "Average of two
//    readings, recorded 12 hrs apart"; NIST-certified probe, range -20 to 50 degrees, plus or minus 0.5; "raw water intake
//    is approximately 427m out from Britannia plant"; "12 reinforced fibreglass bells located on the last 29 m of intake
//    pipe"; "approximate depth of 10 m"; "intake capacity of 364 ML/day"; Update Frequency Annual. The item's contact name is
//    not reproduced. Workbook 2025_Ottawa_River_water_temperature.xlsx downloaded 22 October 2026 (12,143,106 bytes, sha256
//    40fef562...a800). Licence: Open Government Licence - City of Ottawa, Version 2.0 ("including for commercial purposes";
//    attribution "Contains information licensed under the Open Government Licence - City of Ottawa", en dash in source
//    rendered as a hyphen; non-endorsement clause).
// Our own calculations (river.py, river2.py, river3.py, page_snippet.py, python -I): one sheet, header row 10, year columns
// 2005 to 2025 (21 years), 365 day rows with no 29 February; 2025 maximum 26.75 on 13 August (day 225), minimum 0.27 on 17
// January (day 17); 2025 mean 11.17, median 9.5; monthly means January 0.89, February 1.02, March 1.15, July 24.87, August
// 24.76; 102 days at or above 20 and 47 days at or below 1 in 2025; sinusoid a 13.24, midline 13.51, period 365, peak day
// 225; model against data on 1 May 10.63 vs 7.25, 1 June 17.60 vs 13.45, 1 October 22.31 vs 19.45; mean absolute error
// 2.49, largest -7.5 on day 322 (18 November); rate around 1 June over plus or minus 15, 5 and 1 days: 0.22, 0.405, -0.30
// degrees per day; 1 May to 1 June average rate 0.20; July means warmest 2023 (26.24), coolest 2009 (21.38).
// Lesson family: sinusoidal models (amplitude, midline, period, phase), residuals, average against instantaneous rate.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import datetime, math',
  'import openpyxl  # pip install openpyxl',
  '',
  'sheet = openpyxl.load_workbook("2025_Ottawa_River_water_temperature.xlsx", read_only=True).worksheets[0]',
  'rows = list(sheet.iter_rows(max_row=400, values_only=True))',
  'header = next(i for i, row in enumerate(rows) if row[0] == "Date")',
  'col = rows[header].index(2025)',
  'temps = [row[col] for row in rows[header + 1:] if isinstance(row[0], datetime.datetime)]',
  '',
  'amp = (max(temps) - min(temps)) / 2',
  'mid = (max(temps) + min(temps)) / 2',
  'peak_day = temps.index(max(temps)) + 1',
  '',
  'def model(day):',
  '    return amp * math.cos(2 * math.pi * (day - peak_day) / 365) + mid',
  '',
  'errors = [abs(temps[d - 1] - model(d)) for d in range(1, 366)]',
  'print("amplitude", amp, "midline", mid, "peak on day", peak_day)',
  'print("mean error, degrees:", round(sum(errors) / 365, 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'OTTAWA MATH', label: 'Math tutor in Ottawa', blurb: 'Math help for Ottawa students with periodic functions traced to MCR3U and MCV4U, an Ottawa River temperature modelling lesson, and the Grade 11 Waterloo contests.' },
  market: CA,
  slug: 'math-tutor-ottawa',
  code: 'mtuo',
  accent: '#751925',
  accentRationale: 'Ottawa math: a deep muted garnet, #751925, allocated for this row; the nearest other Canada accent is #66182B, 16.2 RGB units away (Euclidean); contrast 10.31 on the paper #FBF8F2 (9.69 and 8.87 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Ottawa',
    eyebrow: 'Math tutor, Ottawa, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Ottawa',
  title: 'Math Tutor Ottawa | Live Online Math from Grade 1 to MCV4U',
  description: 'Live online math tutoring for Ottawa students: the Ontario functions and calculus courses, an Ottawa River temperature lesson on sinusoids, and Waterloo contests.',
  ogDescription: 'Twenty-one years of Ottawa River temperatures at the Britannia intake make a near-perfect sine curve, until winter. An Ottawa math tutor page that shows why.',
  twitterDescription: 'Ottawa math tutoring, live online, with a real sinusoidal modelling lesson on City of Ottawa river data.',
  ogImageCourse: 'ontario-grade-12-university-math-mhf4u-mcv4u-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Ottawa Students',
    description: 'Live online math for Ottawa students from Grade 1 to Grade 12: number sense, MTH1W, MCR3U functions and trigonometry, MHF4U, MCV4U and MDM4U support, and Waterloo contest preparation.'
  },

  h1: 'Math tutor in Ottawa, live online',
  capsuleQ: 'Where can an Ottawa student get live online math tutoring?',
  capsule: 'Modern Age Coders gives Ottawa students live online math lessons from Grade 1 through Grade 12, one to one or in a class of 15 to 20 at a single level. For Grades 11 and 12 most choose Ontario Grade 12 University Math (MHF4U and MCV4U); contest-keen students choose Waterloo Math Contests: Gauss to Euclid; children choose a maths course for their age. A first lesson is free.',
  lead: 'Ottawa has a calendar students can feel: long cold winters, warm summers, and a return of each on a fairly reliable schedule. Mathematics has a name for that kind of regular rise and fall, a periodic function, and Ontario students spend much of Grade 11 learning to model it with sine and cosine. This page follows periodic behaviour and rates of change through the Ontario courses, sends you to our detailed page for each stage, and then builds a model from real Ottawa data. The City of Ottawa publishes the daily temperature of Ottawa River water entering the Britannia water purification plant, for every year since 2005, and one year of it is enough to build, test and question a sinusoid the way MCR3U asks.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Ottawa.',

  picks: {
    eyebrow: 'Math course picks for Ottawa',
    h2: 'Four starting courses for Ottawa students',
    intro: 'Chosen by stage. The teacher in the free lesson confirms the fit, or suggests a better one.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Number sense, patterns and fractions taught through explanation, the base for the Grade 3 and Grade 6 assessments.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 11', note: 'MTH1W relations, Grade 10 trigonometry and algebra, and the Grade 11 functions work that sinusoids build on.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Advanced Functions and Calculus and Vectors beside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Preparation for Fermat, Hypatia and the other CEMC contests, using problems we write.' }
    ]
  },

  sections: [
    {
      id: 'periodic', tint: '', eyebrow: 'Ontario math in Ottawa',
      h2: 'Repeating patterns to rates of change: the Ontario path an Ottawa student follows',
      intro: 'Ottawa public schools teach to the Ontario curriculum. Below, one family of ideas is followed through it, in our summary, with the page where we teach each stage.',
      body: [
        { kind: 'table', caption: 'Periodic behaviour and rates of change through Ontario math, our summary by stage; course titles and order from the Ontario curriculum service; EQAO dates from EQAO for 2026 to 2027', head: ['Stage', 'The idea at that stage', 'Our page'], rows: [
          ['Grades 1 to 6', 'Repeating patterns, then growing ones; EQAO assessments in Grades 3 and 6 from 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3</a>, <a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6</a>'],
          ['Grades 7 to 9', 'Rates and linear relations; in MTH1W, rate of change as the slope of a line; EQAO Grade 9 from 12 January to 5 February 2027', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 10', 'Right-triangle trigonometry and quadratics; the academic course is the MCR3U prerequisite', '<a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Courses compared</a>'],
          ['Grade 11, MCR3U', 'Sinusoidal functions: amplitude, period, phase shift and midline, used to model repeating data', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12, MHF4U', 'Trigonometric functions in radians, and average against instantaneous rates of change', '<a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>'],
          ['Grade 12, MCV4U', 'The derivative as a limit of rates of change; MHF4U first or alongside', '<a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>, <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>']
        ] },
        { kind: 'p', text: 'Sinusoidal modelling is a place where Grade 11 students can lose marks without knowing why. The algebra of y = a cos(k(x &minus; d)) + c is short, but each letter has to be read off a real situation: how high and low, how long one cycle lasts, where it peaks. A student who only memorises transformations struggles the moment the data are real, which is exactly when the course starts to matter.' },
        { kind: 'p', text: 'The ministry lists Grade 10 academic math as the entry to MCR3U, and says MHF4U must come before or alongside MCV4U. For an Ottawa student planning Grade 12 calculus, that makes Grade 11 the hinge year: secure sinusoids and rates there, and both Grade 12 courses are much easier.' },
        { kind: 'callout', h3: 'Beside the school course', p: 'We teach next to the school math course and we do not grant Ontario credits; the school awards every credit and mark. We are not connected with the Ontario Ministry of Education, EQAO or any Ottawa school board.' }
      ]
    },
    {
      id: 'river', tint: 'deep', eyebrow: 'Ottawa data lesson',
      h2: 'A year of Ottawa River temperatures, modelled with a cosine curve',
      intro: 'The City of Ottawa publishes the daily temperature of raw river water at the Britannia water purification plant. We built a sinusoid from the 2025 column and compared it with every day of that year. The model and its errors are our calculations.',
      body: [
        { kind: 'p', text: 'The City&rsquo;s description is unusually exact. Each daily value is the average of two readings, recorded 12 hours apart, around 06:00 and 18:00, using a certified probe accurate to plus or minus half a degree. The intake sits approximately 427 m out from the plant, where 12 reinforced fibreglass bells on the last 29 m of pipe rest at an approximate depth of 10 m, with an intake capacity of 364 ML/day. The workbook we downloaded has one row per calendar day and one column for each year from 2005 to 2025; it has no row for 29 February, so leap days are absent.' },
        { kind: 'table', caption: 'Our figures from the City of Ottawa workbook, 2025 column, downloaded 22 October 2026 (degrees Celsius)', head: ['Measure', '2025'], rows: [
          ['Warmest day', '26.75 on 13 August (day 225)'],
          ['Coldest day', '0.27 on 17 January (day 17)'],
          ['Mean and median of the 365 days', '11.17 and 9.5'],
          ['Monthly means, January to March', '0.89, 1.02, 1.15'],
          ['Monthly means, July and August', '24.87 and 24.76'],
          ['Days at or above 20 degrees', '102'],
          ['Days at or below 1 degree', '47']
        ] },
        { kind: 'p', text: 'From those numbers a Grade 11 student can write a model in four moves. The amplitude is half the range, (26.75 &minus; 0.27) &divide; 2 = 13.24. The midline is the average of the extremes, 13.51. The period is one year, 365 days. And the curve peaks on day 225, so a cosine shifted right by 225 fits: T(d) = 13.24 cos(2&pi;(d &minus; 225) &divide; 365) + 13.51. The program below builds exactly that model from the workbook and measures how far it sits from the real temperatures:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How good is it?', p: 'Across all 365 days the model is off by 2.49 degrees on average. For a curve built from only two numbers and a date, that is respectable, and it captures the shape of the year.' },
          { h3: 'Where it fails', p: 'In spring the model runs warm: on 1 June it predicts 17.60 degrees against 13.45 measured. The coldest day is 208 days before the warmest, not the 182.5 a symmetric sine wave assumes, so the river warms more slowly than it cools.' },
          { h3: 'The winter floor', p: 'From January to March the monthly means stay between 0.89 and 1.15. River water at the intake cannot cool far below freezing, so the bottom of the curve is flat. A sinusoid has no flat parts, which is a limitation worth naming in any report.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains information licensed under the Open Government Licence - City of Ottawa (<a class="cg-inline-link" href="https://ottawa.ca/en/city-hall/get-know-your-city/open-data#open-data-licence-version-2-0">licence</a>, <a class="cg-inline-link" href="https://open.ottawa.ca/">Open Ottawa</a>). The model, residuals and summaries are ours. The City of Ottawa does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'How fast was the river warming on 1 June 2025?',
      intro: 'A calculus question with a twist, for an MHF4U or MCV4U student. The temperatures are the City of Ottawa&rsquo;s 2025 values; the question and solution are ours.',
      body: [
        { kind: 'table', caption: 'Selected 2025 daily temperatures from the City of Ottawa workbook (degrees Celsius)', head: ['Date', '1 May', '17 May', '27 May', '31 May', '1 June', '2 June', '6 June', '16 June'], rows: [
          ['Temperature', '7.25', '13.0', '12.6', '14.2', '13.45', '13.6', '16.65', '19.6']
        ] },
        { kind: 'p', text: '<strong>Part (a), an average rate.</strong> From 1 May to 1 June the temperature rose from 7.25 to 13.45 degrees over 31 days, an average rate of change of (13.45 &minus; 7.25) &divide; 31 = 0.20 degrees per day.' },
        { kind: 'p', text: '<strong>Part (b), narrowing in.</strong> MCV4U estimates an instantaneous rate with ever smaller intervals centred on the moment. Using 17 May and 16 June (15 days either side): (19.6 &minus; 13.0) &divide; 30 = 0.22. Using 27 May and 6 June (5 days either side): (16.65 &minus; 12.6) &divide; 10 &asymp; 0.405.' },
        { kind: 'p', text: '<strong>Part (c), the twist.</strong> Using 31 May and 2 June (1 day either side): (13.6 &minus; 14.2) &divide; 2 = &minus;0.30. The river was not cooling in early June; day-to-day wobble in the measurements, each only accurate to half a degree, swamps the signal when the interval is tiny. With real data, shrinking the interval does not converge the way it does for a formula.' },
        { kind: 'p', text: '<strong>Part (d), use the model instead.</strong> Differentiate T(d) = 13.24 cos(2&pi;(d &minus; 225) &divide; 365) + 13.51 to get T&prime;(d) = &minus;13.24 &times; (2&pi; &divide; 365) sin(2&pi;(d &minus; 225) &divide; 365). At d = 152, the angle is 2&pi;(&minus;73) &divide; 365 &asymp; &minus;1.257 radians and its sine is about &minus;0.951, so T&prime;(152) &asymp; 13.24 &times; 0.01721 &times; 0.951 &asymp; 0.217 degrees per day: close to the 15-day estimate, and far steadier than the 1-day one.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> On which day of the year does the model say the river warms fastest, and what is that rate? Compare it with the real temperatures a week either side of that day.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Ottawa students',
      h2: 'A Grade 11 contest year in Ottawa: Fermat in February, Hypatia in April',
      intro: 'CEMC, the University of Waterloo centre behind the most widely written Canadian math contests, sets one paper for each grade. For a Grade 11 student in Ottawa there are two to plan around.',
      body: [
        { kind: 'table', caption: 'The two CEMC contests for Grade 11 in 2027, as CEMC lists them (read 22 October 2026)', head: ['Contest', 'Paper', 'Date'], rows: [
          ['Fermat', '25 multiple-choice questions, 60 minutes', '23 or 24 February 2027'],
          ['Hypatia', '4 questions, a mix of answer only and full solution, 75 minutes', 'Wednesday 7 April 2027']
        ] },
        { kind: 'p', text: 'The two papers test different strengths. Fermat rewards speed and the instinct to avoid long calculations; Hypatia rewards patient, complete reasoning that a marker can follow line by line, much like part (c) of the river problem, where the honest answer is that the data cannot support the calculation. Our <a class="cg-inline-link" href="/fermat-contest-preparation">Fermat preparation</a> and <a class="cg-inline-link" href="/fryer-galois-hypatia-contests-guide">Fryer, Galois and Hypatia guide</a> cover each paper, and the <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> covers every grade.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'School entry only', p: 'CEMC contests are written through schools; there is no individual entry. An Ottawa student whose school is not taking part can, on CEMC&rsquo;s suggestion, ask another local school to host them.' },
          { h3: 'Ten years of papers', p: 'CEMC&rsquo;s past contests are free to download with no sign-up. We use them for timed practice and teach with original problems in class.' },
          { h3: 'A second organiser', p: 'The Canadian Mathematical Society runs the COMC, held on 29 October 2026; its registration closed on 22 October. The COMC leads by invitation to the CMO. Our <a class="cg-inline-link" href="/comc-canada-open-mathematics-challenge-guide">COMC guide</a> explains the path.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC or CMS', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC, the University of Waterloo or the Canadian Mathematical Society. We never reproduce their problems or solutions; our practice problems are original and labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Ottawa',
      h2: 'Math tutor price in Ottawa: what you are actually comparing',
      intro: 'Scroll down to Fees for our actual amounts, which display in your local currency. Below is a fair way to set them beside other math help in Ottawa.',
      body: [
        { kind: 'table', caption: 'Three ways to get math help in Ottawa, as we describe them; other tutors&rsquo; rates are not quoted', head: ['', 'Live online class with us', 'One-to-one online with us', 'A tutor in your home'], rows: [
          ['Teacher time', 'Shared by 15 to 20 students at one level', 'Entirely one student&rsquo;s', 'Entirely one student&rsquo;s'],
          ['Typical charge', 'One monthly fee, eight live classes', 'A higher monthly fee', 'Usually per hour, with travel built in'],
          ['Best fit', 'A student broadly on track who wants weekly structure', 'A specific gap, an ambitious goal, exam weeks', 'A student who needs an adult in the room']
        ] },
        { kind: 'p', text: 'Whatever an Ottawa family chooses, the comparison only works in matching units, such as hours of live teaching each month. After that the questions that matter are about the teaching itself: whether the lessons follow the student&rsquo;s actual Ontario course, whether anyone reads the practice between sessions, and whether the student is asked to explain or simply shown.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From repeating patterns to derivatives',
    intro: 'These bands are a sketch. The free lesson decides the real starting point from what a student can show.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Patterns and number', p: 'Counting, place value and repeating patterns described in words.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Rates and ratios', p: 'Fractions, ratio and rates, with Gauss-style puzzles for keen students.', courses: ['comprehensive-middle-school-mathematics-mastery', 'middle-school-math-competitions-course'] },
      { band: 'Grades 9 and 10', h3: 'Lines and triangles', p: 'MTH1W relations, then Grade 10 trigonometry and quadratics.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 11 and 12', h3: 'Sinusoids to calculus', p: 'MCR3U, MHF4U and MCV4U, plus Fermat and Hypatia practice.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Can an Ottawa student hand the river model to AI?',
    intro: 'It will fit a curve. It will not tell you the curve is wrong in winter unless you already know to ask.',
    p1: 'Give an AI tool the 2025 column and it can return a fitted sinusoid in seconds. It is much less likely to notice the flat winter floor, the lopsided spring, or that a one-day derivative from noisy data is meaningless. Seeing those things is mathematical judgement, and it belongs to the student.',
    p2: 'Our lessons keep that judgement where it belongs: sketch the year first, estimate amplitude and period by eye, build the model by hand, and only then let software check. Work handed in for a school mark is the student&rsquo;s own.',
    closer: 'Ontario math asks students to model, reason and communicate. Software can draw the curve; deciding whether to trust it is still a person&rsquo;s job.',
    blogAnchor: 'why careful thinking still matters when software does the sums'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math lessons across Ottawa',
    intro: 'Kanata, Barrhaven, Orléans or the Glebe: lessons reach the student at home, which matters in an Ottawa February.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time, with two changes', p: 'Ottawa is on UTC-4 until 1 November 2026, then UTC-5 until 14 March 2027. Class times are given in Eastern time, and we confirm them again in each changeover week.' },
      { h3: 'Curves drawn together', p: 'Graphs and steps go on a board both people can see, which lets a teacher spot the moment a period or a phase shift slips.' },
      { h3: 'The school course decides', p: 'Lessons follow whichever Ontario course the student takes, MTH1W, MCR3U, MHF4U or MCV4U, at the school&rsquo;s pace.' },
      { h3: 'Ottawa numbers', p: 'Ottawa numbers on 613, 343 or 753 work in the form. Enter ten digits; the +1 is supplied.' },
      { h3: 'A free lesson first', p: 'The first lesson is a genuine lesson at the right level, and it ends with a recommended course. No card is asked for.' }
    ],
    spec: { title: 'No Ottawa centre', p: 'Modern Age Coders has no tutoring centre in Ottawa and claims none. Lessons are live and online, taught from India, and need a computer with a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Ottawa',
    intro: 'Displayed in the currency that matches your location.',
    first: 'A full live lesson without charge, ending with our recommended course and level.',
    group: 'The monthly fee for a live class of 15 to 20 students at one level.',
    private: 'The monthly fee for a teacher working with one student at chosen times.',
    closer: 'Ottawa families pay the same fee as any family in Canada. Billing waits until after the free lesson and until a course and time are agreed.'
  },

  reviewsH2: 'What Google reviewers say about Modern Age Coders',

  book: {
    h2: 'Book a free math lesson for your Ottawa student',
    intro: 'Let us know the grade and, in high school, the course code. A seven-year-old might begin with a repeating-pattern puzzle; a Grade 11 student might begin with the river data.',
    success: 'Thank you. The team will be in touch soon about a math class for Ottawa.'
  },

  faq: {
    h2: 'Ottawa math tutoring questions',
    intro: 'What Ottawa parents and students most often ask us.',
    items: [
      { q: 'Do you offer a math tutor in Ottawa?', a: 'Yes, online only. There is no Ottawa office; a student learns live from home with a teacher, one to one or in a class of 15 to 20 at a single level.' },
      { q: 'What does a math tutor in Ottawa cost with you?', a: 'Look at the Fees panel on this page: one free lesson, then a monthly class fee or a monthly one-to-one fee, displayed in your currency. Figures are kept out of this answer on purpose.' },
      { q: 'How is your live class different from an Ottawa home tutor?', a: 'Tutors who visit Ottawa homes generally bill per hour for the visit. Our live class is online, with 15 to 20 students at one level and one teacher for a monthly fee; our one-to-one option gives one student a teacher alone, also for a monthly fee.' },
      { q: 'Can you help with sinusoidal functions in MCR3U?', a: 'Yes. Building and testing a sinusoid from real data, like the river lesson on this page, is one of the ways we teach Grade 11 Functions.' },
      { q: 'Do you teach MCV4U calculus?', a: 'Yes, as support beside the school course. We do not grant Ontario credits: the credit, and the mark, come from the school the student attends.' },
      { q: 'Can an Ottawa student prepare for the Fermat or Hypatia contest?', a: 'Yes. CEMC lists Fermat for 23 and 24 February 2027 and Hypatia for 7 April 2027. Students enter through their school, and we prepare them with original problems.' },
      { q: 'Is the 2026 COMC still open?', a: 'No. The Canadian Mathematical Society lists the 2026 COMC for 29 October, and registration closed on 22 October 2026.' },
      { q: 'When do your classes run for Ottawa students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm each time in Eastern time.' },
      { q: 'Will my 613 phone number work in the form?', a: 'Yes. Ottawa numbers on 613, 343 and 753 all work; type the ten digits without the leading 1.' },
      { q: 'Do you teach younger children in Ottawa?', a: 'Yes. Six is a common starting age; early lessons are brief and built around patterns, number sense and saying why an answer is right.' }
    ]
  },

  next: {
    eyebrow: 'More for Ottawa and Canada',
    h2: 'Related math pages for Ottawa students',
    html: 'Our <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutor page for Canada</a> covers every province. For Ontario course help, see <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>; for contests, <a class="cg-inline-link" href="/fermat-contest-preparation">Fermat</a> and <a class="cg-inline-link" href="/comc-canada-open-mathematics-challenge-guide">the COMC</a>. The province page is <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ottawa math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mcr3u-functions-tutor', label: 'MCR3U help' },
    { href: '/fermat-contest-preparation', label: 'Fermat contest' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtuo .cg-hero h1 { font-weight: 710; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-mtuo .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-mtuo .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-mtuo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtuo .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-mtuo #river code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtuo #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtuo .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021), MCR3U (prerequisite Grade 10 academic), MHF4U, MCV4U (MHF4U prior or concurrent), MDM4U; EQAO 2026-27 windows. CEMC Fermat and Hypatia formats and 2027 dates; the through-a-school rule; CMS COMC 2026 date and closed registration, CMO by invitation. Ottawa area codes 343/613/753 and Eastern time offsets from facts-geo.md.',
    localProject: 'City of Ottawa, Ottawa River Temperature 2025 workbook (Open Government Licence - City of Ottawa, Version 2.0), downloaded 22 October 2026: daily raw water temperature at the Britannia intake, 2005 to 2025, 365 rows with no 29 February. Our 2025 sinusoid: amplitude 13.24, midline 13.51, period 365, peak day 225 (13 August); mean absolute error 2.49 degrees; spring overestimate (1 June 17.60 against 13.45); winter floor near 1 degree. Rates around 1 June: 0.22, 0.405 and -0.30 degrees per day for 15, 5 and 1 day half-widths; model derivative about 0.217. Labelled as ours. Lesson family: sinusoidal modelling and rates of change.',
    requiredMentions: [
      'raw river water at the Britannia water purification plant',
      'approximately 427 m out from the plant',
      '12 reinforced fibreglass bells',
      '364 ML/day',
      '26.75 on 13 August',
      '0.27 on 17 January',
      'T(d) = 13.24 cos',
      '2.49 degrees on average',
      'no row for 29 February',
      'The coldest day is 208 days before the warmest'
    ],
    sources: [
      { claim: 'City of Ottawa: Ottawa River Temperature 2025 item (measurement method, intake details, annual update).', url: 'https://www.arcgis.com/home/item.html?id=4b659d7c349d4bf6afccbd658773b6ea' },
      { claim: 'City of Ottawa: Open Data Licence Version 2.0 (commercial use, attribution statement, non-endorsement).', url: 'https://ottawa.ca/en/city-hall/get-know-your-city/open-data#open-data-licence-version-2-0' },
      { claim: 'Open Ottawa: the City of Ottawa open data portal.', url: 'https://open.ottawa.ca/' },
      { claim: 'Ontario curriculum content API: senior math course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 assessment windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: Pascal, Cayley and Fermat contests (Grade 11 Fermat, format, 2027 dates).', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'CEMC: Fryer, Galois and Hypatia contests (format, 2027 date).', url: 'https://cemc.uwaterloo.ca/contests/fgh' },
      { claim: 'Canadian Mathematical Society: COMC 2026 (date, registration, path to the CMO).', url: 'https://cms.math.ca/competitions/comc/' }
    ],
    rejectedClaims: [
      'Any Ottawa population figure: StatCan was not reachable live.',
      'A warming trend in the river: not claimed; our July-mean line over 21 years has r of only 0.34, too weak to print as a trend.',
      'Why the spring warms slowly (ice, snowmelt, flow): not sourced, so the page describes the shape only.',
      'Official-language or French-language school claims for Ottawa: not made; the page says only that Ottawa public schools follow the Ontario curriculum.',
      'The item\'s named contact person: not reproduced.',
      'Water quality or treatment claims: none made; temperature only.',
      'Other tutors\' rates in Ottawa: not sourced, so not printed.',
      'Any fee figure or currency in the copy, and CMS or CEMC fees: omitted (currency-neutral page).',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Any affiliation with the City of Ottawa, the Ontario Ministry of Education, EQAO, CEMC, the University of Waterloo or the Canadian Mathematical Society.'
    ]
  }
};
