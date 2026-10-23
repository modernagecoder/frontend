'use strict';
// Math tutor, Edmonton (cg- city page, Canada cluster Wave 2, row 172). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the two Provincial Achievement Tests an Edmonton child writes (Grade 6 and Grade 9) and the -1 or -2 choice after
// them, routed to the live Alberta spokes; a linear-versus-exponential modelling lesson on the City of Edmonton Trees inventory
// (bur oak trunk diameter against years since planting: two fits, R squared, and why the better fit inside the data is the worse
// one outside it); a worked problem of ours; CEMC contests for younger students; price. Never repeats the Calgary page.
// Revision 23 October 2026: the earlier water-use lesson (EPCOR-supplied file) was withdrawn on the coordinator's ruling that
// externally sourced data falls under the licence's third-party exemption; its files are kept in src-pilots/.../superseded_epcor/.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-edmonton/ (Alberta
// documents copied from ca/src-pilots/alberta-*-pat-practice/ and alberta-math-shared/, fetched raw on 22 October 2026 by the
// Alberta writers; quotes re-grepped by this writer):
//  - 2026-2027 Mathematics 6 Subject Bulletin: Part A "consists of 15 questions from Organizing Idea: Number in two reporting
//    categories: integers, decimals, and powers; and fractions, rates, and ratios", "designed to be completed in 30 minutes;
//    however, students may have up to 60 minutes"; Part B "consists of 40 questions", "designed to be completed in 75 minutes",
//    "up to 150 minutes"; "The use of a calculator is not permitted in Part A or Part B."
//  - 2026-2027 Mathematics 9 Subject Bulletin: "Part A contains 20 questions"; "Part B contains 40 questions"; "Part A:
//    Manipulatives may be used, but use of a calculator is not permitted."; "Part B: Students may use calculators and
//    manipulatives."; "For the 2026/27 school year, classes in schools choosing to pilot the new curriculum for Mathematics 9
//    will not be required to write the Grade 9 Mathematics Provincial Achievement Test."
//  - 2026-2027 Grade 9 Parent Guide: "Alberta Education and Childcare discourages test rehearsal and coaching."
//  - PAT administration schedule (ecc-pat-administration-schedules.raw.txt): Grade 6 Mathematics Part A Monday 14 June 2027,
//    9 AM to 9:30 AM; Part B Wednesday 16 June 2027, 9 AM to 10:15 AM; Grade 9 Mathematics Part A Friday 22 January 2027 and
//    Tuesday 15 June 2027; Part B Monday 25 January and Thursday 17 June 2027.
//  - Mathematics 30-2 Information Bulletin: for "post-secondary studies in programs that do not require the study of calculus".
//  - alberta.ca (facts-schools-contests.md rows 76, 79, 80, 81, 84): K-6 math implemented 2022/2023; draft 7-9 math mandatory
//    September 2027; diploma weighting 30%, 70/30; PATs in grades 6 and 9.
//  - CEMC (facts-schools-contests.md): Gauss "Students in Grades 7 and 8." and "Motivated students in lower grades are welcome to
//    write the contest.", 10 to 21 May 2027; Team Up Challenge for Grades 6 to 8, "Tuesday, June 1, 2027 or later"; Pascal,
//    Cayley, Fermat 23 and 24 February 2027; through a school.
//  - Alberta Official Time Act (facts-geo.md): UTC-6 all year; India 11 hours 30 minutes ahead. Area codes 780, 587, 825, 368.
//    No populations used.
//  - City of Edmonton open data, "Trees" (Socrata eecg-fc54, meta_trees.json): attribution "City of Edmonton"; description "Map
//    of Boulevard and Open Space Trees owned and maintained by the City of Edmonton - not all City-owned trees are captured on
//    this map."; custom fields "Internally Sourced Data", "Update Frequency" Monthly, "Duplicates Removed" Yes. Grouped counts and
//    averages fetched with the SODA API on 23 October 2026 at 10:01 UTC (by_year_OakBur.json, by_year_SpruceColorado.json,
//    all_1990_dates.json, all_by_year_top.json, all_null.json, all_range.json). Licence: Open Government Licence - Edmonton,
//    Version 1.0 July 2022 (terms_story.json and terms-embedded-licence.html, fetched by this writer): "including for commercial
//    purposes"; attribution "Contains information licensed under the Open Government Licence - City of Edmonton." (dash in source);
//    "suggests any official status or that the Information Provider endorses you"; exemption "third party rights the Information
//    Provider is not authorized to license" (this dataset is City-sourced, so it does not apply).
// Our own calculations (oak.py and worked.py, python -I; outputs *.out.txt): 482,603 trees; no blank planted dates; 258,504 dated
// exactly 1 June 1990 (53.6%), the next most common year 2014 with 15,767; bur oak 17,971 trees, 1,992 of them dated 1990;
// planting years 2004 to 2025 with 50+ trees each give 22 points and 15,848 trees; age taken as 2026 minus planting year (our
// approximation; the file does not say when each diameter was measured); mean diameter 16.0 cm at age 22 (169 trees), 8.0 at 10
// (1,047), 5.6 at 1 (1,289); linear fit d = 0.5325t + 3.337, r = 0.950, R2 0.903; exponential fit d = 4.697(1.0567)^t, 5.67% a
// year, R2 0.959; at 50 years 30.0 against 74.0 cm, at 100 years 56.6 against 1,167 cm. Worked problem: 30 cm at 50.1 years
// (linear) or 33.6 years (exponential); doubling time 12.6 years; age 12 models 9.73 and 9.1 against the data 8.4.
// Lesson family: linear against exponential models, R squared, and the danger of extrapolation.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const OAKS = [
  'import json, math, statistics',
  '',
  'with open("by_year_OakBur.json", encoding="utf-8") as f:',
  '    years = [(int(r["yr"]), float(r["d"]), int(r["n"])) for r in json.load(f)]',
  '',
  'keep = [(2026 - y, d) for y, d, n in years if 2004 <= y <= 2025 and n >= 50]',
  'age = [a for a, _ in keep]',
  'size = [d for _, d in keep]',
  '',
  'line = statistics.linear_regression(age, size)',
  'curve = statistics.linear_regression(age, [math.log(d) for d in size])',
  'print("linear: d =", round(line.slope, 4), "t +", round(line.intercept, 3))',
  'print("exponential: d =", round(math.exp(curve.intercept), 3),',
  '      "x", round(math.exp(curve.slope), 4), "^ t")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'EDMONTON MATH', label: 'Math tutor in Edmonton', blurb: 'Math help for Edmonton students through the Grade 6 and Grade 9 achievement tests and into Math 30-1 or 30-2, with a growth-model lesson on the city\'s tree inventory.' },
  market: CA,
  slug: 'math-tutor-edmonton',
  code: 'mtue',
  accent: '#8A2950',
  accentRationale: 'Edmonton math: a deep river-valley mulberry, #8A2950, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 7.5 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Edmonton',
    eyebrow: 'Math tutor, Edmonton, Alberta',
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
  routeLabel: 'Math tutor in Edmonton',
  title: 'Math Tutor Edmonton | Live Online, PATs to Math 30-1 and 30-2',
  description: 'Live online math tutoring for Edmonton students: Grade 6 and Grade 9 PATs, the Math 30-1 or 30-2 choice, a tree growth modelling lesson on city data, and contests.',
  ogDescription: 'An Edmonton bur oak gains about half a centimetre of trunk a year. A math tutor page that models that growth two ways and shows why the better fit fails.',
  twitterDescription: 'Math tutoring for Edmonton students, live online, from the Grade 6 PAT to Math 30-1 and 30-2.',
  ogImageCourse: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Edmonton Students',
    description: 'Live online math for Edmonton students from Grade 1 to Grade 12: number sense, Grade 6 and Grade 9 PAT mathematics, Grade 10 math, Math 20-1 and 20-2, Math 30-1 and 30-2 support, and CEMC contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Edmonton',
  capsuleQ: 'Is there live math tutoring for Edmonton students online?',
  capsule: 'There is. Modern Age Coders teaches math to Edmonton students over live video, covering everything between Grade 1 and Math 30-1 or 30-2; a teacher works with one student, or with fifteen to twenty students placed at the same level. Younger students often start with Elementary Maths or Middle School Mathematics Mastery; Grade 12 students join our Western Canada Grade 12 Math course. Lesson one is free.',
  lead: 'Every Edmonton child in a public school writes two provincial math tests before high school: the Grade 6 Provincial Achievement Test, with no calculator allowed in either part, and the Grade 9 test, where Part A bans calculators and Part B allows them. After Grade 9 comes the choice between the -1 and -2 courses, which decides whether a student reaches Math 30-1 and the programs that need calculus. Alberta&rsquo;s curriculum is changing at the same time, with new K to 6 math already in place and new 7 to 9 math due in September 2027. This page explains those steps from Alberta&rsquo;s own documents, then teaches a modelling lesson on the City&rsquo;s own tree inventory, works a problem from it, and covers contests and prices.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Edmonton.',

  picks: {
    eyebrow: 'Math course picks for Edmonton',
    h2: 'First courses for Edmonton students',
    intro: 'Each covers a stretch of Alberta math. A free lesson confirms the choice once the teacher has seen how the student works.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 6', note: 'Number sense, fractions, decimals and ratio without a calculator, the skills the Grade 6 achievement test asks for in both parts.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 7 to 9', note: 'Integers, exponent laws, linear relations and equations, building toward Part A and Part B of the Grade 9 test.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Math 30-1 alongside the school course, with functions, logarithms and trigonometry. The school grants the Alberta credit, not us.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 6 to 12, contest-minded', note: 'Puzzle problems we write ourselves, from Gauss level up, for students who finish the worksheet and want something harder.' }
    ]
  },

  sections: [
    {
      id: 'pats', tint: '', eyebrow: 'Alberta math in Edmonton',
      h2: 'Two achievement tests and one big choice: Alberta math for an Edmonton student',
      intro: 'Every public school in Edmonton follows the provincial programs of study. The facts below come from Alberta Education and Childcare&rsquo;s 2026 to 2027 bulletins and schedules; each row links to our detailed page.',
      body: [
        { kind: 'table', caption: 'The Grade 6 and Grade 9 mathematics Provincial Achievement Tests for 2026 to 2027, as Alberta Education and Childcare describes them', head: ['Test', 'Part A', 'Part B', 'Dates in 2027'], rows: [
          ['Grade 6 Mathematics', '15 questions on number, designed for 30 minutes (up to 60); no calculator', '40 questions from all organizing ideas, designed for 75 minutes (up to 150); no calculator', 'Part A Monday 14 June; Part B Wednesday 16 June'],
          ['Grade 9 Mathematics', '20 questions; manipulatives allowed, no calculator', '40 questions; calculators and manipulatives allowed', 'Part A 22 January or 15 June; Part B 25 January or 17 June']
        ] },
        { kind: 'p', text: 'Two details change how an Edmonton family should prepare. The Grade 6 bulletin says the use of a calculator is not permitted in Part A or Part B, so fluency with fractions, decimals and ratio is not optional. And for 2026 to 2027 only, the Grade 9 bulletin says classes in schools piloting the new Mathematics 9 curriculum will not be required to write the Grade 9 test; other classes will. Ask the school which applies. Our <a class="cg-inline-link" href="/alberta-grade-6-math-pat-practice">Grade 6 PAT page</a> and <a class="cg-inline-link" href="/alberta-grade-9-math-pat-practice">Grade 9 PAT page</a> have practice sets.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No coaching to the test', p: 'Alberta&rsquo;s Grade 9 parent guide says Alberta Education and Childcare discourages test rehearsal and coaching. We agree: our lessons teach the mathematics the test draws on, and the test result follows from that.' },
          { h3: 'A curriculum in transition', p: 'Alberta implemented new K to 6 math in 2022/2023 and plans mandatory new 7 to 9 math from September 2027. A child in Grade 5 now will meet the new Grade 7 to 9 course. Our <a class="cg-inline-link" href="/alberta-new-math-curriculum-explained">guide to the new curriculum</a> covers it.' },
          { h3: 'Then -1 or -2', p: 'The Math 30-2 bulletin describes it as preparing students for post-secondary programs that do not require the study of calculus. Math 30-1 serves those that do. Our <a class="cg-inline-link" href="/math-30-1-vs-math-30-2">Math 30-1 or 30-2 page</a> sets them side by side.' }
        ] },
        { kind: 'p', text: 'In Grade 12 both Math 30-1 and Math 30-2 end in a diploma exam that Alberta now weights at 30 percent of the final mark, with 70 percent from course work. For the senior years see our <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 tutor page</a>. Lower down, the habit that matters most is the one both achievement tests reward: working without a calculator until the numbers make sense.' },
        { kind: 'callout', h3: 'Alongside school, never instead', p: 'Our lessons follow the course an Edmonton student takes at school. We do not grant Alberta credits, and achievement test results, course marks and diploma results all come through the school and the province. We are not connected with Alberta Education and Childcare, the City of Edmonton or any Edmonton school board.' }
      ]
    },
    {
      id: 'oaks', tint: 'deep', eyebrow: 'Edmonton data lesson',
      h2: 'How fast does an Edmonton bur oak grow? A line, a curve and a warning',
      intro: 'The City of Edmonton keeps an inventory of the boulevard and open space trees it owns, with a planting date and a trunk diameter for each. Students turn one species into a growth model, fit a straight line and an exponential curve, and discover that the curve that fits best is the one that fails first. The averages, fits and projections below are ours.',
      body: [
        { kind: 'p', text: 'The dataset is called Trees, published by the City of Edmonton, which describes it as a map of boulevard and open space trees owned and maintained by the City, adding that not all City-owned trees are captured on this map. When we queried it on 23 October 2026 it held 482,603 trees. Rather than download every record, we asked the City&rsquo;s data service for the average diameter at breast height of bur oaks, grouped by planting year.' },
        { kind: 'callout', h3: 'Half the inventory shares one planting date', p: 'Before any modelling, a check: 258,504 trees, or 53.6 percent of the file, carry the planting date 1 June 1990, against 15,767 for the next most common year, 2014. Among bur oaks, 1,992 trees share that date. A single day cannot account for half a city&rsquo;s trees, so we treat the date as a stand-in for &ldquo;unknown&rdquo; and leave 1990 out. The file does not say what the date means; that reading is ours.' },
        { kind: 'table', caption: 'Bur oaks in the City of Edmonton Trees inventory: our grouped averages by planting year (selected years), with age taken as 2026 minus the planting year. Queried 23 October 2026', head: ['Planted in', 'Age (years)', 'Mean diameter (cm)', 'Trees'], rows: [
          ['2004', '22', '16.0', '169'], ['2008', '18', '12.4', '369'], ['2012', '14', '9.2', '449'],
          ['2016', '10', '8.0', '1,047'], ['2020', '6', '6.0', '975'], ['2024', '2', '5.6', '1,325'], ['2025', '1', '5.6', '1,289']
        ] },
        { kind: 'p', text: 'We kept planting years 2004 to 2025 with at least 50 oaks each: 22 points covering 15,848 trees. A least-squares line gives d = 0.5325t + 3.337, about half a centimetre of trunk a year, with r = 0.950 and R squared 0.903. Fitting a straight line to the logarithm of the diameter gives the exponential model d = 4.697(1.0567)<sup>t</sup>, growth of about 5.67 percent a year, and its R squared is higher, 0.959. Both models come from this short program:<code class="cg-mt-2">' + OAKS + '</code>' },
        { kind: 'table', mt: true, caption: 'Our two models of bur oak trunk diameter, compared inside and far outside the 1 to 22 year range of the data', head: ['Age (years)', 'Linear model (cm)', 'Exponential model (cm)'], rows: [
          ['10', '8.7', '8.2'], ['20', '14.0', '14.2'], ['50', '30.0', '74.0'], ['100', '56.6', '1,167']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Inside the data', p: 'From 1 to 22 years the two models stay within about a centimetre of each other, and the curve follows the young trees slightly better, which is why its R squared is higher. On the evidence of the fit alone, a student would choose the exponential.' },
          { h3: 'Outside the data', p: 'At 100 years the exponential predicts a trunk more than eleven metres across. A model that grows by the same percentage every year cannot describe a living tree for long, however well it fits the first two decades. The linear model&rsquo;s 56.6 cm is at least believable.' },
          { h3: 'What age really means', p: 'We took age as 2026 minus the planting year, but the file does not say when each diameter was measured. If a tree was last measured years ago, its true age at measurement is smaller. Saying so is part of the answer, not an excuse.' }
        ] },
        { kind: 'p', text: 'Contains information licensed under the Open Government Licence - City of Edmonton. The inventory is published by the City of Edmonton from its own records and used under the Open Government Licence - Edmonton, which allows commercial use (<a class="cg-inline-link" href="https://data.edmonton.ca/stories/s/City-of-Edmonton-Open-Data-Terms-of-Use/msh8-if28/">licence</a>, <a class="cg-inline-link" href="https://data.edmonton.ca/d/eecg-fc54">dataset page</a>). The City of Edmonton does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: when does an oak reach 30 centimetres?',
      intro: 'Our own problem for Math 20-1 and Math 30-1 students. It asks the same question of both oak models and shows how a logarithm settles the exponential one.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> Using the linear model d = 0.5325t + 3.337 and the exponential model d = 4.697(1.0567)<sup>t</sup>, with d in centimetres and t in years: (a) Check both against the age-12 average of 8.4 cm. (b) When does each predict a 30 cm trunk? (c) What is the exponential model&rsquo;s doubling time, and why should that worry us?' },
        { kind: 'p', text: '<strong>Step 1, check one point.</strong> At t = 12 the line gives 0.5325 times 12 plus 3.337, about 9.73 cm, and the curve gives 4.697 times 1.0567 to the power 12, about 9.1 cm. The data says 8.4 cm. Both are a little high here, and the curve is closer, which matches its larger R squared.' },
        { kind: 'p', text: '<strong>Step 2, solve the line.</strong> 30 = 0.5325t + 3.337 gives t = (30 &minus; 3.337) / 0.5325, about 50.1 years. That is a Grade 9 skill: undo the addition, then the multiplication.' },
        { kind: 'p', text: '<strong>Step 3, solve the curve with logarithms.</strong> 30 = 4.697(1.0567)<sup>t</sup> means 1.0567<sup>t</sup> = 30 / 4.697. Taking logarithms of both sides, t = log(30 / 4.697) / log 1.0567, about 33.6 years. This is the Math 30-1 move: a logarithm brings the unknown down from the exponent.' },
        { kind: 'p', text: '<strong>Step 4, find the doubling time.</strong> Solving 1.0567<sup>t</sup> = 2 gives t = log 2 / log 1.0567, about 12.6 years. A model that doubles a trunk every 12.6 years forever is what produced the 1,167 cm prediction at 100 years. The doubling time is the quickest way to see that an exponential model has a limited life.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Find the age at which the two models give the same diameter, by graphing both. (2) Rewrite the exponential model as d = 4.697e<sup>kt</sup> and find k. (3) In two sentences, say which model you would give a city forester planning 40 years ahead, and why. We go through your answers in the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Edmonton students',
      h2: 'Contests for younger Edmonton students, and the high school ladder',
      intro: 'Canada&rsquo;s most widely written school math contests come from CEMC, a centre at the University of Waterloo, and some are aimed at children still in elementary school. We took the dates from CEMC&rsquo;s site on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC options for Edmonton students in 2026 to 2027, youngest first, with the dates CEMC gives for the Americas', head: ['Grades', 'Contest or resource', 'What CEMC says', 'Date'], rows: [
          ['Grades 6 to 8', 'Team Up Challenge', 'A collaborative mathematics resource for Grades 6 to 8', 'Tuesday 1 June 2027 or later'],
          ['Grades 7 and 8', 'Gauss', 'Motivated students in lower grades are welcome to write', '10 to 21 May 2027'],
          ['Grades 9, 10, 11', 'Pascal, Cayley, Fermat', 'One hour of multiple-choice problems, one contest per grade', '23 and 24 February 2027']
        ] },
        { kind: 'p', text: 'For an Edmonton Grade 6 student, the timing works neatly: the Grade 6 achievement test falls on 14 and 16 June 2027, a few weeks after Gauss and around the Team Up Challenge. A capable Grade 6 student can try Gauss early, since CEMC welcomes motivated younger writers, and the practice in number sense helps on the no-calculator achievement test too. CEMC is clear that its contests are not exams and have no pass mark.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Through the school', p: 'A child cannot sign up for a CEMC contest directly; entry always goes through a school. If the Edmonton school a child attends is not involved, CEMC advises asking a different nearby school.' },
          { h3: 'Free archive', p: 'CEMC keeps ten years of past contests free online with no sign-up. Our <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation page</a> explains how we use them for Grades 6 to 8.' },
          { h3: 'Our problems only', p: 'The contest material in our lessons is original, and marked as ours. CEMC&rsquo;s own papers and solutions are never copied, and we have no link with CEMC.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Edmonton',
      h2: 'Math tutor prices in Edmonton: how to tell value from a low number',
      intro: 'Our fees are listed in the fees section in your own currency, so no figures appear here. These are the comparisons we suggest an Edmonton family makes.',
      body: [
        { kind: 'table', caption: 'Comparing math help for an Edmonton student. Our answers are ours; we do not list other providers&rsquo; rates', head: ['What to compare', 'With us', 'What to look for elsewhere'], rows: [
          ['Lessons in a month', 'Eight live classes', 'The real number of sessions, not the advertised one'],
          ['Group size', 'Fifteen to twenty at one level, or one to one', 'Whether groups are set by level'],
          ['Alberta knowledge', 'PATs, 20-1 and 20-2, 30-1 and 30-2', 'A tutor who knows the -1 and -2 courses apart'],
          ['Calculator habits', 'No-calculator fluency taught on purpose', 'Practice that matches the Grade 6 and Grade 9 rules'],
          ['Trial', 'One free live lesson', 'A chance to see the teaching first']
        ] },
        { kind: 'p', text: 'Value is the cost of a lesson divided by how much the student actually learns in it, which is hard to measure but easy to observe: does the student solve, or watch? For most Edmonton students a group class at one level keeps progress steady. One to one is the better buy for a short burst before an achievement test or a diploma sitting, or for a student moving from a -2 course to a -1 course.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to Math 30-1 in Edmonton',
    intro: 'Treat the grade bands as rough guides. The free lesson decides the starting point from what the student can do.',
    cols: [
      { band: 'Kindergarten to Grade 3', h3: 'Number sense', p: 'Counting, place value, addition and subtraction strategies, no calculator in sight.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 6', h3: 'Ready for Grade 6', p: 'Fractions, decimals, ratio and powers, the content of the Grade 6 test&rsquo;s Part A.', courses: ['elementary-mathematics-complete-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Grades 7 to 9', h3: 'Toward Grade 9', p: 'Integers, exponent laws, linear relations and equations for both parts of the Grade 9 test.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 10 to 12', h3: '-1 or -2, then 30', p: 'Grade 10 math, then 20-1 or 20-2, then 30-1 or 30-2, with logarithm and modelling work like the oak lesson.', courses: ['complete-high-school-mathematics-mastery', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Should an Edmonton student let an AI build the model?',
    intro: 'Only after they could build it themselves. Otherwise they cannot tell a good model from a bad one.',
    p1: 'Ask an AI tool for a model of oak growth and it may pick the exponential because its R squared is higher, then predict an eleven-metre trunk without blinking. It is also unlikely to notice that half the inventory shares one planting date. A student who has built both models knows the question needs judgment, which no amount of computing power supplies.',
    p2: 'Our teachers have Edmonton students predict, calculate and then defend a result in words. AI tools come later, and only for students of an age our policy allows, as a way of checking work already done by hand. Work submitted for marks at school stays the student&rsquo;s alone.',
    closer: 'The Grade 6 and Grade 9 tests both ban calculators for a reason: number sense is what tells you when an answer, from a person or a machine, is wrong.',
    blogAnchor: 'why understanding still beats copying when AI is everywhere'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math for Edmonton students',
    intro: 'Edmonton winters make an evening drive to a tutor hard work. Online lessons happen at home.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'One Alberta clock', p: 'Alberta&rsquo;s official time is UTC-6 all year, so Edmonton lessons keep the same time through winter. Teachers work on India time, 11 hours 30 minutes ahead, and invitations name the Edmonton time.' },
      { h3: 'Working in view', p: 'Students write each step on a board the teacher sees, so a slip in a slope or an exponent is caught where it happens.' },
      { h3: 'No-calculator practice', p: 'For students facing the Grade 6 test or Part A of the Grade 9 test, lessons include calculator-free work on purpose.' },
      { h3: 'Edmonton numbers', p: 'The form accepts 780, 587, 825 and 368 numbers. Enter ten digits; the +1 is already filled in.' },
      { h3: 'Start free', p: 'The first lesson is free and complete, with a suggested course, level and time at the end and no card needed.' }
    ],
    spec: { title: 'No Edmonton centre', p: 'Modern Age Coders has no learning centre in Edmonton and claims none. Lessons are live online, taught from India; a student needs a computer, a microphone and a dependable connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Edmonton families',
    intro: 'Free first lesson, then two monthly options, all priced for where you live.',
    first: 'A full live lesson free of charge, ending with a suggested course and level.',
    group: 'The monthly fee for eight live classes in a group of fifteen to twenty at one level.',
    private: 'The monthly fee for eight one-to-one lessons at times that suit you.',
    closer: 'Edmonton families pay what families anywhere in Canada pay. We bill only after the free lesson, once a course and time are agreed; the pricing page covers holidays and missed lessons.'
  },

  reviewsH2: 'What Google reviewers say about our teaching',

  book: {
    h2: 'Book a free math lesson in Edmonton',
    intro: 'Tell us the grade and, from Grade 10, the course. A Grade 4 child might start with fraction puzzles; a Grade 11 student might start with the oak table and two models.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Edmonton.'
  },

  faq: {
    h2: 'Edmonton math tutoring questions',
    intro: 'Answers to the questions Edmonton families send us most.',
    items: [
      { q: 'Is there a math tutor in Edmonton with Modern Age Coders?', a: 'Yes, online. There is no Edmonton office. A teacher teaches live, either to one student or to a group of fifteen to twenty at one level.' },
      { q: 'How much does math tutoring in Edmonton cost?', a: 'Our fees appear lower on this page in your own currency: a free first lesson, then one monthly price for group classes and another for one-to-one. Nothing is paid before the free lesson.' },
      { q: 'When is the Grade 6 math achievement test?', a: 'Alberta\'s 2026 to 2027 schedule lists Part A on Monday 14 June 2027 and Part B on Wednesday 16 June 2027. No calculator is allowed in either part.' },
      { q: 'Does my child have to write the Grade 9 math PAT this year?', a: 'Most students do. For 2026 to 2027, classes in schools piloting the new Mathematics 9 curriculum are not required to write it. Ask the school which applies to your child.' },
      { q: 'Do you coach students for the PATs?', a: 'We teach the mathematics, not test tricks. Alberta\'s Grade 9 parent guide discourages test rehearsal and coaching, and teaching the content well is what helps anyway.' },
      { q: 'Should my teen take Math 30-1 or Math 30-2?', a: 'It depends on the plan after school. Alberta describes Math 30-2 as preparing students for programs that do not require calculus; Math 30-1 serves those that do. Our comparison page sets out the details.' },
      { q: 'Will these lessons count toward Alberta credits?', a: 'Not at all: we do not grant Alberta credits. The school awards credits and marks, and the province sets and runs the tests and diploma exams.' },
      { q: 'What time are lessons for Edmonton students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta does not change its clocks, so times stay the same all year.' },
      { q: 'Do you teach students in St. Albert, Sherwood Park and Spruce Grove?', a: 'We do. Families from all three communities log in to the very same live classes that Edmonton students attend.' },
      { q: 'Can a Grade 5 student try a contest?', a: 'Yes. CEMC welcomes motivated younger students at Gauss, and its Team Up Challenge is for Grades 6 to 8. We prepare students with puzzles we write ourselves.' }
    ]
  },

  next: {
    eyebrow: 'More for Edmonton and Canada',
    h2: 'Other pages for Edmonton math students',
    html: 'Two wider pages sit above this one: <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring across Canada</a> and <a class="cg-inline-link" href="/coding-classes-in-alberta">our Alberta page</a>. Senior students can read <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">Math 30-1 diploma exam preparation</a>, and younger students <a class="cg-inline-link" href="/math-classes-for-kids-in-canada">math classes for kids in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Edmonton math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/alberta-grade-6-math-pat-practice', label: 'Grade 6 PAT' },
    { href: '/alberta-grade-9-math-pat-practice', label: 'Grade 9 PAT' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtue .cg-hero h1 { font-weight: 690; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-mtue .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-mtue .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-mtue .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtue .cg-table caption { text-align: left; font-weight: 610; }
.cg-root.cg-mtue #oaks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-mtue #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtue .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Alberta, read 22 and 23 October 2026 from Alberta Education and Childcare documents saved raw: 2026-2027 Mathematics 6 and Mathematics 9 Subject Bulletins (parts, question counts, timing, calculator rules, the 2026/27 pilot exemption); Grade 9 Parent Guide (discourages test rehearsal and coaching); PAT schedule (Grade 6 Part A 14 June, Part B 16 June 2027; Grade 9 22 and 25 January, 15 and 17 June 2027); Mathematics 30-2 Information Bulletin (programs that do not require calculus); K-6 math 2022/2023 and draft 7-9 mandatory September 2027; diploma weighting 30%; Alberta UTC-6 all year; area codes 780, 587, 825, 368 (facts-geo.md); CEMC Gauss, Team Up Challenge and PCF dates and the through-a-school rule.',
    localProject: 'City of Edmonton open data, Trees (City-sourced; Open Government Licence - Edmonton, commercial use allowed), grouped SODA queries on 23 October 2026 analysed with our scripts oak.py and worked.py (python -I): 482,603 trees, 258,504 dated 1 June 1990 (53.6%) and treated as unknown; bur oak 17,971 trees; planting years 2004 to 2025, 22 points, 15,848 trees; linear fit d = 0.5325t + 3.337, r = 0.950, R2 0.903; exponential fit d = 4.697(1.0567)^t, R2 0.959; 100-year projections 56.6 against 1,167 cm; 30 cm at 50.1 or 33.6 years; doubling time 12.6 years. Labelled as ours. Lesson family: linear against exponential models and extrapolation.',
    requiredMentions: [
      '258,504 trees, or 53.6 percent',
      'd = 0.5325t + 3.337',
      'd = 4.697(1.0567)',
      'R squared 0.903',
      'its R squared is higher, 0.959',
      '22 points covering 15,848 trees',
      'about 50.1 years',
      'about 12.6 years',
      'a trunk more than eleven metres across',
      'Part A Monday 14 June; Part B Wednesday 16 June'
    ],
    sources: [
      { claim: 'City of Edmonton open data: Trees inventory (description, City attribution, internally sourced, monthly updates).', url: 'https://data.edmonton.ca/d/eecg-fc54' },
      { claim: 'City of Edmonton: Open Government Licence - Edmonton, Version 1.0 (commercial use, attribution, non-endorsement).', url: 'https://data.edmonton.ca/stories/s/City-of-Edmonton-Open-Data-Terms-of-Use/msh8-if28/' },
      { claim: 'Alberta Education and Childcare: 2026-2027 Mathematics 6 Subject Bulletin.', url: 'https://www.alberta.ca/system/files/edc-math-6-subject-bulletin-2026-27.pdf' },
      { claim: 'Alberta Education and Childcare: 2026-2027 Mathematics 9 Subject Bulletin.', url: 'https://www.alberta.ca/system/files/edc-math-9-subject-bulletin-2026-27.pdf' },
      { claim: 'Alberta Education and Childcare: PAT administration schedules 2026-2027.', url: 'https://www.alberta.ca/system/files/ecc-pat-administration-schedules.pdf' },
      { claim: 'alberta.ca: Provincial Achievement Tests.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Alberta Education and Childcare: Mathematics 30-2 Information Bulletin.', url: 'https://www.alberta.ca/system/files/ecc-math-30-2-info-bulletin.pdf' },
      { claim: 'CEMC: contest dates for 2026/27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Edmonton population figure: StatCan was not reachable live.',
      'The EPCOR-supplied per capita water file: withdrawn on 23 October 2026 as third-party data under the licence exemption.',
      'What the 1 June 1990 planting date means: the file does not say; the page treats it as unknown and labels that reading as ours.',
      'That the ages are exact: refused; the file gives no measurement date, so age is our approximation.',
      'Tree condition, pests or disease: the inventory has a condition column; it is not used.',
      'That our lessons earn Alberta credits or change PAT or diploma results: refused.',
      'Names of Edmonton schools, board results or private people: not used.',
      'Any affiliation with the City of Edmonton, Alberta Education and Childcare or CEMC.'
    ]
  }
};
