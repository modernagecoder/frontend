'use strict';
// Math tutor, Brampton (cg- city page, Canada cluster Wave 2, row 161). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the middle years (Grades 6 to 9) where Brampton students cross from elementary math into MTH1W, routed to the
// live Ontario spokes; one data-cleaning lesson (impossible values, a future date, why the 1.5 x IQR fence fails on
// counts) on the City of Brampton tree planting tracker; a linear-model worked problem on the City's own planting target;
// the Gauss contest and Team Up Challenge slice for Grades 6 to 8; questions to ask about any tutor's price.
// Sources, read raw on 22 October 2026 (curriculum and contest facts from keyword-research-2026-09/ca/facts-schools-contests.md
// with saved raw files in ca/src/; geography from ca/facts-geo.md; tracker files in ca/src-pilots/math-tutor-brampton/):
//  - Ontario DCP API: Elementary Mathematics (2020) C3 coding in every grade 1 to 8; MTH1W (2021, de-streamed), "Students
//    will use mathematical processes, mathematical modelling, and coding"; MCR3U, MHF4U, MCV4U, MDM4U titles. EQAO Grade 6
//    "May 4 - June 8, 2027" and Grade 9 "January 12 - February 5, 2027" (en dashes in source); Grade 9 "multi-stage computer
//    adaptive testing model"; Grade 9 results "to be included as part of a student's final course mark".
//  - CEMC Gauss: "Students in Grades 7 and 8." / "Motivated students in lower grades are welcome to write the contest.";
//    "Monday, May 10, 2027 to Friday, May 21, 2027"; "25 multiple-choice questions."; "Time allowed for completion is 60
//    minutes."; Team Up Challenge "designed for students in Grades 6 to 8", "Tuesday, June 1, 2027 or later"; through a school.
//  - facts-geo.md: Brampton is in the Toronto CMA; 905 belt overlay 289/365/742/905; Ontario UTC-5 from 1 November 2026.
//  - City of Brampton, "Brampton One Million Trees" ArcGIS item b6a1a530a4914ef3bcd1cbb2eb0300ac (saved): licenseInfo "CC BY",
//    accessInformation "City of Brampton"; "realize the target of one million trees by 2040"; "must aim to plant, on average,
//    an additional 7000 trees per year for a total of 50,000 trees per year starting in 2020"; "the City has launched an
//    online tree planting tracker tool. If you've recently planted a tree, record it". Layer
//    Tree_Planting_Tracker_Open_Data/FeatureServer queried in two pages (offsets 0 and 1000) on 22 October 2026.
// Our own calculations (trees.py, clean.py, page_snippet.py, python -I): 1,228 records, 1,228 distinct objectid, no missing
// tree count or date; median 1, mode 1, 845 one-tree records; raw mean about 81,433,224,775 because objectid 1291 records
// 100,000,000,000,000 trees (dated 2025-09-11, Ward 1, species blank); objectid 1292 is dated 2027-06-24, after our download;
// after dropping the one impossible record (cut-off 10,000, ours): 1,227 records, 23,576 trees in the layer, mean 19.21,
// largest record 5,000; 60 records of 100 or more trees hold 76.6% of those trees; quartiles 1, 1, 2, so the 1.5 x IQR upper
// fence is 3.5 and flags 212 records; organization yes 838 records (22,515 trees), no 389 records (1,061 trees); Ward 1 has
// the most records (310). Arithmetic on the City's stated pace: 50,000 x 20 years from 2020 = 1,000,000; 50,000 - 7,000 =
// 43,000 implied baseline (our reading). The layer sum is never presented as programme progress.
// Lesson family: data cleaning, validity checks, outlier rules on counts; linear models from a stated rate.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CODE = [
  'import json, statistics',
  '',
  'records = []',
  'for page in ("trees_page_0.json", "trees_page_1000.json"):',
  '    with open(page) as f:',
  '        records += [feature["attributes"] for feature in json.load(f)["features"]]',
  '',
  'counts = [r["NumTreesPlanted"] for r in records]',
  'print("records:", len(counts), "raw mean:", round(statistics.mean(counts)))',
  '',
  'plausible = [c for c in counts if c <= 10_000]',
  'print("dropped:", len(counts) - len(plausible))',
  'print("clean mean:", round(statistics.mean(plausible), 2))',
  'print("median:", statistics.median(plausible))',
  'print("trees in clean records:", sum(plausible))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BRAMPTON MATH', label: 'Math tutor in Brampton', blurb: 'Math help for Brampton students with the middle-school years into MTH1W mapped, a tree tracker data-cleaning lesson, and the Gauss contest for Grades 7 and 8.' },
  market: CA,
  slug: 'math-tutor-brampton',
  code: 'mtub',
  accent: '#8A1B15',
  accentRationale: 'Brampton math: a deep brick red, #8A1B15, allocated for this row; the nearest other Canada accent is #7A2212, 17.7 RGB units away (Euclidean); contrast 8.81 on the paper #FBF8F2 (8.29 and 7.58 on the two paper tints)',
  pageType: 'city',
  place: {
    name: 'Brampton',
    eyebrow: 'Math tutor, Brampton, Ontario',
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
  routeLabel: 'Math tutor in Brampton',
  title: 'Math Tutor Brampton | Live Online Lessons, Grades 1 to 12',
  description: 'Online math tutoring for Brampton students, Grades 1 to 12: the move from Grade 6 into MTH1W, a tree data lesson on cleaning numbers, and the Gauss contest dates.',
  ogDescription: 'One record in Brampton\'s tree tracker claims a hundred trillion trees. A Brampton math tutor page on why checking data is part of doing math.',
  twitterDescription: 'Brampton math tutoring, live online, from early number sense through MTH1W to Grade 12.',
  ogImageCourse: 'comprehensive-middle-school-mathematics-mastery',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Brampton Students',
    description: 'Live online math for Brampton students from Grade 1 to Grade 12, with particular care over Grades 6 to 9 and MTH1W, plus Gauss and Waterloo contest preparation.'
  },

  h1: 'A math tutor for Brampton, taught live online',
  capsuleQ: 'Who teaches math live to Brampton students?',
  capsule: 'Brampton students from Grade 1 through Grade 12 learn math live online with Modern Age Coders, either alone with a teacher or in a class of fifteen to twenty. Middle-school students often start with Middle School Mathematics Mastery, contest fans with Waterloo Math Contests: Gauss to Euclid, and seniors with Ontario Grade 12 University Math. The first lesson is free.',
  lead: 'For many students, math gets hard somewhere between Grade 6 and Grade 9. Fractions turn into ratios, ratios into equations, and by MTH1W a student is expected to model a situation, not just compute an answer. This page maps those middle years in particular, links each stage to the page where we cover it in detail, and then teaches one lesson that sits right in that stretch. It uses the City of Brampton&rsquo;s own tree planting tracker, which contains a record so impossible that one line of it changes the average by billions. Learning to catch that line is as much a part of mathematics as learning to compute the average in the first place.',
  wa: 'Hello Modern Age Coders, I would like a free math class for a student in Brampton.',

  picks: {
    eyebrow: 'Math course picks for Brampton',
    h2: 'Where Brampton students usually begin',
    intro: 'Four starting points by grade band, confirmed in a free lesson before anything is booked.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Place value, operations and fractions with every step explained, building the reasoning the Grade 3 and Grade 6 assessments look for.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Ratio, percent, integers and equations, the bridge from elementary math into de-streamed Grade 9.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Gauss practice in Grades 7 and 8, then the high school contests, all with problems we write.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', band: 'Grades 11 and 12', note: 'MHF4U and MCV4U support beside the school course. It does not grant an Ontario credit; the school does.' }
    ]
  },

  sections: [
    {
      id: 'middle', tint: '', eyebrow: 'Ontario math in Brampton',
      h2: 'The middle years: what changes between Grade 6 and MTH1W',
      intro: 'Brampton public schools follow the Ontario curriculum. The table puts the years that cause the most trouble at the centre and sends you to our page for each one.',
      body: [
        { kind: 'table', caption: 'From Grade 6 to Grade 9 in Ontario, our summary of what is new each year, plus the EQAO dates published for the 2026 to 2027 school year', head: ['Year', 'What is new in the math', 'Provincial assessment', 'Our page'], rows: [
          ['Grade 6', 'Number and proportional reasoning grow harder, and the coding expectation adds the word efficient', 'Junior assessment, 4 May to 8 June 2027', '<a class="cg-inline-link" href="/eqao-grade-6-math-practice">Grade 6 practice</a>, <a class="cg-inline-link" href="/ontario-grade-6-math-and-coding-help">math and coding</a>'],
          ['Grade 7', 'More algebra and proportional thinking, and code driven by a defined count or a subprogram', 'None', '<a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation</a>'],
          ['Grade 8', 'Patterns become equations, and code is used for the analysis of data to inform decisions', 'None', '<a class="cg-inline-link" href="/math-classes-for-kids-in-canada">Math for kids in Canada</a>'],
          ['Grade 9', 'MTH1W: one de-streamed course with modelling and coding written into it', 'Grade 9 assessment, 12 January to 5 February 2027', '<a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a>, <a class="cg-inline-link" href="/eqao-grade-9-math-practice">Grade 9 practice</a>']
        ] },
        { kind: 'p', text: 'The Grade 9 row is the one that worries families, and for good reason. EQAO describes the Grade 9 assessment as using a multi-stage computer adaptive testing model, and says its results are to be included in the student&rsquo;s final course mark. The ministry&rsquo;s course description says MTH1W students will use mathematical processes, mathematical modelling, and coding to make sense of what they learn. In plain terms, a Brampton Grade 9 student is graded on whether they can reason with numbers they did not choose, which is exactly what the tree lesson below practises.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Before Grade 6', p: 'Grades 1 to 5 are about number sense: place value, the four operations and fractions. Our pages on <a class="cg-inline-link" href="/eqao-grade-3-math-practice">Grade 3 practice</a> and the primary courses cover this stage.' },
          { h3: 'After Grade 9', p: 'Grade 10 academic math leads to <a class="cg-inline-link" href="/mcr3u-functions-tutor">MCR3U</a> in Grade 11, then <a class="cg-inline-link" href="/mhf4u-advanced-functions-tutor">MHF4U</a>, <a class="cg-inline-link" href="/mcv4u-calculus-and-vectors-tutor">MCV4U</a> or <a class="cg-inline-link" href="/mdm4u-data-management-tutor">MDM4U</a> in Grade 12.' },
          { h3: 'Choosing a Grade 11 path', p: 'Students deciding between the university and mixed Grade 11 courses can read our comparison of <a class="cg-inline-link" href="/mcf3m-vs-mcr3u">MCF3M and MCR3U</a> before course selection.' }
        ] },
        { kind: 'callout', h3: 'What we do and do not do', p: 'We teach alongside the school&rsquo;s math course and we do not grant Ontario credits. Marks and credits come from the student&rsquo;s school. We are not connected with the Ontario Ministry of Education, EQAO or the Brampton school boards.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Brampton data lesson',
      h2: 'A hundred trillion trees: cleaning Brampton&rsquo;s tree tracker before averaging it',
      intro: 'The City of Brampton runs an online tracker where residents and groups record trees they have planted, and publishes the records as open data. We downloaded every record and tried to answer a simple question: how many trees does a typical record report? The cleaning decisions and every figure here are ours.',
      body: [
        { kind: 'p', text: 'The layer belongs to the Brampton One Million Trees programme, which the City describes as a framework to realize the target of one million trees by 2040. The City&rsquo;s description explains where the records come from: it has launched an online tree planting tracker tool and invites anyone who has recently planted a tree to record it. That single sentence tells a careful student what to expect. These are self-reported entries, typed in by people, so some will be wrong.' },
        { kind: 'table', caption: 'Our checks on the City of Brampton tree planting tracker layer, downloaded 22 October 2026 (1,228 records)', head: ['Check', 'What we found'], rows: [
          ['Records and distinct record numbers', '1,228 records, 1,228 distinct objectid values, no blank tree counts or dates'],
          ['Median and most common value', '1 tree per record; 845 records report exactly one tree'],
          ['Raw mean, all records', 'about 81,433,224,775 trees per record'],
          ['The record behind that mean', 'objectid 1291, dated 11 September 2025, Ward 1, reporting 100,000,000,000,000 trees'],
          ['A date that has not happened yet', 'objectid 1292 is dated 24 June 2027, eight months after our download'],
          ['Mean after removing objectid 1291', '19.21 trees per record, across 1,227 records'],
          ['Trees in the cleaned records', '23,576, with the largest single record at 5,000'],
          ['Records of 100 trees or more', '60 records, holding 76.6 percent of the cleaned trees']
        ] },
        { kind: 'p', text: 'One typed number moved the mean from about nineteen trees to about eighty-one billion. The median did not move at all, because it only cares about the middle of the sorted list. But the lesson is not simply &ldquo;use the median&rdquo;. The impossible value has to be found, named and removed with a stated reason before any summary is honest, and the future-dated record has to be flagged too, even though its count of 2 is perfectly plausible. This short program does the first part:<code class="cg-mt-2">' + CODE + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why our cut-off is 10,000', p: 'The largest believable record is 5,000 trees, plausibly a big organised planting. We set the line at 10,000, above every believable record and far below the impossible one, and we say so, because a cut-off is a decision, not a fact.' },
          { h3: 'When the textbook rule fails', p: 'The usual outlier fence is the upper quartile plus 1.5 times the interquartile range. Here the quartiles are 1, 1 and 2, so the fence sits at 3.5 and flags 212 records, almost all of them honest group plantings. A rule built for measurements breaks on counts like these.' },
          { h3: 'Who records the trees', p: 'Records marked as planted by an organization number 838 and hold 22,515 of the cleaned trees; the other 389 records hold 1,061. Most entries are small, but most trees come from a few large ones.' }
        ] },
        { kind: 'callout', h3: 'Licence and source', p: 'Source: City of Brampton, Brampton One Million Trees tree planting tracker layer, which the City publishes under a CC BY licence (<a class="cg-inline-link" href="https://www.arcgis.com/home/item.html?id=b6a1a530a4914ef3bcd1cbb2eb0300ac">dataset record</a>). Our sums are of this open layer only and are not the City&rsquo;s count of programme progress. The City of Brampton does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Does a pace of 50,000 trees a year reach one million by 2040?',
      intro: 'The City&rsquo;s description of the programme gives a rate, so a Grade 7 to 9 student can test it with a linear model. The question and the working are ours; the two numbers in it are the City&rsquo;s.',
      body: [
        { kind: 'p', text: 'The City writes that, to achieve one million trees by 2040, it and its partners must aim to plant, on average, an additional 7000 trees per year for a total of 50,000 trees per year starting in 2020.' },
        { kind: 'p', text: '<strong>Part (a).</strong> Write a model for the trees planted from the start of 2020, if the pace is exactly 50,000 a year. Let t be the number of full years since the start of 2020. Then T = 50,000t. This is a direct variation: no starting amount, constant rate, a straight line through the origin.' },
        { kind: 'p', text: '<strong>Part (b).</strong> When does T reach 1,000,000? Solve 50,000t = 1,000,000, so t = 20. Twenty full years from the start of 2020 ends at the start of 2040, which matches the City&rsquo;s target date. The City&rsquo;s two numbers are consistent with each other.' },
        { kind: 'p', text: '<strong>Part (c).</strong> What does the word &ldquo;additional&rdquo; tell you? If 7,000 is the extra amount and 50,000 the total, the planting already under way before the programme must be about 50,000 &minus; 7,000 = 43,000 trees a year. That is our reading of the City&rsquo;s sentence, not a figure the City states, and a good answer says so.' },
        { kind: 'p', text: '<strong>Part (d), the trap.</strong> Can you use the 23,576 trees in the open tracker layer to judge whether the programme is on track? No. The tracker holds only trees that someone chose to record in it, so it is a sample of unknown size from a larger total. Comparing it with 50,000 a year would mix two different quantities. Saying what a dataset cannot answer is part of the answer.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> Suppose planting started at 43,000 a year in 2020 and rose by 1,000 each year after that. Write the number planted in year t, then use the formula for an arithmetic series to find the total after ten years.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Brampton students',
      h2: 'Gauss for Grades 7 and 8, and a team challenge for Grades 6 to 8',
      intro: 'For a Brampton student in the middle years, the natural first Waterloo contest is the Gauss. The Waterloo centre that runs it, CEMC, also offers a collaborative resource for the same ages.',
      body: [
        { kind: 'table', caption: 'Two CEMC options for Grades 6 to 8 this school year, from CEMC pages read on 22 October 2026', head: ['Option', 'Who CEMC has in mind', 'Shape', 'When'], rows: [
          ['Gauss contest', 'Students in Grades 7 and 8; motivated younger students are welcome', 'Twenty-five multiple-choice questions, one hour', '10 to 21 May 2027'],
          ['Team Up Challenge', 'Students in Grades 6 to 8', 'A collaborative mathematics resource done in teams', '1 June 2027 or later']
        ] },
        { kind: 'p', text: 'The Gauss window opens just after the Grade 6 EQAO window begins, so a Brampton Grade 6 student who enjoys puzzles can try a Gauss paper a year early, as CEMC allows. The questions reward the same habits as the tree lesson: read carefully, check whether an answer is even possible, and prefer a clever count to a long calculation. Our <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation page</a> goes question type by question type.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entered by the school', p: 'Students cannot register themselves for CEMC contests. A Brampton family asks the school; if it does not take part, CEMC suggests another local school that will host the student.' },
          { h3: 'Old papers, free', p: 'CEMC publishes ten years of past contests at no cost and with no sign-up. They are the right practice material, and we add problems of our own in class.' },
          { h3: 'After Gauss', p: 'In Grade 9 the Pascal contest (23 or 24 February 2027) and the Fryer (7 April 2027) follow. The <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> shows the whole sequence.' }
        ] },
        { kind: 'callout', h3: 'Not connected with CEMC', p: 'CEMC&rsquo;s rule is that &ldquo;all students must participate through their school&rdquo;. We are not connected with CEMC or the University of Waterloo. We do not reproduce their problems or solutions; the problems we teach with are original and labelled as ours.' }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Brampton',
      h2: 'Before you pay any Brampton math tutor, ask these five things',
      intro: 'Our fees appear in the fees section of this page, shown in your own currency. Here is how we would judge any tutor&rsquo;s price, including ours.',
      body: [
        { kind: 'table', caption: 'Five questions for comparing math help in Brampton, with our own answers', head: ['Question to ask', 'Why it matters', 'Our answer'], rows: [
          ['How many live teaching hours does the fee buy each month?', 'A per-visit price and a monthly price cannot be compared until both are hours per month', 'Eight live classes a month, for one monthly fee'],
          ['How many students share the teacher?', 'A class and a private lesson are different products at different prices', 'Fifteen to twenty in a class, or one student alone'],
          ['Is anyone travelling?', 'A tutor who drives to your home builds that time into the rate', 'No; lessons are online'],
          ['Which Ontario course code is the plan built on?', 'Generic worksheets drift away from what the school is marking', 'The course the student is enrolled in, such as MTH1W'],
          ['How will I know my child understands, not copies?', 'Copied methods collapse on the next unfamiliar question', 'Students explain each step on the shared board']
        ] },
        { kind: 'p', text: 'A private tutor who comes to the house is a good choice for some Brampton families, especially when a parent wants someone physically at the table. Usually that tutor charges by the hour at their own rate. Our live class suits a student who is roughly on track and wants regular structured practice; one-to-one suits a student with a specific gap or a big goal. Neither choice is about being cheap: it is about matching the format to the student.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to calculus, with the middle years done properly',
    intro: 'Bands are approximate. The free lesson finds the real starting point from what the student can show and explain.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Number first', p: 'Counting, place value and the meaning of each operation, explained in words.', courses: ['early-math-foundations', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Grades 4 to 6', h3: 'Fractions and ratio', p: 'Fractions, decimals and percent, with first contest-style puzzles.', courses: ['elementary-mathematics-complete-masterclass', 'maths-through-coding'] },
      { band: 'Grades 7 to 9', h3: 'Into algebra and MTH1W', p: 'Integers, equations and linear models, plus Gauss and Pascal practice.', courses: ['comprehensive-middle-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] },
      { band: 'Grades 10 to 12', h3: 'Functions and beyond', p: 'Grade 10 algebra, MCR3U, then MHF4U, MCV4U or data management.', courses: ['complete-high-school-mathematics-mastery', 'ontario-grade-12-university-math-mhf4u-mcv4u-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'If AI can average a column, why should a Brampton student learn how?',
    intro: 'Because the average was the easy part. Knowing the column was broken was the math.',
    p1: 'Ask an AI tool for the mean of the tree tracker and it may well return eighty-one billion without comment, or quietly drop the bad row without telling you it did. Either way the student learns nothing about why. Spotting the hundred trillion, deciding what to do with it and explaining the decision is reasoning only the student can own.',
    p2: 'That is how we teach: estimate first, calculate by hand where it matters, check with technology afterwards, and always explain the result in a sentence. Marked school work stays the student&rsquo;s own.',
    closer: 'MTH1W asks students to model and reason. A tool can speed up arithmetic, but it cannot take over the judgement.',
    blogAnchor: 'the case for learning to reason in an age of AI tools'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online math lessons for Brampton homes',
    intro: 'From Springdale to Mount Pleasant, the lesson arrives on the student&rsquo;s own computer, with no drive across town.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Eastern time and the change', p: 'Brampton clocks go back on 1 November 2026 (to UTC-5) and forward on 14 March 2027 (to UTC-4). We give every class in Eastern time and re-check it in those weeks.' },
      { h3: 'One shared board', p: 'Students write their working where the teacher can see it, so an error is caught at the line where it starts.' },
      { h3: 'Ontario grades and codes', p: 'Teachers plan from the Ontario grade or course, so a Grade 7 lesson matches Grade 7 expectations and a Grade 9 lesson matches MTH1W.' },
      { h3: 'Brampton numbers', p: 'Numbers on 905, 289, 365 or 742 work in the form. Type the ten digits; we add the country code.' },
      { h3: 'Free to start', p: 'The first lesson is a full lesson at the right level and finishes with a course suggestion. We ask for no card.' }
    ],
    spec: { title: 'No Brampton centre', p: 'Modern Age Coders has no tutoring centre in Brampton and claims none. Lessons are live and online, taught from India, and need a computer with a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Brampton',
    intro: 'Three lines, each in your own currency.',
    first: 'A full live lesson, free, that ends with a recommended course and level.',
    group: 'The monthly fee for a live class of fifteen to twenty at one level.',
    private: 'The monthly fee for one-to-one teaching, scheduled around your family.',
    closer: 'Brampton students pay the same as students anywhere in Canada. We bill only after the free lesson and only once the course and the time are agreed.'
  },

  reviewsH2: 'Google reviews from our families and students',

  book: {
    h2: 'Book a free math lesson in Brampton',
    intro: 'Tell us the grade. A Grade 3 child may start with a place-value game; a Grade 8 student might start with the tree tracker and a question about averages.',
    success: 'Thank you. The team will be in touch soon about a math class for Brampton.'
  },

  faq: {
    h2: 'Brampton math tutoring questions',
    intro: 'What Brampton parents and students most often ask us.',
    items: [
      { q: 'Do you have a math tutor in Brampton?', a: 'Our math teachers work online, so there is no Brampton office. Students learn live from home, in a class of fifteen to twenty or one to one.' },
      { q: 'What is the price of a math tutor in Brampton with you?', a: 'Look under Fees further down: a free first lesson, then a monthly fee for a live class or for one-to-one, shown in your own currency. This answer gives no figure on purpose.' },
      { q: 'How is your class different from a private tutor at home?', a: 'Someone who tutors in your home has travel to cover and normally charges per hour. We teach online: a live class of fifteen to twenty for one monthly fee, or one-to-one online for a higher monthly fee, with no travel.' },
      { q: 'My child finds Grade 7 math hard. Can you help?', a: 'Yes. Grades 6 to 9 are where fractions, ratio and early equations pile up, and our middle school course is built for exactly that stretch.' },
      { q: 'Can you help with MTH1W and the Grade 9 EQAO assessment?', a: 'Yes. We teach the MTH1W course itself. The Grade 9 assessment runs from 12 January to 5 February 2027 according to EQAO, and the results count in the course mark.' },
      { q: 'Does my Grade 7 or 8 child need to be top of the class to try the Gauss contest?', a: 'No. CEMC says its contests have no passing or failing score. We prepare students for the Gauss, which CEMC lists for 10 to 21 May 2027, and the school enters them.' },
      { q: 'Will tutoring with you give my teen an Ontario credit?', a: 'No. We do not grant Ontario credits. Credits and marks come from the school; we teach alongside.' },
      { q: 'When do your classes run for Brampton?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is stated in Eastern time.' },
      { q: 'What age can my child start math lessons?', a: 'From about age 6. Early lessons are short and focus on number sense and talking through each step.' },
      { q: 'Do you teach high school math in Brampton too?', a: 'Yes, through Grade 12: MCR3U, MHF4U, MCV4U and data management, always beside the school course.' }
    ]
  },

  next: {
    eyebrow: 'More for Brampton and Canada',
    h2: 'Related math pages for Brampton families',
    html: 'Start from <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring across Canada</a>, or go straight to <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explained</a>, <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 practice</a> and <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss preparation</a>. For the province as a whole, see <a class="cg-inline-link" href="/coding-classes-in-ontario">our Ontario page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brampton math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/mth1w-grade-9-math-explained', label: 'MTH1W explained' },
    { href: '/gauss-contest-preparation', label: 'Gauss contest' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtub .cg-hero h1 { font-weight: 720; letter-spacing: -0.012em; line-height: 1.07; }
.cg-root.cg-mtub .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-mtub .cg-eyebrow { letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; }
.cg-root.cg-mtub .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtub #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.82rem; line-height: 1.5; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtub #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtub .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grades 6 to 8 and C3 coding; MTH1W (2021) course description on modelling and coding; senior course titles. EQAO 2026-27 windows, the adaptive Grade 9 model and the course-mark rule. CEMC Gauss eligibility, format and 10 to 21 May 2027 window; Team Up Challenge for Grades 6 to 8 from 1 June 2027; the through-a-school rule. Brampton area codes and Eastern time offsets from facts-geo.md.',
    localProject: 'City of Brampton, Brampton One Million Trees tracker layer (CC BY), downloaded 22 October 2026 in two pages. Our checks: 1,228 records; median 1; raw mean about 81,433,224,775 because objectid 1291 reports 100,000,000,000,000 trees; objectid 1292 dated 24 June 2027; after removing objectid 1291, 1,227 records, mean 19.21, 23,576 trees, 60 records of 100+ hold 76.6 percent; 1.5 x IQR fence of 3.5 flags 212 records. Worked linear model on the City\'s stated 50,000 a year from 2020. Labelled as ours. Lesson family: data cleaning and validity.',
    requiredMentions: [
      'objectid 1291',
      '100,000,000,000,000',
      '24 June 2027',
      '19.21',
      '23,576',
      'one million trees by 2040',
      'holding 76.6 percent of the cleaned trees',
      'flags 212 records',
      'Records marked as planted by an organization number 838',
      '43,000 trees a year'
    ],
    sources: [
      { claim: 'City of Brampton: Brampton One Million Trees item (CC BY, programme target and pace, tracker description).', url: 'https://www.arcgis.com/home/item.html?id=b6a1a530a4914ef3bcd1cbb2eb0300ac' },
      { claim: 'City of Brampton: tree planting tracker open data feature service.', url: 'https://services3.arcgis.com/rl7ACuZkiFsmDA2g/arcgis/rest/services/Tree_Planting_Tracker_Open_Data/FeatureServer' },
      { claim: 'Ontario curriculum content API: MTH1W course record (modelling and coding).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=MTH1W&depth=0' },
      { claim: 'EQAO: 2026-27 windows; Grade 9 adaptive model and course-mark rule.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'CEMC: Gauss contest (eligibility, format, 2027 window).', url: 'https://cemc.uwaterloo.ca/contests/gauss' },
      { claim: 'CEMC: contest list for 2026/27, including the Team Up Challenge.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC: how contests work (entry through a school).', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets for 2026-27.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Brampton population figure: StatCan was not reachable live.',
      'That the programme is ahead of or behind its target: the open tracker layer is a self-reported sample, so no progress claim is made.',
      'That 43,000 trees a year is a City figure: presented only as our arithmetic on the City\'s sentence.',
      'Which version of CC BY applies: the item says only "CC BY", so no version number is printed.',
      'Who entered objectid 1291 or why: not known, not guessed.',
      'Other tutors\' rates in Brampton: not sourced, so not printed.',
      'Any fee figure or currency in the copy: fees render from the template only.',
      'That our lessons earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Names of Brampton schools, boards or private people: not used.',
      'Any affiliation with the City of Brampton, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
