'use strict';
// Math tutor, Oakville (cg- city page, Canada cluster Wave 2, row 165). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: two-variable relationships and unit rates through Ontario math, set out as course-by-course alignment rows and
// routed to the live spokes; one MDM4U lesson on correlation and what eight placeholder rows do to it, on the Town of
// Oakville's 2017 facility energy file; an algebra worked problem that recovers the hidden gas conversion factor; the Beaver
// Computing Challenge and Problem of the Week slice; a price section framed as a monthly budget.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; Oakville files in ca/src-pilots/math-tutor-oakville/):
//  - Ontario DCP API: MTH1W (2021) C2.2 "create code by decomposing situations into computational steps in order to
//    represent mathematical concepts and relationships"; MDM4U, MCR3U, MHF4U, MCV4U titles; MHF4U before or with MCV4U.
//    EQAO windows for 2026-27 (en dashes in source).
//  - CEMC BCC: "North and South America: Monday, November 9, 2026 to Friday, November 20, 2026"; ordering deadline "Monday,
//    October 26, 2026"; levels 5/6 ("Grade 6 or below"), 7/8, 9/10; "12 multiple-choice questions out of a total of 60
//    (Grade 5/6)", "15 multiple-choice questions out of a total of 90"; "Time allowed for completion is 45 minutes."; "only
//    require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"; English only.
//    POTW: "e-mailed to educators for use with their students from Grades 3 to 12"; "New problems are sent every Thursday,
//    and their solutions are sent one week later." Through a school; free resources.
//  - facts-geo.md: Oakville is in the Toronto CMA; 905 belt overlay 289/365/742/905; Ontario UTC-5 from 1 November 2026.
//  - Town of Oakville, "Energy Consumption at Town Facilities (aggregate) 2017" item a61e6426a2354815ae77294fb6beec12 (saved):
//    "Energy consumption data for town-owned infrastructure to meet the Green Energy Act 2009 (O. Reg. 397/11) annual
//    reporting requirements."; licenseInfo "Town of Oakville Open Data License" linking the licence page (saved): "including
//    for commercial purposes"; attribution "Contains information licensed under the Open Government Licence - Town of
//    Oakville." (em dash in the source rendered as a hyphen here). Layer
//    Energy_Consumption_Corporate_2017_Aggregate/FeatureServer queried 22 October 2026 (energy-2017.json).
// Our own calculations (energy.py, energy_check.py, page_snippet.py, python -I): 55 rows; units Square feet, kWh, Cubic
// Meter; 54 rows with floor area and electricity; area against electricity r 0.721, slope 16.01 kWh per sq ft; eight rows
// (ObjectId 7, 9, 30, 37, 39, 49, 50, 53, all type Other) have a floor area of 1 sq ft; without them n 46, r 0.894, slope
// 17.32 kWh per sq ft, intercept -30,655; energy intensity median 41.5 (54 rows) and 32.72 (46 rows); largest intensity
// 5,190,942.75 on a 1 sq ft row; for all 40 rows with gas the implied factor is 10.628 ekWh per cubic metre; ObjectId 2
// (community centre, 9,000 sq ft, 24,380.63 kWh, 6,061.24 cubic metres, intensity 9.86646) gives 10.6278; electricity-only
// rows have intensity = kWh / area; Avg_hrs_wk median 65, 14 rows with 1, maximum 168.
// Lesson family: correlation and linear regression on two-variable data; the effect of placeholder values; solving a
// linear equation for an unknown constant.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import json, math',
  '',
  'def pearson(xs, ys):',
  '    n = len(xs)',
  '    mx, my = sum(xs) / n, sum(ys) / n',
  '    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys))',
  '    sxx = sum((x - mx) ** 2 for x in xs)',
  '    syy = sum((y - my) ** 2 for y in ys)',
  '    return sxy / math.sqrt(sxx * syy), sxy / sxx',
  '',
  'rows = [f["attributes"] for f in json.load(open("energy-2017.json"))["features"]]',
  'usable = [r for r in rows if r["Total_Floor_Area"] and r["Electricity___Quantity"]]',
  '',
  'for label, keep in (("all usable rows", usable),',
  '                    ("floor area of 100 sq ft or more", [r for r in usable if r["Total_Floor_Area"] >= 100])):',
  '    area = [r["Total_Floor_Area"] for r in keep]',
  '    kwh = [r["Electricity___Quantity"] for r in keep]',
  '    r, slope = pearson(area, kwh)',
  '    print(label, "| n =", len(keep), "| r =", round(r, 3), "| kWh per sq ft =", round(slope, 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'OAKVILLE MATH', label: 'Math tutor in Oakville', blurb: 'Math help for Oakville students with two-variable data traced to MDM4U, a Town of Oakville energy file lesson on correlation, and the Beaver Computing Challenge.' },
  market: CA,
  slug: 'math-tutor-oakville',
  code: 'mto',
  accent: '#29298A',
  accentRationale: 'Oakville math: a deep lake-ink indigo blue, #29298A, allocated for this row; the nearest other Canada accent is #36298A, 13.0 RGB units away (Euclidean); contrast 11.14 on the paper #FBF8F2 (10.48 and 9.58 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Oakville',
    eyebrow: 'Math tutor, Oakville, Ontario',
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
  routeLabel: 'Math tutor in Oakville',
  title: 'Math Tutor Oakville | Live Online Math, Grade 1 to Grade 12',
  description: 'Live online math tutoring for Oakville students: Ontario courses up to MDM4U and MCV4U, a Town of Oakville energy lesson on correlation, and the 2026 BCC.',
  ogDescription: 'Eight rows in an Oakville energy file list a floor area of one square foot. Remove them and the correlation jumps from 0.72 to 0.89. A math tutor page on why.',
  twitterDescription: 'Oakville math tutoring, live online, with a real correlation lesson on Town of Oakville data.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Oakville Students',
    description: 'Live online math for Oakville students from Grade 1 to Grade 12: number sense, MTH1W, MCR3U, MHF4U, MCV4U and MDM4U support, with Beaver Computing Challenge and Waterloo contest preparation.'
  },

  h1: 'An Oakville math tutor, live online',
  capsuleQ: 'How can an Oakville student get live math tutoring?',
  capsule: 'Oakville students from Grade 1 to Grade 12 take live online math with Modern Age Coders, in a class of 15 to 20 working at one level or one to one with a teacher. Older students mostly join Ontario Grade 12 University Math (MHF4U and MCV4U) or Waterloo Math Contests: Gauss to Euclid; younger ones join a maths course matched to their age. The first lesson is free.',
  lead: 'Much of the math an Oakville student meets after Grade 8 asks the same question in different clothes: when one quantity changes, what happens to another? Unit rates in Grade 7, linear relations in MTH1W, functions in Grade 11 and correlation in MDM4U are all versions of it. This page lines those courses up so a family can see where their student is on the path, with a link to our detailed page for each. Then it works through a real example from the Town of Oakville&rsquo;s own open data: the energy used by Town facilities in 2017, where bigger buildings use more electricity, as expected, until eight strange rows make the relationship look weaker than it is.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Oakville.',

  picks: {
    eyebrow: 'Math course picks for Oakville',
    h2: 'Four ways into math with us for Oakville students',
    intro: 'A starting course for each stage. In the free lesson the teacher checks the fit before you decide anything.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Operations, fractions and measurement, with children asked to say how they know, not only what the answer is.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Rates, tables and graphs explored by writing small Python programs, the same habit MTH1W builds into its coding expectations.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Support for Advanced Functions and Calculus and Vectors beside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Practice for the CEMC math contests, Gauss to Euclid, built from original problems.' }
    ]
  },

  sections: [
    {
      id: 'relations', tint: '', eyebrow: 'Ontario math in Oakville',
      h2: 'One question, many courses: how Ontario math studies two changing quantities',
      intro: 'Oakville public schools teach the Ontario curriculum. Each row below names a stage, what the curriculum asks for in our summary, and the page where we teach that stage in depth.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grades 1 to 6', req: 'Patterns, measurement and early data; EQAO tests Grades 3 and 6 in a window it lists as 4 May to 8 June 2027.', ours: 'See our <a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3</a> and <a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6</a> practice pages, and <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Grade 6 math and coding</a>.' },
          { code: 'Grades 7 and 8', req: 'Unit rates and proportional relationships: so many of this for each one of that.', ours: 'Our <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss page</a> uses many rate problems at this level.' },
          { code: 'MTH1W', req: 'Linear relations and coding that decomposes situations into computational steps; EQAO Grade 9 math from 12 January to 5 February 2027.', ours: 'Read <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a> and <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>.' },
          { code: 'MCR3U / MCF3M', req: 'Functions: one input, one output, and the graph that shows the rule.', ours: 'See <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a> or compare <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M and MCR3U</a>.' },
          { code: 'MDM4U', req: 'Two-variable data: scatter plots, correlation and regression, alongside counting and probability.', ours: 'Our <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U page</a> goes further; the energy lesson below is a sample.' },
          { code: 'MHF4U / MCV4U', req: 'Rates of change of non-linear functions, then derivatives; MHF4U comes before or with MCV4U.', ours: 'See <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>.' }
        ] },
        { kind: 'p', text: 'The MTH1W row deserves a closer look, because it explains why the lesson below uses code. The ministry&rsquo;s coding expectation C2.2 asks Grade 9 students to create code by decomposing situations into computational steps in order to represent mathematical concepts and relationships. In practice, that means writing the steps of a calculation clearly enough that a computer can follow them, which is also the clearest way for a student to show a teacher that they understand the steps.' },
        { kind: 'p', text: 'MDM4U is usually the last place an Oakville student meets the full picture: two variables, a scatter plot, a correlation coefficient and a line. It is also where the most important caution in statistics is taught, that a summary number is only as trustworthy as the rows behind it.' },
        { kind: 'callout', h3: 'We support the school course', p: 'We teach next to the school course and we do not grant Ontario credits; the credit and the mark are the school&rsquo;s. We are not connected with the Ontario Ministry of Education, EQAO or any Oakville school board.' }
      ]
    },
    {
      id: 'energy', tint: 'deep', eyebrow: 'Oakville data lesson',
      h2: 'Bigger buildings, more electricity: correlation in Oakville&rsquo;s 2017 facility energy file',
      intro: 'The Town of Oakville publishes the energy used by its own facilities. We took the 2017 file and asked an MDM4U question: how strongly does floor area predict electricity use? Every statistic below is our calculation.',
      body: [
        { kind: 'p', text: 'The Town describes the file as energy consumption data for town-owned infrastructure to meet the Green Energy Act 2009 (O. Reg. 397/11) annual reporting requirements. Each row is a facility, with its type, floor area in square feet, average hours open per week, electricity in kWh, natural gas in cubic metres and an energy intensity in equivalent kWh per square foot. Our download had 55 rows, of which 54 list both a floor area and an electricity figure.' },
        { kind: 'table', caption: 'Our statistics on the Town of Oakville Energy Consumption at Town Facilities (aggregate) 2017 layer, downloaded 22 October 2026', head: ['Measure', 'All 54 usable rows', 'Without the eight 1 sq ft rows (46)'], rows: [
          ['Correlation, floor area against electricity', 'r = 0.721', 'r = 0.894'],
          ['Least-squares slope', '16.01 kWh per sq ft', '17.32 kWh per sq ft'],
          ['Median energy intensity', '41.5 ekWh per sq ft', '32.72 ekWh per sq ft'],
          ['Largest energy intensity', '5,190,942.75 ekWh per sq ft', '98.17 ekWh per sq ft']
        ] },
        { kind: 'p', text: 'Eight rows, all of type Other, give a floor area of exactly 1 square foot. No Town building is one square foot, so the 1 is a placeholder, and the file does not say what those rows measure. Left in, those rows sit at the far left of the scatter plot with large electricity values, pulling the correlation down to 0.721 and producing an energy intensity in the millions. Taken out, with the reason stated, the relationship is plainly strong. The program below computes both versions:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Say why a row goes', p: 'Removing data to improve r is cheating; removing data because it cannot be a floor area is cleaning. The difference is the stated reason, and a student should write it down before running the numbers again.' },
          { h3: 'Strong is not causal', p: 'An r of 0.894 says bigger facilities tend to use more electricity. It does not say why: hours open, ice plants and pools all matter. Six of the rows are an indoor pool or ice rinks, which are energy-hungry for their size.' },
          { h3: 'Hours tell a story too', p: 'The average-hours field has a median of 65 hours a week and a maximum of 168, which is every hour of the week. Fourteen rows say 1 hour, probably another placeholder, and a good report flags them.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains information licensed under the Open Government Licence - Town of Oakville. Data from the Town of Oakville open data portal (<a class="cg-inline-link" href="https://www.oakville.ca/town-hall/town-studies-plans-projects/town-initiatives/open-data/open-data-licence/">licence</a>); every statistic here is ours. The Town of Oakville does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Find the hidden number: how the Town turns gas into equivalent kWh',
      intro: 'The energy intensity column combines electricity and gas into one unit, but the file never says how. A Grade 9 or 10 student can recover the rule with one equation. The data are the Town&rsquo;s; the problem and solution are ours.',
      body: [
        { kind: 'table', caption: 'One row of the 2017 file: a Town community centre, ObjectId 2', head: ['Field', 'Value'], rows: [
          ['Floor area', '9,000 sq ft'],
          ['Electricity', '24,380.63 kWh'],
          ['Natural gas', '6,061.24 cubic metres'],
          ['Energy intensity', '9.86646 ekWh per sq ft']
        ] },
        { kind: 'p', text: '<strong>Step 1, guess the model.</strong> For rows with no gas, we found the intensity is exactly electricity divided by floor area. So suppose that for every row, intensity = (electricity + f &times; gas) &divide; area, where f is an unknown number of equivalent kWh per cubic metre of gas.' },
        { kind: 'p', text: '<strong>Step 2, substitute.</strong> 9.86646 = (24,380.63 + 6,061.24f) &divide; 9,000. Multiply both sides by 9,000: 88,798.14 = 24,380.63 + 6,061.24f.' },
        { kind: 'p', text: '<strong>Step 3, solve.</strong> 6,061.24f = 88,798.14 &minus; 24,380.63 = 64,417.51, so f = 64,417.51 &divide; 6,061.24 &asymp; 10.628.' },
        { kind: 'p', text: '<strong>Step 4, test it on other rows.</strong> One row could be a coincidence. Our program applied the same calculation to all 40 rows with a gas figure, and every one gave 10.628 to three decimal places. A constant that survives forty tests is very likely the conversion factor the Town used. We still call it our inference, because the file does not state it.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Using f = 10.628, compute the energy intensity of a facility with 20,000 sq ft, 300,000 kWh of electricity and 15,000 cubic metres of gas. Then explain in a sentence why intensity, not total energy, is the fairer way to compare a small library with a large arena.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Oakville students',
      h2: 'The Beaver Computing Challenge and the Problem of the Week',
      intro: 'Not every Waterloo resource is a heavy contest. Two from CEMC suit Oakville students who are curious rather than competitive, and one starts in a few weeks.',
      body: [
        { kind: 'table', caption: 'The 2026 Beaver Computing Challenge, as CEMC lists it (read 22 October 2026)', head: ['Level', 'Who may write it', 'Paper'], rows: [
          ['Grade 5/6', 'Students in Grade 6 or below', '12 multiple-choice questions, total 60, in 45 minutes'],
          ['Grade 7/8', 'Grade 8 or below', '15 multiple-choice questions, total 90, in 45 minutes'],
          ['Grade 9/10', 'Grade 10 or below', '15 multiple-choice questions, total 90, in 45 minutes']
        ] },
        { kind: 'p', text: 'CEMC runs the BCC from Monday 9 November to Friday 20 November 2026, in English only, with a school ordering deadline of Monday 26 October 2026. Despite the name, it needs no programming: CEMC says the problems only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces. They are logic and pattern puzzles, the same reasoning a student uses to spot the 1 sq ft rows above. Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> has original practice tasks.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Problem of the Week', p: 'CEMC e-mails problems to educators for students from Grades 3 to 12. New problems go out every Thursday and solutions follow a week later, so an Oakville student can ask a teacher to share them.' },
          { h3: 'Free and open', p: 'CEMC&rsquo;s resources, including ten years of past contests, need no registration or fee. Our <a class="cg-inline-link" href="/cemc-free-resources-guide">guide to CEMC&rsquo;s free resources</a> explains what is where.' },
          { h3: 'Contests run through schools', p: 'A student cannot enter a CEMC contest alone. Oakville families ask the school, or another local school if theirs is not taking part.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo. Their problems and solutions are never copied here; the problems we teach with are ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Oakville',
      h2: 'Thinking about a math tutor price in Oakville as a monthly budget',
      intro: 'The fees section of this page shows what we charge, in your own currency. This section explains how to compare it with other math help in Oakville.',
      body: [
        { kind: 'p', text: 'Families often compare an hourly rate from a home tutor with a monthly fee from an online school, which is like comparing energy totals instead of energy intensity: the units do not match. Convert everything to the same unit first, live teaching per month, then compare.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Live online class', p: 'Our class puts 15 to 20 students at one level with one teacher, eight live lessons a month, for a monthly fee. It suits a student who is broadly on track and wants regular, structured practice.' },
          { h3: 'One-to-one online', p: 'A teacher for one student at times you choose, for a higher monthly fee. Worth it for a specific gap, an ambitious goal or exam weeks.' },
          { h3: 'Home tutor', p: 'In-home tutoring is normally billed per visit or per hour, and the visit includes the tutor&rsquo;s drive. It makes sense when a student settles better with an adult sitting beside them.' }
        ] },
        { kind: 'p', text: 'After that, look inside the hours. A lesson tied to the student&rsquo;s actual Ontario course, homework that someone reads, and a teacher who makes the student talk through each step are worth more than a lower rate without them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to correlation and calculus',
    intro: 'Bands are rough. The real starting point is found in the free lesson, from what the student can do and explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Number sense', p: 'Counting, place value and the meaning of each operation, said out loud.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Rates and patterns', p: 'Fractions, unit rates and patterns, explored with small programs.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 9 and 10', h3: 'Linear relations', p: 'MTH1W and Grade 10 algebra and analytic geometry.', courses: ['complete-high-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 11 and 12', h3: 'Functions, data, calculus', p: 'MCR3U, MDM4U, MHF4U and MCV4U, beside the school course.', courses: ['statistics-probability-maths-course', 'ontario-grade-12-university-math-mhf4u-mcv4u-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'If AI can compute r, what is left for an Oakville student to learn?',
    intro: 'Deciding whether r means anything. That part has not been automated.',
    p1: 'A spreadsheet or AI assistant will report r = 0.721 for the energy file in an instant. It will not stop to ask why eight buildings are one square foot, or whether an intensity of five million makes physical sense. The student who asks those questions is doing statistics; the one who copies the number is not.',
    p2: 'In our lessons the student plots first, predicts the shape, then computes and compares, and always explain the result in words. School work that will be marked is written by the student.',
    closer: 'MDM4U is a course in judging evidence. Tools make the arithmetic faster; they do not make the judgement for you.',
    blogAnchor: 'why the thinking behind the numbers still matters'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math lessons across Oakville',
    intro: 'Bronte, Glen Abbey or Old Oakville: the lesson comes to the student at home, so nobody drives along Trafalgar Road at rush hour.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time, both changes', p: 'An Oakville evening class shifts relative to India when Ontario changes clocks, on 1 November 2026 (to UTC-5) and 14 March 2027 (to UTC-4). We send every time in Eastern time, with a reminder before each switch.' },
      { h3: 'Scatter plots on screen', p: 'Students plot and annotate data on a shared board, so the teacher sees which points they trust and which they question.' },
      { h3: 'Following the course code', p: 'Lessons track the Ontario course on the student&rsquo;s timetable, whether MTH1W, MCR3U, MDM4U or MCV4U.' },
      { h3: 'Oakville numbers', p: 'Phone numbers beginning 905, 289, 365 or 742 work in the form; enter the ten digits and we supply the country code.' },
      { h3: 'One lesson free', p: 'The first lesson is a real lesson at the student&rsquo;s level and ends with a recommended course. We take no card details.' }
    ],
    spec: { title: 'No Oakville centre', p: 'Modern Age Coders has no tutoring centre in Oakville and claims none. Lessons are live and online, taught from India, and a student needs a computer with a microphone and a reliable connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Oakville',
    intro: 'Shown in the currency for where you live.',
    first: 'A complete live lesson for free, finishing with the course and level we recommend.',
    group: 'The monthly fee for a live class of 15 to 20 students working at one level.',
    private: 'The monthly fee for a teacher and one student, at hours you choose.',
    closer: 'The fee is the same across Canada, Oakville included. Nothing is charged before the free lesson, and billing starts only once you have chosen a course and a time.'
  },

  reviewsH2: 'Reviews of Modern Age Coders on Google',

  book: {
    h2: 'Book a free math lesson in Oakville',
    intro: 'Share your student&rsquo;s grade, plus the course code in high school. A Grade 1 child might start with a counting game; a Grade 12 MDM4U student might start with the energy file.',
    success: 'Thank you. The team will be in touch soon about a math class for Oakville.'
  },

  faq: {
    h2: 'Oakville math tutoring questions',
    intro: 'Short answers to what Oakville families ask us most.',
    items: [
      { q: 'Is there a math tutor in Oakville I can book with you?', a: 'Yes, online. We have no Oakville building; students learn live from home with a teacher, in a class of 15 to 20 at one level or one to one.' },
      { q: 'What is the price of a math tutor in Oakville with you?', a: 'Our fees section shows the free first lesson, the monthly class fee and the monthly one-to-one fee, all in your own currency. This answer includes no figures by design.' },
      { q: 'Should we choose an online class or a home tutor?', a: 'It depends on the student. A home tutor usually bills by the hour and travels to you. Our live class gives 15 to 20 students at one level a teacher for a monthly fee, and our one-to-one online lessons give one student a teacher alone.' },
      { q: 'Do you help with MDM4U data management?', a: 'Yes. We teach correlation, regression, probability and counting from real data, as in the energy lesson on this page, alongside the school course.' },
      { q: 'Can my child earn an Ontario credit with you?', a: 'No. Credits are granted by schools, not by us. Our lessons support the school course the student is taking.' },
      { q: 'Is the Beaver Computing Challenge only for coders?', a: 'No. CEMC says it only needs concepts from the math curriculum. It runs from 9 to 20 November 2026 and is entered through a school.' },
      { q: 'Do you prepare students for the Waterloo math contests?', a: 'Yes, from Gauss in Grades 7 and 8 to Euclid in Grade 12, using original problems and CEMC\'s free past papers.' },
      { q: 'What times are classes for Oakville students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We state each time in Eastern time.' },
      { q: 'From what age do you teach math?', a: 'From about age 6, with short, friendly lessons on number sense and explaining answers.' },
      { q: 'My teen is fine with formulas but struggles with word problems. Can you help?', a: 'Yes. Word problems are about choosing the model, as in the gas-factor problem above, and we practise setting up equations before solving them.' }
    ]
  },

  next: {
    eyebrow: 'More for Oakville and Canada',
    h2: 'Related math pages for Oakville families',
    html: 'Our national page is <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>. Related course pages are <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>, <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a> and <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>. For the province, read <a class="cg-inline-link" href="/coding-classes-in-ontario">our Ontario page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oakville math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mdm4u-data-management-tutor', label: 'MDM4U help' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mto .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-mto .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mto .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-mto .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mto .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-mto .cg-align-code { font-weight: 700; color: var(--cg-accent); }
.cg-root.cg-mto #energy code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mto #worked strong { color: var(--cg-accent); }
.cg-root.cg-mto .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021) C2.2; MDM4U, MCR3U, MCF3M, MHF4U, MCV4U records (MHF4U prior or concurrent); EQAO 2026-27 windows. CEMC Beaver Computing Challenge 2026 dates, levels, format and ordering deadline; Problem of the Week; free resources; the through-a-school rule. Oakville area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'Town of Oakville Open Data, Energy Consumption at Town Facilities (aggregate) 2017 (Town of Oakville Open Data Licence), downloaded 22 October 2026. Our statistics: 55 rows, 54 usable; floor area against electricity r 0.721 and slope 16.01 kWh per sq ft; without eight 1 sq ft rows, n 46, r 0.894, slope 17.32; median energy intensity 41.5 against 32.72; the implied gas factor 10.628 ekWh per cubic metre in all 40 rows with gas, solved by hand for ObjectId 2. Labelled as ours. Lesson family: correlation, placeholder values, solving for an unknown constant.',
    requiredMentions: [
      'O. Reg. 397/11',
      'r = 0.894',
      '16.01 kWh per sq ft',
      'ObjectId 2',
      '9.86646',
      '6,061.24',
      'f = 64,417.51',
      'Six of the rows are an indoor pool or ice rinks',
      '5,190,942.75',
      'a maximum of 168'
    ],
    sources: [
      { claim: 'Town of Oakville: Energy Consumption at Town Facilities (aggregate) 2017 item (purpose, Green Energy Act reporting, licence link).', url: 'https://www.arcgis.com/home/item.html?id=a61e6426a2354815ae77294fb6beec12' },
      { claim: 'Town of Oakville: 2017 aggregate energy feature service.', url: 'https://services5.arcgis.com/QJebCdoMf4PF8fJP/arcgis/rest/services/Energy_Consumption_Corporate_2017_Aggregate/FeatureServer' },
      { claim: 'Town of Oakville Open Data Licence (commercial use, attribution statement, non-endorsement).', url: 'https://www.oakville.ca/town-hall/town-studies-plans-projects/town-initiatives/open-data/open-data-licence/' },
      { claim: 'Ontario curriculum content API: MTH1W strands (C2.2).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth4w___strands?depth=4' },
      { claim: 'EQAO: 2026-27 assessment windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC: Beaver Computing Challenge (dates, levels, format, no coding needed).', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: Problem of the Week (Grades 3 to 12, weekly schedule).', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CEMC: free resources, no registration or fee.', url: 'https://cemc.uwaterloo.ca/resources' }
    ],
    rejectedClaims: [
      'Any Oakville population figure: StatCan was not reachable live.',
      'That 10.628 is an official conversion factor: presented as our inference from the file, which does not state it.',
      'What the 1 sq ft rows are: not stated in the file; described only as placeholders.',
      'Total energy use or emissions of the Town: not computed or printed (the file is aggregate per facility and totals would add published parts).',
      'Facility names: not needed; the worked row is identified by its ObjectId and type.',
      'Other tutors\' rates in Oakville: not sourced, so not printed.',
      'Any fee figure or currency in the copy, and BCC fees: omitted (currency-neutral page).',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Names of Oakville schools, boards or private people: not used.',
      'Any affiliation with the Town of Oakville, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
