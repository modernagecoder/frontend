'use strict';
// Math tutor, Vancouver (cg- city page, Canada cluster Wave 2, row 168). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: the BC math pathway a Vancouver student follows from Mathematics 9 to Pre-calculus 12 and Calculus 12 (routed to
// the live Calculus 12 spoke, never repeating it); a Statistics 12 style lesson on the City of Vancouver public trees file
// (five-number summary, the 1.5 IQR outlier fence, why one absurd value barely moves a mean, correlation before and after
// cleaning, and a height column that turns out to be rounded into steps); a worked problem of ours; contests; price.
// Sources, read raw (curl -sL -A "Mozilla/5.0"); copies in keyword-research-2026-09/ca/src-pilots/math-tutor-vancouver/:
//  - curriculum.gov.bc.ca, fetched 23 October 2026 (the 22 October fetches by other writers had failed): Mathematics 9
//    content "statistics population versus sample, bias, ethics, sampling techniques, misleading stats"; Foundations of
//    Mathematics and Pre-calculus 10 content (slope, systems, primary trigonometric ratios, arithmetic sequences); Pre-calculus
//    11 "use of sine and cosine laws to solve non-right triangles, including ambiguous cases"; Pre-calculus 12 "geometric
//    sequences connecting to exponential functions", "infinite geometric series", "using common and natural logarithms";
//    Foundations of Mathematics 11 "measures of central tendency, standard deviation, confidence intervals, z-scores,
//    distributions", "square-cube law"; Statistics 12 "Graphical methods should always be used to explore data.", "five-number
//    summary", "Chebyshev's inequality" (curly apostrophe in source), "correlation and causation", "68-95-99.7 rule", "Software
//    should be used (e.g., Minitab)." Course list (facts-schools-contests.md row 72, math-home.txt): Foundations of Mathematics
//    and Pre-calculus 10, Workplace Mathematics 10, Pre-calculus 11 and 12, Foundations of Mathematics 11 and 12, Calculus 12,
//    Statistics 12.
//  - UBC requirements tool data (ubc-ajax-programs-686.json, saved raw 22 October 2026 by the UBC writer, copied here): Science,
//    Applied Science (Engineering) and Commerce (UBC Sauder School of Business) list "Pre-Calculus 12" under Grade 12 requirements.
//  - BC Gov News 2026AG0013-000209 (ca/src/geo/tz): "Pacific time will be set seven hours behind co-ordinated universal time
//    (UTC-7)"; permanent after "Sunday, March 8, 2026". India UTC+5:30, 12 hours 30 minutes ahead (facts-geo.md section 3).
//  - facts-geo.md: Lower Mainland 604 overlaid by 236/672/778 and 257. No populations used.
//  - CEMC (facts-schools-contests.md): Gauss, Pascal/Cayley/Fermat, Fryer/Galois/Hypatia, Euclid dates; "all students must
//    participate through their school". CMS: COMC 2026 on "Thursday, October 29th", last registration day "Thursday, October
//    22nd"; COMC to CMO and CJMO "Approximately 100 - 120 top-ranking students" (en dash in source).
//  - City of Vancouver Open Data, "Public trees" (catalog record meta_public_trees.json): publisher City of Vancouver; licence
//    "Open Government Licence - Vancouver"; description "The public tree dataset includes a listing of public trees on
//    boulevards and public trees in parks, in the City of Vancouver"; "Private trees are not included in the inventory.";
//    "it may be several years between updates for some attributes"; record count 184268. CSV export (selected columns)
//    downloaded with curl on 23 October 2026 at 09:04 UTC, public-trees.csv, 12,102,030 bytes. Licence (licence.html,
//    opendata.vancouver.ca/pages/licence/): "including for commercial purposes"; attribution "Contains information licensed
//    under the Open Government Licence - Vancouver." (en dash in source); "suggests any official status or that the Information
//    Provider endorses you".
// Our own calculations (count_trees.py, worked.py, python -I; outputs *.out.txt): 184,268 rows, all distinct asset_id; 477
// rows with diameter 0 and 3 with height 0; 183,791 positive diameters: min 0.6, Q1 10.2, median 25.4, Q3 45.7, max 6,673.0 cm
// (statistics.quantiles, inclusive method); IQR 35.5; upper fence 98.95; 3,925 above it; 14 above 300 cm; one above 1,000 cm
// (asset 68485, pin oak, Mount Pleasant); next largest 779.0; mean 32.48, 32.45 without the maximum; 84 distinct heights, the
// eight commonest hold 93.7% of rows (4.6 m 47,282; 7.6 m 42,846; 10.7 m 28,512; 13.7 m 26,236; 16.8 m 12,819; 19.8 m 7,877);
// correlation diameter and height r = 0.651 on 183,788 pairs, 0.755 on the 179,863 inside the fence; maple r 0.807, cherry and
// plum (Prunus) 0.636; 171 genus labels; median diameter by genus Acer 22.9, Prunus 33.0, Quercus 30.5, Fraxinus 32.8, Tilia 36.8;
// 22 local areas, 3,901 rows with none. The reading of the height steps as ten-foot bands is our inference, labelled as such.
// Worked problem (ours, invented values): 8, 12, 15, 21, 25, 30, 38, 46, 240 gives Q1 15, median 25, Q3 38, IQR 23, upper fence
// 72.5; mean 48.33, 24.38 without 240; median 23 without it.
// Lesson family: resistant and non-resistant statistics, outlier fences, correlation and data cleaning.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TREES = [
  'import csv, statistics',
  '',
  'with open("public-trees.csv", encoding="utf-8-sig") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'sizes = sorted(float(r["diameter_cm"]) for r in rows',
  '               if float(r["diameter_cm"]) > 0)',
  'q1, median, q3 = statistics.quantiles(sizes, n=4, method="inclusive")',
  'fence = q3 + 1.5 * (q3 - q1)',
  'print("five-number summary:", sizes[0], q1, median, q3, sizes[-1])',
  'print("upper fence:", round(fence, 2))',
  'print("trees beyond it:", sum(1 for s in sizes if s > fence))',
  'print("mean:", round(statistics.mean(sizes), 2))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'VANCOUVER MATH', label: 'Math tutor in Vancouver', blurb: 'Math help for Vancouver students from Mathematics 9 to Calculus 12, the BC pathway explained, and a statistics lesson on the city\'s public trees file.' },
  market: CA,
  slug: 'math-tutor-vancouver',
  code: 'mtuv',
  accent: '#664D1C',
  accentRationale: 'Vancouver math: a dark cedar-bark brown, #664D1C, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 7.9 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Vancouver',
    eyebrow: 'Math tutor, Vancouver, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Vancouver',
  title: 'Math Tutor Vancouver | Live Online, Math 9 to Calculus 12',
  description: 'Live online math tutoring for Vancouver students: the BC pathway from Math 9 to Pre-calculus 12 and Calculus 12, a city tree data statistics lesson, contests.',
  ogDescription: 'One Vancouver street tree is recorded as 66 metres across. A math tutor page that teaches outliers with the city\'s own data, and maps BC math from Grade 9 up.',
  twitterDescription: 'Math tutoring for Vancouver students, live online, from Mathematics 9 to Pre-calculus 12 and Calculus 12.',
  ogImageCourse: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Vancouver Students',
    description: 'Live online math for Vancouver students from Grade 1 to Grade 12: number sense, Mathematics 9, Foundations of Mathematics and Pre-calculus 10, Pre-calculus 11 and 12, Calculus 12 and Statistics 12 support, and contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Vancouver',
  capsuleQ: 'Where does a Vancouver student find a live math tutor?',
  capsule: 'Modern Age Coders is an online math tutor for Vancouver students, teaching live with a real teacher from Grade 1 up to Pre-calculus 12 and Calculus 12, either one to one or in a group of fifteen to twenty at the same level. Senior students usually take Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1; contest fans take Waterloo Math Contests. Lesson one is free.',
  lead: 'British Columbia splits its math courses earlier than many parents realise. After Mathematics 9, a Vancouver student chooses between Foundations of Mathematics and Pre-calculus 10 and Workplace Mathematics 10, and by Grade 11 the Foundations and Pre-calculus routes have separated. UBC&rsquo;s requirements data lists Pre-Calculus 12 for Science, Applied Science (Engineering) and Commerce, so the choice made at fifteen shows up again at seventeen. This page lays out that pathway using the province&rsquo;s own course descriptions, teaches one statistics lesson on the City of Vancouver&rsquo;s public tree records, works a problem from scratch, then covers contests and how to judge tutoring prices.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Vancouver.',

  picks: {
    eyebrow: 'Math course picks for Vancouver',
    h2: 'Where Vancouver students usually start',
    intro: 'Each pick lines up with a stretch of the BC pathway. The free first lesson checks the fit by listening to how the student explains a problem.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Integers, fractions, ratio and first equations, so that Mathematics 9 starts with rational-number fluency rather than a gap to fill.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 11', note: 'Mathematics 9, Foundations of Mathematics and Pre-calculus 10, and Pre-calculus 11 or Foundations 11, taught step by step with written reasoning.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12', note: 'Pre-calculus 12 support that follows the school&rsquo;s unit order: functions, logarithms, sequences and trigonometry. BC credits come from the school, not from us.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Original contest-style problems, plus the free CEMC archive, for students who enjoy questions that do not come with a method attached.' }
    ]
  },

  sections: [
    {
      id: 'pathway', tint: '', eyebrow: 'BC math in Vancouver',
      h2: 'The BC math pathway a Vancouver student follows',
      intro: 'Vancouver public schools teach the British Columbia curriculum. The course names and content phrases below come from curriculum.gov.bc.ca, read on 23 October 2026; quoted wording is the province&rsquo;s and the summaries are ours.',
      body: [
        { kind: 'table', caption: 'BC secondary math courses on the provincial curriculum site, with one content phrase from each. Quoted phrases from curriculum.gov.bc.ca; the right-hand column is our summary', head: ['Course', 'One phrase from its content list', 'What it means for the student'], rows: [
          ['Mathematics 9', '&ldquo;statistics population versus sample, bias, ethics, sampling techniques, misleading stats&rdquo;', 'Statistics starts as critical reading: who was asked, and could the graph mislead?'],
          ['Foundations of Mathematics and Pre-calculus 10', 'Slope, systems of linear equations, primary trigonometric ratios and arithmetic sequences', 'The shared Grade 10 course for students keeping both senior routes open'],
          ['Pre-calculus 11', '&ldquo;use of sine and cosine laws to solve non-right triangles, including ambiguous cases&rdquo;', 'Quadratics, radicals and rational expressions, then trigonometry beyond right angles'],
          ['Foundations of Mathematics 11', '&ldquo;measures of central tendency, standard deviation, confidence intervals, z-scores, distributions&rdquo;', 'Logic, statistics, optimization and the square-cube law of scale models'],
          ['Pre-calculus 12', '&ldquo;geometric sequences connecting to exponential functions&rdquo;', 'Transformations, logarithms, polynomials, series and radian trigonometry'],
          ['Calculus 12', 'Limits, derivatives and integrals', 'Read our <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 tutor page</a> for the full course'],
          ['Statistics 12', '&ldquo;Graphical methods should always be used to explore data.&rdquo;', 'Study design, distributions and correlation; the tree lesson below lives here']
        ] },
        { kind: 'p', text: 'Two features of that list matter more than any single topic. First, Workplace Mathematics 10 sits beside the shared Grade 10 course, and Foundations 11 and Pre-calculus 11 run on separate tracks, so a family whose child moves off the Pre-calculus route should ask the school early what that means for Grade 12. Second, Statistics 12 exists as its own course in BC; its content list names the five-number summary, Chebyshev&rsquo;s inequality, the 68-95-99.7 rule and correlation and causation, and it says outright that software should be used.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What UBC asks for', p: 'UBC&rsquo;s own requirements data lists Pre-Calculus 12 under the Grade 12 requirements for Science, for Applied Science (Engineering) and for Commerce at the UBC Sauder School of Business. Our <a class="cg-inline-link" href="/ubc-computer-science-admission-requirements">UBC Computer Science page</a> covers the computing side.' },
          { h3: 'Grade 9 is not a warm-up', p: 'Mathematics 9 already covers operations with rational numbers, exponent laws, polynomials, multi-step linear equations and two-variable linear relations. Students who are shaky on negative fractions here tend to stall when slope arrives in Grade 10.' },
          { h3: 'Calculus is optional, not extra', p: 'Calculus 12 is a separate course from Pre-calculus 12. In the UBC requirements data we saved it appears once, as recommended for one program, and not at all for Science or Engineering. A student taking both in one year carries two heavy courses, which is where one-to-one help earns its keep.' }
        ] },
        { kind: 'callout', h3: 'What our lessons are, and are not', p: 'We teach alongside the course a Vancouver student is taking at school, and we do not grant BC credits; marks and credits for every course from Mathematics 9 to Calculus 12 come from the school. We are not connected with the BC Ministry of Education and Child Care, UBC, the City of Vancouver or any Vancouver school district.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Vancouver data lesson',
      h2: 'A street tree 66 metres wide? Finding outliers in Vancouver&rsquo;s public trees file',
      intro: 'The City of Vancouver publishes its public tree inventory as open data. Statistics 12 students summarise the trunk diameters, set a fence for outliers and find out what one impossible number does to each statistic. Every figure here is ours.',
      body: [
        { kind: 'p', text: 'The file is called Public trees. The City describes it as a listing of public trees on boulevards and public trees in parks, in the City of Vancouver, and warns that private trees are not included in the inventory and that it may be several years between updates for some attributes. Our export on 23 October 2026 held 184,268 rows, each with a genus, a species, a height in metres, a trunk diameter in centimetres and one of the city&rsquo;s 22 local areas.' },
        { kind: 'table', caption: 'Five-number summary of trunk diameter, our calculation on the 183,791 trees with a diameter above zero. City of Vancouver Open Data, Public trees, downloaded 23 October 2026; quartiles by Python&rsquo;s inclusive method', head: ['Statistic', 'Diameter (cm)'], rows: [
          ['Minimum', '0.6'],
          ['First quartile, Q1', '10.2'],
          ['Median', '25.4'],
          ['Third quartile, Q3', '45.7'],
          ['Maximum', '6,673.0'],
          ['Interquartile range', '35.5'],
          ['Upper fence, Q3 + 1.5 &times; IQR', '98.95'],
          ['Mean', '32.48']
        ] },
        { kind: 'p', text: 'The maximum is the first thing a careful student questions. A trunk 6,673 cm across is a tree more than 66 metres wide; the record, asset 68485, is a pin oak in Mount Pleasant, and the next largest tree in the file measures 779.0 cm. One extra digit typed at entry would explain it, but the file cannot tell us, so we flag it rather than fix it. What the value does is instructive: drop it, and the mean moves only from 32.48 to 32.45 cm, because one value among 183,791 has little pull on an average. The maximum and the range, though, are ruined by it.' },
        { kind: 'p', text: 'The Python behind the table reads the export, keeps positive diameters, finds the quartiles and the fence, and counts what lies beyond it. Only the standard library is needed:<code class="cg-mt-2">' + TREES + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Outside the fence is not wrong', p: 'Our script finds 3,925 trees above the 98.95 cm fence. Almost all are simply big old trees, which Vancouver has plenty of. The 1.5 IQR rule marks values worth a second look, not values to delete, and students must say that in words.' },
          { h3: 'Zeros are missing data', p: 'There are 477 rows with a diameter of 0 and 3 with a height of 0. A tree with no trunk is not a tiny tree; it is a measurement nobody recorded. Leaving zeros in would drag the first quartile down for no good reason.' },
          { h3: 'Heights come in steps', p: 'The file holds only 84 distinct heights, and the eight commonest cover 93.7 percent of rows: 4.6, 7.6, 10.7, 13.7, 16.8 and 19.8 m lead. The steps are about 3 m apart, which we read as ten-foot bands converted to metres; that reading is ours, not the City&rsquo;s.' }
        ] },
        { kind: 'callout', h3: 'Correlation, before and after cleaning', p: 'Across 183,788 trees with both measurements above zero, our correlation between diameter and height is r = 0.651. Keep only trees inside the fence and it rises to 0.755. For maples alone it is 0.807; for the Prunus genus, cherries and plums, 0.636. Thicker trees tend to be taller, but the height steps blur the pattern, and nothing here says diameter causes height: both grow with age, the lurking variable Statistics 12 warns about.' },
        { kind: 'p', text: 'A follow-up session compares genera. Our medians are 22.9 cm for maples (Acer, the commonest of 171 genus labels, with 41,976 trees), 33.0 cm for Prunus and 36.8 cm for lindens (Tilia). Side-by-side box plots make that comparison in one picture. Contains information licensed under the Open Government Licence - Vancouver. We use the file under those terms, which permit commercial reuse (<a class="cg-inline-link" href="https://opendata.vancouver.ca/pages/licence/">licence</a>, <a class="cg-inline-link" href="https://opendata.vancouver.ca/explore/dataset/public-trees/">dataset page</a>). The City of Vancouver does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: what one huge value does to a mean and a median',
      intro: 'The nine diameters below are invented by us, not taken from the file, so the arithmetic can be done by hand. The method is the one the Vancouver data needs.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> A student measures nine trunks on one block, in centimetres: 8, 12, 15, 21, 25, 30, 38, 46 and 240. (a) Find the five-number summary and the interquartile range. (b) Use the 1.5 IQR rule to decide whether 240 is an outlier. (c) Compare the mean and the median with and without it, and say which you would report.' },
        { kind: 'p', text: '<strong>Step 1, order and split.</strong> The list is already in order. With nine values the median is the fifth, 25. Using the method our Python uses here (the median of each half, counting the middle value in both), Q1 is 15 and Q3 is 38. So the summary is 8, 15, 25, 38, 240, and the IQR is 38 minus 15, which is 23.' },
        { kind: 'p', text: '<strong>Step 2, build the fences.</strong> 1.5 times 23 is 34.5. The upper fence is 38 plus 34.5, or 72.5, and the lower fence is 15 minus 34.5, which is negative and so catches nothing. 240 is far beyond 72.5, so it is an outlier by this rule. Whether it is an error is a separate question, answered by going back to the tree.' },
        { kind: 'p', text: '<strong>Step 3, compare centres.</strong> With all nine values the mean is 435 divided by 9, about 48.33, nearly twice the median. Without 240 the mean is 195 divided by 8, about 24.38, and the median of the remaining eight is the average of 21 and 25, which is 23. The median barely moved; the mean halved. Report the median, and mention the outlier in a sentence.' },
        { kind: 'p', text: '<strong>Step 4, contrast with the city file.</strong> In our nine-tree example one outlier doubles the mean. In the Vancouver file a far wilder value moved the mean by three hundredths of a centimetre. The difference is the sample size: one value among nine carries a ninth of the weight; one among 183,791 carries almost none. That contrast is a Statistics 12 idea in one line.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Replace 240 with 60 and redo the fence test. (2) Find the standard deviation of the eight values without 240 and a z-score for 46, the Foundations 11 way. (3) Explain why a box plot shows the outlier clearly while a mean alone hides it. We go through answers in the free lesson.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Vancouver students',
      h2: 'Math contests open to Vancouver students in 2026 to 2027',
      intro: 'Most contests a Vancouver student writes are national, run by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo and the Canadian Mathematical Society (CMS). Dates are the organisers&rsquo; own, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Selected national math contests for 2026 to 2027 and how a Vancouver student enters. Dates as CEMC and the CMS list them', head: ['Contest', 'Organiser', 'Who it is for', 'Date'], rows: [
          ['COMC', 'CMS', 'High school students; registration closed Thursday 22 October 2026', 'Thursday 29 October 2026'],
          ['Pascal, Cayley, Fermat', 'CEMC', 'Grades 9, 10 and 11', '23 and 24 February 2027'],
          ['Fryer, Galois, Hypatia', 'CEMC', 'Grades 9, 10 and 11, written solutions', '7 April 2027'],
          ['Euclid', 'CEMC', 'Final year of secondary school', '6 April 2027'],
          ['Gauss', 'CEMC', 'Grades 7 and 8', '10 to 21 May 2027']
        ] },
        { kind: 'p', text: 'The CMS path is the one that leads furthest. Its Canadian Open Mathematics Challenge feeds the Canadian Mathematical Olympiad: the CMS says approximately 100 to 120 top-ranking COMC students are invited to write the CMO or its junior version each March. Registration for the 2026 COMC closed on 22 October 2026, so a Vancouver student starting now should aim at the 2027 cycle and use the CEMC February contests as practice under time. Our <a class="cg-inline-link" href="/comc-canada-open-mathematics-challenge-guide">COMC guide</a> and <a class="cg-inline-link" href="/canadian-math-olympiad-cmo-path">CMO path page</a> cover both steps.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry runs through schools', p: 'CEMC says all students must participate through their school. If a Vancouver school does not order a contest, CEMC suggests the student look for another local school willing to host them.' },
          { h3: 'Practice that costs nothing', p: 'CEMC keeps the last ten years of its contests in a free archive with no sign-up, which is where we send students for timed practice between lessons.' },
          { h3: 'Original problems only', p: 'Our contest lessons use problems we write ourselves, labelled as ours. We never copy CEMC&rsquo;s or the CMS&rsquo;s papers or solutions, and we are connected with neither organisation.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Vancouver',
      h2: 'Math tutor prices in Vancouver: what to compare before you choose',
      intro: 'Our own fees sit in the fees section below and display in your local currency, so there are no figures in this text. Here is how to weigh one tutoring offer against another.',
      body: [
        { kind: 'table', caption: 'A comparison frame for Vancouver families. The descriptions of our formats are ours; we do not publish anyone else&rsquo;s prices', head: ['', 'Our group class', 'Our one-to-one', 'What to ask elsewhere'], rows: [
          ['Sessions per month', 'Eight live classes', 'Eight live classes, at times you pick', 'Is the price per hour, per session or per month?'],
          ['Students per teacher', 'Fifteen to twenty at one level', 'One', 'Is the group set by level or by age?'],
          ['Curriculum', 'BC courses by name, from Mathematics 9 to Calculus 12', 'The student&rsquo;s own course and unit', 'Does the tutor know Foundations from Pre-calculus?'],
          ['Commute', 'None', 'None', 'Who travels, and for how long?'],
          ['Trial', 'One free live lesson', 'One free live lesson', 'Can you see a lesson before paying?']
        ] },
        { kind: 'p', text: 'The cheapest offer is not always the cheapest per hour of actual learning. A Vancouver family comparing options should count the sessions that will really happen in a busy school month, subtract travel, and then ask who does most of the solving in each session. We suggest a group class for steady progress through a course and one to one for a defined gap, such as logarithms in Pre-calculus 12, or for a student carrying Calculus 12 and Pre-calculus 12 in the same semester.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From early number sense to Calculus 12',
    intro: 'The grade labels are approximate. Placement depends on what the student can already explain, which the free lesson finds out.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Counting with reasons', p: 'Number sense, addition and subtraction strategies and early patterns, with every answer explained aloud.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 8', h3: 'Fractions and ratio', p: 'Fractions, decimals, integers and first equations, the ground Mathematics 9 is built on.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 9 to 11', h3: 'Choosing a route', p: 'Mathematics 9 and the shared Grade 10 course, then Pre-calculus 11 or Foundations 11 with a clear view of where each leads.', courses: ['complete-high-school-mathematics-mastery', 'statistics-probability-maths-course'] },
      { band: 'Grade 12', h3: 'Pre-calculus and beyond', p: 'Pre-calculus 12, Calculus 12 or Statistics 12, with contest problems for students who want more.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Why a Vancouver student still has to understand the statistics',
    intro: 'An AI tool will summarise a data file instantly. Whether the summary is honest is a human decision.',
    p1: 'Ask a chatbot for the largest street tree in Vancouver and it may well report a trunk 66 metres wide without blinking. It has no reason to doubt the file. A student who has computed a fence, compared the maximum with the next value and thought about how a trunk is measured knows to stop and check.',
    p2: 'That is why our teachers have students estimate before computing and write one sentence about what each result means. Teenagers meet AI tools only within the age limits we keep to, and treat them as a checker for finished work rather than a producer of it. Graded school assignments stay the student&rsquo;s own work.',
    closer: 'BC&rsquo;s Grade 9 course asks students to spot misleading statistics; that habit is exactly what an AI summary needs from its reader.',
    blogAnchor: 'why reasoning still matters when AI can answer'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math works from a Vancouver home',
    intro: 'A student in Kitsilano and one in Renfrew-Collingwood can share one teacher without crossing the city.',
    cells: [
      { h3: 'Schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Pacific time, now fixed', p: 'BC moved to permanent UTC-7 after clocks went forward on 8 March 2026, so Vancouver no longer falls back in November. India is 12 hours 30 minutes ahead all year, and every invitation is written in Pacific time.' },
      { h3: 'Visible working', p: 'Students solve on a whiteboard the teacher can see in real time, so a sign error in line two is caught in line two.' },
      { h3: 'BC course names', p: 'Teachers plan by the student&rsquo;s course, so a Foundations 11 lesson and a Pre-calculus 11 lesson are not the same lesson.' },
      { h3: 'Vancouver numbers', p: 'Mobiles on 604, 778, 236, 672 or 257 work in the form. Enter the ten digits; the +1 is added for you.' },
      { h3: 'First lesson free', p: 'A full lesson with no charge and no card, finishing with a suggested course, level and lesson time.' }
    ],
    spec: { title: 'No Vancouver office', p: 'We run no tutoring centre in Vancouver and claim none. Our teachers are in India and every lesson is live online; the student needs a computer, a microphone and a dependable internet connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Vancouver families',
    intro: 'Three lines, displayed in the currency of your location.',
    first: 'One full live lesson at no charge, with a suggested course and level at the end.',
    group: 'The monthly fee for eight live classes with fifteen to twenty students at one stage.',
    private: 'The monthly fee for eight one-to-one lessons with a single teacher.',
    closer: 'The fee in Vancouver is the same as anywhere else in Canada. Billing begins only once the free lesson is done and a course and time are agreed; holiday and missed-class rules are on the pricing page.'
  },

  reviewsH2: 'Families on Google, in their own words',

  book: {
    h2: 'Book a free math lesson in Vancouver',
    intro: 'Give us the grade and the BC course name if there is one. A Grade 4 child might begin with fraction strips; a Statistics 12 student might begin with the tree file.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Vancouver.'
  },

  faq: {
    h2: 'Vancouver math tutoring questions',
    intro: 'Quick answers to what Vancouver families ask us most.',
    items: [
      { q: 'Do you offer a math tutor in Vancouver?', a: 'Yes, live online. We have no Vancouver centre. A teacher teaches each lesson in real time, to one student or to a group of fifteen to twenty at one level.' },
      { q: 'How much is a math tutor in Vancouver with you?', a: 'Scroll to the fees section: it lists a free first lesson, then a monthly price for group classes and another for one-to-one, shown in your own currency. Nothing is charged before that free lesson.' },
      { q: 'Should my child take Foundations 11 or Pre-calculus 11?', a: 'It depends on the goal. UBC lists Pre-Calculus 12 for Science, Engineering and Commerce. If those doors matter, ask the school which Grade 11 course it expects before Pre-calculus 12, and get help early.' },
      { q: 'Do you tutor Calculus 12?', a: 'Yes, alongside the school course. Our Calculus 12 tutor page sets out the content, and many students take it in the same year as Pre-calculus 12.' },
      { q: 'Can you help with Statistics 12?', a: 'Yes. The tree lesson on this page is a sample: five-number summaries, outlier fences and correlation, with Python doing the counting and the student doing the judging.' },
      { q: 'Will lessons give my teen a BC credit?', a: 'No. We do not grant BC credits. Every credit and mark comes from the student\'s school; our lessons support the school course.' },
      { q: 'Is the COMC still open for 2026?', a: 'No. The CMS set Thursday 22 October 2026 as the last registration day for the COMC on Thursday 29 October 2026. Students can prepare for the 2027 cycle and the CEMC February contests.' },
      { q: 'What time are lessons for Vancouver?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. BC stays on UTC-7 all year, so the time does not jump in November.' },
      { q: 'Do you teach students in Burnaby, Richmond and North Vancouver?', a: 'Yes. Lessons are online, so students across Metro Vancouver join the same classes on the same Pacific clock.' },
      { q: 'My child is in Grade 8 and finds math hard. Where do we start?', a: 'With fractions, integers and equations, because Mathematics 9 builds on all three. The free lesson shows which of them needs attention first.' }
    ]
  },

  next: {
    eyebrow: 'More for Vancouver and Canada',
    h2: 'Other pages for Vancouver math students',
    html: 'For the country as a whole, see <a class="cg-inline-link" href="/online-math-tutor-canada">our online math tutor page for Canada</a>; for the province, <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>. Senior students can read <a class="cg-inline-link" href="/calculus-12-tutor-bc">Calculus 12 tutoring</a> and <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">high school math courses compared across Canada</a>, and families teaching at home can read <a class="cg-inline-link" href="/homeschool-coding-and-math-bc">homeschool math and coding in BC</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Vancouver math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/calculus-12-tutor-bc', label: 'Calculus 12' },
    { href: '/comc-canada-open-mathematics-challenge-guide', label: 'COMC guide' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' }
  ],

  personalityCss: `
.cg-root.cg-mtuv .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-mtuv .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mtuv .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.008em; }
.cg-root.cg-mtuv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtuv .cg-table caption { text-align: left; font-weight: 640; }
.cg-root.cg-mtuv #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-mtuv #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtuv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 23 October 2026 from curriculum.gov.bc.ca and saved raw: Mathematics 9, Foundations of Mathematics and Pre-calculus 10, Workplace Mathematics 10, Pre-calculus 11 and 12, Foundations of Mathematics 11, Statistics 12 content lists (quoted phrases); course list incl. Calculus 12 (facts-schools-contests.md row 72); UBC requirements data (Pre-Calculus 12 for Science, Applied Science and Commerce); BC permanent UTC-7 (BC Gov News 2026AG0013-000209); Lower Mainland area codes (facts-geo.md); CEMC 2026-27 dates and the through-a-school rule; CMS COMC 2026 date, closed registration and the CMO invitation range.',
    localProject: 'City of Vancouver Open Data, Public trees (Open Government Licence - Vancouver, commercial use allowed), CSV export downloaded 23 October 2026 and analysed with our scripts count_trees.py and worked.py (python -I): 184,268 rows; five-number summary of 183,791 positive diameters 0.6, 10.2, 25.4, 45.7, 6,673.0 cm; IQR 35.5, fence 98.95, 3,925 beyond it; asset 68485 pin oak flagged, next largest 779.0; mean 32.48 and 32.45 without it; 477 zero diameters, 3 zero heights; 84 distinct heights, eight hold 93.7% of rows; r = 0.651, 0.755 inside the fence, Acer 0.807, Prunus 0.636; genus medians. Labelled as ours. Lesson family: resistant statistics, outlier fences, correlation and cleaning.',
    requiredMentions: [
      'asset 68485',
      '6,673 cm across',
      '3,925 trees above the 98.95 cm fence',
      'from 32.48 to 32.45 cm',
      'r = 0.651',
      'only 84 distinct heights',
      '477 rows with a diameter of 0',
      'UBC Sauder School of Business',
      'about 48.33, nearly twice the median',
      'Statistics 12 exists as its own course in BC'
    ],
    sources: [
      { claim: 'City of Vancouver Open Data: Public trees dataset (description, licence field, data currency notes).', url: 'https://opendata.vancouver.ca/explore/dataset/public-trees/' },
      { claim: 'City of Vancouver: Open Government Licence - Vancouver (commercial use, attribution, no implied endorsement).', url: 'https://opendata.vancouver.ca/pages/licence/' },
      { claim: 'BC curriculum: Statistics 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/statistics' },
      { claim: 'BC curriculum: Pre-calculus 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus' },
      { claim: 'BC curriculum: Pre-calculus 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus' },
      { claim: 'BC curriculum: Foundations of Mathematics 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/foundations-of-mathematics' },
      { claim: 'BC curriculum: Mathematics 9 content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/9/core' },
      { claim: 'BC curriculum: mathematics course list.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics' },
      { claim: 'BC Gov News: permanent daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CMS: COMC 2026 date, registration close and CMO invitations.', url: 'https://cms.math.ca/competitions/comc/' },
      { claim: 'CEMC: contest dates for 2026/27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Vancouver or Metro Vancouver population figure: StatCan was not reachable live.',
      'That the 6,673 cm record is a typing error: the page flags it and says the file cannot tell us why.',
      'That the height steps are ten-foot bands: labelled as our inference, not a City statement.',
      'BC graduation requirements and the Grade 10 numeracy assessment: the provincial page could not be reached, so nothing about them is printed.',
      'That UBC requires Calculus 12: not printed; the saved data shows it as recommended for one program only.',
      'That our lessons earn BC credits or help UBC admission: refused.',
      'CMS and CEMC fees: left out (currency-neutral page).',
      'Names of Vancouver schools, districts\' results or private people: not used.',
      'Any affiliation with the City of Vancouver, the BC Ministry of Education and Child Care, UBC, CEMC or the CMS.'
    ]
  }
};
