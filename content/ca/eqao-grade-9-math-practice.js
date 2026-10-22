'use strict';
// EQAO Grade 9 math practice (ag- assessment door; Canada cluster Plan 2, row 13).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/eqao-grade-9-math-practice/; the
// research copy ca/src/ontario/eqao-grade9-math.html was saved before eqao.com began returning a Cloudflare 403 the same day;
// later requests were not retried; facts-schools-contests.md rows 54, 56 to 58):
//  - eqao.com/the-assessments/grade-9-math/: "The Grade 9 Assessment of Mathematics tests the mathematics knowledge and skills
//    students are expected to have learned by the end of the Grade 9 mathematics course."; "Note: The last two days of the
//    administration window should be reserved for students who missed the originally scheduled dates or for extenuating
//    circumstances."; FAQ "two sessions (Session A and Session B), totalling 54 questions (50 questions that are used to determine a
//    student’s outcome and four field-test questions)"; "Each session has two stages and is designed to be completed in approximately
//    60 minutes."; "multi-stage computer adaptive testing model"; strands "Number, Algebra, Data, Geometry and Measurement, and
//    Financial Literacy."; "Although the assessment does not measure the content in the Mathematical Thinking and Making Connections
//    strand, students will be required to apply the mathematical processes while completing the assessment."; "A built-in calculator
//    is also provided."; "Students are also allowed to use their own calculator (scientific or graphing) and a pencil and paper for
//    rough work during the assessment."; question types "single-selection, multiple-selection, drag and drop, and drop-down menu
//    questions"; formula sheet "Formulas are given for the area of various geometric shapes."; sample test "one session with two
//    stages, and a total of 27 questions"; released questions 2023, 2024, 2025 and "The 2025 released questions resource includes
//    provincial data for each question."; "Results of this assessment are to be included as part of a student’s final course mark";
//    "does not require additional preparation"; "achievement level 1 to 4"; "Individual completed assessments and student responses
//    cannot be released to the public since questions are kept for use in future assessments."; "Students will receive their report
//    from their teacher to bring home."; parent session "EQAO Math Session for Parents/Guardians of Grade 9 Students", "Thursday,
//    November 26, 2026"; links to the sample test (dwod99k06nyqh.cloudfront.net ... g9-sample/340/adaptive), the formula sheet
//    (/g9-formula-sheet/), released questions (/math-resource-released-questions-g9-25/).
//  - eqao.com/the-assessments/: Grade 9 next administration "January 12 – February 5, 2027" (written "January 12 to February 5, 2027").
//  - cemc.uwaterloo.ca: "Students in Grade 9 are eligible to write the Pascal Contest." (pcf); PCF "North and South America: Tuesday,
//    February 23, 2027 and Wednesday, February 24, 2027" (contests); "25 multiple-choice questions."; "Time allowed for completion is
//    60 minutes."
//  - Time: facts-geo.md section 3 (tzdb 2026e): Eastern UTC-4 until 1 November 2026, UTC-5 to 14 March 2027; India UTC+5:30.
// Our own material, labelled on the page: the fifteen practice questions ("our practice, not EQAO questions") with worked answers
// (all arithmetic checked in Python 3), the four-week plan, the clock table arithmetic, the stages.
// Lesson family: show the model (write the relation or formula first, then the number).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const G9 = '<a class="ag-inline-link" href="https://www.eqao.com/the-assessments/grade-9-math/" rel="noopener" target="_blank">EQAO&rsquo;s Grade 9 Assessment of Mathematics page</a>';
const SAMPLE = '<a class="ag-inline-link" href="https://dwod99k06nyqh.cloudfront.net/#/en/test-auth/g9-sample/340/adaptive" rel="noopener" target="_blank">EQAO Grade 9 sample test</a>';
const FORMULA = '<a class="ag-inline-link" href="https://www.eqao.com/g9-formula-sheet/" rel="noopener" target="_blank">EQAO Grade 9 formula sheet</a>';
const RELEASED = '<a class="ag-inline-link" href="https://www.eqao.com/math-resource-released-questions-g9-25/" rel="noopener" target="_blank">2025 released questions</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'EQAO GRADE 9', blurb: 'The EQAO Grade 9 math assessment from EQAO&rsquo;s own page: format, tools, formula sheet, sample test and released questions, plus fifteen practice questions of our own.' },
  slug: 'eqao-grade-9-math-practice',
  code: 'eqao',
  accent: '#991747',
  accentRationale: 'EQAO Grade 9 math practice: a deep cranberry, #991747, allocated by the Canada Plan 2 grid; 7.3 RGB units from the nearest site accent (#991E45) and at least 14 from every other Canada accent; contrast 7.71 on the paper #FBF8F2 and 6.64 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'EQAO Grade 9 math practice',
  title: 'EQAO Grade 9 Math Practice: Format, Formula Sheet, 15 Questions',
  description: 'EQAO Grade 9 math explained from the official EQAO page: the 2027 window, 54 questions, tools, formula sheet, released questions, and 15 practice questions of ours.',
  ogDescription: 'Everything EQAO says about its Grade 9 math assessment, from the two adaptive sessions to the formula sheet and released questions, plus fifteen original practice questions with worked answers.',
  twitterDescription: 'EQAO Grade 9 math: the format, the formula sheet, the 2027 window and fifteen practice questions of our own.',
  pageName: 'EQAO Grade 9 Math Practice',
  webPageDescription: 'A guide for Ontario Grade 9 students and parents to the EQAO Grade 9 Assessment of Mathematics, built from EQAO&rsquo;s own page, with how to use its sample test, formula sheet and released questions, and fifteen original practice questions with answers.',
  courseDescription: 'Live online Grade 9 math help for Ontario students taking MTH1W: algebra, linear relations, data, geometry and measurement, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'EQAO Grade 9 math practice',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#format', label: 'Format' },
    { href: '#tools', label: 'Tools and formula sheet' },
    { href: '#official', label: 'Sample and released' },
    { href: '#practice', label: 'Practice' },
    { href: '#mark', label: 'Course mark' }
  ],
  eyebrow: 'Ontario &middot; Grade 9 &middot; EQAO Assessment of Mathematics',
  h1: 'EQAO Grade 9 math practice and what to expect',
  lede: 'The EQAO Grade 9 math assessment is the first provincial assessment that counts toward a course mark, and that changes how students feel about it. The good news is that EQAO publishes more about this one than about any other: the number of questions, the session length, what tools are allowed, a sample test, a formula sheet and three years of released questions. This page gathers what EQAO says, then adds fifteen practice questions we wrote ourselves.',
  secondaryCta: { href: '#practice', label: 'Go to the practice questions' },
  wa: 'Hello Modern Age Coders, my teen is in Grade 9 in Ontario and wants help with MTH1W before the EQAO math assessment. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; MTH1W algebra and review',
  spec: [
    ['For', 'Ontario Grade 9, MTH1W'],
    ['Assessment', 'EQAO Grade 9 math'],
    ['Window', 'January 12 to February 5, 2027'],
    ['Practice', 'Fifteen questions, ours'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Eastern time, winter offset'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The EQAO Grade 9 Assessment of Mathematics is an online, adaptive test of the MTH1W course: two sessions, 54 questions, about 60 minutes each. EQAO lists the next window as January 12 to February 5, 2027, and results count in the final course mark. Modern Age Coders teaches Grade 9 math live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Courses that fit the Grade 9 year',
    lede: 'Algebra is where most Grade 9 marks are decided. The other two cover the wider course and the contest route that opens in Grade 9.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'EQAO / 01', title: 'Algebra Foundations', note: 'Linear equations, relations and graphs rebuilt from fractions and negatives up: the heaviest part of Grade 9.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'EQAO / 02', title: 'High School Math', note: 'Grade 9 to 12 in one path, with measurement, data and statistics alongside algebra.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'EQAO / 03', title: 'Competition Math', note: 'For Grade 9 students eyeing the Pascal contest: problem solving well beyond the course.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'From EQAO&rsquo;s own page',
      h2: 'The EQAO Grade 9 math format, in EQAO&rsquo;s words',
      lede: 'EQAO describes the purpose in one sentence: &ldquo;The Grade 9 Assessment of Mathematics tests the mathematics knowledge and skills students are expected to have learned by the end of the Grade 9 mathematics course.&rdquo; The table sets out the format exactly as EQAO gives it.',
      body: [
        { kind: 'table', caption: 'The Grade 9 Assessment of Mathematics, as described on EQAO&rsquo;s Grade 9 page and assessments page (saved 22 October 2026)', head: ['Feature', 'What EQAO says'], rows: [
          ['Next window', 'January 12 to February 5, 2027'],
          ['End of the window', '&ldquo;The last two days of the administration window should be reserved for students who missed the originally scheduled dates or for extenuating circumstances.&rdquo;'],
          ['Sessions', '&ldquo;two sessions (Session A and Session B), totalling 54 questions (50 questions that are used to determine a student&rsquo;s outcome and four field-test questions)&rdquo;'],
          ['Length', '&ldquo;Each session has two stages and is designed to be completed in approximately 60 minutes.&rdquo;'],
          ['Design', '&ldquo;The assessment uses a multi-stage computer adaptive testing model&rdquo;'],
          ['Strands assessed', '&ldquo;Number, Algebra, Data, Geometry and Measurement, and Financial Literacy.&rdquo;'],
          ['Not measured directly', 'The Mathematical Thinking and Making Connections strand, though &ldquo;students will be required to apply the mathematical processes while completing the assessment.&rdquo;'],
          ['Question types', '&ldquo;single-selection, multiple-selection, drag and drop, and drop-down menu questions&rdquo;'],
          ['Scoring', 'An outcome placed by Item Response Theory on a continuum shown as &ldquo;achievement level 1 to 4&rdquo;'],
          ['Afterwards', '&ldquo;Students will receive their report from their teacher to bring home.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What adaptive means for a student',
          left: [
            'In a multi-stage adaptive test, the second stage of each session depends on how the first stage went. EQAO says the model &ldquo;adapts to individual students&rsquo; performance as they progress through each assessment session.&rdquo; Two students can see different questions, and that is by design.',
            'The practical lesson is simple: give the first stage full care. Rushing early questions to bank time is a poor trade on an adaptive test, in our view.'
          ],
          rightH3: 'Why you will not see your teen&rsquo;s questions',
          right: [
            'EQAO explains: &ldquo;Individual completed assessments and student responses cannot be released to the public since questions are kept for use in future assessments.&rdquo; Feedback comes through the student&rsquo;s report and their teacher.',
            'That is also why the released questions and the sample test matter: they are the official window into what the assessment looks like.'
          ] },
        { kind: 'source', html: 'Taken from ' + G9 + ' (with its question-and-answer section) and <a class="ag-inline-link" href="https://www.eqao.com/the-assessments/" rel="noopener" target="_blank">EQAO, Assessments</a>, copied on 22 October 2026. EQAO updates these pages, so check them again near the window. We are independent of EQAO.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'Calculator, paper, formula sheet',
      h2: 'What students can use: calculators and the EQAO formula sheet',
      lede: 'Families often ask whether a calculator is allowed and what is on the formula sheet. EQAO answers both on its Grade 9 page.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Calculators', p: '&ldquo;A built-in calculator is also provided.&rdquo; And: &ldquo;Students are also allowed to use their own calculator (scientific or graphing) and a pencil and paper for rough work during the assessment.&rdquo; Practise on the calculator your teen will actually bring.' },
          { h3: 'The formula sheet', p: 'EQAO says &ldquo;Formulas are given for the area of various geometric shapes.&rdquo; The sheet is in the e-assessment platform. Open the ' + FORMULA + ' itself to see which shapes; we do not reproduce it here.' },
          { h3: 'Built-in tools', p: 'EQAO lists a line reader, zoom, &ldquo;a text-to-speech reader and a high-contrast mode&rdquo;, plus English to French and French to English glossaries meant for French Immersion students and open to everyone in the platform.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to practise with the formula sheet',
          left: [
            'Print the formula sheet or keep it open while doing practice. For each geometry question, find the formula on the sheet before calculating. That habit saves time on the day and stops a student trusting a half-remembered formula.',
            'Notice what EQAO describes the sheet as covering: area formulas for shapes. A student should not assume every formula from the course will be printed, and should check the sheet for anything else they rely on.'
          ],
          rightH3: 'The introductory session',
          right: [
            'EQAO says students take part in an introductory session with their teacher, where they &ldquo;will complete a sample test and tool exploration&rdquo;, trying tools such as the line-drawing tool, highlighter and eraser.',
            'A student who has never used drag and drop or a drop-down menu in a math question should try them before the real sessions. Familiarity with the platform is the one kind of preparation EQAO actively offers.'
          ] }
      ]
    },
    {
      id: 'official', tint: 'tint', eyebrow: 'Official practice',
      h2: 'How to use the EQAO sample test and released questions',
      lede: 'EQAO publishes three official resources. Use them in this order. Links go straight to EQAO; we never copy its questions.',
      body: [
        { kind: 'ol', items: [
          '<b>Take the sample test once, early.</b> EQAO says its sample test lets students try the tools and question types, and that it &ldquo;consists of one session with two stages, and a total of 27 questions.&rdquo; Open the ' + SAMPLE + ' about four weeks before the window, untimed, to learn the platform.',
          '<b>Read the released questions as a guide to thinking.</b> EQAO publishes released questions for 2023, 2024 and 2025. It says &ldquo;The 2025 released questions resource includes provincial data for each question.&rdquo; Start with the ' + RELEASED + ' and notice which expectation each question is mapped to.',
          '<b>Use the provincial data honestly.</b> If a question was answered correctly by few students across the province, it is a hard question, not a sign your teen is behind. Spend time on the ones your teen got wrong and could have got right.',
          '<b>Keep the formula sheet beside every geometry question.</b> Find the formula first, then calculate.',
          '<b>Fill gaps with course work and original practice.</b> Once official material has shown the style, review by strand using class notes and sets like ours below.',
          '<b>Sit one full practice under time.</b> About 60 minutes per session, with the calculator and rough paper your teen will use, a week or so before the school&rsquo;s dates.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What EQAO says about preparation',
          left: [
            'EQAO&rsquo;s view, stated on the same page, is that the assessment &ldquo;does not require additional preparation&rdquo;, because it follows the classroom curriculum. We agree with the spirit of that. The work that matters is learning MTH1W well.',
            'What official practice adds is calm. A student who has seen the platform, the question types and the formula sheet walks in without surprises.'
          ],
          rightH3: 'Hearing it from EQAO',
          right: [
            'EQAO runs a free webinar, the EQAO Math Session for Parents/Guardians of Grade 9 Students, where its staff discuss questions from the assessment. On 22 October 2026 EQAO listed the next one for Thursday, November 26, 2026, at 6:00 p.m. Eastern time.',
            'EQAO also publishes a framework document with an assessment blueprint, which EQAO says &ldquo;shows how many questions students complete from the different strands&rdquo;. It is the authoritative answer to which strands carry the most questions.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Our practice, not EQAO questions',
      h2: 'Fifteen Grade 9 math practice questions',
      lede: 'Our practice, not EQAO questions. Every item below is original, built around the five strands that EQAO names for this assessment. They are written as open questions so the working shows; on the assessment, questions take other forms. Answers follow.',
      body: [
        { kind: 'table', caption: 'Our fifteen practice questions by strand (ours)', head: ['Strand', 'Questions', 'Skills practised'], rows: [
          ['Number', '1 to 4', 'Scientific notation, laws of exponents, operations with negative fractions, scale and proportion'],
          ['Algebra', '5 to 9', 'Solving equations, lines from a point and slope, intersections, equations from tables, linear or not'],
          ['Data', '10 and 11', 'Quartiles and box plots, correlation and prediction'],
          ['Geometry and Measurement', '12 to 14', 'Right-triangle side lengths, cone and cylinder volume, changing a dimension'],
          ['Financial Literacy', '15', 'Depreciation as a repeated percent change']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Number.</b> Which is greater, 3.2 &times; 10<sup>5</sup> or 4.1 &times; 10<sup>4</sup>? Explain without writing either number out in full.',
          '<b>Number.</b> Simplify 2<sup>3</sup> &times; 2<sup>4</sup> &divide; 2<sup>5</sup> using exponent laws, then evaluate.',
          '<b>Number.</b> Calculate &minus;3/4 + 5/6.',
          '<b>Number.</b> On a map with scale 1 : 25 000, two points are 6.4 cm apart. How far apart are they in real life, in kilometres?',
          '<b>Algebra.</b> Solve 3(x &minus; 4) = 2x + 5 and verify.',
          '<b>Algebra.</b> A line has slope 2 and y-intercept &minus;3. Write its equation. Does the point (4, 5) lie on it?',
          '<b>Algebra.</b> Tank A holds 15 L and fills at 2 L per minute. Tank B holds 5 L and fills at 4 L per minute. When do they hold the same amount, and how much is that? What does the point of intersection mean here?',
          '<b>Algebra.</b> A table has x = 0, 1, 2, 3 and y = 7, 4, 1, &minus;2. Write the equation of the relation.',
          '<b>Algebra.</b> Which of these is linear: (a) y = 1, 3, 9, 27 or (b) y = 10, 7, 4, 1, for x = 0, 1, 2, 3? Explain using first differences.',
          '<b>Data.</b> For the data 12, 15, 15, 18, 20, 22, 25, 30, 31, find the median, the first and third quartiles and the interquartile range. Describe the box plot.',
          '<b>Data.</b> A scatter plot of hours practised (x) against errors made (y) slopes downward. Describe the correlation. Can you say practice causes fewer errors? Why or why not?',
          '<b>Geometry and measurement.</b> A 5 m ladder leans against a wall with its foot 1.4 m from the wall. How high up the wall does it reach?',
          '<b>Geometry and measurement.</b> A cylinder and a cone both have radius 3 cm and height 8 cm. Find each volume to one decimal place. How are they related?',
          '<b>Geometry and measurement.</b> If the radius of a cylinder doubles and the height stays the same, what happens to its volume?',
          '<b>Financial literacy.</b> A bicycle loses 15% of its value each year. After 2 years, what percent of its original value is it worth?'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'tint', eyebrow: 'Answers, ours',
      h2: 'Worked answers to the Grade 9 practice set',
      lede: 'Each answer writes the model first, then the numbers, which is the habit that carries furthest in Grade 9. All values were checked in Python.',
      body: [
        { kind: 'ol', items: [
          '<b>3.2 &times; 10<sup>5</sup>.</b> Its power of ten is one higher. Rewrite 4.1 &times; 10<sup>4</sup> as 0.41 &times; 10<sup>5</sup>; now both have the same power, and 3.2 is larger than 0.41.',
          '<b>2<sup>2</sup> = 4.</b> Multiplying powers with the same base adds exponents: 2<sup>3 + 4</sup> = 2<sup>7</sup>. Dividing subtracts: 2<sup>7 &minus; 5</sup> = 2<sup>2</sup> = 4.',
          '<b>1/12.</b> Common denominator 12: &minus;9/12 + 10/12 = 1/12. Positive, because 5/6 is a little more than 3/4.',
          '<b>1.6 km.</b> 6.4 cm &times; 25 000 = 160 000 cm. Divide by 100 for metres (1 600 m) and by 1 000 for kilometres: 1.6 km.',
          '<b>x = 17.</b> Expand: 3x &minus; 12 = 2x + 5. Subtract 2x: x &minus; 12 = 5. Add 12: x = 17. Check: 3(13) = 39 and 2(17) + 5 = 39.',
          '<b>y = 2x &minus; 3; yes.</b> Substitute x = 4: 2(4) &minus; 3 = 5, which matches y = 5, so the point is on the line.',
          '<b>After 5 minutes, at 25 L.</b> Tank A: y = 15 + 2x. Tank B: y = 5 + 4x. Set equal: 15 + 2x = 5 + 4x, so 10 = 2x and x = 5; y = 25. Before minute 5 Tank A holds more; after it, Tank B does. The intersection is the moment they swap.',
          '<b>y = &minus;3x + 7.</b> The initial value at x = 0 is 7, and y drops by 3 each step, so the rate of change is &minus;3.',
          '<b>(b) is linear.</b> Its first differences are &minus;3, &minus;3, &minus;3, all equal. For (a) they are 2, 6, 18, not equal: each term is 3 times the last, which is non-linear growth.',
          '<b>Median 20; Q1 15; Q3 27.5; IQR 12.5.</b> With nine values, the median is the 5th, 20. Using the halves either side of it, the lower half 12, 15, 15, 18 has median 15 and the upper half 22, 25, 30, 31 has median 27.5. The box runs from 15 to 27.5 with a line at 20; whiskers reach 12 and 31. Some classes use a slightly different quartile method, so follow your teacher&rsquo;s.',
          '<b>A negative correlation; no.</b> As hours rise, errors tend to fall. Correlation alone does not prove cause: students who practise more might differ in other ways too. A careful answer says the data are consistent with practice helping, not that they prove it.',
          '<b>4.8 m.</b> The ladder is the hypotenuse: h<sup>2</sup> + 1.4<sup>2</sup> = 5<sup>2</sup>, so h<sup>2</sup> = 25 &minus; 1.96 = 23.04 and h = 4.8.',
          '<b>About 226.2 cm&sup3; and 75.4 cm&sup3;.</b> Cylinder: &pi;r<sup>2</sup>h = &pi; &times; 9 &times; 8 = 72&pi;. Cone: one third of that, 24&pi;. The cone holds exactly one third of the cylinder with the same base and height.',
          '<b>It becomes 4 times as large.</b> Volume depends on r<sup>2</sup>. Doubling r multiplies r<sup>2</sup> by 2 &times; 2 = 4, and the height has not changed.',
          '<b>72.25%.</b> Each year the value is multiplied by 0.85. After 2 years: 0.85 &times; 0.85 = 0.7225, or 72.25%. Not 70%: the second 15% is taken from a smaller amount.'
        ] }
      ]
    },
    {
      id: 'mark', tint: 'deep', eyebrow: 'The course mark and the calendar',
      h2: 'How EQAO Grade 9 results count, and planning the weeks around them',
      lede: 'This is the part of Grade 9 EQAO that raises the stakes. EQAO&rsquo;s page says: &ldquo;Results of this assessment are to be included as part of a student&rsquo;s final course mark&rdquo;, under the ministry&rsquo;s Growing Success policy. EQAO does not give a percentage on that page, and schools explain how they apply it.',
      body: [
        { kind: 'table', caption: 'A four-week plan before a school&rsquo;s EQAO sessions (ours)', head: ['Weeks to go', 'Focus', 'Done when'], numCols: [0], rows: [
          ['4', 'The sample test once, untimed; list the question types that felt new', 'Every tool in the platform has been tried'],
          ['3', 'Algebra review: equations, lines, intersections', 'Questions 5 to 9 above are solved with working'],
          ['2', 'Number, data and measurement; formula sheet beside every geometry question', 'The released questions for one year are reviewed with a teacher'],
          ['1', 'One timed practice per session, about 60 minutes each', 'Mistakes are logged and the last week is review only']
        ] },
        { kind: 'table', mt: true, caption: 'Ontario&rsquo;s clock against our teachers&rsquo; clock in India (UTC+5:30), from the 2026e release of the IANA time zone data; arithmetic ours', head: ['Dates', 'Eastern time', 'Gap to India time'], rows: [
          ['Up to 1 November 2026', 'UTC-4 (summer)', 'India runs 9.5 hours ahead'],
          ['1 November 2026 to 14 March 2027, the whole EQAO window included', 'UTC-5 (winter)', 'India runs 10.5 hours ahead']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Asking the school the right questions',
          left: [
            'Which days within the window will the class write Session A and Session B? Will they be back to back or on different days? EQAO says schools decide, writing each session &ldquo;in one continuous, supervised sitting&rdquo;. How does the school include the result in the course mark?',
            'Those answers turn a vague worry into a plan, and teachers are usually glad to give them.'
          ],
          rightH3: 'After the window: the Pascal contest',
          right: [
            'For students who enjoy math, February 2027 has a second date. CEMC says &ldquo;Students in Grade 9 are eligible to write the Pascal Contest&rdquo;, and lists it for North and South America on Tuesday, February 23, 2027 and Wednesday, February 24, 2027: &ldquo;25 multiple-choice questions&rdquo;, with 60 minutes allowed. That is just over two weeks after EQAO&rsquo;s window closes.',
            'Pascal is written through a school, and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> explains it. We promise no level, mark or contest result.'
          ] },
        { kind: 'source', html: 'Sources, saved or read 22 October 2026: ' + G9 + '; CEMC <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/pcf" rel="noopener" target="_blank">Pascal, Cayley and Fermat</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">contest dates</a>. The plan and the clock arithmetic are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages before the Grade 9 assessment',
    lede: 'Our own stages, from reviewing with Grade 9 students in the weeks before their sessions.',
    table: { caption: 'Grade 9 review stages (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Unfamiliar', 'Has not seen the platform, the sample test or the formula sheet'],
      ['2. Familiar', 'Has tried the sample test and knows every question type and tool'],
      ['3. Secure in algebra', 'Writes and solves linear relations and explains an intersection in words'],
      ['4. Ready', 'Has done a timed session, logged mistakes and knows the school&rsquo;s dates']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 costs one evening and removes most of the nerves. Make sure it happens well before January.',
      'Stage 3 is the one that moves the course mark, because algebra runs through MTH1W.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the relation or formula before any number. A model on paper is half the answer.',
      'Take the first stage of each session slowly. On an adaptive test, it shapes what comes next.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More courses for Ontario Grade 9 and 10 students',
    lede: 'Taught live online, by one regular teacher, in a small group or privately.',
    bands: [
      { num: 'I', h3: 'Close the gaps', sub: 'Grades 8 and 9', courses: [
        { code: 'EQAO / GAP / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Math', blurb: 'Fractions, integers and ratios that Grade 9 assumes.' },
        { code: 'EQAO / GAP / 02', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Relations and data made visible with Python.' },
        { code: 'EQAO / GAP / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Quartiles, correlation and reading data with care.' }
      ] },
      { num: 'II', h3: 'Go further', sub: 'Grades 9 and 10', courses: [
        { code: 'EQAO / FUR / 01', slug: 'middle-school-math-competitions-course', title: 'Math Competitions', blurb: 'Contest problems for students new to contests.' },
        { code: 'EQAO / FUR / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The coding strand, taken much further.' },
        { code: 'EQAO / FUR / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Preparation', blurb: 'Waterloo&rsquo;s programming contest for high school.' }
      ] },
      { num: 'III', h3: 'Toward Grade 12', sub: 'Grades 10 to 12', courses: [
        { code: 'EQAO / G12 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'From a question to a chart that answers it.' },
        { code: 'EQAO / G12 / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'Ontario CS Companion', blurb: 'Support beside ICS3U and ICS4U.' },
        { code: 'EQAO / G12 / 03', slug: 'college-mathematics-complete-masterclass', title: 'College Math', blurb: 'Calculus and beyond for the keenest.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 9 lessons through the semester and the window',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings around homework and sports.' },
      { time: 'Weekends', l: 'Sunday morning review before the week.' },
      { time: '1-on-1', l: 'Extra sessions in the four weeks before.' }
    ],
    cells: [
      { h3: 'Model first', p: 'Relation or formula, then numbers.' },
      { h3: 'Official tools used', p: 'Sample test and formula sheet.' },
      { h3: 'MTH1W in order', p: 'Paced with the class units.' },
      { h3: 'Timed practice', p: 'About an hour per session.' },
      { h3: 'Mistake logs', p: 'What went wrong, and the fix.' },
      { h3: 'Class size', p: 'A batch of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects from older students for whom Grade 9 algebra was the starting point. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families and students on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'The first class costs nothing. To continue, families pay once a month for eight live classes, and the price box gives the figure with its currency code. Stopping is as simple as telling us before the next month.',
    free: ['A free first class', 'Bring a recent unit test', 'No card details'],
    group: ['Fifteen to twenty teens', 'One regular teacher', 'Pick your batch', 'Monthly billing'],
    one: ['A teacher for your teen only', 'Extra time before the window', 'Planned from their mistakes']
  },

  faq: {
    eyebrow: 'Questions from Grade 9 families',
    h2: 'EQAO Grade 9 math: common questions',
    items: [
      { q: 'What are the 2027 dates for the Grade 9 math assessment?', a: 'The window runs from January 12 to February 5, 2027, according to EQAO\'s assessments page. Its final two days are meant for students who missed their sitting, and each school chooses session dates within the window.' },
      { q: 'How many questions are on the Grade 9 EQAO math assessment?', a: 'EQAO says it has two sessions, Session A and Session B, totalling 54 questions: 50 that count toward the student\'s outcome and four field-test questions. Each session has two stages and is designed to take about 60 minutes.' },
      { q: 'Does EQAO Grade 9 count toward the final mark?', a: 'Yes. EQAO\'s page says results are to be included as part of a student\'s final course mark, under the ministry\'s Growing Success policy. EQAO does not state a percentage there; ask the school how it applies the result.' },
      { q: 'Is there an EQAO Grade 9 formula sheet?', a: 'Yes. EQAO provides a formula sheet in the e-assessment platform and on its website, and says formulas are given for the area of various geometric shapes. Open the sheet on EQAO\'s site to see exactly which ones.' },
      { q: 'Can students use a calculator?', a: 'Yes. EQAO says a built-in calculator is provided, and that students may also use their own scientific or graphing calculator, plus pencil and paper for rough work.' },
      { q: 'Is there a free EQAO Grade 9 practice test?', a: 'EQAO offers a free sample test on its website. EQAO says it has one session with two stages and 27 questions, and lets students try the tools and question types. EQAO also publishes released questions for 2023, 2024 and 2025.' },
      { q: 'Did EQAO write your practice questions?', a: 'No. Every question here is original to Modern Age Coders, built around the five strands EQAO names. For official items, use the sample test and released questions on EQAO\'s own site, which this page links to.' },
      { q: 'Is the assessment adaptive?', a: 'Yes. EQAO says it uses a multi-stage computer adaptive testing model that adapts to each student\'s performance as they move through each session. So two students may see different questions.' },
      { q: 'Is extra preparation needed?', a: 'Not in EQAO\'s view: because the questions follow the classroom curriculum, EQAO says no additional preparation is required. In practice, learning MTH1W well is the main job, and one look at the sample test and the formula sheet removes most surprises.' },
      { q: 'Can we see our teen\'s completed assessment?', a: 'No. EQAO says completed assessments and student responses cannot be released to the public because the questions are kept for future assessments. Students receive a report from their teacher.' },
      { q: 'When are lessons available?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Ontario stays on its winter clock for the whole January to February window, so a lesson time agreed in November holds steady through it.' },
      { q: 'What do classes cost?', a: 'Your first class is free. After it, one monthly payment covers eight live lessons, with no semester lock-in. Amounts for a batch and for a private teacher sit in the price panel.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario Grade 9 students and families.',
    items: [
      { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor', p: 'Private help in the first year of high school.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Our Canada-wide math page.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests', p: 'Pascal, Cayley, Fermat and Euclid.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Coding for teens in the province.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'The Grade 11 computer science course.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page for Canadian families.' },
      { href: '/blog/how-to-get-better-at-maths', label: 'Getting better at math', p: 'Habits that build skill over a term.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, described in full.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us the school&rsquo;s EQAO dates if you have them, and the topic your teen finds hardest right now. The free class begins exactly there.',
    readFirst: 'Want detail first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or the <a class="ag-inline-link" href="/courses/algebra-foundations-masterclass">Algebra Foundations syllabus</a>.',
    note: 'Lessons are live online with teachers in India, scheduled in Ontario time. No driving, no centre; WhatsApp gets a reply fastest.',
    formNote: 'You will not be asked for a card to book.'
  },

  footer: {
    cols: [
      { h4: 'Grade 9 math', links: [
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra Foundations' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High School Math' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Write the model, then the number'
  },

  personalityCss: `
.ag-root.ag-eqao .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-eqao .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-eqao .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-eqao .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-eqao .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'EQAO Grade 9 Assessment of Mathematics page and its FAQ (saved 22 October 2026, before eqao.com began returning a Cloudflare 403; not retried): purpose, window note, sessions, 54 questions, 60 minutes, adaptive model, strands, tools, calculators, formula sheet, question types, sample test of 27 questions, released questions 2023 to 2025, course-mark sentence, preparation sentence, IRT levels, non-release of responses, parent session date. EQAO assessments page: the 2027 window. CEMC Pascal page and contest dates. facts-geo.md section 3 for the clock.',
    localProject: 'Fifteen original Grade 9 practice questions across Number, Algebra, Data, Geometry and Measurement and Financial Literacy (our practice, not EQAO questions), with worked answers checked in Python; a six-step method for EQAO&rsquo;s sample test, released questions and formula sheet; a four-week plan; a winter clock table for the window. Lesson family: show the model.',
    requiredMentions: ['totalling 54 questions (50 questions that are used to determine a student', 'The last two days of the administration window should be reserved', 'Students are also allowed to use their own calculator (scientific or graphing)', 'Formulas are given for the area of various geometric shapes.', 'consists of one session with two stages, and a total of 27 questions.', 'The 2025 released questions resource includes provincial data for each question.', 'EQAO Math Session for Parents/Guardians of Grade 9 Students', 'the whole EQAO window included', 'Tank A holds 15 L and fills at 2 L per minute', 'A bicycle loses 15% of its value each year'],
    sources: [
      { claim: 'Grade 9 assessment purpose, format, tools, formula sheet, sample test, released questions, course mark, preparation, scoring and parent session.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'Grade 9 next administration window, January 12 to February 5, 2027.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'EQAO Grade 9 formula sheet (linked, not reproduced).', url: 'https://www.eqao.com/g9-formula-sheet/' },
      { claim: '2025 released questions (linked, not reproduced).', url: 'https://www.eqao.com/math-resource-released-questions-g9-25/' },
      { claim: 'Pascal eligibility, format and 2027 dates.', url: 'https://cemc.uwaterloo.ca/contests/pcf' }
    ],
    rejectedClaims: [
      'A percentage weight for EQAO in the course mark: EQAO states none on its page.',
      'A list of the formulas on the formula sheet: only EQAO&rsquo;s own description is used, and the sheet is linked.',
      'Reproducing sample-test or released questions: linked only; the practice set is ours.',
      'That the assessment includes coding questions: not stated by EQAO; not claimed.',
      'Any EQAO level, mark or contest result from our classes: none promised.',
      'CEMC contest fees: omitted (no currency figures).',
      'Any affiliation with EQAO, CEMC or the ministry: none, and the page says so.'
    ]
  }
};
