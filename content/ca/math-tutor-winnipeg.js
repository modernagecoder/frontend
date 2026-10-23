'use strict';
// Math tutor, Winnipeg (cg- city page, Canada cluster Wave 2, row 173). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md (section "Province, city and math-tutor city pages").
// Spine: Manitoba math as a Winnipeg student meets it (Grade 3 numeracy and Grade 7 mathematics assessments, two new Grade 9
// courses in pilot, the Grade 12 Applied, Essential and Pre-Calculus provincial tests that count for 20 per cent); a Pre-Calculus
// 40S combinatorics and probability lesson on the City of Winnipeg Tree Inventory (the chance that two random public trees share
// a name, by neighbourhood); a worked combinations problem of ours; CEMC contests; the clock that stops changing on 1 November
// 2026; price. No Manitoba province page is live yet, so the only parent is the Canada hub.
// Sources, read raw (curl -sL -A "Mozilla/5.0") on 23 October 2026 by this writer; copies in
// keyword-research-2026-09/ca/src-pilots/math-tutor-winnipeg/:
//  - edu.gov.mb.ca/k12/assess/index.html (k12_assess_index.txt): Grade 3 Assessment in Reading, Lecture, and Numeracy results
//    collected "Monday, October 19 to Friday, November 27, 2026"; "Grade 7 - Mathematics" (en dash in source) collected
//    "Monday, January 18 to Friday, February 26, 2027"; Grade 7 assessment of "student engagement, number skills and number
//    sense"; Grade 12 Applied Mathematics Achievement Test "Tuesday, January 26, 2027" and "Thursday, June 17, 2027"; Essential
//    "Wednesday, January 27, 2027" and "Wednesday, June 16, 2027"; Pre-Calculus "Thursday, January 28, 2027" and "Tuesday, June 15,
//    2027"; "Administered at the end of each semester"; "Marked locally by teachers according to marking guidelines and training
//    offered by the department"; "Tests count for 20 per cent of students' final grades for Language Arts, Applied Mathematics,
//    Pre-Calculus Mathematics, or Essential Mathematics" (curly apostrophe in source).
//  - edu.gov.mb.ca/k12/framework (k12_cur_math_index.txt): "Two new Grade 9 Mathematics courses, incorporating an enhanced focus on
//    financial literacy, are posted for pilot and voluntary implementation in 2026/27, with full implementation planned for
//    school year 2027/28." Grade 9 list (fw_english_math_math_gr9.txt): "Grade 9 Mathematics - Course I (Draft)", "Course II
//    (Draft)", Transitional Mathematics. Grade 12 list (fw_english_math_math_gr12.txt): Essential, Applied, Pre-Calculus,
//    Introduction to Calculus, Advanced Mathematics I and II. Grade 12 Pre-Calculus (fw_english_math_grade_12_precal.txt): "Course
//    Code 3939", "Course Credit 1"; overview "develop trigonometric reasoning", "of logarithms", "combinatorics by applying the
//    counting principles". Grade 12 Applied: "Course Code 3903".
//  - Manitoba news release 75397 (gov__item_75397.txt, from ca/src/geo/tz): "This change means Manitobans' clocks will not revert
//    to standard time on Nov. 1." facts-geo.md: Manitoba UTC-5 all year from 2026-10-31; India 10 hours 30 minutes ahead; area
//    codes 204, 431, 584. No populations used.
//  - CEMC (facts-schools-contests.md): Gauss, Pascal/Cayley/Fermat, Fryer/Galois/Hypatia, Euclid dates; through a school; past
//    contests free; "Our contests are not tests or exams."
//  - City of Winnipeg open data, "Tree Inventory" (Socrata hfwk-jp4h, meta_trees.json): description "Detailed list and map of all
//    public trees located in the City of Winnipeg, including botanical name, common name and precise location."; department
//    Public Works; update interval Weekly; licence custom field "Open Government Licence - Winnipeg". Grouped counts fetched with
//    the SODA API on 23 October 2026 at 09:41 UTC (count 305969; by_species.json; by_nbhd_species.json; by_botanical.json).
//    Licence (licence.html, data.winnipeg.ca/open-data-licence): "including for commercial purposes"; attribution "Contains
//    information licensed under the Open Government Licence - Winnipeg." (en dash in source); "suggests any official status or
//    that the Information Provider endorses you".
// Our own calculations (trees.py and worked.py, python -I; outputs *.out.txt): 305,969 trees, 197 common-name labels (197
// botanical labels); green ash 81,895 (26.77%), American Elm 39,661 (12.96%), Linden species 28,546, Siberian Elm 17,942, bur oak
// 16,236, Manitoba maple 15,674; chance two random trees share a common-name label 0.1102 (sum of n(n-1) over N(N-1)); both
// green ash 0.0716; 235 neighbourhood labels, 690 trees with none; 160 neighbourhoods with 500+ trees; lowest share Maybank 0.0613
// (1,078 trees, 69 labels), highest Southland Park 0.431 (696 trees, green ash 452); at least eight labels contain "elm".
// Worked problem (invented street): 5 ash, 3 elm, 2 linden: C(5,2) 10 + C(3,2) 3 + C(2,2) 1 = 14 of C(10,2) 45, 0.3111;
// 10!/(5!3!2!) = 2,520 orders; at least one ash in 3 picks 1 - 10/120 = 0.9167.
// Lesson family: combinations, permutations with repeated elements, and probability from counts.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TREES = [
  'import json',
  'from math import comb',
  '',
  'with open("by_species.json", encoding="utf-8") as f:',
  '    counts = [int(row["n"]) for row in json.load(f)]',
  '',
  'total = sum(counts)',
  'pairs = comb(total, 2)',
  'same_name = sum(comb(n, 2) for n in counts)',
  'print("trees:", total)',
  'print("ways to choose two trees:", pairs)',
  'print("chance both share a name:", round(same_name / pairs, 4))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'WINNIPEG MATH', label: 'Math tutor in Winnipeg', blurb: 'Math help for Winnipeg students from the Grade 3 numeracy assessment to Grade 12 Pre-Calculus, with a combinatorics lesson on the city\'s tree inventory.' },
  market: CA,
  slug: 'math-tutor-winnipeg',
  code: 'mtuw',
  accent: '#703C18',
  accentRationale: 'Winnipeg math: a dark prairie-soil brown, #703C18, allocated for this row and kept at least 14 RGB units from every other Canada accent; contrast 9.1 on the paper #FBF8F2 and above 4.5 on both paper tints (checked by the build gate)',
  pageType: 'city',
  place: {
    name: 'Winnipeg',
    eyebrow: 'Math tutor, Winnipeg, Manitoba',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Manitoba' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Math in Canada', href: '/online-math-tutor-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Math tutor in Winnipeg',
  title: 'Math Tutor Winnipeg | Live Online, Grade 1 to Pre-Calculus 40S',
  description: 'Live online math tutoring for Winnipeg students: Manitoba assessments, the Grade 12 provincial math tests, a city tree data combinatorics lesson, and contests.',
  ogDescription: 'Pick two of Winnipeg\'s 305,969 public trees at random: there is an 11 percent chance they share a name. A math tutor page built on that calculation.',
  twitterDescription: 'Math tutoring for Winnipeg students, live online, from early numeracy to Grade 12 Pre-Calculus Mathematics.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Math Tutoring for Winnipeg Students',
    description: 'Live online math for Winnipeg students from Grade 1 to Grade 12: early numeracy, middle years number sense, Grade 9 mathematics, Grade 10 to 12 Essential, Applied and Pre-Calculus Mathematics support, and CEMC contest problem solving, in a group of fifteen to twenty or one to one.'
  },

  h1: 'Math tutor in Winnipeg',
  capsuleQ: 'How can a Winnipeg student get a live math tutor?',
  capsule: 'Modern Age Coders teaches math live online to Winnipeg students from Grade 1 to Grade 12 Pre-Calculus Mathematics, one to one or in a group of fifteen to twenty at a single level. Teens usually take High School Mathematics: Algebra to Calculus, and contest fans add Waterloo Math Contests: Gauss to Euclid. We charge nothing for the opening lesson.',
  lead: 'Manitoba checks a child&rsquo;s math at a few fixed points: a classroom-based numeracy assessment in Grade 3, a Grade 7 mathematics assessment of number skills and number sense, and in Grade 12 a provincial test in Essential, Applied or Pre-Calculus Mathematics that counts for 20 per cent of the final grade. In between, the province is piloting two new Grade 9 math courses with more financial literacy. This page explains those steps from Manitoba&rsquo;s own pages, then teaches a lesson in counting and probability on the City of Winnipeg&rsquo;s public tree records, works a problem of the kind Pre-Calculus students meet, and covers contests, class times after Manitoba&rsquo;s clock change, and price.',
  wa: 'Hello Modern Age Coders, I would like a free math lesson for a student in Winnipeg.',

  picks: {
    eyebrow: 'Math course picks for Winnipeg',
    h2: 'Where Winnipeg students usually begin',
    intro: 'Each course matches a stretch of Manitoba math. The free lesson confirms it after the teacher hears the student explain a problem.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Grades 1 to 5', note: 'Number sense, operations, fractions and measurement, the skills the Grade 3 numeracy assessment looks at in the classroom.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', band: 'Grades 6 to 8', note: 'Number skills and number sense, integers, ratio and equations, ahead of the Grade 7 assessment and Grade 9.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Grades 9 to 12', note: 'Grade 9 math through Grade 12 Applied or Pre-Calculus Mathematics, with trigonometry, logarithms and counting. The school grants every Manitoba credit.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', band: 'Grades 7 to 12, contest-minded', note: 'Original problems in the style of the CEMC contests, for students who want harder questions than the course gives them.' }
    ]
  },

  sections: [
    {
      id: 'manitoba', tint: '', eyebrow: 'Manitoba math in Winnipeg',
      h2: 'Manitoba math for a Winnipeg student, from Grade 3 to Grade 12',
      intro: 'Winnipeg&rsquo;s public schools follow Manitoba&rsquo;s curriculum. We read the assessment schedule and course pages on the province&rsquo;s education site on 23 October 2026; quoted wording is Manitoba&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Manitoba provincial math assessments and tests for 2026 to 2027, as Manitoba Education and Early Childhood Learning lists them', head: ['Stage', 'Assessment', 'Dates for 2026 to 2027'], rows: [
          ['Grade 3', 'Grade 3 Assessment in Reading, Lecture, and Numeracy, classroom-based', 'Results collected 19 October to 27 November 2026'],
          ['Grade 7', 'Middle Years assessment in mathematics: student engagement, number skills and number sense', 'Results collected 18 January to 26 February 2027'],
          ['Grade 12', 'Applied Mathematics Achievement Test', 'Tuesday 26 January and Thursday 17 June 2027'],
          ['Grade 12', 'Essential Mathematics Achievement Test', 'Wednesday 27 January and Wednesday 16 June 2027'],
          ['Grade 12', 'Pre-Calculus Mathematics Achievement Test', 'Thursday 28 January and Tuesday 15 June 2027']
        ] },
        { kind: 'p', text: 'The early assessments are formative: Manitoba describes them as classroom-based assessment for and as learning, reported to parents to show a child&rsquo;s strengths and needs. The Grade 12 tests are different. Manitoba says they are administered at the end of each semester, marked locally by teachers according to marking guidelines and training offered by the department, and that they count for 20 per cent of students&rsquo; final grades in Applied, Pre-Calculus and Essential Mathematics. Which test a student writes depends on which Grade 12 course they take, so the course choice in Grade 10 and 11 matters.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9 is changing', p: 'Manitoba says two new Grade 9 Mathematics courses, incorporating an enhanced focus on financial literacy, are posted for pilot and voluntary implementation in 2026/27, with full implementation planned for 2027/28. Its Grade 9 list shows them as Course I and Course II, both marked draft.' },
          { h3: 'Five Grade 12 routes', p: 'The Grade 12 list includes Essential Mathematics, Applied Mathematics, Pre-Calculus Mathematics, Introduction to Calculus and Advanced Mathematics. Pre-Calculus carries course code 3939 and one credit; Applied is 3903.' },
          { h3: 'What Pre-Calculus covers', p: 'Manitoba&rsquo;s overview says Grade 12 Pre-Calculus learners develop trigonometric reasoning, study logarithms and inverses, and reason about combinatorics by applying the counting principles. The tree lesson below is that last idea, on real data.' }
        ] },
        { kind: 'p', text: 'For comparisons with other provinces, our <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">high school math courses compared across Canada</a> sets Manitoba&rsquo;s Grade 12 options beside Ontario, BC and Alberta. For younger children, <a class="cg-inline-link" href="/math-classes-for-kids-in-canada">math classes for kids in Canada</a> explains how we teach number sense from age 6.' },
        { kind: 'callout', h3: 'Our part, and the school&rsquo;s', p: 'Lessons with us run beside a Winnipeg student&rsquo;s school math course. We do not grant Manitoba credits; every credit, grade and provincial test result comes through the school. We are not connected with Manitoba Education and Early Childhood Learning, the City of Winnipeg or any Winnipeg school division.' }
      ]
    },
    {
      id: 'trees', tint: 'deep', eyebrow: 'Winnipeg data lesson',
      h2: 'Two Winnipeg trees at random: what is the chance they share a name?',
      intro: 'The City of Winnipeg publishes every public tree it manages as open data. Pre-Calculus students use combinations to turn the species counts into a probability, then compare neighbourhoods. Every count and probability below is ours.',
      body: [
        { kind: 'p', text: 'The dataset is the Tree Inventory, which the City describes as a detailed list and map of all public trees located in the City of Winnipeg, including botanical name, common name and precise location. It is maintained by Public Works and updated weekly. Rather than download all of it, we asked the City&rsquo;s data service for counts grouped by common name and by neighbourhood on 23 October 2026. It reported 305,969 trees under 197 common-name labels.' },
        { kind: 'table', caption: 'The ten commonest common-name labels in the City of Winnipeg Tree Inventory: our counts and shares, from grouped queries on 23 October 2026', head: ['Common name in the file', 'Trees', 'Share'], rows: [
          ['green ash', '81,895', '26.77%'],
          ['American Elm', '39,661', '12.96%'],
          ['Linden species', '28,546', '9.33%'],
          ['Siberian Elm', '17,942', '5.86%'],
          ['bur oak', '16,236', '5.31%'],
          ['Manitoba maple, boxelder', '15,674', '5.12%'],
          ['Colorado blue spruce', '9,228', '3.02%'],
          ['white spruce', '8,049', '2.63%'],
          ['Poplar species', '6,907', '2.26%'],
          ['flowering crabapple species', '5,323', '1.74%']
        ] },
        { kind: 'p', text: 'Now the counting. The number of ways to choose two trees from 305,969 is C(305,969, 2). The number of ways to choose two that share a label is the sum of C(n, 2) over every label, where n is that label&rsquo;s count. Dividing gives our answer: 0.1102, so two public trees picked at random share a common name about 11 times in 100. The chance that both are green ash alone is 0.0716. The Python takes only a few lines:<code class="cg-mt-2">' + TREES + '</code>' },
        { kind: 'table', mt: true, caption: 'The same probability by neighbourhood, our calculation for the 160 neighbourhoods with at least 500 trees (two extremes at each end)', head: ['Neighbourhood', 'Trees', 'Labels present', 'Chance two share a name'], rows: [
          ['Maybank', '1,078', '69', '0.0613'],
          ['Kingston Crescent', '720', '59', '0.0686'],
          ['East Elmwood', '1,065', '45', '0.4274'],
          ['Southland Park', '696', '46', '0.4310']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the number means', p: 'A low value means a mixed neighbourhood, where two trees are rarely the same kind; a high one means a street planted with mostly one kind. In Southland Park, 452 of 696 trees are green ash, which drives its value above 0.43.' },
          { h3: 'Why combinations, not squares', p: 'Squaring each share gives almost the same city-wide answer, because 305,969 is large. On a street of ten trees the difference is big, and only combinations count it correctly, because the second tree cannot be the same tree as the first.' },
          { h3: 'Labels are not species', p: 'At least eight labels in the file contain the word elm, from American Elm to Brandon American elm, with different capital letters. Our probability is about matching labels, and a careful student says so rather than claiming a species count.' }
        ] },
        { kind: 'callout', h3: 'What we left out on purpose', p: '690 trees carry no neighbourhood, so the neighbourhood table leaves them out, and neighbourhoods with fewer than 500 trees are skipped because a handful of trees can make the value swing wildly. Both choices are ours, and both are written down, which is the habit Grade 12 statistics and probability asks for.' },
        { kind: 'p', text: 'Contains information licensed under the Open Government Licence - Winnipeg. We use the inventory under that licence, which allows commercial use (<a class="cg-inline-link" href="https://data.winnipeg.ca/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://data.winnipeg.ca/Parks/Tree-Inventory/hfwk-jp4h">dataset page</a>). The City of Winnipeg does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'worked', tint: '', eyebrow: 'A worked problem, ours',
      h2: 'Worked problem: counting the trees on one street',
      intro: 'An invented street, written by us at Grade 12 Pre-Calculus level, small enough to count by hand. It uses the three counting ideas Manitoba&rsquo;s course overview names.',
      body: [
        { kind: 'p', text: '<strong>Question.</strong> A Winnipeg street has ten boulevard trees: 5 green ash, 3 elm and 2 linden. (a) Two trees are chosen at random. What is the probability they are the same kind? (b) In how many distinct orders could the ten trees stand along the street, if trees of one kind look alike? (c) If three trees are chosen at random, what is the probability that at least one is an ash?' },
        { kind: 'p', text: '<strong>Step 1, count pairs.</strong> There are C(10, 2) = 45 ways to choose two trees. Same-kind pairs: C(5, 2) = 10 ash pairs, C(3, 2) = 3 elm pairs and C(2, 2) = 1 linden pair, 14 in all. The probability is 14/45, about 0.311, much higher than the city-wide 0.110 because this street is mostly ash.' },
        { kind: 'p', text: '<strong>Step 2, arrange with repeats.</strong> If all ten trees were different there would be 10! orders. Swapping two ash trees changes nothing you can see, so divide by 5! for the ash, 3! for the elm and 2! for the linden: 10! / (5! 3! 2!) = 2,520 distinct orders. This is the permutations with repeated elements idea that trips students who reach for 10! straight away.' },
        { kind: 'p', text: '<strong>Step 3, use the complement.</strong> &ldquo;At least one ash&rdquo; is the opposite of &ldquo;no ash&rdquo;. Choosing three non-ash trees from the five others can be done in C(5, 3) = 10 ways, out of C(10, 3) = 120. So the probability of no ash is 10/120, and of at least one ash, 1 minus 10/120, about 0.917.' },
        { kind: 'p', text: '<strong>Step 4, connect to the data.</strong> The city-wide figure of 0.0716 for two green ash trees comes from exactly the step 1 method, with 81,895 in place of 5 and 305,969 in place of 10. The arithmetic is bigger; the idea is identical.' },
        { kind: 'p', text: '<strong>Try it yourself.</strong> (1) Add one bur oak to the street and redo part (a). (2) How many distinct orders are there now? (3) Using the city table, estimate the chance that three random Winnipeg trees include no green ash. Bring your answers to the free lesson and we will check them together.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests for Winnipeg students',
      h2: 'National math contests open to Winnipeg students',
      intro: 'Winnipeg students write the same CEMC contests as students across Canada, organised by the University of Waterloo&rsquo;s Centre for Education in Mathematics and Computing. We checked the 2026 to 2027 dates on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CEMC mathematics contests for 2026 to 2027 that suit Winnipeg students, with the dates CEMC lists for North and South America', head: ['Who', 'Contest', 'Format', 'Date'], rows: [
          ['Grades 7 and 8', 'Gauss', 'Multiple choice, 60 minutes', '10 to 21 May 2027'],
          ['Grades 9, 10, 11', 'Pascal, Cayley, Fermat', 'Multiple choice, 60 minutes', '23 and 24 February 2027'],
          ['Grades 9, 10, 11', 'Fryer, Galois, Hypatia', 'Written solutions, 75 minutes', '7 April 2027'],
          ['Final year of high school', 'Euclid', 'Answer and full-solution questions, 2.5 hours', '6 April 2027']
        ] },
        { kind: 'p', text: 'For a Winnipeg Grade 12 Pre-Calculus student the calendar lines up well. The January Pre-Calculus test falls on 28 January 2027; the Pascal, Cayley and Fermat contests come a month later for younger students, and the Euclid sits on 6 April 2027 between the two semester tests. Counting problems like the tree lesson appear in all of these contests, so contest practice doubles as course practice. CEMC says plainly that its contests are not tests or exams.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry is through school', p: 'A student cannot register for a CEMC contest alone. If a Winnipeg school does not take part, CEMC suggests looking for another local school that will let the student write there.' },
          { h3: 'Free past contests', p: 'CEMC offers ten years of past contests without registration. Our <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests preparation page</a> explains how we fit them around school.' },
          { h3: 'Only our own problems', p: 'In lessons we use contest-style problems written and labelled by us. CEMC papers and solutions are never copied, and we are not connected with CEMC.' }
        ] }
      ]
    },
    {
      id: 'price', tint: '', eyebrow: 'Math tutor price in Winnipeg',
      h2: 'Math tutor prices in Winnipeg: comparing like with like',
      intro: 'Our own fees sit in the fees section below, shown in your local currency, so there are no figures here. These are the points that make two offers comparable.',
      body: [
        { kind: 'table', caption: 'A comparison guide for Winnipeg families. The middle column describes our classes; we do not publish other tutors&rsquo; prices', head: ['Point to compare', 'Our classes', 'Why it matters'], rows: [
          ['Lessons per month', 'Eight live classes', 'Converts any price to a cost per lesson'],
          ['Who is in the lesson', 'Fifteen to twenty at one level, or one student', 'Level-matched groups move at a useful pace'],
          ['Manitoba knowledge', 'Grade 12 Essential, Applied and Pre-Calculus by name', 'Each Grade 12 course ends in a different provincial test'],
          ['Getting there', 'No travel; lessons at home', 'January travel across the city costs time'],
          ['Trying first', 'One free live lesson', 'You can judge the teaching before paying']
        ] },
        { kind: 'p', text: 'For most Winnipeg students, a group class at one level gives steady progress and regular practice. One to one earns its cost in short, specific bursts: the weeks before the January or June provincial test, a unit such as logarithms or combinatorics that will not click, or a move from Applied to Pre-Calculus Mathematics. Many families use both, in that order.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From early numeracy to Grade 12 Pre-Calculus',
    intro: 'Bands are approximate. The free lesson sets the starting point by what the student can already do and explain.',
    cols: [
      { band: 'Kindergarten to Grade 3', h3: 'Early numeracy', p: 'Counting, place value and simple operations, the ground the Grade 3 numeracy assessment covers.', courses: ['early-math-foundations', 'mental-maths-mastery-kids'] },
      { band: 'Grades 4 to 8', h3: 'Number sense', p: 'Fractions, decimals, integers and equations, with the number skills Manitoba assesses in Grade 7.', courses: ['elementary-mathematics-complete-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Grades 9 to 11', h3: 'Choosing a stream', p: 'Grade 9 math, then Applied or Pre-Calculus routes, with algebra, linear relations and trigonometry.', courses: ['complete-high-school-mathematics-mastery', 'maths-through-coding'] },
      { band: 'Grade 12', h3: 'The 40S courses', p: 'Applied, Essential or Pre-Calculus Mathematics, with counting, logarithms and trigonometry, plus contest problems for keen students.', courses: ['complete-high-school-mathematics-mastery', 'waterloo-math-contests-gauss-to-euclid-course'] }
    ]
  },

  ai: {
    eyebrow: 'Math and AI',
    h2: 'Can a Winnipeg student let an AI do the counting?',
    intro: 'It can do the arithmetic. It cannot decide what is being counted.',
    p1: 'Ask an AI tool for the chance that two Winnipeg trees match and it may square the shares and call the result exact, or treat &ldquo;American Elm&rdquo; and &ldquo;Brandon American elm&rdquo; as unrelated without saying so. A student who has counted pairs by hand knows why combinations matter and what a label really measures.',
    p2: 'Our teachers ask students to estimate the answer first, then count, then explain the result in a sentence. Older students may use AI tools within the age rules we keep to, and only to check finished work. Work handed in at school always belongs to the student.',
    closer: 'Manitoba&rsquo;s Pre-Calculus course asks students to apply the counting principles; choosing what deserves counting stays a human job.',
    blogAnchor: 'why careful thinking outlasts any AI shortcut'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How live online math works for Winnipeg students',
    intro: 'From Transcona to Charleswood, a Winnipeg student joins from home, which matters most in January.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'A clock that stays put', p: 'Manitoba says its clocks will not revert to standard time on 1 November 2026, so Winnipeg stays on UTC-5 all year. India is 10 hours 30 minutes ahead, and in winter Winnipeg now shares Toronto&rsquo;s clock.' },
      { h3: 'Working on screen', p: 'Every step goes on a shared board the teacher watches, so a miscounted case is caught before it becomes a wrong answer.' },
      { h3: 'Manitoba course names', p: 'Teachers plan from the student&rsquo;s actual course: Grade 9 math, then Applied, Essential or Pre-Calculus.' },
      { h3: 'Winnipeg numbers', p: 'Mobiles on 204, 431 or 584 work in the form. Type the ten digits; the country code is already in place.' },
      { h3: 'Free start', p: 'The first lesson is free and complete, ending with a suggested course, level and time. No card is requested.' }
    ],
    spec: { title: 'No Winnipeg centre', p: 'Modern Age Coders has no tutoring centre in Winnipeg and does not claim one. Our teachers teach live online from India; a student needs a computer, a microphone and a steady connection.' }
  },

  fees: {
    h2: 'Math tutoring fees for Winnipeg families',
    intro: 'Free first lesson, then two monthly choices, each shown in your currency.',
    first: 'One full live lesson without charge, ending in a course and level suggestion.',
    group: 'The monthly fee for eight live classes with fifteen to twenty students at one level.',
    private: 'The monthly fee for eight lessons with a teacher of your own.',
    closer: 'Winnipeg families pay the same as families anywhere else in Canada. Billing starts only after the free lesson, once course and time are settled; holidays and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free math lesson in Winnipeg',
    intro: 'Tell us the grade and, in high school, the course. A Grade 2 child might start with counting games; a Grade 12 student might start with the tree inventory and a combination.',
    success: 'Thank you. The team will be in touch soon about a math lesson for Winnipeg.'
  },

  faq: {
    h2: 'Winnipeg math tutoring questions',
    intro: 'What Winnipeg parents and students ask us most often.',
    items: [
      { q: 'Do you offer a math tutor in Winnipeg?', a: 'Yes, online. There is no Winnipeg office. A teacher teaches every lesson live, to one student or to a group of fifteen to twenty at one level.' },
      { q: 'What does a math tutor in Winnipeg cost with you?', a: 'The fees section of this page shows the free first lesson and the monthly group and one-to-one fees in your currency. You pay nothing before the free lesson.' },
      { q: 'When are the Grade 12 provincial math tests?', a: 'Manitoba lists Applied on 26 January and 17 June 2027, Essential on 27 January and 16 June 2027, and Pre-Calculus on 28 January and 15 June 2027.' },
      { q: 'How much do the Grade 12 tests count?', a: 'Manitoba says they count for 20 per cent of the final grade in Applied, Pre-Calculus and Essential Mathematics. They are marked locally by teachers.' },
      { q: 'Do you help with Grade 12 Pre-Calculus Mathematics?', a: 'Yes, beside the school course: trigonometry, logarithms and inverses, transformations and counting, as in the tree lesson on this page.' },
      { q: 'Are your lessons worth Manitoba credits?', a: 'They are not: we do not grant Manitoba credits. Only the school awards credits and grades, and it also runs the provincial tests.' },
      { q: 'My child is in Grade 9 this year. Is the course changing?', a: 'Manitoba is piloting two new Grade 9 math courses with more financial literacy in 2026/27, with full implementation planned for 2027/28. Ask the school which course your child is in.' },
      { q: 'What times are lessons for Winnipeg students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Manitoba no longer changes its clocks, so times hold steady.' },
      { q: 'Do you teach students outside Winnipeg, in Steinbach or Brandon?', a: 'Yes. Lessons are online, so students anywhere in Manitoba join the same classes on the same clock.' },
      { q: 'Can my Grade 7 child enter a math contest?', a: 'Yes. CEMC\'s Gauss contest is for Grades 7 and 8, from 10 to 21 May 2027, entered through the school. Our preparation uses original puzzles written by our teachers.' }
    ]
  },

  next: {
    eyebrow: 'More for Winnipeg and Canada',
    h2: 'Other pages for Winnipeg math students',
    html: 'Start with <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring for Canada</a>, then compare courses across provinces on <a class="cg-inline-link" href="/canada-high-school-math-courses-compared">high school math courses compared</a>. Contest students can read <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation</a>, and families planning around the time zones can read <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones and online class times</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Winnipeg math and Canada',
  footerPlaces: [
    { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-high-school-math-courses-compared', label: 'Math courses compared' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Class times' }
  ],

  personalityCss: `
.cg-root.cg-mtuw .cg-hero h1 { font-weight: 700; letter-spacing: -0.014em; line-height: 1.07; }
.cg-root.cg-mtuw .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mtuw .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-mtuw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtuw .cg-table caption { text-align: left; font-weight: 630; }
.cg-root.cg-mtuw #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.6; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-mtuw #worked strong { color: var(--cg-accent); }
.cg-root.cg-mtuw .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Manitoba, read 23 October 2026 from edu.gov.mb.ca and saved raw: assessment schedule 2026/27 (Grade 3 numeracy collection 19 October to 27 November 2026; Grade 7 mathematics 18 January to 26 February 2027; Grade 12 Applied 26 January and 17 June, Essential 27 January and 16 June, Pre-Calculus 28 January and 15 June 2027; end of each semester; marked locally; 20 per cent of the final grade); Framework for Learning (two new Grade 9 courses piloted 2026/27, full 2027/28; Grade 12 course list; Pre-Calculus course code 3939, one credit, course overview; Applied 3903); Manitoba news release 75397 (clocks will not revert on 1 November 2026); UTC-5 all year and area codes 204, 431, 584 (facts-geo.md); CEMC 2026-27 dates and the through-a-school rule.',
    localProject: 'City of Winnipeg open data, Tree Inventory (Open Government Licence - Winnipeg, commercial use allowed), grouped counts fetched with the SODA API on 23 October 2026 and analysed with our scripts trees.py and worked.py (python -I): 305,969 trees, 197 common-name labels; green ash 81,895 (26.77%), American Elm 39,661 (12.96%); chance two random trees share a label 0.1102 and both green ash 0.0716; 160 neighbourhoods with 500+ trees, Maybank 0.0613 to Southland Park 0.431; 690 trees without a neighbourhood; eight or more elm labels. Labelled as ours. Lesson family: combinations, permutations with repeated elements, probability from counts.',
    requiredMentions: [
      '305,969 trees under 197 common-name labels',
      'about 11 times in 100',
      'both are green ash alone is 0.0716',
      'Southland Park, 452 of 696 trees',
      'Maybank',
      '690 trees carry no neighbourhood',
      '10! / (5! 3! 2!) = 2,520',
      'The probability is 14/45',
      'Kingston Crescent',
      'Thursday 28 January and Tuesday 15 June 2027'
    ],
    sources: [
      { claim: 'City of Winnipeg open data: Tree Inventory (description, department, update interval, licence).', url: 'https://data.winnipeg.ca/Parks/Tree-Inventory/hfwk-jp4h' },
      { claim: 'City of Winnipeg: Open Government Licence - Winnipeg (commercial use, attribution, non-endorsement).', url: 'https://data.winnipeg.ca/open-data-licence' },
      { claim: 'Manitoba Education and Early Childhood Learning: provincial assessment programme and 2026/27 schedule.', url: 'https://www.edu.gov.mb.ca/k12/assess/index.html' },
      { claim: 'Manitoba Framework for Learning: curriculum updates 2026/27 (new Grade 9 math courses).', url: 'https://www.edu.gov.mb.ca/k12/cur/math/index.html' },
      { claim: 'Manitoba Framework for Learning: Grade 12 Pre-Calculus Mathematics (course code, credit, overview).', url: 'https://www.edu.gov.mb.ca/k12/framework/english/math/grade_12/precal.html' },
      { claim: 'Manitoba Framework for Learning: Grade 12 mathematics course list.', url: 'https://www.edu.gov.mb.ca/k12/framework/english/math/math_gr12.html' },
      { claim: 'Manitoba news release: clocks will not revert to standard time on 1 November 2026.', url: 'https://news.gov.mb.ca/news/?item=75397' },
      { claim: 'CEMC: contest dates for 2026/27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests' }
    ],
    rejectedClaims: [
      'Any Winnipeg or Manitoba population figure: StatCan was not reachable live.',
      'Tree health, pests or disease: the file has a tag column related to tree disease; it is not used.',
      'That the 197 labels are 197 species: refused; several labels name the same kind of tree.',
      'That our lessons earn Manitoba credits or affect provincial test results: refused.',
      'Grade 12 provincial test format details (question counts, calculators): not read in a saved source, so not printed.',
      'Names of Winnipeg schools, division results or private people: not used.',
      'Any affiliation with the City of Winnipeg, Manitoba Education and Early Childhood Learning or CEMC.'
    ]
  }
};
