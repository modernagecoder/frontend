'use strict';
// Math tutor, Richmond Hill (cg- city page, Canada cluster Wave 2, row 164). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: slope and rate of change through Ontario math (patterns, MTH1W, MPM2D, MDM4U regression, MCV4U tangents), routed
// to the live spokes; one linear-relations lesson, slope, percent grade and a line of best fit, on York Region's survey
// benchmarks inside Richmond Hill; a worked residual and extrapolation problem; the team contest (CTMC) slice; price.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; York files in ca/src-pilots/math-tutor-richmond-hill/):
//  - Ontario DCP API: MTH1W (2021) C2.1 "use coding to demonstrate an understanding of algebraic concepts including
//    variables, parameters, equations, and inequalities"; MPM2D (2005, Grade 10 Academic) as the MCR3U prerequisite; MDM4U,
//    MHF4U, MCV4U titles and the MHF4U-before-or-with-MCV4U rule. EQAO Grade 9 "January 12 - February 5, 2027", Grade 9
//    "an online assessment that includes two sessions (Session A and Session B), totalling 54 questions".
//  - CEMC CTMC: "Teams of six secondary school students in any combination of Grades 9-12."; at UWaterloo "Tuesday, April
//    13, 2027"; in school "Wednesday, April 14, 2027 or later"; "Individual event: Each team member solves the same set of
//    10 problems independently (45 min)." / "Team event: Team members collaborate to solve a set of 25 problems (45 min)."
//    Through a school; past contests free.
//  - facts-geo.md: Richmond Hill is in the Toronto CMA; 905 belt overlay 289/365/742/905; Ontario UTC-5 from 1 November 2026.
//  - York Region Open Data, "Benchmarks, Vertical Control" item e602259bf2d24ee69d21ab3f111ca371 (saved): "A benchmark is a
//    relatively permanent material object, natural or artificial, bearing a marked point whose elevation above or below an
//    adopted datum is known."; "Vertical datums for referencing benchmark elevations are based on mean sea level."; "most were
//    established approximately 20 years ago. Most are still considered accurate but it is suggested that they should be
//    checked against other benchmarks to make sure." Layer OpenData/Location/MapServer/1, 293 features, UTM zone 17N
//    (wkid 26917). York Region "Municipal Boundary" layer OpenData/Boundary/MapServer/1 (47 features, Richmond Hill HECTARES
//    10,148.2). Licence: York Region Open Data Licence (PDF saved), "Use the Information commercially", credit statement
//    "Contains public sector information made available under The Regional Municipality of York's Open Data Licence".
// Our own calculations (benchmarks.py, fit.py, page_snippet.py, python -I): 31 of 293 benchmarks inside the Richmond Hill
// polygon, all of type Tablet; elevations 186.83 m (BM 249-66) to 314.578 m (BM 848145), range 127.748 m, median 232.101 m;
// highest and lowest 10,582.8 m apart horizontally, grade 1.21 percent; least-squares line elevation = 8.16 x (km north of
// northing 4,850,000) + 151.0, r 0.895, r squared 0.80, x from 4.30 to 18.44 km; residual of BM 848145 +42.1 m, of BM 78-125
// -28.8 m; prediction at 12 km 249.0 m; 21 of the 31 carry 0 in their LATITUDE and LONGITUDE attributes although the point
// geometry is valid; EST_BY Richmond Hill 13, DHO 7, RMY 4, MTC 3, GSC 3, OTHER 1. Benchmark descriptions (which name
// buildings) are not reproduced.
// Lesson family: slope as rate of change, percent grade, least-squares line, residuals and extrapolation.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import json, statistics',
  '',
  'def crosses(x, y, ring):',
  '    count = 0',
  '    for (x1, y1), (x2, y2) in zip(ring, ring[1:] + ring[:1]):',
  '        if (y1 > y) != (y2 > y) and x < x1 + (y - y1) * (x2 - x1) / (y2 - y1):',
  '            count += 1',
  '    return count',
  '',
  'towns = json.load(open("muni-boundary.json"))["features"]',
  'rings = [ring for t in towns if t["attributes"]["NAME"] == "Richmond Hill" for ring in t["geometry"]["rings"]]',
  '',
  'km_north, height = [], []',
  'for mark in json.load(open("benchmarks.json"))["features"]:',
  '    x, y = mark["geometry"]["x"], mark["geometry"]["y"]',
  '    if sum(crosses(x, y, ring) for ring in rings) % 2 == 1:',
  '        km_north.append((y - 4_850_000) / 1000)',
  '        height.append(mark["attributes"]["ELEVATION"])',
  '',
  'fit = statistics.linear_regression(km_north, height)',
  'print("benchmarks:", len(height))',
  'print("slope, metres per km:", round(fit.slope, 2))',
  'print("intercept, metres:", round(fit.intercept, 1))',
  'print("r:", round(statistics.correlation(km_north, height), 3))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'RICHMOND HILL MATH', label: 'Math tutor in Richmond Hill', blurb: 'Math help for Richmond Hill students with slope traced from Grade 7 to calculus, a survey benchmark lesson on fitted lines, and the CEMC team contest.' },
  market: CA,
  slug: 'math-tutor-richmond-hill',
  code: 'mtrh',
  accent: '#323B99',
  accentRationale: 'Richmond Hill math: a muted survey-ink blue, #323B99, allocated for this row; the nearest other Canada accent is #382B9E, 17.8 RGB units away (Euclidean); contrast 8.92 on the paper #FBF8F2 (8.39 and 7.67 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Richmond Hill',
    eyebrow: 'Math tutor, Richmond Hill, Ontario',
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
  routeLabel: 'Math tutor in Richmond Hill',
  title: 'Math Tutor Richmond Hill | Live Online, Grades 1 to 12',
  description: 'Live online math tutoring for Richmond Hill students: slope from Grade 7 to MCV4U, a York Region benchmark lesson on fitted trend lines, and the CEMC team contest.',
  ogDescription: 'Richmond Hill rises about 8 metres for every kilometre north, by our fit to 31 survey benchmarks. A math tutor page that teaches slope from real elevations.',
  twitterDescription: 'Richmond Hill math tutoring, live online, with a real slope and regression lesson on York Region survey data.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Richmond Hill Students',
    description: 'Live online math for Richmond Hill students from Grade 1 to Grade 12: linear relations and MTH1W, Grade 10 algebra, MCR3U, MHF4U, MCV4U and MDM4U support, and team and individual contest preparation.'
  },

  h1: 'Math tutor for Richmond Hill, live and online',
  capsuleQ: 'Where can a Richmond Hill student find a live math tutor?',
  capsule: 'Modern Age Coders runs live online math lessons for Richmond Hill students in every grade from 1 to 12, taught one to one or with 15 to 20 classmates at the same level. Many seniors join our Ontario Grade 12 University Math course for MHF4U and MCV4U, contest fans join Waterloo Math Contests: Gauss to Euclid, and children join an age-matched maths course. Trying a lesson is free.',
  lead: 'If one idea carries a Richmond Hill student from Grade 7 to Grade 12, it is slope. It begins as &ldquo;goes up by 3 each time&rdquo; in a pattern, becomes rate of change in MTH1W, turns into the slope of a line of best fit in data management, and ends as the slope of a tangent in calculus. Students who understand it as a rate, so many units of this per unit of that, carry it through every course; students who memorise &ldquo;rise over run&rdquo; as a rule tend to lose it at the first unfamiliar graph. This page traces slope through the Ontario courses, links each stage to the page that covers it, and then measures it on real ground: York Region&rsquo;s survey benchmarks, the marked points whose heights above sea level are known, inside Richmond Hill.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Richmond Hill.',

  picks: {
    eyebrow: 'Math course picks for Richmond Hill',
    h2: 'Four courses Richmond Hill students start with',
    intro: 'One for each stage; the free lesson confirms which suits the student in front of us.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Patterns, rates and first equations, the place where slope quietly begins as a constant rate of change.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 and 10', note: 'MTH1W linear relations and Grade 10 analytic geometry, taught so slope means a rate, not a memorised rule.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'Advanced Functions and Calculus and Vectors alongside the school course. It does not grant an Ontario credit; the school does.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Practice for individual CEMC papers and for team rounds, with original problems.' }
    ]
  },

  sections: [
    {
      id: 'slope', tint: '', eyebrow: 'Ontario math in Richmond Hill',
      h2: 'How slope grows through Ontario math, from Grade 7 patterns to calculus',
      intro: 'Richmond Hill public schools teach the Ontario curriculum. Here is one idea followed through the grades, with our summary of each stage and the page where we teach it in full.',
      body: [
        { kind: 'table', caption: 'Slope and rate of change through Ontario math: our summary; course titles and order from the Ontario curriculum service, EQAO dates for 2026 to 2027 from EQAO', head: ['Where', 'Slope looks like', 'Go deeper'], rows: [
          ['Grades 3 to 6', 'A growing pattern: add the same amount each step; EQAO Grade 3 and Grade 6 run from 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3</a>, <a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6</a>'],
          ['Grades 7 and 8', 'A constant rate in a table, then the same rate as a line on a graph', '<a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">Grade 6 math and coding</a>'],
          ['Grade 9, MTH1W', 'Rate of change of a linear relation, with coding used for variables and parameters', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>'],
          ['Grade 10, MPM2D', 'Slope from two points, parallel and perpendicular lines; the course MCR3U requires', '<a class="cg-inline-link" href="/canada-high-school-math-courses-compared">Courses compared</a>'],
          ['Grade 11', 'Average rate of change of functions that are not straight lines', '<a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a>, <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M or MCR3U</a>'],
          ['Grade 12', 'The slope of a least-squares line in MDM4U; the slope of a tangent in MHF4U and MCV4U', '<a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>, <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>']
        ] },
        { kind: 'p', text: 'The Grade 9 assessment is the first place many Richmond Hill families see slope tested formally. EQAO describes it as an online assessment that includes two sessions, Session A and Session B, totalling 54 questions, and lists the 2027 window as 12 January to 5 February. Linear relations run through much of MTH1W, and the ministry&rsquo;s coding expectation asks students to use coding to demonstrate an understanding of variables, parameters, equations and inequalities. A parameter is exactly what slope is in y = mx + b.' },
        { kind: 'p', text: 'In Grade 12 the idea splits. MDM4U uses slope to describe a trend in messy data; MCV4U uses it to define the derivative. The ministry asks for MHF4U before or alongside MCV4U, so a student planning calculus should be secure on rates of change by the end of Grade 11.' },
        { kind: 'callout', h3: 'How we fit with school', p: 'Our lessons run alongside the school course, and we do not grant Ontario credits: credits and marks are the school&rsquo;s. We are not connected with the Ontario Ministry of Education, EQAO or the Richmond Hill school boards.' }
      ]
    },
    {
      id: 'benchmarks', tint: 'deep', eyebrow: 'Richmond Hill data lesson',
      h2: 'How steep is Richmond Hill? Slope from 31 survey benchmarks',
      intro: 'York Region publishes the survey benchmarks it maintains, each with an elevation above sea level. We kept the benchmarks that fall inside York Region&rsquo;s own Richmond Hill boundary and fitted a line. The results are our calculations.',
      body: [
        { kind: 'p', text: 'In York Region&rsquo;s words, a benchmark is a relatively permanent material object, natural or artificial, bearing a marked point whose elevation above or below an adopted datum is known, and the datums are based on mean sea level. The Region adds a warning that belongs in any student report: most were established approximately 20 years ago, and while most are still considered accurate, it is suggested that they should be checked against other benchmarks to make sure.' },
        { kind: 'table', caption: 'Our results from York Region&rsquo;s Benchmarks, Vertical Control and Municipal Boundary layers, downloaded 22 October 2026 (coordinates in metres, UTM zone 17 north)', head: ['Measure', 'Our result'], rows: [
          ['Benchmarks in the York Region layer', '293'],
          ['Inside the Richmond Hill polygon', '31, all of type Tablet'],
          ['Lowest elevation', '186.83 m (benchmark 249-66)'],
          ['Highest elevation', '314.578 m (benchmark 848145)'],
          ['Range', '127.748 m'],
          ['Median elevation', '232.101 m'],
          ['Least-squares line, elevation against kilometres north', 'slope 8.16 m per km, intercept 151.0 m, r = 0.895'],
          ['Benchmarks with 0 in the latitude and longitude fields', '21 of 31, although their map position is valid']
        ] },
        { kind: 'p', text: 'To fit the line we measured each benchmark&rsquo;s position as kilometres north of the grid line at northing 4,850,000 m, so the numbers stay small. The program below keeps only benchmarks inside Richmond Hill, using the odd-even crossing test on York Region&rsquo;s boundary, and asks Python&rsquo;s statistics module for the least-squares line and the correlation. It needs Python 3.10 or newer:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Reading the slope', p: 'A slope of 8.16 metres per kilometre means that, on this trend, each kilometre north is about eight metres higher. It is a rate with units, which is exactly how MTH1W wants a rate of change described.' },
          { h3: 'Reading r', p: 'A correlation of 0.895 is a strong positive linear relationship, and r squared of about 0.80 says the line accounts for about four fifths of the variation in elevation. The rest is hills, valleys and where each benchmark happens to sit.' },
          { h3: 'Two location fields', p: 'Twenty-one benchmarks show 0 for latitude and longitude, which would put them in the Atlantic off Africa. Their map geometry is fine. We used the geometry and reported the empty fields rather than silently trusting either.' }
        ] },
        { kind: 'callout', h3: 'Licence and attribution', p: 'Contains public sector information made available under The Regional Municipality of York&rsquo;s Open Data Licence. The line, the slope and every count here are ours. York Region and the City of Richmond Hill do not endorse this page or our classes. Benchmark descriptions, which name individual buildings, are not reproduced.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Grade, residual and the danger of extrapolating',
      intro: 'A four-part problem we give Richmond Hill students after the benchmark lesson. The numbers come from our analysis above; the questions and answers are ours.',
      body: [
        { kind: 'p', text: '<strong>Part (a), percent grade.</strong> The lowest benchmark, 249-66, is at 186.83 m, and the highest, 848145, is at 314.578 m. They are 10,582.8 m apart horizontally. The rise is 314.578 &minus; 186.83 = 127.748 m, so the slope is 127.748 &divide; 10,582.8 &asymp; 0.0121. As a road sign would write it, that is a grade of about 1.21 percent: gentle, even though the height difference sounds large.' },
        { kind: 'p', text: '<strong>Part (b), using the line.</strong> Our line is E = 8.16k + 151.0, where E is elevation in metres and k is kilometres north of northing 4,850,000 m. Predict the elevation at k = 12. E = 8.16 &times; 12 + 151.0 &asymp; 248.9 m (the unrounded slope, 8.164, gives 249.0 m). Notice how rounding the slope moves the answer by a tenth of a metre.' },
        { kind: 'p', text: '<strong>Part (c), a residual.</strong> Benchmark 848145 lies 14.88 km north. The line predicts about 8.164 &times; 14.88 + 151.0 &asymp; 272.5 m, but the benchmark is at 314.6 m. The residual, actual minus predicted, is about +42.1 m: the highest point is well above the trend, so it is not simply the most northerly point. A residual that size tells a student to look at a map, not to doubt the arithmetic.' },
        { kind: 'p', text: '<strong>Part (d), the trap.</strong> Use the line to predict the elevation 30 km north. The formula happily gives about 396 m. But our 31 benchmarks only span 4.3 km to 18.4 km north, and the line knows nothing beyond that. Extrapolating a fitted line far outside its data is the most common way a correct calculation produces a wrong conclusion.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Benchmark 78-125 sits 9.89 km north at 202.91 m. Find its predicted elevation from the line and its residual, then explain in one sentence what a negative residual means on the ground.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Richmond Hill students',
      h2: 'The Canadian Team Mathematics Contest: math as a team sport',
      intro: 'Most Waterloo contests are written alone. The CTMC, run by CEMC at the University of Waterloo, puts six students on one team, and for students who learn by explaining to each other it is often the most enjoyable contest of the year.',
      body: [
        { kind: 'table', caption: 'The 2027 CTMC as CEMC describes it (CEMC pages read 22 October 2026)', head: ['Detail', 'CEMC&rsquo;s description'], rows: [
          ['Teams', 'Six secondary school students in any combination of Grades 9 to 12'],
          ['Individual event', 'Each member solves the same 10 problems independently, 45 minutes'],
          ['Team event', 'Members collaborate on 25 problems, 45 minutes'],
          ['At the University of Waterloo', 'Tuesday 13 April 2027'],
          ['Written at school', 'Wednesday 14 April 2027 or later']
        ] },
        { kind: 'p', text: 'Twenty-five problems in forty-five minutes cannot be solved by one person, so the team event rewards something school rarely tests: dividing work, checking each other quickly and explaining a solution in a sentence. The residual question above is a good team exercise for exactly that reason; one student computes, another checks the units, a third asks whether the answer makes sense. For individual contests across the year, see our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a>.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teams come from schools', p: 'CEMC contests, team ones included, are entered through schools; a student cannot register alone. A Richmond Hill student without a participating school can ask another local school about joining.' },
          { h3: 'Practise with old papers', p: 'CEMC keeps ten years of past contests free online. We use them for timed practice and write fresh problems for lessons.' },
          { h3: 'Individual papers too', p: 'Pascal, Cayley and Fermat in February 2027 and Euclid in April 2027 are written alone; our <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid page</a> covers the last of these.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo. Their past problems and solutions are never reproduced here; we teach with original problems, labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Richmond Hill',
      h2: 'Math tutor prices in Richmond Hill: compare the hours, then the teaching',
      intro: 'The fees section of this page shows our three prices in the currency for where you are. This section explains what each format is, so the comparison with other options is fair.',
      body: [
        { kind: 'table', caption: 'Formats of math help for a Richmond Hill student, described by us; no other tutor&rsquo;s rates are quoted', head: ['Format', 'Who is there', 'How it is usually paid', 'Where it shines'], rows: [
          ['Our live online class', 'One teacher and 15 to 20 students at one level', 'A monthly fee for eight live classes', 'Regular structure through a school course'],
          ['Our one-to-one lessons', 'One teacher, one student', 'A higher monthly fee', 'A specific gap, an ambitious goal, exam weeks'],
          ['A tutor at your home', 'One tutor at your table', 'Normally by the hour, including travel', 'A student who focuses better with an adult in the room']
        ] },
        { kind: 'p', text: 'Put every option into hours of live teaching per month before comparing. Then ask the questions a price does not answer: is the work tied to the Ontario course code? Is practice set between lessons and checked? Will the student be asked to explain a slope in words, or only to compute it? A tutor who answers those well is worth more than one who is merely nearby.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From adding the same amount each time to the slope of a tangent',
    intro: 'The bands are a sketch. A free lesson shows where a student actually begins, based on what they can work out and explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Number and patterns', p: 'Counting, place value and repeating patterns, with each rule said in words.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 8', h3: 'Rates and equations', p: 'Fractions, ratio, constant rates and first equations, plus Gauss puzzles.', courses: ['comprehensive-middle-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grades 9 and 10', h3: 'Linear relations', p: 'MTH1W and Grade 10 slope, lines and quadratics.', courses: ['complete-high-school-mathematics-mastery', 'algebra-foundations-masterclass'] },
      { band: 'Grades 11 and 12', h3: 'Rates to derivatives', p: 'MCR3U, MHF4U, MCV4U and MDM4U, with team and individual contests.', courses: ['ontario-grade-12-university-math-mhf4u-mcv4u-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Will AI make slope pointless for a Richmond Hill student?',
    intro: 'Software fits a line instantly. Knowing when the line is lying still takes a person.',
    p1: 'Any spreadsheet or AI tool will fit our 31 benchmarks and report 8.16 metres per kilometre. None of them will volunteer that the line should not be used 30 km north, that 21 benchmarks have empty coordinate fields, or that the highest point sits far above the trend. Those observations are the mathematics, and the student has to make them.',
    p2: 'Our teachers keep that work with the student: sketch the scatter plot first, estimate the slope by eye, then compute and compare. Anything submitted for a school mark is the student&rsquo;s own work.',
    closer: 'Ontario math asks students to reason about models, not only to produce them; a tool helps with the producing.',
    blogAnchor: 'why reasoning, not button-pressing, is the skill that lasts'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math lessons in Richmond Hill homes',
    intro: 'From Oak Ridges to Bayview Hill, lessons come to the student&rsquo;s desk; nobody sits in traffic on Yonge Street.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time, twice adjusted', p: 'Richmond Hill switches from UTC-4 to UTC-5 on 1 November 2026 and back on 14 March 2027. We write class times in Eastern time and send a reminder in both weeks.' },
      { h3: 'Graphs drawn together', p: 'Teacher and student sketch scatter plots and lines on one shared board, so a misread axis is caught on the spot.' },
      { h3: 'Built on the course code', p: 'A Grade 9 plan follows MTH1W and a Grade 12 plan follows MDM4U, MHF4U or MCV4U, keeping pace with the school.' },
      { h3: 'Local numbers', p: 'Richmond Hill numbers on 905, 289, 365 or 742 are fine in the form; the country code is filled in when you type ten digits.' },
      { h3: 'Try one lesson', p: 'The first lesson is free and complete, and it finishes with an honest placement. No card is taken.' }
    ],
    spec: { title: 'No Richmond Hill centre', p: 'Modern Age Coders has no tutoring centre in Richmond Hill and claims none. Lessons are live and online, taught from India, and need a computer with a microphone and a reliable connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Richmond Hill',
    intro: 'Each amount below is displayed in your local currency.',
    first: 'A full, free live lesson that ends with a suggested course and level.',
    group: 'The monthly fee for a live class of 15 to 20 students at one level.',
    private: 'The monthly fee for a teacher with your student alone, at times you set.',
    closer: 'There is one Canadian fee, and Richmond Hill pays it like everywhere else. You pay nothing until after the free lesson, and only once you have chosen a course and a time.'
  },

  reviewsH2: 'Reviews families and students have left on Google',

  book: {
    h2: 'Book a free lesson for a Richmond Hill student',
    intro: 'Tell us the grade and any course code. A Grade 3 child might begin with a pattern game; a Grade 9 student might begin by estimating the slope of Richmond Hill.',
    success: 'Thank you. The team will be in touch soon about a math class for Richmond Hill.'
  },

  faq: {
    h2: 'Richmond Hill math tutoring questions',
    intro: 'The questions Richmond Hill families most often send us.',
    items: [
      { q: 'Do you provide a math tutor in Richmond Hill?', a: 'We do, online. There is no Richmond Hill location; students join live from home, either one to one or with 15 to 20 classmates at the same level.' },
      { q: 'What does a math tutor in Richmond Hill cost with you?', a: 'Our fees section lists the free first lesson and the two monthly fees, shown in your own currency. We leave the figures out of this answer on purpose.' },
      { q: 'How does an online class compare with a home tutor?', a: 'A home tutor comes to you and usually charges by the hour, travel included. Our online class has one teacher and 15 to 20 students at one level for a monthly fee; our one-to-one option is a teacher for one student, also monthly, with no travel.' },
      { q: 'Can you help with linear relations in MTH1W?', a: 'Yes. Slope as a rate of change is the centre of our Grade 9 teaching, and the benchmark lesson on this page is one of our examples.' },
      { q: 'Do you teach MDM4U regression lines and correlation?', a: 'Yes. We teach regression, correlation and residuals from real data, alongside the school course.' },
      { q: 'Will working with you earn my teen an Ontario credit?', a: 'No credit comes from us. The school grants credits and marks; our lessons support the course the student is taking there.' },
      { q: 'Can my teen join a CTMC team through you?', a: 'Teams are entered by schools, not by us. CEMC lists the 2027 CTMC for 13 April at Waterloo and from 14 April in schools. We can prepare students with original team-style problems.' },
      { q: 'What times do you offer Richmond Hill students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are in Eastern time.' },
      { q: 'Is my child too young to start?', a: 'Children can start from about age 6, with short lessons on number sense and patterns, explained step by step.' },
      { q: 'My teen gets the right answers but loses marks for explanations. Why?', a: 'Ontario courses mark communication as well as answers. We train students to state units, name the rate and say what a result means, as in the worked problem above.' }
    ]
  },

  next: {
    eyebrow: 'More for Richmond Hill and Canada',
    h2: 'Related math pages for Richmond Hill families',
    html: 'For all of Canada, read <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page</a>. Single courses: <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W</a>, <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a>, <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a> and <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a>. For the province, see <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Richmond Hill math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mth1w-grade-9-math-explained', label: 'MTH1W explained' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtrh .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-mtrh .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mtrh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.008em; }
.cg-root.cg-mtrh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtrh .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-mtrh #benchmarks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtrh #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtrh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: MTH1W (2021) C2.1; MPM2D (2005) as the MCR3U prerequisite; MCR3U, MHF4U, MCV4U (MHF4U prior or concurrent), MDM4U; EQAO 2026-27 windows and the Grade 9 format (two sessions, 54 questions). CEMC CTMC team format and 13 and 14 April 2027 dates; the through-a-school rule. Richmond Hill area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'York Region Open Data, Benchmarks, Vertical Control and Municipal Boundary layers (York Region Open Data Licence), downloaded 22 October 2026 in UTM zone 17N. Our analysis: 31 of 293 benchmarks inside Richmond Hill; elevations 186.83 m to 314.578 m; grade 1.21 percent between lowest and highest; least-squares line 8.16 m per km north, intercept 151.0 m, r 0.895; residual of benchmark 848145 +42.1 m; 21 benchmarks with zero latitude and longitude fields. Labelled as ours. Lesson family: slope, regression, residuals and extrapolation.',
    requiredMentions: [
      'benchmark 848145',
      '249-66',
      '127.748 m',
      '8.16 m per km',
      'r = 0.895',
      'most were established approximately 20 years ago',
      '21 of 31',
      'a grade of about 1.21 percent',
      'Members collaborate on 25 problems',
      'which would put them in the Atlantic off Africa'
    ],
    sources: [
      { claim: 'York Region Open Data: Benchmarks, Vertical Control item (definition, mean sea level datum, age and accuracy note).', url: 'https://www.arcgis.com/home/item.html?id=e602259bf2d24ee69d21ab3f111ca371' },
      { claim: 'York Region: benchmarks map service layer.', url: 'https://ww8.yorkmaps.ca/arcgis/rest/services/OpenData/Location/MapServer/1' },
      { claim: 'York Region: municipal boundary map service layer.', url: 'https://ww8.yorkmaps.ca/arcgis/rest/services/OpenData/Boundary/MapServer/1' },
      { claim: 'York Region Open Data site, where the York Region Open Data Licence is published (PDF saved).', url: 'https://insights-york.opendata.arcgis.com/' },
      { claim: 'Ontario curriculum content API: MTH1W strands (C2.1).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/mth4w___strands?depth=4' },
      { claim: 'EQAO: Grade 9 assessment format and 2026-27 windows.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'CEMC: Canadian Team Mathematics Contest (team format, events).', url: 'https://cemc.uwaterloo.ca/contests/ctmc' },
      { claim: 'CEMC: contest dates for 2026/27.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Richmond Hill population figure: StatCan was not reachable live.',
      'Naming the Oak Ridges Moraine or any landform as the cause of the slope: no saved source says so; the page describes the trend only.',
      'Benchmark descriptions, which name individual buildings: not reproduced.',
      'That any benchmark is out of date or inaccurate: not claimed; York Region\'s own caution is quoted instead.',
      'CTMC fees: omitted on purpose (currency-neutral page).',
      'Other tutors\' rates in Richmond Hill: not sourced, so not printed.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Names of Richmond Hill schools, boards or private people: not used.',
      'Any affiliation with York Region, the City of Richmond Hill, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
