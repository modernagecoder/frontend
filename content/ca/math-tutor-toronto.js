'use strict';
// Math tutor, Toronto (cg- city page, Canada cluster Wave 2, row 159). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: a Toronto student's math year by year routed to the live Ontario spokes, then one statistics lesson (mean
// against median on skewed data, MDM4U one-variable statistics) built on the City of Toronto ferry ticket file, a
// Pascal, Cayley and Fermat contest slice, and what a Toronto family is actually comparing when it asks about price.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md,
// each with its saved raw file in ca/src/; geography from ca/facts-geo.md; ferry file, CKAN record and licence saved in
// ca/src-pilots/math-tutor-toronto/):
//  - Ontario DCP API course records: MCR3U "Functions" (Grade 11 U, prerequisite "Principles of Mathematics, Grade 10,
//    Academic"); MHF4U "Advanced Functions"; MCV4U "Calculus and Vectors", MHF4U "must be taken prior to or concurrently
//    with" MCV4U; MDM4U "Mathematics of Data Management"; MCF3M "Functions and Applications"; MTH1W (2021, de-streamed).
//  - EQAO: Grade 3 and Grade 6 "May 4 - June 8, 2027" (en dash in source); Grade 9 math "January 12 - February 5, 2027";
//    Grade 9 results "to be included as part of a student's final course mark".
//  - CEMC: Pascal Grade 9, Cayley Grade 10, Fermat Grade 11; PCF "Tuesday, February 23, 2027 and Wednesday, February 24,
//    2027"; "25 multiple-choice questions", "Time allowed for completion is 60 minutes."; "all students must participate
//    through their school"; "Our contests are not tests or exams. There is no passing or failing score."; past contests
//    "from the last 10 years", no registration or fee.
//  - facts-geo.md: Toronto city area codes 416/437/647/942; Ontario UTC-5 from 1 November 2026, UTC-4 from 14 March 2027.
//  - City of Toronto Open Data, "Toronto Island Ferry Ticket Counts" (CKAN package_show saved): "The counts are provided
//    in 15 minute intervals and are updated hourly"; ferries "operate year-round out of Jack Layton Ferry Terminal";
//    owner division Fleet Services; CSV downloaded with curl on 22 October 2026, 284,387 data rows, first timestamp
//    2015-05-01, sha256 8450ff34...83d2. Licence page open.toronto.ca/open-data-licence/ ("including for commercial
//    purposes"; attribution statement "Contains information licensed under the Open Government Licence - Toronto", en
//    dash in the source rendered as a hyphen here; non-endorsement clause).
// Our own calculations (ca/src-pilots/math-tutor-toronto/ferry_2025.py, page_snippet.py, ferry_check.py, run with python -I):
// 2025 has 26,240 rows on 364 dates (no row dated 26 January 2025); daily redemptions summed from the 15-minute rows:
// mean 4,191.9, median 1,690, quartiles 712.25 and 5,885.5; 121 of 364 days above the mean; 139 days under 1,000 and 47
// over 10,000; busiest day Saturday 12 July 2025 with 24,341; monthly means and medians in the table; July 2025 weekday
// mean 9,881.9 (23 days) and weekend mean 17,252.5 (8 days); busiest-day hours 10:00 to 13:59 hold 11,314 of 24,341
// redemptions (46.5%). Sales are never added to redemptions; no total of the file is printed.
// Lesson family: summary statistics on a skewed distribution (mean, median, quartiles) and the effect of a season.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import statistics',
  'from collections import defaultdict',
  '',
  'day_total = defaultdict(int)',
  'with open("toronto-island-ferry-ticket-counts.csv", encoding="utf-8") as file:',
  '    next(file)  # the first line holds the column names',
  '    for line in file:',
  '        _id, stamp, redeemed, sold = line.strip().split(",")',
  '        if stamp.startswith("2025-"):',
  '            day_total[stamp[:10]] += int(redeemed)',
  '',
  'values = sorted(day_total.values())',
  'print("days:", len(values))',
  'print("mean:", round(statistics.mean(values), 1))',
  'print("median:", statistics.median(values))',
  'print("busiest:", max(day_total, key=day_total.get), values[-1])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'TORONTO MATH', label: 'Math tutor in Toronto', blurb: 'Math help for Toronto students from Grade 1 to MCV4U, with the Ontario course codes routed in order, a ferry ticket statistics lesson and the Pascal, Cayley and Fermat contests.' },
  market: CA,
  slug: 'math-tutor-toronto',
  code: 'mtt',
  accent: '#201870',
  accentRationale: 'Toronto math: a deep lake-ink indigo, #201870, allocated for this row; the nearest other Canada accent is #2E1975, 14.9 RGB units away (Euclidean); contrast 13.89 on the paper #FBF8F2 (13.06 and 11.95 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Toronto',
    eyebrow: 'Math tutor, Toronto, Ontario',
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
  routeLabel: 'Math tutor in Toronto',
  title: 'Math Tutor Toronto | Live Online, Grade 1 to Calculus',
  description: 'A live online math tutor for Toronto students, Grade 1 to MCV4U: the Ontario courses in order, a ferry data statistics lesson and the Waterloo contest dates.',
  ogDescription: 'Toronto Island ferry counts have a mean more than double their median. A Toronto math tutor page that teaches why, course by course through Ontario math.',
  twitterDescription: 'Math tutoring for Toronto students, live online, from early number sense to Calculus and Vectors.',
  ogImageCourse: 'ontario-grade-12-university-math-mhf4u-mcv4u-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Toronto Students',
    description: 'Level-matched live online math for Toronto students from Grade 1 to Grade 12: number sense, MTH1W algebra, MCR3U functions, MHF4U, MCV4U and MDM4U support, and Waterloo contest preparation.'
  },

  h1: 'Math tutor in Toronto, live and online',
  capsuleQ: 'Where can a Toronto student get a real math tutor?',
  capsule: 'Modern Age Coders gives Toronto students live online math tutoring from Grade 1 to Grade 12, one to one or in a class of fifteen to twenty at one level. Teens usually join Ontario Grade 12 University Math (MHF4U and MCV4U) or Waterloo Math Contests: Gauss to Euclid; younger children join a maths course for their age. The first class is free.',
  lead: 'A drop in a math mark usually has a cause older than the test that revealed it. A Grade 11 student stuck on transformations is often missing a Grade 9 idea about slope; a Grade 4 child who freezes on word problems may simply never have been asked to explain a step aloud. This page walks through Ontario math the way a Toronto student meets it, sends you to our detailed page for each course code, and then does something a tutoring advert rarely does: it teaches a full lesson. We take a City of Toronto file of ferry ticket counts and use it to show why the average of a lopsided set of numbers can mislead, which is the heart of Grade 12 data management and a skill every adult needs.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Toronto.',

  picks: {
    eyebrow: 'Math course picks for Toronto',
    h2: 'Four math courses Toronto families start with',
    intro: 'Chosen by grade band, then confirmed in a free lesson where the teacher sees how the student actually reasons.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Number sense, fractions and patterns taught by asking the child to explain each step, the habit the Grade 3 and Grade 6 assessments reward.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Ratios, integers, equations and early geometry, so a Toronto student walks into de-streamed Grade 9 math with algebra already familiar.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Advanced Functions and Calculus and Vectors taught alongside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Problem solving for the CEMC contests, from Gauss to Euclid, using original problems and the free CEMC archive.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: '', eyebrow: 'Ontario math in Toronto',
      h2: 'Which Ontario math course a Toronto student is in, and where we explain it',
      intro: 'Every Toronto public school teaches the Ontario curriculum, so the course codes are the same from Etobicoke to Scarborough. Each row sends you to a page that goes deep on one stage; this page stays with the Toronto picture.',
      body: [
        { kind: 'table', caption: 'Ontario math by grade band, with our detailed page for each stage. Course titles from the Ontario curriculum service; EQAO windows as EQAO lists them for 2026 to 2027', head: ['Grade band', 'What the student is taking', 'Read more'], rows: [
          ['Grades 1 to 3', 'Elementary math, then the EQAO Primary assessment, listed for 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3 practice</a>'],
          ['Grades 4 to 6', 'Fractions, ratios, coding inside the Algebra strand, and the Junior assessment in the same 2027 window', '<a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6 practice</a>, <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Grade 6 math and coding</a>'],
          ['Grade 9', 'MTH1W, the de-streamed course issued in 2021, with the EQAO assessment from 12 January to 5 February 2027', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 11', 'MCR3U Functions, which needs Grade 10 academic math first, or MCF3M Functions and Applications', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12', 'MHF4U Advanced Functions, MCV4U Calculus and Vectors, MDM4U Mathematics of Data Management', '<a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>, <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>, <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>']
        ] },
        { kind: 'p', text: 'Two rules in the course records shape a Toronto timetable more than any tutor can. MCR3U lists the Grade 10 academic course as its prerequisite, and the ministry says MHF4U must be taken before or at the same time as MCV4U. A student who wants calculus in Grade 12 therefore needs functions secured in Grade 11, and a weak Grade 11 term shows up again a year later. That is why our first question to a Toronto family is about the course before the one the student is in now.' },
        { kind: 'p', text: 'MDM4U, the data management course, is easy to overlook, and it is the one this page leans on most. It is where students meet distributions, measures of centre and spread, and the habit of asking where a number came from. The ferry lesson below is a taste of that course, taught at a level a strong Grade 9 student can follow.' },
        { kind: 'callout', h3: 'Our part and the school\'s part', p: 'We teach alongside a student\'s school math course and we do not grant Ontario credits. Marks and credits for MCR3U, MHF4U, MCV4U, MDM4U and every other course come from the school. We are not connected with the Ontario Ministry of Education, EQAO or any Toronto school board.' }
      ]
    },
    {
      id: 'ferry', tint: 'deep', eyebrow: 'Toronto data lesson',
      h2: 'Why the average day on the Toronto Island ferry is not a typical day',
      intro: 'The City of Toronto publishes ticket counts for the Island ferries as open data. We took every 2025 row, added up each day ourselves, and found a mean far above the median. The figures are our calculations from the City\'s file, not numbers the City publishes.',
      body: [
        { kind: 'p', text: 'The dataset is called Toronto Island Ferry Ticket Counts, kept by the City\'s Fleet Services division. Its description says the counts are provided in 15 minute intervals and are updated hourly, and that the ferries operate year-round out of Jack Layton Ferry Terminal. Our download on 22 October 2026 held 284,387 rows, starting on 1 May 2015, each with a timestamp, a redemption count and a sales count. We used only redemptions, which are tickets used to board, and only calendar year 2025.' },
        { kind: 'table', caption: 'Daily ferry ticket redemptions in 2025, by month: our sums of the City of Toronto 15-minute rows, downloaded 22 October 2026', head: ['Month of 2025', 'Days with data', 'Mean per day', 'Median per day', 'Highest day'], rows: [
          ['January', '30', '571.0', '586.5', '829'],
          ['March', '31', '877.6', '838', '1,518'],
          ['May', '31', '3,769.5', '3,180', '12,436'],
          ['June', '30', '7,992.2', '5,947.5', '18,242'],
          ['July', '31', '11,784.0', '10,124', '24,341'],
          ['August', '31', '12,283.3', '12,020', '21,160'],
          ['September', '30', '5,555.7', '4,384.5', '19,598'],
          ['November', '30', '983.2', '874', '2,288'],
          ['All of 2025', '364', '4,191.9', '1,690', '24,341']
        ] },
        { kind: 'p', text: 'Look at the bottom row. The mean day in 2025 saw 4,191.9 redemptions, yet the median day saw only 1,690. Only 121 of the 364 days were above the mean at all, while 139 days had fewer than 1,000 redemptions. A short run of enormous summer days, 47 of them above 10,000, drags the mean upward. The median ignores how large those days were and simply finds the middle of the sorted list, so it describes an ordinary Toronto day far better.' },
        { kind: 'p', text: 'The short program below reproduces our yearly figures. It reads the file line by line, keeps 2025, adds the 15-minute counts into one total per date, and prints the count of days, the mean, the median and the busiest date. It needs only Python 3 and the CSV in the same folder:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Quartiles tell the shape', p: 'Our lower quartile was 712.25 and our upper quartile 5,885.5. The gap from the median up to the upper quartile is more than four times the gap down to the lower quartile, the numerical signature of a right-skewed distribution.' },
          { h3: 'Weekends in summer', p: 'In July 2025 the 23 weekdays averaged 9,881.9 redemptions and the 8 weekend days averaged 17,252.5. A student who reports one July average for the whole month has blended two different populations into one number.' },
          { h3: 'A gap in the record', p: 'The file has rows for 364 dates in 2025, not 365: nothing is dated 26 January. Before computing anything, a careful student decides whether that day was quiet, closed or simply missing, and says which assumption the answer depends on.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains information licensed under the Open Government Licence - Toronto. The file is used under that licence (<a class="cg-inline-link" href="https://open.toronto.ca/open-data-licence/">licence</a>, <a class="cg-inline-link" href="https://open.toronto.ca/dataset/toronto-island-ferry-ticket-counts/">dataset page</a>); every sum, mean and median on this page is ours. The City of Toronto does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'One busy Saturday, worked through as a Grade 12 data question',
      intro: 'This is the kind of question we set a Toronto student after the ferry lesson. The data come from our sums for Saturday 12 July 2025, the busiest day in the 2025 file; the question and the solution are ours.',
      body: [
        { kind: 'table', caption: 'Ferry redemptions by hour on Saturday 12 July 2025, our sums of the City of Toronto 15-minute rows (selected hours)', head: ['Hour starting', 'Redemptions'], rows: [
          ['9:00', '1,142'], ['10:00', '2,030'], ['11:00', '2,657'], ['12:00', '3,158'], ['13:00', '3,469'], ['14:00', '2,299'], ['15:00', '2,837'], ['16:00', '2,196'], ['Whole day', '24,341']
        ] },
        { kind: 'p', text: '<strong>Question.</strong> What share of the day\'s redemptions fell between 10:00 and 13:59? Is it fair to say that the ferry was busiest at lunchtime?' },
        { kind: 'p', text: '<strong>Step 1, add the four hours.</strong> 2,030 + 2,657 + 3,158 + 3,469 = 11,314 redemptions. These are four of our own hourly sums, so adding them is legitimate; we are not adding someone else\'s rounded figures to manufacture a total.' },
        { kind: 'p', text: '<strong>Step 2, divide by the day.</strong> 11,314 divided by 24,341 is about 0.465, so roughly 46.5 percent of the day\'s boarding happened in four of the twenty-four hours.' },
        { kind: 'p', text: '<strong>Step 3, test the claim.</strong> The single busiest hour began at 13:00, not at noon, and the 15:00 hour was busier than the 14:00 hour, so the pattern is not a smooth peak. A student who writes &ldquo;busiest around midday, with a second rise mid-afternoon&rdquo; has read the table; one who writes &ldquo;busiest at lunch&rdquo; has guessed. In MDM4U terms, the conclusion has to match the evidence, not the expectation.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Using the table, find the mean redemptions per hour from 9:00 to 16:59 and compare it with the median of those eight hours. Which is larger, and why is the difference small here when it was huge across the whole year?' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Waterloo contests for Toronto students',
      h2: 'Pascal, Cayley and Fermat: the February contests for Grades 9 to 11',
      intro: 'The Centre for Education in Mathematics and Computing at the University of Waterloo runs a contest for each grade. For a Toronto high school student the first of the 2027 math contests is the Pascal, Cayley and Fermat sitting.',
      body: [
        { kind: 'table', caption: 'The CEMC February contests for 2026 to 2027, as CEMC lists them (read 22 October 2026)', head: ['Contest', 'Who CEMC says may write it', 'Format', 'CEMC date'], rows: [
          ['Pascal', 'Students in Grade 9', '25 multiple-choice questions in 60 minutes', '23 or 24 February 2027'],
          ['Cayley', 'Students in Grade 10', '25 multiple-choice questions in 60 minutes', '23 or 24 February 2027'],
          ['Fermat', 'Students in Grade 11', '25 multiple-choice questions in 60 minutes', '23 or 24 February 2027']
        ] },
        { kind: 'p', text: 'Twenty-five questions in an hour leaves under two and a half minutes each, and the later questions are written so that a direct calculation is too slow. What these contests reward is choosing a method before computing, which is the same judgement the ferry question asks for. CEMC puts it plainly on its contest pages: the contests are not tests or exams, and there is no passing or failing score.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry is through a school', p: 'No Toronto student can enter alone: CEMC takes entries only from schools. Where a student&rsquo;s own school is not taking part, CEMC&rsquo;s advice is to find another local school willing to let the student join.' },
          { h3: 'Practise on the real archive', p: 'CEMC keeps the last ten years of past contests free, with no registration. Real past papers come from <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s own archive</a>; our lessons use problems of our own.' },
          { h3: 'More on each contest', p: 'Our pages on the <a class="cg-inline-link" href="/pascal-contest-preparation">Pascal</a>, <a class="cg-inline-link" href="/cayley-contest-preparation">Cayley</a> and <a class="cg-inline-link" href="/fermat-contest-preparation">Fermat</a> go deeper, and the full ladder from Gauss to Euclid sits on <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">our Waterloo contests page</a>.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo. We never reproduce their past problems or solutions; our contest classes use original problems, labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Toronto',
      h2: 'What a Toronto family is really comparing when it asks about price',
      intro: 'Our fees are printed in the fees section of this page, in the currency that matches where you are, so no figure appears in this text. What matters more is what the fee buys.',
      body: [
        { kind: 'table', caption: 'Three ways a Toronto student gets math help. Our description of each format; we do not quote other tutors\' rates', head: ['', 'Our live online class', 'Our 1-on-1 online', 'A private tutor at home'], rows: [
          ['Who is in the room', 'Fifteen to twenty students at one level, one teacher', 'One student, one teacher', 'One student, one tutor'],
          ['Travel', 'None; join from a laptop at home', 'None', 'The tutor travels across the city, which takes time someone pays for'],
          ['Pace', 'Set for the level, with questions answered live', 'Set entirely by the student', 'Set by the student'],
          ['How it is charged', 'A monthly fee for eight live classes', 'A monthly fee, at times you choose', 'Usually by the hour, at the tutor\'s own rate'],
          ['Good for', 'Steady progress through a course and contest practice', 'A specific gap, MCV4U, or exam weeks', 'Families who want someone physically at the table']
        ] },
        { kind: 'p', text: 'Neither format is right for everyone. A live class of fifteen to twenty works when a student is roughly on track and wants structure, practice and other students\' questions to learn from. One-to-one is worth it when there is a specific hole, say logarithms in MHF4U, or when the student is far ahead. An in-home tutor solves a different problem, the wish for someone at the kitchen table, and families should weigh the travel built into that arrangement.' },
        { kind: 'p', text: 'Whatever you choose, ask any tutor in Toronto the same three questions: which Ontario course code they are teaching to, how they check that the student understands rather than copies, and what happens in a week when the school test is on a topic they have not reached yet.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting in Grade 1 to Calculus and Vectors',
    intro: 'Treat the grades as rough markers. Where a student actually starts is decided in the free lesson, from the work they can explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Number sense', p: 'Counting, place value and early patterns, with the child saying each step out loud.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Fractions to equations', p: 'Fractions, ratio, integers and first equations, plus Gauss problems for children who enjoy a puzzle.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 9 and 10', h3: 'Algebra that holds', p: 'MTH1W linear relations, then the Grade 10 academic algebra MCR3U depends on.', courses: ['complete-high-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 11 and 12', h3: 'Functions and calculus', p: 'MCR3U, MHF4U, MCV4U and data management, taught beside the school course.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Why a Toronto teen still needs to do the math when AI can',
    intro: 'Because the answer an AI gives is only as good as the question, and only a person who understands the math knows whether the question was right.',
    p1: 'Give a chatbot the ferry file and ask for the average day, and it will happily report the mean. It will not stop to ask whether the mean is the right summary for a set of numbers that is mostly quiet winter days with a few huge summer ones. That decision is the mathematics, and it belongs to the student.',
    p2: 'Our teachers ask students to predict before they calculate, show the step that matters, and explain the result in a sentence. Older students may check work with tools, but marked school work stays the student\'s own, and the thinking is never handed over.',
    closer: 'Ontario math asks students to reason, model and communicate; those are exactly the parts a tool cannot do for them.',
    blogAnchor: 'our essay on why thinking skills outlast any tool'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math works for a Toronto student',
    intro: 'Lessons happen on a computer at home, so a student in North York and one in the Beaches can share a teacher without a commute.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time, both seasons', p: 'Toronto is on UTC-4 until 1 November 2026, then UTC-5 until 14 March 2027. Each invitation states the class in Toronto time, and we confirm again in the week of each change.' },
      { h3: 'A whiteboard you can see', p: 'Teachers write the working on a shared screen and students write back, so the step where an error starts is visible, not hidden in a final answer.' },
      { h3: 'Course codes, not ages', p: 'Teachers plan from the Ontario course the student is taking, so a Grade 11 lesson follows MCR3U or MCF3M, not a generic syllabus.' },
      { h3: 'Toronto numbers', p: 'The form takes a Toronto mobile on 647, 416, 437 or 942. Enter all ten digits and leave the country code to us.' },
      { h3: 'Start free', p: 'The first lesson is a real lesson. It closes with a recommended course and level, and no payment card is needed.' }
    ],
    spec: { title: 'No Toronto centre', p: 'Modern Age Coders has no tutoring centre in Toronto and claims none. Every lesson is live and online, taught from India, and a student needs a computer with a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Toronto families',
    intro: 'Three lines, each shown in your own currency.',
    first: 'One complete live lesson at no charge, ending with a recommended course, level and class time.',
    group: 'The monthly fee for a live class of fifteen to twenty students working at the same stage.',
    private: 'The monthly fee for one teacher and one student, booked at times that suit you.',
    closer: 'A Toronto student pays exactly what a student anywhere else in Canada pays. No payment is taken before the free lesson, and the pricing page explains missed classes and holidays.'
  },

  reviewsH2: 'What families and students say about us on Google',

  book: {
    h2: 'Book a free math lesson for your Toronto student',
    intro: 'Tell us the grade and the course code if there is one. A Grade 2 child starts with a counting game; a Grade 12 student might start with a limit, or with the ferry file.',
    success: 'Thank you. The team will be in touch soon about a math class for Toronto.'
  },

  faq: {
    h2: 'Questions Toronto families ask about math tutoring',
    intro: 'Short answers to what Toronto parents and students ask us most often.',
    items: [
      { q: 'Do you offer a math tutor in Toronto?', a: 'We do, online rather than in person. There is no Toronto office; a student logs in from home and is taught live by a teacher, either in a class of fifteen to twenty or alone.' },
      { q: 'What does a math tutor in Toronto cost with you?', a: 'The fees section of this page shows the free first lesson, the monthly fee for a live class and the monthly fee for one-to-one, each in your own currency. No payment is taken before that free lesson.' },
      { q: 'How is a live online class different from a private home tutor?', a: 'A home tutor travels to you and usually charges by the hour. Our live class puts fifteen to twenty students at one level with one teacher, online, for a monthly fee, and our one-to-one option gives a student a teacher alone without anyone travelling.' },
      { q: 'Can you help with MHF4U and MCV4U?', a: 'Yes. Our Ontario Grade 12 University Math course runs alongside both. We do not grant Ontario credits; the credit and the mark come from the student\'s school.' },
      { q: 'Do you tutor MDM4U data management?', a: 'Yes. Data management is taught one to one or inside our statistics course, and the ferry lesson on this page is an example of how we teach it.' },
      { q: 'My child is in Grade 9. Where should we start?', a: 'With MTH1W, the de-streamed Grade 9 course. The free lesson checks linear relations and algebra first, because those carry into Grade 10 and MCR3U.' },
      { q: 'Do you prepare students for the EQAO assessments?', a: 'We teach the math the assessments draw on rather than drilling a format. EQAO lists the Grade 9 window as 12 January to 5 February 2027 and the Grade 3 and 6 window as 4 May to 8 June 2027.' },
      { q: 'Can my teen prepare for the Pascal, Cayley or Fermat contest?', a: 'Yes. CEMC lists those contests for 23 and 24 February 2027. Entry is arranged by the student\'s school; our part is the practice, using problems we write.' },
      { q: 'What time are classes for Toronto students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Toronto time.' },
      { q: 'Do you teach math for students in the rest of the GTA?', a: 'Yes. Because lessons are online, a student in Oakville or Markham sits in the same class as one downtown, and the clock is the same Eastern time everywhere in the GTA.' }
    ]
  },

  next: {
    eyebrow: 'More for Toronto and Canada',
    h2: 'Other math pages for Toronto students',
    html: 'For the whole country, start from <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>. Course by course, see <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>, <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a> and <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>. For coding in the city, read <a class="cg-inline-link" href="/coding-and-ai-classes-in-toronto">coding and AI classes in Toronto</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Toronto math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Coding in Toronto' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtt .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-mtt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mtt .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-mtt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtt .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-mtt #ferry code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.82rem; line-height: 1.6; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtt #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtt .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MCR3U, MCF3M, MHF4U, MCV4U, MDM4U and MTH1W course records (MCR3U prerequisite Grade 10 academic; MHF4U before or with MCV4U); EQAO 2026-27 windows (Grades 3 and 6 4 May to 8 June 2027; Grade 9 12 January to 5 February 2027, counting in the course mark). CEMC Pascal, Cayley and Fermat 2027 dates, format and eligibility, the through-a-school rule and the free archive. Toronto area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'City of Toronto Open Data, Toronto Island Ferry Ticket Counts (Open Government Licence - Toronto), CSV downloaded with curl on 22 October 2026 (284,387 rows from 1 May 2015). Our 2025 daily sums of redemptions: 364 dates, mean 4,191.9, median 1,690, quartiles 712.25 and 5,885.5, 121 days above the mean, busiest Saturday 12 July 2025 with 24,341; July weekday mean 9,881.9 against weekend 17,252.5. Labelled as ours. Lesson family: mean against median on a skewed distribution.',
    requiredMentions: [
      'Jack Layton Ferry Terminal',
      '4,191.9',
      'median day saw only 1,690',
      '12 July 2025',
      'Fleet Services',
      '5,885.5',
      '17,252.5',
      'Toronto Island Ferry Ticket Counts',
      'nothing is dated 26 January',
      '11,314 redemptions'
    ],
    sources: [
      { claim: 'City of Toronto Open Data: Toronto Island Ferry Ticket Counts (15-minute counts, updated hourly, Fleet Services).', url: 'https://open.toronto.ca/dataset/toronto-island-ferry-ticket-counts/' },
      { claim: 'City of Toronto: Open Government Licence - Toronto (commercial use, attribution statement, non-endorsement).', url: 'https://open.toronto.ca/open-data-licence/' },
      { claim: 'Ontario curriculum content API: senior math course records and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'EQAO: 2026-27 assessment windows and the Grade 9 course-mark rule.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: Pascal, Cayley and Fermat contests (eligibility, format, 2027 dates).', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'CEMC: how contests work (through a school, another local school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CEMC: past contests from the last 10 years, free.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Toronto population figure: StatCan was not reachable live.',
      'Ferry passenger totals for 2025 or any year: not printed; redemptions are tickets used, and we do not add sales and redemptions together.',
      'Ferry capacity, crossing times or fares: not in the file and not quoted.',
      'Other tutors\' hourly rates in Toronto: not sourced, so not printed; the comparison describes formats only.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our classes earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'CEMC contest fees: left out on purpose (currency-neutral page).',
      'Names of Toronto schools, school boards or private people: not used (the CKAN record\'s contact address is not reproduced).',
      'Any affiliation with the City of Toronto, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
