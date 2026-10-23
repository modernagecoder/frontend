'use strict';
// Math tutor, Calgary (cg- city page, Canada cluster Wave 2, row 171). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: Alberta math as a Calgary student meets it, routed to the live Alberta spokes (PATs, the new curriculum, Math 30-1
// against 30-2, Math 30-1 tutoring and diploma prep) without repeating them; a Math 30-1 sinusoidal-function lesson on The City
// of Calgary's monthly solar production file (amplitude, midline, period, phase shift; a hand model against a least-squares
// fit; a year that does not fit); a worked trigonometric inequality of ours; CEMC contests; price.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-calgary/ (Alberta
// documents copied from ca/src-pilots/alberta-math-shared/, fetched raw on 22 October 2026 by the Alberta writers; quotes
// re-grepped by this writer):
//  - Mathematics 30-1 Information Bulletin 2026-2027 (ecc-math-30-1-info-bulletin.txt): course for "programs that require the
//    study of calculus"; "Machine Scored 32 75%", "Written Response 3 25%"; topic emphasis Relations and Functions 53% to 58%,
//    Trigonometry 27% to 33%, Permutations, Combinations, and Binomial Theorem 14% to 18% (en dashes in source); cognitive
//    levels Conceptual 34%, Problem Solving 36%, Procedural 30%; "up to 6 hours"; "requires the use of an approved graphing
//    calculator"; observations "Students continue to perform well on questions that require them to relate the parameters in
//    the equation of a sinusoidal function to the characteristics of the corresponding graph of the function." and "many
//    students have difficulty solving equations when an identity substitution is required".
//  - General Information Bulletin 2026-2027 diploma schedule (edc-diploma-exam-schedule.raw.txt): Mathematics 30-1, 9 AM to 12 PM,
//    Tuesday 3 November 2026; Wednesday 20 January, Thursday 8 April, Thursday 17 June, Thursday 5 August 2027.
//  - alberta.ca/diploma-exams-overview: "The weighting of diploma exams returned to 30% effective September 1, 2023."; "70% of
//    the final mark comes from course work. The remaining 30% comes from the diploma exam."
//  - Guide to Education, transfer points and course sequences (gte-transfer-points...txt): "Mathematics 30-1 is a prerequisite
//    or corequisite for Mathematics 31"; "Each course is 5 credits".
//  - alberta.ca/curriculum-how-we-got-here (facts-schools-contests.md rows 76, 79): new K to 6 math implemented "2022/2023";
//    draft 7 to 9 math "ahead of mandatory implementation in September 2027". PATs "administered annually to all Alberta
//    students in grades 6 and 9" (row 84).
//  - CEMC (facts-schools-contests.md): Gauss, Pascal/Cayley/Fermat, Euclid; through a school; past contests free.
//  - Alberta Official Time Act (facts-geo.md section 3): UTC-6 all year; India 11 hours 30 minutes ahead. Area codes 403, 587,
//    825, 368 (facts-geo.md). No populations used.
//  - The City of Calgary open data, "Monthly Solar Energy Production (KWh)", Socrata iric-4rrc (meta_monthly_solar.json):
//    description "The monthly output at each of The City of Calgary's solar photovoltaic projects."; attribution "The City of
//    Calgary"; custom fields "Temporal Start Date" 2011-01, "Update Frequency" Monthly. CSV downloaded with curl on 23 October
//    2026 at 09:26 UTC (monthly-solar.csv, 140,274 bytes). Terms (terms.html, data.calgary.ca/d/Open-Data-Terms/u45n-7awa):
//    "including for commercial purposes"; attribution "Contains information licensed under the Open Government Licence - City
//    of Calgary." (en dash in source); "suggests any official status or that the Information Provider endorses you".
// Our own calculations (solar.py and worked.py, python -I; outputs *.out.txt): 2,323 rows, 25 facility names, periods 2010-12 to
// 2025-12; Southland Leisure Centre 123 rows from 2015-09, no duplicate months, October 2025 missing; complete years 2016 to 2024;
// monthly means (kWh) Jan 2,147.9, Feb 4,278.6, Mar 11,115.2, Apr 18,042.1, May 21,350.8, Jun 23,371.2, Jul 24,033.2, Aug 21,458.3,
// Sep 15,210.1, Oct 10,507.0, Nov 3,413.3, Dec 1,014.8; hand model amplitude 11,509.2, midline 12,524.0, peak month 7, R2 0.89;
// least-squares sinusoid amplitude 11,781.4, midline 12,995.2, peak at month 6.39, R2 0.991; June by year 2016 25,613 down to
// 2024 18,379 and 2025 11,066; 2025 rows roughly half the usual level. Worked problem: above 18,000 kWh when x is between 4.95
// and 9.05 (hand model) or 4.23 and 8.55 (least squares); arccos 0.4758 = 1.0749 rad.
// Lesson family: sinusoidal functions (amplitude, midline, period, phase shift) fitted to seasonal data.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SOLAR = [
  'import csv, math, statistics',
  '',
  'with open("monthly-solar.csv", encoding="utf-8") as f:',
  '    site = {r["Period"]: float(r["Solar PV Production (kWh)"])',
  '            for r in csv.DictReader(f)',
  '            if r["Facility Name"] == "SOUTHLAND LEISURE CENTRE"}',
  '',
  'years = range(2016, 2025)  # the complete years',
  'means = [statistics.mean(site[f"{y}-{m:02d}"] for y in years) for m in range(1, 13)]',
  'top, bottom = max(means), min(means)',
  'a = (top - bottom) / 2      # amplitude',
  'd = (top + bottom) / 2      # midline',
  'c = means.index(top) + 1    # month of the peak',
  'for m in range(1, 13):',
  '    model = a * math.cos(math.pi / 6 * (m - c)) + d',
  '    print(m, round(means[m - 1]), round(model))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'CALGARY MATH', label: 'Math tutor in Calgary', blurb: 'Math help for Calgary students from the Grade 6 PAT to Math 30-1 and Math 31, with a sinusoidal-function lesson on the City\'s solar panel output.' },
  market: CA,
  slug: 'math-tutor-calgary',
  code: 'mtuc',
  accent: '#2D2361',
  accentRationale: 'Calgary math: a deep chinook-night indigo, #2D2361, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 13.4 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Calgary',
    eyebrow: 'Math tutor, Calgary, Alberta',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Alberta' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-alberta', name: 'Alberta' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Calgary',
  title: 'Math Tutor Calgary | Live Online, Grade 1 to Math 30-1 and 31',
  description: 'Live online math tutoring for Calgary students: Alberta math from the PATs to Math 30-1 and Math 31, a solar data trigonometry lesson, and diploma exam dates.',
  ogDescription: 'Calgary\'s solar panels trace a near-perfect sine curve across the year. A math tutor page that teaches Math 30-1 sinusoidal functions with the City\'s own data.',
  twitterDescription: 'Math tutoring for Calgary students, live online, from early number sense to Math 30-1 and Math 31.',
  ogImageCourse: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Calgary Students',
    description: 'Live online math for Calgary students from Grade 1 to Grade 12: number sense, Grade 6 and Grade 9 PAT mathematics, Grade 10 math, Math 20-1, 30-1 and 31 support, diploma exam preparation and contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Calgary',
  capsuleQ: 'Where can a Calgary student find a live math tutor online?',
  capsule: 'Modern Age Coders runs live online math tutoring for Calgary students from Grade 1 to Math 30-1 and Math 31, one to one or in a group of fifteen to twenty at a single level. Grade 12 students mostly join Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1, and contest students join Waterloo Math Contests. The first lesson is free.',
  lead: 'For a Calgary family, Alberta math has two moments that carry real weight: the Provincial Achievement Tests in Grades 6 and 9, and the Math 30-1 diploma exam, which now makes up 30 percent of the final mark. Between them lies a long climb through Grade 10 math and Math 20-1, and for students heading toward engineering or science, Math 31 after or alongside 30-1. Trigonometry is a large part of that climb, and sinusoidal functions are where it stops being about triangles. This page sets out the Alberta sequence briefly, then teaches a full Math 30-1 lesson on The City of Calgary&rsquo;s own solar panel records, works a problem from it, and covers contests and the question of price.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Calgary.',

  picks: {
    eyebrow: 'Math course picks for Calgary',
    h2: 'Courses Calgary students start with',
    intro: 'Each lines up with a stage of Alberta math. The free first lesson confirms it after the teacher has heard how the student reasons.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Math 30-1 beside the school course: functions, trigonometry, permutations and the written-response habits the diploma exam rewards. Alberta credits come from the school.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 11', note: 'Grade 9 math, Grade 10 math and Math 20-1, with every algebra step written out so Math 30-1 does not start with gaps.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Fractions, integers, ratio and equations, the ground the Grade 6 and Grade 9 achievement tests are built on.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Our own contest-style problems for students who want more than the course, plus the free CEMC archive.' }
    ]
  },

  sections: [
    {
      id: 'alberta', tint: '', eyebrow: 'Alberta math in Calgary',
      h2: 'Alberta math for a Calgary student, stage by stage',
      intro: 'Calgary&rsquo;s public schools teach Alberta&rsquo;s programs of study. Each row points to our detailed page for that stage; facts come from Alberta Education and Childcare documents read on 22 and 23 October 2026.',
      body: [
        { kind: 'table', caption: 'Alberta math stages and where each is covered in depth on our site. Facts from alberta.ca and Alberta Education and Childcare bulletins for 2026 to 2027', head: ['Stage', 'What happens', 'Our page'], rows: [
          ['Kindergarten to Grade 6', 'New K to 6 math curriculum, implemented in 2022/2023; Grade 6 math PAT in June 2027', '<a class="cg-inline-link" href="/alberta-grade-6-math-pat-practice">Grade 6 math PAT practice</a>'],
          ['Grades 7 to 9', 'Draft 7 to 9 math, mandatory from September 2027; Grade 9 math PAT in January and June 2027', '<a class="cg-inline-link" href="/alberta-grade-9-math-pat-practice">Grade 9 math PAT practice</a> and <a class="cg-inline-link" href="/alberta-new-math-curriculum-explained">the new curriculum</a>'],
          ['Grades 10 and 11', 'Grade 10 math, then the choice between the -1 and -2 courses', '<a class="cg-inline-link" href="/math-30-1-vs-math-30-2">Math 30-1 or Math 30-2</a>'],
          ['Grade 12', 'Math 30-1, written diploma exam worth 30 percent of the final mark', '<a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutor</a> and <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">diploma exam prep</a>'],
          ['Grade 12, calculus', 'Math 31, which needs Math 30-1 before or alongside it', 'Covered in our Grade 12 course']
        ] },
        { kind: 'p', text: 'Alberta&rsquo;s Guide to Education says Mathematics 30-1 is a prerequisite or corequisite for Mathematics 31, and that each course in the senior math program is 5 credits. That gives a Calgary Grade 12 student aiming at calculus a choice: take 30-1 and 31 together, or 30-1 first. Taking both at once means trigonometry, logarithms and limits in the same semester, which is manageable for a strong student and heavy for anyone carrying a Grade 11 gap.' },
        { kind: 'table', mt: true, caption: 'How the Math 30-1 diploma exam is built in 2026 to 2027, from the Mathematics 30-1 Information Bulletin (Alberta Education and Childcare)', head: ['Part of the exam', 'Share'], rows: [
          ['32 machine-scored questions', '75%'],
          ['3 written-response questions, equally weighted', '25%'],
          ['Relations and Functions', '53% to 58%'],
          ['Trigonometry', '27% to 33%'],
          ['Permutations, Combinations, and Binomial Theorem', '14% to 18%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five sittings this year', p: 'Every Math 30-1 sitting in 2026 to 2027 starts at 9 AM and is scheduled until 12 PM. The first is on 3 November 2026; the rest fall on 20 January, 8 April, 17 June and 5 August 2027. The bulletin allows up to 6 hours for students who need them.' },
          { h3: 'What markers saw last time', p: 'The bulletin says students continue to perform well when relating the parameters of a sinusoidal function to its graph, but that many struggle with equations that need an identity substitution first. Our lessons spend their time on the second.' },
          { h3: 'Weighting', p: 'Since 1 September 2023 the diploma exam has again been worth 30 percent of the final mark in Alberta, leaving 70 percent to the school&rsquo;s own course work. Steady work across the semester still carries most of the mark.' }
        ] },
        { kind: 'callout', h3: 'Our place next to school', p: 'We teach alongside the course a Calgary student is enrolled in. We do not grant Alberta credits; credits, course marks and diploma exam results all come through the school and the province. We are not connected with Alberta Education and Childcare, The City of Calgary or any Calgary school board.' }
      ]
    },
    {
      id: 'solar', tint: 'deep', eyebrow: 'Calgary data lesson',
      h2: 'Fitting a sine curve to a Calgary rooftop&rsquo;s solar output',
      intro: 'The City of Calgary publishes how much electricity each of its solar installations produces every month. Math 30-1 students take one site, find its amplitude, midline, period and phase shift, and test how well a sinusoidal function describes a real year. Every figure below is our own calculation.',
      body: [
        { kind: 'p', text: 'The dataset is Monthly Solar Energy Production (KWh), which the City describes as the monthly output at each of The City of Calgary&rsquo;s solar photovoltaic projects. Our download on 23 October 2026 held 2,323 rows across 25 facility names, from December 2010 to December 2025. We chose Southland Leisure Centre: 123 monthly readings from September 2015, no month recorded twice, and nine complete calendar years from 2016 to 2024.' },
        { kind: 'table', caption: 'Southland Leisure Centre, mean solar output by calendar month over 2016 to 2024 (kWh), our calculation, beside two sinusoidal models we built. The City of Calgary open data, downloaded 23 October 2026', head: ['Month', 'Mean output', 'Hand model', 'Least-squares model'], rows: [
          ['January', '2,147.9', '1,014.8', '1,805.1'],
          ['February', '4,278.6', '2,556.7', '5,146.9'],
          ['March', '11,115.2', '6,769.4', '10,591.6'],
          ['April', '18,042.1', '12,524.0', '16,680.5'],
          ['May', '21,350.8', '18,278.6', '21,781.8'],
          ['June', '23,371.2', '22,491.2', '24,528.8'],
          ['July', '24,033.2', '24,033.2', '24,185.3'],
          ['August', '21,458.3', '22,491.2', '20,843.5'],
          ['September', '15,210.1', '18,278.6', '15,398.7'],
          ['October', '10,507.0', '12,524.0', '9,309.9'],
          ['November', '3,413.3', '6,769.4', '4,208.6'],
          ['December', '1,014.8', '2,556.7', '1,461.6']
        ] },
        { kind: 'p', text: 'The hand model is what a Math 30-1 student builds with a pencil. The highest mean, 24,033.2 kWh in July, and the lowest, 1,014.8 in December, give an amplitude of half their difference, 11,509.2, and a midline halfway between them, 12,524.0. A year is 12 months, so b is 2&pi;/12, or &pi;/6, and putting the peak at month 7 gives y = 11,509.2 cos(&pi;/6 (x &minus; 7)) + 12,524.0. It explains 89 percent of the month-to-month variation, but it runs late: spring is too low and autumn too high.' },
        { kind: 'p', text: 'The least-squares model, fitted with a little more mathematics, moves the peak back to month 6.39, between June and July, with amplitude 11,781.4 and midline 12,995.2. It explains 99.1 percent of the variation. A peak near the end of June makes physical sense, since days are longest then. Here is the Python for the hand model, which students write first:<code class="cg-mt-2">' + SOLAR + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Amplitude and midline', p: 'Amplitude is half the swing between the sunniest and darkest month; the midline is the level the output swings around. Students should say both in kWh, not just as numbers, and explain why neither is an average of the twelve months in the hand method.' },
          { h3: 'Phase shift', p: 'The horizontal shift c places the peak. Our first guess, month 7, came from the largest monthly mean; the better fit says 6.39. The difference is a lesson in itself: a model built from two points is only as good as those two points.' },
          { h3: 'Period', p: 'The period is fixed by the calendar at 12 months, which is why b is &pi;/6. In a contrasting exercise, students try a period of 11 or 13 and watch the fit fall apart within two years.' }
        ] },
        { kind: 'callout', h3: 'A year that does not fit', p: 'June output at this site fell from 25,613 kWh in 2016 to 18,379 in 2024, and 2025 readings are roughly half the usual level, with October 2025 missing altogether. The file does not say why: equipment, shading, maintenance or a recording change are all possible. That is why we fitted only the complete years from 2016 to 2024, and why a student should flag 2025 rather than average it in.' },
        { kind: 'p', text: 'Contains information licensed under the Open Government Licence - City of Calgary. The file is used on those terms, which permit commercial use (<a class="cg-inline-link" href="https://data.calgary.ca/d/Open-Data-Terms/u45n-7awa">terms of use</a>, <a class="cg-inline-link" href="https://data.calgary.ca/Environment/Monthly-Solar-Energy-Production-KWh-/iric-4rrc">dataset page</a>). The City of Calgary does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: when does output stay above 18,000 kWh?',
      intro: 'Written by us at Math 30-1 level. It turns the hand model into a trigonometric inequality and then checks it against the data.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> Using y = 11,509.2 cos(&pi;/6 (x &minus; 7)) + 12,524.0, where x is the month number, find the part of the year when the model predicts more than 18,000 kWh a month. Then compare with the monthly means in the table.' },
        { kind: 'p', text: '<strong>Step 1, isolate the cosine.</strong> Subtract the midline and divide by the amplitude: cos(&pi;/6 (x &minus; 7)) &gt; (18,000 &minus; 12,524.0) / 11,509.2, which is about 0.4758.' },
        { kind: 'p', text: '<strong>Step 2, find the reference angle.</strong> The inverse cosine of 0.4758 is about 1.0749 radians. Cosine is greater than 0.4758 when the angle lies between &minus;1.0749 and 1.0749 within one cycle, so &pi;/6 (x &minus; 7) must lie in that interval.' },
        { kind: 'p', text: '<strong>Step 3, solve for x.</strong> Multiply through by 6/&pi;: x &minus; 7 lies between &minus;2.05 and 2.05, so x lies between about 4.95 and 9.05. The model says output stays above 18,000 kWh from the very start of May to the very start of September.' },
        { kind: 'p', text: '<strong>Step 4, check against reality.</strong> The table says April already averaged 18,042.1 kWh and September only 15,210.1. The real window is roughly April to August, a month earlier than the hand model predicts. Repeating the steps with the least-squares model, peak 6.39, gives x between about 4.23 and 8.55, much closer to the data. The algebra was right; the phase shift was wrong.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Write the hand model as a sine function instead of a cosine. (2) Find the months when the least-squares model predicts less than 3,000 kWh. (3) State the domain and range of the hand model for one year, and explain why the range should not include negative values. Bring your answers to the free lesson and the teacher will mark them with you.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Calgary students',
      h2: 'Math contests a Calgary student can enter in 2026 to 2027',
      intro: 'Calgary students write the same national contests as students anywhere in Canada, organised by the Centre for Education in Mathematics and Computing at the University of Waterloo. We read the dates on CEMC&rsquo;s site on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC math contests by grade for 2026 to 2027, with CEMC&rsquo;s North and South America dates', head: ['Grade', 'Contest', 'CEMC date'], rows: [
          ['Grades 7 and 8', 'Gauss', '10 to 21 May 2027'],
          ['Grade 9', 'Pascal', '23 and 24 February 2027'],
          ['Grade 10', 'Cayley', '23 and 24 February 2027'],
          ['Grade 11', 'Fermat', '23 and 24 February 2027'],
          ['Final year of secondary school', 'Euclid', '6 April 2027']
        ] },
        { kind: 'p', text: 'For a Calgary Grade 12 student, the Euclid on 6 April 2027 falls between the April and June Math 30-1 sittings. That is not a clash so much as a useful overlap: Euclid problems reward the same exact-value trigonometry, logarithm laws and careful counting that the diploma exam tests, and preparing for one helps with the other. CEMC states that its contests are not tests or exams, with no pass mark, which takes some pressure off.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How to enter', p: 'Under CEMC&rsquo;s rules a student enters through a school, not alone. When a Calgary school is not taking part, the student can try another nearby school willing to add them, which is CEMC&rsquo;s own suggestion.' },
          { h3: 'Practice papers', p: 'Ten years of past CEMC contests are free online, with no registration. Our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests preparation page</a> explains how we use them.' },
          { h3: 'Our own problems', p: 'We teach contest skills with problems we write ourselves and label as ours. We never reproduce CEMC papers or solutions, and we are not connected with CEMC or the University of Waterloo.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Calgary',
      h2: 'Math tutor prices in Calgary and what they should buy',
      intro: 'Our fees appear further down in your local currency, so no amounts are written here. What follows is how to judge whether a price is good value for a Calgary student.',
      body: [
        { kind: 'table', caption: 'Questions that make two tutoring prices comparable. Our answers are in the middle; we do not list other providers&rsquo; prices', head: ['Question', 'Our answer', 'Why ask it'], rows: [
          ['How many lessons does the fee cover?', 'Eight live classes a month', 'Turns any price into a cost per lesson'],
          ['Is the tutor teaching Math 30-1 or generic math?', 'The Alberta course by name, including 30-1, 30-2 and 31', 'The diploma exam tests a specific course'],
          ['Who solves the problems in the lesson?', 'The student, on a shared board', 'Watching a tutor solve is not practice'],
          ['What happens before a diploma sitting?', 'Group classes continue; one to one can be added', 'The weeks before 20 January or 17 June 2027 need focus'],
          ['Can you try first?', 'Yes, one free live lesson', 'You see the teaching before paying']
        ] },
        { kind: 'p', text: 'Most Calgary families do well with a group class of fifteen to twenty at one level for steady progress through a course, then one to one for a short period when a specific need appears: identities that will not come, a written-response question that keeps losing marks, or Math 31 limits sitting on top of Math 30-1. The right format is the one the student will actually use every week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to Math 31 in Calgary',
    intro: 'Read the bands loosely: a Calgary student is placed by the work they can do in the free lesson, whatever their grade.',
    cols: [
      { band: 'Kindergarten to Grade 3', h3: 'Number sense', p: 'Counting, place value, addition and subtraction strategies, with every answer explained.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 9', h3: 'Toward the PATs', p: 'Fractions, ratio, integers, equations and geometry, building to the Grade 6 and Grade 9 tests.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 10 and 11', h3: 'Grade 10 and 20-1', p: 'Linear relations, factoring, quadratics and first trigonometry, ready for the -1 sequence.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grade 12', h3: 'Math 30-1 and 31', p: 'Functions, trigonometry and combinatorics for the diploma exam, with calculus for students taking Math 31.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Why a Calgary student should not let an AI fit the curve',
    intro: 'A tool can fit a sine curve in a second. Knowing whether to trust it takes understanding.',
    p1: 'Give an AI tool the Southland file and ask for a model, and it may fit all eleven years at once, 2025 included, and present the result with confidence. It will not stop to ask why 2025 is half the size of 2016, or why the peak should be near the end of June. A student who has built the model by hand can see both problems at a glance.',
    p2: 'Our teachers ask Calgary students to sketch the graph, predict the parameters and only then compute. Older students use AI tools under the age rules we follow, and only to check finished work. Anything handed in for a mark at school remains the student&rsquo;s own.',
    closer: 'The Math 30-1 bulletin notes that students handle sinusoidal parameters well; knowing when the data breaks the model is the next step.',
    blogAnchor: 'why thinking for yourself still matters with AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math for Calgary families',
    intro: 'Tuscany in the northwest and Mahogany in the southeast are a long drive apart, but online they are the same classroom.',
    cells: [
      { h3: 'Class times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Alberta stays on UTC-6', p: 'Alberta&rsquo;s official time is six hours behind UTC all year, so Calgary lesson times do not move in November. India is 11 hours 30 minutes ahead, and every invitation gives the Calgary time.' },
      { h3: 'A shared board', p: 'Students solve on a board the teacher sees live, so a misplaced phase shift or a dropped negative is caught at once.' },
      { h3: 'Alberta course names', p: 'Teachers plan from the student&rsquo;s course: Grade 10 math, 20-1, 30-1, 30-2 or 31.' },
      { h3: 'Calgary numbers', p: 'Mobiles on 403, 587, 825 or 368 work in the form. Enter all ten digits; the +1 is already set.' },
      { h3: 'Free first lesson', p: 'The first lesson is free and complete. It ends with a suggested course, level and time, without any card details.' }
    ],
    spec: { title: 'No Calgary centre', p: 'We do not have a tutoring centre in Calgary and do not claim one. Teachers teach live online from India; a student needs a computer, a microphone and a reliable internet connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Calgary families',
    intro: 'Three lines, each in the currency of your location.',
    first: 'One complete live lesson at no charge, with a course and level recommendation at the end.',
    group: 'The monthly fee for eight live classes in a group of fifteen to twenty at one stage.',
    private: 'The monthly fee for eight lessons with a teacher to yourself.',
    closer: 'A Calgary family pays exactly what any other Canadian family pays. Charges begin only after the free lesson and an agreed plan; the pricing page explains missed classes and holidays.'
  },

  reviewsH2: 'Families and students on Google',

  book: {
    h2: 'Book a free math lesson for your Calgary student',
    intro: 'Tell us the grade and, for high school, the course: 20-1, 30-1 or 31. A Grade 3 child might start with a number puzzle; a Math 30-1 student might start with the solar curve.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Calgary.'
  },

  faq: {
    h2: 'Calgary math tutoring questions',
    intro: 'What Calgary parents and students ask us most.',
    items: [
      { q: 'Do you have a math tutor in Calgary?', a: 'Yes, online. There is no Calgary centre. A teacher teaches each lesson live, one to one or to a group of fifteen to twenty at the same level.' },
      { q: 'What does a math tutor in Calgary cost with you?', a: 'Look at the fees section of this page. It lists the free first lesson and the monthly prices for group and one-to-one lessons, in your currency. Nothing is billed before the free lesson.' },
      { q: 'Can you help my teen prepare for the Math 30-1 diploma exam?', a: 'Yes. Alberta lists Math 30-1 sittings on 3 November 2026 and 20 January, 8 April, 17 June and 5 August 2027. We teach the course content and practise written responses with our own questions.' },
      { q: 'How much does the diploma exam count?', a: 'Alberta says the diploma exam is 30 percent of the final mark and course work is 70 percent, a weighting in place since 1 September 2023.' },
      { q: 'Should my child take Math 31 with Math 30-1?', a: 'Alberta allows Math 30-1 before or alongside Math 31. Taking both together suits a student who is secure in Math 20-1; otherwise 30-1 first is often calmer.' },
      { q: 'Do your lessons give Alberta credits?', a: 'No. We do not grant Alberta credits. The school awards credits and course marks; the province runs the diploma exams.' },
      { q: 'Do you prepare students for the Grade 6 and Grade 9 PATs?', a: 'We teach the math the tests draw on rather than drilling the format. Our Grade 6 and Grade 9 PAT practice pages have the details for 2026 to 2027.' },
      { q: 'What time are lessons for Calgary students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta keeps one clock all year, so times do not shift in November.' },
      { q: 'Do you teach students in Airdrie, Cochrane and Okotoks?', a: 'Yes. Lessons are online, so students across the Calgary area join the same classes on Alberta time.' },
      { q: 'Is the solar lesson part of a real course?', a: 'It is the kind of Math 30-1 lesson we teach. The data comes from The City of Calgary; the models, calculations and problem are ours.' }
    ]
  },

  next: {
    eyebrow: 'More for Calgary and Canada',
    h2: 'Other pages for Calgary math students',
    html: 'For Canada as a whole, read <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>; for the province, <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>. Senior students can go straight to <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutoring</a>, and parents educating at home have <a class="cg-inline-link" href="/homeschool-coding-and-math-alberta">our Alberta homeschool math and coding guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Calgary math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/math-30-1-tutor-alberta', label: 'Math 30-1' },
    { href: '/alberta-math-30-1-diploma-exam-prep', label: 'Diploma exam prep' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtuc .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-mtuc .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-mtuc .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-mtuc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtuc .cg-table caption { text-align: left; font-weight: 640; }
.cg-root.cg-mtuc #solar code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtuc #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtuc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Alberta, read 22 and 23 October 2026 from Alberta Education and Childcare documents saved raw: Mathematics 30-1 Information Bulletin 2026-2027 (blueprint 32 machine-scored 75%, 3 written-response 25%; topic emphasis; sinusoidal and identity observations; up to 6 hours); diploma schedule (Math 30-1 3 November 2026, 20 January, 8 April, 17 June, 5 August 2027); diploma weighting 30% since 1 September 2023, 70/30; Guide to Education (Math 30-1 prerequisite or corequisite for Math 31; 5 credits each); new K-6 math 2022/2023 and draft 7-9 mandatory September 2027; PATs in Grades 6 and 9; Alberta UTC-6 all year (Official Time Act); area codes 403, 587, 825, 368 (facts-geo.md); CEMC 2026-27 dates and the through-a-school rule.',
    localProject: 'The City of Calgary open data, Monthly Solar Energy Production (KWh) (Open Government Licence - City of Calgary, commercial use allowed), CSV downloaded 23 October 2026 and analysed with our scripts solar.py and worked.py (python -I): 2,323 rows, 25 facilities; Southland Leisure Centre 123 months, complete years 2016-2024, monthly means from 1,014.8 (December) to 24,033.2 kWh (July); hand model amplitude 11,509.2, midline 12,524.0, peak month 7, R2 0.89; least-squares amplitude 11,781.4, midline 12,995.2, peak 6.39, R2 0.991; June 25,613 (2016) to 18,379 (2024); 2025 about half, October 2025 missing. Labelled as ours. Lesson family: sinusoidal functions fitted to seasonal data.',
    requiredMentions: [
      'Southland Leisure Centre',
      'amplitude of half their difference, 11,509.2',
      'moves the peak back to month 6.39',
      'It explains 99.1 percent of the variation',
      'from 25,613 kWh in 2016 to 18,379 in 2024',
      'about 0.4758',
      'between about 4.23 and 8.55',
      '2,323 rows across 25 facility names',
      'It explains 89 percent',
      'spring is too low and autumn too high'
    ],
    sources: [
      { claim: 'The City of Calgary open data: Monthly Solar Energy Production (KWh).', url: 'https://data.calgary.ca/Environment/Monthly-Solar-Energy-Production-KWh-/iric-4rrc' },
      { claim: 'The City of Calgary: Open Data Terms (Open Government Licence - City of Calgary).', url: 'https://data.calgary.ca/d/Open-Data-Terms/u45n-7awa' },
      { claim: 'Alberta Education and Childcare: Mathematics 30-1 Information Bulletin 2026-2027.', url: 'https://www.alberta.ca/system/files/ecc-math-30-1-info-bulletin.pdf' },
      { claim: 'Alberta Education and Childcare: diploma examination schedule 2026-2027.', url: 'https://www.alberta.ca/system/files/edc-diploma-exam-schedule.pdf' },
      { claim: 'alberta.ca: diploma exams overview (30% weighting, 70/30 split).', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Guide to Education: transfer points and course sequences for senior high school.', url: 'https://manuals.alberta.ca/guide-to-education/' },
      { claim: 'alberta.ca: curriculum, how we got here (K-6 math, draft 7-9 timeline).', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'CEMC: contest dates for 2026/27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Calgary population figure: StatCan was not reachable live.',
      'Why the Southland output fell in 2025: the file gives no reason, so none is offered.',
      'University of Calgary admission requirements: the saved page renders its requirements by script, so nothing is quoted.',
      'Any total of the City\'s solar production: not printed; the lesson uses one site.',
      'That our lessons earn Alberta credits or affect diploma results: refused.',
      'Diploma exam fees or rewrite fees: left out (currency-neutral page).',
      'Names of Calgary schools, board results or private people: not used.',
      'Any affiliation with The City of Calgary, Alberta Education and Childcare or CEMC.'
    ]
  }
};
